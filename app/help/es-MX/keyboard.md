---
title: Teclas y ratón
summary: Cada atajo de teclado y acción del ratón en PartCraft, agrupados según dónde funcionan: en todas partes, copiar y pegar, en la pieza, en la vista 3D, en un croquis, en el historial y en un ensamblaje.
keywords: teclado, atajos, teclas de acceso, teclas, ratón, órbita, girar, encuadre, zoom, rueda, clic derecho, deshacer, rehacer, guardar, abrir, escape, eliminar, flecha con Alt, copiar, pegar, cortar, duplicar, seleccionar todo, botón central
from: 3a59c3a3
---

Las teclas no hacen nada mientras escribe en un cuadro de un panel, salvo {{key:Mod+S}} y {{key:Mod+O}}, que siempre funcionan. Las teclas de letra funcionan sin modificador.

Notas generales sobre las teclas en el navegador y en teclados sin teclas de función: [Teclas, ratones y trackpads](common:keys).

## En todas partes

| Tecla | Acción |
|---|---|
| {{key:Mod+S}} | Guardar la pieza (en un ensamblaje: el ensamblaje). Antes cierra un croquis abierto |
| {{key:Mod+O}} | Abrir un archivo de pieza o de ensamblaje (pregunta antes si hay cambios sin guardar) |
| {{key:Mod+Z}} | Deshacer |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer |
| {{key:F1}} | Abrir o cerrar esta ayuda (también {{ui:Ayuda}} en la barra de la aplicación). {{key:Esc}} también la cierra. En muchos portátiles y teclados Mac, mantenga pulsado Fn |
| {{key:Ctrl+Shift+F}} | Modo de pantalla: normal, pantalla completa, pantalla completa con las barras ocultas. En Mac también Control, no ⌘ |
| {{key:Esc}} | Salir de pantalla completa (si está en ella) |
| {{key:Mod+,}} | Configuración, incluida la pestaña PartCraft (vea [Configuración de PartCraft](topic:settings)) |

En el cuadro numérico de un panel, {{key:Mod+Z}} es el deshacer de texto del propio navegador. En el cuadro numérico sobre una cota de croquis, deshace en PartCraft.

## Copiar, pegar y duplicar

Actúan sobre lo que está editando: la geometría seleccionada en un croquis abierto, la operación seleccionada en el historial o la pieza seleccionada en un ensamblaje. Detalles en [Copiar, pegar y duplicar](topic:copy-paste).

| Tecla | Acción |
|---|---|
| {{key:Mod+C}} | Copiar la selección |
| {{key:Mod+X}} | Cortar: copiar y luego eliminar |
| {{key:Mod+V}} | Pegar. En un croquis la copia sigue al puntero: haga clic donde debe ir |
| {{key:Mod+Shift+V}} | Pegar en el mismo lugar: mismas coordenadas (en un ensamblaje, el mismo lugar) |
| {{key:Mod+D}} | Duplicar: copiar y pegar en un solo paso, sin tocar el portapapeles |
| {{key:Mod+A}} | Seleccionar todo (en un croquis) |
| {{key:Esc}} | No seleccionar nada (y cancelar un pegado que sigue al puntero) |

En un cuadro numérico, estas teclas copian y pegan texto como de costumbre. El texto seleccionado en un panel lo copia el navegador.

## En la pieza (sin croquis abierto)

| Tecla | Acción |
|---|---|
| {{key:S}} | Croquis sobre el plano o la cara plana seleccionada; si no hay nada designado, elija dónde haciendo clic |
| {{key:F}} | Ajustar la pieza en la vista |
| {{key:M}} | Medir, en todos los espacios de trabajo y en un ensamblaje; {{key:Esc}} borra las selecciones, otro {{key:Esc}} la cierra (vea [Medir distancias, ángulos y masa](topic:measure)) |
| {{key:X}} | Activar o desactivar la vista de sección, en todos los espacios de trabajo y en un ensamblaje; {{key:Esc}} la cierra (vea [Ver el interior con una vista de sección](topic:section-view)) |
| {{key:Delete}} | Eliminar la operación seleccionada (pregunta si otras la usan) |
| {{key:0}} … {{key:9}}, {{key:.}} | Con una operación seleccionada: escriba su número principal (la profundidad de una extrusión, el diámetro de un agujero, el número de un patrón, el radio de un empalme …) y luego {{key:Enter}}. {{key:Esc}} conserva el anterior |
| {{key:Backspace}} | Eliminar la operación seleccionada, si hay una |
| {{key:Esc}} | Dejar de elegir un plano de croquis, o borrar la selección (incluidas las aristas o caras designadas con {{key:Shift}}) |

## En la vista 3D

Haga clic primero en la vista para que tenga el foco del teclado.

