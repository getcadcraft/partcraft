---
title: Tiedostot: avaaminen, tallennus ja vienti
summary: Osa- ja kokoonpanotiedostot, jotka PartCraft avaa ja tallentaa, jokainen vientimuoto ja mitä se säilyttää, minne tiedostot päätyvät ja mikä muuttuu offline-tilassa tai selainten välillä.
keywords: avaa, tallenna, vie, lataa, tiedosto, partcraft.json, kokoonpanotiedosto, stl, 3mf, step, dxf, pdf, missä tiedostoni ovat, offline, tallenna nimellä
from: c15c2c48
---

PartCraft työskentelee tietokoneesi tiedostojen kanssa. Se ei koskaan lähetä osaa minnekään, eikä mukana ole tiliä tai pilvitallennusta. Pilvitallennus ei ole vielä käytettävissä.

## Mitä PartCraft avaa

| Tiedosto | Pääte | Miten |
|---|---|---|
| PartCraft-osa | `.partcraft.json` | {{ui:Avaa}}, {{key:Mod+O}} tai pudota se 3D-näkymään |
| PartCraft-kokoonpano | `.partcraft-asm.json` | Sama: PartCraft huomaa, kumpaa lajia se on |
| STEP-kiintokappale | `.step`, `.stp` | Kiintokappale luettuna kolmioina: [STEP-tiedoston avaaminen ja sen päälle rakentaminen](topic:import-step) |

STL-, OBJ- ja 3MF-verkot aukeavat myös kiintokappaleina ([STL-, OBJ- tai 3MF-tiedoston avaaminen](topic:open-meshes)), samoin `.3dm`-tiedostot ([.3dm-mallin avaaminen](topic:open-3dm-files)). DXF-, IGES- ja muiden ohjelmien omia osatiedostoja ei voi avata (katso [Mitä ei ole vielä toteutettu](topic:not-built-yet)).

Avaamisen säännöt:

- Osa- tai kokoonpanotiedoston nimen on päätyttävä `.json`-päätteeseen, ja tiedoston on oltava alle 50 MB.
- Tiedostot tarkistetaan ennen kuin mitään näytetään. Vahingoittunut tai muokattu tiedosto hylätään selkeällä syyllä, esimerkiksi ”Tämä ei ole PartCraft-tiedosto.”
- Uudemman PartCraftin tallentama tiedosto hylätään: ”Tämän tiedoston tallensi uudempi PartCraft (tiedostoversio 3); tämä lukee version 2.” Vanhemmat tiedostot aukeavat.
- Jos näytöllä olevassa osassa on tallentamattomia muutoksia, PartCraft kysyy ensin: {{ui:Peruuta}}, {{ui:Hylkää muutokset}} tai {{ui:Tallenna ensin}}.

## Tallennus

{{ui:Tallenna}} tai {{key:Mod+S}} tallentaa sen, mikä on näytöllä:

- Osasta: `<osan nimi>.partcraft.json`, täydellinen historia (luonnokset, relaatiot, mitat, muotoelementit, kelausasento), piirustusarkin leikkaus-, yksityiskohta- ja GD&T-merkinnät sekä aiemmassa versiossa tuodun STEP-kiintokappaleen koko teksti. Muotoelementit, joita tämä versio ei osaa rakentaa, tallennetaan takaisin muuttumattomina. Itse kiintokappaletta ei tallenneta; PartCraft rakentaa sen historiasta uudelleen, kun tiedosto avataan.
- Kokoonpanosta: `<kokoonpanon nimi>.partcraft-asm.json`, jonka sisällä on **jokainen osa**. Yksi tiedosto sisältää koko kokoonpanon, joten voit lähettää sen sellaisenaan.

Tallennus on **lataus**. Selaimesi asettaa tiedoston latauskansioonsa tai kysyy, minne se pannaan, jos olet asettanut sen kysymään. Uusi tallennus tekee uuden latauksen; selain voi nimetä sen `Part1 (1).partcraft.json` vanhan korvaamisen sijaan. Nimeä tai siirrä tiedostoja haluamallasi tavalla kohteessa {{pick:mac=Finder|windows=Resurssienhallinta|linux=tiedostonhallinta}}.

