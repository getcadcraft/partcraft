---
title: Sweep, loft og udtræksvinkel
summary: Sweep en lukket profil langs en bane af skitsekurver eller modelkanter, loft gennem snit på forskellige planer og tilføj udtræksvinkel til flader; med indstillingerne, de eksakte resultater og meddelelserne.
keywords: sweep, sweep-tap, sweep-udskæring, rør, bane, loft, loft-tap, blend-snit, retlinjet, udtræksvinkel, skråning, neutralplan, trækretning, støbning
from: 9d637981
---

:::note
**I denne version** er sweep og loft ikke lavet endnu: de kræver en eksakt geometrikerne, som denne version af PartCraft ikke har. [Hvad er ikke lavet endnu](topic:not-built-yet) siger, hvad du skal gøre i stedet; afsnittene Sweep og Loft beskriver dem, sådan som de virker med en eksakt kerne. **Udtræksvinkel virker** på plane flader: netkernen bygger den, med det samme resultat som en eksakt kerne giver.
:::

Alle tre findes i menuen {{ui:Mere}} under gruppen Features (se [Netkernen](topic:solid-kernels)). Hver kan tilføje materiale, skære i det, beholde kun overlapningen (**Skæring**) eller lave et **Nyt legeme** (sweep og loft: **Operation** i panelet).

## Sweep

Et sweep flytter en lukket profil langs en bane: rør, håndtag, fjedre af tråd, skinner.

1. Tegn **banen** i én skitse: linjer og buer, der er samlet ende mod ende (eller brug modelkanter, nedenfor).
2. Tegn **profilen** i en anden skitse, hvis plan går gennem den ene ende af banen, fx en cirkel på topplanet ved banens start, når banen er tegnet på frontplanet.
3. Vælg profilskitsen og vælg {{ui:Mere}}, og derefter {{ui:Sweep}}. Den nyeste anden skitse bliver banen.

I panelet:

| Indstilling | Hvad den gør |
|---|---|
| **Bane** | Markér de skitser, der udgør banen (flere skitser samles ende mod ende til én 3D-bane); **Vælg modelkanter** tilføjer kanter fra delen |
| **Orientering** | Følg banen (standard), Frenet, Fast (snittene forbliver parallelle med profilen), Bevar en retning, Langs en ledekurve |
| **Slutskala** | Profilen vokser eller skrumper lineært til denne størrelse i enden (1 = konstant) |

Skarpe hjørner i banen skæres i gering. En cirkel med radius 5 langs en 100 mm linje er en cylinder på præcis 2500π mm³; langs en kvartbue med radius 50 er det en kvart torus på 625π² mm³.

## Loft

Et loft blander sig gennem to eller flere snit på forskellige planer.

1. Tegn hvert snit i sin egen skitse (én lukket sløjfe hver), på basisplaner, referenceplaner (se [Referenceplaner, akser og punkter](topic:reference-geometry)) eller flader.
2. Vælg {{ui:Mere}}, og derefter {{ui:Loft}}. Hver ubrugt skitse med én sløjfe bliver et snit, i historikkens rækkefølge.

Panelet viser snittene i rækkefølge (**Op** flytter, **Fjern** fjerner ét); **Tilføj en skitse** tilføjer endnu en, **Vælg en flade** tilføjer en plan flade fra delen. **Retlinjet** laver rette flader mellem snittene i stedet for en glat overgang. Mellem to kvadrater er begge det samme kegleafsnit (et 40 mm kvadrat til et 20 mm kvadrat over 30 mm: præcis 28000 mm³).

Snit med forskelligt antal sider (et kvadrat til en trekant) matches af OpenCascade, som kan vride sidefladerne; featuren advarer dig. Tegn snit med samme antal sider, og start fra svarende hjørner, for det reneste resultat.

### Ledekurver

Ledekurver er kurver, som loftets sider skal følge fra første snit til sidste, fx til en buling, en indsnøring eller en udvidelse, som du selv tegner.

1. Tegn to eller flere ledekurver: åbne kurver (linjer, buer, splines), der går fra første snit til sidste og krydser hvert snit én gang. Én skitse kan rumme flere ledekurver: hver adskilt kæde i den er sin egen ledekurve. Tegn en ledekurve, så den rent faktisk møder hvert snit: fastgør dens ender til snittenes punkter.
2. Under **Ledekurver** i loft-panelet markerer du de skitser, der rummer dem, eller klikker på {{ui:Vælg modelkanter som ledekurver}} og klikker på kanter af delen ({{key:Esc}} afslutter).

Med ledekurver er loftet en Gordon-flade gennem snittene og ledekurverne (se [Overflader gennem et kurvenet](topic:gordon-surfaces)), lukket med flade endeflader til et massivt legeme. Panelet angiver, hvor tæt det følger dem. Hvert snit skal da være en skitse (et punkt eller en flade kan ikke tage en ledekurve), og **Retlinjet** gælder ikke. En ledekurve, der misser et snit med mere end 0.01 mm, afvises med afstanden.

Kontrolleret: to cirkler (20 mm og 10 mm i diameter over 40 mm) med fire rette ledekurver giver keglestubbens volumen inden for 0.000002 %; buer, der buler 5 mm ud, giver en tønde, som følger hver ledekurve inden for 0.00001 mm.

## Udtræksvinkel

Udtræksvinkel vipper flader, så en del kan tages ud af en form.

1. Vælg {{ui:Mere}}, og derefter {{ui:Udtræksvinkel}} (eller {{key:Shift}}+klik på flader først). Uden noget valgt er du i valgtilstand: klik på hver flade, der skal vippes, og vælg derefter {{ui:Færdig}}.
2. Angiv **Vinkel (°)**, **Neutralplan** (hvor fladerne bevarer deres størrelse) og **Trækretning** (som standard neutralplanets normal).

En positiv vinkel hælder fladen indad langs trækket og fjerner materiale; en negativ tilføjer det. Neutralplanet starter som topplanet. I denne version kan kun plane flader få udtræksvinkel: en cylinder, kegle eller frit formet flade giver meldingen » Udtræksvinkel: i denne version kun plane flader (netkernen bygger den).« En blok på 100 × 100 × 50, der får udtræksvinkel 5° om sin bund, bliver en kegleafsnit på præcis h/3·(a² + b² + ab), med b = a − 2h·tan 5°.

## Meddelelser

| Meddelelse | Hvad du gør |
|---|---|
| » Profilens plan skal gå gennem den ene ende af banen …« | Flyt profilskitsen til banens start (eller ende) |
| » Banen har et hul: dens kurver er ikke samlet ende mod ende …« | Saml banens kurver; i separate skitser skal deres ender mødes præcist |
| » Et loft-snit kræver præcis én lukket sløjfe« | Del skitsen, eller fjern den ekstra sløjfe |
| » … kan ikke få udtræksvinkel om dette neutralplan …« | Fladen er parallel med neutralplanet eller møder det ikke |
| » Udtræksvinkel: i denne version kun plane flader (netkernen bygger den).« | En valgt flade er buet. Fjern den; få kun plane flader udtræksvinkel |

:::note
Ikke lavet endnu: vridende sweeps, tyndvæggede sweeps og overfladesweeps, loft-ledekurver og endetangens, udtræksvinkel på cylindre, kegler og frit formede flader.
:::
