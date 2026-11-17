---
title: Posts de procesador que puede editar
summary: Un post es un archivo de texto corto que convierte la trayectoria en G-code para su control. Copie uno de los posts integrados, cambie las líneas que necesite (números de línea, cambio de herramienta, movimientos de origen, código de fin), vea el G-code que escribe mientras escribe y guárdelo con la pieza.
keywords: post, post processor, postprocessor, G-code, NC, GRBL, LinuxCNC, editar post, post personalizado, cpost, cambio de herramienta, M6, G43, ciclo fijo, números de línea, modal, evento, variable
from: 36ab8a38
---

Un mismo recorrido de herramienta debe escribirse de forma distinta según el control: con o sin números de línea, `M6` o una pausa, `G28` o `G53`, `M30` o `M2`. Un **post** es el texto corto que indica cómo. Los tres posts integrados de PartCraft (estilo Fanuc, GRBL y LinuxCNC) están escritos en este formato, así que un post propio puede empezar como copia de uno de ellos.

Revise la salida en el simulador de su propia máquina antes de cortar, y pruebe primero el programa en vacío, sobre el material. Los posts integrados escriben exactamente lo que escribían antes de que existiera este formato (las pruebas comparan su salida byte por byte en cientos de programas), pero nada de esto se ha comprobado en su máquina, y un post que usted cambie es responsabilidad suya comprobarlo.

## Crear uno

En Fabricación, en **Post**:

- {{ui:Editar post…}} sobre un control integrado abre **su propia copia** de ese control. En uno de sus propios posts, abre ese post.
- {{ui:Post nuevo…}} inicia con un post en blanco pequeño que contiene todos los eventos.
- {{ui:Importar archivo de post…}} lee un archivo de texto `.cpost` (el archivo que obtiene con **Guardar como archivo…** en el editor).

El editor muestra el texto, una línea que indica si se lee correctamente (y cuál línea está mal), y el G-code que escribe el post, a medida que escribe. **Vista previa con** elige un programa de muestra pequeño que ejecuta todos los eventos, o el programa propio de esta pieza. {{ui:Guardar}} guarda el post en el archivo de la pieza (hasta 20 posts) y lo elige como control. Los posts viajan con la pieza; para usar uno en otra pieza, guárdelo como archivo e impórtelo allí.

## Cómo es un post

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

Las líneas que empiezan con `//` y las líneas vacías se ignoran. Al principio van los ajustes; después, un bloque `on <event>` por cada evento, cerrado con `end`. Un evento que omita no escribe nada.

| Ajuste | Significado |
|---|---|
| `post <id>` | El id del post: letras, dígitos, `-` y `_` |
| `name <text>` | Lo que muestra la lista de Control |
| `extension <ext>` | La extensión del archivo: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … en cada línea `emit`, o ninguno |
| `decimal-point yes` / `no` | `10.` en lugar de `10` (los comentarios nunca llevan punto) |
| `canned-cycles yes` / `no` | `no`: los agujeros se escriben como los movimientos G0/G1 que representan |
| `modal <group> <words>` | Palabras de un grupo (`modal motion G0 G1 G2 G3`) que solo se escriben cuando cambian |

## Eventos

Se ejecutan en este orden para un programa: `start`; luego, para cada operación, `operation`, `tool-change` (cuando cambia la herramienta), `spindle` (cuando cambia la velocidad), `approach` (el movimiento hasta el primer punto, antes del primer rápido), `coolant-on`, después sus movimientos como `rapid`, `feed` y `arc`, y cada ciclo fijo como `cycle-start`, un `cycle-hole` por agujero y `cycle-end`; al final, `end`.

Cada evento puede usar las variables de su propio tipo de movimiento, escritas `{name}`: las del programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), las del material (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), las de la herramienta (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), las de la operación (`op.name`, `op.type`), `rpm`, las del punto de un movimiento (`x`, `y`, `z`, `f`, y `moved`: verdadero cuando cambió un eje), los arcos (`arc.g` 2 o 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) y los agujeros (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). La lista **Eventos y variables** del editor muestra qué evento ve cada variable. Estado que puede leer y establecer: `cool`, `offset`, y `at.x`, `at.y`, `at.z`, `at.f` (los últimos valores escritos).

## Instrucciones

| Instrucción | Qué hace |
|---|---|
| `raw TEXT` | Una línea exactamente como se escribe (sin número de línea) |
| `comment TEXT` | `(TEXT)` con los caracteres no ASCII y los paréntesis quitados |
| `emit WORD WORD …` | Una línea de palabras; las palabras que quedan vacías se omiten; sin palabras, no hay línea |
| `word WORD …` | Añade palabras a la línea en construcción; un `emit` sin palabras la termina |
| `if EXPR` … `else` … `end` | Condiciones: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, o bien b) |
| `for tool in tools` … `end` | Una vez por cada herramienta que usa el programa |
| `set NAME EXPR` | Recuerda un valor (`set offset tool.number`) |
| `reset NAME …` | Olvida palabras modales (un grupo, una letra de dirección como `Z`, o `at.z`) |
| `do rapid X Y Z` | Ejecuta el evento `rapid` para un punto |

Una palabra es texto escrito con huecos `{variable|filter}`. Los filtros son `upper`, `lower`, `pad:N` (relleno con ceros), `cut:N` (primeros N caracteres), `safe` (ASCII seguro para comentarios) e `int`. Una palabra que termina en `~` es **modal**: solo se escribe cuando difiere de lo último escrito (`G1~`, `X{x}~`). Una palabra que termina en `~!` se escribe siempre y también se recuerda. Un nombre que no es variable es texto simple (`G81`, `mist`). Los números se redondean a 0.001 mm y se escriben sin ceros finales.

## Lo que un post no puede hacer

Solo decide cómo se escriben los movimientos, nada más. No puede cambiar una trayectoria, ordenar operaciones, dividir un arco, añadir un eje, conocer el recorrido o la cinemática de su máquina, ni hacer aritmética con coordenadas (no hay `+`). El sondeo, los ciclos de vida de herramienta y de subprogramas, la salida de 4.º y 5.º eje y los códigos de torno no están disponibles. Un archivo de post de estilo `.cps` de otro programa no se puede cargar: este es un formato distinto y más sencillo.
