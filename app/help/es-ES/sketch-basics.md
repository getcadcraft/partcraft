---
title: Dibujar su primer croquis
summary: Abra un croquis en un plano o en una cara plana, dibuje líneas, rectángulos, círculos, arcos, puntos y líneas constructivas, redondee una esquina, seleccione, arrastre y elimine.
keywords: croquis, dibujar, línea, rectángulo, círculo, arco, punto, línea constructiva, construcción, redondeo, redondeo de croquis, redondear esquina, ajuste a objetos, seleccionar, ventana, arrastrar, perfil
from: 28be7436
---

Todo sólido empieza como un croquis: un dibujo plano sobre un plano. Esta guía cubre las herramientas de dibujo. Para fijar el croquis con relaciones y cotas, consulte [Definir por completo un croquis](topic:relations-dimensions).

## Iniciar un croquis

Puede crear un croquis sobre un plano base o sobre cualquier cara plana de la pieza.

1. Elija dónde crear el croquis:
   - un plano base: haga clic en **Plano alzado**, **Plano superior** o **Plano derecho** en el historial, o haga clic en el plano en la vista;
   - una cara plana: haga clic en la cara en la vista. Toda la cara se resalta.
2. Elija {{ui:Croquis}} en la barra de herramientas o pulse {{key:S}}. (Con una cara seleccionada también puede elegir {{ui:Croquis en esta cara}} en el panel derecho; con un plano, {{ui:Croquis en él}}.)

La vista se coloca perpendicular al plano, aparecen las herramientas de croquis en la barra de herramientas y la herramienta {{ui:Línea}} queda lista. Si pulsa {{ui:Croquis}} sin nada seleccionado, se muestran los planos base y la barra de estado indica: "Haga clic en un plano o en una cara plana para crear un croquis. Esc lo detiene."

:::note
Una cara curva no puede contener un croquis: "Esa cara es curva. Seleccione una cara plana o un plano para crear el croquis."
:::

**Un croquis sobre una cara sigue a esa cara.** Si la cara se creó con una arista de un croquis o con el extremo de una extrusión, el nuevo croquis se mueve cuando cambia el elemento (una cajera más profunda lleva consigo el croquis de su fondo). Si el panel indica que la cara está "Fijada donde se seleccionó", el croquis se queda donde está la cara ahora.

## Las herramientas de dibujo

Cada herramienta tiene un botón en la barra de herramientas y una tecla. Vuelva a elegir el mismo botón, pulse {{key:S}} o pulse {{key:Esc}} para volver a Seleccionar.

