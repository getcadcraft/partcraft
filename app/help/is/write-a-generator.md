---
title: Skrifa rafal
summary: Rafall er CraftScript-, Lua- eða Python-handrit með athugasemdalínum sem lýsa inntökum þess. Hvernig inntökin verða að eyðublaði, hvað handritið verður að skilja eftir (búkur, blað, vandamál), lítið heilt dæmi og hvernig þú opnar handritið þitt sem rafal.
keywords: rafal, skrifa, handrit, craftscript, haus, inntak, @input, @generator, body, sheet, problems, to_body, mfg_check, gagnablað, dæmi, grind, svið
from: ed8a5ed8
---

Rafall er venjulegt handrit ([CraftScript](topic:craftscript), Lua eða Python) með nokkrum athugasemdalínum efst. PartCraft les athugasemdirnar og býr til eyðublaðið; handritið þitt les inntökin sem breytur sem þegar eru stilltar.

## Hausinn

Settu þetta í athugasemdalínur (`%` í CraftScript, `--` í Lua, `#` í Python):

```
% @generator Varmaskiptir
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Massaflæði"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Yfirborð"
% @input solid: = true
% @input note: = "text"
```

Inntak er `nafn: eining = sjálfgefið`, síðan valfrjálst svið `[lágmark .. hámark]` (tölur eru geymdar innan þess), listi yfir val `{a, b, c}` og merki í gæsalöppum. Einingin er aðeins merki fyrir eyðublaðið: **gildið berst í þeirri einingu**, þannig að handrit sem vill SI-einingar breytir henni, og `to_si(value, 'kg/s', 'kg/s')` athugar líka að einingin merki það sem þú heldur. Nafn samanstendur af bókstöfum, tölustöfum og undirstrikun; `body`, `sheet` og `problems` eru frátekin.

## Það sem handritið skilur eftir

| Breyta | Hvað |
|---|---|
| `body` | **Krafist.** Yfirborðsnet, venjulega úr `[body, info] = to_body(field, h)`. Það er lagfært og athugað þegar keyrslu lýkur. |
| `sheet` | Valfrjálst. Gagnagrind: hvert svið er tala eða texti, eða grind með `value`, `unit`, `ref` og `note`. Það verður að gagnablaðinu. |
| `problems` | Valfrjálst. Reiturinn `problems` úr `mfg_check(field, 'sls', struct(), h)`, eða þínar eigin færslur. Þær fara í athuganirnar og í listann yfir vandamál. |

## Lítið heilt dæmi

```
% Holur teningur með vegg.
% @generator Holur teningur
% @input side: mm = 12 [4 .. 40] "Hlið"
% @input wall: mm = 1.5 [0.5 .. 5] "Veggur"
% @input h: mm = 0.5 [0.25 .. 2] "Stærð voxels"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'af möskvanum');
```

Það býr til lokaðan kassa og athugunin skráir lokaða innra rýmið sem villu fyrir duftferli. Hafðu stærð voxels `h` í mesta lagi þriðjung af þynnsta veggnum sem þú vilt: undir um þremur voxlum er veggur ekki áreiðanlegur.

## Svið

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (heilt snúningsfast form úr sniði), `tpms` (gyroid-, Schwarz P- og diamond-yfirborð, með stærð einingarfrumu og vegg sem getur breyst um allan hlutinn), `lattice` og `lattice_beams`, `along` (rúnnuð rás eftir braut), samlagningar `field_union`, `field_intersect`, `field_subtract`, mjúka `field_blend`, og `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` gefur undirritaða fjarlægð í punktum (neikvæð innan í), `field_voxel` gefur voxla fyrir lausnarana. [Svið](topic:fields) útskýrir hvað þau eru.

Takmarkanir sem vert er að vita um: veggur á blaði þykkari en um fjórðungur af frumunni lokar rásunum; eiginleiki þynnri en um þrír voxlar getur klemmst; `along` tengir rúnnaða keilur, þannig að radíus sem breytist hratt skilur eftir útbungun (notaðu `field_revolve` fyrir snið).

## Opnaðu handritið sem rafal

Í {{ui:Engineer}} vinnusvæðinu smelltu á {{ui:Open}} og veldu skrána. Handriti án línu `@generator` eða `@input` er hafnað: þá væri ekkert til að stilla. Rafallinn er geymdur í þessum vafra (allt að 20) og {{ui:Remove}} eyðir honum. Hlutur sem byrjaður er út frá honum geymir afrit af handritinu, þannig að hlutinn er ekki háður því.

Skrá getur einnig innihaldið nokkra rafala: JSON-pakki `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
