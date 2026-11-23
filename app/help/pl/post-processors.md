---
title: Postprocesory, które możesz edytować
summary: Postprocesor to krótki plik tekstowy, który zamienia ścieżkę narzędzi na G-kod dla twojego sterowania. Skopiuj jeden z wbudowanych postprocesorów, zmień potrzebne wiersze (numery wierszy, zmianę narzędzia, ruchy bazowania, kod końca), zobacz G-kod, jaki zapisuje, gdy piszesz, i zachowaj go przy części.
keywords: postprocesor, post, postprocessor, G-kod, NC, GRBL, LinuxCNC, edytuj post, własny post, cpost, zmiana narzędzia, M6, G43, cykl stały, numery wierszy, modalne, zdarzenie, zmienna
from: c78d0cae
---

Ta sama ścieżka narzędzi musi być zapisana inaczej dla różnych sterowań: z numerami wierszy albo bez, `M6` albo pauza, `G28` albo `G53`, `M30` albo `M2`. **Postprocesor** to krótki tekst, który określa, jak. Trzy wbudowane postprocesory PartCraft (w stylu Fanuc, GRBL i LinuxCNC) są zapisane w tym formacie, więc własny postprocesor może zacząć jako kopia jednego z nich.

Sprawdź wynik w symulatorze swojej maszyny przed frezowaniem i najpierw uruchom go w powietrzu nad półfabrykatem. Wbudowane postprocesory zapisują dokładnie to, co zapisywały przed powstaniem tego formatu (testy porównują ich wynik bajt po bajcie na setkach programów), ale nic tutaj nie zostało udowodnione na twojej maszynie, a postprocesor, który zmienisz, jest twój i to ty musisz go udowodnić.

## Tworzenie postprocesora

W Wytwarzaniu, pod **Postprocesor**:

- {{ui:Edytuj post…}} na wbudowanym sterowaniu otwiera **twoją własną kopię** go. Na twoim własnym postprocesorze otwiera ten postprocesor.
- {{ui:Nowy post…}} zaczyna od małego pustego postprocesora ze wszystkimi zdarzeniami.
- {{ui:Importuj plik posta…}} wczytuje plik tekstowy `.cpost` (plik, który dostajesz z **Zapisz jako plik…** w edytorze).

Edytor pokazuje tekst, wiersz mówiący, czy da się go odczytać (i który wiersz jest błędny), oraz G-kod, który postprocesor zapisuje, w miarę pisania. **Podgląd z** wybiera małą przykładową próbkę programu, która uruchamia każde zdarzenie, albo własny program tej części. {{ui:Zapisz}} zachowuje postprocesor w pliku części (do 20 postprocesorów) i wybiera go jako sterowanie. Postprocesory przemieszczają się razem z częścią; aby użyć go w innej części, zapisz go jako plik i zaimportuj tam.

## Jak wygląda postprocesor

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

Wiersze zaczynające się od `//` i puste wiersze są ignorowane. Na górze są ustawienia; potem jeden blok `on <event>` dla każdego zdarzenia, zamknięty `end`. Zdarzenie, które pominiesz, nic nie zapisuje.

| Ustawienie | Znaczenie |
|---|---|
| `post <id>` | Identyfikator postprocesora: litery, cyfry, `-` i `_` |
| `name <text>` | Co pokazuje lista sterowań |
| `extension <ext>` | Rozszerzenie pliku: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … w każdym wierszu `emit`, albo żadne |
| `decimal-point yes` / `no` | `10.` zamiast `10` (komentarze nigdy nie mają kropki) |
| `canned-cycles yes` / `no` | `no`: otwory są zapisywane jako ruchy G0/G1, które reprezentują |
| `modal <group> <words>` | Słowa grupy (`modal motion G0 G1 G2 G3`) zapisywane tylko wtedy, gdy się zmieniają |

## Zdarzenia

Wykonują się w tej kolejności dla programu: `start`; potem dla każdej operacji `operation`, `tool-change` (gdy zmienia się narzędzie), `spindle` (gdy zmienia się prędkość), `approach` (ruch do pierwszego punktu, przed pierwszym szybkim ruchem), `coolant-on`, potem jej ruchy jako `rapid`, `feed` i `arc`, a każdy cykl stały jako `cycle-start`, jeden `cycle-hole` na każdy otwór i `cycle-end`; na końcu `end`.

Kolejne zdarzenia, dla tego, co wykracza poza trzy osie (postprocesor bez zdarzenia odrzuca taki program i nazywa brakujące zdarzenie):

