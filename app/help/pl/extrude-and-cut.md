---
title: Wyciągnij występ i wytnij przez niego
summary: Zamień szkic w bryłę za pomocą Wyciągnij, ustaw głębokość ślepą, przez płaszczyznę środkową, do ściany lub w dwóch kierunkach, pochylenie albo jeden kontur szkicu, a następnie szkicuj na ścianie i Wytnij kieszeń lub rowek przelotowy.
keywords: wyciągnij, występ, wyciągnięty występ, wytnij, wyciągnięte wycięcie, kieszeń, przez wszystko, ślepo, płaszczyzna środkowa, odwróć, głębokość, wytnij-wyciągnij, występ-wyciągnij, wypełnienie, do ściany, do następnej ściany, do wierzchołka, odsunięcie od ściany, kierunek 2, dwa kierunki, pochylenie podczas wyciągania, zwężenie, kontur, region, wybrane kontury
from: 3b13ff10
---

{{ui:Wyciągnij}} wypycha zamknięty profil szkicu prosto z jego płaszczyzny, tworząc materiał. {{ui:Wytnij}} robi to samo, ale usuwa materiał. Oba to ta sama funkcja pod spodem; jedną możesz później zamienić na drugą.

## Wyciągnij występ

1. Narysuj zamknięty profil i zamknij szkic (zob. [Rysowanie pierwszego szkicu](topic:sketch-basics)). Pozostaje zaznaczony.
2. Wybierz {{ui:Wyciągnij}}.

Pojawia się bryła o wysokości 10 mm, „Extrude1” dołącza do historii z wciętym pod nią szkicem, a pasek stanu mówi: „Dodano Extrude1. Zmień jego wartości w prawym panelu.”

**Który szkic jest używany:** szkic, który właśnie zamknąłeś, albo szkic zaznaczony w historii. Gdy nic nie jest zaznaczone, PartCraft bierze najnowszy szkic, którego żadna funkcja jeszcze nie używa. Jeśli takiego nie ma: „Najpierw utwórz szkic: wskaż płaszczyznę, Szkic, narysuj zamknięty profil, Wyjdź.”

### Ustaw głębokość i kierunek

W prawym panelu:

| Ustawienie | Wybory | Domyślnie |
|---|---|---|
| **Operacja** | Występ (dodaj materiał), Wytnij (usuń materiał), Przecięcie (zachowaj część wspólną), Nowa bryła (w tej wersji jeszcze nie zbudowano: wymaga dokładnego jądra) | Występ |
| **Koniec** | Ślepo (głębokość), Płaszczyzna środkowa (w obu kierunkach), Przez wszystko, Do ściany lub płaszczyzny, Do następnej ściany, Do wierzchołka, Odsunięcie od ściany | Ślepo |
| **Głębokość (mm)** | Dowolny rozmiar powyżej zera (widoczne dla Ślepo i Płaszczyzny środkowej) | 10 |
| **Odwróć kierunek** | Rośnie na drugą stronę płaszczyzny szkicu (niewidoczne dla Płaszczyzny środkowej) | Wyłączone |

Wpisz liczbę i naciśnij {{key:Enter}} lub {{key:Tab}}: część przebuduje się od razu. **Płaszczyzna środkowa** rozkłada połowę głębokości na każdą stronę szkicu.

### Do ściany, następnej ściany lub wierzchołka

W tej wersji jeszcze nie zbudowano: każde zakończenie „do” wymaga dokładnego jądra, a funkcja podaje: „Wyciąganie do ściany, następnej ściany lub wierzchołka: jeszcze nie zbudowano (wymaga dokładnego jądra).” Użyj głębokości Ślepo, którą zmierzysz. Przy dokładnym jądrze zakończenia działają tak:

- **Do ściany lub płaszczyzny**: **Do** przyjmuje płaską ścianę (Wskaż, a potem kliknij ją) albo płaszczyznę odniesienia. Ściana równoległa do szkicu daje dokładną głębokość; pochyła tnie zakończenie na skosie. Jeśli ściana jest za szkicem: „… Spróbuj Odwróć kierunek.”
- **Do następnej ściany**: zatrzymuje się na pierwszej płaskiej ścianie bryły, którą napotka wyciągnięcie (zakrzywione ściany nie są tu obsługiwane, a funkcja o tym informuje).
- **Do wierzchołka**: zatrzymuje się na poziomie wierzchołka (kliknij w pobliżu końca krawędzi) albo elementu punktowego.
- **Odsunięcie od ściany**: jak Do ściany, z zatrzymaniem w odległości **Odsunięcie (mm)** przed nią (mierzonym prostopadle do ściany).

### Dwa kierunki, pochylenie, jeden kontur

