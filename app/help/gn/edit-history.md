---
title: Modificar una pieza mediante su historial
summary: Edite elementos y bocetos después de hechos, suprima, retroceda, inserte elementos antes, reordene, renombre y elimine, y deshaga cualquiera de estos cambios.
keywords: historial, árbol de elementos, árbol de diseño, editar elemento, editar boceto, suprimir, reactivar, retroceso, retroceder, avanzar, reordenar, mover elemento, eliminar, renombrar, deshacer, rehacer, reconstruir, regenerar, padre hijo, pieza grande, muchos elementos, reconstrucción lenta, 750 elementos
from: 6f75aef4
---

Una pieza de PartCraft es su historial: la lista de planos, bocetos y elementos a la izquierda. PartCraft reconstruye el sólido desde el principio de esa lista cada vez que algo cambia. Si cambia un número al inicio de la lista, cambia todo lo que se construyó sobre él.

## Editar un elemento

1. Haga clic en el elemento del historial (o en el boceto sangrado debajo de él).
2. Cambie sus ajustes en el panel derecho. Cada cambio reconstruye de inmediato.

No hay Aceptar ni Cancelar: cada cambio se aplica. Si no le gusta, presione {{key:Mod+Z}}.

## Cambiar las aristas o caras que usa un redondeo, chaflán o vaciado

Haga doble clic en el elemento del historial, o selecciónelo y elija {{ui:Seleccionar aristas}} (o {{ui:Seleccionar caras}}). Haga clic en aristas o caras para agregarlas o quitarlas, y luego {{ui:Listo}} o {{key:Esc}}. Vea [Redondear, biselar y vaciar](topic:fillet-chamfer-shell).

## Editar un boceto

1. Haga doble clic en el boceto del historial, o selecciónelo y elija {{ui:Editar boceto}} en el panel derecho (o {{ui:Boceto}} en la barra de herramientas).
2. La pieza vuelve a como estaba cuando se hizo el boceto: los elementos posteriores quedan ocultos mientras edita.
3. Cambie la geometría, las relaciones o las cotas.
4. Cierre el boceto. Toda la pieza se reconstruye con el cambio.

Para cambiar solo una medida no necesita abrir el boceto. Seleccione el elemento o el boceto y cambie el número en **Cotas del boceto** (o **Cotas de control**) en el panel derecho. Vea [Cambiar medidas sin abrir el boceto](topic:change-sizes).

## Cuando un elemento falla

Si un cambio hace imposible un elemento, PartCraft construye todo lo demás y marca el problema:

- el elemento muestra **⚠ error** en el historial, y su mensaje aparece arriba de su panel derecho (también al pasar el cursor sobre la fila);
- los elementos que lo necesitan muestran **⚠ no construido**, con "Necesita Extrude2, que está fallando.";
- la etiqueta de la barra de estado dice "1 elemento con fallo".

Corrija la causa (o deshaga el cambio) y la pieza vuelve a construirse. Los mensajes comunes y qué hacer con ellos están en [Solución de problemas](topic:troubleshooting).

## Suprimir un elemento

Suprimir apaga un elemento sin borrarlo: sirve para probar una pieza sin un agujero o un patrón.

1. Seleccione el elemento.
2. Elija {{ui:Suprimir}}. Su fila muestra **off**. Los elementos que lo necesitan tampoco se construyen.
3. Elija {{ui:Reactivar}} para encenderlo otra vez.

## Retroceder

Retroceder construye la pieza solo hasta un punto, para verla como estaba o para agregar un elemento más atrás en el historial.

1. Seleccione un elemento y elija {{ui:Retroceder hasta aquí}}. Ese elemento y todos los de abajo quedan en gris y no se construyen. Una fila **Barra de retroceso · avanzar** marca el lugar.
2. Cualquier elemento que agregue ahora va **en la barra**, antes de los grises.
3. Haga clic en **Barra de retroceso · avanzar** para construir todo otra vez.

La posición de retroceso se guarda en el archivo.

## Reordenar elementos

1. Seleccione el elemento.
2. Elija {{ui:Subir}} o {{ui:Bajar}}, o, con su fila del historial enfocada, presione {{key:Alt+Up}} o {{key:Alt+Down}}.

Un elemento nunca puede subir por encima de algo que usa. El botón queda en gris, y al pasar el cursor sobre él (o al probar la tecla) aparece el motivo, por ejemplo "Extrude2 usa Sketch2, así que Sketch2 debe ir primero."

Lo que usa un elemento: su boceto; la cara sobre la que está el boceto; los elementos que copia un patrón o una simetría; una línea de boceto o una revolución usada como dirección o eje.

## Eliminar un elemento

1. Seleccione el elemento y elija {{ui:Eliminar}} en el panel derecho o en la barra de herramientas, o presione {{key:Delete}}.
2. Si otros elementos lo usan, PartCraft pregunta: "Extrude3, Hole1 usan Extrude1 y también se eliminarán." Elija {{ui:Eliminar todo}} o {{ui:Cancelar}}.

Eliminar un elemento no borra su boceto: el boceto reaparece en la vista como boceto sin usar, listo para otro elemento. Elimine el boceto por separado si no lo necesita.

## Renombrar

Seleccione el elemento y escriba un nuevo **Nombre** al pie del panel derecho (hasta 60 caracteres). El nombre de la pieza aparece en el panel derecho cuando no hay nada seleccionado.

## Piezas con cientos de elementos

Una pieza con cientos de elementos se prueba con 750. PartCraft conserva el sólido que tenía a mitad del historial, así que un cambio al final del historial reconstruye solo los elementos posteriores; un cambio cerca del inicio reconstruye todo lo que se construye sobre él, lo que tarda más. Deshacer y rehacer reconstruyen solo desde donde difieren los dos estados. Para trabajar más rápido en una pieza grande, retroceda hasta el punto donde trabaja (vea Retroceder arriba) o suprima lo que no necesita por ahora. Varios cortes y salientes que no se tocan entre sí se aplican juntos, así que una pieza hecha de muchos agujeros y salientes separados se construye más rápido de lo que indica la cantidad de elementos.

Una pieza grande se reconstruye en segundo plano: el chip inferior dice **Reconstruyendo…** con el avance, y la vista, los paneles y los menús siguen funcionando mientras tanto. La pieza en pantalla es la última construida hasta que la nueva esté lista. Si cambia algo otra vez mientras reconstruye, PartCraft construye la versión más nueva y descarta la que estaba en curso. Una pieza pequeña se reconstruye de inmediato.

## Deshacer y rehacer

- {{key:Mod+Z}} o {{ui:Deshacer}} deshace el último cambio: un elemento, un ajuste, una edición de boceto, un arrastre. La barra de estado dice cuál, por ejemplo "Deshecho: cambiar cota."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} o {{ui:Rehacer}} lo rehacen.
- PartCraft guarda los últimos 200 pasos (una pieza tan grande que 200 copias usarían mucha memoria guarda menos, nunca menos de los 20 más nuevos). Los cambios en la hoja de dibujo (un corte, un símbolo GD&T movido) están en la misma lista. Abrir un archivo o empezar una pieza nueva la vacía.

:::mac
En Mac, use ⇧⌘Z para rehacer. En Safari, ⌘Y puede abrir el historial del navegador en su lugar.
:::
