---
title: Skripte u jeziku Python
summary: Pišite skripte radnog prostora Skripte u Python 3: tabela cs sa ugrađenim funkcijama, nizovi kao vrednosti sličnim numpy-ju sa indeksiranjem od 0, deljeni radni prostor, ispis, šta još nije tu, i kako je Python zatvoren kao CraftScript i Lua.
keywords: Python, Python 3, CPython, WebAssembly, zatvoren, bezbedan, skripta, jezik, cs, ws, radni prostor, numpy, niz, matrica, indeksiranje, ispis, prikaz, poverenje
from: 66eab56d
---

Python je treći jezik [radnog prostora Skripte](topic:craftscript). Izaberite **Python** u polju za jezik iznad uređivača (fajl `.py` se sam otvara u jeziku Python). Python, Lua i CraftScript dele iste promenljive i iste ugrađene funkcije, pa Python skripta može da koristi ono što je napravila CraftScript skripta, i obrnuto.

Prvo pokretanje Python-a u jednoj poseti učitava sam Python (CPython 3.14, oko 7 MB) sa ovog sajta, što traje nekoliko sekundi. Python još nije deo {{ui:Sačuvaj za rad van mreže}}: prvo pokrenite jednu Python skriptu dok ste na mreži.

## Python je zatvoren

Python skripte su zatvorene kao CraftScript i Lua skripte: dolaze do dela, promenljivih i ugrađenih funkcija, i ništa više. Svako pokretanje je nov Python u sopstvenom peščaniku, sa malim stablom fajlova u memoriji (njegova standardna biblioteka i fascikla `/tmp` koja nestaje posle pokretanja). Ne može do mreže, vaših fajlova ni ostatka stranice, podjednako u pregledaču i u komandnoj liniji. Skripta nekog drugog ipak može da troši mnogo vremena ili memorije: {{ui:Zaustavi}} je prekida.

## Osnovno

```
A = cs.magic(3)              # svaka ugrađena funkcija je cs.<name>
B = A @ A.T                  # @ je matrični proizvod, .T transpozicija
C = A * 2 + 1                # + - * / ** rade element po element, kao u numpy-ju
print(A[0, 1], A[-1, -1])    # od 0; negativno broji od kraja
row = A[1]                   # jedan indeks na matrici: red
big = A[A > 4]               # logička maska bira elemente
A[0, 0] = -5                 # dodeljivanje u niz
V, D = cs.call('eig', 2, A)  # više rezultata: cs.call(name, koliko, …)
```

- Niz 1 × 1 stiže kao običan broj; ostali nizovi, retke matrice, mreže, polja i modeli su **Value** objekti.
- Value objekat ima `shape` (torku), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (njegove redove), i `float()`, `int()` i `bool()` za jedan element.
- Poređenja (`<`, `==`, …) rade element po element, kao u numpy-ju: daju logički Value.
- Liste brojeva prosleđene ugrađenoj funkciji postaju nizovi: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` pravi matricu.
- Rečnik postaje struktura, a lista raznih stvari ćelija, i obrnuto.

Svaka globalna promenljiva vaše skripte (broj, Value, rečnik, lista…) pojavljuje se na kartici **Promenljive** kad se pokretanje završi, čak i posle greške. Imena koja počinju sa `_`, funkcije, klase i moduli ostaju u Python-u. `ws.name` čita ili postavlja promenljivu direktno, a `ws_names()` ih nabraja.

`print(…)` piše u konzolu. `display(…)` (ili `cs.display`) prikazuje mrežu, polje ili grafik, kao u CraftScript-u.

## Pozivanje biblioteke analiza

Funkcije biblioteke se pozivaju kao ugrađene: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Napišite ime u skripti onako kako jeste: PartCraft pronalazi funkcije biblioteke koje skripta koristi pre nego što je pokrene.

## Još nije tu

- numpy, scipy i drugi paketi: dostupna je samo standardna biblioteka Python-a (`math`, `json`, `itertools`, `decimal`, `statistics`…), bez njenih delova za prozore, terminal i baze (`tkinter`, `curses`, `sqlite3`).
- Mrežne utičnice i sve drugo što bi izašlo napolje: Python ovde nema mrežu.
- `time.sleep` odmah vraća.
- Sažimanje redova u uređivaču, i pozivanje Python funkcije iz CraftScript skripte.
- Pokretanje proverava budžet instrukcija i Zaustavi na svakih 1000 redova; dugačak proračun unutar jedne ugrađene funkcije prvo završi.
