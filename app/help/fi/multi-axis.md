---
title: 4- ja 5-akselinen työstö
summary: Kerro PartCraftille, mitkä kiertoakselit koneessa on, kallista työkalua mille tahansa tavalliselle toimenpiteelle, viimeistele pinta pallopäisellä päätejyrsimellä, joka nojaa leikatessaan, tai käännä osaa työkalun alla 4. akselilla. Mitä G-koodiin kirjoitetaan ja mitä ei ole todistettu.
keywords: 5-akselinen, viisiakselinen, 4-akselinen, neljäs akseli, moniakselinen, 3+2, indeksoitu, paikoitettu, kallistus, kallistettu työkalu, kierto, kiertopöytä, pää, A-akseli, B-akseli, C-akseli, TCP, RTCP, työkalun keskipiste, G43.4, käänteinen aika, G93, kinematiikka, kiertopiste, sivuleikkaus, johtokulma
from: c4f1c491
---

Manufacture voi pitää työkalun kulmassa, ja se voi liikuttaa kiertoakseleita leikatessaan. Kolme asiaa tekee sen, yksinkertaisimmasta alkaen.

**Mitään tässä ei ole ajettu koneella.** Radat tarkistetaan geometriaa vasten testeillä, ja G-koodi luetaan takaisin, mutta sisäänrakennetut postprosessorit seuraavat ohjainten dokumentoituja koodeja, eivät mitään konetta edessämme. Todista ohjelma ohjaimesi omassa simulaattorissa ja ilmassa ennen kuin se kohtaa metallin.

## Koneen kiertoakselit

**Asetus**-välilehdellä {{ui:Rotary axes}} kertoo, mitä koneessa on:

| Valinta | Kone |
|---|---|
| Ei mitään (3 akselia) | Tavallinen jyrsin. Mikä tahansa toimenpide, joka vaatii kallistetun työkalun, varoittaa, ja postprosessori kieltäytyy kirjoittamasta sitä. |
| A (kiertyy X:n ympäri) | Yksi kiertoakseli X:n suuntaisesti: 4. akselin pöytä tai indeksoija. Työkalu voi nojata vain Y–Z-tasossa. |
| B (kiertyy Y:n ympäri) | Yksi kiertoakseli Y:n suuntaisesti. Työkalu voi nojata vain X–Z-tasossa. |
| A ja C | Kallistusakseli X:n ympäri, jota kantaa tai joka kantaa Z:n ympäri kiertyvää akselia: kallistuva pöytä tai pää. |
| B ja C | Sama kallistuksella Y:n ympäri. |

Sitten:

- **Kantaja**: {{ui:The table (the part turns)}} tai {{ui:The head (the tool turns)}}. Pöytä kiertyy vastakkaiseen suuntaan tuodakseen saman pinnan työkalun alle, joten jokaisen kulman merkki seuraa tästä.
- **Ohjain pitää työkalun kärjen radalla (TCP)**: kun se on päällä, ohjelman X Y Z ovat työkalun kärki osan omissa koordinaateissa ja ohjain hoitaa loput (sisäänrakennetut Fanuc-tyyliset ja LinuxCNC-postprosessorit kirjoittavat työkalun pituudelle `G43.4`). Kun se on pois, kääntyvällä pöytäkoneella PartCraft kirjoittaa X Y Z:n sen mukaan, miten käännetty pöytä kantaa osaa, **kiertokeskuksen** ympäri, jonka annat (työkoordinaateissa; 0, 0, 0, kun työnollapiste on keskellä). Kääntökoneessa TCP täytyy olla päällä: ilman sitä ohjelma tarvitsisi koneen kiertopisteen pituuden, jota PartCraft ei tunne.
- **Kallistusraja**: kuinka pitkälle kallistusakseli menee.

Koneet eroavat siinä, mikä suunta lasketaan positiiviseksi. Jos akseli kääntyy väärään suuntaan koneellasi, vaihda merkki postprosessorin kopiosta ([Muokattavat postprosessorit](topic:post-processors)).

## Kallistettu työkalu tavalliselle toimenpiteelle

Jokaisella jyrsintätoimenpiteellä (pinta, tasku, mukautuva, ääriviiva, poraus, viisto, yhdensuuntainen, harjanne, 3D-karkeistus, jäännös) on **Työkalun kallistus** ja **Kallista kohti**: työkalun suunta juuri sille toimenpiteelle, mitattuna asetuksen työkaluakselista. Tämä on 3+2-työstöä: kiertoakselit menevät asemaan ja pysyvät siellä, kun kolme akselia leikkaa.

- Kirjoita kaksi kulmaa tai paina {{ui:Tool square to a face}} ja napsauta tasaista pintaa: työkalu osoittaa suoraan siihen.
- Valitse toimenpiteen pinnat ja reunat tavalliseen tapaan. Se, mikä lasketaan pohjaksi tai reiäksi, arvioidaan kallistetun työkalun suunnassa.
- Raaka-aihio tuolle suunnalle on laatikko, joka pitää käännetyn raaka-aihion, joten korkeudet ja välykset ovat turvallisia siitä suunnasta.

