---
title: Een onderdeel wijzigen via zijn geschiedenis
summary: Features en schetsen achteraf bewerken, onderdrukken, terugrollen, features eerder invoegen, herordenen, hernoemen en verwijderen, en elk daarvan ongedaan maken.
keywords: geschiedenis, featureboom, ontwerpboom, feature bewerken, schets bewerken, onderdrukken, onderdrukking opheffen, terugrollen, vooruitrollen, herordenen, feature verplaatsen, verwijderen, hernoemen, ongedaan maken, opnieuw, opnieuw opbouwen, regenereren, ouder kind, groot onderdeel, veel features, traag opbouwen, 750 features
from: 6f75aef4
---

Een PartCraft-onderdeel is zijn geschiedenis: de lijst met vlakken, schetsen en features links. PartCraft bouwt het volume opnieuw op vanaf de bovenkant van die lijst, telkens als er iets verandert. Een wijziging van een getal vooraan in de lijst verandert alles wat erop is gebouwd.

## Een feature bewerken

1. Klik op de feature in de geschiedenis (of op de schets die eronder is ingesprongen).
2. Wijzig de instellingen in het rechterpaneel. Elke wijziging wordt meteen opnieuw opgebouwd.

Er is geen OK of Annuleren: elke wijziging wordt toegepast. Bevalt het niet, druk dan op {{key:Mod+Z}}.

## Wijzigen welke randen of vlakken een afronding, afschuining of uitholling gebruikt

Dubbelklik op de feature in de geschiedenis, of selecteer hem en kies {{ui:Randen kiezen}} (of {{ui:Vlakken kiezen}}). Klik op randen of vlakken om ze toe te voegen of weg te halen, en kies daarna {{ui:Gereed}} of {{key:Esc}}. Zie [Afronden, afschuinen en uithollen](topic:fillet-chamfer-shell).

## Een schets bewerken

1. Dubbelklik op de schets in de geschiedenis, of selecteer hem en kies {{ui:Schets bewerken}} in het rechterpaneel (of {{ui:Schets}} in de werkbalk).
2. Het onderdeel gaat terug naar hoe het was toen de schets werd gemaakt: features erna zijn verborgen terwijl u bewerkt.
3. Wijzig de geometrie, relaties of maatvoeringen.
4. Sluit de schets. Het hele onderdeel wordt opnieuw opgebouwd met de wijziging.

Om alleen een maat te wijzigen, hoeft u de schets niet te openen. Selecteer de feature of de schets en wijzig het getal onder **Schetsmaatvoering** (of **Sturende maatvoering**) in het rechterpaneel. Zie [Maten wijzigen zonder de schets te openen](topic:change-sizes).

## Wanneer een feature mislukt

Als een wijziging een feature onmogelijk maakt, bouwt PartCraft al het andere op en markeert het probleem:

- de feature toont **⚠ fout** in de geschiedenis, en de melding staat bovenaan zijn rechterpaneel (zweef over de rij om die ook te lezen);
- features die er afhankelijk van zijn tonen **⚠ niet opgebouwd**, met "Heeft Extrude2 nodig, dat mislukt.";
- het statuschipje in de statusbalk zegt "1 feature mislukt".

Herstel de oorzaak (of maak ongedaan), en het onderdeel wordt weer opgebouwd. Veelvoorkomende meldingen en wat u eraan kunt doen, staan in [Problemen oplossen](topic:troubleshooting).

## Een feature onderdrukken

Onderdrukken schakelt een feature uit zonder hem te verwijderen: handig om een onderdeel te proberen zonder een gat of patroon.

1. Selecteer de feature.
2. Kies {{ui:Onderdrukken}}. De rij toont **uit**. Features die ervan afhangen, worden ook niet opgebouwd.
3. Kies {{ui:Onderdrukking opheffen}} om hem weer in te schakelen.

## Terugrollen

Terugrollen bouwt het onderdeel alleen tot een bepaald punt op, zodat u het ziet zoals het was, of zodat u een feature eerder in de geschiedenis kunt toevoegen.

