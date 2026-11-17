---
title: Nodes: bumuo ng modelo sa pamamagitan ng wiring
summary: I-wire ang mga numero sa mga punto, ang mga punto sa mga curve, ang mga curve sa mga surface. Kapag binago ang isang numero, muling bubuuin ang lahat ng nasa ibaba nito. Ang bawat node ay linya rin ng CraftScript, at naka-save sa file ang graph.
keywords: nodes, node editor, visual scripting, parametric, graph, wires, ports, malayang hugis, freeform, nurbs, loft, extrude, revolve, bilog, curve, surface, series, range, random, list, script, craftscript, grasshopper
from: 3a4625de
---

Ang editor na **Nodes** ay bumubuo ng geometry sa pamamagitan ng pag-wire ng mga kahon. Ang bawat kahon (isang node) ay may maliit na trabaho: gumawa ng numero, punto, bilog, o loft. Ikinokonekta mo ang resulta ng isa sa input ng susunod, at sumusunod ang modelo kapag binago mo ang numero sa simula.

Buksan ito mula sa workspace list: {{ui:Nodes}}. Binubuksan nito ang editor window. Ang part na may graph na dati ay ipinapakita ito kapag binuksan ang workspace. Isa itong window sa ibabaw ng 3D view: i-drag ang title bar nito para ilipat, i-drag ang sulok nito para baguhin ang laki.

## Pag-wire

1. Pumili ng node mula sa listahan sa kaliwa (mag-type sa search box para paliitin; ang <kbd>Enter</kbd> ay nagdaragdag ng unang tugma). Lumilitaw ito sa gitna ng canvas.
2. I-drag mula sa bilog na **output** dot sa kanan ng isang node papunta sa bilog na **input** dot sa kaliwa ng iba. Nagiging berde ang dot kapag kumakasya at pula kapag hindi; itutok dito ang cursor para makita ang dahilan.
3. Ang input na walang nakakonekta ay nagpapakita ng kahon para sa halagang tina-type. Mag-type ng numero at pindutin ang <kbd>Tab</kbd>: muling bubuuin ang resulta.
4. Ang maliit na bilog sa title bar ng node ay ang **eye** nito. Ang node na nakabukas ang eye ay iginuguhit sa 3D view: bilang linya para sa curves, may shade para sa surfaces, tuldok para sa points.

I-drag ang node sa pamamagitan ng title bar nito. I-drag ang background para mag-pan, paikutin ang wheel para mag-zoom. Tinatanggal ng <kbd>Delete</kbd> ang napiling node. Inaayos ng {{ui:Ayusin}} ang mga node sa mga column, dinadala ng {{ui:Fit}} lahat sa view, at ang {{ui:I-undo}} at {{ui:I-redo}} ay humahakbang sa mga edit mo.

## Mga uri at unit

May uri ang mga port: number, yes/no, point, vector, curve, surface, mesh, solid, o "geometry" para sa alinman sa mga iyon. Maaaring pakainin ng point ang vector input at pabalik. May unit ang mga numero: ang **length** ay nasa millimetres at ang **angle** ay nasa degrees. Hindi maaaring pakainin ng length ang angle, at tinatanggihan ang length na pinarami ng length (isang area), kaya napipigilan ang maling wire kapag ginawa mo ito.

Ang parisukat na dot ay isang **list**. Kapag umabot ang list sa single-value input, tumatakbo ang node nang isang beses para sa bawat item, at ang resulta nito ay nagiging list. Inuulit ng mas maikling list ang huling item nito. Halimbawa, ang **Series** ng taas papunta sa **Move** ay gumagawa ng salansan ng mga kopya.

## Solids at Booleans bilang node

Ang pangkat na **Solids** ay gumagawa ng saradong katawan mula sa parehong exact surfaces ng Surfaces panel: **Box solid**, **Cylinder solid** at **Sphere solid** (laki sa mm), **Union**, **Subtract** at **Intersect** (ang ikalawang solid ay kinukuha mula sa una; ang tolerance ay kung gaano kalayo maaaring nasa exact surfaces ang mga triangles ng solid engine), **Fillet between faces** (ang mga face ayon sa numero nila sa solid, 1 para sa una; isang radius at, kung higit sa 0, isang radius sa dulo), **Solid volume** (mm³) at **Solid to mesh** (para makita o i-bake ito). May sariling uri ng port ang solid: hindi maaaring i-wire ang point o numero sa solid input, at nananatiling pula ang dot. Ang mga node ng Boolean at Fillet ay gumagamit ng sariling solid engine ng programa, na nilo-load sa unang pagbukas ng editor.

## Mga error

Ang node na hindi magawa ang trabaho nito ay nagsasabi kung bakit sa ilalim ng pangalan nito, sa pula ("Dapat mas malaki sa zero ang radius."), at naghihintay ang mga node pagkatapos nito. Ang parehong mensahe ay isang Problema sa panel ng Problems, kaya mahahanap mo ito mula roon.

## Bawat node ay isang linya ng script

Pindutin ang {{ui:Script}} para makita ang graph bilang CraftScript: isang linya bawat node, gaya ng `n3 = nd_circle(n2, n1, [0 0 1]);`. I-edit ang teksto at pindutin ang {{ui:Gawin ang graph mula sa script na ito}} para ibalik ito bilang graph. Gumagana ang parehong `nd_` na function sa CraftScript sa PartCraft, kaya maaaring patakbuhin, i-loop, o subukan doon ang graph. Ang random na numero ay laging kumukuha ng **seed**, kaya pareho ang resulta ng parehong graph sa bawat computer.

## Naka-save kasama ng file

Naka-save ang graph sa part file (hindi sa history, kaya hiwalay ang Undo ng editor). Ang mga node ay gumagawa ng curves, surfaces at meshes sa tabi ng solid: hindi nila binabago ang mga feature ng part.
