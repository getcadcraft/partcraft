---
title: Lista części, widoki rozstrzelone i przesuwanie części
summary: Nadaj częściom złożenia numer, opis i materiał, odczytaj i pobierz zestawienie materiałów, twórz widoki rozstrzelone z krokami lub automatycznie, przesuwaj ręcznie części, które nie są połączone, ustawiaj limity połączeń i eksportuj całe złożenie jako STL, 3MF lub zestawienie materiałów.
keywords: bom, zestawienie materiałów, lista części, numer części, materiał, gęstość, csv, widok rozstrzelony, rozstrzel, zwiń, linie śladu, przesuń część, przeciągnij, gizmo, przesunięcie, obrót, limity połączenia, eksport złożenia, krok złożenia, rysunek złożenia, wyniesienia
from: ebc9f6f3
---

Te narzędzia znajdują się w prawym panelu złożenia (zobacz [Zbuduj złożenie](topic:build-assembly)).

## Właściwości części

Zaznacz część na liście po lewej. W sekcji **Właściwości części** ustaw:

- **Numer części** (do 40 znaków) i **Opis** (do 200).
- **Materiał**: popularny materiał z jego gęstością albo **Własna gęstość…**, aby wpisać gęstość w g/cm³. Panel pokazuje wtedy masę części.

Właściwości należą do części, więc każda jej kopia je współdzieli. Są zapisywane w pliku złożenia.

## Zestawienie materiałów

Gdy nic nie jest zaznaczone ({{key:Esc}}), panel pokazuje **Zestawienie materiałów**: jeden wiersz na część, z numerem pozycji, ilością (ile jest kopii), numerem części, nazwą, materiałem i masą. Numery pozycji idą w kolejności, w jakiej części pojawiają się po raz pierwszy na liście. Masy liczone są z objętości każdej części (bryły złożonej z płaskich ścian, którą buduje jądro siatkowe, jest na zaokrąglonych częściach nieco zaniżona) i z jej materiału. Część bez materiału nie ma masy, a wtedy nie ma sumy.

{{ui:Pobierz CSV}} zapisuje listę jako plik CSV (także **Eksport › Zestawienie materiałów (CSV)**). Otwiera się w każdym arkuszu kalkulacyjnym. Tekst zaczynający się od = lub + dostaje na początku apostrof, aby arkusz nie uruchomił go jako formuły.

## Widoki rozstrzelone

Widok rozstrzelony rozsuwa części do ilustracji. Nigdy nie zmienia połączeń ani rzeczywistego położenia części: zapis, sprawdzanie kolizji i eksport używają rzeczywistych położeń.

1. Gdy nic nie jest zaznaczone, wybierz {{ui:Nowy widok}} w sekcji **Widoki rozstrzelone**.
2. W sekcji **Dodaj krok** zaznacz części, które krok przesuwa, wybierz **Kierunek** (+X … −Z, normalną klikniętej ściany albo **Przeciągnij strzałkę w widoku**) i **Odległość**, a następnie {{ui:Dodaj krok}}. Przy **Przeciągnij** przeciągnij strzałkę i puść: krok przyjmuje kierunek i odległość, o które przeciągnięto.
3. Dodawaj kolejne kroki. Odtwarzają się jeden po drugim.
4. Przeciągnij suwak między **Złożony** a **Rozstrzelony**, aby animować widok. Przerywane linie śladu biegną od pozycji spoczynku każdej części do jej obecnego położenia.

{{ui:Auto (promieniowo)}} przesuwa każdą część, poza uziemioną, od środka złożenia. {{ui:Auto (połączenia)}} przesuwa każdą połączoną część (wraz z tym, co jest połączone pod nią) wzdłuż normalnej ściany jej połączenia. Możesz zachować kilka nazwanych widoków. Wybierz jeden w **Widok** albo **Złożony**, aby przywrócić części. Widoki są zapisywane w pliku złożenia.

## Przesuwanie części ręcznie

Ręcznie przesuwa się tylko część bez połączenia z częścią uziemioną (część uziemiona jest nieruchoma, a połączenia ustawiają resztę). Zaznacz ją i w sekcji **Przesuń ręcznie**:

- Wpisz **ΔX, ΔY, ΔZ** i wybierz {{ui:Przesunięcie}}, albo wybierz oś, **Kąt** i {{ui:Obróć}} (wokół środka części).
- {{ui:Przeciągnij, aby przesunąć}} pokazuje na części strzałki: przeciągnij strzałkę, aby przesunąć wzdłuż tej osi, albo kwadrat, aby przesunąć w płaszczyźnie. {{ui:Przeciągnij, aby obrócić}} pokazuje pierścienie do obracania. Każde przeciągnięcie to jeden krok cofnięcia. {{key:Esc}} ukrywa strzałki.

## Limity połączeń

Zaznacz połączenie, które się porusza, a w sekcji **Limity** zaznacz **Utrzymuj … między limitami** dla dowolnej jego wartości, po czym ustaw **Minimum** i **Maksimum**. Każda wartość jest utrzymywana w swoich limitach, jej suwak obejmuje tylko ten zakres, a {{ui:Sprawdź ruch pod kątem kolizji}} przesuwa się tylko między nimi. Połączenie cylindryczne może ograniczać swój kąt, swoje odsunięcie albo oba. Zmiana typu połączenia usuwa limity wartości, których nowy typ nie ma.

## Eksport całego złożenia

W złożeniu menu **Eksport** zapisuje całe złożenie, z każdą częścią w miejscu, w którym się znajduje:

- **STEP AP242 / AP214** i **Rysunek (PDF)** nie są jeszcze zbudowane w tej wersji: wymagają dokładnego jądra, dlatego są wyszarzone. Zamiast tego wyeksportuj STEP (dokładną bryłę) każdej części, z poziomu tej części.
- **STL**: jedna siatka wszystkich części. **3MF**: każda część raz, ustawiona osobno dla każdej kopii.
- **Zestawienie materiałów (CSV)**.

## Ograniczenia

- Rysunek złożenia i STEP złożenia nie są jeszcze zbudowane w tej wersji (wymagają dokładnego jądra). Widoki rozstrzelone służą do ilustracji na ekranie.
