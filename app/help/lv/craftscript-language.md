---
title: CraftScript valoda
summary: CraftScript vienā lappusē: matricas, diapazoni un indeksēšana, operatori, vadības plūsma, funkcijas, struktūras un šūnas, komentāri, echo, kļūdas un soļu budžets, kā arī tas, kā tā atšķiras no MATLAB.
keywords: CraftScript, valoda, sintakse, matrica, masīvs, vektors, tenzors, indekss, end, kols, diapazons, operators, pa elementiem, transponēšana, if, for, while, switch, try, catch, funkcija, anonīma funkcija, struktūra, šūna, komentārs, echo, semikols, MATLAB, Octave, port
from: d072b7d5
---

CraftScript ir matricu valoda, kas rakstīta tā, lai to varētu lasīt kā MATLAB, tāpēc lielākā daļa klasisko skaitlisko kodu (piemēram, 88 rindu topoloģijas optimizācijas kods) darbojas ar nelielām izmaiņām. Tā darbojas [Skripta darbvietā](topic:craftscript) un no komandrindas.

## Vērtības

| Tips | Piemērs | Piezīmes |
|---|---|---|
| Skaitlis, masīvs | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Katrs skaitlis ir masīvs (1×1). Masīvi tiek glabāti kolonnu pa kolonnai, līdz 8 dimensijām |
| Loģiskā | `A > 2`, `true` | Patiesības/aplamības masīvi; izmantojami kā indeksi |
| Teksts | `'beam'`, `"beam"` | |
| Retā matrica | `sparse(i, j, v, n, n)` | Stinguma matricām |
| Tīkls, lauks, modelis | `hexGrid(…)`, `part()`, `load('part.stl')` | Ko zīmē `show` |
| Struktūra | `s.E = 210e3` | Nosauktie lauki |
| Šūna | `c = {1, 'two', [3 4]}` | Jebkuru vērtību saraksts |
| Funkcijas rokturis | `f = @(x) x.^2` | |

## Masīvi un indeksēšana

- Diapazoni: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indeksēšana sākas ar 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (visa kolonna), `A(:)` (viss kā viena kolonna), `v(v > 0)` (loģiskā indeksēšana).
- Vērtības piešķiršana aiz masīva beigām to palielina, kā MATLAB: `v(10) = 1`.

## Operatori

- `+ - * / \ ^` ir matricu operācijas (`A \ b` atrisina); `.* ./ .^` darbojas pa elementam. `'` transponē.
- Salīdzinājumi `== ~= < <= > >=`; loģika `& | ~` (pa elementam) un `&& ||` (īsslēgums).

## Vadības plūsma un funkcijas

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

Funkcijas ieliek skriptā aiz tā komandām vai savā skripta cilnē, kas nosaukta pēc funkcijas:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Nosaukums tiek meklēts šādā secībā: mainīgais, šīs daļas skripts ar šādu nosaukumu, bibliotēkas funkcija, iebūvētā funkcija.

## Echo, komentāri, izvade

- Paziņojums bez `;` izdrukā savu vērtību; `;` to klusina.
- `%` sāk komentāru; `%{` un `%}` rindās, kas stāv atsevišķi, komentē rindas starp tām.
- `disp(x)`, `fprintf('%g\n', x)` un `display(x)` drukā konsolē.

## Kļūdas un ierobežojumi

- Kļūdas vienkāršos vārdos pasaka, kas nogāja greizi, un norāda rindu (un funkciju izsaukumu ķēdi).
- Katram palaidumam ir soļu budžets (Palaišanas opcijas panelī); bezgalīgs cikls apstājas ar ziņojumu, vai arī nospiediet Apturēt.
- Masīvos var būt līdz 134 miljoniem vērtību katrā.

## Nav kā MATLAB

- Zīmēšanas komandas ieliek savas opcijas izsaukumā: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` un līdzīgas tiek pieņemtas, bet neko nedara.
- `input` un `keyboard` netiek atbalstīti: skripts nevar apstāties, lai uzdotu jautājumu.
- Rīkkopu nav; [analīzes bibliotēka](topic:craftscript-library) un iebūvētās funkcijas ir tas, kas ir.
