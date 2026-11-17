---
title: Dodaj geometriju skice upisivanjem koordinata
summary: Koristite Dodaj po koordinatama na panelu skice da postavite linije, osne linije, pravougaonike, krugove i tačke na tačne pozicije, samo tastaturom.
keywords: koordinate, upisani unos, unos s tastature, numerički unos, tačna pozicija, x y, apsolutne koordinate, pristupačnost, bez miša
from: 5e6c1656
---

Kad znate brojeve, upisivanje je brže od klikanja i kotiranja. **Dodaj po koordinatama** nalazi se u desnom panelu kad god je skica otvorena. Također omogućava da izradite skicu bez pokazivača.

Koordinate su u milimetrima, u osama same skice: x udesno, y gore kako gledate skicu, sa (0, 0) u ishodištu (crveni krug s križićem).

## Dodaj oblik

1. Otvorite skicu (vidi [Nacrtaj prvu skicu](topic:sketch-basics)).
2. U desnom panelu pomaknite se do **Dodaj po koordinatama**.
3. Izaberite oblik u **Dodaj**: Linija, Osna linija, Pravougaonik, Krug ili Tačka.
4. Popunite polja:

| Oblik | Polja |
|---|---|
| Linija | **Od x, y** i **Do x, y** |
| Osna linija | **Od x, y** i **Do x, y** |
| Pravougaonik | **Ugao x, y** i **Suprotni ugao x, y** |
| Krug | **Centar x, y** i **Poluprečnik** |
| Tačka | **Na x, y** |

5. Izaberite {{ui:Dodaj}} ili pritisnite {{key:Enter}} u bilo kojem polju.

Oblik se pojavljuje, a statusna traka npr. kaže: "Dodan je pravougaonik." Polja se prazne, spremna za sljedeći. Svako dodavanje je jedan korak poništavanja.

Upišite par kao dva broja odvojena zarezom ili razmakom: `0, 0`, `25 -10` ili `12.5,40`. Negativni brojevi i decimale su dozvoljeni. Poluprečnik mora biti veći od nule. Ako nešto nije čitljivo kao broj, statusna traka kaže: 'Unesite koordinate kao "x, y" i poluprečnik veći od nule.'

## Primjer: obris ploče s utorom, upisan

1. Otvorite skicu na **Prednjoj ravnini**.
2. **Dodaj**: Pravougaonik. **Ugao x, y**: `-50, -30`. **Suprotni ugao x, y**: `50, 30`. {{key:Enter}}.
3. **Dodaj**: Krug. **Centar x, y**: `-30, 0`. **Poluprečnik**: `5`. {{key:Enter}}.
4. **Centar x, y**: `30, 0`. **Poluprečnik**: `5`. {{key:Enter}}.
5. Izaberite {{ui:Izađi iz skice}}, zatim {{ui:Istisni}}: ploča 100 × 60 s dvije rupe prečnika 10 mm.

## Upisana geometrija je postavljena, ne učvršćena

Upisane koordinate postavljaju geometriju na pravo mjesto, ali **nisu relacije**. Oblici ostaju plavi (nedovoljno definisani) i mogu se pomjeriti ako ih povučete ili promijenite drugu kotu:

- upisani pravougaonik dobija svoje uglove, vodoravne i vertikalne relacije, kao nacrtan, ali ništa ga ne veže za ishodište;
- upisana linija nema vodoravnu ni vertikalnu relaciju, čak i ako ste upisali vodoravnu liniju;
- centar upisanog kruga je slobodan.

Da biste skicu potpuno definisali, dodajte kote i relacije naknadno (vidi [Potpuno definišite skicu](topic:relations-dimensions)). Na primjer, izaberite ugao pravougaonika i ishodište, pa izaberite {{ui:• Poklapanje}}, ili kotirajte centre krugova od ishodišta.

:::note
Bez pokazivača možete doći ovako daleko: pomjerite se na red ravnine u historiji tasterom {{key:Tab}} i strelicama, pritisnite {{key:Enter}} da ga izaberete, pritisnite {{key:S}} za skicu, dodajte oblike ovdje, i dođite do **Uredi** pored svake kote i do {{ui:Izađi iz skice}} tasterom {{key:Tab}}. Izbor geometrije, pa time i dodavanje relacija ili novih kota, i dalje zahtijeva klik ili dodir u ovoj verziji.
:::

## Ograničenja

- Lukovi se još ne mogu upisati. Nacrtajte ih alatom Luk ili upišite krug i koristite relacije.
- U ovom polju nema relativnih koordinata (od posljednje tačke) ni polarnih koordinata (dužina i ugao).
- Upisana geometrija se ne hvata za postojeće tačke. Upišite iste koordinate kao postojeća tačka, pa dodajte relaciju {{ui:• Poklapanje}} između njih ako moraju ostati spojene.
