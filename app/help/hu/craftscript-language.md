---
title: A CraftScript nyelv
summary: A CraftScript egy oldalon: mátrixok, tartományok és indexelés, operátorok, vezérlési szerkezetek, függvények, struktúrák és cellák, megjegyzések, echo, hibák és a lépéskeret, valamint az eltérés a MATLAB-tól.
keywords: CraftScript, nyelv, szintaxis, mátrix, tömb, vektor, tenzor, index, end, kettőspont, tartomány, operátor, elemenkénti, transzponálás, if, for, while, switch, try, catch, függvény, névtelen függvény, struct, cell, megjegyzés, echo, pontosvessző, MATLAB, Octave, port
from: d072b7d5
---

A CraftScript egy mátrixnyelv, amelyet úgy írtak, hogy a MATLAB-hoz hasonlóan olvasható legyen, ezért a legtöbb klasszikus numerikus kód (például a 88 soros topológia-optimalizálási kód) csak kis változtatásokkal fut. A [Szkript munkaterületen](topic:craftscript) és a parancssorból is futtatható.

## Értékek

| Típus | Példa | Megjegyzések |
|---|---|---|
| Szám, tömb | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Minden szám tömb (egy 1×1-es). A tömbök oszloponként tárolódnak, legfeljebb 8 dimenzióig |
| Logikai | `A > 2`, `true` | Igaz/hamis tömbök; indexként használhatók |
| Szöveg | `'beam'`, `"beam"` | |
| Ritka mátrix | `sparse(i, j, v, n, n)` | Merevségi mátrixokhoz |
| Háló, mező, modell | `hexGrid(…)`, `part()`, `load('part.stl')` | Amit a `show` megjelenít |
| Struktúra | `s.E = 210e3` | Nevesített mezők |
| Cella | `c = {1, 'two', [3 4]}` | Tetszőleges értékek listája |
| Függvényhivatkozás | `f = @(x) x.^2` | |

## Tömbök és indexelés

- Tartományok: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Az indexelés 1-gyel kezdődik: `A(2, 3)`, `v(end)`, `A(:, 1)` (egy teljes oszlop), `A(:)` (minden egyetlen oszlopban), `v(v > 0)` (logikai indexelés).
- A tömb végén túli értékadás bővíti a tömböt, ahogy a MATLAB-ban: `v(10) = 1`.

## Operátorok

- `+ - * / \ ^` mátrixműveletek (`A \ b` megoldja); `.* ./ .^` elemenként működnek. `'` transzponál.
- Összehasonlítások: `== ~= < <= > >=`; logikai műveletek: `& | ~` (elemenként) és `&& ||` (rövidzárt).

## Vezérlés és függvények

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

A függvények a szkriptben a parancsok után állnak, vagy saját, a függvény nevéről elnevezett szkriptlapjukon:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Egy név keresése ebben a sorrendben történik: változó, az alkatrész szkriptjei közül a ilyen nevű szkript, könyvtári függvény, beépített függvény.

## Echo, megjegyzések, kimenet

- Pontosvessző nélküli utasítás kiírja az értékét; a `;` csendben hagyja.
- A `%` megjegyzést kezd; a `%{` és a `%}` saját sorukon kikommentezik a köztük lévő sorokat.
- A `disp(x)`, a `fprintf('%g\n', x)` és a `display(x)` a konzolra írnak.

## Hibák és korlátok

- A hibák egyszerű szavakkal mondják meg, mi történt, és megadják a sort (és a függvényhívások láncát).
- Minden futtatásnak van lépéskerete (a panel **Futtatási beállítások** részében); a végtelen ciklus üzenettel áll le, vagy megnyomja a {{ui:Leállítás}} gombot.
- A tömbök egyenként legfeljebb 134 millió értéket tartalmazhatnak.

## Nem úgy, mint a MATLAB

- Az ábrázoló parancsok opciói a hívásba kerülnek: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. A `figure`, a `hold`, az `axis`, a `title(…)` és hasonlók elfogadottak, de nem tesznek semmit.
- Az `input` és a `keyboard` nem támogatott: a szkript nem tud megállni, hogy kérdezzen.
- Nincsenek kiegészítő csomagok (toolboxok); a [elemzőkönyvtár](topic:craftscript-library) és a beépített függvények adják, ami van.
