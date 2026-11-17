---
title: Deler fra fysikk: generatorer
summary: Engineer-arbeidsområdet og funksjonen Generert legeme: velg en generator, sett inndataene (strøm, trykk, temperaturer, materiale, skriver), og få en del dimensjonert etter lærebokformler, med sitt dataark, produksjonskontroller og filer for analyseverktøy. Samme inndata gir alltid samme del.
keywords: engineer, generator, generert legeme, fysikk, regler, varmeveksler, fordeler, munnstykke, gitter, gyroid, dataark, inndata, deterministisk, samme inndata samme del, produksjonskontroller, 3D-printing, pulverbed
from: 5a387dc0
---

En **generator** er et skript som dimensjonerer en del ut fra kravene dine og bygger den. En generator for varmevekslere tar varmen som skal flyttes, de to strømmene og deres temperaturer, trykket og materialet; den finner ut hvor stor kjernen må være og hvor tykk veggen skal være, bygger den, og forteller deg tallene den brukte og hvor hvert av dem kom fra. Endrer du en inndata, følger delen med.

Resultatet er et vanlig legeme i delen: det står i funksjonslisten, det kan skrives ut, det kan eksporteres. Selve generatoren lagres også i delen, så en fil åpnes på hvilken som helst datamaskin uten at generatoren er installert, og **å åpne en del kjører aldri et skript**.

## Lag et legeme

1. Velg {{ui:Engineer}}-arbeidsområdet i bryteren.
2. Velg en generator i listen (de som følger med PartCraft, og deretter alle du har åpnet fra en fil) og klikk {{ui:Ny}}.
3. Skriptet kjører. Når det er ferdig, er legemet i visningen, og panelet viser inndataene, **dataarket** og **kontrollene**.

Du kan også legge til et legeme fra Design: {{ui:Funksjoner}} › {{ui:Mer}} › {{ui:Generert legeme}}.

## Endre det

Endrer du en inndata, lages legemet på nytt kort tid etter at du slutter å skrive. Panelet sier hvilket av tre ting som er sant:

- **Oppdatert**: legemet samsvarer med skriptet og inndataene.
- **Inndataene er endret**: legemet i delen er fra de tidligere inndataene; det lages på nytt, eller du trykker {{ui:Kjør}}.
- **Ikke kjørt ennå** eller **Siste kjøring feilet**: en skriptfeil vises med linjenummer.

{{ui:Stopp}} avslutter en kjøring som tar for lang tid. Angre går tilbake ett steg om gangen: en kjøring er ett steg, en inndata er ett steg.

## Dataarket

Hvert tall generatoren regnet ut, står oppført med sin **enhet** og **hvor det kommer fra** (en lærebokligning, en standard, et dataark). Ingenting er en skjult konstant. Arket er en del av filen, så det er likt på neste datamaskin. [Data ut](topic:data-out) forklarer hvordan du lagrer det som JSON eller PDF.

## Kontrollene

En generator kan kontrollere sin egen del mot en utskriftsprosess: vegger og mellomrom som er tynnere enn prosessen holder, løse deler, hulrom som fanger pulver eller harpiks, hull som er for smale til å tømmes, og overheng som trenger støtte. Funnene står i panelet og i listen {{ui:Problemer}} (⚠-knappen), og de lagres med delen.

Prosesstallene er de runde tallene som offentlige designveiledninger gir for prosessen generelt (FDM, SLA, SLS, metallpulverbed). De er **ikke din maskins spesifikasjon**: bytt dem med verkstedets egne tall før du stoler på en kontroll. Kontrollen arbeider på et rutenett av voxels, så den er nøyaktig til omtrent én voxel: en vegg rapporteres bare når den er tynnere enn grensen med mer enn én voxel.

## Hva som følger med

| Generator | Hva den lager |
|---|---|
| Gyroid-blokk | En blokk fylt med en gyroid, Schwarz P eller diamantplate: det enkleste gitteret |
| Gyroid-varmeveksler | Kjernen i en to-væskevarmeveksler, dimensjonert fra ytelsen etter effektivitet-NTU-metoden, veggen fra trykket; kan kontrollere trykkfallet med en strømningsstudie på én celle |
| Fordelingsmanifold | Et hode og grener, hvert rør dimensjonert etter strømmen det fører |
| Gradert gitterbjelke | Et gitter der veggen blir tykkere der en topologioptimering sier at materiale trengs |

Alle er første anslag, bygget på lærebokformler. [Ingeniørbiblioteket](topic:engineering-library) lister formlene og deres begrensninger. Kjør Simulering, Termisk eller Strømning på resultatet før du stoler på det.

## Eksportkontroll

Engineers generatorer og dataark har en merknad om eksportkontroll og sanksjoner. Les den i [Engineer og eksportkontroll](topic:engineer-export-notice); den står også nederst på hvert dataark.

## Ikke bygget ennå

- Hoder, porter og koblinger på varmevekslerkjernen: den er bare kjernen.
- Temperaturkurver for materialstyrke: materialene er ved romtemperatur.
- Grenetap og fordeling av strøm mellom utløpene i manifolden.
- Legge til generatorer fra tilleggskatalogen med ett klikk; åpning av en fil legger til en i denne nettleseren.
- Generatorer for de andre appene.
