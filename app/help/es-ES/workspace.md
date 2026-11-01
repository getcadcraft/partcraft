---
title: La pantalla de PartCraft
summary: Un recorrido por cada barra y panel: la barra de herramientas y cómo cambia, el historial, los datos de la pieza, la vista 3D, el panel de propiedades y la barra de estado.
keywords: pantalla, disposición, barra de herramientas, historial, árbol de operaciones, propiedades, panel, barra de estado, interfaz, recorrido, pantalla completa
from: 7394fc49
---

La pantalla tiene cinco partes: la barra de herramientas en la parte superior, el historial a la izquierda, la vista 3D en el centro, el panel de propiedades a la derecha y la barra de estado en la parte inferior. Por encima de todas está la barra de aplicación de CadCraft.

## La barra de aplicación

La barra delgada de la parte más alta pertenece al sitio de CadCraft, no a PartCraft. Muestra el nombre de la aplicación y dónde se ejecuta, un menú de versiones, **Acerca de PartCraft**, el botón de modo de pantalla y el selector de tema Papel / Modelo.

- **Papel** son líneas oscuras sobre una hoja clara. **Modelo** son líneas claras sobre un fondo oscuro. Los colores del croquis siguen el tema.
- {{ui:Ajustes}} (el engranaje, o {{key:Mod+,}}) tiene una pestaña {{ui:PartCraft}}: qué botón del ratón gira la vista, rueda del ratón o trackpad, y relaciones al croquizar. Consulte [Ajustes de PartCraft](topic:settings).
- El botón de modo de pantalla, o {{key:Ctrl+Shift+F}}, alterna entre normal, pantalla completa y pantalla completa con las barras ocultas. Con las barras ocultas, lleve el puntero al borde superior (o toque allí) para recuperarlas. {{key:Esc}} vuelve a lo normal. Esta tecla es {{key:Ctrl+Shift+F}} también en un Mac, no ⌘.

## La barra de herramientas

La barra de herramientas está agrupada. Cambia según lo que esté haciendo, para que quepa en una fila:

| Grupo | Botones | Se muestra |
|---|---|---|
| Archivo | {{ui:Nuevo}}, {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Exportar}} (un menú) | Siempre |
| Croquis | {{ui:Croquis}} | Cuando no hay ningún croquis abierto |
| Croquis | {{ui:Salir}}, {{ui:Línea}}, {{ui:Rectángulo}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Punto}}, {{ui:Línea constructiva}}, {{ui:Empalme}}, {{ui:Cota}}, {{ui:Construcción}} | Solo mientras hay un croquis abierto |
| Operaciones | {{ui:Extruir}}, {{ui:Corte}}, {{ui:Revolución}}, {{ui:Taladro}}, {{ui:Lineal}}, {{ui:Circular}}, {{ui:Simetría}}, {{ui:Redondeo}}, {{ui:Chaflán}}, {{ui:Vaciado}}, {{ui:Más}} (un menú: Corte de revolución, Plano, Eje, Punto, Barrido, Transición, Desmoldeo) | En la pieza, no mientras hay un croquis o la hoja de plano abiertos. Redondeo y Chaflán actúan sobre aristas rectas entre dos caras planas; Vaciado y Desmoldeo, sobre caras planas. Barrido y Transición todavía no están construidos en esta versión (necesitan un kernel exacto); al pulsar uno lo dice |
| Operaciones | {{ui:Listo}} | Solo mientras selecciona aristas o caras para un redondeo, chaflán, vaciado o desmoldeo |
| Plano | {{ui:Dibujo}} | En la pieza (utilizable cuando la pieza tiene un sólido) |
| Plano | {{ui:Referencia}}, {{ui:Marco}}, {{ui:Acabado}}, {{ui:Detalle}}, {{ui:PDF}}, {{ui:Volver}} | Solo en la hoja de plano |
| Ensamblaje | {{ui:Ensamblaje}} | En la pieza (utilizable cuando la pieza tiene un sólido) |
| Ensamblaje | {{ui:Añadir copia}}, {{ui:Insertar}}, {{ui:Unión}}, {{ui:Interferencia}}, {{ui:Editar pieza}}, {{ui:Cerrar}} | Solo en un ensamblaje |
| Ensamblaje | {{ui:Volver}} | Mientras edita una pieza desde un ensamblaje |
| Edición | {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Más}} (un menú: Cortar, Copiar, Pegar, Pegar en su lugar, Duplicar, Eliminar, Seleccionar todo, Quitar selección) | Siempre; cada elemento actúa sobre el croquis, el historial o el ensamblaje en que se encuentra |
| Vista | {{ui:Ajustar}}, {{ui:Normal a}}, {{ui:Vistas}} (un menú: Medir, Propiedades de masa, Sección, Desmoldeo, Cebra, Curvatura, {{ui:Planos base}}, luego Isométrica, Frontal, Posterior, Superior, Inferior, Derecha, Izquierda) | Siempre |

