---
title: Pokretanje s USB uređaja
summary: Šta inženjerski alati upisuju i gdje, kako bi CadCraft Studio mogao raditi s USB štapa ili bilo koje mape bez instalera i bez administratorskih prava: postavke, generatori, keš i datoteke dijelova te šta ostaje na štapu.
keywords: usb, prenosivo, bez instalera, administrator, admin, postavke, mapa podataka, generatori, gdje se datoteke upisuju, van mreže, privatnost, pristup hostu
from: 263efc79
---

Inženjerski alati (generatori, inženjerska biblioteka, provjere i datoteke podataka) ne traže **administratorska prava** i **ne zahtijevaju instaler**. Upisuju samo ono što je navedeno ovdje, ništa drugo.

| Šta | Gdje se čuva |
|---|---|
| Vaši dijelovi, s generisanim tijelima, listovima podataka i provjerama | Datoteka dijela koju spasite (`.partcraft.json`), na mjestu gdje je spasite. |
| Generatori koje ste otvorili iz datoteka | U vlastitoj pohrani aplikacije: lokalna pohrana preglednika na web stranici, a u prenosivom Studiju mapa `data` pored programa. Najviše 20. |
| Postavke (veličine voksela koje ste postavili, niti rješavača, raspored) | Ista pohrana aplikacije. |
| Listovi podataka, polja, mreže | Samo tamo gdje ih spasite: preuzimanje ide na mjesto koje odaberete. |

Alati ne prave **nikakve vlastite mrežne pozive**: generatori koji se isporučuju su datoteke u mapi same aplikacije, biblioteka i provjere rade na vašem računaru u procesu koji ne može pristupiti mreži, a inženjerski podaci (svojstva vode i zraka, materijali) nalaze se unutar aplikacije. Generator koji otvorite iz datoteke čita se na vašem računaru i nigdje ne ide.

## Prenosivi zip za Windows i Linux

Prenosivi Studio za Windows čuva svoje postavke, keš i dodatke u mapi `data` pored programa. Linux AppImage ih čuva pored sebe kada se pored njega nalazi datoteka pod imenom `portable`; bez te datoteke koristi vašu početnu mapu. Prenosivog oblika za Mac nema: sistem ne dozvoljava aplikaciji preuzetoj s interneta da piše pored sebe. Prenosive napomene same ljuske (pomoć `Studio`) navode šta program upisuje.

## Pristup hostu

Ovdje se ne traži pristup hostu. Štampači, serijske mašine i USB uređaji su odvojeni: traže dozvolu kada im posao zatreba, jednom po uređaju, a generatori i provjere ih nikada ne dodiruju.
