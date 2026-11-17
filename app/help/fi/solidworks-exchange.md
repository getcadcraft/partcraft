---
title: Osien siirtäminen muihin osamallinnusohjelmiin
summary: Lähetä osa toiseen osamallinnusohjelmaan makrona, joka rakentaa sen uudelleen elävällä ominaisuuspuulla. Nimetty STEP ja toisen mallintajan kirjoittaman ominaisuuslistan avaaminen eivät ole vielä toteutettuja tässä versiossa.
keywords: makro, ei vielä toteutettu, swb, vba, ominaisuuspuu, kierros, vie makro, cadcraft-sw.json, nimetty step, ap214, yleiset muuttujat, yhtälöt, alkuperäinen osa
from: 97ca61da
---

PartCraft vaihtaa osia SolidWorksin kanssa molempiin suuntiin ilman tiedostomuotoa, jota kukaan muu ei voi lukea:

- **Ulos:** makro (`.swb`, pelkkää tekstiä), jonka SolidWorks suorittaa rakentaakseen osan itse ominaisuus kerrallaan luonnoksineen, rajoitteineen, mitoituksineen, yleisine muuttujineen ja yhtälöineen. Saat alkuperäisen osan elävällä ominaisuuspuulla, et kuollutta kiintokappaletta.
- **Takaisin:** makro, jonka ajat SolidWorksin sisällä, kirjoittaa osan ominaisuudet ja yhtälöt tiedostoon `.cadcraft-sw.json`. Tämän tiedoston avaaminen PartCraftissa ei ole vielä toteutettu tässä versiossa (se tarvitsee tarkan ytimen).

:::warning
Tätä ei ole vielä testattu SolidWorksissa. SolidWorks toimii vain Windowsissa ja lisenssillä, eikä PartCraft ole koskaan ajanut näitä makroja siinä. Makrot on kirjoitettu SolidWorksin API-dokumentaation perusteella ja tarkistettu tässä rakenteen osalta. Odota ongelmia ja ilmoita niistä; makron kirjoittama loki kertoo, mikä vaihe epäonnistui.
:::

PartCraft ei voi kirjoittaa `.sldprt`-tiedostoa, sillä se muoto on suljettu. Makro on tapa saada alkuperäinen osa.

## Lähetä osa makrona

1. Avaa osa.
2. Valitse {{ui:Vie}} ja sitten {{ui:Makro SolidWorksille (.swb)}}. PartCraft lataa tiedoston `<osa>.swb`; tilarivi kertoo sen kirjoitetun ”ilman tarkkaa ydintä”.
3. Valintaikkuna kertoo, kuinka monta ominaisuutta, yleistä muuttujaa ja yhtälöä makro rakentaa, ja luettelee kaiken, mikä jätetään pois. Tämän version STEP-tiedostoa ei tule makron viereen: käytä {{ui:Vie}} ja sitten {{ui:STEP (fasetoitu, verkkoydin)}}, jos sitä tarvitset.
4. Valitse SolidWorksissa **Työkalut > Makro > Suorita**, valitse `.swb`-tiedosto ja odota. Se luo uuden osan oletusosapohjastasi, asettaa millimetrit ja rakentaa jokaisen ominaisuuden.
5. Lopuksi viesti kertoo, kuinka monta vaihetta tehtiin, kuinka monta epäonnistui ja kuinka monta vastasi PartCraftin kappaletta. Täysi loki, `<osa> macro log.txt`, kirjoitetaan makron viereen.

Mitä makro rakentaa:

| PartCraft | Uudessa osassa |
|---|---|
| Luonnos Etu-, Ylä- tai Oikealla tasolla | Luonnos sillä tasolla, sen viivat, kaaret, ympyrät, pisteet, rajoitteet ja mitoitukset (nimettyinä kuten PartCraftissa, esimerkiksi `k7`) |
| Luonnos pinnalla | Luonnos samalla pinnalla, valittuna pisteellä sen päällä |
| Luonnos kiinteällä tasolla | Referenssitaso kolmen pisteen kautta ja luonnos sillä |
| Pursotus, leikkaus (sokea, läpi kaiken, keskitaso, kaksi suuntaa, kartio) | Korotuspursotus tai leikkauspursotus |
| Kierto, kierretty leikkaus | Kierto saman keskiviivan ympäri |
| Reikä (yksinkertainen, upotus, kartiopää, kierretty) | Yksi tai kaksi leikkausta omilla luonnoksillaan (kierretty reikä on sen porausreikä; ei kierrettä) |
| Lineaarinen ja pyöreä toisto, peilaus | Lineaarinen toisto, pyöreä toisto, peilaus (muotoelementit tai kappale) |
| Pyöristys, viisto, onttoaminen | Pyöristys, viisto ja onttoaminen samoille reunoille ja pinnoille, valittuna pisteillä |
| Parametrit ja yhtälöt | Yleiset muuttujat ja yhtälöt uudelleennimetyille mitoituksille |
| Pois käytöstä poistetut ominaisuudet, takaisinkelauspalkki | Poistettu samalla tavalla; takaisinkelauspalkki samassa kohdassa |

