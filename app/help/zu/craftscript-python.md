---
title: Ama-script ku-Python
summary: Bhala ama-script e-Script workspace ngePython 3: into ethi cs yemisebenzi yangaphakathi, ama-array njengezinani ezifana ne-numpy anokuhlonza okuqala ku-0, i-workspace ehlanganyelwe, ukuphrinta, okungakakho, nokuthi i-Python ivalelwe kanjani njenge-CraftScript ne-Lua.
keywords: Python, Python 3, CPython, WebAssembly, ivalelwe, ephephile, script, ulimi, cs, ws, workspace, numpy, array, matrix, ukuhlonza, phrinta, bonisa, ukuthembeka
from: 66eab56d
---

I-Python ulimi lwesithathu kwi-[Script workspace](topic:craftscript). Khetha **Python** ebhokisini lolimi phezu komhleli (ifayela `.py` livula nge-Python ngokwalo). I-Python, i-Lua ne-CraftScript zabelana ngokuguquguqukayo okufanayo nemisebenzi yangaphakathi efanayo, ngakho i-script ye-Python ingasebenzisa okwenziwe yi-script ye-CraftScript, nakuphambene.

Ukuqalisa kokuqala kwe-Python kuvakashelo kulayisha i-Python ngokwayo (CPython 3.14, cishe 7 MB) kule sayithi, okuthatha imizuzwana embalwa. I-Python ayikaba yingxenye ye-{{ui:Londoloza ngaphandle kwe-inthanethi}} okwamanje: qhuba i-script eyodwa ye-Python uku-inthanethi kuqala.

## I-Python ivalelwe

Ama-script e-Python avalelwe njengama-script e-CraftScript ne-Lua: afinyelela engxenyeni, okuguquguqukayo nemisebenzi yangaphakathi, hhayi okunye. Ukuqalisa ngakunye kuyi-Python entsha esandbox yayo enesakhiwo esincane samafayela ekhumbulweni (imitapo yayo yemithetho nefolda ye-`/tmp` enyamalala ngemva kokuqhuba). Ayikwazi ukufinyelela inethiwekhi, amafayela akho noma ikhasi lonke, kusibonisi nasemugqeni womyalo ngokufanayo. I-script evela komunye umuntu isenza kusebenze isikhathi noma inkumbulo eningi: {{ui:Misa}} iyiphelisa.

## Okubalulekile

```
A = cs.magic(3)              # yonke imisebenzi yangaphakathi ngu-cs.<name>
B = A @ A.T                  # @ ngumphumela we-matrix, .T ukuguqula
C = A * 2 + 1                # + - * / ** zisebenza sakhi-sakhi, njenge-numpy
print(A[0, 1], A[-1, -1])    # ngo-0; okungamanani angaphansi kubalwa kusukela emuva
row = A[1]                   # isikhombi esisodwa ku-matrix: umugqa
big = A[A > 4]               # imaski yokuqiniseka ikhetha izakhi
A[0, 0] = -5                 # ukunikeza inani ku-array
V, D = cs.call('eig', 2, A)  # imiphumela eminingi: cs.call(igama, inani, …)
```

- I-array ye-1 × 1 ifika njengenombolo evamile; ezinye ama-array, ama-sparse matrix, imesh, izinsimu nemodeli ngu-**Values**.
- I-Value inezakhiwo `shape` (i-tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (imigqa yayo), no `float()`, `int()` no `bool()` ngesakhi esisodwa.
- Ukuqhathanisa (`<`, `==`, …) kusebenza sakhi-sakhi, njenge-numpy: kunikeza i-Value yokuqiniseka.
- Uhlu lwezinombolo olunikezwa umsebenzi wangaphakathi luba ama-array: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` yenza i-matrix.
- I-dict iba yi-struct nohlu lwezinto ezixubile luba iseli, futhi kuphinde kube njalo.

Konke okuwumhlaba i-script yakho ikwenzayo (inombolo, i-Value, i-dict, uhlu…) kufika ethebhini le-**Okuguquguqukayo** lapho ukuqhuba kuphela, noma emva kwephutha. Amagama aqala nge-`_`, imisebenzi, amakilasi nezimoduli ahlala ku-Python. `ws.name` ifunda noma isethe okuguquguqukayo ngqo, ne-`ws_names()` iyawahlu.

`print(…)` ibhala kukhonsoli. `display(…)` (noma `cs.display`) ibonisa imesh, insimu noma igrafu, njengakwi-CraftScript.

## Biza umtapo wokuhlaziya

Imisebenzi yomtapo ibizwa njengemisebenzi yangaphakathi: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Bhala igama ku-script njengoba linjalo: i-PartCraft ithola imisebenzi yomtapo i-script esebenzisa ngaphambi kokuqhuba.

## Akukakho okwamanje

- i-numpy, i-scipy namanye amaphakheji: kukhona kuphela umtapo ojwayelekile we-Python (`math`, `json`, `itertools`, `decimal`, `statistics`…), ngaphandle kwezingxenye zawo zamawindow, zesiteshi nedatabase (`tkinter`, `curses`, `sqlite3`).
- Ama-socket nanoma yini enye engafinyelela ngaphandle: i-Python akunayo inethiwekhi lapha.
- I-`time.sleep` iphendula ngokushesha.
- Ukugoqa emhleleni, nokubiza umsebenzi we-Python kusuka ku-script ye-CraftScript.
- Ukuqhuba kuhlola isabelo somyalelo nokuMisa njalo emigqeni engu-1000; ukubalwa okude ngaphakathi komsebenzi owodwa wangaphakathi kuqedwa kuqala.
