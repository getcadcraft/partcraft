---
title: Tarkista jännitys ja taipuma (Simulointi)
summary: Valitse materiaali, kiinnitä pintoja, lisää voimia, paineita tai osan oma paino, ratkaise ja lue von Mises -jännitys, siirtymä, varmuuskerroin, reaktiot ja ominaistaajuudet mallilla sekä se, mitä menetelmä voi ja ei voi kertoa.
keywords: simulointi, FEA, live-analyysi, päivitys muokatessa, riko se, mikä murtuu ensin, kuormituskerroin, epälineaarinen, plastisuus, myötääminen, plastinen venymä, bilineaarinen, kosketus, kosketusipari, sakkokerroin, sidottu, kitkaton kosketus, CalculiX, .inp, .frd, elementtimenetelmä, jännitys, venymä, von Mises, siirtymä, taipuma, varmuuskerroin, myötö, reaktio, kuorma, voima, paine, painovoima, oma paino, kiinnitetty, kitkaton, tuenta, rajoite, materiaali, teräs, alumiini, titaani, ABS, PLA, nailon, ominaistaajuus, moodi, värähtely, verkko, elementin koko, tetraedri, tetraedrit, tetraverkko, vokseli, verkon laatu, pääjännitys, vastaava venymä, virhearvio, kaarevat pinnat, reiät, pyöristykset, adaptiivinen, automaattinen tarkennus, h-adaptiivinen, konvergenssi, verkon konvergenssi, tarkka pinta, pallo, kartio, toroidi, spline, vapaamuotoinen
from: 6f2fdec1
---

Simulointityötila vastaa kysymykseen: ”Taipuuko tai murtuuko se tällä kuormalla?” mallintamallesi osalle. Se on **lineaarinen staattinen** laskelma (pienet taipumat, materiaali pysyy elastisena) tai **ominaistaajuuslaskelma**. Se ratkaistaan verkolla toisen asteen tetraedreistä, jotka seuraavat osan pintoja (tai, jos valitset, pienistä yhtä suurista kuutioista). Se toimii nimettyjen pintojen kanssa, jotka verkkoydin antaa osalle (katso [Verkkoydin](topic:solid-kernels)).

Valitse **Simulointi** työkalurivin vasemmalla puolella olevasta **Työtila**-ruudusta. Osaasi ei muuteta. Laskelma tallennetaan osatiedoston sisään, ja jokainen siihen tehty muutos voidaan kumota.

## Aseta laskelma

1. Paina oikeassa paneelissa **Uusi laskelma**.
2. Valitse **Materiaali**. Paneeli näyttää sen jäykkyyden (E), Poissonin luvun, tiheyden ja myötölujuuden. Arvot ovat tyypillisiä käsikirjalukuja. Toimittajasi sertifioidut arvot voivat poiketa niistä.
3. Valitse **Verkko**:
   - **Tetraedrit (tarkka)**, oletus: 10-solmuiset tetraedrit, joiden ulkopinnat ovat osan pinnoilla, ja reikien, pyöristysten ja muiden pyöreiden pintojen reunat kaarevat. Tasaisten, sylinteri-, kartio-, pallo- ja toroidipintojen, pyörähdettyjen ja pursotettujen pintojen sekä vapaamuotoisten (B-spline) pintojen solmut ovat tarkalla pinnalla. Mikä tahansa muu pintatyyppi seuraa näyttöverkkoaan, ja tulostaulukko kertoo, kuinka monta pintaa niin teki. Verkko tiivistyy itsestään kaarevien pintojen, ohuiden seinämien ja terävien reunojen lähellä.
   - **Vokselikuutiot (nopea)**: osa täytettynä yhtä suurilla kuutioilla. Nopea, mutta kaarevat pinnat muuttuvat portaiksi. Ennen tetraedriverkkoa tallennetut laskelmat säilyttävät tämän.
4. Jätä **Elementin koko** tyhjäksi automaattista kokoa varten (noin 12 000 tetraedria tai 20 000 kuutiota), tai kirjoita koko millimetreinä. Paneeli näyttää, kuinka monta elementtiä tästä tulee ennen tarkempien kohtien lisäämistä. Tetraedreillä **Pienemmät elementit kaarevilla pinnoilla** (oletuksena päällä) tarkentaa reiät ja pyöristykset, joissa jännitys yleensä huipentuu.

### Tarkenna automaattisesti

Tetraedreillä staattinen tai nurjahduslaskelma (ilman lämpökuormaa), ominaistaajuuslaskelma ja vakaa lämpölaskelma tarjoavat **Tarkenna automaattisesti (adaptiivinen)**. Ruksaa se ja aseta:

- **Tavoitevirhe (%)**: ratkaisu pysähtyy, kun arvioitu virhe on sen alapuolella (aluksi 1 %).
- **Enimmäiskierrokset**: suurin määrä ratkaisuja (aluksi 5, enintään 10).

