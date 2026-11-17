---
title: Inženjerska knjižnica
summary: Udžbeničke formule kao čitljive skripte, u SI jedinicama, svaki rezultat s izvorom: tok u cijevima i kanalima, prijenos topline i izmjenjivači topline, tlačni dijelovi, dinamika plinova, svojstva vode i zraka, materijali te jedinice koje se provjeravaju. Čemu služi svaka i gdje prestaje.
keywords: inženjerstvo, knjižnica, jedinice, Darcy-Weisbach, Colebrook, Reynolds, faktor trenja, Dittus-Boelter, Gnielinski, NTU, učinkovitost, LMTD, rebro, Barlow, Lamé, mlaznica, izentropski, Mach, zagušeni tok, voda, zrak, svojstva, materijal, izvori
from: 786ef967
---

Inženjerska knjižnica je skup skripti u knjižnici radnog prostora Script (`craftlib/eng`). Svaka je funkcija koju možete čitati od vrha do dna, sa zaglavljem koje daje njezinu **metodu**, **jedinice**, **granice**, **reference** i **provjeru** s izračunatim primjerom. Sve koriste SI jedinice i vraćaju veličine koje nose **jedinicu** i **izvor**, pa tehnički list može ispisati odakle dolazi svaki broj.

## Jedinice koje se provjeravaju

`to_si(10, 'bar', 'Pa')` pretvara vrijednost i odbija jedinicu koja mjeri nešto drugo (duljinu tamo gdje se očekuje tlak). `from_si`, `unit_convert(1, 'bar', 'psi')` i `unit_kind('W/(m K)')` („toplinska vodljivost“) rade na isti način. `temp_k(25, 'C')` i `temp_from_k` pretvaraju temperature, koje imaju pomak.

## Svojstva

- `fluid('water', T)` i `fluid('air', T, p)`: gustoća, viskoznost, vodljivost, specifični toplinski kapacitet, Prandtlov broj. Voda 0 do 100 °C, zrak 250 do 600 K; izvan toga se zaustavlja umjesto ekstrapolacije.
- `material('ss304')`: Youngov modul, Poissonov koeficijent, gustoća, granica tečenja, vodljivost, specifični toplinski kapacitet, toplinsko širenje: vrijednosti na sobnoj temperaturi iz istih tehničkih listova kao Simulation. Stvarni projekt koristi certificirane brojeve dobavljača. Krivulje temperature još nisu izrađene.

## Tok u cijevima i kanalima

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminarno, zatim Colebrookova jednadžba za turbulentni tok; raspon od 2300 do 4000 nema pouzdanu formulu i tako kaže), `darcy_weisbach`, `minor_loss`, `pipe_flow` (okrugla cijev, sve odjednom) i `rect_channel` (laminarni pravokutni kanali po Shah i London aproksimaciji).

## Prijenos topline

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (bira laminarno ili turbulentno i imenuje korelaciju), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` i `ntu_for` (odnosi učinkovitost-NTU za protusmjerni, istosmjerni, plašt-cijev, poprečni tok i jedan promjenjivi tok) te `hx_size` (veličina UA koju opterećenje treba; kaže koliko je moguće kada se opterećenje ne može ispuniti).

## Tlačni dijelovi

`allowable_stress` (granica tečenja podijeljena faktorom sigurnosti), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, prema kriteriju obruča ili smicanja) i `wall_sphere`. To su udžbenička odstupanja, **ne proračun prema pravilniku za tlačne posude**: bez dodatka na koroziju, faktora učinkovitosti spoja ili faktora pravilnika.

## Dinamika plinova

`isentropic` (omjeri pri Machovom broju), `mach_from_area`, `choked_flow`, `throat_area` i `exit_mach`, za idealni plin bez trenja, topline ili udarnih valova.

## Provjerite rezultat

`check_stress`, `check_thermal` i `check_flow` iz skripte pokreću vlastite PartCraft rješavače naprezanja, vođenja i toka na generiranom dijelu te vraćaju maksimalno naprezanje i pomak, temperature i toplinski tok te propusnost mreže kanala. Ne mijenjaju ništa u rješavačima. Provjere naprezanja i temperature koriste voksele, pa je zakrivljena ploha stepenica, a naprezanje u oštrom unutarnjem kutu ili pod točkastim opterećenjem ovisi o veličini voksela.
