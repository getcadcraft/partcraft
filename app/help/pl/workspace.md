---
title: Ekran PartCraft
summary: Przegląd każdego paska i panelu: pasek narzędzi i jego zmiany, historia, fakty o części, widok 3D, panel właściwości i pasek stanu.
keywords: ekran, układ, pasek narzędzi, historia, drzewo elementów, właściwości, panel, pasek stanu, interfejs, ui, przegląd, pełny ekran
from: 5b5bb843
---

Ekran składa się z pięciu części: pasek narzędzi u góry, historia po lewej, widok 3D pośrodku, panel właściwości po prawej i pasek stanu na dole. Nad nimi wszystkimi znajduje się pasek aplikacji CadCraft.

## Pasek aplikacji

Cienki pasek na samej górze należy do strony CadCraft, a nie do samego PartCraft. Pokazuje nazwę aplikacji i miejsce, w którym działa, menu wersji, **O programie PartCraft**, przycisk trybu ekranu i przełącznik motywu Papier / Model.

- **Papier** to ciemne linie na jasnym arkuszu. **Model** to jasne linie na ciemnym tle. Kolory szkicu podążają za motywem.
- {{ui:Ustawienia}} (koło zębate lub {{key:Mod+,}}) ma kartę {{ui:PartCraft}}: który przycisk myszy obraca widok, kółko myszy lub gładzik oraz relacje podczas szkicowania. Zob. [Ustawienia PartCraft](topic:settings).
- Przycisk trybu ekranu lub {{key:Ctrl+Shift+F}} przełącza kolejno: normalny, pełny ekran i pełny ekran z ukrytymi paskami. Gdy paski są ukryte, przesuń wskaźnik do górnej krawędzi (lub stuknij tam), aby je przywrócić. {{key:Esc}} wraca do normalnego widoku. Ten klawisz to {{key:Ctrl+Shift+F}} także na Macu, a nie ⌘.

## Pasek narzędzi

Pasek narzędzi jest pogrupowany. Zmienia się zależnie od tego, co robisz, więc mieści się w jednym rzędzie:

| Grupa | Przyciski | Pokazywane |
|---|---|---|
| Plik | {{ui:Nowy}}, {{ui:Otwórz}}, {{ui:Zapisz}}, {{ui:Eksport}} (menu) | Zawsze |
| Szkic | {{ui:Szkic}} | Gdy żaden szkic nie jest otwarty |
| Szkic | {{ui:Wyjdź}}, {{ui:Linia}}, {{ui:Prostokąt}}, {{ui:Okrąg}}, {{ui:Łuk}}, {{ui:Punkt}}, {{ui:Linia osiowa}}, {{ui:Zaokrąglenie}}, {{ui:Wymiar}}, {{ui:Konstrukcja}} | Tylko gdy szkic jest otwarty |
| Elementy | {{ui:Wyciągnij}}, {{ui:Wytnij}}, {{ui:Obróć}}, {{ui:Otwór}}, {{ui:Liniowy}}, {{ui:Kołowy}}, {{ui:Lustro}}, {{ui:Zaokrąglenie}}, {{ui:Fazka}}, {{ui:Powłoka}}, {{ui:Więcej}} (menu: Wycięcie obrotowe, Płaszczyzna, Oś, Punkt, Przeciągnięcie, Loft, Pochylenie) | Na części, nie gdy szkic lub rysunek jest otwarty. Zaokrąglenie i fazka działają na prostych krawędziach między dwiema płaskimi ścianami; powłoka i pochylenie na płaskich ścianach. Przeciągnięcie i Loft nie są jeszcze zbudowane w tej wersji (wymagają dokładnego jądra); kliknięcie któregoś o tym mówi |
| Elementy | {{ui:Gotowe}} | Tylko gdy wskazujesz krawędzie lub ściany dla zaokrąglenia, fazki, powłoki albo pochylenia |
| Rysunek | {{ui:Rysunek}} | Na części (używalne, gdy część ma bryłę) |
| Rysunek | {{ui:Baza}}, {{ui:Ramka}}, {{ui:Wykończenie}}, {{ui:Szczegół}}, {{ui:PDF}}, {{ui:Wstecz}} | Tylko na arkuszu rysunku |
| Złożenie | {{ui:Złożenie}} | Na części (używalne, gdy część ma bryłę) |
| Złożenie | {{ui:Dodaj kopię}}, {{ui:Wstaw}}, {{ui:Połączenie}}, {{ui:Kolizja}}, {{ui:Edytuj część}}, {{ui:Zamknij}} | Tylko w złożeniu |
| Złożenie | {{ui:Wstecz}} | Gdy edytujesz część ze złożenia |
| Edycja | {{ui:Cofnij}}, {{ui:Ponów}}, {{ui:Kopiuj}}, {{ui:Wklej}}, {{ui:Więcej}} (menu: Wytnij, Kopiuj, Wklej, Wklej w miejscu, Duplikuj, Usuń, Zaznacz wszystko, Odznacz wszystko) | Zawsze; każda pozycja działa na szkicu, historii lub złożeniu, w którym jesteś |
| Widok | {{ui:Dopasuj}}, {{ui:Prostopadle do}}, {{ui:Widoki}} (menu: Pomiar, Właściwości masowe, Przekrój, Pochylenie, Zebra, Krzywizna, {{ui:Płaszczyzny bazowe}}, a potem Izometria, Przód, Tył, Góra, Dół, Prawo, Lewo) | Zawsze |

