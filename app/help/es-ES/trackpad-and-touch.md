---
title: Panel táctil, pantalla táctil y pantallas pequeñas
summary: Cómo girar, desplazar y hacer zoom con el panel táctil de un Mac o portátil, qué funciona en una pantalla táctil y qué todavía necesita teclado, y cómo se reorganiza la pantalla en un teléfono o una ventana estrecha.
keywords: panel táctil, touchpad, magic mouse, mac, táctil, tableta, ipad, teléfono, pellizcar, dos dedos, clic derecho, clic secundario, gestos, pantalla pequeña, móvil
from: 0e764fd8
---

PartCraft está pensado para un ratón con rueda y botón central, pero un panel táctil funciona bien cuando conoce los gestos, y una pantalla táctil sirve para ver piezas y hacer bocetos sencillos.

## Panel táctil

:::mac
| Para | Haga esto |
|---|---|
| Girar la pieza (3D) | Clic y arrastre con un dedo (o arrastre con tres dedos, si activó el arrastre con tres dedos) |
| Desplazar (3D) | Mantenga pulsado {{key:Shift}} (o ⌘) y haga clic y arrastre, o haga clic y arrastre con dos dedos apoyados (un arrastre con clic secundario) |
| Girar la pieza deslizando | Deslice con dos dedos; con {{key:Shift}}, el deslizamiento desplaza. Necesita **Desplazamiento** en "Detección automática" (el inicial) o "Panel táctil" |
| Zoom (3D y boceto) | Pellizque. El zoom va hacia el puntero. Con **Desplazamiento** en "Rueda del ratón", un desplazamiento con dos dedos también hace zoom |
| Clic derecho | Haga clic con dos dedos, o {{key:Ctrl}}+clic |
| Desplazar en un boceto | Deslice con dos dedos ("Detección automática" o "Panel táctil"), o haga clic y arrastre con dos dedos apoyados. {{key:Shift}}+arrastre no desplaza en un boceto (dibuja una ventana de selección) |
| Añadir a una selección en un boceto | {{key:Shift}}+clic o ⌘+clic |

Active el clic secundario en **System Settings, Trackpad, Point & Click** si el clic con dos dedos no hace nada.
:::

:::windows linux
| Para | Haga esto |
|---|---|
| Girar la pieza (3D) | Pulse el panel táctil (o toque y mantenga) y arrastre |
| Desplazar (3D) | Mantenga pulsado {{key:Shift}} o {{key:Ctrl}} y arrastre, o arrastre con el área del botón derecho pulsada |
| Girar la pieza deslizando | Deslice con dos dedos; con {{key:Shift}}, el deslizamiento desplaza. Necesita **Desplazamiento** en "Detección automática" (el inicial) o "Panel táctil" |
| Zoom (3D y boceto) | Pellizque donde el panel lo admita. El zoom va hacia el puntero. Con **Desplazamiento** en "Rueda del ratón", un desplazamiento con dos dedos hace zoom |
| Clic derecho | Toque con dos dedos, o use la esquina inferior derecha del panel táctil |
| Desplazar en un boceto | Deslice con dos dedos ("Detección automática" o "Panel táctil"), o arrastre con el área del botón derecho pulsada. {{key:Shift}}+arrastre no desplaza en un boceto |
| Añadir a una selección en un boceto | {{key:Shift}}+clic o {{key:Ctrl}}+clic |
:::

**Desplazamiento** está en [Configuración de PartCraft](topic:settings): "Detección automática" (el inicial) trata el desplazamiento lateral o de precisión como un panel táctil, "Panel táctil" siempre lo hace, y "Rueda del ratón" nunca. Un pellizco hace zoom en las tres.

Las teclas de flecha giran la vista 3D, y {{key:Shift}} con las flechas desplaza, una vez que haya hecho clic en la vista: útil con un panel táctil. {{key:Plus}} y {{key:Minus}} hacen zoom.

## Pantallas táctiles

PartCraft recibe la entrada táctil, así que tabletas, portátiles táctiles y teléfonos funcionan, con limitaciones.

