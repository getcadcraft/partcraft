---
title: Muuta kokoja luonnosta avaamatta
summary: Ohjaa osaa oikean paneelin luvuilla: luonnosmitat, syvyydet, määrät ja kulmat, miten suunnittelet osan niin, että oikeat luvut ohjaavat sitä, ja missä parametrit ja yhtälöt ottavat vallan.
keywords: parametrit, ohjaavat mitat, suunnitteluaikomus, muuta kokoa, yhtälöt, yleismuuttujat, mallitaulukko, konfiguraatiot, mitoitus uudelleen, muokkaa mittaa
from: c2ae1a32
---

Jokainen PartCraft-osan koko on luku, jonka voit muuttaa myöhemmin: sen luonnosten mitat ja muotoelementtien asetukset. Luonnosta ei tarvitse avata, jotta sen mittoja voi muuttaa.

## Muuta luonnosmittaa paneelista

1. Klikkaa muotoelementtiä historiassa, esimerkiksi ”Extrude1”.
2. Pursotuksen omien asetusten alla **Luonnosmitat (Sketch1)** luettelee kaikki sen luonnoksen mitat: ”Etäisyys”, ”Halkaisija”, ”Kulma (°)” ja niin edelleen.
3. Kirjoita uusi arvo yhteen kenttään ja paina {{key:Enter}} tai {{key:Tab}}.

Luonnos ratkeaa uudella arvolla, ja koko osa rakennetaan uudelleen. Kun valitset itse luonnoksen, näkyy sama luettelo kohdassa **Ohjaavat mitat**.

Säteen tai halkaisijan on oltava suurempi kuin nolla, ja kulman on oltava 0 ja 180 asteen välillä. Tilarivi kertoo siitä, jos ei ole.

:::tip
Mikä kenttä on mikä? Kentät on luetteloitu siinä järjestyksessä, jossa mitat tehtiin. Jos et ole varma, avaa luonnos (kaksoisklikkaa sitä), kaksoisklikkaa mittaa piirtoalueella ja muuta se siellä.
:::

## Kirjoita pääluku heti

Valitse muotoelementti historiasta (tai lisää se) ja kirjoita luku: se menee muotoelementin pääkenttään, eli siihen, jota vaihdat useimmin. Pursotuksella se on **Syvyys**, kierrolla **Kulma**, reiällä **Halkaisija**, toistolla **Määrä**, pyöristyksellä **Säde** ja kuorella seinämä. Paina {{key:Enter}} asettaaksesi sen tai {{key:Esc}} säilyttääksesi vanhan. Pursotuksen lisääminen kertoo siitä tilarivillä: ”Extrude1 lisätty. Muuta sen lukuja oikealla tai kirjoita luku nyt sen syvyydeksi.”

## Vaihda luku historiassa

Jokaisen muotoelementin rivi historiassa näyttää pääluvun nimensä vieressä: ”Extrude1 25 mm”, ”Hole1 Ø6.6 thru”, ”Fillet1 R2”, ”LPattern1 4 × 20 mm”. Kaksoisklikkaa lukua (tai valitse rivi ja paina {{key:F2}}), ja siihen aukeaa kenttä. Kirjoita uusi arvo ja paina {{key:Enter}}; {{key:Esc}} säilyttää vanhan. Se toimii täsmälleen kuten muotoelementin kenttä oikealla: samat rajat, `=` yhtälön kirjoittamiseen, kuten `=width/2`, ja yksi kumoamisvaihe.

Pursotuksella, reiällä tai toistolla kaksoisklikkaus mihin tahansa kohtaan rivillä avaa kentän. Pyöristyksellä, viisteellä, kuorella, vetokulmalla tai kierteellä kaksoisklikkaus nimeen vie yhä reunojen tai pintojen valintaan, joten kaksoisklikkaa itse lukua. Luonnoksilla ei ole lukua rivillä: kaksoisklikkaus avaa luonnoksen.

## Vedä piirtoalueella

