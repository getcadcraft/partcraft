---
title: Studija magneta za skicu
summary: Pretvori zatvorene profile svojih skica u ravan magnetni model (željezo, magneti, kalemi), vidi polje i pročitaj silu i moment na tijelu.
keywords: magnet, magnetni, magnetostatika, polje, gustina fluksa, sila, moment, kalem, jaram, željezo, B-H kriva, trajni magnet, aktuator, motor, solenoid, maxwell
from: 604efc3b
---

Koristi {{ui:Više}} na traci Elementi › {{ui:Studija magneta skica…}} na dijelu koji ima skice. Svaki zatvoren oblik u skicama koje označiš je jedna oblast ravnog modela; studija računa magnetno polje B, silu i moment na tijelu koje izabereš.

## Koraci

1. Nacrtaj tijela kao zatvorene oblike u skicama: željezni jaram, magnet, kalem. Tijela koja se dodiruju dijele ivicu, pa ih stavi u različite skice; tijela koja stoje odvojeno ili su jedno unutar drugog (prozor u jarmu) mogu dijeliti jednu skicu. Drži skice na istoj ravni.
2. Otvori studiju i označi skice koje ćeš koristiti. Svaki zatvoreni profil dobija red, s rednim brojem. Reci šta je: {{ui:Zrak}}, {{ui:Željezo}} (permeabilnost, ili B–H kriva upisana kao parovi B u teslama i H u A/m), {{ui:Trajni magnet}} (Br u teslama, njegov smjer kao ugao od x ose skice, i njegova povratna permeabilnost) ili {{ui:Kalem}} (ukupna struja kroz njegov profil, broj zavoja puta amperi; predznak kaže kojim smjerom teče).
3. Označi {{ui:Sila i moment na ovom tijelu}} za tijela na kojima ih želiš. Unesi dubinu dijela, normalno na skicu.
4. Odaberi mrežu i zrak oko modela, zatim {{ui:Pokreni}}.

## Šta treba da vidiš

- Gustinu fluksa |B| preko modela, tamnoplava nisko do crvena visoko, sa numerisanim profilima.
- Najjače polje i gdje je, broj trouglova, a za svako tijelo koje si označio silu duž x i y i moment oko njegove sredine, za dubinu koju si unio.
- {{ui:Spasi rezultate (CSV)}} upisuje brojeve.

## Dobro je znati

- To je ravan, stacionaran model: sve je po metru dubine, bez vrtložnih struja i bez histereze, a magnet je prava povratna linija (ne može se razmagnetisati).
- Model stoji u kutiji zraka čija je ivica zid. Uporedi dvije veličine kutije zraka i mreže Normalna i Fina: sila dobijena iz polja oko tijela dobra je samo koliko je dobra mreža tamo.
- Željezo samo sa permeabilnošću nikad se ne zasiti. Kad polje pređe 2 T, studija podiže ⚠ na listi Problemi: daj željezu B–H krivu. Brojevi u novom redu su primjeri (željezo μr 2000, magnet od 1.2 T), a ne podaci iz tehničkog lista materijala.
- Tijelo treba prostor oko sebe da primi silu: ako je drugo tijelo preblizu, studija to kaže.
- Pomoćno sredstvo za crtanje, a ne inženjersko odobrenje.

## Dalje

- [Magnetna polja u 2-D (vodič)](topic:magnetic-fields-2d)
