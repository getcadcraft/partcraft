---
title: Copiar, pegar y duplicar
summary: Copie geometría de croquis, operaciones y piezas de ensamblaje; pegue donde haga clic o en el mismo lugar; duplique en un solo paso; y vea qué acompaña a una copia y qué no.
keywords: copiar, pegar, cortar, duplicar, portapapeles, pegar en el mismo lugar, seleccionar todo, no seleccionar nada, eliminar, ctrl c, ctrl v, ctrl d, instancia, componente, copiar croquis, copiar operación, copiar pieza
from: 611307d7
---

El grupo {{ui:Editar}} de la barra de herramientas contiene {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}} y un menú {{ui:Más}} con {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}} y {{ui:No seleccionar nada}}, cada uno con su tecla. Lo que se copia depende de dónde esté: geometría en un croquis abierto, una operación en el historial o una pieza en un ensamblaje.

Un elemento atenuado no puede actuar en este momento. Pase el cursor sobre él: su aviso indica por qué, por ejemplo "Seleccione primero geometría del croquis" o "El portapapeles contiene Sketch2 y Extrude2: las operaciones se pegan en el historial, así que salga antes del croquis".

| Acción | Tecla | En un croquis | En el historial | En un ensamblaje |
|---|---|---|---|---|
| Copiar | {{key:Mod+C}} | Los puntos y curvas seleccionados | El croquis, extrusión, revolución o taladro seleccionado (con su croquis) | La pieza seleccionada |
| Cortar | {{key:Mod+X}} | Copia y después los elimina | Copia y después elimina la operación | Copia y después quita la pieza |
| Pegar | {{key:Mod+V}} | La copia sigue al puntero; haga clic donde va | Añade la copia al final del historial | Una copia nueva junto a las demás piezas |
| Pegar en el mismo lugar | {{key:Mod+Shift+V}} | En las mismas coordenadas | Igual que Pegar | En el mismo lugar que la pieza copiada |
| Duplicar | {{key:Mod+D}} | Copia y mueve en un paso; el portapapeles no cambia | Una segunda copia justo después de la original | Una segunda copia junto a las demás piezas |
| Eliminar | {{key:Delete}} | La selección | La operación (pregunta si otras la usan) | La pieza o la unión |
| Seleccionar todo | {{key:Mod+A}} | Todo el croquis | No disponible | No disponible |
| No seleccionar nada | {{key:Esc}} | Borra la selección | Borra la selección y las elecciones | Borra la selección |

Cada pegado, duplicado y corte es un paso de la lista de deshacer: {{key:Mod+Z}} lo deshace, {{key:Mod+Y}} lo rehace.

## En un croquis

1. Seleccione lo que quiere copiar: haga clic, {{key:Shift}}+clic para más, arrastre una ventana, o pulse {{key:Mod+A}} para todo.
2. Pulse {{key:Mod+C}} o elija {{ui:Copiar}}. La barra de estado indica qué se copió.
3. Pulse {{key:Mod+V}} o elija {{ui:Pegar}}. Una copia discontinua sigue al puntero, sujeta por su centro. Se ajusta a puntos: para colocar el centro de un círculo copiado sobre un punto, haga clic en ese punto.
4. Haga clic donde debe ir. La geometría pegada queda seleccionada, así que puede arrastrarla o añadirle relaciones de inmediato. {{key:Esc}} cancela el pegado.

Qué acompaña:

- Una línea, un círculo o un arco copiados traen sus propios puntos extremos y su centro.
- Las relaciones y cotas **entre elementos copiados** vienen también: un rectángulo copiado sigue siendo un rectángulo, con sus medidas.
- Las relaciones **con geometría que no copió**, y con el origen, se pierden. La barra de estado las cuenta: "2 relaciones con geometría fuera de la copia no vendrán". Así que una copia pegada puede moverse libremente hasta que la sujete con relaciones o cotas.
- Un punto fijo sigue fijo, en su nueva posición.

