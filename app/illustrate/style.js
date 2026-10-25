/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/style.js — the Illustrate panel's own few rules (thumbnails, the tree's indent, the views list), added to the
 * page once by the workspace (partcraft.css belongs to another session; these rules use only the page's tokens).
 */
export const CSS = `
.il-views { list-style: none; margin: 0; padding: 0; display: grid; gap: .35rem; }
.il-view { display: grid; grid-template-columns: 4.5rem minmax(0, 1fr); gap: .1rem .45rem; align-items: center; padding: .25rem; border: var(--pen-1) solid var(--grid); border-radius: var(--radius); }
.il-view > .il-thumb, .il-view > .il-thumb-none { grid-row: span 2; }
.il-view > .il-view-acts { grid-column: 2; }
.il-view.is-current { border-color: var(--action); outline: var(--pen-1) solid var(--action); }
.il-thumb { width: 4.5rem; aspect-ratio: 16 / 10; object-fit: contain; background: var(--sheet-2); border: var(--pen-1) solid var(--grid); display: block; }
.il-thumb-none { width: 4.5rem; aspect-ratio: 16 / 10; background: var(--sheet-2); border: var(--pen-1) dashed var(--grid); }
.il-view-name { text-align: start; background: none; border: 0; padding: 0; color: inherit; font: inherit; font-size: .875rem; cursor: pointer; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.il-view-name:focus-visible { outline: var(--pen-2) solid var(--action); }
.il-view-acts { display: flex; gap: .15rem; }
.il-icon { background: none; border: var(--pen-1) solid transparent; border-radius: var(--radius); color: var(--ink-2); padding: .1rem .25rem; cursor: pointer; line-height: 1; }
.il-icon:hover, .il-icon:focus-visible { border-color: var(--line); color: var(--ink); }
.il-icon:disabled { opacity: .4; cursor: default; }
.il-tree { list-style: none; margin: 0; padding: 0; font-size: .875rem; max-height: 22rem; overflow: auto; }
.il-row { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; gap: .3rem; padding-inline-start: calc(var(--d, 0) * .9rem); }
.il-row-name { text-align: start; background: none; border: 0; padding: .15rem .25rem; color: inherit; font: inherit; cursor: pointer; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; border-radius: var(--radius); }
.il-row-name[aria-selected="true"] { background: color-mix(in srgb, var(--action) 18%, transparent); }
.il-row.is-hidden .il-row-name { color: var(--ink-2); text-decoration: line-through; }
.il-row.is-ghost .il-row-name { color: var(--ink-2); font-style: italic; }
.il-row-group .il-row-name { font-weight: 600; }
.il-flag { font-size: .75rem; color: var(--ink-2); }
.il-range { width: 100%; }
.il-tools { display: flex; flex-wrap: wrap; gap: .2rem; margin-bottom: .5rem; }
.il-tools .il-icon { padding: .25rem .35rem; font-size: 1rem; }
.il-icon.is-on, .il-icon[aria-pressed="true"] { border-color: var(--action); color: var(--action); background: color-mix(in srgb, var(--action) 12%, transparent); }
.il-annots { list-style: none; margin: 0; padding: 0; font-size: .875rem; max-height: 14rem; overflow: auto; }
.il-annot { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; gap: .2rem; align-items: center; }
.il-annot.is-hidden .il-row-name { color: var(--ink-2); }
.il-editor { margin-top: .6rem; padding-top: .5rem; border-top: var(--pen-1) solid var(--grid); }
.il-editor textarea { resize: vertical; min-height: 2.6rem; font: inherit; }
.il-list-wrap { max-height: 14rem; overflow: auto; margin: .4rem 0; }
.il-list { width: 100%; border-collapse: collapse; font-size: .8125rem; }
.il-list th, .il-list td { text-align: start; padding: .1rem .3rem; border-bottom: var(--pen-1) solid var(--grid); }
.il-list td:first-child, .il-list td:nth-child(2) { font-variant-numeric: tabular-nums; }
.il-cols { display: flex; flex-wrap: wrap; gap: .1rem .7rem; font-size: .8125rem; }
.il-details > summary { cursor: pointer; list-style: revert; }
.il-details[open] > summary { margin-bottom: .5rem; }
.il-steps { list-style: none; margin: 0; padding: 0; display: grid; gap: .6rem; }
.il-step { border: var(--pen-1) solid var(--grid); border-radius: var(--radius); padding: .4rem .5rem; }
.il-step textarea { resize: vertical; font: inherit; }
.il-dope { list-style: none; margin: .4rem 0; padding: 0; font-size: .8125rem; max-height: 12rem; overflow: auto; }
.il-dope li { display: grid; grid-template-columns: 7rem minmax(0, 1fr); gap: .3rem; align-items: center; border-top: var(--pen-1) solid var(--grid); padding: .1rem 0; }
.il-track { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.il-keys { display: flex; flex-wrap: wrap; gap: .1rem; }
.il-key { background: none; border: 0; padding: 0 .1rem; color: var(--action); cursor: pointer; font-size: .7rem; line-height: 1.2; }
.il-colour { inline-size: 2.4rem; block-size: 1.6rem; padding: 0; border: var(--pen-1) solid var(--line); background: none; }
`;