:::touch
**Teclas táctiles**

Cuando toca la pantalla, aparece una pequeña barra en la parte inferior derecha de la vista con las teclas que le faltan a un dedo. Desaparece cuando usa un ratón.

- {{ui:Esc}}: la tecla Esc. Cancela lo que empezó o retrocede, exactamente como lo hace la tecla.
- {{ui:Añadir}} (en un boceto, con Seleccionar): mientras está activa, cada toque añade un elemento a la selección o lo quita, como {{key:Shift}}+clic. Púlselo de nuevo para volver a un elemento cada vez.
- {{ui:Listo}} (mientras dibuja una cadena de líneas, una spline o un polígono): la termina, como un clic derecho.

Mantener el dedo quieto durante medio segundo aproximadamente hace lo mismo con un toque: con una herramienta de dibujo termina lo que dibuja, y con Seleccionar añade a la selección el elemento bajo el dedo o lo quita. Los puntos y las líneas son más fáciles de tocar con el dedo: PartCraft busca alrededor de un toque unas dos veces más lejos que alrededor de un clic.

**En la vista 3D**

- Un dedo: girar la pieza.
- Dos dedos: pellizcar para hacer zoom, juntarlos para desplazar.
- Toque: elegir una cara, una arista o un plano. No hay resaltado al pasar antes de tocar.

**En un boceto**

- Toque con una herramienta de dibujo para colocar cada punto: toque el inicio y después el final. El ajuste se produce donde levanta el dedo.
- Dos dedos pellizcan y desplazan. Apoyar un segundo dedo cancela un arrastre que empezó el primero.
- Para terminar una cadena de líneas, toque {{ui:Listo}}, mantenga el dedo quieto, o toque {{ui:Línea}} de nuevo (u otra herramienta) en la barra de herramientas.
- Con Seleccionar, toque para seleccionar; arrastre un punto o una línea para moverlo; arrastre sobre espacio vacío para una ventana. Un segundo toque reemplaza la selección, salvo que {{ui:Añadir}} esté activo (o que mantenga el dedo quieto sobre el segundo elemento).
- Para cambiar una cota, use **Editar** junto a ella en el panel derecho.

**La hoja de planos**

Toque para colocar y seleccionar símbolos, y arrastre un símbolo para moverlo. Pellizque para hacer zoom, mueva dos dedos para desplazar, o arrastre un dedo sobre papel vacío. Un segundo dedo detiene un símbolo que estaba arrastrando, y vuelve a su sitio.

**Lo que todavía necesita teclado**

- Escribir números: el teclado de pantalla aparece en los cuadros numéricos y los campos de cota.
- Atajos de teclado para herramientas: use la barra de herramientas.
:::

## Pantallas pequeñas y teléfonos

- A partir de 1280 píxeles, la barra de herramientas cabe en una sola fila.
- Entre unos 760 y 1100 píxeles, los paneles laterales se estrechan.
- Por debajo de unos 760 píxeles (un teléfono, o una ventana estrecha), la pantalla se apila: barra de herramientas (deslícela lateralmente para ver más botones), la vista 3D, la barra de estado, y después el panel de propiedades y el historial. Desplace la página para llegar a los paneles.
- Los menús ({{ui:Exportar}}, {{ui:Vistas}}) se abren a todo el ancho de la pantalla.

:::note
En iPhone el navegador no tiene modo de pantalla completa; {{key:Ctrl+Shift+F}} y el botón de modo de pantalla solo alternan entre el modo normal y el de barras ocultas.
:::

Un teléfono sirve para abrir una pieza, girarla y comprobar sus datos. El modelado real necesita una pantalla más grande y un ratón o un panel táctil.

## Navegadores

Los navegadores actuales Chrome, Edge, Firefox y Safari ejecutan PartCraft en Windows, macOS y Linux, y en tabletas y teléfonos, siempre que estén disponibles WebGL y WebAssembly. Vea [Navegadores y ordenadores](common:browsers).
