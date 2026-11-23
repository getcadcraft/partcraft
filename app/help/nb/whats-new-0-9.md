---
title: Nytt i 0.9 (tidligere)
summary: PartCraft 0.9 legger til avrunding mellom flater og fortykning til volumlegemer, sammenstillinger med tusenvis av deler, et Dokumenter-hvelv med revisjoner, et Solid FEM-tillegg for spenning, ti buemetoder, britiske stålprofiler, et utskriftstrinn og tillegg for harpiksutskrift.
keywords: nytt i 0.9, tidligere utgivelse, nytt i, hva er nytt, utgivelsesnotater, endringslogg, 0.9, avrunding mellom flater, rulleball, avrunding av flere kanter, fortykk, volumlegeme fra overflater, STEP-skall, IGES-volumlegeme, skannede avrundinger, stor sammenstilling, lettvektsvisning, 20000 deler, dokumenter, hvelv, sjekk ut, revisjon, utgivelse, hvor brukt, Rhino-kobling, Grasshopper, 3dm, markører, verkstedgulv, jobbkø, Solid FEM, elementmetoden, von Mises, egenfrekvens, buemetoder, 3-punktbue, britiske stålprofiler, blå bok, utskriftstrinn, harpiks, goo, ctb, plattform, legg flatt, oppdater mens jeg redigerer, bryt den, hva går i stykker først, lastfaktor, ikke-lineær, flyt, plastisk tøyning, kontakt, calculix, bevegelsesstudie, klaring, overflater, nurbs, glatt ut, skrog, zebra, engineer, generator, generert legeme, skisse fra et foto, skalering for utskrift, deling for utskrift, krymping, nestede plater, G-kode, tegning, mål hull, assistent, mcp, språk, verktøylinjerader

from: 1dafd7c8
---

Dette er hva som endret seg i PartCraft 0.9, sammenlignet med 0.8.1. Frie overflater lukkes nå til volumlegemer, sammenstillinger med tusenvis av deler er fortsatt brukbare, et Dokumenter-hvelv beholder revisjoner, og et Solid FEM-tillegg sjekker spenning i en del. Hvert punkt sier hvor du finner det.

## Nytt i 0.9.1

