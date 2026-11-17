---
title: Avaa STL, OBJ tai 3MF kiinteänä kappaleena
summary: Muuta skannerin, 3D-tulostuspalvelun tai toisen ohjelman verkko kiintokappaleeksi, jota voi leikata, johon voi lisätä ja jolle voi luonnostella. Kerrotaan, mitä PartCraft korjaa matkalla ja mitä se ei pysty korjaamaan.
keywords: stl, obj, 3mf, verkko, verkko kiintokappaleeksi, muunna verkko, skannaus, vesitiivis, korjaus, aukot, raot, yksiköt, ylös-akseli, tuotu kappale, litteät pinnat
from: 7b948471
---

PartCraft avaa STL-, OBJ- ja 3MF-verkot **kiinteinä kappaleina**. Kappale toimii kuten mikä tahansa kiintokappale: sitä voi leikata, siihen voi lisätä, siihen voi porata, sitä voi toistaa, käyttää kokoonpanossa tai työstössä ja luonnostella sen litteille pinnoille. Sillä ei ole omaa historiaa. Verkko on vain kolmioita, joten sen mittoja ei voi muuttaa, vain siihen voi lisätä tai siitä leikata.

## Avaa verkko

1. Valitse {{ui:Avaa}} tai paina {{key:Mod+O}} ja valitse `.stl`-, `.obj`- tai `.3mf`-tiedosto. Tai pudota se 3D-näkymään.
2. PartCraft lukee sen, korjaa turvallisesti korjattavat asiat ja näyttää, mitä löysi: kuinka monta kolmiota ja pistettä, jokaisen korjauksen ja sen, **sulkeutuuko** verkko nyt.
3. Tarkista **Yksiköt tiedostossa** ja **Ylös tiedostossa**. STL ja OBJ eivät kerro yksiköitään, joten millimetri on arvaus. 3MF-tiedosto kertoo omansa. **Koko tässä** -rivi näyttää kappaleen koon valintasi mukaan, joten osan, joka tulee 25.4 kertaa liian pienenä, huomaa helposti (se oli tuumina).
4. Jos osa näytössä on tyhjä, valitse {{ui:Avaa kappaleena}}. Jos sillä on jo piirteitä, valitse **Käytä sitä** (lisää osaan, leikkaa siitä tai pidä vain päällekkäinen osa) ja sitten {{ui:Lisää tähän osaan}}. Tai valitse {{ui:Uusi osa}} aloittaaksesi alusta verkon kanssa.

Historiaan ilmestyy **Imported1**-piirre. Tilarivi kertoo esimerkiksi: ”bracket.stl on kiinteä kappale: 15200.512 mm³, 14 litteää pintaa luonnosteltavaksi.”

## Mitä PartCraft korjaa

| Korjaus | Mitä se tarkoittaa |
|---|---|
| Kaksoiskulmat yhdistetty | STL toistaa jokaisen kulman jokaiselle kolmiolleen. Ne yhdistetään yhdeksi pisteeksi |
| Pinta-alattomat kolmiot poistettu | Siivut, joiden kulmat ovat samalla suoralla |
| Kaksoiskolmiot poistettu | Kolmio, joka on kirjoitettu kahdesti, säilytetään kerran. Kaksi vastakkain osoittavaa (sisäseinä) poistetaan molemmat |
| Pienet raot suljettu | Reunat, jotka melkein kohtaavat (osan koon tuhannesosan sisällä), yhdistetään |
| Aukot täytetty | Aukko, jonka reuna on litteä, täytetään kooltaan riippumatta. Vääntynyt aukko täytetään vain, kun se on pieni |
| Kolmiot käännetty ulospäin | Väärin osoittavat kolmiot käännetään vastaamaan naapureitaan, ja koko pinta käännetään osoittamaan ulos |

## Kun verkko ei sulkeudu

Kiintokappaleen pitää olla pinta ilman aukkoja. Kun PartCraft ei voi sulkea sitä, dialogi kertoo, kuinka monta aukkoa ja avointa reunaa on jäljellä, eikä kappaletta synny. Sulje aukot ohjelmassa, joka verkon teki, tai vie se uudelleen suljettuna (vesitiiviinä) verkkona ja avaa se uudelleen.

PartCraft jättää aukon rauhaan, kun sen täyttäminen voisi arvata väärin: suuri vääntynyt reikä tai kaksi aukkoa samassa tasossa (rengasmainen pinta, joka puuttuu, jolloin kunkin reunan täyttäminen peittäisi keskellä olevan reiän). Reuna, jota jakaa yli kaksi kolmiota, ilmoitetaan myös, sillä tällaisella pinnalla ei ole yhtä selkeää sisäpuolta.

## Luonnostele litteille pinnoille

Monen kolmion muodostamat tasaiset alueet yhdistetään kukin yhdeksi **litteäksi pinnaksi**, joten luonnos voi sijoittua niille: napsauta pintaa ja valitse {{ui:Luonnostele tälle pinnalle}}. Pinta, jota leikataan tai johon lisätään myöhemmin, pysyy pintana. Pyöreät alueet (reikä, pyöristys) pysyvät kolmioina. Ne eivät ole pintoja, joita voi valita, ja näkymä piirtää niiden ääriviivan kolmioiden välisestä kulmasta.

## Muuta myöhemmin

Valitse **Imported1** nähdäksesi tiedoston, josta se tuli, kuinka monta kolmiota siinä on ja mitä korjattiin. **Yksiköt tiedostossa**, **Ylös tiedostossa** ja **Käytä sitä** voidaan muuttaa siellä. Jokainen muutos on yksi kumoamisaskel.

## Missä se säilytetään

Korjattu verkko tallennetaan `.partcraft.json`-tiedoston **sisään**, joten verkkotiedostoa ei tarvita uudelleen. Osatiedosto, jossa on verkkokappale, on versiota 5, ja vanhempi PartCraft hylkää sen versiosta. 200 000 kolmion verkko lisää noin 1.2 MB.

## Rajat

- Enintään 3 miljoonaa kolmiota ja 200 MB yhdessä tiedostossa.
- Verkosta tehty kappale rakennetaan verkkoytimellä. Tarkalla ytimellä (vain kehittäjille) päällä se kertoo sen eikä rakenna kappaletta.
- OBJ-materiaalit, tekstuurikoordinaatit ja vapaamuotoiset käyrät jätetään pois. 3MF-värit, -materiaalit ja tukikohteet jätetään pois (dialogi kertoo, kuinka monta kohdetta ohitettiin).
- Kappale on yhtä hieno kuin verkko: karkea STL antaa karkeita pyöreitä pintoja. Siihen porattavat reiät ovat yhtä pyöreitä kuin omat piirteesi.
