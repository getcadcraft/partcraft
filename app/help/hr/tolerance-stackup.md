---
title: Lanci tolerancija
summary: Odaberite lanac ploha kroz dijelove sklopa i vidite koliko se razmak na njegovu kraju može mijenjati, za najgori slučaj i RSS, s dimenzijama koje najviše utječu, rangiranim na vrhu.
keywords: lanac tolerancija, stack-up, analiza tolerancija, lanac dimenzija, petlja, razmak, zazor, najgori slučaj, rss, korijen zbroja kvadrata, statističke tolerancije, doprinosi, osjetljivost, gd&t, opća tolerancija, iso 2768
from: cbdb3159
---

**Lanac tolerancija** zbraja dimenzije duž lanca kroz nekoliko dijelova da vidi koliko rezultat — obično razmak — može varirati kad je svaki dio izrađen bilo gdje unutar svojih tolerancija.

## Odabir lanca

1. Otvorite sklop i odaberite {{ui:Lanac tolerancija}} u grupi {{ui:Sklop}}. Iznad prikaza otvara se kartica.
2. Odaberite duž čega se lanac mjeri: X, Y ili Z sklopa, ili {{ui:Normala prve plohe}}.
3. Pritisnite {{ui:Odaberi lanac}} i kliknite plohe kroz koje lanac prolazi, **redom**: počnite s jedne strane razmaka, prođite kroz dijelove i završite na drugoj strani razmaka.
4. Pritisnite {{ui:Gotovo}} ili {{key:Enter}}. {{key:Backspace}} vraća posljednji klik; {{key:Esc}} odustaje.

Dva klika na istom dijelu čine dimenziju tog dijela (njegovu udaljenost duž lanca). Klik na drugi dio čini **sučelje** između njih, gdje se dijelovi dodiruju; nema tolerancije osim ako je ne upišete. Članovi se zbrajaju ili oduzimaju ovisno o smjeru lanca i zatvaraju petlju: nominalni razmak je ono što model prikazuje.

Također možete ručno {{ui:Dodaj član}} i upisati njegov nominal, toleranciju i zbraja li (+) ili oduzima (−).

## Zadajte toleranciju svakom članu

Svaki član ima **gornje** i **donje** odstupanje (na primjer +0.1 i −0.05). **Tolerancija iz** ih popunjava iz dijela:

- **Opća tolerancija**: polje Tolerancija u zaglavlju crteža dijela (vidi [Crtež u PDF](topic:drawing-pdf)), kad glasi ±0.1, +0.2/-0.1 ili ISO 2768-f, -m, -c ili -v (ISO 2768-1 linearne tolerancije, prema veličini člana). Opća tolerancija dijela koristi se odmah kad se lanac odabere.
- **GD&T**: svaki okvir kontrole značajke na crtežu dijela. Zone položaja, profila i kružnog otklona daju ± polovicu tolerancije. Tolerancija orijentacije ili oblika obično je već unutar tolerancije veličine: dodajte je samo tamo gdje lanac dodiruje kontroliranu plohu. S Ⓜ ili Ⓛ zona se uzima pri svojoj navedenoj veličini; bonus tolerancija se ne broji.
- **Upisano**: bilo koji brojevi koje upišete.

## Čitanje rezultata

- **Razmak, nominalni** i, kad su tolerancije nejednake, **Razmak, srednji**: +0.2/−0 i +0/−0.1 pomiču sredinu raspona.
- **Najgori slučaj**: sve tolerancije na svojoj granici istovremeno. Razmak nikad ne može biti izvan ovoga.
- **RSS** (korijen zbroja kvadrata): svaka tolerancija uzima se kao tri standardne devijacije normalnog rasprostiranja i zbraja se kao kvadratni korijen zbroja njihovih kvadrata. Većina sklopova je dobro unutar najgoreg slučaja; ovo je uobičajena procjena za dijelove izrađene u serijama.
- Zadajte **Razmak najmanje** i **Razmak najviše** da vidite ostaje li najgori slučaj uvijek unutar granica i koliko sklopova na milijun RSS očekuje izvan njih.
- Stupac **#** rangira članove prema njihovom **udjelu** u RSS-u: stegnite prve da napravite najveću razliku.

{{ui:Spremi CSV}} zapisuje članove, njihove udjele i rezultate. Lanci se spremaju u datoteku sklopa, a svaka promjena je jedan korak za {{key:Mod+Z}}.

:::note
Lanac ide u jednom smjeru. Ne prati kutove ni zaokrete duž lanca, i ne čita tolerancije veličina iz skica: zadajte ih kao upisane tolerancije ili kroz zaglavlje crteža.
:::
