---
title: Rammer af stålprofiler
summary: Læg stålprofiler langs linjerne i en eller flere skitser for at lave en svejst ramme: gerings- eller stødhjørner, stænger, der skæres til at passe, hvor de mødes, endehætter, samleplader og en tilskæringsliste med længder og endevinkler.
keywords: svejsekonstruktion, stålprofil, ramme, stålramme, hulprofil, kvadratisk hulprofil, hss, rhs, shs, rør, chs, bredflange, i-profil, w-profil, ipe, hea, heb, kanal, upn, vinkel, gering, stød, stødsamling, udskæring, endehætte, samleplade, tilskæringsliste
from: 59071e5a
---

En **Stålprofil** lægger et stålprofil langs hver linje i de skitser, du vælger. Tegn rammen som linjer (hver linje er én stang), og vælg derefter profilet: stængerne bygges, deres hjørner beskæres og forlænges, og en tilskæringsliste siger, hvor lang hver del skal skæres, og i hvilken vinkel.

## Lav en ramme

1. Tegn rammen som linjer i en skitse, for eksempel et rektangel på topplanet. Linjer markeret som konstruktion udelades.
2. Med skitsen valgt vælger du {{ui:Mere}} › {{ui:Stålprofil}}. Hver linje i skitsen får en stang.
3. I panelet vælg **Familie** og **Størrelse** for profilet. Familierne er AISC-tabellerne (W, S, C, L, HSS-hulprofiler, Rør) og EN 10365 (IPE, HEA, HEB, UPN).

### En ramme i 3D

Linjer fra flere skitser danner én ramme: et rektangel i toppen tegnet på et plan ovenfor, og benene tegnet på planer, der står lodret op, mødes i deres ender i 3D. Under **Langs linjerne i** i panelet sætter du kryds ved hver skitse, hvis linjer stængerne følger. Ender, der mødes inden for et mikrometer, samles.

## Sæt profilet på dets linje

- **Roter (°)** drejer profilet om dets linje. En bjælke står med sin dybde lodret (på en lodret stang peger dens dybde mod forsiden).
- **På linjen** vælger, hvilket punkt af profilet der sidder på linjen: centrum, eller et hjørne eller midten af en side på profilets kontur. »Nederst midt« sætter en ramme oven på skitseplanet i stedet for gennem det.

## Hjørner og samlinger

| Hvor stænger mødes | Hvad sker der |
|---|---|
| To stænger ende til ende, **Hjørner: Gering** | Begge skæres i planet midt imellem dem, som en billedramme |
| To stænger ende til ende, **Hjørner: Stød** | Den første går lige igennem til den fjerne flade af den anden; den anden skæres vinkelret ved den første's nære flade |
| En stang ender midt på en anden (et T) | Den skæres til at passe mod den andens ydre side |
| Tre eller flere ender i ét punkt | Den første går lige igennem forbi de andre; de andre skæres til at passe mod den |

Den første stang er den, hvis linje kommer først: linjer beholder den rækkefølge, de blev tegnet i, skitse for skitse i den rækkefølge, skitserne blev krydset af.

## Endehætter og samleplader

- **Endehætter** lukker hver fri ende med en plade i profilets kontur, med den tykkelse du angiver, udenfor enden.
- **Samleplader** sætter en trekantet plade i hvert hjørne, hvor to stænger mødes i en vinkel: **Samlepladestørrelse** langs hver stang fra hjørnet, **Samlepladetykkelse** på tværs, centreret på hjørnets plan.

## Tilskæringslisten

Panelet lister hvert stykke, og ens stykker grupperes: profilet, længden (yderpunkt til yderpunkt, som du ville markere den til saven), hvordan hver ende er skåret (vinkelret, en vinkel fra vinkelret, eller tilpasset), og hvilke stænger de er. Endehætter og samleplader står på listen med deres størrelser. {{ui:Gem tilskæringslisten (CSV)}} gemmer den til et regneark.

En stang, der er skåret til at passe mod et hulprofil med afrundede hjørner, går en smule ind i det hulprofils hjørneradius, så dens længde yderpunkt til yderpunkt er nogle få millimeter mere end mellemrummet mellem fladerne.

## Begrænsninger

- Stænger følger kun rette linjer; buer og splines i skitsen udelades.
- Samlingerne er skåret, ikke svejst: der tegnes ingen svejsesømme, og rammen er ét massivt legeme.
- Profilerne tegnes ud fra tabelmålene: W-profiler med deres rodafrunding, S og kanaler med parallelle flanger, hulprofiler med hjørneradier; huller, endeforberedelser og svejsespalter laves ikke for dig.
- Stålprofiler bygges af mesh-kernen. Med den eksakte kerne tændt (kun udviklere) siger de det og bygges ikke.
