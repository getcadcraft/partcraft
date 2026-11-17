---
title: Gör en ritning med vyer, sektion och GD&T
summary: Öppna ritningsbladet, lägg till en sektion och en detaljvy, placera datum, toleransramar och symboler för ytjämnhet, välj bladstorlek, fyll i ritningshuvudet och revisionerna, och exportera bladet som PDF.
keywords: hålförteckning, hålpositioner, taggar, ritning, 2D-ritning, blad, bladstorlek, a4, a3, a2, a1, a0, ansi, ritningshuvud, revision, revisionsruta, ritningsnummer, material, pdf, vyer, ortografisk, tredjevinkel, isometrisk, sektionsvy, detaljvy, gd&t, datum, toleransram, tolerans, position, planhet, ytjämnhet, ruhet, skriv ut
from: 39e944c0
---

PartCraft gör ett ritningsblad av delen: fram-, ovan- och högervy i tredjevinkelprojektion, en isometrisk vy, totalmått och ett ritningshuvud på ett blad från A4 till A0 eller ANSI A till E. Ovanpå det kan du lägga till en sektion, en detaljvy och GD&T-symboler. Bladet uppdateras när delen ändras, och dess inställningar sparas i delfilen.

## Öppna ritningsbladet

1. Bygg delen. (Om inget är byggt: "Bygg en solid först och gör sedan ritningen.")
2. Välj {{ui:Ritning}} i verktygsfältet.

3D-vyn ersätts av bladet. Verktygsfältet visar {{ui:Datum}}, {{ui:Ram}}, {{ui:Ytbehandling}}, {{ui:Detalj}}, {{ui:PDF}} och {{ui:Tillbaka}}, och högerpanelen har rubriken **Ritning**. Statusfältet säger hur vyerna gjordes: "Ritning (kurvor ritas som facetter). Datum, Ram och Ytbehandling placerar GD&T på en vy; panelen anger en sektion och en detaljvy." Vyerna ritas från nätkärnans facetter, så runda kanter är korta raka bitar; sanna bågar kräver en exakt kärna, som den här versionen inte har.

Rör dig runt bladet: rulla hjulet för att zooma, dra med höger- eller mittenknappen för att panorera, tryck {{key:F}} för att anpassa bladet. När bladet har fokus zoomar {{key:Plus}} och {{key:Minus}}, och {{key:Shift}} med piltangenterna panorerar.

Välj {{ui:Tillbaka}}, {{ui:Tillbaka till modellen}} eller tryck {{key:Esc}} (när inget är markerat och inget verktyg är aktivt) för att återgå till 3D-modellen.

## Vad som finns på bladet

- **Bladet du väljer**, liggande (A3 om du inte väljer något annat), med en ram och ett **ritningshuvud**: titel, företag, ritningsnummer, revision, material, ritad / kontrollerad / godkänd av, datum, skala, bladstorlek, "Enheter: millimeter · Tredjevinkelprojektion", och om vyerna är exakta eller facetterade.
- En **revisionsruta** i övre högra hörnet när du lagt till en revision.
- **Fram-, ovan- och högervy**: ovanvyn över framvyn, högervyn till höger om den. Dolda kanter streckade.
- En **isometrisk vy** där det finns plats.
- **Totalmått**: bredd och höjd på framvyn, djup på ovanvyn.
- En **skala** för huvudvyerna från ISO-serien (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), vald så att de får plats.

## Välj bladstorlek

På ritningsbladet, med inget markerat, välj {{ui:Blad}} i högerpanelen: **A4, A3, A2, A1, A0** (ISO 216) eller **ANSI A, B, C, D, E** (11 × 8.5 till 44 × 34 in). Vyerna läggs ut igen i den största ISO-skala som får plats, så ett större blad kan visa delen större.

## Fyll i ritningshuvudet

