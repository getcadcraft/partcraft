---
title: Vienti tulostukseen, STEP- ja DXF-muotoon
summary: Vie osa STL- tai 3MF-tiedostona 3D-tulostukseen, tarkkana STEP-kiintokappaleena muihin CAD- ja CAM-ohjelmiin sekä luonnos tai tasainen pinta DXF-tiedostona laser- ja vesisuihkuleikkaukseen.
keywords: vienti, tallenna nimellä, ifc, bim, ominaisuusjoukot, stl, 3mf, 3D-tulostus, viipalointiohjelma, step, stp, tarkka step, b-rep, ap242, ap214, cam, konepaja, jyrsintä, dxf, laser, vesisuihku, cnc, litteä kuvio, profiili, verkko, tahkoitettu
from: e1de71d5
---

Viennit ovat kopioita muissa muodoissa. Säilytä myös `.partcraft.json`-tiedosto: se on ainoa tiedosto, jonka PartCraft voi avata uudelleen ja muokata.

Kaikki viennit koskevat näytöllä olevaa osaa millimetreinä. Kokoonpanossa STL-, 3MF-, STEP- ja Piirustus (PDF) -viennit vievät sen sijaan koko kokoonpanon: katso [Osaluettelo, räjäytyskuvat ja liikkuvat osat](topic:assembly-bom-explode). Jos kiintokappaletta ei ole vielä: ”Kiintokappaletta ei ole vielä vietäväksi.”

## 3D-tulostukseen: STL tai 3MF

1. Valinnainen: pyöreille pinnoille napsauta tyhjää tilaa, jotta mitään ei ole valittuna, ja aseta oikealla paneelilla **Kaarevuus** arvoon **Hieno (128 / kierros)** tai **Erittäin hieno (256 / kierros)**. STL ja 3MF koostuvat aina kolmioista.
2. Valitse {{ui:Vie}}, sitten {{ui:STL 3D-tulostukseen}} tai {{ui:3MF 3D-tulostukseen}}.
3. Tiedosto ladataan. Tilarivi kertoo esimerkiksi: ”Viety: Part1.stl (binääri, mm, Z ylös, 1536 kolmiota).”

Molemmat muodot ovat **Z ylös** -muodossa, kuten tulostimet ja viipalointiohjelmat odottavat. PartCraftin oma maailma on Y ylös, joten vienti kääntää osan: se, mikä osoittaa ylös PartCraftissa (suorassa kulmassa Ylätasoon nähden), osoittaa ylös viipalointiohjelmassa, ja Ylätasolle piirretty osa makaa tulostusalustalla tasaisena. Aseta lopullinen suunta tarvittaessa viipalointiohjelmassa.

3MF on uudempi ja pienempi muoto, jonka viipalointiohjelmat lukevat yksiköineen. Käytä STL:ää, jos ohjelma ei hyväksy 3MF:ää.

Tarkistaaksesi ensin, että osa on suljettu, mahtuu tulostimesi alustalle ja seisoo tasaisen pinnan varassa, käytä {{ui:Vie}} › {{ui:Tarkista 3D-tulostusta varten (STL tai 3MF)…}}: katso [Valmistele osa 3D-tulostukseen](topic:print-3d).

## Muihin CAD-ohjelmiin: STEP

Valitse {{ui:Vie}}, sitten {{ui:STEP AP242 (tarkka kiintokappale)}}. Se kirjoittaa osan yhtenä tarkkana kiintokappaleena millimetreinä, käännettynä Z ylös -asentoon. Pyöreät pinnat kirjoitetaan todellisina sylintereinä, kartioina, palloina ja toruksina, ja niiden reunat todellisina ympyröinä, jotta toinen ohjelma voi valita reiän reikänä. Kiintokappale, joka on avattu STEP-tiedostosta, säilyttää sen tiedoston tasaiset pinnat, sylinterit, kartiot, pallot ja toruksit, joten nekin menevät ulos tarkkoina. Pinnat, joilla ei ole tällaista pintaa (splinen sivu, mallinnettu kierre, STL-, OBJ- tai 3MF-verkosta tehty kappale, STEP-tiedoston splinen, pyyhkäistyt ja kierretyt pinnat), jäävät samaan kiintokappaleeseen tasaisina facetteina, ja tilarivi kertoo niiden määrän. Tilarivi kertoo esimerkiksi: ”Viety: Flange.step (AP242, tarkka kiintokappale, mm, Z ylös): 14 pintaa todellisilla pinnoillaan (10 sylinterimäistä, 1 kartiomaista, 0 pallomaista, 0 toruksen muotoista), 0 sovitettua särmäkäyrää.” Se sisältää vain kiintokappaleen: ei historiaa, ei luonnoksia, ei piirustusta. Jos toinen ohjelma lukee vain AP214:ää, valitse {{ui:STEP AP214 (tarkka kiintokappale)}}: sama kiintokappale tuon vanhemman skeeman mukaisena.

Mikä on tarkkaa ja mikä ei:

- Tasaiset pinnat, sylinterit (reiät, korokkeet, suorien särmien pyöristykset), kartiot (upotukset, kaltevuudet), pallot ja toruksit ovat tarkkoja, samoin niiden suorat, ympyrän- ja ellipsinmuotoiset reunat. **Kaarevuus**-asetus ei muuta niitä.
- Missä kaksi pyöreää pintaa leikkaa (reikä poratu akselin läpi), reuna on sujuva käyrä, joka on sovitettu molempiin pintoihin 0,00001 mm:n tarkkuudella; ”sovitettuja särmäkäyriä” laskuri laskee ne.
- Osan sisään suljettu ontto tila kirjoitetaan kiintokappaleen tyhjiönä. Useat erilliset kappaleet kirjoitetaan useina kiintokappaleina.
- Kokoonpanoa ei vielä kirjoiteta tarkkana STEP-tiedostona: vie jokainen osa erikseen.

