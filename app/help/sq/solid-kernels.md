---
title: Kerneli i rrjetës
summary: Ky version i PartCraft ndërton çdo pjesë me një kernel rrjete që funksionon në shfletuesin tuaj. Ç'do të thotë kjo për faqet e rrumbullakëta, vëllimet dhe skedarët, si të dini që po punon, dhe cilat veçori presin një kernel të saktë.
keywords: kernel, rrjetë, manifold, i saktë, b-rep, me facetë, kurba, opencascade, occt, rrumbullakimi kërkon të saktë, nuk është ndërtuar, jashtë linje, webassembly
from: 68d32d16
---

Kerneli gjeometrik është motori që e shndërron historinë tuaj në një trup të ngurtë. Ky version i PartCraft ka një: **kernelin e rrjetës** (manifold-3d). Ai funksionon në kompjuterin tuaj si një program i vogël WebAssembly dhe është gati pak pas hapjes së aplikacionit. Asgjë për pjesën tuaj nuk dërgohet askund.

| | Kerneli i rrjetës |
|---|---|
| Format e rrumbullakëta | Facetë të sheshta. **Kurbat** në panelin e pjesës cakton sa të hollë janë |
| Vëllimet dhe sipërfaqet | Të trupit me facetë, pak të ulëta për pjesët e rrumbullakëta |
| Skicat, ekstrudimi, prerja, rrotullimi, vrimat, modelet, pasqyrimi, planet referuese | Po |
| Rrumbullakimi dhe qoshimi | Në brinjë të drejta ndërmjet faqeve të sheshta; rrumbullakimet që takohen janë me pjerrësi (mitred) |
| Zbrazja dhe Draft | Zbrazja hap faqet e sheshta (trashësi muri e saktë); Draft pjerr faqet e sheshta |
| Eksportet | STL, 3MF, STEP (me facetë), PDF i vizatimit dhe DXF |
| Pamjet e vizatimit | Vizatohen nga facetat, përfshi pamjet e prerjes |
| Faqet dhe brinjët | Të emërtuara dhe të njohura sipas llojit (të sheshta, cilindër, kon, sferë, torus; të drejta, rreth): hapësirat e punës Simulation, Generative dhe Manufacture, Measure, zgjedhja dhe tabela e vrimave i përdorin |

Çipi afër skajit të djathtë të shiritit të statusit thotë **Mesh kernel** ndërsa ndërton pjesën tuaj.

## Ç'pret një kernel i saktë

Një kernel i saktë (B-rep) mban rrathë, cilindra dhe kone të vërtetë, dhe rrumbullakime të lëmuara në çdo brinjë. Tërheqja përgjatë, lidhja e profileve, sipërfaqet, lamjet, trupat e shumtë, importimi STEP dhe eksporti i saktë STEP janë të ndërtuara mbi të. Versionet e mëparshme laboratorike të PartCraft përdornin OpenCascade për këtë. Licenca e saj (LGPL) nuk përshtatet me këtë version, ku çdo aplikacion është Apache-2.0 dhe përdor vetëm biblioteka me leje të lirë, ndaj nuk është përfshirë. Asgjë këtu nuk ka datë.

Deri atëherë ato veçori thonë **Nuk është ndërtuar ende** kur i zgjidhni: shiriti i statusit jep arsyen, dhe tooltip-et e butonave të tyre mbarojnë me "nuk është ndërtuar ende (kërkon një kernel të saktë)". [Ç'nuk është ndërtuar ende](topic:not-built-yet) liston secilën me atë që bëhet në vend të saj.

Një pjesë e bërë me to në një version të mëparshëm hapet ende. Ato veçori qëndrojnë në histori të shënuara si të pandërtuara (kaloni mbi një për arsyen), pjesa tjetër ndërtohet, dhe ruajtja i mban të pandryshuara.

## Format e rrumbullakëta dhe Kurbat

Kerneli i rrjetës vizaton një rreth si shumëkëndësh. **Kurbat** në panelin e pjesës cakton sa anë ka një rreth i plotë; më shumë anë duken më të lëmuara dhe matin më afër vlerës së vërtetë, por marrin më shumë kohë për t'u ndërtuar. Vëllimet, sipërfaqet dhe distancat nga {{ui:Matje}} janë të trupit të ngurtë me facetë: për një vrimë ose një kollare janë pak më të vogla se ato të formës së rrumbullakët.

## Në linjë dhe jashtë linje

Kerneli i rrjetës është pjesë e shkarkimit të vetë aplikacionit. Për të punuar pa lidhje, ruajeni PartCraft për përdorim jashtë linje ndërkohë që jeni në linjë: zgjidhni {{ui:Ruaje për jashtë linje}} në shiritin e aplikacionit dhe prisni derisa të thotë **Gati jashtë linje**. Detaje: [Puna jashtë linje](common:offline).
