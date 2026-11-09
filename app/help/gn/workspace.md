---
title: La pantalla de PartCraft
summary: Un recorrido por cada barra y panel: la barra de herramientas y cómo cambia, el historial, los datos de la pieza, la vista 3D, el panel de propiedades y la barra de estado.
keywords: pantalla, diseño, barra de herramientas, historial, árbol de elementos, propiedades, panel, barra de estado, interfaz, ui, recorrido, pantalla completa
from: 7394fc49
---

La pantalla tiene cinco partes: la barra de herramientas arriba, el historial a la izquierda, la vista 3D en el centro, el panel de propiedades a la derecha y la barra de estado abajo. Por encima de todas está la barra de la app CadCraft.

## La barra de la app

La barra fina de arriba de todo pertenece al sitio de CadCraft, no a PartCraft en sí. Muestra el nombre de la app y dónde corre, un menú de versiones, **Acerca de PartCraft**, el botón de modo de pantalla y el selector de tema Papel / Modelo.

- **Papel** son líneas oscuras sobre una hoja clara. **Modelo** son líneas claras sobre un fondo oscuro. Los colores del boceto siguen al tema.
- {{ui:Configuración}} (el engranaje, o {{key:Mod+,}}) tiene una pestaña {{ui:PartCraft}}: qué botón del mouse gira la vista, rueda del mouse o trackpad, y las relaciones mientras se hace un boceto. Ver [Configuración de PartCraft](topic:settings).
- El botón de modo de pantalla, o {{key:Ctrl+Shift+F}}, recorre normal, pantalla completa y pantalla completa con las barras ocultas. Con las barras ocultas, llevá el puntero al borde superior (o tocá ahí) para que vuelvan. {{key:Esc}} vuelve a normal. Esta tecla es {{key:Ctrl+Shift+F}} también en Mac, no ⌘.

## La barra de herramientas

La barra de herramientas está agrupada. Cambia según lo que estés haciendo, para que entre en una fila:

| Grupo | Botones | Se muestra |
|---|---|---|
| Archivo | {{ui:Nuevo}}, {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Exportar}} (un menú) | Siempre |
| Boceto | {{ui:Boceto}} | Cuando no hay ningún boceto abierto |
| Boceto | {{ui:Salir}}, {{ui:Línea}}, {{ui:Rectángulo}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Punto}}, {{ui:Línea de eje}}, {{ui:Redondear}}, {{ui:Cota}}, {{ui:Construcción}} | Solo mientras hay un boceto abierto |
| Elementos | {{ui:Extruir}}, {{ui:Cortar}}, {{ui:Revolución}}, {{ui:Agujero}}, {{ui:Lineal}}, {{ui:Circular}}, {{ui:Espejo}}, {{ui:Redondear}}, {{ui:Chaflán}}, {{ui:Cáscara}}, {{ui:Más}} (un menú: Corte por revolución, Plano, Eje, Punto, Barrido, Loft, Inclinación) | En la pieza, no mientras hay un boceto o el plano abierto. Redondear y Chaflán funcionan en bordes rectos entre dos caras planas; Cáscara e Inclinación en caras planas. Barrido y Loft todavía no están hechos en esta versión (necesitan un núcleo exacto); al hacer clic en uno, se avisa |
| Elementos | {{ui:Listo}} | Solo mientras elegís bordes o caras para un redondeo, chaflán, cáscara o inclinación |
| Plano | {{ui:Plano}} | En la pieza (disponible una vez que la pieza tiene un sólido) |
| Plano | {{ui:Referencia}}, {{ui:Marco}}, {{ui:Acabado}}, {{ui:Detalle}}, {{ui:PDF}}, {{ui:Atrás}} | Solo en la hoja del plano |
| Ensamblaje | {{ui:Ensamblaje}} | En la pieza (disponible una vez que la pieza tiene un sólido) |
| Ensamblaje | {{ui:Agregar copia}}, {{ui:Insertar}}, {{ui:Unión}}, {{ui:Interferencia}}, {{ui:Editar pieza}}, {{ui:Cerrar}} | Solo en un conjunto |
| Ensamblaje | {{ui:Atrás}} | Mientras editás una pieza desde un conjunto |
| Editar | {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Más}} (un menú: Cortar, Copiar, Pegar, Pegar en el lugar, Duplicar, Eliminar, Seleccionar todo, Deseleccionar todo) | Siempre; cada elemento actúa sobre el boceto, el historial o el conjunto en el que estás |
| Vista | {{ui:Ajustar}}, {{ui:Normal a}}, {{ui:Vistas}} (un menú: Medir, Propiedades de masa, Sección, Inclinación, Zebra, Curvatura, {{ui:Planos base}}, luego Isométrica, Frontal, Posterior, Superior, Inferior, Derecha, Izquierda) | Siempre |

Pasá el puntero sobre un botón para ver qué hace y cuál es su tecla. Un botón en gris no se puede usar ahora: por ejemplo los botones de elementos mientras hay un boceto abierto, o {{ui:Unión}} antes de que el conjunto tenga dos piezas.