| Zdarzenie | Kiedy | Jego zmienne |
|---|---|---|
| `index` | Przed operacją, której kierunek narzędzia różni się od poprzedniego, i przed pierwszą operacją na maszynie z osiami obrotowymi | `rot.a`, `rot.b`, `rot.c` (pozycje, do których jechać; puste dla osi, której maszyna nie ma), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Ruchy operacji, której osie obrotowe poruszają się podczas skrawania | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (tak, gdy posuw musi być w czasie odwrotnym), `invf` (1/minuty) |
| `rotary-end` | Po takiej operacji | |
| `probe-move` | Ruch, który zatrzymuje się, gdy sonda zadziała | `x`, `y`, `z`, `f`, `probe.n` (1 do 4), `probe.axis` (x, y albo z), `probe.k` (1, 2 albo 3) |
| `probe-set` | Po dotknięciach jednego cyklu sondowania | `probe.kind` (`"z"`, `"x"`, `"y"` albo `centre`), `probe.action` (`set` albo `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Ruch gwintowania na tokarce | `x`, `z`, `thread.lead` |

Także dla każdego zdarzenia: `kin` (none, a, b, ac, bc), `rotary` i `tcp` (yes albo no, z maszyny w Ustawieniach), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` i `op.turn` operacji, a na tokarce `spin.mode` (css albo rpm), `spin.css`, `spin.max` i `tool.nose`. Słowo z literą osi, którego wartość jest pusta, na przykład `A{rot.a}` na maszynie bez osi A, zostaje pominięte w wierszu. Porównuj x, y i z jako tekst w cudzysłowie (`if probe.kind == "z"`): bez cudzysłowu są to współrzędne ruchu.

Dwa kolejne wiersze na górze postprocesora robią z niego postprocesor tokarski: `machine lathe` (wtedy zapisuje tylko X i Z i odrzuca ścieżki frezarskie, tak jak postprocesor frezarski odrzuca ścieżki toczenia) oraz `lathe-x diameter` albo `lathe-x radius`.

Każde zdarzenie może używać zmiennych swojego rodzaju ruchu, zapisywanych jako `{name}`: programu (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), półfabrykatu (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), narzędzia (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operacji (`op.name`, `op.type`), `rpm`, punktu ruchu (`x`, `y`, `z`, `f`, oraz `moved`: prawda, gdy oś się zmieniła), łuków (`arc.g` 2 albo 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) i otworów (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Lista **Zdarzenia i zmienne** w edytorze pokazuje, które zdarzenie widzi które zmienne. Stan, który można odczytać i ustawić: `cool`, `offset` oraz `at.x`, `at.y`, `at.z`, `at.f` (ostatnio zapisane wartości).

## Instrukcje

| Instrukcja | Co robi |
|---|---|
| `raw TEXT` | Wiersz dokładnie tak, jak wpisano (bez numeru wiersza) |
| `comment TEXT` | `(TEXT)` z usuniętymi znakami spoza ASCII i nawiasami |
| `emit WORD WORD …` | Wiersz słów; słowa, które wychodzą puste, są pomijane; bez słów, bez wiersza |
| `word WORD …` | Dodaje słowa do budowanego wiersza; samo `emit` go kończy |
| `if EXPR` … `else` … `end` | Warunki: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, w przeciwnym razie b) |
| `for tool in tools` … `end` | Raz dla każdego narzędzia użytego w programie |
| `set NAME EXPR` | Zapamiętuje wartość (`set offset tool.number`) |
| `reset NAME …` | Zapomina słowa modalne (grupę, literę adresu jak `Z` albo `at.z`) |
| `do rapid X Y Z` | Uruchamia zdarzenie `rapid` dla punktu |

Słowo to wpisany tekst z dziurami `{variable|filter}`. Filtry to `upper`, `lower`, `pad:N` (uzupełnienie zerami), `cut:N` (pierwsze N znaków), `safe` (ASCII bezpieczny w komentarzu) i `int`. Słowo kończące się `~` jest **modalne**: zapisywane jest tylko wtedy, gdy różni się od ostatnio zapisanego (`G1~`, `X{x}~`). Słowo kończące się `~!` jest zapisywane za każdym razem i nadal zapamiętywane. Nazwa, która nie jest zmienną, to zwykły tekst (`G81`, `mist`). Liczby są zaokrąglane do 0,001 mm i zapisywane bez zer na końcu.

## Czego postprocesor nie potrafi

Decyduje tylko o sposobie zapisu ruchów, nic więcej. Nie może zmienić ścieżki narzędzi, przestawić operacji, podzielić łuku, dodać osi, znać zakresu ruchu ani kinematyki maszyny, ani wykonywać arytmetyki na współrzędnych (nie ma `+`). Same pozycje osi obrotowych pochodzą z maszyny opisanej w Ustawieniach, a nie z postprocesora: postprocesor może zmienić ich znak albo litery, nie kinematykę. Cykle trwałości narzędzia i podprogramów nie są zbudowane. Plik postprocesora w stylu `.cps` z innego programu nie może być wczytany: to inny, prostszy format.
