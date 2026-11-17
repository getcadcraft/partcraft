---
title: Splines, beskær, forskyd og andre skitseværktøjer
summary: Tegn splines med tilpasningspunkter og kontrolpunkter, beskær og forlæng kurver, forskyd en kæde, spejl om en midterlinje, tilføj polygoner og slidser, mønstre skitsegeometri og projicér modelkanter.
keywords: spline, tilpasningspunkt, kontrolpunkt, b-spline, nurbs, kurve, beskær, forlæng, forskyd, spejl, symmetrisk, polygon, sekskant, slids, mønster, lineært mønster, cirkulært mønster, projicér, projicér kant, medtag, konvertér elementer
from: 3ecb166a
---

Disse værktøjer virker i en åben skitse. {{ui:Spline}} og {{ui:Beskær}} findes i værktøjslinjen. De øvrige ligger under {{ui:Mere}} i slutningen af skitseværktøjerne. Hvert værktøj er ét fortrydelsestrin, og {{key:Esc}} stopper det. For de grundlæggende tegneværktøjer, se [Tegn din første skitse](topic:sketch-basics).

## Splines

En spline er en glat kurve. Der findes to slags.

| Værktøj | Tast | Sådan tegner du |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Klik på de punkter, kurven går igennem. Afslut med {{key:Enter}}, {{key:Esc}}, højreklik eller dobbeltklik. Klik på det første punkt igen for at lukke splinen |
| {{ui:Kontrolpunktsspline}} (under {{ui:Mere}}) | | Klik på kontrolpunkterne. Kurven trækkes mod dem, men rører kun det første og sidste. Den stiplede kontrolpolygon vises, mens du tegner, og bagefter |

- **Punkterne er skitsepunkter.** Træk i dem, eller giv dem relationer og mål ligesom ethvert andet punkt. En splines første punkt kan fanges til en linjes ende, hvilket forbinder dem med en sammenfaldende relation.
- **Tangent i en ende.** Vælg en linje, bue eller spline, der møder den ene ende af en spline, vælg derefter splinen og vælg {{ui:T Tangent}}. Splinens enderetning følger så linjen. En tangent væk fra splinens ender afvises: »En tangent til en spline kræver, at linjen, buen eller splinen møder den ene ende af den.«
- **Ender.** Uden en tangentrelation er en tilpasningspunkt-splines ender naturlige (ingen krumning helt ved enden). Kurven er kubisk og går igennem hvert punkt, med afstanden mellem punkterne sat af afstandene mellem dem.
- **Lukkede splines** danner selv en profil. Åbne splines forbinder linjer og buer til en lukket sløjfe ligesom enhver anden kurve.
- Sletning af et punkt inde i en spline fjerner det punkt og beholder splinen, så længe den har mindst to punkter (tre, når den er lukket).

{{ui:Ekstruder}} og {{ui:Drej}} bygger splinen med mesh-kernen af korte rette stykker (ægte kurver kræver en eksakt kerne: ikke lavet endnu i denne version). DXF-eksport skriver en spline som en polylinje, der holder sig inden for 0.01 mm fra kurven, fordi DXF R12 ikke har en spline-entitet.

## Beskær og forlæng

| Værktøj | Tast | Sådan |
|---|---|---|
| {{ui:Beskær}} | {{key:T}} | Peg på en kurve: stykket, der ville forsvinde, vises rødt, op til de nærmeste skæringspunkter. Klik for at fjerne det. En kurve, der ikke krydser noget, fjernes helt |
| {{ui:Forlæng}} (under {{ui:Mere}}) | {{key:E}} | Klik på en linje eller bue nær enden for at forlænge den. Den vokser til den næste kurve, den møder. »Der er intet, som enden kan nå.« når intet står i vejen |

{{ui:Beskær}} og {{ui:Forlæng}} virker på linjer, buer, cirkler og splines ({{ui:Forlæng}}: kun linjer og buer).