Muut merkit kuin kirjaimet, numerot, välilyönnit, `_`, `.` ja `-` osan nimessä muuttuvat tiedostonimessä merkiksi `_`.

:::tip
Useimmissa selaimissa on asetus, joka kysyy, minne kukin lataus tallennetaan. Ota se käyttöön, jos haluat ”Tallenna nimellä” -valinnan joka kerta: Chromessa ja Edgessä se on asetusten Lataukset-kohdassa; Firefoxissa kohdassa Yleiset, Tiedostot ja sovellukset; Safarissa kohdassa Yleiset, Tiedostojen latauspaikka.
:::

Lisää siitä, minne lataukset menevät ja miten pidät tiedostot turvassa: [Minne tiedostosi päätyvät](common:your-files).

## Vienti

{{ui:Vie}}-valikko kirjoittaa muita muotoja. Jokainen on lataus, nimetty osan mukaan.

| Valikkokohta | Tiedosto | Mitä siinä on |
|---|---|---|
| {{ui:STL 3D-tulostukseen}} | `<name>.stl` | Binäärinen STL kiintokappaleen kolmioista, millimetreinä, **Z ylös** |
| {{ui:3MF 3D-tulostukseen}} | `<name>.3mf` | 3MF, jossa kiintokappale on yhtenä kohteena, millimetreinä, **Z ylös** |
| {{ui:STEP AP242 (tarkka kiintokappale)}} | `<name>.step` | Ei vielä toteutettu tässä versiossa (himmennetty): se tarvitsee tarkan ytimen |
| {{ui:STEP AP214 (tarkka kiintokappale)}} | `<name>.step` | Ei vielä toteutettu tässä versiossa (himmennetty) |
| {{ui:STEP (tahkoitettu, verkkoydin)}} | `<name>.step` | Verkon tasaisista pinnoista tehty kiintokappale: **pyöreät pinnat ovat monia pieniä tasaisia tahkoja**. Millimetreinä, PartCraftin omilla akseleilla (Y ylös). STEP, jota käytetään muihin CAD-ohjelmiin tässä versiossa |
| {{ui:DXF luonnoksesta tai tasaisesta pinnasta}} | `<name> - <sketch>.dxf` tai `<name> - face.dxf` | DXF R12. Luonnos: viivat, kaaret, ympyrät ja pisteet luonnoksen omissa koordinaateissa, tasoilla PROFILE, CONSTRUCTION ja POINTS. Valittu tasainen pinta: sen ääriviivat suljettuina murtoviivoina (pyöreät särmät tahkoinaan) |
| {{ui:Piirustus (PDF): näkymät, leikkaus, yksityiskohta, GD&T}} | `<name> - drawing.pdf` | A3-piirustusarkki: kolme näkymää, isometrinen, leikkaus ja yksityiskohta jos asetettu, kokonaismitat, GD&T-symbolit, piirustusotsikko |

:::note
{{ui:STEP AP242 (tarkka kiintokappale)}} ja {{ui:STEP AP214 (tarkka kiintokappale)}} eivät ole vielä toteutettuja tässä versiossa: käytä {{ui:STEP (tahkoitettu, verkkoydin)}}. Siinä on oikea muoto ja tilavuus, mutta jokainen pyöreä pinta on monia tasaisia tahkoja, joten muut ohjelmat eivät voi valita reikää sylinterinä. Aseta ensin **Käyrät** hienommaksi, jos sillä on merkitystä.
:::

- Viennit koskevat näytöllä olevaa osaa. Vienti on pois käytöstä kokoonpanossa; kokoonpanon vientiä ei ole vielä.
- STL, 3MF, tahkoitettu STEP ja pinnan DXF koostuvat aina tahkoista. **Käyrät**-asetus (oikeassa paneelissa, kun mitään ei ole valittuna) määrää niiden hienouden, 32:sta 256:een tahkoa kierrosta kohti. Valitse Hieno tai Erittäin hieno ennen STL:n tai 3MF:n vientiä sileää tulostusta varten.
- PDF-piirustus käyttää lukijan sisäänrakennettua Helvetica-fonttia. Merkit, joita se ei voi näyttää, tulostuvat merkkinä ”?”.

