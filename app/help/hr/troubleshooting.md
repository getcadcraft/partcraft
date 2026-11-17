---
title: Rješavanje problema
summary: Problemi koje možete naići u PartCraftu, od toga da se aplikacija ne pokreće do neuspjelih značajki, skica koje se ne rješavaju, datoteka koje se ne otvaraju i spojeva koji se loše ponašaju, s porukom koju vidite i rješenjem.
keywords: problem, pogreška, pomoć, ne radi, ne uspijeva, rušenje, prazno, webgl, webassembly, jezgra, nije izrađeno, prekomjerno određeno, otvoreni profil, ne može se otvoriti, ništa se ne događa, pogrešan smjer, sporo
from: 7728542c
---

Kad nešto ne radi, najprije pročitajte **statusnu traku** pri dnu: PartCraft kaže zašto je odbio ili što očekuje dalje. Neuspjela značajka također prikazuje svoju poruku na vrhu desne ploče i kad prijeđete preko njezina retka u povijesti.

## Aplikacija se ne pokreće

### „Ovaj preglednik ne može prikazati 3D (WebGL je isključen ili nedostaje), pa PartCraft ovdje ne može raditi.“

**Uzrok:** preglednik ima 3D grafiku (WebGL) isključenu, blokiranu ili nepodržanu od upravljačkog programa grafike.

**Rješenje:**

:::chromium
Otvorite `chrome://settings/system` (ili `edge://settings/system` u Edgeu) i uključite „Koristi ubrzanje grafike kad je dostupno“, zatim ponovno pokrenite preglednik. Ako je već uključeno, provjerite `chrome://gpu` za stanje WebGL-a i ažurirajte upravljački program grafike.
:::

:::firefox
Otvorite `about:support` i pogledajte Graphics, WebGL. Ako je blokiran, ažurirajte upravljački program grafike. U `about:config` `webgl.disabled` mora biti `false`.
:::

:::safari
WebGL je uvijek uključen u aktualnom Safariju. Ažurirajte macOS (Safari se ažurira s njim). Ako i dalje ne uspijeva, pokušajte Chrome ili Firefox na istom Macu da isključite grafički hardver.
:::

Udaljene radne površine i neki virtualni strojevi nemaju WebGL. Probajte na samom računalu.

### „Jezgra čvrstog tijela nije učitana: …“

**Uzrok:** programu geometrije (WebAssembly program) nije se moglo dohvatiti ili pokrenuti. Obično je veza prekinuta dok se aplikacija učitavala, WebAssembly je isključen pravilima tvrtke ili postavkom zaštite preglednika, ili je preglednik vrlo star.

**Rješenje:** ponovno učitajte stranicu dok ste na mreži. Ako i dalje ne uspijeva, isprobajte drugi aktualni preglednik. U Firefoxu `javascript.options.wasm` u `about:config` mora biti `true`. Izvan mreže aplikacija i njezina jezgra učitavaju se samo ako je traka aplikacije rekla **Spremno za offline** prije nego ste izgubili vezu (kliknite {{ui:Spremi za offline}} dok ste na mreži; vidi [Rad izvan mreže](common:offline)).

### Gumb za offline kaže „Nije moguće spremiti“ ili „Offline nije dostupno“

**Nije moguće spremiti**: neke datoteke se nisu preuzele. Kliknite ga za ponovni pokušaj dok ste na mreži; spora ili mjerena veza može trebati drugi pokušaj. **Offline nije dostupno**: ovaj prozor preglednika ne može čuvati kopiju za rad izvan mreže (privatni prozori i neka upravljana računala to blokiraju). Koristite obični prozor ili ostavite karticu otvorenom.

### PartCraft je izvan mreže, ali zastario

Kliknite **Spremno za offline** dok ste na mreži i odaberite {{ui:Spremi ponovno (preuzmi najnoviju verziju)}}.

### „Provlačenje: još nije izrađeno. Treba mu egzaktna jezgra, …“

