---
title: Uitvegen, loft en trekhoek
summary: Veeg een gesloten profiel langs een pad van schetskrommen of modelranden, loft door doorsneden op verschillende vlakken, en voeg trekhoek toe aan vlakken; met de opties, de exacte resultaten en de meldingen.
keywords: uitvegen, uitveeg-uitsteeksel, uitveeg-uitsnijding, buis, pad, loft, loft-uitsteeksel, overgangsdoorsneden, rechtlijnig, trekhoek, trekhoek-hoek, conische vlakken, neutraal vlak, trekrichting, gieten
from: 9d637981
---

:::note
**In deze versie** zijn uitvegen en loft nog niet beschikbaar: ze hebben een exacte geometriekernel nodig, die deze versie van PartCraft niet heeft. [Wat nog niet beschikbaar is](topic:not-built-yet) zegt wat u in plaats daarvan kunt doen; de secties Uitvegen en Loft beschrijven ze zoals ze werken met een exacte kernel. **Trekhoek werkt** op vlakke vlakken: de meshkernel bouwt het, met hetzelfde resultaat dat een exacte kernel geeft.
:::

Alle drie staan in het menu {{ui:Meer}} van de groep Features (zie [De meshkernel](topic:solid-kernels)). Elk kan materiaal toevoegen, het wegsnijden, alleen de overlap houden (**Doorsnede**) of een **Nieuw lichaam** maken (uitvegen en loft: **Bewerking** in het paneel).

## Uitvegen

Bij uitvegen verplaatst u een gesloten profiel langs een pad: buizen, handgrepen, draadveren, rails.

1. Teken het **pad** in één schets: lijnen en bogen die uiteinden aan elkaar zijn verbonden (of gebruik modelranden, hieronder).
2. Teken het **profiel** in een andere schets waarvan het vlak door één uiteinde van het pad gaat, bijvoorbeeld een cirkel op het bovenvlak aan het begin van een pad dat op het voorvlak is getekend.
3. Selecteer de profielschets en kies {{ui:Meer}}, dan {{ui:Uitvegen}}. De meest recente andere schets wordt het pad.

In het paneel:

| Instelling | Wat het doet |
|---|---|
| **Pad** | Vink de schetsen aan die het pad vormen (meerdere schetsen sluiten aan elkaar tot één 3D-pad); **Modelranden kiezen** voegt randen van het onderdeel toe |
| **Oriëntatie** | Volg het pad (standaard), Frenet, Vast (doorsneden blijven evenwijdig aan het profiel), Een richting behouden, Langs een geleidekromme |
| **Eindschaal** | Het profiel groeit of krimpt lineair tot deze grootte aan het einde (1 = constant) |

Scherpe hoeken in het pad worden geverstekt. Een cirkel met straal 5 die langs een lijn van 100 mm wordt uitgevegd, is een cilinder van precies 2500π mm³; langs een kwartboog met straal 50 een kwart torus van 625π² mm³.

## Loft

Een loft vloeit door twee of meer doorsneden op verschillende vlakken.

1. Teken elke doorsnede in een eigen schets (elk met één gesloten lus), op basisvlakken, referentievlakken (zie [Referentievlakken, assen en punten](topic:reference-geometry)) of vlakken.
2. Kies {{ui:Meer}}, dan {{ui:Loft}}. Elke ongebruikte schets met één lus wordt een doorsnede, in de volgorde van de geschiedenis.

Het paneel toont de doorsneden in volgorde (**Omhoog** verplaatst, **Verwijderen** haalt er één weg); **Een schets toevoegen** voegt er een andere toe, **Een vlak kiezen** voegt een vlak van het onderdeel toe. **Rechtlijnig** maakt vlakke vlakken tussen doorsneden in plaats van een gladde overgang. Tussen twee vierkanten zijn beide hetzelfde afgeknotte piramide (een vierkant van 40 mm naar een vierkant van 20 mm over 30 mm: precies 28000 mm³).

