---
title: Tasten: het onderdeel vinden en het werknulpunt instellen
summary: Raak een bovenvlak, een zijkant, een gat of een bos aan met een tastkop en laat de besturing het werknulpunt verplaatsen naar waar het onderdeel werkelijk is, of meet alleen. Wat elke besturing kan, en wat niet is bewezen.
keywords: tasten, tastkop, aantasten, werknulpunt, G54, G31, G38.2, overslaan, referentie, middelpunt zoeken, boring, bos, rand, nul instellen, meten, controle, G10
from: 1f718b82
---

{{ui:Tasten}} in Fabricage schrijft een tastcyclus in het programma: de tastkop raakt het onderdeel aan, en de besturing verplaatst het werknulpunt (G54) met het verschil tussen waar het oppervlak werd gevonden en waar het model zegt dat het is. Latere bewerkingen snijden dan waar het onderdeel werkelijk staat.

**Niets hier is op een machine uitgevoerd.** De bewegingen voor een aanraking zijn gewone bewegingen: de tastkop wordt pas gevolgd bij de tastbeweging zelf. Voer het langzaam uit, eerst in de lucht, met uw hand op de voedingsstop.

## Gebruik

1. Op het tabblad **Gereedschap** voegt de eerste tastbewerking een **tastkop** toe: zijn kogeldiameter en de tastaanzet (100 mm/min tenzij u er een instelt).
2. Druk op {{ui:Meer}} in de werkbalk van Fabricage, dan op {{ui:Tasten}}, en klik op wat u wilt aantasten. Elke keuze is één cyclus, in de volgorde waarin u klikt:

| Keuze | De cyclus | Wat wordt ingesteld |
|---|---|---|
| Een vlak dat naar de gereedschapsas kijkt | Eén tast naar beneden | Z |
| Een vlakke zijkant loodrecht op X of Y | Eén tast naar het vlak, een beetje onder de bovenkant | X of Y |
| Een gat of een bos langs de gereedschapsas | Vier tasten (+X, −X, +Y, −Y) | X en Y van het middelpunt |

3. **Met het resultaat**: {{ui:Werknulpunt instellen}} of {{ui:Alleen meten}}.
4. **Begin zo ver weg** en **Zoek zo ver voorbij** zijn hoe ver van het verwachte oppervlak de tastbeweging begint en hoe ver voorbij het de tastkop mag reizen voordat de besturing opgeeft. **Diepte** is hoe ver onder de bovenkant van een gat, bos of zijvlak de bol gaat.

Zet de tastbewerking eerst, vóór iets snijdt.

## Wat elke besturing schrijft

| Besturing | Tast | Resultaat |
|---|---|---|
| Fanuc-stijl | `G31`, de positie bewaard in `#101` tot `#104` | De offsetvariabelen (`#5221` tot `#5223`) worden verplaatst met gevonden − verwacht. Alleen meten: het verschil blijft in `#110` (en `#111`). |
| LinuxCNC | `G38.2`, de positie bewaard in benoemde parameters | `G10 L2 P1` met de nieuwe offset. Alleen meten: een `(DEBUG, …)`-melding. |
| GRBL | `G38.2` | Eén aanraking stelt de as in met `G10 L20 P1`. GRBL heeft geen variabelen, dus het **kan geen middelpunt berekenen**: het bestand zegt dat in een opmerking en stelt niets in. |

De rekenwerk is van de postprocessor, dus u kunt die wijzigen: de gebeurtenissen zijn `probe-move` en `probe-set` ([Postprocessoren die u kunt bewerken](topic:post-processors)).

## Beperkingen

- Eén werknulpunt-offset (G54). Alleen vlakken loodrecht op de assen: geen hoek, geen hoekcyclus, geen draaiing van het werk.
- Geen gereedschapsinstelling, geen controle op een gebroken gereedschap, geen maat meten tegen een tolerantie, geen rapport.
- De spil wordt niet gestart voor een tast en het koelmiddel blijft uit; niets controleert of het gereedschap in de spil een tastkop is.
- De ruwdeelsimulatie draait geen tastpad.
- De eigen kalibratie van de tastkop (kogelafstand, tasterdoorbuiging, aanslagrichting) is van de besturing.
