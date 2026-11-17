---
title: Patroon- en spiegelkenmerken
summary: Herhaal kenmerken op een rij met Lineair, rond een as met Cirkelvormig, en kopieer kenmerken of het hele lichaam over een vlak met Spiegelen.
keywords: patroon, lineair patroon, cirkelvormig patroon, polaire array, array, spiegelen, symmetrisch, kenmerken kopiëren, boutencirkel, bronkenmerk, lichaam spiegelen
from: 702e9edb
---

Patronen en spiegelingen kopiëren kenmerken die u al hebt gemaakt. De kopieën maken deel uit van de historie: wijzigt u het origineel, dan volgen de kopieën.

Wat gekopieerd wordt, is wat het kenmerk doet: een boss-patroon voegt materiaal toe, een patroon van een uitsnijding of gat verwijdert het. Patronen kunnen opnieuw worden gepatroneerd en gespiegeld. Een geïmporteerd STEP-volume kan ook worden gekopieerd; afrondingen, afschuiningen en shells kunnen dat niet.

## Lineair patroon

1. Selecteer het kenmerk dat u wilt kopiëren in de historie (bijvoorbeeld een gat of een uitsnijding). Als niets is geselecteerd, wordt het laatste volumekenmerk gebruikt.
2. Kies {{ui:Lineair}}. Drie kopieën verschijnen op 20 mm van elkaar langs X.
3. Stel in het rechterpaneel in:

| Instelling | Wat het doet | Standaard |
|---|---|---|
| **Kenmerken om te kopiëren** | Vink elk kenmerk aan dat u wilt kopiëren. Alleen kenmerken boven het patroon staan in de lijst | Het geselecteerde kenmerk |
| **Richting** | X-as, Y-as, Z-as, een lijn of hartlijn uit een eerdere schets, de as van een omwenteling, of een gekozen rand | X-as |
| **Afstand (mm)** | Afstand tussen buren | 20 |
| **Aantal** | Totaal aantal, **inclusief het origineel** (1 tot 1000) | 3 |
| **Richting omkeren** | Kopieën gaan de andere kant op | Uit |

### Een rand als richting gebruiken

1. Klik in het aanzicht op een rechte rand van het onderdeel. Het rechterpaneel zegt **Rand** en toont de lengte.
2. Kies {{ui:Lineair}}: het patroon loopt langs die rand.

Of selecteer het patroon, kies een rand en kies "Gekozen rand (gebruik de nu gekozen)" bij **Richting**. Een gekozen rand is vast in de ruimte: hij volgt latere wijzigingen niet. Een schetslijn volgt zijn schets.

## Cirkelvormig patroon

1. Selecteer het kenmerk dat u wilt kopiëren (bijvoorbeeld één gat dicht bij de rand van een schijf).
2. Kies {{ui:Cirkelvormig}}. Zes kopieën verschijnen, gelijkmatig verdeeld over de hele cirkel.
3. Stel in:

| Instelling | Wat het doet | Standaard |
|---|---|---|
| **Kenmerken om te kopiëren** | Zoals bij Lineair | Het geselecteerde kenmerk |
| **As** | X-, Y- of Z-as, een schetslijn, de as van een omwenteling, of een gekozen rand | De as van de laatste omwenteling als die er is, anders de Y-as |
| **Hoek (°)** | 360 verdeelt de kopieën gelijkmatig rondom. Minder spreidt ze over die hoek, de eerste en laatste aan de uiteinden | 360 |
| **Aantal** | Totaal aantal, inclusief het origineel | 6 |
| **Richting omkeren** | Draait de andere kant op | Uit |

De wereldassen gaan door de oorsprong. Voor een schijf die niet in de oorsprong is gecentreerd, gebruikt u een hartlijn uit een schets of de as van een omwenteling.

### Voorbeeld: de acht boutgaten van een flens

1. Draai de flens om (zie [Een gedraaid onderdeel omwentelen](topic:revolve)) om de Y-as.
2. Schets op het platte bovenvlak van de flens, zet één punt op de boutencirkel en maak een gat.
3. Kies met het gat geselecteerd {{ui:Cirkelvormig}}. De as is al "As van Revolve1".
4. Zet **Aantal** op `8`.

## Spiegelen

1. Selecteer het kenmerk dat u wilt spiegelen in de historie, of selecteer niets om **het hele lichaam zoals het tot nu toe is gebouwd** te spiegelen.
2. Kies {{ui:Spiegelen}}. Het spiegelt over het **Rechtervlak**.

Om het hele lichaam in plaats daarvan over een vlak van het onderdeel te spiegelen, klikt u eerst op dat platte vlak en kiest u daarna {{ui:Spiegelen}}. (Een klik op een vlak wist de selectie in de historie, dus dit spiegelt altijd het hele lichaam.)

Instellingen in het rechterpaneel:

- **Spiegelen**: vink **Het hele lichaam (zoals tot nu toe gebouwd)** aan, of haal het vinkje weg en vink de te kopiëren kenmerken aan.
- **Spiegelvlak**: Voorvlak, Bovenvlak, Rechtervlak, het vlak dat het nu gebruikt ("Een vlak van Extrude1" of "Een vast vlak"), of "Het nu gekozen vlak". Om gekozen kenmerken over een vlak te spiegelen: selecteer de spiegeling in de historie, klik op het vlak in het aanzicht en kies "Het nu gekozen vlak".

Het hele lichaam over een vlak spiegelen verdubbelt het onderdeel, bijvoorbeeld een halve beugel wordt een volledige.

## Meldingen

- "Bouw eerst een kenmerk om te kopiëren." of "Bouw eerst een volume." Er is nog niets massiefs om te kopiëren.
- "Kies de kenmerken om te kopiëren." Elk vak **Kenmerken om te kopiëren** is leeg.
- "Extrude2 heeft geen volume om te kopiëren." Dat kenmerk is mislukt of onderdrukt.
- "Fillet1 wijzigt de randen of wanden van het lichaam; het kan niet worden gekopieerd. Kopieer de kenmerken die volumes maken (extrusies, omwentelingen, gaten, imports)." Afrondingen, afschuiningen en shells kunnen niet worden gepatroneerd of gespiegeld; maak eerst het patroon, dan de afronding.
- "Er is nog geen lichaam om te spiegelen."

:::note
Kopieën in een patroon kunnen niet een voor een worden overgeslagen, en een patroon kan niet een schetskromme volgen. Schetspatronen en spiegelingen zijn ook nog niet beschikbaar: teken herhaalde schetsgeometrie met de hand of met **Toevoegen op coördinaten**.
:::
