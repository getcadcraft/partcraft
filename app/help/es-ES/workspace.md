---
title: La pantalla de PartCraft
summary: Recorrido por cada barra y panel: la barra de herramientas y cómo cambia, el historial, los datos de la pieza, la vista 3D, el panel de propiedades y la barra de estado.
keywords: pantalla, disposición, barra de herramientas, historial, árbol de operaciones, propiedades, panel, barra de estado, interfaz, ui, recorrido, pantalla completa
from: 5b5bb843
---

La pantalla tiene cinco partes: la barra de herramientas en la parte superior, el historial a la izquierda, la vista 3D en el centro, el panel de propiedades a la derecha y la barra de estado a lo largo de la parte inferior. Por encima de todas está la barra de aplicación de CadCraft.

## La barra de aplicación

La barra fina de la parte superior pertenece al sitio de CadCraft, no a PartCraft en sí. Muestra el nombre de la aplicación y dónde se ejecuta, un menú de versión, **Acerca de PartCraft**, el botón de modo de pantalla y el selector de tema Paper / Model.

- **Paper** son líneas oscuras sobre una hoja clara. **Model** son líneas claras sobre un fondo oscuro. Los colores del croquis siguen al tema.
- {{ui:Settings}} (Configuración) (el engranaje, o {{key:Mod+,}}) tiene una pestaña {{ui:PartCraft}}: qué botón del ratón gira la vista, rueda del ratón o panel táctil, y relaciones al hacer croquis. Véase [Configuración de PartCraft](topic:settings).
- El botón de modo de pantalla, o {{key:Ctrl+Shift+F}}, recorre lo normal, la pantalla completa y la pantalla completa con las barras ocultas. Con las barras ocultas, lleve el puntero al borde superior (o toque allí) para que vuelvan. {{key:Esc}} vuelve a lo normal. Esta tecla es {{key:Ctrl+Shift+F}} también en un Mac, no ⌘.

## La barra de herramientas

La barra de herramientas está agrupada. Cambia según lo que esté haciendo, para que quepa en una sola fila:

| Grupo | Botones | Se muestra |
|---|---|---|
| Archivo | {{ui:New}} (Nuevo), {{ui:Open}} (Abrir), {{ui:Save}} (Guardar), {{ui:Export}} (Exportar) (un menú) | Siempre |
| Croquis | {{ui:Sketch}} (Croquis) | Cuando no hay ningún croquis abierto |
| Croquis | {{ui:Exit}} (Salir), {{ui:Line}} (Línea), {{ui:Rectangle}} (Rectángulo), {{ui:Circle}} (Círculo), {{ui:Arc}} (Arco), {{ui:Point}} (Punto), {{ui:Centerline}} (Línea constructiva), {{ui:Fillet}} (Redondeo), {{ui:Dimension}} (Cota), {{ui:Construction}} (Construcción) | Solo mientras hay un croquis abierto |
| Operaciones | {{ui:Extrude}} (Extruir), {{ui:Cut}} (Cortar), {{ui:Revolve}} (Revolución), {{ui:Hole}} (Taladro), {{ui:Linear}} (Lineal), {{ui:Circular}} (Circular), {{ui:Mirror}} (Simetría), {{ui:Fillet}} (Redondeo), {{ui:Chamfer}} (Chaflán), {{ui:Shell}} (Vaciado), {{ui:More}} (Más) (un menú: Corte por revolución, Plano, Eje, Punto, Barrido, Solevación, Desmoldeo) | En la pieza, no mientras hay abierto un croquis o el dibujo. Redondeo y Chaflán funcionan con aristas rectas entre dos caras planas; Vaciado y Desmoldeo, sobre caras planas. Barrido y Solevación todavía no están construidas en esta versión (necesitan un núcleo exacto); al hacer clic en una, se indica |
| Operaciones | {{ui:Done}} (Listo) | Solo mientras elige aristas o caras para un redondeo, chaflán, vaciado o desmoldeo |
| Dibujo | {{ui:Drawing}} (Dibujo) | En la pieza (utilizable cuando la pieza tiene un sólido) |
| Dibujo | {{ui:Datum}} (Referencia), {{ui:Frame}} (Marco), {{ui:Finish}} (Acabado), {{ui:Detail}} (Detalle), {{ui:PDF}}, {{ui:Back}} (Volver) | Solo en la hoja de dibujo |
| Ensamblaje | {{ui:Assembly}} (Ensamblaje) | En la pieza (utilizable cuando la pieza tiene un sólido) |
| Ensamblaje | {{ui:Add copy}} (Añadir copia), {{ui:Insert}} (Insertar), {{ui:Joint}} (Unión), {{ui:Clash}} (Interferencia), {{ui:Edit part}} (Editar pieza), {{ui:Close}} (Cerrar) | Solo en un ensamblaje |
| Ensamblaje | {{ui:Back}} (Volver) | Mientras edita una pieza desde un ensamblaje |
| Editar | {{ui:Undo}} (Deshacer), {{ui:Redo}} (Rehacer), {{ui:Copy}} (Copiar), {{ui:Paste}} (Pegar), {{ui:More}} (Más) (un menú: Cortar, Copiar, Pegar, Pegar en su lugar, Duplicar, Eliminar, Seleccionar todo, Anular la selección) | Siempre; cada elemento actúa sobre el croquis, el historial o el ensamblaje en que esté |
| Vista | {{ui:Fit}} (Ajustar), {{ui:Normal to}} (Normal a), {{ui:Views}} (Vistas) (un menú: Medir, Propiedades de masa, Sección, Desmoldeo, Cebra, Curvatura, {{ui:Base planes}} (Planos base), y luego Isométrica, Frontal, Trasera, Superior, Inferior, Derecha, Izquierda) | Siempre |

