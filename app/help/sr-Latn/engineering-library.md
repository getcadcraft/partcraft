---
title: Inženjerska biblioteka
summary: Udžbeničke formule kao čitljive skripte, u SI jedinicama, svaki rezultat sa svojim izvorom: tok u cevima i kanalima, prenos toplote i izmenjivači toplote, delovi pod pritiskom, dinamika gasova, svojstva vode i vazduha, materijali i jedinice koje se proveravaju. Čemu je svaka dobra i gde prestaje.
keywords: inženjerstvo, biblioteka, jedinice, Darcy-Weisbach, Colebrook, Reynolds, faktor trenja, Dittus-Boelter, Gnielinski, NTU, efektivnost, LMTD, rebro, Barlow, Lame, mlaznica, izentropski, Mah, zagušen protok, voda, vazduh, svojstva, materijal, izvori
from: 786ef967
---

Inženjerska biblioteka je skup skripti u biblioteci radnog prostora Skripta (`craftlib/eng`). Svaka je funkcija koju možete čitati od vrha do dna, sa zaglavljem koje daje njen **metod**, njene **jedinice**, njena **ograničenja**, njene **reference** i **proveru** sa rešenim brojem. Koriste SI jedinice svuda i vraćaju veličine koje nose **jedinicu** i **izvor**, pa list podataka može da ispiše odakle je došao svaki broj.

## Jedinice koje se proveravaju

`to_si(10, 'bar', 'Pa')` pretvara vrednost i odbija jedinicu koja meri nešto drugo (dužinu tamo gde se očekuje pritisak). `from_si`, `unit_convert(1, 'bar', 'psi')` i `unit_kind('W/(m K)')` („toplotna provodljivost“) rade na isti način. `temp_k(25, 'C')` i `temp_from_k` pretvaraju temperature, koje imaju pomak.

## Svojstva

- `fluid('water', T)` i `fluid('air', T, p)`: gustina, viskoznost, provodljivost, specifična toplota, Prandtl-ov broj. Voda 0 do 100 °C, vazduh 250 do 600 K; van toga zaustavlja se umesto ekstrapolacije.
- `material('ss304')`: Jungov modul, Poasonov koeficijent, gustina, granica tečenja, provodljivost, specifična toplota, širenje: vrednosti na sobnoj temperaturi iz istih listova podataka kao Simulacija. Stvaran projekat koristi sertifikovane brojke dobavljača. Temperaturne krive još nisu napravljene.

## Tok u cevima i kanalima

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminarno, zatim Colebrook-ova jednačina za turbulentni tok; opseg 2300 do 4000 nema pouzdanu formulu i to kaže), `darcy_weisbach`, `minor_loss`, `pipe_flow` (okrugla cev, sve odjednom) i `rect_channel` (laminarni pravougaoni kanali po Shah i London fitu).

## Prenos toplote

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (bira laminarni ili turbulentni i imenuje korelaciju), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` i `ntu_for` (relacije efektivnosti i NTU za protivstrujni, paralelni, cev u plaštu, poprečni i jedan tok koji se menja) i `hx_size` (veličinu UA koju opterećenje traži; kaže koliko je moguće kada opterećenje ne može da se ispuni).

## Delovi pod pritiskom

`allowable_stress` (granica tečenja podeljena faktorom sigurnosti), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, po kriterijumu obruča ili smicanja) i `wall_sphere`. To su udžbeničke margine, **nije proračun po pravilniku za sudove pod pritiskom**: nema dodatka za koroziju, faktora spoja ili faktora pravilnika.

## Dinamika gasova

`isentropic` (odnosi pri Mahovom broju), `mach_from_area`, `choked_flow`, `throat_area` i `exit_mach`, za idealan gas bez trenja, toplote ili udarnih talasa.

## Proverite rezultat

`check_stress`, `check_thermal` i `check_flow` pokreću sopstvene rešavače PartCraft-a za napon, provodljivost i protok na generisanom delu iz skripte i čitaju nazad maksimalni napon i pomeranje, temperature i toplotni tok, i propusnost mreže kanala. Ne menjaju ništa u rešavačima. Provere napona i temperature koriste voksele, pa je zakrivljena strana stepenasta, a napon na oštrom unutrašnjem uglu ili pod tačkastim opterećenjem zavisi od veličine voksela.
