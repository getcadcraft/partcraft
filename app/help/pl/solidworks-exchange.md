---
title: Przenoszenie części do innych modelerów części i z nich
summary: Wyślij część do innego modelera jako makro, które odtwarza ją z żywym drzewem elementów. Nazwany STEP i otwieranie listy elementów zapisanej przez inny modeler jeszcze nie zostały zbudowane w tej wersji.
keywords: makro, jeszcze nie zbudowano, swb, vba, drzewo elementów, wymiana w obie strony, eksport makra, cadcraft-sw.json, nazwany step, ap214, zmienne globalne, równania, część natywna
from: 97ca61da
---

PartCraft wymienia części z SolidWorks w obie strony, bez formatu pliku, którego nikt inny nie odczyta:

- **Na zewnątrz:** makro (`.swb`, zwykły tekst), które SolidWorks uruchamia, by samo zbudować część, element po elemencie, wraz z jej szkicami, więzami, wymiarami, zmiennymi globalnymi i równaniami. Otrzymujesz natywną część z żywym drzewem elementów, a nie martwą bryłę.
- **Z powrotem:** makro uruchamiane w SolidWorks zapisuje elementy i równania części do pliku `.cadcraft-sw.json`. Otwieranie tego pliku w PartCraft jeszcze nie zostało zbudowane w tej wersji (wymaga dokładnego jądra).

:::warning
Nic z tego nie zostało jeszcze przetestowane w SolidWorks. SolidWorks działa tylko w Windows i z licencją, a PartCraft nigdy nie uruchomił w nim tych makr. Makra napisano na podstawie dokumentacji API SolidWorks i sprawdzono ich strukturę tutaj. Spodziewaj się zgłaszania problemów; dziennik zapisany przez makro podaje, który krok się nie powiódł.
:::

PartCraft nie może zapisać pliku `.sldprt`: ten format jest zamknięty. Makro to sposób na uzyskanie natywnej części.

## Wyślij część jako makro

1. Otwórz część.
2. Wybierz {{ui:Eksport}}, potem {{ui:Makro dla SolidWorks (.swb)}}. PartCraft pobiera `<part>.swb`; pasek stanu podaje, że zapisano „bez dokładnego jądra”.
3. Okno dialogowe podaje, ile elementów, zmiennych globalnych i równań buduje makro, i wymienia wszystko, co pomija. W tej wersji obok nie powstaje STEP: jeśli go potrzebujesz, użyj {{ui:Eksport}}, potem {{ui:STEP (ścianki, jądro siatkowe)}}.
4. W SolidWorks wybierz **Narzędzia > Makro > Uruchom**, wskaż plik `.swb` i poczekaj. Tworzy nową część z domyślnego szablonu części, ustawia milimetry i buduje każdy element.
5. Na końcu komunikat podaje, ile kroków wykonano, ile się nie powiodło i ile zgadza się z bryłą PartCraft. Pełny dziennik `<part> macro log.txt` zapisuje się obok makra.

Co buduje makro:

| PartCraft | W nowej części |
|---|---|
| Szkic na płaszczyźnie przedniej, górnej lub prawej | Szkic na tej płaszczyźnie, z jego liniami, łukami, okręgami, punktami, więzami i wymiarami (nazwanymi jak w PartCraft, np. `k7`) |
| Szkic na ścianie | Szkic na tej samej ścianie, wskazanej punktem na niej |
| Szkic na stałej płaszczyźnie | Płaszczyzna odniesienia przez trzy punkty i szkic na niej |
| Wyciągnij, wytnij (ślepe, przez wszystko, w płaszczyźnie środkowej, w dwóch kierunkach, zwężenie) | Wyciągnięta wypustka lub wyciągnięte wycięcie |
| Obróć, wycięcie obrotowe | Obrót wokół tej samej linii osiowej |
| Otwór (prosty, pogłębienie walcowe, pogłębienie stożkowe, gwintowany) | Jedno lub dwa wycięcia z własnymi szkicami (otwór gwintowany to tylko średnica wiertła; bez gwintu) |
| Wzór liniowy i kołowy, lustro | Wzór liniowy, wzór kołowy, lustro (elementów lub bryły) |
| Zaokrąglenie, fazka, powłoka | Zaokrąglenie, fazka i powłoka na tych samych krawędziach i ścianach, wskazanych punktami |
| Parametry i równania | Zmienne globalne i równania na przemianowanych wymiarach |
| Elementy wyłączone, pasek cofania | Wyłączone w ten sam sposób; pasek cofania w tym samym miejscu |

