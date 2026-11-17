---
title: Šta je novo u 0.9
summary: PartCraft 0.9 dodaje zaobljenja između površina i zadebljavanje u čvrsta tijela, sklopove s hiljadama dijelova, trezor dokumenata s revizijama, dodatak Solid FEM za naprezanje, deset metoda lukova, UK čelične profile, fazu štampanja i dodatke za štampanje smolom.
keywords: šta je novo, bilješke o izdanju, dnevnik promjena, 0.9, zaobljenje između površina, kotrljajuća kugla, zaobljenje više ivica, zadebljavanje, čvrsto tijelo iz površina, step ljuska, iges čvrsto tijelo, zaobljenja u skenovima, veliki sklop, lagani prikaz, 20000 dijelova, dokumenti, trezor, odjava, revizija, izdanje, rhino veza, grasshopper, 3dm, kursori, radni pod, red poslova, solid fem, konačni elementi, von mises, prirodna frekvencija, metode lukova, luk s 3 tačke, UK čelični profili, faza štampanja, smola, goo, ctb, podloga, ravnaj, 0.8, 0.8.1, verzija, nove funkcije, analiza uživo, ažuriraj dok uređuješ, slomi ga, šta prvo popušta, faktor opterećenja, nelinearno, tečenje, plastična deformacija, kontakt, calculix, studija kretanja, zazor, površine, nurbs, glađenje, trup, zebra, inženjer, generator, generisano tijelo, skica iz fotografije, razmjera za štampanje, podjela za štampanje, skupljanje, rasporedi listova, g-kod, crtež, kotiraj rupe, asistent, mcp, jezici, redovi alatne trake
from: 96d9fbfa
---

Ovo je šta se promijenilo u PartCraftu 0.9, u odnosu na 0.8.1. Slobodne površine se sada zatvaraju u čvrsta tijela, sklopovi s hiljadama dijelova ostaju upotrebljivi, trezor dokumenata čuva revizije, a dodatak Solid FEM provjerava naprezanje u dijelu. Svaka stavka kaže gdje je pronaći.

## Novo u 0.9.1

