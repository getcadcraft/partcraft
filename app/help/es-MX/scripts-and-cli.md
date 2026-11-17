---
title: Scripts y línea de comandos
summary: El formato de script de PartCraft (.pcscript), que escribe una pieza completa como texto legible, y la herramienta de línea de comandos partcraft, que construye, cambia, retrocede y comprueba piezas sin pantalla.
keywords: script, pcscript, texto, línea de comandos, cli, terminal, por lotes, automatizar, comprobar, lint, construir, exportar, control de versiones, diferencias, script paramétrico
from: c56df222
---

Modelar con cuidado depende más de la disciplina que de los botones. Una pieza escrita como texto puede leerse, revisarse, compararse línea por línea y reconstruirse mediante un script. PartCraft funciona en ambos sentidos: cualquier pieza puede escribirse como script, y un script construye la pieza.

## En la aplicación

En la pestaña {{ui:Parameters}}, bajo **Script**:

- {{ui:Save as script}} descarga la pieza abierta como `<nombre>.pcscript`.
- {{ui:Open script}} construye una pieza a partir de un archivo `.pcscript`. Si hay un error, se informa con su número de línea y no se reemplaza nada.

## El formato de script

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Las reglas:

- Una línea que empieza en el margen izquierdo inicia una instrucción: `pcscript`, `part`, `param`, un tipo de operación (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` y los tipos más recientes) seguido de su nombre, o `rollback <feature>`.
- Las líneas con sangría son los ajustes de la instrucción anterior. Un ajuste solo (`through`, `reverse`, `suppressed`) significa sí.
- Un ajuste numérico es un número, o `=` y una expresión, lo que crea una ecuación: `depth = thick`.
- En un croquis: `on` indica el plano (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); la geometría es `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (en sentido antihorario) o `spline <name> fit|control <points>`; las relaciones son su tipo y los nombres que unen (`O` es el origen); una cota termina con su valor o con `= expresión`.
- Los ajustes opcionales de una línea de geometría o de relación van entre corchetes al final, separados por `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` inicia un comentario (al inicio de una línea o después de un espacio). Los nombres con espacios van entre "comillas dobles".
- Los identificadores de operación se cuentan desde f1 en el orden en que se escriben. Las referencias a aristas y caras los usan, por ejemplo `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Los ajustes para los que el formato no tiene palabras se escriben `json` seguido de un valor; se leen tal cual.

Guardado desde la aplicación, el script incluye todos los ajustes, así que se abre como la misma pieza. Un sólido STEP importado se escribe dentro del script desde la aplicación, y como un archivo `.step` aparte, nombrado por `step-file`, desde la línea de comandos.

## La herramienta de línea de comandos

La herramienta funciona en una computadora con Node.js 24, desde una copia del código fuente de CadCraft: `node tools/partcraft-cli/partcraft.mjs <command>`. Es una herramienta para desarrolladores y usa los mismos módulos que la aplicación. Las piezas son archivos `.partcraft.json` o scripts `.pcscript`.

| Comando | Qué hace |
|---|---|
| `info <part>` | Operaciones, parámetros, barra de retroceso, volumen y tamaño del sólido construido |
| `params <part>` | Cada parámetro y ecuación con su valor |
| `set <part> width=150 Base.depth==thick` | Hacia adelante: cambia parámetros, vincula números (`==` o una expresión), asigna números simples |
| `drive <part> Base.depth=12` | Hacia atrás: resuelve el parámetro detrás de un número controlado (`--prefer width` elige uno) |
| `build <part> --out x.step` | Escribe `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` o una macro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Un archivo por cada fila de la tabla de diseño |
| `variants <part> --out-dir d` o `--zip f.zip` | Cada configuración como STEP, IFC, DWG y una vista previa, una tabla de variantes y un elemento de biblioteca (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); vea [Cree un paquete de variantes](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Script a pieza |
| `to-script <part> -o part.pcscript` | Pieza a script |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Mueve la barra de retroceso en el archivo |
| `check <part> [--strict]` | La comprobación de disciplina (abajo) |

`build` también acepta `--set name=value` (solo para esta construcción) y `--upto <feature>`. Todos los comandos aceptan `--json`. Códigos de salida: 0 correcto, 1 se encontró un problema, 2 el comando se escribió mal. Un script nunca se reescribe en su lugar: use `-o` para guardar una copia modificada.

## La comprobación

`check` informa de lo que hace que una pieza sea difícil de cambiar después:

| Hallazgo | Cuenta como |
|---|---|
| Un croquis sobredefinido (relaciones en conflicto o repetidas) | error |
| Una operación que no se construye | error |
| Un parámetro o ecuación con error, o parámetros que dependen unos de otros | error |
| Un croquis subdefinido, con sus grados de libertad | advertencia |
| Números escritos directamente en operaciones y cotas que ningún parámetro controla | advertencia |
| Un parámetro que nada usa | advertencia |
| Una operación suprimida; la barra de retroceso no está al final | advertencia |

`--strict` convierte cada advertencia en un error, para que un script de construcción pueda rechazar una pieza que no esté totalmente controlada.

:::note
La salida de macro `.swb` es para el modelador de piezas que usa la mayoría de los talleres: ejecutada dentro de ese programa, construye la pieza allí. No se ha ejecutado en ese programa aquí (no está disponible en nuestros servidores), así que considérela como no probada.
:::
