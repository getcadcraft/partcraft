---
title: Lämpö, lämpöjännitys ja nurjahdus
summary: Selvitä osan lämpötilat kiinteistä lämpötiloista, lämpövuosta, lämpötehosta, konvektiosta ja säteilystä, vakaana tai ajan myötä. Kuormita jännityslaskenta lämpötilan nousulla ja selvitä kuorma, jossa hoikka osa nurjahtaa, sekä mitä kukin menetelmä voi ja ei voi kertoa.
keywords: lämpö, lämmönsiirto, lämpötila, johtuminen, konvektio, lämmönsiirtokerroin, säteily, emissiivisyys, lämpövuo, lämpöteho, lämmöntuotto, lämpönielu, transientti, aika, jäähtyminen, lämpeneminen, Crank-Nicolson, implisiittinen Euler, lämpötase, lämpöjännitys, lämpöjännitys ajan myötä, transienttinen lämpöjännitys, sammutus, lämpöisku, jännityshistoria, pahin aika, lämpölaajeneminen, laajenemiskerroin, nurjahdus, Eulerin nurjahdus, kuormakerroin, kriittinen kuorma, pylväs, hoikka, ominaisarvo
from: 1a1b7545
---

Nämä tutkimukset ovat Simulointi-työtilassa staattisen jännityksen ja luonnontaajuuksien vieressä (katso [Tarkista jännitys ja taipuma](topic:simulation)). Valitse ne paneelin **Tyyppi**-ruudusta. Ne käyttävät samaa pienten kuutioiden verkkoa ja samaa materiaaliluetteloa; jokaisella kirjastomateriaalilla on lämmönjohtavuus, ominaislämpö ja lämpölaajenemiskerroin (tyypillisiä käsikirja-arvoja, näkyvät kohdassa **Ominaisuudet**).

## Lämpö: minne lämpö menee?

1. Valitse **Tyypiksi** **Lämpö (lämmönsiirto)**.
2. Lisää lämpöehdot paneelin **Lisää**-luettelosta ja napsauta niiden pintoja (kuten tuille ja kuormille):
   - **Kiinteä lämpötila**: pinta pidetään tietyssä lämpötilassa, °C:nä.
   - **Lämpövuo**: pintaan virtaava W/m² (negatiivinen virtaa ulos). Se vaikuttaa pinnan todelliseen pinta-alaan, vaikka kuutiot muodostavat portaikon.
   - **Lämpöteho**: kokonaisteho wateissa, jaettuna valituille pinnoille pinta-alan mukaan. Käytä sitä lämmittimelle tai tunnetun tehon piirille.
   - **Konvektio**: lämpötilassa oleva ilma tai neste vie lämpöä pois arvolla h W/(m²·K). Tyypillisiä h-arvoja: paikallaan oleva ilma 5–10, tuuletin 25–100, vesi 500–10,000. PartCraft ei laske h:ta: tässä tutkimuksessa ei ole nesteen virtausta.
   - **Säteily**: pinta säteilee ympäristöön tietyssä lämpötilassa, emissiivisyydellä 0–1. Se on **linearisoitu** (säteily kirjoitetaan lämpötilasta riippuvana kertoimena, ja ratkaisu lasketaan uudelleen, kunnes se tasaantuu) ja menee vain ympäristöön: pinnat eivät vaihda lämpöä keskenään.
3. **Lämmöntuotto** (W/m³) lämmittää koko osaa sisältä päin, esimerkiksi vastusosaa.
4. Paina **Ratkaise**. Osa värjätään lämpötilan mukaan; valitse **Näytä**-kohdasta **Lämpövuo**, jos haluat nähdä, mihin lämpö virtaa. Osoita osaa, niin näet molemmat.

Vakaa lämpövirtaus tarvitsee paikan, mihin lämpö menee: vähintään yhden kiinteän lämpötilan, konvektion tai säteilyn. Osalla, joka vain ottaa lämpöä vastaan, ei ole vakaata tilaa; tee siitä sen sijaan ajasta riippuva.

