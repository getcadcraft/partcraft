---
title: Konfiguraatiot ja suunnittelutaulukot
summary: Säilytä yhden osan useita kokoja ja versioita nimettyinä konfiguraatioina osatiedostossa, joissa kussakin on ominaisuuksia päällä tai pois päältä. Vaihda niiden välillä yhdellä napsautuksella, tuo tai vie ne CSV-suunnittelutaulukkona tai rakenna kaikki komentoriviltä.
keywords: suunnittelutaulukko, konfiguraatiot, konfiguraatio, koot, osaperhe, csv, laskentataulukko, variantit, taulukkopohjainen, osaperhe, poista käytöstä, käytöstä poistettu, ominaisuuden poisto, vaihtoehdot, mukana tai ilman, konfiguraattori
from: 17249afb
---

**Konfiguraatio** on yksi osan koko: nimetty joukko sen parametrien arvoja. Osa säilyttää konfiguraationsa omassa tiedostossaan, joten ne kulkevat sen mukana. **Suunnittelutaulukko** on sama asia CSV-tiedostona, yksi rivi konfiguraatiota kohden.

Konfiguraatiot asettavat **parametreja**, joten lisää ne ensin (katso [Ohjaa osaa parametreilla](topic:parameters)). Konfiguraatio tallentaa parametrit, jotka ovat tavallisia lukuja; muista laskettavat parametrit (kuten `area = w * d`) seuraavat itsestään.

## Tallenna konfiguraatio

1. Aseta {{ui:Parametrit}}-välilehdellä osan yhden koon parametrit.
2. Kirjoita **Konfiguraatiot**-kohdassa nimi (esimerkiksi `Large`) ja paina {{ui:Tallenna nykyiset arvot}} tai {{key:Enter}}.

Uusi konfiguraatio merkitään **aktiiviseksi**. Jos muutat parametria myöhemmin, siinä lukee **aktiivinen, muutettu sen jälkeen**, jotta tiedät, ettei osa enää vastaa sitä.

## Vaihda, päivitä, nimeä uudelleen, poista

- {{ui:Ota käyttöön}} asettaa parametrit kyseisen konfiguraation arvoihin ja rakentaa osan uudelleen.
- {{ui:Päivitä}} tallentaa nykyiset arvot kyseiseen konfiguraatioon.
- Nimeä konfiguraatio uudelleen kirjoittamalla uusi nimi sen kenttään ja painamalla {{key:Enter}}.
- {{ui:Poista}} poistaa konfiguraation. Parametrit säilyttävät arvonsa.

Jokainen näistä on yksi vaihe: {{key:Mod+Z}} palauttaa. Jos nimeät konfiguraation uudelleen, jokainen konfiguraatio seuraa uutta nimeä; jos poistat konfiguraation, se katoaa konfiguraatioiden joukosta.

## Ota ominaisuuksia käyttöön ja pois käytöstä konfiguraatiossa

Konfiguraatio säilyttää myös, mitkä ominaisuudet ovat pois käytöstä, joten yhdellä osalla voi olla versiot **sen kanssa** ja **ilman sitä**: kiinnitysreiät, viiste, ulkonema.

1. Poista ominaisuus käytöstä: napsauta sitä historiassa ja valitse sitten {{ui:Poista käytöstä}} kohdasta {{ui:Ominaisuudet}}.
2. Tallenna konfiguraatio tavalliseen tapaan, esimerkiksi `No holes`. Sen rivillä luetellaan, mitä se poistaa käytöstä.
3. Ota ominaisuus takaisin käyttöön ({{ui:Ota käyttöön}}) ja tallenna toinen konfiguraatio, esimerkiksi `With holes`.

Kun jokin konfiguraatio poistaa ominaisuuden käytöstä, konfiguraation ottaminen käyttöön poistaa sen ominaisuudet käytöstä ja pitää **kaikki muut ominaisuudet päällä** yhdessä parametriarvojensa kanssa yhdessä vaiheessa. Konfiguraatio, joka on tallennettu ennen kuin mikään ominaisuus oli poistettu käytöstä, lasketaan ”kaikki päällä” -tilaksi. {{ui:Päivitä}} tallentaa ominaisuudet sellaisina kuin ne ovat nyt, arvojen kanssa.

Osa, jonka konfiguraatiot poistavat ominaisuuksia käytöstä, tallennetaan uudempana tiedostoversiona: vanhempi PartCraft ilmoittaa, että tiedosto on uudemmasta versiosta, sen sijaan että avaisi sen ilman näitä ominaisuuksia.

:::note
CSV-suunnittelutaulukko sisältää vain parametriarvot. Taulukon tuominen konfiguraation päälle muuttaa sen arvot ja säilyttää ominaisuudet, jotka se poistaa käytöstä; komentorivin `--table` rakentaa vain arvot.
:::

Osatiedosto tallennetaan konfiguraatioiden ja aktiivisena olleen konfiguraation kanssa. Osa avautuu sen arvoilla, joilla se tallennettiin.

## Tuo suunnittelutaulukko tai vie se

Suunnittelutaulukko on CSV-tiedosto, jossa on sarake jokaiselle parametrille ja rivi jokaiselle konfiguraatiolle:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Ensimmäinen sarake voi olla nimeltään `name`, `config` tai `configuration`; jokaisen muun sarakkeen on oltava osan parametrin nimi. Solut ovat lukuja, halutessasi yksiköineen (`8in`). Tyhjä solu jättää kyseisen parametrin pois rivistä.

- {{ui:Tuo CSV}} lisää jokaisen rivin konfiguraationa. Rivi, jonka nimi on olemassa olevan konfiguraation nimi, korvaa sen. Tuominen on yksi vaihe.
- {{ui:Vie CSV}} kirjoittaa konfiguraatiot ulos. Jos niitä ei vielä ole, se kirjoittaa yhden rivin nykyisiä arvoja, lähtökohdan laskentataulukolle.

Konfiguraation nimi, jonka laskentataulukko lukisi kaavana (alkaa merkeillä `=`, `+`, `-` tai `@`), kirjoitetaan alkuun `'`.

## Kaikki koot kerralla

{{ui:Variantipaketti…}} **Konfiguraatiot**-kohdassa rakentaa jokaisen konfiguraation tai valitut muutamat STEP-, IFC-, DWG- ja esikatselutiedostoina yhteen zip-tiedostoon, ja mukana on taulukko niiden parametreista: katso [Tee muunnospaketti konfiguraatioistasi](topic:variant-pack).

Komentorivityökalu rakentaa yhden tiedoston suunnittelutaulukon CSV-rivejä kohden:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Vie konfiguraatiot ensin CSV-muodossa ja anna sitten tiedosto `--table`-valitsimella. Katso [Skriptit ja komentorivi](topic:scripts-and-cli). Skriptinä tallennettu osa säilyttää konfiguraationsa `configs json …` -rivillä.
