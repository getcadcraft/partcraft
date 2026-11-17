---
title: Limbajul CraftScript
summary: CraftScript pe o pagină: matrice, intervale și indexare, operatori, control al fluxului, funcții, structuri și celule, comentarii, echo, erori și bugetul de pași și diferența față de MATLAB.
keywords: CraftScript, limbaj, sintaxă, matrice, tablou, vector, tensor, index, end, două puncte, interval, operator, element cu element, transpunere, if, for, while, switch, try, catch, funcție, funcție anonimă, struct, celulă, comentariu, echo, punct și virgulă, MATLAB, Octave, port
from: d072b7d5
---

CraftScript este un limbaj matriceal scris să se citească asemenea MATLAB-ului, astfel încât majoritatea codurilor numerice clasice (de exemplu codul de optimizare a topologiei de 88 de linii) rulează cu modificări mici. Rulează în [spațiul de lucru Script](topic:craftscript) și din linia de comandă.

## Valori

| Tip | Exemplu | Note |
|---|---|---|
| Număr, tablou | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Fiecare număr este un tablou (unul de 1×1). Tablourile sunt stocate pe coloane, până la 8 dimensiuni |
| Logic | `A > 2`, `true` | Tablouri de adevărat/fals; pot fi folosite ca indici |
| Text | `'beam'`, `"beam"` | |
| Matrice rară | `sparse(i, j, v, n, n)` | Pentru matrici de rigiditate |
| Plasă, câmp, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Ce desenează `show` |
| Struct | `s.E = 210e3` | Câmpuri cu nume |
| Celulă | `c = {1, 'two', [3 4]}` | O listă de valori oarecare |
| Handle de funcție | `f = @(x) x.^2` | |

## Tablouri și indexare

- Intervale: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indexarea începe de la 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (o coloană întreagă), `A(:)` (totul ca o singură coloană), `v(v > 0)` (indexare logică).
- Atribuirea după ultimul element mărește tabloul, ca în MATLAB: `v(10) = 1`.

## Operatori

- `+ - * / \ ^` sunt operații matriceale (`A \ b` rezolvă); `.* ./ .^` lucrează element cu element. `'` transpune.
- Comparații `== ~= < <= > >=`; logică `& | ~` (element cu element) și `&& ||` (cu scurtcircuit).

## Control al fluxului și funcții

```
for k = 1:10
  if mod(k, 2) == 0
    continue
  elseif k > 7
    break
  end
end
while err > 1e-6, … end
switch kind
  case 'steel'
    E = 210e3;
  otherwise
    E = 70e3;
end
try
  x = A \ b;
catch e
  disp(e.message)
end
```

Funcțiile se scriu într-un script, după comenzile sale, sau în propria filă de script, numită după funcție:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Un nume este căutat în această ordine: o variabilă, un script din această piesă cu acest nume, o funcție din bibliotecă, o funcție încorporată.

## Echo, comentarii, ieșire

- O instrucțiune fără `;` afișează valoarea sa; `;` o păstrează tăcută.
- `%` începe un comentariu; `%{` și `%}` pe rânduri proprii comentează rândurile dintre ele.
- `disp(x)`, `fprintf('%g\n', x)` și `display(x)` afișează în consolă.

## Erori și limite

- Erorile spun în cuvinte simple ce a mers prost și dau rândul (și lanțul de apeluri de funcții).
- Fiecare rulare are un buget de pași (Opțiuni de rulare din panou); o buclă fără sfârșit se oprește cu un mesaj, sau apăsați Oprire.
- Tablourile țin până la 134 de milioane de valori fiecare.

## Diferit de MATLAB

- Comenzile de grafic își pun opțiunile în apel: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` și altele asemenea sunt acceptate și nu fac nimic.
- `input` și `keyboard` nu sunt acceptate: un script nu se poate opri ca să pună o întrebare.
- Nu există toolbox-uri; [biblioteca de analiză](topic:craftscript-library) și funcțiile încorporate sunt ceea ce există.
