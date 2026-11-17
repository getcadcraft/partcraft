---
title: Splines, bijsnijden, offset en andere schetsgereedschappen
summary: Teken splines met passpunten en regelpunten, snijd en verleng krommen, maak een offset van een keten, spiegel om een hartlijn, voeg veelhoeken en sleuven toe, maak patronen van schetsgeometrie en projecteer randen van het model.
keywords: spline, passpunt, regelpunt, b-spline, nurbs, kromme, bijsnijden, verlengen, offset, spiegelen, symmetrisch, veelhoek, zeshoek, sleuf, patroon, lineair patroon, cirkelvormig patroon, projecteren, rand projecteren, opnemen, entiteiten converteren
from: 3ecb166a
---

Deze gereedschappen werken in een open schets. {{ui:Spline}} en {{ui:Bijsnijden}} staan in de werkbalk. De andere staan onder {{ui:Meer}}, aan het einde van de schetsgereedschappen. Elk gereedschap is één stap ongedaan te maken, en {{key:Esc}} stopt het. Voor de basistekengereedschappen zie [Teken uw eerste schets](topic:sketch-basics).

## Splines

Een spline is een gladde kromme. Er zijn twee soorten.

| Gereedschap | Toets | Hoe tekenen |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Klik de punten waar de kromme doorheen loopt. Beëindig met {{key:Enter}}, {{key:Esc}}, een rechtermuisklik of een dubbelklik. Klik het eerste punt opnieuw om de spline te sluiten |
| {{ui:Spline met regelpunten}} (onder {{ui:Meer}}) | | Klik de regelpunten. De kromme wordt naar hen toe getrokken, maar raakt alleen het eerste en het laatste punt. Het gestippelde regelpolygoon is zichtbaar terwijl u tekent en daarna |

- **De punten zijn schetspunten.** Sleep ze, of geef ze relaties en maten zoals elk ander punt. Het eerste punt van een spline kan snappen op het eind van een lijn, wat ze verbindt met een samenvallende relatie.
- **Raaklijn aan een eind.** Selecteer een lijn, boog of spline die aansluit op een eind van een spline, en de spline, kies daarna {{ui:T Raaklijn}}. De richting aan het eind van de spline volgt dan de lijn. Een raaklijn ergens anders dan aan de einden van de spline wordt geweigerd: "Een raaklijn aan een spline vereist dat de lijn, boog of spline aansluit op een van zijn einden."
- **Einden.** Zonder raaklijnrelatie zijn de einden van een spline met passpunten natuurlijk (geen kromming aan het allerlaatste eind). De kromme is kubiek en gaat door elk punt, met de tussenafstand bepaald door de afstanden tussen de punten.
- **Gesloten splines** maken op zich al een profiel. Open splines verbinden lijnen en bogen tot een gesloten lus, net als elke andere kromme.
- Een punt verwijderen binnen een spline verwijdert dat punt en behoudt de spline, zolang hij nog ten minste twee punten heeft (drie als hij gesloten is).

Extruderen en omwentelen bouwen de spline met de meshkernel op uit korte rechte stukken (echte krommen vereisen een exacte kernel: nog niet beschikbaar in deze versie). DXF-export schrijft een spline als polylijn die binnen 0.01 mm van de kromme blijft, omdat DXF R12 geen splineobject kent.

## Bijsnijden en verlengen

| Gereedschap | Toets | Hoe |
|---|---|---|
| {{ui:Bijsnijden}} | {{key:T}} | Wijs een kromme aan: het stuk dat zou verdwijnen wordt rood, tot aan de dichtstbijzijnde snijpunten. Klik om het te verwijderen. Een kromme die niets snijdt, wordt helemaal verwijderd |
| {{ui:Verlengen}} (onder {{ui:Meer}}) | {{key:E}} | Klik op een lijn of boog nabij het einde om te verlengen. Hij groeit tot de volgende kromme die hij raakt. "Er is niets waar dat einde naartoe kan." wanneer er niets in de weg staat |

Bijsnijden en Verlengen werken op lijnen, bogen, cirkels en splines (Verlengen: lijnen en bogen).

- Een bijgesneden **cirkel** wordt een boog. De straal- of diametermaat verhuist naar de boog.
- Het midden van een lijn bijsnijden laat twee lijnen die op dezelfde rechte lijn blijven liggen. Het midden van een boog bijsnijden laat twee bogen met hetzelfde middelpunt en een gelijk-relatie.
- Een bijgesneden **spline** wordt een spline met regelpunten die de oude kromme exact volgt. Een raaklijnrelatie aan een eind dat behouden blijft, blijft bestaan.
- Het nieuwe eind wordt op de kromme geplaatst die het heeft afgesneden (op de lijn, boog of cirkel, of samenvallend met zijn eind). Splines kunnen geen punt vasthouden, dus een spline die afsnijdt, voegt geen relatie toe.