El menú {{ui:Más}} del grupo Editar lista cada acción de edición con su tecla. Sobre qué actúan copiar y pegar depende de dónde estés; ver [Copiar, pegar y duplicar](topic:copy-paste). La descripción de un elemento en gris dice por qué no puede actuar ahora.

El menú {{ui:Exportar}} contiene {{ui:STL, para impresión 3D}}, {{ui:3MF, para impresión 3D}}, {{ui:STEP AP242 (sólido exacto)}}, {{ui:STEP AP214 (sólido exacto)}}, {{ui:STEP (facetado, núcleo de malla)}}, {{ui:STEP AP214 (facetado, núcleo de malla)}}, {{ui:DXF del boceto o de la cara plana}} y {{ui:Plano (PDF): vistas, corte, detalle, GD&T}}. Los dos STEP exactos están en gris: todavía no están hechos en esta versión, así que usá {{ui:STEP (facetado, núcleo de malla)}}.

## El historial (izquierda)

El panel de la izquierda es el historial de elementos de la pieza, la lista que PartCraft reconstruye de arriba abajo.

- El encabezado es el nombre de la pieza ("Part1" hasta que la renombres).
- **Plano frontal**, **Plano superior** y **Plano derecho** van primero. Hacé clic en uno para seleccionarlo; se resalta en la vista.
- Debajo están tus elementos, en el orden en que los hiciste. Un boceto que usa un elemento aparece sangrado debajo de ese elemento.
- Una marca al final de una fila indica su estado:

| Marca | Significado |
|---|---|
| (ninguna) | Construido, y el boceto está totalmente definido |
| − | Un boceto subdefinido (todavía se puede mover) |
| + | Un boceto sobredefinido |
| ⚠ | Construido, con una advertencia (pasá el puntero para leerla) |
| ⚠ error | El elemento falló. Pasá el puntero para ver por qué, o hacé clic |
| ⚠ no construido | El elemento necesita otro que falló o que está apagado |
| apagado | Suprimido |

- Cada elemento muestra su número principal después del nombre, como "25 mm" en un Extruir o "Ø6.6 pasante" en un agujero. Hacé doble clic en el número, o presioná {{key:F2}} en la fila, para cambiarlo ahí mismo. Ver [Cambiar medidas](topic:change-sizes).
- Hacé clic en un elemento para editarlo a la derecha. Hacé doble clic en un boceto para abrirlo.
- Al retroceder, aparece en la lista una fila **Barra de retroceso · avanzar**. Los elementos debajo quedan en gris y sin construir.
- Con una fila enfocada, {{key:Up}} y {{key:Down}} se mueven entre filas, y {{key:Alt+Up}} / {{key:Alt+Down}} mueven el elemento en sí, cuando el historial lo permite.

En un conjunto, el mismo panel lista **Piezas** (la primera está marcada "fijada") y **Uniones**.

### Datos de la pieza

