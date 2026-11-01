---
title: Kom i gang med PartCraft
summary: Hvad PartCraft kan i dag, hvad din browser skal bruge, og en første del på ti minutter, fra skitse til gemt fil.
keywords: start, første kørsel, hurtig start, introduktion, vejledning, første del, plade, parametrisk, delmodellør
from: 5f0a668d
---

PartCraft er CadCraft-familiens parametriske del- og samlingsapp. Du tegner en 2D-skitse, binder den fast med relationer og mål, gør den til et massivt legeme med features som ekstruder, drej og hul og ændrer et vilkårligt tal senere: delen genopbygges fra sin historik. Dele kommer derefter ind i samlinger, hvor led placerer dem og lader dig kontrollere bevægelsen.

Hvad denne version kan:

| Opgave | Hvad du får |
|---|---|
| Skitser | Linjer, rektangler, cirkler, buer, punkter og midterlinjer, med relationer og mål, og en levende tilstand: under-, fuldt eller overbestemt |
| Features til massive legemer | Ekstruder, skær, drej, drejet skæring, enkle huller og huller med forsænkning, lineære og cirkulære mønstre, spejl, afrundinger og affasninger på rette kanter mellem plane flader samt skaller og udtræksvinkler på plane flader. Sweeps, lofts og de andre features, der kræver en eksakt kerne, er ikke lavet endnu i denne version: se [Hvad der ikke er lavet endnu](topic:not-built-yet) |
| Historik | Redigér en vilkårlig features tal, undertryk, rul tilbage, omarrangér og slet, med fortryd |
| Samlinger | Dele forbundet af stive led, drejeled og glideled, en kollisionskontrol og en bevægelseskontrol |
| Tegninger | Et A3-ark med tre visninger, en isometri, et snit, en detaljevisning, hovedmål, datum, feature control frames og overfladebehandlingssymboler, eksporteret som PDF |
| Filer | Egne del- og samlingsfiler; STL, 3MF, facetteret STEP, DXF og PDF ud |

Alt kører i din browser, på din computer. **Der uploades ikke noget.** Se [Filer: åbn, gem og eksportér](topic:files) for, hvor filer havner.

## Det skal du bruge

- En aktuel Chrome, Edge, Firefox eller Safari med **WebGL** (3D-grafik) og **WebAssembly** slået til. Begge er slået til som standard. Den massive geometri bygges af en WebAssembly-netkerne, der indlæses med appen: se [Netkernen](topic:solid-kernels).
- En mus er nemmest. Et pegefelt virker, og touchskærme virker til visning og enkel skitsering: se [Pegefelt, touch og små skærme](topic:trackpad-and-touch).
- En skærm på mindst 1280 pixel i bredden viser hele værktøjslinjen i én række. Smallere vinduer ruller værktøjslinjen sidelæns; på en telefon åbnes panelerne som ark fra en linje nederst.

Mere om browsere: [Browsere og computere](common:browsers).

:::note
PartCraft kører i browseren og på skrivebordet inde i CadCraft Studio. Skygemning findes ikke endnu: du åbner dele fra din computer og gemmer dem tilbage til den som filer.
:::

## Åbn PartCraft

1. Åbn PartCraft.
2. Vent, mens skærmen siger »Indlæser kernen for massive legemer…«. Det tager et øjeblik første gang.
3. Du ser en tom 3D-visning med tre basisplaner, historikken til venstre (»Del1«, derefter Frontplan, Topplan, Højre plan) og en boks i visningen med overskriften »Start en del«.
4. Chippen nær højre ende af statuslinjen siger »Netkerne«: PartCraft bygger hver del med netkernen i denne version, så runde flader er plane facetter. Du kan begynde at modellere med det samme.

