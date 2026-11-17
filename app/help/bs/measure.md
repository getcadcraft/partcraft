---
title: Izmjeri razdaljine, uglove i masu
summary: Klikni dvije stvari u pogledu za najmanju razdaljinu, ugao i ΔX ΔY ΔZ; očitaj dužinu ivice, prečnik rupe, površinu ili koordinate tačke; dobij zapreminu, masu, težište i inerciju dijela ili sklopa.
keywords: izmjeri, razdaljina, minimalna razdaljina, ugao, dužina, poluprečnik, prečnik, površina, koordinate, delta, provjeri, svojstva mase, masa, težina, težište, inercija, moment inercije, gustina, materijal
from: 20bda0b7
---

**Izmjeri** radi nad modelom u svakom radnom prostoru (Design, Form, Simulation, Generative, Manufacture) i u sklopu. Nalazi se u meniju {{ui:Prikazi}} u grupi **Pogled**, ili pritisni {{key:M}}. Kartica se otvara iznad gornjeg lijevog ugla pogleda.

## Izmjeri jednu stvar

Klikni vrh, ivicu ili površinu. Kartica prikazuje:

- **Tačku** (vrh, središnju tačku ivice ili centar kruga): njene X, Y, Z.
- **Ivicu**: prava, krug ili kriva, i njenu dužinu; za krug još poluprečnik, prečnik i centar.
- **Površinu**: ravna, cilindar, konus i tako dalje, i njena površina; normala ravne površine; poluprečnik i prečnik cilindra (veličina rupe). Površine su onih faseta koje mesh kernel pravi.
- **Cijelo tijelo**: drži {{key:Shift}} i klikni dio. Dobijaš zapreminu, površinu, masu i inerciju (vidi dolje).

Pokazivač se hvata za vrhove, središnje tačke ivica i centre krugova unutar 10 piksela; mala plava tačka pokazuje hvatanje prije klika. Da odabereš centar rupe, pokaži na sredinu rupe; da odabereš njen obod (krug), pokaži na obod.

## Izmjeri između dvije stvari

Klikni drugu stavku. Kartica dodaje:

- **Minimalnu razdaljinu** i dvije najbliže tačke, nacrtane u pogledu sa linijom između njih.
- **ΔX, ΔY, ΔZ** od prve najbliže tačke do druge.
- **Ugao** između dvije ravne površine (između njihovih normala, 0–180°), između dvije prave ivice ili ose (0–90°), ili između ivice i površine.
- **Razmak između ravni** za dvije paralelne ravne površine, **Centar do centra** za dva kruga ili rupe, **Osa do ose** za dvije paralelne rupe ili cilindre.

Treći klik počinje novi par. {{key:Esc}} briše odabire; {{key:Esc}} ponovo (ili {{ui:Zatvori}}) zatvara Izmjeri. {{ui:Kopiraj}} stavlja rezultate u međuspremnik kao tekst odvojen tabulatorom, spreman za lijepljenje u proračunsku tabelu.

### Koliko je tačno

PartCraft gradi dio mesh kernelom, pa se razdaljine računaju na fasetama mreže, a kartica kaže **približno: po fasetama**: tačno za ravne površine i između vrhova, malo netačno za zakrivljene. Finija postavka **Krive** ih približava. Tačno mjerenje na pravim površinama treba tačan kernel: još nije napravljeno u ovoj verziji.

## Svojstva mase

Odaberi {{ui:Svojstva mase}} u kartici ili u meniju {{ui:Prikazi}}. Na dijelu odaberi **Materijal** u kartici (čelik, aluminijum, plastike i drugi sa svojim uobičajenim gustinama). U sklopu svaki dio koristi materijal postavljen u svojim svojstvima (odaberi dio, zatim **Materijal**), a rezultat je za sve dijelove zajedno.

Kartica prikazuje masu, zapreminu, površinu, težište, tenzor inercije (Ixx, Iyy, Izz i proizvode Ixy, Iyz, Ixz, u kg·mm², oko težišta duž osa svijeta) i glavne momente. Bez materijala prikazuje isto po jedinici gustine (mm⁵) i bez mase.

Brojevi su tačni za mrežasto čvrsto tijelo koje mesh kernel pravi (zakrivljene površine kao fasete), pa okrugao dio ispadne malo nisko, a kartica to kaže. Gustine materijala su tipične vrijednosti iz priručnika; pravi legura ili razred može se razlikovati za nekoliko procenata.

## Ograničenja

- Hvatanje može naći tačku skrivenu iza druge geometrije; provjeri da kartica kaže ono što si htio.
- Izmjeri se zatvara kad otvoriš skicu ili list crteža, ili promijeniš radni prostor.
