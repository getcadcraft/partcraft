---
title: Păstrarea și refolosirea resturilor
summary: După o dispunere, ce rămâne din fiecare placă devine un rest numerotat într-o listă de stoc; următoarea dispunere folosește întâi resturile, apoi plăci întregi.
keywords: dispunere, rest, stoc, placă, foaie, refolosire, material, grosime, CSV
from: 7a68d4b8
---

Când dispuneți piese pe plăci, rămășița utilizabilă a fiecărei plăci (nu așchiile) poate fi păstrată ca **rest**: un contur numerotat (R-0001, R-0002 …) cu materialul, grosimea, dimensiunea și lucrarea din care provine. Lista se salvează odată cu fișierul și poate fi salvată ca CSV.

## Refolosire

Introduceți **materialul** și **grosimea**, lăsați activată {{ui:Folosire mai întâi a resturilor}} și dispuneți. Resturile din același material și aceeași grosime sunt încercate de la cel mai mic la cel mai mare; piesele care încap se pun pe ele, în interiorul propriului contur al restului și fără să atingă marginea; ce nu încape merge pe plăci noi. Raportul lucrării spune ce resturi au fost folosite și ce a rămas. Cu {{ui:Salvare resturi rămase ca rest}} activată, {{ui:Adăugare a acestei lucrări în stoc}} o scrie apoi în lista de stoc: un rest folosit este marcat **Folosit** (cu lucrarea) și nu mai este oferit; ce rămâne din el devine un rest nou care își reține originea.

## Ce se consideră rest

Rămășița se măsoară cu distanța setată (nicio piesă nu este mai aproape de o tăietură decât atât). Fâșiile mai înguste decât o douăzecime din placă și bucățile mai mici de 2 % din ea sunt deșeu; schimbați ambele limite dacă atelierul păstrează bucăți mai mici. Găurile din interiorul pieselor aparțin piesei și nu se păstrează. Un rulou nu are resturi.

## În desen

DXF-ul unei dispuneri desenează conturul fiecărui rest pe stratul REMNANTS, cu numărul său în mijloc, ca bucățile să poată fi marcate la tăiere.

Încă nerealizat: direcția fibrei unui rest, o foaie cu coduri de bare sau etichete, resturi de rulouri, stoc comun între proiecte.
