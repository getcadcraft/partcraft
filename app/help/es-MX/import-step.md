---
title: Abrir un archivo STEP y construir sobre él
summary: Traiga un modelo STEP de un proveedor u otro programa CAD a PartCraft como cuerpo sólido, como pieza nueva o agregado a la pieza actual, defina hacia dónde está arriba y agregue croquis y operaciones.
keywords: step, stp, importar, abrir step, ap203, ap214, ap242, modelo de proveedor, sólido sin historial, sólido importado, eje hacia arriba, z hacia arriba, y hacia arriba, triángulos, facetado, STEP de ensamble
from: ca0eca5f
---

PartCraft abre archivos STEP (`.step` o `.stp`, AP203, AP214 y AP242) como **cuerpos sólidos** sobre los que puede hacer croquis, cortar, perforar y combinar con sus propias operaciones. El cuerpo no tiene historial propio: no puede cambiar las dimensiones con las que se hizo, solo agregarle material o cortarlo.

Esta versión construye cada pieza con el núcleo de malla, así que un archivo STEP se **lee como triángulos**: las caras planas siguen planas, y las caras curvas (cilindros, conos, esferas, toros, superficies B-spline) se convierten en muchas caras planas pequeñas. Su volumen queda a una fracción de un por ciento del exacto. Conservar las caras curvas con exactitud requiere un núcleo exacto, que no está en esta versión.

## Abrir un archivo STEP

1. Elija {{ui:Abrir}} o presione {{key:Mod+O}}, y seleccione el archivo `.step` o `.stp`. También puede soltarlo sobre la vista 3D.
2. PartCraft lee el archivo y muestra lo que encontró, por ejemplo: "Archivo AP214: 1 sólido, 10 caras, leído como triángulos." Debajo aparecen el número de triángulos, lo que tuvo que omitir o unir, y si el resultado cierra.
3. Revise **Arriba en el archivo**. Un archivo STEP indica su propia unidad (milímetros, pulgadas, metros…); PartCraft lo convierte a milímetros, así que **Unidades en el archivo** muestra Milímetros, "el archivo lo indica". **Tamaño aquí** muestra qué tan grande quedará.
4. Elija {{ui:Abrir como cuerpo}} para una pieza vacía, o {{ui:Agregar a esta pieza}} / {{ui:Pieza nueva}} cuando la pieza ya tiene operaciones. Al agregar, se pregunta qué hacer con **Usar para**: agregar, cortar o conservar solo la superposición.

Aparece una operación **Imported1** en el historial, y la barra de estado indica, por ejemplo, "plate.step es un cuerpo sólido: 57995.937 mm³, 6 caras planas para hacer croquis."

## Un STEP de ensamble

Un ensamble entra como **un solo cuerpo**, con cada pieza en el lugar donde el archivo la coloca ("3 piezas colocadas en el archivo entran donde están"). Una pieza usada dos veces entra dos veces. Los nombres de las piezas y el árbol del ensamble no se conservan.

## Definir hacia dónde está arriba

La mayoría de los programas CAD usan Z hacia arriba; PartCraft usa Y hacia arriba. Por defecto, PartCraft gira el archivo para que su Z apunte hacia arriba aquí. Si la pieza llega acostada de lado, seleccione **Imported1** y ponga **Arriba en el archivo** en **Y hacia arriba**. **Unidades en el archivo** y **Usar para** también se pueden cambiar ahí; cada cambio es un paso de deshacer.

## Construir sobre él

- Haga clic en una cara plana del cuerpo y elija {{ui:Croquis en esta cara}}. Las caras planas del modelo STEP conservan su lugar cuando el cuerpo se reconstruye.
- Agregue cortes, agujeros, salientes, patrones y simetrías como en cualquier pieza.
- Revise su tamaño en el cuadro **Pieza**: volumen, área superficial y tamaño.

Los redondeos, chaflanes y vaciados requieren el núcleo exacto, como en cualquier pieza de esta versión ([El núcleo de malla](topic:solid-kernels)).

## Dónde se guarda

Los triángulos se guardan **dentro** del archivo `.partcraft.json`, así que el archivo de la pieza es autosuficiente: ya no necesita el archivo STEP.

## Mensajes

| Mensaje | Qué significa |
|---|---|
| '"part.stp" no es un archivo STEP (no empieza con ISO-10303-21).' | El archivo no es texto STEP simple. Pida al remitente un archivo STEP AP203, AP214 o AP242 |
| "No se pudo leer el archivo STEP: falta su sección de datos o está dañada." | El archivo está cortado o dañado. Cópielo de nuevo |
| "El archivo STEP no contiene ningún cuerpo sólido ni de superficie: no hay nada que importar." | El archivo solo contiene dibujos, puntos o datos. Pida un sólido |
| "Ese archivo STEP es demasiado grande (más de 60 MB) para importarlo aquí." y los otros límites del lector (entradas, caras, triángulos) | Simplifique el modelo en su origen, o envíe las piezas una por una |
| "… se omitieron líneas dañadas del archivo." | Algunas líneas no se pudieron leer; el resto se importó. Revise el cuerpo |
| "… caras no se pudieron convertir en triángulos y se omitieron." | Esas caras dejan huecos, que PartCraft intenta rellenar; si el cuerpo no cierra, no se agrega |
| "… caras de un tipo que no se lee (…) se omitieron." | Un tipo de superficie poco común. Pida el modelo con superficies planas o B-spline |
| "No cierra …" | Las caras no forman un sólido cerrado (un modelo de superficie, o caras omitidas). PartCraft muestra las aberturas y no agrega nada |

## Límites

- Las caras curvas se dibujan y miden como facetas planas, como en cada pieza que construye esta versión. PartCraft conserva con el cuerpo las caras planas, cilindros, conos, esferas y toros del archivo, así que {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} los escribe de vuelta como superficies verdaderas, con los agujeros como agujeros, junto con las operaciones que agregue. Las caras que el archivo define como splines, barridos o superficies de revolución siguen siendo facetas en la exportación. Una pieza guardada antes de la versión 0.9.1 no tiene superficies conservadas: vuelva a abrir el archivo STEP para obtenerlas.
- {{ui:Exportar}} › {{ui:DXF del croquis o de la cara plana}} con una cara plana seleccionada escribe un agujero redondo del archivo como círculo verdadero.
- No se leen los colores, los nombres de los cuerpos, la estructura del ensamble ni el PMI (tolerancias del archivo).
- Además de STEP, PartCraft abre mallas STL, OBJ y 3MF ([Abrir un STL, OBJ o 3MF](topic:open-meshes)) y archivos `.3dm` ([Abrir un modelo .3dm](topic:open-3dm-files)) como cuerpos sólidos. IGES y los archivos nativos de otros programas no son compatibles.
- Una pieza con un sólido STEP importado por una versión que tenía el núcleo exacto conserva el texto STEP; esta versión omite esa operación ("no construida"). Vuelva a abrir el archivo STEP para importarlo como triángulos.
