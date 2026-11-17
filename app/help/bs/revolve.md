---
title: Rotiraj dio sa osom
summary: Skiciraj polovinu profila pored osne linije, rotiraj ga u okrugli dio, odaberi osu i ugao, i koristi rotirano izrezivanje za žljebove.
keywords: rotacija, rotirani dodatak, rotirano izrezivanje, okrenut dio, tokarenje, struk, osa, osna linija, žljeb, ugao, rotacijski rez
from: 593b6929
---

{{ui:Rotiraj}} rotira profil oko ose, kao dio napravljen na tokarilici: osovine, remenice, prirubnice, dugmad. {{ui:Rotirano izrezivanje}} (u meniju {{ui:Više}} grupe Elementi) rotira profil da ukloni materijal, za žljebove i udubljenja.

## Rotiraj stepenastu osovinu

1. Skiciraj na **Prednjoj ravnini**.
2. Pritisni {{key:N}} za {{ui:Osna linija}}. Počni na ishodištu i klikni tačku pravo udesno, na primjer 100 mm dalje. Ovo je osa. Isprekidana je: konstrukcijska geometrija nije dio profila.
3. Pritisni {{key:L}} za Linija. Nacrtaj **polovinu** profila iznad osne linije kao jednu zatvorenu petlju: počni na osnoj liniji, idi gore, napravi korak, pa se vrati dolje na osnu liniju, pa duž nje do početka. Krajevi se moraju spojiti: petlja mora biti zatvorena.
4. Ukoti poluprečnike (visine iznad osne linije) i dužine. Visina 10 iznad osne linije daje prečnik 20.
5. Odaberi {{ui:Izađi}}.
6. Odaberi {{ui:Rotiraj}}. Osovina se pojavi, cijeli obrtaj.

Profil mora ostati na jednoj strani ose. Ako ga siječe: "Profil siječe osu. Drži ga na jednoj strani osne linije." Ivica profila može ležati na osi.

## Postavke

| Postavka | Šta radi | Zadano |
|---|---|---|
| **Operacija** | Dodaj (dodaje materijal), Izreži (uklanja materijal), Presijeci (zadrži preklapanje) ili Novo tijelo | Dodaj za {{ui:Rotiraj}}, Izreži za {{ui:Više}} › {{ui:Rotirano izrezivanje}} |
| **Ugao (°)** | Koliko daleko se rotira, od malo iznad 0 do 360 | 360 |
| **Osa** | Prva osna linija, ili bilo koja linija ili osna linija u skici, navedena kao "Osna linija 1 (l1)" ili "Linija 3 (l3)" | Prva osna linija |

Djelomični ugao pravi klin, rotiran od ravnine skice u jednom smjeru.

Ako skica nema osnu liniju a ostaviš **Osa** na Prvoj osnoj liniji: "Nacrtaj osnu liniju (konstrukcijsku liniju) u skici oko koje se rotira." Također možeš odabrati punu liniju profila kao osu.

## Izreži žljeb

1. Kad je osovina napravljena, otvori novu skicu na **Prednjoj ravnini** (ista ravnina kao skica osovine).
2. Nacrtaj osnu liniju duž iste ose: počni je na ishodištu i drži je ravno da dobije H, ili je ukucaj sa **Dodaj po koordinatama** (na primjer od `0, 0` do `100, 0`). Nova skica se ne može poravnati sa linijama druge skice.
3. Nacrtaj mali zatvoreni pravougaonik koji se preklapa sa ivicom osovine gdje ide žljeb.
4. Odaberi {{ui:Izađi}}, pa {{ui:Više}} › {{ui:Rotirano izrezivanje}}.

## Rotirane površine u sklopovima

Rotacija ima osu koju mogu koristiti drugi elementi i sklopovi:

- **Kružni** uzorak koristi osu zadnje rotacije po zadanom (vidi [Uzorci i zrcaljenje elemenata](topic:patterns-mirror));
- u sklopu, zglob između površina nastalih rotacijama počinje kao **rotacioni** zglob, a **Centriraj na** nudi "Osa rotiranja 1" (vidi [Napravi sklop](topic:build-assembly)).

## Glatke krivine i fasete

PartCraft gradi rotaciju mrežnim kernelom (traka statusa pokazuje "Mrežni kernel"): okrugli oblici su ravne fasete, 64 po obrtu po zadanom, a zapremine su malo ispod prave vrijednosti (oko 0,16 % na 64). Pogled, STL, 3MF i STEP izvozi se sastoje od tih faceta: postavi **Krivine** (klikni prazan prostor, pa desni panel) na Fino (128) ili Vrlo fino (256) za glađe. Prave cilindre, konuse i prstenaste oblike trebaju tačan kernel: još nije napravljeno u ovoj verziji. Vidi [Mrežni kernel](topic:solid-kernels).
