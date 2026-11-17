---
title: Utwórz pakiet wariantów z konfiguracji
summary: Zbuduj naraz każdą konfigurację części albo kilka wybranych jako STEP, IFC i DWG oraz podgląd każdej, z tabelą ich parametrów i częścią jako jedną pozycją biblioteki z wariantami.
keywords: pakiet wariantów, warianty, konfiguracje, rodzina części, eksport wsadowy, każdy rozmiar, step, ifc, dwg, podgląd, tabela, csv, json, biblioteka, konfigurator, konfigurator produktu, katalog, json pozycji
from: 9a6db99f
---

## Co zrobisz

Przekażesz **wszystkie rozmiary części naraz**: jeden plik STEP, IFC i DWG oraz obraz dla każdej konfiguracji, tabelę mówiącą, czym jest każda z nich, i pozycję biblioteki, która umieszcza je wszystkie na jednej stronie.

Najpierw potrzebujesz części z **konfiguracjami** (zob. [Konfiguracje i tabele projektowe](topic:design-tables)). Konfiguracja, która wyłącza element, na przykład płytę z otworami i bez nich, staje się własnym wariantem.

## Kroki

1. Otwórz część. Na karcie {{ui:Parametry}} znajdź **Konfiguracje**.
2. Kliknij {{ui:Pakiet wariantów…}}.
3. Zaznacz konfiguracje do zbudowania (wszystkie są zaznaczone) i pliki do zapisania: STEP, IFC, DWG, podgląd oraz pozycję biblioteki.
4. Kliknij {{ui:Utwórz pakiet}}. Pasek stanu liczy warianty w miarę ich budowania; twoja część się nie zmienia.
5. Pobiera się jedno archiwum zip: `<part> variants.zip`.

## Co jest w archiwum zip

| Plik | Co to jest |
|---|---|
| `<name>.step` | Konfiguracja jako bryła STEP. |
| `<name>.ifc` | IFC4, jeden element ze zbudowaną bryłą i parametrami części jako właściwościami; wartość jest własna dla tej konfiguracji. |
| `<name>.dwg` | Widoki z przodu, z góry, z prawej i izometryczny jako arkusz rysunku w pełnym rozmiarze. |
| `<name>.svg` | Izometryczny obraz liniowy tej konfiguracji. |
| `variants.csv`, `variants.json` | Tabela parametrów: id każdego wariantu, nazwa i wartość każdego parametru, elementy, które wyłącza, jego pliki, objętość i rozmiar. |
| `<part>.item.json` | Część jako jedna pozycja biblioteki z wariantami (zob. niżej). |
| `README.txt` | Co zostało wykonane, poniższe uwagi i to, czego nie zbudowano. |

Pliki nazywają się od konfiguracji. Konfiguracja, która się nie zbuduje (element, którego nie da się wykonać przy tych wartościach), zostaje pominięta w plikach i w tabeli, jest wymieniona w README i w komunikacie po zapisaniu archiwum zip; pozostałe są nadal zapisywane.

## Warto wiedzieć

- **STEP** jest dokładny, gdy dokładne jądro jest włączone w twojej wersji. Bez niego STEP jest ścianowy (płaskie trójkąty), a README to mówi.
- **DWG** to arkusz rysunku, a nie model 3D. Jego linie pochodzą z siatki, więc zakrzywiona krawędź to wiele krótkich linii.
- **Pozycja biblioteki** zawiera jedną bryłę i jeden rzut na wariant, w osiach biblioteki: Z w górze, przód w stronę −Y, a punkt wstawienia pośrodku tyłu, na dole. Plan to prostokąt ograniczający każdego wariantu. Pozycja jest ograniczona do 8 MB, więc bardzo ciężki wariant staje się pudełkiem o swoim rozmiarze, a README podaje, ile takich jest.
- Aktywna konfiguracja części jest domyślnym wariantem pozycji.
- Porty (punkty połączeń dla rur i kanałów) nie są ustawiane w PartCraft.

## Umieść warianty na stronie biblioteki

Prześlij `<part>.item.json` w **Biblioteka › Prześlij** na stronie. Wybierz jego kategorię, licencję i swoją linię atrybucji, a stanie się pozycją Biblioteki z wariantami. W BimCraft umieszczając ją, wybierasz wariant, a Zamień proponuje pozostałe. Strona, na której odwiedzający wybierają opcje, oglądają 3D i pobierają wariant, na razie jest **podglądem dla personelu**: nie jest jeszcze otwarta dla publiczności.

## Z wiersza poleceń

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` wskazuje konfiguracje, `--formats` dowolne z `step`, `ifc`, `dwg`, `preview`, a `--no-item` pomija pozycję biblioteki. Zapisuje folder, archiwum zip lub oba i kończy się kodem 1, gdy wariantu nie dało się zbudować. Zob. [Skrypty i wiersz poleceń](topic:scripts-and-cli).