- En beskåret **cirkel** bliver til en bue. Dens radius- eller diametermål flytter til buen.
- Beskæring midt på en linje efterlader to linjer, der bliver på samme rette linje. Beskæring midt på en bue efterlader to buer med samme centrum og en lig med-relation.
- En beskåret **spline** bliver til en kontrolpunkt-spline, der følger den gamle kurve nøjagtigt. En tangentrelation ved en ende, der beholdes, bliver.
- Den nye ende placeres på den kurve, der skar den (på linjen, buen eller cirklen, eller sammenfaldende med dens ende). Splines kan ikke holde et punkt, så en spline, der skærer, tilføjer ingen relation.

**Relationer, der ikke længere passer, fjernes**, og statuslinjen siger, hvor mange. For eksempel fjernes et længdemål på en beskåret linje, men vandrette eller parallelle relationer bliver.

## Forskyd

1. Vælg {{ui:Forskyd}} under {{ui:Mere}} eller tryk {{key:O}}.
2. Klik på en linje, bue, cirkel eller spline. Hele dens kæde fremhæves: alle kurver forbundet ende til ende, op til et punkt, hvor tre eller flere mødes. For kun at forskyde en del af en kæde, vælg først disse kurver, vælg derefter {{ui:Forskyd}} og klik på en af dem.
3. Flyt markøren til den side, kopien skal på. En stiplet forhåndsvisning følger. Tryk {{key:B}} for begge sider.
4. Klik, skriv afstanden, og tryk {{key:Enter}}.

Linjer og buer forskydes nøjagtigt. Hjørner forlænges eller beskæres, indtil de mødes. Kopien har ét **forskydningsmål**, og de øvrige dele følger det: dobbeltklik på målet for at ændre hele kopien. En afstand, der er for stor til kæden, afvises, for eksempel »Den afstand er for stor til denne kæde: en side ville vende indad.«

En **spline** forskydes med en ny tilpasningspunkt-spline inden for 0.001 mm fra den rigtige forskydning. Denne kopi er fast: den følger ikke senere ændringer, og den har intet forskydningsmål. En spline i en kæde kræver glatte (tangent-) samlinger i sine ender.

## Spejl

1. Vælg med {{ui:Vælg}} det, der skal spejles.
2. Vælg {{ui:Spejl}} under {{ui:Mere}} eller tryk {{key:M}}.
3. Klik på linjen eller midterlinjen, der skal spejles om.

Hvert spejlet punkt får en **symmetrisk**-relation med sin original, så kopien følger, når originalen ændres. Punkter, der ligger på spejllinjen, deles, og spejlede cirkler får en lig med-relation. Hvis intet var valgt, klik på de elementer, der skal spejles, tryk {{key:Enter}}, og klik derefter på spejllinjen.

## Polygoner og slidser

| Værktøj | Sådan |
|---|---|
| {{ui:Polygon}} | Klik på centrum, derefter på et hjørne, og skriv antal sider (3 til 64). Siderne er lige lange, og hjørnerne ligger på en konstruktionscirkel. Sæt mål på cirklen for at give polygonen størrelse |
| {{ui:Slids}} | Klik på den ene endes centrum, derefter på den anden endes centrum, og klik derefter for at angive bredden. To linjer, tangente til to lige store halvcirkler |

## Skitsemønstre

Vælg geometrien først, og derefter:

- {{ui:Lineært mønster}}: klik på et startpunkt, derefter hvor den første kopi skal, og skriv antallet af kopier (inklusive originalen).
- {{ui:Cirkulært mønster}}: klik på centrum, og skriv antallet af kopier, jævnt fordelt over en hel omgang.

Kopierne tager relationerne mellem den valgte geometri med sig (et cirkulært mønster udelader vandrette og lodrette). Kopierne er ikke knyttet til originalen: ændrer du én, forbliver de andre, som de er.

## Projicér kanter fra delen

1. Vælg {{ui:Projicér kant}} under {{ui:Mere}}.
2. Klik på en retlinet eller cirkulær kant på delen bag skitsen.

Kanten kopieres nøjagtigt over på skitseplanet og fastlåses (**Fastlås**-relation). Den følger ikke senere ændringer af delen. Tryk {{key:Q}} for at gøre den til konstruktionsgeometri. En cirkel, der er vippet i forhold til skitseplanet, ville projiceres til en ellipse, så den afvises. Det samme gælder frie kanter og kanter, der peger lige ud af skitsen. Projicering kræver en eksakt kerne: den er ikke lavet endnu i denne version.
