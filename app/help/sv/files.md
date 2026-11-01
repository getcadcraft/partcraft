---
title: Filer: öppna, spara och exportera
summary: De del- och sammanställningsfiler som PartCraft öppnar och sparar, varje exportformat och vad det behåller, vart filer tar vägen och vad som ändras offline eller mellan webbläsare.
keywords: öppna, spara, exportera, ladda ner, fil, partcraft.json, sammanställningsfil, stl, 3mf, step, dxf, pdf, var är mina filer, offline, spara som
from: c15c2c48
---

PartCraft arbetar med filer på din dator. Det laddar aldrig upp en del, och inget konto eller molnlagring är inblandat. Molnsparande finns inte ännu.

## Vad PartCraft öppnar

| Fil | Filändelse | Hur |
|---|---|---|
| En PartCraft-del | `.partcraft.json` | {{ui:Öppna}}, {{key:Mod+O}} eller släpp den på 3D-vyn |
| En PartCraft-sammanställning | `.partcraft-asm.json` | Likadant: PartCraft ser vilken sort det är |
| En STEP-solid | `.step`, `.stp` | En solid kropp läst som trianglar: [Öppna en STEP-fil och bygg vidare på den](topic:import-step) |

STL-, OBJ- och 3MF-nät öppnas också som solida kroppar ([Öppna en STL, OBJ eller 3MF](topic:open-meshes)), och det gör `.3dm`-filer också ([Öppna en .3dm-modell](topic:open-3dm-files)). DXF, IGES och andra programs egna delfiler kan inte öppnas (se [Vad som inte är byggt ännu](topic:not-built-yet)).

Regler vid öppning:

- Namnet på en del- eller sammanställningsfil måste sluta på `.json`, och filen måste vara under 50 MB.
- Filer kontrolleras innan något visas. En skadad eller redigerad fil avvisas med en tydlig orsak, till exempel ”Det här är inte en PartCraft-fil.”
- En fil som sparats av en nyare PartCraft avvisas: ”Den här filen sparades av en nyare PartCraft (filversion 3); den här läser version 2.” Äldre filer öppnas.
- Om delen på skärmen har osparade ändringar frågar PartCraft först: {{ui:Avbryt}}, {{ui:Kasta bort ändringar}} eller {{ui:Spara först}}.

## Spara

{{ui:Spara}} eller {{key:Mod+S}} sparar det som finns på skärmen:

- För en del: `<delens namn>.partcraft.json`, hela historiken (skisser, villkor, mått, funktioner, återrullningspositionen), ritningsbladets sektions-, detalj- och GD&T-noteringar, och hela texten i varje STEP-solid som importerats i en tidigare version. Funktioner som den här versionen inte kan bygga sparas tillbaka oförändrade. Själva soliden lagras inte; PartCraft bygger om den från historiken när filen öppnas.
- I en sammanställning: `<sammanställningens namn>.partcraft-asm.json`, med **varje del inuti**. En fil bär hela sammanställningen, så du kan skicka den för sig.

Att spara är en **nedladdning**. Webbläsaren lägger filen i sin nedladdningsmapp, eller frågar var den ska läggas om du ställt in det. Att spara igen ger en ny nedladdning; webbläsaren kan döpa den till `Part1 (1).partcraft.json` i stället för att ersätta den gamla. Byt namn på eller flytta filer i {{pick:mac=Finder|windows=Utforskaren|linux=din filhanterare}} som du vill.

Andra tecken än bokstäver, siffror, mellanslag, `_`, `.` och `-` i delens namn blir `_` i filnamnet.

:::tip
De flesta webbläsare har en inställning för att fråga var varje nedladdning ska sparas. Slå på den om du vill ha ett ”Spara som”-val varje gång: i Chrome och Edge finns den under Nedladdningar i inställningarna; i Firefox under Allmänt, Filer och program; i Safari under Allmänt, Plats för filnedladdning.
:::

Mer om vart nedladdningar tar vägen och hur du håller filer säkra: [Vart dina filer tar vägen](common:your-files).

## Exportera

Menyn {{ui:Exportera}} skriver andra format. Var och en är en nedladdning, uppkallad efter delen.

| Menyval | Fil | Vad den innehåller |
|---|---|---|
| {{ui:STL, för 3D-utskrift}} | `<namn>.stl` | Binär STL av solidens trianglar, millimeter, **Z uppåt** |
| {{ui:3MF, för 3D-utskrift}} | `<namn>.3mf` | 3MF med soliden som ett objekt, millimeter, **Z uppåt** |
| {{ui:STEP AP242 (exakt solid)}} | `<namn>.step` | Inte byggt ännu i den här versionen (nedtonat): det kräver en exakt kärna |
| {{ui:STEP AP214 (exakt solid)}} | `<namn>.step` | Inte byggt ännu i den här versionen (nedtonat) |
| {{ui:STEP (fasetterad, nätkärna)}} | `<namn>.step` | En solid av plana ytor från nätet: **runda ytor är många små plana fasetter**. Millimeter, i PartCrafts egna axlar (Y uppåt). Den STEP som ska användas för andra CAD-program i den här versionen |
| {{ui:DXF av skissen eller den plana ytan}} | `<namn> - <skiss>.dxf` eller `<namn> - face.dxf` | DXF R12. En skiss: linjer, bågar, cirklar och punkter i skissens egna koordinater, på lagren PROFILE, CONSTRUCTION och POINTS. En vald plan yta: dess konturer som slutna polylinjer (runda kanter som sina fasetter) |
| {{ui:Ritning (PDF): vyer, sektion, detalj, GD&T}} | `<namn> - drawing.pdf` | A3-ritningsbladet: tre vyer, isometri, sektion och detalj om de är angivna, yttermått, GD&T-symboler, ritningshuvud |

