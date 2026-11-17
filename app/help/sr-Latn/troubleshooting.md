---
title: Rešavanje problema
summary: Problemi na koje možete naići u PartCraft-u, od toga da se aplikacija ne pokreće do neuspelih funkcija, skica koje se ne rešavaju, datoteka koje se ne otvaraju i spojeva koji se loše ponašaju, sa porukom koju vidite i rešenjem.
keywords: problem, greška, pomoć, ne radi, ne uspeva, pad, prazno, webgl, webassembly, kernel, nije izgrađeno, prekomerno definisano, otvoren profil, ne može da se otvori, ništa se ne dešava, pogrešan smer, sporo
from: 7728542c
---

Kad nešto ne radi, prvo pročitajte **statusnu traku** pri dnu: PartCraft tu kaže zašto je odbio ili šta očekuje sledeće. Neuspela funkcija prikazuje i svoju poruku na vrhu desnog panela i kad pređete preko njenog reda u istoriji.

## Aplikacija se ne pokreće

### „Ovaj pregledač ne može da prikaže 3D (WebGL je isključen ili nedostaje), pa PartCraft ne može da radi ovde.“

**Uzrok:** pregledač ima isključenu, blokiranu ili grafičkim drajverom nepodržanu 3D grafiku (WebGL).

**Rešenje:**

:::chromium
Otvorite `chrome://settings/system` (ili `edge://settings/system` u Edge-u) i uključite „Koristi ubrzanje grafike kad je dostupno“, pa ponovo pokrenite pregledač. Ako je to uključeno, proverite `chrome://gpu` za stanje WebGL-a i ažurirajte grafički drajver.
:::

:::firefox
Otvorite `about:support` i pogledajte Graphics, WebGL. Ako je blokirano, ažurirajte grafički drajver. U `about:config`, `webgl.disabled` mora biti `false`.
:::

:::safari
WebGL je uvek uključen u aktuelnom Safari-ju. Ažurirajte macOS (Safari se ažurira s njim). Ako i dalje ne radi, probajte Chrome ili Firefox na istom Mac-u da isključite grafički hardver.
:::

Udaljene radne površine i neke virtuelne mašine nemaju WebGL. Probajte na samom računaru.

### „Kernel čvrstog tela nije učitan: …“

**Uzrok:** geometrijski kernel (WebAssembly program) nije mogao biti preuzet ili pokrenut. Obično je veza prekinuta dok se aplikacija učitavala, WebAssembly je isključen pravilom kompanije ili podešavanjem bezbednosti pregledača, ili je pregledač veoma star.

**Rešenje:** ponovo učitajte stranicu dok ste na mreži. Ako i dalje ne uspeva, probajte drugi aktuelni pregledač. U Firefox-u, `javascript.options.wasm` u `about:config` mora biti `true`. Van mreže, aplikacija i njen kernel se učitavaju samo ako je traka aplikacije pre gubitka veze rekla **Spremno za rad van mreže** ({{ui:Sačuvaj za rad van mreže}} dok ste na mreži; pogledajte [Rad van mreže](common:offline)).

### Dugme za rad van mreže kaže „Nije moguće sačuvati“ ili „Rad van mreže nije dostupan“

**Nije moguće sačuvati**: neke datoteke nisu preuzete. Kliknite ga da probate ponovo dok ste na mreži; spora ili mobilna veza može zahtevati drugi pokušaj. **Rad van mreže nije dostupan**: ovaj prozor pregledača ne može da čuva kopiju za rad van mreže (privatni prozori i neki upravljani računari to blokiraju). Koristite običan prozor ili ostavite karticu otvorenom.

### PartCraft je van mreže, ali nije ažuran

Kliknite **Spremno za rad van mreže** dok ste na mreži i izaberite {{ui:Sačuvaj ponovo (preuzmi najnoviju verziju)}}.

### „Provlačenje: još nije izgrađeno. Potreban mu je tačan kernel, koji ova verzija PartCraft-a nema, …“

