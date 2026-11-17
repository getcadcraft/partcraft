---
title: Rammer av stålprofiler
summary: Legg stålprofiler langs linjene i en eller flere skisser for å lage en sveiset ramme: geringer eller stumpe hjørner, deler kappet til der de møtes, endehetter, knutepunktsplater og en kappeliste med lengder og endevinkler.
keywords: sveisekonstruksjon, konstruksjonsdel, ramme, stålramme, rør, firkantrør, hss, rhs, shs, chs, bredflens, i-bjelke, w-bjelke, ipe, hea, heb, kanal, upn, vinkel, gering, stumpskjøt, utklinkning, endehette, knutepunktsplate, kappeliste
from: 59071e5a
---

En **Konstruksjonsdel** legger en stålprofil langs hver linje i de valgte skissene. Tegn rammen som linjer (hver linje blir én del), og velg så profilen: delene bygges, hjørnene trimmes og forlenges, og en kappeliste sier hvor lang hver bit skal kappes og i hvilken vinkel.

## Lag en ramme

1. Tegn rammen som linjer i en skisse, for eksempel et rektangel på toppplanet. Linjer merket som konstruksjon utelates.
2. Med skissen valgt, velg {{ui:Mer}} › {{ui:Konstruksjonsdel}}. Hver linje i skissen får en del.
3. I panelet velg **Familie** og **Format** for profilen. Familiene er AISC-tabellene (W, S, C, L, HSS-rør, Rør) og EN 10365 (IPE, HEA, HEB, UPN).

### En ramme i 3D

Linjer fra flere skisser danner én ramme: en toppramme tegnet på et plan over, og bena tegnet på plan som står loddrett, møtes i endene i 3D. Under **Langs linjene i** i panelet, kryss av for hver skisse hvis linjer delene følger. Ender som møtes innenfor en mikrometer, forbindes.

## Sett profilen på linjen

- **Rotasjon (°)** dreier profilen om linjen. En bjelke står med sin høyde loddrett (på en vertikal del peker høyden mot fronten).
- **På linjen** velger hvilket punkt på profilen som sitter på linjen: senter, eller et hjørne eller midten av en side i profilens omriss. «Nederst midt» plasserer en ramme oppå skisseplanet i stedet for gjennom det.

## Hjørner og skjøter

| Der delene møtes | Hva som skjer |
|---|---|
| To deler ende mot ende, **Hjørner: Gering** | Begge kappes i planet midt mellom dem, som en bilderamme |
| To deler ende mot ende, **Hjørner: Stumpt** | Den første delen går videre til den fjerne flaten på den andre; den andre kappes vinkelrett ved den første delens nære flate |
| En del ender midt på en annen (en T) | Den kappes for å passe mot den andre delens utside |
| Tre eller flere ender i ett punkt | Den første går rett videre forbi de andre; de andre kappes for å passe mot den |

Den første delen er den som har linjen først: linjene beholder rekkefølgen de ble tegnet i, skisse for skisse i den rekkefølgen skissene ble krysset av.

## Endehetter og knutepunktsplater

- **Endehetter** lukker hver fri ende med en plate i profilens omriss, med tykkelsen som settes, utenfor enden.
- **Knutepunktsplater** setter en trekantet plate i hvert hjørne der to deler møtes i en vinkel: **Knutepunktsplatestørrelse** langs hver del fra hjørnet, **Knutepunktsplatetykkelse** på tvers, sentrert på hjørnets plan.

## Kappelisten

Panelet lister hver bit, med like biter gruppert: profilen, lengden (langt punkt til langt punkt, slik man merker den for sagen), hvordan hver ende kappes (vinkelrett, en vinkel fra vinkelrett, eller kappet til passform), og hvilke deler de tilhører. Endehetter og knutepunktsplater står oppført med sine størrelser. {{ui:Lagre kappelisten (CSV)}} lagrer den til et regneark.

En del kappet til passform mot et rør med runde hjørner går litt inn i rørets hjørneradius, så lengden fra langt punkt til langt punkt er noen millimeter mer enn avstanden mellom flatene.

## Begrensninger

- Delene følger bare rette linjer; buer og splines i skissen utelates.
- Skjøtene er kappet, ikke sveiset: det tegnes ingen sveisesømmer, og rammen er ett volumlegeme.
- Profilene er tegnet fra tabellens mål: W-profiler med rotfilet, S-profiler og kanaler med parallelle flenser, rør med hjørneradier; hull, endeforberedelser og sveisespalter lages ikke automatisk.
- Konstruksjonsdeler bygges av nettkjernen. Med den eksakte kjernen på (bare for utviklere) sier de det og bygges ikke.
