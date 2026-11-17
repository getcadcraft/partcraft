---
title: Pokretanje sa USB uređaja
summary: Šta inženjerski alati upisuju i gde, da CadCraft Studio može da radi sa USB memorije ili bilo koje fascikle bez instalera i bez administratorskih prava: podešavanja, generatori, keševi i datoteke delova, i šta ostaje na memoriji.
keywords: usb, prenosivo, bez instalera, administrator, admin, podešavanja, fascikla podataka, generatori, gde se upisuju datoteke, van mreže, privatnost, pristup sistemu
from: 263efc79
---

Inženjerski alati (generatori, inženjerska biblioteka, provere i datoteke podataka) ne traže **administratorska prava** i **ne zahtevaju instaler**. Upisuju samo ono što je navedeno ovde, i ništa drugo.

| Šta | Gde se čuva |
|---|---|
| Vaši delovi, sa njihovim generisanim telima, tabelama podataka i proverama | Datoteka dela koju sačuvate (`.partcraft.json`), na mestu gde je sačuvate. |
| Generatori koje ste otvorili iz datoteka | U sopstvenom skladištu aplikacije: lokalno skladište pregledača na veb stranici, i fascikla `data` pored programa u prenosivom Studiju. Najviše 20. |
| Podešavanja (veličine voksela koje ste postavili, niti rešavača, raspored) | Isto skladište aplikacije. |
| Tabele podataka, polja, mreže | Samo tamo gde ih sačuvate: preuzimanje ide na mesto koje izaberete. |

Alati **ne prave sopstvene mrežne pozive**: generatori koji se isporučuju su datoteke u sopstvenoj fascikli aplikacije, a biblioteka i provere rade na vašem računaru, u radnom procesu koji ne može da pristupi mreži. Inženjerski podaci (svojstva vode i vazduha, materijali) nalaze se unutar aplikacije. Generator koji otvorite iz datoteke čita se na vašem računaru i ne ide nigde.

## Prenosiva Windows zip datoteka i Linux

Prenosivi Studio za Windows čuva podešavanja, keševe i dodatke u fascikli `data` pored programa. Linux AppImage ih čuva pored sebe kada se pored njega nalazi datoteka pod imenom `portable`; bez te datoteke koristi vašu početnu fasciklu. Ne postoji prenosivi oblik za Mac: sistem ne dozvoljava aplikaciji preuzetoj sa interneta da piše pored sebe. Sopstvene napomene o prenosivosti ljuske (pomoć za `Studio`) navode šta program upisuje.

## Pristup sistemu

Ništa ovde ne traži pristup sistemu. Štampači, serijske mašine i USB uređaji su posebni: traže pristup kada im posao zatreba, po jednom za svaki uređaj, i ništa u generatorima ni proverama ih ne dira.