Jokaisen kiintokappale-ominaisuuden jälkeen makro vertaa kappaleen tilavuutta ja kokoa PartCraftin vastaaviin. Kun ne eroavat, makro kääntää sen ominaisuuden suunnan kerran ja tarkistaa uudelleen; jos se ei ole sen parempi, makro kääntää sen takaisin ja kirjoittaa lokiin ”Tarkista”.

### Mitä jätetään pois

Valintaikkuna ja makron alku luettelevat kaiken, mitä ei siirretä, ja syyn. Tänä päivänä se on: tuodut kiintokappaleet (lisää STEP sen sijaan), sweep-, loft-, vinous-, referenssiakselit ja -pisteet, ”ylös asti” -päättöehdot, vain joidenkin ääriviivojen pursottaminen ja kaikki, mikä riippuu niistä. Splinit muuttuvat käyriksi niiden pisteiden kautta. Tässä versiossa ei ole tarkkaa ydintä, joten luonnokset pinnoilla ja ominaisuudet, jotka valitsevat reunoja tai pintoja, jätetään myös pois.

## Lähetä nimetty STEP

Ei vielä toteutettu tässä versiossa: {{ui:STEP SolidWorksille (nimetty, AP214)}} tarvitsee tarkan ytimen, ja sen valitseminen sanoo ”STEP SolidWorksille: ei vielä toteutettu. …”. Tarkan ytimen kanssa tiedosto sisältää osan nimen, millimetrit ja osan värin ja pystyttää Y-akselin ylös, kuten SolidWorks näyttää osat (tavallinen {{ui:STEP AP214 (tarkka kiintokappale)}} -vienti pystyttää Z-akselin ylös). Nimestä katoavat aksenttimerkit, ja muut merkit kuin tavallinen ASCII muuttuvat merkiksi `_`.

## Tuo osa takaisin

Tiedoston avaaminen PartCraftissa (vaihe 3) ei ole vielä toteutettu tässä versiossa: se sanoo ”SolidWorks-viennin avaaminen: ei vielä toteutettu. …”. CadCraft-piirustussovellus avaa tiedoston edelleen ja ottaa sen luonnokset.

1. Valitse {{ui:Tiedosto}} > {{ui:Vie}} > {{ui:Vie makro osien tuomiseksi takaisin (.swb)}} ladataksesi `CadCraftExport.swb` ja aseta se osiesi viereen.
2. Avaa osa SolidWorksissa, valitse **Työkalut > Makro > Suorita** ja valitse `CadCraftExport.swb`. Se kirjoittaa `<osa>.cadcraft-sw.json` osan viereen eikä muuta siinä mitään.
3. Valitse PartCraftissa {{ui:Avaa}} ja valitse tuo tiedosto tai pudota se 3D-näkymään.
4. Tarkan ytimen kanssa PartCraft rakentaa osan uudelleen ominaisuus kerrallaan ja näyttää, mitä teki: esimerkiksi ”5/5 ominaisuutta siirretty SolidWorksista (Flange.SLDPRT)”, jokaisen ominaisuuden, jota se ei voinut siirtää (”Ei siirretty: Sweep1 (Sweep).”), ja vastaako tilavuus SolidWorksin kirjoittamaa.
5. Tallenna se PartCraft-osana {{ui:Tallenna}}-painikkeella.

Luonnokset asettuvat perustasolle, kun ne ovat sellaisella, ja osan vastaavalle tasaiselle pinnalle, kun sellainen on (jolloin ne seuraavat myöhempiä muokkauksia), muuten kiinteälle tasolle. Pyöristysten, viistojen ja onttojen reunat ja pinnat löydetään pisteistä ja säilytetään nimettyinä viitteinä. Yleiset muuttujat muuttuvat parametreiksi (välilyönnit vaihtuvat alaviivoiksi: ”Bolt count” muuttuu muotoon `Bolt_count`), ja yhtälöt muuttuvat yhtälöiksi samoihin mitoituksiin. Mitään ei arvata: kaikki, jolla ei ole vastinetta, luetellaan.

CadCraft-piirustussovellus avaa saman tiedoston ja ottaa sen luonnokset.

:::note
Muoto on `cadcraft-sw-export` versio 1, pelkkää JSONia millimetreinä ja asteina. Uudemmasta makrosta tuleva tai virheellinen tiedosto hylätään syyn kanssa.
:::
