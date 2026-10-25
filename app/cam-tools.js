/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-tools.js — PartCraft's cutting tools and feeds/speeds (DOM-free).
 *
 *   tool {id, number (T word, 1–999), kind flat|ball|bull|drill|chamfer|face, name, d (mm), flutes, fluteLen,
 *         cornerR (bull), angle (included: drill point 118, chamfer 90), tipD (chamfer), coating material
 *         carbide|hss, vc (m/min) | null, fz (mm/tooth; drills: mm/rev) | null, rpm | null, feed (mm/min) | null}
 *   speeds(tool, material, machine) → {rpm, feed, plunge, ramp, vc, fz, clamped, source}
 *
 * Spindle speed n = 1000·vc / (π·d) and feed = n · z · fz (drills: feed = n · f, f per revolution) — the
 * standard relations. When n passes the machine's maximum it is clamped and the feed follows it (chip load
 * kept). Plunge = feed / 3, ramp = feed / 2.
 *
 * Default cutting speeds and chip loads are STARTING VALUES (carbide end mills; HSS at 0.35 × the cutting
 * speed), taken toward the conservative end of the ranges in Machinery's Handbook (speeds and feeds
 * tables) and end-mill makers' published charts (Harvey Tool, Kennametal). They are not tuned for any
 * machine; check your tool maker's chart and override vc/fz/rpm/feed per tool.
 */
import { t } from './i18n.js';

// labels are getters (read on use: workers import this before their language catalog arrives)
export const KINDS = {
  flat: { get label() { return t('mfg.tool.kind.flat'); }, mills: true },
  ball: { get label() { return t('mfg.tool.kind.ball'); }, mills: true },
  bull: { get label() { return t('mfg.tool.kind.bull'); }, mills: true },
  drill: { get label() { return t('mfg.tool.kind.drill'); }, mills: false },
  chamfer: { get label() { return t('mfg.tool.kind.chamfer'); }, mills: true },
  face: { get label() { return t('mfg.tool.kind.face'); }, mills: true },
};

// vc: m/min for carbide milling; fzk: chip load per mm of diameter (mm/tooth), clamped to [fzMin, fzMax];
// drill: vc factor for drilling and feed per rev per mm of diameter.
export const MATERIALS = {
  aluminum: { get label() { return t('mfg.material.aluminum'); }, vc: 200, fzk: 0.005, fzMin: 0.008, fzMax: 0.1, drillVc: 0.6, frk: 0.02 },
  steel: { get label() { return t('mfg.material.steel'); }, vc: 100, fzk: 0.0035, fzMin: 0.006, fzMax: 0.08, drillVc: 0.6, frk: 0.015 },
  stainless: { get label() { return t('mfg.material.stainless'); }, vc: 70, fzk: 0.003, fzMin: 0.005, fzMax: 0.06, drillVc: 0.55, frk: 0.012 },
  brass: { get label() { return t('mfg.material.brass'); }, vc: 180, fzk: 0.005, fzMin: 0.008, fzMax: 0.1, drillVc: 0.6, frk: 0.02 },
  plastic: { get label() { return t('mfg.material.plastic'); }, vc: 250, fzk: 0.008, fzMin: 0.02, fzMax: 0.2, drillVc: 0.6, frk: 0.03 },
  wood: { get label() { return t('mfg.material.wood'); }, vc: 400, fzk: 0.015, fzMin: 0.03, fzMax: 0.3, drillVc: 0.5, frk: 0.04 },
};
// English, kept for importers; the UI and speeds() use speedsSource() (in the reader's language)
export const SPEEDS_SOURCE = 'Starting values toward the conservative end of the ranges in Machinery’s Handbook and end-mill makers’ charts (Harvey Tool, Kennametal); check your tool maker’s numbers.';   // i18n-ignore: English constant kept for importers; text from speedsSource()
export const speedsSource = () => t('mfg.tool.speeds_source');
export const HSS_FACTOR = 0.35;

let seq = 0;
export function newTool(kind = 'flat', props = {}) {
  const base = {
    id: props.id || 't' + (++seq) + Math.random().toString(36).slice(2, 6), number: 1, kind, name: '', d: 6, flutes: 3, fluteLen: 20,
    cornerR: 0, angle: kind === 'drill' ? 118 : kind === 'chamfer' ? 90 : 0, tipD: kind === 'chamfer' ? 0 : 0, material: 'carbide',
    vc: null, fz: null, rpm: null, feed: null,
  };
  if (kind === 'drill') { base.flutes = 2; base.fluteLen = 40; }
  if (kind === 'face') { base.d = 50; base.flutes = 5; base.fluteLen = 6; }
  if (kind === 'chamfer') { base.d = 12; base.flutes = 4; base.fluteLen = 6; }
  if (kind === 'bull') base.cornerR = 1;
  const t = { ...base, ...props, kind };
  if (!t.name) t.name = describeTool(t);
  return t;
}

