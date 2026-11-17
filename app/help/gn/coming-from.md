---
title: Viniendo de otro modelador paramétrico
summary: Cómo los hábitos de los modeladores paramétricos de escritorio se corresponden con PartCraft, y las diferencias que confunden a los usuarios experimentados en la primera hora.
keywords: cambio, migrar, familiar, administrador de elementos, árbol de diseño, cota inteligente, extrusión de saliente, extrusión de corte, asistente de agujeros, acoplamientos, detección de interferencias, barra de retroceso, panel de propiedades, mouse, diferencias
from: fbacaee1
---

Si diseñás piezas en SolidWorks, la mayoría de las ideas de PartCraft te resultarán familiares: bocetos en los planos Front, Top y Right, relaciones y cotas inteligentes, un historial de elementos con una barra de retroceso, y conjuntos ubicados por acoplamientos. La forma de llegar a ellas es distinta en algunos puntos, y esta primera versión hace menos. Esta página relaciona tus hábitos y enumera las sorpresas.

## Hábitos, relacionados

| Estás acostumbrado a | En PartCraft |
|---|---|
| El árbol de diseño a la izquierda | El historial a la izquierda: planos, después elementos, con los bocetos sangrados debajo del elemento que los usa |
| Planos Front, Top y Right | Los mismos tres, por el origen. Front es el plano XY, Top es XZ, Right es YZ; Y apunta hacia arriba |
| Boceto sobre un plano o cara, después la esquina de confirmación para salir | {{ui:Boceto}} ({{key:S}}) sobre un plano elegido o una cara plana; {{ui:Salir}} o {{key:Esc}} hasta que se cierre |
| Cota inteligente | {{ui:Cota}} ({{key:D}}). Hacé clic en uno o dos elementos, después en dónde va el número. Según dónde lo pongas elige horizontal, vertical o alineada |
| Agregar relaciones en el panel de propiedades | Elegí elementos, después los botones de relación en el panel derecho (Coincidente, Horizontal, Paralela, Tangente, Igual y así sucesivamente) |
| Relaciones automáticas mientras dibujás | Los ajustes agregan relaciones de coincidencia, punto sobre curva, horizontal y vertical |
| Colores de boceto azul / negro / rojo | La misma idea: azul subdefinido, negro totalmente definido, rojo sobredefinido. La etiqueta muestra los grados de libertad que quedan |
| Línea de eje para revoluciones | {{ui:Línea de eje}} ({{key:N}}); {{ui:Revolución}} usa la primera línea de eje salvo que elijas otro eje |
| Redondeo de boceto | {{ui:Redondear}} ({{key:F}}) en un boceto: hacé clic en la esquina, escribí el radio |
| Interruptor de geometría de construcción | {{ui:Construcción}} ({{key:Q}}) |
| Saliente por extrusión | {{ui:Extruir}}: Ciego, Plano medio, Hasta cara / siguiente / vértice, Desplazamiento desde cara, segunda dirección, conicidad, un contorno (Elegir regiones) |
| Corte por extrusión | {{ui:Cortar}}: empieza como Pasante total; cambiá a Ciego para un bolsillo |
| Saliente / corte por revolución | {{ui:Revolución}} / {{ui:Más}} › {{ui:Corte de revolución}} |
| Plano / eje / punto de referencia | {{ui:Más}} › {{ui:Plano}}, {{ui:Eje}}, {{ui:Punto}} (ver [Planos, ejes y puntos de referencia](topic:reference-geometry)) |
| Saliente o corte por barrido / loft, desmoldeo | {{ui:Más}} › {{ui:Desmoldeo}} sobre caras planas (ver [Barrido, loft y desmoldeo](topic:sweep-loft-draft)). {{ui:Barrido}} y {{ui:Loft}} todavía no están construidos en esta versión (necesitan un núcleo exacto) |
| Asistente de agujeros | {{ui:Agujero}} en cada punto de boceto suelto: simple, avellanado, avellanado cónico (90° / 82°) o roscado ISO métrico M2–M24, pasante o ciego |
| Patrón lineal / circular, reflejo | {{ui:Lineal}}, {{ui:Circular}}, {{ui:Espejo}} (elementos o el cuerpo completo) |
| Redondeo y chaflán en aristas | {{ui:Redondear}} / {{ui:Chaflán}}: hacé clic en una arista, {{key:Shift}}+clic para más, después el botón. Un radio; chaflanes iguales, de dos distancias o distancia-ángulo. En esta versión solo aristas rectas entre dos caras planas, y los redondeos que se encuentran en una esquina se achaflanan a inglete. Redondeá o biselá aristas curvas en el boceto ({{ui:Redondear}} en un boceto, {{key:F}}) |
| Vaciado | {{ui:Cáscara}}: hacé clic en las caras planas a abrir, después el botón. Un espesor de pared |
| Abrir un archivo STEP | {{ui:Abrir}}: se lee como triángulos, un cuerpo sólido sobre el que construir ([Abrir un archivo STEP](topic:import-step)) |
| Editar elemento, después Aceptar | Hacé clic en el elemento; cambiá los números a la derecha; se reconstruye mientras escribís. No hay Aceptar ni Cancelar: usá {{key:Mod+Z}} |
| Editar boceto | Hacé doble clic en el boceto en el historial |
| Reconstruir | Automático después de cada cambio. No hay tecla de reconstrucción |
| Suprimir / reactivar | {{ui:Suprimir}} / {{ui:Reactivar}} en el panel derecho |
| Arrastrar la barra de retroceso | {{ui:Retroceder hasta aquí}} sobre un elemento; hacé clic en "Barra de retroceso · avanzar" para volver |
| Arrastrar un elemento en el árbol para reordenar | {{ui:Subir}} / {{ui:Bajar}} o {{key:Alt+Up}} / {{key:Alt+Down}}; se rechaza con el motivo cuando rompería una dependencia |
| Editar cotas haciendo doble clic en el modelo | Elegí el elemento: las cotas de su boceto aparecen en el panel derecho |
| Acoplamientos: coincidente, concéntrico, distancia, ángulo | {{ui:Unión}} ({{key:J}}): elegí una cara plana en cada pieza; la unión las pone cara a cara. **Centrar en** un eje actúa como concéntrico; **Desplazamiento** como distancia; **Ángulo** como ángulo |
| Componente fijo | La primera pieza está anclada; {{ui:Hacerla la pieza anclada}} la cambia |
| Insertar componente | {{ui:Agregar copia}} o {{ui:Duplicar}} (otra copia) o {{ui:Insertar}} (desde un archivo de pieza) |
| Editar pieza en el conjunto | {{ui:Editar pieza}}, después {{ui:Atrás}} |
| Detección de interferencias | {{ui:Interferencia}} |
| Mover un componente para ver el movimiento | Arrastrá el control deslizante de ángulo o desplazamiento de una unión de revolución o deslizante; {{ui:Verificar el movimiento por choques}} lo barre. Una pieza sin unión: **Mover a mano** (flechas para arrastrar, o valores escritos) |
| Medir / inspeccionar | {{ui:Vistas}}, después {{ui:Medir}} ({{key:M}}): distancias, ángulos, radios, áreas; {{ui:Propiedades de masa}} |
| Vista explosionada, lista de materiales | En un conjunto sin nada elegido: **Vistas explosionadas** y **Lista de materiales** en el panel derecho |
| Propiedades de masa | La casilla **Pieza**: volumen, área superficial, tamaño, del sólido facetado (un poco bajo en piezas redondas). Sin masa: todavía no hay materiales |
| Guardar, Guardar como STEP | {{ui:Guardar}} descarga un `.partcraft.json`; {{ui:Exportar}} tiene STL, 3MF, STEP exacto (AP242 o AP214), STEP facetado, DXF y un plano PDF |
| Hacer un plano desde la pieza | {{ui:Plano}}: una hoja A3 automática con tres vistas, isométrica, una sección, un detalle, datums, marcos de control de forma y símbolos de acabado. Solo se acotan los tamaños generales |
| Arrastrar con el botón central para girar | **Arrastrar con el botón izquierdo** gira acá. Arrastrar con el botón central o derecho desplaza. La rueda hace zoom en el puntero |
| Orientación de vista, Normal a | Menú {{ui:Vistas}}; {{ui:Normal a}} para una cara, plano o boceto elegido |
| Ajustar a la ventana (F) | {{key:F}}, o {{ui:Ajustar}} (en un boceto, {{key:F}} es la herramienta Redondear) |
| Menús contextuales del botón derecho | Ninguno. Arrastrar con el botón derecho desplaza; en un boceto, el clic derecho termina una cadena de líneas |

