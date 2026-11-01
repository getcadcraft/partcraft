/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — rows and notes are read by the assistant program and the panel formats them; the words the person reads are in lang/en.json (cost.*). */
/**
 * cost.js — what it costs to make the part, as you design (0.8 EG.76, session part_PART_2). DOM-free; first-order, from the built solid.
 *
 *   estimate(part, regen, opts) → { process, qty, currency, rows[{id, what, amount, basis}], unit, job, total, shares, drivers[], notes[] }
 *     process 'cnc': a block of stock (the part's box + an allowance on every face) bought by mass, cut away at a material removal rate, a
 *       time per hole, handling per part, a setup per job shared by the quantity
 *     process 'printed': filament by mass of the part's walls + infill, time at a volume rate, a setup per job
 *   rates = { currency, perKg: {material id: price}, cnc: { perHour, setup, handling (min), allowance (mm), finishing (× the removal time),
 *             holeMin (min per hole), mrr: {material id: mm³/min} }, print: { perHour, setup, mm3PerHour, fill (share of the volume printed) } }
 *   DEFAULT_RATES are PLACEHOLDERS (a typical small shop's order of magnitude, not a quote, not a price list): the panel says so and the rates
 *   are the person's to edit; they are saved in part.studies.cost with the process and the quantity (readCost).
 *   holeCount(part) → holes drilled or cut: hole features (× a pattern of them) and circles in cut extrusions' sketches.
 *   readCost(raw) → a clean { process, qty, rates? } (untrusted file); rowsText(est) → lines for the assistant and the panel.
 */
import { materialById } from './materials.js';
import { registerStudyReader } from './part.js';

export const PROCESSES = ['cnc', 'printed'];
export const DEFAULT_RATES = {
  currency: 'USD',
  perKg: { steel: 2.5, ss304: 6, al6061: 6, ti64: 90, abs: 25, pla: 22, nylon: 60 },
  cnc: { perHour: 70, setup: 60, handling: 6, allowance: 3, finishing: 1.25, holeMin: 0.5,
    mrr: { steel: 3000, ss304: 2000, al6061: 10000, ti64: 1000, abs: 12000, pla: 12000, nylon: 12000 } },
  print: { perHour: 4, setup: 5, mm3PerHour: 15000, fill: 0.35 },
};
export const LIMITS = { qty: 1e6, rate: 1e6 };

const num = (v, lo, hi) => typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi;
const r2 = (v) => Math.round(v * 100) / 100;
const merge = (base, over) => {
  const out = {};
  for (const k of Object.keys(base)) out[k] = base[k] && typeof base[k] === 'object' ? merge(base[k], over && typeof over[k] === 'object' ? over[k] : {}) : (over && over[k] !== undefined ? over[k] : base[k]);
  return out;
};

/** Holes the part has: hole features (a pattern of them counts each copy) and circles in the sketches of cut extrusions. */
export function holeCount(part) {
  const byId = new Map(part.features.map((f) => [f.id, f]));
  let n = 0;
  const holes = new Map();
  for (const f of part.features) {
    if (f.suppressed) continue;
    if (f.type === 'hole') holes.set(f.id, 1);
    else if (f.type === 'extrude' && f.op === 'cut') {
      const sk = byId.get(f.sketch)?.sketch;
      if (sk) holes.set(f.id, sk.entities.filter((e) => e.type === 'circle' && !e.construction).length);
    }
  }
  const patterned = new Set();
  for (const f of part.features) {
    if (f.suppressed || (f.type !== 'lpattern' && f.type !== 'cpattern')) continue;
    for (const id of f.seeds || []) if (holes.has(id)) { n += holes.get(id) * (Math.max(1, f.count) - 1); }
  }
  for (const v of holes.values()) n += v;
  return n;
}

function bboxOf(regen) {
  const b = regen?.stats?.bbox;
  if (b && b.min && b.max) return b;
  return null;
}

