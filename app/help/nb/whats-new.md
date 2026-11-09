---
title: Hva er nytt i 0.8 og 0.8.1
summary: PartCraft 0.8 legger til live-analyse mens du redigerer, en sjekk av hva som brytes først, flyt- og kontaktstudier med deck-filer for en ekstern løser, bevegelsesstudier for sammenstillinger, et Overflater-arbeidsområde for frie flater, deler dimensjonert ut fra fysikk i Ingeniør-arbeidsområdet, skisse fra foto, utskriftseksport, nestede ark til G-kode og tegninger som måltilsetter hullene sine. 0.8.1 retter en markørfrysing i fullskjerm.
keywords: hva er nytt, what's new, versjonsmerknader, endringslogg, endringer, 0.8, 0.8.1, versjon, nye funksjoner, live-analyse, oppdater mens du redigerer, bryt den, hva brytes først, lastfaktor, ikke-lineær, flyt, plastisk tøyning, kontakt, calculix, bevegelsesstudie, klaring, overflater, nurbs, glatt ut, skrog, zebra, ingeniør, generator, generert legeme, skisse fra et foto, skaler for utskrift, del opp for utskrift, krymping, nestede ark, g-code, tegning, måltilsett hull, assistent, mcp, språk, verktøylinjerader
from: 62e4dce2
---

Dette er endringene i PartCraft 0.8 og 0.8.1, sammenlignet med 0.7. Simuleringen svarer mens du redigerer og forteller deg hva som brytes først, sammenstillinger får bevegelsesstudier, og nye arbeidsområder lager frie flater og deler dimensjonert ut fra fysikk. 0.8.1 er en liten feilrettingsutgave.

## Nytt

### Simulering

