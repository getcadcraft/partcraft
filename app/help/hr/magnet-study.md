---
title: Studija magneta skice
summary: Pretvorite zatvorene profile svojih skica u ravan magnetski model (željezo, magneti, zavojnice), pogledajte polje i pročitajte silu i moment na tijelu.
keywords: magnet, magnetski, magnetostatika, polje, gustoća magnetskog toka, sila, moment, zavojnica, jaram, željezo, krivulja B–H, trajni magnet, aktuator, motor, solenoid, maxwell
from: 604efc3b
---

Upotrijebite {{ui:Više}} u alatnoj traci Značajke › {{ui:Studija magneta skica…}} na dijelu koji ima skice. Svaki zatvoreni oblik u skicama koje označite je jedna regija ravnog modela; studija izračunava magnetsko polje B, silu i moment na tijelu koje odaberete.

## Koraci

1. Nacrtajte tijela kao zatvorene oblike u skicama: željezni jaram, magnet, zavojnicu. Tijela koja se dodiruju dijele brid, pa ih stavite u različite skice; tijela koja stoje odvojeno ili jedno u drugom (prozor u jaramu) mogu biti u istoj skici. Skice držite na istoj ravnini.
2. Otvorite studiju i označite skice za korištenje. Svaki zatvoreni profil dobije redak, s brojem. Recite što je: {{ui:Zrak}}, {{ui:Željezo}} (permeabilnost, ili krivulja B–H upisana kao parovi B u teslama i H u A/m), {{ui:Trajni magnet}} (Br u teslama, njegov smjer kao kut od x osi skice i njegova povratna permeabilnost) ili {{ui:Zavojnica}} (ukupna struja kroz njezin profil, broj zavoja puta amperi; predznak kaže kojim smjerom teče).
3. Označite {{ui:Sila i moment na ovom tijelu}} za tijela na kojima ih želite. Upišite dubinu dijela izvan skice.
4. Odaberite mrežu i zrak oko modela, zatim {{ui:Pokreni}}.

## Što biste trebali vidjeti

- Gustoću magnetskog toka |B| nad modelom, od tamnoplave za nisko do crvene za visoko, uz numerirane profile.
- Najjače polje i gdje je, broj trokuta te, za svako označeno tijelo, silu duž x i y i moment oko njegove sredine, za dubinu koju ste upisali.
- {{ui:Spremi rezultate (CSV)}} zapisuje brojeve.

## Dobro je znati

- To je ravni, stacionarni model: sve je po metru dubine, bez vrtložnih struja i bez histereze, a magnet je ravna povratna linija (ne može se razmagnetizirati).
- Model je u kutiji zraka čiji je rub zid. Usporedite dvije veličine kutije zraka te mreže Normal i Fine: sila dobivena iz polja oko tijela vrijedi samo koliko i mreža na tom mjestu.
- Željezo samo s permeabilnošću nikad se ne zasiti. Kad polje prijeđe 2 T, studija u popisu Problemi podiže ⚠: dajte željezu krivulju B–H. Brojevi u novom retku su primjeri (željezo μr 2000, magnet od 1,2 T), a ne podaci o materijalu iz tehničkog lista.
- Tijelo treba prostor oko sebe da primi silu: ako je drugo tijelo preblizu, studija to kaže.
- Pomoćno sredstvo za crtanje, a ne inženjersko odobrenje.

## Dalje

- [Magnetska polja u 2D (vodič)](topic:magnetic-fields-2d)
