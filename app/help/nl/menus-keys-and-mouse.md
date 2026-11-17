---
title: Menu's, toetsen en muis
summary: Kies een menustijl die past bij hoe u al werkt, geef elk commando uw eigen toets, verplaats commando's tussen linttabbladen, en bepaal wat het wiel en elke muisknop in de 3D-weergave doen.
keywords: menustijl, menu's, lint, werkbalk, featureboom, sneltoetsen, toetsen, aanpassen, opnieuw toewijzen, muis, wiel, omkeren, zoomrichting, middelste knop, omcirkelen, verschuiven, exporteren, importeren, wisselen, vertrouwd
from: 8445b06c
---

De commando's van PartCraft zijn hetzelfde, hoe u ze ook bereikt. Een **menustijl** bepaalt alleen waar ze op het scherm staan, hoe ze heten en met welke toetsen ze lopen. Kies er een in {{ui:Instellingen}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menu's, toetsen en muis}}; de wijziging werkt meteen, en deze browser onthoudt haar.

## De twee stijlen

| Stijl | Wat u krijgt |
|---|---|
| {{ui:PartCraft}} | De eigen werkbalk van PartCraft: de werkomgevingschakelaar, {{ui:File}}, {{ui:Sketch}}, {{ui:Features}}, {{ui:Drawing}}, {{ui:Assembly}}, {{ui:Edit}} en {{ui:View}}. Toetsen {{key:S}} schets, {{key:F}} passend maken, {{key:M}} meten, {{key:X}} doorsnede-weergave. De standaard. |
| {{ui:Feature tree}} | Een lint, ingedeeld zoals featuregebaseerde werktuigbouwkundige CAD-programma's dat doen: een menu {{ui:File}} (met elke export), snelknoppen en de tabbladen {{ui:Features}}, {{ui:Sketch}}, {{ui:Surfaces}}, {{ui:Evaluate}}, {{ui:Drawing}}, {{ui:Assembly}}, {{ui:Studies}} (de werkomgevingen en hun gereedschappen), {{ui:Illustrate}} (de handmatige gereedschappen van de werkomgeving Illustrate; die schakelen eerst naar Illustrate) en {{ui:View}}. {{ui:Features}} begint met {{ui:Sketch}}, want een onderdeel begint met een schets. Extra toetsen: {{key:E}} extruderen, {{key:H}} gat, en {{key:V}} gevolgd door een letter voor een weergave: {{key:V}} {{key:F}} voor, {{key:V}} {{key:B}} achter, {{key:V}} {{key:T}} boven, {{key:V}} {{key:O}} onder, {{key:V}} {{key:R}} rechts, {{key:V}} {{key:L}} links, {{key:V}} {{key:I}} isometrisch, {{key:V}} {{key:N}} loodrecht op. In de 3D-weergave draait de middelste knop om het model, verschuiven {{key:Shift}} met de middelste knop en de rechterknop, en kiest de linkerknop alleen. |

Elke stijl behoudt {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} en {{key:Mod+A}}.

Een gereedschap van een andere werkomgeving schakelt er eerst naar over; een Ontwerp-gereedschap dat in een andere werkomgeving is gekozen, gaat eerst terug naar Ontwerp. Schetsgereedschappen wachten op een schets, de tekengereedschappen op het tekenblad, de samenstellingsgereedschappen op een samenstelling: de statusbalk zegt wat eerst moet.

:::tip
In een schets, op het tekenblad, in een samenstelling en in de andere werkomgevingen houden letters daar hun eigen betekenis ({{key:L}} lijn, {{key:R}} rechthoek, {{key:J}} verbinding …), in elke stijl. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} en de pijltjes houden altijd hun eigen betekenis. Een toets van de eigen lay-out van PartCraft die uw stijl aan een ander commando heeft gegeven, doet niets, en de statusbalk zegt waar het commando naartoe is gegaan.
:::

## Maak het uw eigen

1. Kies de stijl die het dichtst bij wat u wilt ligt, en klik dan op {{ui:Aanpassen…}}.
2. Zoek op {{ui:Toetsen en menu's}} een commando (het zoekvak helpt). Klik op {{ui:Een toets toevoegen}} en druk de toets in, of twee toetsen na elkaar. Klik op een toets om hem weg te halen.
3. Met het lint verplaatst {{ui:Waar het staat}} het commando naar een ander tabblad en paneel, naar het menu {{ui:File}}, of naar {{ui:Alleen toetsen}}.
4. Stel onder {{ui:Muis}} het wiel in, de knoppen die een schets verschuiven, en wat elke knop in de 3D-weergave doet.
5. Geef het een naam en klik op {{ui:Opslaan}}.

Een ingebouwde stijl opslaan maakt uw eigen kopie ("Mijn Featureboom"); de ingebouwde verandert nooit. Een toets die aan twee commando's is gegeven, of een die zou lopen voordat een tweeletterige toets kan worden getypt, staat in rood en moet worden opgelost voordat u kunt opslaan.

## Muis

- **Muiswiel**: {{ui:Omhoog scrollen zoomt in}} (de standaard) of {{ui:Omhoog scrollen zoomt uit}}, en hoe snel. Een knijpgebaar op het trackpad zoomt altijd de richting waarin uw vingers bewegen.
- **Schets verschuiven met**: de middelste knop, de rechterknop, of beide. Een rechtsklik in een schets beëindigt nog steeds de stap van het gereedschap.
- **Slepen in de 3D-weergave**: {{ui:Per weergave eigen}} houdt de instelling van PartCraft ({{ui:Instellingen}} › {{ui:PartCraft}}: links draait, of midden draait). Of stel elke knop in op draaien, verschuiven, zoomen of niets; {{key:Shift}} met de draaiknop verschuift. Een klik zonder slepen kiest nog steeds.

## Neem het mee

{{ui:Exporteren}} slaat de gebruikte stijl op als een klein `.ccinput.json`-bestand; {{ui:Importeren…}} voegt er een toe, van een andere computer of van een collega. Een geïmporteerd bestand kan alleen naar commando's van PartCraft verwijzen: al het andere wordt weggelaten en in de statusbalk geteld. {{ui:Deze stijl verwijderen}} verwijdert er een van uw eigen.

:::note
Deze instellingen blijven in deze browser. {{ui:Deze stijl in elke app gebruiken}} onder de stijlkaarten zorgt dat elke app opent in de bijpassende stijl (de eigen werkbalk of een lint), met de wijzigingen die u in elke app maakte. Een andere stijl kiezen in één app verandert alleen die app.
:::

Gerelateerd: [Toetsen en muis](topic:keyboard) · [PartCraft-instellingen](topic:settings) · [Overstappen van een andere parametrische modeler](topic:coming-from)
