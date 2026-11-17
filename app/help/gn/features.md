---
title: Elementos y sus opciones
summary: Cada elemento de la barra de herramientas con sus ajustes, predeterminados y límites, desde extruir hasta redondear, cáscara y sólidos STEP importados, las acciones que comparten todos los elementos, y los ajustes de la pieza.
keywords: elementos, no hecho, extruir, cortar, revolucionar, corte de revolución, agujero, avellanado, patrón lineal, patrón circular, espejo, redondeo, chaflán, cáscara, importar, opciones, predeterminados, ajustes, resolución, curvas, facetas, suprimir, retroceso
from: ab3a598e
---

Los elementos se listan en el historial en el orden en que se hicieron, y se reconstruyen de arriba abajo. Cada uno lleva el nombre de su tipo con un número: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft construye cada elemento con el núcleo de malla. Fillet y Chamfer trabajan en aristas rectas entre dos caras planas, y Shell abre caras planas. Los sólidos importados necesitan un núcleo exacto, que esta versión no tiene: todavía no se construyen, y su sección de abajo los describe como una pieza hecha con una versión anterior que los conserva. Ver [El núcleo de malla](topic:solid-kernels) y [Lo que todavía no está hecho](topic:not-built-yet).

## Boceto

| Ajuste | Notas |
|---|---|
| Plane | Plano Front, Top o Right, o una cara plana. Se muestra, no se cambia: para mover un boceto, hacé uno nuevo |
| State | Totalmente definido, Subdefinido (con los grados de libertad), Sobredefinido, o Vacío |
| Geometry, Relations | Cuántas curvas, puntos y relaciones hay |
| Driving dimensions | Cada cota del boceto, editable |

Botones: {{ui:Edit sketch}}, {{ui:Export as DXF}}.

## Extruir y Cortar

{{ui:Extrude}} y {{ui:Cut}} crean el mismo elemento, empezando con ajustes distintos.

| Ajuste | Opciones | Extruir empieza en | Cortar empieza en |
|---|---|---|---|
| Operation | Boss (agregar material), Cut (quitar material), Intersect (mantener la superposición), New body (todavía no hecho en esta versión) | Boss | Cut |
| End | Blind (una profundidad), Mid-plane (en ambos sentidos), Through all | Blind | Through all |
| Depth (mm) | Mayor que 0, hasta 1.000.000 | 10 | 10 |
| Reverse direction | Off / on | Off | Off |

- Perfil: cada bucle cerrado de líneas sólidas, círculos y arcos del boceto. Los bucles dentro de bucles son agujeros.
- Through all funciona sólo para cortes. Llega a través de toda la pieza en el lado elegido.
- Un corte entra en el material, alejándose del lado saliente del plano del boceto; Reverse lo invierte.

## Revolucionar y corte de revolución

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Operation | Boss, Cut | Boss ({{ui:Revolve}}), Cut ({{ui:More}} › {{ui:Revolved cut}}) |
| Angle (°) | Mayor que 0, hasta 360 | 360 |
| Axis | Primera línea de eje centrada, cualquier línea o línea de eje del boceto, o un elemento de eje que queda en el plano del boceto | Primera línea de eje centrada |

- El perfil debe quedarse de un lado del eje. Puede tocarlo.
- El eje de una revolución lo pueden usar los Patrones circulares y las uniones de montaje.

## Agujero

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Type | Simple, Counterbore | Simple |
| Diameter (mm) | Mayor que 0 | 6 |
| Through all | On / off | On |
| Depth (mm) | Cuando Through all está off | 10 |
| Counterbore ⌀ | Más ancho que el agujero | 11 |
| Counterbore depth | Menos profundo que un agujero ciego | 6 |
| Reverse direction | Off / on | Off |

- Un agujero en cada punto suelto del boceto (puntos hechos con la herramienta Punto). El panel muestra cuántos.
- Los agujeros se perforan en escuadra con el plano del boceto, hacia el material.
- El eje de cada agujero lo pueden usar las uniones de montaje ("Hole1, hole 2").

## Patrón lineal

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Features to copy | Cualquier elemento sólido encima | El elemento seleccionado, si no el último elemento sólido |
| Direction | Eje X, eje Y, eje Z; una línea de un boceto anterior; el eje de una revolución; una arista elegida | Eje X (o la arista elegida al agregarlo) |
| Spacing (mm) | Cualquier número | 20 |
| Count | 1 a 1000, incluido el original | 3 |
| Reverse direction | Off / on | Off |

## Patrón circular

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Features to copy | Igual que en Lineal | Igual que en Lineal |
| Axis | Igual que Direction arriba | El eje de la última revolución, si no el eje Y (o la arista elegida) |
| Angle (°) | Mayor que 0, hasta 360. 360 reparte las copias por igual alrededor; menos las reparte en el ángulo | 360 |
| Count | 1 a 1000, incluido el original | 6 |
| Reverse direction | Off / on | Off |

## Espejo

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Mirror | El cuerpo entero (como está construido hasta ahora), o elementos elegidos | El elemento seleccionado, si no el cuerpo entero |
| Mirror plane | Plano Front, Top o Right; una cara plana | Plano Right, o la cara plana elegida al agregarlo |

## Redondeo y chaflán

