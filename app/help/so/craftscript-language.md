---
title: Luqadda CraftScript
summary: CraftScript hal bog: matrikisyo, kala-dhexaadyo iyo tusmeynta, hawlgallada, xakameynta socodka, functions, struct iyo cell, faallooyin, soo celin, khaladaad iyo miisaaniyadda tallaabooyinka, iyo sida uga duwan tahay MATLAB.
keywords: CraftScript, luqad, syntax, matrikis, array, vector, tensor, tusmo, end, colon, kala-dhexaad, operator, element-wise, transpose, if, for, while, switch, try, catch, function, anonymous function, struct, cell, faallo, echo, semicolon, MATLAB, Octave, port
from: d072b7d5
---

CraftScript waa luqad matrikis ah oo loo qoray si ay u akhrisanayso sida MATLAB, sidaas darteed inta badan codadka tirada ee caadiga ah (tusaale ahaan codka habaynta topology-ga ee 88 sadar) waxay ku shaqeeyaan isbeddello yar oo keliya. Waxay ku socotaa [Goobta Script](topic:craftscript) iyo amarka command line-ka.

## Qiyamaha

| Nooca | Tusaale | Xusuus |
|---|---|---|
| Tiro, array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Tiro kasta waa array (1×1). Arrays-ka waxa lagu kaydiyaa tiir-tiir, ilaa 8 cabbir |
| Macquul | `A > 2`, `true` | Arrays oo true/false ah; waa la isticmaali karaa tusmooyin |
| Qoraal | `'beam'`, `"beam"` | |
| Matrikis sparse | `sparse(i, j, v, n, n)` | Matrikisyada adkaysiga |
| Mesh, field, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Waxa `show` sawiraa |
| Struct | `s.E = 210e3` | Goobo magac leh |
| Cell | `c = {1, 'two', [3 4]}` | Liis qiyam kasta ah |
| Function handle | `f = @(x) x.^2` | |

## Arrays iyo tusmeynta

- Kala-dhexaadyo: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Tusmeyntu waxay ka bilaabataa 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (tiir oo dhan), `A(:)` (wax walba hal tiir), `v(v > 0)` (tusmeyn macquul ah).
- Qoristu ka baxsan dhammaadka waxay array-ga ballaarisaa, sida MATLAB: `v(10) = 1`.

## Hawlgallada

- `+ - * / \ ^` waa hawlgallo matrikis (`A \ b` wuxuu xalliyaa); `.* ./ .^` waxay shaqeeyaan unug-unug. `'` wuxuu beddelaa safka iyo tiirka.
- Isbarbardhigga `== ~= < <= > >=`; macquulka `& | ~` (unug-unug) iyo `&& ||` (gaabin).

## Xakameynta socodka iyo functions-ka

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

Functions-ka waxay ku jiraan script-ka amarradiisa ka dib, ama tab script u gaar ah oo loogu magac daray function-ka:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Magaca waxaa lagu raadiyaa amarkan: doorsoome, script qaybtan ku jira oo leh magacaas, function maktabad, function dhismay.

## Soo celin, faallooyin, wax soo saar

- Bayaan aan `;` lahayn ayaa qiimihiisa daabacda; `;` ayaa ku hayaa aamusnaan.
- `%` wuxuu bilaabaa faallo; `%{` iyo `%}` oo ku yaal sadar kaliya ayaa faallaynaya sadarrada ka dhexeeya.
- `disp(x)`, `fprintf('%g\n', x)` iyo `display(x)` waxay daabacaan console-ka.

## Khaladaad iyo xaddidaad

- Khaladaadu waxay si fudud u sheegaan waxa khaldan iyo sadarka (iyo silsiladda wicitaanka functions-ka).
- Socod kasta wuxuu leeyahay miisaaniyad tallaabooyin (Run options ee panel-ka); wareeg aan dhammaadka lahayn wuxuu joogsadaa fariin, ama riix Stop.
- Array kasta wuxuu ilaa 134 milyan oo qiyam hayn karaa.

## Ma aha sida MATLAB

- Amarrada plot-ka waxay dhigaan xulashooyinkooda wicitaanka: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` iyo kuwa la mid ah waa la aqbalaa, ma sameeyaan wax.
- `input` iyo `keyboard` lama taageero: script-ku ma istaagi karo si uu su'aal u weyddiiyo.
- Ma jiraan toolboxes; [maktabadda falanqaynta](topic:craftscript-library) iyo built-in functions-ka ayaa jira oo keliya.
