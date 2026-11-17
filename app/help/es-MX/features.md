---
title: Operaciones y sus opciones
summary: Cada operación de la barra de herramientas con sus ajustes, valores predeterminados y límites, desde extruir hasta redondeo, vaciado y sólidos STEP importados; las acciones que comparten todas las operaciones, y los ajustes de la pieza.
keywords: operaciones, no construida, extruir, cortar, revolución, corte de revolución, agujero, avellanado, matriz lineal, matriz circular, simetría, redondeo, chaflán, vaciado, importar, opciones, predeterminados, ajustes, resolución, curvas, facetas, suprimir, retroceso
from: ab3a598e
---

Las operaciones aparecen en el historial en el orden en que se hicieron, y se reconstruyen de arriba abajo. Cada una se nombra según su tipo con un número: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft construye cada operación con el núcleo de malla. El redondeo y el chaflán funcionan en aristas rectas entre dos caras planas, y el vaciado abre caras planas. Los sólidos importados necesitan un núcleo exacto, que esta versión no tiene: todavía no se construyen, y su sección abajo los describe como una pieza hecha en una versión anterior que los conserva. Vea [El núcleo de malla](topic:solid-kernels) y [Qué no está construido todavía](topic:not-built-yet).

## Croquis

| Ajuste | Notas |
|---|---|
| Plano | Frontal, Superior o Derecho, o una cara plana. Se muestra, no se cambia: para mover un croquis, haga uno nuevo |
| Estado | Totalmente definido, Subdefinido (con los grados de libertad), Sobredefinido o Vacío |
| Geometría, Relaciones | Cuántas curvas, puntos y relaciones hay |
| Cotas de control | Cada cota del croquis, editable |

Botones: {{ui:Editar croquis}}, {{ui:Exportar como DXF}}.

## Extruir y Cortar

{{ui:Extruir}} y {{ui:Cortar}} crean la misma operación, con ajustes iniciales distintos.

| Ajuste | Opciones | Extruir empieza en | Cortar empieza en |
|---|---|---|---|
| Operación | Saliente (agrega material), Corte (quita material), Intersecar (conserva el solape), Nuevo cuerpo (todavía no construido en esta versión) | Saliente | Corte |
| Fin | Ciega (una profundidad), Plano medio (en ambos sentidos), Pasar por todo | Ciega | Pasar por todo |
| Profundidad (mm) | Mayor que 0, hasta 1,000,000 | 10 | 10 |
| Invertir dirección | Desactivado / activado | Desactivado | Desactivado |

- Perfil: cada contorno cerrado de líneas sólidas, círculos y arcos del croquis. Los contornos dentro de otros contornos son agujeros.
- Pasar por todo funciona solo para cortes. Llega hasta el final de la pieza, por el lado elegido.
- Un corte entra en el material, alejándose del lado saliente del plano del croquis; Invertir lo voltea.

## Revolución y corte de revolución

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Operación | Saliente, Corte | Saliente ({{ui:Revolve}}), Corte ({{ui:More}} › {{ui:Revolved cut}}) |
| Ángulo (°) | Mayor que 0, hasta 360 | 360 |
| Eje | Primera línea de centro, cualquier línea o línea de centro del croquis, o una operación de eje situada en el plano del croquis | Primera línea de centro |

- El perfil debe quedar a un solo lado del eje. Puede tocarlo.
- El eje de una revolución puede usarlo las matrices circulares y las uniones de ensamblaje.

## Agujero

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Tipo | Simple, Avellanado | Simple |
| Diámetro (mm) | Mayor que 0 | 6 |
| Pasar por todo | Activado / desactivado | Activado |
| Profundidad (mm) | Cuando Pasar por todo está desactivado | 10 |
| Diámetro del avellanado (⌀) | Más ancho que el agujero | 11 |
| Profundidad del avellanado | Menos profundo que un agujero ciego | 6 |
| Invertir dirección | Desactivado / activado | Desactivado |

