---
title: Pidä .3dm-malli elävänä
summary: Muuta mallia siinä ohjelmassa, jolla se tehtiin, ja seuraa PartCraftin kappaletta: Rhino 8:sta tai Grasshopper-määrittelystä, muotoelementit rakennetaan uudelleen uudelle muodolle.
keywords: rhino, grasshopper, elävä linkki, elävä yhteys, 3dm, nurbs, parametrinen, linkki, synkronointi, skripti, työntö, tuotu kappale
from: cf4dc9b2
---

Muotoile malli siellä, missä mallinnat, ja koneista, tarkista ja dokumentoi se täällä. Jokainen muutos toisessa ohjelmassa korvaa yhden tuodun kappaleen PartCraftissa, ja sen jälkeiset muotoelementit rakennetaan uudelleen uudelle muodolle.

:::note
Linkki vaatii **CadCraft Studion** samalle tietokoneelle. Selaimen välilehti ei voi muodostaa yhteyttä. Mitään ei lähde verkkoon: skripti puhuu Studiolle tämän tietokoneen omalla osoitteella tunnuksen kanssa.
:::

:::warning
Tätä linkkiä on testattu skriptin tiedostokirjoittajalla ja korvikkeella toiselle ohjelmalle, ei vielä Rhinon tai Grasshopperin sisällä. Jos jokin epäonnistuu siellä, kerro, mitä virheilmoitus sanoi.
:::

## Asennus

1. Avaa Studiossa PartCraft. Valitse {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Assistants}}, rastita **Anna tekoälyavustajien ja skriptien käyttää PartCraftia**, sitten **Muokkaa**.
2. Valitse Studiossa {{ui:Connect an assistant}}. Se näyttää osoitteen ja tunnuksen, jotka liitetään alla.
3. Lataa skripti: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Rhinosta

1. Aja `cadcraft_link.py` Rhinon skriptieditorissa (Python 3 Rhino 8:ssa).
2. Ensimmäisellä kerralla liitä osoite ja tunnus. Ne tallennetaan tiedostoon `.cadcraft-link.json` kotikansioon, ei koskaan malliin. Studio luo uuden tunnuksen joka kerta, kun se käynnistyy, joten skripti kysyy silloin uudelleen.

Pysäytä skripti ajamalla se uudelleen.

## Grasshopperista

Aja skripti kerran ensin Rhinossa, jotta osoite ja tunnus tallentuvat.

1. Lisää Script-komponentti (Python 3) ja liitä siihen koko `cadcraft_link.py`.
2. Anna sille nämä tulot: `G` (geometria, listakäytöllä), `N` (nimi, valinnainen), `On` (totuusarvokytkin) ja `Target` (valinnainen: `model` tai `part`, jos molemmat sovellukset ovat auki).
3. Aseta `On` arvoon tosi.

Jokainen ratkaisu lähettää `G`:n ja korvaa sen, minkä komponentti lähetti viimeksi.

## Miten tämä toimii täällä

- **Yksi kappale.** Kaikki mallissa näkyvä muuttuu yhdeksi tuoduksi muotoelementiksi, kuten kun [avataan .3dm-tiedosto](topic:open-3dm-files).
- **Sen on sulkeuduttava.** PartCraft täyttää pienet reiät ja tasaiset aukot, ja toiselle ohjelmalle kerrotaan, kuinka monta. Jos malli ei vieläkään sulkeudu, PartCraft säilyttää aiemman kappaleen ja tilarivi kertoo siitä. Seuraava sulkeutuva muutos päivittää sen.
- **Viimeistele tehtävä.** Luonnoksessa tai piirustuksessa päivityksiä ei hyväksytä vaan yritetään uudelleen; ne tulevat perille, kun palataan malliin.
- **Kumoaminen.** Päivitykset, jotka tulevat alle kahden sekunnin välein, jakavat yhden kumoamisaskeleen.
- **Tallennus.** Kappaletiedosto säilyttää linkin. Skripti ajetaan uudelleen tiedoston avaamisen jälkeen, ja sama muotoelementti päivittyy.

**Vain yhteen suuntaan.** Muutokset täältä eivät palaa toiseen ohjelmaan.

## Jos jokin menee pieleen

- **"Mikään ModelCraft- tai PartCraft-ikkuna ei salli sitä":** tee asennuksen vaihe 1.
- **"Studio hylkäsi tunnuksen":** Studio on käynnistynyt uudelleen. Kopioi uusi tunnus ja aja skripti uudelleen. Grasshopperille aja se ensin Rhinossa.
- **"Ei yhteyttä CadCraft Studioon":** Studio ei ole käynnissä, tai osoite on muuttunut.
