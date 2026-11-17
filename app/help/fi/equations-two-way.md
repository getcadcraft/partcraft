---
title: Yhtälöt molempiin suuntiin
summary: Muuta parametria, ja osa seuraa perässä; kirjoita uusi koko ohjattuun lukuun, ja PartCraft selvittää sen takana olevan parametrin, kysyen mikä niistä, kun useampi voisi muuttua.
keywords: yhtälöt, ratkaise takaperin, ohjattu mitta, kaksisuuntainen, käänteinen, tavoitehaku, parametrit, linkitetyt arvot, mikä parametri
from: 82dc0269
---

Yhtälö, kuten **Extrude1 depth = thick + extra**, toimii molempiin suuntiin.

## Eteenpäin: muuta parametria

Vaihda **Parametrit**-välilehdellä `thick` arvosta 20 arvoon 30. Extrude1:n syvyydestä tulee 30 + extra, ja osa rakentuu uudelleen.

## Takaperin: muuta ohjattua lukua

1. Napsauta historiassa ”Extrude1”. Sen **Syvyys (mm)** -ruudussa näkyy **ƒ**: yhtälö ohjaa sitä.
2. Kirjoita haluamasi koko, esimerkiksi `40`, ja paina {{key:Enter}}.

PartCraft ratkaisee yhtälön takana olevan parametrin niin monen vaiheen kautta kuin tarvitaan (`depth = hub_h`, `hub_h = disc_t + 50`: korkeuden kirjoittaminen muuttaa `disc_t`:tä). Tilarivi kertoo, mikä muuttui, esimerkiksi että extra muuttui arvosta 5 arvoon 15.

Kun kaksi tai useampi parametri ohjaa lukua, ruutu kysyy **Mikä parametri pitäisi muuttaa?** ja listaa ne. Napsauta yhtä; muut säilyttävät arvonsa. {{ui:Peruuta}} ei muuta mitään.

Sama toimii luonnoksessa: kaksoisnapsauta ohjattua mittaa, kirjoita arvo ja paina {{key:Enter}}. Se toimii myös parametritaulukon **Arvo**-sarakkeessa parametrille, joka on itse lauseke.

## Kun se ei onnistu

- Luku, jonka täytyy olla kokonaisluku (kuvion määrä) tai pysyä alueella (kulma enintään 360°), hylätään ennen kuin mitään muuttuu.
- Pelkästään kiinteistä luvuista koostuva yhtälö (`=40`) ei sisällä parametria, jota voisi muuttaa: kirjoittamasi luku korvaa sen.
- Jos mikään parametrin arvo ei anna kirjoittamaasi kokoa, tilarivi kertoo sen eikä mitään muuta.
- Luonnos, jota ei voi ratkaista uudella arvolla, säilyttää edelliset arvonsa, ja tilarivi nimeää luonnoksen.

Jokainen muutos, kumpaan suuntaan tahansa, on yksi askel {{key:Mod+Z}}- ja {{key:Mod+Y}}-näppäimille.
