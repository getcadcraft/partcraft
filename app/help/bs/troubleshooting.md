---
title: Rješavanje problema
summary: Problemi na koje možete naići u PartCraft-u, od aplikacije koja ne starta do elemenata koji ne uspijevaju, skica koje se ne rješavaju, datoteka koje se ne otvaraju i spojeva koji se ponašaju čudno, sa porukom koju vidite i rješenjem.
keywords: problem, greška, pomoć, ne radi, ne uspijeva, rušenje, prazno, webgl, webassembly, jezgra, nije napravljeno, prekomjerno definisano, otvoreni profil, ne može se otvoriti, ništa se ne dešava, pogrešan smjer, sporo
from: 7728542c
---

Kad nešto ne radi, prvo pročitajte **statusnu traku** pri dnu: PartCraft tamo kaže zašto je odbio ili šta očekuje dalje. Element koji ne uspijeva takođe prikazuje svoju poruku na vrhu desnog panela i kad prijeđete mišem preko njegovog reda u historiji.

## Aplikacija ne startuje

### „Ovaj pregledač ne može prikazati 3D (WebGL je isključen ili nedostaje), pa PartCraft ovdje ne može raditi.“

**Uzrok:** pregledač ima 3D grafiku (WebGL) isključenu, blokiranu ili nepodržanu od strane drajvera grafike.

**Rješenje:**

:::chromium
Otvorite `chrome://settings/system` (ili `edge://settings/system` u Edge-u) i uključite „Koristi hardversko ubrzanje kad je dostupno“, zatim ponovo pokrenite pregledač. Ako je uključeno, provjerite `chrome://gpu` za stanje WebGL-a i ažurirajte drajver grafike.
:::

:::firefox
Otvorite `about:support` i pogledajte Grafika, WebGL. Ako je blokiran, ažurirajte drajver grafike. U `about:config`, `webgl.disabled` mora biti `false`.
:::

:::safari
WebGL je uvijek uključen u aktuelnom Safari-ju. Ažurirajte macOS (Safari se ažurira s njim). Ako i dalje ne radi, probajte Chrome ili Firefox na istom Mac-u da isključite grafički hardver.
:::

Udaljene radne površi i neke virtuelne mašine nemaju WebGL. Probajte na samom računaru.

### „Jezgra čvrstog tijela nije učitana: …“

**Uzrok:** jezgra geometrije (WebAssembly program) nije mogla biti preuzeta ili pokrenuta. Obično je veza prekinuta dok se aplikacija učitavala, WebAssembly je isključen pravilom kompanije ili postavkom zaštite pregledača, ili je pregledač veoma star.

**Rješenje:** ponovo učitajte stranicu dok ste na mreži. Ako i dalje ne uspijeva, probajte drugi aktuelni pregledač. U Firefox-u `javascript.options.wasm` u `about:config` mora biti `true`. Van mreže se aplikacija i njena jezgra učitavaju samo ako je traka aplikacije pokazivala **Spremno za rad van mreže** prije nego što ste izgubili vezu ({{ui:Spasi za rad van mreže}} dok ste na mreži; vidi [Rad van mreže](common:offline)).

### Dugme za rad van mreže kaže „Nije moguće spasiti“ ili „Rad van mreže nije dostupan“

**Nije moguće spasiti**: neke datoteke se nisu preuzele. Kliknite ponovo dok ste na mreži; spora ili mjerena veza može trebati drugi pokušaj. **Rad van mreže nije dostupan**: ovaj prozor pregledača ne može sačuvati kopiju za rad van mreže (privatni prozori i neki upravljani računari to blokiraju). Koristite običan prozor ili ostavite karticu otvorenom.

### PartCraft je van mreže, ali nije ažuran

Kliknite **Spremno za rad van mreže** dok ste na mreži i izaberite {{ui:Spasi ponovo (preuzmi najnoviju verziju)}}.

### „Provlačenje: još nije napravljeno. Potrebna mu je tačna jezgra, koju ova verzija PartCraft-a nema …“