| Tecla | Acción |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Girar la vista 15 grados |
| {{key:Shift+Left}} y las demás flechas | Encuadrar |
| {{key:Plus}} o {{key:=}} | Acercar (zoom) |
| {{key:Minus}} | Alejar |

| Ratón | Acción |
|---|---|
| Arrastrar con el botón izquierdo | Girar (órbita) la vista |
| Arrastrar con el botón derecho o central | Encuadrar |
| {{key:Shift}}, {{key:Ctrl}} o ⌘ mantenidos mientras se arrastra con el botón izquierdo | Encuadrar |
| Girar la rueda | Acercar o alejar en el puntero (alejándola de usted acerca) |
| Deslizar dos dedos en un trackpad | Girar la vista; con {{key:Shift}}, encuadrar. Pellizcar hace zoom. Se define con **Desplazamiento** en [Configuración de PartCraft](topic:settings) |

Con **Girar la vista: botón central** en [Configuración de PartCraft](topic:settings), el botón central gira la vista, {{key:Shift}} con el botón central o con el botón derecho encuadra, y el botón izquierdo solo designa.
| Clic | Designar una cara (se resalta completa), una arista o un plano |
| {{key:Shift}}+clic en una arista o cara | Reunir varias aristas o caras |
| Clic en espacio vacío | Quitar la selección |

## Al designar aristas o caras para un empalme, chaflán o vaciado

| Tecla o ratón | Acción |
|---|---|
| Clic en una arista o cara | La agrega, o la quita si ya estaba |
| {{key:Esc}} o {{key:Enter}} | Terminar la selección (igual que {{ui:Listo}}) |
| {{key:F}} | Ajustar |
| Teclas de flecha, con la vista enfocada | Girar; con {{key:Shift}}, encuadrar |

## En la hoja de dibujo

| Tecla | Acción |
|---|---|
| {{key:F}} | Ajustar la hoja |
| {{key:Plus}} / {{key:Minus}} | Zoom (con la hoja enfocada) |
| {{key:Shift+Left}} y las demás flechas | Encuadrar (con la hoja enfocada) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Mover el símbolo GD&T seleccionado 1 mm |
| {{key:Delete}} o {{key:Backspace}} | Eliminar el símbolo seleccionado |
| {{key:Esc}} | Dejar de colocar un símbolo; si no, anular la selección; si no, volver al modelo |

| Ratón | Acción |
|---|---|
| Clic en una vista, con Referencia, Marco, Acabado o Detalle elegido | Colocarlo ahí (se ajusta a la línea más cercana) |
| Clic en un símbolo | Seleccionarlo |
| Arrastrar un símbolo | Moverlo (la directriz queda en su punto) |
| Girar la rueda | Acercar o alejar en el puntero |
| Arrastrar con el botón derecho o central | Encuadrar |

## En un croquis

| Tecla | Acción |
|---|---|
| {{key:L}} | Línea |
| {{key:R}} | Rectángulo |
| {{key:C}} | Círculo |
| {{key:A}} | Arco (centro, inicio, fin) |
| {{key:P}} | Punto |
| {{key:N}} | Línea de centro |
| {{key:F}} | Empalmar una esquina |
| {{key:D}} | Cota |
| {{key:B}} | Spline (por puntos de ajuste) |
| {{key:T}} | Recortar |
| {{key:E}} | Alargar |
| {{key:O}} | Desfase ({{key:B}} mientras desfasa: a ambos lados) |
| {{key:M}} | Simetría |
| {{key:S}} | Seleccionar |
| {{key:Q}} | Cambiar las curvas seleccionadas a de construcción, y viceversa |
| {{key:Enter}} | Terminar una cadena de líneas o un spline |
| {{key:Delete}} o {{key:Backspace}} | Eliminar la selección |
| {{key:Mod+A}} | Seleccionar todo lo del croquis |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Copiar, cortar o pegar geometría (el pegado sigue al puntero) |
| {{key:Mod+Shift+V}} | Pegar en las mismas coordenadas |
| {{key:Mod+D}} | Duplicar la selección y colocarla con un clic |
| {{key:Esc}} | Retroceder: cancela el cuadro numérico o un pegado, termina la cadena de líneas, vuelve a Seleccionar, borra la selección y, por último, cierra el croquis |

| Ratón | Acción |
|---|---|
| Clic | Colocar puntos con una herramienta de dibujo; designar con Seleccionar |
| {{key:Shift}}+clic | Agregar a la selección o quitar de ella ({{key:Ctrl}}+clic en Windows y Linux, o ⌘+clic en Mac, hacen lo mismo) |
| Arrastrar en espacio vacío (Seleccionar) | Ventana: selecciona todo lo que queda completamente dentro |
| Arrastrar un punto, una línea o el borde de un círculo (Seleccionar) | Moverlo; las relaciones se mantienen |
| Arrastrar el número de una cota (Seleccionar) | Mover la etiqueta |
| Doble clic en una cota | Cambiar su valor |
| Doble clic o clic derecho al dibujar líneas | Terminar la cadena |
| Arrastrar con el botón derecho o central | Encuadrar |
| Girar la rueda | Acercar o alejar en el puntero |

