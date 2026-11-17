---
title: Vapaamuotoiset muodot Form-työtilalla ja pintaominaisuudet
summary: Työnnä ja vedä sileää ohjauskehikkoa Form-työtilassa, taita reunoja, käytä symmetriaa, tarkista ja viimeistele se tarkaksi kiintokappaleeksi tai pinnaksi, sitten paikkaa, lofttaa, ompele, paksunna, siirrä, pidennä ja typistä pintoja Suunnittelussa. Mikä on tarkkaa ja mikä likiarvoa.
keywords: form, vapaamuotoinen, T-spline, jakopinta, Catmull-Clark, kehikko, nelikulmiopallo, taitos, symmetria, zebra, kaarevuus, pinta, paikka, täyttö, loft-pinta, ompele, paksunna, siirtopinta, pidennä, typistä
from: 0d326ef4
---

:::note
**Ei vielä toteutettu tässä versiossa.** Muodon viimeistely osaksi osaa ja pintaominaisuudet vaativat tarkan geometriaytimen, jota tässä PartCraftin versiossa ei ole: se rakentaa jokaisen osan verkkoydimellä. [Mitä ei vielä ole toteutettu](topic:not-built-yet) kertoo, mitä tehdä sen sijaan. Loppu sivusta kuvaa ne, kun ne toimivat tarkalla ytimellä.
:::

**Form**-työtila tekee orgaanisia muotoja. Muokkaat **kehikkoa**, karkeaa verkkoa kulmista, reunoista ja tahkoista. Muoto on sileä pinta, jota kehikko ohjaa (sen Catmull–Clark-raja-pinta), joten yhden kulman siirtäminen taivuttaa pintaa hellästi sen ympärillä. Kun se näyttää oikealta, **Pinnoite** lisää sen osan historiaan *Form*-muotoelementtinä, ja tarkka ydin muuttaa sen todellisiksi B-spline-pinnoiksi. Sen jälkeen voit pyöristää sen, leikata sen, liittää sen muihin muotoelementteihin ja viedä sen STEP-muodossa.

Valitse **Form** työkalurivin vasemmalla puolella olevasta **Työtila**-luettelosta.

## Aloita kehikko

1. Aseta oikean paneelin **Koko** ja **Jaot**. Jaot on se, kuinka monta tahkoa kukin sivu saa.
2. Napsauta työkalurivin {{ui:Laatikko}}, {{ui:Nelikulmiopallo}} tai {{ui:Taso}}. Paneelissa on myös **Sylinteri**, **Torus** ja **Tahkot napsautuksilla**.

- **Nelikulmiopallo** on laatikkokehikko, joka on sovitettu niin, että sen kulmapisteet ovat pallon pinnalla. Pisteiden välillä pinta on hieman pallon sisäpuolella: noin 0.4 % vähemmän tilavuutta 2 jaolla.
- **Taso** on avoin, joten siitä tulee pintakappale (katso alla ”Pintaominaisuudet Suunnittelussa”).
- **Tahkot napsautuksilla**: napsauta 4 pistettä ylätasolla (maatasossa) tai kehikon kulmissa tehdäksesi yhden tahkon. Tahkot, joilla on yhteisiä kulmia, liittyvät yhteen. Paina {{key:Enter}} 3 pisteen jälkeen kolmiolle tai {{key:Esc}} lopettaaksesi.

Keskeneräinen kehikkosi tallennetaan osatiedoston mukana, joten voit sulkea tiedoston ja jatkaa myöhemmin.

## Valitse ja siirrä

- Napsauta kehikon kulmaa, reunaa tai tahkoa. {{key:Shift}}+napsautus lisää kohteita tai poistaa niitä. {{key:Esc}} tyhjentää valinnan.
- Valinnan keskelle ilmestyy gizmo. Vedä nuolta siirtääksesi sitä sen suuntaan tai neliötä siirtääksesi sitä tasossa. Paina {{key:W}} siirtääksesi, {{key:E}} kiertääksesi ja {{key:R}} skaalataksesi, tai käytä paneelin painikkeita. {{ui:Gizmo}} työkalurivillä kiertää niiden läpi.
- **Pehmeä vaimennus** (mm) vetää myös kulmat, jotka ovat sen etäisyyden sisällä. Vaikutus haipuu tasaisesti nollaan tämän etäisyyden reunalla.
- Jokainen vedo on yksi kumoamisvaihe: {{key:Ctrl+Z}} ja {{key:Ctrl+Y}} toimivat tavalliseen tapaan.

