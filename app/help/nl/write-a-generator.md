---
title: Een generator schrijven
summary: Een generator is een CraftScript-, Lua- of Python-script met commentaarregels die de invoer ervan declareren. Hoe de invoer een formulier wordt, wat het script moet achterlaten (body, sheet, problems), een klein compleet voorbeeld en hoe u uw script als generator opent.
keywords: generator, schrijven, script, craftscript, kop, invoer, @input, @generator, lichaam, datablad, problems, to_body, mfg_check, voorbeeld, lattice, veld
from: ed8a5ed8
---

Een generator is een gewoon script ([CraftScript](topic:craftscript), Lua of Python) met een paar commentaarregels bovenaan. PartCraft leest de commentaarregels en maakt het formulier; uw script leest de invoer als variabelen die al zijn ingesteld.

## De kop

Zet deze in commentaarregels (`%` in CraftScript, `--` in Lua, `#` in Python):

```
% @generator Heat exchanger
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Mass flow"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Surface"
% @input solid: = true
% @input note: = "text"
```

Een invoer is `naam: eenheid = standaardwaarde`, daarna optioneel een bereik `[min .. max]` (getallen blijven erbinnen), een lijst met keuzes `{a, b, c}` en een label tussen aanhalingstekens. De eenheid is alleen een label voor het formulier: **de waarde komt binnen in die eenheid**, dus een script dat SI wil, rekent om, en `to_si(value, 'kg/s', 'kg/s')` controleert ook of de eenheid betekent wat u denkt. Een naam bestaat uit letters, cijfers en underscore; `body`, `sheet` en `problems` zijn al bezet.

## Wat het script achterlaat

| Variabele | Wat |
|---|---|
| `body` | **Verplicht.** Een oppervlaktemesh, meestal van `[body, info] = to_body(field, h)`. Die wordt hersteld en gecontroleerd zodra de run eindigt. |
| `sheet` | Optioneel. Een struct: elk veld is een getal of tekst, of een struct met `value`, `unit`, `ref` en `note`. Het wordt het datablad. |
| `problems` | Optioneel. De `problems`-cel van `mfg_check(field, 'sls', struct(), h)`, of uw eigen items. Die gaan naar de controles en naar de Problems-lijst. |

## Een compleet klein voorbeeld

```
% Een holle kubus met een wand.
% @generator Hollow cube
% @input side: mm = 12 [4 .. 40] "Side"
% @input wall: mm = 1.5 [0.5 .. 5] "Wall"
% @input h: mm = 0.5 [0.25 .. 2] "Voxel size"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Het maakt een gesloten doos, en de controle meldt de afgesloten binnenkant als fout voor een poederproces. Maak de voxelgrootte `h` ten hoogste een derde van de dunste wand die u wilt: onder ongeveer drie voxels is een wand niet betrouwbaar.

## Velden

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (een omwentelingslichaam uit een profiel), `tpms` (gyroid-, Schwarz P- en diamantoppervlakken, met een celgrootte en wand die over het onderdeel mogen veranderen), `lattice` en `lattice_beams`, `along` (een rond kanaal langs een pad), de booleaanse bewerkingen `field_union`, `field_intersect`, `field_subtract`, de gladde `field_blend`, en `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` geeft de afstand met teken in punten (negatief binnenin), `field_voxel` geeft voxels voor de solvers. [Velden](topic:fields) legt uit wat ze zijn.

Grenzen die de moeite waard zijn om te kennen: een sheet-wand die dikker is dan ongeveer een kwart van de cel sluit de kanalen; een kenmerk dunner dan ongeveer drie voxels kan dichtknijpen; `along` verbindt ronde kegels, dus een straal die snel verandert geeft een bult (gebruik `field_revolve` voor een profiel).

## Open uw script als generator

Klik in de werkomgeving {{ui:Engineer}} op {{ui:Open}} en kies het bestand. Een script zonder regel `@generator` of `@input` wordt geweigerd: er zou niets zijn om in te stellen. De generator blijft in deze browser bewaard (tot 20) en {{ui:Remove}} verwijdert hem. Een lichaam dat ermee is gestart, krijgt een kopie van het script, zodat het onderdeel niet van dat script afhangt.

Een bestand kan ook meerdere generators bevatten: een JSON-bundel `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