- **Eksakt STEP-eksport.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} og {{ui:STEP AP214 (exact solid)}} virker nå. Hull, tapper, avrundinger, kjegler, kuler og torer skrives på sine ekte flater, med ekte sirkler som kanter, slik at et annet CAD- eller CAM-program kan gjenkjenne et hull som hull. Splines-sider, modellerte gjenger og importerte nett forblir flate fasetter i samme volumlegeme. Se [Eksporter for utskrift, STEP og DXF](topic:export-files#for-other-cad-programs-step).
- **STEP inn, eksakt STEP ut.** En STEP-fil du åpner, beholder sine egne flate flater, sylindre, kjegler, kuler og torer, så {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} skriver dem tilbake som ekte flater i stedet for fasetter: en leverandørs bjelke med boltehull går ut med de samme flatene som den kom inn med, pluss det du har skåret inn i den. Spline-, sveipede og roterte flater i filen forblir fasetter, og det samme gjelder legemer fra STL, OBJ og 3MF. Åpne STEP-filen på nytt for en del lagret tidligere. Se [Åpne en STEP-fil og bygg videre på den](topic:import-step).
- **Ekte sirkler i flate-DXF.** {{ui:Export}} › {{ui:DXF of the sketch or flat face}} med en flat flate valgt skriver nå runde hull som sirkler, med hullets eget senter og radius, for et laser-, plasma- eller vannskjærebord. Andre runde kanter er fortsatt fasetter.
- **Eksakt STEP for verkstedet.** I {{ui:Manufacture}} skriver {{ui:Exact STEP (work coordinates)}} delen med origo i oppsettets arbeidsnullpunkt og Z langs verktøyaksen, koordinatene G-koden bruker. Se [Lag verktøybaner og G-kode](topic:manufacture#exact-step-for-the-shop).

## Nytt

### Overflater og volumlegemer

- **Avrunding mellom flater.** Velg {{ui:Surfaces}} i boksen Arbeidsområde, og deretter {{ui:Fillet between faces}}. Velg de to flatene på ett volumlegeme, skriv inn radiusen (og {{ui:Radius at the end (mm, 0 = the same)}} for en radius som endrer seg langs kanten). Resultatlinjen sier hvor langt avrundingen er fra den ideelle rulleballen, og en radius som ikke passer, avvises med flaten nevnt. {{ui:Fillet several edges}} runder mange kanter i ett trinn; kryss av {{ui:Corners (sphere patch where three meet)}} for et kulehjørne der tre avrundede kanter på flate flater møtes. Se [Frie overflater (NURBS)](topic:nurbs-surfaces).
- **Fortykk til et volumlegeme.** {{ui:Thicken into a solid}} i samme arbeidsområde gir en overflate en tykkelse; {{ui:Other side}} vokser den den andre veien. En fold eller et selvkryss avvises med overflaten og stedet nevnt.
- **Volumlegemer fra overflater.** Trimmede overflater kan settes sammen med union, subtract og intersect og settes inn i delen som ett angretrinn. STEP skriver et volumlegeme som ett lukket skall og IGES som ett legeme; begge leses tilbake som et volumlegeme. Hvis flatene ikke pares kant for kant, får filen egne flater, og statuslinjen sier det. Volumlegemer kan også lages i noderedigereren; se [Noderedigerer](topic:nodes).
- **Rund- og variable avrundinger i skanninger.** Når du tilpasser overflater til en skanning, søkes det også etter rundede kanter (torer) og avrundinger med variabel radius langs en rimelig rett kant, og de listes med radius. Det er bare testet på laget opp skanninger.

### Sammenstillinger, dokumenter og koblinger

- **Store sammenstillinger.** Deler som er kopier, deler ett nett, og {{ui:Views}} › {{ui:Lightweight display}} tegner bokser slik at visningen beholder bevegelsen (den slås på av seg selv for svært store sammenstillinger; plukking og ledd bruker fortsatt de virkelige delene). Delrutingen viser de første radene og en knapp {{ui:Show 700 more}} for resten. Sammenstillingsfiler kan inneholde opptil 50 000 forekomster og 100 000 ledd. Se [Bygg en sammenstilling](topic:build-assembly).
- **Dokumenter.** {{ui:Documents…}} i **Fil**-gruppen åpner en dialog over en prosjektmappe: sjekk ut og sjekk inn, revisjonsbokstaver, tilstander (under arbeid, til gjennomgang, utgitt, utrangert), historikk, hvor brukt og delelisten. Se [Dokumenter og revisjoner (hvelvet)](topic:documents-walkthrough).
- **Levende Rhino-kobling.** Ett skript, `cadcraft_link.py`, følger et Rhino- eller Grasshopper-dokument og sender bare det som er endret inn i PartCraft, der et importert trekk bygges om på den nye formen. Den går én vei og krever Studio. Se [Levende .3dm-kobling](topic:live-3dm-link).
- **Se hverandres markører.** I en delt økt vises hver persons markør med navnet og funksjonen de har valgt. Se [Arbeid live med andre](topic:work-live).
- **Verkstedgulvet.** Slå på tillegget Verkstedgulv i {{ui:Settings}} › {{ui:Add-ons}}. Etter at du har lagt ut et program i {{ui:Manufacture}}, kan fanen {{ui:Add to the factory job queue}} eller {{ui:Save as a job file}}. Den sender eller starter aldri en maskin.

### Analyse og deler

- **Solid FEM-tillegg.** Slå på {{ui:Solid FEM}} i {{ui:Settings}} › {{ui:Add-ons}} (det er av til du gjør det), så vises en fane {{ui:Solid FEM}} i høyre panel. {{ui:Mesh the part}}, velg fastholdte flater og laster i 3D-visningen, {{ui:Solve}}, og tegn forskyvning, von Mises-spenning eller en egenform med {{ui:Show on the model}}. Se [Solid FEM: en spenningssjekk](topic:solid-fem-check).
- **Bue i skisser, ti måter.** Pilen ved siden av {{ui:Arc}} i skisseverktøylinjen lister 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length og Continue. Se [Tegn en bue med ti metoder](topic:sketch-arc-methods).
- **Britiske stålprofiler.** Konstruksjonsdeler kan bruke 976 britiske profiler (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); skriv inn en størrelse som `305x165x40 UB`. Se [Konstruksjonsdeler](topic:structural-members).

### Utskrift

- **Utskriftstrinn.** Knappen {{ui:Print stage}} på verktøylinjen (tillegget 3D-utskrift, på som standard) legger delens legemer på en stiplet plattform: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, deretter {{ui:Send to 3D printer}} over USB, Klipper (Moonraker), OctoPrint eller PrusaLink. Ingenting sendes før du bekrefter, og delen din endres aldri. For en STL- eller 3MF-fil i stedet, se [Gjør en del klar for 3D-utskrift](topic:print-3d).
- **Harpiksutskrift.** Tillegg i {{ui:Settings}} › {{ui:Add-ons}}, alle av til du slår dem på: en harpiksslicer, en eksponeringstest, og filformatene Elegoo GOO, SL1, Chitubox CBDDLP/CTB og Anycubic. Slicing kjører i en egen tråd, så siden forblir responsiv.

## I alle appene

- Hvert svevetips er et Bootstrap-verktøytips.
- Startspråket har en lukkeknapp; det forblir lukket.
- En rad med faner i et panel som ikke får plass, ruller sideveis i stedet for å bli kuttet av.
- Nettleserfanen viser navnet på det åpne dokumentet før PartCraft | CadCraft.
- {{ui:Settings}} viser arbeidsområdets {{ui:Layout}} som en rullegardin med valg, og språkboksen lister alle språk byggversjonen har.
- Vekt og temperatur er enhetstyper i enhetsinnstillingene.

## Rettet

- Skisse-menyen for bue lister nå alle metodene.
- Tilleggsverktøylinjen og nettleserfanens tittel ble rettet 2026-11-09.

## Ærlige begrensninger

- Eksakt STEP ble lest tilbake i OpenCascade (gyldige volumlegemer, volumer lik dem som ble regnet ut for hånd). Den er ikke åpnet ennå i alle CAD- eller CAM-programmer, og en sammenstilling skrives ikke som eksakt STEP.
- Ingenting er skrevet ut på en ekte skriver. Slicing, G-kode og harpiksfiler ble lest tilbake av våre egne programmer eller en erstatningsskriver; ingen av harpiksformatene er lastet inn i en skriver, og skriverstørrelser og eksponeringer er startverdier.
- Solid FEM er lineær, isotrop og elastisk, ett materiale per del, uten kontakt, flyt eller knekking. Spenning ved fastholdte flater og skarpe hjørner avhenger av nettet. Det er et kontrollhjelpemiddel, ikke gjennomgått av en ingeniør.
- Tidsbruk for store sammenstillinger er målt på en server uten GPU; en fullt detaljert ramme med 20 000 deler tar fortsatt sekunder der.
- Avrundinger virker på par av flater; det finnes ingen generell hjørneblanding, og ingen avrunding mellom flater som ikke møtes.
- Rhino-koblingen er aldri kjørt inne i ekte Rhino eller Grasshopper. Dokumenter er prøvd av to programmer på én mappe, ikke av to personer på en nettverksmappe.
- Tilpasning av overflater til en ekte skanning har ikke fått sin håndsjekk. Språk utenom engelsk er maskinutkast.
- Windows-installasjonsprogrammene er ikke kodesignert, og macOS-diskbildet er ikke notarisert. Se [Feilsøking](topic:troubleshooting).

Tidligere endringer er i [Nytt i 0.7](topic:whats-new-0-7).

## Tidligere: 0.8 og 0.8.1

Dette er hva som endret seg i PartCraft 0.8 og 0.8.1, sammenlignet med 0.7. Simuleringen svarer mens du redigerer og forteller hva som går i stykker først, sammenstillinger får bevegelsesstudier, og nye arbeidsområder lager frie overflater og deler dimensjonert etter fysikk. 0.8.1 er en liten feilrettingsutgave.

### Nytt

**Simulering**

- **Oppdater mens jeg redigerer.** Kryss av {{ui:Update while I edit}} i Løs-blokken, så følger svarene redigeringene dine. Endre et mål, en last eller materialet, så vises et raskt svar, laget med elementer fire ganger større, med en gang; når du stopper i omtrent ett sekund, erstatter studiets egne forfinede svar det. Resultatene sier hvilket du ser på. På en stål-utkraging var det raske svaret innen 1 % på utbøyning og om lag 4 % på spenning av det forfinede. Se [Sjekk spenning og utbøyning](topic:simulation#update-while-you-edit-live).
- **Hva går i stykker først.** For en statisk eller knekkestudie skalerer {{ui:What breaks first?}} i **Bryt den**-blokken lastene til delen gir etter. Den lister, verst først, lastfaktoren til første flyt (med en rød markør der spenningen topper seg) og lastfaktoren til knekking. En faktor under 1 betyr at delen allerede gir etter som den er belastet, og Problemer viser en feil. Faktorene kommer fra en lineær studie, så de er like gode som den. Se [Sjekk spenning og utbøyning](topic:simulation#find-out-what-breaks-first-break-it).
- **Flyt og kontakt.** To studietyper til: en ikke-lineær der materialet følger sin rette linje til flytespenningen og deretter en flatere helning, med plastisk tøyning tegnet; og en kontaktstudie der separate deler presser på hverandre (friksjonsfritt) eller sitter fast (bundet). Et laststeg som ikke kan stabilisere seg, eller deler som synker for langt inn i hverandre, vises i Problemer-panelet. Friksjon, store glidninger, store rotasjoner, store utbøyninger og utmatting løses ikke. Se [Sjekk spenning og utbøyning](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Filer for CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} lagrer studien for CalculiX, et eget program du installerer og kjører selv; {{ui:Export}} › {{ui:CalculiX results (.frd)}} leser resultatfilen tilbake på det samme nettet. PartCraft starter aldri det programmet, og det sier fra hvis delen er endret siden filen ble lagret.

**Sammenstillinger**

- **Bevegelsesstudier.** {{ui:Assembly}} › {{ui:Motion}} driver verdien til ett ledd over en tid du oppgir (konstant fart, jevnet, sinus, eller ut og tilbake), plasserer sammenstillingen i hvert steg med sine ledd og lukkede løkker, og rapporterer hva som kolliderer og hvor nær deler kommer. {{ui:Add a point}} tegner et punkts posisjon, fart og akselerasjon, leddets verdi og klaringen mot tid; {{ui:Save CSV}} og {{ui:Save plot}} skriver dem ut. Etter {{ui:Run}} flytter Gå gjennom kjøringen-linjen sammenstillingen til et hvilket som helst steg. Studiets innstillinger lagres i sammenstillingsfilen. Fart og akselerasjon kommer fra de registrerte posisjonene, så bruk flere steg hvis en skarp topp leses lavt. Se [Sjekk en sammenstilling for kollisjoner og bevegelse](topic:check-assembly#a-motion-study).

**Overflater og deler fra fysikk**

- **Et Overflater-arbeidsområde.** Velg {{ui:Surfaces}} i boksen Arbeidsområde for NURBS-kurver og -flater ved siden av delen: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} og {{ui:Zebra}}, med kontinuitet (G0, G1 eller G2) målt på de eksakte flatene, og en kant som er dårligere enn du ba om, listet i Problemer med en Match-løsning. {{ui:Fair}} måler skrogkurver for vendepunkter og krumningshopp, og bygger de ufine om innenfor toleransen din. Overflater lagres i delfilen og endrer ikke delens funksjoner. Se [Frie overflater (NURBS)](topic:nurbs-surfaces).
- **Engineer-arbeidsområdet.** Velg {{ui:Engineer}} i arbeidsområdeveksleren, velg en generator og klikk {{ui:New}}: et skript dimensjonerer en del ut fra hva den må gjøre (varme som skal flyttes, strømmer, trykk, materiale, utskriftsprosess) med klassiske formler, bygger den, og gir deretter tilbake tallene den brukte med deres kilder, produksjonssjekkene sine og filer for analyseverktøy. De samme inndataene gir samme del på hvilken som helst datamaskin. Generatoren beholdes i delen, og å åpne en del kjører aldri et skript. Se [Deler fra fysikk: generatorer](topic:engineer-generators) og [Skriv en generator](topic:write-a-generator).

**Skisser, tegninger og lage**

- **En skisse fra et foto.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} sporer et bilde av en flat del på en enkel bakgrunn (kontur og hull) eller en penntegning til linjer, buer og sirkler. Du oppgir én lengde, sjekker forhåndsvisningen og lager skissen. Se [Grunnleggende om skisser](topic:sketch-basics#a-sketch-from-a-photo).
- **Skalering og deling for utskrift.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} skalerer per akse uten å endre delen, for eksempel med en krympetillegg. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} deler en del som er for stor for plattformen din i nummererte deler som settes sammen med pinner, nøkler, svalehaler, dymlehull eller magnetlommer. Se [Skriv ut i 3D](topic:print-3d).
- **Nestede plater til G-kode.** {{ui:Export}} › {{ui:Nested sheets to G-code}} leser en nestet DXF og lager ett program per plate gjennom den posten du velger: hull og utsparinger først, deretter konturene. Den planlegger ikke innkjøringer, skjærerekkefølge eller felles kanter. Se [Nest flate deler på plater](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Tegninger som gjør mer selv.** {{ui:Sheet}} › {{ui:Automatic}} velger det minste A-formatarket som holder visningene i den største standardmålestokken opp til 1:1. {{ui:Dimension the holes}} setter et senterkryss på hvert hull, én merking per størrelse og posisjonene fra visningens nedre venstre hjørne. Se [Lag en tegning](topic:drawing-pdf).

**I alle appene**

- **Språk.** Appene finnes på 54 språk. De utenom engelsk er maskinutkast til en morsmålstalende har lest dem.
- **Verktøylinjerader.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} velger Bryt (som før), 2 rader eller 1 rad; en linje som ikke får plass, ruller sideveis. PartCraft sitt Funksjonsbånd viser det mest brukte verktøyet stort og gjemmer varianter bak en delt knapp.
- **Koble til KI-assistenten din.** Studio er knutepunktet for å koble en assistent du selv har til alle åtte appene, med lese-, forslags- eller redigeringstilgang per app. En tilkoblet assistent kan dimensjonere en del ut fra en setning, for eksempel et vinkeljern for en last, vise arbeidet og alle sjekker, og bygge den; den sier hva den ikke sjekket (spenningskonsentrasjon, utmatting, kryp i plast). Se [Bruk PartCraft med en KI-assistent](topic:use-with-ai-assistants).

### Rettet i 0.8.1

- **Frysing av fullskjermmarkøren.** Svevevalget er nå begrenset i hastighet. Årsaken er vår beste lesning og er ikke bekreftet med personen som rapporterte den.
- **Språk under kjøring.** Studio og de pakkede utgavene kan bytte språk mens de kjører; før var de bare på engelsk. Dette er ikke testet på alle plattformer ennå: si fra hvis språket ikke endrer seg.

### Ikke i denne versjonen ennå

- Koble til KI-assistenten din er ikke ferdig: ett-klikks-kobling inne i Studio, den hostede koblingen for nettleser-KI, din egen API-nøkkel inne i Studio og den publiserte MCP-pakken er ikke lovet. Studio har ingen egen KI.
- Studio er ikke kodesignert: Windows kan advare, og macOS ber om høyreklikk og Åpne. Se [Feilsøking](topic:troubleshooting).
- Toleransekjeder er fortsatt én retning: se [Toleransekjeder](topic:tolerance-stackup).
- Resten er listet i [Hva som ikke er bygget ennå](topic:not-built-yet).

Tidligere endringer er i [Nytt i 0.7](topic:whats-new-0-7).
