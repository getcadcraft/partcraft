---
title: Posprocesadores que puede editar
summary: Un posprocesador es un archivo de texto corto que convierte la trayectoria de herramienta en código G para su control. Copie uno de los integrados, cambie las líneas que necesite (números de línea, cambio de herramienta, movimientos de referencia, código de fin), vea el código G que escribe mientras teclea y guárdelo con la pieza.
keywords: posprocesador, postprocesador, código G, NC, GRBL, LinuxCNC, editar posprocesador, posprocesador personalizado, cpost, cambio de herramienta, M6, G43, ciclo fijo, números de línea, modal, evento, variable
from: c78d0cae
---

La misma trayectoria tiene que escribirse de forma distinta para cada control: con números de línea o sin ellos, `M6` o una pausa, `G28` o `G53`, `M30` o `M2`. Un **posprocesador** es el texto corto que indica cómo. Los tres posprocesadores integrados de PartCraft (estilo Fanuc, GRBL y LinuxCNC) están escritos en este formato, así que un posprocesador propio puede empezar como copia de uno de ellos.

Revise la salida en el simulador de su máquina antes de cortar, y ejecútela primero en el aire, por encima del material en bruto. Los posprocesadores integrados escriben exactamente lo que escribían antes de que existiera este formato (las pruebas comparan su salida byte por byte en cientos de programas), pero nada de esto se ha probado en su máquina, y un posprocesador que usted cambie es responsabilidad suya de probar.

## Cree uno

En Fabricación, en **Posprocesador**:

- {{ui:Editar post…}} en un control integrado abre **su propia copia** de él. En uno de sus propios posprocesadores abre ese posprocesador.
- {{ui:Post nuevo…}} parte de un posprocesador vacío y pequeño con todos los eventos incluidos.
- {{ui:Importar archivo de post…}} lee un archivo de texto `.cpost` (el archivo que obtiene con **Guardar como archivo…** en el editor).

El editor muestra el texto, una línea que indica si se lee bien (y cuál línea está mal), y el código G que escribe el posprocesador, mientras escribe. **Vista previa con** elige un pequeño programa de muestra que ejecuta todos los eventos, o el programa propio de esta pieza. {{ui:Guardar}} conserva el posprocesador en el archivo de la pieza (hasta 20 posprocesadores) y lo elige como control. Los posprocesadores viajan con la pieza; para usar uno en otra pieza, guárdelo como archivo e impórtelo allí.

## Cómo es un posprocesador

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

Las líneas que empiezan con `//` y las líneas en blanco se ignoran. Arriba van los ajustes; luego un bloque `on <event>` por cada evento, cerrado con `end`. Un evento que omita no escribe nada.

| Ajuste | Significado |
|---|---|
| `post <id>` | El identificador del posprocesador: letras, dígitos, `-` y `_` |
| `name <text>` | Lo que muestra la lista de controles |
| `extension <ext>` | La extensión del archivo: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … en cada línea `emit`, o ninguno |
| `decimal-point yes` / `no` | `10.` en lugar de `10` (los comentarios nunca llevan el punto) |
| `canned-cycles yes` / `no` | `no`: los agujeros se escriben como los movimientos G0/G1 que representan |
| `modal <group> <words>` | Palabras de un grupo (`modal motion G0 G1 G2 G3`) que solo se escriben cuando cambian |

## Eventos

Se ejecutan en este orden para un programa: `start`; luego, para cada operación, `operation`, `tool-change` (cuando cambia la herramienta), `spindle` (cuando cambia la velocidad), `approach` (el movimiento hasta el primer punto, antes del primer rápido), `coolant-on`, después sus movimientos como `rapid`, `feed` y `arc`, y cada ciclo fijo como `cycle-start`, un `cycle-hole` por agujero y `cycle-end`; al final, `end`.

Más eventos, para lo que va más allá de tres ejes (un posprocesador sin el evento rechaza ese programa y nombra el evento que le falta):

