---
title: Dokumenti i revizije (trezor)
summary: Vodič korak po korak kroz jedan stvarni posao: stavite mapu projekta s dijelovima i sklopovima pod nadzor, uzmite dio na uređivanje, promijenite ga, vratite ga u trezor s napomenom, izdajte ga, pogledajte što ga koristi i sastavnicu, što drugi vide dok je zaključan i kako to radi s mapama u oblaku.
keywords: trezor, dokumenti, vodič, udžbenik, uzmi na uređivanje, vrati u trezor, revizija, izdavanje, odobri, zaključavanje, povijest, gdje se koristi, sastavnica, bom, sklop, mapa u oblaku, mapa projekta, dvije osobe, zajednička mapa
from: 0a5e6983
---

## Što ćete raditi

Vi ste Ana i radite na projektu Riverside Clinic zajedno s kolegom Benom. Dijelovi i sklopovi projekta nalaze se u jednoj mapi kojoj oboje imate pristup (zajednički disk, sinkronizirana mapa ili mapa u oblaku). Do kraja će jedna datoteka proći put od prve kopije do izdane revizije **A**, zatim će biti promijenjena kao **B.1**, vidjet ćete tko je što radio i što Ben vidi dok vi držite datoteku.

Sve se čuva u skrivenoj mapi `.ccvault` pored vaših datoteka: bez poslužitelja, ništa se ne učitava (iznimka je mapa u oblaku, pogledajte posljednji korak). Za svaki gumb i pravilo na jednom mjestu pogledajte temu *Dokumenti: uzimanje na uređivanje, revizije i izdavanje* ako ju vaša aplikacija ima.

## 1. Postavite mapu projekta

1. Na traci alata, u grupi **Datoteka**, odaberite {{ui:Dokumenti…}}.
2. Kliknite {{ui:Odaberite projektnu mapu}} i odaberite mapu koja sadrži dijelove i sklopove projekta. (Mape projekata rade u Studiju i u preglednicima koji mogu otvoriti mapu, poput Chromea i Edgea. U drugim preglednicima ploča to kaže.)
3. Kliknite {{ui:Promijeni}} pored **Vi:** i upišite svoje ime, `Ana` (ako to traži, i naziv ovog računala). Ploča sada kaže *Vi: Ana na* i vaše računalo. Vaše ime ide uz sve što radite.
4. Kliknite {{ui:Započni trezor u ovoj mapi}} i upišite naziv projekta, `Riverside clinic`. Ploča kaže *Trezor je pokrenut za Riverside clinic.*

## 2. Stavite datoteku pod nadzor

1. Otvorite **Datoteke izvan trezora** i kliknite {{ui:Dodaj}} pored `plates/Bracket.partcraft.json`.
2. Pojavljuje se pod **Datoteke u trezoru** u reviziji **A.1**, stanje **U radu**. A.1 je prva kopija; trezor čuva kopiju svake revizije.

## 3. Uzmite na uređivanje, promijenite, vratite u trezor

1. Kliknite {{ui:Otvori}} pored `plates/Bracket.partcraft.json`. Dio se otvara u PartCraftu, a ploča se zatvara da vidite dio. Ploču ponovno otvorite preko {{ui:Dokumenti…}}.
2. Ponovno otvorite ploču i kliknite {{ui:Uzmi na uređivanje}}. Redak sada kaže **Uzeto na uređivanje vama**. U `.ccvault/locks` napravljena je datoteka zaključavanja; nitko drugi ne može uzeti ovu datoteku na uređivanje dok je ne vratite u trezor.
3. Promijenite dio: uredite kotu, dodajte rupu. Spremanje se odbija osim ako je datoteka uzeta na uređivanje vama, i ploča kaže zašto. Spremi kao uvijek radi za vašu vlastitu kopiju.
4. Otvorite ploču, kliknite {{ui:Vrati u trezor}} i upišite što se promijenilo (`Pomaknuta vrata`). Ploča kaže *vraćeno kao A.2*. Datoteka u mapi projekta sada je dio koji ste imali otvoren, a zaključavanje je uklonjeno. Vraćanje bez promjene zadržava reviziju.

Ako se predomislite, {{ui:Poništi preuzimanje}} vraća datoteku bez nove revizije.

## 4. Pregled i izdavanje

1. Kliknite {{ui:Pošalji na pregled}}. Stanje postaje **Za pregled**, a datoteka je samo za čitanje.
2. Prije odobravanja kliknite {{ui:Postavke projekta}} i navedite tko smije odobriti (jedno ime po retku), na primjer `Ben` i `Carla`, te označite pravilo da odobravatelj mora biti netko drugi, a ne autor. Kliknite {{ui:Spremi postavke}}. Sada sam trezor odbija sve ostale.
3. Ben (ili Carla) klikne {{ui:Odobri}} i upiše ime odobravatelja. Stanje postaje **Izdano**, revizija postaje **A**, uz *odobrio* i ime. Izdana datoteka je samo za čitanje. {{ui:Vrati}} bi je vratio u **U radu**, uz razlog.

