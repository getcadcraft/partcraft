---
title: PartCraftin aloitusopas
summary: Mitä PartCraft tekee tänään, mitä selaimesi tarvitsee ja ensimmäinen osa kymmenessä minuutissa luonnoksesta tallennettuun tiedostoon.
keywords: aloitus, ensimmäinen käynnistys, pikaopas, johdanto, opas, ensimmäinen osa, levy, parametrinen, osamallintaja
from: 5f0a668d
---

PartCraft on CadCraft-perheen parametrinen osa- ja kokoonpanosovellus. Piirrät 2D-luonnoksen, lukitset sen relaatioilla ja mitoilla, muutat sen kiintokappaleeksi muotoelementeillä, kuten pursotus, kierto ja reikä, ja voit muuttaa mitä tahansa lukua myöhemmin: osa rakentuu uudelleen historiastaan. Osat siirtyvät sitten kokoonpanoihin, joissa nivelet asettavat ne paikoilleen ja antavat sinun tarkistaa liikkeen.

Mitä tämä versio tekee:

| Työ | Mitä saat |
|---|---|
| Luonnokset | Viivat, suorakulmiot, ympyrät, kaaret, pisteet ja keskiviivat relaatioineen ja mittoineen sekä reaaliaikainen tila: ali-, täysin tai ylimääritelty |
| Kiinteät muotoelementit | Pursotus, leikkaus, kierto, kierretty leikkaus, yksinkertaiset ja upotetut reiät, lineaariset ja pyöreät toistot, peilaus, pyöristykset ja viisteet suorilla särmillä tasaisten pintojen välillä sekä kuoret ja vetokulmat tasaisilla pinnoilla. Pyyhkäisyt, loftit ja muut tarkkaa ydintä tarvitsevat muotoelementit eivät ole vielä toteutettuja tässä versiossa: katso [Mitä ei ole vielä toteutettu](topic:not-built-yet) |
| Historia | Muokkaa minkä tahansa muotoelementin lukuja, poista käytöstä, kelaa taaksepäin, järjestä uudelleen ja poista, kumoamisella |
| Kokoonpanot | Osat liitettynä jäykillä, kiertonivelillä ja liukunivelillä, törmäystarkistus ja liiketarkistus |
| Piirustukset | A3-arkki, jossa kolme näkymää, isometrinen, leikkaus, yksityiskohtanäkymä, kokonaismitat, datumit, toleranssikehykset ja pinnankarheussymbolit, vietynä PDF:nä |
| Tiedostot | Omat osa- ja kokoonpanotiedostot; ulos STL, 3MF, tahkoitettu STEP, DXF ja PDF |

Kaikki toimii selaimessasi, omalla tietokoneellasi. **Mitään ei lähetetä minnekään.** Katso [Tiedostot: avaaminen, tallennus ja vienti](topic:files), minne tiedostot päätyvät.

## Mitä tarvitset

- Tuore Chrome, Edge, Firefox tai Safari, jossa **WebGL** (3D-grafiikka) ja **WebAssembly** ovat käytössä. Molemmat ovat oletuksena päällä. Kiintokappaleen geometrian rakentaa WebAssembly-verkkoydin, joka latautuu sovelluksen mukana: katso [Verkkoydin](topic:solid-kernels).
- Hiiri on helpoin. Ohjauslevy toimii, ja kosketusnäytöt toimivat katseluun ja yksinkertaiseen luonnosteluun: katso [Ohjauslevy, kosketus ja pienet näytöt](topic:trackpad-and-touch).
- Vähintään 1280 pikselin levyinen näyttö näyttää koko työkalurivin yhdellä rivillä. Kapeammat ikkunat vierittävät työkaluriviä sivusuunnassa; puhelimessa paneelit avautuvat arkkeina alareunan palkista.

Lisää selaimista: [Selaimet ja tietokoneet](common:browsers).

:::note
PartCraft toimii selaimessa ja työpöydällä CadCraft Studion sisällä. Pilvitallennus ei ole vielä käytettävissä: avaat osat tietokoneeltasi ja tallennat ne takaisin sille tiedostoina.
:::

## PartCraftin avaaminen

1. Avaa PartCraft.
2. Odota, kun näytöllä lukee ”Ladataan kiintokappaleydintä…”. Ensimmäisellä kerralla siihen menee hetki.
3. Näet tyhjän 3D-näkymän, jossa on kolme perustasoa, historian vasemmalla (”Part1”, sitten Etutaso, Ylätaso, Oikea taso) ja näkymässä ruudun otsikolla ”Aloita osa”.
4. Tilarivin oikean reunan lähellä oleva merkki sanoo ”Verkkoydin”: PartCraft rakentaa tässä versiossa jokaisen osan verkkoytimellä, joten pyöreät pinnat ovat tasaisia tahkoja. Voit aloittaa mallinnuksen heti.