:::note
{{ui:STEP AP242 (exakt solid)}} och {{ui:STEP AP214 (exakt solid)}} är inte byggda ännu i den här versionen: använd {{ui:STEP (fasetterad, nätkärna)}}. Den har rätt form och volym, men varje rund yta är många plana fasetter, så andra program kan inte markera ett hål som en cylinder. Ställ in **Kurvor** finare först om det spelar roll.
:::

- Exporter gäller delen på skärmen. Export är avstängd i en sammanställning; det finns ingen sammanställningsexport ännu.
- STL, 3MF, den fasetterade STEP-filen och yt-DXF består alltid av fasetter. Inställningen **Kurvor** (i högerpanelen när inget är markerat) anger hur fina de är, från 32 till 256 fasetter per varv. Välj Fin eller Mycket fin före export av STL eller 3MF för en slät utskrift.
- PDF-ritningen använder läsarens inbyggda teckensnitt Helvetica. Tecken som den inte kan visa skrivs ut som ”?”.

Steg för steg: [Exportera för utskrift, STEP och DXF](topic:export-files) och [Gör ett ritningsblad](topic:drawing-pdf).

## Osparat arbete

- PartCraft behåller en återställningskopia av den öppna delen eller sammanställningen i den här webbläsaren en stund efter varje ändring, så att en krasch eller en stängd flik inte tappar den: nästa gång du öppnar PartCraft frågar det ”Återställa ditt arbete?”. Det är inte ett sparande: spara till en fil för att behålla ditt arbete. Se [Återställ osparat arbete](common:recover).
- Om du försöker stänga fliken eller ladda om med osparade ändringar frågar webbläsaren ”Lämna webbplatsen?”. Det är webbläsarens egen ruta; PartCraft kan inte ändra dess ordalydelse.
- {{ui:Ny}}, {{ui:Öppna}} och att stänga en sammanställning frågar innan osparade ändringar kastas.

## Online och offline

Allt sker på din dator: nätkärnan (ett WebAssembly-program) laddas ner med appen och bygger geometri lokalt, och filer läses från och skrivs till din disk. Ingen deldata går över nätverket. Se [Nätkärnan](topic:solid-kernels).

För att arbeta helt utan anslutning sparar du PartCraft för offlineanvändning medan du är online: välj {{ui:Spara för offline}} i appfältet och vänta medan det räknar (”Sparar 40 av 212”) tills det säger **Redo för offline**. Den sparade kopian innehåller 3D-biblioteket och nätkärnan, så efteråt fungerar modellering, sparande, varje export och ritningar offline. Om det står **Kunde inte spara** klickar du på det för att försöka igen medan du är online; **Offline är inte tillgängligt** betyder att det här webbläsarfönstret inte kan behålla en kopia (privata fönster och vissa hanterade datorer). När kopian är sparad erbjuder ett klick på **Redo för offline** {{ui:Spara igen (hämta den senaste versionen)}} och {{ui:Ta bort offlinekopian}}. Detaljer: [Arbeta offline](common:offline).

:::online
Du är online. Även utan att spara för offlineanvändning kan du, när PartCraft har lästs in och chipet i statusfältet säger ”Nätkärna”, fortsätta arbeta om anslutningen bryts. Ladda bara inte om sidan förrän du är online igen.
:::

:::offline
Du är offline. Om PartCraft redan är öppet, fortsätt arbeta; sparande och export fungerar fortfarande. Om appfältet säger **Redo för offline** öppnas PartCraft också från grunden utan anslutning; annars ska du inte ladda om den här fliken.
:::

## Skillnader mellan webbläsare

- **Nedladdningar.** Varje webbläsare har sin egen nedladdningsmapp och sitt eget sätt att fråga. Om en webbläsare frågar om den här webbplatsen får ladda ner filer, tillåt det, annars kan sparande och export inte fungera.
- **Dra och släpp** av en fil på vyn fungerar i Chrome, Edge, Firefox och Safari.
- **Filer från en telefon eller surfplatta.** På iPhone och iPad visar Öppna appen Filer; sparade filer hamnar i Filer, Hämtade filer. På Android hamnar de i mappen Nedladdningar.

Det är ingen skillnad i vad filerna innehåller mellan webbläsare eller operativsystem.