Tiedosto on tarkistettu lukemalla se takaisin OpenCascadella, joka raportoi kelvolliset kiintokappaleet tilavuuksineen, jotka on laskettu käsin. Sitä ei ole vielä avattu jokaisessa CAD- tai CAM-ohjelmassa; jos jokin hylkää tiedoston, {{ui:STEP (tahkoitettu, verkkoydin)}} kirjoittaa saman muodon tasaisina pintoina (PartCraftin omissa akseleissa, Y ylös), ja ole hyvä ja kerro siitä {{ui:Ohje}} › {{ui:Ilmoita ongelmasta}} -kautta.

Koneistukseen työtila Valmistus kirjoittaa tarkan kiintokappaleen myös asetuksen omissa työkoordinaateissa: katso [Tee työstörata ja G-koodi](topic:manufacture#exact-step-for-the-shop).

## BIM-ohjelmiin: IFC kaikilla ominaisuuksilla

Valitse {{ui:Vie}}, sitten {{ui:IFC 4 (kaikilla ominaisuuksilla)}}. Se kirjoittaa osan IFC 4 -elementtinä rakennus- ja laitosmalleihin, sen muodon kolmioina (Z ylös, millimetreinä) ja sen, mitä PartCraft tietää siitä, ominaisuusjoukkoina:

| Ominaisuusjoukko | Sisältää |
|---|---|
| **PartCraft_Part** | Nimi, materiaali ja sen tiheys, aktiivinen konfiguraatio, kappaleiden määrä; kokoonpanossa myös osanumero ja kuvaus |
| **PartCraft_Parameters** | Jokainen osan parametri arvoineen; kaavan lauseke ja huomautus ovat ominaisuuden kuvauksessa |
| **PartCraft_TitleBlock** | Piirustusotsikon kentät, jotka täytit (nimike, piirustusnumero, revisio, yritys, piirtäjä, tarkastaja ja hyväksyjä, päivämäärä, viimeistely, yleistoleranssi), ja arkin koko |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Tilavuus, pinta-ala, massa (materiaalin kanssa) ja kokonaiskoko |

Materiaali liitetään IFC-materiaalina, ja piirustusnumero on elementin tunniste. Kokoonpanossa jokainen osa kirjoitetaan kerran tyyppinä, joka sisältää sen ominaisuudet, ja jokainen kopio sijoitetaan siihen, minne kokoonpano sen asettaa, omine arvoineen joukossa **PartCraft_Instance**: sen nimi, sen kohdenumero osaluettelossa ja se, onko se maadoitettu osa.

## Laserille, vesisuihkulle tai CNC-profiileille: DXF

Kahta DXF-tyyppiä, molemmat versiolla R12, jonka jokainen CAD- ja CAM-ohjelma avaa:

### Luonnos

1. Valitse luonnos historiasta (tai pidä se auki).
2. Valitse {{ui:Vie}}, sitten {{ui:DXF luonnoksesta tai tasaisesta pinnasta}}. (Luonnoksen oikeassa paneelissa on myös {{ui:Vie DXF:nä}}.)

Saat tiedoston `<part> - <sketch>.dxf` luonnoksen omissa koordinaateissa: viivat, todelliset kaaret ja ympyrät tasolla **PROFILE**, rakennusgeometria tasolla **CONSTRUCTION** ja irralliset pisteet tasolla **POINTS**.

### Kiintokappaleen tasainen pinta

1. Napsauta näkymässä tasaista pintaa (esimerkiksi reikien kanssa varustetun levyn yläpintaa).
2. Valitse oikeasta paneelista {{ui:Vie pinta DXF:nä}} tai {{ui:Vie}}, sitten {{ui:DXF luonnoksesta tai tasaisesta pinnasta}}.

Saat tiedoston `<part> - face.dxf`: pinnan ääriviivan ja kaikki siinä olevat reiät. Pyöreä reikä (kokonainen ympyrä, jossa sylinteri kohtaa pinnan: porattu reikä tai avatun STEP-tiedoston reikä) kirjoitetaan todellisena ympyränä reiän omalla keskipisteellä ja säteellä. Muut ääriviivat ovat suljettuja polyviivoja, ja niiden pyöreät reunat (pyöristyskulmat, urat, kaaret) ovat facetteja, joten aseta ensin **Kaarevuus** arvoon Hieno, jos työkalu seuraa niitä tarkasti. Tilarivi kertoo ääriviivojen määrän, kuinka monta niistä on todellisia ympyröitä, ja pinnan pinta-alan.

Jos ei luonnosta eikä tasaista pintaa ole valittu: ”Avaa tai valitse luonnos tai valitse tasainen pinta, jotta DXF voidaan viedä.”

## Piirustus

PDF-piirustuksella on oma ohjeensa: [Tee piirustusarkki](topic:drawing-pdf).

## Muodot, joita ei ole saatavilla

glTF, OBJ, IGES ja Parasolid eivät ole vietävissä tässä versiossa. DWG kirjoittaa vain muunnospaketti piirustusarkkina: katso [Tee muunnospaketti kokoonpanoistasi](topic:variant-pack). Katso [Tiedostomuodot](topic:file-formats).