Sitúe el puntero sobre un botón para ver qué hace y su tecla. Un botón atenuado no se puede usar ahora: por ejemplo los botones de operaciones mientras hay un croquis abierto, o {{ui:Unión}} antes de que el ensamblaje tenga dos piezas.

El menú {{ui:Más}} del grupo Edición enumera cada acción de edición con su tecla. Sobre qué actúan copiar y pegar depende de dónde se encuentre; consulte [Copiar, pegar y duplicar](topic:copy-paste). La descripción emergente de un elemento atenuado dice por qué no puede actuar ahora.

El menú {{ui:Exportar}} contiene {{ui:STL, para impresión 3D}}, {{ui:3MF, para impresión 3D}}, {{ui:STEP AP242 (sólido exacto)}}, {{ui:STEP AP214 (sólido exacto)}}, {{ui:STEP (facetado, núcleo de malla)}}, {{ui:STEP AP214 (facetado, núcleo de malla)}}, {{ui:DXF del croquis o de la cara plana}} y {{ui:Dibujo (PDF): vistas, sección, detalle, GD&T}}. Los dos elementos STEP exactos están atenuados: todavía no están construidos en esta versión, así que use {{ui:STEP (facetado, núcleo de malla)}}.

## El historial (izquierda)

El panel de la izquierda es el historial de operaciones de la pieza, la lista a partir de la cual PartCraft reconstruye de arriba abajo.

- El encabezado es el nombre de la pieza ("Part1" hasta que lo cambie).
- **Plano frontal**, **Plano superior** y **Plano derecho** van primero. Pulse uno para seleccionarlo; se resalta en la vista.
- Debajo están sus operaciones en el orden en que se hicieron. Un croquis que usa una operación aparece sangrado bajo ella.
- Un indicador en el extremo derecho de una fila indica su estado:

| Indicador | Significado |
|---|---|
| (ninguno) | Construida, y un croquis completamente definido |
| − | Un croquis insuficientemente definido (todavía puede moverse) |
| + | Un croquis excesivamente definido |
| ⚠ | Construida, con una advertencia (sitúe el puntero para leerla) |
| ⚠ error | La operación falló. Sitúe el puntero para leer el motivo, o púlsela |
| ⚠ no construida | La operación necesita otra que falló o está desactivada |
| off | Suprimida |

- Cada operación muestra su número principal tras el nombre, como "25 mm" para una extrusión o "Ø6.6 thru" para un taladro. Haga doble clic en el número, o pulse {{key:F2}} en la fila, para cambiarlo ahí mismo. Consulte [Cambie los tamaños](topic:change-sizes).
- Pulse una operación para editarla a la derecha. Haga doble clic en un croquis para abrirlo.
- Cuando retrocede, aparece en la lista una fila **Barra de retroceso · avanzar**. Las operaciones situadas debajo están atenuadas y no se construyen.
- Con una fila enfocada, {{key:Up}} y {{key:Down}} se mueven entre filas, y {{key:Alt+Up}} / {{key:Alt+Down}} mueven la propia operación, donde el historial lo permite.

