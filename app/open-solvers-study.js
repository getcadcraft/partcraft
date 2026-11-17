/* SPDX-License-Identifier: Apache-2.0 */
/**
 * open-solvers-study.js — reads part.studies['open-solvers'], the settings of the Open solver cases add-on (suggestion 1309), when a file opens.
 * Registered by the app, not by the add-on, so a part saved with those settings opens whether or not the add-on is on (a key nobody reads is
 * refused). The reader is lib/opensolvers/os-setup.js (copy made by tools/opensolvers/sync.mjs; nobody edits it here).
 */
import { registerStudyReader } from './part.js';
import { readSetup } from './open-solvers-setup.js';

registerStudyReader('open-solvers', (raw) => readSetup(raw));