Puna poruka glasi „<Naziv>: još nije izrađeno. Treba mu egzaktna jezgra, koju ova verzija PartCrafta nema. Pomoć › Što još nije izrađeno kaže što učiniti umjesto toga.“ Vidite je kad odaberete Provlačenje, Loft, Rebro, prirubnicu lima, značajku plohe, Kombiniraj, Pomakni tijelo, Skaliraj tijelo ili Uzorak putanje, a i za ostale stvari koje samo egzaktna jezgra može. Ništa nije krivo s vašim preglednikom ili dijelom: ova verzija PartCrafta izrađuje svaki dio jezgrom mreže. Vidi [Što još nije izrađeno](topic:not-built-yet) za ono što treba učiniti umjesto toga, i [Jezgra mreže](topic:solid-kernels).

### „Učitavanje jezgre čvrstog tijela…“ ne nestaje

Pričekajte malo na sporoj vezi: jezgra i 3D biblioteka preuzimaju se prvi put. Zatim ponovno učitajte. Ako sama stranica prikazuje pogrešku, vidi gore.

## Ništa se ne događa kad pritisnem tipku

- Tipke ne rade dok je kursor u polju u ploči. Kliknite u 3D prikaz ili pritisnite {{key:Esc}} nakon upisivanja (ili {{key:Tab}} za izlaz).
- Tipke sa strelicama i {{key:Plus}}/{{key:Minus}} okreću i zumiraju prikaz tek nakon što kliknete u prikaz.
- Otvoren je dijaloški okvir: prvo odgovorite na njega.
- U skici je {{key:F}} alat Zaobljenje, a ne Prilagodi. Koristite gumb {{ui:Prilagodi}}.

## Gumb na alatnoj traci je zasivljen

- Gumbi značajki su zasivljeni dok je skica otvorena. Najprije zatvorite skicu.
- Alati za skicu rade samo unutar skice.
- {{ui:Poništi}} i {{ui:Ponovi}} su zasivljeni kad nema što poništiti ili ponoviti.
- {{ui:Sklop}} treba dio s tijelom. {{ui:Spoj}} treba dva dijela u sklopu. {{ui:Uredi dio}} treba odabran dio.
- {{ui:STEP AP242 (egzaktno tijelo)}} i {{ui:STEP AP214 (egzaktno tijelo)}} zasivljeni su u sklopu: izvezite svaki dio. Drugi program odbija egzaktnu datoteku: pokušajte {{ui:STEP AP214 (egzaktno tijelo)}}, zatim {{ui:STEP (stranični, mrežna jezgra)}}, i javite nam preko {{ui:Pomoć}} › {{ui:Prijavi problem}}.
- {{ui:Provlačenje}}, {{ui:Loft}} i druge značajke koje traže egzaktnu jezgru nisu zasivljene: ostaju klikabilne, njihovi savjeti završavaju s „još nije izrađeno (treba egzaktna jezgra)“, a klik na jednu to kaže u statusnoj traci. Vidi [Što još nije izrađeno](topic:not-built-yet).
- {{ui:Crtež}} treba dio s tijelom i zasivljen je dok je skica otvorena.
- Stavke {{ui:Izvoz}} zasivljene su u sklopu: sklopovi se još ne mogu izvoziti. Zatvorite sklop ili uredite dio da biste izvezli.

## Problemi sa skicom

### Skica ne dopušta dodavanje relacije

„Nijedna relacija ne odgovara ovom odabiru. Odaberite jednu ili dvije stavke (Shift+klik dodaje).“ Relacija traži drugačiji odabir. Vidi [Relacije i dimenzije skice](topic:sketch-relations) za ono što treba svaka.

### „Prekomjerno određeno: … ne mogu se sve ispuniti. Poništite ili izbrišite jedno od njih.“

**Uzrok:** nova relacija ili dimenzija proturječi onima koje već postoje. Skica se nije pomaknula.

**Rješenje:** {{key:Mod+Z}}, ili izbrišite jednu od crvenih stavki na popisu desne ploče (odaberite **Izbriši** pored nje).

