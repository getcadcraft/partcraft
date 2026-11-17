---
title: Rakenna kokoonpano nivelillä
summary: Aloita kokoonpano osasta, lisää kopioita ja muita osatiedostoja, liitä ne jäykillä, kiertyvillä, liukuvilla, sylinterimäisillä, tasomaisilla, pallo- ja tappi urassa -niveleillä tasaisille pinnoille, keskitä nivelet akseleille, muokkaa osaa paikan päällä ja tallenna kokoonpano.
keywords: kokoonpano, liitos, liitokset, nivel, silmukka, suljettu silmukka, mekanismi, nelivarsi, kytkentä, jäykkä, kiertyvä, liukuva, sylinterimäinen, tasomainen, pallo, pallonivel, tappi urassa, lisää komponentti, kiinnitetty, kiinteä, samankeskinen, yhtyvä, muokkaa osaa, kontekstissa, partcraft-asm
from: a53bbfef
---

Kokoonpano kokoaa osat yhteen. PartCraftissa **nivelet** sijoittavat osat: kukin nivel asettuu kahden osan tasaiselle pinnalle ja asettaa ne pinta pintaa vasten. Kiertyvä nivel antaa osan kääntyä, liukuva nivel antaa sen liukua ja jäykkä nivel pitää sen paikallaan.

## Aloita kokoonpano

1. Rakenna osa kiintokappaleella. Tyhjää osaa ei voi lisätä kokoonpanoon: ”Rakenna ensin kiintokappale, ja lisää se sitten kokoonpanoon.”
2. Valitse työkalurivillä {{ui:Kokoonpano}}.

Tilarivi kertoo: ”Kokoonpano aloitettu, Part1 on kiinnitetty osa. Lisää osia (Lisää kopio, Lisää tai Muokkaa › Monista) ja liitä ne sitten niveleillä.” Vasen paneeli luettelee nyt **Osat** ja **Nivelet**, ja työkalurivillä näkyvät kokoonpanotyökalut. Luonnos- ja muotoelementtityökalut piiloutuvat.

Ensimmäinen osa on **kiinnitetty**: se ei koskaan liiku, ja kaikki muu sijoitetaan sen suhteen.

## Lisää osia

- {{ui:Lisää kopio}} lisää valitun osan (tai viimeksi valitun) uuden kopion. Kopiot jakavat yhden osan: muokkaa sitä, ja jokainen kopio muuttuu.
- {{ui:Monista}} ({{key:Mod+D}}) Muokkaa-ryhmässä tekee saman valitulle osalle. {{key:Mod+C}} ja {{key:Mod+V}} kopioivat osan ja liittävät sen muiden viereen tähän tai toiseen kokoonpanoon; {{key:Mod+Shift+V}} liittää sen samaan paikkaan. Katso [Kopioi, liitä ja monista](topic:copy-paste).
- {{ui:Lisää}} lisää osan tietokoneesi `.partcraft.json`-tiedostosta. Osa kopioidaan kokoonpanoon.

Uudet osat ilmestyvät 20 mm oikealle kaikesta siellä jo olevasta ja pysyvät siinä, kunnes nivel sijoittaa ne. Osan, jolla ei ole niveltä, voi myös siirtää käsin: kirjoitetuilla arvoilla tai vedettävillä nuolilla (katso [Osaluettelo, räjäytysnäkymät ja liikkuvat osat](topic:assembly-bom-explode)).

## Liitä kaksi osaa

1. Valitse {{ui:Nivel}} tai paina {{key:J}}. Oikea paneeli sanoo **Uusi nivel**.
2. Klikkaa tasaista pintaa ensimmäisessä osassa. Se korostuu.
3. Klikkaa tasaista pintaa toisessa osassa.

Toinen osa hyppää niin, että sen pinta asettuu ensimmäisen osan pintaa vasten, sitä kohti. Nivel ilmestyy kohtaan **Nivelet**, esimerkiksi ”Revolute1”, ja oikea paneeli näyttää sen asetukset.

- Jos molemmat pinnat on tehty kierroilla, nivel alkaa **kiertyvänä**; muuten **jäykkänä**. Vaihda sitä jälkikäteen.
- Kaarevia pintoja ei voi valita: ”Tämä pinta on kaareva. Valitse tasainen pinta (kääntyäksesi reiän tai kierron akselin ympäri, valitse se niveleen jälkikäteen).”
- {{key:Esc}} peruuttaa aloitetun nivelen (tai klikkaa osaa vasemmalla olevassa luettelossa).

### Nivelen asetukset

