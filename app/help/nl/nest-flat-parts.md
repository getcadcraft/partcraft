---
title: Platte onderdelen op platen nesten
summary: Leg platte onderdelen op platen of een rol met zo weinig mogelijk verlies als PartCraft kan vinden, nooit dichter dan de afstand die u opgeeft, en sla de indeling op als DXF voor de laser, plasma, waterstraal of router.
keywords: nesten, nest, plaat, platen, rol, laser, plasma, waterstraal, router, snijden, opbrengst, materiaalgebruik, schroot, verlies, afstand, snijbreedte, korrelrichting, walsrichting, dxf, uitslag, contouren
from: 8dcce1a6
---

**Nesten** plaatst veel platte onderdelen op een plaat, zodat er zo weinig mogelijk materiaal overblijft. PartCraft legt de onderdelen één voor één neer, elk op de plek waar de gebruikte lengte van de plaat het kortst blijft, probeert in enkele seconden meerdere volgorden en draaiingen en houdt de beste. Onderdelen kunnen in elkaars gaten liggen en in de holte van een L- of U-vorm.

## Openen

- {{ui:Exporteren}} › {{ui:Platte onderdelen op platen nesten…}} opent het met de uitslag van het onderdeel, of — in een samenstelling — met de uitslag van elk plaatwerkonderdeel, zoveel als er kopieën zijn.
- Bij een plaatwerkonderdeel: {{ui:Plat leggen}} en daarna {{ui:Nesten op platen…}} onder de uitslag.
- {{ui:Contouren toevoegen uit een DXF…}} voegt elke gesloten contour in een DXF-bestand toe als onderdeel: een tekening uit CadCraft die als DXF is opgeslagen, of een bestand uit de eigen software van uw snijmachine. Een contour binnen een andere is een gat daarin. Lijnen en bogen die uiteinde aan uiteinde aansluiten, tellen als één contour. Bestanden in inches, centimeter of meter worden omgezet naar millimeter.

:::note
Plaatwerk plat leggen vereist een exacte geometriekern (zie [Plaatwerk](topic:sheet-metal)). Contouren uit een DXF-bestand werken altijd.
:::

## Instellen

Geef voor elk onderdeel op **hoeveel** u er nodig hebt en de **korrelrichting**: {{ui:Elke richting}}, {{ui:Langs de plaat (zoals getekend)}} voor geborstelde of gewalste plaat die één kant op moet lopen, of {{ui:Dwars op de plaat}}.

Onder **Platen**:

- **Voorraad**: {{ui:Platen}} van een bepaalde lengte en breedte (en hoeveel u er hebt; 0 = zoveel als nodig), of {{ui:Een rol}} van een bepaalde breedte, zo lang als nodig.
- **Randmarge** blijft vrij aan elke rand van de plaat (voor klemmen, of een ruwe rand).
- **Ruimte tussen onderdelen** is de kleinste afstand tussen twee snijlijnen: minstens de snijbreedte van uw snijmachine, plus wat het materiaal nodig heeft.
- **Draaiingen**: de hoeken waarover een onderdeel mag worden gedraaid, standaard elke 90°. Minder draaiingen gaan sneller; meer kunnen de plaat beter benutten.
- **Onderdelen mogen worden omgedraaid** laat een onderdeel ondersteboven leggen. Laat dit uit bij plaatwerk: een uitslag die omgedraaid ligt, buigt de andere kant op.

Druk op {{ui:Nesten}}. De voorvertoning toont elke plaat; de gegevens zeggen hoeveel platen (of hoeveel van de rol) er zijn gebruikt en hoeveel van het materiaal de onderdelen innemen. Onderdelen die niet pasten, worden met naam genoemd.

## Opslaan

{{ui:DXF opslaan}} schrijft de indeling als DXF (R12, millimeter), de ene plaat na de andere: de contouren van de platen op de laag SHEET, de onderdelen op PARTS (bogen blijven bogen), de naam van elk onderdeel op LABELS.

:::tip
Meerdere onderdelen door elkaar nesten levert meestal een betere indeling op dan veel kopieën van één onderdeel: kleine onderdelen vullen de ruimten tussen grote.
:::

## De platen snijden (G-code)

**Exporteren › Genest platen naar G-code** leest een genest DXF-bestand (dit bestand, of de platen van de Cabinets-add-on in CadCraft) en maakt per plaat één programma via de post die u kiest: eerst de gaten en uitsparingen, daarna de contouren, elk snijden met de straal van het gereedschap buiten het onderdeel, door de plaat heen en 1 mm verder, met tabs als u die vraagt. De postlijst bestaat uit de ingebouwde posts en de eigen posts van uw Manufacture-studie. Controleer elk programma in een simulator voordat u het uitvoert: boren en holtes worden niet gemaakt.

## Wat u moet controleren

PartCraft controleert elke indeling opnieuw op de echte vormen (niet op het raster waarmee het zocht): geen twee onderdelen dichter dan de afstand, niets in de marges. Het plant het snijden niet: inleidende lijnen, de snijvolgorde, het één keer snijden van gedeelde randen en het bewaren van de restplaat zijn het werk van de software van uw snijmachine. Controleer het DXF-bestand daar voordat u gaat snijden.
