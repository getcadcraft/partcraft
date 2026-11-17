---
title: Tiedostot: avaa, tallenna ja vie
summary: Osa- ja kokoonpanotiedostot, jotka PartCraft avaa ja tallentaa, jokainen vientimuoto ja mitä se säilyttää, minne tiedostot menevät sekä mitä muuttuu offline-tilassa ja selainten välillä.
keywords: avaa, tallenna, vie, lataa, tiedosto, partcraft.json, kokoonpanotiedosto, stl, 3mf, step, dxf, pdf, minne tiedostoni menevät, offline, tallenna nimellä
from: e5fbc7e3
---

PartCraft toimii tiedostoilla tietokoneellasi. Se ei koskaan lähetä osaa minnekään, eikä siihen liity tiliä tai pilvitallennusta. Pilvitallennus ei ole vielä käytettävissä.

## Mitä PartCraft avaa

| Tiedosto | Pääte | Miten |
|---|---|---|
| PartCraft-osa | `.partcraft.json` | {{ui:Avaa}}, {{key:Mod+O}}, tai pudota se 3D-näkymään |
| PartCraft-kokoonpano | `.partcraft-asm.json` | Sama: PartCraft tunnistaa, minkä tyyppinen se on |
| STEP-kiintokappale | `.step`, `.stp` | Kiintokappale luettuna kolmioina: [Avaa STEP-tiedosto ja rakenna sen päälle](topic:import-step) |

STL-, OBJ- ja 3MF-verkot avautuvat myös kiintokappaleina ([Avaa STL, OBJ tai 3MF](topic:open-meshes)), samoin `.3dm`-tiedostot ([Avaa .3dm-malli](topic:open-3dm-files)). DXF:ää, IGES:ä ja muiden ohjelmien omia osatiedostoja ei voi avata (katso [Ei vielä toteutettu](topic:not-built-yet)).

Avaamisen säännöt:

- Osan tai kokoonpanon tiedostonimen on päätyttävä `.json`-päätteeseen, ja tiedoston on oltava alle 50 MB.
- Tiedostot tarkistetaan ennen kuin mitään näytetään. Vioittunut tai muokattu tiedosto hylätään selkeällä syyllä, esimerkiksi ”Tämä ei ole PartCraft-tiedosto.”
- Uudemman PartCraftin tallentama tiedosto hylätään: ”Tämän tiedoston tallensi uudempi PartCraft (tiedostoversio 3); tämä lukee version 2.” Vanhemmat tiedostot avautuvat.
- Jos näytöllä olevassa osassa on tallentamattomia muutoksia, PartCraft kysyy ensin: {{ui:Peruuta}}, {{ui:Hylkää muutokset}} tai {{ui:Tallenna ensin}}.

## Tallentaminen

{{ui:Tallenna}} tai {{key:Mod+S}} tallentaa näytöllä olevan:

- Osasta: `<osan nimi>.partcraft.json`, täydellinen historia (luonnokset, relaatiot, mitat, muotoelementit, kelauspaikka), piirustusarkin leikkaus-, yksityiskohta- ja GD&T-merkinnät sekä koko teksti kaikista aiemmalla versiolla tuoduista STEP-kiintokappaleista. Tässä versiossa rakentamattomat muotoelementit tallennetaan takaisin muuttumattomina. Kiintokappaletta itseään ei tallenneta; PartCraft rakentaa sen uudelleen historiasta, kun tiedosto avataan.
- Kokoonpanosta: `<kokoonpanon nimi>.partcraft-asm.json`, **jokainen osa sen sisällä**. Yksi tiedosto kantaa koko kokoonpanon, joten voit lähettää sen yksinään.

Tallentaminen on **lataus**. Selaimesi tallentaa tiedoston latauskansioonsa, tai kysyy, mihin se tallennetaan, jos olet asettanut niin. Uusi tallennus tekee uuden latauksen; selain voi nimetä sen `Part1 (1).partcraft.json`, eikä korvata vanhaa. Nimeä tai siirrä tiedostoja {{pick:mac=Finder|windows=Resurssienhallinta|linux=tiedostonhallinta}} haluamallasi tavalla.

