---
title: Układanie płaskich części na arkuszach
summary: Układaj płaskie części na płytach lub zwoju z możliwie małą ilością odpadu, jaką PartCraft zdoła znaleźć, nigdy bliżej niż podany odstęp, i zapisz układ jako DXF dla lasera, plazmy, strumienia wody lub frezarki.
keywords: układanie, układaj, arkusz, płyta, zwój, laser, plazma, strumień wody, frezarka, cięcie, wydajność, zużycie materiału, odpad, odpady, odstęp, szerokość cięcia, kierunek struktury, walcowanie, dxf, płaski wzór, kontury
from: 8dcce1a6
---

**Układanie** rozmieszcza wiele płaskich części na arkuszu tak, aby pozostało jak najmniej materiału. PartCraft układa części jedną po drugiej, każdą tam, gdzie skraca zużytą długość arkusza, sprawdza kilka kolejności i obrotów w kilka sekund i zachowuje najlepszy wynik. Części mogą wchodzić w otwory innych części i we wnękę litery L lub U.

## Otwieranie

- {{ui:Eksport}} › {{ui:Układaj płaskie części na arkuszach…}} otwiera je z płaskim wzorem części albo — w złożeniu — z płaskimi wzorami każdej części z blachy, tyle razy, ile jest kopii.
- Dla części z blachy: {{ui:Rozłóż na płasko}}, a następnie {{ui:Układaj na arkuszach…}} pod płaskim wzorem.
- {{ui:Dodaj kontury z DXF…}} dodaje każdy zamknięty kontur z pliku DXF jako część: rysunek z CadCraft zapisany jako DXF albo plik z oprogramowania twojej maszyny tnącej. Kontur wewnątrz innego jest w nim otworem. Linie i łuki, które łączą się końcami, liczą się jako jeden kontur. Pliki w calach, centymetrach lub metrach są zamieniane na milimetry.

:::note
Rozłożenie blachy na płasko wymaga dokładnego jądra geometrii (zobacz [Blacha](topic:sheet-metal)). Kontury z pliku DXF działają zawsze.
:::

## Ustawienia

Dla każdej części podaj **ile sztuk** potrzebujesz i jej **kierunek struktury**: {{ui:Dowolny kierunek}}, {{ui:Wzdłuż arkusza (jak narysowano)}} dla blachy szczotkowanej lub walcowanej, która musi biec w jednym kierunku, albo {{ui:w poprzek arkusza}}.

Pod **Arkusze**:

- **Zapas**: {{ui:Płyty}} o podanej długości i szerokości (oraz ile masz w magazynie; 0 = tyle, ile potrzeba), albo {{ui:Zwój}} o podanej szerokości, na tyle długi, na ile trzeba.
- **Margines krawędzi** zostaje wolny przy każdej krawędzi arkusza (dla zacisków albo postrzępionej krawędzi).
- **Odstęp między częściami** to najmniejsza odległość między dwiema liniami cięcia: co najmniej szerokość cięcia (kerf) twojej maszyny plus to, czego wymaga materiał.
- **Obroty**: kąty, o jakie część może być obrócona, domyślnie co 90°. Mniej obrotów działa szybciej; więcej może lepiej wykorzystać arkusz.
- **Części można odwracać** pozwala położyć część do góry nogami. Dla blachy wyłącz to: płaski wzór położony odwrócony wygnie się w drugą stronę.

Naciśnij {{ui:Układaj}}. Podgląd pokazuje każdy arkusz; podsumowanie podaje, ile płyt (lub jaka część zwoju) zostało użyte i jaką część materiału zajmują części. Części, które się nie zmieściły, są wymienione z nazwy.

## Zapisywanie

{{ui:Zapisz DXF}} zapisuje układ jako DXF (R12, milimetry), jeden arkusz pod drugim: kontury arkuszy na warstwie SHEET, części na PARTS (łuki zachowane jako łuki), nazwa każdej części na LABELS.

:::tip
Mieszanie kilku części zwykle układa się lepiej niż wiele kopii jednej: małe części wypełniają przerwy między dużymi.
:::

## Cięcie arkuszy (G-code)

**Eksport › Ułożone arkusze do G-code** odczytuje ułożony plik DXF (ten albo arkusze z dodatku Cabinets w CadCraft) i tworzy jeden program na arkusz przez wybrany przez ciebie post: najpierw otwory i wycięcia, potem kontury, każde cięcie z promieniem narzędzia na zewnątrz części, przez arkusz i 1 mm dalej, z mostkami, jeśli o nie poprosisz. Lista postów to wbudowane posty oraz własne posty twojego studium Manufacture. Sprawdź każdy program w symulatorze, zanim go uruchomisz: wiercenia i kieszenie nie są wykonywane.

## Co sprawdzić

PartCraft sprawdza każdy układ ponownie na rzeczywistych kształtach (a nie na siatce, na której szukał): żadne dwie części nie są bliżej niż odstęp, nic nie wchodzi w marginesy. Nie planuje cięcia: wejścia narzędzia (lead-in), kolejność cięcia, cięcie wspólnych krawędzi raz i zachowanie pozostałego arkusza to zadanie oprogramowania twojej maszyny tnącej. Sprawdź tam plik DXF przed cięciem.
