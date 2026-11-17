---
title: Kentät: muodot etäisyyksinä
summary: Mitä kenttä on (muoto tallennettuna etäisyytenä pinnasta), miten se rakennetaan alkeismuodoista, booleaneista, hiloista ja minimipinnoista skriptissä, miten siitä tulee kappale ja miksi sama skripti antaa aina samat tavut.
keywords: kenttä, etäisyysfunktio, sdf, vokseli, gyroidi, tpms, hila, boolean, siirtymä, kuori, sulautus, kaksoiskontuurointi, deterministinen, vesitiivis, monistinen, tiili
from: faab7480
---

**Kenttä** kuvaa muotoa etäisyydellä mistä tahansa pisteestä sen pintaan: sisällä negatiivinen, pinnalla nolla, ulkopuolella positiivinen. Säteen 5 pallon kenttä on ”etäisyys keskipisteeseen miinus 5”. Muotojen yhdistäminen on laskutoimitusta etäisyyksillä: unioni on kahdesta pienempi, leikkaus suurempi, ja yhden muodon vähentäminen toisesta on ensimmäisen ja toisen negatiivisen arvon suurempi. Muodon kasvattaminen 1 mm:llä vähentää 1 etäisyydestä; ontto seinä on etäisyys, joka on taitettu yli.

Siksi kentät sopivat hiloille, kanaville ja asteittain muuttuville seinille: gyroidin pinta on ”sinisumma on nolla”, ja seinä, joka paksunee 1 mm:stä 3 mm:iin koko osan poikki, on luku, joka muuttuu osan poikki.

## Kentästä kappaleeksi

`to_body(field, h)` näytteistää kentän ruudukolla, jonka pisteet ovat `h` millimetrin päässä toisistaan, pitäen vain pinnan lähellä olevat pisteet (harva ruudukko 8 × 8 × 8 tiilenä), ja rakentaa pinnan **kaksoiskontuuroinnilla** (dual contouring): yksi kärkipiste pintasolua kohden, sijoitettuna siihen, missä pintatasot kohtaavat, joten terävä särmä pysyy terävänä vokselin tarkkuudella. Pinta on suljettu, ja jokainen särmä on jaettu täsmälleen kahden kolmion kesken; raportti kertoo sen. Muotoelementti, joka on ohuempi kuin noin kolme vokselia, voi kaventua, ja silloin raportti sanoo, ettei kappale ole suljettu kiintokappale, sen sijaan että se peittäisi sen.

Vokselin koko on tarkkuus: pallon tilavuus 25 vokselin läpimitalla on muutaman sadasosan prosentin sisällä, ja seinä on vain niin tarkka kuin sen vokselit. Mitä karkeampi ruudukko, sitä nopeammin se käy.

## Aina samat tavut

Kentällä ei ole kelloa eikä satunnaislukua. Gyroidin sini ja kosini sekä jokainen eksponentti-, logaritmi- ja potenssifunktio kirjastossa lasketaan pelkästä aritmetiikasta, jotta Node, Chrome, Firefox ja Safari antavat samat bitit. Ruudukko käydään läpi kiinteässä järjestyksessä, joten sama skripti samoilla syötteillä antaa tavuttain identtiset verkot ja datalomakkeet millä tahansa tietokoneella ja millä tahansa määrällä työsäikeitä. Tämä on testattu, myös selainta vertaamalla Nodeen.

## Seuraavaksi

[Kirjoita generaattori](topic:write-a-generator) rakentaa osan kentillä; [Insinöörikirjasto](topic:engineering-library) mitoittaa sen.