| Evento | Cuándo | Sus variables |
|---|---|---|
| `index` | Antes de una operación cuya dirección de herramienta difiere de la anterior, y antes de la primera operación en una máquina con ejes rotatorios | `rot.a`, `rot.b`, `rot.c` (las posiciones a las que ir; vacío para un eje que la máquina no tiene), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Los movimientos de una operación cuyos ejes rotatorios se mueven mientras corta | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (sí cuando el avance debe ser de tiempo inverso), `invf` (1/minutos) |
| `rotary-end` | Después de una operación así | (vacío) |
| `probe-move` | Un movimiento que se detiene cuando el palpador se activa | `x`, `y`, `z`, `f`, `probe.n` (1 a 4), `probe.axis` (x, y o z), `probe.k` (1, 2 o 3) |
| `probe-set` | Después de los toques de un ciclo de palpado | `probe.kind` (`"z"`, `"x"`, `"y"` o `centre`), `probe.action` (`set` o `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Un movimiento de roscado en un torno | `x`, `z`, `thread.lead` |

Además, en todos los eventos: `kin` (none, a, b, ac, bc), `rotary` y `tcp` (yes o no, según la máquina en Configuración), `pivot.x`, `pivot.y`, `pivot.z`, el `op.tilt` y `op.turn` de la operación, y en un torno `spin.mode` (css o rpm), `spin.css`, `spin.max` y `tool.nose`. Una palabra con letra cuyo valor esté vacío, como `A{rot.a}` en una máquina sin eje A, se omite de la línea. Compare x, y y z como texto entre comillas (`if probe.kind == "z"`): sin comillas, son las coordenadas del movimiento.

Dos líneas más al inicio de un posprocesador lo convierten en posprocesador de torno: `machine lathe` (entonces escribe solo X y Z, y rechaza trayectorias de fresado igual que un posprocesador de fresado rechaza las de torneado) y `lathe-x diameter` o `lathe-x radius`.

Cada evento puede usar las variables de su propio tipo de movimiento, escritas como `{name}`: el programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), el material en bruto (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), la herramienta (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), la operación (`op.name`, `op.type`), `rpm`, el punto de un movimiento (`x`, `y`, `z`, `f`, y `moved`: verdadero cuando cambió un eje), arcos (`arc.g` 2 o 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) y agujeros (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). La lista **Eventos y variables** del editor muestra qué evento ve cuál. Estado que puede leer y definir: `cool`, `offset`, y `at.x`, `at.y`, `at.z`, `at.f` (los últimos valores escritos).

## Instrucciones

| Instrucción | Qué hace |
|---|---|
| `raw TEXT` | Una línea exactamente como se escribe (sin número de línea) |
| `comment TEXT` | `(TEXT)` sin caracteres no ASCII ni corchetes |
| `emit WORD WORD …` | Una línea de palabras; las palabras que salen vacías se omiten; sin palabras, no hay línea |
| `word WORD …` | Agrega palabras a la línea que se construye; un `emit` sin nada la termina |
| `if EXPR` … `else` … `end` | Condiciones: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a; si no, b) |
| `for tool in tools` … `end` | Una vez por cada herramienta que usa el programa |
| `set NAME EXPR` | Guarda un valor (`set offset tool.number`) |
| `reset NAME …` | Olvida palabras modales (un grupo, una letra de dirección como `Z`, o `at.z`) |
| `do rapid X Y Z` | Ejecuta el evento `rapid` para un punto |

Una palabra es texto escrito con huecos `{variable|filtro}`. Los filtros son `upper`, `lower`, `pad:N` (relleno con ceros), `cut:N` (primeros N caracteres), `safe` (ASCII seguro para comentarios) e `int`. Una palabra que termina en `~` es **modal**: solo se escribe cuando difiere de lo último que se escribió (`G1~`, `X{x}~`). Una palabra que termina en `~!` se escribe siempre y también se recuerda. Un nombre que no es variable es texto simple (`G81`, `mist`). Los números se redondean a 0.001 mm y se escriben sin ceros finales.

## Lo que no puede hacer un posprocesador

Solo decide cómo se escriben los movimientos, nada más. No puede cambiar una trayectoria, ordenar operaciones, partir un arco, agregar un eje, conocer el recorrido o la cinemática de su máquina, ni hacer aritmética con coordenadas (no hay `+`). Las posiciones rotatorias en sí vienen de la máquina descrita en Configuración, no del posprocesador: un posprocesador puede cambiar su signo o sus letras, no la cinemática. Los ciclos de vida de herramienta y de subprogramas no están construidos. Un archivo de posprocesador de estilo `.cps` de otro programa no puede cargarse: este es un formato distinto y más simple.
