---
title: Piirrä ensimmäinen luonnos
summary: Avaa luonnos tasolle tai tasaiselle pinnalle, piirrä viivoja, suorakulmioita, ympyröitä, kaaria, pisteitä ja keskiviivoja, pyöristä kulma, valitse, vedä ja poista.
keywords: luonnos, piirrä, viiva, suorakulmio, ympyrä, kaari, piste, keskiviiva, apugeometria, pyöristys, luonnoksen pyöristys, pyöristä kulma, tartunta, valitse, ikkuna, vedä, profiili
from: 28be7436
---

Jokainen kiintokappale alkaa luonnoksesta, eli tasaisesta piirroksesta tasolla. Tämä opas käsittelee piirtotyökaluja. Luonnoksen sitominen rajoitteilla ja mitoituksilla on kohdassa [Mallinna luonnos täydellisesti](topic:relations-dimensions).

## Aloita luonnos

Voit luonnostella perustasolle tai minkä tahansa osan tasaiselle pinnalle.

1. Valitse, mihin luonnostellaan:
   - perustaso: napsauta historiassa **Etutaso**, **Ylätaso** tai **Oikea taso** tai napsauta tasoa näkymässä;
   - tasainen pinta: napsauta pintaa näkymässä. Koko pinta korostuu.
2. Valitse {{ui:Luonnos}} työkalurivistä tai paina {{key:S}}. (Kun pinta on valittu, voit valita myös {{ui:Luonnostele tälle pinnalle}} oikeasta paneelista; tasolla {{ui:Luonnostele sille}}.)

Näkymä kääntyy suoraan tasoa vasten, luonnoksen työkalut tulevat työkaluriviin ja Viiva-työkalu on valmiina. Jos painat {{ui:Luonnos}} ilman valintaa, perustasot näkyvät ja tilarivi kertoo: ”Napsauta tasoa tai tasaista pintaa, johon luonnostelet. Esc lopettaa.”

:::note
Kaareva pinta ei voi kantaa luonnosta: ”Pinta on kaareva. Valitse tasainen pinta tai taso, johon luonnostelet.”
:::

**Pinnalla oleva luonnos seuraa pintaa.** Jos pinta on tehty luonnoksen reunasta tai pursotuksen päädystä, uusi luonnos siirtyy, kun muotoelementti muuttuu (syvempi taskku vie mukanaan sen pohjalla olevan luonnoksen). Jos paneelissa lukee, että pinta on ”Lukittu valintakohtaan”, luonnos pysyy siinä, missä pinta on nyt.

## Piirtotyökalut

Jokaisella työkalulla on työkalurivin painike ja pikanäppäin. Valitse sama painike uudelleen, paina {{key:S}} tai paina {{key:Esc}} palataksesi valintatilaan.

| Työkalu | Pikanäppäin | Piirtäminen |
|---|---|---|
| {{ui:Viiva}} | {{key:L}} | Napsauta alkupiste, sitten jokainen seuraava piste. Viivat ketjuuntuvat päästä päähän. Lopeta ketju painamalla {{key:Esc}}, {{key:Enter}}, napsauttamalla hiiren oikealla painikkeella tai kaksoisnapsauttamalla. Olemassa olevan pisteen napsauttaminen lopettaa myös ketjun |
| {{ui:Suorakulmio}} | {{key:R}} | Napsauta yksi kulma ja sitten vastakkainen kulma. Saat neljä kulmissa yhteen liitettyä viivaa, kaksi vaakasuoraa ja kaksi pystysuoraa |
| {{ui:Ympyrä}} | {{key:C}} | Napsauta keskipiste ja sitten piste ympyrän kehällä |
| {{ui:Kaari}} | {{key:A}} | Napsauta keskipiste, sitten alku ja sitten loppu. Kaari kulkee sen suuntaan, jonka osoitin kiertää keskipisteen ympäri |
| {{ui:Piste}} | {{key:P}} | Napsauta. Yksittäinen piste merkitsee reiän keskipisteen {{ui:Reikä}}-työkalulle |
| {{ui:Keskiviiva}} | {{key:N}} | Kuten viiva, yksi jana kerrallaan. Piirtyy katkoviivana; se on apugeometriaa, jota käytetään kierron akselina tai viitteenä |
| {{ui:Pyöristys}} | {{key:F}} | Napsauta kulma, jossa kaksi viivaa kohtaavat, kirjoita säde ja paina {{key:Enter}} |
| {{ui:Splini}} | {{key:B}} | Napsauta pisteet, joiden kautta käyrä kulkee; {{key:Enter}} lopettaa, ja ensimmäisen pisteen napsauttaminen sulkee käyrän. Katso [Splinit, typistys, siirtymä ja muut luonnostyökalut](topic:sketch-tools) |
| {{ui:Typistä}} | {{key:T}} | Napsauta käyrän osa, joka poistetaan, lähimpiin risteyksiin asti |
| {{ui:Mitoitus}} | {{key:D}} | Katso [Mallinna luonnos täydellisesti](topic:relations-dimensions) |

