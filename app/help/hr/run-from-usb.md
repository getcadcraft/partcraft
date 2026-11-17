---
title: Pokretanje s USB pogona
summary: Što inženjerski alati zapisuju i gdje, kako bi CadCraft Studio mogao raditi s USB štapića ili bilo koje mape bez instalacijskog programa i bez administratorskih prava: postavke, generatori, predmemorija i datoteke dijelova te što ostaje na štapiću.
keywords: usb, prijenosno, bez instalacijskog programa, administrator, admin, postavke, mapa podataka, generatori, gdje se zapisuju datoteke, izvan mreže, privatnost, pristup računalu
from: 263efc79
---

Inženjerski alati (generatori, inženjerska knjižnica, provjere i datoteke podataka) ne trebaju **administratorska prava** ni **instalacijski program**. Zapisuju samo ono što je navedeno ovdje i ništa više.

| Što | Gdje se čuva |
|---|---|
| Vaši dijelovi, zajedno s generiranim tijelima, listovima podataka i provjerama | Datoteka dijela koju spremite (`.partcraft.json`), na mjestu gdje je spremite. |
| Generatori koje ste otvorili iz datoteka | U vlastitoj pohrani aplikacije: lokalna pohrana preglednika na web stranici i mapa `data` pored programa u prijenosnom Studiju. Najviše 20. |
| Postavke (veličine voksela koje postavite, niti rješavača, raspored) | Ista pohrana aplikacije. |
| Listovi podataka, polja, mreže | Samo tamo gdje ih spremite: preuzimanje ide onamo gdje odaberete. |

Alati **sami ne šalju nikakve zahtjeve mreži**: generatori koji se isporučuju datoteke su u mapi same aplikacije, knjižnica i provjere rade na vašem računalu u radnom procesu koji ne može pristupiti mreži, a inženjerski podaci (svojstva vode i zraka, materijali) nalaze se unutar aplikacije. Generator koji otvorite iz datoteke čita se na vašem računalu i nigdje ne odlazi.

## Prijenosna Windows zip datoteka i Linux

Prijenosni Studio za Windows čuva svoje postavke, predmemoriju i dodatke u mapi `data` pored programa. Linux AppImage čuva ih pored sebe kada je pored njega datoteka pod nazivom `portable`; bez te datoteke koristi vašu početnu mapu. Prijenosnog oblika za Mac nema: sustav ne dopušta aplikaciji preuzetoj s interneta da piše pored sebe. Vlastite napomene o prijenosnosti ljuske (pomoć za `Studio`) navode što program zapisuje.

## Pristup računalu

Ovdje se ništa ne traži pristup računalu. Pisači, serijski uređaji i USB uređaji su zasebni: traže ga kada ga zadatak zatraži, jednom po uređaju, a generatori i provjere ih ne diraju.
