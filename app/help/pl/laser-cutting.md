---
title: Wyślij rysunek do lasera
summary: Wybierz, co robi każda warstwa (cięcie, nacinanie, grawerowanie, wypełnianie, obraz), podejrzyj ruchy głowicy, zapisz G-kod trybu laserowego GRBL albo wyślij go z przeglądarki po obrysowaniu zlecenia.
keywords: laser, cięcie laserowe, grawerowanie laserowe, GRBL, G-code, grawerowanie, wypełnianie, dithering, grawerowanie obrazu, nacinanie, cięcie, Web Serial, Linux, obrysuj zlecenie, moc, prędkość, przebiegi
from: 327b3c46
---

Panel {{ui:Laser}} zamienia warstwy rysunku w program dla lasera sterowanego przez GRBL (większość amatorskich i małych warsztatowych sterowników diodowych i CO2). W PartCraft wybierz {{ui:Eksport}} › {{ui:Program laserowy…}}, a potem {{ui:Dodaj kontury z DXF…}}: kontury i otwory trafią na warstwę CUT. Płaskie wzory części z blachy (z liniami gięcia na warstwie BEND) wymagają dokładnego jądra, którego ta wersja nie ma. Ustawienia są zapisywane w pliku części lub złożenia.

:::warning
Sprawdzaj każde ustawienie najpierw na odpadzie, używaj okularów ochronnych dobranych do lasera, zamykaj pokrywę, jeśli jest, i nigdy nie zostawiaj działającego lasera bez opieki. Liczby, od których zaczyna się warstwa, są wartościami zastępczymi, a nie zaleceniami dla jakiegokolwiek materiału.
:::

## Wybierz, co robi każda warstwa

Każda warstwa rysunku jest jednym wierszem. {{ui:Robi}} ustawia ją na **Cięcie**, **Nacinanie**, **Grawerowanie linii**, **Wypełnianie kształtów**, **Grawerowanie obrazu** albo **Nie wysyłaj**, z {{ui:Moc %}}, {{ui:Prędkość mm/min}} i liczbą {{ui:Przebiegi}}.

- **Wypełnianie** wypala wnętrze zamkniętych kształtów liniami w odstępie {{ui:Odstęp linii}}, pod {{ui:Kąt}}, w obu kierunkach albo w jednym, z nabiegiem (overscan), aby głowica miała prędkość, gdy laser się włączy; krzyżowe kreskowanie dodaje drugi przebieg pod kątem 90°. Kształt z otworem zostaje otwarty w miejscu otworu.
- **Grawerowanie obrazu** zamienia obraz w kropki (Floyd–Steinberg, Atkinson, uporządkowane albo zwykła czerń i biel przy progu) lub, z *Poziomy szarości*, w zmienną moc.
- Kolejność: najpierw obrazy i wypełnienia, potem grawerowanie linii, następnie nacinanie, na końcu cięcia, tak aby wycinana część nie przesuwała się podczas grawerowania. W obrębie jednej warstwy ścieżki idą **najpierw od wewnątrz** (otwór przed płytą, w której się znajduje), zawsze najbliższa następna.

## Podgląd, potem zapis

Podgląd pokazuje, co robi głowica: linie wypalane w kolorze, szybkie przejazdy szare, a zielona ramka obejmuje wszystko, co się wypala. Poniżej są rozmiar, długość wypalania i szacunkowy czas (bez przyspieszenia; prawdziwa maszyna trwa dłużej). {{ui:Zapisz G-code…}} zapisuje G-kod trybu laserowego GRBL: `$32=1`, `M4` (lub `M3`) z wartościami S, ruchy `G0` i `G1`, na końcu `M5`. X0 Y0 to lewy dolny róg zlecenia, chyba że wybierzesz początek rysunku: wtedy ustaw tam zero robocze maszyny. G-kod jest zgodny z udokumentowanym trybem laserowym GRBL; nie testowano go jeszcze na prawdziwym laserze.

## Wyślij z przeglądarki

W Chrome i Edge {{ui:Połącz…}} prosi o wybranie portu USB lasera. Nic się nie łączy ani nie wysyła, dopóki nie naciśniesz przycisku. Najpierw naciśnij {{ui:Obrysuj zlecenie}}: głowica obrysowuje ramkę zlecenia przy **wyłączonym** laserze (albo przy niskiej mocy ustawionej do wskazywania), abyś widział, gdzie wypali. Dopiero wtedy włącza się {{ui:Wyślij zlecenie}}, a po każdej zmianie znów gaśnie. {{ui:Wstrzymaj}} zatrzymuje głowicę, {{ui:Stop}} również ją zatrzymuje, resetuje sterownik (laser gaśnie) i wysyła `M5`. Tam, gdzie brakuje Web Serial (Firefox, Safari oraz CadCraft Studio, którego widok webowy go jeszcze nie ma), zapisz G-kod i wyślij go programem dołączonym do lasera.

## Jeszcze nie zbudowano

Formaty innych sterowników (Ruida, lasery Marlin, pliki producentów), mostki i dojazdy (lead-ins), odsunięcie szczeliny (kerf), biblioteki materiałów, osie obrotowe i osie Z, wyrównanie kamerą.
