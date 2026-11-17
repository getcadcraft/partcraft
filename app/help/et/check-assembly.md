---
title: Koosu kontrollimine põrkumiste ja liikumise suhtes
summary: Leia kattuvad detailid funktsiooniga Põrkumine, lohista mis tahes liite väärtusi liikumise jälgimiseks ja käi liide läbi selle ulatuses, et leida kohad, kus detailid põrkuvad.
keywords: häiring, häiringu tuvastamine, põrkumine, kokkupõrge, kattumine, keere sobivus, keere sügavuse mittevastavus, puutuvad tahud, peitmine, filter, liikumine, liikumisuuring, läbikäik, liikumisulatus, kontroll
from: 9c98db46
---

Detailide paigutatud asukohtadel tehakse kaks kontrolli: **Põrkumine** otsib praegu kattuvat materjali ning liikumiskontroll liigutab ühte liidet selle ulatuses ja otsib teel kattumisi.

## Häiringute kontrollimine

1. Ava või koosta koost (vt [Koosu koostamine liidetega](topic:build-assembly)).
2. Vali {{ui:Põrkumine}}.

Olekuriba näitab tulemust:

- „No interference between 3 parts (… ms).“ Kolme detaili vahel häiringut ei ole (… ms). Midagi ei kattu.
- „Interference: Flange1 and Flange2: Overlap, 2.5 mm³.“ Häiring: Flange1 ja Flange2: Kattumine, 2.5 mm³. Iga paar, millist tüüpi tulemus see on ja mahu, mida nad jagavad.

Vasakpoolne kast **Koost** näitab **Häiringut**: „Ei ühtegi“, „2 tulemust“ (näidatud tulemused) või „Kontrollimata“. Kui midagi pole valitud, loetleb parem paneel iga tulemuse jaotises **Häiring**.

Tulemus kustub alati, kui koost muutub. Käivita {{ui:Põrkumine}} uuesti pärast liite teisaldamist. Iga detailipaari kontrollitakse iga teise vastu, seega võtavad suured koosud kauem aega.

### Tulemuste tüübid

| Tüüp | Tähendab |
|---|---|
| **Kattumine** | Detailidel on ühine maht: tegelik põrge. |
| **Keere sügavuse mittevastavus** | Ühine maht on ühe detaili keermes, kuid teise keermest väljaspool: polt on keermestatud august sügavamale või tavaline vars keermestatud augus. |
| **Keere sobivus (kosmeetilised keermed)** | Ühine maht on mõlema detaili keermes: polt keermestatud augus. Kosmeetilised keermed joonistatakse keerme täissuuruses, seega kattuvad need alati pisut. |
| **Puutuvad tahud** | Ühist mahtu ei ole, kuid tahud on kontaktis (0.001 mm piires). |

Modelleeritud keermed (vt [Keermed võllidel ja avades, joonistatud või modelleeritud](topic:threads)) on tegelik geomeetria: see, mida nad jagavad, on **Kattumine**.

### Peida see, mida pole vaja näha

Jaotises **Häiring** on **Näita** all kast iga tüübi jaoks: eemalda linnuke kastidelt **Keere sobivus** ja **Puutuvad tahud**, et näha ainult olulisi põrkeid. **Peida see paar** tulemuse kõrval peidab selle detailipaari sõltumata tüübist. Peidetud tulemused loetakse („2 tulemust peidetud nende filtritega“) ja **Näita peidetud paare uuesti** toob paarid tagasi. Olekuriba loeb ka peidetud tulemusi.

Filtrid salvestatakse koosu koos ja iga muudatus on üks {{key:Mod+Z}} samm. **Käi liide läbi kokkupõrgete suhtes** (allpool) kasutab neid samuti. Filtritega koost salvestatakse versioonina 4; varasemad PartCrafti versioonid keelduvad selle avamisest, selle asemel et filtrid kaotada.

## Jälgi liikumist

1. Vali vasakpoolses loendis liide, mis liigub (kõik peale jäiga).
2. Lohista liugurit ühe selle väärtuse all, näiteks **Nurk (°)** või **Nihe (mm)**. Detail liigub lohistades.
3. Lase lahti. Uus asend jääb alles ja selle saab tagasi võtta klahviga {{key:Mod+Z}}.

Võid ka sisestada nurga või nihke väljale ja vajutada {{key:Enter}}.

