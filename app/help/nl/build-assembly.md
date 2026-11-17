---
title: Een samenstelling bouwen met verbindingen
summary: Start een samenstelling vanuit een onderdeel, voeg kopieën en andere onderdeelbestanden in, verbind ze met stijve, scharnierende, schuivende, cilindrische, vlakke, kogel- en pen-in-sleufverbindingen op vlakke vlakken, centreer verbindingen op assen, bewerk een onderdeel ter plaatse en sla de samenstelling op.
keywords: samenstelling, koppeling, koppelingen, verbinding, lus, gesloten lus, koppelmechanisme, mechanisme, viergewricht, stijf, scharnier, schuif, cilindrisch, vlak, kogel, bolvormig, pen in sleuf, component invoegen, vast, concentrisch, samenvallend, onderdeel bewerken, in context, partcraft-asm
from: a53bbfef
---

Een samenstelling zet onderdelen samen. In PartCraft plaatsen **verbindingen** de onderdelen: elke verbinding zit op een plat vlak van elk van twee onderdelen en zet ze vlak tegen vlak. Een scharnierende verbinding laat één onderdeel draaien, een schuifverbinding laat het schuiven, een stijve verbinding houdt het vast.

## Een samenstelling starten

1. Bouw een onderdeel met een volume (een leeg onderdeel kan niet in een samenstelling: "Bouw eerst een volume en zet het daarna in een samenstelling.").
2. Kies {{ui:Samenstelling}} op de werkbalk.

De statusbalk meldt: "Samenstelling gestart met Part1 als vast onderdeel. Voeg meer onderdelen toe (Kopie toevoegen, Invoegen of Bewerken › Dupliceren), en verbind ze daarna." Het linkerpaneel toont nu **Onderdelen** en **Verbindingen**, en de werkbalk toont de samenstellingshulpmiddelen. De schets- en featurehulpmiddelen verbergen zich.

Het eerste onderdeel is **vast**: het beweegt nooit, en al het andere wordt ten opzichte ervan geplaatst.

## Onderdelen invoegen

- {{ui:Kopie toevoegen}} voegt nog een kopie in van het geselecteerde onderdeel (of van het laatste). Kopieën delen één onderdeel: bewerkt u het, dan verandert elke kopie mee.
- {{ui:Dupliceren}} ({{key:Mod+D}}) in de groep Bewerken doet hetzelfde voor het geselecteerde onderdeel. {{key:Mod+C}} en {{key:Mod+V}} kopiëren een onderdeel en plakken het naast de andere, in deze samenstelling of in een andere; {{key:Mod+Shift+V}} plakt het op dezelfde plaats. Zie [Kopiëren, plakken en dupliceren](topic:copy-paste).
- {{ui:Invoegen}} voegt een onderdeel in uit een `.partcraft.json`-bestand op uw computer. Het onderdeel wordt in de samenstelling gekopieerd.

Nieuwe onderdelen verschijnen 20 mm rechts van alles wat er al staat, en blijven daar tot een verbinding ze plaatst. Een onderdeel zonder verbinding kan ook met de hand worden verplaatst: getypte waarden of pijlen die u sleept (zie [Onderdelenlijst, explosieweergaven en bewegende onderdelen](topic:assembly-bom-explode)).

## Twee onderdelen verbinden

1. Kies {{ui:Verbinding}} of druk op {{key:J}}. Het rechterpaneel toont **Nieuwe verbinding**.
2. Klik op een plat vlak van het eerste onderdeel. Het wordt gemarkeerd.
3. Klik op een plat vlak van het tweede onderdeel.

Het tweede onderdeel springt zodat zijn vlak tegen het vlak van het eerste ligt, er tegenover. De verbinding verschijnt onder **Verbindingen**, bijvoorbeeld "Revolute1", en het rechterpaneel toont de instellingen.

- Als beide vlakken door omwentelingen zijn gemaakt, begint de verbinding als **scharnierend**; anders als **stijf**. Wijzig het daarna.
- Gekromde vlakken kunnen niet worden gekozen: "Dat vlak is gekromd. Kies een plat vlak (om rond een gat of de as van een omwenteling te draaien, kiest u die achteraf in de verbinding)."
- {{key:Esc}} annuleert een verbinding die u bent begonnen (of klik een onderdeel aan in de lijst links).

### Instellingen van de verbinding

