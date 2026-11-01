---
title: Ekran PartCraft
summary: Przegląd każdego paska i panelu: pasek narzędzi i jak się zmienia, historia, dane części, widok 3D, panel właściwości i pasek stanu.
keywords: ekran, układ, pasek narzędzi, historia, drzewo elementów, właściwości, panel, pasek stanu, interfejs, ui, przegląd, pełny ekran
from: 7394fc49
---

Ekran ma pięć części: pasek narzędzi u góry, historię po lewej, widok 3D pośrodku, panel właściwości po prawej i pasek stanu na dole. Nad wszystkim znajduje się pasek aplikacji CadCraft.

## Pasek aplikacji

Cienki pasek na samej górze należy do witryny CadCraft, nie do samego PartCraft. Pokazuje nazwę aplikacji i miejsce, w którym działa, menu wersji, **O PartCraft**, przycisk trybu ekranu i przełącznik motywu Papier / Model.

- **Papier** to ciemne linie na jasnym arkuszu. **Model** to jasne linie na ciemnym tle. Kolory szkicu podążają za motywem.
- {{ui:Ustawienia}} (koło zębate albo {{key:Mod+,}}) mają kartę {{ui:PartCraft}}: który przycisk myszy obraca widok, kółko myszy albo panel dotykowy i relacje podczas szkicowania. Zobacz [Ustawienia PartCraft](topic:settings).
- Przycisk trybu ekranu albo {{key:Ctrl+Shift+F}} przełącza kolejno: normalny, pełny ekran i pełny ekran z ukrytymi paskami. Przy ukrytych paskach przesuń wskaźnik do górnej krawędzi (albo stuknij tam), aby je przywrócić. {{key:Esc}} wraca do normalnego. Na Macu ten klawisz to także {{key:Ctrl+Shift+F}}, nie ⌘.

## Pasek narzędzi

Pasek narzędzi jest pogrupowany. Zmienia się w zależności od tego, co robisz, dzięki czemu mieści się w jednym wierszu:

| Grupa | Przyciski | Kiedy widoczne |
|---|---|---|
| Plik | {{ui:Nowy}}, {{ui:Otwórz}}, {{ui:Zapisz}}, {{ui:Eksportuj}} (menu) | Zawsze |
| Szkic | {{ui:Szkic}} | Gdy żaden szkic nie jest otwarty |
| Szkic | {{ui:Wyjdź}}, {{ui:Linia}}, {{ui:Prostokąt}}, {{ui:Okrąg}}, {{ui:Łuk}}, {{ui:Punkt}}, {{ui:Linia osiowa}}, {{ui:Zaokrąglenie}}, {{ui:Wymiar}}, {{ui:Konstrukcja}} | Tylko gdy szkic jest otwarty |
| Elementy | {{ui:Wyciągnij}}, {{ui:Wytnij}}, {{ui:Obróć}}, {{ui:Otwór}}, {{ui:Liniowy}}, {{ui:Kołowy}}, {{ui:Lustro}}, {{ui:Zaokrąglenie}}, {{ui:Fazka}}, {{ui:Powłoka}}, {{ui:Więcej}} (menu: Wycięcie obrotowe, Płaszczyzna, Oś, Punkt, Przeciągnięcie, Loft, Pochylenie) | Na części, nie gdy otwarty jest szkic albo rysunek. Zaokrąglenie i Fazka działają na prostych krawędziach między dwiema płaskimi ścianami; Powłoka i Pochylenie na płaskich ścianach. Przeciągnięcie i Loft nie są jeszcze zbudowane w tej wersji (wymagają dokładnego jądra); kliknięcie któregoś o tym informuje |
| Elementy | {{ui:Gotowe}} | Tylko gdy wskazujesz krawędzie albo ściany do zaokrąglenia, fazki, powłoki lub pochylenia |
| Rysunek | {{ui:Rysunek}} | Na części (dostępne, gdy część ma bryłę) |
| Rysunek | {{ui:Baza}}, {{ui:Ramka}}, {{ui:Wykończenie}}, {{ui:Szczegół}}, {{ui:PDF}}, {{ui:Wstecz}} | Tylko na arkuszu rysunku |
| Złożenie | {{ui:Złożenie}} | Na części (dostępne, gdy część ma bryłę) |
| Złożenie | {{ui:Dodaj kopię}}, {{ui:Wstaw}}, {{ui:Połączenie}}, {{ui:Kolizja}}, {{ui:Edytuj część}}, {{ui:Zamknij}} | Tylko w złożeniu |
| Złożenie | {{ui:Wstecz}} | Podczas edycji części ze złożenia |
| Edycja | {{ui:Cofnij}}, {{ui:Ponów}}, {{ui:Kopiuj}}, {{ui:Wklej}}, {{ui:Więcej}} (menu: Wytnij, Kopiuj, Wklej, Wklej w miejscu, Duplikuj, Usuń, Zaznacz wszystko, Odznacz wszystko) | Zawsze; każda pozycja działa na szkic, historię albo złożenie, w którym jesteś |
| Widok | {{ui:Dopasuj}}, {{ui:Prostopadle do}}, {{ui:Widoki}} (menu: Pomiar, Właściwości masowe, Przekrój, Pochylenie, Zebra, Krzywizna, {{ui:Płaszczyzny bazowe}}, potem Izometria, Przód, Tył, Góra, Dół, Prawo, Lewo) | Zawsze |

