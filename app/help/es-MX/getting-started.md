---
title: Primeros pasos con PartCraft
summary: Qué hace PartCraft hoy, qué necesita su navegador y una primera pieza en diez minutos, del croquis al archivo guardado.
keywords: inicio, primer uso, inicio rápido, introducción, tutorial, primera pieza, placa, paramétrico, modelador de piezas
from: 5f0a668d
---

PartCraft es la aplicación de piezas y ensamblajes paramétricos de la familia CadCraft. Usted dibuja un croquis 2D, lo fija con relaciones y cotas, lo convierte en un sólido con operaciones como extruir, revolución y taladro, y después puede cambiar cualquier número: la pieza se reconstruye a partir de su historial. Las piezas pasan a ensamblajes, donde las uniones las colocan y permiten revisar el movimiento.

Lo que hace esta versión:

| Tarea | Qué obtiene |
|---|---|
| Croquis | Líneas, rectángulos, círculos, arcos, puntos y líneas constructivas, con relaciones y cotas, y un estado en vivo: insuficiente, completamente o excesivamente definido |
| Operaciones de sólido | Extruir, cortar, revolución, corte de revolución, taladros simples y avellanados, matrices lineales y circulares, simetría, redondeos y chaflanes en aristas rectas entre caras planas, y vaciados y ángulos de salida en caras planas. Los barridos, las solevaciones y las demás operaciones que necesitan un kernel exacto aún no están construidos en esta versión: vea [Lo que aún no está construido](topic:not-built-yet) |
| Historial | Edite los números de cualquier operación, suprima, retroceda, reordene y elimine, con deshacer |
| Ensamblajes | Piezas unidas con uniones rígidas, de revolución y deslizantes, una revisión de interferencias y una revisión de movimiento |
| Planos | Una hoja A3 con tres vistas, una isométrica, una sección, una vista de detalle, medidas generales, referencias, marcos de control de características y símbolos de acabado superficial, exportada como PDF |
| Archivos | Sus propios archivos de pieza y de ensamblaje; salida a STL, 3MF, STEP facetado, DXF y PDF |

Todo se ejecuta en su navegador, en su computadora. **No se sube nada.** Vea [Archivos: abrir, guardar y exportar](topic:files) para saber adónde van los archivos.

## Lo que necesita

- Chrome, Edge, Firefox o Safari actual, con **WebGL** (gráficos 3D) y **WebAssembly** activados. Ambos vienen activados de forma predeterminada. La geometría sólida la construye un kernel de malla en WebAssembly que se carga con la aplicación: vea [El kernel de malla](topic:solid-kernels).
- Un mouse es lo más cómodo. Un trackpad funciona, y las pantallas táctiles sirven para ver y hacer croquis sencillos: vea [Trackpad, pantalla táctil y pantallas pequeñas](topic:trackpad-and-touch).
- Una pantalla de al menos 1280 píxeles de ancho muestra toda la barra de herramientas en una sola fila. Las ventanas más angostas desplazan la barra hacia los lados; en un teléfono los paneles se abren como hojas desde una barra en la parte inferior.

Más sobre navegadores: [Navegadores y computadoras](common:browsers).

:::note
PartCraft se ejecuta en el navegador y, en el escritorio, dentro de CadCraft Studio. El guardado en la nube aún no está disponible: usted abre piezas desde su computadora y las guarda de vuelta en ella como archivos.
:::

## Abra PartCraft

1. Abra PartCraft.
2. Espere mientras la pantalla dice "Cargando el núcleo de sólidos…". La primera vez tarda un momento.
3. Verá una vista 3D vacía con tres planos base, el historial a la izquierda ("Pieza1", luego Plano frontal, Plano superior, Plano derecho) y un cuadro en la vista titulado "Comenzar una pieza".
4. El indicador cercano al extremo derecho de la barra de estado dice "Kernel de malla": en esta versión PartCraft construye toda pieza con el kernel de malla, así que las caras redondas son facetas planas. Puede empezar a modelar de inmediato.

