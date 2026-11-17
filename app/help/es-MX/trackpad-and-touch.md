---
title: Trackpad, pantalla táctil y pantallas pequeñas
summary: Cómo girar, desplazar y hacer zoom con un trackpad de Mac o laptop, qué funciona en una pantalla táctil y qué todavía necesita un teclado, y cómo se reacomoda la pantalla en un teléfono o una ventana angosta.
keywords: trackpad, panel táctil, magic mouse, mac, táctil, tableta, ipad, teléfono, pellizcar, dos dedos, clic derecho, clic secundario, gestos, pantalla pequeña, móvil
from: 0e764fd8
---

PartCraft está hecho para un ratón con rueda y botón central, pero un trackpad funciona bien cuando conoce los gestos, y una pantalla táctil sirve para ver piezas y hacer croquis sencillos.

## Trackpad

:::mac
| Para | Haga esto |
|---|---|
| Girar la pieza (3D) | Haga clic y arrastre con un dedo (o arrastre con tres dedos, si activó el arrastre con tres dedos) |
| Desplazar (3D) | Mantenga {{key:Shift}} (o ⌘) y haga clic y arrastre, o haga clic y arrastre con dos dedos presionados (un arrastre con clic secundario) |
| Girar la pieza, deslizando | Deslice con dos dedos; con {{key:Shift}}, el deslizamiento desplaza. Necesita **Desplazamiento** en "Detección automática" (el inicio) o "Trackpad" |
| Zoom (3D y croquis) | Pellizque. El zoom va hacia el puntero. Con **Desplazamiento** en "Rueda del ratón", un desplazamiento con dos dedos también hace zoom |
| Clic derecho | Haga clic con dos dedos, o {{key:Ctrl}}+clic |
| Desplazar en un croquis | Deslice con dos dedos ("Detección automática" o "Trackpad"), o haga clic y arrastre con dos dedos presionados. {{key:Shift}}+arrastre no desplaza en un croquis (dibuja una ventana de selección) |
| Agregar a una selección en un croquis | {{key:Shift}}+clic o ⌘+clic |

Active el clic secundario en **Ajustes del Sistema, Trackpad, Apuntar y hacer clic** si el clic con dos dedos no hace nada.
:::

:::windows linux
| Para | Haga esto |
|---|---|
| Girar la pieza (3D) | Presione el panel táctil (o toque y mantenga) y arrastre |
| Desplazar (3D) | Mantenga {{key:Shift}} o {{key:Ctrl}} y arrastre, o arrastre con el área del botón derecho presionada |
| Girar la pieza, deslizando | Deslice con dos dedos; con {{key:Shift}}, el deslizamiento desplaza. Necesita **Desplazamiento** en "Detección automática" (el inicio) o "Trackpad" |
| Zoom (3D y croquis) | Pellizque donde el panel táctil lo admita. El zoom va hacia el puntero. Con **Desplazamiento** en "Rueda del ratón", un desplazamiento con dos dedos hace zoom |
| Clic derecho | Toque con dos dedos, o use la esquina inferior derecha del panel táctil |
| Desplazar en un croquis | Deslice con dos dedos ("Detección automática" o "Trackpad"), o arrastre con el área del botón derecho presionada. {{key:Shift}}+arrastre no desplaza en un croquis |
| Agregar a una selección en un croquis | {{key:Shift}}+clic o {{key:Ctrl}}+clic |
:::

**Desplazamiento** está en [Configuración de PartCraft](topic:settings): "Detección automática" (el inicio) trata el desplazamiento lateral o de grano fino como trackpad, "Trackpad" siempre lo hace, "Rueda del ratón" nunca. Un pellizco hace zoom en las tres.

Las teclas de flecha giran la vista 3D, y {{key:Shift}} con las flechas desplaza, una vez que haya hecho clic en la vista: útil en un trackpad. {{key:Plus}} y {{key:Minus}} hacen zoom.

## Pantallas táctiles

