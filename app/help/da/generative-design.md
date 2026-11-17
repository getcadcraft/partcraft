---
title: Lad en form vokse ud fra laster (Generativ)
summary: Vælg de flader, der holdes og belastes, områder der skal bevares og holdes frie, målvolumener og materialer, og generér udfald: de stiveste fundne former for hvert volumen, kontrolleret igen som legemer, sammenlignet i en tabel og hentet som STL, STEP eller en ny del.
keywords: generativt design, topologioptimering, SIMP, letvægt, gitter, organisk form, udfald, sammenlign, masse, volumenbrøk, bevar, hold-i, forhindring, hold-ude, designrum, mindste elementstørrelse, STL, 3D-print
from: 5b91fa8e
---

Arbejdsområdet **Generativ** fjerner materiale, som belastningerne ikke har brug for. Du siger, hvor delen er holdt og belastet, hvad der skal blive, og hvad der skal holdes frit. PartCraft finder den stiveste form for hvert målvolumen (**topologioptimering**), kontrollerer hver enkelt igen som et legeme med det rigtige materiale og viser udfaldene side om side. Den arbejder på de navngivne flader, som mesh-kernen giver delen (se [Mesh-kernen](topic:solid-kernels)).

Vælg **Generativ** i boksen **Arbejdsområde**. Din del ændres ikke; undersøgelsen gemmes i delfilen.

## Opsæt en undersøgelse

1. Tryk **Ny undersøgelse** i det højre panel.
2. **Rum**: *Delen som den er* fjerner materiale fra din del; *En kasse omkring delen* får en form til at vokse inde i en kasse, der er større end delen med **Kasse-margin**.
3. **Elementstørrelse**: lad feltet stå tomt for en automatisk størrelse (cirka 8,000 kubber), eller skriv en. Finere størrelser giver finere former og tager længere tid.
4. **Mindste element**: elementer, der er tyndere end cirka det dobbelte af dette, dannes ikke. Tom betyder en og en halv kub.
5. Sæt kryds ved et til seks **Målvolumener** (den andel af designrummet, formen må fylde) og et til fire **Materialer**. Hvert volumen genereres én gang; hvert materiale kontrolleres på den form. Den stiveste form afhænger ikke af materialet, men dens masse, spænding og sikkerhedsfaktor gør.

## Mål

- {{ui:Fastholdt}}: klik på de flader, der holdes fast. En **Friktionsfri flade** fra panelets liste **Tilføj** holder en flade kun på tværs af sig selv (brug den til symmetriplaner).
- {{ui:Kraft}}: klik på de belastede flader, skriv derefter den samlede kraft, og vælg dens retning i panelet. **Tryk** står i listen **Tilføj**.
- {{ui:Bevar}}: klik på flader, hvis omgivelser skal forblive massive, og angiv hvor dybt (**Hold massiv inden for**), fx omkring boltehuller. De flader, du fastholder eller belaster, bevares altid.
- {{ui:Forhindring}}: klik på flader, hvis omgivelser skal forblive tomme, og angiv hvor langt (**Hold tom inden for**), fx plads til en aksel eller et værktøj.

Tryk **Udvalg færdigt** eller {{key:Esc}}, efter du har klikket på flader. Grønne og røde toninger viser områderne.

## Generér og sammenlign

Tryk {{ui:Generér}}. Panelet viser fremskridt og den resterende tid; **Stop** annullerer. Hvert udfald vises i tabellen **Udfald**: målvolumen, materiale, **masse**, **største spænding**, **største forskydning** og **sikkerhedsfaktor** (flydning ÷ spænding), alt sammen fra at genberegne den færdige form som massive kuber med det rigtige materiale.

Vælg et udfald for at se det i visningen (delen skjules; sæt kryds i **Vis delen gennem den** for at se begge). Under tabellen står, hvor mange iterationer det tog, og om den faldt til ro, dens stivhed som et massivt legeme sammenlignet med optimeringens eget tal, og dens overflade.

## Brug et udfald

- **STL**: et lukket trekantmesh, klar til 3D-print.
- **STEP (facetteret)**: den samme overflade som et STEP-legeme lavet af flade flader.
- **Ny delfil**: en PartCraft-del, hvis ene funktion er udfaldet som et importeret legeme. Åbn den for at skitsere på den, skære huller eller kontrollere den i [Simulering](topic:simulation). Den er facetteret (tusindvis af flade flader), ikke en redigerbar form.
- **Tilføj til denne del** forbinder udfaldet med delen; det er kun aktivt for et kassedesignrum (med selve delen som rum ligger udfaldet inde i delen).

**Ny delfil** og **Tilføj til denne del** er ikke lavet endnu i denne version: udfaldet bliver et importeret legeme, hvilket kræver den eksakte kerne. STL- og STEP (facetteret)-downloadene virker.

## Hvor meget kan du stole på den

- Den optimerer **stivhed** for det givne volumen. Der er ingen spændingsgrænser og ingen fremstillingsregler (udhæng, fræseretninger, mindste hulstørrelser) endnu: kontrollér et valgt udfald i [Simulering](topic:simulation), og justér.
- Tynde elementer, der er en eller to kuber brede, er tilnærmelser: brug en mindre elementstørrelse for slanke dele.
- Metoden er SIMP med et tæthedsfilter, en tærskelprojektion og optimalitetskriterie-opdateringer. Den rapporterede spænding og nedbøjning er af udfaldet som kuber, hvilket er ærligt, men grovt ved skarpe hjørner.

## Relateret

- [Kontrollér spænding og nedbøjning (Simulering)](topic:simulation)
- [Eksport til print, STEP og DXF](topic:export-files)
- [Hvad der ikke er lavet endnu](topic:not-built-yet)
