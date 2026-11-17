---
title: Een BimCraft-element ontwerpen en terugopslaan
summary: Een onderdeel dat vanuit BimCraft is verstuurd, opent met het gebouw eromheen, grijs en alleen-lezen. Wijzig het en sla het terug op, zodat BimCraft de nieuwe vorm kan accepteren.
keywords: bimcraft, bim, element, verzenden, terugopslaan, koppeling, gebouw, context, buren, steun, beugel, ifc, accepteren
from: 0978fe53
---

## Wat u gaat doen

Werk aan een onderdeel dat uit een BimCraft-model komt, op zijn plek in het gebouw, en stuur de nieuwe vorm terug.

## Stappen

1. Kies in BimCraft een element en kies {{ui:Onderdeelkoppelingen}} › {{ui:Naar PartCraft verzenden}}. PartCraft opent het als nieuw onderdeel. De statusbalk meldt dat het een BIM-element is.
2. De elementen eromheen (binnen 3 m) worden grijs getekend. Ze zijn er om tegen te ontwerpen. U kunt ze niet selecteren of wijzigen, en ze worden niet opgeslagen in het onderdeelbestand.
3. Wijzig het onderdeel zoals elk ander: snijden, toevoegen, boren, spiegelen. De oorsprong en assen zijn die van het element zelf, dus het onderdeel gaat terug naar de plek waar het stond.
4. Kies {{ui:Bestand}} › {{ui:Exporteren}} › {{ui:Terugopslaan naar BimCraft}}. De statusbalk meldt welke revisie u hebt verstuurd.
5. In BimCraft staat het element als gewijzigd totdat iemand daar het accepteert.

## Wat u zou moeten zien

- Het onderdeel behoudt zijn koppeling in het bestand. Opent u het later, dan meldt de statusbalk nog steeds dat het een BIM-element is. Het grijze gebouw komt terug zolang de browser het pakket nog bewaart waarmee het is verstuurd.
- Opnieuw terugopslaan stuurt revisie 2, 3 enzovoort. BimCraft houdt de nieuwste.

## Goed om te weten

- De vorm gaat terug als mesh in millimeters, in de eigen assen van het element. De features blijven in PartCraft.
- {{ui:Terugopslaan naar BimCraft}} doet niets voor een onderdeel dat niet uit BimCraft komt.
- Een onderdeel zonder volume heeft nog niets om te verzenden.
- Beide apps moeten open zijn in dezelfde browser: er wordt niets geüpload, de twee pagina's geven het element onderling door.
