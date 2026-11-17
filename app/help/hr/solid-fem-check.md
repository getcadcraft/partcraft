---
title: Solid FEM: provjera naprezanja jednog dijela
summary: Uključite dodatak Solid FEM, izradite mrežu dijela, odaberite fiksne plohe i opterećenje u 3D prikazu, riješite te pročitajte pomak i von Misesovo naprezanje na modelu.
keywords: solid fem, konačni elementi, fea, naprezanje, von mises, pomak, fiksna ploha, opterećenje, tlak, gravitacija, vlastita frekvencija, oblik moda, mreža, dodatak
from: 8b7e6ba2
---

## Što ćete učiniti

Provjerite jedan čvrsti dio pod opterećenjem: gdje se pomiče i gdje je naprezanje najveće. Studija je linearna i elastična, pa je to pomoćno sredstvo za provjeru; vaš inženjer pregledava rezultate.

## Koraci

1. Odaberite {{ui:Postavke}} › {{ui:Dodaci}} i uključite {{ui:Solid FEM}} (isključen je dok to ne učinite). Otvorite karticu {{ui:Solid FEM}} na desnoj ploči.
2. Pod {{ui:Materijal}} odaberite jedan ili {{ui:Prilagođen}} i upišite Poissonov omjer, gustoću i granicu tečenja.
3. Pritisnite {{ui:Dodaj fiksne plohe}}, kliknite plohe koje su držane u 3D prikazu, zatim pritisnite {{ui:Završi odabir}}.
4. Dodajte opterećenje s {{ui:Dodaj silu}}, {{ui:Dodaj tlak}} ili {{ui:Dodaj gravitaciju}} i odaberite njegove plohe na isti način.
5. Pritisnite {{ui:Izradi mrežu dijela}}, zatim {{ui:Riješi}}. Ako želite frekvencije, prvo odaberite {{ui:Vlastite frekvencije}} pod {{ui:Studija}}.
6. Pročitajte {{ui:Rezultati}} i {{ui:Upozorenja}}, zatim pritisnite {{ui:Prikaži na modelu}} za crtanje von Misesovog naprezanja, pomaka ili oblika moda; {{ui:Ukloni prikaz}} ga uklanja.

## Napomene

- Stranica rješava do fiksnog broja elemenata; statusni redak kaže kad je veličina vašeg elementa prevelika.
- Naprezanje na fiksnim plohama, točkama opterećenja i oštrim kutovima raste kako se mreža profinjava. Profinite mrežu i usporedite prije nego se oslonite na vršnu vrijednost.
- Svaka promjena je jedan korak poništavanja, a postavke se spremaju u datoteku dijela.
- Za studije popuštanja i kontakta vidi [Provjera naprezanja i progiba](topic:simulation).
