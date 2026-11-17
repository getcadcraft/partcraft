---
title: Exportar para impresión, STEP y DXF
summary: Exporte la pieza como STL o 3MF para impresión 3D, como sólido STEP exacto para otros programas CAD y CAM, y un croquis o una cara plana como DXF para corte láser y por chorro de agua.
keywords: exportar, guardar como, ifc, bim, conjuntos de propiedades, stl, 3mf, impresión 3D, laminador, step, stp, step exacto, b-rep, ap242, ap214, cam, taller de maquinado, fresado, dxf, láser, chorro de agua, cnc, patrón plano, perfil, malla, facetado
from: e1de71d5
---

Las exportaciones son copias en otros formatos. Conserve también el archivo `.partcraft.json`: es el único archivo que PartCraft puede volver a abrir y editar.

Todas las exportaciones trabajan con la pieza en pantalla, en milímetros. En un ensamblaje, STL, 3MF, STEP y Dibujo (PDF) exportan todo el ensamblaje: vea [Lista de piezas, vistas explosionadas y piezas móviles](topic:assembly-bom-explode). Si todavía no hay sólido: "Todavía no hay ningún sólido que exportar."

## Para impresión 3D: STL o 3MF

1. Opcional: para superficies redondas suaves, haga clic en un espacio vacío para que no haya nada seleccionado y ponga **Curvas** en **Fina (128 por vuelta)** o **Muy fina (256 por vuelta)** en el panel derecho. STL y 3MF siempre están formados por triángulos.
2. Elija {{ui:Exportar}}, luego {{ui:STL, para impresión 3D}} o {{ui:3MF, para impresión 3D}}.
3. El archivo se descarga. La barra de estado dice, por ejemplo: "Exportado Part1.stl (binario, mm, Z hacia arriba, 1536 triángulos)."

Ambos formatos son **Z hacia arriba**, como lo esperan las impresoras y los laminadores. El mundo propio de PartCraft es Y hacia arriba, así que la exportación gira la pieza: lo que apunta hacia arriba en PartCraft (perpendicular al plano Superior) apunta hacia arriba en el laminador, y una pieza dibujada sobre el plano Superior queda plana sobre la plataforma de impresión. Ajuste la orientación final en su laminador si hace falta.

3MF es un formato más nuevo y más pequeño, que los laminadores leen con las unidades incluidas. Use STL si un programa no acepta 3MF.

Para comprobar primero que la pieza está cerrada, cabe en la plataforma de su impresora y se apoya sobre una cara plana, use {{ui:Exportar}} › {{ui:Comprobar para impresión 3D (STL o 3MF)…}}: vea [Prepare una pieza para impresión 3D](topic:print-3d).

## Para otros programas CAD: STEP

Elija {{ui:Exportar}}, luego {{ui:STEP AP242 (sólido exacto)}}. Escribe la pieza como un solo sólido exacto, en milímetros, girado a Z hacia arriba. Las caras redondas se escriben como cilindros, conos, esferas y toros verdaderos, con círculos verdaderos como aristas, para que el otro programa pueda reconocer un agujero como agujero. Un cuerpo abierto desde un archivo STEP conserva las caras planas, cilindros, conos, esferas y toros de ese archivo, así que también salen exactos. Las caras sin esa superficie (el lado de una spline, una rosca modelada, un cuerpo de una malla STL, OBJ o 3MF, una spline de un archivo STEP, y caras barridas o de revolución) quedan como facetas planas dentro del mismo sólido, y la barra de estado indica cuántas. La barra de estado dice, por ejemplo: "Exportado Flange.step (AP242, sólido exacto, mm, Z hacia arriba): 14 caras en sus superficies verdaderas (10 cilíndricas, 1 cónica, 0 esféricas, 0 toroidales), 0 curvas de arista ajustadas." Solo contiene el sólido: sin historial, sin croquis, sin dibujo. Si el otro programa lee solo AP214, elija {{ui:STEP AP214 (sólido exacto)}}: el mismo sólido en ese esquema más antiguo.

Qué es exacto y qué no:

- Las caras planas, los cilindros (agujeros, resaltos, redondeos en aristas rectas), los conos (avellanados, conicidades), las esferas y los toros son exactos, y también lo son sus aristas rectas, circulares y elípticas. El ajuste **Curvas** no los cambia.
- Donde se cruzan dos caras redondas (un agujero taladrado a través de un eje), la arista es una curva suave ajustada a ambas superficies con una tolerancia de 0.00001 mm; "curvas de arista ajustadas" las cuenta.
- Una cavidad cerrada dentro de la pieza se escribe como un vacío del sólido. Varios cuerpos separados se escriben como varios sólidos.
- Un ensamblaje todavía no se escribe como STEP exacto: exporte cada pieza.

