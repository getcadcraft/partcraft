---
title: CraftScripti keel
summary: CraftScript ühel lehel: maatriksid, vahemikud ja indekseerimine, operaatorid, juhtimisvoog, funktsioonid, struktuurid ja lahtrid, kommentaarid, väljund, vead ja sammueelarve ning erinevus MATLABist.
keywords: CraftScript, keel, süntaks, maatriks, massiiv, vektor, tensor, indeks, end, koolon, vahemik, operaator, elemendikaupa, transponeerimine, if, for, while, switch, try, catch, funktsioon, anonüümne funktsioon, struktuur, lahter, kommentaar, väljund, semikoolon, MATLAB, Octave, üleviimine
from: d072b7d5
---

CraftScript on maatriksikeel, mis on kirjutatud nii, et seda loeb nagu MATLABi, seega jooksevad enamik klassikalisi numbrilisi koode (näiteks 88-realine topoloogiaoptimeerimise kood) väikeste muudatustega. See töötab [Skripti tööruumis](topic:craftscript) ja käsurealt.

## Väärtused

| Tüüp | Näide | Märkused |
|---|---|---|
| Arv, massiiv | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Iga arv on massiiv (1×1). Massiive hoitakse veergude kaupa, kuni 8 mõõdet |
| Loogiline | `A > 2`, `true` | Tõene/väär massiivid; kasutatavad indeksitena |
| Tekst | `'beam'`, `"beam"` | |
| Hõredmaatriks | `sparse(i, j, v, n, n)` | Jäikusmaatriksite jaoks |
| Võrk, väli, mudel | `hexGrid(…)`, `part()`, `load('part.stl')` | Mida `show` joonistab |
| Struktuur | `s.E = 210e3` | Nimega väljad |
| Lahter | `c = {1, 'two', [3 4]}` | Mis tahes väärtuste loend |
| Funktsiooni käepide | `f = @(x) x.^2` | |

## Massiivid ja indekseerimine

- Vahemikud: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indekseerimine algab 1-st: `A(2, 3)`, `v(end)`, `A(:, 1)` (terve veerg), `A(:)` (kõik ühe veeruna), `v(v > 0)` (loogiline indekseerimine).
- Lõpust väljapoole määramine kasvatab massiivi, nagu MATLABis: `v(10) = 1`.

## Operaatorid

- `+ - * / \ ^` on maatriksoperatsioonid (`A \ b` lahendab); `.* ./ .^` töötavad elemendi kaupa. `'` transponeerib.
- Võrdlused `== ~= < <= > >=`; loogika `& | ~` (elemendi kaupa) ja `&& ||` (lühisega).

## Juhtimisvoog ja funktsioonid

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

Funktsioonid lähevad skripti pärast selle käske või omaette skriptivahekaardile, mis on nimetatud funktsiooni järgi:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Nime otsitakse selles järjekorras: muutuja, selle detaili skript sellise nimega, teegi funktsioon, sisseehitatud funktsioon.

## Väljund, kommentaarid, väljastus

- Lause ilma `;`-ita prindib oma väärtuse; `;` hoiab vaikse.
- `%` alustab kommentaari; `%{` ja `%}` omaette ridadel kommenteerivad nendevahelised read välja.
- `disp(x)`, `fprintf('%g\n', x)` ja `display(x)` prindivad konsooli.

## Vead ja piirangud

- Vead ütlevad lihtsate sõnadega, mis valesti läks, ning annavad rea (ja funktsioonikutsete ahela).
- Igal käivitusel on sammueelarve (**Käivitussuvandid** paneelis); lõpmatu tsükkel peatub teatega või vajuta {{ui:Peata}}.
- Massiivid hoiavad igaüks kuni 134 miljonit väärtust.

## Ei ole nagu MATLAB

- Graafikukäsud panevad oma valikud kutsesse: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` ja sarnased on lubatud ja ei tee midagi.
- `input` ja `keyboard` ei ole toetatud: skript ei saa peatuda, et küsimust esitada.
- Toolboxe ei ole; [analüüsiteek](topic:craftscript-library) ja sisseehitatud funktsioonid on see, mis on.