Ceo tekst poruke je „<Naziv>: još nije izgrađeno. Potreban mu je tačan kernel, koji ova verzija PartCraft-a nema. Pomoć › Šta još nije izgrađeno kaže šta da radite umesto toga.“ Vidite je kad izaberete Provlačenje, Prelaz, Rebro, prirubnicu lima, površinsku funkciju, Spajanje, Pomeranje tela, Skaliranje tela ili Obrazac putanje, i za druge stvari koje samo tačan kernel može da izgradi. Ništa nije pogrešno sa vašim pregledačem ili delom: ova verzija PartCraft-a gradi svaki deo mrežnim kernelom. Pogledajte [Šta još nije izgrađeno](topic:not-built-yet) za to šta da radite umesto toga, i [Mrežni kernel](topic:solid-kernels).

### „Učitavanje kernela čvrstog tela…“ nikad ne nestaje

Sačekajte malo na sporoj vezi: kernel i 3D biblioteka se prvi put preuzimaju. Zatim ponovo učitajte. Ako sama stranica prikazuje grešku, pogledajte gore.

## Ništa se ne dešava kad pritisnem taster

- Tasteri ne rade dok je kursor u polju u panelu. Kliknite u 3D prikaz ili pritisnite {{key:Esc}} posle kucanja (ili {{key:Tab}} da izađete).
- Strelice i {{key:Plus}}/{{key:Minus}} okreću i zumiraju prikaz tek kad kliknete u prikaz.
- Otvoren je dijalog: prvo odgovorite na njega.
- U skici, {{key:F}} je alat Zaobljenje, a ne Uklopi. Koristite dugme {{ui:Uklopi}}.

## Dugme na traci sa alatima je sivo

- Dugmad funkcija su siva dok je skica otvorena. Prvo zatvorite skicu.
- Alati za skicu rade samo unutar skice.
- {{ui:Opozovi}} i {{ui:Ponovi}} su sivi kad nema šta da se opozove ili ponovi.
- {{ui:Sklop}} traži deo sa čvrstim telom. {{ui:Spoj}} traži dva dela u sklopu. {{ui:Uredi deo}} traži izabran deo.
- {{ui:STEP AP242 (tačno čvrsto telo)}} i {{ui:STEP AP214 (tačno čvrsto telo)}} su sivi u sklopu: izvezite svaki deo. Drugi program odbija tačnu datoteku: probajte {{ui:STEP AP214 (tačno čvrsto telo)}}, pa {{ui:STEP (fasetirano, mrežno jezgro)}}, i javite nam preko {{ui:Pomoć}} › {{ui:Prijavi problem}}.
- {{ui:Provlačenje}}, {{ui:Prelaz}} i ostale funkcije koje traže tačan kernel nisu sive: ostaju klikabilne, njihovi opisi se završavaju sa „još nije izgrađeno (potreban je tačan kernel)“, a klik na jednu to kaže u statusnoj traci. Pogledajte [Šta još nije izgrađeno](topic:not-built-yet).
- {{ui:Crtež}} traži deo sa čvrstim telom i siv je dok je skica otvorena.
- Stavke {{ui:Izvezi}} su sive u sklopu: sklopovi se još ne mogu izvoziti. Zatvorite ga ili uredite deo da izvezete.

## Problemi sa skicom

### Skica ne dozvoljava da dodam odnos

„Nijedan odnos ne odgovara ovom izboru. Izaberite jednu ili dve stavke (Shift+klik dodaje).“ Odnos traži drugačiji izbor. Pogledajte [Odnosi i dimenzije skice](topic:sketch-relations) za to šta svaki traži.

### „Prekomerno definisano: … ne mogu sve da se ispune. Opozovite ili obrišite jednu od njih.“

**Uzrok:** novi odnos ili dimenzija protivreči onima koji već postoje. Skica se nije pomerila.

**Rešenje:** {{key:Mod+Z}}, ili obrišite jednu od crvenih stavki na listi u desnom panelu (izaberite **Izbriši** pored nje).

