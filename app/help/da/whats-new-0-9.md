---
title: Nyt i 0.9
summary: PartCraft 0.9 tilføjer afrundinger mellem flader og fortykkelse til massive legemer, samlinger med tusindvis af dele, et Documents-arkiv med revisioner, et Solid FEM-addon til spændingskontrol, ti buemetoder, britiske stålstørrelser, en printfase og addons til harpiksprint.
keywords: hvad er nyt, hvad er nyt, udgivelsesnoter, changelog, 0.9, afrunding mellem flader, rullende kugle, afrund flere kanter, fortyk, massivt legeme fra flader, step shell, iges solid, afrundinger i scanninger, stor samling, letvægtsvisning, 20000 dele, dokumenter, arkiv, tjek ud, revision, udgivelse, hvor brugt, rhino-link, grasshopper, 3dm, markører, fabriksgulv, jobkø, solid fem, finite element, von mises, egenfrekvens, buemetoder, 3-punkts bue, britiske stålprofiler, blue book, printfase, harpiks, goo, ctb, bed, læg fladt, hvad er nyt, hvad er nyt, udgivelsesnoter, changelog, ændringer, 0.8, 0.8.1, version, nye funktioner, live-analyse, opdatér mens jeg redigerer, bryd den, hvad går først i stykker, lastfaktor, ikke-lineær, flydning, plastisk tøjning, kontakt, calculix, bevægelsesstudie, klaring, flader, nurbs, glat, skrog, zebra, engineer, generator, genereret legeme, skitse fra et foto, skalér til print, opdel til print, krympning, nestede plader, g-kode, tegning, målsæt huller, assistent, mcp, sprog, værktøjslinjens rækker
from: 96d9fbfa
---

Dette er hvad der ændrede sig i PartCraft 0.9 sammenlignet med 0.8.1. Frie flader lukkes nu op til massive legemer, samlinger med tusindvis af dele forbliver brugbare, et Documents-arkiv gemmer revisioner, og et Solid FEM-addon kontrollerer spænding i en del. Hvert punkt siger, hvor du finder det.

## Nyt i 0.9.1

