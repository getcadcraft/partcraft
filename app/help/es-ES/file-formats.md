---
title: Formatos de archivo
summary: Cada archivo que PartCraft lee y escribe, con sus extensiones, unidades, ejes y lo que conserva o pierde cada uno.
keywords: formatos, tipos de archivo, extensiones, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, malla, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, unidades, z hacia arriba
from: 4d0ecbee
---

| Formato | Extensión | Abrir | Guardar o exportar | Unidades | Eje vertical | Conserva |
|---|---|---|---|---|---|---|
| Pieza de PartCraft | `.partcraft.json` | Sí | {{ui:Guardar}} | mm | Y | El historial completo: croquis, relaciones, cotas, elementos, supresión, retroceso, ajuste de curvas, ajustes del dibujo y GD&T, y el texto STEP importado en una versión anterior |
| Conjunto de PartCraft | `.partcraft-asm.json` | Sí | {{ui:Guardar}} en un conjunto | mm | Y | Cada pieza (incrustada), las copias y sus posiciones, las uniones |
| STL (binario o texto) | `.stl` | Sí, como cuerpo sólido: [Abra un STL, OBJ o 3MF](topic:open-meshes) | {{ui:STL, para impresión 3D}} | mm (se pregunta al abrirlo) | Z | Solo los triángulos del sólido |
| 3MF | `.3mf` | Sí, como cuerpo sólido | {{ui:3MF, para impresión 3D}} | mm (indicado en el archivo) | Z | El sólido como un objeto de malla |
| OBJ | `.obj` | Sí, como cuerpo sólido (solo caras) | No | se pregunta al abrirlo | Z o Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Sí, como cuerpo sólido leído como triángulos (las caras curvas se dibujan como facetas; las caras planas, cilindros, conos, esferas y toros del archivo se conservan para la exportación exacta): [Abra un archivo STEP](topic:import-step) | | mm (de la unidad del archivo) | Z, o Y si lo indica | Los sólidos y cuerpos de superficie, y los conjuntos con cada pieza en su sitio; sin colores, nombres, árbol del conjunto ni PMI |
| `.3dm` | `.3dm` | Sí, como un cuerpo sólido a partir de sus mallas y superficies (mallas de render guardadas, o si no, teselado): [Abra un modelo .3dm](topic:open-3dm-files) | | De la unidad del archivo | Z, o Y si lo indica | Mallas, polisuperficies, extrusiones y posiciones de bloque como un cuerpo; sin curvas, colores, capas ni nombres |
| STEP AP242, exacto | `.step` | | {{ui:STEP AP242 (sólido exacto)}} | mm | Z | Un sólido exacto: caras planas, cilindros, conos, esferas y toros en sus superficies verdaderas, círculos y rectas verdaderos como aristas; los lados de spline, las roscas modeladas, los cuerpos de archivos de malla y las caras spline de un archivo STEP siguen siendo facetas. El STEP para otros programas CAD y CAM |
| STEP AP214, exacto | `.step` | | {{ui:STEP AP214 (sólido exacto)}} | mm | Z | El mismo sólido exacto en el esquema AP214 más antiguo, para programas que solo leen ese |
| STEP AP242, facetado | `.step` | | {{ui:STEP (facetado, núcleo de malla)}} | mm | Y | Un sólido cerrado de caras planas: superficies redondas como facetas. Para un programa que rechaza el archivo exacto |
| STEP AP214, facetado | `.step` | | {{ui:STEP AP214 (facetado, núcleo de malla)}} | mm | Y | El mismo sólido en el esquema AP214 más antiguo, para programas que solo leen ese |
| Paquete USD | `.usdz` | No | {{ui:Paquete USD (.usdz)}} | m | Z | El sólido con su material, volumen y masa; un conjunto con cada pieza una vez y cada copia colocada: [Exporte como USD](topic:usd) |
| IFC 4 | `.ifc` | No | {{ui:IFC 4 (con todas las propiedades)}} | mm | Z | La forma como triángulos, el material, cada parámetro, el cajetín y las cantidades; las piezas de un conjunto como tipos y sus copias colocadas |
| DXF R12, croquis | `.dxf` | No | {{ui:DXF del croquis o de la cara plana}} con un croquis seleccionado | mm | Ejes x, y propios del croquis | Líneas, arcos y círculos verdaderos, puntos; capas PROFILE, CONSTRUCTION, POINTS |
| DXF R12, cara | `.dxf` | No | {{ui:DXF del croquis o de la cara plana}} con una cara plana seleccionada | mm | Ejes x, y propios de la cara | Los contornos de la cara: los agujeros redondos como círculos verdaderos, el resto como polilíneas cerradas (aristas redondas como facetas) |
| PDF de dibujo | `.pdf` | No | {{ui:Dibujo (PDF): vistas, sección, detalle, GD&T}} | mm en una hoja A3 | | Vistas frontal, superior, derecha, isométrica, sección y detalle dibujadas desde facetas, líneas ocultas, tamaños totales, símbolos GD&T y cajetín |

