---
title: Nytt i 0.9
summary: PartCraft 0.9 legger til avrundinger mellom flater og fortykning til volumlegemer, sammenstillinger med tusenvis av deler, et dokumenthvelv med revisjoner, et Solid FEM-tillegg for spenning, ti buemetoder, britiske stålstørrelser, et utskriftstrinn og tillegg for harpiksutskrift.
keywords: nytt i 0.9, avrunding mellom flater, rullende kule, avrunding av flere kanter, fortykk, volumlegeme fra flater, step-skall, iges-volumlegeme, skanningsavrundinger, stor sammenstilling, lettvektsvisning, 20000 deler, dokumenter, hvelv, sjekk ut, revisjon, utgivelse, hvor brukt, rhino-kobling, grasshopper, 3dm, markører, fabrikkgulv, jobbkø, solid fem, elementmetode, von mises, egenfrekvens, bueteknikker, 3-punkts bue, britiske stålprofiler, blå bok, utskriftstrinn, harpiks, goo, ctb, legg flatt, nytt i 0.8, 0.8.1, versjon, nye funksjoner, live-analyse, oppdater mens jeg redigerer, bryt den, hva bryter først, lastfaktor, ikke-lineær, flytegrense, plastisk tøyning, kontakt, calculix, bevegelsesstudie, klaring, flater, nurbs, glatt ut, skrog, zebra, ingeniør, generator, generert legeme, skisse fra et foto, skalering for utskrift, del for utskrift, krymping, nestede ark, g-kode, tegning, mål på hull, assistent, mcp, språk, verktøylinjerader
from: 96d9fbfa
---

Dette er hva som endret seg i PartCraft 0.9, sammenlignet med 0.8.1. Frie flater lukkes nå til volumlegemer, sammenstillinger med tusenvis av deler forblir brukbare, et dokumenthvelv beholder revisjoner, og et Solid FEM-tillegg sjekker spenning i en del. Hvert punkt sier hvor du finner det.

## Nytt i 0.9.1

