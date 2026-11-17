---
title: Primeros pasos con PartCraft
summary: Qué hace PartCraft hoy, qué necesita su navegador y una primera pieza en diez minutos, desde el croquis hasta el archivo guardado.
keywords: inicio, primera ejecución, inicio rápido, introducción, tutorial, primera pieza, placa, paramétrico, modelador de piezas
from: 7d43283f
---

PartCraft es la aplicación de piezas paramétricas y ensamblajes de la familia CadCraft. Dibuja un croquis 2D, lo sujeta con relaciones y cotas, lo convierte en un sólido con características como extrusión, revolución y agujero, y cambia cualquier número más tarde: la pieza se reconstruye desde su historial. Después, las piezas pasan a ensamblajes, donde las uniones las colocan y permiten comprobar el movimiento.

Lo que hace esta versión:

| Función | Lo que obtiene |
|---|---|
| Croquis | Líneas, rectángulos, círculos, arcos, puntos y líneas de centro, con relaciones y cotas, y un estado en vivo: sin definir, totalmente definido o sobredefinido |
| Características sólidas | Extrusión, corte, revolución, corte por revolución, agujeros simples y con cajera, patrones lineales y circulares, simetría especular, redondeos y chaflanes en aristas rectas entre caras planas, y vaciados y ángulos de salida en caras planas. Barridos, lofts y las demás características que necesitan un núcleo exacto aún no están disponibles en esta versión: véase [Lo que aún no está disponible](topic:not-built-yet) |
| Historial | Edite los números de cualquier característica, suprímala, retroceda, reordene y elimine, con deshacer |
| Ensamblajes | Piezas unidas por uniones rígidas, de revolución y de deslizamiento, una comprobación de interferencias y una comprobación de movimiento |
| Planos | Una hoja A3 con tres vistas, una isométrica, una sección, una vista de detalle, cotas globales, datos de referencia, marcos de control de característica y símbolos de acabado superficial, exportados como PDF |
| Archivos | Sus propios archivos de pieza y de ensamblaje; salida en STL, 3MF, STEP exacto, DXF y PDF |

Todo se ejecuta en su navegador, en su equipo. **No se sube nada.** Véase [Archivos: abrir, guardar y exportar](topic:files) para saber adónde van los archivos.

## Lo que necesita

- Un Chrome, Edge, Firefox o Safari actual, con **WebGL** (gráficos 3D) y **WebAssembly** activados. Ambos están activados por defecto. La geometría sólida la construye un núcleo de malla en WebAssembly que se carga con la aplicación: véase [El núcleo de malla](topic:solid-kernels).
- Un ratón es lo más cómodo. Un panel táctil funciona, y las pantallas táctiles sirven para ver y hacer croquis sencillos: véase [Panel táctil, pantalla táctil y pantallas pequeñas](topic:trackpad-and-touch).
- Una pantalla de al menos 1280 píxeles de ancho muestra toda la barra de herramientas en una fila. Las ventanas más estrechas desplazan la barra lateralmente; en un teléfono, los paneles se abren como hojas desde una barra inferior.

Más sobre navegadores: [Navegadores y equipos](common:browsers).

:::note
PartCraft se ejecuta en el navegador, y en el escritorio dentro de CadCraft Studio. El guardado en la nube aún no está disponible: abra las piezas desde su equipo y guárdelas de nuevo en él como archivos.
:::

## Abrir PartCraft

1. Abra PartCraft.
2. Espere mientras la pantalla indica «Cargando el núcleo sólido…». Esto tarda un momento la primera vez.
3. Verá una vista 3D vacía con tres planos base, el historial a la izquierda («Part1», luego Plano alzado, Plano superior, Plano derecho) y un cuadro en la vista titulado «Empiece una pieza».
4. El chip cerca del extremo derecho de la barra de estado dice «Núcleo de malla»: PartCraft construye cada pieza con el núcleo de malla en esta versión, así que las superficies redondas son caras planas. Puede empezar a modelar de inmediato.

