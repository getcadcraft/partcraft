---
title: Kommer från en annan parametrisk modellerare
summary: Hur vanorna från stationära parametriska delmodellerare motsvarar PartCraft, och skillnaderna som snubblar erfarna användare under den första timmen.
keywords: byte, migrera, bekant, funktionshanterare, designträd, smart mått, pålägg-extrudering, urtagsextrudering, hålguide, passningar, interferensdetektering, återrullningsfält, egenskapshanterare, mus, skillnader
from: fbacaee1
---

Om du designar delar i SolidWorks blir de flesta av PartCraft's idéer bekanta: skisser på planen Framplan, Ovanplan och Höger, relationer och smarta mått, en funktionshistorik med ett återrullningsfält, och sammanställningar placerade med passningar. Sättet du når dem på skiljer sig på några ställen, och den här första versionen gör mindre. Den här sidan kartlägger dina vanor och listar överraskningarna.

## Vanor, kartlagda

| Du är van vid | I PartCraft |
|---|---|
| Designträdet till vänster | Historiken till vänster: plan först, sedan funktioner, skisser indragna under funktionen som använder dem |
| Framplan, Ovanplan och Höger | Samma tre, genom origo. Framplan är XY-planet, Ovanplan är XZ och Höger är YZ. Y pekar uppåt. |
| Skiss på ett plan eller en yta, sedan bekräftelsehörnet för att avsluta | {{ui:Skiss}} ({{key:S}}) på ett markerat plan eller en plan yta. {{ui:Avsluta}} eller {{key:Esc}} tills den stängs. |
| Smart mått | {{ui:Mått}} ({{key:D}}). Klicka på ett eller två objekt, sedan var talet ska. Var du placerar det väljs vågrätt, lodrätt eller justerat. |
| Lägg till relationer i egenskapspanelen | Markera objekt, sedan relationsknapparna i den högra panelen (Sammanfallande, Horisontell, Parallell, Tangent, Lika och så vidare) |
| Automatiska relationer under skissning | Snäpp lägger till sammanfallande, punkt-på-kurva-, horisontella och vertikala relationer |
| Blå / svart / röd skisskulör | Samma idé: blå under definierad, svart helt definierad, röd överdefinierad. Märket visar kvarvarande frihetsgrader. |
| Mittlinje för revolveringar | {{ui:Centrumlinje}} ({{key:N}}). {{ui:Revolvera}} använder den första centrumlinjen om du inte väljer en annan axel. |
| Skissrundning | {{ui:Rundning}} ({{key:F}}) i en skiss: klicka på hörnet, skriv radien |
| Växling för konstruktionsgeometri | {{ui:Konstruktion}} ({{key:Q}}) |
| Extruderat pålägg | {{ui:Extrudera}}: Blind, Mittplan, Upp till yta / nästa / hörn, Förskjutning från yta, andra riktning, avsmalning, en kontur (Välj regioner) |
| Extruderat urtag | {{ui:Skär}}: börjar som Genom alla. Byt till Blind för en ficka. |
| Revolverat pålägg / urtag | {{ui:Revolvera}} / {{ui:Mer}} › {{ui:Revolverat snitt}} |
| Referensplan / axel / punkt | {{ui:Mer}} › {{ui:Plan}}, {{ui:Axel}}, {{ui:Punkt}} (se [Referensplan, axlar och punkter](topic:reference-geometry)) |
| Svept / lofted pålägg eller urtag, släppvinkel | {{ui:Mer}} › {{ui:Släpp}} på plana ytor (se [Svep, loft och släpp](topic:sweep-loft-draft)). {{ui:Svep}} och {{ui:Loft}} finns inte ännu i den här versionen (de kräver en exakt kärna). |
| Hålguiden | {{ui:Hål}} vid varje lös skisspunkt: enkelt, förborrning, försänkning (90° / 82°) eller gängat ISO-metriskt M2–M24, genom eller blint |
| Linjärt / cirkulärt mönster, spegling | {{ui:Linjärt}}, {{ui:Cirkulärt}}, {{ui:Spegla}} (funktioner eller hela kroppen) |
| Rundning och fas på kanter | {{ui:Rundning}} / {{ui:Fas}}: klicka på en kant, {{key:Shift}}+klicka för fler, sedan knappen. En radie. Lika, två-avstånds- eller avstånd-vinkel-fas. I den här versionen bara raka kanter mellan två plana ytor. Rundningar som möts i ett hörn geringas. Runda eller avfasa krökta kanter i skissen ({{ui:Rundning}} i en skiss, {{key:F}}). |
| Skal | {{ui:Skal}}: klicka på de plana ytorna att öppna, sedan knappen. En väggtjocklek. |
| Öppna en STEP-fil | {{ui:Öppna}}: läses som trianglar, en solid kropp att bygga på ([Öppna en STEP-fil](topic:import-step)) |
| Redigera funktion, sedan OK | Klicka på funktionen och ändra siffrorna till höger. Den byggs om medan du skriver. Ingen OK, ingen Avbryt: använd {{key:Mod+Z}}. |
| Redigera skiss | Dubbelklicka på skissen i historiken |
| Bygg om | Automatiskt efter varje ändring. Det finns ingen ombyggnadstangent. |
| Undertryck / häv undertryckning | {{ui:Undertryck}} / {{ui:Häv undertryckning}} i den högra panelen |
| Dra återrullningsfältet | {{ui:Rulla tillbaka hit}} på en funktion. Klicka på "Återrullningsfält · rulla framåt" för att gå tillbaka. |
| Dra en funktion i trädet för att ordna om | {{ui:Flytta upp}} / {{ui:Flytta ned}} eller {{key:Alt+Up}} / {{key:Alt+Down}}. Nekas med skäl när det skulle bryta ett beroende. |
| Redigera mått genom att dubbelklicka på modellen | Markera funktionen. Skissens mått listas i den högra panelen. |
| Passningar: sammanfallande, koncentrisk, avstånd, vinkel | {{ui:Led}} ({{key:J}}): välj en plan yta på varje del. Ledet lägger dem yta mot yta. **Centrera på** en axel fungerar som koncentrisk, **Förskjutning** som avstånd och **Vinkel** som vinkel. |
| Fast komponent | Den första delen är jordad. {{ui:Gör den till den jordade delen}} ändrar det. |
| Infoga komponent | {{ui:Lägg till kopia}} eller {{ui:Duplicera}} (ytterligare en kopia) eller {{ui:Infoga}} (från en delfil) |
| Redigera del i sammanställningen | {{ui:Redigera del}}, sedan {{ui:Tillbaka}} |
| Interferensdetektering | {{ui:Kollision}} |
| Flytta en komponent för att se rörelsen | Dra vinkel- eller förskjutningsreglaget på ett vridbart eller glidled. {{ui:Kontrollera rörelsen med avseende på kollisioner}} sveper det. En del utan led: **Flytta för hand** (pilar att dra, eller inskrivna värden) |
| Mät / Inspektera | {{ui:Vyer}}, sedan {{ui:Mät}} ({{key:M}}): avstånd, vinklar, radier, areor. {{ui:Massegenskaper}}. |
| Sprängvy, stycklista | I en sammanställning med inget markerat: **Sprängvyer** och **Stycklista** i den högra panelen |
| Massegenskaper | Rutan **Del**: volym, ytarea och storlek, av den facetterade solid (något låg på runda delar). Ingen massa: det finns inga material ännu. |
| Spara, Spara som STEP | {{ui:Spara}} laddar ner en `.partcraft.json`. {{ui:Exportera}} har STL, 3MF, exakt STEP (AP242 eller AP214), facetterad STEP, DXF och en PDF-ritning. |
| Gör en ritning av delen | {{ui:Ritning}}: ett automatiskt A3-blad med tre vyer, isometrisk, ett snitt, en detalj, datum, styrramar för form och tolerans och ytbehandlingssymboler. Bara totala storlekar sätts mått på. |
| Mittknapp-dra för att rotera | **Vänsterdrag** roterar här. Mitt- eller högerdrag panorerar. Hjulet zoomar vid pekaren. |
| Vyorientering, Normal mot | Menyn {{ui:Vyer}}. {{ui:Normalt mot}} för en vald yta, ett plan eller en skiss. |
| Zooma till anpassa (F) | {{key:F}}, eller {{ui:Anpassa}} (i en skiss är {{key:F}} rundningsverktyget) |
| Högerklicksmenyer | Inga. Högerdrag panorerar. I en skiss avslutar ett högerklick en linjekedja. |

