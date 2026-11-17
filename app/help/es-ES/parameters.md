---
title: Controlar una pieza con parámetros
summary: Ponga nombre a las medidas que importan (anchura, espesor, tamaño de tornillo), vincule cualquier número de un elemento o cota de croquis a ellas con =, y cambie toda la pieza desde una sola tabla.
keywords: parámetros, dónde se usa, usado por, variables globales, variables, ecuaciones, intención de diseño, cotas de control, vincular, expresión, fórmula, nombrar una cota, valores vinculados
from: 58c646ea
---

Un parámetro es un número con nombre, como `width = 120` o `margin = bolt * 1.5`. Vincule una profundidad, un diámetro de agujero, un número de patrón o una cota de croquis a él, y al cambiar el parámetro cambian todos a la vez en un solo paso. Así se mantiene la intención de diseño en la pieza, y no solo en su memoria.

## Añadir parámetros

1. En el panel derecho, pulse la pestaña {{ui:Parameters}}.
2. Bajo **Variables**, escriba un nombre en el cuadro «nombre», por ejemplo `width`.
3. Escriba su valor en el cuadro siguiente, por ejemplo `120`, y pulse {{key:Enter}} (o haga clic en {{ui:Add}}).

Un valor puede ser un número o una expresión de otros parámetros: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. La columna **Valor** muestra su resultado. Un nombre empieza por una letra o `_` y solo tiene letras, dígitos y `_`; los nombres de funciones y unidades (`sin`, `mm`, `pi`) se rechazan, y también un bucle como `a = b` con `b = a`.

## Vincular un número a un parámetro

1. Pulse un elemento del historial, por ejemplo «Extrude1». Sus ajustes aparecen en la pestaña {{ui:Properties}}.
2. En un cuadro numérico, como **Profundidad (mm)**, escriba `=` y una expresión: `=thick` o `=width / 4`.
3. Pulse {{key:Enter}}.

El cuadro muestra ahora el resultado, y aparece un botón **ƒ** junto a su etiqueta. Sitúe el puntero sobre él para ver la ecuación. Las cotas de croquis funcionan igual, tanto en la lista **Cotas de croquis** de un elemento como en el cuadro de cota de un croquis abierto (haga doble clic en una cota, escriba `=width` y pulse {{key:Enter}}).

Números que puede vincular: profundidad de extrusión, ángulo de revolución, diámetro de agujero, profundidades y tamaños de cajera, número de patrón, separación y ángulo, radio de redondeo, distancia de chaflán, espesor de pared de vaciado, todas las cotas de croquis, y las medidas de los elementos más nuevos (segunda profundidad, conicidad, avellanado, distancia al plano de referencia, ángulo de salida y otros).

## Cambiar un parámetro

En la pestaña {{ui:Parameters}}, escriba un valor nuevo o una expresión en la columna **Expresión** y pulse {{key:Enter}}. Todo lo vinculado cambia y la pieza se reconstruye, en un solo paso: {{key:Mod+Z}} lo deshace.

Para cambiar un número desde el otro extremo, véase [Ecuaciones en ambos sentidos](topic:equations-two-way).

## Ver dónde se usa un parámetro

Bajo cada parámetro en la pestaña {{ui:Parameters}}, una línea indica qué lo usa:

- los números que controla, como **Extrude1 depth** o **Sketch1 D2 (distance)**. Pulse uno para seleccionar su elemento y mostrar sus propiedades;
- los números que controla **a través de** otros parámetros, como **Hole1 diameter (through h, d)** cuando `d = h + 2` y `h = w / 2`;
- los **parámetros** cuyas expresiones lo usan, las **configuraciones** que lo fijan, y los **scripts** que lo leen (véase [Escribir y ejecutar scripts](topic:craftscript)).

«Not used yet.» significa que nada lo usa: puede eliminarlo sin que se le pregunte.

## Desvincular, renombrar, eliminar

- **Desvincular un número:** pulse su botón **ƒ**, o {{ui:Unlink}} en la lista **Ecuaciones**. Conserva su valor actual y ningún parámetro lo cambia ya.
- **Renombrar un parámetro:** escriba un nombre nuevo en su cuadro **Nombre**. Toda expresión que lo use se reescribe.
- **Eliminar un parámetro:** pulse × en su fila. Si algo lo usa, PartCraft pregunta si debe escribir antes su valor actual en esas expresiones.
- **Eliminar un elemento** borra las ecuaciones de sus números; la barra de estado indica cuáles.

:::note
Los parámetros se guardan en el archivo `.partcraft.json` (como versión de archivo 3). Una pieza sin parámetros se guarda exactamente igual que antes.
:::

## Expresiones

| Escriba | Significa |
|---|---|
| `120`, `12.5`, `1e3` | un número (milímetros, o grados para un ángulo) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | una longitud en otras unidades, convertida a milímetros |
| `30deg`, `0.5rad` | un ángulo, convertido a grados |
| `+ - * / %` y `^` | aritmética; `^` es una potencia, `-2^2` es −4 |
| `sin cos tan asin acos atan atan2` | trigonometría en grados |
| `sqrt pow exp ln log abs sign` | otras funciones |
| `ceil floor int round(x, digits) min max` | redondeo y límites |
| `if(test, a, b)` con `< <= > >= == !=` | una elección: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Los nombres distinguen mayúsculas y minúsculas: `Width` y `width` son dos parámetros.

Véase también [Configuraciones y tablas de diseño](topic:design-tables) y [Scripts y línea de comandos](topic:scripts-and-cli).
