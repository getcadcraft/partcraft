---
title: Exportar para impresión, STEP y DXF
summary: Exporte la pieza como STL o 3MF para impresión 3D, como sólido STEP exacto para otros programas CAD y CAM, y un croquis o una cara plana como DXF para corte láser y por chorro de agua.
keywords: exportar, guardar como, ifc, bim, conjuntos de propiedades, stl, 3mf, impresión 3D, slicer, step, stp, step exacto, b-rep, ap242, ap214, cam, taller de mecanizado, fresado, dxf, láser, chorro de agua, cnc, patrón plano, perfil, malla, facetado
from: e1de71d5
---

Las exportaciones son copias en otros formatos. Conserve también el archivo `.partcraft.json`: es el único archivo que PartCraft puede volver a abrir y editar.

Todas las exportaciones trabajan sobre la pieza en pantalla, en milímetros. En un conjunto, STL, 3MF, STEP y Dibujo (PDF) exportan en su lugar el conjunto completo: consulte [Lista de piezas, vistas explosionadas y piezas móviles](topic:assembly-bom-explode). Si todavía no hay ningún sólido: "Todavía no hay ningún sólido que exportar."

## Para impresión 3D: STL o 3MF

1. Opcional: en superficies redondas suaves, haga clic en un espacio vacío para que no haya nada seleccionado y ponga **Curvas** en **Fina (128 por vuelta)** o **Muy fina (256 por vuelta)** en el panel derecho. STL y 3MF siempre están formados por triángulos.
2. Elija {{ui:Exportar}} y, a continuación, {{ui:STL, para impresión 3D}} o {{ui:3MF, para impresión 3D}}.
3. El archivo se descarga. La barra de estado indica, por ejemplo: "Exportado Part1.stl (binario, mm, Z hacia arriba, 1536 triángulos)."

Ambos formatos son **Z hacia arriba**, como esperan las impresoras y los slicers. El mundo de PartCraft es Y hacia arriba, así que la exportación gira la pieza: lo que apunta hacia arriba en PartCraft (perpendicular al plano Superior) apunta hacia arriba en el slicer, y una pieza dibujada en el plano Superior queda plana sobre la cama. Ajuste la orientación final en su slicer si es necesario.

3MF es un formato más nuevo y compacto que los slicers leen con las unidades incluidas. Use STL si un programa no admite 3MF.

Para comprobar antes que la pieza está cerrada, cabe en la cama de su impresora y se apoya en una cara plana, use {{ui:Exportar}} › {{ui:Comprobar para impresión 3D (STL o 3MF)…}}: consulte [Prepare una pieza para la impresión 3D](topic:print-3d).

## Para otros programas CAD: STEP

Elija {{ui:Exportar}} y, a continuación, {{ui:STEP AP242 (sólido exacto)}}. Escribe la pieza como un único sólido exacto, en milímetros, girado a Z hacia arriba. Las caras redondas se escriben como cilindros, conos, esferas y toros verdaderos, con círculos verdaderos para sus aristas, de modo que el otro programa puede seleccionar un agujero como agujero. Un cuerpo abierto desde un archivo STEP conserva las caras planas, cilindros, conos, esferas y toros de ese archivo, así que también salen exactos. Las caras sin tal superficie (el lateral de una spline, una rosca modelada, un cuerpo de una malla STL, OBJ o 3MF, la spline de un archivo STEP, y las caras barridas y de revolución) permanecen como facetas planas dentro del mismo sólido, y la barra de estado indica cuántas son. Por ejemplo, la barra de estado muestra: "Exported Flange.step (AP242, exact solid, mm, Z up): 14 faces on their true surfaces (10 cylindrical, 1 conical, 0 spherical, 0 toroidal), 0 fitted edge curves." Solo contiene el sólido: sin historial, sin croquis, sin dibujo. Si el otro programa solo lee AP214, elija {{ui:STEP AP214 (sólido exacto)}}: el mismo sólido en ese esquema más antiguo.

Qué es exacto y qué no:

- Las caras planas, cilindros (agujeros, resaltes, redondeos en aristas rectas), conos (avellanados cónicos, conicidades), esferas y toros son exactos, y también lo son sus aristas rectas, circulares y elípticas. El ajuste **Curvas** no los cambia.
- Donde dos caras redondas se cruzan (un agujero taladrado a través de un eje), la arista es una curva suave ajustada a ambas superficies con una tolerancia de 0.00001 mm; "fitted edge curves" las cuenta.
- Una cavidad cerrada dentro de la pieza se escribe como un vacío del sólido. Varios cuerpos separados se escriben como varios sólidos.
- Un conjunto todavía no se escribe como STEP exacto: exporte cada pieza.

