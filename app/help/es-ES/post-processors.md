---
title: Posprocesadores que puede editar
summary: Un posprocesador es un archivo de texto corto que convierte la trayectoria de la herramienta en código G para su control. Copie uno de los posprocesadores integrados, cambie las líneas que necesite (números de línea, cambio de herramienta, movimientos de origen, código de fin), vea el código G que escribe mientras escribe y guárdelo con la pieza.
keywords: posprocesador, post, postprocesador, código G, NC, GRBL, LinuxCNC, editar posprocesador, posprocesador personalizado, cpost, cambio de herramienta, M6, G43, ciclo fijo, números de línea, modal, evento, variable
from: 36ab8a38
---

El mismo recorrido de herramienta debe escribirse de forma distinta según el control: con o sin números de línea, `M6` o una pausa, `G28` o `G53`, `M30` o `M2`. Un **posprocesador** es el texto breve que indica cómo hacerlo. Los tres posprocesadores integrados de PartCraft (de estilo Fanuc, GRBL y LinuxCNC) están escritos en este formato, así que un posprocesador propio puede empezar como copia de uno de ellos.

Compruebe la salida en el simulador de su propia máquina antes de mecanizar, y pruebe primero el programa en el aire sobre el material. Los posprocesadores integrados escriben exactamente lo que escribían antes de que existiera este formato (las pruebas comparan su salida byte a byte en cientos de programas), pero nada de esto se ha probado en su máquina, y un posprocesador que modifique es responsabilidad suya comprobarlo.

## Crear uno

En Fabricación, bajo **Posprocesador**:

- {{ui:Editar posprocesador…}} en un control integrado abre **su propia copia** de este. En uno de sus posprocesadores, lo abre a él.
- {{ui:Nuevo posprocesador…}} empieza con un posprocesador pequeño y en blanco que contiene todos los eventos.
- {{ui:Importar archivo de posprocesador…}} lee un archivo de texto `.cpost` (el que obtiene con **Guardar como archivo…** en el editor).

El editor muestra el texto, una línea que indica si se lee correctamente (y qué línea está mal), y el código G que escribe el posprocesador, a medida que escribe. **Previsualizar con** elige un programa de ejemplo pequeño que ejecuta todos los eventos, o el programa propio de esta pieza. {{ui:Guardar}} conserva el posprocesador en el archivo de la pieza (hasta 20 posprocesadores) y lo elige como control. Los posprocesadores viajan con la pieza; para usar uno en otra pieza, guárdelo como archivo e impórtelo allí.

## Qué aspecto tiene un posprocesador

```
post mymill
name Mi fresadora (.nc)
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

Las líneas que empiezan por `//` y las líneas vacías se ignoran. Al principio van los ajustes; después, un bloque `on <evento>` por cada evento, cerrado con `end`. Un evento que omita no escribe nada.

| Ajuste | Significado |
|---|---|
| `post <id>` | El identificador del posprocesador: letras, dígitos, `-` y `_` |
| `name <texto>` | Lo que muestra la lista de controles |
| `extension <ext>` | La extensión del archivo: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … en cada línea `emit`, o ninguno |
| `decimal-point yes` / `no` | `10.` en lugar de `10` (los comentarios nunca llevan punto) |
| `canned-cycles yes` / `no` | `no`: los agujeros se escriben como los movimientos G0/G1 que representan |
| `modal <grupo> <palabras>` | Palabras de un grupo (`modal motion G0 G1 G2 G3`) que solo se escriben cuando cambian |

## Eventos

Se ejecutan en este orden para un programa: `start`; después, para cada operación, `operation`, `tool-change` (cuando cambia la herramienta), `spindle` (cuando cambia la velocidad), `approach` (el movimiento hasta el primer punto, antes del primer rápido), `coolant-on`, luego sus movimientos como `rapid`, `feed` y `arc`, y cada ciclo fijo como `cycle-start`, un `cycle-hole` por agujero y `cycle-end`; por último, `end`.

Cada evento puede usar las variables de su propio tipo de movimiento, escritas `{nombre}`: el programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), el material (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), la herramienta (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), la operación (`op.name`, `op.type`), `rpm`, el punto de un movimiento (`x`, `y`, `z`, `f`, y `moved`: verdadero cuando cambia un eje), los arcos (`arc.g` 2 o 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) y los agujeros (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). La lista **Eventos y variables** del editor muestra qué evento ve cada una. Estado que puede leer y definir: `cool`, `offset`, y `at.x`, `at.y`, `at.z`, `at.f` (los últimos valores escritos).

## Instrucciones

| Instrucción | Qué hace |
|---|---|
| `raw TEXTO` | Una línea exactamente como se escribe (sin número de línea) |
| `comment TEXTO` | `(TEXTO)` sin los caracteres no ASCII ni los corchetes |
| `emit PALABRA PALABRA …` | Una línea de palabras; las palabras que salen vacías se omiten; sin palabras, no hay línea |
| `word PALABRA …` | Añade palabras a la línea en construcción; un `emit` sin nada la cierra |
| `if EXPR` … `else` … `end` | Condiciones: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a; si no, b) |
| `for tool in tools` … `end` | Una vez por cada herramienta que usa el programa |
| `set NOMBRE EXPR` | Recuerda un valor (`set offset tool.number`) |
| `reset NOMBRE …` | Olvida palabras modales (un grupo, una letra de dirección como `Z`, o `at.z`) |
| `do rapid X Y Z` | Ejecuta el evento `rapid` para un punto |

Una palabra es texto escrito con huecos `{variable|filtro}`. Los filtros son `upper`, `lower`, `pad:N` (relleno con ceros), `cut:N` (primeros N caracteres), `safe` (ASCII apto para comentarios) e `int`. Una palabra que termina en `~` es **modal**: solo se escribe cuando difiere de lo último escrito (`G1~`, `X{x}~`). Una palabra que termina en `~!` se escribe siempre y también se recuerda. Un nombre que no es variable es texto fijo (`G81`, `mist`). Los números se redondean a 0,001 mm y se escriben sin ceros finales.

## Lo que un posprocesador no puede hacer

Decide solo cómo se escriben los movimientos, nada más. No puede cambiar una trayectoria, ordenar operaciones, dividir un arco, añadir un eje, conocer el recorrido o la cinemática de su máquina, ni hacer operaciones aritméticas con coordenadas (no hay `+`). Los ciclos de palpado, de vida de herramienta y de subprogramas, la salida de los ejes 4.º y 5.º y los códigos de torno aún no están construidos. Un archivo de posprocesador de estilo `.cps` de otro programa no puede cargarse: este es un formato distinto y más sencillo.
