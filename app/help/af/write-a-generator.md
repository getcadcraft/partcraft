---
title: Skryf 'n generator
summary: 'n Generator is 'n CraftScript-, Lua- of Python-skrip met kommentaarreëls wat sy insette verklaar. Hoe die insette 'n vorm word, wat die skrip moet agterlaat (liggaam, blad, probleme), 'n klein volledige voorbeeld, en hoe om jou skrip as 'n generator oop te maak.
keywords: generator, skryf, skrip, craftscript, kop, insette, @input, @generator, liggaam, blad, probleme, to_body, mfg_check, datablad, voorbeeld, rooster, veld
from: ed8a5ed8
---

'n Generator is 'n gewone skrip ([CraftScript](topic:craftscript), Lua of Python) met 'n paar kommentaarreëls bo-aan. PartCraft lees die kommentaar en maak die vorm; jou skrip lees die insette as veranderlikes wat reeds gestel is.

## Die kop

Plaas hierdie in kommentaarreëls (`%` in CraftScript, `--` in Lua, `#` in Python):

```
% @generator Warmtewisselaar
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Massavloei"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Oppervlak"
% @input solid: = true
% @input note: = "teks"
```

'n Insette is `name: unit = default`, dan opsioneel 'n reeks `[min .. max]` (getalle word binne dit gehou), 'n lys keuses `{a, b, c}` en 'n etiket tussen aanhalingstekens. Die eenheid is net 'n etiket vir die vorm: **die waarde kom in daardie eenheid aan**, so 'n skrip wat SI wil hê, skakel dit om, en `to_si(value, 'kg/s', 'kg/s')` kontroleer ook dat die eenheid beteken wat jy dink. 'n Naam is letters, syfers en onderstreepteken; `body`, `sheet` en `problems` is reeds in gebruik.

## Wat die skrip agterlaat

| Veranderlike | Wat |
|---|---|
| `body` | **Verplig.** 'n Oppervlaknet, gewoonlik van `[body, info] = to_body(field, h)`. Dit word herstel en nagegaan wanneer die uitvoering eindig. |
| `sheet` | Opsioneel. 'n Struct: elke veld 'n getal of teks, of 'n struct met `value`, `unit`, `ref` en `note`. Dit word die datablad. |
| `problems` | Opsioneel. Die `problems`-sel van `mfg_check(field, 'sls', struct(), h)`, of jou eie inskrywings. Hulle gaan na die kontroles en na die Probleme-lys. |

## 'n Volledige klein voorbeeld

```
% 'n Hol kubus met 'n muur.
% @generator Holle kubus
% @input side: mm = 12 [4 .. 40] "Sy"
% @input wall: mm = 1.5 [0.5 .. 5] "Muur"
% @input h: mm = 0.5 [0.25 .. 2] "Voxelgrootte"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Dit maak 'n geslote boks, en die kontrole rapporteer die toe binnekant as 'n fout vir 'n poeierproses. Maak die voxelgrootte `h` hoogstens 'n derde van die dunste muur wat jy wil hê: onder ongeveer drie voxels is 'n muur nie betroubaar nie.

## Velde

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` ('n omwentelingsliggaam uit 'n profiel), `tpms` (gyroid-, Schwarz P- en diamantoppervlaktes, met 'n seldgrootte en muur wat oor die deel kan verander), `lattice` en `lattice_beams`, `along` ('n ronde kanaal langs 'n pad), die booleaanse `field_union`, `field_intersect`, `field_subtract`, die gladde `field_blend`, en `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` gee die geteikende afstand by punte (negatief binne), `field_voxel` gee voxels vir die oplossers. [Velde](topic:fields) verduidelik wat dit is.

Beperkings wat die moeite werd is om te ken: 'n plaatmuur dikker as ongeveer 'n kwart van die sel sluit die kanale; 'n kenmerk dunner as ongeveer drie voxels kan knyp; `along` verbind ronde keëls, so 'n radius wat vinnig verander, laat 'n swelling (gebruik `field_revolve` vir 'n profiel).

## Maak jou skrip oop as 'n generator

In die {{ui:Ingenieur}}-werkruimte klik {{ui:Maak oop}} en kies die lêer. 'n Skrip sonder 'n `@generator`- of `@input`-reël word geweier: daar sou niks wees om in te stel nie. Die generator word in hierdie blaaier bewaar (tot 20) en {{ui:Verwyder}} verwyder dit. 'n Liggaam wat daaruit begin word, dra 'n kopie van die skrip, sodat die onderdeel nie daarvan afhang nie.

'n Lêer kan ook verskeie generators hou: 'n JSON-bondel `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
