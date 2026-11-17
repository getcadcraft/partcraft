---
title: Copiar, pegar y duplicar
summary: Copie geometría de croquis, operaciones y piezas de ensamblaje; pegue donde haga clic o en el mismo lugar; duplique en un solo paso; y qué viene con una copia y qué no.
keywords: copiar, pegar, cortar, duplicar, portapapeles, pegar en el mismo lugar, seleccionar todo, no seleccionar nada, eliminar, ctrl c, ctrl v, ctrl d, instancia, componente, copiar croquis, copiar operación, copiar pieza
from: 611307d7
---

El grupo {{ui:Editar}} de la barra de herramientas contiene {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}} y un menú {{ui:Más}} con {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}} y {{ui:No seleccionar nada}}, cada una con su tecla. Lo que copian depende de dónde esté: geometría en un croquis abierto, una operación en el historial o una pieza en un ensamblaje.

Un elemento en gris no puede actuar en este momento. Pase el puntero sobre él: su información emergente dice por qué, por ejemplo "Primero seleccione geometría del croquis" o "El portapapeles contiene Sketch2 y Extrude2: las operaciones se pegan en el historial, así que primero salga del croquis".

| Acción | Tecla | En un croquis | En el historial | En un ensamblaje |
|---|---|---|---|---|
| Copiar | {{key:Mod+C}} | Los puntos y curvas seleccionados | La operación seleccionada: un croquis, extrusión, revolución o taladro (con su croquis) | La pieza seleccionada |
| Cortar | {{key:Mod+X}} | Copia y luego los elimina | Copia y luego elimina la operación | Copia y luego quita la pieza |
| Pegar | {{key:Mod+V}} | La copia sigue al puntero; haga clic donde va | Agrega la copia al final del historial | Una copia nueva junto a las otras piezas |
| Pegar en el mismo lugar | {{key:Mod+Shift+V}} | En las mismas coordenadas | Igual que Pegar | En el mismo lugar que la pieza copiada |
| Duplicar | {{key:Mod+D}} | Copia y mueve de un solo paso; el portapapeles no se toca | Una segunda copia justo después de la seleccionada | Una segunda copia junto a las otras piezas |
| Eliminar | {{key:Delete}} | La selección | La operación (pregunta si otras la usan) | La pieza o la unión |
| Seleccionar todo | {{key:Mod+A}} | Todo en el croquis | No disponible | No disponible |
| No seleccionar nada | {{key:Esc}} | Quita la selección | Quita la selección y las elecciones | Quita la selección |

Cada pegado, duplicado y corte es un paso de la lista de deshacer: {{key:Mod+Z}} lo deshace, {{key:Mod+Y}} lo rehace.

## En un croquis

1. Seleccione lo que va a copiar: haga clic en ello, {{key:Shift}}+clic para más, arrastre una ventana, o pulse {{key:Mod+A}} para todo.
2. Pulse {{key:Mod+C}} o elija {{ui:Copiar}}. La barra de estado dice qué se copió.
3. Pulse {{key:Mod+V}} o elija {{ui:Pegar}}. Una copia punteada sigue al puntero, sostenida por su centro. Se ajusta a los puntos: para poner el centro de un círculo copiado sobre un punto, haga clic en ese punto.
4. Haga clic donde va. La geometría pegada queda seleccionada, así que puede arrastrarla o agregarle relaciones de inmediato. {{key:Esc}} cancela el pegado.

Qué viene con la copia:

- Una línea, círculo o arco copiado trae sus propios puntos extremos y su centro.
- Las relaciones y cotas **entre elementos copiados** vienen con ella: un rectángulo copiado sigue siendo un rectángulo, con sus medidas.
- Las relaciones **con geometría que no copió**, y con el origen, se eliminan. La barra de estado las cuenta: "2 relaciones con geometría fuera de la copia no se incluirán". Así que una copia pegada puede moverse libremente hasta que la vincule con relaciones o cotas.
- Un punto fijo sigue fijo, en su nueva posición.