- **Eksakt STEP-eksport.** {{ui:Eksporter}} › {{ui:STEP AP242 (eksakt volumlegeme)}} og {{ui:STEP AP214 (eksakt volumlegeme)}} fungerer nå. Hull, opphøyninger, avrundinger, kjegler, kuler og torus skrives på sine ekte flater, med ekte sirkler som kanter, slik at et annet CAD- eller CAM-program kan se et hull som et hull. Splinesider, modellerte gjenger og importerte nett forblir flate fasetter i samme volumlegeme. Se [Eksport for utskrift, STEP og DXF](topic:export-files#for-other-cad-programs-step).
- **STEP inn, eksakt STEP ut.** En STEP-fil du åpner, beholder sine egne plane flater, sylindere, kjegler, kuler og torus, så {{ui:Eksporter}} › {{ui:STEP AP242 (eksakt volumlegeme)}} skriver dem tilbake som ekte flater i stedet for fasetter: en leverandørs bjelke med boltehull går ut med de samme flatene den kom inn med, pluss det du har kuttet inn i den. Spline-, sveipede og roterte flater i filen forblir fasetter, og det samme gjør legemer fra STL-, OBJ- og 3MF-filer. Åpne STEP-filen på nytt for en del som ble lagret tidligere. Se [Åpne en STEP-fil og bygg videre på den](topic:import-step).
- **Ekte sirkler i flate-DXF.** {{ui:Eksporter}} › {{ui:DXF av skissen eller den plane flaten}} med en plan flate valgt skriver nå runde hull som sirkler, med hullets eget senter og radius, for et lasers, plasmas eller vannskjærebords behov. Andre runde kanter er fortsatt fasetter.
- **Eksakt STEP for verkstedet.** I {{ui:Produksjon}} skriver {{ui:Eksakt STEP (arbeidskoordinater)}} delen med origo i oppsettets arbeidsorigo og Z langs verktøyaksen, altså koordinatene G-koden bruker. Se [Lag verktøybaner og G-kode](topic:manufacture#exact-step-for-the-shop).

## Nytt

### Flater og volumlegemer

- **{{ui:Avrunding mellom flater}}.** Velg {{ui:Overflater}} i {{ui:Arbeidsområde}}-boksen, deretter {{ui:Avrunding mellom flater}}. Velg de to flatene til ett volumlegeme, og skriv inn radiusen (og {{ui:Radius i enden (mm, 0 = lik)}} for en radius som endrer seg langs kanten). Resultatlinjen sier hvor langt avrundingen er fra den ideelle rullekulen, og en radius som ikke passer, avvises med flaten navngitt. {{ui:Avrunding av flere kanter}} runder mange kanter i ett steg. Kryss av {{ui:Hjørner (kuleflate der tre møtes)}} for et kulehjørne der tre avrundede kanter av plane flater møtes. Se [Frie flater (NURBS)](topic:nurbs-surfaces).
- **{{ui:Gi tykkelse til volumlegeme}}.** Samme arbeidsområde gir en overflate en tykkelse; {{ui:Andre siden}} vokser den den andre veien. En fold eller et selvkryss avvises, med overflaten og stedet navngitt.
- **Volumlegemer fra flater.** Trimmede flater kan slås sammen med union, trekk fra og snitt, og bakes inn i delen som ett angrestrinn. STEP skriver et volumlegeme som ett lukket skall og IGES som ett volumlegeme; begge leses tilbake som et volumlegeme. Hvis flatene ikke parer seg kant for kant, får filen separate flater, og statuslinjen sier det. Volumlegemer kan også lages i nodeeditoren; se [Nodeeditor](topic:nodes).
- **Avrundinger i skanninger.** Når du tilpasser flater til en skanning, letes det også etter kantavrundinger (torus) og avrundinger med variabel radius langs en nokså rett kant. De listes med radius. Det er bare testet på konstruerte skanninger.

### Sammenstillinger, dokumenter og koblinger

- **Store sammenstillinger.** Deler som er kopier, deler ett nett, og {{ui:Visninger}} › {{ui:Lettvektsvisning}} tegner bokser slik at visningen fortsatt beveger seg. Den slås på av seg selv for svært store sammenstillinger; plukking og ledd bruker fortsatt de ekte delene. Delstreet viser sine første rader og en knapp {{ui:Vis 700 til}} for resten. Sammenstillingsfiler kan inneholde opptil 50 000 forekomster og 100 000 ledd. Se [Bygg en sammenstilling](topic:build-assembly).
- **Dokumenter.** {{ui:Dokumenter…}} i gruppen **Fil** åpner en dialogboks over en prosjektmappe: sjekk ut og sjekk inn, revisjonsbokstaver, tilstander (under arbeid, til gjennomgang, utgitt, utgått), historikk, hvor brukt og materialliste. Se [Dokumenter og revisjoner (hvelvet)](topic:documents-walkthrough).
- **Levende Rhino-kobling.** Ett skript, `cadcraft_link.py`, følger et Rhino- eller Grasshopper-dokument og sender bare det som endret seg, inn i PartCraft. Der bygges en importert funksjon på nytt med den nye formen. Den går én vei og krever Studio. Se [Levende .3dm-kobling](topic:live-3dm-link).
- **Se hverandres markører.** I en delt økt vises hver persons markør med navnet og funksjonen de har valgt. Se [Arbeid live med andre](topic:work-live).
- **Fabrikkgulvet.** Slå på tillegget Fabrikkgulv i {{ui:Innstillinger}} › {{ui:Tillegg}}. Etter at du har lagt ut et program i {{ui:Produksjon}}, kan fanen {{ui:Legg til i fabrikkens jobbkø}} eller {{ui:Lagre som jobbfil}}. Den sender eller starter aldri en maskin.

### Analyse og deler

- **Solid FEM-tillegg.** Slå på {{ui:Solid FEM}} i {{ui:Innstillinger}} › {{ui:Tillegg}} (det er av til du gjør det), så vises en fane {{ui:Solid FEM}} i høyre panel. {{ui:Mesh delen}}, velg fastholdte flater og laster i 3D-visningen, {{ui:Løs}}, og tegn forskyvning, von Mises-spenning eller en egenform med {{ui:Vis på modellen}}. Se [Solid FEM: en spenningssjekk](topic:solid-fem-check).
- **Bue i skisser, ti måter.** Pilen ved {{ui:Bue}} i skissverktøylinjen lister: 3-punkt, Start senter slutt, Start senter vinkel, Start senter lengde, Start slutt vinkel, Start slutt retning, Start slutt radius, Senter start slutt, Senter start vinkel, Senter start lengde og Fortsett. Se [Tegn en bue på ti måter](topic:sketch-arc-methods).
- **Britiske stålstørrelser.** {{ui:Konstruksjonsdel}} kan bruke 976 britiske profiler (UB, UC, PFC, EA, UEA, CHS, SHS, RHS). Skriv inn en størrelse som `305x165x40 UB`. Se [Konstruksjonsdeler](topic:structural-members).

### Utskrift

- **Utskriftstrinn.** Knappen {{ui:Utskriftstrinn}} i verktøylinjen (tillegget 3D-utskrift, på som standard) setter delens legemer på et stiplet bed: {{ui:Legg flatt}}, {{ui:Snu 90°}}, {{ui:Ordne på bedet}}, {{ui:Tilpass alle på bedet}}, {{ui:Forhåndsvis lag}}, deretter {{ui:Send til 3D-skriver}} over USB, Klipper (Moonraker), OctoPrint eller PrusaLink. Ingenting sendes før du bekrefter, og delen din endres aldri. For en STL- eller 3MF-fil i stedet, se [Gjør en del klar for 3D-utskrift](topic:print-3d).
- **Harpiksutskrift.** Tillegg i {{ui:Innstillinger}} › {{ui:Tillegg}}, alle av til du slår dem på: en harpiksskiver, en eksponeringstest, og filformatene Elegoo GOO, SL1, Chitubox CBDDLP/CTB og Anycubic. Skivingen kjører på en egen tråd, så siden forblir responsiv.

### I alle apper

- Hvert pekertips er et Bootstrap-verktøytips.
- Startrådet har en lukkeknapp; det forblir lukket.
- En rad med faner i et panel som ikke får plass, ruller sidelengs i stedet for å bli kuttet av.
- Nettleserfanen viser navnet på det åpne dokumentet før PartCraft | CadCraft.
- {{ui:Innstillinger}} viser arbeidsområdets {{ui:Layout}} som en rullegardin med valg, og språkboksen lister alle språkene byggingen har.
- Vekt og Temperatur er enhetstyper i enhetsinnstillingene.

## Rettet

- Menyen Bue i skissen lister nå hver metode.
- Verktøylinjen for tillegg og tittelen på nettleserfanen ble rettet 2026-11-09.

## Ærlige begrensninger

- Eksakt STEP ble lest tilbake i OpenCascade (gyldige volumlegemer, volumer lik dem regnet ut for hånd). Den er ikke åpnet ennå i hvert CAD- eller CAM-program, og en sammenstilling skrives ikke som eksakt STEP.
- Ingenting er skrevet ut på en ekte skriver. Skiving, G-kode og harpiksfiler ble lest tilbake av våre egne programmer eller en stand-in-skriver. Ingen av harpiksformatene er lastet inn i en skriver, og skriverstørrelser og eksponeringer er utgangspunkter.
- Solid FEM er lineær, isotrop og elastisk, med ett materiale per del, og uten kontakt, flyt eller knekking. Spenning ved fastholdte flater og skarpe hjørner avhenger av nettet. Det er et kontrollverktøy, ikke gjennomgått av en ingeniør.
- Tidene for store sammenstillinger kommer fra en server uten GPU; en fullstendig ramme med 20 000 deler tar fortsatt sekunder der.
- Avrundinger fungerer på par av flater. Det finnes ingen generell hjørneblanding, og ingen avrunding mellom flater som ikke møtes.
- Rhino-koblingen har aldri kjørt inne i ekte Rhino eller Grasshopper. Dokumenter er prøvd av to programmer på én mappe, ikke av to personer på en nettverksdisk.
- Tilpasning av flater til en ekte skanning har ennå ikke fått en manuell kontroll. Andre språk enn engelsk er maskinutkast.
- Windows-installasjonsprogrammene er ikke kodesignert, og macOS-diskbildet er ikke notarisert. Se [Feilsøking](topic:troubleshooting).

Tidligere endringer står i [Nytt i 0.7](topic:whats-new-0-7).

## Tidligere: 0.8 og 0.8.1

Dette er hva som endret seg i PartCraft 0.8 og 0.8.1, sammenlignet med 0.7. Simuleringen svarer mens du redigerer og forteller deg hva som bryter først. Sammenstillinger får bevegelsesstudier, og nye arbeidsområder lager frie flater og deler dimensjonert ut fra fysikk. 0.8.1 er en liten feilrettingsutgivelse.

### Nytt

**Simulering**

- **Oppdater mens jeg redigerer.** Kryss av {{ui:Oppdater mens jeg redigerer}} i Løs-blokken, så følger svarene redigeringene dine. Endre et mål, en last eller materialet, så dukker et raskt svar opp med en gang, laget med elementer fire ganger større. Når du stopper i omtrent et sekund, erstatter studiets egne forbedrede svar det. Resultatene sier hvilket du ser på. På en stålutkrager var det raske svaret innenfor 1 % på nedbøyning og omtrent 4 % på spenning, i forhold til det forbedrede. Se [Sjekk spenning og nedbøyning](topic:simulation#update-while-you-edit-live).
- **Hva bryter først.** For en statisk eller knekkingsstudie skalerer {{ui:Hva går i stykker først?}} i **Bryt den**-blokken lastene til delen gir etter. Den lister, verst først, lastfaktoren til første flyt (med en rød markør der spenningen topper seg) og lastfaktoren til knekking. En faktor under 1 betyr at delen allerede gir etter slik den er lastet, og Problemer viser en feil. Faktorene kommer fra en lineær studie, så de er bare så gode som den. Se [Sjekk spenning og nedbøyning](topic:simulation#find-out-what-breaks-first-break-it).
- **Flyt og kontakt.** To flere studietyper: en ikke-lineær der materialet følger sin rette linje til flytespenningen og deretter en flatere helning, med plastisk tøyning tegnet, og en kontaktstudie der separate deler presser på hverandre (friksjonsfritt) eller sitter fast (bundet). Et lasttrinn som ikke kan stabilisere seg, eller deler som synker for langt inn i hverandre, vises i Problemer-panelet. Friksjon, store glidninger, store rotasjoner, store utbøyninger og utmatting er ikke løst. Se [Sjekk spenning og nedbøyning](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX-inndatafiler.** {{ui:Eksporter}} › {{ui:CalculiX-inndatafil (.inp)}} lagrer studien for CalculiX, et eget program du installerer og kjører selv. {{ui:Eksporter}} › {{ui:CalculiX-resultater (.frd)}} leser resultatfilen tilbake på samme nett. PartCraft starter aldri det programmet, og sier fra hvis delen har endret seg siden inndatafilen ble lagret.

**Sammenstillinger**

- **Bevegelsesstudier.** {{ui:Sammenstilling}} › {{ui:Bevegelse}} driver ett leds verdi over en tid du oppgir (konstant fart, jevnt, sinus, eller ut og tilbake). Den plasserer sammenstillingen på hvert steg med leddene og lukkede sløyfer, og rapporterer hva som kolliderer og hvor nær deler kommer. {{ui:Legg til et punkt}} tegner et punkts posisjon, fart og akselerasjon, leddets verdi og klaringen mot tid. {{ui:Lagre CSV}} og {{ui:Lagre plott}} skriver dem ut. Etter {{ui:Kjør}} flytter Steg gjennom kjørelinjen sammenstillingen til et hvilket som helst steg. Studiets innstillinger lagres i sammenstillingsfilen. Fart og akselerasjon kommer fra de registrerte posisjonene, så bruk flere steg hvis en skarp topp leses lavt. Se [Sjekk en sammenstilling for kollisjoner og bevegelse](topic:check-assembly#a-motion-study).

**Flater og deler fra fysikk**

- **Et arbeidsområde for flater.** Velg {{ui:Overflater}} i {{ui:Arbeidsområde}}-boksen for NURBS-kurver og -flater ved siden av delen: {{ui:Kurve}}, {{ui:Loft}}, {{ui:Sveip}}, {{ui:Tilpass}} og {{ui:Zebra}}, med kontinuitet (G0, G1 eller G2) målt på de eksakte flatene. En kant som er dårligere enn du ba om, listes i Problemer med en Tilpass-fiks. {{ui:Glatt ut}} måler skrogslinjer for vendepunkter og krumningssprang, og bygger om de ikke-glatte innenfor toleransen din. Flater lagres i delfilen og endrer ikke delens funksjoner. Se [Frie flater (NURBS)](topic:nurbs-surfaces).
- **Ingeniør-arbeidsområdet.** Velg {{ui:Ingeniør}} i bryteren for arbeidsområder, velg en generator og klikk {{ui:Ny}}. Et skript dimensjonerer en del etter hva den må gjøre (varme som skal flyttes, strømninger, trykk, materiale, utskriftsprosess) med lærebokformler, og bygger den. Deretter gir det tilbake tallene det brukte, med kildene deres, sine produksjonskontroller og filer for analyseverktøy. De samme inndataene gir samme del på hvilken som helst datamaskin. Generatoren beholdes i delen, og å åpne en del kjører aldri et skript. Se [Deler fra fysikk: generatorer](topic:engineer-generators) og [Skriv en generator](topic:write-a-generator).

**Skisser, tegninger og produksjon**

- **En skisse fra et foto.** {{ui:Funksjoner}} › {{ui:Mer}} › {{ui:Skisse fra et foto…}} sporer et bilde av en flat del på en ren bakgrunn (kontur og hull) eller en penntegning, til linjer, buer og sirkler. Du gir én lengde, sjekker forhåndsvisningen og lager skissen. Se [Grunnleggende om skisser](topic:sketch-basics#a-sketch-from-a-photo).
- **Skalering og deling for utskrift.** {{ui:Eksporter}} › {{ui:Skaler for utskrift (STL eller 3MF)…}} skalerer per akse uten å endre delen, for eksempel med en krympetillegg. {{ui:Eksporter}} › {{ui:Del opp for utskrift (en zip med deler)…}} kutter en del som er for stor for bedet ditt, i nummererte deler som settes sammen med tapper, nøkler, svalehaler, dybelhull eller magnetlommer. Se [Skriv ut i 3D](topic:print-3d).
- **Nestede ark til G-kode.** {{ui:Eksporter}} › {{ui:Nestede ark til G-kode}} leser en nestet DXF og lager ett program per ark gjennom posten du velger: hull og utklipp først, deretter konturene. Den planlegger ikke innkjøringer, skjærerekkefølgen eller delte kanter. Se [Nest flate deler på ark](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Tegninger som gjør mer selv.** {{ui:Ark}} › {{ui:Automatisk}} velger det minste A-formatarket som holder visningene i den største standardskalaen opp til 1:1. {{ui:Måltilsett hullene}} setter et senter­merke på hvert hull, én merknad per størrelse og posisjonene fra visningens nedre venstre hjørne. Se [Lag en tegning](topic:drawing-pdf).

**I alle apper**

- **Språk.** Appene kommer på 54 språk. De som er utover engelsk, er maskinutkast til en morsmålstalende har lest dem.
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} velger Bryt (som før), 2 rader eller 1 rad. En linje som ikke får plass, ruller sidelengs. PartCraft sitt funksjonsbånd viser det mest brukte verktøyet stort og gjemmer varianter bak en delt knapp.
- **Koble til din KI.** Studio er navet for å koble en assistent du eier til alle åtte appene, med lese-, forslags- eller redigeringstillatelse per app. En tilkoblet assistent kan dimensjonere en del fra en setning, for eksempel et braketter for en last, vise sitt arbeid og alle kontroller, og bygge den. Den rapporterer hva den ikke sjekket (spenningskonsentrasjon, utmatting, krypning i plast). Se [Bruk PartCraft med en KI-assistent](topic:use-with-ai-assistants).

### Rettet i 0.8.1

- **Fullskjerm-fryser markøren.** Pekevalget er nå begrenset i hastighet. Årsaken er vår beste lesning og er ikke bekreftet med personen som rapporterte den.
- **Språk under kjøring.** Studio og de pakkede utgavene kan bytte språk mens de kjører; før var de bare på engelsk. Dette er ikke testet på alle plattformer ennå. Si fra hvis språket ikke endres.

### Ikke i denne versjonen ennå

- Koble til din KI er ikke ferdig: ett-klikk-tilkobling inne i Studio, den hostede koblingen for nettleser-KI, din egen API-nøkkel inne i Studio og den publiserte MCP-pakken er ikke lovet. Studio har ingen egen KI.
- Studio er ikke kodesignert: Windows kan advare, og macOS ber om høyreklikk og deretter Åpne. Se [Feilsøking](topic:troubleshooting).
- Toleransestakker går fortsatt bare i én retning: se [Toleransestakker](topic:tolerance-stackup).
- Resten står i [Hva som ikke er bygget ennå](topic:not-built-yet).

Tidligere endringer står i [Nytt i 0.7](topic:whats-new-0-7).
