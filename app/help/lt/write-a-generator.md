---
title: Generatoriaus rašymas
summary: Generatorius – tai CraftScript, Lua arba Python scenarijus su komentarų eilutėmis, kuriose aprašomos jo įvestys. Kaip įvestys tampa forma, ką scenarijus turi palikti (body, sheet, problems), mažas, bet išsamus pavyzdys ir kaip atverti savo scenarijų kaip generatorių.
keywords: generatorius, rašyti, scenarijus, craftscript, antraštė, įvestis, @input, @generator, body, sheet, problems, to_body, mfg_check, duomenų lapas, pavyzdys, lattice, laukas
from: ed8a5ed8
---

Generatorius – tai įprastas scenarijus ([CraftScript](topic:craftscript), Lua arba Python) su keletu komentarų eilučių viršuje. PartCraft nuskaito komentarus ir sukuria formą; jūsų scenarijus skaito įvestis kaip jau nustatytus kintamuosius.

## Antraštė

Įrašykite šias eilutes į komentarų eilutes (`%` CraftScript, `--` Lua, `#` Python):

```
% @generator Šilumokaitis
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Masės srautas"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Paviršius"
% @input solid: = true
% @input note: = "text"
```

Įvestis yra `pavadinimas: vienetas = numatytoji reikšmė`, o po jos neprivalomai – intervalas `[min .. max]` (skaičiai laikomi jame), pasirinkimų sąrašas `{a, b, c}` ir etiketė kabutėse. Vienetas formai yra tik etiketė: **reikšmė ateina tuo vienetu**, todėl scenarijus, norintis SI, turi ją konvertuoti; o `to_si(value, 'kg/s', 'kg/s')` taip pat patikrina, ar vienetas reiškia tai, ką manote. Pavadinimą sudaro raidės, skaitmenys ir pabraukimo ženklas; `body`, `sheet` ir `problems` yra užimti.

## Ką palieka scenarijus

| Kintamasis | Ką reiškia |
|---|---|
| `body` | **Privaloma.** Paviršiaus tinklelis, dažniausiai iš `[body, info] = to_body(field, h)`. Jis pataisomas ir patikrinamas paleidimui pasibaigus. |
| `sheet` | Neprivaloma. Struktūra: kiekvienas laukas – skaičius ar tekstas arba struktūra su `value`, `unit`, `ref` ir `note`. Ji tampa duomenų lapu. |
| `problems` | Neprivaloma. `problems` langelis iš `mfg_check(field, 'sls', struct(), h)` arba jūsų pačių įrašai. Jie patenka į patikras ir į problemų sąrašą. |

## Išsamus mažas pavyzdys

```
% Tuščias kubas su siena.
% @generator Tuščias kubas
% @input side: mm = 12 [4 .. 40] "Kraštinė"
% @input wall: mm = 1.5 [0.5 .. 5] "Siena"
% @input h: mm = 0.5 [0.25 .. 2] "Vokselio dydis"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'tinklelio');
```

Sukuriama uždara dėžė, o patikra jos uždarą vidų praneša kaip klaidą milteliniam procesui. Vokselio dydis `h` turi būti ne didesnis kaip trečdalis plonIAUSIOS sienos, kurią norite gauti: esant mažiau nei maždaug trims vokseliams, siena nėra patikima.

## Laukai

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (sukimosi kūnas iš profilio), `tpms` (giroido, Schwarz P ir deimanto paviršiai, su ląstelės dydžiu ir siena, kurie gali kisti per visą detalę), `lattice` ir `lattice_beams`, `along` (apvalus kanalas išilgai kelio), loginės operacijos `field_union`, `field_intersect`, `field_subtract`, sklandus `field_blend`, taip pat `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` pateikia ženklinį atstumą taškuose (vidinėje pusėje – neigiamas), o `field_voxel` pateikia vokselius sprendikliams. [Laukai](topic:fields) paaiškina, kas tai yra.

Verta žinoti ribas: lakšto siena, storesnė nei maždaug ketvirtis ląstelės, užkemša kanalus; detalė, plonesnė nei maždaug trys vokseliai, gali susiaurėti; `along` jungia apvalius kūgius, todėl greitai kintantis spindulys sukuria išsipūtimą (profiliui naudokite `field_revolve`).

## Atidarykite savo scenarijų kaip generatorių

Workspace „Inžinierius“ spustelėkite {{ui:Open}} ir pasirinkite failą. Scenarijus be eilutės `@generator` ar `@input` yra atmetamas: nebūtų ką nustatyti. Generatorius saugomas šioje naršyklėje (iki 20), o {{ui:Remove}} jį pašalina. Detalė, pradėta iš jo, turi scenarijaus kopiją, todėl detalė nepriklauso nuo jo.

Viename faile gali būti ir keli generatoriai: JSON paketas `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
