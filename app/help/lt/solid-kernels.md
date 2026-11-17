---
title: Tinklo branduolys
summary: Šia PartCraft versija kiekvieną detalę kuria tinklo branduolys, veikiantis naršyklėje. Ką tai reiškia apvaliems paviršiams, tūriams ir failams, kaip patikrinti, kad veikia, ir kurios funkcijos laukia tikslaus branduolio.
keywords: branduolys, tinklas, manifold, tikslus, B-rep, facetuotas, kreivės, opencascade, occt, suapvalinimas reikalauja tikslaus, nerealizuota, neprisijungus, WebAssembly
from: f931645c
---

Geometrijos branduolys – tai variklis, kuris iš jūsų istorijos sukuria kietąjį kūną. Šioje PartCraft versijoje yra vienas toks: **tinklo branduolys** (manifold-3d). Jis veikia jūsų kompiuteryje kaip mažas WebAssembly programinis komponentas ir būna paruoštas po akimirkos, kai programa atsidaro. Jokie jūsų detalės duomenys niekur neišsiunčiami.

| | Tinklo branduolys |
|---|---|
| Apvalios formos | Plokšti facetai. **Kreivės** detalės skydelyje nustato, kaip smulkiai |
| Tūriai ir plotai | Facetuoto kietojo kūno, apvaliose detalėse šiek tiek mažesni |
| Eskizai, ištempimas, išpjova, sukimas, skylės, masyvai, veidrodis, nuorodinės plokštumos | Taip |
| Suapvalinimas ir nuožulna | Tiesiose briaunose tarp plokščių paviršių; susitinkantys suapvalinimai sujungiami įstriži |
| Išdrožimas ir nuolydis | Išdrožimas atveria plokščius paviršius (tiksli sienelės storis); nuolydis pasvirina plokščius paviršius |
| Eksportai | STL, 3MF, STEP (tikslus: apvalūs paviršiai įrašomi tikrais paviršiais; arba facetuotas), brėžinio PDF ir DXF |
| Brėžinio vaizdai | Braižomi pagal facetus, įskaitant pjūvio vaizdus |
| Paviršiai ir briaunos | Pavadinti ir žinomi pagal rūšį (plokštas, cilindras, kūgis, sfera, toras; tiesi, apskritimas), paimti iš eskizų: juos naudoja darbo sritys Simulation, Generative ir Manufacture, Matuoti, pasirinkimas ir skylių lentelė |

Būsenos juostos dešiniajame gale esantis žymeklis rodo **Tinklo branduolys**, kol kuriama jūsų detalė.

## Kas laukia tikslaus branduolio

Tikslus (B-rep) branduolys išlaiko tikrus apskritimus, cilindrus ir kūgius bei glotnius suapvalinimus ant bet kurios briaunos; ant jo kuriami išvedimai palei kelią, perėjimai tarp profilių, paviršiai, lakštinis metalas, šonkauliai, keli kūnai ir STEP importas, išlaikant lenktus paviršius tiksliai. (Tikslus STEP eksportas jo nelaukia: tinklo branduolys žino kiekvieno paviršiaus tikrą paviršių iš eskizo, ir eksportas įrašo tuos paviršius.) Ankstesnės PartCraft laboratorinės versijos tam naudojo OpenCascade. Jos licencija (LGPL) nederina su šia versija, kurioje visos programos yra Apache-2.0 ir naudoja tik leidžiamąja licencija platinamas bibliotekas, todėl ji neįtraukta. Šiam nėra nustatytos datos.

Iki tol tos funkcijos, pasirinkus jas, rodo **Dar nesukurta**: būsenos juostoje nurodoma priežastis, o jų mygtukų patarimai baigiasi žodžiais "not built yet (needs an exact kernel)" (dar nesukurta, reikia tikslaus branduolio). [Kas dar nesukurta](topic:not-built-yet) išvardija kiekvieną jų ir ką daryti vietoj jos.

Detalė, sukurta su šiomis funkcijomis ankstesnėje versijoje, vis tiek atsidaro. Tos funkcijos istorijoje lieka pažymėtos kaip nesukurtos (užvedus pelę ant jos, matoma priežastis), likusi detalės dalis sukuriama, o įrašymas jas palieka nepakeistas.

## Apvalūs paviršiai ir kreivės

Tinklo branduolys apskritimą piešia kaip daugiakampį. **Kreivės** detalės skydelyje nustato, kiek kraštinių turi pilnas apskritimas: daugiau kraštinių atrodo glotniau ir matuojama arčiau tikros vertės, bet kuriama ilgiau. Tūriai, plotai ir atstumai, gauti iš {{ui:Matuoti}}, yra facetuoto kietojo kūno: skylei arba iškyšai jie šiek tiek mažesni nei apvalios formos.

## Prisijungęs ir neprisijungęs režimas

Tinklo branduolys yra pačios programos atsisiuntimo dalis. Norėdami dirbti be ryšio, išsaugokite PartCraft darbui neprisijungus, kai esate prisijungę: programos juostoje pasirinkite {{ui:Įrašyti neprisijungus}} ir palaukite, kol bus rašoma **Paruošta neprisijungus**. Išsamiau: [Darbas neprisijungus](common:offline).