Puna poruka glasi: „<Naziv>: još nije napravljeno. Potrebna mu je tačna jezgra, koju ova verzija PartCraft-a nema. Pomoć › Šta još nije napravljeno kaže šta raditi umjesto toga.“ Vidite je kad izaberete {{ui:Provlačenje}}, Prelaz, Rebro, prirubnicu lima, površinski element, Spajanje, Pomjeri tijelo, Skaliraj tijelo ili Obrazac po putanji, i za ostalo što traži samo tačnu jezgru. Ništa nije pogrešno sa vašim pregledačem ili dijelom: ova verzija PartCraft-a gradi svaki dio jezgrom mreže. Vidi [Šta još nije napravljeno](topic:not-built-yet) šta raditi umjesto toga i [Jezgra mreže](topic:solid-kernels).

### „Učitavanje jezgre čvrstog tijela…“ nikad ne nestaje

Sačekajte malo na sporoj vezi: jezgra i 3D biblioteka se prvi put preuzimaju. Zatim ponovo učitajte. Ako sama stranica prikazuje grešku, vidi gore.

## Ništa se ne dešava kad pritisnem tipku

- Tipke ne rade dok je kursor u polju na panelu. Kliknite u 3D prikaz ili pritisnite {{key:Esc}} nakon kucanja (ili {{key:Tab}} da izađete).
- Strelice i {{key:Plus}}/{{key:Minus}} okreću i zumiraju prikaz tek nakon što kliknete u prikaz.
- Otvoren je dijalog: prvo odgovorite na njega.
- U skici, {{key:F}} je alat Zaobljenje, a ne Uklopi. Koristite dugme {{ui:Uklopi}}.

## Dugme na traci sa alatima je zasivljeno

- Dugmad elemenata su zasivljena dok je skica otvorena. Prvo zatvorite skicu.
- Alati za skicu rade samo unutar skice.
- {{ui:Poništi}} i {{ui:Ponovi}} su zasivljeni kad nema šta poništiti ili ponoviti.
- {{ui:Sklop}} treba dio sa čvrstim tijelom. {{ui:Spoj}} treba dva dijela u sklopu. {{ui:Uredi dio}} treba izabran dio.
- {{ui:STEP AP242 (tačno čvrsto tijelo)}} i {{ui:STEP AP214 (tačno čvrsto tijelo)}} su zasivljeni u sklopu: izvezite svaki dio. Drugi program odbija tačnu datoteku: probajte {{ui:STEP AP214 (tačno čvrsto tijelo)}}, zatim {{ui:STEP (poligonalni, mrežni kernel)}}, i javite nam preko {{ui:Pomoć}} › {{ui:Prijavi problem}}.
- {{ui:Provlačenje}}, {{ui:Prelaz}} i ostali elementi koji traže tačnu jezgru nisu zasivljeni: ostaju klikabilni, njihovi opisi se završavaju sa „još nije napravljeno (treba tačna jezgra)“, a klik na jedan to kaže na statusnoj traci. Vidi [Šta još nije napravljeno](topic:not-built-yet).
- {{ui:Crtež}} treba dio sa čvrstim tijelom i zasivljen je dok je skica otvorena.
- Stavke {{ui:Izvoz}} su zasivljene u sklopu: sklopovi se još ne mogu izvoziti. Zatvorite ga, ili uredite dio, da izvezete.

## Problemi sa skicom

### Skica ne dozvoljava da dodam vezu

„Nijedna veza ne odgovara ovom izboru. Izaberite jednu ili dvije stavke (Shift+klik dodaje).“ Veza traži drugačiji izbor. Vidi [Veze i kote skice](topic:sketch-relations) za to što svaka traži.

### „Prekomjerno definisano: … ne mogu se sve ispuniti. Poništite ili izbrišite jedno od njih.“

**Uzrok:** nova veza ili kota se kosi sa onima koje već postoje. Skica se nije pomjerila.

