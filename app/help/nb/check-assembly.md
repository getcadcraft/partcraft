---
title: Kontroller en sammenstilling for kollisjoner og bevegelse
summary: Finn deler som overlapper med Kollisjon, dra en hvilken som helst verdi på et ledd for å se bevegelsen, og sveip et ledd gjennom området for å finne hvor delene kolliderer.
keywords: interferens, interferensdeteksjon, kollisjon, kollisjonskontroll, overlapp, gjengepassning, gjengedybde stemmer ikke, berørende flater, skjul, filter, bevegelse, bevegelsesstudie, sveip, bevegelsesområde, kontroll
from: 9c98db46
---

To kontroller kjøres på delene slik de er plassert. **Kollisjon** ser etter overlappende materiale akkurat nå. **Bevegelseskontrollen** flytter ett ledd gjennom området og ser etter overlapp underveis.

## Se etter interferens

1. Åpne eller bygg en sammenstilling (se [Bygg en sammenstilling](topic:build-assembly)).
2. Velg {{ui:Kollisjon}}.

Statuslinjen rapporterer resultatet:

- «Ingen interferens mellom 3 deler (… ms).» Ingenting overlapper.
- «Interferens: Flens1 og Flens2: Overlapp, 2.5 mm³.» Hvert par, hvilken type resultat det er, og volumet de deler.

Boksen **Sammenstilling** til venstre viser **Interferens**: «Ingen», «2 resultater» (de som vises), eller «Ikke kontrollert». Uten valg lister høyre panel hvert resultat under **Interferens**.

Resultatet nullstilles hver gang sammenstillingen endres. Kjør {{ui:Kollisjon}} på nytt etter å ha flyttet et ledd. Hvert par deler sjekkes mot alle andre, så store sammenstillinger tar lengre tid.

### Typer resultater

| Type | Betyr |
|---|---|
| **Overlapp** | Delene deler volum: en reell kollisjon. |
| **Gjengedybde stemmer ikke** | Det delte volumet ligger inne i den ene delens gjenge, men forbi den andres: en bolt med gjenger dypere enn hullet sitt, eller en glatt skaft i et gjenget hull. |
| **Gjengepassning (kosmetiske gjenger)** | Det delte volumet ligger inne i begge delenes gjenger: en bolt i et gjenget hull. Kosmetiske gjenger tegnes i gjengens fulle størrelse, så de overlapper alltid litt. |
| **Berørende flater** | Ingen delt volum, men flater i kontakt (innen 0.001 mm). |

Modellerte gjenger (se [Gjenger på aksler og borhull, tegnet eller modellert](topic:threads)) er ekte geometri: det de deler, er en **Overlapp**.

### Skjul det du ikke trenger å se

Under **Interferens** har **Vis** en boks for hver type. Fjern krysset for **Gjengepassning** og **Berørende flater** for å se bare kollisjonene som betyr noe. **Skjul dette paret** ved siden av et resultat skjuler det paret av deler, uansett type. Skjulte resultater telles («2 resultater skjult av disse filtrene»), og **Vis de skjulte parene igjen** henter tilbake parene. Statuslinjen teller også skjulte resultater.

Filtrene lagres med sammenstillingen, og hver endring er ett steg med {{key:Mod+Z}}. **Sveip et ledd for kollisjoner** (under) bruker dem også. En sammenstilling med filtre lagres som versjon 4, som tidligere PartCraft-versjoner nekter å åpne, i stedet for å miste filtrene.

## Se bevegelsen

1. Velg et ledd som beveger seg (alle bortsett fra stive) i listen til venstre.
2. Dra glideren under en av verdiene, for eksempel **Vinkel (°)** eller **Forskyvning (mm)**. Delen beveger seg mens du drar.
3. Slipp. Den nye posisjonen beholdes og kan angres med {{key:Mod+Z}}.

Du kan også skrive en vinkel eller forskyvning i boksen og trykke {{key:Enter}}.

