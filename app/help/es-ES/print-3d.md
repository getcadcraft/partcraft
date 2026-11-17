---
title: Preparar una pieza para la impresión 3D
summary: Compruebe que una pieza o un ensamblaje está cerrado, cabe en su impresora y se apoya sobre una base; después descárguelo como STL o 3MF para su laminador.
keywords: impresión 3D, impresora, imprimir, laminador, slicer, stl, 3mf, estanco, cerrado, manifold, cama, tamaño de la cama, voladizo, soportes, base, milímetros, exportar, roscas, holgura
from: 90d81dff
---

Un laminador necesita una forma cerrada: sin agujeros, con todas las caras orientadas hacia fuera y sin atravesarse a sí misma. Las piezas que construye PartCraft ya son cerradas por construcción, así que la comprobación sobre todo le indica el tamaño, si la pieza cabe en la cama de su impresora, si se apoya sobre una cara plana y cuánto voladizo tiene.

## Comprobar y descargar

1. Opcional, una sola vez: configure la cama de su impresora en {{ui:Configuración}} › PartCraft › **Impresora 3D**: ancho, fondo y alto en milímetros. Déjelos vacíos para omitir esa comprobación.
2. Elija {{ui:Exportar}} y después {{ui:Comprobar para impresión 3D (STL o 3MF)…}}.

   El cuadro indica "Listo para imprimir" o "No listo para imprimir", enumera lo que falla y da el tamaño sobre la cama (X × Y × Z, en milímetros), el volumen y el número de triángulos.

3. Haga clic en {{ui:Download 3MF}} o {{ui:Download STL}}. El archivo es el mismo que {{ui:Exportar}} › {{ui:3MF, para impresión 3D}} o {{ui:STL, para impresión 3D}}.

En un ensamblaje, la comprobación y los archivos abarcan todo el ensamblaje, con cada copia en la posición en que está colocada.

La pieza se comprueba de pie, tal como la escribe la exportación: lo que apunta hacia arriba en PartCraft (perpendicular al plano Planta) apunta hacia arriba en la cama. Una pieza dibujada sobre el plano Planta queda tumbada.

## Qué puede indicar el cuadro

**No listo para imprimir** (un laminador puede rechazarla o imprimirla mal): agujeros (aristas con una cara a un solo lado), aristas compartidas por tres o más caras, caras orientadas en sentidos opuestos, un cuerpo del revés o un cuerpo que se atraviesa a sí mismo. Una pieza construida en PartCraft nunca debería mostrar esto; si lo muestra, consulte [Solución de problemas](topic:troubleshooting).

**Advertencias** (imprime, pero revísela antes):

- **Más grande que la cama de su impresora**, incluso girada 90° sobre ella.
- **Ninguna cara queda plana abajo**: gire la pieza en su laminador para que una cara descanse sobre la cama, o necesitará soportes o una balsa.
- **Se inclina más de 45° respecto a la vertical**: esas caras necesitan soporte tal como está. Otra orientación puede necesitar menos.
- **Los cuerpos separados se solapan** o **se tocan cara a cara**: los laminadores suelen unirlos. {{ui:Combinar}} en Elementos › Más los une en un solo cuerpo. Véase [Cuerpos](topic:bodies).
- **Menos de 1 mm en alguna dimensión**: revise las medidas de la pieza.

## Roscas que se imprimen

Una rosca modelada se imprime como una rosca real. Dele algo de **Holgura** para que un tornillo impreso entre en una tuerca impresa: véase [Roscas](topic:threads).

## Superficies redondas más suaves

STL y 3MF están formados por triángulos. Para superficies redondas más suaves, haga clic en un espacio vacío para que no quede nada seleccionado y configure **Curvas** en **Fina (128 por vuelta)** o **Muy fina (256 por vuelta)** en el panel derecho antes de exportar. Más triángulos implican archivos más grandes.

## Más grande, más pequeña o en piezas

- **Exportar › Escalar para impresión (STL o 3MF)…** guarda la pieza escalada por ejes sin modificarla: un **margen de contracción** en porcentaje (tamaño × (1 + s), o el tamaño exacto ÷ (1 − s)) para un modelo de fundición, o factores simples, respecto al centro, a la esquina inferior, al centro de la base o al origen.
- **Exportar › Dividir para impresión (un zip de piezas)…** corta una pieza demasiado grande para su impresora en trozos que caben cada uno en la cama que indique, unidos por espigas, chavetas, colas de milano, agujeros para clavijas o alojamientos para imanes (con la holgura que defina). Numera cada trozo y cada unión, y guarda los trozos como STL o 3MF en un zip con una hoja de ensamblaje. La pieza en sí no cambia.

## No comprobado

El espesor de pared, los detalles más pequeños que su boquilla puede imprimir y la forma en que el laminador colocará los soportes. Su laminador lo muestra.