const fmt = (v) => String(+Number(v).toFixed(3));
// The default tool NAME (data saved in the study, and written into G-code comments by cam-post.js): kept in English.
const KIND_WORD = { flat: 'flat end mill', ball: 'ball end mill', face: 'face mill' };   // i18n-ignore: tool name data / G-code comment
export function describeTool(t) {
  const k = KIND_WORD[t.kind] || t.kind;
  if (t.kind === 'bull') return `⌀${fmt(t.d)} bull nose R${fmt(t.cornerR)}`;   // i18n-ignore: tool name data / G-code comment
  if (t.kind === 'chamfer') return `⌀${fmt(t.d)} chamfer mill ${fmt(t.angle)}°`;   // i18n-ignore: tool name data / G-code comment
  if (t.kind === 'drill') return `⌀${fmt(t.d)} drill ${fmt(t.angle)}°`;   // i18n-ignore: tool name data / G-code comment
  return `⌀${fmt(t.d)} ${k}`;
}

/** Problems with a tool (null when fine). */
export function validateTool(tool) {
  const T = tool;
  if (!KINDS[T.kind]) return t('mfg.tool.err.kind');
  if (!(T.d > 0.05 && T.d <= 250)) return t('mfg.tool.err.d');
  if (!(Number.isInteger(T.number) && T.number >= 1 && T.number <= 999)) return t('mfg.tool.err.number');
  if (!(Number.isInteger(T.flutes) && T.flutes >= 1 && T.flutes <= 20)) return t('mfg.tool.err.flutes');
  if (!(T.fluteLen > 0 && T.fluteLen <= 500)) return t('mfg.tool.err.flute_len');
  if (T.kind === 'bull' && !(T.cornerR > 0 && T.cornerR < T.d / 2)) return t('mfg.tool.err.corner');
  if (T.kind === 'drill' && !(T.angle >= 60 && T.angle <= 180)) return t('mfg.tool.err.drill_angle');
  if (T.kind === 'chamfer' && !(T.angle >= 20 && T.angle <= 150)) return t('mfg.tool.err.chamfer_angle');
  if (T.kind === 'chamfer' && !(T.tipD >= 0 && T.tipD < T.d)) return t('mfg.tool.err.tip');
  for (const k of ['vc', 'fz', 'rpm', 'feed']) if (T[k] !== null && !(T[k] > 0 && T[k] < 1e6)) return t('mfg.tool.err.override', { name: k });
  return null;
}

const num = (v, lo, hi, what) => {
  if (typeof v !== 'number' || !Number.isFinite(v) || v < lo || v > hi) throw new Error(t('mfg.tool.err.range', { what }));
  return v;
};
const optNum = (v, what) => (v === null || v === undefined ? null : num(v, 1e-6, 1e6, what));

/** A tool from untrusted data (study files) — every field range-checked. */
export function readTool(j) {
  if (!j || typeof j !== 'object') throw new Error(t('mfg.tool.err.not_object'));
  if (typeof j.id !== 'string' || !/^[A-Za-z0-9_-]{1,40}$/.test(j.id)) throw new Error(t('mfg.tool.err.id'));
  if (!KINDS[j.kind]) throw new Error(t('mfg.tool.err.unknown_kind'));
  const w = (key) => t('mfg.tool.f.' + key);
  const tool = {
    id: j.id, kind: j.kind, number: num(j.number, 1, 999, w('number')), name: String(j.name || '').replace(/[\u0000-\u001f\u007f]/g, '').slice(0, 80),
    d: num(j.d, 0.05, 250, w('diameter')), flutes: num(j.flutes, 1, 20, w('flutes')), fluteLen: num(j.fluteLen, 0.01, 500, w('flute_length')),
    cornerR: num(j.cornerR ?? 0, 0, 125, w('corner_radius')), angle: num(j.angle ?? 0, 0, 180, w('angle')), tipD: num(j.tipD ?? 0, 0, 250, w('tip_diameter')),
    material: j.material === 'hss' ? 'hss' : 'carbide',
    vc: optNum(j.vc, 'vc'), fz: optNum(j.fz, 'fz'), rpm: optNum(j.rpm, 'rpm'), feed: optNum(j.feed, 'feed'),
  };
  if (!Number.isInteger(tool.number) || !Number.isInteger(tool.flutes)) throw new Error(t('mfg.tool.err.whole'));
  const v = validateTool(tool);
  if (v) throw new Error(t('mfg.tool.err.bad', { why: v }));
  if (!tool.name) tool.name = describeTool(tool);
  return tool;
}