1. Selecteer een feature en kies {{ui:Terugrollen naar hier}}. Die feature en alle features eronder worden grijs en niet opgebouwd. Een rij **Terugrolbalk · vooruitrollen** markeert de plek.
2. Elke feature die u nu toevoegt, komt **bij de balk**, vóór de grijze features.
3. Klik op **Terugrolbalk · vooruitrollen** om alles weer op te bouwen.

De terugrolpositie wordt in het bestand opgeslagen.

## Features herordenen

1. Selecteer de feature.
2. Kies {{ui:Omhoog verplaatsen}} of {{ui:Omlaag verplaatsen}}, of druk, met de geschiedenisrij in focus, op {{key:Alt+Up}} of {{key:Alt+Down}}.

Een feature kan nooit boven iets komen wat hij gebruikt. De knop is grijs, en zweven over de knop (of de toets proberen) geeft de reden, bijvoorbeeld "Extrude2 gebruikt Sketch2, dus Sketch2 moet eerst komen."

Wat een feature gebruikt: zijn schets; het vlak waarop zijn schets ligt; de features die een patroon of spiegeling kopieert; een schetslijn of omwenteling die als richting of as wordt gebruikt.

## Een feature verwijderen

1. Selecteer de feature en kies {{ui:Verwijderen}} in het rechterpaneel of de werkbalk, of druk op {{key:Delete}}.
2. Als andere features hem gebruiken, vraagt PartCraft: "Extrude3 en Hole1 gebruiken Extrude1 en worden ook verwijderd." Kies {{ui:Alles verwijderen}} of {{ui:Annuleren}}.

Een feature verwijderen verwijdert zijn schets niet: de schets verschijnt weer in de weergave als ongebruikte schets, klaar voor een andere feature. Verwijder de schets apart als u hem niet nodig hebt.

## Hernoemen

Selecteer de feature en typ een nieuwe **Naam** onderaan het rechterpaneel (tot 60 tekens). De naam van het onderdeel zelf staat in het rechterpaneel als niets is geselecteerd.

## Onderdelen met honderden features

Een onderdeel met honderden features is getest met 750. PartCraft bewaart het volume dat het halverwege de geschiedenis had, dus een wijziging laat in de geschiedenis alleen de features erna opnieuw opbouwen; een wijziging bovenaan bouwt alles opnieuw op wat erop rust, en dat duurt het langst. Ongedaan maken en opnieuw doen bouwen alleen vanaf het punt waar de twee toestanden verschillen. Om sneller te werken aan een groot onderdeel, rolt u terug naar waar u werkt (zie Terugrollen hierboven) of onderdrukt u wat u voorlopig niet nodig hebt. Meerdere sneden en uitsteeksels die elkaar niet raken, worden samen toegepast, dus een onderdeel met veel losse gaten en uitsteeksels bouwt sneller dan het aantal features doet vermoeden.

Een groot onderdeel wordt op de achtergrond opnieuw opgebouwd: de bouwchip onderaan zegt **Opnieuw opbouwen…** met hoe ver het is, en de weergave, de paneelen en de menu's blijven werken terwijl het loopt. Het onderdeel op het scherm is het laatst opgebouwde totdat het nieuwe klaar is. Als u iets opnieuw wijzigt terwijl het bezig is, bouwt PartCraft de nieuwste versie en laat de lopende opbouw vervallen. Een klein onderdeel wordt meteen opnieuw opgebouwd.

## Ongedaan maken en opnieuw

- {{key:Mod+Z}} of {{ui:Ongedaan maken}} maakt de laatste wijziging ongedaan: een feature, een instelling, een schetsbewerking, een sleepactie. De statusbalk zegt wat, bijvoorbeeld "Ongedaan gemaakt: maat wijzigen."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} of {{ui:Opnieuw}} herhaalt het.
- PartCraft bewaart de laatste 200 stappen (een onderdeel zo groot dat 200 kopieën veel geheugen zouden gebruiken, bewaart er minder, maar nooit minder dan de nieuwste 20). Wijzigingen op het tekenblad (een snede, een verplaatst GD&T-symbool) staan in dezelfde lijst. Een bestand openen of een nieuw onderdeel starten, wist de lijst.

:::mac
Op een Mac gebruikt u ⇧⌘Z om opnieuw te doen. In Safari kan ⌘Y in plaats daarvan de geschiedenis van de browser openen.
:::
