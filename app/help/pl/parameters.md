---
title: Sterowanie częścią za pomocą parametrów
summary: Nazwij wymiary, które mają znaczenie (szerokość, grubość, rozmiar śruby), połącz dowolny numer elementu lub wymiar szkicu z nimi znakiem =, i zmień całą część z jednej tabeli.
keywords: parametry, gdzie używany, używany przez, zmienne globalne, zmienne, równania, zamiar projektowy, wymiary sterujące, połączenie, wyrażenie, formuła, nazwij wymiar, połączone wartości
from: 58c646ea
---

Parametr to nazwana liczba, na przykład `width = 120` albo `margin = bolt * 1.5`. Połącz głębokość, średnicę otworu, liczbę w wzorze albo wymiar szkicu z nim, a zmiana parametru zmieni je wszystkie w jednym kroku. Tak zachowujesz zamiar projektowy w części, a nie w głowie.

## Dodawanie parametrów

1. W prawym panelu kliknij kartę {{ui:Parametry}}.
2. Pod **Zmienne** wpisz nazwę w polu „nazwa”, na przykład `width`.
3. Wpisz jej wartość w następnym polu, na przykład `120`, i naciśnij {{key:Enter}} (albo kliknij {{ui:Dodaj}}).

Wartość może być liczbą albo wyrażeniem innych parametrów: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Kolumna **Wartość** pokazuje, ile to wychodzi. Nazwa zaczyna się od litery lub `_` i ma tylko litery, cyfry i `_`; nazwy funkcji i jednostek (`sin`, `mm`, `pi`) są odrzucane, podobnie jak pętla, na przykład `a = b` przy `b = a`.

## Połącz liczbę z parametrem

1. Kliknij element w historii, na przykład „Extrude1”. Jego ustawienia pokażą się na karcie {{ui:Właściwości}}.
2. W polu liczby, na przykład **Głębokość (mm)**, wpisz `=` i wyrażenie: `=thick` albo `=width / 4`.
3. Naciśnij {{key:Enter}}.

Pole pokazuje teraz wynik, a obok etykiety pojawia się przycisk **ƒ**. Wskaż go, aby zobaczyć równanie. Wymiary szkicu działają tak samo, zarówno na liście **Wymiary szkicu** elementu, jak i w polu wymiaru otwartego szkicu (kliknij dwukrotnie wymiar, wpisz `=width`, naciśnij {{key:Enter}}).

Liczby, które można połączyć: głębokość wyciągnięcia, kąt obrotu, średnica otworu, głębokość i rozmiary pogłębienia, liczba w wzorze, odstęp i kąt, promień zaokrąglenia, odległość fazki, grubość ścianki powłoki, każdy wymiar szkicu oraz rozmiary nowszych elementów (druga głębokość, zwężenie, pogłębienie stożkowe, odległość płaszczyzny odniesienia, kąt pochylenia i inne).

## Zmiana parametru

Na karcie {{ui:Parametry}} wpisz nową wartość albo wyrażenie w kolumnie **Wyrażenie** i naciśnij {{key:Enter}}. Wszystko, co jest z nim połączone, się zmienia, a część się przebudowuje jako jeden krok: {{key:Mod+Z}} to cofa.

Aby zmienić liczbę od drugiej strony, zobacz [Równania w obu kierunkach](topic:equations-two-way).

## Sprawdzanie, gdzie parametr jest używany

Pod każdym parametrem na karcie {{ui:Parametry}} linia mówi, co go używa:

- liczby, które steruje, na przykład **Extrude1 głębokość** lub **Sketch1 D2 (odległość)**. Kliknij jedną, aby zaznaczyć jej element i pokazać właściwości;
- liczby, które steruje **przez** inne parametry, na przykład **Hole1 średnica (przez h, d)**, gdy `d = h + 2` i `h = w / 2`;
- **parametry**, których wyrażenia go używają, **konfiguracje**, które go ustawiają, oraz **skrypty**, które go czytają (zobacz [Pisanie i uruchamianie skryptów](topic:craftscript)).

„Jeszcze nie używany.” oznacza, że nic go nie używa: możesz go usunąć bez pytania.

## Odłączanie, zmiana nazwy, usuwanie

- **Odłącz liczbę:** kliknij jej przycisk **ƒ** albo {{ui:Odłącz}} na liście **Równania**. Zachowuje swoją bieżącą wartość i żaden parametr jej już nie zmienia.
- **Zmień nazwę parametru:** wpisz nową nazwę w jego polu **Nazwa**. Każde wyrażenie, które go używa, zostaje przepisane.
- **Usuń parametr:** kliknij × w jego wierszu. Jeśli coś go używa, PartCraft pyta, czy najpierw wpisać jego bieżącą wartość w te wyrażenia.
- **Usunięcie elementu** usuwa równania jego liczb; pasek stanu mówi, które.

:::note
Parametry są zapisywane w pliku `.partcraft.json` (jako wersja pliku 3). Część bez parametrów jest zapisywana dokładnie jak wcześniej.
:::

## Wyrażenia

| Zapis | Znaczy |
|---|---|
| `120`, `12.5`, `1e3` | liczba (milimetry albo stopnie dla kąta) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | długość w innych jednostkach, zamieniona na milimetry |
| `30deg`, `0.5rad` | kąt, zamieniony na stopnie |
| `+ - * / %` i `^` | arytmetyka; `^` to potęga, `-2^2` to −4 |
| `sin cos tan asin acos atan atan2` | trygonometria w stopniach |
| `sqrt pow exp ln log abs sign` | inne funkcje |
| `ceil floor int round(x, digits) min max` | zaokrąglanie i ograniczenia |
| `if(test, a, b)` z `< <= > >= == !=` | wybór: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Nazwy rozróżniają wielkość liter: `Width` i `width` to dwa parametry.

Zobacz też [Konfiguracje i tabele projektowe](topic:design-tables) oraz [Skrypty i wiersz poleceń](topic:scripts-and-cli).