/** Spindle speed and feeds for a tool in a material on a machine {maxRpm, minRpm}. */
export function speeds(tool, material = 'aluminum', machine = {}) {
  const M = MATERIALS[material] || MATERIALS.aluminum;
  const drill = tool.kind === 'drill';
  const hss = tool.material === 'hss' ? HSS_FACTOR : 1;
  // a chamfer or ball cuts at a smaller effective diameter; we use the nominal one (conservative for rpm)
  const vc = tool.vc ?? M.vc * hss * (drill ? M.drillVc : 1);
  const fz = tool.fz ?? (drill ? M.frk * tool.d : Math.min(M.fzMax, Math.max(M.fzMin, M.fzk * tool.d)));
  let rpm = tool.rpm ?? (1000 * vc) / (Math.PI * tool.d);
  const maxRpm = machine.maxRpm || 24000, minRpm = machine.minRpm || 0;
  let clamped = null;
  if (rpm > maxRpm) { rpm = maxRpm; clamped = 'max'; } else if (rpm < minRpm) { rpm = minRpm; clamped = 'min'; }
  rpm = Math.round(rpm);
  const feed = tool.feed ?? (drill ? rpm * fz : rpm * tool.flutes * fz);
  return {
    rpm, feed: round1(feed), plunge: round1(drill ? feed : feed / 3), ramp: round1(feed / 2),
    vc: (Math.PI * tool.d * rpm) / 1000, fz, clamped, source: speedsSource(),
  };
}
const round1 = (v) => Math.round(v * 10) / 10;

/**
 * The tool's tip profile: h(ρ) = height of the cutting surface above the tip at radius ρ (∞ beyond the
 * cutting radius). Used by the stock simulation and the 3D drop cutter.
 */
export function profile(tool) {
  const R = tool.d / 2;
  switch (tool.kind) {
    case 'ball': return { R, h: (p) => (p > R ? Infinity : R - Math.sqrt(Math.max(0, R * R - p * p))) };
    case 'bull': {
      const rc = tool.cornerR, a = R - rc;
      return { R, h: (p) => (p > R ? Infinity : p <= a ? 0 : rc - Math.sqrt(Math.max(0, rc * rc - (p - a) * (p - a)))) };
    }
    case 'drill': {
      const k = 1 / Math.tan((tool.angle / 2) * Math.PI / 180);
      return { R, h: (p) => (p > R ? Infinity : p * k), tip: R * k };
    }
    case 'chamfer': {
      const rt = tool.tipD / 2, k = 1 / Math.tan((tool.angle / 2) * Math.PI / 180);
      return { R, h: (p) => (p > R ? Infinity : p <= rt ? 0 : (p - rt) * k) };
    }
    default: return { R, h: (p) => (p > R ? Infinity : 0) };
  }
}

/** A starter library (one of each kind) with T numbers 1–6. */
export function starterLibrary() {
  return [
    newTool('flat', { id: 'em6', number: 1, d: 6, flutes: 3, fluteLen: 20 }),
    newTool('flat', { id: 'em3', number: 2, d: 3, flutes: 2, fluteLen: 12 }),
    newTool('ball', { id: 'bm6', number: 3, d: 6, flutes: 2, fluteLen: 18 }),
    newTool('bull', { id: 'bn8', number: 4, d: 8, flutes: 4, fluteLen: 22, cornerR: 1 }),
    newTool('drill', { id: 'dr14', number: 5, d: 14, fluteLen: 60 }),
    newTool('chamfer', { id: 'ch90', number: 6, d: 12, angle: 90, tipD: 0, fluteLen: 6 }),
    newTool('face', { id: 'fm50', number: 7, d: 50, flutes: 5, fluteLen: 6 }),
  ];
}

// ---------------------------------------------------------------- tool libraries (0.7 LC.15)