Debajo del historial, el cuadro **Pieza** lista el **Volumen**, el **Área superficial**, el **Tamaño (X × Y × Z)**, los **Agujeros pasantes**, los **Cuerpos**, los **Triángulos**, la cantidad de **Elementos** y cuántos están **con error**. Los volúmenes y áreas son del sólido facetado que construye el núcleo de malla, algo menores que el valor real en formas redondas (ver [Elementos y sus opciones](topic:features#curves-resolution)).

En un conjunto, el cuadro lleva el encabezado **Ensamblaje**: Piezas, Instancias, Uniones, Sin unir e Interferencia.

## La vista 3D (centro)

La vista muestra el sólido, los planos base y cualquier boceto que todavía no use un elemento.

Los planos base se dibujan completos mientras la pieza está vacía. Cuando tiene un sólido, se retiran: se dibujan tenues para no tapar la pieza, y los clics los atraviesan hasta llegar a la pieza. Vuelven a verse completos mientras elegís dónde hacer un boceto ({{ui:Boceto}} sin nada elegido) y cuando seleccionás uno en el historial. {{ui:Vistas}} › {{ui:Planos base}} los oculta del todo; aun así se muestran mientras elegís dónde hacer un boceto. PartCraft recuerda esa elección.

- Arrastrá para girar la pieza, clic derecho o central para desplazar, y rueda del mouse para hacer zoom en el puntero. Detalles en [Teclas y mouse](topic:keyboard).
- Pasá el puntero sobre una cara, un borde o un plano para ver cómo se ilumina. Hacé clic para elegirlo. Las caras se resaltan completas, y los bordes se dibujan y se eligen enteros. {{key:Shift}}+clic reúne varios bordes o caras. Quedan marcados.
- El cubo de vista, arriba a la derecha, gira con la pieza: hacé clic en una cara, un borde o una esquina para mirar desde ahí, arrastralo para girar, y el botón de casa vuelve al inicio. Ver [El cubo de vista](topic:view-cube).
- Una Extrusión seleccionada muestra una flecha naranja en su cara final, y una Revolución una flecha curva al final de su giro: arrastrala para cambiar la profundidad o el ángulo, o escribí en la caja al lado. Ver [Cambiar medidas](topic:change-sizes#drag-it-in-the-view).
- Cuando una pieza está vacía, una caja con el título **Comenzar una pieza** lista los primeros pasos.
- Soltá un archivo `.partcraft.json` o `.partcraft-asm.json` en cualquier parte de la vista para abrirlo. Un archivo `.step`, `.stp`, `.stl`, `.obj`, `.3mf` o `.3dm` soltado ahí se abre como cuerpo sólido.

### Mientras elegís bordes o caras

Después de {{ui:Redondear}}, {{ui:Chaflán}} o {{ui:Cáscara}} sin nada elegido (o de {{ui:Seleccionar aristas}} en ese elemento), la pieza se muestra como estaba antes de ese elemento. Hacé clic en bordes o caras para agregarlos o quitarlos; sus marcas muestran cuáles están dentro. {{ui:Listo}} o {{key:Esc}} termina. Ver [Redondear, biselar y ahuecar](topic:fillet-chamfer-shell).

### En la hoja del plano

{{ui:Plano}} reemplaza la vista 3D por la hoja de plano A3. La rueda hace zoom, arrastrar con clic derecho o central desplaza, y {{key:F}} ajusta. Ver [Hacer un plano](topic:drawing-pdf).

### Mientras hay un boceto abierto

La vista se gira para mirar de frente al plano del boceto, y aparece una capa de boceto 2D encima. La pieza muestra solo los elementos hechos antes de este boceto. Una franja arriba a la izquierda muestra el chip de estado del boceto ("Totalmente definido", "Subdefinido · 3 grados de libertad" y así) y su nombre, como "Sketch2 en una cara de Extrude1".

## El panel de propiedades (derecha)

El panel de la derecha muestra lo que está seleccionado, y su encabezado lo nombra:

- **Pieza** (nada seleccionado): el **Nombre** de la pieza y la configuración de **Curvas**.
- Un plano: un botón {{ui:Boceto sobre él}}.
- Una **Cara**: qué tipo es (Cara plana, Cilindro con su radio y eje, Cono, Esfera o Toro), su área, qué elemento la hizo, y para una cara plana {{ui:Boceto sobre esta cara}}, {{ui:Normal a}}, {{ui:Exportar cara como DXF}}, {{ui:Extruir desde ella}}, {{ui:Cortar hacia dentro}} y {{ui:Agujero aquí}} (ver [Tirar o empujar una cara entera](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Un **Borde**: su tipo (recto, un círculo con su centro y radio, o una curva), su longitud y las dos caras entre las que está (como "cara final de Extrude1 y lateral de Extrude1"), con los botones {{ui:Redondear}} y {{ui:Chaflán}}.
- Varios bordes o caras elegidos con {{key:Shift}}: cuántos, con {{ui:Redondear}} y {{ui:Chaflán}} para los bordes, y {{ui:Limpiar}}.
- Un elemento: sus números y opciones, las medidas de su boceto, y luego {{ui:Suprimir}}, {{ui:Retroceder hasta aquí}}, {{ui:Subir}}, {{ui:Bajar}}, {{ui:Eliminar}} y su **Nombre**.
- Un boceto abierto: su estado, las relaciones que podés agregar a la selección, la lista de relaciones y cotas, **Agregar por coordenadas**, y {{ui:Salir del boceto}}, {{ui:Ajustar}} y {{ui:Exportar como DXF}}.
- En la hoja del plano: la configuración de sección y de detalle, o el símbolo GD&T elegido.
- En un conjunto: el conjunto, la pieza elegida o la unión elegida.

Cada caja de número se aplica al presionar {{key:Enter}} o {{key:Tab}}, o al hacer clic afuera. La pieza se reconstruye enseguida; no hay botón Aceptar. Usá {{key:Mod+Z}} para volver atrás.

## La barra de estado (abajo)

- A la izquierda, las coordenadas del puntero en el boceto (solo mientras hay un boceto abierto).
- En el centro, mensajes: qué hacer después, y por qué algo fue rechazado. Leélo cuando parezca que nada pasa.
- Cerca de la derecha, el chip del núcleo: siempre "Núcleo de malla" en esta versión. Pasá el puntero para ver qué significa. Ver [El núcleo de malla](topic:solid-kernels).
- A la derecha, un chip: "Reconstruyendo…" mientras la pieza se reconstruye, después "Reconstruida en … ms" cuando todo está bien, o "1 elemento con error". En un conjunto dice "Ubicado en … ms" o cuenta los problemas de unión.

Ver también [Empezar un manual en Ilustrar](topic:illustrate): el espacio de trabajo que hace manuales de ensamblaje a partir de tus piezas y conjuntos.

## En una pantalla angosta

Hasta 760 píxeles de ancho, como en un teléfono, la vista ocupa toda la pantalla: la barra de herramientas es una fila que se desplaza hacia los costados, y los paneles se abren como hojas desde una barra abajo. {{ui:Herramientas}} oculta la barra de herramientas y {{ui:Mover}} la pone abajo. Ver [Trackpad, táctil y pantallas pequeñas](topic:trackpad-and-touch).
