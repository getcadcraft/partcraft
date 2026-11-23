---
title: Novo u 0.9 (ranije)
summary: PartCraft 0.9 dodaje zaobljenja između površina i zadebljavanje u tijela, sklopove od hiljada dijelova, trezor dokumenata s revizijama, dodatak Solid FEM za naprezanje, deset metoda lukova, britanske čelične profile, fazu štampanja i dodatke za štampanje smolom.
keywords: novo u 0.9, ranije izdanje, novo, što je novo, bilješke o izdanju, dnevnik promjena, 0.9, zaobljenje između površina, kotrljajuća kugla, zaobljenje više ivica, zadebljavanje, čvrsto tijelo iz površina, step ljuska, iges tijelo, zaobljenja iz skeniranja, veliki sklop, pojednostavljeni prikaz, 20000 dijelova, dokumenti, trezor, odjava, revizija, izdanje, gdje se koristi, veza s Rhinom, grasshopper, 3dm, kursori, pogon, red poslova, solid fem, konačni elementi, von mises, prirodna frekvencija, metode lukova, tri tačke, britanski čelični profili, plavi priručnik, faza štampanja, smola, goo, ctb, podloga, ravnaj, raspored traka, 0.8, 0.8.1, verzija, nove funkcije, analiza uživo, ažuriranje dok uređujete, slomi ga, šta prvo popušta, faktor opterećenja, nelinearno, popuštanje, plastična deformacija, kontakt, calculix, studija kretanja, zazor, površine, nurbs, glađenje, omotač, zebra, inženjer, generator, generisano tijelo, skica iz fotografije, razmjera za štampanje, podjela za štampanje, skupljanje, gniježđeni listovi, g-kod, crtež, kotiraj rupe, asistent, mcp, jezici, redovi alatne trake
from: 1dafd7c8
---

Ovo je šta se promijenilo u PartCraftu 0.9, u odnosu na 0.8.1. Slobodne površine sada se zatvaraju u tijela, sklopovi od hiljada dijelova ostaju upotrebljivi, trezor dokumenata čuva revizije, a dodatak Solid FEM provjerava naprezanje u dijelu. Svaka stavka kaže gdje je naći.

## Novo u 0.9.1

