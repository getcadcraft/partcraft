---
title: Nyheder i 0.8 og 0.8.1
summary: PartCraft 0.8 tilføjer live-analyse, mens du redigerer, en kontrol af hvad der går først i stykker, flydnings- og kontaktstudier med deck-filer til en ekstern løser, bevægelsesstudier for samlinger, et arbejdsområde til frie overflader, dele dimensioneret ud fra fysik i arbejdsområdet Ingeniør, skitse fra et foto, eksport til print, nestede plader til G-kode og tegninger, der målsætter deres huller. 0.8.1 retter en fejl, hvor markøren fryser i fuldskærm.
keywords: nyheder, hvad er nyt, udgivelsesnoter, ændringslog, ændringer, 0.8, 0.8.1, version, nye funktioner, live-analyse, opdatér under redigering, gå i stykker, hvad går først i stykker, lastfaktor, ikke-lineær, flydning, plastisk tøjning, kontakt, calculix, bevægelsesstudie, frigang, overflader, nurbs, glat, skrog, zebra, ingeniør, generator, genereret legeme, skitse fra et foto, skalér til print, opdel til print, krympning, nestede plader, g-kode, tegning, målsæt huller, assistent, mcp, sprog, værktøjslinjens rækker
from: 62e4dce2
---

Dette er, hvad der er ændret i PartCraft 0.8 og 0.8.1 sammenlignet med 0.7. Simuleringen svarer, mens du redigerer, og fortæller dig, hvad der går først i stykker. Samlinger får bevægelsesstudier, og nye arbejdsområder laver frie overflader og dele dimensioneret ud fra fysik. 0.8.1 er en lille rettelsesudgivelse.

## Nyt

### Simulering

