---
title: Empiece con PartCraft
summary: Qué hace PartCraft hoy, qué necesita su navegador y una primera pieza en diez minutos, desde el croquis hasta el archivo guardado.
keywords: inicio, primera vez, inicio rápido, introducción, tutorial, primera pieza, placa, paramétrico, modelador de piezas
from: 7d43283f
---

PartCraft es la aplicación de piezas y ensambles paramétricos de la familia CadCraft. Dibuja un croquis 2D, lo fija con relaciones y cotas, lo convierte en un sólido con operaciones como extruir, revolucionar y agujero, y cambia cualquier número después: la pieza se reconstruye desde su historial. Luego las piezas pasan a ensambles, donde las uniones las colocan y le permiten revisar el movimiento.

Lo que hace esta versión:

| Tarea | Qué obtiene |
|---|---|
| Croquis | Líneas, rectángulos, círculos, arcos, puntos y líneas de centro, con relaciones y cotas, y un estado en vivo: insuficientemente, totalmente o excesivamente definido |
| Operaciones sólidas | Extruir, cortar, revolucionar, corte por revolución, agujeros simples y avellanados, patrones lineales y circulares, simetría, redondeos y chaflanes en aristas rectas entre caras planas, y vaciados y ángulos de salida en caras planas. Los barridos, las solevaciones y las demás operaciones que necesitan un núcleo exacto todavía no están incluidos en esta versión: véase [Lo que aún no está incluido](topic:not-built-yet) |
| Historial | Edite los números de cualquier operación, suprima, retroceda, reordene y elimine, con deshacer |
| Ensambles | Piezas unidas por uniones rígidas, de revolución y deslizantes, una comprobación de interferencias y una comprobación de movimiento |
| Dibujos | Una hoja A3 con tres vistas, una isométrica, un corte, una vista de detalle, dimensiones generales, datums, marcos de control de elementos y símbolos de acabado superficial, exportados como PDF |
| Archivos | Sus propios archivos de pieza y de ensamble; salida en STL, 3MF, STEP exacto, DXF y PDF |

Todo funciona en su navegador, en su computadora. **No se sube nada.** Véase [Archivos: abrir, guardar y exportar](topic:files) para saber dónde van los archivos.

## Lo que necesita

- Un Chrome, Edge, Firefox o Safari actual con **WebGL** (gráficos 3D) y **WebAssembly** activados. Ambos están activados de forma predeterminada. La geometría sólida la construye un núcleo de malla en WebAssembly que se carga con la aplicación: véase [El núcleo de malla](topic:solid-kernels).
- Un ratón es lo más sencillo. Un trackpad funciona, y las pantallas táctiles sirven para ver y hacer croquis simples: véase [Trackpad, pantalla táctil y pantallas pequeñas](topic:trackpad-and-touch).
- Una pantalla de al menos 1280 píxeles de ancho muestra toda la barra de herramientas en una fila. Las ventanas más estrechas desplazan la barra de herramientas hacia los lados; en un teléfono los paneles se abren como hojas desde una barra en la parte inferior.

Más sobre navegadores: [Navegadores y computadoras](common:browsers).

:::note
PartCraft funciona en el navegador, y en el escritorio dentro de CadCraft Studio. El guardado en la nube todavía no está disponible: abre las piezas desde su computadora y las guarda de vuelta como archivos.
:::

## Abrir PartCraft

1. Abra PartCraft.
2. Espere mientras la pantalla dice "Cargando el núcleo de sólidos…". Esto tarda un momento la primera vez.
3. Verá una vista 3D vacía con tres planos base, el historial a la izquierda ("Part1", luego Plano frontal, Plano superior, Plano derecho) y un cuadro con el encabezado "Empiece una pieza".
4. La etiqueta cerca del extremo derecho de la barra de estado dice "Núcleo de malla": PartCraft construye cada pieza con el núcleo de malla en esta versión, así que las caras redondas son facetas planas. Puede empezar a modelar de inmediato.

