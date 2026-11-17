---
title: Tee varianttipaketti konfiguraatioistasi
summary: Rakenna kaikki osan konfiguraatiot tai valitut muutamat kerralla STEP-, IFC- ja DWG-tiedostoina sekä esikatselukuvana kustakin, taulukko niiden parametreista ja osa yhtenä kirjaston kohteena variantteineen.
keywords: varianttipaketti, variantit, konfiguraatiot, osaperhe, erävienti, jokainen koko, step, ifc, dwg, esikatselu, taulukko, csv, json, kirjasto, konfiguraattori, tuotekonfiguraattori, katalogi, kohde json
from: 9a6db99f
---

## Mitä teet

Anna **jokainen osan koko kerralla**: yksi STEP-, IFC- ja DWG-tiedosto sekä kuva jokaisesta konfiguraatiosta, taulukko, joka kertoo, mikä kukin on, ja kirjaston kohde, joka asettaa ne kaikki samalle sivulle.

Tarvitset ensin osan, jossa on **konfiguraatioita** (ks. [Konfiguraatiot ja suunnittelutaulukot](topic:design-tables)). Konfiguraatiosta, joka kytkee muotoelementin pois päältä, esimerkiksi levystä reikineen ja ilman reikiä, tulee oma variantti.

## Vaiheet

1. Avaa osa. Etsi välilehdeltä {{ui:Parametrit}} kohta **Konfiguraatiot**.
2. Napsauta {{ui:Variantipaketti…}}.
3. Rastita konfiguraatiot, jotka rakennetaan (kaikki on rastitettu), ja tiedostot, jotka kirjoitetaan: STEP, IFC, DWG, esikatselu ja kirjaston kohde.
4. Napsauta {{ui:Tee paketti}}. Tilarivi laskee variantit niiden rakentuessa; osaasi ei muuteta.
5. Yksi zip-tiedosto latautuu: `<part> variants.zip`.

## Mitä zip-tiedostossa on

| Tiedosto | Mitä se on |
|---|---|
| `<name>.step` | Konfiguraatio STEP-kiintokappaleena. |
| `<name>.ifc` | IFC4, yksi elementti, jossa on rakennettu runko ja osan parametrit ominaisuuksina; arvo on kyseisen konfiguraation oma. |
| `<name>.dwg` | {{ui:Etu}}-, {{ui:Ylä}}-, {{ui:Oikea}}- ja isometriset näkymät piirustusarkilla täydessä koossa. |
| `<name>.svg` | Isometrinen viivakuva siitä. |
| `variants.csv`, `variants.json` | Parametritaulukko: kunkin variantin tunnus, nimi ja jokaisen parametrin arvo, muotoelementit, jotka se kytkee pois päältä, sen tiedostot, tilavuus ja koko. |
| `<part>.item.json` | Osa yhtenä kirjaston kohteena variantteineen (ks. alla). |
| `README.txt` | Mitä tehtiin, alla olevat huomautukset ja kaikki, mitä ei rakennettu. |

Tiedostot nimetään konfiguraation mukaan. Konfiguraatio, jota ei voi rakentaa (muotoelementti, jota ei voi tehdä näillä arvoilla), jätetään pois tiedostoista ja taulukosta. Se luetellaan README-tiedostossa ja viestissä zip-tiedoston tallentamisen jälkeen. Muut kirjoitetaan silti.

## Hyvä tietää

- **STEP** on tarkka, kun tarkka ydin on käytössä versiossasi. Ilman sitä STEP on tahkoitettu (litteitä kolmioita), ja README kertoo sen.
- **DWG** on piirustusarkki, ei 3D-malli. Sen viivat tulevat verkosta, joten kaareva reuna on monta lyhyttä viivaa.
- **Kirjaston kohde** sisältää yhden rungon ja yhden pohjakuvan kullekin variantille kirjaston omissa akseleissa: Z ylöspäin, etupuoli kohti −Y:tä ja lisäyskohta takareunan keskellä pohjalla. Pohjakuva on kunkin variantin rajaava suorakulmio. Kohde on rajoitettu 8 MB:iin, joten erittäin raskas variantti muuttuu kokonsa mukaiseksi laatikoksi, ja README kertoo, kuinka monta.
- Osan aktiivinen konfiguraatio on kohteen oletusvariantti.
- Portteja (putkien ja kanavien liitoskohtia) ei aseteta PartCraftista.

## Aseta variantit kirjastosivulle

Lähetä `<part>.item.json` sivustolla kohtaan **Kirjasto › Lähetä**. Valitse sen luokka, lisenssi ja oma tekijämerkintäsi, niin siitä tulee kirjaston kohde variantteineen. BimCraft-sovelluksessa sijoittaminen kysyy, mikä variantti halutaan, ja Vaihda tarjoaa muut. Sivu, jolla kävijät valitsevat vaihtoehdot, katselevat 3D-mallin ja lataavat variantin, on toistaiseksi **henkilökunnan esikatselu**: se ei ole vielä avoin kaikille.

## Komentoriviltä

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` nimeää konfiguraatiot, `--formats` ottaa mitä tahansa näistä: `step`, `ifc`, `dwg`, `preview`. `--no-item` jättää kirjaston kohteen pois. Komento kirjoittaa kansion, zip-tiedoston tai molemmat ja poistuu koodilla 1, kun variantti ei rakentunut. Ks. [Skriptit ja komentorivi](topic:scripts-and-cli).
