---
title: Exportar para impresión, STEP e DXF
summary: Exporte a peza como STL ou 3MF para impresión 3D, como sólido STEP exacto para outros programas de CAD e CAM, e un esbozo ou unha cara plana como DXF para corte láser e por chorro de auga.
keywords: exportar, gardar como, ifc, bim, conxuntos de propiedades, stl, 3mf, impresión 3D, slicer, step, stp, step exacto, b-rep, ap242, ap214, cam, taller mecánico, fresado, dxf, láser, chorro de auga, cnc, patrón plano, perfil, malla, facetado
from: e1de71d5
---

As exportacións son copias noutros formatos. Garde tamén o ficheiro `.partcraft.json`: é o único ficheiro que PartCraft pode volver abrir e editar.

Todas as exportacións traballan sobre a peza que se ve na pantalla, en milímetros. Nun conxunto, STL, 3MF, STEP e Debuxo (PDF) exportan en cambio o conxunto completo: consulte [Lista de pezas, vistas explosionadas e pezas móbiles](topic:assembly-bom-explode). Se aínda non hai ningún sólido: "Aínda non hai ningún sólido que exportar."

## Para impresión 3D: STL ou 3MF

1. Opcional: para superficies redondas suaves, prema un espazo baleiro para non seleccionar nada e estableza **Curvas** en **Fina (128 por volta)** ou **Moi fina (256 por volta)** no panel dereito. STL e 3MF están sempre formados por triángulos.
2. Escolla {{ui:Exportar}}, despois {{ui:STL, para impresión 3D}} ou {{ui:3MF, para impresión 3D}}.
3. O ficheiro descárgase. A barra de estado indica, por exemplo, "Exportado Part1.stl (binario, mm, Z cara arriba, 1536 triángulos)."

Os dous formatos van **Z cara arriba**, como esperan as impresoras e os slicers. O espazo propio de PartCraft é Y cara arriba, así que a exportación xira a peza: o que apunta cara arriba en PartCraft (perpendicular ao plano Superior) apunta cara arriba no slicer, e unha peza esbozada no plano Superior queda plana sobre a base. Estableza a orientación final no seu slicer se fai falta.

O 3MF é un formato máis novo e máis pequeno que os slicers len coas unidades incluídas. Use STL se un programa non admite 3MF.

Para comprobar antes que a peza está pechada, cabe na mesa da impresora e se apoia sobre unha cara plana, use {{ui:Exportar}} › {{ui:Comprobar a impresión 3D (STL ou 3MF)…}}: consulte [Preparar unha peza para a impresión 3D](topic:print-3d).

## Para outros programas de CAD: STEP

Escolla {{ui:Exportar}}, despois {{ui:STEP AP242 (sólido exacto)}}. Escribe a peza como un único sólido exacto, en milímetros, xirado a Z cara arriba. As caras redondas escríbense como cilindros, cones, esferas e toros verdadeiros, con círculos verdadeiros como arestas, para que o outro programa poida seleccionar un orificio como orificio. Un corpo aberto desde un ficheiro STEP conserva as caras planas, cilindros, cones, esferas e toros dese ficheiro, así que tamén saen exactos. As caras sen esa superficie (o lateral dunha spline, unha rosca modelada, un corpo dunha malla STL, OBJ ou 3MF, a spline dun ficheiro STEP, caras varridas e de revolución) quedan como facetas planas no mesmo sólido, e a barra de estado indica cantas son. A barra de estado indica, por exemplo, "Exportado Flange.step (AP242, sólido exacto, mm, Z cara arriba): 14 caras nas súas superficies verdadeiras (10 cilíndricas, 1 cónica, 0 esféricas, 0 toroidais), 0 curvas de arestas axustadas." Contén só o sólido: nin historial, nin esbozos, nin debuxo. Se o outro programa só le AP214, escolla {{ui:STEP AP214 (sólido exacto)}}: o mesmo sólido nese esquema máis antigo.

Que é exacto e que non:

- As caras planas, os cilindros (orificios, protuberancias, redondeos en arestas rectas), os cones (avellanados, conicidades), as esferas e os toros son exactos, e tamén as súas arestas rectas, circulares e elípticas. O axuste **Curvas** non os cambia.
- Onde se cruzan dúas caras redondas (un orificio taladrado a través dun eixe), a aresta é unha curva suave axustada a ambas as superficies con marxe de 0,00001 mm; "curvas de arestas axustadas" conta estas curvas.
- Unha cavidade pechada dentro da peza escríbese como un oco do sólido. Varios corpos separados escríbense como varios sólidos.
- Un conxunto aínda non se escribe como STEP exacto: exporte cada peza.