En esta versión el núcleo de malla los construye en aristas rectas entre dos caras planas (esquinas exteriores o interiores), con un radio. Una arista redonda dice "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch."; donde se encuentran aristas redondeadas en una esquina se achaflanan a inglete, y el elemento avisa "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." Todos los tipos de chaflán (distancia igual, dos distancias, distancia y ángulo, con **Flip sides**) funcionan. Ver [Redondear, biselar y ahuecar](topic:fillet-chamfer-shell).

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Radius (mm) (Fillet) | Mayor que 0 | 2 |
| Distance (mm) (Chamfer) | Mayor que 0, igual en ambas caras | 1 |
| Edges | Las aristas elegidas, cada una listada por las dos caras que une ("Extrude1 end face × Extrude1 side"), con **Remove** | Las aristas elegidas al agregarlo |

- Elegí las aristas antes de elegir el botón ({{key:Shift}}+clic para varias), o elegílo sin nada seleccionado y hacé clic en las aristas después.
- {{ui:Pick edges}} (o doble clic en el elemento) cambia las aristas.
- Las aristas se recuerdan por las dos caras que unen, así que sobreviven a cambios de tamaño anteriores.

## Cáscara

Lo construye el núcleo de malla. Sólo se pueden abrir caras planas ("Shell: in this version it opens flat faces only (the mesh kernel builds it)."); las paredes de distinto grosor todavía no se construyen. Ver [Redondear, biselar y ahuecar](topic:fillet-chamfer-shell).

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Wall (mm) | Mayor que 0 | 2 |
| Walls grow outward (the faces stay inside) | Off: las paredes van hacia adentro. On: las paredes van hacia afuera | Off |
| Open faces | Las caras quitadas, al menos una, con **Remove** | Las caras elegidas al agregarlo |

{{ui:Pick faces}} cambia las caras abiertas.

## Sólido importado

Se hace abriendo un archivo STEP, STL, OBJ o 3MF: un cuerpo sólido de triángulos sin historial propio ([Abrir un archivo STEP](topic:import-step), [Abrir un STL, OBJ o 3MF](topic:open-meshes)). Muestra el archivo de origen y lo que la importación reparó; **Units in the file**, **Up in the file** y **Use it to** siguen editables. Un sólido STEP importado por una versión anterior con el núcleo exacto queda en el historial marcado como no hecho; abrí el archivo STEP otra vez para traerlo como triángulos.

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Up in the file | Z up (la mayoría de CAD), Y up | Z up |

Los patrones y espejos pueden copiar un sólido importado, pero no un redondeo, chaflán o cáscara.

## Lo que tiene cada elemento

Abajo del panel de cada elemento:

| Botón | Hace |
|---|---|
| {{ui:Suppress}} / {{ui:Unsuppress}} | Lo apaga o lo prende. Los elementos que lo necesitan no se construyen mientras está apagado |
| {{ui:Roll back to here}} | Construye sólo los elementos encima de este. Los elementos nuevos entran en la barra de retroceso |
| {{ui:Move up}} / {{ui:Move down}} | Reordena, cuando nada de lo que usa quedaría debajo. Si no, está en gris con el motivo |
| {{ui:Delete}} | Lo elimina, y (después de preguntar) cada elemento que lo usa |
| Name | Lo renombra (hasta 60 caracteres) |

Los elementos con boceto también listan **Sketch dimensions**, editables en el lugar.

## Estados en el historial

| Estado | Se muestra como | Significado |
|---|---|---|
| Built | Normal | Todo bien |
| Warning | ⚠ | Construido, con algo para revisar: "Over defined: 1 relation is not needed." o "Nothing is left of the part after this." |
| Error | ⚠ error, rojo | No se pudo construir; el mensaje dice por qué |
| Not built | ⚠ not built | Necesita un elemento que falló, está suprimido o retrocedido, o necesita un núcleo exacto, que esta versión no tiene ("Sweep: not built yet. …") |
| Suppressed | off | Apagado |
| Rolled back | en gris, debajo de la barra de retroceso | No construido hasta que avances de nuevo |

## Ajustes de la pieza

Hacé clic en un espacio vacío para no tener nada seleccionado. El panel derecho muestra **Part**:

- **Name**: el nombre de la pieza, usado para los nombres de archivo y el cuadro de título del plano (hasta 120 caracteres).
- **Curves**: ver abajo.

### Resolución de curvas

El núcleo de malla construye el sólido él mismo con facetas planas, así que la vista, STL, 3MF, el STEP facetado, el volumen y las vistas del plano siguen a **Curves**: cuántas facetas por vuelta completa.

| Ajuste | Facetas por vuelta | Volumen de una forma redonda |
|---|---|---|
| Coarse (32 per turn) | 32 | Unos 0,64 % por debajo del valor verdadero |
| Normal (64 per turn) | 64 | Unos 0,16 % por debajo (el predeterminado) |
| Fine (128 per turn) | 128 | Unos 0,04 % por debajo |
| Very fine (256 per turn) | 256 | Unos 0,01 % por debajo |

Curvas más finas dan exportaciones y vistas más suaves, y reconstrucciones más lentas. El ajuste se guarda en el archivo de la pieza.

## Lo que todavía no está hecho

Redondeos de radio variable, redondeos y chaflanes en aristas redondas, cáscaras que abren caras curvas, salida en caras curvas, barrido, loft, nervio, caras STEP con superficies curvas exactas, cuerpos nuevos, conicidades, "hasta" una cara o vértice, y referencias en las caras y aristas del sólido necesitan un núcleo exacto, que esta versión no tiene. También sin hacer: agujeros roscados y avellanados. Ver [Lo que todavía no está hecho](topic:not-built-yet).
