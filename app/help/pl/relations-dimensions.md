---
title: Pełne określenie szkicu relacjami i wymiarami
summary: Dodawaj relacje z prawego panelu i wymiary narzędziem Wymiar, odczytuj kolory szkicu niedookreślonego, w pełni określonego i przeokreślonego oraz napraw szkic przeokreślony.
keywords: relacje, więzy, wymiary, wymiar inteligentny, w pełni określony, niedookreślony, przeokreślony, stopnie swobody, zgodność, poziomo, pionowo, równoległość, prostopadłość, styczność, równość, współśrodkowość, punkt środkowy, stała, konflikt, nadmiarowy
from: e76d047a
---

Szkic jest **w pełni określony**, gdy każdy punkt i każdy rozmiar są ustalone relacjami i wymiarami. W pełni określony szkic zmienia się tylko wtedy, gdy zmienisz liczbę, więc część zachowuje się przewidywalnie, gdy edytujesz ją później. PartCraft nie wymusza pełnego określenia szkicu, ale zawsze pokazuje, jak blisko jesteś.

## Odczyt stanu szkicu

Stan jest widoczny w trzech miejscach: w znaczniku w lewym górnym rogu widoku, w komunikacie na górze prawego panelu oraz w znaczniku w historii.

| Stan | Znacznik | Kolor geometrii | Co to znaczy |
|---|---|---|---|
| Niedookreślony | „Niedookreślony · 3 stopnie swobody” | Niebieski | Część geometrii może się jeszcze przesunąć. Przeciągnij niebieską geometrię, aby zobaczyć, w którą stronę |
| W pełni określony | „W pełni określony” | Ciemny (czarny na Papierze, jasny na Modelu) | Każdy punkt i rozmiar są ustalone |
| Przeokreślony | „Przeokreślony” | Czerwony na zaangażowanych relacjach | Niektóre relacje wzajemnie sobie przeczą albo jedna wynika już z pozostałych |

Geometria konstrukcyjna jest szara i przerywana, niezależnie od stanu. Zaznaczone elementy są pomarańczowe. „Stopień swobody” to jeden sposób, w jaki coś może się jeszcze przesunąć: wolny punkt ma dwa (w lewo-prawo i w górę-dół), wolny okrąg ma trzy (swój środek i promień).

Legenda pod komunikatem w prawym panelu powtarza kolory.

## Dodawanie wymiaru

1. Naciśnij {{key:D}} lub wybierz {{ui:Wymiar}}.
2. Kliknij to, co chcesz zmierzyć:
   - **jedną linię**: jej długość;
   - **jeden okrąg**: jego średnica; **jeden łuk**: jego promień;
   - **dwa punkty** (punkt końcowy, środek, luźny punkt lub początek układu): odległość między nimi;
   - **punkt i prostą**: odległość punktu od prostej;
   - **dwie równoległe proste**: odległość między nimi; **dwie proste pod kątem**: kąt między nimi.
3. Po wskazaniu jednego elementu pasek stanu pokazuje: „Kliknij drugi element albo kliknij, gdzie ma być wymiar.” Kliknij drugi element lub kliknij w puste miejsce, w którym chcesz liczbę.
4. Otwiera się pole liczby z bieżącą wartością. Wpisz rozmiar i naciśnij {{key:Enter}}. {{key:Esc}} zachowuje zmierzoną wartość.

**Miejsce, w które wstawisz liczbę, decyduje o rodzaju** dla pochylonej prostej lub dwóch punktów: umieść ją nad lub pod nimi, aby uzyskać odległość poziomą, po lewej lub prawej, aby uzyskać odległość pionową, a w innym miejscu dla prawdziwej (wyrównanej) odległości.

Pole przyjmuje zwykłe liczby w milimetrach lub stopniach, na przykład `25`, `12.5` lub `1e3`. Wiodący znak `⌀`, `Ø` lub `R` albo końcowe `mm` lub `°` są ignorowane. Kąty mieszczą się w zakresie od 0 do 180 stopni. Działania, takie jak `20+5`, nie są przyjmowane; aby powiązać rozmiar ze zmienną lub wzorem, zacznij go od `=`.

Aby później zmienić wymiar, kliknij dwukrotnie jego liczbę w szkicu albo wybierz **Edytuj** obok niego na liście w prawym panelu.

:::tip
Możesz też najpierw zaznaczyć geometrię (narzędzie Zaznacz) i wybrać przycisk wymiaru w prawym panelu: {{ui:Odległość}}, {{ui:Odległość pozioma}}, {{ui:Odległość pionowa}}, {{ui:Promień}}, {{ui:Średnica}} lub {{ui:Kąt}}. Pokazane są tylko te, które pasują do zaznaczenia. Tak nadajesz okręgowi promień zamiast średnicy.
:::

## Dodawanie relacji

Relacje dodaje się z prawego panelu, a nie narzędziem.

1. Naciśnij {{key:S}}, aby wybrać Zaznacz.
2. Kliknij jeden element, a potem {{key:Shift}}+kliknij drugi, jeśli relacja wymaga dwóch. Początek układu też można zaznaczyć.
3. Prawy panel pokazuje „Zaznaczono: linia l3, punkt p1” i przycisk dla każdej pasującej relacji, na przykład {{ui:∥ Równoległość}} lub {{ui:• Zgodność}}.
4. Wybierz przycisk. Szkic rozwiąże się od razu.