- **Oppdater mens jeg redigerer.** Kryss av {{ui:Oppdater mens jeg redigerer}} i Løs-blokken, så følger svarene redigeringene dine. Endrer du en dimensjon, en last eller materialet, vises et raskt svar, laget med elementer fire ganger større, med en gang; når du stopper i omtrent ett sekund, erstatter studiets egne forfinede svar det. Resultatene sier hvilket av dem du ser på. På en stålkonsoll var det raske svaret innenfor 1 % på utbøyning og omtrent 4 % på spenning i forhold til det forfinede. Se [Sjekk spenning og utbøyning](topic:simulation#update-while-you-edit-live).
- **Hva brytes først.** For en statisk studie eller knekkingsstudie skalerer {{ui:Hva går i stykker først?}} i **Bryt den**-blokken lastene til delen gir etter. Den lister, verste først, lastfaktoren til første flyt (med en rød markør der spenningen topper seg) og lastfaktoren til knekking. En faktor under 1 betyr at delen allerede gir etter slik den er lastet, og Problemer viser en feil. Faktorene kommer fra en lineær studie, så de er bare så gode som den. Se [Sjekk spenning og utbøyning](topic:simulation#find-out-what-breaks-first-break-it).
- **Flyt og kontakt.** To studietyper til: en ikke-lineær der materialet følger den rette linjen sin opp til flytespenningen og deretter en slakere helning, med plastisk tøyning plottet, og en kontaktstudie der separate deler presser mot hverandre (uten friksjon) eller sitter fast (bundet). Et laststeg som ikke kan stabilisere seg, eller deler som synker for langt inn i hverandre, vises i Problemer-panelet. Friksjon, store glidninger, store rotasjoner, store utbøyninger og utmattelse løses ikke. Se [Sjekk spenning og utbøyning](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Deck for CalculiX.** {{ui:Eksporter}} › {{ui:CalculiX-deck (.inp)}} lagrer studien for CalculiX, et eget program du installerer og kjører selv; {{ui:Eksporter}} › {{ui:CalculiX-resultater (.frd)}} leser resultatfilen tilbake inn på samme mesh. PartCraft starter aldri det programmet, og sier fra hvis delen er endret siden decket ble lagret.

### Sammenstillinger

- **Bevegelsesstudier.** {{ui:Sammenstilling}} › {{ui:Bevegelse}} driver ett ledds verdi over en tid du angir (konstant hastighet, mykt, sinus, eller ut og tilbake), plasserer sammenstillingen på hvert steg med leddene og lukkede løkker, og rapporterer hva som kolliderer og hvor nær delene kommer hverandre. {{ui:Legg til et punkt}} tegner et punkts posisjon, hastighet og akselerasjon, leddets verdi og klaringen mot tid; {{ui:Lagre CSV}} og {{ui:Lagre plott}} skriver dem ut. Etter {{ui:Kjør}} flytter stegfeltet i kjørelinjen sammenstillingen til et hvilket som helst steg. Studiets innstillinger lagres i sammenstillingsfilen. Hastighet og akselerasjon kommer fra de registrerte posisjonene, så bruk flere steg hvis en skarp topp blir lav. Se [Sjekk en sammenstilling for kollisjoner og bevegelse](topic:check-assembly#a-motion-study).

### Overflater og deler fra fysikk

- **Et Overflater-arbeidsområde.** Velg {{ui:Overflater}} i {{ui:Arbeidsområde}}-boksen for NURBS-kurver og -flater ved siden av delen: {{ui:Kurve}}, {{ui:Loft}}, {{ui:Sveip}}, {{ui:Tilpass}} og {{ui:Zebra}}, med kontinuitet (G0, G1 eller G2) målt på de eksakte flatene, og en kant som er dårligere enn du ba om, listet i Problemer med en Tilpass-løsning. {{ui:Glatt ut}} måler skrogslinjer for vendepunkter og krumningshopp og bygger om de ikke-glatte innenfor toleransen din. Flater lagres i delfilen og endrer ikke delens funksjoner. Se [Frie flater (NURBS)](topic:nurbs-surfaces).
- **Ingeniør-arbeidsområdet.** Velg {{ui:Ingeniør}} i arbeidsområdevelgeren, velg en generator og klikk {{ui:Ny}}: et skript dimensjonerer en del ut fra hva den må gjøre (varme for å flytte, strømmer, trykk, materiale, utskriftsprosess) med lærebokformler og bygger den, og gir deretter tilbake tallene den brukte med kildene deres, produksjonskontrollene og filer for analyseverktøy. De samme inndataene gir samme del på hvilken som helst datamaskin. Generatoren beholdes i delen, og å åpne en del kjører aldri et skript. Se [Deler fra fysikk: generatorer](topic:engineer-generators) og [Skriv en generator](topic:write-a-generator).

### Skisser, tegninger og fremstilling

- **En skisse fra et foto.** {{ui:Funksjoner}} › {{ui:Mer}} › {{ui:Skisse fra et foto…}} sporer et bilde av en flat del på en ren bakgrunn (ytre kontur og hull) eller en penntegning til linjer, buer og sirkler. Du oppgir én lengde, kontrollerer forhåndsvisningen og lager skissen. Se [Grunnleggende skissering](topic:sketch-basics#a-sketch-from-a-photo).
- **Skalering og oppdeling for utskrift.** {{ui:Eksporter}} › {{ui:Skaler for utskrift (STL eller 3MF)…}} skalerer per akse uten å endre delen, for eksempel med et krympetillegg. {{ui:Eksporter}} › {{ui:Del opp for utskrift (en zip med deler)…}} deler en del som er for stor for sengen din i nummererte deler som settes sammen med pinner, nøkler, svalehaler, dyvelhull eller magnetlommer. Se [Skriv ut i 3D](topic:print-3d).
- **Nestede ark til G-kode.** {{ui:Eksporter}} › {{ui:Nestede ark til G-kode}} leser en nestet DXF og lager ett program per ark gjennom postprosessoren du velger: hull og utsparinger først, deretter ytterkonturene. Den planlegger ikke innstikk, skjærerekkefølgen eller delte kanter. Se [Nest flate deler på ark](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Tegninger som gjør mer selv.** {{ui:Ark}} › {{ui:Automatisk}} velger det minste A-formatarket som rommer visningene, i den største standardmålestokken opp til 1:1. {{ui:Måltilsett hullene}} setter et senterkryss på hvert hull, én merknad per størrelse og posisjonene fra visningens nedre venstre hjørne. Se [Lag en tegning](topic:drawing-pdf).

### I alle apper

- **Språk.** Appene finnes på 54 språk. De utover engelsk er maskinelle utkast som til en morsmålsbruker har lest dem.
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} velger Bryt (som før), 2 rader eller 1 rad; en linje som ikke får plass, ruller sideveis. Funksjonsbåndet i PartCraft viser det mest brukte verktøyet stort og gjemmer varianter bak en delt knapp.
- **Koble til KI-en din.** Studio er knutepunktet for å koble en KI-assistent du selv har til alle åtte appene, med lese-, forslags- eller redigeringstillatelse per app. En tilkoblet assistent kan dimensjonere en del ut fra en setning, for eksempel et brakett for en last, vise arbeidet og alle kontrollene, og bygge den; den rapporterer hva den ikke sjekket (spenningskonsentrasjon, utmattelse, krypning i plast). Se [Bruk PartCraft med en KI-assistent](topic:use-with-ai-assistants).

## Fikset i 0.8.1

- **Markørfrysing i fullskjerm.** Svevevalget er nå begrenset i hastighet. Årsaken er vår beste tolkning og er ikke bekreftet med personen som rapporterte den.
- **Språk under kjøring.** Studio og de pakkede utgavene kan bytte språk mens de kjører; før var de bare engelske. Dette er ikke testet på alle plattformer ennå: si fra hvis språket ikke endrer seg.

## Ikke i denne versjonen ennå

- Koble til KI-en din er ikke ferdig: tilkobling med ett klikk i Studio, den vertsbaserte koblingen for KI i nettleser, din egen API-nøkkel i Studio og den publiserte MCP-pakken er ikke lovet. Studio har ingen egen KI.
- Studio er ikke kodesignert: Windows kan advare, og macOS ber om høyreklikk og deretter Åpne. Se [Feilsøking](topic:troubleshooting).
- Oppstillinger er fortsatt enveis: se [Toleranseoppstillinger](topic:tolerance-stackup).
- Resten står i [Hva som ikke er bygget ennå](topic:not-built-yet).

Tidligere endringer står i [Hva er nytt i 0.7](topic:whats-new-0-7).
