---
title: Llevar piezas a otros modeladores de piezas y desde ellos
summary: Envíe una pieza a otro modelador de piezas como macro que la reconstruye con un árbol de elementos activo. El STEP con nombres y la apertura de la lista de elementos escrita por otro modelador no están incluidos todavía en esta versión.
keywords: macro, no incluido, swb, vba, árbol de elementos, ida y vuelta, macro de exportación, cadcraft-sw.json, STEP con nombre, ap214, variables globales, ecuaciones, pieza nativa
from: 97ca61da
---

PartCraft intercambia piezas con SolidWorks en ambos sentidos, sin un formato de archivo que nadie más pueda leer:

- **Hacia fuera:** una macro (`.swb`, texto plano) que SolidWorks ejecuta para construir la pieza por sí misma, elemento a elemento, con sus croquis, relaciones, cotas, variables globales y ecuaciones. Obtiene una pieza nativa con un árbol de elementos activo, no un sólido inerte.
- **De vuelta:** una macro que se ejecuta dentro de SolidWorks escribe los elementos y ecuaciones de la pieza en un archivo `.cadcraft-sw.json`. Abrir ese archivo en PartCraft no está incluido todavía en esta versión (necesita un núcleo exacto).

:::warning
Nada de esto se ha probado todavía en SolidWorks. SolidWorks solo se ejecuta en Windows y con licencia, y PartCraft nunca ha ejecutado estas macros en él. Las macros se escribieron a partir de la documentación de la API de SolidWorks y se comprobaron aquí en cuanto a estructura. Espere encontrar problemas; el registro que escribe la macro indica qué paso falló.
:::

PartCraft no puede escribir un archivo `.sldprt`: ese formato es cerrado. La macro es la forma de obtener una pieza nativa.

## Enviar una pieza como macro

1. Abra la pieza.
2. Elija {{ui:Exportar}} y luego {{ui:Macro para SolidWorks (.swb)}}. PartCraft descarga `<part>.swb`; la barra de estado indica que se escribió sin el núcleo exacto.
3. Un cuadro de diálogo indica cuántos elementos, variables globales y ecuaciones construye la macro, y enumera lo que deja fuera. En esta versión no se genera ningún STEP junto a ella: si lo necesita, use {{ui:Exportar}} y luego {{ui:STEP (facetado, núcleo de malla)}}.
4. En SolidWorks, elija **Herramientas > Macro > Ejecutar**, seleccione el archivo `.swb` y espere. Crea una pieza nueva a partir de su plantilla de pieza predeterminada, establece milímetros y construye cada elemento.
5. Al final, un mensaje indica cuántos pasos se completaron, cuántos fallaron y cuántos coinciden con el cuerpo de PartCraft. El registro completo, `<part> macro log.txt`, se escribe junto a la macro.

Lo que construye la macro:

| PartCraft | En la nueva pieza |
|---|---|
| Croquis sobre el plano alzado, superior o derecho | Un croquis sobre ese plano, con sus líneas, arcos, círculos, puntos, relaciones y cotas (con nombres como en PartCraft, como `k7`) |
| Croquis sobre una cara | Un croquis sobre la misma cara, elegida mediante un punto sobre ella |
| Croquis sobre un plano fijo | Un plano de referencia que pasa por tres puntos, y el croquis sobre él |
| Extruir, cortar (ciego, hasta todo, plano medio, dos direcciones, cónico) | Extrusión saliente o extrusión de corte |
| Revolución, corte por revolución | Revolución alrededor de la misma línea constructiva |
| Taladro (simple, avellanado, avellanado cónico, roscado) | Uno o dos cortes con sus propios croquis (un taladro roscado es su broca de roscado; sin rosca) |
| Matriz lineal y circular, simetría | Matriz lineal, matriz circular, simetría (de elementos o del cuerpo) |
| Redondeo, chaflán, vaciado | Redondeo, chaflán y vaciado en las mismas aristas y caras, elegidas por puntos |
| Parámetros y ecuaciones | Variables globales y ecuaciones sobre las cotas renombradas |
| Elementos suprimidos, la barra de retroceso | Suprimidos de la misma forma; la barra de retroceso en el mismo lugar |

