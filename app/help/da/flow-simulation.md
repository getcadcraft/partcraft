---
title: Simulér væskestrømning (strømningsundersøgelse)
summary: Strømning gennem kanalerne inde i en del eller rundt om den i en kasse: indløb, udløb, luft, vand eller din egen væske, derefter hastighed og tryk på et flytteligt snitplan, strømlinjer, fladetryk, trykfald, massebalance, træk og løft, og hvad den laminære metode kan og ikke kan fortælle dig.
keywords: strømning, CFD, væske, beregningsmæssig væskedynamik, strømningssimulering, luft, vand, viskositet, massefylde, Reynolds-tal, laminær, turbulent, trykfald, tryktab, indløb, udløb, låg, hætte, hastighed, strømningshastighed, volumenstrøm, liter pr. minut, statisk tryk, strømlinjer, snitplan, sektionsplan, træk, løft, træk-koefficient, løft-koefficient, frontareal, ekstern strømning, intern strømning, rør, kanal, forgrener, dyse, lattice Boltzmann, residual, konvergens
from: 7dc75f29
---

En **Strømning**-undersøgelse beregner, hvordan en væske bevæger sig gennem kanalerne inde i din del (**intern**) eller rundt om den (**ekstern**). Som standard er den **laminær, inkompressibel, isotermisk og newtonsk**: jævn strømning af en væske, hvis massefylde og viskositet forbliver faste, uden varme, turbulens og tyngdekraft. En **eksperimentel** turbulent model findes også, kun til kvalitative mønstre (se nedenfor). Den arbejder på de navngivne flader, som mesh-kernen giver delen (se [Mesh-kernen](topic:solid-kernels)).

Vælg **Simulering** i boksen **Arbejdsområde**, tryk **Ny undersøgelse**, hvis der ikke findes en, og sæt **Type** til **Strømning (CFD)**. **Strømningsmodel** er **Laminær** (standard) eller **Turbulent (Spalart–Allmaras, eksperimentel)**: se **Turbulent strømning (eksperimentel)** nedenfor. Undersøgelsens strukturelle indstillinger bevares, så du kan skifte tilbage. Strømningsindstillingerne gemmes i delfilen, og hver ændring kan fortrydes.

## Vælg væsken og cellerne

- **Væske**: luft eller vand ved 20 °C, eller **Brugerdefineret** med din egen massefylde (kg/m³) og dynamiske viskositet (Pa·s). Luft bruger den ideelle gaslov og Sutherlands lov (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); vand bruger IAPWS-værdierne (998.21 kg/m³, 1.0016 mPa·s).
- **Cellestørrelse**: væskerummet fyldes med ens kubber. Lad feltet stå tomt for en automatisk størrelse; panelet viser gitteret. Hver åbning og kanal bør være **mindst 8 til 10 celler på tværs** for brugbare tal; mindre celler er mere nøjagtige og langsommere (dobbelt så fint er cirka 16 gange arbejdet).
- **Vægge**: **Interpoleret** følger buede vægge mellem celler (standard); **Bounce-back** behandler væggene som kubetrappen.

## Strømning inde i delen

Væskerummet skal være lukket. Tilføj et **Indløb** og et **Udløb** i panelet, og klik derefter på deres flader i visningen:

1. **Den plane flade omkring en åbning** — kanten ved en rørende, en portflade. PartCraft lukker åbningens hul dér med et låg. Alle huller i fladen hører til den åbning, så når et indløb og et udløb åbner sig på samme flade, modellér i stedet en tynd hætte over en af dem.
2. **Den indvendige flade på en hætte** — som i andre CAD-værktøjer: modellér en tynd plade (en ekstrudering) over åbningen, og vælg dens flade, der rører væsken.

For et indløb sætter du en **hastighed** (m/s, ensartet over åbningen, ind i delen) eller en **volumenstrøm** (L/min). For et udløb sætter du det **statiske tryk** (Pa, relativt). Hvis en åbning står åben, eller en væg er tyndere end en celle, forbinder indersiden sig med ydersiden, og beregningen stopper med meddelelsen »Intet lukket væskerum«.

## Strømning rundt om delen

Sæt **Strømning** til **Ekstern**, **Hastighed**, retningen den strømmer hen imod, og hvor langt kassen rækker opstrøms, nedstrøms og til siderne (tom: henholdsvis 1, 3 og 1 gange delens største størrelse). Kassens flade, strømmen går ind ad, er et indstrømningsområde, fladen den forlader ad, er et udstrømningsområde ved 0 Pa, og fladerne langs strømmen er glidende. En for lille kasse presser strømmen forbi delen og øger træk. **Referenceareal** er det areal, træk- og løftkoefficienterne bruger (tom: delens frontareal set i strømningsretningen). Løft måles langs +Y, medmindre du vælger en anden retning.

## Beregn og læs resultaterne

