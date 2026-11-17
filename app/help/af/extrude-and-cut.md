---
title: Ekstrudeer 'n verhoging en sny daardeur
summary: Maak 'n skets in 'n soliede met Ekstrudeer, stel blinde, middelvlak, tot-vlak- of twee-rigting-dieptes, 'n taps, of een kontoer van die skets, en skets dan op 'n vlak en Snit 'n holte of 'n deurgaande gleuf.
keywords: ekstrudeer, verhoging, geekstrudeerde verhoging, snit, geekstrudeerde snit, holte, deur alles, blind, middelvlak, omkeer, diepte, snit-ekstrudeer, verhoging-ekstrudeer, pad, tot vlak, tot volgende vlak, tot hoekpunt, verskuiwing vanaf oppervlak, rigting 2, twee rigtings, skuins tydens ekstrudering, taps, kontoer, streek, gekose kontoere
from: 3b13ff10
---

{{ui:Extrude}} stoot 'n skets se geslote profiel reguit uit sy vlak om materiaal te maak. {{ui:Cut}} doen dieselfde, maar verwyder materiaal. Albei is onderlangs dieselfde kenmerk; jy kan later van die een na die ander wissel.

## Ekstrudeer 'n verhoging

1. Teken 'n geslote profiel en sluit die skets (sien [Teken jou eerste skets](topic:sketch-basics)). Dit bly gekies.
2. Kies {{ui:Extrude}}.

'n 10 mm-soliede verskyn, "Extrude1" voeg by die geskiedenis by met sy skets ingespring daaronder, en die statusbalk sê "Extrude1 added. Change its numbers on the right." › "Extrude1 bygevoeg. Verander sy getalle aan die regterkant."

**Watter skets gebruik word:** die skets wat jy net gesluit het, of die skets wat in die geskiedenis gekies is. Met niks gekies nie, neem PartCraft die jongste skets wat nog geen kenmerk gebruik nie. As daar geen is nie: "Maak eers 'n skets: kies 'n vlak, {{ui:Sketch}}, teken 'n geslote profiel, {{ui:Exit}}."

### Stel die diepte en rigting

In die regter paneel:

| Instelling | Keuses | Verstek |
|---|---|---|
| **Operation** | Verhoging (voeg materiaal by), Snit (verwyder materiaal), Snyding (hou die oorvleueling), Nuwe liggaam (nog nie gebou in hierdie weergawe nie: dit benodig 'n presiese kern) | Verhoging |
| **End** | Blind ('n diepte), Middelvlak (albei kante), Deur alles, Tot vlak of werkvlak, Tot volgende vlak, Tot hoekpunt, Verskuiwing vanaf vlak | Blind |
| **Depth (mm)** | Enige grootte bo nul (gewys vir Blind en Middelvlak) | 10 |
| **Reverse direction** | Groei na die ander kant van die skets-vlak (nie gewys vir Middelvlak nie) | Af |

Tik 'n getal en druk {{key:Enter}} of {{key:Tab}}: die onderdeel herbou dadelik. **Middelvlak** sit die helfte van die diepte aan elke kant van die skets.

### Tot 'n vlak, die volgende vlak of 'n hoekpunt

Nog nie gebou in hierdie weergawe nie: elke "tot"-einde benodig 'n presiese kern, en die kenmerk sê "Extruding up to a face, the next face or a vertex: not built yet (it needs an exact kernel)." › "Ekstrudering tot 'n vlak, die volgende vlak of 'n hoekpunt: nog nie gebou nie (dit benodig 'n presiese kern)." Gebruik 'n Blinde diepte wat jy meet. Met 'n presiese kern werk die eindes so:

- **Tot vlak of werkvlak**: **Up to** neem 'n plat vlak (Kies, dan klik daarop) of 'n verwysingsvlak. 'n Vlak parallel aan die skets gee 'n presiese diepte; 'n skuins vlak sny die einde op die helling. As die vlak agter die skets is: "… Probeer Omkeer rigting."
- **Tot volgende vlak**: stop by die eerste plat vlak van die liggaam wat die ekstrusie ontmoet (geboë vlakke word hier nie ondersteun nie: dit sê so).
- **Tot hoekpunt**: stop gelyk met 'n hoekpunt (klik naby die einde van 'n rand) of 'n punt-kenmerk.
- **Verskuiwing vanaf vlak**: soos Tot vlak, maar stop **Offset (mm)** kort daarvan (gemeet haaks op die vlak).

### Twee rigtings, taps, een kontoer