:::tip
Om dina händer känner SolidWorks, välj menystilen {{ui:Funktionsträd}} i {{ui:Inställningar}} › {{ui:PartCraft}} › {{ui:Menyer, tangenter och mus}}. Då får du en band med flikarna Funktioner, Skiss, Ytor, Utvärdera, Ritning, Sammanställning och Vy. Mittknappen kretsar, {{key:Shift}} och mittknappen panorerar, och vänsterknappen bara väljer. Se [Menyer, tangenter och mus](topic:menus-keys-and-mouse).
:::

## Skillnader som får folk att snubbla

**Hela skissen är profilen.** Extrudering och revolvering använder varje sluten slinga i skissen. Du kan inte välja en region eller en kontur i en skiss för en funktion. Använd en skiss per funktion.

**Vilken skiss en funktion tar.** En funktion använder skissen du just stängde eller den som är markerad i historiken. Utan något markerat tar den den nyaste skissen som ingen funktion använder ännu. Om du får fel, markera rätt skiss och välj funktionen igen.

**Ändringar gäller medan du skriver.** Det finns ingen funktionsdialog med OK och Avbryt. Varje siffra bygger om direkt, och {{key:Mod+Z}} är vägen tillbaka. Ångra-listan täcker skissändringar, funktioner och inställningar lika.

