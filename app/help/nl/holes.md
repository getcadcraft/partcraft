---
title: Gaten en verzinkingen boren op schetspunten
summary: Plaats punten in een schets op een vlak, maak eenvoudige, met cilindrische of conische verzinking, of met schroefdraad (ISO metrisch) gaten op elk punt, stel diameter en diepte in, en repareer gaten die de verkeerde kant op boren.
keywords: gat, gatenwizard, boren, gemodelleerde schroefdraad, 3D-printen, verzinking, cbore, verzonken gat, csink, schroefdraadgat, kernboor, metrische schroefdraad, M6, helemaal door, blind gat, boutgat, punten, gatmiddelpunten
from: 8e1eef83
---

{{ui:Gat}} boort één gat op elk los punt van een schets. Een los punt is er één gemaakt met het hulpmiddel Punt, niet het uiteinde van een lijn of het middelpunt van een cirkel.

## Gaten in een vlak boren

1. Klik op het vlakke vlak waarin u wilt boren, en kies {{ui:Schets op dit vlak}}.
2. Druk op {{key:P}} en klik waar elk gat komt. Bemaat de punten vanaf de randen of de oorsprong als hun positie van belang is (zie [Een schets volledig definiëren](topic:relations-dimensions)).
3. Kies {{ui:Afsluiten}}.
4. Kies {{ui:Gat}}.

Gaten gaan door het onderdeel, 6 mm breed. Het rechterpaneel toont **Gaten**: hoeveel er zijn gemaakt, "één per schetspunt".

**Eén gat, snel:** klik op het vlakke vlak waar het gat komt en kies {{ui:Gat hier}} in het rechterpaneel. PartCraft voegt een schets op het vlak toe met één punt waar u klikte, en een Gat door het onderdeel, in één stap. Typ direct een getal en druk op {{key:Enter}} voor de diameter. Om het precies te plaatsen, opent u de nieuwe schets en bemaat u het punt.

**Welke schets wordt gebruikt:** de schets die u net sloot of de geselecteerde; anders de meest recente ongebruikte schets met losse punten. Als er geen is: "Maak eerst een schets met punten waar de gaten komen (Schets op een vlak, daarna Punt)."

## Instellingen

| Instelling | Keuzes | Standaard |
|---|---|---|
| **Type** | Eenvoudig, Cilindrische verzinking, Conische verzinking, Met schroefdraad (ISO metrisch) | Eenvoudig |
| **Diameter (mm)** | De diameter van het gat | 6 |
| **Helemaal door** | Aangevinkt: helemaal door het onderdeel. Uitgevinkt voor een blind gat | Aangevinkt |
| **Diepte (mm)** | Zichtbaar als Helemaal door is uitgevinkt | 10 |
| **Verzinking ⌀** | Zichtbaar bij Cilindrische verzinking: de diameter van de bredere uitsparing | 11 |
| **Verzinkingdiepte** | Zichtbaar bij Cilindrische verzinking | 6 |
| **Richting omkeren** | Boort naar de andere kant van het schetsvlak | Uit |

Gaten boren in het materiaal, haaks op het schetsvlak. De diepte van een blind gat wordt gemeten vanaf het schetsvlak; de bodem is vlak.

## Een bout met verzinking

1. Maak de gaten zoals hierboven.
2. Zet **Type** op **Cilindrische verzinking**.
3. Zet **Diameter (mm)** op `6.6` (speling voor een M6-bout), **Verzinking ⌀** op `11` en **Verzinkingdiepte** op `6.5`.

De verzinking moet breder zijn dan het gat ("De verzinking moet breder zijn dan het gat.") en, voor een blind gat, ondieper dan het gat ("De verzinking moet ondieper zijn dan het gat.").

## Een boutcirkel

Voor gaten die gelijkmatig rond een middelpunt zijn verdeeld, maakt u **één** gat en patroneert u het: selecteer de Gat-feature en kies {{ui:Cirkelvormig}} (zie [Patroon- en spiegelfeatures](topic:patterns-mirror)). Het patroon volgt wanneer u de grootte van het gat wijzigt.

## Wanneer gaten de verkeerde kant op gaan

- "Er is niets om op die kant van de schets te boren. Probeer de richting om te keren." De schets ligt aan de verre kant van het materiaal. Vink **Richting omkeren** aan.
- "Plaats schetspunten waar de gaten komen (hulpmiddel Punt), maak dan het gat." De schets heeft geen losse punten. Lijneinden en cirkelmiddelpunten tellen niet mee.
- "Er is nog niets om te boren." Een gat heeft een volume nodig. Maak eerst een uitsteeksel.

## Gaten in samenstellingen

Elk gat heeft een as. In een samenstelling kan **Centreren op** een verbinding op de as van een gat zetten, vermeld als "Gat1, gat 2", zodat een pen- of boutonderdeel erop uitlijnt. Zie [Een samenstelling bouwen](topic:build-assembly).

## Verzonken gaten

Zet **Type** op **Conische verzinking**, daarna **Verzinking ⌀** (aan het oppervlak) en **Verzinkingshoek**: 90° (ISO metrische zonkschroeven) of 82° (duimschroeven). Neem de diameter van de verzinking uit de gegevens van de schroevenfabrikant (iets groter dan de kop van de schroef). Het kegelvlak heet "verzinking" in de panelen.

## Gaten met schroefdraad

Zet **Type** op **Met schroefdraad (ISO metrisch)** en kies de **Schroefdraad**, M2 tot M24 grof. Het gat wordt geboord op de kernboormaat uit de tabel hieronder (nominale diameter minus steek, tot de boorreeks, zoals ISO 2306 die geeft voor een 6H-schroefdraad); het vak **Diameter (mm)** wordt niet gebruikt. Voor een blind gat stelt **Schroefdraaddiepte (mm)** in hoe diep de schroefdraad gaat.

| Schroefdraad | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Steek | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Kernboor ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

De schroefdraad is in eerste instantie **cosmetisch**: het model heeft het geboorde gat, het beeld tekent de hoofddiameter van de schroefdraad als gestippelde cirkels, en het tekenblad draagt de aanduiding als notitie, zoals "4× M8×1.25 - 6H, schroefdraad door". STEP exporteert alleen het geboorde gat.

Vink **Gemodelleerd** aan om de echte schroefspiraal in het gat te snijden, voor 3D-printen. **Speling (mm)** maakt het gat zoveel groter rondom, zodat een geprinte bout past: 0.1 tot 0.2 mm past bij de meeste printers. De aanduiding eindigt dan op "(gemodelleerd)". Zie [Schroefdraad op assen en boringen, getekend of gemodelleerd](topic:threads), die ook schroefdraad op assen zet.

:::note
Tegenboringen, schroefdraad in duim en pijpschroefdraad zijn nog niet beschikbaar.
:::
