---
title: Formats de fitxer
summary: Tots els fitxers que PartCraft llegeix i escriu, amb les extensions, unitats, eixos i el que cada un conserva o perd.
keywords: formats, tipus de fitxer, extensions, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, malla, step, stp, ap242, dxf, r12, pdf, gltf, iges, unitats, Z amunt
from: 4d0ecbee
---

| Format | Extensió | Obre | Desa o exporta | Unitats | Eix amunt | Conserva |
|---|---|---|---|---|---|---|
| Peça PartCraft | `.partcraft.json` | Sí | {{ui:Desa}} | mm | Y | Tot l'historial: croquis, relacions, cotes, operacions, desactivació, retrocés, ajust de corbes, ajustos del dibuix i GD&T, text STEP importat en una versió anterior |
| Conjunt PartCraft | `.partcraft-asm.json` | Sí | {{ui:Desa}} en un conjunt | mm | Y | Totes les peces (incrustades), les còpies i les seves posicions, les unions |
| STL (binari o text) | `.stl` | Sí, com a cos sòlid: [Obre un STL, OBJ o 3MF](topic:open-meshes) | {{ui:STL, per a impressió 3D}} | mm (es demana en obrir-lo) | Z | Només els triangles del sòlid |
| 3MF | `.3mf` | Sí, com a cos sòlid | {{ui:3MF, per a impressió 3D}} | mm (indicat al fitxer) | Z | El sòlid com un únic objecte de malla |
| OBJ | `.obj` | Sí, com a cos sòlid (només cares) | No | es demana en obrir-lo | Z o Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Sí, com a cos sòlid llegit com a triangles (les cares corbes es dibuixen com a facetes; les cares planes, cilindres, cons, esferes i tors del fitxer es conserven per a l'exportació exacta): [Obre un fitxer STEP](topic:import-step) | | mm (de la unitat del fitxer) | Z, o Y si ho indiqueu | Els sòlids i els cossos de superfície, els conjunts amb totes les peces al seu lloc; sense colors, noms, arbre del conjunt ni PMI |
| `.3dm` | `.3dm` | Sí, com un únic cos sòlid a partir de les seves malles i superfícies (malles de renderitzat desades, si no, teselades): [Obre un model .3dm](topic:open-3dm-files) | | De la unitat del fitxer | Z, o Y si ho indiqueu | Malles, polisuperfícies, extrusions i col·locacions de blocs com un sol cos; sense corbes, colors, capes ni noms |
| STEP AP242, exacte | `.step` | | {{ui:STEP AP242 (sòlid exacte)}} | mm | Z | Un sòlid exacte: cares planes, cilindres, cons, esferes i tors sobre les seves superfícies veritables, cercles i línies veritables com a arestes; els costats de spline, les rosques modelades, els cossos de fitxers de malla i les cares spline d'un fitxer STEP es mantenen com a facetes. El STEP per usar amb altres programes CAD i CAM |
| STEP AP214, exacte | `.step` | | {{ui:STEP AP214 (sòlid exacte)}} | mm | Z | El mateix sòlid exacte en l'esquema AP214, més antic, per als programes que només llegeixen aquest |
| STEP AP242, facetat | `.step` | | {{ui:STEP (facetat, nucli de malla)}} | mm | Y | Un sòlid tancat de cares planes: les superfícies rodones com a facetes. Per a un programa que refusa el fitxer exacte |
| STEP AP214, facetat | `.step` | | {{ui:STEP AP214 (facetat, nucli de malla)}} | mm | Y | El mateix sòlid en l'esquema AP214, més antic, per als programes que només llegeixen aquest |
| Paquet USD | `.usdz` | No | {{ui:Paquet USD (.usdz)}} | m | Z | El sòlid amb el seu material, volum i massa; un conjunt amb cada peça una vegada i cada còpia col·locada: [Exporta com a USD](topic:usd) |
| IFC 4 | `.ifc` | No | {{ui:IFC 4 (amb totes les propietats)}} | mm | Z | La forma com a triangles, el material, cada paràmetre, el caixetí, les quantitats; les peces d'un conjunt com a tipus i les seves còpies col·locades |
| DXF R12, croquis | `.dxf` | No | {{ui:DXF del croquis o de la cara plana}} amb un croquis seleccionat | mm | x, y propis del croquis | Línies, arcs i cercles veritables, punts; capes PROFILE, CONSTRUCTION, POINTS |
| DXF R12, cara | `.dxf` | No | {{ui:DXF del croquis o de la cara plana}} amb una cara plana seleccionada | mm | x, y propis de la cara | Els contorns de la cara: els forats rodons com a cercles veritables, la resta com a polilínies tancades (les arestes rodones com a facetes) |
| Dibuix PDF | `.pdf` | No | {{ui:Dibuix (PDF): vistes, secció, detall, GD&T}} | mm en un full A3 | | Vistes davantera, superior, dreta, isomètrica, de secció i de detall dibuixades a partir de facetes, línies ocultes, mides globals, símbols GD&T, caixetí |

## Els fitxers de PartCraft

Tots dos són text pla (JSON). El sòlid mai no es desa: PartCraft el reconstrueix a partir de l'historial, de manera que els fitxers són petits i sempre coincideixen amb l'historial.

- Cada fitxer té un número de versió. Aquesta versió escriu cada fitxer de peça amb la versió més baixa que conté el que usa (de 2 a 5; un cos fet d'una malla necessita 5) i obre totes les versions anteriors. Un fitxer d'un PartCraft més nou es refusa amb un missatge que indica les dues versions.
- Cada valor es comprova en obrir un fitxer. Els noms perden els caràcters de control; els números fora de rang, les referències a operacions que falten i els tipus d'operació desconeguts es refusen amb un motiu clar.
- No editeu aquests fitxers a mà si no coneixeu el format. Un fitxer que no superi les comprovacions no s'obrirà.
- Una peça amb un sòlid STEP gran importat en una versió anterior pot superar els 50 MB, la mida màxima que PartCraft obre com a fitxer de peça (vegeu [Resolució de problemes](topic:troubleshooting#file-problems)).

## Facetes i exactitud

STL i 3MF estan sempre fets de facetes, segons l'ajust **Corbes**, i també ho és el DXF de cara, excepte els forats rodons, que són cercles veritables. El DXF del croquis té arcs i cercles veritables, perquè surt directament del croquis. Aquesta versió construeix totes les peces amb el nucli de malla, de manera que les vistes del dibuix (incloses les seccions) també són facetades. L'exportació STEP exacta n'és l'excepció: el nucli coneix la superfície veritable de cada cara a partir del croquis (o del fitxer STEP del qual s'ha obert un cos), de manera que les cares rodones s'escriuen com a cilindres, cons, esferes i tors veritables, sigui quin sigui l'ajust de **Corbes** (vegeu [Exporta per a impressió, STEP i DXF](topic:export-files#for-other-cad-programs-step)).

## No admès en aquesta versió

| Format | Estat |
|---|---|
| glTF, IGES, Parasolid, ACIS (entrada o sortida); exportació OBJ | Encara no implementat |
| DWG | Només l'escriu [el paquet de variants](topic:variant-pack), com a full de dibuix de cada configuració. No es llegeix, i no hi ha cap altra exportació. Exporteu DXF; qualsevol programa CAD obre el DXF R12 |
| STEP de conjunt i el dibuix d'un conjunt | Encara no implementats. Exporteu cada peça com a STEP exacte; STL, 3MF i la llista de materials s'exporten des d'un conjunt |
| Els fitxers natius de peces i conjunts d'altres programes (excepte `.3dm`, que s'obre com un únic cos) | Encara no implementat |

Vegeu [Què encara no està implementat](topic:not-built-yet).