## Los archivos de PartCraft

Ambos son texto plano (JSON). El sólido nunca se guarda: PartCraft lo reconstruye a partir del historial, así que los archivos son pequeños y siempre coinciden con el historial.

- Cada archivo tiene un número de versión. Esta versión escribe cada archivo de pieza con la versión más baja que contiene lo que usa (de 2 a 5; un cuerpo hecho de una malla necesita 5) y abre todas las versiones anteriores. Un archivo de un PartCraft más nuevo se rechaza con un mensaje que indica ambas versiones.
- Cada valor se comprueba al abrir un archivo. Los nombres pierden los caracteres de control; los números fuera de rango, las referencias a elementos inexistentes y los tipos de elemento desconocidos se rechazan con un motivo claro.
- No edite estos archivos a mano salvo que conozca el formato. Un archivo que no supere las comprobaciones no se abrirá.
- Una pieza con un sólido STEP grande importado en una versión anterior puede superar los 50 MB, el máximo que PartCraft abre como archivo de pieza (consulte [Solución de problemas](topic:troubleshooting#file-problems)).

## Facetas y exactitud

STL y 3MF siempre están formados por facetas, según el ajuste **Curvas**, y lo mismo ocurre con el DXF de cara, salvo en los agujeros redondos, que son círculos verdaderos. El DXF de croquis tiene arcos y círculos verdaderos, porque viene directamente del croquis. Esta versión construye cada pieza con el núcleo de malla, así que las vistas del dibujo (incluidas las secciones) también son facetadas. La exportación STEP exacta es la excepción: el núcleo conoce la superficie verdadera de cada cara a partir del croquis (o del archivo STEP del que se abrió un cuerpo), así que las caras redondas se escriben como cilindros, conos, esferas y toros verdaderos sea cual sea el ajuste de **Curvas** (consulte [Exporte para impresión, STEP y DXF](topic:export-files#for-other-cad-programs-step)).

## No compatible en esta versión

| Formato | Estado |
|---|---|
| glTF, IGES, Parasolid, ACIS (ni entrada ni salida); exportación OBJ | No construido |
| DWG | Lo escribe solo [el paquete de variantes](topic:variant-pack), como hoja de dibujo de cada configuración. No se lee, y no hay otra exportación. Exporte DXF; todos los programas CAD abren DXF R12 |
| STEP de conjunto y dibujo de un conjunto | No construidos todavía. Exporte cada pieza como STEP exacto; STL, 3MF y la lista de materiales se exportan desde un conjunto |
| Archivos nativos de pieza y conjunto de otros programas (salvo `.3dm`, que se abre como un cuerpo) | No construidos |

Consulte [Lo que todavía no está disponible](topic:not-built-yet).