| Instelling | Wat het doet |
|---|---|
| **Type** | Een van de verbindingen in de tabel hieronder |
| **Hoek (°)** | Draait het tweede onderdeel om de as van de verbinding (haaks op de vlakken) |
| **Offset (mm)** | Verplaatst het tweede onderdeel langs de as, weg van het vlak (negatieve waarden duwen erin) |
| **Langs X**, **Langs Y**, **Kantelen om X**, **Kantelen om Y**, **Langs de sleuf**, **Richting sleuf** | De overige waarden, getoond bij de verbindingen die ze gebruiken |
| **Centreer op** (per kant) | Waar de as van de verbinding het vlak kruist: "De eigen oorsprong van het vlak", de as van een omwenteling ("Axis of Revolve1") of de as van één gat ("Hole1, hole 2") |

Elke waarde die een verbinding laat bewegen heeft onder het veld een schuifregelaar om te slepen. De andere worden één keer ingesteld.

| Verbinding | Wat beweegt | Eenmalig instellen |
|---|---|---|
| **Stijf** | niets | Hoek, Offset |
| **Scharnierend** | Hoek (een scharnier) | Offset |
| **Schuivend** | Offset (een lade) | Hoek |
| **Cilindrisch** | Hoek en Offset (een as in een glijlager) | |
| **Vlak** | Langs X, Langs Y over het vlak, en Hoek (een onderdeel dat over een tafel schuift) | |
| **Kogel** | Hoek (draaiing) en Kantelen om X en Y, om het middelpunt van de verbinding (een kogelgewricht) | |
| **Pen in sleuf** | Langs de sleuf en Hoek (een pen in een rechte sleuf) | Richting sleuf: de hoek van de sleuf vanaf de X van het vlak |

De X en Y van een vlak zijn die van het vlak van het eerste onderdeel; het middelpunt van de verbinding wordt ingesteld met **Centreer op**.

"De eigen oorsprong van het vlak" is de oorsprong van het onderdeel geprojecteerd op het vlak; vaak is dat niet waar u de onderdelen wilt uitlijnen. Stel voor ronde onderdelen en pennen **Centreer op** in op de as van de omwenteling of het gat, aan beide kanten: de assen lijnen dan uit, zoals een concentrische koppeling.

### Voorbeeld: twee flenzen vlak tegen vlak met bouten verbonden

1. Open het flensonderdeel (een omwenteling met een cirkelvormig patroon van gaten) en kies {{ui:Samenstelling}}.
2. Kies {{ui:Kopie toevoegen}}.
3. Druk op {{key:J}}, klik op het platte vlak van de schijf van de eerste flens (het vlak waar de boutgaten beginnen), en daarna op hetzelfde vlak van de tweede flens. De vlakken zijn door de omwenteling gemaakt, dus de verbinding is scharnierend.
4. Stel **Centreer op** in op "Axis of Revolve1" aan beide kanten. De flenzen delen nu een as.
5. Typ `22.5` bij **Hoek (°)** om de boutgaten uit te lijnen, of sleep de schuifregelaar.

## Gesloten lussen: koppelmechanismen

Onderdelen die in een ring zijn verbonden (een viergewrichtmechanisme, een kruk en schuif, een frame dat aan beide kanten is verstevigd) vormen een **lus**. PartCraft lost elke lus zo op dat hij sluit: de verbindingen erin nemen de waarden aan die de ring sluiten, en bewegen zo weinig mogelijk vanaf waar ze stonden.

- **Stel in of sleep** een waarde van een verbinding in een lus, en de rest van de lus volgt. Bij een viergewrichtmechanisme sleept u de **Hoek** van de kruk, en de koppelstang en de schommelarm bewegen mee. De waarde die u instelt blijft behouden; de andere worden daaruit berekend.
- In de lijst is een verbinding in een lus die nog kan bewegen **blauw**: er kan nog een andere waarde worden ingesteld. Een lus die niet kan bewegen (een verstevigd frame) blijft zwart. Een lus die niet kan sluiten is **rood**.
- Het vak **Onderdeel** toont **Lussen**: hoeveel gesloten zijn en hoeveel waarden nog kunnen bewegen, bijvoorbeeld "1 gesloten; 1 waarde kan nog bewegen".
- {{ui:Controleer de beweging op botsingen}} doorloopt een verbinding in een lus, stap voor stap, met de lus die meebeweegt (zie [Een samenstelling controleren op botsingen en beweging](topic:check-assembly)).

