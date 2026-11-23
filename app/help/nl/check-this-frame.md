---
title: Frame controleren
summary: Neem de stalen onderdelen van een lasconstructie (een slede, een standaard, een frame van buizen en profielen), zet het materieel op zijn poten en de steunen op de vloer, en zie hoeveel van elk onderdeel en elke las wordt gebruikt onder AISC 360-16 of EN 1993. Een hulpmiddel totdat een ingenieur het heeft beoordeeld.
keywords: frame, lasconstructie, slede, pompslede, constructief element, las, lassen, controle, AISC 360, EN 1993, benutting, steun, materieel, belasting, holle doorsnede, HSS, RHS, CHS, ingenieur
from: 032e34ee
---

{{ui:Frame controleren}} neemt de rechte stalen onderdelen van een lasconstructie, bouwt er een frame van, lost het op onder het gewicht van het staal en het materieel dat u erop zet, en toetst elk onderdeel en elke las waar onderdelen samenkomen. Eén run, één tabel.

:::warning
Het is een **hulpmiddel totdat een ingenieur het heeft beoordeeld**. Het is geen goedkeuring, en een geslaagde toets is geen ontwerp. Het gebruikt de middenlijnen van de onderdelen zoals getekend, behandelt elke verbinding als rondom gelast over de doorsnede, neemt het been van de kilnaad uit de wand van de doorsnede (tot 8 mm) tenzij u het instelt, en controleert geen bouten, platen, voetplaten, ankers, oplegging, blokafschuiving, vermoeiing of hijsen.
:::

## Uitvoeren

1. Teken de rechte onderdelen met {{ui:Constructief element}} (de doorsneden komen uit de doorsnedetabel).
2. Open {{ui:Weergaven}} › {{ui:Frame controleren}}. Zeg waar het frame staat (een **steun** bij elke voet: scharnierend, ingeklemd of rol; {{ui:Scharnierende steunpunten bij de voeten}} zet er één bij elk laagste eindpunt van een onderdeel) en wat erop staat (**materieel**: massa, zwaartepunt, de punten waar het wordt vastgebout, en een optionele horizontale duw).
3. Kies de norm: **ASCE 7 + AISC 360-16** of **EN 1990 + EN 1993**. Stel de staalkwaliteit in en, voor AISC, de sterkte van het lasmetaal (482.6 MPa is E70).
4. Druk op {{ui:Controleren}}. {{ui:Rapport opslaan als CSV}} schrijft elke tabel, met de regel dat het niet is beoordeeld eerst.

Het frame wordt gelezen in millimeters met de verticale as van het onderdeel omhoog. Steunen en materieelpunten worden getypt als x y z in hetzelfde frame, met z de hoogte.

Een eindpunt van een onderdeel dat op het midden van een ander onderdeel komt, splitst dat onderdeel daar, net als een voet of een vastbout-punt op de lijn van een onderdeel. Een gewicht wordt verdeeld over de vastbout-punten als star lichaam; een zwaartepunt buiten de voeten, of een hijskracht op een voet, wordt gemeld, nooit verborgen.

## Wat u krijgt

- Het meest gebruikte item en of iets faalt. Items die de controle niet kan beoordelen (een doorsnede die niet in de tabel staat, een staalsoort zonder factor in de norm) worden geteld en genoemd, nooit als geslaagd geteld.
- Eén rij per onderdeel en per lasgroep: hoeveel er gebruikt wordt, de bepalende toets en clausule, en de belastingcombinatie die bepalend was.
- Dezelfde tabellen in het rapport.

## Wat wordt gecontroleerd

Holle doorsneden (RHS, SHS, CHS, buis) en I-profielen op trek, druk, buiging, afschuiving en hun interactie; kilnaden en volledig doorgelaste lassen met de elastische vectormethode. Compacte wanden alleen bij buiging voor holle doorsneden; slanke wanden worden gemeld als niet gecontroleerd. Sommige constanten zijn uit de normen overgenomen en nog niet vergeleken met een gedrukt exemplaar; het rapport noemt elke bron.

Zie [Frames uit staalprofielen](topic:structural-members) voor het tekenen van de onderdelen en hun snijlijst.
