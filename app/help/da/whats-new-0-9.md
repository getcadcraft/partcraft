---
title: Nyheder i 0.9 (tidligere)
summary: PartCraft 0.9 tilføjer afrundinger mellem flader og fortykning til legemer, samlinger med tusindvis af dele, et Documents-arkiv med revisioner, et Solid FEM-spændingstjek-add-on, ti buemetoder, britiske stålmål, et Print-trin og add-ons til harpiksprint.
keywords: nyheder 0.9, tidligere udgivelse, nyheder, hvad er nyt, udgivelsesnoter, changelog, 0.9, afrunding mellem flader, rullende kugle, afrund flere kanter, gør tyk, legeme af flader, step-skal, iges-legeme, skanningsafrundinger, stor samling, let visning, 20000 dele, dokumenter, arkiv, tjek ud, revision, udgivelse, hvor brugt, rhino-link, grasshopper, 3dm, markører, værkstedsgulv, jobkø, solid fem, endelige elementer, von mises, egenfrekvens, buemetoder, 3-punkts bue, britiske stålprofiler, blå bog, printtrin, harpiks, goo, ctb, bed, fold ud, nyheder, hvad er nyt, udgivelsesnoter, changelog, ændringer, 0.8, 0.8.1, version, nye funktioner, live-analyse, opdatér mens du redigerer, bryd den, hvad går først i stykker, lastfaktor, ikke-lineær, flydning, plastisk tøjning, kontakt, calculix, bevægelsesstudie, luft, flader, nurbs, glat, hylster, zebra, engineer, generator, genereret legeme, skitse fra et foto, skalér til print, opdel til print, krympning, nestede plader, g-kode, tegning, mål hullerne, assistent, mcp, sprog, værktøjslinjens rækker
from: 1dafd7c8
---

Dette er, hvad der ændrede sig i PartCraft 0.9, sammenlignet med 0.8.1. Buede flader lukker nu til legemer, samlinger med tusindvis af dele forbliver brugbare, et Documents-arkiv gemmer revisioner, og et Solid FEM-add-on kontrollerer spænding i en del. Hvert punkt siger, hvor du finder det.

## Nyt i 0.9.1

