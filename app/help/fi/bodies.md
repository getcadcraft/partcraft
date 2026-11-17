---
title: Yhdistä, siirrä ja skaalaa kappaleita; polkutoistot
summary: Tee erillisiä kappaleita ja yhdistä, vähennä tai leikkaa niitä jälkikäteen, siirrä, käännä, kohdista tai kopioi niitä, skaalaa tasaisesti tai X-, Y- ja Z-suunnassa sekä kopioi muotoelementtejä tai kappaleita käyrää pitkin.
keywords: kappale, kappaleet, monikappale, uusi kappale, yhdistä, boolean, liitä, leikkaa, vähennä, yhteinen osa, säilytä työkalut, siirrä kappale, kopioi kappale, käännä kappale, kohdista, siirto, skaalaa, epätasainen skaalaus, venytä, affiini, polkutoisto, toisto käyrää pitkin, käyrän ohjaama toisto
from: 6b1ea820
---

:::note
**Ei vielä toteutettu tässä versiossa.** Useiden kappaleiden käsittely vaatii tarkan geometriaytimen, jota tässä PartCraftin versiossa ei ole: se rakentaa jokaisen osan verkkoytimellä. [Mitä ei ole vielä toteutettu](topic:not-built-yet) kertoo, mitä tehdä sen sijaan. Loppu tästä sivusta kuvaa, miten tämä toimii tarkalla ytimellä.
:::

Osa voi sisältää useita kiintokappaleita. Jokainen erillinen kiintokappale on **kappale**. Useimmat muotoelementit lisäävät tai leikkaavat jokaisesta kappaleesta, johon ne koskevat; tämän sivun työkalut toimivat koko kappaleisiin, jotka valitset. Ne ovat muotoelementtiryhmän {{ui:Lisää}}-valikossa: {{ui:Yhdistä}}, {{ui:Siirrä kappale}}, {{ui:Skaalaa kappale}} ja {{ui:Polkutoisto}}. Kaikki vaativat tarkan ytimen (OpenCascade).

## Tee erillinen kappale

Aseta pursotuksen tai kierron **Toiminto** oikeassa paneelissa arvoon **Uusi kappale** (myös pyyhkäisyillä ja loftilla on se). Uusi kiintokappale pysyy erillisenä myös kohdissa, joissa se menee päällekkäin muiden kanssa. **Yhteinen osa** säilyttää vain uuden muodon ja siellä jo olevan aineen yhteisen osan.

Kappaleet nimetään sen muotoelementin mukaan, joka aloitti ne: ”Extrude2”. Kopio nimetään alkuperäisen ja sen kopioineen muotoelementin mukaan: ”Extrude2, copy 1 of Move1”. Nimet pysyvät samoina, kun muutat kokoja ylävirrassa, joten kappaleita käyttävät muotoelementit löytävät ne edelleen. Kun kappaleita on kaksi tai enemmän, osapaneeli (klikkaa tyhjää kohtaa) luettelee ne tilavuuksineen.

## Nimeä tai piilota kappale

Klikkaa tyhjää kohtaa näkymässä nähdäksesi osapaneelin. Sen kappaleluettelossa (näkyy, kun osassa on kaksi tai enemmän kappaletta) on nimikenttä ja {{ui:Piilota}}-painike jokaisella rivillä.

- **Nimeä uudelleen:** kirjoita uusi nimi kenttään ja paina {{key:Enter}} tai klikkaa muualle. Kaikki paneelit käyttävät sitä sen jälkeen: Yhdistä, Siirrä kappale, toistot. Tyhjennä kenttä palataksesi nimeen muotoelementistä, joka kappaleen teki.
- **Piilota:** klikkaa {{ui:Piilota}} sen rivillä. Kappale poistuu näkymästä ja klikkaukset menevät sen läpi, joten voit valita takana olevia pintoja. {{ui:Näytä}} tuo sen takaisin; {{ui:Näytä kaikki}} tuo takaisin kaikki piilotetut kappaleet.

Piilottaminen muuttaa vain näkymää. Piilotettu kappale rakennetaan edelleen, se lasketaan tilavuuteen ja mittauksiin, ja se tallentuu STL-, 3MF- ja STEP-vienteihin. Nimet ja piilotetut kappaleet tallennetaan osatiedostoon, ja jokainen muutos on yksi {{ui:Kumoa}}-vaihe.

## Yhdistä kappaleet

1. {{key:Shift}}+klikkaa **kohdekappaleen** pintaa ja sitten jokaisen **työkalukappaleen** pintaa.
2. Valitse {{ui:Lisää}} ja sitten {{ui:Yhdistä}}.
3. Valitse oikeassa paneelissa **Toiminto**:

| Toiminto | Tulos |
|---|---|
| Yhdistä | Kohde ja työkalut muodostavat yhden kappaleen |
| Vähennä | Työkalut vähennetään kohteesta |
| Yhteinen osa | Säilyy vain se osa, jonka kohde ja jokainen työkalu jakavat |

