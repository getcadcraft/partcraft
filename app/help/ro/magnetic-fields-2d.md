---
title: Câmpul magnetic în 2D (tutorial)
summary: Calculați câmpul magnetic al unui electromagnet sau al unui magnet permanent cu biblioteca de analiză: rulați exemplele, citiți densitatea de flux, câmpul din întrefier, inductanța și forța de atracție, modificați proiectarea și construiți propriul model din bobine, magneți și fier.
keywords: magnetic, magnetostatică, câmp magnetic, densitate de flux, tesla, electromagnet, solenoid, bobină, amperi-spire, miez de fier, întrefier, permeabilitate, inductanță, forță magnetică, reluctanță, circuit magnetic, potențial vector, electromagnetism, element finit, fem, motor, actuator, transformator, magnetostatic2d, magnet permanent, neodim, NdFeB, ferită, remanență, punct de funcționare, revenire, scurgere, magnet de reținere
from: 215f6601
---

Biblioteca de analiză a PartCraft poate calcula în 2D câmpul magnetic al bobinelor și al fierului: o secțiune transversală a unui obiect lung și constant pe toată lungimea lui, cum ar fi un electromagnet, un miez de transformator, o bară colectoare sau secțiunea transversală a unui motor. Acest tutorial rulează exemplul electromagnetului din bibliotecă, citește ce afirmă, îl modifică, arată cum să modelați propria formă și apoi adaugă un magnet permanent.

Folosește spațiul de lucru Script și [biblioteca de analiză](topic:craftscript-library). Nu trebuie să cunoașteți limbajul CraftScript ca să urmați tutorialul; exemplul spune ce face fiecare linie.

## Ce este modelat

Un miez de fier în formă de C, de 100 × 80 mm în exterior și 20 mm grosime, cu un întrefier de aer de 2 mm în piciorul din dreapta. O bobină de 100 de spire care transportă 10 A (1000 amperi-spire) este înfășurată în jurul piciorului din stânga. Totul este lung în direcția de ieșire din ecran, deci rezultatele sunt **pe metru de adâncime**: înmulțiți cu adâncimea reală pentru un magnet real.

`magnetostatic2d` din bibliotecă rezolvă potențialul vector magnetic pe o rețea de pătrate de 1 mm, într-o cutie de aer în jurul magnetului, apoi calculează din el densitatea de flux **B** (în tesla).

## Rulați exemplul

1. Alegeți **Script** în caseta **Spațiu de lucru** din stânga barei de instrumente.
2. Deschideți fila **Bibliotecă** a panoului de scripturi, apoi **Exemple** › **Electromagnet: câmp, întrefier, inductanță**.
3. Faceți clic pe {{ui:Deschidere (doar citire)}}, apoi apăsați {{key:F5}}.

Într-o secundă sau două, pânza afișează densitatea de flux, iar consola afișează:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Graficul de sub pânză este densitatea de flux verticală B_y de-a lungul liniei de mijloc a miezului, de la stânga la dreapta: aproximativ −0,55 T în piciorul din stânga (fluxul coboară pe el), aproape nimic în fereastră și +0,55 T în piciorul din dreapta și peste întrefier (fluxul se întoarce în sus). Același flux trece prin fier și prin întrefier, deci cele două picioare și întrefierul arată aproape aceeași valoare.

## Citirea rezultatelor

- **Câmpul din întrefier** este de 0,543 T. Un calcul de mână tratează miezul ca pe un singur circuit magnetic, B = μ0 N I / (g + l / μr), unde g este întrefierul, l lungimea traseului prin fier, iar μr permeabilitatea relativă a fierului; el dă 0,552 T. Câmpul este puțin mai mic decât calculul de mână deoarece fluxul se umflă în jurul întrefierului (efect de margine) și o parte din flux ia o scurtătură peste fereastră (scurgere). Cu un întrefier mai mic sau o rețea mai fină, cele două se apropie.
- **Inductanța** bobinei de 100 de spire este de 0,154 H pe metru de adâncime, calculată din energia stocată în câmp. Formula circuitului dă mai puțin (0,110 H/m) deoarece numără doar fluxul prin întrefier, nu fluxul care scapă pe lângă el.
- **Forța de atracție** care închide întrefierul este B² w / (2 μ0) pentru o față a întrefierului de lățime w: aproximativ 2300 N pe metru, sau 117 N pentru un magnet adânc de 50 mm.
- **Vârful** de 1,97 T se află în colțurile interioare ale ferestrei, unde fluxul se întoarce brusc. Modelul tratează fierul ca liniar; oțelul electric real se saturează în jur de 1,5 până la 2 T, deci tratați valorile peste acestea ca pe un avertisment, nu ca pe un răspuns.

:::note
Testele bibliotecii rulează acest exemplu și verifică câmpul din întrefier față de formula circuitului magnetic la fiecare modificare a PartCraft. Metoda, referințele ei și celelalte verificări (un solenoid lung, un solenoid cu miez de fier) sunt în antetul `magnetostatic2d`: faceți clic pe el în bibliotecă.
:::

## Modificarea proiectării

1. Faceți clic pe {{ui:Creare copie}} deasupra scriptului doar pentru citire. Copia se salvează împreună cu piesa.
2. Schimbați o valoare de sus și apăsați din nou {{key:F5}}. Încercați:
   - `g = 0.001;` — jumătate din întrefier: câmpul din întrefier aproape se dublează, la fel și forța (crește cu B²).
   - `mur = 200;` — un miez mai slab: mai multe din amperi-spire se consumă în fier.
   - `N = 200;` — dublu număr de spire: dublu câmp, de patru ori inductanța.
   - `h = 0.0005;` — o rețea mai fină: rezultate mai apropiate, de aproximativ patru ori mai mult timp.

