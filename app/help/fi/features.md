---
title: Muotoelementit ja niiden asetukset
summary: Jokainen muotoelementti työkalurivillä asetuksineen, oletuksineen ja rajoineen, pursotuksesta pyöristykseen, kuoreen ja tuotuihin STEP-kiintokappaleisiin, muotoelementtien yhteiset toiminnot sekä osan asetukset.
keywords: muotoelementit, ei vielä toteutettu, pursota, leikkaa, kierrä, kierretty leikkaus, reikä, upotus, lineaarinen toisto, ympyräkuvio, peilaus, pyöristys, viiste, kuori, tuonti, asetukset, oletukset, tarkkuus, kaarevuus, facetit, poista käytöstä, kelaus
from: ab3a598e
---

Muotoelementit luetellaan historiassa siinä järjestyksessä, jossa ne tehtiin, ja ne rakennetaan uudelleen ylhäältä alas. Jokainen nimetään tyyppinsä mukaan numerolla: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft rakentaa jokaisen muotoelementin verkkoytimellä. Pyöristys ja viiste toimivat suorilla särmillä kahden tasaisen pinnan välillä, ja kuori avaa tasaisia pintoja. Tuodut kiintokappaleet vaativat tarkan ytimen, jota tässä versiossa ei ole: niitä ei vielä rakenneta, ja niiden kuvaus alla kertoo, että aiemmalla versiolla tehty osa säilyttää ne. Katso [Verkkoydin](topic:solid-kernels) ja [Ei vielä toteutettu](topic:not-built-yet).

## Luonnos

| Asetus | Huomautuksia |
|---|---|
| Taso | Edestä-, Päältä- tai Oikealta-taso, tai tasainen pinta. Vain näytetään: luonnoksen siirtämiseksi tee uusi |
| Tila | Täysin määritelty, Osittain määritelty (vapausasteineen), Ylimäärittelty tai Tyhjä |
| Geometria, relaatiot | Kuinka monta käyrää, pistettä ja relaatiota |
| Ohjaavat mitat | Jokainen luonnoksen mitta, muokattavissa |

Painikkeet: {{ui:Muokkaa luonnosta}}, {{ui:Vie DXF:nä}}.

## Pursota ja leikkaa

{{ui:Pursota}} ja {{ui:Leikkaa}} tekevät saman muotoelementin, alkaen eri asetuksilla.

| Asetus | Vaihtoehdot | Pursota alkaa | Leikkaa alkaa |
|---|---|---|---|
| Toiminto | Kohouma (lisää materiaalia), Leikkaus (poistaa materiaalia), Risteys (säilyttää päällekkäisen osan), Uusi kappale (ei vielä toteutettu tässä versiossa) | Kohouma | Leikkaus |
| Loppu | Sokea (syvyys), Keskitaso (molempiin suuntiin), Läpi kokonaan | Sokea | Läpi kokonaan |
| Syvyys (mm) | Yli 0, enintään 1 000 000 | 10 | 10 |
| Käännä suunta | Pois / päällä | Pois | Pois |

- Profiili: jokainen suljettu silmukka kiinteistä viivoista, ympyröistä ja kaarista luonnoksessa. Silmukat silmukoiden sisällä ovat reikiä.
- Läpi kokonaan toimii vain leikkauksille. Se ulottuu aivan läpi osan valitulla puolella.
- Leikkaus menee materiaaliin, poispäin luonnostason ulospäin osoittavasta puolesta; Käännä kääntää sen.

## Kierrä ja kierretty leikkaus

| Asetus | Vaihtoehdot | Oletus |
|---|---|---|
| Toiminto | Kohouma, Leikkaus | Kohouma ({{ui:Kierto}}), Leikkaus ({{ui:Lisää}} › {{ui:Kierretty leikkaus}}) |
| Kulma (°) | Yli 0, enintään 360 | 360 |
| Akseli | Ensimmäinen keskiviiva, mikä tahansa luonnoksen viiva tai keskiviiva, tai akselimuotoelementti, joka on luonnoksen tasossa | Ensimmäinen keskiviiva |

- Profiilin on pysyttävä akselin yhdellä puolella. Se saa koskettaa akselia.
- Kierron akselia voivat käyttää ympyräkuviot ja kokoonpanon liitokset.

## Reikä

| Asetus | Vaihtoehdot | Oletus |
|---|---|---|
| Tyyppi | Yksinkertainen, Upotus | Yksinkertainen |
| Halkaisija (mm) | Yli 0 | 6 |
| Läpi kokonaan | Päällä / pois | Päällä |
| Syvyys (mm) | Kun Läpi kokonaan on pois | 10 |
| Upotuksen ⌀ | Leveämpi kuin reikä | 11 |
| Upotuksen syvyys | Matalampi kuin sokea reikä | 6 |
| Käännä suunta | Pois / päällä | Pois |

