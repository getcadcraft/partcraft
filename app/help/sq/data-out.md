---
title: Eksporti i të dhënave: fletë të dhënash, fusha dhe rrjeta
summary: Ruani fletën e të dhënave të një trupi të gjeneruar si JSON ose PDF, fushën e tij si imazh VTK (.vti) ose nivel bashkësie OpenVDB (.vdb) dhe sipërfaqen e tij si rrjetë VTK (.vtu) për ParaView dhe mjete të tjera analize, dhe rrjetën si 3MF që mban të dhënat e gjeneratorit. E njëjta pjesë shkruan gjithmonë të njëjtat skedarë.
keywords: eksport, fletë të dhënash, json, pdf, vti, vtu, vtk, paraview, 3mf, fushë, distancë e shenjuar, fea, cfd, metadata, openvdb
from: 817b4579
---

Në hapësirën {{ui:Inxhinieri}}, ose te vetitë e një trupi të gjeneruar, hapni **Eksporti i të dhënave**:

| Buton | Skedari | Për |
|---|---|---|
| Fletë të dhënash (JSON) | `.json` | Çdo hyrje, çdo numër me njësinë dhe burimin e vet, kontrollet, gjurmën e rrjetës. Të renditura, pa orë: e njëjta pjesë jep të njëjtin skedar. |
| Fletë të dhënash (PDF) | `.pdf` | E njëjta gjë në letër, në aq faqe sa nevojiten. |
| Fushë (.vti) | `.vti` | Pjesa si distancë e shenjuar (negative brenda) dhe një maskë e brendshme mbi një rrjet pikash: një skedar imazhi VTK për ParaView dhe mjete të ndërtuara mbi VTK. Ndërtohet nga sipërfaqja e trupit me madhësinë e vokselit të hyrjeve të gjeneratorit, prandaj zgjat pak, dhe një trup mbi 400 000 trekëndësha është shumë i madh për faqen: ruajeni fushën nga një skript (`field_bake`) në vend të kësaj. |
| Nivel bashkësie (.vdb) | `.vdb` | E njëjta fushë si nivel bashkësie OpenVDB: një pemë e rrallë që mban vetëm brezin e hollë të vokseleve rreth sipërfaqes, për mjete që lexojnë OpenVDB (renderues, simulime dhe programe 3D). Madhësia e vokselit dhe njësitë janë të gjeneratorit (milimetra), brezi i ngushtë është pjesa aktive, brenda është negative. Ndërtohet nga sipërfaqja si `.vti`, me të njëjtin kufi prej 400 000 trekëndëshash; një skedar që do të kalonte 1.5 GB refuzohet (përdorni një madhësi vokseli më të madhe). Skedari është në formatin OpenVDB 224, i pakompresuar përveç paketimit të vetë OpenVDB të vlerave aktive, kështu që çdo lexues OpenVDB e hap. |
| Sipërfaqe (.vtu) | `.vtu` | Trekëndëshat, me sipërfaqen dhe normalen e secilit. |
| 3MF me të dhënat e gjeneratorit | `.3mf` | Rrjeta në milimetra për një program prerës (slicer), me gjeneratorin, hyrjet e tij dhe (për një rrjetë të gradualizuar) intervalin e mureve të saj si metadata në skedar. |

Asgjë në këta skedarë nuk vjen nga ora ose makina, kështu që mund të krahasoni dy skedarë bajt për bajt: një bajt i ndryshuar do të thotë një pjesë e ndryshuar.

## Nuk është ndërtuar ende

- Një `.vti` ose `.vdb` i fushës me një madhësi vokseli tjetër nga ajo e vetë gjeneratorit.
- Leximi i skedarëve `.vdb` (është ndërtuar vetëm shkrimi).