## Muuta kehikkoa

Paneelin **Muokkaa**-painikkeet toimivat valinnalle:

| Painike | Mitä se tekee |
|---|---|
| {{ui:Pursota}} | Valitut tahkot siirtyvät ulos **Pursotusetäisyys**-arvon verran normaaliensa suuntaan, uusin sivutahkoin. Valitut avoimet reunat kasvattavat uusia tahkoja ulospäin. |
| {{ui:Särmäsilmukka}} / Lisää särmäsilmukka | Jakaa nelikulmaisten tahkojen renkaan, joka kulkee valitun reunan läpi, puoliväliin. Useammat silmukat antavat tiukempia kaaria. |
| Lisää piste | Lisää kulman valitun reunan keskelle. |
| Jaa | Jakaa jokaisen valitun tahkon neljäksi nelikulmaiseksi tahkoksi sen keskikohdan ympärillä. |
| Silta | Liittää kaksi valittua tahkoa tai kaksi aukkoa (valitse yksi avoin reuna kummastakin) tahkoputkella. Molemmissa on oltava sama määrä reunoja. |
| Täytä aukko | Sulkee valitun avoimen reunan kautta kulkevan aukon yhdellä tahkolla. |
| Hitsaa | Yhdistää valitut kulmat yhdeksi niiden keskikohdassa. |
| Litistä | Siirtää valitut kulmat tasoon, joka sopii niihin parhaiten. |
| Poista | Poistaa valitut tahkot, reunat (kaksi tahkoa yhdistyy) tai kulmat. |

## Terävät reunat, symmetria ja näyttö

- {{ui:Taitos}} tekee valituista reunoista teräviä. **Taitospaino** 10 on täysin terävä. Pienempi paino pysyy terävänä niin monta tarkennusvaihetta ja pehmenee sitten, mikä antaa tiukan pyöristyksen kovan taitoksen sijaan. **Poista taitos** tekee ne jälleen sileiksi. **Terävä kärki** kiinnittää kulman, jotta pinta kulkee sen kautta pisteellä.
- **Symmetria** peilaa kehikon X-, Y- tai Z = 0 yli. Se säilyttää positiivisen puolen, peilaa sen ja liittää kaksi puolikasta. Sen jälkeen muokkaus kummalla puolella tahansa tehdään molemmille. Peilitasolla olevat kulmat pysyvät sillä.
- {{ui:Näyttö}} vaihtaa **Sileä** (pinnan, josta muoto tulee) ja **Laatikko** (itse kehikon tahkot) välillä.
- **Analyysi**: **Zebra-raidat** heijastavat raidallisen valon nykyisestä näkymästä. Ne kaartuvat sujuvasti sileällä pinnalla ja katkeavat taitoksessa. **Keskikaarevuus** värjää kuperat alueet punaisiksi, koverat siniseksi ja tasaiset valkoiseksi. Se mitataan näytetyllä verkolla kotangentti-kaavalla, joten se on suuntaa antava, ei mittaus.

## Tarkista ja viimeistele

- **Tarkista tarkasti** muuntaa kehikon tarkassa ytimessä muuttamatta osaasi. Se ilmoittaa, kuinka monta B-spline-paikkaa kehikko tekee, kuinka monta niistä on tarkkoja ja onko tulos suljettu, kelvollinen kiintokappale sekä sen tilavuus.
- {{ui:Pinnoite}} lisää historiaan *Form*-muotoelementin tai päivittää muokkaamasi muodon ja vie sinut takaisin Suunnitteluun. Suljettu kehikko muuttuu kiintokappaleeksi. Sen **Toiminto** Suunnittelun paneelissa voi olla Uusi kappale, Liitä, Leikkaa tai Yhteinen alue. Avoin kehikko muuttuu pintakappaleeksi.
- Jos haluat muuttaa muotoa myöhemmin, valitse se historiasta ja napsauta **Muokkaa Formissa**. Valmis kappale piilotetaan, kun muokkaat sen kehikkoa.
- **Hylkää** heittää kehikon pois koskematta historiaan.

