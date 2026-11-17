---
title: Exportació de dades: full de dades, camps i malles
summary: Deseu el full de dades d'un cos generat com a JSON o PDF, el seu camp com a imatge VTK (.vti) o conjunt de nivell OpenVDB (.vdb) i la seva superfície com a malla VTK (.vtu) per a ParaView i altres eines d'anàlisi, i la malla com a 3MF amb les dades del generador. La mateixa peça sempre escriu els mateixos fitxers.
keywords: exportar, full de dades, json, pdf, vti, vtu, vtk, paraview, 3mf, camp, distància amb signe, FEA, CFD, metadades, openvdb
from: 817b4579
---

A l'espai de treball {{ui:Enginyeria}}, o a les propietats d'un cos generat, obriu **Exportació de dades**:

| Botó | Fitxer | Per a |
|---|---|---|
| Full de dades (JSON) | `.json` | Cada entrada, cada nombre amb la seva unitat i origen, les comprovacions, l'empremta de la malla. Ordenat, sense hores: la mateixa peça dona el mateix fitxer. |
| Full de dades (PDF) | `.pdf` | El mateix en paper, en tantes pàgines com calgui. |
| Camp (.vti) | `.vti` | La peça com a distància amb signe (negativa a dins) i una màscara d'interior en una graella de punts: un fitxer d'imatge VTK per a ParaView i eines basades en VTK. Es construeix a partir de la superfície del cos a la mida de vòxel de les entrades del generador, així que triga una mica, i un cos de més de 400 000 triangles és massa gran per a la pàgina: deseu el camp des d'un script (`field_bake`) en lloc d'això. |
| Conjunt de nivell (.vdb) | `.vdb` | El mateix camp com a conjunt de nivell OpenVDB: un arbre dispers que només conserva la banda fina de vòxels al voltant de la superfície, per a eines que llegeixen OpenVDB (renderitzadors, simulació i programes 3D). La mida del vòxel i les unitats són les del generador (mil·límetres), la banda estreta és la part activa, i l'interior és negatiu. Es construeix des de la superfície com el `.vti`, amb el mateix límit de 400 000 triangles; un fitxer de més de 1.5 GB es rebutja (useu una mida de vòxel més gran). El fitxer és el format OpenVDB 224, sense compressió més enllà de l'empaquetat de valors actius propi d'OpenVDB, de manera que qualsevol lector d'OpenVDB l'obre. |
| Superfície (.vtu) | `.vtu` | Els triangles, amb l'àrea i la normal de cadascun. |
| 3MF amb dades del generador | `.3mf` | La malla en mil·límetres per a un laminador, amb el generador, les seves entrades i (per a un reticle graduat) el seu rang de parets, com a metadades del fitxer. |

Res d'aquests fitxers no prové del rellotge ni de la màquina, de manera que podeu comparar dos fitxers byte a byte: un byte canviat vol dir una peça canviada.

## Encara no implementat

- Un `.vti` o `.vdb` del camp a una mida de vòxel diferent de la del generador.
- Lectura de fitxers `.vdb` (només està implementada l'escriptura).
