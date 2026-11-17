---
title: Modeliranje jednog dela uz Live TeamWork
summary: Šta se menja u PartCraft-u dok si u sesiji Live TeamWork iz CadCraft Studija: svačiji elementi u jednom stablu, svaki prozor gradi isto čvrsto telo, tvoje sopstveno opozivanje i pridruživanje iz pregledača na istoj mreži.
keywords: live, live teamwork, studio live, zajedno, saradnja, sesija, deli uživo, pridruži se, stablo elemenata, istorija, ponovna izgradnja, kursor, pokazivač, vide se, imena, boja, izbor, opozivanje, domaćin
from: 1809b96c
---

## Šta ćeš naučiti

Šta se dešava sa delom dok nekoliko ljudi modeluje istovremeno. CadCraft Studio pokreće i pridružuje se sesiji Live TeamWork (Deli, Pridruži se); ova stranica je o samom delu.

## Svi modeliraju istovremeno

Svi rade na istom stablu elemenata: skice, izvlačenja, rupe, obrasci, zaobljenja, parametri. Tvoje izmene se odmah vide; tuđe se pojave trenutak nakon što ih naprave. Putuje samo stablo: svaki prozor sam gradi čvrsto telo, a PartCraft-ov kernel gradi isto čvrsto telo iz istog stabla u svakom prozoru.

- **Dvoje menjaju jedan element:** različita podešavanja (jedno dubinu, drugo uslov kraja) se zadržavaju oba; isto podešavanje ide na kasniju izmenu.
- **Skica** putuje kao celina: kad dvoje istovremeno menjaju jednu skicu, kasnija izmena pobeđuje. Dogovorite ko crta koju skicu.
- **Element napravljen na nečemu što je neko upravo obrisao** (izvlačenje obrisane skice, rupa na obrisanoj strani) se vraća, a statusna traka kaže zašto.
- **Menjanje redosleda stabla** se proverava: ako dvoje istovremeno prevlače elemente, drugi potez se vraća.

## Vidite se međusobno

Svako u sesiji ima svoju boju. Vidiš pokazivač svake osobe kao strelicu u njenoj boji sa imenom pored, na površini na koju pokazuje. Kad ima izabran element u stablu, njegovo ime se prikazuje posle njenog.

Pokazivači, imena i izbori važe samo za sesiju: nikad se ne čuvaju u datoteci i nikad ne idu ni u čije opozivanje. Klize do mesta gde je svaka osoba, pa ostaju glatki i na sporoj vezi.

## Opozivanje poništava tvoj rad

{{key:Mod+Z}} poništava tvoju poslednju izmenu i ostavlja tuđe netaknute. Kad je neko promenio istu stvar posle toga, ništa se ne poništava i statusna traka kaže ko.

## Pridruživanje iz pregledača

Saradnik bez Studija može da skenira sliku ispod koda domaćina telefonom, tabletom ili računarom na istoj mreži. PartCraft se otvara u pregledaču, popunjava se delom domaćina kad ga domaćin jednom pusti unutra, i gradi ga. Pozivnica može da dovede nekoga sa druge mreže: domaćin treba mesto u Team Cloud Plan-u za aplikaciju, svi ostali se pridružuju besplatno, a veza radi samo dok je domaćinova sesija otvorena.

## Kad sesija završi

Samo domaćin čuva deo. Svi ostali zadržavaju nesačuvanu kopiju: sačuvaj je ako želiš da je zadržiš.

:::note
Sklopovi se još ne dele u sesiji: otvori sam deo da radite zajedno na njemu.
:::
