---
title: Mover piezas desde y hacia otros modeladores de piezas
summary: Envíe una pieza a otro modelador de piezas como una macro que la reconstruye con un árbol de operaciones activo. El STEP con nombre y la apertura de la lista de operaciones que escribió otro modelador todavía no están implementados en esta versión.
keywords: macro, no implementado, swb, vba, árbol de operaciones, ida y vuelta, exportar macro, cadcraft-sw.json, step con nombre, ap214, variables globales, ecuaciones, pieza nativa
from: 97ca61da
---

PartCraft intercambia piezas con SolidWorks en ambos sentidos, sin un formato de archivo que nadie más pueda leer:

- **Hacia afuera:** una macro (`.swb`, texto plano) que SolidWorks ejecuta para construir la pieza por sí misma, operación por operación, con sus croquis, relaciones, cotas, variables globales y ecuaciones. Obtiene una pieza nativa con un árbol de operaciones activo, no un sólido inerte.
- **De regreso:** una macro que usted ejecuta dentro de SolidWorks escribe las operaciones y ecuaciones de la pieza en un archivo `.cadcraft-sw.json`. Abrir ese archivo en PartCraft todavía no está implementado en esta versión (requiere un núcleo exacto).

:::warning
Nada de esto se ha probado todavía en SolidWorks. SolidWorks sólo se ejecuta en Windows y con licencia, y PartCraft nunca ha ejecutado estas macros en él. Las macros se escribieron a partir de la documentación de la API de SolidWorks y su estructura se revisó aquí. Espere tener que reportar problemas; el registro que escribe la macro indica qué paso falló.
:::

PartCraft no puede escribir un archivo `.sldprt`: ese formato es cerrado. La macro es la forma de obtener una pieza nativa.

## Enviar una pieza como macro

1. Abra la pieza.
2. Elija {{ui:Exportar}} y luego {{ui:Macro para SolidWorks (.swb)}}. PartCraft descarga `<part>.swb`; la barra de estado indica que se escribió "sin el núcleo exacto".
3. Un cuadro de diálogo indica cuántas operaciones, variables globales y ecuaciones construye la macro, y enumera lo que deja fuera. Ningún STEP acompaña a la macro en esta versión: use {{ui:Exportar}} y luego {{ui:STEP (facetado, núcleo de malla)}} si lo necesita.
4. En SolidWorks, elija **Herramientas > Macro > Ejecutar**, seleccione el archivo `.swb` y espere. Crea una pieza nueva a partir de su plantilla de pieza predeterminada, define milímetros y construye cada operación.
5. Al final, un mensaje indica cuántos pasos se realizaron, cuántos fallaron y cuántos coinciden con el cuerpo de PartCraft. El registro completo, `<part> macro log.txt`, se escribe junto a la macro.

Lo que construye la macro:

| PartCraft | En la pieza nueva |
|---|---|
| Croquis en el plano frontal, superior o derecho | Un croquis en ese plano, con sus líneas, arcos, círculos, puntos, relaciones y cotas (con los nombres que tienen en PartCraft, como `k7`) |
| Croquis en una cara | Un croquis en la misma cara, elegida mediante un punto sobre ella |
| Croquis en un plano fijo | Un plano de referencia que pasa por tres puntos, y el croquis sobre él |
| Extruir, cortar (ciego, a través de todo, plano medio, dos direcciones, ahusado) | Extruir saliente o extruir corte |
| Revolución, corte por revolución | Revolución sobre el mismo eje constructivo |
| Agujero (simple, con cajeado, avellanado, roscado) | Uno o dos cortes con sus propios croquis (un agujero roscado es su broca de roscado; sin rosca) |
| Matriz lineal y circular, simetría | Matriz lineal, matriz circular, simetría (operaciones o el cuerpo) |
| Redondeo, chaflán, vaciado | Redondeo, chaflán y vaciado en las mismas aristas y caras, elegidas por puntos |
| Parámetros y ecuaciones | Variables globales y ecuaciones sobre las cotas renombradas |
| Operaciones suprimidas, la barra de retroceso | Suprimidas de la misma forma; la barra de retroceso en el mismo lugar |