Kun piirrät, osoittimen vieressä näkyy pieni ruutu, jossa on pituus, koko, halkaisija tai säde.

### Kirjoita koko piirtäessä

Kun viivan, suorakulmion, ympyrän tai kaaren ensimmäinen napsautus on tehty, voit kirjoittaa koon napsauttamisen sijaan. Numeron kirjoittaminen avaa osoittimen viereen ruudun, jossa numero on:

| Työkalu | Ruudut ({{key:Tab}} siirtää seuraavaan) | Mitä tapahtuu {{key:Enter}}-painalluksesta |
|---|---|---|
| {{ui:Viiva}}, {{ui:Keskiviiva}} | Pituus, sitten Kulma (°) luonnoksen X-akselista | Viiva piirtyy kyseisen pituisena, kohti osoitinta tai kirjoitettuun kulmaan; ketju jatkuu sen päästä |
| {{ui:Suorakulmio}} | Leveys, sitten Korkeus | Suorakulmio piirtyy ensimmäisestä kulmasta kohti osoitinta; koko, jota et kirjoittanut, tulee osoittimesta |
| {{ui:Ympyrä}} | Halkaisija | Ympyrä piirtyy kirjoitettuun halkaisijaan |
| {{ui:Kaari}} | Säde keskipisteen jälkeen, sitten Kaaren kulma (°) alkupisteen jälkeen | Alku on tuon matkan päässä keskipisteestä; sitten kaari kulkee tuon matkan kiertäen sen suuntaan, johon osoitinta liikutit |

Jokainen kirjoittamasi koko muuttuu samalla askeleella **ohjaavaksi mitoitukseksi**, joten luonnos tulee valmiiksi mitoitettuna: {{key:Mod+Z}} poistaa muodon ja sen mitat yhdessä. Napsauttaminen {{key:Enter}}-painalluksen sijaan säilyttää kirjoittamasi arvon ja ottaa loput napsautuksesta. {{key:Esc}} sulkee ruudun ja palauttaa osoittimen.

Voit kytkeä tämän pois päältä kohdassa {{ui:Asetukset}} › {{ui:PartCraft}} › **Mitoita piirtäessä**, jos haluat piirtää vain napsauttamalla. Katso [PartCraftin asetukset](topic:settings).

{{ui:Lisää}} luonnostyökalujen lopussa sisältää ohjauspistesplinin, Pidennä-, Siirtymä-, Peilaa-, Monikulmio- ja Ura-työkalut, luonnoksen toistot sekä Projisoi särmä -työkalun: katso [Splinit, typistys, siirtymä ja muut luonnostyökalut](topic:sketch-tools).

### Tarttuminen

Tarttuminen lisää rajoitteita puolestasi, joten luonnos pysyy yhtenä, kun se liikkuu:

- **Päätepisteen tai origon** kohdalla näkyy pieni neliö. Uusi piste yhtyy siihen.
- **Viivan, ympyrän tai kaaren** kohdalla näkyy pieni risti. Uusi piste asetetaan tälle käyrälle.
- Viiva, joka on alle 3 asteen kulmassa vaakasuoraan tai pystysuoraan, tarttuu siihen ja saa vaaka- tai pystysuoran rajoitteen. Nimike näyttää ”H” tai ”V”.

Vältä tarttumista zoomaamalla lähemmäs, jotta napsautat kauempaa pisteestä tai käyrästä.

## Pyöristä kulma

1. Paina {{key:F}} tai valitse {{ui:Pyöristys}}.
2. Napsauta kulmapiste, jossa kaksi viivaa kohtaa.
3. Ruutu avautuu ehdotetulla säteellä. Kirjoita säde ja paina {{key:Enter}}.

Molemmat viivat typistetään ja liitetään tangentiaalisella kaarella, jolla on säteen mitoitus. Mahdollisia viestejä: ”Pyöristys tarvitsee kulman, jossa täsmälleen kaksi viivaa kohtaa.” ja ”Tuo säde on liian suuri näille viivoille.”

:::tip
Luonnoksen pyöristys pyöristää profiilin kulman, joten pursotuksen pystysuorat reunat tulevat pyöristetyiksi. Jos haluat pyöristää kiintokappaleen itsensä reunat (esimerkiksi levyn yläreunat), käytä sen sijaan osan {{ui:Pyöristys}}-muotoelementtiä: katso [Pyöristä, viistä ja onttoa](topic:fillet-chamfer-shell). Luonnoksessa työkaluriviin tuleva Pyöristys on luonnostyökalu; osassa se on muotoelementti.
:::

