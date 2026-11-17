---
title: Võrgusilma tuum
summary: See PartCraft-i versioon ehitab iga detaili võrgusilma tuumaga, mis töötab sinu brauseris. Mida see tähendab ümarate tahkude, mahtude ja failide jaoks, kuidas tead, et see töötab, ja millised funktsioonid ootavad täpset tuuma.
keywords: tuum, võrgusilm, manifold, täpne, b-rep, tahkudeks jaotatud, kõverad, opencascade, occt, ümardus vajab täpset, pole veel loodud, võrguta, webassembly
from: f931645c
---

Geomeetriatuum on mootor, mis muudab sinu ajaloo tahkiseks. Sellel PartCraft-i versioonil on üks: **võrgusilma tuum** (manifold-3d). See töötab sinu arvutis väikese WebAssembly-programmina ja on valmis hetk pärast rakenduse avamist. Midagi sinu detailist ei saadeta kuhugi.

| | Võrgusilma tuum |
|---|---|
| Ümarad kujud | Lamedad tahud. **Kõverused** detaili paneelil määrab, kui peenelt |
| Mahud ja pinnad | Tahkudeks jaotatud tahkisest, ümarate detailide puhul veidi väiksem |
| Visandid, ekstrudeerimine, lõikamine, pööramine, augud, mustrid, peegeldus, referentstasandid | Jah |
| {{ui:Ümardus}} ja faas | Sirgetel servadel lamedate tahkude vahel; kokkupuutuvad ümardused on mitreeritud |
| Kest ja tõmme | Kest avab lamedad tahud (täpne seinapaksus); tõmme kallutab lamedaid tahke |
| Eksport | STL, 3MF, STEP (täpne: ümarad tahud kirjutatakse oma tõelistel pindadel või tahkudeks jaotatult), jooniste PDF ja DXF |
| Joonistusvaated | Joonistatakse tahkudest, sealhulgas lõikevaated |
| Tahud ja servad | Nimetatud ja tuntud liigi järgi (tasane, silinder, koonus, sfäär, toroid; sirge, ringjoon), võetud visanditest: töölauad Simulation, Generative ja Manufacture, {{ui:Mõõda}}, valimine ja augutabel kasutavad neid |

Olekuriba parema otsa lähedal olev märk ütleb **Mesh kernel**, kui see detaili ehitab.

## Mis ootab täpset tuuma

Täpne (B-rep) tuum säilitab tõelised ringjooned, silindrid ja koonused ning sujuvad ümardused mis tahes servas; pühkimised, loftid, pinnad, lehtmetall, ribid, mitu kehandit ja STEP-import kõverate tahkudega, mis jäävad täpseks, ehitatakse sellel. (Täpne STEP-eksport ei oota seda: võrgusilma tuum teab iga tahu tõelist pinda visandist ja eksport kirjutab need.) Varasemad PartCraft-i labori versioonid kasutasid selleks OpenCascade'i. Selle litsents (LGPL) ei sobi sellele väljaandele, kus iga rakendus on Apache-2.0 ja kasutab ainult lubavalt litsentseeritud teeke, seega seda ei ole kaasas. Millelegi siin ei ole kuupäeva.

Kuni selleni ütlevad need funktsioonid, kui sa neid valid, **Pole veel loodud**: olekuriba ütleb põhjuse ja nende nuppude tööriistavihjed lõpevad sõnadega „pole veel loodud (vajab täpset tuuma)“. [Mis pole veel loodud](topic:not-built-yet) loetleb igaühe ja ütleb, mida selle asemel teha.

Varasemas versioonis tehtud detail, millel need funktsioonid on, avaneb ikka. Need funktsioonid jäävad ajalukku märgituna kui pole loodud (hoia kursorit ühe kohal, et näha põhjust), ülejäänud detail ehitub ja salvestamine jätab need muutmata.

## Ümarad tahud ja kõverused

Võrgusilma tuum joonistab ringjoone hulknurgana. **Kõverused** detaili paneelil määrab, mitu külge täisringil on; rohkem külgi näeb sujuvam välja ja mõõdab täpsemat väärtust, kuid ehitub kauem. Mahud, pinnad ja kaugused {{ui:Mõõda}} järgi on selle tahkudeks jaotatud tahkise omad: augu või ümara ülemineku puhul on need veidi väiksemad kui ümara kuju omad.

## Võrgus ja võrguta

Võrgusilma tuum on rakenduse enda allalaadimise osa. Töötamiseks ilma ühenduseta salvesta PartCraft võrguta kasutamiseks, kui oled võrgus: vali rakenduse ribal {{ui:Salvesta võrguks}} ja oota, kuni see ütleb **Võrguta valmis**. Üksikasjad: [Võrguta töötamine](common:offline).
