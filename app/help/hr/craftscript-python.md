---
title: Skripte u Pythonu
summary: Pišite skripte radnog prostora Skripta u Pythonu 3: objekt cs ugrađenih funkcija, nizove kao vrijednosti nalik numpyju s indeksiranjem od 0, zajednički radni prostor, ispis, što još nije tu te kako je Python izoliran kao CraftScript i Lua.
keywords: Python, Python 3, CPython, WebAssembly, izolirano, sigurno, skripta, jezik, cs, ws, radni prostor, numpy, niz, matrica, indeksiranje, ispis, prikaz, povjerenje
from: 66eab56d
---

Python je treći jezik [radnog prostora Skripta](topic:craftscript). Odaberite **Python** u okviru za jezik iznad uređivača (datoteka `.py` otvara se u Pythonu sama od sebe). Python, Lua i CraftScript dijele iste varijable i iste ugrađene funkcije, pa Python skripta može koristiti ono što je napravila CraftScript skripta i obrnuto.

Prvo pokretanje Pythona u jednom posjetu učitava sam Python (CPython 3.14, oko 7 MB) s ove stranice, što traje nekoliko sekundi. Python još nije dio {{ui:Spremi za offline}}: pokrenite prvo jednu Python skriptu dok ste na mreži.

## Python je izoliran

Python skripte su izolirane kao CraftScript i Lua skripte: dosežu dio, varijable i ugrađene funkcije, a ništa drugo. Svako pokretanje je svjež Python u vlastitom pješčaniku s malim stablom datoteka u memoriji (njegova standardna knjižnica i mapa `/tmp` koja nestaje nakon pokretanja). Ne može doći do mreže, vaših datoteka ni ostatka stranice, i u pregledniku i u naredbenom retku. Tuđa skripta i dalje može trošiti puno vremena ili memorije: {{ui:Zaustavi}} je prekida.

## Osnove

```
A = cs.magic(3)              # svaka ugrađena funkcija je cs.<ime>
B = A @ A.T                  # @ je matrični umnožak, .T transponiranje
C = A * 2 + 1                # + - * / ** rade element po element, kao u numpyju
print(A[0, 1], A[-1, -1])    # od 0; negativni broje od kraja
row = A[1]                   # jedan indeks na matrici: redak
big = A[A > 4]               # logička maska bira elemente
A[0, 0] = -5                 # dodjela u niz
V, D = cs.call('eig', 2, A)  # više rezultata: cs.call(ime, koliko, …)
```

- Broj 1 × 1 stiže kao običan broj; ostali nizovi, rijetke matrice, mreže, polja i modeli su **Vrijednosti**.
- Vrijednost ima `shape` (torku), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (njezine retke), te `float()`, `int()` i `bool()` za jedan element.
- Usporedbe (`<`, `==`, …) rade element po element, kao u numpyju: daju logičku Vrijednost.
- Popisi brojeva predani ugrađenoj funkciji postaju nizovi: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` pravi matricu.
- Rječnik postaje struktura, a popis raznih stvari Cell, i obrnuto.

Svaka globalna varijabla koju skripta napravi (broj, Vrijednost, rječnik, popis…) završi na kartici **Varijable** kad se izvođenje završi, čak i nakon pogreške. Imena koja počinju s `_`, funkcije, klase i moduli ostaju u Pythonu. `ws.name` čita ili postavlja varijablu izravno, a `ws_names()` ih navodi.

`print(…)` ispisuje na konzolu. `display(…)` (ili `cs.display`) prikazuje mrežu, polje ili graf, kao u CraftScriptu.

## Pozivanje biblioteke analiza

Funkcije biblioteke pozivaju se kao i ugrađene: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Ime napišite u skripti točno kako jest: PartCraft pronalazi funkcije biblioteke koje skripta koristi prije nego što je pokrene.

## Još nije tu

- numpy, scipy i drugi paketi: dostupna je samo standardna knjižnica Pythona (`math`, `json`, `itertools`, `decimal`, `statistics`…), bez prozorskih, terminalskih i bazodanskih dijelova (`tkinter`, `curses`, `sqlite3`).
- Utičnice i sve drugo što bi izašlo van: Python ovdje nema mreže.
- `time.sleep` odmah vraća.
- Sažimanje (folding) u uređivaču i pozivanje Python funkcije iz CraftScript skripte.
- Pokretanje svakih 1000 redaka provjerava proračun instrukcija i {{ui:Zaustavi}}; dugi izračun unutar jedne ugrađene funkcije prvo završava.
