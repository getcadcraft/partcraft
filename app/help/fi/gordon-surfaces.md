---
title: Pinnat käyräverkon läpi (Gordon-pinta)
summary: Tee yksi sileä pinta profiili- ja ohjauskäyrien verkon läpi, jotka piirretään luonnoksissa tai otetaan osan reunoista. Sulje kiintokappaleeksi, kun profiilit ovat suljettuja. Kerrotaan, mikä on tarkkaa, mikä sovitettua ja mitä viestejä tulee, kun verkko ei sovi.
keywords: tangentti, g1, tangenttisuus, tangenttijatkuvuus, peilitaso, gordon-pinta, käyräverkko, reunapinta, verkkopinta, profiilit, ohjaimet, ohjauskäyrät, loft ohjaimilla, ohjainkiskot, kuori, transfiniittinen, Coons, B-spline-pinta, vapaamuotoinen pinta
from: ada3cb8b
---

:::note
**Ei vielä toteutettu tässä versiossa.** Gordon-pinta vaatii tarkan geometriaytimen, jota tässä PartCraftin versiossa ei ole: se rakentaa jokaisen osan verkkoydimellä. [Mitä ei vielä ole toteutettu](topic:not-built-yet) kertoo, mitä tehdä sen sijaan. Loppu sivusta kuvaa sen toiminnan tarkalla ytimellä.
:::

**Gordon-pinta** on yksi pinta, joka kulkee jokaisen verkon käyrän läpi: joukko **profiileja**, jotka kulkevat yhteen suuntaan, ja joukko **ohjaimia**, jotka kulkevat toiseen suuntaan ja risteävät kuten verkon langat. Sillä muotoillaan runko, lokasuoja tai kahva muutamasta leikkauskäyrästä, joita hallitset suoraan. Se tarvitsee **tarkan ytimen** (katso [Verkkoydin](topic:solid-kernels)).

## Piirrä verkko

1. Piirrä **profiilit**: kaksi tai useampi käyrää vierekkäin, esimerkiksi leikkauksia yhdensuuntaisilla tasoilla. Viivat, kaaret, ympyrät ja splinet toimivat kaikki. Päästä päähän yhdistetty käyräketju lasketaan yhdeksi käyräksi.
2. Piirrä **ohjaimet**: kaksi tai useampi käyrää, jotka kulkevat profiilien poikki. Jokaisen ohjaimen on leikattava jokainen profiili kerran ja jokaisen profiilin jokainen ohjain kerran.
3. Varmista, että käyrät todella kohtaavat. Piirrä ohjaimen luonnos niin, että sen käyrä kulkee profiilien pisteiden läpi. Napsahda projisoituihin pisteisiin tai kirjoita koordinaatit. Verkko hyväksyy raot enintään **Toleranssin** verran (aluksi 0.01 mm).

Yksi luonnos voi sisältää useita käyriä: jokainen erillinen ketju siinä on oma käyränsä. Voit siis piirtää kaikki ohjaimet yhteen luonnokseen, esimerkiksi ylätasolle.

## Tee pinta

1. Valitse {{ui:Lisää}} Muotoelementit-ryhmästä ja sitten {{ui:Gordon-pinta}}.
2. PartCraft ottaa käyttämättömät luonnokset: ne, jotka ovat tasoissa yhdensuuntaisia ensimmäisen kanssa, tulevat **profiileiksi** ja muut **ohjaimiksi**. Tarkista luettelo oikealla ja aseta kukin luonnos arvoon **Profiilit**, **Ohjaimet** tai **Ei käytössä**.
3. Käyttääksesi osan reunoja, napsauta **Valitse reunat profiileiksi** (tai **ohjaimiksi**), napsauta reunoja näkymässä ja paina Esc.

Tulos on **pintakappale**. {{ui:Paksunna}} muuttaa sen kiintokappaleeksi, {{ui:Ompele}} ompelee sen muihin pintoihin ja {{ui:Typistä pinta}} leikkaa sen.

### Sulje kiintokappaleeksi

Kun profiilit ovat suljettuja käyriä (ympyröitä, suljettuja splinejä tai suljettuja ketjuja) ja ensimmäinen ja viimeinen profiili ovat kukin litteässä tasossa, valitse **Sulje kiintokappaleeksi**. Päät peitetään litteillä pinnoilla ja suljettu muoto liittyy, leikkaa, leikkaa yhteiseltä alueelta tai muuttuu uudeksi kappaleeksi kuten mikä tahansa muu muotoelementti. Näin teet loftin, joka seuraa ohjauskäyriä. Sama toimii suljettujen ohjaimien kanssa.

## Tangentti tasoon reunaa pitkin

Gordon-pinta kulkee käyriensä läpi, mutta yksinään se ei vastaa kohtaamansa kaltevuutta. Jotta se lähtee reunasta **tangentiaalisesti** tasoon (G1), kuten peilitasoon, jotta peilattu kopio liittyy ilman taitosta, tai litteään pintaan, josta se kasvaa:

