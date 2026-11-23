---
title: Postprocesadores que podés editar
summary: Un postprocesador es un archivo de texto corto que convierte la trayectoria en G-code para tu control. Copiá uno de los integrados, cambiá las líneas que necesités (números de línea, cambio de herramienta, movimientos de referencia, código de fin), mirá el G-code que escribe mientras tipeás y guardalo con la pieza.
keywords: post, postprocesador, post processor, G-code, NC, GRBL, LinuxCNC, editar post, post personalizado, cpost, cambio de herramienta, M6, G43, ciclo fijo, números de línea, modal, evento, variable
from: c78d0cae
---

La misma trayectoria tiene que escribirse de forma distinta para cada control: con números de línea o sin ellos, `M6` o una pausa, `G28` o `G53`, `M30` o `M2`. Un **postprocesador** es el texto corto que dice cómo. Los tres postprocesadores integrados de PartCraft (estilo Fanuc, GRBL y LinuxCNC) están escritos en este formato, así que un postprocesador propio puede empezar como copia de uno de ellos.

Revisá la salida en el simulador propio de tu máquina antes de cortar, y corrélo primero en el aire sobre el material. Los postprocesadores integrados escriben exactamente lo que escribían antes de que existiera este formato (las pruebas comparan su salida byte por byte en cientos de programas), pero nada de esto se probó en tu máquina, y un postprocesador que cambiás es tuyo para probarlo.

## Crear uno

En Fabricación, bajo **Post**:

- {{ui:Edit post…}} sobre un control integrado abre **tu propia copia** de él. Sobre uno de tus postprocesadores, abre ese.
- {{ui:New post…}} empieza desde un postprocesador en blanco y pequeño, con todos los eventos.
- {{ui:Import post file…}} lee un archivo de texto `.cpost` (el archivo que obtenés con **Guardar como archivo…** en el editor).

El editor muestra el texto, una línea que indica si se puede leer (y cuál línea está mal), y el G-code que escribe el postprocesador, mientras tipeás. **Vista previa con** elige un programa de muestra pequeño que ejecuta todos los eventos, o el propio programa de esta pieza. {{ui:Save}} guarda el postprocesador en el archivo de la pieza (hasta 20 postprocesadores) y lo elige como control. Los postprocesadores viajan con la pieza; para usar uno en otra pieza, guardalo como archivo e importalo allí.

## Cómo es un postprocesador

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

Las líneas que empiezan con `//` y las líneas en blanco se ignoran. Arriba van las configuraciones; después, un bloque `on <evento>` por cada evento, cerrado con `end`. Un evento que dejes fuera no escribe nada.

| Configuración | Significado |
|---|---|
| `post <id>` | El id del postprocesador: letras, dígitos, `-` y `_` |
| `name <texto>` | Lo que muestra la lista de Control |
| `extension <ext>` | La extensión del archivo: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … en cada línea de `emit`, o ninguno |
| `decimal-point yes` / `no` | `10.` en lugar de `10` (los comentarios nunca llevan punto) |
| `canned-cycles yes` / `no` | `no`: los agujeros se escriben como los movimientos G0/G1 que representan |
| `modal <grupo> <palabras>` | Palabras de un grupo (`modal motion G0 G1 G2 G3`) que se escriben solo cuando cambian |

## Eventos

Corren en este orden para un programa: `start`; después, para cada operación, `operation`, `tool-change` (cuando cambia la herramienta), `spindle` (cuando cambia la velocidad), `approach` (el movimiento hasta el primer punto, antes del primer rápido), `coolant-on`, luego sus movimientos como `rapid`, `feed` y `arc`, y cada ciclo fijo como `cycle-start`, un `cycle-hole` por cada agujero y `cycle-end`; al final, `end`.

Más eventos, para lo que va más allá de tres ejes (un postprocesador sin el evento rechaza ese programa y nombra el evento que le falta):

