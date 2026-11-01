---
title: Failid: avamine, salvestamine ja eksportimine
summary: Osade ja koostete failid, mida PartCraft avab ja salvestab, iga eksportvorming ja mida see säilitab, kuhu failid lähevad ning mis muutub võrguvälisena või brauserite vahel.
keywords: ava, salvesta, ekspordi, allalaadimine, fail, partcraft.json, koostefail, stl, 3mf, step, dxf, pdf, kus on mu failid, võrguväline, salvesta nimega
from: c15c2c48
---

PartCraft töötab sinu arvuti failidega. See ei laadi osa kunagi üles ning kontot ega pilvesalvestust pole. Pilvesalvestus pole veel saadaval.

## Mida PartCraft avab

| Fail | Laiend | Kuidas |
|---|---|---|
| PartCrafti osa | `.partcraft.json` | {{ui:Ava}}, {{key:Mod+O}} või lohista see 3D-vaatele |
| PartCrafti koost | `.partcraft-asm.json` | Sama: PartCraft tunneb ära, mis tüüpi see on |
| STEP-tahkis | `.step`, `.stp` | Tahkiskeha, mis loetakse kolmnurkadena: [Ava STEP-fail ja ehita sellele edasi](topic:import-step) |

STL-, OBJ- ja 3MF-võrgud avanevad samuti tahkiskehadena ([Ava STL, OBJ või 3MF](topic:open-meshes)), samuti `.3dm`-failid ([Ava .3dm-mudel](topic:open-3dm-files)). DXF, IGES ja teiste programmide omad osafailid ei avane (vt [Mida veel ei ole ehitatud](topic:not-built-yet)).

Avamisel kehtivad need reeglid:

- Osa- või koostefaili nimi peab lõppema `.json`-iga ning fail peab olema alla 50 MB.
- Failid kontrollitakse enne, kui midagi näidatakse. Kahjustatud või muudetud fail lükatakse tagasi selge põhjusega, näiteks „See ei ole PartCrafti fail.“
- Uuem PartCrafti versioon salvestatud fail lükatakse tagasi: „See fail on salvestatud uuema PartCrafti poolt (failiversioon 3); see loeb versiooni 2.“ Vanemad failid avanevad.
- Kui ekraanil olev osa on salvestamata muudatustega, küsib PartCraft enne: {{ui:Loobu}}, {{ui:Loobu muudatustest}} või {{ui:Salvesta kõigepealt}}.

## Salvestamine

{{ui:Salvesta}} või {{key:Mod+S}} salvestab ekraanil oleva:

- Osal: `<osa nimi>.partcraft.json`, täielik ajalugu (visandid, seosed, mõõdud, elemendid, tagasikerimise asukoht), joonislehe lõike, detaili ja GD&T märkmed ning kogu varasemas versioonis imporditud STEP-tahkise tekst. Elemendid, mida see versioon ei suuda ehitada, salvestatakse muutmata kujul tagasi. Tahkist endat ei salvestata; PartCraft ehitab selle faili avamisel uuesti ajaloo põhjal.
- Koostes: `<koosta nimi>.partcraft-asm.json`, **iga osa koos**. Üks fail sisaldab kogu koostet, nii et saad selle eraldi saata.

Salvestamine on **allalaadimine**. Sinu brauser paneb faili allalaadimiste kausta või küsib, kuhu see panna, kui oled selle seadnud küsima. Uuesti salvestamine teeb uue allalaadimise; brauser võib selle nimetada `Part1 (1).partcraft.json`, mitte vana faili asendada. Faile saad ümber nimetada või teisaldada rakendusega {{pick:mac=Finder|windows=Failihaldur|linux=failihaldur}}, nagu soovid.

Märkus nimede kohta: osa nimes olevad tähed, numbrid, tühikud, `_`, `.` ja `-` jäävad alles, kõik muud märgid muutuvad failinimes `_`-ks.

:::tip
Enamikul brauseritel on seade, mis küsib iga allalaadimise puhul, kuhu salvestada. Lülita see sisse, kui tahad igal korral valida „Salvesta nimega“: Chrome'is ja Edge'is on see seadete jaotises Allalaadimised; Firefoxis jaotises Üldine, Failid ja rakendused; Safaris jaotises Üldine, Faili allalaadimise asukoht.
:::

Rohkem allalaadimiste asukohtadest ja failide turvalisusest: [Kus sinu failid on](common:your-files).

## Eksportimine

Menüü {{ui:Ekspordi}} kirjutab muid vorminguid. Iga eksport on allalaadimine ja selle nimi tuleb osa järgi.

| Menüükirje | Fail | Mis selles on |
|---|---|---|
| {{ui:STL, 3D-printimiseks}} | `<name>.stl` | Kahendformaadis STL tahkise kolmnurgad, millimeetrites, **Z üles** |
| {{ui:3MF, 3D-printimiseks}} | `<name>.3mf` | 3MF, kus tahkis on ühe objektina, millimeetrites, **Z üles** |
| {{ui:STEP AP242 (täpne tahkis)}} | `<name>.step` | Selles versioonis veel ei ole ehitatud (hall): see vajab täpset tuuma |
| {{ui:STEP AP214 (täpne tahkis)}} | `<name>.step` | Selles versioonis veel ei ole ehitatud (hall) |
| {{ui:STEP (tahkudeks jaotatud, võrgusilma tuum)}} | `<name>.step` | Tahkis, mis koosneb võrgust tekkinud lamedatest tahkudest: **ümarad pinnad on paljud väikesed lamedad tahud**. Millimeetrites, PartCrafti enda telgedes (Y üles). Selles versioonis on see STEP, mida kasutada teiste CAD-programmidega |
| {{ui:DXF visandist või lamedast tahust}} | `<name> - <sketch>.dxf` või `<name> - face.dxf` | DXF R12. Visand: jooned, kaared, ringid ja punktid visandi enda koordinaatides, kihtidel PROFILE, CONSTRUCTION ja POINTS. Valitud lame tahk: selle ääred kinniste murdjoontena (ümarad servad oma tahkudena) |
| {{ui:Joonis (PDF): vaated, lõige, detail, GD&T}} | `<name> - drawing.pdf` | A3 joonisleht: kolm vaadet, isomeetria, lõige ja detail, kui need on määratud, üldmõõtmed, GD&T sümbolid, tiitelplokk |

