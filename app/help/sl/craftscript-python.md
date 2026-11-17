---
title: Skripti v jeziku Python
summary: Pišite skripte delovnega okolja Skript v Python 3: objekt cs vgrajenih funkcij, polja kot vrednosti, podobne numpy, z indeksiranjem od 0, skupno delovno okolje, izpis, kaj še ni na voljo ter kako je Python zaprt, kot CraftScript in Lua.
keywords: Python, Python 3, CPython, WebAssembly, zaprt, varen, skript, jezik, cs, ws, delovno okolje, numpy, polje, matrika, indeksiranje, izpis, prikaz, zaupanje
from: 66eab56d
---

Python je tretji jezik [delovnega okolja Skript](topic:craftscript). Izberite **Python** v polju za jezik nad urejevalnikom (datoteka `.py` se odpre v jeziku Python sama od sebe). Python, Lua in CraftScript si delijo iste spremenljivke in iste vgrajene funkcije, zato lahko skript Python uporabi to, kar je ustvaril skript CraftScript, in obratno.

Prvi zagon Pythona v enem obisku naloži sam Python (CPython 3.14, približno 7 MB) s te strani, kar traja nekaj sekund. Python še ni del {{ui:Shrani za delo brez povezave}}: najprej enkrat zaženite skript Python, ko ste na spletu.

## Python je zaprt

Skripti v Pythonu so zaprti, kot skripti CraftScript in Lua: dosegajo del, spremenljivke in vgrajene funkcije ter nič drugega. Vsak zagon je nov Python v lastnem peskovniku z majhnim drevesom datotek v pomnilniku (njegova standardna knjižnica in mapa `/tmp`, ki po zagonu izgine). Ne more dostopati do omrežja, vaših datotek ali preostale strani, ne v brskalniku ne v ukazni vrstici. Skript od nekoga drugega lahko še vedno porabi veliko časa ali pomnilnika: {{ui:Ustavi}} ga konča.

## Osnove

```
A = cs.magic(3)              # vsaka vgrajena funkcija je cs.<name>
B = A @ A.T                  # @ je matrični produkt, .T transponiranje
C = A * 2 + 1                # + - * / ** delujejo po elementih, kot v numpy
print(A[0, 1], A[-1, -1])    # od 0; negativno šteje od konca
row = A[1]                   # en indeks na matriki: vrstica
big = A[A > 4]               # logična maska izbere elemente
A[0, 0] = -5                 # dodeljevanje v polje
V, D = cs.call('eig', 2, A)  # več rezultatov: cs.call(ime, koliko, …)
```

- Polje 1 × 1 pride kot navadno število; drugi polji, redke matrike, mreže, polja in modeli so **Vrednosti**.
- Vrednost ima `shape` (torko), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (njene vrstice) ter `float()`, `int()` in `bool()` za en element.
- Primerjave (`<`, `==`, …) so po elementih, kot v numpy: dajo logično Vrednost.
- Seznami števil, poslani vgrajeni funkciji, postanejo polja: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` naredi matriko.
- Slovar postane struktura, mešan seznam pa celica, in obratno.

Vsaka globalna spremenljivka vašega skripta (število, Vrednost, slovar, seznam …) se ob koncu zagona prikaže na zavihku **Spremenljivke**, tudi po napaki. Imena, ki se začnejo z `_`, funkcije, razredi in moduli ostanejo v Pythonu. `ws.name` neposredno bere ali nastavi spremenljivko, `ws_names()` pa jih našteje.

`print(…)` izpiše v konzolo. `display(…)` (ali `cs.display`) prikaže mrežo, polje ali graf, kot v CraftScript.

## Pokličite knjižnico za analizo

Funkcije knjižnice se kličejo kot vgrajene: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Ime zapišite v skriptu točno tako: PartCraft najde funkcije knjižnice, ki jih skript uporablja, preden se zažene.

## Še ni na voljo

- numpy, scipy in drugi paketi: na voljo je le standardna knjižnica Pythona (`math`, `json`, `itertools`, `decimal`, `statistics` …), brez delov za okna, terminal in podatkovne zbirke (`tkinter`, `curses`, `sqlite3`).
- Vtičnice in vse, kar bi segalo ven: Python tu nima omrežja.
- `time.sleep` se vrne takoj.
- Zlaganje v urejevalniku in klic funkcije Python iz skripta CraftScript.
- Zagon preverja proračun ukazov in Ustavi na vsakih 1000 vrstic; dolg izračun znotraj ene vgrajene funkcije se najprej dokonča.