Fälten **Ritningshuvud** i högerpanelen går direkt till bladet: {{ui:Titel}}, {{ui:Ritningsnr}}, {{ui:Revision}}, {{ui:Företag}}, {{ui:Ritad av}}, {{ui:Granskad av}}, {{ui:Godkänd av}}, {{ui:Datum}} (år-månad-dag), {{ui:Allmän tolerans}} och {{ui:Ytbehandling}} (de två sista skrivs precis ovanför ritningshuvudet). Skriv i en ruta och tryck {{key:Enter}} eller klicka utanför. En tom ruta lämnar sin cell tom, utom:

- **Title** visar delens namn tills du skriver ett.
- **Date** visar dagens datum tills du skriver ett.
- **Revision** visar den senaste revisionen i listan tills du skriver en.

**Material** kommer från delen: klicka på tomt utrymme i modellen och välj sedan {{ui:Material}} i Delpanelen. Samma material ger Measures massegenskaper sin densitet.

## Lägg till revisioner

Under **Revisioner** klickar du på {{ui:Lägg till revision}}. Varje ny rad tar nästa bokstav (A, B, C …, efter Z kommer AA) och dagens datum. Skriv vad som ändrats och vem som gjorde ändringen. {{ui:Ta bort}} tar bort en rad. Revisionsrutan i det övre högra hörnet av bladet listar dem, äldst först, upp till 20.

Bladstorlek, ritningshuvud, revisioner och material sparas i delfilen, och varje ändring är ett steg i {{ui:Ångra}}.

## Lägg till en sektionsvy

Delen skärs av ett plan och snittet skrafferas. Liksom de andra vyerna ritas sektionen från facetter, så runda kanter är korta raka bitar.

1. I högerpanelen, sätt **Sektion A-A** till **Av framvyn**, **Av uppifrånvyn** eller **Av högervyn**.
2. Sektionen visas på bladet, skrafferad där snittet går genom material, med skärlinjen och dess "A"-pilar på vyn den tas från.
3. Sätt **Skärning vid (mm)** för att flytta skärplanet. Det börjar genom delens mitt.

Sätt **Sektion A-A** tillbaka till **Ingen** för att ta bort den.

## Lägg till en detaljvy

1. Sätt **Detalj B** till vyn att förstora (eller välj {{ui:Detalj}} i verktygsfältet).
2. Klicka på mitten av området att förstora, på den vyn. En cirkel märkt "B" markerar det, och den förstorade "Detalj B" visas på bladet med sin egen skala, till exempel "Detalj B (2:1)".
3. Sätt **Detaljradie (mm)** för cirkelns storlek och **Detaljskala** för förstoringen: 2, 4, 5 eller 10 × bladet.

En detalj kan tas från fram-, ovan-, höger- eller sektionsvyn, inte från den isometriska. Om det inte finns plats för alla vyer säger panelen "Inget utrymme på bladet för: detalj. Gör detaljen mindre eller ta bort en vy."

## Lägg till en hålförteckning

En hålförteckning listar delens hål med deras positioner, för borrning eller CNC: välj **Hålförteckning** › **Av uppifrånvyn** (eller framvyn, eller högervyn) i panelen.

- Varje hål som syns rakt framifrån i den vyn får en tagg bredvid sig: **A1**, **A2** … för första storleken, **B1** … för nästa.
- Tabellen listar varje tagg, dess **X** och **Y** i millimeter, och dess storlek: "Ø14 THRU", "Ø6.6 × 10 DEEP", en försänkning eller ett urtag, eller ett gängat håls gängangivelse.
- X och Y mäts från det nedre vänstra hörnet av vyns kontur, markerat **X0 Y0** på bladet.
- Hål som gjorts av mönster ingår. Hål som inte är vinkelräta mot vyn räknas i panelen och utelämnas ur tabellen.

Tabellen placeras i ett fritt område på bladet och i PDF:en.

## Placera GD&T- och ytjämnhetssymboler

1. Välj {{ui:Datum}}, {{ui:Ram}} (en toleransram) eller {{ui:Ytbehandling}} (en symbol för ytjämnhet).
2. Klicka på den punkt på en vy där den fästs. Den fäster vid närmaste ritade linje inom 2.5 mm.
3. Symbolen visas med en hänvisning, markerad, och högerpanelen visar dess inställningar.