- Yksi reikä jokaiseen irralliseen pisteeseen luonnoksessa (pisteet tehty Piste-työkalulla). Paneeli näyttää niiden määrän.
- Reiät porataan kohtisuoraan luonnostasoon nähden, materiaaliin.
- Jokaisen reiän akselia voivat käyttää kokoonpanon liitokset (”Hole1, reikä 2”).

## Lineaarinen toisto

| Asetus | Vaihtoehdot | Oletus |
|---|---|---|
| Kopioitavat muotoelementit | Mitkä tahansa kiintokappalemuotoelementit sen yläpuolella | Valittu muotoelementti, muuten viimeisin kiintokappalemuotoelementti |
| Suunta | X-akseli, Y-akseli, Z-akseli; aiemman luonnoksen viiva; kierron akseli; valittu särmä | X-akseli (tai särmä, joka valittiin lisätessä) |
| Väli (mm) | Mikä tahansa luku | 20 |
| Määrä | 1–1000, alkuperäinen mukaan lukien | 3 |
| Käännä suunta | Pois / päällä | Pois |

## Ympyräkuvio

| Asetus | Vaihtoehdot | Oletus |
|---|---|---|
| Kopioitavat muotoelementit | Kuten lineaarisessa | Kuten lineaarisessa |
| Akseli | Kuten Suunta yllä | Viimeisimmän kierron akseli, muuten Y-akseli (tai valittu särmä) |
| Kulma (°) | Yli 0, enintään 360. 360 jakaa kopiot tasaisesti ympäri; vähemmän levittää ne kulman yli | 360 |
| Määrä | 1–1000, alkuperäinen mukaan lukien | 6 |
| Käännä suunta | Pois / päällä | Pois |

## Peilaus

| Asetus | Vaihtoehdot | Oletus |
|---|---|---|
| Peilaa | Koko runko (tähän asti rakennettuna), tai valitut muotoelementit | Valittu muotoelementti, muuten koko runko |
| Peilaustaso | Edestä-, Päältä- tai Oikealta-taso; tasainen pinta | Oikealta-taso, tai tasainen pinta, joka valittiin lisätessä |

## Pyöristys ja viiste

Tässä versiossa verkkoydin rakentaa ne suorille särmille kahden tasaisen pinnan välillä (ulko- tai sisänurkat) yhdellä säteellä. Pyöreä särmä sanoo: ”Pyöristys: tässä versiossa vain suorat särmät kahden tasaisen pinnan välillä (verkkoydin rakentaa ne). Pyöristä tai viistä kaarevat särmät luonnoksessa.”; missä pyöristetyt särmät kohtaavat nurkassa, ne viistetään, ja muotoelementti varoittaa: ”Pyöristys verkkoytimellä: missä pyöristetyt särmät kohtaavat, ne viistetään, eivät sulauteta.” Kaikki viisteen tyypit (yhtä suuri etäisyys, kaksi etäisyyttä, etäisyys ja kulma, sekä **Käännä puolet**) toimivat. Katso [Pyöristä, viistä ja ontota](topic:fillet-chamfer-shell).

| Asetus | Vaihtoehdot | Oletus |
|---|---|---|
| Säde (mm) (Pyöristys) | Yli 0 | 2 |
| Etäisyys (mm) (Viiste) | Yli 0, sama molemmilla pinnoilla | 1 |
| Särmät | Valitut särmät, kukin listattuna kahden pinnan mukaan (”Extrude1 päätepinta × Extrude1 sivu”), **Poista**-painikkeella | Särmät, jotka valittiin lisätessä |

- Valitse särmät ennen painikkeen valintaa ({{key:Shift}}+napsautus useille), tai valitse painike ilman valintoja ja napsauta särmiä jälkikäteen.
- {{ui:Valitse särmät}} (tai kaksoisnapsauta muotoelementtiä) muuttaa särmiä.
- Särmät muistetaan niiden kahden pinnan mukaan, jotka ne yhdistävät, joten ne säilyvät, kun muutat kokoja aiemmin historiassa.

## Kuori

Verkkoydin rakentaa sen. Vain tasaisia pintoja voi avata (”Kuori: tässä versiossa se avaa vain tasaisia pintoja (verkkoydin rakentaa sen).”); eri paksuisia seiniä ei vielä rakenneta. Katso [Pyöristä, viistä ja ontota](topic:fillet-chamfer-shell).

| Asetus | Vaihtoehdot | Oletus |
|---|---|---|
| Seinä (mm) | Yli 0 | 2 |
| Seinät kasvavat ulospäin (pinnat pysyvät sisällä) | Pois: seinät menevät sisäänpäin. Päällä: seinät menevät ulospäin | Pois |
| Avoimet pinnat | Poistettavat pinnat, vähintään yksi, **Poista**-painikkeella | Pinnat, jotka valittiin lisätessä |

{{ui:Valitse pinnat}} muuttaa avoimia pintoja.

## Tuotu kiintokappale

