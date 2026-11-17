---
title: Dokumenti i revizije (trezor)
summary: Korak po korak kroz jedan stvarni posao: stavi folder projekta s dijelovima i sklopovima pod kontrolu, odjavi dio, promijeni ga, prijavi s napomenom, izdaj ga, vidi šta ga koristi i specifikaciju materijala, šta druga osoba vidi dok je zaključan i kako radi s folderima u oblaku.
keywords: trezor, dokumenti, vodič, tutorijal, odjava, prijava, revizija, izdavanje, odobravanje, zaključavanje, historija, gdje se koristi, specifikacija materijala, bom, sklop, folder u oblaku, projektni folder, dvije osobe, dijeljeni folder
from: 0a5e6983
---

## Šta ćete raditi

Vi ste Ana, radite na projektu Riverside Clinic sa kolegom Benom. Dijelovi i sklopovi projekta nalaze se u jednom folderu kojem oboje pristupate (dijeljeni disk, sinhronizovani folder ili folder u oblaku). Na kraju će jedna datoteka proći put od prve kopije do izdate revizije **A**, zatim će biti ponovo promijenjena kao **B.1**, vidjet ćete ko je šta uradio i šta Ben vidi dok vi držite datoteku.

Sve se čuva u skrivenom folderu `.ccvault` pored vaših datoteka: nema servera, ništa se ne otprema (izuzetak je folder u oblaku, vidi zadnji korak). Za svako dugme i pravilo na jednom mjestu pogledajte temu *Dokumenti: odjava, revizije i izdavanje* tamo gdje to vaša aplikacija ima.

## 1. Postavi projektni folder

1. Odaberi {{ui:Dokumenti…}} u grupi **Datoteka** na traci s alatima.
2. Odaberi {{ui:Izaberi projektni folder}} i izaberi folder koji sadrži dijelove i sklopove projekta. (Projektni folderi rade u Studiju i u preglednicima koji mogu otvoriti folder, kao što su Chrome i Edge. U drugim preglednicima panel to kaže.)
3. Odaberi {{ui:Promijeni}} pored **Vi:** i upiši svoje ime, `Ana` (ako pita, i ime ovog računara). Panel sada piše *Vi: Ana na* i vaš računar. Vaše ime ide uz sve što radite.
4. Odaberi {{ui:Pokreni trezor u ovom folderu}} i upiši naziv projekta, `Riverside clinic`. Panel piše *Trezor je pokrenut za Riverside clinic.*

## 2. Stavi datoteku pod kontrolu

1. Otvori **Datoteke koje nisu u trezoru** i odaberi {{ui:Dodaj}} pored `plates/Bracket.partcraft.json`.
2. Ona se pojavljuje pod **Datoteke u trezoru** kao revizija **A.1**, stanje **U radu**. A.1 je njena prva kopija; trezor čuva kopiju svake revizije.

## 3. Odjavi, promijeni, prijavi

1. Odaberi {{ui:Otvori}} pored `plates/Bracket.partcraft.json`. Dio se otvara u PartCraftu, a panel se zatvara da vidite dio. Ponovo otvorite panel preko {{ui:Dokumenti…}}.
2. Ponovo otvorite panel i odaberi {{ui:Odjavi}}. Red sada piše **Odjavljeno na vas**. Datoteka za zaključavanje je napravljena u `.ccvault/locks`; niko drugi ne može odjaviti ovu datoteku dok je vi ne prijavite.
3. Promijenite dio: uredite dimenziju, dodajte rupu. Spašavanje je odbijeno osim ako je datoteka odjavljena na vas, i kaže zašto; {{ui:Spasi kao}} uvijek radi za kopiju vašeg vlastitog.
4. Otvorite panel, odaberite {{ui:Prijavi}} i upišite šta je promijenjeno (`Pomjerena vrata`). Panel piše *prijavljeno kao A.2*. Datoteka u projektnom folderu je sada dio koji ste imali otvoren, a zaključavanje je nestalo. Prijava bez promjene zadržava reviziju.

Ako se predomislite, {{ui:Poništi odjavu}} vraća datoteku bez nove revizije.

## 4. Pregled i izdavanje

1. Odaberi {{ui:Pošalji na pregled}}. Stanje postaje **Na pregledu**, a datoteka je samo za čitanje.
2. Prije odobravanja odaberi {{ui:Postavke projekta}} i navedi ko smije odobriti (jedno ime po redu), na primjer `Ben` i `Carla`, i označi pravilo da odobravalac mora biti neko drugi osim autora. Odaberi {{ui:Spasi postavke}}. Sada sam trezor odbija sve ostale.
3. Ben (ili Carla) odabere {{ui:Odobri}} i upiše ime odobravaoca. Stanje postaje **Izdato**, a revizija postaje **A**, sa *odobrio* i imenom. Izdata datoteka je samo za čitanje. {{ui:Vrati}} bi je vratio u **U radu**, uz razlog.

