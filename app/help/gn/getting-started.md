---
title: Primeros pasos con PartCraft
summary: Qué hace PartCraft hoy, qué necesita tu navegador y una primera pieza en diez minutos, del boceto al archivo guardado.
keywords: inicio, primera vez, inicio rápido, introducción, tutorial, primera pieza, placa, paramétrico, modelador de piezas
from: 5f0a668d
---

PartCraft es la app paramétrica de piezas y conjuntos de la familia CadCraft. Dibujás un boceto 2D, lo fijás con relaciones y cotas, lo convertís en sólido con elementos como extruir, revolucionar y agujero, y podés cambiar cualquier número después: la pieza se reconstruye desde su historial. Las piezas luego van a conjuntos, donde las uniones las colocan y permiten revisar el movimiento.

Lo que hace esta versión:

| Tarea | Lo que obtenés |
|---|---|
| Bocetos | Líneas, rectángulos, círculos, arcos, puntos y líneas de eje, con relaciones y cotas, y un estado en vivo: subdefinido, totalmente definido o sobredefinido |
| Elementos sólidos | Extruir, cortar, revolucionar, corte por revolución, agujeros simples y avellanados, patrones lineales y circulares, espejo, redondeos y chaflanes en bordes rectos entre caras planas, y cáscaras e inclinaciones en caras planas. Barrido, Loft y los demás elementos que necesitan un núcleo exacto todavía no están hechos en esta versión: ver [Lo que todavía no está hecho](topic:not-built-yet) |
| Historial | Editar los números de cualquier elemento, suprimir, retroceder, reordenar y eliminar, con deshacer |
| Conjuntos | Piezas unidas por uniones rígidas, de revolución y deslizantes, una comprobación de interferencias y una comprobación de movimiento |
| Planos | Una hoja A3 con tres vistas, una isométrica, un corte, una vista de detalle, medidas generales, referencias, marcos de control de elementos y símbolos de acabado superficial, exportada como PDF |
| Archivos | Sus propios archivos de pieza y de conjunto; salida en STL, 3MF, STEP facetado, DXF y PDF |

Todo se ejecuta en tu navegador, en tu computadora. **No se sube nada.** Ver [Archivos: abrir, guardar y exportar](topic:files) para saber dónde van los archivos.

## Lo que necesitás

- Un Chrome, Edge, Firefox o Safari actual, con **WebGL** (gráficos 3D) y **WebAssembly** activados. Los dos vienen activados por defecto. La geometría sólida la construye un núcleo de malla WebAssembly que se carga junto con la app: ver [El núcleo de malla](topic:solid-kernels).
- Lo más fácil es un mouse. El trackpad funciona, y las pantallas táctiles sirven para ver y hacer bocetos simples: ver [Trackpad, táctil y pantallas pequeñas](topic:trackpad-and-touch).
- Una pantalla de al menos 1280 píxeles de ancho muestra toda la barra de herramientas en una fila. Las ventanas más angostas desplazan la barra hacia los costados; en un teléfono los paneles se abren como hojas desde una barra abajo.

Más sobre navegadores: [Navegadores y computadoras](common:browsers).

:::note
PartCraft funciona en el navegador, y en el escritorio dentro de CadCraft Studio. El guardado en la nube todavía no está disponible: abrís las piezas desde tu computadora y las guardás de vuelta como archivos.
:::

## Abrir PartCraft

1. Abrí PartCraft.
2. Esperá mientras la pantalla dice "Cargando el núcleo sólido…". La primera vez esto tarda un momento.
3. Ves una vista 3D vacía con tres planos base, el historial a la izquierda ("Part1", luego Plano frontal, Plano superior, Plano derecho) y una caja con el título "Comenzar una pieza".
4. El chip cerca del extremo derecho de la barra de estado dice "Núcleo de malla": PartCraft construye cada pieza con el núcleo de malla en esta versión, así que las superficies redondas son caras planas. Podés empezar a modelar enseguida.

