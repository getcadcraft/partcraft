---
title: Więzy szkicu i wymiary
summary: Każdy więz i wymiar szkicu PartCraft, co zaznaczyć dla każdego z nich, jego symbol i sposób zachowania podczas rozwiązywania.
keywords: więzy, ograniczenia, zgodność, poziomo, pionowo, równoległość, prostopadłość, styczna, równość, współśrodkowość, punkt środkowy, stała, odległość, odległość pozioma, odległość pionowa, promień, średnica, kąt, symbole, glify
from: 9831e7be
---

Więzy określają, jak geometria jest ułożona względem innej geometrii. Wymiary określają rozmiary. Aby dodać więz, zaznacz elementy narzędziem Zaznacz ({{key:S}}) i wybierz jego przycisk w prawym panelu; aby dodać wymiar, użyj narzędzia {{ui:Wymiar}} ({{key:D}}) albo przycisków wymiarów w prawym panelu. Jak z nich korzystać: [Pełne zdefiniowanie szkicu](topic:relations-dimensions).

„Krzywa” poniżej oznacza okrąg lub łuk. Początek układu liczy się jako punkt.

## Więzy

| Przycisk | Symbol | Zaznacz | Efekt |
|---|---|---|---|
| {{ui:• Zgodność}} | • (pokazywany tylko przy zaznaczeniu lub w problemie) | Dwa punkty | Punkty się spotykają |
| {{ui:• Zgodność}} | • | Punkt i linia | Punkt leży na linii (lub jej przedłużeniu) |
| {{ui:• Zgodność}} | • | Punkt i krzywa | Punkt leży na okręgu lub łuku |
| {{ui:H Poziomo}} | H | Linia albo dwa punkty | Linia jest pozioma, albo dwa punkty mają tę samą wysokość |
| {{ui:V Pionowo}} | V | Linia albo dwa punkty | Linia jest pionowa, albo punkty leżą jeden nad drugim |
| {{ui:∥ Równoległość}} | ∥ | Dwie linie | Linie biegną w tym samym kierunku |
| {{ui:⊥ Prostopadłość}} | ⊥ | Dwie linie | Linie spotykają się pod kątem prostym |
| {{ui:T Styczna}} | T | Linia i krzywa | Linia dotyka krzywej bez jej przecinania |
| {{ui:T Styczna}} | T | Dwie krzywe | Dotykają się, z zewnątrz lub od wewnątrz, zgodnie z tym, jak zostały narysowane |
| {{ui:T Styczna}} | T | Spline i linia, łuk lub spline, który spotyka się z jednym z jego końców | Spline wychodzi z tego końca w kierunku drugiej krzywej |
| {{ui:= Równość}} | = | Dwie linie | Taka sama długość |
| {{ui:= Równość}} | = | Dwie krzywe | Taki sam promień |
| {{ui:◎ Współśrodkowość}} | ◎ | Dwie krzywe | Ten sam środek |
| {{ui:◎ Współśrodkowość}} | ◎ | Punkt i krzywa | Punkt leży w środku krzywej |
| {{ui:M Punkt środkowy}} | M | Punkt i linia | Punkt leży w środku linii |
| {{ui:↔ Symetria}} | ↔ | Dwa punkty i linia | Punkty są swoimi odbiciami lustrzanymi względem linii (Lustro dodaje te więzy) |
| {{ui:⚓ Stała}} | ⚓ | Punkt, linia, krzywa lub spline | Trzyma go dokładnie tam, gdzie jest teraz (spline: jego punkty) |

Linie tutaj obejmują linie osiowe. Rysowanie dodaje część więzów za Ciebie: przyciągnięcie do punktu tworzy zgodność, przyciągnięcie do krzywej umieszcza na niej punkt, prawie poziome lub pionowe linie dostają H lub V, a prostokąt ma cztery połączone narożniki, dwa H i dwa V.

**{{ui:⚓ Stała}}** jest szybkim sposobem na zatrzymanie ruchu, ale wtedy element nie może podążać za zmianą wymiaru gdzie indziej. Lepiej używać wymiarów względem początku układu.

## Wymiary