## Apugeometria

Apuviivat, -ympyrät ja -kaaret ovat katkoviivoja ja harmaita. Ne ohjaavat luonnosta, mutta eivät kuulu profiiliin, joka pursotetaan tai kierretään.

1. Valitse viivat, ympyrät tai kaaret.
2. Paina {{key:Q}} tai valitse {{ui:Apugeometria}}. Paina uudelleen palauttaaksesi ne.

## Valitse, vedä ja poista

Paina {{key:S}} (tai {{key:Esc}}, kunnes mikään työkalu ei ole aktiivinen) valitaksesi.

- Napsauta pistettä, viivaa, ympyrää, kaarta, rajoitesymbolia tai mitoitusta valitaksesi sen. {{key:Shift}}+napsautus lisää valintaan tai poistaa valinnasta. Windowsissa ja Linuxissa {{key:Ctrl}}+napsautus tekee saman; Macissa ⌘+napsautus.
- Vedä tyhjään kohtaan piirtääksesi ikkunan: kaikki, mikä on kokonaan sen sisällä, valitaan.
- Vedä pistettä tai viivaa siirtääksesi sitä. Ratkaisija säilyttää jokaisen rajoitteen ja mitoituksen liikkuessa, joten vain vapaa geometria liikkuu. Vedä ympyrän reunaa muuttaaksesi sen sädettä.
- Vedä mitoituksen numeroa siirtääksesi tekstiä.
- Paina {{key:Delete}} tai {{key:Backspace}} tai valitse oikeasta paneelista {{ui:Poista}} poistaaksesi valinnan. Geometrian poistaminen poistaa siihen liittyvät rajoitteet.

## Zoomaa ja panoroi luonnoksessa

- Vieritä rullaa zoomataksesi osoittimen kohdalle.
- Vedä keskimmäisellä tai oikealla painikkeella panoroidaksesi.
- {{ui:Sovita}} työkalurivistä tai oikeasta paneelista sovittaa luonnoksen näkymään. Luonnoksessa {{key:F}}-näppäin on Pyöristys-työkalu, ei Sovita.

## Sulje luonnos

Valitse työkalurivistä {{ui:Poistu}} tai oikeasta paneelista {{ui:Poistu luonnoksesta}}, tai paina {{key:Esc}}, kunnes luonnos sulkeutuu. Jokainen {{key:Esc}} peruuttaa ensin meneillään olevan toiminnon, palaa sitten valintatilaan ja tyhjentää valinnan, ja seuraava sulkee luonnoksen.

Luonnos pysyy valittuna, joten seuraava {{ui:Pursota}} tai {{ui:Kierto}} käyttää sitä.

## Hyvä profiili

{{ui:Pursota}} ja {{ui:Kierto}} käyttävät luonnoksen kiintokappaleen **jokaista suljettua silmukkaa** (ei-apugeometrian viivat, ympyrät, kaaret ja splinit). Silmukat silmukoiden sisällä muodostavat reikiä.

- Jokaisen pään tulee osua täsmälleen yhteen toiseen päähän. ”Profiili on auki: pää kohdassa (12.5, 40) ei ole yhdistetty mihinkään.” nimeää paikan.
- Yksikään kolmesta päästä ei saa kohdata samassa pisteessä: ”Profiili haarautuu kohdassa (0, 20): siinä kohtaa enemmän kuin kaksi päätä.”
- Pisteet ja apugeometria jätetään profiilin ulkopuolelle.

Seuraavaksi: [Mallinna luonnos täydellisesti rajoitteilla ja mitoituksilla](topic:relations-dimensions).

## Luonnos valokuvasta

**Ominaisuudet › Lisää › Luonnos valokuvasta…** (tai Luonnos-ryhmä ominaisuuspuun valintanauhassa) jäljittää tasaisen osan kuvan tasaisella alustalla – sen ulkoreunan ja reiät – tai kynäpiirroksen luonnokseksi, jossa on viivoja, kaaria ja ympyröitä. Anna yksi pituus (leveys, korkeus tai pisin sivu), jotta luonnos saa oikean koon, tarkista esikatselusta, mitä se löysi, ja valitse **Tee luonnos**; se voi myös pursottaa sen samassa kumoustoiminnossa. Jäljitys tehdään tällä tietokoneella. Kulmasäteet tulevat takaisin noin 5 %:n tarkkuudella, yksityiskohtia pikselin tai kahden tarkkuudella menetetään, eikä vinosta kuvasta tai osaan varjojen yli osuvasta kuvasta suoristeta: kuvaa osa suoraan edestä ja tasaisessa valossa.
