---
title: Dokumenty i rewizje (skarbiec)
summary: Krok po kroku przez jedno prawdziwe zlecenie: umieść folder projektu z częściami i zespołami pod kontrolą, wypożycz część, zmień ją, zwróć z notatką, zwolnij, sprawdź, czego używa i zestawienie materiałów, co widzi druga osoba, gdy plik jest zablokowany, oraz jak to działa z folderami w chmurze.
keywords: skarbiec, dokumenty, poradnik, samouczek, wypożycz, zwróć, rewizja, zwolnienie, zatwierdzenie, blokada, historia, gdzie używany, zestawienie materiałów, bom, zespół, folder w chmurze, folder projektu, dwie osoby, udostępniony folder
from: 0a5e6983
---

## Co zrobisz

Jesteś Ana i pracujesz nad projektem Riverside Clinic razem z kolegą, Benem. Części i zespoły projektu leżą w jednym folderze, do którego oboje macie dostęp (dysk udostępniony, folder synchronizowany albo folder w chmurze). Na końcu jeden plik przejdzie od pierwszej kopii do zwolnionej rewizji **A**, zostanie zmieniony ponownie jako **B.1**, zobaczysz, kto co zrobił, i zobaczysz, co widzi Ben, gdy trzymasz plik.

Wszystko jest przechowywane w ukrytym folderze `.ccvault` obok Twoich plików: bez serwera, bez wysyłania czegokolwiek (wyjątkiem jest folder w chmurze, zob. ostatni krok). Wszystkie przyciski i reguły w jednym miejscu znajdziesz w temacie *Dokumenty: wypożyczanie, rewizje i zwolnienie*, jeśli Twoja aplikacja go ma.

## 1. Ustaw folder projektu

1. Wybierz {{ui:Dokumenty…}} w grupie **Plik** na pasku narzędzi.
2. Wybierz {{ui:Wybierz folder projektu}} i wskaż folder, w którym leżą części i zespoły projektu. (Foldery projektu działają w Studio i w przeglądarkach, które potrafią otworzyć folder, takich jak Chrome i Edge. W innych przeglądarkach panel o tym informuje.)
3. Wybierz {{ui:Zmień}} obok **Użytkownik:** i wpisz swoje imię, `Ana` (jeśli program o to zapyta, także nazwę tego komputera). Panel pokazuje teraz *Użytkownik: Ana na* oraz nazwę komputera. Imię trafia do każdej czynności.
4. Wybierz {{ui:Utwórz skarbiec w tym folderze}} i wpisz nazwę projektu, `Riverside clinic`. Panel pokazuje *Skarbiec uruchomiony dla Riverside clinic.*

## 2. Przejmij plik pod kontrolę

1. Otwórz **Pliki spoza skarbca** i wybierz {{ui:Dodaj}} obok `plates/Bracket.partcraft.json`.
2. Plik pojawia się w **Pliki w skarbcu** w rewizji **A.1**, w stanie **W trakcie pracy**. A.1 to jego pierwsza kopia; skarbiec przechowuje kopię każdej rewizji.

## 3. Wypożycz, zmień, zwróć

1. Wybierz {{ui:Otwórz}} obok `plates/Bracket.partcraft.json`. Część otwiera się w PartCraft, a panel się zamyka, żebyś mógł ją zobaczyć. Otwórz panel ponownie z {{ui:Dokumenty…}}.
2. Otwórz panel i wybierz {{ui:Wypożycz}}. Wiersz pokazuje teraz **Wypożyczone dla bieżącego użytkownika**. W `.ccvault/locks` powstaje plik blokady; nikt inny nie może wypożyczyć tego pliku, dopóki go nie zwrócisz.
3. Zmień część: edytuj wymiar, dodaj otwór. Zapis jest odrzucany, dopóki plik nie jest wypożyczony do bieżącego użytkownika, i podaje powód; Zapisz jako zawsze działa dla Twojej własnej kopii.
4. Otwórz panel, wybierz {{ui:Zwróć}} i wpisz, co się zmieniło (`Przesunięto drzwi`). Panel pokazuje *zwrócono jako A.2*. Plik w folderze projektu to teraz otwarta część, a blokada zniknęła. Zwrot bez żadnych zmian nie tworzy nowej rewizji.

Jeśli zmienisz zdanie, {{ui:Cofnij wypożyczenie}} oddaje plik bez nowej rewizji.

## 4. Przegląd i zwolnienie

1. Wybierz {{ui:Wyślij do przeglądu}}. Stan zmienia się na **Do przeglądu**, a plik jest tylko do odczytu.
2. Przed zatwierdzeniem wybierz {{ui:Ustawienia projektu}} i wypisz, kto może zatwierdzać (jedno nazwisko w wierszu), na przykład `Ben` i `Carla`, oraz zaznacz regułę, że zatwierdzający musi być kimś innym niż autor. Wybierz {{ui:Zapisz ustawienia}}. Od tej chwili sam skarbiec odrzuca zatwierdzenia od innych osób.
3. Ben (lub Carla) wybiera {{ui:Zatwierdź}} i wpisuje nazwisko zatwierdzającego. Stan zmienia się na **Zwolniony**, a rewizja na **A**, z *zatwierdzone przez* i nazwiskiem. Zwolniony plik jest tylko do odczytu. {{ui:Odeślij}} zwróciłoby go do stanu **W trakcie pracy** z podaniem powodu.