- **Drugi kierunek** (Ślepo): wyciąga także **Drugą głębokość (mm)** na drugą stronę szkicu.
- **Pochylenie (°)**: boki pochylają się w miarę wyciągania (wartość ujemna: na zewnątrz), jak pochylenie; tylko jeden kierunek. W tej wersji jeszcze nie zbudowano (wymaga dokładnego jądra): pozostaw 0.
- **Regiony**: **Wskaż regiony**, a następnie kliknij wewnątrz pętli, które mają zostać wyciągnięte; używane są tylko te regiony (okrąg wewnątrz kwadratu: kliknij wewnątrz okręgu, aby uzyskać walec, a między nimi, aby uzyskać płytę z otworem). **Wszystkie** przywraca każdą pętlę.

Poniżej nich **Wymiary szkicu** wypisuje wymiary sterujące szkicu, dzięki czemu możesz zmienić rozmiary profilu bez otwierania szkicu.

:::note
**Przez wszystko dotyczy tylko wycięć.** Występ ustawiony na Przez wszystko kończy się błędem: „Przez wszystko dotyczy wycięć. Dla występu użyj głębokości.” Przełączenie funkcji z Wytnij z powrotem na Występ zmienia Przez wszystko na Ślepo automatycznie.
:::

## Wytnij kieszeń

1. Kliknij płaską ścianę, w którą chcesz wciąć. Podświetli się, a prawy panel pokaże **Ściana**.
2. Wybierz {{ui:Szkic na tej ścianie}} (albo {{ui:Szkic}} na pasku narzędzi).
3. Narysuj kontur kieszeni, na przykład prostokąt, i nadaj mu wymiary.
4. Wybierz {{ui:Wyjdź}}.
5. Wybierz {{ui:Wytnij}}. Zaczyna od **Przez wszystko**: usuwa materiał na wylot przez całą część.
6. Dla kieszeni ustaw **Koniec** na **Ślepo (głębokość)** i wpisz **Głębokość (mm)**.

Wycięcie idzie w materiał, w stronę przeciwną do ściany, na której szkicowałeś. Jeśli pasek stanu mówi: „Po tej stronie szkicu nie ma nic do wycięcia. Spróbuj drugiego kierunku.”, zaznacz **Odwróć kierunek**.

Szkic na dnie kieszeni podąża za dnem: zmień głębokość kieszeni, a szkic przesunie się razem z nią.

## Wyciągnij lub wciśnij całą ścianę

Aby ściana wystawała dalej lub się zagłębiła, nie musisz rysować jej konturu. Kliknij płaską ścianę, a potem w prawym panelu:

- {{ui:Wyciągnij z niej}} wyciąga ścianę na zewnątrz: PartCraft dodaje szkic na ścianie z jej konturem (otwory w ścianie pozostają otworami) oraz Wyciągnięcie na 10 mm.
- {{ui:Wytnij w niej}} wpycha ścianę do środka: ten sam szkic i Wycięcie do połowy części.

Obie operacje to jeden krok: {{key:Mod+Z}} usuwa szkic i element razem. Nowy element jest zaznaczony, więc od razu wpisz liczbę i naciśnij {{key:Enter}}, aby ustawić jego głębokość. Kontur jest skopiowany jako stałe linie i łuki: nie podąża za późniejszymi zmianami ściany. Jeśli część konturu nie może zostać skopiowana (krzywa swobodna), zamiast tego otworzy się szkic z tym, co udało się skopiować; dokończ go, a następnie wybierz {{ui:Wyjdź}} i {{ui:Wyciągnij}} albo {{ui:Wytnij}}.

## Profile z wyspami

Szkic może zawierać kilka zamkniętych pętli. Pętle obok siebie stają się osobnymi występami (lub wycięciami); pętla wewnątrz innej staje się otworem przez występ. Na przykład prostokąt z dwoma okręgami w środku wyciąga się jako płytę z dwoma otworami.

Aby użyć tylko części pętli, wybierz je za pomocą **Regiony** (powyżej); inna funkcja może użyć pozostałych pętli tego samego szkicu.

## Późniejsza edycja

- Kliknij „Extrude1” w historii, aby przywrócić jej ustawienia.
- Kliknij dwukrotnie jej szkic (wcięty pod nią), aby go otworzyć; zamknij go, aby przebudować.
- Zob. [Zmiana części za pomocą historii](topic:edit-history), aby dowiedzieć się o wyłączaniu, cofaniu, zmianie kolejności i usuwaniu.

## Częste komunikaty

| Komunikat | Co zrobić |
|---|---|
| „Szkic nie ma zamkniętego profilu do wyciągnięcia.” | Szkic nie ma zamkniętej pętli z linii ciągłych. Zamknij luki albo przełącz linie konstrukcyjne z powrotem klawiszem {{key:Q}} |
| „Profil jest otwarty: koniec w (x, y) nie jest z niczym połączony.” | Otwórz szkic i połącz ten koniec z następną linią |
| „Nie ma jeszcze nic do wycięcia.” | Wycięcie wymaga bryły do wycięcia. Najpierw utwórz występ |
| „Po tym nic nie zostało z części.” | Wycięcie usunęło wszystko. Sprawdź jego rozmiar i kierunek |

Więcej w [Rozwiązywanie problemów](topic:troubleshooting).
