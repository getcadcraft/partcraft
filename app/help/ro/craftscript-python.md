---
title: Scripturi în Python
summary: Scrieți scripturi ale spațiului de lucru Script în Python 3: obiectul cs cu funcțiile încorporate, tablouri ca valori asemănătoare numpy, cu indexare de la 0, spațiul comun de lucru, afișarea, ce nu există încă și modul în care Python este izolat, ca și CraftScript și Lua.
keywords: Python, Python 3, CPython, WebAssembly, izolat, sigur, script, limbaj, cs, ws, spațiu de lucru, numpy, tablou, matrice, indexare, print, afișare, încredere
from: 66eab56d
---

Python este al treilea limbaj al [spațiului de lucru Script](topic:craftscript). Alegeți **Python** în caseta de limbaj de deasupra editorului (un fișier `.py` se deschide în Python de la sine). Python, Lua și CraftScript împart aceleași variabile și aceleași funcții încorporate, deci un script Python poate folosi ce a făcut un script CraftScript și invers.

Prima rulare Python dintr-o vizită încarcă de pe acest site chiar Python-ul (CPython 3.14, aproximativ 7 MB), ceea ce durează câteva secunde. Python nu face încă parte din {{ui:Salvare pentru offline}}: rulați mai întâi un script Python cât timp sunteți online.

## Python este izolat

Scripturile Python sunt izolate ca scripturile CraftScript și Lua: ajung la piesă, la variabile și la funcțiile încorporate, și la nimic altceva. Fiecare rulare este un Python nou, în propriul sandbox, cu un mic arbore de fișiere în memorie (biblioteca sa standard și un dosar `/tmp` care dispare după rulare). Nu poate ajunge la rețea, la fișierele de pe calculator sau la restul paginii, în browser și pe linia de comandă deopotrivă. Un script de la altcineva poate totuși consuma mult timp sau memorie: {{ui:Oprire}} îl încheie.

## Esențialul

```
A = cs.magic(3)              # fiecare funcție încorporată este cs.<name>
B = A @ A.T                  # @ este produsul matricial, .T transpunerea
C = A * 2 + 1                # + - * / ** sunt element cu element, ca în numpy
print(A[0, 1], A[-1, -1])    # de la 0; negativ numără de la capăt
row = A[1]                   # un singur indice la o matrice: un rând
big = A[A > 4]               # o mască logică alege elemente
A[0, 0] = -5                 # atribuire într-un tablou
V, D = cs.call('eig', 2, A)  # mai multe rezultate: cs.call(nume, câte, …)
```

- Un tablou 1 × 1 ajunge ca un număr simplu; celelalte tablouri, matricile rare, plasele, câmpurile și modelele sunt **Valori**.
- O Valoare are `shape` (un tuplu), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (rândurile sale) și `float()`, `int()` și `bool()` pentru un singur element.
- Comparațiile (`<`, `==`, …) sunt element cu element, ca în numpy: dau o Valoare logică.
- Listele de numere date unei funcții încorporate devin tablouri: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` face o matrice.
- Un dicționar devine o structură, iar o listă de lucruri amestecate devine o celulă, și invers.

Fiecare variabilă globală făcută de script (un număr, o Valoare, un dicționar, o listă…) ajunge în fila **Variabile** la sfârșitul rulării, chiar și după o eroare. Numele care încep cu `_`, funcțiile, clasele și modulele rămân în Python. `ws.name` citește sau setează direct o variabilă, iar `ws_names()` le listează.

`print(…)` scrie în consolă. `display(…)` (sau `cs.display`) afișează o plasă, un câmp sau un grafic, ca în CraftScript.

## Apelarea bibliotecii de analiză

Funcțiile bibliotecii se apelează ca cele încorporate: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Scrieți numele în script exact cum este: PartCraft găsește funcțiile din bibliotecă folosite de un script înainte ca acesta să ruleze.

## Încă nu există

- numpy, scipy și alte pachete: aici este doar biblioteca standard a Python (`math`, `json`, `itertools`, `decimal`, `statistics`…), fără părțile sale de ferestre, terminal și baze de date (`tkinter`, `curses`, `sqlite3`).
- Socketuri și orice altceva care ar ieși în afară: aici Python nu are rețea.
- `time.sleep` revine imediat.
- Pliere în editor și apelarea unei funcții Python dintr-un script CraftScript.
- O rulare verifică bugetul de instrucțiuni și Oprire la fiecare 1000 de rânduri; un calcul lung în interiorul unei funcții încorporate se termină întâi.
