---
title: Mga script sa Python
summary: Sumulat ng mga script ng Script workspace sa Python 3: ang cs object ng mga built-in function, mga array bilang numpy-like na value na may 0-based indexing, ang shared na workspace, pag-print, ang wala pa rito, at kung paano nakaselyado ang Python gaya ng CraftScript at Lua.
keywords: Python, Python 3, CPython, WebAssembly, sealed, safe, script, language, cs, ws, workspace, numpy, array, matrix, indexing, print, display, trust
from: 66eab56d
---

Ang Python ang pangatlong wika ng [Script workspace](topic:craftscript). Piliin ang **Python** sa language box sa itaas ng editor (ang `.py` file ay magbubukas sa Python mismo). Ang Python, Lua at CraftScript ay nagbabahagi ng parehong variable at parehong built-in function, kaya maaaring gamitin ng Python script ang ginawa ng CraftScript script, at ganoon din sa kabilang panig.

Ang unang run ng Python sa isang bisita ay naglo-load ng Python mismo (CPython 3.14, mga 7 MB) mula sa site na ito, na tumatagal ng ilang segundo. Hindi pa bahagi ng {{ui:Save for offline}} ang Python: magpatakbo muna ng isang Python script habang online.

## Selyado ang Python

Ang mga Python script ay nakaselyado gaya ng mga CraftScript at Lua script: naaabot nila ang part, ang mga variable at ang built-in function, at wala nang iba. Bawat run ay bagong Python sa sarili nitong sandbox na may maliit na file tree sa memory (ang standard library nito at isang `/tmp` folder na nawawala pagkatapos ng run). Hindi nito maaabot ang network, ang mga file mo o ang iba pang bahagi ng page, sa browser man o sa command line. Ang script mula sa iba ay maaari pa ring kumonsumo ng maraming oras o memory: tinatapos ito ng {{ui:Stop}}.

## Ang mga pangunahing bagay

```python
A = cs.magic(3)              # bawat built-in function ay cs.<name>
B = A @ A.T                  # ang @ ay matrix product, ang .T ay transpose
C = A * 2 + 1                # ang + - * / ** ay elementwise, gaya ng numpy
print(A[0, 1], A[-1, -1])    # 0-based; ang negatibo ay nagbibilang mula sa dulo
row = A[1]                   # isang index sa matrix: isang row
big = A[A > 4]               # ang logical mask ay pumipili ng mga element
A[0, 0] = -5                 # pag-assign sa array
V, D = cs.call('eig', 2, A)  # maraming resulta: cs.call(name, ilan, …)
```

- Ang 1 × 1 array ay dumarating bilang plain number; ang ibang array, sparse matrix, mesh, field at model ay **Values**.
- Ang Value ay may `shape` (tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (mga row nito), at `float()`, `int()` at `bool()` para sa isang element.
- Ang mga comparison (`<`, `==`, …) ay elementwise, gaya ng numpy: nagbibigay sila ng logical Value.
- Ang mga listahan ng numero na ipinasa sa built-in function ay nagiging array: `cs.sum([1, 2, 3])`. Ang `cs.tensor([[1, 2], [3, 4]])` ay gumagawa ng matrix.
- Ang dict ay nagiging struct, at ang listahan ng halo-halong bagay ay nagiging cell, at pabalik.

Bawat global na gagawin ng script mo (isang number, Value, dict, list…) ay napupunta sa **Variables** tab kapag natapos ang run, kahit pagkatapos ng error. Ang mga pangalang nagsisimula sa `_`, function, class at module ay nananatili sa Python. Ang `ws.name` ay nagbabasa o nagtatakda ng variable nang direkta, at ang `ws_names()` ay naglilista sa mga ito.

Ang `print(…)` ay nagsusulat sa console. Ang `display(…)` (o `cs.display`) ay nagpapakita ng mesh, field o plot, gaya ng sa CraftScript.

## Tawagin ang analysis library

Tinatawag ang mga library function gaya ng mga built-in: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Isulat ang pangalan sa script nang eksakto: hinahanap ng PartCraft ang mga library function na ginagamit ng script bago ito tumakbo.

## Wala pa rito

- numpy, scipy at iba pang package: tanging standard library ng Python (`math`, `json`, `itertools`, `decimal`, `statistics`…) ang narito, nang walang window, terminal at database na bahagi nito (`tkinter`, `curses`, `sqlite3`).
- Socket at anumang iba pang makakaabot sa labas: walang network ang Python dito.
- Ang `time.sleep` ay agad bumabalik.
- Ang folding sa editor, at ang pagtawag ng Python function mula sa isang CraftScript script.
- Tinitingnan ng run ang instruction budget at ang Ihinto tuwing 1000 linya; ang mahabang kalkulasyon sa loob ng isang built-in function ay tatapos muna.