Tehty avaamalla STEP-, STL-, OBJ- tai 3MF-tiedosto: kolmioista koostuva kiintokappale ilman omaa historiaa ([Avaa STEP-tiedosto](topic:import-step), [Avaa STL, OBJ tai 3MF](topic:open-meshes)). Se näyttää tiedoston, josta se tuli, ja sen, mitä tuonti korjasi; **Yksiköt tiedostossa**, **Ylös tiedostossa** ja **Käyttötarkoitus** pysyvät muokattavina. Aiemmalla versiolla tuotu STEP-kiintokappale, jossa oli tarkka ydin, pysyy historiassa merkittynä ei vielä rakennetuksi; avaa STEP-tiedosto uudelleen tuodaksesi sen kolmioina.

| Asetus | Vaihtoehdot | Oletus |
|---|---|---|
| Ylös tiedostossa | Z ylös (useimmat CAD), Y ylös | Z ylös |

Kuviot ja peilaukset voivat kopioida tuodun kiintokappaleen, mutta eivät pyöristystä, viistettä tai kuorta.

## Jokaisella muotoelementillä on

Jokaisen muotoelementin paneelin alareunassa:

| Painike | Tekee |
|---|---|
| {{ui:Poista käytöstä}} / {{ui:Ota käyttöön}} | Kytkee sen pois tai päälle. Muotoelementit, jotka tarvitsevat sitä, eivät rakennu, kun se on pois |
| {{ui:Kelaa taaksepäin tähän}} | Rakentaa vain tämän muotoelementin yläpuolella olevat muotoelementit. Uudet muotoelementit lisätään kelauspalkkiin |
| {{ui:Siirrä ylös}} / {{ui:Siirrä alas}} | Järjestää uudelleen, kun mikään sen käyttämä ei päätyisi sen alapuolelle. Muuten harmaana syy kerrottuna |
| {{ui:Poista}} | Poistaa sen ja (kysymyksen jälkeen) jokaisen muotoelementin, joka sitä käyttää |
| Nimi | Nimeää uudelleen (enintään 60 merkkiä) |

Muotoelementit, joissa on luonnos, listaavat myös **Luonnoksen mitat**, jotka ovat muokattavissa paikoillaan.

## Tilat historiassa

| Tila | Näkyy | Merkitys |
|---|---|---|
| Rakennettu | Normaali | Kaikki kunnossa |
| Varoitus | ⚠ | Rakennettu, mutta jotain tarkistettavaa: ”Ylimäärittelty: 1 relaatio ei ole tarpeen.” tai ”Osasta ei jää mitään tämän jälkeen.” |
| Virhe | ⚠ virhe, punainen | Ei voitu rakentaa; viesti kertoo syyn |
| Ei vielä rakennettu | ⚠ ei vielä rakennettu | Tarvitsee muotoelementin, joka epäonnistui, on poistettu käytöstä tai kelattu taaksepäin, tai tarvitsee tarkan ytimen, jota tässä versiossa ei ole (”Pyyhkäisy: ei vielä toteutettu. …”) |
| Poistettu käytöstä | pois | Kytketty pois |
| Kelattu taaksepäin | harmaana, kelauspalkin alapuolella | Ei rakennettu, ennen kuin kelaat eteenpäin |

## Osan asetukset

Napsauta tyhjää tilaa, jotta mitään ei ole valittuna. Oikea paneeli näyttää **Osa**:

- **Nimi**: osan nimi, jota käytetään tiedostonimissä ja piirustusotsikossa (enintään 120 merkkiä).
- **Kaarevuus**: katso alla.

### Kaarevuuden tarkkuus

Verkkoydin rakentaa kiintokappaleen itse tasaisista facetteista, joten näkymä, STL, 3MF, facetoitu STEP, tilavuus ja piirustusnäkymät seuraavat **Kaarevuutta**: kuinka monta facettia täyttä kierrosta kohden.

| Asetus | Facetteja kierrosta kohden | Pyöreän muodon tilavuus |
|---|---|---|
| Karkea (32 / kierros) | 32 | Noin 0,64 % todellista arvoa alempi |
| Normaali (64 / kierros) | 64 | Noin 0,16 % alempi (oletus) |
| Hieno (128 / kierros) | 128 | Noin 0,04 % alempi |
| Erittäin hieno (256 / kierros) | 256 | Noin 0,01 % alempi |

Hienommat kaarevuudet antavat sujuvampia vientejä ja näkymiä, ja hitaampia uudelleenrakennuksia. Asetus tallennetaan osatiedostoon.

## Ei vielä toteutettu

Muuttuvasäteiset pyöristykset, pyöristykset ja viisteet pyöreillä särmillä, kaarevia pintoja avaavat kuoret, vetokulma kaarevilla pinnoilla, pyyhkäisy, loft, kylki, STEP-kiintokappaleet, joissa on tarkkoja kaarevia pintoja, uudet kappaleet, kaltevuudet, ”asti”-pinta tai kärkipiste sekä viittaukset kiintokappaleen pintoihin ja särmiin vaativat tarkan ytimen, jota tässä versiossa ei ole. Myös nämä eivät ole vielä toteutettuja: kierretyt ja upotetut reiät. Katso [Ei vielä toteutettu](topic:not-built-yet).
