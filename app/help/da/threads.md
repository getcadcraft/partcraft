---
title: Gevind på aksler og boringer, tegnet eller modelleret
summary: Sæt et ISO-metrisk eller trapezformet gevind på en hvilken som helst rund flade, en aksel eller en boring. Behold det kosmetisk til tegninger, eller modellér det rigtige skruelinjegevind til 3D-print, med en luft, så printede dele passer sammen.
keywords: gevind, gevind, modelleret gevind, skruelinje, helix, skrue, bolt, møtrik, aksel, boring, udvendigt gevind, indvendigt gevind, kosmetisk gevind, metrisk gevind, trapez, acme, ledeskrue, Tr16x4, M10, 3D-print, print, luft, pasning, venstregang, gevindboret
from: 4f6401cc
---

{{ui:Gevind}} sætter et gevind på runde flader: ydersiden af en aksel (et udvendigt gevind) eller indersiden af en boring (et indvendigt gevind). PartCraft afgør hvilket ud fra fladen.

Et gevind er **kosmetisk** i første omgang: fladen forbliver glat, visningen tegner gevindet som stiplede cirkler, og tegningsarket noterer det, fx »M10×1.5 - 6g, gevind 20 langt«. Markér **Modelleret** for at skære det rigtige skruelinjegevind ind i delen, til 3D-print eller en model, der skal se rigtig ud.

## Gevind på en aksel eller en boring

1. Byg akslen eller boringen i gevindets størrelse: en Ø10 aksel til en M10-bolt, eller en Ø8.5 boring (gevindboret) til en M10-møtrik.
2. Klik på den runde flade, og vælg derefter {{ui:Mere}} › {{ui:Gevind}}. Hvis ingen rund flade er valgt, beder PartCraft dig om at klikke på fladerne og derefter på {{ui:Færdig}}.
3. Kontrollér **Størrelse** i højre panel. **Tilpas til fladen** vælger størrelsen selv: for en aksel den størrelse, hvis ydre diameter er akslens; for en boring den størrelse, hvis indre diameter den passer til.

Gevindet starter ved fladens åbne ende, der hvor delen ikke fortsætter ad aksen: akslens frie ende, boringens munding. **Start i den anden ende** vender det om.

## Indstillinger

| Indstilling | Valg | Standard |
|---|---|---|
| **Form** | ISO-metrisk (60°), M1.6 til M64 grov; trapez (Tr, 30°), Tr8×1.5 til Tr60×9 | ISO-metrisk |
| **Størrelse** | Tilpas til fladen, eller én størrelse fra listen | Tilpas til fladen |
| **Hele fladen** | Fjern markeringen for at angive en **Længde (mm)**, målt fra starten | Markeret |
| **Start i den anden ende** | Gevindet løber fra fladens anden ende | Fra |
| **Gang** | Højre gang eller venstre gang | Højre gang |
| **Modelleret** | Skær det rigtige skruelinjegevind | Fra |
| **Luft (mm)** | Vises, når Modelleret er markeret: hvor meget mindre en akslens gevind er, og hvor meget større en borings, rundt om | 0.1 |

En størrelse, der ikke passer til fladen, bygges alligevel, skåret til fladen, og panelet siger det, fx »En Ø12 mm aksel er ikke M10's Ø10 mm«. Flere flader kan dele én Gevind-feature; med **Tilpas til fladen** får hver sin egen størrelse.

## Modellerede gevind til 3D-print

Et modelleret gevind følger den standardiserede grundprofil: ISO 68-1 for metriske gevind (flade toppe og bunde, 60° flanker), ISO 2901 for trapezgevind (30° flanker). **Luften** flytter hele profilen ind (en aksel) eller ud (en boring), så printede dele kan skrues sammen:

- **0.1 til 0.2 mm** passer til de fleste printere. Print først en testbolt og en møtrik.
- **0** er standardprofilen, til dele, der bearbejdes, eller til at kontrollere en pasning.

En bolt og en møtrik med samme luft rører aldrig hinanden langs flankerne: spalten mellem dem er dobbelt så stor som luften, rundt om.

:::tip
Fine gevindstigninger printes dårligt: M3 og mindre, eller en stigning under 0.5 mm, ligger tæt på, hvad en 0.4 mm dyse kan tegne. Modellér større gevind, og brug en varmeindsats eller et gevindboret hul til de små.
:::

Et modelleret gevind er en del af massivet: STL-, 3MF- og STEP-eksporter bærer det, og Mål måler det. Det gør delen tungere at genopbygge: et M10-gevind 20 langt er omkring 150,000 trekanter.

## Gevindborede huller

Et **Gevindboret (ISO-metrisk)** hul har også en kontakt **Modelleret**, med samme **Luft**. Se [Bor huller og forsænkninger i skitsepunkter](topic:holes).

## Når et gevind ikke bygges

- » Et gevind sættes på en rund flade (en cylinder): en aksel eller en boring.« Den valgte flade er plan eller buet på en anden måde.
- » Ingen standardstørrelse passer til en rund flade på Ø0.6 mm: vælg en størrelse.« Tilpas til fladen fandt intet inden for 12 % af fladen. Vælg en **Størrelse**, eller skift flade.
- » En flade, dette gevind sad på, er væk (…). Vælg den igen.« En tidligere ændring fjernede fladen. Klik på {{ui:Vælg flader}} og klik på fladen igen.

:::note
Tommegevind (UNC, UNF), rørgevind, koniske gevind, gevindudløb og afskårne gevindstarter er ikke lavet endnu. Den eksakte kerne viser et modelleret gevind som kosmetisk.
:::