Dra en symbol för att flytta den; dess hänvisning står kvar vid punkten. Med en symbol markerad flyttar piltangenterna den 1 mm. {{key:Delete}} eller {{key:Backspace}} (eller {{ui:Ta bort}} i panelen) tar bort den; {{ui:Klar}} eller {{key:Esc}} avmarkerar den. Varje ändring finns i ångra-listan.

### Datum

**Bokstav**: A till Z, utan I, O och Q (de ser ut som 1, 0 och O). Varje nytt datum tar nästa lediga bokstav.

### Toleransram

| Inställning | Val |
|---|---|
| **Tolerans** | Rakhet, Planhet, Cirkularitet, Cylindricitet, Profil för en linje, Profil för en yta, Vinkelrät, Vinkelhet, Parallellitet, Position, Koncentricitet och Symmetri (båda borttagna i Y14.5-2018, och markerade så), Cirkulärt kast, Totalt kast |
| **Zon (mm)** | Toleransvärdet, standard 0.1 |
| **Diameterzon (⌀)** | För egenskaper med en cylindrisk zon; på som standard för Position |
| **Material** | RFS (ingen), MMC (Ⓜ), LMC (Ⓛ), där egenskapen tillåter det |
| **Primärt / Sekundärt / Tertiärt datum** | Upp till tre datumbokstäver, var och en med en **… modifierare** (MMB, LMB) där det tillåts |

PartCraft kontrollerar ramen mot reglerna i ASME Y14.5 och säger vad som är fel överst i panelen, till exempel "Planhet är en formtolerans: den tar inga datumreferenser." eller "Position kräver minst en datumreferens." Raden **Läses** förklarar ramen i klartext.

### Ytjämnhet

| Inställning | Val | Standard |
|---|---|---|
| **Ra (µm)** | Medelruhet | 1.6 |
| **Process** | valfri process, bearbetad, inget material borttaget | bearbetad |
| **Anteckning** | Upp till 40 tecken, till exempel en riktning eller en process | |

Utan markering listar panelen **Anteckningar på bladet**, var och en med **Markera**.

## Exportera PDF

Välj {{ui:PDF}} i verktygsfältet, {{ui:Exportera PDF}} i panelen, eller {{ui:Exportera}} och sedan {{ui:Ritning (PDF): vyer, sektion, detalj, GD&T}} från modellen. PDF:en laddas ner som `<part name> - drawing.pdf`, och statusfältet listar vad som finns på den.

Skriv ut den med ”Verklig storlek” på papper i bladets storlek för att skalan ska stämma.

## Begränsningar

| Finns inte ännu | Gör så här nu |
|---|---|
| Mått utöver de tre totalmåtten | Lägg till dem i PDF:en med ett markeringsprogram, eller exportera en skiss eller yta som DXF och måttsätt den i ett 2D-CAD-program |
| Fler än en sektion eller detalj; urbrutna, hjälp- och projektionsvyer | Inte tillgängligt |
| Förstavinkelprojektion, flyttbara vyer, stående blad | Tredjevinkel, automatisk layout, liggande |
| Fri textnotering och tabeller på bladet (utöver ritningshuvud och revisionsrutor) | Använd ytjämnhetsnoten, eller lägg till text i PDF:en |
| Ritningar av sammanställningar | Inte tillgängligt |

Tecken utanför den västeuropeiska uppsättningen skrivs ut som "?" (PDF:en använder läsarens inbyggda Helvetica). GD&T-symbolerna ritas som linjer, så de skrivs ut i vilken läsare som helst.

## Låt bladet göra det

- **Blad › Automatiskt** väljer papper åt dig: största standardskala upp till 1:1, på minsta A-storleks blad som rymmer vyerna i den skalan (listan visar vilket den valde).
- **Måttsätt hålen** måttsätter hålen på den vy som ser flest av dem rakt framifrån: en centrummarkering på varje, en utropsruta per storlek ("2× Ø6 THRU" med en hänvisning), och deras positioner mätta från vyns nedre vänstra hörn. Totalbredd, höjd och djup finns alltid.
