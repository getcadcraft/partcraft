---
title: Exportación para impresión, STEP y DXF
summary: Exportá la pieza como STL o 3MF para impresión 3D, como sólido STEP exacto para otros programas de CAD y CAM, y un boceto o una cara plana como DXF para corte láser y chorro de agua.
keywords: exportar, guardar como, ifc, bim, conjuntos de propiedades, stl, 3mf, impresión 3D, slicer, step, stp, step exacto, b-rep, ap242, ap214, cam, taller de máquinas, fresado, dxf, láser, chorro de agua, cnc, patrón plano, perfil, malla, facetado
from: e1de71d5
---

Exportaciones ha'e kópia ambue formatópe. Reguarda avei el archivo `.partcraft.json`: ha'e kuri PartCraft ohechauka jey ha omoambue jey hag̃ua.

Exportaciones opa pieza ohechaukáva pantalla-pe, milímetro-pe. Peteĩ montaje-pe, STL, 3MF, STEP ha Plano (PDF) ombojojáva montaje entero: ehecha [Lista de piezas, vistas explosionadas y piezas móviles](topic:assembly-bom-explode). Ndaipóri sólido ko'ẽrõ: "There is no solid to export yet." ("Todavía no hay sólido para exportar.")

## Impresión 3D: STL térã 3MF

1. Opcional: tuicha superficie redondo-kuéra-pe, ejejuhu espacio vacío ndaipóri nada seleccionado ha emoambue **Curves** **Fine (128 per turn)** térã **Very fine (256 per turn)** panel derecha-pe. STL ha 3MF opa triángulo-kuéra-gui.
2. Eiti {{ui:Export}}, upéi {{ui:STL, for 3D printing}} térã {{ui:3MF, for 3D printing}}.
3. El archivo ojedescarga. La barra de estado ohechauka, por ejemplo, "Exported Part1.stl (binary, mm, Z up, 1536 triangles)."

Ambos formato ha'e **Z up**, impresora ha slicer-kuéra omoña haguéicha. PartCraft-pe mundo ha'e Y up, upévare exportación ombojojá pieza: mboyve ohechaukáva PartCraft-pe (ojoaplano Top plane-pe) ohechauka ara slicer-pe, ha boceto Top plane-pe ojehecha pieza ojaho'o mesa-pe. Slicer-pe ndoikovéi orientación final tuicha ndaha'éi.

3MF ha'e formato pyahu ha michĩvéva, slicer-kuéra ohenduha unidad-nguéva. Eiporu STL programa ndoikuaái 3MF.

Ojekuaa hag̃ua ndaha'éi ojeitéva: pieza ojejuhu hermético, ojeikotevẽ impresora mesa ha ojeiko cara plana-pe, eiporu {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}: ehecha [Pieza ojeprepara hag̃ua impresión 3D](topic:print-3d).

## Otro CAD programa-kuéra-pe: STEP

Eiti {{ui:Export}}, upéi {{ui:STEP AP242 (exact solid)}}. Ojejapo pieza peteĩ sólido exacto milímetro-pe, Z up-pe mboyvetáva. Cara redonda-kuéra ojehecha cilindro, cono, esfera ha toro verdadero-kuéra haguéicha, circulo verdadero-kuéra borde-kuéra-gui, upévare ambue programa ohechakuaa agujero ha'eha agujero. Peteĩ cuerpo STEP archivo-gui ojepe'a hag̃ua, opyta archivo upe cara plana, cilindro, cono, esfera ha toro, upévare exacto-pe ojehecha avei. Cara ndaipóri ko superficie-pe (spline-pe borde, modelado rosca, STL, OBJ térã 3MF malla-gui cuerpo, STEP archivo spline, barrido ha revolución cara-kuéra) opyta facet plano sólido ko'ã pe, ha barra de estado ohechauka cuánto.

Ejemplo barra de estado: "Exported Flange.step (AP242, exact solid, mm, Z up): 14 faces on their true surfaces (10 cylindrical, 1 conical, 0 spherical, 0 toroidal), 0 fitted edge curves." Ha'e sólo sólido: ndaipóri historial, boceto térã plano.

Programa ojelee hína AP214 ntegua, eiti {{ui:STEP AP214 (exact solid)}}: sólido mismo schema más viejo-pe.

Mba'e exacto ha mba'e nahaíri:

- Cara plana, cilindro (agujero, saliente, redondeo borde recto-pe), cono (avellanado, conicidad) , esfera ha toro ha'e exacto, ha imi'a sus borde recto, circular ha elíptico. **Curves** ajuste nahaméi chupe.
- Cara redonda ojoupe (agujero ojejuhu eje-pe) ha'e curva lisa ojejuhu ambue superficie-pe 0,00001 mm-pe; "fitted edge curves" omoñe'ẽ chupe.
- Pieza ndo vacío cerrado ryepy-pe ojehecha vacío sólido-pe. Cuerpo ojeipysaka ojehecha sólido heta-pe.
- Montaje ndaha'éi exacto STEP-pe ko'ẽrõ: exportá pieza-kuéra peteĩ-peteĩ.