Taulukossa luetellaan alin ja ylin lämpötila sekä niiden sijainti, suurin lämpövuo ja **lämpötase**: kuhunkin ehtoon sisään tai ulos virtaava lämpö (kiinteä lämpötila lasketaan sen mukaan, mitä sen on tuotettava tai absorboitava), tuotettu lämpö, sisään ja ulos menevien yhteissummat sekä **epätasapaino**. Epätasapainon pitäisi olla pieni murto-osa sisään tulevasta lämmöstä; suuri epätasapaino tarkoittaa, ettei tulokseen voi luottaa.

### Ajan myötä (transientti)

Valitse **Transientti** ja anna **Aloituslämpötila** (koko osa alkaa siitä), **Aikaväli** ja **Aika-askelten** määrä. **Implisiittinen Euler** on vakaa; **Crank–Nicolson** on tarkempi samoilla askelilla, mutta voi värähdellä äkillisen muutoksen jälkeen. Ratkaisun jälkeen vedä **Aika**-liukusäädintä nähdäksesi lämpötilat kullakin hetkellä (värikaavio pysyy samana kaikilla hetkillä). Lämpötase sisältää silloin myös varastoituneen lämmön.

## Lämpöjännitys: mitä lämpötilan muutos tekee osalle?

Staattisen jännityksen (tai **Nurjahduksen**) tutkimuksessa aseta **Lämpökuorma**:

- **Tasainen lämpötilan muutos**: koko osa lämpenee (tai jäähtyy, negatiivisella luvulla) tuon verran kelviniä.
- **Lämpötilat lämpöehdoista**: lisää lämpöehdot samaan tutkimukseen; vakaat lämpötilat ratkaistaan ensin samassa verkossa, minkä jälkeen osa laajenee määrällä α·(T − **jännityksetön lämpötila**).
- **Lämpötilat ajan myötä (transienttiajo)**: lisää lämpöehdot ja anna sitten **Aloituslämpötila**, **Aikaväli**, **Aika-askelten** määrä ja **Aika-askellus** kuten transienttilämpötilatutkimuksessa. Lämpötilat ratkaistaan ajan myötä samassa verkossa (kuutiot tai tetraedrit), ja kunkin hetken lämpötiloista tehty staattinen ratkaisu antaa tuon hetken jännityksen. **Jännitys hetkellä**:
  - **Pahin aika** (alku): **Jännitysratkaisuja** jakautuu tasaisesti ajanjakson yli, alku mukaan lukien (21, ellei muuta sitä; enintään 51). Tulokset avautuvat hetkellä, jolla on suurin von Mises -jännitys; taulukko nimeää sen, pieni kaavio näyttää huippujännityksen ajan funktiona, ja **Aika**-liukusäädin näyttää jännityksen jokaisella ratkaistulla hetkellä (värit pysyvät pahimman hetken mukaisina).
  - **Yksi valittu aika**: yksi hetki, lähin aika-askel annetulle **Aika (s)**-arvolle. Nurjahdustutkimus käyttää aina yhtä valittua aikaa (ajanjakson loppu, ellei itse aseta toista).

Osa, joka sammutetaan (upotetaan kuumasta kylmään) tai lämmitetään äkillisesti, on kuormittunut eniten silloin, kun sisä- ja pintalämpötila eroavat eniten: usein heti alussa. Pidetty lämpötila vaikuttaa ensimmäisestä hetkestä alkaen äkillisenä muutoksena, joten jännitys aivan alussa riippuu elementin koosta (vain muutama elementti näkee muutoksen). Lue se arvona "hyvin korkea" ja katso liukusäätimen seuraavilta hetkiltä arvoja, jotka verkko erottaa. Jännitys on kvasistaattinen: ei hitautta, ei värähtelyä äkillisestä muutoksesta.

Osalla, joka saa kasvaa vapaasti, ei ole lämpöjännitystä: pidä sitä juuri sen verran, ettei se liiku (esimerkiksi kolme kitkatonta pintaa suorassa kulmassa). Jos se on puristettu kahden seinän väliin, se puristuu: jäykkien seinien väliin lämmitetty teräsaisa, jonka lämpötila nousee 50 K, kantaa noin 117 MPa. Lämpökuormat tasapainottavat itsensä, joten reaktiot tasapainottavat edelleen vain mekaaniset kuormat.

