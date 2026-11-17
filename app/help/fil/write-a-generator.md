---
title: Sumulat ng generator
summary: Ang generator ay isang CraftScript, Lua o Python script na may mga linya ng komento na nagdedeklara ng mga input nito. Paano nagiging form ang mga input, ano ang dapat iwan ng script (body, sheet, problems), isang maliit at kumpletong halimbawa, at kung paano bubuksan ang iyong script bilang generator.
keywords: generator, sumulat, script, craftscript, header, input, @input, @generator, body, sheet, problems, to_body, mfg_check, data sheet, halimbawa, lattice, field
from: ed8a5ed8
---

Ang generator ay isang karaniwang script ([CraftScript](topic:craftscript), Lua o Python) na may ilang linya ng komento sa itaas. Binabasa ng PartCraft ang mga komento at ginagawa ang form; binabasa ng iyong script ang mga input bilang mga variable na nakatakda na.

## Ang header

Ilagay ang mga ito sa mga linya ng komento (`%` sa CraftScript, `--` sa Lua, `#` sa Python):

```
% @generator Heat exchanger
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Mass flow"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Surface"
% @input solid: = true
% @input note: = "text"
```

Ang input ay `pangalan: unit = default`, at opsyonal na saklaw na `[min .. max]` (nasa loob nito ang mga numero), listahan ng mga pagpipilian na `{a, b, c}`, at label sa loob ng quotes. Label lang ang unit para sa form: **dumarating ang value sa unit na iyon**, kaya kung gusto ng script ng SI, kino-convert ito, at sinusuri rin ng `to_si(value, 'kg/s', 'kg/s')` kung tama ang kahulugan ng unit. Ang pangalan ay mga letra, digit, at underscore; nakalaan na ang `body`, `sheet` at `problems`.

## Ano ang iniiwan ng script

| Variable | Ano |
|---|---|
| `body` | **Kailangan.** Isang surface mesh, kadalasan mula sa `[body, info] = to_body(field, h)`. Inaayos at sinusuri ito pagkatapos ng run. |
| `sheet` | Opsyonal. Isang struct: bawat field ay numero o teksto, o struct na may `value`, `unit`, `ref` at `note`. Ito ang nagiging data sheet. |
| `problems` | Opsyonal. Ang cell na `problems` mula sa `mfg_check(field, 'sls', struct(), h)`, o sarili mong mga entry. Napupunta sila sa mga check at sa listahan ng Problema. |

## Isang kumpletong maliit na halimbawa

```
% Isang guwang na kubo na may pader.
% @generator Guwang na kubo
% @input side: mm = 12 [4 .. 40] "Gilid"
% @input wall: mm = 1.5 [0.5 .. 5] "Pader"
% @input h: mm = 0.5 [0.25 .. 2] "Laki ng voxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'ng mesh');
```

Gumagawa ito ng saradong kahon, at iniuulat ng check na sarado ang loob nito bilang error para sa powder process. Gawing hindi hihigit sa ikatlong bahagi ng pinakamanipis na pader na gusto mo ang laki ng voxel na `h`: kapag mas mababa sa mga tatlong voxel, hindi maaasahan ang pader.

## Fields

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (isang solid ng revolution mula sa profile), `tpms` (gyroid, Schwarz P at diamond surfaces, na may cell size at wall na maaaring magbago sa buong part), `lattice` at `lattice_beams`, `along` (isang bilog na channel sa kahabaan ng path), ang mga boolean na `field_union`, `field_intersect`, `field_subtract`, ang makinis na `field_blend`, at `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. Ang `sample(f, points)` ay nagbibigay ng signed distance sa mga punto (negatibo sa loob), at ang `field_voxel` ay nagbibigay ng voxel para sa mga solver. Ipinapaliwanag ng [Fields](topic:fields) kung ano ang mga ito.

Mga limitasyong dapat malaman: ang pader ng sheet na mas makapal kaysa mga isang-kapat ng cell ay nagsasara sa mga channel; ang feature na mas manipis kaysa mga tatlong voxel ay maaaring maipit; pinagdudugtong ng `along` ang mga bilog na cone, kaya ang radius na mabilis magbago ay nag-iiwan ng umbok (gamitin ang `field_revolve` para sa profile).

## Buksan ang iyong script bilang generator

Sa workspace na {{ui:Engineer}}, i-click ang {{ui:Buksan}} at piliin ang file. Hindi tinatanggap ang script na walang linyang `@generator` o `@input`: wala namang maitatakda. Nananatili ang generator sa browser na ito (hanggang 20) at binubura ito ng {{ui:Alisin}}. Ang body na sinimulan mula dito ay may kopya ng script, kaya hindi nakadepende ang part dito.

Maaari ring maglaman ng ilang generator ang isang file: isang JSON bundle `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
