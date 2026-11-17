---
title: Rebra i ojačanja uglova
summary: Ojačaj deo rebrom nacrtanim kao jedna linija: popunjava prostor od linije do zidova, zadatom debljinom preko ravni skice, na strani koju izabereš.
keywords: rebro, ojačanje ugla, nosač, potporni nosač, tanak zid, ukrućenje, ojačati, podupirač
from: 5c218881
---

:::note
**Još nije napravljeno u ovoj verziji.** Rebro treba egzaktni geometrijski kernel, koji ova verzija PartCraft-a nema: svaki deo pravi mrežnim kernelom. [Šta još nije napravljeno](topic:not-built-yet) kaže šta da uradiš umesto toga. Ostatak stranice opisuje kako radi sa egzaktnim kernelom.
:::

**Rebro** (ili ojačanje ugla) je tanak zid koji ukrućuje deo, kao trougao u uglu L-nosača. Crtaš samo njegovu slobodnu ivicu: PartCraft popunjava prostor između te linije i zidova. Potreban je **egzaktni kernel** (vidi [Mrežni kernel](topic:solid-kernels)).

## Dodavanje rebra

1. Napravi ravan kroz sredinu mesta gde ide rebro (za L-nosač dubine 40, ravan 20 ispred njegove skice: vidi [Referentne ravni, ose i tačke](topic:reference-geometry)).
2. Na njoj nacrtaj **jednu liniju** od zida do zida, ili nekoliko linija redom za savijenu ivicu rebra. Linija može da stane pre zidova: krajevi se produžavaju dok ne dodirnu zidove.
3. Izaberi skicu i izaberi {{ui:Više}} › {{ui:Rebro}}.

Rebro se popunjava od linije do zidova, na strani ka sredini dela, pa ojačanje ulazi u unutrašnji ugao. Ako je ta strana otvorena a druga zatvorena, PartCraft je okrene i kaže to.

## Podešavanja

- **Debljina (mm)** je debljina rebra preko ravni skice. Može da se vezuje za parametar.
- **Debljina** (izbor ispod): **Centrirano na ravni skice**, **Ispred ravni** (duž njene normale) ili **Iza ravni**.
- **Preokreni** popunjava drugu stranu linije.

## Poruke

- **Na ovoj strani ivica rebra nikad ne dodiruje telo** — ništa se ne zatvara u prostoru na toj strani: uključi ili isključi **Preokreni**, ili pomeri liniju tako da je zidovi ograniče.
- **Rebru treba jedan otvoren niz linija u svojoj skici** — skica ima zatvoren oblik, luk ili splajn, ili linije koje se ne spajaju kraj uz kraj.
- **Ivica rebra tu prolazi kroz telo** — linija leži unutar čvrstog tela; nacrtaj je u otvorenom prostoru između zidova.
