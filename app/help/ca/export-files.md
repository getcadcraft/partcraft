---
title: Exporta per a impressió, STEP i DXF
summary: Exporta la peça com a STL o 3MF per a impressió 3D, com a sòlid STEP exacte per a altres programes CAD i CAM, i un croquis o una cara plana com a DXF per al tall amb làser i amb jet d'aigua.
keywords: exporta, desa com a, ifc, bim, conjunts de propietats, stl, 3mf, impressió 3D, laminador, step, stp, step exacte, b-rep, ap242, ap214, cam, taller mecànic, fresat, dxf, làser, jet d'aigua, cnc, patró pla, perfil, malla, facetat
from: e1de71d5
---

Les exportacions són còpies en altres formats. Conserveu també el fitxer `.partcraft.json`: és l'únic fitxer que PartCraft pot tornar a obrir i editar.

Totes les exportacions treballen sobre la peça de la pantalla, en mil·límetres. En un conjunt, STL, 3MF, STEP i Dibuix (PDF) exporten en canvi tot el conjunt: vegeu [Llista de peces, vistes explosionades i peces mòbils](topic:assembly-bom-explode). Si encara no hi ha cap sòlid: "Encara no hi ha cap sòlid per exportar."

## Per a impressió 3D: STL o 3MF

1. Opcional: per a superfícies rodones i llises, feu clic en un espai buit perquè no hi hagi res seleccionat i definiu **Corbes** a **Fina (128 per volta)** o **Molt fina (256 per volta)** al tauler de la dreta. STL i 3MF estan sempre formats per triangles.
2. Trieu {{ui:Exporta}}, i després {{ui:STL, per a impressió 3D}} o {{ui:3MF, per a impressió 3D}}.
3. El fitxer es baixa. La barra d'estat diu, per exemple: "Exportat Part1.stl (binari, mm, Z amunt, 1536 triangles)."

Tots dos formats són **Z amunt**, com esperen les impressores i els laminadors. El món propi de PartCraft és Y amunt, de manera que l'exportació gira la peça: el que apunta cap amunt a PartCraft (perpendicular al pla Superior) apunta cap amunt al laminador, i una peça dibuixada al pla Superior queda plana sobre el llit. Si cal, definiu l'orientació final al laminador.

El 3MF és un format més nou i més petit, que els laminadors llegeixen amb les unitats incloses. Useu STL si un programa no accepta 3MF.

Per comprovar abans que la peça és tancada, que cap al llit de la impressora i que recolza en una cara plana, useu {{ui:Exporta}} › {{ui:Comprova per a impressió 3D (STL o 3MF)…}}: vegeu [Prepara una peça per a la impressió 3D](topic:print-3d).

## Per a altres programes CAD: STEP

Trieu {{ui:Exporta}}, i després {{ui:STEP AP242 (sòlid exacte)}}. Escriu la peça com un únic sòlid exacte, en mil·límetres i girat a Z amunt. Les cares rodones s'escriuen com a cilindres, cons, esferes i tors de veritat, amb cercles veritables per a les seves arestes, de manera que l'altre programa pot reconèixer un forat com a forat. Un cos obert des d'un fitxer STEP manté les cares planes, cilindres, cons, esferes i tors d'aquest fitxer, de manera que també surten exactes. Les cares sense una superfície d'aquest tipus (el costat d'una spline, una rosca modelada, un cos des d'una malla STL, OBJ o 3MF, una spline d'un fitxer STEP, i les cares escombrades i de revolució) queden com a facetes planes dins del mateix sòlid, i la barra d'estat n'indica el nombre. La barra d'estat diu, per exemple: "Exportat Flange.step (AP242, sòlid exacte, mm, Z amunt): 14 cares en les seves superfícies veritables (10 cilíndriques, 1 cònica, 0 esfèriques, 0 toroïdals), 0 corbes d'aresta ajustades." Només conté el sòlid: sense historial, sense croquis i sense dibuix. Si l'altre programa només llegeix AP214, trieu {{ui:Exporta}} i després {{ui:STEP AP214 (sòlid exacte)}}: el mateix sòlid en aquell esquema més antic.

Què és exacte i què no:

- Les cares planes, els cilindres (forats, protuberàncies, arrodoniments sobre arestes rectes), els cons (avellanats, conicitats), les esferes i els tors són exactes, i també ho són les seves arestes rectes, circulars i el·líptiques. L'ajust **Corbes** no els canvia.
- Quan dues cares rodones es creuen (un forat fet travessant un eix), l'aresta és una corba suau ajustada a les dues superfícies amb una tolerància de 0.00001 mm; "corbes d'aresta ajustades" les compta.
- Una cavitat tancada dins de la peça s'escriu com a buit del sòlid. Diversos cossos separats s'escriuen com a diversos sòlids.
- Un conjunt encara no s'escriu com a STEP exacte: exporteu cada peça.