Et ledd i en lukket sløyfe (en mekanisme) flytter hele sløyfen: verdien du drar, beholdes, og de andre leddene i sløyfen følger (se [Lukkede sløyfer](topic:build-assembly#closed-loops-linkages)).

## Sveip et ledd for kollisjoner

1. Velg et ledd som beveger seg.
2. For et ledd med flere verdier (sylindrisk, plan, kule, tapp i spor), velg hvilken som skal sveipes i **Kontroller bevegelser**.
3. Velg {{ui:Kontroller bevegelsen for kollisjoner}}.

PartCraft flytter den verdien gjennom 25 posisjoner i 24 like steg, og de andre står stille: en vinkel fra −180° til 180° (en vipp fra −90° til 90°), en lengde fra minus til pluss størrelsen på den største delen. Den rapporterer:

- «Ingen kollisjon noe sted for Vinkel (°) fra -180 til 180 (25 posisjoner kontrollert).»
- «6 av 25 posisjoner kolliderer, først ved Vinkel (°) 45 (12.4 mm³).» Den første posisjonen som kolliderer, og overlappet der.

Knappen er nedtonet for stive ledd, som ikke beveger seg. Sveipet kontrollerer bare posisjonene, ikke banen mellom dem: en tynn del kan gå gjennom en annen mellom to steg.

:::note
Kontakt og tyngdekraft er ikke bygget. Uten grenser dekker sveipet hele området. Gi verdien **Grenser** (se [Delliste, eksploderte visninger og flytting av deler](topic:assembly-bom-explode)), så dekker sveipet bare dem. Et hengsel som åpner 90°, kontrolleres dermed over 90°.
:::

## En bevegelsesstudie

**Sammenstilling › Bevegelse** driver en verdi for ett ledd fra en start til en slutt over en tid du gir (konstant hastighet, jevn, sinus, eller ut og tilbake). Den plasserer sammenstillingen i hvert steg med leddene og de lukkede sløyfene, og rapporterer hva som kolliderer, og hvor nær delene kommer. **Legg til et punkt** følger midten av en del eller et punkt du klikker på den. Kortet tegner posisjonen, hastigheten og akselerasjonen, leddets verdi og klaringen mot tid. **Lagre CSV** og **Lagre graf** skriver dem ut. Hastighet og akselerasjon beregnes fra de registrerte posisjonene, så en skarp topp mellom steg blir lav. Bruk flere steg.

Etter **Kjør** flytter linjen **Gå gjennom kjøringen** sammenstillingen til et hvilket som helst steg. Tiden, verdien og om delene kolliderer der, vises ved siden av. Leddet beholder sin egen verdi, og **Tilbake til modellen** setter sammenstillingen tilbake. Studiets innstillinger lagres i sammenstillingsfilen. Resultatene lages på nytt av **Kjør**.

## En kontaktstudie

**Sammenstilling › Kontakt** viser hvordan en sammenstilling bærer last der delene presser på hverandre. Hver del tar med seg sine egne opplagre, laster og materiale fra sin egen **Simulering**-studie (en fast flate på én del, en kraft på en annen). Her velger du parene. **Legg til et par**, deretter **Velg side A** og klikk flater på én del, **Velg side B** og klikk flater på en annen del. Et klikk på en valgt flate fjerner den. {{key:Esc}} eller **Ferdig** avslutter valget. Et par er **Friksjonsfri** (delene presser, men glir) eller **Limt** (de holder seg sammen). Stivhetsfaktoren angir hvor hardt kontakten motstår å synke inn. 20 er et greit utgangspunkt, 1000 for en stiv stålstabel.

**Løs** kjører lasten i steg og viser kontaktkraften, den dypeste innsynkingen, den største forflytningen og den største spenningen. En del uten par utelates, og kortet sier det. Friksjonsfri kontakt holder ikke en del sideveis. Gi hver del en støtte i sin egen Simulering-studie, eller lim den, ellers kan stegene komme ikke til ro. Parene og innstillingene lagres i sammenstillingsfilen.

**Eksporter CalculiX-inndatafil** skriver samme modell som en CalculiX-inndatafil (.inp). CalculiX er et eget program du installerer og kjører selv. **Les CalculiX-resultater (.frd)** leser deretter forflytningene tilbake på denne sammenstillingens nett, og nekter en fil laget for et annet nett. Løseren her kan håndtere plastisk deformasjon, men er ikke eksplisitt dynamikk. Ingenting her er en sertifisert analyse: la en ingeniør sjekke alt som betyr noe.
