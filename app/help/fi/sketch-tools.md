---
title: Splinit, typistys, siirtymä ja muut luonnostyökalut
summary: Piirrä sovitepisteiden ja ohjauspisteiden splinejä, typistä ja pidennä käyriä, siirrä ketjua, peilaa keskiviivan suhteen, lisää monikulmioita ja uria, toista luonnosgeometriaa ja projisoi kiintokappaleen reunoja.
keywords: splini, sovitepiste, ohjauspiste, b-splini, nurbs, käyrä, typistys, pidennys, siirtymä, peilaus, symmetrinen, monikulmio, kuusikulmio, ura, toisto, lineaarinen toisto, pyöreä toisto, projisointi, projisoi särmä, sisällytä, muunna kohteet
from: 3ecb166a
---

Nämä työkalut toimivat avoimessa luonnoksessa. {{ui:Splini}} ja {{ui:Typistä}} ovat työkalurivillä. Muut löytyvät kohdasta {{ui:Lisää}} luonnostyökalujen lopusta. Jokainen työkalu on yksi kumoamisaskel, ja {{key:Esc}} pysäyttää sen. Perustyökalut: katso [Piirrä ensimmäinen luonnos](topic:sketch-basics).

## Splinit

Splini on sileä käyrä. Niitä on kahta tyyppiä.

| Työkalu | Pikanäppäin | Piirtäminen |
|---|---|---|
| {{ui:Splini}} | {{key:B}} | Napsauta pisteet, joiden kautta käyrä kulkee. Lopeta painamalla {{key:Enter}}, {{key:Esc}}, napsauttamalla hiiren oikealla painikkeella tai kaksoisnapsauttamalla. Napsauta ensimmäistä pistettä uudelleen sulkeaksesi splinin |
| {{ui:Ohjauspistesplini}} (kohdassa {{ui:Lisää}}) | | Napsauta ohjauspisteet. Käyrä vetäytyy niitä kohti, mutta koskettaa vain ensimmäistä ja viimeistä pistettä. Katkoviivainen ohjauspolygoni näkyy piirtäessä ja sen jälkeen |

- **Pisteet ovat luonnospisteitä.** Vedä niitä tai anna niille rajoitteet ja mitoitukset kuten muille pisteille. Splinin ensimmäinen piste voi tarttua viivan päähän, jolloin ne yhdistyvät yhtyvällä rajoitteella.
- **Tangentti päässä.** Valitse viiva, kaari tai splini, joka kohtaa splinin toisen pään, valitse splini ja sitten {{ui:T Tangentti}}. Splinin päätesuunta seuraa silloin viivaa. Tangentti muualla kuin splinin päässä hylätään: ”Splinin tangentin täytyy kohdata viiva, kaari tai splini sen päässä.”
- **Päät.** Ilman tangentti-rajoitetta sovitepisteisen splinin päät ovat luonnollisia (ei kaarevuutta aivan päässä). Käyrä on kuutiollinen ja kulkee jokaisen pisteen kautta, ja pisteiden välinen etäisyys määrää sen tiheyden.
- **Suljetut splinit** muodostavat profiilin itsenäisesti. Avoimet splinit liittyvät viivoihin ja kaariin suljetuksi silmukaksi kuten mikä tahansa muu käyrä.
- Splinin sisällä olevan pisteen poistaminen poistaa pisteen ja säilyttää splinin, niin kauan kuin siinä on vähintään kaksi pistettä (suljetussa kolme).

Pursota ja kierrä rakentavat splinin verkkoytimellä lyhyistä suorista paloista (todelliset käyrät vaativat tarkan ytimen, jota ei ole vielä tässä versiossa). DXF-vienti kirjoittaa splinin polylinjana, joka pysyy 0,01 mm:n päässä käyrästä, koska DXF R12:ssa ei ole splini-kohdetta.

## Typistys ja pidennys

| Työkalu | Pikanäppäin | Miten |
|---|---|---|
| {{ui:Typistä}} | {{key:T}} | Osoita käyrää: osa, joka olisi poistumassa, näkyy punaisena lähimpiin risteyksiin asti. Napsauta poistaaksesi sen. Käyrä, joka ei risteä mitään, poistetaan kokonaan |
| {{ui:Pidennä}} (kohdassa {{ui:Lisää}}) | {{key:E}} | Napsauta viiva tai kaari lähellä päätä pidentääksesi sitä. Se kasvaa seuraavaan kohtaamaansa käyrään asti. ”Tuon pään ei ole mitään, mihin ylettyä.”, kun mikään ei ole tiellä |

Typistys ja pidennys toimivat viivoilla, kaarilla, ympyröillä ja splineillä (pidennys: viivoilla ja kaarilla).

- Typistetty **ympyrä** muuttuu kaareksi. Sen säde- tai halkaisijamitoitus siirtyy kaarelle.
- Viivan keskiosan typistys jättää kaksi viivaa, jotka pysyvät samalla suoralla. Kaaren keskiosan typistys jättää kaksi kaarta, joilla on sama keskipiste ja yhtä suuri-rajoite.
- Typistetty **splini** muuttuu ohjauspistesplineiksi, jotka seuraavat vanhaa käyrää tarkalleen. Säilynyt tangentti-rajoite päässä pysyy.
- Uusi pää asetetaan käyrälle, joka sen leikkasi (viivalle, kaarelle tai ympyrälle, tai yhtyväksi sen pään kanssa). Splinit eivät voi kantaa pistettä, joten splini, joka leikkaa, ei lisää rajoitetta.

