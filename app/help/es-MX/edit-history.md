---
title: Cambiar una pieza a través de su historial
summary: Editar operaciones y croquis después de crearlos, suprimir, retroceder, insertar operaciones antes, reordenar, renombrar y eliminar, y deshacer cualquiera de estos cambios.
keywords: historial, árbol de operaciones, árbol de diseño, editar operación, editar croquis, suprimir, desactivar supresión, retroceso, retroceder, avanzar, reordenar, mover operación, eliminar, renombrar, deshacer, rehacer, reconstruir, regenerar, padre hijo, pieza grande, muchas operaciones, reconstrucción lenta, 750 operaciones
from: 6f75aef4
---

Una pieza de PartCraft es su historial: la lista de planos, croquis y operaciones de la izquierda. PartCraft reconstruye el sólido desde la parte superior de esa lista cada vez que algo cambia. Cambiar un número al inicio de la lista cambia todo lo que se construyó sobre él.

## Editar una operación

1. Haga clic en la operación en el historial (o en el croquis sangrado debajo de ella).
2. Cambie sus configuraciones en el panel derecho. Cada cambio reconstruye de inmediato.

No hay Aceptar ni Cancelar: cada cambio se aplica. Si no le gusta, pulse {{key:Mod+Z}}.

## Cambiar las aristas o caras que usa un redondeo, chaflán o vaciado

Haga doble clic en la operación en el historial, o selecciónela y elija {{ui:Seleccionar aristas}} (o {{ui:Seleccionar caras}}). Haga clic en aristas o caras para agregarlas o quitarlas, y luego {{ui:Listo}} o {{key:Esc}}. Vea [Redondear, biselar y vaciar](topic:fillet-chamfer-shell).

## Editar un croquis

1. Haga doble clic en el croquis en el historial, o selecciónelo y elija {{ui:Editar croquis}} en el panel derecho (o {{ui:Croquis}} en la barra de herramientas).
2. La pieza vuelve a como estaba cuando se hizo el croquis: las operaciones posteriores quedan ocultas mientras edita.
3. Cambie la geometría, las relaciones o las cotas.
4. Cierre el croquis. Toda la pieza se reconstruye con el cambio.

Para cambiar solo una medida, no es necesario abrir el croquis. Seleccione la operación o el croquis y cambie el número bajo **Cotas del croquis** (o **Cotas motrices**) en el panel derecho. Vea [Cambiar medidas sin abrir el croquis](topic:change-sizes).

## Cuando una operación falla

Si un cambio hace imposible una operación, PartCraft construye todo lo demás y marca el problema:

- la operación muestra **⚠ error** en el historial, y su mensaje aparece en la parte superior de su panel derecho (también puede pasar el cursor sobre la fila para leerlo);
- las operaciones que la necesitan muestran **⚠ no construida**, con "Necesita Extrude2, que está fallando.";
- la etiqueta de la barra de estado dice "1 operación fallando".

Corrija la causa (o deshaga el cambio) y la pieza volverá a construirse. Los mensajes comunes y qué hacer están en [Solución de problemas](topic:troubleshooting).

## Suprimir una operación

Suprimir desactiva una operación sin eliminarla: es útil para probar una pieza sin un agujero o un patrón.

1. Seleccione la operación.
2. Elija {{ui:Suprimir}}. Su fila muestra **off**. Las operaciones que la necesitan tampoco se construyen.
3. Elija {{ui:Desactivar supresión}} para volver a activarla.

## Retroceder

Retroceder construye la pieza solo hasta un punto, para que la vea como estaba, o para agregar una operación antes en el historial.

1. Seleccione una operación y elija {{ui:Retroceder hasta aquí}}. Esa operación y todas las que están debajo se muestran en gris y no se construyen. Una fila **Barra de retroceso · avanzar** marca la posición.
2. Cualquier operación que agregue ahora se coloca **en la barra**, antes de las grises.
3. Haga clic en **Barra de retroceso · avanzar** para construir todo de nuevo.

La posición de retroceso se guarda en el archivo.

## Reordenar operaciones

1. Seleccione la operación.
2. Elija {{ui:Subir}} o {{ui:Bajar}}, o, con su fila del historial enfocada, pulse {{key:Alt+Up}} o {{key:Alt+Down}}.

Una operación nunca puede subir por encima de algo que usa. El botón aparece en gris, y al pasar el cursor sobre él (o al intentar la tecla) se indica el motivo, por ejemplo "Extrude2 usa Sketch2, así que Sketch2 debe ir primero."

Lo que usa una operación: su croquis; la cara sobre la que se apoya su croquis; las operaciones que copia un patrón o una simetría; una línea de croquis o una revolución usada como dirección o eje.

## Eliminar una operación

1. Seleccione la operación y elija {{ui:Eliminar}} en el panel derecho o en la barra de herramientas, o pulse {{key:Delete}}.
2. Si otras operaciones la usan, PartCraft pregunta: "Extrude3, Hole1 usan Extrude1 y también se eliminarán." Elija {{ui:Eliminar todo}} o {{ui:Cancelar}}.

Eliminar una operación no elimina su croquis: el croquis vuelve a aparecer en la vista como un croquis sin usar, listo para otra operación. Elimine el croquis por separado si no lo necesita.

## Renombrar

Seleccione la operación y escriba un **Nombre** nuevo en la parte inferior del panel derecho (hasta 60 caracteres). El nombre de la pieza aparece en el panel derecho cuando no hay nada seleccionado.

## Piezas con cientos de operaciones

Una pieza con cientos de operaciones se ha probado con 750. PartCraft conserva el sólido que tenía a mitad del historial, así que un cambio al final del historial reconstruye solo las operaciones posteriores; un cambio cerca de la parte superior reconstruye todo lo que se construyó sobre él, lo que tarda más. Deshacer y rehacer reconstruyen solo desde donde difieren los dos estados. Para trabajar más rápido en una pieza grande, haga retroceder hasta donde está trabajando (vea Retroceder más arriba) o suprima lo que no necesite por ahora. Varios cortes y salientes que no se tocan entre sí se aplican juntos, así que una pieza formada por muchos agujeros y salientes separados se construye más rápido de lo que sugiere el número de operaciones.

Una pieza grande se reconstruye en segundo plano: la etiqueta de construcción en la parte inferior dice **Reconstruyendo…** con el avance alcanzado, y la vista, los paneles y los menús siguen funcionando mientras tanto. La pieza en pantalla es la última construida hasta que la nueva esté lista. Si cambia algo de nuevo mientras se reconstruye, PartCraft construye la versión más reciente y descarta la que estaba en curso. Una pieza pequeña se reconstruye de inmediato.

## Deshacer y rehacer

- {{key:Mod+Z}} o {{ui:Deshacer}} deshace el último cambio: una operación, una configuración, una edición de croquis, un arrastre. La barra de estado indica cuál, por ejemplo "Se deshizo: cambiar cota."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} o {{ui:Rehacer}} rehace el cambio.
- PartCraft conserva los últimos 200 pasos (una pieza tan grande que 200 copias usarían mucha memoria conserva menos, nunca menos de las 20 más recientes). Los cambios en la hoja de dibujo (una sección, un símbolo GD&T movido) están en la misma lista. Abrir un archivo o empezar una pieza nueva la borra.

:::mac
En Mac, use ⇧⌘Z para rehacer. En Safari, ⌘Y puede abrir el historial del navegador.
:::
