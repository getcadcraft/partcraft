---
title: Simuloi nesteen virtausta (virtaustutkimus)
summary: Virtaus osan sisäisissä kanavissa tai sen ympärillä laatikossa: tuloaukot, poistoaukot, ilma, vesi tai oma neste, sitten nopeus ja paine siirrettävällä leikkaustasolla, virtaviivat, pintapaine, painehäviö, massatase, vastus ja nostovoima sekä se, mitä laminaarinen menetelmä kertoo ja mitä ei.
keywords: virtaus, CFD, neste, laskennallinen virtausdynamiikka, virtaussimulointi, ilma, vesi, viskositeetti, tiheys, Reynoldsin luku, laminaarinen, turbulenttinen, painehäviö, tuloaukko, poistoaukko, kansi, korkki, nopeus, virtausnopeus, tilavuusvirta, litraa minuutissa, staattinen paine, virtaviivat, leikkaustaso, vastus, nostovoima, vastuskerroin, nostokerroin, otsapinta-ala, ulkoinen virtaus, sisäinen virtaus, putki, kanava, jakoputki, suutin, lattice Boltzmann, jäännös, konvergenssi
from: 7dc75f29
---

**Virtaus**-tutkimus selvittää, miten neste liikkuu osan sisäisissä kanavissa (**sisäinen**) tai sen ympärillä (**ulkoinen**). Oletuksena se on **laminaarinen, kokoonpuristumaton, isoterminen ja Newtonin neste**: tasainen virtaus nesteessä, jonka tiheys ja viskositeetti pysyvät vakiona, ilman lämpöä, turbulenssia ja painovoimaa. Myös **kokeellinen** turbulenttinen malli on mukana, vain laadullisiin virtauskuvioihin (katso alla). Se toimii verkkoydimen antamille nimetyille pinnoille (katso [Verkkoydin](topic:solid-kernels)).

Valitse **Työtila**-valikosta **Simulointi**, paina **Uusi tutkimus**, jos sitä ei ole, ja aseta **Tyyppi**-kentäksi **Virtaus (CFD)**. **Virtausmalli** on **Laminaarinen** (oletus) tai **Turbulenttinen (Spalart–Allmaras, kokeellinen)**: katso alla oleva **Turbulenttinen virtaus (kokeellinen)**. Tutkimuksen rakenteelliset asetukset säilyvät, joten voit palata takaisin. Virtausasetukset tallennetaan osatiedostoon, ja jokainen muutos voidaan kumota.

## Valitse neste ja solut

- **Neste**: ilma tai vesi 20 °C:ssa, tai **Mukautettu**, jossa on oma tiheys (kg/m³) ja dynaaminen viskositeetti (Pa·s). Ilma käyttää ideaalikaasulakia ja Sutherlandin lakia (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); vesi käyttää IAPWS-arvoja (998.21 kg/m³, 1.0016 mPa·s).
- **Solukoko**: nestetila täytetään yhtä suurilla kuutioilla. Jätä kenttä tyhjäksi automaattista kokoa varten; paneeli näyttää ruudukon. Jokaisen aukon ja kanavan pitäisi olla **vähintään 8–10 solua poikki**, jotta lukemat ovat käyttökelpoisia. Pienemmät solut ovat tarkempia ja hitaampia (kaksi kertaa hienompi on noin 16 kertaa enemmän työtä).
- **Seinät**: **Interpoloitu** seuraa kaarevia seiniä solujen välissä (oletus). **Takaisinheijastus** käsittelee seinät kuutiomaisena portaikkona.

## Virtaus osan sisällä

Nestetilan on oltava suljettu. Lisää paneeliin **Tuloaukko** ja **Poistoaukko** ja napsauta sitten niiden pintoja näkymässä:

1. **Aukon ympärillä oleva tasainen pinta**: putken pään reuna tai liitäntäpinta. PartCraft sulkee aukon reiän siinä kannella. Kaikki tämän pinnan reiät kuuluvat tälle aukolle, joten kun tuloaukko ja poistoaukko avautuvat samalle pinnalle, mallinna siihen ohut korkki yhden niistä päälle.
2. **Korkin sisäpinta**: kuten muissa CAD-työkaluissa, mallinna aukon päälle ohut levy (pursotus) ja valitse sen pinta, joka koskettaa nestettä.