Sitúe el puntero sobre un botón para ver qué hace y su tecla. Un botón atenuado no se puede usar en ese momento: por ejemplo, los botones de operaciones mientras hay un croquis abierto, o {{ui:Joint}} (Unión) antes de que el ensamblaje tenga dos piezas.

El menú {{ui:More}} (Más) del grupo Editar enumera cada acción de edición con su tecla. Sobre qué actúan copiar y pegar depende de dónde esté; véase [Copiar, pegar y duplicar](topic:copy-paste). La sugerencia de un elemento atenuado indica por qué no puede actuar ahora.

El menú {{ui:Export}} (Exportar) contiene {{ui:STL, for 3D printing}} (STL, para impresión 3D), {{ui:3MF, for 3D printing}} (3MF, para impresión 3D), {{ui:STEP AP242 (exact solid)}} (STEP AP242 (sólido exacto)), {{ui:STEP AP214 (exact solid)}} (STEP AP214 (sólido exacto)), {{ui:STEP (faceted, mesh kernel)}} (STEP (facetado, núcleo de malla)), {{ui:STEP AP214 (faceted, mesh kernel)}} (STEP AP214 (facetado, núcleo de malla)), {{ui:DXF of the sketch or flat face}} (DXF del croquis o de la cara plana) y {{ui:Drawing (PDF): views, section, detail, GD&T}} (Dibujo (PDF): vistas, sección, detalle, GD&T). Los elementos STEP exactos escriben las caras redondas sobre sus superficies verdaderas; los facetados las escriben como caras planas.

## El historial (izquierda)

El panel de la izquierda es el historial de operaciones de la pieza, la lista que PartCraft reconstruye de arriba abajo.

- El encabezado es el nombre de la pieza ("Part1" hasta que la renombre).
- **Front plane** (Plano Frontal), **Top plane** (Plano Superior) y **Right plane** (Plano Derecho) van primero. Haga clic en uno para seleccionarlo; se resalta en la vista.
- Debajo están sus operaciones en el orden en que se hicieron. Un croquis que usa una operación aparece sangrado bajo esa operación.
- Una marca al final de cada fila indica su estado:

| Marca | Significado |
|---|---|
| (ninguna) | Construida, y el croquis está totalmente definido |
| − | Un croquis que está infradefinido (aún puede moverse) |
| + | Un croquis sobredefinido |
| ⚠ | Construida, con una advertencia (pase el puntero para leer) |
| ⚠ error | La operación falló. Pase el puntero para ver por qué, o haga clic |
| ⚠ not built | La operación necesita otra que falló o está desactivada |
| off | Suprimida |

- Cada operación muestra su número principal tras su nombre, como "25 mm" en una extrusión o "Ø6.6 thru" en un agujero. Haga doble clic en el número, o pulse {{key:F2}} en la fila, para cambiarlo ahí mismo. Véase [Cambiar tamaños](topic:change-sizes).
- Haga clic en una operación para editarla a la derecha. Haga doble clic en un croquis para abrirlo.
- Al retroceder, aparece una fila **Rollback bar · roll forward** (Barra de retroceso · avanzar) en la lista. Las operaciones bajo ella aparecen atenuadas y no construidas.
- Con una fila enfocada, {{key:Up}} y {{key:Down}} se mueven entre filas, y {{key:Alt+Up}} / {{key:Alt+Down}} mueven la propia operación, cuando el historial lo permite.

