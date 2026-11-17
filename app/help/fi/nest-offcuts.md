---
title: Säilytä ja käytä uudelleen ylijäämät
summary: Asettelun jälkeen kunkin levyn jäljelle jäävästä osasta tulee numeroitu jäännöspala varastoluetteloon. Seuraava asettelu käyttää ensin jäännöspalat ja vasta sitten täydet levyt.
keywords: asettelu, ylijäämä, jäännöspala, varasto, jäte, levy, arkki, uudelleenkäyttö, materiaali, paksuus, CSV
from: 7a68d4b8
---

Kun asettelet osia levyille, kunkin levyn käyttökelpoinen jäämä (ei siruja) voidaan säilyttää **jäännöspalana**: numeroitu ääriviiva (R-0001, R-0002 …) materiaalin, paksuuden, koon ja työn kanssa, josta se tuli. Luettelo tallentuu tiedoston mukana, ja sen voi tallentaa CSV-tiedostona.

## Käytä uudelleen

Anna **materiaali** ja **paksuus**, jätä {{ui:Käytä jäännöspalat ensin}} päälle ja asettele. Saman materiaalin ja paksuuden jäännöspaloja kokeillaan pienimmästä alkaen. Osat, jotka mahtuvat, menevät niille jäännöspalan omaan ääriviivaan ja reunasta irti; loput menevät uusille levyille. Työraportti kertoo, mitä jäännöspaloja käytettiin ja mitä niistä jäi jäljelle. Kun {{ui:Tallenna ylijäämät jäännöspaloiksi}} on päällä, {{ui:Lisää tämä työ varastoon}} kirjoittaa sen varastoluetteloon: käytetty jäännöspala merkitään **Käytetty** (työn kanssa) eikä sitä tarjota enää. Siitä jäljelle jäävä osa muodostaa uuden jäännöspalan, joka muistaa alkuperäisensä.

## Mikä lasketaan jäännöspalaksi

Jäämä mitataan asettamallasi välillä, eli mikään osa ei ole sitä lähempänä leikkausta. Kapeammat kuin levyn kahdeskymmenesosa olevat kaistat ja alle 2 % levystä olevat palat ovat romua. Muuta molempia rajoja, jos verstaasi säilyttää pienempiä kappaleita. Osien sisällä olevat reiät kuuluvat osille eivätkä säily jäännöspalana. Rullalla ei ole jäännöspaloja.

## Piirustuksessa

Asettelun DXF piirtää jokaisen jäännöspalan ääriviivan tasolle REMNANTS, ja sen numero on keskellä. Näin palat voidaan merkitä leikattaessa.

Ei vielä toteutettu: jäännöspalan kuitusuunta, viivakoodi- tai tarrasivu, rullien jäännöspalat, varastot, jotka ovat yhteisiä projektien välillä.
