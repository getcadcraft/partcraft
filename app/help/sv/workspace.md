---
title: PartCraft-skärmen
summary: En rundtur i varje fält och panel: verktygsfältet och hur det ändras, historiken, delfakta, 3D-vyn, egenskapspanelen och statusfältet.
keywords: skärm, layout, verktygsfält, historik, funktionsträd, egenskaper, panel, statusfält, gränssnitt, ui, rundtur, helskärm
from: 7394fc49
---

Skärmen har fem delar: verktygsfältet över toppen, historiken till vänster, 3D-vyn i mitten, egenskapspanelen till höger och statusfältet längs nederkanten. Ovanför allt sitter CadCraft-appfältet.

## Appfältet

Det tunna fältet allra överst hör till CadCraft-webbplatsen, inte till PartCraft självt. Det visar appens namn och var den körs, en versionsmeny, **Om PartCraft**, skärmlägesknappen och temaomkopplaren Papper / Modell.

- **Papper** är mörka linjer på ett ljust blad. **Modell** är ljusa linjer på mörk bakgrund. Skissfärgerna följer temat.
- {{ui:Inställningar}} (kugghjulet, eller {{key:Mod+,}}) har en flik {{ui:PartCraft}}: vilken musknapp som vrider vyn, mushjul eller styrplatta, och villkor under skissning. Se [PartCraft-inställningar](topic:settings).
- Skärmlägesknappen, eller {{key:Ctrl+Shift+F}}, växlar mellan normalt, helskärm och helskärm med fälten dolda. Med fälten dolda för du pekaren till överkanten (eller trycker där) för att få tillbaka dem. {{key:Esc}} återgår till normalt. Tangenten är {{key:Ctrl+Shift+F}} även på en Mac, inte ⌘.

## Verktygsfältet

Verktygsfältet är grupperat. Det ändras med vad du gör, så att det ryms på en rad:

| Grupp | Knappar | Visas |
|---|---|---|
| Fil | {{ui:Ny}}, {{ui:Öppna}}, {{ui:Spara}}, {{ui:Exportera}} (en meny) | Alltid |
| Skiss | {{ui:Skiss}} | När ingen skiss är öppen |
| Skiss | {{ui:Avsluta}}, {{ui:Linje}}, {{ui:Rektangel}}, {{ui:Cirkel}}, {{ui:Båge}}, {{ui:Punkt}}, {{ui:Centrumlinje}}, {{ui:Avrunda}}, {{ui:Mått}}, {{ui:Konstruktion}} | Bara medan en skiss är öppen |
| Funktioner | {{ui:Extrudera}}, {{ui:Skär}}, {{ui:Revolvera}}, {{ui:Hål}}, {{ui:Linjärt}}, {{ui:Cirkulärt}}, {{ui:Spegla}}, {{ui:Rundning}}, {{ui:Fas}}, {{ui:Skal}}, {{ui:Mer}} (en meny: Revolverat skär, Plan, Axel, Punkt, Svep, Loft, Släpp) | På delen, inte medan en skiss eller ritningen är öppen. Rundning och Fas fungerar på raka kanter mellan två plana ytor; Skal och Släpp på plana ytor. Svep och Loft är inte byggda ännu i den här versionen (de kräver en exakt kärna); ett klick på någon av dem säger det |
| Funktioner | {{ui:Klar}} | Bara medan du väljer kanter eller ytor för en rundning, fasning, skal eller släppvinkel |
| Ritning | {{ui:Ritning}} | På delen (användbar när delen har en solid) |
| Ritning | {{ui:Datum}}, {{ui:Ram}}, {{ui:Ytbehandling}}, {{ui:Detalj}}, {{ui:PDF}}, {{ui:Tillbaka}} | Bara på ritningsbladet |
| Sammanställning | {{ui:Sammanställning}} | På delen (användbar när delen har en solid) |
| Sammanställning | {{ui:Lägg till kopia}}, {{ui:Infoga}}, {{ui:Led}}, {{ui:Kollision}}, {{ui:Redigera del}}, {{ui:Stäng}} | Bara i en sammanställning |
| Sammanställning | {{ui:Tillbaka}} | Medan du redigerar en del från en sammanställning |
| Redigera | {{ui:Ångra}}, {{ui:Gör om}}, {{ui:Kopiera}}, {{ui:Klistra in}}, {{ui:Mer}} (en meny: Klipp ut, Kopiera, Klistra in, Klistra in på plats, Duplicera, Ta bort, Markera allt, Avmarkera) | Alltid; varje val verkar på skissen, historiken eller sammanställningen du är i |
| Visa | {{ui:Anpassa}}, {{ui:Normalt mot}}, {{ui:Vyer}} (en meny: Mät, Massegenskaper, Sektion, Släpp, Zebra, Krökning, {{ui:Basplan}}, sedan Isometrisk, Fram, Bak, Ovan, Under, Höger, Vänster) | Alltid |

