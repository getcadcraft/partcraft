---
title: Data out: datos hoja, campo ha malla
summary: Ejeguarda peteĩ cuerpo generado datos hoja JSON térã PDF-pe, campo VTK imagen (.vti) térã OpenVDB nivel conjunto (.vdb) ha superficie VTK malla (.vtu) ParaView ha ambue análisis herramienta-pe, ha malla 3MF generador datos ndive. Parte mismo siempre mismo archivo ojapo.
keywords: exportar, hoja de datos, json, pdf, vti, vtu, vtk, paraview, 3mf, campo, distancia con signo, fea, cfd, metadatos, openvdb
from: 817b4579
---

**Engineer** espacio-pe, térã Generated cuerpo propiedades-pe, ejeporá **Data out**:

| Botón | Archivo | Mba'ére |
|---|---|---|
| Data sheet (JSON) | `.json` | Opa entrada, peteĩ peteĩ número unidad ha fuente ndive, control, malla huella. Ordenado, tiempo-na'ỹ: mismo parte mismo archivo. |
| Data sheet (PDF) | `.pdf` | Mismo papel-pe, página heta ojerure ramo. |
| Field (.vti) | `.vti` | Parte distancia con signo (dentro negativo) ha dentro máscara puntos grilla-pe: VTK imagen archivo ParaView ha VTK-pe ojapo herramienta-pe. Cuerpo superficie-gui voxel tamaño generador entrada-pe ojapo, upévare tiempo ojerure, cuerpo 400 000 triángulo mboyve página-pe ndojapói: campo kuatiañe-gui ojeguarda `field_bake` (ko'ẽ ehecha). |
| Level set (.vdb) | `.vdb` | Mismo campo OpenVDB nivel conjunto-pe: árbol disperso ha'e ojeguardá superficie ári voxel mbaʼe nomás, OpenVDB ojeporú renderizador, simulación ha 3D programa-pe. Voxel tamaño ha unidad generador-gui (milímetro), banda estrecha activa, adentro negativo. `.vti`-icha superficie-gui ojapo, 400 000 triángulo límite-pe; 1.5 GB mboyve archivo ndojeguarái (tamaño voxel mboyve oñemoĩ). Archivo OpenVDB formato 224, OpenVDB ijyvy valor paquete-pe mbaʼe comprimido ndaipóri, OpenVDB lector opa ojeipe'a. |
| Surface (.vtu) | `.vtu` | Triángulo, cada peteĩ área ha normal-ndive. |
| 3MF with generator data | `.3mf` | Malla milímetro-pe slicer-pe, generador, entrada ha (graded lattice-pe) pared rango metadato archivo-pe. |

Ko archivo-kuéra opa ndaguerekói reloj térã máquina-gui: archivo oñeikuaa byte-pe; byte oñemoambue, parte oñemoambue.

## Ndojapóiva todavía

- `.vti` térã `.vdb` campo voxel tamaño generador propio-gui ambue-pe.
- `.vdb` archivo oñeikẽ (ojeguarda añónte ojapóva).