Valitse pursotus historiasta (tai klikkaa sitä piirtoalueella ja sitten sen riviä), ja sen päätypinnalla on oranssi nuoli, jonka vieressä on syvyys kentässä. Vedä nuolta: osa seuraa vetäessäsi, ja irrottaessasi uusi syvyys asettuu yhdeksi vaiheeksi ({{key:Mod+Z}} palauttaa sen). Paina {{key:Esc}} vetäessäsi palataksesi lähtöpisteeseen. Syvyys liikkuu kymmenesosan kokonsa askelin: 1 mm 25 mm pursotuksessa, 0.1 mm 3 mm pursotuksessa.

Kierrolla on kaareva nuoli kiertonsa päässä: vedä sitä akselin ympäri muuttaaksesi kulmaa kokonaisina asteina 1°:sta 360°:een.

Tai klikkaa nuolen vieressä olevaan kenttään, kirjoita arvo (tai `=` ja yhtälö) ja paina {{key:Enter}}. Pursotuksessa, joka menee **Läpi kaiken** tai pinnalle asti, eikä arvossa, jota yhtälö ohjaa, ei ole nuolta: muuta ne oikealta.

## Luvut, jotka ohjaavat osaa

| Missä | Mitä voit muuttaa |
|---|---|
| Luonnos | Jokainen mitta: pituudet, etäisyydet, säteet, halkaisijat, kulmat |
| Pursotus ja leikkaus | Syvyys, päätyehto, suunta, kohouma tai leikkaus |
| Kierto ja kierretty leikkaus | Kulma, akseli, kohouma tai leikkaus |
| Reikä | Halkaisija, syvyys, läpi kaiken, upotuksen halkaisija ja syvyys |
| Pyöristys, viiste, kuori | Säde, etäisyys, seinän paksuus ja suunta sekä mitkä reunat tai pinnat |
| Lineaarinen ja pyöreä | Määrä, väli tai kulma, suunta tai akseli |
| Osa | Kaarevuus (kuinka hienojakoisesti pyöreät muodot fasetoidaan) |
| Piirustus | Missä leikkaus leikkaa, yksityiskohdan koko ja mittakaava, GD&T-arvot |

## Suunnittele osa, jotta oikeat luvut ohjaavat sitä

Antamasi luvut ovat niitä, joita voit muuttaa. Muutamat tavat saavat myöhemmät muutokset toimimaan:

- **Mitoita se, mikä on tehtävän kannalta tärkeää.** Jos reiän on pysyttävä 15 mm:n päässä reunasta, mitoita se siitä reunasta, ei origosta.
- **Määritä luonnokset täysin.** Silloin muutos siirtää vain sen, mitä pitääkin (katso [Määritä luonnos täysin](topic:relations-dimensions)).
- **Käytä relaatioita aikomukseen.** Yhtä suuret kaksi reikää tarkoittaa, että yksi halkaisija ohjaa molempia. Symmetrisissä muodoissa aseta origo keskiviivalle tai käytä keskikohtaa.
- **Piirrä muotoelementtien tekemille pinnoille.** Pursotuksen päätypinnalle piirretty luonnos siirtyy, kun syvyys muuttuu.
- **Toista kopioimisen sijaan.** Yksi reikä toistettuna kahdeksan kertaa on yksi halkaisija muutettavana.

## Yksittäisten lukujen ulkopuolelle

- **Yksi luku ohjaa useita:** käytä parametreja ja yhtälöitä: [Ohjaa osaa parametreilla](topic:parameters).
- **Osan useita kokoja:** tallenna kukin [konfiguraationa](topic:design-tables); ne säilytetään osatiedostossa.
- **Laskutoimitus lukukentässä:** kirjoita `=40/2` tai `=width / 2`. Se tekee yhtälön; katso [Yhtälöt molempiin suuntiin](topic:equations-two-way).
- **Tuumayksiköt:** osa näyttää millimetrit. Lukukentässä, jossa on `=`, tai parametrissa `2in` muuttuu arvoksi 50.8.

Katso [Mitä ei ole vielä toteutettu](topic:not-built-yet).
