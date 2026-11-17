---
title: Zbuduj złożenie z połączeniami
summary: Rozpocznij złożenie od części, wstaw kopie i inne pliki części, łącz je połączeniami sztywnymi, obrotowymi, suwakowymi, cylindrycznymi, płaskimi, kulistymi i trzpień w rowku na płaskich ścianach, wyśrodkuj połączenia na osiach, edytuj część w miejscu i zapisz złożenie.
keywords: złożenie, mate, mates, połączenie, pętla, zamknięta pętla, mechanizm łączący, czteroprzegubowy, mechanizm, sztywne, obrotowe, suwakowe, cylindryczne, płaskie, kuliste, sferyczne, trzpień w rowku, wstaw komponent, uziemione, stałe, współśrodkowe, zgodne, edytuj część, w kontekście, partcraft-asm
from: a53bbfef
---

Złożenie łączy części. W PartCraft **połączenia** ustawiają części: każde połączenie leży na płaskiej ścianie każdej z dwóch części i stawia je ściana do ściany. Połączenie obrotowe pozwala jednej części się obracać, suwakowe pozwala jej się przesuwać, a sztywne ją trzyma.

## Rozpocznij złożenie

1. Zbuduj część z bryłą (pusta część nie może trafić do złożenia: „Najpierw zbuduj bryłę, potem wstaw ją do złożenia.”).
2. Wybierz {{ui:Złożenie}} na pasku narzędzi.

Pasek stanu podaje: „Złożenie rozpoczęto z Part1 jako częścią uziemioną. Wstaw więcej części ({{ui:Dodaj kopię}}, {{ui:Wstaw}} albo Edytuj › Duplikuj), a następnie połącz je połączeniami.” Lewy panel teraz wymienia **Części** i **Połączenia**, a pasek narzędzi pokazuje narzędzia złożenia. Narzędzia szkicu i elementów znikają.

Pierwsza część jest **uziemiona**: nigdy się nie porusza, a wszystko inne jest ustawiane względem niej.

## Wstawianie części

- {{ui:Dodaj kopię}} wstawia kolejną kopię zaznaczonej części (albo ostatniej). Kopie współdzielą jedną część: edytujesz ją, a zmienia się każda kopia.
- {{ui:Duplikuj}} ({{key:Mod+D}}) w grupie Edytuj robi to samo dla zaznaczonej części. {{key:Mod+C}} i {{key:Mod+V}} kopiują część i wklejają ją obok pozostałych, w tym złożeniu lub w innym. {{key:Mod+Shift+V}} wkleja ją w to samo miejsce. Zobacz [Kopiuj, wklej i duplikuj](topic:copy-paste).
- {{ui:Wstaw}} wstawia część z pliku `.partcraft.json` na twoim komputerze. Część zostaje skopiowana do złożenia.

Nowe części pojawiają się 20 mm na prawo od wszystkiego, co już jest, i tam pozostają, dopóki połączenie ich nie ustawi. Część bez połączenia można też przesuwać ręcznie: wpisanymi wartościami albo strzałkami, które przeciągasz (zobacz [Lista części, widoki rozstrzelone i przesuwanie części](topic:assembly-bom-explode)).

## Łączenie dwóch części

1. Wybierz {{ui:Połączenie}} albo naciśnij {{key:J}}. Prawy panel pokazuje **Nowe połączenie**.
2. Kliknij płaską ścianę pierwszej części. Zostaje podświetlona.
3. Kliknij płaską ścianę drugiej części.

Druga część przeskakuje tak, że jej ściana przylega do ściany pierwszej części, zwrócona ku niej. Połączenie pojawia się w sekcji **Połączenia**, na przykład „Revolute1”, a prawy panel pokazuje jego ustawienia.

- Jeśli obie ściany powstały z obrotów, połączenie zaczyna jako **obrotowe**. W przeciwnym razie jako **sztywne**. Typ można zmienić później.
- Zakrzywionych ścian nie można wybrać: „Ta ściana jest zakrzywiona. Wybierz płaską ścianę (aby obrócić wokół otworu lub osi obrotu, wybierz to później w połączeniu).”
- {{key:Esc}} anuluje rozpoczęte połączenie (albo kliknij część na liście po lewej).

### Ustawienia połączenia

