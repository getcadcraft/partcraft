---
title: Dodaj geometriju skice kucanjem koordinata
summary: Koristi Dodaj po koordinatama na panelu skice da postaviš linije, osne linije, pravougaonike, krugove i tačke na tačne položaje, samo tastaturom.
keywords: koordinate, unos kucanjem, unos sa tastature, brojčani unos, tačan položaj, x y, apsolutne koordinate, pristupačnost, bez miša
from: 5e6c1656
---

Kad znaš brojeve, kucanje je brže od klikanja i kotiranja. **Dodaj po koordinatama** nalazi se na desnom panelu kad god je skica otvorena. Takođe omogućava da napraviš skicu bez ikakvog pokazivača.

Koordinate su u milimetrima, u sopstvenim osama skice: x udesno, a y naviše kad gledaš skicu, sa (0, 0) u početnoj tački (crveni krug sa krstom).

## Dodaj oblik

1. Otvori skicu (vidi [Nacrtaj prvu skicu](topic:sketch-basics)).
2. Na desnom panelu pomeri se do **Dodaj po koordinatama**.
3. Izaberi oblik u **Dodaj**: Linija, Osna linija, Pravougaonik, Krug ili Tačka.
4. Popuni polja:

| Oblik | Polja |
|---|---|
| Linija | **Od x, y** i **Do x, y** |
| Osna linija | **Od x, y** i **Do x, y** |
| Pravougaonik | **Ugao x, y** i **Suprotan ugao x, y** |
| Krug | **Centar x, y** i **Poluprečnik** |
| Tačka | **Na x, y** |

5. Izaberi {{ui:Dodaj}} ili pritisni {{key:Enter}} u bilo kom polju.

Oblik se pojavljuje, a statusna traka kaže, na primer, „Dodat je pravougaonik.“ Polja se isprazne, spremna za sledeći. Svaki dodatak je jedan korak za Opozovi.

Unesi par kao dva broja odvojena zarezom ili razmakom: `0, 0`, `25 -10` ili `12.5,40`. Negativni brojevi i decimale su u redu. Poluprečnik mora biti veći od nule. Ako nešto ne može da se pročita kao broj, statusna traka kaže: „Unesi koordinate kao x, y i poluprečnik veći od nule.“

## Primer: kontura ploče sa dve rupe, unesena kucanjem

1. Otvori skicu na ravni **Front**.
2. **Dodaj**: Pravougaonik. **Ugao x, y**: `-50, -30`. **Suprotan ugao x, y**: `50, 30`. {{key:Enter}}.
3. **Dodaj**: Krug. **Centar x, y**: `-30, 0`. **Poluprečnik**: `5`. {{key:Enter}}.
4. **Centar x, y**: `30, 0`. **Poluprečnik**: `5`. {{key:Enter}}.
5. Izaberi {{ui:Izađi iz skice}}, pa {{ui:Izvlačenje}}: ploča 100 × 60 sa dve rupe prečnika 10 mm.

## Unesena geometrija je postavljena, ne vezana

Unesene koordinate postavljaju geometriju na pravo mesto, ali nisu **relacije**. Oblici ostaju plave boje (nedovoljno definisani) i mogu da se pomere ako ih prevučeš ili promeniš neku drugu kotu:

- uneseni pravougaonik dobija svoje uglove, vodoravne i uspravne relacije, kao nacrtani, ali ga ništa ne vezuje za početnu tačku;
- uneta linija nema vodoravnu ni uspravnu relaciju, čak i ako si uneo vodoravnu liniju;
- centar unesenog kruga je slobodan.

Da bi skica bila potpuno definisana, dodaj kote i relacije posle (vidi [Potpuno definiši skicu](topic:relations-dimensions)). Na primer, izaberi ugao pravougaonika i početnu tačku pa izaberi {{ui:• Poklapanje}}, ili kotiraj centre krugova od početne tačke.

:::note
Bez pokazivača možeš da dođeš dovde: pomeri se do reda ravni u istoriji sa {{key:Tab}} i tasterima sa strelicama, pritisni {{key:Enter}} da je izabereš, pritisni {{key:S}} za skicu, dodaj oblike ovde, i dođi do **Uredi** pored svake kote i {{ui:Izađi iz skice}} sa {{key:Tab}}. Biranje geometrije, a time i dodavanje relacija ili novih kota, i dalje zahteva klik ili dodir u ovoj verziji.
:::

## Ograničenja

- Lukove za sada nije moguće uneti. Nacrtaj ih alatom Luk ili unesi krug i koristi relacije.
- Ne postoje relativne koordinate (od poslednje tačke) ni polarne koordinate (dužina i ugao) u ovom polju.
- Uneta geometrija ne hvata se za postojeće tačke. Unesi iste koordinate kao postojeća tačka, pa dodaj relaciju {{ui:• Poklapanje}} između njih ako moraju ostati spojene.