/** → the estimate; opts { process, qty, rates (partial: merged over DEFAULT_RATES), material (id; default the part's) }. Throws Error with .code. */
export function estimate(part, regen, opts = {}) {
  const process = opts.process || 'cnc';
  if (!PROCESSES.includes(process)) throw Object.assign(new Error('Unknown process "' + process + '".'), { code: 'invalid_argument', next: ['Use cnc or printed.'] });
  const qty = Math.round(opts.qty ?? 1);
  if (!num(qty, 1, LIMITS.qty)) throw Object.assign(new Error('The quantity must be a whole number from 1 to ' + LIMITS.qty + '.'), { code: 'invalid_argument', next: ['Give qty 1 or more.'] });
  const rates = merge(DEFAULT_RATES, opts.rates || {});
  const vol = regen?.stats?.volume, box = bboxOf(regen);
  if (!(vol > 0) || !box) throw Object.assign(new Error('The part has no solid to cost yet.'), { code: 'failed', next: ['Build the part first; fix any failing feature.'] });
  const matId = opts.material || part.material?.id || matFromName(part.material?.name) || null;
  const mat = matId ? materialById(matId) : null;
  const density = mat ? mat.density : (part.material?.density ? part.material.density * 1000 : null);   // kg/m³
  if (!density || !matId) throw Object.assign(new Error('The part has no material, so there is no mass or price.'), { code: 'invalid_argument', next: ['Set the part\'s material, or pass material (steel, ss304, al6061, ti64, abs, pla, nylon).'] });
  const price = rates.perKg[matId];
  if (!(price >= 0)) throw Object.assign(new Error('There is no price per kg for "' + matId + '".'), { code: 'invalid_argument', next: ['Give rates.perKg for it.'] });
  const rows = [], notes = [], drivers = [], size = [0, 1, 2].map((k) => box.max[k] - box.min[k]);
  let unit = 0, job = 0;
  const partKg = vol * density * 1e-9;
  if (process === 'cnc') {
    const c = rates.cnc, allow = c.allowance;
    const stock = size.map((s) => s + 2 * allow), stockVol = stock[0] * stock[1] * stock[2];
    const stockKg = stockVol * density * 1e-9, removal = stockVol - vol, mrr = c.mrr[matId];
    if (!(mrr > 0)) throw Object.assign(new Error('There is no removal rate for "' + matId + '".'), { code: 'invalid_argument', next: ['Give rates.cnc.mrr for it.'] });
    const holes = holeCount(part);
    const cutMin = removal / mrr * c.finishing, holeMin = holes * c.holeMin, minutes = cutMin + holeMin + c.handling;
    rows.push({ id: 'stock', what: 'Stock', amount: stockKg * price, basis: { box: stock.map(r2), volume_mm3: r2(stockVol), kg: r2(stockKg * 1000) / 1000, perKg: price } });
    rows.push({ id: 'cutting', what: 'Cutting', amount: cutMin / 60 * c.perHour, basis: { removal_mm3: r2(removal), mrr_mm3_min: mrr, finishing: c.finishing, minutes: r2(cutMin) } });
    if (holes) rows.push({ id: 'holes', what: 'Holes', amount: holeMin / 60 * c.perHour, basis: { holes, minutesEach: c.holeMin, minutes: r2(holeMin) } });
    rows.push({ id: 'handling', what: 'Handling', amount: c.handling / 60 * c.perHour, basis: { minutes: c.handling } });
    unit = rows.reduce((a, r) => a + r.amount, 0);
    job = c.setup;
    notes.push('A block of stock ' + stock.map(r2).join(' × ') + ' mm (the part\'s box plus ' + allow + ' mm on every face), bought by mass and cut away.');
    notes.push('Not in the estimate: tooling and fixtures, finishing (anodising, plating), inspection, scrap, tolerances tighter than a general machine can hold, programming time beyond the setup.');
    const cs = { stock: rows[0].amount, cutting: rows[1].amount + (holes ? rows[2].amount : 0) };
    drivers.push(removal / stockVol > 0.8 ? 'Most of the stock is cut away (' + Math.round(100 * removal / stockVol) + ' %): a smaller stock, a casting or a printed blank would change the cost most.' : 'Cutting time is ' + Math.round(100 * cs.cutting / (cs.cutting + cs.stock)) + ' % of the material-plus-cutting cost.');
    if (qty < 5) drivers.push('The setup of ' + c.setup + ' ' + rates.currency + ' is shared by only ' + qty + ' part' + (qty === 1 ? '' : 's') + '.');
  } else {
    const p = rates.print;
    const printed = vol * p.fill, kg = printed * density * 1e-9, hours = printed / p.mm3PerHour;
    rows.push({ id: 'material', what: 'Filament', amount: kg * price, basis: { printed_mm3: r2(printed), fill: p.fill, kg: r2(kg * 1000) / 1000, perKg: price } });
    rows.push({ id: 'machine', what: 'Machine time', amount: hours * p.perHour, basis: { hours: r2(hours), mm3PerHour: p.mm3PerHour, perHour: p.perHour } });
    unit = rows.reduce((a, r) => a + r.amount, 0);
    job = p.setup;
    if (!['abs', 'pla', 'nylon'].includes(matId)) notes.push('Printing in ' + matId + ' is not a filament process: the price per kg is that of the material as given.');
    notes.push('Walls plus infill are taken as ' + Math.round(p.fill * 100) + ' % of the part\'s volume; supports, failed prints and post-processing are not in the estimate.');
    drivers.push('Print time is ' + r2(hours) + ' h per part.');
  }
  const total = unit + job / qty;
  const shares = {};
  for (const r of rows) shares[r.id] = total > 0 ? r.amount / total : 0;
  shares.setup = total > 0 ? (job / qty) / total : 0;
  rows.push({ id: 'setup', what: 'Setup, shared', amount: job / qty, basis: { job, qty } });
  for (const r of rows) r.amount = r2(r.amount);
  notes.push('The rates are placeholders for a typical small shop, not a quote: set your own (they are saved with the part).');
  return { process, qty, currency: rates.currency, material: matId, partKg: Math.round(partKg * 1e5) / 1e5, volume_mm3: r2(vol), rows, unit: r2(unit), job: r2(job), total: r2(total), perPartAtQty: r2(total), shares, drivers, notes, rates };
}
function matFromName(name) {
  const n = String(name || '').toLowerCase();
  if (/6061|alumin/.test(n)) return 'al6061';
  if (/stainless|304/.test(n)) return 'ss304';
  if (/titanium|ti-?6/.test(n)) return 'ti64';
  if (/steel/.test(n)) return 'steel';
  if (/\babs\b/.test(n)) return 'abs';
  if (/\bpla\b/.test(n)) return 'pla';
  if (/nylon|\bpa\b/.test(n)) return 'nylon';
  return null;
}
export const materialOf = matFromName;

