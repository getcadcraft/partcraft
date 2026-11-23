---
title: 3D-grovbearbejdning og restbearbejdning
summary: Ryd råemnet rundt om hele modellen niveau for niveau med en plan-, tønde- eller kugleformet endefræser, og efterlad materiale til efterbearbejdningen; lad derefter en mindre fræser skære kun der, hvor den første efterlod materiale. Hvad banerne garanterer, og hvad de ikke gør.
keywords: 3d-grovbearbejdning, grovbearbejdning, grov, restbearbejdning, restmateriale, efterladt materiale, dybdeskridt, niveauer, z-niveau, vandlinje, rampe, stødboring, gennemskæring, mindre fræser
from: 29ddc266
---

To operationer i Fremstilling, under {{ui:Mere}} på værktøjslinjen, rydder råemne fra **hele modellen** i 3D, med værktøjet holdt lodret (eller langs operationens egen [værktøjsretning](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation)). De kræver ingen valg.

## 3D-grovbearbejdning

{{ui:3D-grov}} arbejder sig ned fra toppen af råemnet ét **dybdeskridt** ad gangen. På hvert niveau rydder den alt, værktøjet kan nå uden at røre modellen: lige rækker med en **skridafstand** imellem (en brøkdel af værktøjsdiameteren), derefter én gang rundt om kanten af det, den må nå, så vægge følges og ikke efterlades som en række trin i plan.

- **Efterladt materiale**: hvor langt værktøjet holder sig fra modellen overalt, til efterbearbejdningen (standard 0.5 mm).
- **Et niveau ved hver plan flade**: et ekstra niveau i højden af hver plan flade på modellen (plus det efterladte materiale), så en bund ikke efterlades næsten et helt dybdeskridt høj.
- **Ignorér råemne tyndere end**: materiale, der er tyndere end dette, opad eller til siden, er ikke værd en gang (0.05 mm til grovbearbejdning, 0.5 mm til restbearbejdning, så at et hår, der er tilbage langs en væg, ikke sender den mindre fræser rundt om hver væg).
- **Bund**: intet skæres under denne højde. Tomt betyder modellens bund.

Den starter fra råemnet, **som de foregående operationer efterlod det**: efter en planfræsning skærer den ikke i den luft, hvor planfræseren har været.

Ved nedgang: hvor værktøjet ville møde råemne på vej ned, kører det en rampe langs sin egen gang i **rampevinklen**, frem og tilbage over højst to værktøjsdiametre. En gang, der er for kort til det, stødbores lige ned med stødboringsfremføringen; operationen tæller dem og advarer, for et værktøj, der ikke skærer med sit centrum, bør ikke gøre det.

## Restbearbejdning

{{ui:Rest}} er den samme strategi for **en mindre fræser efter en større**. Den læser råemne-simuleringen og skærer kun, hvor materiale stadig står: i indvendige hjørner, som den større fræser ikke kunne dreje i, i spor den ikke passede i, og i trinene, den efterlod på skråninger. Alle andre steder gør den intet, så dens bane er en lille del af, hvad den samme fræser ville tage på frisk råemne.

Placér den efter grovbearbejdningsoperationen, og vælg den mindre fræser. Den skal bruge råemne-simuleringen af de foregående operationer, som arbejdsområdet altid kører.

## Hvor gode banerne er

- **Ingen gennemskæring.** Værktøjets positioner regnes ud på et gitter, med skæret taget lidt større end det er (med 1.4 gittercelle til siden, og med det efterladte materiale), så det overalt, det står, er frit af modellen. Testene kontrollerer hvert skærepunkt mod det nøjagtige værktøj på det nøjagtige net, og råemne-simuleringen efter hver kørsel: ingen gennemskæring, ingen eilgang gennem råemne.
- **Prisen for det**: vægge beholder lidt mere end det efterladte materiale, op til det beløb, der vises som "Ekstra materiale på vægge" på operationen (ca. 0.5 mm for en Ø6-fræser, mindre for en mindre). Efterbearbejdningsgangen tager det.

Det, disse baner ikke er:

- Rækker er lige linjer, ikke forskydninger af delens form eller kurver med konstant indgreb. De giver flere løft og luftbevægelser end en forskudt eller adaptiv strategi, og den første række på hvert niveau skærer værktøjets fulde bredde. Til lommer med flad bund er [Adaptiv](topic:manufacture) den bedre grovbearbejdning.
- Værktøjets skaft og holder kontrolleres ikke. En advarsel siger, når snittet er dybere end spåntlængden.
- Undersnit ses ikke: modellen er det, værktøjet møder, når det kommer ned langs sin akse. For at rydde en side, giv en anden operation en [hældet værktøjsretning](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Restbearbejdning kender kun råemnet så godt, som simuleringens gitter gør (celler på 0.1 til 2 mm, efter delens størrelse).
- På en stor del er programmet langt (over 100.000 bevægelser for en 200 mm flange med en Ø6-fræser) og tager ca. et minut at beregne, og hver ændring i arbejdsområdet beregner hele programmet igen. Brug den største fræser, der passer, til grovbearbejdningen.
- Kontrollér outputtet i din maskines egen simulator, før du skærer.
