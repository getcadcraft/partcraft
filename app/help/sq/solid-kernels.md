---
title: Kerneli i rrjetit
summary: Kjo version e PartCraft ndërton çdo pjesë me një kernel rrjeti që funksionon në shfletuesin tënd. Çfarë do të thotë kjo për format e rrumbullakëta, vëllimet dhe skedarët, si të kuptosh që punon, dhe cilat veçori presin një kernel të saktë.
keywords: kernel, rrjet, manifold, i saktë, b-rep, me facetë, kurba, opencascade, occt, rrumbullakimi kërkon të saktë, nuk është ndërtuar, jashtë linje, webassembly
from: f931645c
---

Një kernel gjeometrie është motori që e kthen historikun tënd në trup të ngurtë. Kjo version e PartCraft ka një të tillë: **kernelin e rrjetit** (manifold-3d). Ai punon në kompjuterin tënd si një program i vogël WebAssembly dhe është gati një çast pasi hapet aplikacioni. Asgjë për pjesën tënde nuk dërgohet askund.

| | Kerneli i rrjetit |
|---|---|
| Forma të rrumbullakëta | Fasada të sheshta. **Kurbat** në panelin e pjesës cakton sa të imta janë |
| Vëllimet dhe sipërfaqet | Të trupit me facetë, paksa më të ulëta te pjesët e rrumbullakëta |
| Skicat, ekstrudimi, prerja, rrotullimi, vrimat, modelet, pasqyrimi, planimetritë e referencës | Po |
| Rrumbullakim dhe Pjerrësim | Te skajet e drejta midis fasadave të sheshta; rrumbullakimet që takohen janë të prera me pjerrësi |
| Guaskë dhe Draft | Guaska hap fasadat e sheshta (trashësi muri e saktë); Draft-i pjerret fasadat e sheshta |
| Eksportet | STL, 3MF, STEP (i saktë: fasadat e rrumbullakëta shkruhen mbi sipërfaqet e tyre të vërteta; ose me facetë), PDF i vizatimit dhe DXF |
| Pamjet e vizatimit | Vizatohen nga facetat, përfshi pamjet e prerjeve |
| Sipërfaqet dhe skajet | Emërtohen dhe njihen sipas llojit (e sheshtë, cilindër, kon, sferë, torus; e drejtë, rreth), merren nga skicat: hapësirat e punës Simulimi, Gjenerativi dhe Prodhimi, Matja, përzgjedhja dhe tabela e vrimave i përdorin ato |

Etiketa pranë skajit të djathtë të shiritit të gjendjes thotë **Kerneli i rrjetit** ndërsa ndërton pjesën tënde.

## Çfarë pret një kernel i saktë

Një kernel i saktë (B-rep) mban rrathë, cilindra dhe kone të vërtetë, dhe rrumbullakime të lëmuara në çdo skaj, sweep, loft, sipërfaqe, llamarinë, brinjë, disa trupa dhe importimi STEP me sipërfaqe të lakuara të mbajtura të sakta janë të ndërtuara mbi të. (Eksporti STEP i saktë nuk pret atë: kerneli i rrjetit njeh sipërfaqen e vërtetë të çdo faqeje nga skica, dhe eksporti i shkruan ato.) Versionet e mëparshme laboratorike të PartCraft përdornin OpenCascade për këtë. Licenca e tij (LGPL) nuk i përshtatet këtij lançimi, ku çdo aplikacion është Apache-2.0 dhe përdor vetëm biblioteka me licencë të lirë, kështu nuk përfshihet. Asgjë këtu nuk ka datë të caktuar.

Deri atëherë ato veçori thonë **Ende nuk është ndërtuar** kur i zgjedh: shiriti i gjendjes jep arsyen, dhe tekstet e butonave të tyre përfundojnë me "ende nuk është ndërtuar (kërkon një kernel të saktë)". [Çfarë nuk është ndërtuar ende](topic:not-built-yet) liston secilën me atë që duhet bërë në vend të saj.

Një pjesë e bërë me to në një version të mëparshëm hapet akoma. Ato veçori mbeten në histori të shënuara si të pandërtuara (kalo mbi një për arsyen), pjesa e mbetur ndërtohet, dhe ruajtja i mban të pandryshuara.

## Fasadat e rrumbullakëta dhe Kurbat

Kerneli i rrjetit vizaton një rreth si shumëkëndësh. **Kurbat** në panelin e pjesës cakton sa anë ka një rreth i plotë; më shumë anë duken më të lëmuara dhe matin më afër vlerës së vërtetë, dhe marrin më shumë kohë për t'u ndërtuar. Vëllimet, sipërfaqet dhe distancat nga {{ui:Matja}} janë të këtij trupi me facetë: për një vrimë ose një dalje janë paksa më të vogla se ato të formës së rrumbullakët.

## Online dhe jashtë linje

Kerneli i rrjetit është pjesë e shkarkimit vetjak të aplikacionit. Për të punuar pa lidhje, ruaj PartCraft për përdorim jashtë linje ndërsa je online: zgjidh {{ui:Ruaje për jashtë linje}} në shiritin e aplikacionit dhe prit derisa të thotë **Gati jashtë linje**. Detaje: [Puna jashtë linje](common:offline).
