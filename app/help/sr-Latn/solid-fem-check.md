---
title: Solid FEM: provera naprezanja jednog dela
summary: Uključi dodatak Solid FEM, mreži deo, izaberi fiksirane površi i opterećenje u 3D pogledu, reši i pročitaj pomeranje i von Mises naprezanje na modelu.
keywords: solid fem, konačni elementi, fea, naprezanje, von Mises, pomeranje, fiksirana površ, opterećenje, pritisak, gravitacija, prirodna frekvencija, oblik moda, mreža, dodatak
from: 8b7e6ba2
---

## Šta ćeš uraditi

Proveri jedan čvrsti deo pod opterećenjem: gde se pomera i gde je naprezanje najveće. Studija je linearna i elastična, pa je to pomoćno sredstvo za proveru; tvoj inženjer pregleda rezultate.

## Koraci

1. Izaberi {{ui:Podešavanja}} › {{ui:Dodaci}} i uključi {{ui:Solid FEM}} (dok to ne uradiš, isključen je). Otvori karticu {{ui:Solid FEM}} u desnom panelu.
2. Pod {{ui:Materijal}} izaberi jedan, ili {{ui:Prilagođeno}} i unesi Poasonov koeficijent, gustinu i granicu tečenja.
3. Pritisni {{ui:Dodaj fiksirane površi}}, klikni površi koje su držane u 3D pogledu, pa pritisni {{ui:Završi izbor}}.
4. Dodaj opterećenje sa {{ui:Dodaj silu}}, {{ui:Dodaj pritisak}} ili {{ui:Dodaj gravitaciju}} i izaberi njegove površi na isti način.
5. Pritisni {{ui:Mreži deo}}, pa {{ui:Reši}}. Ako želiš frekvencije, prvo izaberi {{ui:Prirodne frekvencije}} pod {{ui:Studija}}.
6. Pročitaj {{ui:Rezultati}} i {{ui:Upozorenja}}, pa pritisni {{ui:Prikaži na modelu}} da prikažeš von Mises naprezanje, pomeranje ili oblik moda; {{ui:Ukloni grafikon}} ga uklanja.

## Napomene

- Stranica rešava do fiksnog broja elemenata; statusna linija kaže kad je veličina elementa previše sitna.
- Naprezanje na fiksiranim površima, tačkama opterećenja i oštrim ćoškovima raste kako se mreža sitni. Sitni i uporedi pre nego što se osloniš na vrh.
- Svaka promena je jedan korak opoziva, a podešavanja se čuvaju u datoteci dela.
- Za studije tečenja i kontakta vidi [Proveri naprezanje i ugib](topic:simulation).
