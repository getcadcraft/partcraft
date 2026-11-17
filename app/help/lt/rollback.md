---
title: Grįžimas atgal ir pirmyn per istoriją
summary: Judinkite grąžinimo juostą aukštyn ir žemyn po vieną elementą, kad stebėtumėte detalės kūrimą, įterpkite elementus viduryje ir grįžkite į galą.
keywords: grąžinimas, grąžinti atgal, grąžinti pirmyn, grąžinimo juosta, žingsniavimas per istoriją, įterpti elementą, užšaldyti, istorija
from: 9a366cae
---

Grąžinimo juosta nusprendžia, kiek istorijos sukurta. Elementai žemiau juostos yra pilki ir nesukurti; nauji elementai įterpiami juostoje.

## Žingsniuokite po vieną elementą

Kai detalė ekrane (neatidarytas joks eskizas ar brėžinys):

| Veiksmas | Rezultatas |
|---|---|
| {{key:[}} arba rodyklės aukštyn mygtukas šalia detalės pavadinimo | Juosta pakyla vienu elementu |
| {{key:]}} arba rodyklės žemyn mygtukas | Juosta nusileidžia vienu elementu |
| {{key:End}} arba mygtukas, perkeliantis juostą į galą | Visi elementai vėl sukuriami |

Būsenos juosta rodo, kur yra juosta, pavyzdžiui: „Rollback bar after Sketch1: 1 of 2 features built“ (lietuviškai: „Grąžinimo juosta po Sketch1: sukurta 1 iš 2 elementų“). Mygtukai išjungti, kai juosta toliau tuo keliu judėti negali.

Taip pat galite pasirinkti {{ui:Grąžinti iki čia}} bet kuriame elemente arba spustelėti **Grąžinimo juosta · pirmyn** istorijoje.

## Įterpkite elementą viduryje

1. Žingsniuokite juostą atgal, kol ji stovės ten, kur turi būti naujas elementas.
2. Pridėkite elementą: jis įtraukiamas juostoje.
3. Paspauskite {{key:End}}, kad likusią istoriją sukurtumėte ant jo.

Kiekvienas juostos judėjimas yra žingsnis, kurį galite anuliuoti su {{key:Mod+Z}}. Juostos vieta išsaugoma faile, todėl detalę galima išsiųsti grąžintą atgal. Komandinės eilutės įrankis taip pat ją perkelia: `partcraft rollback part.json` ir `partcraft forward part.json --end`.
