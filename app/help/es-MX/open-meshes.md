---
title: Abrir un STL, OBJ o 3MF como cuerpo sólido
summary: Convierta una malla de un escáner, de un sitio de impresión 3D o de otro programa en un sólido que puede cortar, al que puede agregar material y sobre el que puede hacer croquis; qué repara PartCraft en el camino y qué no puede reparar.
keywords: stl, obj, 3mf, malla, malla a sólido, convertir malla, escaneo, hermética, reparar, agujeros, huecos, unidades, eje hacia arriba, cuerpo importado, caras planas
from: 7b948471
---

PartCraft abre las mallas STL, OBJ y 3MF como **cuerpos sólidos**. El cuerpo funciona como cualquier otro sólido: córtelo, agréguele material, taládrelo, haga patrones con él, úselo en un ensamblaje o para mecanizado, y dibuje croquis sobre sus caras planas. No tiene historial propio: una malla es solo triángulos, así que sus medidas no pueden cambiarse, solo agregarse o cortarse.

## Abrir una malla

1. Elija {{ui:Open}} o pulse {{key:Mod+O}}, y seleccione el archivo `.stl`, `.obj` o `.3mf`. O suéltelo sobre la vista 3D.
2. PartCraft lo lee, repara lo que puede hacer con seguridad y muestra lo que encontró: cuántos triángulos y puntos tiene, cada reparación, y si la malla ahora **cierra**.
3. Revise **Unidades del archivo** y **Arriba en el archivo**. STL y OBJ no indican sus unidades, así que los milímetros son una suposición; un archivo 3MF indica las suyas. La línea **Tamaño aquí** muestra el tamaño del cuerpo con su elección, así que una pieza que llega 25.4 veces más pequeña se nota fácilmente (estaba en pulgadas).
4. Si la pieza en pantalla está vacía, elija {{ui:Open as a body}}. Si la pieza ya tiene operaciones, elija **Usarlo para** (agregar a la pieza, restar de ella, o conservar solo la superposición), y luego {{ui:Add to this part}}, o {{ui:New part}} para empezar de nuevo con la malla.

Aparece una operación **Imported1** en el historial. La barra de estado indica, por ejemplo: «bracket.stl es un cuerpo sólido: 15200.512 mm³, 14 caras planas para croquis.»

## Qué repara PartCraft

| Reparación | Qué significa |
|---|---|
| Esquinas duplicadas unidas | Un STL repite cada esquina por cada uno de sus triángulos; se unen en un solo punto |
| Triángulos sin área eliminados | Triángulos delgados cuyas esquinas están sobre una misma línea |
| Triángulos duplicados eliminados | Un triángulo escrito dos veces se conserva una vez; dos que miran en sentidos opuestos (una pared interior) se eliminan ambos |
| Huecos pequeños cerrados | Las aristas que casi se tocan (a menos de una milésima del tamaño de la pieza) se unen |
| Agujeros rellenados | Una abertura cuyo borde está plano se rellena sin importar su tamaño; una alabeada solo cuando es pequeña |
| Triángulos volteados hacia afuera | Los triángulos que miran en sentido incorrecto se voltean para coincidir con sus vecinos, y toda la superficie se orienta hacia afuera |

## Cuando una malla no cierra

Un sólido necesita una superficie sin aberturas. Cuando PartCraft no puede cerrarla, el cuadro de diálogo indica cuántas aberturas y aristas abiertas quedan, y no hay cuerpo que agregar. Cierre las aberturas en el programa que creó la malla, o expórtela de nuevo como malla cerrada (hermética), y vuelva a abrirla.

PartCraft deja en paz una abertura cuando rellenarla podría adivinar mal: un agujero grande y alabeado, o dos aberturas en el mismo plano (una cara en anillo que falta, donde rellenar cada borde cubriría el agujero del centro). También se informa de una arista compartida por más de dos triángulos: esa superficie no tiene un interior claro.

## Hacer croquis sobre sus caras planas

Las áreas planas formadas por muchos triángulos se unen cada una en una **cara plana**, para que un croquis pueda colocarse sobre ellas: haga clic en la cara y elija {{ui:Sketch on this face}}. Una cara a la que después se corte o se agregue material sigue siendo una cara. Las áreas redondeadas (un agujero, un redondeo) siguen siendo triángulos: no son caras que pueda elegir, y la vista dibuja su contorno según el ángulo entre triángulos.

## Cambiarlo después

Seleccione **Imported1** para ver el archivo de origen, cuántos triángulos tiene y qué se reparó. **Unidades del archivo**, **Arriba en el archivo** y **Usarlo para** pueden cambiarse ahí; cada cambio es un paso de deshacer.

## Dónde se guarda

La malla reparada se guarda **dentro** del archivo `.partcraft.json`, así que no necesita el archivo de malla otra vez. Un archivo de pieza con un cuerpo de malla es de la versión 5: una versión anterior de PartCraft lo rechaza por su versión. Una malla de 200 000 triángulos agrega unos 1.2 MB.

## Límites

- Como máximo 3 millones de triángulos y 200 MB en un archivo.
- Un cuerpo hecho de una malla se construye con el núcleo de malla. Con el núcleo exacto activado (solo para desarrolladores), lo indica y no se construye.
- Los materiales OBJ, las coordenadas de textura y las curvas de forma libre se dejan fuera; los colores, materiales y objetos de soporte de 3MF también se dejan fuera (el cuadro de diálogo indica cuántos objetos se omitieron).
- El cuerpo tiene la finura de la malla: un STL grueso da caras redondas gruesas. Los agujeros que taladre en él quedan tan redondos como sus propias operaciones.
