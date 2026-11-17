---
title: Scripts-ka Python
summary: Qor scripts-ka Goobta Script ee Python 3: object-ka cs ee built-in functions-ka, arrays oo u eg numpy oo tusmeyn 0 ka bilaabanaya, workspace-ka wadaagga ah, daabacaadda, waxa aan weli jirin, iyo sida Python loo xidho sida CraftScript iyo Lua.
keywords: Python, Python 3, CPython, WebAssembly, xidhan, amaan, sealed, safe, script, luqad, cs, ws, workspace, numpy, array, matrikis, tusmeyn, indexing, print, display, kalsoonaan, trust
from: 66eab56d
---

Python waa luqadda saddexaad ee [Goobta Script](topic:craftscript). Dooro **Python** sanduuqa luqadda ee kor ku yaal editor-ka (fayl `.py` wuxuu si toos ah ugu furmaa Python). Python, Lua iyo CraftScript waxay wadaagaan isla doorsoomayaasha iyo isla built-in functions-ka, sidaas darteed script Python wuxuu isticmaali karaa waxa script CraftScript sameeyay, iyo sidii kale.

Socodka Python ee ugu horreeya booqasho kasta wuxuu soo rarayaa Python laftiisa (CPython 3.14, qiyaastii 7 MB) bogga, taas oo qaadata dhowr ilbiriqsi. Python weli ma ku jirto {{ui:Kaydi khadka ka baxsan}}: socodsii hal script Python marka hore khadka xiran.

## Python waa la xidhay

Scripts-ka Python waa la xidhay sida scripts-ka CraftScript iyo Lua: waxay gaadhaan qaybta, doorsoomayaasha iyo built-in functions-ka, iyo waxba kale. Socod kasta waa Python cusub oo ku jira sandbox u gaar ah, oo leh geed fayl yar oo xusuus ku jira (maktabadda caadiga ah iyo folder `/tmp` oo socodka dhamaadkiisa ka baxa). Ma gaadhi karo shabakadda, faylashaada ama bogga kale, ha ahaadeen browser-ka ama command line-ka. Script ka timid qof kale wuxuu weli isticmaali karaa waqti ama xusuus badan: {{ui:Jooji}} ayaa joojiya.

## Aasaasiyaadka

```
A = cs.magic(3)              # built-in function kasta waa cs.<name>
B = A @ A.T                  # @ waa wax-soo-saarka matrikiska, .T waa transpose
C = A * 2 + 1                # + - * / ** waa unug-unug, sida numpy
print(A[0, 1], A[-1, -1])    # 0 ka bilaabo; tirada taban ka bilaabata dhamaadka
row = A[1]                   # hal tusmeyn matrikis: safka
big = A[A > 4]               # maaskada macquulka ah ayaa unugyada xulata
A[0, 0] = -5                 # qoris array gudihiisa
V, D = cs.call('eig', 2, A)  # natiijooyin badan: cs.call(name, inta, …)
```

- Array 1 × 1 wuxuu u yimaadaa sida tiro caadi ah; arrays kale, matrikisyada sparse, meshes, fields iyo models waa **Values**.
- Value wuxuu leeyahay `shape` (tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (safkiisa), iyo `float()`, `int()` iyo `bool()` unug keliya.
- Isbarbardhigga (`<`, `==`, …) waa unug-unug, sida numpy: waxay bixiyaan Value macquul ah.
- Liisaska tirooyinka ee loo gudbiyo built-in function wuxuu noqdaa arrays: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` wuxuu sameeyaa matrikis.
- Dict wuxuu noqdaa struct, liis khaldan oo waxyaabo kala duwan wuxuu noqdaa cell, iyo dib.

Global kasta oo script-kaagu sameeyo (tiro, Value, dict, liis…) wuxuu ku dhacaa tab-ka **Doorsoomayaasha** marka socodku dhammaado, xitaa khalad ka dib. Magacyada bilaabma `_`, functions, classes iyo modules waxay ku sii jiraan Python. `ws.name` wuxuu akhrinayaa ama dejinayaa doorsoome toos ah, `ws_names()` wuxuu liistaa them.

`print(…)` wuxuu daabacaa console-ka. `display(…)` (ama `cs.display`) wuxuu muujiyaa mesh, field ama plot, sida CraftScript.

## Wac maktabadda falanqaynta

Functions-ka maktabadda waxaa loo wacaa sida built-ins: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Magaca ku qor script-ka sida uu yahay: PartCraft wuxuu helaa functions-ka maktabadda ee script-ku isticmaalo ka hor inta uusan socon.

## Weli ma jiro

- numpy, scipy iyo xirmooyin kale: waxa jira oo keliya maktabadda caadiga ah ee Python (`math`, `json`, `itertools`, `decimal`, `statistics`…), oo aan qaybaha daaqadaha, terminal-ka iyo database-ka lahayn (`tkinter`, `curses`, `sqlite3`).
- Sockets iyo wax kasta oo ka baxsan: Python ma leh shabakad halkan.
- `time.sleep` wuxuu soo laabtaa isla markiiba.
- Xiritaanka editor-ka, iyo wicitaanka function Python ka script CraftScript.
- Socodku wuxuu hubiyaa miisaaniyadda amarrada iyo Stop 1000 sadar kasta; xisaab dheer oo gudaha hal built-in function ah ayaa marka hore dhammaanaya.
