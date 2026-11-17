---
title: Filer: öppna, spara och exportera
summary: De del- och sammanställningsfiler PartCraft öppnar och sparar, varje exportformat och vad det behåller, var filerna hamnar, och vad som ändras offline eller mellan webbläsare.
keywords: öppna, spara, exportera, ladda ner, fil, partcraft.json, sammanställningsfil, stl, 3mf, step, dxf, pdf, var finns mina filer, offline, spara som
from: e5fbc7e3
---

PartCraft arbetar med filer på din dator. Den laddar aldrig upp en del, och det finns inget konto eller någon molnlagring inblandad. Molnsparande finns inte ännu.

## Vad PartCraft öppnar

| Fil | Filändelse | Hur |
|---|---|---|
| En PartCraft-del | `.partcraft.json` | {{ui:Öppna}}, {{key:Mod+O}}, eller släpp den på 3D-vyn |
| En PartCraft-sammanställning | `.partcraft-asm.json` | Samma: PartCraft ser vilken sort det är |
| En STEP-solid | `.step`, `.stp` | En solid kropp läst som trianglar: [Öppna en STEP-fil och bygg vidare på den](topic:import-step) |

STL-, OBJ- och 3MF-nät öppnas också som solida kroppar ([Öppna en STL, OBJ eller 3MF](topic:open-meshes)), och så gör `.3dm`-filer ([Öppna en .3dm-modell](topic:open-3dm-files)). DXF, IGES och andra programs egna delfiler kan inte öppnas (se [Det som inte finns ännu](topic:not-built-yet)).

Regler vid öppning:

- Ett del- eller sammanställningsfilnamn måste sluta på `.json`, och filen måste vara under 50 MB.
- Filer kontrolleras innan något visas. En skadad eller redigerad fil vägras med en enkel förklaring, till exempel "Det här är inte en PartCraft-fil."
- En fil sparad av en nyare PartCraft vägras: "Den här filen sparades av en nyare PartCraft (filversion 3); den här läser version 2." Äldre filer öppnas.
- Om delen på skärmen har osparade ändringar frågar PartCraft först: {{ui:Avbryt}}, {{ui:Kasta bort ändringar}} eller {{ui:Spara först}}.

## Spara

{{ui:Spara}} eller {{key:Mod+S}} sparar det som visas på skärmen:

- På en del: `<delnamn>.partcraft.json`, med hela historiken (skisser, relationer, mått, funktioner, återställningspositionen), ritningsbladets sektion-, detalj- och GD&T-anteckningar, och hela texten i en STEP-solid som importerats i en tidigare version. Funktioner som den här versionen inte kan bygga sparas tillbaka oförändrade. Solidet självt lagras inte; PartCraft bygger om det från historiken när filen öppnas.
- I en sammanställning: `<sammanställningsnamn>.partcraft-asm.json`, med **varje del inuti**. En fil innehåller hela sammanställningen, så du kan skicka den ensam.

Att spara är en **nedladdning**. Din webbläsare lägger filen i sin nedladdningsmapp, eller frågar var den ska läggas om du ställt in det så. Sparar du igen skapas en ny nedladdning; webbläsaren kan döpa den till `Part1 (1).partcraft.json` i stället för att ersätta den gamla. Byt namn på eller flytta filer i {{pick:mac=Finder|windows=Utforskaren|linux=din filhanterare}} som du vill.

Tecken i delens namn som inte är bokstäver, siffror, mellanslag, `_`, `.` eller `-` blir `_` i filnamnet.

:::tip
De flesta webbläsare har en inställning som frågar var varje nedladdning ska sparas. Slå på den om du vill ha ett val "Spara som" varje gång: i Chrome och Edge finns den under Nedladdningar i inställningarna; i Firefox under Allmänt, Filer och program; i Safari under Allmänt, Plats för filnedladdning.
:::

Mer om var nedladdningar hamnar och hur du håller filerna säkra: [Var dina filer finns](common:your-files).

## Exportera

Menyn {{ui:Exportera}} skriver andra format. Varje export är en nedladdning, namngiven efter delen.

| Menyalternativ | Fil | Vad som finns i den |
|---|---|---|
| {{ui:STL, för 3D-utskrift}} | `<namn>.stl` | Binär STL av solidets trianglar, millimeter, **Z upp** |
| {{ui:3MF, för 3D-utskrift}} | `<namn>.3mf` | 3MF med solidet som ett objekt, millimeter, **Z upp** |
| {{ui:STEP AP242 (exakt solid)}} | `<namn>.step` | En exakt solid, millimeter, Z upp: runda ytor som sanna cylindrar, koner, sfärer och torusar. Den STEP som ska användas för andra CAD- och CAM-program |
| {{ui:STEP AP214 (exakt solid)}} | `<namn>.step` | Samma exakta solid i det äldre AP214-schemat |
| {{ui:STEP (fasetterad, nätkärna)}} | `<namn>.step` | En solid av plana ytor från nätet: **runda ytor är många små plana facetter**. Millimeter, i PartCraft:s egna axlar (Y upp). För ett program som vägrar den exakta filen |
| {{ui:DXF av skissen eller den plana ytan}} | `<namn> - <skiss>.dxf` eller `<namn> - face.dxf` | DXF R12. En skiss: linjer, bågar, cirklar och punkter i skissens egna koordinater, på lagren PROFILE, CONSTRUCTION och POINTS. En vald plan yta: dess konturer som slutna polylinjer (runda kanter som deras facetter) |
| {{ui:Ritning (PDF): vyer, sektion, detalj, GD&T}} | `<namn> - drawing.pdf` | A3-ritningsbladet: tre vyer, isometrisk, sektion och detalj om de är satta, totalmått, GD&T-symboler, ritningshuvud |

