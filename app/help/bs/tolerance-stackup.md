---
title: Lanci tolerancija
summary: Izaberite lanac površi kroz dijelove sklopa i vidite koliko zazor na njegovom kraju može varirati, u najgorem slučaju i kao RSS, sa dimenzijama koje najviše utiču, poredanim prvo.
keywords: lanac tolerancija, stackup, analiza tolerancija, lanac tolerancije, lanac dimenzija, petlja, zazor, najgori slučaj, rss, korijen sume kvadrata, statističko toleriranje, doprinosi, osjetljivost, gd&t, opća tolerancija, iso 2768
from: cbdb3159
---

**Lanac tolerancija** zbraja dimenzije duž lanca kroz više dijelova da vidi koliko rezultat, obično zazor, može varirati kad je svaki dio napravljen bilo gdje unutar svojih tolerancija.

## Izbor lanca

1. Otvorite sklop i izaberite {{ui:Lanac tolerancija}} u grupi {{ui:Sklop}}. Kartica se otvara preko prikaza.
2. Izaberite šta se lanac mjeri **duž**: X, Y ili Z sklopa, ili {{ui:Normala prve površi}}.
3. Pritisnite {{ui:Odaberi lanac}} i kliknite površi kroz koje lanac ide, **redom**: počnite sa jedne strane zazora, prođite kroz dijelove i završite na drugoj strani zazora.
4. Pritisnite {{ui:Gotovo}} ili {{key:Enter}}. {{key:Backspace}} vraća posljednji klik; {{key:Esc}} otkazuje.

Dva klika na istom dijelu čine dimenziju tog dijela (njegovu udaljenost duž lanca). Klik na drugi dio pravi **dodirnu površ** između njih, tamo gdje se dijelovi sastaju; nema toleranciju, osim ako je ne upišete. Veze dodaju ili oduzimaju prema smjeru lanca i zatvaraju petlju: nominalni zazor je ono što model pokazuje.

Možete i ručno {{ui:Dodaj vezu}} i upisati njen nominalni, toleranciju i da li dodaje (+) ili oduzima (−).

## Dodijelite svakoj vezi toleranciju

Svaka veza ima **gornje** i **donje** odstupanje (na primjer +0.1 i −0.05). **Tolerancija iz** ih popunjava iz dijela:

- **Opća tolerancija**: polje Tolerancija u natpisnoj tabeli dijela (vidi [Crtež u PDF](topic:drawing-pdf)), kad čita ±0.1, +0.2/-0.1 ili ISO 2768-f, -m, -c ili -v (ISO 2768-1 linearne tolerancije, prema veličini veze). Opća tolerancija dijela se odmah koristi kad se lanac izabere.
- **GD&T**: svaki okvir kontrole svojstva na crtežu dijela. Zone pozicije, profila i izbijanja daju ± polovinu tolerancije. Tolerancija orijentacije ili oblika obično je već unutar tolerancije mjere: dodajte je samo tamo gdje lanac dodiruje kontrolisanu površ. Uz Ⓜ ili Ⓛ zona se uzima pri navedenoj veličini; bonus tolerancija se ne računa.
- **Upisana**: bilo koji brojevi koje upišete.

## Čitanje rezultata

- **Zazor, nominalni** i, kad su tolerancije nejednake, **Zazor, srednji**: +0.2/−0 i +0/−0.1 pomjeraju sredinu opsega.
- **Najgori slučaj**: svaka tolerancija na svojoj granici istovremeno. Zazor nikad ne može biti van ovoga.
- **RSS** (korijen sume kvadrata): svaka tolerancija uzeta kao tri standardne devijacije normalnog rasipanja, sabrana kao korijen zbira njihovih kvadrata. Većina sklopova je daleko unutar najgoreg slučaja; ovo je uobičajena procjena za dijelove koji se prave u serijama.
- Upišite **Zazor najmanje** i **Zazor najviše** da vidite da li najgori slučaj uvijek ostaje unutar i koliko sklopova na milion RSS očekuje van.
- Kolona **#** rangira veze po njihovom **udjelu** u RSS-u: zategnite prve da napravite najveću razliku.

{{ui:Spasi CSV}} zapisuje veze, njihove udjele i rezultate. Lanci se čuvaju u datoteci sklopa, a svaka promjena je jedan korak za {{key:Mod+Z}}.

:::note
Lanac tolerancija ide u jednom smjeru. Ne prati uglove ni zaokret duž lanca i ne čita tolerancije mjera iz skica: zadajte ih kao upisane tolerancije ili kroz natpisnu tabelu.
:::