En un ensamblaje, el mismo panel enumera **Piezas** (la primera está marcada como "fija") y **Uniones**.

### Datos de la pieza

Bajo el historial, el cuadro **Pieza** enumera el **Volumen** del sólido, el **Área de superficie**, el **Tamaño (X × Y × Z)**, los **Taladros pasantes**, los **Cuerpos**, los **Triángulos**, el número de **Operaciones** y cuántas están **Con error**. Los volúmenes y las áreas son los del sólido facetado construido por el kernel de malla, algo por debajo del valor real en formas redondas (consulte [Operaciones y sus opciones](topic:features#curves-resolution)).

En un ensamblaje el cuadro se titula **Ensamblaje**: Piezas, Instancias, Uniones, Sin unir e Interferencia.

## La vista 3D (centro)

La vista muestra el sólido, los planos base y cualquier croquis aún no usado por una operación.

Los planos base se dibujan completos mientras la pieza está vacía. Cuando tiene un sólido pasan a segundo plano: se dibujan tenues, para no cubrir la pieza, y los clics los atraviesan hasta la pieza. Reaparecen completos mientras elige dónde croquizar ({{ui:Croquis}} sin nada seleccionado) y cuando selecciona uno en el historial. {{ui:Vistas}} › {{ui:Planos base}} los oculta del todo; aun así se muestran mientras elige dónde croquizar. PartCraft recuerda esa elección.

- Arrastre para girar la pieza, arrastre con el botón derecho o central para desplazar, gire la rueda para acercar o alejar en el puntero. Detalles en [Teclas y ratón](topic:keyboard).
- Sitúe el puntero sobre una cara, arista o plano para ver cómo se ilumina. Pulse para seleccionarlo. Las caras se resaltan enteras y las aristas se dibujan y se seleccionan enteras. {{key:Shift}}+clic reúne varias aristas o caras. Permanecen marcadas.
- El cubo de vistas de la parte superior derecha gira con la pieza: pulse una cara, arista o esquina para mirar desde ahí, arrástrelo para girar, el botón de la casa vuelve al inicio. Consulte [El cubo de vistas](topic:view-cube).
- Una extrusión seleccionada muestra una flecha naranja en su cara final, una revolución una flecha curva al final de su giro: arrástrela para cambiar la profundidad o el ángulo, o escriba en el cuadro contiguo. Consulte [Cambie los tamaños](topic:change-sizes#drag-it-in-the-view).
- Cuando una pieza está vacía, un cuadro titulado **Empezar una pieza** enumera los primeros pasos.
- Suelte un archivo `.partcraft.json` o `.partcraft-asm.json` en cualquier parte de la vista para abrirlo. Un archivo `.step`, `.stp`, `.stl`, `.obj`, `.3mf` o `.3dm` soltado ahí se abre como cuerpo sólido.

### Mientras selecciona aristas o caras

Tras {{ui:Redondeo}}, {{ui:Chaflán}} o {{ui:Vaciado}} sin nada seleccionado (o {{ui:Seleccionar aristas}} en una operación de ese tipo), la pieza se muestra como estaba antes de esa operación. Pulse aristas o caras para añadirlas o quitarlas; sus marcas muestran lo que está incluido. {{ui:Listo}} o {{key:Esc}} termina. Consulte [Redondee, bisele y vacíe](topic:fillet-chamfer-shell).

### En la hoja de plano

{{ui:Dibujo}} sustituye la vista 3D por la hoja de plano A3. La rueda amplía, arrastrar con el botón derecho o central desplaza, {{key:F}} ajusta. Consulte [Haga un plano](topic:drawing-pdf).

### Mientras hay un croquis abierto

La vista gira para mirar el plano del croquis de frente y aparece encima una capa de croquis 2D. La pieza muestra solo las operaciones hechas antes de este croquis. Una franja de la parte superior izquierda muestra el indicador de estado del croquis ("Completamente definido", "Insuficientemente definido · 3 grados de libertad", etc.) y su nombre, como "Sketch2 on a face of Extrude1".

## El panel de propiedades (derecha)

El panel de la derecha muestra lo que esté seleccionado, y su encabezado lo nombra:

- **Pieza** (nada seleccionado): el **Nombre** de la pieza y el ajuste **Curvas**.
- Un plano: un botón {{ui:Croquis en él}}.
- Una **Cara**: de qué tipo es (cara plana, cilindro con su radio y eje, cono, esfera o toro), su área, qué operación la creó y, para una cara plana, {{ui:Croquis en esta cara}}, {{ui:Normal a}}, {{ui:Exportar cara como DXF}}, {{ui:Extruir desde ella}}, {{ui:Cortar en ella}} y {{ui:Agujero aquí}} (consulte [Tire de una cara entera o empújela](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Una **Arista**: su tipo (recta, un círculo con su centro y radio, o una curva), su longitud y las dos caras entre las que se encuentra (como "Extrude1 end face and Extrude1 side"), con botones {{ui:Redondeo}} y {{ui:Chaflán}}.
- Varias aristas o caras seleccionadas con {{key:Shift}}: cuántas, con {{ui:Redondeo}} y {{ui:Chaflán}} para aristas, y {{ui:Borrar selección}}.
- Una operación: sus números y opciones, las cotas de su croquis y luego {{ui:Suprimir}}, {{ui:Retroceder hasta aquí}}, {{ui:Subir}}, {{ui:Bajar}}, {{ui:Eliminar}} y su **Nombre**.
- Un croquis abierto: su estado, las relaciones que puede añadir a la selección, la lista de relaciones y cotas, **Añadir por coordenadas**, y {{ui:Salir del croquis}}, {{ui:Ajustar}} y {{ui:Exportar como DXF}}.
- En la hoja de plano: los ajustes de sección y detalle, o el símbolo GD&T seleccionado.
- En un ensamblaje: el ensamblaje, la pieza seleccionada o la unión seleccionada.

Cada cuadro numérico surte efecto al pulsar {{key:Enter}} o {{key:Tab}}, o al pulsar fuera. La pieza se reconstruye al instante; no hay botón Aceptar. Use {{key:Mod+Z}} para volver atrás.

## La barra de estado (abajo)

- A la izquierda, las coordenadas del puntero en el croquis (solo mientras hay un croquis abierto).
- En el centro, mensajes: qué hacer a continuación y por qué se rechazó algo. Léala cuando parezca que no ocurre nada.
- Cerca de la derecha, el indicador del kernel: siempre "Kernel de malla" en esta versión. Sitúe el puntero sobre él para ver qué significa. Consulte [El kernel de malla](topic:solid-kernels).
- A la derecha, un indicador: "Reconstruyendo…" mientras la pieza se reconstruye, luego "Reconstruido en … ms" cuando todo va bien, o "1 operación con error". En un ensamblaje dice "Colocado en … ms" o cuenta los problemas de uniones.

Consulte también [Empiece un manual en Illustrate](topic:illustrate): el espacio de trabajo que crea manuales de ensamblaje a partir de sus piezas y ensamblajes.

## En una pantalla estrecha

Hasta 760 píxeles de ancho, como en un móvil, la vista ocupa la pantalla: la barra de herramientas es una sola fila que se desplaza hacia los lados, y los paneles se abren como hojas desde una barra inferior. {{ui:Herramientas}} oculta la barra de herramientas y {{ui:Mover}} la coloca en la parte inferior. Consulte [Trackpad, tacto y pantallas pequeñas](topic:trackpad-and-touch).
