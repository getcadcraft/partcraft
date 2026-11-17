---
title: Narysuj pierwszy szkic
summary: Otwórz szkic na płaszczyźnie lub płaskiej ścianie, rysuj linie, prostokąty, okręgi, łuki, punkty i linie osiowe, zaokrąglaj narożnik, zaznaczaj, przeciągaj i usuwaj.
keywords: szkic, rysuj, linia, prostokąt, okrąg, łuk, punkt, linia osiowa, konstrukcja, zaokrąglenie, zaokrąglenie szkicu, zaokrąglij narożnik, przyciąganie, zaznacz, okno, przeciągnij, profil
from: 28be7436
---

Każda bryła zaczyna się jako szkic: płaski rysunek na płaszczyźnie. Ten przewodnik omawia narzędzia rysowania. Dociąganie szkicu więzami i wymiarami opisano w [Pełne zdefiniowanie szkicu](topic:relations-dimensions).

## Rozpocznij szkic

Szkic można rysować na płaszczyźnie podstawowej lub na dowolnej płaskiej ścianie części.

1. Wybierz miejsce szkicu:
   - płaszczyznę podstawową: kliknij **Płaszczyzna przednia**, **Płaszczyzna górna** lub **Płaszczyzna prawa** w historii albo kliknij płaszczyznę w widoku;
   - płaską ścianę: kliknij ścianę w widoku. Cała ściana zostanie podświetlona.
2. Wybierz {{ui:Szkic}} na pasku narzędzi albo naciśnij {{key:S}}. (Z wybraną ścianą możesz też wybrać {{ui:Szkic na tej ścianie}} w prawym panelu; z płaszczyzną — {{ui:Szkic na niej}}.)

Widok obraca się prostopadle do płaszczyzny, narzędzia szkicu pojawiają się na pasku narzędzi, a narzędzie {{ui:Linia}} jest gotowe. Jeśli naciśniesz {{ui:Szkic}} bez wybranego elementu, pokażą się płaszczyzny podstawowe, a pasek stanu wyświetli: „Kliknij płaszczyznę lub płaską ścianę, aby na niej rysować szkic. Esc zatrzymuje.”

:::note
Na zakrzywionej ścianie nie można umieścić szkicu: „Ta ściana jest zakrzywiona. Wskaż płaską ścianę lub płaszczyznę, na której chcesz rysować szkic.”
:::

**Szkic na ścianie podąża za tą ścianą.** Jeśli ściana powstała z krawędzi szkicu albo z końca wyciągnięcia, nowy szkic przesuwa się przy zmianie elementu (głębsza kieszeń zabiera ze sobą szkic na swoim dnie). Jeśli panel podaje, że ściana jest „Stała w miejscu wskazania”, szkic zostaje tam, gdzie ściana jest teraz.

## Narzędzia rysowania

Każde narzędzie ma przycisk na pasku narzędzi i klawisz. Ponowny wybór tego samego przycisku, naciśnięcie {{key:S}} albo {{key:Esc}} wraca do narzędzia {{ui:Zaznacz}}.

