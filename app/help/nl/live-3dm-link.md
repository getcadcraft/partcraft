---
title: Een .3dm-model live houden
summary: Wijzig een model in het programma dat het maakte en zie het lichaam van PartCraft meebewegen, vanuit Rhino 8 of een Grasshopper-definitie, met uw features opnieuw opgebouwd op de nieuwe vorm.
keywords: rhino, grasshopper, live-koppeling, live-verbinding, 3dm, nurbs, parametrisch, koppeling, synchronisatie, script, versturen, geïmporteerd lichaam
from: cf4dc9b2
---

Blijf het model vormgeven waar u het modelleert, en hier bewerken, controleren en documenteren. Elke wijziging in het andere programma vervangt één geïmporteerd lichaam in PartCraft, en de features erna worden op de nieuwe vorm opnieuw opgebouwd.

:::note
De koppeling heeft **CadCraft Studio** nodig op dezelfde computer. Een browsertabblad kan de verbinding niet overnemen. Er gaat niets via internet: het script praat met Studio op het eigen adres van deze computer, met een token.
:::

:::warning
Deze koppeling is getest met de bestandsschrijver van het script en met een vervanger voor het andere programma, nog niet binnen Rhino of Grasshopper zelf. Als daar iets misgaat, laat ons dan weten wat er stond.
:::

## Instellen

1. Open PartCraft in Studio. Vink in {{ui:Instellingen}} › {{ui:PartCraft}} › {{ui:Assistenten}} **Laat AI-assistenten en scripts PartCraft gebruiken** aan, en klik dan op **Bewerken**.
2. Kies in Studio {{ui:Assistent verbinden}}. Het toont het adres en de token die u hieronder plakt.
3. Download het script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Vanuit Rhino

1. Voer `cadcraft_link.py` uit in de scripteditor van Rhino (Python 3 in Rhino 8).
2. De eerste keer plakt u het adres en de token. Ze worden bewaard in `.cadcraft-link.json` in uw thuismap, nooit in het model. Studio maakt bij elke start een nieuwe token, dus het script vraagt dan opnieuw.

Voer het script opnieuw uit om te stoppen.

## Vanuit Grasshopper

Voer het script eerst één keer in Rhino uit, zodat het adres en de token worden opgeslagen.

1. Voeg een Script-component toe (Python 3) en plak daarin het hele `cadcraft_link.py`.
2. Geef er deze invoer: `G` (de geometrie, met lijsttoegang), `N` (een naam, optioneel), `On` (een schakelaar met waar of onwaar) en `Target` (optioneel: `model` of `part`, als beide apps open zijn).
3. Zet `On` op waar.

Elke oplossing stuurt `G` mee en vervangt wat het component de vorige keer stuurde.

## Hoe het hier werkt

- **Één lichaam.** Alles wat zichtbaar is in het model wordt één geïmporteerde feature, zoals bij [een .3dm-bestand openen](topic:open-3dm-files).
- **Het moet sluiten.** PartCraft vult kleine gaten en vlakke openingen, en het andere programma wordt verteld hoeveel. Als het model nog steeds niet sluit, houdt PartCraft het lichaam dat het had en zegt de statusbalk dat. De volgende wijziging die wel sluit, werkt het bij.
- **Maak af wat u doet.** In een schets of tekening worden updates geweigerd en later opnieuw geprobeerd; ze komen aan zodra u weer in het model bent.
- **Ongedaan maken.** Updates die binnen twee seconden op elkaar volgen, delen één stap ongedaan maken.
- **Opslaan.** Het onderdeelbestand bewaart de koppeling. Voer het script opnieuw uit nadat u het bestand heeft heropend, dan wordt dezelfde feature bijgewerkt.

**Eén richting.** Wijzigingen hier gaan niet terug naar het andere programma.

## Als er iets misgaat

- **"Geen ModelCraft- of PartCraft-venster staat dit toe":** doe stap 1 van de installatie.
- **"Studio heeft de token geweigerd":** Studio is herstart. Kopieer de nieuwe token en voer het script opnieuw uit. Voor Grasshopper: voer het eerst in Rhino uit.
- **"Kan CadCraft Studio niet bereiken":** Studio draait niet, of het adres is veranderd.
