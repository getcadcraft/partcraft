---
title: Teclas y ratón
summary: Cada atajo de teclado y cada acción del ratón en PartCraft, agrupados según dónde funcionan: en todas partes, copiar y pegar, en la pieza, en la vista 3D, en un croquis, en el historial y en un ensamblaje.
keywords: teclado, atajos, teclas de acceso rápido, teclas, ratón, orbitar, girar, desplazar, zoom, rueda, clic derecho, deshacer, rehacer, guardar, abrir, esc, eliminar, alt flechas, copiar, pegar, cortar, duplicar, seleccionar todo, botón central
from: 3a59c3a3
---

Las teclas no hacen nada mientras escribe en un cuadro de un panel, salvo {{key:Mod+S}} y {{key:Mod+O}}, que siempre funcionan. Las teclas de letras funcionan sin modificador.

Notas generales sobre las teclas en el navegador y en teclados sin teclas de función: [Teclas, ratones y paneles táctiles](common:keys).

## En todas partes

| Tecla | Acción |
|---|---|
| {{key:Mod+S}} | Guardar la pieza (en un ensamblaje: el ensamblaje). Cierra antes un croquis abierto |
| {{key:Mod+O}} | Abrir un archivo de pieza o de ensamblaje (pregunta antes si hay cambios sin guardar) |
| {{key:Mod+Z}} | Deshacer |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer |
| {{key:F1}} | Abrir o cerrar esta ayuda (también {{ui:Ayuda}} en la barra de la aplicación). {{key:Esc}} también la cierra. En muchos portátiles y teclados de Mac, mantenga pulsada Fn |
| {{key:Ctrl+Shift+F}} | Modo de pantalla: normal, pantalla completa, pantalla completa con las barras ocultas. Control también en un Mac, no ⌘ |
| {{key:Esc}} | Salir de pantalla completa (cuando está activa) |
| {{key:Mod+,}} | Configuración, incluida la pestaña de PartCraft (véase [Configuración de PartCraft](topic:settings)) |

En el cuadro numérico de un panel, {{key:Mod+Z}} es el deshacer de texto propio del navegador. En el cuadro numérico sobre una cota de un croquis, deshace en PartCraft.

## Copiar, pegar y duplicar

Actúan sobre lo que está editando: la geometría seleccionada en un croquis abierto, la operación seleccionada en el historial o la pieza seleccionada en un ensamblaje. Detalles en [Copiar, pegar y duplicar](topic:copy-paste).

| Tecla | Acción |
|---|---|
| {{key:Mod+C}} | Copiar la selección |
| {{key:Mod+X}} | Cortar: copiar y después eliminar |
| {{key:Mod+V}} | Pegar. En un croquis la copia sigue al puntero: haga clic donde debe ir |
| {{key:Mod+Shift+V}} | Pegar en el mismo sitio: mismas coordenadas (en un ensamblaje, el mismo lugar) |
| {{key:Mod+D}} | Duplicar: copiar y pegar en un paso, sin alterar el portapapeles |
| {{key:Mod+A}} | Seleccionar todo (en un croquis) |
| {{key:Esc}} | Anular la selección (y cancelar un pegado que sigue al puntero) |

En un cuadro numérico, estas teclas copian y pegan texto como de costumbre. El texto seleccionado en un panel lo copia el navegador.

## En la pieza (sin croquis abierto)

| Tecla | Acción |
|---|---|
| {{key:S}} | Croquis sobre el plano o la cara plana seleccionados; si no hay nada elegido, elija dónde haciendo clic |
| {{key:F}} | Ajustar la pieza a la vista |
| {{key:M}} | Medir, en todos los espacios de trabajo y en un ensamblaje; {{key:Esc}} borra las selecciones, y {{key:Esc}} de nuevo cierra la herramienta (véase [Medir distancias, ángulos y masa](topic:measure)) |
| {{key:X}} | Vista de sección activada o desactivada, en todos los espacios de trabajo y en un ensamblaje; {{key:Esc}} la cierra (véase [Ver el interior con una vista de sección](topic:section-view)) |
| {{key:Delete}} | Eliminar la operación seleccionada (pregunta si otras la usan) |
| {{key:0}} … {{key:9}}, {{key:.}} | Con una operación seleccionada: escriba su número principal (la profundidad de una extrusión, el diámetro de un agujero, el número de una repetición, el radio de un redondeo …) y después {{key:Enter}}. {{key:Esc}} mantiene el anterior |
| {{key:Backspace}} | Eliminar la operación seleccionada, si hay una |
| {{key:Esc}} | Dejar de elegir un plano de croquis, o borrar la selección (incluidas las aristas o caras elegidas con {{key:Shift}}) |

## En la vista 3D

Haga clic primero en la vista para que tenga el foco del teclado.

| Tecla | Acción |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Girar la vista 15 grados |
| {{key:Shift+Left}} y las demás flechas | Desplazar |
| {{key:Plus}} o {{key:=}} | Acercar |
| {{key:Minus}} | Alejar |