Tras cada elemento sólido, la macro compara el volumen y el tamaño del cuerpo con los de PartCraft. Cuando difieren, invierte una vez la dirección de ese elemento y vuelve a comprobar; si no mejora, la devuelve a su sentido y escribe «Comprobar» en el registro.

### Lo que queda fuera

El cuadro de diálogo y el inicio de la macro enumeran todo lo que no se traslada, con el motivo. Hoy son: sólidos importados (inserte el STEP en su lugar), barridos, recubrimientos, desmoldeos, ejes y puntos de referencia, condiciones de fin «hasta», extrusión de solo algunos contornos, y todo lo que dependa de ellos. Las splines se convierten en curvas que pasan por sus puntos. Esta versión no tiene núcleo exacto, así que también quedan fuera los croquis sobre caras y los elementos que seleccionan aristas o caras.

## Enviar un STEP con nombre

No incluido todavía en esta versión: {{ui:STEP para SolidWorks (con nombres, AP214)}} necesita un núcleo exacto, y al elegirlo indica «STEP para SolidWorks: no incluido todavía. …». Con un núcleo exacto, el archivo lleva el nombre de la pieza, milímetros y el color de la pieza, y coloca Y hacia arriba, como muestra SolidWorks las piezas (la exportación {{ui:STEP AP214 (sólido exacto)}} normal coloca Z hacia arriba). Las letras con tilde pierden la tilde en el nombre, y otros caracteres fuera del ASCII básico se convierten en `_`.

## Traer una pieza de vuelta

Abrir el archivo en PartCraft (paso 3) no está incluido todavía en esta versión: indica «Abrir una exportación de SolidWorks: no incluido todavía. …». La aplicación de dibujo CadCraft todavía abre el archivo y toma sus croquis.

1. Elija {{ui:Archivo}} > {{ui:Exportar}} > {{ui:Macro de exportación para traer piezas de vuelta (.swb)}} para descargar `CadCraftExport.swb`, y guárdelo junto a sus piezas.
2. En SolidWorks, abra la pieza, elija **Herramientas > Macro > Ejecutar** y seleccione `CadCraftExport.swb`. Escribe `<part>.cadcraft-sw.json` junto a la pieza y no cambia nada en ella.
3. En PartCraft, elija {{ui:Abrir}} y seleccione ese archivo, o suéltelo sobre la vista 3D.
4. Con un núcleo exacto, PartCraft reconstruye la pieza elemento a elemento y muestra lo que hizo: por ejemplo, "5 de 5 elementos trasladados desde SolidWorks (Flange.SLDPRT)", cada elemento que no pudo trasladar ("No trasladado: Sweep1 (barrido)."), y si el volumen coincide con el que escribió SolidWorks.
5. Guárdelo como pieza de PartCraft con {{ui:Guardar}}.

Los croquis caen sobre un plano base cuando están sobre uno, sobre la cara plana correspondiente de la pieza cuando la hay (así siguen las ediciones posteriores), y si no, sobre un plano fijo. Las aristas y caras de redondeos, chaflanes y vaciados se encuentran a partir de puntos y se conservan como referencias con nombre. Las variables globales se convierten en parámetros (los nombres con espacios reciben guiones bajos: "Bolt count" pasa a ser `Bolt_count`) y las ecuaciones pasan a ser ecuaciones sobre las mismas cotas. Nada se adivina: lo que no tiene equivalente se enumera.

La aplicación de dibujo CadCraft abre el mismo archivo y toma sus croquis.

:::note
El formato es `cadcraft-sw-export` versión 1, JSON plano en milímetros y grados. Un archivo de una macro más reciente, o uno que no sea válido, se rechaza indicando el motivo.
:::
