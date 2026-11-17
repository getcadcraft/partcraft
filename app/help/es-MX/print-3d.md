---
title: Prepare una pieza para la impresión 3D
summary: Compruebe que una pieza o ensamblaje esté cerrado, quepa en su impresora y se apoye en una base, y luego descárguelo como STL o 3MF para su laminador.
keywords: impresión 3d, imprimir en 3d, impresora, imprimir, laminador, slicer, stl, 3mf, hermético, cerrado, múltiple, cama, tamaño de cama, plataforma de impresión, voladizo, soportes, base, milímetros, exportar, roscas, holgura
from: 90d81dff
---

Un laminador necesita una forma cerrada: sin agujeros, con todas las caras orientadas hacia afuera y sin atravesarse a sí misma. Las piezas que construye PartCraft ya son cerradas por construcción, así que la comprobación sobre todo le indica el tamaño, si cabe en la cama de su impresora, si se apoya sobre una cara plana y cuánto sobresale en voladizo.

## Comprobar y descargar

1. Opcional, una vez: configure la cama de su impresora en {{ui:Configuración}} › PartCraft › **Impresora 3D**: ancho, fondo y alto en milímetros. Déjelos vacíos para omitir esa comprobación.
2. Elija {{ui:Exportar}}, y luego {{ui:Comprobar para impresión 3D (STL o 3MF)…}}.

   El cuadro de diálogo indica "Listo para imprimir" o "No listo para imprimir", enumera lo que falla y muestra el tamaño sobre la cama (X × Y × Z, en milímetros), el volumen y el número de triángulos.

3. Haga clic en {{ui:Descargar 3MF}} o {{ui:Descargar STL}}. El archivo es el mismo que {{ui:Exportar}} › {{ui:3MF, para impresión 3D}} o {{ui:STL, para impresión 3D}}.

En un ensamblaje, la comprobación y los archivos abarcan todo el ensamblaje, cada copia en el lugar donde está colocada.

La pieza se comprueba de pie, tal como la escribe la exportación: lo que apunta hacia arriba en PartCraft (perpendicular al plano superior) apunta hacia arriba en la cama. Una pieza croquizada en el plano superior queda plana.

## Qué puede indicar el cuadro de diálogo

**No listo para imprimir** (un laminador puede rechazarla o imprimirla mal): agujeros (aristas con una cara de un solo lado), aristas compartidas por tres o más caras, caras orientadas en sentidos opuestos, un cuerpo al revés o un cuerpo que se atraviesa a sí mismo. Una pieza construida en PartCraft nunca debería mostrar estos problemas; si lo hace, vea [Solución de problemas](topic:troubleshooting).

**Advertencias** (se imprime, pero revise antes):

- **Más grande que la cama de su impresora**, incluso girada 90° sobre ella.
- **Ninguna cara queda plana abajo**: gire la pieza en su laminador para que una cara descanse sobre la cama, o necesitará soportes o una base.
- **Se inclina más de 45° respecto a la vertical**: esas caras necesitan soporte en la posición actual. Otra orientación puede necesitar menos.
- **Los cuerpos separados se superponen** o **se tocan cara a cara**: los laminadores suelen unirlos. {{ui:Combinar}} en Operaciones › Más los une en un solo cuerpo. Vea [Cuerpos](topic:bodies).
- **Menos de 1 mm de ancho**: revise los tamaños de la pieza.

## Roscas que se imprimen

Una rosca modelada se imprime como una rosca real. Déle cierta **Holgura** para que un perno impreso entre en una tuerca impresa: vea [Roscas](topic:threads).

## Superficies redondas más suaves

STL y 3MF están hechos de triángulos. Para superficies redondas más suaves, haga clic en un espacio vacío para no seleccionar nada y establezca **Curvas** en **Fina (128 por vuelta)** o **Muy fina (256 por vuelta)** en el panel derecho antes de exportar. Más triángulos generan archivos más grandes.

## Más grande, más pequeña o en piezas

- **Exportar › Escalar para impresión (STL o 3MF)…** guarda la pieza escalada por eje sin modificarla: una **tolerancia de contracción** en porcentaje (tamaño × (1 + s), o el tamaño exacto ÷ (1 − s)) para un molde de fundición, o factores simples, respecto al centro, la esquina inferior, el centro de la base o el origen.
- **Exportar › Dividir para impresión (un zip de piezas)…** corta una pieza demasiado grande para su impresora en partes que caben cada una en la cama que indique, unidas con clavijas, chavetas, colas de milano, agujeros para pasadores o cavidades para imanes (con la holgura que defina). Cada parte y cada unión se numeran, y las partes se guardan como STL o 3MF en un zip con una hoja de ensamblaje. La pieza original no cambia.

## No se comprueba

El espesor de pared, los detalles más pequeños que su boquilla puede imprimir y cómo el laminador colocará los soportes. Su laminador muestra eso.