Najedź na przycisk, aby zobaczyć, co robi i jaki ma klawisz. Wyszarzony przycisk nie może być teraz użyty: na przykład przyciski elementów, gdy szkic jest otwarty, albo {{ui:Połączenie}}, zanim złożenie ma dwie części.

Menu {{ui:Więcej}} w grupie Edycja wymienia każdą czynność edycji z jej klawiszem. To, na czym działają kopiowanie i wklejanie, zależy od miejsca, w którym jesteś; zobacz [Kopiuj, wklej i duplikuj](topic:copy-paste). Podpowiedź wyszarzonej pozycji mówi, dlaczego nie może teraz działać.

Menu {{ui:Eksportuj}} zawiera {{ui:STL, do druku 3D}}, {{ui:3MF, do druku 3D}}, {{ui:STEP AP242 (dokładna bryła)}}, {{ui:STEP AP214 (dokładna bryła)}}, {{ui:STEP (ścianki, jądro siatkowe)}}, {{ui:STEP AP214 (ścianki, jądro siatkowe)}}, {{ui:DXF szkicu albo płaskiej ściany}} i {{ui:Rysunek (PDF): widoki, przekrój, szczegół, GD&T}}. Dwie pozycje dokładnego STEP są wyszarzone: nie są jeszcze zbudowane w tej wersji, więc użyj {{ui:STEP (ścianki, jądro siatkowe)}}.

## Historia (po lewej)

Panel po lewej to historia elementów części, czyli lista, z której PartCraft przebudowuje część od góry do dołu.

- Nagłówek to nazwa części („Część1”, dopóki jej nie zmienisz).
- **Płaszczyzna przód**, **Płaszczyzna góra** i **Płaszczyzna prawo** są pierwsze. Kliknij jedną, aby ją zaznaczyć; zostanie podświetlona w widoku.
- Pod nimi są Twoje elementy w kolejności, w jakiej powstały. Szkic używany przez element jest wcięty pod tym elementem.
- Flaga na prawym końcu wiersza mówi o jego stanie:

| Flaga | Znaczenie |
|---|---|
| (brak) | Zbudowany, a szkic jest w pełni określony |
| − | Szkic niedookreślony (nadal może się przesuwać) |
| + | Szkic nadmiernie określony |
| ⚠ | Zbudowany, z ostrzeżeniem (najedź, aby je przeczytać) |
| ⚠ błąd | Element się nie powiódł. Najedź, aby przeczytać dlaczego, albo kliknij |
| ⚠ niezbudowany | Element potrzebuje innego, który się nie powiódł albo jest wyłączony |
| wył. | Wyłączony |

- Każdy element pokazuje swoją główną liczbę po nazwie, na przykład „25 mm” dla Wyciągnięcia albo „Ø6.6 thru” dla otworu. Kliknij tę liczbę dwukrotnie albo naciśnij {{key:F2}} na wierszu, aby zmienić ją na miejscu. Zobacz [Zmieniaj wymiary](topic:change-sizes).
- Kliknij element, aby edytować go po prawej. Kliknij szkic dwukrotnie, aby go otworzyć.
- Po cofnięciu na liście pojawia się wiersz **Pasek cofnięcia · przewiń do przodu**. Elementy pod nim są wyszarzone i niezbudowane.
- Przy aktywnym wierszu {{key:Up}} i {{key:Down}} przechodzą między wierszami, a {{key:Alt+Up}} / {{key:Alt+Down}} przesuwają sam element, o ile historia na to pozwala.