### „Prekomerno definisano: … je već implicirano. Obrišite ga.“

**Uzrok:** odnos ne dodaje ništa: drugi ga već nameću (na primer Paralelno na dve strane pravougaonika, ili dimenzija koja je već fiksirana). U ovoj verziji nema vođenih dimenzija.

**Rešenje:** obrišite ga. Deo se ipak gradi, uz upozorenje.

### „Te stavke ne mogu zajedno da se dimenzionišu.“

Kliknuli ste, na primer, tačku i krug. Umesto toga dimenzionišite do centralne tačke kruga.

### „Zaobljenje traži ugao gde se tačno dve linije sastaju.“ / „Taj radijus je prevelik za ove linije.“

Kliknite tačno na tačku ugla dve čvrste linije. Koristite manji radijus od onog koji dozvoljava kraća linija.

### Geometrija skoči nazad kad je prevlačim

Prevlačenje bi prekinulo odnos ili dimenziju, pa je PartCraft vraća. Pomera se samo plava (nedovoljno definisana) geometrija.

### „Ova skica ne može da se otvori: Potrebna je Extrude2, koja ne uspeva.“

Skica leži na površini funkcije koja nije izgrađena. Prvo popravite tu funkciju, ili je uključite, ili idite napred.

## Problemi sa funkcijama

