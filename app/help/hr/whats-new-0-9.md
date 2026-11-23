---
title: Što je novo u 0.9 (ranije)
summary: PartCraft 0.9 dodaje zaobljenja između ploha i zadebljavanje u tijela, sklopove s tisućama dijelova, trezor Dokumenti s revizijama, dodatak Solid FEM za naprezanje, deset metoda lukova, UK veličine čelika, fazu ispisa i dodatke za ispis smolom.
keywords: novo u 0.9, ranije izdanje, što je novo, bilješke o izdanju, dnevnik promjena, 0.9, zaobljenje između ploha, kotrljajuća kugla, zaobljenje više bridova, zadebljaj, tijelo iz ploha, step ljuska, iges tijelo, zaobljenja iz skeniranja, veliki sklop, pojednostavljeni prikaz, 20000 dijelova, dokumenti, trezor, uzmi na uređivanje, revizija, izdanje, gdje se koristi, veza s Rhinom, grasshopper, 3dm, kursori, proizvodni pogon, red poslova, solid fem, konačni elementi, von mises, prirodna frekvencija, metode lukova, 3-točkasti luk, UK čelični profili, plava knjiga, faza ispisa, smola, goo, ctb, podloga, položi ravno, što je novo, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove značajke, analiza uživo, ažuriraj dok uređujem, slomi ga, što prvo popušta, faktor opterećenja, nelinearno, popuštanje, plastična deformacija, kontakt, calculix, studija gibanja, zazor, plohe, nurbs, uglađivanje, hull, zebra, inženjer, generator, generirano tijelo, skica iz fotografije, mjerilo za ispis, podjela za ispis, skupljanje, složeni limovi, g-kod, crtež, kote rupa, pomoćnik, mcp, jezici, redovi alatne trake
from: 1dafd7c8
---

Ovo je što se promijenilo u PartCraftu 0.9 u odnosu na 0.8.1. Slobodne plohe sada se zatvaraju u tijela, sklopovi s tisućama dijelova ostaju upotrebljivi, trezor Dokumenti čuva revizije, a dodatak Solid FEM provjerava naprezanje u dijelu. Svaka stavka kaže gdje je pronaći.

## Novo u 0.9.1

