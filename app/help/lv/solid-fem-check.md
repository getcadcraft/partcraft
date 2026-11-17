---
title: Solid FEM: vienas detaļas sprieguma pārbaude
summary: Ieslēdziet papildinājumu Solid FEM, sadaliet detaļu tīklā, 3D skatā atlasiet fiksētās virsmas un slodzi, atrisiniet un nolasiet pārvietojumu un fon Mizesa spriegumu uz modeļa.
keywords: solid fem, galīgo elementu metode, fea, spriegums, von Mises, pārvietojums, fiksēta virsma, slodze, spiediens, gravitācija, dabiskā frekvence, svārstību forma, tīkls, papildinājums
from: 8b7e6ba2
---

## Ko jūs darīsiet

Pārbaudiet vienu cietu detaļu zem slodzes: kur tā pārvietojas un kur spriegums ir visaugstākais. Pētījums ir lineārs un elastīgs, tāpēc tas ir pārbaudes palīglīdzeklis; rezultātus pārskata jūsu inženieris.

## Soļi

1. Izvēlieties {{ui:Iestatījumi}} › {{ui:Papildinājumi}} un ieslēdziet {{ui:Solid FEM}} (sākotnēji tas ir izslēgts). Atveriet cilni {{ui:Solid FEM}} labajā panelī.
2. Zem {{ui:Materiāls}} izvēlieties vienu vai {{ui:Pielāgots}} un ierakstiet Puasona koeficientu, blīvumu un tecēšanas spriegumu.
3. Nospiediet {{ui:Pievienot fiksētās virsmas}}, 3D skatā noklikšķiniet virsmas, kas tiek turētas, un pēc tam nospiediet {{ui:Atlase pabeigta}}.
4. Pievienojiet slodzi ar {{ui:Pievienot spēku}}, {{ui:Pievienot spiedienu}} vai {{ui:Pievienot gravitāciju}} un atlasiet tās virsmas tādā pašā veidā.
5. Nospiediet {{ui:Sadalīt detaļu tīklā}}, tad {{ui:Atrisināt}}. Ja vēlaties frekvences, pirmo izvēlieties {{ui:Dabiskās frekvences}} zem {{ui:Pētījums}}.
6. Nolasiet {{ui:Rezultāti}} un {{ui:Brīdinājumi}}, tad nospiediet {{ui:Rādīt uz modeļa}}, lai zīmētu fon Mizesa spriegumu, pārvietojumu vai svārstību formu; {{ui:Noņemt attēlojumu}} to noņem.

## Piezīmes

- Lapa atrisina līdz noteiktam elementu skaitam; statusa rindā tiek norādīts, ja jūsu elementa izmērs ir pārāk smalks.
- Spriegums fiksētajās virsmās, slodzes punktos un asos stūros aug, kad tīkls tiek smalkāks. Pirms paļaušanās uz maksimumu, smalciniet tīklu un salīdziniet.
- Katra izmaiņa ir viens atsaukšanas solis, un iestatījumi tiek saglabāti detaļas failā.
- Plūstamības un kontakta pētījumiem skatiet [Pārbaudīt spriegumu un novirzi](topic:simulation).
