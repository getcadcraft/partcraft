---
title: Primeros pasos con PartCraft
summary: Qué hace PartCraft hoy, qué necesita su navegador y una primera pieza en diez minutos, del croquis al archivo guardado.
keywords: inicio, primer uso, inicio rápido, introducción, tutorial, primera pieza, placa, paramétrico, modelador de piezas
from: 5f0a668d
---

PartCraft es la aplicación de piezas y ensamblajes paramétricos de la familia CadCraft. Usted dibuja un croquis 2D, lo fija con relaciones y cotas, lo convierte en un sólido con operaciones como extrusión, revolución y taladro, y puede cambiar cualquier número más adelante: la pieza se reconstruye a partir de su historial. Después las piezas pasan a ensamblajes, donde las uniones las colocan y le permiten comprobar el movimiento.

Qué hace esta versión:

| Tarea | Qué obtiene |
|---|---|
| Croquis | Líneas, rectángulos, círculos, arcos, puntos y líneas constructivas, con relaciones y cotas, y un estado en vivo: insuficiente, completa o excesivamente definido |
| Operaciones de sólido | Extrusión, corte, revolución, corte de revolución, taladros simples y avellanados, matrices lineales y circulares, simetría, redondeos y chaflanes en aristas rectas entre caras planas, y vaciados y desmoldeos en caras planas. Los barridos, las transiciones y las demás operaciones que necesitan un kernel exacto todavía no están construidos en esta versión: consulte [Lo que aún no está construido](topic:not-built-yet) |
| Historial | Edite los números de cualquier operación, suprima, retroceda, reordene y elimine, con deshacer |
| Ensamblajes | Piezas unidas con uniones rígidas, de revolución y deslizantes, una comprobación de interferencias y una comprobación de movimiento |
| Planos | Una hoja A3 con tres vistas, una isométrica, una sección, una vista de detalle, dimensiones generales, referencias, marcos de control de operaciones y símbolos de acabado superficial, exportada como PDF |
| Archivos | Sus propios archivos de pieza y de ensamblaje; salida a STL, 3MF, STEP facetado, DXF y PDF |

Todo se ejecuta en su navegador, en su ordenador. **No se sube nada.** Consulte [Archivos: abrir, guardar y exportar](topic:files) para saber adónde van los archivos.

## Lo que necesita

- Una versión actual de Chrome, Edge, Firefox o Safari con **WebGL** (gráficos 3D) y **WebAssembly** activados. Ambos vienen activados de forma predeterminada. La geometría sólida la construye un kernel de malla WebAssembly que se carga con la aplicación: consulte [El kernel de malla](topic:solid-kernels).
- Lo más cómodo es un ratón. Un trackpad funciona, y las pantallas táctiles sirven para ver y para croquizar de forma sencilla: consulte [Trackpad, tacto y pantallas pequeñas](topic:trackpad-and-touch).
- Una pantalla de al menos 1280 píxeles de ancho muestra toda la barra de herramientas en una sola fila. Las ventanas más estrechas desplazan la barra de herramientas hacia los lados; en un móvil los paneles se abren como hojas desde una barra inferior.

Más sobre navegadores: [Navegadores y ordenadores](common:browsers).

:::note
PartCraft se ejecuta en el navegador y, en el escritorio, dentro de CadCraft Studio. Todavía no se puede guardar en la nube: usted abre las piezas desde su ordenador y las guarda de vuelta en él como archivos.
:::

## Abra PartCraft

1. Abra PartCraft.
2. Espere mientras la pantalla dice "Cargando el núcleo de sólidos…". La primera vez tarda un momento.
3. Verá una vista 3D vacía con tres planos base, el historial a la izquierda ("Part1", luego Plano frontal, Plano superior, Plano derecho) y un cuadro en la vista titulado "Empezar una pieza".
4. El indicador cercano al extremo derecho de la barra de estado dice "Kernel de malla": en esta versión PartCraft construye todas las piezas con el kernel de malla, de modo que las caras redondas son facetas planas. Puede empezar a modelar de inmediato.

