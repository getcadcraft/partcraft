---
title: Projektuj BIM element i sačuvaj ga nazad u BimCraft
summary: Deo poslat iz BimCraft-a otvara se sa zgradom oko sebe, sivo i samo za čitanje. Promeni ga, pa ga sačuvaj nazad da BimCraft može da prihvati novi oblik.
keywords: bimcraft, bim, element, pošalji, sačuvaj nazad, veza, zgrada, kontekst, susedi, oslonac, nosač, ifc, prihvati
from: 0978fe53
---

## Šta ćeš raditi

Radi na delu koji potiče iz BimCraft modela, na njegovom mestu u zgradi, i pošalji novi oblik nazad.

## Koraci

1. U BimCraft-u izaberi element i odaberi {{ui:Veze dela}} › {{ui:Pošalji u PartCraft}}. PartCraft ga otvara kao novi deo. Statusna traka kaže da je to BIM element.
2. Elementi oko njega (u krugu od 3 m) crtaju se sivo. Tu su da bi se po njima projektovalo. Ne možeš ih birati ni menjati, i nisu sačuvani u datoteci dela.
3. Menjaj deo kao i svaki drugi: seci, dodaj, buši, ogledaj. Njegov koordinatni početak i ose su sopstveni za element, pa se deo vraća tamo gde je stajao.
4. Odaberi {{ui:Datoteka}} › {{ui:Izvezi}} › {{ui:Sačuvaj nazad u BimCraft}}. Statusna traka kaže koju si reviziju poslao.
5. U BimCraft-u element se prikazuje kao izmenjen dok ga osoba tamo ne prihvati.

## Šta treba da vidiš

- Deo zadržava vezu u datoteci. Kad ga kasnije otvoriš, statusna traka i dalje kaže da je BIM element. Siva zgrada se vraća dok pregledač još čuva paket sa kojim je poslat.
- Ponovno čuvanje nazad šalje reviziju 2, 3 i tako dalje. BimCraft zadržava najnoviju.

## Dobro je znati

- Oblik se vraća kao mreža u milimetrima, u sopstvenim osama elementa. Elementi ostaju u PartCraft-u.
- {{ui:Sačuvaj nazad u BimCraft}} ne radi ništa za deo koji ne potiče iz BimCraft-a.
- Deo bez čvrstog tela još nema šta da pošalje.
- Obe aplikacije moraju biti otvorene u istom pregledaču: ništa se ne otprema, dve stranice prenose element između sebe.
