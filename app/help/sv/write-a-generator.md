---
title: Skriv en generator
summary: En generator är ett CraftScript-, Lua- eller Python-skript med kommentarsrader som deklarerar dess indata. Hur indata blir ett formulär, vad skriptet måste lämna efter sig (body, sheet, problems), ett litet komplett exempel och hur du öppnar ditt skript som generator.
keywords: generator, skriv, skript, craftscript, rubrik, indata, @input, @generator, body, sheet, problems, to_body, mfg_check, datablad, exempel, lattice, fält
from: ed8a5ed8
---

En generator är ett vanligt skript ([CraftScript](topic:craftscript), Lua eller Python) med några kommentarsrader överst. PartCraft läser kommentarerna och skapar formuläret; ditt skript läser indata som variabler som redan är satta.

## Rubriken

Lägg dessa i kommentarsrader (`%` i CraftScript, `--` i Lua, `#` i Python):

```
% @generator Värmeväxlare
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Massflöde"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Yta"
% @input solid: = true
% @input note: = "text"
```

En indata är `namn: enhet = standardvärde`, sedan eventuellt ett intervall `[min .. max]` (tal hålls inom det), en lista med val `{a, b, c}` och en etikett inom citattecken. Enheten är bara en etikett för formuläret: **värdet kommer i den enheten**, så ett skript som vill ha SI konverterar det, och `to_si(value, 'kg/s', 'kg/s')` kontrollerar också att enheten betyder det du tror. Ett namn består av bokstäver, siffror och understreck; `body`, `sheet` och `problems` är reserverade.

## Vad skriptet lämnar

| Variabel | Vad |
|---|---|
| `body` | **Krävs.** Ett ytnät, vanligtvis från `[body, info] = to_body(field, h)`. Det repareras och kontrolleras när körningen är klar. |
| `sheet` | Valfri. En struct: varje fält är ett tal eller en text, eller en struct med `value`, `unit`, `ref` och `note`. Den blir databladet. |
| `problems` | Valfri. `problems`-cellen från `mfg_check(field, 'sls', struct(), h)`, eller egna poster. De går till kontrollerna och till listan Problem. |

## Ett komplett litet exempel

```
% En ihålig kub med en vägg.
% @generator Ihålig kub
% @input side: mm = 12 [4 .. 40] "Sida"
% @input wall: mm = 1.5 [0.5 .. 5] "Vägg"
% @input h: mm = 0.5 [0.25 .. 2] "Voxelstorlek"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Den gör en sluten låda, och kontrollen rapporterar dess tätade insida som ett fel för en pulverprocess. Gör voxelstorleken `h` högst en tredjedel av den tunnaste vägg du vill ha: under cirka tre voxlar är en vägg inte tillförlitlig.

## Fält

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (en rotationskropp från en profil), `tpms` (gyroid-, Schwarz P- och diamantytor, med en cellstorlek och en vägg som kan ändras över delen), `lattice` och `lattice_beams`, `along` (en rund kanal längs en bana), de booleska operationerna `field_union`, `field_intersect`, `field_subtract`, den mjuka `field_blend`, samt `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` ger det signerade avståndet i punkter (negativt inuti), `field_voxel` ger voxlar till lösarna. [Fields](topic:fields) förklarar vad de är.

Begränsningar som är värda att känna till: en skivvägg tjockare än cirka en fjärdedel av cellen sluter kanalerna; ett element tunnare än cirka tre voxlar kan klämmas ihop; `along` sammanfogar runda koner, så en radie som ändras snabbt ger en utbuktning (använd `field_revolve` för en profil).

## Öppna ditt skript som generator

Klicka på {{ui:Open}} i arbetsytan {{ui:Engineer}} och välj filen. Ett skript utan rad med `@generator` eller `@input` avvisas: det skulle inte finnas något att ställa in. Generatorn sparas i den här webbläsaren (upp till 20) och {{ui:Remove}} tar bort den. En kropp som startas från den bär en kopia av skriptet, så delen är inte beroende av det.

En fil kan också innehålla flera generatorer: ett JSON-paket `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
