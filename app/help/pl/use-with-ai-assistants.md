---
title: Używaj PartCraft z asystentem AI
summary: Pozwól własnemu asystentowi AI lub skryptowi pracować z otwartą częścią: odczytać jej elementy, parametry i masę, zmienić parametr i przebudować, uruchomić skrypt, wyeksportować i zapisać. Wyłączone, dopóki tego nie włączysz.
keywords: ai, asystent, agent, mcp, model context protocol, skrypt, automatyzacja, parametry, właściwości masowe, stl, step, 3mf, uprawnienia, rozłączenie, aktywność, foldery
from: e66d3470
---

## Czego się dowiesz

Jak pozwolić asystentowi AI (albo skryptowi, który napisałeś) przyjrzeć się części, którą masz otwartą, zmienić jej parametry, uruchomić skrypt i ją wyeksportować, oraz jak decydujesz, czego może dotykać.

PartCraft nie ma **własnej AI** i niczego nigdzie nie wysyła. Asystenta przynosisz sam: dowolny program, który obsługuje Model Context Protocol (MCP). PartCraft daje mu tylko narzędzia, a ty wybierasz, które.

## Włączanie

1. Otwórz {{ui:Ustawienia}} (koło zębate na pasku aplikacji lub {{key:Mod+,}}) i przejdź do karty {{ui:PartCraft}}.
2. W sekcji {{ui:Asystenci}} zaznacz **Zezwalaj asystentom AI i skryptom na używanie PartCraft**. Jest wyłączone, dopóki tego nie zrobisz.
3. Wybierz, co może robić. **Odczyt** jest zaznaczony na początku; zaznacz pozostałe tylko wtedy, gdy są potrzebne.
4. Aby pozwolić mu eksportować i zapisywać do folderu, wybierz {{ui:Dodaj folder…}} w sekcji **Foldery, z których może korzystać**, a potem wskaż folder w oknie dialogowym Studio.

Asystenci łączą się przez **CadCraft Studio** na twoim komputerze: Studio pokazuje adres i token do wklejenia w asystencie. Karta przeglądarki nie może otworzyć połączenia dla asystenta.

## O co asystent może poprosić

| Narzędzie | Uprawnienie | Co robi |
|---|---|---|
| `part_describe`, `features_list` | Odczyt | Elementy w kolejności, z informacją, co się zbudowało, a co nie, materiał, objętość bryły i jej rozmiar |
| `params_list` | Odczyt | Parametry i każdą liczbę, którą może sterować równanie, wraz z ich wartościami |
| `mass_properties` | Odczyt | Objętość, pole powierzchni, środek masy i moment bezwładności względem niego; masę, gdy część ma materiał |
| `param_set` | Edycja | Ustawia parametr albo liczbę elementu i przebudowuje. Jeden krok, który możesz cofnąć |
| `script_run` | Edycja | Uruchamia skrypt CraftScript, Lua lub Python tak, jak robi to obszar {{ui:Skrypt}}: w izolacji, bez plików i sieci. Część się nie zmienia |
| `part_export` | Eksport | STL, 3MF, STEP lub OpenUSD (.usdz, .usda, .usdc), tak jak zapisują je {{ui:Plik}} › {{ui:Eksport}} |
| `link_push` | Edycja | Aktualizuje model połączony z innego programu (zob. [Utrzymuj model .3dm na bieżąco](topic:live-3dm-link)) |
| `link_status` | Odczyt | Mówi, czy połączony model nadal tu jest i kiedy ostatnio się aktualizował |
| `part_save` | Zapis | Własne {{ui:Zapisz}} PartCraft |
| `illustrate_export` | Eksport | Instrukcję z obszaru {{ui:Illustrate}} jako PDF lub linearne grafiki SVG jej widoków, jako interaktywny plik 3D albo jej instrukcje jako PDF lub stronę internetową, tak jak zapisują je menu {{ui:Eksport}} i {{ui:Instrukcje}} obszaru roboczego ([Instrukcje](topic:illustrate)) |

:::note
Ta wersja używa jądra siatkowego: objętości pochodzą z trójkątów (nieco mniejsze niż prawdziwa zakrzywiona bryła), a STEP jest zapisywany jako ścianki, czyli trójkąty zamiast dokładnych powierzchni.
:::

## Ty masz kontrolę

- **Każda zmiana to jeden krok cofnięcia**, oznaczony dla asystenta, na przykład „Assistant: set l = 45" (Asystent: ustaw l = 45). Naciśnij {{key:Mod+Z}}, aby ją cofnąć.
- **Wiesz, kiedy asystent jest podłączony.** Przycisk na pasku aplikacji podaje nazwę asystenta, gdy jest połączony. Kliknij go, aby zobaczyć, co może robić, albo aby go **Rozłączyć**.
- **Aktywność.** {{ui:Ustawienia}} › {{ui:PartCraft}} › {{ui:Asystenci}} › {{ui:Aktywność}} wymienia każde wywołanie; {{ui:Zapisz dziennik}} zachowuje jego kopię.
- **Foldery.** Asystent czyta i zapisuje pliki tylko w folderach, które dodałeś; {{ui:Usuń}} odbiera folder od razu.

## Bez otwierania PartCraft

Serwer plików CadCraft dla asystentów (`npx @getcadcraft/mcp`) i wiersz poleceń `cadcraft` otwierają części `.partcraft.json` z własnym kodem PartCraft i jądrem siatkowym, bez okna: te same narzędzia do odczytu, ustawiania parametrów, skrypty CraftScript, eksporty (także OpenUSD) i zapis. `cadcraft convert bracket.partcraft.json bracket.stl` buduje część i zapisuje ją z wiersza poleceń. Instrukcje (`.partcraft-manual.json`) też można eksportować tam: `illustrate_export` albo `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (dodaj `--instructions`, aby uzyskać instrukcje).

## Gdy coś nie działa

- **„needs the edit permission":** zaznacz **Edycja** w sekcji {{ui:Asystenci}}, a potem zapytaj ponownie.
- **„driven by the equation":** ta liczba zależy od parametru; poproś asystenta, aby ustawił parametr.
- **Jego zmiana była błędna:** naciśnij {{key:Mod+Z}}.

## Zobacz także

- [Przepisy dla asystentów AI](common:assistants-recipes): przykłady z krokami, każdy z narzędziami, których używa.