W złożeniu ten sam panel wyświetla zamiast tego **Części** (pierwsza jest oznaczona „zakotwiczona”) i **Połączenia**.

### Dane części

Pod historią ramka **Część** wyświetla **Objętość**, **Pole powierzchni**, **Rozmiar (X × Y × Z)**, **Otwory przelotowe**, **Bryły**, **Trójkąty**, liczbę **Elementów** i ile jest **Z błędem**. Objętości i pola dotyczą bryły z fasetkami zbudowanej jądrem siatkowym, dla okrągłych kształtów nieco poniżej prawdziwej wartości (zobacz [Elementy i ich opcje](topic:features#curves-resolution)).

W złożeniu ramka ma nagłówek **Złożenie**: Części, Egzemplarze, Połączenia, Niepołączone i Kolizje.

## Widok 3D (pośrodku)

Widok pokazuje bryłę, płaszczyzny bazowe i każdy szkic, którego jeszcze nie użył żaden element.

Płaszczyzny bazowe są rysowane w całości, dopóki część jest pusta. Gdy ma bryłę, cofają się: są rysowane blado, by nie zasłaniały części, a kliknięcia przechodzą przez nie do części. Wracają w całości, gdy wybierasz, gdzie szkicować ({{ui:Szkic}} bez niczego wskazanego) i gdy zaznaczysz jedną w historii. {{ui:Widoki}} › {{ui:Płaszczyzny bazowe}} ukrywa je całkiem; nadal są widoczne, gdy wybierasz, gdzie szkicować. PartCraft zapamiętuje ten wybór.

- Przeciągnij, aby obrócić część, przeciągnij prawym lub środkowym przyciskiem, aby przesunąć widok, a kółkiem powiększaj w miejscu wskaźnika. Szczegóły w [Klawisze i mysz](topic:keyboard).
- Najedź na ścianę, krawędź albo płaszczyznę, aby ją podświetlić. Kliknij, aby ją wskazać. Ściany podświetlają się w całości, a krawędzie są rysowane i wskazywane w całości. {{key:Shift}}+kliknięcie zbiera kilka krawędzi albo ścian. Pozostają zaznaczone.
- Kostka widoku w prawym górnym rogu obraca się wraz z częścią: kliknij ścianę, krawędź albo narożnik, aby spojrzeć stamtąd, przeciągnij, aby obrócić, przycisk domku wraca do początku. Zobacz [Kostka widoku](topic:view-cube).
- Zaznaczone Wyciągnięcie pokazuje pomarańczową strzałkę na ścianie końcowej, Obrót zakrzywioną strzałkę na końcu obrotu: przeciągnij ją, aby zmienić głębokość albo kąt, albo wpisz wartość w polu obok. Zobacz [Zmieniaj wymiary](topic:change-sizes#drag-it-in-the-view).
- Gdy część jest pusta, ramka z nagłówkiem **Zacznij część** wymienia pierwsze kroki.
- Upuść plik `.partcraft.json` albo `.partcraft-asm.json` w dowolnym miejscu widoku, aby go otworzyć. Plik `.step`, `.stp`, `.stl`, `.obj`, `.3mf` albo `.3dm` upuszczony tam otwiera się jako bryła.

### Podczas wskazywania krawędzi lub ścian

Po {{ui:Zaokrąglenie}}, {{ui:Fazka}} lub {{ui:Powłoka}} bez niczego wskazanego (albo {{ui:Wskaż krawędzie}} na takim elemencie) część pokazuje się taka, jaka była przed tym elementem. Klikaj krawędzie lub ściany, aby je dodać albo odjąć; ich oznaczenia pokazują, co jest uwzględnione. {{ui:Gotowe}} albo {{key:Esc}} kończy. Zobacz [Zaokrąglaj, fazuj i drąż](topic:fillet-chamfer-shell).

### Na arkuszu rysunku

{{ui:Rysunek}} zastępuje widok 3D arkuszem rysunku A3. Kółko powiększa, przeciąganie prawym lub środkowym przyciskiem przesuwa, {{key:F}} dopasowuje. Zobacz [Zrób rysunek](topic:drawing-pdf).

### Gdy szkic jest otwarty

Widok obraca się tak, by patrzeć wprost na płaszczyznę szkicu, a na wierzchu pojawia się warstwa szkicu 2D. Część pokazuje tylko elementy zrobione przed tym szkicem. Pasek w lewym górnym rogu pokazuje znacznik stanu szkicu („W pełni określony”, „Niedookreślony · 3 stopnie swobody” i tak dalej) oraz jego nazwę, taką jak „Szkic2 na ścianie Wyciągnięcia1”.

## Panel właściwości (po prawej)

Panel po prawej pokazuje to, co jest zaznaczone, a jego nagłówek to nazywa:

- **Część** (nic nie zaznaczono): **Nazwa** części i ustawienie **Krzywe**.
- Płaszczyzna: przycisk {{ui:Szkic na niej}}.
- **Ściana**: jakiego jest rodzaju (Ściana płaska, Walec z promieniem i osią, Stożek, Kula albo Torus), jej pole, który element ją utworzył, a dla płaskiej ściany {{ui:Szkic na tej ścianie}}, {{ui:Prostopadle do}}, {{ui:Eksportuj ścianę jako DXF}}, {{ui:Wyciągnij z niej}}, {{ui:Wytnij w niej}} i {{ui:Otwór tutaj}} (zobacz [Ciągnij lub wciskaj całą ścianę](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Krawędź**: jej rodzaj (prosta, okrąg ze środkiem i promieniem albo krzywa), jej długość i dwie ściany, między którymi leży (na przykład „ściana końcowa Wyciągnięcia1 i bok Wyciągnięcia1”), z przyciskami {{ui:Zaokrąglenie}} i {{ui:Fazka}}.
- Kilka krawędzi albo ścian wskazanych z {{key:Shift}}: ile ich jest, z przyciskami {{ui:Zaokrąglenie}} i {{ui:Fazka}} dla krawędzi oraz {{ui:Wyczyść}}.
- Element: jego liczby i opcje, wymiary jego szkicu, a potem {{ui:Wyłącz}}, {{ui:Cofnij do tego miejsca}}, {{ui:Przesuń w górę}}, {{ui:Przesuń w dół}}, {{ui:Usuń}} i jego **Nazwa**.
- Otwarty szkic: jego stan, relacje, które możesz dodać do zaznaczenia, lista relacji i wymiarów, **Dodaj według współrzędnych** oraz {{ui:Wyjdź ze szkicu}}, {{ui:Dopasuj}} i {{ui:Eksportuj jako DXF}}.
- Na arkuszu rysunku: ustawienia przekroju i szczegółu albo wybrany symbol GD&T.
- W złożeniu: złożenie, wybrana część albo wybrane połączenie.

Każde pole liczby działa po naciśnięciu {{key:Enter}} lub {{key:Tab}} albo po kliknięciu poza nim. Część przebudowuje się natychmiast; nie ma przycisku OK. Użyj {{key:Mod+Z}}, aby wrócić.

## Pasek stanu (na dole)

- Po lewej współrzędne wskaźnika w szkicu (tylko gdy szkic jest otwarty).
- Pośrodku komunikaty: co zrobić dalej i dlaczego coś odrzucono. Przeczytaj go, gdy nic się nie dzieje.
- Bliżej prawej znacznik jądra: w tej wersji zawsze „Jądro siatkowe”. Najedź, aby zobaczyć, co to znaczy. Zobacz [Jądro siatkowe](topic:solid-kernels).
- Po prawej znacznik: „Przebudowywanie…” podczas przebudowy części, potem „Przebudowano w … ms”, gdy wszystko jest w porządku, albo „1 element z błędem”. W złożeniu pokazuje „Ustawiono w … ms” albo liczy problemy połączeń.

Zobacz też [Zacznij instrukcję w Illustrate](topic:illustrate): obszar roboczy, który tworzy instrukcje montażu z Twoich części i złożeń.

## Na wąskim ekranie

Przy szerokości do 760 pikseli, na przykład na telefonie, widok zachowuje ekran: pasek narzędzi to jeden wiersz przewijany na boki, a panele otwierają się jako arkusze z paska na dole. {{ui:Narzędzia}} ukrywa pasek narzędzi, a {{ui:Przenieś}} umieszcza go na dole. Zobacz [Panel dotykowy, dotyk i małe ekrany](topic:trackpad-and-touch).
