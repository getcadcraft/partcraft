---
title: Tolerance stack-ups
summary: Pick a chain of faces through the parts of an assembly and see how much the gap at its end can vary, worst case and RSS, with the dimensions that matter most ranked first.
section: tasks
order: 72
keywords: tolerance stack-up, stackup, tolerance analysis, tolerance chain, dimension chain, loop, gap, clearance, worst case, rss, root sum square, statistical tolerancing, contributors, sensitivity, gd&t, general tolerance, iso 2768
---

A **stack-up** adds up the dimensions along a chain through several parts to see how much a result — usually a gap — can vary when each part is made anywhere inside its tolerances.

## Pick the chain

1. Open an assembly and choose {{ui:Stack-up}} in the Assembly group. A card opens over the view.
2. Choose what the chain is measured **along**: X, Y or Z of the assembly, or {{ui:The first face's normal}}.
3. Press {{ui:Pick the chain}} and click the faces the chain runs through, **in order**: start at one side of the gap, go through the parts, and end at the other side of the gap.
4. Press {{ui:Done}} or Enter. Backspace takes the last click back; Esc cancels.

Two clicks on the same part make that part's dimension (its distance along the chain). A click on another part makes an **interface** between them, where the parts meet; it has no tolerance unless you type one. The links add or take away by the way the chain runs, and they close the loop: the nominal gap is what the model shows.

You can also {{ui:Add a link}} by hand and type its nominal, its tolerance and whether it adds (+) or takes away (−).

## Give each link its tolerance

Each link has an **upper** and a **lower** deviation (for example +0.1 and −0.05). **Tolerance from** fills them in from the part:

- **General tolerance**: the part's title block Tolerance field (see [Drawing to PDF](topic:drawing-pdf)), when it reads ±0.1, +0.2/-0.1 or ISO 2768-f, -m, -c or -v (ISO 2768-1 linear tolerances, by the link's size). A part's general tolerance is used straight away when the chain is picked.
- **GD&T**: any feature control frame on the part's drawing. Position, profile and runout zones give ± half the tolerance. An orientation or form tolerance usually lies inside the size tolerance already: add it only where the chain meets the controlled surface. With Ⓜ or Ⓛ the zone is taken at its stated size; the bonus tolerance is not counted.
- **Typed**: any numbers you type.

## Read the results

- **Gap, nominal** and, when the tolerances are unequal, **Gap, mean** — +0.2/−0 and +0/−0.1 move the middle of the range.
- **Worst case**: every tolerance at its limit at once. The gap can never be outside this.
- **RSS** (root sum square): each tolerance taken as three standard deviations of a normal spread, added as the square root of the sum of their squares. Most assemblies fall well inside the worst case; this is the usual estimate for parts made in quantity.
- Give **Gap at least** and **Gap at most** to see whether the worst case always stays inside, and how many assemblies in a million RSS expects outside.
- The **#** column ranks the links by their **share** of the RSS: tighten the first ones to make the biggest difference.

{{ui:Save CSV}} writes the links, their shares and the results. The stack-ups are saved in the assembly file, and every change is one step for {{key:Mod+Z}}.

:::note
A stack-up is one direction. It does not follow angles or turns along the chain, and it does not read size tolerances from the sketches: give those as typed tolerances or through the title block.
:::
