---
title: Ramy z kształtowników stalowych
summary: Umieść kształtowniki stalowe wzdłuż linii jednego lub kilku szkiców, aby zrobić spawaną ramę: narożniki na ukos lub na styk, elementy przycięte do połączeń, zaślepki końcowe, żebra oraz lista cięcia z długościami i kątami końców.
keywords: konstrukcja spawana, element konstrukcyjny, rama, rama stalowa, rura, rura kwadratowa, hss, rhs, shs, rura okrągła, chs, dwuteownik szerokostopowy, dwuteownik, ipe, hea, heb, ceownik, upn, kątownik, cięcie na ukos, połączenie na styk, wycięcie, zaślepka końcowa, żebro, lista cięcia
from: 59071e5a
---

**Element konstrukcyjny** umieszcza kształtownik stalowy wzdłuż każdej linii wybranych szkiców. Narysuj ramę jako linie (każda linia to jeden element), a potem wybierz kształtownik: elementy zostają zbudowane, ich narożniki przycięte i wydłużone, a lista cięcia podaje, jak długo ciąć każdy kawałek i pod jakim kątem.

## Utwórz ramę

1. Narysuj ramę jako linie w szkicu, na przykład prostokąt na płaszczyźnie górnej. Linie oznaczone jako konstrukcyjne są pomijane.
2. Przy zaznaczonym szkicu wybierz {{ui:Więcej}} › {{ui:Element konstrukcyjny}}. Każda linia szkicu dostaje element.
3. W panelu wybierz **Rodzinę** i **Format** kształtownika. Rodziny to tablice AISC (W, S, C, L, rury HSS, rury) oraz EN 10365 (IPE, HEA, HEB, UPN).

### Rama w 3D

Linie z kilku szkiców tworzą jedną ramę: prostokąt górny naszkicowany na płaszczyźnie powyżej oraz nogi naszkicowane na płaszczyznach pionowych spotykają się końcami w 3D. W panelu, w sekcji **Wzdłuż linii**, zaznacz każdy szkic, którego linie mają podążać elementy. Końce, które spotykają się w odległości jednego mikrometra, są połączone.

## Ustaw kształtownik na jego linii

- **Obrót (°)** obraca kształtownik wokół jego linii. Belka stoi wysokością pionowo (na elemencie pionowym jej wysokość wskazuje w przód).
- **Na linii** wybiera, który punkt kształtownika leży na linii: środek, albo narożnik, albo środek boku obrysu kształtownika. „Dolny środek” kładzie ramę na płaszczyźnie szkicu, a nie przez nią.

## Narożniki i połączenia

| Miejsce styku elementów | Co się dzieje |
|---|---|
| Dwa elementy końcem do końca, **Narożniki: Na ukos** | Oba są cięte na płaszczyźnie w połowie między nimi, jak rama obrazu |
| Dwa elementy końcem do końca, **Narożniki: Na styk** | Pierwszy element biegnie dalej do dalszej ściany drugiego; drugi jest cięty prostopadle przy bliższej ścianie pierwszego |
| Element kończy się na środku innego (teownik) | Jest cięty tak, by przylegał do zewnętrznej strony drugiego elementu |
| Trzy lub więcej kończy się w jednym punkcie | Pierwszy biegnie prostopadle za pozostałymi; pozostałe są cięte tak, by przylegały do niego |

Pierwszy element to ten, którego linia jest pierwsza: linie zachowują kolejność, w jakiej je narysowano, szkic po szkicu, w kolejności zaznaczania szkiców.

## Zaślepki końcowe i żebra

- **Zaślepki końcowe** zamykają każdy wolny koniec płytą o obrysie kształtownika i grubości, którą ustawisz, na zewnątrz końca.
- **Żebra** kładą trójkątną płytę w każdym narożniku, w którym dwa elementy spotykają się pod kątem: **Rozmiar żebra** wzdłuż każdego elementu od narożnika, **Grubość żebra** w poprzek, wyśrodkowane na płaszczyźnie narożnika.

## Lista cięcia

Panel wymienia każdy kawałek, a identyczne kawałki są zgrupowane: kształtownik, długość (od długiego punktu do długiego punktu, tak jak zaznaczasz ją pod piłę), sposób cięcia każdego końca (prostopadle, kąt od prostopadłej albo cięcie do dopasowania) i do których elementów należą. Zaślepki końcowe i żebra są wymienione wraz z rozmiarami. {{ui:Zapisz listę cięcia (CSV)}} zapisuje ją do arkusza kalkulacyjnego.

Element cięty do dopasowania do rury o zaokrąglonych narożnikach wchodzi nieco w promień tego narożnika, więc jego długość od długiego punktu jest o kilka milimetrów większa niż szczelina między ścianami.

## Ograniczenia

- Elementy podążają tylko za prostymi liniami; łuki i spline'y w szkicu są pomijane.
- Połączenia są cięte, a nie spawane: nie rysuje się spoin, a rama jest jedną bryłą.
- Kształtowniki są rysowane z wymiarów tablicy: kształty W z zaokrągleniem przejścia, S i ceowniki z równoległymi półkami, rury z promieniami narożników; otworów, przygotowania końców i szczelin spawalniczych nie wykonuje się za Ciebie.
- Elementy konstrukcyjne buduje jądro siatkowe. Gdy dokładne jądro jest włączone (tylko dla programistów), informują o tym i nie są budowane.
