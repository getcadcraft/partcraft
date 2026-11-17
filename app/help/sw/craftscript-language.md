---
title: Lugha ya CraftScript
summary: CraftScript kwa ukurasa mmoja: matriki, safu na faharasa, waendeshaji, mtiririko wa udhibiti, kazi, struct na seli, maoni, echo, hitilafu na bajeti ya hatua, na jinsi inavyotofautiana na MATLAB.
keywords: CraftScript, lugha, sintaksia, matriki, safu, vekta, tensor, faharasa, mwisho, koloni, masafa, opereta, kwa kila kipengele, geuza, if, for, while, switch, try, catch, kazi, kazi isiyo na jina, struct, seli, maoni, echo, semikoloni, MATLAB, Octave, uhamishaji
from: d072b7d5
---

CraftScript ni lugha ya matriki iliyoandikwa ili isomeke kama MATLAB, kwa hiyo misimbo mingi ya kawaida ya hesabu (kwa mfano msimbo wa uboreshaji wa topolojia wa mistari 88) hufanya kazi kwa mabadiliko madogo tu. Inaendeshwa katika [Eneo la Script](topic:craftscript) na kutoka kwenye mstari wa amri.

## Thamani

| Aina | Mfano | Maelezo |
|---|---|---|
| Namba, safu | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Kila namba ni safu (safu ya 1×1). Safu huhifadhiwa safu-wima kwa safu-wima, hadi vipimo 8 |
| Kimantiki | `A > 2`, `true` | Safu za kweli/si kweli; zinaweza kutumika kama faharasa |
| Maandishi | `'beam'`, `"beam"` | |
| Matriki adimu | `sparse(i, j, v, n, n)` | Kwa matriki za ugumu |
| Mesh, uwanja, modeli | `hexGrid(…)`, `part()`, `load('part.stl')` | Kile `show` inachochora |
| Struct | `s.E = 210e3` | Sehemu zenye majina |
| Seli | `c = {1, 'two', [3 4]}` | Orodha ya thamani zozote |
| Kishikio cha kazi | `f = @(x) x.^2` | |

## Safu na faharasa

- Masafa: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Faharasa huanza kwa 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (safu-wima nzima), `A(:)` (kila kitu kama safu-wima moja), `v(v > 0)` (faharasa ya kimantiki).
- Kuweka thamani zaidi ya mwisho huongeza safu, kama katika MATLAB: `v(10) = 1`.

## Waendeshaji

- `+ - * / \ ^` ni shughuli za matriki (`A \ b` hutatua); `.* ./ .^` hufanya kazi kipengele kwa kipengele. `'` hugeuza.
- Ulinganisho `== ~= < <= > >=`; mantiki `& | ~` (kipengele kwa kipengele) na `&& ||` (hukatiza mapema).

## Mtiririko wa udhibiti na kazi

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

Kazi huwekwa katika script baada ya amri zake, au katika kichupo chake cha script chenye jina la kazi hiyo:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Jina hutafutwa kwa mpangilio huu: kigeu, script katika sehemu hii yenye jina hilo, kazi ya maktaba, kazi iliyojengwa ndani.

## Echo, maoni, matokeo

- Kauli isiyo na `;` huchapisha thamani yake; `;` huiweka kimya.
- `%` huanza maoni; `%{` na `%}` kwenye mistari yao wenyewe huweka maoni mistari iliyo kati yake.
- `disp(x)`, `fprintf('%g\n', x)` na `display(x)` huchapisha kwenye kiweko.

## Hitilafu na mipaka

- Hitilafu hueleza kilichoenda vibaya kwa maneno rahisi na kutoa mstari (pamoja na mnyororo wa miito ya kazi).
- Kila endesho lina bajeti ya hatua (Chaguo za uendeshaji katika paneli); kitanzi kisichoisha husimama kwa ujumbe, au bonyeza Simamisha.
- Kila safu hushikilia hadi thamani milioni 134.

## Tofauti na MATLAB

- Amri za michoro huweka chaguo zao ndani ya mwito: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` na zinazofanana zinakubaliwa lakini hazifanyi kitu.
- `input` na `keyboard` hazitumiki: script haiwezi kusimama ili kuuliza swali.
- Hakuna vifurushi vya zana; [maktaba ya uchambuzi](topic:craftscript-library) na kazi zilizojengwa ndani ndizo zilizopo.
