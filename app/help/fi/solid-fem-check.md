---
title: Solid FEM: yhden osan jännitystarkistus
summary: Ota Solid FEM -lisäosa käyttöön, verkota osa, valitse kiinnitetyt pinnat ja kuorma 3D-näkymässä, ratkaise ja lue siirtymä ja von Mises -jännitys mallilla.
keywords: solid fem, elementtimenetelmä, fea, jännitys, von mises, siirtymä, kiinnitetty pinta, kuorma, paine, painovoima, ominaistaajuus, muotomuoto, verkko, lisäosa
from: 8b7e6ba2
---

## Mitä teet

Tarkistat yhden kiintokappaleosan kuorman alla: missä se liikkuu ja missä jännitys on suurin. Tutkimus on lineaarinen ja kimmoinen, joten se on tarkistusapu; insinööri tarkistaa tulokset.

## Vaiheet

1. Valitse {{ui:Asetukset}} › {{ui:Lisäosat}} ja ota käyttöön {{ui:Solid FEM}} (se on pois päältä, kunnes teet niin). Avaa {{ui:Solid FEM}}-välilehti oikeasta paneelista.
2. Valitse kohdasta {{ui:Materiaali}} materiaali tai {{ui:Mukautettu}} ja kirjoita Poisson-luku, tiheys ja myötölujuus.
3. Paina {{ui:Lisää lukitut pinnat}}, napsauta 3D-näkymässä pinnat, jotka on pidetty paikallaan, ja paina sitten {{ui:Valinta valmis}}.
4. Lisää kuorma painamalla {{ui:Lisää voima}}, {{ui:Lisää paine}} tai {{ui:Lisää painovoima}} ja valitse sen pinnat samalla tavalla.
5. Paina {{ui:Verkota osa}} ja sitten {{ui:Ratkaise}}. Valitse ensin {{ui:Ominaistaajuudet}} kohdasta {{ui:Tutkimus}}, jos haluat taajuudet.
6. Lue {{ui:Tulokset}} ja {{ui:Varoitukset}}, paina sitten {{ui:Näytä mallissa}} piirtääksesi von Mises -jännityksen, siirtymän tai muotomuodon; {{ui:Poista esitys}} poistaa sen.

## Huomautukset

- Sivu ratkaisee enintään kiinteän määrän elementtejä; tilarivi kertoo, kun elementtikokosi on liian hieno.
- Jännitys kiinnitettyjen pintojen, kuormapisteiden ja terävien kulmien kohdalla kasvaa verkkoa tihennettäessä. Tihennä ja vertaa ennen kuin luotat huippuarvoon.
- Jokainen muutos on yksi kumoamisaskel, ja asetukset tallentuvat osatiedostoon.
- Myötämistä ja kosketusta koskevia tutkimuksia varten katso [Tarkista jännitys ja taipuma](topic:simulation).
