---
title: Oblikujte element BimCraft i spremite ga natrag
summary: Dio poslan iz programa BimCraft otvara se sa zgradom oko sebe, sivo i samo za čitanje. Izmijenite ga, a zatim ga spremite natrag da BimCraft može prihvatiti novi oblik.
keywords: bimcraft, bim, element, pošalji, spremi natrag, veza, zgrada, kontekst, susjedni elementi, oslonac, nosač, ifc, prihvati
from: 0978fe53
---

## Što ćete učiniti

Radite na dijelu koji je došao iz modela BimCraft, na njegovu mjestu u zgradi, i pošaljite novi oblik natrag.

## Koraci

1. U programu BimCraft odaberite element i odaberite {{ui:Poveznice dijelova}} › {{ui:Pošalji u PartCraft}}. PartCraft ga otvara kao novi dio. Statusna traka kaže da je riječ o BIM elementu.
2. Elementi oko njega (unutar 3 m) prikazani su sivo. Tu su da biste se prema njima ravnali. Ne možete ih odabrati ni mijenjati, i nisu spremljeni u datoteku dijela.
3. Promijenite dio kao i svaki drugi: izrežite, dodajte, izbušite, zrcalite. Njegovo ishodište i osi pripadaju samom elementu, pa se dio vraća na mjesto na kojem je bio.
4. Odaberite {{ui:Datoteka}} › {{ui:Izvoz}} › {{ui:Spremi natrag u BimCraft}}. Statusna traka kaže koju ste reviziju poslali.
5. U programu BimCraft element se prikazuje kao promijenjen dok ga osoba tamo ne prihvati.

## Što biste trebali vidjeti

- Dio zadržava svoju vezu u datoteci. Kad ga kasnije otvorite, statusna traka i dalje kaže da je riječ o BIM elementu. Siva zgrada se vraća dok preglednik još drži paket u kojem je poslan.
- Ponovno spremanje natrag šalje reviziju 2, 3 i tako dalje. BimCraft zadržava najnoviju.

## Dobro je znati

- Oblik se vraća kao mreža u milimetrima, u vlastitim osima elementa. Značajke ostaju u programu PartCraft.
- {{ui:Spremi natrag u BimCraft}} ne radi ništa za dio koji nije došao iz programa BimCraft.
- Dio još bez punog tijela nema što poslati.
- Obje aplikacije moraju biti otvorene u istom pregledniku: ništa se ne učitava, dvije stranice same prenose element između sebe.