- **{{ui:Opdatér, mens jeg redigerer}}.** Sæt flueben i {{ui:Opdatér, mens jeg redigerer}} i Solve-blokken, så følger svarene dine ændringer. Ændrer du en målsætning, en last eller materialet, vises et hurtigt svar, beregnet med elementer fire gange større, med det samme. Når du holder en pause på cirka et sekund, erstatter undersøgelsens egne forfinede svar det. Resultaterne viser, hvilket af dem du ser. På en stålkonsol var det hurtige svar inden for 1 % på nedbøjning og cirka 4 % på spænding i forhold til det forfinede. Se [Kontrollér spænding og nedbøjning](topic:simulation#update-while-you-edit-live).
- **{{ui:Hvad går først i stykker?}}.** For et statisk eller knækningsstudie skalerer {{ui:Hvad går først i stykker?}} i blokken **Bryd den** lasterne, indtil delen giver sig. Den viser, værst først, lastfaktoren til første flydning (med en rød markør der, hvor spændingen topper) og lastfaktoren til knækning. En faktor under 1 betyder, at delen allerede giver sig ved den nuværende belastning, og Problemer viser en fejl. Faktorerne kommer fra et lineært studie, så de er kun så gode som det. Se [Kontrollér spænding og nedbøjning](topic:simulation#find-out-what-breaks-first-break-it).
- **Flydning og kontakt.** To studietyper mere: et ikke-lineært studie, hvor materialet følger sin rette linje op til flydespændingen og derefter en fladere hældning, med plastisk tøjning plottet, og et kontaktstudie, hvor adskilte dele skubber på hinanden (friktionsfrit) eller sidder fast (sammenklæbet). Et lasttrin, der ikke kan falde til ro, eller dele, der synker for langt ind i hinanden, vises i panelet Problemer. Friktion, store glidninger, store rotationer, store nedbøjninger og udmattelse løses ikke. Se [Kontrollér spænding og nedbøjning](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Deck-filer til CalculiX.** {{ui:Eksportér}} › {{ui:CalculiX-deck (.inp)}} gemmer studiet til CalculiX, et separat program, du selv installerer og kører. {{ui:Eksportér}} › {{ui:CalculiX-resultater (.frd)}} læser dets resultatfil tilbage på det samme net. PartCraft starter aldrig det program, og den siger til, hvis delen er ændret, siden deck'et blev gemt.

### Samlinger

- **Bevægelsesstudier.** {{ui:Samling}} › {{ui:Bevægelse}} driver værdien for ét led over en tid, du angiver (konstant hastighed, blødt, sinus eller ud og tilbage). Den placerer samlingen i hvert trin med dens led og lukkede kæder og rapporterer, hvad der kolliderer, og hvor tæt dele kommer på hinanden. {{ui:Tilføj et punkt}} plotter et punkts position, hastighed og acceleration, leddets værdi og frigangen mod tid. {{ui:Gem CSV}} og {{ui:Gem plot}} skriver dem ud. Efter {{ui:Kør}} flytter trinlinjen for kørslen samlingen til et hvilket som helst trin. Studiets indstillinger gemmes i samlingsfilen. Hastighed og acceleration beregnes ud fra de optagne positioner, så brug flere trin, hvis en skarp top vises for lavt. Se [Kontrollér en samling for kollisioner og bevægelse](topic:check-assembly#a-motion-study).

### Overflader og dele ud fra fysik

- **Et arbejdsområde til overflader.** Vælg {{ui:Overflader}} i feltet {{ui:Arbejdsområde}} for NURBS-kurver og -overflader ved siden af delen: {{ui:Kurve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} og {{ui:Zebra}}. Kontinuiteten (G0, G1 eller G2) måles på de nøjagtige overflader, og en kant, der er dårligere end du bad om, vises i Problemer med en {{ui:Match}}-rettelse. {{ui:Glat}} måler skrogkurver for vendepunkter og krumningsspring og genopbygger de ikke-glatte inden for din tolerance. Overflader gemmes i delfilen og ændrer ikke delens features. Se [Frie overflader (NURBS)](topic:nurbs-surfaces).
- **Arbejdsområdet Ingeniør.** Vælg {{ui:Ingeniør}} i arbejdsområdevælgeren, vælg en generator og klik på {{ui:Ny}}. Et script dimensionerer en del ud fra, hvad den skal kunne (varme der skal flyttes, strømninger, tryk, materiale, printproces) med lærebogsformler, og bygger den. Derefter returnerer det de tal, det brugte, med deres kilder, sine fremstillingskontroller og filer til analyseværktøjer. De samme input giver den samme del på enhver computer. Generatoren gemmes i delen, og at åbne en del kører aldrig et script. Se [Dele ud fra fysik: generatorer](topic:engineer-generators) og [Skriv en generator](topic:write-a-generator).

### Skitser, tegninger og fremstilling

- **En skitse fra et foto.** {{ui:Features}} › {{ui:Mere}} › {{ui:Skitse fra et foto…}} sporer et billede af en flad del på en ren baggrund (kontur og huller) eller en blyantstegning over i linjer, buer og cirkler. Du angiver én længde, kontrollerer forhåndsvisningen og laver skitsen. Se [Grundlæggende skitsering](topic:sketch-basics#a-sketch-from-a-photo).
- **Skalér og opdel til print.** {{ui:Eksportér}} › {{ui:Skalér til print (STL eller 3MF)…}} skalerer pr. akse uden at ændre delen, fx med en krympetilladelse. {{ui:Eksportér}} › {{ui:Opdel til print (en zip af stykker)…}} skærer en del, der er for stor til printpladen, i nummererede stykker, som sammenføjes med tappe, nøgler, svalehaler, dyvelhuller eller magnetlommer. Se [Print i 3D](topic:print-3d).
- **Nestede plader til G-kode.** {{ui:Eksportér}} › {{ui:Nestede plader til G-kode}} læser en nestet DXF og laver ét program pr. plade gennem den efterbehandler, du vælger: huller og udskæringer først, derefter konturerne. Den planlægger ikke indkørsler, skærerækkefølge eller fælles kanter. Se [Nestning af flade dele på plader](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Tegninger, der gør mere selv.** {{ui:Ark}} › {{ui:Automatisk}} vælger det mindste A-ark, der rummer visningerne i den største standardskala op til 1:1. {{ui:Målsæt hullerne}} sætter et centermærke på hvert hul, én henvisning pr. størrelse og positionerne fra visningens nederste venstre hjørne. Se [Lav en tegning](topic:drawing-pdf).

### I alle programmer

- **{{ui:Sprog}}.** Programmerne findes på 54 sprog. De sprog, der er ud over engelsk, er maskinudkast, indtil en indfødt taler har læst dem.
- **{{ui:Værktøjslinjens rækker}}.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} vælger Bryd linjer (som før), 2 rækker eller 1 række. En linje, der ikke passer, scroller i sidelæns retning. PartCrafts Feature-bånd viser det mest brugte værktøj stort og gemmer varianter bag en delt knap.
- **Forbind din AI.** Studio er navet for at forbinde en assistent, du selv har, til alle otte programmer, med tilladelse til kun læsning, forslag eller redigering pr. program. En forbundet assistent kan dimensionere en del ud fra en sætning, fx en vinkel til en last, vise sin udregning og alle kontroller og bygge den. Den melder, hvad den ikke kontrollerede (spændingskoncentration, udmattelse, krybning i plastik). Se [Brug PartCraft med en AI-assistent](topic:use-with-ai-assistants).

## Rettet i 0.8.1

- **Fuldskærmsmarkøren fryser.** Hover-valget er nu begrænset i hastighed. Årsagen er vores bedste læsning og er ikke bekræftet med den person, der meldte fejlen.
- **Sprog under kørsel.** Studio og de pakkede udgaver kan skifte sprog, mens de kører. Før var de kun engelske. Dette er endnu ikke testet på alle platforme: giv os besked, hvis sproget ikke skifter.

## Ikke i denne version endnu

- Forbind din AI er ikke færdig: forbindelse med ét klik inde i Studio, den hostede forbindelse til browser-AI, din egen API-nøgle i Studio og den udgivne MCP-pakke er ikke lovet. Studio har ingen egen AI.
- Studio er ikke kodesigneret: Windows kan advare, og macOS beder om højreklik og derefter Åbn. Se [Fejlfinding](topic:troubleshooting).
- Tolerancekæder er stadig kun i én retning: se [Tolerancekæder](topic:tolerance-stackup).
- Resten er listet i [Hvad der ikke er lavet endnu](topic:not-built-yet).

Tidligere ændringer findes i [Nyheder i 0.7](topic:whats-new-0-7).
