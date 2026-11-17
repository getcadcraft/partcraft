---
title: Biblioteka analiz
summary: Biblioteka czytelnych skryptów analiz w obszarze roboczym Skrypt: co zawiera każda grupa, otwieranie funkcji tylko do odczytu, jej nagłówek z metodą, referencjami i sprawdzeniem, tworzenie własnej kopii oraz sposób, w jaki kopia przejmuje działanie funkcji z biblioteki.
keywords: biblioteka, craftlib, analiza, elektromagnes, statyka, modalna, termiczna, optymalizacja topologii, top88, SIMP, elektromagnetyzm, elektrostatyka, magnetostatyka, przepływ, sieć Boltzmanna, LBM, siatka, woksel, czworościany, referencje, sprawdzenie, weryfikacja, kopia, cień
from: bf993859
---

Biblioteka analiz to zbiór skryptów, każdy z nich to funkcja, którą można przeczytać od góry do dołu: jak składana jest macierz sztywności, gdzie trafiają warunki brzegowe, który solver działa i jak liczone są wyniki. Nic w niej nie jest ukryte w czarnej skrzynce; wbudowane są tylko szybkie wewnętrzne pętle (macierze elementów, rzadkie solvery, siatkowanie).

## Zacznij od przykładu

Grupa **Przykłady** zawiera pięć krótkich skryptów, które używają biblioteki od początku do końca. Wybierz jeden, naciśnij {{ui:Otwórz (tylko do odczytu)}}, a potem {{key:F5}}: każdy czyści widok, pokazuje wynik w widoku oraz wykres w podwidokach.