Najedź na przycisk, aby zobaczyć, co robi, i jego klawisz. Przycisk przyszarzony nie może być teraz użyty: na przykład przyciski elementów, gdy szkic jest otwarty, albo {{ui:Połączenie}} przed tym, jak złożenie ma dwie części.

Menu {{ui:Więcej}} w grupie Edycja wymienia każdą akcję edycji wraz z jej klawiszem. Na czym działają kopiuj i wklej, zależy od tego, gdzie jesteś; zob. [Kopiuj, wklej i duplikuj](topic:copy-paste). Przyszarzona pozycja mówi w podpowiedzi, dlaczego nie może teraz działać.

Menu {{ui:Eksport}} zawiera {{ui:STL, do druku 3D}}, {{ui:3MF, do druku 3D}}, {{ui:STEP AP242 (dokładna bryła)}}, {{ui:STEP AP214 (dokładna bryła)}}, {{ui:STEP (ścianki, jądro siatkowe)}}, {{ui:STEP AP214 (ścianki, jądro siatkowe)}}, {{ui:DXF szkicu albo płaskiej ściany}} i {{ui:Rysunek (PDF): widoki, przekrój, szczegół, GD&T}}. Pozycje dokładnego STEP zapisują okrągłe ściany na ich prawdziwych powierzchniach; pozycje ścianowe zapisują je jako płaskie ścianki.

## Historia (po lewej)

Panel po lewej to historia elementów części, lista, którą PartCraft przebudowuje od góry do dołu.

