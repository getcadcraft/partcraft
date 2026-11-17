---
title: Lisää luonnosgeometriaa kirjoittamalla koordinaatit
summary: Käytä Lisää koordinaateilla -kohtaa luonnospaneelissa, kun haluat sijoittaa viivat, keskiviivat, suorakulmiot, ympyrät ja pisteet tarkkoihin kohtiin pelkällä näppäimistöllä.
keywords: koordinaatit, kirjoitettu syöte, näppäimistösyöte, numeerinen syöte, tarkka sijainti, x y, absoluuttiset koordinaatit, saavutettavuus, ei hiirtä
from: 5e6c1656
---

Kun tiedät luvut, niiden kirjoittaminen on nopeampaa kuin klikkaaminen ja mittojen antaminen. **Lisää koordinaateilla** on oikeassa paneelissa aina, kun luonnos on auki. Sen avulla voit myös rakentaa luonnoksen kokonaan ilman osoitinta.

Koordinaatit ovat millimetreinä luonnoksen omissa akseleissa: x oikealle ja y ylös, kun katsot luonnosta, ja (0, 0) on origossa (punainen ympyrä ristillä).

## Lisää muoto

1. Avaa luonnos (katso [Piirrä ensimmäinen luonnos](topic:sketch-basics)).
2. Vieritä oikeassa paneelissa kohtaan **Lisää koordinaateilla**.
3. Valitse muoto kohdasta **Lisää**: Viiva, Keskiviiva, Suorakulmio, Ympyrä tai Piste.
4. Täytä kentät:

| Muoto | Kentät |
|---|---|
| Viiva | **Alku x, y** ja **Loppu x, y** |
| Keskiviiva | **Alku x, y** ja **Loppu x, y** |
| Suorakulmio | **Kulma x, y** ja **Vastakkainen kulma x, y** |
| Ympyrä | **Keskipiste x, y** ja **Säde** |
| Piste | **Kohta x, y** |

5. Valitse {{ui:Lisää}}, tai paina {{key:Enter}} missä tahansa kentässä.

Muoto ilmestyy, ja tilarivi kertoo esimerkiksi ”Lisättiin suorakulmio.” Kentät tyhjenevät seuraavaa muotoa varten. Jokainen lisäys on yksi kumoamisvaihe.

Kirjoita pari kahtena lukuna, jotka erotetaan pilkulla tai välilyönnillä: `0, 0`, `25 -10` tai `12.5,40`. Negatiiviset luvut ja desimaaliluvut käyvät. Säteen on oltava suurempi kuin nolla. Jos jokin ei ole luku, tilarivillä lukee: ”Kirjoita koordinaatit muodossa ’x, y’ ja säde, joka on suurempi kuin nolla.”

## Esimerkki: reikälevyn ääriviiva kirjoitettuna

1. Avaa luonnos tasolla **Etutaso**.
2. **Lisää**: Suorakulmio. **Kulma x, y**: `-50, -30`. **Vastakkainen kulma x, y**: `50, 30`. {{key:Enter}}.
3. **Lisää**: Ympyrä. **Keskipiste x, y**: `-30, 0`. **Säde**: `5`. {{key:Enter}}.
4. **Keskipiste x, y**: `30, 0`. **Säde**: `5`. {{key:Enter}}.
5. Valitse {{ui:Poistu luonnoksesta}}, sitten {{ui:Pursota}}: levy (100 × 60 mm) ja kaksi reikää, joiden halkaisija on 10 mm.

## Kirjoitettu geometria on sijoitettu, mutta ei lukittu

Kirjoitetut koordinaatit sijoittavat geometrian oikeaan paikkaan, mutta ne eivät ole **relaatioita**. Muodot pysyvät sinisinä (alimääriteltyinä) ja voivat liikkua, jos vedät niitä tai muutat toista mittaa:

- kirjoitettu suorakulmio saa omat kulma-, vaaka- ja pystysuuntaiset relaatiot kuten piirretty, mutta mikään ei sido sitä origoon;
- kirjoitetulla viivalla ei ole vaaka- tai pystysuuntaista relaatiota, vaikka kirjoitit tasaisen viivan;
- kirjoitetun ympyrän keskipiste on vapaa.

Jotta luonnos saadaan täysin määritettyä, lisää mitat ja relaatiot jälkikäteen (katso [Määritä luonnos täysin](topic:relations-dimensions)). Esimerkiksi valitse suorakulmion kulma ja origo ja valitse {{ui:• Yhtyvä}}, tai mitoita ympyröiden keskipisteet origosta.

:::note
Ilman osoitinta pääset tähän asti: siirry historian tasoriviin {{key:Tab}}-näppäimellä ja nuolinäppäimillä, paina {{key:Enter}} valitaksesi sen, paina {{key:S}} piirtääksesi luonnoksen, lisää muodot tässä ja siirry jokaisen mitan viereiseen **Muokkaa**-painikkeeseen ja {{ui:Poistu luonnoksesta}}-painikkeeseen {{key:Tab}}-näppäimellä. Geometrian valinta, ja siten relaatioiden tai uusien mittojen lisääminen, vaatii tässä versiossa vielä klikkauksen tai napautuksen.
:::

## Rajoitukset

- Kaaria ei voi vielä kirjoittaa. Piirrä ne kaarityökalulla tai kirjoita ympyrä ja käytä relaatioita.
- Tässä kentässä ei ole suhteellisia koordinaatteja (viimeisestä pisteestä) eikä napakoordinaatteja (pituus ja kulma).
- Kirjoitettu geometria ei tartu olemassa oleviin pisteisiin. Kirjoita samat koordinaatit kuin olemassa olevassa pisteessä ja lisää sitten {{ui:• Yhtyvä}}-relaatio niiden välille, jos niiden on pysyttävä yhdessä.
