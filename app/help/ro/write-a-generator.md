---
title: Scrierea unui generator
summary: Un generator este un script CraftScript, Lua sau Python cu linii de comentariu care declară intrările sale. Cum devin intrările un formular, ce trebuie să lase scriptul în urmă (body, sheet, problems), un exemplu mic complet și cum deschideți scriptul ca generator.
keywords: generator, scriere, script, craftscript, antet, intrare, @input, @generator, body, sheet, problems, to_body, mfg_check, fișă de date, exemplu, lattice, câmp
from: ed8a5ed8
---

Un generator este un script obișnuit ([CraftScript](topic:craftscript), Lua sau Python) cu câteva linii de comentariu la început. PartCraft citește comentariile și creează formularul; scriptul citește intrările ca variabile deja setate.

## Antetul

Puneți acestea în linii de comentariu (`%` în CraftScript, `--` în Lua, `#` în Python):

```
% @generator Schimbător de căldură
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Debit masic"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Suprafață"
% @input solid: = true
% @input note: = "text"
```

O intrare este `name: unit = default`, apoi, opțional, un interval `[min .. max]` (valorile numerice sunt păstrate în interiorul lui), o listă de opțiuni `{a, b, c}` și o etichetă între ghilimele. Unitatea este doar o etichetă pentru formular: **valoarea sosește în acea unitate**, astfel că un script care dorește SI o convertește, iar `to_si(value, 'kg/s', 'kg/s')` verifică și că unitatea înseamnă ce credeți. Un nume este format din litere, cifre și caracterul de subliniere; `body`, `sheet` și `problems` sunt rezervate.

## Ce lasă scriptul

| Variabilă | Ce este |
|---|---|
| `body` | **Obligatoriu.** O plasă de suprafață, de obicei din `[body, info] = to_body(field, h)`. Este reparată și verificată la încheierea rulării. |
| `sheet` | Opțional. O structură: fiecare câmp un număr sau un text sau o structură cu `value`, `unit`, `ref` și `note`. Devine fișa de date. |
| `problems` | Opțional. Celula `problems` din `mfg_check(field, 'sls', struct(), h)`, sau propriile intrări. Ajung la verificări și în lista Probleme. |

## Un exemplu mic complet

```
% Un cub gol cu un perete.
% @generator Cub gol
% @input side: mm = 12 [4 .. 40] "Latură"
% @input wall: mm = 1.5 [0.5 .. 5] "Perete"
% @input h: mm = 0.5 [0.25 .. 2] "Dimensiune voxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'din plasă');
```

Rezultatul este o cutie închisă, iar verificarea raportează interiorul ei sigilat drept eroare pentru un proces cu pulbere. Faceți dimensiunea voxelului `h` cel mult o treime din cel mai subțire perete dorit: sub aproximativ trei voxeli, un perete nu este fiabil.

## Câmpuri

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (un corp de revoluție dintr-un profil), `tpms` (suprafețe gyroid, Schwarz P și diamant, cu o dimensiune de celulă și un perete care pot varia pe întreaga piesă), `lattice` și `lattice_beams`, `along` (un canal rotund de-a lungul unui traseu), operațiile booleene `field_union`, `field_intersect`, `field_subtract`, netezirea `field_blend` și `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` dă distanța cu semn în puncte (negativă în interior), iar `field_voxel` dă voxeli pentru solvere. [Câmpuri](topic:fields) explică ce sunt acestea.

Limite de reținut: un perete de tip foaie mai gros decât aproximativ un sfert din celulă închide canalele; o operație mai subțire decât aproximativ trei voxeli se poate strânge; `along` unește conuri rotunde, astfel că o rază care se schimbă rapid lasă o umflătură (folosiți `field_revolve` pentru un profil).

## Deschideți scriptul ca generator

În spațiul de lucru {{ui:Inginerie}} faceți clic pe {{ui:Deschidere}} și alegeți fișierul. Un script fără rând `@generator` sau `@input` este refuzat: nu ar exista nimic de setat. Generatorul este păstrat în acest browser (până la 20), iar {{ui:Eliminare}} îl șterge. Un corp pornit din el conține o copie a scriptului, astfel că piesa nu depinde de acesta.

Un fișier poate conține și mai multe generatoare: un pachet JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
