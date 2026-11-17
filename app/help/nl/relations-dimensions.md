---
title: Een schets volledig vastleggen met relaties en maatvoeringen
summary: Relaties toevoegen vanuit het rechterpaneel en maatvoeringen met het gereedschap Maatvoering, de kleuren onderbepaald, volledig bepaald en overbepaald lezen, en een overbepaalde schets repareren.
keywords: relaties, beperkingen, maatvoering, slimme maatvoering, volledig bepaald, onderbepaald, overbepaald, vrijheidsgraden, samenvallend, horizontaal, verticaal, evenwijdig, loodrecht, raaklijn, gelijk, concentrisch, middelpunt, vastzetten, conflict, overbodig
from: e76d047a
---

Een schets is **volledig bepaald** wanneer elk punt en elke maat is vastgelegd door relaties en maatvoeringen. Een volledig bepaalde schets verandert alleen als u een getal wijzigt, zodat het onderdeel zich later voorspelbaar gedraagt als u het bewerkt. PartCraft dwingt u niet om een schets volledig te bepalen, maar het toont altijd hoe dicht u daarbij bent.

## De schetsstatus lezen

De status staat op drie plaatsen: het chipje linksboven in de weergave, de melding bovenaan het rechterpaneel, en de vlag in de geschiedenis.

| Status | Chipje | Kleur van de geometrie | Wat het betekent |
|---|---|---|---|
| Onderbepaald | "Onderbepaald · 3 vrijheidsgraden" | Blauw | Sommige geometrie kan nog bewegen. Sleep blauwe geometrie om te zien welke kant het op kan |
| Volledig bepaald | "Volledig bepaald" | Inkt (zwart op Papier, licht op Model) | Elk punt en elke maat is vastgelegd |
| Overbepaald | "Overbepaald" | Rood bij de betrokken relaties | Sommige relaties spreken elkaar tegen, of een is al impliciet door andere |

Hulpgeometrie is grijs en gestreept, ongeacht de status. Geselecteerde items zijn oranje. Een "vrijheidsgraad" is een manier waarop iets nog kan bewegen: een vrij punt heeft er twee (links-rechts en omhoog-omlaag), een vrije cirkel heeft er drie (zijn middelpunt en zijn straal).

De legenda onder de melding in het rechterpaneel herhaalt de kleuren.

## Een maatvoering toevoegen

1. Druk op {{key:D}} of kies {{ui:Maatvoering}}.
2. Klik op wat u wilt meten:
   - **één lijn**: de lengte ervan;
   - **één cirkel**: de diameter; **één boog**: de straal;
   - **twee punten** (een eindpunt, een middelpunt, een los punt of de oorsprong): de afstand ertussen;
   - **een punt en een lijn**: de afstand van het punt tot de lijn;
   - **twee evenwijdige lijnen**: de afstand ertussen; **twee lijnen onder een hoek**: de hoek ertussen.
3. Na het eerste item zegt de statusbalk "Klik op een tweede item, of klik waar de maatvoering moet komen." Klik op een tweede item, of klik in de lege ruimte waar u het getal wilt.
4. Er opent een getalvak met de huidige waarde. Typ de maat en druk op {{key:Enter}}. {{key:Esc}} houdt de gemeten waarde.

**Waar u het getal plaatst, bepaalt de soort** voor een schuine lijn of twee punten: plaats het boven of onder om een horizontale afstand te krijgen, links of rechts voor een verticale afstand, en elders voor de werkelijke (uitgelijnde) afstand.

Het vak accepteert gewone getallen in millimeters of graden, zoals `25`, `12.5` of `1e3`. Een voorafgaande `⌀`, `Ø` of `R`, of een achtervoegsel `mm` of `°`, wordt genegeerd. Hoeken zijn 0 tot 180 graden. Berekeningen zoals `20+5` worden niet geaccepteerd; om een maat aan een variabele of formule te koppelen, begint u met `=`.

Om een maat later te wijzigen, dubbelklikt u op het getal in de schets, of kiest u **Bewerken** ernaast in de lijst in het rechterpaneel.

:::tip
U kunt ook eerst geometrie selecteren (gereedschap Selecteren) en een maatknop kiezen in het rechterpaneel: {{ui:Afstand}}, {{ui:Horizontale afstand}}, {{ui:Verticale afstand}}, {{ui:Radius}}, {{ui:Diameter}} of {{ui:Hoek}}. Alleen de knoppen die bij de selectie passen, worden getoond. Zo geeft u een cirkel een straal in plaats van een diameter.
:::

## Een relatie toevoegen

Relaties worden toegevoegd vanuit het rechterpaneel, niet met een gereedschap.

1. Druk op {{key:S}} voor Selecteren.
2. Klik op één item, en daarna {{key:Shift}}+klik op een tweede als de relatie er twee nodig heeft. De oorsprong kan ook geselecteerd worden.
3. Het rechterpaneel zegt "Geselecteerd: lijn l3, punt p1" en toont een knop voor elke relatie die past, zoals {{ui:∥ Evenwijdig}} of {{ui:• Samenvallend}}.
4. Kies de knop. De schets wordt meteen opgelost.

