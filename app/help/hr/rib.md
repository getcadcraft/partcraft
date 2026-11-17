---
title: Rebra i ukrepe
summary: Ukrijepite dio rebrom nacrtanim kao jednom linijom: ono se puni od linije do stijenki, zadane debljine preko ravnine skice, na strani koju odaberete.
keywords: rebro, ukrepa, stijenka, potporni element, nosač, kutna potpora, tanka stijenka, ojačati
from: 5c218881
---

:::note
**Još nije izrađeno u ovoj verziji.** Rebro treba egzaktni kernel geometrije, koji ova verzija PartCraft-a nema: svaki dio gradi mrežnim kernelom. [Što još nije izrađeno](topic:not-built-yet) govori što raditi umjesto toga. Ostatak ove stranice opisuje ga onako kako radi s egzaktnim kernelom.
:::

**Rebro** (ili ukrepa) je tanka stijenka koja ukrepljuje dio, kao trokut unutar kuta L-nosača. Crtate samo njegov slobodni rub: PartCraft puni prostor između te linije i stijenki. Treba **egzaktni kernel** (vidi [Mrežni kernel](topic:solid-kernels)).

## Dodajte rebro

1. Napravite ravninu kroz sredinu mjesta gdje ide rebro (za L-nosač dubine 40, ravninu 20 ispred njegove skice: vidi [Referentne ravnine, osi i točke](topic:reference-geometry)).
2. Na njoj skicirajte **jednu liniju** od stijenke do stijenke — ili nekoliko linija s kraja na kraj za savijeni rub rebra. Linija može stati kratko od stijenki: njezini krajevi se produže dok ih ne dodirnu.
3. Odaberite skicu i odaberite {{ui:Više}} › {{ui:Rebro}}.

Rebro se puni od linije do stijenki na strani prema sredini dijela, pa ukrepa padne u unutarnji kut. Ako je ta strana otvorena a druga zatvorena, PartCraft je sam okrene i to kaže.

## Postavke

- **Debljina (mm)** je debljina rebra preko ravnine skice. Može je upravljati parametar.
- **Debljina** (izbor ispod nje): **Centrirano na ravnini skice**, **Ispred ravnine** (duž njezine normale) ili **Iza ravnine**.
- **Preokreni** puni drugu stranu linije.

## Poruke

- **Na ovoj strani rub rebra nikad ne dodiruje tijelo** — ništa se ne zatvara u prostoru na toj strani: označite ili odznačite **Preokreni**, ili pomaknite liniju tako da je stijenke ograniče.
- **Rebro treba jedan otvoreni lanac linija u svojoj skici** — skica ima zatvoreni oblik, luk ili splajn, ili linije koje se ne spajaju s kraja na kraj.
- **Rub rebra tamo prolazi unutar tijela** — linija leži unutar punog tijela; nacrtajte je u otvorenom prostoru između stijenki.
