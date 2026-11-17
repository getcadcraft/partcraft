---
title: Ģeneratora rakstīšana
summary: Ģenerators ir CraftScript, Lua vai Python skripts ar komentāru rindām, kurās deklarētas tā ievades. Kā ievades kļūst par veidlapu, ko skriptam jāatstāj aiz sevis (korpuss, lapa, problēmas), neliels pilnīgs piemērs un kā atvērt savu skriptu kā ģeneratoru.
keywords: ģenerators, rakstīt, skripts, craftscript, galvene, ievade, @input, @generator, body, sheet, problems, to_body, mfg_check, datu lapa, piemērs, režģis, lauks
from: ed8a5ed8
---

Ģenerators ir parasts skripts ([CraftScript](topic:craftscript), Lua vai Python) ar dažām komentāru rindām augšā. PartCraft nolasa komentārus un izveido veidlapu; jūsu skripts nolasa ievades kā jau iestatītus mainīgos.

## Galvene

Ievietojiet šīs rindas komentāru rindās (`%` CraftScript, `--` Lua, `#` Python):

```
% @generator Siltummainis
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Masas plūsma"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Virsma"
% @input solid: = true
% @input note: = "teksts"
```

Ievade ir `nosaukums: mērvienība = noklusējums`, pēc tam pēc izvēles diapazons `[min .. max]` (skaitļi tiek turēti tā iekšpusē), izvēles saraksts `{a, b, c}` un etiķete pēdiņās. Mērvienība ir tikai veidlapas etiķete: **vērtība tiek saņemta šajā mērvienībā**, tādēļ skripts, kam vajadzīga SI, to pārveido, un `to_si(value, 'kg/s', 'kg/s')` arī pārbauda, vai mērvienība nozīmē to, ko jūs domājat. Nosaukums sastāv no burtiem, cipariem un pasvītrojuma; `body`, `sheet` un `problems` ir aizņemti.

## Ko skripts atstāj

| Mainīgais | Saturs |
|---|---|
| `body` | **Obligāts.** Virsmas tīkls, parasti no `[body, info] = to_body(field, h)`. Tas tiek labots un pārbaudīts, kad izpilde beidzas. |
| `sheet` | Neobligāts. Struktūra: katrs lauks ir skaitlis vai teksts, vai struktūra ar `value`, `unit`, `ref` un `note`. Tā kļūst par datu lapu. |
| `problems` | Neobligāts. `problems` šūna no `mfg_check(field, 'sls', struct(), h)` vai jūsu pašu ieraksti. Tie nonāk pārbaudēs un Problēmu sarakstā. |

## Pilns neliels piemērs

```
% Dobs kubs ar sienu.
% @generator Dobs kubs
% @input side: mm = 12 [4 .. 40] "Mala"
% @input wall: mm = 1.5 [0.5 .. 5] "Siena"
% @input h: mm = 0.5 [0.25 .. 2] "Vokseļa izmērs"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'virsmas sieta');
```

Tas veido slēgtu kasti, un pārbaude par pulvera procesu ziņo par tās noslēgto iekšpusi kā kļūdu. Padariet vokseļa izmēru `h` ne lielāku par vienu trešdaļu no plānākās vēlamās sienas: ja sienai ir mazāk nekā aptuveni trīs vokseļi, tā nav uzticama.

## Lauki

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (rotācijas ķermenis no profila), `tpms` (giroīda, Švarca P un dimantu virsmas, ar šūnas izmēru un sienu, kas var mainīties visā detaļā), `lattice` un `lattice_beams`, `along` (apaļš kanāls pa ceļu), bulea operācijas `field_union`, `field_intersect`, `field_subtract`, gludā `field_blend`, kā arī `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` dod parakstīto attālumu punktos (negatīvs iekšpusē), `field_voxel` dod vokseļus risinātājiem. [Lauki](topic:fields) skaidro, kas tie ir.

Vērts zināt ierobežojumus: lapas siena, kas biezāka par aptuveni ceturtdaļu šūnas, aizver kanālus; elements, kas plānāks par aptuveni trīs vokseļiem, var sašaurināties; `along` savieno apaļus konusus, tādēļ rādiuss, kas mainās strauji, atstāj izliekumu (profilam izmantojiet `field_revolve`).

## Atveriet skriptu kā ģeneratoru

Darbvietā {{ui:Inženieris}} noklikšķiniet uz {{ui:Atvērt}} un izvēlieties failu. Skripts bez rindas `@generator` vai `@input` tiek noraidīts: nebūtu nekā, ko iestatīt. Ģenerators tiek glabāts šajā pārlūkprogrammā (līdz 20), un {{ui:Noņemt}} to dzēš. Ķermenis, kas no tā sākts, satur skripta kopiju, tādēļ detaļa no tā nav atkarīga.

Failā var būt arī vairāki ģeneratori: JSON komplekts `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