- Un agujero en cada punto suelto del croquis (puntos hechos con la herramienta Punto). El panel muestra cuántos hay.
- Los agujeros se taladran perpendiculares al plano del croquis, hacia el material.
- El eje de cada agujero puede usarlo las uniones de ensamblaje ("Hole1, agujero 2").

## Matriz lineal

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Operaciones a copiar | Cualquier operación de sólido por encima | La operación seleccionada; si no, la última operación de sólido |
| Dirección | Eje X, eje Y, eje Z; una línea de un croquis anterior; el eje de una revolución; una arista seleccionada | Eje X (o la arista seleccionada al agregarla) |
| Separación (mm) | Cualquier número | 20 |
| Cantidad | De 1 a 1000, incluido el original | 3 |
| Invertir dirección | Desactivado / activado | Desactivado |

## Matriz circular

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Operaciones a copiar | Igual que en Lineal | Igual que en Lineal |
| Eje | Igual que Dirección arriba | El eje de la última revolución; si no, el eje Y (o la arista seleccionada) |
| Ángulo (°) | Mayor que 0, hasta 360. 360 reparte las copias por igual alrededor; menos las reparte dentro del ángulo | 360 |
| Cantidad | De 1 a 1000, incluido el original | 6 |
| Invertir dirección | Desactivado / activado | Desactivado |

## Simetría

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Simetría | Todo el cuerpo (como está construido hasta ahora), o las operaciones elegidas | La operación seleccionada; si no, todo el cuerpo |
| Plano de simetría | Plano Frontal, Superior o Derecho; una cara plana | El plano Derecho, o la cara plana seleccionada al agregarla |

## Redondeo y chaflán

En esta versión, el núcleo de malla los construye en aristas rectas entre dos caras planas (esquinas exteriores o interiores), con un solo radio. Una arista redonda dice "Redondeo: en esta versión solo aristas rectas entre dos caras planas (las construye el núcleo de malla). Redondee o biselar aristas curvas en el croquis."; donde se encuentran aristas redondeadas en una esquina, quedan a inglete, y la operación avisa "Redondeo por el núcleo de malla: donde se encuentran aristas redondeadas, quedan a inglete, no mezcladas." Todos los tipos de chaflán (distancia igual, dos distancias, distancia y ángulo, con **Invertir lados**) funcionan. Vea [Redondear, biselar y vaciar](topic:fillet-chamfer-shell).

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Radio (mm) (Redondeo) | Mayor que 0 | 2 |
| Distancia (mm) (Chaflán) | Mayor que 0, la misma en ambas caras | 1 |
| Aristas | Las aristas seleccionadas, cada una listada por las dos caras que une ("Extrude1 cara final × Extrude1 lateral"), con **Quitar** | Las aristas seleccionadas al agregarla |

- Seleccione las aristas antes de elegir el botón ({{key:Shift}}+clic para varias), o elíjalo sin nada seleccionado y haga clic en las aristas después.
- {{ui:Seleccionar aristas}} (o haga doble clic en la operación) cambia las aristas.
- Las aristas se conservan por las dos caras que unen, así que sobreviven a cambios de tamaño anteriores en el historial.

## Vaciado

El núcleo de malla lo construye. Solo se pueden abrir caras planas ("Vaciado: en esta versión solo abre caras planas (lo construye el núcleo de malla)."); las paredes de distinto espesor todavía no se construyen. Vea [Redondear, biselar y vaciar](topic:fillet-chamfer-shell).

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Pared (mm) | Mayor que 0 | 2 |
| Las paredes crecen hacia afuera (las caras quedan dentro) | Desactivado: las paredes van hacia dentro. Activado: las paredes van hacia afuera | Desactivado |
| Caras abiertas | Las caras que se quitan, al menos una, con **Quitar** | Las caras seleccionadas al agregarla |

{{ui:Seleccionar caras}} cambia las caras abiertas.

## Sólido importado

