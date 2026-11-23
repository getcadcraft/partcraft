---
title: Šta je novo u 0.9 (ranije)
summary: PartCraft 0.9 dodaje zaobljenja između površi i zadebljavanje u puna tela, sklopove sa hiljadama delova, trezor dokumenata sa revizijama, dodatak Solid FEM za naprezanje, deset metoda lukova, britanske čelične profile, fazu štampanja i dodatke za štampu smolom.
keywords: novo 0.9, ranije izdanje, šta je novo, beleške o izdanju, dnevnik promena, zaobljenje između površi, kotrljajuća lopta, zaobljenje više ivica, zadebljaj, puno telo iz površi, step ljuska, iges puno telo, skeniranje zaobljenja, veliki sklop, pojednostavljen prikaz, 20000 delova, dokumenti, trezor, izvlačenje, revizija, gde se koristi, Rhino veza, grasshopper, 3dm, kursori, radna hala, red poslova, solid fem, konačni elementi, fon mizes, prirodna frekvencija, metode lukova, 3-tačkasti luk, britanski čelični profili, plava knjiga, faza štampanja, smola, goo, ctb, podloga, položi ravno, šta se prvo lomi, faktor opterećenja, nelinearno, tečenje, plastična deformacija, kontakt, calculix, studija kretanja, zazor, površi, nurbs, poravnaj, trup, zebra, inženjer, generator, generisano telo, skica iz fotografije, razmera za štampanje, podeli za štampanje, skupljanje, raspoređeni listovi, g-kod, crtež, kota rupa, asistent, mcp, jezici, redovi alatki
from: 1dafd7c8
---

Ovo je šta se promenilo u PartCraft 0.9, u odnosu na 0.8.1. Slobodne površi se sada spajaju u puna tela, sklopovi sa hiljadama delova ostaju upotrebljivi, trezor dokumenata čuva revizije, a dodatak Solid FEM proverava naprezanje u delu. Svaka stavka kaže gde je naći.

## Novo u 0.9.1