Hvis visningen siger, at browseren ikke kan vise 3D, eller kernen ikke blev indlæst, så se [Fejlfinding](topic:troubleshooting#the-app-does-not-start).

## Din første del: en plade med et hul

Du laver en plade på 60 × 40 mm, 10 mm tyk, med et hul på 6 mm igennem. Enhederne er millimeter.

### Skitsér konturen

1. Klik på **Frontplan** i historikken til venstre. Planet fremhæves i visningen.
2. Vælg {{ui:Skitse}} på værktøjslinjen, eller tryk {{key:S}}. Visningen drejer, så den ser lige på planet, og værktøjet Linje er aktivt.
3. Tryk {{key:R}} for værktøjet Rektangel.
4. Flyt markøren hen på origo (den lille røde cirkel med et kryds). En lille firkant viser, at den fanger. Klik.
5. Flyt op og til højre og klik igen. Du har et rektangel. Dets linjer er blå: blå betyder, at de stadig kan flytte sig.

### Giv det størrelser

1. Tryk {{key:D}} for værktøjet Mål.
2. Klik på den øverste linje, og klik derefter lidt over den. Et talfelt åbnes med den aktuelle længde.
3. Skriv `60` og tryk {{key:Enter}}. Rektanglet ændres til 60 mm bredt.
4. Klik på den venstre linje, og klik derefter lidt til venstre for den. Skriv `40` og tryk {{key:Enter}}.

Chippen øverst til venstre i visningen siger nu **Fuldt bestemt**, og linjerne bliver til blæk (sort på temaet Papir, lyst på temaet Model). Hvert punkt og hver størrelse er fastlåst.

:::tip
Hvis du startede rektanglet væk fra origo, siger chippen stadig »Underbestemt · 2 frihedsgrader«. Tryk {{key:S}} for Vælg, klik på et hjørne, {{key:Shift}}+klik på origo, og vælg derefter {{ui:• Sammenfaldende}} i højre panel.
:::

### Ekstruder den

1. Vælg {{ui:Afslut}} på værktøjslinjen, eller tryk {{key:Esc}}, indtil skitsen lukker (som regel to gange).
2. Vælg {{ui:Ekstruder}}. Et 10 mm massivt legeme vises. »Extrude1« føjes til historikken, med »Sketch1« indrykket under.
3. Højre panel viser ekstrudens indstillinger. For at ændre tykkelsen skriver du et nyt tal i **Dybde (mm)** og trykker {{key:Enter}} eller {{key:Tab}}. Delen genopbygges med det samme.

### Tilføj hullet

1. Klik på den store plane flade foran på pladen (enden af ekstrusionen). Hele fladen fremhæves, og højre panel siger **Flade**.
2. Vælg {{ui:Skitsér på denne flade}} i højre panel.
3. Tryk {{key:P}} for værktøjet Punkt og klik nær midten af fladen.
4. Vælg {{ui:Afslut}}.
5. Vælg {{ui:Hul}}. Et hul på 6 mm går gennem pladen. Ændr **Diameter (mm)** i højre panel, hvis du vil.

Boksen **Del** nederst til venstre viser nu en volumen, et overfladeareal, størrelsen (60 × 40 × 10 mm) og »Gennemgående huller: 1«.

### Gem den

1. Tryk {{key:Mod+S}} eller vælg {{ui:Gem}}.
2. Din browser downloader `Del1.partcraft.json` til sin downloadmappe. Filen rummer hele historikken: åbn den igen med {{ui:Åbn}} for at fortsætte med at redigere.

For at omdøbe delen først klikker du på tomt område i visningen, så intet er valgt, og skriver et nyt **Navn** i højre panel.

## Hvor du kan gå videre

- [Tegn din første skitse](topic:sketch-basics) og [Bestem en skitse fuldt ud](topic:relations-dimensions) forklarer skitseværktøjet ordentligt.
- [Ændr en del via dens historik](topic:edit-history) viser, hvordan du redigerer det, du har bygget.
- [Afrund, affas og hul ud](topic:fillet-chamfer-shell) og [Lav en tegning](topic:drawing-pdf) gør delen færdig. [Hvad der ikke er lavet endnu](topic:not-built-yet) viser, hvad denne version ikke kan, såsom sweeps og lofts.
- [Hvis du kommer fra en anden parametrisk modellør](topic:coming-from) viser de vaner, der fungerer anderledes her.
- [Taster og mus](topic:keyboard) er den fulde liste over genveje.
- [Brug af denne hjælp](common:help).
