---
title: Modificar una pieza a través de su historial
summary: Editar elementos y croquis a posteriori, suprimir, retroceder, insertar elementos antes, reordenar, renombrar y eliminar, y deshacer cualquiera de estos cambios.
keywords: historial, árbol de elementos, árbol de diseño, editar elemento, editar croquis, suprimir, quitar supresión, retroceder, deshacer retroceso, avanzar, reordenar, mover elemento, eliminar, renombrar, deshacer, rehacer, reconstruir, regenerar, padre hijo, pieza grande, muchos elementos, reconstrucción lenta, 750 elementos
from: 6f75aef4
---

Una pieza de PartCraft es su historial: la lista de planos, croquis y elementos de la izquierda. PartCraft reconstruye el sólido desde la parte superior de esa lista cada vez que algo cambia. Cambiar un valor al principio de la lista modifica todo lo que se construye sobre él.

## Editar un elemento

1. Haga clic en el elemento del historial (o en el croquis sangrado bajo él).
2. Cambie sus ajustes en el panel derecho. Cada cambio reconstruye la pieza al instante.

No hay botones Aceptar ni Cancelar: cada cambio se aplica. Si no le convence, pulse {{key:Mod+Z}}.

## Cambiar las aristas o las caras que usa un redondeo, un chaflán o un vaciado

Haga doble clic en el elemento del historial, o selecciónelo y elija {{ui:Seleccionar aristas}} (o {{ui:Seleccionar caras}}). Haga clic en aristas o caras para añadirlas o quitarlas, y luego {{ui:Listo}} o {{key:Esc}}. Consulte [Redondear, biselar y vaciar](topic:fillet-chamfer-shell).

## Editar un croquis

1. Haga doble clic en el croquis del historial, o selecciónelo y elija {{ui:Editar croquis}} en el panel derecho (o {{ui:Croquis}} en la barra de herramientas).
2. La pieza vuelve a como estaba cuando se creó el croquis: los elementos posteriores quedan ocultos mientras edita.
3. Cambie la geometría, las relaciones o las cotas.
4. Cierre el croquis. Toda la pieza se reconstruye con el cambio.

Para cambiar solo una medida, no hace falta abrir el croquis. Seleccione el elemento o el croquis y cambie el número en **Cotas del croquis** (o **Cotas de control**) en el panel derecho. Consulte [Cambiar medidas sin abrir el croquis](topic:change-sizes).

## Cuando un elemento falla

Si un cambio hace imposible un elemento, PartCraft construye todo lo demás y marca el problema:

- el elemento muestra **⚠ error** en el historial, y su mensaje aparece en la parte superior de su panel derecho (pase también el cursor sobre la fila para leerlo);
- los elementos que lo necesitan muestran **⚠ no construido**, con "Necesita Extrude2, que está fallando.";
- la etiqueta de la barra de estado dice "1 elemento con error".

Corrija la causa (o deshaga el cambio) y la pieza volverá a construirse. Los mensajes habituales y qué hacer con ellos están en [Solución de problemas](topic:troubleshooting).

## Suprimir un elemento

Suprimir apaga un elemento sin eliminarlo: es útil para probar una pieza sin un agujero o un patrón.

1. Seleccione el elemento.
2. Elija {{ui:Suprimir}}. Su fila muestra **off**. Los elementos que lo necesitan tampoco se construyen.
3. Elija {{ui:Quitar supresión}} para volver a activarlo.

## Retroceder

Retroceder construye la pieza solo hasta un punto, para verla como estaba o para añadir un elemento antes en el historial.

1. Seleccione un elemento y elija {{ui:Retroceder hasta aquí}}. Ese elemento y todos los de debajo se muestran en gris y no se construyen. Una fila **Barra de retroceso · avanzar** marca el punto.
2. Cualquier elemento que añada ahora se coloca **en la barra**, antes de los grises.
3. Haga clic en **Barra de retroceso · avanzar** para volver a construir todo.

La posición de retroceso se guarda en el archivo.

## Reordenar elementos

1. Seleccione el elemento.
2. Elija {{ui:Subir}} o {{ui:Bajar}}, o, con la fila del historial enfocada, pulse {{key:Alt+Up}} o {{key:Alt+Down}}.

Un elemento nunca puede subir por encima de algo que usa. El botón aparece en gris, y al pasar el cursor sobre él (o al intentar la tecla) se indica el motivo, por ejemplo "Extrude2 usa Sketch2, así que Sketch2 tiene que ir primero."

Lo que usa un elemento: su croquis; la cara sobre la que se apoya su croquis; los elementos que copia un patrón o una simetría; una línea de croquis o una revolución usada como dirección o eje.

## Eliminar un elemento

1. Seleccione el elemento y elija {{ui:Eliminar}} en el panel derecho o en la barra de herramientas, o pulse {{key:Delete}}.
2. Si otros elementos lo usan, PartCraft pregunta: "Extrude3, Hole1 usan Extrude1 y también se eliminarán." Elija {{ui:Eliminar todo}} o {{ui:Cancelar}}.

Eliminar un elemento no elimina su croquis: el croquis reaparece en la vista como croquis sin usar, listo para otro elemento. Elimine el croquis por separado si no lo necesita.

## Renombrar

Seleccione el elemento y escriba un nuevo **Nombre** en la parte inferior del panel derecho (hasta 60 caracteres). El nombre de la pieza aparece en el panel derecho cuando no hay nada seleccionado.

## Piezas con cientos de elementos

Una pieza con cientos de elementos se prueba con 750. PartCraft conserva el sólido que tenía a mitad del historial, así que un cambio al final del historial solo reconstruye los elementos posteriores a él; un cambio cerca de la parte superior reconstruye todo lo que se construye sobre él, lo que tarda más. Deshacer y rehacer solo reconstruyen desde el punto en que difieren los dos estados. Para trabajar más rápido con una pieza grande, retroceda hasta donde está trabajando (vea Retroceder más arriba) o suprima lo que no necesite por ahora. Varios cortes y salientes que no se tocan entre sí se aplican juntos, así que una pieza formada por muchos agujeros y salientes separados se construye más rápido de lo que sugiere el número de elementos.

Una pieza grande se reconstruye en segundo plano: la etiqueta de construcción de la parte inferior muestra **Reconstruyendo…** con el avance, y la vista, los paneles y los menús siguen funcionando mientras tanto. La pieza en pantalla es la última construida hasta que la nueva esté lista. Si vuelve a cambiar algo mientras se reconstruye, PartCraft construye la versión más reciente y descarta la que estaba en curso. Una pieza pequeña se reconstruye al instante.

## Deshacer y rehacer

- {{key:Mod+Z}} o {{ui:Deshacer}} deshace el último cambio: un elemento, un ajuste, una edición de croquis o un arrastre. La barra de estado indica cuál, por ejemplo "Deshecho: cambiar cota."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} o {{ui:Rehacer}} lo rehace.
- PartCraft guarda los últimos 200 pasos (una pieza tan grande que 200 copias usarían mucha memoria guarda menos, pero nunca menos de los 20 más recientes). Los cambios en la hoja de dibujo (una sección, un símbolo GD&T movido) están en la misma lista. Abrir un archivo o empezar una pieza nueva la vacía.

:::mac
En Mac, use ⇧⌘Z para rehacer. En Safari, ⌘Y puede abrir el historial del navegador en su lugar.
:::
