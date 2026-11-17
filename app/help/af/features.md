---
title: Kenmerke en hul opsies
summary: Elke kenmerk in die nutsbalk met sy instellings, verstekwaardes en grense, van ekstrudeer tot fillet, shell en ingevoerde STEP-soliedes, die handelinge wat elke kenmerk deel, en die onderdeelinstellings.
keywords: kenmerke, nie gebou nie, ekstrudeer, snit, draai, gedraaide snit, gat, verdiepgat, lineêre patroon, sirkelpatroon, spieël, fillet, chamfer, shell, invoer, opsies, standaardwaardes, instellings, resolusie, krommes, fasette, onderdruk, terugrol
from: ab3a598e
---

Kenmerke word in die geskiedenis gelys in die volgorde waarin hulle gemaak is, en word van bo na onder herbou. Elkeen word na sy soort genoem met 'n nommer: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft bou elke kenmerk met die maaskern. Fillet en Chamfer werk op reguit rande tussen twee plat vlakke, en Shell open plat vlakke. Ingevoerde soliede benodig 'n presiese kern, wat hierdie weergawe nie het nie: hulle is nog nie gebou nie, en hul afdeling hieronder beskryf hulle as 'n onderdeel wat in 'n vroeër bou gemaak is en dit behou. Sien [Die maaskern](topic:solid-kernels) en [Wat nog nie gebou is nie](topic:not-built-yet).

## Skets

| Instelling | Notas |
|---|---|
| Vlak | Voor-, Bo- of Regsvlak, of 'n plat vlak. Word gewys, nie verander nie: om 'n skets te skuif, maak 'n nuwe een |
| Toestand | Volledig gedefinieer, Onvolledig gedefinieer (met die vryheidsgrade), Oorgedefinieer, of Leeg |
| Meetkunde, Verhoudings | Hoeveel krommes, punte en verhoudings |
| Aandrywende afmetings | Elke afmeting van die skets, redigeerbaar |

Knoppies: {{ui:Wysig skets}}, {{ui:Voer uit as DXF}}.

## Ekstrudeer en Snit

{{ui:Extrude}} en {{ui:Cut}} maak dieselfde kenmerk, en begin met verskillende instellings.