### „Prekomjerno određeno: … je već podrazumijevano. Izbrišite ga.“

**Uzrok:** relacija ništa ne dodaje: druge je već nameću (na primjer Paralelno na dvije stranice pravokutnika, ili dimenzija koja je već fiksirana). U ovoj verziji nema vođenih dimenzija.

**Rješenje:** izbrišite je. Značajka se svejedno izrađuje, uz upozorenje.

### „Te stavke ne mogu se zajedno dimenzionirati.“

Kliknuli ste, na primjer, točku i kružnicu. Umjesto toga dimenzionirajte do središnje točke kružnice.

### „Zaobljenje treba kut u kojem se točno dva pravca spajaju.“ / „Taj polumjer je prevelik za ove pravce.“

Kliknite točno na kutnu točku dviju čvrstih linija. Koristite manji polumjer od onog koji dopušta kraća linija.

### Geometrija skoči natrag kad je povučem

Povlačenje bi prekinulo relaciju ili dimenziju, pa je PartCraft vraća. Mogu se pomicati samo plava (nedovoljno određena) geometrija.

### „Ova skica se ne može otvoriti: Treba Extrude2, koji ne uspijeva.“

Skica leži na plohi značajke koja nije izrađena. Najprije popravite tu značajku, ili je uključite, ili idite naprijed u povijesti.

## Problemi sa značajkama

