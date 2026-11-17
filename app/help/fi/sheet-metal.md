---
title: Levytyö: laipat ja tasokuvio
summary: Aloita levyosa luonnoksesta (tasainen levy tai taivutettu profiili), aseta sen paksuus, taivutussäde ja K-kerroin kerran, taivuta laippoja sen reunoista taivutusvapautuksilla ja levitä se tasoon DXF-tiedostoksi leikkausta varten.
keywords: tasokuvio, levitys, kehitelmä, kehitetty pituus, taivutusvara, taivutuslinja, dxf laserille, laserleikkaus, levytyö, perusprofiili, särmälaippa, laippa, taivutus, taivutussäde, k-kerroin, paksuus, levypaksuus, vapautus, taivutusvapautus, kanava, kiinnike, kotelo, taivutettu levy
from: 144bd0f6
---

:::note
**Ei vielä toteutettu tässä versiossa.** Levytyö vaatii tarkan geometriaytimen, jota tässä PartCraftin versiossa ei ole: se rakentaa kaikki osat verkkoytimellä. [Mitä ei ole vielä toteutettu](topic:not-built-yet) kertoo, mitä tehdä sen sijaan. Loppu tästä sivusta kuvaa toimintaa tarkalla ytimellä.
:::

Levytyöosat alkavat **perusprofiililla**. Se asettaa levyn koko osalle: sen **paksuuden**, **sisäpuolen taivutussäteen** ja **K-kertoimen**. Jokainen sen jälkeen tuleva **särmälaippa** taipuu näillä samoilla luvuilla, joten osa pysyy yhtenä levynä, joka voidaan levittää. Molemmat vaativat **tarkan ytimen** (katso [Verkkoydin](topic:solid-kernels)).

## Aloita perusprofiililla

1. Piirrä luonnos. Käytä **suljettua profiilia** tasaiselle levylle (suorakulmio tai mikä tahansa suljettu ääriviiva, jossa on reikiä). Käytä **yhtä avointa viivaketjua** taivutetulle levylle, kuten L:lle, U:lle tai Z:lle, piirrettynä levyn reunanäkymänä.
2. Valitse luonnos muotoelementtihistoriassa.
3. Avaa {{ui:Lisää}} Muotoelementit-ryhmässä ja valitse {{ui:Perusprofiili}}.

Oikeassa paneelissa:

- **Paksuus (mm)** on levyn paksuus.
- **Taivutussäde (mm)** on jokaisen taivutuksen sisäsäde. 0 antaa terävän sisänurkan; ulkopuoli kääntyy silti yhden paksuuden säteellä.
- **K-kerroin** kertoo, missä neutraalikerros on levyn sisällä, 0:sta (sisäpinta) 0.5:een (keskikohta). Se päättää, kuinka pitkä levy on levitettynä. 0.44 on oletus. Työpajasi tai materiaalitoimittajasi voi antaa oman arvonsa.
- **Syvyys (mm)** on se, kuinka pitkälle taivutettu profiili ulottuu luonnoksen tasosta. Tasainen levy jättää sen huomiotta.
- **Paksuus taivutusten ulkopuolella**: avoin profiili on yksi levyn pinta. Oletuksena paksuus menee ensimmäisen taivutuksen sisäpuolelle, joten piirtämäsi viivat ovat kanavan ulkopuoli. Ruksaa tämä, jos haluat viivat sisäpuolelle. Vastaus on sama, mistä päästä piirsit.

Jokainen avoimen ketjun kulma muuttuu taivutukseksi. Liian lyhyt viiva taivutuksiinsa ilmoittaa siitä ja kertoo tarvitsemansa pituuden.

## Taivuta särmälaippa

1. Napsauta levyn ylä- tai alapinnan suoraa reunaa (pitkät reunat, ei ohuita).
2. Valitse {{ui:Lisää}} › {{ui:Särmälaippa}}. Jos reunaa ei ole valittu, PartCraft odottaa, että napsautat sitä. Esc peruuttaa.

Laippa taipuu ylös kyseisen reunan pinnasta levyn sisäsäteen ympäri ja kulkee sitten suoraan. Paneelissa:

- **Kulma (°)** kertoo, kuinka paljon se taipuu, 1:stä 180:een. 90 on neliölaippa.
- **Pituus (mm)** on suora osa taivutuksen jälkeen.
- **Taivuta toiseen suuntaan** taivuttaa sen toisesta pinnasta (alas ylöspäin sijaan).
- **Siirtymä alussa** ja **Siirtymä lopussa** lyhentävät laippaa reunan kummastakin päästä.
- **Taivutusvapautus**: kun päätä siirretään, levyyn leikataan sen viereen ura, jotta taivutus ei repäise metallia siitä kohdasta. **Vapautuksen leveys** asettaa uran leveyden. Sen syvyys on taivutussäde plus paksuus. Valitse **Ei mitään**, jos haluat jättää nurkan leikkaamatta.

Muuttaaksesi reunaa myöhemmin paina paneelin {{ui:Valitse}}-painiketta ja napsauta toista reunaa.

:::tip
Käytä parametreja paksuudelle ja säteelle (katso [Parametrit ja yhtälöt](topic:parameters)), jotta levypaksuuden muutos päivittää kaikki laipat kerralla.
:::

## Levitä tasoon

Molemmat paneelit päättyvät kohtaan **Tasokuvio**. Paina {{ui:Levitä tasoon}}:

- Esikatselu näyttää levyn auki levitettynä, kunkin taivutuksen keskiviiva katkoviivana.
- **Koko** ja **Pinta-ala** ovat tasaisen aihion mitat.
- Jokainen taivutus luetellaan suuntansa (**ylös** tai **alas**, katsottuna perusprofiilin luonnoksen puolelta), kulmansa ja sisäsäteensä kanssa.

Jokainen taivutus vie levyn neutraalikerroksen pituuden sen läpi, eli **taivutusvaran**: kulma (radiaaneina) × (sisäsäde + K-kerroin × paksuus). Eli 90°:n taivutus 2 mm:n levyssä, jonka sisäsäde on 2 mm ja K-kerroin 0.44, lisää 4.52 mm tasaista levyä.

Tasaisella levyllä reiät, leikkaukset ja taivutusvapautukset näkyvät tasokuviossa siellä, missä ne todella ovat, myös laipan läpi menevät reiät mukaan lukien.

Kun haluat leikata monta, paina tasokuvion alta {{ui:Asettele levyille…}}: katso [Asettele tasaiset osat levyille](topic:nest-flat-parts). Taivutetun perusprofiilin tasokuvio on yksi suorakulmio: sen kehitetty pituus × sen syvyys, ja jokaisessa kulmassa taivutuslinja.

{{ui:Tallenna DXF}} tallentaa tasokuvion laserille, lävistimelle tai vesileikkurille millimetreinä:

- ääriviiva tasolla **OUTLINE** viivoina, kaarina ja ympyröinä;
- taivutuslinjat tasolla **BEND** katkoviivoina;
- merkintä jokaisesta taivutuksesta tasolla **BEND_NOTES**, esimerkiksi ”UP 90° R2”.

Kun muutat mitä tahansa, tasokuvio poistuu. Paina {{ui:Levitä tasoon}} uudelleen saadaksesi uuden.

:::note
Tarkista K-kerroin työpajasi kanssa ennen leikkausta: tasokuvion pituus riippuu siitä, ja se vaihtelee materiaalin, paksuuden ja työkalujen mukaan.
:::

## Viestit

- **Levytyö tarvitsee perusprofiilin ennen sitä** — särmälaippa lisättiin ennen yhtäkään perusprofiilia. Siirrä se perusprofiilin alapuolelle tai lisää ensin perusprofiili.
- **Särmälaippa tarvitsee suoran reunan** — laipat taipuvat vain viivoja pitkin, joten kaarevat reunat eivät voi vielä saada laippaa.
- **Tuo reuna ei ole levyn paksuuden pinnalla** — reuna kuuluu pintaan, joka ei ole levyn ylä- tai alapinta (esimerkiksi reiän seinä). Valitse ylä- tai alapinnan reuna.
- **Siirtymät eivät jätä reunasta mitään** — kaksi siirtymää ovat yhteensä koko reunan verran tai enemmän.
- **Särmälaippoja taivutetulla perusprofiililla ei voi vielä levittää tasoon** — aloita tasaisesta levystä ja taivuta kaikki ylös särmälaipoilla, jotka aukeavat.
- **Taivutetun perusprofiilin jälkeen tehtyjä leikkauksia ja reikiä ei näytetä sen tasokuviossa vielä** — taivutetun profiilin tasokuvio on vain sen kehitetty suorakulmio.
