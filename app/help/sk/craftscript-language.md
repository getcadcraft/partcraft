---
title: Jazyk CraftScript
summary: CraftScript na jednej stránke: matice, rozsahy a indexovanie, operátory, riadenie toku, funkcie, štruktúry a bunky, komentáre, echo, chyby a rozpočet krokov a v čom sa líši od MATLABu.
keywords: CraftScript, jazyk, syntax, matica, pole, vektor, tenzor, index, end, dvojbodka, rozsah, operátor, po prvkoch, transpozícia, if, for, while, switch, try, catch, function, anonymná funkcia, štruktúra, bunka, komentár, echo, bodkočiarka, MATLAB, Octave, port
from: d072b7d5
---

CraftScript je maticový jazyk napísaný tak, aby sa čítal ako MATLAB, takže väčšina klasických numerických kódov (napríklad 88-riadkový kód optimalizácie topológie) funguje s len malými úpravami. Beží v [pracovnom priestore Skript](topic:craftscript) a z príkazového riadku.

## Hodnoty

| Typ | Príklad | Poznámky |
|---|---|---|
| Číslo, pole | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Každé číslo je pole (1×1). Polia sú uložené po stĺpcoch, až do 8 rozmerov |
| Logická hodnota | `A > 2`, `true` | Polia hodnôt pravda/nepravda; použiteľné ako indexy |
| Text | `'beam'`, `"beam"` | |
| Riedka matica | `sparse(i, j, v, n, n)` | Pre matice tuhosti |
| Sieť, pole, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Čo kreslí `show` |
| Štruktúra | `s.E = 210e3` | Pomenované polia |
| Bunka | `c = {1, 'two', [3 4]}` | Zoznam ľubovoľných hodnôt |
| Handle funkcie | `f = @(x) x.^2` | |

## Polia a indexovanie

- Rozsahy: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indexovanie začína od 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (celý stĺpec), `A(:)` (všetko ako jeden stĺpec), `v(v > 0)` (logické indexovanie).
- Priradenie za koniec poľa ho zväčší, ako v MATLABe: `v(10) = 1`.

## Operátory

- `+ - * / \ ^` sú maticové operácie (`A \ b` rieši sústavu); `.* ./ .^` pracujú po prvkoch. `'` robí transpozíciu.
- Porovnania `== ~= < <= > >=`; logika `& | ~` (po prvkoch) a `&& ||` (skrátené vyhodnotenie).

## Riadenie toku a funkcie

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

Funkcie sa zapisujú do skriptu za jeho príkazy alebo do vlastnej karty skriptu pomenovanej podľa funkcie:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Názov sa hľadá v tomto poradí: premenná, skript v tejto časti s týmto názvom, funkcia knižnice, vstavaná funkcia.

## Echo, komentáre, výstup

- Príkaz bez `;` vypíše svoju hodnotu; `;` ju nechá potichu.
- `%` začína komentár; `%{` a `%}` na samostatných riadkoch zakomentujú riadky medzi nimi.
- `disp(x)`, `fprintf('%g\n', x)` a `display(x)` vypisujú do konzoly.

## Chyby a limity

- Chyby povedia jednoducho, čo sa pokazilo, a uvedú riadok (a reťazec volaní funkcií).
- Každý beh má rozpočet krokov (Možnosti spustenia v paneli); nekonečná slučka sa zastaví hlásením alebo stlačením Zastaviť.
- Polia obsahujú až 134 miliónov hodnôt každé.

## Nie ako v MATLABe

- Príkazy na vykreslenie uvádzajú svoje možnosti priamo vo volaní: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` a podobné sa prijmú, ale nerobia nič.
- `input` a `keyboard` nie sú podporované: skript sa nemôže zastaviť a položiť otázku.
- Nie sú k dispozícii žiadne toolboxy; sú tu [knižnica analýz](topic:craftscript-library) a vstavané funkcie.