| Narzędzie | Klawisz | Jak rysować |
|---|---|---|
| {{ui:Linia}} | {{key:L}} | Kliknij początek, potem kolejny punkt. Linie łączą się końcem z końcem. Zakończ łańcuch klawiszem {{key:Esc}}, {{key:Enter}}, kliknięciem prawym przyciskiem albo dwukrotnym kliknięciem. Kliknięcie istniejącego punktu też go kończy |
| {{ui:Prostokąt}} | {{key:R}} | Kliknij jeden narożnik, potem przeciwległy. Dostajesz cztery linie połączone w narożnikach, dwie poziome i dwie pionowe |
| {{ui:Okrąg}} | {{key:C}} | Kliknij środek, potem punkt na okręgu |
| {{ui:Łuk}} | {{key:A}} | Kliknij środek, potem początek, potem koniec. Łuk biegnie w kierunku, w którym przesuwasz kursor wokół środka |
| {{ui:Punkt}} | {{key:P}} | Kliknij. Pojedynczy punkt oznacza środek otworu dla {{ui:Otwór}} |
| {{ui:Linia osiowa}} | {{key:N}} | Jak linia, po jednym odcinku. Rysowana przerywanie; to geometria konstrukcyjna, używana jako oś obrotu lub odniesienie |
| {{ui:Zaokrąglenie}} | {{key:F}} | Kliknij narożnik, w którym spotykają się dwie linie, wpisz promień, naciśnij {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Kliknij punkty, przez które przechodzi krzywa; {{key:Enter}} kończy, kliknięcie pierwszego punktu zamyka krzywą. Zobacz [Spline, przycinanie, odsunięcie i inne narzędzia szkicu](topic:sketch-tools) |
| {{ui:Przytnij}} | {{key:T}} | Kliknij fragment krzywej do usunięcia, aż do najbliższych przecięć |
| {{ui:Wymiar}} | {{key:D}} | Zobacz [Pełne zdefiniowanie szkicu](topic:relations-dimensions) |

Podczas rysowania małe pole obok kursora pokazuje długość, rozmiar, średnicę lub promień.

### Wpisz rozmiar podczas rysowania

Po pierwszym kliknięciu linii, prostokąta, okręgu lub łuku możesz wpisać rozmiar zamiast go klikać. Wpisanie liczby otwiera pole obok kursora z tą liczbą:

| Narzędzie | Pola ({{key:Tab}} przechodzi do następnego) | Co się dzieje po {{key:Enter}} |
|---|---|---|
| {{ui:Linia}}, {{ui:Linia osiowa}} | Długość, potem Kąt (°) od osi X szkicu | Linia zostaje narysowana o tej długości, w stronę kursora albo pod wpisanym kątem; łańcuch biegnie dalej od swojego końca |
| {{ui:Prostokąt}} | Szerokość, potem Wysokość | Prostokąt zostaje narysowany od pierwszego narożnika w stronę kursora; rozmiar, którego nie wpisano, pochodzi z położenia kursora |
| {{ui:Okrąg}} | Średnica | Okrąg zostaje narysowany o tej średnicy |
| {{ui:Łuk}} | Promień po środku, potem Kąt łuku (°) po początku | Początek leży w tej odległości od środka; potem łuk biegnie o ten kąt, w kierunku, w którym przesuwałeś kursor |

Każdy wpisany rozmiar staje się w tym samym kroku **wymiarem sterującym**, więc szkic ma już rozmiar: {{key:Mod+Z}} cofa kształt razem z jego wymiarami. Kliknięcie zamiast naciśnięcia {{key:Enter}} zachowuje to, co wpisano, a resztę pobiera z kliknięcia. {{key:Esc}} zamyka pole i wraca do kursora.

Aby to wyłączyć, jeśli chcesz rysować tylko kliknięciami, wybierz {{ui:Ustawienia}} › {{ui:PartCraft}} › **Wymiarowanie podczas rysowania**. Zobacz [Ustawienia PartCraft](topic:settings).

Przycisk {{ui:Więcej}} na końcu narzędzi szkicu zawiera spline z punktami kontrolnymi, Przedłuż, Odsuń, Lustro, Wielokąt, Rowek, wzory szkicu i Rzutuj krawędź: zobacz [Spline, przycinanie, odsunięcie i inne narzędzia szkicu](topic:sketch-tools).

### Przyciąganie

Przyciąganie dodaje więzy za Ciebie, dzięki czemu szkic pozostaje połączony przy przesuwaniu:

- Na **punkcie końcowym lub początku układu** pojawia się mały kwadrat. Nowy punkt zostaje zgodny z tym punktem.
- Na **linii, okręgu lub łuku** pojawia się mały krzyżyk. Nowy punkt zostaje umieszczony na tej krzywej.
- Linia odchylona od poziomu lub pionu o nie więcej niż 3 stopnie przyciąga się do niego i otrzymuje więz poziomy lub pionowy. Etykieta pokazuje „H” albo „V”.

Aby uniknąć przyciągania, przybliż widok, tak aby kliknąć dalej od punktu lub krzywej.

## Zaokrąglanie narożnika

1. Naciśnij {{key:F}} lub wybierz {{ui:Zaokrąglenie}}.
2. Kliknij punkt narożnika, w którym spotykają się dwie linie.
3. Otwiera się pole z proponowanym promieniem. Wpisz promień i naciśnij {{key:Enter}}.

Obie linie zostają przycięte i połączone stycznym łukiem z wymiarem promienia. Możesz zobaczyć komunikaty: „Zaokrąglenie wymaga narożnika, w którym spotykają się dokładnie dwie linie.” oraz „Ten promień jest za duży dla tych linii.”

:::tip
Zaokrąglenie szkicu zaokrągla narożnik profilu, więc wyciągnięcie dostaje zaokrąglone krawędzie pionowe. Aby zaokrąglić krawędzie samej bryły (na przykład górne krawędzie płyty), użyj zamiast tego elementu {{ui:Zaokrąglenie}} na części: zobacz [Zaokrąglanie, fazowanie i wydrążanie](topic:fillet-chamfer-shell). W szkicu {{ui:Zaokrąglenie}} z paska narzędzi jest narzędziem szkicu; na części jest elementem.
:::

## Geometria konstrukcyjna

Linie, okręgi i łuki konstrukcyjne są przerywane i szare. Prowadzą szkic, ale nie należą do profilu, który zostaje wyciągnięty lub obrócony.

1. Zaznacz linie, okręgi lub łuki.
2. Naciśnij {{key:Q}} lub wybierz {{ui:Konstrukcja}}. Naciśnij ponownie, aby przywrócić poprzedni stan.

## Zaznaczanie, przeciąganie i usuwanie

Naciśnij {{key:S}} (albo {{key:Esc}}, aż żadne narzędzie nie będzie aktywne), aby wybrać {{ui:Zaznacz}}.

- Kliknij punkt, linię, okrąg, łuk, symbol więzu lub wymiar, aby go zaznaczyć. {{key:Shift}}+kliknięcie dodaje do zaznaczenia lub odejmuje. W Windows i Linux to samo robi {{key:Ctrl}}+kliknięcie; na Macu ⌘+kliknięcie.
- Przeciągnij po pustym miejscu, aby narysować okno: zaznaczone zostanie wszystko, co znajduje się w nim w całości.
- Przeciągnij punkt lub linię, aby je przesunąć. Rozwiązywacz zachowuje każdy więz i wymiar podczas ruchu, więc przesuwa się tylko wolna geometria. Przeciągnij krawędź okręgu, aby zmienić jego promień.
- Przeciągnij liczbę wymiaru, aby przesunąć etykietę.
- Naciśnij {{key:Delete}} lub {{key:Backspace}} albo wybierz {{ui:Usuń}} w prawym panelu, aby usunąć zaznaczenie. Usunięcie geometrii usuwa też więzy na niej.

## Powiększanie i przesuwanie w szkicu

- Obracaj kółko myszy, aby powiększać w miejscu kursora.
- Przeciągnij środkowym lub prawym przyciskiem, aby przesunąć widok.
- {{ui:Dopasuj}} na pasku narzędzi lub w prawym panelu dopasowuje szkic do widoku. W szkicu klawisz {{key:F}} to narzędzie Zaokrąglenie, a nie Dopasuj.

## Zamknij szkic

Wybierz {{ui:Wyjdź}} na pasku narzędzi albo {{ui:Wyjdź ze szkicu}} w prawym panelu, albo naciskaj {{key:Esc}}, aż szkic się zamknie. Każde naciśnięcie {{key:Esc}} najpierw anuluje to, co trwa, potem wraca do narzędzia Zaznacz, potem czyści zaznaczenie, a kolejne zamyka szkic.

Szkic pozostaje zaznaczony, więc następne {{ui:Wyciągnij}} lub {{ui:Obróć}} użyje go.

## Co tworzy dobry profil

{{ui:Wyciągnij}} i {{ui:Obróć}} używają **każdej zamkniętej pętli** z linii, okręgów, łuków i spline'ów szkicu, które nie są konstrukcyjne. Pętle wewnątrz pętli stają się otworami.

- Każdy koniec musi spotykać dokładnie jeden inny koniec. Komunikat „Profil jest otwarty: koniec w (12.5, 40) nie jest z niczym połączony.” wskazuje miejsce.
- W jednym punkcie nie mogą spotykać się trzy końce: „Profil rozgałęzia się w (0, 20): w tym miejscu spotyka się więcej niż dwa końce.”
- Punkty i geometria konstrukcyjna są pomijane przez profil.

Dalej: [Pełne zdefiniowanie szkicu za pomocą więzów i wymiarów](topic:relations-dimensions).

## Szkic ze zdjęcia

**Elementy › Więcej › Szkic ze zdjęcia…** (albo grupa Szkic na wstążce drzewa elementów) obrysowuje zdjęcie płaskiej części na jednolitym tle — jej kontur i otwory — albo rysunek piórem, zamieniając go na szkic linii, łuków i okręgów. Podaj jeden wymiar (szerokość, wysokość lub najdłuższy bok), aby szkic miał właściwy rozmiar, sprawdź, co zostało wykryte w podglądzie, i wybierz **Utwórz szkic**; można też od razu wyciągnąć szkic w tym samym kroku cofnięcia. Obrysowanie odbywa się na tym komputerze. Promienie narożników wychodzą w granicach około 5 %, szczegóły o szerokości jednego lub dwóch pikseli są tracone, a zdjęcie wykonane pod skosem albo z cieniami na części nie jest prostowane: fotografuj część prostopadle, przy równomiernym świetle.
