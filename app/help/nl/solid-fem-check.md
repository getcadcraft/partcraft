---
title: Solid FEM: een sterktecontrole van één onderdeel
summary: Schakel de Solid FEM-add-on in, mesh een onderdeel, kies vaste vlakken en een belasting in de 3D-weergave, los op en lees verplaatsing en von Mises-spanning af op het model.
keywords: solid fem, eindige elementen, fea, spanning, von mises, verplaatsing, vast vlak, belasting, druk, zwaartekracht, eigenfrequentie, vormmode, mesh, add-on
from: 8b7e6ba2
---

## Wat u gaat doen

Controleer één massief onderdeel onder een belasting: waar het beweegt en waar de spanning het hoogst is. De studie is lineair en elastisch, dus het is een controlehulpmiddel; uw ingenieur beoordeelt de resultaten.

## Stappen

1. Kies {{ui:Instellingen}} › {{ui:Add-ons}} en schakel {{ui:Solid FEM}} in (het staat uit totdat u dat doet). Open het tabblad {{ui:Solid FEM}} in het rechterpaneel.
2. Kies onder {{ui:Materiaal}} er één, of kies {{ui:Eigen}} en typ de Poisson-verhouding, dichtheid en vloeigrens.
3. Druk op {{ui:Vaste vlakken toevoegen}}, klik de vlakken die in de 3D-weergave worden vastgehouden, en druk daarna op {{ui:Kiezen gereed}}.
4. Voeg een belasting toe met {{ui:Kracht toevoegen}}, {{ui:Druk toevoegen}} of {{ui:Zwaartekracht toevoegen}} en kies de vlakken ervan op dezelfde manier.
5. Druk op {{ui:Onderdeel meshen}} en daarna op {{ui:Oplossen}}. Kies eerst {{ui:Eigenfrequenties}} onder {{ui:Studie}} als u frequenties wilt.
6. Lees {{ui:Resultaten}} en {{ui:Waarschuwingen}}, en druk daarna op {{ui:Op het model tonen}} om von Mises-spanning, verplaatsing of een vormmode te tekenen; {{ui:Plot verwijderen}} haalt hem weg.

## Opmerkingen

- De pagina lost op tot een vast aantal elementen; de statusregel laat zien wanneer uw elementgrootte te fijn is.
- Spanning bij vaste vlakken, belastingpunten en scherpe hoeken neemt toe naarmate het mesh fijner wordt. Verfijn en vergelijk voordat u op een piekwaarde vertrouwt.
- Elke wijziging is één stap ongedaan te maken, en de instellingen worden opgeslagen in het onderdeelbestand.
- Voor vloei- en contactstudies zie [Sterkte en doorbuiging controleren](topic:simulation).
