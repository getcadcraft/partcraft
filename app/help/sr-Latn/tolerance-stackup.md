---
title: Zbir tolerancija
summary: Izaberite lanac površina kroz delove sklopa i vidite koliko se razmak na njegovom kraju može menjati, u najgorem slučaju i po RSS, uz dimenzije koje najviše utiču, rangirane prvo.
keywords: zbir tolerancija, zbir, analiza tolerancija, lanac tolerancija, lanac dimenzija, petlja, razmak, zazor, najgori slučaj, rss, koren zbira kvadrata, statističko tolerisanje, doprinosi, osetljivost, gd&t, opšta tolerancija, iso 2768
from: cbdb3159
---

**Zbir tolerancija** sabira dimenzije duž lanca kroz nekoliko delova da bi se videlo koliko rezultat — obično razmak — može da varira kad je svaki deo napravljen bilo gde unutar svojih tolerancija.

## Izaberite lanac

1. Otvorite sklop i izaberite {{ui:Zbir tolerancija}} u grupi {{ui:Sklop}}. Iznad prikaza se otvara kartica.
2. Izaberite duž čega se lanac meri: X, Y ili Z sklopa, ili {{ui:Normala prve površine}}.
3. Pritisnite {{ui:Izaberi lanac}} i kliknite površine kroz koje lanac prolazi, **redom**: počnite sa jedne strane razmaka, prođite kroz delove i završite na drugoj strani razmaka.
4. Pritisnite {{ui:Gotovo}} ili Enter. Backspace vraća poslednji klik; Esc otkazuje.

Dva klika na isti deo prave dimenziju tog dela (njegovo rastojanje duž lanca). Klik na drugi deo pravi **dodirnu površinu** tamo gde se delovi spajaju; ona nema toleranciju, osim ako je sami ne unesete. Veze sabiraju ili oduzimaju prema smeru lanca i zatvaraju petlju: nominalni razmak je ono što model pokazuje.

Možete i ručno {{ui:Dodaj vezu}} i uneti njen nominalni iznos, toleranciju i da li dodaje (+) ili oduzima (−).

## Odredite toleranciju svake veze

Svaka veza ima **gornje** i **donje** odstupanje (na primer +0.1 i −0.05). **Tolerancija iz** ih popunjava iz dela:

- **Opšta tolerancija**: polje Tolerancija u naslovnom bloku crteža dela (pogledajte [Crtež u PDF](topic:drawing-pdf)), kad piše ±0.1, +0.2/-0.1 ili ISO 2768-f, -m, -c ili -v (ISO 2768-1 linearne tolerancije, prema veličini veze). Opšta tolerancija dela primenjuje se odmah kad se lanac izabere.
- **GD&T**: svaki okvir kontrole oblika na crtežu dela. Zone položaja, profila i radijalnog bacanja daju ± polovinu tolerancije. Tolerancija orijentacije ili oblika obično je već unutar tolerancije mere: dodajte je samo tamo gde lanac dodiruje kontrolisanu površinu. Uz Ⓜ ili Ⓛ zona se uzima pri navedenoj veličini; bonus tolerancija se ne računa.
- **Unesena**: bilo koji brojevi koje unesete.

## Pročitajte rezultate

- **Razmak, nominalni** i, kad su tolerancije nejednake, **Razmak, srednji** — +0.2/−0 i +0/−0.1 pomeraju sredinu opsega.
- **Najgori slučaj**: svaka tolerancija na svojoj granici istovremeno. Razmak nikad ne može biti van ovoga.
- **RSS** (koren zbira kvadrata): svaka tolerancija uzima se kao tri standardne devijacije normalnog rasipanja i sabira kao koren zbira njihovih kvadrata. Većina sklopova upada daleko unutar najgoreg slučaja; ovo je uobičajena procena za delove koji se prave u seriji.
- Unesite **Razmak najmanje** i **Razmak najviše** da vidite da li najgori slučaj uvek ostaje unutra, i koliko sklopova na milion RSS očekuje van.
- Kolona **#** rangira veze prema njihovom **udelu** u RSS: zategnite prve da napravite najveću razliku.

{{ui:Sačuvaj CSV}} upisuje veze, njihove udele i rezultate. Zbirovi tolerancija se čuvaju u datoteci sklopa, a svaka promena je jedan korak za {{key:Mod+Z}}.

:::note
Zbir tolerancija ide u jednom smeru. Ne prati uglove ni skretanja duž lanca, i ne čita tolerancije mera iz skica: unesite ih kao zadate tolerancije ili kroz naslovni blok.
:::