| Poruka | Uzrok | Rešenje |
|---|---|---|
| „Prvo napravite skicu: izaberite ravan, Skica, nacrtajte zatvoreni profil, Izađi.“ | Nema neiskorišćene skice sa krivama, i nijedna nije izabrana | Nacrtajte skicu, ili izaberite skicu za korišćenje u istoriji |
| „Skica nema zatvoreni profil za izvlačenje.“ (ili „za rotiranje“) | Nema zatvorene petlje čvrstih linija | Zatvorite praznine; vratite konstrukcione linije sa {{key:Q}} |
| „Profil je otvoren: kraj na (x, y) nije ni za šta spojen.“ | Praznina u toj tački | Otvorite skicu, prevucite kraj na susedni da se privuče |
| „Profil se grana u (x, y): tu se sastaju više od dva kraja.“ | Tri ili više linija se sastaju u jednoj tački | Obrišite višak linije ili je prebacite na konstrukciju |
| „Zatvorena petlja traži najmanje tri strane ili krivu.“ | Dve linije napred-nazad | Ponovo nacrtajte petlju |
| „Kroz sve je za sečenja. Za izbočenje koristite dubinu.“ | Izbočenje podešeno na Kroz sve | Podesite Kraj na Slepo ili Srednja ravan |
| „Sa te strane skice nema šta da se iseče. Probajte suprotan smer.“ | Sečenje je okrenuto od materijala | Označite Obrnut smer |
| „Još nema šta da se iseče.“ / „Još nema šta da se buši.“ | Nema čvrstog tela pre ove funkcije | Prvo napravite izbočenje, ili pomerite funkciju niže |
| „Nacrtajte središnju liniju (konstrukcionu liniju) u skici oko koje ćete rotirati.“ | Rotiranje bez ose | Dodajte središnju liniju, ili izaberite liniju u Osa |
| „Profil seče osu. Držite ga na jednoj strani središnje linije.“ | Profil sa obe strane ose | Ponovo nacrtajte polovinu profila |
| „Postavite tačke skice gde idu rupe (alat Tačka), pa napravite rupu.“ | Nema slobodnih tačaka u skici | Dodajte tačke sa {{key:P}} |
| „Upuštanje mora biti šire od rupe.“ | Ø upuštanja nije veći od Prečnika | Napravite upuštanje šire |
| „Upuštanje mora biti plići od rupe.“ | Upuštanje dublje od slepe rupe | Napravite ga plićim, ili rupu dublju |
| „Izaberite funkcije za kopiranje.“ | Obrazac ili ogledalo bez ičega označenog | Označite funkciju pod Funkcije za kopiranje |
| „Extrude2 nema čvrsto telo za kopiranje.“ | Kopirana funkcija nije uspela ili je isključena | Popravite je ili je uključite |
| „Potrebna je Sketch3, koja ne uspeva.“ | Funkcija od koje zavisi nije izgrađena | Popravite funkciju koju navodi |
| „Površina na kojoj stoji nestala je (Extrude1 nije izgrađen).“ | Površina skice više ne postoji | Popravite tu funkciju, ili obrišite skicu i ponovo je nacrtajte |
| „Nakon ovoga od dela ništa nije ostalo.“ | Sečenje je uklonilo sav materijal | Proverite veličinu i smer sečenja |
| „Kernel čvrstog tela nije mogao da izgradi ovo (…).“ ili „Kernel čvrstog tela nije mogao da spoji ovo sa telom.“ | Kernel je odbio geometriju | Opozovite, ili malo promenite veličine; površine koje se tačno dodiruju mogu to izazvati |
| „Provlačenje: još nije izgrađeno. Potreban mu je tačan kernel, koji ova verzija PartCraft-a nema.“ (takođe Prelaz, Rebro i ostali) | Funkcija napravljena u ranijoj verziji koju može da izgradi samo tačan kernel. Ostaje u istoriji i čuva se nepromenjena | Isključite ili obrišite je; pogledajte [Šta još nije izgrađeno](topic:not-built-yet) za to šta da radite umesto toga |
| „5 mm zaobljenje ne staje ovde (…).“ / „2 mm skošenje …“ | Veličina je prevelika za površinu pored ivice, ili se ugao ne može zaobliti | Manja veličina, ili manje ivica po funkciji |
| „Zaobljenje: u ovoj verziji samo prave ivice između dve ravne površine (izrađuje ih mrežni kernel). Zaobljujte ili skosite zakrivljene ivice u skici.“ (takođe Skošenje) | Izabrana ivica je zaobljena, kao obod rupe, ili leži na zakrivljenoj površini | {{ui:Izaberi ivice}} i uklonite je; zaobljenje ili skošenje tog ugla uradite u skici |
| „Zaobljenje čiji se radijus menja duž ivice: još nije izgrađeno (potreban mu je tačan kernel). Dajte mu jedan radijus.“ | Označeno je **Promenljiv radijus** | Odznačite i zadajte jedan radijus |
| „Zaobljenje mrežnim kernelom: gde se zaobljene ivice sastaju, one se kose, a ne stapaju.“ (⚠, upozorenje) | Izabrane ivice se sastaju u uglu; zaobljenja se tu sastaju u oštar prelom | Ništa nije potrebno popraviti: deo je izgrađen. Zaobljujte manje ivica ako prelom je važan |
| „Ivica koju zaobljuje nestala je: ivica između Extrude1 i Cut2.“ | Ranija izmena je uklonila ivicu | {{ui:Izaberi ivice}}, uklonite crvenu ivicu, izaberite novu |
| „Izaberite ivice u prikazu, pa ih dodajte.“ | Zaobljenje ili skošenje nema ivica | {{ui:Izaberi ivice}} |
| „Izaberite površine za uklanjanje (otvorene), pa izdubite.“ | Ljuska nema otvorenih površina | {{ui:Izaberi površine}} |
| „Ljuska ne može da se napravi sa ovom debljinom (…).“ | Zid je deblji od tankog dela modela ili radijusa zaobljenja | Tanji zid, ili veća zaobljenja |
| „Ljuska: u ovoj verziji otvara samo ravne površine (izrađuje mrežni kernel).“ | Otvorena površina je zakrivljena | {{ui:Izaberi površine}} i uklonite je; otvarajte samo ravne površine |
| „Nagib: u ovoj verziji samo ravne površine (izrađuje mrežni kernel).“ | Naginjana površina je cilindar, konus ili slobodna površina | Uklonite je; naginjite samo ravne površine |
| „Površina koju otvara nestala je (…).“ | Ranija izmena je uklonila površinu | Ponovo {{ui:Izaberi površine}} |
| „Fillet1 menja ivice ili zidove tela; ne može da se kopira. …“ | Obrazac ili ogledalo kopira zaobljenje, skošenje ili ljusku | Odznačite; prvo uradite obrazac sečenja, pa zaobljenje |
| „Ovo sedi na površini koju može da nađe samo tačan kernel: još nije izgrađeno u ovoj verziji.“ | Skica na površini koju mrežni kernel ne može da nađe, kao ona napravljena u ranijoj verziji | Nacrtajte na osnovnoj ravni ili na ravnoj površini izvlačenja, pa je postavite dimenzijama |
| „Koristi površinu ili ivicu čvrstog tela, koju može da nađe samo tačan kernel: još nije izgrađeno u ovoj verziji.“ | Referentna ravan, osa ili tačka na površini ili ivici čvrstog tela | Napravite je od osnovnih ravni, tačaka skice ili koordinata |
| „Izvlačenje do površine, sledeće površine ili temena: još nije izgrađeno (potreban mu je tačan kernel).“ / „Sužavanje: još nije izgrađeno (potreban mu je tačan kernel).“ | Uslov kraja ili sužavanje koje gradi samo tačan kernel | Koristite dubinu Slepo ili Srednja ravan koju izmerite; ostavite Sužavanje na 0 |