Håll pekaren över en knapp för att se vad den gör och dess tangent. En nedtonad knapp kan inte användas just nu: till exempel funktionsknapparna medan en skiss är öppen, eller {{ui:Led}} innan sammanställningen har två delar.

Menyn {{ui:Mer}} i gruppen Redigera listar varje redigeringsåtgärd med sin tangent. Vad kopiera och klistra in verkar på följer var du är; se [Kopiera, klistra in och duplicera](topic:copy-paste). Verktygstipset för ett nedtonat val säger varför det inte kan verka nu.

Menyn {{ui:Exportera}} innehåller {{ui:STL, för 3D-utskrift}}, {{ui:3MF, för 3D-utskrift}}, {{ui:STEP AP242 (exakt solid)}}, {{ui:STEP AP214 (exakt solid)}}, {{ui:STEP (fasetterad, nätkärna)}}, {{ui:STEP AP214 (fasetterad, nätkärna)}}, {{ui:DXF av skissen eller den plana ytan}} och {{ui:Ritning (PDF): vyer, sektion, detalj, GD&T}}. De två exakta STEP-valen är nedtonade: de är inte byggda ännu i den här versionen, så använd {{ui:STEP (fasetterad, nätkärna)}}.

## Historiken (vänster)

Panelen till vänster är delens funktionshistorik, listan som PartCraft bygger om uppifrån och ned.

- Rubriken är delens namn (”Del1” tills du döper om den).
- **Frontplan**, **Överplan** och **Högerplan** kommer först. Klicka på en för att markera den; den lyses upp i vyn.
- Under dem finns dina funktioner i den ordning de gjordes. En skiss som en funktion använder dras in under den funktionen.
- En flagga i högra änden av en rad visar dess tillstånd:

| Flagga | Betydelse |
|---|---|
| (ingen) | Byggd, och en skiss är fullt bestämd |
| − | En skiss som är underbestämd (den kan fortfarande röra sig) |
| + | En skiss som är överbestämd |
| ⚠ | Byggd, med en varning (håll pekaren över för att läsa den) |
| ⚠ fel | Funktionen misslyckades. Håll pekaren över för att läsa varför, eller klicka på den |
| ⚠ inte byggd | Funktionen behöver en annan som misslyckades eller är av |
| av | Undertryckt |

- Varje funktion visar sitt huvudtal efter sitt namn, till exempel ”25 mm” för en Extrudering eller ”Ø6.6 thru” för ett hål. Dubbelklicka på talet, eller tryck på {{key:F2}} på raden, för att ändra det direkt där. Se [Ändra mått](topic:change-sizes).
- Klicka på en funktion för att redigera den till höger. Dubbelklicka på en skiss för att öppna den.
- När du rullar tillbaka finns en rad **Återrullningsfält · rulla framåt** i listan. Funktioner under den är nedtonade och inte byggda.
- Med en rad i fokus flyttar {{key:Up}} och {{key:Down}} mellan rader, och {{key:Alt+Up}} / {{key:Alt+Down}} flyttar själva funktionen, där historiken tillåter.

I en sammanställning listar samma panel **Delar** (den första är markerad ”jordad”) och **Leder** i stället.

### Delfakta