**Rajoitteet, jotka eivät enää sovi, poistetaan**, ja tilarivi kertoo, kuinka monta. Esimerkiksi typistetyn viivan pituusmitoitus poistetaan, mutta vaaka- ja yhdensuuntaisuusrajoitteet säilyvät.

## Siirtymä

1. Valitse {{ui:Siirtymä}} kohdasta {{ui:Lisää}} tai paina {{key:O}}.
2. Napsauta viiva, kaari, ympyrä tai splini. Sen koko ketju korostuu: kaikki päästä päähän liittyneet käyrät, kunnes vastaan tulee piste, jossa kolme tai useampi kohtaa. Siirtämään vain osa ketjusta valitse ensin nuo käyrät, valitse sitten Siirtymä ja napsauta jotakin niistä.
3. Siirrä osoitin puolelle, johon kopio menee. Katkoviivainen esikatselu seuraa. Paina {{key:B}} molemmille puolille.
4. Napsauta, kirjoita etäisyys ja paina {{key:Enter}}.

Viivat ja kaaret siirretään tarkasti. Kulmat pidennetään tai typistetään, kunnes ne kohtaavat. Kopiolla on yksi **Siirtymä**-mitoitus, ja muut osat seuraavat sitä: kaksoisnapsauta mitoitusta muuttaaksesi koko kopion. Liian suuri etäisyys ketjulle hylätään, esimerkiksi: ”Tämä etäisyys on liian suuri tälle ketjulle: yksi puoli kääntyisi sisäpuolelle.”

**Splini** siirretään uudella sovitepisteisellä splinillä, joka on 0,001 mm:n sisällä todellisesta siirtymästä. Tämä kopio on kiinteä: se ei seuraa myöhempiä muutoksia, eikä sillä ole Siirtymä-mitoitusta. Ketjussa olevan splinin päissä täytyy olla sileät (tangentti) liitokset.

## Peilaus

1. Valitse Valitse-työkalulla, mitä peilataan.
2. Valitse {{ui:Peilaa}} kohdasta {{ui:Lisää}} tai paina {{key:M}}.
3. Napsauta viiva tai keskiviiva, jonka suhteen peilataan.

Jokaisella peilatulla pisteellä on **Symmetrinen**-rajoite alkuperäisen kanssa, joten kopio seuraa, kun alkuperäinen muuttuu. Peiliviivalla olevat pisteet ovat yhteisiä, ja peilatuilla ympyröillä on yhtä suuri-rajoite. Jos mitään ei ollut valittuna, napsauta peilattavat kohteet, paina {{key:Enter}} ja napsauta sitten peiliviiva.

## Monikulmiot ja urat

| Työkalu | Miten |
|---|---|
| {{ui:Monikulmio}} | Napsauta keskipiste, sitten kulma, ja kirjoita sivujen määrä (3–64). Sivut ovat yhtä pitkiä ja kulmat ovat apuympyrällä. Mitoita ympyrä, jotta monikulmio saa koon |
| {{ui:Ura}} | Napsauta yhden pään keskipiste, sitten toisen pään keskipiste, ja napsauta sitten leveyden asettamiseksi. Kaksi viivaa, tangentteina kahteen yhtä suureen puoliympyrään |

## Luonnoksen toistot

Valitse ensin geometria, sitten:

- {{ui:Lineaarinen toisto}}: napsauta aloituspiste, sitten minne ensimmäinen kopio menee, ja kirjoita kopioiden määrä (alkuperäinen mukaan lukien).
- {{ui:Pyöreä toisto}}: napsauta keskipiste ja kirjoita kopioiden määrä, jaettuna tasaisesti täyteen kierrokseen.

Kopiot tuovat mukanaan valitun geometrian väliset rajoitteet (pyöreä toisto jättää pois vaaka- ja pystysuorat). Kopiot eivät ole kytkettyjä alkuperäiseen: jos muutat yhtä, muut pysyvät ennallaan.

## Kiintokappaleen reunojen projisointi

1. Valitse {{ui:Projisoi särmä}} kohdasta {{ui:Lisää}}.
2. Napsauta suoraa tai pyöreää reunaa osasta luonnoksen takana.

Reuna kopioidaan luonnostasolle tarkasti ja lukitaan (Lukitse-rajoite). Se ei seuraa myöhempiä muutoksia osassa. Paina {{key:Q}} tehdäksesi siitä apugeometriaa. Luonnostasoa kohti kallistettu ympyrä projisoituisi ellipsiksi, joten se hylätään. Samoin hylätään vapaamuotoiset reunat ja reunat, jotka osoittavat suoraan ulos luonnoksesta. Projisointi vaatii tarkan ytimen: sitä ei ole vielä tässä versiossa.
