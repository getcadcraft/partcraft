---
title: Failid: ava, salvesta ja ekspordi
summary: PartCrafti detail- ja koostefailid, mida ta avab ja salvestab, iga ekspordivorming ja mida see säilitab, kuhu failid lähevad ning mis muutub võrguühenduseta töötamisel või brauserite vahel.
keywords: ava, salvesta, ekspordi, allalaadimine, fail, partcraft.json, koostefail, stl, 3mf, step, dxf, pdf, kuhu failid lähevad, võrguühenduseta, salvesta nimega
from: e5fbc7e3
---

PartCraft töötab sinu arvutis olevate failidega. See ei lae kunagi detaili üles ning siin pole kontot ega pilvesalvestust. Pilvesalvestus pole veel saadaval.

## Mida PartCraft avab

| Fail | Laiend | Kuidas |
|---|---|---|
| PartCrafti detail | `.partcraft.json` | {{ui:Ava}}, {{key:Mod+O}} või lohista see 3D-vaatele |
| PartCrafti koost | `.partcraft-asm.json` | Sama: PartCraft näeb, mis tüüp see on |
| STEP-tahke | `.step`, `.stp` | Tahkekeha, loetud kolmnurkadena: [Ava STEP-fail ja ehita sellele](topic:import-step) |

STL-, OBJ- ja 3MF-võrgud avanevad samuti tahkekehadena ([Ava STL, OBJ või 3MF](topic:open-meshes)), ja samuti `.3dm`-failid ([Ava .3dm-mudel](topic:open-3dm-files)). DXF, IGES ja teiste programmide omad detailifailid ei avane (vt [Mis pole veel valmis](topic:not-built-yet)).

Reeglid avamisel:

- Detaili- või koostefaili nimi peab lõppema `.json`-iga ja fail peab olema alla 50 MB.
- Failid kontrollitakse enne, kui midagi näidatakse. Kahjustatud või muudetud fail lükatakse tagasi lihtsa põhjusega, näiteks "See pole PartCrafti fail."
- Uuema PartCrafti poolt salvestatud fail lükatakse tagasi: "See fail on salvestatud uuema PartCrafti poolt (failiversioon 3); see versioon loeb versiooni 2." Vanemad failid avanevad.
- Kui ekraanil oleval detailil on salvestamata muudatusi, küsib PartCraft enne: {{ui:Loobu}}, {{ui:Loobu muudatustest}} või {{ui:Salvesta kõigepealt}}.

## Salvestamine

{{ui:Salvesta}} või {{key:Mod+S}} salvestab selle, mis ekraanil on:

- Detailil: `<detaili nimi>.partcraft.json`, terve ajalugu (visandid, seosed, mõõtmed, elemendid, tagasikerimise asend), joonislehe lõike, detaili- ja GD&T märkused ning kogu eelmises versioonis imporditud STEP-tahke tekst. Selles versioonis ehitatav element salvestatakse tagasi muutmata. Tahket ennast ei salvestata; PartCraft ehitab selle ajaloost uuesti, kui fail avatakse.
- Koostes: `<koosta nimi>.partcraft-asm.json`, **iga detail selle sees**. Üks fail kannab kogu koostu, nii et seda saab saata eraldi.

Salvestamine on **allalaadimine**. Brauser paneb faili oma allalaadimiste kausta või küsib, kuhu panna, kui see on seadistatud küsima. Uuesti salvestamine teeb uue allalaadimise; brauser võib nimetada selle `Part1 (1).partcraft.json`, mitte ei asenda vana. Nimeta või teisalda faile {{pick:mac=Finder|windows=Failihaldur|linux=sinu failihaldur}} abil, nagu soovid.

Märgid detaili nimes, peale tähtede, numbrite, tühikute, `_`, `.` ja `-`, muutuvad failinimes `_`-ks.

:::tip
Enamikul brauseritel on seade, mis küsib iga allalaadimise puhul, kuhu fail salvestada. Lülita see sisse, kui tahad iga kord valikut "Salvesta nimega": Chrome'is ja Edge'is on see seadetes jaotises Allalaadimised; Firefoxis jaotises Üldine, Failid ja rakendused; Safaris jaotises Üldine, Faili allalaadimise asukoht.
:::

Rohkem allalaadimiste asukohast ja failide kaitsmisest: [Kuhu sinu failid lähevad](common:your-files).

## Eksportimine

{{ui:Ekspordi}} menüü kirjutab teised vormingud. Iga on allalaadimine, nimetatud detaili järgi.

| Menüüelement | Fail | Mis on sees |
|---|---|---|
| {{ui:STL, 3D-printimiseks}} | `<nimi>.stl` | Binaarne STL tahke kolmnurkadest, millimeetrites, **Z üles** |
| {{ui:3MF, 3D-printimiseks}} | `<nimi>.3mf` | 3MF tahkega ühe objektina, millimeetrites, **Z üles** |
| {{ui:STEP AP242 (täpne tahke)}} | `<nimi>.step` | Üks täpne tahke, millimeetrites, Z üles: ümarad tahud tõeliste silindrite, koonuste, sfääride ja torudena. STEP teiste CAD- ja CAM-programmide jaoks |
| {{ui:STEP AP214 (täpne tahke)}} | `<nimi>.step` | Sama täpne tahke vanemas AP214 skeemis |
| {{ui:STEP (tahkudeks jaotatud, võrgusilma tuum)}} | `<nimi>.step` | Tahke lamedatest tahkudest võrgust: **ümarad pinnad on paljud väikesed lamedad fassetid**. Millimeetrites PartCrafti enda telgedes (Y üles). Programmile, mis keeldub täpsest failist |
| {{ui:DXF visandist või lamedast tahust}} | `<nimi> - <visand>.dxf` või `<nimi> - face.dxf` | DXF R12. Visand: jooned, kaared, ringid ja punktid visandi enda koordinaatides, kihtidel PROFILE, CONSTRUCTION ja POINTS. Valitud lame tahk: selle äärejooned suletud polüjoonidena (ümarad servad oma fassettidena) |
| {{ui:Joonis (PDF): vaated, lõige, detail, GD&T}} | `<nimi> - drawing.pdf` | A3 joonisleht: kolm vaadet, isomeetriline, lõige ja detail, kui seatud, üldmõõtmed, GD&T sümbolid, pealdisplokk |

