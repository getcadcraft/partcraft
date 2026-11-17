---
title: Vrati unazad i naprijed kroz historiju
summary: Pomjeraj traku povratka gore i dolje jedan element u isto vrijeme da posmatraš kako se dio gradi, umetni elemente u sredinu, i vrati se na kraj.
keywords: povratak, vrati unazad, vrati naprijed, traka povratka, korak kroz historiju, umetni element, zamrzni, historija
from: 9a366cae
---

Traka povratka određuje koliko historije je izgrađeno. Elementi ispod nje su zasivljeni i nisu izgrađeni; novi elementi se umeću na traku.

## Korak po jedan element

Kad je dio na ekranu (nema otvorene skice ili crteža):

| Radnja | Rezultat |
|---|---|
| {{key:[}} ili dugme sa strelicom gore pored naziva dijela | Traka se pomjera gore za jedan element |
| {{key:]}} ili dugme sa strelicom dolje | Traka se pomjera dolje za jedan element |
| {{key:End}} ili dugme trake na kraj | Svaki element se ponovo gradi |

Statusna traka kaže gdje je traka, na primjer "Traka povratka poslije Skica 1: 1 od 2 elementa izgrađeno". Dugmad su isključena kad traka ne može dalje da se pomjeri u tom smjeru.

Također možeš odabrati {{ui:Vrati do ovdje}} na bilo kojem elementu, ili kliknuti **Traka povratka · naprijed** u historiji.

## Umetni element u sredinu

1. Pomjeraj traku unazad dok ne stane tamo gdje novi element treba biti.
2. Dodaj element: ide na traku.
3. Pritisni {{key:End}} da izgradiš ostatak historije na njemu.

Svako pomjeranje trake je korak koji možeš poništiti sa {{key:Mod+Z}}. Mjesto trake se čuva u datoteci, pa se dio može poslati vraćen unazad. Alat za komandnu liniju je također pomjera: `partcraft rollback part.json` i `partcraft forward part.json --end`.
