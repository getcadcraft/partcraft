---
title: Escribir un xerador
summary: Un xerador é un script de CraftScript, Lua ou Python con liñas de comentario que declaran as súas entradas. Como as entradas se converten nun formulario, o que o script debe deixar (corpo, folla, problemas), un exemplo pequeno e completo, e como abrir o script como xerador.
keywords: xerador, escribir, script, craftscript, cabeceira, entrada, @input, @generator, corpo, folla, problemas, to_body, mfg_check, folla de datos, exemplo, retículo, campo
from: ed8a5ed8
---

Un xerador é un script normal ([CraftScript](topic:craftscript), Lua ou Python) con algunhas liñas de comentario ao principio. PartCraft lee os comentarios e crea o formulario; o script le as entradas como variables que xa están definidas.

## A cabeceira

Escriba estas liñas en forma de comentario (`%` en CraftScript, `--` en Lua, `#` en Python):

```
% @generator Intercambiador de calor
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Caudal másico"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Superficie"
% @input solid: = true
% @input note: = "texto"
```

Unha entrada é `nome: unidade = valor por defecto`, despois, opcionalmente, un intervalo `[min .. max]` (os números quedan dentro del), unha lista de opcións `{a, b, c}` e unha etiqueta entre aspas. A unidade só é unha etiqueta para o formulario: **o valor chega nesa unidade**, así que un script que queira SI convérteo, e `to_si(value, 'kg/s', 'kg/s')` tamén comproba que a unidade significa o que vostede cre. Un nome está formado por letras, díxitos e guión baixo; `body`, `sheet` e `problems` están reservados.

## O que deixa o script

| Variable | Que |
|---|---|
| `body` | **Obrigatoria.** Unha malla de superficie, normalmente de `[body, info] = to_body(field, h)`. Repárase e compróbase ao rematar a execución. |
| `sheet` | Opcional. Un struct: cada campo é un número ou texto, ou un struct con `value`, `unit`, `ref` e `note`. Convértese na folla de datos. |
| `problems` | Opcional. A celda `problems` de `mfg_check(field, 'sls', struct(), h)`, ou entradas propias. Van ás comprobacións e á lista de problemas. |

## Un exemplo completo e pequeno

```
% Un cubo oco cun muro.
% @generator Cubo oco
% @input side: mm = 12 [4 .. 40] "Lado"
% @input wall: mm = 1.5 [0.5 .. 5] "Muro"
% @input h: mm = 0.5 [0.25 .. 2] "Tamaño do voxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'da malla');
```

Xera unha caixa pechada, e a comprobación informa do seu interior selado como erro para un proceso de po. Faga que o tamaño do voxel `h` sexa como máximo a terceira parte da parede máis fina que queira: por debaixo de uns tres voxels unha parede non é fiable.

## Campos

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (un sólido de revolución a partir dun perfil), `tpms` (superficies xiroide, Schwarz P e diamante, cun tamaño de célula e unha parede que poden variar ao longo da peza), `lattice` e `lattice_beams`, `along` (un canal redondo ao longo dun camiño), as operacións booleanas `field_union`, `field_intersect`, `field_subtract`, o `field_blend` suave, e `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` dá a distancia con signo nos puntos (negativa dentro), `field_voxel` dá voxels para os resolutores. [Campos](topic:fields) explica o que son.

Límites que conven coñecer: unha parede de folla máis grosa que uns a cuarta parte da célula pecha os canais; unha característica máis fina que uns tres voxels pode estreitarse; `along` une conos redondos, así que un raio que cambia rápido deixa un abultamento (empregue `field_revolve` para un perfil).

## Abrir o script como xerador

No espazo de traballo {{ui:Enxeñaría}} prema {{ui:Abrir}} e escolla o ficheiro. Un script sen liña `@generator` nin `@input` recházase: non habería nada que definir. O xerador gárdase neste navegador (ata 20) e {{ui:Eliminar}} elimínao. Un corpo iniciado a partir del leva unha copia do script, así que a peza non depende del.

Un ficheiro tamén pode conter varios xeradores: un paquete JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
