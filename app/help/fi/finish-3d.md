---
title: 3D-viimeistely: rinnakkais- ja scallop-ajo
summary: Viimeistele koko mallin kaareva pinta pallo-, nenäkaari- tai tasojyrsimellä rinnakkaisissa viivoissa mihin tahansa kulmaan tai ajoissa, joiden välimatka on asetettu, jotta niiden väliset harjanteet pysyvät pyydetyssä korkeudessa. Mitä radat takaavat ja mitä eivät.
keywords: 3D-viimeistely, viimeistely, rinnakkainen, raster, scallop, vakio scallop, harjanne, pallonenä, nenäkaari, pinta, toleranssi, askelväli, rinne, jätettävä materiaali, pudotusterä, ylileikkaus, gouge
from: e1587d0a
---

Kaksi Valmistus-työtilan toimintoa leikkaavat **koko mallin pinnan** työkalun pysyessä pystysuorassa (kolme akselia). Ne eivät vaadi valintoja: ne työskentelevät kaikkeen mallin osaan, joka näkyy ylhäältä. Karkeile osa ensin (adaptiivinen tai taskuajo); viimeistelyajo materiaaliin, jota ei ole leikattu, varoittaa, että se leikkaisi syvään.

## Rinnakkainen

Suoria viivoja poikki mallin **kulmassa**, jonka asetat, **askelvälin** päässä toisistaan (osa työkalun halkaisijasta). Jokainen viiva seuraa pintaa: työkalun kärki on niin korkealla kuin on tarpeen, jotta mikään osa terästä ei mene mallin alle, ja viiva leikataan hienommin aina, missä pinta taipuu. Kun **Sahalaita** on päällä, työkalu pysyy alhaalla viivojen välillä siellä, missä se voi turvallisesti (tarkistetaan liikkeen varrelta); muuten se nousee.

- **Toleranssi**: kuinka kaukana suora pala viivasta saa olla todellisesta kärjen korkeudesta (puolta käytetään rajana kunkin palan keskikohdassa). Oletus 0,01 mm.
- **Vain jos pinta on vähintään … ja enintään … (°)**: viimeistele vain loivat tai vain jyrkät alueet. Missä pinta on alueen ulkopuolella, viiva jätetään pois ja työkalu nousee.
- **Jätettävä materiaali**: malli siirrettynä tuon etäisyyden verran (leikkuri kasvaa siitä: tarkka pallo- ja nenäkaarityökaluille; tasainen työkalu jättää vähintään sen verran).
- **Pohja**: mitään ei leikata tämän z-arvon alapuolelle.

## Scallop

Ajot, jotka pitävät vakioetäisyyden pinnan yli toisistaan, joten kahden vierekkäisen ajon väliin jäävä harjanne (scallop) on pyydetyssä **korkeudessa**. Etäisyys seuraa korkeudesta ja pallon säteestä: s = 2·√(2·R·h − h²), esimerkiksi noin 0,69 mm ajojen välillä Ø6 pallolle ja 0,02 mm harjanteelle. Nenäkaarityökalu käyttää kulmansa sädettä. Tasainen päätejyrsin hylätään: sillä ei ole harjannetta, jonka mukaan mitoittaa.

Ajot alkavat **mallin reunalta, sisäänpäin**, tai **mallin yläosasta, alaspäin**. Ne ovat etäisyyden käyriä pinnan yli (eivät korkeuden käyriä), joten rinteessä ne ovat lähellä toisiaan tasossa ja tasaisella kaukana toisistaan. Etäisyys mitataan pinnan yli olevalla ruudukolla ja on noin 1 %:n tarkkuudella; harjanteen korkeus on tarkka siellä, missä pinta on tasainen tai loivasti kaareva, ja likimääräinen siellä, missä se kaartuu nopeasti. **Myötäajo** pitää pinnan korkeamman puolen leikkurin oikealla puolella.

## Kuinka hyviä radat ovat

Testit tarkistavat suljetuilla kaavoilla tai riippumattomalla raa'an voiman haulla leikkurin jalanjäljestä:

- Työkalun alla oleva kärjen korkeus on tarkka pallolle, nenäkaarelle ja tasaiselle työkalulle pinnoilla, särmillä ja mallin kulmissa, eikä koskaan ole todellisen korkeuden yläpuolella. Rinnakkaisille viivoille rata pysyy toleranssin sisällä, eikä ylileikkausta ole syvempää kuin se.
- Polkujen pituudet kallistetulla tasolla vastaavat suljettua kaavaa. Scallop-ajot tasolla ovat pyydetyn välimatkan päässä, ja niiden välinen harjanne on pyydetyssä korkeudessa.
- Materiaalisimulaatio ei näytä ylileikkausta ajon jälkeen ja näyttää jäljelle jäävät harjanteet.

Mitä nämä radat eivät ole: ne ovat perusviimeistelyajoja, eivät koko sitä, mitä tuotantojärjestelmä tarjoaa.

- Ei vielä toteutettu: vesiraja (vakio z), kynä- ja kulmapuhdistus, säteittäiset ja spiraaliajot, käyrän projisointi pinnalle, tasaisten alueiden tunnistus, lepokoneistus, pidikkeen ja varren törmäystarkistukset sekä työkalun kallistaminen.
- Työkalun keskipiste pysyy mallin päällä: radat pysähtyvät mallin reunaan sen sijaan, että ne ajaisivat sen ohi, joten mallin reunassa oleva pystyseinä ei viimeisty sen jalkaan asti.
- Alituleikkauksia ei näy (pinta on se, minkä työkalu kohtaa ylhäältä).
- Malli on ytimen verkko, joten radat seuraavat verkkoa (sen jännetoleranssi on noin 0,0002 osan lävistäjästä), eivät tarkkaa pintaa.
- Suuren mallin viimeistely hienolla toleranssilla tekee pitkän ohjelman, jossa on paljon lyhyitä liikkeitä. Tarkista tulos koneesi omalla simulaattorilla ennen leikkausta.
