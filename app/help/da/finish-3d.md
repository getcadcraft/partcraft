---
title: 3D-efterbearbejdning: parallel og kamme
summary: Efterbearbejd hele modellens buede overflade med en kugleformet, tøndeformet eller plan fræser, i parallelle linjer i enhver vinkel eller i baner med en fast afstand, så kammene mellem dem holder den højde, du beder om. Hvad banerne garanterer, og hvad de ikke gør.
keywords: 3d-efterbearbejdning, efterbearbejdning, parallel, raster, kamme, konstant kamhøjde, kam, kugleformet fræser, tøndefræser, overflade, tolerance, skridafstand, hældning, efterladt materiale, drop cutter, gennemskæring
from: 942d2341
---

To operationer under Fremstilling skærer i **hele modellens overflade** med værktøjet holdt lodret (tre akser). De kræver ingen valg: de arbejder på hele den del af modellen, der kan ses oppefra. Grovbearbejd delen først (adaptiv eller lomme); en efterbearbejdningsgang over ubearbejdet råemne advarer om, at den ville skære dybt.

## Parallel

Lige linjer hen over modellen i den **vinkel**, du angiver, med **skridafstand** imellem (en brøkdel af værktøjsdiameteren). Hver linje følger overfladen: værktøjsspidsen står så højt, som den skal, så ingen del af skæret går under modellen, og linjen skæres finere, hvor overfladen bøjer. Med **Zig-zag** slået til står værktøjet nede mellem linjerne, hvor det kan gøre det sikkert (kontrolleret langs bevægelsen); ellers løftes det.

- **Tolerance**: hvor langt et lige stykke af en linje må ligge fra den rigtige spidshøjde (halvdelen bruges som grænse midt på hvert stykke). Standard 0.01 mm.
- **Kun hvor overfladen er mindst … og højst … (°)**: efterbearbejd kun flade områder eller kun stejle. Hvor overfladen ligger uden for intervallet, udelades linjen, og værktøjet løftes.
- **Efterladt materiale**: modellen forskudt med den afstand (skæret forstørret tilsvarende: nøjagtigt for kugle- og tøndeværktøjer; et planværktøj efterlader mindst så meget).
- **Bund**: intet skæres under denne z.

## Kamme

Baner, der holder en konstant afstand over overfladen fra hinanden, så kammen (scallop) mellem to nabobaner får den **højde**, du angiver. Afstanden følger af højden og kuglens radius: s = 2·√(2·R·h − h²), for eksempel ca. 0.69 mm mellem baner for en Ø6-kugle og en 0.02 mm kam. Et tøndeværktøj bruger sin hjørneradius. En planfræser afvises: den har ingen kam at dimensionere.

Banerne starter fra **modellens kant og går indad** eller fra **dens top og går nedad**. De er konturer af afstanden over overfladen (ikke af højden), så de ligger tæt i plan på en skråning og langt fra hinanden på en flade. Afstanden måles på et gitter over overfladen og er god til ca. 1 %; kamhøjden er nøjagtig, hvor overfladen er flad eller blødt buet, og tilnærmet, hvor den bøjer hurtigt. **Medløb** holder den højere side af overfladen på skærets højre side.

## Hvor gode banerne er

Det testene kontrollerer, med lukkede formler eller en uafhængig brute-force-søgning af skærets fodaftryk:

- Spidshøjden under værktøjet er nøjagtig for kugle-, tønde- og planværktøjer på flader, kanter og hjørner af nettet, og aldrig over den rigtige højde; for parallelle linjer holder banen sig inden for tolerancen, uden gennemskæring dybere end den.
- Banelængder på et skråt plan stemmer med den lukkede formel; kamme-baner på et plan ligger den ønskede afstand fra hinanden, og kammen imellem får den ønskede højde.
- Råemne-simuleringen viser ingen gennemskæring efter en gang og viser de kamme, der er tilbage.

Disse baner er ikke hele det, et produktionssystem tilbyder: de er grundlæggende efterbearbejdningsgange.

- Ikke lavet endnu: vandlinje-efterbearbejdning (konstant z), blyant- og hjørnerydning, radiale og spiralformede baner, projicering af en kurve på overfladen, registrering af flade områder, kontrol af kollision med holder og skaft. Grov- og restbearbejdning er egne operationer ([3D-grovbearbejdning og restbearbejdning](topic:rough-3d)); et værktøj, der hælder, er [5-akset efterbearbejdning](topic:multi-axis#5-axis-finishing).
- Værktøjets centrum bliver over modellen: banerne stopper ved modellens kant i stedet for at køre ud over den, så en lodret væg lige ved kanten ikke efterbearbejdes helt ned til foden.
- Undersnit ses ikke (overfladen er det, værktøjet møder oppefra).
- Modellen er nettet fra kernen, så banerne følger nettet (dets kordetolerance er ca. 0.0002 af delens diagonal), ikke den nøjagtige overflade.
- Efterbearbejdning af en stor model med en fin tolerance giver et langt program med mange korte bevægelser. Kontrollér outputtet i din maskines egen simulator, før du skærer.
