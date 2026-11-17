---
title: Elementos y sus opciones
summary: Cada elemento de la barra de herramientas con sus ajustes, valores predeterminados y límites, desde extruir hasta redondeo, vaciado y sólidos STEP importados, las acciones que comparten todos los elementos y los ajustes de la pieza.
keywords: elementos, no disponible, extruir, cortar, revolución, corte de revolución, agujero, avellanado, patrón lineal, patrón circular, simetría, redondeo, chaflán, vaciado, importar, opciones, valores predeterminados, ajustes, resolución, curvas, facetas, suprimir, retroceder
from: ab3a598e
---

Los elementos aparecen en el historial en el orden en que se crearon y se reconstruyen de arriba abajo. Cada uno recibe el nombre de su tipo con un número: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft construye cada elemento con el núcleo de malla. Redondeo y chaflán funcionan en aristas rectas entre dos caras planas, y el vaciado abre caras planas. Los sólidos importados necesitan un núcleo exacto, que esta versión no tiene: todavía no se construyen, y su sección más abajo los describe como una pieza hecha en una versión anterior que los conserva. Consulte [El núcleo de malla](topic:solid-kernels) y [Lo que todavía no está disponible](topic:not-built-yet).

## Croquis

| Ajuste | Notas |
|---|---|
| Plano | Plano Alzado, Superior o Derecho, o una cara plana. Solo se muestra, no se cambia: para mover un croquis, cree uno nuevo |
| Estado | Totalmente definido, Subdefinido (con los grados de libertad), Sobredefinido o Vacío |
| Geometría, Relaciones | Cuántas curvas, puntos y relaciones hay |
| Cotas de control | Cada cota del croquis, editable |

Botones: {{ui:Editar croquis}}, {{ui:Exportar como DXF}}.

## Extruir y Cortar

{{ui:Extruir}} y {{ui:Cortar}} crean el mismo elemento, empezando con ajustes distintos.

| Ajuste | Opciones | Extruir empieza en | Cortar empieza en |
|---|---|---|---|
| Operación | Saliente (añadir material), Corte (quitar material), Intersección (conservar el solapamiento), Nuevo cuerpo (todavía no disponible en esta versión) | Saliente | Corte |
| Fin | Ciega (una profundidad), Plano medio (en ambos sentidos), A través de todo | Ciega | A través de todo |
| Profundidad (mm) | Por encima de 0, hasta 1,000,000 | 10 | 10 |
| Invertir dirección | Desactivado / activado | Desactivado | Desactivado |

- Perfil: cada bucle cerrado de líneas sólidas, círculos y arcos del croquis. Los bucles dentro de bucles son agujeros.
- A través de todo solo funciona para cortes. Atraviesa toda la pieza por el lado elegido.
- Un corte entra en el material, alejándose del lado exterior del plano del croquis; Invertir dirección lo invierte.

## Revolución y corte de revolución

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Operación | Saliente, Corte | Saliente ({{ui:Revolución}}), Corte ({{ui:Más}} › {{ui:Corte de revolución}}) |
| Ángulo (°) | Por encima de 0, hasta 360 | 360 |
| Eje | Primera línea de centro, cualquier línea o línea de centro del croquis, o un elemento de eje situado en el plano del croquis | Primera línea de centro |

- El perfil debe quedar a un solo lado del eje. Puede tocarlo.
- El eje de una revolución puede usarse en patrones circulares y en las uniones de conjunto.

## Agujero

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Tipo | Simple, Avellanado | Simple |
| Diámetro (mm) | Por encima de 0 | 6 |
| A través de todo | Activado / desactivado | Activado |
| Profundidad (mm) | Cuando A través de todo está desactivado | 10 |
| Avellanado ⌀ | Más ancho que el agujero | 11 |
| Profundidad de avellanado | Menos profundo que un agujero ciego | 6 |
| Invertir dirección | Desactivado / activado | Desactivado |