**Överdefinierat tillåts aldrig stå tyst.** Det finns inga drivna (referens-)mått. Ett mått som de andra relationerna redan fixerar rapporteras som överdefinierat: "är redan implicerat. Ta bort det." Ett motstridigt mått lämnar geometrin orörd och blir rött. Ta bort ett, eller ångra.

**Svepningar och lofts finns inte ännu. Rundningar, faser, skal och släpp har begränsningar.** Den här versionen av PartCraft bygger varje del med en mesh-kärna. Märket i statusfältet säger alltid "Mesh-kärna". Rundningar och faser fungerar på raka kanter mellan två plana ytor, och där rundningar möts i ett hörn geringas de, inte blandas. Skal öppnar, och släpp lutar, bara plana ytor. Funktioner som behöver en exakt kärna förblir klickbara, men säger "finns inte ännu" när de väljs. Se [Mesh-kärnan](topic:solid-kernels) och [Vad som inte finns ännu](topic:not-built-yet).

**Två knappar som heter Rundning.** I en skiss rundar {{ui:Rundning}} ({{key:F}}) ett skisshörn. På delen rundar {{ui:Rundning}} i gruppen Funktioner solida kanter, i den här versionen bara raka kanter mellan plana ytor. Det finns inget svep eller loft i den här versionen. Se [Vad som inte finns ännu](topic:not-built-yet).

**Hål behöver lösa punkter.** {{ui:Hål}} borrar i punkter gjorda med punktverktyget. Cirkelcentrum och linjeändar räknas inte.

**Genom alla är bara för urtag.** Ett pålägg behöver ett djup. Det finns inga "upp till hörn / yta / nästa"-slutvillkor ännu.

**Delen är facetterad.** Mesh-kärnan bygger runda ytor av plana facetter, så vyn, volymerna och STL- och 3MF-exporterna är alla gjorda av dem. **Kurvor** i delens panel gör dem finare. Den exakta STEP-exporten är inte det: den skriver runda ytor på sina verkliga ytor.

**Bara millimeter.** Det finns ingen tuminställning ännu. Multiplicera tumstorlekar med 25.4 när du skriver in dem.

**Y är uppåt.** Framplanet vetter mot dig och Ovanplan tittar ner på delen, som du förväntar dig. Men världens uppaxel är Y. STL-, 3MF- och exakta STEP-exporter vrids till Z uppåt. Den facetterade STEP behåller Y uppåt.

**Passningar är ytor, inte geometriska par.** Ett led startar alltid från två plana ytor placerade yta mot yta. För en stift i ett hål väljer du den plana ytan runt hålet och stiftets axel. Sedan sätter du **Centrera på** till hålets axel och stiftets revolveringsaxel. Delar som inte nås av leder står kvar där de sattes in, och du kan inte dra dem. Leder i en slinga löses inte.

**Att spara är en nedladdning.** Det finns ingen fil du behåller att skriva över. Varje sparning är en ny fil i din nedladdningsmapp. Namnge delen först, och håll dina filer i en projektmapp.

**Inga kontextmenyer, inga kommandohanterarflikar.** Allt finns i verktygsfältet och den högra panelen. Verktygsfältet ändras med vad du gör: skissverktygen visas bara i en skiss, sammanställningsverktygen bara i en sammanställning.

**Tangenterna är enskilda bokstäver i en skiss.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} och {{key:S}} väljer verktyg utan modifierare. Se [Tangenter och mus](topic:keyboard).
