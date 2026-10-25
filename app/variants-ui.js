/* SPDX-License-Identifier: Apache-2.0 */
/**
 * variants-ui.js — the "Variant pack" dialog of the Configurations block (0.7 W3.19): choose the configurations and the files,
 * build each variant with the kernel in use, download one zip. DOM through ui-util el(); the work is variants.js.
 *
 *   openVariantPack({ ask, status, download, part(), buildPart(part) → regen, stepFor(part, regen) → STEP text | null, fileBase() })
 */
import { el } from './ui-util.js';
import { buildPack, packZip, PACK_FORMATS } from './variants.js';
import { t } from './i18n.js';

const kinds = () => ({ step: t('variants.ui.step'), ifc: t('variants.ui.ifc'), dwg: t('variants.ui.dwg'), preview: t('variants.ui.preview') });

export async function openVariantPack(h) {
  const part = h.part();
  const rows = part.configs?.rows || [];
  if (!rows.length) { h.status(t('variants.err.none'), true); return; }
  const check = (label, checked, data) => {
    const i = el('input', { type: 'checkbox', checked, dataset: data });
    return { i, label: el('label', { className: 'pc-check' }, i, label) };
  };
  const cfgs = rows.map((r) => check(r.name, true, { variantConfig: r.name }));
  const fmts = Object.entries(kinds()).map(([k, label]) => ({ k, ...check(label, true, { variantFormat: k }) }));
  const item = check(t('variants.ui.item'), true, { variantItem: '' });
  const body = el('div', { className: 'pc-form', dataset: { variantPack: '' } },
    el('p', { className: 'pc-muted' }, t('variants.ui.intro')),
    el('p', { className: 'pc-props-sub' }, t('variants.ui.configs')), el('div', { className: 'pc-checks' }, ...cfgs.map((c) => c.label)),
    el('p', { className: 'pc-props-sub' }, t('variants.ui.files')), el('div', { className: 'pc-checks' }, ...fmts.map((c) => c.label), item.label),
    el('p', { className: 'pc-muted' }, t('variants.ui.note')));
  const key = await h.ask({ title: t('variants.ui.title'), body, buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['make', t('variants.ui.make'), 'pc-btn is-primary']] });
  if (key !== 'make') return;
  const names = rows.filter((_, i) => cfgs[i].i.checked).map((r) => r.name);
  const formats = fmts.filter((f) => f.i.checked).map((f) => f.k).filter((k) => PACK_FORMATS.includes(k));
  if (!names.length) { h.status(t('variants.err.nothing'), true); return; }
  h.status(t('variants.ui.building', { done: 0, total: names.length }), true);
  let res;
  try {
    res = await buildPack(part, {
      names, formats, item: item.i.checked,
      build: (p) => h.buildPart(p), step: h.stepFor ? (p, r) => h.stepFor(p, r) : null,
      progress: (done, total, name) => { h.status(t('variants.ui.building_one', { done: done + 1, total, name }), true); return new Promise((r) => setTimeout(r, 0)); },
    });
  } catch (e) { h.status(t('variants.ui.failed', { error: e.message }), true); return; }
  if (!res.variants.length) { h.status(t('variants.ui.none', { error: res.problems.map((p) => (p.name ? p.name + ': ' : '') + p.error).join(' ') }), true); return; }
  const name = `${h.fileBase()} variants.zip`;   // i18n-ignore: a file name
  h.download(packZip(res), name, 'application/zip');
  h.status(t('variants.ui.done', { file: name, n: res.variants.length, files: res.files.length, bad: res.problems.length ? t('variants.ui.not_built', { n: res.problems.length }) : '' }), true);
  if (res.problems.length) {
    await h.ask({ title: t('variants.ui.problems_title'), body: el('ul', {}, ...res.problems.map((p) => el('li', {}, (p.name ? p.name + ': ' : '') + p.error))), buttons: [['cancel', t('app.btn.close'), 'pc-btn is-primary']] });
  }
}