**Rješenje:** {{key:Mod+Z}}, ili izbrišite jednu od crvenih stavki na listi desnog panela (izaberite **Izbriši** pored nje).

### „Prekomjerno definisano: … je već implicirano. Izbrišite ga.“

**Uzrok:** veza ništa ne dodaje: druge je već nameću (na primjer Paralelno na dvije strane pravougaonika, ili kota koja je već fiksirana). U ovoj verziji nema vođenih kota.

**Rješenje:** izbrišite je. Element se ipak gradi, uz upozorenje.

### „Te stavke se ne mogu zajedno kotirati.“

Kliknuli ste, na primjer, tačku i krug. Kotirajte do centralne tačke kruga umjesto toga.

### „Zaobljenje treba ugao gdje se tačno dvije linije sastaju.“ / „Taj radijus je prevelik za ove linije.“

Kliknite tačno na tačku ugla dvije pune linije. Koristite manji radijus od onog koji dozvoljava kraća linija.

### Geometrija skoči nazad kad je prevlačim

Prevlačenje bi prekinulo vezu ili kotu, pa je PartCraft vraća. Samo plava (nedovoljno definisana) geometrija se može pomjerati.

### „Ova skica se ne može otvoriti: Treba Extrude2, koji ne uspijeva.“

Skica leži na površi elementa koji nije napravljen. Prvo popravite taj element, ili ga uključite, ili pređite naprijed.

## Problemi sa elementima

