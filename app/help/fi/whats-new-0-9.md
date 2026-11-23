---
title: Uutta versiossa 0.9 (aiemmin)
summary: PartCraft 0.9 lisää pyöristykset pintojen välille ja paksunnuksen kiintokappaleiksi, tuhansien osien kokoonpanot, Asiakirjat-holvin revisioineen, Solid FEM -lisäosan jännitystarkistukseen, kymmenen kaarimenetelmää, Ison-Britannian teräsmitat, Tulostusvaiheen ja hartsitulostuksen lisäosat.
keywords: uutta 0.9, aiempi julkaisu, uutta, muutosloki, julkaisutiedot, muutokset, 0.9, pyöristys pintojen välillä, rullaava pallo, pyöristä useita särmiä, paksunna, kiintokappale pinnoista, STEP-kuori, IGES-kiintokappale, skannauksen pyöristykset, suuri kokoonpano, kevyt näyttö, 20000 osaa, asiakirjat, holvi, uloskirjaus, revisio, julkaisu, missä käytetään, Rhino-yhteys, Grasshopper, 3dm, kursorit, tehdaslattia, työjono, Solid FEM, äärellinen elementti, von Mises, luonnontaajuus, kaarimenetelmät, 3-pisteen kaari, Ison-Britannian teräsprofiilit, sininen kirja, tulostusvaihe, hartsi, goo, ctb, alusta, levitä tasoon, uutta, muutokset, 0.8, 0.8.1, versio, uudet ominaisuudet, live-analyysi, päivitä muokatessa, murra se, mikä rikkoutuu ensin, kuormakerroin, epälineaarinen, myötö, muovinen venymä, kosketus, CalculiX, liiketutkimus, väli, pinnat, NURBS, viimeistely, sileä, zebra, Engineer, generaattori, generoitu kappale, luonnos valokuvasta, skaalaus tulostusta varten, jako tulostusta varten, kutistuma, sijoitetut levyt, G-koodi, piirustus, mitoita reiät, avustaja, mcp, kielet, työkalurivin rivit
from: 1dafd7c8
---

Tämä on se, mikä muuttui PartCraft 0.9:ssä verrattuna versioon 0.8.1. Vapaamuotoiset pinnat sulkeutuvat nyt kiintokappaleiksi, tuhansien osien kokoonpanot pysyvät käytettävinä, Asiakirjat-holvi säilyttää revisiot, ja Solid FEM -lisäosa tarkistaa osan jännityksen. Jokainen kohta kertoo, mistä se löytyy.

## Uutta versiossa 0.9.1