### En el cuadro numérico

| Tecla | Acción |
|---|---|
| {{key:Enter}} | Aplicar el valor |
| {{key:Esc}} | Cerrar sin cambiar |

Hacer clic fuera del cuadro también aplica el valor.

## En la lista del historial

| Tecla | Acción |
|---|---|
| {{key:Tab}} | Llegar a la lista |
| {{key:Up}} / {{key:Down}} | Moverse entre filas |
| {{key:Enter}} o {{key:Space}} | Seleccionar la fila |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Subir o bajar la operación seleccionada, donde lo permita el historial |
| {{key:F2}} | Cambiar el número principal de la operación en su fila; {{key:Enter}} lo fija, {{key:Esc}} conserva el anterior |

| Ratón | Acción |
|---|---|
| Clic | Seleccionar un plano o una operación |
| Doble clic en un croquis | Abrirlo |
| Doble clic en el número de una operación | Cambiarlo en la fila |

## En un ensamblaje

| Tecla | Acción |
|---|---|
| {{key:J}} | Iniciar una unión: luego haga clic en una cara plana de cada una de dos piezas |
| {{key:F}} | Ajustar |
| {{key:Esc}} | Cancelar la unión iniciada, o borrar la selección |
| {{key:Delete}} | Quitar la pieza o unión seleccionada |
| {{key:Backspace}} | Quitar la pieza o unión seleccionada |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Deshacer y rehacer en la lista propia del ensamblaje |
| {{key:Mod+D}} | Duplicar la pieza seleccionada (la misma pieza, junto a las demás) |
| {{key:Mod+C}}, luego {{key:Mod+V}} o {{key:Mod+Shift+V}} | Copiar una pieza, pegarla junto a las demás o en el mismo lugar |

Ratón en la vista: igual que en la vista 3D de arriba. Haga clic en una pieza para seleccionarla. Haga doble clic en una pieza de la lista para editarla.

## En el espacio de trabajo Script

| Tecla | Acción |
|---|---|
| {{key:F5}} | Ejecutar el script (en el editor, el panel o la vista) |
| {{key:Mod+Enter}} | Ejecutar las líneas seleccionadas, o la línea donde está el cursor |
| {{key:Tab}} / {{key:Shift+Tab}} | Aumentar o reducir la sangría de las líneas seleccionadas. Para salir del editor con el teclado, pulse {{key:Esc}} y luego {{key:Tab}} |
| {{key:Mod+/}} | Comentar las líneas seleccionadas, o quitar el comentario |
| {{key:Mod+F}} / {{key:Mod+H}} | Buscar, o buscar y reemplazar, en el script; {{key:Enter}} o {{key:F3}} van a la siguiente coincidencia, {{key:Shift+Enter}} o {{key:Shift+F3}} a la anterior, {{key:Esc}} cierra |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Contraer o expandir el bloque donde está el cursor (una función, if, for, while … end) |
| {{key:Mod+Space}} | Mostrar sugerencias para el nombre que escribe (también se abre tras dos letras); {{key:Up}} / {{key:Down}} eligen, {{key:Enter}} o {{key:Tab}} toman una, {{key:Esc}} cierra |
| {{key:Enter}} en la línea bajo la consola | Ejecutar esa instrucción; {{key:Up}} y {{key:Down}} traen las anteriores |
| {{key:F}} | Ajustar la vista a lo que muestran los scripts |

Vea [Escribir y ejecutar scripts](topic:craftscript).

## Atajos que el navegador puede tomar

- {{key:Mod+Y}} en Safari puede abrir el historial: use {{key:Mod+Shift+Z}} para rehacer.
- {{key:Mod+D}} es la tecla de marcadores del navegador: PartCraft la toma mientras la aplicación tiene el foco, y la deja libre mientras escribe en un cuadro.
- {{key:F11}} y {{key:Mod+Plus}} / {{key:Mod+Minus}} son la pantalla completa y el zoom de página del navegador, no de PartCraft. Use {{key:Ctrl+Shift+F}} para pantalla completa y la rueda para el modelo.
- Las teclas de función de muchos portátiles y Mac necesitan la tecla Fn: pulse Fn+{{key:F1}} para la ayuda, o use el botón {{ui:Ayuda}}.

Gestos táctiles y de trackpad: [Trackpad, táctil y pantallas pequeñas](topic:trackpad-and-touch).

## Dónde está Mover

Mover está en el menú {{ui:Más}} del grupo Operaciones, como {{ui:Mover cuerpo}}; en el cuadro {{ui:Desplazamiento}}, donde escribe ΔX, ΔY y ΔZ; y como flechas de {{ui:Arrastrar para desplazar}} en la pieza.