| Ratón | Acción |
|---|---|
| Arrastrar con el botón izquierdo | Girar (orbitar) la vista |
| Arrastrar con el botón derecho o el central | Desplazar |
| {{key:Shift}}, {{key:Ctrl}} o ⌘ mantenidos mientras se arrastra con el botón izquierdo | Desplazar |
| Girar la rueda | Acercar o alejar en el puntero (girarla alejándola de usted acerca) |
| Deslizar dos dedos en un panel táctil | Girar la vista; con {{key:Shift}}, desplazar. Pellizcar hace zoom. Se configura con **Desplazamiento** en [Configuración de PartCraft](topic:settings) |

Con **Girar la vista: botón central** en [Configuración de PartCraft](topic:settings), el botón central gira la vista, {{key:Shift}} con el botón central o con el derecho desplaza, y el botón izquierdo solo elige.
| Clic | Elegir una cara (se resalta completa), una arista o un plano |
| {{key:Shift}}+clic en una arista o cara | Reunir varias aristas o caras |
| Clic en un espacio vacío | Borrar la elección |

## Al elegir aristas o caras para un redondeo, un chaflán o un vaciado

| Tecla o ratón | Acción |
|---|---|
| Clic en una arista o cara | Añadirla, o quitarla si ya estaba |
| {{key:Esc}} o {{key:Enter}} | Terminar la selección (igual que {{ui:Listo}}) |
| {{key:F}} | Ajustar |
| Teclas de flecha, con la vista enfocada | Girar; con {{key:Shift}}, desplazar |

## En la hoja de dibujo

| Tecla | Acción |
|---|---|
| {{key:F}} | Ajustar la hoja |
| {{key:Plus}} / {{key:Minus}} | Acercar / alejar (con la hoja enfocada) |
| {{key:Shift+Left}} y las demás flechas | Desplazar (con la hoja enfocada) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Mover 1 mm el símbolo GD&T seleccionado |
| {{key:Delete}} o {{key:Backspace}} | Eliminar el símbolo seleccionado |
| {{key:Esc}} | Dejar de colocar un símbolo; si no, anular la selección; si no, volver al modelo |

| Ratón | Acción |
|---|---|
| Clic en una vista, con Referencia, Marco de control, Acabado o Detalle elegido | Colocarlo allí (se ajusta a la línea más cercana) |
| Clic en un símbolo | Seleccionarlo |
| Arrastrar un símbolo | Moverlo (la directriz se mantiene en su punto) |
| Girar la rueda | Acercar o alejar en el puntero |
| Arrastrar con el botón derecho o el central | Desplazar |

## En un croquis

| Tecla | Acción |
|---|---|
| {{key:L}} | Línea |
| {{key:R}} | Rectángulo |
| {{key:C}} | Círculo |
| {{key:A}} | Arco (centro, inicio, fin) |
| {{key:P}} | Punto |
| {{key:N}} | Línea de centros |
| {{key:F}} | Empalme de una esquina |
| {{key:D}} | Acotar |
| {{key:B}} | Spline (por puntos de ajuste) |
| {{key:T}} | Recortar |
| {{key:E}} | Prolongar |
| {{key:O}} | Desfase ({{key:B}} al desfasar: ambos lados) |
| {{key:M}} | Simetría |
| {{key:S}} | Seleccionar |
| {{key:Q}} | Cambiar las curvas seleccionadas a construcción, y viceversa |
| {{key:Enter}} | Terminar una cadena de líneas o un spline |
| {{key:Delete}} o {{key:Backspace}} | Eliminar la selección |
| {{key:Mod+A}} | Seleccionar todo lo que hay en el croquis |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Copiar, cortar, pegar geometría (el pegado sigue al puntero) |
| {{key:Mod+Shift+V}} | Pegar en las mismas coordenadas |
| {{key:Mod+D}} | Duplicar la selección y colocarla con un clic |
| {{key:Esc}} | Retroceder: cancelar el cuadro numérico o un pegado, terminar la cadena de líneas, volver a Seleccionar, borrar la selección y después cerrar el croquis |

| Ratón | Acción |
|---|---|
| Clic | Colocar puntos con una herramienta de dibujo; seleccionar con Seleccionar |
| {{key:Shift}}+clic | Añadir a la selección o quitar de ella ({{key:Ctrl}}+clic en Windows y Linux, y ⌘+clic en un Mac, hacen lo mismo) |
| Arrastrar en un espacio vacío (Seleccionar) | Ventana: selecciona todo lo que queda completamente dentro |
| Arrastrar un punto, una línea o el borde de un círculo (Seleccionar) | Moverlo; las relaciones se mantienen |
| Arrastrar el número de una cota (Seleccionar) | Mover la etiqueta |
| Doble clic en una cota | Cambiar su valor |
| Doble clic o clic derecho al dibujar líneas | Terminar la cadena |
| Arrastrar con el botón derecho o el central | Desplazar |
| Girar la rueda | Acercar o alejar en el puntero |