- **Eksakt STEP-eksport.** {{ui:Eksportér}} › {{ui:STEP AP242 (eksakt massivt legeme)}} og {{ui:STEP AP214 (eksakt massivt legeme)}} virker nu. Huller, ophøjninger, afrundinger, kegler, kugler og tori skrives på deres rigtige flader med rigtige cirkler som kanter, så et andet CAD- eller CAM-program kan se et hul som et hul. Spline-sider, modellerede gevind og importerede mesh forbliver flade facetter i det samme legeme. Se [Eksport til print, STEP og DXF](topic:export-files#for-other-cad-programs-step).
- **STEP ind, eksakt STEP ud.** En STEP-fil, du åbner, beholder sine egne flade flader, cylindre, kegler, kugler og tori, så {{ui:Eksportér}} › {{ui:STEP AP242 (eksakt massivt legeme)}} skriver dem tilbage som rigtige flader i stedet for facetter: en leverandørs bjælke med bolthuller går ud med de samme flader, den kom ind med, plus det du har skåret ind i den. Spline-, fejede og drejede flader i filen forbliver facetter, og det samme gør legemer fra STL, OBJ og 3MF. Åbn STEP-filen igen for en del, der er gemt tidligere. Se [Åbn en STEP-fil og byg videre på den](topic:import-step).
- **Sande cirkler i flade-DXF.** {{ui:Eksportér}} › {{ui:DXF af skitsen eller den plane flade}} med en flad flade valgt skriver nu runde huller som cirkler med hullets eget centrum og radius, til et laser-, plasma- eller vandskæringsbord. Andre runde kanter er stadig facetter.
- **Eksakt STEP til værkstedet.** I {{ui:Fremstilling}} skriver {{ui:Eksakt STEP (arbejdskoordinater)}} delen med dens oprindelse ved opsætningens arbejdsoprindelse og Z langs værktøjsaksen, de koordinater G-koden bruger. Se [Lav værktøjsbaner og G-kode](topic:manufacture#exact-step-for-the-shop).

## Nyt

### Flader og massive legemer

- **Afrunding mellem flader.** Vælg {{ui:Overflader}} i {{ui:Arbejdsområde}}-boksen, og så {{ui:Afrunding mellem flader}}. Vælg de to flader på ét massivt legeme, og skriv radius (og {{ui:Radius i enden (mm, 0 = samme)}} for en radius, der ændrer sig langs kanten). Resultatlinjen siger, hvor langt afrundingen er fra den ideelle rullende kugle, og en radius, der ikke passer, afvises med fladen navngivet. {{ui:Afrund flere kanter}} runder mange kanter i ét trin; sæt kryds ved {{ui:Hjørner (kugleflade hvor tre mødes)}} for et kugle-hjørne, hvor tre afrundede kanter på flade flader mødes. Se [Frie flader (NURBS)](topic:nurbs-surfaces).
- **Fortyk til et massivt legeme.** {{ui:Fortyk til et massivt legeme}} i samme arbejdsområde giver en overflade en tykkelse; {{ui:Anden side}} vokser den den anden vej. En fold eller et selvkrydsning afvises, med overfladen og stedet navngivet.
- **Massive legemer fra flader.** Trimmede flader kan forbindes med sammenlægning, subtraktion og snit og indbages i delen som ét fortrydelsestrin. STEP skriver et massivt legeme som én lukket skal og IGES som ét legeme; begge læses tilbage som et legeme. Hvis fladerne ikke passer sammen kant for kant, får filen separate flader, og statuslinjen siger det. Legemer kan også laves i node-editoren; se [Node-editor](topic:nodes).
- **Afrundinger i scanninger.** Når du tilpasser flader til et scan, søges der også efter randafrundinger (tori) og afrundinger med variabel radius langs en nogenlunde lige kant, og de opføres med deres radius. Det er kun testet på opdigtede scanninger.

### Samlinger, dokumenter og links

- **Store samlinger.** Dele, der er kopier, deler ét mesh, og {{ui:Visninger}} › {{ui:Let visning}} tegner bokse, så visningen holder sig i bevægelse (den slår sig selv til for meget store samlinger; valg og led bruger stadig de rigtige dele). Deltræet viser sine første rækker og en knap {{ui:Vis 700 flere}} for resten. Samlingsfiler kan rumme op til 50.000 instanser og 100.000 led. Se [Byg en samling](topic:build-assembly).
- **Documents.** {{ui:Dokumenter…}} under gruppen **Fil** åbner en dialog over en projektmappe: tjek ud og tjek ind, revisionsbogstaver, tilstande (under arbejde, til gennemsyn, frigivet, forældet), historik, hvor brugt og stykliste. Se [Dokumenter og revisioner (arkivet)](topic:documents-walkthrough).
- **Live Rhino-link.** Ét script, `cadcraft_link.py`, overvåger et Rhino- eller Grasshopper-dokument og sender kun det, der er ændret, ind i PartCraft, hvor en importeret feature bygges om på den nye form. Det går kun én vej og kræver Studio. Se [Live .3dm-link](topic:live-3dm-link).
- **Se hinandens markører.** I en delt session vises hver persons markør med deres navn og den feature, de har valgt. Se [Arbejd live med andre](topic:work-live).
- **Fabriksgulv.** Slå fabriksgulv-addonet til i {{ui:Indstillinger}} › {{ui:Add-ons}}. Efter du har sendt et program i {{ui:Fremstilling}}, kan dets fane {{ui:Føj til fabrikkens jobkø}} eller {{ui:Gem som jobfil}}. Den sender eller starter aldrig en maskine.

### Analyse og dele

- **Solid FEM-addon.** Slå {{ui:Solid FEM}} til i {{ui:Indstillinger}} › {{ui:Add-ons}} (den er slået fra, indtil du gør det), og en {{ui:Solid FEM}}-fane vises i højre panel. {{ui:Mesh delen}}, vælg fastholdte flader og laster i 3D-visningen, {{ui:Løs}}, og tegn flytning, von Mises-spænding eller en egenform med {{ui:Vis på modellen}}. Se [Solid FEM: en spændingskontrol](topic:solid-fem-check).
- **Bue i skitser, ti måder.** Pilen ved {{ui:Bue}} i skitsens værktøjslinje lister 3-punkt, Start-centrum-slut, Start-centrum-vinkel, Start-centrum-længde, Start-slut-vinkel, Start-slut-retning, Start-slut-radius, Centrum-start-slut, Centrum-start-vinkel, Centrum-start-længde og Fortsæt. Se [Tegn en bue med ti metoder](topic:sketch-arc-methods).
- **Britiske stålstørrelser.** Stålprofiler kan bruge 976 britiske profiler (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); skriv en størrelse såsom `305x165x40 UB`. Se [Stålprofiler](topic:structural-members).

### Print

- **Printfase.** Knappen {{ui:Printfase}} i værktøjslinjen (add-on 3D Print, slået til som standard) lægger din dels legemer på et stiplet bed: {{ui:Fold ud}}, {{ui:Drej 90°}}, {{ui:Arranger på bedet}}, {{ui:Tilpas alle på bedet}}, {{ui:Forhåndsvis lag}}, og derefter {{ui:Send til 3D-printer}} over USB, Klipper (Moonraker), OctoPrint eller PrusaLink. Intet sendes, før du bekræfter, og din del ændres aldrig. For en STL- eller 3MF-fil i stedet, se [Gør en del klar til 3D-print](topic:print-3d).
- **Harpiksprint.** Addons i {{ui:Indstillinger}} › {{ui:Add-ons}}, alle slået fra, indtil du slår dem til: en harpikssliser, en eksponeringstest og filformaterne Elegoo GOO, SL1, Chitubox CBDDLP/CTB og Anycubic. Slicing kører på en arbejdstråd, så siden forbliver responsiv.

## I alle apps

- Hver svævetip er en Bootstrap-tooltip.
- Startetippet har en luk-knap; den forbliver lukket.
- En panels række af faner, der ikke passer, scroller sidelæns i stedet for at blive skåret af.
- Browserfanen viser det åbne dokuments navn før PartCraft | CadCraft.
- {{ui:Indstillinger}} viser arbejdsområdets {{ui:Layout}} som en rullemenu med valg, og sprogboksen lister alle sprog, som buildet har.
- Vægt og Temperatur er enhedstyper i indstillingerne for {{ui:Enheder}}.

## Rettet

- Skitsens Bue-menu lister nu hver metode.
- Add-on-værktøjslinjen og browserfanens titel blev rettet den 2026-11-09.

## Ærlige begrænsninger

- Eksakt STEP er læst tilbage i OpenCascade (gyldige legemer, volumener lig dem der er regnet ud i hånden). Det er endnu ikke åbnet i hvert CAD- eller CAM-program, og en samling skrives ikke som eksakt STEP.
- Intet er printet på en rigtig printer. Slicing, G-kode og harpiksfiler er læst tilbage af vores egne programmer eller en stand-in-printer; ingen af harpiksformaterne er indlæst på en printer, og printerstørrelser og eksponeringer er udgangspunkter.
- Solid FEM er lineær, isotrop og elastisk, med ét materiale pr. del, uden kontakt, flydning eller knækning. Spænding ved fastholdte flader og skarpe hjørner afhænger af mesh'et. Det er et kontrolværktøj, ikke gennemgået af en ingeniør.
- Tider for store samlinger kommer fra en server uden GPU; en fuld-detaljeret ramme med 20.000 dele tager stadig sekunder dér.
- Afrundinger virker på par af flader; der er ingen generel hjørneblanding og ingen afrunding mellem flader, der ikke mødes.
- Rhino-linket er aldrig kørt i rigtig Rhino eller Grasshopper. Documents er afprøvet af to programmer på én mappe, ikke af to personer på et netværksdrev.
- Tilpasning af flader til et rigtigt scan har ikke fået sin håndkontrol. Sprog andet end engelsk er maskinkladder.
- Windows-installationsprogrammer er ikke kodesignerede, og macOS-disk-billedet er ikke notariseret. Se [Fejlfinding](topic:troubleshooting).

Tidligere ændringer findes i [Nyt i 0.7](topic:whats-new-0-7).

## Tidligere: 0.8 og 0.8.1

Dette er hvad der ændrede sig i PartCraft 0.8 og 0.8.1 sammenlignet med 0.7. Simuleringen svarer, mens du redigerer, og fortæller dig, hvad der går i stykker først; samlinger får bevægelsesstudier, og nye arbejdsområder laver frie flader og dele dimensioneret ud fra fysik. 0.8.1 er en lille rettelsesudgivelse.

### Nyt

**Simulering**

- **Opdatér, mens jeg redigerer.** Sæt kryds ved {{ui:Opdatér, mens jeg redigerer}} i Løs-blokken, og svarene følger dine rettelser. Ændrer du en målsætning, en last eller materialet, dukker et hurtigt svar op med det samme, lavet med elementer fire gange større; når du stopper i omkring et sekund, erstatter studiets egne forfinede svar det. Resultaterne siger, hvilket du ser. På en stålkonsol var det hurtige svar inden for 1 % på udbøjning og omkring 4 % på spænding i forhold til det forfinede. Se [Kontrollér spænding og udbøjning](topic:simulation#update-while-you-edit-live).
- **Hvad går først i stykker.** For et statisk eller knækningsstudie skalerer {{ui:Hvad går først i stykker?}} i **Bryd den**-blokken lasterne, til delen giver sig. Den lister, værst først, lastfaktoren til første flydning (med en rød markør, hvor spændingen topper) og lastfaktoren til knækning. En faktor under 1 betyder, at delen allerede giver sig, som den er belastet, og Problemer viser en fejl. Faktorerne kommer fra et lineært studie, så de er kun så gode som det. Se [Kontrollér spænding og udbøjning](topic:simulation#find-out-what-breaks-first-break-it).
- **Flydning og kontakt.** To flere studietyper: en ikke-lineær, hvor materialet følger sin rette linje til flydespændingen og derefter en fladere hældning, med plastisk tøjning plottet; og en kontakt-type, hvor separate stykker skubber på hinanden (friktionsfrit) eller sidder fast (bundet). Et lastetrin, der ikke kan falde til ro, eller stykker, der synker for langt ind i hinanden, vises i Problemer-panelet. Friktion, store glidninger, store rotationer, store udbøjninger og udmattelse løses ikke. Se [Kontrollér spænding og udbøjning](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Inputfiler til CalculiX.** {{ui:Eksportér}} › {{ui:CalculiX-inputfil (.inp)}} gemmer studiet til CalculiX, et separat program, du installerer og kører selv; {{ui:Eksportér}} › {{ui:CalculiX-resultater (.frd)}} læser dets resultatfil tilbage på det samme mesh. PartCraft starter aldrig det program, og den siger det, hvis delen er ændret, siden inputfilen blev gemt.

**Samlinger**

- **Bevægelsesstudier.** {{ui:Samling}} › {{ui:Bevægelse}} driver ét leds værdi over en tid, du angiver (konstant hastighed, blød, sinus eller ud og tilbage), placerer samlingen ved hvert trin med dens led og lukkede kæder og rapporterer, hvad der kolliderer, og hvor tæt dele kommer. {{ui:Tilføj et punkt}} plotter et punkts position, hastighed og acceleration, leddets værdi og klaringen over tid; {{ui:Gem CSV}} og {{ui:Gem plot}} skriver dem ud. Efter {{ui:Kør}} flytter trinlinjen under kørslen samlingen til ethvert trin. Studiets indstillinger gemmes i samlingsfilen. Hastighed og acceleration kommer fra de optagne positioner, så brug flere trin, hvis en skarp top aflæses for lavt. Se [Kontrollér en samling for kollisioner og bevægelse](topic:check-assembly#a-motion-study).

**Flader og dele ud fra fysik**

- **Et arbejdsområde til overflader.** Vælg {{ui:Overflader}} i {{ui:Arbejdsområde}}-boksen for NURBS-kurver og -flader ved siden af delen: {{ui:Kurve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} og {{ui:Zebra}}, med kontinuitet (G0, G1 eller G2) målt på de eksakte flader, og en kant, der er værre end du bad om, vises i Problemer med en Match-rettelse. {{ui:Glat}} måler skrogkurver for vendepunkter og krumningsspring og genopbygger de ujævne inden for din tolerance. Flader gemmes i delfilen og ændrer ikke delens features. Se [Frie flader (NURBS)](topic:nurbs-surfaces).
- **Arbejdsområdet Engineer.** Vælg {{ui:Engineer}} i arbejdsområde-skifteren, vælg en generator og klik {{ui:Ny}}: et script dimensionerer en del ud fra, hvad den skal kunne (varme der skal flyttes, strømninger, tryk, materiale, printproces) med lærebogsformler og bygger den, og giver derefter de tal, den brugte, tilbage med deres kilder, sine fremstillingstjek og filer til analyseværktøjer. De samme input giver den samme del på enhver computer. Generatoren gemmes i delen, og at åbne en del kører aldrig et script. Se [Dele ud fra fysik: generatorer](topic:engineer-generators) og [Skriv en generator](topic:write-a-generator).

**Skitsering, tegninger og fremstilling**

- **En skitse ud fra et foto.** {{ui:Features}} › {{ui:Mere}} › {{ui:Skitse fra et foto…}} sporer et billede af en flad del på et jævnt underlag (kontur og huller) eller en pen-tegning til linjer, buer og cirkler. Du angiver én længde, kontrollerer forhåndsvisningen og laver skitsen. Se [Grundlæggende om skitser](topic:sketch-basics#a-sketch-from-a-photo).
- **Skalering og opdeling til print.** {{ui:Eksportér}} › {{ui:Skalér til print (STL eller 3MF)…}} skalerer pr. akse uden at ændre delen, for eksempel med en krympetilladelse. {{ui:Eksportér}} › {{ui:Opdel til print (en zip af stykker)…}} skærer en del, der er for stor til dit bed, i nummererede stykker forbundet med pinde, nøgler, svalehaler, dyvelhuller eller magnetlommer. Se [Print i 3D](topic:print-3d).
- **Nestede plader til G-kode.** {{ui:Eksportér}} › {{ui:Nestede plader til G-kode}} læser en nestet DXF og laver ét program pr. plade gennem den postprocessor, du vælger: huller og udskæringer først, derefter konturerne. Den planlægger ikke indløb, skæreorden eller delte kanter. Se [Nest flade dele på plader](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Tegninger, der gør mere selv.** {{ui:Ark}} › {{ui:Automatisk}} vælger det mindste A-ark, der kan rumme visningerne i den største standardskala op til 1:1. {{ui:Målsæt hullerne}} sætter et centermærke på hvert hul, én henvisning pr. størrelse og positionerne fra visningens nederste venstre hjørne. Se [Lav en tegning](topic:drawing-pdf).

**I alle apps**

- **Sprog.** Apps'ene kommer på 54 sprog. De ud over engelsk er maskinkladder, indtil en indfødt taler har læst dem.
- **Værktøjslinjens rækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} vælger Ombryd (som før), 2 rækker eller 1 række; en bjælke, der ikke passer, scroller sidelæns. PartCrafts Feature-bånd viser det mest brugte værktøj stort og gemmer varianter bag en delt knap.
- **Forbind din AI.** Studio er navet til at forbinde en assistent af din egen med alle otte apps, med tilladelsen læs alene, foreslå eller rediger pr. app. En forbundet assistent kan dimensionere en del ud fra en sætning, såsom en konsol til en last, vise sit arbejde og alle tjek og bygge den; den rapporterer, hvad den ikke kontrollerede (spændingskoncentration, udmattelse, krybning i plast). Se [Brug PartCraft med en AI-assistent](topic:use-with-ai-assistants).

### Rettet i 0.8.1

- **Frysning af markøren i fuld skærm.** Svævevalget er nu begrænset i hastighed. Årsagen er vores bedste læsning og er ikke bekræftet med den, der rapporterede det.
- **Sprog under kørsel.** Studio og de pakkede udgaver kan skifte sprog, mens de kører; før var de kun engelske. Det er endnu ikke testet på alle platforme: sig til, hvis sproget ikke skifter.

### Ikke i denne version endnu

- Forbind din AI er ikke færdig: ét-klik-forbindelse inde i Studio, den hostede connector til browser-AI, din egen API-nøgle inde i Studio og den udgivne MCP-pakke er ikke lovet. Studio har ingen AI af sin egen.
- Studio er ikke kodesigneret: Windows kan advare, og macOS beder om højreklik og derefter Åbn. Se [Fejlfinding](topic:troubleshooting).
- Tolerancestakke er stadig én retning: se [Tolerancestakke](topic:tolerance-stackup).
- Resten står i [Hvad der ikke er bygget endnu](topic:not-built-yet).

Tidligere ændringer står i [Nyt i 0.7](topic:whats-new-0-7).
