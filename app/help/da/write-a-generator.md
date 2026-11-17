---
title: Skriv en generator
summary: En generator er et CraftScript-, Lua- eller Python-script med kommentarlinjer, der angiver dets input. Hvordan input bliver til en formular, hvad scriptet skal efterlade (body, sheet, problems), et lille komplet eksempel, og hvordan du åbner dit script som generator.
keywords: generator, skriv, script, craftscript, header, input, @input, @generator, body, sheet, problems, to_body, mfg_check, datablad, eksempel, gitter, felt
from: ed8a5ed8
---

En generator er et almindeligt script ([CraftScript](topic:craftscript), Lua eller Python) med nogle få kommentarlinjer øverst. PartCraft læser kommentarerne og laver formularen; dit script læser input som variabler, der allerede er sat.

## Headeren

Skriv disse i kommentarlinjer (`%` i CraftScript, `--` i Lua, `#` i Python):

```
% @generator Varmeveksler
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Massestrøm"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Overflade"
% @input solid: = true
% @input note: = "text"
```

Et input er `navn: enhed = standardværdi`, derefter eventuelt et interval `[min .. max]` (tal holdes inden for det), en liste over valg `{a, b, c}` og en label i anførselstegn. Enheden er kun en etiket til formularen: **værdien kommer i den enhed**, så et script, der vil have SI, skal omregne den, og `to_si(value, 'kg/s', 'kg/s')` kontrollerer også, at enheden betyder det, du tror. Et navn består af bogstaver, cifre og understregning; `body`, `sheet` og `problems` er reserveret.

## Hvad scriptet efterlader

| Variabel | Hvad |
|---|---|
| `body` | **Påkrævet.** Et overfladenet, normalt fra `[body, info] = to_body(field, h)`. Det repareres og kontrolleres, når kørslen er færdig. |
| `sheet` | Valgfri. En struct: hvert felt er et tal eller en tekst, eller en struct med `value`, `unit`, `ref` og `note`. Det bliver til databladet. |
| `problems` | Valgfri. `problems`-cellen fra `mfg_check(field, 'sls', struct(), h)`, eller dine egne poster. De går til kontrollerne og til listen Problemer. |

## Et komplet lille eksempel

```
% En hul terning med en væg.
% @generator Hul terning
% @input side: mm = 12 [4 .. 40] "Sidelængde"
% @input wall: mm = 1.5 [0.5 .. 5] "Væg"
% @input h: mm = 0.5 [0.25 .. 2] "Voxelstørrelse"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Den laver en lukket kasse, og kontrollen melder dens lukkede indre som en fejl for en pulverproces. Gør voxelstørrelsen `h` højst en tredjedel af den tyndeste væg, du ønsker: under omkring tre voxels er en væg ikke pålidelig.

## Felter

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (et omdrejningslegeme ud fra en profil), `tpms` (gyroid-, Schwarz P- og diamantoverflader, med en cellestørrelse og en væg, der kan ændre sig over delen), `lattice` og `lattice_beams`, `along` (en rund kanal langs en sti), de booleske operationer `field_union`, `field_intersect`, `field_subtract`, den glatte `field_blend`, samt `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` giver den signerede afstand i punkterne (negativ indenfor), og `field_voxel` giver voxels til løserne. [Felter](topic:fields) forklarer, hvad de er.

Grænser, der er værd at kende: en plade-væg, der er tykkere end omkring en fjerdedel af cellen, lukker kanalerne; et felt, der er tyndere end omkring tre voxels, kan klemme sammen; `along` forbinder runde kegler, så en radius, der ændrer sig hurtigt, giver en bule (brug `field_revolve` til en profil).

## Åbn dit script som generator

I arbejdsområdet {{ui:Engineer}} klikker du på {{ui:Open}} og vælger filen. Et script uden linjen `@generator` eller `@input` afvises: der ville ikke være noget at sætte. Generatoren gemmes i denne browser (op til 20), og {{ui:Remove}} sletter den. En del, der startes fra den, får en kopi af scriptet, så delen ikke afhænger af det.

En fil kan også indeholde flere generatorer: et JSON-bundt `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