### En el cuadro numérico

| Tecla | Acción |
|---|---|
| {{key:Enter}} | Aplicar el valor |
| {{key:Esc}} | Cerrar sin cambiar nada |

Hacer clic fuera también aplica el valor.

## En la lista del historial

| Tecla | Acción |
|---|---|
| {{key:Tab}} | Llegar a la lista |
| {{key:Up}} / {{key:Down}} | Moverse entre filas |
| {{key:Enter}} o {{key:Space}} | Seleccionar la fila |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Subir o bajar la operación seleccionada, cuando el historial lo permite |
| {{key:F2}} | Cambiar el número principal de la operación en su fila; {{key:Enter}} lo fija, {{key:Esc}} mantiene el anterior |

| Ratón | Acción |
|---|---|
| Clic | Seleccionar un plano o una operación |
| Doble clic en un croquis | Abrirlo |
| Doble clic en el número de una operación | Cambiarlo en la fila |

## En un ensamblaje

| Tecla | Acción |
|---|---|
| {{key:J}} | Iniciar una unión: después haga clic en una cara plana de cada una de dos piezas |
| {{key:F}} | Ajustar |
| {{key:Esc}} | Cancelar la unión iniciada, o borrar la selección |
| {{key:Delete}} | Quitar la pieza o la unión seleccionada |
| {{key:Backspace}} | Quitar la pieza o la unión seleccionada |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Deshacer y rehacer en la lista propia del ensamblaje |
| {{key:Mod+D}} | Duplicar la pieza seleccionada (la misma pieza, junto a las demás) |
| {{key:Mod+C}}, después {{key:Mod+V}} o {{key:Mod+Shift+V}} | Copiar una pieza y pegarla junto a las demás o en el mismo sitio |

Ratón en la vista: igual que en la vista 3D de arriba. Haga clic en una pieza para seleccionarla. Haga doble clic en una pieza de la lista para editarla.

## En el espacio de trabajo Script

| Tecla | Acción |
|---|---|
| {{key:F5}} | Ejecutar el script (en el editor, el panel o la vista) |
| {{key:Mod+Enter}} | Ejecutar las líneas seleccionadas, o la línea donde está el cursor |
| {{key:Tab}} / {{key:Shift+Tab}} | Aplicar o quitar sangría a las líneas seleccionadas. Para salir del editor con el teclado, pulse {{key:Esc}} y después {{key:Tab}} |
| {{key:Mod+/}} | Comentar las líneas seleccionadas, o volver a activarlas |
| {{key:Mod+F}} / {{key:Mod+H}} | Buscar / buscar y reemplazar en el script; {{key:Enter}} o {{key:F3}} pasan a la siguiente coincidencia, {{key:Shift+Enter}} o {{key:Shift+F3}} a la anterior, {{key:Esc}} cierra |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Plegar / desplegar el bloque donde está el cursor (una función, if, for, while … end) |
| {{key:Mod+Space}} | Mostrar sugerencias para el nombre que escribe (también aparecen tras dos letras); {{key:Up}} / {{key:Down}} eligen, {{key:Enter}} o {{key:Tab}} toman una, {{key:Esc}} cierra |
| {{key:Enter}} en la línea bajo la consola | Ejecutar esa sola sentencia; {{key:Up}} y {{key:Down}} recuperan las anteriores |
| {{key:F}} | Ajustar la vista a lo que muestran los scripts |

Véase [Escribir y ejecutar scripts](topic:craftscript).

## Atajos que puede usar el navegador

- {{key:Mod+Y}} en Safari puede abrir el historial: use {{key:Mod+Shift+Z}} para rehacer.
- {{key:Mod+D}} es la tecla de marcadores del navegador: PartCraft la usa mientras la aplicación tiene el foco, y la deja en paz mientras escribe en un cuadro.
- {{key:F11}} y {{key:Mod+Plus}} / {{key:Mod+Minus}} son la pantalla completa y el zoom de página del navegador, no de PartCraft. Use {{key:Ctrl+Shift+F}} para la pantalla completa y la rueda para el modelo.
- Las teclas de función en muchos portátiles y Mac necesitan la tecla Fn: pulse Fn+{{key:F1}} para la ayuda, o use el botón {{ui:Ayuda}}.

Gestos táctiles y del panel táctil: [Panel táctil, pantallas táctiles y pantallas pequeñas](topic:trackpad-and-touch).

## Dónde está Desplazamiento

{{ui:Desplazamiento}} está en el menú {{ui:Más}} del grupo Operaciones, como {{ui:Mover cuerpo}}; en el cuadro {{ui:Desplazamiento}}, donde escribe ΔX, ΔY y ΔZ; y como flechas {{ui:Arrastrar para desplazar}} sobre la pieza.