| Herramienta | Tecla | Cómo dibujar |
|---|---|---|
| {{ui:Línea}} | {{key:L}} | Haga clic en el inicio y luego en cada punto siguiente. Las líneas se encadenan extremo con extremo. Termine la cadena con {{key:Esc}}, {{key:Enter}}, un clic derecho o un doble clic. Hacer clic en un punto existente también la termina |
| {{ui:Rectángulo}} | {{key:R}} | Haga clic en una esquina y luego en la esquina opuesta. Obtiene cuatro líneas unidas en las esquinas, dos horizontales y dos verticales |
| {{ui:Círculo}} | {{key:C}} | Haga clic en el centro y luego en un punto de la circunferencia |
| {{ui:Arco}} | {{key:A}} | Haga clic en el centro, luego en el inicio y después en el final. El arco sigue el sentido en que mueve el puntero alrededor del centro |
| {{ui:Punto}} | {{key:P}} | Haga clic. Un punto aislado marca un centro de taladro para {{ui:Taladro}} |
| {{ui:Línea constructiva}} | {{key:N}} | Igual que una línea, un segmento cada vez. Se dibuja discontinua; es geometría de construcción, que se usa como eje de revolución o como referencia |
| {{ui:Redondeo}} | {{key:F}} | Haga clic en una esquina donde se unen dos líneas, escriba el radio y pulse {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Haga clic en los puntos por los que pasa la curva; {{key:Enter}} termina, y un clic en el primer punto la cierra. Consulte [Splines, recorte, desfase y otras herramientas de croquis](topic:sketch-tools) |
| {{ui:Recortar}} | {{key:T}} | Haga clic en el tramo de una curva que quiera quitar, hasta los cruces más cercanos |
| {{ui:Cota}} | {{key:D}} | Consulte [Definir por completo un croquis](topic:relations-dimensions) |

Mientras dibuja, un pequeño recuadro junto al puntero muestra la longitud, el tamaño, el diámetro o el radio.

### Escriba el tamaño al dibujar

Tras el primer clic de una línea, rectángulo, círculo o arco, puede escribir el tamaño en lugar de hacer clic. Al escribir un número se abre el recuadro junto al puntero con ese número:

| Herramienta | Recuadros ({{key:Tab}} pasa al siguiente) | Qué ocurre al pulsar {{key:Enter}} |
|---|---|---|
| {{ui:Línea}}, {{ui:Línea constructiva}} | Longitud, y después Ángulo (°) respecto al eje X del croquis | La línea se dibuja con esa longitud, hacia el puntero o con el ángulo escrito; la cadena continúa desde su extremo |
| {{ui:Rectángulo}} | Anchura, y después Altura | El rectángulo se dibuja desde la primera esquina hacia el puntero; un tamaño que no escribió se toma del puntero |
| {{ui:Círculo}} | Diámetro | El círculo se dibuja con ese diámetro |
| {{ui:Arco}} | Radio tras el centro, y después Ángulo del arco (°) tras el inicio | El inicio queda a esa distancia del centro; después el arco gira esa cantidad, en el sentido en que movió el puntero |

Cada tamaño que escribió se convierte en una **cota de control** en el mismo paso, de modo que el croquis sale acotado: {{key:Mod+Z}} quita la forma y sus cotas a la vez. Si hace clic en lugar de pulsar {{key:Enter}}, se conserva lo escrito y el resto se toma del clic. {{key:Esc}} cierra el recuadro y vuelve al puntero.

Desactive esto en {{ui:Configuración}} › {{ui:PartCraft}} › **Acotar al dibujar** si solo quiere dibujar con clics. Consulte [Configuración de PartCraft](topic:settings).

{{ui:Más}}, al final de las herramientas de croquis, contiene la spline por puntos de control, Alargar, Desfase, Simetría, Polígono, Ranura, las matrices de croquis y Proyectar arista: consulte [Splines, recorte, desfase y otras herramientas de croquis](topic:sketch-tools).

### Ajuste a objetos

El ajuste a objetos añade relaciones por usted, de modo que el croquis sigue unido al moverse:

- En un **extremo o en el origen**, aparece un pequeño cuadrado. El nuevo punto se hace coincidente con él.
- En una **línea, círculo o arco**, aparece una pequeña cruz. El nuevo punto se coloca sobre esa curva.
- Una línea a menos de 3 grados de la horizontal o la vertical se ajusta a ella y recibe una relación horizontal o vertical. La etiqueta muestra "H" o "V".

Para evitar un ajuste, amplíe la vista para hacer clic más lejos del punto o de la curva.

## Redondear una esquina

1. Pulse {{key:F}} o elija {{ui:Redondeo}}.
2. Haga clic en el punto de la esquina donde se unen dos líneas.
3. Se abre un recuadro con un radio sugerido. Escriba el radio y pulse {{key:Enter}}.

Ambas líneas se recortan y se unen con un arco tangente con una cota de radio. Mensajes que puede ver: "Un redondeo necesita una esquina donde se unan exactamente dos líneas." y "Ese radio es demasiado grande para estas líneas."

:::tip
Un redondeo de croquis redondea una esquina del perfil, de modo que la extrusión obtiene aristas verticales redondeadas. Para redondear aristas del propio sólido (por ejemplo, los bordes superiores de una placa), use el elemento {{ui:Redondeo}} de la pieza: consulte [Redondear, biselar y vaciar](topic:fillet-chamfer-shell). En un croquis, el Redondeo de la barra de herramientas es la herramienta de croquis; en la pieza, es el elemento.
:::

## Geometría de construcción

Las líneas, círculos y arcos de construcción son discontinuos y grises. Sirven de guía al croquis, pero no forman parte del perfil que se extruye o se revoluciona.

1. Seleccione las líneas, círculos o arcos.
2. Pulse {{key:Q}} o elija {{ui:Construcción}}. Púlselo de nuevo para volver a convertirlos.

## Seleccionar, arrastrar y eliminar

Pulse {{key:S}} (o {{key:Esc}} hasta que ninguna herramienta esté activa) para Seleccionar.

- Haga clic en un punto, línea, círculo, arco, símbolo de relación o cota para seleccionarlo. {{key:Shift}}+clic añade a la selección o la quita. En Windows y Linux, {{key:Ctrl}}+clic hace lo mismo; en un Mac, ⌘+clic.
- Arrastre sobre un espacio vacío para dibujar una ventana: se selecciona todo lo que queda completamente dentro.
- Arrastre un punto o una línea para moverlo. El solucionador mantiene todas las relaciones y cotas mientras se mueve, así que solo se mueve la geometría libre. Arrastre el borde de un círculo para cambiar su radio.
- Arrastre el número de una cota para mover la etiqueta.
- Pulse {{key:Delete}} o {{key:Backspace}}, o elija {{ui:Eliminar}} en el panel derecho, para eliminar la selección. Al eliminar geometría se eliminan las relaciones que dependen de ella.

## Zoom y desplazamiento en el croquis

- Gire la rueda para ampliar o reducir en el puntero.
- Arrastre con el botón central o el derecho para desplazar la vista.
- {{ui:Ajustar}} en la barra de herramientas o en el panel derecho ajusta el croquis a la vista. En un croquis, la tecla {{key:F}} es la herramienta Redondeo, no Ajustar.

## Cerrar el croquis

Elija {{ui:Salir}} en la barra de herramientas o {{ui:Salir del croquis}} en el panel derecho, o pulse {{key:Esc}} hasta que el croquis se cierre. Cada {{key:Esc}} cancela primero lo que está en curso, luego vuelve a Seleccionar y después borra la selección; el siguiente cierra el croquis.

El croquis queda seleccionado, así que la siguiente {{ui:Extruir}} o {{ui:Revolución}} lo usará.

## Qué hace un buen perfil

{{ui:Extruir}} y {{ui:Revolución}} usan **cada contorno cerrado** formado por las líneas, círculos, arcos y splines del croquis (que no sean de construcción). Los contornos dentro de otros contornos se convierten en agujeros.

- Cada extremo debe unirse exactamente a otro extremo. "El perfil está abierto: un extremo en (12.5, 40) no está unido a nada." indica el lugar.
- Ningún extremo puede coincidir con otros tres en un mismo punto: "El perfil se ramifica en (0, 20): más de dos extremos coinciden allí."
- Los puntos y la geometría de construcción se ignoran en el perfil.

Siguiente: [Definir por completo un croquis con relaciones y cotas](topic:relations-dimensions).

## Un croquis a partir de una foto

**Elementos › Más › Croquis a partir de una foto…** (o el grupo Croquis de la cinta del árbol de elementos) traza una imagen de una pieza plana sobre un fondo liso —su contorno y sus agujeros— o un dibujo a pluma, y lo convierte en un croquis de líneas, arcos y círculos. Indique una medida (la anchura, la altura o el lado más largo) para que el croquis tenga el tamaño correcto, revise lo que encontró en la vista previa y elija **Crear el croquis**; también puede extruirlo, en el mismo paso de deshacer. Se procesa en este equipo. Los radios de esquina salen con una precisión de unos 5 %, se pierden detalles de un píxel o dos, y una foto tomada inclinada o con sombras sobre la pieza no se endereza: fotografíe la pieza de frente, con luz uniforme.