Jokainen kierros ratkaisee, etsii elementit, joilla on suurin arvioitu virhe, jakaa ne (ja niin vähän naapureita kuin tarvitaan verkon eheyden säilyttämiseksi) ja ratkaisee uudelleen. Uudet solmut kaarevilla pinnoilla siirtyvät tarkalle pinnalle. Tulokset näyttävät taulukon ja kaavion, jossa jokaiselta kierrokselta on elementit, tuntemattomat, arvioitu virhe sekä huippujännitys (tai lämpötila) ja siirtymä (tai lämpövirta). Lisäksi on rivi, joka kertoo, miksi laskenta pysähtyi: tavoite täyttyi, kierrokset loppuivat, seuraava verkko olisi liian suuri tai kierros epäonnistui (silloin näet viimeisen onnistuneen kierroksen).

Lue arvio arviona. Se (Zienkiewicz–Zhu; tarkkoihin ratkaisuihin verrattuna se lukee 0.6–0.95 todellisesta virheestä) mittaa virheen **koko osan** yli. Huippujännitys reiässä tai pyöristyksessä on siis yleensä vielä hieman epätarkka, vaikka arvio näyttää pieneltä. Jännityskeskittymälle aseta tavoite alle 1 %:iin ja seuraa huipun asettumista kierrokselta toiselle. Terävässä sisänurkassa tai kiinnitetyn pinnan reunalla todellinen jännitys on ääretön, joten arvio ei koskaan saavuta sitä: kierrokset loppuvat sen sijaan.

**Ominaistaajuudet ja nurjahdus.** Ominaistaajuuslaskelmassa arvio kattaa kaikki pyytämäsi muodot, jokainen samalla painolla. Taulukko ja kaavio seuraavat kahta ensimmäistä taajuutta. Osalla, jolla on vain tasaisia pintoja, taajuus voi vain laskea kierrokselta toiselle, koska jokainen verkko säilyttää edellisen. Kaarevat pinnat lähestyvät myös todellista muotoaan, mikä voi siirtää taajuutta hieman kumpaan suuntaan tahansa. Nurjahduksessa arvio kattaa esijännityksen ja nurjahdusmuodot, ja taulukko seuraa kuormituskertoimia. Tarkistettu 100 × 10 × 10 mm:n teräspalkilla: ensimmäinen taajuus asettuu arvosta 812.4 arvoon 811.9 Hz neljässä kierroksessa, 0.4 % Euler–Bernoullin alapuolella (joka jättää leikkauksen huomiotta). Pylvään kuormituskerroin on 0.5 %:n sisällä Eulerista.

## Kiinnitä ja kuormita

Jokainen laskelma tarvitsee vähintään yhden tuennan ja jännitykseen yhden kuorman.

1. Paina työkalurivin {{ui:Kiinteä}}-painiketta. Uusi tuenta on valittuna ja odottaa pintoja. Napsauta pintoja, jotka pidetään paikallaan (napsauta pintaa uudelleen poistaaksesi sen). Paina **Valinta valmis** tai {{key:Esc}}, kun olet valmis. Siniset kartiot merkitsevät pidetyt pinnat.
2. Paina {{ui:Voima}} ja napsauta pintoja, joihin voima kohdistuu. Paneelissa kirjoita **Kokonaisvoima** newtoneina ja valitse sen **Suunta**: pintaan päin tai akselia pitkin. Voima jakautuu valituille pinnoille pinta-alan mukaan. Oranssit nuolet näyttävät sen.
3. Paina {{ui:Paine}} ja anna paine MPa:na (N/mm²), joka työntää valittuihin pintoihin. Negatiivinen paine vetää.

Lisää tyyppejä on paneelin **Lisää**-luettelossa: **Kitkaton pinta** (pinta saa liukua itsensä yli mutta ei irtaantua siitä, käytä symmetriatasoille ja sileille tuennoille) ja **Painovoima** (osan oma paino, 9.81 m/s², valitsemassasi suunnassa).

Tuenta, joka jättää osan vapaaksi liukua tai pyöriä, hylätään, ja kerrotaan, mikä liike jää vapaaksi.

## Ratkaise ja lue tulokset

Paina {{ui:Ratkaise}}. Työ tehdään taustalla, ja **Pysäytä** peruuttaa sen. Sen jälkeen:

- Osa värjätään **von Mises -jännityksen** mukaan. Valitse **Siirtymä** tai **Varmuuskerroin** kohdasta **Näytä**. Selite antaa asteikon.
- Osoita osaa lukeaksesi osoittimen alla olevat arvot.
- Ruksaa **Muodonmuutos** nähdäksesi osan taipuneena. Liikettä suurennetaan **Mittakaava**-asetuksella, ja todellinen liike on taulukossa.
- Taulukko luettelee suurimman jännityksen ja sen sijainnin, suurimman siirtymän, pienimmän **varmuuskertoimen** (myötölujuus ÷ von Mises -jännitys; alle 1:n materiaali myötää), kohdistetun kuorman ja **reaktiot** tuissa (ne tasapainottavat kuorman) sekä käytetyn verkon.

