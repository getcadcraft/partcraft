---
title: Sweep, loft en konsep
summary: Sweep 'n geslote profiel langs 'n pad van sketskrommes of modelrande, loft deur snitte op verskillende vlakke, en voeg konsep by vlakke; met die opsies, die presiese resultate en die boodskappe.
keywords: sweep, geswepte uitstulping, geswepte snit, pyp, pad, loft, geloftde uitstulping, meng snitte, reguit, konsep, konsephoek, taps lopende vlakke, neutrale vlak, trekrigting, vormgiet
from: 9d637981
---

:::note
**In hierdie weergawe** is sweep en loft nog nie gebou nie: hulle benodig 'n presiese meetkundekern, wat hierdie weergawe van PartCraft nie het nie. [Wat nog nie gebou is nie](topic:not-built-yet) sê wat om eerder te doen; die Sweep- en Loft-afdelings beskryf hulle soos hulle met 'n presiese kern werk. **Konsep werk** op plat vlakke: die maaskern bou dit, met dieselfde resultaat wat 'n presiese kern gee.
:::

Al drie is in die Kenmerke-groep se {{ui:Meer}}-kieslys (sien [Die maaskern](topic:solid-kernels)). Elkeen kan materiaal byvoeg, dit uitsny, slegs die oorvleueling hou (**Snyding**) of 'n **Nuwe liggaam** maak (sweep en loft: **Bewerking** in die paneel).

## Sweep

'n Sweep beweeg 'n geslote profiel langs 'n pad: pype, handvatsels, drade van draad, relings.

1. Teken die **pad** in een skets: lyne en boë wat punt-tot-punt aaneengesluit is (of gebruik modelrande, hieronder).
2. Teken die **profiel** in 'n ander skets waarvan die vlak deur een einde van die pad gaan, byvoorbeeld 'n sirkel op die boonste vlak by die begin van 'n pad wat op die voorste vlak geteken is.
3. Kies die profielskets en kies {{ui:Meer}}, dan {{ui:Sweep}}. Die jongste ander skets word die pad.

In die paneel:

| Instelling | Wat dit doen |
|---|---|
| **Pad** | Merk die skette wat die pad maak (verskeie skette sluit punt-tot-punt aaneen tot een 3D-pad); **Kies modelrande** voeg rande van die onderdeel by |
| **Oriëntasie** | Volg die pad (verstek), Frenet, Vas (snitte bly parallel met die profiel), Hou 'n rigting, Langs 'n leikromme |
| **Eindskaal** | Die profiel groei of krimp lineêr tot hierdie grootte aan die einde (1 = konstant) |

Skerp hoeke in die pad word met 'n skuinssnit verbind. 'n Sirkel met radius 5 wat langs 'n lyn van 100 mm geswiep word, is 'n silinder van presies 2500π mm³; langs 'n kwartboog met radius 50, 'n kwart-torus van 625π² mm³.

## Loft

'n Loft meng deur twee of meer snitte op verskillende vlakke.

1. Teken elke snit in sy eie skets (een geslote lus elk), op basisvlakke, verwysingsvlakke (sien [Verwysingsvlakke, asse en punte](topic:reference-geometry)) of vlakke.
2. Kies {{ui:Meer}}, dan {{ui:Loft}}. Elke ongebruikte skets met een lus word 'n snit, in geskiedenisvolgorde.

Die paneel lys die snitte in volgorde (**Op** herrangskik, **Verwyder** laat een val); **Voeg 'n skets by** voeg nog een by, **Kies 'n vlak** voeg 'n plat vlak van die onderdeel by. **Reguit** maak plat vlakke tussen snitte in plaas van 'n gladde meng. Tussen twee vierkante is albei dieselfde afgeknotte piramide (van 'n 40 mm-vierkant na 'n 20 mm-vierkant oor 30 mm: presies 28000 mm³).

