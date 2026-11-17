---
title: Ulimi lwe-CraftScript
summary: I-CraftScript ngekhasi elilodwa: ama-matrix, izinhlu nokuhlonza, opharetha, ukulawula ukuhamba, imisebenzi, izakhiwo namaseli, izimvumelo, ukuphindisela, amaphutha nesabelo sezinyathelo, nokuthi ihluke kanjani ku-MATLAB.
keywords: CraftScript, ulimi, isintaksi, matrix, array, vector, tensor, index, end, colon, range, operator, element-wise, transpose, if, for, while, switch, try, catch, function, anonymous function, struct, cell, comment, echo, semicolon, MATLAB, Octave, port
from: d072b7d5
---

I-CraftScript ulimi lwe-matrix olubhalwe ukuze lufundeke njenge-MATLAB, ngakho iningi lezinkambu zezibalo zakudala (isibonelo, ikhodi yokwenziwa kahle kwesakhiwo engu-88 imigqa) isebenza ngezinguquko ezincane kuphela. Isebenza ku-[Script workspace](topic:craftscript) nasemugqeni womyalo.

## Amanani

| Uhlobo | Isibonelo | Amanothi |
|---|---|---|
| Inombolo, i-array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Yonke inombolo iba yi-array (eyi-1×1). Ama-array agcinwa ngekholomu ngekholomu, kuze kube ngama-dimension ayi-8 |
| Ngokwesimo | `A > 2`, `true` | Ama-array aqiniso/amanga; angasetshenziswa njengezinkomba |
| Umbhalo | `'beam'`, `"beam"` | |
| I-matrix ebhodlile (sparse) | `sparse(i, j, v, n, n)` | Ezinqubweni zokuqina |
| Imesh, insimu, imodeli | `hexGrid(…)`, `part()`, `load('part.stl')` | Okudwetshwa yi-`show` |
| Isakhiwo (struct) | `s.E = 210e3` | Izinkambu ezinamagama |
| Iseli (cell) | `c = {1, 'two', [3 4]}` | Uhlu lwanoma yiziphi izinani |
| Isibambi somsebenzi | `f = @(x) x.^2` | |

## Ama-array nokuhlonza

- Imikhakha: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Ukuhlonza kuqala ku-1: `A(2, 3)`, `v(end)`, `A(:, 1)` (ikholomu yonke), `A(:)` (konke njengekholomu eyodwa), `v(v > 0)` (ukuhlonza ngokwesimo).
- Ukunikeza inani ngaphezu kwesiphetho kukhulisa i-array, njenge-MATLAB: `v(10) = 1`.

## Opharetha

- `+ - * / \ ^` ngokusebenzayo kwe-matrix (`A \ b` ixazulula); `.* ./ .^` zisebenza sakhi-sakhi. `'` iguqula (transpose).
- Ukuqhathanisa `== ~= < <= > >=`; izingqondo `& | ~` (sakhi-sakhi) kanye no `&& ||` (ziyeka msinya).

## Ukulawula ukuhamba nemisebenzi

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

Imisebenzi ifakwa ku-script ngemva kwemiyalo yayo, noma esikhenkethweni sayo se-script esiqanjwe ngegama lomsebenzi:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Igama liyafunwa ngalolu hlelo: okuguquguqukayo, i-script kulesi singxenye enalelo gama, umsebenzi womtapo, umsebenzi wangaphakathi.

## Ukuphindisela, izimvumelo, okuphumayo

- Isitatimende esingenalo `;` sibonisa inani laso; `;` iyasithulisa.
- `%` iqala isimvumelo; `%{` no `%}` emigqeni yazo zimvumela imigqa phakathi kwazo.
- `disp(x)`, `fprintf('%g\n', x)` no `display(x)` zibhala kukhonsoli.

## Amaphutha nemikhawulo

- Amaphutha asho ngamagama alula ukuthi yini engahambanga kahle futhi anikeze umugqa (nochungechunge lwezingcingo zomsebenzi).
- Ukuqalisa ngakunye kunesabelo sezinyathelo (Izinketho zokuqalisa esikhenkethweni); ilophu engapheli imisa ngomyalezo, noma cindezela Misa.
- Ama-array ngamunye abamba izinani ezifika ku-134 million.

## Akufani ne-MATLAB

- Imiyalo yokufaka igrafu ifaka izinketho zayo ekubizweni: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. I-`figure`, `hold`, `axis`, `title(…)` nezinye ezifana nazo yamukelwa futhi ayenzi lutho.
- I-`input` no `keyboard` akusekelwa: i-script ayikwazi ukuma ukuze ibuze umbuzo.
- Azikho izinsethi zamathuluzi; [umtapo wokuhlaziya](topic:craftscript-library) nemisebenzi yangaphakathi yiyona ekhona.
