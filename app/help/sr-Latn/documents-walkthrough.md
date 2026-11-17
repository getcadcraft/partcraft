---
title: Dokumenti i revizije (trezor)
summary: Korak po korak kroz jedan pravi posao: stavite projektnu fasciklu sa delovima i sklopovima pod kontrolu, preuzmite deo, izmenite ga i vratite ga sa napomenom, objavite ga, pogledajte šta ga koristi i specifikaciju materijala, šta drugi vide dok je zaključan i kako radi sa fasciklama u oblaku.
keywords: trezor, dokumenti, vodič, obuka, preuzimanje, vraćanje, revizija, objava, odobravanje, zaključavanje, istorija, gde se koristi, specifikacija materijala, bom, sklop, fascikla u oblaku, projektna fascikla, dve osobe, deljena fascikla
from: 0a5e6983
---

## Šta ćete raditi

Vi ste Ana i radite na projektu Riverside Clinic sa kolegom Benom. Delovi i sklopovi projekta nalaze se u jednoj fascikli kojoj oboje imate pristup (deljeni disk, sinhronizovana fascikla ili fascikla u oblaku). Do kraja, jedna datoteka će proći put od prve kopije do objavljene revizije **A**, zatim će biti ponovo izmenjena kao **B.1**, videćete ko je šta uradio i videćete šta Ben vidi dok vi držite datoteku.

Sve se čuva u skrivenoj fascikli `.ccvault` pored vaših datoteka: nema servera i ništa se ne otprema (izuzetak je fascikla u oblaku, pogledajte poslednji korak). Za sva dugmad i pravila na jednom mestu pogledajte temu *Dokumenti: preuzimanje, revizije i objava* tamo gde je ima vaša aplikacija.

## 1. Podesite projektnu fasciklu

1. Izaberite {{ui:Dokumenti…}} u grupi **Datoteka** na traci sa alatkama.
2. Izaberite {{ui:Izaberi projektnu fasciklu}} i izaberite fasciklu koja sadrži delove i sklopove projekta. (Projektne fascikle rade u Studiju i u pregledačima koji mogu da otvore fasciklu, na primer Chrome i Edge. U drugim pregledačima panel to kaže.)
3. Izaberite {{ui:Promeni}} pored **Vi:** i upišite svoje ime, `Ana` (ako pita, i ime ovog računara). Panel sada piše *Vi: Ana na* i vaš računar. Vaše ime se upisuje uz sve što uradite.
4. Izaberite {{ui:Napravi trezor u ovoj fascikli}} i upišite ime projekta, `Riverside clinic`. Panel piše *Trezor je pokrenut za Riverside clinic.*

## 2. Stavite datoteku pod kontrolu

1. Otvorite **Datoteke koje nisu u trezoru** i izaberite {{ui:Dodaj}} pored `plates/Bracket.partcraft.json`.
2. Ona se pojavljuje pod **Datoteke u trezoru** u reviziji **A.1**, stanje **Rad u toku**. A.1 je prva kopija; trezor čuva kopiju svake revizije.

## 3. Preuzmite, izmenite, vratite

1. Izaberite {{ui:Otvori}} pored `plates/Bracket.partcraft.json`. Deo se otvara u PartCraft-u i panel se zatvara da biste ga videli. Ponovo otvorite panel preko {{ui:Dokumenti…}}.
2. Ponovo otvorite panel i izaberite {{ui:Preuzmi}}. Red sada piše **Preuzeto kod vas**. U `.ccvault/locks` napravljena je datoteka zaključavanja; niko drugi ne može da preuzme ovu datoteku dok je ne vratite.
3. Izmenite deo: promenite dimenziju, dodajte rupu. Čuvanje je odbijeno ako datoteka nije preuzeta na vaše ime, i poruka kaže zašto; {{ui:Sačuvaj kao}} uvek radi za kopiju vaše sopstvene.
4. Otvorite panel, izaberite {{ui:Vrati}} i upišite šta je promenjeno (`Pomerena vrata`). Panel kaže *vraćeno kao A.2*. Datoteka u projektnoj fascikli je sada deo koji ste imali otvoren, a zaključavanje je uklonjeno. Vraćanje bez promene zadržava reviziju.

Ako se predomislite, {{ui:Opozovi preuzimanje}} vraća datoteku bez nove revizije.

## 4. Pregled i objava

1. Izaberite {{ui:Pošalji na pregled}}. Stanje postaje **Na pregledu** i datoteka je samo za čitanje.
2. Pre odobravanja izaberite {{ui:Podešavanja projekta}} i navedite ko može da odobrava (jedno ime po redu), na primer `Ben` i `Carla`, i označite pravilo da odobravalac mora biti neko drugi, a ne autor. Izaberite {{ui:Sačuvaj podešavanja}}. Sada sam trezor odbija svakog drugog.
3. Ben (ili Carla) izabere {{ui:Odobri}} i upiše ime odobravaoca. Stanje postaje **Objavljeno**, a revizija postaje **A**, sa *odobrio* i imenom. Objavljena datoteka je samo za čitanje. {{ui:Vrati pošiljaocu}} bi je vratio u Rad u toku, sa razlogom.

