---
title: Avaa STEP-tiedosto ja rakenna sen päälle
summary: Tuo toimittajan tai toisen CAD-ohjelman STEP-malli PartCraftiin kiintokappaleena, uutena osana tai nykyiseen osaan lisättynä, aseta ylös-suunta ja lisää siihen luonnoksia ja muotoelementtejä.
keywords: step, stp, tuonti, avaa step, ap203, ap214, ap242, toimittajan malli, historiaton kiintokappale, tuotu kiintokappale, ylös-akseli, Z ylös, Y ylös, kolmiot, fasetoitu, kokoonpano-step
from: ca0eca5f
---

PartCraft avaa STEP-tiedostot (`.step` tai `.stp`, AP203, AP214 ja AP242) **kiintokappaleina**, joihin voi piirtää luonnoksia, leikata, porata ja yhdistää omia muotoelementtejä. Kappaleella ei ole omaa historiaa: et voi muuttaa mittoja, joilla se tehtiin, vain lisätä siihen tai leikata siitä.

Tässä versiossa kaikki osat rakennetaan verkkoytimellä, joten STEP-tiedosto **luetaan kolmioina**: tasaiset pinnat pysyvät tasaisina, ja kaarevat pinnat (sylinterit, kartiot, pallot, toruksit, B-spline-pinnat) muuttuvat moniksi pieniksi tasaisiksi pinnoiksi. Sen tilavuus on prosentin murto-osan tarkkuudella oikea. Kaarevien pintojen säilyttäminen tarkasti vaatii tarkan ytimen, jota tässä versiossa ei ole.

## STEP-tiedoston avaaminen

1. Valitse {{ui:Avaa}} tai paina {{key:Mod+O}} ja valitse `.step`- tai `.stp`-tiedosto. Voit myös pudottaa sen 3D-näkymään.
2. PartCraft lukee tiedoston ja näyttää, mitä siinä on, esimerkiksi: ”AP214-tiedosto: 1 kiintokappale, 10 pintaa, luettu kolmioina.” Alla ovat kolmioiden määrä, kaikki, mitä jouduttiin jättämään pois tai yhdistämään, sekä se, onko tulos suljettu.
3. Tarkista **Ylös tiedostossa**. STEP-tiedosto kertoo oman yksikkönsä (millimetriä, tuumaa, metriä…); PartCraft muuntaa sen millimetreiksi, joten **Yksiköt tiedostossa** näyttää Millimetrit, ”tiedosto kertoo niin”. **Koko tässä** näyttää, kuinka suuri siitä tulee.
4. Valitse {{ui:Avaa kappaleena}}, jos haluat tyhjän osan, tai {{ui:Lisää tähän osaan}} / {{ui:Uusi osa}}, kun osassa on jo muotoelementtejä. Lisäys kysyy **Käyttötapaa**: lisää, leikkaa tai säilytä vain päällekkäinen osa.

Historiaan ilmestyy **Imported1**-muotoelementti, ja tilarivi kertoo esimerkiksi: ”plate.step on kiintokappale: 57995.937 mm³, 6 tasaista pintaa, joille voi piirtää luonnoksen.”

## Kokoonpano-STEP

Kokoonpano tulee sisään **yhtenä kappaleena**, jossa jokainen osa on siinä paikassa, johon tiedosto sen sijoittaa (”3 tiedostoon sijoitettua osaa tulevat sisään siellä, missä ne ovat”). Osa, jota on käytetty kahdesti, tulee sisään kahdesti. Osien nimiä ja kokoonpanon puurakennetta ei säilytetä.

## Aseta ylös-suunta

Useimmat CAD-ohjelmat käyttävät Z ylös -suuntaa; PartCraft käyttää Y ylös -suuntaa. Oletuksena PartCraft kääntää tiedoston niin, että sen Z osoittaa tässä ylöspäin. Jos osa tulee makaamaan kyljellään, valitse **Imported1** ja aseta **Ylös tiedostossa** arvoon **Y ylös**. **Yksiköt tiedostossa** ja **Käyttötapa** voi muuttaa myös siellä; jokainen muutos on yksi kumoamisvaihe.

## Rakenna sen päälle

