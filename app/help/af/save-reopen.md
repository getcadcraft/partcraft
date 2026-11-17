---
title: Stoor, heropen en werk voort
summary: Stoor onderdele en samestellings op jou rekenaar, gee hulle name, open hulle weer met 'n knoppie, sleutel of sleep, hou weergawes, en voorkom dat werk verlore gaan in 'n blaaieroortjie.
keywords: stoor, maak oop, heropen, laai, aflaai, weergawes, rugsteun, hernoem, lêernaam, verlore werk, verlaat webwerf, partcraft.json, partcraft-asm.json, nuwe onderdeel
from: c18a5abc
---

PartCraft hou niks tussen besoeke nie. Jou onderdeel leef in die blaaieroortjie totdat jy dit as 'n lêer stoor, en dit kom terug wanneer jy daardie lêer oopmaak.

## Stoor 'n onderdeel

1. Gee die onderdeel 'n naam: klik op leë ruimte in die aansig sodat niks gekies is nie, tik dan die **Naam** in die regterpaneel en druk {{key:Enter}}. Die geskiedenisopskrif verander om daarby te pas.
2. Druk {{key:Mod+S}} of kies {{ui:Stoor}}.
3. Die blaaier laai `<naam>.partcraft.json` af. Die statusbalk sê "Gestoor Bracket.partcraft.json (die volledige geskiedenis; open dit hier weer om voort te wysig)."

As 'n skets oop is, maak stoor dit eers toe.

Die lêer bevat elke skets, verhouding, maat en kenmerk, plus onderdrukte kenmerke, die terugrolposisie, die tekenblad se instellings en GD&T-notas, en die volle teks van enige ingevoerde STEP-soliede. Jou Ontdoen-lys word nie gestoor nie.

## Stoor 'n samestelling

In 'n samestelling laai dieselfde {{ui:Stoor}} of {{key:Mod+S}} `<samestellingnaam>.partcraft-asm.json` af. Elke onderdeel word binne-in gestoor: jy het nie die afsonderlike onderdeellêers nodig om dit weer oop te maak nie.

Terwyl jy 'n onderdeel binne 'n samestelling wysig, stoor {{key:Mod+S}} daardie onderdeel op sy eie as 'n `.partcraft.json`. Kies eers {{ui:Terug}}, en stoor dan, om die hele samestelling te stoor.

## Heropen

Enige van hierdie:

- kies {{ui:Maak oop}} of druk {{key:Mod+O}}, en kies dan die lêer;
- sleep die lêer van {{pick:mac=Finder|windows=File Explorer|linux=jou lêerbestuurder}} na die 3D-aansig ("Sleep 'n PartCraft-onderdeel hierheen om dit oop te maak" verskyn).

PartCraft onderskei onderdele van samestellings aan die hand van wat binne is, so albei maak op dieselfde manier oop. 'n `.step`- of `.stp`-lêer maak oop as 'n ingevoerde soliede: sien [Open 'n STEP-lêer en bou daarop voort](topic:import-step). Die statusbalk bevestig: "Oopgemaak Bracket.partcraft.json: 7 kenmerke." of "Oopgemaak Hinge.partcraft-asm.json: 3 onderdele, 2 verbindings."

As die onderdeel op die skerm ongestoorde veranderinge het, vra PartCraft eers: {{ui:Kanselleer}}, {{ui:Skrap veranderinge}} of {{ui:Stoor eers}}.

:::warning
Maak 'n samestelling toe ({{ui:Maak toe}}) voordat jy 'n onderdeellêer oopmaak. As jy 'n onderdeel oopmaak terwyl 'n samestelling op die skerm is, laai die onderdeel agter die samestelling, en jy sien dit eers nadat jy die samestelling toegemaak het. 'n Samestellingslêer wat oopgemaak word, vervang ook 'n ongestoorde samestelling sonder om te vra, so stoor dit eers.
:::

## Begin weer

{{ui:Nuut}} begin 'n leë "Part1". Dit vra eers as daar ongestoorde veranderinge is, en maak 'n oop samestelling toe (en vra as dit ongestoor is).

## Hou weergawes

Elke stoor is 'n nuwe aflaai, so jy kan weergawes eenvoudig hou deur die lêers te bewaar:

- Sit 'n weergawe of datum in die naam voordat jy stoor: "Bracket rev B".
- Jou blaaier voeg dalk " (1)", " (2)" by wanneer 'n lêer met dieselfde naam reeds in die aflaaivouer is. Die nuutste is die een met die hoogste nommer, of kyk na die datum in {{pick:mac=Finder|windows=File Explorer|linux=jou lêerbestuurder}}.
- Skuif voltooide lêers uit die aflaaivouer na jou projekvouer.

Sien [Waar jou lêers gaan](common:your-files) vir waar aflaaie op elke stelsel gaan.

## Moenie werk verloor nie

- Stoor voordat jy die oortjie toemaak, herlaai of die rekenaar lank laat slaap. Die blaaier vra "Verlaat webwerf?" as jy probeer toemaak met ongestoorde veranderinge, maar 'n ineenstorting of 'n toegemaakte skootrekenaar gee geen waarskuwing nie.
- Privaat- of inkognitovensters werk, maar niks anders is anders nie: die lêer is steeds die enigste kopie.
- Wolkberging en weergawegeskiedenis is nog nie beskikbaar nie.
