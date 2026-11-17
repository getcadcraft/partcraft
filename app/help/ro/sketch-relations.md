---
title: Relațiile și cotele schiței
summary: Fiecare relație și cotă pe care o are o schiță PartCraft, ce trebuie selectat pentru fiecare, simbolul său și comportamentul la rezolvare.
keywords: relații, constrângeri, coincident, orizontal, vertical, paralel, perpendicular, tangent, egal, concentric, mijloc, fixare, distanță, distanță orizontală, distanță verticală, rază, diametru, unghi, simboluri, glife
from: 9831e7be
---

Relațiile fixează poziția geometriei față de altă geometrie. Cotele fixează dimensiunile. Pentru a adăuga o relație, selectați elementele cu instrumentul Selectare ({{key:S}}) și alegeți butonul ei din panoul din dreapta; pentru a adăuga o cotă, folosiți instrumentul de cotare ({{key:D}}) sau butoanele de cotare din panoul din dreapta. Cum lucrați cu ele: [Definirea completă a unei schițe](topic:relations-dimensions).

„Curbă” în continuare înseamnă un cerc sau un arc. Originea se consideră punct.

## Relații

| Buton | Simbol | Selectați | Efect |
|---|---|---|---|
| {{ui:• Coincident}} | • (apare doar când este selectat sau când există o problemă) | Două puncte | Punctele se întâlnesc |
| {{ui:• Coincident}} | • | Un punct și o linie | Punctul se află pe linie (sau pe prelungirea ei) |
| {{ui:• Coincident}} | • | Un punct și o curbă | Punctul se află pe cerc sau pe arc |
| {{ui:H Orizontal}} | H | O linie sau două puncte | Linia este orizontală sau cele două puncte au aceeași înălțime |
| {{ui:V Vertical}} | V | O linie sau două puncte | Linia este verticală, sau punctele sunt unul deasupra celuilalt |
| {{ui:∥ Paralel}} | ∥ | Două linii | Liniile au aceeași direcție |
| {{ui:⊥ Perpendicular}} | ⊥ | Două linii | Liniile se întâlnesc sub un unghi drept |
| {{ui:T Tangent}} | T | O linie și o curbă | Linia atinge curba fără să o intersecteze |
| {{ui:T Tangent}} | T | Două curbe | Acestea se ating, din exterior sau din interior, după cum au fost desenate |
| {{ui:T Tangent}} | T | Un spline și o linie, un arc sau un spline care se întâlnește cu unul dintre capetele sale | Spline-ul pleacă de la acel capăt în direcția celeilalte curbe |
| {{ui:= Egal}} | = | Două linii | Aceeași lungime |
| {{ui:= Egal}} | = | Două curbe | Aceeași rază |
| {{ui:◎ Concentric}} | ◎ | Două curbe | Același centru |
| {{ui:◎ Concentric}} | ◎ | Un punct și o curbă | Punctul se află în centrul curbei |
| {{ui:M Mijloc}} | M | Un punct și o linie | Punctul se află la mijlocul liniei |
| {{ui:↔ Simetric}} | ↔ | Două puncte și o linie | Punctele sunt imagini în oglindă față de linie ({{ui:Oglindire}} adaugă acestea) |
| {{ui:⚓ Fixare}} | ⚓ | Un punct, o linie, o curbă sau un spline | Îl menține exact unde se află acum (la un spline: punctele sale) |

Aici, liniile includ și liniile de axă. Desenarea adaugă automat unele relații: agățarea de un punct îl face coincident, agățarea de o curbă pune punctul pe ea, liniile aproape orizontale sau verticale primesc H sau V, iar un dreptunghi vine cu cele patru colțuri unite, două H și două V.

**Fixarea** este un mod rapid de a opri o mișcare, dar atunci piesa nu poate urma o modificare de cotă din altă parte. Preferați cotele față de origine.

## Cote

