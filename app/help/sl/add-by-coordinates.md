---
title: Vnos geometrije skice s koordinatami
summary: Z ukazom Dodaj po koordinatah v podoknu skice postavite črte, osne črte, pravokotnike, krožnice in točke na natančne položaje, samo s tipkovnico.
keywords: koordinate, vneseni vnos, tipkovni vnos, številčni vnos, natančen položaj, x y, absolutne koordinate, dostopnost, brez miške
from: 5e6c1656
---

Ko poznate številke, jih je hitreje vnesti kot klikati in kotirati. **Dodaj po koordinatah** je v desnem podoknu, kadarkoli je odprta skica. Z njim lahko skico zgradite tudi brez kazalca.

Koordinate so v milimetrih, v lastnih oseh skice: x poteka desno, y gor, če gledate skico, (0, 0) pa je izhodišče (rdeči krogec s križcem).

## Dodajanje oblike

1. Odprite skico (glejte [Narišite prvo skico](topic:sketch-basics)).
2. V desnem podoknu se pomaknite do **Dodaj po koordinatah**.
3. V **Dodaj** izberite obliko: Črta, Osna črta, Pravokotnik, Krožnica ali Točka.
4. Izpolnite polja:

| Oblika | Polja |
|---|---|
| Črta | **Od x, y** in **Do x, y** |
| Osna črta | **Od x, y** in **Do x, y** |
| Pravokotnik | **Oglišče x, y** in **Nasprotno oglišče x, y** |
| Krožnica | **Središče x, y** in **Polmer** |
| Točka | **Na x, y** |

5. Izberite {{ui:Dodaj}} ali pritisnite {{key:Enter}} v katerem koli polju.

Oblika se prikaže, vrstica stanja pa npr. sporoči: „Dodan pravokotnik.“ Polja se izpraznijo za naslednjo obliko. Vsaka dodana oblika je en korak razveljavitve.

Par vnesite kot dve številki, ločeni z vejico ali presledkom: `0, 0`, `25 -10` ali `12.5,40`. Negativna števila in decimalna števila so dovoljena. Polmer mora biti večji od nič. Če vrednost ni številka, vrstica stanja sporoči: 'Vnesite koordinate kot „x, y“ in polmer, večji od nič.'

## Primer: obris ploščice z utorom, vnesen s tipkovnico

1. Odprite skico na **Sprednja ravnina**.
2. **Dodaj**: Pravokotnik. **Oglišče x, y**: `-50, -30`. **Nasprotno oglišče x, y**: `50, 30`. {{key:Enter}}.
3. **Dodaj**: Krožnica. **Središče x, y**: `-30, 0`. **Polmer**: `5`. {{key:Enter}}.
4. **Središče x, y**: `30, 0`. **Polmer**: `5`. {{key:Enter}}.
5. Izberite {{ui:Zapusti skico}}, nato {{ui:Iztisni}}: ploščica 100 × 60 z dvema izvrtinama s premerom 10 mm.

## Vnesena geometrija je postavljena, ni pa zavezana

Vnesene koordinate postavijo geometrijo na pravo mesto, vendar **niso relacije**. Oblike ostanejo modre (premalo določene) in se lahko premaknejo, če jih povlečete ali spremenite drugo koto:

- vnesen pravokotnik ima svoje oglišče ter vodoravne in navpične relacije kot narisan, vendar ga nič ne veže na izhodišče;
- vnesena črta nima vodoravne ali navpične relacije, tudi če ste vnesli vodoravno črto;
- središče vnesene krožnice je prosto.

Če želite skico popolnoma določiti, naknadno dodajte kote in relacije (glejte [Popolnoma določite skico](topic:relations-dimensions)). Na primer: izberite oglišče pravokotnika in izhodišče ter izberite {{ui:• Sovpadanje}}, ali pa kotirajte središča krožnic od izhodišča.

:::note
Brez kazalca lahko pridete do tod: s {{key:Tab}} in puščičnimi tipkami se premaknete na vrstico ravnine v zgodovini, pritisnete {{key:Enter}}, da jo izberete, pritisnete {{key:S}} za skico, dodajte oblike in s {{key:Tab}} pridete do **Uredi** poleg vsake kote ter do {{ui:Zapusti skico}}. Izbira geometrije in s tem dodajanje relacij ali novih kot v tej različici še vedno zahteva klik ali dotik.
:::

## Omejitve

- Lokov še ni mogoče vnesti. Narišite jih z orodjem za lok ali vnesite krožnico in uporabite relacije.
- V tem polju ni relativnih koordinat (od zadnje točke) ali polarnih koordinat (dolžina in kot).
- Vnesena geometrija se ne prilepi na obstoječe točke. Vnesite enake koordinate kot obstoječa točka, nato dodajte relacijo {{ui:• Sovpadanje}} med njima, če morata ostati povezani.
