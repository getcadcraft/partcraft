---
title: Documenten en revisies (de kluis)
summary: Een stap-voor-stap-gids voor één echte klus: zet een projectmap met onderdelen en samenstellingen onder beheer, check een onderdeel uit, wijzig het, check het in met een notitie, geef het vrij, bekijk wat het gebruikt en de stuklijst, wat een tweede persoon ziet terwijl het vergrendeld is, en hoe het werkt met cloudmappen.
keywords: kluis, documenten, stap-voor-stap-gids, zelfstudie, uitchecken, inchecken, revisie, vrijgave, goedkeuren, vergrendelen, geschiedenis, waar gebruikt, stuklijst, bom, samenstelling, cloudmap, projectmap, twee personen, gedeelde map
from: 0a5e6983
---

## Wat u gaat doen

U bent Ana en werkt aan de Riverside Clinic samen met een collega, Ben. De onderdelen en samenstellingen van het project staan in één map die u allebei kunt bereiken (een gedeelde schijf, een gesynchroniseerde map of een cloudmap). Aan het eind is één bestand gegaan van de eerste kopie naar een vrijgegeven revisie **A**, is het opnieuw gewijzigd als **B.1**, hebt u gezien wie wat deed, en hebt u gezien wat Ben ziet als u het bestand vasthoudt.

Alles wordt bewaard in een verborgen map `.ccvault` naast uw bestanden: geen server, niets geüpload (een cloudmap is de uitzondering, zie de laatste stap). Voor alle knoppen en regels op één plek, zie het onderwerp *Documenten: uitchecken, revisies en vrijgave* als uw app dat heeft.

## 1. De projectmap instellen

1. Kies {{ui:Documenten…}} in de groep **Bestand** van de werkbalk.
2. Kies {{ui:Kies de projectmap}} en kies de map met de onderdelen en samenstellingen van het project. (Projectmappen werken in Studio en in browsers die een map kunnen openen, zoals Chrome en Edge. In andere browsers zegt het paneel dat.)
3. Kies {{ui:Wijzigen}} naast **U:** en typ uw naam, `Ana` (als erom gevraagd wordt, ook de naam van deze computer). Het paneel toont nu *U: Ana op* en uw computer. Uw naam hoort bij alles wat u doet.
4. Kies {{ui:Een kluis in deze map starten}} en typ de naam van het project, `Riverside clinic`. Het paneel zegt *Kluis gestart voor Riverside clinic.*

## 2. Een bestand onder beheer brengen

1. Open **Bestanden niet in de kluis** en kies {{ui:Toevoegen}} naast `plates/Bracket.partcraft.json`.
2. Het verschijnt onder **Bestanden in de kluis** als revisie **A.1**, status **Werk in uitvoering**. A.1 is de eerste kopie; de kluis bewaart een kopie van elke revisie.

## 3. Uitchecken, wijzigen, inchecken

1. Kies {{ui:Openen}} naast `plates/Bracket.partcraft.json`. Het onderdeel opent in PartCraft en het paneel sluit zodat u het kunt zien. Open het paneel opnieuw via {{ui:Documenten…}}.
2. Open het paneel opnieuw en kies {{ui:Uitchecken}}. De rij zegt nu **Uitgecheckt naar u**. Er is een vergrendelbestand gemaakt in `.ccvault/locks`; niemand anders kan dit bestand uitchecken tot u het incheckt.
3. Wijzig het onderdeel: pas een maat aan, voeg een gat toe. Opslaan wordt geweigerd tenzij het bestand naar u is uitgecheckt, en het zegt waarom; Opslaan als werkt altijd voor een kopie van uw eigen werk.
4. Open het paneel, kies {{ui:Inchecken}} en typ wat er is veranderd (`Deur verplaatst`). Het paneel zegt *ingecheckt als A.2*. Het bestand in de projectmap is nu het onderdeel dat u open had, en de vergrendeling is weg. Inchecken zonder wijziging behoudt de revisie.

Als u van gedachten verandert, geeft {{ui:Uitcheck ongedaan maken}} het bestand terug zonder nieuwe revisie.

## 4. Beoordelen en vrijgeven

1. Kies {{ui:Ter beoordeling sturen}}. De status wordt **Ter beoordeling** en het bestand is alleen-lezen.
2. Kies voordat er wordt goedgekeurd {{ui:Projectinstellingen}} en zet, één naam per regel, wie mag goedkeuren, bijvoorbeeld `Ben` en `Carla`. Vink de regel aan dat de goedkeurder iemand anders moet zijn dan de auteur. Kies {{ui:Instellingen opslaan}}. Nu weigert de kluis zelf iedereen anders.
3. Ben (of Carla) kiest {{ui:Goedkeuren}} en typt de naam van de goedkeurder. De status wordt **Vrijgegeven** en de revisie wordt **A**, met *goedgekeurd door* en de naam. Een vrijgegeven bestand is alleen-lezen. {{ui:Terugsturen}} zou het terugzetten naar Werk in uitvoering, met een reden.

