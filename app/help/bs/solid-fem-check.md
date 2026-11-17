---
title: Solid FEM: provjera naprezanja jednog dijela
summary: Uključite dodatak Solid FEM, umrežite dio, odaberite fiksne površine i opterećenje u 3D pogledu, riješite, pa pročitajte pomjeranje i von Mises naprezanje na modelu.
keywords: solid fem, konačni elementi, fea, naprezanje, von mises, pomjeranje, fiksna površina, opterećenje, pritisak, gravitacija, prirodna frekvencija, oblik moda, mreža, dodatak
from: 8b7e6ba2
---

## Šta ćete uraditi

Provjerite jedan čvrsti dio pod opterećenjem: gdje se pomjera i gdje je naprezanje najveće. Studija je linearna i elastična, pa je pomoćno sredstvo za provjeru; vaš inženjer pregleda rezultate.

## Koraci

1. Odaberite {{ui:Postavke}} › {{ui:Dodaci}} i uključite {{ui:Solid FEM}} (isključen je dok to ne uradite). Otvorite karticu {{ui:Solid FEM}} u desnom panelu.
2. U {{ui:Materijal}} odaberite jedan, ili {{ui:Prilagođeni materijal}} i unesite Poasonov koeficijent, gustinu i granicu tečenja.
3. Pritisnite {{ui:Dodaj fiksne površine}}, kliknite površine koje su držane u 3D pogledu, pa pritisnite {{ui:Završi odabir}}.
4. Dodajte opterećenje s {{ui:Dodaj silu}}, {{ui:Dodaj pritisak}} ili {{ui:Dodaj gravitaciju}} i odaberite njegove površine na isti način.
5. Pritisnite {{ui:Umrežite dio}}, pa {{ui:Riješi}}. Ako želite frekvencije, prvo odaberite {{ui:Prirodne frekvencije}} pod {{ui:Studija}}.
6. Pročitajte {{ui:Rezultati}} i {{ui:Upozorenja}}, zatim pritisnite {{ui:Prikaži na modelu}} da nacrtate von Mises naprezanje, pomjeranje ili oblik moda; {{ui:Ukloni prikaz}} ga uklanja.

## Napomene

- Stranica rješava do fiksnog broja elemenata; statusna linija kaže kad je veličina elementa previše sitna.
- Naprezanje na fiksnim površinama, tačkama opterećenja i oštrim uglovima raste kako se mreža sitni. Sitnite i uporedite prije nego što se oslonite na vrhunac.
- Svaka promjena je jedan korak poništavanja, a postavke se spašavaju u datoteku dijela.
- Za studije tečenja i kontakta pogledajte [Provjera naprezanja i progiba](topic:simulation).