En un ensamblaje, el mismo panel enumera **Parts** (Piezas) (la primera aparece marcada como "grounded", fijada) y **Joints** (Uniones) en su lugar.

### Datos de la pieza

Bajo el historial, el cuadro **Part** (Pieza) enumera el **Volume** (Volumen), el **Surface area** (Área superficial), el **Size (X × Y × Z)** (Tamaño (X × Y × Z)), los **Through holes** (Agujeros pasantes), los **Bodies** (Cuerpos), los **Triangles** (Triángulos), el número de **Features** (Operaciones) y cuántas están **Failing** (Fallando). Los volúmenes y áreas son del sólido facetado construido por el núcleo de malla, algo menores que el valor real en formas redondas (véase [Operaciones y sus opciones](topic:features#curves-resolution)).

En un ensamblaje, el cuadro se titula **Assembly** (Ensamblaje): Parts (Piezas), Instances (Instancias), Joints (Uniones), Not joined (Sin unir) e Interference (Interferencia).

## La vista 3D (centro)

La vista muestra el sólido, los planos base y cualquier croquis que aún no usa una operación.

Los planos base se dibujan completos mientras la pieza está vacía. Una vez que tiene un sólido se difuminan: se dibujan tenues para no tapar la pieza, y los clics los atraviesan hacia la pieza. Vuelven a completos mientras elige dónde croquizar ({{ui:Sketch}} (Croquis) sin nada elegido) y cuando selecciona uno en el historial. {{ui:Views}} (Vistas) › {{ui:Base planes}} (Planos base) los oculta por completo; siguen mostrándose mientras elige dónde croquizar. PartCraft recuerda esa elección.

- Arrastre para girar la pieza, arrastre con el botón derecho o central para desplazar, y gire la rueda para hacer zoom en el puntero. Detalles en [Teclas y ratón](topic:keyboard).
- Pase el puntero sobre una cara, arista o plano para verlo iluminarse. Haga clic para elegirlo. Las caras se resaltan completas, y las aristas se dibujan y se eligen enteras. {{key:Shift}}+clic reúne varias aristas o caras. Quedan marcadas.
- El cubo de vistas de la parte superior derecha gira con la pieza: haga clic en una cara, arista o esquina para mirar desde allí, arrástrelo para girar, y el botón de casa vuelve al inicio. Véase [El cubo de vistas](topic:view-cube).
- Una extrusión seleccionada muestra una flecha naranja en su cara final, y una revolución una flecha curva al final de su giro: arrástrela para cambiar la profundidad o el ángulo, o escriba en el cuadro junto a ella. Véase [Cambiar tamaños](topic:change-sizes#drag-it-in-the-view).
- Cuando una pieza está vacía, un cuadro titulado **Start a part** (Iniciar una pieza) enumera los primeros pasos.
- Suelte un archivo `.partcraft.json` o `.partcraft-asm.json` en cualquier punto de la vista para abrirlo. Un archivo `.step`, `.stp`, `.stl`, `.obj`, `.3mf` o `.3dm` soltado allí se abre como cuerpo sólido.

### Mientras elige aristas o caras

Tras {{ui:Fillet}} (Redondeo), {{ui:Chamfer}} (Chaflán) o {{ui:Shell}} (Vaciado) sin nada elegido (o {{ui:Pick edges}} (Seleccionar aristas) en esa operación), la pieza se muestra como estaba antes de esa operación. Haga clic en aristas o caras para añadirlas o quitarlas; sus marcas muestran lo que está incluido. {{ui:Done}} (Listo) o {{key:Esc}} termina. Véase [Redondear, biselar y vaciar](topic:fillet-chamfer-shell).

### En la hoja de dibujo

{{ui:Drawing}} (Dibujo) sustituye la vista 3D por la hoja de dibujo A3. La rueda hace zoom, el arrastre con el botón derecho o central desplaza, y {{key:F}} ajusta. Véase [Hacer un dibujo](topic:drawing-pdf).

### Mientras hay un croquis abierto

La vista se gira para mirar de frente al plano del croquis, y aparece una capa 2D de croquis encima. La pieza muestra solo las operaciones hechas antes de este croquis. Una franja arriba a la izquierda muestra la etiqueta de estado del croquis ("Fully defined" (Totalmente definido), "Under defined · 3 degrees of freedom" (Infradefinido · 3 grados de libertad) y similares) y su nombre, como "Sketch2 on a face of Extrude1" (Sketch2 en una cara de Extrude1).

## El panel de propiedades (derecha)

El panel de la derecha muestra lo que esté seleccionado, y su encabezado lo nombra:

- **Part** (Pieza) (nada seleccionado): el **Name** (Nombre) de la pieza y la opción **Curves** (Curvas).
- Un plano: un botón {{ui:Sketch on it}} (Croquis en él).
- Una **Face** (Cara): de qué tipo es (Flat face (Cara plana), Cylinder (Cilindro) con su radio y eje, Cone (Cono), Sphere (Esfera) o Torus (Toro)), su área, qué operación la creó, y para una cara plana {{ui:Sketch on this face}} (Croquis en esta cara), {{ui:Normal to}} (Normal a), {{ui:Export face as DXF}} (Exportar cara como DXF), {{ui:Extrude from it}} (Extruir desde ella), {{ui:Cut into it}} (Cortar en ella) y {{ui:Hole here}} (Agujero aquí) (véase [Empujar o tirar de una cara entera](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Una **Edge** (Arista): su tipo (recta, un círculo con su centro y radio, o una curva), su longitud y las dos caras entre las que está (como "Extrude1 end face and Extrude1 side" (cara final de Extrude1 y lateral de Extrude1)), con botones {{ui:Fillet}} (Redondeo) y {{ui:Chamfer}} (Chaflán).
- Varias aristas o caras elegidas con {{key:Shift}}: cuántas son, con {{ui:Fillet}} (Redondeo) y {{ui:Chamfer}} (Chaflán) para aristas, y {{ui:Clear}} (Borrar selección).
- Una operación: sus números y opciones, las cotas de su croquis, y luego {{ui:Suppress}} (Suprimir), {{ui:Roll back to here}} (Retroceder hasta aquí), {{ui:Move up}} (Subir), {{ui:Move down}} (Bajar), {{ui:Delete}} (Eliminar) y su **Name** (Nombre).
- Un croquis abierto: su estado, las relaciones que puede añadir a la selección, la lista de relaciones y cotas, **Add by coordinates** (Añadir por coordenadas), y {{ui:Exit sketch}} (Salir del croquis), {{ui:Fit}} (Ajustar) y {{ui:Export as DXF}} (Exportar como DXF).
- En la hoja de dibujo: los ajustes de sección y detalle, o el símbolo GD&T seleccionado.
- En un ensamblaje: el ensamblaje, la pieza seleccionada o la unión seleccionada.

Cada cuadro numérico surte efecto al pulsar {{key:Enter}} o {{key:Tab}}, o al hacer clic fuera. La pieza se reconstruye al instante; no hay botón Aceptar. Use {{key:Mod+Z}} para volver atrás.

## La barra de estado (abajo)

- A la izquierda, las coordenadas del puntero en el croquis (solo mientras hay un croquis abierto).
- En el centro, mensajes: qué hacer a continuación y por qué se rechazó algo. Léala cuando parezca que no pasa nada.
- Cerca de la derecha, la etiqueta del núcleo: siempre "Mesh kernel" (Núcleo de malla) en esta versión. Pase el puntero para saber qué significa. Véase [El núcleo de malla](topic:solid-kernels).
- A la derecha, una etiqueta: "Rebuilding…" (Reconstruyendo…) mientras la pieza se reconstruye, luego "Rebuilt in … ms" (Reconstruida en … ms) cuando todo va bien, o "1 feature failing" (1 operación fallando). En un ensamblaje dice "Placed in … ms" (Colocado en … ms) o cuenta los problemas de unión.

Véase también [Iniciar un manual en Illustrate](topic:illustrate): el espacio de trabajo que crea manuales de ensamblaje a partir de sus piezas y ensamblajes.

## En una pantalla estrecha

Hasta 760 píxeles de ancho, como en un teléfono, la vista mantiene la pantalla: la barra de herramientas es una sola fila que se desplaza lateralmente, y los paneles se abren como hojas desde una barra en la parte inferior. {{ui:Tools}} (Herramientas) oculta la barra de herramientas y {{ui:Move}} (Desplazamiento) la coloca abajo. Véase [Panel táctil y pantallas pequeñas](topic:trackpad-and-touch).
