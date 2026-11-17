---
title: Een boss extruderen en er doorheen snijden
summary: Maak van een schets een volume met Extruderen, stel blinde, middenvlak-, tot- of tweerichtingsdiepte in, een helling, of één contour van de schets, en schets dan op een vlak en Knip een holte of een doorlopende sleuf.
keywords: extruderen, boss, geëxtrudeerde boss, snijden, geëxtrudeerde snede, holte, helemaal door, blind, middenvlak, omkeren, diepte, snijden-extruderen, boss-extruderen, pad, tot vlak, tot volgend vlak, tot hoekpunt, offset van vlak, richting 2, twee richtingen, helling tijdens extruderen, taper, contour, regio, geselecteerde contouren
from: 3b13ff10
---

{{ui:Extruderen}} duwt het gesloten profiel van een schets recht uit zijn vlak om materiaal te maken. {{ui:Knippen}} doet hetzelfde maar verwijdert materiaal. Beide zijn in de kern dezelfde feature; u kunt er later de ene in de andere omzetten.

## Een boss extruderen

1. Teken een gesloten profiel en sluit de schets (zie [Uw eerste schets tekenen](topic:sketch-basics)). Hij blijft geselecteerd.
2. Kies {{ui:Extruderen}}.

Er verschijnt een volume van 10 mm, "Extrude1" komt in de geschiedenis met de schets er onder ingesprongen, en de statusbalk zegt "Extrude1 toegevoegd. Wijzig de getallen rechts."

**Welke schets wordt gebruikt:** de schets die u net hebt gesloten, of de schets die in de geschiedenis is geselecteerd. Als niets is geselecteerd, neemt PartCraft de meest recente schets die nog door geen feature wordt gebruikt. Als er geen is: "Maak eerst een schets: kies een vlak, Schets, teken een gesloten profiel, Afsluiten."

### De diepte en richting instellen

In het rechterpaneel:

| Instelling | Keuzes | Standaard |
|---|---|---|
| **Bewerking** | Boss (materiaal toevoegen), Knippen (materiaal verwijderen), Doorsnede (de overlap behouden), Nieuw lichaam (nog niet beschikbaar in deze versie: het heeft een exacte kernel nodig) | Boss |
| **Einde** | Blind (een diepte), Middenvlak (beide kanten), Helemaal door, Tot vlak of referentievlak, Tot volgend vlak, Tot hoekpunt, Offset vanaf vlak | Blind |
| **Diepte (mm)** | Elke maat boven nul (getoond bij Blind en Middenvlak) | 10 |
| **Richting omkeren** | Groeit naar de andere kant van het schetsvlak (niet getoond bij Middenvlak) | Uit |

Typ een getal en druk op {{key:Enter}} of {{key:Tab}}: het onderdeel wordt meteen opnieuw opgebouwd. **Middenvlak** zet de helft van de diepte aan elke kant van de schets.

### Tot een vlak, het volgende vlak of een hoekpunt

Nog niet beschikbaar in deze versie: elk "tot"-einde heeft een exacte kernel nodig, en de feature meldt "Extruderen tot een vlak, het volgende vlak of een hoekpunt: nog niet beschikbaar (het heeft een exacte kernel nodig)." Gebruik een blinde diepte die u meet. Met een exacte kernel werken de einden zo:

- **Tot vlak of referentievlak**: **Tot** neemt een plat vlak (Kiezen, dan erop klikken) of een referentievlak. Een vlak evenwijdig aan de schets geeft een exacte diepte; een schuin vlak snijdt het einde op de helling. Ligt het vlak achter de schets: "… Probeer Richting omkeren."
- **Tot volgend vlak**: stopt bij het eerste platte vlak van het lichaam dat de extrusie raakt (gebogen vlakken worden hier niet ondersteund: dat wordt gemeld).
- **Tot hoekpunt**: stopt op gelijke hoogte met een hoekpunt (klik nabij het einde van een rand) of een puntfeature.
- **Offset vanaf vlak**: net als Tot vlak, maar stopt **Offset (mm)** ervoor (loodrecht op het vlak gemeten).

### Twee richtingen, helling, één contour

- **Tweede richting** (Blind): extrudeert ook **Tweede diepte (mm)** naar de andere kant van de schets.
- **Helling (°)**: de zijkanten hellen naar binnen naarmate ze verder gaan (negatief: naar buiten), zoals een trekhoek; alleen één richting. Nog niet beschikbaar in deze versie (het heeft een exacte kernel nodig): laat het op 0 staan.
- **Regio's**: **Regio's kiezen**, dan klikt u binnen de lussen om te extruderen; alleen die regio's worden gebruikt (een cirkel binnen een vierkant: klik binnen de cirkel voor een cilinder, ertussen voor een plaat met een gat). **Alle** keert terug naar elke lus.

