---
title: Uzorci i zrcaljenje značajki
summary: Ponovite značajke u nizu s Linearno, zaokrenite ih oko osi s Kružno te kopirajte značajke ili cijelo tijelo preko ravnine sa Zrcali.
keywords: uzorak, linearni uzorak, kružni uzorak, polarni niz, niz, zrcaljenje, simetrično, kopiraj značajke, krug vijaka, izvorna značajka, zrcaljenje tijela
from: 702e9edb
---

Uzorci i zrcala kopiraju značajke koje ste već izradili. Kopije su dio povijesti: promijenite izvornik i kopije ga slijede.

Što se kopira ovisi o tome što značajka radi: uzorak značajke pune dodaje materijal, a uzorak izreza ili rupe ga uklanja. Uzorci se mogu ponovno uzorkovati i zrcaliti. Uvezeno STEP puno tijelo također se može kopirati; zaobljenja, skošenja i ljuske ne mogu.

## Linearni uzorak

1. U povijesti odaberite značajku za kopiranje (npr. Rupu ili Izrez). Ako ništa nije odabrano, koristi se posljednja puna značajka.
2. Odaberite {{ui:Linearno}}. Pojavljuju se tri kopije na razmaku 20 mm duž osi X.
3. U desnoj ploči postavite:

| Postavka | Što radi | Zadano |
|---|---|---|
| **Značajke za kopiranje** | Označite svaku značajku za kopiranje. Navedene su samo značajke iznad uzorka | Odabrana značajka |
| **Smjer** | Os X, os Y, os Z, pravac ili središnja linija iz neke ranije skice, os rotacije ili odabrani brid | Os X |
| **Razmak (mm)** | Udaljenost između susjeda | 20 |
| **Broj** | Ukupan broj, **uključujući izvornik** (1 do 1000) | 3 |
| **Obrni smjer** | Kopije idu u suprotnom smjeru | Isključeno |

### Uzorak s bridom kao smjerom

1. Kliknite ravan brid dijela u prikazu. Desna ploča kaže **Brid** i prikazuje njegovu duljinu.
2. Odaberite {{ui:Linearno}}: uzorak ide duž tog brida.

Ili odaberite uzorak, odaberite brid i u **Smjer** izaberite „Odabrani brid (koristi onaj odabran sada)“. Odabrani brid je fiksan u prostoru: ne prati kasnije promjene. Linija skice prati svoju skicu.

## Kružni uzorak

1. Odaberite značajku za kopiranje (npr. jednu rupu blizu ruba diska).
2. Odaberite {{ui:Kružno}}. Pojavljuje se šest kopija jednako raspoređenih po cijelom krugu.
3. Postavite:

| Postavka | Što radi | Zadano |
|---|---|---|
| **Značajke za kopiranje** | Kao kod linearnog uzorka | Odabrana značajka |
| **Os** | Os X, Y ili Z, linija skice, os rotacije ili odabrani brid | Os zadnje rotacije ako postoji, inače os Y |
| **Kut (°)** | 360 raspoređuje kopije jednako po cijelom krugu. Manje ih raspoređuje na taj kut, prva i zadnja na krajevima | 360 |
| **Broj** | Ukupan broj, uključujući izvornik | 6 |
| **Obrni smjer** | Okreće se u suprotnom smjeru | Isključeno |

Svjetske osi prolaze kroz ishodište. Za disk koji nije središnje postavljen na ishodište koristite središnju liniju skice ili os rotacije.

### Primjer: osam rupa za vijke prirubnice

1. Rotirajte prirubnicu (vidi [Rotiranje tokarenog dijela](topic:revolve)) oko osi Y.
2. Skicirajte na gornjoj ravnoj plohi prirubnice, stavite jednu točku na krug vijaka i izradite rupu.
3. S odabranom rupom odaberite {{ui:Kružno}}. Os je već „Os od Revolve1“.
4. Postavite **Broj** na `8`.

## Zrcaljenje

1. U povijesti odaberite značajku za zrcaljenje ili ne odaberite ništa da zrcalite **cijelo tijelo izgrađeno do sada**.
2. Odaberite {{ui:Zrcali}}. Zrcali se preko **Desne ravnine**.

Za zrcaljenje cijelog tijela preko plohe dijela umjesto toga prvo kliknite tu ravnu plohu, pa odaberite {{ui:Zrcali}}. (Klik na plohu briše odabir u povijesti, pa se uvijek zrcali cijelo tijelo.)

Postavke u desnoj ploči:

- **Zrcali**: označite **Cijelo tijelo (izgrađeno do sada)** ili to isključite i označite značajke za kopiranje.
- **Ravnina zrcaljenja**: Prednja ravnina, Gornja ravnina, Desna ravnina, ploha koju sada koristi („Ploha od Extrude1“ ili „Fiksna ravnina“) ili „Ploha odabrana sada“. Za zrcaljenje odabranih značajki preko plohe: odaberite Zrcaljenje u povijesti, kliknite plohu u prikazu i odaberite „Ploha odabrana sada“.

Zrcaljenje cijelog tijela preko plohe udvostručuje dio, npr. pola nosača u cijeli nosač.

## Poruke

- „Prvo izradite značajku za kopiranje.“ ili „Prvo izradite puno tijelo.“ Nema ničega punog za kopiranje.
- „Odaberite značajke za kopiranje.“ Svaki okvir **Značajke za kopiranje** je prazan.
- „Extrude2 nema puno tijelo za kopiranje.“ Ta značajka nije uspjela ili je potisnuta.
- „Fillet1 mijenja bridove ili stijenke tijela; ne može se kopirati. Kopirajte značajke koje stvaraju puna tijela (istiskivanja, rotacije, rupe, uvoz).“ Zaobljenja, skošenja i ljuske ne mogu se uzorkovati ni zrcaliti; prvo uzorkujte, pa zaobljite.
- „Još nema tijela za zrcaljenje.“

:::note
Kopije uzorka ne mogu se preskakati pojedinačno, a uzorak ne može slijediti krivulju skice. Uzorci i zrcala skice također još nisu izrađeni: crtajte ponovljenu geometriju skice ručno ili pomoću **Dodaj po koordinatama**.
:::
