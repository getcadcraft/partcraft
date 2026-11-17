---
title: Mõõtmete muutmine ilma visandit avamata
summary: Juhi detaili paremal paneelil olevate arvudega: visandi mõõdud, sügavused, arvud ja nurgad; kuidas planeerida detail nii, et õiged arvud seda juhiksid, ning kus parameetrid ja võrrandid üle võtavad.
keywords: parameetrid, juhtivad mõõdud, konstruktsioonikavatsus, muuda mõõtmeid, võrrandid, globaalsed muutujad, mõõtmetabel, konfiguratsioonid, mõõtmete muutmine, muuda mõõdet
from: c2ae1a32
---

Iga mõõt PartCraftis detailis on arv, mida saad hiljem muuta: visandite mõõdud ja elementide seaded. Visandi mõõtmete muutmiseks ei pea visandit avama.

## Visandi mõõdu muutmine paneelilt

1. Klõpsa ajaloos elementi, näiteks „Extrude1“.
2. Väljapressimise enda seadete all loetleb **Visandi mõõdud (Sketch1)** kõik selle visandi mõõdud: „Kaugus“, „Läbimõõt“, „Nurk (°)“ jne.
3. Sisesta üks väli uue väärtusega ja vajuta {{key:Enter}} või {{key:Tab}}.

Visand lahendatakse uue väärtusega ja kogu detail ehitatakse uuesti. Visandi enda valimine näitab sama loendit kui **Juhtivad mõõdud**.

Raadius või läbimõõt peab olema suurem kui null ja nurk on vahemikus 0 kuni 180 kraadi; kui ei ole, ütleb olekuriba seda.

:::tip
Mis väli on mis? Väljad on loetletud selles järjekorras, mil mõõdud tehti. Kui sa ei ole kindel, ava visand (topeltklõps sellel), topeltklõpsa mõõdul visandil ja muuda seda seal.
:::

## Sisesta põhiarv kohe

Vali element ajaloos (või lisa see lihtsalt) ja sisesta arv: see läheb elemendi põhiväljale, mida muudad kõige sagedamini (väljapressimise **Sügavus**, pööramise **Nurk**, augu **Läbimõõt**, mustri **Arv**, ümarduse **Raadius**, koore seinapaksus). Vajuta {{key:Enter}}, et see määrata, või {{key:Esc}}, et jätta vana. Väljapressimise lisamisel ütleb olekuriba: „Extrude1 added. Change its numbers on the right, or type a number now for its depth.“ (Extrude1 lisatud. Muuda selle arve paremal või sisesta nüüd arv sügavuseks.)

## Muuda arvu ajaloos

Iga elemendi rida ajaloos näitab põhiarvu nime kõrval: „Extrude1 25 mm“, „Hole1 Ø6.6 thru“, „Fillet1 R2“, „LPattern1 4 × 20 mm“. Topeltklõpsa arvul (või vali rida ja vajuta {{key:F2}}) ja avaneb väli just sinna. Sisesta uus väärtus ja vajuta {{key:Enter}}; {{key:Esc}} jätab vana alles. See töötab täpselt nagu elemendi väli paremal: samad piirangud, `=` võrrandi jaoks, näiteks `=width/2`, ja üks tagasivõtmise samm.

Väljapressimise, augu või mustri puhul avab topeltklõps kuhu tahes real välja. Ümarduse, faasi, koore, kalde või keerme puhul läheb topeltklõps nimel ikka serva või tahu valimisse, seega topeltklõpsa ise arvul. Visanditel rea arvu ei ole: topeltklõps avab visandi.

## Lohista vaates

Vali ajaloos väljapressimine (või klõpsa seda vaates ja seejärel selle rida) ning selle lõputahul seisab oranž nool, kõrval kastis sügavus. Lohista noolt: detail järgib sind lohistamisel ja lahtilaskmine määrab uue sügavuse ühe sammuna ({{key:Mod+Z}} paneb selle tagasi). Vajuta lohistamise ajal {{key:Esc}}, et naasta algusesse. Sügavus liigub sammudena, mis on kümnendik suurusest: 1 mm 25 mm väljapressimisel, 0.1 mm 3 mm väljapressimisel.

Pööramisel on pöörde lõpus kaarekujuline nool: lohista seda ümber telje, et muuta nurka, täisastmetes 1°-st 360°-ni.

Või klõpsa noole kõrval olevas kastis, sisesta väärtus (või `=` ja võrrand) ning vajuta {{key:Enter}}. Väljapressimisel, mis läheb **Läbi kõige** või kuni tahuni, või väärtusel, mida juhib võrrand, noolt ei ole: muuda neid paremal.

## Detaili juhtivad arvud

| Kus | Mida saab muuta |
|---|---|
| Visand | Iga mõõt: pikkused, kaugused, raadiused, läbimõõdud, nurgad |
| Väljapressimine ja lõige | Sügavus, lõppseis, suund, lisamine või lõige |
| Pööramine ja pööratud lõige | Nurk, telg, lisamine või lõige |
| Auk | Läbimõõt, sügavus, läbi kõige, vastuava läbimõõt ja sügavus |
| Ümardus, faas, koor | Raadius, kaugus, seinapaksus ja suund ning millised servad või tahud |
| Lineaarne ja ringjas | Arv, vahe või nurk, suund või telg |
| Detail | Kõverad (kui peenelt ümarad kujud on tahuliseks jaotatud) |
| Joonis | Kus lõige läbib, detaili suurus ja mõõtkava, GD&T väärtused |

## Planeeri detail nii, et õiged arvud seda juhiksid

Arvud, mille annad, on need, mida saad muuta. Mõned harjumused teevad hilisemad muudatused korrektseks:

- **Mõõdusta see, mis töö jaoks oluline on.** Kui auk peab jääma servast 15 mm kaugusele, mõõdusta seda servast, mitte nullpunktist.
- **Fikseeri visandid täielikult.** Siis liigub muudatusel ainult see, mis peabki liikuma (vt [Visandi täielik fikseerimine](topic:relations-dimensions)).
- **Kasuta seoseid kavatsuse jaoks.** Võrdsus kahe augu vahel tähendab, et üks läbimõõt juhib mõlemat. Sümmeetrilised kujud: pane nullpunkt keskjoonele või kasuta keskpunkti.
- **Visanda elementide tehtud tahkudele.** Väljapressimise lõputahul olev visand liigub, kui sügavus muutub.
- **Kasuta mustrit kopeerimise asemel.** Üks auk, mis on kaheksa korda mustriks, on ainult üks läbimõõt, mida muuta.

## Üle üksikute arvude

- **Üks arv juhib mitut:** kasuta parameetreid ja võrrandeid: [Detaili juhtimine parameetritega](topic:parameters).
- **Ühe detaili mitu suurust:** salvesta igaüks [konfiguratsioonina](topic:design-tables); need hoitakse detailifailis.
- **Arvutus arvuväljal:** sisesta `=40/2` või `=width / 2`. See teeb võrrandi; vt [Võrrandid mõlemas suunas](topic:equations-two-way).
- **Tollid:** detail näitab millimeetreid. Arvuväljal `=`-märgiga või parameetris muudetakse `2in` väärtuseks 50.8.

Vaata [Mis ei ole veel valmis](topic:not-built-yet).
