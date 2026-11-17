---
title: Jazyk CraftScript
summary: CraftScript na jedné stránce: matice, rozsahy a indexování, operátory, řízení toku, funkce, struktury a buňky, komentáře, výpis, chyby a limit kroků a v čem se liší od MATLABu.
keywords: CraftScript, jazyk, syntaxe, matice, pole, vektor, tenzor, index, end, dvojtečka, rozsah, operátor, po prvcích, transpozice, if, for, while, switch, try, catch, funkce, anonymní funkce, struktura, buňka, komentář, výpis, středník, MATLAB, Octave, port
from: d072b7d5
---

CraftScript je maticový jazyk psaný tak, aby se četl jako MATLAB, takže většina klasických numerických kódů (například 88řádkový kód pro topologickou optimalizaci) běží jen s malými úpravami. Spouští se v [pracovním prostoru Skript](topic:craftscript) a z příkazového řádku.

## Hodnoty

| Typ | Příklad | Poznámky |
|---|---|---|
| Číslo, pole | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Každé číslo je pole (1×1). Pole se ukládají po sloupcích, až do 8 rozměrů |
| Logická hodnota | `A > 2`, `true` | Pole hodnot true/false; lze je použít jako indexy |
| Text | `'beam'`, `"beam"` | |
| Řídká matice | `sparse(i, j, v, n, n)` | Pro matice tuhosti |
| Síť, pole veličin, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Co kreslí `show` |
| Struktura | `s.E = 210e3` | Pojmenované položky |
| Buňka | `c = {1, 'two', [3 4]}` | Seznam libovolných hodnot |
| Odkaz na funkci | `f = @(x) x.^2` | |

## Pole a indexování

- Rozsahy: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indexování začíná od 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (celý sloupec), `A(:)` (vše jako jeden sloupec), `v(v > 0)` (logické indexování).
- Přiřazení za konec pole ho zvětší, jako v MATLABu: `v(10) = 1`.

## Operátory

- `+ - * / \ ^` jsou maticové operace (`A \ b` řeší soustavu); `.* ./ .^` pracují po prvcích. `'` provádí transpozici.
- Porovnání `== ~= < <= > >=`; logika `& | ~` (po prvcích) a `&& ||` (se zkráceným vyhodnocením).

## Řízení toku a funkce

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

Funkce se píší do skriptu za jeho příkazy, nebo do vlastní karty skriptu pojmenované podle funkce:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Jméno se hledá v tomto pořadí: proměnná, skript v tomto dílu s tímto názvem, funkce z knihovny, vestavěná funkce.

## Výpis, komentáře, výstup

- Příkaz bez `;` vypíše svou hodnotu; `;` ji potlačí.
- `%` začíná komentář; `%{` a `%}` na vlastních řádcích zakomentují řádky mezi nimi.
- `disp(x)`, `fprintf('%g\n', x)` a `display(x)` tisknou do konzole.

## Chyby a limity

- Chyby popisují, co se pokazilo, běžnými slovy a uvádějí řádek (a řetězec volání funkcí).
- Každé spuštění má limit kroků (možnosti spuštění v panelu); nekonečná smyčka se zastaví se zprávou, nebo stiskněte tlačítko Zastavit.
- Pole mohou obsahovat až 134 milionů hodnot každé.

## Jinak než v MATLABu

- Příkazy pro graf dávají své volby přímo do volání: `plot(x, y, 'title', 'Chyba', 'xlabel', 'Krok')`. `figure`, `hold`, `axis`, `title(…)` a podobné jsou přijaty a nedělají nic.
- `input` a `keyboard` nejsou podporovány: skript se nemůže zastavit a položit otázku.
- Žádné toolboxy; jsou tu [knihovna analýz](topic:craftscript-library) a vestavěné funkce.