- **Točni izvoz STEP-a.** {{ui:Izvoz}} › {{ui:STEP AP242 (egzaktno tijelo)}} i {{ui:STEP AP214 (egzaktno tijelo)}} sada rade. Rupe, izbočine, zaobljenja, stošci, kugle i torusi zapisuju se na svojim pravim plohama s pravim kružnicama kao bridovima, pa drugi CAD ili CAM program može rupu prepoznati kao rupu. Bočne strane splajna, modelirani navoji i uvezene mreže ostaju ravne plohe mreže u istom tijelu. Vidi [Izvoz za ispis, STEP i DXF](topic:export-files#for-other-cad-programs-step).
- **STEP unutra, točni STEP van.** STEP datoteka koju otvorite zadržava svoje ravne plohe, valjke, stošce, kugle i toruse, pa ih {{ui:Izvoz}} › {{ui:STEP AP242 (egzaktno tijelo)}} zapisuje natrag kao prave plohe umjesto mreže: nosač dobavljača s rupama za vijke izlazi s istim plohama s kojima je ušao, plus sve što ste u njega zarezali. Splajn, provučene i rotirane plohe datoteke ostaju mreža, kao i tijela iz STL, OBJ i 3MF. Ponovno otvorite STEP datoteku za dio spremljen ranije. Vidi [Otvaranje STEP datoteke i rad na njoj](topic:import-step).
- **Prave kružnice u DXF-u plohe.** {{ui:Izvoz}} › {{ui:DXF skice ili ravne plohe}} s odabranom ravnom plohom sada zapisuje okrugle rupe kao kružnice, sa središtem i polumjerom same rupe, za stol za lasersko, plazma ili vodenomlazno rezanje. Ostali okrugli bridovi i dalje su mreža.
- **Točni STEP za radionicu.** U {{ui:Proizvodnja}}, {{ui:Točni STEP (koordinate obrade)}} zapisuje dio s ishodištem u radnoj nuli postavljanja i Z duž osi alata, koordinatama koje koristi G-kod. Vidi [Izrada putanja alata i G-koda](topic:manufacture#exact-step-for-the-shop).

## Novo

### Plohe i tijela

- **Zaobljenje između ploha.** Odaberite {{ui:Površine}} u okviru {{ui:Radni prostor}}, zatim {{ui:Zaobljenje između ploha}}. Odaberite dvije plohe jednog tijela, upišite polumjer (i {{ui:Radijus na kraju (mm, 0 = isti)}} za polumjer koji se mijenja duž brida). Redak s rezultatom kaže koliko se zaobljenje razlikuje od idealne kotrljajuće kugle, a polumjer koji ne pristaje odbija se uz navedenu plohu. {{ui:Zaobljenje više bridova}} zaokružuje mnoge bridove u jednom koraku; označite {{ui:Kutovi (sferna krpa gdje se sastaju tri)}} za sferni kut gdje se sastaju tri zaobljena brida ravnih ploha. Vidi [Slobodne plohe (NURBS)](topic:nurbs-surfaces).
- **Zadebljavanje u puno tijelo.** {{ui:Zadebljaj u puno tijelo}} u istom radnom prostoru daje plohi debljinu; {{ui:Druga strana}} je širi na drugu stranu. Nabor ili samopresjek odbija se uz navedenu plohu i mjesto.
- **Tijela iz ploha.** Skraćene plohe mogu se spojiti unijom, oduzimanjem i presjekom te ugraditi u dio kao jedan korak poništavanja. STEP zapisuje tijelo kao jednu zatvorenu ljusku, a IGES kao jedno tijelo; oba se pri čitanju vraćaju kao tijelo. Ako se plohe ne poklapaju brid po brid, datoteka dobiva zasebne plohe i redak stanja to kaže. Tijela se mogu napraviti i u uređivaču čvorova; vidi [Uređivač čvorova](topic:nodes).
- **Zaobljenja obruba i promjenjivog polumjera u skenovima.** Kad prilagođavate plohe skenu, traže se i zaobljenja obruba (torusi) te zaobljenja promjenjivog polumjera duž prilično ravnog brida i navode se s polumjerom. Ispitano je samo na izmišljenim skenovima.

### Sklopovi, dokumenti i veze

- **Veliki sklopovi.** Dijelovi koji su kopije dijele jednu mrežu, a {{ui:Pogledi}} › {{ui:Pojednostavljeni prikaz}} crta kvadre kako bi prikaz ostao pokretan (uključuje se sam za vrlo velike sklopove; odabir i zglobovi i dalje koriste stvarne dijelove). Stablo dijelova prikazuje prvih nekoliko redaka i gumb {{ui:Prikaži još 700}} za ostale. Datoteke sklopova mogu imati do 50.000 instanci i 100.000 zglobova. Vidi [Izrada sklopa](topic:build-assembly).
- **Dokumenti.** {{ui:Dokumenti…}} u grupi **Datoteka** otvara dijaloški okvir nad mapom projekta: uzimanje na uređivanje i vraćanje u trezor, slova revizija, stanja (u radu, za pregled, izdano, zastarjelo), povijest, gdje se koristi i sastavnica. Vidi [Dokumenti i revizije (trezor)](topic:documents-walkthrough).
- **Veza s Rhinom uživo.** Jedna skripta, `cadcraft_link.py`, prati dokument u Rhinu ili Grasshopperu i u PartCraft šalje samo ono što se promijenilo; uvezena značajka tada se ponovno gradi na novom obliku. Veza ide u jednom smjeru i treba Studio. Vidi [Veza .3dm uživo](topic:live-3dm-link).
- **Vidite tuđe kursore.** U zajedničkoj sesiji kursor svake osobe prikazuje se s njezinim imenom i značajkom koju je odabrala. Vidi [Rad uživo s drugima](topic:work-live).
- **Proizvodni pogon.** Uključite dodatak Proizvodni pogon u {{ui:Postavke}} › {{ui:Dodaci}}. Nakon što postprocesirate program u {{ui:Proizvodnja}}, njegova kartica može {{ui:Dodaj u red poslova pogona}} ili {{ui:Spremi kao datoteku posla}}. Nikad ne šalje niti pokreće stroj.

### Analiza i dijelovi

- **Dodatak Solid FEM.** Uključite {{ui:Solid FEM}} u {{ui:Postavke}} › {{ui:Dodaci}} (isključen je dok to ne učinite) i pojavi se kartica {{ui:Solid FEM}} u desnoj ploči. {{ui:Umrežite dio}}, odaberite fiksne plohe i opterećenja u 3D prikazu, {{ui:Riješi}}, i nacrtajte pomak, naprezanje po von Misesu ili oblik moda s {{ui:Prikaži na modelu}}. Vidi [Solid FEM: provjera naprezanja](topic:solid-fem-check).
- **Luk u skicama, deset načina.** Strelica pored {{ui:Luk}} na alatnoj traci skice nabraja 3-točke, Početak Središte Kraj, Početak Središte Kut, Početak Središte Duljina, Početak Kraj Kut, Početak Kraj Smjer, Početak Kraj Polumjer, Središte Početak Kraj, Središte Početak Kut, Središte Početak Duljina i Nastavi. Vidi [Nacrtajte luk deset metoda](topic:sketch-arc-methods).
- **UK veličine čelika.** Zavareni sklopovi mogu koristiti 976 UK profila (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); upišite veličinu kao `305x165x40 UB`. Vidi [Konstrukcijski elementi](topic:structural-members).

### Ispis

- **Faza ispisa.** Gumb {{ui:Faza ispisa}} na alatnoj traci (dodatak 3D Print, uključen prema zadanim postavkama) stavlja tijela vašeg dijela na isprekidanu podlogu: {{ui:Razvij}}, {{ui:Okreni 90°}}, {{ui:Rasporedi na podlogu}}, {{ui:Smjesti sve na podlogu}}, {{ui:Pregled slojeva}}, zatim {{ui:Pošalji na 3D pisač}} putem USB-a, Klipper (Moonraker), OctoPrint ili PrusaLink. Ništa se ne šalje dok ne potvrdite, a vaš dio se nikad ne mijenja. Za STL ili 3MF datoteku, vidi [Pripremite dio za 3D ispis](topic:print-3d).
- **Ispis smolom.** Dodaci u {{ui:Postavke}} › {{ui:Dodaci}}, svi isključeni dok ih ne uključite: rezač za smolu, test ekspozicije te formati datoteka Elegoo GOO, SL1, Chitubox CBDDLP/CTB i Anycubic. Rezanje se izvodi u pozadinskoj niti, pa stranica ostaje odzivna.

## U svakoj aplikaciji

- Svaki savjet pri lebdenju je Bootstrap alatni savjet.
- Početni savjet ima gumb za zatvaranje; ostaje zatvoren.
- Redak kartica ploče koji ne stane pomiče se u stranu umjesto da bude odrezan.
- Kartica preglednika prikazuje naziv otvorenog dokumenta prije PartCraft | CadCraft.
- {{ui:Postavke}} prikazuje {{ui:Raspored}} radnog prostora kao padajući izbornik, a okvir za jezik nabraja sve jezike koje ova verzija ima.
- Težina i temperatura su vrste jedinica u postavkama jedinica.

## Ispravljeno

- Izbornik Luk u skici sada nabraja sve metode.
- Alatna traka dodataka i naslov kartice preglednika ispravljeni su 2026-11-09.

## Iskrena ograničenja

- Točni STEP je ponovno učitan u OpenCascadeu (ispravna tijela, volumeni jednaki onima izračunatima ručno). Još nije otvoren u svakom CAD ili CAM programu, a sklop se ne zapisuje kao točni STEP.
- Ništa nije ispisano na pravom pisaču. Rezanje, G-kod i datoteke za smolu čitali su naši vlastiti programi ili zamjenski pisač; nijedan format za smolu nije učitan na pisač, a veličine pisača i ekspozicije su polazne točke.
- Solid FEM je linearan, izotropan i elastičan, jedan materijal po dijelu, bez kontakta, popuštanja ili izvijanja. Naprezanje na fiksnim plohama i oštrim kutovima ovisi o mreži. To je pomoćno sredstvo za provjeru, koje inženjer nije pregledao.
- Vremena za velike sklopove dolaze s poslužitelja bez GPU-a; slika pune razine detalja za 20.000 dijelova i dalje tamo traje sekunde.
- Zaobljenja rade na parovima ploha; nema općeg stapanja vrhova niti zaobljenja između ploha koje se ne spajaju.
- Veza s Rhinom nikad nije radila unutar pravog Rhina ili Grasshoppera. Dokumenti su isprobani s dva programa na jednoj mapi, a ne s dvije osobe na mrežnom dijeljenju.
- Prilagodba ploha pravom skenu nije ručno provjerena. Jezici osim engleskog su strojne radne verzije.
- Instalacijski programi za Windows nisu potpisani kodom, a disk slika za macOS nije ovjerena. Vidi [Rješavanje problema](topic:troubleshooting).

Ranije promjene su u [Što je novo u 0.7](topic:whats-new-0-7).

## Ranije: 0.8 i 0.8.1

Ovo je što se promijenilo u PartCraftu 0.8 i 0.8.1 u odnosu na 0.7. Simulacija odgovara dok uređujete i govori što prvo popušta, sklopovi dobivaju studije gibanja, a novi radni prostori izrađuju slobodne plohe i dijelove dimenzionirane prema fizici. 0.8.1 je mala ispravka.

### Novo

**Simulacija**

- **Ažuriraj dok uređujem.** Označite {{ui:Ažuriraj dok uređujem}} u bloku Riješi i odgovori prate vaše promjene. Promijenite dimenziju, opterećenje ili materijal i brz odgovor, izračunat s elementima četiri puta većim, pojavi se odmah; kad stanete na otprilike sekundu, zamijeni ga vlastiti pročišćeni odgovor studije. Rezultati kažu koji od njih gledate. Na čeličnoj konzoli brz odgovor bio je unutar 1 % za progib i oko 4 % za naprezanje u odnosu na pročišćeni. Vidi [Provjera naprezanja i progiba](topic:simulation#update-while-you-edit-live).
- **Što prvo popušta.** Za statičku studiju ili studiju izvijanja, {{ui:Što popušta prvo?}} u bloku **Slomi ga** skalira opterećenja dok dio ne popusti. Navodi, od najgoreg, faktor opterećenja do prvog popuštanja (s crvenom oznakom gdje naprezanje vrhuni) i faktor opterećenja do izvijanja. Faktor manji od 1 znači da dio već popušta pod zadanim opterećenjem, a Problemi prikazuju pogrešku. Faktori dolaze iz linearne studije, pa su dobri onoliko koliko je i ona. Vidi [Provjera naprezanja i progiba](topic:simulation#find-out-what-breaks-first-break-it).
- **Popuštanje i kontakt.** Dvije nove vrste studija: nelinearna, u kojoj materijal slijedi svoj pravac do granice popuštanja, a zatim blažu nagib, uz ucrtanu plastičnu deformaciju, i kontaktna, u kojoj odvojeni dijelovi se guraju (bez trenja) ili ostaju zalijepljeni (vezani). Korak opterećenja koji se ne može smiriti ili dijelovi koji se predaleko utisnu jedan u drugi prikazuju se na ploči Problemi. Trenje, veliko klizanje, velike rotacije, veliki progibi i zamor se ne rješavaju. Vidi [Provjera naprezanja i progiba](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Ulazne datoteke za CalculiX.** {{ui:Izvoz}} › {{ui:CalculiX ulaz (.inp)}} sprema studiju kao ulaznu datoteku za CalculiX, zaseban program koji sami instalirate i pokrećete; {{ui:Izvoz}} › {{ui:CalculiX rezultati (.frd)}} čita njegovu datoteku rezultata natrag na istu mrežu. PartCraft nikad ne pokreće taj program i kaže to ako se dio promijenio otkad je datoteka spremljena.

**Sklopovi**

- **Studije gibanja.** {{ui:Sklop}} › {{ui:Gibanje}} vodi vrijednost jednog zgloba kroz vrijeme koje zadate (stalna brzina, ublažena, sinusna ili naprijed pa natrag), postavlja sklop u svakom koraku sa zglobovima i zatvorenim petljama te izvještava što se sudara i koliko se dijelovi približavaju. {{ui:Dodaj točku}} crta položaj, brzinu i ubrzanje točke, vrijednost zgloba i zazor u vremenu; {{ui:Spremi CSV}} i {{ui:Spremi grafikon}} ih zapisuju. Nakon {{ui:Pokreni}}, traka Korak kroz pokretanje pomiče sklop na bilo koji korak. Postavke studije spremaju se u datoteku sklopa. Brzina i ubrzanje dolaze iz zabilježenih položaja, pa koristite više koraka ako oštar vrh izgleda nizak. Vidi [Provjera sklopa za sudare i gibanje](topic:check-assembly#a-motion-study).

**Plohe i dijelovi iz fizike**

- **Radni prostor Površine.** Odaberite {{ui:Površine}} u okviru {{ui:Radni prostor}} za NURBS krivulje i plohe uz dio: {{ui:Krivulja}}, {{ui:Loft}}, {{ui:Provlačenje}}, {{ui:Uskladi}} i {{ui:Zebra}}, s kontinuitetom (G0, G1 ili G2) mjerenim na točnim plohama i bridom koji je lošiji od traženoga, naveden na ploči Problemi uz popravak Uskladi. {{ui:Izgladi}} mjeri linije trupa za infleksije i skokove zakrivljenosti te ponovno gradi nepravilne u vašoj toleranciji. Plohe se spremaju u datoteku dijela i ne mijenjaju značajke dijela. Vidi [Slobodne plohe (NURBS)](topic:nurbs-surfaces).
- **Radni prostor Inženjer.** Odaberite {{ui:Inženjer}} u birač radnog prostora, odaberite generator i kliknite {{ui:Novo}}: skripta dimenzionira dio prema onome što mora učiniti (toplina za prijenos, tokovi, tlak, materijal, postupak ispisa) udžbeničkim formulama i izgradi ga, zatim vraća brojeve koje je koristila s njihovim izvorima, svoje proizvodne provjere i datoteke za alate analize. Isti ulazi daju isti dio na bilo kojem računalu. Generator se čuva u dijelu, a otvaranje dijela nikad ne pokreće skriptu. Vidi [Dijelovi iz fizike: generatori](topic:engineer-generators) i [Pisanje generatora](topic:write-a-generator).

**Skiciranje, crteži i izrada**

- **Skica iz fotografije.** {{ui:Značajke}} › {{ui:Više}} › {{ui:Skica iz fotografije…}} ocrtava sliku ravnog dijela na jednolikoj podlozi (obris i rupe) ili crtež olovkom u linije, lukove i kružnice. Zadate jednu duljinu, provjerite pregled i izradite skicu. Vidi [Osnove skiciranja](topic:sketch-basics#a-sketch-from-a-photo).
- **Mjerilo i podjela za ispis.** {{ui:Izvoz}} › {{ui:Skaliraj za ispis (STL ili 3MF)…}} skalira po osima bez mijenjanja dijela, na primjer dodatkom za skupljanje. {{ui:Izvoz}} › {{ui:Podijeli za ispis (zip komada)…}} reže dio prevelik za vašu podlogu na numerirane komade spojene klinovima, ključevima, lastinim repovima, rupama za svornjake ili džepovima za magnete. Vidi [Ispis u 3D](topic:print-3d).
- **Složeni limovi u G-kod.** {{ui:Izvoz}} › {{ui:Složene ploče u G-kod}} čita složeni DXF i pravi jedan program po listu kroz postprocesor koji odaberete: prvo rupe i izrezi, zatim obrisi. Ne planira ulaze, redoslijed rezanja ni zajedničke bridove. Vidi [Slaganje ravnih dijelova na limove](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Crteži koji rade više sami.** {{ui:List}} › {{ui:Automatski}} bira najmanji list formata A koji stane prikaze u najvećem standardnom mjerilu do 1:1. {{ui:Kotiraj provrte}} stavlja oznaku središta na svaku rupu, jedan pozivnik po veličini i položaje od donjeg lijevog kuta prikaza. Vidi [Izrada crteža](topic:drawing-pdf).

**U svakoj aplikaciji**

- **Jezici.** Aplikacije dolaze na 54 jezika. Oni osim engleskog su strojne radne verzije dok ih ne pročita izvorni govornik.
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Redci alatne trake}} bira Prelom (kao prije), 2 retka ili 1 redak; traka koja ne stane pomiče se u stranu. Vrpca značajki PartCrafta prikazuje najkorišteniji alat velik, a varijante skriva iza podijeljenog gumba.
- **Povežite svog AI pomoćnika.** Studio je središte za povezivanje vlastitog AI pomoćnika sa svih osam aplikacija, uz dopuštenje samo za čitanje, prijedlog ili uređivanje po aplikaciji. Povezani pomoćnik može dimenzionirati dio iz rečenice, poput nosača za opterećenje, pokazati svoj postupak i svaku provjeru te ga izraditi; izvještava što nije provjerio (koncentracija naprezanja, zamor, puzanje plastike). Vidi [Korištenje PartCrafta s AI pomoćnikom](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Zamrzavanje kursora pri cijelom zaslonu.** Pregled pri lebdenju sada je ograničen. Uzrok je naše najbolje tumačenje i nije potvrđen s osobom koja je prijavila problem.
- **Jezik pri radu.** Studio i pakirana izdanja mogu promijeniti jezik dok rade; prije su bila samo na engleskom. Nije ispitano na svim platformama: javite nam ako se jezik ne mijenja.

### Nije još u ovoj verziji

- Povezivanje AI-a nije dovršeno: povezivanje jednim klikom unutar aplikacije Studio, hostani konektor za AI u pregledniku, vlastiti API ključ unutar aplikacije Studio i objavljeni MCP paket nisu obećani. Studio nema vlastiti AI.
- Studio nije potpisan kodom: Windows može upozoriti, a macOS traži desni klik, zatim Otvori. Vidi [Rješavanje problema](topic:troubleshooting).
- Lanci tolerancija su još jednosmjerni: vidi [Lanci tolerancija](topic:tolerance-stackup).
- Ostalo je navedeno u [Što još nije izrađeno](topic:not-built-yet).

Ranije promjene su u [Što je novo u 0.7](topic:whats-new-0-7).