Osan nimen merkit, jotka eivät ole kirjaimia, numeroita, välilyöntejä, `_`, `.` tai `-`, muuttuvat tiedostonimessä merkiksi `_`.

:::tip
Useimmissa selaimissa on asetus, joka kysyy, mihin kukin lataus tallennetaan. Ota se käyttöön, jos haluat ”Tallenna nimellä” -valinnan joka kerta: Chromessa ja Edgessä se on asetuksissa kohdassa Lataukset; Firefoxissa kohdassa Yleiset, Tiedostot ja sovellukset; Safarissa kohdassa Yleiset, tiedoston latauspaikka.
:::

Lisää siitä, minne lataukset menevät ja miten tiedostot pidetään turvassa: [Missä tiedostosi ovat](common:your-files).

## Vienti

{{ui:Vie}}-valikko kirjoittaa muut muodot. Jokainen on lataus, ja se nimetään osan mukaan.

| Valikon kohta | Tiedosto | Sisältö |
|---|---|---|
| {{ui:STL 3D-tulostukseen}} | `<name>.stl` | Binäärinen STL kiintokappaleen kolmioista, millimetreinä, **Z ylös** |
| {{ui:3MF 3D-tulostukseen}} | `<name>.3mf` | 3MF, jossa kiintokappale on yksi kohde, millimetreinä, **Z ylös** |
| {{ui:STEP AP242 (tarkka kiintokappale)}} | `<name>.step` | Yksi tarkka kiintokappale, millimetreinä, Z ylös: pyöreät pinnat todellisina sylintereinä, kartioina, palloina ja toruksina. STEP, jota käytetään muissa CAD- ja CAM-ohjelmissa |
| {{ui:STEP AP214 (tarkka kiintokappale)}} | `<name>.step` | Sama tarkka kiintokappale vanhemmassa AP214-skeemassa |
| {{ui:STEP (tahkoitettu, verkkoydin)}} | `<name>.step` | Kiintokappale, joka on tehty verkon tasaisista pinnoista: **pyöreät pinnat ovat monia pieniä tasaisia facetteja**. Millimetreinä PartCraftin omissa akseleissa (Y ylös). Ohjelmalle, joka hylkää tarkan tiedoston |
| {{ui:DXF luonnoksesta tai tasaisesta pinnasta}} | `<name> - <sketch>.dxf` tai `<name> - face.dxf` | DXF R12. Luonnos: viivat, kaaret, ympyrät ja pisteet luonnoksen omissa koordinaateissa, tasoilla PROFILE, CONSTRUCTION ja POINTS. Valittu tasainen pinta: sen ääriviivat suljettuina polyviivoina (pyöreät reunat facetteina) |
| {{ui:Piirustus (PDF): näkymät, leikkaus, yksityiskohta, GD&T}} | `<name> - drawing.pdf` | A3-piirustusarkki: kolme näkymää, isometrinen, leikkaus ja yksityiskohta, jos asetettu, kokonaismitat, GD&T-merkit, piirustusotsikko |

:::note
{{ui:STEP AP242 (tarkka kiintokappale)}} kirjoittaa reiät, korokkeet, pyöristykset, kartiot, pallot ja toruksit todellisille pinnoilleen, joten toinen ohjelma voi valita reiän sylinterinä; **Kaarevuus** ei muuta sitä. Splinen sivut, mallinnetut kierteet ja tuodut verkot eivät ole tarkkoja pintoja, ja ne pysyvät tasaisina facetteina samassa kiintokappaleessa; tilarivi kertoo, kuinka monta. {{ui:STEP (tahkoitettu, verkkoydin)}} kirjoittaa jokaisen pyöreän pinnan facetteina.
:::

- Viennit koskevat näytöllä olevaa osaa. Vienti on pois käytöstä kokoonpanossa; kokoonpanon vientiä ei vielä ole.
- STL, 3MF, facetoitu STEP ja pinnan DXF ovat aina facetteja. **Kaarevuus**-asetus (oikealla paneelilla, kun mitään ei ole valittuna) määrittää niiden tarkkuuden, 32–256 facettia kierrosta kohden. Valitse Hieno tai Erittäin hieno ennen STL- tai 3MF-vientiä sileää tulostusta varten.
- PDF-piirustus käyttää lukijan sisäänrakennettua Helvetica-fonttia. Merkit, joita se ei pysty näyttämään, tulostuvat merkkinä ”?”.