Een vlak koppelmechanisme dat is opgebouwd uit platte staven moet in diepte kloppen: twee onderdelen die vlak tegen vlak aan beide kanten van een ring zijn verbonden, hebben in beide richtingen dezelfde stapelhoogte nodig. Gebruik de **Offset** van een verbinding om een onderdeel op te tillen waar de stapel niet optelt, anders kan de lus niet sluiten.

## Met de onderdelen werken

Klik op een onderdeel in de weergave of in de lijst om het te selecteren. Het rechterpaneel toont de naam van het onderdeel, hoeveel kopieën er zijn, het volume, de verbindingen, en of het vast is, door zijn verbindingen is vastgezet, of "Niet verbonden: blijft waar het is geplaatst". Knoppen:

- {{ui:Dit onderdeel bewerken}} (of {{ui:Onderdeel bewerken}} op de werkbalk, of dubbelklik het onderdeel in de lijst): opent het onderdeel om te bewerken;
- {{ui:Een kopie invoegen}};
- {{ui:Maak het het vaste onderdeel}};
- {{ui:Verwijderen}}: verwijdert ook de verbindingen, na een vraag.

Een samenstelling bevat altijd minstens één onderdeel. Sluit de samenstelling in plaats daarvan.

### Een onderdeel ter plaatse bewerken

1. Selecteer een onderdeel en kies {{ui:Onderdeel bewerken}}. Het onderdeel opent met zijn geschiedenis; de kop zegt "Bracket (in Bracket assembly)".
2. Wijzig het zoals elk ander onderdeel.
3. Kies {{ui:Terug}} op de werkbalk. De samenstelling wordt bijgewerkt: elke kopie van dat onderdeel verandert mee, en verbindingen op vlakken die door schetsranden zijn gemaakt, volgen.

Het terugbrengen van de wijziging is één stap in de lijst voor ongedaan maken van de samenstelling.

## Ongedaan maken, opslaan en sluiten

- De samenstelling heeft een eigen lijst voor ongedaan maken: {{key:Mod+Z}} en {{key:Mod+Y}} werken op verbindingen, invoegingen en instellingen.
- {{ui:Opslaan}} of {{key:Mod+S}} downloadt `<naam samenstelling>.partcraft-asm.json`, met elk onderdeel erin. Open het later met {{ui:Openen}}.
- {{ui:Sluiten}} sluit de samenstelling en keert terug naar het onderdeel waarmee u begon. Als de samenstelling niet is opgeslagen, vraagt het: {{ui:Annuleren}}, {{ui:De samenstelling weggooien}} of {{ui:Eerst opslaan}}.
- Om de samenstelling te hernoemen, klikt u op lege ruimte zodat niets is geselecteerd, en wijzigt u **Naam** in het rechterpaneel.

## Grote samenstellingen

Een samenstelling kan duizenden kopieën van enkele onderdelen bevatten. Kopieën van één onderdeel worden samen getekend, een verbinding die u draait plaatst alleen de onderdelen erachter, en de onderdeellijst toont de eerste rijen met een knop "Meer tonen" eronder (het geselecteerde onderdeel staat altijd in de lijst).

- Terwijl u de weergave draait of zoomt, wordt een samenstelling van meer dan ongeveer 300.000 driehoeken getekend als één doos per onderdeel, en daarna, kort na het stoppen, volledig.
- {{ui:Weergaven}} › {{ui:Lichtgewicht weergave}} houdt de dozen altijd aan. Het kiezen van onderdelen en verbindingen gebruikt nog steeds de echte onderdelen.
- Hoe snel het draait hangt ook af van uw videokaart. De metingen van PartCraft staan in de releasenotities, met de computer waarmee ze zijn gedaan.

## Problemen met verbindingen

- Een onderdeel dat geen verbinding bereikt, staat als **vrij** in de lijst, en het paneel zegt: "Bracket2 is niet verbonden met het vaste onderdeel en blijft dus waar het is geplaatst."
- Een lus die niet kan sluiten (de lengtes reiken niet, een grens houdt een verbinding tegen, de vlakken kloppen niet in diepte): "Revolute3 hoort bij een lus die niet kan sluiten: hij staat 2.000 mm ernaast. Controleer de vlakken, offsets en grenzen van de verbindingen in de lus." De verbindingen worden rood.
- Als een vlak of as die een verbinding gebruikt verdwijnt na het bewerken van een onderdeel: "Het vlak dat deze verbinding gebruikt, is uit Bracket verdwenen." Verwijder de verbinding en maak haar opnieuw.

Volgende: [Een samenstelling controleren op botsingen en beweging](topic:check-assembly).
