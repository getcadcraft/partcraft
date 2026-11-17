---
title: Badanie magnesu na podstawie szkicu
summary: Zamień zamknięte profile szkiców w płaski model magnetyczny (żelazo, magnesy, cewki), zobacz pole i odczytaj siłę oraz moment działające na bryłę.
keywords: magnes, magnetyczny, magnetostatyczny, pole, gęstość strumienia, siła, moment, cewka, jarzmo, żelazo, krzywa B–H, magnes trwały, siłownik, silnik, solenoid, maxwell
from: 604efc3b
---

Użyj {{ui:Więcej}} na pasku narzędzi {{ui:Elementy}} › {{ui:Badanie magnesu na podstawie szkiców…}} w części, która ma szkice. Każdy zamknięty kształt w zaznaczonych szkicach to jeden obszar płaskiego modelu; badanie wyznacza pole magnetyczne B, siłę i moment na wybranej bryle.

## Kroki

1. Narysuj bryły jako zamknięte kształty w szkicach: żelazne jarzmo, magnes, cewkę. Bryły, które się stykają, mają wspólną krawędź, więc umieść je w różnych szkicach; bryły oddzielne albo położone jedna w drugiej (okno w jarzmie) mogą być w jednym szkicu. Szkice trzymaj na tej samej płaszczyźnie.
2. Otwórz badanie i zaznacz szkice do użycia. Każdy zamknięty profil dostaje numerowany wiersz. Określ, czym jest: {{ui:Powietrze}}, {{ui:Żelazo}} (przenikalność albo krzywą B–H wpisaną jako pary B w teslach i H w A/m), {{ui:Magnes trwały}} (Br w teslach, jego kierunek jako kąt od osi x szkicu i jego przenikalność odwracalna) albo {{ui:Cewka}} (całkowity prąd przez jej profil, zwoje razy ampery; znak pokazuje, w którą stronę płynie).
3. Zaznacz {{ui:Siła i moment na tej bryle}} dla brył, na których chcesz je mieć. Podaj głębokość części prostopadle do szkicu.
4. Wybierz siatkę i powietrze wokół modelu, a potem {{ui:Uruchom}}.

## Co powinieneś zobaczyć

- Gęstość strumienia |B| nad modelem: od ciemnoniebieskiego (niska) do czerwonego (wysoka), z ponumerowanymi profilami.
- Najsilniejsze pole i miejsce, w którym się znajduje, liczbę trójkątów oraz – dla każdej zaznaczonej bryły – siłę wzdłuż x i y oraz moment względem jej środka, dla podanej głębokości.
- {{ui:Zapisz wyniki (CSV)}} zapisuje liczby.

## Dobrze wiedzieć

- To płaski model stacjonarny: wszystko odnosi się do metra głębokości, bez prądów wirowych i histerezy, a magnes to prosta linia odwracalna (nie może zostać rozmagnesowany).
- Model znajduje się w pudle powietrza, którego brzeg jest ścianą. Porównaj dwa rozmiary pudła powietrza oraz siatki {{ui:Normalna}} i {{ui:Drobna}}: siła wyznaczona z pola wokół bryły jest tak dobra, jak siatka w tym miejscu.
- Żelazo z samą przenikalnością nigdy się nie nasyca. Gdy pole przekroczy 2 T, badanie zgłasza ⚠ na liście {{ui:Problemy}}: podaj żelazu krzywą B–H. Liczby w nowym wierszu są przykładowe (żelazo μr 2000, magnes 1.2 T), a nie kartą danych materiału.
- Bryła potrzebuje wokół siebie miejsca, aby przenieść siłę: jeśli inna bryła jest za blisko, badanie to zgłasza.
- Pomoc projektowa, a nie zatwierdzenie inżynierskie.

## Dalej

- [Pole magnetyczne w 2-D (samouczek)](topic:magnetic-fields-2d)