| Ustawienie | Co robi |
|---|---|
| **Typ** | Jeden z połączeń z tabeli poniżej |
| **Kąt (°)** | Obraca drugą część wokół osi połączenia (prostopadle do ścian) |
| **Odsunięcie (mm)** | Przesuwa drugą część wzdłuż osi, od ściany (wartości ujemne wciskają ją w ścianę) |
| **Wzdłuż X**, **Wzdłuż Y**, **Pochylenie wokół X**, **Pochylenie wokół Y**, **Wzdłuż rowka**, **Kierunek rowka** | Pozostałe wartości, pokazywane dla połączeń, które ich używają |
| **Wyśrodkuj na** (dla każdej strony) | Miejsce, w którym oś połączenia przecina ścianę: „Własny początek ściany”, oś obrotu („Axis of Revolve1”) albo oś jednego otworu („Hole1, hole 2”) |

Każda wartość, którą połączenie pozwala przesuwać, ma suwak przeciągania pod swoim polem. Pozostałe ustawia się raz.

| Połączenie | Co się porusza | Ustawiane raz |
|---|---|---|
| **Sztywne** | nic | Kąt, Odsunięcie |
| **Obrotowe** | Kąt (zawias) | Odsunięcie |
| **Suwakowe** | Odsunięcie (szuflada) | Kąt |
| **Cylindryczne** | Kąt i Odsunięcie (wał w łożysku ślizgowym) | |
| **Płaskie** | Wzdłuż X, Wzdłuż Y w poprzek ściany i Kąt (część przesuwana po stole) | |
| **Kuliste** | Kąt (obrót) i pochylenie wokół X i Y, względem środka połączenia (przegub kulowy) | |
| **Trzpień w rowku** | Wzdłuż rowka i Kąt (trzpień w prostym rowku) | Kierunek rowka: kąt rowka względem osi X ściany |

Osie X i Y ściany są takie jak ściany pierwszej części. Środek połączenia ustawia **Wyśrodkuj na**.

„Własny początek ściany” to początek części rzutowany na ścianę. Często nie jest tam, gdzie chcesz wyrównać części. Dla okrągłych części i trzpieni ustaw **Wyśrodkuj na** na oś obrotu lub otworu po obu stronach. Osie się wtedy wyrównają, jak przy współśrodkowym połączeniu.

### Przykład: dwa kołnierze przykręcone ściana do ściany

1. Otwórz część kołnierza (obrót z kołowym wzorem otworów) i wybierz {{ui:Złożenie}}.
2. Wybierz {{ui:Dodaj kopię}}.
3. Naciśnij {{key:J}}, kliknij płaską ścianę tarczy pierwszego kołnierza (ścianę, od której zaczynają się otwory na śruby), a następnie tę samą ścianę na drugim kołnierzu. Ściany powstały z obrotu, więc połączenie jest obrotowe.
4. Ustaw **Wyśrodkuj na** na „Axis of Revolve1” po obu stronach. Kołnierze mają teraz wspólną oś.
5. Wpisz `22.5` w **Kąt (°)**, aby wyrównać otwory na śruby, albo przeciągnij suwak.

## Zamknięte pętle: mechanizmy łączące

Części połączone w pierścień (czteroprzegubowy mechanizm łączący, mechanizm korbowy z suwakiem, rama usztywniona po obu stronach) tworzą **pętlę**. PartCraft rozwiązuje każdą pętlę tak, aby się zamknęła. Połączenia na niej przyjmują wartości, które łączą pierścień, a przesuwają się jak najmniej od swoich poprzednich położeń.

- **Ustaw lub przeciągnij** wartość połączenia na pętli, a reszta pętli podąża za nią. Dla czteroprzegubowego mechanizmu przeciągnij **Kąt** korby, a łącznik i wahacz poruszą się razem z nią. Ustawiona wartość zostaje, a pozostałe są z niej wyliczane.
- Na liście połączenie na pętli, które nadal może się poruszać, jest **niebieskie**: można by jeszcze ustawić inną wartość. Pętla, która nie może się poruszać (usztywniona rama), pozostaje czarna. Pętla, której nie da się zamknąć, jest **czerwona**.
- Pole **Część** pokazuje **Pętle**: ile jest zamkniętych i ile wartości nadal może się poruszać, na przykład „1 zamknięta; 1 wartość może się jeszcze poruszać”.
- {{ui:Sprawdź ruch pod kątem kolizji}} przesuwa połączenie na pętli krok po kroku, a pętla podąża za nim (zobacz [Sprawdź złożenie pod kątem kolizji i ruchu](topic:check-assembly)).

