---
title: Dele ud fra fysik: generatorer
summary: Engineer-arbejdsområdet og featuren Genereret legeme: vælg en generator, angiv dens inputs (flow, tryk, temperaturer, materiale, printer), og få en del dimensioneret ud fra lærebogsformler, med dens datablad, dens fremstillingskontroller og filer til analyseværktøjer. De samme inputs giver altid den samme del.
keywords: engineer, generator, genereret legeme, fysik, regler, varmeveksler, fordeler, dyse, gitter, gyroid, datablad, inputs, deterministisk, samme inputs, samme del, fremstillingskontroller, 3D-print, pulverbed
from: 5a387dc0
---

En **generator** er et script, der dimensionerer en del ud fra dine krav og bygger den. En generator for varmevekslere tager den varme, der skal flyttes, de to flow og deres temperaturer, trykket og materialet; den regner ud, hvor stor kernen skal være, og hvor tyk dens væg skal være, bygger den og fortæller dig de tal, den brugte, og hvor hvert af dem kom fra. Ændrer du et input, følger delen med.

Resultatet er et normalt legeme i delen: det står i featurelisten, det kan printes, det kan eksporteres. Generatoren selv gemmes også i delen, så en fil kan åbnes på enhver computer uden at generatoren er installeret, og **åbning af en del kører aldrig et script**.

## Lav et legeme

1. Vælg arbejdsområdet {{ui:Engineer}} i skifteren.
2. Vælg en generator på listen (dem, der følger med PartCraft, og derefter alle, du har åbnet fra en fil), og klik på {{ui:New}}.
3. Scriptet kører. Når det er færdigt, er legemet i visningen, og panelet viser dets inputs, dets **datablad** og dets **kontroller**.

Du kan også tilføje et legeme fra Design: {{ui:Features}} › {{ui:More}} › {{ui:Generated body}}.

## Ændr det

Ændrer du et input, laves legemet igen et øjeblik efter, du er holdt op med at skrive. Panelet siger, hvilken af tre ting der er sand:

- **Opdateret**: legemet matcher scriptet og dets inputs.
- **Inputs er ændret**: legemet i delen er fra de tidligere inputs; det laves igen, eller tryk {{ui:Run}}.
- **Ikke kørt endnu** eller **Sidste kørsel fejlede**: en scriptfejl vises med sin linje.

{{ui:Stop}} afslutter en kørsel, der tager for lang tid. Fortryd går et trin tilbage ad gangen: en kørsel er ét trin, et input er ét trin.

## Databladet

Hvert tal, generatoren har regnet ud, står på listen med sin **enhed** og **hvor det kommer fra** (en lærebogsligning, en standard, et datablad). Intet er en skjult konstant. Bladet er en del af filen, så det er det samme på den næste computer. [Dataeksport](topic:data-out) forklarer, hvordan du gemmer det som JSON eller PDF.

## Kontrollerne

En generator kan kontrollere sin egen del mod en printproces: vægge og huller, der er tyndere, end processen kan holde, løse dele, hulrum der fanger pulver eller harpiks, huller der er for smalle til at blive renset, og udhæng, der kræver understøtning. Fundene står i panelet og på listen {{ui:Problems}} (⚠-knappen), og de gemmes med delen.

Proces-tallene er de runde tal, som offentlige designvejledninger giver for processen generelt (FDM, SLA, SLS, metal pulverbed). De er **ikke din maskines specifikation**: erstat dem med dit værksteds tal, før du stoler på en kontrol. Kontrollen arbejder på et gitter af voxels, så den er nøjagtig til omkring én voxel: en væg rapporteres kun, når den er tyndere end grænsen med mere end én voxel.

## Hvad der følger med

| Generator | Hvad den laver |
|---|---|
| Gyroid-blok | En blok fyldt med en gyroid, Schwarz P eller diamant-plade: den enkleste gitterstruktur |
| Gyroid-varmeveksler | Kernen i en to-væskevarmeveksler, dimensioneret ud fra ydelsen med effektivitets-NTU-metoden og dens væg ud fra trykket; kan kontrollere trykfaldet med en flow-undersøgelse på én celle |
| Fordelingsmanifold | Et hovedrør og forgreninger, hvert rør dimensioneret ud fra det flow, det fører |
| Gradueret gitterbjælke | En gitterstruktur, hvis væg tykner, hvor en topologioptimering siger, at der er brug for materiale |

Alle er første estimater bygget på lærebogsformler. [Ingeniørbiblioteket](topic:engineering-library) lister formlerne og deres grænser. Kør Simulation, Thermal eller Flow på resultatet, før du stoler på det.

## Eksportkontrol

Engineers generatorer og datablade bærer en meddelelse om eksportkontrol og sanktioner. Læs den i [Engineer og eksportkontrol](topic:engineer-export-notice); den står også nederst på hvert datablad.

## Ikke lavet endnu

- Samlekamre, porte og fittings på varmevekslerkernen: det er kun kernen.
- Temperaturkurver for materialestyrke: materialerne er ved stuetemperatur.
- T-stykke-tab og fordelingen af flow mellem udgangene i manifolden.
- Tilføjelse af generatorer fra add-on-kataloget med ét klik; at åbne en fil tilføjer én til denne browser.
- Generatorer til de andre programmer.