Ominaistaajuuksille valitse **Tyyppi** ominaistaajuus, aseta **Muodot**-määrä ja ratkaise. Jokainen muoto näyttää taajuutensa ja muotonsa. Muodot skaalataan arvoon 1 suurimman liikkeensä mukaan.

Jos muutat osaa, tulokset merkitään vanhentuneiksi: ratkaise uudelleen.

## Myötäminen ja kosketus (epälineaariset laskelmat)

Kaksi muuta laskelmatyyppiä menevät pidemmälle kuin ”materiaali pysyy elastisena”:

- **Epälineaarinen (materiaali myötää)** seuraa materiaalin suoraa viivaa myötörajaan asti ja sen jälkeen loivempaa kaltevuutta (**Kaltevuus myötörajan jälkeen**, 1 % E:stä, jos jätetään tyhjäksi). Kuorma kasvaa **Kuormitusaskeleissa**. Askel, joka ei asetu, puolittuu itsekseen. Tulokset lisäävät kuvaajiin **Plastisen venymän** ja kertovat, kuinka suuri osa kuormasta kantautui. Jos askel ei silti asetu, laskelma pysähtyy viimeiseen onnistuneeseen askeleeseen, ja ⚠ Ongelmat-paneeli kertoo, missä: osa on menettänyt lujuutensa siellä (romahdus), tai askeleet ovat liian suuria.
- **Kosketus osien välillä** antaa erillisten osien työntää toisiaan. Lisää **Kosketusipari**, valitse puolen A pinnat (pinnat, jotka painavat) painikkeella {{ui:Valitse pinnat}}, ja sitten puolen B pinnat painikkeella {{ui:Valitse puolen B pinnat}}. **Kitkattomat** osat työntävät, liukuvat ja irtoavat; **sidotut** osat pysyvät kiinni. Jokainen osa verkotetaan erikseen, joten pieni rako niiden välillä on hyväksyttävää. Kosketus on sakkomenetelmä: osat painuvat hieman toistensa sisään (**sakkokerroin** × E ÷ elementin koko määrää kosketuksen jäykkyyden). Taulukko näyttää syvimmän painuman sisään, ja Ongelmat-paneeli varoittaa, kun se on yli 1 % elementin koosta: nosta kerrointa tai käytä pienempiä elementtejä.

Molemmat käyttävät tetraedriverkkoa. Kitkaa, suurta liukumista ja suuria kiertoja ei ratkaista täällä.

## Aja CalculiXilla

**Vienti › CalculiX-syöte (.inp)** (tai {{ui:Tallenna CalculiX-syöte (.inp)}} paneelissa) tallentaa laskelman CalculiX:n syötetiedostona: sama verkko, materiaali, tuennat, kuormat ja kosketusparit, yksiköissä mm, N ja MPa. CalculiX on erillinen ohjelma, jonka asennat ja ajat itse. Aja se, ja sen jälkeen **Vienti › CalculiX-tulokset (.frd)** lukee sen tulostiedoston takaisin samaan verkkoon ja näyttää siirtymän (ja von Mises -jännityksen, jos tiedostossa on jännityksiä). Jos muutit osaa tai elementin kokoa välissä, verkko ei ole sama, ja PartCraft kertoo siitä: tallenna uusi syöte.

## Kuinka pitkälle luottaa siihen

PartCraft tarkistaa ratkaisijansa käsin laskettuihin kaavoihin: ulokepalkin kärjen taipuma PL³/3EI 1 %:n sisällä, sauvan venymä PL/AE tarkasti, ulokkeen ensimmäinen taajuus 3 %:n sisällä ja jännitys levyn reiän ympärillä. Pidä silti mielessä nämä rajat:

