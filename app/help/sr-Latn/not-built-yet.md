---
title: Šta još nije napravljeno
summary: Sve što ova verzija PartCraft-a još ne radi, od uvrtajućih provlačenja do prikaza u inčima, kota crteža i podsklopova, sa onim što treba raditi umesto toga danas.
keywords: nedostaje, još nije, ograničenja, ograničenje, plan razvoja, tačno jezgro, zaobljenje, obaranje ivice, ljuska, provlačenje, prelaz, uvoz STEP, simulacija, proizvodnja, uvrtajuće provlačenje, kraj tangente prelaza, zaobljenje površi, jednačine, inči, kote crteža, podsklopovi, oblak, tablet, telefon
from: 97b10a29
---

PartCraft je rana verzija. Ova stranica navodi šta još ne radi, da ne biste ga tražili, i šta da uradite umesto toga danas. Ništa ovde nema datum.

## Potrebno je tačno jezgro

Ova verzija pravi svaki deo jezgrom mreže (vidi [Jezgro mreže](topic:solid-kernels)). Sve dole potrebuje tačno geometrijsko jezgro, koje ova verzija još nema. Delovi sačuvani s ovim osobinama i dalje se otvaraju: osobine ostaju u istoriji, obeležene kao nenapravljene, i čuvaju se pri snimanju.

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| {{ui:Zaobljenje}} i {{ui:Obaranje ivice}} na okruglim ivicama; zaobljenja čiji se poluprečnik menja duž ivice; zaobljenja glatko stopljena tamo gde se spajaju (jezgro mreže ih spaja pod uglom) | Zaobljenje i Obaranje ivice rade na pravim ivicama između ravnih površi; ostale uglove zaobljujte u skici pre izvlačenja ({{ui:Zaobljenje}} u skici, {{key:F}}) |
| {{ui:Ljuska}} otvaranje zakrivljenih površi; zidovi različite debljine | Otvorite ravne površi; dodajte materijal izvlačenjima tamo gde zid mora biti deblji |
| {{ui:Provlačenje}}, {{ui:Prelaz}}, {{ui:Nagib}} na zakrivljenim površima; izvlačenje do površi, sledeće površi ili temena; konična izvlačenja | Izvucite ili rotirajte, po koracima gde treba; izvucite do dubine koju izmerite |
| {{ui:Rebro}}, {{ui:Osnovna prirubnica}}, {{ui:Ivična prirubnica}} i ravni šabloni | Izvucite ploču ili profil rebra |
| Površi: završna obrada {{ui:Forma}} u deo, {{ui:Zakrpa}}, {{ui:Prelaz površine}}, {{ui:Gordonova površina}}, {{ui:Sašij}}, {{ui:Zadebljaj}}, {{ui:Pomak površine}}, {{ui:Produži površinu}}, {{ui:Skrati površinu}} | Nije dostupno |
| Više tela: {{ui:Spajanje}}, {{ui:Pomeri telo}}, {{ui:Skaliraj telo}}, {{ui:Niz po putanji}}, osobine koje prave novo telo | Jedno puno telo; šabloni i ogledalo kopiraju osobine |
| Skice, ravni, ose i tačke na površima koje samo tačno jezgro može da nađe (površ nastala zaobljenjem, zid rupe, površ uvezenog tela) | Skicirajte na osnovnim ravnima, referentnim ravnima i ravnim površima izvlačenja i rotacija |
| Ishod generativnog dizajna otvoren kao deo ili dodat njemu (postaje uvezeno telo) | Preuzmite ishod kao STL ili STEP |
| Uređivanje zakrivljenih površi otvorenog STEP-a kao tačnih površi; tačan STEP splajn, provučenih i rotiranih površi iz STEP datoteke, bočnih strana splajna, modelovanih navoja, tela STL / OBJ / 3MF i sklopova; STEP za druge programe za modelovanje delova | {{ui:Otvori}} čita STEP kao trouglove i zadržava ravne površi, cilindre, konuse, sfere i torusе datoteke za izvoz ([Otvaranje STEP datoteke](topic:import-step)); {{ui:Izvezi}} › {{ui:STEP AP242 (tačno čvrsto telo)}} piše svaku analitičku površ tačno i zadržava te kao fasete ([Izvoz](topic:export-files#for-other-cad-programs-step)); makro za drugi program za modelovanje delova i dalje piše |
| Tačni lukovi u prikazima crteža | Prikazi i preseci crtaju se iz fareta |
| Tačne zapremine, površine i rastojanja | {{ui:Mere}} daje brojeve faceti­ranog tela, malo niže na okruglim delovima; finije podešavanje **Krive** ih približava |

Neki redovi u tabelama ispod predlažu jednu od ovih osobina kao način da se nešto drugo zaobiđe. Ti predlozi važe čim se tačno jezgro vrati.

## Osobine

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Zaobljenja površi, potpuna zaobljenja, zaobljenja sa poluprečnicima zadatim u tačkama duž ivice | Stalno ili linearno promenljivo {{ui:Zaobljenje}}; više osobina zaobljenja |
| Ljuske sa zidovima različite debljine | Jedna debljina za {{ui:Ljuska}}; dodajte materijal izvlačenjima tamo gde zid mora biti deblji |
| {{ui:Nagib}} na slobodnim (splajn) površima | {{ui:Nagib}} radi na ravnim, cilindričnim i konusnim površima |
| Uvrtajuća provlačenja, provlačenja tankog zida i površi; kraj tangente na osobini {{ui:Prelaz}}; prelaz sa jednom vodećom šinom; putanje splajna | {{ui:Provlačenje}} sa fiksnom orijentacijom ili krajnjom skalom; prelaz sa dve ili više vodećih šina: vidi [Provlačenje, prelaz i nagib](topic:sweep-loft-draft) |
| Rebra iz lukova ili splajnova; rebra izrasla pod pravim uglom prema skici (iz pogleda odozgo); nagib na rebrima; više rebara iz jedne skice | {{ui:Rebro}} iz jednog lanca linija u sopstvenoj ravni rebra: vidi [Rebra i ojačanja](topic:rib) |
| „Do“ zakrivljene površi, „do sledeće“ zaustavljanje na zakrivljenoj površi | Do ravne površi ili referentne ravni |
| Rupe sa upuštanjem, inčni i cevni navoji, konusni navoji, izlazi navoja i obarani početci navoja | Upuštanje male dubine; ISO metrički i trapezni navoji, kozmetički ili modelovani: vidi [Navoji na vratilima i otvorima, nacrtani ili modelovani](topic:threads) |
| Izvlačenja tankih osobina | Nacrtajte oba zida profila |
| Kopije šablona preskočene jedna po jedna, šabloni ispune | Koristite zasebne osobine; šabloni duž krive: {{ui:Niz po putanji}} |
| Kopiranje šablona, ogledala, zaobljenja, obaranja ivica, ljuski i uvezenih tela | Kopirajte skicu ili osobinu na kojoj su napravljeni, ili napravite šablon od nje |
| Tačna (G1) tangenta u izuzetnim tačkama forme; spajanje zakrpa forme u veće površi | Povisite nivo forme: aproksimirane zakrpe postaju manje; vidi [Slobodni oblici sa Formom](topic:form-surfaces) |
| Forma od više odvojenih zatvorenih delova u jednoj osobini; mostovi između formi | Jedan zatvoren deo po osobini Forma; spojite ih (Join) |
| Biranje tela površi u prikazu (osim tačaka obrezivanja i zakrpe); zaobljenja površi; poništavanje obrezivanja; G2 zakrpe; Gordonove površi tangentne na zakrivljene susede (tangentna na ravni i ravne površi je napravljena) | Izaberite ih po imenu u panelu osobine; prvo zadebljajte, pa zaobljite puno telo |
| Spisak tela u istoriji; izostavljanje skrivenih tela iz izvoza | Preimenujte i sakrijte tela na spisku tela u panelu dela; obrišite ili isključite osobinu koja je napravila telo da ga izostavite |
| Neujednačena skala koja zadržava cilindre i konuse analitičkim; neujednačeno skaliranje pomaknutih površi | {{ui:Skaliraj telo}} zakrivljene površi pretvara u bliske B-splajnove (u granici 0.0000004 mm); ujednačena skala ostaje tačna |
| Spajanje tela površi; Minkovski zbirovi | Prvo {{ui:Sašij}} ili {{ui:Zadebljaj}}, pa {{ui:Spajanje}} |
| Analiza tolerancija: zbirovi tolerancija koji skreću u uglovima (2D i 3D vektorske petlje), osetljivosti izračunate iz geometrije, Monte Karlo sa drugim raspodelama, tolerancije mera na dimenzijama skice, bonus tolerancija iz uslova materijala | {{ui:Zbir tolerancija}} u sklopu: jedan pravac, najgori slučaj i RSS, tolerancije unete, iz opšte tolerancije tabele natpisa ili iz GD&T okvira: vidi [Zbirovi tolerancija](topic:tolerance-stackup) |
| Raspoređivanje: redosled sečenja i ulazi, sečenje zajedničkih ivica jednom, delovi koji moraju ostati zajedno; ostaci rolni, sirovac zajednički za projekte | {{ui:Raspoređivanje ravnih delova na listovima…}} sa razmacima, marginama, okretanjem i vlaknima: vidi [Raspoređivanje ravnih delova na listovima](topic:nest-flat-parts); preostale ploče se čuvaju i koriste prve: vidi [Čuvanje i ponovna upotreba otpadaka](topic:nest-offcuts); planirajte sečenje u sopstvenom softveru za rezač |
| Limeni materijal: podvijanja, prelomi, zakošeni i konturni rubovi; rubovi na zakrivljenim ivicama ili na površima savijene osnovne prirubnice; skicirana savijanja; zatvaranja uglova; alati za oblikovanje; pretvaranje tela u lim; ravan savijene osnovne prirubnice sa zasecima; tabele savijanja | {{ui:Osnovna prirubnica}} (ploča ili savijeni profil), {{ui:Ivična prirubnica}} na pravim ivicama ploče sa rasterećenjima savijanja i ravni šablon sa K-faktorom: vidi [Limeni materijal](topic:sheet-metal) |
| {{ui:Analiza nagiba}} na sklopovima; nalaženje linije razdvajanja; analiza debljine zida | {{ui:Analiza nagiba}} na delu u Dizajnu: vidi [Provera nagiba za livenje i kalupe](topic:draft-analysis); otvorite svaki deo sklopa da ga proverite |

## Skice

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Elipse, tangentni lukovi, konike, splajnovi sa zadatim stepenom ili težinama (NURBS) | Splajnovi (kubni), lukovi i krugovi sa tangentnim relacijama |
| Tačka na splajnu (relacija), relacije zakrivljenosti (G2) | Postavite sopstvenu tačku splajna tamo gde mora da prolazi |
| Pomaknute kopije splajnova koje prate kasnije promene; pomaci lanaca sa oštrim uglovima splajna | Pomerite ponovo posle promene; prvo zaobljite ugao |
| Kopije šablona koje ostaju povezane sa originalom; šabloni duž krive | Napravite šablon ponovo posle promene |
| Projektovanje slobodnih ili nagnutih kružnih ivica, projektovana geometrija koja prati deo | Projektujte prave i paralelne kružne ivice, pa kotirajte |
| Vođene (referentne) kote | Očitajte mere sa panela ili podataka o delu |
| Kolinearne relacije | Paralelno sa rastojanjem 0 |
| Nalepljivanje u drugi program (sistemska memorija) | Izvezite DXF, STEP, STL ili 3MF |
| Unošenje lukova, relativnih ili polarnih koordinata | Unesite linije i krugove; crtajte lukove alatom {{ui:Luk}} |
| Biranje geometrije bez pokazivača | Potreban je klik ili dodir |

## Parametri i jedinice

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Konfiguracije koje menjaju materijale; CSV tabela dizajna koja isključuje osobine | Konfiguracije postavljaju parametre i uključuju i isključuju osobine: vidi [Konfiguracije i tabele dizajna](topic:design-tables); `partcraft variants` pravi sačuvane konfiguracije po imenu, uključujući isključene osobine: vidi [Napravite paket varijanti od svojih konfiguracija](topic:variant-pack) |
| Jednačine na brojevima u panelima najnovijih osobina (ravan, provlačenje, nagib i slično) | Napišite ih u skripti ili sa `partcraft set` ([Skripte i komandna linija](topic:scripts-and-cli)) |
| Deo prikazan u inčima | Mere se prikazuju u milimetrima; unesite `2in` u polje za broj ili izraz i postaće 50.8 |

## Datoteke

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Uređivanje sopstvenih osobina uvezenog STEP tela (stiže bez istorije) | Dodajte ili isecite materijal sopstvenim osobinama |
| Čitanje boja, naziva, strukture sklopa i PMI iz STEP-a | Nije dostupno |
| Izvoz glTF, OBJ, IGES, Parasolid; DWG 3D dela (samo paket varijanti piše DWG: list crteža) | STL ili 3MF za mreže; STEP za puna tela; DXF za 2D |
| Otvaranje IGES, DXF ili sopstvenih datoteka drugih programa (`.3dm` datoteke se otvaraju kao jedno telo: [Otvorite .3dm model kao puno telo](topic:open-3dm-files)) | Zatražite STEP ili zatvorenu STL, OBJ ili 3MF mrežu: [Otvorite STL, OBJ ili 3MF](topic:open-meshes) |
| Struktura sklopa (stablo sa nazivima delova) u izvezenom STEP-u | STEP sklopa je jedan složeni objekat postavljenih tela |
| Čuvanje u fascikli po izboru bez preuzimanja pregledača | Uključite „pitaj gde da sačuvam“ u podešavanjima preuzimanja pregledača |

## Crteži

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Kote preko tri ukupne mere (mere rupa, položaji, tolerancije mera) | Označite PDF ili izvezite DXF i kotirajte ga u 2D CAD programu |
| Više od jednog preseka ili detalja; poravnati, izlomljeni i pomoćni pogledi | Jedan presek i jedan detalj po crtežu |
| Slobodan tekst, napomene i tabele na listu (osim blokova natpisa i izmena) | Napomena o obradi ili tekst dodat u PDF |
| Projekcija prvog ugla, pomerljivi pogledi, uspravni listovi | Treći ugao, automatski raspored, vodoravni listovi A4–A0 i ANSI A–E |
| Živi prikaz preseka: više ravni ili kutija preseka odjednom, obris oko reza, čuvanje preseka u datoteci | Jedna ravan u jednom trenutku iz {{ui:Pogledi}} › {{ui:Prikaz preseka}}; vidi [Pogled unutra pomoću prikaza preseka](topic:section-view) |
| Crteži sklopova sa više pogleda, kota ili balona koje možete pomerati | Jedan izometrijski (ili rastavljeni) pogled sa automatskim balonima i spiskom delova |
| Kopiranje i nalepljivanje GD&T i simbola obrade | Postavite svaki sa Referencom, Okvirom ili Obradom |
| Uputstva: STEP datoteke u Illustrate-ovom {{ui:Iz druge datoteke…}}, model predat direktno iz ModelCraft-a ili BimCraft-a, slike kvaliteta praćenja zraka (path tracer), interaktivni 3D u PDF-u | Otvorite STEP u Dizajnu i pokrenite uputstvo {{ui:Iz otvorenog dela}}; sačuvajte model kao glTF (.glb); PNG slike 3D prikaza; interaktivnu 3D datoteku: vidi [Pokretanje uputstva u Illustrate-u](topic:illustrate) |

## Sklopovi

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Zupčanički, zupčasta letva, bregasti i zavrtanjski spojevi; kuglasti zglob ograničen na konus; spojevi na zakrivljenim površima ili između tačaka | Kruti, obrtni, klizni, cilindrični, ravni, kuglasti i spojevi čep-u-žlebu na ravnim površima, svaka vrednost sa sopstvenim granicama: vidi [Pravljenje sklopa](topic:build-assembly) |
| Koraci rastavljanja koji okreću delove i prevlačenje delova koje spojevi postavljaju | Pravi koraci rastavljanja; uklonite spoj da delo pomerite rukom |
| Podsklopovi | Samo jedan nivo delova |
| Zupčanici, bregovi, kontakt | Nije dostupno |

## Proizvodnja

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| 3D prilagodljivo čišćenje i pomaknuto grubo obrađivanje u 3D; završna obrada konstantne z-visine, olovkom, radijalna i spiralna; prilagodljivi prolazi zapisani kao lukovi | 3D grubo obrađivanje pravim redovima i obrada ostatka: vidi [3D grubo obrađivanje i obrada ostatka](topic:rough-3d); završna obrada {{ui:Paralelno}} i {{ui:Lučenje}}: vidi [3D završna obrada](topic:finish-3d); 2.5-osna {{ui:Površ}}, {{ui:Džep}}, 2D prilagodljivo, {{ui:Kontura}}, {{ui:Bušenje}} i {{ui:Obaranje ivice}}: vidi [Pravljenje putanja alata i G-koda](topic:manufacture) |
| Swarf sečenje, putanje po tokovima i višeosno grubo obrađivanje, kodovi nagnute radne ravni (G68.2), provera sudara držača i mašine; simulacija 5-osnih i rotacionih rezova | Nagnut alat za bilo koju operaciju, 5-osna završna obrada kuglastim glodalom i 4-osna rotaciona završna obrada: vidi [Obrada na 4 i 5 osa](topic:multi-axis) |
| Proširivanje i unutrašnji navoji na strugu, ciklusi G71/G76, lukovi u putanjama struganja, živi alati, pomoćno vreteno | Spoljno struganje: {{ui:Površ}}, {{ui:Grubo}}, {{ui:Obrada}}, {{ui:Žleb}}, {{ui:Odseci}}, {{ui:Navoj}}, {{ui:Bušenje}} na centru: vidi [Struganje na strugu](topic:turning) |
| Sondiranje ugla ili ugla, podešavač alata, merenje mere naspram tolerancije | Sondiranje površi, strane, rupe ili izbočine radi postavljanja radnog pomaka: vidi [Sondiranje](topic:probing) |
| Provere sudara držača i drške | Pazite na upozorenja o dužini zubaca i proverite u simulatoru upravljača |
| Vek alata i ciklusi potprograma u postprocesoru; učitavanje tuđih datoteka postprocesora | Napišite ili izmenite postprocesor u sopstvenom formatu PartCraft-a: vidi [Postprocesori koje možete menjati](topic:post-processors) |
| G-kod u inčima (G20) | Samo milimetri (G21) |

## Simulacija i generativni dizajn

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Nelinearne studije: tečenje, veliki otkloni, kontakt između delova, zamor | Linearna statika i prirodne frekvencije: vidi [Provera naprezanja i otklona](topic:simulation); držite faktor sigurnosti znatno iznad 1 |
| Nelinearno izvijanje (nesavršenosti, posle izvijanja, preskakanje) | Linearni faktori opterećenja izvijanja sa širokom marginom: vidi [Toplota, termičko naprezanje i izvijanje](topic:thermal-and-buckling) |
| Zračenje između površi (faktori pogleda), kontaktni otpor, materijali zavisni od temperature, inercija u termičkom naprezanju (udarni talasi) | Zračenje ka okolini, stabilno ili kvazistatičko termičko naprezanje u vremenu, stalna svojstva: vidi [Toplota, termičko naprezanje i izvijanje](topic:thermal-and-buckling) |
| Automatsko profinjavanje za prolazni prenos toplote i studije sa termičkim opterećenjem; grublja mreža tamo gde je greška mala; cilj na lokalnoj veličini (vrhunsko naprezanje na jednom mestu) | **Automatski profini** za statičke, izvijanje, prirodne frekvencije i stabilne termičke studije, po grešci celog dela: vidi [Provera naprezanja i otklona](topic:simulation); inače smanjite veličinu elementa |
| Opterećenja ležaja i zavrtnja, daljinske sile, momenti, opruge, zadati pomeraji | Sile i pritisci na površima, gravitacija; učvršćene i bez trenja površi |
| Simulacija sklopova; materijali koji se razlikuju po pravcu (štampani slojevi, kompoziti) | Jedan deo, jedan izotropni materijal |
| Više niti rešavača za tetraedarske studije, prenos toplote i generativni dizajn; bilo koje niti na stranici koja nije izolovana po poreklu | Voksel studije, izvijanje, naprezanje u vremenu i laminarni tok koriste niti tamo gde stranica dozvoljava: vidi [Podešavanja PartCraft-a](topic:settings) |
| Turbulentni tok sa tačnošću za projektovanje (model Spalart–Allmaras je uključen kao eksperimentalni: trenje u cevi za 30 do 34 % veće, ponovno prianjanje iza stepenice za 21 do 39 % kraće; planirano: sitnije ćelije uz zidove), toplota u toku, nestacionarni (vremenski tačan) tok, slobodne površi, ne-njutnovski fluidi, rotirajući delovi | Laminarni, stacionarni, izotermni tok Njutnovog fluida, ili eksperimentalni turbulentni model za kvalitativne obrasce: vidi [Simulacija toka fluida](topic:flow-simulation); panel upozorava kada je Rejnoldsov broj iznad laminarnog |
| Granice naprezanja i proizvodna pravila (previsi, pravci glodanja) u generativnom dizajnu; više materijala u jednom obliku | Najkrući oblik za zapreminu; proverite ishod u Simulaciji: vidi [Razvoj oblika iz opterećenja](topic:generative-design) |
| Ishod kao izmenljivo (glatko, parametarsko) telo | STL, STEP sa fasetama ili deo sa ishodom kao uvezenim telom sa fasetama |
| Projektovanje električnih mašina: rotor koji se okreće u statoru, moment naspram ugla, zasićeni čelik, magneti koji gube jačinu posle kolena, vrtložne struje i gubici u gvožđu i bakru; magnetna polja u 3D ili na zakrivljenim mrežama | Linearna 2D magnetostatika na mreži u biblioteci analize: namotaji, gvožđe, trajni magneti na svojoj liniji povrata, procepi, induktivnost i privlačenje: vidi [Magnetna polja u 2D](topic:magnetic-fields-2d) |

## Skripte

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Pomoć pri prelasku mišem, prekidne tačke i korak kroz skriptu u uređivaču skripti | Pronalaženje, sažimanje i dovršavanje su tu (vidi [Pisanje i pokretanje skripti](topic:craftscript)); za ostalo, vaš sopstveni uređivač: {{ui:Sačuvaj}} i {{ui:Otvori}} u grupi Skripta prenose skripte unutra i napolje; ugrađene funkcije su navedene u [Jezik CraftScript](topic:craftscript-language) |
| Prekidne tačke i korak kroz skriptu | `disp` i `fprintf` usput; {{key:Mod+Enter}} pokreće nekoliko izabranih redova odjednom |
| Polja i grafikoni koje skripta prikazuje, crtani u radnom prostoru Dizajn; skripte koje menjaju parametre dela | Prikazuju se u radnom prostoru Skripta; skripte čitaju parametre sa `param` (vidi [Pisanje i pokretanje skripti](topic:craftscript)), menjaju ih na kartici {{ui:Parametri}} |
| Slike i tabele uporedo sa grafikonima; uređivanje grafikona (zum, granice osa) pre čuvanja | Uporedo prikazuje grafikone; sačuvajte grafikon kao PNG, SVG ili CSV i završite ga drugde |
| numpy i drugi Python paketi; Python van mreže; sažimanje Python-a u uređivaču; Pascal Script | Python standardna biblioteka, CraftScript i Lua: vidi [Skripte u Python-u](topic:craftscript-python) |
| Prosleđivanje Lua funkcija ugrađenim funkcijama; pozivanje funkcije biblioteke iz Lua-e po imenu napravljenom dok skripta radi | Napišite ime funkcije biblioteke u skripti (`cs.static_tet(…)`) ili je pozovite iz CraftScript skripte |

## Aplikacija

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Čuvanje u oblaku, deljenje i istorija verzija | Još nije dostupno. Čuvajte datoteke na računaru i čuvajte verzije po imenu |
| PartCraft kao instalirana aplikacija na iPad-u i iPhone-u | Koristite PartCraft u pregledaču uređaja; na Android-u i na radnoj površini radi i u CadCraft Studio-u (getcadcraft.com/download) |
| Kontekstualni (desni klik) meniji | Traka alata i desni panel |
| Potpuno rad van mreže od početka | Samo kada je aplikacija sačuvana za rad van mreže: vidi [Rad van mreže](common:offline) |

Prijavite šta vam najviše nedostaje preko stranice podrške sajta: to oblikuje šta sledi.

## Inženjer (generatori i polja)

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Zaglavlja, priključci i spojnice na generisanom izmenjivaču toplote; krive temperature za čvrstoću materijala; gubici T-spojnica u razdeljivaču | Generatori prave jezgro i cevi; dodajte spojnice u Dizajnu; koristite podatke materijala na sobnoj temperaturi sa faktorom sigurnosti |
| Dodavanje generatora iz direktorijuma dodataka jednim klikom | {{ui:Otvori}} u radnom prostoru Inženjer dodaje generator iz datoteke |
| Datoteka polja finija od sopstvene veličine voksela generatora; čitanje `.vdb` datoteka | Sačuvajte finije polje iz skripte; `.vdb` se piše, ne čita |
| Proračuni po pravilniku za posude pod pritiskom | Udžbenične formule za tanke i debele zidove, sa faktorom sigurnosti koji izaberete; nije margina pravilnika |
| Generatori za ostale aplikacije | Samo PartCraft u ovoj verziji |
