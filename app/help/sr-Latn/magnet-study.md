---
title: Magnetna studija skice
summary: Pretvorite zatvorene profile svojih skica u ravan magnetni model (gvožđe, magneti, kalemovi), vidite polje i pročitajte silu i moment na telu.
keywords: magnet, magnetni, magnetostatika, polje, gustina fluksa, sila, moment, kalem, jaram, gvožđe, B-H kriva, stalni magnet, aktuator, motor, solenoid, maxwell
from: 604efc3b
---

Koristite {{ui:Više}} na traci {{ui:Osobine}} › {{ui:Studija magneta skica…}} na delu koji ima skice. Svaki zatvoreni oblik u skicama koje štiklirate je jedna oblast ravnog modela; studija računa magnetno polje B, silu i moment na telu koje izaberete.

## Koraci

1. Nacrtajte tela kao zatvorene oblike u skicama: gvozdeni jaram, magnet, kalem. Tela koja se dodiruju dele ivicu, pa ih stavite u različite skice; tela koja stoje odvojeno ili su jedno u drugom (prozor u jaramu) mogu biti u jednoj skici. Održavajte skice u istoj ravni.
2. Otvorite studiju i štiklirajte skice za upotrebu. Svaki zatvoreni profil dobija red, s rednim brojem. Recite šta je: {{ui:Vazduh}}, {{ui:Gvožđe}} (permeabilnost, ili B–H kriva unesena kao parovi B u teslama i H u A/m), {{ui:Stalni magnet}} (Br u teslama, njegov smer kao ugao od x ose skice i njegova povratna permeabilnost) ili {{ui:Kalem}} (ukupna struja kroz njegov profil, broj navojaka puta amperi; znak kaže kojim smerom teče).
3. Štiklirajte {{ui:Sila i moment na ovo telo}} za tela na kojima ih želite. Unesite dubinu dela, normalno na skicu.
4. Izaberite mrežu i vazduh oko modela, pa {{ui:Pokreni}}.

## Šta treba da vidite

- Gustina fluksa |B| preko modela, od tamnoplave za nisko do crvene za visoko, sa numerisanim profilima.
- Najjače polje i gde je, broj trouglova, a za svako telo koje ste štiklirali sila duž x i y i moment oko njegove sredine, za dubinu koju ste uneli.
- {{ui:Sačuvaj rezultate (CSV)}} upisuje brojeve.

## Dobro je znati

- To je ravan, stacionaran model: sve je po metru dubine, bez vrtložnih struja i histereze, a magnet je prava povratna linija (ne može da se razmagnetiše).
- Model stoji u kutiji vazduha čija je ivica zid. Uporedite dve veličine kutije vazduha i mreže Normal i Fine: sila dobijena iz polja oko tela tačna je onoliko koliko je tačna mreža tamo.
- Gvožđe samo sa permeabilnošću nikad se ne zasiti. Kada polje pređe 2 T, studija podiže ⚠ u listi Problemi: dajte gvožđu B–H krivu. Brojevi u novom redu su primeri (gvožđe μr 2000, magnet od 1.2 T), a ne podaci proizvođača materijala.
- Telo treba prostora oko sebe da primi silu: ako je drugo telo preblizu, studija to kaže.
- Pomoćno sredstvo za crtanje, a ne inženjersko odobrenje.

## Dalje

- [Magnetna polja u 2-D (vodič)](topic:magnetic-fields-2d)