Past geen enkele relatie, dan zegt het paneel: "Geen relatie past bij deze selectie. Selecteer één of twee items (Shift+klik voegt toe)."

De volledige lijst van relaties, wat elk nodig heeft en wat het doet, staat in [Schetsrelaties en maatvoering](topic:sketch-relations).

Relaties verschijnen in de schets als kleine symbolen naast de geometrie (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Samenvallende stippen zijn verborgen, tenzij de geometrie is geselecteerd of de relatie problemen heeft. Klik op een symbool om de relatie te selecteren.

## Een uitgewerkt voorbeeld: een L-vormig beugelprofiel

1. Schets op **Vooraanzichtvlak**. Start met het gereedschap Lijn op de oorsprong, klik op zes hoekpunten van een L, en eindig weer op de oorsprong. De keten eindigt vanzelf als u op het eerste punt klikt.
2. Lijnen die bijna horizontaal of verticaal zijn, hebben al H- en V-relaties, behalve de laatste: een lijn die op een bestaand punt eindigt, krijgt geen automatische relatie. Druk op {{key:S}}, klik op die laatste lijn en kies {{ui:V Verticaal}} in het rechterpaneel. Het chipje zegt "Onderbepaald · 4 vrijheidsgraden".
3. Druk op {{key:D}}. Klik op de onderste lijn, klik eronder, typ `80`, {{key:Enter}}.
4. Klik op de linker lijn, klik links ervan, typ `60`, {{key:Enter}}.
5. Geef de korte bovenlijn de maat `20` en de binnenste verticale lijn `45`, op dezelfde manier.
6. Het chipje zegt nu **Volledig bepaald** en de hele L wordt inkt.

## Een overbepaalde schets repareren

Wanneer een nieuwe relatie of maatvoering de andere tegenspreekt, verplaatst PartCraft niets. De geometrie blijft precies zoals ze was, de betrokken relaties worden rood, en de statusbalk noemt ze:

- "Overbepaald: Horizontaal, Afstand 40 kunnen niet allemaal worden voldaan. Maak ongedaan, of verwijder er één." De relaties spreken elkaar tegen.
- "Overbepaald: Evenwijdig is al impliciet. Verwijder het." De relatie voegt niets toe: de andere leggen het al vast. (De zijden van een rechthoek zijn bijvoorbeeld al evenwijdig.)

Om het te repareren:

1. Druk op {{key:Mod+Z}} om de laatste wijziging ongedaan te maken, of
2. Zoek het rode item in de lijst **Relaties en maatvoeringen** in het rechterpaneel (een groep die het bevat, is open en rood) en kies **Verwijderen** ernaast. U kunt ook op het symbool of getal in de schets klikken en op {{key:Delete}} drukken.

:::note
In deze versie zijn er geen "aangestuurde" (referentie)maten. Een maat die alleen een grootte zou tonen die de andere relaties al vastleggen, wordt als overbepaald behandeld. Lees maten in plaats daarvan in het paneel: selecteer een lijn en kijk naar de maatknoppen, of controleer de onderdeelgegevens nadat u hebt geëxtrudeerd.
:::

Een overbepaalde schets met een echt conflict laat de feature die hem gebruikt mislukken ("Overbepaald: 1 relatie kan niet allemaal worden voldaan."), en de geschiedenis markeert hem als **⚠ fout**. Een schets die alleen overbodig is, wordt nog steeds opgebouwd, met een ⚠ waarschuwing.

## Sleep om te vinden wat vrij is

Sleep in Selecteren een blauw punt of een blauwe lijn. De solver verplaatst het zo weinig mogelijk terwijl elke relatie behouden blijft. Zou een sleepactie een relatie breken, dan springt de geometrie terug. Dit is de snelste manier om te zien welke maat nog ontbreekt.

## De relatielijst

Zonder selectie toont het rechterpaneel **Relaties en maatvoeringen**. Elke rij heeft:

- **Bewerken** (alleen maatvoeringen): opent het getalvak;
- **Selecteren**: selecteert het in de schets;
- **Verwijderen**: verwijdert het.

Relaties van één soort die meer dan eens voorkomen, delen één rij, zoals "Samenvallend × 5" voor een rechthoek die aan de oorsprong is vastgezet. Klik op de rij om hem te openen: elke relatie staat vermeld met wat ze verbindt ("punt p2, punt p4"), met een eigen **Selecteren** en **Verwijderen**. De rij zelf heeft:

- **Selecteren**: selecteert ze allemaal in de schets;
- **Alles verwijderen**: verwijdert ze allemaal in één stap ({{key:Mod+Z}} brengt ze terug).

Een groep die een overbepaalde relatie bevat, opent zichzelf, met de naam in rood. Maatvoeringen worden altijd één per rij getoond, met hun waarden.

Met geometrie geselecteerd toont de lijst alleen de **Relaties op de selectie**.
