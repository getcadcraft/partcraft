---
title: Viene de otro modelador paramétrico
summary: Cómo los hábitos de los modeladores paramétricos de escritorio se corresponden con PartCraft, y las diferencias que confunden a los usuarios experimentados en la primera hora.
keywords: cambio, migrar, familiar, administrador de operaciones, árbol de diseño, cota inteligente, extruir saliente, extruir corte, asistente de taladro, acoplamientos, detección de interferencias, barra de retroceso, administrador de propiedades, ratón, diferencias
from: fbacaee1
---

Si diseña piezas en SolidWorks, la mayoría de las ideas de PartCraft le resultarán familiares: croquis sobre los planos Frontal, Superior y Derecho, relaciones y cotas inteligentes, un historial de operaciones con una barra de retroceso, y ensamblajes colocados mediante acoplamientos. La forma de llegar a ellos cambia en algunos puntos, y esta primera versión hace menos. Esta página relaciona sus hábitos y enumera las sorpresas.

## Equivalencias

| Lo que ya conoce | En PartCraft |
|---|---|
| El árbol de diseño a la izquierda | El historial a la izquierda: planos, luego operaciones, con los croquis sangrados bajo la operación que los usa |
| Planos Frontal, Superior y Derecho | Los mismos tres, por el origen. Frontal es el plano XY, Superior es XZ, Derecho es YZ; Y apunta hacia arriba |
| Croquis sobre un plano o cara, luego la esquina de confirmación para salir | {{ui:Croquis}} ({{key:S}}) sobre un plano o cara plana seleccionados; {{ui:Salir}} o {{key:Esc}} hasta que se cierre |
| Smart Dimension | {{ui:Cota}} ({{key:D}}). Haga clic en uno o dos elementos, luego donde va el número. Según dónde lo coloque, elige horizontal, vertical o alineada |
| Agregar relaciones en el panel de propiedades | Seleccione elementos, luego los botones de relación en el panel derecho (Coincidente, Horizontal, Paralela, Tangente, Igual, etc.) |
| Relaciones automáticas al dibujar | Las referencias agregan relaciones de coincidencia, punto sobre curva, horizontal y vertical |
| Colores de croquis azul / negro / rojo | La misma idea: azul con definición insuficiente, negro totalmente definido, rojo sobredefinido. El indicador muestra los grados de libertad que quedan |
| Línea de centro para revoluciones | {{ui:Línea constructiva}} ({{key:N}}); {{ui:Revolución}} usa la primera línea constructiva salvo que elija otro eje |
| Redondeo de croquis | {{ui:Redondeo}} ({{key:F}}) en un croquis: haga clic en la esquina, escriba el radio |
| Alternar geometría de construcción | {{ui:Construcción}} ({{key:Q}}) |
| Saliente por extrusión | {{ui:Extruir}}: Ciego, Plano medio, Hasta cara / siguiente / vértice, Desfase desde cara, segunda dirección, conicidad, un contorno (Elegir regiones) |
| Corte por extrusión | {{ui:Cortar}}: empieza como Atravesar todo; cambie a Ciego para una cavidad |
| Saliente / corte por revolución | {{ui:Revolución}} / {{ui:Más}} › {{ui:Corte de revolución}} |
| Plano / eje / punto de referencia | {{ui:Más}} › {{ui:Plano}}, {{ui:Eje}}, {{ui:Punto}} (vea [Planos, ejes y puntos de referencia](topic:reference-geometry)) |
| Saliente o corte por barrido o solevación, ángulo de salida | {{ui:Más}} › {{ui:Ángulo de salida}} sobre caras planas (vea [Barrido, solevación y ángulo de salida](topic:sweep-loft-draft)). {{ui:Barrido}} y {{ui:Solevación}} todavía no están construidos en esta versión (necesitan un núcleo exacto) |
| Asistente de taladro | {{ui:Taladro}} en cada punto suelto del croquis: simple, avellanado, avellanado cónico (90° / 82°) o roscado ISO métrico M2–M24, pasante o ciego |
| Matriz lineal / circular, simetría | {{ui:Lineal}}, {{ui:Circular}}, {{ui:Simetría}} (operaciones o el cuerpo completo) |
| Redondeo y chaflán en aristas | {{ui:Redondeo}} / {{ui:Chaflán}}: haga clic en una arista, Shift+clic en más, luego el botón. Un solo radio; chaflanes iguales, de dos distancias o de distancia y ángulo. En esta versión, solo aristas rectas entre dos caras planas, y los redondeos que se encuentran en una esquina se cortan a inglete. Redondee o biselar aristas curvas en el croquis ({{ui:Redondeo}} en un croquis, {{key:F}}) |
| Vaciado | {{ui:Vaciado}}: haga clic en las caras planas para abrir, luego el botón. Un solo espesor de pared |
| Abrir un archivo STEP | {{ui:Abrir}}: se lee como triángulos, un cuerpo sólido sobre el cual construir ([Abrir un archivo STEP](topic:import-step)) |
| Editar operación, luego Aceptar | Haga clic en la operación; cambie los números a la derecha; se reconstruye mientras escribe. No hay Aceptar ni Cancelar: use {{key:Mod+Z}} |
| Editar croquis | Haga doble clic en el croquis en el historial |
| Reconstruir | Automática después de cada cambio. No hay tecla de reconstrucción |
| Suprimir / desactivar supresión | {{ui:Suprimir}} / {{ui:Desactivar supresión}} en el panel derecho |
| Arrastrar la barra de retroceso | {{ui:Retroceder hasta aquí}} en una operación; haga clic en "Barra de retroceso · avanzar" para volver |
| Arrastrar una operación en el árbol para reordenar | {{ui:Subir}} / {{ui:Bajar}} o {{key:Alt+Up}} / {{key:Alt+Down}}; se rechaza con el motivo cuando rompería una dependencia |
| Editar cotas haciendo doble clic en el modelo | Seleccione la operación: las cotas de su croquis aparecen en el panel derecho |
| Acoplamientos: coincidente, concéntrico, distancia, ángulo | {{ui:Unión}} ({{key:J}}): elija una cara plana en cada pieza; la unión las pone cara con cara. **Centrar en** un eje actúa como concéntrico; **Desfase** como distancia; **Ángulo** como ángulo |
| Componente fijo | La primera pieza está fija; {{ui:Convertirla en la pieza fija}} lo cambia |
| Insertar componente | {{ui:Agregar copia}} o {{ui:Duplicar}} (otra copia) o {{ui:Insertar}} (desde un archivo de pieza) |
| Editar pieza en el ensamblaje | {{ui:Editar pieza}}, luego {{ui:Volver}} |
| Detección de interferencias | {{ui:Interferencia}} |
| Mover un componente para ver el movimiento | Arrastre el control deslizante de ángulo o desfase de una unión giratoria o deslizante; {{ui:Comprobar interferencias en el movimiento}} lo barre. Una pieza sin unión: **Mover a mano** (flechas para arrastrar, o valores escritos) |
| Medir / inspeccionar | {{ui:Vistas}}, luego {{ui:Medir}} ({{key:M}}): distancias, ángulos, radios, áreas; {{ui:Propiedades físicas}} |
| Vista explosionada, lista de materiales | En un ensamblaje sin nada seleccionado: **Vistas explosionadas** y **Lista de materiales** en el panel derecho |
| Propiedades físicas | El cuadro **Pieza**: volumen, área superficial y tamaño del sólido facetado (algo bajo en piezas redondas). Sin masa: todavía no hay materiales |
| Guardar, Guardar como STEP | {{ui:Guardar}} descarga un `.partcraft.json`; {{ui:Exportar}} tiene STL, 3MF, STEP exacto (AP242 o AP214), STEP facetado, DXF y un dibujo en PDF |
| Crear un dibujo desde la pieza | {{ui:Dibujo}}: una hoja A3 automática con tres vistas, isométrica, una sección, un detalle, datos de referencia, marcos de control de elementos y símbolos de acabado. Solo se acotan las dimensiones generales |
| Girar con el botón central | **Arrastre con el botón izquierdo** para girar aquí. El botón central o derecho desplaza la vista. La rueda hace zoom en el puntero |
| Orientación de vista, Normal a | Menú {{ui:Vistas}}; {{ui:Normal a}} para una cara, plano o croquis elegido |
| Ajustar a la pantalla (F) | {{key:F}}, o {{ui:Ajustar}} (en un croquis, {{key:F}} es la herramienta Redondeo) |
| Menús contextuales del clic derecho | Ninguno. El botón derecho arrastrado desplaza; en un croquis, el clic derecho termina una cadena de líneas |

