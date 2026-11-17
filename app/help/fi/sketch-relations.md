---
title: Luonnoksen rajoitteet ja mitoitukset
summary: Jokainen PartCraft-luonnoksen rajoite ja mitoitus, mitä valita kullekin, sen symboli ja sen toiminta ratkaisussa.
keywords: rajoitteet, rajoitukset, yhtyvä, vaakasuora, pystysuora, yhdensuuntainen, kohtisuora, tangentti, yhtä suuri, samankeskinen, keskikohta, lukitse, etäisyys, vaakaetäisyys, pystyetäisyys, säde, halkaisija, kulma, symbolit, merkit
from: 9831e7be
---

Rajoitteet kiinnittävät geometrian suhteessa muuhun geometriaan. Mitoitukset kiinnittävät koot. Lisätäksesi rajoitteen, valitse kohteet Valitse-työkalulla ({{key:S}}) ja valitse sen painike oikeasta paneelista. Lisätäksesi mitoituksen, käytä Mitoitus-työkalua ({{key:D}}) tai oikean paneelin mitoituspainikkeita. Työskentely näiden kanssa: [Mallinna luonnos täydellisesti](topic:relations-dimensions).

Alla ”käyrä” tarkoittaa ympyrää tai kaarta. Origo lasketaan pisteeksi.

## Rajoitteet

| Painike | Symboli | Valitse | Vaikutus |
|---|---|---|---|
| {{ui:• Yhtyvä}} | • (näkyy vain valittuna tai ongelman ilmetessä) | Kaksi pistettä | Pisteet kohtaavat |
| {{ui:• Yhtyvä}} | • | Piste ja viiva | Piste on viivalla (tai sen jatkeella) |
| {{ui:• Yhtyvä}} | • | Piste ja käyrä | Piste on ympyrällä tai kaarella |
| {{ui:H Vaakasuora}} | H | Viiva tai kaksi pistettä | Viiva on vaakasuorassa, tai kaksi pistettä ovat samalla korkeudella |
| {{ui:V Pystysuora}} | V | Viiva tai kaksi pistettä | Viiva on pystysuorassa, tai pisteet ovat toistensa päällä |
| {{ui:∥ Yhdensuuntainen}} | ∥ | Kaksi viivaa | Viivat kulkevat samaan suuntaan |
| {{ui:⊥ Kohtisuora}} | ⊥ | Kaksi viivaa | Viivat kohtaavat suorassa kulmassa |
| {{ui:T Tangentti}} | T | Viiva ja käyrä | Viiva koskettaa käyrää ylittämättä sitä |
| {{ui:T Tangentti}} | T | Kaksi käyrää | Ne koskettavat toisiaan, ulkopuolelta tai sisäpuolelta, kuten piirretty |
| {{ui:T Tangentti}} | T | Splini ja viiva, kaari tai splini, joka kohtaa jonkin sen päistä | Splini lähtee tuosta päästä toisen käyrän suuntaan |
| {{ui:= Yhtä suuri}} | = | Kaksi viivaa | Sama pituus |
| {{ui:= Yhtä suuri}} | = | Kaksi käyrää | Sama säde |
| {{ui:◎ Samankeskinen}} | ◎ | Kaksi käyrää | Sama keskipiste |
| {{ui:◎ Samankeskinen}} | ◎ | Piste ja käyrä | Piste on käyrän keskipisteessä |
| {{ui:M Keskikohta}} | M | Piste ja viiva | Piste on viivan keskikohdassa |
| {{ui:↔ Symmetrinen}} | ↔ | Kaksi pistettä ja viiva | Pisteet ovat peilikuvia viivan suhteen (Peilaa lisää näitä) |
| {{ui:⚓ Lukitse}} | ⚓ | Piste, viiva, käyrä tai splini | Pitää sen täsmälleen nykyisessä paikassaan (splini: sen pisteet) |

Tässä viivat sisältävät myös keskiviivat. Piirtäminen lisää joitakin rajoitteita puolestasi: pisteeseen tarttuminen tekee siitä yhtyvän, käyrälle tarttuminen asettaa pisteen sille, lähes vaakasuorat tai pystysuorat viivat saavat H- tai V-rajoitteen, ja suorakulmion neljä kulmaa ovat yhteen liitettyjä, kaksi H- ja kaksi V-rajoitetta.

**Lukitse** on nopea tapa estää liikkuminen, mutta osa ei silloin voi seurata mittamuutosta muualla. Suosi mitoituksia origoon.

## Mitoitukset

