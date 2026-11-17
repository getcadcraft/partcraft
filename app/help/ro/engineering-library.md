---
title: Biblioteca de inginerie
summary: Formule din manuale scrise ca scripturi lizibile, în unități SI, fiecare rezultat cu sursa lui: curgerea în țevi și canale, transferul de căldură și schimbătoarele de căldură, piesele sub presiune, dinamica gazelor, proprietățile apei și ale aerului, materialele și unitățile verificate. Ce este bun pentru fiecare și unde se oprește.
keywords: inginerie, bibliotecă, unități, Darcy-Weisbach, Colebrook, Reynolds, factor de frecare, Dittus-Boelter, Gnielinski, NTU, eficiență, LMTD, aripioară, Barlow, Lamé, ajutaj, izentropic, Mach, curgere blocată, apă, aer, proprietăți, material, surse
from: 786ef967
---

Biblioteca de inginerie este un set de scripturi din biblioteca spațiului de lucru Script (`craftlib/eng`). Fiecare este o funcție pe care o puteți citi de sus în jos, cu un antet care dă **metoda**, **unitățile**, **limitele**, **referințele** și o **verificare** cu un număr lucrat. Ele folosesc unități SI peste tot și returnează mărimi care poartă o **unitate** și o **sursă**, astfel încât o fișă de date poate arăta de unde provine fiecare număr.

## Unități verificate

`to_si(10, 'bar', 'Pa')` convertește o valoare și refuză o unitate care măsoară altceva (o lungime acolo unde se așteaptă o presiune). `from_si`, `unit_convert(1, 'bar', 'psi')` și `unit_kind('W/(m K)')` („conductivitate termică”) funcționează la fel. `temp_k(25, 'C')` și `temp_from_k` convertesc temperaturile, care au un decalaj.

## Proprietăți

- `fluid('water', T)` și `fluid('air', T, p)`: densitate, vâscozitate, conductivitate, căldură specifică, numărul Prandtl. Apa între 0 și 100 °C, aerul între 250 și 600 K; în afara acestor intervale se oprește, în loc să extrapoleze.
- `material('ss304')`: modulul lui Young, coeficientul lui Poisson, densitatea, limita de curgere, conductivitatea, căldura specifică, dilatarea: valori la temperatura camerei din aceleași fișe de date ca Simulare. O proiectare reală folosește cifrele certificate ale furnizorului. Curbele de temperatură nu sunt încă realizate.

## Curgerea în țevi și canale

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, apoi ecuația Colebrook pentru curgerea turbulentă; intervalul 2300 până la 4000 nu are o formulă sigură și spune asta), `darcy_weisbach`, `minor_loss`, `pipe_flow` (țeavă rotundă, totul deodată) și `rect_channel` (conducte dreptunghiulare laminare, prin ajustarea Shah și London).

## Transfer de căldură

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (alege laminar sau turbulent și numește corelația), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` și `ntu_for` (relațiile eficiență-NTU pentru contracurent, paralel, carcasă și țevi, curent transversal și un singur flux variabil) și `hx_size` (dimensiunea UA pe care o cere o sarcină; spune cât este posibil atunci când sarcina nu poate fi atinsă).

## Piese sub presiune

`allowable_stress` (limita de curgere împărțită la un factor de siguranță), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, după criteriul tensiunii circumferențiale sau al forfecării) și `wall_sphere`. Acestea sunt marje din manuale, **nu un calcul după un cod pentru recipiente sub presiune**: fără adaos de coroziune, factor de îmbinare sau factori de cod.

## Dinamica gazelor

`isentropic` (raporturile la un număr Mach), `mach_from_area`, `choked_flow`, `throat_area` și `exit_mach`, pentru un gaz perfect, fără frecare, căldură sau șocuri.

## Verificați rezultatul

`check_stress`, `check_thermal` și `check_flow` rulează solverele PartCraft de tensiune, conducție și curgere pe o piesă generată din script și citesc înapoi tensiunea și deplasarea maxime, temperaturile și fluxul de căldură, precum și permeabilitatea unei rețele de canale. Nu schimbă nimic în solvere. Verificările de tensiune și de temperatură folosesc voxeli, deci o față curbă devine o scară, iar tensiunea într-un colț interior ascuțit sau sub o sarcină punctuală depinde de dimensiunea voxelului.