| Poruka | Uzrok | Rješenje |
|---|---|---|
| „Najprije napravite skicu: odaberite ravninu, Skica, nacrtajte zatvoreni profil, Izlaz.“ | Nema nekorištene skice s krivuljama, i nijedna nije odabrana | Nacrtajte skicu, ili odaberite skicu za korištenje u povijesti |
| „Skica nema zatvoreni profil za izvlačenje.“ (ili „za rotiranje“) | Nema zatvorene petlje od čvrstih linija | Zatvorite praznine; vratite konstrukcijske linije s {{key:Q}} |
| „Profil je otvoren: kraj na (x, y) nije ni s čim spojen.“ | Praznina u toj točki | Otvorite skicu i povucite kraj na susjeda da se privuče |
| „Profil se grana na (x, y): više od dva kraja se susreću tamo.“ | Tri ili više linija se susreću u jednoj točki | Izbrišite višak linije ili je prebacite u konstrukcijsku |
| „Zatvorena petlja treba najmanje tri strane ili krivulju.“ | Dvije linije unatrag i naprijed | Ponovno nacrtajte petlju |
| „Kroz sve je za izreze. Za izbočenje upotrijebite dubinu.“ | Izbočenje postavljeno na Kroz sve | Postavite Kraj na Slijepo ili Srednja ravnina |
| „Na toj strani skice nema što izrezati. Pokušajte drugi smjer.“ | Rez pokazuje od materijala | Označite Obrnuti smjer |
| „Nema što izrezati još.“ / „Nema što bušiti još.“ | Prije ove značajke nema tijela | Prvo napravite izbočenje ili pomaknite značajku niže |
| „Nacrtajte središnju liniju (konstrukcijsku liniju) u skici oko koje se rotira.“ | Rotiranje bez osi | Dodajte središnju liniju ili odaberite liniju u Osi |
| „Profil siječe os. Držite ga s jedne strane središnje linije.“ | Profil s obje strane osi | Ponovno nacrtajte polovicu profila |
| „Stavite točke skice gdje idu rupe (alat Točka), zatim napravite rupu.“ | Nema slobodnih točaka u skici | Dodajte točke s {{key:P}} |
| „Upuštanje mora biti šire od rupe.“ | Ø upuštanja nije veći od Promjera | Napravite upuštanje šire |
| „Upuštanje mora biti plići od rupe.“ | Upuštanje dublje od slijepe rupe | Napravite ga plićim ili rupu dubljom |
| „Odaberite značajke za kopiranje.“ | Uzorak ili zrcaljenje bez označene stavke | Označite značajku pod Značajke za kopiranje |
| „Extrude2 nema tijelo za kopiranje.“ | Kopirana značajka nije uspjela ili je isključena | Popravite je ili je uključite |
| „Treba Sketch3, koji ne uspijeva.“ | Značajka o kojoj ovisi nije izrađena | Popravite značajku koju navodi |
| „Ploha na kojoj sjedi nestala je (Extrude1 nije izrađen).“ | Ploha skice više ne postoji | Popravite tu značajku, ili izbrišite skicu i ponovno skicirajte |
| „Poslije ovoga od dijela ništa ne ostaje.“ | Rez je uklonio sav materijal | Provjerite veličinu i smjer reza |
| „Jezgra čvrstog tijela ovo nije mogla izraditi (…).“ ili „Jezgra čvrstog tijela ovo nije mogla spojiti s tijelom.“ | Jezgra je odbila geometriju | Poništite, ili malo promijenite veličine; plohe koje se točno dodiruju mogu to uzrokovati |
| „Provlačenje: još nije izrađeno. Treba mu egzaktna jezgra, koju ova verzija PartCrafta nema.“ (također Loft, Rebro i ostali) | Značajka napravljena u ranijoj verziji koju može izraditi samo egzaktna jezgra. Ostaje u povijesti i sprema se natrag nepromijenjena | Isključite je ili izbrišite; vidi [Što još nije izrađeno](topic:not-built-yet) za ono što treba učiniti umjesto toga |
| „Zaobljenje od 5 mm ne stane ovdje (…).“ / „Skošenje od 2 mm …“ | Veličina je prevelika za plohu uz rub, ili se kut ne može zaobliti | Manja veličina ili manje bridova po značajki |
| „Zaobljenje: u ovoj verziji samo ravni bridovi između dviju ravnih ploha (izrađuje ih jezgra mreže). Zaobljite ili skosite zakrivljene bridove u skici.“ (također Skošenje) | Odabrani brid je okrugao, poput ruba rupe, ili leži na zakrivljenoj plohi | {{ui:Odaberi bridove}} i uklonite ga; zaobljite ili skosite taj kut u skici umjesto toga |
| „Zaobljenje čiji se polumjer mijenja duž brida: još nije izrađeno (treba egzaktna jezgra). Zadajte jedan polumjer.“ | Označeno je **Promjenjivi polumjer** | Odznačite ga i zadajte jedan polumjer |
| „Zaobljenje jezgrom mreže: gdje se zaobljeni bridovi susreću, skošeni su, a ne stopljeni.“ (⚠, upozorenje) | Odabrani bridovi se susreću u kutu; zaobljenja se tamo susreću u oštrom prijelazu | Ništa za popraviti: dio je izrađen. Zaobljujte manje bridova ako prijelaz je bitan |
| „Brid koji zaobljuje nestao je: brid između Extrude1 i Cut2.“ | Ranija promjena uklonila je brid | {{ui:Odaberi bridove}}, uklonite crveni brid, odaberite novi |
| „Odaberite bridove u prikazu, zatim ih dodajte.“ | Zaobljenje ili skošenje nema bridove | {{ui:Odaberi bridove}} |
| „Odaberite plohe za uklanjanje (otvoreno), zatim ljuska.“ | Ljuska nema otvorenih ploha | {{ui:Odaberi plohe}} |
| „Ljuska se nije mogla izraditi s ovom debljinom (…).“ | Stijenka je deblja od tankog dijela modela ili polumjera zaobljenja | Tanja stijenka ili veći zaobljenja |
| „Ljuska: u ovoj verziji otvara samo ravne plohe (izrađuje ih jezgra mreže).“ | Otvorena ploha je zakrivljena | {{ui:Odaberi plohe}} i uklonite je; otvorite samo ravne plohe |
| „Nagib: u ovoj verziji samo ravne plohe (izrađuje ih jezgra mreže).“ | Nagnuta ploha je valjak, stožac ili slobodna ploha | Uklonite je; nagnite samo ravne plohe |
| „Ploha koju otvara nestala je (…).“ | Ranija promjena uklonila je plohu | Ponovno {{ui:Odaberi plohe}} |
| „Zaobljenje1 mijenja bridove ili stijenke tijela; ne može se kopirati. …“ | Uzorak ili zrcaljenje kopira zaobljenje, skošenje ili ljusku | Odznačite je; prvo uzorkujte izreze, zatim zaobljenje |
| „Ovo sjedi na plohi koju može pronaći samo egzaktna jezgra: u ovoj verziji još nije izrađeno.“ | Skica na plohi koju jezgra mreže ne može naći, poput one napravljene u ranijoj verziji | Skicirajte na osnovnoj ravnini ili ravnoj plohi izvlačenja i pozicionirajte je dimenzijama |
| „Koristi plohu ili brid tijela, koje može pronaći samo egzaktna jezgra: u ovoj verziji još nije izrađeno.“ | Referentna ravnina, os ili točka na plohi ili bridu tijela | Napravite je od osnovnih ravnina, točaka skice ili koordinata |
| „Izvlačenje do plohe, sljedeće plohe ili vrha: još nije izrađeno (treba egzaktna jezgra).“ / „Sužavanje: još nije izrađeno (treba egzaktna jezgra).“ | Uvjet kraja ili sužavanje koje gradi samo egzaktna jezgra | Upotrijebite dubinu Slijepo ili Srednja ravnina koju izmjerite; ostavite Sužavanje na 0 |