Ime odobravaoca je ime upisano u panel; ono je zapis o tome ko je odobrio, a ne dokaz identiteta.

## 5. Nova revizija

1. Na izdatoj datoteci odaberi {{ui:Nova revizija}}. Držite je za sljedeće slovo.
2. Promijenite je, zatim {{ui:Prijavi}}. Revizija je **B.1**, u radu. Izdajte je na isti način i postaje **B**. {{ui:Poništi odjavu}} prije prve prijave ostavlja je na **A**.

Revizijska slova idu A, B … Z, AA, AB. Ako vaš standard izostavlja neka slova, postavka projekta *Koristi ASME Y14.35 niz* preskače I, O, Q, S, X i Z za sljedeće revizije.

## 6. Pogledajte šta se desilo

Odaberite ime datoteke da otvorite njene detalje:

- **{{ui:Historija}}**: svaki događaj, najnoviji prvi, sa tim ko, na kojem računaru i kada: *Prijavljeno A.2* od Ane, *Izdato* od Bena, i tako dalje.
- **{{ui:Revizije}}**: tabela revizija: svaka čuvana revizija, sa datumom, ko ju je prijavio, napomenom i ko ju je odobrio. Trezor čuva kopiju svake u `.ccvault/revs`.
- **{{ui:Koristi}}**: dijelovi sklopa.
- **{{ui:Koristi ga}}**: navodi svaki sklop u trezoru koji sadrži ovaj dio: promijenite nosač i znate koje sklopove treba provjeriti.

## Sklopovi: šta koriste i specifikacija materijala

Stavite sklop (`.partcraft.json`, sačuvan iz režima Sklop) u folder i dodajte ga. Odaberite njegovo ime: **Koristi** navodi dijelove koje sadrži, sa revizijom i stanjem svakog dijela; **Koristi ga** na dijelu navodi svaki sklop koji ga sadrži. {{ui:Specifikacija materijala (CSV)}} čuva cijelu listu dijelova, nivo po nivo, sa količinama, revizijama i stanjima, za tabelarni program. Promijenite nosač, i **Koristi ga** kaže koje sklopove treba pogledati.

## 7. Šta Ben vidi dok vi držite datoteku

Sada ponovo odjavite datoteku i zamolite Bena da otvori isti projektni folder na svom računaru i otvori panel. Na redu datoteke vidi **Odjavila je Ana na** vaš računar **od** vremena, i nema dugmeta {{ui:Odjavi}}. Ako ipak pokuša, trezor odbija: zaključavanje je datoteka koju sistem neće napraviti dvaput, pa dvije osobe ne mogu istovremeno držati datoteku, čak ni u istoj sekundi, kada je folder na disku u Studiju. (U pregledniku folder pruža samo najbolji napor, i panel to kaže pod **Folder**.)

Ako je Ana odsutna a Benu treba datoteka, {{ui:Prekini odjavu}} je oslobađa. On mora upisati razlog; ide u dnevnik uz to čija je odjava bila. Kada projekat navodi administratore, samo oni mogu. Odjava starija od granice zastarjelosti (podrazumijevano 14 dana) označava se kao *odavno*. Nakon prekida, Anina kasna prijava je odbijena, pa jedno drugo ne možete prepisati.

## 8. Folderi u oblaku

Folder u oblaku je projektni folder koji se čuva u oblačnom skladištu vašeg tima, pa timu ne treba dijeljeni disk. U Studiju, prijavljeni na vaš CadCraft račun, panel prikazuje {{ui:Otvori folder u oblaku}} pored {{ui:Izaberi projektni folder}}. Odaberite ga i izaberite folder, prikazan kao radni prostor / folder. Vlasnik radnog prostora prvo pravi folder, a oblačno skladište tima mora biti aktivno. Sve gore navedeno radi isto; server pravi zaključavanje, koje je strogo među ljudima. Ako niste prijavljeni, panel traži da se prijavite. U običnoj kartici preglednika dugme za oblak se ne nudi; koristite Studio.

## Probajte

Uradite osam koraka gore sa kopijom stvarne datoteke. Za korake sa dvije osobe trebate drugu osobu ili dva prozora sa dva imena. Ako to probate sa stvarnim dijeljenim folderom, stranica za testiranje zajednice ima provjeru koja traži upravo ovo i prima rezultate.