| Instelling | Keuses | Ekstrudeer begin by | Snit begin by |
|---|---|---|---|
| Bewerking | Verhoging (voeg materiaal by), Snit (verwyder materiaal), Snyding (hou die oorvleueling), Nuwe liggaam (nog nie gebou in hierdie weergawe nie) | Verhoging | Snit |
| Einde | Blind ('n diepte), Middelvlak (albei kante), Deur alles | Blind | Deur alles |
| Diepte (mm) | Bo 0, tot 1,000,000 | 10 | 10 |
| Omkeer rigting | Af / aan | Af | Af |

- Profiel: elke geslote lus van volle lyne, sirkels en bôë in die skets. Lusse binne lusse is gate.
- Deur alles werk net vir snitte. Dit bereik heeltemal deur die deel aan die gekose kant.
- 'n Snit gaan die materiaal in, weg van die skets-vlak se uitwaartse kant; Omkeer draai dit om.

## Draai en gedraaide snit

| Instelling | Keuses | Verstek |
|---|---|---|
| Bewerking | Verhoging, Snit | Verhoging ({{ui:Draai om}}), Snit ({{ui:Meer}} › {{ui:Gedraaide snit}}) |
| Hoek (°) | Bo 0, tot 360 | 360 |
| As | Eerste middellyn, enige lyn of middellyn van die skets, of 'n asfunksie wat in die skets se vlak lê | Eerste middellyn |

- Die profiel moet aan een kant van die as bly. Dit mag dit raak.
- 'n Draaiing se as kan deur Sirkelpatrone en deur samestellingsverbindings gebruik word.

## Gat

| Instelling | Keuses | Verstek |
|---|---|---|
| Tipe | Eenvoudig, Verdiepgat | Eenvoudig |
| Deursnee (mm) | Bo 0 | 6 |
| Deur alles | Aan / af | Aan |
| Diepte (mm) | Wanneer Deur alles af is | 10 |
| Verdiepgat ⌀ | Wyer as die gat | 11 |
| Verdiepgat-diepte | Vlakker as 'n blinde gat | 6 |
| Omkeer rigting | Af / aan | Af |

- Een gat by elke los punt van die skets (punte gemaak met die Punt-gereedskap). Die paneel wys hoeveel.
- Gate word haaks op die skets-vlak in die materiaal geboor.
- Elke gat se as kan deur samestellingsverbindings gebruik word ("Hole1, gat 2").

## Lineêre patroon

| Instelling | Keuses | Verstek |
|---|---|---|
| Kenmerke om te kopieer | Enige soliede kenmerke bo dit | Die gekose kenmerk, anders die laaste soliede kenmerk |
| Rigting | X-as, Y-as, Z-as; 'n lyn van 'n vroeëre skets; die as van 'n draaiing; 'n gekose rand | X-as (of die rand wat gekies is toe jy dit bygevoeg het) |
| Spasiëring (mm) | Enige getal | 20 |
| Telling | 1 tot 1000, insluitend die oorspronklike | 3 |
| Omkeer rigting | Af / aan | Af |

## Sirkelpatroon

| Instelling | Keuses | Verstek |
|---|---|---|
| Kenmerke om te kopieer | Soos vir Lineêr | Soos vir Lineêr |
| As | Soos vir Rigting hierbo | Die laaste draaiing se as, anders die Y-as (of die gekose rand) |
| Hoek (°) | Bo 0, tot 360. 360 spasieer die kopieë eweredig rondom; minder versprei hulle oor die hoek | 360 |
| Telling | 1 tot 1000, insluitend die oorspronklike | 6 |
| Omkeer rigting | Af / aan | Af |

## Spieël

| Instelling | Keuses | Verstek |
|---|---|---|
| Spieël | Die hele liggaam (soos tot dusver gebou), of gekose kenmerke | Die gekose kenmerk, anders die hele liggaam |
| Spieëlvlak | Voor-, Bo- of Regsvlak; 'n plat vlak | Regsvlak, of die plat vlak wat gekies is toe jy dit bygevoeg het |

## Fillet en Chamfer

In hierdie weergawe bou die maaskern hulle op reguit rande tussen twee plat vlakke (buite- of binnehoeke), met een radius. 'n Ronde rand sê "Fillet: in hierdie weergawe net reguit rande tussen twee plat vlakke (die maaskern bou hulle). Rond of skuins geboë rande in die skets af."; waar geronde rande by 'n hoek ontmoet, word hulle gemiter, en die kenmerk waarsku "Fillet deur die maaskern: waar geronde rande ontmoet, word hulle gemiter, nie ineengevloei nie." Alle Chamfer-tipes (gelyke afstand, twee afstande, afstand en hoek, met **Keer kante om**) werk. Sien [Afronding, skuins en hol](topic:fillet-chamfer-shell).

| Instelling | Keuses | Verstek |
|---|---|---|
| Radius (mm) (Fillet) | Bo 0 | 2 |
| Afstand (mm) (Chamfer) | Bo 0, dieselfde op albei vlakke | 1 |
| Rande | Die gekose rande, elk gelys volgens die twee vlakke wat hulle verbind ("Extrude1 end face × Extrude1 side"), met **Verwyder** | Die rande wat gekies is toe jy dit bygevoeg het |

- Kies rande voordat jy die knoppie kies ({{key:Shift}}+klik vir verskeie), of kies dit met niks gekies nie en klik daarna rande.
- {{ui:Kies rande}} (of dubbelklik die kenmerk) verander die rande.
- Rande word onthou volgens die twee vlakke wat hulle verbind, so hulle oorleef grootteverandering vroeër in die geskiedenis.

## Shell

Die maaskern bou dit. Net plat vlakke kan oopgemaak word: "Shell: in hierdie weergawe open dit net plat vlakke (die maaskern bou dit)."; mure van verskillende diktes is nog nie gebou nie. Sien [Afronding, skuins en hol](topic:fillet-chamfer-shell).

| Instelling | Keuses | Verstek |
|---|---|---|
| Wand (mm) | Bo 0 | 2 |
| Mure groei uitwaarts (die vlakke bly binne) | Af: mure gaan innatoe. Aan: mure gaan uitwaarts | Af |
| Oop vlakke | Die vlakke wat verwyder word, minstens een, met **Verwyder** | Die vlakke wat gekies is toe jy dit bygevoeg het |

{{ui:Kies vlakke}} verander die oop vlakke.

## Ingevoerde soliede

Gemaak deur 'n STEP-, STL-, OBJ- of 3MF-lêer oop te maak: 'n soliede liggaam van driehoeke sonder geskiedenis van sy eie ([Maak 'n STEP-lêer oop](topic:import-step), [Maak 'n STL, OBJ of 3MF oop](topic:open-meshes)). Dit wys die lêer waarvandaan dit kom en wat die invoer herstel het; **Eenhede in die lêer**, **Op in die lêer** en **Gebruik dit om** bly redigeerbaar. 'n STEP-soliede wat deur 'n ouer bou met die presiese kern ingevoer is, bly in die geskiedenis gemerk as nie gebou nie; maak die STEP-lêer weer oop om dit as driehoeke in te bring.

| Instelling | Keuses | Verstek |
|---|---|---|
| Op in die lêer | Z opwaarts (meeste CAD), Y opwaarts | Z opwaarts |

Patrone en spieëls kan 'n ingevoerde soliede kopieer, maar nie 'n fillet, chamfer of shell nie.

## Wat elke kenmerk het

Onderaan elke kenmerk se paneel:

| Knoppie | Doen |
|---|---|
| {{ui:Onderdruk}} / {{ui:Hef onderdrukking op}} | Skakel dit af of aan. Kenmerke wat dit benodig, word nie gebou terwyl dit af is nie |
| {{ui:Rol terug na hier}} | Bou net die kenmerke bo hierdie een. Nuwe kenmerke gaan in by die terugrolbalk |
| {{ui:Skuif op}} / {{ui:Skuif af}} | Herrangskik, wanneer niks wat dit gebruik onder dit sou eindig nie. Grys met die rede anders |
| {{ui:Skrap}} | Verwyder dit, en (nadat gevra is) elke kenmerk wat dit gebruik |
| Naam | Hernoem dit (tot 60 karakters) |

Kenmerke met 'n skets lys ook **Skets-afmetings**, redigeerbaar op die plek.

## Toestande in die geskiedenis

| Toestand | Wys as | Beteken |
|---|---|---|
| Gebou | Normaal | Alles goed |
| Waarskuwing | ⚠ | Gebou, met iets om na te kyk: "Oorgedefinieer: 1 verhouding word nie nodig nie." of "Niks van die onderdeel bly oor na hierdie nie." |
| Fout | ⚠ fout, rooi | Kon nie gebou word nie; die boodskap sê hoekom |
| Nie gebou nie | ⚠ nie gebou nie | Benodig 'n kenmerk wat misluk het, onderdruk of teruggerol is, of benodig 'n presiese kern, wat hierdie weergawe nie het nie ("Sweep: nog nie gebou nie. …") |
| Onderdruk | af | Afgeskakel |
| Teruggerol | grys, onder die terugrolbalk | Nie gebou nie totdat jy vorentoe rol |

## Onderdeelinstellings

Klik op leë ruimte sodat niks gekies is nie. Die regter paneel wys **Onderdeel**:

- **Naam**: die onderdeel se naam, gebruik vir lêernaam en die tekening se titelblok (tot 120 karakters).
- **Krommes**: sien hieronder.

### Krommes-resolusie

Die maaskern bou die soliede self uit plat fasette, so die aansig, STL, 3MF, die gefasetteerde STEP, die volume en die tekening se aansigte volg almal **Krommes**: hoeveel fasette per volle omwenteling.

| Instelling | Fasette per omwenteling | Volume van 'n ronde vorm |
|---|---|---|
| Growwe (32 per omwenteling) | 32 | Ongeveer 0.64 % onder die ware waarde |
| Normaal (64 per omwenteling) | 64 | Ongeveer 0.16 % onder (die verstek) |
| Fyn (128 per omwenteling) | 128 | Ongeveer 0.04 % onder |
| Baie fyn (256 per omwenteling) | 256 | Ongeveer 0.01 % onder |

Fynere krommes gee gladder uitvoere en aansigte, en stadiger herbou. Die instelling word in die onderdeellêer gestoor.

## Nog nie gebou nie

Veranderlike-radius-afrondings, afrondings en skuinskante op ronde rande, dope wat geboë vlakke oopmaak, skuins op geboë vlakke, sweep, loft, rib, STEP-soliede met presiese geboë vlakke, nuwe liggame, tapse, "tot" 'n vlak of hoekpunt, en verwysings op die soliede se vlakke en rande benodig 'n presiese kern, wat hierdie weergawe nie het nie. Ook nog nie gebou nie: getapte en verseënkte gate. Sien [Wat nog nie gebou is nie](topic:not-built-yet).