| Poruka | Uzrok | Rješenje |
|---|---|---|
| „Prvo napravite skicu: izaberite ravan, Skica, nacrtajte zatvoreni profil, Izađi.“ | Nema neiskorištene skice sa krivuljama, i nijedna nije izabrana | Nacrtajte skicu, ili izaberite skicu za korištenje u historiji |
| „Skica nema zatvoreni profil za izvlačenje.“ (ili „za rotiranje“) | Nema zatvorene petlje od punih linija | Zatvorite praznine; vratite konstrukcijske linije sa {{key:Q}} |
| „Profil je otvoren: kraj u (x, y) nije ničim spojen.“ | Praznina u toj tački | Otvorite skicu, prevucite kraj na susjeda da se prikači |
| „Profil se grana u (x, y): više od dva kraja se sastaju.“ | Tri ili više linija se sastaju u jednoj tački | Izbrišite višak linije ili je pretvorite u konstrukcijsku |
| „Zatvorena petlja treba najmanje tri strane ili krivu.“ | Dvije linije naprijed-nazad | Ponovo nacrtajte petlju |
| „Kroz sve je za rezove. Za izbočinu koristite dubinu.“ | Izbočina postavljena na Kroz sve | Postavite Kraj na Slijepo ili Srednja ravan |
| „Nema šta da se izreže sa te strane skice. Probajte drugi smjer.“ | Rez pokazuje od materijala | Označite Obrnuti smjer |
| „Nema šta da se izreže još.“ / „Nema šta da se buši još.“ | Nema čvrstog tijela prije ovog elementa | Prvo napravite izbočinu ili pomjerite element niže |
| „Nacrtajte središnju liniju (konstrukcijsku liniju) u skici oko koje ćete rotirati.“ | Rotiranje bez ose | Dodajte središnju liniju ili izaberite liniju u Osa |
| „Profil siječe osu. Držite ga sa jedne strane središnje linije.“ | Profil sa obje strane ose | Ponovo nacrtajte polovinu profila |
| „Postavite tačke skice gdje idu rupe (alat Tačka), zatim napravite rupu.“ | Nema slobodnih tačaka u skici | Dodajte tačke sa {{key:P}} |
| „Upuštanje mora biti šire od rupe.“ | Ø upuštanja nije veće od Prečnika | Napravite upuštanje šire |
| „Upuštanje mora biti plići od rupe.“ | Upuštanje dublje od slijepe rupe | Napravite ga plićim ili rupu dubljom |
| „Izaberite elemente za kopiranje.“ | Obrazac ili zrcaljenje bez označenog | Označite element pod Elementi za kopiranje |
| „Izvlačenje2 nema čvrsto tijelo za kopiranje.“ | Kopirani element ne uspijeva ili je isključen | Popravite ga ili uključite |
| „Treba Skica3, koja ne uspijeva.“ | Element od kojeg zavisi nije napravljen | Popravite element koji se navodi |
| „Površ na kojoj stoji je nestala (Izvlačenje1 nije napravljen).“ | Površ skice više ne postoji | Popravite taj element, ili izbrišite skicu i ponovo skicirajte |
| „Nakon ovoga od dijela ništa nije ostalo.“ | Rez je uklonio sav materijal | Provjerite veličinu i smjer reza |
| „Jezgra čvrstog tijela ovo nije mogla napraviti (…).“ ili „Jezgra čvrstog tijela ovo nije mogla spojiti sa tijelom.“ | Jezgra je odbila geometriju | Poništite, ili malo promijenite veličine; površi koje se tačno dodiruju mogu to izazvati |
| „Provlačenje: još nije napravljeno. Potrebna mu je tačna jezgra, koju ova verzija PartCraft-a nema.“ (također Prelaz, Rebro i ostali) | Element napravljen u ranijoj verziji koji može izgraditi samo tačna jezgra. Ostaje u historiji i čuva se nepromijenjen | Isključite ili izbrišite; vidi [Šta još nije napravljeno](topic:not-built-yet) šta raditi umjesto toga |
| „Zaobljenje od 5 mm ne stane ovdje (…).“ / „Skošenje od 2 mm …“ | Veličina je prevelika za površ pored ivice, ili se ugao ne može zaobliti | Manja veličina ili manje ivica po elementu |
| „Zaobljenje: u ovoj verziji samo ravne ivice između dvije ravne površi (izrađuje jezgra mreže). Zaobljujte ili skosite zakrivljene ivice u skici.“ (također Skošenje) | Izabrana ivica je zaobljena, kao obod rupe, ili leži na zakrivljenoj površi | {{ui:Odaberi ivice}} i uklonite je; zaobljite ili skosite taj ugao u skici umjesto toga |
| „Zaobljenje čiji se radijus mijenja duž ivice: još nije napravljeno (treba tačna jezgra). Dajte mu jedan radijus.“ | Označeno je **Promjenljivi radijus** | Odznačite i unesite jedan radijus |
| „Zaobljenje: gdje se zaobljene ivice sastaju, one su pokošene, a ne spojene.“ (⚠, upozorenje) | Izabrane ivice se sastaju u uglu; zaobljenja se tamo sastaju u oštar nabor | Ništa za popraviti: dio je napravljen. Zaobljujte manje ivica ako je nabor bitan |
| „Ivica koju zaobljuje je nestala: ivica između Izvlačenje1 i Rez2.“ | Ranija promjena je uklonila ivicu | {{ui:Odaberi ivice}}, uklonite crvenu ivicu, izaberite novu |
| „Odaberite ivice u prikazu, zatim ih dodajte.“ | Zaobljenje ili skošenje nema ivica | {{ui:Odaberi ivice}} |
| „Odaberite površi za uklanjanje (otvorene), zatim školjka.“ | Školjka nema otvorene površi | {{ui:Odaberi površi}} |
| „Školjka se nije mogla napraviti s ovom debljinom (…).“ | Zid je deblji od tankog dijela modela ili od radijusa zaobljenja | Tanji zid ili veća zaobljenja |
| „Školjka: u ovoj verziji otvara samo ravne površi (izrađuje jezgra mreže).“ | Otvorena površ je zakrivljena | {{ui:Odaberi površi}} i uklonite je; otvarajte samo ravne površi |
| „Nagib: u ovoj verziji samo ravne površi (izrađuje jezgra mreže).“ | Nagnuta površ je cilindar, konus ili slobodna površ | Uklonite je; nagibajte samo ravne površi |
| „Površ koju otvara je nestala (…).“ | Ranija promjena je uklonila površ | Ponovo {{ui:Odaberi površi}} |
| „Zaobljenje1 mijenja ivice ili zidove tijela; ne može se kopirati. …“ | Obrazac ili zrcaljenje kopira zaobljenje, skošenje ili školjku | Isključite ga; prvo napravite rezove, zatim zaobljenje |
| „Ona sjedi na površi koju može naći samo tačna jezgra: još nije napravljeno u ovoj verziji.“ | Skica na površi koju jezgra mreže ne može pronaći, kao ona napravljena u ranijoj verziji | Skicirajte na osnovnoj ravni ili ravnoj površi izvlačenja i pozicionirajte je kotama |
| „Koristi površ ili ivicu čvrstog tijela, koju može naći samo tačna jezgra: još nije napravljeno u ovoj verziji.“ | Referentna ravan, osa ili tačka na površi ili ivici čvrstog tijela | Napravite je od osnovnih ravni, tačaka skice ili koordinata |
| „Izvlačenje do površi, sljedeće površi ili vrha: još nije napravljeno (treba tačna jezgra).“ / „Suženje: još nije napravljeno (treba tačna jezgra).“ | Krajnji uslov ili suženje koje gradi samo tačna jezgra | Koristite dubinu Slijepo ili Srednja ravan koju izmjerite; ostavite Suženje na 0 |