Vaihe vaiheelta: [Vienti tulostukseen, STEP ja DXF](topic:export-files) ja [Tee piirustusarkki](topic:drawing-pdf).

## Tallentamattomat työt

- PartCraft pitää palautuskopion avoimesta osasta tai kokoonpanosta tämän selaimen muistissa hetken jokaisen muutoksen jälkeen, joten kaatuminen tai suljettu välilehti ei hukkaa sitä: seuraavan kerran kun avaat PartCraftin, se kysyy ”Palautetaanko työsi?”. Se ei ole tallennus: tallenna tiedostoon säilyttääksesi työsi. Katso [Palauta tallentamaton työ](common:recover).
- Jos yrität sulkea välilehden tai ladata sivun uudelleen tallentamattomilla muutoksilla, selain kysyy ”Poistutaanko sivulta?”. Se on selaimen oma ikkuna; PartCraft ei voi muuttaa sen sanamuotoa.
- {{ui:Uusi}}, {{ui:Avaa}} ja kokoonpanon sulkeminen kysyvät ennen tallentamattomien muutosten hylkäämistä.

## Verkossa ja offline-tilassa

Kaikki tapahtuu tietokoneellasi: verkkoydin (WebAssembly-ohjelma) ladataan sovelluksen mukana ja rakentaa geometrian paikallisesti, ja tiedostot luetaan ja kirjoitetaan levyllesi. Osadataa ei lähetetä verkkoon. Katso [Verkkoydin](topic:solid-kernels).

Jos haluat työskennellä ilman yhteyttä lainkaan, tallenna PartCraft offline-käyttöön, kun olet verkossa: valitse sovelluspalkista {{ui:Tallenna offline-käyttöön}} ja odota, kun se laskee (”Tallennetaan 40 / 212”), kunnes se sanoo **Valmis offline-käyttöön**. Tallennettuun kopioon kuuluvat 3D-kirjasto ja verkkoydin, joten sen jälkeen mallinnus, tallennus, kaikki viennit ja piirustukset toimivat offline. Jos siinä lukee **Tallennus ei onnistunut**, napsauta sitä yrittääksesi uudelleen verkossa; **Offline-käyttö ei ole käytettävissä** tarkoittaa, että tämä selainikkuna ei voi säilyttää kopiota (yksityiset ikkunat ja jotkin hallinnoidut tietokoneet). Kun kopio on tallennettu, napsauttamalla **Valmis offline-käyttöön** tarjotaan {{ui:Tallenna uudelleen (hae uusin versio)}} ja {{ui:Poista offline-kopio}}. Lisätietoja: [Työskentely offline-tilassa](common:offline).

:::online
Olet verkossa. Vaikka et tallentaisi offline-käyttöön, kun PartCraft on latautunut ja tilarivin merkki sanoo ”Verkkoydin”, voit jatkaa työtä, jos yhteys katkeaa. Älä vain lataa sivua uudelleen ennen kuin olet taas verkossa.
:::

:::offline
Olet offline-tilassa. Jos PartCraft on jo auki, jatka työtä; tallentaminen ja vieminen toimivat yhä. Jos sovelluspalkissa lukee **Valmis offline-käyttöön**, PartCraft aukeaa myös alusta ilman yhteyttä; muuten älä lataa tätä välilehteä uudelleen.
:::

## Selainten väliset erot

- **Lataukset.** Jokaisella selaimella on oma latauskansionsa ja oma tapansa kysyä. Jos selain kysyy, saako tämä sivusto ladata tiedostoja, salli se, tai tallennus ja vienti eivät toimi.
- **Vetäminen ja pudottaminen** tiedoston näkymään toimii Chromessa, Edgessä, Firefoxissa ja Safarissa.
- **Tiedostot puhelimesta tai tabletista.** iPhonella ja iPadilla Avaa näyttää Tiedostot-sovelluksen; tallennetut tiedostot menevät Tiedostoihin, Lataukset-kansioon. Androidilla ne menevät Lataukset-kansioon.

Tiedostojen sisältö ei eroa selainten tai käyttöjärjestelmien välillä.