Si la vista dice que el navegador no puede mostrar 3D, o que el núcleo no se cargó, véase [Solución de problemas](topic:troubleshooting#the-app-does-not-start).

## Su primera pieza: una placa con un agujero

Hará una placa de 60 × 40 mm, de 10 mm de espesor, con un agujero pasante de 6 mm. Las unidades son milímetros.

### Dibujar el contorno

1. Haga clic en **Plano frontal** en el historial de la izquierda. El plano se resalta en la vista.
2. Elija {{ui:Croquis}} en la barra de herramientas, o pulse {{key:S}}. La vista se orienta para mirar el plano de frente, y la herramienta Línea queda activa.
3. Pulse {{key:R}} para la herramienta Rectángulo.
4. Mueva el puntero sobre el origen (el pequeño círculo rojo con una cruz). Un pequeño cuadrado indica que se ajusta. Haga clic.
5. Mueva hacia arriba y a la derecha y haga clic otra vez. Tiene un rectángulo. Sus líneas son azules: azul significa que todavía pueden moverse.

### Darle medidas

1. Pulse {{key:D}} para la herramienta Cota.
2. Haga clic en la línea superior, luego haga clic un poco por encima de ella. Se abre un cuadro numérico con la longitud actual.
3. Escriba `60` y pulse {{key:Enter}}. El rectángulo cambia a 60 mm de ancho.
4. Haga clic en la línea izquierda, luego haga clic un poco a la izquierda de ella. Escriba `40` y pulse {{key:Enter}}.

La etiqueta en la esquina superior izquierda de la vista ahora dice **Totalmente definido** y las líneas cambian a tinta (negro en el tema Papel, claro en el tema Modelo). Cada punto y cada medida están fijos.

:::tip
Si empezó el rectángulo lejos del origen, la etiqueta sigue diciendo "Insuficientemente definido · 2 grados de libertad". Pulse {{key:S}} para Seleccionar, haga clic en una esquina, {{key:Shift}}+clic en el origen, y luego elija {{ui:• Coincidente}} en el panel derecho.
:::

### Extruirlo

1. Elija {{ui:Salir}} en la barra de herramientas, o pulse {{key:Esc}} hasta que se cierre el croquis (normalmente dos veces).
2. Elija {{ui:Extruir}}. Aparece un sólido de 10 mm. "Extrude1" se agrega al historial, con "Sketch1" sangrado debajo.
3. El panel derecho muestra los ajustes de la extrusión. Para cambiar el espesor, escriba un número nuevo en **Profundidad (mm)** y pulse {{key:Enter}} o {{key:Tab}}. La pieza se reconstruye de inmediato.

### Agregar el agujero

1. Haga clic en la cara plana grande en el frente de la placa (el extremo de la extrusión). Toda la cara se resalta y el panel derecho dice **Cara**.
2. Elija {{ui:Croquis en esta cara}} en el panel derecho.
3. Pulse {{key:P}} para la herramienta Punto y haga clic cerca del centro de la cara.
4. Elija {{ui:Salir}}.
5. Elija {{ui:Taladro}}. Un agujero de 6 mm atraviesa la placa. Cambie **Diámetro (mm)** en el panel derecho si lo desea.

El cuadro **Pieza** en la parte inferior izquierda ahora muestra un volumen, un área superficial, el tamaño (60 × 40 × 10 mm) y "Agujeros pasantes: 1".

### Guardarla

1. Pulse {{key:Mod+S}} o elija {{ui:Guardar}}.
2. Su navegador descarga `Part1.partcraft.json` a su carpeta de descargas. El archivo contiene todo el historial: ábralo de nuevo con {{ui:Abrir}} para seguir editando.

Para renombrar primero la pieza, haga clic en un espacio vacío de la vista para que nada quede seleccionado y escriba un **Nombre** nuevo en el panel derecho.

## Adónde ir después

- [Dibujar su primer croquis](topic:sketch-basics) y [Definir completamente un croquis](topic:relations-dimensions) explican el croquizador a fondo.
- [Cambiar una pieza a través de su historial](topic:edit-history) muestra cómo editar lo que construyó.
- [Redondear, biselar y vaciar](topic:fillet-chamfer-shell) y [Hacer un dibujo](topic:drawing-pdf) terminan la pieza. [Lo que aún no está incluido](topic:not-built-yet) enumera lo que esta versión no hace, como barridos y solevaciones.
- [Venir de otro modelador paramétrico](topic:coming-from) enumera los hábitos que funcionan de forma distinta aquí.
- [Teclado y ratón](topic:keyboard) es la lista completa de atajos.
- [Cómo usar esta ayuda](common:help).
