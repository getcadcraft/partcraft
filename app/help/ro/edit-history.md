---
title: Modificarea unei piese prin istoricul ei
summary: Modificați operațiile și schițele ulterior, suprimați, derulați înapoi, inserați operații mai devreme, reordonați, redenumiți și ștergeți, și anulați oricare dintre acestea.
keywords: istoric, arbore de operații, arbore de proiectare, editare operație, editare schiță, suprimare, anulare suprimare, derulare înapoi, derulare înainte, reordonare, mutare operație, ștergere, redenumire, anulare, refacere, reconstruire, regenerare, părinte copil, piesă mare, multe operații, reconstruire lentă, 750 de operații
from: 6f75aef4
---

O piesă PartCraft este istoricul ei: lista de planuri, schițe și operații din stânga. PartCraft reconstruiește solidul de la începutul acestei liste de fiecare dată când ceva se schimbă. Schimbarea unui număr de la început schimbă tot ce este construit pe el.

## Modificarea unei operații

1. Faceți clic pe operație în istoric (sau pe schița indentată sub ea).
2. Schimbați setările ei în panoul din dreapta. Fiecare schimbare reconstruiește imediat.

Nu există OK sau Anulare: fiecare schimbare se aplică. Dacă nu vă place, apăsați {{key:Mod+Z}}.

## Schimbarea muchiilor sau fețelor folosite de racordare, șanfren sau scobire în coajă

Faceți dublu clic pe operație în istoric sau selectați-o și alegeți {{ui:Alegere muchii}} (sau {{ui:Alegere fețe}}). Faceți clic pe muchii sau fețe ca să le adăugați sau să le eliminați, apoi {{ui:Gata}} sau {{key:Esc}}. Vedeți [Rotunjire, teșire și golire](topic:fillet-chamfer-shell).

## Modificarea unei schițe

1. Faceți dublu clic pe schiță în istoric sau selectați-o și alegeți {{ui:Editare schiță}} în panoul din dreapta (sau {{ui:Schiță}} din bara de instrumente).
2. Piesa revine la starea de când a fost făcută schița: operațiile de după ea sunt ascunse cât timp o editați.
3. Modificați geometria, relațiile sau cotele.
4. Închideți schița. Întreaga piesă se reconstruiește cu modificarea.

Ca să schimbați doar o dimensiune, nu trebuie să deschideți schița. Selectați operația sau schița și schimbați numărul de sub **Cotele schiței** (sau **Cote de control**) din panoul din dreapta. Vedeți [Schimbarea dimensiunilor fără deschiderea schiței](topic:change-sizes).

## Când o operație eșuează

Dacă o modificare face o operație imposibilă, PartCraft construiește tot restul și marchează problema:

- operația apare cu **⚠ eroare** în istoric, iar mesajul ei este în partea de sus a panoului din dreapta (treceți cu cursorul peste rând ca să-l citiți și acolo);
- operațiile care au nevoie de ea apar cu **⚠ nerealizat**, cu „Necesită Extrude2, care eșuează.”;
- cipul din bara de stare spune „1 operație care eșuează”.

Reparați cauza (sau anulați), iar piesa se construiește din nou. Mesajele frecvente și ce trebuie făcut sunt în [Depanare](topic:troubleshooting).

## Suprimarea unei operații

Suprimarea dezactivează o operație fără să o ștergă: util ca să încercați o piesă fără o gaură sau o repetiție.

1. Selectați operația.
2. Alegeți {{ui:Suprimare}}. Rândul ei arată **inactivă**. Operațiile care au nevoie de ea nu se construiesc nici ele.
3. Alegeți {{ui:Anulare suprimare}} ca să o reactivați.

## Derulare înapoi

Derularea înapoi construiește piesa doar până la un punct, ca s-o vedeți cum era sau ca să adăugați o operație mai devreme în istoric.

