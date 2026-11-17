---
title: Skriptet në Python
summary: Shkruani skripte të Hapësirës së skriptit në Python 3: objekti cs me funksionet e integruara, vargjet si vlera të ngjashme me numpy me indeksim nga 0, hapësira e përbashkët, shfaqja, çfarë nuk është ende, dhe si Python është i izoluar, si CraftScript dhe Lua.
keywords: Python, Python 3, CPython, WebAssembly, i izoluar, i sigurt, skript, gjuhë, cs, ws, hapësirë pune, numpy, varg, matricë, indeksim, print, display, besim
from: 66eab56d
---

Python është gjuha e tretë e [Hapësirës së skriptit](topic:craftscript). Zgjidhni **Python** te kutia e gjuhës mbi redaktuesin (një skedar `.py` hapet në Python vetë). Python, Lua dhe CraftScript ndajnë të njëjtat variabla dhe të njëjtat funksione të integruara, kështu që një skript Python mund të përdorë atë që ka bërë një skript CraftScript, dhe anasjelltas.

Ekzekutimi i parë Python në një vizitë ngarkon vetë Python (CPython 3.14, rreth 7 MB) nga kjo faqe, që zgjat disa sekonda. Python nuk është ende pjesë e {{ui:Ruaje për jashtë linje}}: ekzekutoni fillimisht një skript Python ndërsa jeni në linjë.

## Python është i izoluar

Skriptet Python janë të izoluar si skriptet CraftScript dhe Lua: arrijnë pjesën, variablat dhe funksionet e integruara, dhe asgjë tjetër. Çdo ekzekutim është një Python i ri në kutinë e vet të izoluar, me një pemë të vogël skedarësh në memorie (bibliotekën e vet standarde dhe një dosje `/tmp` që zhduket pas ekzekutimit). Nuk mund të arrijë rrjetin, skedarët tuaj ose pjesën tjetër të faqes, as në shfletues as në vijën e komandës. Një skript nga dikush tjetër mund të përdorë ende shumë kohë ose memorie: {{ui:Ndalo}} e mbyll.

## Bazat

```
A = cs.magic(3)              # çdo funksion i integruar është cs.<emri>
B = A @ A.T                  # @ është prodhimi i matricave, .T transpozimi
C = A * 2 + 1                # + - * / ** janë element pas elementi, si në numpy
print(A[0, 1], A[-1, -1])    # nga 0; negativët numërojnë nga fundi
row = A[1]                   # një indeks te një matricë: një rresht
big = A[A > 4]               # një maskë logjike zgjedh elementet
A[0, 0] = -5                 # caktimi brenda një vargu
V, D = cs.call('eig', 2, A)  # disa rezultate: cs.call(emri, sa, …)
```

- Një varg 1 × 1 arrin si numër i thjeshtë; vargjet e tjera, matricat e rralla, rrjetat, fushat dhe modelet janë **Vlera**.
- Një Vlerë ka `shape` (një tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (rreshtat e saj), dhe `float()`, `int()` dhe `bool()` për një element të vetëm.
- Krahasimet (`<`, `==`, …) janë element pas elementi, si në numpy: japin një Vlerë logjike.
- Listat e numrave të dhënë një funksioni të integruar bëhen vargje: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` bën një matricë.
- Një dict bëhet strukturë, dhe një listë me gjëra të përziera bëhet qelizë, dhe anasjelltas.

Çdo global që bën skripti juaj (një numër, një Vlerë, një dict, një listë…) arrin te skeda **Variablat** kur mbaron ekzekutimi, edhe pas një gabimi. Emrat që fillojnë me `_`, funksionet, klasat dhe modulet mbeten në Python. `ws.emri` lexon ose cakton një variabël drejtpërdrejt, dhe `ws_names()` i liston ato.

`print(…)` shkruan në konsolë. `display(…)` (ose `cs.display`) shfaq një rrjetë, një fushë ose një grafik, si në CraftScript.

## Thirrni bibliotekën e analizës

Funksionet e bibliotekës thirren si ato të integruara: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Shkruajeni emrin në skript ashtu siç është: PartCraft gjen funksionet e bibliotekës që përdor një skript përpara se ta ekzekutojë.

## Ende jo

- numpy, scipy dhe paketa të tjera: vetëm biblioteka standarde e Python (`math`, `json`, `itertools`, `decimal`, `statistics`…) është këtu, pa pjesët e dritareve, terminalit dhe bazës së të dhënave (`tkinter`, `curses`, `sqlite3`).
- Soketë dhe çdo gjë tjetër që do të dilte jashtë: Python nuk ka rrjet këtu.
- `time.sleep` kthehet menjëherë.
- Palosja në redaktues, dhe thirrja e një funksioni Python nga një skript CraftScript.
- Një ekzekutim kontrollon buxhetin e instruksioneve dhe Ndalo çdo 1000 rreshta; një llogaritje e gjatë brenda një funksioni të integruar mbaron së pari.
