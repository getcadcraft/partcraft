#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * lang-step.mjs — the words cc-step (lib/step/, 0.7 D7.26, session part-08) needs in every app that reads STEP: its error codes
 * (step.err.*), report notes (step.note.*, step.face_*), plus each app's own lines (APP_KEYS). PartCraft's come in through
 * tools/partcraft-test/lang-part08.mjs (which spreads STEP_KEYS); this script writes ModelCraft's and BimCraft's en.json and
 * es-MX.json (draft) line by line — a key's line is replaced, a new key goes before the closing brace, nothing else moves —
 * and BimCraft's @context. `--check` exits 1 when a file differs.
 *   node tools/step/lang-step.mjs [--check]
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const pl = (one, other) => ({ one, other });

// key: [English, context, es-MX draft]
export const STEP_KEYS = {
  'step.err.not_step': ['That is not a STEP file: it does not start with ISO-10303-21.', 'Opening a STEP file failed.', 'Ese no es un archivo STEP: no empieza con ISO-10303-21.'],
  'step.err.bad_file': ['The STEP file could not be read: its data section is missing or damaged.', 'Opening a STEP file failed: no DATA section or broken structure.', 'No se pudo leer el archivo STEP: falta su sección de datos o está dañada.'],
  'step.err.too_big': ['That STEP file is too big (over {mb} MB) to open here.', 'Opening a STEP file failed; {mb} is the size limit in MB.', 'Ese archivo STEP es demasiado grande (más de {mb} MB) para abrirlo aquí.'],
  'step.err.too_many': ['The STEP file has more than {max} entries, more than can be opened here.', 'Opening a STEP file failed; {max} is the entity limit.', 'El archivo STEP tiene más de {max} entradas, más de las que se pueden abrir aquí.'],
  'step.err.too_many_faces': ['The STEP file has more than {max} faces, more than can be opened here.', 'Opening a STEP file failed; {max} is the face limit.', 'El archivo STEP tiene más de {max} caras, más de las que se pueden abrir aquí.'],
  'step.err.too_many_triangles': ['The STEP file needs more than {max} triangles, more than can be opened here.', 'Opening a STEP file failed; {max} is the triangle limit.', 'El archivo STEP necesita más de {max} triángulos, más de los que se pueden abrir aquí.'],
  'step.err.too_many_instances': ['The STEP file places its parts too many times to open here.', 'Opening a STEP file failed: over 100 000 placed instances.', 'El archivo STEP coloca sus piezas demasiadas veces para abrirlo aquí.'],
  'step.err.no_solids': ['The STEP file holds no solid or surface body: there is nothing to bring in.', 'Opening a STEP file with no shape in it (only drawings, data or points).', 'El archivo STEP no contiene ningún cuerpo sólido ni de superficie: no hay nada que traer.'],
  'step.err.no_faces_built': ['None of the faces in the STEP file could be made into triangles.', 'Opening a STEP file whose every face failed.', 'Ninguna de las caras del archivo STEP se pudo convertir en triángulos.'],
  'step.note.damaged': [pl('{n} damaged line in the file was skipped.', '{n} damaged lines in the file were skipped.'), 'STEP import report line.', pl('Se omitió {n} línea dañada del archivo.', 'Se omitieron {n} líneas dañadas del archivo.')],
  'step.note.schema': ['The file names its schema "{schema}", not AP203, AP214 or AP242; it was read as those are.', 'STEP import report line: an unknown FILE_SCHEMA.', 'El archivo indica el esquema "{schema}", no AP203, AP214 ni AP242; se leyó como esos.'],
  'step.note.no_units': ['The file names no length unit; millimetres were used.', 'STEP import report line.', 'El archivo no indica una unidad de longitud; se usaron milímetros.'],
  'step.note.unknown_curve': [pl('{n} edge of a kind that is not read ({type}) was skipped.', '{n} edges of a kind that is not read ({type}) were skipped.'), 'STEP import report line; {type} is the STEP curve type.', pl('Se omitió {n} arista de un tipo que no se lee ({type}).', 'Se omitieron {n} aristas de un tipo que no se lee ({type}).')],
  'step.note.unknown_surface': [pl('{n} face of a kind that is not read ({type}) was skipped.', '{n} faces of a kind that is not read ({type}) were skipped.'), 'STEP import report line; {type} is the STEP surface type.', pl('Se omitió {n} cara de un tipo que no se lee ({type}).', 'Se omitieron {n} caras de un tipo que no se lee ({type}).')],
  'step.note.complex_tess': [pl('{n} triangle set of a kind that is not read was skipped.', '{n} triangle sets of a kind that is not read were skipped.'), 'STEP import report line: an AP242 tessellated item that is not a plain triangle set.', pl('Se omitió {n} conjunto de triángulos de un tipo que no se lee.', 'Se omitieron {n} conjuntos de triángulos de un tipo que no se lee.')],
  'step.note.faces_failed': [pl('{n} face could not be made into triangles and was left out.', '{n} faces could not be made into triangles and were left out.'), 'STEP import report line.', pl('{n} cara no se pudo convertir en triángulos y se omitió.', '{n} caras no se pudieron convertir en triángulos y se omitieron.')],
  'step.note.transform': [pl('{n} placement of a kind that is not read was left where it was drawn.', '{n} placements of a kind that is not read were left where they were drawn.'), 'STEP import report line: an assembly placement that is not a plain move and turn.', pl('{n} colocación de un tipo que no se lee quedó donde se dibujó.', '{n} colocaciones de un tipo que no se lee quedaron donde se dibujaron.')],
  'step.note.deep': ['The file nests its parts more than 32 deep; the deeper ones were left out.', 'STEP import report line.', 'El archivo anida sus piezas a más de 32 niveles; las más profundas se omitieron.'],
  'step.face_coarse': [pl('{n} face is drawn with coarser triangles than the rest.', '{n} faces are drawn with coarser triangles than the rest.'), 'STEP import report line: a face whose triangles stray further from the true surface.', pl('{n} cara se dibuja con triángulos más gruesos que el resto.', '{n} caras se dibujan con triángulos más gruesos que el resto.')],
  'step.face_points_cap': [pl('{n} face reached the point limit and is drawn coarser.', '{n} faces reached the point limit and are drawn coarser.'), 'STEP import report line.', pl('{n} cara llegó al límite de puntos y se dibuja más gruesa.', '{n} caras llegaron al límite de puntos y se dibujan más gruesas.')],
  'step.face_unbounded': [pl('{n} face with no edges around it was left out.', '{n} faces with no edges around them were left out.'), 'STEP import report line.', pl('Se omitió {n} cara sin aristas que la rodeen.', 'Se omitieron {n} caras sin aristas que las rodeen.')],
  'step.face_many_wraps': [pl('{n} face wraps around more than twice; it may be drawn wrongly.', '{n} faces wrap around more than twice; they may be drawn wrongly.'), 'STEP import report line: a face with more than two loops going round a closed surface.', pl('{n} cara da más de dos vueltas; puede dibujarse mal.', '{n} caras dan más de dos vueltas; pueden dibujarse mal.')],
  'step.face_open_wrap': [pl('{n} face goes round its surface without closing; it may be drawn wrongly.', '{n} faces go round their surface without closing; they may be drawn wrongly.'), 'STEP import report line.', pl('{n} cara rodea su superficie sin cerrarse; puede dibujarse mal.', '{n} caras rodean su superficie sin cerrarse; pueden dibujarse mal.')],
  'step.face_outer_and_wraps': [pl('{n} face has an outline and also goes round its surface; it may be drawn wrongly.', '{n} faces have an outline and also go round their surface; they may be drawn wrongly.'), 'STEP import report line.', pl('{n} cara tiene un contorno y además rodea su superficie; puede dibujarse mal.', '{n} caras tienen un contorno y además rodean su superficie; pueden dibujarse mal.')],
};

