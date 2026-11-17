---
title: Skripte u Python
summary: Pisanje skripti radnog prostora za skripte u Python 3: objekat cs s ugrađenim funkcijama, nizovi kao vrijednosti nalik numpy s indeksiranjem od 0, zajednički radni prostor, ispis, šta još nije tu, i kako je Python zatvoren kao CraftScript i Lua.
keywords: Python, Python 3, CPython, WebAssembly, zatvoreno, sigurno, skripta, jezik, cs, ws, radni prostor, numpy, niz, matrica, indeksiranje, ispis, prikaz, povjerenje
from: 66eab56d
---

Python je treći jezik [radnog prostora za skripte](topic:craftscript). Izaberi **Python** u polju za jezik iznad uređivača (datoteka `.py` se sama otvara u Python). Python, Lua i CraftScript dijele iste varijable i iste ugrađene funkcije, pa skripta u Python može koristiti ono što je napravila CraftScript skripta, i obrnuto.

Prvo pokretanje Pythona u posjeti učitava sam Python (CPython 3.14, oko 7 MB) s ove stranice, što traje nekoliko sekundi. Python još nije dio {{ui:Spasi za rad van mreže}}: prvo pokreni jednu Python skriptu dok si na mreži.

## Python je zatvoren

Python skripte su zatvorene kao CraftScript i Lua skripte: dopiru do dijela, varijabli i ugrađenih funkcija, i ništa više. Svako pokretanje je svjež Python u vlastitom pjeskovniku s malim stablom datoteka u memoriji (njegova standardna biblioteka i mapa `/tmp` koja nestane nakon pokretanja). Ne može doći do mreže, tvojih datoteka ni ostatka stranice, bilo u pregledniku ili u komandnoj liniji. Skripta nekog drugog i dalje može trošiti mnogo vremena ili memorije: {{ui:Zaustavi}} je prekida.

## Osnove

```
A = cs.magic(3)              # svaka ugrađena funkcija je cs.<ime>
B = A @ A.T                  # @ je matrični proizvod, .T transpozicija
C = A * 2 + 1                # + - * / ** rade element po element, kao u numpy
print(A[0, 1], A[-1, -1])    # od 0; negativni broje od kraja
row = A[1]                   # jedan indeks na matrici: red
big = A[A > 4]               # logička maska bira elemente
A[0, 0] = -5                 # dodjela u niz
V, D = cs.call('eig', 2, A)  # više rezultata: cs.call(ime, koliko, …)
```

- Niz 1 × 1 stiže kao običan broj; ostali nizovi, rijetke matrice, mreže, polja i modeli su **vrijednosti**.
- Vrijednost ima `shape` (torka), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (njeni redovi), te `float()`, `int()` i `bool()` za jedan element.
- Poređenja (`<`, `==`, …) su element po element, kao u numpy: daju logičku vrijednost.
- Liste brojeva predate ugrađenoj funkciji postaju nizovi: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` pravi matricu.
- Rječnik postaje strukturu, a lista mješovitih stvari ćeliju, i obrnuto.

Svaka globalna varijabla koju skripta napravi (broj, vrijednost, rječnik, lista…) pojavi se na kartici **Varijable** kad se pokretanje završi, čak i poslije greške. Imena koja počinju s `_`, funkcije, klase i moduli ostaju u Python. `ws.name` čita ili postavlja varijablu direktno, a `ws_names()` ih navodi.

`print(…)` piše u konzolu. `display(…)` (ili `cs.display`) prikazuje mrežu, polje ili grafikon, kao u CraftScript-u.

## Pozovi biblioteku analiza

Funkcije biblioteke pozivaju se kao ugrađene: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Ime napiši u skripti onako kako jeste: PartCraft pronalazi funkcije biblioteke koje skripta koristi prije nego što je pokrene.

## Još nije tu

- numpy, scipy i drugi paketi: dostupna je samo Pythonova standardna biblioteka (`math`, `json`, `itertools`, `decimal`, `statistics`…), bez njenih dijelova za prozore, terminal i baze (`tkinter`, `curses`, `sqlite3`).
- Utičnice i sve što bi dosezalo van: Python ovdje nema mrežu.
- `time.sleep` odmah vraća.
- Sklapanje (folding) u uređivaču, i pozivanje Python funkcije iz CraftScript skripte.
- Pokretanje provjerava budžet instrukcija i Zaustavi svakih 1000 redova; dugačak proračun unutar jedne ugrađene funkcije završava se prvi.