## Mikä on tarkkaa ja mikä likiarvoa

Jokainen kehikon nelikulmainen tahko, tarvittaessa tarkennettuna, muuttuu yhdeksi bikuutiseksi B-spline-paikaksi.

- Kun jokaisen tahkon kulma on *säännöllinen* (neljä reunaa kohtaa pinnan sisällä, tai kolme avoimella reunalla tai taitoksen varrella), paikka on **tarkasti** jakopinta. Testit tarkistavat tämän 1e-9 mm:n tarkkuudella.
- Poikkeavan pisteen ympärillä (kolme, viisi tai useampi reuna kohtaa, kolmen tai viiden sivun tahkon kulma tai taitoksen pää) ei ole tarkkaa polynomipaikkaa. Siellä paikka ottaa tarkan pisteen ja tangenttitason kyseisessä kulmassa sekä naapureiden reunakäyrät, joten paikat liittyvät yhteen ilman rakoa. Tangenttijatkuvuus pisteessä kohtaavien reunojen yli on likimääräinen. Form-paneeli ja muotoelementin paneeli antavat suurimman kulman, tyypillisesti alle 2°. Korkeampi **Taso** muotoelementin paneelissa tekee näistä paikoista pienempiä ja lähempänä.
- Terävät taitokset ovat kiintokappaleen todellisia reunoja, joten voit pyöristää ne.
- Jokainen paikka on oma pintansa, joten muodossa on monta pintaa ja viivoja piirretään niiden väliin.

## Pintaominaisuudet suunnittelussa

Pintakomennot ovat Suunnittelun {{ui:Lisää}}-valikossa muotoelementtien alla. Ne tarvitsevat tarkan ytimen. Pintakappaleet piirretään läpinäkyvinä sinisinä. Ne eivät ole osa kiintokappaletta, ennen kuin paksunnat tai ompelet ne.

| Komento | Mitä se tekee |
|---|---|
| Paikka | Täyttää suljetun reunasilmukan. Valitse ensin kiintokappaleen reunat {{key:Shift}}+napsautuksella tai valitse pintakappale täyttääksesi sen aukon. **Tangentti (G1)** saa paikan liittymään siihen pintaan sujuvasti. |
| Loft-pinta | Pinta yhden käyräketjun läpi luonnosta kohden (avoin tai suljettu) historian järjestyksessä. |
| Ompele | Ompelee pintakappaleet yhteisiä reunoja pitkin. Jos ne sulkeutuvat, tulos on kiintokappale, jolla on Toiminto kuten muilla muotoelementeillä. |
| Paksunna | Antaa pintakappaleelle paksuuden: normaalin suuntaan, sitä vastaan tai puoliksi molempiin suuntiin. Tulos on kiintokappale. |
| Siirtopinta | Kopio pintakappaleesta, siirrettynä sen normaaleja pitkin. Alkuperäinen säilyy. |
| Pidennä pinta | Kasvattaa yhden tahkon pintaa valitsemiesi reunojen yli. |
| Typistä pinta | Leikkaa pintakappaleen siinä kohdassa, jossa toinen pintakappale tai kiintokappale sen ylittää. Napsauta **Valitse piste osasta** valitaksesi, mikä pala säilytetään, tai säilytä kaikki muu. |

Ompele, Paksunna, Pidennä ja Typistä käyttävät loppuun pintakappaleen, josta ne alkavat. Myöhemmät muotoelementit käyttävät uutta.

Nykyiset rajoitukset: useista erillisistä suljetuista paloista koostuvat muodot eivät muutu yhdeksi kiintokappaleeksi. Säännölliset alueet eivät yhdisty suuremmiksi pinnoiksi. Katso myös [Mitä ei vielä ole toteutettu](topic:not-built-yet).