:::tip
Si tus manos conocen SolidWorks, elegí el estilo de menú {{ui:Árbol de elementos}} en {{ui:Configuración}} › {{ui:PartCraft}} › {{ui:Menús, teclas y mouse}}: una cinta con las pestañas Elementos, Boceto, Superficies, Evaluar, Plano, Ensamblaje y Vista, el botón central orbita, {{key:Shift}} y el botón central desplazan, y el botón izquierdo solo elige. Ver [Menús, teclas y mouse](topic:menus-keys-and-mouse).
:::

## Diferencias que confunden a la gente

**Todo el boceto es el perfil.** Extrusión y Revolución usan cada lazo cerrado del boceto. No podés elegir una región ni un contorno de un boceto para un elemento. Usá un boceto por elemento.

**Qué boceto toma un elemento.** Un elemento usa el boceto que acabás de cerrar o el que está elegido en el historial. Sin nada elegido toma el boceto más nuevo que todavía no usa ningún elemento. Si toma el equivocado, elegí el boceto correcto y volvé a elegir el elemento.

**Los cambios se aplican mientras escribís.** No hay un cuadro de diálogo de elemento con Aceptar y Cancelar. Cada número reconstruye de inmediato, y {{key:Mod+Z}} es el camino de vuelta. La lista de deshacer cubre por igual ediciones de boceto, elementos y ajustes.