{{ui:Pegar en el mismo lugar}} coloca la copia exactamente en las coordenadas del original, en este croquis o en otro: útil para traer un perfil de un croquis a otro. En el mismo croquis, la copia queda encima del original; arrástrela para alejarla.

{{ui:Duplicar}} ({{key:Mod+D}}) copia la selección y empieza a colocarla de inmediato, sin tocar lo que está en el portapapeles.

:::tip
Para repetir un centro de agujero o una ranura varias veces, cópielo una vez y péguelo varias: cada {{key:Mod+V}} inicia una copia nueva que sigue al puntero.
:::

## En el historial

1. Haga clic en un croquis, una extrusión, una revolución o un taladro en el historial.
2. {{key:Mod+C}} lo copia. Una operación basada en croquis se copia junto con su croquis.
3. {{key:Mod+V}} agrega la copia al final del historial (en la barra de retroceso si ha retrocedido), con nombres nuevos como Sketch3 y Extrude2.

La copia queda en el mismo plano o cara que el original, así que se construye encima y la pieza se ve igual. Seleccione el nuevo croquis y cambie su plano en el panel derecho, o ábralo y arrastre o vuelva a acotar el perfil, para mover la copia.

- Para pegar en **otra pieza**: abra esa pieza y pulse {{key:Mod+V}}. Cuando el croquis de la copia estaba sobre una cara que esa pieza no tiene, va al plano frontal, y la barra de estado lo indica.
- {{ui:Duplicar}} copia y pega en un solo paso, dentro de la misma pieza.
- {{ui:Cortar}} copia la operación y luego la elimina (preguntando primero si otras operaciones la usan).

Las matrices, las simetrías, los redondeos, los chaflanes, los vaciados y los sólidos importados no se pueden copiar: dependen de aristas, caras u operaciones elegidas en esta pieza. Copie el croquis o la operación en la que se basan, o cree una matriz con {{ui:Lineal}} o {{ui:Circular}}.

## En un ensamblaje

1. Haga clic en una pieza en la vista o en la lista de la izquierda.
2. Elija {{ui:Duplicar}} ({{key:Mod+D}}), o {{key:Mod+C}} y luego {{key:Mod+V}}.

La copia nueva es la **misma pieza**: si edita una, cambian todas las copias. Aparece 20 mm a la derecha de todo lo que ya está en el ensamblaje, girada igual que la copia, y se queda ahí hasta que una unión la coloque. {{ui:Pegar en el mismo lugar}} ({{key:Mod+Shift+V}}) la pone exactamente donde está la pieza copiada; únala para moverla (el desfase de una unión deslizante la empuja a lo largo de ella).

Pegar una pieza copiada de otro ensamblaje trae la pieza, igual que {{ui:Insertar}} desde su archivo. {{ui:Agregar copia}} en el grupo Ensamblaje hace lo mismo que {{ui:Duplicar}}, y funciona sin nada seleccionado (copia la última pieza).

## El portapapeles

- Es el portapapeles propio de PartCraft, no el de la computadora: no puede pegar geometría de PartCraft en otro programa, ni texto en las vistas de PartCraft.
- Se guarda en este navegador, así que otra pestaña de PartCraft puede pegar lo que copió. Se lee de nuevo y se verifica como un archivo abierto; lo dañado o de otra versión se rechaza.
- Una pieza con un archivo STEP importado grande puede ser demasiado grande para que el navegador la guarde: entonces solo se pega en esta pestaña.
- En un cuadro de número o en la búsqueda de ayuda, {{key:Mod+C}} y {{key:Mod+V}} copian y pegan texto como de costumbre.

En la hoja de dibujo, copiar y pegar todavía no están disponibles; {{ui:Eliminar}} y {{ui:No seleccionar nada}} funcionan sobre el símbolo seleccionado. Vea [Lo que todavía no está disponible](topic:not-built-yet).