:::note
{{ui:STEP AP242 (täpne tahkis)}} ja {{ui:STEP AP214 (täpne tahkis)}} ei ole selles versioonis veel ehitatud: kasuta {{ui:STEP (tahkudeks jaotatud, võrgusilma tuum)}}. Sellel on õige kuju ja maht, kuid iga ümar pind on paljud väikesed lamedad tahud, seega teised programmid ei saa auku valida silindrina. Kui see on oluline, sea enne **Kõverused** peenemaks.
:::

- Eksport on ekraanil oleva osa oma. Koostes on eksport välja lülitatud; koostete eksporti veel ei ole.
- STL, 3MF, tahkudeks jaotatud STEP ja tahkude DXF on alati tehtud tahkudest. Seade **Kõverused** (paremas paneelis, kui midagi pole valitud) määrab nende peenuse: 32 kuni 256 tahku pöörde kohta. Enne STL- või 3MF-eksporti sile printimise jaoks vali Peen või Väga peen.
- PDF-joonis kasutab lugeja sisseehitatud Helvetica fonti. Märgid, mida see ei suuda näidata, prinditakse kui „?“.

Samm-sammult: [Eksport printimiseks, STEP-iks ja DXF-iks](topic:export-files) ning [Tee joonislehte](topic:drawing-pdf).

## Salvestamata töö

- PartCraft hoiab avatud osa või koostest taastamiskoopiat selles brauseris kohe pärast iga muudatust, nii et krahh või suletud vahekaart ei kaota seda: järgmisel PartCrafti avamisel küsib see „Taasta sinu töö?“. See ei ole salvestamine: salvesta fail, et töö alles jääks. Vt [Taasta salvestamata töö](common:recover).
- Kui proovid sulgeda vahekaarti või seda uuesti laadida salvestamata muudatustega, küsib brauser „Lahku saidilt?“. See on brauseri enda aken; PartCraft ei saa selle sõnastust muuta.
- {{ui:Uus}}, {{ui:Ava}} ja koosteluku sulgemine küsivad enne salvestamata muudatuste hülgamist.

## Võrgus ja võrguvälisena

Kõik toimub sinu arvutis: võrgutuum (WebAssembly-programm) laaditakse rakendusega kaasa ning ehitab geomeetria kohapeal, failid loetakse sinu kettalt ja kirjutatakse sinna. Ühtegi osaandmet ei liigu võrku. Vt [Võrgutuum](topic:solid-kernels).

Töötamiseks ilma ühenduseta salvesta PartCraft võrguvälist kasutust, kui oled võrgus: vali rakenduseribalt {{ui:Salvesta võrguks}} ja oota, kuni see loendab („Salvestan 40 / 212“) ja seisab **Valmis võrguvälisena**. Salvestatud koopia sisaldab 3D-teeki ja võrgutuuma, nii et edaspidi töötavad ilma ühenduseta modelleerimine, salvestamine, kõik eksportid ja joonised. Kui seisab **Salvestamine ei õnnestunud**, klõpsa sellel uuesti, kui oled võrgus. **Võrguvälist kasutust pole saadaval** tähendab, et see brauseriaken ei saa koopiat hoida (privaatsed aknad ja mõned hallatud arvutid). Kui koopia on salvestatud, pakub klõps nupul **Valmis võrguvälisena** valikuid {{ui:Salvesta uuesti (võta uusim versioon)}} ja {{ui:Eemalda võrguvälise koopia}}. Üksikasjad: [Töö võrguvälisena](common:offline).

:::online
Oled võrgus. Isegi ilma võrguvälise kasutuseta salvestamiseta saad jätkata töötamist, kui PartCraft on laadinud ja olekuriba kiip ütleb „Võrgutuum“, ka siis, kui ühendus katkeb. Ära lae lehte uuesti enne, kui oled jälle võrgus.
:::

:::offline
Oled võrguühenduseta. Kui PartCraft on juba avatud, jätka töötamist; salvestamine ja eksportimine töötavad ikka. Kui rakenduseriba ütleb **Valmis võrguvälisena**, avaneb PartCraft ka nullist ilma ühenduseta; muidu ära selle vahekaarti uuesti lae.
:::

## Brauserite erinevused

- **Allalaadimised.** Igal brauseril on oma allalaadimiste kaust ja oma viis küsida. Kui brauser küsib, kas sellel saidil on lubatud faile alla laadida, luba see, muidu salvestamine ja eksport ei saa töötada.
- **Lohistamine** faili vaatele töötab Chrome'is, Edge'is, Firefoxis ja Safaris.
- **Failid telefonist või tahvelarvutist.** iPhone'is ja iPadis avab {{ui:Ava}} rakenduse Failid; salvestatud failid lähevad rakendusse Failid, kausta Allalaadimised. Androidis lähevad need kausta Allalaadimised.

Brauserist või operatsioonisüsteemist sõltumata ei erine failide sisu.
