---
title: Ecuații în ambele sensuri
summary: Schimbați un parametru și piesa urmează; scrieți o dimensiune nouă într-un număr condus și PartCraft calculează parametrul din spatele ei, întrebând care dintre ei când ar putea varia mai mulți.
keywords: ecuații, rezolvare înapoi, cotă condusă, în ambele sensuri, invers, căutare de obiectiv, parametri, valori legate, care parametru
from: 82dc0269
---

O ecuație precum **Extrude1 adâncime = thick + extra** funcționează în ambele sensuri.

## Înainte: schimbați parametrul

Pe fila {{ui:Parametri}}, schimbați `thick` de la 20 la 30. Adâncimea lui Extrude1 devine 30 + extra, iar piesa se reconstruiește.

## Înapoi: schimbați numărul condus

1. Faceți clic pe „Extrude1” în istoric. Caseta **Adâncime (mm)** afișează **ƒ**: o ecuație o conduce.
2. Scrieți dimensiunea dorită, de exemplu `40`, și apăsați {{key:Enter}}.

PartCraft rezolvă parametrul din spatele ecuației, prin atâția pași câți sunt necesari (`depth = hub_h`, `hub_h = disc_t + 50`: scrierea unei înălțimi schimbă `disc_t`). Bara de stare spune ce s-a schimbat, de exemplu că extra a trecut de la 5 la 15.

Când doi sau mai mulți parametri conduc numărul, o casetă întreabă **Care parametru ar trebui să se schimbe?** și îi listează. Faceți clic pe unul; ceilalți își păstrează valorile. {{ui:Anulare}} nu schimbă nimic.

Același lucru funcționează într-o schiță: faceți dublu clic pe o cotă condusă, scrieți o valoare și apăsați {{key:Enter}}. Funcționează și în coloana **Valoare** din tabelul de parametri, pentru un parametru care este el însuși o expresie.

## Când nu se poate

- Un număr care trebuie să fie întreg (un număr de repetiții) sau să rămână în interval (un unghi de până la 360°) este refuzat înainte ca ceva să se schimbe.
- O ecuație doar din numere fixe (`=40`) nu are parametru de schimbat: numărul scris înlocuiește ecuația.
- Dacă nicio valoare a parametrului nu dă dimensiunea scrisă, bara de stare spune asta și nimic nu se schimbă.
- O schiță care nu poate fi rezolvată cu noua valoare își păstrează valorile anterioare, iar bara de stare îi numește schița.

Fiecare modificare, în orice sens, este un pas pentru {{key:Mod+Z}} și {{key:Mod+Y}}.
