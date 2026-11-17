---
title: Onderdele na en van ander onderdeelmodelleerders skuif
summary: Stuur 'n onderdeel na 'n ander onderdeelmodelleerder as 'n makro wat dit met 'n lewende kenmerkboom herbou. Die benoemde STEP en die oopmaak van 'n kenmerklys wat 'n ander modelleerder uitgeskryf het, is nog nie in hierdie weergawe gebou nie.
keywords: makro, nie gebou nie, swb, vba, kenmerkboom, heen-en-terug, makro uitvoer, cadcraft-sw.json, benoemde step, ap214, globale veranderlikes, vergelykings, inheemse onderdeel
from: 97ca61da
---

PartCraft ruil onderdele met SolidWorks in albei rigtings, sonder 'n lêerformaat wat niemand anders kan lees nie:

- **Uit:** 'n makro (`.swb`, gewone teks) wat SolidWorks uitvoer om die onderdeel self te bou, kenmerk vir kenmerk, met sy skette, verhoudings, maatte, globale veranderlikes en vergelykings. Jy kry 'n inheemse onderdeel met 'n lewende kenmerkboom, nie 'n dooie soliede nie.
- **Terug:** 'n makro wat jy binne SolidWorks uitvoer, skryf die onderdeel se kenmerke en vergelykings na 'n `.cadcraft-sw.json`-lêer. Om daardie lêer in PartCraft oop te maak, is nog nie in hierdie weergawe gebou nie (dit benodig 'n presiese kern).

:::warning
Niks hiervan is nog in SolidWorks getoets nie. SolidWorks loop net op Windows met 'n lisensie, en PartCraft het hierdie makro's nog nooit daarin laat loop nie. Die makro's is geskryf uit die SolidWorks API-dokumentasie en hier op struktuur nagegaan. Verwag om probleme te rapporteer; die log wat die makro skryf, sê watter stap misluk het.
:::

PartCraft kan nie 'n `.sldprt`-lêer skryf nie: daardie formaat is toe. Die makro is die manier om 'n inheemse onderdeel te kry.

## Stuur 'n onderdeel as 'n makro

1. Maak die onderdeel oop.
2. Kies {{ui:Uitvoer}}, dan {{ui:Makro vir SolidWorks (.swb)}}. PartCraft laai `<part>.swb` af; die statusbalk sê dit is "geskryf sonder die presiese kern".
3. 'n Dialoog sê hoeveel kenmerke, globale veranderlikes en vergelykings die makro bou, en lys enigiets wat dit uitlaat. Geen STEP gaan langs dit in hierdie weergawe nie: gebruik {{ui:Uitvoer}}, dan {{ui:STEP (gefasseteer, maaskern)}} as jy een nodig het.
4. Kies in SolidWorks **Tools > Macro > Run**, kies die `.swb`-lêer en wag. Dit maak 'n nuwe onderdeel vanaf jou standaard onderdeelsjabloon, stel millimeter in en bou elke kenmerk.
5. Aan die einde sê 'n boodskap hoeveel stappe gedoen is, hoeveel misluk het en hoeveel met PartCraft se liggaam ooreengestem het. Die volledige log, `<part> macro log.txt`, word langs die makro geskryf.

Wat die makro bou:

| PartCraft | In die nuwe onderdeel |
|---|---|
| Skets op die Voorvlak, Bovlak of Regsvlak | 'n Skets op daardie vlak, met sy lyne, boë, sirkels, punte, verhoudings en maatte (benoem soos in PartCraft, soos `k7`) |
| Skets op 'n vlak | 'n Skets op dieselfde vlak, gekies deur 'n punt daarop |
| Skets op 'n vaste vlak | 'n Verwysingsvlak deur drie punte, en die skets daarop |
| Ekstrudeer, sny (blind, deur alles, middelvlak, twee rigtings, skuins) | Boss-extrude of cut-extrude |
| Draai om, gedraaide sny | Draai om dieselfde middellyn |
| Gat (eenvoudig, verdiepte kop, verlaagde kop, getap) | Een of twee snye met hul eie skette ('n getapte gat is sy tapboorgat; geen draad nie) |
| Lineêre en sirkulêre patroon, spieël | Lineêre patroon, sirkulêre patroon, spieël (kenmerke of die liggaam) |
| Afronding, skuins, hol | Fillet, chamfer en shell op dieselfde rande en vlakke, gekies deur punte |
| Parameters en vergelykings | Globale veranderlikes en vergelykings op die hernoemde maatte |
| Onderdrukte kenmerke, die terugrol-balk | Op dieselfde manier onderdruk; die terugrol-balk op dieselfde plek |

Na elke soliede kenmerk vergelyk die makro die liggaam se volume en grootte met PartCraft se s'n. Wanneer hulle verskil, draai dit daardie kenmerk se rigting een keer om en kontroleer weer; as dit nie beter is nie, draai dit dit terug en skryf "Check" in die log.

### Wat uitgelaat word

Die dialoog en die begin van die makro lys alles wat nie oorgedra is nie, met die rede. Vandag is dit: ingevoerde soliede (voeg eerder die STEP in), swaaie, lofts, konsepte, verwysingsassen en -punte, "tot"-eindvoorwaardes, slegs sommige kontoere ekstrudeer, en alles wat daarvan afhang. Splines word krommes deur hul punte. Hierdie weergawe het geen presiese kern nie, so skette op vlakke en die kenmerke wat rande of vlakke kies, word ook uitgelaat.

## Stuur 'n benoemde STEP

Nog nie in hierdie weergawe gebou nie: {{ui:STEP vir SolidWorks (benoem, AP214)}} benodig 'n presiese kern, en om dit te kies sê "STEP vir SolidWorks: nog nie gebou nie. …". Met 'n presiese kern dra die lêer die onderdeel se naam, millimeter en die onderdeelkleur, en staan Y regop, soos SolidWorks onderdele wys (die gewone {{ui:STEP AP214 (presiese soliede)}}-uitvoer staan Z regop). Letters met aksente verloor hulle in die naam, en ander karakters buite gewone ASCII word `_`.

## 'n Onderdeel terugbring

Om die lêer in PartCraft oop te maak (stap 3) is nog nie in hierdie weergawe gebou nie: dit sê "Oopmaak van 'n SolidWorks-uitvoer: nog nie gebou nie. …". Die CadCraft-tekenprogram maak die lêer steeds oop en neem sy skette.

1. Kies {{ui:Lêer}} > {{ui:Uitvoer}} > {{ui:Laai makro af om onderdele terug te bring (.swb)}} om `CadCraftExport.swb` af te laai, en plaas dit langs jou onderdele.
2. In SolidWorks, maak die onderdeel oop, kies **Tools > Macro > Run** en kies `CadCraftExport.swb`. Dit skryf `<part>.cadcraft-sw.json` langs die onderdeel en verander niks daarin nie.
3. In PartCraft, kies {{ui:Maak oop}} en kies daardie lêer, of laat dit val op die 3D-aansig.
4. Met 'n presiese kern bou PartCraft die onderdeel kenmerk vir kenmerk weer en wys wat dit gedoen het: byvoorbeeld "5 van 5 kenmerke van SolidWorks oorgedra (Flange.SLDPRT)", elke kenmerk wat dit nie kon dra nie ("Nie oorgedra nie: Sweep1 (Sweep).") en of die volume ooreenstem met die een wat SolidWorks geskryf het.
5. Stoor dit as 'n PartCraft-onderdeel met {{ui:Stoor}}.

Skette beland op 'n basisvlak wanneer hulle op een sit, op die ooreenstemmende plat vlak van die onderdeel wanneer daar een is (sodat hulle latere wysigings volg), en andersins op 'n vaste vlak. Rande en vlakke van fillets, skuins en shells word uit punte gevind en as benoemde verwysings behou. Globale veranderlikes word parameters (name met spasies kry onderstrepings: "Bolt count" word `Bolt_count`) en vergelykings word vergelykings op dieselfde maatte. Niks word geraai nie: wat geen ooreenstemmende is nie, word gelys.

Die CadCraft-tekenprogram maak dieselfde lêer oop en neem sy skette.

:::note
Die formaat is `cadcraft-sw-export` weergawe 1, gewone JSON in millimeter en grade. 'n Lêer van 'n nuwer makro, of een wat nie geldig is nie, word met die rede geweier.
:::
