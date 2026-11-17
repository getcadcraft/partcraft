---
title: Abrir un STL, OBJ o 3MF como cuerpo sólido
summary: Convierta una malla de un escáner, de un sitio de impresión 3D o de otro programa en un sólido que puede cortar, ampliar y sobre el que puede dibujar; qué repara PartCraft por el camino y qué no puede arreglar.
keywords: stl, obj, 3mf, malla, malla a sólido, convertir malla, escaneo, estanca, reparar, agujeros, huecos, unidades, eje hacia arriba, cuerpo importado, caras planas
from: 7b948471
---

PartCraft abre mallas STL, OBJ y 3MF como **cuerpos sólidos**. El cuerpo funciona como cualquier otro sólido: córtelo, añada material, taladre, haga patrones, úselo en un ensamblaje o para mecanizado, y dibuje sobre sus caras planas. No tiene historial propio: una malla es solo triángulos, así que sus medidas no pueden cambiarse, solo añadirle material o quitárselo.

## Abrir una malla

1. Elija {{ui:Open}} o pulse {{key:Mod+O}}, y seleccione el archivo `.stl`, `.obj` o `.3mf`. O suéltelo sobre la vista 3D.
2. PartCraft lo lee, repara lo que puede hacer con seguridad y muestra lo que encontró: cuántos triángulos y puntos, cada reparación, y si la malla ahora **cierra**.
3. Compruebe **Unidades del archivo** y **Arriba en el archivo**. STL y OBJ no indican sus unidades, así que los milímetros son una suposición; un archivo 3MF indica las suyas. La línea **Tamaño aquí** muestra el tamaño del cuerpo con su elección, así que una pieza que sale 25.4 veces más pequeña se detecta fácilmente (estaba en pulgadas).
4. Si la pieza en pantalla está vacía, elija {{ui:Open as a body}}. Si ya tiene elementos, elija **Usar para** (añadir a la pieza, restar de ella, o conservar solo el solape), y luego {{ui:Add to this part}}, o {{ui:New part}} para empezar de nuevo con la malla.

Aparece un elemento **Imported1** en el historial. La barra de estado indica, por ejemplo, «bracket.stl es un cuerpo sólido: 15200.512 mm³, 14 caras planas para dibujar sobre ellas.»

## Qué repara PartCraft

| Reparación | Qué significa |
|---|---|
| Esquinas duplicadas unidas | Un STL repite cada esquina por cada uno de sus triángulos; se unen en un solo punto |
| Triángulos sin área eliminados | Astillas cuyas esquinas están sobre una misma línea |
| Triángulos duplicados eliminados | Un triángulo escrito dos veces se conserva una vez; dos que miran en sentidos opuestos (una pared interior) se eliminan ambos |
| Huecos pequeños cerrados | Aristas que casi se tocan (a menos de una milésima del tamaño de la pieza) se unen |
| Agujeros rellenados | Una abertura cuyo borde queda plano se rellena sea cual sea su tamaño; una alabeada solo si es pequeña |
| Triángulos vueltos hacia fuera | Los triángulos que miran al revés se giran para concordar con sus vecinos, y toda la superficie mira hacia fuera |

## Cuando una malla no cierra

Un sólido necesita una superficie sin aberturas. Cuando PartCraft no puede cerrarla, el cuadro de diálogo indica cuántas aberturas y aristas abiertas quedan, y no hay cuerpo que añadir. Cierre las aberturas en el programa que creó la malla, o expórtela de nuevo como malla cerrada (estanca), y ábrala otra vez.

PartCraft no toca una abertura cuando rellenarla podría adivinarse mal: un agujero grande alabeado, o dos aberturas en el mismo plano (una cara en forma de anillo que falta, donde rellenar cada borde cubriría el agujero del centro). También se indica una arista compartida por más de dos triángulos: una superficie así no tiene un interior claro.

## Croquis sobre sus caras planas

Las zonas planas hechas de muchos triángulos se unen cada una en una **cara plana**, para que un croquis pueda situarse sobre ellas: haga clic en la cara y elija {{ui:Sketch on this face}}. Una cara a la que se añade o se corta después sigue siendo una cara. Las zonas redondas (un agujero, un redondeo) siguen siendo triángulos: no son caras que pueda elegir, y la vista dibuja su contorno a partir del ángulo entre triángulos.

## Cambiarlo después

Seleccione **Imported1** para ver el archivo de origen, cuántos triángulos tiene y qué se reparó. **Unidades del archivo**, **Arriba en el archivo** y **Usar para** pueden cambiarse allí; cada cambio es un paso de deshacer.

## Dónde se guarda

La malla reparada se guarda **dentro** del archivo `.partcraft.json`, así que no necesita volver a tener el archivo de malla. Un archivo de pieza con un cuerpo de malla es la versión 5: un PartCraft anterior lo rechaza por su versión. Una malla de 200,000 triángulos añade unos 1.2 MB.

## Límites

- Como máximo 3 millones de triángulos y 200 MB en un archivo.
- Un cuerpo hecho de una malla se construye con el núcleo de mallas. Con el núcleo exacto activado (solo desarrolladores), lo indica y no se construye.
- Los materiales de OBJ, las coordenadas de textura y las curvas de forma libre se dejan fuera; los colores, materiales y objetos de soporte de 3MF se dejan fuera (el cuadro de diálogo indica cuántos objetos se omitieron).
- El cuerpo es tan fino como la malla: un STL grueso da caras redondas gruesas. Los agujeros que taladre en él son tan redondos como sus propios elementos.