**El sobredefinido nunca se tolera en silencio.** No hay cotas conducidas (de referencia). Una cota que las otras relaciones ya fijan se informa como sobredefinida ("ya está implícita. Eliminala."). Una cota en conflicto deja la geometría sin tocar y se pone roja. Eliminá una, o deshacé.

**Barridos y lofts todavía no están construidos; redondeos, chaflanes, vaciados y desmoldeos tienen límites.** Esta versión de PartCraft construye cada pieza con un núcleo de malla; la etiqueta de la barra de estado siempre dice "Núcleo de malla". Los redondeos y chaflanes funcionan en aristas rectas entre dos caras planas, y donde los redondeos se encuentran en una esquina se achaflanan a inglete, no se mezclan. Los vaciados abren, y los desmoldeos inclinan, solo caras planas. Los elementos que necesitan un núcleo exacto siguen siendo clicables, pero dicen "todavía no construido" cuando se eligen. Ver [El núcleo de malla](topic:solid-kernels) y [Qué todavía no está construido](topic:not-built-yet).

**Dos botones llamados Redondear.** En un boceto, {{ui:Redondear}} ({{key:F}}) redondea una esquina del boceto. En la pieza, el {{ui:Redondear}} del grupo Elementos redondea aristas sólidas (aristas rectas entre caras planas en esta versión). No hay barrido ni loft en esta versión: ver [Qué todavía no está construido](topic:not-built-yet).

**Los agujeros necesitan puntos sueltos.** {{ui:Agujero}} perfora en puntos hechos con la herramienta Punto. Los centros de círculos y los extremos de líneas no cuentan.

**Pasante total es solo para cortes.** Un saliente necesita una profundidad. Todavía no hay condiciones de fin "hasta vértice / superficie / siguiente".

**El sólido es facetado.** El núcleo de malla construye las caras redondas a partir de facetas planas, así que la vista, los volúmenes y las exportaciones STL y 3MF se hacen con ellas: **Curvas** en el panel de la pieza las vuelve más finas. La exportación STEP exacta no: escribe las caras redondas sobre sus superficies verdaderas.

**Solo milímetros.** Todavía no hay ajuste de pulgadas. Multiplicá los tamaños en pulgadas por 25.4 cuando los escribas.

**Y es hacia arriba.** El plano Front te mira y Top mira la pieza desde arriba, como esperás, pero el eje hacia arriba del mundo es Y. Las exportaciones STL, 3MF y STEP exacto se giran a Z hacia arriba; el STEP facetado mantiene Y hacia arriba.

**Los acoplamientos son caras, no pares de geometría.** Una unión siempre empieza desde dos caras planas puestas cara a cara. Para un pasador en un agujero, elegí la cara plana alrededor del agujero y el hombro del pasador, después poné **Centrar en** en el eje del agujero y en el eje de revolución del pasador. Las piezas que no alcanzan las uniones quedan donde se insertaron; no podés arrastrarlas. Las uniones de un lazo no se resuelven.

**Guardar es una descarga.** No hay un archivo que sigas sobrescribiendo. Cada guardado es un archivo nuevo en tu carpeta de descargas. Poné nombre a la pieza primero, y guardá tus archivos en una carpeta de proyecto.

**Sin menús contextuales, sin pestañas de gestor de comandos.** Todo está en la barra de herramientas y el panel derecho, y la barra de herramientas cambia según lo que estés haciendo: las herramientas de boceto aparecen solo en un boceto, las de conjunto solo en un conjunto.

**Dentro de un boceto, las teclas son letras sueltas.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} y {{key:S}} eligen herramientas sin modificador. Ver [Teclado y mouse](topic:keyboard).
