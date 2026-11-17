---
title: Kierteet akseleihin ja reikiin, piirrettyinä tai mallinnettuina
summary: Lisää ISO-metrinen tai puolisuunnikaskierre mihin tahansa pyöreään pintaan, akseliin tai reikään. Pidä se kosmeettisena piirustuksia varten tai mallinna todellinen kierukkamainen kierre 3D-tulostusta varten, väli mukana, jotta tulostetut osat sopivat yhteen.
keywords: kierre, kierteet, mallinnettu kierre, kierukka, kierukkamainen, ruuvi, pultti, mutteri, akseli, reikä, ulkokierre, sisäkierre, kosmeettinen kierre, metrinen kierre, puolisuunnikas, johtoruuvi, Tr16x4, M10, 3D-tulostus, tulostus, väli, sovite, vasenkätinen, kierretty reikä
from: 4f6401cc
---

{{ui:Kierre}} lisää kierteen pyöreisiin pintoihin: akselin ulkopuolelle (ulkokierre) tai reiän sisäpuolelle (sisäkierre). PartCraft päättelee pinnasta, kumpi on kyseessä.

Kierre on aluksi **kosmeettinen**: pinta pysyy tasaisena, näkymä piirtää kierteen katkoviivaympyröinä ja piirustusarkki merkitsee sen, esimerkiksi "M10×1.5 - 6g, kierre 20 pitkä". Valitse **Mallinnettu**, jos haluat leikata todellisen kierukkamaisen kierteen osaan, 3D-tulostusta varten tai mallia, jonka täytyy näyttää oikealta.

## Kierteen tekeminen akseliin tai reikään

1. Tee akseli tai reikä kierteen kokoisena: Ø10-akseli M10-pultille tai Ø8.5-reikä (kierteen esiporaus) M10-mutterille.
2. Napsauta pyöreää pintaa ja valitse {{ui:Lisää}} › {{ui:Kierre}}. Kun pyöreää pintaa ei ole valittu, PartCraft pyytää napsauttamaan pintoja ja sitten {{ui:Valmis}}.
3. Tarkista oikean paneelin **Koko**. **Sovita pintaan** valitsee koon itse: akselille koon, jonka ulkohalkaisija vastaa akselin halkaisijaa; reiälle koon, jonka pohjahalkaisijaan reikä sopii.

Kierre alkaa pinnan avoimesta päästä, kohdasta, josta osa ei jatku akselin suunnassa: akselin vapaasta päästä, reiän suusta. **Aloita toisesta päästä** kääntää sen toisinpäin.

## Asetukset

| Asetus | Vaihtoehdot | Oletus |
|---|---|---|
| **Muoto** | ISO metric (60°), M1.6 – M64 karkea; puolisuunnikas (Tr, 30°), Tr8×1.5 – Tr60×9 | ISO metric |
| **Koko** | Sovita pintaan tai yksi koko luettelosta | Sovita pintaan |
| **Koko pinta** | Poista valinta antaaksesi **Pituus (mm)**, mitattuna alusta | Valittu |
| **Aloita toisesta päästä** | Kierre kulkee pinnan toisesta päästä | Pois |
| **Kierteen suunta** | Oikea- tai vasenkätinen | Oikea |
| **Mallinnettu** | Leikkaa todellinen kierukkamainen kierre | Pois |
| **Väli (mm)** | Näkyy, kun Mallinnettu on valittu: kuinka paljon pienempi akselin kierre on ja kuinka paljon suurempi reiän kierre on joka puolelta | 0.1 |

Koko, joka ei sovi pintaan, rakennetaan silti, leikataan pinnan mukaan, ja paneeli kertoo siitä, esimerkiksi "Ø12 mm:n akseli ei ole M10:n Ø10 mm". Useat pinnat voivat jakaa yhden Kierre-ominaisuuden; **Sovita pintaan** -asetuksella kullakin on oma kokonsa.

## Mallinnetut kierteet 3D-tulostukseen

Mallinnettu kierre noudattaa standardin perusprofiilia: ISO 68-1 metrisille kierteille (tasaiset harjat ja pohjat, 60° sivut), ISO 2901 puolisuunnikkaille (30° sivut). **Väli** siirtää koko profiilia sisään (akseli) tai ulos (reikä), jotta tulostetut osat kiertyvät yhteen:

- **0.1–0.2 mm** sopii useimpiin tulostimiin. Tulosta ensin koe-pultti ja -mutteri.
- **0** on standardiprofiili, koneistettaville osille tai sovitteen tarkistamiseen.

Pultti ja mutteri, joilla on sama väli, eivät koskaan kosketa toisiaan sivuja pitkin: rako niiden välillä on kaksi kertaa väli joka puolelta.

:::tip
Hienot nousut tulostuvat huonosti: M3 ja sitä pienemmät tai nousu alle 0.5 mm ovat lähellä sitä, mitä 0.4 mm suutin pystyy piirtämään. Mallinna suuremmat kierteet, ja pienille käytä lämpöasennettavaa holkkia tai kierrettyä reikää.
:::

Mallinnettu kierre on osa kiintokappaletta: STL-, 3MF- ja STEP-viennit sisältävät sen, ja Mittaa mittaa sen. Se tekee osan raskaammaksi rakentaa uudelleen: 20 pitkä M10-kierre on noin 150,000 kolmiota.

## Kierretyt reiät

**Kierretyllä (ISO metric)** reiällä on myös **Mallinnettu**-kytkin samalla **Väli**-arvolla. Katso [Poraa reiät ja upotukset luonnospisteisiin](topic:holes).

## Kun kierre ei rakennu

- "Kierre tulee pyöreälle pinnalle (sylinteri): akseli tai reikä." Valittu pinta on tasainen tai kaareva jollain muulla tavalla.
- "Mikään standardikoko ei sovi Ø0.6 mm:n pyöreään pintaan: valitse koko." Sovita pintaan ei löytänyt mitään 12 %:n sisältä pinnasta. Valitse **Koko** tai vaihda pinta.
- "Pinta, jolla tämä kierre oli, on poissa (…). Valitse se uudelleen." Aiempi muutos poisti pinnan. Napsauta {{ui:Valitse pinnat}} ja napsauta pintaa uudelleen.

:::note
Tuumakierteet (UNC, UNF), putkikierteet, kartiokierteet, kierteen päättyminen ja viistetyt kierteen alut eivät ole vielä toteutettuja. Tarkka ydin näyttää mallinnetun kierteen kosmeettisena.
:::
