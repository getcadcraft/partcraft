---
title: Skrypty i wiersz poleceń
summary: Format skryptów PartCraft (.pcscript), który zapisuje całą część jako czytelny tekst, oraz narzędzie wiersza poleceń partcraft, które buduje, zmienia, cofa i sprawdza części bez ekranu.
keywords: skrypt, pcscript, tekst, wiersz poleceń, cli, terminal, wsadowo, automatyzacja, sprawdzanie, lint, budowanie, eksport, kontrola wersji, różnice, skrypt parametryczny
from: c56df222
---

Staranne modelowanie zależy bardziej od dyscypliny niż od przycisków. Część zapisana jako tekst można czytać, sprawdzać, porównywać wiersz po wierszu i odbudowywać skryptem. PartCraft działa w obie strony: każdą część można zapisać jako skrypt, a skrypt buduje część.

## W aplikacji

Na karcie {{ui:Parametry}}, w sekcji **Skrypt**:

- {{ui:Zapisz jako skrypt}} pobiera otwartą część jako `<nazwa>.pcscript`.
- {{ui:Otwórz skrypt}} buduje część z pliku `.pcscript`. Błąd zostaje zgłoszony z numerem wiersza, a nic nie jest zastępowane.

## Format skryptu

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Zasady:

- Wiersz przy lewym brzegu rozpoczyna instrukcję: `pcscript`, `part`, `param`, typ elementu (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` oraz nowsze typy), po którym następuje jego nazwa, albo `rollback <feature>`.
- Wcięte wiersze to ustawienia instrukcji powyżej. Ustawienie samo w sobie (`through`, `reverse`, `suppressed`) oznacza tak.
- Ustawienie liczbowe to liczba albo `=` i wyrażenie, które tworzy równanie: `depth = thick`.
- W szkicu: `on` nazywa płaszczyznę (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometria to `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (przeciwnie do ruchu wskazówek zegara) lub `spline <name> fit|control <points>`; relacje to ich typ i nazwy, które łączą (`O` to początek układu); wymiar kończy się wartością lub `= expression`.
- Opcjonalne ustawienia wiersza geometrii lub relacji wpisuje się na końcu w nawiasach kwadratowych, oddzielone `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` rozpoczyna komentarz (na początku wiersza lub po spacji). Nazwy ze spacjami wpisuje się w „cudzysłowach”.
- Identyfikatory elementów liczą się od f1 w kolejności zapisu. Odwołania do krawędzi i ścian ich używają, na przykład `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Ustawienia, dla których format nie ma słów, zapisuje się jako `json` i wartość; są odczytywane z powrotem bez zmian.

Zapisany z aplikacji skrypt zawiera każde ustawienie, więc otwiera się jako ta sama część. Zaimportowana bryła STEP jest zapisywana w skrypcie przez aplikację, a z wiersza poleceń jako osobny plik `.step` wskazany przez `step-file`.

## Narzędzie wiersza poleceń

Narzędzie działa na komputerze z Node.js 24, z kopii źródeł CadCraft: `node tools/partcraft-cli/partcraft.mjs <command>`. To narzędzie dla programistów i korzysta z tych samych modułów co aplikacja. Częściami są pliki `.partcraft.json` lub skrypty `.pcscript`.

| Polecenie | Co robi |
|---|---|
| `info <part>` | Elementy, parametry, pasek cofnięcia, objętość i rozmiar zbudowanej bryły |
| `params <part>` | Każdy parametr i równanie z wartością |
| `set <part> width=150 Base.depth==thick` | Wprost: zmienia parametry, łączy liczby (`==` lub wyrażenie), ustawia zwykłe liczby |
| `drive <part> Base.depth=12` | Wstecz: rozwiązuje parametr stojący za sterowaną liczbą (`--prefer width` wybiera jeden) |
| `build <part> --out x.step` | Zapisuje `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` lub makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Jeden plik na każdy wiersz tabeli projektowej |
| `variants <part> --out-dir d` lub `--zip f.zip` | Każda konfiguracja jako STEP, IFC, DWG i podgląd, tabela wariantów oraz element biblioteki (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); zobacz [Tworzenie paczki wariantów](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skrypt na część |
| `to-script <part> -o part.pcscript` | Część na skrypt |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Przesuwa pasek cofnięcia w pliku |
| `check <part> [--strict]` | Kontrola dyscypliny (poniżej) |

`build` przyjmuje też `--set name=value` (tylko dla tego budowania) i `--upto <feature>`. Każde polecenie przyjmuje `--json`. Kody wyjścia: 0 – w porządku, 1 – znaleziono problem, 2 – polecenie wpisano błędnie. Skrypt nigdy nie jest przepisywany w miejscu: podaj `-o`, aby zapisać zmienioną kopię.

## Sprawdzanie

`check` zgłasza, co utrudni późniejsze zmiany w części:

| Ustalenie | Zaliczane jako |
|---|---|
| Szkic nadmiarowo zwymiarowany (sprzeczne lub powtórzone relacje) | błąd |
| Element, którego nie da się zbudować | błąd |
| Parametr lub równanie z błędem albo parametry odwołujące się do siebie | błąd |
| Szkic niedowymiarowany, z jego stopniami swobody | ostrzeżenie |
| Liczby wpisane wprost w elementy i wymiary, których nie steruje żaden parametr | ostrzeżenie |
| Parametr, którego nic nie używa | ostrzeżenie |
| Wyłączony element; pasek cofnięcia nie na końcu | ostrzeżenie |

`--strict` zamienia każde ostrzeżenie w błąd, więc skrypt budujący może odrzucić część, która nie jest w pełni sterowana.

:::note
Wynik makra `.swb` jest przeznaczony dla programu do modelowania części, którego używa większość warsztatów: uruchomiony w tym programie buduje tam część. Tutaj nie został uruchomiony w tym programie (nie jest dostępny na naszych serwerach), więc traktuj go jako nieprzetestowany.
:::
