---
title: Post-procesory, które możesz edytować
summary: Post to krótki plik tekstowy, który zamienia ścieżkę narzędzia na G-code dla twojego sterowania. Skopiuj jeden z wbudowanych postów, zmień potrzebne wiersze (numery wierszy, zmianę narzędzia, ruchy bazowe, kod końcowy), zobacz G-code, który zapisuje w trakcie pisania, i zachowaj go razem z częścią.
keywords: post, post-procesor, postprocesor, G-code, NC, GRBL, LinuxCNC, edytuj post, własny post, cpost, zmiana narzędzia, M6, G43, cykl stały, numery wierszy, modalny, zdarzenie, zmienna
from: 36ab8a38
---

Ta sama ścieżka narzędzia musi być zapisana inaczej dla różnych sterowań: z numerami wierszy albo bez, `M6` albo pauza, `G28` albo `G53`, `M30` albo `M2`. **Post** to krótki tekst, który określa, jak. Trzy wbudowane posty PartCraft (w stylu Fanuc, GRBL i LinuxCNC) są zapisane w tym formacie, więc własny post może zacząć się jako kopia jednego z nich.

Sprawdź wynik w symulatorze swojej maszyny przed obróbką i uruchom go najpierw w powietrzu nad materiałem. Wbudowane posty zapisują dokładnie to, co zapisywały przed powstaniem tego formatu (testy porównują ich wynik bajt po bajcie na setkach programów), ale nic tutaj nie zostało sprawdzone na twojej maszynie, a zmieniony post jest twój do sprawdzenia.

## Utwórz własny

W Manufacture, w sekcji **Post**:

- {{ui:Edytuj post…}} przy wbudowanym sterowaniu otwiera **twoją własną kopię**. Przy własnym poście otwiera ten post.
- {{ui:Nowy post…}} zaczyna od małego pustego posta ze wszystkimi zdarzeniami.
- {{ui:Importuj plik posta…}} wczytuje plik tekstowy `.cpost` (plik, który dostajesz z **Zapisz jako plik…** w edytorze).

Edytor pokazuje tekst, wiersz mówiący, czy post się wczytuje (i który wiersz jest błędny), oraz G-code, który post zapisuje, w miarę pisania. **Podgląd z** wybiera mały program przykładowy, który uruchamia każde zdarzenie, albo program tej części. {{ui:Zapisz}} zachowuje post w pliku części (do 20 postów) i wybiera go jako sterowanie. Posty podróżują razem z częścią; aby użyć go w innej części, zapisz go jako plik i zaimportuj tam.

## Jak wygląda post

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

Wiersze zaczynające się od `//` oraz puste wiersze są ignorowane. Na początku są ustawienia; potem jeden blok `on <event>` dla każdego zdarzenia, zamknięty przez `end`. Zdarzenie, którego nie wpiszesz, nic nie zapisuje.

| Ustawienie | Znaczenie |
|---|---|
| `post <id>` | Identyfikator posta: litery, cyfry, `-` i `_` |
| `name <text>` | Co pokazuje lista Sterowanie |
| `extension <ext>` | Rozszerzenie pliku: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … w każdym wierszu `emit`, albo żadne |
| `decimal-point yes` / `no` | `10.` zamiast `10` (komentarze nigdy nie mają kropki) |
| `canned-cycles yes` / `no` | `no`: otwory są zapisywane jako ruchy G0/G1, które reprezentują |
| `modal <group> <words>` | Słowa grupy (`modal motion G0 G1 G2 G3`) zapisywane tylko wtedy, gdy się zmienią |

## Zdarzenia

Działają w tej kolejności dla programu: `start`; potem dla każdej operacji `operation`, `tool-change` (gdy zmienia się narzędzie), `spindle` (gdy zmienia się prędkość), `approach` (ruch do pierwszego punktu, przed pierwszym szybkim ruchem), `coolant-on`, potem jej ruchy jako `rapid`, `feed` i `arc`, a każdy cykl stały jako `cycle-start`, jeden `cycle-hole` na otwór i `cycle-end`; na końcu `end`.

Każde zdarzenie może używać zmiennych swojego rodzaju ruchu, zapisywanych jako `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), surowiec (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), narzędzie (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operację (`op.name`, `op.type`), `rpm`, punkt ruchu (`x`, `y`, `z`, `f` oraz `moved`: prawda, gdy zmieniła się oś), łuki (`arc.g` 2 albo 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) i otwory (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Lista **Zdarzenia i zmienne** w edytorze pokazuje, które zdarzenie widzi które. Stan, który możesz odczytać i ustawić: `cool`, `offset` oraz `at.x`, `at.y`, `at.z`, `at.f` (ostatnie zapisane wartości).

## Instrukcje

| Instrukcja | Co robi |
|---|---|
| `raw TEXT` | Wiersz dokładnie tak, jak wpisano (bez numeru wiersza) |
| `comment TEXT` | `(TEXT)` z usuniętymi znakami spoza ASCII i nawiasami |
| `emit WORD WORD …` | Wiersz słów; słowa, które wychodzą puste, są pomijane; bez słów, bez wiersza |
| `word WORD …` | Dodaje słowa do budowanego wiersza; samo `emit` go kończy |
| `if EXPR` … `else` … `end` | Warunki: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, w przeciwnym razie b) |
| `for tool in tools` … `end` | Raz dla każdego narzędzia używanego w programie |
| `set NAME EXPR` | Zapamiętuje wartość (`set offset tool.number`) |
| `reset NAME …` | Zapomina słowa modalne (grupę, literę adresu jak `Z` albo `at.z`) |
| `do rapid X Y Z` | Uruchamia zdarzenie `rapid` dla punktu |

Słowo to tekst z dziurami `{variable|filter}`. Filtry to `upper`, `lower`, `pad:N` (uzupełnienie zerami), `cut:N` (pierwsze N znaków), `safe` (ASCII bezpieczny dla komentarza) i `int`. Słowo kończące się `~` jest **modalne**: zapisywane tylko wtedy, gdy różni się od ostatnio zapisanego (`G1~`, `X{x}~`). Słowo kończące się `~!` jest zapisywane za każdym razem i nadal zapamiętywane. Nazwa, która nie jest zmienną, jest zwykłym tekstem (`G81`, `mist`). Liczby są zaokrąglane do 0,001 mm i zapisywane bez końcowych zer.

## Czego post nie potrafi

Post decyduje tylko o tym, jak są zapisywane ruchy, nic więcej. Nie może zmienić ścieżki narzędzia, zmienić kolejności operacji, podzielić łuku, dodać osi, znać zakresu ruchu maszyny ani jej kinematyki, ani wykonywać działań na współrzędnych (nie ma `+`). Sondowanie, cykle trwałości narzędzia i podprogramów, wyjście dla 4. i 5. osi oraz kody tokarki jeszcze nie zostały zbudowane. Plik w stylu `.cps` z innego programu nie wczyta się: to inny, prostszy format.
