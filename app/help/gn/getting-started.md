---
title: Primeros pasos con PartCraft
summary: Qué hace PartCraft hoy, qué necesita tu navegador, y una primera pieza en diez minutos, desde el boceto hasta el archivo guardado.
keywords: inicio, primera vez, inicio rápido, introducción, tutorial, primera pieza, placa, paramétrico, modelador de piezas
from: 7d43283f
---

PartCraft es la aplicación de piezas paramétricas y ensamblajes de la familia CadCraft. Dibujás un boceto 2D, lo fijás con relaciones y cotas, lo convertís en un sólido con funciones como extruir, revolver y agujero, y podés cambiar cualquier número después: la pieza se reconstruye desde su historial. Luego las piezas van a ensamblajes, donde las uniones las colocan y te permiten verificar el movimiento.

Lo que hace esta compilación:

| Tarea | Lo que obtenés |
|---|---|
| Bocetos | Líneas, rectángulos, círculos, arcos, puntos y líneas de centro, con relaciones y cotas, y un estado en vivo: subdefinido, totalmente definido o sobredefinido |
| Funciones sólidas | Extruir, cortar, revolver, corte por revolución, agujeros simples y avellanados, patrones lineales y circulares, simetría, redondeos y chaflanes en aristas rectas entre caras planas, y vaciados y pendientes en caras planas. Los barridos, lofts y las demás funciones que necesitan un kernel exacto todavía no están construidos en esta versión: ver [Lo que todavía no está construido](topic:not-built-yet) |
| Historial | Editá los números de cualquier función, suprimila, volvé atrás, reordenala y eliminala, con deshacer |
| Ensamblajes | Piezas unidas por uniones rígidas, de revolución y deslizantes, una verificación de choques y una verificación de movimiento |
| Planos | Una hoja A3 con tres vistas, una isométrica, un corte, una vista de detalle, medidas generales, datos de referencia, marcos de control de funciones y símbolos de acabado superficial, exportados como PDF |
| Archivos | Sus propios archivos de pieza y ensamblaje; salida STL, 3MF, STEP exacto, DXF y PDF |

Todo funciona en tu navegador, en tu computadora. **No se sube nada.** Ver [Archivos: abrir, guardar y exportar](topic:files) para saber a dónde van los archivos.

## Lo que necesitás

- Un Chrome, Edge, Firefox o Safari actual con **WebGL** (gráficos 3D) y **WebAssembly** activados. Ambos están activados por defecto. La geometría sólida la construye un kernel de malla en WebAssembly que se carga con la aplicación: ver [El kernel de malla](topic:solid-kernels).
- El mouse es lo más fácil. Un trackpad funciona, y las pantallas táctiles sirven para ver y hacer bocetos simples: ver [Trackpad, táctil y pantallas pequeñas](topic:trackpad-and-touch).
- Una pantalla de al menos 1280 píxeles de ancho muestra toda la barra de herramientas en una fila. Las ventanas más angostas desplazan la barra de herramientas hacia los costados; en un teléfono los paneles se abren como hojas desde una barra en la parte inferior.

Más sobre navegadores: [Navegadores y computadoras](common:browsers).

:::note
PartCraft funciona en el navegador, y en el escritorio dentro de CadCraft Studio. Todavía no está disponible el guardado en la nube: abrís las piezas desde tu computadora y las guardás de nuevo allí como archivos.
:::

## Abrir PartCraft

1. Abrí PartCraft.
2. Esperá mientras la pantalla dice "Cargando el núcleo sólido…". Esto tarda un momento la primera vez.
3. Ves una vista 3D vacía con tres planos base, el historial a la izquierda ("Part1", luego Plano frontal, Plano superior, Plano derecho) y una caja en la vista con el título "Iniciar una pieza".
4. El distintivo cerca del extremo derecho de la barra de estado dice "Núcleo de malla": PartCraft construye cada pieza con el kernel de malla en esta versión, así que las caras redondas son facetas planas. Podés empezar a modelar de inmediato.

