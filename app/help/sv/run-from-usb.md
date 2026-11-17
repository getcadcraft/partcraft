---
title: Kör från en USB-enhet
summary: Vad ingenjörsverktygen skriver och var, så att CadCraft Studio kan köras från en USB-sticka eller valfri mapp utan installation och utan administratörsrättigheter: inställningar, generatorer, cacheminnen och delfiler, och vad som stannar på stickan.
keywords: usb, portabel, ingen installation, administratör, admin, inställningar, datamapp, generatorer, var filer skrivs, offline, integritet, värdåtkomst
from: 263efc79
---

Ingenjörsverktygen (generatorer, det tekniska biblioteket, kontrollerna och datafilerna) kräver **inga administratörsrättigheter** och **ingen installation**. De skriver bara det som anges här, och inget annat.

| Vad | Var det sparas |
|---|---|
| Dina delar, med deras genererade kroppar, datablad och kontroller | Delfilen (`.partcraft.json`) som du sparar, där du sparar den. |
| Generatorer du öppnat från filer | I appens egen lagring: webbläsarens lokala lagring i en webbsida, och mappen `data` bredvid programmet i den portabla Studio. Högst 20. |
| Inställningar (voxelstorlekar du angett, lösartrådar, layouten) | Samma appens lagring. |
| Datablad, fält, nät | Endast där du sparar dem: nedladdningen går dit du väljer. |

Verktygen gör **inga egna nätverksanrop**: de generatorer som levereras är filer i appens egen mapp, biblioteket och kontrollerna körs på din dator i en arbetsprocess som inte kan nå nätverket, och ingenjörsdatan (vatten- och luftegenskaper, material) finns inuti appen. En generator du öppnar från en fil läses på din dator och går ingenstans.

## Den portabla Windows-zippen och Linux

Den portabla Studio för Windows sparar sina inställningar, cacheminnen och tillägg i en mapp `data` bredvid programmet. Linux-AppImage sparar dem bredvid sig själv när en fil som heter `portable` ligger bredvid den; utan den filen använder den din hemmapp. Det finns ingen portabel Mac-version: systemet hindrar en app som laddats ner från att skriva bredvid sig själv. Skalets egna portabla anteckningar (hjälpen för `Studio`) listar vad programmet skriver.

## Värdåtkomst

Här begärs ingen värdåtkomst. Skrivare, seriella maskiner och USB-enheter är separata: de frågar när ett jobb behöver dem, en gång per enhet, och ingenting i generatorerna eller kontrollerna rör dem.
