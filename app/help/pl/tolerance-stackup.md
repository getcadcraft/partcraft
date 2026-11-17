---
title: Łańcuchy tolerancji
summary: Wybierz łańcuch ścian przez części złożenia i zobacz, jak bardzo może się różnić szczelina na jego końcu, w najgorszym przypadku i w RSS, z wymiarami mającymi największe znaczenie na czele.
keywords: łańcuch tolerancji, stack-up, analiza tolerancji, łańcuch tolerancji, łańcuch wymiarów, pętla, szczelina, luz, najgorszy przypadek, rss, pierwiastek sumy kwadratów, tolerowanie statystyczne, składniki, wrażliwość, gd&t, tolerancja ogólna, iso 2768
from: cbdb3159
---

Łańcuch tolerancji (**stack-up**) dodaje wymiary wzdłuż łańcucha przez kilka części, by zobaczyć, jak bardzo wynik, zwykle szczelina, może się różnić, gdy każda część jest wykonana w dowolnym miejscu swoich tolerancji.

## Wybierz łańcuch

1. Otwórz złożenie i wybierz {{ui:Łańcuch tolerancji}} w grupie Złożenie. Nad widokiem otworzy się karta.
2. Wybierz, wzdłuż czego łańcuch jest mierzony: X, Y lub Z złożenia, albo {{ui:Normalna pierwszej ściany}}.
3. Naciśnij {{ui:Wskaż łańcuch}} i kliknij ściany, przez które przebiega łańcuch, **w kolejności**: zacznij od jednej strony szczeliny, przejdź przez części i zakończ po drugiej stronie szczeliny.
4. Naciśnij {{ui:Gotowe}} lub {{key:Enter}}. {{key:Backspace}} cofa ostatnie kliknięcie; {{key:Esc}} anuluje.

Dwa kliknięcia na tej samej części tworzą wymiar tej części (jej odległość wzdłuż łańcucha). Kliknięcie na innej części tworzy **interfejs** między nimi, tam gdzie części się stykają; nie ma on tolerancji, dopóki jej ręcznie nie wpiszesz. Ogniwa dodają lub odejmują zgodnie z kierunkiem łańcucha i zamykają pętlę: nominalna szczelina to ta, którą pokazuje model.

Możesz też ręcznie {{ui:Dodaj ogniwo}} i wpisać jego wartość nominalną, tolerancję oraz to, czy dodaje (+), czy odejmuje (−).

## Nadaj każdemu ogniwu tolerancję

Każde ogniwo ma odchyłkę **górną** i **dolną** (na przykład +0.1 i −0.05). **Tolerancja z** wypełnia je z części:

- **Tolerancja ogólna**: pole Tolerancja w tabliczce rysunkowej części (zob. [Rysunek do PDF](topic:drawing-pdf)), gdy odczytuje ±0.1, +0.2/-0.1 albo ISO 2768-f, -m, -c lub -v (tolerancje liniowe ISO 2768-1, zależnie od rozmiaru ogniwa). Tolerancja ogólna części jest używana od razu, gdy łańcuch jest wybierany.
- **GD&T**: dowolna ramka kontroli elementu na rysunku części. Strefy pozycji, profilu i bicia dają ± połowę tolerancji. Tolerancja kierunku lub kształtu zwykle mieści się już w tolerancji wymiaru: dodaj ją tylko tam, gdzie łańcuch styka się z kontrolowaną powierzchnią. Przy Ⓜ lub Ⓛ strefa jest brana w podanym rozmiarze; tolerancja bonusowa się nie liczy.
- **Wpisana**: dowolne liczby, które wpiszesz.

## Odczytaj wyniki

- **Szczelina, nominalna** oraz, gdy tolerancje są nierówne, **Szczelina, średnia**: +0.2/−0 i +0/−0.1 przesuwają środek zakresu.
- **Najgorszy przypadek**: każda tolerancja na swojej granicy jednocześnie. Szczelina nigdy nie wyjdzie poza ten zakres.
- **RSS** (pierwiastek sumy kwadratów): każda tolerancja traktowana jako trzy odchylenia standardowe rozkładu normalnego, dodana jako pierwiastek z sumy ich kwadratów. Większość złożeń mieści się dobrze w najgorszym przypadku; to zwykła ocena dla części produkowanych seryjnie.
- Podaj **Szczelina co najmniej** i **Szczelina co najwyżej**, aby zobaczyć, czy najgorszy przypadek zawsze mieści się w zakresie, oraz ile na milion złożeń RSS przewiduje poza nim.
- Kolumna **#** układa ogniwa według ich **udziału** w RSS: zaciśnij pierwsze, aby uzyskać największą różnicę.

{{ui:Zapisz CSV}} zapisuje ogniwa, ich udziały i wyniki. Łańcuchy tolerancji są zapisane w pliku złożenia, a każda zmiana to jeden krok dla {{key:Mod+Z}}.

:::note
Łańcuch tolerancji działa w jednym kierunku. Nie uwzględnia kątów ani zwrotów wzdłuż łańcucha i nie odczytuje tolerancji wymiarów z szkiców: podaj je jako wpisane tolerancje albo przez tabliczkę rysunkową.
:::
