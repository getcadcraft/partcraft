---
title: Copiar, pegar y duplicar
summary: Copiá geometría de boceto, elementos y piezas de conjunto; pegá donde hagas clic o en el mismo lugar; duplicá en un paso; y qué viene con una copia y qué no.
keywords: copiar, pegar, cortar, duplicar, portapapeles, pegar en el mismo lugar, seleccionar todo, anular selección, eliminar, ctrl c, ctrl v, ctrl d, instancia, componente, copiar boceto, copiar elemento, copiar pieza
from: 611307d7
---

El grupo {{ui:Editar}} de la barra de herramientas tiene {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}} y un menú {{ui:Más}} con {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}} y {{ui:Anular selección}}, cada uno con su tecla. Lo que copian depende de dónde estés: geometría en un boceto abierto, un elemento en el historial, o una pieza en un conjunto.

Un ítem en gris no puede actuar en este momento. Pasá el puntero encima: su información sobre herramienta dice por qué, por ejemplo "Primero elegí geometría del boceto" o "El portapapeles tiene Sketch2 y Extrude2: los elementos se pegan en el historial, así que primero salí del boceto".

| Acción | Tecla | En un boceto | En el historial | En un conjunto |
|---|---|---|---|---|
| Copiar | {{key:Mod+C}} | Los puntos y curvas elegidos | El boceto, extrusión, revolución o agujero elegido (con su boceto) | La pieza elegida |
| Cortar | {{key:Mod+X}} | Copia y después los elimina | Copia y después elimina el elemento | Copia y después quita la pieza |
| Pegar | {{key:Mod+V}} | La copia sigue al puntero; hacé clic donde va | Agrega la copia al final del historial | Una copia nueva junto a las otras piezas |
| Pegar en el mismo lugar | {{key:Mod+Shift+V}} | En las mismas coordenadas | Igual que Pegar | En el mismo lugar que la pieza copiada |
| Duplicar | {{key:Mod+D}} | Copia y mueve de una vez; el portapapeles no se toca | Una segunda copia justo después de vos | Una segunda copia junto a las otras piezas |
| Eliminar | {{key:Delete}} | La selección | El elemento (pregunta si otros lo usan) | La pieza o la unión |
| Seleccionar todo | {{key:Mod+A}} | Todo en el boceto | No disponible | No disponible |
| Anular selección | {{key:Esc}} | Borra la selección | Borra la selección y las elecciones | Borra la selección |

Cada pegado, duplicado y corte es un paso en la lista de deshacer: {{key:Mod+Z}} lo quita, {{key:Mod+Y}} lo devuelve.

## En un boceto

1. Elegí lo que vas a copiar: hacé clic, {{key:Shift}}+clic para más, arrastrá una ventana, o presioná {{key:Mod+A}} para todo.
2. Presioná {{key:Mod+C}} o elegí {{ui:Copiar}}. La barra de estado dice qué se copió.
3. Presioná {{key:Mod+V}} o elegí {{ui:Pegar}}. Una copia punteada sigue al puntero, sostenida por su centro. Se ajusta a los puntos: para poner el centro de un círculo copiado sobre un punto, hacé clic en ese punto.
4. Hacé clic donde va. La geometría pegada queda seleccionada, así que podés arrastrarla o agregarle relaciones de inmediato. {{key:Esc}} cancela el pegado.

Lo que viene con la copia:

- Una línea, círculo o arco copiado trae sus propios puntos extremos y centro.
- Las relaciones y cotas **entre los elementos copiados** vienen con ellos: un rectángulo copiado sigue siendo un rectángulo, con sus tamaños.
- Las relaciones **a geometría que no copiaste**, y al origen, se pierden. La barra de estado las cuenta: "2 relaciones con geometría fuera de la copia no vendrán". Así que una copia pegada se puede mover libremente hasta que la ates con relaciones o cotas.
- Un punto fijo sigue fijo, en su nueva posición.