:::note
{{ui:STEP AP242 (exakt solid)}} skriver hål, upphöjningar, rundningar, koner, sfärer och torusar på sina sanna ytor, så att ett annat program kan välja ett hål som en cylinder; **Kurvor** ändrar det inte. Splinesidor, modellerade gängor och importerade nät har ingen exakt yta och förblir plana facetter i samma solid; statusfältet säger hur många. {{ui:STEP (fasetterad, nätkärna)}} skriver varje rund yta som facetter.
:::

- Exporter gäller delen på skärmen. Export är avstängd i en sammanställning; det finns ännu ingen sammanställningsexport.
- STL, 3MF, den fasetterade STEP-filen och ytans DXF består alltid av facetter. Inställningen **Kurvor** (i högra panelen när inget är markerat) styr hur fina de är, från 32 till 256 facetter per varv. Välj Fin eller Mycket fin innan du exporterar STL eller 3MF för en jämn utskrift.
- PDF-ritningen använder läsarens inbyggda typsnitt Helvetica. Tecken den inte kan visa skrivs ut som "?".

Steg för steg: [Export för utskrift, STEP och DXF](topic:export-files) och [Gör ett ritningsblad](topic:drawing-pdf).

## Osparat arbete

- PartCraft behåller en återställningskopia av den öppna delen eller sammanställningen i den här webbläsaren strax efter varje ändring, så att en krasch eller en stängd flik inte förlorar den: nästa gång du öppnar PartCraft frågar den "Återställ ditt arbete?". Det är inte en sparning: spara till en fil för att behålla ditt arbete. Se [Återställ osparat arbete](common:recover).
- Om du försöker stänga fliken eller ladda om med osparade ändringar frågar webbläsaren "Lämna webbplatsen?". Det är webbläsarens egen ruta; PartCraft kan inte ändra dess text.
- {{ui:Ny}}, {{ui:Öppna}} och att stänga en sammanställning frågar innan osparade ändringar kasseras.

## Online och offline

Allt sker på din dator: nätkärnan (ett WebAssembly-program) hämtas med appen och bygger geometri lokalt, och filer läses från och skrivs till din disk. Inga deldata skickas över nätverket. Se [Nätkärnan](topic:solid-kernels).

För att arbeta utan anslutning alls: spara PartCraft för offlineanvändning medan du är online. Välj {{ui:Spara för offline}} i appfältet och vänta medan den räknar ("Sparar 40 av 212") tills den säger **Redo offline**. Den sparade kopian innehåller 3D-biblioteket och nätkärnan, så därefter fungerar modellering, sparning, alla exporter och ritningar offline. Säger den **Kunde inte sparas** klickar du för att försöka igen medan du är online. **Offline inte tillgänglig** betyder att webbläsarfönstret inte kan behålla en kopia (privata fönster och vissa hanterade datorer). Med en sparad kopia ger ett klick på **Redo offline** {{ui:Spara igen (hämta den senaste versionen)}} och {{ui:Ta bort offlinekopian}}. Mer: [Arbeta offline](common:offline).

:::online
Du är online. Även utan att spara för offlineanvändning kan du fortsätta arbeta om anslutningen bryts, när PartCraft har laddats och statusfältets bricka säger "Nätkärna". Ladda bara inte om sidan förrän du är online igen.
:::

:::offline
Du är offline. Om PartCraft redan är öppet kan du fortsätta arbeta; spara och exportera fungerar fortfarande. Om appfältet säger **Redo offline** öppnas PartCraft också från början utan anslutning. Annars ska du inte ladda om den här fliken.
:::

## Skillnader mellan webbläsare

- **Nedladdningar.** Varje webbläsare har sin egen nedladdningsmapp och sitt eget sätt att fråga. Om en webbläsare frågar om den här webbplatsen får ladda ner filer, tillåt det, annars kan inte spara och exportera fungera.
- **Dra och släpp** av en fil på vyn fungerar i Chrome, Edge, Firefox och Safari.
- **Filer från en telefon eller surfplatta.** På iPhone och iPad visar Öppna appen Filer; sparade filer hamnar i Filer, under Nedladdningar. På Android hamnar de i nedladdningsmappen.

Det finns ingen skillnad i vad filerna innehåller mellan webbläsare eller operativsystem.