| Przykład | Co pokazuje |
|---|---|
| Naprężenie wspornika | Stalowy pręt 100 × 10 × 10 mm pod obciążeniem 100 N na końcu: naprężenie von Mises na odkształconym pręcie oraz ugięcie końca względem teorii belek przy czterech rozmiarach elementów (na wykresie) |
| Topologia belki MBB | Klasyczna optymalizacja topologii 60 × 20: powstawanie kształtu, spadek podatności, końcowy układ (94 iteracje, podatność 203,19) |
| Pole kondensatora | Dwie płyty o szerokości 4 mm, w odległości 1 mm: potencjał i pole, pojemność z efektem brzegowym względem wartości idealnej i wzoru Palmera |
| Przepływ w kanale | Przepływ metodą sieci Boltzmanna obok słupka w kanale: pole prędkości i historia zbieżności |
| Elektromagnes | Rdzeń żelazny w kształcie litery C, z przerwą powietrzną i cewką: gęstość strumienia, pole w szczelinie względem wzoru obwodu magnetycznego, indukcyjność i siła przyciągania w szczelinie. Opisane krok po kroku w [Pola magnetyczne w 2-D](topic:magnetic-fields-2d) |
| Magnes trwały | Ten sam rdzeń z magnesem trwałym zamiast cewki: punkt pracy magnesu, pole w szczelinie względem obwodu magnetycznego, ile strumienia ucieka, siła. W [Pola magnetyczne w 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupy

| Grupa | Funkcje | Co robią |
|---|---|---|
| Siatkowanie | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Prostopadłościany i walce jako sześciościany, sześciany lub czworościany; sześciany lub czworościany dowolnego modelu (części, bryły, wczytanego STL); objętości elementów i ich jakość; wybieranie węzłów na płaszczyźnie lub ścianie |
| Naprężenia statyczne | `static_voxel`, `static_tet` | Liniowe naprężenia statyczne na sześcianach lub 10-węzłowych czworościanach: przemieszczenia, naprężenia, von Mises, reakcje |
| Ramy | `frame3d` | Ramy 3D z belek, słupów i stężeń metodą bezpośredniej sztywności: zwolnienia końców, podpory i sprężyny, obciążenia wzdłuż prętów; przemieszczenia, reakcje, siły na końcach prętów. {{ui:Eksportuj jako CraftScript}} w DetailCraft i BimCraft zapisuje dla niej cały model. Pomoc w analizie, a nie sprawdzenie zgodności z normami |
| Drgania | `modal_tet` | Częstotliwości własne i postacie drgań |
| Ciepło | `heat_steady`, `heat_transient`, `heat_system` | Ustalone i nieustalone przewodzenie ciepła ze stałymi temperaturami, dopływem ciepła, generacją, strumieniem i konwekcją |
| Optymalizacja topologii | `top88`, `top99`, `topopt3d` | Opublikowane dwuwymiarowe kody 88- i 99-liniowe oraz ta sama metoda w 3-D na sześcianach |
| Elektromagnetyzm | `poisson2d`, `magnetostatic2d` | Elektrostatyka 2-D (potencjał, pole, pojemność, ładunek) i magnetostatyka (potencjał wektorowy, gęstość strumienia, magnesy trwałe) |
| Przepływy płynów | `lbm2d`, `lbm3d` | Przepływ metodą sieci Boltzmanna: 2-D zapisany w skrypcie, 3-D na własnym jądrze przepływu PartCraft |

Nagłówek każdej funkcji podaje dokładne argumenty. Jednostki są takie jak w analizach PartCraft, chyba że nagłówek mówi inaczej: milimetry, niutony, megapaskale, tony na milimetr sześcienny dla gęstości, waty i kelwiny dla ciepła. Funkcje elektromagnetyczne i sieci Boltzmanna działają w dowolnych spójnych jednostkach; ich nagłówki to opisują.

## Jak sprawdzana jest biblioteka

Nagłówek każdej funkcji kończy się **sprawdzeniem**: małym przypadkiem o znanym wyniku. Testy PartCraft uruchamiają wszystkie z nich, a tam, gdzie PartCraft ma własną analizę do tego samego zadania, wynik skryptu jest porównywany z nią na tej samej siatce:

- ugięcie końca wspornika względem teorii belek (w granicach 0,2 % dla sześcianów, 0,05 % dla czworościanów) oraz względem solverów obszaru **Symulacja** na tej samej siatce (zgodne do wielu cyfr);
- pierwsza częstotliwość wspornika względem teorii belek (o 0,24 % niższa, jak oczekiwano dla krótkiej belki) oraz względem solvera modalnego **Symulacji**;
- ciepło: płaska ściana z ogrzewaniem dokładnie, małe ciało stygnące zgodnie ze wzorem pojemności skupionej, temperatura płyty zanikająca zgodnie z teorią;
- optymalizacja topologii: `top88` odtwarza z artykułu 94 iteracje i podatność 203,1925 (oraz 218,8032 z filtrem gęstości); `topopt3d` kończy przy tej samej podatności co obszar **Generatywny** przy tych samych ustawieniach;
- pojemność kondensatora i pole długiego solenoidu względem wartości z podręczników, pole w szczelinie elektromagnesu względem wzoru obwodu magnetycznego, magnesy trwałe względem okrągłego magnesu w powietrzu oraz magnesu zamkniętego żelazną zworą;
- przepływ w kanale względem dokładnego profilu parabolicznego.

## Przeczytaj funkcję

1. Otwórz kartę **Biblioteka** panelu skryptów.
2. Wybierz funkcję. Jej nagłówek pokazuje: co liczy, metodę, jednostki, założenia i ograniczenia, **referencje** (książkę lub artykuł, z numerami równań) oraz **sprawdzenie** — mały przypadek o znanym wyniku, który uruchamiają testy PartCraft.
3. {{ui:Otwórz (tylko do odczytu)}} otwiera cały skrypt w karcie z przerywaną ramką. Można go uruchomić, uruchomić zaznaczone fragmenty, ale nie zmienić.

## Zmień funkcję

Naciśnij {{ui:Zrób kopię}} (albo **Zrób kopię do edycji** nad kartą tylko do odczytu). Kopia jest skryptem w Twojej części o tej samej nazwie, więc zapisuje się razem z częścią, a **każde wywołanie tej funkcji używa teraz Twojej kopii** — edytor mówi o tym nad skryptem. Zmień nazwę kopii, aby zachować obie.

## Użyj jej

Wywołaj funkcję z biblioteki z dowolnego skryptu po jej nazwie, tak jak funkcję wbudowaną:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Wyniki wracają jako wartości w obszarze roboczym; wykresy i pola, które pokazuje, pojawiają się w widoku i w podwidokach.

Analiza statyczna otwartej części, na przykład, zajmuje kilka linii:

```
v = voxel_mesh(part(), 2);                   % sześciany 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % podparcie od dołu
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N w dół na górze
r = static_voxel(v, 210000, 0.3, bc);       % stal
```

`r` przechowuje przemieszczenia, naprężenia i reakcje; naprężenie von Mises jest rysowane na odkształconej części. Dla zakrzywionych części użyj `tet_mesh` i `static_tet`, które mogą też obciążać i podpierać całe ściany (`face_nodes`).

:::note
Funkcje biblioteki są napisane w CraftScript, a skrypt Lua wywołuje je przez `cs`, tak jak funkcje wbudowane: `cs.static_tet(t, 200000, 0.3, bc)` (zob. [Skrypty w Lua](topic:craftscript-lua)). Każda funkcja rozwiązuje jeden materiał i jeden przypadek obciążenia; nagłówki podają, czego jeszcze nie obejmują.
:::
