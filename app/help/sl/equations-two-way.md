---
title: Enačbe v obe smeri
summary: Spremenite parameter in del sledi; v gnano število vpišite novo velikost, PartCraft pa izračuna parameter za njim in vpraša, kateri, kadar se lahko spremeni več.
keywords: enačbe, reši nazaj, gnana mera, dvosmerno, obrat, iskanje cilja, parametri, povezane vrednosti, kateri parameter
from: 82dc0269
---

Enačba, kot je **Extrude1 globina = thick + extra**, deluje v obe smeri.

## Naprej: spremenite parameter

Na zavihku {{ui:Parametri}} spremenite `thick` z 20 na 30. Globina Extrude1 postane 30 + extra, del pa se obnovi.

## Nazaj: spremenite gnano število

1. Kliknite "Extrude1" v zgodovini. Njeno polje **Globina (mm)** kaže **ƒ**: enačba jo poganja.
2. Vpišite želeno velikost, na primer `40`, in pritisnite {{key:Enter}}.

PartCraft reši parameter za enačbo, skozi toliko korakov, kolikor jih je treba (`depth = hub_h`, `hub_h = disc_t + 50`: vpis višine spremeni `disc_t`). Vrstica stanja pove, kaj se je spremenilo, na primer da je extra šel z 5 na 15.

Kadar dva ali več parametrov poganja število, se pojavi okno, ki vpraša **Kateri parameter naj se spremeni?**, in jih našteje. Kliknite enega; drugi ohranijo svoje vrednosti. {{ui:Prekliči}} ne spremeni ničesar.

Isto deluje v skici: dvokliknite gnano mero, vpišite vrednost in pritisnite {{key:Enter}}. Deluje tudi v stolpcu **Vrednost** tabele parametrov, za parameter, ki je sam izraz.

## Kadar ne gre

- Število, ki mora biti celo (število ponovitev vzorca) ali ostati v obsegu (kot kot do 360°), je zavrnjeno, še preden se kaj spremeni.
- Enačba iz samih fiksnih števil (`=40`) nima parametra za spremembo: vpisano število jo nadomesti.
- Če nobena vrednost parametra ne da velikosti, ki ste jo vpisali, vrstica stanja to pove in nič se ne spremeni.
- Skica, ki je z novo vrednostjo ni mogoče rešiti, obdrži prejšnje vrednosti, vrstica stanja pa imenuje skico.

Vsaka sprememba, v katero koli smer, je en korak za {{key:Mod+Z}} in {{key:Mod+Y}}.
