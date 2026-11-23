---
title: Šta još nije izgrađeno
summary: Sve što ova verzija PartCrafta još ne radi, od uvijanja provlačenja do prikaza u inčima, kota crteža i podsklopova, uz ono što treba raditi umjesto toga danas.
keywords: nedostaje, još nije, ograničenja, limitations, plan razvoja, tačan kernel, zaobljenje, skošenje, ljuska, provlačenje, prelaz, zaobljenje površine, jednačine, inči, kote crteža, podsklopovi, oblak, tablet, telefon
from: 97b10a29
---

PartCraft je rana verzija. Ova stranica navodi šta još ne radi, da ga ne tražite, i šta raditi umjesto toga danas. Ništa ovdje nema datum.

## Potreban tačan kernel

Ova verzija gradi svaki dio mrežnim kernelom (vidi [Mrežni kernel](topic:solid-kernels)). Sve dolje zahtijeva tačan geometrijski kernel, koji ova verzija još nema. Dijelovi sačuvani s ovim elementima se i dalje otvaraju: elementi ostaju u historiji, označeni kao neizgrađeni, i čuvaju se pri snimanju.

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| {{ui:Zaobljenje}} i {{ui:Skošenje}} na zaobljenim ivicama; zaobljenja čiji se poluprečnik mijenja duž ivice; zaokruženja glatko stopljena tamo gdje se sastaju (mrežni kernel ih sijeca pod uglom) | Zaobljenje i Skošenje rade na ravnim ivicama između ravnih površina; ostale uglove zaokružite u skici prije izvlačenja ({{ui:Zaobljenje}} u skici, {{key:F}}) |
| {{ui:Ljuska}} koja otvara zakrivljene površine; zidovi različitih debljina | Otvorite ravne površine; dodajte materijal izvlačenjima tamo gdje zid mora biti deblji |
| {{ui:Provlačenje}}, {{ui:Prelaz}}, {{ui:Nagib}} na zakrivljenim površinama; izvlačenje do površine, sljedeće površine ili vrha; suženi izvlaci | Izvucite ili rotirajte, u koracima gdje treba; izvucite do dubine koju izmjerite |
| {{ui:Rebro}}, {{ui:Osnovna prirubnica}}, {{ui:Prirubnica na ivici}} i ravni uzorci | Izvucite ploču ili profil rebra |
| Površine: dovršavanje {{ui:Forma}} u dio, {{ui:Zakrpa}}, {{ui:Prelaz površine}}, {{ui:Gordonova površina}}, {{ui:Sašij}}, {{ui:Zadeblji}}, {{ui:Pomak površine}}, {{ui:Produži površinu}}, {{ui:Odsijeci površinu}} | Nije dostupno |
| Više tijela: {{ui:Kombinuj}}, {{ui:Pomjeri tijelo}}, {{ui:Skaliraj tijelo}}, {{ui:Uzorak duž putanje}}, elementi koji prave novo tijelo | Jedan čvrsti model; uzorci i zrcalne kopije su elementi |
| Skice, ravni, ose i tačke na površinama koje samo tačan kernel može naći (površina nastala zaobljenjem, zid rupe, površina uvezenog čvrstog tijela) | Skicirajte na osnovnim ravnima, referentnim ravnima i ravnim površinama izvlačenja i rotacija |
| Ishod generativnog dizajna otvoren kao dio ili dodat u njega (postaje uvezeno čvrsto tijelo) | Preuzmite ishod kao STL ili STEP |
| Uređivanje zakrivljenih površina otvorenog STEP-a kao tačnih površina; tačan STEP splajn, provlačenih i rotiranih površina iz STEP datoteke; bokovi od splajna; modelovani navoji; STL / OBJ / 3MF tijela i sklopovi; STEP za druge modelare dijelova | {{ui:Otvori}} čita STEP kao trouglove i zadržava ravne površine, valjke, konuse, sfere i torove datoteke za izvoz ([Otvaranje STEP datoteke](topic:import-step)); {{ui:Izvoz}} › {{ui:STEP AP242 (tačno čvrsto tijelo)}} zapisuje svaku analitičku površinu tačno i zadržava ih kao facete ([Izvoz](topic:export-files#for-other-cad-programs-step)); makro za drugi modeler dijelova i dalje zapisuje |
| Pravi lukovi u pogledima crteža | Pogledi i presjeci crtaju se iz faceta |
| Tačne zapremine, površine i rastojanja | {{ui:Mjeri}} daje brojke faceted tijela, malo niže za okrugle dijelove; finija postavka **Krive** ih približava |

Neki redovi u tabelama dolje predlažu jedan od ovih elemenata kao način da se nešto drugo uradi. Ti prijedlozi važe kad se vrati tačan kernel.

## Elementi

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Zaobljenja površina, potpuna zaobljenja, zaobljenja s poluprečnicima zadanim u tačkama duž ivice | Konstantno ili linearno promjenljivo {{ui:Zaobljenje}}; više elemenata zaobljenja |
| Ljuske različitih debljina zidova | Jedna debljina {{ui:Ljuska}}; dodajte materijal izvlačenjima tamo gdje zid mora biti deblji |
| Nagib na slobodnim (splajn) površinama | {{ui:Nagib}} radi na ravnim, cilindričnim i konusnim površinama |
| Uvijajuća provlačenja, tankozidna i površinska provlačenja; krajnja tangencija na elementu Prelaz; prelaz s jednom vodećom šinom; splajn putanje | {{ui:Provlačenje}} s fiksnom orijentacijom ili krajnjim skaliranjem; prelaz s dvije ili više vodećih šina: vidi [Provlačenje, prelaz i nagib](topic:sweep-loft-draft) |
| Rebra iz lukova ili splajnova; rebra uzrasla kvadratno prema skici (iz pogleda odozgo); nagib na rebrima; više rebara iz jedne skice | {{ui:Rebro}} iz jednog lanca linija u ravni samog rebra: vidi [Rebra i ojačanja](topic:rib) |
| „Do” zakrivljene površine, „do sljedeće” koja staje na zakrivljenoj površini | Do ravne površine ili referentne ravni |
| Rupe s protuupuštanjem, navoji u inčima i cijevni, konusni navoji, završeci navoja i skošeni početak navoja | Upuštanje male dubine; navoji ISO metrički i trapezni, kozmetički ili modelovani: vidi [Navoji na osovinama i provrtima, nacrtani ili modelovani](topic:threads) |
| Izvlačenja tankih elemenata | Nacrtajte oba zida profila |
| Kopije uzorka preskočene jedna po jedna; popunjavajući uzorci | Koristite zasebne elemente; uzorci duž krive: {{ui:Uzorak duž putanje}} |
| Kopiranje uzoraka, zrcala, zaobljenja, skošenja, ljuske i uvezena tijela | Kopirajte skicu ili element na kojem se zasnivaju, ili napravite uzorak |
| Tačna (G1) tangencija u izuzetnim tačkama forme; spajanje krpa forme u veće površine | Povisite Nivo forme: aproksimirane krpe postaju manje; vidi [Slobodni oblici s Formom](topic:form-surfaces) |
| Forma sastavljena od više odvojenih zatvorenih dijelova u jednom elementu; mostovi između formi | Jedan zatvoren dio po elementu Forma; spojite ih s Spoji |
| Odabir površinskih tijela u prikazu (osim tačaka odsijecanja i krpe); zaobljenja površina; poništavanje odsijecanja; krpe G2; Gordonove površine tangentne na zakrivljene susjede (tangentne na ravni i ravne površine su izgrađene) | Odaberite ih po imenu u panelu elementa; prvo zadebljajte, pa zaobljenje na čvrstom tijelu |
| Lista tijela u historiji; izostavljanje skrivenih tijela iz izvoza | Preimenujte i sakrijte tijela na listi tijela u panelu dijela; obrišite ili isključite element koji je napravio tijelo da ga izostavite |
| Neuniformno skaliranje koje zadržava valjke i konuse analitičkim; neuniformno skaliranje ofset površina | {{ui:Skaliraj tijelo}} pravi zakrivljene površine zatvorenim B-splajnovima (unutar 0,0000004 mm); uniformno skaliranje ostaje tačno |
| Kombinovanje površinskih tijela; Minkowski sume | Prvo {{ui:Sašij}} ili {{ui:Zadeblji}}, pa {{ui:Kombinuj}} |
| Analiza tolerancija: lanci tolerancija koji skreću za uglove (2D i 3D vektorske petlje), osjetljivosti izračunate iz geometrije, Monte Karlo s drugim raspodjelama, tolerancije veličina na kotama skice, bonus tolerancija iz uslova materijala | {{ui:Lanac tolerancija}} u sklopu: jedan smjer, najgori slučaj i RSS, tolerancije unesene ručno, iz opšte tolerancije na naslovnom bloku ili iz GD&T okvira: vidi [Lanci tolerancija](topic:tolerance-stackup) |
| Gniježđenje: redoslijed rezanja i ulazi; rezanje zajedničkih ivica jednom; dijelovi koji moraju ostati zajedno; ostaci rola, materijal zajednički za projekte | {{ui:Raspoređi ravne dijelove na listove…}} s razmakom, marginama, okretanjem i smjerom vlakana: vidi [Raspoređivanje ravnih dijelova na listove](topic:nest-flat-parts); preostali limovi se čuvaju i koriste prvi: vidi [Čuvanje i ponovna upotreba otpadaka](topic:nest-offcuts); plan rezanja uradite u softveru vaše rezačice |
| Tanki lim: podvijanja, stepenice, kosi i konturni rubovi; rubovi na zakrivljenim ivicama ili na površinama savijene osnovne prirubnice; skicirani savojevi; zatvarači uglova; alati za oblikovanje; pretvaranje tijela u tanki lim; ravni oblik savijene osnovne prirubnice sa rezovima; tabele savijanja | {{ui:Osnovna prirubnica}} (ploča ili savijen profil), {{ui:Prirubnica na ivici}} na ravnim ivicama ploče s rasterećenjima savijanja, i ravni uzorak s K-faktorom: vidi [Tanki lim](topic:sheet-metal) |
| Analiza nagiba na sklopovima; pronalaženje linije razdvajanja; analiza debljine zida | {{ui:Analiza nagiba}} na dijelu u Dizajnu: vidi [Provjera nagiba za kalupe i odlivke](topic:draft-analysis); otvorite svaki dio sklopa da ga provjerite |

## Skice

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Elipse, tangentni lukovi, konike, splajnovi s zadanim stepenom ili težinama (NURBS) | Splajnovi (kubični), lukovi i kružnice s relacijama Tangente |
| Tačka na splajnu (relacija), relacije zakrivljenosti (G2) | Postavite vlastitu tačku splajna tamo gdje mora proći |
| Ofset kopije splajnova koje prate kasnije promjene; ofseti lanaca s oštrim uglovima splajna | Ponovo ofsetujte nakon promjene; prvo zaokružite ugao |
| Kopije uzorka koje ostaju povezane s originalom; uzorci duž krive | Ponovo napravite uzorak nakon promjene |
| Projektovanje slobodnih ili nagnutih kružnih ivica, projektovana geometrija koja prati dio | Projektujte prave i paralelne kružne ivice, pa kotirajte |
| Upravljane (referentne) kote | Očitajte veličine s panela ili iz podataka o dijelu |
| Kolinearne relacije | Paralelno s rastojanjem 0 |
| Lijepljenje u drugi program (sistemska međuspremnik) | Izvezite DXF, STEP, STL ili 3MF |
| Unos lukova, relativnih ili polarnih koordinata | Unesite linije i kružnice; lukove crtajte alatom Luk |
| Odabir geometrije bez pokazivača | Treba klik ili dodir |

## Parametri i jedinice

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Konfiguracije koje mijenjaju materijale; CSV tabela dizajna koja isključuje elemente | Konfiguracije postavljaju parametre i uključuju i isključuju elemente: vidi [Konfiguracije i tabele dizajna](topic:design-tables); `partcraft variants` pravi sačuvane konfiguracije po imenu, uključujući isključene elemente: vidi [Napravite paket varijanti iz svojih konfiguracija](topic:variant-pack) |
| Jednačine na brojevima panela najnovijih elemenata (ravan, provlačenje, nagib i slično) | Napišite ih u skripti ili s `partcraft set` ([Skripte i komandna linija](topic:scripts-and-cli)) |
| Dio prikazan u inčima | Veličine se prikazuju u milimetrima; upišite `2in` u polje za broj ili izraz i postaje 50,8 |

## Datoteke

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Uređivanje sopstvenih elemenata uvezenog STEP tijela (dolazi bez historije) | Dodajte ili uklonite materijal vlastitim elementima |
| Čitanje boja, imena, strukture sklopa i PMI iz STEP-a | Nije dostupno |
| Izvoz glTF, OBJ, IGES, Parasolid; DWG 3D dijela (samo paket varijanti piše DWG: list crteža) | STL ili 3MF za mreže; STEP za tijela; DXF za 2D |
| Otvaranje IGES, DXF ili tuđih datoteka drugih programa (datoteke `.3dm` se otvaraju kao jedno tijelo: [Otvaranje .3dm modela kao čvrstog tijela](topic:open-3dm-files)) | Zatražite STEP, ili zatvorenu STL, OBJ ili 3MF mrežu: [Otvaranje STL, OBJ ili 3MF](topic:open-meshes) |
| Struktura sklopa (stablo s imenima dijelova) u izvezenom STEP-u | STEP sklopa je jedan složeni dio postavljenih tijela |
| Čuvanje u fascikli koju sami birate bez preuzimanja u pregledaču | Uključite „pitaj gdje da sačuvam” u postavkama preuzimanja pregledača |

## Crteži

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Kote izvan tri ukupne veličine (veličine rupa, položaji, tolerancije veličina) | Označite PDF ili izvezite DXF i kotirajte ga u 2D CAD programu |
| Više od jednog presjeka ili detalja; poravnati, izlomljeni i pomoćni pogledi | Jedan presjek i jedan detalj po crtežu |
| Slobodan tekst, napomene i tabele na listu (osim naslovnih i revizijskih blokova) | Napomena o završnoj obradi, ili tekst dodan u PDF |
| Projekcija prvog ugla, pokretni pogledi, uspravni listovi | Treći ugao, automatski raspored, pejzažni listovi A4–A0 i ANSI A–E |
| Živi presjek: više ravni ili kutija presjeka odjednom, obris oko reza, čuvanje presjeka u datoteci | Jedna ravan u jednom trenutku iz {{ui:Prikazi}} › {{ui:Prikaz presjeka}}; vidi [Pogled unutra pomoću presjeka](topic:section-view) |
| Crteži sklopa s više pogleda, kota ili balona koje možete pomjerati | Jedan izometrijski (ili rastavljeni) pogled s automatskim balonima i listom dijelova |
| Kopiranje i lijepljenje GD&T i simbola završne obrade | Postavite svaki s Baza, Okvir ili Završna obrada |
| Priručnici: STEP datoteke u {{ui:Iz druge datoteke…}} programa Ilustracija, model poslan direktno iz ModelCrafta ili BimCrafta, slike kvaliteta praćenja zraka, interaktivni 3D u PDF-u | Otvorite STEP u Dizajnu i pokrenite priručnik {{ui:Iz otvorenog dijela}}; sačuvajte model kao glTF (.glb); PNG slike 3D prikaza; interaktivna 3D datoteka: vidi [Pokretanje priručnika u Ilustraciji](topic:illustrate) |

## Sklopovi

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Zupčani, zupčasta letva, bregasti i vijčani zglobovi; kuglasti zglob ograničen na konus; zglobovi na zakrivljenim površinama ili između tačaka | Kruti, rotacioni, klizni, cilindrični, ravni, kuglasti i zglobovi klin-u-žlijebu na ravnim površinama, svaka vrijednost sa svojim granicama: vidi [Izrada sklopa](topic:build-assembly) |
| Rastavljeni koraci koji okreću dijelove, i povlačenje dijelova koje zglobovi postavljaju | Pravi koraci rastavljanja; uklonite zglob da pomjerite dio rukom |
| Podsklopovi | Samo jedan nivo dijelova |
| Zupčanici, bregovi, kontakt | Nije dostupno |

## Izrada

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| 3D adaptivno čišćenje i ofset grubo obrađivanje u 3D; završna obrada po z visini (waterline), olovkom, radijalna i spiralna; adaptivni prolazi zapisani kao lukovi | 3D grubo obrađivanje u pravim redovima i obrada preostalog materijala: vidi [3D grubo obrađivanje i obrada preostalog materijala](topic:rough-3d); završna obrada Paralelno i Scallop: vidi [3D završna obrada](topic:finish-3d); 2,5-osno čelo, džep, 2D adaptivno, kontura, bušenje i skošenje: vidi [Izrada putanja alata i G-kod](topic:manufacture) |
| Rezanje oštrom ivicom (swarf), putanje toka i višeosno grubo obrađivanje, kodovi nagnute radne ravni (G68.2), provjere sudara držača i mašine; simulacija 5-osnih i rotacionih rezova | Nagnut alat za bilo koju operaciju, 5-osna završna obrada kuglastim glodalom i završna obrada rotacionom 4. osom: vidi [4- i 5-osna obrada](topic:multi-axis) |
| Bušenje unutrašnjosti i unutrašnji navoji na tokarilici, ciklusi G71/G76, lukovi u putanjama struganja, živi alati, pomoćno vreteno | Vanjsko struganje: čeono, grubo, završno, utor, odrezivanje, navoj, bušenje na centru: vidi [Struganje na tokarilici](topic:turning) |
| Sondiranje ugla ili ugla, postavljač alata, mjerenje veličine naspram tolerancije | Sondiranje površine, strane, rupe ili izbočine za postavljanje pomaka radnog koordinatnog sistema: vidi [Sondiranje](topic:probing) |
| Provjere sudara držača i vrata alata | Pratite upozorenja o dužini žlijeba i provjerite u simulatoru vaše upravljačke jedinice |
| Vijek trajanja alata i ciklusi podprograma u postprocesoru; učitavanje tuđih datoteka postprocesora | Napišite ili promijenite postprocesor u vlastitom formatu PartCrafta: vidi [Postprocesori koje možete uređivati](topic:post-processors) |
| G-kod u inčima (G20) | Samo milimetri (G21) |

## Simulacija i generativni dizajn

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Nelinearne analize: popuštanje, velike deformacije, kontakt između dijelova, zamor | Linearno statičko i prirodne frekvencije: vidi [Provjera naprezanja i progiba](topic:simulation); držite faktor sigurnosti dobro iznad 1 |
| Nelinearno izvijanje (nesavršenosti, post-izvijanje, preskakanje) | Linearni faktori opterećenja izvijanjem uz velike rezerve: vidi [Toplota, toplotno naprezanje i izvijanje](topic:thermal-and-buckling) |
| Zračenje između površina (faktori pogleda), kontaktni otpor, materijali zavisni od temperature, inercija u toplotnom naprezanju (toplotni udarni talasi) | Zračenje prema okolini, stacionarno ili kvazi-statičko toplotno naprezanje u vremenu, konstantna svojstva: vidi [Toplota, toplotno naprezanje i izvijanje](topic:thermal-and-buckling) |
| Automatsko profinjenje za prelazni prijenos toplote i analize s toplotnim opterećenjem; grublja mreža gdje je greška mala; cilj na lokalnoj veličini (vršno naprezanje u jednoj tački) | **Automatski profinjuj** za statičke, izvijajuće, prirodne frekvencije i stacionarne toplotne analize, na grešci cijelog dijela: vidi [Provjera naprezanja i progiba](topic:simulation); inače smanjite veličinu elementa |
| Opterećenja ležaja i vijaka, udaljene sile, momenti, opruge, propisani pomaci | Sile i pritisci na površinama, gravitacija; fiksne i bez trenja površine |
| Simulacija sklopova; materijali koji se razlikuju po smjeru (štampani slojevi, kompoziti) | Jedan dio, jedan izotropni materijal |
| Više niti rješavača za tetraedarske analize, prijenos toplote i generativni dizajn; bilo koje niti na stranici koja nije međusobno izolovana po porijeklu | Analize voksela, izvijanje, naprezanje u vremenu i laminarni tok koriste niti gdje stranica to dozvoljava: vidi [Postavke PartCrafta](topic:settings) |
| Turbulentni tok s tačnošću za projektovanje (model Spalart–Allmaras je uključen kao eksperimentalan: trenje u cijevi 30 do 34 % previsoko, ponovno pripajanje iza stepenice 21 do 39 % prekratko; planirano: finije ćelije uz zidove), toplota u toku, nestacionarni (vremenski tačan) tok, slobodne površine, nenjutnovske tečnosti, rotirajući dijelovi | Laminarni, stacionarni, izotermni tok Njutnovske tečnosti, ili eksperimentalni turbulentni model za kvalitativne obrasce: vidi [Simulacija strujanja fluida](topic:flow-simulation); panel upozorava kad je Rejnoldsov broj iznad laminarnog |
| Granice naprezanja i proizvodna pravila (previsi, smjerovi glodanja) u generativnom dizajnu; više materijala u jednom obliku | Najkruči oblik za zapreminu; provjerite ishod u Simulaciji: vidi [Razvijanje oblika iz opterećenja](topic:generative-design) |
| Ishod kao izmjenjivo (glatko, parametarsko) tijelo | STL, STEP s facetama ili dio s ishodom kao uvezenim tijelom s facetama |
| Dizajn električne mašine: rotor koji se okreće u statoru, moment naspram ugla, zasićeni čelik, magneti koji gube jačinu iza koljena, vrtložne struje i gubici u gvožđu i bakru; magnetna polja u 3D ili na zakrivljenim mrežama | Linearna 2D magnetostatika na mreži u biblioteci analiza: zavojnice, gvožđe, trajni magneti na njihovoj krivoj povrata, zračni procjepi, induktivnost i privlačenje: vidi [Magnetna polja u 2D](topic:magnetic-fields-2d) |

## Skripte

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Pomoć pri lebdenju, prekidne tačke i korak kroz skriptu u uređivaču skripti | Traženje, sklapanje i dovršavanje su tu (vidi [Pisanje i pokretanje skripti](topic:craftscript)); za ostalo, vaš vlastiti uređivač: {{ui:Spasi}} i {{ui:Otvori}} u grupi Skripta prenose skripte unutra i van; ugrađene funkcije su navedene u [Jezik CraftScript](topic:craftscript-language) |
| Prekidne tačke i korak kroz skriptu | `disp` i `fprintf` usput; {{key:Mod+Enter}} pokreće nekoliko odabranih linija odjednom |
| Polja i grafikoni koje skripta prikazuje, nacrtani u radnom prostoru Dizajna; skripte koje mijenjaju parametre dijela | Prikazuju se u radnom prostoru Skripte; skripte čitaju parametre s `param` (vidi [Pisanje i pokretanje skripti](topic:craftscript)), mijenjaju ih na kartici {{ui:Parametri}} |
| Slike i tabele uz grafikone; uređivanje grafikona (zumiranje, granice osa) prije čuvanja | Uporedni prikaz pokazuje grafikone; sačuvajte grafikon kao PNG, SVG ili CSV i završite ga drugdje |
| numpy i drugi Python paketi; Python van mreže; sklapanje Pythona u uređivaču; Pascal Script | Standardna biblioteka Pythona, CraftScript i Lua: vidi [Skripte u Pythonu](topic:craftscript-python) |
| Prosljeđivanje Lua funkcija ugrađenim funkcijama; pozivanje bibliotečke funkcije iz Lue po imenu sastavljenom dok skripta radi | Napišite ime bibliotečke funkcije u skripti (`cs.static_tet(…)`), ili je pozovite iz CraftScript skripte |

## Aplikacija

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Čuvanje u oblaku, dijeljenje i historija verzija | Još nije dostupno. Sačuvajte datoteke na računar i čuvajte verzije po imenu |
| PartCraft kao instalirana aplikacija na iPadu i iPhoneu | Koristite PartCraft u pregledaču uređaja; na Androidu i na računaru radi i u CadCraft Studiju (getcadcraft.com/download) |
| Kontekstni (desni klik) meniji | Alatna traka i desni panel |
| Potpuno rad van mreže od početka | Samo kad je aplikacija sačuvana za rad van mreže: vidi [Rad van mreže](common:offline) |

Javite šta vam najviše nedostaje preko stranice za podršku: to oblikuje šta dolazi sljedeće.

## Inženjer (generatori i polja)

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Priključci, ventili i spojnice na generisanom izmjenjivaču toplote; krive temperature za čvrstoću materijala; gubici u T-spoju u razvodniku | Generatori grade jezgro i cijevi; dodajte spojnice u Dizajnu; koristite vrijednosti materijala na sobnoj temperaturi s faktorom sigurnosti |
| Dodavanje generatora iz direktorijuma dodataka jednim klikom | {{ui:Otvori}} u radnom prostoru Inženjer dodaje generator iz datoteke |
| Datoteka polja finija od sopstvene voksel veličine generatora; čitanje `.vdb` datoteka | Sačuvajte finije polje iz skripte; `.vdb` se zapisuje, ne čita |
| Proračuni za posude pod pritiskom po kodu | Udžbeničke formule za tanke i debele zidove, s faktorom sigurnosti koji izaberete; nije margina po kodu |
| Generatori za ostale aplikacije | Samo PartCraft u ovoj verziji |