{{ui:Pegar en el mismo lugar}} coloca la copia exactamente en las coordenadas del original, en este croquis o en otro: útil para llevar un perfil de un croquis a otro. En el mismo croquis la copia queda encima del original; arrástrela para apartarla.

{{ui:Duplicar}} ({{key:Mod+D}}) copia la selección y empieza a colocarla de inmediato, sin tocar lo que hay en el portapapeles.

:::tip
Para repetir el centro de un taladro o una ranura varias veces, cópielo una vez y péguelo varias veces: cada {{key:Mod+V}} inicia una copia nueva que sigue al puntero.
:::

## En el historial

1. Haga clic en un croquis, una extrusión, una revolución o un taladro del historial.
2. {{key:Mod+C}} lo copia. Una operación basada en un croquis se copia junto con su croquis.
3. {{key:Mod+V}} añade la copia al final del historial (en la barra de retroceso si ha retrocedido), con nombres nuevos como Sketch3 y Extrude2.

La copia queda sobre el mismo plano o cara que el original, así que se construye encima y la pieza tiene el mismo aspecto. Seleccione el nuevo croquis y cambie su plano en el panel derecho, o ábralo y arrastre o vuelva a acotar el perfil, para mover la copia.

- Pegar en **otra pieza**: abra esa pieza y pulse {{key:Mod+V}}. Cuando el croquis de la copia estaba sobre una cara que esa pieza no tiene, se coloca en el plano Alzado, y la barra de estado lo indica.
- {{ui:Duplicar}} copia y pega en un solo paso, dentro de la misma pieza.
- {{ui:Cortar}} copia la operación y después la elimina (preguntando antes si otras operaciones la usan).

Las matrices, simetrías, redondeos, chaflanes, vaciados y sólidos importados no se pueden copiar: dependen de aristas, caras u operaciones elegidas en esta pieza. Copie el croquis o la operación en la que se basan, o aplíqueles una matriz con {{ui:Lineal}} o {{ui:Circular}}.

## En un ensamblaje

1. Haga clic en una pieza en la vista o en la lista de la izquierda.
2. Elija {{ui:Duplicar}} ({{key:Mod+D}}), o {{key:Mod+C}} y después {{key:Mod+V}}.

La copia nueva es la **misma pieza**: si edita una, cambian todas las copias. Aparece a 20 mm a la derecha de todo lo que ya hay en el ensamblaje, girada igual que la copia, y se queda allí hasta que una unión la coloque. {{ui:Pegar en el mismo lugar}} ({{key:Mod+Shift+V}}) la pone exactamente donde está la pieza copiada; únala para moverla (el desplazamiento de una unión deslizante la empuja a lo largo de su eje).

Pegar una pieza copiada de otro ensamblaje trae la pieza consigo, igual que {{ui:Insertar}} desde su archivo. {{ui:Añadir copia}} del grupo Ensamblaje hace lo mismo que {{ui:Duplicar}}, y funciona con nada seleccionado (copia la última pieza).

## El portapapeles

- Es el portapapeles propio de PartCraft, no el del equipo: no puede pegar geometría de PartCraft en otro programa, ni texto en las vistas de PartCraft.
- Se guarda en este navegador, así que otra pestaña de PartCraft puede pegar lo que copió. Se lee y comprueba como un archivo abierto; lo dañado o de otra versión se rechaza.
- Una pieza con un archivo STEP importado grande puede ser demasiado grande para que el navegador la guarde: entonces solo se pega en esta pestaña.
- En un cuadro numérico o en la búsqueda de ayuda, {{key:Mod+C}} y {{key:Mod+V}} copian y pegan texto como de costumbre.

En la hoja de dibujo, copiar y pegar todavía no están disponibles; {{ui:Eliminar}} y {{ui:No seleccionar nada}} actúan sobre el símbolo seleccionado. Véase [Lo que todavía no está disponible](topic:not-built-yet).
