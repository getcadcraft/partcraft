---
title: Formatos de archivo
summary: Cada archivo que PartCraft lee y escribe, con sus extensiones, unidades, ejes y lo que conserva o pierde cada uno.
keywords: formatos, tipos de archivo, extensiones, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, malla, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, unidades, z up
from: 4d0ecbee
---

| Formato | Extensión | Abrir | Guardar o exportar | Unidades | Eje hacia arriba | Conserva |
|---|---|---|---|---|---|---|
| Pieza PartCraft | `.partcraft.json` | Sí | {{ui:Save}} | mm | Y | El historial completo: bocetos, relaciones, cotas, elementos, supresión, retroceso, ajuste de curvas, ajustes del plano y GD&T, texto STEP importado en una versión anterior |
| Montaje PartCraft | `.partcraft-asm.json` | Sí | {{ui:Save}} en un montaje | mm | Y | Cada pieza (incrustada), las copias y sus posiciones, las uniones |
| STL (binario o texto) | `.stl` | Sí, como cuerpo sólido: [Abrir un STL, OBJ o 3MF](topic:open-meshes) | {{ui:STL, for 3D printing}} | mm (se pregunta al abrir) | Z | Sólo los triángulos del sólido |
| 3MF | `.3mf` | Sí, como cuerpo sólido | {{ui:3MF, for 3D printing}} | mm (indicado en el archivo) | Z | El sólido como un objeto de malla |
| OBJ | `.obj` | Sí, como cuerpo sólido (sólo caras) | No | se pregunta al abrir | Z o Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Sí, como cuerpo sólido leído como triángulos (las caras curvas se dibujan como facetas; las caras planas, cilindros, conos, esferas y toros del archivo se conservan para la exportación exacta): [Abrir un archivo STEP](topic:import-step) | | mm (de la unidad del archivo) | Z, o Y si lo indicás | Los sólidos y cuerpos de superficie, montajes con cada pieza en su lugar; sin colores, nombres, árbol de montaje ni PMI |
| `.3dm` | `.3dm` | Sí, como un cuerpo sólido de sus mallas y superficies (mallas de render guardadas, si no teselado): [Abrir un modelo .3dm](topic:open-3dm-files) | | De la unidad del archivo | Z, o Y si lo indicás | Mallas, polisuperficies, extrusiones y colocaciones de bloque como un solo cuerpo; sin curvas, colores, capas ni nombres |
| STEP AP242, exacto | `.step` | | {{ui:STEP AP242 (exact solid)}} | mm | Z | Un sólido exacto: caras planas, cilindros, conos, esferas y toros en sus superficies verdaderas, círculos y líneas verdaderos como aristas; los lados spline, roscas modeladas, cuerpos de archivos de malla y caras spline de STEP quedan como facetas. El STEP para otros programas de CAD y CAM |
| STEP AP214, exacto | `.step` | | {{ui:STEP AP214 (exact solid)}} | mm | Z | El mismo sólido exacto en el esquema AP214 más viejo, para programas que sólo leen ese |
| STEP AP242, facetado | `.step` | | {{ui:STEP (faceted, mesh kernel)}} | mm | Y | Un sólido cerrado de caras planas: superficies redondas como facetas. Para un programa que rechaza el archivo exacto |
| STEP AP214, facetado | `.step` | | {{ui:STEP AP214 (faceted, mesh kernel)}} | mm | Y | El mismo sólido en el esquema AP214 más viejo, para programas que sólo leen ese |
| Paquete USD | `.usdz` | No | {{ui:USD package (.usdz)}} | m | Z | El sólido con su material, volumen y masa; un montaje con cada pieza una vez y cada copia colocada: [Exportar como USD](topic:usd) |
| IFC 4 | `.ifc` | No | {{ui:IFC 4 (with every property)}} | mm | Z | La forma como triángulos, el material, cada parámetro, el cuadro de título, las cantidades; las piezas de un montaje como tipos y sus copias colocadas |
| DXF R12, boceto | `.dxf` | No | {{ui:DXF of the sketch or flat face}} con un boceto seleccionado | mm | x, y propios del boceto | Líneas, arcos y círculos verdaderos, puntos; capas PROFILE, CONSTRUCTION, POINTS |
| DXF R12, cara | `.dxf` | No | {{ui:DXF of the sketch or flat face}} con una cara plana elegida | mm | x, y propios de la cara | Los contornos de la cara: agujeros redondos como círculos verdaderos, el resto como polilíneas cerradas (bordes redondos como facetas) |
| Plano PDF | `.pdf` | No | {{ui:Drawing (PDF): views, section, detail, GD&T}} | mm en una hoja A3 | | Vistas frontal, superior, derecha, isométrica, corte y detalle dibujadas desde facetas, líneas ocultas, tamaños generales, símbolos GD&T, cuadro de título |

## Los archivos de PartCraft

Ambos son texto plano (JSON). El sólido nunca se guarda: PartCraft lo reconstruye desde el historial, así los archivos quedan chicos y siempre coinciden con el historial.

- Cada archivo tiene un número de versión. Esta versión escribe cada archivo de pieza con la versión más baja que contiene lo que usa (2 a 5; un cuerpo hecho de malla necesita 5) y abre toda versión anterior. Un archivo de un PartCraft más nuevo se rechaza con un mensaje que nombra ambas versiones.
- Cada valor se verifica al abrir un archivo. Los nombres pierden los caracteres de control; los números fuera de rango, las referencias a elementos inexistentes y los tipos de elemento desconocidos se rechazan con un motivo claro.
- No edites estos archivos a mano salvo que conozcas el formato. Un archivo que no pasa las verificaciones no se abre.
- Una pieza con un sólido STEP grande importado en una versión anterior puede superar los 50 MB, lo máximo que PartCraft abre como archivo de pieza (ver [Solución de problemas](topic:troubleshooting#file-problems)).

## Facetas y exactitud

STL y 3MF siempre están hechos de facetas, según el ajuste **Curves**, y lo mismo el DXF de cara, salvo los agujeros redondos, que son círculos verdaderos. El DXF de boceto tiene arcos y círculos verdaderos, porque sale directo del boceto. Esta versión construye cada pieza con el núcleo de malla, así que las vistas del plano (incluidos los cortes) también son facetadas. La exportación STEP exacta es la excepción: el núcleo conoce la superficie verdadera de cada cara a partir del boceto (o del archivo STEP del que se abrió un cuerpo), así que las caras redondas se escriben como cilindros, conos, esferas y toros verdaderos sin importar cómo esté **Curves** (ver [Exportación para impresión, STEP y DXF](topic:export-files#for-other-cad-programs-step)).

## No admitido en esta versión

| Formato | Estado |
|---|---|
| glTF, IGES, Parasolid, ACIS (ni entrada ni salida); exportación OBJ | No hecho |
| DWG | Sólo lo escribe [el variant pack](topic:variant-pack), como hoja de plano de cada configuración. No se lee, y sin otra exportación. Exportá DXF; todo programa de CAD abre DXF R12 |
| STEP de montaje y plano de un montaje | Todavía no hecho. Exportá cada pieza como STEP exacto; STL, 3MF y la lista de materiales se exportan desde un montaje |
| Archivos nativos de pieza y montaje de otros programas (salvo `.3dm`, que se abre como un cuerpo) | No hecho |

Ver [Lo que todavía no está hecho](topic:not-built-yet).