De naam van de goedkeurder is de naam die in het paneel is getypt; het is een registratie van wie heeft getekend, geen bewijs van identiteit.

## 5. Een nieuwe revisie

1. Kies bij het vrijgegeven bestand {{ui:Nieuwe revisie}}. U houdt het vast voor de volgende letter.
2. Wijzig het en kies daarna {{ui:Inchecken}}. De revisie is **B.1**, werk in uitvoering. Geef het op dezelfde manier vrij en het wordt **B**. {{ui:Uitcheck ongedaan maken}} vóór de eerste inchecking laat het op **A** staan.

Revisieletters lopen A, B … Z, AA, AB. Als uw standaard sommige letters overslaat, slaat de projectinstelling *De ASME Y14.35-volgorde gebruiken* I, O, Q, S, X en Z over voor de volgende revisies.

## 6. Zien wat er is gebeurd

Kies de naam van het bestand om de details te openen:

- **{{ui:Geschiedenis}}**: elke gebeurtenis, de nieuwste eerst, met wie, welke computer en wanneer: *Ingecheckt A.2* door Ana, *Vrijgegeven* door Ben, enzovoort.
- **{{ui:Revisies}}**: de revisietabel: elke bewaarde revisie, met datum, wie hem heeft ingecheckt, de notitie, en wie hem heeft goedgekeurd. De kluis bewaart een kopie van elke revisie in `.ccvault/revs`.
- **{{ui:Gebruikt}}**: de onderdelen van een samenstelling.
- **{{ui:Gebruikt door}}**: Gebruikt door somt elke samenstelling in de kluis op die dit onderdeel bevat: wijzig een beugel en u weet welke samenstellingen u moet controleren.

## Samenstellingen: wat ze gebruiken en de stuklijst

Zet een samenstelling (`.partcraft.json`, opgeslagen vanuit de modus Samenstelling) in de map en voeg hem toe. Kies de naam: **Gebruikt** toont de onderdelen die hij bevat, met de revisie en status van elk onderdeel; **Gebruikt door** bij een onderdeel toont elke samenstelling die het bevat. {{ui:Stuklijst (CSV)}} slaat de hele onderdelenlijst op, niveau voor niveau, met hoeveelheden, revisies en statussen, voor een spreadsheet. Wijzig een beugel, en **Gebruikt door** vertelt u welke samenstellingen u moet bekijken.

## 7. Wat Ben ziet terwijl u het bestand vasthoudt

Check het bestand nu opnieuw uit, en vraag Ben dezelfde projectmap op zijn computer te openen en het paneel te openen. Op de rij van het bestand ziet hij **Uitgecheckt door Ana op** uw computer **sinds** het tijdstip, en geen knop {{ui:Uitchecken}}. Als hij het toch probeert, weigert de kluis: de vergrendeling is een bestand dat het systeem niet twee keer maakt, dus twee personen kunnen het bestand niet allebei vasthouden, zelfs niet in precies dezelfde seconde, als de map op schijf staat in Studio. (In een browser biedt de map alleen een beste poging, en het paneel zegt dat onder **Map**.)

Als Ana weg is en Ben het bestand nodig heeft, maakt {{ui:Uitcheck verbreken}} het vrij. Hij moet een reden typen; die gaat in het logboek met wiens uitcheck het was. Als het project beheerders vermeldt, kunnen alleen zij dat. Een uitcheck die ouder is dan de verouderingsgrens (standaard 14 dagen) wordt gemarkeerd als *lang geleden*. Na het verbreken wordt Ana's late inchecking geweigerd, zodat jullie elkaar niet kunnen overschrijven.

## 8. Cloudmappen

Een cloudmap is een projectmap die in de cloudopslag van uw team wordt bewaard, zodat het team geen gedeelde schijf nodig heeft. In Studio, aangemeld bij uw CadCraft-account, toont het paneel {{ui:Een cloudmap openen}} naast {{ui:Kies de projectmap}}. Kies die en kies de map, weergegeven als werkruimte / map. Een eigenaar van de werkruimte maakt de map eerst aan, en de cloudopslag van het team moet actief zijn. Alles hierboven werkt hetzelfde; de server maakt de vergrendeling, die streng is over personen heen. Als u niet bent aangemeld, vraagt het paneel u aan te melden. In een gewoon browsertabblad wordt de cloudknop niet aangeboden; gebruik Studio.

## Probeer het

Doe de acht stappen hierboven met een kopie van een echt bestand. Voor de stappen met twee personen hebt u een tweede persoon nodig, of twee vensters met twee namen. Als u het probeert met een echte gedeelde map, somt de pagina Community-testen een controle op die precies dit vraagt, en neemt resultaten aan.
