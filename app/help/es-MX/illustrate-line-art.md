---
title: "Ilustraciones técnicas: dibujos de líneas, imágenes y hojas"
summary: Exporte cualquier vista como dibujo vectorial de líneas (SVG o PDF) con tres grosores de línea, líneas ocultas punteadas u omitidas, caras de corte con sombreado y rellenos opcionales, o como PNG; coloque varias vistas en una misma hoja.
keywords: ilustrar, dibujo de líneas, ilustración técnica, svg, pdf, png, líneas ocultas, silueta, sombreado, hoja, exportar
from: 0e9bea63
---

{{ui:Exportar}} en el grupo {{ui:Salida}} abre el cuadro de exportación:

- {{ui:Qué}}: la escena tal como está ahora, una vista o todas las vistas.
- {{ui:Como}}: **PDF** o **SVG** (dibujo vectorial de líneas; ambos se generan del mismo dibujo), **PNG del dibujo de líneas**, o una **imagen PNG de la vista 3D** (hasta 4096 píxeles de ancho), y el [archivo 3D interactivo](topic:illustrate-interactive).
- {{ui:Páginas}}: una vista por página, o todas las vistas en una hoja con su nombre debajo. {{ui:Papel}}: A4, A3, Letter o Tabloid.
- {{ui:Líneas ocultas}}: punteadas u omitidas. {{ui:Rellenos}}: como se ve la vista, ninguno, colores planos o sombreado. {{ui:Dibujar también aristas suaves}} agrega líneas de detalle.

El dibujo de líneas tiene tres grosores: contornos (siluetas, aristas abiertas y contornos de corte), aristas vivas y líneas de detalle. Las caras de corte de una sección o de un corte de caja se sombrean. Las vistas explosionadas tienen trazos de línea de cadena desde el lugar donde está cada pieza; también se dibujan los globos, las anotaciones, la lista de piezas y la lupa.

El dibujo de líneas se calcula a partir de las formas de las piezas con el método de malla (el mismo que usa la hoja de dibujo de PartCraft sin el núcleo exacto), así que las caras curvas se dibujan con sus facetas, tal como las tiene el modelo.

## Aún no disponible

- Las imágenes con la calidad del trazador de rayos (el renderizador de ModelCraft) no se ofrecen aquí; las imágenes PNG son el aspecto propio de la vista 3D.