Tuloaukolle aseta **nopeus** (m/s, tasainen koko aukolla, osaan päin) tai **tilavuusvirta** (L/min). Poistoaukolle aseta **staattinen paine** (Pa, mittapaine). Jos aukko jää auki tai seinä on ohuempi kuin solu, sisäpuoli yhdistyy ulkopuoleen ja laskenta pysähtyy virheeseen ”Suljettua nestetilaa ei ole”.

## Virtaus osan ympärillä

Aseta **Virtaus** arvoon **Ulkoinen**, **Nopeus**, suunta, johon virtaus kohdistuu, ja se, kuinka pitkälle laatikko ulottuu ylävirtaan, alavirtaan ja sivuille (tyhjä: 1, 3 ja 1 kertaa osan suurin mitta). Laatikon pinta, josta virtaus tulee, on tulovirtaus. Pinta, josta se lähtee, on ulosvirtaus 0 Pa:ssa, ja virtauksen suuntaiset pinnat liukuvat. Liian pieni laatikko puristaa virtauksen osan ohi ja kasvattaa vastusta. **Vertailupinta-ala** on pinta-ala, jota vastus- ja nostokertoimet käyttävät (tyhjä: osan otsapinta-ala virtauksen suunnasta). Nosto mitataan +Y-akselin suuntaan, ellet valitse toista suuntaa.

## Ratkaise ja lue tulokset

Paina **Ratkaise**. Ratkaisu käy taustalla ja näyttää vaiheiden määrän, jäännöksen ja jäännöskäyrän. **Pysäytä** lopettaa sen. Se pysähtyy, kun jäännös (kuinka paljon nopeuskenttä vielä muuttuu askelta kohden) on tavoitteen alapuolella ja painehäviö tai vastus on tasaantunut. Jos se saavuttaa askelrajan ensin, paneeli sanoo punaisella **Ei konvergoitunut**: luvut ovat viimeinen tila, eivät pysyvä vastaus.

- **Leikkaustaso**: nopeus tai staattinen paine tasolla, joka kulkee mallin läpi. Valitse sen normaali (X, Y tai Z) ja vedä liukusäädintä siirtääksesi sitä. Vie hiiri sen päälle lukeaksesi arvot.
- **Virtaviivat**: tuloaukoista (sisäinen) tai ruudukosta laatikon tuloreunalla leikkaustasossa (ulkoinen).
- **Osa**: kiinteä, läpinäkyvä (jotta näet tason sisällä), pintapaine tai piilotettu.
- **Taulukko**: Reynoldsin luku, painehäviö (tuloaukkojen staattisen paineen keskiarvo miinus poistoaukkojen), kunkin aukon virtaus ja keskipaine, osaan kohdistuva voima, vastus ja nosto kertoimineen ja vertailupinta-alaan (ulkoinen), massatase (tulovirtaus verrattuna ulosvirtaukseen), verkko ja ratkaisija.

## Turbulenttinen virtaus (kokeellinen)

**Virtausmalli › Turbulenttinen (Spalart–Allmaras, kokeellinen)** ratkaisee aikakeskiarvoistetun turbulentin virtauksen (vakaa RANS). Spalart–Allmaras-malli antaa pyörrevisko­siteetin jokaiseen soluun, ja seinien vieressä olevat solut käyttävät Spaldingin seinälakia sen sijaan, että ratkaisisivat ohuen kerroksen siellä. Virtaus on kaikkialla täysin turbulenttinen (ei laminaarisia alueita, ei siirtymää).

**Se ei läpäissyt tarkkuustarkistuksiaan.** Paneeli, tulokset ja taulukko kertovat tämän jokaisessa turbulentissa tutkimuksessa, eikä varoitusta voi sulkea. Käytä sitä **virtauksen laadullisiin kuvioihin**, eli kohtiin, joissa virtaus irtoaa, kiertää tai kiihtyy. **Älä käytä sitä suunnittelulukuihin.**

