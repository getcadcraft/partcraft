---
title: Vlakken door een krommennetwerk (Gordonvlak)
summary: Maak één glad vlak door een raster van profiel- en geleidekrommen die in schetsen zijn getekend of uit modelranden komen, sluit het tot een volume als de profielen gesloten zijn, en wat exact is, wat wordt gepast, en de meldingen wanneer een netwerk niet past.
keywords: raaklijn, G1, raaklijnen, raaklijncontinuïteit, spiegelvlak, Gordonvlak, krommennetwerk, grensvlak, netvlak, netwerkvlak, profielen, geleiders, geleidekrommen, lofting met geleiders, geleiderails, huid, transfiniet, Coons, B-splinevlak, vrij vormgegeven vlak
from: ada3cb8b
---

:::note
**Nog niet beschikbaar in deze versie.** Het Gordonvlak heeft een exacte geometriekernel nodig, die deze versie van PartCraft niet heeft: hij bouwt elk onderdeel met de mesh-kernel. [Wat nog niet beschikbaar is](topic:not-built-yet) zegt wat u in plaats daarvan kunt doen. De rest van deze pagina beschrijft het zoals het werkt met een exacte kernel.
:::

Een **Gordonvlak** is één vlak dat door elke kromme van een netwerk gaat: een reeks **profielen** die de ene kant op lopen en een reeks **geleiders** die de andere kant op lopen, elkaar kruisend als de draden van een net. Zo vormt u een romp, een spatbord of een handvat uit een paar doorsnedekrommen die u rechtstreeks bestuurt. Het heeft de **exacte kernel** nodig (zie [De mesh-kernel](topic:solid-kernels)).

## Het netwerk tekenen

1. Teken de **profielen**: twee of meer krommen naast elkaar, bijvoorbeeld doorsneden op evenwijdige vlakken. Lijnen, bogen, cirkels en splines werken allemaal, en een keten van krommen die uiteinde-aan-uiteinde zijn verbonden telt als één kromme.
2. Teken de **geleiders**: twee of meer krommen die de profielen dwars doorkruisen. Elke geleider moet elk profiel één keer kruisen, en elk profiel elke geleider één keer.
3. Zorg dat de krommen echt samenkomen. Teken de schets van een geleider zo dat de kromme door de punten van de profielen gaat (snap op geprojecteerde punten, of typ de coördinaten). Het netwerk accepteert openingen tot de **Tolerantie** (in het begin 0.01 mm).

Eén schets kan meerdere krommen bevatten: elke afzonderlijke keten erin is een eigen kromme. U kunt dus alle geleiders in één schets op het bovenvlak tekenen, bijvoorbeeld.

## Het vlak maken

1. Kies {{ui:Meer}} in de groep Features, en daarna {{ui:Gordonvlak}}.
2. PartCraft neemt de schetsen die nog niemand gebruikt: die in vlakken evenwijdig aan de eerste worden **profielen**, de andere **geleiders**. Controleer de lijst rechts en zet elke schets op **Profielen**, **Geleiders** of **Niet gebruikt**.
3. Om randen van het onderdeel te gebruiken, klikt u op **Randen kiezen als profielen** (of **als geleiders**), klikt u op de randen in het beeld en drukt u daarna op Esc.

Het resultaat is een **oppervlaklichaam**. {{ui:Verdikken}} maakt er een volume van, {{ui:Hechten}} naait het aan andere vlakken en {{ui:Vlak bijsnijden}} snijdt het.

### Sluiten tot een volume

Wanneer de profielen gesloten krommen zijn (cirkels, gesloten splines, gesloten ketens) en het eerste en laatste profiel elk plat in een vlak liggen, vinkt u **Sluiten tot volume** aan. De uiteinden worden afgesloten met platte vlakken en de gesloten vorm voegt zich samen, snijdt, doorsnijdt of wordt een nieuw lichaam zoals elke andere feature. Zo maakt u een loft die geleidekrommen volgt. Hetzelfde werkt met gesloten geleiders.

## Raken aan een vlak langs een rand

Een Gordonvlak gaat door zijn krommen, maar op zichzelf past het niet bij de helling van wat het raakt. Om het **raaklijn** (G1) aan een vlak te laten verlaten, zoals een spiegelvlak, zodat de gespiegelde kopie zonder knik aansluit, of een plat vlak waaruit het groeit:

