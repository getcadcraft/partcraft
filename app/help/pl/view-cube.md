---
title: Kostka widoku
summary: Kliknij ścianę, krawędź lub narożnik kostki w rogu widoku, aby patrzeć stamtąd, przeciągnij ją, aby obrócić widok, obróć pierścień kompasu, przejdź wokół widoku na wprost i wróć do początku.
keywords: kostka widoku, viewcube, kostka, kompas, północ, widok początkowy, widoki standardowe, góra, przód, prawo, izometria, narożnik, krawędź, orbita, obrót widoku, ikona osi, wskaźnik narożnika, nawigacja
from: afc33dc7
---

Kostka widoku znajduje się w prawym górnym rogu widoku 3D (nie podczas szkicowania ani na arkuszu rysunku). Obraca się razem z widokiem, więc zawsze pokazuje, w którą stronę patrzysz: {{ui:Góra}} to strona +Y części (płaszczyzna Góra), {{ui:Przód}} strona +Z (płaszczyzna Przód jest zwrócona do ciebie, gdy na nią patrzysz), {{ui:Prawo}} strona +X. Pozostaje półprzezroczysta, dopóki na nią nie wskażesz.

## Patrz z boku, krawędzi lub narożnika

1. Wskaż kostkę. Część pod wskaźnikiem się podświetla: środek ściany, krawędź (podświetla się na obu ścianach, które ją dzielą) albo narożnik (na wszystkich trzech ścianach).
2. Kliknij ją. Widok obraca się, by patrzeć stamtąd, zachowując ten sam środek i powiększenie.

Jest 26 miejsc do kliknięcia: 6 ścian ({{ui:Góra}}, {{ui:Dół}}, {{ui:Przód}}, {{ui:Wstecz}}, {{ui:Lewo}}, {{ui:Prawo}}), 12 krawędzi i 8 narożników. Narożnik daje klasyczny widok z trzech czwartych; krawędź wygląda jak połowa drogi między dwiema ścianami.

Kliknięcie {{ui:Przód}}, {{ui:Góra}} lub {{ui:Prawo}} daje te same widoki co {{ui:Widoki}} na pasku narzędzi, bez dopasowania powiększenia.

## Orbitowanie przez przeciąganie kostki

Przeciągnij kostkę, aby obrócić widok, tak samo jak orbitowanie w samym widoku. Przeciągnięcie nigdy nie jest traktowane jako kliknięcie, więc możesz chwycić kostkę w dowolnym miejscu.

## Pierścień kompasu

Pierścień pod kostką ma oznaczenia N, E, S i W.

- **Przeciągnij pierścień**, aby obrócić model wokół osi pionowej, jak na obrotnicy. Pierścień podąża za wskaźnikiem.
- **Kliknij literę**, aby patrzeć z tej strony, zachowując, jak stromo patrzysz w dół. W widoku dokładnie z góry litera, którą klikniesz, trafia na dół ekranu.

## Widoki na wprost: strzałki

Gdy patrzysz prosto na ścianę, wokół kostki pojawiają się małe strzałki:

- Cztery **trójkąty** sprowadzają ścianę z danej strony na przód: trójkąt nad kostką pokazuje ścianę, która była na górze, i tak dalej.
- Dwie **zakrzywione strzałki** w prawym górnym rogu obracają obraz o ćwierć obrotu zgodnie z ruchem wskazówek zegara lub przeciwnie, bez zmiany ściany, na którą patrzysz. Użyj ich, aby obrócić rzut tak, by długa ściana biegła w poprzek ekranu.

## Początek

Przycisk z domkiem w lewym górnym rogu kostki wraca do widoku z trzech czwartych i dopasowuje część do ekranu. {{key:Home}} robi to samo, gdy kostka ma fokus klawiatury.

## Z klawiaturą

{{key:Tab}} przechodzi do kostki, a potem:

| Klawisz | Działanie |
|---|---|
| {{key:left}} / {{key:right}} | wybiera stronę, krawędź lub narożnik wokół kostki, w krokach po ósmej części obrotu (czytniki ekranu mówią, który) |
| {{key:up}} / {{key:down}} | wybiera wyższy lub niższy, aż do {{ui:Góra}} albo w dół do {{ui:Dół}} |
| {{key:Enter}} lub {{key:Space}} | patrz z wybranego |
| {{key:Shift+left}} / {{key:Shift+right}} | obraca widok o ćwierć obrotu wokół osi pionowej |
| {{key:Home}} | widok początkowy |
| {{key:Esc}} | opuść kostkę |

Klawisze naciśnięte na kostce pozostają przy kostce: nie uruchamiają narzędzi PartCraft.

## Ikona osi zamiast tego lub nic

Otwórz {{ui:Ustawienia}} ({{key:Mod+,}}), kartę {{ui:PartCraft}}, i ustaw **Wskaźnik narożnika** na {{ui:Kostka widoku}} (na początku), {{ui:Ikona osi}} (mały znacznik X, Y, Z w lewym dolnym rogu: X czerwony, Y zielony, Z niebieski) albo {{ui:Brak}}. Ta przeglądarka zapamiętuje wybór. Zob. [Ustawienia PartCraft](topic:settings#corner-indicator).

:::note
Kostka pokazuje część tak, jak buduje ją PartCraft: Y w górę, więc {{ui:Góra}} kostki to płaszczyzna Góra. Oznaczenia kompasu służą tylko do obracania; część nie ma północy.
:::
