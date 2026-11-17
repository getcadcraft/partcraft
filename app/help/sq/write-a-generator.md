---
title: Shkruaj një gjenerator
summary: Një gjenerator është një skript CraftScript, Lua ose Python me rreshta komentesh që deklarojnë hyrjet e tij. Si shndërrohen hyrjet në formular, çfarë duhet të lërë skripti pas (trupi, fleta, problemet), një shembull i vogël i plotë, dhe si ta hapësh skriptin tënd si gjenerator.
keywords: gjenerator, shkruaj, skript, craftscript, kokë, hyrje, @input, @generator, trup, fletë, probleme, to_body, mfg_check, fletë të dhënash, shembull, rrjetë, fushë
from: ed8a5ed8
---

Një gjenerator është një skript i zakonshëm ([CraftScript](topic:craftscript), Lua ose Python) me disa rreshta komentesh në krye. PartCraft i lexon komentet dhe krijon formularin; skripti yt i lexon hyrjet si variabla që janë tashmë të vendosura.

## Koka

Vendosi këto në rreshta komentesh (`%` në CraftScript, `--` në Lua, `#` në Python):

```
% @generator Shkëmbyes nxehtësie
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Rrjedha e masës"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Sipërfaqja"
% @input solid: = true
% @input note: = "tekst"
```

Një hyrje është `emri: njësia = vlera fillestare`, pastaj opsionalisht një interval `[min .. max]` (numrat mbahen brenda tij), një listë zgjedhjesh `{a, b, c}` dhe një etiketë në thonjëza. Njësia është vetëm një etiketë për formularin: **vlera vjen në atë njësi**, prandaj një skript që dëshiron SI e konverton, dhe `to_si(value, 'kg/s', 'kg/s')` gjithashtu kontrollon që njësia do të thotë atë që mendon. Një emër përbëhet nga shkronja, shifra dhe nënvizim; `body`, `sheet` dhe `problems` janë të rezervuara.

## Çfarë lë skripti

| Variabla | Çfarë |
|---|---|
| `body` | **E detyrueshme.** Një rrjet sipërfaqeje, zakonisht nga `[body, info] = to_body(field, h)`. Riparohet dhe kontrollohet kur mbaron ekzekutimi. |
| `sheet` | Opsionale. Një strukturë: çdo fushë një numër ose tekst, ose një strukturë me `value`, `unit`, `ref` dhe `note`. Bëhet fleta e të dhënave. |
| `problems` | Opsionale. Qeliza `problems` nga `mfg_check(field, 'sls', struct(), h)`, ose hyrjet e tua. Shkojnë te kontrollet dhe te lista e Problemeve. |

## Një shembull i vogël i plotë

```
% Një kub i zbrazët me mur.
% @generator Kub i zbrazët
% @input side: mm = 12 [4 .. 40] "Brinjë"
% @input wall: mm = 1.5 [0.5 .. 5] "Mur"
% @input h: mm = 0.5 [0.25 .. 2] "Madhësia e vokselit"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Ajo bën një kuti të mbyllur, dhe kontrolli e raporton brendësinë e saj të mbyllur si gabim për një proces pluhuri. Bëje madhësinë e vokselit `h` jo më shumë se një e treta e murit më të hollë që dëshiron: nën rreth tre voksele një mur nuk është i besueshëm.

## Fushat

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (një trup rrotullimi nga një profil), `tpms` (sipërfaqet gyroid, Schwarz P dhe diamond, me madhësi qelize dhe mur që mund të ndryshojnë përgjatë pjesës), `lattice` dhe `lattice_beams`, `along` (një kanal rrethor përgjatë një shtegu), operacionet booleane `field_union`, `field_intersect`, `field_subtract`, `field_blend` e butë, dhe `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` jep distancën me shenjë te pikat (negative brenda), `field_voxel` jep voksele për zgjidhësit. [Fushat](topic:fields) shpjegon çfarë janë.

Kufizime që ia vlen t'i dish: një mur flete më i trashë se rreth një e katërta e qelizës mbyll kanalet; një detaj më i hollë se rreth tre voksele mund të shtrëngohet; `along` lidh konet rrethore, prandaj një rreze që ndryshon shpejt lë një fryrje (përdor `field_revolve` për një profil).

## Hap skriptin tënd si gjenerator

Në hapësirën e punës {{ui:Engineer}} kliko {{ui:Open}} dhe zgjidh skedarin. Një skript pa rresht `@generator` ose `@input` refuzohet: nuk do të kishte asgjë për të vendosur. Gjeneratori mbahet në këtë shfletues (deri në 20) dhe {{ui:Remove}} e fshin. Një trup i nisur prej tij mban një kopje të skriptit, prandaj pjesa nuk varet prej tij.

Një skedar mund të mbajë edhe disa gjeneratorë: një paketë JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
