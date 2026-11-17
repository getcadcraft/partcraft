---
title: Datu izvade — datu lapa, lauki un tīkli
summary: Saglabājiet ģenerēta korpusa datu lapu kā JSON vai PDF, tā lauku kā VTK attēlu (.vti) vai OpenVDB līmeņa kopu (.vdb) un tā virsmu kā VTK tīklu (.vtu) ParaView un citiem analīzes rīkiem, kā arī tīklu kā 3MF ar ģeneratora datiem. Tā pati daļa vienmēr raksta tos pašus failus.
keywords: eksports, datu lapa, json, pdf, vti, vtu, vtk, paraview, 3mf, lauks, parakstītais attālums, fea, cfd, metadati, openvdb
from: 817b4579
---

{{ui:Inženieris}} darbvietā vai ģenerēta korpusa rekvizītos atveriet **Datu izvade**:

| Poga | Fails | Paredzēts |
|---|---|---|
| Datu lapa (JSON) | `.json` | Katra ievade, katrs skaitlis ar tā vienību un avotu, pārbaudes, tīkla pirkstu nospiedums. Sakārtots, bez laika: tā pati daļa dod to pašu failu. |
| Datu lapa (PDF) | `.pdf` | Tas pats uz papīra, tik lappusēs, cik nepieciešams. |
| Lauks (.vti) | `.vti` | Daļa kā parakstītais attālums (negatīvs iekšpusē) un iekšējā maska uz punktu režģa: VTK attēla fails ParaView un VTK balstītiem rīkiem. To veido no korpusa virsmas ar ģeneratora ievades voksela izmēru, tāpēc tas aizņem brīdi, un korpuss ar vairāk nekā 400 000 trīsstūriem ir par lielu lapai: saglabājiet lauku no skripta (`field_bake`). |
| Līmeņa kopa (.vdb) | `.vdb` | Tas pats lauks kā OpenVDB līmeņa kopa: retais koks, kas glabā tikai šauro vokseļu joslu ap virsmu, tiem rīkiem, kas lasa OpenVDB (renderētāji, simulācijas un 3D programmas). Voksela izmērs un vienības ir ģeneratora (milimetri), šaurā josla ir aktīvā daļa, iekšpuse ir negatīva. Veidots no virsmas tāpat kā `.vti`, ar to pašu 400 000 trīsstūru ierobežojumu; fails, kas būtu lielāks par 1.5 GB, tiek noraidīts (izmantojiet lielāku voksela izmēru). Fails ir OpenVDB formāts 224, nesaspiests, izņemot OpenVDB pašu aktīvo vērtību iepakošanu, tāpēc to atver jebkurš OpenVDB lasītājs. |
| Virsma (.vtu) | `.vtu` | Trīsstūri, katra laukums un normāle. |
| 3MF ar ģeneratora datiem | `.3mf` | Tīkls milimetros griezējprogrammai, ar ģeneratoru, tā ievadēm un (režģim ar gradientu) tā sienu diapazonu kā metadatiem failā. |

Neviens no šiem failiem nenāk no pulksteņa vai mašīnas, tāpēc varat salīdzināt divus failus baitu pa baitam: mainīts baits nozīmē mainītu daļu.

## Vēl nav izveidots

- `.vti` vai `.vdb` lauks ar citu voksela izmēru nekā paša ģeneratora.
- `.vdb` failu lasīšana (izveidota tikai rakstīšana).