:::tip
Si ya conoce SolidWorks, elija el estilo de menú {{ui:Árbol de operaciones}} en {{ui:Configuración}} › {{ui:PartCraft}} › {{ui:Menús, teclas y ratón}}: una cinta con las pestañas Operaciones, Croquis, Superficies, Evaluar, Dibujo, Ensamblaje y Vista; el botón central orbita, Shift y el botón central desplazan, y el botón izquierdo solo elige. Vea [Menús, teclas y ratón](topic:menus-keys-and-mouse).
:::

## Diferencias que confunden a la gente

**Todo el croquis es el perfil.** La extrusión y la revolución usan cada bucle cerrado del croquis. No puede elegir una región ni un contorno de un croquis para una operación. Use un croquis por operación.

**Qué croquis toma una operación.** Una operación usa el croquis que acaba de cerrar o el seleccionado en el historial. Sin nada seleccionado, toma el croquis más reciente que ninguna operación use todavía. Si toma el equivocado, seleccione el croquis correcto y vuelva a elegir la operación.

**Los cambios se aplican mientras escribe.** No hay un cuadro de diálogo de operación con Aceptar y Cancelar. Cada número reconstruye de inmediato, y {{key:Mod+Z}} es el camino de regreso. La lista de deshacer abarca por igual las ediciones de croquis, las operaciones y los ajustes.