1. Selectați o operație și alegeți {{ui:Derulare înapoi până aici}}. Operația aceea și toate cele de sub ea sunt cenușii și nu se construiesc. Un rând **Bară de derulare · derulare înainte** marchează locul.
2. Orice operație adăugați acum intră **la bară**, înaintea celor cenușii.
3. Faceți clic pe **Bară de derulare · derulare înainte** ca să construiți din nou totul.

Poziția de derulare se salvează în fișier.

## Reordonarea operațiilor

1. Selectați operația.
2. Alegeți {{ui:Mutare în sus}} sau {{ui:Mutare în jos}}, sau, cu rândul din istoric activ, apăsați {{key:Alt+Up}} sau {{key:Alt+Down}}.

O operație nu poate fi mutată niciodată deasupra a ceva ce folosește. Butonul este cenușiu, iar dacă treceți cu cursorul peste el (sau încercați tasta) apare motivul, de exemplu „Extrude2 folosește Sketch2, deci Sketch2 trebuie să fie primul.”

Ce folosește o operație: schița ei; fața pe care stă schița; operațiile pe care le copiază o repetiție sau o oglindire; o linie de schiță sau o rotire folosită ca direcție sau axă.

## Ștergerea unei operații

1. Selectați operația și alegeți {{ui:Ștergere}} în panoul din dreapta sau în bara de instrumente, ori apăsați {{key:Delete}}.
2. Dacă alte operații o folosesc, PartCraft întreabă: „Extrude3, Hole1 folosesc Extrude1 și vor fi șterse și ele.” Alegeți {{ui:Ștergere totală}} sau {{ui:Anulare}}.

Ștergerea unei operații nu șterge schița ei: schița reapare în vizualizare ca schiță nefolosită, gata pentru o altă operație. Ștergeți schița separat dacă nu o mai aveți nevoie.

## Redenumire

Selectați operația și tastați un **Nume** nou în partea de jos a panoului din dreapta (până la 60 de caractere). Numele piesei este în panoul din dreapta când nu este selectat nimic.

## Piese cu sute de operații

O piesă cu sute de operații este testată la 750. PartCraft păstrează solidul pe care îl avea pe la jumătatea istoricului, deci o schimbare târzie reconstruiește doar operațiile de după ea; o schimbare aproape de început reconstruiește tot ce este construit pe ea, ceea ce durează cel mai mult. Anularea și refacerea reconstruiesc doar de la locul unde cele două stări diferă. Ca să lucrați mai repede la o piesă mare, derulați înapoi până la locul unde lucrați (vedeți Derulare înapoi mai sus) sau suprimați ce nu aveți nevoie deocamdată. Mai multe tăieturi și proeminențe care nu se ating sunt aplicate împreună, deci o piesă făcută din multe găuri și proeminențe separate se construiește mai repede decât sugerează numărul operațiilor.

O piesă mare se reconstruiește în fundal: cipul de jos spune **Reconstruire…** cu cât a ajuns, iar vizualizarea, panourile și meniurile funcționează în continuare. Piesa de pe ecran este ultima construită până când cea nouă este gata. Dacă schimbați ceva din nou în timpul reconstruirii, PartCraft construiește cea mai nouă versiune și renunță la cea în lucru. O piesă mică se reconstruiește imediat.

## Anulare și refacere

- {{key:Mod+Z}} sau {{ui:Anulare}} anulează ultima modificare: o operație, o setare, o editare de schiță, o tragere. Bara de stare spune ce, de exemplu „Anulat: schimbare de cotă.”
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} sau {{ui:Refacere}} o refac.
- PartCraft păstrează ultimii 200 de pași (o piesă atât de mare încât 200 de copii ar consuma prea multă memorie păstrează mai puțini, niciodată mai puțin de ultimii 20). Modificările de pe foaia de desen (o secțiune, un simbol GD&T mutat) sunt în aceeași listă. Deschiderea unui fișier sau începerea unei piese noi o golește.

:::mac
Pe Mac, folosiți ⇧⌘Z ca să refaceți. În Safari, ⌘Y poate deschide istoricul browserului.
:::
