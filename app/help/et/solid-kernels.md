---
title: Võrgutuum
summary: See PartCrafti versioon ehitab iga osa brauseris töötava võrgutuumaga. Mida see tähendab ümarate pindade, mahtude ja failide jaoks, kuidas näha, et see töötab, ja millised elemendid ootavad täpset tuuma.
keywords: tuum, võrk, manifold, täpne, b-rep, tahkudeks jaotatud, kõverused, opencascade, occt, ümardus vajab täpset, pole veel ehitatud, võrguväline, webassembly
from: 68d32d16
---

Geomeetriatuum on mootor, mis muudab sinu ajaloo tahkiseks. Selle PartCrafti versiooni tuum on **võrgutuum** (manifold-3d). See töötab sinu arvutis väikese WebAssembly-programmina ja on valmis hetk pärast rakenduse avanemist. Sinu osa kohta ei saadeta midagi kuhugi.

| | Võrgutuum |
|---|---|
| Ümarad kujundid | Lamedad tahud. **Kõverused** osa paneelil määrab, kui peen |
| Mahud ja pindalad | Tahkudeks jaotatud tahkise järgi, ümaratel osadel veidi väiksemad |
| Visandid, väljapressimine, lõikamine, pööramine, augud, massiivid, peegeldus, abitasandid | Jah |
| Ümardus ja faas | Sirgetel servadel lamedate tahkude vahel; kokku jooksvad ümardused on kaldlõigatud |
| Koor ja tõmbenurk | Koor avab lamedad tahud (täpne seina paksus); Tõmbenurk kallutab lamedaid tahke |
| Eksportid | STL, 3MF, STEP (tahkudeks jaotatud), joonise PDF ja DXF |
| Joonise vaated | Joonistatud tahkudest, sh lõikevaated |
| Tahud ja servad | Nimetatud ja tuntud liigi järgi (lame, silinder, koonus, sfäär, toroid; sirge, ring), võetud visanditest: töötsoonid Simulatsioon, Generatiivne ja Valmistus, Mõõda, valimine ja augutabel kasutavad neid |

Olekuriba paremas servas olev kiip ütleb **Võrgutuum**, kui see sinu osa ehitab.

## Mida ootab täpne tuum

Täpne (B-rep) tuum hoiab tõelisi ringe, silindreid ja koonuseid ning sujuvaid ümardusi mis tahes servadel. Sellel on ehitatud pühkimised, loftid, pinnad, lehtmetall, ribid, mitu tahkist, STEP-import ja täpne STEP-eksport. Varasemad PartCrafti labori versioonid kasutasid selleks OpenCascade'i. Selle litsents (LGPL) ei sobi sellele väljalaskele, kus iga rakendus on Apache-2.0 ja kasutab ainult lubavalt litsentseeritud teeke, seega seda ei ole kaasatud. Sellele pole kuupäeva.

Kuni selleni ütlevad need funktsioonid valimisel **Pole veel ehitatud**: olekuriba ütleb põhjuse ja nende nuppude tööriistavihjed lõpevad tekstiga „pole veel ehitatud (vajab täpset tuuma)“. [Mida veel ei ole ehitatud](topic:not-built-yet) loetleb igaühe ja ütleb, mida selle asemel teha.

Varasema versiooniga tehtud osa avaneb ikka. Need elemendid jäävad ajalukku märgituna kui pole ehitatud (too hiirega ühe kohale, et näha põhjust), ülejäänud osa ehitatakse ja salvestamine jätab need muutmata.

## Ümarad pinnad ja kõverused

Võrgutuum joonistab ringi hulknurgana. **Kõverused** osa paneelil määrab, mitme küljega täisring on. Rohkem külgi näeb sujuvam välja ja mõõdab tõelisele väärtusele lähemal, kuid kauem ehitada. Mahud, pindalad ja kaugused, mis tulevad {{ui:Mõõda}}st, on selle tahkudeks jaotatud tahkise omad: augu või väljaulatuva osa puhul on need natuke väiksemad kui ümara kuju omad.

## Võrgus ja võrguvälisena

Võrgutuum on osa rakenduse enda allalaadimisest. Ilma ühenduseta töötamiseks salvesta PartCraft võrguvälist kasutust, kui oled võrgus: vali rakenduseribalt {{ui:Salvesta võrguks}} ja oota, kuni seisab **Valmis võrguvälisena**. Üksikasjad: [Töö võrguvälisena](common:offline).
