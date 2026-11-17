---
title: Solid FEM: sprawdzenie naprężeń jednej części
summary: Włącz dodatek Solid FEM, utwórz siatkę części, wskaż nieruchome ściany i obciążenie w widoku 3D, rozwiąż zadanie i odczytaj przemieszczenie oraz naprężenie zastępcze von Misesa na modelu.
keywords: solid fem, metoda elementów skończonych, fea, naprężenie, von mises, przemieszczenie, nieruchoma ściana, obciążenie, ciśnienie, grawitacja, częstotliwość własna, postać drgań, siatka, dodatek
from: 8b7e6ba2
---

## Co zrobisz

Sprawdź jedną bryłę pod obciążeniem: gdzie się przesuwa i gdzie naprężenie jest największe. Badanie jest liniowe i sprężyste, więc jest pomocą w sprawdzaniu; wyniki przegląda Twój inżynier.

## Kroki

1. Wybierz {{ui:Ustawienia}} › {{ui:Dodatki}} i włącz {{ui:Solid FEM}} (jest wyłączony, dopóki tego nie zrobisz). Otwórz kartę {{ui:Solid FEM}} w prawym panelu.
2. W obszarze {{ui:Materiał}} wybierz jeden, albo {{ui:Własny}} i wpisz współczynnik Poissona, gęstość i granicę plastyczności.
3. Naciśnij {{ui:Dodaj stałe ściany}}, kliknij ściany, które są przytrzymane w widoku 3D, potem naciśnij {{ui:Zakończ wskazywanie}}.
4. Dodaj obciążenie przyciskami {{ui:Dodaj siłę}}, {{ui:Dodaj ciśnienie}} lub {{ui:Dodaj grawitację}} i wskaż jego ściany w ten sam sposób.
5. Naciśnij {{ui:Utwórz siatkę części}}, potem {{ui:Rozwiąż}}. Jeśli chcesz częstotliwości, najpierw wybierz {{ui:Częstotliwości własne}} w obszarze {{ui:Badanie}}.
6. Odczytaj {{ui:Wyniki}} i {{ui:Ostrzeżenia}}, potem naciśnij {{ui:Pokaż na modelu}}, aby narysować naprężenie von Misesa, przemieszczenie lub postać drgań; {{ui:Usuń wykres}} je usuwa.

## Uwagi

- Strona rozwiązuje zadanie do określonej liczby elementów; wiersz stanu informuje, kiedy rozmiar elementu jest zbyt drobny.
- Naprężenie na stałych ścianach, punktach obciążenia i ostrych narożnikach rośnie wraz ze zagęszczaniem siatki. Zagęść i porównaj, zanim oprzesz się na wartości szczytowej.
- Każda zmiana to jeden krok cofnięcia, a ustawienia są zapisywane w pliku części.
- Badania uplastycznienia i kontaktu: zobacz [Sprawdzanie naprężeń i ugięcia](topic:simulation).
