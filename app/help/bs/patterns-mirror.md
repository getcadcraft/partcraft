---
title: Uzorci i zrcaljenje elemenata
summary: Ponovi elemente u nizu sa Linearno, rotiraj oko ose sa Kružno, i kopiraj elemente ili cijelo tijelo preko ravnine sa Zrcaljenje.
keywords: uzorak, linearni uzorak, kružni uzorak, polarni niz, niz, zrcaljenje, simetrično, kopiranje elemenata, krug rupa, početni element, zrcaljenje tijela
from: 702e9edb
---

Uzorci i zrcaljenja kopiraju elemente koje si već napravio. Kopije su dio historije: promijeni original i kopije slijede.

Šta se kopira zavisi od toga šta element radi: uzorak dodatka dodaje materijal, a uzorak izrezivanja ili rupe ga uklanja. Uzorci se mogu ponovo uzorkovati i zrcaliti. Uvezeno STEP tijelo također se može kopirati; zaobljenja, skošenja i ljuske ne mogu.

## Linearni uzorak

1. Odaberi element za kopiranje u historiji (na primjer Rupu ili Izrezivanje). Ako ništa nije odabrano, koristi se posljednji čvrsti element.
2. Odaberi {{ui:Linearno}}. Tri kopije se pojave na razmaku od 20 mm duž X.
3. U desnom panelu postavi:

| Postavka | Šta radi | Zadano |
|---|---|---|
| **Elementi za kopiranje** | Označi svaki element za kopiranje. Navedeni su samo elementi iznad uzorka | Odabrani element |
| **Smjer** | X osa, Y osa, Z osa, linija ili osna linija iz bilo koje ranije skice, osa rotiranja, ili odabrana ivica | X osa |
| **Razmak (mm)** | Udaljenost između susjeda | 20 |
| **Broj** | Ukupan broj, **uključujući original** (1 do 1000) | 3 |
| **Obrni smjer** | Kopije idu u suprotnom smjeru | Isključeno |

### Koristi ivicu kao smjer

1. Klikni ravnu ivicu dijela u pogledu. Desni panel kaže **Ivica** i prikazuje njenu dužinu.
2. Odaberi {{ui:Linearno}}: uzorak ide duž te ivice.

Ili odaberi uzorak, klikni ivicu i izaberi "Odabrana ivica (koristi onu odabranu sada)" u **Smjer**. Odabrana ivica je fiksirana u prostoru i ne prati kasnije promjene. Linija skice prati svoju skicu.

## Kružni uzorak

1. Odaberi element za kopiranje (na primjer jednu rupu blizu ruba diska).
2. Odaberi {{ui:Kružno}}. Šest kopija se pojavi ravnomjerno raspoređeno po cijelom krugu.
3. Postavi:

| Postavka | Šta radi | Zadano |
|---|---|---|
| **Elementi za kopiranje** | Kao kod linearnog | Odabrani element |
| **Osa** | X, Y ili Z osa, linija skice, osa rotiranja ili odabrana ivica | Osa posljednje rotacije ako postoji, inače Y osa |
| **Ugao (°)** | 360 raspoređuje kopije ravnomjerno po cijelom krugu. Manje ih raspoređuje na taj ugao, prva i posljednja na krajevima | 360 |
| **Broj** | Ukupan broj, uključujući original | 6 |
| **Obrni smjer** | Ide u suprotnom smjeru | Isključeno |

Svjetske ose prolaze kroz ishodište. Za disk čiji centar nije u ishodištu koristi osnu liniju skice ili osu rotiranja.

### Primjer: osam rupa za zavrtanj na prirubnici

1. Rotiraj prirubnicu (vidi [Rotiranje dijela sa osom](topic:revolve)) oko Y ose.
2. Skiciraj na ravnoj gornjoj površini prirubnice, stavi jednu tačku na krug zavrtanja i napravi Rupu.
3. Sa odabranom Rupom odaberi {{ui:Kružno}}. Osa je već "Osa rotiranja 1".
4. Postavi **Broj** na `8`.

## Zrcaljenje

1. Odaberi element za zrcaljenje u historiji, ili ništa da zrcališ **cijelo tijelo onako kako je do sada izgrađeno**.
2. Odaberi {{ui:Zrcaljenje}}. Zrcali se preko **desne ravnine**.

Da zrcališ cijelo tijelo preko površine dijela, prvo klikni tu ravnu površinu, pa odaberi {{ui:Zrcaljenje}}. (Klik na površinu briše odabir iz historije, pa se uvijek zrcali cijelo tijelo.)

Postavke u desnom panelu:

- **Zrcaljenje**: označi **Cijelo tijelo (onako kako je do sada izgrađeno)**, ili to isključi i označi elemente za kopiranje.
- **Ravnina zrcaljenja**: Prednja ravnina, Gornja ravnina, Desna ravnina, površina koju koristi sada ("Površina od Izvlačenje 1" ili "Fiksna ravnina"), ili "Površina odabrana sada". Da zrcališ odabrane elemente preko površine: odaberi Zrcaljenje u historiji, klikni površinu u pogledu i izaberi "Površina odabrana sada".

Zrcaljenje cijelog tijela preko površine udvostručuje dio, na primjer polovični nosač pretvara u cijeli.

## Poruke

- "Prvo napravi element za kopiranje." ili "Prvo napravi čvrsto tijelo." Još nema ničeg čvrstog za kopiranje.
- "Odaberi elemente za kopiranje." Svaki okvir **Elementi za kopiranje** je prazan.
- "Izvlačenje 2 nema čvrsto tijelo za kopiranje." Taj element nije uspio ili je potisnut.
- "Zaobljenje 1 mijenja ivice ili zidove tijela; ne može se kopirati. Kopiraj elemente koji prave čvrsta tijela (izvlačenja, rotacije, rupe, uvoz)." Zaobljenja, skošenja i ljuske ne mogu se uzorkovati niti zrcaliti; prvo uzorkuj, pa zaobli.
- "Još nema tijela za zrcaljenje."

:::note
Kopije uzorka se ne mogu preskakati pojedinačno, a uzorak ne može pratiti krivu skice. Uzorci i zrcaljenja skica još nisu napravljeni: ponovljenu geometriju skice crtaj ručno ili pomoću **Dodaj po koordinatama**.
:::