| Painike | Valitse | Mittaa | Näkyy muodossa |
|---|---|---|---|
| {{ui:Etäisyys}} | Viiva | Sen pituus | Etäisyys 40 |
| {{ui:Etäisyys}} | Kaksi pistettä | Niiden välinen suora etäisyys | Etäisyys 40 |
| {{ui:Etäisyys}} | Piste ja viiva | Etäisyys pisteestä viivaan, kohtisuoraan siihen | Etäisyys 40 |
| {{ui:Etäisyys}} | Kaksi yhdensuuntaista viivaa | Niiden välinen rako | Etäisyys 40 |
| {{ui:Vaakaetäisyys}} | Kaksi pistettä tai viiva | Vain vasen-oikea-etäisyys | Vaakaetäisyys 40 |
| {{ui:Pystyetäisyys}} | Kaksi pistettä tai viiva | Vain ylä-alas-etäisyys | Pystyetäisyys 40 |
| {{ui:Säde}} | Ympyrä tai kaari | Sen säde | Säde R10 |
| {{ui:Halkaisija}} | Ympyrä tai kaari | Sen halkaisija | Halkaisija ⌀20 |
| {{ui:Kulma}} | Kaksi viivaa, jotka eivät ole yhdensuuntaisia | Niiden välinen kulma, 0–180 astetta | Kulma 30° |

Mitoitustyökalulla PartCraft valitsee tyypin sen mukaan, mitä napsautat ja minne sijoitat numeron:

| Napsautat | Saat |
|---|---|
| Yhden viivan | Sen pituuden; vinolle viivalle vaakasuoran, jos numero on viivan yläpuolella tai alapuolella, pystysuoran, jos sivulla |
| Yhden ympyrän | Halkaisijan |
| Yhden kaaren | Säteen |
| Kaksi pistettä | Etäisyyden; vaaka- tai pystysuorana kuten vinolle viivalle |
| Pisteen ja viivan | Etäisyyden pisteestä viivaan |
| Kaksi viivaa | Kulman, tai etäisyyden, jos ne ovat yhdensuuntaisia |
| Pisteen ja ympyrän | Ei mitään: ”Näitä kohteita ei voi mitoittaa yhdessä.” Mitoita sen sijaan ympyrän keskipisteeseen |

**Siirtymä** (näkyy etäisyytenä) tehdään Siirtymä-työkalulla: se pitää kopioidun viivan yhdensuuntaisena tuolla etäisyydellä, tai kopioidun kaaren tai ympyrän samankeskisenä, säteeltään tuon verran suurempana tai pienempänä. Saman siirtymän muut osat saavat **O**-rajoitteen ja seuraavat yhtä Siirtymä-mitoitusta. Katso [Splinit, typistys, siirtymä ja muut luonnostyökalut](topic:sketch-tools).

Mitoitusarvot ovat millimetrejä (tai asteita), eivätkä ne ole koskaan negatiivisia. Säteen ja halkaisijan täytyy olla suurempi kuin nolla. Etäisyyksille arvo 0 on sallittu: kaksi pistettä 0:n etäisyydellä ovat yhtyviä.

## Ratkaisun toiminta

- **Vähiten liikettä.** Kun arvo muuttuu, ratkaisija siirtää geometriaa mahdollisimman vähän. Viiva, jonka pituus muuttuu, kasvaa molempiin päihinsä yhtä paljon, jos mikään ei pidä kumpaakaan päätä paikallaan.
- **Ei kääntymistä.** Pisteen ja viivan väliset etäisyydet, vaaka- ja pystyetäisyydet, kulmat ja tangentit muistavat, millä puolella ne tehtiin. Arvon muuttaminen ei koskaan käännä geometriaa toiselle puolelle.
- **Ristiriidat jättävät kaiken ennalleen.** Jos rajoitteet ovat ristiriidassa keskenään, luonnos pysyy täsmälleen ennallaan ja ristiriitaiset rajoitteet muuttuvat punaisiksi.
- **Ylimääräiset rajoitteet** (joita muut jo edellyttävät) mainitaan tilarivillä (”on jo määritetty. Poista se.”), ja muotoelementti rakentuu silti varoituksen kanssa.
- **Tangenttiliitokset.** Kohdassa, jossa pyöristyskaari kohtaa viivansa yhteisessä päätepisteessä, tangentti ratkaistaan muodossa, joka pysyy siinä täysin määriteltynä, joten luonnospyöristykset eivät näy ylimäärittyinä.

## Ei vielä käytettävissä

Samalla suoralla, samansäteisiä ja läpäisy-rajoitteet; piste splinillä; ohjaamattomat (viite-) mitoitukset; koordinaatti- ja kaaren pituusmitoitukset; mitoitusten väliset yhtälöt. Käytä yhdensuuntaisuutta ja 0:n etäisyyttä samalla suoralla oleville viivoille.
