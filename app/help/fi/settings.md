---
title: PartCraft-asetukset
summary: Valitse, mikä hiiren painike kääntää näkymää, tee kosketuslevyn pyyhkäisystä osan kääntö ja siirto, kytke automaattiset rajoitteet luonnostelun aikana päälle tai pois ja aseta, kuinka monta säiettä simulaation ratkaisijat käyttävät.
keywords: asetukset, mieltymykset, valinnat, hiiri, keskipainike, rullapainike, kierto, kiertää, kosketuslevy, vieritys, pyyhkäisy, nipistys, rajoitteet, automaattinen rajoitus, tartunta, yhtyvä, ratkaisijan säikeet, säikeet, ytimet, suorittimet, monisäikeinen, nopeampi ratkaisu, rinnakkainen
from: 759edcaf
---

Avaa {{ui:Asetukset}} sovelluspalkin rattaasta tai painamalla {{key:Mod+,}}. Ensimmäinen välilehti, {{ui:PartCraft}}, sisältää tälle sovellukselle kuuluvat asetukset. {{ui:Yleiset}} sisältää ne, jotka kaikki CadCraft-sovellukset jakavat (teema, työkalurivi, paneelit). PartCraft-asetukset ovat vain tässä sovelluksessa: muutat niitä täällä, ja tämä selain muistaa ne. {{ui:Palauta PartCraft-asetukset}} palauttaa kaiken alkutilaan.

## Näkymän kääntäminen

- **Vasen painike** (oletus): vedä vasemmalla painikkeella kääntääksesi osaa. Vedä oikealla tai keskipainikkeella siirtääksesi sitä.
- **Keskipainike**: paina rullaa ja vedä kääntääksesi osaa. Siirtääksesi pidä {{key:Shift}} (tai {{key:Ctrl}}, tai ⌘) painettuna keskipainikkeella, tai vedä oikealla painikkeella. Vasen painike valitsee vain pintoja, reunoja ja tasoja, joten pieni liike napsautuksessa ei koskaan käännä osaa. Monet CAD-ohjelmat toimivat näin.

Rulla zoomaa osoittimen kohdalle kummassakin tapauksessa. Luonnoksessa oikea ja keskipainike siirtävät näkymää kuten ennenkin.

## Vieritys: hiiren rulla tai kosketuslevy

- **Päättele itse** (oletus): PartCraft seuraa vierittämistä. Sivusuuntainen tai hienojakoinen vieritys, jota kosketuslevy lähettää, kääntää osaa. Kokonaiset rullan askeleet zoomaavat.
- **Hiiren rulla**: vieritys zoomaa aina osoittimen kohdalle.
- **Kosketuslevy**: pyyhkäise kahdella sormella kääntääksesi osaa. Pidä {{key:Shift}} painettuna ja pyyhkäise siirtääksesi. Nipistä zoomataksesi. Luonnoksessa kahden sormen pyyhkäisy siirtää luonnosta.

Nipistys zoomaa kaikissa valinnoissa. Jos ”Päättele itse” arvaa väärin hiirellesi tai kosketuslevyllesi, valitse oikea. Lisätietoja: [Kosketuslevy, kosketus ja pienet näytöt](topic:trackpad-and-touch).

## Luonnostelu: lisää rajoitteet piirtäessä

**Lisää rajoitteet piirtäessä** (oletuksena päällä): napsautus, joka tarttuu pisteeseen, tekee uudesta pisteestä sen kanssa yhtyvän. Napsautus käyrällä asettaa pisteen tälle käyrälle. Viiva, joka on piirretty lähes vaakaan tai pystyyn, muuttuu vaakasuoraksi tai pystysuoraksi. Katso [Rajoitteet ja mitoitukset](topic:relations-dimensions).

Poista asetus, kun haluat sijoittaa geometrian lähelle muuta geometriaa liittämättä sitä siihen. Osoitin tartuu edelleen pisteisiin ja käyriin, mutta mitään ei liitetä: ketjussa piirretyt viivat eivät jaa päitään, joten vetäminen voi irrottaa ne. Lisää haluamasi rajoitteet itse oikeasta paneelista. Suljettu profiili pursotetaan edelleen, kun sen päät kohtaavat.

:::note
Asetus muuttaa vain sitä, mitä uudet piirrokset lisäävät. Luonnoksessa jo olevat rajoitteet pysyvät, ja Pyöristys-työkalu tekee yhä tangenttikaarensa ja säteensä.
:::

