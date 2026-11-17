---
title: Tee piirustus näkymillä, leikkauksella ja GD&T:llä
summary: Avaa piirustusarkki, lisää leikkaus ja yksityiskohtanäkymä, sijoita datumit, muotoilukehykset ja pinnanlaatumerkit, valitse arkin koko, täytä piirustusotsikko ja revisiot ja vie arkki PDF-tiedostona.
keywords: reikätaulukko, reikäkaavio, reikien sijainnit, tunnisteet, piirustus, 2d-piirustus, arkki, arkin koko, a4, a3, a2, a1, a0, ansi, piirustusotsikko, revisio, revisiolohko, piirustusnumero, materiaali, pdf, näkymät, ortografinen, kolmas kulma, isometrinen, leikkausnäkymä, yksityiskohtanäkymä, gd&t, datum, muotoilukehys, toleranssi, sijainti, tasomaisuus, pinnanlaatu, karkeus, piirustusotsikko, tulosta
from: 39e944c0
---

PartCraft tekee osasta piirustusarkin: edestä, ylhäältä ja oikealta näkymät kolmannen kulman projektiossa, isometrisen näkymän, ulkomitat ja piirustusotsikon arkilla A4–A0 tai ANSI A–E. Lisäksi voit lisätä leikkauksen, yksityiskohtanäkymän ja GD&T-merkit. Arkki päivittyy osan muuttuessa, ja sen asetukset tallennetaan osatiedostoon.

## Avaa piirustusarkki

1. Rakenna osa. (Jos mitään ei ole rakennettu: ”Rakenna ensin kiinteä kappale ja tee sitten sen piirustus”.)
2. Valitse {{ui:Piirustus}} työkalurivistä.

3D-näkymä korvataan arkilla. Työkalurivissä näkyvät {{ui:Datum}}, {{ui:Kehys}}, {{ui:Pinnoite}}, {{ui:Yksityiskohta}}, {{ui:PDF}} ja {{ui:Takaisin}}, ja oikeanpuoleisen paneelin otsikko on **Piirustus**. Tilarivi kertoo, miten näkymät tehtiin: ”Piirustus (käyrät piirretään fasetteina). Datum, Kehys ja Pinnoite sijoittavat GD&T:n näkymälle; paneeli asettaa leikkauksen ja yksityiskohtanäkymän.” Näkymät piirretään verkkoytimen fasettien pohjalta, joten pyöristetyt särmät ovat lyhyitä suoria viivoja; todelliset kaaret vaativat tarkan ytimen, jota tästä versiosta ei löydy.

Liiku arkilla: vieritä hiirellä zoomataksesi, vedä oikealla tai keskipainikkeella panoroidaksesi ja paina {{key:F}} sovittaaksesi arkin. Kun arkki on aktiivinen, {{key:Plus}} ja {{key:Minus}} zoomaavat ja {{key:Shift}} nuolinäppäimien kanssa panoroi.

Valitse {{ui:Takaisin}}, {{ui:Takaisin malliin}} tai paina {{key:Esc}} (kun mitään ei ole valittuna eikä työkalu ole käytössä) palataksesi 3D-malliin.

## Mitä arkilla on

- **Valitsemasi arkki**, vaakasuunnassa (A3, ellet valitse toista), reunuksella ja **piirustusotsikolla**: nimi, yritys, piirustusnumero, revisio, materiaali, piirtäjä, tarkastaja, hyväksyjä, päiväys, mittakaava, arkin koko, ”Yksiköt: millimetriä · Kolmannen kulman projektio” sekä se, ovatko näkymät tarkkoja vai fasetoituja.
- **Revisiolohko** oikeaan yläkulmaan, kun lisäät revision.
- **Edestä, ylhäältä ja oikealta** -näkymät: ylänäkymä edestä-näkymän yläpuolella, oikea näkymä sen oikealla puolella. Piilotetut särmät katkoviivoina.
- **Isometrinen näkymä**, jos tilaa on.
- **Ulkomitat**: leveys ja korkeus edestä-näkymässä, syvyys ylänäkymässä.
- Yksi **mittakaava** pääkuville ISO-sarjasta (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), valittuna niin, että ne mahtuvat.

## Valitse arkin koko

Valitse piirustusarkilla, kun mitään ei ole valittuna, oikeanpuoleisen paneelin {{ui:Arkki}}: **A4, A3, A2, A1, A0** (ISO 216) tai **ANSI A, B, C, D, E** (11 × 8,5 – 44 × 34 tuumaa). Näkymät asetellaan uudelleen suurimpaan ISO-mittakaavaan, joka mahtuu, joten suurempi arkki voi näyttää osan suurempana.

## Täytä piirustusotsikko

Oikean paneelin **Piirustusotsikko**-kentät menevät suoraan arkille: {{ui:Otsikko}}, {{ui:Piir. nro}}, {{ui:Revisio}}, {{ui:Yritys}}, {{ui:Piirtäjä}}, {{ui:Tarkastaja}}, {{ui:Hyväksyjä}}, {{ui:Päiväys}} (vuosi-kuukausi-päivä), {{ui:Yleistoleranssi}} ja {{ui:Pinnoite}} (kaksi viimeistä tulostuvat heti piirustusotsikon yläpuolelle). Kirjoita ruutuun ja paina {{key:Enter}} tai napsauta muualle. Tyhjä ruutu jättää solun tyhjäksi, paitsi seuraavat:

