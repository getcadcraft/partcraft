/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/all.js — import this to read manuals: manual.js reads the core, and each of these modules registers the reader of
 * its own part of the file (annotations, looks, the parts-list table, instructions, the animation). Re-exports manual.js.
 */
import './annotate.js';
import './look.js';
import './parts-list.js';
import './instructions.js';
import './timeline.js';
export * from './manual.js';
