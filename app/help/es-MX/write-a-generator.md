---
title: Escribir un generador
summary: Un generador es un script de CraftScript, Lua o Python con líneas de comentario que declaran sus entradas. Cómo las entradas se convierten en un formulario, qué debe dejar el script (cuerpo, hoja, problemas), un ejemplo pequeño y completo, y cómo abrir su script como generador.
keywords: generador, escribir, script, craftscript, encabezado, entrada, @input, @generator, cuerpo, hoja, problemas, to_body, mfg_check, hoja de datos, ejemplo, retícula, campo
from: ed8a5ed8
---

Un generador es un script común ([CraftScript](topic:craftscript), Lua o Python) con unas pocas líneas de comentario al inicio. PartCraft lee los comentarios y crea el formulario; su script lee las entradas como variables que ya están definidas.

## El encabezado

Coloque estas líneas en comentarios (`%` en CraftScript, `--` en Lua, `#` en Python):

```
% @generator Intercambiador de calor
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Caudal másico"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Superficie"
% @input solid: = true
% @input note: = "text"
```

Una entrada es `nombre: unidad = valor predeterminado`, y opcionalmente un rango `[mín .. máx]` (los números se mantienen dentro de él), una lista de opciones `{a, b, c}` y una etiqueta entre comillas. La unidad es solo una etiqueta para el formulario: **el valor llega en esa unidad**, así que un script que necesite SI debe convertirlo; `to_si(value, 'kg/s', 'kg/s')` además comprueba que la unidad sea la que usted cree. Un nombre está formado por letras, dígitos y guion bajo; `body`, `sheet` y `problems` están reservados.

## Lo que deja el script

| Variable | Qué es |
|---|---|
| `body` | **Obligatorio.** Una malla de superficie, normalmente de `[body, info] = to_body(field, h)`. Se repara y se revisa al terminar la ejecución. |
| `sheet` | Opcional. Una estructura: cada campo es un número o un texto, o una estructura con `value`, `unit`, `ref` y `note`. Se convierte en la hoja de datos. |
| `problems` | Opcional. La celda `problems` de `mfg_check(field, 'sls', struct(), h)`, o sus propias entradas. Pasan a las comprobaciones y a la lista de problemas. |

## Un ejemplo completo y pequeño

```
% Un cubo hueco con una pared.
% @generator Cubo hueco
% @input side: mm = 12 [4 .. 40] "Lado"
% @input wall: mm = 1.5 [0.5 .. 5] "Pared"
% @input h: mm = 0.5 [0.25 .. 2] "Tamaño de vóxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'de la malla');
```

Crea una caja cerrada, y la comprobación informa de que su interior sellado es un error para un proceso por polvo. Haga que el tamaño de vóxel `h` sea como máximo un tercio de la pared más delgada que desee: por debajo de unos tres vóxeles, una pared no es confiable.

## Campos

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (un sólido de revolución a partir de un perfil), `tpms` (superficies giroide, P de Schwarz y diamante, con un tamaño de celda y un grosor de pared que pueden cambiar a lo largo de la pieza), `lattice` y `lattice_beams`, `along` (un canal redondo a lo largo de una trayectoria), las operaciones booleanas `field_union`, `field_intersect` y `field_subtract`, el suavizado `field_blend`, y `field_offset`, `field_shell`, `field_move`, `field_rotate` y `field_scale`. `sample(f, points)` da la distancia con signo en los puntos (negativa dentro), y `field_voxel` da los vóxeles para los solucionadores. [Campos](topic:fields) explica qué son.

Límites que conviene conocer: una pared de lámina más gruesa que aproximadamente una cuarta parte de la celda cierra los canales; una característica más delgada que unos tres vóxeles puede estrangularse; `along` une conos redondeados, así que un radio que cambia rápido deja un abultamiento (use `field_revolve` para un perfil).

## Abra su script como generador

En el espacio de trabajo {{ui:Ingeniería}}, haga clic en {{ui:Abrir}} y elija el archivo. Un script sin línea `@generator` ni `@input` se rechaza: no habría nada que definir. El generador se guarda en este navegador (hasta 20) y {{ui:Quitar}} lo elimina. Una pieza iniciada a partir de él lleva una copia del script, así que la pieza no depende de él.

Un archivo también puede contener varios generadores: un paquete JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