Vaihe vaiheelta: [Vienti tulostusta, STEP:iä ja DXF:ää varten](topic:export-files) ja [Piirustusarkin tekeminen](topic:drawing-pdf).

## Tallentamaton työ

- PartCraft säilyttää avoimen osan tai kokoonpanon palautuskopiota tässä selaimessa hetken jokaisen muutoksen jälkeen, joten kaatuminen tai suljettu välilehti ei hävitä sitä: seuraavalla PartCraftin avauskerralla se kysyy ”Palautetaanko työsi?”. Se ei ole tallennus: tallenna tiedostoon säilyttääksesi työsi. Katso [Tallentamattoman työn palauttaminen](common:recover).
- Jos yrität sulkea välilehden tai ladata sivun uudelleen tallentamattomien muutosten kanssa, selain kysyy ”Poistutaanko sivustolta?”. Se on selaimen oma ruutu; PartCraft ei voi muuttaa sen sanamuotoa.
- {{ui:Uusi}}, {{ui:Avaa}} ja kokoonpanon sulkeminen kysyvät ennen tallentamattomien muutosten hylkäämistä.

## Online ja offline

Kaikki tapahtuu tietokoneellasi: verkkoydin (WebAssembly-ohjelma) ladataan sovelluksen mukana ja rakentaa geometrian paikallisesti, ja tiedostot luetaan levyltäsi ja kirjoitetaan sille. Osatietoja ei kulje verkon yli. Katso [Verkkoydin](topic:solid-kernels).

Jos haluat työskennellä täysin ilman yhteyttä, tallenna PartCraft offline-käyttöön, kun olet online: valitse {{ui:Tallenna offline-käyttöön}} sovelluspalkissa ja odota, kun se laskee (”Tallennetaan 40 / 212”), kunnes se sanoo **Offline valmis**. Tallennettu kopio sisältää 3D-kirjaston ja verkkoytimen, joten sen jälkeen mallinnus, tallennus, kaikki viennit ja piirustukset toimivat offline. Jos siinä lukee **Tallennus ei onnistunut**, napsauta sitä yrittääksesi uudelleen online-tilassa; **Offline ei käytettävissä** tarkoittaa, että tämä selainikkuna ei voi säilyttää kopiota (yksityiset ikkunat ja jotkin hallitut tietokoneet). Kun kopio on tallennettu, **Offline valmis** -napsautus tarjoaa {{ui:Tallenna uudelleen (hae uusin versio)}} ja {{ui:Poista offline-kopio}}. Lisätietoja: [Offline-työskentely](common:offline).

:::online
Olet online. Vaikka et tallentaisi offline-käyttöön, kun PartCraft on ladattu ja tilarivin merkki sanoo ”Verkkoydin”, voit jatkaa työskentelyä, vaikka yhteys katkeaisi. Älä vain lataa sivua uudelleen ennen kuin olet taas online-tilassa.
:::

:::offline
Olet offline. Jos PartCraft on jo auki, jatka työskentelyä; tallennus ja vienti toimivat yhä. Jos sovelluspalkissa lukee **Offline valmis**, PartCraft avautuu myös alusta asti ilman yhteyttä; muuten älä lataa tätä välilehteä uudelleen.
:::

## Erot selainten välillä

- **Lataukset.** Jokaisella selaimella on oma latauskansionsa ja oma tapansa kysyä. Jos selain kysyy, saako tämä sivusto ladata tiedostoja, salli se, tai tallennus ja vienti eivät voi toimia.
- **Vedä ja pudota** -tiedostot näkymään toimii Chromessa, Edgessä, Firefoxissa ja Safarissa.
- **Tiedostot puhelimesta tai tabletista.** iPhonessa ja iPadilla Avaa näyttää Tiedostot-sovelluksen; tallennetut tiedostot menevät kohtaan Tiedostot, Lataukset. Androidilla ne menevät Lataukset-kansioon.

Tiedostojen sisällössä ei ole eroa selainten tai käyttöjärjestelmien välillä.