## Problemi s odabirom

- „Ta ploha je zakrivljena. Odaberite ravnu plohu ili ravninu za skiciranje.“ Skice trebaju ravnu plohu. Skicirajte na osnovnoj ravnini i pozicionirajte skicu dimenzijama.
- Ploha kaže „Fiksirano gdje je odabrano“: nije nastala od ruba skice (na primjer ploha kopije uzorka), pa skica na njoj ostaje na mjestu kad se dio promijeni.
- Bridove je teško pogoditi: uvećajte. Brid ima prednost pred plohom uz njega kad je pokazivač točno na njemu.

## Problemi s datotekama

| Poruka | Rješenje |
|---|---|
| 'PartCraft otvara vlastite .partcraft.json datoteke, izvoze iz CadCraft makroa za SolidWorks (.cadcraft-sw.json) i STEP datoteke. "bracket.igs" nije nijedna od njih.' | Prepoznate su samo te datoteke (i STL, OBJ i 3MF mreže te `.3dm` datoteke) |
| „"part.stp" nije STEP datoteka (ne počinje s ISO-10303-21).“ | Datoteka nije STEP tekst |
| „Ta STEP datoteka je prevelika (preko 60 MB) za uvoz ovdje.“ | Pojednostavnite je u izvoru |
| „Ta datoteka je prevelika da bi bila PartCraft dio.“ za vaš spremljeni dio | Veliki STEP čvrsti dio uvezen u ranijoj verziji učinio je datoteku dijela većom od 50 MB. Upotrijebite raniju kopiju bez njega |
| „Ta datoteka je prevelika da bi bila PartCraft dio.“ | Datoteka je veća od 50 MB; nije PartCraft datoteka |
| „Ovo nije PartCraft datoteka (nije JSON).“ / „Ovo nije PartCraft datoteka.“ | Datoteka je oštećena ili pripada drugom programu |
| „Ovu datoteku je spremio noviji PartCraft (verzija datoteke …); ova čita verziju …“ | Otvorite je u novijem PartCraftu |
| „Extrude2: dubina je neispravna.“ (ili druga vrijednost) | Datoteka je ručno uređena ili oštećena. Upotrijebite raniju kopiju |
| Umetanje u sklopu kaže „Part1.partcraft.json nema tijelo za umetanje.“ | Datoteka dijela nema tijelo. Otvorite je, izradite tijelo, spremite i ponovno umetnite |

**Moja spremljena datoteka nije tamo gdje sam očekivao.** Spremanje je preuzimanje: pogledajte mapu preuzimanja u pregledniku, ili otvorite popis preuzimanja s alatne trake preglednika. Vidi [Gdje idu vaše datoteke](common:your-files).

