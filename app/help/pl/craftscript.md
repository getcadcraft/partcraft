---
title: Pisanie i uruchamianie skryptów (obszar roboczy Skrypt)
summary: Obszar roboczy Skrypt krok po kroku: pisanie skryptu CraftScript lub Lua, uruchamianie klawiszem F5, czytanie konsoli, zachowywanie wyników w zmiennych dla następnego skryptu, pokazywanie siatek, pól i wykresów, zatrzymywanie uruchomienia oraz zapisywanie skryptów razem z częścią.
keywords: skrypt, skryptowanie, skrypt podczas modelowania, wysuń do okna, drugi ekran, drugi monitor, param, params, parametry w skryptach, CraftScript, Lua, kod, program, edytor, konsola, REPL, wiersz poleceń, uruchom, F5, uruchom zaznaczenie, stop, zmienne, obszar roboczy, wykres, pole, siatka, legenda, podwidok, analiza, automatyzacja, macierz, numeryczny
from: d0003e89
---

**Wersja podglądowa.** Skryptowanie jest nowe w PartCraft 0.3 i jest w wersji podglądowej: język, biblioteka i sposób zapisywania skryptów mogą się jeszcze zmienić, a skrypty pisane teraz mogą wymagać drobnych poprawek później. Daj nam znać, co przestało działać.

Obszar roboczy Skrypt uruchamia Twoje własne obliczenia obok części: małe sumy, całe analizy albo skrypty z [biblioteki analiz](topic:craftscript-library). Skrypty pisze się w **CraftScript** (język macierzowy, bardzo podobny do MATLAB-a, zob. [Język CraftScript](topic:craftscript-language)), w **Lua** (zob. [Skrypty w Lua](topic:craftscript-lua)) albo w **Pythonie** (zob. [Skrypty w Pythonie](topic:craftscript-python)).

Wybierz **Skrypt** w polu **Obszar roboczy** po lewej stronie paska narzędzi. Część się nie zmienia. Prawy panel staje się panelem skryptu (szerszym niż zwykle; przeciągnij jego krawędź, aby zmienić szerokość, albo przenieś go na drugi ekran za pomocą menu {{ui:⋯}}, zob. [Układanie paneli](common:arrange-panels)).

## Skrypt podczas modelowania

Nie musisz wychodzić z obszaru roboczego **Projekt**, aby napisać skrypt. W Projekcie karta {{ui:Skrypt}} w prawym panelu zawiera ten sam edytor, konsolę, zmienne i bibliotekę, z tymi samymi skryptami. Drzewo elementów i widok dalej działają: kliknij element, aby go zaznaczyć, kliknij dwukrotnie szkic, aby go edytować, obróć widok, a potem wróć na kartę {{ui:Skrypt}} i naciśnij {{key:F5}}.

To, co skrypt **pokazuje** (siatki, pola, wykresy, tabele), nie jest rysowane na modelu w Projekcie: konsola o tym informuje, a obszar roboczy Skrypt pokazuje wszystko po przełączeniu.

{{ui:Wysuń do okna}}, obok {{ui:Uruchom}}, przenosi cały panel do osobnego okna, na przykład na drugi ekran, tak aby edytor i pełny widok stały obok siebie. {{ui:Wróć do głównego okna}} dokuje go z powrotem. Zob. [Układanie paneli](common:arrange-panels).

## Uruchom pierwszy skrypt

