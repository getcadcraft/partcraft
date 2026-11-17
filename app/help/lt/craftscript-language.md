---
title: CraftScript kalba
summary: CraftScript viename puslapyje: matricos, intervalai ir indeksavimas, operatoriai, valdymo eiga, funkcijos, struktūros ir langeliai, komentarai, išvedimas, klaidos ir žingsnių biudžetas, bei kuo ji skiriasi nuo MATLAB.
keywords: CraftScript, kalba, sintaksė, matrica, masyvas, vektorius, tenzorius, indeksas, end, dvitaškis, intervalas, operatorius, elementas po elemento, transponavimas, if, for, while, switch, try, catch, funkcija, anoniminė funkcija, struktūra, langelis, komentaras, išvedimas, kabliataškis, MATLAB, Octave, perkėlimas
from: d072b7d5
---

CraftScript yra matricų kalba, parašyta taip, kad skaitytųsi kaip MATLAB, todėl dauguma klasikinių skaitinių kodų (pavyzdžiui, 88 eilučių topologijos optimizavimo kodas) veikia su nedideliais pakeitimais. Ji veikia [Scenarijų darbo srityje](topic:craftscript) ir komandinėje eilutėje.

## Reikšmės

| Tipas | Pavyzdys | Pastabos |
|---|---|---|
| Skaičius, masyvas | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Kiekvienas skaičius yra masyvas (1×1). Masyvai saugomi stulpelis po stulpelio, iki 8 matmenų |
| Loginis | `A > 2`, `true` | True/false masyvai; tinka kaip indeksai |
| Tekstas | `'beam'`, `"beam"` | |
| Retoji matrica | `sparse(i, j, v, n, n)` | Standumo matricoms |
| Tinklelis, laukas, modelis | `hexGrid(…)`, `part()`, `load('part.stl')` | Ką rodo `show` |
| Struktūra | `s.E = 210e3` | Pavadinti laukai |
| Langelis | `c = {1, 'two', [3 4]}` | Bet kokių reikšmių sąrašas |
| Funkcijos nuoroda | `f = @(x) x.^2` | |

## Masyvai ir indeksavimas

- Intervalai: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indeksavimas prasideda nuo 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (visas stulpelis), `A(:)` (viskas viename stulpelyje), `v(v > 0)` (loginis indeksavimas).
- Priskyrimas už galo išplečia masyvą, kaip MATLAB: `v(10) = 1`.

## Operatoriai

- `+ - * / \ ^` yra matricų operacijos (`A \ b` sprendžia); `.* ./ .^` veikia elementas po elemento. `'` transponuoja.
- Palyginimai `== ~= < <= > >=`; loginės `& | ~` (elementas po elemento) ir `&& ||` (trumpasis jungimas).

## Valdymo eiga ir funkcijos

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

Funkcijos rašomos scenarijuje po jo komandų arba savame scenarijaus skirtuke, pavadintame pagal funkciją:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Vardas ieškomas tokia tvarka: kintamasis, scenarijus šioje detalėje su tokiu vardu, bibliotekos funkcija, įmontuota funkcija.

## Išvedimas, komentarai, rezultatai

- Sakinys be `;` parodo savo reikšmę; `;` ją nuslopina.
- `%` pradeda komentarą; `%{` ir `%}` savarankiškose eilutėse užkomentuoja eilutes tarp jų.
- `disp(x)`, `fprintf('%g\n', x)` ir `display(x)` spausdina į konsolę.

## Klaidos ir ribos

- Klaidos paprastais žodžiais nurodo, kas nutiko, ir eilutę (bei funkcijų iškvietimų grandinę).
- Kiekvienas paleidimas turi žingsnių biudžetą (**Vykdymo parinktys** skydelyje); begalinis ciklas sustoja su pranešimu arba spauskite {{ui:Sustabdyti}}.
- Kiekvienas masyvas talpina iki 134 milijonų reikšmių.

## Kuo skiriasi nuo MATLAB

- Braižymo komandos savo parinktis deda į iškvietimą: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` ir panašios priimamos, bet nieko nedaro.
- `input` ir `keyboard` nepalaikomi: scenarijus negali sustoti ir ko nors klausti.
- Įrankių rinkinių (toolbox) nėra; yra [analizės biblioteka](topic:craftscript-library) ir įmontuotos funkcijos.
