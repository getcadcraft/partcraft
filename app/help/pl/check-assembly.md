---
title: Sprawdź złożenie pod kątem kolizji i ruchu
summary: Znajdź nakładające się części poleceniem Kolizja, przeciągnij wartości dowolnego połączenia, aby obserwować ruch, i przesuń połączenie przez cały zakres, aby znaleźć miejsca zderzeń.
keywords: interferencja, wykrywanie interferencji, kolizja, zderzenie, nakładanie, dopasowanie gwintu, niezgodna głębokość gwintu, stykające się ściany, ukryj, filtr, ruch, badanie ruchu, przesunięcie, zakres ruchu, sprawdź
from: 9c98db46
---

Dwa sprawdzenia działają na częściach tak, jak są umieszczone. **Kolizja** szuka nakładającego się materiału w tej chwili, a **sprawdzenie ruchu** przesuwa jedno połączenie przez jego zakres i szuka nakładań po drodze.

## Sprawdzanie kolizji

1. Otwórz lub zbuduj złożenie (zobacz [Zbuduj złożenie](topic:build-assembly)).
2. Wybierz {{ui:Kolizja}}.

Pasek stanu podaje wynik:

- „Brak kolizji między 3 częściami (… ms).” Nic się nie nakłada.
- „Kolizja: Flange1 i Flange2: Nakładanie, 2.5 mm³.” Każda para, rodzaj wyniku i objętość, którą mają wspólną.

Pole **Złożenie** po lewej pokazuje **Kolizje**: „Brak”, „2 wyniki” (te, które są widoczne) albo „Nie sprawdzono”. Gdy nic nie jest zaznaczone, prawy panel wymienia każdy wynik w sekcji **Kolizje**.

Wynik jest czyszczony przy każdej zmianie złożenia. Po przesunięciu połączenia uruchom {{ui:Kolizja}} ponownie. Każda para części jest sprawdzana z każdą inną, więc duże złożenia zajmują więcej czasu.

### Rodzaje wyników

| Rodzaj | Znaczenie |
|---|---|
| **Nakładanie** | Części mają wspólną objętość: prawdziwa kolizja. |
| **Niezgodna głębokość gwintu** | Wspólna objętość leży w gwincie jednej części, ale poza gwintem drugiej: śruba nagwintowana głębiej niż jej otwór albo gładki trzon w gwintowanym otworze. |
| **Dopasowanie gwintu (gwinty kosmetyczne)** | Wspólna objętość leży w gwintach obu części: śruba w gwintowanym otworze. Gwinty kosmetyczne rysuje się w pełnym rozmiarze gwintu, więc zawsze lekko się nakładają. |
| **Stykające się ściany** | Brak wspólnej objętości, ale ściany się stykają (w odległości do 0.001 mm). |

Modelowane gwinty (zobacz [Gwinty na wałach i otworach, rysowane lub modelowane](topic:threads)) to prawdziwa geometria: to, co mają wspólnego, jest **Nakładaniem**.

### Ukryj to, czego nie musisz widzieć

W sekcji **Kolizje** **Pokaż** ma pole dla każdego rodzaju. Odznacz **Dopasowanie gwintu** i **Stykające się ściany**, aby widzieć tylko istotne kolizje. **Ukryj tę parę** obok wyniku ukrywa tę parę części, niezależnie od rodzaju. Ukryte wyniki są liczone („2 wyniki ukryte przez te filtry”), a **Pokaż ponownie ukryte pary** przywraca pary. Pasek stanu liczy także ukryte wyniki.

Filtry są zapisywane razem ze złożeniem, a każda zmiana to jeden krok {{key:Mod+Z}}. **Sprawdzanie połączenia pod kątem kolizji** (poniżej) też z nich korzysta. Złożenie z filtrami jest zapisywane jako wersja 4. Wcześniejsze wersje PartCraft odmawiają jego otwarcia, zamiast gubić filtry.

## Obserwowanie ruchu

1. Zaznacz połączenie, które się porusza (dowolne oprócz sztywnego), na liście po lewej.
2. Przeciągnij suwak pod jedną z jego wartości, na przykład **Kąt (°)** albo **Odsunięcie (mm)**. Część porusza się podczas przeciągania.
3. Puść. Nowe położenie zostaje i można je cofnąć klawiszami {{key:Mod+Z}}.

Możesz też wpisać kąt albo odsunięcie w polu i nacisnąć {{key:Enter}}.

