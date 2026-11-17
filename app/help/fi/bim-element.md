---
title: Suunnittele BimCraft-elementti ja tallenna se takaisin
summary: BimCraftista lähetetty osa avautuu rakennuksen ympäröimänä, harmaana ja vain luettavana. Muuta sitä ja tallenna se sitten takaisin, jotta BimCraft voi hyväksyä uuden muodon.
keywords: bimcraft, bim, elementti, lähetä, tallenna takaisin, linkki, rakennus, ympäristö, naapurit, tuenta, kiinnike, ifc, hyväksy
from: 0978fe53
---

## Mitä teet

Työstät BimCraft-mallista peräisin olevaa osaa sen paikassa rakennuksessa ja lähetät uuden muodon takaisin.

## Vaiheet

1. BimCraftissa valitse elementti ja valitse {{ui:Osalinkit}} › {{ui:Lähetä PartCraft-sovellukseen}}. PartCraft avaa sen uutena osana. Tilarivi kertoo, että se on BIM-elementti.
2. Sen ympärillä olevat elementit (3 m:n säteellä) piirretään harmaina. Ne ovat siellä suunnittelun vertailukohtana. Niitä ei voi valita eikä muuttaa, eikä niitä tallenneta osatiedostoon.
3. Muuta osaa kuten mitä tahansa muuta: leikkaa, lisää, poraa, peilaa. Sen origo ja akselit ovat elementin omat, joten osa palaa paikalleen, jossa se oli.
4. Valitse {{ui:Tiedosto}} › {{ui:Vie}} › {{ui:Tallenna takaisin BimCraft-sovellukseen}}. Tilarivi kertoo, mikä revisio lähetettiin.
5. BimCraft-sovelluksessa elementti näkyy muuttuneena, kunnes sen käyttäjä hyväksyy muutoksen.

## Mitä pitäisi näkyä

- Osa säilyttää linkkinsä tiedostossa. Kun avaat sen myöhemmin, tilarivi sanoo edelleen, että se on BIM-elementti. Harmaa rakennus palautuu, kun selain vielä pitää hallussaan pakettia, jolla osa lähetettiin.
- Kun tallennat takaisin uudelleen, lähetetään revisio 2, 3 ja niin edelleen. BimCraft säilyttää uusimman.

## Hyvä tietää

- Muoto palautuu verkkona millimetreinä elementin omissa akseleissa. Muotoelementit pysyvät PartCraft-sovelluksessa.
- {{ui:Tallenna takaisin BimCraft-sovellukseen}} ei tee mitään osalle, joka ei tullut BimCraft-sovelluksesta.
- Osalla, jossa ei vielä ole kiintokappaletta, ei ole lähetettävää.
- Molempien sovellusten on oltava auki samassa selaimessa. Mitään ei lähetetä palvelimelle, vaan kaksi sivua siirtävät elementin keskenään.