{{ui:Pegar en el mismo lugar}} pone la copia exactamente sobre las coordenadas del original, en este boceto o en otro: útil para traer un perfil de un boceto a otro. En el mismo boceto la copia queda encima del original; arrastrala para separarla.

{{ui:Duplicar}} ({{key:Mod+D}}) copia la selección y empieza a ubicarla de inmediato, sin tocar lo que hay en el portapapeles.

:::tip
Para repetir un centro de agujero o una ranura varias veces, copiala una vez y pegala varias: cada {{key:Mod+V}} empieza una copia nueva que sigue al puntero.
:::

## En el historial

1. Hacé clic en un boceto, una extrusión, una revolución o un agujero en el historial.
2. {{key:Mod+C}} lo copia. Un elemento basado en boceto se copia junto con su boceto.
3. {{key:Mod+V}} agrega la copia al final del historial (en la barra de retroceso cuando hiciste retroceder), con nombres nuevos como Sketch3 y Extrude2.

La copia queda sobre el mismo plano o cara que el original, así que se construye encima y la pieza se ve igual. Elegí el boceto nuevo y cambiá su plano en el panel derecho, o abrilo y arrastrá o volvé a acotar el perfil, para mover la copia.

- Pegar en **otra pieza**: abrí esa pieza y presioná {{key:Mod+V}}. Cuando el boceto de la copia estaba sobre una cara que esa pieza no tiene, va al plano Front, y la barra de estado lo dice.
- {{ui:Duplicar}} hace copiar y pegar en un paso, dentro de la misma pieza.
- {{ui:Cortar}} copia el elemento y después lo elimina (preguntando antes si otros elementos lo usan).

Los patrones, reflejos, redondeos, chaflanes, vaciados y sólidos importados no se pueden copiar: dependen de aristas, caras o elementos elegidos en esta pieza. Copiá el boceto o el elemento en el que se basan, o hacé un patrón con {{ui:Lineal}} o {{ui:Circular}}.

## En un conjunto

1. Hacé clic en una pieza de la vista o de la lista de la izquierda.
2. Elegí {{ui:Duplicar}} ({{key:Mod+D}}), o {{key:Mod+C}} y después {{key:Mod+V}}.

La copia nueva es la **misma pieza**: si editás una, cambia cada copia. Aparece 20 mm a la derecha de todo lo que ya hay en el conjunto, girada igual que la copia, y se queda ahí hasta que una unión la ubique. {{ui:Pegar en el mismo lugar}} ({{key:Mod+Shift+V}}) la pone exactamente donde está la pieza copiada; unila para moverla (el desplazamiento de una unión deslizante la empuja a lo largo de su eje).

Pegar una pieza copiada de otro conjunto trae la pieza junto, igual que {{ui:Insertar}} desde su archivo. {{ui:Agregar copia}} en el grupo Ensamblaje hace lo mismo que {{ui:Duplicar}}, y funciona sin nada elegido (copia la última pieza).

## El portapapeles

- Es el portapapeles propio de PartCraft, no el de la computadora: no podés pegar geometría de PartCraft en otro programa, ni texto en las vistas de PartCraft.
- Se guarda en este navegador, así que otra pestaña de PartCraft puede pegar lo que copiaste. Se lee de vuelta y se verifica como un archivo abierto; lo dañado o de otra versión se rechaza.
- Una pieza con un archivo STEP importado grande puede ser demasiado para que el navegador lo guarde: en ese caso solo se pega en esta pestaña.
- En una casilla de número o en la búsqueda de ayuda, {{key:Mod+C}} y {{key:Mod+V}} copian y pegan texto como de costumbre.

En la hoja de plano, copiar y pegar todavía no están disponibles; {{ui:Eliminar}} y {{ui:Anular selección}} funcionan sobre el símbolo elegido. Ver [Todavía no construido](topic:not-built-yet).
