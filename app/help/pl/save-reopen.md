---
title: Zapisywanie, ponowne otwieranie i dalsza praca
summary: Zapisuj części i złożenia na komputerze, nadawaj im nazwy, otwieraj ponownie przyciskiem, skrótem lub przeciąganiem, zachowuj wersje i nie trać pracy w karcie przeglądarki.
keywords: zapisz, otwórz, ponownie otwórz, wczytaj, pobierz, wersje, kopia zapasowa, zmień nazwę, nazwa pliku, utracona praca, opuść stronę, partcraft.json, partcraft-asm.json, nowa część
from: c18a5abc
---

PartCraft nie zachowuje niczego między wizytami. Twoja część istnieje w karcie przeglądarki, dopóki nie zapiszesz jej jako pliku, i wraca po otwarciu tego pliku.

## Zapisywanie części

1. Nadaj części nazwę: kliknij puste miejsce w widoku, aby nic nie było zaznaczone, wpisz **Nazwa** w prawym panelu i naciśnij {{key:Enter}}. Nagłówek historii zmieni się zgodnie z nazwą.
2. Naciśnij {{key:Mod+S}} lub wybierz {{ui:Zapisz}}.
3. Przeglądarka pobiera `<nazwa>.partcraft.json`. Pasek stanu pokazuje: „Zapisano Bracket.partcraft.json (pełna historia; otwórz go tutaj, aby dalej edytować).”

Jeśli szkic jest otwarty, zapisanie najpierw go zamyka.

Plik zawiera każdy szkic, relację, wymiar i element, a także wyłączone elementy, pozycję cofnięcia (rollback), ustawienia arkusza rysunkowego i uwagi GD&T oraz pełny tekst każdej zaimportowanej bryły STEP. Lista cofnięć nie jest zapisywana.

## Zapisywanie złożenia

W złożeniu ten sam {{ui:Zapisz}} lub {{key:Mod+S}} pobiera `<nazwa złożenia>.partcraft-asm.json`. Każda część jest zapisana wewnątrz niego: do ponownego otwarcia nie potrzebujesz osobnych plików części.

Gdy edytujesz część z poziomu złożenia, {{key:Mod+S}} zapisuje tylko tę część jako `.partcraft.json`. Aby zapisać całe złożenie, najpierw wybierz {{ui:Wstecz}}, a potem zapisz.

## Ponowne otwieranie

Wykonaj jedną z poniższych czynności:

- wybierz {{ui:Otwórz}} lub naciśnij {{key:Mod+O}}, a następnie wskaż plik;
- przeciągnij plik z {{pick:mac=Finder|windows=File Explorer|linux=twój menedżer plików}} na widok 3D (pojawi się komunikat „Upuść część PartCraft, aby ją otworzyć”).

PartCraft rozpoznaje części od złożeń po zawartości, więc oba otwierają się tak samo. Plik `.step` lub `.stp` otwiera się jako zaimportowana bryła: zobacz [Otwieranie pliku STEP i dalsza praca na nim](topic:import-step). Pasek stanu potwierdza: „Otwarto Bracket.partcraft.json: 7 elementów.” albo „Otwarto Hinge.partcraft-asm.json: 3 części, 2 połączenia.”

Jeśli część na ekranie ma niezapisane zmiany, PartCraft najpierw pyta: {{ui:Anuluj}}, {{ui:Odrzuć zmiany}} lub {{ui:Najpierw zapisz}}.

:::warning
Przed otwarciem pliku części zamknij złożenie ({{ui:Zamknij}}). Jeśli otworzysz część, gdy na ekranie jest złożenie, część wczyta się za nim i będzie widoczna dopiero po zamknięciu złożenia. Otwarcie pliku złożenia zastępuje też niezapisane złożenie bez pytania, dlatego najpierw je zapisz.
:::

## Zacznij od nowa

{{ui:Nowy}} tworzy pustą „Part1”. Jeśli są niezapisane zmiany, najpierw o to pyta, a otwarte złożenie zamyka (pytając, czy jest niezapisane).

## Zachowywanie wersji

Każdy zapis to nowe pobranie, więc wersje możesz zachować po prostu, zachowując pliki:

- Przed zapisem umieść w nazwie wersję lub datę: „Bracket rev B”.
- Przeglądarka może dodać „ (1)”, „ (2)”, jeśli plik o tej samej nazwie jest już w folderze pobranych. Najnowszy jest ten z najwyższym numerem, albo sprawdź datę w {{pick:mac=Finder|windows=File Explorer|linux=twój menedżer plików}}.
- Przenieś gotowe pliki z folderu pobranych do folderu projektu.

Zobacz [Gdzie trafiają Twoje pliki](common:your-files), gdzie na każdym systemie trafiają pobrane pliki.

## Nie trać pracy

- Zapisz przed zamknięciem karty, przeładowaniem strony lub dłuższym uśpieniem komputera. Przeglądarka zapyta „Opuścić stronę?”, jeśli spróbujesz zamknąć przy niezapisanych zmianach, ale awaria lub zamknięty laptop nie daje żadnego ostrzeżenia.
- Okna prywatne lub incognito działają, ale nic poza tym się nie zmienia: plik nadal jest jedyną kopią.
- Zapis w chmurze i historia wersji nie są jeszcze dostępne.
