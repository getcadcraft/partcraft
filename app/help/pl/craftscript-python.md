---
title: Skrypty w Pythonie
summary: Pisanie skryptów obszaru roboczego Skrypt w Pythonie 3: obiekt cs funkcji wbudowanych, tablice jako wartości podobne do numpy z indeksowaniem od 0, współdzielony obszar roboczy, wypisywanie, czego jeszcze nie ma oraz sposób izolacji Pythona, jak w CraftScript i Lua.
keywords: Python, Python 3, CPython, WebAssembly, izolowany, bezpieczny, skrypt, język, cs, ws, obszar roboczy, numpy, tablica, macierz, indeksowanie, print, display, zaufanie
from: 66eab56d
---

Python to trzeci język [obszaru roboczego Skrypt](topic:craftscript). Wybierz **Python** w polu języka nad edytorem (plik `.py` otwiera się w Pythonie sam z siebie). Python, Lua i CraftScript współdzielą te same zmienne i te same funkcje wbudowane, więc skrypt Python może użyć tego, co zrobił skrypt CraftScript, i odwrotnie.

Pierwsze uruchomienie Pythona podczas wizyty ładuje sam Python (CPython 3.14, około 7 MB) z tej strony, co trwa kilka sekund. Python nie jest jeszcze częścią {{ui:Zapisz do pracy offline}}: najpierw uruchom jeden skrypt Python, będąc online.

## Python jest izolowany

Skrypty Python są izolowane jak skrypty CraftScript i Lua: sięgają części, zmiennych i funkcji wbudowanych, i niczego więcej. Każde uruchomienie to świeży Python we własnej piaskownicy, z małym drzewem plików w pamięci (jego biblioteką standardową i folderem `/tmp`, który znika po uruchomieniu). Nie może sięgnąć sieci, Twoich plików ani reszty strony, zarówno w przeglądarce, jak i w wierszu poleceń. Skrypt od kogoś innego nadal może zużyć dużo czasu lub pamięci: {{ui:Stop}} go kończy.

## Podstawy

```
A = cs.magic(3)              # każda funkcja wbudowana to cs.<nazwa>
B = A @ A.T                  # @ to iloczyn macierzowy, .T to transpozycja
C = A * 2 + 1                # + - * / ** działają element po elemencie, jak w numpy
print(A[0, 1], A[-1, -1])    # indeksy od 0; ujemne liczą od końca
row = A[1]                   # jeden indeks na macierzy: wiersz
big = A[A > 4]               # maska logiczna wybiera elementy
A[0, 0] = -5                 # przypisanie do tablicy
V, D = cs.call('eig', 2, A)  # kilka wyników: cs.call(nazwa, ile, …)
```

- Tablica 1 × 1 trafia jako zwykła liczba; inne tablice, macierze rzadkie, siatki, pola i modele to **Wartości**.
- Wartość ma `shape` (krotka), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (liczbę jej wierszy) oraz `float()`, `int()` i `bool()` dla pojedynczego elementu.
- Porównania (`<`, `==`, …) działają element po elemencie, jak w numpy: dają wartość logiczną.
- Listy liczb przekazane do funkcji wbudowanej stają się tablicami: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` tworzy macierz.
- Słownik staje się strukturą, a lista mieszanych elementów komórką, i z powrotem.

Każda zmienna globalna, którą utworzy skrypt (liczba, Wartość, słownik, lista…), trafia do karty **Zmienne** po zakończeniu uruchomienia, nawet po błędzie. Nazwy zaczynające się od `_`, funkcje, klasy i moduły zostają w Pythonie. `ws.name` czyta lub ustawia zmienną bezpośrednio, a `ws_names()` wypisuje ich listę.

`print(…)` pisze na konsoli. `display(…)` (lub `cs.display`) pokazuje siatkę, pole lub wykres, jak w CraftScript.

## Wywoływanie biblioteki analiz

Funkcje biblioteki wywołuje się jak wbudowane: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Zapisz nazwę w skrypcie dokładnie tak, jak jest: PartCraft znajduje funkcje biblioteki używane przez skrypt, zanim go uruchomi.

## Jeszcze nie ma

- numpy, scipy i innych pakietów: jest tylko biblioteka standardowa Pythona (`math`, `json`, `itertools`, `decimal`, `statistics`…), bez jej części okienkowych, terminalowych i bazodanowych (`tkinter`, `curses`, `sqlite3`).
- Gniazd i wszystkiego, co sięgałoby na zewnątrz: Python nie ma tu sieci.
- `time.sleep` zwraca od razu.
- Zwijania w edytorze oraz wywoływania funkcji Pythona ze skryptu CraftScript.
- Uruchomienie sprawdza limit instrukcji i Stop co 1000 wierszy; długie obliczenie wewnątrz jednej funkcji wbudowanej kończy się najpierw.
