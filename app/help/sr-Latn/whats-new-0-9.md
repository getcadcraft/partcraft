---
title: Šta je novo u 0.9
summary: PartCraft 0.9 donosi zaobljenja između strana i zadebljavanje u puna tela, sklopove od hiljada delova, trezor Dokumenti sa revizijama, dodatak Solid FEM za proveru napona, deset metoda za crtanje lukova, britanske čelične dimenzije, fazu štampanja i dodatke za štampanje smolom.
keywords: šta je novo, what's new, napomene o izdanju, dnevnik promena, 0.9, zaobljenje između strana, kotrljajuća kugla, zaobljenje više ivica, zadebljaj, puno telo iz površi, step ljuska, iges puno telo, zaobljenja iz skeniranja, veliki sklop, pojednostavljen prikaz, 20000 delova, dokumenti, trezor, preuzimanje, vraćanje, revizija, izdanje, gde se koristi, veza sa Rhino-om, grasshopper, 3dm, kursori, fabrički pod, red poslova, solid fem, konačni elementi, fon Mizes, prirodna frekvencija, metode lukova, 3-tačkasti luk, britanski čelični profili, plavi priručnik, faza štampanja, smola, goo, ctb, podloga, ravnaj, 0.8, 0.8.1, verzija, nove osobine, analiza uživo, ažuriraj dok menjaš, slomi ga, šta se prvo lomi, faktor opterećenja, nelinearno, tečenje, plastična deformacija, kontakt, calculix, studija kretanja, zazor, površi, nurbs, poravnaj, trup, zebra, inženjer, generator, generisano telo, skica iz fotografije, razmera za štampanje, podeli za štampanje, skupljanje, ugnježdeni listovi, g-code, crtež, kotiraj rupe, asistent, mcp, jezici, redovi alatki
from: 96d9fbfa
---

Ovo je spisak promena u PartCraft-u 0.9 u odnosu na 0.8.1. Slobodne površi sada se zatvaraju u puna tela, sklopovi od hiljada delova ostaju upotrebljivi, trezor Dokumenti čuva revizije, a dodatak Solid FEM proverava napon u delu. Svaka stavka kaže gde se nalazi.

## Novo u 0.9.1