Si la vista dice que el navegador no puede mostrar 3D, o que el kernel no se cargó, consulte [Solución de problemas](topic:troubleshooting#the-app-does-not-start).

## Su primera pieza: una placa con un taladro

Va a hacer una placa de 60 × 40 mm y 10 mm de grosor, con un taladro pasante de 6 mm. Las unidades son milímetros.

### Croquice el contorno

1. Pulse **Plano frontal** en el historial de la izquierda. El plano se resalta en la vista.
2. Elija {{ui:Croquis}} en la barra de herramientas, o pulse {{key:S}}. La vista gira para mirar el plano de frente y la herramienta Línea queda activa.
3. Pulse {{key:R}} para la herramienta Rectángulo.
4. Lleve el puntero al origen (el pequeño círculo rojo con una cruz). Un pequeño cuadrado indica que se produce la captura. Pulse.
5. Muévase hacia arriba y a la derecha y pulse de nuevo. Ya tiene un rectángulo. Sus líneas son azules: azul significa que todavía pueden moverse.

### Dele tamaño

1. Pulse {{key:D}} para la herramienta Cota.
2. Pulse la línea superior y luego un poco por encima de ella. Se abre un cuadro numérico con la longitud actual.
3. Escriba `60` y pulse {{key:Enter}}. El rectángulo pasa a medir 60 mm de ancho.
4. Pulse la línea izquierda y luego un poco a su izquierda. Escriba `40` y pulse {{key:Enter}}.

El indicador de la parte superior izquierda de la vista dice ahora **Completamente definido** y las líneas pasan a tinta (negro en el tema Papel, claro en el tema Modelo). Cada punto y cada tamaño están fijos.

:::tip
Si empezó el rectángulo lejos del origen, el indicador sigue diciendo "Insuficientemente definido · 2 grados de libertad". Pulse {{key:S}} para Seleccionar, pulse una esquina, pulse con {{key:Shift}} el origen y elija {{ui:• Coincidente}} en el panel derecho.
:::

### Extruya

1. Elija {{ui:Salir}} en la barra de herramientas, o pulse {{key:Esc}} hasta que se cierre el croquis (normalmente dos veces).
2. Elija {{ui:Extruir}}. Aparece un sólido de 10 mm. "Extrude1" se añade al historial, con "Sketch1" sangrado debajo.
3. El panel derecho muestra los ajustes de la extrusión. Para cambiar el grosor, escriba un número nuevo en **Profundidad (mm)** y pulse {{key:Enter}} o {{key:Tab}}. La pieza se reconstruye al instante.

### Añada el taladro

1. Pulse la cara plana grande de la parte frontal de la placa (el extremo de la extrusión). Toda la cara se resalta y el panel derecho dice **Cara**.
2. Elija {{ui:Croquis en esta cara}} en el panel derecho.
3. Pulse {{key:P}} para la herramienta Punto y pulse cerca del centro de la cara.
4. Elija {{ui:Salir}}.
5. Elija {{ui:Taladro}}. Un taladro de 6 mm atraviesa la placa. Cambie **Diámetro (mm)** en el panel derecho si lo desea.

El cuadro **Pieza** de la parte inferior izquierda muestra ahora un volumen, un área de superficie, el tamaño (60 × 40 × 10 mm) y "Taladros pasantes: 1".

### Guárdela

1. Pulse {{key:Mod+S}} o elija {{ui:Guardar}}.
2. Su navegador descarga `Part1.partcraft.json` en su carpeta de descargas. El archivo contiene todo el historial: vuelva a abrirlo con {{ui:Abrir}} para seguir editando.

Para cambiar antes el nombre de la pieza, pulse en un espacio vacío de la vista para que no haya nada seleccionado y escriba un **Nombre** nuevo en el panel derecho.

## Adónde ir después

- [Dibuje su primer croquis](topic:sketch-basics) y [Defina un croquis por completo](topic:relations-dimensions) explican el croquizador con detalle.
- [Cambie una pieza mediante su historial](topic:edit-history) muestra cómo editar lo que ha construido.
- [Redondee, bisele y vacíe](topic:fillet-chamfer-shell) y [Haga un plano](topic:drawing-pdf) terminan la pieza. [Lo que aún no está construido](topic:not-built-yet) enumera lo que esta versión no hace, como barridos y transiciones.
- [Si viene de otro modelador paramétrico](topic:coming-from) enumera los hábitos que aquí funcionan de otra manera.
- [Teclas y ratón](topic:keyboard) es la lista completa de atajos.
- [Cómo usar esta ayuda](common:help).
