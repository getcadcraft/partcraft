---
title: Projektujte BimCraft element i vratite ga nazad
summary: Dio poslan iz BimCraft-a otvara se sa zgradom oko sebe, sivo i samo za čitanje. Promijenite ga, zatim ga spasite nazad da BimCraft može prihvatiti novi oblik.
keywords: bimcraft, bim, element, pošalji, spasi nazad, veza, zgrada, kontekst, susjedi, oslonac, nosač, ifc, prihvati
from: 0978fe53
---

## Šta ćete raditi

Radite na dijelu koji je došao iz BimCraft modela, na njegovom mjestu u zgradi, i vratite novi oblik u BimCraft.

## Koraci

1. U BimCraftu odaberite element i izaberite {{ui:Part links}} › {{ui:Send to PartCraft}}. PartCraft ga otvara kao novi dio. Statusna traka kaže da je BIM element.
2. Elementi oko njega (unutar 3 m) su nacrtani sivo. Tu su da bi se projektovalo u odnosu na njih. Ne možete ih odabrati ili mijenjati, i nisu sačuvani u datoteci dijela.
3. Promijenite dio kao i svaki drugi: režite, dodajte, bušite, zrcalite. Njegovo ishodište i ose su elementove sopstvene, pa se dio vraća tamo gdje je stajao.
4. Izaberite {{ui:File}} › {{ui:Export}} › {{ui:Save back to BimCraft}}. Statusna traka kaže koju reviziju ste poslali.
5. U BimCraftu element se prikazuje kao promijenjen dok ga osoba tamo ne prihvati.

## Šta treba da vidite

- Dio zadržava svoju vezu u datoteci. Kada ga kasnije otvorite, statusna traka i dalje kaže da je BIM element. Sivo okruženje zgrade se vraća dok pregledač još drži paket sa kojim je poslat.
- Ponovno spašavanje šalje reviziju 2, 3 i tako dalje. BimCraft zadržava najnoviju.

## Dobro je znati

- Oblik se vraća kao mrežni model u milimetrima, u sopstvenim osama elementa. Značajke ostaju u PartCraftu.
- {{ui:Save back to BimCraft}} ne radi ništa za dio koji nije došao iz BimCraft-a.
- Dio bez čvrstog tijela još nema šta da se pošalje.
- Obje aplikacije moraju biti otvorene u istom pregledaču: ništa se ne otprema, a dvije stranice međusobno prenose element.
