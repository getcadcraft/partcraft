---
title: Gjuha CraftScript
summary: CraftScript në një faqe: matricat, intervalet dhe indeksimi, operatorët, rrjedha e kontrollit, funksionet, strukturat dhe qelizat, komentet, jehona, gabimet dhe buxheti i hapave, dhe si ndryshon nga MATLAB.
keywords: CraftScript, gjuhë, sintaksë, matricë, varg, vektor, tensor, indeks, end, dy pika, interval, operator, element pas elementi, transpozim, if, for, while, switch, try, catch, funksion, funksion anonim, strukturë, qelizë, koment, jehonë, pikëpresje, MATLAB, Octave, portim
from: d072b7d5
---

CraftScript është një gjuhë matricash e shkruar që të lexohet si MATLAB, kështu që shumica e kodeve klasike numerike (për shembull kodi 88-rresht i optimizimit të topologjisë) funksionojnë me ndryshime të vogla. Ajo funksionon në [Hapësirën e skriptit](topic:craftscript) dhe nga vija e komandës.

## Vlerat

| Lloji | Shembull | Shënime |
|---|---|---|
| Numër, varg | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Çdo numër është një varg (një 1×1). Vargjet ruhen kolonë pas kolone, deri në 8 dimensione |
| Logjik | `A > 2`, `true` | Vargje true/false; të përdorshme si indekse |
| Tekst | `'beam'`, `"beam"` | |
| Matricë e rrallë | `sparse(i, j, v, n, n)` | Për matricat e ngurtësisë |
| Rrjetë, fushë, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Çfarë vizaton `show` |
| Strukturë | `s.E = 210e3` | Fusha me emër |
| Qelizë | `c = {1, 'two', [3 4]}` | Listë vlerash të çfarëdoshme |
| Dorezë funksioni | `f = @(x) x.^2` | |

## Vargjet dhe indeksimi

- Intervalet: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indeksimi fillon nga 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (një kolonë e plotë), `A(:)` (gjithçka si një kolonë), `v(v > 0)` (indeksim logjik).
- Caktimi përtej fundit e zgjeron vargun, si në MATLAB: `v(10) = 1`.

## Operatorët

- `+ - * / \ ^` janë operacione matricash (`A \ b` zgjidh); `.* ./ .^` punojnë element pas elementi. `'` transpozon.
- Krahasimet `== ~= < <= > >=`; logjika `& | ~` (element pas elementi) dhe `&& ||` (me ndërprerje të shkurtër).

## Rrjedha e kontrollit dhe funksionet

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

Funksionet vendosen në një skript pas komandave të tij, ose në skedën e vet të skriptit të emërtuar sipas funksionit:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Një emër kërkohet në këtë rend: një variabël, një skript në këtë pjesë me atë emër, një funksion biblioteke, një funksion i integruar.

## Jehona, komentet, dalja

- Një deklaratë pa `;` shfaq vlerën e saj; `;` e mban të heshtur.
- `%` fillon një koment; `%{` dhe `%}` në rreshta të veçantë komentojnë rreshtat ndërmjet tyre.
- `disp(x)`, `fprintf('%g\n', x)` dhe `display(x)` shfaqin në konsolë.

## Gabimet dhe kufijtë

- Gabimet thonë me fjalë të thjeshta çfarë shkoi keq dhe japin rreshtin (dhe zinxhirin e thirrjeve të funksioneve).
- Çdo ekzekutim ka një buxhet hapash (Opsionet e ekzekutimit në panel); një lak i pafund ndalet me një mesazh, ose shtypni {{ui:Ndalo}}.
- Vargjet mbajnë deri në 134 milionë vlera secili.

## Ndryshe nga MATLAB

- Komandat e grafikut vendosin opsionet e tyre në thirrje: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` dhe të ngjashme pranohen dhe nuk bëjnë asgjë.
- `input` dhe `keyboard` nuk mbështeten: një skript nuk mund të ndalet për të bërë një pyetje.
- Nuk ka paketa veglash; [biblioteka e analizës](topic:craftscript-library) dhe funksionet e integruara janë ato që ekzistojnë.
