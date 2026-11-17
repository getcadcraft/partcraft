---
title: Scrierea propriei analize
summary: Construiți o analiză ca scripturi în spațiul de lucru Script: generați plasa piesei, asamblați și rezolvați, afișați câmpul și un grafic de convergență, verificați rezultatul față de un calcul de mână și păstrați pașii ca scripturi separate care împart variabile.
keywords: analiză proprie, analiză personalizată, script FEA, element finit, asamblare, rigiditate, condiții la limită, rezolvare, pcg, rar, câmp, post-procesare, convergență, verificare, calcul de mână, validare, flux de lucru
from: 0f471a8e
---

O analiză în spațiul de lucru Script este câteva scripturi scurte care își transmit variabile unul altuia. Porniți de la o funcție din [bibliotecă](topic:craftscript-library) apropiată de ce vă trebuie, faceți o copie și modificați-o; sau construiți una pas cu pas, ca mai jos.

## 1. O plasă

```
model = part();                  % piesa pe care o modelați, ca model
m = tetmesh(model, 4);           % tetraedre de aproximativ 4 mm
show(m)
```

Verificați plasa în vizualizare înainte de a continua: {{key:F}} o potrivește, iar {{ui:ochi}} din **Afișate** ascunde piesa.

## 2. Asamblare și rezolvare

Scrieți bucla elementelor în script (se citește ca din manual) și lăsați părțile grele funcțiilor încorporate: matricile elementelor, asamblarea rară din triplete și solverul cu gradient conjugat cu precondiționator. O funcție din bibliotecă, precum `static_tet` (când biblioteca o are), este un exemplu complet de copiat.

## 3. Afișarea rezultatului

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % o valoare pe nod
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Reziduul solverului', 'id', 'conv')
```

- Intervalul legendei poate fi tastat sau readus la {{ui:Auto}}.
- Faceți clic pe plasă ca să citiți valorile dintr-un nod.
- Un grafic care păstrează același `'id'` este actualizat pe loc, deci afișați și trasați în buclă ca să urmăriți convergența.

## 4. Verificați-l

Comparați cu ceva cunoscut: deplasarea vârfului unei console față de PL³/3EI, o placă cu o gaură față de factorul ei de concentrare a tensiunii, reacțiunile față de sarcini. Scrieți verificarea ca script propriu, ca să ruleze din nou după fiecare modificare:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('vârf %g mm, teoria grinzii %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Păstrați-l

- Fiecare pas poate avea propria filă de script: împart variabilele, deci rulați-le unul după altul.
- Scripturile se salvează în piesă. Bifați **Salvare variabile cu piesa** din fila Variabile ca să păstrați și rezultatele (până la 32 MB).
- {{ui:Salvare}} din grupul Script descarcă un script ca să-l partajați; {{ui:Deschidere}} aduce unul înăuntru.
