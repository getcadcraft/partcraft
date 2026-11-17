---
title: Skriv og kør scripts (Script-arbejdsområdet)
summary: Script-arbejdsområdet trin for trin: skriv et CraftScript- eller Lua-script, kør det med F5, læs konsollen, gem resultater i variablerne til næste script, vis meshes, felter og grafer, stop en kørsel og gem scripts sammen med delen.
keywords: script, scripting, script mens du modellerer, løsriv, anden skærm, second monitor, param, params, parametre i scripts, CraftScript, Lua, kode, program, editor, konsol, REPL, kommandolinje, kør, F5, kør valg, stop, variabler, arbejdsområde, graf, felt, mesh, tegnforklaring, underdisplay, analyse, automatisering, matrix, numerisk
from: d0003e89
---

**Forhåndsvisning.** Scripting er nyt i PartCraft 0.3 og er en forhåndsvisning: sproget, biblioteket og måden, scripts gemmes på, kan stadig ændre sig, og scripts, der skrives nu, kan få brug for små rettelser senere. Fortæl os, hvad der går i stykker.

Script-arbejdsområdet kører dine egne beregninger ved siden af delen: små summer, hele analyser eller scripts fra [analysebiblioteket](topic:craftscript-library). Scripts skrives i **CraftScript** (et matrixsprog, meget lig MATLAB, se [CraftScript-sproget](topic:craftscript-language)) eller i **Lua** (se [Scripts i Lua](topic:craftscript-lua)) eller **Python** (se [Scripts i Python](topic:craftscript-python)).

Vælg **Script** i feltet **Arbejdsområde** til venstre på værktøjslinjen. Delen ændres ikke. Det højre panel bliver til script-panelet (bredere end normalt; træk i dets kant for at ændre det, eller flyt det til en anden skærm med dets {{ui:⋯}}-menu, se [Ordn panelerne](common:arrange-panels)).

## Skriv script, mens du modellerer

Du behøver ikke forlade Design-arbejdsområdet for at skrive et script. I Design indeholder det højre panels fane {{ui:Script}} den samme editor, konsol, variabler og bibliotek, med de samme scripts. Feature-træet og visningen fungerer stadig: klik på en feature for at vælge den, dobbeltklik på en skitse for at redigere den, drej visningen, og gå derefter tilbage til fanen {{ui:Script}} og tryk {{key:F5}}.

Det et script **viser** (meshes, felter, grafer, tabeller) tegnes ikke over din model i Design: konsollen siger det, og Script-arbejdsområdet har det hele, når du skifter til det.

{{ui:Løsriv}}, ved siden af {{ui:Kør}}, flytter hele panelet til et vindue for sig selv, fx på en anden skærm, så editoren og den fulde visning står side om side. {{ui:Sæt tilbage}} fastgør det igen. Se [Ordn panelerne](common:arrange-panels).

## Kør dit første script

