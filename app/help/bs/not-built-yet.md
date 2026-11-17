---
title: Šta još nije izrađeno
summary: Sve što ova verzija PartCraft-a još ne radi, od uvijenih provlačenja do prikaza u inčima, kota crteža i podsklopova, sa onim što se danas radi umjesto toga.
keywords: nedostaje, još nije, ograničenja, plan razvoja, tačno jezgro, zaobljenje, skošenje, ljuska, provlačenje, prelaz, uvoz STEP, simulacija, proizvodnja, uvijeno provlačenje, tangentnost kraja prelaza, zaobljenje površine, jednačine, inči, kote crteža, podsklopovi, oblak, tablet, telefon
from: 9b868162
---

PartCraft je rana verzija. Ova stranica navodi šta još ne radi, da je ne bi tražio, i šta raditi umjesto toga danas. Ništa ovdje nema datum.

## Traži tačno jezgro

Ova verzija gradi svaki dio mrežnim jezgrom (vidi [Mrežno jezgro](topic:solid-kernels)). Sve dolje traži tačno geometrijsko jezgro, koje ova verzija još nema. Dijelovi spašeni s ovim elementima se i dalje otvaraju: elementi ostaju u istoriji, označeni kao neizrađeni, i čuvaju se pri spašavanju.

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| {{ui:Fillet}} i {{ui:Chamfer}} na zaobljenim ivicama; zaobljenja čiji se poluprečnik mijenja duž ivice; zaobljenja glatko stopljena tamo gdje se sastaju (mrežno jezgro ih spaja pod uglom) | {{ui:Fillet}} i {{ui:Chamfer}} rade na pravim ivicama između ravnih površina; ostale uglove zaobli u skici prije izvlačenja ({{ui:Fillet}} u skici, {{key:F}}) |
| {{ui:Shell}} koji otvara zakrivljene površine; zidovi različitih debljina | Otvori ravne površine; dodaj materijal izvlačenjima tamo gdje zid mora biti deblji |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} na zakrivljenim površinama; izvlačenje do površine, sljedeće površine ili vrha; suženo izvlačenje | Izvuci ili rotiraj, u koracima gdje treba; izvuci do dubine koju izmjeriš |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} i ravni uzorci | Izvuci ploču ili profil rebra |
| Površine: završavanje {{ui:Form}} u dio, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Nije dostupno |
| Više tijela: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, elementi koji prave novo tijelo | Jedno tijelo; uzorci i ogledalo kopiraju elemente |
| Skice, ravni, ose i tačke na površinama koje može naći samo tačno jezgro (površina nastala zaobljenjem, zid rupe, površina uvezenog tijela) | Skiciraj na osnovnim ravnima, referentnim ravnima i ravnim površinama izvlačenja i rotacija |
| Ishod generativnog dizajna otvoren kao dio ili dodat u njega (postaje uvezeno tijelo) | Preuzmi ishod kao STL ili STEP |
| Uređivanje zakrivljenih površina otvorenog STEP-a kao tačnih površina; tačan STEP splajn, provučenih i rotiranih površina iz STEP datoteke, bočne strane splajna, modelirani navoji, tijela i sklopovi u STL / OBJ / 3MF; STEP za druge modelare dijelova | {{ui:Open}} čita STEP kao trouglove i zadržava ravne površine datoteke, valjke, konuse, kugle i torusе za izvoz ([Otvori STEP datoteku](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} zapisuje svaku analitičku površinu tačno i zadržava je kao fasete ([Izvoz](topic:export-files#for-other-cad-programs-step)); makro za drugog modelara dijelova i dalje zapisuje |
| Pravi lukovi u prikazima crteža | Prikazi i prikazi presjeka se crtaju iz faceta |
| Tačne zapremine, površine i rastojanja | {{ui:Measure}} daje brojeve tijela sastavljenog od faceta, malo niže na zaobljenim dijelovima; finija postavka **Krive** ih približava |

Neki redovi u tabelama ispod predlažu jedan od ovih elemenata kao način da se nešto drugo zaobiđe. Ti prijedlozi važe kad se tačno jezgro vrati.

## Elementi

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Zaobljenja površina, puna zaobljenja, zaobljenja s poluprečnicima postavljenim u tačkama duž ivice | Konstantno ili promjenljivo linearno {{ui:Fillet}}; više elemenata zaobljenja |
| Ljuske s različitim debljinama zida | Jedna debljina za {{ui:Shell}}; dodaj materijal izvlačenjima tamo gdje zid mora biti deblji |
| Nagib na slobodnim (splajn) površinama | {{ui:Draft}} radi na ravnim, cilindričnim i konusnim površinama |
| Uvijena provlačenja, provlačenja tankih zidova i površina; tangentnost kraja na elementu Prelaz; prelaz s jednom vodilicom; putanje splajna | {{ui:Sweep}} s fiksnom orijentacijom ili skaliranjem kraja; prelaz s dvije ili više vodilica: vidi [Provlačenje, prelaz i nagib](topic:sweep-loft-draft) |
| Rebra iz lukova ili splajnova; rebra izrasla pod pravim uglom prema skici (iz pogleda odozgo); nagib na rebrima; više rebara iz jedne skice | {{ui:Rib}} iz jednog niza linija u ravni samog rebra: vidi [Rebra i ukošnice](topic:rib) |
| "Do" zakrivljene površine, "do sljedeće" zaustavljanje na zakrivljenoj površini | Do ravne površine ili referentne ravni |
| Rupe s protuubušenjem, navoji u inčima i cijevni navoji, konusni navoji, izlazi navoja i skošen početak navoja | Upušteni provrt (counterbore) s malom dubinom; metrički ISO i trapezni navoji, kozmetički ili modelirani: vidi [Navoji na osovinama i provrtima, nacrtani ili modelirani](topic:threads) |
| Izvlačenja tankih elemenata | Nacrtaj oba zida profila |
| Preskakanje kopija uzorka jednu po jednu, uzorci ispune | Koristi zasebne elemente; uzorci duž krive: {{ui:Path pattern}} |
| Kopiranje uzoraka, ogledala, zaobljenja, skošenja, ljuski i uvezenih tijela | Kopiraj skicu ili element na kojem su izgrađeni, ili napravi uzorak od njega |
| Tačna (G1) tangentnost u posebnim tačkama oblika; spajanje zakrpa oblika u veće površine | Podigni nivo oblika: aproksimirane zakrpe postaju manje; vidi [Slobodni oblici s Formom](topic:form-surfaces) |
| Oblik sastavljen od više odvojenih zatvorenih komada u jednom elementu; mostovi između oblika | Jedan zatvoren komad po elementu Forma; spoji ih naredbom Join |
| Biranje tijela površina u prikazu (osim tačaka odsijecanja i zakrpa); zaobljenja površina; poništavanje odsijecanja; G2 zakrpe; Gordonove površine tangentne na zakrivljene susjede (tangentne na ravni i ravne površine su izrađene) | Izaberi ih po imenu u panelu elementa; prvo zadeblji, pa zaobli tijelo |
| Lista tijela u istoriji; isključivanje skrivenih tijela iz izvoza | Preimenuj i sakrij tijela na listi tijela u panelu dijela; izbriši ili potisni element koji je napravio tijelo da ga izostaviš |
| Neravnomjerno skaliranje koje čuva valjke i konuse kao analitičke; neravnomjerno skaliranje pomaknutih površina | {{ui:Scale body}} pravi zakrivljene površine blizu B-splajnova (unutar 0.0000004 mm); ravnomjerno skaliranje ostaje tačno |
| Spajanje tijela površina; Minkowskijeve sume | Prvo {{ui:Stitch}} ili {{ui:Thicken}}, pa {{ui:Combine}} |
| Analiza tolerancija: lanci koji skreću za uglove (2D i 3D vektorske petlje), osjetljivosti izračunate iz geometrije, Monte Carlo s drugim raspodjelama, tolerancije veličina na kotama skice, bonus tolerancija iz uslova materijala | {{ui:Stack-up}} u sklopu: jedan smjer, najgori slučaj i RSS, tolerancije unesene, iz opšte tolerancije u natpisnom bloku ili iz GD&T okvira: vidi [Lanci tolerancija](topic:tolerance-stackup) |
| Raspoređivanje: redoslijed rezanja i uvodne linije, rezanje zajedničkih ivica jednom, dijelovi koji moraju ostati zajedno; ostaci rola, zalihe zajedničke među projektima | {{ui:Nest flat parts on sheets…}} sa razmakom, marginama, okretanjima i smjerom vlakana: vidi [Raspoređivanje ravnih dijelova na listovima](topic:nest-flat-parts); ostavljeni limovi se čuvaju i koriste prvi: vidi [Čuvanje i ponovna upotreba otpadaka](topic:nest-offcuts); plan reza isplaniraj u vlastitom softveru rezača |
| Lim: podvijanje ivica, pomaci, prirubnice s kosim i konturnim spojem; prirubnice na zakrivljenim ivicama ili na površinama savijene osnovne prirubnice; skicirani savoji; zatvarači uglova; alati za oblikovanje; pretvaranje tijela u lim; ravni oblik savijene osnovne prirubnice s rezovima; tabele savijanja | {{ui:Base flange}} (ploča ili savijeni profil), {{ui:Edge flange}} na ravnim ivicama ploče s rasterećenjima savijanja, i ravni uzorak s K-faktorom: vidi [Lim](topic:sheet-metal) |
| Analiza nagiba na sklopovima; traženje linije razdvajanja; analiza debljine zida | {{ui:Draft analysis}} na dijelu u Dizajnu: vidi [Provjera nagiba za kalupljenje i livenje](topic:draft-analysis); otvori svaki dio sklopa da ga provjeriš |

## Skice

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Elipse, tangentni lukovi, konike, splajnovi sa zadanim stepenom ili težinama (NURBS) | Splajnovi (kubni), lukovi i krugovi s tangentnim relacijama |
| Tačka na splajnu (relacija), relacije zakrivljenosti (G2) | Postavi sopstvenu tačku splajna tamo gdje mora proći |
| Pomaknute kopije splajnova koje prate kasnije izmjene; pomaci lanaca s oštrim uglovima splajna | Ponovo pomakni nakon izmjene; prvo zaobli ugao |
| Kopije uzorka koje ostaju povezane s originalom; uzorci duž krive | Ponovo napravi uzorak nakon izmjene |
| Projekcija slobodnih ili nagnutih kružnih ivica; projektovana geometrija koja prati dio | Projektuj prave i paralelne kružne ivice, pa kotiraj |
| Vođene (referentne) kote | Očitaj veličine s panela ili podataka o dijelu |
| Kolinearne relacije | Paralelno s razmakom 0 |
| Lijepljenje u drugi program (sistemska međuspremnik) | Izvezi DXF, STEP, STL ili 3MF |
| Unos lukova, relativnih ili polarnih koordinata | Unesi linije i krugove; crtaj lukove alatom Luk |
| Biranje geometrije bez pokazivača | Treba klik ili dodir |

## Parametri i jedinice

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Konfiguracije koje mijenjaju materijale; CSV tabela dizajna koja isključuje elemente | Konfiguracije postavljaju parametre i uključuju i isključuju elemente: vidi [Konfiguracije i tabele dizajna](topic:design-tables); `partcraft variants` pravi sačuvane konfiguracije po imenu, uključujući isključene elemente: vidi [Napravi paket varijanti iz konfiguracija](topic:variant-pack) |
| Jednačine na brojevima u panelima najnovijih elemenata (ravan, provlačenje, nagib i slični) | Napiši ih u skripti ili s `partcraft set` ([Skripte i komandna linija](topic:scripts-and-cli)) |
| Dio prikazan u inčima | Veličine se prikazuju u milimetrima; upiši `2in` u polje za broj ili izraz i postaje 50.8 |

## Datoteke

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Uređivanje sopstvenih elemenata uvezenog STEP tijela (dolazi bez istorije) | Dodaj ili odsijeci materijal vlastitim elementima |
| Čitanje boja, naziva, strukture sklopa i PMI iz STEP-a | Nije dostupno |
| glTF, OBJ, IGES, Parasolid izvoz; DWG 3D dijela (DWG piše samo paket varijanti: list crteža) | STL ili 3MF za mreže; STEP za tijela; DXF za 2D |
| Otvaranje IGES, DXF ili tuđih datoteka drugih programa (`.3dm` datoteke se otvaraju kao jedno tijelo: [Otvori .3dm model kao čvrsto tijelo](topic:open-3dm-files)) | Traži STEP, ili zatvorenu STL, OBJ ili 3MF mrežu: [Otvori STL, OBJ ili 3MF](topic:open-meshes) |
| Struktura sklopa (stablo s nazivima dijelova) u izvezenom STEP-u | STEP sklopa je jedan složeni dio od postavljenih tijela |
| Čuvanje u fascikli po izboru bez preuzimanja pregledača | Uključi "pitaj gdje da sačuvam" u postavkama preuzimanja pregledača |

## Crteži

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Kote izvan tri ukupne veličine (veličine rupa, položaji, tolerancije na veličinama) | Označi PDF, ili izvezi DXF i kotiraj ga u 2D CAD programu |
| Više od jednog presjeka ili detalja; poravnati, lomljeni i pomoćni prikazi | Jedan presjek i jedan detalj po crtežu |
| Slobodan tekst, napomene i tabele na listu (osim naslovnog i revizijskog bloka) | Napomena o završnoj obradi ili tekst dodan u PDF |
| Projekcija prvog ugla, pomični prikazi, uspravni listovi | Treći ugao, automatski raspored, ležeći listovi A4–A0 i ANSI A–E |
| Živi prikaz presjeka: više ravni ili kutija presjeka istovremeno, kontura oko reza, čuvanje presjeka u datoteci | Jedna ravan istovremeno iz {{ui:Views}} › {{ui:Section view}}; vidi [Pogled unutra pomoću prikaza presjeka](topic:section-view) |
| Crteži sklopa s više prikaza, kota ili balona koje možeš pomjerati | Jedan izometrijski (ili rastavljeni) prikaz s automatskim balonima i listom dijelova |
| Kopiranje i lijepljenje GD&T i simbola završne obrade | Postavi svaki pomoću Datum, Frame ili Finish |
| Priručnici: STEP datoteke u {{ui:From another file…}} u Illustrate-u, model predan direktno iz ModelCraft-a ili BimCraft-a, slike kvaliteta praćenja zraka (path tracer), interaktivni 3D unutar PDF-a | Otvori STEP u Dizajnu i pokreni priručnik {{ui:From the open part}}; sačuvaj model kao glTF (.glb); PNG slike 3D prikaza; interaktivna 3D datoteka: vidi [Pokreni priručnik u Illustrate-u](topic:illustrate) |

## Sklopovi

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Zupčanički, zupčasta letva, bregasti i vijčani spojevi; kuglasti zglob ograničen na konus; spojevi na zakrivljenim površinama ili između tačaka | Kruti, rotacioni, klizni, cilindrični, ravni, kuglasti i spojevi čep-u-žlijeb na ravnim površinama, svaka vrijednost sa sopstvenim granicama: vidi [Izrada sklopa](topic:build-assembly) |
| Koraci rastavljanja koji okreću dijelove, i prevlačenje dijelova koje postavljaju spojevi | Pravi koraci rastavljanja; ukloni spoj da pomjeriš dio rukom |
| Podsklopovi | Samo jedan nivo dijelova |
| Zupčanici, bregovi, kontakt | Nije dostupno |

## Proizvodnja

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| 3D grubo obrađivanje zakrivljenih površina, 3D adaptivno čišćenje, obrada ostatka; završna obrada po vodenoj liniji, olovci, radijalna i spiralna; adaptivni prolazi zapisani kao lukovi | Čeono (2.5-osno), džep, 2D adaptivno, kontura, bušenje i skošenje: vidi [Pravljenje putanja alata i G-koda](topic:manufacture); paralelna i Scallop završna obrada cijelog modela: vidi [3D završna obrada](topic:finish-3d) |
| Putanje alata sa 4 i 5 osa, struganje, mjerno ispitivanje | Postavi jednu stranu odjednom s osom alata na kartici Postavka |
| Provjere sudara držača i drške | Pazi na upozorenja o dužini žlijeba i provjeri u simulatoru upravljača |
| Mjerno ispitivanje, ciklusi vijeka alata i podprograma, kodovi 4. i 5. ose te struga u postprocesoru; učitavanje tuđih datoteka postprocesora | Napiši ili izmijeni postprocesor u vlastitom formatu PartCraft-a: vidi [Postprocesori koje možeš izmijeniti](topic:post-processors) |
| G-kod u inčima (G20) | Samo milimetri (G21) |

## Simulacija i generativni dizajn

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Nelinearne studije: tečenje, velika progibanja, kontakt između dijelova, zamor | Linearna statika i prirodne frekvencije: vidi [Provjera naprezanja i progiba](topic:simulation); drži faktor sigurnosti znatno iznad 1 |
| Nelinearno izvijanje (imperfekcije, postizvijanje, preskakanje) | Linearni faktori opterećenja izvijanja s velikom rezervom: vidi [Toplota, termičko naprezanje i izvijanje](topic:thermal-and-buckling) |
| Zračenje između površina (faktori pogleda), kontaktni otpor, materijali zavisni od temperature, inercija u termičkom naprezanju (udarni talasi) | Zračenje prema okolini, stacionarno ili kvazistatičko termičko naprezanje kroz vrijeme, konstantna svojstva: vidi [Toplota, termičko naprezanje i izvijanje](topic:thermal-and-buckling) |
| Automatsko profinjavanje za prolazno zagrijavanje i studije s termičkim opterećenjem; grublja mreža tamo gdje je greška mala; cilj na lokalnoj veličini (vršno naprezanje na jednom mjestu) | **Profini automatski** za statičke, izvijanje, prirodnu frekvenciju i stacionarne termičke studije, na grešci cijelog dijela: vidi [Provjera naprezanja i progiba](topic:simulation); inače smanji veličinu elementa |
| Opterećenja ležaja i vijaka, udaljene sile, momenti, opruge, zadani pomaci | Sile i pritisci na površinama, gravitacija; fiksne i bezfrikcione površine |
| Simulacija sklopova; materijali koji se razlikuju po smjeru (štampani slojevi, kompoziti) | Jedan dio, jedan izotropni materijal |
| Više niti rješavača za tetraedarske studije, prenos toplote i generativni dizajn; bilo koje niti na stranici koja nije izolovana po porijeklu (cross-origin) | Voksel studije, izvijanje, naprezanje kroz vrijeme i laminarni tok koriste niti tamo gdje stranica dopušta: vidi [Postavke PartCraft-a](topic:settings) |
| Turbulentni tok s tačnošću za projektovanje (model Spalart–Allmaras je uključen kao eksperimentalni: trenje u cijevi 30 do 34 % visoko, ponovno pripajanje iza stepenice 21 do 39 % kratko; planirano: finije ćelije uz zidove), toplota u toku, nestacionarni (vremenski tačan) tok, slobodne površine, ne-njutnovski fluidi, rotirajući dijelovi | Laminarni, stacionarni, izotermni tok njutnovskog fluida, ili eksperimentalni turbulentni model za kvalitativne obrasce: vidi [Simulacija strujanja fluida](topic:flow-simulation); panel upozorava kad je Rejnoldsov broj iznad laminarnog |
| Granice naprezanja i proizvodna pravila (previsi, smjerovi glodanja) u generativnom dizajnu; više materijala u jednom obliku | Najkrući oblik za zapreminu; provjeri ishod u Simulaciji: vidi [Razvij oblik iz opterećenja](topic:generative-design) |
| Ishod kao uređivo (glatko, parametarsko) tijelo | STL, STEP s facetama ili dio s ishodom kao uvezenim tijelom s facetama |
| Projektovanje električnih mašina: rotor koji se okreće u statoru, moment prema uglu, zasićeni čelik, magneti koji gube jačinu iza koljena, vrtložne struje i gubici u gvožđu i bakru; magnetna polja u 3-D ili na zakrivljenim mrežama | Linearna 2-D magnetostatika na mreži u biblioteci analize: zavojnice, gvožđe, stalni magneti na svojoj liniji povrata, zračni procjepi, induktivnost i sila privlačenja: vidi [Magnetna polja u 2-D](topic:magnetic-fields-2d) |

## Skripte

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Pomoć pri zadržavanju pokazivača, prekidne tačke i korak kroz skriptu u uređivaču skripte | Traženje, sklapanje (fold) i dovršavanje su tu (vidi [Pisanje i pokretanje skripti](topic:craftscript)); za ostalo, vlastiti uređivač: {{ui:Save}} i {{ui:Open}} u grupi {{ui:Script}} prenose skripte unutra i van; ugrađene funkcije su navedene u [Jezik CraftScript](topic:craftscript-language) |
| Prekidne tačke i korak kroz skriptu | `disp` i `fprintf` usput; {{key:Mod+Enter}} pokreće nekoliko izabranih redova odjednom |
| Polja i grafici koje skripta prikazuje nacrtani u radnom prostoru Dizajn; skripte koje mijenjaju parametre dijela | Prikazuju se u radnom prostoru Skripta; skripte čitaju parametre pomoću `param` (vidi [Pisanje i pokretanje skripti](topic:craftscript)), a mijenjaju ih na kartici {{ui:Parameters}} |
| Slike i tabele uz grafike; uređivanje grafika (zumiranje, granice osa) prije čuvanja | Uporedo prikazuje grafike; sačuvaj grafik kao PNG, SVG ili CSV i završi ga drugdje |
| numpy i drugi Python paketi; Python van mreže; sklapanje Pythona u uređivaču; Pascal Script | Python-ova standardna biblioteka, CraftScript i Lua: vidi [Skripte u Pythonu](topic:craftscript-python) |
| Prosljeđivanje Lua funkcija ugrađenim funkcijama; pozivanje funkcije biblioteke iz Lua-e imenom sastavljenim dok skripta radi | Napiši ime funkcije biblioteke u skripti (`cs.static_tet(…)`), ili je pozovi iz CraftScript skripte |

## Aplikacija

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Spremanje u oblak, dijeljenje i istorija verzija | Još nije dostupno. Spasi datoteke na računar i čuvaj verzije po imenu |
| PartCraft kao instalirana aplikacija na iPadu i iPhoneu | Koristi PartCraft u pregledaču uređaja; na Androidu i na računaru radi i u CadCraft Studiju (getcadcraft.com/download) |
| Kontekstni (desni klik) meniji | Traka s alatima i desni panel |
| Potpuno van mreže od početka | Samo kad je aplikacija sačuvana za rad van mreže: vidi [Rad van mreže](common:offline) |

Javi šta ti najviše nedostaje preko stranice za podršku na sajtu: to oblikuje šta dolazi poslije.

## Inženjer (generatori i polja)

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Zaglavlja, priključci i fitinzi na generisanom izmjenjivaču toplote; krive temperature za čvrstoću materijala; gubici T-spoja u razdjelniku | Generatori prave jezgro i cijevi; dodaj fitinge u Dizajnu; koristi podatke za sobnu temperaturu materijala sa faktorom sigurnosti |
| Dodavanje generatora iz direktorija dodataka jednim klikom | {{ui:Open}} u radnom prostoru Inženjer dodaje generator iz datoteke |
| Datoteka polja finija od vlastite veličine voksela generatora; učitavanje `.vdb` datoteka | Sačuvaj finije polje iz skripte; `.vdb` se piše, ne čita |
| Proračuni po pravilniku za posude pod pritiskom | Udžbeničke formule za tankozidne i debelozidne posude, s faktorom sigurnosti koji izabereš; nije margina pravilnika |
| Generatori za ostale aplikacije | Samo PartCraft u ovoj verziji |