| Asetus | Mitä se tekee |
|---|---|
| **Tyyppi** | Yksi alla olevista niveltyypeistä |
| **Kulma (°)** | Kääntää toista osaa nivelen akselin ympäri (kohtisuoraan pintoihin nähden) |
| **Siirtymä (mm)** | Siirtää toista osaa akselia pitkin pois pinnasta (negatiiviset arvot työntävät sen pinnan sisään) |
| **Pitkin X**, **Pitkin Y**, **Kallistus X:n ympäri**, **Kallistus Y:n ympäri**, **Uran suuntainen**, **Uran suunta** | Muut arvot, jotka näkyvät niveltyypeille, jotka niitä käyttävät |
| **Keskitä** (kummallekin puolelle) | Missä nivelen akseli leikkaa pinnan: ”Pinnan oma origo”, kierron akseli (”Axis of Revolve1”) tai yhden reiän akseli (”Hole1, hole 2”) |

Jokaisella nivelen liikuttavalla arvolla on vedettävä liukusäädin kentän alla; muut asetetaan kerran.

| Nivel | Mikä liikkuu | Asetetaan kerran |
|---|---|---|
| **Jäykkä** | ei mikään | Kulma, Siirtymä |
| **Kiertyvä** | Kulma (saranan tavoin) | Siirtymä |
| **Liukuva** | Siirtymä (laatikon tavoin) | Kulma |
| **Sylinterinivel** | Kulma ja Siirtymä (akseli tasaisessa laakerissa) | |
| **Tasomainen** | Pitkin X, Pitkin Y pinnan yli ja Kulma (osa liukuu pöydällä) | |
| **Pallo** | Kulma (pyöriminen) ja Kallistus X:n ja Y:n ympäri nivelen keskipisteen ympäri (pallonivel) | |
| **Tappi urassa** | Uran suuntainen ja Kulma (tappi suorassa urassa) | Uran suunta: uran kulma pinnan X-akselista |

Pinnan X ja Y ovat ensimmäisen osan pinnan X ja Y; nivelen keskipiste asetetaan kohdalla **Keskitä**.

”Pinnan oma origo” on osan origo heijastettuna pinnalle. Se on usein muu kohta kuin se, johon haluat osien asettuvan kohdakkain. Pyöreille osille ja tapeille aseta **Keskitä** kierron tai reiän akseliin molemmin puolin: akselit asettuvat silloin kohdakkain, kuten samankeskinen liitos.

### Esimerkki: kaksi laippaa pulteilla pinta pintaa vasten

1. Avaa laippaosa (kierto, jossa on ympyrämäinen reikätoisto) ja valitse {{ui:Kokoonpano}}.
2. Valitse {{ui:Lisää kopio}}.
3. Paina {{key:J}}, klikkaa ensimmäisen laipan levyn tasaista pintaa (pintaa, josta pulttireiät alkavat), ja sitten saman pinnan toisessa laipassa. Pinnat tehtiin kierrolla, joten nivel on kiertyvä.
4. Aseta **Keskitä** arvoon ”Axis of Revolve1” molemmille puolille. Laipoilla on nyt sama akseli.
5. Kirjoita `22.5` kohtaan **Kulma (°)** kohdistaaksesi pulttireiät, tai vedä liukusäädintä.

## Suljetut silmukat: mekanismit

Renkaaseen liitetyt osat (nelivarsimekanismi, kampi ja liukuri, kehikko, joka on vahvistettu molemmilta puolilta) muodostavat **silmukan**. PartCraft ratkaisee jokaisen silmukan niin, että se sulkeutuu: silmukan niveleet saavat arvot, jotka sulkevat renkaan, ja liikkuvat mahdollisimman vähän alkuperäisestä paikastaan.

- **Aseta tai vedä** silmukan nivelen arvoa, ja loput silmukasta seuraa. Nelivarsimekanismissa vedä kammen **Kulmaa**, ja kytkentätanko ja heiluri liikkuvat sen mukana. Asettamasi arvo säilyy; muut lasketaan siitä.
- Luettelossa silmukan nivel, joka voi vielä liikkua, on **sininen**: toinen arvo voitaisiin vielä asettaa. Silmukka, joka ei voi liikkua (vahvistettu kehikko), pysyy mustana. Silmukka, joka ei voi sulkeutua, on **punainen**.
- **Osa**-kenttä näyttää **Silmukat**: kuinka monta on suljettu ja kuinka monta arvoa voi vielä liikkua, esimerkiksi ”1 suljettu; 1 arvo voi vielä liikkua”.
- {{ui:Tarkista liike törmäysten varalta}} pyyhkäisee silmukan niveltä siten, että silmukka seuraa sitä askel askeleelta (katso [Tarkista kokoonpano törmäysten ja liikkeen varalta](topic:check-assembly)).

Tasaisista palkeista pinotun tasomaisen mekanismin syvyyden on täsmättävä: kaksi osaa, jotka on liitetty pinta pintaa vasten renkaan molemmin puolin, tarvitsevat saman pinokorkeuden molempiin suuntiin. Käytä nivelen **Siirtymää** nostaaksesi osaa siinä kohdassa, missä pino ei täsmää, muuten silmukka ei voi sulkeutua.