- **Verkko.** Tetraedreillä PartCraft tarkistaa ulokepalkin taipuman ja taivutusjännityksen (0.3 %:n sisällä), levyn reiän jännityksen (Kt, noin 1 %:n sisällä), paineen alla olevan paksun putken (Lamé, 0.3 %:n sisällä) ja ensimmäisen taajuuden (0.4 %:n sisällä). Taulukko näyttää **verkon laadun** (elementtipintojen pienin ja suurin kulma; alle noin 10°:n elementti on huono) ja **arvioidun jännitysvirheen**. Jos se on yli muutaman prosentin, ratkaise uudelleen pienemmällä elementin koolla tai anna **Tarkenna automaattisesti** tehdä se. Reiällä varustetulla levyllä ja kahdella reunaviillolla varustetulla sauvalla automaattinen tarkennus pääsi 1 %:n sisään oppikirjan Kt:stä noin kuudesosalla tuntemattomista, jotka koko verkon tiivistäminen olisi vaatinut. Vokselikuutioilla reikä tai pyöristys on porrasmainen kuution koon mukaan, joten jännitys siellä on karkea.
- **Terävillä sisänurkilla ja kiinnitettyjen pintojen reunoilla ei ole todellista huippujännitystä.** Arvo siellä kasvaa, kun elementit pienenevät. Lue jännitykset hieman poispäin tällaisista kohdista tai pyöristä nurkka mallissa.
- **Luettavat tulokset.** Von Mises -jännityksen, siirtymän ja varmuuskertoimen lisäksi tetraedrilaskelma näyttää **suurimman ja pienimmän pääjännityksen** (veto ja puristus) ja **vastaavan venymän**. Ruksaa **Näytä verkko** nähdäksesi elementit.
- **Staattiset laskelmat ovat lineaarisia ja elastisia.** Myötämiseen ja kosketukseen käytä yllä olevia epälineaarisia laskelmatyyppejä. Suuria taipumia ja väsymistä ei ratkaista. Lämpö, lämpöjännitys ja lineaarinen nurjahdus ovat omia laskelmatyyppejään: katso [Lämpö, lämpöjännitys ja nurjahdus](topic:thermal-and-buckling).
- **Jokainen materiaali on samanlainen kaikkiin suuntiin.** 3D-tulostetut muovit ovat heikompia kerrostensa yli, usein kolmanneksen tai enemmän.
- Tämä on laboratoriojulkaisu: tarkista tärkeät osat toisella tavalla.

## Päivitä muokatessa (Live)

Ruksaa **Päivitä muokatessa** Ratkaise-lohkossa, niin Simuloinnin vastaukset seuraavat muokkauksiasi. Muuta mittaa, kuormaa, materiaalia tai ympäristöä, ja **pikavastaus** ilmestyy heti, laskettuna neljä kertaa laskelman omaa elementtikokoa suuremmilla elementeillä. Kun lopetat hetkeksi (noin sekunniksi), laskelman oma **tarkennettu vastaus** korvaa sen. Tulokset kertovat, kumpaa katsot (”Pikavastaus” tai ”Tarkennettu vastaus”), ja elementin koon. Pikavastaus sopii suunnan ja koon arviointiin: teräsulokkeessa se oli 1 %:n sisällä taipumasta ja noin 4 %:n sisällä jännityksestä tarkennettuun verrattuna. Luota tarkennettuun vastaukseen lukuihin, joita aiot käyttää. Staattiset, ominaistaajuus-, lämpö- ja nurjahduslaskelmat toimivat näin. Live on näkymäasetus, eikä sitä tallenneta osaan. Ratkaisu, jonka itse painat, pysyy ennallaan seuraavaan muokkaukseen asti.

## Selvitä, mikä murtuu ensin (Murtokoe)

Staattiselle tai nurjahduslaskelmalle paina **Murtokoe**-lohkosta **Mikä murtuu ensin?**. PartCraft skaalaa laskelman kuormia (voimat, paineet ja paino yhdessä), kunnes osa antaa periksi, ja luettelee vaikeimmin ensin: **kuormituskertoimen ensimmäiseen myötöön** (kerroin tämän päivän kuormille, jossa suurin von Mises -jännitys saavuttaa materiaalin myötörajan, punaisella merkillä siitä, missä se tapahtuu) ja **kuormituskertoimen nurjahdukseen** samoilla tuennoilla ja kuormilla. Kerroin 4.3 tarkoittaa, että osa kestää 4.3-kertaisen kuormansa ennen myötämistä. **Alle 1:n kerroin tarkoittaa, että osa antaa jo periksi kuormitettuna**, ja se näkyy Ongelmat-luettelossa virheenä. Heikoin havainto näkyy huomautuksena silloinkin, kun kaikki pitää. Kertoimet tulevat lineaarisesta laskelmasta tetraedreillä sinun elementtikoollasi, joten ne ovat yhtä hyviä kuin se laskelma on. Jännitys kiinnitetyllä pinnalla tai terävässä nurkassa ei ole todellinen huippu (katso yllä), ja myötökerroin on siellä varovaisella puolella. Avustajasi voi suorittaa saman tarkistuksen `break_run`-työkalulla.

## Liittyvää

- [Lämpö, lämpöjännitys ja nurjahdus](topic:thermal-and-buckling)
- [Kasvata muoto kuormista (Generatiivinen)](topic:generative-design)
- [Mittaa etäisyydet, kulmat ja massa](topic:measure)
- [Mitä ei ole vielä toteutettu](topic:not-built-yet)
