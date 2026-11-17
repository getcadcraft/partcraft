---
title: Nizovi i simetrija elemenata
summary: Ponovi elemente u nizu sa Linearno, obrni ih oko ose sa Kružno i kopiraj elemente ili celo telo preko ravni sa Simetrija.
keywords: niz, linearni niz, kružni niz, polarni niz, niz, simetrija, simetričan, kopiranje elemenata, krug zavrtnja, osnovni element, simetrija tela
from: 702e9edb
---

Nizovi i simetrije kopiraju elemente koje si već napravio. Kopije su deo istorije: promeni original, pa kopije prate.

Ono što se kopira zavisi od toga šta element radi: niz izbočina dodaje materijal, a niz useka ili rupa ga uklanja. Nizovi mogu opet da se ponavljaju i da se preslikavaju. Uvezeno STEP telo može da se kopira; zaobljenja, obaranja ivica i ljuske ne mogu.

## Linearni niz

1. Izaberi element za kopiranje u istoriji (na primer Rupu ili Usek). Ako ništa nije izabrano, koristi se poslednji čvrsti element.
2. Izaberi {{ui:Linearno}}. Pojavljuju se tri kopije na rastojanju 20 mm duž X.
3. U desnom panelu podesi:

| Podešavanje | Šta radi | Podrazumevano |
|---|---|---|
| **Elementi za kopiranje** | Označi svaki element za kopiranje. Navedeni su samo elementi iznad niza | Izabrani element |
| **Smer** | Osa X, osa Y, osa Z, linija ili osna linija iz neke ranije skice, osa rotiranja ili izabrana ivica | Osa X |
| **Razmak (mm)** | Rastojanje između suseda | 20 |
| **Broj** | Ukupan broj, **uključujući original** (1 do 1000) | 3 |
| **Obrni smer** | Kopije idu u suprotnom smeru | Isključeno |

### Ivica kao smer

1. Klikni pravu ivicu dela u prikazu. Desni panel kaže **Ivica** i prikazuje njenu dužinu.
2. Izaberi {{ui:Linearno}}: niz ide duž te ivice.

Ili izaberi niz, izaberi ivicu i u **Smeru** izaberi „Izabrana ivica (koristi onu izabranu sada)“. Izabrana ivica je fiksirana u prostoru: ne prati kasnije promene. Linija skice prati svoju skicu.

## Kružni niz

1. Izaberi element za kopiranje (na primer jednu rupu blizu oboda diska).
2. Izaberi {{ui:Kružno}}. Šest kopija se pojavljuje ravnomerno raspoređeno po celom krugu.
3. Podesi:

| Podešavanje | Šta radi | Podrazumevano |
|---|---|---|
| **Elementi za kopiranje** | Kao kod linearnog niza | Izabrani element |
| **Osa** | Osa X, Y ili Z, linija skice, osa rotiranja ili izabrana ivica | Osa poslednjeg rotiranja ako postoji, inače osa Y |
| **Ugao (°)** | 360 raspoređuje kopije ravnomerno po krugu. Manje ih raspoređuje na taj ugao, prva i poslednja na krajevima | 360 |
| **Broj** | Ukupan broj, uključujući original | 6 |
| **Obrni smer** | Okreće se u suprotnom smeru | Isključeno |

Ose sveta prolaze kroz koordinatni početak. Za disk koji nije centriran u početku koristi osnu liniju skice ili osu rotiranja.

### Primer: osam rupa za zavrtnje na prirubnici

1. Rotiraj prirubnicu (vidi [Rotiranje obrtnog dela](topic:revolve)) oko Y ose.
2. Na gornjoj ravnoj strani prirubnice nacrtaj skicu, postavi jednu tačku na krug zavrtnja i napravi Rupu.
3. Sa izabranom Rupom izaberi {{ui:Kružno}}. Osa je već „Axis of Revolve1“.
4. Postavi **Broj** na `8`.

## Simetrija

1. Izaberi element za simetriju u istoriji, ili ne biraj ništa da zrcališ **celo telo do sada napravljeno**.
2. Izaberi {{ui:Simetrija}}. Zrcali se preko **Desne ravni**.

Da zrcališ celo telo preko strane dela, prvo klikni tu ravnu stranu, pa izaberi {{ui:Simetrija}}. (Klik na stranu briše izbor iz istorije, pa se uvek zrcali celo telo.)

Podešavanja u desnom panelu:

- **Simetrija**: označi **Celo telo (do sada napravljeno)**, ili to isključi i označi elemente za kopiranje.
- **Ravan simetrije**: Prednja ravan, Gornja ravan, Desna ravan, strana koju koristi sada („A face of Extrude1“ ili „A fixed plane“) ili „The face picked now“. Da zrcališ izabrane elemente preko strane: izaberi Simetriju u istoriji, klikni stranu u prikazu i izaberi „The face picked now“.

Zrcaljenje celog tela preko strane udvostručuje deo, na primer polovinu nosača u ceo nosač.

## Poruke

- „Prvo napravi element za kopiranje.“ ili „Prvo napravi čvrsto telo.“ Još nema ničega čvrstog za kopiranje.
- „Izaberi elemente za kopiranje.“ Svako polje **Elementi za kopiranje** je prazno.
- „Extrude2 nema čvrsto telo za kopiranje.“ Taj element nije uspeo ili je potisnut.
- „Fillet1 menja ivice ili zidove tela; ne može se kopirati. Kopiraj elemente koji prave čvrsta tela (izvlačenja, rotiranja, rupe, uvoz).“ Zaobljenja, obaranja ivica i ljuske ne mogu se pretvarati u niz ili simetriju; prvo napravi niz, pa zaobljenje.
- „Još nema tela za zrcaljenje.“

:::note
Kopije u nizu ne mogu se preskakati pojedinačno, a niz ne može da prati krivu skice. Nizovi i simetrije skica još nisu napravljeni: ponovljenu geometriju skice crtaj ručno ili pomoću **Dodaj po koordinatama**.
:::