- **Tarkka STEP-vienti.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ja {{ui:STEP AP214 (exact solid)}} toimivat nyt. Reiät, korotukset, pyöristykset, kartiot, pallot ja toruksit kirjoitetaan todellisille pinnoilleen, ja reunoina ovat todelliset ympyrät, joten toinen CAD- tai CAM-ohjelma voi tunnistaa reiän reiäksi. Splinisivut, mallinnetut kierteet ja tuodut verkot pysyvät samassa kiintokappaleessa tasofasetteina. Katso [Vienti tulostukseen, STEP ja DXF](topic:export-files#for-other-cad-programs-step).
- **STEP sisään, tarkka STEP ulos.** Avattu STEP-tiedosto säilyttää omat tasopintansa, sylinterinsä, kartionsa, pallonsa ja toruksensa, joten {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} kirjoittaa ne takaisin todellisina pintoina fasettien sijaan: toimittajan palkki pulttireikineen lähtee ulos samoilla pinnoilla kuin tuli sisään, plus mitä siihen leikkasit. Tiedoston splini-, kierretyt ja kiertämällä tehdyt pinnat pysyvät fasetteina, samoin STL-, OBJ- ja 3MF-kappaleet. Avaa STEP-tiedosto uudelleen aiemmin tallennettua osaa varten. Katso [Avaa STEP-tiedosto ja rakenna sen päälle](topic:import-step).
- **Todelliset ympyrät pintojen DXF-tiedostossa.** {{ui:Export}} › {{ui:DXF of the sketch or flat face}}, kun tasainen pinta on valittu, kirjoittaa nyt pyöreät reiät ympyröinä, joissa on reiän oma keskipiste ja säde, laser-, plasma- tai vesisuihkupöytää varten. Muut pyöreät reunat ovat yhä fasetteja.
- **Tarkka STEP työpajalle.** {{ui:Manufacture}}-työtilassa {{ui:Exact STEP (work coordinates)}} kirjoittaa osan, jonka origo on asetuksen työnollapiste ja Z työkaluakselin suuntainen, eli G-koodin käyttämät koordinaatit. Katso [Tee työstöradat ja G-koodi](topic:manufacture#exact-step-for-the-shop).

## Uutta

### Pinnat ja kiintokappaleet

- **Pyöristys pintojen välillä.** Valitse {{ui:Surfaces}} {{ui:Workspace}}-ruudusta ja sitten {{ui:Fillet between faces}}. Valitse yhden kiintokappaleen kaksi pintaa, kirjoita säde (ja {{ui:Radius at the end (mm, 0 = the same)}}, jos säde muuttuu särmää pitkin). Tulosrivi kertoo, kuinka kaukana pyöristys on ihanteellisesta rullaavasta pallosta, ja säde, joka ei sovi, hylätään nimetyn pinnan kanssa. {{ui:Fillet several edges}} pyöristää monta särmää kerralla; ruksaa {{ui:Corners (sphere patch where three meet)}} saadaksesi pallomaisen kulman kohtaan, jossa kolme pyöristettyä särmää tasopinnoilta kohtaavat. Katso [Vapaamuotoiset pinnat (NURBS)](topic:nurbs-surfaces).
- **Paksunna kiintokappaleeksi.** {{ui:Thicken into a solid}} samassa työtilassa antaa pinnalle paksuuden; {{ui:Other side}} kasvattaa sitä toiseen suuntaan. Taitos tai itseään leikkaava kohta hylätään, ja pinta sekä paikka nimetään.
- **Kiintokappaleet pinnoista.** Rajatut pinnat voidaan yhdistää yhdisteellä, vähennyksellä ja leikkauksella ja kirjoittaa osaan yhtenä kumoamisvaiheena. STEP kirjoittaa kiintokappaleen yhtenä suljettuna kuorena ja IGES yhtenä kiintokappaleena; molemmat luetaan takaisin kiintokappaleina. Jos pinnat eivät täsmää reunasta reunaan, tiedostoon tulee erilliset pinnat ja tilarivi kertoo sen. Kiintokappaleita voi tehdä myös solmueditorissa; katso [Solmueditori](topic:nodes).
- **Reunapyöristykset ja muuttuvat pyöristykset skannauksissa.** Kun sovitat pintoja skannaukseen, reunapyöristykset (toruksit) ja muuttuvan säteen pyöristykset melko suoraa reunaa pitkin etsitään myös ja luetellaan säteineen. Sitä on testattu vain keinotekoisilla skannauksilla.

### Kokoonpanot, asiakirjat ja yhteydet

- **Suuret kokoonpanot.** Kopiot osista jakavat yhden verkon, ja {{ui:Views}} › {{ui:Lightweight display}} piirtää laatikoita, jotta näkymä pysyy liikkeessä (se kytkeytyy itsestään päälle hyvin suurille kokoonpanoille; valinta ja liitokset käyttävät yhä todellisia osia). Osapuu näyttää ensimmäiset rivinsä ja painikkeen {{ui:Show 700 more}} loput. Kokoonpanotiedostot voivat sisältää jopa 50 000 esiintymää ja 100 000 liitosta. Katso [Rakenna kokoonpano](topic:build-assembly).
- **Asiakirjat.** {{ui:Documents…}} **Tiedosto**-ryhmässä avaa valintaikkunan projektikansion päälle: uloskirjaus ja sisäänkirjaus, revisiokirjaimet, tilat (työn alla, tarkastettavana, julkaistuna, vanhentuneena), historia, missä käytetään ja osaluettelo. Katso [Asiakirjat ja revisiot (holvi)](topic:documents-walkthrough).
- **Elävä Rhino-yhteys.** Yksi skripti, `cadcraft_link.py`, seuraa Rhino- tai Grasshopper-asiakirjaa ja työntää PartCraftiin vain muuttuneen: tuotu ominaisuus rakentuu uudelleen uudella muodolla. Yhteys on yksisuuntainen ja vaatii Studion. Katso [Elävä .3dm-yhteys](topic:live-3dm-link).
- **Näe toistensa kohdistimet.** Yhteisessä istunnossa jokaisen henkilön kohdistin näkyy nimensä ja hänen valitsemansa ominaisuuden kanssa. Katso [Työskentele reaaliajassa muiden kanssa](topic:work-live).
- **Tehdaslattia.** Kytke Tehdaslattia-lisäosa päälle kohdasta {{ui:Settings}} › {{ui:Add-ons}}. Kun olet lähettänyt ohjelman {{ui:Manufacture}}-työtilassa, sen välilehti voi {{ui:Add to the factory job queue}} tai {{ui:Save as a job file}}. Se ei koskaan lähetä tai käynnistä konetta.

### Analyysi ja osat

- **Solid FEM -lisäosa.** Kytke {{ui:Solid FEM}} päälle kohdasta {{ui:Settings}} › {{ui:Add-ons}} (se on pois päältä, kunnes teet niin), ja oikeaan paneeliin ilmestyy {{ui:Solid FEM}}-välilehti. {{ui:Mesh the part}}, valitse kiinnitetyt pinnat ja kuormat 3D-näkymässä, {{ui:Solve}}, ja piirrä siirtymä, von Mises -jännitys tai muototaajuus painikkeella {{ui:Show on the model}}. Katso [Solid FEM: jännitystarkistus](topic:solid-fem-check).
- **Kaari luonnoksissa, kymmenellä tavalla.** Nuoli {{ui:Arc}}-painikkeen vieressä luonnostyökalurivillä listaa 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length ja Continue. Katso [Piirrä kaari kymmenellä menetelmällä](topic:sketch-arc-methods).
- **Ison-Britannian teräsmitat.** Hitsatuissa rakenteissa voidaan käyttää 976 Ison-Britannian profiilia (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); kirjoita koko kuten `305x165x40 UB`. Katso [Rakennesauvat](topic:structural-members).

### Tulostus

- **Tulostusvaihe.** Työkalurivin {{ui:Print stage}}-painike (lisäosa 3D Print, oletuksena päällä) asettaa osasi kappaleet katkoviivaiselle alustalle: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, ja sitten {{ui:Send to 3D printer}} USB:n, Kliponin (Moonraker), OctoPrintin tai PrusaLinkin kautta. Mitään ei lähetetä ennen vahvistusta, eikä osaasi koskaan muuteta. STL- tai 3MF-tiedostoa varten katso [Valmistele osa 3D-tulostukseen](topic:print-3d).
- **Hartsitulostus.** Lisäosat kohdassa {{ui:Settings}} › {{ui:Add-ons}}, kaikki pois päältä, kunnes kytket ne päälle: hartsi-viipalointi, valotustesti ja tiedostomuodot Elegoo GOO, SL1, Chitubox CBDDLP/CTB ja Anycubic. Viipalointi kulkee työsäikeessä, joten sivu pysyy vastaavana.

## Kaikissa sovelluksissa

- Jokainen kohdistusvihje on Bootstrap-työkaluvihje.
- Aloitusvinkillä on sulkupainike; se pysyy suljettuna.
- Paneelin välilehtirivi, joka ei mahdu, vierittyy sivusuunnassa eikä leikkaannu.
- Selaimen välilehti näyttää avoimen asiakirjan nimen ennen PartCraft | CadCraft -tekstiä.
- {{ui:Settings}} näyttää työtilan {{ui:Layout}} pudotusvalikkona vaihtoehdoista, ja kielikenttä luettelee kaikki kielet, jotka version kanssa tulevat.
- Paino ja lämpötila ovat yksikkölajeja Yksiköt-asetuksissa.

## Korjattu

- Luonnoksen Kaari-valikko luettelee nyt jokaisen menetelmän.
- Lisäosatyökalurivi ja selaimen välilehden otsikko korjattiin 2026-11-09.

## Rehelliset rajoitukset

- Tarkka STEP luettiin takaisin OpenCascadessa (kelvolliset kiintokappaleet, tilavuudet yhtä suuret kuin käsin lasketut). Sitä ei ole vielä avattu jokaisessa CAD- tai CAM-ohjelmassa, eikä kokoonpanoa kirjoiteta tarkkana STEP-tiedostona.
- Mitään ei ole tulostettu oikealla tulostimella. Viipalointi, G-koodi ja hartsitiedostot luettiin takaisin omilla ohjelmillamme tai korvaavalla tulostimella; mitään hartsimuodoista ei ladattu tulostimelle, ja tulostinkoot ja valotukset ovat lähtöarvoja.
- Solid FEM on lineaarinen, isotrooppinen ja elastinen, yksi materiaali per osa, ilman kosketusta, myötöä tai nurjahdusta. Jännitys kiinnitettyjen pintojen ja terävien kulmien kohdalla riippuu verkosta. Se on tarkistusapu, jota insinööri ei ole tarkastanut.
- Suurten kokoonpanojen ajoitukset on mitattu palvelimella ilman GPU:ta; täysitarkkuuskehys 20 000 osalla vie sielläkin sekunteja.
- Pyöristykset toimivat pinnoparien välillä; yleistä kärkisulautumaa ei ole, eikä pyöristystä pinnoille, jotka eivät kohtaa.
- Live-Rhino-yhteyttä ei ole koskaan ajettu varsinaisessa Rhinossa tai Grasshopperissa. Asiakirjoja on kokeiltu kahdella ohjelmalla yhdessä kansiossa, ei kahdella ihmisellä verkkolevyllä.
- Pintojen sovitusta oikeaan skannaukseen ei ole vielä tarkistettu käsin. Muut kielet kuin englanti ovat koneellisia luonnoksia.
- Windows-asennusohjelmia ei ole koodin allekirjoittamia, eikä macOS-levykuvaa ole notarisoitu. Katso [Vianmääritys](topic:troubleshooting).

Aiemmat muutokset ovat kohdassa [Uutta versiossa 0.7](topic:whats-new-0-7).

## Aiemmin: 0.8 ja 0.8.1

Tämä on se, mikä muuttui PartCraft 0.8:ssa ja 0.8.1:ssä verrattuna versioon 0.7. Simulointi vastaa muokatessasi ja kertoo, mikä rikkoutuu ensin, kokoonpanot saavat liiketutkimuksia, ja uudet työtilat tekevät vapaamuotoisista pinnoista ja fysiikasta mitoitetuista osista. 0.8.1 on pieni korjausjulkaisu.

### Uutta

**Simulointi**

- **Päivitä muokatessani.** Ruksaa {{ui:Update while I edit}} Ratkaise-lohkossa, ja vastaukset seuraavat muokkauksiasi. Muuta mittaa, kuormaa tai materiaalia, ja nopea vastaus, tehty elementeillä, jotka ovat nelinkertaisia, ilmestyy heti; kun pysähdyt noin sekunniksi, tutkimuksen oma tarkennettu vastaus korvaa sen. Tulokset kertovat, kumpaa katselet. Teräsvarren kohdalla nopea vastaus oli taipumassa 1 %:n sisällä ja jännityksessä noin 4 %:n sisällä tarkennetusta. Katso [Tarkista jännitys ja taipuma](topic:simulation#update-while-you-edit-live).
- **Mikä rikkoutuu ensin.** Staattiselle tai nurjahdustutkimukselle **Murra se** -osion {{ui:What breaks first?}} skaalaa kuormat, kunnes osa antaa periksi. Se luettelo, pahin ensin, kuormakertoimen myötörajaan (punaisella merkillä, missä jännitys huipentuu) ja kuormakertoimen nurjahdukseen. Kerroin alle 1 tarkoittaa, että osa antaa jo periksi kuormitettuna, ja Ongelmat-paneeli näyttää virheen. Kertoimet tulevat lineaarisesta tutkimuksesta, joten ne ovat vain niin hyviä kuin se. Katso [Tarkista jännitys ja taipuma](topic:simulation#find-out-what-breaks-first-break-it).
- **Myötö ja kosketus.** Kaksi lisätutkimustyyppiä: epälineaarinen, jossa materiaali seuraa suoraa viivaansa myötöjännitykseen asti ja sitten loivempaa rinnettä, muovinen venymä piirrettynä; sekä kosketustutkimus, jossa erilliset kappaleet työntävät toisiaan (kitkattomasti) tai pysyvät kiinni (sidottu). Kuormavaihe, joka ei asettu, tai kappaleet, jotka painuvat liian syvälle toisiinsa, näkyvät Ongelmat-paneelissa. Kitka, suuri liuku, suuret kierrot, suuret taipumat ja väsymys eivät ole ratkaistuja. Katso [Tarkista jännitys ja taipuma](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX-syötteet.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} tallentaa tutkimuksen CalculiXille, erilliselle ohjelmalle, jonka asennat ja ajat itse; {{ui:Export}} › {{ui:CalculiX results (.frd)}} lukee sen tulostiedoston takaisin samaan verkkoon. PartCraft ei koskaan käynnistä sitä ohjelmaa, ja se sanoo niin, jos osaa on muutettu syötteen tallentamisen jälkeen.

**Kokoonpanot**

- **Liiketutkimukset.** {{ui:Assembly}} › {{ui:Motion}} ajaa yhden liitoksen arvoa antamasi ajan yli (vakionopeus, tasoitettu, siniaalto tai ulos ja takaisin), asettaa kokoonpanon jokaiseen askeleeseen liitoksineen ja suljettuine silmukoineen ja raportoi, mitkä osat törmäävät ja kuinka lähellä ne tulevat toisiaan. {{ui:Add a point}} piirtää pisteen aseman, nopeuden ja kiihtyvyyden, liitoksen arvon ja välyksen ajan funktiona; {{ui:Save CSV}} ja {{ui:Save plot}} kirjoittavat ne ulos. {{ui:Run}}-napin jälkeen Askel ajossa -palkki siirtää kokoonpanon mihin tahansa askeleeseen. Tutkimuksen asetukset tallennetaan kokoonpanotiedostoon. Nopeus ja kiihtyvyys tulevat tallennetuista asemista, joten käytä enemmän askelia, jos terävä huippu näyttää liian matalalta. Katso [Tarkista kokoonpano törmäyksille ja liikkeelle](topic:check-assembly#a-motion-study).

**Pinnat ja osat fysiikasta**

- **Pinnat-työtila.** Valitse {{ui:Surfaces}} {{ui:Workspace}}-ruudusta NURBS-käyrille ja -pinnoille osan rinnalla: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} ja {{ui:Zebra}}, jatkuvuus (G0, G1 tai G2) mitattuna tarkoilla pinnoilla ja reuna, joka on huonompi kuin pyysit, luetellaan Ongelmissa Match-korjauksella. {{ui:Fair}} mittaa runkoviivoja käänteiden ja kaarevuushyppyjen varalta ja rakentaa epäsileät uudelleen toleranssisi sisällä. Pinnat tallennetaan osatiedostoon, eivätkä ne muuta osan ominaisuuksia. Katso [Vapaamuotoiset pinnat (NURBS)](topic:nurbs-surfaces).
- **Engineer-työtila.** Valitse {{ui:Engineer}} työtilan vaihtimesta, valitse generaattori ja napsauta {{ui:New}}: skripti mitoittaa osan sen perusteella, mitä sen pitää tehdä (siirtää lämpöä, virtaukset, paine, materiaali, tulostusprosessi) oppikirjakaavoilla ja rakentaa sen, ja antaa sitten takaisin käyttämänsä luvut lähteineen, valmistustarkistukset ja tiedostot analyysityökaluille. Samat syötteet antavat saman osan millä tahansa tietokoneella. Generaattori säilyy osassa, eikä osan avaaminen koskaan aja skriptiä. Katso [Osat fysiikasta: generaattorit](topic:engineer-generators) ja [Kirjoita generaattori](topic:write-a-generator).

**Luonnokset, piirustukset ja valmistus**

- **Luonnos valokuvasta.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} jäljittää kuvan tasaisesta osasta tavallisella alustalla (ulkoreuna ja reiät) tai kynäpiirroksen viivoiksi, kaariksi ja ympyröiksi. Annat yhden pituuden, tarkistat esikatselun ja teet luonnoksen. Katso [Luonnoksen perusteet](topic:sketch-basics#a-sketch-from-a-photo).
- **Skaalaus ja jako tulostusta varten.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} skaalaa akselikohtaisesti muuttamatta osaa, esimerkiksi kutistumavarauksella. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} leikkaa osan, joka on liian suuri alustallesi, numeroituihin paloihin, jotka liitetään tapeilla, avaimilla, hännänpäillä, tappireikillä tai magneettitaskuilla. Katso [Tulosta 3D:nä](topic:print-3d).
- **Sijoitetut levyt G-koodiksi.** {{ui:Export}} › {{ui:Nested sheets to G-code}} lukee sijoitetun DXF:n ja tekee yhden ohjelman levyä kohden postprosessorin kautta, jonka valitset: reiät ja aukot ensin, sitten ääriviivat. Se ei suunnittele sisäänajoja, leikkausjärjestystä eikä jaettuja reunoja. Katso [Sijoittele tasaiset osat levyille](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Piirustukset, jotka tekevät enemmän itse.** {{ui:Sheet}} › {{ui:Automatic}} valitsee pienimmän A-kokoisen arkin, joka pitää näkymät suurimmassa vakiomittakaavassa enintään 1:1. {{ui:Dimension the holes}} asettaa keskimerkin jokaiseen reikään, yhden merkinnän kokoa kohden ja sijainnit näkymän vasemmasta alakulmasta. Katso [Tee piirustus](topic:drawing-pdf).

**Kaikissa sovelluksissa**

- **Kielet.** Sovellukset tulevat 54 kielellä. Englannin lisäksi olevat ovat koneellisia luonnoksia, kunnes äidinkielinen puhuja on lukenut ne.
- **Työkalurivit.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} valitsee Rivitys (kuten ennen), 2 riviä tai 1 rivi; palkki, joka ei mahdu, vierittyy sivusuunnassa. PartCraftin Ominaisuus-nauha näyttää eniten käytetyn työkalun suurena ja piilottaa muunnelmat jaetun painikkeen taakse.
- **Yhdistä tekoälysi.** Studio on keskus, josta voi yhdistää oman avustajan kaikkiin kahdeksaan sovellukseen, lukuoikeus-, ehdotus- tai muokkausoikeus per sovellus. Yhdistetty avustaja voi mitoittaa osan lauseesta, kuten konsoli kuormalle, näyttää työnsä ja kaikki tarkistukset ja rakentaa sen; se kertoo, mitä se ei tarkistanut (jännityskeskittymä, väsymys, muovien krypitys). Katso [Käytä PartCraftia tekoälyavustajan kanssa](topic:use-with-ai-assistants).

### Korjattu versiossa 0.8.1

- **Koko näytön kohdistimen jäätyminen.** Kohdistimen poiminta on nyt rajoitettu. Syy on paras tulkintamme, eikä sitä vahvistettu ilmoittajan kanssa.
- **Kieli ajonaikana.** Studio ja pakatut versiot voivat vaihtaa kieltä ajon aikana; ennen ne olivat vain englanniksi. Tätä ei ole vielä testattu jokaisella alustalla: kerro, jos kieli ei vaihdu.

### Ei tässä versiossa vielä

- Yhdistä tekoälysi ei ole valmis: yhden napsautuksen yhdistäminen Studiossa, hostattu liitin selaimen tekoälylle, oma API-avain Studiossa ja julkaistu MCP-paketti eivät ole luvattuja. Studiolla ei ole omaa tekoälyä.
- Studio ei ole koodillä allekirjoitettu: Windows voi varoittaa, ja macOS pyytää napsauttamaan oikealla ja valitsemaan Avaa. Katso [Vianmääritys](topic:troubleshooting).
- Pinnoitukset ovat yhä yksisuuntaisia: katso [Toleranssiketjut](topic:tolerance-stackup).
- Loput on luetteloitu kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet).

Aiemmat muutokset ovat kohdassa [Uutta versiossa 0.7](topic:whats-new-0-7).
