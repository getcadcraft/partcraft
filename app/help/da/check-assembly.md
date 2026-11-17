---
title: Kontrollér en samling for kollisioner og bevægelse
summary: Find dele, der overlapper med Kollision, træk i ethvert leds værdier for at se bevægelsen, og gennemløb et led over dets område for at finde, hvor dele kolliderer.
keywords: interferens, interferensregistrering, kollision, overlapning, gevindpasning, uoverensstemmelse i gevinddybde, berørende flader, skjul, filter, bevægelse, bevægelsesstudie, gennemløb, bevægelsesområde, kontrol
from: 9c98db46
---

To kontroller kører på delene, som de er placeret: **Kollision** leder efter overlappende materiale lige nu, og **bevægelseskontrollen** flytter ét led gennem dets område og leder efter overlapninger undervejs.

## Kontrollér for interferens

1. Åbn eller byg en samling (se [Byg en samling med led](topic:build-assembly)).
2. Vælg {{ui:Kollision}}.

Statuslinjen melder resultatet:

- "Ingen interferens mellem 3 dele (… ms)." Intet overlapper.
- "Interferens: Flange1 og Flange2: Overlapning, 2.5 mm³." Hvert par, hvilken type resultat det er, og det volumen, de deler.

Feltet **Samling** til venstre viser **Interferens**: "Ingen", "2 resultater" (dem, der vises), eller "Ikke kontrolleret". Når intet er valgt, lister højre panel hvert resultat under **Interferens**.

Resultatet nulstilles, hver gang samlingen ændres. Kør {{ui:Kollision}} igen efter at have flyttet et led. Hvert par af dele kontrolleres mod alle andre, så store samlinger tager længere tid.

### Resultattyper

| Type | Betyder |
|---|---|
| **Overlapning** | Delene deler volumen: en reel kollision. |
| **Uoverensstemmelse i gevinddybde** | Det fælles volumen er inde i den ene dels gevind, men ud over den andens: en bolt med gevind dybere end sit hul, eller en glat skaft i et gevindskåret hul. |
| **Gevindpasning (kosmetiske gevind)** | Det fælles volumen er inde i begge dele gevind: en bolt i et gevindskåret hul. Kosmetiske gevind tegnes i gevindets fulde størrelse, så de altid overlapper lidt. |
| **Berørende flader** | Intet fælles volumen, men flader i kontakt (inden for 0.001 mm). |

Modellerede gevind (se [Gevind på aksler og boringer, tegnet eller modelleret](topic:threads)) er reel geometri: det, de deler, er en **Overlapning**.

### Skjul det, du ikke behøver at se

Under **Interferens** har **Vis** et felt for hver type: fjern fluebenet ved **Gevindpasning** og **Berørende flader** for kun at se de kollisioner, der betyder noget. **Skjul dette par** ved siden af et resultat skjuler det par dele, uanset type. Skjulte resultater tælles ("2 resultater skjult af disse filtre"), og **Vis de skjulte par igen** henter parrene tilbage. Statuslinjen tæller også skjulte resultater med.

Filtrene gemmes med samlingen, og hver ændring er ét {{key:Mod+Z}}-trin. **Gennemløb et led for kollisioner** (nedenfor) bruger dem også. En samling med filtre gemmes som version 4, som tidligere PartCraft-versioner nægter at åbne i stedet for at miste filtrene.

## Se bevægelsen

1. Vælg et led, der kan bevæge sig (alle undtagen stive), i listen til venstre.
2. Træk skyderen under en af dens værdier, fx **Vinkel (°)** eller **Forskydning (mm)**. Delen bevæger sig, mens du trækker.
3. Slip. Den nye position beholdes og kan fortrydes med {{key:Mod+Z}}.

Du kan også skrive en vinkel eller forskydning i feltet og trykke {{key:Enter}}.