1. Valitse Gordon-muotoelementti. Kohdassa **Tangentti kohteeseen** valitse taso kohdasta {{ui:Lisää taso…}} (Etu, Ylä, Oikea tai vertailutaso), tai valitse litteä pinta näkymästä ja paina {{ui:Lisää valittu tasainen pinta}}.
2. PartCraft löytää verkon reunakäyrän, joka on siinä tasossa, ja pinta lähtee siitä tangentiaalisesti tasoon.

Jos tasossa on kaksi reunakäyrää (lattia molempien päiden alla), lisää taso kahdesti: kumpikin kopio ottaa seuraavan. Tasoja voi olla enintään neljä, yksi reunaa kohti.

Raportti kertoo, minkä käyrän suuntaisesti kukin taso teki pinnan tangentiksi, ja kuinka jyrkässä kulmassa pinta kohtasi tason ennen sitä. Ohjaimet, jotka lähtevät jo tuolta käyrältä tasoon tangentiaalisesti, seurataan tarkasti. Ohjaimet, jotka nousevat siitä poispäin, taivutetaan kapealla kaistalla reunan lähellä. Raportin luku ”seuraa jokaista käyrää tarkkuudella” kertoo, kuinka paljon: piirrä ohjaimet, jotka lähtevät reunasta tasaisesti, saadaksesi tarkan sovituksen.

## Mikä on tarkkaa ja mikä sovitettua

Paneeli kertoo, mikä näistä pätee ja kuinka paljon pinta poikkeaa käyristäsi.

- **Tarkka**: kun jokainen käyrä on polynomi (viivat, splinet ja niiden ketjut) ja ohjaimet leikkaavat kaikki profiilit samoilla parametreilla, pinta on tarkasti kyseisten käyrien Gordon-pinta. Bikuutiosta leikattujen iso-käyrien verkko palauttaa sen pinnan, ja neljä suoraa viivaa antaa tasaisen tai kierretyn (bilineaarisen) paikan.
- **Sovitettu**: kaaret, ympyrät ja osan reunat eivät ole polynomeja. Eri parametreilla leikkaavat käyrät on ajoitettava uudelleen, jotta leikkauspisteet osuvat kohdalleen. Nämä käyrät sovitetaan kuutiollisilla B-splineillä verkon koon kymmenesmiljoonasosan tarkkuudella (noin 0.00001 mm 100 mm:n osalle). Kaaresta ja viivoista tehty sylinteripaikka pysyy 0.00001 mm:n sisällä todellisesta sylinteristä.

Käyrien välissä pinta on se, mitä menetelmä antaa: profiilit sekoitettuna poikki, plus ohjaimet sekoitettuna poikki, miinus niiden leikkauspisteiden sekoitus. Se on sileä kaikkialla paitsi siellä, missä käyrässä on terävä kulma. Kun kaksi Gordon-pintaa jakaa reunakäyrän, ne kohtaavat reuna reunaan (G0), eivät tangentiaalisesti.

## Kun verkko ei sovi

| Viesti | Mitä tehdä |
|---|---|
| ”… eivät kohtaa: ne kulkevat 0.4 mm:n päässä toisistaan” | Tee se profiili ja ohjain leikkaamaan, tai nosta Toleranssia |
| ”… kohtaa … 2 kertaa” | Ohjain saa leikata kunkin profiilin vain kerran. Jaa kiertyvä käyrä tai käytä vähemmän profiileja |
| ”… eri järjestyksessä” tai ”taittuu itsensä päälle” | Kaksi ohjainta leikkaa toisensa (tai kaksi profiilia). Sukujen on kulkea vierekkäin |
| ”vähintään kaksi profiilia ja kaksi ohjainta” | Lisää käyriä tai aseta useampi luonnos arvoon Profiilit tai Ohjaimet |
| ”sekoittaa avoimia ja suljettuja käyriä” | Tee kaikki profiilit avoimiksi tai kaikki suljetuiksi (sama ohjaimille) |
| ”Pää … ei ole tasainen, joten sitä ei voi peittää” | Piirrä ensimmäinen ja viimeinen suljettu profiili kumpikin omaan tasoonsa, tai jätä **Sulje kiintokappaleeksi** pois päältä |

## Rajoitukset

- Yksi B-spline-pinta per verkko: ei G1- tai G2-tangenttia naapuripintoihin.
- Suljetun verkon sauma ensimmäisen ohjaimen kohdalla liittyy reuna reunaan, muttei tangentiaalisesti.
- Loft-muotoelementissä itsessään ei ole ohjainkiskoja. Käytä sen sijaan Gordon-pintaa suljettuna kiintokappaleeksi.
- Hyvin mutkikkaat käyrät tai leikkauspisteet, jotka ovat hyvin epätasaisesti välissä yhdessä käyrässä verrattuna toiseen, voivat tarvita liian monta pistettä sovittamiseen. Muotoelementti kertoo siitä.
