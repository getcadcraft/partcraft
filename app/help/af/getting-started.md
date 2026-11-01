---
title: Begin met PartCraft
summary: Wat PartCraft vandag doen, wat jou blaaier nodig het, en 'n eerste onderdeel in tien minute, van skets tot gestoorde lêer.
keywords: begin, eerste keer, vinnige begin, inleiding, tutoriaal, eerste onderdeel, plaat, parametries, onderdeelmodelleerder
from: 5f0a668d
---

PartCraft is die parametriese onderdeel- en samestellingsprogram van die CadCraft-familie. Jy teken 'n 2D-skets, vaslê dit met verhoudings en afmetings, verander dit in 'n soliede liggaam met kenmerke soos ekstrudeer, draai om en gat, en verander enige getal later: die onderdeel bou weer uit sy geskiedenis. Onderdele gaan dan in samestellings, waar verbindings hulle plaas en jou toelaat om die beweging na te gaan.

Wat hierdie bou doen:

| Taak | Wat jy kry |
|---|---|
| Skets | Lyne, reghoeke, sirkels, boë, punte en middellyne, met verhoudings en afmetings, en 'n lewendige toestand: onder, volledig of oor gedefinieer |
| Soliede kenmerke | Ekstrudeer, sny, draai om, gedraaide snit, eenvoudige en verlaagde gate, lineêre en sirkulêre patrone, spieël, fillet en chamfer op reguit rande tussen plat vlakke, en shells en konsepte op plat vlakke. Sweep, loft en die ander kenmerke wat 'n presiese kern nodig het, is nog nie in hierdie weergawe gebou nie: sien [Wat nog nie gebou is nie](topic:not-built-yet) |
| Geskiedenis | Wysig enige kenmerk se getalle, onderdruk, rol terug, herorden en skrap, met ontdoen |
| Samestellings | Onderdele wat met starre, draaiende en skuiwerverbindings verbind is, 'n botsingstoets en 'n bewegingstoets |
| Tekeninge | 'n A3-blad met drie aansigte, 'n isometriese aansig, 'n snit, 'n detailaansig, algehele groottes, datums, kenmerkbeheerrame en oppervlakafwerkingsimbole, uitgevoer as PDF |
| Lêers | Sy eie onderdeel- en samestellingslêers; STL, 3MF, gefasetteerde STEP, DXF en PDF uit |

Alles loop in jou blaaier, op jou rekenaar. **Niks word opgelaai nie.** Sien [Lêers: maak oop, stoor en voer uit](topic:files) vir waar lêers gaan.

## Wat jy nodig het

- 'n Huidige Chrome, Edge, Firefox of Safari met **WebGL** (3D-grafika) en **WebAssembly** aan. Albei is standaard aan. Die soliede meetkunde word gebou deur 'n WebAssembly-maaskern wat saam met die program laai: sien [Die maaskern](topic:solid-kernels).
- 'n Muis is die maklikste. 'n Snitblok werk, en raakskerms werk vir kyk en eenvoudige skets: sien [Snitblok, raak en klein skerms](topic:trackpad-and-touch).
- 'n Skerm van minstens 1280 pixels breed wys die hele nutsbalk in een ry. Smaller vensters rol die nutsbalk sywaarts; op 'n foon maak die paneel as blaaie oop vanaf 'n balk onderaan.

Meer oor blaaiers: [Blaaiers en rekenaars](common:browsers).

:::note
PartCraft loop in die blaaier, en op die lessenaar binne CadCraft Studio. Wolkstoring is nog nie beskikbaar nie: jy maak onderdele oop vanaf jou rekenaar en stoor hulle terug na jou rekenaar as lêers.
:::

## Maak PartCraft oop

1. Maak PartCraft oop.
2. Wag terwyl die skerm "Laai die soliede kern…" sê. Dit neem 'n oomblik die eerste keer.
3. Jy sien 'n leë 3D-aansig met drie basisvlakke, die geskiedenis aan die linkerkant ("Part1", dan Voorvlak, Bo-vlak, Regtervlak) en 'n boks in die aansig met die opskrif "Begin 'n onderdeel".
4. Die kaartjie naby die regterkant van die statusbalk sê "Mesh kernel": PartCraft bou elke onderdeel met die maaskern in hierdie weergawe, so ronde vlakke is plat fasette. Jy kan dadelik begin modelleer.

