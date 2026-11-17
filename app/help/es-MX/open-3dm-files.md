---
title: Abrir un modelo .3dm como cuerpo sólido
summary: Lleve las mallas, polisuperficies y bloques de un archivo .3dm a PartCraft como un solo cuerpo sólido que puede cortar, al que puede agregar material y sobre el que puede hacer croquis; de dónde vienen los triángulos y qué se deja fuera.
keywords: 3dm, nurbs, polisuperficie, brep, superficies, malla de renderizado, extrusión, bloques, importar, malla a sólido, unidades, cuerpo importado
from: 8ae9571b
---

PartCraft abre los archivos `.3dm` como **cuerpos sólidos**, de la misma forma en que abre una [malla STL, OBJ o 3MF](topic:open-meshes). El cuerpo funciona como cualquier otro sólido: córtelo, agréguele material, taládrelo, haga patrones con él y dibuje croquis sobre sus caras planas. No tiene historial propio.

## Abrir el archivo

1. Elija {{ui:Open}} o pulse {{key:Mod+O}}, y seleccione el archivo `.3dm`. O suéltelo sobre la vista 3D.
2. PartCraft lo lee y muestra lo que encontró: cuántos objetos con caras entran, cuántas caras vienen de las mallas guardadas en el archivo y cuántas tesela PartCraft, cada reparación, y si el resultado **cierra**.
3. Revise **Unidades del archivo** (el archivo indica las suyas; una unidad que PartCraft no lista, como las yardas, se convierte a milímetros) y **Arriba en el archivo**.
4. Elija {{ui:Open as a body}}, o **Usarlo para** y {{ui:Add to this part}} cuando la pieza ya tiene operaciones.

## De dónde vienen los triángulos

PartCraft crea cuerpos a partir de triángulos en esta versión, así que cada superficie del archivo se convierte en pequeñas caras planas. Para cada cara de una polisuperficie (y de cada extrusión) toma la **malla de renderizado guardada en el archivo** cuando la hay; si no, **la tesela por sí mismo** (planos, superficies NURBS, superficies de revolución, curvas extruidas y extrusiones, recortadas por sus aristas). Las caras de una misma polisuperficie comparten sus puntos de arista, así que una polisuperficie cerrada entra cerrada. Una cara de un tipo de superficie que PartCraft aún no lee se deja fuera, y el cuadro de diálogo indica cuántas son y de qué tipo; el resultado normalmente no cierra.

## Todo lo del archivo se convierte en un cuerpo

Cada malla, polisuperficie y extrusión visible, y cada colocación de un bloque, va a **un solo** cuerpo, en el lugar donde lo ubica el archivo. Los objetos ocultos, o los que están en una capa desactivada, se dejan fuera. Cuando el archivo contiene varios sólidos separados, el cuerpo tiene varias piezas: abra cada uno desde su propio archivo si los quiere como cuerpos separados.

## Qué se deja fuera (y se indica)

Las curvas, los puntos, las nubes de puntos, el texto, las cotas, los sombreados y las luces se dejan fuera: un cuerpo toma solo caras. También quedan fuera los objetos SubD (conviértalos en mallas o polisuperficies en el programa que creó el archivo primero), los bloques vinculados desde otros archivos, y los colores, las capas y los nombres (los cuerpos de PartCraft no tienen los suyos aquí).

## Cuando no cierra

Las polisuperficies abiertas y las superficies (una sola superficie recortada, una forma con una cara que falta) no tienen interior, así que no pueden ser un sólido. El cuadro de diálogo indica cuántas aberturas quedan y no agrega nada. Una o tape la forma en el programa que la creó, guarde y vuelva a abrirla. Véase [Cuando una malla no cierra](topic:open-meshes#when-a-mesh-does-not-close).
