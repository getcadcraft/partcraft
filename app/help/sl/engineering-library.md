---
title: Inženirska knjižnica
summary: Učbeniške formule kot berljive skripte, v enotah SI, vsak rezultat z virom: tok v ceveh in kanalih, prenos toplote in toplotni menjalniki, tlačni deli, plinska dinamika, lastnosti vode in zraka, materiali in enote, ki se preverjajo. Čemu je vsaka dobra in kje se neha.
keywords: inženirstvo, knjižnica, enote, Darcy-Weisbach, Colebrook, Reynolds, koeficient trenja, Dittus-Boelter, Gnielinski, NTU, učinkovitost, LMTD, rebro, Barlow, Lamé, šoba, izentropni, Mach, zadušen tok, voda, zrak, lastnosti, material, viri
from: 786ef967
---

Inženirska knjižnica je niz skript v knjižnici delovnega okolja Script (`craftlib/eng`). Vsaka je funkcija, ki jo lahko berete od zgoraj navzdol, z glavo, ki navaja njeno **metodo**, njene **enote**, njene **meje**, njene **reference** in **preverjanje** z izračunanim primerom. Povsod uporabljajo enote SI in vračajo količine, ki nosijo **enoto** in **vir**, tako da podatkovni list lahko izpiše, od kod prihaja vsako število.

## Enote, ki se preverjajo

`to_si(10, 'bar', 'Pa')` pretvori vrednost in zavrne enoto, ki meri nekaj drugega (dolžino, kjer je pričakovan tlak). `from_si`, `unit_convert(1, 'bar', 'psi')` in `unit_kind('W/(m K)')` ("toplotna prevodnost") delujejo enako. `temp_k(25, 'C')` in `temp_from_k` pretvarjata temperature, ki imajo odmik.

## Lastnosti

- `fluid('water', T)` in `fluid('air', T, p)`: gostota, viskoznost, prevodnost, specifična toplota, Prandtlovo število. Voda od 0 do 100 °C, zrak od 250 do 600 K; zunaj tega se ustavi, namesto da bi ekstrapoliral.
- `material('ss304')`: Youngov modul, Poissonovo število, gostota, meja tečenja, prevodnost, specifična toplota, raztezek: vrednosti pri sobni temperaturi iz istih podatkovnih listov kot Simulacija. Pravo načrtovanje uporabi certificirane vrednosti dobavitelja. Temperaturne krivulje še niso izdelane.

## Tok v ceveh in kanalih

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminarno, nato Colebrookova enačba za turbulentni tok; območje od 2300 do 4000 nima zanesljive formule in to pove), `darcy_weisbach`, `minor_loss`, `pipe_flow` (okrogla cev, vse hkrati) in `rect_channel` (laminarni pravokotni kanali po prileganju Shaha in Londona).

## Prenos toplote

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (izbere laminarno ali turbulentno in imenuje korelacijo), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` in `ntu_for` (relacije učinkovitosti-NTU za protitok, sovtočni tok, lupinasto-cevni, prečni tok in en spreminjajoč se tok) ter `hx_size` (velikost UA, ki jo obremenitev potrebuje; pove, koliko je mogoče, kadar obremenitve ni mogoče doseči).

## Tlačni deli

`allowable_stress` (meja tečenja deljena z varnostnim faktorjem), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, po kriteriju obročne ali strižne napetosti) in `wall_sphere`. To so učbeniške rezerve, **ne izračun po predpisu za tlačne posode**: brez dodatka za korozijo, učinkovitosti spoja ali faktorjev predpisa.

## Plinska dinamika

`isentropic` (razmerja pri Machovem številu), `mach_from_area`, `choked_flow`, `throat_area` in `exit_mach`, za popolni plin brez trenja, toplote ali udarnih valov.

## Preverite rezultat

`check_stress`, `check_thermal` in `check_flow` zaženejo lastne reševalnike napetosti, prevajanja in pretoka PartCraft-a na zgrajenem delu iz skripte ter preberejo največjo napetost in pomik, temperature in toplotni tok ter prepustnost kanalne mreže. Ne spreminjajo ničesar v reševalnikih. Preverjanji napetosti in temperature uporabljata voksle, zato je ukrivljena ploskev stopničasta, napetost na ostrem notranjem kotu ali pod točkovno obremenitvijo pa je odvisna od velikosti vokslja.