export const LIBRARY_FORMAT = 'partcraft-tool-library';
export const LIBRARY_VERSION = 1;
export const LIBRARY_MAX = 500;
export const LIBRARY_BYTES = 2e6;
/** Where a person's own tools are kept between parts (browser storage; a file via exportLibrary is the way to move them). */
export const LIBRARY_KEY = 'partcraft.toollib';

/** The tools as a library file (JSON text). Ids are left out: the file's tools get new ones where they land. */
export function exportLibrary(tools, name = '') {
  return JSON.stringify({ format: LIBRARY_FORMAT, version: LIBRARY_VERSION, name: String(name || '').replace(/[\u0000-\u001f\u007f]/g, '').slice(0, 80), speedsNote: SPEEDS_SOURCE, tools: tools.map(({ id, ...rest }) => rest) }, null, 1) + '\n';
}
/** A library file (JSON text or an object) → tools with ids of their own; every tool range-checked like a study's. */
export function readLibrary(src) {
  let j = src;
  if (typeof src === 'string') {
    if (src.length > LIBRARY_BYTES) throw new Error(t('mfg.lib.err.big'));
    try { j = JSON.parse(src); } catch { throw new Error(t('mfg.lib.err.json')); }
  }
  if (!j || typeof j !== 'object' || j.format !== LIBRARY_FORMAT) throw new Error(t('mfg.lib.err.format'));
  if (j.version !== LIBRARY_VERSION) throw new Error(j.version > LIBRARY_VERSION ? t('mfg.lib.err.newer') : t('mfg.lib.err.version'));
  if (!Array.isArray(j.tools) || j.tools.length > LIBRARY_MAX) throw new Error(t('mfg.lib.err.list'));
  return j.tools.map((x, k) => readTool({ ...x, id: 'lib' + k }));
}
const sameTool = (a, b) => ['kind', 'd', 'flutes', 'fluteLen', 'cornerR', 'angle', 'tipD', 'material', 'vc', 'fz', 'rpm', 'feed'].every((k) => a[k] === b[k]);
/**
 * Put tools into a list: a tool that is already there (same kind, size, flutes and overrides) is skipped; one whose T number is
 * taken gets the next free number; ids are made new. → {tools (the whole list), added, skipped, renumbered [{name, from, to}]}
 */
export function mergeTools(existing, incoming) {
  const out = existing.slice(), added = [], skipped = [], renumbered = [];
  const ids = new Set(out.map((x) => x.id)), nums = new Set(out.map((x) => x.number));
  let seq = 1;
  for (const tl of incoming) {
    if (out.some((x) => sameTool(x, tl))) { skipped.push(tl); continue; }
    let id;
    do { id = 'tl' + (seq++).toString(36) + Math.random().toString(36).slice(2, 5); } while (ids.has(id));
    let number = tl.number;
    if (nums.has(number)) {
      let n = 1;
      while (nums.has(n) && n <= 999) n++;
      if (n > 999) throw new Error(t('mfg.lib.err.numbers'));
      renumbered.push({ name: tl.name, from: number, to: n });
      number = n;
    }
    const copy = { ...tl, id, number };
    ids.add(id); nums.add(number); out.push(copy); added.push(copy);
  }
  return { tools: out, added, skipped, renumbered };
}
const store = () => { try { return globalThis.localStorage || null; } catch { return null; } };
/** My saved tools (empty where the browser keeps nothing; never throws). */
export function savedLibrary(storage = store()) {
  try {
    const raw = storage && storage.getItem(LIBRARY_KEY);
    return raw ? readLibrary(raw) : [];
  } catch { return []; }
}
/** Add tools to my saved library (the same rules as mergeTools). → {ok, added, skipped, renumbered} */
export function saveToLibrary(tools, storage = store()) {
  const m = mergeTools(savedLibrary(storage), tools);
  try {
    if (!storage) return { ok: false, added: [], skipped: [], renumbered: [] };
    storage.setItem(LIBRARY_KEY, exportLibrary(m.tools));
    return { ok: true, added: m.added, skipped: m.skipped, renumbered: m.renumbered };
  } catch { return { ok: false, added: [], skipped: [], renumbered: [] }; }
}
/** Take the tool at `index` out of my saved library. */
export function removeFromLibrary(index, storage = store()) {
  const list = savedLibrary(storage);
  if (!(index >= 0 && index < list.length)) return false;
  list.splice(index, 1);
  try { storage.setItem(LIBRARY_KEY, exportLibrary(list)); return true; } catch { return false; }
}
