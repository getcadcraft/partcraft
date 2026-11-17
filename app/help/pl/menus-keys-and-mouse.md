---
title: Menu, klawisze i mysz
summary: Wybierz styl menu pasujący do dotychczasowego sposobu pracy, przypisz dowolnemu poleceniu własny klawisz, przenieś polecenia między kartami wstążki i ustaw działanie kółka oraz każdego przycisku myszy w widoku 3D.
keywords: styl menu, menu, wstążka, pasek narzędzi, drzewo elementów, skróty klawiszowe, klawisze, dostosuj, przypisz ponownie, mysz, kółko, odwróć, kierunek powiększenia, środkowy przycisk, orbita, przesunięcie, eksport, import, przełączanie, znajomy
from: 8445b06c
---

Polecenia PartCraft są takie same, niezależnie od tego, jak do nich dotrzesz. **Styl menu** decyduje tylko o tym, gdzie leżą na ekranie, jak się tam nazywają i którymi klawiszami się uruchamiają. Wybierz go w {{ui:Ustawienia}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menu, klawisze i mysz}}; zmiana działa od razu, a ta przeglądarka ją zapamiętuje.

## Dwa style

| Styl | Co dostajesz |
|---|---|
| {{ui:PartCraft}} | Własny pasek narzędzi PartCraft: przełącznik obszarów roboczych, Plik, Szkic, Elementy, Rysunek, Złożenie, Edycja i Widok. Klawisze {{key:S}} szkic, {{key:F}} dopasuj, {{key:M}} zmierz, {{key:X}} widok przekroju. Domyślny styl. |
| {{ui:Drzewo elementów}} | Wstążka ułożona jak w mechanicznych programach CAD opartych na elementach: menu {{ui:Plik}} z każdym eksportem, szybkie przyciski i karty {{ui:Elementy}}, {{ui:Szkic}}, {{ui:Powierzchnie}}, {{ui:Oceń}}, {{ui:Rysunek}}, {{ui:Złożenie}}, {{ui:Badania}} (obszary robocze i ich narzędzia), {{ui:Illustrate}} (ręczne narzędzia obszaru roboczego Illustrate; jego narzędzia najpierw przełączają na ten obszar) i {{ui:Widok}}. {{ui:Elementy}} zaczyna się od {{ui:Szkic}}, ponieważ część zaczyna się od szkicu. Dodatkowe klawisze: {{key:E}} wyciągnij, {{key:H}} otwór, a {{key:V}}, a potem litera dla widoku: {{key:V}} {{key:F}} przód, {{key:V}} {{key:B}} tył, {{key:V}} {{key:T}} góra, {{key:V}} {{key:O}} dół, {{key:V}} {{key:R}} prawy, {{key:V}} {{key:L}} lewy, {{key:V}} {{key:I}} izometria, {{key:V}} {{key:N}} normalnie do. W widoku 3D środkowy przycisk orbituje, {{key:Shift}} ze środkowym przyciskiem przesuwa, prawy przycisk przesuwa, a lewy tylko wskazuje. |

Każdy styl zachowuje {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} i {{key:Mod+A}}.

Narzędzie z innego obszaru roboczego najpierw przełącza na ten obszar; narzędzie Design wybrane w innym obszarze najpierw wraca do Design. Narzędzia szkicu czekają na szkic, narzędzia rysunku na arkusz rysunku, narzędzia złożenia na złożenie: pasek stanu mówi, co zrobić najpierw.

:::tip
W szkicu, na arkuszu rysunku, w złożeniu i w pozostałych obszarach roboczych litery zachowują tam swoje znaczenie ({{key:L}} linia, {{key:R}} prostokąt, {{key:J}} połączenie …) w każdym stylu. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strzałki zawsze zachowują swoje. Klawisz z układu PartCraft, który styl przypisał innemu poleceniu, nie robi nic, a pasek stanu mówi, gdzie trafiło jego polecenie.
:::

## Dostosuj do siebie

1. Wybierz styl najbliższy oczekiwaniom, a potem kliknij {{ui:Dostosuj…}}.
2. Na {{ui:Klawisze i menu}} znajdź polecenie (pomaga pole wyszukiwania). Kliknij {{ui:Dodaj klawisz}} i naciśnij klawisz albo dwa klawisze pod rząd. Kliknięcie klawisza usuwa go.
3. Przy wstążce {{ui:Gdzie jest}} przenosi polecenie na inną kartę i panel, do menu {{ui:Plik}} albo do {{ui:Tylko klawisze}}.
4. Na {{ui:Mysz}} ustaw kółko, przyciski przesuwające szkic oraz to, co robi każdy przycisk w widoku 3D.
5. Nadaj nazwę i kliknij {{ui:Zapisz}}.

Zapisanie wbudowanego stylu tworzy własną kopię („Moje drzewo elementów”); wbudowany nigdy się nie zmienia. Klawisz przypisany dwóm poleceniom albo taki, który uruchomiłby się, zanim da się wpisać klawisz dwuliterowy, pokazywany jest na czerwono i trzeba go poprawić przed zapisaniem.

## Mysz

- **Kółko myszy**: {{ui:Przewinięcie w górę powiększa}} (domyślnie) albo {{ui:Przewinięcie w górę pomniejsza}}, oraz jak szybko. Szczypnięcie na gładziku zawsze powiększa w kierunku ruchu palców.
- **Przesuwanie szkicu**: środkowym przyciskiem, prawym przyciskiem albo obydwoma. Kliknięcie prawym w szkicu nadal kończy krok narzędzia.
- **Przeciąganie w widoku 3D**: {{ui:Własne dla każdego widoku}} zachowuje ustawienie PartCraft ({{ui:Ustawienia}} › {{ui:PartCraft}}: lewy przycisk obraca albo środkowy przycisk obraca). Albo ustaw każdy przycisk na obracanie, przesuwanie, powiększanie lub nic; {{key:Shift}} z przyciskiem obrotu przesuwa. Kliknięcie bez przeciągania nadal wskazuje.

## Zabierz ze sobą

{{ui:Eksport}} zapisuje używany styl jako mały plik `.ccinput.json`; {{ui:Importuj…}} dodaje taki plik z innego komputera albo od współpracownika. Zaimportowany plik może wskazywać tylko polecenia PartCraft: wszystko inne zostaje pominięte i policzone w pasku stanu. {{ui:Usuń ten styl}} usuwa jeden z twoich własnych.

:::note
Te ustawienia zostają w tej przeglądarce. {{ui:Używaj tego stylu we wszystkich aplikacjach}} pod kartami stylów sprawia, że każda aplikacja otwiera się w pasującym stylu (we własnym pasku narzędzi albo na wstążce), z zmianami wprowadzonymi w każdej aplikacji. Wybór innego stylu w jednej aplikacji zmienia tylko ją.
:::

Pokrewne: [Klawisze i mysz](topic:keyboard) · [Ustawienia PartCraft](topic:settings) · [Przejście z innego programu parametrycznego](topic:coming-from)