Se comprobó leyendo los archivos de nuevo en OpenCascade, que informa de sólidos válidos con los volúmenes calculados a mano. Todavía no se ha abierto en todos los programas CAD o CAM. Si uno rechaza un archivo, {{ui:STEP (facetado, núcleo de malla)}} escribe la misma forma como caras planas (en los ejes propios de PartCraft, Y hacia arriba). Por favor, infórmenos mediante {{ui:Ayuda}} › {{ui:Informar de un problema}}.

Para maquinado, el espacio de trabajo Fabricación también escribe el sólido exacto en las coordenadas de trabajo de la preparación: vea [Haga trayectorias y código G](topic:manufacture#exact-step-for-the-shop).

## Para programas BIM: IFC con todas las propiedades

Elija {{ui:Exportar}}, luego {{ui:IFC 4 (con todas las propiedades)}}. Escribe la pieza como un elemento IFC 4 para modelos de edificios e instalaciones, con su forma como triángulos (Z hacia arriba, milímetros), y con lo que PartCraft sabe de ella en conjuntos de propiedades:

| Conjunto de propiedades | Contiene |
|---|---|
| **PartCraft_Part** | Nombre, material y su densidad, la configuración activa, cuántos cuerpos; en un ensamblaje, también el número de pieza y la descripción |
| **PartCraft_Parameters** | Cada parámetro de la pieza con su valor; la expresión de una fórmula y una nota están en la descripción de la propiedad |
| **PartCraft_TitleBlock** | Los campos del cajetín del dibujo que usted llenó (título, número de dibujo, revisión, empresa, dibujó, revisó y aprobó, fecha, acabado, tolerancia general) y el tamaño de hoja |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volumen, área superficial, masa (con un material) y el tamaño total |

El material se adjunta como material IFC, y el número de dibujo es la etiqueta del elemento. En un ensamblaje, cada pieza se escribe una vez como tipo que contiene sus propiedades, y cada copia se coloca donde la pone el ensamblaje, con sus propios valores en **PartCraft_Instance**: su nombre, su número de elemento en la lista de materiales, y si es la pieza fija al suelo.

## Para perfiles láser, de chorro de agua o CNC: DXF

Dos tipos de DXF, ambos versión R12, que abren todos los programas CAD y CAM:

### Un croquis

1. Seleccione el croquis en el historial (o tenga el croquis abierto).
2. Elija {{ui:Exportar}}, luego {{ui:DXF del croquis o de la cara plana}}. (El panel derecho del croquis también tiene {{ui:Exportar como DXF}}.)

Obtiene `<pieza> - <croquis>.dxf` en las coordenadas propias del croquis: líneas, arcos y círculos verdaderos en la capa **PROFILE**, geometría de construcción en **CONSTRUCTION** y puntos sueltos en **POINTS**.

### Una cara plana del sólido

1. Haga clic en una cara plana de la vista (por ejemplo, la parte superior de una placa con agujeros).
2. Elija {{ui:Exportar cara como DXF}} en el panel derecho, o {{ui:Exportar}}, luego {{ui:DXF del croquis o de la cara plana}}.

Obtiene `<pieza> - face.dxf`: el contorno de la cara y cada agujero que tenga. Un agujero redondo (un círculo completo donde un cilindro se une a la cara: un agujero taladrado, o un agujero de un archivo STEP abierto) se escribe como círculo verdadero, con el centro y el radio propios del agujero. Cada otro contorno es una polilínea cerrada, y sus aristas redondas (esquinas redondeadas, ranuras, arcos) quedan como facetas; por eso, si la fresa las sigue de cerca, ponga antes **Curvas** en Fina. La barra de estado indica cuántos contornos hay, cuántos son círculos verdaderos y el área de la cara.

Si no hay un croquis ni una cara plana seleccionados: "Abra o seleccione un croquis, o designe una cara plana, para exportar DXF."

## Un dibujo

El dibujo en PDF tiene su propia guía: [Haga una hoja de dibujo](topic:drawing-pdf).

## Formatos no disponibles

glTF, OBJ, IGES y Parasolid no se exportan en esta versión. DWG solo lo escribe el paquete de variantes, como hoja de dibujo: vea [Cree un paquete de variantes a partir de sus configuraciones](topic:variant-pack). Vea [Formatos de archivo](topic:file-formats).