Hieronder toont **Schetsmaten** de aansturende maten van de schets, zodat u de maten van het profiel kunt wijzigen zonder de schets te openen.

:::note
**Helemaal door is alleen voor snedes.** Een boss die op Helemaal door staat, mislukt met "Helemaal door is voor snedes. Gebruik een diepte voor een boss." Als u een feature van Knippen terug naar Boss zet, verandert Helemaal door voor u in Blind.
:::

## Een holte snijden

1. Klik op het platte vlak waarin u wilt snijden. Het licht op, en het rechterpaneel toont **Vlak**.
2. Kies {{ui:Schets op dit vlak}} (of {{ui:Schets}} in de werkbalk).
3. Teken de omtrek van de holte, bijvoorbeeld een rechthoek, en geef er maten aan.
4. Kies {{ui:Afsluiten}}.
5. Kies {{ui:Knippen}}. Het begint als **Helemaal door**: het verwijdert materiaal dwars door het onderdeel.
6. Voor een holte zet u **Einde** op **Blind (een diepte)** en typt u de **Diepte (mm)**.

Een snede gaat het materiaal in, weg van het vlak waarop u hebt geschetst. Als de statusbalk zegt "Er is niets om aan die kant van de schets te snijden. Probeer de andere richting.", vink dan **Richting omkeren** aan.

Een schets op de bodem van de holte volgt de bodem: wijzigt u de diepte van de holte, dan verschuift de schets mee.

## Een heel vlak naar buiten of binnen trekken

Om een vlak verder naar buiten of naar binnen te laten gaan, hoeft u de omtrek niet te tekenen. Klik op het platte vlak en kies dan in het rechterpaneel:

- {{ui:Extruderen vanaf dit}} trekt het vlak naar buiten: PartCraft voegt een schets op het vlak toe met de omtrek ervan (gaten in het vlak blijven gaten) en een extrusie van 10 mm.
- {{ui:Snijden in dit}} duwt het vlak naar binnen: dezelfde schets en een snede halverwege het onderdeel.

Beide zijn één stap: {{key:Mod+Z}} verwijdert de schets en de feature samen. De nieuwe feature is geselecteerd, dus typ meteen een getal en druk op {{key:Enter}} voor de diepte. De omtrek wordt gekopieerd als vaste lijnen en bogen: hij volgt latere wijzigingen aan het vlak niet. Als een deel van de omtrek niet gekopieerd kan worden (een vrije curve), opent de schets in plaats daarvan met wat wel gekopieerd kon worden; maak hem af, kies dan {{ui:Afsluiten}} en {{ui:Extruderen}} of {{ui:Knippen}}.

## Profielen met eilanden

Een schets kan meerdere gesloten lussen bevatten. Naast elkaar liggende lussen worden aparte bosses (of snedes); een lus binnen een andere wordt een gat door de boss. Een rechthoek met twee cirkels erin wordt bijvoorbeeld geëxtrudeerd als een plaat met twee gaten.

Om alleen sommige lussen te gebruiken, kiest u ze met **Regio's** (hierboven); een andere feature kan de overige lussen van dezelfde schets gebruiken.

## Later bewerken

- Klik op "Extrude1" in de geschiedenis om de instellingen terug te halen.
- Dubbelklik op de schets (ingesprongen eronder) om de schets te openen; sluit hem om opnieuw op te bouwen.
- Zie [Een onderdeel wijzigen via de geschiedenis](topic:edit-history) voor onderdrukken, terugrollen, herordenen en verwijderen.

## Veelvoorkomende meldingen

| Melding | Wat te doen |
|---|---|
| "De schets heeft geen gesloten profiel om te extruderen." | De schets heeft geen gesloten lus van volle lijnen. Sluit de openingen, of zet constructielijnen weer om met {{key:Q}} |
| "Het profiel is open: een einde bij (x, y) is aan niets verbonden." | Open de schets en verbind dat einde met de volgende lijn |
| "Er is nog niets om te snijden." | Een snede heeft een volume nodig om in te snijden. Maak eerst een boss |
| "Er blijft na dit niets over van het onderdeel." | De snede heeft alles verwijderd. Controleer de maat en richting |

Meer in [Problemen oplossen](topic:troubleshooting).
