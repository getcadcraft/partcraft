---
title: Vergelijkingen in beide richtingen
summary: Verander een parameter en het onderdeel volgt; typ een nieuwe maat in een aangedreven getal en PartCraft berekent de parameter erachter, en vraagt welke als er meerdere kunnen veranderen.
keywords: vergelijkingen, achterwaarts oplossen, aangedreven maat, tweerichtings, omkeren, doelzoeken, parameters, gekoppelde waarden, welke parameter
from: 82dc0269
---

Een vergelijking zoals **Extrude1 depth = thick + extra** werkt in beide richtingen.

## Vooruit: verander de parameter

Op het tabblad {{ui:Parameters}} wijzigt u `thick` van 20 naar 30. De diepte van Extrude1 wordt 30 + extra, en het onderdeel bouwt opnieuw.

## Achterwaarts: verander het aangedreven getal

1. Klik op "Extrude1" in de geschiedenis. Het vak **Diepte (mm)** toont **ƒ**: een vergelijking stuurt het aan.
2. Typ de maat die u wilt, bijvoorbeeld `40`, en druk op {{key:Enter}}.

PartCraft lost de parameter achter de vergelijking op, in zoveel stappen als nodig is (`depth = hub_h`, `hub_h = disc_t + 50`: een hoogte typen verandert `disc_t`). De statusbalk zegt wat er veranderde, bijvoorbeeld dat extra van 5 naar 15 ging.

Als twee of meer parameters het getal aansturen, vraagt een vak **Welke parameter moet veranderen?** en toont ze. Klik op één; de andere houden hun waarde. {{ui:Annuleren}} verandert niets.

Hetzelfde werkt in een schets: dubbelklik op een aangedreven maat, typ een waarde, druk op {{key:Enter}}. Het werkt ook in de kolom **Waarde** van de parametertabel, voor een parameter die zelf een uitdrukking is.

## Wanneer het niet kan

- Een getal dat heel moet zijn (een patroontelling) of binnen een bereik moet blijven (een hoek tot 360°), wordt geweigerd voordat er iets verandert.
- Een vergelijking met alleen vaste getallen (`=40`) heeft geen parameter om te veranderen: het getal dat u typt vervangt hem.
- Als geen enkele waarde van de parameter de maat geeft die u typte, zegt de statusbalk dat, en verandert er niets.
- Een schets die niet met de nieuwe waarde kan worden opgelost, houdt zijn vorige waarden, en de statusbalk noemt de schets.

Elke wijziging, in beide richtingen, is één stap voor {{key:Mod+Z}} en {{key:Mod+Y}}.
