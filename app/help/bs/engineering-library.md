---
title: Inženjerska biblioteka
summary: Udžbeničke formule kao čitljive skripte, u SI jedinicama, svaki rezultat sa svojim izvorom: protok u cijevima i kanalima, prenos toplote i izmjenjivači toplote, dijelovi pod pritiskom, dinamika gasova, svojstva vode i zraka, materijali i jedinice koje se provjeravaju. Čemu je svaka dobra i gdje staje.
keywords: inženjering, biblioteka, jedinice, Darcy-Weisbach, Colebrook, Reynolds, faktor trenja, Dittus-Boelter, Gnielinski, NTU, efektivnost, LMTD, rebro, Barlow, Lamé, mlaznica, izentropski, Mah, zagušeni tok, voda, zrak, svojstva, materijal, izvori
from: 786ef967
---

Inženjerska biblioteka je skup skripti u biblioteci radnog prostora Script (`craftlib/eng`). Svaka je funkcija koju možete čitati od vrha do dna, sa zaglavljem koje daje njenu **metodu**, njene **jedinice**, njene **granice**, njene **reference** i **provjeru** sa izračunatim brojem. Koriste SI jedinice svuda i vraćaju veličine koje nose **jedinicu** i **izvor**, pa list podataka može ispisati odakle je svaki broj.

## Jedinice koje se provjeravaju

`to_si(10, 'bar', 'Pa')` pretvara vrijednost i odbija jedinicu koja mjeri nešto drugo (dužinu tamo gdje se očekuje pritisak). `from_si`, `unit_convert(1, 'bar', 'psi')` i `unit_kind('W/(m K)')` ("thermal conductivity") rade isto. `temp_k(25, 'C')` i `temp_from_k` pretvaraju temperature, koje imaju pomak.

## Svojstva

- `fluid('water', T)` i `fluid('air', T, p)`: gustina, viskoznost, provodljivost, specifična toplota, Prandtlov broj. Voda 0 do 100 °C, zrak 250 do 600 K; izvan toga staje umjesto da ekstrapolira.
- `material('ss304')`: Youngov modul, Poissonov koeficijent, gustina, granica tečenja, provodljivost, specifična toplota, širenje: vrijednosti na sobnoj temperaturi iz istih listova podataka kao Simulation. Stvaran dizajn koristi certifikovane brojke dobavljača. Krive temperature još nisu napravljene.

## Protok u cijevima i kanalima

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminarno, zatim Colebrookova jednačina za turbulentni tok; opseg 2300 do 4000 nema pouzdanu formulu, i to kaže), `darcy_weisbach`, `minor_loss`, `pipe_flow` (okrugla cijev, sve odjednom) i `rect_channel` (laminarni pravougaoni kanali prema Shah i London aproksimaciji).

## Prenos toplote

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (bira laminarno ili turbulentno i imenuje korelaciju), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` i `ntu_for` (relacije efektivnosti-NTU za protivstrujni, paralelni, plašt-i-cijevi i poprečni tok, te jedan tok koji se mijenja) i `hx_size` (veličina UA koju zadatak traži; kaže koliko je moguće kad zadatak ne može biti ispunjen).

## Dijelovi pod pritiskom

`allowable_stress` (granica tečenja podijeljena faktorom sigurnosti), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, po obodnom ili smičnom kriteriju) i `wall_sphere`. To su udžbeničke margine, **nisu proračun po pravilniku za posude pod pritiskom**: bez dodatka za koroziju, faktora spoja ili faktora pravilnika.

## Dinamika gasova

`isentropic` (odnosi pri Mahovom broju), `mach_from_area`, `choked_flow`, `throat_area` i `exit_mach`, za idealan gas bez trenja, toplote ili udarnih talasa.

## Provjeri rezultat

`check_stress`, `check_thermal` i `check_flow` pokreću vlastite solvere programa PartCraft za naprezanje, provodljivost i protok na generisanom dijelu iz skripte, i vraćaju maksimalno naprezanje i pomak, temperature i toplotni tok, te propusnost mreže kanala. Ne mijenjaju ništa u solverima. Provjere naprezanja i temperature koriste voksele, pa je zakrivljena površina stepenasta, a naprezanje u oštrom unutrašnjem uglu ili pod tačkastim opterećenjem zavisi od veličine voksela.
