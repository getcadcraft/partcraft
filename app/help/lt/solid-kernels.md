---
title: Tinklo branduolys
summary: Ši PartCraft versija kiekvieną detalę kuria tinklo branduoliu, veikiančiu jūsų naršyklėje. Ką tai reiškia apvalioms paviršiams, tūriams ir failams, kaip sužinoti, kad jis veikia, ir kurios funkcijos laukia tikslaus branduolio.
keywords: branduolys, tinklas, manifold, tikslus, b-rep, facetuotas, kreivės, opencascade, occt, suapvalinimas reikia tikslaus, nepadaryta, neprisijungus, webassembly
from: 68d32d16
---

Geometrijos branduolys – tai variklis, kuris paverčia jūsų istoriją kietuoju kūnu. Šioje PartCraft versijoje jis yra: **tinklo branduolys** (manifold-3d). Jis veikia jūsų kompiuteryje kaip nedidelė WebAssembly programa ir būna paruoštas netrukus po programos atidarymo. Jokia informacija apie jūsų detalę niekur nesiunčiama.

| | Tinklo branduolys |
|---|---|
| Apvalios formos | Plokšti facetai. **Kreivės** detalės skydelyje nustato, kiek smulkūs |
| Tūriai ir plotai | Facetuoto kietojo kūno; apvaliose detalėse šiek tiek mažesni |
| Eskizai, ištempimas, iškirpimas, sukimas, skylės, kartojimai, veidrodis, bazinės plokštumos | Taip |
| Suapvalinimas ir nuožulninimas | Tiesiose briaunose tarp plokščių paviršių; susitinkantys apvalinimai nupjaunami įstrižai |
| Išdrožimas ir nuolydis | Išdrožimas atveria plokščius paviršius (tiksli sienelės storis); nuolydis pakreipia plokščius paviršius |
| Eksportai | STL, 3MF, STEP (facetuotas), brėžinio PDF ir DXF |
| Brėžinių vaizdai | Braižomi pagal facetus, įskaitant pjūvio vaizdus |
| Paviršiai ir briaunos | Pavadinti ir žinomi pagal rūšį (plokštuma, cilindras, kūgis, sfera, toras; tiesi, apskritimas), paimti iš eskizų: juos naudoja darbo sritys Simulation, Generative ir Manufacture, {{ui:Matuoti}}, pasirinkimas ir skylių lentelė |

Būsenos juostos dešiniajame gale esanti žymė rodo **Tinklo branduolys**, kol kuriama detalė.

## Ko laukiama tikslaus branduolio

Tikslus (B-rep) branduolys išlaiko tikrus apskritimus, cilindrus ir kūgius bei lygius suapvalinimus ant bet kurios briaunos; ant jo kuriami kreiviniai ištempimai, jungiamieji paviršiai, paviršiai, lakštinis metalas, stiprinimo briaunos, keli kūnai, STEP importas ir tikslus STEP eksportas. Ankstesnės PartCraft bandomosios versijos tam naudojo OpenCascade. Jo licencija (LGPL) netinka šiam leidimui, kuriame kiekviena programa yra Apache-2.0 ir naudoja tik leidžiamos licencijos bibliotekas, todėl jis neįtrauktas. Šiam nėra nustatytos datos.

Iki tol tos funkcijos, pasirinkus jas, rodo **Dar nepadaryta**: būsenos juostoje nurodoma priežastis, o jų mygtukų patarimuose rašoma „dar nepadaryta (reikia tikslaus branduolio)“. [Kas dar nepadaryta](topic:not-built-yet) išvardija kiekvieną jų ir ką daryti vietoje.

Detalė, sukurta su jomis ankstesnėje versijoje, vis tiek atsidaro. Tos funkcijos lieka istorijoje pažymėtos kaip nepadarytos (užvedus pelę ant jos, matoma priežastis), likusi detalės dalis sukuriama, o įrašant jos išsaugomos nepakeistos.

## Apvalūs paviršiai ir Kreivės

Tinklo branduolys apskritimą braižo kaip daugiakampį. **Kreivės** detalės skydelyje nustato, kiek kraštinių turi pilnas apskritimas; daugiau kraštinių atrodo lygiau ir matuojant arčiau tikros vertės, bet kuriama ilgiau. Tūriai, plotai ir atstumai iš {{ui:Matuoti}} yra šio facetuoto kietojo kūno: skylei ar išsikišimui jie šiek tiek mažesni nei apvalios formos.

## Prisijungus ir neprisijungus

Tinklo branduolys yra programos atsisiunčiamos dalies dalis. Norėdami dirbti be ryšio, prisijungę įrašykite PartCraft darbui neprisijungus: programos viršutinėje juostoje pasirinkite {{ui:Įrašyti neprisijungus}} ir palaukite, kol bus rodoma **Paruošta darbui neprisijungus**. Išsamiau: [Darbas neprisijungus](common:offline).
