---
title: Rotiranje obrtnog dela
summary: Nacrtaj polovinu profila pored osne linije, rotiraj ga u okrugli deo, izaberi osu i ugao, a za žlebove koristi rotirani usek.
keywords: rotiranje, rotirana izbočina, rotirani usek, obrtni deo, struganje, vratilo, osa, osna linija, žleb, ugao, usek rotiranjem
from: 593b6929
---

{{ui:Rotiranje}} obrće profil oko ose, kao deo napravljen na strugu: vratila, remenice, prirubnice, dugmad. {{ui:Rotirani usek}} (u meniju {{ui:Više}} grupe Elementi) obrće profil da bi uklonio materijal, za žlebove i udubljenja.

## Rotiranje stepenastog vratila

1. Skiciraj na **Prednjoj ravni**.
2. Pritisni {{key:N}} za {{ui:Osna linija}}. Počni od koordinatnog početka i klikni tačku pravo udesno, na primer 100 mm dalje. Ovo je osa. Isprekidana je: pomoćna geometrija nije deo profila.
3. Pritisni {{key:L}} za Liniju. Nacrtaj **polovinu** profila iznad osne linije kao jednu zatvorenu petlju: počni na osnoj liniji, idi gore, pa korak po korak, i vrati se dole na osnovnu liniju, pa duž nje do početka. Krajevi moraju da se spoje: petlja mora biti zatvorena.
4. Kotiraj poluprečnike (visine iznad osne linije) i dužine. Visina 10 iznad osne linije daje prečnik 20.
5. Izaberi {{ui:Izađi}}.
6. Izaberi {{ui:Rotiranje}}. Vratilo se pojavljuje, pun obrt.

Profil mora ostati na jednoj strani ose. Ako je preseče: „Profil preseca osu. Zadrži ga na jednoj strani osne linije.“ Ivica profila može ležati na osi.

## Podešavanja

| Podešavanje | Šta radi | Podrazumevano |
|---|---|---|
| **Operacija** | Dodavanje (dodaje materijal), Usek (uklanja materijal), Presek (zadržava preklapanje) ili Novo telo | Dodavanje za {{ui:Rotiranje}}, Usek za {{ui:Više}} › {{ui:Rotirani usek}} |
| **Ugao (°)** | Koliko daleko obrnuti, od malo iznad 0 do 360 | 360 |
| **Osa** | Prva osna linija, ili bilo koja linija ili osna linija u skici, navedena kao „Osna linija 1 (l1)“ ili „Linija 3 (l3)“ | Prva osna linija |

Delimičan ugao pravi isečak, obrnut od ravni skice u jednom smeru.

Ako skica nema osnu liniju a **Osa** ostaje na Prvoj osnoj liniji: „Nacrtaj osnu liniju (pomoćnu liniju) u skici za rotiranje.“ Možeš i da izabereš punu liniju profila kao osu.

## Žleb

1. Kad je vratilo napravljeno, otvori novu skicu na **Prednjoj ravni** (ista ravan kao skica vratila).
2. Nacrtaj osnu liniju duž iste ose: počni u koordinatnom početku i drži je vodoravno da dobije H, ili je unesi preko **Dodaj po koordinatama** (na primer od `0, 0` do `100, 0`). Nova skica ne može da se zakači za linije druge skice.
3. Nacrtaj mali zatvoreni pravougaonik koji preklapa ivicu vratila gde ide žleb.
4. Izaberi {{ui:Izađi}}, pa {{ui:Više}} › {{ui:Rotirani usek}}.

## Rotirani delovi u sklopovima

Rotiranje ima osu koju mogu da koriste drugi elementi i sklopovi:

- **Kružni** niz podrazumevano koristi osu poslednjeg rotiranja (vidi [Nizovi i simetrija elemenata](topic:patterns-mirror));
- u sklopu, spoj između strana napravljenih rotiranjem počinje kao **rotacioni** spoj, a **Centriraj na** nudi „Axis of Revolve1“ (vidi [Pravljenje sklopa](topic:build-assembly)).

## Prave krive i fasete

PartCraft pravi rotiranje mrežnim kernelom (čip u statusnoj traci kaže „Mesh kernel“): okrugli oblici su ravne fasete, podrazumevano 64 po obrtu, a zapremine su malo ispod prave vrednosti (oko 0.16 % na 64). Prikaz i izvozi STL, 3MF i STEP sastoje se od tih faseta: podesi **Krive** (klikni prazan prostor, pa desni panel) na Fino (128) ili Veoma fino (256) za glatkije. Prave cilindre, konuse i torusе zahtevaju egzaktni kernel: još nisu napravljeni u ovoj verziji. Vidi [Mrežni kernel](topic:solid-kernels).
