---
title: Plaatwerk: flenzen en de uitslag
summary: Een plaatwerkonderdeel starten vanuit een schets (een vlakke plaat of een gebogen profiel), de plaatdikte, buigradius en K-factor eenmalig instellen, flenzen omhoog buigen vanaf de randen met buigontlastingen, en het plat leggen als DXF om te snijden.
keywords: uitslag, uitvouwen, ontwikkeling, ontwikkelde lengte, buigtoeslag, buiglijn, dxf voor laser, lasersnijden, plaatwerk, basisflens, randflens, flens, buiging, buigradius, k-factor, k factor, dikte, plaatdikte, ontlasting, buigontlasting, U-profiel, beugel, behuizing, gebogen plaat
from: 144bd0f6
---

:::note
**Nog niet beschikbaar in deze versie.** Plaatwerk heeft een exacte geometriekern nodig, die deze versie van PartCraft niet heeft: het bouwt elk onderdeel met de meshkern. [Wat nog niet beschikbaar is](topic:not-built-yet) zegt wat u in plaats daarvan kunt doen. De rest van deze pagina beschrijft het zoals het werkt met een exacte kern.
:::

Plaatwerkonderdelen beginnen met een **Basisflens**. Die bepaalt de plaat voor het hele onderdeel: de **dikte**, de **binnenste buigradius** en de **K-factor**. Elke **Randflens** erna buigt met diezelfde getallen, zodat het onderdeel één plaat blijft die kan worden uitgevouwen. Beide hebben de **exacte kern** nodig (zie [De meshkern](topic:solid-kernels)).

## Beginnen met een basisflens

1. Teken een schets. Gebruik een **gesloten profiel** voor een vlakke plaat (een rechthoek, of elke gesloten omtrek met gaten). Gebruik **één open keten van lijnen** voor een gebogen plaat, zoals een L, een U of een Z getekend als de kantaanzicht van de plaat.
2. Selecteer de schets in de featuregeschiedenis.
3. Open {{ui:Meer}} in de groep Features en kies {{ui:Basisflens}}.

In het paneel rechts:

- **Dikte (mm)** is de plaatdikte.
- **Buigradius (mm)** is de binnenste radius van elke buiging. 0 geeft een scherpe binnenhoek; de buitenkant buigt nog steeds met een radius van één dikte.
- **K-factor** geeft aan waar de neutrale laag in de plaat ligt, van 0 (het binnenvlak) tot 0,5 (het midden). Die bepaalt hoe lang de plaat is als hij plat ligt. 0,44 is de standaard; uw werkplaats of materiaalleverancier kan u de eigen waarde geven.
- **Diepte (mm)** is hoe ver een gebogen profiel uit het schetsvlak loopt. Een plaat negeert dit.
- **Dikte buiten de buigingen**: een open profiel is één vlak van de plaat. Standaard komt de dikte aan de binnenkant van de eerste buiging, dus de lijnen die u tekende zijn de buitenkant van het kanaal. Vink dit aan om de lijnen aan de binnenkant te zetten. Het resultaat is hetzelfde, vanaf welk uiteinde u ook tekende.

Elke hoek van een open keten wordt een buiging. Een lijn die te kort is voor zijn buigingen, zegt dat, met de lengte die hij nodig heeft.

## Een randflens buigen

1. Klik op een rechte rand van het boven- of onderlvak van de plaat (de lange randen, niet de dunne).
2. Kies {{ui:Meer}} › {{ui:Randflens}}. Als er geen rand is gekozen, wacht PartCraft tot u er een aanklikt; Esc annuleert.

De flens buigt omhoog vanaf het vlak van die rand rond de binnenste radius van de plaat, en loopt dan recht door. In het paneel:

- **Hoek (°)** is hoe ver hij buigt, van 1 tot 180. 90 is een rechte flens.
- **Lengte (mm)** is het rechte been na de buiging.
- **Andere kant buigen** buigt hem vanaf het andere vlak (omlaag in plaats van omhoog).
- **Verschuiving aan het begin** en **Verschuiving aan het eind** verkorten de flens vanaf elk uiteinde van de rand.
- **Buigontlasting**: wanneer een uiteinde is verschoven, wordt er naast de buiging een sleuf in de plaat gesneden, zodat de buiging het metaal daar niet scheurt. **Breedte ontlasting** bepaalt de breedte van de sleuf; de diepte is de buigradius plus de dikte. Kies **Geen** om de hoek ongesneden te laten.

Om de rand later te wijzigen, drukt u in het paneel op {{ui:Kiezen}} en klikt u op een andere.

:::tip
Gebruik parameters voor de dikte en radius (zie [Parameters en vergelijkingen](topic:parameters)), zodat een wijziging van de plaatdikte alle flenzen in één keer bijwerkt.
:::

## Plat leggen

Beide panelen eindigen met **Platte uitslag**. Druk op {{ui:Plat leggen}}:

- Een voorbeeld toont de plaat uitgevouwen, met de middellijn van elke buiging gestippeld.
- **Grootte** en **Oppervlakte** zijn die van de platte uitslag.
- Elke buiging wordt vermeld met haar richting (**omhoog** of **omlaag**, gezien vanaf de schetszijde van de basisflens), hoek en binnenste radius.

Elke buiging neemt de lengte van de neutrale laag erdoor, de **buigtoeslag**: hoek (in radialen) × (binnenste radius + K-factor × dikte). Een buiging van 90° van een plaat van 2 mm met een radius van 2 mm en K-factor 0,44 voegt dus 4,52 mm platte plaat toe.

Bij een vlakke plaat tonen gaten, uitsnijdingen en buigontlastingen in de uitslag zich precies waar ze werkelijk zitten, ook gaten door een flens.

Om veel stuks te snijden, drukt u onder de platte uitslag op {{ui:Nesten op platen…}}: zie [Platte onderdelen nesten op platen](topic:nest-flat-parts). Een gebogen basisflens legt uit als één rechthoek: zijn ontwikkelde lengte × zijn diepte, met een buiglijn per hoek.

{{ui:DXF opslaan}} slaat de platte uitslag op voor een laser, ponsmachine of waterjet, in millimeter:

- de omtrek op laag **OUTLINE**, als lijnen, bogen en cirkels;
- de buiglijnen op laag **BEND**, gestippeld;
- een notitie bij elke buiging op laag **BEND_NOTES**, zoals "UP 90° R2".

Wijzig iets en de uitslag verdwijnt; druk opnieuw op {{ui:Plat leggen}} voor de nieuwe.

:::note
Controleer de K-factor met uw werkplaats voordat u snijdt: de lengte van de uitslag hangt ervan af, en die verschilt per materiaal, dikte en gereedschap.
:::

## Meldingen

- **Plaatwerk heeft een basisflens nodig ervoor** — er is een randflens toegevoegd vóór een basisflens. Verplaats hem onder een basisflens, of voeg eerst een basisflens toe.
- **Een randflens heeft een rechte rand nodig** — flenzen buigen alleen langs lijnen; gebogen randen kunnen er nog geen krijgen.
- **Die rand ligt niet op een vlak van de dikte van de plaat** — de rand hoort bij een vlak dat niet de boven- of onderkant van de plaat is (bijvoorbeeld de wand van een gat). Kies een rand van het boven- of onderlvak.
- **De verschuivingen laten niets over van de rand** — de twee verschuivingen zijn samen gelijk aan de hele rand of meer.
- **Randflenzen op een gebogen basisflens kunnen nog niet plat worden gelegd** — begin met een vlakke plaat en buig alles omhoog met randflenzen, die weer uitvouwen.
- **Sneden en gaten die na een gebogen basisflens zijn gemaakt, worden nog niet in de uitslag getoond** — de uitslag van een gebogen profiel is alleen de ontwikkelde rechthoek.
