---
title: Ilustracje techniczne: rysunki liniowe, obrazy i arkusze
summary: Wyeksportuj dowolny widok jako wektorowy rysunek liniowy (SVG lub PDF) z trzema grubościami linii, liniami niewidocznymi przerywanymi lub pominiętymi, kreskowanymi powierzchniami przekroju i opcjonalnymi wypełnieniami, albo jako PNG; umieść kilka widoków na jednym arkuszu.
keywords: illustrate, rysunek liniowy, ilustracja techniczna, svg, pdf, png, linie niewidoczne, sylwetka, kreskowanie, arkusz, eksport
from: 0e9bea63
---

{{ui:Eksport}} w grupie {{ui:Wyjście}} otwiera okno eksportu:

- {{ui:Co}}: scena w obecnym stanie, jeden widok albo wszystkie widoki.
- {{ui:Jako}}: **PDF** lub **SVG** (wektorowy rysunek liniowy; oba zapisywane z tego samego rysunku), **PNG rysunku liniowego** albo **obraz PNG widoku 3D** (do 4096 pikseli szerokości), oraz [interaktywny plik 3D](topic:illustrate-interactive).
- {{ui:Strony}}: jeden widok na stronę albo wszystkie widoki na jednym arkuszu, z ich nazwą pod spodem. {{ui:Papier}}: A4, A3, Letter lub Tabloid.
- {{ui:Linie niewidoczne}}: przerywane albo pominięte. {{ui:Wypełnienia}}: jak wygląda widok, brak, płaskie kolory lub cieniowanie. {{ui:Rysuj też miękkie krawędzie}} dodaje linie szczegółów.

Rysunek liniowy ma trzy grubości linii: kontury (sylwetki, krawędzie otwarte i kontury przecięć), ostre krawędzie oraz linie szczegółów. Powierzchnie przecięcia przekroju lub wycięcia w kształcie pudełka są kreskowane. Widoki rozstrzelone dostają linie punktowo-kreskowe od miejsca, w którym znajduje się każda część; rysowane są też dymki, adnotacje, lista części i lupa.

Rysunek liniowy jest wyliczany z kształtów części metodą siatki (mesh) — tą samą, której arkusz rysunkowy PartCraft używa bez dokładnego jądra — więc zakrzywione powierzchnie są rysowane fasetami, tak jak model je przechowuje.

## Jeszcze nie zbudowano

- Obrazy o jakości śledzenia ścieżki (renderer ModelCraft) nie są tu oferowane; obrazy PNG mają wygląd samego widoku 3D.
