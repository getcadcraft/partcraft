---
title: Osat fysiikasta: generaattorit
summary: Engineer-työtila ja Generoitu kappale -piirre: valitse generaattori, aseta sen syötteet (virtaus, paine, lämpötilat, materiaali, tulostin) ja saat osan, jonka mitat on laskettu oppikirjakaavoilla, sekä sen tietolehden, valmistustarkistukset ja tiedostot analyysityökaluille. Samat syötteet antavat aina saman osan.
keywords: engineer, generaattori, generoitu kappale, fysiikka, säännöt, lämmönvaihdin, jakotukki, suutin, hila, gyroidi, tietolehti, syötteet, deterministinen, samat syötteet samat osat, valmistustarkistukset, 3d-tulostus, jauhepeti
from: 5a387dc0
---

**Generaattori** on skripti, joka mitoittaa osan vaatimustesi perusteella ja rakentaa sen. Lämmönvaihdingeneraattori ottaa siirrettävän lämmön, kaksi virtausta ja niiden lämpötilat, paineen ja materiaalin; se laskee, kuinka suuri ytimen täytyy olla ja kuinka paksu sen seinämän pitää olla, rakentaa sen ja kertoo käyttämänsä luvut ja sen, mistä kukin tuli. Muuta syötettä, ja osa seuraa perässä.

Tulos on tavallinen kappale osassa: se on piirrelistassa, sen voi tulostaa ja viedä. Generaattori itse säilytetään myös osassa, joten tiedosto aukeaa millä tahansa tietokoneella, johon generaattoria ei ole asennettu, ja **tiedoston avaaminen ei koskaan aja skriptiä**.

## Tee kappale

1. Valitse työtilanvaihtimesta {{ui:Engineer}}-työtila.
2. Valitse generaattori listasta (PartCraftin mukana tulevat, sitten ne, jotka avasit tiedostosta) ja napsauta {{ui:Uusi}}.
3. Skripti ajetaan. Kun se on valmis, kappale näkyy näkymässä, ja paneeli näyttää sen syötteet, sen **tietolehden** ja sen **tarkistukset**.

Voit myös lisätä sellaisen Suunnittelusta: {{ui:Muotoelementit}} › {{ui:Lisää}} › {{ui:Generoitu kappale}}.

## Muuta sitä

Kun muutat mitä tahansa syötettä, kappale tehdään uudelleen hetken kuluttua siitä, kun lopetat kirjoittamisen. Paneeli kertoo, mikä kolmesta on totta:

- **Ajan tasalla**: kappale vastaa skriptiä ja sen syötteitä.
- **Syötteet muuttuivat**: osan kappale on aiemmista syötteistä; sitä tehdään uudelleen, tai paina {{ui:Aja}}.
- **Ei ajettu vielä** tai **Viimeisin ajo epäonnistui**: skriptivirhe näytetään rivinumeron kanssa.

{{ui:Pysäytä}} lopettaa ajon, joka kestää liian kauan. Kumoa menee taaksepäin askel kerrallaan: ajo on yksi askel, syöte on yksi askel.

## Tietolehti

Jokainen generaattorin laskema luku on listattu sen **yksikön** ja **lähteen** kanssa (oppikirjakaava, standardi, tietolehti). Mikään ei ole piilotettu vakio. Tietolehti kuuluu tiedostoon, joten se on sama seuraavalla tietokoneella. [Datan vienti](topic:data-out) kertoo, miten se tallennetaan JSON- tai PDF-muodossa.

## Tarkistukset

Generaattori voi tarkistaa oman osansa tulostusprosessia vastaan: seinät ja raot, jotka ovat ohuempia kuin prosessi kestää, irralliset kappaleet, ontelot, jotka vangitsevat jauhetta tai hartsia, liian kapeat reiät puhdistettaviksi, ja ulokkeet, jotka tarvitsevat tukea. Havainnot ovat paneelissa ja {{ui:Ongelmat}}-listassa (⚠-painike), ja ne tallennetaan osan mukana.

Prosessiluvut ovat pyöreitä lukuja, joita julkiset suunnitteluoppaat antavat prosessille yleisesti (FDM, SLA, SLS, metallijauhepeti). Ne **eivät ole koneesi teknisiä tietoja**: korvaa ne verstaasi omilla luvuilla ennen kuin luotat tarkistukseen. Tarkistus toimii voksel-hilalla, joten se on tarkka noin yhden voksel-kokoisen tarkkuuden verran: seinä ilmoitetaan vain silloin, kun se on ohuempi kuin raja yli yhden voksel-koon verran.

## Mitä mukana tulee

| Generaattori | Mitä se tekee |
|---|---|
| Gyroidilohko | Lohko, joka on täytetty gyroidilla, Schwarz P:llä tai timanttilevyllä: yksinkertaisin hila |
| Gyroidilämmönvaihdin | Kaksinestevaihtimen ydin, mitoitettu tehtävästä efektiivisyys-NTU-menetelmällä, seinämä paineesta; voi tarkistaa painehäviön virtaustutkimuksella yhdessä solussa |
| Jakotukki | Runko ja haarat, jokainen putki mitoitettu sen kuljettaman virtauksen mukaan |
| Kaltevuushilapalkki | Hila, jonka seinämä paksunee kohdissa, joissa topologiaoptimointi osoittaa tarvetta materiaalille |

Kaikki ovat ensimmäisiä arvioita, jotka perustuvat oppikirjakaavoihin. [Insinööritekninen kirjasto](topic:engineering-library) listaa kaavat ja niiden rajoitukset. Aja Simulointi, Lämpö tai Virtaus tulokselle ennen kuin luotat siihen.

## Vientivalvonta

Engineerin generaattoreissa ja tietolehdissä on ilmoitus vientivalvonnasta ja pakotteista. Lue se kohdassa [Engineer ja vientivalvonta](topic:engineer-export-notice); se on myös jokaisen tietolehden alalaidassa.

## Ei vielä toteutettu

- Lämmönvaihtimen ytimen liittimet, portit ja kiinnikkeet: se on vain ydin.
- Materiaalin lujuuden lämpötilakäyrät: materiaalit ovat huoneenlämpötilassa.
- Haarahäviöt ja virtauksen jakautuminen jakotukin ulostulojen kesken.
- Generaattorien lisääminen lisäosahakemistosta yhdellä napsautuksella; tiedoston avaaminen lisää yhden tähän selaimeen.
- Generaattorit muille sovelluksille.