| Buton | Selectați | Măsoară | Afișată ca |
|---|---|---|---|
| {{ui:Distanță}} | O linie | Lungimea ei | Distanță 40 |
| {{ui:Distanță}} | Două puncte | Distanța în linie dreaptă dintre ele | Distanță 40 |
| {{ui:Distanță}} | Un punct și o linie | Distanța de la punct la linie, perpendicular pe ea | Distanță 40 |
| {{ui:Distanță}} | Două linii paralele | Spațiul dintre ele | Distanță 40 |
| {{ui:Distanță orizontală}} | Două puncte sau o linie | Doar distanța stânga-dreapta | Distanță orizontală 40 |
| {{ui:Distanță verticală}} | Două puncte sau o linie | Doar distanța sus-jos | Distanță verticală 40 |
| {{ui:Rază}} | Un cerc sau un arc | Raza sa | Rază R10 |
| {{ui:Diametru}} | Un cerc sau un arc | Diametrul său | Diametru ⌀20 |
| {{ui:Unghi}} | Două linii care nu sunt paralele | Unghiul dintre ele, de la 0 la 180 de grade | Unghi 30° |

Cu instrumentul de cotare, PartCraft alege tipul după ce faceți clic și unde plasați numărul:

| Faceți clic pe | Obțineți |
|---|---|
| O linie | Lungimea ei; pentru o linie înclinată, orizontală dacă numărul se află deasupra sau dedesubtul ei, verticală dacă se află lateral |
| Un cerc | Diametru |
| Un arc | Rază |
| Două puncte | Distanță; orizontală sau verticală, ca la o linie înclinată |
| Un punct și o linie | Distanța de la punct la linie |
| Două linii | Unghi, sau distanța dacă sunt paralele |
| Un punct și un cerc | Nimic: „Aceste elemente nu pot fi cotate împreună.” Cotați în schimb față de punctul central al cercului |

**Decalarea** (afișată ca distanță) se face cu instrumentul Decalare: menține o linie copiată paralelă la acea distanță, sau un arc ori un cerc copiat concentric, cu o rază mai mare sau mai mică cu aceeași valoare. Celelalte piese ale aceleiași decalări au o relație **O** și urmează cota unică de decalare. Vezi [Spline-uri, tăiere, decalare și alte instrumente de schiță](topic:sketch-tools).

Valorile cotelor sunt în milimetri (sau grade), niciodată negative. Raza și diametrul trebuie să fie mai mari decât zero. Pentru distanțe este permisă valoarea 0: două puncte aflate la 0 unul de altul sunt coincidente.

## Cum se comportă rezolvarea

- **Mișcarea minimă.** Când o valoare se schimbă, solverul mută geometria cât mai puțin posibil. O linie a cărei lungime se schimbă crește în mod egal la ambele capete, dacă nimic nu ține niciunul dintre ele.
- **Fără întoarcere.** Distanțele de la un punct la o linie, distanțele orizontale și verticale, unghiurile și tangența își amintesc pe ce parte au fost făcute. Schimbarea unei valori nu întoarce niciodată geometria pe cealaltă parte.
- **Conflictele nu modifică nimic.** Dacă relațiile se contrazic, schița rămâne exact cum era, iar cele aflate în conflict devin roșii.
- **Relațiile redundante** (deduse din altele) sunt indicate în bara de stare („este deja dedusă. Ștergeți-o.”), iar operația se construiește în continuare, cu un avertisment.
- **Îmbinări tangente.** Acolo unde un arc de racordare întâlnește liniile sale într-un capăt comun, tangența se rezolvă într-o formă care rămâne bine definită în acel punct, astfel încât racordările de schiță nu apar ca supradefinite.

## Încă nerealizat

Relațiile coliniar, coradial și de intersectare; un punct pe un spline; cotele conduse (de referință); cotele de ordonată și de lungime de arc; ecuațiile între cote. Pentru linii coliniare folosiți Paralel plus o distanță de 0.