1. Skriv i editoren, fx:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'En sinuskurve')
   disp(max(y))
   ```

2. Tryk på {{key:F5}} (eller {{ui:Kør}}). Konsollen under editoren viser det, scriptet udskrev, og »Færdig på … s«. Grafen vises i **underdisplayene** langs bunden af 3D-visningen.
3. En linje uden semikolon udskriver sin værdi, som i MATLAB: `a = 3` udskriver `a = 3`; `a = 3;` udskriver ingenting.
4. For kun at køre en del af et script, vælg linjerne og tryk {{key:Mod+Enter}} ({{ui:Valg}}). Uden valg kører den linjen, markøren står på.
5. Linjen nederst i konsollen (efter `>>`) kører én sætning, når du trykker {{key:Enter}}. {{key:Up}} og {{key:Down}} henter tidligere linjer frem.

## Find, sammenfold og fuldfør

- **Find og erstat.** Tryk på {{key:Mod+F}} (eller {{key:Mod+H}} for også at erstatte). En linje åbner sig over koden: skriv det, der skal findes; forekomsterne lyser op, og tallet viser, hvor du er. Knapperne ved feltet skelner store og små bogstaver (**Aa**), finder kun hele ord (**W**) og bruger et regulært udtryk (**.\***; i erstatningen sætter `$1` det tilbage, den første gruppe matchede). {{ui:Erstat}} erstatter den aktuelle forekomst, {{ui:Alle}} erstatter alle forekomster som ét trin i {{key:Mod+Z}}.
- **Sammenfoldning.** Klik på ▾ ved siden af et linjenummer, eller tryk {{key:Mod+Shift+[}} med markøren på en linje med `function`, `if`, `for`, `while`, `switch` eller `try` (Lua: `function`, `do`, `if`, `repeat`), for at skjule dens indre linjer; linjen siger, hvor mange. ▸ eller {{key:Mod+Shift+]}} åbner den igen. Sammenfoldning skjuler kun linjer: Kør, Gem, kopiering og linjenumrene tæller stadig alle linjer, og hvis du skriver på en sammenfoldet linje, åbnes den først.
- **Fuldførelse.** Skriv to bogstaver af et navn, eller tryk {{key:Mod+Space}}: en liste viser de variabler, du har, sprogets funktioner (med deres argumenter), nøgleord og navne, der allerede står i scriptet. Vælg med piletasterne og tryk {{key:Enter}} eller {{key:Tab}}.

## Når noget går galt

- En fejl nævner problemet og dets linje: linjen markeres med rødt i editoren, og **Linje n** i konsollen fører dig dertil.
- En løkke, der aldrig slutter: tryk {{ui:Stop}} (værktøjslinje eller panel). Scriptet stopper straks; variablerne beholder de værdier, de havde før den kørsel.
- Hver kørsel har også et trinbudget (2 milliarder trin som standard; ændr det under **Kørselsindstillinger** i panelet). En kørsel, der overskrider det, stopper med en besked.

## Variabler føres videre fra script til script

Hver variabel på øverste niveau, et script laver, havner på fanen **Variabler** (navn, type, størrelse, mindste og største værdi) og bliver der til næste script, på begge sprog. Sådan mesher ét script, det næste løser, og et tredje plotter.

- Klik på en variabel for at vise den: meshes, felter og modeller i 3D-visningen, arrays som en tabel (plus en linjegraf for en vektor eller et farvekort for en matrix) i underdisplayene.
- {{ui:Gem som JSON}}, {{ui:Gem som CSV}} (en tabel med tal) og {{ui:Gem som HDF5}} downloader den; {{ui:Slet}} fjerner den; {{ui:Ryd alt}} tømmer arbejdsområdet.
- Sæt kryds i **Gem variablerne sammen med delen** for at beholde dem i delfilen (op til 32 MB; større bliver kun til dette besøg). Når du åbner sådan en del, tilbyder panelet at indlæse dem.

## Meshes, felter og grafer

- `show(m)` tegner et mesh; `show(f)` farvelægger et felt på sit mesh med en tegnforklaring. Listen **Vist** øverst til venstre i visningen skjuler ({{ui:eye}}) eller fjerner hvert element og skjuler eller viser selve delen. Under tegnforklaringen skrives et interval (**Fra**, **til**) eller tryk {{ui:Auto}}; et vektor- eller spændingsfelt tilbyder også, hvilken komponent der vises.
- `show(f, 'deform', u, 'scale', 50)` tegner mesh'et flyttet af et forskydningsfelt `u`, forstørret 50 gange (uden `scale` ca. 8 % af modellens størrelse).
- Klik på et vist mesh: den nærmeste knude, elementet og feltværdierne der vises i underdisplayene (**Valgt**).
- `plot`, `imagesc` og `table` sætter en linjegraf, et farvekort over et 2-D-array eller en tabel i underdisplayene. En graf med samme `'id'` (eller titel) som en tidligere erstatter den, så en løkke kan opdatere én konvergensgraf; `'append', true` tilføjer en kurve til den. {{ui:Ryd}} tømmer underdisplayene; pilen folder dem sammen.
- Med to eller flere grafer viser {{ui:Side om side}} dem alle på én gang (de seks nyeste); klik på en tabels eller et billedes fane viser den ene alene igen.
- Hver graf har {{ui:PNG}}, {{ui:SVG}} og {{ui:CSV}} under sig. PNG og SVG udskriver den på hvidt i papirfarverne, uanset temaet (PNG 1600 × 1000 pixels; SVG skaleres uden at blive uskarp); CSV indeholder dens tal med alle cifre: én kolonne med x og en kolonne per kurve, når kurverne deler x, ellers én række per punkt med kurvens navn.
- {{key:F}} eller {{ui:Tilpas}} tilpasser visningen til det, der vises.

## Filer

- {{ui:Åbn}} i Script-gruppen (eller slip filer på visningen eller panelet): `.craft`-, `.lua`- og `.py`-filer åbnes som nye scripts (de køres ikke); datafiler (STL, OBJ, CSV, JSON, NPY, HDF5) indlæses i variablerne under deres filnavn.
- {{ui:Gem}} i Script-gruppen downloader det aktuelle script som en fil.
- {{ui:Ny}} i Script-gruppen (eller {{ui:+}} ved fanerne) starter et nyt script. Dobbeltklik på en fane for at omdøbe den; dens {{ui:×}} fjerner den (det kan fortrydes).

## Læs delens parametre

Et script læser delens parametre (se [Styr en del med parametre](topic:parameters)) efter navn:

```
w = param('width');     % én parameters værdi, i mm (eller grader, eller et almindeligt tal)
p = params();           % alle, som en struct: p.width, p.height
```

I Lua og Python er de `cs.param('width')` og `cs.params()`. Scripts læser kun parametre: ændr dem på fanen {{ui:Parametre}}. Under scriptets fane lister en linje de parametre, det læser med `param('…')`, og markerer dem, delen ikke har; fanen {{ui:Parametre}} lister scriptet under hver enkelt. Et navn, der sættes sammen, mens scriptet kører, fx `param(name)`, bliver ikke listet.

## Scripts gemmes i delen

Hvert script i fanerne gemmes i delen, så {{ui:Gem}} i Fil-gruppen gemmer dem med den, og ændringer i dem kan fortrydes. Åbning af en del **kører aldrig dens scripts**: konsollen siger, hvor mange den har, og de køres først, når du trykker Kør. En del fra andre kan indeholde hvilket som helst script: læs det, før du kører det. Scripts kører i baggrunden på denne computer uden netværksadgang og kan ikke røre siden.

## Relateret

- [CraftScript-sproget](topic:craftscript-language)
- [Scripts i Lua](topic:craftscript-lua)
- [Scripts i Python](topic:craftscript-python)
- [Analysebiblioteket](topic:craftscript-library)
- [Skriv din egen analyse](topic:craftscript-own-analysis)
