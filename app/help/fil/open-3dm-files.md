---
title: Buksan ang .3dm model bilang solid body
summary: Dalhin ang mga mesh, polysurface at block ng .3dm file sa PartCraft bilang isang solid body na maaari mong putulin, dagdagan at sketch-an; saan galing ang mga tatsulok, at ano ang naiiwan.
keywords: 3dm, nurbs, polysurface, brep, surfaces, render mesh, extrusion, blocks, import, mesh to solid, units, imported body
from: 8ae9571b
---

Nagbubukas ang PartCraft ng `.3dm` files bilang **solid bodies**, sa parehong paraan ng pagbubukas nito ng isang [STL, OBJ o 3MF mesh](topic:open-meshes). Gumagana ang body gaya ng anumang solid: putulin ito, dagdagan, butasan, i-pattern, at mag-sketch sa mga flat na face nito. Wala itong sariling history.

## Buksan ang file

1. Piliin ang {{ui:Buksan}} o pindutin ang {{key:Mod+O}}, at piliin ang `.3dm` file. O i-drop ito sa 3D view.
2. Binabasa ito ng PartCraft at ipinapakita kung ano ang nakita nito: ilang object na may face ang papasok, ilang face ang galing sa mesh na naka-save sa file at ilan ang tinessellate ng PartCraft, bawat repair, at kung **nagsasara** ang resulta.
3. Suriin ang **Units in the file** (sinasabi ng file ang sarili nitong unit; ang unit na hindi nakalista ng PartCraft, gaya ng yards, ay ginagawang millimeters) at ang **Up in the file**.
4. Piliin ang {{ui:Buksan bilang body}}, o ang **Use it to** at {{ui:Idagdag sa piyesang ito}} kapag may mga feature na ang part.

## Saan galing ang mga tatsulok

Ginagawang tatsulok ng PartCraft ang mga body sa bersyong ito, kaya bawat surface sa file ay nagiging maliliit na flat na face. Para sa bawat face ng polysurface (at bawat extrusion), kinukuha nito ang **render mesh na naka-save sa file** kung mayroon, o kung wala, **tinetessellate nito ang sarili** (planes, NURBS surfaces, surfaces ng revolution, extruded curves at extrusions, nakatrim ng kanilang mga edge). Nagbabahagi ng mga edge point ang mga face ng iisang polysurface, kaya lumalabas na sarado ang saradong polysurface. Ang face sa uri ng surface na hindi pa binabasa ng PartCraft ay naiiwan, at sinasabi ng dialog kung ilan ito at anong uri; kadalasang hindi nagsasara ang resulta.

## Ang lahat sa file ay nagiging iisang body

Bawat nakikitang mesh, polysurface at extrusion, at bawat placement ng block, ay napupunta sa **iisang** body kung saan ito ilalagay ng file. Naiiwan ang mga nakatago o nasa layer na naka-off. Kapag may ilang magkakahiwalay na solid ang file, may ilang piraso ang body; buksan ang bawat isa mula sa sarili nitong file kung gusto mo silang maging hiwalay na body.

## Ano ang naiiwan (at sinasabi)

Naiiwan ang curves, points, point clouds, text, dimensions, hatches at lights: kumukuha lamang ng face ang body. Naiiwan din ang SubD objects (gawing mesh o polysurface muna sa programang gumawa ng file), blocks na naka-link mula sa ibang file, at mga kulay, layer at pangalan (walang sariling mga iyon ang PartCraft bodies dito).

## Kapag hindi nagsasara

Ang bukas na polysurface at surface (isang trimmed surface lamang, o hugis na may nawawalang face) ay walang loob, kaya hindi sila maaaring maging solid. Sinasabi ng dialog kung ilang butas ang natitira at walang idinadagdag. I-join o takpan ang hugis sa programang gumawa nito, i-save, at buksan muli. Tingnan ang [Kapag hindi nagsasara ang mesh](topic:open-meshes#when-a-mesh-does-not-close).
