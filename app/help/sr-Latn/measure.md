---
title: Izmerite rastojanja, uglove i masu
summary: Kliknite dve stvari u prikazu za najmanje rastojanje, ugao i ΔX ΔY ΔZ; pročitajte dužinu ivice, prečnik rupe, površinu površi ili koordinate tačke; dobijte zapreminu, masu, težište i inerciju dela ili sklopa.
keywords: izmeri, rastojanje, najmanje rastojanje, ugao, dužina, poluprečnik, prečnik, površina, koordinate, delta, pregled, svojstva mase, masa, težina, težište, inercija, moment inercije, gustina, materijal
from: 20bda0b7
---

**Izmeri** radi nad modelom u svakom radnom prostoru (Dizajn, Forma, Simulacija, Generativno, Obrada) i u sklopu. Nalazi se u meniju {{ui:Pogledi}} u grupi **Pogled**, ili pritisnite {{key:M}}. Kartica se otvara preko gornjeg levog ugla prikaza.

## Izmerite jednu stvar

Kliknite teme, ivicu ili površ. Kartica prikazuje:

- **Tačku** (teme, središte ivice ili centar kruga): njene X, Y, Z.
- **Ivicu**: prava, kružnica ili kriva, i njena dužina; za kružnicu još poluprečnik, prečnik i centar.
- **Površ**: ravna, cilindar, konus i tako dalje, i njena površina; normala ravne površi; poluprečnik i prečnik cilindra (veličina rupe). Površine su onih fasete koje gradi jezgro mreže.
- **Celo telo**: držite {{key:Shift}} i kliknite deo. Dobijate njegovu zapreminu, površinu, masu i inerciju (vidi dole).

Pokazivač se privlači na teme, središta ivica i centre krugova u okviru 10 piksela; mala plava tačka pokazuje privlačenje pre klika. Da izaberete centar rupe, pokažite na sredinu rupe; da izaberete njen obod (krug), pokažite na obod.

## Izmerite između dve stvari

Kliknite drugu stavku. Kartica dodaje:

- **Najmanje rastojanje** i dve najbliže tačke, nacrtane u prikazu sa linijom između njih.
- **ΔX, ΔY, ΔZ** od prve najbliže tačke do druge.
- **Ugao** između dve ravne površi (između njihovih normala, 0–180°), između dve prave ivice ili osa (0–90°), ili između ivice i površi.
- **Razmak između ravni** za dve paralelne ravne površi, **Centar do centra** za dve kružnice ili rupe, **Osa do ose** za dve paralelne rupe ili cilindre.

Treći klik počinje novi par. {{key:Esc}} briše izbore; sledeći {{key:Esc}} (ili {{ui:Zatvori}}) zatvara Izmeri. {{ui:Kopiraj}} stavlja rezultate u međuspremnik kao tekst odvojen tabulatorima, spreman za nalepljivanje u tabelu.

### Koliko je tačno

PartCraft gradi deo jezgrom mreže, pa se rastojanja računaju na fasetama mreže, a kartica kaže **približno: po fasetama**: tačno za ravne površi i između temena, malo netačno za zakrivljene. Finija postavka **Krive** ih približava. Tačno merenje na pravim površima zahteva tačno jezgro: u ovoj verziji još nije urađeno.

## Svojstva mase

Izaberite {{ui:Svojstva mase}} u kartici ili u meniju {{ui:Pogledi}}. Na delu izaberite **Materijal** u kartici (čelik, aluminijum, plastike i drugi sa svojim uobičajenim gustinama). U sklopu svaki deo koristi materijal postavljen u njegovim svojstvima (izaberite deo, pa **Materijal**), a rezultat važi za sve delove zajedno.

Kartica prikazuje masu, zapreminu, površinu, težište, tenzor inercije (Ixx, Iyy, Izz i proizvode Ixy, Iyz, Ixz, u kg·mm², oko težišta duž osa sveta) i glavne momente. Bez materijala prikazuje isto po jedinici gustine (mm⁵) i bez mase.

Brojevi su tačni za mrežasto telo koje gradi jezgro mreže (zakrivljene površi kao fasete), pa okrugao deo izlazi malo niži, i kartica to kaže. Gustine materijala su tipične vrednosti iz priručnika; prava legura ili klasa može se razlikovati za nekoliko procenata.

## Ograničenja

- Privlačenje može da nađe tačku sakrivenu iza druge geometrije; proverite da kartica kaže ono što ste mislili.
- Izmeri se zatvara kada otvorite skicu ili list crteža, ili promenite radni prostor.