Jos näkymä sanoo, ettei selain voi näyttää 3D:tä tai ydin ei latautunut, katso [Vianetsintä](topic:troubleshooting#the-app-does-not-start).

## Ensimmäinen osasi: levy, jossa on reikä

Teet 60 × 40 mm:n levyn, 10 mm paksun, jonka läpi menee 6 mm:n reikä. Yksiköt ovat millimetrejä.

### Piirrä ääriviiva

1. Napsauta **Etutasoa** vasemmalla olevassa historiassa. Taso korostuu näkymässä.
2. Valitse {{ui:Luonnos}} työkaluriviltä tai paina {{key:S}}. Näkymä kääntyy katsomaan tasoa suoraan, ja Viiva-työkalu on aktiivinen.
3. Paina {{key:R}} saadaksesi Suorakulmio-työkalun.
4. Vie osoitin origoon (pieni punainen ympyrä, jossa on risti). Pieni neliö osoittaa, että se tarttuu. Napsauta.
5. Siirrä ylös ja oikealle ja napsauta uudelleen. Sinulla on suorakulmio. Sen viivat ovat sinisiä: sininen tarkoittaa, että ne voivat vielä liikkua.

### Anna sille koot

1. Paina {{key:D}} saadaksesi Mitoitus-työkalun.
2. Napsauta ylälinjaa ja napsauta sitten hieman sen yläpuolelta. Lukuruutu avautuu nykyisellä pituudella.
3. Kirjoita `60` ja paina {{key:Enter}}. Suorakulmio muuttuu 60 mm leveäksi.
4. Napsauta vasenta viivaa ja napsauta sitten hieman sen vasemmalta puolelta. Kirjoita `40` ja paina {{key:Enter}}.

Näkymän vasemmassa yläkulmassa oleva merkki sanoo nyt **Täysin määritelty** ja viivat muuttuvat musteen väriseksi (musta Paperi-teemalla, vaalea Malli-teemalla). Jokainen piste ja koko on lukittu.

:::tip
Jos aloitit suorakulmion kauempaa origosta, merkki sanoo yhä ”Alimääritelty · 2 vapausastetta”. Paina {{key:S}} saadaksesi Valitse, napsauta yhtä kulmaa, {{key:Shift}}+napsauta origoa ja valitse sitten {{ui:• Yhtyvä}} oikeassa paneelissa.
:::

### Pursota se

1. Valitse {{ui:Poistu}} työkaluriviltä tai paina {{key:Esc}}, kunnes luonnos sulkeutuu (yleensä kahdesti).
2. Valitse {{ui:Pursota}}. 10 mm:n kiintokappale ilmestyy. ”Extrude1” lisätään historiaan, ja ”Sketch1” sisennettynä sen alle.
3. Oikea paneeli näyttää pursotuksen asetukset. Muuttaaksesi paksuutta kirjoita uusi luku kenttään **Syvyys (mm)** ja paina {{key:Enter}} tai {{key:Tab}}. Osa rakentuu uudelleen heti.

### Lisää reikä

1. Napsauta levyn etuosan suurta tasaista pintaa (pursotuksen päätä). Koko pinta korostuu ja oikeassa paneelissa lukee **Pinta**.
2. Valitse {{ui:Luonnostele tälle pinnalle}} oikeassa paneelissa.
3. Paina {{key:P}} saadaksesi Piste-työkalun ja napsauta pinnan keskivaiheilla.
4. Valitse {{ui:Poistu}}.
5. Valitse {{ui:Reikä}}. 6 mm:n reikä menee levyn läpi. Muuta **Halkaisija (mm)** oikeassa paneelissa, jos haluat.

Vasemmassa alakulmassa oleva **Osa**-ruutu näyttää nyt tilavuuden, pinta-alan, koon (60 × 40 × 10 mm) ja ”Läpireiät: 1”.

### Tallenna se

1. Paina {{key:Mod+S}} tai valitse {{ui:Tallenna}}.
2. Selaimesi lataa tiedoston `Part1.partcraft.json` latauskansioonsa. Tiedosto sisältää koko historian: avaa se uudelleen kohdalla {{ui:Avaa}} jatkaaksesi muokkausta.

Jos haluat nimetä osan ensin, napsauta näkymän tyhjää kohtaa, jotta mitään ei ole valittuna, ja kirjoita uusi **Nimi** oikeaan paneeliin.

## Mihin seuraavaksi

- [Ensimmäisen luonnoksen piirtäminen](topic:sketch-basics) ja [Luonnoksen täysi määrittely](topic:relations-dimensions) selittävät luonnostelun kunnolla.
- [Osan muuttaminen historian kautta](topic:edit-history) näyttää, miten rakentamaasi muokataan.
- [Pyöristys, viiste ja ontoksi tekeminen](topic:fillet-chamfer-shell) ja [Piirustuksen tekeminen](topic:drawing-pdf) viimeistelevät osan. [Mitä ei ole vielä toteutettu](topic:not-built-yet) luettelee, mitä tämä versio ei tee, kuten pyyhkäisyt ja loftit.
- [Jos tulet toisesta parametrisesta mallintajasta](topic:coming-from) luettelee tottumukset, jotka toimivat täällä eri tavalla.
- [Näppäimet ja hiiri](topic:keyboard) on täysi pikanäppäinluettelo.
- [Tämän ohjeen käyttö](common:help).
