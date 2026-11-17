---
title: Abrir un archivo STEP y construir sobre él
summary: Traiga a PartCraft un modelo STEP de un proveedor o de otro programa CAD como cuerpo sólido, como pieza nueva o añadido a la pieza actual; indique hacia dónde está arriba y añada croquis y operaciones.
keywords: step, stp, importar, abrir step, ap203, ap214, ap242, modelo de proveedor, sólido simple, sólido importado, eje vertical, z arriba, y arriba, triángulos, facetado, paso de ensamblaje
from: ca0eca5f
---

PartCraft abre archivos STEP (`.step` o `.stp`, AP203, AP214 y AP242) como **cuerpos sólidos** sobre los que puede hacer croquis, cortar, taladrar y combinar con sus propias operaciones. El cuerpo no tiene historial propio: no puede cambiar las dimensiones con las que se creó, solo añadirle material o cortarlo.

Esta versión construye todas las piezas con el núcleo de malla, así que un archivo STEP se **lee como triángulos**: las caras planas siguen siendo planas, y las caras curvas (cilindros, conos, esferas, toros, superficies B-spline) se convierten en muchas caras planas pequeñas. Su volumen queda a una fracción de un porcentaje del exacto. Para conservar exactas las caras curvas se necesita un núcleo exacto, que no está incluido en esta versión.

## Abrir un archivo STEP

1. Elija {{ui:Abrir}} o pulse {{key:Mod+O}}, y seleccione el archivo `.step` o `.stp`. O suéltelo sobre la vista 3D.
2. PartCraft lee el archivo y muestra lo que ha encontrado, por ejemplo: "Archivo AP214: 1 sólido, 10 caras, leído como triángulos." Debajo aparecen el número de triángulos, cualquier elemento que tuvo que omitir o unir, y si el resultado queda cerrado.
3. Compruebe **Eje hacia arriba en el archivo**. Un archivo STEP indica su propia unidad (milímetros, pulgadas, metros…); PartCraft lo convierte a milímetros, así que **Unidades en el archivo** muestra Milímetros, "lo indica el archivo". **Tamaño aquí** muestra su tamaño final.
4. Elija {{ui:Abrir como cuerpo}} para una pieza vacía, o {{ui:Añadir a esta pieza}} / {{ui:Pieza nueva}} cuando la pieza ya tenga operaciones. Al añadir, se le pregunta **Usar para** qué: añadir, cortar o conservar solo la intersección.

En el historial aparece una operación **Imported1**, y la barra de estado indica, por ejemplo, "plate.step es un cuerpo sólido: 57995.937 mm³, 6 caras planas para hacer croquis."

## Un STEP de ensamblaje

Un ensamblaje entra como **un solo cuerpo**, con cada pieza en la posición que indica el archivo ("3 piezas colocadas en el archivo entran donde están"). Una pieza usada dos veces entra dos veces. No se conservan los nombres de las piezas ni el árbol del ensamblaje.

## Indicar hacia dónde está arriba

La mayoría de programas CAD usan Z hacia arriba; PartCraft usa Y hacia arriba. Por defecto, PartCraft gira el archivo para que su Z apunte hacia arriba aquí. Si la pieza llega tumbada de lado, seleccione **Imported1** y ponga **Eje hacia arriba en el archivo** en **Y hacia arriba**. **Unidades en el archivo** y **Usar para** también se pueden cambiar allí; cada cambio es un paso de deshacer.

## Construir sobre él

- Haga clic en una cara plana del cuerpo y elija {{ui:Croquis en esta cara}}. Las caras planas del modelo STEP conservan su lugar cuando se reconstruye el cuerpo.
- Añada cortes, agujeros, resaltes, matrices y simetrías como en cualquier pieza.
- Compruebe su tamaño en el cuadro **Pieza**: volumen, área superficial y tamaño.

Los redondeos, chaflanes y vaciados necesitan el núcleo exacto, como en cualquier pieza de esta versión ([El núcleo de malla](topic:solid-kernels)).

## Dónde se guarda

Los triángulos se guardan **dentro** del archivo `.partcraft.json`, así que el archivo de la pieza es autosuficiente: ya no necesita el archivo STEP.

## Mensajes

| Mensaje | Qué significa |
|---|---|
| '"part.stp" no es un archivo STEP (no empieza por ISO-10303-21).' | El archivo no es texto STEP simple. Pida al remitente un archivo STEP AP203, AP214 o AP242 |
| "No se pudo leer el archivo STEP: su sección de datos falta o está dañada." | El archivo está cortado o dañado. Cópielo de nuevo |
| "El archivo STEP no contiene ningún cuerpo sólido ni de superficie: no hay nada que importar." | El archivo solo contiene dibujos, puntos o datos. Pida un sólido |
| "Ese archivo STEP es demasiado grande (más de 60 MB) para importarlo aquí." y los demás límites del lector (entradas, caras, triángulos) | Simplifique el modelo en su origen, o envíe las piezas una a una |
| "… se omitieron líneas dañadas del archivo." | Algunas líneas no se pudieron leer; el resto se importó. Revise el cuerpo |
| "… caras no se pudieron convertir en triángulos y se omitieron." | Esas caras dejan huecos, que PartCraft intenta rellenar; si el cuerpo no queda cerrado, no se añade |
| "… caras de un tipo que no se lee (…) se omitieron." | Un tipo de superficie poco frecuente. Pida el modelo con superficies planas o B-spline |
| "No queda cerrado …" | Las caras no forman un sólido cerrado (un modelo de superficies, o caras omitidas). PartCraft muestra las aberturas y no añade nada |

## Límites

- Las caras curvas se dibujan y miden como facetas planas, como en cualquier pieza de esta versión. PartCraft conserva con el cuerpo las caras planas, cilindros, conos, esferas y toros del archivo, así que {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} las escribe de nuevo como superficies verdaderas, con los agujeros como agujeros, junto con las operaciones que añada. Las caras que el archivo define como splines, barridos o superficies de revolución siguen siendo facetas en la exportación. Una pieza guardada antes de la versión 0.9.1 no tiene superficies conservadas: vuelva a abrir el archivo STEP para obtenerlas.
- {{ui:Exportar}} › {{ui:DXF del croquis o de la cara plana}} con una cara plana seleccionada escribe un agujero redondo del archivo como círculo verdadero.
- No se leen los colores, los nombres de los cuerpos, la estructura del ensamblaje ni los PMI (tolerancias del archivo).
- Además de STEP, PartCraft abre mallas STL, OBJ y 3MF ([Abrir un STL, OBJ o 3MF](topic:open-meshes)) y archivos `.3dm` ([Abrir un modelo .3dm](topic:open-3dm-files)) como cuerpos sólidos. No se admiten IGES ni los archivos nativos de otros programas.
- Una pieza con un sólido STEP importado por una versión que tenía el núcleo exacto conserva el texto STEP; esta versión omite esa operación ("no implementada"). Vuelva a abrir el archivo STEP para importarlo como triángulos.
