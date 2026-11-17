---
title: Escribir un generador
summary: Un generador ha'e script CraftScript, Lua térã Python, mbykymi línea comentario ndive omoĩva hendive entrada kuéra. Mba'éichapa entrada kuéra oiko formulario-pe, mba'épa script oikotevẽ omoĩ (body, sheet, problems), peteĩ ejemplo pequeño completo ha mba'éichapa nde script ejapo generador-pe.
keywords: generador, escribir, script, craftscript, encabezado, entrada, @input, @generator, body, sheet, problems, to_body, mfg_check, hoja de datos, ejemplo, retícula, campo
from: ed8a5ed8
---

Generador ha'e script ordinario ([CraftScript](topic:craftscript), Lua térã Python) mbykymi línea comentario ypykuépe. PartCraft-pe ohechauka comentario kuéra ha ombohasa formulario; nde script omoñe'ẽ entrada kuéra variable ramo, jau ojoguáva.

## Encabezado

Ko'ã omoĩ línea comentario-pe (`%` CraftScript-pe, `--` Lua-pe, `#` Python-pe):

```
% @generator Intercambiador de calor
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Caudal másico"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Superficie"
% @input solid: = true
% @input note: = "texto"
```

Peteĩ entrada ha'e `name: unidad = default`, upe rupi opcional rango `[min .. max]` (número kuéra oñemoĩ upépe), peteĩ lista opciones `{a, b, c}` ha peteĩ etiqueta comilla-pe. Unidad ha'e tenda etiqueta formulario-pe: **valor oúta upe unidad-pe**, upévare script ojerure SI-pe ombotroca, ha `to_si(value, 'kg/s', 'kg/s')` avei opa'ete ohechauka unidad ojapo jave nde ndereikuaáiva. Nombre ha'e letra, número ha guion bajo; `body`, `sheet` ha `problems` ojeguerekoha.

## Lo que deja el script

| Variable | Mba'épa |
|---|---|
| `body` | **Oikotevẽ.** Peteĩ malla superficie, kuaaty `[body, info] = to_body(field, h)`. Oarreglavéta ha ojeexamina run ojepe'a rire. |
| `sheet` | Opcional. Peteĩ struct: kada campo número térã texto, térã struct `value`, `unit`, `ref` ha `note` ndive. Ha'e data sheet-pe. |
| `problems` | Opcional. `problems` celda `mfg_check(field, 'sls', struct(), h)` rupi, térã nde entrada kuéra. Oho checks-pe ha Problems lista-pe. |

## Peteĩ ejemplo pequeño completo

```
% Peteĩ cubo hueco muro ndive.
% @generator Cubo hueco
% @input side: mm = 12 [4 .. 40] "Lado"
% @input wall: mm = 1.5 [0.5 .. 5] "Muro"
% @input h: mm = 0.5 [0.25 .. 2] "Tamaño de vóxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Ojapo peteĩ cubo cerrado, ha check-pe ohechauka hendive sellado error ha'e proceso polvo-pe. Pensa voxel tamaño `h` ndaha'éi mayor peteĩ tercio de muro más delgado nde oipotáva: tres voxel mboyve muro ndaha'éi confiable.

## Campos

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (sólido de revolución peteĩ perfil rupi), `tpms` (superficies giroide, Schwarz P ha diamante, celda tamaño ha muro ndive ojeprobá parte rupive), `lattice` ha `lattice_beams`, `along` (canal redondo peteĩ camino rupi), booleanos `field_union`, `field_intersect`, `field_subtract`, suave `field_blend`, ha `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` ome'ẽ distancia con signo puntos-pe (negativo adentro), `field_voxel` ome'ẽ voxel solver kuérape. [Campos](topic:fields) ohechauka mba'épa ha'e.

Límites ikatu jaikuaa: muro hoja-pe hasýva peteĩ cuarto celda mboyve ojeho'i canales; peteĩ detalle más delgado tres voxel mboyve ikatu ojepiri; `along` oñembohysýi cono redondo, upévare radio ojeporomba'eterei vale kuéra oguereko burbuja (emoĩ `field_revolve` perfil-pe).

## Emoĩ nde script generador-pe

Espacio de trabajo {{ui:Engineer}}-pe eiporavo {{ui:Open}} ha eiporavo archivo. Script ndaguerekoihápe `@generator` térã `@input` línea, ndojeporuvéi: ndaipóri mba'e omoĩtava. Generador ojekuaaukávo ko navegador-pe (up to 20 peteĩ mboyve) ha {{ui:Remove}} omboguejy. Body oñepyrũva upégui oguereko script peteĩ copia, upévare pieza ndojepuréi upe-pe.

Peteĩ archivo avei ikatu oguereko hetaiterei generador: peteĩ paquete JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
