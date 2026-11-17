---
title: Controlar una pieza con parámetros
summary: Nombre las medidas que importan (ancho, espesor, tamaño de tornillo), vincule cualquier número de operación o cota de croquis a ellas con =, y cambie toda la pieza desde una sola tabla.
keywords: parámetros, dónde se usa, usado por, variables globales, variables, ecuaciones, intención de diseño, cotas guía, vínculo, expresión, fórmula, nombrar una cota, valores vinculados
from: 58c646ea
---

Un parámetro es un número con nombre, como `width = 120` o `margin = bolt * 1.5`. Vincule una profundidad, un diámetro de agujero, un número de patrón o una cota de croquis a él, y al cambiar el parámetro cambian todos en un solo paso. Así mantiene la intención de diseño en la pieza y no en su cabeza.

## Agregar parámetros

1. En el panel derecho, haga clic en la pestaña {{ui:Parameters}}.
2. Bajo **Variables**, escriba un nombre en el cuadro «nombre», por ejemplo `width`.
3. Escriba su valor en el cuadro siguiente, por ejemplo `120`, y pulse {{key:Enter}} (o haga clic en {{ui:Add}}).

Un valor puede ser un número o una expresión de otros parámetros: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. La columna **Valor** muestra a qué resultado equivale. Un nombre empieza con una letra o `_` y solo tiene letras, dígitos y `_`; no se aceptan nombres de funciones ni de unidades (`sin`, `mm`, `pi`), ni un bucle como `a = b` con `b = a`.

## Vincular un número a un parámetro

1. Haga clic en una operación del historial, por ejemplo «Extrude1». Sus ajustes aparecen en la pestaña {{ui:Properties}}.
2. En un cuadro numérico, como **Profundidad (mm)**, escriba `=` y una expresión: `=thick` o `=width / 4`.
3. Pulse {{key:Enter}}.

El cuadro muestra ahora el resultado, y aparece un botón **ƒ** junto a su etiqueta. Señálelo para ver la ecuación. Las cotas de croquis funcionan igual, tanto en la lista **Cotas del croquis** de una operación como en el cuadro de cota de un croquis abierto (haga doble clic en una cota, escriba `=width` y pulse {{key:Enter}}).

Números que puede vincular: profundidad de extrusión, ángulo de revolución, diámetro de agujero, profundidad y medidas de avellanado, número de patrón, separación y ángulo, radio de redondeo, distancia de chaflán, espesor de pared de vaciado, todas las cotas de croquis, y las medidas de las operaciones más nuevas (segunda profundidad, conicidad, avellanado, distancia de plano de referencia, ángulo de salida y otras).

## Cambiar un parámetro

En la pestaña {{ui:Parameters}}, escriba un valor nuevo o una expresión en la columna **Expresión** y pulse {{key:Enter}}. Todo lo vinculado cambia y la pieza se reconstruye, en un solo paso: {{key:Mod+Z}} lo deshace.

Para cambiar un número desde el otro extremo, véase [Ecuaciones en ambos sentidos](topic:equations-two-way).

## Ver dónde se usa un parámetro

Bajo cada parámetro en la pestaña {{ui:Parameters}}, una línea indica qué lo usa:

- los números que controla, como **Extrude1 depth** o **Sketch1 D2 (distance)**. Haga clic en uno para seleccionar su operación y mostrar sus propiedades;
- los números que controla **a través de** otros parámetros, como **Hole1 diameter (through h, d)** cuando `d = h + 2` y `h = w / 2`;
- los **parámetros** cuyas expresiones lo usan, las **configuraciones** que lo fijan, y los **scripts** que lo leen (véase [Escribir y ejecutar scripts](topic:craftscript)).

«Not used yet.» significa que nada lo usa: puede eliminarlo sin preguntar.

## Desvincular, renombrar, eliminar

- **Desvincular un número:** haga clic en su botón **ƒ**, o en {{ui:Unlink}} en la lista **Ecuaciones**. Conserva su valor actual y ningún parámetro lo cambia ya.
- **Renombrar un parámetro:** escriba un nombre nuevo en su cuadro **Nombre**. Toda expresión que lo use se reescribe.
- **Eliminar un parámetro:** haga clic en × en su fila. Si algo lo usa, PartCraft pregunta si antes debe escribir su valor actual en esas expresiones.
- **Eliminar una operación** borra las ecuaciones de sus números; la barra de estado indica cuáles.

:::note
Los parámetros se guardan en el archivo `.partcraft.json` (como versión de archivo 3). Una pieza sin parámetros se guarda exactamente igual que antes.
:::

## Expresiones

| Escriba | Significa |
|---|---|
| `120`, `12.5`, `1e3` | un número (milímetros, o grados en un ángulo) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | una longitud en otras unidades, convertida a milímetros |
| `30deg`, `0.5rad` | un ángulo, convertido a grados |
| `+ - * / %` y `^` | aritmética; `^` es potencia, `-2^2` es −4 |
| `sin cos tan asin acos atan atan2` | trigonometría en grados |
| `sqrt pow exp ln log abs sign` | otras funciones |
| `ceil floor int round(x, digits) min max` | redondeo y límites |
| `if(test, a, b)` con `< <= > >= == !=` | una elección: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Los nombres distinguen mayúsculas: `Width` y `width` son dos parámetros.

Véase también [Configuraciones y tablas de diseño](topic:design-tables) y [Scripts y línea de comandos](topic:scripts-and-cli).
