---
title: Preparar una pieza para impresión 3D
summary: Verificá que una pieza o un conjunto esté cerrado, que entre en tu impresora y que apoye en una base, después descargalo como STL o 3MF para tu slicer.
keywords: impresión 3D, imprimir, impresora, slicer, stl, 3mf, estanco, cerrado, manifold, cama, tamaño de cama, placa de impresión, voladizo, soportes, base, milímetros, exportar, roscas, holgura
from: 90d81dff
---

Un slicer necesita una forma cerrada: sin agujeros, con cada cara mirando hacia afuera, y sin que nada pase por sí mismo. Las piezas que construye PartCraft quedan cerradas por construcción, así que la verificación sobre todo te dice el tamaño, si entra en la cama de tu impresora, si apoya en una cara plana y cuánto sobresale en voladizo.

## Verificar y descargar

1. Opcional, una vez: fijá la cama de tu impresora en {{ui:Configuración}} › PartCraft › **Impresora 3D**: ancho, profundidad y alto en milímetros. Dejalos vacíos para omitir esa verificación.
2. Eiporavo {{ui:Exportar}}, después {{ui:Verificar impresión 3D (STL o 3MF)…}}.

   El diálogo dice "Listo para imprimir" o "No listo para imprimir", enumera lo que está mal, e informa el tamaño sobre la cama (X × Y × Z, en milímetros), el volumen y la cantidad de triángulos.

3. Ojapo clic en {{ui:Descargar 3MF}} o {{ui:Descargar STL}}. El archivo es el mismo que {{ui:Exportar}} › {{ui:3MF, para impresión 3D}} o {{ui:STL, para impresión 3D}}.

En un conjunto, la verificación y los archivos toman el conjunto entero, cada copia donde está ubicada.

La pieza se verifica parada como la escribe la exportación: lo que apunta hacia arriba en PartCraft (perpendicular al plano Superior) apunta hacia arriba en la cama. Una pieza bosquejada en el plano Superior queda plana.

## Qué puede decir el diálogo

**No listo para imprimir** (un slicer podría rechazarlo o imprimirlo mal): agujeros (aristas con una cara de un solo lado), aristas compartidas por tres o más caras, caras que miran en sentido opuesto, un cuerpo al revés, o un cuerpo que pasa por sí mismo. Una pieza construida en PartCraft nunca debería mostrar estas; si aparece alguna, mirá [Solución de problemas](topic:troubleshooting).

**Advertencias** (imprime, pero revisá antes):

- **Más grande que la cama de tu impresora**, incluso girada 90° sobre ella.
- **Nada apoya plano abajo**: girá la pieza en tu slicer para que una cara descanse en la cama, o necesitará soportes o una base.
- **Se inclina más de 45° desde la vertical**: esas caras necesitan soporte, tal como está parada. Otra posición podría necesitar menos.
- **Los cuerpos separados se superponen** o **se tocan cara a cara**: los slicers suelen unirlos. {{ui:Combinar}} en Elementos › Más los une en un solo cuerpo. Mirá [Cuerpos](topic:bodies).
- **Menos de 1 mm de ancho**: revisá los tamaños de la pieza.

## Roscas que se imprimen

Una rosca modelada se imprime como una rosca real. Dale algo de **Holgura** para que un perno impreso entre en una tuerca impresa: mirá [Roscas](topic:threads).

## Caras redondas suaves

STL y 3MF están hechos de triángulos. Para caras redondas más suaves, hacé clic en un espacio vacío para que nada esté seleccionado, y poné **Curvas** en **Fina (128 por vuelta)** o **Muy fina (256 por vuelta)** en el panel derecho antes de exportar. Más triángulos producen archivos más grandes.

## Más grande, más chica, o en piezas

- **Exportar › Escalar para impresión (STL o 3MF)…** guarda la pieza escalada por eje sin cambiarla: una **tolerancia de contracción** en por ciento (tamaño × (1 + s), o el tamaño exacto ÷ (1 − s)) para un molde de fundición, o factores simples, desde el centro, la esquina más baja, el centro de la base o el origen.
- **Exportar › Dividir para impresión (un zip de piezas)…** corta una pieza demasiado grande para tu impresora en partes que entran cada una en la cama que indiques, unidas por clavijas, chavetas, colas de milano, agujeros de espiga o cavidades para imanes (con la holgura que fijaste), numera cada pieza y cada unión, y guarda las piezas como STL o 3MF en un zip con una hoja de conjunto. La pieza en sí no cambia.

## No verificado

Espesor de pared, detalles más chicos que tu boquilla puede dibujar, y cómo el slicer ubica los soportes. Tu slicer muestra eso.
