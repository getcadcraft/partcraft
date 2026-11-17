---
title: Biblioteka narzędzi
summary: Zapisuj używane narzędzia w przeglądarce, aby każda część mogła z nich korzystać, i przenoś biblioteki narzędzi między komputerami jako plik JSON.
keywords: biblioteka narzędzi, narzędzia, eksport, import, JSON, zapisz narzędzia, numer T, frez palcowy, narzędzia warsztatowe
from: 8b9f2483
---

Karta **Narzędzia** w Manufacture wypisuje narzędzia części. W sekcji **Biblioteka narzędzi** możesz przechowywać własne narzędzia poza jedną częścią:

- {{ui:Zapisz to narzędzie}} dodaje wybrane narzędzie do **Moich zapisanych narzędzi**; {{ui:Zapisz wszystkie narzędzia tej części}} dodaje wszystkie. Moje zapisane narzędzia są przechowywane w tej przeglądarce i są dostępne dla każdej części. Narzędzie, które już zapisałeś (ten sam rodzaj, rozmiar, liczba rowków i nadpisania), nie jest zapisywane ponownie.
- {{ui:Dodaj do tej części}} wprowadza wybrane zapisane narzędzie do części. Jeśli jego numer T jest już użyty przez inne narzędzie w części, dostaje następny wolny numer, a panel to mówi. {{ui:Usuń z mojej biblioteki}} usuwa je z listy zapisanych (nie z części, które już je mają).
- {{ui:Eksportuj narzędzia…}} zapisuje narzędzia części jako plik `.json`; {{ui:Importuj narzędzia…}} dodaje narzędzia z takiego pliku do części, według tych samych reguł (narzędzie już obecne jest pomijane, zajęty numer T się przesuwa). Plik zawiera rozmiary, liczbę rowków, materiały oraz nadpisania posuwu i prędkości, które wpisałeś; nie ma w nim identyfikatorów. Użyj go, aby przenieść narzędzia warsztatu na inny komputer lub przekazać je koledze.

Jeśli przeglądarka nie zachowa biblioteki (pamięć jest wyłączona lub pełna), zapis to zgłosi, a sposobem na zachowanie narzędzi jest **Eksportuj narzędzia** i plik. Plik musi być biblioteką narzędzi PartCraft tej wersji lub starszej, z co najwyżej 500 narzędziami o poprawnych rozmiarach; wszystko inne jest odrzucane z podaniem powodu.

Prędkości skrawania i posuwy na ząb, które przychodzą z narzędziem, są wartościami startowymi; zob. [Tworzenie ścieżek narzędzia i G-code](topic:manufacture).
