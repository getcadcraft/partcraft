---
title: Kopeerimine, kleepimine ja dubleerimine
summary: Kopeeri visandi geomeetriat, elemente ja koosu detaile; kleebi sinna, kuhu klõpsad, või samale kohale; dubleeri ühe sammuga; ja vaata, mis koos koopiaga kaasa tuleb ja mis mitte.
keywords: kopeeri, kleebi, lõika, dubleeri, lõikepuhver, kleebi samale kohale, vali kõik, tühista valik, kustuta, ctrl c, ctrl v, ctrl d, eksemplar, komponent, kopeeri visand, kopeeri element, kopeeri detail
from: 611307d7
---

Tööriistaribal asuvas rühmas {{ui:Muuda}} on {{ui:Võta tagasi}}, {{ui:Tee uuesti}}, {{ui:Kopeeri}}, {{ui:Kleebi}} ja menüü {{ui:Veel}}, kus on {{ui:Lõika}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, {{ui:Kleebi samale kohale}}, {{ui:Dubleeri}}, {{ui:Kustuta}}, {{ui:Vali kõik}} ja {{ui:Tühista valik}}, igaühel oma klahv. Mida need kopeerivad, sõltub sellest, kus oled: avatud visandi geomeetria, ajaloo element või koosu detail.

Hallina näidatud üksus ei saa praegu toimida. Hoia hiirt selle kohal: vihje ütleb, miks, näiteks „Select sketch geometry first“ (Kõigepealt vali visandi geomeetria) või „The clipboard holds Sketch2 and Extrude2: features paste into the history, so exit the sketch first“ (Lõikepuhvris on Sketch2 ja Extrude2: elemendid kleepuvad ajalukku, seega välju kõigepealt visandist).

| Toiming | Klahv | Visandis | Ajaloos | Koosus |
|---|---|---|---|---|
| Kopeeri | {{key:Mod+C}} | Valitud punktid ja kõverad | Valitud visand, väljapressimine, pööramine või auk (koos oma visandiga) | Valitud detail |
| Lõika | {{key:Mod+X}} | Kopeeri, seejärel kustuta need | Kopeeri, seejärel kustuta element | Kopeeri, seejärel eemalda detail |
| Kleebi | {{key:Mod+V}} | Koopia järgib osutit; klõpsa, kuhu see läheb | Lisab koopia ajaloo lõppu | Uus koopia teiste detailide kõrvale |
| Kleebi samale kohale | {{key:Mod+Shift+V}} | Samadel koordinaatidel | Sama mis Kleebi | Samasse kohta, kus kopeeritud detail |
| Dubleeri | {{key:Mod+D}} | Kopeeri ja teisalda ühe sammuga; lõikepuhvrit ei muudeta | Teine koopia kohe sinu järel | Teine koopia teiste detailide kõrvale |
| Kustuta | {{key:Delete}} | Valik | Element (küsib, kui teised seda kasutavad) | Detail või liide |
| Vali kõik | {{key:Mod+A}} | Kõik visandis | Pole saadaval | Pole saadaval |
| Tühista valik | {{key:Esc}} | Tühjendab valiku | Tühjendab valiku ja valimised | Tühjendab valiku |

Iga kleepimine, dubleerimine ja lõikamine on üks samm tagasivõtmise loendis: {{key:Mod+Z}} võtab tagasi, {{key:Mod+Y}} paneb tagasi.

## Visandis

1. Vali, mida kopeerida: klõpsa sellel, {{key:Shift}}+klõps rohkemate jaoks, lohista aken või vajuta kõige jaoks {{key:Mod+A}}.
2. Vajuta {{key:Mod+C}} või vali {{ui:Kopeeri}}. Olekuriba ütleb, mis kopeeriti.
3. Vajuta {{key:Mod+V}} või vali {{ui:Kleebi}}. Katkendlik koopia järgib osutit, hoituna oma keskelt. See kleepub punktidele: pane kopeeritud ringi keskpunkt punkti peale, klõpsates sellel punktil.
4. Klõpsa, kuhu see läheb. Kleebitud geomeetria jääb valituks, nii et saad selle kohe lohistada või sellele seoseid lisada. {{key:Esc}} tühistab kleepimise.

Mis kaasa tuleb:

- Kopeeritud joon, ring või kaar toob kaasa oma otsapunktid ja keskpunkti.
- **Kopeeritud objektide vahelised** seosed ja mõõdud tulevad kaasa: kopeeritud ristkülik on endiselt ristkülik oma mõõtmetega.
- Seosed **geomeetriani, mida sa ei kopeerinud**, ja nullpunktini jäetakse ära. Olekuriba loeb need: „2 relations to geometry outside the copy will not come along“ (2 seost koopiast väljaspool olevale geomeetriale ei tule kaasa). Kleebitud koopia on seega vaba liikuma, kuni seod selle seoste või mõõtudega.
- Fikseeritud punkt jääb fikseerituks, uues asukohas.

{{ui:Kleebi samale kohale}} paneb koopia täpselt originaali koordinaatidele, selles või teises visandis: mugav profiili ühest visandist teise toomiseks. Samas visandis jääb koopia originaali peale; lohista see eemale.

{{ui:Dubleeri}} ({{key:Mod+D}}) kopeerib valiku ja hakkab selle kohe paigutama, ilma lõikepuhvri sisu puutumata.

:::tip
Augu keskpunkti või pilu kordamiseks mitu korda kopeeri see üks kord ja kleebi mitu korda: iga {{key:Mod+V}} alustab uut koopiat, mis järgib osutit.
:::

## Ajaloos

1. Klõpsa ajaloos visandil, väljapressimisel, pööramisel või augul.
2. {{key:Mod+C}} kopeerib selle. Visandipõhine element kopeeritakse koos oma visandiga.
3. {{key:Mod+V}} lisab koopia ajaloo lõppu (tagasikerimise riba juurde, kui oled tagasi kerinud), uute nimedega nagu Sketch3 ja Extrude2.

Koopia asub samal tasandil või tahul nagu originaal, nii et ehitub selle peale ja detail näeb välja samasugune. Vali uus visand ja muuda selle tasandit paremas paneelis või ava see ja lohista või mõõtmesta profiil uuesti, et koopiat teisaldada.

- Kleebi **teise detaili** sisse: ava see detail ja vajuta {{key:Mod+V}}. Kui koopia visand oli tahul, mida sellel detailil ei ole, läheb see esitasandile ja olekuriba ütleb seda.
- {{ui:Dubleeri}} teeb kopeerimise ja kleepimise ühe sammuga, samas detailis.
- {{ui:Lõika}} kopeerib elemendi ja kustutab selle seejärel (küsides enne, kui teised elemendid seda kasutavad).

Mustreid, peegeldusi, ümardusi, faase, koori ja imporditud tahkisi ei saa kopeerida: need rippuvad servade, tahkude või selles detailis valitud elementide küljes. Kopeeri selle asemel visand või element, millele need on ehitatud, või tee muster {{ui:Lineaarne}} või {{ui:Ringjas}} abil.

## Koosus

1. Klõpsa detailil vaates või vasakpoolses loendis.
2. Vali {{ui:Dubleeri}} ({{key:Mod+D}}) või {{key:Mod+C}} ja seejärel {{key:Mod+V}}.

Uus koopia on **sama detail**: muuda ühte ja iga koopia muutub. See ilmub 20 mm kaugusele kõigest koosus olevast paremale, pööratuna samamoodi nagu koopia, ja jääb sinna, kuni liide selle paigutab. {{ui:Kleebi samale kohale}} ({{key:Mod+Shift+V}}) paneb selle täpselt sinna, kus kopeeritud detail on; ühenda see, et teisaldada (liugurliidese nihe lükkab seda edasi).

Teisest koosust kopeeritud detaili kleepimine toob detaili kaasa, sama mis {{ui:Lisa}} selle failist. Rühmas Koost olev {{ui:Lisa koopia}} teeb sama mis {{ui:Dubleeri}} ja töötab ka siis, kui midagi pole valitud (kopeerib viimase detaili).

## Lõikepuhver

- See on PartCrafti oma lõikepuhver, mitte arvuti oma: PartCrafti geomeetriat ei saa kleepida teise programmi ega teksti PartCrafti vaadetesse.
- See hoitakse selles brauseris, nii et teine PartCrafti vahekaart saab kleepida, mida kopeerisid. Seda loetakse tagasi ja kontrollitakse nagu avatud faili; kahjustatud või teisest versioonist pärit andmed keeldutakse.
- Suure imporditud STEP-failiga detail võib olla brauserile liiga suur hoidmiseks: siis kleepub see ainult selles vahekaardis.
- Arvuväljas või abi otsingus kopeerivad ja kleebivad {{key:Mod+C}} ja {{key:Mod+V}} teksti tavapäraselt.

Joonislehel ei ole kopeerimine ja kleepimine veel saadaval; {{ui:Kustuta}} ja {{ui:Tühista valik}} töötavad valitud sümboli kohal. Vaata [Mis ei ole veel valmis](topic:not-built-yet).
