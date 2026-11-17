---
title: Afronden, afschuinen en uithollen met Afronden, Afschuinen en Uitholling
summary: Kies randen en voeg afrondingen toe met een vaste of variabele straal, en gelijke, twee-afstands- of afstand-hoek-afschuiningen; hol een onderdeel uit met Uitholling door de vlakken te kiezen die open moeten; wijzig welke randen of vlakken een feature gebruikt, en los de gebruikelijke fouten op.
keywords: afronden, ronden, mengen, afschuinen, afschuining, uitholling, uithollen, wanddikte, randen, vlakken, randen kiezen, shift-klik, open vlak, exacte kernel, meshkernel, niet beschikbaar
from: e41c1c12
---

:::note
**In deze versie** bouwt PartCraft afrondingen en afschuiningen met de meshkernel, alleen op **rechte randen tussen twee platte vlakken**: randen van een doos en de rechte randen van extrusies en snedes, buiten- of binnenhoeken (een binnenhoek krijgt materiaal toegevoegd). Ronde randen zoals gatranden, en een straal die langs de rand verandert, zijn nog niet beschikbaar. Waar twee ronde randen in een hoek samenkomen, worden de afrondingen in verstek gezet (ze komen samen in een scherpe naad), niet vloeiend verbonden. **Uitholling** werkt ook, gebouwd door de meshkernel: het opent alleen platte vlakken, uitholling met wanden van verschillende diktes is nog niet beschikbaar, en het is traag op onderdelen met veel ronde vlakken. Zie [Wat nog niet beschikbaar is](topic:not-built-yet).
:::

{{ui:Afronden}} rondt randen af, {{ui:Afschuinen}} schuint ze af en {{ui:Uitholling}} holt het onderdeel uit. Alle drie werken op de randen en vlakken van het volume en worden door de meshkernel gebouwd. Hun ronde delen zijn gefacetteerd zoals elk rond vlak (**Rondingen** bepaalt hoe fijn); de ronde vlakken zijn cilinders die u kunt kiezen en meten (zie [De meshkernel](topic:solid-kernels)).

## Randen afronden of afschuinen

### Kies eerst de randen

1. Klik op een rand van het onderdeel. De hele rand licht op, en het rechterpaneel toont **Rand**: de soort (Recht, Cirkel of boog, Curve), de lengte en de vlakken waartussen hij ligt.
2. Om meer randen toe te voegen, {{key:Shift}}+klikt u erop. Elk wordt gemarkeerd; {{key:Shift}}+klik op een gemarkeerde rand om hem te laten vallen. De paneelkop telt ze ("4 randen") en de statusbalk zegt "4 randen gekozen. Afronden of Afschuinen rondt ze af; Shift+klik kiest er meer, Esc wist."
3. Kies {{ui:Afronden}} of {{ui:Afschuinen}} in de werkbalk, of dezelfde knoppen in het rechterpaneel.

De feature wordt toegevoegd met alle gekozen randen: een ronding van 2 mm, of een afschuining van 1 mm. De statusbalk zegt bijvoorbeeld "Fillet1 toegevoegd (4 randen). Wijzig de maat rechts; Randen kiezen wijzigt welke."

### Of voeg eerst de feature toe

1. Kies, zonder iets te kiezen, {{ui:Afronden}} of {{ui:Afschuinen}}.
2. PartCraft gaat naar kiezen: de paneelkop van het rechterpaneel zegt "Fillet1: kiezen", het onderdeel wordt getoond zoals het was vóór de afronding (het paneel zegt dat), en de werkbalk toont {{ui:Gereed}}.
3. Klik op elke rand om hem toe te voegen; klik er nogmaals op om hem te laten vallen. De statusbalk telt ze.
4. Kies {{ui:Gereed}} (of {{ui:Kiezen gereed}} in het paneel), of druk op {{key:Esc}} of {{key:Enter}}.

### Instellingen

| Instelling | Afronden | Afschuinen |
|---|---|---|
| Maat | **Straal (mm)**, standaard 2 | **Afstand (mm)** terug van de rand op beide vlakken, standaard 1 |
| **Randen** | Hoeveel | Hoeveel |

De lijst hieronder noemt elke rand bij de twee vlakken die hij verbindt, zoals "Rand 1: Extrude1 eindvlak × Extrude1 zijvlak". **Verwijderen** laat er één vallen. {{ui:Randen kiezen}} gaat terug naar kiezen. Dubbelklikken op de feature in de geschiedenis doet hetzelfde.

Randen worden onthouden via de twee vlakken die ze verbinden, zodat ze op de juiste rand blijven wanneer u eerder in de geschiedenis een maat wijzigt.

### Afrondingen met variabele straal en afschuiningtypen

- **Variabele straal** (afronding): nog niet beschikbaar in deze versie ("Een afronding waarvan de straal langs de rand verandert: nog niet beschikbaar (het heeft een exacte kernel nodig). Geef er één straal aan."). Met een exacte kernel: vink het aan en stel **Eindstraal (mm)** in. De straal verandert lineair van **Straal** aan het ene einde van elke rand naar **Eindstraal** aan het andere; **Einden omwisselen** draait het om.
- **Type** (afschuining): **Gelijke afstand**, **Twee afstanden** (een **Tweede afstand** op het andere vlak) of **Afstand en hoek** (de afstand op één vlak, de schuine kant onder **Hoek (°)** ten opzichte van dat vlak). **Zijden omwisselen** zet de eerste afstand op het andere vlak.

## Een onderdeel uithollen