## Problemi sa odabirom

- „Ta površ je zakrivljena. Izaberite ravnu površ ili ravan za skiciranje.“ Skice trebaju ravnu površ. Skicirajte na osnovnoj ravni i pozicionirajte skicu kotama umjesto toga.
- Površ piše „Fiksirano gdje je izabrano“: nije napravljena ivicom skice (na primjer površ kopije obrasca), pa skica na njoj ostaje na mjestu kad se dio promijeni.
- Ivice se teško pogađaju: uvećajte. Ivica pobjeđuje površ pored nje kad je pokazivač tačno na njoj.

## Problemi sa datotekama

| Poruka | Rješenje |
|---|---|
| „PartCraft otvara svoje .partcraft.json datoteke, izvoze iz CadCraft makroa za SolidWorks (.cadcraft-sw.json) i STEP datoteke. „bracket.igs“ nije nijedna od ovih.“ | Prepoznaju se samo te datoteke (i STL, OBJ i 3MF mreže te `.3dm` datoteke) |
| „part.stp“ nije STEP datoteka (ne počinje sa ISO-10303-21). | Datoteka nije STEP tekst |
| „Ta STEP datoteka je prevelika (preko 60 MB) za uvoz ovdje.“ | Pojednostavite je na izvoru |
| „Ta datoteka je prevelika da bi bila PartCraft dio.“ na vašem sačuvanom dijelu | Veliko STEP tijelo uvezeno u ranijoj verziji učinilo je datoteku dijela većom od 50 MB. Koristite raniju kopiju bez njega |
| „Ta datoteka je prevelika da bi bila PartCraft dio.“ | Datoteka je veća od 50 MB; nije PartCraft datoteka |
| „Ovo nije PartCraft datoteka (nije JSON).“ / „Ovo nije PartCraft datoteka.“ | Datoteka je oštećena ili pripada drugom programu |
| „Ovu datoteku je sačuvao noviji PartCraft (verzija datoteke …); ovaj čita verziju …“ | Otvorite je u novijem PartCraft-u |
| „Extrude2: dubina je loša.“ (ili druga vrijednost) | Datoteku je neko ručno mijenjao ili je oštećena. Koristite raniju kopiju |
| Umetanje u sklop kaže „Part1.partcraft.json nema čvrsto tijelo za umetanje.“ | Datoteka dijela nema čvrsto tijelo. Otvorite je, napravite tijelo, sačuvajte i ponovo umetnite |

**Moja sačuvana datoteka nije tamo gdje sam očekivao.** Čuvanje je preuzimanje: pogledajte u folderu preuzimanja pregledača ili otvorite listu preuzimanja sa alatne trake pregledača. Vidi [Gdje idu vaše datoteke](common:your-files).