Después de cada operación sólida, la macro compara el volumen y el tamaño del cuerpo con los de PartCraft. Cuando difieren, gira una vez la dirección de esa operación y vuelve a comprobar; si eso no mejora, la regresa y escribe "Check" en el registro.

### Lo que se deja fuera

El cuadro de diálogo y el inicio de la macro enumeran todo lo que no se traslada, con el motivo. Hoy son: sólidos importados (inserte el STEP en su lugar), barridos, solevaciones, ángulos de salida, ejes y puntos de referencia, condiciones de fin "hasta", extruir sólo algunos contornos, y todo lo que dependa de ellos. Los splines se convierten en curvas que pasan por sus puntos. Esta versión no tiene núcleo exacto, así que los croquis sobre caras y las operaciones que eligen aristas o caras también se dejan fuera.

## Enviar un STEP con nombre

Todavía no implementado en esta versión: {{ui:STEP para SolidWorks (con nombres, AP214)}} requiere un núcleo exacto, y elegirlo dice "STEP para SolidWorks: todavía no implementado. …". Con un núcleo exacto, el archivo lleva el nombre de la pieza, milímetros y el color de la pieza, y orienta Y hacia arriba, como SolidWorks muestra las piezas (la exportación simple {{ui:STEP AP214 (sólido exacto)}} orienta Z hacia arriba). Las letras con acento pierden el acento en el nombre, y otros caracteres fuera del ASCII simple se convierten en `_`.

## Traer una pieza de regreso

Abrir el archivo en PartCraft (paso 3) todavía no está implementado en esta versión: dice "Abrir una exportación de SolidWorks: todavía no implementado. …". La aplicación de dibujo CadCraft todavía abre el archivo y toma sus croquis.

1. Elija {{ui:Archivo}} > {{ui:Exportar}} > {{ui:Exportar macro para traer piezas de vuelta (.swb)}} para descargar `CadCraftExport.swb`, y colóquelo junto a sus piezas.
2. En SolidWorks, abra la pieza, elija **Herramientas > Macro > Ejecutar** y seleccione `CadCraftExport.swb`. Escribe `<part>.cadcraft-sw.json` junto a la pieza y no cambia nada en ella.
3. En PartCraft, elija {{ui:Abrir}} y seleccione ese archivo, o suéltelo sobre la vista 3D.
4. Con un núcleo exacto, PartCraft reconstruye la pieza operación por operación y muestra lo que hizo: por ejemplo "5 de 5 operaciones trasladadas desde SolidWorks (Flange.SLDPRT)", cada operación que no pudo trasladar ("No trasladada: Sweep1 (Sweep).") y si el volumen coincide con el que escribió SolidWorks.
5. Guárdela como pieza de PartCraft con {{ui:Guardar}}.

Los croquis se colocan en un plano base cuando están sobre uno, en la cara plana correspondiente de la pieza cuando existe (para que sigan las ediciones posteriores), y en un plano fijo en otro caso. Las aristas y caras de redondeos, chaflanes y vaciados se encuentran a partir de puntos y se conservan como referencias con nombre. Las variables globales se convierten en parámetros (los nombres con espacios reciben guiones bajos: "Bolt count" pasa a ser `Bolt_count`) y las ecuaciones pasan a ser ecuaciones sobre las mismas cotas. Nada se adivina: lo que no tiene equivalente se enumera.

La aplicación de dibujo CadCraft abre el mismo archivo y toma sus croquis.

:::note
El formato es `cadcraft-sw-export` versión 1, JSON plano en milímetros y grados. Un archivo de una macro más nueva, o uno que no es válido, se rechaza indicando el motivo.
:::
