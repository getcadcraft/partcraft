---
title: Model .3dm uz živu vezu
summary: Mijenjajte model u programu u kojem je nastao, a tijelo u PartCraftu prati promjene, iz Rhina 8 ili definicije u Grasshopperu, uz ponovno izgrađene značajke na novom obliku.
keywords: rhino, grasshopper, živa veza, veza uživo, 3dm, nurbs, parametarski, veza, sinkronizacija, skripta, slanje, uvezeno tijelo
from: cf4dc9b2
---

Model i dalje oblikujte tamo gdje ga modelirate, a ovdje ga obrađujte, provjeravajte i dokumentirajte. Svaka promjena u drugom programu zamjenjuje jedno uvezeno tijelo u PartCraftu, a značajke iza njega se ponovno grade na novom obliku.

:::note
Veza treba **CadCraft Studio** na istom računalu. Kartica preglednika ne može preuzeti vezu. Ništa ne ide preko interneta: skripta razgovara sa Studiom na adresi ovog računala, uz token.
:::

:::warning
Ova veza je testirana s pisačem datoteka iz skripte i zamjenskim programom, još ne unutar samog Rhina ili Grasshoppera. Ako nešto tamo ne uspije, javite nam što je pisalo.
:::

## Postavljanje

1. U Studiu otvorite PartCraft. U {{ui:Postavke}} › {{ui:PartCraft}} › {{ui:Pomoćnici}} označite **Dopusti da AI pomoćnici i skripte koriste PartCraft**, zatim **Uredi**.
2. U Studiu odaberite {{ui:Poveži pomoćnika}}. Prikazat će adresu i token koje ćete zalijepiti dolje.
3. Preuzmite skriptu: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Iz Rhina

1. Pokrenite `cadcraft_link.py` u uređivaču skripti Rhina (Python 3 u Rhinu 8).
2. Prvi put zalijepite adresu i token. Spremaju se u `.cadcraft-link.json` u vašoj početnoj mapi, nikada u model. Studio pri svakom pokretanju izradi novi token, pa skripta tada ponovno pita.

Za zaustavljanje ponovno pokrenite skriptu.

## Iz Grasshoppera

Najprije jednom pokrenite skriptu u Rhinu, da se adresa i token spreme.

1. Dodajte komponentu Script (Python 3) i u nju zalijepite cijeli `cadcraft_link.py`.
2. Dajte joj ove ulaze: `G` (geometrija, s pristupom listi), `N` (ime, neobavezno), `On` (logička sklopka) i `Target` (neobavezno: `model` ili `part`, ako su otvorene obje aplikacije).
3. Postavite `On` na true.

Svako rješavanje šalje `G` i zamjenjuje ono što je komponenta poslala prošli put.

## Kako ovdje radi

- **Jedno tijelo.** Sve vidljivo u modelu postaje jedna uvezena značajka, kao kad [otvorite .3dm datoteku](topic:open-3dm-files).
- **Mora se zatvoriti.** PartCraft popunjava male rupe i ravne otvore, a drugi program dobije podatak koliko ih je bilo. Ako model i dalje nije zatvoren, PartCraft zadržava tijelo koje je imao, a statusna traka to kaže. Sljedeća promjena koja se zatvori ažurira ga.
- **Završite što radite.** U skici ili crtežu ažuriranja se odbijaju i pokušavaju ponovno; stignu čim se vratite u model.
- **Poništavanje.** Ažuriranja unutar dvije sekunde jedno od drugog dijele jedan korak poništavanja.
- **Spremanje.** Datoteka dijela čuva vezu. Nakon ponovnog otvaranja pokrenite skriptu ponovno, i ista značajka se ažurira.

**Samo u jednom smjeru.** Promjene ovdje se ne vraćaju u drugi program.

## Ako nešto pođe po zlu

- **„Nijedan prozor ModelCrafta ili PartCrafta to ne dopušta”:** napravite 1. korak postavljanja.
- **„Studio je odbio token”:** Studio se ponovno pokrenuo. Kopirajte novi token i ponovno pokrenite skriptu. Za Grasshopper ju najprije pokrenite u Rhinu.
- **„Ne mogu doći do CadCraft Studija”:** Studio nije pokrenut ili se adresa promijenila.