**Otvorio sam dio, ali sklop je još na ekranu.** Dio se učitao iza sklopa. Izaberite {{ui:Zatvori}} da zatvorite sklop i vidite dio. Zatvorite sklopove prije otvaranja datoteka dijelova.

## Problemi sa crtežom

| Poruka | Rješenje |
|---|---|
| „Prvo napravite čvrsto tijelo, zatim njegov crtež.“ | Prvo napravite dio |
| „Nema mjesta na listu za: detalj. Napravite detalj manjim ili izbacite pogled.“ | Manji **Radijus detalja** ili **Razmjera detalja**, ili uklonite presjek |
| „Detalj se uzima sa pogleda sprijeda, odozgo, desno ili presjeka.“ | Kliknite na jedan od tih pogleda |
| „Kliknite na jedan od pogleda.“ | Klik je bio na praznom papiru |
| „Položaj treba bar jednu referentnu bazu.“ i druge poruke okvira | Postavite baze koje panel traži ili izaberite drugu karakteristiku |
| „Pogledi crteža nisu mogli biti napravljeni: …“ | Poništite posljednju promjenu. Ako se ponavlja, sačuvajte, ponovo učitajte i otvorite dio |

## Problemi sa sklopom

| Poruka | Rješenje |
|---|---|
| „Prvo napravite čvrsto tijelo, zatim ga stavite u sklop.“ | Dio još nema čvrsto tijelo |
| „Prvo umetnite drugi dio (Dodaj kopiju, Umetni ili Uredi › Dupliraj).“ | Spoj treba dva dijela |
| „Izaberite površ na drugom dijelu.“ | Obje površi spoja moraju biti na različitim dijelovima |
| „Ta površ je zakrivljena. Izaberite ravnu površ …“ | Spojevi počinju od ravnih površi. Zatim koristite **Centriraj na** za rupu ili osu rotacije |
| „Bracket2 nije spojen sa uzemljenim dijelom, pa ostaje gdje je stavljen.“ | Dodajte spoj od njega do dijela koji je postavljen |
| „Revolute3 zatvara petlju koja se ne može zatvoriti: van je za 2.000 mm. Provjerite površi, ofsete i granice spojeva u petlji.“ | Dijelovi se ne mogu svi sastati: provjerite dužine, površi koje svaki spoj koristi, ofsete (dijelovi naslagani površ na površ moraju se slagati po dubini) i granice; ili uklonite jedan spoj iz petlje |
| „Površ koju ovaj spoj koristi je nestala iz Bracket.“ / „Osa koju ovaj spoj koristi je nestala iz Bracket.“ | Dio je uređivan. Uklonite spoj i ponovo ga napravite |
| „Osa ide duž površi, pa ne može postaviti centar spoja.“ | Izaberite osu koja siječe površ, ili „Vlastito ishodište površi“ |
| „Sklop zadržava bar jedan dio. Zatvorite ga umjesto toga.“ | Koristite {{ui:Zatvori}} |

**Dijelovi su spojeni, ali na pogrešnom mjestu.** Postavite **Centriraj na** za obje strane spoja na rupe ili ose rotacije koje treba poravnati, zatim podesite **Ugao (°)** i **Ofset (mm)**.

## Sporo je

- Postavite **Krive** na Normalno ili Grubo dok modelirate; prebacite na Fino prije izvoza.
- Veliki brojevi kopija u obrascu (stotine) traju pri ponovnom gradnji pri svakoj promjeni. Isključite obrazac dok radite na drugim elementima.
- Sudari i provjera kretanja upoređuju svaki par dijelova; veliki sklopovi traju duže.
- Zatvorite druge teške kartice. PartCraft radi na procesoru i grafici vašeg računara.

## I dalje ne ide

Prvo sačuvajte datoteku ({{key:Mod+S}}), zatim ponovo učitajte stranicu i otvorite je. Ako element i dalje ne uspijeva, izaberite ga, pročitajte poruku i probajte {{key:Mod+Z}} do posljednjeg dobrog stanja.