Et led i en lukket sløjfe (en forbindelse) flytter hele sløjfen: den værdi, du trækker, bevares, og de øvrige led i sløjfen følger med (se [Lukkede sløjfer](topic:build-assembly#closed-loops-linkages)).

## Gennemløb et led for kollisioner

1. Vælg et led, der kan bevæge sig.
2. For et led med flere værdier (cylindrisk, plan, kugle, tap i spor) vælger du, hvilken der skal gennemløbes under **Kontrollér bevægelser**.
3. Vælg {{ui:Kontrollér bevægelsen for kollisioner}}.

PartCraft flytter den værdi gennem 25 positioner i 24 lige store trin, mens de øvrige forbliver, som de er: en vinkel fra −180° til 180° (en hældning fra −90° til 90°), en længde fra minus til plus størrelsen af den største del. Den melder:

- "Ingen kollision nogen steder for Vinkel (°) fra -180 til 180 (25 positioner kontrolleret)."
- "6 af 25 positioner kolliderer, første gang ved Vinkel (°) 45 (12.4 mm³)." Den første position, der kolliderer, og overlapningen der.

Knappen er gråtonet for stive led, som ikke bevæger sig. Gennemløbet kontrollerer kun positionerne, ikke vejen imellem dem: en tynd del kunne passere gennem en anden mellem to trin.

:::note
Kontakt og tyngdekraft er ikke lavet endnu. Uden grænser dækker gennemløbet hele området; angiv værdien **Grænser** (se [Stykliste, sprængte visninger og flytning af dele](topic:assembly-bom-explode)), og gennemløbet dækker kun dem, så et hængsel, der åbner 90°, kontrolleres over 90°.
:::

## Et bevægelsesstudie

**Samling › Bevægelse** driver ét leds værdi fra en start til en slut over en tid, du angiver (konstant hastighed, blødgjort, sinus eller ud og tilbage), placerer samlingen i hvert trin med dens led og lukkede sløjfer og rapporterer, hvilke kollisioner der er, og hvor tæt delene kommer. **Tilføj et punkt** følger midten af en del eller et punkt, du klikker på den, og kortet afsætter dens position, hastighed og acceleration, leddets værdi og afstanden mellem delene over tid; **Gem CSV** og **Gem graf** skriver dem ud. Hastighed og acceleration udregnes ud fra de registrerede positioner, så en skarp top mellem trin vises for lavt: brug flere trin.

Efter **Kør** flytter linjen **Gennemgå kørslen** samlingen til et hvilket som helst trin (tiden, værdien og om delene kolliderer der vises ved siden af); leddet beholder sin egen værdi, og **Tilbage til modellen** sætter samlingen tilbage. Studiets indstillinger gemmes i samlingsfilen; dets resultater laves igen ved **Kør**.

## Et kontaktstudie

**Samling › Kontakt** viser, hvordan en samling bærer sine laster der, hvor dele presser mod hinanden. Hver del medbringer sine egne understøtninger, laster og materiale fra sit eget **Simulering**-studie (en fast flade på én del, en kraft på en anden); her vælger du parrene. **Tilføj et par**, og derefter **Vælg side A** og klik på flader af én del, **Vælg side B** og klik på flader af en anden del (et klik på en valgt flade fjerner den; Esc eller **Færdig** afslutter valget). Et par er **Friktionsfri** (delene presser, men glider) eller **Bundet** (de bliver sammen); stivhedsfaktoren angiver, hvor hårdt kontakten modsætter sig at synke ind (20 er et fornuftigt udgangspunkt, 1000 for en stiv stålstak).

**Løs** kører lasten i trin og viser kontaktkraften, den dybeste indsynkning, den største flytning og den største spænding. En del uden et par udelades, og kortet siger det. Friktionsfri kontakt holder ikke en del sidelæns: giv hver del en understøtning i sit eget Simulering-studie, eller bind den, ellers falder trinene muligvis ikke til ro. Parrene og indstillingerne gemmes i samlingsfilen.

**Eksportér CalculiX-deck** skriver den samme model som en CalculiX-inputfil (.inp). CalculiX er et separat program, du selv installerer og kører; **Læs CalculiX-resultater (.frd)** læser derefter flytningerne tilbage på denne samlings net og afviser en fil, der er lavet til et andet net. Løseren her kan håndtere plastisk deformation, men er ikke eksplicit dynamik, og intet her er en certificeret analyse: lad en ingeniør kontrollere alt, der betyder noget.
