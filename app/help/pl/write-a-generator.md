---
title: Pisanie generatora
summary: Generator to skrypt CraftScript, Lua lub Python z wierszami komentarza, które deklarują jego wejścia. Jak wejścia zamieniają się w formularz, co skrypt musi pozostawić (body, sheet, problems), mały kompletny przykład oraz jak otworzyć skrypt jako generator.
keywords: generator, pisanie, skrypt, craftscript, nagłówek, wejście, @input, @generator, body, sheet, problems, to_body, mfg_check, karta danych, przykład, siatka kratowa, pole
from: ed8a5ed8
---

Generator to zwykły skrypt ([CraftScript](topic:craftscript), Lua lub Python) z kilkoma wierszami komentarza na początku. PartCraft odczytuje komentarze i buduje formularz; skrypt odczytuje wejścia jako zmienne, które są już ustawione.

## Nagłówek

Umieść je w wierszach komentarza (`%` w CraftScript, `--` w Lua, `#` w Python):

```
% @generator Wymiennik ciepła
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Przepływ masowy"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Powierzchnia"
% @input solid: = true
% @input note: = "text"
```

Wejście ma postać `nazwa: jednostka = wartość domyślna`; opcjonalnie podaje się zakres `[min .. max]` (liczby mieszczą się w nim), listę wyborów `{a, b, c}` oraz etykietę w cudzysłowie. Jednostka jest tylko etykietą w formularzu: **wartość przychodzi w tej jednostce**, więc skrypt, który chce SI, dokonuje przeliczenia; `to_si(value, 'kg/s', 'kg/s')` dodatkowo sprawdza, czy jednostka oznacza to, co myślisz. Nazwa składa się z liter, cyfr i podkreślenia; `body`, `sheet` i `problems` są zarezerwowane.

## Co pozostawia skrypt

| Zmienna | Opis |
|---|---|
| `body` | **Wymagane.** Siatka powierzchni, zwykle z `[body, info] = to_body(field, h)`. Jest naprawiana i sprawdzana po zakończeniu przebiegu. |
| `sheet` | Opcjonalne. Struktura: każde pole to liczba lub tekst albo struktura z `value`, `unit`, `ref` i `note`. Staje się kartą danych. |
| `problems` | Opcjonalne. Komórka `problems` z `mfg_check(field, 'sls', struct(), h)` albo własne wpisy. Trafiają do kontroli i na listę problemów. |

## Pełny mały przykład

```
% Pusta kostka ze ścianą.
% @generator Pusta kostka
% @input side: mm = 12 [4 .. 40] "Bok"
% @input wall: mm = 1.5 [0.5 .. 5] "Ściana"
% @input h: mm = 0.5 [0.25 .. 2] "Rozmiar voksela"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Powstaje zamknięte pudełko, a kontrola zgłasza jego zamknięte wnętrze jako błąd dla procesu proszkowego. Ustaw rozmiar voksela `h` co najwyżej na jedną trzecią najcieńszej ściany, jaką chcesz uzyskać: poniżej około trzech vokseli ściana nie jest niezawodna.

## Pola

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (bryła obrotowa z profilu), `tpms` (powierzchnie gyroid, Schwarz P i diamond, z rozmiarem komórki i grubością ściany, które mogą się zmieniać na całej części), `lattice` i `lattice_beams`, `along` (okrągły kanał wzdłuż ścieżki), operacje logiczne `field_union`, `field_intersect`, `field_subtract`, gładkie `field_blend` oraz `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` podaje odległość ze znakiem w punktach (ujemną wewnątrz), `field_voxel` podaje woksele dla solverów. [Pola](topic:fields) wyjaśnia, czym są.

Warto znać ograniczenia: ścianka typu sheet grubsza niż około jedna czwarta komórki zamyka kanały; element cieńszy niż około trzy woksele może się zwężać; `along` łączy okrągłe stożki, więc promień zmieniający się szybko zostawia wybrzuszenie (do profilu użyj `field_revolve`).

## Otwórz skrypt jako generator

W obszarze {{ui:Inżynier}} wybierz {{ui:Otwórz}} i wskaż plik. Skrypt bez wiersza `@generator` lub `@input` zostaje odrzucony: nie byłoby czego ustawić. Generator jest zapisany w tej przeglądarce (do 20), a {{ui:Usuń}} go usuwa. Bryła rozpoczęta z niego zawiera kopię skryptu, więc część nie zależy od niego.

Plik może też zawierać kilka generatorów: pakiet JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
