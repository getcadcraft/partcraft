---
title: Dodavanje geometrije skice upisom koordinata
summary: Upotrijebite Dodaj koordinatama na ploči skice za postavljanje linija, osi, pravokutnika, kružnica i točaka na točne položaje, samo tipkovnicom.
keywords: koordinate, upisani unos, unos tipkovnicom, numerički unos, točan položaj, x y, apsolutne koordinate, pristupačnost, bez miša
from: 5e6c1656
---

Kada znate brojeve, njihovo upisivanje brže je od klikanja i kotiranja. **Dodaj koordinatama** nalazi se na desnoj ploči kad god je skica otvorena. Omogućuje i izradu skice bez pokazivača.

Koordinate su u milimetrima, u vlastitim osima skice: x je udesno, a y prema gore kad gledate skicu, s (0, 0) u ishodištu (crveni krug s križićem).

## Dodavanje oblika

1. Otvorite skicu (vidi [Nacrtajte prvu skicu](topic:sketch-basics)).
2. Na desnoj ploči pomaknite se do **Dodaj koordinatama**.
3. Odaberite oblik u **Dodaj**: Linija, Os, Pravokutnik, Kružnica ili Točka.
4. Ispunite polja:

| Oblik | Polja |
|---|---|
| Linija | **Od x, y** i **Do x, y** |
| Os | **Od x, y** i **Do x, y** |
| Pravokutnik | **Kut x, y** i **Suprotni kut x, y** |
| Kružnica | **Središte x, y** i **Radijus** |
| Točka | **Na x, y** |

5. Odaberite {{ui:Dodaj}}, ili pritisnite {{key:Enter}} u bilo kojem polju.

Oblik se pojavi, a statusna traka npr. kaže: „Dodan je pravokutnik.“ Polja se isprazne i spremna su za sljedeći unos. Svako dodavanje jedan je korak poništavanja.

Par upišite kao dva broja odvojena zarezom ili razmakom: `0, 0`, `25 -10` ili `12.5,40`. Negativni brojevi i decimale su dopušteni. Radijus mora biti veći od nule. Ako nešto nije broj, statusna traka kaže: „Koordinate upišite kao ‚x, y‘ i radijus veći od nule.“

## Primjer: obris pločice s utorom, upisan

1. Otvorite skicu na **Prednja ravnina**.
2. **Dodaj**: Pravokutnik. **Kut x, y**: `-50, -30`. **Suprotni kut x, y**: `50, 30`. {{key:Enter}}.
3. **Dodaj**: Kružnica. **Središte x, y**: `-30, 0`. **Radijus**: `5`. {{key:Enter}}.
4. **Središte x, y**: `30, 0`. **Radijus**: `5`. {{key:Enter}}.
5. Odaberite {{ui:Izađi iz skice}}, zatim {{ui:Izvuci}}: pločica 100 × 60 s dva provrta promjera 10 mm.

## Upisana geometrija je postavljena, ne učvršćena

Upisane koordinate postavljaju geometriju na pravo mjesto, ali **nisu ograničenja**. Oblici ostaju plavi (nedovoljno definirani) i mogu se pomaknuti ako ih povučete ili promijenite drugu kotu:

- upisani pravokutnik dolazi sa svojim kutovima te vodoravnim i okomitim ograničenjima, kao i nacrtani, ali ga ništa ne veže za ishodište;
- upisana linija nema vodoravno ni okomito ograničenje, čak i ako ste upisali vodoravnu liniju;
- središte upisane kružnice je slobodno.

Da biste skicu potpuno definirali, naknadno dodajte kote i ograničenja (vidi [Potpuno definirajte skicu](topic:relations-dimensions)). Na primjer, odaberite kut pravokutnika i ishodište te odaberite {{ui:• Podudarno}}, ili kotirajte središta kružnica od ishodišta.

:::note
Bez pokazivača možete doći ovako: pomaknite se do retka ravnine u povijesti tipkom {{key:Tab}} i tipkama sa strelicama, pritisnite {{key:Enter}} za odabir, pritisnite {{key:S}} za skiciranje, dodajte oblike ovdje, a do **Uredi** pored svake kote i do {{ui:Izađi iz skice}} stignete tipkom {{key:Tab}}. Odabir geometrije, pa time i dodavanje ograničenja ili novih kota, u ovoj verziji i dalje zahtijeva klik ili dodir.
:::

## Ograničenja

- Lukovi se još ne mogu upisati. Nacrtajte ih alatom Luk ili upišite kružnicu i koristite ograničenja.
- U ovom okviru nema relativnih koordinata (od zadnje točke) ni polarnih koordinata (duljina i kut).
- Upisana geometrija ne privlači se na postojeće točke. Upišite iste koordinate kao postojeća točka, zatim dodajte ograničenje {{ui:• Podudarno}} između njih ako moraju ostati spojene.