// each app's own lines
export const APP_KEYS = {
  modelcraft: {
    'app.undo.import_step': ['Import STEP', 'Undo step name.', 'Importar STEP'],
    'io.import.step': [pl('Imported {file} ({schema}): {n} solid, {faces} faces as triangles, in millimetres turned to the model\'s units.', 'Imported {file} ({schema}): {n} solids, {faces} faces as triangles, in millimetres turned to the model\'s units.'), 'Status after importing a STEP file; n = solids placed, {faces} = mesh faces made, {schema} = AP203, AP214 or AP242.', pl('Se importó {file} ({schema}): {n} sólido, {faces} caras como triángulos, de milímetros a las unidades del modelo.', 'Se importó {file} ({schema}): {n} sólidos, {faces} caras como triángulos, de milímetros a las unidades del modelo.')],
    'io.import.step_notes': ['Notes: {notes}', 'Appended to the STEP import status: what the reader skipped or drew coarser.', 'Notas: {notes}'],
  },
  bimcraft: {
    'step.open.title': ['{name} — STEP', 'Panel title for an opened STEP file.', '{name} — STEP'],
    'step.open.facts': [pl('{schema} file, read as triangles: {n} solid, {tris} triangles.', '{schema} file, read as triangles: {n} solids, {tris} triangles.'), 'Status after opening a STEP file in BimCraft; n = solids, {schema} = AP203, AP214 or AP242.', pl('Archivo {schema}, leído como triángulos: {n} sólido, {tris} triángulos.', 'Archivo {schema}, leído como triángulos: {n} sólidos, {tris} triángulos.')],
    'step.open.notes': ['Notes: {notes}', 'Appended to the STEP open status: what the reader skipped or drew coarser.', 'Notas: {notes}'],
    'step.open.reading': ['Reading {name}…', 'Busy text while a STEP file is read.', 'Leyendo {name}…'],
    'step.open.failed': ['Cannot open {name}: {why}', 'Status when a STEP file cannot be read; {why} is the reason.', 'No se puede abrir {name}: {why}'],
  },
};

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const LANG = (app) => path.join(ROOT, 'public_html/assets/apps', app, 'dev/lang');