**Otvorio sam dio, ali sklop je još na zaslonu.** Dio se učitao iza sklopa. Odaberite {{ui:Zatvori}} da zatvorite sklop i vidite dio. Zatvorite sklopove prije otvaranja datoteka dijelova.

## Problemi s crtežima

| Poruka | Rješenje |
|---|---|
| „Prvo izradite tijelo, zatim napravite njegov crtež.“ | Najprije izradite dio |
| „Nema mjesta na listu za: detalj. Napravite detalj manjim ili izostavite pogled.“ | Manji **Polumjer detalja** ili **Mjerilo detalja**, ili uklonite presjek |
| „Detalj se uzima iz pogleda sprijeda, odozgo, zdesna ili presjeka.“ | Kliknite na jedan od tih pogleda |
| „Kliknite na jedan od pogleda.“ | Klik je bio na praznom papiru |
| „Položaj treba barem jednu referentnu točku.“ i druge poruke okvira | Postavite reference koje ploča traži ili odaberite drugu karakteristiku |
| „Pogledi crteža nisu se mogli napraviti: …“ | Poništite posljednju promjenu. Ako se ponavlja, spremite, ponovno učitajte i otvorite dio |

## Problemi sa sklopom

| Poruka | Rješenje |
|---|---|
| „Prvo izradite tijelo, zatim ga stavite u sklop.“ | Dio još nema tijelo |
| „Najprije umetnite drugi dio (Dodaj kopiju, Umetni ili Uredi › Dupliciraj).“ | Spoj treba dva dijela |
| „Odaberite plohu na drugom dijelu.“ | Obje plohe spoja moraju biti na različitim dijelovima |
| „Ta ploha je zakrivljena. Odaberite ravnu plohu …“ | Spojevi počinju od ravnih ploha. Zatim upotrijebite **Centriraj na** za rupu ili os rotiranja |
| „Bracket2 nije spojen s uzemljenim dijelom, pa ostaje gdje je stavljen.“ | Dodajte spoj od njega do dijela koji je postavljen |
| „Revolute3 zatvara petlju koja se ne može zatvoriti: promašena je za 2.000 mm. Provjerite plohe, pomake i granice spojeva petlje.“ | Dijelovi se ne mogu svi sastati: provjerite duljine, plohe koje svaki spoj koristi, pomake (dijelovi složeni plohom na plohu moraju se slagati po dubini) i granice; ili uklonite jedan spoj petlje |
| „Ploha koju ovaj spoj koristi nestala je iz Bracket.“ / „Os koju ovaj spoj koristi nestala je iz Bracketa.“ | Dio je uređen. Uklonite spoj i ponovno ga napravite |
| „Os ide duž plohe, pa ne može postaviti središte spoja.“ | Odaberite os koja siječe plohu, ili „Ishodište plohe“ |
| „Sklop zadržava barem jedan dio. Zatvorite ga umjesto toga.“ | Upotrijebite {{ui:Zatvori}} |

**Dijelovi su spojeni, ali na krivom mjestu.** Postavite **Centriraj na** za obje strane spoja na rupe ili osi rotiranja koje se trebaju poravnati, zatim podesite **Kut (°)** i **Pomak (mm)**.

## Sporo je

- Postavite **Krivulje** na Normalno ili Grubo dok modelirate; prije izvoza prebacite na Fino.
- Veliki brojevi uzoraka (stotine kopija) dugo se ponovno izrađuju pri svakoj promjeni. Isključite uzorak dok radite na drugim značajkama.
- Sudar i provjera gibanja uspoređuju svaki par dijelova; veliki sklopovi traju dulje.
- Zatvorite druge teške kartice. PartCraft radi na procesoru i grafici vašeg računala.

## Još uvijek ne uspijeva

Najprije spremite datoteku ({{key:Mod+S}}), zatim ponovno učitajte stranicu i otvorite je. Ako značajka i dalje ne uspijeva, odaberite je, pročitajte poruku i pokušajte {{key:Mod+Z}} do zadnjeg dobrog stanja.