Płaski mechanizm łączący złożony z płaskich prętów musi być zgodny w głębokości: dwie części połączone ściana do ściany po obu stronach pierścienia muszą mieć tę samą wysokość stosu w obu kierunkach. Użyj **Odsunięcia** połączenia, aby podnieść część tam, gdzie stos się nie zgadza. Inaczej pętla nie zamknie się.

## Praca z częściami

Kliknij część w widoku albo na liście, aby ją zaznaczyć. Prawy panel pokazuje nazwę części, ile jest kopii, jej objętość, połączenia oraz to, czy jest uziemiona, ustawiona przez swoje połączenia, czy „Nie połączono: pozostaje tam, gdzie ją umieszczono”. Przyciski:

- {{ui:Edytuj tę część}} (albo {{ui:Edytuj część}} na pasku narzędzi, albo kliknij dwukrotnie część na liście): otwiera część do edycji;
- {{ui:Wstaw kopię}};
- {{ui:Ustaw jako część uziemioną}};
- {{ui:Usuń}}: usuwa także jej połączenia, po potwierdzeniu.

Złożenie zawsze zawiera co najmniej jedną część: „Złożenie musi zawierać co najmniej jedną część. Zamknij je zamiast tego.”

### Edycja części w miejscu

1. Zaznacz część i wybierz {{ui:Edytuj część}}. Część otwiera się z historią, a nagłówek mówi „Bracket (w złożeniu Bracket)”.
2. Zmień ją jak każdą inną część.
3. Wybierz {{ui:Wstecz}} na pasku narzędzi. Złożenie się aktualizuje: każda kopia tej części się zmienia, a połączenia na ścianach utworzonych z krawędzi szkicu podążają za zmianą.

Przeniesienie zmiany z powrotem to jeden krok na liście cofnięć złożenia.

## Cofanie, zapis i zamykanie

- Złożenie ma własną listę cofnięć: {{key:Mod+Z}} i {{key:Mod+Y}} działają na połączeniach, wstawieniach i ustawieniach.
- {{ui:Zapisz}} albo {{key:Mod+S}} pobiera `<assembly name>.partcraft-asm.json` z każdą częścią w środku. Otwórz go później przyciskiem {{ui:Otwórz}}.
- {{ui:Zamknij}} zamyka złożenie i wraca do części, od której zaczęto. Jeśli złożenie nie jest zapisane, pyta: {{ui:Anuluj}}, {{ui:Odrzuć złożenie}} albo {{ui:Najpierw zapisz}}.
- Aby zmienić nazwę złożenia, kliknij puste miejsce, aby nic nie było zaznaczone, i zmień **Nazwa** w prawym panelu.

## Duże złożenia

Złożenie może zawierać tysiące kopii kilku części. Kopie jednej części są rysowane razem. Połączenie, które obracasz, ustawia tylko części za nim. Lista części pokazuje pierwsze wiersze z przyciskiem „Pokaż więcej” pod nimi (zaznaczona część jest zawsze na liście).

- Podczas obracania lub powiększania widoku złożenie o więcej niż około 300,000 trójkątów jest rysowane jako jedno pudełko na część, a po chwili od zatrzymania w pełni.
- {{ui:Widoki}} › {{ui:Wyświetlanie uproszczone}} utrzymuje pudełka cały czas. Wybieranie części i połączeń nadal używa rzeczywistych części.
- Szybkość obrotu zależy także od karty graficznej. Wyniki zmierzone przez PartCraft są w informacjach o wydaniu wraz z komputerem, na którym je zmierzono.

## Problemy z połączeniami

- Część, do której nie dociera żadne połączenie, jest wymieniona jako **wolna**, a panel mówi: „Bracket2 nie jest połączony z częścią uziemioną, więc pozostaje tam, gdzie go umieszczono.”
- Pętla, której nie da się zamknąć (długości nie wystarczają, limit zatrzymuje połączenie, ściany nie zgadzają się głębokością): „Revolute3 zamyka pętlę, której nie da się zamknąć: różni się o 2.000 mm. Sprawdź ściany, odsunięcia i limity połączeń pętli.” Jej połączenia stają się czerwone.
- Jeśli ściana albo oś używana przez połączenie zniknie po edycji części: „Ściana używana przez to połączenie zniknęła z Bracket.” Usuń połączenie i utwórz je ponownie.

Dalej: [Sprawdź złożenie pod kątem kolizji i ruchu](topic:check-assembly).