As die aansig sê die blaaier kan nie 3D wys nie, of die kern het nie gelaai nie, sien [Foutoplossing](topic:troubleshooting#the-app-does-not-start).

## Jou eerste onderdeel: 'n plaat met 'n gat

Jy gaan 'n plaat van 60 × 40 mm, 10 mm dik, maak met 'n gat van 6 mm deur. Eenhede is millimeter.

### Teken die omtrek

1. Klik **Voorvlak** in die geskiedenis aan die linkerkant. Die vlak word in die aansig uitgelig.
2. Kies {{ui:Skets}} in die nutsbalk, of druk {{key:S}}. Die aansig draai om reguit na die vlak te kyk, en die Lyn-gereedskap is aktief.
3. Druk {{key:R}} vir die Reghoek-gereedskap.
4. Beweeg die wyser na die oorsprong (die klein rooi sirkel met 'n kruis). 'n Klein vierkant wys dat dit vasklik. Klik.
5. Beweeg op en regs en klik weer. Jy het 'n reghoek. Die lyne is blou: blou beteken hulle kan nog beweeg.

### Gee dit groottes

1. Druk {{key:D}} vir die Maat-gereedskap.
2. Klik die boonste lyn, en klik dan 'n bietjie bo daarvan. 'n Getalblokkie open met die huidige lengte.
3. Tik `60` en druk {{key:Enter}}. Die reghoek verander na 60 mm breed.
4. Klik die linkerlyn, en klik dan 'n bietjie links daarvan. Tik `40` en druk {{key:Enter}}.

Die kaartjie linksbo in die aansig sê nou **Volledig gedefinieer** en die lyne verander na ink (swart op die Papier-tema, lig op die Model-tema). Elke punt en grootte is vas.

:::tip
As jy die reghoek weg van die oorsprong begin het, sê die kaartjie steeds "Onder gedefinieer · 2 grade van vryheid". Druk {{key:S}} vir Kies, klik een hoek, {{key:Shift}}+klik die oorsprong, en kies dan {{ui:• Samevallend}} in die regterpaneel.
:::

### Ekstrudeer dit

1. Kies {{ui:Verlaat}} in die nutsbalk, of druk {{key:Esc}} totdat die skets toemaak (gewoonlik twee keer).
2. Kies {{ui:Ekstrudeer}}. 'n Soliede van 10 mm verskyn. "Extrude1" word by die geskiedenis gevoeg, met "Sketch1" ingesny onder dit.
3. Die regterpaneel wys die ekstrudeer se instellings. Om die dikte te verander, tik 'n nuwe getal in **Diepte (mm)** en druk {{key:Enter}} of {{key:Tab}}. Die onderdeel bou dadelik weer.

### Voeg die gat by

1. Klik die groot plat vlak aan die voorkant van die plaat (die einde van die ekstrusie). Die hele vlak word uitgelig en die regterpaneel sê **Vlak**.
2. Kies {{ui:Skets op hierdie vlak}} in die regterpaneel.
3. Druk {{key:P}} vir die Punt-gereedskap en klik naby die middel van die vlak.
4. Kies {{ui:Verlaat}}.
5. Kies {{ui:Gat}}. 'n Gat van 6 mm gaan deur die plaat. Verander **Deursnee (mm)** in die regterpaneel as jy wil.

Die **Onderdeel**-boks linksonder wys nou 'n volume, 'n oppervlakte, die grootte (60 × 40 × 10 mm) en "Deurgaande gate: 1".

### Stoor dit

1. Druk {{key:Mod+S}} of kies {{ui:Stoor}}.
2. Jou blaaier laai `Part1.partcraft.json` na sy aflaaivouer af. Die lêer hou die hele geskiedenis: maak dit weer oop met {{ui:Maak oop}} om voort te wysig.

Om die onderdeel eers te hernoem, klik leë ruimte in die aansig sodat niks gekies is nie, en tik 'n nuwe **Naam** in die regterpaneel.

## Waarheen nou

- [Teken jou eerste skets](topic:sketch-basics) en [Definieer 'n skets volledig](topic:relations-dimensions) verduidelik die sketser behoorlik.
- [Verander 'n onderdeel deur sy geskiedenis](topic:edit-history) wys hoe om wat jy gebou het te wysig.
- [Rond af, skuins af en hol uit](topic:fillet-chamfer-shell) en [Maak 'n tekening](topic:drawing-pdf) voltooi die onderdeel. [Wat nog nie gebou is nie](topic:not-built-yet) lys wat hierdie weergawe nie doen nie, soos sweeps en lofts.
- [Kom van 'n ander parametriese modelleerder](topic:coming-from) lys die gewoontes wat hier anders werk.
- [Sleutels en muis](topic:keyboard) is die volle lys snelkoppelings.
- [Hulp gebruik](common:help).