## Problemi pri izboru

- „Ta površina je zakrivljena. Izaberite ravnu površinu ili ravan za skiciranje.“ Skice traže ravnu površinu. Skicirajte na osnovnoj ravni i postavite skicu dimenzijama.
- Površina kaže „Fiksirano gde je izabrano“: nije napravljena ivicom skice (na primer površina kopije obrasca), pa skica na njoj ostaje na mestu kad se deo menja.
- Ivice je teško pogoditi: uvećajte. Ivica pobeđuje površinu pored nje kad je pokazivač tačno na njoj.

## Problemi sa datotekama

| Poruka | Rešenje |
|---|---|
| „PartCraft otvara sopstvene .partcraft.json datoteke, izvozi iz CadCraft makroa za SolidWorks (.cadcraft-sw.json) i STEP datoteke. „bracket.igs“ nije nijedno od toga.“ | Prepoznaju se samo te datoteke (i STL, OBJ i 3MF mreže i `.3dm` datoteke) |
| „„part.stp“ nije STEP datoteka (ne počinje sa ISO-10303-21).“ | Datoteka nije STEP tekst |
| „Ta STEP datoteka je prevelika (preko 60 MB) za uvoz ovde.“ | Pojednostavite je na izvoru |
| „Ta datoteka je prevelika da bude PartCraft deo.“ za vaš sačuvani deo | Veliko STEP telo uvezeno u ranijoj verziji napravilo je datoteku dela preko 50 MB. Koristite raniju kopiju bez njega |
| „Ta datoteka je prevelika da bude PartCraft deo.“ | Datoteka je preko 50 MB; ona nije PartCraft datoteka |
| „Ovo nije PartCraft datoteka (nije JSON).“ / „Ovo nije PartCraft datoteka.“ | Datoteka je oštećena ili pripada drugom programu |
| „Ovu datoteku je sačuvao noviji PartCraft (verzija datoteke …); ova čita verziju …“ | Otvorite je u novijem PartCraft-u |
| „Extrude2: dubina nije ispravna.“ (ili druga vrednost) | Datoteka je ručno izmenjena ili oštećena. Koristite raniju kopiju |
| Umetanje u sklopu kaže „Part1.partcraft.json nema čvrsto telo za umetanje.“ | Datoteka dela nema čvrsto telo. Otvorite je, napravite čvrsto telo, sačuvajte i ponovo umetnite |

**Moja sačuvana datoteka nije tamo gde sam očekivao.** Čuvanje je preuzimanje: pogledajte fasciklu sa preuzimanjima u pregledaču ili otvorite listu preuzimanja sa trake pregledača. Pogledajte [Gde idu vaše datoteke](common:your-files).