- **Otsikko** näyttää osan nimen, kunnes kirjoitat oman.
- **Päiväys** näyttää tämän päivän, kunnes kirjoitat oman.
- **Revisio** näyttää listan uusimman revision, kunnes kirjoitat oman.

**Materiaali** tulee osasta: napsauta mallin tyhjää kohtaa ja valitse {{ui:Materiaali}} Osa-paneelista. Sama materiaali antaa Mittaa-työkalun massaominaisuuksille tiheyden.

## Lisää revisioita

Kohdassa **Revisiot** napsauta {{ui:Lisää revisio}}. Jokainen uusi rivi saa seuraavan kirjaimen (A, B, C …, Z:n jälkeen AA) ja tämän päivän päiväyksen. Kirjoita, mitä muuttui ja kuka muutoksen teki. {{ui:Poista}} poistaa rivin. Arkin oikean yläkulman revisiolohko listaa ne vanhimmasta uusimpaan, enintään 20.

Arkin koko, piirustusotsikko, revisiot ja materiaali tallennetaan osatiedostoon, ja jokainen muutos on yksi askel kohdassa {{ui:Kumoa}}.

## Lisää leikkausnäkymä

Osa leikataan tasolla, ja leikkaus viivoitetaan. Kuten muutkin näkymät, leikkaus piirretään fasetteina, joten pyöristetyt särmät ovat lyhyitä suoria viivoja.

1. Aseta oikean paneelin **Leikkaus A-A** kohtaan **Edestä-näkymästä**, **Ylänäkymästä** tai **Oikeasta näkymästä**.
2. Leikkaus ilmestyy arkille, viivoitettuna kohdissa, joissa leikkaustaso kulkee materiaalin läpi, ja leikkauslinja sekä sen ”A”-nuolet näkyvät näkymällä, josta leikkaus otetaan.
3. Aseta **Leikkaus kohdasta (mm)** siirtääksesi leikkaustasoa. Se alkaa osan keskeltä.

Aseta **Leikkaus A-A** takaisin kohtaan **Ei mitään** poistaaksesi sen.

## Lisää yksityiskohtanäkymä

1. Aseta **Yksityiskohta B** näkymään, joka suurennetaan (tai valitse työkalurivistä {{ui:Yksityiskohta}}).
2. Napsauta suurennettavan alueen keskikohtaa kyseisessä näkymässä. Ympyrä, jossa on merkintä ”B”, merkitsee sen, ja suurennettu ”Yksityiskohta B” ilmestyy arkille omalla mittakaavallaan, esimerkiksi ”Yksityiskohta B (2:1)”.
3. Aseta **Yksityiskohdan säde (mm)** ympyrän kokoa varten ja **Yksityiskohdan mittakaava** suurennusta varten: 2, 4, 5 tai 10 × arkki.

Yksityiskohta voidaan ottaa edestä-, ylä-, oikeasta tai leikkausnäkymästä, ei isometrisestä. Jos kaikille näkymille ei ole tilaa, paneeli kertoo: ”Arkilla ei ole tilaa: yksityiskohta. Tee yksityiskohdasta pienempi tai poista näkymä.”

## Lisää reikätaulukko

Reikätaulukko listaa osan reiät sijainteineen, porausta tai CNC-työstöä varten: valitse paneelista **Reikätaulukko** › **Ylänäkymästä** (tai edestä tai oikealta).

- Jokaiselle siinä näkymässä päästä nähtävälle reiälle tulee tunniste viereensä: **A1**, **A2** … ensimmäiselle koolle, **B1** … seuraavalle.
- Taulukko listaa kunkin tunnisteen, sen **X** ja **Y** millimetreinä sekä koon: ”Ø14 LÄPI”, ”Ø6,6 × 10 SYVÄ”, upotus tai kierreporaus kierremerkintöineen.
- X ja Y mitataan näkymän ääriviivan vasemmasta alakulmasta, merkittynä arkilla **X0 Y0**.
- Kuvioiden tekemät reiät sisältyvät. Näkymään nähden kohtisuorassa olemattomat reiät lasketaan paneelissa ja jätetään taulukon ulkopuolelle.

Taulukko sijoitetaan arkin vapaaseen kohtaan ja myös PDF-tiedostoon.

## Sijoita GD&T- ja pinnanlaatumerkit

1. Valitse {{ui:Datum}}, {{ui:Kehys}} (muotoilukehys) tai {{ui:Pinnoite}} (pinnanlaatumerkki).
2. Napsauta näkymän pistettä, johon se kiinnittyy. Se tarttuu lähimpään piirrettyyn viivaan 2,5 mm:n säteellä.
3. Merkki ilmestyy johtoviivan kanssa valittuna, ja oikea paneeli näyttää sen asetukset.

