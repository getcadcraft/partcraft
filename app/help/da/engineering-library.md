---
title: Ingeniørbiblioteket
summary: Lærebogsformler som læsbare scripts i SI-enheder, med hvert resultat og dets kilde: rør- og kanalflow, varmeoverførsel og varmevekslere, trykdele, gasdynamik, egenskaber for vand og luft, materialer og enheder, der kontrolleres. Hvad hver er god til, og hvor den holder op.
keywords: ingeniør, bibliotek, enheder, Darcy-Weisbach, Colebrook, Reynolds, friktionsfaktor, Dittus-Boelter, Gnielinski, NTU, effektivitet, LMTD, finne, Barlow, Lamé, dyse, isentropisk, Mach, kvælet flow, vand, luft, egenskaber, materiale, kilder
from: 786ef967
---

Ingeniørbiblioteket er et sæt scripts i Script-arbejdsområdets bibliotek (`craftlib/eng`). Hver er en funktion, du kan læse fra top til bund, med en header, der angiver dens **metode**, dens **enheder**, dens **grænser**, dens **referencer** og en **kontrol** med et gennemregnet tal. De bruger SI-enheder overalt og returnerer størrelser, der bærer en **enhed** og en **kilde**, så et datablad kan skrive, hvor hvert tal kom fra.

## Enheder, der kontrolleres

`to_si(10, 'bar', 'Pa')` konverterer en værdi og afviser en enhed, der måler noget andet (en længde, hvor et tryk forventes). `from_si`, `unit_convert(1, 'bar', 'psi')` og `unit_kind('W/(m K)')` (»thermal conductivity«) virker på samme måde. `temp_k(25, 'C')` og `temp_from_k` konverterer temperaturer, som har en forskydning.

## Egenskaber

- `fluid('water', T)` og `fluid('air', T, p)`: densitet, viskositet, ledningsevne, specifik varmekapacitet, Prandtl-tal. Vand 0 til 100 °C, luft 250 til 600 K; uden for det stopper den i stedet for at ekstrapolere.
- `material('ss304')`: Youngs modul, Poissons tal, densitet, flydespænding, ledningsevne, specifik varmekapacitet, udvidelse: stuetemperaturværdier fra de samme datablade som Simulation. En rigtig konstruktion bruger leverandørens certificerede tal. Temperaturkurver er ikke lavet endnu.

## Flow i rør og kanaler

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, derefter Colebrook-ligningen for turbulent flow; området 2300 til 4000 har ingen pålidelig formel, og det siger den), `darcy_weisbach`, `minor_loss`, `pipe_flow` (rundt rør, alt på én gang) og `rect_channel` (laminære rektangulære kanaler efter Shah og London-tilpasningen).

## Varmeoverførsel

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (vælger laminar eller turbulent og navngiver korrelationen), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` og `ntu_for` (effektivitets-NTU-relationerne for modstrøm, medstrøm, skal-og-rør, krydsflow og en enkelt skiftende strøm) og `hx_size` (størrelsen UA, en ydelse kræver; den siger, hvor meget der er muligt, når ydelsen ikke kan opfyldes).

## Trykdele

`allowable_stress` (flydespænding over en sikkerhedsfaktor), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, efter ringspændings- eller forskydningskriteriet) og `wall_sphere`. Disse er lærebogsmargener, **ikke en beregning efter en trykbeholderkode**: ingen korrosionstillæg, samlingseffektivitet eller kodefaktorer.

## Gasdynamik

`isentropic` (forholdstallene ved et Mach-tal), `mach_from_area`, `choked_flow`, `throat_area` og `exit_mach`, for en ideal gas uden friktion, varme eller stød.

## Kontrollér resultatet

`check_stress`, `check_thermal` og `check_flow` kører PartCraft's egne spændings-, ledningsevne- og flow-løsere på en genereret del fra scriptet og læser tilbage den maksimale spænding og forskydning, temperaturerne og varmestrømmen samt permeabiliteten for et kanalnetværk. De ændrer intet i løserne. Spændings- og temperaturkontrollerne bruger voxels, så en buet flade bliver en trappe, og spændingen ved et skarpt indvendigt hjørne eller under en punktlast afhænger af voxelstørrelsen.
