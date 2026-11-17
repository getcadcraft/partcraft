---
title: Kom i gang med PartCraft
summary: Hvad PartCraft gør i dag, hvad din browser skal bruge, og en første del på ti minutter, fra skitse til gemt fil.
keywords: start, første kørsel, hurtig start, introduktion, gennemgang, første del, plade, parametrisk, delmodellering
from: 7d43283f
---

PartCraft er den parametriske del- og samlingsapp i CadCraft-familien. Du tegner en 2D-skitse, fastlåser den med relationer og mål, gør den til et legeme med funktioner som ekstrudering, omdrejning og hul, og ændrer ethvert tal senere: delen genopbygges fra sin historik. Dele føjes derefter til samlinger, hvor led placerer dem og lader dig kontrollere bevægelsen.

Hvad denne build gør:

| Opgave | Hvad du får |
|---|---|
| Skitser | Linjer, rektangler, cirkler, buer, punkter og midterlinjer, med relationer og mål og en live-status: underdefineret, fuldt defineret eller overdefineret |
| Massive funktioner | Ekstrudering, udskæring, omdrejning, omdrejningsudskæring, enkle og forsænkede huller, lineære og cirkulære mønstre, spejling, afrundinger og affasninger på rette kanter mellem flade flader, samt skaller og udtræksvinkler på flade flader. Sweeps, lofts og de andre funktioner, der kræver en eksakt kerne, er ikke lavet endnu i denne version: se [Hvad der ikke er lavet endnu](topic:not-built-yet) |
| Historik | Rediger en funktions tal, undertryk, rul tilbage, omarranger og slet, med fortryd |
| Samlinger | Dele forbundet med stive, roterende og glidende led, en kollisionskontrol og en bevægelseskontrol |
| Tegninger | Et A3-ark med tre visninger, en isometrisk, et snit, en detaljevisning, samlede mål, datum, rammer til funktionskontrol og overfladeafslutningssymboler, eksporteret som PDF |
| Filer | Egne del- og samlingsfiler; eksport som STL, 3MF, eksakt STEP, DXF og PDF |

Alt kører i din browser, på din computer. **Intet uploades.** Se [Filer: åbn, gem og eksportér](topic:files) for, hvor filerne ender.

## Hvad du skal bruge

- En aktuel version af Chrome, Edge, Firefox eller Safari med **WebGL** (3D-grafik) og **WebAssembly** slået til. Begge er slået til som standard. Den faste geometri bygges af en WebAssembly-mesh-kerne, som indlæses sammen med appen: se [Mesh-kernen](topic:solid-kernels).
- En mus er nemmest. Et trackpad virker, og touch-skærme virker til visning og simpel skitsering: se [Trackpad, touch og små skærme](topic:trackpad-and-touch).
- En skærm på mindst 1280 pixels bredde viser hele værktøjslinjen i én række. Smallere vinduer scroller værktøjslinjen sidelæns; på en telefon åbnes panelerne som ark fra en bjælke nederst.

Mere om browsere: [Browsere og computere](common:browsers).

:::note
PartCraft kører i browseren, og på desktop inde i CadCraft Studio. Skylagring er ikke tilgængelig endnu: du åbner dele fra din computer og gemmer dem tilbage dér som filer.
:::

## Åbn PartCraft

1. Åbn PartCraft.
2. Vent, mens skærmen siger »Indlæser solid-kernen…«. Det tager et øjeblik første gang.
3. Du ser en tom 3D-visning med tre basisplaner, historikken til venstre (»Part1«, derefter Forplan, Topplan, Højreplan) og en boks i visningen med overskriften »Start en del«.
4. Chippen ved den højre ende af statuslinjen siger »Mesh-kernen«: PartCraft bygger hver del med mesh-kernen i denne version, så runde flader er flade facetter. Du kan begynde at modellere med det samme.