- **Tačan STEP izvoz.** {{ui:Izvoz}} › {{ui:STEP AP242 (tačno čvrsto tijelo)}} i {{ui:STEP AP214 (tačno čvrsto tijelo)}} sada rade. Rupe, izbočine, zaobljenja, konusi, sfere i torusi se pišu na svojim pravim površinama s pravim krugovima kao ivicama, pa drugi CAD ili CAM program može rupu prepoznati kao rupu. Spline strane, modelirani navoji i uvezene mreže ostaju ravne fasete u istom čvrstom tijelu. Vidi [Izvoz za štampanje, STEP i DXF](topic:export-files#for-other-cad-programs-step).
- **STEP unutra, tačan STEP van.** STEP datoteka koju otvoriš zadržava svoje ravne površine, cilindre, konuse, sfere i torusi, pa {{ui:Izvoz}} › {{ui:STEP AP242 (tačno čvrsto tijelo)}} piše ih nazad kao prave površine umjesto fareta: nosač dobavljača s rupama za vijke izlazi s istim površinama s kojima je ušao, plus ono što si u njega usjekao. Spline, zamahnute i rotirane površine datoteke ostaju fasete, kao i tijela iz STL, OBJ i 3MF. Ponovo otvori STEP datoteku za dio spremljen ranije. Vidi [Otvori STEP datoteku i gradi na njoj](topic:import-step).
- **Pravi krugovi u DXF površine.** {{ui:Izvoz}} › {{ui:DXF skice ili ravne površine}} s odabranom ravnom površinom sada piše okrugle rupe kao krugove, sa središtem i radijusom same rupe, za laserski, plazma ili vodenomlazni sto. Ostale okrugle ivice su još fasete.
- **Tačan STEP za radionicu.** U {{ui:Izrada}}, {{ui:Tačan STEP (radne koordinate)}} piše dio s ishodištem u radnom ishodištu postavke i Z duž osi alata, koordinatama koje koristi G-kod. Vidi [Pravi alatni putevi i G-kod](topic:manufacture#exact-step-for-the-shop).

## Novo

### Površine i čvrsta tijela

- **Zaobljenje između površina.** Odaberi {{ui:Površine}} u okviru {{ui:Radni prostor}}, pa {{ui:Zaobljenje između površina}}. Odaberi dvije površine jednog čvrstog tijela, upiši radijus (i {{ui:Polumjer na kraju (mm, 0 = isti)}} za radijus koji se mijenja duž ivice). Redak s rezultatom kaže koliko je zaobljenje daleko od idealne kotrljajuće kugle, a radijus koji ne stane se odbija uz navođenje površine. {{ui:Zaobljenje više ivica}} zaobljuje mnogo ivica u jednom koraku; označi {{ui:Uglovi (sferna krpa gdje se spajaju tri)}} za sferni ugao gdje se spajaju tri zaobljene ivice ravnih površina. Vidi [Slobodne površine (NURBS)](topic:nurbs-surfaces).
- **Zadebljavanje u čvrsto tijelo.** {{ui:Dodaj debljinu i pretvori u tijelo}} u istom radnom prostoru daje površini debljinu; {{ui:Druga strana}} je širi na drugu stranu. Preklapanje ili samopresijecanje se odbija uz navođenje površine i mjesta.
- **Čvrsta tijela iz površina.** Obrezane površine se mogu spojiti unijom, oduzimanjem i presjekom i ugraditi u dio kao jedan korak poništavanja. STEP piše čvrsto tijelo kao jednu zatvorenu ljusku, a IGES kao jedno tijelo; oba se čitaju natrag kao čvrsto tijelo. Ako se površine ne poklapaju ivicu po ivicu, datoteka dobija odvojene površine i statusna linija to kaže. Čvrsta tijela se također mogu praviti u uređivaču čvorova; vidi [Uređivač čvorova](topic:nodes).
- **Zaobljenja na rubu i promjenljiva zaobljenja u skenovima.** Kad uklapaš površine u skeniranje, traže se i zaobljenja na rubu (torusi) i zaobljenja promjenljivog radijusa duž prilično prave ivice, i navode se s radijusom. Testirano je samo na izmišljenim skenovima.

### Sklopovi, dokumenti i veze

- **Veliki sklopovi.** Dijelovi koji su kopije dijele jednu mrežu, a {{ui:Prikazi}} › {{ui:Lagani prikaz}} crta kutije da prikaz ostane pokretljiv (uključuje se sam za vrlo velike sklopove; odabir i spojevi još koriste prave dijelove). Stablo dijelova pokazuje prvih nekoliko redova i dugme {{ui:Prikaži još 700}} za ostale. Datoteke sklopova mogu imati do 50.000 instanci i 100.000 spojeva. Vidi [Izgradnja sklopa](topic:build-assembly).
- **Dokumenti.** {{ui:Dokumenti…}} u grupi **Datoteka** otvara dijalog nad fasciklom projekta: preuzimanje i vraćanje, slova revizija, stanja (u radu, za pregled, odobreno, zastarjelo), historija, gdje se koristi i lista materijala. Vidi [Dokumenti i revizije (trezor)](topic:documents-walkthrough).
- **Živa Rhino veza.** Jedna skripta, `cadcraft_link.py`, prati Rhino ili Grasshopper dokument i šalje u PartCraft samo ono što se promijenilo, gdje se uvezeni element ponovo gradi na novom obliku. Jednosmjerna je i treba Studio. Vidi [Živa .3dm veza](topic:live-3dm-link).
- **Vidite kursore jedni drugih.** U zajedničkoj sesiji kursor svake osobe se prikazuje s njenim imenom i elementom koji je odabrala. Vidi [Radi uživo s drugima](topic:work-live).
- **Podna fabrika.** Uključi dodatak Podna fabrika u {{ui:Postavke}} › {{ui:Dodaci}}. Nakon što pošalješ program iz {{ui:Izrada}}, njegova kartica može {{ui:Dodaj u red poslova fabrike}} ili {{ui:Spasi kao datoteku posla}}. Nikad ne šalje niti pokreće mašinu.

### Analiza i dijelovi

- **Dodatak Solid FEM.** Uključi {{ui:Solid FEM}} u {{ui:Postavke}} › {{ui:Dodaci}} (isključeno dok ne uključiš) i pojavi se kartica {{ui:Solid FEM}} u desnom panelu. {{ui:Mrežiraj dio}}, odaberi fiksne površine i opterećenja u 3D prikazu, {{ui:Riješi}}, i iscrtaj pomjeranje, von Mises naprezanje ili oblik moda s {{ui:Prikaži na modelu}}. Vidi [Solid FEM: provjera naprezanja](topic:solid-fem-check).
- **Luk u skicama, na deset načina.** Strelica pored {{ui:Luk}} na alatnoj traci skica nudi: 3 tačke, Početak Centar Kraj, Početak Centar Ugao, Početak Centar Dužina, Početak Kraj Ugao, Početak Kraj Smjer, Početak Kraj Radijus, Centar Početak Kraj, Centar Početak Ugao, Centar Početak Dužina i Nastavi. Vidi [Nacrtaj luk na deset metoda](topic:sketch-arc-methods).
- **UK čelični profili.** Okviri mogu koristiti 976 UK profila (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); upiši dimenziju poput `305x165x40 UB`. Vidi [Konstruktivni elementi](topic:structural-members).

### Štampanje

- **Faza štampanja.** Dugme {{ui:Faza štampanja}} na alatnoj traci (dodatak 3D štampa, uključen po zadanom) stavlja tijela tvog dijela na isprekidanu podlogu: {{ui:Ravnaj}}, {{ui:Okreni 90°}}, {{ui:Rasporedi na podlogu}}, {{ui:Smjesti sve na podlogu}}, {{ui:Pregledaj slojeve}}, pa {{ui:Pošalji 3D štampaču}} preko USB-a, Klipper (Moonraker), OctoPrint ili PrusaLink. Ništa se ne šalje dok ne potvrdiš, a tvoj dio se nikad ne mijenja. Za STL ili 3MF datoteku, vidi [Pripremi dio za 3D štampu](topic:print-3d).
- **Štampanje smolom.** Dodaci u {{ui:Postavke}} › {{ui:Dodaci}}, svi isključeni dok ih ne uključiš: slicer za smolu, test ekspozicije, i formati datoteka Elegoo GOO, SL1, Chitubox CBDDLP/CTB i Anycubic. Slaganje u slojeve radi na pozadinskoj niti, pa stranica ostaje odzivna.

## U svim aplikacijama

- Svaki savjet kod miša je Bootstrap tooltip.
- Početni savjet ima dugme za zatvaranje; ostaje zatvoren.
- Red kartica panela koji ne stane se pomjera u stranu umjesto da se odsiječe.
- Naslov kartice pregledača prikazuje naziv otvorenog dokumenta prije PartCraft | CadCraft.
- {{ui:Postavke}} prikazuje {{ui:Raspored}} radnog prostora kao padajući izbor, a okvir za jezik nabraja svaki jezik koji verzija ima.
- Težina i Temperatura su vrste jedinica u postavkama jedinica.

## Ispravljeno

- Meni Luk u skicama sada nabraja svaku metodu.
- Naslov alatne trake dodataka i naslov kartice pregledača ispravljeni su 2026-11-09.

## Iskrena ograničenja

- Tačan STEP je pročitan natrag u OpenCascadeu (ispravna čvrsta tijela, zapremine jednake onima izračunatim ručno). Još nije otvoren u svakom CAD ili CAM programu, a sklop se ne piše kao tačan STEP.
- Ništa nije odštampano na pravom štampaču. Slaganje u slojeve, G-kod i datoteke za smolu pročitani su našim vlastitim programima ili zamjenskim štampačem; nijedan format za smolu nije učitan na štampaču, a veličine štampača i ekspozicije su polazne tačke.
- Solid FEM je linearan, izotropan i elastičan, jedan materijal po dijelu, bez kontakta, tečenja ili izvijanja. Naprezanje na fiksnim površinama i oštrim uglovima zavisi od mreže. To je pomoć za provjeru, a ne pregledao ga je inženjer.
- Vremena za velike sklopove dolaze s servera bez GPU-a; puni okvir od 20.000 dijelova i dalje traje sekunde.
- Zaobljenja rade na parovima površina; nema opšteg vrha s mješanjem, niti zaobljenja između površina koje se ne dodiruju.
- Veza s Rhinom nikad nije radila unutar pravog Rhina ili Grasshoppera. Dokumenti su isprobani s dva programa na jednoj fascikli, a ne s dvije osobe na mrežnom dijeljenju.
- Uklapanje površina na pravi sken nije ručno provjereno. Jezici osim engleskog su mašinski nacrti.
- Windows instalateri nisu potpisani kodom, a disk slika za macOS nije notarizovana. Vidi [Rješavanje problema](topic:troubleshooting).

Raniji promjene su u [Šta je novo u 0.7](topic:whats-new-0-7).

## Ranije: 0.8 i 0.8.1

Ovo je šta se promijenilo u PartCraftu 0.8 i 0.8.1, u odnosu na 0.7. Simulacija odgovara dok uređuješ i kaže šta prvo popušta, sklopovi dobijaju studije kretanja, a novi radni prostori prave slobodne površine i dijelove dimenzionisane iz fizike. 0.8.1 je manje izdanje s ispravkama.

### Novo

**Simulacija**

- **Ažuriraj dok uređujem.** Označi {{ui:Ažuriraj dok uređujem}} u bloku Riješi, i odgovori prate tvoje izmjene. Promijeni dimenziju, opterećenje ili materijal, i brz odgovor, napravljen elementima četiri puta većim, pojavi se odmah; kad staneš na otprilike sekundu, vlastiti precizniji odgovor studije zamjenjuje ga. Rezultati kažu koji od njih gledaš. Na čeličnoj konzoli brzi odgovor je bio unutar 1 % na pomjeranju i oko 4 % na naprezanju u odnosu na precizniji. Vidi [Provjeri naprezanje i pomjeranje](topic:simulation#update-while-you-edit-live).
- **Šta prvo popušta.** Za statičku ili studiju izvijanja, {{ui:Šta prvo popušta?}} u bloku **Slomi ga** skalira opterećenja dok dio ne popusti. Navodi, od najgoreg, faktor opterećenja do prvog tečenja (s crvenom oznakom gdje naprezanje raste) i faktor opterećenja do izvijanja. Faktor ispod 1 znači da dio već popušta pod opterećenjem, a Problemi prikazuju grešku. Faktori dolaze iz linearne studije, pa su dobri koliko i ona. Vidi [Provjeri naprezanje i pomjeranje](topic:simulation#find-out-what-breaks-first-break-it).
- **Tečenje i kontakt.** Još dvije vrste studija: nelinearna, gdje materijal prati svoju pravu liniju do granice tečenja, pa blaži nagib, s iscrtanom plastičnom deformacijom; i kontaktna, gdje odvojeni dijelovi gurnu jedan drugi (bez trenja) ili ostanu zalijepljeni (vezani). Korak opterećenja koji se ne smiri, ili dijelovi koji previše uđu jedan u drugi, prikazuju se u panelu Problemi. Trenje, veliko klizanje, velike rotacije, veliki pomaci i zamor nisu riješeni. Vidi [Provjeri naprezanje i pomjeranje](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Decks za CalculiX.** {{ui:Izvoz}} › {{ui:CalculiX deck (.inp)}} sprema studiju za CalculiX, poseban program koji sam instaliraš i pokrećeš; {{ui:Izvoz}} › {{ui:CalculiX rezultati (.frd)}} čita njegovu datoteku rezultata natrag na istu mrežu. PartCraft nikad ne pokreće taj program, i kaže to ako se dio promijenio otkad je deck spremljen.

**Sklopovi**

- **Studije kretanja.** {{ui:Sklop}} › {{ui:Kretanje}} pokreće vrijednost jednog spoja tokom vremena koje zadaš (konstantna brzina, ublažena, sinusna, ili naprijed pa nazad), postavlja sklop u svakom koraku s njegovim spojevima i zatvorenim petljama, i izvještava šta se sudara i koliko se dijelovi približavaju. {{ui:Dodaj tačku}} iscrtava položaj tačke, brzinu i ubrzanje, vrijednost spoja i zazor u odnosu na vrijeme; {{ui:Spasi CSV}} i {{ui:Spasi grafikon}} ih pišu van. Nakon {{ui:Pokreni}}, Korak kroz pokretnu traku pomjera sklop na bilo koji korak. Postavke studije se spremaju u datoteku sklopa. Brzina i ubrzanje dolaze iz zabilježenih položaja, pa koristi više koraka ako oštar vrh izgleda nizak. Vidi [Provjeri sklop za sudare i kretanje](topic:check-assembly#a-motion-study).

**Slobodne površine i dijelovi iz fizike**

- **Radni prostor Površine.** Odaberi {{ui:Površine}} u okviru {{ui:Radni prostor}} za NURBS krive i površine pored dijela: {{ui:Kriva}}, {{ui:Prelaz}}, {{ui:Provlačenje}}, {{ui:Poklapanje}} i {{ui:Zebra}}, s kontinuitetom (G0, G1 ili G2) mjerenim na tačnim površinama, i ivica koja je lošija nego što si tražio navedena je u Problemima s popravkom Poklapanja. {{ui:Glađenje}} mjeri linije trupa za prevojne tačke i skokove zakrivljenosti i ponovo gradi nepravilne u okviru tvoje tolerancije. Površine se spremaju u datoteku dijela i ne mijenjaju elemente dijela. Vidi [Slobodne površine (NURBS)](topic:nurbs-surfaces).
- **Radni prostor Inženjer.** Odaberi {{ui:Inženjer}} u okviru radnog prostora, izaberi generator i klikni {{ui:Novo}}: skripta dimenzioniše dio prema onome što mora raditi (zagrijati da pomjeri, protoci, pritisak, materijal, proces štampanja) pomoću udžbeničkih formula i gradi ga, pa vraća brojeve koje je koristila s njihovim izvorima, svoje provjere za proizvodnju i datoteke za analitičke alate. Isti ulazi daju isti dio na bilo kojem računaru. Generator se čuva u dijelu, a otvaranje dijela nikad ne pokreće skriptu. Vidi [Dijelovi iz fizike: generatori](topic:engineer-generators) i [Napiši generator](topic:write-a-generator).

**Skiciranje, crteži i izrada**

- **Skica iz fotografije.** {{ui:Elementi}} › {{ui:Više}} › {{ui:Skica iz fotografije…}} prati sliku ravnog dijela na običnoj podlozi (kontura i rupe) ili crtež olovkom u linije, lukove i krugove. Zadaš jednu dužinu, provjeriš pregled i napraviš skicu. Vidi [Osnove skiciranja](topic:sketch-basics#a-sketch-from-a-photo).
- **Razmjera i podjela za štampanje.** {{ui:Izvoz}} › {{ui:Razmjera za štampanje (STL ili 3MF)…}} skalira po osama bez mijenjanja dijela, na primjer zbog dodatka za skupljanje. {{ui:Izvoz}} › {{ui:Podjela za štampanje (zip s dijelovima)…}} reže dio prevelik za tvoju podlogu na numerisane komade spojene klinovima, ključevima, lastinim repovima, rupama za tiplove ili džepovima za magnete. Vidi [Štampanje u 3D](topic:print-3d).
- **Rasporedi listova u G-kod.** {{ui:Izvoz}} › {{ui:Rasporedi listova u G-kod}} čita raspoređeni DXF i pravi jedan program po listu kroz postprocesor koji izabereš: prvo rupe i izrezi, pa konture. Ne planira uvodne linije, redoslijed rezanja niti zajedničke ivice. Vidi [Raspoređivanje ravnih dijelova na listove](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Crteži koji više rade sami.** {{ui:List}} › {{ui:Automatski}} bira najmanji A-format lista koji stane pogled, na najveću standardnu razmjeru do 1:1. {{ui:Kotiraj rupe}} stavlja oznaku središta na svaku rupu, jednu oznaku po veličini i položaje od donjeg lijevog ugla pogleda. Vidi [Napravi crtež](topic:drawing-pdf).

**U svim aplikacijama**

- **Jezici.** Aplikacije dolaze na 54 jezika. Osim engleskog, to su mašinski nacrti dok ih ne pregleda izvorni govornik.
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} bira Prelom (kao prije), 2 reda ili 1 red; traka koja ne stane se pomjera u stranu. Traka Elementi u PartCraftu prikazuje najkorišćeniji alat velik, a varijante sakriva iza podijeljenog dugmeta.
- **Poveži svoj AI.** Studio je središte za povezivanje asistenta tvoje vlastite izrade sa svih osam aplikacija, s dozvolom samo za čitanje, prijedlog ili uređivanje za svaku aplikaciju. Povezani asistent može dimenzionisati dio iz rečenice, poput nosača za opterećenje, pokazati svoj postupak i svaku provjeru, i izgraditi ga; izvještava šta nije provjerio (koncentraciju naprezanja, zamor, puzanje u plastici). Vidi [Koristi PartCraft s AI asistentom](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Zamrzavanje kursora preko cijelog ekrana.** Pregled kod prelaska mišem sada je ograničen. Uzrok je naše najbolje tumačenje i nije potvrđen s osobom koja ga je prijavila.
- **Jezik za vrijeme rada.** Studio i zapakovana izdanja mogu promijeniti jezik dok rade; prije su bila samo na engleskom. Još nije testirano na svakoj platformi: javi nam ako se jezik ne promijeni.

### Nije još u ovoj verziji

- Poveži svoj AI nije završen: povezivanje jednim klikom unutar Studija, hostovani konektor za AI u pregledaču, tvoj vlastiti API ključ unutar Studija i objavljeni MCP paket nisu obećani. Studio nema vlastiti AI.
- Studio nije potpisan kodom: Windows može upozoriti, a macOS traži desni klik pa Otvori. Vidi [Rješavanje problema](topic:troubleshooting).
- Slaganje tolerancija je još jednosmjerno: vidi [Lanci tolerancija](topic:tolerance-stackup).
- Ostalo je navedeno u [Šta još nije izgrađeno](topic:not-built-yet).

Raniji promjene su u [Šta je novo u 0.7](topic:whats-new-0-7).