Ime odobravaoca je ime upisano u panel; to je zapis o tome ko je odobrio, a ne dokaz identiteta.

## 5. Nova revizija

1. Na objavljenoj datoteci izaberite {{ui:Nova revizija}}. Time je rezervišete za sledeće slovo.
2. Izmenite je, zatim {{ui:Vrati}}. Revizija je **B.1**, rad u toku. Objavite je na isti način i postaje **B**. {{ui:Opozovi preuzimanje}} pre prvog vraćanja ostavlja je na **A**.

Slova revizija idu A, B … Z, AA, AB. Ako vaš standard izostavlja neka slova, podešavanje projekta *Koristi niz po ASME Y14.35* preskače I, O, Q, S, X i Z za sledeće revizije.

## 6. Pogledajte šta se dogodilo

Izaberite ime datoteke da biste otvorili njene pojedinosti:

- **{{ui:Istorija}}**: svaki događaj, najnoviji prvi, sa tim ko je, na kom računaru i kada: *Vraćeno kao A.2* od Ane, *Objavljeno* od Bena, i tako dalje.
- **{{ui:Revizije}}**: tabela revizija: svaka sačuvana revizija, sa datumom, ko ju je vratio, napomenom i ko ju je odobrio. Trezor čuva kopiju svake u `.ccvault/revs`.
- **{{ui:Koristi}}**: delovi sklopa.
- **{{ui:Koristi ga}}**: izlistava svaki sklop u trezoru koji sadrži ovaj deo: promenite nosač i znate koje sklopove treba proveriti.

## Sklopovi: šta koriste i specifikacija materijala

Stavite sklop (`.partcraft.json`, sačuvan iz režima Sklop) u fasciklu i dodajte ga. Izaberite njegovo ime: **Koristi** izlistava delove koje sadrži, sa revizijom i stanjem svakog dela; **Koristi ga** na delu izlistava svaki sklop koji ga sadrži. {{ui:Specifikacija materijala (CSV)}} čuva celu listu delova, nivo po nivo, sa količinama, revizijama i stanjima, za tabelu. Promenite nosač i **Koristi ga** kaže koje sklopove treba pogledati.

## 7. Šta Ben vidi dok vi držite datoteku

Sada ponovo preuzmite datoteku i zamolite Bena da otvori istu projektnu fasciklu na svom računaru i otvori panel. U redu za datoteku vidi **Preuzela je Ana na svom računaru od** vremena, i nema dugmeta {{ui:Preuzmi}}. Ako ipak pokuša, trezor odbija: zaključavanje je datoteka koju sistem ne može da napravi dvaput, pa dve osobe ne mogu obe da drže datoteku, čak ni u istoj sekundi, kada je fascikla na disku u Studiju. (U pregledaču fascikla pruža samo najbolji mogući pokušaj, i panel to kaže pod **Fascikla**.)

Ako je Ana odsutna i Benu treba datoteka, {{ui:Prekini preuzimanje}} je oslobađa. On mora da upiše razlog; ide u dnevnik uz to čije je bilo preuzimanje. Kada projekat navodi administratore, samo oni mogu. Preuzimanje starije od roka zastarelosti (podrazumevano 14 dana) označava se kao *odavno*. Posle prekida, Anino kasno vraćanje se odbija, pa jedno drugom ne možete da prepišete izmene.

## 8. Fascikle u oblaku

Fascikla u oblaku je projektna fascikla sačuvana u skladištu u oblaku vašeg tima, pa timu nije potreban deljeni disk. U Studiju, prijavljeni na svoj CadCraft nalog, panel prikazuje {{ui:Otvori fasciklu u oblaku}} pored {{ui:Izaberi projektnu fasciklu}}. Izaberite je i izaberite fasciklu, navedenu kao radni prostor / fascikla. Vlasnik radnog prostora prvo pravi fasciklu, a skladište u oblaku tima mora biti u upotrebi. Sve gore navedeno radi isto; server pravi zaključavanje, koje je strogo među ljudima. Ako niste prijavljeni, panel to traži. U običnom pregledaču ne nudi se dugme za oblak; koristite Studio.

## Probajte

Uradite osam koraka iznad na kopiji prave datoteke. Za korake sa dve osobe potrebna vam je druga osoba ili dva prozora sa dva imena. Ako to probate na pravoj deljenoj fascikli, stranica za testiranje zajednice ima proveru koja traži baš ovo i prima rezultate.