- Un agujero en cada punto suelto del croquis (puntos hechos con la herramienta Punto). El panel indica cuántos hay.
- Los agujeros se taladran perpendiculares al plano del croquis, dentro del material.
- El eje de cada agujero puede usarse en las uniones de conjunto ("Hole1, hole 2").

## Patrón lineal

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Elementos a copiar | Cualquier elemento sólido situado por encima | El elemento seleccionado; si no, el último elemento sólido |
| Dirección | Eje X, eje Y, eje Z; una línea de un croquis anterior; el eje de una revolución; una arista seleccionada | Eje X (o la arista seleccionada al añadirlo) |
| Separación (mm) | Cualquier número | 20 |
| Número | De 1 a 1000, incluido el original | 3 |
| Invertir dirección | Desactivado / activado | Desactivado |

## Patrón circular

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Elementos a copiar | Como en Lineal | Como en Lineal |
| Eje | Como en Dirección, más arriba | El eje de la última revolución; si no, el eje Y (o la arista seleccionada) |
| Ángulo (°) | Por encima de 0, hasta 360. 360 reparte las copias por igual en toda la vuelta; un valor menor las reparte dentro de ese ángulo | 360 |
| Número | De 1 a 1000, incluido el original | 6 |
| Invertir dirección | Desactivado / activado | Desactivado |

## Simetría

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Simetría | El cuerpo completo (tal como está construido hasta ahora), o elementos elegidos | El elemento seleccionado; si no, el cuerpo completo |
| Plano de simetría | Plano Alzado, Superior o Derecho; una cara plana | Plano Derecho, o la cara plana seleccionada al añadirlo |

## Redondeo y chaflán

En esta versión, el núcleo de malla los construye en aristas rectas entre dos caras planas (esquinas exteriores o interiores), con un único radio. Una arista redondeada muestra "Redondeo: en esta versión solo aristas rectas entre dos caras planas (las construye el núcleo de malla). Redondee o achaflane las aristas curvas en el croquis."; donde las aristas redondeadas se encuentran en una esquina se ingletean, y el elemento avisa "Redondeo por el núcleo de malla: donde se encuentran las aristas redondeadas se ingletean, no se suavizan." Todos los tipos de chaflán (distancia igual, dos distancias, distancia y ángulo, con **Invertir lados**) funcionan. Consulte [Redondee, achaflane y vacíe](topic:fillet-chamfer-shell).

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Radio (mm) (Redondeo) | Por encima de 0 | 2 |
| Distancia (mm) (Chaflán) | Por encima de 0, la misma en ambas caras | 1 |
| Aristas | Las aristas seleccionadas, cada una indicada por las dos caras que une ("Extrude1 end face × Extrude1 side"), con **Quitar** | Las aristas seleccionadas al añadirlo |

- Seleccione las aristas antes de elegir el botón ({{key:Shift}}+clic para varias), o elíjalo sin nada seleccionado y haga clic en las aristas después.
- {{ui:Seleccionar aristas}} (o doble clic en el elemento) cambia las aristas.
- Las aristas se mantienen por las dos caras que unen, así que sobreviven a los cambios de tamaño anteriores.

## Vaciado

El núcleo de malla lo construye. Solo se pueden abrir caras planas ("Vaciado: en esta versión solo abre caras planas (lo construye el núcleo de malla)."); las paredes de distinto grosor todavía no se construyen. Consulte [Redondee, achaflane y vacíe](topic:fillet-chamfer-shell).

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Pared (mm) | Por encima de 0 | 2 |
| Las paredes crecen hacia fuera (las caras quedan dentro) | Desactivado: las paredes van hacia dentro. Activado: las paredes van hacia fuera | Desactivado |
| Caras abiertas | Las caras eliminadas, al menos una, con **Quitar** | Las caras seleccionadas al añadirlo |

{{ui:Seleccionar caras}} cambia las caras abiertas.

## Sólido importado