## Nurjahdus: milloin hoikka osa antaa periksi?

1. Valitse **Tyypiksi** **Nurjahdus (lineaarinen)** ja lisää tuet ja kuormat kuten staattisessa tutkimuksessa.
2. Aseta **Etsittävät kuormakertoimet** (kuinka monta nurjahdusmuotoa).
3. Paina **Ratkaise**. Jokaisella muodolla on **kuormakerroin**: kerroin, jolla kuormillasi ihanteellinen osa nurjahtaa. Kuormakerroin 3 tarkoittaa kolminkertaisia kuormia; **kuormakerroin alle 1 tarkoittaa, että osa nurjahtaa jo sovelletuilla kuormilla**. Taulukko antaa myös kokonaiskuorman kullakin kertoimella. Muoto näyttää, miten osa nurjahtaa (sen koolla ei ole merkitystä).

**Lineaarinen nurjahdus yliarvioi todellisen nurjahduskuorman.** Se olettaa täydellisen osan: täysin suora, ilman jäännösjännitystä ja kimmoinen. Todellisissa osissa on pieniä epätäydellisyyksiä, ne voivat myötää ensin, ja ohutseinäiset kuoret voivat nurjahtaa murto-osalla lineaarisesta arvosta. Käytä runsasta marginaalia, ja pidä ohuen kuoren kuormakerrointa lähellä 3:a tai sen alapuolella varoitusmerkkinä.

## Kuinka paljon luottaa siihen

PartCraft tarkistaa nämä ratkaisijat käsinlaskukaavoja vastaan: tanko kahden lämpötilan välillä (tarkka), jäähtyvä evä (0.3 K:n tarkkuudella), laatta, joka lämpenee itsestään (tarkka), kuutio, joka jäähtyy ajan myötä (0.1 %:n tarkkuudella Crank–Nicolsonilla), tanko, joka lämmitetään äkillisesti toisesta päästä, vapaa tanko, joka lämmitetään (ei jännitystä, ΔL = αLΔT), tanko seinien välissä (σ = −EαΔT), sammutettu levy ajan myötä klassista sarjaratkaisua vastaan (1 %:n tarkkuudella kuutioilla, 2.1 % tetraedreilla levyn keskellä; 0.5 % sen pinnalla), pitkän ajon viimeinen hetki vakaata lämpöjännitystä vastaan (sama miljoonasosaan asti) ja Eulerin pylväät (1 %:n tarkkuudella kiinteä–vapaa, 1.5 % nivelletty–nivelletty). Pidä mielessä:

- **Vakiomateriaaliarvot.** Johtavuus, ominaislämpö ja laajeneminen eivät muutu tässä lämpötilan mukaan; muutaman sadan asteen lämpötilassa ne voivat muuttua 10–30 %. Myöskään jäykkyys ei muutu.
- **Jännitys ajan myötä on kvasistaattinen ja kimmoinen**: jokainen hetki on staattinen ratkaisu (ei hitautta), eikä myötämistä ole, joten sammutus, joka myötäisi pinnan, näyttää sen sijaan myötörajan ylittävän jännityksen.
- **Konvektiokertoimet ovat sinun syötteitäsi**, eikä niitä lasketa ilman tai veden virtauksesta.
- **Ei kosketusvastusta**: osa on yksi kiintokappale.
- **Vain lineaarinen nurjahdus**: ei epätäydellisyyksiä, ei myötämistä, ei käyttäytymistä nurjahduksen jälkeen.
- Kuutioiden portaikko ja terävät sisäkulmat vaikuttavat lämpöjännityksiin samoin kuin muihin jännityksiin (katso [Tarkista jännitys ja taipuma](topic:simulation)).
- Tämä on kokeellinen versio: tarkista tärkeät osat muulla tavalla.

## Liittyvää

- [Tarkista jännitys ja taipuma (Simulointi)](topic:simulation)
- [Mitä ei ole vielä toteutettu](topic:not-built-yet)
