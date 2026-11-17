---
title: Poraa reiät ja upotukset luonnoksen pisteisiin
summary: Aseta pisteitä luonnokseen pinnalle, tee yksinkertaisia, upotettuja, kartiomaisia tai kierrettyjä (ISO-metrisiä) reikiä jokaiseen pisteeseen, aseta halkaisija ja syvyys sekä korjaa reiät, jotka porautuvat väärään suuntaan.
keywords: reikä, reikätyökalu, poraus, mallinnettu kierre, 3D-tulostus, upotus, upotettu reikä, kartiopora, kierretty reikä, kierre, kierreporan koko, metrinen kierre, M6, läpi kaikki, sokea reikä, pulttireikä, pisteet, reikien keskipisteet
from: 8e1eef83
---

{{ui:Reikä}} poraa yhden reiän jokaiseen luonnoksen vapaaseen pisteeseen. Vapaa piste on tehty Piste-työkalulla, ei viivan päätteenä tai ympyrän keskipisteenä.

## Poraa reikiä pintaan

1. Napsauta litteää pintaa, johon poraat, ja valitse sitten {{ui:Luonnostele tälle pinnalle}}.
2. Paina {{key:P}} ja napsauta kohtaa, johon kukin reikä menee. Mitoita pisteet reunoista tai origosta, jos niiden sijainti on tärkeä (katso [Määritä luonnos täysin](topic:relations-dimensions)).
3. Valitse {{ui:Poistu}}.
4. Valitse {{ui:Reikä}}.

Reiät menevät läpi osan, 6 mm halkaisijaltaan. Oikea paneeli näyttää **Reiät**: kuinka monta tehtiin, ”yksi luonnospistettä kohden”.

**Yksi reikä nopeasti:** napsauta litteää pintaa, johon reikä menee, ja valitse oikeasta paneelista {{ui:Reikä tähän}}. PartCraft lisää pinnalle luonnoksen, jossa on yksi piste siinä kohdassa, johon napsautit, ja läpireiän yhdellä vaiheella. Kirjoita luku heti ja paina {{key:Enter}} halkaisijalle. Sijoittaaksesi reiän tarkasti, avaa uusi luonnos ja mitoita piste.

**Mitä luonnosta käytetään:** juuri sulkemasi tai valitsemasi luonnos. Muuten käytetään viimeisintä käyttämätöntä luonnosta, jossa on vapaita pisteitä. Jos sellaista ei ole: ”Tee ensin luonnos, jossa on pisteet reikien kohdalla (Luonnostele pinnalle, sitten Piste).”

## Asetukset

| Asetus | Vaihtoehdot | Oletus |
|---|---|---|
| **Tyyppi** | Yksinkertainen, Upotus, Kartiopora, Kierretty (ISO-metrinen) | Yksinkertainen |
| **Halkaisija (mm)** | Reiän halkaisija | 6 |
| **Läpi kaikki** | Valittuna: kokonaan läpi osan. Poista valinta sokeaa reikää varten | Valittu |
| **Syvyys (mm)** | Näkyy, kun Läpi kaikki ei ole valittuna | 10 |
| **Upotuksen ⌀** | Näkyy upotukselle: leveämmän syvennyksen halkaisija | 11 |
| **Upotuksen syvyys** | Näkyy upotukselle | 6 |
| **Käännä suunta** | Porautuu luonnostason toiselle puolelle | Pois |

Reiät porautuvat materiaaliin suorassa kulmassa luonnostasoon nähden. Sokean reiän syvyys mitataan luonnostasosta, ja sen pohja on tasainen.

## Upotettu pulttireikä

1. Tee reiät kuten yllä.
2. Aseta **Tyyppi** arvoon **Upotus**.
3. Aseta **Halkaisija (mm)** arvoon `6.6` (väliä M6-pultille), **Upotuksen ⌀** arvoon `11` ja **Upotuksen syvyys** arvoon `6.5`.

Upotuksen on oltava reikää leveämpi (”Upotuksen on oltava reikää leveämpi.”), ja sokealle reiälle myös matalampi kuin reikä (”Upotuksen on oltava reikää matalampi.”).

## Pulttiympyrä

Tasaisesti keskipisteen ympärille jaetuille reikille tee **yksi** reikä ja kuvioi se: valitse Reikä-muotoelementti ja valitse sitten {{ui:Pyöreä}} (katso [Kuvio- ja peilausmuotoelementit](topic:patterns-mirror)). Kuvio seuraa, kun muutat reiän kokoa.

## Kun reiät menevät väärään suuntaan

- ”Luonnoksen sillä puolella ei ole mitään porattavaa. Kokeile kääntää suunta.” Luonnos on materiaalin kaukaisella puolella. Valitse **Käännä suunta**.
- ”Aseta luonnospisteet reikien kohdalle (Piste-työkalu), tee sitten reikä.” Luonnoksessa ei ole vapaita pisteitä. Viivojen päät ja ympyröiden keskipisteet eivät lasketa.
- ”Ei vielä mitään porattavaa.” Reikä tarvitsee kiintokappaleen. Tee ensin kohouma (boss).

## Reiät kokoonpanoissa

Jokaisella reiällä on akseli. Kokoonpanossa **Keskitä kohteeseen** voi asettaa liitoksen reiän akselille, luetteloituna nimellä ”Hole1, hole 2”, jotta tappi tai pultti linjautuu sen kanssa. Katso [Rakenna kokoonpano](topic:build-assembly).

## Kartiopora-reiät

Aseta **Tyyppi** arvoon **Kartiopora**, sitten **Kartioporan ⌀** (pinnassa) ja **Kartioporan kulma**: 90° (ISO-metriset kantaruuvit) tai 82° (tuumaruuvit). Ota kartioporan halkaisija ruuvivalmistajan tiedoista, hieman ruuvin kallan halkaisijaa suurempana. Kartion pinta on paneeleissa nimeltään ”countersink”.

## Kierretyt reiät

Aseta **Tyyppi** arvoon **Kierretty (ISO-metrinen)** ja valitse **Kierre**, M2–M24 karkea. Reikä porataan alla olevan taulukon kierreporan koossa (nimellishalkaisija miinus nousu, poraussarjaan, kuten ISO 2306 listaa 6H-kierteelle). **Halkaisija (mm)**-kenttää ei käytetä. Sokealle reiälle **Kierteen syvyys (mm)** asettaa, kuinka syvälle kierre menee.

| Kierre | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Nousu | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Kierreporan ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Kierre on aluksi **kosmeettinen**: malli sisältää porareiän, näkymä piirtää kierteen ulkohalkaisijan katkoviivaympyröinä, ja piirustusarkki kantaa merkinnän huomautuksena, kuten ”4× M8×1.25 - 6H, kierre läpi”. STEP vie vain porareiän.

Valitse **Mallinnettu** leikataksesi todellisen kierteen reikään 3D-tulostusta varten. **Väli (mm)** tekee reiästä sen verran suuremman joka puolelta, jotta tulostettu pultti sopii: 0.1–0.2 mm sopii useimmille tulostimille. Merkinnän loppuun tulee sitten ”(mallinnettu)”. Katso [Kierteet akseleissa ja porauksissa, piirretyt tai mallinnetut](topic:threads), joka laittaa kierteitä myös akseleihin.

:::note
Vastaporatut reiät, tuumakierteet ja putkikierteet eivät ole vielä toteutettuja.
:::