Es va comprovar llegint els fitxers amb OpenCascade, que informa de sòlids vàlids amb els volums calculats a mà. Encara no s'ha obert a tots els programes CAD o CAM. Si un en refusa un fitxer, {{ui:STEP (facetat, nucli de malla)}} escriu la mateixa forma com a cares planes (en els eixos propis de PartCraft, Y amunt), i informeu-ne a través de {{ui:Ajuda}} › {{ui:Informa d'un problema}}.

Per a mecanitzat, l'espai de treball Manufacture també escriu el sòlid exacte en les coordenades de treball pròpies de la preparació: vegeu [Crea trajectòries d'eina i G-code](topic:manufacture#exact-step-for-the-shop).

## Per a programes BIM: IFC amb totes les propietats

Trieu {{ui:Exporta}}, i després {{ui:IFC 4 (amb totes les propietats)}}. Escriu la peça com a element IFC 4 per a models d'edificis i d'instal·lacions de planta, amb la seva forma com a triangles (Z amunt, mil·límetres), i amb el que PartCraft en sap com a conjunts de propietats:

| Conjunt de propietats | Conté |
|---|---|
| **PartCraft_Part** | Nom, material i la seva densitat, la configuració activa, quants cossos; en un conjunt també el número i la descripció de la peça |
| **PartCraft_Parameters** | Cada paràmetre de la peça amb el seu valor; l'expressió d'una fórmula i una nota són a la descripció de la propietat |
| **PartCraft_TitleBlock** | Els camps del caixetí del dibuix que heu omplert (títol, número de plànol, revisió, empresa, dibuixat, revisat i aprovat per, data, acabat, tolerància general) i la mida del full |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volum, àrea superficial, massa (amb un material) i la mida global |

El material s'adjunta com a material IFC, i el número de plànol és l'etiqueta de l'element. En un conjunt, cada peça s'escriu una vegada com a tipus amb les seves propietats, i cada còpia es col·loca on la posa el conjunt amb els seus propis valors a **PartCraft_Instance**: el seu nom, el seu número d'element a la llista de materials, i si és la peça fixada a terra.

## Per a perfils de làser, jet d'aigua o CNC: DXF

Hi ha dos tipus de DXF, tots dos en versió R12, que obre qualsevol programa CAD i CAM:

### Un croquis

1. Seleccioneu el croquis a l'historial (o deixeu-lo obert).
2. Trieu {{ui:Exporta}}, i després {{ui:DXF del croquis o de la cara plana}}. (El tauler de la dreta del croquis també té {{ui:Exporta com a DXF}}.)

Obteniu `<part> - <sketch>.dxf` en les coordenades pròpies del croquis: línies, arcs i cercles veritables a la capa **PROFILE**, la geometria de construcció a **CONSTRUCTION** i els punts aïllats a **POINTS**.

### Una cara plana del sòlid

1. Feu clic en una cara plana de la vista (per exemple, la part superior d'una placa amb forats).
2. Trieu {{ui:Exporta la cara com a DXF}} al tauler de la dreta, o {{ui:Exporta}} i després {{ui:DXF del croquis o de la cara plana}}.

Obteniu `<part> - face.dxf`: el contorn de la cara i tots els forats que hi ha. Un forat rodó (un cercle complet on un cilindre troba la cara: un forat perforat, o un forat d'un fitxer STEP obert) s'escriu com a cercle veritable amb el centre i el radi propis del forat. Tots els altres contorns són una polilínia tancada, i les seves arestes rodones (cantonades arrodonides, ranures, arcs) són les seves facetes; per tant, definiu primer **Corbes** a Fina si la fresa les segueix de prop. La barra d'estat indica quants contorns hi ha, quants d'ells són cercles veritables i l'àrea de la cara.

Si no hi ha cap croquis ni cap cara plana seleccionats: "Obriu o seleccioneu un croquis, o trieu una cara plana, per exportar DXF."

## Un dibuix

El dibuix PDF té la seva pròpia guia: [Fes un full de dibuix](topic:drawing-pdf).

## Formats no disponibles

El glTF, l'OBJ, l'IGES i el Parasolid no s'exporten en aquesta versió. El DWG només l'escriu el paquet de variants, com a full de dibuix: vegeu [Fes un paquet de variants a partir de les configuracions](topic:variant-pack). Vegeu [Formats de fitxer](topic:file-formats).