- **Izvoz tačnog STEP-a.** {{ui:Izvoz}} › {{ui:STEP AP242 (tačno čvrsto tijelo)}} i {{ui:STEP AP214 (tačno čvrsto tijelo)}} sada rade. Rupe, izbočine, zaobljenja, konusi, sfere i torovi zapisuju se na svojim pravim površinama, s pravim kružnicama kao ivicama, pa drugi CAD ili CAM program može rupu prepoznati kao rupu. Bokovi od splajna, modelovani navoji i uvezene mreže ostaju ravni facete u istom tijelu. Pogledajte [Izvoz za štampanje, STEP i DXF](topic:export-files#for-other-cad-programs-step).
- **STEP unutra, tačan STEP van.** STEP datoteka koju otvorite zadržava svoje ravne površine, valjke, konuse, sfere i torove, pa {{ui:Izvoz}} › {{ui:STEP AP242 (tačno čvrsto tijelo)}} zapisuje ih nazad kao prave površine umjesto kao facete: nosač dobavljača s rupama za vijke izlazi s istim površinama s kojima je ušao, plus ono što ste u njega urezali. Splajn, provlačene i rotirane površine datoteke ostaju facete, kao i tijela iz STL, OBJ i 3MF. Ponovo otvorite STEP datoteku za dio sačuvan ranije. Pogledajte [Otvaranje STEP datoteke i gradnja na njoj](topic:import-step).
- **Prave kružnice u DXF-u površine.** {{ui:Izvoz}} › {{ui:DXF skice ili ravne površine}} s odabranom ravnom površinom sada zapisuje okrugle rupe kao kružnice, sa središtem i poluprečnikom same rupe, za laserski, plazma ili vodenmlazni sto. Ostale okrugle ivice su i dalje facete.
- **Tačan STEP za radionicu.** U {{ui:Izrada}}, {{ui:Tačan STEP (radne koordinate)}} zapisuje dio s početkom u radnom početku podešavanja i Z duž osi alata, to su koordinate koje koristi G-kod. Pogledajte [Izrada putanja alata i G-kod](topic:manufacture#exact-step-for-the-shop).

## Novo

### Površine i tijela

- **Zaobljenje između površina.** Izaberite {{ui:Površine}} u polju {{ui:Radni prostor}}, zatim {{ui:Zaobljenje između površina}}. Odaberite dvije površine jednog tijela, unesite poluprečnik ({{ui:Polumjer na kraju (mm, 0 = isti)}} za poluprečnik koji se mijenja duž ivice). Red rezultata kaže koliko je zaobljenje udaljeno od idealne kotrljajuće kugle, a poluprečnik koji ne stane se odbija uz imenovanu površinu. {{ui:Zaobljenje više ivica}} zaokružuje mnogo ivica u jednom koraku; označite {{ui:Uglovi (sferna krpa gdje se spajaju tri)}} za sferni ugao gdje se sastaju tri zaobljene ivice ravnih površina. Pogledajte [Slobodne površine (NURBS)](topic:nurbs-surfaces).
- **Zadebljavanje u čvrsto tijelo.** {{ui:Zadeblji u čvrsto tijelo}} u istom radnom prostoru daje površini debljinu; {{ui:Druga strana}} je raste na drugu stranu. Preklapanje ili samopresijecanje se odbija uz navedenu površinu i mjesto.
- **Tijela iz površina.** Odsječene površine mogu se spojiti unijom, oduzimanjem i presjekom i upisati u dio kao jedan korak poništavanja. STEP zapisuje tijelo kao jednu zatvorenu ljusku, a IGES kao jedno tijelo; oba se čitaju natrag kao tijelo. Ako se površine ne upare ivicu po ivicu, datoteka dobija zasebne površine, a statusna linija to kaže. Tijela se takođe mogu praviti u uređivaču čvorova; pogledajte [Uređivač čvorova](topic:nodes).
- **Zaobljenja iz skeniranja, rubna i promjenljiva.** Kad usklađujete površine sa skenom, traže se i rubna zaobljenja (torovi) i zaobljenja promjenljivog poluprečnika duž pretežno prave ivice, i navode se s poluprečnikom. Testirano je samo na izmišljenim skenovima.

### Sklopovi, dokumenti i veze

- **Veliki sklopovi.** Dijelovi koji su kopije dijele jednu mrežu, a {{ui:Prikazi}} › {{ui:Pojednostavljeni prikaz}} crta kutije da prikaz ostane pokretan (uključuje se sam za vrlo velike sklopove; odabir i zglobovi i dalje koriste prave dijelove). Stablo dijelova prikazuje prvih nekoliko redova i dugme {{ui:Prikaži još 700}} za ostale. Datoteke sklopova mogu sadržavati do 50.000 instanci i 100.000 zglobova. Pogledajte [Izrada sklopa](topic:build-assembly).
- **Dokumenti.** {{ui:Dokumenti…}} u grupi **Datoteka** otvara dijalog nad fasciklom projekta: odjava i prijava, slova revizija, stanja (u radu, za pregled, odobreno, zastarjelo), historija, gdje se koristi i lista materijala. Pogledajte [Dokumenti i revizije (trezor)](topic:documents-walkthrough).
- **Živa veza s Rhinom.** Jedna skripta, `cadcraft_link.py`, prati Rhino ili Grasshopper dokument i šalje u PartCraft samo ono što se promijenilo, gdje se uvezeni element ponovo gradi na novom obliku. Jednosmjerna je i treba Studio. Pogledajte [Živa veza s .3dm](topic:live-3dm-link).
- **Vidite kursore jedni drugih.** U zajedničkoj sesiji kursor svake osobe prikazuje se s njenim imenom i elementom koji je odabrala. Pogledajte [Rad uživo s drugima](topic:work-live).
- **Pogon.** Uključite dodatak Pogon u {{ui:Postavke}} › {{ui:Dodaci}}. Nakon što u {{ui:Izrada}} postprocesirate program, njegov jezičak može {{ui:Dodaj u red poslova u pogonu}} ili {{ui:Spasi kao datoteku posla}}. Nikad ne šalje niti pokreće mašinu.

### Analiza i dijelovi

- **Dodatak Solid FEM.** Uključite {{ui:Solid FEM}} u {{ui:Postavke}} › {{ui:Dodaci}} (isključen je dok ga ne uključite) i na desnom panelu se pojavljuje jezičak {{ui:Solid FEM}}. {{ui:Izradi mrežu dijela}}, odaberite fiksne površine i opterećenja u 3D prikazu, {{ui:Riješi}}, i nacrtajte pomjeranje, von Mises naprezanje ili oblik moda s {{ui:Prikaži na modelu}}. Pogledajte [Solid FEM: provjera naprezanja](topic:solid-fem-check).
- **Luk u skicama, na deset načina.** Strelica pored {{ui:Luk}} na alatnoj traci skice navodi: 3-tačke, Početak Centar Kraj, Početak Centar Ugao, Početak Centar Dužina, Početak Kraj Ugao, Početak Kraj Smjer, Početak Kraj Poluprečnik, Centar Početak Kraj, Centar Početak Ugao, Centar Početak Dužina i Nastavak. Pogledajte [Nacrtajte luk na deset metoda](topic:sketch-arc-methods).
- **Britanski čelični profili.** Zavarene konstrukcije mogu koristiti 976 britanskih profila (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); unesite veličinu kao `305x165x40 UB`. Pogledajte [Konstruktivni elementi](topic:structural-members).

### Štampanje

- **Faza štampanja.** Dugme {{ui:Faza štampanja}} na alatnoj traci (dodatak 3D štampa, uključen zadano) stavlja tijela vašeg dijela na isprekidanu podlogu: {{ui:Ravnaj}}, {{ui:Okreni za 90°}}, {{ui:Rasporedi na podlogu}}, {{ui:Smjesti sve na podlogu}}, {{ui:Pregled slojeva}}, zatim {{ui:Pošalji 3D štampaču}} preko USB-a, Klipper (Moonraker), OctoPrint ili PrusaLink. Ništa se ne šalje dok ne potvrdite, a vaš dio se nikad ne mijenja. Za STL ili 3MF datoteku umjesto toga, pogledajte [Pripremite dio za 3D štampu](topic:print-3d).
- **Štampanje smolom.** Dodaci u {{ui:Postavke}} › {{ui:Dodaci}}, svi isključeni dok ih ne uključite: slajser za smolu, test ekspozicije, i formati datoteka Elegoo GOO, SL1, Chitubox CBDDLP/CTB i Anycubic. Slajsanje radi na pozadinskoj niti, pa stranica ostaje odzivna.

## U svim aplikacijama

- Svaka pomoćna napomena pri lebdenju je Bootstrap tooltip.
- Početni savjet ima dugme za zatvaranje; ostaje zatvoren.
- Red jezičaka na panelu koji ne stane klizi u stranu umjesto da se odsiječe.
- Naslov kartice u pregledaču prikazuje ime otvorenog dokumenta prije PartCraft | CadCraft.
- {{ui:Postavke}} prikazuje raspored radnog prostora {{ui:Raspored}} kao padajući izbor, a polje za jezik navodi svaki jezik koji verzija ima.
- Težina i Temperatura su vrste jedinica u postavkama Jedinica.

## Ispravljeno

- Meni luka u skici sada navodi svaku metodu.
- Traka dodataka i naslov kartice pregledača ispravljeni su 2026-11-09.

## Iskreno o ograničenjima

- Tačan STEP je ponovo pročitan u OpenCascade (ispravna tijela, zapremine jednake onima izračunatim ručno). Još nije otvoren u svakom CAD ili CAM programu, a sklop se ne zapisuje kao tačan STEP.
- Ništa nije odštampano na pravom štampaču. Slajsovi, G-kod i datoteke smole provjereni su našim vlastitim programima ili zamjenskim štampačem; nijedan format smole nije učitan na štampaču, a veličine i ekspozicije štampača su polazne tačke.
- Solid FEM je linearan, izotropan i elastičan, jedan materijal po dijelu, bez kontakta, popuštanja ili izvijanja. Naprezanje na fiksnim površinama i oštrim uglovima zavisi od mreže. To je pomoćno sredstvo za provjeru, a ne pregled inženjera.
- Vremena za velike sklopove dolaze s servera bez GPU-a; okvir pune detaljnosti od 20.000 dijelova i dalje traje sekunde.
- Zaobljenja rade na parovima površina; nema opšteg spoja tjemena niti zaobljenja između površina koje se ne sastaju.
- Veza s Rhinom nikad nije pokrenuta unutar pravog Rhina ili Grasshoppera. Dokumenti su isprobani u dva programa nad jednom fasciklom, ne od dvije osobe preko mrežnog dijela.
- Usklađivanje površina sa stvarnim skenom nije ručno provjereno. Jezici osim engleskog su mašinski nacrti.
- Windows instalateri nisu potpisani kodom, a macOS disk slika nije notarizovana. Pogledajte [Rješavanje problema](topic:troubleshooting).

Raniji promjene su u [Šta je novo u 0.7](topic:whats-new-0-7).

## Ranije: 0.8 i 0.8.1

Ovo je šta se promijenilo u PartCraftu 0.8 i 0.8.1, u odnosu na 0.7. Simulacija odgovara dok uređujete i kaže šta prvo popušta, sklopovi dobijaju studije kretanja, a novi radni prostori prave slobodne površine i dijelove dimenzionisane prema fizici. 0.8.1 je manje izdanje s ispravkama.

### Novo

**Simulacija**

- **Ažuriraj dok uređujem.** Označite {{ui:Ažuriraj dok uređujem}} u bloku Riješi, i odgovori prate vaše izmjene. Promijenite dimenziju, opterećenje ili materijal i brzi odgovor, dobijen s elementima četiri puta većim, pojavljuje se odmah; kad stanete na otprilike sekundu, sopstveni profinjeni odgovor studije zamjenjuje ga. Rezultati kažu koji gledate. Na čeličnoj konzoli brzi odgovor je bio unutar 1 % po progibu i oko 4 % po naprezanju u odnosu na profinjeni. Pogledajte [Provjera naprezanja i progiba](topic:simulation#update-while-you-edit-live).
- **Šta prvo popušta.** Za statičku ili izvijajuću studiju, {{ui:Šta prvo popušta?}} u bloku **Testiraj granicu** skalira opterećenja dok dio ne popusti. Navodi, od najgoreg, faktor opterećenja do prvog popuštanja (s crvenom oznakom gdje naprezanje vrhuni) i faktor opterećenja do izvijanja. Faktor ispod 1 znači da dio već popušta pod opterećenjem, a Problemi prikazuju grešku. Faktori dolaze iz linearne studije, pa su dobri onoliko koliko je ona. Pogledajte [Provjera naprezanja i progiba](topic:simulation#find-out-what-breaks-first-break-it).
- **Popuštanje i kontakt.** Još dvije vrste studija: nelinearna, u kojoj materijal prati svoju pravu liniju do napona tečenja pa blaži nagib, s prikazanom plastičnom deformacijom, i kontaktna, u kojoj odvojeni dijelovi guraju jedan drugi (bez trenja) ili ostaju zalijepljeni (vezani). Korak opterećenja koji se ne smiri, ili dijelovi koji previše utonu jedan u drugi, prikazuju se u panelu Problemi. Trenje, veliko klizanje, velike rotacije, velike deformacije i zamor se ne rješavaju. Pogledajte [Provjera naprezanja i progiba](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Decke za CalculiX.** {{ui:Izvoz}} › {{ui:CalculiX deck (.inp)}} čuva studiju za CalculiX, zaseban program koji sami instalirate i pokrećete; {{ui:Izvoz}} › {{ui:CalculiX rezultati (.frd)}} čita njegovu datoteku rezultata natrag na istu mrežu. PartCraft nikad ne pokreće taj program i kaže to ako se dio promijenio otkako je deck sačuvan.

**Sklopovi**

- **Studije kretanja.** {{ui:Sklop}} › {{ui:Kretanje}} pokreće vrijednost jednog zgloba tokom vremena koje zadate (stalna brzina, ublažena, sinusna ili naprijed i nazad), postavlja sklop u svakom koraku s njegovim zglobovima i zatvorenim petljama, i izvještava šta se sudara i koliko se dijelovi približavaju. {{ui:Dodaj tačku}} crta položaj, brzinu i ubrzanje tačke, vrijednost zgloba i zazor naspram vremena; {{ui:Spasi CSV}} i {{ui:Spasi grafikon}} ih zapisuju. Nakon {{ui:Pokreni}}, traka Korak kroz pokretanje pomjera sklop na bilo koji korak. Postavke studije čuvaju se u datoteci sklopa. Brzina i ubrzanje dolaze iz zabilježenih položaja, pa koristite više koraka ako oštar vrh izgleda nizak. Pogledajte [Provjera sklopa za sudare i kretanje](topic:check-assembly#a-motion-study).

**Površine i dijelovi iz fizike**

- **Radni prostor Površine.** Izaberite {{ui:Površine}} u polju {{ui:Radni prostor}} za NURBS krive i površine uz dio: {{ui:Kriva}}, {{ui:Prelaz}}, {{ui:Provlačenje}}, {{ui:Poklapanje}} i {{ui:Zebra}}, s kontinuitetom (G0, G1 ili G2) izmjerenim na tačnim površinama i ivicom koja je lošija nego što ste tražili, navedenom u Problemima s popravkom poklapanja. {{ui:Glađenje}} mjeri linije omotača za infleksije i skokove zakrivljenosti i ponovo gradi nepravilne unutar vaše tolerancije. Površine se čuvaju u datoteci dijela i ne mijenjaju elemente dijela. Pogledajte [Slobodne površine (NURBS)](topic:nurbs-surfaces).
- **Radni prostor Inženjer.** Izaberite {{ui:Inženjer}} u polju radnog prostora, odaberite generator i kliknite {{ui:Novo}}: skripta dimenzioniše dio prema onome što mora raditi (prenijeti toplotu, protoke, pritisak, materijal, proces štampanja) udžbeničkim formulama i gradi ga, zatim vraća brojeve koje je koristila s njihovim izvorima, svoje provjere proizvodnje i datoteke za analitičke alate. Iste ulazne vrijednosti daju isti dio na svakom računaru. Generator se čuva u dijelu, a otvaranje dijela nikad ne pokreće skriptu. Pogledajte [Dijelovi iz fizike: generatori](topic:engineer-generators) i [Pisanje generatora](topic:write-a-generator).

**Skice, crteži i izrada**

- **Skica iz fotografije.** {{ui:Elementi}} › {{ui:Više}} › {{ui:Skica iz fotografije…}} prati sliku ravnog dijela na običnoj podlozi (obris i rupe) ili crtež olovkom u linije, lukove i kružnice. Date jednu dužinu, provjerite pregled i napravite skicu. Pogledajte [Osnove skiciranja](topic:sketch-basics#a-sketch-from-a-photo).
- **Razmjera i podjela za štampanje.** {{ui:Izvoz}} › {{ui:Razmjera za štampanje (STL ili 3MF)…}} skalira po osi bez mijenjanja dijela, na primjer za dodatak za skupljanje. {{ui:Izvoz}} › {{ui:Podjela za štampanje (zip s dijelovima)…}} siječe dio prevelik za vašu podlogu na numerisane dijelove spojene klinovima, ključevima, lastinim repovima, rupama za klinove ili džepovima za magnete. Pogledajte [Štampanje u 3D](topic:print-3d).
- **Gniježđeni listovi u G-kod.** {{ui:Izvoz}} › {{ui:Gniježđeni listovi u G-kod}} čita gniježđeni DXF i pravi jedan program po listu kroz postprocesor koji izaberete: prvo rupe i izrezi, zatim obrisi. Ne planira ulaze, redoslijed rezanja niti zajedničke ivice. Pogledajte [Raspoređivanje ravnih dijelova na listove](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Crteži koji više rade sami.** {{ui:List}} › {{ui:Automatski}} bira najmanji A-format lista koji stane pogled(e) u najvećoj standardnoj razmjeri do 1:1. {{ui:Kotiraj rupe}} stavlja oznaku centra na svaku rupu, jednu oznaku po veličini i položaje od donjeg lijevog ugla pogleda. Pogledajte [Napravite crtež](topic:drawing-pdf).

**U svim aplikacijama**

- **Jezici.** Aplikacije dolaze na 54 jezika. Oni osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik.
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} bira Prelomi (kao prije), 2 reda ili 1 red; traka koja ne stane klizi u stranu. Traka elemenata PartCrafta prikazuje najkorišteniji alat veliko, a varijante skriva iza dugmeta s podjelom.
- **Povežite svoj AI.** Studio je središte za povezivanje asistenta po vašem izboru sa svih osam aplikacija, s dozvolom samo za čitanje, prijedlog ili izmjenu po aplikaciji. Povezan asistent može dimenzionisati dio iz rečenice, kao nosač za opterećenje, pokazati svoj rad i svaku provjeru, i napraviti ga; izvještava šta nije provjerio (koncentraciju naprezanja, zamor, puzanje u plastici). Pogledajte [Koristite PartCraft s AI asistentom](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Zamrzavanje kursora preko cijelog ekrana.** Pokazivač pri lebdenju sada je ograničen. Uzrok je naša najbolja procjena i nije potvrđen s osobom koja je prijavila.
- **Jezik u vrijeme rada.** Studio i zapakovana izdanja mogu mijenjati jezik dok rade; ranije su bila samo na engleskom. Nije još testirano na svakoj platformi: javite nam ako se jezik ne mijenja.

### Još nije u ovoj verziji

- Povežite svoj AI nije završeno: povezivanje jednim klikom unutar Studija, hostovani konektor za AI u pregledaču, vlastiti API ključ unutar Studija i objavljeni MCP paket nisu obećani. Studio nema vlastiti AI.
- Studio nije potpisan kodom: Windows može upozoriti, a macOS traži desni klik pa Otvori. Pogledajte [Rješavanje problema](topic:troubleshooting).
- Lanci tolerancija su još u jednom smjeru: vidi [Lanci tolerancija](topic:tolerance-stackup).
- Ostalo je navedeno u [Šta još nije izgrađeno](topic:not-built-yet).

Raniji promjene su u [Šta je novo u 0.7](topic:whats-new-0-7).