PartCraft lee la entrada táctil, así que tabletas, laptops táctiles y teléfonos funcionan, con límites.

:::touch
**Teclas táctiles**

En cuanto toca la pantalla, aparece una pequeña barra en la esquina inferior derecha de la vista con las teclas que un dedo no tiene. Desaparece cuando usa un ratón.

- {{ui:Esc}}: la tecla Esc. Cancela lo que empezó o retrocede, exactamente como la tecla.
- {{ui:Agregar}} (en un croquis, con Seleccionar): mientras está activa, cada toque agrega un elemento a la selección o lo quita, como {{key:Shift}}+clic. Tóquela de nuevo para volver a un elemento a la vez.
- {{ui:Listo}} (mientras dibuja una cadena de líneas, una spline o un polígono): la termina, como un clic derecho.

Mantener el dedo quieto medio segundo aproximadamente hace lo mismo que un toque: con una herramienta de dibujo termina lo que dibuja, y con Seleccionar agrega a la selección el elemento bajo su dedo, o lo quita. Los puntos y las líneas son más fáciles de tocar con un dedo: PartCraft busca alrededor de un toque unas dos veces más lejos que alrededor de un clic.

**En la vista 3D**

- Un dedo: girar la pieza.
- Dos dedos: pellizcar para hacer zoom, juntarlos para desplazar.
- Toque: elija una cara, una arista o un plano. No hay resaltado al pasar antes de tocar.

**En un croquis**

- Toque con una herramienta de dibujo para colocar cada punto: toque el inicio, luego el final. El enganche ocurre donde levanta el dedo.
- Dos dedos pellizcan y desplazan. Poner un segundo dedo cancela un arrastre que empezó el primero.
- Para terminar una cadena de líneas, toque {{ui:Listo}}, mantenga el dedo quieto, o toque {{ui:Línea}} de nuevo (u otra herramienta) en la barra de herramientas.
- Con Seleccionar, toque para seleccionar; arrastre un punto o una línea para moverlo; arrastre en un espacio vacío para una ventana. Un segundo toque reemplaza la selección, a menos que {{ui:Agregar}} esté activo (o mantenga el dedo quieto en el segundo elemento).
- Para cambiar una cota, use **Editar** junto a ella en el panel derecho.

**La hoja de dibujo**

Toque para colocar y seleccionar símbolos, y arrastre un símbolo para moverlo. Pellizque para hacer zoom, mueva dos dedos para desplazar, o arrastre un dedo sobre el papel vacío. Un segundo dedo detiene un símbolo que estaba arrastrando, y este regresa.

**Lo que aún necesita un teclado**

- Escribir números: el teclado de pantalla aparece en los cuadros numéricos y en los campos de cota.
- Atajos de teclado para herramientas: use la barra de herramientas.
:::

## Pantallas pequeñas y teléfonos

- Desde 1280 píxeles o más, la barra de herramientas cabe en una sola fila.
- Entre unos 760 y 1100 píxeles, los paneles laterales se angostan.
- Por debajo de unos 760 píxeles (un teléfono, o una ventana angosta), la pantalla se apila: barra de herramientas (deslícela de lado para ver más botones), la vista 3D, la barra de estado, luego el panel de propiedades y el historial. Desplace la página para llegar a los paneles.
- Los menús ({{ui:Exportar}}, {{ui:Vistas}}) se abren a lo ancho de la pantalla.

:::note
En iPhone no hay modo de pantalla completa en el navegador; {{key:Ctrl+Shift+F}} y el botón de modo de pantalla solo cambian entre normal y con las barras ocultas.
:::

Un teléfono sirve para abrir una pieza, girarla y revisar sus datos. Modelar en serio necesita una pantalla más grande y un ratón o trackpad.

## Navegadores

Chrome, Edge, Firefox y Safari actuales ejecutan PartCraft en Windows, macOS y Linux, y en tabletas y teléfonos, siempre que WebGL y WebAssembly estén disponibles. Vea [Navegadores y computadoras](common:browsers).
