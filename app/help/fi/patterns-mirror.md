---
title: Muotoelementtien kuviointi ja peilaus
summary: Toista muotoelementtejä rivissä Lineaarinen-toiminnolla, ympyrän akselin ympäri Pyöreä-toiminnolla ja kopioi muotoelementit tai koko kappale tason yli Peilaa-toiminnolla.
keywords: kuviointi, lineaarinen kuviointi, pyöreä kuviointi, napamatriisi, matriisi, peilaus, symmetrinen, kopioi muotoelementit, pulttiympyrä, siemen, peilaa kappale
from: 702e9edb
---

Kuviointi ja peilaus kopioivat jo rakennetut muotoelementit. Kopiot kuuluvat historiaan: kun muutat alkuperäistä, kopiot seuraavat sitä.

Kopioituu se, mitä muotoelementti tekee: kohouman kuviointi lisää materiaalia, leikkauksen tai reiän kuviointi poistaa sitä. Kuviointeja voi kuvioida ja peilata uudelleen. Tuotu STEP-kiintokappale voidaan kopioida; pyöristyksiä, viistoja ja kuoria ei voi.

## Lineaarinen kuviointi

1. Valitse historiasta kopioitava muotoelementti (esimerkiksi Reikä tai Leikkaus). Jos mitään ei ole valittu, käytetään viimeisintä kiintokappale-muotoelementtiä.
2. Valitse {{ui:Lineaarinen}}. Kolme kopiota ilmestyy 20 mm:n välein X-akselia pitkin.
3. Aseta oikeassa paneelissa:

| Asetus | Mitä se tekee | Oletus |
|---|---|---|
| **Kopioitavat muotoelementit** | Valitse kaikki kopioitavat muotoelementit. Vain kuvioinnin yläpuolella olevat muotoelementit ovat luettelossa | Valittu muotoelementti |
| **Suunta** | X-akseli, Y-akseli, Z-akseli, viiva tai keskiviiva mistä tahansa aiemmasta luonnoksesta, kierron akseli tai valittu särmä | X-akseli |
| **Väli (mm)** | Etäisyys naapurien välillä | 20 |
| **Määrä** | Kokonaismäärä, **alkuperäinen mukaan lukien** (1–1000) | 3 |
| **Käännä suunta** | Kopiot menevät toiseen suuntaan | Pois |

### Käytä särmää suuntana

1. Napsauta osan suoraa särmää näkymässä. Oikea paneeli kertoo **Särmä** ja näyttää sen pituuden.
2. Valitse {{ui:Lineaarinen}}: kuviointi kulkee tätä särmää pitkin.

Tai valitse kuviointi, valitse särmä ja valitse kohdasta **Suunta** ”Valittu särmä (käytä juuri nyt valittua)”. Valittu särmä on paikallaan: se ei seuraa myöhempiä muutoksia. Luonnosviiva seuraa luonnostaan.

## Pyöreä kuviointi

1. Valitse kopioitava muotoelementti (esimerkiksi yksi reikä levyn reunan lähellä).
2. Valitse {{ui:Pyöreä}}. Kuusi kopiota ilmestyy tasavälein koko kierroksen matkalle.
3. Aseta:

| Asetus | Mitä se tekee | Oletus |
|---|---|---|
| **Kopioitavat muotoelementit** | Kuten lineaarisessa kuviossa | Valittu muotoelementti |
| **Akseli** | X-, Y- tai Z-akseli, luonnosviiva, kierron akseli tai valittu särmä | Viimeisimmän kierron akseli, jos sellainen on, muuten Y-akseli |
| **Kulma (°)** | 360 jakaa kopiot tasaisesti koko kierrokselle. Pienempi arvo levittää ne tälle kulmalle, ensimmäinen ja viimeinen reunoille | 360 |
| **Määrä** | Kokonaismäärä, alkuperäinen mukaan lukien | 6 |
| **Käännä suunta** | Kääntää toiseen suuntaan | Pois |

Maailman akselit kulkevat origon kautta. Levylle, jonka keskipiste ei ole origossa, käytä luonnoksen keskiviivaa tai kierron akselia.

### Esimerkki: laipan kahdeksan pulttireikää

1. Kierrä laippa (katso [Kierrä sorvattu osa](topic:revolve)) Y-akselin ympäri.
2. Luonnostele laipan tasaiselle yläpinnalle, aseta yksi piste pulttiympyrälle ja tee Reikä.
3. Valitse Reikä ja valitse {{ui:Pyöreä}}. Akseli on jo valmiiksi Revolve1:n kierron akseli.
4. Aseta **Määrä** arvoksi `8`.

## Peilaus

1. Valitse historiasta peilattava muotoelementti, tai älä valitse mitään, jotta peilataan **koko kappale tähän asti rakennettuna**.
2. Valitse {{ui:Peilaa}}. Peilaus tehdään **Oikea taso** -tason yli.

Koko kappaleen peilaus osan pinnan yli: napsauta ensin tasaista pintaa ja valitse sitten {{ui:Peilaa}}. (Pinnan napsauttaminen tyhjentää historian valinnan, joten tämä peilaa aina koko kappaleen.)

Oikean paneelin asetukset:

- **Peilaa**: valitse **Koko kappale (tähän asti rakennettuna)**, tai poista valinta ja valitse kopioitavat muotoelementit.
- **Peilitaso**: Etutaso, Ylätaso, Oikea taso, pinta, jota se käyttää nyt (”Extrude1:n pinta” tai ”Kiinteä taso”), tai ”Juuri valittu pinta”. Kun haluat peilata valitut muotoelementit pinnan yli: valitse historiasta Peilaa, napsauta pintaa näkymässä ja valitse ”Juuri valittu pinta”.

Koko kappaleen peilaaminen pinnan yli kaksinkertaistaa osan, esimerkiksi puolikkaan kiinnikkeen täydeksi kiinnikkeeksi.

## Viestit

- ”Rakenna ensin muotoelementti, jota kopioidaan.” tai ”Rakenna ensin kiintokappale.” Kopioitavaa kiintokappaletta ei ole vielä.
- ”Valitse kopioitavat muotoelementit.” Kaikki **Kopioitavat muotoelementit** -ruudut ovat tyhjiä.
- ”Extrude2:lla ei ole kopioitavaa kiintokappaletta.” Muotoelementti epäonnistui tai se on piilotettu.
- ”Fillet1 muuttaa kappaleen särmiä tai seinämiä, eikä sitä voi kopioida. Kopioi muotoelementit, jotka luovat kiintokappaleita (pursotukset, kierrot, reiät, tuonnit).” Pyöristyksiä, viistoja ja kuoria ei voi kuvioida tai peilata: kuvioi ensin ja pyöristä sitten.
- ”Peilattavaa kappaletta ei ole vielä.”

:::note
Kuvioinnin kopioita ei voi ohittaa yksi kerrallaan, eikä kuviointi voi seurata luonnoskäyrää. Luonnoskuviointeja ja -peilauksia ei myöskään ole vielä toteutettu: piirrä toistuva luonnosgeometria käsin tai **Lisää koordinaateilla** -toiminnolla.
:::
