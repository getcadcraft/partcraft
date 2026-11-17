---
title: Što je novo u 0.9
summary: PartCraft 0.9 dodaje spajanje ploha i zadebljavanje u puna tijela, sklopove s tisućama dijelova, trezor dokumenata s revizijama, dodatak Solid FEM za provjeru naprezanja, deset metoda lukova, britanske čelične profile, fazu ispisa i dodatke za ispis smolom. Svaka stavka kaže gdje se nalazi.
keywords: što je novo, bilješke o izdanju, popis promjena, 0.9, zaobljenje između ploha, kotrljajuća kugla, zaobljenje više bridova, zadebljaj, puno tijelo iz ploha, step shell, iges solid, zaobljenja u skenovima, veliki sklop, pojednostavljeni prikaz, 20000 dijelova, dokumenti, trezor, uzmi na uređivanje, revizija, izdanje, gdje se koristi, rhino veza, grasshopper, 3dm, kursori, tvornički pod, red poslova, solid fem, konačni elementi, von mises, prirodna frekvencija, metode lukova, 3-točkasti luk, britanski čelični profili, blue book, faza ispisa, ispis smolom, goo, ctb, podloga, razvij, 0.8, 0.8.1, verzija, nove značajke, live analiza, ažuriraj dok uređujem, slomi ga, što popušta prvo, faktor opterećenja, nelinearno, popuštanje, plastična deformacija, kontakt, calculix, studija gibanja, zazor, plohe, nurbs, izgladi, trup, zebra, inženjer, generator, generirano tijelo, skica iz fotografije, skaliranje za ispis, dijeljenje za ispis, skupljanje, složene ploče, g-kod, crtež, kotiraj provrte, pomoćnik, mcp, jezici, redci alatne trake
from: 96d9fbfa
---

Ovo je što se promijenilo u PartCraft-u 0.9 u odnosu na 0.8.1. Slobodne plohe sada se zatvaraju u puna tijela, sklopovi od tisuća dijelova ostaju upotrebljivi, trezor dokumenata čuva revizije, a dodatak Solid FEM provjerava naprezanje u dijelu. Svaka stavka kaže gdje se nalazi.

## Novo u 0.9.1