:::note
{{ui:STEP AP242 (täpne tahke)}} kirjutab augud, kühmud, ümardused, koonused, sfäärid ja torud oma tõelistel pindadel, nii et teine programm saab augu valida silindrina; **Kõverad** seda ei muuda. Splain-küljed, modelleeritud keered ja imporditud võrgud ei oma täpset pinda ja jäävad samas tahkises lamedateks fassettideks; olekuriba ütleb, mitu. {{ui:STEP (tahkudeks jaotatud, võrgusilma tuum)}} kirjutab iga ümara tahu fassetidena.
:::

- Eksport on ekraanil oleva detaili oma. Eksport on koosteses välja lülitatud; koostu eksporti veel pole.
- STL, 3MF, fassetiline STEP ja tahu DXF on alati fassettidest. Seade **Kõverad** (paremas paneelis, kui midagi pole valitud) määrab, kui peenelt: 32 kuni 256 fassetti pöörde kohta. Vali Peen või Väga peen enne STL- või 3MF-eksporti sujuva printimise jaoks.
- PDF-joonis kasutab lugeja sisseehitatud Helvetica fonti. Märgid, mida see ei suuda näidata, prinditakse kui "?".

Samm-sammult: [Ekspordi printimiseks, STEP ja DXF](topic:export-files) ja [Koosta joonisleht](topic:drawing-pdf).

## Salvestamata töö

- PartCraft hoiab avatud detaili või koosta taastekoopiat selles brauseris pärast iga muudatust, nii et krahh või suletud vahekaart seda ei kaota: järgmisel PartCrafti avamisel küsitakse "Taasta sinu töö?". See pole salvestus: salvesta fail, et oma töö alles jätta. Vt [Taasta salvestamata töö](common:recover).
- Kui proovid vahekaarti sulgeda või lehte uuesti laadida salvestamata muudatustega, küsib brauser "Lahkuda saidilt?". See on brauseri enda aken; PartCraft ei saa selle sõnastust muuta.
- {{ui:Uus}}, {{ui:Ava}} ja koosta sulgemine küsivad enne salvestamata muudatuste hülgamist.

## Võrgus ja võrguühenduseta

Kõik toimub sinu arvutis: võrgusilma tuum (WebAssembly programm) laaditakse rakendusega kaasa ja ehitab geomeetria kohapeal ning failid loetakse ja kirjutatakse sinu kettalt. Ühtegi detailiandmet ei saadeta võrku. Vt [Võrgusilma tuum](topic:solid-kernels).

Et töötada täiesti ilma ühenduseta, salvesta PartCraft võrguühenduseta kasutamiseks, kui oled võrgus: vali rakenduse ribal {{ui:Salvesta võrguks}} ja oota, kuni see loeb ("Saving 40 of 212"), kuni seisab **Offline ready**. Salvestatud koopia sisaldab 3D-teeki ja võrgusilma tuuma, nii et pärast töötavad modelleerimine, salvestamine, kõik eksportid ja joonised ka ilma ühenduseta. Kui seisab **Could not save**, klõpsa seda, et proovida uuesti võrgus olles; **Offline not available** tähendab, et see brauseriaken ei saa koopiat hoida (privaatsed aknad ja mõned hallatud arvutid). Kui koopia on salvestatud, pakub nupu **Offline ready** klõps {{ui:Salvesta uuesti (võta uusim versioon)}} ja {{ui:Eemalda võrguvälise koopia}}. Üksikasjad: [Töötamine võrguühenduseta](common:offline).

:::online
Sa oled võrgus. Isegi ilma võrguühenduseta salvestamiseta, kui PartCraft on laadinud ja olekuriba kiip ütleb "Mesh kernel", saad jätkata töötamist, kui ühendus katkeb. Lihtsalt ära laadi lehte uuesti enne, kui oled jälle võrgus.
:::

:::offline
Sa oled võrguühenduseta. Kui PartCraft on juba avatud, jätka töötamist; salvestamine ja eksportimine töötavad ikka. Kui rakenduse riba ütleb **Offline ready**, avaneb PartCraft ka nullist ilma ühenduseta; muidu ära laadi seda vahekaarti uuesti.
:::

## Brauseritevahelised erinevused

- **Allalaadimised.** Igal brauseril on oma allalaadimiste kaust ja oma viis küsimiseks. Kui brauser küsib, kas see sait tohib faile alla laadida, luba see, muidu salvestamine ja eksportimine ei saa töötada.
- **Lohistamine.** Faili lohistamine vaatele töötab Chrome'is, Edge'is, Firefoxis ja Safaris.
- **Failid telefonist või tahvelarvutist.** iPhone'is ja iPadis avab Ava rakenduse Failid; salvestatud failid lähevad kausta Downloads. Androidil lähevad need kausta Downloads.

Failide sisu ei erine brauseriti ega operatsioonisüsteemiti.
