---
title: Åpne en .3dm-modell som et volumlegeme
summary: Hent nettene, polyflatene og blokkene i en .3dm-fil inn i PartCraft som ett volumlegeme du kan kutte, legge til og skissere på; hvor trekantene kommer fra, og hva som utelates.
keywords: 3dm, nurbs, polyflate, brep, overflater, gjengivelsesnett, ekstrudering, blokker, import, nett til volumlegeme, enheter, importert legeme
from: 8ae9571b
---

PartCraft åpner `.3dm`-filer som **volumlegemer**, på samme måte som den åpner et [STL-, OBJ- eller 3MF-nett](topic:open-meshes). Legemet fungerer som ethvert annet volumlegeme: kutt i det, legg til i det, bor i det, mønster det, og skisser på de flate flatene. Det har ingen egen historikk.

## Åpne filen

1. Velg {{ui:Åpne}} eller trykk {{key:Mod+O}}, og velg `.3dm`-filen. Eller slipp den i 3D-visningen.
2. PartCraft leser den og viser hva den fant: hvor mange objekter med flater som kommer inn, hvor mange flater som kom fra nettene lagret i filen og hvor mange PartCraft triangulerte selv, hver reparasjon, og om resultatet **lukker seg**.
3. Kontroller **Enheter i filen** (filen sier sin egen; en enhet PartCraft ikke lister, for eksempel yards, blir gjort om til millimeter) og **Opp i filen**.
4. Velg {{ui:Åpne som et legeme}}, eller **Bruk den til** og {{ui:Legg til i denne delen}} når delen allerede har funksjoner.

## Hvor trekantene kommer fra

PartCraft bygger legemer av trekanter i denne versjonen, så hver flate i filen blir små flate flater. For hver flate i en polyflate (og hver ekstrudering) tar den **gjengivelsesnettet lagret i filen** når det finnes, ellers **triangulerer den selv** (plan, NURBS-overflater, rotasjonsflater, ekstruderte kurver og ekstruderinger, trimmet av kantene sine). Flater i én polyflate deler kantpunktene sine, så en lukket polyflate kommer inn lukket. En flate på en type overflate PartCraft ikke leser ennå, utelates, og dialogen sier hvor mange og av hvilken type; resultatet lukker seg da vanligvis ikke.

## Alt i filen blir ett legeme

Hvert synlig nett, hver polyflate og ekstrudering, og hver plassering av en blokk, går inn i **ett** legeme der filen plasserer det. Objekter som er skjult, eller på et layer som er av, utelates. Når filen har flere separate volumlegemer, har legemet flere deler: åpne hver av dem fra sin egen fil hvis du vil ha dem som separate legemer.

## Hva som utelates (og sies)

Kurver, punkter, punktskyer, tekst, mål, skraveringer og lys utelates: et legeme tar bare flater. Det samme gjelder SubD-objekter (gjør dem om til nett eller polyflater i programmet som laget filen først), blokker koblet fra andre filer, og farger, layer og navn (PartCraft-legemer har ingen egne her).

## Når den ikke lukker seg

Åpne polyflater og overflater (en enkelt trimmet overflate, en form med en manglende flate) har ingen innside, så de kan ikke være et volumlegeme. Dialogen sier hvor mange åpninger som er igjen, og legger ikke til noe. Sy eller lukk formen i programmet som laget den, lagre, og åpne den igjen. Se [Når et nett ikke lukker seg](topic:open-meshes#when-a-mesh-does-not-close).