Nazwisko zatwierdzającego to nazwa wpisana w panelu; jest zapisem tego, kto zatwierdził, a nie dowodem tożsamości.

## 5. Nowa rewizja

1. Na zwolnionym pliku wybierz {{ui:Nowa rewizja}}. Rezerwujesz ją dla następnej litery.
2. Zmień plik, a potem wybierz {{ui:Zwróć}}. Rewizja to **B.1**, w trakcie pracy. Zwolnij ją w ten sam sposób, a stanie się **B**. {{ui:Cofnij wypożyczenie}} przed pierwszym zwrotem zostawia ją na **A**.

Litery rewizji idą A, B … Z, AA, AB. Jeśli Twój standard pomija niektóre litery, ustawienie projektu *Użyj sekwencji ASME Y14.35* pomija I, O, Q, S, X i Z w kolejnych rewizjach.

## 6. Sprawdź, co się działo

Wybierz nazwę pliku, aby otworzyć jego szczegóły:

- **{{ui:Historia}}**: każde zdarzenie, od najnowszego, z informacją, kto je wykonał, na którym komputerze i kiedy: *Zwrócono A.2* przez Anę, *Zwolniono* przez Bena i tak dalej.
- **{{ui:Rewizje}}**: tabela rewizji: każda zachowana rewizja z datą, osobą, która ją zwróciła, notatką i osobą, która ją zatwierdziła. Skarbiec przechowuje kopię każdej w `.ccvault/revs`.
- **{{ui:Używa}}**: części zespołu.
- **{{ui:Używany przez}}**: lista wszystkich zespołów w skarbcu, które zawierają tę część: zmieniasz wspornik i wiesz, które zespoły sprawdzić.

## Zespoły: co używają i zestawienie materiałów

Umieść zespół (`.partcraft.json`, zapisany w trybie Złożenie) w folderze i dodaj go. Wybierz jego nazwę: **Używa** wymienia części, które zawiera, z rewizją i stanem każdej; **Używany przez** przy części wymienia każdy zespół, który ją zawiera. {{ui:Zestawienie materiałów (CSV)}} zapisuje całą listę części, poziom po poziomie, z ilościami, rewizjami i stanami, do arkusza kalkulacyjnego. Zmień wspornik, a **Używany przez** wskaże, które zespoły sprawdzić.

## 7. Co widzi Ben, gdy trzymasz plik

Teraz wypożycz plik ponownie i poproś Bena, żeby otworzył ten sam folder projektu na swoim komputerze i otworzył panel. W wierszu pliku zobaczy **Wypożyczone przez Anę na** komputerze Any **od** godziny i nie zobaczy przycisku {{ui:Wypożycz}}. Jeśli mimo to spróbuje, skarbiec odmówi: blokada to plik, którego system nie utworzy drugi raz, więc dwie osoby nie mogą jednocześnie mieć pliku, nawet w tej samej ułamku sekundy, gdy folder leży na dysku w Studio. (W przeglądarce folder zapewnia tylko w miarę możliwości, a panel o tym informuje w sekcji **Folder**.)

Jeśli Ana jest nieobecna, a Ben potrzebuje pliku, {{ui:Zerwij wypożyczenie}} go zwalnia. Musi wpisać powód; trafia on do dziennika wraz z tym, czyje było wypożyczenie. Gdy projekt ma listę administratorów, tylko oni mogą to zrobić. Wypożyczenie starsze niż limit nieaktualności (domyślnie 14 dni) jest oznaczane jako *dawno temu*. Po zerwaniu spóźniony zwrot Any jest odrzucany, więc nie możecie nadpisać swoich zmian nawzajem.

## 8. Foldery w chmurze

Folder w chmurze to folder projektu przechowywany w chmurze Twojego zespołu, więc zespół nie potrzebuje wspólnego dysku. W Studio, po zalogowaniu na konto CadCraft, panel pokazuje {{ui:Otwórz folder w chmurze}} obok {{ui:Wybierz folder projektu}}. Wybierz go i wskaż folder, wymieniony jako przestrzeń robocza / folder. Właściciel przestrzeni roboczej tworzy folder najpierw, a pamięć w chmurze zespołu musi być aktywna. Wszystko powyżej działa tak samo; serwer zakłada blokadę, która jest ścisła między osobami. Jeśli nie jesteś zalogowany, panel o tym poinformuje. W zwykłej karcie przeglądarki przycisk chmury nie jest oferowany; użyj Studio.

## Wypróbuj

Wykonaj osiem kroków powyżej na kopii prawdziwego pliku. Kroki dla dwóch osób wymagają drugiej osoby albo dwóch okien z dwiema nazwami. Jeśli wypróbujesz to na prawdziwym udostępnionym folderze, strona Testy społeczności zawiera sprawdzenie, które pyta dokładnie o to, i przyjmuje wyniki.
