---
title: Drži .3dm model živim
summary: Mijenjaj model u programu u kojem je nastao i prati kako se tijelo u PartCraft-u mijenja, iz Rhino 8 ili Grasshopper definicije, uz elemente koji se ponovo grade na novom obliku.
keywords: rhino, grasshopper, živa veza, živa konekcija, 3dm, nurbs, parametarski, veza, sinhronizacija, skripta, slanje, uvedeno tijelo
from: cf4dc9b2
---

Nastavi oblikovati model tamo gdje ga modeliraš, a ovdje ga obradi, provjeri i dokumentiraj. Svaka promjena u drugom programu zamjenjuje jedno uvezeno tijelo u PartCraft-u, a elementi poslije njega se ponovo grade na novom obliku.

:::note
Veza zahtijeva **CadCraft Studio** na istom računaru. Karticu pretraživača ne može uspostaviti vezu. Ništa ne ide preko interneta: skripta razgovara sa Studiom na adresi ovog računara, uz token.
:::

:::warning
Ova veza je testirana sa pisačem datoteka skripte i zamjenom za drugi program, još ne unutar samog Rhina ili Grasshoppera. Ako nešto tamo ne uspije, javi nam šta je pisalo.
:::

## Postavljanje

1. U Studiu otvori PartCraft. U {{ui:Postavke}} › {{ui:PartCraft}} › {{ui:Asistenti}} označi **Dozvoli AI asistentima i skriptama da koriste PartCraft**, zatim **Uredi**.
2. U Studiu odaberi {{ui:Poveži asistenta}}. Prikazuje adresu i token koje ćeš nalijepiti ispod.
3. Preuzmi skriptu: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Iz Rhina

1. Pokreni `cadcraft_link.py` u uređivaču skripti Rhina (Python 3 u Rhinu 8).
2. Prvi put nalijepi adresu i token. Čuvaju se u `.cadcraft-link.json` u tvom početnom folderu, nikad u modelu. Studio pravi novi token svaki put kad se pokrene, pa skripta tada pita ponovo.

Ponovo pokreni skriptu da je zaustaviš.

## Iz Grasshoppera

Prvo jednom pokreni skriptu u Rhinu, da se adresa i token sačuvaju.

1. Dodaj komponentu Script (Python 3) i u nju nalijepi cijeli `cadcraft_link.py`.
2. Daj joj ove ulaze: `G` (geometrija, sa pristupom listi), `N` (naziv, opciono), `On` (bulean prekidač) i `Target` (opciono: `model` ili `part`, ako su obje aplikacije otvorene).
3. Postavi `On` na true.

Svako izračunavanje šalje `G` i zamjenjuje ono što je komponenta poslala prošli put.

## Kako ovo radi ovdje

- **Jedno tijelo.** Sve vidljivo u modelu postaje jedan uvezeni element, kao kad [otvoriš .3dm datoteku](topic:open-3dm-files).
- **Mora biti zatvoreno.** PartCraft popunjava male rupe i ravne otvore, a drugi program se obavještava koliko ih je. Ako se model i dalje ne zatvara, PartCraft zadržava tijelo koje je imao, a statusna traka to kaže. Sljedeća promjena koja ga zatvori ažurira ga.
- **Završi ono što radiš.** U skici ili crtežu ažuriranja se odbijaju i pokušavaju ponovo; stižu kad se vratiš u model.
- **Poništavanje.** Ažuriranja unutar dvije sekunde jedno od drugog dijele jedan korak poništavanja.
- **Spasi.** Datoteka dijela čuva vezu. Nakon ponovnog otvaranja pokreni skriptu ponovo, i isti element se ažurira.

**Samo jedan smjer.** Promjene ovdje se ne vraćaju drugom programu.

## Ako nešto pođe po zlu

- **"Nijedan prozor programa ModelCraft ili PartCraft to ne dozvoljava":** uradi korak 1 postavljanja.
- **"Studio je odbio token":** Studio je ponovo pokrenut. Kopiraj novi token i ponovo pokreni skriptu. Za Grasshopper, prvo je pokreni u Rhinu.
- **"Nije moguće povezati se sa CadCraft Studio":** Studio nije pokrenut, ili se adresa promijenila.
