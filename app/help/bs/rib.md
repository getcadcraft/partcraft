---
title: Rebra i ojačanja
summary: Ojačaj dio rebrom nacrtanim kao jednom linijom: ono se popunjava od linije do zidova, debljinom koju postaviš preko ravnine skice, na strani koju odabereš.
keywords: rebro, ojačanje, rebro za ukrućenje, podupirač, kosnik, nosač, ugaona potpora, tanki zid, ojačati
from: 5c218881
---

:::note
**Još nije napravljeno u ovoj verziji.** Rebro treba tačan geometrijski kernel, koji ova verzija PartCraft-a nema: svaki dio gradi mrežnim kernelom. [Šta još nije napravljeno](topic:not-built-yet) kaže šta raditi umjesto toga. Ostatak ove stranice opisuje kako radi sa tačnim kernelom.
:::

**Rebro** (ili ojačanje) je tanki zid koji ukrućuje dio, kao trougao u uglu L-nosača. Crtaš samo njegovu slobodnu ivicu: PartCraft popunjava prostor između te linije i zidova. Treba **tačan kernel** (vidi [Mrežni kernel](topic:solid-kernels)).

## Dodaj rebro

1. Napravi ravninu kroz sredinu mjesta gdje ide rebro (za L-nosač dubine 40, ravninu 20 ispred njegove skice: vidi [Referentne ravnine, ose i tačke](topic:reference-geometry)).
2. Nacrtaj na njoj **jednu liniju** od zida do zida — ili nekoliko linija s kraja na kraj za savijenu ivicu rebra. Linija može stati kratko od zidova: njeni krajevi se produžuju dok ih ne dodirnu.
3. Odaberi skicu i izaberi {{ui:Više}} › {{ui:Rebro}}.

Rebro se popunjava od linije do zidova na strani prema sredini dijela, pa ojačanje ide u unutrašnji ugao. Ako je ta strana otvorena a druga zatvorena, PartCraft je okrene za tebe i kaže to.

## Postavke

- **Debljina (mm)** je debljina rebra preko ravnine skice. Može je kontrolisati parametar.
- **Debljina** (izbor ispod nje): **Centrirano na ravnini skice**, **Ispred ravnine** (duž njene normale) ili **Iza ravnine**.
- **Okreni** popunjava drugu stranu linije.

## Poruke

- **Na ovoj strani ivica rebra nikad ne dodiruje tijelo** — ništa se ne zatvara u prostoru na toj strani: označi ili odznači **Okreni**, ili pomjeri liniju tako da je zidovi ograniče.
- **Rebro treba jedan otvoreni lanac linija u svojoj skici** — skica ima zatvoreni oblik, luk ili splajn, ili linije koje se ne spajaju s kraja na kraj.
- **Ivica rebra ide unutar tijela na tom mjestu** — linija leži unutar čvrstog tijela; nacrtaj je u otvorenom prostoru između zidova.