## Työskentele osien kanssa

Valitse osa klikkaamalla sitä näkymässä tai luettelossa. Oikea paneeli näyttää osan nimen, kopioiden määrän, tilavuuden, niveleet ja sen, onko osa kiinnitetty, nivelten asettama vai ”Ei liitetty: pysyy siinä, mihin se asetettiin”. Painikkeet:

- {{ui:Muokkaa tätä osaa}} (tai {{ui:Muokkaa osaa}} työkalurivillä, tai kaksoisklikkaa osaa luettelossa): avaa osan muokattavaksi;
- {{ui:Lisää kopio}};
- {{ui:Tee siitä kiinnitetty osa}};
- {{ui:Poista}}: poistaa myös sen niveleet, kysyttyään ensin.

Kokoonpanossa on oltava vähintään yksi osa: ”Kokoonpanossa on oltava vähintään yksi osa. Sulje se sen sijaan.”

### Muokkaa osaa paikan päällä

1. Valitse osa ja valitse {{ui:Muokkaa osaa}}. Osa avautuu historiansa kanssa; otsikossa lukee ”Bracket (kokoonpanossa Bracket assembly)”.
2. Muuta sitä kuten mitä tahansa osaa.
3. Valitse työkalurivillä {{ui:Takaisin}}. Kokoonpano päivittyy: kaikki kyseisen osan kopiot muuttuvat, ja nivelet pinnoilla, jotka on tehty luonnoksen reunoista, seuraavat mukana.

Muutoksen palauttaminen kokoonpanoon on yksi vaihe kokoonpanon kumoamisluettelossa.

## Kumoa, tallenna ja sulje

- Kokoonpanossa on oma kumoamisluettelonsa: {{key:Mod+Z}} ja {{key:Mod+Y}} toimivat niveleisiin, lisäyksiin ja asetuksiin.
- {{ui:Tallenna}} tai {{key:Mod+S}} lataa `<kokoonpanon nimi>.partcraft-asm.json`-tiedoston, ja kaikki osat ovat sen sisällä. Avaa se myöhemmin {{ui:Avaa}}-painikkeella.
- {{ui:Sulje}} sulkee kokoonpanon ja palaa osaan, josta aloitit. Jos kokoonpano on tallentamaton, se kysyy: {{ui:Peruuta}}, {{ui:Hylkää kokoonpano}} tai {{ui:Tallenna ensin}}.
- Nimetäksesi kokoonpanon uudelleen klikkaa tyhjää kohtaa, niin ettei mitään ole valittuna, ja muuta **Nimi**-kenttää oikeassa paneelissa.

## Suuret kokoonpanot

Kokoonpano voi sisältää tuhansia kopioita muutamasta osasta. Yhden osan kopiot piirretään yhdessä, kääntämäsi nivel sijoittaa vain sen takana olevat osat, ja osaluettelo näyttää ensimmäiset rivinsä. Sen alla on ”Näytä lisää” -painike (valittu osa on aina luettelossa).

- Kun käännät tai zoomaat näkymää, yli noin 300 000 kolmion kokoonpano piirretään yhtenä laatikkona osaa kohden, ja täysin piirrettynä hetken kuluttua siitä, kun lopetat.
- {{ui:Näkymät}} › {{ui:Kevyt näyttö}} pitää laatikot päällä koko ajan. Osan ja nivelten valinta käyttää yhä todellisia osia.
- Kuinka nopeasti kokoonpano kääntyy, riippuu myös näytönohjaimestasi. PartCraftin mittaamat luvut ovat julkaisutiedoissa koneen kanssa, josta ne tulivat.

## Nivelongelmat

- Osa, johon mikään nivel ei yllä, on luettelossa **vapaa**, ja paneeli sanoo: ”Bracket2 ei ole liitetty kiinnitettyyn osaan, joten se pysyy siinä, mihin se asetettiin.”
- Silmukka, joka ei voi sulkeutua (pituudet eivät riitä, raja pysäyttää nivelen tai pinnat eivät täsmää syvyydessä): ”Revolute3 sulkee silmukan, joka ei voi sulkeutua: se on 2.000 mm pois. Tarkista silmukan niveleiden pinnat, siirtymät ja rajat.” Sen niveleet muuttuvat punaisiksi.
- Jos nivelen käyttämä pinta tai akseli katoaa osaa muokattaessa: ”Tämän nivelen käyttämä pinta on kadonnut osasta Bracket.” Poista nivel ja tee se uudelleen.

Seuraavaksi: [Tarkista kokoonpano törmäysten ja liikkeen varalta](topic:check-assembly).