| Tarkistus | Vertailu | Tulos |
|---|---|---|
| Tasaisen kanavan kitka, ensimmäinen solu y⁺ 49 / 98 | Deanin korrelaatio | +3.3 % / +4.7 % |
| Ratkaistu seinäkanava (y⁺ ≈ 3), Re_τ 180: keskinopeus | Moser, Kim & Mansour DNS | −1 % |
| Tasainen kanava, y⁺ 7–15 tai 190–380 | Deanin korrelaatio | +9 – +22 % |
| Putken kitka kuutiosoluissa, täysin kehittynyt, 10–30 solua poikki | Colebrook | 30–34 % liian suuri |
| Uudelleenkiinnittyminen taaksepäin suuntautuneen askelman takana, 6–14 solua askelkorkeutta kohti | Driver & Seegmiller, 6.26 askelkorkeutta | 21–39 % liian lyhyt |

Tulokset paranevat vain hitaasti hienommilla soluilla. Ratkaisun jälkeen taulukko näyttää **ensimmäisen solun y⁺** (pienin, keskiarvo ja suurin seinäsoluissa) ja varoittaa tarkistetun alueen 1–400 ulkopuolella. Tavoittele noin 30–300. **Laskenta-aika:** automaattiset solut mitoitetaan muutamalle minuutille yhdellä kannettavan tietokoneen ytimellä enintään. Paneeli näyttää ruudukon ja askelrajan pahimman tapauksen, ja pieni putki tasaantuu alle 20 sekunnissa. Solukoon puolittaminen maksaa noin 16 kertaa niin paljon aikaa. Voimat osaan tulevat liikemäärätaseesta aukkojen tai laatikon yli.

**Työstetty tähän asti:** seinäsolut sovittavat nyt oman leikkausjännityksensä seinälakiin. Tämä toi putken ja askelman virheet yllä oleviin lukuihin muuttamatta tasaisen kanavan tuloksia. Se ei riittänyt suunnittelulukuihin. Seuraava askel on hienommat solut seinien lähellä.

## Mitä se voi ja ei voi kertoa

- **Laminaarinen malli** on vain laminaarinen. Putkissa virtaus muuttuu turbulentiksi, kun Reynoldsin luku ylittää noin 2 000–4 000. Tylppien kappaleiden takana jälkivirtaus alkaa irrottaa pyörteitä noin 50:n yläpuolella. Paneeli varoittaa näistä kohdista. Laminaarinen tulos turbulentille virtaukselle aliarvioi painehäviön ja antaa väärän vastuksen. Kokeellinen turbulenttinen malli (yllä) kuvaa turbulenttista virtausta laadullisesti, mutta sen luvut eivät ole vielä luotettavia.
- **Menetelmä:** hilaan perustuva Boltzmann-menetelmä (D3Q19, kaksi relaksaatioaikaa), ajettuna vakaaseen tilaan. Se on hieman kokoonpuristuva sisällä, ja PartCraft pitää tiheyden muutokset muutamassa prosentissa. Jos virtaus on liian nopea soluille, se ei käynnisty ja kertoo, kuinka paljon pienempien solujen pitää olla.
- **Vertailtu:** Hagen–Poiseuille-virtaus osan läpi kulkevassa putkessa (painegradientti 1 % sisällä 20 solulla poikki), Ghian ym. kannen ajama onkalo (0.75 % kannen nopeudesta) ja Schäfer–Turek-sylinterivertailu (vastus 1 % sisällä 10 solulla halkaisijaa kohti).
- Ei mallinnettu: lämmönsiirto, turbulenssi suunnittelutarkkuudella (turbulenttinen malli on kokeellinen), vapaat pinnat, kavitaatio, painovoima, liikkuvat osat, ei-Newtonin nesteet ja karheat seinät. Laboratoriorakenne: tarkista tärkeät tulokset toisella tavalla.