1. Klik op het platte vlak dat open moet blijven, bijvoorbeeld de bovenkant van een doos. Of {{key:Shift}}+klik meerdere vlakken.
2. Kies {{ui:Uitholling}} in de werkbalk, of {{ui:Uitholling, dit vlak open}} in het paneel van het vlak.

Het onderdeel wordt een wand van 2 mm met de gekozen vlakken open. Instellingen:

| Instelling | Wat het doet | Standaard |
|---|---|---|
| **Wand (mm)** | De wanddikte | 2 |
| **Wanden groeien naar buiten (de vlakken blijven binnen)** | Aangevinkt: de wanden worden aan de buitenkant toegevoegd, zodat de binnenkant de maat van het onderdeel houdt | Uit: de wanden gaan naar binnen en de buitenkant houdt zijn maat |
| **Open vlakken** | Hoeveel vlakken worden verwijderd | (leeg) |

Naar binnen zijn de wanden precies de wanddikte: buitenhoeken blijven scherp, binnenhoeken worden rond (straal = de wand), en een gat door het onderdeel krijgt een buis van wand eromheen. Naar buiten worden de wanden aan de buitenkant van het oorspronkelijke oppervlak toegevoegd, dat de holte wordt, en de buitenranden worden rond. De binnenvlakken worden genoemd naar de vlakken die ze verschuiven, zodat u ze kunt kiezen.

Alleen platte vlakken kunnen worden geopend: een gebogen vlak kiezen geeft "Uitholling: in deze versie worden alleen platte vlakken geopend (de meshkernel bouwt ze)." Uitholling is traag op onderdelen met veel ronde vlakken (enkele seconden per duizend driehoeken): gebruik een grovere instelling **Rondingen** terwijl u ontwerpt.

{{ui:Vlakken kiezen}} wijzigt welke vlakken open zijn, op dezelfde manier als randen kiezen. De lijst noemt elk, zoals "Vlak 1: Extrude1 eindvlak". Een uitholling zonder open vlakken is niet toegestaan: "Kies de vlakken om te verwijderen (open), en hol dan uit."

## Volgorde is belangrijk

Features worden van boven naar beneden opgebouwd. Een afronding vóór een uitholling wordt met het onderdeel uitgehold, zodat de binnenkant ook afgeronde hoeken krijgt. Een afronding na een uitholling rondt alleen de randen af die u kiest. Verplaats features met {{ui:Omhoog verplaatsen}} en {{ui:Omlaag verplaatsen}} (zie [Een onderdeel wijzigen via de geschiedenis](topic:edit-history)).

Patronen en spiegelingen kunnen geen afronding, afschuining of uitholling kopiëren: "Fillet1 wijzigt de randen of wanden van het lichaam; het kan niet worden gekopieerd. Kopieer de features die volumes maken (extrusies, omwentelingen, gaten, imports)." Maak eerst het patroon van de gaten of snedes, en rond dan alle randen van de kopieën in één afronding af.

## Wanneer het mislukt

| Melding | Wat te doen |
|---|---|
| "Een ronding van 5 mm past hier niet (ze is te groot voor een vlak naast een van de randen, of de randen komen samen in een hoek die de kernel niet kan mengen)." | Gebruik een kleinere straal, of rond minder randen tegelijk af (meerdere afrondingsfeatures, de kleinste als laatste) |
| "Een rand die het afrondt is verdwenen: de rand tussen Extrude1 en Cut2." | Een eerdere wijziging heeft die rand verwijderd. Kies {{ui:Randen kiezen}}, verwijder de rode rand en kies de nieuwe |
| "De uitholling kon niet met deze dikte worden gemaakt (…)." | De wand is dikker dan een smal deel van het model, of dan de straal van een afronding. Maak de wand dunner, of de afrondingen groter dan de wand |
| "Dat vlak heeft geen naam die de geschiedenis kan volgen; kies een ander." | Kies een vlak dat door een feature is gemaakt (de meeste vlakken zijn dat) |
| "Afronden: in deze versie alleen rechte randen tussen twee platte vlakken (de meshkernel bouwt ze). Rond gebogen randen in de schets af, of schuin ze af." (ook Afschuinen) | Een gekozen rand is rond, zoals een gatrand, of ligt op een gebogen vlak. Verwijder hem met {{ui:Randen kiezen}}, en rond die hoek in de schets af of schuin hem af |
| "Een afronding waarvan de straal langs de rand verandert: nog niet beschikbaar (het heeft een exacte kernel nodig). Geef er één straal aan." | Vink **Variabele straal** uit |
| "Afronden door de meshkernel: waar ronde randen samenkomen, worden ze in verstek gezet, niet vloeiend verbonden." (⚠ in de geschiedenis) | Een waarschuwing, geen fout: het onderdeel is gebouwd. De gekozen randen komen samen in een hoek, en de afrondingen komen daar samen in een scherpe naad. Rond minder randen af, of accepteer de naad |
| "Uitholling: in deze versie worden alleen platte vlakken geopend (de meshkernel bouwt ze)." | Een open vlak is gebogen. Gebruik {{ui:Vlakken kiezen}} en verwijder het; open alleen platte vlakken |

## Beperkingen

In deze versie werken afrondingen en afschuiningen alleen op rechte randen tussen twee platte vlakken, met één straal, en afrondingen die in een hoek samenkomen worden in verstek gezet. Uitholling opent alleen platte vlakken. Met een exacte kernel verandert een afronding met variabele straal lineair langs elke rand (één wet per feature; geen straal die op punten langs de rand wordt vastgelegd). Vlakafrondingen, volledig ronde afrondingen en uitholling met wanden van verschillende diktes zijn nog niet beschikbaar.