Se comprobó leyendo los archivos con OpenCascade, que informa de sólidos válidos con volúmenes calculados a mano. Todavía no se ha abierto en todos los programas CAD o CAM; si alguno rechaza un archivo, {{ui:STEP (facetado, núcleo de malla)}} escribe la misma forma como caras planas (en los ejes propios de PartCraft, Y hacia arriba), y le rogamos que nos lo comunique mediante {{ui:Ayuda}} › {{ui:Informar de un problema}}.

Para mecanizado, el espacio de trabajo Fabricación también escribe el sólido exacto en las coordenadas de trabajo de la preparación: consulte [Genere trayectorias y G-code](topic:manufacture#exact-step-for-the-shop).

## Para programas BIM: IFC con todas las propiedades

Elija {{ui:Exportar}} y, a continuación, {{ui:IFC 4 (con todas las propiedades)}}. Escribe la pieza como un elemento IFC 4 para modelos de edificios e instalaciones, con su forma como triángulos (Z hacia arriba, milímetros), y con lo que PartCraft sabe de ella en forma de conjuntos de propiedades:

| Conjunto de propiedades | Contiene |
|---|---|
| **PartCraft_Part** | Nombre, material y su densidad, la configuración activa, cuántos cuerpos; en un conjunto, también el número de pieza y la descripción |
| **PartCraft_Parameters** | Cada parámetro de la pieza con su valor; la expresión de una fórmula y una nota están en la descripción de la propiedad |
| **PartCraft_TitleBlock** | Los campos del cajetín del dibujo que rellenó (título, número de plano, revisión, empresa, dibujado, comprobado y aprobado por, fecha, acabado, tolerancia general) y el tamaño de la hoja |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volumen, superficie, masa (con un material) y tamaño total |

El material se adjunta como material IFC, y el número de plano es la etiqueta del elemento. En un conjunto, cada pieza se escribe una vez como tipo que contiene sus propiedades, y cada copia se coloca donde la pone el conjunto, con sus propios valores en **PartCraft_Instance**: su nombre, su número de elemento en la lista de materiales y si es la pieza anclada.

## Para perfiles láser, de chorro de agua o CNC: DXF

Dos tipos de DXF, ambos versión R12, que abre cualquier programa CAD y CAM:

### Un croquis

1. Seleccione el croquis en el historial (o tenga abierto el croquis).
2. Elija {{ui:Exportar}} y, a continuación, {{ui:DXF del croquis o de la cara plana}}. (El panel derecho del croquis también tiene {{ui:Exportar como DXF}}.)

Obtiene `<part> - <sketch>.dxf` en las coordenadas propias del croquis: líneas, arcos y círculos verdaderos en la capa **PROFILE**, geometría de construcción en **CONSTRUCTION**, puntos sueltos en **POINTS**.

### Una cara plana del sólido

1. Haga clic en una cara plana de la vista (por ejemplo, la superficie superior de una placa con agujeros).
2. Elija {{ui:Exportar cara como DXF}} en el panel derecho, o {{ui:Exportar}} y, a continuación, {{ui:DXF del croquis o de la cara plana}}.

Obtiene `<part> - face.dxf`: el contorno de la cara y cada agujero que contiene. Un agujero redondo (un círculo completo donde un cilindro se encuentra con la cara: un agujero taladrado, o un agujero de un archivo STEP abierto) se escribe como círculo verdadero, con el centro y el radio propios del agujero. Cualquier otro contorno es una polilínea cerrada, y sus aristas redondeadas (esquinas de redondeo, ranuras, arcos) son sus facetas, así que ajuste primero **Curvas** a Fina si la herramienta las sigue de cerca. La barra de estado indica cuántos contornos hay, cuántos son círculos verdaderos y el área de la cara.

Si no hay seleccionado ni un croquis ni una cara plana: "Abra o seleccione un croquis, o elija una cara plana, para exportar DXF."

## Un dibujo

El dibujo en PDF tiene su propia guía: [Haga una hoja de dibujo](topic:drawing-pdf).

## Formatos no disponibles

glTF, OBJ, IGES y Parasolid no se exportan en esta versión. DWG solo lo escribe el paquete de variantes, como hoja de dibujo: consulte [Cree un paquete de variantes a partir de sus configuraciones](topic:variant-pack). Consulte [Formatos de archivo](topic:file-formats).
