---
title: 3D-efterbehandling: parallel og scallop
summary: Efterbehandl hele modellens buede overflade med en kugle-, bull-nose- eller flad endefræser, i parallelle linjer i en vilkårlig vinkel eller i gennemløb med en fast afstand, så kammene mellem dem holder den højde, du beder om. Hvad banerne garanterer, og hvad de ikke gør.
keywords: 3d-efterbehandling, efterbehandling, parallel, raster, scallop, konstant scallop, kam, kugle-fræser, bull-nose, overflade, tolerance, stepover, hældning, materiale tilbage, drop cutter, indskæring
from: e1587d0a
---

To operationer i Manufacture skærer **hele modellens overflade** med værktøjet holdt lodret (tre akser). De tager ingen valg: de arbejder på alt af modellen, der kan ses oppefra. Grov delen først (adaptiv eller lomme); en efterbehandlingsgang over ubearbejdet materiale advarer om, at den ville skære dybt.

## Parallel

Lige linjer hen over modellen i den **vinkel**, du sætter, med **stepover** imellem (en brøkdel af fræserens diameter). Hver linje følger overfladen: værktøjsspidsen er så høj, som den skal være, for at ingen del af fræseren går under modellen, og linjen skæres finere, hvor overfladen bøjer. Med **Zig-zag** slået til bliver værktøjet nede mellem linjerne, hvor det kan gøre det sikkert (kontrolleret langs bevægelsen); ellers løfter det sig.

- **Tolerance**: hvor langt et lige stykke af en linje må være fra den sande spidshøjde (halvdelen bruges som grænse i midten af hvert stykke). Standard 0.01 mm.
- **Kun hvor overfladen er mindst … og højst … (°)**: efterbehandl kun flade områder eller kun stejle. Hvor overfladen er udenfor intervallet, udelades linjen, og værktøjet løfter sig.
- **Materiale tilbage**: modellen forskudt med den afstand (fræseren forstørret med den: præcis for kugle- og bull-nose-værktøjer; et fladt værktøj efterlader mindst så meget).
- **Bund**: intet skæres under denne z.

## Scallop

Gennemløb, der holder en konstant afstand over overfladen fra hinanden, så kammen (scallop) der står tilbage mellem to naboer-gennemløb har den **højde**, du beder om. Afstanden følger af højden og kuglens radius: s = 2·√(2·R·h − h²), for eksempel cirka 0.69 mm mellem gennemløb for en Ø6-kugle og en 0.02 mm kam. Et bull-nose-værktøj bruger sin hjørneradius. En flad endefræser afvises: den har ingen kam at dimensionere.

Gennemløbene starter **fra modellens kant, indad**, eller **fra dens top, nedad**. De er konturer af afstanden over overfladen (ikke af højde), så på en skråning ligger de tæt i plan, og på en flade ligger de langt fra hinanden. Afstanden måles på et gitter over overfladen og er god inden for cirka 1 %; kamhøjden er præcis, hvor overfladen er flad eller blidt buet, og tilnærmet, hvor den bøjer hurtigt. **Medløb** holder den højere side af overfladen på fræserens højre side.

## Hvor gode banerne er

Hvad testene kontrollerer, med lukkede formler eller en uafhængig brute-force-søgning af fræserens fodaftryk:

- Spidshøjden under værktøjet er præcis for kugle-, bull-nose- og fladt værktøj på flader, kanter og hjørner af mesh'en og aldrig over den sande højde; for parallelle linjer holder banen sig inden for tolerancen af den, uden indskæring dybere end det.
- Banelængder på et skråt plan stemmer med den lukkede formel; scallop-gennemløb på et plan er den ønskede afstand fra hinanden, og kammen mellem dem kommer ud i den bedt om højde.
- Materialesimuleringen viser ingen indskæring efter et gennemløb og viser de kamme, der bliver tilbage.

Hvad disse baner ikke er: de er grundlæggende efterbehandlingsgennemløb, ikke alt hvad et produktionssystem tilbyder.

- Ikke lavet: vandlinje (konstant z), pennestreg- og hjørnerydning, radiale og spiralgennemløb, projektion af en kurve på overfladen, detektion af flade områder, restbearbejdning, kontrol af holder- og skaftkollisioner, og enhver vipning af værktøjet.
- Værktøjets centrum bliver over modellen: banerne stopper ved modellens kant i stedet for at køre ud over den, så en lodret væg lige ved kanten bliver ikke efterbehandlet helt ned til foden.
- Underskæringer ses ikke (overfladen er det, værktøjet møder oppefra).
- Modellen er mesh'en fra kernen, så banerne følger mesh'en (dens korde-tolerance er cirka 0.0002 af delens diagonal), ikke den eksakte overflade.
- Efterbehandling af en stor model med fin tolerance giver et langt program med mange korte bevægelser. Kontrollér output i din maskines egen simulator, før du skærer.