/** The study saved with the part (part.studies.cost): { process, qty, rates? (only what differs from the defaults) }. Untrusted. */
export function readCost(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('cost: not an object.');   // i18n-ignore: developer error
  const out = { process: PROCESSES.includes(raw.process) ? raw.process : 'cnc', qty: num(raw.qty, 1, LIMITS.qty) ? Math.round(raw.qty) : 1 };
  if (raw.rates && typeof raw.rates === 'object') {
    const rates = {};
    const copy = (src, dst, ref) => {
      for (const k of Object.keys(ref)) {
        if (!(k in src)) continue;
        if (ref[k] && typeof ref[k] === 'object') { if (src[k] && typeof src[k] === 'object') { dst[k] = {}; copy(src[k], dst[k], ref[k]); if (!Object.keys(dst[k]).length) delete dst[k]; } }
        else if (k === 'currency') { if (typeof src[k] === 'string' && /^[A-Za-z]{3}$/.test(src[k])) dst[k] = src[k].toUpperCase(); }
        else if (num(src[k], 0, LIMITS.rate)) dst[k] = src[k];
      }
    };
    copy(raw.rates, rates, DEFAULT_RATES);
    if (Object.keys(rates).length) out.rates = rates;
  }
  return out;
}

export function rowsText(est) {
  return est.rows.map((r) => r.what + ': ' + r.amount.toFixed(2) + ' ' + est.currency).concat(['Each, at ' + est.qty + ': ' + est.total.toFixed(2) + ' ' + est.currency]);
}

registerStudyReader('cost', (raw) => readCost(raw));   // part.studies.cost

/** What the tool and the panel give estimate(): the part's saved study, then the per-call overrides (machine, setup, price per kg). */
export function optionsFor(part, over = {}) {
  const saved = part.studies?.cost || {};
  const process = over.process || saved.process || 'cnc';
  const rates = JSON.parse(JSON.stringify(saved.rates || {}));
  const matId = materialOf(part.material?.name);
  const key = process === 'printed' ? 'print' : 'cnc';
  if (over.machine_rate !== undefined) (rates[key] ||= {}).perHour = over.machine_rate;
  if (over.setup !== undefined) (rates[key] ||= {}).setup = over.setup;
  if (over.price_per_kg !== undefined && matId) (rates.perKg ||= {})[matId] = over.price_per_kg;
  return { process, qty: over.qty ?? saved.qty ?? 1, rates };
}
