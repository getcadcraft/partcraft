---
title: Skripti Python valodā
summary: Rakstiet Skripta darbvietas skriptus Python 3 — cs objekts ar iebūvētajām funkcijām, masīvi kā numpy līdzīgas vērtības ar 0-based indeksēšanu, kopīgā darbvieta, drukāšana, kas vēl nav pieejams, un kā Python ir noslēgts tāpat kā CraftScript un Lua.
keywords: Python, Python 3, CPython, WebAssembly, noslēgts, drošs, skripts, valoda, cs, ws, darbvieta, numpy, masīvs, matrica, indeksēšana, drukāt, rādīt, uzticība
from: 66eab56d
---

Python ir trešā valoda [Skripta darbvietā](topic:craftscript). Izvēlieties **Python** valodas lodziņā virs redaktora (`.py` fails atveras Python automātiski). Python, Lua un CraftScript dalās ar tiem pašiem mainīgajiem un tām pašām iebūvētajām funkcijām, tāpēc Python skripts var izmantot to, ko CraftScript skripts izveidoja, un otrādi.

Pirmā Python palaišana apmeklējumā ielādē pašu Python (CPython 3.14, ap 7 MB) no šīs vietnes, kas aizņem dažas sekundes. Python vēl nav daļa no {{ui:Saglabāt bezsaistei}}: vispirms palaidiet vienu Python skriptu tiešsaistē.

## Python ir noslēgts

Python skripti ir noslēgti tāpat kā CraftScript un Lua skripti: tie piekļūst daļai, mainīgajiem un iebūvētajām funkcijām, un nekam citam. Katra palaišana ir jauns Python savā smilškastē ar nelielu failu koku atmiņā (tā standarta bibliotēka un `/tmp` mape, kas pēc palaišanas pazūd). Tas nevar piekļūt tīklam, jūsu failiem vai pārējai lapai — ne pārlūkā, ne komandrindā. Svešs skripts joprojām var patērēt daudz laika vai atmiņas: {{ui:Apturēt}} to beidz.

## Pamati

```
A = cs.magic(3)              # katra iebūvētā funkcija ir cs.<name>
B = A @ A.T                  # @ ir matricu reizinājums, .T — transponēšana
C = A * 2 + 1                # + - * / ** ir pa elementam, kā numpy
print(A[0, 1], A[-1, -1])    # 0-based; negatīvie skaita no beigām
row = A[1]                   # viens indekss matricā: rinda
big = A[A > 4]               # loģiskā maska izvēlas elementus
A[0, 0] = -5                 # ierakstīšana masīvā
V, D = cs.call('eig', 2, A)  # vairāki rezultāti: cs.call(nosaukums, cik, …)
```

- 1 × 1 masīvs nonāk kā parasts skaitlis; citi masīvi, retās matricas, tīkli, lauki un modeļi ir **Vērtības**.
- Vērtībai ir `shape` (tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (tās rindas), un `float()`, `int()` un `bool()` vienam elementam.
- Salīdzinājumi (`<`, `==`, …) ir pa elementam, kā numpy: tie dod loģisku vērtību.
- Skaitļu saraksti, kas nodoti iebūvētai funkcijai, kļūst par masīviem: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` veido matricu.
- Vārdnīca kļūst par struktūru, un jauktu lietu saraksts — par šūnu, un atpakaļ.

Katrs globālais mainīgais, ko jūsu skripts izveido (skaitlis, Vērtība, vārdnīca, saraksts…), nonāk cilnē **Mainīgie**, kad palaišana beidzas, pat pēc kļūdas. Nosaukumi, kas sākas ar `_`, funkcijas, klases un moduļi paliek Python. `ws.name` lasa vai uzstāda mainīgo tieši, un `ws_names()` tos uzskaita.

`print(…)` raksta konsolē. `display(…)` (vai `cs.display`) parāda tīklu, lauku vai grafiku, kā CraftScript.

## Analīzes bibliotēkas izsaukšana

Bibliotēkas funkcijas izsauc tāpat kā iebūvētās: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Rakstiet nosaukumu skriptā tā, kā tas ir: PartCraft atrod bibliotēkas funkcijas, ko skripts izmanto, pirms tas tiek palaists.

## Vēl nav

- numpy, scipy un citas pakotnes: šeit ir tikai Python pašas standarta bibliotēka (`math`, `json`, `itertools`, `decimal`, `statistics`…), bez tās logu, termināla un datubāzes daļām (`tkinter`, `curses`, `sqlite3`).
- Tīkla savienojumi (sockets) un viss, kas sniegtos ārpus: Python šeit nav tīkla.
- `time.sleep` atgriežas uzreiz.
- Savilkšana redaktorā un Python funkcijas izsaukšana no CraftScript skripta.
- Palaišana pārbauda instrukciju budžetu un Apturēt ik pēc 1000 rindām; ilgs aprēķins vienas iebūvētas funkcijas iekšienē vispirms pabeidzas.
