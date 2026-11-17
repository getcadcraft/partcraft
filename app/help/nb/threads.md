---
title: Gjenger på aksler og borhull, tegnet eller modellert
summary: Sett en ISO metrisk eller trapesgjenge på en hvilken som helst rund flate, en aksel eller et borhull. Behold den som kosmetisk for tegninger, eller modeller den virkelige skruelinjegjengen for 3D-utskrift, med en klaring slik at utskrevne deler passer.
keywords: gjenge, gjenger, modellert gjenge, skruelinje, helix, skrue, bolt, mutter, aksel, borhull, utvendig gjenge, innvendig gjenge, kosmetisk gjenge, metrisk gjenge, trapes, acme, ledeskrue, Tr16x4, M10, 3D-utskrift, utskrift, klaring, passform, venstregjenge, gjenget hull
from: 4f6401cc
---

{{ui:Gjenge}} setter gjenger på runde flater: utsiden av en aksel (en utvendig gjenge) eller innsiden av et borhull (en innvendig gjenge). PartCraft forteller hvilken fra flaten.

En gjenge er **kosmetisk** først: flaten forblir glatt, visningen tegner gjengen som stiplede sirkler, og tegningsarket noterer den, for eksempel «M10×1.5 - 6g, gjenge 20 lang». Kryss av **Modellert** for å skjære den virkelige skruelinjegjengen inn i delen, for 3D-utskrift eller en modell som skal se riktig ut.

## Gjenge en aksel eller et borhull

1. Lag akselen eller borhullet i gjengens størrelse: en Ø10 aksel for en M10-bolt, eller et Ø8.5 borhull (gjengeborets størrelse) for en M10-mutter.
2. Klikk på den runde flaten, og velg {{ui:Mer}} › {{ui:Gjenge}}. Uten en valgt rund flate ber PartCraft deg klikke på flatene, og deretter {{ui:Ferdig}}.
3. I høyre panel, kontroller **Størrelse**. **Tilpass til flaten** velger størrelsen selv: for en aksel, størrelsen der ytterdiameteren er akselens; for et borhull, størrelsen der innerdiameteren passer.

Gjengen starter i flatens åpne ende, der delen ikke fortsetter langs aksen: den frie enden av en aksel, munningen av et borhull. **Start i den andre enden** snur det.

## Innstillinger

| Innstilling | Valg | Standard |
|---|---|---|
| **Form** | ISO metrisk (60°), M1.6 til M64 grov; trapesgjenge (Tr, 30°), Tr8×1.5 til Tr60×9 | ISO metrisk |
| **Størrelse** | Tilpass til flaten, eller én størrelse fra listen | Tilpass til flaten |
| **Hele flaten** | Fjern haken for å gi en **Lengde (mm)**, målt fra starten | Avkrysset |
| **Start i den andre enden** | Gjengen går fra den andre enden av flaten | Av |
| **Gjengeretning** | Høyregjenget eller venstregjenget | Høyregjenget |
| **Modellert** | Skjær den virkelige skruelinjegjengen | Av |
| **Klaring (mm)** | Vises når Modellert er avkrysset: hvor mye mindre en aksels gjenge er, og hvor mye større et borhulls er, rundt hele | 0.1 |

En størrelse som ikke passer flaten bygges likevel, skåret til flaten, og panelet sier det, for eksempel «En Ø12 mm aksel er ikke M10s Ø10 mm». Flere flater kan dele én Gjenge-funksjon; med **Tilpass til flaten** får hver sin størrelse.

## Modellerte gjenger for 3D-utskrift

En modellert gjenge følger den standard grunnprofilen: ISO 68-1 for metriske gjenger (flate topper og bunner, 60° flanker), ISO 2901 for trapesgjenger (30° flanker). **Klaringen** flytter hele profilen inn (en aksel) eller ut (et borhull), slik at utskrevne deler skrur seg sammen:

- **0.1 til 0.2 mm** passer for de fleste skrivere. Skriv ut en testbolt og -mutter først.
- **0** er standardprofilen, for deler som maskineres, eller for å sjekke en passform.

En bolt og en mutter med samme klaring tar aldri på hverandre langs flankene: avstanden mellom dem er to ganger klaringen, rundt hele.

:::tip
Fine stigninger skrives dårlig ut: M3 og mindre, eller en stigning under 0.5 mm, er nær det en 0.4 mm dyse kan tegne. Modeller større gjenger, og bruk en varmesettende innsats eller et gjenget hull for små.
:::

En modellert gjenge er en del av volumlegemet: STL-, 3MF- og STEP-eksport tar den med, og Mål måler den. Den gjør delen tyngre å bygge på nytt: en M10-gjenge 20 lang er omtrent 150 000 trekanter.

## Gjengede hull

Et **Gjenget (ISO metrisk)** hull har også en **Modellert**-bryter, med samme **Klaring**. Se [Bor hull og forsenkninger i skisse-punkter](topic:holes).

## Når en gjenge ikke bygges

- «En gjenge settes på en rund flate (en sylinder): en aksel eller et borhull.» Flaten som ble valgt er flat, eller buet på en annen måte.
- «Ingen standardstørrelse passer en rund flate på Ø0.6 mm: velg en størrelse.» Tilpass til flaten fant ingenting innenfor 12 % av flaten. Velg en **Størrelse**, eller endre flaten.
- «En flate denne gjengen var på er borte (…). Velg den igjen.» En tidligere endring fjernet flaten. Klikk {{ui:Velg flater}} og klikk flaten på nytt.

:::note
Tommegjenger (UNC, UNF), rørgjenger, koniske gjenger, gjengeutløp og avfasede gjengestarter er ikke bygget ennå. Den nøyaktige kjernen viser en modellert gjenge som kosmetisk.
:::
