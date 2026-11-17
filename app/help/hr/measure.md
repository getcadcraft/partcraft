---
title: Mjerenje udaljenosti, kutova i mase
summary: Kliknite dvije stvari u prikazu za najmanju udaljenost, kut i ΔX ΔY ΔZ; očitajte duljinu brida, promjer rupe, površinu plohe ili koordinate točke; dobijte volumen, masu, težište i tromost dijela ili sklopa.
keywords: mjerenje, udaljenost, najmanja udaljenost, kut, duljina, radijus, promjer, površina, koordinate, delta, pregled, svojstva mase, masa, težina, težište, tromost, moment tromosti, gustoća, materijal
from: 20bda0b7
---

**Mjeri** radi na modelu u svakom radnom prostoru (Design, Form, Simulation, Generative, Manufacture) i u sklopu. Nalazi se u izborniku {{ui:Pogledi}} grupe {{ui:Prikaz}}, ili pritisnite {{key:M}}. Kartica se otvara iznad gornjeg lijevog kuta prikaza.

## Mjerenje jedne stvari

Kliknite vrh, brid ili plohu. Kartica prikazuje:

- **Točku** (vrh, polovište brida ili središte kružnice): njezine X, Y, Z.
- **Brid**: ravan, kružnica ili krivulja, i njegovu duljinu; za kružnicu i radijus, promjer i središte.
- **Plohu**: ravnu, cilindričnu, stožastu i tako dalje, i njezinu površinu; normalu ravne plohe; radijus i promjer cilindra (veličina rupe). Površine su površine faseta koje gradi jezgra mreže.
- **Cijelo tijelo**: držite {{key:Shift}} i kliknite dio. Dobijete njegov volumen, površinu, masu i tromost (vidi dolje).

Pokazivač se hvata za vrhove, polovišta bridova i središta kružnica unutar 10 piksela; mala plava točka pokazuje hvatanje prije klika. Za odabir središta rupe pokažite na sredinu rupe; za odabir njezina ruba (kružnice) pokažite na rub.

## Mjerenje između dvije stvari

Kliknite drugu stavku. Kartica dodaje:

- **Najmanju udaljenost** i dvije najbliže točke, nacrtane u prikazu s linijom među njima.
- **ΔX, ΔY, ΔZ** od prve najbliže točke do druge.
- **Kut** između dviju ravnih ploha (između njihovih normala, 0–180°), između dvaju ravnih bridova ili osi (0–90°), ili između brida i plohe.
- **Razmak između ravnina** za dvije paralelne ravne plohe, **Središte do središta** za dvije kružnice ili rupe, **Os do osi** za dvije paralelne rupe ili cilindre.

Treći klik počinje novi par. {{key:Esc}} briše odabire; još jedan {{key:Esc}} (ili {{ui:Zatvori}}) zatvara Mjeri. {{ui:Kopiraj}} stavlja rezultate u međuspremnik kao tekst odvojen tabulatorima, spreman za lijepljenje u tablicu.

### Koliko je točno

PartCraft gradi dio jezgrom mreže, pa se udaljenosti računaju na fasetama mreže, a kartica kaže **približno: po fasetama**: točno za ravne plohe i među vrhovima, malo netočno za zakrivljene. Finija postavka **Krivulje** ih približava. Egzaktno mjerenje na pravim plohama treba egzaktnu jezgru: u ovoj verziji još nije izrađeno.

## Svojstva mase

Odaberite {{ui:Svojstva mase}} u kartici ili u izborniku {{ui:Pogledi}}. Na dijelu odaberite **Materijal** u kartici (čelik, aluminij, plastike i drugi s uobičajenim gustoćama). U sklopu svaki dio koristi materijal postavljen u njegovim svojstvima (odaberite dio, zatim **Materijal**), a rezultat vrijedi za sve dijelove zajedno.

Kartica prikazuje masu, volumen, površinu, težište, tenzor tromosti (Ixx, Iyy, Izz i umnoške Ixy, Iyz, Ixz, u kg·mm², oko težišta duž svjetskih osi) i glavne momente. Bez materijala prikazuje iste vrijednosti po jediničnoj gustoći (mm⁵) i bez mase.

Brojevi su točni za tesselirano tijelo koje gradi jezgra mreže (zakrivljene plohe kao fasete), pa okrugli dio izlazi malo nizak, a kartica to kaže. Gustoće materijala su tipične vrijednosti iz priručnika; stvarna legura ili razred može se razlikovati za nekoliko postotaka.

## Ograničenja

- Hvatanje može pronaći točku skrivenu iza druge geometrije; provjerite da kartica pokazuje ono što ste željeli.
- Mjeri se zatvara kad otvorite skicu ili list crteža, ili promijenite radni prostor.
