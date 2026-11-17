---
title: Održavaj .3dm model aktuelnim
summary: Menjajte model u programu u kome je nastao i pratite kako se telo u PartCraft-u prati, iz Rhino 8 ili Grasshopper definicije, uz elemente koji se ponovo grade na novom obliku.
keywords: rhino, grasshopper, veza uživo, živa veza, 3dm, nurbs, parametarski, veza, sinhronizacija, skripta, slanje, uvezeno telo
from: cf4dc9b2
---

Oblikujte model tamo gde ga modelujete, a ovde ga obradite, proverite i dokumentujte. Svaka promena u drugom programu zamenjuje jedno uvezeno telo u PartCraft-u, a elementi posle njega se ponovo grade na novom obliku.

:::note
Veza zahteva **CadCraft Studio** na istom računaru. Kartica pregledača ne može da uspostavi vezu. Ništa ne ide preko interneta: skripta razgovara sa CadCraft Studio na adresi ovog računara, uz token.
:::

:::warning
Ova veza je proverena sa pisačem datoteka skripte i zamenom za drugi program, a još ne unutar samog Rhino-a ili Grasshopper-a. Ako tamo nešto ne uspe, javite nam šta je pisalo.
:::

## Podesite

1. U Studio-u otvorite PartCraft. U {{ui:Podešavanja}} › {{ui:PartCraft}} › {{ui:Asistenti}} štiklirajte **Dozvoli AI asistentima i skriptama da koriste PartCraft**, pa **Uredi**.
2. U Studio-u izaberite {{ui:Poveži asistenta}}. Prikazuje se adresa i token koje ćete nalepiti ispod.
3. Preuzmi skriptu: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Iz Rhino-a

1. Pokrenite `cadcraft_link.py` u uređivaču skripti Rhino-a (Python 3 u Rhino 8).
2. Prvi put nalepite adresu i token. Čuvaju se u `.cadcraft-link.json` u vašoj početnoj fascikli, nikad u modelu. Studio pravi novi token pri svakom pokretanju, pa skripta tada ponovo pita.

Ponovo pokrenite skriptu da je zaustavite.

## Iz Grasshopper-a

Prvo jednom pokrenite skriptu u Rhino-u, da se adresa i token sačuvaju.

1. Dodajte komponentu Script (Python 3) i nalepite ceo `cadcraft_link.py` u nju.
2. Dajte joj ove ulaze: `G` (geometrija, sa pristupom listi), `N` (ime, opciono), `On` (logički prekidač) i `Target` (opciono: `model` ili `part`, ako su otvorene obe aplikacije).
3. Postavite `On` na true.

Svako izračunavanje šalje `G` i zamenjuje ono što je komponenta poslala prošli put.

## Kako radi ovde

- **Jedno telo.** Sve što je vidljivo u modelu postaje jedan uvezeni element, kao kada [otvorite .3dm datoteku](topic:open-3dm-files).
- **Mora da bude zatvoreno.** PartCraft popunjava male rupe i ravne otvore, a drugi program se obaveštava koliko ih je. Ako se model i dalje ne zatvara, PartCraft zadržava telo koje je imao, a statusna traka to kaže. Sledeća promena koja se zatvara ga ažurira.
- **Završite ono što radite.** U skici ili crtežu, ažuriranja se odbijaju i pokušavaju ponovo; stižu kada se vratite u model.
- **Opozivanje.** Ažuriranja u razmaku od dve sekunde dele jedan korak opozivanja.
- **Čuvanje.** Datoteka dela čuva vezu. Ponovo pokrenite skriptu posle ponovnog otvaranja, i isti element se ažurira.

**Samo u jednom smeru.** Promene ovde se ne vraćaju drugom programu.

## Ako nešto pođe loše

- **„Nijedan prozor ModelCraft-a ili PartCraft-a to ne dozvoljava“:** uradite korak 1 podešavanja.
- **„Studio je odbio token“:** Studio je ponovo pokrenut. Kopirajte novi token i ponovo pokrenite skriptu. Za Grasshopper, prvo je pokrenite u Rhino-u.
- **„Nije moguće doći do CadCraft Studio-a“:** Studio nije pokrenut, ili je adresa promenjena.