Jeśli żadna relacja nie pasuje, panel pokazuje: „Żadna relacja nie pasuje do tego zaznaczenia. Zaznacz jeden lub dwa elementy (Shift+kliknięcie dodaje).”

Pełna lista relacji, tego, czego każda wymaga i co robi, znajduje się w [Relacje i wymiary szkicu](topic:sketch-relations).

Relacje pokazują się w szkicu jako małe symbole obok geometrii (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Kropki zgodności są ukryte, chyba że geometria jest zaznaczona lub relacja ma problem. Kliknij symbol, aby zaznaczyć relację.

## Przykład: profil wspornika w kształcie litery L

1. Szkicuj na **Płaszczyźnie przedniej**. Narzędziem Linia zacznij w początku układu i kliknij sześć narożników litery L, kończąc ponownie w początku. Łańcuch kończy się sam, gdy klikniesz pierwszy punkt.
2. Linie narysowane blisko poziomu lub pionu mają już relacje H i V, z wyjątkiem ostatniej: linia kończąca się w istniejącym punkcie nie dostaje automatycznej relacji. Naciśnij {{key:S}}, kliknij tę ostatnią linię i wybierz {{ui:V Pionowo}} w prawym panelu. Znacznik pokazuje „Niedookreślony · 4 stopnie swobody”.
3. Naciśnij {{key:D}}. Kliknij dolną linię, kliknij poniżej niej, wpisz `80`, {{key:Enter}}.
4. Kliknij lewą linię, kliknij na lewo od niej, wpisz `60`, {{key:Enter}}.
5. Wymiaruj w ten sam sposób krótką górną linię na `20` i wewnętrzną pionową linię na `45`.
6. Znacznik teraz pokazuje **W pełni określony**, a cała litera L przyjmuje ciemny kolor.

## Naprawa przeokreślonego szkicu

Gdy nowa relacja lub wymiar przeczy pozostałym, PartCraft niczego nie przesuwa. Geometria zostaje dokładnie taka, jaka była, zaangażowane relacje stają się czerwone, a pasek stanu je nazywa:

- „Przeokreślony: Poziomo, Odległość 40 nie mogą być spełnione jednocześnie. Cofnij albo usuń jedną z nich.” Relacje są sprzeczne.
- „Przeokreślony: Równoległość już wynika z innych. Usuń ją.” Relacja nic nie wnosi: pozostałe już ją wymuszają. (Na przykład boki prostokąta są już równoległe.)

Aby to naprawić:

1. Naciśnij {{key:Mod+Z}}, aby cofnąć ostatnią zmianę, albo
2. Znajdź czerwony element na liście **Relacje i wymiary** w prawym panelu (grupa, która go zawiera, jest otwarta i czerwona) i wybierz obok niego **Usuń**. Możesz też kliknąć jego symbol lub liczbę w szkicu i nacisnąć {{key:Delete}}.

:::note
W tej wersji nie ma wymiarów „sterujących” (referencyjnych). Wymiar, który tylko podawałby rozmiar już ustalony przez pozostałe relacje, jest traktowany jako przeokreślony. Odczytuj rozmiary w panelu: zaznacz prostą i spójrz na przyciski wymiarów albo sprawdź dane części po wyciągnięciu.
:::

Przeokreślony szkic z prawdziwym konfliktem sprawia, że element go używający zawodzi („Przeokreślony: 1 relacja nie może być w pełni spełniona.”), a historia oznacza go jako **⚠ błąd**. Szkic, który jest tylko nadmiarowy, nadal się buduje, z ostrzeżeniem **⚠**.

## Przeciągnij, aby znaleźć wolne elementy

W trybie Zaznacz przeciągnij dowolny niebieski punkt lub prostą. Rozwiązywacz przesuwa ją najmniej, jak to możliwe, zachowując każdą relację. Jeśli przeciągnięcie złamałoby relację, geometria wraca na miejsce. To najszybszy sposób, by zobaczyć, którego wymiaru wciąż brakuje.

## Lista relacji

Gdy nic nie jest zaznaczone, prawy panel pokazuje **Relacje i wymiary**. Każdy wiersz ma:

- **Edytuj** (tylko wymiary): otwiera pole liczby;
- **Zaznacz**: zaznacza go w szkicu;
- **Usuń**: usuwa go.

Relacje tego samego rodzaju, które występują więcej niż raz, dzielą jeden wiersz, na przykład „Zgodność × 5” dla prostokąta powiązanego z początkiem układu. Kliknij wiersz, aby go otworzyć: każda relacja jest wymieniona według tego, co wiąże („punkt p2, punkt p4”), z własnym **Zaznacz** i **Usuń**. Sam wiersz ma:

- **Zaznacz**: zaznacza je wszystkie w szkicu;
- **Usuń wszystko**: usuwa je wszystkie jednym krokiem ({{key:Mod+Z}} je przywraca).

Grupa, która zawiera relację przeokreśloną, otwiera się sama, a jej nazwa jest czerwona. Wymiary są zawsze wymienione po jednym w wierszu, z ich wartościami.

Gdy zaznaczona jest geometria, lista pokazuje tylko **Relacje zaznaczenia**.