Połączenie na zamkniętej pętli (mechanizmie łączącym) porusza całą pętlę: przeciągana wartość zostaje, a pozostałe połączenia pętli podążają za nią (zobacz [Zamknięte pętle](topic:build-assembly#closed-loops-linkages)).

## Sprawdzanie połączenia pod kątem kolizji

1. Zaznacz połączenie, które się porusza.
2. Dla połączenia z kilkoma wartościami (cylindrycznego, płaskiego, kulistego, trzpienia w rowku) wybierz, którą przesunąć, w **Sprawdź ruchy**.
3. Wybierz {{ui:Sprawdź ruch pod kątem kolizji}}.

PartCraft przesuwa tę wartość przez 25 położeń w 24 równych krokach, a pozostałe pozostają bez zmian: kąt od −180° do 180° (pochylenie od −90° do 90°), długość od minus do plus rozmiaru największej części. Raportuje:

- „Brak kolizji w żadnym położeniu kąta od -180 do 180 (sprawdzono 25 położeń).”
- „6 z 25 położeń powoduje kolizję, pierwsza przy kącie 45 (12.4 mm³).” Pierwsze położenie z kolizją i nakładanie w nim.

Przycisk jest wyszarzony dla połączeń sztywnych, które się nie poruszają. Przesunięcie sprawdza tylko położenia, a nie drogę między nimi: cienka część może przejść przez inną między dwoma krokami.

:::note
Kontakt i grawitacja nie są jeszcze zbudowane. Bez limitów przesunięcie obejmuje cały zakres. Ustaw wartości **Limity** (zobacz [Lista części, widoki rozstrzelone i przesuwanie części](topic:assembly-bom-explode)), a przesunięcie obejmie tylko je, więc zawias, który otwiera się o 90°, jest sprawdzany na 90°.
:::

## Badanie ruchu

**Złożenie › Ruch** zmienia wartość jednego połączenia od początku do końca w podanym czasie (stała prędkość, łagodnie, sinus albo w tył i w przód). Ustawia złożenie w każdym kroku wraz z połączeniami i zamkniętymi pętlami oraz raportuje, jakie kolizje występują i jak blisko siebie są części. **Dodaj punkt** podąża za środkiem części albo punktem, który na niej klikniesz. Karta rysuje jego położenie, prędkość i przyspieszenie, wartość połączenia oraz prześwit w czasie. **Zapisz CSV** i **Zapisz wykres** zapisują je do pliku. Prędkość i przyspieszenie wynikają z zapisanych położeń, więc ostry szczyt między krokami wychodzi zaniżony. Użyj większej liczby kroków.

Po **Uruchom** pasek **Przechodzenie przez przebieg** przenosi złożenie do dowolnego kroku. Obok pokazany jest czas, wartość i to, czy części w tym miejscu kolidują. Połączenie zachowuje własną wartość, a **Wróć do modelu** przywraca złożenie. Ustawienia badania są zapisywane w pliku złożenia. Jego wyniki są tworzone ponownie przez **Uruchom**.

## Badanie kontaktu

**Złożenie › Kontakt** pokazuje, jak złożenie przenosi obciążenia tam, gdzie części na siebie napierają. Każda część wnosi własne podpory, obciążenia i materiał ze swojego badania **Symulacja** (stała ściana na jednej części, siła na innej). Tutaj wybierasz pary. **Dodaj parę**, a następnie **Wybierz stronę A** i kliknij ściany jednej części, **Wybierz stronę B** i kliknij ściany innej części. Kliknięcie wybranej ściany ją zdejmuje. Esc albo **Gotowe** kończy wybieranie. Para jest **Bez tarcia** (części napierają, ale się ślizgają) albo **Sklejony** (pozostają razem). Współczynnik sztywności określa, jak mocno kontakt stawia opór wciskaniu się (20 to dobry początek, 1000 dla sztywnego stosu stalowego).

**Rozwiąż** uruchamia obciążenie w krokach i pokazuje siłę kontaktu, największe wciśnięcie, największe przemieszczenie i największe naprężenie. Część bez pary zostaje pominięta, a karta o tym informuje. Kontakt bez tarcia nie trzyma części na boki: nadaj każdej części podporę w jej własnym badaniu Symulacja albo ją sklej, inaczej kroki mogą się nie ustabilizować. Pary i ustawienia są zapisywane w pliku złożenia.

**Eksportuj plik CalculiX** zapisuje ten sam model jako plik wejściowy CalculiX (.inp). CalculiX to osobny program, który instalujesz i uruchamiasz samodzielnie. **Odczytaj wyniki CalculiX (.frd)** odczytuje następnie przemieszczenia z siatki tego złożenia i odmawia pliku przygotowanego dla innej siatki. Solver obsługuje odkształcenia plastyczne, ale nie dynamikę jawną. Nic tutaj nie jest certyfikowaną analizą: wszystko, co ma znaczenie, powinien sprawdzić inżynier.
