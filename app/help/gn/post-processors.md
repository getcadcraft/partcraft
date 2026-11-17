---
title: Post procesadores que podés editar
summary: Un post es un archivo de texto corto que convierte la trayectoria en G-code para tu control. Copiá uno de los posts integrados, cambiá las líneas que necesitás (números de línea, cambio de herramienta, movimientos de origen, código de fin), mirá el G-code que escribe mientras escribís, y guardalo con la pieza.
keywords: post, post procesador, postprocesador, G-code, NC, GRBL, LinuxCNC, editar post, post personalizado, cpost, cambio de herramienta, M6, G43, ciclo fijo, números de línea, modal, evento, variable
from: 36ab8a38
---

La misma trayectoria tiene que escribirse distinto para cada control: números de línea o ninguno, `M6` o una pausa, `G28` o `G53`, `M30` o `M2`. Un **post** es el texto corto que dice cómo. Los tres posts integrados de PartCraft (estilo Fanuc, GRBL y LinuxCNC) están escritos en este formato, así que un post propio puede empezar como copia de uno de ellos.

Revisá la salida en el simulador de tu máquina antes de cortar, y probala en el aire sobre el material primero. Los posts integrados escriben exactamente lo que escribían antes de que existiera este formato (las pruebas comparan su salida byte por byte en cientos de programas), pero nada de esto está probado en tu máquina, y un post que cambiás es tuyo para probarlo.

## Hacer uno

En Manufacturar, bajo **Post**:

- {{ui:Editar post…}} en un control integrado abre **tu propia copia** del post. En uno de tus posts, abre ese post.
- {{ui:Post pyahu…}} empieza desde un post vacío pequeño con todos los eventos.
- {{ui:Importar archivo de post…}} lee un archivo de texto `.cpost` (el que obtenés con **Guardar como archivo…** en el editor).

El editor muestra el texto, una línea que dice si se lee (y cuál línea está mal), y el G-code que escribe el post, mientras escribís. **Previsualizar con** elige un programa de muestra pequeño que ejecuta todos los eventos, o el programa propio de esta pieza. {{ui:Guardar}} guarda el post en el archivo de la pieza (hasta 20 posts) y lo elige como control. Los posts viajan con la pieza; para usar uno en otra pieza, guardalo como archivo e importalo allí.

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

Las líneas que empiezan con `//` y las líneas vacías se ignoran. Al principio van los ajustes; después, un bloque `on <evento>` por cada evento, cerrado con `end`. Un evento que dejás afuera no escribe nada.

| Ajuste | Significado |
|---|---|
| `post <id>` | El id del post: letras, dígitos, `-` y `_` |
| `name <texto>` | Lo que muestra la lista de Controles |
| `extension <ext>` | La extensión del archivo: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … en cada línea `emit`, o ninguno |
| `decimal-point yes` / `no` | `10.` en lugar de `10` (los comentarios nunca llevan el punto) |
| `canned-cycles yes` / `no` | `no`: los agujeros se escriben como los movimientos G0/G1 que representan |
| `modal <grupo> <palabras>` | Palabras de un grupo (`modal motion G0 G1 G2 G3`) que se escriben solo cuando cambian |

## Eventos

Se ejecutan en este orden para un programa: `start`; después, para cada operación, `operation`, `tool-change` (cuando cambia la herramienta), `spindle` (cuando cambia la velocidad), `approach` (el movimiento hasta el primer punto, antes del primer rápido), `coolant-on`, luego sus movimientos como `rapid`, `feed` y `arc`, y cada ciclo fijo como `cycle-start`, un `cycle-hole` por agujero y `cycle-end`; al final, `end`.

Cada evento puede usar las variables de su propio tipo de movimiento, escritas `{nombre}`: el programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), el material (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), la herramienta (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), la operación (`op.name`, `op.type`), `rpm`, el punto de un movimiento (`x`, `y`, `z`, `f`, y `moved`: verdadero cuando cambió un eje), arcos (`arc.g` 2 o 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) y agujeros (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). La lista **Eventos y variables** del editor muestra qué evento ve cuál. Estado que podés leer y fijar: `cool`, `offset`, y `at.x`, `at.y`, `at.z`, `at.f` (los últimos valores escritos).

## Instrucciones

| Instrucción | Qué hace |
|---|---|
| `raw TEXTO` | Una línea exactamente como se escribe (sin número de línea) |
| `comment TEXTO` | `(TEXTO)` con los no ASCII y los paréntesis quitados |
| `emit PALABRA PALABRA …` | Una línea de palabras; las palabras que quedan vacías se omiten; sin palabras, sin línea |
| `word PALABRA …` | Agrega palabras a la línea que se arma; un `emit` solo la termina |
| `if EXPR` … `else` … `end` | Condiciones: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, si no b) |
| `for tool in tools` … `end` | Una vez por cada herramienta que usa el programa |
| `set NOMBRE EXPR` | Recuerda un valor (`set offset tool.number`) |
| `reset NOMBRE …` | Olvida palabras modales (un grupo, una letra de dirección como `Z`, o `at.z`) |
| `do rapid X Y Z` | Ejecuta el evento `rapid` para un punto |

Una palabra es texto escrito con huecos `{variable|filtro}`. Los filtros son `upper`, `lower`, `pad:N` (relleno con ceros), `cut:N` (primeros N caracteres), `safe` (ASCII seguro para comentarios) e `int`. Una palabra que termina en `~` es **modal**: se escribe solo cuando difiere de lo último escrito (`G1~`, `X{x}~`). Una palabra que termina en `~!` se escribe siempre y también se recuerda. Un nombre que no es variable es texto plano (`G81`, `mist`). Los números se redondean a 0,001 mm y se escriben sin ceros finales.

## Lo que un post no puede hacer

Solo decide cómo se escriben los movimientos, nada más. No puede cambiar una trayectoria, ordenar operaciones, dividir un arco, agregar un eje, conocer el recorrido o la cinemática de tu máquina, ni hacer cuentas con coordenadas (no hay `+`). Sondeo, ciclos de vida de herramienta y de subprogramas, salida del 4.º y 5.º eje, y códigos de torno no están hechos. Un archivo de post tipo `.cps` de otro programa no se puede cargar: este es otro formato, más simple.
