/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-origins.js — the names of the work origins as the G-code header writes them (a leaf module: cam.js re-exports it, and the
 * post engine, which cam.js imports, needs it without importing cam.js back — the compute worker's loader refuses import cycles).
 */
// English on purpose: the posts write these into the G-code header comment; the UI shows originLabel() in cam.js
export const ORIGINS = {
  'stock-top-min': 'Stock top, front left corner',   // i18n-ignore: G-code comment
  'stock-top-centre': 'Stock top, centre',   // i18n-ignore: G-code comment
  'stock-bottom-min': 'Stock bottom, front left corner',   // i18n-ignore: G-code comment
  'stock-bottom-centre': 'Stock bottom, centre',   // i18n-ignore: G-code comment
  'model-top-centre': 'Model top, centre',   // i18n-ignore: G-code comment
  'model-origin': 'Model origin',   // i18n-ignore: G-code comment
};
