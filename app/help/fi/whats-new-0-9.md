---
title: Mitä uutta versiossa 0.9
summary: PartCraft 0.9 lisää pyöristykset pintojen välille ja paksuntamisen kiintokappaleiksi, tuhansien osien kokoonpanot, asiakirjaholvin revisioineen, Solid FEM -lisäosan jännitystarkistukseen, kymmenen kaarimenetelmää, UK-teräsprofiilit, tulostusvaiheen ja hartsitulostuksen lisäosat.
keywords: mitä uutta, julkaisutiedot, muutosloki, 0.9, pyöristys pintojen välillä, vieräpallo, pyöristä useita särmiä, paksunna, kiintokappale pinnoista, step-kuori, iges-kiintokappale, skannauksen pyöristykset, suuri kokoonpano, kevyt näyttö, 20000 osaa, asiakirjat, holvi, kuittaa ulos, revisio, julkaisu, missä käytetään, rhino-linkki, grasshopper, 3dm, kursorit, tehdasalue, työjono, solid fem, elementtimenetelmä, von mises, luonnollinen taajuus, kaarimenetelmät, 3-pisteinen kaari, uk-teräsprofiilit, blue book, tulostusvaihe, hartsi, goo, ctb, alusta, levitä tasoon, mitä uutta, muutosloki, muutokset, 0.8, 0.8.1, versio, uudet ominaisuudet, live-analyysi, päivitys muokatessa, mikä rikkoutuu ensin, kuormituskerroin, epälineaarinen, myötö, plastinen venymä, kosketus, calculix, liiketutkimus, väli, pinnat, nurbs, tasoitus, runko, seepra, insinööri, generaattori, luonnos valokuvasta, mittakaava tulostusta varten, jako tulostusta varten, kutistuma, asetellut levyt, g-koodi, piirustus, mitoita reiät, tekoäly, mcp, kielet, työkalurivin rivit
from: 96d9fbfa
---

Tämä on se, mikä muuttui versiossa PartCraft 0.9 verrattuna versioon 0.8.1. Vapaamuotoiset pinnat sulkeutuvat nyt kiintokappaleiksi, tuhansien osien kokoonpanot pysyvät käytettävinä, asiakirjaholvi pitää revisiot, ja Solid FEM -lisäosa tarkistaa jännityksen osassa. Jokainen kohta kertoo, mistä sen löytää.

## Uutta versiossa 0.9.1