Si la vista dice que el navegador no puede mostrar 3D, o el kernel no se cargó, ver [Solución de problemas](topic:troubleshooting#the-app-does-not-start).

## Tu primera pieza: una placa con un agujero

Vas a hacer una placa de 60 × 40 mm, de 10 mm de espesor, con un agujero de 6 mm que la atraviese. Las unidades son milímetros.

### Boceto del contorno

1. Hacé clic en **Plano frontal** en el historial de la izquierda. El plano se resalta en la vista.
2. Elegí {{ui:Boceto}} en la barra de herramientas, o apretá {{key:S}}. La vista se gira para mirar de frente al plano, y la herramienta Línea queda activa.
3. Apretá {{key:R}} para la herramienta Rectángulo.
4. Movés el puntero sobre el origen (el pequeño círculo rojo con una cruz). Un pequeño cuadrado muestra que se ajusta. Hacé clic.
5. Movés hacia arriba y a la derecha y volvés a hacer clic. Tenés un rectángulo. Sus líneas son azules: azul significa que todavía pueden moverse.

### Ponerle medidas

1. Apretá {{key:D}} para la herramienta Cota.
2. Hacé clic en la línea superior, y después un poco arriba de ella. Se abre una caja de número con la longitud actual.
3. Escribí `60` y apretá {{key:Enter}}. El rectángulo cambia a 60 mm de ancho.
4. Hacé clic en la línea izquierda, y después un poco a la izquierda de ella. Escribí `40` y apretá {{key:Enter}}.

El distintivo en la parte superior izquierda de la vista ahora dice **Totalmente definido** y las líneas se vuelven tinta (negra en el tema Papel, clara en el tema Modelo). Cada punto y cada medida quedan fijos.

:::tip
Si empezaste el rectángulo lejos del origen, el distintivo igual dice "Subdefinido · 2 grados de libertad". Apretá {{key:S}} para Seleccionar, hacé clic en una esquina, {{key:Shift}}+clic en el origen, y después elegí {{ui:• Coincidente}} en el panel derecho.
:::

### Extruirla

1. Elegí {{ui:Salir}} en la barra de herramientas, o apretá {{key:Esc}} hasta que se cierre el boceto (normalmente dos veces).
2. Elegí {{ui:Extruir}}. Aparece un sólido de 10 mm. "Extrude1" se agrega al historial, con "Sketch1" sangrado debajo.
3. El panel derecho muestra los ajustes de la extrusión. Para cambiar el espesor, escribí un número nuevo en **Profundidad (mm)** y apretá {{key:Enter}} o {{key:Tab}}. La pieza se reconstruye de inmediato.

### Agregar el agujero

1. Hacé clic en la gran cara plana de adelante de la placa (el extremo de la extrusión). Toda la cara se resalta y el panel derecho dice **Cara**.
2. Elegí {{ui:Boceto sobre esta cara}} en el panel derecho.
3. Apretá {{key:P}} para la herramienta Punto y hacé clic cerca del centro de la cara.
4. Elegí {{ui:Salir}}.
5. Elegí {{ui:Agujero}}. Un agujero de 6 mm atraviesa la placa. Cambiá **Diámetro (mm)** en el panel derecho si querés.

La caja **Pieza** abajo a la izquierda ahora muestra un volumen, un área de superficie, el tamaño (60 × 40 × 10 mm) y "Agujeros pasantes: 1".

### Guardarla

1. Apretá {{key:Mod+S}} o elegí {{ui:Guardar}}.
2. Tu navegador descarga `Part1.partcraft.json` a su carpeta de descargas. El archivo guarda todo el historial: abrilo de nuevo con {{ui:Abrir}} para seguir editando.

Para renombrar primero la pieza, hacé clic en un espacio vacío de la vista para que no haya nada seleccionado y escribí un **Nombre** nuevo en el panel derecho.

## Adónde ir después

- [Dibujá tu primer boceto](topic:sketch-basics) y [Definí totalmente un boceto](topic:relations-dimensions) explican bien el editor de bocetos.
- [Cambiá una pieza a través de su historial](topic:edit-history) muestra cómo editar lo que construiste.
- [Redondear, biselar y vaciar](topic:fillet-chamfer-shell) y [Hacer un plano](topic:drawing-pdf) terminan la pieza. [Lo que todavía no está construido](topic:not-built-yet) enumera lo que esta versión no hace, como barridos y lofts.
- [Venir de otro modelador paramétrico](topic:coming-from) enumera los hábitos que funcionan distinto aquí.
- [Teclas y mouse](topic:keyboard) es la lista completa de atajos.
- [Cómo usar esta ayuda](common:help).
