---
title: Sprawdź pochylenie pod kątem formowania i odlewania
summary: Pokoloruj część według kąta pochylenia względem kierunku wyciągania formy, zobacz, które ściany się zwalniają, które potrzebują więcej pochylenia, a które zwalniają się z drugiej połowy formy, wraz z udziałem każdej z nich w powierzchni.
keywords: analiza pochylenia, pochylenie, zwężenie, forma, formowanie, odlewanie ciśnieniowe, formowanie wtryskowe, kierunek wyciągania, linia podziału, podcięcie, zwolnienie, sprawdź pochylenie
from: 6a106f83
---

Części wykonane w formie, matrycy albo w odlewie piaskowym potrzebują **pochylenia** (draft): ścian lekko nachylonych, aby część wysunęła się. **Analiza pochylenia** koloruje każdą ścianę według tego, jak bardzo odchyla się od kierunku, w którym forma się otwiera (**kierunku wyciągania**).

## Włącz

1. W obszarze roboczym Design otwórz {{ui:Widoki}} i wybierz {{ui:Analiza pochylenia}}.
2. Ustaw **Kierunek wyciągania**: kierunek otwierania formy, wzdłuż X, Y lub Z w obu zwrotach, albo **Prostopadle do wskazanej ściany**: naciśnij {{ui:Wskaż ścianę}} i kliknij płaską ścianę części.
3. Ustaw **Minimalne pochylenie** w stopniach: najmniejsze odchylenie, którego wymaga Twój proces (często 1° do 3°).

Część jest pokolorowana:

| Kolor | Znaczy |
|---|---|
| Zielony: **Dodatnie pochylenie** | Odchylona w stronę kierunku wyciągania co najmniej o minimum: zwalnia się z tej połowy formy |
| Ochrowy: **Wymaga pochylenia** | W granicach minimum w obu kierunkach, na przykład pionowa ściana: dodaj tu pochylenie |
| Czerwony: **Ujemne pochylenie** | Odchylona od kierunku wyciągania co najmniej o minimum: zwalnia się z drugiej połowy formy, albo jest podcięciem, jeśli część ma wyjść z jednej połowy |

Udział każdej klasy w powierzchni części jest pokazany obok niej. **Odwróć kierunek wyciągania** patrzy z drugiej połowy formy: zielony i czerwony zamieniają się miejscami.

Ściany zakrzywione ocenia się punkt po punkcie, więc walec leżący w poprzek kierunku wyciągania pokazuje pas wymagający pochylenia wzdłuż swoich boków.

Kolory podążają za częścią podczas jej zmian. {{key:Esc}} lub {{ui:Zamknij}} wyłącza analizę; w części nic nie jest zapisywane.

:::tip
Aby dodać pochylenie, użyj elementu {{ui:Pochylenie}} na ochrowych ścianach (zob. [Przeciągnij, loft i pochylenie](topic:sweep-loft-draft)), a potem sprawdź ponownie.
:::
