---
title: Solmut: rakenna malli kytkemällä
summary: Kytke luvut pisteiksi, pisteet käyriksi ja käyrät pinnoiksi. Kun muutat lukua alussa, kaikki sen jälkeen rakentuu uudelleen. Jokainen solmu on myös CraftScript-rivi, ja kaavio tallentuu osatiedostoon.
keywords: solmut, solmueditori, visuaalinen ohjelmointi, parametrinen, kaavio, johdot, portit, vapaamuotoinen, nurbs, loft, pursotus, kierto, ympyrä, käyrä, pinta, sarja, alue, satunnainen, luettelo, skripti, craftscript, grasshopper
from: 3a4625de
---

**Solmut**-editori rakentaa geometriaa yhdistämällä laatikoita. Jokainen laatikko (solmu) tekee yhden pienen tehtävän: tekee luvun, pisteen, ympyrän tai loftin. Yhdistät yhden solmun tuloksen seuraavan syötteeseen, ja malli seuraa, kun muutat alkupään lukua.

Avaa se työtilaluettelosta: {{ui:Solmut}}. Se avaa editori-ikkunan. Osa, jolla on jo kaavio, näyttää sen, kun avaat työtilan. Ikkuna on 3D-näkymän päällä: vedä sen otsikkopalkista siirtääksesi sitä ja vedä kulmasta muuttaaksesi kokoa.

## Yhdistäminen

1. Valitse solmu vasemmalla olevasta luettelosta. Kirjoita hakukenttään rajataksesi luetteloa; <kbd>Enter</kbd> lisää ensimmäisen osuman. Solmu ilmestyy kankaan keskelle.
2. Vedä pyöreästä **lähtöpisteestä** (output) solmun oikealla puolella pyöreään **tulopisteeseen** (input) toisen solmun vasemmalla puolella. Piste muuttuu vihreäksi, kun se sopii, ja punaiseksi, kun ei. Osoita sitä nähdäksesi syyn.
3. Tuloon, johon ei ole kytketty mitään, ilmestyy ruutu kirjoitettavalle arvolle. Kirjoita luku ja paina <kbd>Tab</kbd>: tulos rakentuu uudelleen.
4. Solmun otsikkopalkin pieni ympyrä on sen **silmä**. Solmu, jonka silmä on päällä, piirtyy 3D-näkymään: käyrät viivoina, pinnat varjostettuina ja pisteet pisteinä.

Vedä solmu sen otsikkopalkista. Vedä taustaa siirtääksesi kuvaa ja pyöritä rullaa zoomataksesi. <kbd>Delete</kbd> poistaa valitun solmun. {{ui:Siisti}} järjestää solmut sarakkeisiin, {{ui:Sovita}} tuo ne kaikki näkyviin, ja {{ui:Kumoa}} ja {{ui:Tee uudelleen}} käyvät muokkauksesi läpi.

## Tyypit ja yksiköt

Porteilla on tyyppi: luku, kyllä/ei, piste, vektori, käyrä, pinta, verkko, kiintokappale tai "geometria" niille kaikille. Piste voi syöttää vektorisyötteen ja päinvastoin. Luvuilla on yksikkö: **pituus** on millimetreinä ja **kulma** asteina. Pituus ei voi syöttää kulmaa, ja pituus kerrottuna pituudella (pinta-ala) hylätään. Näin väärä johto pysäytetään jo, kun sen teet.

Neliön muotoinen piste on **luettelo**. Kun luettelo tulee yksittäisarvoiseen syötteeseen, solmu ajetaan kerran jokaiselle kohteelle, ja sen tulos on luettelo. Lyhyempi luettelo toistaa viimeisen kohteensa. Esimerkiksi **Sarja** korkeuksia **Siirrä**-solmuun tekee pinon kopioita.

## Kiintokappaleet ja Boolen-operaatiot solmuina

**Kiintokappaleet**-ryhmä tekee suljettuja kappaleita samoista tarkoista pinnoista kuin Pinnat-paneeli: **Laatikkokiintokappale**, **Sylinterikiintokappale** ja **Pallokiintokappale** (mitat mm), **Yhdiste**, **Vähennä** ja **Leikkaus** (toinen kiintokappale otetaan ensimmäisestä; toleranssi kertoo, kuinka kaukana kiintokappalemoottorin kolmiot saavat olla tarkoista pinnoista), **Pyöristys pintojen välillä** (pinnat niiden numeron mukaan kiintokappaleessa, 1 on ensimmäinen; säde ja, jos se on yli 0, säde lopussa), **Kiintokappaleen tilavuus** (mm³) ja **Kiintokappale verkoksi** (näkemiseen tai kiinteyttämiseen). Kiintokappaleella on oma porttityyppinsä: pistettä tai lukua ei voi johtaa kiintokappalesyötteeseen, ja portti pysyy punaisena. Boolen- ja pyöristyssolmut käyttävät ohjelman omaa kiintokappalemoottoria, joka ladataan ensimmäisen kerran, kun editori avautuu.

## Virheet

Solmu, joka ei pysty tekemään tehtäväänsä, kertoo syyn nimensä alla punaisella, esimerkiksi ”Säteen on oltava suurempi kuin nolla.”, ja sitä seuraavat solmut odottavat. Sama viesti on Ongelmat-paneelissa ongelmana, josta löydät sen.

## Jokainen solmu on skriptirivi

Paina {{ui:Skripti}} nähdäksesi kaavion CraftScriptinä: yksi rivi solmua kohti, esimerkiksi `n3 = nd_circle(n2, n1, [0 0 1]);`. Muokkaa tekstiä ja paina {{ui:Tee kaavio tästä skriptistä}} tuodaksesi sen takaisin kaavioksi. Samat `nd_`-funktiot toimivat PartCraftin CraftScript-skriptissä, joten kaaviota voi ajaa, silmukoida ja testata siellä. Satunnaisluvut vaativat aina **siemenen**, joten sama kaavio antaa saman tuloksen joka tietokoneella.

## Tallentuu tiedoston mukana

Kaavio tallennetaan osatiedostoon, ei historiaan, joten editorin Kumoa on oma. Solmut tekevät käyriä, pintoja ja verkkoja kiintokappaleen rinnalle, eivätkä ne muuta osan piirteitä.
