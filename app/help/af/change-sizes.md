---
title: Verander groottes sonder om die skets oop te maak
summary: Bestuur 'n onderdeel vanaf die getalle in die regterpaneel: sketsmaate, dieptes, tellings en hoeke, hoe om 'n onderdeel só te beplan dat die regte getalle dit bestuur, en waar parameters en vergelykings oorneem.
keywords: parameters, bestuurmaate, ontwerpbedoeling, verander grootte, vergelykings, globale veranderlikes, ontwerptabel, konfigurasies, herskaal, wysig maat
from: c2ae1a32
---

Elke grootte in 'n PartCraft-onderdeel is 'n getal wat jy later kan verander: die maate in sy skets en die instellings van sy kenmerke. Jy hoef nie 'n skets oop te maak om sy maate te verander nie.

## Verander 'n skets se maat vanaf die paneel

1. Klik op 'n kenmerk in die geskiedenis, byvoorbeeld "Extrude1".
2. Onder die ekstrusie se eie instellings lys **Skets-maate (Sketch1)** elke maat van sy skets: "Afstand", "Deursnee", "Hoek (°)" en so meer.
3. Tik 'n nuwe waarde in een blokkie en druk {{key:Enter}} of {{key:Tab}}.

Die skets los op met die nuwe waarde, en die hele onderdeel word herbou. Die skets self kies wys dieselfde lys as **Bestuursmaate**.

'n Radius of deursnee moet groter as nul wees, en 'n hoek is tussen 0 en 180 grade; die statusbalk sê so as dit nie is nie.

:::tip
Watter blokkie is watter? Die blokkies word gelys in die volgorde waarin die maate gemaak is. As jy onseker is, maak die skets oop (dubbelklik dit), dubbelklik die maat op die doek, en verander dit daar.
:::

## Tik die hoofgetal dadelik

Kies 'n kenmerk in die geskiedenis (of voeg net een by) en tik 'n getal: dit gaan in die kenmerk se hoofblokkie, die een wat jy die meeste verander ('n ekstrusie se **Diepte**, 'n omwenteling se **Hoek**, 'n gat se **Deursnee**, 'n patroon se **Telling**, 'n afronding se **Radius**, 'n dop se wand). Druk {{key:Enter}} om dit te stel, of {{key:Esc}} om die ou een te behou. Om 'n ekstrusie by te voeg, sê die statusbalk dit: "Extrude1 bygevoeg. Verander die getalle daarvan regs, of tik nou 'n getal vir sy diepte."

## Verander die getal in die geskiedenis

Elke kenmerk se ry in die geskiedenis wys sy hoofgetal langs sy naam: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Dubbelklik die getal (of kies die ry en druk {{key:F2}}), en 'n blokkie open daar. Tik die nuwe waarde en druk {{key:Enter}}; {{key:Esc}} behou die ou een. Dit werk presies soos die kenmerk se blokkie regs: dieselfde perke, `=` om 'n vergelyking te tik soos `=width/2`, en een stap om te ontdoen.

By 'n ekstrusie, 'n gat of 'n patroon open 'n dubbelklik enige plek op die ry die blokkie. By 'n {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Shell}}, {{ui:Konsep}} of draad gaan 'n dubbelklik op die naam steeds na die kies van sy rande of vlakke, so dubbelklik die getal self. Skets het geen getal in die ry nie: 'n dubbelklik maak die skets oop.

## Sleep dit in die aansig

Kies 'n ekstrusie in die geskiedenis (of klik dit in die aansig, dan sy ry) en 'n oranje pyl staan op sy eindvlak, met die diepte in 'n blokkie langs. Sleep die pyl: die onderdeel volg terwyl jy sleep, en as jy loslaat, word die nuwe diepte as een stap gestel ({{key:Mod+Z}} plaas dit terug). Druk {{key:Esc}} terwyl jy sleep om terug te gaan na waar jy begin het. Die diepte beweeg in stappe van een tiende van sy grootte: 1 mm op 'n 25 mm-ekstrusie, 0.1 mm op 'n 3 mm een.

'n {{ui:Draai om}} kry 'n geboë pyl aan die einde van sy draai: sleep dit om die as om die hoek te verander, in hele grade van 1° tot 360°.

Of klik in die blokkie langs die pyl, tik 'n waarde (of `=` en 'n vergelyking) en druk {{key:Enter}}. Daar is geen pyl op 'n ekstrusie wat **Deur alles** of tot 'n vlak gaan nie, of op 'n waarde wat 'n vergelyking bestuur nie: verander dié aan die regterkant.

## Die getalle wat 'n onderdeel bestuur

| Waar | Wat jy kan verander |
|---|---|
| Skets | Elke maat: lengtes, afstande, radiusse, deursnee, hoeke |
| Ekstrudeer en Sny | Diepte, eindvoorwaarde, rigting, verhoging of sny |
| Draai om en gedraaide sny | Hoek, as, verhoging of sny |
| Gat | Deursnee, diepte, deur alles, teenboordeursnee en -diepte |
| Fillet, Chamfer, Shell | Radius, afstand, wanddikte en rigting, en watter rande of vlakke |
| Lineêr en Sirkulêr | Telling, spasiëring of hoek, rigting of as |
| Onderdeel | Krommes (hoe fyn ronde vorms gefasseer word) |
| Tekening | Waar die snit sny, die detail se grootte en skaal, GD&T-waardes |

## Beplan die onderdeel sodat die regte getalle dit bestuur

Die getalle wat jy gee, is die wat jy kan verander. 'n Paar gewoontes laat latere veranderings beter gedra:

- **Maat wat saak maak vir die werk.** As 'n gat 15 mm van 'n rand moet bly, maat dit vanaf daardie rand, nie vanaf die oorsprong nie.
- **Definieer skets ten volle.** Dan beweeg 'n verandering net wat dit moet (sien [Definieer 'n skets ten volle](topic:relations-dimensions)).
- **Gebruik verhoudings vir bedoeling.** Gelyk op twee gate beteken dat een deursnee albei bestuur. Simmetriese vorme: plaas die oorsprong op die middellyn, of gebruik Middelpunt.
- **Skets op vlakke wat deur kenmerke gemaak is.** 'n Skets op 'n ekstrusie se eindvlak beweeg as die diepte verander.
- **Patroon in plaas van kopieer.** Een gat wat agt keer gepatroon is, het een deursnee om te verander.

## Verder as enkele getalle

- **Een getal wat verskeie bestuur:** gebruik parameters en vergelykings: [Bestuur 'n onderdeel met parameters](topic:parameters).
- **Verskeie groottes van een onderdeel:** stoor elk as 'n [konfigurasie](topic:design-tables); hulle word in die onderdeellêer behou.
- **Rekenkunde in 'n getalblokkie:** tik `=40/2` of `=width / 2`. Dit maak 'n vergelyking; sien [Vergelykings beide kante](topic:equations-two-way).
- **Duim-eenhede:** die onderdeel wys millimeter. In 'n getalblokkie met `=`, of in 'n parameter, word `2in` omgeskakel na 50.8.

Sien [Wat nog nie gebou is nie](topic:not-built-yet).
