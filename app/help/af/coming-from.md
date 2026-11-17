---
title: Kom van 'n ander parametriese modelleerder af
summary: Hoe die gewoontes van lessenaar-parametriese onderdeelmodelleerders op PartCraft aansluit, en die verskille wat ervare gebruikers in die eerste uur laat struikel.
keywords: oorskakeling, migreer, bekend, kenmerkbestuurder, ontwerpboom, slim maat, verhoging-ekstrusie, sny-ekstrusie, gatwisaard, koppelings, botsingsopsporing, terugrolbalk, eienskappaneel, muis, verskille
from: fbacaee1
---

As jy onderdele in SolidWorks ontwerp, sal die meeste van PartCraft se idees bekend voel: skette op Voor-, Bo- en Regs-vlakke, verhoudings en slim maate, 'n kenmerkgeskiedenis met 'n terugrolbalk, en samestellings wat deur koppelings geplaas word. Die manier waarop jy dit bereik, verskil op plekke, en hierdie eerste bou doen minder. Hierdie bladsy karteer jou gewoontes en lys die verrassings.

## Gewoontes, gekarteer

| Jy is gewoond aan | In PartCraft |
|---|---|
| Die ontwerpboom aan die linkerkant | Die geskiedenis aan die linkerkant: vlakke, dan kenmerke, en skette ingespring onder die kenmerk wat hulle gebruik |
| Voor-, Bo- en Regs-vlakke | Dieselfde drie, deur die oorsprong. Voor is die XY-vlak, Bo is XZ, Regs is YZ; Y wys op |
| Skets op 'n vlak of vlak, dan die bevestigingshoek om uit te gaan | {{ui:Skets}} ({{key:S}}) op 'n gekose vlak of plat vlak; {{ui:Verlaat}} of {{key:Esc}} tot dit sluit |
| Slim maat | {{ui:Maat}} ({{key:D}}). Klik een of twee items, dan waar die getal gaan. Waar jy dit plaas, kies horisontaal, vertikaal of belyn |
| Voeg verhoudings by in die eienskappaneel | Kies items, dan die verhoudingknoppies in die regterpaneel (Samevallend, Horisontaal, Parallel, Raaklyn, Gelyk en so meer) |
| Outomatiese verhoudings terwyl jy skets | Vasmaak voeg samevallende, punt-op-kromme-, horisontale en vertikale verhoudings by |
| Blou / swart / rooi sketskleure | Dieselfde idee: blou onder gedefinieer, swart ten volle gedefinieer, rooi oor gedefinieer. Die merker wys die vryheidsgrade wat oor is |
| Middellyn vir omwentelings | {{ui:Middellyn}} ({{key:N}}); {{ui:Draai om}} gebruik die eerste middellyn tensy jy 'n ander as-as kies |
| Skets-afronding | {{ui:Fillet}} ({{key:F}}) in 'n skets: klik die hoek, tik die radius |
| Wisselaar vir konstruksiegeometrie | {{ui:Konstruksie}} ({{key:Q}}) |
| Geëkstrudeerde verhoging | {{ui:Ekstrudeer}}: Blind, Middelvlak, Tot vlak / volgende / hoekpunt, Verskuiwing vanaf vlak, tweede rigting, skuinsheid, een kontoer (Kies streke) |
| Geëkstrudeerde sny | {{ui:Sny}}: begin as Deur alles; skakel na Blind vir 'n holte |
| Omwentelde verhoging / sny | {{ui:Draai om}} / {{ui:Meer}} › {{ui:Gedraaide snit}} |
| Verwysingsvlak / as / punt | {{ui:Meer}} › {{ui:Vlak}}, {{ui:As}}, {{ui:Punt}} (sien [Verwysingsvlakke, asse en punte](topic:reference-geometry)) |
| Geswaaide / geloftde verhoging of sny, skuinsheid | {{ui:Meer}} › {{ui:Konsep}} op plat vlakke (sien [Sweep, loft en konsep](topic:sweep-loft-draft)). {{ui:Sweep}} en {{ui:Loft}} is nog nie in hierdie weergawe gebou nie (hulle benodig 'n presiese kern) |
| Gatwisaard | {{ui:Gat}} by elke los skets-punt: eenvoudig, teenboor, verstek (90° / 82°) of gedraaide ISO-metriese M2–M24, deur of blind |
| Lineêre / sirkulêre patroon, spieël | {{ui:Lineêr}}, {{ui:Sirkulêr}}, {{ui:Spieël}} (kenmerke of die hele liggaam) |
| Afronding en skuinssnit op rande | {{ui:Fillet}} / {{ui:Chamfer}}: klik 'n rand, {{key:Shift}}+klik meer, dan die knoppie. Een radius; gelyke, twee-afstand- of afstand-hoek-skuinssnitte. In hierdie weergawe slegs reguit rande tussen twee plat vlakke, en afrondings wat by 'n hoek ontmoet, word gemiter. Rond of skuins geboë rande in die skets af ({{ui:Fillet}} in 'n skets, {{key:F}}) |
| Dop | {{ui:Shell}}: klik die plat vlakke om oop te maak, dan die knoppie. Een wanddikte |
| Maak 'n STEP-lêer oop | {{ui:Maak oop}}: gelees as driehoeke, 'n soliede liggaam om op te bou ([Maak 'n STEP-lêer oop](topic:import-step)) |
| Wysig kenmerk, dan OK | Klik die kenmerk; verander getalle regs; dit herbou terwyl jy tik. Geen OK, geen Kanselleer nie: gebruik {{key:Mod+Z}} |
| Wysig skets | Dubbelklik die skets in die geskiedenis |
| Herbou | Outomaties ná elke verandering. Daar is geen herbou-sleutel nie |
| Onderdruk / hef onderdrukking op | {{ui:Onderdruk}} / {{ui:Hef onderdrukking op}} in die regterpaneel |
| Sleep die terugrolbalk | {{ui:Rol terug na hier}} op 'n kenmerk; klik "Terugrolbalk · rol vorentoe" om terug te keer |
| Sleep 'n kenmerk in die boom om te herorden | {{ui:Skuif op}} / {{ui:Skuif af}} of {{key:Alt+Up}} / {{key:Alt+Down}}; geweier met die rede wanneer dit 'n afhanklikheid sou breek |
| Wysig maate deur op die model te dubbelklik | Kies die kenmerk: sy skets se maate word in die regterpaneel gelys |
| Koppelings: samevallend, konsentries, afstand, hoek | {{ui:Verbinding}} ({{key:J}}): kies 'n plat vlak op elke onderdeel; die verbinding plaas hulle vlak teen vlak. **Sentreer op** 'n as werk soos konsentries; **Verskuiwing** soos afstand; **Hoek** soos hoek |
| Vaste komponent | Die eerste onderdeel is vasgemaak; {{ui:Maak dit die vasgemaakte onderdeel}} verander dit |
| Voeg komponent in | {{ui:Voeg kopie by}} of {{ui:Dupliseer}} (nog 'n kopie) of {{ui:Voeg in}} (uit 'n onderdeellêer) |
| Wysig onderdeel in die samestelling | {{ui:Wysig onderdeel}}, dan {{ui:Terug}} |
| Inmengingsopsporing | {{ui:Botsing}} |
| 'n Komponent beweeg om die beweging te sien | Sleep die hoek- of verskuiwingskuifbalk van 'n draai- of skuifverbinding; {{ui:Toets die beweging vir botsings}} veeg dit. 'n Onderdeel sonder verbinding: **Beweeg met die hand** (pyltjies om te sleep, of getikte waardes) |
| Meet / Inspekteer | {{ui:Aansigte}}, dan {{ui:Meet}} ({{key:M}}): afstande, hoeke, radiusse, oppervlaktes; {{ui:Massa-eienskappe}} |
| Ontplooide aansig, materiaallys | In 'n samestelling met niks gekies nie: **Ontplooide aansigte** en **Materiaallys** in die regterpaneel |
| Massa-eienskappe | Die **Onderdeel**-blokkie: volume, oppervlakte, grootte, van die gefasette soliede liggaam (' n bietjie laag op ronde onderdele). Geen massa nie: daar is nog geen materiale nie |
| Stoor, Stoor as STEP | {{ui:Stoor}} laai 'n `.partcraft.json` af; {{ui:Uitvoer}} het STL, 3MF, presiese STEP (AP242 of AP214), gefasette STEP, DXF en 'n PDF-tekening |
| Maak 'n tekening vanaf die onderdeel | {{ui:Tekening}}: 'n outomatiese A3-blad met drie aansigte, isometries, een snit, een detail, datums, kenmerkbeheerrame en afwerksimbole. Net algehele groottes word gemaat |
| Middel-sleep om te draai | **Linkersleep** draai hier. Middel- of regssleep skuif. Die wiel zoem by die wyser |
| Aansigoriëntasie, Normaal na | {{ui:Aansigte}}-kieslys; {{ui:Normaal na}} vir 'n gekose vlak, vlak of skets |
| Zoem om te pas (F) | {{key:F}}, of {{ui:Pas pas}} (in 'n skets is {{key:F}} die {{ui:Fillet}}-gereedskap) |
| Regsklik-kieslyste | Geen. Regssleep skuif; in 'n skets beëindig regsklik 'n lynketting |

:::tip
As jou hande SolidWorks ken, kies die {{ui:Kenmerkboom}}-kieslysstyl in {{ui:Instellings}} › {{ui:PartCraft}} › {{ui:Kieslyste, sleutels en muis}}: 'n lint van Kenmerke-, Skets-, Oppervlaktes-, Evalueer-, Tekening-, Samestelling- en Aansig-oortjies, die middelknoppie wentel, {{key:Shift}} en die middelknoppie skuif, en die linkerknoppie kies net. Sien [Kieslyste, sleutels en muis](topic:menus-keys-and-mouse).
:::

## Verskille wat mense laat struikel

**Die hele skets is die profiel.** Ekstrudeer en Draai om gebruik elke geslote lus in die skets. Jy kan nie een streek of een kontoer van 'n skets vir 'n kenmerk kies nie. Gebruik een skets per kenmerk.

**Watter skets 'n kenmerk neem.** 'n Kenmerk gebruik die skets wat jy net gesluit het, of die een wat in die geskiedenis gekies is. Met niks gekies nie, neem dit die nuutste skets wat nog geen kenmerk gebruik nie. As jy die verkeerde een kry, kies die regte skets en kies die kenmerk weer.

**Veranderings geld terwyl jy tik.** Daar is geen kenmerkdialoog met OK en Kanselleer nie. Elke getal herbou dadelik, en {{key:Mod+Z}} is die manier terug. Die ontdoenlys dek skets-redigerings, kenmerke en instellings almal.

**Oor gedefinieer word nooit stilweg toegelaat nie.** Daar is geen aangedrewe (verwysings-) maate nie. 'n Maat wat die ander verhoudings reeds vasmaak, word as oor gedefinieer gerapporteer ("is reeds geïmpliseer. Skrap dit."). 'n Botsende een laat die geometrie onaangeraak en word rooi. Skrap een, of ontdoen.

**Sweeps en lofte is nog nie gebou nie; afrondings, skuinssnitte, dope en konsepte het perke.** Hierdie weergawe van PartCraft bou elke onderdeel met 'n maaskern; die statusbalkmerker sê altyd "Maaskern". Afrondings en skuinssnitte werk op reguit rande tussen twee plat vlakke, en waar afrondings by 'n hoek ontmoet, word hulle gemiter, nie gemeng nie. Dope maak oop, en konsepte kantel, slegs plat vlakke. Kenmerke wat 'n presiese kern nodig het, bly klikbaar, maar sê "nog nie gebou nie" wanneer hulle gekies word. Sien [Die maaskern](topic:solid-kernels) en [Wat nog nie gebou is nie](topic:not-built-yet).

**Twee knoppies genaamd Fillet.** In 'n skets rond {{ui:Fillet}} ({{key:F}}) 'n skethoek af. Op die onderdeel rond die {{ui:Fillet}} in die Kenmerke-groep soliede rande af (reguit rande tussen plat vlakke in hierdie weergawe). Daar is geen sweep of loft in hierdie weergawe nie: sien [Wat nog nie gebou is nie](topic:not-built-yet).

**Gate benodig los punte.** {{ui:Gat}} boor by punte wat met die Punt-gereedskap gemaak is. Sirkelmiddelpunte en lyneindpunte tel nie.

**Deur alles is net vir snitte.** 'n Verhoging benodig 'n diepte. Daar is nog geen "tot hoekpunt / oppervlak / volgende"-eindvoorwaardes nie.

**Die soliede liggaam is gefasetteer.** Die maaskern bou ronde vlakke uit plat fasette, so die aansig, volumes, STL- en 3MF-uitvoere is almal daaruit gemaak: **Krommes** in die onderdeel se paneel maak hulle fyner. Die presiese STEP-uitvoer is nie so nie: dit skryf ronde vlakke op hul ware oppervlaktes.

**Net millimeter.** Daar is nog geen duim-instelling nie. Vermenigvuldig duimgroottes met 25.4 wanneer jy dit tik.

**Y is op.** Die Voorvlak kyk na jou en Bo kyk af op die onderdeel, soos jy verwag, maar die wêreld se opwaartse as is Y. STL-, 3MF- en presiese STEP-uitvoere word na Z op gedraai; die gefasette STEP hou Y op.

**Koppelings is vlakke, nie geometriepare nie.** 'n Verbinding begin altyd vanaf twee plat vlakke wat vlak teen vlak geplaas word. Vir 'n pen in 'n gat, kies die plat vlak rondom die gat en die pen se skouer, stel dan **Sentreer op** op die gat se as en die pen se omwentelingsas. Onderdele wat nie deur verbindings bereik word nie, bly waar hulle ingevoeg is; jy kan hulle nie sleep nie. Verbindings in 'n lus word nie opgelos nie.

**Stoor is 'n aflaai.** Daar is geen lêer wat jy steeds oorskryf nie. Elke stoor is 'n nuwe lêer in jou aflaaie-gids. Noem die onderdeel eers, en hou jou lêers in 'n projekgids.

**Geen konteksmenu's, geen opdragbestuurder-oortjies nie.** Alles is op die werkbalk en die regterpaneel, en die werkbalk verander met wat jy doen: die skets-gereedskap verskyn net in 'n skets, die samestellinggereedskap net in 'n samestelling.

**Sleutels is enkele letters binne 'n skets.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} en {{key:S}} kies gereedskap sonder enige modifiseerder. Sien [Sleutels en muis](topic:keyboard).