Si la vista dice que el navegador no puede mostrar 3D, o que el kernel no se cargó, vea [Solución de problemas](topic:troubleshooting#the-app-does-not-start).

## Su primera pieza: una placa con un taladro

Hará una placa de 60 × 40 mm, de 10 mm de grosor, con un taladro de 6 mm que la atraviesa. Las unidades son milímetros.

### Dibuje el contorno

1. Haga clic en **Plano frontal** en el historial de la izquierda. El plano se resalta en la vista.
2. Elija {{ui:Croquis}} en la barra de herramientas, o pulse {{key:S}}. La vista gira para mirar de frente el plano, y la herramienta Línea queda activa.
3. Pulse {{key:R}} para la herramienta Rectángulo.
4. Lleve el puntero al origen (el círculo rojo pequeño con una cruz). Un cuadro pequeño indica que se ajusta. Haga clic.
5. Muévase hacia arriba y a la derecha y haga clic otra vez. Ya tiene un rectángulo. Sus líneas son azules: azul significa que todavía pueden moverse.

### Póngale medidas

1. Pulse {{key:D}} para la herramienta Cota.
2. Haga clic en la línea superior y luego un poco por encima de ella. Se abre un cuadro numérico con la longitud actual.
3. Escriba `60` y pulse {{key:Enter}}. El rectángulo cambia a 60 mm de ancho.
4. Haga clic en la línea izquierda y luego un poco a la izquierda de ella. Escriba `40` y pulse {{key:Enter}}.

El indicador de la esquina superior izquierda de la vista ahora dice **Completamente definido** y las líneas se vuelven de tinta (negras en el tema Papel, claras en el tema Modelo). Cada punto y cada medida están fijos.

:::tip
Si empezó el rectángulo lejos del origen, el indicador sigue diciendo "Insuficientemente definido · 2 grados de libertad". Pulse {{key:S}} para Seleccionar, haga clic en una esquina, {{key:Shift}}+clic en el origen y elija {{ui:• Coincidente}} en el panel derecho.
:::

### Extrúyalo

1. Elija {{ui:Salir}} en la barra de herramientas, o pulse {{key:Esc}} hasta que se cierre el croquis (normalmente dos veces).
2. Elija {{ui:Extruir}}. Aparece un sólido de 10 mm. "Extruir1" se agrega al historial, con "Croquis1" con sangría debajo.
3. El panel derecho muestra los ajustes de la extrusión. Para cambiar el grosor, escriba un número nuevo en **Profundidad (mm)** y pulse {{key:Enter}} o {{key:Tab}}. La pieza se reconstruye al instante.

### Agregue el taladro

1. Haga clic en la cara plana grande del frente de la placa (el extremo de la extrusión). Toda la cara se resalta y el panel derecho dice **Cara**.
2. Elija {{ui:Croquis en esta cara}} en el panel derecho.
3. Pulse {{key:P}} para la herramienta Punto y haga clic cerca del centro de la cara.
4. Elija {{ui:Salir}}.
5. Elija {{ui:Taladro}}. Un taladro de 6 mm atraviesa la placa. Cambie **Diámetro (mm)** en el panel derecho si lo desea.

El cuadro **Pieza** de la parte inferior izquierda ahora muestra un volumen, un área de superficie, el tamaño (60 × 40 × 10 mm) y "Taladros pasantes: 1".

### Guárdela

1. Pulse {{key:Mod+S}} o elija {{ui:Guardar}}.
2. Su navegador descarga `Pieza1.partcraft.json` en su carpeta de descargas. El archivo contiene todo el historial: vuelva a abrirlo con {{ui:Abrir}} para seguir editando.

Para cambiar primero el nombre de la pieza, haga clic en un espacio vacío de la vista para que no haya nada seleccionado y escriba un **Nombre** nuevo en el panel derecho.

## Adónde ir después

- [Dibuje su primer croquis](topic:sketch-basics) y [Defina por completo un croquis](topic:relations-dimensions) explican el croquizador con detalle.
- [Cambie una pieza mediante su historial](topic:edit-history) muestra cómo editar lo que construyó.
- [Redondear, biselar y vaciar](topic:fillet-chamfer-shell) y [Cree un plano](topic:drawing-pdf) terminan la pieza. [Lo que aún no está construido](topic:not-built-yet) enumera lo que esta versión no hace, como barridos y solevaciones.
- [Si viene de otro modelador paramétrico](topic:coming-from) enumera los hábitos que aquí funcionan distinto.
- [Teclas y mouse](topic:keyboard) es la lista completa de atajos.
- [Cómo usar esta ayuda](common:help).
