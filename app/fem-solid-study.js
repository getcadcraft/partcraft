/* SPDX-License-Identifier: Apache-2.0 */
/**
 * fem-solid-study.js — reads part.studies['fem-solid'], the settings of the Solid FEM add-on (0.9 SU.908c), when a file opens. Registered by the app, not by the
 * add-on, so a part saved with those settings opens whether or not the add-on is on (a key nobody reads is refused). The reader is lib/fem/solid-setup.js
 * (copy made by tools/fem/sync.mjs; nobody edits it here).
 */
import { registerStudyReader } from './part.js';
import { readSetup } from './fem-solid-setup.js';

registerStudyReader('fem-solid', (raw) => readSetup(raw));