- **Tačan izvoz u STEP.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} i {{ui:STEP AP214 (exact solid)}} sada rade. Rupe, izbočine, zaobljenja, konusi, sfere i torusi zapisuju se na svojim pravim površima, sa pravim kružnicama kao ivicama, pa drugi CAD ili CAM program može rupu da prepozna kao rupu. Bočne strane splajna, modelovani navoji i uvezene mreže ostaju ravne facete u istom telu. Videti [Izvoz za štampanje, STEP i DXF](topic:export-files#for-other-cad-programs-step).
- **STEP unutra, tačan STEP napolje.** STEP datoteka koju otvorite zadržava svoje ravne strane, cilindre, konuse, sfere i torusi, pa {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ih upisuje nazad kao prave površi, a ne kao facete: nosač dobavljača sa rupama za zavrtnje izlazi sa istim stranama sa kojima je ušao, plus sve što ste u njega urezali. Splajn, provučene i obrnute strane iz datoteke ostaju facete, kao i tela iz STL, OBJ i 3MF. Ponovo otvorite STEP datoteku za deo sačuvan ranije. Videti [Otvorite STEP datoteku i nastavite rad na njoj](topic:import-step).
- **Prave kružnice u DXF-u ravne površi.** {{ui:Export}} › {{ui:DXF of the sketch or flat face}} sa izabranom ravnom površi sada zapisuje okrugle rupe kao kružnice, sa sopstvenim centrom i poluprečnikom rupe, za laserski, plazma ili vodenomlazni sto. Ostale okrugle ivice i dalje su facete.
- **Tačan STEP za radionicu.** U {{ui:Manufacture}}, {{ui:Exact STEP (work coordinates)}} upisuje deo sa početkom u radnom početku postavke i Z osom duž ose alata, koordinatama koje koristi G-kod. Videti [Izrada putanja alata i G-koda](topic:manufacture#exact-step-for-the-shop).

## Novo

### Površi i puna tela

- **Zaobljenje između strana.** Izaberite {{ui:Surfaces}} u polju {{ui:Workspace}}, pa {{ui:Fillet between faces}}. Izaberite dve strane jednog tela i unesite poluprečnik ({{ui:Radius at the end (mm, 0 = the same)}} za poluprečnik koji se menja duž ivice). Linija rezultata kaže koliko je zaobljenje udaljeno od idealne kotrljajuće kugle, a poluprečnik koji ne staje biće odbijen uz navođenje strane. {{ui:Fillet several edges}} zaobljuje mnogo ivica u jednom koraku; označite {{ui:Corners (sphere patch where three meet)}} za sferni ugao tamo gde se tri zaobljene ivice ravnih strana spajaju. Videti [Slobodne površi (NURBS)](topic:nurbs-surfaces).
- **Zadebljaj u puno telo.** {{ui:Thicken into a solid}} u istom radnom prostoru daje površi debljinu; {{ui:Other side}} je širi na drugu stranu. Preklop ili samopresek se odbija uz navođenje površi i mesta.
- **Puna tela iz površi.** Obrezane površi mogu se spojiti, oduzeti i preseći, pa ugraditi u deo kao jedan korak opozivanja. STEP zapisuje telo kao jednu zatvorenu ljusku, a IGES kao jedno telo; oba se pri čitanju vraćaju kao telo. Ako se strane ne slažu ivica po ivicu, datoteka dobija odvojene strane, a statusna linija to kaže. Telo se može napraviti i u uređivaču čvorova; videti [Uređivač čvorova](topic:nodes).
- **Ivična i promenljiva zaobljenja u skeniranjima.** Kad prilagođavate površi skeniranju, traže se i ivična zaobljenja (torusi) i zaobljenja promenljivog poluprečnika duž prilično prave ivice, i navode se sa svojim poluprečnikom. Proveren je samo na izmišljenim skenovima.

### Sklopovi, dokumenti i veze

- **Veliki sklopovi.** Delovi koji su kopije dele jednu mrežu, a {{ui:Views}} › {{ui:Lightweight display}} crta kutije tako da pogled ostaje tečan (uključuje se sam kod vrlo velikih sklopova; izbor i zglobovi i dalje koriste prave delove). Stablo delova prikazuje prve redove i dugme {{ui:Show 700 more}} za ostale. Datoteke sklopova mogu sadržati do 50.000 instanci i 100.000 zglobova. Videti [Pravljenje sklopa](topic:build-assembly).
- **Dokumenti.** {{ui:Documents…}} u grupi **Datoteka** otvara dijalog nad fasciklom projekta: preuzimanje i vraćanje, slova revizija, stanja (u radu, za pregled, objavljeno, zastarelo), istoriju, gde se koristi i listu materijala. Videti [Dokumenti i revizije (trezor)](topic:documents-walkthrough).
- **Živa Rhino veza.** Jedna skripta, `cadcraft_link.py`, prati Rhino ili Grasshopper dokument i šalje u PartCraft samo ono što se promenilo, a uvezena osobina se ponovo gradi na novom obliku. Veza ide samo u jednom smeru i zahteva Studio. Videti [Živa .3dm veza](topic:live-3dm-link).
- **Vidite tuđe kursore.** U zajedničkoj sesiji kursor svake osobe prikazuje se sa imenom i osobinom koju je ta osoba izabrala. Videti [Rad uživo sa drugima](topic:work-live).
- **Fabrički pod.** Uključite dodatak Fabrički pod u {{ui:Settings}} › {{ui:Add-ons}}. Kad u {{ui:Manufacture}} pošaljete program, njegova kartica može da {{ui:Add to the factory job queue}} ili {{ui:Save as a job file}}. Nikad ne šalje niti pokreće mašinu.

### Analiza i delovi

- **Dodatak Solid FEM.** Uključite {{ui:Solid FEM}} u {{ui:Settings}} › {{ui:Add-ons}} (isključen je dok ga ne uključite) i u desnom panelu pojavljuje se kartica {{ui:Solid FEM}}. {{ui:Mesh the part}}, izaberite nepokretne strane i opterećenja u 3D prikazu, {{ui:Solve}}, pa nacrtajte pomeranje, fon Mizesov napon ili oblik moda pomoću {{ui:Show on the model}}. Videti [Solid FEM: provera napona](topic:solid-fem-check).
- **Lukovi u skicama, na deset načina.** Strelica pored {{ui:Arc}} na traci za skiciranje nabraja: 3 tačke, Početak Centar Kraj, Početak Centar Ugao, Početak Centar Dužina, Početak Kraj Ugao, Početak Kraj Pravac, Početak Kraj Poluprečnik, Centar Početak Kraj, Centar Početak Ugao, Centar Početak Dužina i Nastavi. Videti [Crtanje luka na deset načina](topic:sketch-arc-methods).
- **Britanske čelične dimenzije.** Zavareni sklopovi mogu koristiti 976 britanskih profila (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); upišite dimenziju, na primer `305x165x40 UB`. Videti [Konstrukcijski elementi](topic:structural-members).

### Štampanje

- **Faza štampanja.** Dugme {{ui:Print stage}} na traci (dodatak 3D štampa, uključen podrazumevano) stavlja tela vašeg dela na isprekidanu podlogu: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, pa {{ui:Send to 3D printer}} preko USB-a, Klipper (Moonraker), OctoPrint ili PrusaLink. Ništa se ne šalje dok ne potvrdite, a vaš deo se nikad ne menja. Za STL ili 3MF datoteku, videti [Priprema dela za 3D štampanje](topic:print-3d).
- **Štampanje smolom.** Dodaci u {{ui:Settings}} › {{ui:Add-ons}}, svi isključeni dok ih ne uključite: slajser za smolu, test ekspozicije i formati datoteka Elegoo GOO, SL1, Chitubox CBDDLP/CTB i Anycubic. Sečenje radi na posebnoj radnoj niti, pa stranica ostaje spremna za rad.

## U svakoj aplikaciji

- Svaki savet pri prelasku mišem je Bootstrap oblačić.
- Početni savet ima dugme za zatvaranje i ostaje zatvoren.
- Red kartica panela koji ne staje klizi u stranu umesto da bude odsečen.
- Kartica pregledača prikazuje ime otvorenog dokumenta pre naziva PartCraft | CadCraft.
- {{ui:Settings}} prikazuje {{ui:Layout}} radnog prostora kao padajuću listu izbora, a polje za jezik navodi sve jezike koje izgradnja ima.
- Težina i Temperatura su vrste jedinica u podešavanjima jedinica.

## Ispravljeno

- Meni Luk na skici sada navodi sve metode.
- Traka dodataka i naslov kartice pregledača ispravljeni su 2026-11-09.

## Iskreno o ograničenjima

- Tačan STEP je ponovo učitan u OpenCascade (ispravna tela, zapremine jednake onima izračunatim ručno). Još nije otvoren u svakom CAD ili CAM programu, a sklop se ne zapisuje kao tačan STEP.
- Ništa nije odštampano na pravom štampaču. Sečenje, G-kod i datoteke za smolu ponovo su pročitane našim programima ili zamenskim štampačem; nijedan format za smolu nije učitan na štampač, a dimenzije štampača i ekspozicije su polazne tačke.
- Solid FEM je linearan, izotropan i elastičan, jedan materijal po delu, bez kontakta, tečenja ili izvijanja. Napon na nepokretnim stranama i oštrim uglovima zavisi od mreže. To je pomoćno sredstvo za proveru, a ne pregledao ga je inženjer.
- Vremena za velike sklopove dolaze sa servera bez GPU-a; kadar sa punim detaljima za 20.000 delova i dalje tamo traje sekundama.
- Zaobljenja rade na parovima strana; nema opšteg mešanja temena i nema zaobljenja između strana koje se ne spajaju.
- Rhino veza nikad nije radila unutar pravog Rhino-a ili Grasshopper-a. Dokumenti su isprobani sa dva programa nad jednom fasciklom, a ne sa dve osobe na mrežnoj fascikli.
- Prilagođavanje površi pravom skeniranju nije ručno proverena. Jezici osim engleskog su mašinski nacrti.
- Instalateri za Windows nisu potpisani kodom, a disk slika za macOS nije overena. Videti [Rešavanje problema](topic:troubleshooting).

Ranije promene su u [Šta je novo u 0.7](topic:whats-new-0-7).

## Ranije: 0.8 i 0.8.1

Ovo je spisak promena u PartCraft-u 0.8 i 0.8.1 u odnosu na 0.7. Simulacija odgovara dok menjate i kaže šta se prvo lomi, sklopovi dobijaju studije kretanja, a novi radni prostori prave slobodne površi i delove dimenzionisane prema fizici. 0.8.1 je manje izdanje sa ispravkama.

### Novo

**Simulacija**

- **Ažuriraj dok menjam.** Uključite {{ui:Update while I edit}} u bloku Reši i odgovori prate vaše izmene. Promenite dimenziju, opterećenje ili materijal i brz odgovor, dobijen elementima četiri puta većim, pojavljuje se odmah; kad stanete na oko sekundu, precizniji odgovor same studije zamenjuje ga. Rezultati kažu koji od ta dva gledate. Na čeličnoj konzoli brz odgovor je bio unutar 1 % za pomeranje i oko 4 % za napon u odnosu na precizniji. Videti [Proverite napon i pomeranje](topic:simulation#update-while-you-edit-live).
- **Šta se prvo lomi.** Za statičku ili izvijajuću studiju, {{ui:What breaks first?}} u bloku **Slomi ga** skalira opterećenja dok deo ne popusti. Nabraja, od najgoreg, faktor opterećenja do prvog tečenja (sa crvenom oznakom tamo gde napon kulminira) i faktor opterećenja do izvijanja. Faktor ispod 1 znači da deo već popušta pod zadatim opterećenjem, a Problemi prikazuju grešku. Faktori dolaze iz linearne studije, pa su onoliko dobri koliko i ona. Videti [Proverite napon i pomeranje](topic:simulation#find-out-what-breaks-first-break-it).
- **Tečenje i kontakt.** Dve nove vrste studija: nelinearna, u kojoj materijal prati pravu liniju do napona tečenja, a zatim blaži nagib, uz crtanje plastične deformacije; i kontaktna, u kojoj odvojeni delovi guraju jedan drugog (bez trenja) ili ostaju zalepljeni (vezani). Korak opterećenja koji se ne smiri ili delovi koji previše upadnu jedan u drugi prikazuju se u panelu Problemi. Trenje, veliko klizanje, velike rotacije, veliki pomeraji i zamor nisu rešeni. Videti [Proverite napon i pomeranje](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Ulazne datoteke za CalculiX.** {{ui:Export}} › {{ui:CalculiX ulazna datoteka (.inp)}} čuva studiju za CalculiX, zaseban program koji sami instalirate i pokrećete; {{ui:Export}} › {{ui:CalculiX rezultati (.frd)}} čita njegovu datoteku sa rezultatima nazad na istu mrežu. PartCraft nikad ne pokreće taj program i kaže to ako se deo promenio otkad je ulazna datoteka sačuvana.

**Sklopovi**

- **Studije kretanja.** {{ui:Assembly}} › {{ui:Motion}} pokreće vrednost jednog zgloba tokom vremena koje zadate (stalna brzina, ublažena, sinusna ili napred pa nazad), postavlja sklop na svakom koraku sa njegovim zglobovima i zatvorenim petljama i prijavljuje šta se sudara i koliko se delovi približavaju. {{ui:Add a point}} crta položaj, brzinu i ubrzanje tačke, vrednost zgloba i zazor u odnosu na vreme; {{ui:Save CSV}} i {{ui:Save plot}} ih zapisuju. Posle {{ui:Run}}, traka Korak kroz pokretanje pomera sklop na bilo koji korak. Podešavanja studije čuvaju se u datoteci sklopa. Brzina i ubrzanje dolaze iz zabeleženih položaja, pa koristite više koraka ako oštar vrh izgleda nizak. Videti [Proverite sklop za sudare i kretanje](topic:check-assembly#a-motion-study).

**Površi i delovi iz fizike**

- **Radni prostor Površi.** Izaberite {{ui:Surfaces}} u polju {{ui:Workspace}} za NURBS krive i površi pored dela: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} i {{ui:Zebra}}, sa kontinuitetom (G0, G1 ili G2) izmerenim na tačnim površima i ivicom koja je lošija nego što ste tražili, navedenom u Problemima uz popravku za poklapanje. {{ui:Fair}} meri linije trupa za prevojne tačke i skokove krivine i ponovo gradi nepravilne u okviru vaše tolerancije. Površi se čuvaju u datoteci dela i ne menjaju osobine dela. Videti [Slobodne površi (NURBS)](topic:nurbs-surfaces).
- **Radni prostor Inženjer.** Izaberite {{ui:Engineer}} u prebacivaču radnih prostora, izaberite generator i kliknite {{ui:New}}: skripta određuje dimenzije dela prema onome što mora da radi (toplota koju treba pomeriti, protoci, pritisak, materijal, proces štampe) uz udžbeničke formule i pravi ga, zatim vraća brojeve koje je koristila sa izvorima, svoje provere za proizvodnju i datoteke za alate za analizu. Isti ulazi daju isti deo na bilo kom računaru. Generator se čuva u delu, a otvaranje dela nikad ne pokreće skriptu. Videti [Delovi iz fizike: generatori](topic:engineer-generators) i [Pisanje generatora](topic:write-a-generator).

**Skiciranje, crteži i izrada**

- **Skica iz fotografije.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} prati sliku ravnog dela na običnoj podlozi (spoljnu ivicu i rupe) ili crtež olovkom u linije, lukove i krugove. Zadajete jednu dužinu, proveravate pregled i pravite skicu. Videti [Osnove skiciranja](topic:sketch-basics#a-sketch-from-a-photo).
- **Razmera i podela za štampanje.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} skalira po osama bez promene dela, na primer za dozvolu za skupljanje. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} seče deo prevelik za vašu podlogu na numerisane delove spojene klinovima, ključevima, lastinim repovima, rupama za moždanike ili džepovima za magnete. Videti [3D štampanje](topic:print-3d).
- **Ugnježdeni listovi u G-kod.** {{ui:Export}} › {{ui:Nested sheets to G-code}} čita ugnježdeni DXF i pravi jedan program po listu kroz postprocesor koji izaberete: prvo rupe i isečke, pa spoljašnje konture. Ne planira uvodne linije, redosled sečenja ni zajedničke ivice. Videti [Ugnežđivanje ravnih delova na listovima](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Crteži koji više rade sami.** {{ui:Sheet}} › {{ui:Automatic}} bira najmanji list formata A koji staje pogledima u najvećoj standardnoj razmeri do 1:1. {{ui:Dimension the holes}} stavlja centralnu oznaku na svaku rupu, jednu oznaku po veličini i položaje od donjeg levog ugla pogleda. Videti [Pravljenje crteža](topic:drawing-pdf).

**U svakoj aplikaciji**

- **Jezici.** Aplikacije dolaze na 54 jezika. Oni osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik.
- **Redovi alatki.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} bira Prelom (kao ranije), 2 reda ili 1 red; traka koja ne staje klizi u stranu. Traka osobina u PartCraft-u prikazuje najkorišćeniji alat velik, a varijante sakriva iza podeljenog dugmeta.
- **Povežite svoj AI.** Studio je središte za povezivanje sopstvenog asistenta sa svih osam aplikacija, sa dozvolom samo za čitanje, predlaganje ili izmenu po aplikaciji. Povezani asistent može da odredi dimenzije dela iz jedne rečenice, na primer nosača za opterećenje, pokaže svoj rad i svaku proveru i da ga izgradi; javlja šta nije proverio (koncentraciju napona, zamor, puzanje u plastici). Videti [Korišćenje PartCraft-a sa AI asistentom](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Zamrzavanje kursora preko celog ekrana.** Izbor pri prelasku mišem sada je ograničen. Uzrok je naše najbolje tumačenje i nije potvrđen sa osobom koja ga je prijavila.
- **Jezik u toku rada.** Studio i spakovana izdanja mogu da promene jezik dok rade; ranije su bila samo na engleskom. Ovo još nije isprobano na svim platformama: javite nam ako se jezik ne menja.

### Još nije u ovoj verziji

- Povezivanje AI-ja nije završeno: povezivanje jednim klikom unutar Studio-a, hostovani konektor za AI u pregledaču, sopstveni API ključ unutar Studio-a i objavljeni MCP paket nisu obećani. Studio nema sopstveni AI.
- Studio nije potpisan kodom: Windows može da upozori, a macOS traži desni klik pa Otvori. Videti [Rešavanje problema](topic:troubleshooting).
- Lanci tolerancija su i dalje u jednom smeru: videti [Lanci tolerancija](topic:tolerance-stackup).
- Ostalo je navedeno u [Šta još nije napravljeno](topic:not-built-yet).

Ranije promene su u [Šta je novo u 0.7](topic:whats-new-0-7).
