---
title: Verkkoydin
summary: Tämä PartCraftin versio rakentaa jokaisen osan selaimessa toimivalla verkkoytimellä. Mitä se tarkoittaa pyöreille pinnoille, tilavuuksille ja tiedostoille, miten tiedät sen toimivan ja mitkä muotoelementit odottavat tarkkaa ydintä.
keywords: ydin, verkko, monisto, tarkka, b-rep, fasetoitu, käyrät, opencascade, occt, pyöristys vaatii tarkan, ei vielä toteutettu, offline, webassembly
from: f931645c
---

Geometriaydin on moottori, joka muuttaa historiasi kiintokappaleeksi. Tässä PartCraftin versiossa on yksi: **verkkoydin** (manifold-3d). Se toimii tietokoneellasi pienenä WebAssembly-ohjelmana ja on valmis hetken kuluttua sovelluksen avautumisesta. Osasi tietoja ei lähetetä minnekään.

| | Verkkoydin |
|---|---|
| Pyöreät muodot | Tasaiset fasetit. **Käyrät** osan paneelissa määrittää tarkkuuden |
| Tilavuudet ja pinta-alat | Fasetoidusta kiintokappaleesta, pyöreillä osilla hieman alhaalla |
| Luonnokset, pursotus, leikkaus, kierto, reiät, toistot, peilaus, referenssitasot | Kyllä |
| Pyöristys ja viisto | Suorien reunojen kohdalla tasaisten pintojen välissä; kohtaavat pyöristykset katkaistaan vinoon |
| Onttoaminen ja vinous | Onttoaminen avaa tasaiset pinnat (tarkka seinämän paksuus); vinous kallistaa tasaisia pintoja |
| Viennit | STL, 3MF, STEP (tarkka: pyöreät pinnat kirjoitetaan todellisilla pinnoillaan; tai fasetoitu), piirustus-PDF ja DXF |
| Piirustusnäkymät | Piirretään fasettien mukaan, mukaan lukien leikkausnäkymät |
| Pinnat ja reunat | Nimettyjä ja tunnistettuja tyypin mukaan (tasainen, sylinteri, kartio, pallo, toroidi; suora, ympyrä), otettu luonnoksista: Simulointi-, Generatiivinen- ja Valmistus-työtilat, Mittaa, valinta ja reikätaulukko käyttävät niitä |

Tilarivin oikeassa päässä oleva merkki sanoo **Verkkoydin**, kun se rakentaa osaasi.

## Mitä odottaa tarkkaa ydintä

Tarkka (B-rep) ydin säilyttää todelliset ympyrät, sylinterit ja kartiot sekä sileät pyöristykset mille tahansa reunalle; siihen rakentuvat myös sweep-, loft-, pinnat, levytyö, ribit, useat kappaleet ja STEP-tuonti, jossa kaarevat pinnat säilyvät tarkkoina. (Tarkka STEP-vienti ei odota sitä: verkkoydin tuntee kunkin pinnan todellisen pinnan luonnoksesta, ja vienti kirjoittaa ne.) Aiemmat PartCraftin kokeiluversiot käyttivät siihen OpenCascadea. Sen lisenssi (LGPL) ei sovi tähän julkaisuun, jossa kaikki sovellukset ovat Apache-2.0-lisenssin alaisia ja käyttävät vain sallivasti lisensoituja kirjastoja, joten sitä ei ole mukana. Tälle ei ole päivämäärää.

Siihen asti nämä ominaisuudet sanovat **Ei vielä toteutettu**, kun valitset ne: tilarivi kertoo syyn, ja niiden painikkeiden työkaluvihjeet päättyvät tekstiin ”ei vielä toteutettu (tarvitsee tarkan ytimen)”. [Mitä ei ole vielä toteutettu](topic:not-built-yet) listaa kukin ominaisuus ja kertoo, mitä tehdä sen sijaan.

Osa, joka on tehty niillä aiemmassa koontiversiossa, avautuu edelleen. Nämä ominaisuudet pysyvät historiassa merkittyinä ei-toteutetuiksi (vie hiiri päälle nähdäksesi syyn), muu osa rakentuu, ja tallennus säilyttää ne muuttumattomina.

## Pyöreät pinnat ja Käyrät

Verkkoydin piirtää ympyrän monikulmiona. **Käyrät** osan paneelissa määrittää, kuinka monta sivua täydellä ympyrällä on; enemmän sivuja näyttää sileämmältä ja mittaa lähemmäs todellista arvoa, mutta rakentuu hitaammin. Tilavuudet, pinta-alat ja etäisyydet kohdasta {{ui:Mittaa}} ovat fasetoidusta kiintokappaleesta: reiälle tai korotukselle ne ovat hieman pienempiä kuin pyöreän muodon.

## Verkossa ja offline

Verkkoydin on osa sovelluksen omaa latausta. Työskennelläksesi ilman yhteyttä tallenna PartCraft offline-käyttöön yhteyden ollessa auki: valitse sovelluspalkista {{ui:Tallenna offline-käyttöön}} ja odota, kunnes se sanoo **Offline valmis**. Lisätietoja: [Työskentely offline-tilassa](common:offline).
