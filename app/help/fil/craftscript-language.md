---
title: Ang wika ng CraftScript
summary: CraftScript sa isang pahina: matrix, range at indexing, operator, control flow, function, struct at cell, comment, echo, error at step budget, at kung paano ito naiiba sa MATLAB.
keywords: CraftScript, language, syntax, matrix, array, vector, tensor, index, end, colon, range, operator, element-wise, transpose, if, for, while, switch, try, catch, function, anonymous function, struct, cell, comment, echo, semicolon, MATLAB, Octave, port
from: d072b7d5
---

Ang CraftScript ay isang matrix language na isinulat para magmukhang MATLAB, kaya karamihan sa klasikong numerical code (halimbawa ang 88-line topology optimization code) ay tatakbo na may kaunting pagbabago lang. Tumatakbo ito sa [Script workspace](topic:craftscript) at mula sa command line.

## Mga value

| Uri | Halimbawa | Tala |
|---|---|---|
| Number, array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Bawat number ay array (isang 1×1). Naka-store ang mga array column by column, hanggang 8 dimension |
| Logical | `A > 2`, `true` | Mga array ng true/false; magagamit bilang index |
| Teksto | `'beam'`, `"beam"` | |
| Sparse matrix | `sparse(i, j, v, n, n)` | Para sa stiffness matrix |
| Mesh, field, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Ang iginuguhit ng `show` |
| Struct | `s.E = 210e3` | Mga pinangalanang field |
| Cell | `c = {1, 'two', [3 4]}` | Listahan ng anumang value |
| Function handle | `f = @(x) x.^2` | |

## Mga array at indexing

- Mga range: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Nagsisimula ang indexing sa 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (isang buong column), `A(:)` (lahat bilang isang column), `v(v > 0)` (logical indexing).
- Ang pag-assign lampas sa dulo ay nagpapalaki ng array, tulad sa MATLAB: `v(10) = 1`.

## Mga operator

- Ang `+ - * / \ ^` ay mga matrix operation (ang `A \ b` ay nagso-solve); ang `.* ./ .^` ay gumagana element by element. Ang `'` ay nag-transpose.
- Mga comparison `== ~= < <= > >=`; logic `& | ~` (element by element) at `&& ||` (short-circuit).

## Control flow at function

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

Ilagay ang mga function sa script pagkatapos ng mga command nito, o sa sarili nitong script tab na may pangalan ng function:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Ang pangalan ay hinahanap sa ganitong pagkakasunod: isang variable, isang script sa part na ito na may ganoong pangalan, isang library function, isang built-in function.

## Echo, comment, output

- Ang statement na walang `;` ay nagpi-print ng value nito; ang `;` ay nagpapatahimik dito.
- Ang `%` ay nagsisimula ng comment; ang `%{` at `%}` sa sariling linya ay nagko-comment out ng mga linya sa pagitan nila.
- Ang `disp(x)`, `fprintf('%g\n', x)` at `display(x)` ay nagpi-print sa console.

## Mga error at limit

- Sinasabi ng mga error kung ano ang mali sa simpleng salita at ibinibigay ang linya (at ang kadena ng mga function call).
- Bawat run ay may step budget (Run options sa panel); ang endless loop ay humihinto na may mensahe, o pindutin ang Ihinto.
- Ang mga array ay may hawak na hanggang 134 milyong value bawat isa.

## Hindi tulad ng MATLAB

- Ang mga plot command ay inilalagay ang kanilang options sa call: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. Ang `figure`, `hold`, `axis`, `title(…)` at katulad ay tinatanggap pero walang ginagawa.
- Ang `input` at `keyboard` ay hindi suportado: hindi maaaring huminto ang script para magtanong.
- Walang toolbox; ang [analysis library](topic:craftscript-library) at ang mga built-in function ang meron.