Ime odobravatelja je ime upisano u ploču; to je zapis tko je odobrio, a ne dokaz identiteta.

## 5. Nova revizija

1. Na izdanoj datoteci kliknite {{ui:Nova revizija}}. Time rezervirate sljedeće slovo.
2. Promijenite je, zatim {{ui:Vrati u trezor}}. Revizija je **B.1**, u radu. Izdajte je na isti način i postaje **B**. {{ui:Poništi preuzimanje}} prije prvog vraćanja ostavlja je na **A**.

Slova revizija idu A, B … Z, AA, AB. Ako vaš standard preskače neka slova, postavka projekta *Koristi slijed ASME Y14.35* preskače I, O, Q, S, X i Z za sljedeće revizije.

## 6. Pogledajte što se dogodilo

Kliknite naziv datoteke da otvorite njezine pojedinosti:

- **{{ui:Povijest}}**: svaki događaj, najnoviji prvi, s tim tko, na kojem računalu i kada: *Vraćeno A.2* od Ane, *Izdano* od Bena i tako dalje.
- **{{ui:Revizije}}**: tablica revizija: svaka čuvana revizija, s datumom, tko ju je vratio u trezor, napomenom i tko ju je odobrio. Trezor čuva kopiju svake u `.ccvault/revs`.
- **{{ui:Koristi}}**: dijelovi sklopa.
- **{{ui:Koristi ga}}**: popis svakog sklopa u trezoru koji sadrži ovaj dio. Promijenite nosač i znate koje sklopove treba provjeriti.

## Sklopovi: što koriste i sastavnica

Stavite sklop (`.partcraft.json`, spremljen iz načina Assembly) u mapu i dodajte ga. Kliknite njegov naziv: **Koristi** navodi dijelove koje sadrži, s revizijom i stanjem svakog; **Koristi ga** na dijelu navodi svaki sklop koji ga sadrži. {{ui:Sastavnica (CSV)}} sprema cijeli popis dijelova, razinu po razinu, s količinama, revizijama i stanjima, za tablični kalkulator. Promijenite nosač i **Koristi ga** kaže koje sklopove treba pogledati.

## 7. Što Ben vidi dok vi držite datoteku

Sada ponovno uzmite datoteku na uređivanje i zamolite Bena da na svom računalu otvori istu mapu projekta i otvori ploču. U retku datoteke on vidi **Na uređivanju kod Ane na** vašem računalu **od** vremena, i nema gumba {{ui:Uzmi na uređivanje}}. Ako ipak pokuša, trezor odbija: zaključavanje je datoteka koju sustav neće napraviti dvaput, tako da dvije osobe ne mogu istovremeno držati datoteku, čak ni u istoj sekundi, kada je mapa na disku u Studiju. (U pregledniku mapa dopušta samo najbolji mogući pristup, i ploča to kaže pod **Mapa**.)

Ako Ana nije tu, a Ben treba datoteku, {{ui:Prekini preuzimanje}} je oslobađa. Mora upisati razlog; ide u dnevnik uz to čije je bilo preuzimanje. Kada projekt navodi administratore, samo oni to mogu. Preuzimanje starije od granice zastarjelosti (zadano 14 dana) označeno je kao *dugo vremena*. Nakon prekida, Anino kasno vraćanje se odbija, tako da se vas dvoje ne mogu međusobno prepisati.

## 8. Mape u oblaku

Mapa u oblaku je mapa projekta pohranjena u oblaku vašeg tima, pa tim ne treba zajednički disk. U Studiju, prijavljeni na svoj CadCraft račun, ploča uz {{ui:Odaberite projektnu mapu}} prikazuje {{ui:Otvori mapu u oblaku}}. Kliknite ga i odaberite mapu, navedenu kao radni prostor / mapa. Vlasnik radnog prostora prvo izrađuje mapu, a pohrana u oblaku tima mora biti aktivna. Sve gore navedeno radi jednako; poslužitelj izrađuje zaključavanje, koje je strogo među osobama. Ako niste prijavljeni, ploča traži da se prijavite. U običnoj kartici preglednika gumb za oblak se ne nudi; koristite Studio.

## Isprobajte

Napravite osam koraka gore s kopijom stvarne datoteke. Za korake s dvije osobe trebate još jednu osobu ili dva prozora s dva imena. Ako to isprobate na stvarnoj zajedničkoj mapi, stranica za testiranje zajednice ima provjeru koja traži upravo to i prihvaća rezultate.
