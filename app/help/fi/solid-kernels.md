---
title: Verkkoydin
summary: Tämä PartCraftin versio rakentaa jokaisen osan verkkoytimellä, joka toimii selaimessasi. Mitä se tarkoittaa pyöreille pinnoille, tilavuuksille ja tiedostoille, miten näet sen toimivan ja mitkä muotoelementit odottavat tarkkaa ydintä.
keywords: ydin, verkko, manifold, tarkka, b-rep, tahkoitettu, käyrät, opencascade, occt, pyöristys vaatii tarkan, ei toteutettu, offline, webassembly
from: 68d32d16
---

Geometriaydin on moottori, joka muuttaa historiasi kiintokappaleeksi. Tässä PartCraftin versiossa on yksi: **verkkoydin** (manifold-3d). Se toimii tietokoneellasi pienenä WebAssembly-ohjelmana ja on valmis hetki sovelluksen avaamisen jälkeen. Mitään osastasi ei lähetetä minnekään.

| | Verkkoydin |
|---|---|
| Pyöreät muodot | Tasaisia tahkoja. **Käyrät** osapaneelissa säätää hienoutta |
| Tilavuudet ja pinta-alat | Tahkoitetun kiintokappaleen, pyöreillä osilla hieman alhaiset |
| Luonnokset, pursotus, leikkaus, kierto, reiät, toistot, peilaus, vertailutasot | Kyllä |
| Pyöristys ja Viiste | Suorilla särmillä tasaisten pintojen välillä; kohtaavat pyöristykset jiirataan |
| Kuori ja Vetokulma | Kuori avaa tasaisia pintoja (tarkka seinämän paksuus); Vetokulma kallistaa tasaisia pintoja |
| Viennit | STL, 3MF, STEP (tahkoitettu), piirustus-PDF ja DXF |
| Piirustusnäkymät | Piirretään tahkoista, leikkausnäkymät mukaan lukien |
| Pinnat ja särmät | Nimetty ja lajiltaan tunnettu (tasainen, lieriö, kartio, pallo, torus; suora, ympyrä), otettu luonnoksista: Simulointi-, Generatiivinen- ja Valmistus-työtilat, Mittaa, valinta ja reikätaulukko käyttävät niitä |

Tilarivin oikean reunan lähellä oleva merkki sanoo **Verkkoydin**, kun se rakentaa osaasi.

## Mikä odottaa tarkkaa ydintä

Tarkka (B-rep) ydin säilyttää todelliset ympyrät, lieriöt ja kartiot, ja sileät pyöristykset millä tahansa särmällä, pyyhkäisyt, loftit, pinnat, levytyö, uurteet, useat kappaleet, STEP-tuonti ja tarkka STEP-vienti rakentuvat sen varaan. PartCraftin aiemmat lab-versiot käyttivät siihen OpenCascadea. Sen lisenssi (LGPL) ei sovi tähän julkaisuun, jossa jokainen sovellus on Apache-2.0 ja käyttää vain sallivasti lisensoituja kirjastoja, joten sitä ei ole mukana. Millään tässä ei ole päivämäärää.

Siihen asti nämä muotoelementit sanovat **Ei vielä toteutettu**, kun valitset ne: tilarivi kertoo syyn, ja niiden painikkeiden työkaluvihjeet päättyvät sanoihin ”ei vielä toteutettu (tarvitsee tarkan ytimen)”. [Mitä ei ole vielä toteutettu](topic:not-built-yet) luettelee jokaisen sekä sen, mitä tehdä sen sijaan.

Aiemmassa versiossa niillä tehty osa aukeaa yhä. Nämä muotoelementit pysyvät historiassa ei-rakennetuiksi merkittyinä (vie osoitin yhden päälle nähdäksesi syyn), loput osasta rakentuu, ja tallennus säilyttää ne muuttumattomina.

## Pyöreät pinnat ja Käyrät

Verkkoydin piirtää ympyrän monikulmiona. **Käyrät** osapaneelissa määrää, kuinka monta sivua täydellä ympyrällä on; enemmän sivuja näyttää sileämmältä ja mittaa lähempänä todellista arvoa, ja rakentuu hitaammin. Tilavuudet, pinta-alat ja {{ui:Mittaa}}-työkalun etäisyydet koskevat tätä tahkoitettua kiintokappaletta: reiällä tai ulokkeella ne ovat hieman pienempiä kuin pyöreän muodon.

## Online ja offline

Verkkoydin on osa sovelluksen omaa latausta. Jos haluat työskennellä ilman yhteyttä, tallenna PartCraft offline-käyttöön, kun olet online: valitse {{ui:Tallenna offline-käyttöön}} sovelluspalkissa ja odota, kunnes se sanoo **Offline valmis**. Lisätietoja: [Offline-työskentely](common:offline).
