---
title: Ohjaa osaa parametreilla
summary: Nimeä tärkeät mitat (leveys, paksuus, pultin koko), yhdistä mikä tahansa piirrenumero tai luonnosmitoitus niihin merkillä = ja muuta koko osa yhdestä taulukosta.
keywords: parametrit, missä käytetään, käyttää, globaalit muuttujat, muuttujat, yhtälöt, suunnittelun tarkoitus, ohjaavat mitoitukset, linkitys, lauseke, kaava, mitan nimeäminen, linkitetyt arvot
from: 58c646ea
---

Parametri on nimetty luku, kuten `width = 120` tai `margin = bolt * 1.5`. Linkitä syvyys, reiän halkaisija, toistomäärä tai luonnosmitoitus siihen, ja parametrin muuttaminen muuttaa kaikkia niitä yhdellä askeleella. Näin suunnittelun tarkoitus pidetään osassa eikä päässäsi.

## Lisää parametreja

1. Napsauta oikeassa paneelissa {{ui:Parametrit}}-välilehteä.
2. Kohdassa **Muuttujat** kirjoita nimi ”nimi”-kenttään, esimerkiksi `width`.
3. Kirjoita sen arvo seuraavaan kenttään, esimerkiksi `120`, ja paina {{key:Enter}} (tai napsauta {{ui:Lisää}}).

Arvo voi olla luku tai muiden parametrien lauseke: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. **Arvo**-sarake näyttää, mihin se laskeutuu. Nimi alkaa kirjaimella tai `_`:llä ja sisältää vain kirjaimia, numeroita ja `_`:n. Funktioiden ja yksiköiden nimet (`sin`, `mm`, `pi`) hylätään, ja samoin silmukka, kuten `a = b` ja `b = a`.

## Linkitä luku parametriin

1. Napsauta historiasta piirrettä, esimerkiksi ”Extrude1”. Sen asetukset näkyvät {{ui:Ominaisuudet}}-välilehdellä.
2. Kirjoita luku-kenttään, kuten **Syvyys (mm)**, merkki `=` ja lauseke: `=thick` tai `=width / 4`.
3. Paina {{key:Enter}}.

Kenttä näyttää nyt tuloksen, ja sen tarran viereen ilmestyy **ƒ**-painike. Osoita sitä nähdäksesi yhtälön. Luonnosmitoitukset toimivat samoin, sekä piirteen **Luonnosmitoitukset**-luettelossa että avoimen luonnoksen mittakentässä (kaksoisnapsauta mittaa, kirjoita `=width` ja paina {{key:Enter}}).

Linkitettäviä lukuja ovat pursotuksen syvyys, pyöräytyksen kulma, reiän halkaisija, syvyys ja vastaporauksen koot, toiston määrä, väli ja kulma, pyöristyksen säde, viiston etäisyys, kuoren seinämän paksuus, jokainen luonnosmitoitus sekä uudempien piirteiden koot (toinen syvyys, kartiomaisuus, upotus, referenssitason etäisyys, vetokulman kulma ja muut).

## Muuta parametria

**Parametrit**-välilehdellä kirjoita uusi arvo tai lauseke **Lauseke**-sarakkeeseen ja paina {{key:Enter}}. Kaikki siihen linkitetty muuttuu ja osa rakentuu uudelleen yhtenä askeleena: {{key:Mod+Z}} kumoaa sen.

Jos haluat muuttaa lukua toisesta päästä, katso [Yhtälöt molempiin suuntiin](topic:equations-two-way).

## Katso, missä parametria käytetään

Kunkin parametrin alla **Parametrit**-välilehdellä rivi kertoo, mikä sitä käyttää:

- luvut, joita se ohjaa, kuten **Extrude1 depth** tai **Sketch1 D2 (distance)**. Napsauta yhtä valitaksesi sen piirteen ja näyttääksesi sen ominaisuudet;
- luvut, joita se ohjaa **muiden** parametrien kautta, kuten **Hole1 diameter (through h, d)**, kun `d = h + 2` ja `h = w / 2`;
- **parametrit**, joiden lausekkeet käyttävät sitä, **konfiguraatiot**, jotka asettavat sen, ja **skriptit**, jotka lukevat sen (katso [Kirjoita ja aja skriptit](topic:craftscript)).

”Ei vielä käytössä.” tarkoittaa, että mikään ei käytä sitä: voit poistaa sen kysymättä.

## Irrota, nimeä uudelleen, poista

- **Irrota luku:** napsauta sen **ƒ**-painiketta tai {{ui:Irrota}} **Yhtälöt**-luettelossa. Se säilyttää nykyisen arvonsa, eikä mikään parametri muuta sitä enää.
- **Nimeä parametri uudelleen:** kirjoita uusi nimi sen **Nimi**-kenttään. Jokainen sitä käyttävä lauseke kirjoitetaan uudelleen.
- **Poista parametri:** napsauta sen rivin ×-merkkiä. Jos jokin käyttää sitä, PartCraft kysyy, kirjoitetaanko sen nykyinen arvo ensin niihin lausekkeisiin.
- **Piirteen poistaminen** poistaa sen lukujen yhtälöt. Tilarivi kertoo, mitkä.

:::note
Parametrit tallennetaan `.partcraft.json`-tiedostoon (tiedostoversiona 3). Osa ilman parametreja tallennetaan täsmälleen kuten ennenkin.
:::

## Lausekkeet

| Kirjoita | Tarkoittaa |
|---|---|
| `120`, `12.5`, `1e3` | luku (millimetreinä tai asteina kulmalle) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | pituus muissa yksiköissä, muunnettuna millimetreiksi |
| `30deg`, `0.5rad` | kulma, muunnettuna asteiksi |
| `+ - * / %` ja `^` | laskutoimitukset; `^` on potenssi, `-2^2` on −4 |
| `sin cos tan asin acos atan atan2` | trigonometria asteina |
| `sqrt pow exp ln log abs sign` | muut funktiot |
| `ceil floor int round(x, digits) min max` | pyöristys ja rajat |
| `if(test, a, b)` ja `< <= > >= == !=` | valinta: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Nimet ovat kirjainkokoherkkiä: `Width` ja `width` ovat kaksi eri parametria.

Katso myös [Konfiguraatiot ja suunnittelutaulukot](topic:design-tables) ja [Skriptit ja komentorivi](topic:scripts-and-cli).
