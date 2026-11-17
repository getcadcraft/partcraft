---
title: Otwórz część normową
summary: Rozpocznij część od śruby, wkrętu, nakrętki, podkładki, kołka, łożyska lub wpustu o wymiarach z jej normy, z każdym rozmiarem z tabeli normy jako konfiguracją.
keywords: część normowa, części normowe, śruba, wkręt, sześciokąt, nakrętka, podkładka, sworzeń, kołek, łożysko, łożysko kulkowe, wpust, wpust równoległy, łącznik, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, szablon, biblioteka
from: b9e2811f
---

PartCraft otwiera gotowe, powszechne części mechaniczne: wymiary pochodzą z tabel norm, a każdy rozmiar z tabeli jest konfiguracją, na którą możesz się przełączyć.

## Otwórz jedną

1. Kliknij {{ui:Część normowa}} w grupie {{ui:Plik}}.
2. W {{ui:Część}} wybierz rodzaj, na przykład {{ui:Śruba z łbem sześciokątnym (ISO 4017)}}.
3. W {{ui:Format}} wybierz rozmiar, na przykład `M10 × 40`.
4. Kliknij {{ui:Otwórz}}.

Część otwiera się jako nowa, niezapisana. Zapisz ją, aby ją zachować ({{key:Mod+S}}).

| Część | Norma | Parametry |
|---|---|---|
| Śruba z łbem sześciokątnym, śruba sześciokątna | ISO 4017, ISO 4014, ASME B18.2.1 (cal) | `d` rozmiar gwintu, `s` rozmiar na klucz, `k` wysokość łba, `l` długość |
| Nakrętka sześciokątna | ISO 4032, ASME B18.2.2 (cal) | `d`, `s`, `height` |
| Podkładka płaska | ISO 7089 | `d1` wewnętrzna, `d2` zewnętrzna, `h` grubość |
| Kołek walcowy | ISO 2338 | `d`, `l` |
| Łożysko kulkowe zwykłe | ISO 15 | `d` otwór, `D` średnica zewnętrzna, `B` szerokość |
| Wpust równoległy | DIN 6885-1, postać A | `b` szerokość, `h` wysokość, `l` długość |

## Zmień rozmiar

Każdy rozmiar to konfiguracja (zobacz [Konfiguracje i tabele projektowe](topic:design-tables)): otwórz {{ui:Parametry}} i wybierz inny albo zmień parametr, na przykład `l` dla dłuższego wkrętu, i zapisz go jako własną konfigurację.

## Co jest modelowane

- Wkręty i śruby: sześciokątny łeb i gładki trzpień. Nakrętki: sześciokąt z otworem o nominalnym rozmiarze gwintu. Gwintów nie modeluje się; dodaj go narzędziem {{ui:Gwint}}, jeśli go potrzebujesz (zobacz [Gwinty](topic:threads)).
- Kołki: gładki walec; fazki na końcach są pominięte.
- Łożyska: tylko obrys zewnętrzny (pierścień o średnicy otworu, średnicy zewnętrznej i szerokości), czego potrzeba do ich umieszczenia.
- Wpusty: wpust z zaokrąglonymi końcami.

Materiałem części jest stal, więc panel masy pokazuje jej ciężar. Kół zębatych jeszcze tu nie ma: PartCraft nie ma elementu zębów, a tarcza nie jest kołem zębatym. CadCraft rysuje koła zębate zgodnie z konwencją rysunkową, a biblioteka ma je jako rysunki.
