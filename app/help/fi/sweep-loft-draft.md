---
title: Pyyhkäisy, loft ja vetokulma
summary: Pyyhkäise suljettu profiili luonnoskäyrien tai mallin särmien polkua pitkin, lofttaa leikkausten läpi eri tasoilla ja lisää vetokulma pintoihin. Mukana ovat asetukset, tarkat tulokset ja viestit.
keywords: pyyhkäisy, pyyhkäisty kohouma, pyyhkäisty leikkaus, putki, polku, loft, lofttaus kohouma, sulautuvat leikkaukset, suora, vetokulma, vetokulma, kapenevat pinnat, neutraali taso, vetosuunta, muovaus
from: 9d637981
---

:::note
**Tässä versiossa** pyyhkäisy ja loft eivät ole vielä toteutettuja: ne tarvitsevat tarkan geometriaytimen, jota tässä PartCraftin versiossa ei ole. [Mitä ei ole vielä toteutettu](topic:not-built-yet) kertoo, mitä tehdä sen sijaan; Pyyhkäisy- ja Loft-osiot kuvaavat ne sellaisina kuin ne toimivat tarkalla ytimellä. **Vetokulma toimii** tasaisilla pinnoilla: verkkoydin rakentaa sen, ja tulos on sama kuin tarkalla ytimellä.
:::

Kaikki kolme löytyvät Ominaisuudet-ryhmän {{ui:Lisää}}-valikosta (katso [Verkkoydin](topic:solid-kernels)). Kukin voi liittää materiaalia, leikata sitä, säilyttää vain päällekkäisen osan (**Yhteinen alue**) tai luoda **Uusi kappale** (pyyhkäisy ja loft: **Toiminto** paneelissa).

## Pyyhkäisy

Pyyhkäisy siirtää suljettua profiilia polkua pitkin: putkia, kahvoja, lankajousia, kiskoja.

1. Piirrä **polku** yhteen luonnokseen: viivoja ja kaaria, jotka on yhdistetty päästä päähän (tai käytä mallin särmiä, katso alla).
2. Piirrä **profiili** toiseen luonnokseen, jonka taso kulkee polun toisen pään kautta, esimerkiksi ympyrä ylätasolla polun alkupisteessä, kun polku on piirretty etutasolle.
3. Valitse profiililuonnos ja valitse {{ui:Lisää}}, sitten {{ui:Pyyhkäisy}}. Viimeisin muu luonnos muuttuu poluksi.

Paneelissa:

| Asetus | Mitä se tekee |
|---|---|
| **Polku** | Valitse luonnokset, jotka muodostavat polun (useat luonnokset liittyvät päästä päähän yhdeksi 3D-poluksi); **Valitse mallin särmiä** lisää osan särmiä |
| **Suunta** | Seuraa polkua (oletus), Frenet, Kiinteä (leikkaukset pysyvät yhdensuuntaisina profiilin kanssa), Säilytä suunta, Ohjauskäyrää pitkin |
| **Loppumittakaava** | Profiili kasvaa tai kutistuu lineaarisesti tähän kokoon lopussa (1 = vakio) |

Polun terävät kulmat viistetään. Säteen 5 ympyrällä, joka pyyhkäistään 100 mm:n viivaa pitkin, saadaan täsmälleen 2500π mm³:n sylinteri; säteen 50 neljänneskaarta pitkin saadaan neljännes vannerengas, jonka tilavuus on 625π² mm³.

## Loft

Loft sulautuu kahden tai useamman leikkauksen läpi eri tasoilla.

1. Piirrä kukin leikkaus omaan luonnokseensa (kussakin yksi suljettu silmukka), pohjatasoille, apusasoille (katso [Apugeometria](topic:reference-geometry)) tai pinnoille.
2. Valitse {{ui:Lisää}}, sitten {{ui:Loft}}. Jokaisesta käyttämättömästä yhden silmukan luonnoksesta tulee leikkaus historian järjestyksessä.

Paneeli luettelee leikkaukset järjestyksessä (**Ylös** järjestää uudelleen, **Poista** poistaa yhden); **Lisää luonnos** lisää toisen, **Valitse pinta** lisää osan tasaisen pinnan. **Suora** tekee tasaisia pintoja leikkausten välille sileän sulautuksen sijaan. Kahden neliön välillä molemmat antavat saman katkaistun pyramidin (40 mm:n neliöstä 20 mm:n neliöön 30 mm:n matkalla: täsmälleen 28000 mm³).

Leikkaukset, joissa on eri määrä sivuja (neliöstä kolmioon), yhdistää OpenCascade, joka voi kiertää sivupintoja; ominaisuus varoittaa siitä. Piirrä leikkaukset samalla määrällä sivuja alkaen vastaavista kulmista, jotta saat puhtaimman tuloksen.