Se crea al abrir un archivo STEP, STL, OBJ o 3MF: un cuerpo sólido de triángulos sin historial propio ([Abra un archivo STEP](topic:import-step), [Abra un STL, OBJ o 3MF](topic:open-meshes)). Muestra el archivo de origen y lo que reparó la importación; **Unidades del archivo**, **Arriba en el archivo** y **Usar para** siguen siendo editables. Un sólido STEP importado por una versión anterior que tenía el núcleo exacto se queda en el historial marcado como no construido; vuelva a abrir el archivo STEP para traerlo como triángulos.

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Arriba en el archivo | Z hacia arriba (la mayoría de CAD), Y hacia arriba | Z hacia arriba |

Los patrones y las simetrías pueden copiar un sólido importado, pero no un redondeo, un chaflán ni un vaciado.

## Lo que tiene cada elemento

En la parte inferior del panel de cada elemento:

| Botón | Hace |
|---|---|
| {{ui:Suprimir}} / {{ui:Quitar supresión}} | Lo desactiva o lo activa. Los elementos que lo necesitan no se construyen mientras esté desactivado |
| {{ui:Retroceder hasta aquí}} | Construye solo los elementos situados por encima de este. Los nuevos elementos se insertan en la barra de retroceso |
| {{ui:Subir}} / {{ui:Bajar}} | Reordena, cuando nada de lo que usa quedaría por debajo. Si no, aparece atenuado con el motivo |
| {{ui:Eliminar}} | Lo elimina y, tras preguntar, cada elemento que lo usa |
| Nombre | Lo renombra (hasta 60 caracteres) |

Los elementos con croquis también muestran **Cotas del croquis**, editables en el sitio.

## Estados en el historial

| Estado | Se muestra como | Significado |
|---|---|---|
| Construido | Normal | Todo correcto |
| Advertencia | ⚠ | Construido, con algo que revisar: "Sobredefinido: 1 relación no es necesaria." o "Después de esto no queda nada de la pieza." |
| Error | ⚠ error, en rojo | No se pudo construir; el mensaje indica por qué |
| No construido | ⚠ no construido | Necesita un elemento que falló, está suprimido o retrocedido, o necesita un núcleo exacto, que esta versión no tiene ("Barrido: todavía no construido. …") |
| Suprimido | desactivado | Desactivado |
| Retrocedido | atenuado, debajo de la barra de retroceso | No se construye hasta que avance de nuevo |

## Ajustes de la pieza

Haga clic en un espacio vacío para que no haya nada seleccionado. El panel derecho muestra **Pieza**:

- **Nombre**: el nombre de la pieza, usado en los nombres de archivo y en el cajetín del dibujo (hasta 120 caracteres).
- **Curvas**: véase abajo.

### Resolución de curvas

El núcleo de malla construye el sólido a partir de facetas planas, así que la vista, STL, 3MF, el STEP facetado, el volumen y las vistas del dibujo siguen todos **Curvas**: cuántas facetas por vuelta completa.

| Ajuste | Facetas por vuelta | Volumen de una forma redonda |
|---|---|---|
| Gruesa (32 por vuelta) | 32 | Unos 0.64 % por debajo del valor real |
| Normal (64 por vuelta) | 64 | Unos 0.16 % por debajo (el predeterminado) |
| Fina (128 por vuelta) | 128 | Unos 0.04 % por debajo |
| Muy fina (256 por vuelta) | 256 | Unos 0.01 % por debajo |

Las curvas más finas dan exportaciones y vistas más suaves, pero reconstrucciones más lentas. El ajuste se guarda en el archivo de la pieza.

## Lo que todavía no está disponible

Redondeos de radio variable, redondeos y chaflanes en aristas redondas, vaciados que abren caras curvas, desmoldeo en caras curvas, barrido, loft, nervio, sólidos STEP con caras curvas exactas, cuerpos nuevos, conicidades, "hasta" una cara o un vértice, y referencias en las caras y aristas del sólido necesitan un núcleo exacto, que esta versión no tiene. Tampoco están disponibles los agujeros roscados ni los avellanados cónicos. Consulte [Lo que todavía no está disponible](topic:not-built-yet).
