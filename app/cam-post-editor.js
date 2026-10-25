/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-post-editor.js — the post editor of PartCraft's Manufacture workspace (0.7 LC.15): a dialog with the post's text, a line
 * that says whether it reads (and where it does not), a preview of the G-code it writes for a small sample program or for this
 * part's own program, and the list of events and variables. The format and the engine are cam-postdef.js; the built-in posts are
 * cam-posts-builtin.js. DOM only here; `host` is the workspace host (host.el builds elements, host.downloadBlob saves a file).
 *
 *   openPostEditor(host, {text, isNew, program, exists(id), onSave(text), onDelete(), fileName}) → Promise<void>
 *   readPostFile(file) → Promise<string>   a post file from the disk (text, ≤ 60 000 characters)
 */
import { parsePost, renderPost, PostError, POST_EVENTS, POST_VARS } from './cam-postdef.js';
import { samplePostProgram } from './cam-posts-builtin.js';
import { POST_LIMITS } from './cam.js';
import { t } from './i18n.js';

const PREVIEW_LINES = 160;

export function readPostFile(file) {
  return new Promise((resolve, reject) => {
    if (file.size > POST_LIMITS.text) { reject(new Error(t('cam.post.editor.file_big'))); return; }
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).replace(/\r\n?/g, '\n'));
    r.onerror = () => reject(new Error(t('cam.post.editor.file_read')));
    r.readAsText(file);
  });
}

/** One check of a text: {def} when it reads, {error, line} when it does not. */
export function checkPost(text) {
  if (text.length > POST_LIMITS.text) return { error: t('mfg.study.post_text'), line: 1 };
  try { return { def: parsePost(text) }; } catch (e) { return { error: e.message, line: e instanceof PostError ? e.line : 1 }; }
}