Po każdym elemencie bryłowym makro porównuje objętość i rozmiar bryły z tymi z PartCraft. Gdy się różnią, odwraca kierunek tego elementu raz i sprawdza ponownie; jeśli to nie pomaga, cofa odwrócenie i zapisuje „Check” w dzienniku.

### Co zostaje pominięte

Okno dialogowe i początek makra wymieniają wszystko, czego nie przeniesiono, wraz z powodem. Obecnie są to: importowane bryły (zamiast tego wstaw STEP), przeciągnięcia (sweep), lofty, pochylenia, osie i punkty odniesienia, warunki końca „do”, wyciąganie tylko niektórych konturów oraz wszystko, co od nich zależy. Spline'y stają się krzywymi przechodzącymi przez ich punkty. Ta wersja nie ma dokładnego jądra, więc szkice na ścianach oraz elementy wybierające krawędzie lub ściany też są pomijane.

## Wyślij nazwany STEP

Jeszcze nie zbudowano w tej wersji: {{ui:STEP dla SolidWorks (z nazwami, AP214)}} wymaga dokładnego jądra, a wybranie go podaje: „STEP dla SolidWorks: jeszcze nie zbudowano. …”. Z dokładnym jądrem plik zawiera nazwę części, milimetry i kolor części oraz ustawia oś Y w górę, tak jak SolidWorks pokazuje części (zwykły eksport {{ui:STEP AP214 (dokładna bryła)}} ustawia oś Z w górę). W nazwie litery z akcentami tracą akcenty, a inne znaki spoza zwykłego ASCII zamieniają się na `_`.

## Sprowadź część z powrotem

Otwieranie pliku w PartCraft (krok 3) jeszcze nie zostało zbudowane w tej wersji: pojawia się komunikat „Otwieranie eksportu SolidWorks: jeszcze nie zbudowano. …”. Aplikacja rysunkowa CadCraft nadal otwiera ten plik i przejmuje jego szkice.

1. Wybierz {{ui:Plik}} > {{ui:Eksport}} > {{ui:Eksportuj makro, aby sprowadzić części z powrotem (.swb)}}, aby pobrać `CadCraftExport.swb`, i umieść go obok swoich części.
2. W SolidWorks otwórz część, wybierz **Narzędzia > Makro > Uruchom** i wskaż `CadCraftExport.swb`. Makro zapisuje `<part>.cadcraft-sw.json` obok części i nic w niej nie zmienia.
3. W PartCraft wybierz {{ui:Otwórz}} i wskaż ten plik albo upuść go na widok 3D.
4. Z dokładnym jądrem PartCraft odbudowuje część element po elemencie i pokazuje, co zrobił: na przykład „5 z 5 elementów przeniesiono z SolidWorks (Flange.SLDPRT)”, każdy element, którego nie udało się przenieść („Nie przeniesiono: Sweep1 (Sweep).”), oraz czy objętość zgadza się z tą, którą zapisał SolidWorks.
5. Zapisz jako część PartCraft za pomocą {{ui:Zapisz}}.

Szkice trafiają na płaszczyznę podstawową, gdy na niej leżą, na pasującą płaską ścianę części, gdy taka istnieje (dzięki temu podążają za późniejszymi edycjami), a w pozostałych przypadkach na stałą płaszczyznę. Krawędzie i ściany zaokrągleń, fazek i powłok są odnajdywane na podstawie punktów i zachowywane jako nazwane odniesienia. Zmienne globalne stają się parametrami (nazwy ze spacjami dostają podkreślniki: „Bolt count” staje się `Bolt_count`), a równania stają się równaniami na tych samych wymiarach. Niczego nie zgaduje się: to, co nie ma odpowiednika, jest wymienione.

Aplikacja rysunkowa CadCraft otwiera ten sam plik i przejmuje jego szkice.

:::note
Format to `cadcraft-sw-export` w wersji 1, zwykły JSON w milimetrach i stopniach. Plik z nowszego makra albo nieprawidłowy jest odrzucany z podaniem powodu.
:::
