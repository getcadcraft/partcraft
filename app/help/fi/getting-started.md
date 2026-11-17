---
title: Aloita PartCraftin käyttö
summary: Mitä PartCraft tekee tänään, mitä selaimesi tarvitsee ja ensimmäinen osa kymmenessä minuutissa, luonnoksesta tallennettuun tiedostoon.
keywords: aloitus, ensimmäinen käynnistys, pikaopas, johdanto, opetusohjelma, ensimmäinen osa, levy, parametrinen, osamallinnin
from: 7d43283f
---

PartCraft on CadCraft-perheen parametrinen osa- ja kokoonpanosovellus. Piirrät 2D-luonnoksen, sidot sen suhteilla ja mitoituksilla ja muutat sen kiintokappaleeksi muotoelementeillä, kuten pursotus, kierros ja reikä. Mitä tahansa lukua voi muuttaa myöhemmin: osa rakentuu uudelleen historiastaan. Osat siirretään sitten kokoonpanoihin, joissa liitokset sijoittavat ne ja antavat tarkistaa liikkeen.

Mitä tämä versio tekee:

| Tehtävä | Mitä saat |
|---|---|
| Luonnokset | Viivat, suorakulmiot, ympyrät, kaaret, pisteet ja keskiviivat suhteilla ja mitoituksilla sekä elävällä tilalla: alimääritelty, täysin määritelty tai ylimääritelty |
| Kiintokappale-muotoelementit | Pursotus, leikkaus, kierros, kierrosleikkaus, yksinkertaiset ja upotetut reiät, lineaariset ja ympyrämäiset kuviot, peilaus, pyöristykset ja viisteet suorilla reunoilla litteiden pintojen välillä sekä kuoret ja vedot litteillä pinnoilla. Pyyhkäisyt, lofttaukset ja muut tarkkaa ydintä vaativat muotoelementit eivät ole vielä toteutettu tässä versiossa: katso [Mitä ei vielä ole toteutettu](topic:not-built-yet) |
| Historia | Muokkaa minkä tahansa muotoelementin lukuja, pysäytä, palauta, järjestä uudelleen ja poista, kumoamisella |
| Kokoonpanot | Osat, jotka on yhdistetty jäykillä, kiertyvillä ja liukuvilla liitoksilla, törmäystarkistus ja liiketarkistus |
| Piirustukset | A3-arkki kolmella näkymällä, isometrinen, leikkaus, yksityiskohtanäkymä, kokonaismitat, datumit, muotoilukehykset ja pinnanlaatusymbolit, vietynä PDF-muodossa |
| Tiedostot | Omat osa- ja kokoonpanotiedostot. Ulostulona STL, 3MF, tarkka STEP, DXF ja PDF |

Kaikki toimii selaimessasi, omalla tietokoneellasi. **Mitään ei lähetetä.** Katso [Tiedostot: avaaminen, tallentaminen ja vienti](topic:files), missä tiedostot ovat.

## Mitä tarvitset

- Ajantasainen Chrome, Edge, Firefox tai Safari, jossa **WebGL** (3D-grafiikka) ja **WebAssembly** ovat päällä. Molemmat ovat oletuksena päällä. Kiintokappaleen geometrian rakentaa WebAssembly-verkkoydin, joka latautuu sovelluksen mukana: katso [Verkkoydin](topic:solid-kernels).
- Hiiri on helpoin. Kosketusalusta toimii, ja kosketusnäytöt toimivat katseluun ja yksinkertaiseen luonnosteluun: katso [Kosketusalusta, kosketus ja pienet näytöt](topic:trackpad-and-touch).
- Vähintään 1280 pikselin levyinen näyttö näyttää koko työkalurivin yhdellä rivillä. Kapeammat ikkunat vierittävät työkalurivin sivusuunnassa. Puhelimella paneelit avautuvat arkkeina alapalkista.

Lisää selaimista: [Selaimet ja tietokoneet](common:browsers).

:::note
PartCraft toimii selaimessa ja työpöydällä CadCraft Studion sisällä. Pilvitallennus ei ole vielä käytettävissä: avaat osia tietokoneeltasi ja tallennat ne takaisin tiedostoina.
:::

## Avaa PartCraft

1. Avaa PartCraft.
2. Odota, kunnes näyttö sanoo ”Ladataan kiintokappaleydintä…”. Ensimmäisellä kerralla tämä kestää hetken.
3. Näet tyhjän 3D-näkymän, jossa on kolme perustasoa, historian vasemmalla (”Part1”, sitten Etutaso, Ylätaso ja Oikea taso) ja laatikon näkymässä, jonka otsikko on ”Aloita osa”.
4. Tilarivin oikeanpuoleisessa päässä oleva siru sanoo ”Verkkoydin”. PartCraft rakentaa tässä versiossa jokaisen osan verkkoydimellä, joten pyöreät pinnat ovat litteitä fasetteja. Voit aloittaa mallintamisen heti.