**Otvorio sam deo, ali sklop je i dalje na ekranu.** Deo se učitao iza sklopa. Izaberite {{ui:Zatvori}} da zatvorite sklop i vidite deo. Zatvorite sklopove pre otvaranja datoteka delova.

## Problemi sa crtežom

| Poruka | Rešenje |
|---|---|
| „Prvo napravite čvrsto telo, pa tek onda njegov crtež.“ | Prvo napravite deo |
| „Nema mesta na listu za: detalj. Napravite detalj manjim ili izostavite pogled.“ | Manji **Radijus detalja** ili **Razmeru detalja**, ili uklonite presek |
| „Detalj se uzima iz pogleda sprednje, gornje, desne ili preseka.“ | Kliknite na jedan od tih pogleda |
| „Kliknite na jedan od pogleda.“ | Klik je bio na praznom papiru |
| „Položaj traži bar jednu referentnu bazu.“ i ostale poruke okvira | Postavite baze koje panel traži, ili izaberite drugu karakteristiku |
| „Pogledi crteža nisu mogli da se naprave: …“ | Opozovite poslednju izmenu. Ako se ponavlja, sačuvajte, ponovo učitajte i ponovo otvorite deo |

## Problemi sa sklopom

| Poruka | Rešenje |
|---|---|
| „Prvo napravite čvrsto telo, pa ga tek onda stavite u sklop.“ | Deo još nema čvrsto telo |
| „Prvo ubacite drugi deo (Dodaj kopiju, Umetni, ili Uredi › Dupliraj).“ | Spoj traži dva dela |
| „Izaberite površinu na drugom delu.“ | Obe površine spoja moraju biti na različitim delovima |
| „Ta površina je zakrivljena. Izaberite ravnu površinu …“ | Spojevi počinju od ravnih površina. Zatim koristite **Centriraj na** za rupu ili osu rotiranja |
| „Bracket2 nije spojen sa uzemljenim delom, pa ostaje gde je postavljen.“ | Dodajte spoj od njega do dela koji je postavljen |
| „Revolute3 zatvara petlju koja ne može da se zatvori: promašena je za 2.000 mm. Proverite površine, pomake i granice spojeva petlje.“ | Delovi se ne mogu svi sastati: proverite dužine, površine koje svaki spoj koristi, pomake (delovi naslagani površina na površinu moraju se slagati po dubini) i granice; ili uklonite jedan spoj iz petlje |
| „Površina koju ovaj spoj koristi nestala je iz Bracket-a.“ / „Osa koju ovaj spoj koristi nestala je iz Bracket-a.“ | Deo je izmenjen. Uklonite spoj i ponovo ga napravite |
| „Osa ide duž površine, pa ne može da postavi centar spoja.“ | Izaberite osu koja seče površinu, ili „Sopstveni početak površine“ |
| „Sklop zadržava bar jedan deo. Zatvorite ga umesto toga.“ | Koristite {{ui:Zatvori}} |

**Delovi su spojeni, ali na pogrešnom mestu.** Postavite **Centriraj na** za obe strane spoja na rupe ili ose rotiranja koje treba da se poravnaju, pa podesite **Ugao (°)** i **Pomak (mm)**.

## Sporo je

- Postavite **Krive** na Normalno ili Grubo dok modelujete; pre izvoza prebacite na Fino.
- Veliki brojevi kopija obrasca (stotine) traju da se ponovo grade pri svakoj promeni. Isključite obrazac dok radite na drugim funkcijama.
- Provera sudara i provera kretanja upoređuju svaki par delova; veliki sklopovi traju duže.
- Zatvorite druge teške kartice. PartCraft radi na procesoru i grafici vašeg računara.

## Još uvek zapelo

Prvo sačuvajte datoteku ({{key:Mod+S}}), pa ponovo učitajte stranicu i ponovo je otvorite. Ako funkcija i dalje ne uspeva, izaberite je, pročitajte poruku i probajte {{key:Mod+Z}} do poslednjeg dobrog stanja.