Hvis visningen siger, at browseren ikke kan vise 3D, eller at kernen ikke blev indlæst, se [Fejlfinding](topic:troubleshooting#the-app-does-not-start).

## Din første del: en plade med et hul

Du laver en 60 × 40 mm plade, 10 mm tyk, med et 6 mm hul igennem. Enhederne er millimeter.

### Skitsér konturen

1. Klik på **Forplan** i historikken til venstre. Planet fremhæves i visningen.
2. Vælg {{ui:Skitse}} i værktøjslinjen, eller tryk {{key:S}}. Visningen drejer, så den kigger lige på planet, og linjeværktøjet er aktivt.
3. Tryk {{key:R}} for rektangelværktøjet.
4. Flyt markøren hen på origo (den lille røde cirkel med et kryds). En lille firkant viser, at den fanger. Klik.
5. Flyt op og til højre, og klik igen. Du har et rektangel. Dets linjer er blå: blå betyder, at de stadig kan flyttes.

### Giv den mål

1. Tryk {{key:D}} for målværktøjet.
2. Klik på den øverste linje, og klik derefter lidt over den. En talboks åbnes med den aktuelle længde.
3. Skriv `60` og tryk {{key:Enter}}. Rektanglet ændres til 60 mm bredt.
4. Klik på venstre linje, og klik derefter lidt til venstre for den. Skriv `40` og tryk {{key:Enter}}.

Chippen øverst til venstre i visningen siger nu **Fuldt defineret**, og linjerne bliver til blæk (sort på Paper-temaet, lys på Model-temaet). Hvert punkt og hver størrelse er fastlåst.

:::tip
Hvis du startede rektanglet væk fra origo, siger chippen stadig »Underdefineret · 2 frihedsgrader«. Tryk {{key:S}} for Vælg, klik på ét hjørne, {{key:Shift}}+klik på origo, og vælg derefter {{ui:• Sammenfaldende}} i det højre panel.
:::

### Ekstrudér den

1. Vælg {{ui:Afslut}} i værktøjslinjen, eller tryk {{key:Esc}}, indtil skitsen lukkes (normalt to gange).
2. Vælg {{ui:Ekstruder}}. Et 10 mm legeme vises. »Ekstruder1« føjes til historikken, med »Skitse1« indrykket under den.
3. Det højre panel viser ekstruderingens indstillinger. For at ændre tykkelsen skriver du et nyt tal i **Dybde (mm)** og trykker {{key:Enter}} eller {{key:Tab}}. Delen genopbygges med det samme.

### Tilføj hullet

1. Klik på den store flade foran på pladen (enden af ekstruderingen). Hele fladen fremhæves, og det højre panel siger **Flade**.
2. Vælg {{ui:Skitsér på denne flade}} i det højre panel.
3. Tryk {{key:P}} for punktværktøjet, og klik nær midten af fladen.
4. Vælg {{ui:Afslut}}.
5. Vælg {{ui:Hul}}. Et 6 mm hul går igennem pladen. Ændr **Diameter (mm)** i det højre panel, hvis du vil.

Boksen **Del** nederst til venstre viser nu et volumen, et overfladeareal, størrelsen (60 × 40 × 10 mm) og »Gennemgående huller: 1«.

### Gem den

1. Tryk {{key:Mod+S}} eller vælg {{ui:Gem}}.
2. Din browser downloader `Part1.partcraft.json` til sin downloadmappe. Filen indeholder hele historikken: åbn den igen med {{ui:Åbn}} for at fortsætte med at redigere.

For at omdøbe delen først: klik på tomt rum i visningen, så intet er valgt, og skriv et nyt **Navn** i det højre panel.

## Hvor du skal hen næste gang

- [Tegn din første skitse](topic:sketch-basics) og [Fastlås en skitse fuldt](topic:relations-dimensions) forklarer skitseværktøjet ordentligt.
- [Ændr en del via dens historik](topic:edit-history) viser, hvordan du redigerer det, du har bygget.
- [Afrund, affas og skal](topic:fillet-chamfer-shell) og [Lav en tegning](topic:drawing-pdf) færdiggør delen. [Hvad der ikke er lavet endnu](topic:not-built-yet) lister, hvad denne version ikke gør, fx sweeps og lofts.
- [Fra en anden parametrisk modelleringsapp](topic:coming-from) lister vaner, der virker anderledes her.
- [Taster og mus](topic:keyboard) er den fulde liste over genveje.
- [Brug denne hjælp](common:help).