### Ohjauskiskot

Ohjauskiskot ovat käyriä, joita lofin sivujen on seurattava ensimmäisestä leikkauksesta viimeiseen, kun haluat itse piirtää pullistuman, kapenemisen tai levenemisen.

1. Piirrä kaksi tai useampi kisko: avoimia käyriä (viivoja, kaaria, splinejä), jotka kulkevat ensimmäisestä leikkauksesta viimeiseen ja leikkaavat jokaisen leikkauksen kerran. Yhteen luonnokseen voi kuulua useita kiskoja: jokainen erillinen ketju siinä on oma kiskonsa. Piirrä kisko niin, että se todella osuu jokaiseen leikkaukseen: tartuta sen päät leikkausten pisteisiin.
2. Lofin paneelissa **Ohjauskiskot**-kohdassa valitse luonnokset, jotka sisältävät ne, tai napsauta {{ui:Valitse mallin särmiä ohjainkäyriksi}} ja napsauta osan särmiä ({{key:Esc}} lopettaa).

Kiskojen kanssa loft on Gordon-pinta leikkausten ja kiskojen läpi (katso [Pinnat käyräverkon läpi](topic:gordon-surfaces)), joka on suljettu päistään tasaisilla pinnoilla kiinteäksi kappaleeksi. Paneelissa kerrotaan, kuinka tarkasti se seuraa niitä. Jokaisen leikkauksen on silloin oltava luonnos (piste tai pinta ei voi ottaa kiskoa), eikä **Suora** koske sitä. Kisko, joka ohittaa leikkauksen yli 0.01 mm:llä, hylätään ja rako ilmoitetaan.

Tarkistettu: kaksi ympyrää (halkaisija 20 mm ja 10 mm 40 mm:n matkalla) neljällä suoralla kiskolla antavat katkaistun kartion tilavuuden 0.000002 %:n tarkkuudella; 5 mm ulospäin pullistuvat kaaret antavat tynnyrin, joka seuraa jokaista kiskoa 0.00001 mm:n tarkkuudella.

## Vetokulma

Vetokulma kallistaa pintoja, jotta osa irtoaa muotista.

1. Valitse {{ui:Lisää}}, sitten {{ui:Vetokulma}} (tai napsauta ensin pintoja {{key:Shift}}+napsautuksella). Kun mitään ei ole valittu, olet valintatilassa: napsauta kutakin kallistettavaa pintaa ja valitse sitten {{ui:Valmis}}.
2. Aseta **Kulma (°)**, **Neutraali taso** (jossa pinnat säilyttävät kokonsa) ja **Vetosuunta** (oletuksena neutraalin tason normaali).

Positiivinen kulma kallistaa pinnan vetosuuntaa pitkin sisäänpäin ja poistaa materiaalia; negatiivinen lisää sitä. Neutraali taso on oletuksena ylätaso. Tässä versiossa vain tasaisia pintoja voi vetää: sylinteri-, kartio- tai vapaamuotoinen pinta antaa ilmoituksen "Vetokulma: tässä versiossa vain tasaiset pinnat (verkkoydin rakentaa sen)." Lohkon 100 × 100 × 50 neljä sivua, jotka vedetään 5° kulmaan pohjansa suhteen, muuttuvat katkaistuksi pyramidiksi, jonka tilavuus on täsmälleen h/3·(a² + b² + ab), missä b = a − 2h·tan 5°.

## Viestit

| Viesti | Mitä tehdä |
|---|---|
| "Profiilin tason on kuljettava polun toisen pään kautta …" | Siirrä profiililuonnos polun alkuun (tai loppuun) |
| "Polussa on aukko: sen käyrät eivät liity päästä päähän …" | Yhdistä polun käyrät; eri luonnoksissa niiden päiden on osuttava tarkasti yhteen |
| "Loft-leikkauksessa on oltava täsmälleen yksi suljettu silmukka" | Jaa luonnos tai poista ylimääräinen silmukka |
| "… ei voi vetää tämän neutraalin tason suhteen …" | Pinta on yhdensuuntainen neutraalin tason kanssa tai ei kohtaa sitä |
| "Vetokulma: tässä versiossa vain tasaiset pinnat (verkkoydin rakentaa sen)." | Valittu pinta on kaareva. Poista se; vedä vain tasaisia pintoja |

:::note
Ei vielä toteutettu: kiertyvät pyyhkäisyt, ohutseinämä- ja pintapyyhkäisyt, loftin ohjauskiskot ja päätangenttisuus, vetokulma sylintereille, kartioille ja vapaamuotoisille pinnoille.
:::