- **Točan STEP izvoz.** {{ui:Izvoz}} › {{ui:STEP AP242 (egzaktno tijelo)}} i {{ui:STEP AP214 (egzaktno tijelo)}} sada rade. Rupe, izbočine, zaobljenja, stošci, kugle i torusi zapisuju se na svojim pravim plohama s pravim kružnicama kao bridovima, pa drugi CAD ili CAM program može rupu prepoznati kao rupu. Stranice splajna, modelirani navoji i uvezene mreže ostaju ravne facete u istom tijelu. Vidi [Izvoz za ispis, STEP i DXF](topic:export-files#for-other-cad-programs-step).
- **STEP unutra, točan STEP van.** STEP datoteka koju otvorite zadržava svoje ravne plohe, valjke, stošce, kugle i toruse, pa {{ui:Izvoz}} › {{ui:STEP AP242 (egzaktno tijelo)}} zapisuje ih natrag kao prave plohe umjesto facete: dobavljačeva greda s rupama za vijke izlazi s istim plohama s kojima je ušla, plus sve što ste u nju izrezali. Splajn, provučene i rotirane plohe datoteke ostaju facete, kao i tijela iz STL, OBJ i 3MF datoteka. Ponovno otvorite STEP datoteku za dio spremljen ranije. Vidi [Otvorite STEP datoteku i gradite na njoj](topic:import-step).
- **Prave kružnice u DXF-u plohe.** {{ui:Izvoz}} › {{ui:DXF skice ili ravne plohe}} s odabranom ravnom plohom sada zapisuje okrugle rupe kao kružnice, sa središtem i polumjerom same rupe, za laser, plazma ili stol za vodeni mlaz. Ostali okrugli bridovi su i dalje facete.
- **Točan STEP za radionicu.** U {{ui:Proizvodnja}}, {{ui:Točni STEP (koordinate obrade)}} zapisuje dio s ishodištem u radnom ishodištu postavke i Z duž osi alata, u koordinatama koje koristi G-kod. Vidi [Izradite putanje alata i G-kod](topic:manufacture#exact-step-for-the-shop).

## Novo

### Plohe i puna tijela

- **Zaobljenje između ploha.** Odaberite {{ui:Površine}} u okviru {{ui:Radni prostor}}, zatim {{ui:Zaobljenje između ploha}}. Odaberite dvije plohe jednog tijela i upišite polumjer ({{ui:Radijus na kraju (mm, 0 = isti)}} za polumjer koji se mijenja duž brida). Redak rezultata kaže koliko se zaobljenje razlikuje od idealne kotrljajuće kugle, a polumjer koji ne odgovara odbija se uz navedenu plohu. {{ui:Zaobljenje više bridova}} zaobljuje mnoge bridove u jednom koraku; označite {{ui:Kutovi (sferna krpa gdje se sastaju tri)}} za sferni kut gdje se sastaju tri zaobljena brida ravnih ploha. Vidi [Slobodne plohe (NURBS)](topic:nurbs-surfaces).
- **Zadebljavanje u puno tijelo.** {{ui:Zadebljaj u puno tijelo}} u istom radnom prostoru daje plohi debljinu; {{ui:Druga strana}} je širi na drugu stranu. Presavijanje ili samopresijecanje se odbija uz navedenu plohu i mjesto.
- **Puna tijela iz ploha.** Obrezane plohe mogu se spojiti s unijom, oduzimanjem i presjekom te ugraditi u dio kao jedan korak poništavanja. STEP zapisuje puno tijelo kao jednu zatvorenu ljusku, a IGES kao jedno tijelo; oba se čitaju natrag kao puno tijelo. Ako se plohe ne sparuju brid po brid, datoteka dobiva zasebne plohe, a redak statusa to kaže. Puna tijela se mogu napraviti i u uređivaču čvorova; vidi [Uređivač čvorova](topic:nodes).
- **Obodna i promjenjiva zaobljenja u skenovima.** Kad prilagođavate plohe skenu, traže se i obodna zaobljenja (torusi) i zaobljenja promjenjivog polumjera duž prilično ravnog brida te se navode s polumjerom. Testirano je samo na izmišljenim skenovima.

### Sklopovi, dokumenti i veze

- **Veliki sklopovi.** Dijelovi koji su kopije dijele jednu mrežu, a {{ui:Pogledi}} › {{ui:Pojednostavljeni prikaz}} crta kutije pa prikaz ostaje pokretljiv (sam se uključuje za vrlo velike sklopove; odabir i zglobovi i dalje koriste prave dijelove). Stablo dijelova prikazuje prvih nekoliko redaka i gumb {{ui:Prikaži još 700}} za ostatak. Datoteke sklopova mogu sadržavati do 50.000 instanci i 100.000 zglobova. Vidi [Izradite sklop](topic:build-assembly).
- **Dokumenti.** {{ui:Dokumenti…}} u grupi {{ui:Datoteka}} otvara dijaloški okvir nad mapom projekta: uzmite na uređivanje i vratite u trezor, oznake revizija, stanja (u radu, za pregled, izdano, zastarjelo), povijest, gdje se koristi i sastavnicu. Vidi [Dokumenti i revizije (trezor)](topic:documents-walkthrough).
- **Live veza s Rhinom.** Jedna skripta, `cadcraft_link.py`, prati dokument u Rhinu ili Grasshopperu i u PartCraft šalje samo ono što se promijenilo, gdje se uvezena značajka ponovno gradi na novom obliku. Veza ide u jednom smjeru i treba Studio. Vidi [Live .3dm veza](topic:live-3dm-link).
- **Vidite kursore jedni drugih.** U zajedničkoj sesiji kursor svake osobe prikazuje se s imenom i značajkom koju je odabrala. Vidi [Radite uživo s drugima](topic:work-live).
- **Tvornički pod.** Uključite dodatak Factory floor u {{ui:Postavke}} › {{ui:Dodaci}}. Nakon što postavite program u {{ui:Proizvodnja}}, njegova kartica može {{ui:Dodaj u red poslova tvornice}} ili {{ui:Spremi kao datoteku posla}}. Nikad ne šalje niti pokreće stroj.

### Analiza i dijelovi

- **Dodatak Solid FEM.** Uključite {{ui:Solid FEM}} u {{ui:Postavke}} › {{ui:Dodaci}} (isključen je dok ga ne uključite) i u desnom panelu pojavit će se kartica {{ui:Solid FEM}}. {{ui:Izradi mrežu dijela}}, odaberite fiksne plohe i opterećenja u 3D prikazu, {{ui:Riješi}}, i nacrtajte pomak, von Mises naprezanje ili oblik moda s {{ui:Prikaži na modelu}}. Vidi [Solid FEM: provjera naprezanja](topic:solid-fem-check).
- **Luk u skicama, na deset načina.** Strelica pored {{ui:Luk}} na alatnoj traci skice nabraja: 3 točke, Početak Središte Kraj, Početak Središte Kut, Početak Središte Duljina, Početak Kraj Kut, Početak Kraj Smjer, Početak Kraj Radijus, Središte Početak Kraj, Središte Početak Kut, Središte Početak Duljina i Nastavi. Vidi [Nacrtajte luk na deset metoda](topic:sketch-arc-methods).
- **Britanske veličine čelika.** Zavareni sklopovi mogu koristiti 976 britanskih profila (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); upišite veličinu kao `305x165x40 UB`. Vidi [Konstrukcijski elementi](topic:structural-members).

### Ispis

- **Faza ispisa.** Gumb {{ui:Faza ispisa}} na alatnoj traci (dodatak 3D ispis, uključen prema zadanim postavkama) stavlja tijela vašeg dijela na isprekidanu podlogu: {{ui:Razvij}}, {{ui:Okreni 90°}}, {{ui:Rasporedi na podlogu}}, {{ui:Prilagodi sve na podlogu}}, {{ui:Pregled slojeva}}, zatim {{ui:Pošalji 3D pisaču}} preko USB-a, Klipper (Moonraker), OctoPrint ili PrusaLink. Ništa se ne šalje dok ne potvrdite, a vaš dio se nikad ne mijenja. Za STL ili 3MF datoteku, vidi [Pripremite dio za 3D ispis](topic:print-3d).
- **Ispis smolom.** Dodaci u {{ui:Postavke}} › {{ui:Dodaci}}, svi isključeni dok ih ne uključite: slicer za smolu, test ekspozicije i formati datoteka Elegoo GOO, SL1, Chitubox CBDDLP/CTB i Anycubic. Rezanje na slojeve izvodi se u radnoj niti, pa stranica ostaje odzivna.

## U svim aplikacijama

- Svaki savjet pri prelasku mišem je Bootstrap tooltip.
- Savjet na početku ima gumb za zatvaranje; ostaje zatvoren.
- Red kartica na ploči koji ne stane pomiče se u stranu umjesto da bude odrezan.
- Kartica preglednika prikazuje naziv otvorenog dokumenta prije PartCraft | CadCraft.
- {{ui:Postavke}} prikazuje {{ui:Raspored}} radnog prostora kao padajući izbornik, a polje za jezik navodi svaki jezik koji verzija ima.
- Težina i temperatura su vrste jedinica u postavkama {{ui:Jedinice}}.

## Ispravljeno

- Izbornik Luk u skici sada nabraja sve metode.
- Alatna traka dodataka i naslov kartice preglednika ispravljeni su 2026-11-09.

## Iskrena ograničenja

- Točan STEP je ponovno učitan u OpenCascadeu (ispravna tijela, volumeni jednaki onima izračunatima ručno). Još nije otvoren u svakom CAD ili CAM programu, a sklop se ne zapisuje kao točan STEP.
- Ništa nije ispisano na pravom pisaču. Rezanje na slojeve, G-kod i datoteke smole čitali su naši vlastiti programi ili zamjenski pisač; nijedan format za smolu nije učitan na pisač, a veličine pisača i ekspozicije su polazne točke.
- Solid FEM je linearan, izotropan i elastičan, jedan materijal po dijelu, bez kontakta, popuštanja ili izvijanja. Naprezanje na fiksnim plohama i oštrim kutovima ovisi o mreži. To je pomoćno sredstvo za provjeru, koje nije pregledao inženjer.
- Vremena za velike sklopove dolaze s poslužitelja bez GPU-a; okvir pune detaljnosti s 20.000 dijelova i dalje tamo traje sekunde.
- Zaobljenja rade na parovima ploha; nema općeg prijelaza u vrhovima i nema zaobljenja između ploha koje se ne sastaju.
- Rhino veza nikad nije radila unutar pravog Rhina ili Grasshoppera. Dokumenti su isprobani s dva programa na jednoj mapi, a ne s dvije osobe na mrežnom dijeljenju.
- Prilagodba ploha pravom skenu još nije ručno provjerena. Jezici osim engleskog su strojne radne verzije.
- Instalateri za Windows nisu potpisani kodom, a slika diska za macOS nije notarizirana. Vidi [Rješavanje problema](topic:troubleshooting).

Raniji promjene su u [Što je novo u 0.7](topic:whats-new-0-7).

## Ranije: 0.8 i 0.8.1

Ovo je što se promijenilo u PartCraft-u 0.8 i 0.8.1 u odnosu na 0.7. Simulacija odgovara dok uređujete i kaže što prvo popušta, sklopovi dobivaju studije gibanja, a novi radni prostori izrađuju slobodne plohe i dijelove dimenzionirane prema fizici. 0.8.1 je manje izdanje s ispravcima.

### Novo

**Simulacija**

- **Ažuriraj dok uređujem.** Označite {{ui:Ažuriraj dok uređujem}} u bloku {{ui:Riješi}} i odgovori slijede vaše promjene. Promijenite dimenziju, opterećenje ili materijal i brz odgovor, izrađen s elementima četiri puta većim, odmah se pojavi; kad stanete na otprilike sekundu, vlastiti precizniji odgovor studije zamjenjuje ga. Rezultati kažu koji gledate. Na čeličnoj konzoli brzi odgovor bio je unutar 1 % za progib i oko 4 % za naprezanje u odnosu na precizniji. Vidi [Provjerite naprezanje i progib](topic:simulation#update-while-you-edit-live).
- **Što popušta prvo.** Za statičku ili izvijajuću studiju, {{ui:Što popušta prvo?}} u bloku **Slomi ga** skalira opterećenja dok dio ne popusti. Popisuje, od najgoreg, faktor opterećenja do prvog popuštanja (s crvenom oznakom gdje naprezanje vrhuncuje) i faktor opterećenja do izvijanja. Faktor manji od 1 znači da dio već popušta pod zadanim opterećenjem, a ploča Problemi prikazuje grešku. Faktori dolaze iz linearne studije, pa su dobri koliko i ona. Vidi [Provjerite naprezanje i progib](topic:simulation#find-out-what-breaks-first-break-it).
- **Popuštanje i kontakt.** Dvije dodatne vrste studije: nelinearna, u kojoj materijal slijedi svoj ravni dio do granice popuštanja, a zatim blaži nagib, s prikazanom plastičnom deformacijom; i kontaktna, u kojoj odvojeni dijelovi se guraju jedan o drugi (bez trenja) ili ostaju zalijepljeni (vezani). Korak opterećenja koji se ne može smiriti ili dijelovi koji previše utonu jedan u drugi prikazuju se na ploči Problemi. Trenje, veliko klizanje, veliki zakreti, veliki progibi i zamor materijala se ne rješavaju. Vidi [Provjerite naprezanje i progib](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Ulazne datoteke za CalculiX.** {{ui:Izvoz}} › {{ui:CalculiX ulazna datoteka (.inp)}} sprema studiju za CalculiX, zaseban program koji sami instalirate i pokrećete; {{ui:Izvoz}} › {{ui:CalculiX rezultati (.frd)}} čita njegovu datoteku s rezultatima natrag na istu mrežu. PartCraft nikad ne pokreće taj program i kaže to ako se dio promijenio otkad je ulazna datoteka spremljena.

**Sklopovi**

- **Studije gibanja.** {{ui:Sklop}} › {{ui:Gibanje}} pokreće vrijednost jednog zgloba kroz vrijeme koje zadate (stalna brzina, ublaženo, sinusno ili naprijed pa natrag), postavlja sklop na svaki korak sa zglobovima i zatvorenim petljama, i prikazuje što se sudara i koliko se dijelovi približavaju. {{ui:Dodaj točku}} iscrtava položaj, brzinu i ubrzanje točke, vrijednost zgloba i zazor u vremenu; {{ui:Spremi CSV}} i {{ui:Spremi grafikon}} ih zapisuju. Nakon {{ui:Pokreni}}, traka pokretanja s koracima pomiče sklop na bilo koji korak. Postavke studije spremaju se u datoteku sklopa. Brzina i ubrzanje dolaze iz zabilježenih položaja, pa koristite više koraka ako oštar vrh izgleda preniska. Vidi [Provjerite sklop za sudare i gibanje](topic:check-assembly#a-motion-study).

**Plohe i dijelovi iz fizike**

- **Radni prostor Površine.** Odaberite {{ui:Površine}} u okviru {{ui:Radni prostor}} za NURBS krivulje i plohe uz dio: {{ui:Krivulja}}, {{ui:Loft}}, {{ui:Provlačenje}}, {{ui:Uskladi}} i {{ui:Zebra}}, s kontinuitetom (G0, G1 ili G2) mjerenim na točnim plohama i bridom koji je lošiji nego što ste tražili, naveden na ploči Problemi s popravkom Uskladi. {{ui:Izgladi}} mjeri linije trupa za infleksije i skokove zakrivljenosti i ponovno gradi nepravilne unutar vaše tolerancije. Plohe se spremaju u datoteku dijela i ne mijenjaju značajke dijela. Vidi [Slobodne plohe (NURBS)](topic:nurbs-surfaces).
- **Radni prostor Inženjer.** Odaberite {{ui:Inženjer}} u preklopniku radnog prostora, izaberite generator i kliknite {{ui:Novo}}: skripta dimenzionira dio prema tome što mora raditi (toplina za pomicanje, protoci, tlak, materijal, postupak ispisa) s formulama iz udžbenika i izrađuje ga, zatim vraća brojeve koje je koristila s njihovim izvorima, provjere proizvodnje i datoteke za alate za analizu. Isti ulazi daju isti dio na bilo kojem računalu. Generator se čuva u dijelu, a otvaranje dijela nikad ne pokreće skriptu. Vidi [Dijelovi iz fizike: generatori](topic:engineer-generators) i [Napišite generator](topic:write-a-generator).

**Skiciranje, crteži i izrada**

- **Skica iz fotografije.** {{ui:Značajke}} › {{ui:Više}} › {{ui:Skica iz fotografije…}} prenosi sliku ravnog dijela na jednoličnoj podlozi (obris i rupe) ili crtež tušem u linije, lukove i kružnice. Zadajete jednu duljinu, provjerite pregled i izradite skicu. Vidi [Osnove skiciranja](topic:sketch-basics#a-sketch-from-a-photo).
- **Skaliranje i dijeljenje za ispis.** {{ui:Izvoz}} › {{ui:Skaliraj za ispis (STL ili 3MF)…}} skalira po osi bez promjene dijela, na primjer za dozvolu skupljanja. {{ui:Izvoz}} › {{ui:Podijeli za ispis (zip komada)…}} reže dio prevelik za vašu podlogu na numerirane komade spojene klinovima, ključevima, lastinim repovima, rupama za moždanike ili džepovima za magnete. Vidi [Ispis u 3D](topic:print-3d).
- **Složene ploče u G-kod.** {{ui:Izvoz}} › {{ui:Složene ploče u G-kod}} čita složeni DXF i pravi jedan program po ploči kroz postprocesor koji odaberete: prvo rupe i izrezi, zatim obrisi. Ne planira uvodne linije, redoslijed rezanja ni zajedničke bridove. Vidi [Složite ravne dijelove na ploče](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Crteži koji rade više sami.** {{ui:List}} › {{ui:Automatski}} bira najmanji list formata A koji stane pogled u najvećem standardnom mjerilu do 1:1. {{ui:Kotiraj provrte}} stavlja oznaku središta na svaku rupu, jedan oblačić po veličini i položaje od donjeg lijevog kuta pogleda. Vidi [Izradite crtež](topic:drawing-pdf).

**U svim aplikacijama**

- **Jezici.** Aplikacije dolaze na 54 jezika. Oni osim engleskog su strojne radne verzije dok ih izvorni govornik ne pročita.
- **Redci alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Redci alatne trake}} bira Prelamanje (kao prije), 2 retka ili 1 redak; traka koja ne stane pomiče se u stranu. Vrpca značajki PartCraft-a prikazuje najkorišteniji alat velik, a varijante skriva iza podijeljenog gumba.
- **Povežite svoj AI.** Studio je čvorište za povezivanje vlastitog pomoćnika sa svih osam aplikacija, s dozvolom samo za čitanje, prijedlog ili uređivanje po aplikaciji. Povezani pomoćnik može dimenzionirati dio iz rečenice, poput nosača za opterećenje, pokazati svoj postupak i svaku provjeru te ga izraditi; prijavljuje što nije provjerio (koncentracija naprezanja, zamor, puzanje u plastici). Vidi [Upotreba PartCraft-a s AI pomoćnikom](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Zamrzavanje kursora na cijelom zaslonu.** Odabir pri prelasku sada je ograničen. Uzrok je naša najbolja procjena i nije potvrđen s osobom koja je prijavila problem.
- **Jezik za vrijeme rada.** Studio i spakirana izdanja mogu promijeniti jezik dok rade; prije su bila samo na engleskom. Još nije provjereno na svim platformama: javite nam ako se jezik ne mijenja.

### Još nije u ovoj verziji

- Povezivanje AI-ja nije dovršeno: povezivanje jednim klikom unutar Studija, hostani konektor za AI u pregledniku, vlastiti API ključ unutar Studija i objavljeni MCP paket nisu obećani. Studio nema vlastiti AI.
- Studio nije potpisan kodom: Windows može upozoriti, a macOS traži desni klik pa Otvori. Vidi [Rješavanje problema](topic:troubleshooting).
- Slaganja tolerancija su još u jednom smjeru: vidi [Slaganje tolerancija](topic:tolerance-stackup).
- Ostalo je navedeno u [Što još nije izrađeno](topic:not-built-yet).

Raniji promjene su u [Što je novo u 0.7](topic:whats-new-0-7).
