---
title: Što još nije izrađeno
summary: Sve što ova verzija PartCrafta još ne radi, od uvijanja provlačenja do prikaza u inčima, kota crteža i podsklopova, s onim što umjesto toga radite danas.
keywords: nedostaje, još nije, ograničenja, ograničenje, plan razvoja, točna jezgra, zaobljenje, skošenje, ljuska, provlačenje, loft, uvoz STEP, simulacija, proizvodnja, uvijeni provlak, tangencija kraja lofta, zaobljenje plohe, jednadžbe, inči, kote crteža, podsklopovi, oblak, tablet, telefon
from: 97b10a29
---

PartCraft je rana verzija. Ova stranica navodi što još ne radi, kako je ne biste tražili, i što umjesto toga radite danas. Ništa ovdje nema datum.

## Treba točna jezgra

Ova verzija gradi svaki dio s jezgrom mreže (vidi [Jezgra mreže](topic:solid-kernels)). Sve dolje navedeno treba točnu geometrijsku jezgru, koje ova verzija još nema. Dijelovi spremljeni s tim značajkama i dalje se otvaraju: značajke ostaju u povijesti, označene kao neizrađene, i zadržavaju se pri spremanju.

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| {{ui:Zaobljenje}} i {{ui:Skošenje}} na zaobljenim bridovima; zaobljenja kojima se polumjer mijenja duž brida; zaobljenja glatko stopljena tamo gdje se spajaju (jezgra mreže ih spaja kosim rezom) | Zaobljenje i skošenje rade na ravnim bridovima između ravnih ploha; ostale kutove zaoblite u skici prije izvlačenja ({{ui:Zaobljenje}} u skici, {{key:F}}) |
| {{ui:Ljuska}} koja otvara zakrivljene plohe; stijenke različitih debljina | Otvorite ravne plohe; dodajte materijal izvlačenjem gdje stijenka treba biti deblja |
| {{ui:Provlačenje}}, {{ui:Loft}}, {{ui:Nagib}} na zakrivljenim plohama; izvlačenje do plohe, sljedeće plohe ili vrha; koničnih izvlačenja | Izvucite ili rotirajte, u koracima gdje treba; izvucite do dubine koju izmjerite |
| {{ui:Rebro}}, {{ui:Osnovna prirubnica}}, {{ui:Rubna prirubnica}} i ravni uzorci | Izvucite ploču ili profil rebra |
| Plohe: završna obrada {{ui:Oblik}} u dio, {{ui:Zakrpa}}, {{ui:Loft površina}}, {{ui:Gordonova površina}}, {{ui:Zašij}}, {{ui:Zadebljaj}}, {{ui:Odmakni površinu}}, {{ui:Produži površinu}}, {{ui:Skrati površinu}} | Nije dostupno |
| Više tijela: {{ui:Kombiniraj}}, {{ui:Pomakni tijelo}}, {{ui:Skaliraj tijelo}}, {{ui:Uzorak po putanji}}, značajke koje stvaraju novo tijelo | Jedno puno tijelo; uzorci i zrcaljenje kopiraju značajke |
| Skice, ravnine, osi i točke na plohama koje samo točna jezgra može naći (ploha nastala zaobljenjem, stijenka rupe, ploha uvezenog tijela) | Skicirajte na osnovnim ravninama, referentnim ravninama i ravnim plohama izvlačenja i rotacija |
| Ishod generativnog dizajna otvoren kao dio ili dodan u njega (postaje uvezeno tijelo) | Preuzmite ishod kao STL ili STEP |
| Uređivanje zakrivljenih ploha otvorene STEP datoteke kao točnih ploha; točni STEP splajn, provučenih i rotiranih ploha iz STEP datoteke, bočne strane splajna, modelirani navoji, tijela STL / OBJ / 3MF i sklopovi; STEP za druge modelare dijelova | {{ui:Otvori}} čita STEP kao trokute i zadržava ravne plohe, valjke, stošce, kugle i torusi datoteke za izvoz ([Otvaranje STEP datoteke](topic:import-step)); {{ui:Izvoz}} › {{ui:STEP AP242 (egzaktno tijelo)}} zapisuje svaku analitičku plohu točno i zadržava ih kao mrežu trokuta ([Izvoz](topic:export-files#for-other-cad-programs-step)); makro za drugi modeler dijelova i dalje zapisuje |
| Pravi lukovi u prikazima crteža | Prikazi i prikazi presjeka crtaju se iz mreže trokuta |
| Točni volumeni, površine i udaljenosti | {{ui:Mjeri}} daje brojke tijela iz mreže trokuta, pomalo niske na zaobljenim dijelovima; finija postavka **Krivulje** ih približava |

Neki retci u tablicama ispod predlažu jednu od ovih značajki kao zaobilazni put. Ti prijedlozi vrijede kad se vrati točna jezgra.

## Značajke

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Zaobljenja ploha, puna zaobljenja, zaobljenja s polumjerima postavljenim u točkama duž brida | {{ui:Zaobljenje}} konstantnog ili linearno promjenjivog polumjera; više značajki zaobljenja |
| Ljuske s različitim debljinama stijenki | Jedna debljina za {{ui:Ljuska}}; dodajte materijal izvlačenjem gdje stijenka treba biti deblja |
| Nagib na slobodnim (splajn) plohama | {{ui:Nagib}} radi na ravnim, cilindričnim i stožastim plohama |
| Uvijeni provlaci, provlaci tankih stijenki i ploha; tangencija kraja na značajki Loft; loft s jednom vodilicom; putanje splajna | {{ui:Provlačenje}} s fiksnom orijentacijom ili krajnjim mjerilom; loft s dvije ili više vodilica: vidi [Provlačenje, loft i nagib](topic:sweep-loft-draft) |
| Rebra iz lukova ili splajnova; rebra izrasla okomito na skicu (iz pogleda odozgo); nagib na rebrima; više rebara iz jedne skice | {{ui:Rebro}} iz jednog lanca linija u vlastitoj ravnini rebra: vidi [Rebra i rebra za učvršćenje](topic:rib) |
| „Do“ zakrivljene plohe, „do sljedeće“ zaustavljanje na zakrivljenoj plohi | Do ravne plohe ili referentne ravnine |
| Upuštene rupe, inčni i cijevni navoji, konični navoji, izlazi navoja i skošeni početci navoja | Upuštanje male dubine; ISO metrički i trapezni navoji, kozmetički ili modelirani: vidi [Navoji na osovinama i provrtima, nacrtani ili modelirani](topic:threads) |
| Izvlačenja tankih značajki | Nacrtajte obje stijenke profila |
| Preskočene pojedinačne kopije uzorka, uzorci ispune | Koristite zasebne značajke; uzorci duž krivulje: {{ui:Uzorak po putanji}} |
| Kopiranje uzoraka, zrcaljenja, zaobljenja, skošenja, ljuske i uvezena tijela | Kopirajte skicu ili značajku na kojoj su izgrađeni ili napravite uzorak |
| Točna (G1) tangencija u posebnim točkama oblika; spajanje zakrpa oblika u veće plohe | Povisite razinu oblika: aproksimirane zakrpe postaju manje; vidi [Slobodni oblici s Oblikom](topic:form-surfaces) |
| Oblik sastavljen od više zasebnih zatvorenih dijelova u jednoj značajki; mostovi između oblika | Jedan zatvoreni dio po značajki Oblik; spojite ih naredbom Spoji |
| Odabir tijela ploha u prikazu (osim točaka skraćivanja i zakrpe); zaobljenja ploha; poništavanje skraćivanja; G2 zakrpe; Gordonove plohe tangentne na zakrivljene susjede (tangencija na ravnine i ravne plohe je izrađena) | Odaberite ih po imenu na ploči značajke; prvo zadebljajte, zatim zaobljujte puno tijelo |
| Popis tijela u povijesti; izostavljanje skrivenih tijela iz izvoza | Preimenujte i sakrijte tijela na popisu tijela na ploči dijela; izbrišite ili potisnite značajku koja je stvorila tijelo da ga izostavite |
| Neujednačeno mjerilo koje zadržava valjke i stošce analitičkima; neujednačeno skaliranje odmaknutih ploha | {{ui:Skaliraj tijelo}} pretvara zakrivljene plohe u zatvorene B-splajnove (unutar 0.0000004 mm); ujednačeno mjerilo ostaje točno |
| Spajanje tijela ploha; Minkowskijeve sume | Prvo {{ui:Zašij}} ili {{ui:Zadebljaj}}, zatim {{ui:Kombiniraj}} |
| Analiza tolerancija: lanci tolerancija koji skreću za kutove (2D i 3D vektorske petlje), osjetljivosti izračunate iz geometrije, Monte Carlo s drugim raspodjelama, tolerancije veličina na kotama skice, bonus tolerancija iz stanja materijala | {{ui:Lanac tolerancija}} u sklopu: jedan smjer, najgori slučaj i RSS, tolerancije upisane, iz opće tolerancije zaglavlja crteža ili iz GD&T okvira: vidi [Lanci tolerancija](topic:tolerance-stackup) |
| Slaganje: redoslijed rezanja i ulazi, rezanje zajedničkih bridova jednom, dijelovi koji moraju ostati zajedno; ostaci role, sirovac dijeljen među projektima | {{ui:Slaganje ravnih dijelova na limove…}} s razmacima, marginama, okretanjem i smjerom vlakana: vidi [Slaganje ravnih dijelova na limove](topic:nest-flat-parts); preostale ploče čuvaju se i koriste prve: vidi [Čuvanje i ponovna upotreba otpadaka](topic:nest-offcuts); planirajte rezanje u vlastitom softveru za rezanje |
| Lim: rubovi, prijelazi, pokošene i konturne prirubnice; prirubnice na zakrivljenim bridovima ili plohama savijene osnovne prirubnice; nacrtani savoji; zatvaranja kutova; alati za oblikovanje; pretvorba tijela u lim; ravna ploha savijene osnovne prirubnice s rezovima; tablice savijanja | {{ui:Osnovna prirubnica}} (ploča ili savijeni profil), {{ui:Rubna prirubnica}} na ravnim bridovima ploče s rasterećenjima savoja i ravni uzorak s K-faktorom: vidi [Lim](topic:sheet-metal) |
| Analiza nagiba na sklopovima; pronalaženje linije rastavljanja; analiza debljine stijenke | {{ui:Analiza nagiba}} na dijelu u Dizajnu: vidi [Provjera nagiba za prešanje i lijevanje](topic:draft-analysis); otvorite svaki dio sklopa i provjerite ga |

## Skice

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Elipse, tangentni lukovi, konike, splajnovi zadanog stupnja ili težina (NURBS) | Splajnovi (kubični), lukovi i kružnice s tangentnim odnosima |
| Točka na splajnu (odnos), odnosi zakrivljenosti (G2) | Postavite vlastitu točku splajna tamo gdje mora prolaziti |
| Odmaknute kopije splajnova koje prate kasnije promjene; odmaci lanaca s oštrim kutovima splajna | Odmaknite ponovno nakon promjene; prvo zaoblite kut |
| Kopije uzoraka koje ostaju povezane s izvornikom; uzorci duž krivulje | Ponovno napravite uzorak nakon promjene |
| Projiciranje slobodnih ili nagnutih kružnih bridova, projicirana geometrija koja prati dio | Projicirajte ravne i paralelne kružne bridove, zatim kotirajte |
| Vođene (referentne) kote | Očitajte veličine s ploče ili podataka o dijelu |
| Kolinearni odnosi | Paralelno s udaljenosti 0 |
| Lijepljenje u drugi program (međuspremnik sustava) | Izvezite DXF, STEP, STL ili 3MF |
| Upisivanje lukova, relativnih ili polarnih koordinata | Upišite linije i kružnice; lukove nacrtajte alatom Luk |
| Odabir geometrije bez pokazivača | Treba klik ili dodir |

## Parametri i jedinice

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Konfiguracije koje mijenjaju materijale; CSV tablica dizajna koja isključuje značajke | Konfiguracije postavljaju parametre i uključuju ili isključuju značajke: vidi [Konfiguracije i tablice dizajna](topic:design-tables); `partcraft variants` gradi spremljene konfiguracije po imenu, uključujući isključene značajke: vidi [Napravite paket varijanti iz svojih konfiguracija](topic:variant-pack) |
| Jednadžbe u brojevima na pločama najnovijih značajki (ravnina, provlačenje, nagib i slično) | Napišite ih u skripti ili naredbom `partcraft set` ([Skripte i naredbeni redak](topic:scripts-and-cli)) |
| Dio prikazan u inčima | Veličine se prikazuju u milimetrima; upišite `2in` u polje za broj ili izraz i postat će 50.8 |

## Datoteke

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Uređivanje vlastitih značajki uvezenog STEP tijela (dolazi bez povijesti) | Dodajte ili izrežite materijal vlastitim značajkama |
| Čitanje boja, naziva, strukture sklopa i PMI iz STEP-a | Nije dostupno |
| Izvoz glTF, OBJ, IGES, Parasolid; DWG 3D dijela (samo paket varijanti zapisuje DWG: list crteža) | STL ili 3MF za mreže; STEP za tijela; DXF za 2D |
| Otvaranje IGES, DXF ili vlastitih datoteka drugih programa (datoteke `.3dm` otvaraju se kao jedno tijelo: [Otvaranje .3dm modela kao punog tijela](topic:open-3dm-files)) | Zatražite STEP ili zatvorenu mrežu STL, OBJ ili 3MF: [Otvaranje STL, OBJ ili 3MF](topic:open-meshes) |
| Struktura sklopa (stablo s nazivima dijelova) u izvezenom STEP-u | STEP sklopa je jedan složeni dio od postavljenih tijela |
| Spremanje u mapu po vašem izboru bez preuzimanja preglednika | Uključite „pitaj gdje spremiti“ u postavkama preuzimanja preglednika |

## Crteži

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Kote osim tri ukupne veličine (veličine rupa, položaji, tolerancije veličina) | Označite PDF ili izvezite DXF i kotirajte ga u 2D CAD programu |
| Više od jednog presjeka ili detalja; poravnati, izlomljeni i pomoćni prikazi | Jedan presjek i jedan detalj po crtežu |
| Slobodni tekst, bilješke i tablice na listu (osim zaglavlja i bloka revizija) | Napomena o završnoj obradi ili tekst dodan u PDF |
| Projekcija prvog kuta, pomični prikazi, uspravni listovi | Treći kut, automatski raspored, ležeći listovi A4–A0 i ANSI A–E |
| Živi prikaz presjeka: više ravnina ili kutija presjeka odjednom, obris oko reza, spremanje presjeka u datoteku | Jedna ravnina u jednom trenutku iz {{ui:Pogledi}} › {{ui:Prikaz presjeka}}; vidi [Pogled unutra pomoću prikaza presjeka](topic:section-view) |
| Crteži sklopova s više prikaza, kota ili balona koje možete pomicati | Jedan izometrijski (ili rastavljeni) prikaz s automatskim balonima i popisom dijelova |
| Kopiranje i lijepljenje GD&T i simbola završne obrade | Postavite svaki s Referenca, Okvir ili {{ui:Završna obrada}} |
| Priručnici: STEP datoteke u {{ui:Iz druge datoteke…}} aplikacije Illustrate, model predan izravno iz ModelCraft ili BimCraft, slike u kvaliteti praćenja zraka, interaktivni 3D unutar PDF-a | Otvorite STEP u Dizajnu i pokrenite priručnik {{ui:Iz otvorenog dijela}}; spremite model kao glTF (.glb); PNG slike 3D prikaza; interaktivna 3D datoteka: vidi [Pokretanje priručnika u Illustrateu](topic:illustrate) |

## Sklopovi

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Zupčasti, zupčana letva, bregasti i vijčani zglobovi; kuglasti zglob ograničen na stožac; zglobovi na zakrivljenim plohama ili između točaka | Kruti, rotacijski, klizni, cilindrični, ravninski, kuglasti i zglobovi čep-u-utoru na ravnim plohama, svaka vrijednost sa svojim ograničenjima: vidi [Izrada sklopa](topic:build-assembly) |
| Koraci rastavljanja koji okreću dijelove i povlačenje dijelova koje postavljaju zglobovi | Ravni koraci rastavljanja; uklonite zglob da ručno pomaknete dio |
| Podsklopovi | Samo jedna razina dijelova |
| Zupčanici, bregovi, kontakt | Nije dostupno |

## Proizvodnja

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| 3D prilagodljivo čišćenje i odmaknuto grubo obrađivanje u 3D; završna obrada waterline, olovkom, radijalna i spiralna; prilagodljivi prolazi zapisani kao lukovi | 3D grubo obrađivanje ravnim redovima i dorada ostataka: vidi [3D grubo obrađivanje i dorada ostataka](topic:rough-3d); završna obrada Paralelno i Zubasto (scallop): vidi [3D završna obrada](topic:finish-3d); 2.5-osna ploha, džep, 2D prilagodljivo, kontura, bušenje i skošenje: vidi [Izrada putanja alata i G-koda](topic:manufacture) |
| Rezanje bočnom stranom glodala, putanje linija toka i višeosnog grubog obrađivanja, kodovi nagnute radne ravnine (G68.2), provjere sudara držača i stroja; simulacija 5-osnih i rotacijskih rezova | Nagnuti alat za bilo koju operaciju, 5-osna završna obrada kuglastim glodalom i rotacijska završna obrada 4. osi: vidi [4- i 5-osna obrada](topic:multi-axis) |
| Bušenje i unutarnji navoji na tokarilici, ciklusi G71/G76, lukovi u putanjama tokarenja, aktivni alati, pomoćno vreteno | Vanjsko tokarenje: planiranje, grubo, završno, utor, odrezivanje, navoj, bušenje na središtu: vidi [Tokarenje na tokarilici](topic:turning) |
| Sondiranje kuta ili kuta obratka, mjerač alata, mjerenje veličine naspram tolerancije | Sondiranje plohe, strane, rupe ili izbočine radi postavljanja radnog pomaka: vidi [Ticanje](topic:probing) |
| Provjere sudara držača i prihvata | Pazite na upozorenja o duljini zubaca i provjerite u simulatoru upravljača |
| Ciklusi vijeka alata i potprograma u postprocesoru; učitavanje tuđih datoteka postprocesora | Napišite ili promijenite postprocesor u vlastitom formatu PartCrafta: vidi [Postprocesori koje možete uređivati](topic:post-processors) |
| G-kod u inčima (G20) | Samo milimetri (G21) |

## Simulacija i generativni dizajn

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Nelinearne analize: popuštanje, veliki progibi, kontakt između dijelova, zamor | Linearna statika i prirodne frekvencije: vidi [Provjera naprezanja i progiba](topic:simulation); držite faktor sigurnosti znatno iznad 1 |
| Nelinearno izvijanje (nesavršenosti, poslijeizvijanje, preskakanje) | Linearni faktori opterećenja izvijanja s velikom marginom: vidi [Toplina, toplinsko naprezanje i izvijanje](topic:thermal-and-buckling) |
| Zračenje među plohama (faktori pogleda), kontaktni otpor, materijali ovisni o temperaturi, inercija u toplinskom naprezanju (toplinski udarni valovi) | Zračenje u okolinu, ustaljeno ili kvazistatičko toplinsko naprezanje tijekom vremena, konstantna svojstva: vidi [Toplina, toplinsko naprezanje i izvijanje](topic:thermal-and-buckling) |
| Automatsko profinjenje za prolaznu toplinu i analize s toplinskim opterećenjem; grublja mreža gdje je greška mala; cilj na lokalnu veličinu (vršno naprezanje na jednom mjestu) | **Automatsko profinjenje** za statičke, izvijanje, prirodne frekvencije i ustaljene toplinske analize, prema grešci na cijelom dijelu: vidi [Provjera naprezanja i progiba](topic:simulation); inače smanjite veličinu elementa |
| Opterećenja ležajeva i vijaka, udaljene sile, momenti, opruge, zadani pomaci | Sile i tlakovi na plohama, gravitacija; fiksne i bez trenja plohe |
| Simulacija sklopova; materijali koji se razlikuju po smjeru (ispisani slojevi, kompoziti) | Jedan dio, jedan izotropni materijal |
| Više niti rješavača za tetraedarske analize, prijenos topline i generativni dizajn; bilo kakve niti na stranici koja nije izolirana od izvora | Voxel analize, izvijanje, naprezanje tijekom vremena i laminarni tok koriste niti gdje stranica to dopušta: vidi [Postavke PartCrafta](topic:settings) |
| Turbulentni tok s točnošću za projektiranje (model Spalart–Allmaras je uključen kao eksperimentalni: trenje u cijevi 30 do 34 % veće, ponovno pripajanje nakon stepenice 21 do 39 % kraće; planirano: finije ćelije uz stijenke), toplina u toku, nestacionarni (vremenski točan) tok, slobodne površine, nenewtonske tekućine, rotirajući dijelovi | Laminarni, ustaljeni, izotermni tok newtonovske tekućine ili eksperimentalni turbulentni model za kvalitativne obrasce: vidi [Simulacija strujanja fluida](topic:flow-simulation); ploča upozorava kad je Reynoldsov broj iznad laminarnog |
| Granice naprezanja i proizvodna pravila (previsi, smjerovi glodanja) u generativnom dizajnu; više materijala u jednom obliku | Najkruti oblik za volumen; provjerite ishod u Simulaciji: vidi [Razvoj oblika iz opterećenja](topic:generative-design) |
| Ishod kao tijelo koje se može uređivati (glatko, parametarsko) | STL, STEP s mrežom trokuta ili dio s ishodom kao uvezenim tijelom s mrežom trokuta |
| Projektiranje električnih strojeva: rotor koji se okreće u statoru, moment naspram kuta, zasićeni čelik, magneti koji gube snagu iza koljena, vrtložne struje i gubici u željezu i bakru; magnetska polja u 3D ili na zakrivljenim mrežama | Linearna 2D magnetostatika na mreži u biblioteci analize: zavojnice, željezo, trajni magneti na njihovoj liniji povrata, zračni raspori, induktivitet i sila privlačenja: vidi [Magnetska polja u 2D](topic:magnetic-fields-2d) |

## Skripte

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Pomoć pri lebdenju, prekidne točke i korak po korak u uređivaču skripti | Traženje, sažimanje i dovršavanje su uključeni (vidi [Pisanje i pokretanje skripti](topic:craftscript)); za ostalo, vlastiti uređivač: {{ui:Spremi}} i {{ui:Otvori}} u grupi Skripta prenose skripte unutra i van; ugrađene funkcije navedene su u [Jezik CraftScript](topic:craftscript-language) |
| Prekidne točke i korak kroz skriptu | `disp` i `fprintf` usput; {{key:Mod+Enter}} pokreće nekoliko odabranih redaka odjednom |
| Polja i grafikoni koje skripta prikazuje crtaju se u radnom prostoru Dizajn; skripte koje mijenjaju parametre dijela | Prikazuju se u radnom prostoru Skripta; skripte čitaju parametre s `param` (vidi [Pisanje i pokretanje skripti](topic:craftscript)), a mijenjaju ih na kartici {{ui:Parametri}} |
| Slike i tablice uz grafikone; uređivanje grafikona (zumiranje, granice osi) prije spremanja | Uz stranu prikazuje grafikone; spremite grafikon kao PNG, SVG ili CSV i dovršite ga drugdje |
| numpy i ostali paketi Pythona; Python izvan mreže; sažimanje Pythona u uređivaču; Pascal Script | Standardna biblioteka Pythona, CraftScript i Lua: vidi [Skripte u Pythonu](topic:craftscript-python) |
| Prosljeđivanje Lua funkcija ugrađenim funkcijama; pozivanje funkcije biblioteke iz Lua-e po imenu sastavljenom dok skripta radi | Napišite ime funkcije biblioteke u skripti (`cs.static_tet(…)`) ili je pozovite iz CraftScript skripte |

## Aplikacija

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Spremanje u oblak, dijeljenje i povijest verzija | Još nije dostupno. Spremajte datoteke na računalo i čuvajte verzije po imenu |
| PartCraft kao instalirana aplikacija na iPadu i iPhoneu | Koristite PartCraft u pregledniku uređaja; na Androidu i na radnoj površini radi i u aplikaciji CadCraft Studio (getcadcraft.com/download) |
| Kontekstni (desni klik) izbornici | Alatna traka i desna ploča |
| Potpuni rad izvan mreže od prvog pokretanja | Samo kad je aplikacija spremljena za rad izvan mreže: vidi [Rad izvan mreže](common:offline) |

Javite što vam najviše nedostaje preko stranice za podršku na web-mjestu: to oblikuje što slijedi.

## Inženjer (generatori i polja)

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Zaglavlja, priključci i spojnice na generiranom izmjenjivaču topline; krivulje temperature za čvrstoću materijala; gubici T-komada u razdjelniku | Generatori grade jezgru i cijevi; spojnice dodajte u Dizajnu; koristite podatke materijala za sobnu temperaturu uz faktor sigurnosti |
| Dodavanje generatora iz imenika dodataka jednim klikom | {{ui:Otvori}} u radnom prostoru Inženjer dodaje generator iz datoteke |
| Datoteka polja finija od vlastite veličine voxela generatora; čitanje datoteka `.vdb` | Spremite finije polje iz skripte; `.vdb` se zapisuje, ne čita |
| Proračuni prema normi za posude pod tlakom | Udžbenički formule za tanke i debele stijenke, uz faktor sigurnosti koji odaberete; nije marža norme |
| Generatori za ostale aplikacije | U ovoj verziji samo PartCraft |