Ojehechakuaa OpenCascade-pe archivo ojelee ha ojejuhu sólido valido, volumen ojekalkulava mano-pe. Ndaha'éi oñeabri jave opa CAD térã CAM programa-pe; oikuaa peteĩ ndoikóiva archivo, {{ui:STEP (faceted, mesh kernel)}} ojejapo mismo forma cara plana-kuéra-pe (PartCraft ejes-pe, Y up), ha ere {{ui:Help}} › {{ui:Report a problem}} rupive.

Mecanizado-pe, Manufacture espacio avei ojejapo sólido exacto setup-pe coordenadas-pe: ehecha [Ojejapo trayectoria ha G-code](topic:manufacture#exact-step-for-the-shop).

## BIM programa-kuéra-pe: IFC ohechaukáva propiedad opavavé

Eiti {{ui:Export}}, upéi {{ui:IFC 4 (with every property)}}. Ojejapo pieza IFC 4 elemento-pe edificio ha planta modelo-kuéra-pe; forma triángulo-kuéra-gui (Z up, milímetro-pe), ha PartCraft ohecha'ỹvape conjunto de propiedades-pe:

| Conjunto de propiedades | Ombyte |
|---|---|
| **PartCraft_Part** | Nombre, material ha densidad, configuración activa, cuerpo-kuéra mbovy; montaje-pe avei número de pieza ha descripción |
| **PartCraft_Parameters** | Opa parámetro pieza-pegua valor-ndive; fórmula expresión ha nota ojeporu propiedad descripción-pe |
| **PartCraft_TitleBlock** | Plano cuadro de título-pe ejapóva campo-kuéra (título, número de plano, revisión, empresa, dibujado, revisado ha aprobado, fecha, acabado, tolerancia general) ha hoja tamaño |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volumen, área superficial, masa (material-ndive) ha tamaño total |

Material ojehecha IFC material-pe, ha número de plano ha'e elemento etiqueta. Montaje-pe, pieza peteĩ peteĩ ojejapo tipo-pe ha iñambue propiedad-kuéra; copia peteĩ peteĩ ojeikóva montaje ojeikotevẽ-pe, valor propio **PartCraft_Instance**-pe: iñe'ẽ, lista de materiales-pe ítem número ha ojeikoséva base-pe.

## Láser, chorro de agua térã CNC perfil-kuéra-pe: DXF

Mokõi clase DXF, ambos versión R12, opa CAD ha CAM programa oipe'a:

### Peteĩ boceto

1. Eiporavo boceto historial-pe (térã oñeabri jave).
2. Eiti {{ui:Export}}, upéi {{ui:DXF of the sketch or flat face}}. (Boceto panel derecha-pe avei oĩ {{ui:Export as DXF}}.)

Ojejuhu `<pieza> - <boceto>.dxf` boceto koordenada-pe: línea, arco verdadero ha círculo capa **PROFILE**-pe, construcción geometría **CONSTRUCTION**-pe, punto suelto **POINTS**-pe.

### Peteĩ cara plana del sólido

1. Ejejuhu cara plana vista-pe (ejemplo, placa agujero-kuéra ryepy).
2. Eiti {{ui:Export face as DXF}} panel derecha-pe, térã {{ui:Export}}, upéi {{ui:DXF of the sketch or flat face}}.

Ojejuhu `<pieza> - face.dxf`: cara contorno ha opa agujero. Agujero redondo (círculo entero cilindro cara-gui: agujero perforado, térã agujero STEP archivo abierto) ojejapo círculo verdadero agujero propio centro ha radio-pe. Ambue contorno ha'e polilínea cerrada, ha borde redondo (esquina redondeada, ranura, arco) ha'e facet, upévare emoĩ **Curves** Fine-pe ántes, si herramienta ohechaukáva tuicha ajustado. Barra de estado ohechauka mboy contorno, mboy ha'e círculo verdadero ha cara área.

Ndoejúi boceto ni cara plana ojeselecciona: "Open or select a sketch, or pick a flat face, to export DXF."

## Peteĩ plano

PDF plano-pe peteĩ propio guía: [Ejapo peteĩ hoja de plano](topic:drawing-pdf).

## Formato ndaipóri

glTF, OBJ, IGES ha Parasolid ndoexportásiri koʼág̃a versión-pe. DWG ojejapo tenda variant pack-pe, plano hoja-kuéra haguéicha: ehecha [Ejapo variant pack configuración-kuéra-gui](topic:variant-pack). Ehecha avei [Formatos de archivo](topic:file-formats).