- **Tarkka STEP-vienti.** {{ui:Vie}} › {{ui:STEP AP242 (tarkka kiintokappale)}} ja {{ui:STEP AP214 (tarkka kiintokappale)}} toimivat nyt. Reiät, korotukset, pyöristykset, kartiot, pallot ja toruksit kirjoitetaan todellisille pinnoilleen, ja todelliset ympyrät reunoina, joten toinen CAD- tai CAM-ohjelma voi tunnistaa reiän reiäksi. Spline-sivut, mallinnetut kierteet ja tuodut verkot pysyvät samassa kiintokappaleessa litteinä fasetteina. Ks. [Vie tulostusta, STEP- ja DXF-tiedostoja varten](topic:export-files#for-other-cad-programs-step).
- **STEP sisään, tarkka STEP ulos.** Avaamasi STEP-tiedosto säilyttää omat litteät pintansa, sylinterinsä, kartionsa, pallonsa ja toruksensa, joten {{ui:Vie}} › {{ui:STEP AP242 (tarkka kiintokappale)}} kirjoittaa ne takaisin todellisina pintoina eikä fasetteina: toimittajan palkki, jossa on pulttireiät, lähtee ulos samoilla pinnoilla kuin tuli sisään, ja lisäksi kaikki, mitä siihen leikkasit. Tiedoston spline-, pyyhkäistyt ja kierretyt pinnat pysyvät fasetteina, samoin STL-, OBJ- ja 3MF-tiedostojen rungot. Avaa STEP-tiedosto uudelleen osalle, joka on tallennettu aiemmin. Ks. [Avaa STEP-tiedosto ja rakenna sen varaan](topic:import-step).
- **Tarkat ympyrät pinnan DXF-tiedostossa.** {{ui:Vie}} › {{ui:DXF luonnoksesta tai tasaisesta pinnasta}}, kun tasainen pinta on valittu, kirjoittaa pyöreät reiät ympyröinä omalla keskipisteellään ja säteellään laserille, plasmalle tai vesisuihkupöydälle. Muut pyöreät reunat ovat yhä fasetteja.
- **Tarkka STEP valmistukseen.** {{ui:Valmistus}}-välilehdellä {{ui:Tarkka STEP (työkoordinaatit)}} kirjoittaa osan alkupisteen asetuksen työnollapisteeseen ja Z-akselin työkalun akselia pitkin, samat koordinaatit kuin G-koodissa. Ks. [Tee työratoja ja G-koodia](topic:manufacture#exact-step-for-the-shop).

## Uutta

### Pinnat ja kiintokappaleet

- **Pyöristys pintojen välillä.** Valitse {{ui:Pinnat}} {{ui:Työtila}}-valikosta ja sitten {{ui:Pyöristys pintojen välillä}}. Valitse kiintokappaleen kaksi pintaa ja kirjoita säde (ja {{ui:Säde päässä (mm, 0 = sama)}} säteelle, joka muuttuu reunaa pitkin). Tulosrivi kertoo, kuinka kaukana pyöristys on ihanteellisesta vierivästä pallosta, ja säde, joka ei sovi, hylätään ja pinta nimetään. {{ui:Pyöristä useita särmiä}} pyöristää monta reunaa yhdellä askeleella; rastita {{ui:Kulmat (pallopinta, kun kolme kohtaa)}} saadaksesi pallomaisen kulman, jossa kolmen litteän pinnan pyöristettyjen reunojen kolme kohtaa. Ks. [Vapaamuotoiset pinnat (NURBS)](topic:nurbs-surfaces).
- **Paksuntaminen kiintokappaleeksi.** {{ui:Paksunna kiintokappaleeksi}} samassa työtilassa antaa pinnalle paksuuden; {{ui:Toinen puoli}} kasvattaa sitä toiseen suuntaan. Taitos tai itseensä leikkaus hylätään, ja pinta ja paikka nimetään.
- **Kiintokappaleet pinnoista.** Rajatut pinnat voi yhdistää liitos-, vähennys- ja leikkausoperaatioilla ja kiinnittää osaan yhdeksi kumoamisaskeleeksi. STEP kirjoittaa kiintokappaleen yhtenä suljettuna kuorena ja IGES yhtenä kiintokappaleena; molemmat luetaan takaisin kiintokappaleina. Jos pinnat eivät täsmää reuna reunalta, tiedosto saa erilliset pinnat, ja tilarivi kertoo sen. Kiintokappaleita voi tehdä myös solmueditorissa; ks. [Solmueditori](topic:nodes).
- **Reunapyöristykset ja muuttuvat pyöristykset skannauksissa.** Kun sovitat pintoja skannaukseen, reunapyöristykset (toruksia) ja muuttuvasäteiset pyöristykset melko suoran reunan varrella etsitään myös ja luetellaan säteineen. Testattu vain keksityillä skannauksilla.

### Kokoonpanot, asiakirjat ja linkit

- **Suuret kokoonpanot.** Osat, jotka ovat kopioita, jakavat yhden verkon, ja {{ui:Näkymät}} › {{ui:Kevyt näyttö}} piirtää laatikoita, jotta näkymä pysyy liikkuvana. Se kytkeytyy itsestään päälle hyvin suurille kokoonpanoille; valinta ja nivelet käyttävät yhä oikeita osia. Osapuu näyttää ensimmäiset rivinsä ja painikkeen {{ui:Näytä 700 lisää}} muille. Kokoonpanotiedostoihin mahtuu jopa 50 000 esiintymää ja 100 000 niveltä. Ks. [Rakenna kokoonpano](topic:build-assembly).
- **Asiakirjat.** {{ui:Asiakirjat…}} **Tiedosto**-ryhmässä avaa valintaikkunan projektikansion päälle: kuittaa ulos ja kuittaa sisään, revisiokirjaimet, tilat (työn alla, tarkastettavana, julkaistu, vanhentunut), historia, missä käytetään ja osaluettelo. Ks. [Asiakirjat ja revisiot (holvi)](topic:documents-walkthrough).
- **Elävä Rhino-linkki.** Yksi skripti, `cadcraft_link.py`, seuraa Rhino- tai Grasshopper-asiakirjaa ja työntää PartCraftiin vain muuttuneet osat; tuotu muotoelementti rakentuu uudelleen uuteen muotoon. Linkki kulkee vain yhteen suuntaan ja tarvitsee Studion. Ks. [Elävä .3dm-linkki](topic:live-3dm-link).
- **Näe toistesi kohdistimet.** Yhteisessä istunnossa jokaisen henkilön kohdistin näkyy hänen nimensä ja valitun muotoelementin kanssa. Ks. [Työskentele reaaliajassa muiden kanssa](topic:work-live).
- **Tehdasalue.** Kytke Tehdasalue-lisäosa päälle kohdassa {{ui:Asetukset}} › {{ui:Lisäosat}}. Kun tuotat ohjelman kohdassa {{ui:Valmistus}}, sen välilehti voi {{ui:Lisää tehtaan työjonoon}} tai {{ui:Tallenna työtiedostona}}. Se ei koskaan lähetä tai käynnistä konetta.

### Analyysi ja osat

- **Solid FEM -lisäosa.** Kytke {{ui:Solid FEM}} päälle kohdassa {{ui:Asetukset}} › {{ui:Lisäosat}} (se on pois päältä, kunnes teet niin), ja oikeaan paneeliin ilmestyy {{ui:Solid FEM}}-välilehti. Verkota osa, valitse kiinnitettävät pinnat ja kuormat 3D-näkymässä, {{ui:Ratkaise}}, ja piirrä siirtymä, von Mises -jännitys tai muotomuoto {{ui:Näytä mallissa}}-toiminnolla. Ks. [Solid FEM: jännitystarkistus](topic:solid-fem-check).
- **Kaari luonnoksissa kymmenellä tavalla.** Nuoli {{ui:Kaari}}n vieressä luonnostyökalurivillä luettelee: 3-pisteinen, Alku, keskipiste, loppu; Alku, keskipiste, kulma; Alku, keskipiste, pituus; Alku, loppu, kulma; Alku, loppu, suunta; Alku, loppu, säde; Keskipiste, alku, loppu; Keskipiste, alku, kulma; Keskipiste, alku, pituus; ja Jatka. Ks. [Piirrä kaari kymmenellä tavalla](topic:sketch-arc-methods).
- **UK-teräsprofiilit.** Rakennesauvat voivat käyttää 976 UK-profiilia (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); kirjoita koko, kuten `305x165x40 UB`. Ks. [Rakennesauvat](topic:structural-members).

### Tulostus

- **Tulostusvaihe.** Työkalurivin painike {{ui:Tulostusvaihe}} (lisäosa 3D-tulostus, oletuksena päällä) asettaa osasi kappaleet katkoviivoitetulle alustalle: {{ui:Levitä tasoon}}, {{ui:Käännä 90°}}, {{ui:Järjestä alustalle}}, {{ui:Sovita kaikki alustalle}}, {{ui:Esikatsele kerroksia}}, ja sitten {{ui:Lähetä 3D-tulostimeen}} USB:n yli, Klipperillä (Moonraker), OctoPrintilla tai PrusaLinkillä. Mitään ei lähetetä ennen kuin vahvistat, eikä osaasi muuteta koskaan. STL- tai 3MF-tiedoston osalta ks. [Valmistele osa 3D-tulostukseen](topic:print-3d).
- **Hartsitulostus.** Lisäosat kohdassa {{ui:Asetukset}} › {{ui:Lisäosat}}, kaikki pois päältä, kunnes kytket ne päälle: hartsiviipalointi, valotuskoe ja tiedostomuodot Elegoo GOO, SL1, Chitubox CBDDLP/CTB ja Anycubic. Viipalointi ajetaan työsäikeessä, joten sivu pysyy reagoivana.

## Kaikissa sovelluksissa

- Jokainen kohdistusvihje on Bootstrap-vihje.
- Aloitusvinkillä on sulkupainike; se pysyy suljettuna.
- Välilehtirivi paneelissa, joka ei mahdu, vierii sivusuunnassa eikä leikkaudu.
- Selainvälilehti näyttää avoimen asiakirjan nimen ennen tekstiä PartCraft | CadCraft.
- {{ui:Asetukset}} näyttää työtilan {{ui:Asettelu}} pudotusvalikkona vaihtoehdoista, ja kielikenttä listaa jokaisen kielen, jonka versio tukee.
- Paino ja lämpötila ovat yksikkölajeja yksikköasetuksissa.

## Korjattu

- Luonnoksen Kaari-valikko luettelee nyt jokaisen menetelmän.
- Lisäosien työkalurivi ja selainvälilehden otsikko korjattiin 2026-11-09.

## Rehelliset rajoitukset

- Tarkka STEP luettiin takaisin OpenCascadessa (kelvolliset kiintokappaleet, tilavuudet yhtä suuret kuin käsin lasketut). Sitä ei ole vielä avattu jokaisessa CAD- tai CAM-ohjelmassa, eikä kokoonpanoa kirjoiteta tarkkana STEP-tiedostona.
- Mitään ei ole tulostettu oikealla tulostimella. Viipalointi, G-koodi ja hartsitiedostot luettiin takaisin omilla ohjelmillamme tai sijaisena toimivalla tulostimella; yhtäkään hartsimuotoa ei ole ladattu tulostimelle, ja tulostinkoot ja valotukset ovat lähtökohtia.
- Solid FEM on lineaarinen, isotrooppinen ja elastinen, yksi materiaali osaa kohti, ilman kosketusta, myötämistä tai nurjahdusta. Jännitys kiinnityspinnoissa ja terävissä kulmissa riippuu verkosta. Se on tarkistusapu, jota insinööri ei ole arvioinut.
- Suurten kokoonpanojen ajoitukset tulevat palvelimelta ilman GPU:ta; täysi yksityiskohtainen kuva 20 000 osasta vie sielläkin sekunteja.
- Pyöristykset toimivat pinta-parien välillä; yleistä kärkiyhdistelmää ei ole, eikä pyöristystä pinnoille, jotka eivät kohtaa.
- Rhino-linkkiä ei ole koskaan ajettu oikean Rhinon tai Grasshopperin sisällä. Asiakirjoja (Documents) kokeiltiin kahdella ohjelmalla yhdessä kansiossa, ei kahdella ihmisellä verkkojaolla.
- Pintojen sovittamista oikeaan skannaukseen ei ole vielä tarkistettu käsin. Muut kielet kuin englanti ovat konekäännöksiä.
- Windows-asennusohjelmia ei ole allekirjoitettu koodilla, ja macOS-levykuvaa ei ole notarisoitu. Ks. [Vianmääritys](topic:troubleshooting).

Muutokset aiemmin ovat kohdassa [Mitä uutta versiossa 0.7](topic:whats-new-0-7).

## Aiemmin: 0.8 ja 0.8.1

Tämä on se, mikä muuttui versioissa PartCraft 0.8 ja 0.8.1 verrattuna versioon 0.7. Simulaatio vastaa muokatessasi ja kertoo, mikä rikkoutuu ensin, kokoonpanoille tulee liiketutkimuksia, ja uudet työtilat tekevät vapaamuotoisista pinnoista ja fysiikasta mitoitetuista osista. Versio 0.8.1 on pieni korjausjulkaisu.

### Uutta

**Simulaatio**

- **Päivitys muokatessani.** Valitse {{ui:Päivitä muokatessani}} Ratkaise-lohkossa, ja vastaukset seuraavat muokkauksiasi. Muuta mittaa, kuormaa tai materiaalia, ja nopea vastaus, tehty neljä kertaa suuremmilla elementeillä, ilmestyy heti; kun pysähdyt noin sekunniksi, tutkimuksen oma tarkennettu vastaus korvaa sen. Tulokset kertovat, kumpaa katsot. Teräksisellä ulokepalkilla nopea vastaus oli taipuman osalta 1 %:n ja jännityksen osalta noin 4 %:n sisällä tarkennetusta. Ks. [Tarkista jännitys ja taipuma](topic:simulation#update-while-you-edit-live).
- **Mikä rikkoutuu ensin.** Staattisessa tai nurjahdustutkimuksessa {{ui:Mikä rikkoutuu ensin?}} **Riko se** -lohkossa skaalaa kuormat, kunnes osa antaa periksi. Se luettelee pahimmasta alkaen kuormituskertoimen ensimmäiseen myötämiseen (punaisella merkillä, missä jännitys huipentuu) ja kuormituskertoimen nurjahdukseen. Kerroin alle 1 tarkoittaa, että osa antaa jo periksi kuormitettuna, ja {{ui:Ongelmat}} näyttää virheen. Kertoimet tulevat lineaarisesta tutkimuksesta, joten ne ovat yhtä hyviä kuin se. Ks. [Tarkista jännitys ja taipuma](topic:simulation#find-out-what-breaks-first-break-it).
- **Myötäminen ja kosketus.** Kaksi lisää tutkimustyyppiä: epälineaarinen, jossa materiaali seuraa suoraa viivaa myötölujuuteen asti ja sitten loivempaa kulmaa, ja plastinen venymä piirretään; sekä kosketus, jossa erilliset kappaleet painavat toisiaan kitkatta tai pysyvät kiinni (sidottu). Kuormitusaskel, joka ei asetu, tai kappaleet, jotka painuvat liian syvälle toisiinsa, näkyvät Ongelmat-paneelissa. Kitka, suuri liuku, suuret kiertymät, suuret taipumat ja väsyminen eivät ole ratkaistuja. Ks. [Tarkista jännitys ja taipuma](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Syöttötiedostot CalculiXille.** {{ui:Vie}} › {{ui:CalculiX-syöttötiedosto (.inp)}} tallentaa tutkimuksen CalculiXille, erilliselle ohjelmalle, jonka asennat ja ajat itse. {{ui:Vie}} › {{ui:CalculiX-tulokset (.frd)}} lukee sen tulostiedoston takaisin samaan verkkoon. PartCraft ei koskaan käynnistä tuota ohjelmaa, ja se kertoo, jos osa on muuttunut syöttötiedoston tallentamisen jälkeen.

**Kokoonpanot**

- **Liiketutkimukset.** {{ui:Kokoonpano}} › {{ui:Liike}} ajaa yhden nivelen arvoa antamasi ajan yli (vakionopeus, pehmennetty, siniaalto tai edestakainen), sijoittaa kokoonpanon jokaiseen askeleeseen niveleineen ja suljettuine silmukoineen ja raportoi, mitkä osat törmäävät ja kuinka lähelle ne tulevat. {{ui:Lisää piste}} piirtää pisteen aseman, nopeuden ja kiihtyvyyden sekä nivelen arvon ja välyksen ajan funktiona; {{ui:Tallenna CSV}} ja {{ui:Tallenna kuvaaja}} kirjoittavat ne ulos. {{ui:Aja}}-toiminnon jälkeen Askel ajossa -palkki siirtää kokoonpanon mihin tahansa askeleeseen. Tutkimuksen asetukset tallennetaan kokoonpanotiedostoon. Nopeus ja kiihtyvyys tulevat tallennetuista asemista, joten käytä enemmän askelia, jos terävä huippu näyttää liian matalalta. Ks. [Tarkista kokoonpano törmäyksille ja liikkeelle](topic:check-assembly#a-motion-study).

**Pinnat ja osat fysiikasta**

- **Pinnat-työtila.** Valitse {{ui:Pinnat}} {{ui:Työtila}}-valikosta NURBS-käyrille ja -pinnoille osan viereen: {{ui:Käyrä}}, {{ui:Loft}}, {{ui:Pyyhkäisy}}, {{ui:Sovita}} ja {{ui:Seepra}}, jatkuvuus (G0, G1 tai G2) mitattuna tarkoilla pinnoilla, ja reuna, joka on huonompi kuin pyysit, luetellaan Ongelmissa Sovita-korjauksella. {{ui:Tasoita}} mittaa runkoviivoja käännepisteiden ja kaarevuushyppyjen varalta ja rakentaa epäsileät uudelleen toleranssisi sisällä. Pinnat tallennetaan osatiedostoon eivätkä muuta osan muotoelementtejä. Ks. [Vapaamuotoiset pinnat (NURBS)](topic:nurbs-surfaces).
- **Insinööri-työtila.** Valitse {{ui:Insinööri}} työtilavalitsimesta, valitse generaattori ja napsauta {{ui:Uusi}}: skripti mitoittaa osan sen perusteella, mitä sen pitää tehdä (lämmön siirto, virtaukset, paine, materiaali, tulostusprosessi), oppikirjakaavoilla, ja rakentaa sen. Sitten se antaa takaisin käyttämänsä luvut lähteineen, valmistustarkistuksensa ja tiedostot analyysityökaluille. Samat syötteet antavat saman osan millä tahansa tietokoneella. Generaattori säilytetään osassa, eikä osan avaaminen koskaan aja skriptiä. Ks. [Fysiikasta syntyvät osat: generaattorit](topic:engineer-generators) ja [Kirjoita generaattori](topic:write-a-generator).

**Luonnostelu, piirustukset ja valmistus**

- **Luonnos valokuvasta.** {{ui:Muotoelementit}} › {{ui:Lisää}} › {{ui:Luonnos valokuvasta…}} jäljittää tasaisen osan kuvan tavallisella maalla (ääriviiva ja reiät) tai kynäpiirroksen viivoiksi, kaariksi ja ympyröiksi. Annat yhden mitan, tarkistat esikatselun ja luot luonnoksen. Ks. [Luonnostelun perusteet](topic:sketch-basics#a-sketch-from-a-photo).
- **Mittakaava ja jako tulostusta varten.** {{ui:Vie}} › {{ui:Skaalaa tulostusta varten (STL tai 3MF)…}} skaalaa akselikohtaisesti muuttamatta osaa, esimerkiksi kutistumisvaralla. {{ui:Vie}} › {{ui:Jaa tulostusta varten (zip osista)…}} leikkaa osan, joka on liian suuri alustallesi, numeroituihin osiin, jotka yhdistetään tappien, avainten, pyrstöliitosten, tappireikien tai magneettitaskujen avulla. Ks. [Tulosta 3D:nä](topic:print-3d).
- **Asetellut levyt G-koodiksi.** {{ui:Vie}} › {{ui:Asetellut levyt G-koodiksi}} lukee asetellun DXF-tiedoston ja tekee yhden ohjelman levyä kohden valitsemasi postin kautta: reiät ja aukot ensin, sitten ääriviivat. Se ei suunnittele sisäänajoja, leikkausjärjestystä eikä jaettuja reunoja. Ks. [Asettele tasaisia osia levyille](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Piirustukset, jotka tekevät enemmän itse.** {{ui:Arkki}} › {{ui:Automaattinen}} valitsee pienimmän A-kokoisen arkin, joka mahtuu näkymiin suurimmalla standardimittakaavalla enintään 1:1. {{ui:Mitoita reiät}} laittaa keskimerkin jokaiseen reikään, yhden viitteen kokoa kohden ja sijainnit näkymän vasemmasta alakulmasta. Ks. [Tee piirustus](topic:drawing-pdf).

**Kaikissa sovelluksissa**

- **Kielet.** Sovellukset tulevat 54 kielellä. Englannin lisäksi olevat ovat konekäännöksiä, kunnes äidinkielinen puhuja on lukenut ne.
- **Työkalurivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} valitsee Rivitys (kuten ennen), 2 riviä tai 1 rivi; rivi, joka ei mahdu, vierii sivusuunnassa. PartCraftin Muotoelementti-nauha näyttää eniten käytetyn työkalun isona ja piilottaa muunnelmat jaetun painikkeen taakse.
- **Yhdistä tekoälysi.** Studio on keskus, johon liität oman tekoälyavustajasi kaikkiin kahdeksaan sovellukseen, lukuoikeudella, ehdotusoikeudella tai muokkausoikeudella sovelluskohtaisesti. Yhdistetty avustaja voi mitoittaa osan yhdestä lauseesta, kuten kuormaa kantavan kiinnikkeen, näyttää laskelmansa ja jokaisen tarkistuksen ja rakentaa sen. Se kertoo, mitä ei tarkistanut (jännityskeskittymät, väsyminen, kriipiminen muoveissa). Ks. [Käytä PartCraft-sovellusta tekoälyavustajan kanssa](topic:use-with-ai-assistants).

### Korjattu versiossa 0.8.1

- **Koko näytön kohdistimen jäätyminen.** Kohdistimen osoitus on nyt kuristettu. Syy on paras tulkintamme eikä sitä vahvistettu ilmoittajan kanssa.
- **Kieli ajon aikana.** Studio ja paketoidut versiot voivat vaihtaa kieltä ajon aikana; ennen ne olivat vain englanniksi. Tätä ei ole vielä testattu jokaisella alustalla: kerro meille, jos kieli ei vaihdu.

### Ei vielä tässä versiossa

- Yhdistä tekoälysi ei ole valmis: yhdellä napsautuksella yhdistäminen Studion sisällä, selaintekoälyn isännöity liitin, oma API-avain Studion sisällä ja julkaistu MCP-paketti eivät ole luvattuja. Studiossa ei ole omaa tekoälyä.
- Studio ei ole allekirjoitettu koodilla: Windows voi varoittaa, ja macOS pyytää oikealla napsautuksella ja Avaa-toiminnolla. Ks. [Vianmääritys](topic:troubleshooting).
- Pinoamismitoitukset ovat yhä yhteen suuntaan: ks. [Toleranssipinot](topic:tolerance-stackup).
- Loput on listattu kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet).

Muut muutokset ovat kohdassa [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
