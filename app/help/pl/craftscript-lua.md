---
title: Skrypty w Lua
summary: Pisanie skryptów obszaru roboczego Skrypt w Lua 5.4: tabela cs funkcji wbudowanych, tablice jako wartości z indeksowaniem i arytmetyką, współdzielony obszar roboczy ws, wypisywanie i pokazywanie wyników oraz to, co jest wyłączone.
keywords: Lua, Lua 5.4, skrypt, język, tabela cs, ws, obszar roboczy, userdata, tensor, tablica, macierz, print, display, piaskownica
from: 82c668b3
---

Lua to drugi język [obszaru roboczego Skrypt](topic:craftscript). Wybierz **Lua** w polu języka nad edytorem (plik `.lua` otwiera się w Lua sam z siebie). Lua i CraftScript współdzielą te same zmienne i te same funkcje wbudowane, więc skrypt Lua może użyć tego, co zrobił skrypt CraftScript, i odwrotnie.

## Podstawy

```
-- każda funkcja wbudowana jest w tabeli cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- indeksy od 1, jak w CraftScript
print(K(1, 1), #K)             -- element; liczba elementów

-- obszar roboczy: te same zmienne, które widzi każdy skrypt
ws.total = K(1, 1) * 2
print(ws.total)

-- kilka wyników z jednej funkcji
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<nazwa>(…)` wywołuje dowolną funkcję wbudowaną i zwraca jej pierwszy wynik; `cs.call(nazwa, n, …)` zwraca `n` wyników.
- `cs.tensor({1, 2, 3})` tworzy wiersz, `cs.tensor({{1, 2}, {3, 4}})` macierz.
- Tablice, macierze rzadkie, siatki i pola są wartościami z metodami: `t(i, j)` lub `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transpozycja), `t:totable()`. `+ - * / ^` znaczą to samo co w CraftScript (`*` to iloczyn macierzowy); `t:times(u)` mnoży element po elemencie.
- Liczba będąca tablicą 1×1 trafia jako zwykła liczba Lua.
- `ws.name` czyta i zapisuje współdzielony obszar roboczy. Zmienne globalne, które skrypt pozostawi, także trafiają tam po jego zakończeniu.
- `print(…)` pisze na konsoli; `cs.show(f)`, `cs.plot(y)` i pozostałe funkcje wyświetlania działają jak w CraftScript.

## Wywoływanie biblioteki analiz

Funkcje biblioteki analiz (karta Biblioteka) oraz funkcje CraftScript zdefiniowane przez skrypty Twojej części są dostępne także przez `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dwa wyniki
```

Są znajdowane przed startem skryptu, więc zapisz nazwę w skrypcie wprost: `cs.static_tet(` albo `cs.call('static_tet', …)`. Nazwa składana w trakcie działania skryptu sięga tylko funkcji wbudowanych. Struktura zbudowana przez `cs.struct({ … })` jest strukturą CraftScript, a lista Lua takich struktur (`{ cs.struct(…), … }`) jest komórką, jakiej oczekują ustawienia biblioteki. Jeśli coś pójdzie źle wewnątrz funkcji z biblioteki, komunikat podaje nazwę funkcji i jej wiersz oraz wskazuje Twój wiersz, który ją wywołał.

## Wyłączone

Skrypty nie mogą sięgać plików, sieci ani strony: `io`, `os` (poza zegarem), `require`, `dofile`, `loadfile` i `debug` zostały usunięte. Do wczytywania danych użyj {{ui:Otwórz}} z obszaru roboczego Skrypt oraz zmiennych. Limit kroków i {{ui:Stop}} działają jak w CraftScript.
