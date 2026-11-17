---
title: Napišite generator
summary: Generator je običajen skript CraftScript, Lua ali Python z nekaj vrsticami komentarjev na vrhu, ki razglasijo njegove vnose. Kako se vnosi spremenijo v obrazec, kaj mora skript pustiti za seboj (telo, list, težave), majhen popolni primer in kako svoj skript odprete kot generator.
keywords: generator, pisanje, skript, craftscript, glava, vnos, @input, @generator, telo, list, težave, to_body, mfg_check, podatkovni list, primer, mrežna struktura, polje
from: ed8a5ed8
---

Generator je običajen skript ([CraftScript](topic:craftscript), Lua ali Python) z nekaj vrsticami komentarjev na vrhu. PartCraft prebere komentarje in ustvari obrazec, vaš skript pa vnose prebere kot spremenljivke, ki so že nastavljene.

## Glava

Zapišite to v vrstice s komentarji (`%` v CraftScriptu, `--` v Lua, `#` v Pythonu):

```
% @generator Toplotni izmenjevalnik
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Masni pretok"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Površina"
% @input solid: = true
% @input note: = "besedilo"
```

Vnos je `ime: enota = privzeta vrednost`, nato po želji obseg `[min .. max]` (števila ostanejo znotraj njega), seznam izbir `{a, b, c}` in oznaka v narekovajih. Enota je le oznaka za obrazec: **vrednost pride v tej enoti**, zato skript, ki želi SI, jo pretvori; `to_si(value, 'kg/s', 'kg/s')` pa tudi preveri, ali enota pomeni to, kar mislite. Ime je sestavljeno iz črk, številk in podčrtaja; `body`, `sheet` in `problems` so zasedeni.

## Kaj skript pusti za seboj

| Spremenljivka | Kaj |
|---|---|
| `body` | **Obvezno.** Mreža ploskev, navadno iz `[body, info] = to_body(field, h)`. Ob koncu zagona se popravi in preveri. |
| `sheet` | Neobvezno. Struktura: vsako polje je število ali besedilo, ali struktura z `value`, `unit`, `ref` in `note`. Postane podatkovni list. |
| `problems` | Neobvezno. Celica `problems` iz `mfg_check(field, 'sls', struct(), h)` ali vaši lastni vnosi. Gredo v preverjanja in na seznam težav. |

## Popolni majhen primer

```
% Votla kocka s steno.
% @generator Votla kocka
% @input side: mm = 12 [4 .. 40] "Stranica"
% @input wall: mm = 1.5 [0.5 .. 5] "Stena"
% @input h: mm = 0.5 [0.25 .. 2] "Velikost voksla"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'iz mreže');
```

Ustvari zaprto škatlo, preverjanje pa zapečateno notranjost prijavi kot napako za postopek s praškom. Velikost voksla `h` naj bo največ tretjina najtanjše stene, ki jo želite: pod približno tremi vokseli stena ni zanesljiva.

## Polja

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (telo vrtenja iz profila), `tpms` (giroidne, Schwarzove P in diamantne ploskve, z velikostjo celice in steno, ki se lahko spreminjata po delu), `lattice` in `lattice_beams`, `along` (okrogel kanal ob poti), logične operacije `field_union`, `field_intersect`, `field_subtract`, gladka `field_blend` ter `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` vrne predznačeno razdaljo v točkah (negativna znotraj), `field_voxel` pa vokse za reševalnike. [Polja](topic:fields) pojasnjujejo, kaj so.

Omejitve, ki jih je vredno poznati: tanka stena, debelejša od približno četrtine celice, zapre kanale; element, tanjši od približno treh voksel, se lahko zoži; `along` povezuje okrogle stožce, zato polmer, ki se hitro spreminja, pusti izboklino (za profil uporabite `field_revolve`).

## Odprite svoj skript kot generator

V delovnem okolju {{ui:Inženir}} kliknite {{ui:Odpri}} in izberite datoteko. Skript brez vrstice `@generator` ali `@input` je zavrnjen, ker ni ničesar, kar bi bilo mogoče nastaviti. Generator se shrani v tem brskalniku (največ 20), {{ui:Odstrani}} pa ga izbriše. Telo, ustvarjeno iz njega, nosi kopijo skripta, zato del od njega ni odvisen.

Datoteka lahko hrani tudi več generatorjev: paket JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