- Nagłówek to nazwa części („Part1", dopóki jej nie zmienisz).
- **Płaszczyzna Przód**, **Płaszczyzna Góra** i **Płaszczyzna Prawo** są pierwsze. Kliknij jedną, aby ją zaznaczyć; podświetla się w widoku.
- Poniżej są twoje elementy w kolejności, w jakiej je wykonano. Szkic, którego używa element, jest wcięty pod tym elementem.
- Flaga na prawym końcu wiersza mówi o jego stanie:

| Flaga | Znaczenie |
|---|---|
| (brak) | Zbudowany, a szkic w pełni zdefiniowany |
| − | Szkic niedookreślony (nadal może się przesunąć) |
| + | Szkic nadokreślony |
| ⚠ | Zbudowany z ostrzeżeniem (najedź, aby przeczytać) |
| ⚠ błąd | Element się nie udał. Najedź, aby przeczytać dlaczego, lub kliknij |
| ⚠ nie zbudowano | Element wymaga innego, który się nie udał albo jest wyłączony |
| wyłączony | Wyłączony (suppressed) |

- Każdy element pokazuje swoją główną liczbę po nazwie, na przykład „25 mm" dla Wyciągnięcia albo „Ø6.6 thru" dla otworu. Kliknij dwukrotnie liczbę albo naciśnij {{key:F2}} na wierszu, aby zmienić ją od razu. Zob. [Zmiana rozmiarów](topic:change-sizes).
- Kliknij element, aby go edytować po prawej. Kliknij dwukrotnie szkic, aby go otworzyć.
- Gdy cofasz do punktu, na liście pojawia się wiersz **Pasek cofnięcia · przywracanie**. Elementy poniżej są przyszarzone i nie zbudowane.
- Z zaznaczonym wierszem {{key:Up}} i {{key:Down}} przechodzą między wierszami, a {{key:Alt+Up}} / {{key:Alt+Down}} przesuwają sam element, o ile historia na to pozwala.

W złożeniu ten sam panel zamiast tego wymienia **Części** (pierwsza jest oznaczona jako „uziemiona") i **Połączenia**.

### Fakty o części

Pod historią pole **Część** wypisuje **Objętość**, **Pole powierzchni**, **Rozmiar (X × Y × Z)**, **Otwory przelotowe**, **Bryły**, **Trójkąty**, liczbę **Elementów** i ile z nich jest **Z błędem**. Objętości i pola są liczone dla bryły ściankowej zbudowanej przez jądro siatkowe, nieco mniejsze od prawdziwej wartości dla kształtów okrągłych (zob. [Elementy i ich opcje](topic:features#curves-resolution)).

W złożeniu pole ma nagłówek **Złożenie**: Części, Instancje, Połączenia, Niepołączone i Interferencja.

## Widok 3D (pośrodku)

Widok pokazuje bryłę, płaszczyzny bazowe i każdy szkic, którego jeszcze nie użył żaden element.

Płaszczyzny bazowe są rysowane w pełni, gdy część jest pusta. Gdy ma już bryłę, cofają się: rysowane blado, aby nie przykrywały części, a kliknięcia przechodzą przez nie do części. Wracają w pełni, gdy wybierasz, gdzie szkicować ({{ui:Szkic}} bez wskazania), i gdy zaznaczysz jedną w historii. {{ui:Widoki}} › {{ui:Płaszczyzny bazowe}} ukrywa je całkowicie; nadal się pokazują, gdy wybierasz miejsce do szkicowania. PartCraft zapamiętuje ten wybór.

- Przeciągnij, aby obrócić część; prawym lub środkowym przeciągnięciem przesuń widok; kółkiem przybliż w miejscu wskaźnika. Szczegóły w [Klawisze i mysz](topic:keyboard).
- Najedź na ścianę, krawędź lub płaszczyznę, aby zobaczyć, jak się podświetla. Kliknij, aby ją wskazać. Ściany podświetlają się w całości, a krawędzie są rysowane i wskazywane w całości. {{key:Shift}}+kliknięcie zbiera kilka krawędzi lub ścian; pozostają zaznaczone.
- Kostka widoku w prawym górnym rogu obraca się z częścią: kliknij ścianę, krawędź lub narożnik, aby patrzeć stamtąd, przeciągnij ją, aby obrócić, a przycisk z domkiem wraca do początku. Zob. [Kostka widoku](topic:view-cube).
- Zaznaczony Wyciągnij pokazuje pomarańczową strzałkę na swojej ścianie końcowej, a Obrót zakrzywioną strzałkę na końcu skrętu: przeciągnij ją, aby zmienić głębokość lub kąt, albo wpisz wartość w polu obok. Zob. [Zmiana rozmiarów](topic:change-sizes#drag-it-in-the-view).
- Gdy część jest pusta, pole o nagłówku **Rozpocznij część** wymienia pierwsze kroki.
- Upuść plik `.partcraft.json` lub `.partcraft-asm.json` w dowolnym miejscu widoku, aby go otworzyć. Plik `.step`, `.stp`, `.stl`, `.obj`, `.3mf` lub `.3dm` upuszczony tam otwiera się jako bryła.

### Gdy wskazujesz krawędzie lub ściany

Po {{ui:Zaokrąglenie}}, {{ui:Fazka}} lub {{ui:Powłoka}} bez niczego wskazanego (albo {{ui:Wskaż krawędzie}} na takim elemencie) część pokazuje się tak, jak wyglądała przed tym elementem. Kliknij krawędzie lub ściany, aby je dodać lub usunąć; ich znaczniki pokazują, co jest w zbiorze. {{ui:Gotowe}} albo {{key:Esc}} kończy. Zob. [Zaokrąglaj, fazuj i wydrąż](topic:fillet-chamfer-shell).

### Na arkuszu rysunku

{{ui:Rysunek}} zastępuje widok 3D arkuszem rysunkowym A3. Kółko przybliża, prawe lub środkowe przeciągnięcie przesuwa, a {{key:F}} dopasowuje. Zob. [Twórz rysunek](topic:drawing-pdf).

### Gdy szkic jest otwarty

Widok obraca się, by patrzeć prosto na płaszczyznę szkicu, a na wierzchu pojawia się warstwa szkicu 2D. Część pokazuje tylko elementy zrobione przed tym szkicem. Pasek w lewym górnym rogu pokazuje znacznik stanu szkicu („W pełni zdefiniowany", „Niedookreślony · 3 stopnie swobody" i tak dalej) oraz jego nazwę, na przykład „Sketch2 na ścianie Extrude1".

## Panel właściwości (po prawej)

Panel po prawej pokazuje to, co jest zaznaczone, a jego nagłówek to nazywa:

- **Część** (nic nie zaznaczono): **Nazwa** części i ustawienie **Krzywe**.
- Płaszczyzna: przycisk {{ui:Szkic na niej}}.
- **Ściana**: jakiego jest rodzaju (płaska ściana, walec z promieniem i osią, stożek, sfera lub torus), jej pole, który element ją zrobił, a dla płaskiej ściany {{ui:Szkic na tej ścianie}}, {{ui:Prostopadle do}}, {{ui:Eksportuj ścianę jako DXF}}, {{ui:Wyciągnij z niej}}, {{ui:Wytnij w niej}} i {{ui:Otwór tutaj}} (zob. [Przeciągnij lub pchnij całą ścianę](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Krawędź**: jej rodzaj (prosta, okrąg z środkiem i promieniem albo krzywa), długość i dwie ściany, między którymi leży (na przykład „Extrude1 end face and Extrude1 side", czyli ściana końcowa Extrude1 i bok Extrude1), z przyciskami {{ui:Zaokrąglenie}} i {{ui:Fazka}}.
- Kilka krawędzi lub ścian wskazanych z {{key:Shift}}: ile ich jest, z przyciskami {{ui:Zaokrąglenie}} i {{ui:Fazka}} dla krawędzi oraz {{ui:Wyczyść}}.
- Element: jego liczby i opcje, wymiary jego szkicu, a potem {{ui:Wyłącz}}, {{ui:Cofnij do tego miejsca}}, {{ui:Przesuń w górę}}, {{ui:Przesuń w dół}}, {{ui:Usuń}} i jego **Nazwa**.
- Otwarty szkic: jego stan, więzy, które możesz dodać do zaznaczenia, lista więzów i wymiarów, **Dodaj przez współrzędne**, a także {{ui:Wyjdź ze szkicu}}, {{ui:Dopasuj}} i {{ui:Eksportuj jako DXF}}.
- Na arkuszu rysunku: ustawienia przekroju i szczegółu albo wybrany symbol GD&T.
- W złożeniu: złożenie, wybrana część lub wybrane połączenie.

Każde pole liczbowe działa po naciśnięciu {{key:Enter}} lub {{key:Tab}}, albo po kliknięciu poza nim. Część przebudowuje się od razu; nie ma przycisku OK. Użyj {{key:Mod+Z}}, aby wrócić.

## Pasek stanu (na dole)

- Po lewej współrzędne wskaźnika w szkicu (tylko gdy szkic jest otwarty).
- Pośrodku komunikaty: co zrobić dalej i dlaczego coś zostało odrzucone. Czytaj go, gdy nic nie wydaje się dziać.
- Blisko prawej strony etykieta jądra: w tej wersji zawsze „jądro siatkowe". Najedź, aby zobaczyć, co to znaczy. Zob. [Jądro siatkowe](topic:solid-kernels).
- Po prawej etykieta: „Rebuilding…" podczas przebudowy, potem „Rebuilt in … ms", gdy wszystko jest dobrze, albo „1 feature failing" (1 element z błędem). W złożeniu pisze „Placed in … ms" albo liczy problemy połączeń.

Zobacz też [Zacznij instrukcję w Illustrate](topic:illustrate): obszar roboczy, który tworzy instrukcje montażu z twoich części i złożeń.

## Na wąskim ekranie

Do 760 pikseli szerokości, na przykład na telefonie, widok zachowuje ekran: pasek narzędzi jest jednym rzędem, który przewija się w bok, a panele otwierają się jako arkusze z paska u dołu. {{ui:Narzędzia}} chowa pasek narzędzi, a {{ui:Przesunięcie}} przenosi go na dół. Zob. [Gładzik, dotyk i małe ekrany](topic:trackpad-and-touch).