Se crea al abrir un archivo STEP, STL, OBJ o 3MF: un cuerpo sólido de triángulos sin historial propio ([Abra un archivo STEP](topic:import-step), [Abra un STL, OBJ o 3MF](topic:open-meshes)). Muestra el archivo de origen y lo que reparó la importación; **Unidades del archivo**, **Hacia arriba en el archivo** y **Usar para** siguen siendo editables. Un sólido STEP importado por una versión anterior, que tenía el núcleo exacto, se queda en el historial marcado como no construido; vuelva a abrir el archivo STEP para traerlo como triángulos.

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| Hacia arriba en el archivo | Z hacia arriba (la mayoría de CAD), Y hacia arriba | Z hacia arriba |

Las matrices y simetrías pueden copiar un sólido importado, pero no un redondeo, chaflán o vaciado.

## Lo que tiene cada operación

Al pie del panel de cada operación:

| Botón | Hace |
|---|---|
| {{ui:Suprimir}} / {{ui:Desactivar supresión}} | La apaga o la enciende. Las operaciones que la necesitan no se construyen mientras está apagada |
| {{ui:Retroceder hasta aquí}} | Construye solo las operaciones por encima de esta. Las nuevas operaciones entran en la barra de retroceso |
| {{ui:Subir}} / {{ui:Bajar}} | Reordena, cuando nada de lo que usa quedaría debajo. Aparece en gris con el motivo si no se puede |
| {{ui:Eliminar}} | La borra y, después de preguntar, cada operación que la use |
| Nombre | La renombra (hasta 60 caracteres) |

Las operaciones con croquis también listan **Cotas del croquis**, editables en su lugar.

## Estados en el historial

| Estado | Se muestra como | Significado |
|---|---|---|
| Construida | Normal | Todo bien |
| Advertencia | ⚠ | Construida, con algo que revisar: "Sobredefinido: 1 relación no es necesaria." o "No queda nada de la pieza después de esto." |
| Error | ⚠ error, en rojo | No se pudo construir; el mensaje dice por qué |
| No construida | ⚠ no construida | Necesita una operación que falló, está suprimida o retrocedida, o necesita un núcleo exacto, que esta versión no tiene ("Barrido: todavía no construido. …") |
| Suprimida | apagada | Desactivada |
| Retrocedida | en gris, debajo de la barra de retroceso | No se construye hasta que avance de nuevo |

## Ajustes de la pieza

Haga clic en un espacio vacío para que no haya nada seleccionado. El panel derecho muestra **Pieza**:

- **Nombre**: el nombre de la pieza, usado en los nombres de archivo y en el cajetín del dibujo (hasta 120 caracteres).
- **Curvas**: vea abajo.

### Resolución de curvas

El núcleo de malla construye el sólido a partir de facetas planas. Por eso la vista, STL, 3MF, el STEP facetado, el volumen y las vistas del dibujo siguen **Curvas**: cuántas facetas hay por vuelta completa.

| Ajuste | Facetas por vuelta | Volumen de una forma redonda |
|---|---|---|
| Gruesa (32 por vuelta) | 32 | Unos 0.64 % por debajo del valor real |
| Normal (64 por vuelta) | 64 | Unos 0.16 % por debajo (el predeterminado) |
| Fina (128 por vuelta) | 128 | Unos 0.04 % por debajo |
| Muy fina (256 por vuelta) | 256 | Unos 0.01 % por debajo |

Las curvas más finas dan exportaciones y vistas más suaves, y reconstrucciones más lentas. El ajuste se guarda en el archivo de la pieza.

## Qué no está construido todavía

Los redondeos de radio variable, los redondeos y chaflanes en aristas redondas, los vaciados que abren caras curvas, el ángulo de salida en caras curvas, el barrido, la solevación, la nervadura, los sólidos STEP con caras curvas exactas, los cuerpos nuevos, las conicidades, "hasta" una cara o un vértice, y las referencias en las caras y aristas del sólido necesitan un núcleo exacto, que esta versión no tiene. También sin construir: agujeros roscados y avellanados cónicos. Vea [Qué no está construido todavía](topic:not-built-yet).