Doorsneden met een verschillend aantal zijden (een vierkant naar een driehoek) worden door OpenCascade op elkaar afgestemd, wat de zijvlakken kan verdraaien; de feature waarschuwt u. Teken doorsneden met hetzelfde aantal zijden, beginnend bij overeenkomstige hoeken, voor het schoonste resultaat.

### Geleiderails

Geleiderails zijn krommen die de zijden van de loft moeten volgen van de eerste tot de laatste doorsnede, voor een bolling, een taille of een uitloop die u zelf tekent.

1. Teken twee of meer rails: open krommen (lijnen, bogen, splines) die van de eerste tot de laatste doorsnede lopen en elke doorsnede één keer kruisen. Eén schets kan meerdere rails bevatten: elke afzonderlijke keten erin is een eigen rail. Teken een rail zo dat hij elke doorsnede echt raakt: laat de uiteinden op de punten van de doorsneden snappen.
2. Vink in het paneel Loft onder **Geleiderails** de schetsen aan die ze bevatten, of klik op {{ui:Kies modelranden als rails}} en klik op randen van het onderdeel ({{key:Esc}} beëindigt).

Met rails is de loft een Gordon-oppervlak door de doorsneden en de rails (zie [Oppervlakken door een krommennet](topic:gordon-surfaces)), aan beide uiteinden vlak afgesloten tot een volume. Het paneel vermeldt hoe nauwkeurig het ze volgt. Elke doorsnede moet dan een schets zijn (een punt of een vlak kan geen rail aannemen), en **Rechtlijnig** geldt niet. Een rail die een doorsnede met meer dan 0.01 mm mist, wordt geweigerd, met de opening.

Gecontroleerd: twee cirkels (diameters van 20 mm en 10 mm, op 40 mm afstand) met vier rechte rails geven het volume van de afgeknotte kegel binnen 0.000002 %; bogen die 5 mm uitbollen geven een ton die elke rail volgt binnen 0.00001 mm.

## Trekhoek

Trekhoek kantelt vlakken zodat een onderdeel uit een mal kan komen.

1. Kies {{ui:Meer}}, dan {{ui:Trekhoek}} (of klik eerst op vlakken met {{key:Shift}}+klik). Als er niets is gekozen, staat u in de keuzemodus: klik op elk vlak om te kantelen, en kies dan {{ui:Gereed}}.
2. Stel **Hoek (°)**, het **Neutrale vlak** (waar de vlakken hun grootte behouden) en de **Trekrichting** (standaard de normaal van het neutrale vlak) in.

Een positieve hoek kantelt het vlak naar binnen langs de trekrichting en verwijdert materiaal; een negatieve hoek voegt materiaal toe. Het neutrale vlak begint als het bovenvlak. In deze versie kunnen alleen vlakke vlakken worden getrokken: bij een cilinder, kegel of vrij vlak staat "Trekhoek: in deze versie alleen vlakke vlakken (de meshkernel bouwt het)." De vier zijden van een blok van 100 × 100 × 50 die 5° rond de onderkant worden getrokken, worden een afgeknotte piramide van precies h/3·(a² + b² + ab), met b = a − 2h·tan 5°.

## Meldingen

| Melding | Wat u doet |
|---|---|
| "Het vlak van het profiel moet door één uiteinde van het pad gaan …" | Verplaats de profielschets naar het begin (of einde) van het pad |
| "Het pad heeft een opening: de krommen sluiten niet aan elkaar …" | Verbind de krommen van het pad; in afzonderlijke schetsen moeten hun uiteinden precies samenkomen |
| "Een loftdoorsnede heeft precies één gesloten lus nodig" | Splits de schets, of verwijder de extra lus |
| "… kan niet rond dit neutrale vlak worden getrokken …" | Het vlak is evenwijdig aan het neutrale vlak of snijdt het niet |
| "Trekhoek: in deze versie alleen vlakke vlakken (de meshkernel bouwt het)." | Een gekozen vlak is gekromd. Verwijder het; trek alleen vlakke vlakken |

:::note
Nog niet beschikbaar: draaiende uitvegingen, uitvegingen van dunne wanden en van oppervlakken, loft-geleiderails en raaklijnen aan het eind, trekhoek op cilinders, kegels en vrije vlakken.
:::
