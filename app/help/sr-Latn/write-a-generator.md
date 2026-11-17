---
title: Napiši generator
summary: Generator je CraftScript, Lua ili Python skript sa redovima komentara koji navode njegove ulaze. Kako se ulazi pretvaraju u obrazac, šta skript mora da ostavi (telo, list, problemi), mali potpun primer i kako otvoriti skript kao generator.
keywords: generator, napiši, skript, craftscript, zaglavlje, ulaz, @input, @generator, telo, list, problemi, to_body, mfg_check, list podataka, primer, rešetka, polje
from: ed8a5ed8
---

Generator je običan skript ([CraftScript](topic:craftscript), Lua ili Python) sa nekoliko redova komentara na vrhu. PartCraft čita komentare i pravi obrazac; vaš skript čita ulaze kao promenljive koje su već postavljene.

## Zaglavlje

Stavite ovo u redove komentara (`%` za CraftScript, `--` za Lua, `#` za Python):

```
% @generator Izmenjivač toplote
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Protok mase"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Površ"
% @input solid: = true
% @input note: = "tekst"
```

Ulaz je `ime: jedinica = podrazumevano`, zatim opciono opseg `[min .. max]` (brojevi su zadržani unutar njega), spisak izbora `{a, b, c}` i oznaka pod navodnicima. Jedinica je samo oznaka za obrazac: **vrednost stiže u toj jedinici**, pa skript koji želi SI mora da je pretvori, a `to_si(value, 'kg/s', 'kg/s')` takođe proverava da li jedinica znači ono što mislite. Ime se sastoji od slova, cifara i donje crte; `body`, `sheet` i `problems` su zauzeti.

## Šta skript ostavlja

| Promenljiva | Šta je |
|---|---|
| `body` | **Obavezno.** Površinska mreža, obično iz `[body, info] = to_body(field, h)`. Popravlja se i proverava na kraju izvršavanja. |
| `sheet` | Opciono. Struktura: svako polje je broj ili tekst, ili struktura sa `value`, `unit`, `ref` i `note`. Postaje list podataka. |
| `problems` | Opciono. Ćelija `problems` iz `mfg_check(field, 'sls', struct(), h)` ili vaši sopstveni unosi. Idu u provere i na listu problema. |

## Potpun mali primer

```
% Šuplja kocka sa zidom.
% @generator Šuplja kocka
% @input side: mm = 12 [4 .. 40] "Stranica"
% @input wall: mm = 1.5 [0.5 .. 5] "Zid"
% @input h: mm = 0.5 [0.25 .. 2] "Veličina voksela"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'iz mreže');
```

Pravi zatvorenu kutiju, a provera prijavljuje njenu zatvorenu unutrašnjost kao grešku za postupak sa prahom. Neka veličina voksela `h` bude najviše trećina najtanjeg zida koji želite: ispod oko tri voksela zid nije pouzdan.

## Polja

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (čvrsto telo rotacije iz profila), `tpms` (površi gyroid, Schwarz P i diamond, sa veličinom ćelije i zidom koji se može menjati kroz deo), `lattice` i `lattice_beams`, `along` (okrugli kanal duž putanje), logičke operacije `field_union`, `field_intersect`, `field_subtract`, glatko `field_blend`, te `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` daje označenu udaljenost u tačkama (negativnu unutra), a `field_voxel` daje voksele za rešavače. [Polja](topic:fields) objašnjavaju šta su.

Ograničenja vredna poznavanja: tanak zid ploče deblji od otprilike četvrtine ćelije zatvara kanale; detalj tanji od oko tri voksela može da se stegne; `along` spaja okrugle konuse, pa poluprečnik koji se brzo menja ostavlja ispupčenje (za profil koristite `field_revolve`).

## Otvorite skript kao generator

U radnom prostoru {{ui:Inženjer}} kliknite {{ui:Otvori}} i izaberite datoteku. Skript bez reda `@generator` ili `@input` se odbija: nema šta da se podesi. Generator se čuva u ovom pregledaču (do 20), a {{ui:Ukloni}} ga briše. Telo započeto iz njega nosi kopiju skripta, pa deo ne zavisi od njega.

Datoteka može sadržati i više generatora: JSON paket `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