- **Eksakt STEP-eksport.** {{ui:Eksportér}} › {{ui:STEP AP242 (eksakt massivt legeme)}} og {{ui:STEP AP214 (eksakt massivt legeme)}} virker nu. Huller, udhævninger, afrundinger, kegler, kugler og torus skrives på deres sande flader med sande cirkler som kanter, så et andet CAD- eller CAM-program kan genkende et hul som et hul. Spline-sider, modellerede gevind og importerede net forbliver flade facetter i samme legeme. Se [Eksport til print, STEP og DXF](topic:export-files#for-other-cad-programs-step).
- **STEP ind, eksakt STEP ud.** En STEP-fil, du åbner, beholder sine egne plane flader, cylindre, kegler, kugler og torus, så {{ui:Eksportér}} › {{ui:STEP AP242 (eksakt massivt legeme)}} skriver dem tilbage som sande flader i stedet for facetter: en leverandørs bjælke med boltehuller går ud med de samme flader, som den kom ind med, plus det, du har skåret i den. Spline-, sweep- og drejede flader i filen forbliver facetter, og det samme gælder legemer fra STL, OBJ og 3MF. Åbn STEP-filen igen for en del gemt tidligere. Se [Åbn en STEP-fil og byg videre på den](topic:import-step).
- **Sande cirkler i flade-DXF.** {{ui:Eksportér}} › {{ui:DXF af skitsen eller den plane flade}} med en plan flade valgt skriver nu runde huller som cirkler med hullets eget centrum og radius, til et laser-, plasma- eller vandskærebord. Andre runde kanter er stadig facetter.
- **Eksakt STEP til værkstedet.** I {{ui:Fremstilling}} skriver {{ui:Eksakt STEP (arbejdskoordinater)}} delen med sin oprindelse i opsætningens arbejdsoprindelse og Z langs værktøjsaksen, de koordinater G-koden bruger. Se [Lav værktøjsbaner og G-kode](topic:manufacture#exact-step-for-the-shop).

## Nyt

### Flader og legemer

- **Afrunding mellem flader.** Vælg {{ui:Overflader}} i {{ui:Arbejdsområde}}-boksen, og vælg derefter {{ui:Afrunding mellem flader}}. Vælg de to flader af ét legeme, og skriv radius (og {{ui:Radius i enden (mm, 0 = samme)}} for en radius, der ændrer sig langs kanten). Resultatlinjen siger, hvor langt afrundingen er fra den ideelle rullende kugle, og en radius, der ikke passer, afvises med fladen navngivet. {{ui:Afrund flere kanter}} runder mange kanter på ét trin; sæt flueben ved {{ui:Hjørner (kugleflade hvor tre mødes)}} for et kugle-hjørne, hvor tre afrundede kanter på plane flader mødes. Se [Frie flader (NURBS)](topic:nurbs-surfaces).
- **Gør tyk til et legeme.** {{ui:Giv tykkelse og gør til massivt legeme}} i samme arbejdsområde giver en flade en tykkelse; {{ui:Anden side}} vokser den den anden vej. En fold eller et selvkrydsning afvises med fladen og stedet navngivet.
- **Legemer af flader.** Beskårne flader kan sammenføjes med union, subtraktion og skæring og indbages i delen som ét fortrydelsestrin. STEP skriver et legeme som én lukket skal og IGES som ét legeme; begge læses tilbage som et legeme. Hvis fladerne ikke passer kant for kant, får filen separate flader, og statuslinjen siger det. Legemer kan også laves i node-editoren; se [Node-editor](topic:nodes).
- **Rande- og variable afrundinger i skanninger.** Når du tilpasser flader til en skanning, kigges der også efter randafrundinger (tori) og afrundinger med variabel radius langs en nogenlunde lige kant, og de listes med deres radius. Det er kun testet på opdigtede skanninger.

### Samlinger, dokumenter og links

- **Store samlinger.** Dele, der er kopier, deler ét net, og {{ui:Visninger}} › {{ui:Let visning}} tegner bokse, så visningen holder sig i bevægelse (den slår selv til for meget store samlinger; valg og samlinger bruger stadig de rigtige dele). Deltræet viser sine første rækker og en knap {{ui:Vis 700 flere}} for resten. Samlingsfiler kan rumme op til 50.000 forekomster og 100.000 samlinger. Se [Byg en samling](topic:build-assembly).
- **Dokumenter.** {{ui:Dokumenter…}} i **Fil**-gruppen åbner en dialog over en projektmappe: tjek ud og tjek ind, revisionsbogstaver, tilstande (arbejde i gang, til gennemsyn, frigivet, forældet), historik, hvor brugt og stykliste. Se [Dokumenter og revisioner (arkivet)](topic:documents-walkthrough).
- **Live Rhino-link.** Ét script, `cadcraft_link.py`, følger et Rhino- eller Grasshopper-dokument og skubber kun det, der er ændret, ind i PartCraft, hvor en importeret funktion genopbygges på den nye form. Det er én vej og kræver Studio. Se [Live .3dm-link](topic:live-3dm-link).
- **Se hinandens markører.** I en delt session vises hver persons markør med navn og den funktion, de har valgt. Se [Arbejd live med andre](topic:work-live).
- **Værkstedsgulv.** Slå add-on'et Værkstedsgulv til i {{ui:Indstillinger}} › {{ui:Add-ons}}. Når du har postet et program i {{ui:Fremstilling}}, kan dets fane {{ui:Føj til værkstedets jobkø}} eller {{ui:Gem som jobfil}}. Det sender eller starter aldrig en maskine.

### Analyse og dele

- **Solid FEM-add-on.** Slå {{ui:Solid FEM}} til i {{ui:Indstillinger}} › {{ui:Add-ons}} (den er slået fra, indtil du gør det), og en fane {{ui:Solid FEM}} vises i højre panel. {{ui:Mesh delen}}, vælg faste flader og laster i 3D-visningen, {{ui:Løs}}, og tegn forskydning, von Mises-spænding eller en egenform med {{ui:Vis på modellen}}. Se [Solid FEM: et spændingstjek](topic:solid-fem-check).
- **Bue i skitser, ti måder.** Pilen ved siden af {{ui:Bue}} i skitseværktøjslinjen lister 3-punkt, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length og Continue. Se [Tegn en bue med ti metoder](topic:sketch-arc-methods).
- **Britiske stålmål.** Konstruktionsdele kan bruge 976 britiske profiler (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); skriv en størrelse som `305x165x40 UB`. Se [Stålprofiler](topic:structural-members).

### Print

- **Printtrin.** Knappen {{ui:Printtrin}} på værktøjslinjen (add-on'et 3D-print, slået til som standard) lægger din dels legemer på et stiplet leje: {{ui:Fold ud}}, {{ui:Drej 90°}}, {{ui:Arranger på pladen}}, {{ui:Tilpas alle på pladen}}, {{ui:Forhåndsvis lag}}, derefter {{ui:Send til 3D-printer}} over USB, Klipper (Moonraker), OctoPrint eller PrusaLink. Intet sendes, før du bekræfter, og din del ændres aldrig. Til en STL- eller 3MF-fil i stedet, se [Gør en del klar til 3D-print](topic:print-3d).
- **Harpiksprint.** Add-ons i {{ui:Indstillinger}} › {{ui:Add-ons}}, alle slået fra, indtil du slår dem til: en harpiksslicer, en eksponeringstest og filformaterne Elegoo GOO, SL1, Chitubox CBDDLP/CTB og Anycubic. Slicing kører på en arbejdstråd, så siden forbliver responsiv.

## I alle apps

- Hvert svævehint er et Bootstrap-tooltip.
- Startfeltet har en lukkeknap; det forbliver lukket.
- En panels række af faner, der ikke passer, scroller sidelæns i stedet for at blive klippet af.
- Browserfanen viser det åbne dokuments navn før PartCraft | CadCraft.
- {{ui:Indstillinger}} viser arbejdsområdets {{ui:Layout}} som en rullemenu med valgmuligheder, og sprogboksen lister hvert sprog, buildet har.
- Vægt og temperatur er enhedstyper i enhedsindstillingerne.

## Rettet

- Skitsens Bue-menu lister nu hver metode.
- Add-on-værktøjslinjen og titlen på browserfanen blev rettet den 2026-11-09.

## Ærlige begrænsninger

- Eksakt STEP blev læst tilbage i OpenCascade (gyldige legemer, rumfang lig med dem, der er regnet ud i hånden). Den er endnu ikke åbnet i hvert CAD- eller CAM-program, og en samling skrives ikke som eksakt STEP.
- Intet er printet på en rigtig printer. Slicing, G-kode og harpiksfiler er læst tilbage af vores egne programmer eller en stand-in-printer; ingen af harpiksformaterne er indlæst på en printer, og printerstørrelser og eksponeringer er udgangspunkter.
- Solid FEM er lineær, isotrop og elastisk, ét materiale pr. del, uden kontakt, flydning eller knækning. Spænding ved faste flader og skarpe hjørner afhænger af nettet. Det er et kontrolhjælpemiddel, ikke gennemgået af en ingeniør.
- Store-samlings-tider stammer fra en server uden GPU; en fuld-detalje-ramme med 20.000 dele tager stadig sekunder der.
- Afrundinger virker på par af flader; der er ingen generel hjørneblanding og ingen afrunding mellem flader, der ikke mødes.
- Rhino-linket er aldrig kørt inde i rigtig Rhino eller Grasshopper. Documents er prøvet af to programmer på én mappe, ikke af to personer på et netværksdrev.
- Tilpasning af flader til en rigtig skanning har ikke fået sin håndkontrol. Andre sprog end engelsk er maskinudkast.
- Windows-installationer er ikke kodesignerede, og macOS-diskbilledet er ikke notariseret. Se [Fejlfinding](topic:troubleshooting).

Tidligere ændringer findes i [Nyheder i 0.7](topic:whats-new-0-7).

## Tidligere: 0.8 og 0.8.1

Dette er, hvad der ændrede sig i PartCraft 0.8 og 0.8.1, sammenlignet med 0.7. Simuleringen svarer, mens du redigerer, og fortæller dig, hvad der går først i stykker; samlinger får bevægelsesstudier, og nye arbejdsområder laver buede flader og dele dimensioneret ud fra fysik. 0.8.1 er en lille fejlrettelsesudgivelse.

### Nyt

**Simulering**

- **Opdatér mens jeg redigerer.** Sæt flueben ved {{ui:Opdatér mens jeg redigerer}} i Løs-blokken, og svarene følger dine ændringer. Ændr en dimension, en last eller materialet, og et hurtigt svar, lavet med elementer fire gange større, vises med det samme; når du stopper i ca. et sekund, erstatter studiets egne forfinede svar det. Resultaterne siger, hvilket du ser på. På en stål-udkragning lå det hurtige svar inden for 1 % på udbøjning og ca. 4 % på spænding af det forfinede. Se [Kontrollér spænding og udbøjning](topic:simulation#update-while-you-edit-live).
- **Hvad går først i stykker.** For et statisk eller knækningsstudie skalerer {{ui:Hvad går først i stykker?}} i **Bryd den**-blokken lasterne, indtil delen giver sig. Den lister, værst først, lastfaktoren til første flydning (med en rød markør, hvor spændingen topper) og lastfaktoren til knækning. En faktor under 1 betyder, at delen allerede giver sig under belastningen, og Problemer viser en fejl. Faktorerne kommer fra et lineært studie, så de er kun så gode, som det er. Se [Kontrollér spænding og udbøjning](topic:simulation#find-out-what-breaks-first-break-it).
- **Flydning og kontakt.** To flere studietyper: et ikke-lineært, hvor materialet følger sin rette linje til flydespændingen og derefter en fladere hældning, med plastisk tøjning tegnet, og et kontaktstudie, hvor adskilte stykker skubber på hinanden (friktionsfrit) eller sidder fast (bundet). Et lastinterval, der ikke kan falde til ro, eller stykker, der synker for langt ind i hinanden, vises i panelet Problemer. Friktion, store glidninger, store rotationer, store udbøjninger og udmattelse løses ikke. Se [Kontrollér spænding og udbøjning](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Decks til CalculiX.** {{ui:Eksportér}} › {{ui:CalculiX-deck (.inp)}} gemmer studiet til CalculiX, et separat program, du selv installerer og kører; {{ui:Eksportér}} › {{ui:CalculiX-resultater (.frd)}} læser dets resultatfil tilbage på det samme net. PartCraft starter aldrig det program, og det siger det, hvis delen er ændret, siden decket blev gemt.

**Samlinger**

- **Bevægelsesstudier.** {{ui:Samling}} › {{ui:Bevægelse}} driver én samlings værdi over en tid, du angiver (konstant hastighed, blød, sinus eller ud og tilbage), placerer samlingen ved hvert trin med dens samlinger og lukkede sløjfer, og rapporterer, hvad der støder sammen, og hvor tæt dele kommer på. {{ui:Tilføj et punkt}} plotter et punkts position, hastighed og acceleration, samlingens værdi og luftspalten over tid; {{ui:Gem CSV}} og {{ui:Gem plot}} skriver dem ud. Efter {{ui:Kør}} flytter Trin gennem kørselslinjen samlingen til et valgfrit trin. Studiets indstillinger gemmes i samlingsfilen. Hastighed og acceleration beregnes ud fra de optagede positioner, så brug flere trin, hvis en skarp top læses lavt. Se [Kontrollér en samling for kollisioner og bevægelse](topic:check-assembly#a-motion-study).

**Flader og dele ud fra fysik**

- **Et Flader-arbejdsområde.** Vælg {{ui:Overflader}} i {{ui:Arbejdsområde}}-boksen for NURBS-kurver og -flader ved siden af delen: {{ui:Kurve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} og {{ui:Zebra}}, med kontinuitet (G0, G1 eller G2) målt på de eksakte flader, og en kant, der er dårligere end du bad om, listet i Problemer med en Match-rettelse. {{ui:Glat}} måler hydrostatiske linjer for vendepunkter og krumningsspring og genopbygger de ugunstige inden for din tolerance. Flader gemmes i delfilen og ændrer ikke delens funktioner. Se [Frie flader (NURBS)](topic:nurbs-surfaces).
- **Engineer-arbejdsområdet.** Vælg {{ui:Engineer}} i arbejdsområdeskifteren, vælg en generator, og klik {{ui:Ny}}: et script dimensionerer en del ud fra, hvad den skal gøre (varme der skal flyttes, strømninger, tryk, materiale, printproces) med klassiske formler og bygger den, og giver så de tal, den brugte, med deres kilder, sine fremstillingskontroller og filer til analyseværktøjer. De samme input giver den samme del på enhver computer. Generatoren gemmes i delen, og åbning af en del kører aldrig et script. Se [Dele ud fra fysik: generatorer](topic:engineer-generators) og [Skriv en generator](topic:write-a-generator).

**Skitsering, tegninger og fremstilling**

- **En skitse ud fra et foto.** {{ui:Funktioner}} › {{ui:Mere}} › {{ui:Skitse fra et foto…}} sporer et billede af en flad del på en jævn underlag (kontur og huller) eller en pennetegning til linjer, buer og cirkler. Du angiver én længde, kontrollerer forhåndsvisningen og laver skitsen. Se [Skitsegrundlag](topic:sketch-basics#a-sketch-from-a-photo).
- **Skalering og opdeling til print.** {{ui:Eksportér}} › {{ui:Skalér til print (STL eller 3MF)…}} skalerer pr. akse uden at ændre delen, for eksempel med en krympetillæg. {{ui:Eksportér}} › {{ui:Opdel til print (en zip af stykker)…}} skærer en del, der er for stor til din plade, i nummererede stykker, samlet med tapper, kiler, svalehaler, dyvelhuller eller magnetlommer. Se [Print i 3D](topic:print-3d).
- **Nestede plader til G-kode.** {{ui:Eksportér}} › {{ui:Nestede plader til G-kode}} læser en nestet DXF og laver ét program pr. plade gennem den post, du vælger: huller og udskæringer først, derefter konturerne. Den planlægger ikke indskæringer, skæreorden eller fælles kanter. Se [Nest plane dele på plader](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Tegninger, der gør mere selv.** {{ui:Ark}} › {{ui:Automatisk}} vælger det mindste A-ark, der rummer visningerne i den største standardskala op til 1:1. {{ui:Mål hullerne}} sætter et centermærke på hvert hul, én callout pr. størrelse og positionerne fra visningens nederste venstre hjørne. Se [Lav en tegning](topic:drawing-pdf).

**I alle apps**

- **Sprog.** Apps findes på 54 sprog. Alt ud over engelsk er maskinudkast, indtil en indfødt taler har læst det.
- **Værktøjslinjens rækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} vælger Ombryd (som før), 2 rækker eller 1 række; en linje, der ikke passer, scroller sidelæns. PartCraft's Funktions-bånd viser det mest brugte værktøj stort og gemmer varianter bag en delt knap.
- **Forbind din AI.** Studio er navet til at forbinde en assistent, du selv har, til alle otte apps, med tilladelsen læs kun, foreslå eller redigér pr. app. En forbundet assistent kan dimensionere en del ud fra en sætning, for eksempel et beslag til en last, vise sit arbejde og alle kontroller og bygge den; den siger, hvad den ikke har kontrolleret (spændingskoncentration, udmattelse, krybning i plast). Se [Brug PartCraft med en AI-assistent](topic:use-with-ai-assistants).

### Rettet i 0.8.1

- **Fuld-skærm-markørfrysning.** Hover-valget er nu throttlet. Årsagen er vores bedste læsning og er ikke bekræftet med den person, der meldte den.
- **Sprog under kørsel.** Studio og de pakkede udgaver kan skifte sprog, mens de kører; før var de kun engelske. Det er ikke testet på alle platforme endnu: sig til, hvis sproget ikke skifter.

### Ikke i denne version endnu

- Forbind din AI er ikke færdig: forbindelse med ét klik i Studio, den hostede forbinder til browser-AI, din egen API-nøgle i Studio og den udgivne MCP-pakke er ikke lovet. Studio har ingen AI af sin egen.
- Studio er ikke kodesigneret: Windows kan advare, og macOS beder om højreklik og derefter Åbn. Se [Fejlfinding](topic:troubleshooting).
- Tolerancekæder er stadig én retning: se [Tolerancekæder](topic:tolerance-stackup).
- Resten er listet i [Hvad der ikke er lavet endnu](topic:not-built-yet).

Tidligere ændringer findes i [Nyheder i 0.7](topic:whats-new-0-7).