**Kohdekappale** on se, joka säilyttää nimensä. Rastita tai poista rasti kohdasta **Työkalukappaleet**, tai käytä **Valitse näkymästä** -toimintoa ja klikkaa niiden pintoja. **Säilytä työkalukappaleet** jättää työkalut paikalleen myös (kätevä muotille ja sen ytimelle). Jos työkalukappale on jo kulutettu aiemmalla Yhdistä-toiminnolla, paneeli kertoo siitä eikä valitse toista kappaletta.

## Siirrä tai kopioi kappale

1. Valitse {{ui:Lisää}} ja sitten {{ui:Siirrä kappale}}. Uusin kappale on rastitettu; rastita ne, jotka haluat siirtää.
2. Valitse **Siirto**-tyyppi:

| Siirto | Mitä asetat |
|---|---|
| Siirto | **ΔX**, **ΔY**, **ΔZ** millimetreinä |
| Piste pisteeseen | **Mistä** ja **Mihin**: klikkaa lähelle reunan päätä, pistemuotoelementtiä tai kohtaa pinnalla |
| Kierto akselin ympäri | **Akseli** (X, Y, Z, akselimuotoelementti tai **Valitse**: suora reuna, ympyrä tai sylinteri) ja **Kulma (°)** |
| Kohdista pinta pintaan tai tasoon | **Siirrettävä pinta** (kappaleen tasainen pinta), **Päälle** (tasainen pinta tai taso) |

Kohdistus kääntää kappaleen niin, että sen pinta asettuu toisen pinnan päälle, pinta pintaa vasten, ja liu'uttaa sitä sen jälkeen vain pinnan normaalin suuntaan. **Samaan suuntaan** kääntää sen toiseen suuntaan. **Kopioi** säilyttää alkuperäisen ja lisää siirretyn kopion uutena kappaleena.

## Skaalaa kappale

1. Valitse {{ui:Lisää}} ja sitten {{ui:Skaalaa kappale}}, ja rastita kappaleet.
2. Kirjoita **Skaala**, tai poista rasti kohdasta **Tasainen** ja kirjoita **Skaala X**, **Skaala Y** ja **Skaala Z** (maailman akseleita pitkin).
3. **Pysyvä piste** on piste, joka pysyy paikallaan: kappaleiden laatikon keskipiste tai piste, jonka valitset.

Tasainen skaalaus on tarkka. Epätasainen skaalaus muuttaa ympyrät soikioiksi: sylinteristä tulee elliptinen sylinteri, jota mikään analyyttinen pinta ei kuvaa, joten kaarevat pinnat muuttuvat B-spline-pinnoiksi, jotka pysyvät 0.0000004 mm:n päässä tarkasta muodosta. Tasaiset pinnat ja suorat reunat pysyvät tarkkoina. Paneeli kertoo, mitä tapahtui. Skaalauskertoimien on oltava suurempia kuin nolla (peilaa sen sijaan {{ui:Peilaa}}-toiminnolla).

## Kopioi polkua pitkin

1. Valitse kopioitava muotoelementti historiasta, tai jätä mitään valitsematta kopioidaksesi uusimman kappaleen.
2. Valitse {{ui:Lisää}} ja sitten {{ui:Polkutoisto}}. Uusin käyttämätön luonnos otetaan poluksi.
3. Aseta oikeassa paneelissa:

| Asetus | Mitä se tekee |
|---|---|
| **Kopioi** | Kappaleet (jokainen kopio uusi kappale) tai Muotoelementit (liitetään tai leikataan kuten alkuperäinen) |
| **Polku** | Rastita luonnoksia tai **Valitse mallin reunat**; osien on liityttävä päästä päähän |
| **Määrä** | Kokonaismäärä, alkuperäinen mukaan lukien |
| **Väli** | Tasainen (jakautuu avoimen polun päähän tai koko suljetun polun ympäri) tai tietty etäisyys |
| **Suunta** | Seuraa polkua (jokainen kopio kääntyy sen mukana) tai Kiinteä (kopiot pysyvät yhdensuuntaisina) |
| **Käännä suunta** | Kulkee polkua toiseen suuntaan |

Kopiot alkavat kohdasta, jossa polku kulkee lähimpänä alkuperäistä, ja ne ovat välein käyrää pitkin mitattuna pituutena.

Lineaariset ja pyöreät toistot voivat kopioida kappaleitakin: rastita **Kopioi kappaleet** niiden paneelissa ja valitse kappaleet; jokainen kopio on uusi kappale.

## Rajoitukset

- Kappaleet vaativat tarkan ytimen; verkkoydin säilyttää yhden kiintokappaleen ja kertoo siitä.
- Epätasainen skaalaus tekee kaarevista pinnoista läheisiä B-spline-approksimaatioita (katso yllä), ei tarkkoja sylintereitä tai kartioita; siirtopintoja ei vielä voi skaalata näin.
- Polun seuraaminen kiertyvällä 3D-käyrällä kuljettaa kopion kiertymättä; tasaisilla poluilla kääntö on tarkka.
- Yhdistä toimii vain kiintokappaleilla. Pintakappaleet liitetään {{ui:Ompele}}-toiminnolla.

Katso myös [Referenssitasot, akselit ja pisteet](topic:reference-geometry) pisteille ja tasoille ”kohteiden välissä”, ja [Toisto- ja peilausmuotoelementit](topic:patterns-mirror).