| Evento | Cuándo | Sus variables |
|---|---|---|
| `index` | Antes de una operación cuya dirección de herramienta difiere de la anterior, y antes de la primera operación en una máquina con ejes rotativos | `rot.a`, `rot.b`, `rot.c` (las posiciones a las que ir; vacías para un eje que la máquina no tiene), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Los movimientos de una operación cuyos ejes rotativos se mueven mientras corta | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (sí cuando el avance debe ser de tiempo inverso), `invf` (1/minutos) |
| `rotary-end` | Después de una operación así | |
| `probe-move` | Un movimiento que se detiene cuando el palpador se activa | `x`, `y`, `z`, `f`, `probe.n` (1 a 4), `probe.axis` (x, y o z), `probe.k` (1, 2 o 3) |
| `probe-set` | Después de los toques de un ciclo de palpado | `probe.kind` (`"z"`, `"x"`, `"y"` o `centre`), `probe.action` (`set` o `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Un movimiento de roscado en un torno | `x`, `z`, `thread.lead` |

Para todos los eventos además: `kin` (none, a, b, ac, bc), `rotary` y `tcp` (yes o no, desde la máquina en Setup), `pivot.x`, `pivot.y`, `pivot.z`, el `op.tilt` y `op.turn` de la operación, y en un torno `spin.mode` (css o rpm), `spin.css`, `spin.max` y `tool.nose`. Una palabra con letra cuyo valor está vacío, como `A{rot.a}` en una máquina sin eje A, queda fuera de la línea. Comparalas con x, y y z como texto entre comillas (`if probe.kind == "z"`): sin comillas son las coordenadas del movimiento.

Dos líneas más al principio de un postprocesador lo convierten en postprocesador de torno: `machine lathe` (entonces escribe solo X y Z, y rechaza trayectorias de fresado como lo hace un postprocesador de fresado con trayectorias de torneado) y `lathe-x diameter` o `lathe-x radius`.

Cada evento puede usar las variables de su propio tipo de movimiento, escritas `{nombre}`: el programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), el material (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), la herramienta (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), la operación (`op.name`, `op.type`), `rpm`, el punto de un movimiento (`x`, `y`, `z`, `f`, y `moved`: verdadero cuando cambió un eje), arcos (`arc.g` 2 o 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) y agujeros (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). La lista **Events and variables** del editor muestra qué evento ve cada cosa. Estado que podés leer y fijar: `cool`, `offset`, y `at.x`, `at.y`, `at.z`, `at.f` (los últimos valores escritos).

## Instrucciones

| Instrucción | Qué hace |
|---|---|
| `raw TEXT` | Una línea tal como se escribe (sin número de línea) |
| `comment TEXT` | `(TEXT)` con caracteres no ASCII y corchetes quitados |
| `emit WORD WORD …` | Una línea de palabras; las palabras que quedan vacías se omiten; sin palabras, sin línea |
| `word WORD …` | Agrega palabras a la línea en construcción; un `emit` vacío la cierra |
| `if EXPR` … `else` … `end` | Condiciones: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, si no b) |
| `for tool in tools` … `end` | Una vez por cada herramienta que usa el programa |
| `set NAME EXPR` | Recordar un valor (`set offset tool.number`) |
| `reset NAME …` | Olvidar palabras modales (un grupo, una letra de dirección como `Z`, o `at.z`) |
| `do rapid X Y Z` | Ejecutar el evento `rapid` para un punto |

Una palabra es texto escrito con huecos `{variable|filtro}`. Los filtros son `upper`, `lower`, `pad:N` (relleno con ceros), `cut:N` (primeros N caracteres), `safe` (ASCII seguro para comentarios) e `int`. Una palabra que termina en `~` es **modal**: se escribe solo cuando difiere de lo último escrito (`G1~`, `X{x}~`). Una palabra que termina en `~!` se escribe siempre y también se recuerda. Un nombre que no es variable es texto simple (`G81`, `mist`). Los números se redondean a 0,001 mm y se escriben sin ceros finales.

## Lo que un postprocesador no puede hacer

Decide solamente cómo se escriben los movimientos, nada más. No puede cambiar una trayectoria, ordenar operaciones, partir un arco, agregar un eje, conocer el recorrido o la cinemática de tu máquina, ni hacer aritmética con coordenadas (no hay `+`). Las posiciones rotativas salen de la máquina descrita en Setup, no del postprocesador: un postprocesador puede cambiar su signo o sus letras, no la cinemática. Los ciclos de vida de herramienta y de subprogramas no están hechos. Un archivo de postprocesador `.cps` de otro programa no se puede cargar: este es otro formato, más simple.