export function openPostEditor(host, { text, isNew = false, program = null, exists = () => false, onSave, onDelete = null, fileName = 'post' }) {
  const { el } = host;
  return new Promise((resolve) => {
    const dlg = el('dialog', { className: 'pc-dialog', 'aria-labelledby': 'pc-pe-title', dataset: { mpostEditor: '1' } });
    for (const [k, v] of [['width', 'min(60rem, 96vw)'], ['max-height', '92vh'], ['padding', '1rem'], ['overflow', 'auto'], ['color', 'inherit'], ['background', 'var(--sheet, Canvas)']]) dlg.style.setProperty(k, v);
    const area = el('textarea', { className: 'pc-input', id: 'pc-pe-text', rows: 24, wrap: 'off', 'aria-describedby': 'pc-pe-status', dataset: { mpostText: '1' } });
    area.value = text;
    area.spellcheck = false;
    // i18n-ignore: a font list
    for (const [k, v] of [['font-family', 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'], ['font-size', '.8125rem'], ['width', '100%'], ['tab-size', '2'], ['white-space', 'pre'], ['overflow', 'auto']]) area.style.setProperty(k, v);
    const status = el('p', { className: 'pc-note', id: 'pc-pe-status', role: 'status', dataset: { mpostStatus: '1' } });
    const jump = el('button', { type: 'button', className: 'pc-btn', dataset: { mpostJump: '1' } }, t('cam.post.editor.go_to_line'));
    const prog = el('select', { className: 'pc-select', id: 'pc-pe-prog', 'aria-label': t('cam.post.editor.preview_of') },
      el('option', { value: 'sample' }, t('cam.post.editor.sample')), ...(program ? [el('option', { value: 'part' }, t('cam.post.editor.this_part'))] : []));
    if (program) prog.value = 'part';
    const pre = el('pre', { className: 'pc-note', dataset: { mpostPreview: '1' }, tabindex: 0, 'aria-label': t('cam.post.editor.preview') });
    // i18n-ignore: a font list
    for (const [k, v] of [['font-family', 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'], ['font-size', '.75rem'], ['max-height', '16rem'], ['overflow', 'auto'], ['margin', '0'], ['white-space', 'pre']]) pre.style.setProperty(k, v);
    const note = el('p', { className: 'pc-note' }, t('cam.post.editor.verify'));
    // the reference: every event and the variables it sees
    const ref = el('details', { dataset: { mpostRef: '1' } }, el('summary', {}, t('cam.post.editor.reference')),
      el('p', { className: 'pc-note' }, t('cam.post.editor.reference_how')),
      el('dl', { className: 'pc-dl' }, ...Object.entries(POST_EVENTS).flatMap(([ev, groups]) => [
        el('dt', {}, 'on ' + ev), el('dd', {}, [...new Set(groups.flatMap((g) => POST_VARS[g]))].join('  ')),
      ])));
    const save = el('button', { type: 'button', className: 'pc-btn is-primary', dataset: { mpostSave: '1' } }, t('cam.post.editor.save'));
    const cancel = el('button', { type: 'button', className: 'pc-btn', dataset: { mpostCancel: '1' } }, t('cam.post.editor.cancel'));
    const exportBtn = el('button', { type: 'button', className: 'pc-btn', dataset: { mpostExport: '1' } }, t('cam.post.editor.export'));
    const del = onDelete ? el('button', { type: 'button', className: 'pc-btn is-danger', dataset: { mpostDelete: '1' } }, t('cam.post.editor.delete')) : null;
    dlg.append(
      el('h2', { id: 'pc-pe-title', className: 'pc-props-sub' }, isNew ? t('cam.post.editor.title_new') : t('cam.post.editor.title')),
      el('p', { className: 'pc-note' }, t('cam.post.editor.intro')),
      el('label', { htmlFor: 'pc-pe-text' }, t('cam.post.editor.text')), area, status, el('div', { className: 'pc-actions' }, jump),
      ref,
      el('div', { className: 'pc-props' }, el('label', { htmlFor: 'pc-pe-prog' }, t('cam.post.editor.preview_of')), prog), pre, note,
      el('div', { className: 'pc-actions' }, save, exportBtn, ...(del ? [del] : []), cancel));

    let cur = { def: null, error: null, line: 1 };
    const refresh = () => {
      cur = checkPost(area.value);
      if (cur.def) {
        const d = cur.def;
        const clash = (isNew || d.id !== originalId) && exists(d.id);
        status.textContent = clash ? t('cam.post.editor.id_taken', { id: d.id }) : t('cam.post.editor.ok', { name: d.name, ext: d.ext, n: Object.keys(d.events).length });
        status.classList.toggle('is-error', clash);
        jump.hidden = true; save.disabled = clash;
        let out;
        try { out = renderPost(d, prog.value === 'part' && program ? program : samplePostProgram(), { name: 'Part' }).text; } catch (e) { out = t('cam.post.editor.run_failed', { error: e.message }); }
        const lines = out.split('\n');
        pre.textContent = lines.length > PREVIEW_LINES ? lines.slice(0, PREVIEW_LINES).join('\n') + '\n' + t('cam.post.editor.more_lines', { n: lines.length - PREVIEW_LINES }) : out;
      } else {
        status.textContent = t('cam.post.editor.bad', { line: cur.line, error: cur.error });
        status.classList.add('is-error');
        jump.hidden = false; save.disabled = true;
      }
    };
    const originalId = (checkPost(text).def || {}).id || '';
    let timer = 0;
    area.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(refresh, 180); });
    prog.addEventListener('change', refresh);
    jump.addEventListener('click', () => {
      const lines = area.value.split('\n');
      let at = 0;
      for (let k = 0; k < Math.min(cur.line - 1, lines.length); k++) at += lines[k].length + 1;
      area.focus(); area.setSelectionRange(at, at + (lines[cur.line - 1] || '').length);
    });
    const close = () => { clearTimeout(timer); if (dlg.open) dlg.close(); dlg.remove(); resolve(); };
    cancel.addEventListener('click', close);
    dlg.addEventListener('cancel', (ev) => { ev.preventDefault(); close(); });
    save.addEventListener('click', () => { refresh(); if (!cur.def || save.disabled) return; const ok = onSave(area.value); if (ok !== false) close(); });
    exportBtn.addEventListener('click', () => host.downloadBlob((cur.def ? cur.def.id : fileName) + '.cpost', new Blob([area.value.endsWith('\n') ? area.value : area.value + '\n'], { type: 'text/plain' }), 'text/plain'));
    if (del) del.addEventListener('click', () => { if (onDelete() !== false) close(); });
    document.body.append(dlg);
    refresh();
    dlg.showModal();
    area.focus();
  });
}