Comprobouse lendo de novo os ficheiros en OpenCascade, que informa de sólidos válidos cos volumes calculados a man. Aínda non se abriu en todos os programas de CAD ou CAM; se algún rexeita un ficheiro, {{ui:STEP (facetado, núcleo de malla)}} escribe a mesma forma como caras planas (nos eixos propios de PartCraft, Y cara arriba), e infórmenos a través de {{ui:Axuda}} › {{ui:Informar dun problema}}.

Para mecanizado, o espazo de traballo Fabricación tamén escribe o sólido exacto nas coordenadas de traballo propias da preparación: consulte [Facer traxectorias e G-code](topic:manufacture#exact-step-for-the-shop).

## Para programas BIM: IFC con todas as propiedades

Escolla {{ui:Exportar}}, despois {{ui:IFC 4 (con todas as propiedades)}}. Escribe a peza como un elemento IFC 4 para modelos de edificios e plantas, a súa forma como triángulos (Z cara arriba, milímetros), coa información que PartCraft sabe sobre ela como conxuntos de propiedades:

| Conxunto de propiedades | Contén |
|---|---|
| **PartCraft_Part** | Nome, material e a súa densidade, a configuración activa, cantos corpos hai; nun conxunto tamén o número e a descrición da peza |
| **PartCraft_Parameters** | Cada parámetro da peza co seu valor; a expresión dunha fórmula e unha nota figuran na descrición da propiedade |
| **PartCraft_TitleBlock** | Os campos do cadro de rótulo do debuxo que cubriu (título, número de debuxo, revisión, empresa, debuxado, comprobado e aprobado por, data, acabado, tolerancia xeral) e o tamaño da folla |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volume, superficie, masa (cun material) e as dimensións totais |

O material únese como material IFC, e o número de debuxo é a etiqueta do elemento. Nun conxunto, cada peza escríbese unha vez como tipo que contén as súas propiedades, e cada copia colócase onde a sitúa o conxunto cos seus propios valores en **PartCraft_Instance**: o seu nome, o seu número de elemento na lista de materiais e se é a peza fixada ao chan.

## Para perfís de láser, chorro de auga ou CNC: DXF

Hai dous tipos de DXF, ambos na versión R12, que abren todos os programas de CAD e CAM:

### Un esbozo

1. Seleccione o esbozo no historial (ou téñao aberto).
2. Escolla {{ui:Exportar}}, despois {{ui:DXF do esbozo ou da cara plana}}. (O panel dereito do esbozo tamén ten {{ui:Exportar como DXF}}.)

Obtén `<part> - <sketch>.dxf` nas coordenadas propias do esbozo: liñas, arcos e círculos verdadeiros na capa **PROFILE**, a xeometría de construción en **CONSTRUCTION** e os puntos soltos en **POINTS**.

### Unha cara plana do sólido

1. Prema unha cara plana na vista (por exemplo, a parte superior dunha placa con orificios).
2. Escolla {{ui:Exportar cara como DXF}} no panel dereito, ou {{ui:Exportar}}, despois {{ui:DXF do esbozo ou da cara plana}}.

Obtén `<part> - face.dxf`: o contorno da cara e todos os orificios que teña. Un orificio redondo (un círculo completo onde un cilindro se une coa cara: un orificio taladrado, ou un orificio dun ficheiro STEP aberto) escríbese como un círculo verdadeiro co centro e o raio propios do orificio. Calquera outro contorno é unha polilínea pechada, e as súas arestas redondas (esquinas de redondeo, ranuras, arcos) son as súas facetas, así que estableza primeiro **Curvas** en Fina se a ferramenta de corte as segue de preto. A barra de estado indica cantos contornos hai, cantos deles son círculos verdadeiros e a superficie da cara.

Se non hai seleccionado nin esbozo nin cara plana: "Abra ou seleccione un esbozo, ou escolla unha cara plana, para exportar DXF."

## Un debuxo

O debuxo en PDF ten a súa propia guía: [Facer unha folla de debuxo](topic:drawing-pdf).

## Formatos non dispoñibles

glTF, OBJ, IGES e Parasolid non se exportan nesta versión. O DWG só o escribe o paquete de variantes, como folla de debuxo: consulte [Facer un paquete de variantes a partir das súas configuracións](topic:variant-pack). Consulte [Formatos de ficheiro](topic:file-formats).
