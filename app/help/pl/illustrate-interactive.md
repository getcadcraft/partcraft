---
title: Interaktywny plik 3D
summary: Wyeksportuj instrukcję jako jeden plik HTML, który otwiera się offline w dowolnej przeglądarce, bez instalacji, konta i śledzenia: model, widoki, lista części (połączona w obie strony), animacja i lupa.
keywords: illustrate, interaktywny, plik 3d, html, offline, przeglądarka 3D, udostępnianie, klient, hala produkcyjna
from: 4de4e074
---

{{ui:Eksport}}, potem {{ui:Jako}} {{ui:Interaktywny plik 3D (HTML, otwiera się offline)}}, zapisuje jeden plik `.html`. Wyślij go e-mailem, skopiuj na pendrive albo do folderu udostępnionego: otworzy się w dowolnej przeglądarce z obsługą WebGL 2, na komputerze, tablecie lub telefonie.

W pliku:

- Przeciągnij, aby obrócić model; przeciągnij prawym przyciskiem albo {{key:Shift}}+przeciągnij, aby przesunąć; kółkiem lub uszczypnięciem powiększ.
- Kliknij widok na liście: kamera przechodzi tam, a części przyjmują położenia, wygląd, przecięcie i lupę tego widoku.
- Kliknij wiersz listy części, aby podświetlić jego części; kliknij część, aby podświetlić jej wiersz.
- Gdy instrukcja ma animację, pasek pod modelem ją odtwarza, wstrzymuje i pozwala przewijać.

Plik zawiera wszystko, czego potrzebuje (model, przeglądarkę 3D oraz three.js na licencji MIT), i blokuje wszystkie żądania: nie może połączyć się z internetem, nie ma konta ani śledzenia.

Interaktywny 3D wewnątrz PDF nie jest oferowany: przeglądarki i większość czytników PDF go nie wyświetlają, a czytnik, który potrafi, ma tę funkcję domyślnie wyłączoną. Interaktywną odpowiedzią jest plik HTML.