**La sobredefinición nunca se permite en silencio.** No hay cotas controladas (de referencia). Una cota que las otras relaciones ya fijan se informa como sobredefinida ("ya está implícita. Elimínela."). Una cota en conflicto deja la geometría sin cambios y se pone en rojo. Elimine una, o deshaga.

**Los barridos y las solevaciones todavía no están construidos; los redondeos, chaflanes, vaciados y ángulos de salida tienen límites.** Esta versión de PartCraft construye cada pieza con un núcleo de malla; el indicador de la barra de estado siempre dice "Núcleo de malla". Los redondeos y chaflanes funcionan en aristas rectas entre dos caras planas, y donde los redondeos se encuentran en una esquina se cortan a inglete, no se funden. Los vaciados abren, y los ángulos de salida inclinan, solo caras planas. Las operaciones que necesitan un núcleo exacto siguen siendo seleccionables, pero indican "todavía no construido" al elegirse. Vea [El núcleo de malla](topic:solid-kernels) y [Lo que todavía no está disponible](topic:not-built-yet).

**Dos botones llamados Redondeo.** En un croquis, {{ui:Redondeo}} ({{key:F}}) redondea una esquina del croquis. En la pieza, el {{ui:Redondeo}} del grupo Operaciones redondea aristas sólidas (aristas rectas entre caras planas en esta versión). No hay barrido ni solevación en esta versión: vea [Lo que todavía no está disponible](topic:not-built-yet).

**Los taladros necesitan puntos sueltos.** {{ui:Taladro}} perfora en puntos creados con la herramienta Punto. Los centros de círculos y los extremos de líneas no cuentan.

**Atravesar todo es solo para cortes.** Un saliente necesita una profundidad. Todavía no hay condiciones finales de "hasta vértice / superficie / siguiente".

**El sólido es facetado.** El núcleo de malla construye las caras redondas a partir de facetas planas, así que la vista, los volúmenes y las exportaciones STL y 3MF se hacen con ellas: **Curvas** en el panel de la pieza las hace más finas. La exportación STEP exacta no: escribe las caras redondas sobre sus superficies verdaderas.

**Solo milímetros.** Todavía no hay ajuste en pulgadas. Multiplique las medidas en pulgadas por 25.4 cuando las escriba.

**Y apunta hacia arriba.** El plano Frontal lo mira de frente y Superior mira hacia abajo a la pieza, como espera, pero el eje arriba del mundo es Y. Las exportaciones STL, 3MF y STEP exacto se giran a Z hacia arriba; el STEP facetado mantiene Y hacia arriba.

**Los acoplamientos son caras, no pares de geometría.** Una unión siempre empieza en dos caras planas puestas cara con cara. Para un pasador en un agujero, elija la cara plana alrededor del agujero y el hombro del pasador, luego defina **Centrar en** con el eje del agujero y el eje de revolución del pasador. Las piezas que las uniones no alcanzan se quedan donde se insertaron; no se pueden arrastrar. Las uniones en un bucle no se resuelven.

**Guardar es una descarga.** No hay un archivo que sobrescriba una y otra vez. Cada guardado es un archivo nuevo en su carpeta de descargas. Nombre primero la pieza, y guarde sus archivos en una carpeta de proyecto.

**Sin menús contextuales, sin pestañas del administrador de comandos.** Todo está en la barra de herramientas y el panel derecho, y la barra cambia según lo que esté haciendo: las herramientas de croquis aparecen solo en un croquis, y las de ensamblaje solo en un ensamblaje.

**Las teclas son letras sueltas dentro de un croquis.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} y {{key:S}} eligen herramientas sin modificador. Vea [Teclas y ratón](topic:keyboard).
