---
title: Pisanje generatora
summary: Generator je CraftScript, Lua ili Python skripta s redcima komentara koji najavljuju njezine ulaze. Kako se ulazi pretvaraju u obrazac, što skripta mora ostaviti za sobom (tijelo, list, probleme), mali potpun primjer i kako otvoriti svoju skriptu kao generator.
keywords: generator, pisanje, skripta, craftscript, zaglavlje, ulaz, @input, @generator, tijelo, list, problemi, to_body, mfg_check, tablica podataka, primjer, rešetka, polje
from: ed8a5ed8
---

Generator je obična skripta ([CraftScript](topic:craftscript), Lua ili Python) s nekoliko redaka komentara na početku. PartCraft čita komentare i izrađuje obrazac; vaša skripta čita ulaze kao varijable koje su već postavljene.

## Zaglavlje

Stavite ove retke u komentare (`%` u CraftScriptu, `--` u Lua, `#` u Pythonu):

```
% @generator Izmjenjivač topline
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Maseni protok"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Površina"
% @input solid: = true
% @input note: = "text"
```

Ulaz je `ime: jedinica = zadana vrijednost`, zatim opcionalno raspon `[min .. max]` (brojevi se drže unutar njega), popis izbora `{a, b, c}` i oznaka u navodnicima. Jedinica je samo oznaka za obrazac: **vrijednost stiže u toj jedinici**, pa skripta koja želi SI mora pretvoriti vrijednost, a `to_si(value, 'kg/s', 'kg/s')` također provjerava znači li jedinica ono što mislite. Ime se sastoji od slova, znamenki i donje crte; `body`, `sheet` i `problems` su zauzeti.

## Što skripta ostavlja

| Varijabla | Što |
|---|---|
| `body` | **Obavezno.** Površinska mreža, obično iz `[body, info] = to_body(field, h)`. Popravlja se i provjerava kad izvođenje završi. |
| `sheet` | Neobavezno. Struktura: svako polje je broj ili tekst, ili struktura s `value`, `unit`, `ref` i `note`. Postaje tablica podataka. |
| `problems` | Neobavezno. Ćelija `problems` iz `mfg_check(field, 'sls', struct(), h)` ili vaši vlastiti unosi. Idu u provjere i na popis problema. |

## Potpun mali primjer

```
% Šuplja kocka sa stijenkom.
% @generator Šuplja kocka
% @input side: mm = 12 [4 .. 40] "Stranica"
% @input wall: mm = 1.5 [0.5 .. 5] "Stijenka"
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

Stvara zatvorenu kocku, a provjera zatvorenu unutrašnjost prijavljuje kao pogrešku za postupak u prahu. Neka veličina voksela `h` bude najviše trećina najtanje stijenke koju želite: ispod otprilike tri voksela stijenka nije pouzdana.

## Polja

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (puno tijelo rotacije iz profila), `tpms` (giroid, Schwarzove P i dijamantne površine, s veličinom ćelije i stijenkom koje se mogu mijenjati po dijelu), `lattice` i `lattice_beams`, `along` (okrugli kanal duž putanje), booleove operacije `field_union`, `field_intersect`, `field_subtract`, glatko spajanje `field_blend`, te `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` daje predznačenu udaljenost u točkama (negativno unutra), a `field_voxel` daje voksele za rješavače. [Polja](topic:fields) objašnjavaju što su.

Vrijedi znati ova ograničenja: stijenka plohe deblja od otprilike četvrtine ćelije zatvara kanale; značajka tanja od otprilike tri voksela može se stisnuti; `along` spaja okrugle stošce, pa polumjer koji se brzo mijenja ostavlja ispupčenje (za profil upotrijebite `field_revolve`).

## Otvorite skriptu kao generator

U radnom prostoru {{ui:Engineer}} kliknite {{ui:Open}} i odaberite datoteku. Skripta bez retka `@generator` ili `@input` se odbija: ne bi bilo ničega za postaviti. Generator se čuva u ovom pregledniku (do 20), a {{ui:Remove}} ga briše. Tijelo stvoreno iz njega nosi kopiju skripte, pa dio ne ovisi o njoj.

Datoteka može sadržavati i više generatora: JSON paket `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