Tryk **Beregn**. Beregningen kører i baggrunden med antal trin, residualet og en residualgraf; **Stop** afslutter den. Den stopper, når residualet (hvor meget hastighedsfeltet stadig ændrer sig pr. trin) er under målet, og trykfaldet eller træk er faldet til ro. Hvis den når grænsen for antal trin først, står der i panelet **Ikke konvergeret** med rødt: tallene er den sidste tilstand, ikke et stationært svar.

- **Snitplan**: hastighed eller statisk tryk på et plan gennem modellen; vælg dens normal (X, Y eller Z), og træk skyderen for at flytte den. Hold musen over den for at læse værdierne.
- **Strømlinjer**: fra indløbene (intern) eller fra en række hen over indstrømningsenden af kassen i snitplanet (ekstern).
- **Del**: massiv, gennemsigtig (for at se planet indeni), fladetryk eller skjult.
- **Tabel**: Reynolds-tal, trykfald (middelstatisk tryk ved indløbene minus ved udløbene), strømningen og middeltrykket for hver åbning, kraften på delen, træk og løft med deres koefficienter og referenceareal (ekstern), massebalancen (indstrømning mod udstrømning), mesh og løser.

## Turbulent strømning (eksperimentel)

**Strømningsmodel › Turbulent (Spalart–Allmaras, eksperimentel)** løser den tidsmidlede turbulente strømning (stationær RANS): Spalart–Allmaras-modellen giver en hvirvelviskositet i hver celle, og cellerne ved væggene bruger Spaldings vægslov i stedet for at opløse det tynde lag dér. Den er fuldt turbulent overalt (ingen laminære områder, ingen overgang).

**Den bestod ikke sine nøjagtighedstest.** Panelet, resultaterne og tabellen siger det ved hver turbulent undersøgelse, og advarslen kan ikke lukkes. Brug den til **kvalitative strømningsmønstre** — hvor strømningen løsner sig, cirkulerer eller accelererer — **ikke til designtal**.

| Kontrol | Reference | Resultat |
|---|---|---|
| Flad kanalfriktion, første celle ved y⁺ 49 / 98 | Deans korrelation | +3.3 % / +4.7 % |
| Kanal med opløst væg (y⁺ ≈ 3), Re_τ 180: bulkhastighed | Moser, Kim & Mansour DNS | −1 % |
| Flad kanal, y⁺ 7–15 eller 190–380 | Deans korrelation | +9 til +22 % |
| Rørfriktion gennem kubecellerne, fuldt udviklet, 10–30 celler på tværs | Colebrook | 30 til 34 % for høj |
| Genfastgørelse bag et bagudvendt trin, 6–14 celler pr. trinhøjde | Driver & Seegmiller, 6.26 trinhøjder | 21 til 39 % for kort |

Resultaterne forbedres kun langsomt med finere celler. Efter beregningen viser tabellen **første-celle y⁺** (min, middel og maks over vægcellerne) og advarer uden for det kontrollerede interval 1 til 400; sigt efter cirka 30 til 300. **Køretid:** de automatiske celler er dimensioneret til højst nogle få minutter på én bærbar kerne (panelet viser det værste tilfælde for gitteret og grænsen for trin; et lille rør falder til ro på under 20 sekunder). Halvering af cellestørrelsen koster cirka 16 gange så lang tid. Kræfter på delen kommer fra en impulsbalance over åbningerne eller kassen.

**Arbejdet indtil nu:** vægcellerne svarer nu deres egen forskydningsspænding til vægloven, hvilket bragte rør- og trinfejlene ned på tallene ovenfor uden at ændre resultaterne for den flade kanal. Det var ikke nok til designtal. Næste skridt er finere celler nær væggene.

## Hvad den kan og ikke kan fortælle dig

- **Den laminære model** er kun laminær. I rør bliver strømningen turbulent over et Reynolds-tal på cirka 2,000 til 4,000; bag stumpe legemer begynder kølvandet at afgive hvirvler over cirka 50. Panelet advarer ved disse punkter. Et laminært resultat for turbulent strømning underestimerer trykfald og rammer forkert for træk. Den eksperimentelle turbulente model (ovenfor) dækker turbulent strømning kvalitativt; dens tal er endnu ikke pålidelige.
- **Metode:** gittermetoden lattice Boltzmann (D3Q19, to-relaxationstids-kollision) kørt til en stationær tilstand. Den er let komprimerbar inde i delen; PartCraft holder massefylde-ændringer til få procent. Hvis strømningen er for hurtig til cellerne, nægter den at starte og siger, hvor meget mindre cellerne skal være.
- **Kontrolleret mod:** Hagen–Poiseuille-strømning i et rør gennem en del (trykgradient inden for 1 % ved 20 celler på tværs), lågdrevet hulrum fra Ghia et al. (inden for 0.75 % af lågens hastighed) og Schäfer–Turek-cylinder-benchmarket (træk inden for 1 % ved 10 celler pr. diameter).
- Ikke modelleret: varmeoverførsel, turbulens med designnøjagtighed (den turbulente model er eksperimentel), frie overflader, kavitation, tyngdekraft, bevægelige dele, ikke-newtonske væsker, ru vægge. Laboratorieversion: kontrollér vigtige resultater på en anden måde.
