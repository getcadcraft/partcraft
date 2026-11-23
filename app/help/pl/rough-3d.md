---
title: Obróbka zgrubna 3D i obróbka resztek
summary: Wybieraj materiał warstwami wokół całego modelu płaskim, zaokrąglonym albo kulistym frezem palcowym, zostawiając naddatek na wykończenie, a potem pozwól mniejszemu narzędziu skrawać tylko tam, gdzie pierwsze zostawiło materiał. Co gwarantują ścieżki, a czego nie.
keywords: zgrubna 3D, zgrubne, obróbka zgrubna, obróbka resztek, pozostały materiał, naddatek, głębokość przejścia, poziomy, poziom z, waterline, rampa, zanurzenie, wgryzienie, mniejsze narzędzie
from: 29ddc266
---

Dwie operacje w Wytwarzaniu, pod {{ui:Więcej}} na jego pasku narzędzi, wybierają materiał z **całego modelu** w 3D, z narzędziem utrzymywanym pionowo (albo wzdłuż [kierunku narzędzia](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) tej operacji). Nie wymagają wskazywania.

## Zgrubne 3D

{{ui:Zgrubne 3D}} schodzi od góry półfabrykatu po jednej **głębokości przejścia** naraz. Na każdym poziomie czyści wszystko, do czego narzędzie może dosięgnąć bez dotykania modelu: proste rzędy w odstępach **kroku bocznego** (ułamek średnicy narzędzia), a potem raz dookoła krawędzi tego, do czego może dosięgnąć, tak aby ścianki były obrobione, a nie zostawiały rzędu stopni w rzucie.

- **Naddatek**: jak daleko narzędzie zostaje od modelu wszędzie, na wykończenie (domyślnie 0,5 mm).
- **Poziom przy każdej płaskiej ścianie**: dodatkowy poziom na wysokości każdej płaskiej ściany modelu (plus naddatek), tak aby dno nie zostało prawie całą głębokość przejścia wyżej.
- **Ignoruj materiał cieńszy niż**: materiał cieńszy od tego, w górę albo na bok, nie jest wart przejścia (0,05 mm dla zgrubnej, 0,5 mm dla obróbki resztek, tak aby włos materiału wzdłuż ściany nie wysyłał mniejszego narzędzia dookoła każdej ściany).
- **Dno**: nic nie jest frezowane poniżej tej wysokości. Puste oznacza dno modelu.

Zaczyna od półfabrykatu w takim stanie, w jakim zostawiły go poprzednie operacje: po przejściu planowania nie tnie powietrza tam, gdzie przeszła frezarka czołowa.

Zejście: tam, gdzie narzędzie napotkałoby materiał po drodze, wjeżdża po rampie wzdłuż własnego przejścia pod **kątem rampy**, tam i z powrotem na co najwyżej dwie średnice narzędzia. Przejście zbyt krótkie na to jest wjeżdżane pionowo w dół z posuwem zanurzania; operacja liczy takie wejścia i ostrzega, bo narzędzie, które nie tnie na swoim środku, nie powinno tego robić.

## Obróbka resztek

{{ui:Resztki}} to ta sama strategia dla **mniejszego narzędzia po większym**. Czyta symulację półfabrykatu i tnie tylko tam, gdzie materiał wciąż stoi: w wewnętrznych narożnikach, których większe narzędzie nie mogło obrócić, w rowkach, w które nie wchodziło, i w stopniach, które zostawiło na zboczach. Wszędzie indziej nic nie robi, więc jej ścieżka to mała część tego, co ten sam frez zrobiłby na świeżym półfabrykacie.

Umieść ją po operacji zgrubnej i wybierz mniejsze narzędzie. Potrzebuje symulacji półfabrykatu operacji przed nią, którą obszar roboczy zawsze uruchamia.

## Jak dobre są ścieżki

- **Brak wgryzień.** Pozycje narzędzia są wyliczane na siatce, z frezem nieco powiększonym (o 1,4 komórki siatki na boki i o naddatek), tak aby w każdym miejscu, w którym stoi, był czysty od modelu. Testy sprawdzają każdy punkt skrawania względem dokładnego narzędzia na dokładnej siatce, a symulacja półfabrykatu po każdym uruchomieniu: brak wgryzień, brak szybkiego ruchu przez materiał.
- **Cena tego**: ścianki zachowują trochę więcej niż naddatek, do wielkości pokazanej jako „Dodatkowy materiał na ściankach” w operacji (około 0,5 mm dla narzędzia Ø6, mniej dla mniejszego). Przejście wykończeniowe to zabiera.

Czym te ścieżki nie są:

- Rzędy są prostymi liniami, a nie przesunięciami kształtu części ani krzywymi o stałym zaangażowaniu. Robią więcej podniesień i przejazdów powietrznych niż strategia przesunięta albo adaptacyjna, a pierwszy rząd na każdym poziomie tnie pełną szerokość narzędzia. Dla kieszeni z płaskim dnem lepsza zgrubna jest {{ui:Adaptacyjne}} ([Adaptacyjne](topic:manufacture)).
- Trzon narzędzia i oprawka nie są sprawdzane. Ostrzeżenie mówi, kiedy cięcie jest głębsze niż długość rowka.
- Podcięć nie widać: model to to, co narzędzie spotyka, schodząc po swojej osi. Aby zgrubnie obrobić bok, daj drugiej operacji [pochylony kierunek narzędzia](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Obróbka resztek zna półfabrykat tylko tak dobrze, jak siatka symulacji (komórki od 0,1 do 2 mm, zależnie od rozmiaru części).
- Na dużej części program jest długi (ponad 100 000 ruchów dla kołnierza 200 mm frezem Ø6) i liczy się około minutę, a każda zmiana w obszarze roboczym przelicza cały program od nowa. Do zgrubnej używaj największego narzędzia, które się mieści.
- Sprawdź wynik w symulatorze swojej maszyny przed frezowaniem.