**Relaties die niet meer passen, worden verwijderd**, en de statusbalk zegt hoeveel. Een lengtemaat op een bijgesneden lijn wordt bijvoorbeeld verwijderd, maar horizontale of evenwijdige relaties blijven bestaan.

## Offset

1. Kies {{ui:Offset}} onder {{ui:Meer}} of druk op {{key:O}}.
2. Klik een lijn, boog, cirkel of spline. De hele keten wordt gemarkeerd: alle krommen die eind-op-eind aan elkaar zitten, tot een punt waar drie of meer samenkomen. Om alleen een deel van een keten te offsetten, selecteert u eerst die krommen, kiest u daarna Offset en klikt u op een ervan.
3. Beweeg de aanwijzer naar de kant waar de kopie komt. Een gestippelde voorvertoning volgt. Druk op {{key:B}} voor beide kanten.
4. Klik, typ de afstand en druk op {{key:Enter}}.

Lijnen en bogen worden exact geoffset. Hoeken worden verlengd of bijgesneden totdat ze elkaar raken. De kopie heeft één **Offset**-maat, en de andere delen volgen die: dubbelklik op de maat om de hele kopie te wijzigen. Een afstand die te groot is voor de keten wordt geweigerd, bijvoorbeeld: "Deze afstand is te groot voor deze keten: een zijde zou binnenstebuiten slaan."

Een **spline** wordt geoffset door een nieuwe spline met passpunten die binnen 0.001 mm van de echte offset blijft. Deze kopie is vastgezet: ze volgt latere wijzigingen niet en heeft geen Offset-maat. Een spline in een keten heeft gladde (raaklijn-)verbindingen aan zijn einden nodig.

## Spiegelen

1. Kies met Selecteren wat u wilt spiegelen.
2. Kies {{ui:Spiegelen}} onder {{ui:Meer}} of druk op {{key:M}}.
3. Klik de lijn of hartlijn waarom gespiegeld moet worden.

Elk gespiegeld punt krijgt een **Symmetrisch**-relatie met zijn origineel, zodat de kopie meeveert wanneer het origineel verandert. Punten die op de spiegellijn liggen worden gedeeld, en gespiegelde cirkels krijgen een Gelijk-relatie. Als er niets geselecteerd was, klikt u de items om te spiegelen, drukt u op {{key:Enter}} en klikt u daarna de spiegellijn.

## Veelhoeken en sleuven

| Gereedschap | Hoe |
|---|---|
| {{ui:Veelhoek}} | Klik het middelpunt, daarna een hoekpunt, en typ het aantal zijden (3 tot 64). De zijden zijn gelijk en de hoekpunten liggen op een hulpcirkel. Maatvoer de cirkel om de veelhoek de juiste grootte te geven |
| {{ui:Sleuf}} | Klik het middelpunt van het ene eind, daarna het middelpunt van het andere eind, en klik daarna om de breedte in te stellen. Twee lijnen, raakend aan twee even grote halve cirkels |

## Schetspatronen

Selecteer eerst de geometrie, en kies daarna:

- {{ui:Lineair patroon}}: klik een startpunt, daarna waar de eerste kopie komt, en typ het aantal kopieën (inclusief het origineel).
- {{ui:Cirkelvormig patroon}}: klik het middelpunt en typ daarna het aantal kopieën, gelijkmatig verdeeld over een volledige omwenteling.

De kopieën nemen de relaties tussen de geselecteerde geometrie mee (een cirkelvormig patroon laat horizontale en verticale relaties weg). De kopieën zijn niet gekoppeld aan het origineel: wijzigt u er één, dan blijven de andere zoals ze zijn.

## Randen van het onderdeel projecteren

1. Kies {{ui:Rand projecteren}} onder {{ui:Meer}}.
2. Klik een rechte of cirkelvormige rand van het onderdeel achter de schets.

De rand wordt exact op het schetsvlak gekopieerd en vastgezet (Vastzetten-relatie). Ze volgt latere wijzigingen aan het onderdeel niet. Druk op {{key:Q}} om er hulpgeometrie van te maken. Een cirkel die schuin staat ten opzichte van het schetsvlak zou als ellips projecteren, dus die wordt geweigerd. Dat geldt ook voor vrije vormranden en randen die recht van de schets wegwijzen. Projecteren vereist een exacte kernel: nog niet beschikbaar in deze versie.