| Przycisk | Zaznacz | Mierzy | Wyświetlane jako |
|---|---|---|---|
| {{ui:Odległość}} | Linia | Jej długość | Odległość 40 |
| {{ui:Odległość}} | Dwa punkty | Prostą odległość między nimi | Odległość 40 |
| {{ui:Odległość}} | Punkt i linia | Odległość od punktu do linii, prostopadle do niej | Odległość 40 |
| {{ui:Odległość}} | Dwie równoległe linie | Szczelinę między nimi | Odległość 40 |
| {{ui:Odległość pozioma}} | Dwa punkty albo linia | Tylko odległość w poziomie (lewo–prawo) | Odległość pozioma 40 |
| {{ui:Odległość pionowa}} | Dwa punkty albo linia | Tylko odległość w pionie (góra–dół) | Odległość pionowa 40 |
| {{ui:Promień}} | Okrąg lub łuk | Jego promień | Promień R10 |
| {{ui:Średnica}} | Okrąg lub łuk | Jego średnicę | Średnica ⌀20 |
| {{ui:Kąt}} | Dwie linie, które nie są równoległe | Kąt między nimi, od 0 do 180 stopni | Kąt 30° |

Przy narzędziu {{ui:Wymiar}} PartCraft wybiera rodzaj wymiaru według tego, w co klikniesz i gdzie umieścisz liczbę:

| Klikasz | Otrzymujesz |
|---|---|
| Jedną linię | Jej długość; dla linii ukośnej poziomą, jeśli liczba jest nad lub pod nią, pionową, jeśli z boku |
| Jeden okrąg | Średnicę |
| Jeden łuk | Promień |
| Dwa punkty | Odległość; poziomą lub pionową, jak dla linii ukośnej |
| Punkt i linię | Odległość od punktu do linii |
| Dwie linie | Kąt, a jeśli są równoległe — odległość |
| Punkt i okrąg | Nic: „Tych elementów nie można wymiarować razem.” Zamiast tego wymiaruj do punktu środkowego okręgu |

**{{ui:Odsuń}}** (pokazywane jako odległość) powstaje narzędziem {{ui:Odsuń}}: utrzymuje skopiowaną linię równolegle w tej odległości albo skopiowany łuk lub okrąg współśrodkowo, z promieniem większym lub mniejszym o tę wartość. Pozostałe części tego samego odsunięcia mają więz **O** i podążają za jednym wymiarem odsunięcia. Zobacz [Spline, przycinanie, odsunięcie i inne narzędzia szkicu](topic:sketch-tools).

Wartości wymiarów są w milimetrach (lub stopniach) i nigdy nie są ujemne. Promień i średnica muszą być większe od zera. Wartość 0 jest dozwolona dla odległości: dwa punkty w odległości 0 od siebie są zgodne.

## Jak działa rozwiązywanie

- **Najmniejszy ruch.** Gdy wartość się zmienia, rozwiązywacz przesuwa geometrię tak mało, jak to możliwe. Linia, której długość się zmienia, rośnie równo na obu końcach, jeśli żaden z nich nie jest zablokowany.
- **Bez przerzucania.** Odległości od punktu do linii, odległości poziome i pionowe, kąty oraz styczność pamiętają, po której stronie zostały utworzone. Zmiana wartości nigdy nie przerzuca geometrii na drugą stronę.
- **Konflikty nie ruszają niczego.** Jeśli więzy sobie przeczą, szkic zostaje dokładnie taki, jaki był, a sprzeczne więzy zmieniają kolor na czerwony.
- **Nadmiarowe więzy** (wynikające z innych) są wskazywane w pasku stanu („jest już wynikający z innych więzów. Usuń go.”), a element nadal się buduje, z ostrzeżeniem.
- **Połączenia styczne.** Tam, gdzie łuk zaokrąglenia spotyka swoje linie we wspólnym punkcie końcowym, styczność jest rozwiązywana w postaci, która pozostaje tam dobrze określona, dzięki czemu zaokrąglenia szkicu nie są odczytywane jako nadmiernie określone.

## Jeszcze niedostępne

Więzy współliniowości, współpromieniowości i przebicia; punkt na spline; wymiary sterowane (referencyjne); wymiary współrzędnych i długości łuku; równania między wymiarami. Dla linii współliniowych użyj {{ui:∥ Równoległość}} i odległości 0.