- **Izvoz tačnog STEP-a.** {{ui:Izvezi}} › {{ui:STEP AP242 (tačno čvrsto telo)}} i {{ui:STEP AP214 (tačno čvrsto telo)}} sada rade. Rupe, izbočine, zaobljenja, konusi, sfere i torusi pišu se na svojim pravim površima sa pravim krugovima kao ivicama, pa drugi CAD ili CAM program rupu može prepoznati kao rupu. Bočne strane splajna, modelovani navoji i uvezene mreže ostaju ravne fasete u istom telu. Vidi [Izvoz za štampanje, STEP i DXF](topic:export-files#for-other-cad-programs-step).
- **STEP unutra, tačan STEP napolje.** STEP datoteka koju otvorite zadržava svoje ravne površi, cilindre, konuse, sfere i torusе, pa {{ui:Izvezi}} › {{ui:STEP AP242 (tačno čvrsto telo)}} piše ih nazad kao prave površi, a ne fasete: nosač dobavljača sa rupama za zavrtnje izlazi sa istim površima sa kojima je ušao, plus šta god ste u njega isekli. Splajn, provučene i rotirane površi iz datoteke ostaju fasete, kao i tela iz STL, OBJ i 3MF. Ponovo otvorite STEP datoteku za deo sačuvan ranije. Vidi [Otvaranje STEP datoteke i nadogradnja](topic:import-step).
- **Pravi krugovi u DXF-u površi.** {{ui:Izvezi}} › {{ui:DXF skice ili ravne površi}} sa izabranom ravnom površi sada piše okrugle rupe kao krugove, sa sopstvenim centrom i poluprečnikom rupe, za laserski, plazma ili vodenomlazni sto. Ostale okrugle ivice su i dalje fasete.
- **Tačan STEP za radionicu.** U {{ui:Proizvodnja}}, {{ui:Tačan STEP (radne koordinate)}} piše deo sa početkom u radnom početku postavke i Z duž ose alata, koordinatama koje koristi G-kod. Vidi [Pravljenje putanja alata i G-koda](topic:manufacture#exact-step-for-the-shop).

## Novo

### Površi i puna tela

- **Zaobljenje između strana.** Izaberite {{ui:Površi}} u polju {{ui:Radni prostor}}, pa {{ui:Zaobljenje između strana}}. Izaberite dve površi jednog tela, unesite poluprečnik (i {{ui:Poluprečnik na kraju (mm, 0 = isti)}} za poluprečnik koji se menja duž ivice). Red rezultata kaže koliko je zaobljenje udaljeno od idealne kotrljajuće lopte, a poluprečnik koji ne staje se odbija uz navođenje površi. {{ui:Zaobljenje više ivica}} zaobljuje mnogo ivica u jednom koraku; označite {{ui:Uglovi (sferni isečak gde se tri spajaju)}} za sferni ugao gde se spajaju tri zaobljene ivice ravnih površi. Vidi [Slobodne površi (NURBS)](topic:nurbs-surfaces).
- **Zadebljaj u puno telo.** {{ui:Zadebljaj u puno telo}} u istom radnom prostoru daje površi debljinu; {{ui:Druga strana}} je širi na drugu stranu. Preklop ili samopresecanje se odbija uz navođenje površi i mesta.
- **Puna tela iz površi.** Obrezane površi mogu se spojiti sa unija, oduzimanje i presek i ugraditi u deo kao jedan korak poništavanja. STEP piše puno telo kao jednu zatvorenu ljusku, a IGES kao jedno telo; oba se čitaju nazad kao puno telo. Ako se površi ne poklapaju ivicu po ivicu, datoteka dobija zasebne površi i statusna linija to kaže. Puna tela mogu se praviti i u uređivaču čvorova; vidi [Uređivač čvorova](topic:nodes).
- **Obodna i promenljiva zaobljenja u skenovima.** Kada površi prilagođavate skenu, traže se i obodna zaobljenja (torusi) i zaobljenja promenljivog poluprečnika duž prilično prave ivice i navode se sa svojim poluprečnikom. Ispitano je samo na izmišljenim skenovima.

### Sklopovi, dokumenti i veze

- **Veliki sklopovi.** Delovi koji su kopije dele jednu mrežu, a {{ui:Pogledi}} › {{ui:Pojednostavljen prikaz}} crta kutije da prikaz ostane pokretan (samo se uključuje za vrlo velike sklopove; biranje i spojevi i dalje koriste prave delove). Stablo delova prikazuje prve redove i dugme {{ui:Prikaži još 700}} za ostale. Datoteke sklopa mogu imati do 50,000 instanci i 100,000 spojeva. Vidi [Pravljenje sklopa](topic:build-assembly).
- **Dokumenti.** {{ui:Dokumenti…}} u grupi **Datoteka** otvara dijalog nad fasciklom projekta: izvlačenje i vraćanje, slova revizija, stanja (u radu, za pregled, odobreno, zastarelo), istorija, gde se koristi i spisak materijala. Vidi [Dokumenti i revizije (trezor)](topic:documents-walkthrough).
- **Živa Rhino veza.** Jedna skripta, `cadcraft_link.py`, prati Rhino ili Grasshopper dokument i gura u PartCraft samo ono što se promenilo, gde se uvezena osobina ponovo gradi na novom obliku. Veza ide u jednom smeru i potrebna je Studio. Vidi [Živa .3dm veza](topic:live-3dm-link).
- **Vidite tuđe kursore.** U zajedničkoj sesiji kursor svake osobe prikazuje se sa njenim imenom i osobinom koju je izabrala. Vidi [Radite uživo sa drugima](topic:work-live).
- **Radna hala.** Uključite dodatak Radna hala u {{ui:Podešavanja}} › {{ui:Dodaci}}. Posle nego što pošaljete program u {{ui:Proizvodnja}}, njegova kartica može {{ui:Dodaj u red poslova hale}} ili {{ui:Sačuvaj kao datoteku posla}}. Nikad ne šalje niti pokreće mašinu.

### Analiza i delovi

- **Dodatak Solid FEM.** Uključite {{ui:Solid FEM}} u {{ui:Podešavanja}} › {{ui:Dodaci}} (isključen je dok to ne uradite) i pojaviće se kartica {{ui:Solid FEM}} u desnom panelu. {{ui:Mesh the part}}, izaberite učvršćene površi i opterećenja u 3D prikazu, {{ui:Reši}}, i nacrtajte pomeranje, naprezanje po fon Mizesu ili oblik moda sa {{ui:Prikaži na modelu}}. Vidi [Solid FEM: provera naprezanja](topic:solid-fem-check).
- **Luk u skicama, na deset načina.** Strelica pored {{ui:Luk}} u traci skice navodi 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length i Continue. Vidi [Nacrtajte luk na deset metoda](topic:sketch-arc-methods).
- **Britanski čelični profili.** Konstrukcijski elementi mogu koristiti 976 britanskih profila (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); unesite veličinu kao `305x165x40 UB`. Vidi [Konstrukcijski elementi](topic:structural-members).

### Štampanje

- **Faza štampanja.** Dugme {{ui:Faza štampanja}} u traci (dodatak 3D štampa, uključen podrazumevano) stavlja tela vašeg dela na isprekidanu podlogu: {{ui:Položi ravno}}, {{ui:Okreni 90°}}, {{ui:Rasporedi na podlogu}}, {{ui:Uklopi sve na podlogu}}, {{ui:Pregled slojeva}}, zatim {{ui:Pošalji 3D štampaču}} preko USB-a, Klipper (Moonraker), OctoPrint ili PrusaLink. Ništa se ne šalje dok ne potvrdite, a vaš deo se nikad ne menja. Za STL ili 3MF datoteku, vidi [Pripremite deo za 3D štampu](topic:print-3d).
- **Štampa smolom.** Dodaci u {{ui:Podešavanja}} › {{ui:Dodaci}}, svi isključeni dok ih ne uključite: slajser za smolu, test ekspozicije i formati datoteka Elegoo GOO, SL1, Chitubox CBDDLP/CTB i Anycubic. Slajsovanje radi na pozadinskoj niti, pa stranica ostaje odzivna.

## U svim aplikacijama

- Svaka napomena pri prelasku mišem je Bootstrap tooltip.
- Početni savet ima dugme za zatvaranje; ostaje zatvoren.
- Red kartica panela koji ne staje se pomera u stranu umesto da bude odsečen.
- Kartica pregledača prikazuje ime otvorenog dokumenta pre PartCraft | CadCraft.
- {{ui:Podešavanja}} prikazuje {{ui:Raspored}} radnog prostora kao padajući spisak izbora, a polje za jezik navodi svaki jezik koji verzija ima.
- Težina i temperatura su vrste jedinica u podešavanjima jedinica.

## Ispravljeno

- Meni Luk u skici sada navodi svaku metodu.
- Traka dodataka i naslov kartice pregledača ispravljeni su 2026-11-09.

## Iskrena ograničenja

- Tačan STEP je pročitan u OpenCascade (ispravna tela, zapremine jednake onima izračunatim ručno). Još nije otvoren u svakom CAD ili CAM programu, a sklop se ne piše kao tačan STEP.
- Ništa nije odštampano na pravom štampaču. Slajsovanje, G-kod i datoteke smole pročitali su naši programi ili zamenski štampač; nijedan format za smolu nije učitan na štampaču, a veličine i ekspozicije štampača su polazne vrednosti.
- Solid FEM je linearan, izotropan i elastičan, jedan materijal po delu, bez kontakta, tečenja ili izvijanja. Naprezanje na učvršćenim površima i oštrim uglovima zavisi od mreže. To je pomoćno sredstvo za proveru, a ne pregledao ga je inženjer.
- Vremena za velike sklopove dolaze sa servera bez GPU-a; pun prikaz kadra sa 20,000 delova i dalje traje nekoliko sekundi.
- Zaobljenja rade na parovima površi; nema opšteg vrhovnog spoja i nema zaobljenja između površi koje se ne dodiruju.
- Rhino veza nikad nije radila unutar pravog Rhino-a ili Grasshopper-a. Dokumenti su isprobani sa dva programa nad jednom fasciklom, a ne sa dve osobe na mrežnoj deljenoj fascikli.
- Prilagođavanje površi pravom skenu nije ručno proveren. Jezici osim engleskog su mašinski nacrti.
- Windows instalateri nisu potpisani kodom, a macOS disk slika nije notarizovana. Vidi [Rešavanje problema](topic:troubleshooting).

Ranije promene su u [Šta je novo u 0.7](topic:whats-new-0-7).

## Ranije: 0.8 i 0.8.1

Ovo je šta se promenilo u PartCraft 0.8 i 0.8.1, u odnosu na 0.7. Simulacija odgovara dok menjate, sklopovi dobijaju studije kretanja, a novi radni prostori prave slobodne površi i delove dimenzionisane po fizici. 0.8.1 je mali popravni izdanje.

### Novo

**Simulacija**

- **Ažuriraj dok menjam.** Označite {{ui:Ažuriraj dok menjam}} u bloku Reši i odgovori prate vaše izmene. Promenite kotu, opterećenje ili materijal i brz odgovor, dobijen sa elementima četiri puta većim, pojavi se odmah; kada stanete na oko sekund, sopstveni precizniji odgovor studije zamenjuje ga. Rezultati kažu koji od njih gledate. Na čeličnoj konzoli brzi odgovor je bio unutar 1 % za otklon i oko 4 % za naprezanje u odnosu na precizni. Vidi [Provera naprezanja i otklona](topic:simulation#update-while-you-edit-live).
- **Šta se prvo lomi.** Za statičku ili studiju izvijanja, {{ui:Šta se prvo lomi?}} u bloku **Slomi ga** skalira opterećenja dok deo ne popusti. Navodi, od najgoreg, faktor opterećenja do prvog tečenja (sa crvenom oznakom gde naprezanje vrhuni) i faktor opterećenja do izvijanja. Faktor ispod 1 znači da deo već popušta pod opterećenjem, a Problemi prikazuju grešku. Faktori dolaze iz linearne studije, pa su dobri koliko i ona. Vidi [Provera naprezanja i otklona](topic:simulation#find-out-what-breaks-first-break-it).
- **Tečenje i kontakt.** Dve nove vrste studija: nelinearna, gde materijal prati svoju pravu liniju do napona tečenja, a zatim blažu nagib, sa prikazanom plastičnom deformacijom; i kontaktna, gde se odvojeni delovi guraju (bez trenja) ili ostaju slepljeni (vezani). Korak opterećenja koji se ne može smiriti, ili delovi koji se previše utisnu jedan u drugi, prikazuju se u panelu Problemi. Trenje, veliko klizanje, velike rotacije, veliki otkloni i zamor se ne rešavaju. Vidi [Provera naprezanja i otklona](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Ulazi za CalculiX.** {{ui:Izvezi}} › {{ui:CalculiX ulaz (.inp)}} čuva studiju za CalculiX, poseban program koji sami instalirate i pokrećete; {{ui:Izvezi}} › {{ui:CalculiX rezultati (.frd)}} čita njegovu datoteku rezultata nazad na istu mrežu. PartCraft nikad ne pokreće taj program, i kaže to ako se deo promenio otkako je ulaz sačuvan.

**Sklopovi**

- **Studije kretanja.** {{ui:Sklop}} › {{ui:Kretanje}} pokreće vrednost jednog spoja tokom vremena koje zadate (stalna brzina, ublažena, sinusna ili napred i nazad), postavlja sklop u svakom koraku sa njegovim spojevima i zatvorenim petljama, i prijavljuje šta se sudara i koliko se delovi približe. {{ui:Dodaj tačku}} crta položaj tačke, brzinu i ubrzanje, vrednost spoja i zazor u vremenu; {{ui:Sačuvaj CSV}} i {{ui:Sačuvaj grafikon}} ih upisuju. Posle {{ui:Pokreni}}, traka Korak kroz izvođenje pomera sklop na bilo koji korak. Podešavanja studije čuvaju se u datoteci sklopa. Brzina i ubrzanje dolaze iz zabeleženih položaja, pa koristite više koraka ako oštar vrh izgleda nizak. Vidi [Provera sklopa za sudare i kretanje](topic:check-assembly#a-motion-study).

**Površi i delovi iz fizike**

- **Radni prostor Površi.** Izaberite {{ui:Površi}} u polju {{ui:Radni prostor}} za NURBS krive i površi pored dela: {{ui:Kriva}}, {{ui:Prelaz}}, {{ui:Provlačenje}}, {{ui:Poklapanje}} i {{ui:Zebra}}, sa kontinuitetom (G0, G1 ili G2) izmerenim na tačnim površima, i ivica koja je lošija od tražene prikazuje se u Problemima sa popravkom Poklapanje. {{ui:Poravnaj}} meri linije trupa za prevojne tačke i skokove krivine i ponovo gradi nepravilne u okviru vaše tolerancije. Površi se čuvaju u datoteci dela i ne menjaju osobine dela. Vidi [Slobodne površi (NURBS)](topic:nurbs-surfaces).
- **Radni prostor Inženjer.** Izaberite {{ui:Inženjer}} u birač radnog prostora, izaberite generator i kliknite {{ui:Nova}}: skripta dimenzioniše deo prema onome što mora da radi (prenos toplote, protoci, pritisak, materijal, proces štampanja) pomoću udžbeničkih formula i gradi ga, zatim vraća brojeve koje je koristila sa njihovim izvorima, svoje proverе za proizvodnju i datoteke za alate za analizu. Isti ulazi daju isti deo na bilo kom računaru. Generator se čuva u delu, a otvaranje dela nikad ne pokreće skriptu. Vidi [Delovi iz fizike: generatori](topic:engineer-generators) i [Napišite generator](topic:write-a-generator).

**Skiciranje, crteži i pravljenje**

- **Skica iz fotografije.** {{ui:Osobine}} › {{ui:Više}} › {{ui:Skica iz fotografije…}} prati sliku ravnog dela na običnoj podlozi (obris i rupe) ili crtež olovkom u linije, lukove i krugove. Zadajte jednu dužinu, proverite pregled i napravite skicu. Vidi [Osnove skiciranja](topic:sketch-basics#a-sketch-from-a-photo).
- **Razmera i podela za štampanje.** {{ui:Izvezi}} › {{ui:Razmera za štampanje (STL ili 3MF)…}} skalira po osi bez menjanja dela, na primer za dozvolu skupljanja. {{ui:Izvezi}} › {{ui:Podeli za štampanje (zip sa delovima)…}} seče deo prevelik za vašu podlogu na numerisane delove spojene klinovima, lastinim repovima, drvenim čepovima ili udubljenjima za magnete. Vidi [Štampajte u 3D](topic:print-3d).
- **Ugnježdeni listovi u G-kod.** {{ui:Izvezi}} › {{ui:Ugnježdeni listovi u G-kod}} čita ugnježdeni DXF i pravi jedan program po listu kroz postprocesor koji izaberete: prvo rupe i isečci, zatim spoljni obrisi. Ne planira ulaze, redosled sečenja ili zajedničke ivice. Vidi [Raspoređivanje ravnih delova na listovima](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Crteži koji više rade sami.** {{ui:List}} › {{ui:Automatski}} bira najmanji list A formata koji drži poglede na najvećoj standardnoj razmeri do 1:1. {{ui:Kotiraj rupe}} stavlja oznaku centra na svaku rupu, jedan pozivni natpis po veličini i položaje od donjeg levog ugla pogleda. Vidi [Napravite crtež](topic:drawing-pdf).

**U svim aplikacijama**

- **Jezici.** Aplikacije dolaze na 54 jezika. Oni osim engleskog su mašinski nacrti dok ih izvorni govornik ne pročita.
- **Redovi alatki.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatki}} bira Wrap (kao ranije), 2 reda ili 1 red; traka koja ne staje se pomera u stranu. Traka osobina PartCraft-a prikazuje najčešće korišćen alat velik i sakriva varijante iza dugmeta sa podelom.
- **Povežite svoj AI.** Studio je središte za povezivanje sopstvenog asistenta sa svih osam aplikacija, sa dozvolom samo za čitanje, predlaganje ili izmenu po aplikaciji. Povezani asistent može dimenzionisati deo iz rečenice, na primer nosač za opterećenje, prikazati svoj rad i svaku proveru, i izgraditi ga; prijavljuje šta nije proverio (koncentraciju naprezanja, zamor, puzanje plastike). Vidi [Koristite PartCraft sa AI asistentom](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Zamrzavanje kursora preko celog ekrana.** Pregled pri prelasku mišem sada je ograničen po brzini. Uzrok je naše najbolje tumačenje i nije potvrđen sa osobom koja ga je prijavila.
- **Jezik u vreme rada.** Studio i spakovana izdanja mogu da promene jezik dok rade; ranije su bila samo na engleskom. Ovo još nije testirano na svim platformama: javite nam ako se jezik ne menja.

### Još nije u ovoj verziji

- Povezivanje AI-ja nije završeno: povezivanje jednim klikom unutar Studija, hostovani konektor za AI u pregledaču, sopstveni API ključ unutar Studija i objavljeni MCP paket nisu obećani. Studio nema sopstveni AI.
- Studio nije potpisan kodom: Windows može upozoriti, a macOS traži desni klik pa Otvori. Vidi [Rešavanje problema](topic:troubleshooting).
- Zbirovi tolerancija su i dalje u jednom pravcu: vidi [Zbirovi tolerancija](topic:tolerance-stackup).
- Ostalo je navedeno u [Šta još nije napravljeno](topic:not-built-yet).

Ranije promene su u [Šta je novo u 0.7](topic:whats-new-0-7).
