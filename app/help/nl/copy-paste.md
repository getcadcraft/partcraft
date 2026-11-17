---
title: Kopiëren, plakken en dupliceren
summary: Kopieer schetsgeometrie, features en samenstellingsonderdelen; plak waar u klikt of op dezelfde plaats; dupliceer in één stap; en wat er met een kopie meekomt en wat niet.
keywords: kopiëren, plakken, knippen, dupliceren, klembord, plakken op dezelfde plaats, alles selecteren, selectie opheffen, verwijderen, ctrl c, ctrl v, ctrl d, instantie, component, schets kopiëren, feature kopiëren, onderdeel kopiëren
from: 611307d7
---

De groep {{ui:Bewerken}} op de werkbalk bevat {{ui:Ongedaan maken}}, {{ui:Opnieuw}}, {{ui:Kopiëren}}, {{ui:Plakken}} en een menu {{ui:Meer}} met {{ui:Knippen}}, {{ui:Kopiëren}}, {{ui:Plakken}}, {{ui:Plakken op dezelfde plaats}}, {{ui:Dupliceren}}, {{ui:Verwijderen}}, {{ui:Alles selecteren}} en {{ui:Selectie opheffen}}, elk met zijn sneltoets. Wat ze kopiëren hangt af van waar u bent: geometrie in een geopende schets, een feature in de geschiedenis, of een onderdeel in een samenstelling.

Een grijs item kan op dit moment niets doen. Houd de aanwijzer erop: de tooltip zegt waarom, bijvoorbeeld "Selecteer eerst schetsgeometrie" of "Het klembord bevat Sketch2 en Extrude2: features worden in de geschiedenis geplakt, dus sluit eerst de schets af".

| Actie | Sneltoets | In een schets | In de geschiedenis | In een samenstelling |
|---|---|---|---|---|
| Kopiëren | {{key:Mod+C}} | De geselecteerde punten en curven | De geselecteerde schets, extrusie, omwenteling of gat (met zijn schets) | Het geselecteerde onderdeel |
| Knippen | {{key:Mod+X}} | Kopiëren, dan ze verwijderen | Kopiëren, dan de feature verwijderen | Kopiëren, dan het onderdeel verwijderen |
| Plakken | {{key:Mod+V}} | De kopie volgt de aanwijzer; klik waar hij heen moet | Voegt de kopie toe aan het einde van de geschiedenis | Een nieuwe kopie naast de andere onderdelen |
| Plakken op dezelfde plaats | {{key:Mod+Shift+V}} | Op dezelfde coördinaten | Zoals Plakken | Op dezelfde plaats als het gekopieerde onderdeel |
| Dupliceren | {{key:Mod+D}} | Kopiëren en verplaatsen in één keer; het klembord blijft ongemoeid | Een tweede kopie direct na de selectie | Een tweede kopie naast de andere onderdelen |
| Verwijderen | {{key:Delete}} | De selectie | De feature (vraagt als andere hem gebruiken) | Het onderdeel of de verbinding |
| Alles selecteren | {{key:Mod+A}} | Alles in de schets | Niet beschikbaar | Niet beschikbaar |
| Selectie opheffen | {{key:Esc}} | Wist de selectie | Wist de selectie en keuzes | Wist de selectie |

Elk plakken, dupliceren en knippen is één stap in de lijst voor ongedaan maken: {{key:Mod+Z}} neemt het terug, {{key:Mod+Y}} zet het terug.

## In een schets

1. Selecteer wat u wilt kopiëren: klik erop, {{key:Shift}}+klik voor meer, sleep een venster, of druk op {{key:Mod+A}} voor alles.
2. Druk op {{key:Mod+C}} of kies {{ui:Kopiëren}}. De statusbalk zegt wat er is gekopieerd.
3. Druk op {{key:Mod+V}} of kies {{ui:Plakken}}. Een gestippelde kopie volgt de aanwijzer, vastgehouden bij het midden. Hij snapt naar punten: zet het middelpunt van een gekopieerde cirkel op een punt door op dat punt te klikken.
4. Klik waar hij moet komen. De geplakte geometrie blijft geselecteerd, zodat u hem kunt slepen of er meteen relaties aan kunt toevoegen. {{key:Esc}} annuleert het plakken.

Wat meekomt:

- Een gekopieerde lijn, cirkel of boog neemt zijn eigen eindpunten en middelpunt mee.
- Relaties en maten **tussen gekopieerde items** komen mee: een gekopieerde rechthoek blijft een rechthoek, met zijn afmetingen.
- Relaties **naar geometrie die u niet hebt gekopieerd**, en naar de oorsprong, vervallen. De statusbalk telt ze: "2 relaties naar geometrie buiten de kopie komen niet mee". Een geplakte kopie kan dus vrij bewegen totdat u haar met relaties of maten vastlegt.
- Een vast punt blijft vast, op zijn nieuwe positie.