Si la vista dice que el navegador no puede mostrar 3D, o que el núcleo no se cargó, ver [Solución de problemas](topic:troubleshooting#the-app-does-not-start).

## Tu primera pieza: una placa con un agujero

Vas a hacer una placa de 60 × 40 mm, de 10 mm de espesor, con un agujero de 6 mm que la atraviesa. Las unidades son milímetros.

### Dibujar el contorno

1. Hacé clic en **Plano frontal** en el historial de la izquierda. El plano se resalta en la vista.
2. Elegí {{ui:Boceto}} en la barra de herramientas, o presioná {{key:S}}. La vista se gira para mirar de frente al plano, y la herramienta Línea queda activa.
3. Presioná {{key:R}} para la herramienta Rectángulo.
4. Mové el puntero sobre el origen (el pequeño círculo rojo con una cruz). Un pequeño cuadrado muestra que se ajusta. Hacé clic.
5. Mové hacia arriba y a la derecha, y hacé clic otra vez. Tenés un rectángulo. Sus líneas son azules: azul significa que todavía se pueden mover.

### Darle medidas

1. Presioná {{key:D}} para la herramienta Cota.
2. Hacé clic en la línea superior, y luego un poco más arriba. Se abre una caja de número con la longitud actual.
3. Escribí `60` y presioná {{key:Enter}}. El rectángulo pasa a tener 60 mm de ancho.
4. Hacé clic en la línea izquierda, y luego un poco a la izquierda. Escribí `40` y presioná {{key:Enter}}.

El chip arriba a la izquierda de la vista ahora dice **Totalmente definido** y las líneas pasan a color tinta (negro en el tema Papel, claro en el tema Modelo). Cada punto y cada medida están fijos.

:::tip
Si empezaste el rectángulo lejos del origen, el chip sigue diciendo "Subdefinido · 2 grados de libertad". Presioná {{key:S}} para Seleccionar, hacé clic en una esquina, {{key:Shift}}+clic en el origen, y después elegí {{ui:• Coincidente}} en el panel derecho.
:::

### Extruirla

1. Elegí {{ui:Salir}} en la barra de herramientas, o presioná {{key:Esc}} hasta que se cierre el boceto (normalmente dos veces).
2. Elegí {{ui:Extruir}}. Aparece un sólido de 10 mm. "Extrude1" se agrega al historial, con "Sketch1" sangrado debajo.
3. El panel derecho muestra las opciones de la extrusión. Para cambiar el espesor, escribí un número nuevo en **Profundidad (mm)** y presioná {{key:Enter}} o {{key:Tab}}. La pieza se reconstruye enseguida.

### Agregar el agujero

1. Hacé clic en la gran cara plana de adelante de la placa (el extremo de la extrusión). Toda la cara se resalta y el panel derecho dice **Cara**.
2. Elegí {{ui:Boceto sobre esta cara}} en el panel derecho.
3. Presioná {{key:P}} para la herramienta Punto y hacé clic cerca del centro de la cara.
4. Elegí {{ui:Salir}}.
5. Elegí {{ui:Agujero}}. Un agujero de 6 mm atraviesa la placa. Si querés, cambiá **Diámetro (mm)** en el panel derecho.

El cuadro **Pieza**, abajo a la izquierda, ahora muestra un volumen, un área superficial, el tamaño (60 × 40 × 10 mm) y "Agujeros pasantes: 1".

### Guardarla

1. Presioná {{key:Mod+S}} o elegí {{ui:Guardar}}.
2. Tu navegador descarga `Part1.partcraft.json` a su carpeta de descargas. El archivo guarda todo el historial: abrilo otra vez con {{ui:Abrir}} para seguir editando.

Para renombrar primero la pieza, hacé clic en un espacio vacío de la vista para que no haya nada seleccionado, y escribí un **Nombre** nuevo en el panel derecho.

## Dónde seguir

- [Dibujá tu primer boceto](topic:sketch-basics) y [Definir totalmente un boceto](topic:relations-dimensions) explican el editor de bocetos en detalle.
- [Cambiar una pieza mediante su historial](topic:edit-history) muestra cómo editar lo que construiste.
- [Redondear, biselar y ahuecar](topic:fillet-chamfer-shell) y [Hacer un plano](topic:drawing-pdf) terminan la pieza. [Lo que todavía no está hecho](topic:not-built-yet) enumera lo que esta versión no hace, como barridos y lofts.
- [Venir desde otro modelador paramétrico](topic:coming-from) lista los hábitos que aquí funcionan distinto.
- [Teclas y mouse](topic:keyboard) es la lista completa de atajos.
- [Usar esta ayuda](common:help).
