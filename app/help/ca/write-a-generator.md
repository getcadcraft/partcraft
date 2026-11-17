---
title: Escriure un generador
summary: Un generador és un script de CraftScript, Lua o Python amb línies de comentari que declaren les seves entrades. Com les entrades es converteixen en un formulari, què ha de deixar el script (cos, fulla, problemes), un exemple petit i complet, i com obrir el teu script com a generador.
keywords: generador, escriure, script, craftscript, capçalera, entrada, @input, @generator, cos, fulla, problemes, to_body, mfg_check, fulla de dades, exemple, reticle, camp
from: ed8a5ed8
---

Un generador és un script ordinari ([CraftScript](topic:craftscript), Lua o Python) amb unes quantes línies de comentari al principi. PartCraft llegeix els comentaris i crea el formulari; el teu script llegeix les entrades com a variables que ja estan definides.

## La capçalera

Posa-les en línies de comentari (`%` a CraftScript, `--` a Lua, `#` a Python):

```
% @generator Intercanviador de calor
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Cabal màssic"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Superfície"
% @input solid: = true
% @input note: = "text"
```

Una entrada és `name: unit = default`; després, opcionalment, un interval `[min .. max]` (els números es mantenen dins), una llista d'opcions `{a, b, c}` i una etiqueta entre cometes. La unitat només és una etiqueta per al formulari: **el valor arriba en aquesta unitat**, de manera que un script que vol SI la converteix; i `to_si(value, 'kg/s', 'kg/s')` també comprova que la unitat signifiqui el que creus. Un nom són lletres, dígits i guió baix; `body`, `sheet` i `problems` estan reservats.

## Què deixa l'script

| Variable | Què |
|---|---|
| `body` | **Obligatori.** Una malla de superfície, normalment de `[body, info] = to_body(field, h)`. Es repara i es comprova en acabar l'execució. |
| `sheet` | Opcional. Una estructura: cada camp és un número o un text, o una estructura amb `value`, `unit`, `ref` i `note`. Esdevé la fulla de dades. |
| `problems` | Opcional. La cel·la `problems` de `mfg_check(field, 'sls', struct(), h)`, o les teves pròpies entrades. Van a les comprovacions i a la llista de Problemes. |

## Un exemple petit i complet

```
% Un cub buit amb una paret.
% @generator Cub buit
% @input side: mm = 12 [4 .. 40] "Costat"
% @input wall: mm = 1.5 [0.5 .. 5] "Paret"
% @input h: mm = 0.5 [0.25 .. 2] "Mida del vòxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Fa una caixa tancada, i la comprovació la reporta com a error per a un procés de pols perquè el seu interior està segellat. Fes que la mida del vòxel `h` sigui com a màxim una tercera part de la paret més fina que vulguis: per sota d'uns tres vòxels, una paret no és fiable.

## Camps

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (un sòlid de revolució a partir d'un perfil), `tpms` (superfícies giroide, Schwarz P i diamant, amb una mida de cel·la i un gruix de paret que poden canviar al llarg de la peça), `lattice` i `lattice_beams`, `along` (un canal rodó al llarg d'un camí), les booleanes `field_union`, `field_intersect`, `field_subtract`, el suau `field_blend`, i `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` dóna la distància signada als punts (negativa a dins), `field_voxel` dóna vòxels per als solucionadors. [Camps](topic:fields) explica què són.

Límits que convé conèixer: una paret laminar més gruixuda que aproximadament un quart de la cel·la tanca els canals; un detall més fi que uns tres vòxels es pot estrènyer; `along` uneix cons arrodonits, de manera que un radi que canvia ràpidament deixa una protuberància (usa `field_revolve` per a un perfil).

## Obre el teu script com a generador

A l'espai de treball {{ui:Enginyer}}, feu clic a {{ui:Obre}} i trieu el fitxer. Un script sense cap línia @generator ni @input es rebutja: no hi hauria res a configurar. El generador es conserva en aquest navegador (fins a 20) i {{ui:Treu}} l'elimina. Un cos iniciat a partir d'ell porta una còpia del script, de manera que la peça no depèn d'ell.

Un fitxer també pot contenir diversos generadors: un paquet JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
