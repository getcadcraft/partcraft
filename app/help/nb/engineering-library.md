---
title: Ingeniørbiblioteket
summary: Lærebokformler som lesbare skript, i SI-enheter, med hvert resultat og dets kilde: rør- og kanalstrømning, varmeoverføring og varmevekslere, trykkdeler, gassdynamikk, egenskaper for vann og luft, materialer og enheter som kontrolleres. Hva hver er god for, og hvor den slutter.
keywords: ingeniørarbeid, bibliotek, enheter, Darcy-Weisbach, Colebrook, Reynolds, friksjonsfaktor, Dittus-Boelter, Gnielinski, NTU, effektivitet, LMTD, ribbe, Barlow, Lamé, munnstykke, isentropisk, Mach, kvelning, vann, luft, egenskaper, materiale, kilder
from: 786ef967
---

Ingeniørbiblioteket er et sett skript i Skript-arbeidsområdets bibliotek (`craftlib/eng`). Hver er en funksjon du kan lese fra topp til bunn, med en overskrift som gir dens **metode**, **enheter**, **begrensninger**, **referanser** og en **kontroll** med et utregnet tall. De bruker SI-enheter gjennomgående og returnerer størrelser som har en **enhet** og en **kilde**, så et dataark kan skrive ut hvor hvert tall kom fra.

## Enheter som kontrolleres

`to_si(10, 'bar', 'Pa')` konverterer en verdi og avviser en enhet som måler noe annet (en lengde der et trykk forventes). `from_si`, `unit_convert(1, 'bar', 'psi')` og `unit_kind('W/(m K)')` ("varmeledningsevne") fungerer på samme måte. `temp_k(25, 'C')` og `temp_from_k` konverterer temperaturer, som har en forskyvning.

## Egenskaper

- `fluid('water', T)` og `fluid('air', T, p)`: tetthet, viskositet, ledningsevne, spesifikk varme, Prandtl-tall. Vann 0 til 100 °C, luft 250 til 600 K; utenfor det stopper den i stedet for å ekstrapolere.
- `material('ss304')`: Youngs modul, Poissons forhold, tetthet, flytegrense, ledningsevne, spesifikk varme, utvidelse: romtemperaturverdier fra de samme dataarkene som Simulering. En reell konstruksjon bruker leverandørens sertifiserte tall. Temperaturkurver er ikke bygget ennå.

## Strømning i rør og kanaler

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminær, deretter Colebrook-ligningen for turbulent strømning; området 2300 til 4000 har ingen pålitelig formel, og den sier det), `darcy_weisbach`, `minor_loss`, `pipe_flow` (rund rør, alt på en gang) og `rect_channel` (laminære rektangulære kanaler etter Shah- og London-tilpasningen).

## Varmeoverføring

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (velger laminær eller turbulent og navngir korrelasjonen), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` og `ntu_for` (effektivitet-NTU-relasjonene for motstrøm, medstrøm, skall-og-rør, kryssstrøm og en enkelt endrende strøm) og `hx_size` (størrelsen UA et krav trenger; den sier hvor mye som er mulig når kravet ikke kan oppfylles).

## Trykkdeler

`allowable_stress` (flytegrense delt på en sikkerhetsfaktor), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, etter ringspennings- eller skjærkriteriet) og `wall_sphere`. Dette er lærebokmarginer, **ikke en beregning etter trykkbeholderkode**: ingen korrosjonstillegg, sammenføyningsfaktor eller kodefaktorer.

## Gassdynamikk

`isentropic` (forholdene ved et Mach-tall), `mach_from_area`, `choked_flow`, `throat_area` og `exit_mach`, for en ideell gass uten friksjon, varme eller støtbølger.

## Kontroller resultatet

`check_stress`, `check_thermal` og `check_flow` kjører PartCraft sine egne løsere for spenning, varmeledning og strømning på en generert del fra skriptet, og leser tilbake maksimal spenning og forskyvning, temperaturene og varmestrømmen, og permeabiliteten til et kanalnettverk. De endrer ingenting i løserne. Spennings- og temperaturkontrollene bruker voxels, så en buet flate blir en trappetrinnsform, og spenningen i et skarpt indre hjørne eller under en punktlast avhenger av voxelstørrelsen.