Fiecare rulare înlocuiește pânza. Variabilele create de script (cum ar fi `Bgap`, `L`, `F`) rămân în lista **Variabile** pentru calculele dvs.

## Modelarea propriei forme

Exemplul construiește totul din trei liste, cu o valoare pentru fiecare pătrat al rețelei, pe care le puteți face pentru orice formă desenată cu linii drepte pe rețea:

- **Unde este fierul:** `iron` este adevărat pentru pătratele din interiorul miezului. Exemplul îl construiește din dreptunghiuri: `frame & ~window & ~gap` înseamnă „în cadru, nu în fereastră, nu în întrefier”.
- **Permeabilitatea:** `1 + (mur - 1) * iron` este 1 în aer și `mur` în fier. Dați mai multor materiale valorile lor proprii în același mod.
- **Curentul:** `J` este densitatea de curent în amperi pe metru pătrat, pozitivă spre ieșirea din ecran și negativă spre intrare. O bobină are două laturi cu semne opuse; exemplul calculează `J0` astfel încât o latură să transporte N I.

Apoi `r = magnetostatic2d(m, permeability, J)` rezolvă modelul. `r.B` este densitatea de flux din fiecare pătrat (două coloane, x și y), `r.Bmag` mărimea ei, `r.energy` energia stocată pe metru. `plot(x, y)` desenează o linie.

Biblioteca lucrează în metri, iar vederea în milimetri, deci un câmp afișat fără ajustare ar fi desenat de o mie de ori mai mic. Exemplul îl arată pe o copie a rețelei în milimetri (`mm = quadGrid(…)`, apoi `show(field(mm, …))`): copiați cele două linii.

Implicit, marginea cutiei ține câmpul înăuntru: nu iese flux prin ea. Faceți cutia de cel puțin de două-trei ori mai mare decât magnetul, ca aceasta să nu strângă câmpul. Pentru un magnet simetric puteți modela jumătate din el: antetul `magnetostatic2d` spune ce condiție de margine să folosiți pe o linie de simetrie.

## Magneți permanenți

Al doilea exemplu, **Exemple** › **Magnet permanent într-un miez de fier: punct de funcționare, scurgere, forță de atracție**, este același miez, fără bobină, iar o felie de 10 mm din piciorul din stânga este înlocuită cu un magnet magnetizat în sus. Rulați-l cu {{key:F5}}. Afișează:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Punctul de funcționare.** Un magnet este descris prin **remanența** Br (câmpul pe care îl păstrează când este scurtcircuitat de fier: în jur de 1,2 T pentru un magnet NdFeB sinterizat, 0,4 T pentru ferită) și prin permeabilitatea lui de revenire (în jur de 1,05 și 1,1). Deschiderea unui întrefier îl împinge pe linia lui de revenire: aici până la 1,04 T, cu H îndreptat împotriva lui B în interiorul lui.
- **Scurgerea.** Calculul de mână fără scurgere dă 0,97 T în întrefier; modelul dă 0,68 T. Un magnet își împinge fluxul cu o forță mare pe o lungime scurtă, deci o mare parte merge direct înapoi peste fereastră în loc să treacă prin întrefier. Factorul de scurgere arată cât: 1,53 aici. Setați `g = 0;` pentru un zăvor închis: magnetul lucrează atunci la mai puțin de jumătate de procent față de calculul de mână.
- **Magneți în propriul model.** Dați `magnetostatic2d` magneții ca `struct('Br', Br)`, unde `Br` are un rând pentru fiecare pătrat al rețelei, cu remanența pe x și pe y în tesla (zero în afara magneților), și dați pătratelor magnetului permeabilitatea lor de revenire în lista de permeabilități:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upward in the squares where mag is true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Pentru un magnet magnetizat sub un unghi, puneți `Br·cos(angle)` și `Br·sin(angle)` în cele două coloane; pentru un inel magnetizat spre exterior, calculați direcția fiecărui pătrat din poziția lui. `r.H` dă intensitatea câmpului H din fiecare pătrat.

Modelul păstrează un magnet pe linia lui dreaptă de revenire indiferent cât de tare este solicitat. Un magnet real, solicitat dincolo de cotul lui (printr-un întrefier mare, o bobină puternică sau căldură), pierde o parte din putere definitiv; verificați punctul de funcționare pe curba producătorului pentru clasa și temperatura respectivă.

Testele bibliotecii verifică magneții față de două rezultate de mână: un magnet rotund în aer liber (în interior, B = Br / (1 + μr)) și un magnet închis de un zăvor de fier (circuitul magnetic), ambele în limita de 1 %.

## Ce nu face încă

- **Saturația.** Fierul este liniar: dublați curentul, dublați câmpul, fără limită.
- **Demagnetizarea.** Magneții rămân pe linia lor dreaptă de revenire (vezi mai sus).
- **Curenții turbionari** și **pierderile** (pierderi în fier, pierderi în cupru).
- **Piese în mișcare și cuplul.** Fără rotor care se învârte într-un stator, fără cuplu în funcție de unghi.
- **Forme rotunde.** Rețeaua este formată din pătrate egale, deci contururile curbe ies în trepte.
- **3D.** Totul este o secțiune transversală a unui obiect lung.

Proiectarea motoarelor (un rotor în rotație, cuplul și pierderile în 2D) este în studiu pentru o versiune ulterioară. Vezi [Încă nerealizat](topic:not-built-yet).