G-koodissa ennen toimenpidettä työkalu nousee, kiertoakselit kääntyvät ja työkalu laskeutuu ensimmäisen pisteensä päälle. Pöytäkoneessa ilman TCP:tä kaaret pysyvät kaarina ja kiinteät poraussyklit syklinä (kirjoitettu koordinaatisto on vain käännetty Z:n ympäri). TCP:n kanssa kallistetussa tasossa lyhyiksi viivoiksi muuttuvat kaaret ja syklit muuttuvat liikkeiksi, joita ne edustavat.

Raaka-aihion simulointi ajaa kallistetun suunnan **omillaan**: se näyttää, mitä toimenpide leikkaa koko raaka-aihiosta sen sivulta katsottuna, ja löytää siitä ylileikkaukset, mutta muista suunnista tehtyjä leikkauksia ei siirretä.

## 5-akselinen viimeistely

Manufacture-työtilan työkalurivin {{ui:More}}-valikko listaa tämän toimenpiteen ja seuraavan **Toimenpiteet**-välilehden yläosassa.

{{ui:5-axis}} on [yhdensuuntainen viimeistelyajo](topic:finish-3d) **pallopäisellä päätejyrsimellä, joka nojaa mennessään**. Pallo leikkaa pallolla, ja pallo on sama, mihin suuntaan työkalu nojaa keskipisteensä ympäri, joten pallo seuraa täsmälleen sitä rataa, jonka 3-akselinen ajo antaisi, ja vain työkalun suunta muuttuu:

- **Kohti pintaa**: 1 = kohtisuoraan pintaan, 0 = pystyssä, mikä tahansa väliltä.
- **Nojaa eteenpäin**: asteina leikkauksen suuntaan, jotta pallon paikallaan oleva keskipiste ei ole se, mikä leikkaa.
- **Suurin kallistus**: työkalu ei nojaa koskaan enempää kuin tästä asetuksen akselista.

Kohdassa, jossa varsi koskettaisi mallia, nojaus leikataan takaisin, kunnes se vapautuu, ja toimenpide kertoo, monessako pisteessä niin tapahtui. Jokainen ajo tulee sisään ja poistuu suoralla nostolla.

## Kiertoviimeistely (4. akseli)

{{ui:Rotary}} on tarkoitettu osalle, joka on pidetty **työ-X:n** suuntaan kiertoakselilla. Osa kiertyy, ja pallopäinen päätejyrsin, joka osoittaa aina akselia kohti, seuraa sen pintaa:

- **Ajot**: {{ui:Along the axis}} (viivat X:n suuntaan, yksi askelväli kierron päässä toisistaan) tai {{ui:Round the part}} (renkaat, yksi askelväli X:ää toisistaan).
- **Akseli Y / Z:ssä**: missä akseli on. Tyhjä tarkoittaa raaka-aihion keskikohtaa. Kääntyvällä pöytäkoneella ilman TCP:tä tämän on oltava kiertokeskus Asetuksessa; toimenpide varoittaa, jos ei ole.
- **Alusta / Loppuun X** ja **Alusta / Loppuun kulma**: osa pituudesta ja kierrosta, joka leikataan.

Pallon korkeus akselin yläpuolella jokaisessa pisteessä on tarkka pallon pudotus osan verkolle siltä puolelta.

## Rajoitukset

- 5-akselinen ja kiertoviimeistely ottavat vain **pallopäisen päätejyrsimen**. Sivuleikkausta ei ole (työkalun sivu seinällä, joka on suora), ei virtausviivoja pinnan omien suuntien mukaan, ei monen akselin karkeistusta eikä automaattista kallistuksen valintaa törmäyksen välttämiseksi.
- 5-akselisia ja kiertoratoja **ei ajeta raaka-aihion simuloinnin läpi**, joka on korkeuskartta eikä voi sisältää nojaavaa leikkausta.
- Varsi tarkistetaan 5-akselisessa viimeistelyssä mallia vastaan ylhäältä katsottuna; pidikettä, karaa ja itse konetta ei tarkisteta missään.
- Kiertoviimeistely leikkaa vain sen, minkä työkalu näkee katsoessaan akselia.
- 5-akselisen viimeistelyn laskeminen suurelle osalle vie minuutin tai enemmän: varsi tarkistetaan jokaisessa pisteessä jokaisella ajolla.
- Kun kiertoakselit liikkuvat lineaaristen kanssa ja TCP on pois, sisäänrakennetut postprosessorit kirjoittavat syötön käänteisenä aikana (`G93`) ja palaavat sitten `G94`:ään.
- Kallistetun työtason koodia (`G68.2` ja vastaavia) ei kirjoiteta, eikä koneen omia rajoja, kelausta tai törmäysalueita tunneta.