Suletud ahelal (mehhanismil) oleva liide liigutab kogu ahelat: lohistatud väärtus jääb alles ja ahela teised liited järgnevad (vt [Suletud ahelad](topic:build-assembly#closed-loops-linkages)).

## Käi liide läbi kokkupõrgete suhtes

1. Vali liide, mis liigub.
2. Mitme väärtusega liite puhul (silindriline, tasane, kuul, tihvt soonde) vali, millist neist läbi käia, jaotises **Kontrolli liikumisi**.
3. Vali {{ui:Kontrolli liikumist kokkupõrgete suhtes}}.

PartCraft liigutab seda väärtust läbi 25 asendi 24 võrdse sammuga, teised jäävad paigale: nurk −180° kuni 180° (kallutus −90° kuni 90°), pikkus miinusest pluss suurima detaili suuruseni. See teatab:

- „No clash anywhere for Nurk (°) from -180 to 180 (25 positions checked).“ Nurga (°) puhul ei ole kusagil kokkupõrget vahemikus -180 kuni 180 (kontrollitud 25 asendit).
- „6 of 25 positions clash, first at Nurk (°) 45 (12.4 mm³).“ 25st asendist 6 on kokkupõrkega, esimene Nurk (°) 45 juures (12.4 mm³). Esimene kokkupõrkega asend ja selles kohas kattuv maht.

Nupp on jäikade liidete puhul hall, sest need ei liigu. Läbikäik kontrollib ainult asendeid, mitte nendevahelist teed: õhuke detail võib kahe sammu vahel läbi teise minna.

:::note
Kontakti ja raskusjõudu ei ole veel realiseeritud. Ilma piiranguteta katab läbikäik kogu vahemiku; anna väärtusele **Piirangud** (vt [Detailide loend, lahtivõetud vaated ja käsitsi liigutatavad detailid](topic:assembly-bom-explode)) ja läbikäik katab ainult need, nii et 90° avanev hing kontrollitakse 90° ulatuses.
:::

## Liikumisuuring

**Koost › Liikumine** juhib ühe liite väärtust algusest lõppu antud aja jooksul (püsikiirus, pehmendatud, siinus või välja ja tagasi), paigutab koosu igal sammul koos selle liidete ja suletud ahelatega ning teatab, millised põrked tekivad ja kui lähedale detailid jõuavad. **Lisa punkt** jälgib detaili keskpunkti või sellel klõpsatud punkti, ja kaart joonistab selle asukoha, kiiruse ja kiirenduse, liite väärtuse ning vahe ajas; **Salvesta CSV** ja **Salvesta graafik** kirjutavad need välja. Kiirus ja kiirendus arvutatakse salvestatud asukohtadest, seega sammude vaheline terav tipp loetakse madalaks: kasuta rohkem samme.

Pärast **Käivita** viib riba **Samm-sammult läbi käivituse** koosu mis tahes sammu juurde (aeg, väärtus ja see, kas detailid seal põrkuvad, on kõrval näidatud). Liide säilitab oma väärtuse ja **Tagasi mudelisse** paneb koosu tagasi. Uuringu seaded salvestatakse koosu faili; selle tulemused tehakse uuesti **Käivita** abil.

## Kontaktiuuring

**Koost › Kontakt** näitab, kuidas koost kannab koormusi seal, kus detailid üksteist vajutavad. Iga detail toob oma toed, koormused ja materjali oma **Simulatsiooni** uuringust (ühel detailil fikseeritud tahk, teisel jõud); siin valid paarid. **Lisa paar**, seejärel **Vali pool A** ja klõpsa ühe detaili tahkudel, **Vali pool B** ja klõpsa teise detaili tahkudel (valitud tahule klõpsamine eemaldab selle; {{key:Esc}} või **Valmis** lõpetab valimise). Paar on **Hõõrdevaba** (detailid vajutavad, aga libisevad) või **Sidutud** (need jäävad kokku). Jäikustegur määrab, kui tugevalt kontakt vastu vajub (20 on mõistlik algus, 1000 jäiga terasepaki puhul).

**Lahenda** käivitab koormuse sammudena ja näitab kontaktijõudu, sügavaimat vajumist, suurimat nihet ja suurimat pinget. Detail ilma paarita jäetakse välja ja kaart ütleb seda. Hõõrdevaba kontakt ei hoia detaili külgsuunas: anna igale detailile tugi selle enda Simulatsiooni uuringus või sida see, muidu sammud ei pruugi lahenduda. Paarid ja seaded salvestatakse koosu faili.

**Ekspordi CalculiXi sisend** kirjutab sama mudeli CalculiXi sisendfailina (.inp). CalculiX on eraldi programm, mille paigaldad ja käivitad ise; **Loe CalculiXi tulemusi (.frd)** loeb seejärel nihked tagasi selle koosu võrgusilmal ja keeldub failist, mis on tehtud teise võrgusilma jaoks. Siinne lahendaja oskab plastset käitumist, kuid ei ole eksplitsiitne dünaamika ning siin ei ole midagi sertifitseeritud analüüsi: lase inseneril kontrollida kõike, mis loeb.