## Luonnostelu: mitoita piirtäessä

**Mitoita piirtäessä** (oletuksena päällä): kun viivaa, suorakulmiota, ympyrää tai kaarta piirretään, numeron kirjoittaminen täyttää osoittimen vieressä olevan kokokentän ({{key:Tab}} siirtyy seuraavaan kenttään). {{key:Enter}} piirtää muodon tuossa koossa, ohjaavalla mitoituksella jokaiselle kirjoitetulle koolle. Pois päältä numeron kirjoittaminen piirtäessä ei tee mitään, ja muodot piirretään vain napsautuksilla. Katso [Kirjoita koko piirtäessä](topic:sketch-basics#type-the-size-as-you-draw).

## Kulmanäyttö

Mitä näkyy 3D-näkymän kulmassa: **Näkymäkuutio** (oletus, oikeassa yläkulmassa; napsauta pintaa, reunaa tai kulmaa katsoaksesi sieltä, vedä kiertääksesi, vedä sen kompassirengasta kääntääksesi mallia), **Akselikuvake** (pieni X-, Y- ja Z-merkki vasemmassa alakulmassa, joka kääntyy näkymän mukana: X punainen, Y vihreä, Z sininen) tai **Ei mitään**. Kumpikaan ei näy luonnoksen tai piirustusarkin aikana. Katso [Näkymäkuutio](topic:view-cube).

## Ratkaisijan säikeet

Kuinka monta säiettä simulaation ratkaisijat saavat käyttää. **Automaattinen** (oletus) käyttää yhden vähemmän kuin tietokoneen loogisia suoritinytimiä (enintään 16), jotta sivu pysyy reagoivana laskennan ratkaistessa. Voit myös valita luvun. Suuret vokselilaskelmat, nurjahdus, ajasta riippuva jännitys ja virtaus ratkeavat nopeammin useammalla säikeellä (noin 2× 4 säikeellä 80 000 kuutiolle mittauksissamme, enemmän tyhjäkäyntisellä tietokoneella). Alle noin 20 000 tuntemattoman mallit pysyvät yhdessä säikeessä, koska säikeiden käynnistäminen maksaa enemmän kuin säästää. Monisäikeinen ratkaisu antaa saman vastauksen kuin yksi säie (pyöristystarkkuuteen asti, koska summat lasketaan eri järjestyksessä). Kunkin laskelman tulokset listaavat **N säiettä** tai **1 säie** syyn kanssa kohdassa **Ratkaisija**.

Säikeet vaativat, että sivu on **cross-origin-eristetty** (selain sallii työntekijöiden jakaa muistia vain silloin). Laboratoriosivu on eristetty. Jos ei ole, asetus kertoo siitä (”Tämä sivu ei ole cross-origin-eristetty, joten ratkaisijat toimivat yhdessä säikeessä riippumatta siitä, mitä tässä valitaan.”), ja jokainen ratkaisu käyttää yhtä säiettä. Kaikki muu toimii samoin, ja vastaukset ovat samat.

Laminaarivirtauslaskelmat käyttävät myös säikeitä (noin 2.5× 4 säikeellä 54 000 nestesolulle, sama vastaus viimeiseen numeroon asti). Toisen asteen tetraedriratkaisija ja lämmönsiirto toimivat yhdessä säikeessä: säikeistys mitattiin hitaammaksi testitietokoneellamme, koska niiden ratkaisijoita rajoittavat muistin nopeus ja vaihe, jota ei voi jakaa.

### Omalla verkkopalvelimella

Jos ajat PartCraftia omalta palvelimeltasi, se toimii sellaisenaan. Ratkaisijan säikeitä varten palvelimen tulee lähettää PartCraftin sivulle kaksi otsikkoa:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Apachessa kansion `.htaccess`-tiedostossa (vaatii mod_headers-moduulin):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

nginxissä `location`-lohkossa, joka palvelee PartCraftia:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Lataa sivu uudelleen. Asetukset › Ratkaisijan säikeet tarjoaa sen jälkeen **Automaattinen** tietokoneesi määrällä. Toinen otsikko saa selaimen hylkäämään kaiken, minkä sivu lataa toisesta sivustosta eikä sitä salli. Tämä on hyväksi PartCraftille yksinään, koska se lataa kaiken omasta kansiostaan.
