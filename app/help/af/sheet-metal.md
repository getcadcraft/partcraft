---
title: Plaatmetaal: flense en die plat patroon
summary: Begin 'n plaatmetaalonderdeel vanaf 'n skets ('n plat plaat of 'n geboë profiel), stel die dikte, buigradius en K-faktor een keer, buig flense op vanaf sy rande met buigontlastings, en lê dit plat uit as 'n DXF vir snymasjiene.
keywords: plat patroon, ontvou, ontwikkeling, ontwikkelde lengte, buigtoelae, buiglyn, dxf vir laser, lasersny, plaatmetaal, basisflens, randflens, flens, buig, buigradius, k-faktor, k faktor, dikte, meter, ontlasting, buigontlasting, kanaal, beugel, omhulsel, geboë plaat
from: 144bd0f6
---

:::note
**Nog nie gebou in hierdie weergawe nie.** Plaatmetaal benodig 'n presiese meetkundekern, wat hierdie weergawe van PartCraft nie het nie: dit bou elke onderdeel met die maaskern. [Wat nog nie gebou is nie](topic:not-built-yet) sê wat om eerder te doen. Die res van hierdie bladsy beskryf dit soos dit met 'n presiese kern werk.
:::

Plaatmetaalonderdele begin met 'n **Basisflens**. Dit stel die plaat vir die hele onderdeel: sy **dikte**, die **binne-buigradius** en die **K-faktor**. Elke **Randflens** daarna buig met dieselfde getalle, sodat die onderdeel een plaat bly wat ontvou kan word. Albei benodig die **presiese kern** (sien [Die maaskern](topic:solid-kernels)).

## Begin met 'n basisflens

1. Teken 'n skets. Gebruik 'n **geslote profiel** vir 'n plat plaat ('n reghoek, of enige geslote omtrek met gate). Gebruik **een oop ketting van lyne** vir 'n geboë plaat, soos 'n L, 'n U of 'n Z wat as die plaat se kantaansig geteken is.
2. Kies die skets in die kenmerkgeskiedenis.
3. Maak {{ui:Meer}} oop in die Kenmerke-groep en kies {{ui:Basisflens}}.

In die paneel regs:

- **Dikte (mm)** is die plaat se dikte.
- **Buigradius (mm)** is die binneradius van elke buig. 0 gee 'n skerp binnehoek; die buitekant draai steeds met 'n radius van een dikte.
- **K-faktor** sê waar die neutrale laag binne die plaat sit, van 0 (die binnevlak) tot 0.5 (die middel). Dit bepaal hoe lank die plaat is wanneer dit plat gelê word. 0.44 is die verstek; jou werkswinkel of materiaalverskaffer kan jou eie waarde gee.
- **Diepte (mm)** is hoe ver 'n geboë profiel uit die skets se vlak loop. 'n Plaat ignoreer dit.
- **Dikte buite die buigings**: 'n oop profiel is een vlak van die plaat. Standaard gaan die dikte aan die binnekant van die eerste buig, sodat die lyne wat jy geteken het die buitekant van die kanaal is. Merk dit om die lyne eerder aan die binnekant te plaas. Die antwoord is dieselfde, vanaf watter kant jy ook al geteken het.

Elke hoek van 'n oop ketting word 'n buig. 'n Lyn wat te kort is om sy buigings te hou, sê dit, met die lengte wat dit nodig het.

## Buig 'n randflens

1. Klik op 'n reguit rand van die plaat se bo- of onderkant (die lang rande, nie die dun nie).
2. Kies {{ui:Meer}} › {{ui:Randflens}}. As geen rand gekies is nie, wag PartCraft vir jou om een te klik; {{key:Esc}} kanselleer.

Die flens buig op vanaf daardie rand se vlak om die plaat se binneradius, en loop dan reguit. In die paneel:

- **Hoek (°)** is hoe ver dit buig, van 1 tot 180. 90 is 'n vierkantige flens.
- **Lengte (mm)** is die reguit been na die buig.
- **Buig die ander kant toe** buig dit vanaf die ander vlak (af in plaas van op).
- **Verskuiwing by die begin** en **Verskuiwing by die einde** verkort die flens vanaf elke kant van die rand.
- **Buigontlasting**: as 'n kant verskuif is, word 'n gleuf langs dit in die plaat gesny sodat die buig nie die metaal daar skeur nie. **Ontlastingswydte** stel die gleuf se wydte; die diepte is die buigradius plus die dikte. Kies **Geen** om die hoek ongesny te laat.

Om die rand later te verander, druk {{ui:Kies}} in die paneel en klik op 'n ander een.

:::tip
Gebruik parameters vir die dikte en radius (sien [Parameters en vergelykings](topic:parameters)), sodat 'n verandering van dikte elke flens op een slag opdateer.
:::

## Lê dit plat

Albei paneel eindig met **Plat patroon**. Druk {{ui:Lê plat}}:

- 'n Voorskou wys die plaat ontvou, met elke buig se middellyn gestippel.
- **Grootte** en **Oppervlakte** is dié van die plat uitgangsstuk.
- Elke buig word gelys met sy rigting (**op** of **af**, gesien vanaf die basisflens se skets-kant), hoek en binneradius.

Elke buig neem die lengte van die plaat se neutrale laag daardeur, die **buigtoelae**: hoek (in radiale) × (binneradius + K-faktor × dikte). Dus voeg 'n 90°-buig van 'n 2 mm-plaat met 'n 2 mm-radius en K-faktor 0.44 4.52 mm plat plaat by.

Op 'n plat plaat verskyn gate, snitte en buigontlastings in die plat patroon waar hulle werklik is, insluitend gate deur 'n flens.

Om baie te sny, druk {{ui:Rangskik op velle…}} onder die plat patroon: sien [Rangskik plat onderdele op velle](topic:nest-flat-parts). 'n Geboë basisflens lê uit as een reghoek: sy ontwikkelde lengte × sy diepte, met 'n buiglyn per hoek.

{{ui:Stoor DXF}} stoor die plat patroon vir 'n laser, pons of waterstraal, in millimeter:

- die omtrek op laag **OUTLINE**, as lyne, boë en sirkels;
- die buiglyne op laag **BEND**, gestippel;
- 'n nota by elke buig op laag **BEND_NOTES**, soos "UP 90° R2".

Verander enigiets en die plat patroon verdwyn; druk {{ui:Lê plat}} weer vir die nuwe een.

:::note
Kontroleer die K-faktor met jou werkswinkel voordat jy sny: die plat se lengte hang daarvan af, en dit wissel met materiaal, dikte en gereedskap.
:::

## Boodskappe

- **Plaatmetaal benodig 'n basisflens voor dit** — 'n randflens is bygevoeg voor enige basisflens. Skuif dit onder een, of voeg eers 'n basisflens by.
- **'n Randflens benodig 'n reguit rand** — flense buig net langs lyne; geboë rande kan nog nie een neem nie.
- **Daardie rand is nie op 'n vlak van die plaat se dikte nie** — die rand behoort aan 'n vlak wat nie die plaat se bo- of onderkant is nie (byvoorbeeld 'n gat se wand). Kies 'n rand van die bo- of onderkant.
- **Die verskuiwings laat niks van die rand oor nie** — die twee verskuiwings tel op tot die hele rand of meer.
- **Randflense op 'n geboë basisflens kan nog nie plat gelê word nie** — begin vanaf 'n plat plaat en buig alles op met randflense, wat ontvou.
- **Snitte en gate wat na 'n geboë basisflens gemaak word, word nog nie in die plat patroon getoon nie** — die plat van 'n geboë profiel is net sy ontwikkelde reghoek.
