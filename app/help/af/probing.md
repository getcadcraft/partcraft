---
title: Toetsing: vind die onderdeel en stel die werkverskuiwing
summary: Raak 'n boonste vlak, 'n sy, 'n gat of 'n uitsteeksel met 'n toets aan en laat die beheerder die werkverskuiwing skuif na waar die onderdeel werklik is, of meet net. Wat elke beheerder kan doen, en wat nie bewys is nie.
keywords: toets, toetsing, raaktoets, raak af, werkverskuiwing, g54, g31, g38.2, oorslaan, datum, vind middelpunt, boor, uitsteeksel, rand, stel nul, meet, inspeksie, g10
from: 1f718b82
---

{{ui:Toets}} in Vervaardiging skryf 'n toetssiklus in die program: die toets raak die onderdeel aan, en die beheerder skuif die werkverskuiwing (G54) met die verskil tussen waar die oppervlak gevind is en waar die model sê dit is. Latere bewerkings sny dan waar die onderdeel werklik is.

**Niks hier is op 'n masjien uitgevoer nie.** Die bewegings voor 'n raak is gewone bewegings: die toets word nie dopgehou tot die toetsbeweging self nie. Loop dit stadig, eers in die lug, met jou hand op voerstilstand.

## Gebruik dit

1. Op die **Gereedskap**-oortjie voeg die eerste toetsbewerking 'n **raaktoets** by: sy balddeursnee, en die toetsvoer (100 mm/min tensy jy een stel).
2. Druk {{ui:Meer}} in die Vervaardiging-werkbalk, dan {{ui:Toets}}, en klik op wat om aan te raak. Elke keuse is een siklus, in die volgorde waarin jy klik:

| Keuse | Die siklus | Wat gestel word |
|---|---|---|
| 'n Plat vlak wat langs die gereedskapas opkyk | Een raak wat afwaarts gaan | Z |
| 'n Plat sy-vlak reg op X of op Y | Een raak wat na die vlak toe gaan, 'n bietjie onder sy bo | X of Y |
| 'n Gat of 'n uitsteeksel langs die gereedskapas | Vier rake (+X, −X, +Y, −Y) | X en Y van sy middelpunt |

3. **Met die resultaat**: {{ui:Stel die werkverskuiwing}} of {{ui:Meet net}}.
4. **Begin so ver weg** en **Soek so ver verby** is hoe ver van die verwagte oppervlak die toetsbeweging begin en hoe ver verby dit die toets mag reis voordat die beheerder opgee. **Diepte** is hoe ver onder die bo van 'n gat, uitsteeksel of sy-vlak die bal gaan.

Plaas die toetsbewerking eerste, voor enigiets sny.

## Wat elke beheerder skryf

| Beheerder | Raak | Resultaat |
|---|---|---|
| Fanuc-styl | `G31`, die posisie wat in `#101` tot `#104` gehou word | Die verskuiwingsveranderlikes (`#5221` tot `#5223`) word geskuif deur gevind − verwag. Meet net: die verskil bly in `#110` (en `#111`). |
| LinuxCNC | `G38.2`, die posisie wat in benoemde parameters gehou word | `G10 L2 P1` met die nuwe verskuiwing. Meet net: 'n `(DEBUG, …)`-boodskap. |
| GRBL | `G38.2` | Een raak stel die as met `G10 L20 P1`. GRBL het geen veranderlikes nie, so dit **kan nie 'n middelpunt uitwerk nie**: die lêer sê dit in 'n kommentaar en stel niks nie. |

Die rekenkunde is die post s'n, so jy kan dit verander: die gebeurtenisse is `probe-move` en `probe-set` ([Postprosessors wat jy kan wysig](topic:post-processors)).

## Limiete

- Een werkverskuiwing (G54). Vlakke reg op die asse alleen: geen hoek, geen hoeksiklus, geen rotasie van die werk nie.
- Geen gereedskapsetter nie, geen gebreekte-gereedskap-kontrole, geen meting van 'n grootte teen 'n toleransie, geen verslag nie.
- Die spil word nie vir 'n toets begin nie en koelmiddel bly af; niks kontroleer dat die gereedskap in die spil 'n toets is nie.
- Die voorraadsimulasie loop nie 'n toetspad nie.
- Die toets se eie kalibrasie (balverskuiwing, pendeldefleksie, snerprigting) is die beheerder s'n.