- **Second direction** (Blind): ekstrudeer ook **Second depth (mm)** na die ander kant van die skets.
- **Taper (°)**: die sye leun in soos hulle gaan, soos 'n skuins; net een rigting. Nog nie gebou in hierdie weergawe nie (dit benodig 'n presiese kern): laat dit op 0.
- **Regions**: **Pick regions**, dan klik binne die lusse om te ekstrudeer; net daardie streke word gebruik (’n sirkel binne 'n vierkant: klik binne die sirkel vir 'n silinder, tussen hulle vir 'n plaat met 'n gat). **All** gaan terug na elke lus.

Onder hierdie lys **Sketch dimensions** die skets se aandrywende afmetings, sodat jy die profiel se groottes kan verander sonder om die skets oop te maak.

:::note
**Through all is net vir snitte.** 'n Verhoging wat op Through all gestel is, misluk met "Through all is for cuts. Use a depth for a boss." › "Deur alles is vir snitte. Gebruik 'n diepte vir 'n verhoging." Om 'n kenmerk van Snit terug na Verhoging te wissel, verander Deur alles na Blind vir jou.
:::

## Snit 'n holte

1. Klik op die plat vlak waarin jy wil sny. Dit verlig, en die regter paneel sê **Face**.
2. Kies {{ui:Sketch on this face}} (of {{ui:Sketch}} in die nutsbalk).
3. Teken die holte se omtrek, byvoorbeeld 'n reghoek, en dimensioneer dit.
4. Kies {{ui:Exit}}.
5. Kies {{ui:Cut}}. Dit begin as **Through all**: dit verwyder materiaal reg deur die onderdeel.
6. Vir 'n holte, stel **End** op **Blind (a depth)** en tik die **Depth (mm)**.

'n Snit gaan die materiaal in, weg van die vlak waarop jy geskets het. As die statusbalk sê "There is nothing to cut on that side of the sketch. Try the other direction.", merk **Reverse direction**. › "Daar is niks aan daardie kant van die skets om te snit nie. Probeer die ander rigting.", merk **Omkeer rigting**.

'n Skets op die holte se vloer volg die vloer: verander die holtediepte en die skets beweeg saam daarmee.

## Trek of stoot 'n hele vlak

Om 'n vlak uit te laat staan of in te sak, hoef jy nie sy omtrek te teken nie. Klik op die plat vlak, en in die regter paneel:

- {{ui:Extrude from it}} trek die vlak uit: PartCraft voeg 'n skets op die vlak by wat sy omtrek hou (gate in die vlak bly gate) en 'n Ekstrudeer van 10 mm.
- {{ui:Cut into it}} stoot die vlak in: dieselfde skets en 'n Snit halfpad die onderdeel in.

Albei is een stap: {{key:Mod+Z}} neem die skets en die kenmerk saam weg. Die nuwe kenmerk is gekies, so tik dadelik 'n getal en druk {{key:Enter}} vir sy diepte. Die omtrek word as vaste lyne en bôë gekopieer: dit volg nie latere veranderinge aan die vlak nie. As deel van die omtrek nie gekopieer kan word nie (’n vrye kromme), open die skets eerder met wat gekopieer kon word; voltooi dit, kies dan {{ui:Exit}} en {{ui:Extrude}} of {{ui:Cut}}.

## Profiele met eilande

'n Skets kan verskeie geslote lusse hou. Lusse langs mekaar word aparte verhogings (of snitte); 'n lus binne 'n ander word 'n gat deur die verhoging. Byvoorbeeld, 'n reghoek met twee sirkels binne ekstrudeer as 'n plaat met twee gate.

Om net sommige lusse te gebruik, kies hulle met **Regions** (hierbo); 'n ander kenmerk kan die ander lusse van dieselfde skets gebruik.

## Wysig later

- Klik op "Extrude1" in die geskiedenis om sy instellings terug te bring.
- Dubbelklik op sy skets (ingespring daaronder) om die skets oop te maak; maak dit toe om te herbou.
- Sien [Verander 'n onderdeel deur sy geskiedenis](topic:edit-history) vir onderdrukking, terugrol, herrangskikking en verwydering.

## Algemene boodskappe

| Boodskap | Wat om te doen |
|---|---|
| "The sketch has no closed profile to extrude." › "Die skets het geen geslote profiel om te ekstrudeer nie." | Die skets het geen geslote lus van volle lyne nie. Sluit die gapings, of skakel konstruksielyne terug met {{key:Q}} |
| "The profile is open: an end at (x, y) is not joined to anything." › "Die profiel is oop: 'n einde by (x, y) is aan niks gekoppel nie." | Maak die skets oop en koppel daardie einde aan die volgende lyn |
| "There is nothing to cut yet." › "Daar is nog niks om te snit nie." | 'n Snit benodig 'n soliede om te snit. Maak eers 'n verhoging |
| "Nothing is left of the part after this." › "Niks van die onderdeel bly oor na hierdie nie." | Die snit het alles verwyder. Kontroleer sy grootte en rigting |

Meer in [Foutoplossing](topic:troubleshooting).
