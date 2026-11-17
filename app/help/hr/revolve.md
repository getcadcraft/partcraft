---
title: Rotiranje tokarenog dijela
summary: Skicirajte polovicu profila uz središnju liniju, rotirajte ga u okrugli dio, odaberite os i kut te koristite rotirani izrez za utore.
keywords: rotacija, rotiraj, rotirani izrez, tokareni dio, tokarilica, osovina, os, središnja linija, utor, kut, rez rotacije
from: 593b6929
---

{{ui:Rotiraj}} rotira profil oko osi, kao dio izrađen na tokarilici: osovine, remenice, prirubnice, gumbi. {{ui:Rotirani izrez}} (u izborniku {{ui:Više}} grupe Značajke) rotira profil da ukloni materijal, za utore i udubine.

## Rotirajte stepenastu osovinu

1. Skicirajte na **Prednjoj ravnini**.
2. Pritisnite {{key:N}} za {{ui:Os}}. Počnite na ishodištu i kliknite točku ravno desno, npr. 100 mm dalje. Ovo je os. Isprekidana je: konstrukcijska geometrija nije dio profila.
3. Pritisnite {{key:L}} za Linija. Nacrtajte **polovicu** profila iznad središnje linije kao jednu zatvorenu petlju: počnite na središnjoj liniji, idite gore, korak po korak, i vratite se dolje na središnju liniju, pa duž nje do početka. Krajevi se moraju spojiti: petlja mora biti zatvorena.
4. Kotirajte polumjere (visine iznad središnje linije) i duljine. Visina 10 iznad središnje linije daje promjer 20.
5. Odaberite {{ui:Izlaz}}.
6. Odaberite {{ui:Rotiraj}}. Osovina se pojavljuje, puni krug.

Profil mora ostati s jedne strane osi. Ako je prelazi: „Profil siječe os. Držite ga s jedne strane središnje linije.“ Rub profila može ležati na osi.

## Postavke

| Postavka | Što radi | Zadano |
|---|---|---|
| **Operacija** | Dodaj (dodaje materijal), Izreži (uklanja materijal), Presjek (zadržava preklapanje) ili Novo tijelo | Dodaj za {{ui:Rotiraj}}, Izreži za {{ui:Više}} › {{ui:Rotirani izrez}} |
| **Kut (°)** | Koliko daleko rotirati, od malo iznad 0 do 360 | 360 |
| **Os** | Prva središnja linija ili bilo koja linija ili središnja linija u skici, navedena kao „Os 1 (l1)“ ili „Linija 3 (l3)“ | Prva središnja linija |

Djelomični kut daje klin, rotiran od ravnine skice u jednom smjeru.

Ako skica nema središnju liniju a ostavite **Os** na Prva središnja linija, poruka glasi: „Nacrtajte središnju liniju (konstrukcijsku liniju) u skici oko koje treba rotirati.“ Također možete odabrati punu liniju profila kao os.

## Izrežite utor

1. S izgrađenom osovinom otvorite novu skicu na **Prednjoj ravnini** (ista ravnina kao skica osovine).
2. Nacrtajte središnju liniju duž iste osi: počnite na ishodištu i držite je vodoravno da dobije H, ili je upišite pomoću **Dodaj po koordinatama** (npr. od `0, 0` do `100, 0`). Nova skica se ne može privući na linije druge skice.
3. Nacrtajte mali zatvoreni pravokutnik koji prelazi rub osovine gdje ide utor.
4. Odaberite {{ui:Izlaz}}, zatim {{ui:Više}} › {{ui:Rotirani izrez}}.

## Rotirane plohe u sklopovima

Rotacija ima os koju mogu koristiti druge značajke i sklopovi:

- **Kružni uzorak** zadano koristi os zadnje rotacije (vidi [Uzorci i zrcaljenje značajki](topic:patterns-mirror));
- u sklopu, spoj između ploha izrađenih rotacijama zadano počinje kao **rotacijski** spoj, a **Centriraj na** nudi „Os od Revolve1“ (vidi [Izrada sklopa](topic:build-assembly)).

## Prave krivulje i fasete

PartCraft gradi rotaciju mrežnim kernelom (oznaka u statusnoj traci kaže „Mesh kernel“): okrugli oblici su ravne fasete, zadano 64 po okretu, a volumeni su malo ispod prave vrijednosti (oko 0.16 % pri 64). Prikaz te izvozi STL, 3MF i STEP sastoje se od tih faseta: postavite **Krivulje** (kliknite prazan prostor, pa desna ploča) na Fino (128) ili Vrlo fino (256) za glađe. Prave valjke, stošce i tori trebaju egzaktni kernel: još nije izrađeno u ovoj verziji. Pogledajte [Mrežni kernel](topic:solid-kernels).