1. Wpisz w edytorze, na przykład:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'Sinus')
   disp(max(y))
   ```

2. Naciśnij {{key:F5}} (albo {{ui:Uruchom}}). Konsola pod edytorem pokazuje, co wypisał skrypt, oraz „Gotowe w … s”. Wykres pojawia się w **podwidokach** wzdłuż dołu widoku 3D.
3. Wiersz bez średnika wypisuje swoją wartość, jak w MATLAB-ie: `a = 3` wypisuje `a = 3`; `a = 3;` nie wypisuje nic.
4. Aby uruchomić tylko część skryptu, zaznacz wiersze i naciśnij {{key:Mod+Enter}} ({{ui:Zaznaczenie}}). Bez zaznaczenia uruchamia wiersz, w którym stoi kursor.
5. Wiersz na dole konsoli (po `>>`) uruchamia jedną instrukcję po naciśnięciu {{key:Enter}}. {{key:Up}} i {{key:Down}} przywołują wcześniejsze wiersze.

## Znajdowanie, zwijanie i uzupełnianie

- **Znajdź i zamień.** Naciśnij {{key:Mod+F}} (albo {{key:Mod+H}}, aby też zamienić). Nad kodem otwiera się pasek: wpisz, czego szukasz; trafienia się podświetlają, a licznik pokazuje, gdzie jesteś. Przyciski przy polu rozróżniają wielkość liter (**Aa**), szukają tylko całych słów (**W**) i używają wyrażeń regularnych (**.\***; w zamianie `$1` wstawia to, co dopasowała pierwsza grupa). {{ui:Zamień}} zamienia bieżące trafienie, a {{ui:Wszystkie}} zamienia wszystkie jako jeden krok {{key:Mod+Z}}.
- **Zwijanie.** Kliknij ▾ obok numeru wiersza albo naciśnij {{key:Mod+Shift+[}} z kursorem w wierszu `function`, `if`, `for`, `while`, `switch` lub `try` (Lua: `function`, `do`, `if`, `repeat`), aby schować jego wnętrze; wiersz mówi, ile linii jest schowanych. ▸ albo {{key:Mod+Shift+]}} rozwija go ponownie. Zwijanie tylko ukrywa wiersze: uruchamianie, zapis, kopiowanie i numery wierszy nadal liczą każdy wiersz, a pisanie w zwiniętym wierszu najpierw go rozwija.
- **Uzupełnianie.** Wpisz dwie litery nazwy albo naciśnij {{key:Mod+Space}}: pojawi się lista zmiennych, funkcji języka (z argumentami), słów kluczowych i nazw już użytych w skrypcie. Wybierz strzałkami i naciśnij {{key:Enter}} lub {{key:Tab}}.

## Gdy coś pójdzie źle

- Błąd podaje problem i wiersz: wiersz jest zaznaczony na czerwono w edytorze, a **Wiersz n** w konsoli przenosi tam.
- Pętla, która się nie kończy: naciśnij {{ui:Stop}} (pasek narzędzi lub panel). Skrypt zatrzymuje się od razu; zmienne zachowują wartości sprzed tego uruchomienia.
- Każde uruchomienie ma też limit kroków (domyślnie 2 miliardy; zmienisz go w **Opcjach uruchamiania** w panelu). Uruchomienie, które go przekroczy, zatrzymuje się z komunikatem.

## Zmienne przechodzą od skryptu do skryptu

Każda zmienna najwyższego poziomu utworzona przez skrypt trafia na kartę **Zmienne** (nazwa, typ, rozmiar, najmniejsza i największa wartość) i zostaje tam dla następnego skryptu, w obu językach. Dzięki temu jeden skrypt tworzy siatkę, następny ją rozwiązuje, a trzeci rysuje wykres.

- Kliknij zmienną, aby ją pokazać: siatki, pola i modele w widoku 3D, tablice jako tabela (plus wykres liniowy dla wektora lub mapa kolorów dla macierzy) w podwidokach.
- {{ui:Zapisz jako JSON}}, {{ui:Zapisz jako CSV}} (tabela liczb) i {{ui:Zapisz jako HDF5}} pobierają ją; {{ui:Usuń}} ją usuwa; {{ui:Wyczyść wszystko}} opróżnia obszar roboczy.
- Zaznacz **Zapisuj zmienne razem z częścią**, aby zachować je w pliku części (do 32 MB; większe zostają tylko na tę wizytę). Po otwarciu takiej części panel proponuje ich wczytanie.

## Siatki, pola i wykresy

- `show(m)` rysuje siatkę; `show(f)` koloruje pole na jego siatce z legendą. Lista **Wyświetlane** w lewym górnym rogu widoku ukrywa ({{ui:oko}}) lub usuwa każdą pozycję oraz ukrywa lub pokazuje samą część. Pod legendą wpisz zakres (**Od**, **do**) albo naciśnij {{ui:Auto}}; wektor lub pole naprężeń oferuje też wybór składowej do pokazania.
- `show(f, 'deform', u, 'scale', 50)` rysuje siatkę przesuniętą polem przemieszczeń `u`, powiększoną 50 razy (bez `scale` około 8 % rozmiaru modelu).
- Kliknij pokazaną siatkę: najbliższy węzeł, element i wartości pola w nim pojawią się w podwidokach (**Wybrane**).
- `plot`, `imagesc` i `table` umieszczają w podwidokach wykres liniowy, mapę kolorów dwuwymiarowej tablicy lub tabelę. Wykres o tym samym `'id'` (albo tytule) co wcześniejszy zastępuje go, więc pętla może aktualizować jeden wykres zbieżności; `'append', true` dodaje krzywą do wykresu. {{ui:Wyczyść}} opróżnia podwidoki; strzałka je zwija.
- Przy dwóch lub więcej wykresach {{ui:Obok siebie}} pokazuje je wszystkie naraz (najnowsze sześć); kliknięcie zakładki tabeli lub obrazu pokazuje tylko ją.
- Każdy wykres ma pod sobą {{ui:PNG}}, {{ui:SVG}} i {{ui:CSV}}. PNG i SVG drukują go na białym tle w kolorach papieru, niezależnie od motywu (PNG 1600 × 1000 pikseli; SVG skaluje się bez rozmycia); CSV zawiera jego liczby z pełną precyzją: jedną kolumnę x i kolumnę na krzywą, gdy krzywe mają wspólne x, w przeciwnym razie jeden wiersz na punkt z nazwą krzywej.
- {{key:F}} albo {{ui:Dopasuj}} dopasowuje widok do tego, co jest pokazane.

## Pliki

- {{ui:Otwórz}} w grupie Skrypt (albo upuść pliki na widok lub panel): pliki `.craft`, `.lua` i `.py` otwierają się jako nowe skrypty (nie uruchamiają się); pliki danych (STL, OBJ, CSV, JSON, NPY, HDF5) wczytują się do zmiennych pod nazwą pliku.
- {{ui:Zapisz}} w grupie Skrypt pobiera bieżący skrypt jako plik.
- {{ui:Nowy}} w grupie Skrypt (albo {{ui:+}} przy kartach) zaczyna kolejny skrypt. Kliknij dwukrotnie kartę, aby ją przemianować; jej {{ui:×}} usuwa ją (można to cofnąć).

## Odczyt parametrów części

Skrypt odczytuje parametry części (zob. [Sterowanie częścią za pomocą parametrów](topic:parameters)) po nazwie:

```
w = param('width');     % wartość jednego parametru w mm (lub w stopniach, albo zwykła liczba)
p = params();           % wszystkie, jako struktura: p.width, p.height
```

W Lua i Pythonie są to `cs.param('width')` i `cs.params()`. Skrypty tylko odczytują parametry: zmieniaj je na karcie {{ui:Parametry}}. Pod kartą skryptu wiersz wypisuje parametry, które skrypt czyta przez `param('…')`, i oznacza te, których część nie ma; karta {{ui:Parametry}} wypisuje skrypt pod każdym z nich. Nazwa składana w trakcie działania skryptu, na przykład `param(name)`, nie jest wypisywana.

## Skrypty są zapisywane w części

Każdy skrypt na kartach jest zapisany w części, więc {{ui:Zapisz}} zapisuje je razem z nią, a zmiany w nich można cofnąć. Otwarcie części **nigdy nie uruchamia jej skryptów**: konsola mówi, ile ich zawiera, a uruchamiają się dopiero po naciśnięciu {{ui:Uruchom}}. Część od kogoś innego może zawierać dowolny skrypt: przeczytaj go, zanim go uruchomisz. Skrypty działają w tle na tym komputerze, bez dostępu do sieci, i nie mogą dotknąć strony.

## Powiązane

- [Język CraftScript](topic:craftscript-language)
- [Skrypty w Lua](topic:craftscript-lua)
- [Skrypty w Pythonie](topic:craftscript-python)
- [Biblioteka analiz](topic:craftscript-library)
- [Pisanie własnej analizy](topic:craftscript-own-analysis)
