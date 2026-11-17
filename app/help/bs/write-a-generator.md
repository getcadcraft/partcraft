---
title: Pisanje generatora
summary: Generator je CraftScript, Lua ili Python skripta sa linijama komentara koje deklarišu njene ulaze. Kako ulazi postaju obrazac, šta skripta mora ostaviti (tijelo, list, problemi), mali kompletan primjer i kako otvoriti skriptu kao generator.
keywords: generator, pisanje, skripta, craftscript, zaglavlje, ulaz, @input, @generator, tijelo, list, problemi, primjer, rešetka, polje, list podataka
from: ed8a5ed8
---

Generator je obična skripta ([CraftScript](topic:craftscript), Lua ili Python) sa nekoliko linija komentara na početku. PartCraft čita komentare i pravi obrazac; vaša skripta čita ulaze kao varijable koje su već postavljene.

## Zaglavlje

Stavite ovo u linije komentara (`%` u CraftScript-u, `--` u Lua-i, `#` u Python-u):

```
% @generator Izmjenjivač topline
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Maseni protok"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Površina"
% @input solid: = true
% @input note: = "tekst"
```

Ulaz je `ime: jedinica = podrazumijevana vrijednost`, zatim opciono raspon `[min .. max]` (brojevi se drže unutar njega), lista izbora `{a, b, c}` i oznaka u navodnicima. Jedinica je samo oznaka za obrazac: **vrijednost stiže u toj jedinici**, pa skripta koja želi SI mora da je pretvori, a `to_si(value, 'kg/s', 'kg/s')` također provjerava da jedinica znači ono što mislite. Ime se sastoji od slova, cifara i donje crte; `body`, `sheet` i `problems` su zauzeti.

## Šta skripta ostavlja

| Varijabla | Šta |
|---|---|
| `body` | **Obavezno.** Mreža površine, obično iz `[body, info] = to_body(field, h)`. Popravlja se i provjerava kada se izvršavanje završi. |
| `sheet` | Opciono. Struktura: svako polje je broj ili tekst, ili struktura sa `value`, `unit`, `ref` i `note`. Postaje list podataka. |
| `problems` | Opciono. Ćelija `problems` iz `mfg_check(field, 'sls', struct(), h)`, ili vaši sopstveni unosi. Idu u provjere i na listu problema. |

## Kompletan mali primjer

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

Pravi zatvorenu kocku, a provjera njenu zatvorenu unutrašnjost prijavljuje kao grešku za proces praha. Postavite veličinu voksela `h` najviše na trećinu najtanjeg zida koji želite: ispod otprilike tri voksela zid nije pouzdan.

## Polja

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (tijelo rotacije iz profila), `tpms` (gyroid, Schwarz P i diamond površine, sa veličinom ćelije i zidom koji se može mijenjati kroz dio), `lattice` i `lattice_beams`, `along` (okrugli kanal duž putanje), bulovske operacije `field_union`, `field_intersect`, `field_subtract`, glatko `field_blend`, te `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` daje signiranu udaljenost u tačkama (negativna unutra), a `field_voxel` daje voksele za rješavače. [Polja](topic:fields) objašnjavaju šta su.

Ograničenja koja vrijedi znati: zid lista deblji od otprilike četvrtine ćelije zatvara kanale; element tanji od otprilike tri voksela može se stisnuti; `along` spaja okrugle konuse, pa poluprečnik koji se brzo mijenja ostavlja izbočinu (za profil koristite `field_revolve`).

## Otvorite skriptu kao generator

U radnom prostoru **Inženjer** kliknite **Otvori** i izaberite datoteku. Skripta bez linije `@generator` ili `@input` se odbija: nema šta postaviti. Generator se čuva u ovom pregledaču (do 20), a **Ukloni** ga briše. Tijelo započeto iz njega sadrži kopiju skripte, pa dio ne zavisi od nje.

Datoteka može sadržavati i više generatora: JSON paket `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
