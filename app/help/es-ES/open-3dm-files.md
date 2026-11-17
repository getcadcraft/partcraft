---
title: Abrir un modelo .3dm como cuerpo sólido
summary: Traiga las mallas, polisuperficies y bloques de un archivo .3dm a PartCraft como un único cuerpo sólido que puede cortar, ampliar y sobre el que puede dibujar; de dónde vienen los triángulos y qué se deja fuera.
keywords: 3dm, nurbs, polisuperficie, brep, superficies, malla de render, extrusión, bloques, importar, malla a sólido, unidades, cuerpo importado
from: 8ae9571b
---

PartCraft abre los archivos `.3dm` como **cuerpos sólidos**, del mismo modo que abre una [malla STL, OBJ o 3MF](topic:open-meshes). El cuerpo funciona como cualquier otro sólido: córtelo, añada material, taladre, haga patrones y dibuje sobre sus caras planas. No tiene historial propio.

## Abrir el archivo

1. Elija {{ui:Open}} o pulse {{key:Mod+O}}, y seleccione el archivo `.3dm`. O suéltelo sobre la vista 3D.
2. PartCraft lo lee y muestra lo que encontró: cuántos objetos con caras entran, cuántas caras vienen de las mallas guardadas en el archivo y cuántas tesela PartCraft, cada reparación, y si el resultado **cierra**.
3. Compruebe **Unidades del archivo** (el archivo indica las suyas; una unidad que PartCraft no reconoce, como las yardas, se convierte en milímetros) y **Arriba en el archivo**.
4. Elija {{ui:Open as a body}}, o **Usar para** y {{ui:Add to this part}} cuando la pieza ya tenga elementos.

## De dónde vienen los triángulos

PartCraft construye los cuerpos a partir de triángulos en esta versión, así que cada superficie del archivo se convierte en pequeñas caras planas. Para cada cara de una polisuperficie (y de cada extrusión) toma la **malla de render guardada en el archivo** cuando la hay; si no, **la tesela ella misma** (planos, superficies NURBS, superficies de revolución, curvas extruidas y extrusiones, recortadas por sus aristas). Las caras de una polisuperficie comparten sus puntos de arista, así que una polisuperficie cerrada entra cerrada. Una cara de un tipo de superficie que PartCraft todavía no lee se deja fuera, y el cuadro de diálogo indica cuántas y de qué tipo; el resultado normalmente no cierra.

## Todo lo del archivo se convierte en un cuerpo

Cada malla, polisuperficie y extrusión visible, y cada colocación de un bloque, va a **un** cuerpo, en la posición que le da el archivo. Los objetos ocultos, o en una capa desactivada, se dejan fuera. Cuando el archivo contiene varios sólidos separados, el cuerpo tiene varias piezas: abra cada una desde su propio archivo si las quiere como cuerpos separados.

## Qué se deja fuera (y se indica)

Curvas, puntos, nubes de puntos, texto, cotas, tramas y luces se dejan fuera: un cuerpo solo toma caras. También se dejan fuera los objetos SubD (conviértalos en mallas o polisuperficies en el programa que creó el archivo antes), los bloques enlazados desde otros archivos, y los colores, capas y nombres (los cuerpos de PartCraft no tienen nombres propios aquí).

## Cuando no cierra

Las polisuperficies y superficies abiertas (una sola superficie recortada, una forma con una cara que falta) no tienen interior, así que no pueden ser un sólido. El cuadro de diálogo indica cuántas aberturas quedan y no añade nada. Una la forma o tápela en el programa que la creó, guárdela y ábrala de nuevo. Véase [Cuando una malla no cierra](topic:open-meshes#when-a-mesh-does-not-close).