1. Selecteer de Gordon-feature. Kies onder **Raaklijn aan** een vlak in {{ui:Voeg een vlak toe…}} (Voor, Boven, Rechts of een referentievlak), of kies een plat vlak in het beeld en druk op {{ui:Voeg het gekozen platte vlak toe}}.
2. PartCraft vindt de randkromme van het netwerk die in dat vlak ligt, en het vlak verlaat die raaklijn aan het vlak.

Als een vlak twee randkrommen bevat (een vloer onder beide uiteinden), voeg het dan twee keer toe: elke kopie neemt de volgende. Tot vier vlakken, één per rand.

Het rapport zegt langs welke kromme elk vlak raaklijn maakte, en de steilste hoek die het vlak eerder met dat vlak maakte. Geleiders die die kromme al raaklijn aan het vlak verlaten, worden exact gevolgd. Geleiders die er van wegklimmen, worden in een smalle strook dicht bij de rand gebogen; de waarde "volgt elke kromme binnen" in het rapport zegt hoeveel. Teken de geleiders die de rand vlak verlaten voor een exacte pasvorm.

## Wat exact is en wat gepast wordt

Het paneel zegt welke van deze van toepassing is, en hoe ver het vlak van uw krommen afwijkt.

- **Exact**: wanneer elke kromme polynoom is (lijnen, splines en ketens daarvan) en de geleiders alle profielen kruisen op dezelfde parameters, is het vlak precies het Gordonvlak van die krommen. Een netwerk van isokrommen uit een bicubisch vlak geeft dat vlak terug, en vier rechte lijnen geven een plat of getwist (bilineair) vlak.
- **Gepast**: bogen, cirkels en randen van het onderdeel zijn niet polynoom, en krommen die op verschillende parameters kruisen moeten opnieuw worden getimed zodat de kruispunten uitlijnen. Die krommen worden gepast met kubische B-splines binnen één tienmiljoenste van de grootte van het netwerk (ongeveer 0.00001 mm voor een onderdeel van 100 mm). Een cilinderpatch van bogen en lijnen blijft binnen 0.00001 mm van de echte cilinder.

Tussen de krommen is het vlak wat de methode geeft: de profielen geïnterpoleerd over de breedte, plus de geleiders geïnterpoleerd, minus de interpolatie van hun kruispunten. Het is overal glad behalve waar een kromme een scherpe hoek heeft. Waar twee Gordonvlakken een randkromme delen, sluiten ze rand-op-rand aan (G0), niet raaklijn.

## Wanneer een netwerk niet past

| Melding | Wat u moet doen |
|---|---|
| "… komen niet samen: ze liggen 0.4 mm uit elkaar" | Laat dat profiel en die geleider kruisen, of verhoog de Tolerantie |
| "… raakt … 2 keer" | Een geleider mag elk profiel maar één keer kruisen: splits een lussende kromme, of gebruik minder profielen |
| "… in een andere volgorde" of "vouwt over zichzelf" | Twee geleiders kruisen elkaar (of twee profielen). De families moeten naast elkaar lopen |
| "minstens twee profielen en twee geleiders" | Voeg krommen toe, of zet meer schetsen op Profielen of Geleiders |
| "open en gesloten krommen mengen" | Maak alle profielen open of allemaal gesloten (hetzelfde voor de geleiders) |
| "Een uiteinde … is niet plat, dus het kan niet worden afgesloten" | Teken het eerste en laatste gesloten profiel elk in één vlak, of laat Sluiten tot volume uit |

## Beperkingen

- Eén B-splinevlak per netwerk: geen G1- of G2-raaklijn aan naburige vlakken.
- De naad van een gesloten netwerk, bij de eerste geleider, is rand-op-rand verbonden maar niet raaklijn.
- De feature Loft zelf heeft geen geleiderails; gebruik in plaats daarvan een Gordonvlak dat tot een volume is gesloten.
- Zeer kronkelige krommen, of kruispunten die zeer ongelijkmatig langs de ene kromme verdeeld zijn ten opzichte van een andere, kunnen te veel punten nodig hebben om te passen; de feature zegt dat dan.
