---
title: 3D-viimeistely: yhdensuuntainen ja harjanne
summary: Viimeistele koko mallin kaareva pinta pallo-, nuppi- tai tasapääjyrsimellä yhdensuuntaisina viivoina mihin tahansa kulmaan tai ajoina, jotka ovat asetetun matkan päässä toisistaan, jotta niiden väliin jäävät harjanteet pysyvät pyydetyssä korkeudessa. Mitä radat takaavat ja mitä eivät.
keywords: 3D-viimeistely, viimeistely, yhdensuuntainen, rasteri, harjanne, vakioharjanne, huippu, pallokärki, nuppi, pinta, toleranssi, askelväli, kaltevuus, jätettävä ylimäärä, pudotusterä, ylileikkaus
from: 942d2341
---

Manufacture-työtilan kaksi toimenpidettä leikkaavat **koko mallin pinnan** työkalun pysyessä pystyssä (kolme akselia). Ne eivät vaadi valintoja: ne työstävät kaiken mallista, joka näkyy ylhäältä. Karkeista osa ensin (mukautuva raivaus tai tasku); viimeistelyajo leikkaamattoman raaka-aihion yli varoittaa, että se leikkaisi syvälle.

## Yhdensuuntainen

Suorat viivat poikki mallin asetetussa **kulmassa**, **askelvälin** päässä toisistaan (osa työkalun halkaisijasta). Jokainen viiva seuraa pintaa: työkalun kärki on niin korkealla kuin pitää, ettei mikään leikkurin osa mene mallin alapuolelle, ja viiva jyrsitään hienommin siellä, missä pinta taipuu. Kun **Sikksakki** on päällä, työkalu pysyy alhaalla viivojen välillä siellä, missä se voi turvallisesti (tarkistetaan liikkeen varrelta); muuten se nousee.

- **Toleranssi**: kuinka kaukana viivan suora osa saa olla todellisesta kärkikorkeudesta (puolta käytetään rajana kunkin osan keskikohdassa). Oletus 0,01 mm.
- **Vain jos pinta on vähintään … ja enintään … (°)**: viimeistele vain loivat tai vain jyrkät alueet. Alueen ulkopuolella viiva jätetään pois ja työkalu nousee.
- **Jätettävä ylimäärä**: malli siirrettynä tuon etäisyyden verran (leikkuri kasvaa sen verran: tarkka pallo- ja nuppityökaluille; tasatyökalu jättää vähintään sen verran).
- **Pohja**: mitään ei leikata tämän z-korkeuden alapuolelle.

## Harjanne

Radat, jotka pitävät vakioetäisyyden toisistaan pinnalla, jolloin kahden vierekkäisen radan väliin jäävän harjanteen (harjanteen) **korkeus** on pyydetty. Etäisyys seuraa korkeudesta ja pallon säteestä: s = 2·√(2·R·h − h²), esimerkiksi noin 0,69 mm ratojen välillä Ø6-pallolle ja 0,02 mm harjanteelle. Nuppityökalu käyttää kulmasäteeään. Tasapääjyrsintä hylätään: sillä ei ole harjannetta mitoitettavaksi.

Radat alkavat **mallin reunasta sisäänpäin** tai **mallin yläosasta alaspäin**. Ne ovat etäisyyden käyriä pinnalla (eivät korkeuden), joten rinteessä ne ovat lähellä toisiaan tasossa ja tasolla kaukana toisistaan. Etäisyys mitataan pinnan yli olevalla ruudukolla ja on noin 1 %:n tarkkuudella; harjanteen korkeus on tarkka siellä, missä pinta on tasainen tai loivasti kaareva, ja likimääräinen siellä, missä pinta kaareutuu nopeasti. **Myötäjyrsintä** pitää pinnan korkeamman puolen leikkurin oikealla puolella.

## Kuinka hyviä radat ovat

Testit tarkistavat suljetuilla kaavoilla tai riippumattomalla raakavoimaisella haulla työkalun jalanjäljen yli:

- Työkalun alla oleva kärkikorkeus on tarkka pallo-, nuppi- ja tasatyökalulle pinnoilla, reunoilla ja kulmilla mallin verkossa, eikä se ole koskaan todellista korkeutta suurempi; yhdensuuntaisille viivoille rata pysyy toleranssin sisällä, eikä siinä ole ylileikkausta, joka olisi sitä syvempi.
- Ratojen pituudet kallistetulla tasolla vastaavat suljettua kaavaa; harjannerataat tasolla ovat pyydetyn etäisyyden päässä ja niiden välinen harjanne tulee pyydetyn korkuiseksi.
- Raaka-aihion simulointi ei näytä ylileikkausta ajon jälkeen ja näyttää jäljelle jääneet harjanteet.

Mitä nämä radat eivät ole: ne ovat perusviimeistelyajoja, eivät koko tuotantojärjestelmän tarjontaa.

- **Ei vielä toteutettu**: vesirajaviimeistely (vakio-z), kynä- ja kulmapuhdistus, säteittäiset ja spiraaliradat, käyrän heijastaminen pinnalle, tasaisten alueiden tunnistus, pidikkeen ja varren törmäystarkistukset. Karkeistus ja jäännöstyöstö ovat omia toimenpiteitään ([3D-karkeistus ja jäännöstyöstö](topic:rough-3d)); kallistuva työkalu on [5-akselinen viimeistely](topic:multi-axis#5-axis-finishing).
- Työkalun keskipiste pysyy mallin päällä: radat pysähtyvät mallin reunalle sen sijaan, että jatkuisivat sen ohi, joten pystysuora seinä aivan reunalla ei viimeisty jalkaansa asti.
- Alileikkauksia ei näe (pinta on se, minkä työkalu kohtaa ylhäältä).
- Malli on ytimen verkko, joten radat seuraavat verkkoa (sen jännetoleranssi on noin 0,0002 osan lävistäjästä), eivät tarkkaa pintaa.
- Suuren mallin viimeistely hienolla toleranssilla tuottaa pitkän ohjelman, jossa on paljon lyhyitä liikkeitä. Tarkista tulos koneesi omasta simulaattorista ennen leikkaamista.