/** One key's line in a file: replaced where it is, or added before the closing brace (of the file, or of `@context`). */
function setLine(src, key, value, { inContext = false } = {}) {
  const line = '  ' + (inContext ? '  ' : '') + JSON.stringify(key) + ': ' + JSON.stringify(value);
  const lines = src.split('\n');
  let lo = 0, hi = lines.length;
  if (inContext) {
    lo = lines.findIndex((l) => /^ {2}"@context": \{\s*$/.test(l));
    if (lo < 0) throw new Error('no @context block');
    hi = lines.findIndex((l, i) => i > lo && /^ {2}\},?\s*$/.test(l));
  }
  const pre = (inContext ? '    ' : '  ') + JSON.stringify(key) + ':';
  for (let i = lo + 1; i < hi; i++) {
    if (!lines[i].startsWith(pre)) continue;
    const comma = /,\s*$/.test(lines[i]);
    if (!lines[i].trimEnd().endsWith(comma ? '",' : '"') && !/\}\s*,?\s*$/.test(lines[i])) throw new Error(key + ': a value over several lines; edit by hand');
    lines[i] = line + (comma ? ',' : '');
    return lines.join('\n');
  }
  // new: after the last entry before the closing brace
  let end = inContext ? hi : lines.map((l) => l.trim()).lastIndexOf('}');
  let last = end - 1;
  while (last > lo && !lines[last].trim()) last--;
  if (!/,\s*$/.test(lines[last]) && !/\{\s*$/.test(lines[last])) lines[last] += ',';
  lines.splice(last + 1, 0, line);
  return lines.join('\n');
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const check = process.argv.includes('--check');
  let differs = false;
  for (const app of Object.keys(APP_KEYS)) {
    const keys = { ...STEP_KEYS, ...APP_KEYS[app] };
    for (const [file, col] of [['en.json', 0], ['es-MX.json', 2]]) {
      const p = path.join(LANG(app), file);
      const src = readFileSync(p, 'utf8');
      let out = src;
      const hasContext = /^ {2}"@context": \{/m.test(src);
      for (const [k, row] of Object.entries(keys)) {
        out = setLine(out, k, row[col]);
        if (col === 0 && hasContext) out = setLine(out, k, row[1], { inContext: true });
      }
      JSON.parse(out);   // still JSON
      if (out !== src) { differs = true; if (!check) writeFileSync(p, out); }
      console.log(`${app}/${file}: ${out === src ? 'up to date' : check ? 'DIFFERS' : 'written'} (${Object.keys(keys).length} keys)`);
    }
  }
  if (check && differs) process.exit(1);
}
