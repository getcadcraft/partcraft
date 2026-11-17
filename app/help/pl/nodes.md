---
title: Węzły: budowanie modelu przez łączenie
summary: Łącz liczby w punkty, punkty w krzywe, krzywe w powierzchnie. Zmień liczbę, a wszystko poniżej przebuduje się. Każdy węzeł to też linia CraftScript, a graf jest zapisany w pliku.
keywords: węzły, edytor węzłów, skrypt wizualny, parametryczny, graf, przewody, porty, dowolna forma, freeform, nurbs, loft, wyciągnij, obróć, okrąg, krzywa, powierzchnia, seria, zakres, losowy, lista, skrypt, craftscript, grasshopper
from: 3a4625de
---

Edytor **węzłów** buduje geometrię, łącząc ze sobą pudełka. Każde pudełko (węzeł) wykonuje jedno małe zadanie: tworzy liczbę, punkt, okrąg, loft. Łączysz wynik jednego z wejściem następnego, a model podąża za zmianami, gdy zmienisz liczbę na początku.

Otwórz go z listy obszarów roboczych: {{ui:Węzły}}. Otwiera się okno edytora. Część, która już ma graf, pokazuje go po otwarciu obszaru roboczego. To okno nad widokiem 3D: przeciągnij pasek tytułu, aby je przesunąć, a róg, aby zmienić jego rozmiar.

## Łączenie

1. Wybierz węzeł z listy po lewej (wpisz w polu wyszukiwania, aby zawęzić; <kbd>Enter</kbd> dodaje pierwszy pasujący). Pojawi się na środku płótna.
2. Przeciągnij od okrągłej kropki **wyjścia** po prawej stronie jednego węzła do okrągłej kropki **wejścia** po lewej stronie innego. Kropka robi się zielona, gdy pasuje, i czerwona, gdy nie; wskaż ją, aby zobaczyć powód.
3. Wejście bez połączenia pokazuje pole na wpisaną wartość. Wpisz liczbę i naciśnij <kbd>Tab</kbd>: wynik się przebuduje.
4. Małe kółko na pasku tytułu węzła to jego **oko**. Węzeł z włączonym okiem jest rysowany w widoku 3D: jako linie dla krzywych, cieniowany dla powierzchni, kropki dla punktów.

Przeciągnij węzeł za pasek tytułu. Przeciągnij tło, aby przesunąć widok, a kółkiem myszy powiększ. <kbd>Delete</kbd> usuwa zaznaczony węzeł. {{ui:Uporządkuj}} układa węzły w kolumny, {{ui:Dopasuj}} mieści je wszystkie w widoku, {{ui:Cofnij}} i {{ui:Ponów}} przechodzą przez twoje edycje.

## Typy i jednostki

Porty mają typ: liczba, tak/nie, punkt, wektor, krzywa, powierzchnia, siatka, bryła albo „geometria” dla każdego z nich. Punkt może zasilić wejście wektora i odwrotnie. Liczby mają jednostkę: **długość** jest w milimetrach, a **kąt** w stopniach. Długości nie można podłączyć do kąta, a długość razy długość (pole) jest odrzucana, więc błędny przewód zostaje zablokowany w chwili, gdy go tworzysz.

Kwadratowa kropka to **lista**. Gdy lista trafia na wejście pojedynczej wartości, węzeł działa raz dla każdego elementu, a jego wynik staje się listą. Krótsza lista powtarza swój ostatni element. Na przykład **Seria** wysokości podłączona do **Przesuń** tworzy stos kopii.

## Bryły i operacje logiczne jako węzły

Grupa **Bryły** tworzy zamknięte bryły z tych samych dokładnych powierzchni co panel Powierzchnie: **Bryła prostopadłościan**, **Bryła walec** i **Bryła kula** (wymiary w mm), **Suma**, **Odejmij** i **Część wspólna** (druga bryła jest brana z pierwszej; tolerancja to, jak daleko trójkąty silnika brył mogą być od dokładnych powierzchni), **Zaokrąglenie między ścianami** (ściany według ich numeru w bryle, 1 dla pierwszej; promień i, powyżej 0, promień na końcu), **Objętość bryły** (mm³) oraz **Bryła na siatkę** (żeby ją zobaczyć lub zapisać). Bryła ma własny typ portu: punktu lub liczby nie można podłączyć do wejścia bryły, a kropka zostaje czerwona. Węzły operacji logicznych (Boolean) i zaokrąglania używają własnego silnika brył programu, wczytywanego przy pierwszym otwarciu edytora.

## Błędy

Węzeł, który nie może wykonać zadania, mówi dlaczego pod swoją nazwą, na czerwono („Promień musi być większy od zera.”), a kolejne węzły czekają. Ten sam komunikat jest Problemem w panelu Problemy, więc możesz go znaleźć stamtąd.

## Każdy węzeł to linia skryptu

Naciśnij {{ui:Skrypt}}, aby zobaczyć graf jako CraftScript: jedna linia na węzeł, na przykład `n3 = nd_circle(n2, n1, [0 0 1]);`. Edytuj tekst i naciśnij {{ui:Utwórz graf z tego skryptu}}, aby przywrócić go jako graf. Te same funkcje `nd_` działają w skrypcie CraftScript w PartCraft, więc graf można tam uruchomić, zapętlić lub przetestować. Liczby losowe zawsze przyjmują **ziarno** (seed), więc ten sam graf daje ten sam wynik na każdym komputerze.

## Zapisywane z plikiem

Graf jest zapisany w pliku części (nie w historii, więc Cofnij w edytorze działa osobno). Węzły tworzą krzywe, powierzchnie i siatki obok bryły: nie zmieniają elementów części.