Jos näkymä kertoo, ettei selain voi näyttää 3D-kuvaa, tai ydin ei latautunut, katso [Vianetsintä](topic:troubleshooting#the-app-does-not-start).

## Ensimmäinen osasi: reiällinen levy

Teet 60 × 40 mm levyn, 10 mm paksun, jossa on 6 mm läpireikä. Yksiköt ovat millimetrejä.

### Piirrä ulkoreuna

1. Napsauta historiassa vasemmalla **Etutaso**. Taso korostuu näkymässä.
2. Valitse työkalurivistä {{ui:Luonnos}} tai paina {{key:S}}. Näkymä kääntyy katsomaan suoraan tasoa, ja Viiva-työkalu on aktiivinen.
3. Paina {{key:R}} Suorakulmio-työkalulle.
4. Siirrä osoitin origoon (pieni punainen ympyrä ristillä). Pieni neliö näyttää, että se napsahtaa. Napsauta.
5. Siirrä ylös ja oikealle ja napsauta uudelleen. Sinulla on suorakulmio. Sen viivat ovat sinisiä: sininen tarkoittaa, että ne voivat vielä liikkua.

### Anna mitat

1. Paina {{key:D}} Mitoitus-työkalulle.
2. Napsauta yläviivaa ja napsauta sitten hieman sen yläpuolella. Numerokenttä avautuu nykyisellä pituudella.
3. Kirjoita `60` ja paina {{key:Enter}}. Suorakulmio muuttuu 60 mm leveäksi.
4. Napsauta vasenta viivaa ja napsauta hieman sen vasemmalla puolella. Kirjoita `40` ja paina {{key:Enter}}.

Näkymän vasemmassa yläkulmassa oleva sirupainike sanoo nyt **Täysin määritelty**, ja viivat muuttuvat musteeksi (musta Paperi-teemassa, vaalea Malli-teemassa). Jokainen piste ja mitta on lukittu.

:::tip
Jos aloitit suorakulmion origon ulkopuolelta, sirupainike sanoo silti ”Alimääritelty · 2 vapausastetta”. Paina {{key:S}} valintatyökalulle, napsauta yhtä kulmaa, {{key:Shift}}+napsauta origoa ja valitse oikean paneelin {{ui:• Yhtyvä}}.
:::

### Pursota se

1. Valitse työkalurivistä {{ui:Poistu}} tai paina {{key:Esc}}, kunnes luonnos sulkeutuu (yleensä kahdesti).
2. Valitse {{ui:Pursota}}. Näkyviin tulee 10 mm kiintokappale. Historiaan lisätään ”Extrude1”, ja ”Sketch1” sisennetään sen alle.
3. Oikea paneeli näyttää pursotuksen asetukset. Muuta paksuutta kirjoittamalla uusi luku kenttään **Syvyys (mm)** ja paina {{key:Enter}} tai {{key:Tab}}. Osa rakentuu heti uudelleen.

### Lisää reikä

1. Napsauta levyn edessä olevaa suurta litteää pintaa (pursotuksen päätä). Koko pinta korostuu, ja oikea paneeli sanoo **Pinta**.
2. Valitse oikeasta paneelista {{ui:Luonnostele tälle pinnalle}}.
3. Paina {{key:P}} Piste-työkalulle ja napsauta lähellä pinnan keskikohtaa.
4. Valitse {{ui:Poistu}}.
5. Valitse {{ui:Reikä}}. 6 mm reikä menee levyn läpi. Muuta **Halkaisija (mm)** oikeasta paneelista halutessasi.

**Osa**-ruutu vasemmassa alareunassa näyttää nyt tilavuuden, pinta-alan, koon (60 × 40 × 10 mm) ja ”Läpireiät: 1”.

### Tallenna se

1. Paina {{key:Mod+S}} tai valitse {{ui:Tallenna}}.
2. Selaimesi lataa tiedoston `Part1.partcraft.json` latauskansioonsa. Tiedosto sisältää koko historian. Avaa se uudelleen painikkeella {{ui:Avaa}}, jatkaaksesi muokkaamista.

Nimetäksesi osan ensin, napsauta tyhjää kohtaa näkymässä, jotta mitään ei ole valittuna, ja kirjoita uusi **Nimi** oikeaan paneeliin.

## Mihin seuraavaksi

- [Piirrä ensimmäinen luonnos](topic:sketch-basics) ja [Määritä luonnos täysin](topic:relations-dimensions) selittävät luonnostelijan kunnolla.
- [Muuta osaa sen historian kautta](topic:edit-history) näyttää, miten muokkaat rakentamaasi.
- [Pyöristys, viistys ja ontelointi](topic:fillet-chamfer-shell) ja [Tee piirustus](topic:drawing-pdf) viimeistelevät osan. [Mitä ei vielä ole toteutettu](topic:not-built-yet) luettelee, mitä tämä versio ei tee, kuten pyyhkäisyt ja lofttaukset.
- [Siirtyminen toisesta parametrisesta mallintajasta](topic:coming-from) luettelee tavat, jotka toimivat täällä eri tavalla.
- [Näppäimet ja hiiri](topic:keyboard) on koko luettelo pikanäppäimistä.
- [Ohjeen käyttäminen](common:help).
