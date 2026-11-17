---
title: Qor soo saare
summary: Soo saare waa CraftScript, Lua ama Python qoraal leh dhowr sadar faallo ah oo sheegaya gelinteeda. Sida gelintu foom ugu noqoto, waxa qoraalku ka tagayaa (jidh, xaashi, dhibaatooyin), tusaale yar oo dhammaystiran, iyo sida qoraalkaaga loogu furo soo saare.
keywords: soo saare, qor, qoraal, craftscript, madal, gelin, @input, @generator, jidh, xaashi, dhibaatooyin, to_body, mfg_check, xaashiga xogta, tusaale, lattice, field
from: ed8a5ed8
---

Soo saare waa qoraal caadi ah ([CraftScript](topic:craftscript), Lua ama Python) oo leh dhowr sadar faallo ah oo sare. PartCraft wuxuu akhriyaa faallooyinka wuuna sameeyaa foomka; qoraalkaagu wuxuu akhriyaa gelinta sida doomaha horay loo dejiyay.

## Madasha

Ku qor sadarrada faallada ah (`%` CraftScript, `--` Lua, `#` Python):

```
% @generator Dhaliyaha kulaylka
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Socodka cadceedda"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Dusha"
% @input solid: = true
% @input note: = "text"
```

Gelinta waa `magac: halbeeg = default`, kadibna ikhtiyaar ahaan kala-duwanaansho `[min .. max]` (tirooyinka ayaa ku jira), liiska doorashooyinka `{a, b, c}` iyo calaamad xigta ku jirta. Halbeegga waa calaamad keliya foomka u; **qiimaha wuxuu imanayaa halbeegaas**, sidaas darteed qoraalka oo doonaya SI wuu beddelaa, `to_si(value, 'kg/s', 'kg/s')` na wuxuu hubiyaa in halbeeggu ula jeedo waxa aad u malaynayso. Magaca waa xarfo, lambarro iyo underscore; `body`, `sheet` iyo `problems` horeba loo qabsaday.

## Waxa qoraalku ka tagayaa

| Doomaha | Waxa uu yahay |
|---|---|
| `body` | **Waa lagama maarmaan.** Jidh mesh dusha ah, badiyaa laga helo `[body, info] = to_body(field, h)`. Waa la hagaajiyaa oo la hubiyaa marka socodka dhammaado. |
| `sheet` | Ikhtiyaari. Qaab struct ah: field kasta waa tiro ama qoraal, ama struct leh `value`, `unit`, `ref` iyo `note`. Waxay noqotaa xaashiga xogta. |
| `problems` | Ikhtiyaari. Unugga `problems` ee `mfg_check(field, 'sls', struct(), h)`, ama galkaaga. Waxay u gudbaan hubinta iyo liiska Dhibaatooyinka. |

## Tusaale yar oo dhammaystiran

```
% Kuub godan oo leh derbi.
% @generator Kuub godan
% @input side: mm = 12 [4 .. 40] "Dhinac"
% @input wall: mm = 1.5 [0.5 .. 5] "Derbi"
% @input h: mm = 0.5 [0.25 .. 2] "Cabbirka voxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'ee mesh-ka');
```

Waxay sameeyaa sanduuq xidhan, hubintuna wuxuu u sheegaa gudaha xidhan inuu khalad yahay habka budada. Ka dhig cabbirka voxel `h` ugu badnaan saddex meelood meel derbiga ugu khafiifka ah ee aad rabto: ka hooseeya qiyaastii saddex voxel, derbi kama aamino.

## Fields

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (jidh wareeg ah oo ka yimid profile), `tpms` (dusha gyroid, Schwarz P iyo diamond, oo leh cabbir unug iyo derbi ka beddeli kara qaybta oo dhan), `lattice` iyo `lattice_beams`, `along` (marin wareeg ah oo jid ku dhex socota), isku-darka `field_union`, `field_intersect`, `field_subtract`, `field_blend` oo siman, iyo `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` wuxuu siiyaa masaafada calaamadaysan ee dhibcaha (taban gudaha), `field_voxel` wuxuu siiyaa voxels xallinta. [Fields](topic:fields) wuxuu sharraxayaa waxa ay yihiin.

Xaddidaadyo lagu xusayo: derbi xaashi ah oo ka weyn meel meel unugga ayaa xidha jidadka; astaan ka yar qiyaastii saddex voxel ayaa laga yaabaa inay ku xidhmo; `along` wuxuu isku xirayaa koonniyo wareeg ah, sidaas darteed radius si degdeg ah u beddelan karaa wuxuu ka tagaa dhuumo (isticmaal `field_revolve` profile ah).

## Soo saareskaaga ka furo soo saare

Workspace-ka {{ui:Engineer}} guji {{ui:Open}} oo dooro faylka. Qoraal aan lahayn sadar `@generator` ama `@input` waa la diidaa: ma jiro wax la dejin karo. Soo saaraha ayaa lagu hayaa browser-kan (ilaa 20) {{ui:Remove}} wuxuu tirtiraa. Jidh laga bilaabo wuxuu sii haysaa nuqul qoraalka, sidaas darteed qaybtu uma baahna qoraalka asalka ah.

Fayl wuxuu sidoo kale haysan karaa dhowr soo saare: JSON bundle `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
