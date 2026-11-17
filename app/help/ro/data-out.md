---
title: Date de ieșire: fișa de date, câmpuri și plase
summary: Salvați fișa de date a unui corp generat ca JSON sau PDF, câmpul său ca imagine VTK (.vti) sau ca set de nivel OpenVDB (.vdb) și suprafața sa ca plasă VTK (.vtu) pentru ParaView și alte instrumente de analiză, iar plasa ca 3MF cu datele generatorului. Aceeași piesă scrie întotdeauna aceleași fișiere.
keywords: export, fișă de date, json, pdf, vti, vtu, vtk, paraview, 3mf, câmp, distanță cu semn, fea, cfd, metadate, openvdb
from: 817b4579
---

În spațiul de lucru {{ui:Inginerie}}, sau în proprietățile unui corp Generat, deschideți **Date de ieșire**:

| Buton | Fișier | Pentru |
|---|---|---|
| Fișă de date (JSON) | `.json` | Fiecare intrare, fiecare număr cu unitatea și sursa sa, verificările, amprenta plasei. Sortat, fără ore: aceeași piesă dă același fișier. |
| Fișă de date (PDF) | `.pdf` | Același lucru, pe hârtie, pe câte pagini are nevoie. |
| Câmp (.vti) | `.vti` | Piesa ca distanță cu semn (negativă în interior) și o mască interioară pe o grilă de puncte: un fișier imagine VTK pentru ParaView și instrumente bazate pe VTK. Se construiește din suprafața corpului la dimensiunea voxelului din intrările generatorului, deci durează puțin, iar un corp de peste 400 000 de triunghiuri este prea mare pentru pagină: salvați câmpul dintr-un script (`field_bake`) în schimb. |
| Set de nivel (.vdb) | `.vdb` | Același câmp ca set de nivel OpenVDB: un arbore rar, care păstrează doar banda subțire de voxeli din jurul suprafeței, pentru instrumente care citesc OpenVDB (programe de randare, simulare și 3D). Dimensiunea voxelului și unitățile sunt cele ale generatorului (milimetri), banda îngustă este partea activă, iar interiorul este negativ. Se construiește din suprafață ca `.vti`, cu aceeași limită de 400 000 de triunghiuri; un fișier care ar depăși 1.5 GB este refuzat (folosiți o dimensiune mai mare a voxelului). Fișierul este în format OpenVDB 224, necomprimat decât prin împachetarea proprie OpenVDB a valorilor active, deci orice cititor OpenVDB îl deschide. |
| Suprafață (.vtu) | `.vtu` | Triunghiurile, cu aria și normala fiecăruia. |
| 3MF cu datele generatorului | `.3mf` | Plasa în milimetri pentru un slicer, cu generatorul, intrările sale și (pentru o rețea gradată) intervalul pereților, ca metadate în fișier. |

Nimic din aceste fișiere nu vine de la ceas sau de la mașină, deci puteți compara două fișiere octet cu octet: un octet schimbat înseamnă o piesă schimbată.

## Încă nerealizat

- Un `.vti` sau `.vdb` al câmpului la o dimensiune a voxelului diferită de cea a generatorului.
- Citirea fișierelor `.vdb` (este realizată doar scrierea).