Snitte met 'n verskillende aantal sye (een vierkant na een driehoek) word deur OpenCascade gepas, wat die sykante kan draai; die kenmerk waarsku jou. Teken snitte met dieselfde aantal sye, en begin by ooreenstemmende hoeke, vir die suiwerste resultaat.

### Geleirelings

Geleirelings is krommes wat die loft se sye van die eerste snit tot die laaste moet volg, vir 'n uitbult, 'n middeldeel of 'n uitwaaiing wat jy self teken.

1. Teken twee of meer relings: oop krommes (lyne, boë, splines) wat van die eerste snit tot die laaste loop en elke snit een keer kruis. Een skets kan verskeie relings hou: elke afsonderlike ketting daarin is sy eie rel. Teken 'n rel so dat dit werklik elke snit ontmoet: klou sy punte aan die snitte se punte vas.
2. In die Loft-paneel, onder **Geleirelings**, merk die skette wat hulle hou, of klik {{ui:Kies modelrande as rails}} en klik rande van die onderdeel ({{key:Esc}} eindig).

Met relings is die loft 'n Gordon-oppervlak deur die snitte en die relings (sien [Oppervlakke deur 'n krommenetwerk](topic:gordon-surfaces)), met plat eindvlakke aan albei kante tot 'n soliede liggaam. Die paneel sê hoe noukeurig dit hulle volg. Elke snit moet dan 'n skets wees ('n punt of 'n vlak kan nie 'n rel neem nie), en **Reguit** is nie van toepassing nie. 'n Rel wat 'n snit met meer as 0.01 mm mis, word geweier, met die gaping.

Getoets: twee sirkels (20 mm en 10 mm in deursnee oor 40 mm) met vier reguit relings gee die volume van die keëlafknot binne 0.000002 %; boë wat 5 mm uitbult, gee 'n vat wat elke rel volg binne 0.00001 mm.

## Konsep

Konsep kantel vlakke sodat 'n onderdeel uit 'n vorm kom.

1. Kies {{ui:Meer}}, dan {{ui:Konsep}} (of hou {{key:Shift}}+klik eers vlakke). Met niks gekies nie is jy in kiesmodus: klik elke vlak om te kantel, dan {{ui:Klaar}}.
2. Stel **Hoek (°)**, die **Neutrale vlak** (waar die vlakke hul grootte behou) en die **Trekrigting** (standaard die neutrale vlak se normaal).

'n Positiewe hoek laat die vlak na binne langs die trek leun en verwyder materiaal; 'n negatiewe een voeg dit by. Die neutrale vlak begin as die Bo-vlak. In hierdie weergawe kan slegs plat vlakke gekonsep word: 'n silinder, keël of vrye vorm-vlak sê "Konsep: in hierdie weergawe slegs plat vlakke (die maaskern bou dit)." Die vier sye van 'n 100 × 100 × 50-blok, gekonsep 5° om sy onderkant, word 'n afgeknotte piramide van presies h/3·(a² + b² + ab), met b = a − 2h·tan 5°.

## Boodskappe

| Boodskap | Wat om te doen |
|---|---|
| "Die profiel se vlak moet deur een einde van die pad gaan …" | Skuif die profielskets na die begin (of einde) van die pad |
| "Die pad het 'n gaping: sy krommes sluit nie punt-tot-punt aan nie …" | Sluit die pad se krommes aan; in aparte skette moet hul punte presies ontmoet |
| "'n Loft-snit benodig presies een geslote lus" | Verdeel die skets, of verwyder die ekstra lus |
| "… kan nie oor hierdie neutrale vlak gekonsep word nie …" | Die vlak is parallel met die neutrale vlak of ontmoet dit nie |
| "Konsep: in hierdie weergawe slegs plat vlakke (die maaskern bou dit)." | 'n Gekose vlak is geboë. Verwyder dit; konsep slegs plat vlakke |

:::note
Nog nie gebou nie: draaiende sweeps, dunwand- en oppervlak-sweeps, loft-geleirelings en raaklynigheid aan die einde, konsep op silinders, keëls en vrye vorm-vlakke.
:::
