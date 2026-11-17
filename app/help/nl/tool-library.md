---
title: De gereedschapsbibliotheek
summary: Bewaar de gereedschappen die u gebruikt in de browser zodat elk onderdeel ze kan gebruiken, en verplaats gereedschapsbibliotheken tussen computers als JSON-bestand.
keywords: gereedschapsbibliotheek, gereedschappen, exporteren, importeren, JSON, gereedschappen opslaan, T-nummer, eindfrees, werkplaatsgereedschap
from: 8b9f2483
---

Het tabblad **Gereedschap** van Manufacture toont de gereedschappen van het onderdeel. Onder **Gereedschapsbibliotheek** kunt u uw eigen gereedschappen bewaren, los van één onderdeel:

- {{ui:Dit gereedschap opslaan}} voegt het gekozen gereedschap toe aan **Mijn opgeslagen gereedschappen**; {{ui:Alle gereedschappen van dit onderdeel opslaan}} voegt ze allemaal toe. Mijn opgeslagen gereedschappen blijven in deze browser bewaard en zijn beschikbaar voor elk onderdeel. Een gereedschap dat u al hebt opgeslagen (zelfde soort, maat, snijkanten en overschrijvingen) wordt niet twee keer opgeslagen.
- {{ui:Aan dit onderdeel toevoegen}} neemt het gekozen opgeslagen gereedschap over in het onderdeel. Als zijn T-nummer al door een ander gereedschap in het onderdeel wordt gebruikt, krijgt het het volgende vrije nummer en het paneel meldt dat. {{ui:Uit mijn bibliotheek verwijderen}} haalt het uit de lijst met opgeslagen gereedschappen (niet uit onderdelen die het al hebben).
- {{ui:Gereedschappen exporteren…}} schrijft de gereedschappen van het onderdeel als `.json`-bestand; {{ui:Gereedschappen importeren…}} voegt de gereedschappen van zo'n bestand toe aan het onderdeel, met dezelfde regels (een gereedschap dat er al is wordt overgeslagen, een bezet T-nummer schuift op). Het bestand bevat maten, snijkanten, materialen en de aanvoer- en snelheidsoverschrijvingen die u hebt ingetypt; het heeft geen ids. Gebruik het om het gereedschap van een werkplaats naar een andere computer te verplaatsen of het aan een collega te geven.

Als de browser de bibliotheek niet kan bewaren (opslag staat uit, of is vol), meldt opslaan dat, en is **Gereedschappen exporteren** de manier om een bestand te bewaren. Een bestand moet een PartCraft-gereedschapsbibliotheek van deze versie of ouder zijn, met hooguit 500 gereedschappen van geldige maten; al het andere wordt geweigerd, met de reden.

De snijsnelheden en spaanbelastingen die bij een gereedschap horen zijn startwaarden; zie [Gereedschapsbanen en G-code maken](topic:manufacture).