- Napsauta kappaleen tasaista pintaa ja valitse {{ui:Luonnostele tälle pinnalle}}. STEP-mallin tasaiset pinnat säilyttävät paikkansa, kun kappale rakennetaan uudelleen.
- Lisää leikkauksia, reikiä, korotuksia, kuvioita ja peilauksia kuten millä tahansa osalla.
- Tarkista koko **Osa**-ruudusta: tilavuus, pinta-ala ja koko.

Pyöristykset, viisteet ja kuoret vaativat tarkan ytimen, kuten missä tahansa osassa tässä versiossa ([Verkkoydin](topic:solid-kernels)).

## Missä se säilytetään

Kolmiot tallennetaan `.partcraft.json`-tiedoston **sisään**, joten osatiedosto on itsenäinen: STEP-tiedostoa ei tarvita enää.

## Ilmoitukset

| Ilmoitus | Mitä se tarkoittaa |
|---|---|
| '"part.stp" ei ole STEP-tiedosto (se ei ala tekstillä ISO-10303-21).' | Tiedosto ei ole pelkkää STEP-tekstiä. Pyydä lähettäjältä AP203-, AP214- tai AP242-STEP-tiedosto |
| "STEP-tiedostoa ei voitu lukea: sen datalohko puuttuu tai on vioittunut." | Tiedosto on katkennut tai vioittunut. Kopioi se uudelleen |
| "STEP-tiedosto ei sisällä kiintokappaletta eikä pintakappaletta: tuotavaa ei ole." | Tiedosto sisältää vain piirroksia, pisteitä tai dataa. Pyydä kiintokappaletta |
| "Tuo STEP-tiedosto on liian suuri (yli 60 MB) tuotavaksi tässä." ja lukijan muut rajat (merkinnät, pinnat, kolmiot) | Yksinkertaista malli lähteessä tai lähetä osat yksitellen |
| "… tiedoston vioittuneet rivit ohitettiin." | Osaa riveistä ei voitu lukea; loput tuotiin. Tarkista kappale |
| "… pintoja ei voitu muuttaa kolmioiksi, ja ne jätettiin pois." | Nämä pinnat jättävät aukkoja, joita PartCraft yrittää täyttää; jos kappale ei sulkeudu, sitä ei lisätä |
| "… tyyppiä, jota ei lueta (…), olevia pintoja ohitettiin." | Harvinainen pintatyyppi. Pyydä malli tavallisilla tai B-spline-pinnoilla |
| "Se ei sulkeudu …" | Pinnat eivät muodosta suljettua kiintokappaletta (pintamalli tai pois jätettyjä pintoja). PartCraft näyttää aukot eikä lisää mitään |

## Rajoitukset

- Kaarevat pinnat piirretään ja mitataan tasaisina fasetteina, kuten kaikissa tämän version osissa. PartCraft säilyttää tiedoston omat tasaiset pinnat, sylinterit, kartiot, pallot ja toruksit kappaleen kanssa, joten {{ui:Vie}} › {{ui:STEP AP242 (tarkka kiintokappale)}} kirjoittaa ne takaisin todellisina pintoina, reiät reikinä ja lisäämiesi muotoelementtien kanssa. Tiedoston splini-, pyyhkäisy- tai pyörähdyspinnat pysyvät viennissä fasetteina. Ennen versiota 0.9.1 tallennetussa osassa ei ole säilytettyjä pintoja: avaa STEP-tiedosto uudelleen, niin ne saadaan.
- Kun tasainen pinta on valittu, {{ui:Vie}} › {{ui:DXF luonnoksesta tai tasaisesta pinnasta}} kirjoittaa tiedoston pyöreän reiän todellisena ympyränä.
- Värejä, kappaleiden nimiä, kokoonpanon rakennetta ja PMI-tietoa (tiedoston toleransseja) ei lueta.
- STEP-tiedostojen lisäksi PartCraft avaa STL-, OBJ- ja 3MF-verkkoja ([Avaa STL, OBJ tai 3MF](topic:open-meshes)) sekä `.3dm`-tiedostoja ([Avaa .3dm-malli](topic:open-3dm-files)) kiintokappaleina. IGES-tiedostoja ja muiden ohjelmien omia tiedostoja ei tueta.
- Osa, jossa on STEP-kiintokappale, joka on tuotu versiolla, jossa oli tarkka ydin, säilyttää STEP-tekstin; tämä versio ohittaa tämän muotoelementin (”ei vielä toteutettu”). Avaa STEP-tiedosto uudelleen, jotta se tuodaan kolmioina.
