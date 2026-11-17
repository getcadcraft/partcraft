---
title: Części z fizyki: generatory
summary: Obszar roboczy Engineer i element Bryła generowana: wybierz generator, ustaw jego dane wejściowe (przepływ, ciśnienie, temperatury, materiał, drukarkę) i otrzymaj część wymiarowaną na podstawie wzorów z podręczników, z jej kartą danych, sprawdzeniami wytwarzania i plikami dla narzędzi analizy. Te same dane wejściowe zawsze dają tę samą część.
keywords: engineer, generator, bryła generowana, fizyka, reguły, wymiennik ciepła, rozdzielacz, dysza, sieć kratowa, gyroid, karta danych, dane wejściowe, deterministyczny, te same dane tę samą część, sprawdzenia wytwarzania, druk 3D, złoże proszkowe
from: 5a387dc0
---

Generator to **skrypt**, który dobiera rozmiar części według Twoich wymagań i ją buduje. Generator wymiennika ciepła przyjmuje ciepło do przeniesienia, dwa przepływy i ich temperatury, ciśnienie i materiał; wylicza, jak duży musi być rdzeń i jak gruba jego ścianka, buduje go i podaje użyte liczby oraz to, skąd każda z nich pochodzi. Zmień dane wejściowe, a część pójdzie za nimi.

Wynik to zwykła bryła w części: jest na liście elementów, można ją wydrukować i wyeksportować. Sam generator również jest zapisany w części, więc plik otwiera się na każdym komputerze bez zainstalowanego generatora, a **otwarcie części nigdy nie uruchamia skryptu**.

## Utwórz bryłę

1. Wybierz obszar roboczy {{ui:Engineer}} w przełączniku.
2. Wybierz generator z listy (te, które są dołączone do PartCraft, a potem te, które otworzyłeś z pliku) i kliknij {{ui:Nowy}}.
3. Skrypt się uruchamia. Gdy skończy, bryła jest w widoku, a panel pokazuje jej dane wejściowe, **kartę danych** i **sprawdzenia**.

Możesz też dodać ją z Design: {{ui:Elementy}} › {{ui:Więcej}} › {{ui:Bryła generowana}}.

## Zmiana

Zmień dowolne dane wejściowe, a bryła zostanie wygenerowana ponownie chwilę po tym, jak przestaniesz pisać. Panel mówi, które z trzech rzeczy jest prawdziwe:

- **Aktualne**: bryła odpowiada skryptowi i jego danym wejściowym.
- **Dane wejściowe się zmieniły**: bryła w części pochodzi z wcześniejszych danych; jest generowana ponownie albo naciśnij {{ui:Uruchom}}.
- **Jeszcze nie uruchomiono** albo **Ostatnie uruchomienie się nie powiodło**: błąd skryptu jest pokazany wraz z jego wierszem.

{{ui:Stop}} kończy uruchomienie, które trwa zbyt długo. Cofnij wraca o jeden krok naraz: uruchomienie to jeden krok, dane wejściowe to jeden krok.

## Karta danych

Każda liczba, którą wyliczył generator, jest wymieniona wraz z **jednostką** i **skąd pochodzi** (równanie z podręcznika, norma, karta danych). Żadna wartość nie jest ukrytą stałą. Karta jest częścią pliku, więc na następnym komputerze jest taka sama. [Dane wyjściowe](topic:data-out) opisuje, jak zapisać ją jako JSON lub PDF.

## Sprawdzenia

Generator może sprawdzić swoją część pod kątem procesu drukowania: ścianki i szczeliny cieńsze, niż proces wytrzymuje, luźne części, wnęki, w których zostaje proszek lub żywica, otwory zbyt wąskie, by je oczyścić, oraz nawisy wymagające podparcia. Wyniki są w panelu i na liście {{ui:Problemy}} (przycisk ⚠), a zapisywane są razem z częścią.

Wartości procesów to zaokrąglone liczby, które publiczne poradniki projektowania podają dla procesu ogólnie (FDM, SLA, SLS, złoże proszkowe metalu). **Nie są specyfikacją Twojej maszyny**: zastąp je wartościami swojego warsztatu, zanim polegasz na sprawdzeniu. Sprawdzenie działa na siatce wokseli, więc jest dokładne do około jednego woksela: ścianka jest zgłaszana tylko wtedy, gdy jest cieńsza od granicy o więcej niż jeden woksel.

## Co zawiera wersja

| Generator | Co tworzy |
|---|---|
| Blok gyroid | Blok wypełniony gyroidem, Schwarz P albo arkuszem diamentowym: najprostsza sieć kratowa |
| Wymiennik ciepła gyroid | Rdzeń wymiennika dwuczynnikowego, dobrany z obciążenia metodą skuteczności-NTU, jego ścianka z ciśnienia; może sprawdzić spadek ciśnienia analizą przepływu w jednej komórce |
| Rozdzielacz | Kolektor i odgałęzienia, każda rura dobrana do przepływu, który przenosi |
| Belka kratowa gradientowa | Sieć kratowa, której ścianka grubieje tam, gdzie optymalizacja topologii wskazuje potrzebę materiału |

Wszystkie są pierwszymi oszacowaniami opartymi na wzorach z podręczników. [Biblioteka inżynierska](topic:engineering-library) wymienia wzory i ich ograniczenia. Przed użyciem wyniku uruchom Simulation, Thermal lub Flow.

## Kontrola eksportu

Generatory i karty danych Engineer niosą zawiadomienie o kontroli eksportu i sankcjach. Przeczytaj je w [Engineer i kontrola eksportu](topic:engineer-export-notice); jest ono również u dołu każdej karty danych.

## Jeszcze nie zbudowano

- Kolektory, króćce i złączki na rdzeniu wymiennika: to tylko rdzeń.
- Krzywe temperaturowe wytrzymałości materiałów: materiały są w temperaturze pokojowej.
- Straty na trójnikach i podział przepływu między wyjściami kolektora.
- Dodawanie generatorów z katalogu dodatków jednym kliknięciem; otwarcie pliku dodaje jeden do tej przeglądarki.
- Generatory dla pozostałych aplikacji.
