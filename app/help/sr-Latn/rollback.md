---
title: Vraćanje i napredovanje kroz istoriju
summary: Pomeraj traku vraćanja gore i dole po jedan element da pratiš pravljenje dela, umetni elemente u sredinu i vrati se na kraj.
keywords: vraćanje, vrati, napred, traka vraćanja, korak kroz istoriju, umetni element, zamrzni, istorija
from: 9a366cae
---

Traka vraćanja određuje koliko istorije se pravi. Elementi ispod nje su zasenčeni i nisu napravljeni; novi elementi ulaze na traci.

## Korak po jedan element

Dok je deo na ekranu (nema otvorene skice ni crteža):

| Radnja | Rezultat |
|---|---|
| {{key:[}} ili strelica nagore pored imena dela | Traka se pomera gore za jedan element |
| {{key:]}} ili strelica nadole | Traka se pomera dole za jedan element |
| {{key:End}} ili dugme za kraj trake | Svi elementi se ponovo prave |

Statusna traka kaže gde je traka, na primer „Traka vraćanja posle Sketch1: 1 od 2 elementa napravljen“. Dugmad su isključena kad traka ne može dalje da se pomeri u tom smeru.

Na bilo kom elementu možeš da izabereš {{ui:Vrati istoriju do ovde}}, ili da klikneš **Traka vraćanja · napred** u istoriji.

## Umetanje elementa u sredinu

1. Vraćaj traku unazad dok ne stane tamo gde novi element treba da ide.
2. Dodaj element: ulazi na traci.
3. Pritisni {{key:End}} da napraviš ostatak istorije na njemu.

Svaki pomak trake je korak koji možeš da poništiš sa {{key:Mod+Z}}. Mesto trake se čuva u datoteci, pa deo može da se pošalje vraćen unazad. Alatka za komandnu liniju takođe je pomera: `partcraft rollback part.json` i `partcraft forward part.json --end`.