Si la vista indica que el navegador no puede mostrar 3D, o que el núcleo no se cargó, véase [Solución de problemas](topic:troubleshooting#the-app-does-not-start).

## Su primera pieza: una placa con un agujero

Hará una placa de 60 × 40 mm, de 10 mm de grosor, con un agujero pasante de 6 mm. Las unidades son milímetros.

### Dibujar el contorno

1. Haga clic en **Plano alzado** en el historial de la izquierda. El plano se resalta en la vista.
2. Elija {{ui:Croquis}} en la barra de herramientas, o pulse {{key:S}}. La vista se orienta para mirar de frente al plano, y la herramienta Línea queda activa.
3. Pulse {{key:R}} para la herramienta Rectángulo.
4. Mueva el puntero sobre el origen (el pequeño círculo rojo con una cruz). Un pequeño cuadrado indica que se ajusta. Haga clic.
5. Muévase hacia arriba y a la derecha y haga clic de nuevo. Tiene un rectángulo. Sus líneas son azules: el azul significa que todavía pueden moverse.

### Asignarle medidas

1. Pulse {{key:D}} para la herramienta Cota.
2. Haga clic en la línea superior y luego un poco por encima de ella. Se abre un cuadro numérico con la longitud actual.
3. Escriba `60` y pulse {{key:Enter}}. El rectángulo cambia a 60 mm de ancho.
4. Haga clic en la línea izquierda y luego un poco a su izquierda. Escriba `40` y pulse {{key:Enter}}.

El chip de la esquina superior izquierda de la vista ahora dice **Totalmente definido** y las líneas pasan a tinta (negras en el tema Papel, claras en el tema Modelo). Todos los puntos y medidas están fijados.

:::tip
Si empezó el rectángulo lejos del origen, el chip sigue diciendo «Sin definir · 2 grados de libertad». Pulse {{key:S}} para Seleccionar, haga clic en una esquina, {{key:Shift}}+clic en el origen y, después, elija {{ui:• Coincidente}} en el panel derecho.
:::

### Extruirla

1. Elija {{ui:Salir}} en la barra de herramientas, o pulse {{key:Esc}} hasta que se cierre el croquis (normalmente dos veces).
2. Elija {{ui:Extruir}}. Aparece un sólido de 10 mm. «Extrude1» se añade al historial, con «Sketch1» sangrado debajo.
3. El panel derecho muestra los ajustes de la extrusión. Para cambiar el grosor, escriba un número nuevo en **Profundidad (mm)** y pulse {{key:Enter}} o {{key:Tab}}. La pieza se reconstruye de inmediato.

### Añadir el agujero

1. Haga clic en la gran cara plana de la parte delantera de la placa (el extremo de la extrusión). Toda la cara se resalta y el panel derecho dice **Cara**.
2. Elija {{ui:Croquis en esta cara}} en el panel derecho.
3. Pulse {{key:P}} para la herramienta Punto y haga clic cerca del centro de la cara.
4. Elija {{ui:Salir}}.
5. Elija {{ui:Taladro}}. Un agujero de 6 mm atraviesa la placa. Cambie **Diámetro (mm)** en el panel derecho si lo desea.

El cuadro **Pieza** de la parte inferior izquierda muestra ahora un volumen, un área superficial, el tamaño (60 × 40 × 10 mm) y «Agujeros pasantes: 1».

### Guardarla

1. Pulse {{key:Mod+S}} o elija {{ui:Guardar}}.
2. Su navegador descarga `Part1.partcraft.json` en su carpeta de descargas. El archivo contiene todo el historial: ábralo de nuevo con {{ui:Abrir}} para seguir editando.

Para cambiar antes el nombre de la pieza, haga clic en un espacio vacío de la vista para que no haya nada seleccionado y escriba un nuevo **Nombre** en el panel derecho.

## Adónde ir después

- [Dibuje su primer croquis](topic:sketch-basics) y [Defina totalmente un croquis](topic:relations-dimensions) explican el croquizador en detalle.
- [Cambie una pieza a través de su historial](topic:edit-history) muestra cómo editar lo que construyó.
- [Redondear, biselar y vaciar](topic:fillet-chamfer-shell) y [Hacer un plano](topic:drawing-pdf) terminan la pieza. [Lo que aún no está disponible](topic:not-built-yet) enumera lo que esta versión no hace, como barridos y lofts.
- [Si viene de otro modelador paramétrico](topic:coming-from) enumera los hábitos que aquí funcionan de otra manera.
- [Teclas y ratón](topic:keyboard) es la lista completa de atajos.
- [Cómo usar esta ayuda](common:help).
