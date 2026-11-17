---
title: Konfiguracje i tabele projektowe
summary: Przechowywanie kilku rozmiarów i wersji jednej części jako nazwanych konfiguracji zapisanych w pliku części, z włączonymi lub wyłączonymi elementami w każdej z nich; przełączanie jednym kliknięciem, wczytywanie i eksport jako tabeli projektowej CSV albo budowanie wszystkich z wiersza poleceń.
keywords: tabela projektowa, konfiguracje, konfiguracja, rozmiary, rodzina części, csv, arkusz kalkulacyjny, warianty, sterowana tabelą, wyłącz, wyłączony, wyłącz element, opcje, z lub bez, konfigurator
from: 17249afb
---

**Konfiguracja** to jeden rozmiar części: nazwany zestaw wartości jej parametrów. Część przechowuje swoje konfiguracje we własnym pliku, więc podróżują razem z nią. **Tabela projektowa** to to samo w postaci pliku CSV, z jednym wierszem na konfigurację.

Konfiguracje ustawiają **parametry**, więc najpierw dodaj je (zob. [Sterowanie częścią za pomocą parametrów](topic:parameters)). Konfiguracja zapisuje parametry będące zwykłymi liczbami; parametry wyliczane z innych (takie jak `area = w * d`) podążają same.

## Zapisz konfigurację

1. Na karcie {{ui:Parametry}} ustaw parametry dla jednego rozmiaru części.
2. W sekcji **Konfiguracje** wpisz nazwę (na przykład `Duży`) i naciśnij {{ui:Zapisz bieżące wartości}} albo {{key:Enter}}.

Nowa konfiguracja jest oznaczona jako **aktywna**. Jeśli potem zmienisz parametr, pojawi się napis **aktywna, zmieniona od tego czasu**, dzięki czemu wiesz, że część już się z nią nie zgadza.

## Przełączanie, aktualizacja, zmiana nazwy, usuwanie

- {{ui:Zastosuj}} ustawia parametry na wartości tej konfiguracji i przebudowuje część.
- {{ui:Aktualizuj}} zapisuje bieżące wartości do tej konfiguracji.
- Aby zmienić nazwę, wpisz nową w jej polu i naciśnij {{key:Enter}}.
- {{ui:Usuń}} usuwa konfigurację. Parametry zachowują swoje wartości.

Każda z tych czynności to jeden krok: {{key:Mod+Z}} cofa ją. Jeśli zmienisz nazwę parametru, każda konfiguracja przyjmie nową nazwę; jeśli usuniesz konfigurację, wypadnie ona z pozostałych.

## Włączanie i wyłączanie elementów w konfiguracji

Konfiguracja zapamiętuje także, które elementy są wyłączone, więc jedna część może mieć wersje **z** i **bez** czegoś: otworów montażowych, fazki, występu.

1. Wyłącz element: kliknij go w historii, a potem {{ui:Wyłącz}} w {{ui:Właściwościach}}.
2. Zapisz konfigurację jak zwykle, na przykład `Bez otworów`. Jej wiersz wypisuje, co wyłącza.
3. Włącz element z powrotem ({{ui:Przywróć}}) i zapisz kolejną konfigurację, na przykład `Z otworami`.

Gdy jakakolwiek konfiguracja wyłącza element, zastosowanie konfiguracji wyłącza jej elementy i **włącza wszystkie pozostałe**, razem z jej wartościami parametrów, w jednym kroku. Konfiguracja zapisana, zanim w którejkolwiek wyłączono elementy, liczy się jako „wszystko włączone”. {{ui:Aktualizuj}} zapisuje elementy takie, jakie są teraz, wraz z wartościami.

Część, której konfiguracje wyłączają elementy, zapisuje się jako nowsza wersja pliku: starszy PartCraft zgłosi, że plik pochodzi z nowszej wersji, zamiast otworzyć go bez tych elementów.

:::note
Tabela projektowa CSV przenosi tylko wartości parametrów. Zaimportowanie tabeli nad konfigurację zmienia jej wartości i zachowuje wyłączone w niej elementy; opcja wiersza poleceń `--table` buduje tylko wartości.
:::

Plik części zapisuje się z konfiguracjami i z tą, która była aktywna. Część otwiera się z wartościami, z którymi ją zapisano.

## Wczytywanie i eksport tabeli projektowej

Tabela projektowa to plik CSV z kolumną dla każdego parametru i wierszem dla każdej konfiguracji:

```
name,width,thick,bolt
mały,100,6,6.6
średni,140,8,8.5
duży,200,12,13
```

Pierwsza kolumna może nazywać się `name`, `config` lub `configuration`; każda inna kolumna musi być nazwą parametru części. Komórki to liczby, z jednostkami, jeśli chcesz (`8in`). Pusta komórka pomija dany parametr w wierszu.

- {{ui:Importuj CSV}} dodaje każdy wiersz jako konfigurację. Wiersz z nazwą istniejącej konfiguracji ją zastępuje. Import to jeden krok.
- {{ui:Eksportuj CSV}} zapisuje konfiguracje. Gdy żadnej jeszcze nie ma, zapisuje jeden wiersz z bieżącymi wartościami, jako punkt wyjścia do arkusza kalkulacyjnego.

Nazwa konfiguracji, którą arkusz odczytałby jako formułę (zaczynającą się od `=`, `+`, `-` lub `@`), jest zapisywana z wiodącym `'`.

## Wszystkie rozmiary naraz

{{ui:Pakiet wariantów…}} w sekcji **Konfiguracje** buduje każdą konfigurację albo wybrane z nich jako STEP, IFC, DWG i podgląd w jednym pliku zip, z tabelą ich parametrów; zob. [Tworzenie pakietu wariantów z konfiguracji](topic:variant-pack).

Narzędzie wiersza poleceń buduje jeden plik na każdy wiersz tabeli projektowej CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Najpierw wyeksportuj konfiguracje jako CSV, a potem przekaż ten plik przez `--table`. Zob. [Skrypty i wiersz poleceń](topic:scripts-and-cli). Część zapisana jako skrypt przechowuje swoje konfiguracje w wierszu `configs json …`.
