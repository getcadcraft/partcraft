---
title: Kierrä sorvattu osa
summary: Piirrä puolet profiilista keskiviivan viereen, kierrä se pyöreäksi osaksi, valitse akseli ja kulma, ja käytä kierrettyä leikkausta urien tekemiseen.
keywords: kierto, kierretty kohouma, kierretty leikkaus, sorvattu osa, sorvi, akseli, keskiviiva, ura, kulma, kierto-leikkaus
from: 593b6929
---

{{ui:Kierto}} kiertää profiilin akselin ympäri, kuten sorvilla tehty osa: akselit, kiekot, laipat, nupit. Kierretty leikkaus (Muotoelementit-ryhmän {{ui:Lisää}}-valikossa) kiertää profiilin materiaalin poistamiseksi, uria ja syvennyksiä varten.

## Kierrä portaittainen akseli

1. Luonnostele **Etutasolle**.
2. Paina {{key:N}} valitaksesi {{ui:Keskiviiva}}. Aloita origosta ja napsauta pistettä suoraan oikealle, esimerkiksi 100 mm päähän. Tämä on akseli. Se on katkoviivoitettu: rakennegeometria ei kuulu profiiliin.
3. Paina {{key:L}} Viiva-tilaan. Piirrä **puoliprofiili** keskiviivan yläpuolelle yhtenä suljettuna silmukkana: aloita keskiviivalta, mene ylös, askella ja palaa alas keskiviivalle, ja sitten pitkin sitä lähtöpisteeseen. Päiden on kohdattava: silmukan on oltava suljettu.
4. Mitoita säteet (korkeudet keskiviivan yläpuolella) ja pituudet. 10 mm korkeus keskiviivan yläpuolella tekee halkaisijan 20.
5. Valitse {{ui:Poistu}}.
6. Valitse {{ui:Kierto}}. Akseli ilmestyy, täysi kierros.

Profiilin on pysyttävä akselin yhdellä puolella. Jos se ylittää akselin: ”Profiili ylittää akselin. Pidä se keskiviivan yhdellä puolella.” Profiilin särmä saa olla akselilla.

## Asetukset

| Asetus | Mitä se tekee | Oletus |
|---|---|---|
| **Toiminto** | Kohouma (lisää materiaalia), Leikkaus (poistaa materiaalia), Leikkausalue (säilyttää päällekkäisyyden) tai Uusi kappale | Kohouma {{ui:Kierto}}:lle, Leikkaus {{ui:Lisää}} › {{ui:Kierretty leikkaus}}:lle |
| **Kulma (°)** | Kuinka pitkälle kierretään, 0:sta juuri yli 360:een | 360 |
| **Akseli** | Ensimmäinen keskiviiva tai mikä tahansa viiva tai keskiviiva luonnoksessa, listattuna nimellä ”Keskiviiva 1 (l1)” tai ”Viiva 3 (l3)” | Ensimmäinen keskiviiva |

Osittainen kulma tekee kiilan, joka kierretään luonnoksen tasosta yhteen suuntaan.

Jos luonnoksessa ei ole keskiviivaa ja **Akseli** on Ensimmäinen keskiviiva: ”Piirrä keskiviiva (rakennusviiva) luonnokseen, jonka ympäri kierretään.” Voit myös valita profiilin kiinteän viivan akseliksi.

## Leikkaa ura

1. Kun akseli on rakennettu, avaa uusi luonnos **Etutasolle** (sama taso kuin akselin luonnoksessa).
2. Piirrä keskiviiva samaan akseliin: aloita origosta ja pidä se vaakasuorana, jotta se saa H-suhteen, tai kirjoita se **Lisää koordinaateilla** -toiminnolla (esimerkiksi alkaen `0, 0` loppuun `100, 0`). Uusi luonnos ei tartu toisen luonnoksen viivoihin.
3. Piirrä pieni suljettu suorakulmio, joka menee päällekkäin akselin reunan kanssa siinä kohdassa, johon ura tulee.
4. Valitse {{ui:Poistu}} ja sitten {{ui:Lisää}} › {{ui:Kierretty leikkaus}}.

## Kierretyt pinnat kokoonpanoissa

Kierrolla on akseli, jota muut muotoelementit ja kokoonpanot voivat käyttää:

- **Pyöreä kuviointi** käyttää oletuksena viimeisimmän kierron akselia (katso [Muotoelementtien kuviointi ja peilaus](topic:patterns-mirror));
- kokoonpanossa kierron tekemien pintojen välinen liitos alkaa **kiertyvänä** liitoksena, ja **Keskitä kohteeseen** tarjoaa ”Revolve1:n kierron akseli” (katso [Rakenna kokoonpano](topic:build-assembly)).

## Todelliset kaaret ja fasetit

PartCraft rakentaa kierron verkkoytimellä (tilarivin siru sanoo ”Mesh kernel”): pyöreät muodot ovat tasaisia fasetteja, oletuksena 64 per kierros, ja tilavuudet ovat hieman todellisen arvon alla (noin 0.16 % arvolla 64). Näkymä sekä STL-, 3MF- ja STEP-viennit koostuvat näistä fasetteista. Aseta **Kaaret** (napsauta tyhjää tilaa ja sitten oikeaa paneelia) arvoon Hieno (128) tai Erittäin hieno (256) sileämpiä varten. Todelliset sylinterit, kartiot ja toruksit tarvitsevat tarkan ytimen: ei vielä toteutettu tässä versiossa. Katso [Verkkoydin](topic:solid-kernels).