{{ui:Plakken op dezelfde plaats}} zet de kopie precies op de coördinaten van het origineel, in deze schets of in een andere: handig om een profiel van de ene schets in de andere te brengen. In dezelfde schets ligt de kopie bovenop het origineel; sleep hem weg.

{{ui:Dupliceren}} ({{key:Mod+D}}) kopieert de selectie en begint meteen met plaatsen, zonder aan wat op het klembord staat te komen.

:::tip
Om een middelpunt van een gat of een sleuf meerdere keren te herhalen, kopieert u het één keer en plakt u het meerdere keren: elke {{key:Mod+V}} start een nieuwe kopie die de aanwijzer volgt.
:::

## In de geschiedenis

1. Klik in de geschiedenis op een schets, een extrusie, een omwenteling of een gat.
2. {{key:Mod+C}} kopieert het. Een feature op basis van een schets wordt samen met zijn schets gekopieerd.
3. {{key:Mod+V}} voegt de kopie toe aan het einde van de geschiedenis (bij de terugrolbalk als u bent teruggerold), met nieuwe namen zoals Sketch3 en Extrude2.

De kopie ligt op hetzelfde vlak of hetzelfde oppervlak als het origineel, dus hij bouwt er bovenop en het onderdeel ziet er hetzelfde uit. Selecteer de nieuwe schets en wijzig zijn vlak in het rechterpaneel, of open hem en sleep of geef het profiel opnieuw een maat, om de kopie te verplaatsen.

- Plakken in een **ander onderdeel**: open dat onderdeel en druk op {{key:Mod+V}}. Als de schets van de kopie op een vlak lag dat dat onderdeel niet heeft, komt hij op het voorvlak, en de statusbalk meldt dat.
- {{ui:Dupliceren}} kopieert en plakt in één stap, binnen hetzelfde onderdeel.
- {{ui:Knippen}} kopieert de feature en verwijdert hem daarna (vraagt eerst als andere features hem gebruiken).

Patronen, spiegelingen, afrondingen, afschuiningen, uitholling en geïmporteerde volumes kunnen niet worden gekopieerd: ze hangen aan randen, vlakken of features die in dit onderdeel zijn gekozen. Kopieer in plaats daarvan de schets of de feature waarop ze zijn gebouwd, of maak er een patroon van met {{ui:Lineair}} of {{ui:Cirkelvormig}}.

## In een samenstelling

1. Klik op een onderdeel in de weergave of in de lijst links.
2. Kies {{ui:Dupliceren}} ({{key:Mod+D}}), of {{key:Mod+C}} en daarna {{key:Mod+V}}.

De nieuwe kopie is hetzelfde **onderdeel**: bewerkt u er één, dan verandert elke kopie mee. Ze verschijnt 20 mm rechts van alles wat al in de samenstelling staat, op dezelfde manier gedraaid als het gekopieerde onderdeel, en blijft daar tot een verbinding haar plaatst. {{ui:Plakken op dezelfde plaats}} ({{key:Mod+Shift+V}}) zet haar precies waar het gekopieerde onderdeel staat; verbind haar om haar te verplaatsen (de offset van een schuifverbinding duwt haar langs).

Een onderdeel plakken dat uit een andere samenstelling is gekopieerd, neemt het onderdeel mee, net als {{ui:Invoegen}} uit zijn bestand. {{ui:Kopie toevoegen}} in de groep Samenstelling doet hetzelfde als {{ui:Dupliceren}}, en werkt ook zonder selectie (het kopieert het laatste onderdeel).

## Het klembord

- Het is het eigen klembord van PartCraft, niet dat van de computer: u kunt PartCraft-geometrie niet in een ander programma plakken, of tekst in de weergaven van PartCraft.
- Het wordt in deze browser bewaard, zodat een ander PartCraft-tabblad kan plakken wat u kopieerde. Het wordt teruggelezen en gecontroleerd zoals een geopend bestand; alles wat beschadigd is of van een andere versie komt, wordt geweigerd.
- Een onderdeel met een groot geïmporteerd STEP-bestand is misschien te groot om de browser te bewaren: het plakt dan alleen in dit tabblad.
- In een getalveld of de helpzoekfunctie kopiëren en plakken {{key:Mod+C}} en {{key:Mod+V}} tekst zoals gewoonlijk.

Op het tekenblad zijn kopiëren en plakken nog niet beschikbaar; {{ui:Verwijderen}} en {{ui:Selectie opheffen}} werken op het geselecteerde symbool. Zie [Nog niet beschikbaar](topic:not-built-yet).