Vedä merkki siirtääksesi sitä; sen johto pysyy pisteessä. Kun merkki on valittuna, nuolinäppäimet siirtävät sitä 1 mm kerrallaan. {{key:Delete}} tai {{key:Backspace}} (tai {{ui:Poista}} paneelissa) poistaa sen; {{ui:Valmis}} tai {{key:Esc}} poistaa valinnan. Jokainen muutos on kumoamislistalla.

### Datum

**Kirjain**: A–Z ilman I:tä, O:ta ja Q:ta (ne luetaan 1:ksi, 0:ksi ja O:ksi). Jokainen uusi datum saa seuraavan vapaan kirjaimen.

### Muotoilukehys

| Asetus | Vaihtoehdot |
|---|---|
| **Toleranssi** | Suoruus, Tasomaisuus, Pyöreys, Sylinterimäisyys, Viivan profiili, Pinnan profiili, Kohtisuoruus, Kulmamaisuus, Yhdensuuntaisuus, Sijainti, Samankeskisyys ja Symmetria (molemmat poistettu Y14.5-2018:sta ja merkitty niin), Ympyrän heitto, Kokonaisheitto |
| **Vyöhyke (mm)** | Toleranssiarvo, oletus 0,1 |
| **Halkaisijavyöhyke (⌀)** | Ominaisuuksille, joilla on sylinterimäinen vyöhyke; oletuksena päällä sijainnille |
| **Materiaali** | RFS (ei mitään), MMC (Ⓜ), LMC (Ⓛ), missä ominaisuus sallii sen |
| **Ensisijainen / toissijainen / kolmas datum** | Enintään kolme datumkirjainta, kukin **… muokkain** (MMB, LMB) missä sallittu |

PartCraft tarkistaa kehyksen ASME Y14.5 -sääntöjen mukaan ja kertoo paneelin yläosassa, mikä on väärin, esimerkiksi ”Tasomaisuus on muotoilutoleranssi: se ei ota datumviitteitä.” tai ”Sijainti tarvitsee vähintään yhden datumviitteen.” Rivi **Lukee** selittää kehyksen sanallisesti.

### Pinnanlaatu

| Asetus | Vaihtoehdot | Oletus |
|---|---|---|
| **Ra (µm)** | Keskimääräinen karkeus | 1,6 |
| **Prosessi** | mikä tahansa prosessi, työstetty, ei materiaalin poistoa | työstetty |
| **Merkintä** | Enintään 40 merkkiä, kuten suunta tai prosessi | |

Kun mitään ei ole valittuna, paneeli listaa **Merkinnät arkilla**, kukin **Valitse**-painikkeen kanssa.

## Vie PDF

Valitse {{ui:PDF}} työkalurivistä, {{ui:Vie PDF}} paneelista tai {{ui:Vie}}, ja sitten {{ui:Piirustus (PDF): näkymät, leikkaus, yksityiskohta, GD&T}} mallista. PDF ladataan nimellä `<osan nimi> - drawing.pdf`, ja tilarivi listaa, mitä siinä on.

Tulosta ”Todellinen koko” paperille, jonka koko vastaa arkkia, jotta mittakaava pysyy oikeana.

## Rajoitukset

| Ei vielä toteutettu | Tee näin tänään |
|---|---|
| Muut mitat kuin kolme ulkomittaa | Lisää ne PDF-tiedostoon merkintäohjelmalla, tai vie luonnos tai pinta DXF-muodossa ja mitoita se 2D-CAD-ohjelmassa |
| Enemmän kuin yksi leikkaus tai yksityiskohta; irrotetut, apu- ja projisoidut näkymät | Ei saatavilla |
| Ensimmäisen kulman projektio, liikkuvat näkymät, pystysuuntaiset arkit | Kolmas kulma, automaattinen asettelu, vaakasuuntainen |
| Vapaat tekstimerkinnät ja taulukot arkilla (muut kuin otsikko- ja revisiolohkot) | Käytä pinnanlaatumerkintää tai lisää teksti PDF-tiedostoon |
| Kokoonpanojen piirustukset | Ei saatavilla |

Länsieurooppalaisen merkistön ulkopuoliset merkit tulostuvat muodossa ”?” (PDF käyttää lukijan sisäänrakennettua Helvetica-fonttia). GD&T-merkit piirretään viivoina, joten ne tulostuvat missä tahansa lukijassa.

## Anna arkin tehdä se

- **Arkki › Automaattinen** valitsee paperin puolestasi: suurin vakiomittakaava, joka on enintään 1:1, pienimmällä A-kokoisella arkilla, joka mahtuu näkymiin kyseisessä mittakaavassa (listasta näkyy, mikä se oli).
- **Mitoita reiät** mitoittaa reiät näkymällä, josta näkee useimmat päästä: keskimerkki jokaiseen, yksi merkintä kokoa kohden (”2× Ø6 LÄPI” johdolla) ja niiden sijainnit mitattuina näkymän vasemmasta alakulmasta. Ulkoleveys, -korkeus ja -syvyys ovat aina mukana.