Under historiken listar rutan **Del** soliden: **Volym**, **Yta**, **Storlek (X × Y × Z)**, **Genomgående hål**, **Kroppar**, **Trianglar**, antalet **Funktioner** och hur många som är **Misslyckade**. Volymer och areor gäller den fasetterade solid som nätkärnan byggt, något under det sanna värdet för runda former (se [Funktioner och deras alternativ](topic:features#curves-resolution)).

I en sammanställning har rutan rubriken **Sammanställning**: Delar, Förekomster, Leder, Inte förenade och Interferens.

## 3D-vyn (mitten)

Vyn visar soliden, basplanen och alla skisser som ännu inte används av en funktion.

Basplanen ritas fullt medan delen är tom. När den har en solid träder de tillbaka: ritas svagt, så att de inte täcker delen, och klick går igenom dem till delen. De kommer tillbaka fullt medan du väljer var du ska skissa ({{ui:Skiss}} utan något valt) och när du markerar ett i historiken. {{ui:Vyer}} › {{ui:Basplan}} döljer dem helt; de visas ändå medan du väljer var du ska skissa. PartCraft minns det valet.

- Dra för att vrida delen, högerdra eller mittendra för att panorera, rulla hjulet för att zooma vid pekaren. Detaljer i [Tangenter och mus](topic:keyboard).
- Håll pekaren över en yta, kant eller ett plan för att se det lysa upp. Klicka för att välja det. Ytor markeras hela och kanter ritas och väljs hela. {{key:Shift}}+klick samlar flera kanter eller ytor. De förblir markerade.
- ViewCube uppe till höger vrids med delen: klicka på en yta, kant eller ett hörn för att titta därifrån, dra den för att vrida, husknappen går tillbaka till början. Se [ViewCube](topic:view-cube).
- En markerad Extrudering visar en orange pil på sin ändyta, en Revolvering en böjd pil i slutet av sitt varv: dra den för att ändra djupet eller vinkeln, eller skriv i rutan bredvid. Se [Ändra mått](topic:change-sizes#drag-it-in-the-view).
- När en del är tom listar en ruta med rubriken **Starta en del** de första stegen.
- Släpp en `.partcraft.json`- eller `.partcraft-asm.json`-fil var som helst på vyn för att öppna den. En `.step`-, `.stp`-, `.stl`-, `.obj`-, `.3mf`- eller `.3dm`-fil som släpps där öppnas som en solid kropp.

### Medan du väljer kanter eller ytor

Efter {{ui:Rundning}}, {{ui:Fas}} eller {{ui:Skal}} utan något valt (eller {{ui:Välj kanter}} på en sådan funktion) visas delen som den var före den funktionen. Klicka på kanter eller ytor för att lägga till eller släppa dem; deras markeringar visar vad som är med. {{ui:Klar}} eller {{key:Esc}} avslutar. Se [Runda, fasa och urholka](topic:fillet-chamfer-shell).

### På ritningsbladet

{{ui:Ritning}} ersätter 3D-vyn med A3-ritningsbladet. Hjulet zoomar, höger- eller mittendrag panorerar, {{key:F}} anpassar. Se [Gör en ritning](topic:drawing-pdf).

### Medan en skiss är öppen

Vyn vrids för att titta rakt mot skissplanet och ett 2D-skisslager visas överst. Delen visar bara de funktioner som gjordes före den här skissen. En remsa uppe till vänster visar skissens tillståndschip (”Fullt bestämd”, ”Underbestämd · 3 frihetsgrader” och så vidare) och dess namn, till exempel ”Skiss2 på en yta på Extrudering1”.

## Egenskapspanelen (höger)

Panelen till höger visar det som är markerat, och dess rubrik namnger det:

- **Del** (inget markerat): delens **Namn** och inställningen **Kurvor**.
- Ett plan: en knapp {{ui:Skissa på det}}.
- En **Yta**: vilken sort den är (Plan yta, Cylinder med sin radie och axel, Kon, Sfär eller Torus), dess area, vilken funktion som gjorde den, och för en plan yta {{ui:Skiss på denna yta}}, {{ui:Normalt mot}}, {{ui:Exportera yta som DXF}}, {{ui:Extrudera från den}}, {{ui:Skär in i den}} och {{ui:Hål här}} (se [Dra eller tryck en hel yta](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- En **Kant**: dess sort (rak, en cirkel med sitt centrum och sin radie, eller en kurva), dess längd och de två ytor den ligger mellan (till exempel ”Extrudering1 ändyta och Extrudering1 sida”), med knapparna {{ui:Rundning}} och {{ui:Fas}}.
- Flera kanter eller ytor valda med {{key:Shift}}: hur många, med {{ui:Rundning}} och {{ui:Fas}} för kanter, och {{ui:Rensa}}.
- En funktion: dess tal och alternativ, måtten på dess skiss, sedan {{ui:Undertryck}}, {{ui:Rulla tillbaka hit}}, {{ui:Flytta upp}}, {{ui:Flytta ned}}, {{ui:Ta bort}} och dess **Namn**.
- En öppen skiss: dess tillstånd, villkoren du kan lägga till i markeringen, listan över villkor och mått, **Lägg till med koordinater**, och {{ui:Avsluta skiss}}, {{ui:Anpassa}} och {{ui:Exportera som DXF}}.
- På ritningsbladet: sektions- och detaljinställningarna, eller den markerade GD&T-symbolen.
- I en sammanställning: sammanställningen, den markerade delen eller den markerade leden.

Varje sifferruta träder i kraft när du trycker på {{key:Enter}} eller {{key:Tab}}, eller klickar bort. Delen byggs om direkt; det finns ingen OK-knapp. Använd {{key:Mod+Z}} för att gå tillbaka.

## Statusfältet (nederst)

- Till vänster, pekarens koordinater i skissen (bara medan en skiss är öppen).
- I mitten, meddelanden: vad du ska göra härnäst och varför något avvisades. Läs det när ingenting verkar hända.
- Nära höger, kärnchipet: alltid ”Nätkärna” i den här versionen. Håll pekaren över det för att se vad det betyder. Se [Nätkärnan](topic:solid-kernels).
- Längst till höger, ett chip: ”Bygger om…” medan delen byggs om, sedan ”Ombyggd på … ms” när allt är bra, eller ”1 funktion misslyckas”. I en sammanställning står det ”Placerad på … ms” eller så räknar det ledproblem.

Se även [Starta en manual i Illustrate](topic:illustrate): arbetsytan som gör sammanställningsmanualer av dina delar och sammanställningar.

## På en smal skärm

Upp till 760 pixlars bredd, till exempel på en telefon, behåller vyn skärmen: verktygsfältet är en rad som rullar i sidled, och panelerna öppnas som blad från ett fält längst ned. {{ui:Verktyg}} döljer verktygsfältet och {{ui:Flytta}} lägger det längst ned. Se [Styrplatta, touch och små skärmar](topic:trackpad-and-touch).
