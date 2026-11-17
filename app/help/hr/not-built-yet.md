---
title: Što još nije izrađeno
summary: Sve što ova verzija PartCraft još ne radi, od uvijajućih provlačenja do prikaza u inčima, kota crteža i podsklopova, uz to što umjesto toga raditi danas.
keywords: nedostaje, još nije, ograničenja, plan razvoja, egzaktna jezgra, zaobljenje, skošenje, ljuska, provlačenje, loft, uvoz STEP, simulacija, izrada, uvijanje provlačenja, tangentnost kraja lofta, zaobljenje plohe, jednadžbe, inči, kote crteža, podsklopovi, oblak, tablet, telefon
from: 9b868162
---

PartCraft je rana verzija. Ova stranica navodi što ona još ne radi, da to ne tražite, i što raditi umjesto toga danas. Ništa ovdje nema rok.

## Treba egzaktnu jezgru

Ova verzija izrađuje svaki dio jezgrom mreže (vidi [Jezgra mreže](topic:solid-kernels)). Sve dolje treba egzaktnu geometrijsku jezgru, a ova verzija je još nema. Dijelovi spremljeni s tim značajkama se i dalje otvaraju: značajke ostaju u povijesti, označene kao neizrađene, i čuvaju se pri spremanju.

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| {{ui:Fillet}} i {{ui:Chamfer}} na zaobljenim bridovima; zaobljenja čiji se polumjer mijenja duž brida; zaobljenja glatko stopljena tamo gdje se susreću (jezgra mreže ih reže pod kutom) | Zaobljenje i skošenje rade na ravnim bridovima između ravnih ploha; ostale kutove zaobljite u skici prije izvlačenja ({{ui:Fillet}} u skici, {{key:F}}) |
| {{ui:Shell}} koji otvara zakrivljene plohe; stijenke različitih debljina | Otvorite ravne plohe; dodajte materijal izvlačenjem tamo gdje stijenka mora biti deblja |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} na zakrivljenim plohama; izvlačenje do plohe, sljedeće plohe ili vrha; sužena izvlačenja | Izvucite ili rotirajte, po koracima gdje treba; izvucite do dubine koju izmjerite |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} i ravni uzorci | Izvucite ploču ili profil rebra |
| Površine: dovršavanje {{ui:Form}} u dio, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Nije dostupno |
| Više tijela: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, značajke koje prave novo tijelo | Jedno puno tijelo; uzorci i zrcaljenje kopiraju značajke |
| Skice, ravnine, osi i točke na plohama koje može naći samo egzaktna jezgra (ploha nastala zaobljenjem, stijenka rupe, ploha uvezenog tijela) | Skicirajte na osnovnim ravninama, referentnim ravninama i ravnim plohama izvlačenja i rotacija |
| Rezultat generativnog dizajna otvoren kao dio ili dodan u njega (postaje uvezeno puno tijelo) | Preuzmite rezultat kao STL ili STEP |
| Uređivanje zakrivljenih ploha otvorene STEP datoteke kao egzaktnih površina; egzaktni STEP splajnova, provučenih i rotiranih ploha iz STEP datoteke, bokova splajna, modeliranih navoja, tijela i sklopova u STL / OBJ / 3MF formatu; STEP za ostale modelare dijelova | {{ui:Open}} čita STEP kao trokute i zadržava ravne plohe, valjke, stošce, kugle i torusa datoteke za izvoz ([Otvaranje STEP datoteke](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} zapisuje svaku analitičku plohu egzaktno i zadržava je kao fasete ([Izvoz](topic:export-files#for-other-cad-programs-step)); makro za drugog modelera dijelova još zapisuje |
| Pravi lukovi u prikazima crteža | Prikazi i presjeci crtaju se iz fasetiranih ploha |
| Egzaktni volumeni, površine i udaljenosti | {{ui:Measure}} daje brojke fasetiranog tijela, nešto manje na okruglim dijelovima; finija postavka **Krivulje** ih približava |

Neki redovi u tablicama ispod predlažu jednu od ovih značajki kao način da se nešto drugo zaobiđe. Ti prijedlozi vrijede kad se egzaktna jezgra vrati.

## Značajke

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Zaobljenja ploha, puna zaobljenja, zaobljenja s polumjerima zadanim u točkama duž brida | Stalni ili linearno promjenjivi {{ui:Fillet}}; više značajki zaobljenja |
| Ljuske s različitim debljinama stijenki | Jedna debljina {{ui:Shell}}; dodajte materijal izvlačenjem tamo gdje stijenka mora biti deblja |
| Nagib na slobodnim (splajn) plohama | {{ui:Draft}} radi na ravnim, valjkastim i stožastim plohama |
| Uvijajuća provlačenja, tankostijena i plošna provlačenja; tangentnost kraja na značajki Loft; loft s jednom vodećom šinom; putanje od splajna | {{ui:Sweep}} s fiksnom orijentacijom ili skaliranjem kraja; loft s dvije ili više vodećih šina: vidi [Provlačenje, loft i nagib](topic:sweep-loft-draft) |
| Rebra iz lukova ili splajnova; rebra izrasla kvadratno prema skici (iz pogleda odozgo); nagib na rebrima; više rebara iz jedne skice | {{ui:Rib}} iz jednog lanca linija u vlastitoj ravnini rebra: vidi [Rebra i ojačanja](topic:rib) |
| „Do“ zakrivljene plohe, „do sljedeće“ zaustavljanje na zakrivljenoj plohi | Do ravne plohe ili referentne ravnine |
| Protuprobušene rupe, palčasti i cijevni navoji, stožasti navoji, izlazi navoja i pokošeni početci navoja | Upuštanje male dubine; metrički ISO i trapezni navoji, kozmetički ili modelirani: vidi [Navoji na osovinama i provrtima, crtani ili modelirani](topic:threads) |
| Izvlačenja tankih značajki | Nacrtajte obje stijenke profila |
| Kopije uzorka preskočene jedna po jedna, uzorci ispune | Koristite zasebne značajke; uzorci duž krivulje: {{ui:Path pattern}} |
| Kopiranje uzoraka, zrcaljenja, zaobljenja, skošenja, ljuske i uvezena tijela | Kopirajte skicu ili značajku na kojoj su izrađeni, ili napravite uzorak |
| Egzaktna (G1) tangentnost u izvanrednim točkama oblika; spajanje zakrpa oblika u veće plohe | Podignite Razinu oblika: aproksimirane zakrpe postaju manje; vidi [Slobodni oblici s Oblik](topic:form-surfaces) |
| Oblik sastavljen od nekoliko odvojenih zatvorenih dijelova u jednoj značajci; mostovi između oblika | Jedan zatvoreni dio po značajci Oblik; spojite ih s Join |
| Biranje tijela površina u prikazu (osim točaka obrezivanja i zakrpe); zaobljenja površina; uklanjanje obrezivanja; G2 zakrpe; Gordonove površine tangentne na zakrivljene susjede (tangentne na ravnine i ravne plohe su izrađene) | Odaberite ih imenom na ploči značajke; prvo zadebljajte, zatim zaobljujte tijelo |
| Popis tijela u povijesti; izostavljanje skrivenih tijela iz izvoza | Preimenujte i sakrijte tijela na popisu tijela na ploči dijela; obrišite ili potisnite značajku koja je napravila tijelo da ga izostavite |
| Nejednoliko skaliranje koje zadržava valjke i stošce analitičkima; nejednolično skaliranje odmaknutih površina | {{ui:Scale body}} čini zakrivljene plohe B-splajn zatvorenima (unutar 0,0000004 mm); jednoliko skaliranje ostaje egzaktno |
| Kombiniranje tijela površina; Minkowskijevi zbrojevi | {{ui:Stitch}} ili {{ui:Thicken}} prvo, zatim {{ui:Combine}} |
| Analiza tolerancija: lanci tolerancija koji skreću za kutove (2D i 3D vektorske petlje), osjetljivosti izvedene iz geometrije, Monte Carlo s drugim razdiobama, tolerancije veličine na dimenzijama skice, bonus tolerancija iz uvjeta materijala | {{ui:Stack-up}} u sklopu: jedan smjer, najgori slučaj i RSS, tolerancije upisane ručno, iz opće tolerancije bloka naslova ili iz GD&T okvira: vidi [Lanci tolerancija](topic:tolerance-stackup) |
| Slaganje: redoslijed rezanja i uvodni potezi, rezanje zajedničkih rubova jednom, dijelovi koji se moraju držati zajedno; ostaci rola, zaliha dijeljena među projektima | {{ui:Nest flat parts on sheets…}} s razmakom, marginama, okretima i smjerom vlakana: vidi [Slaganje ravnih dijelova na limove](topic:nest-flat-parts); ostaci ploča čuvaju se i koriste prvi: vidi [Čuvanje i ponovna upotreba odrezaka](topic:nest-offcuts); plan rezanja u vlastitom softveru rezača |
| Lim: podvijanja (hems), prijelomi, zakošene i konturne prirubnice; prirubnice na zakrivljenim bridovima ili na plohama savijene osnovne prirubnice; skicirana savijanja; zatvaranje kutova; alati za oblikovanje; pretvaranje tijela u lim; ravni uzorak savijene osnovne prirubnice s rezovima; tablice savijanja | {{ui:Base flange}} (ploča ili savijeni profil), {{ui:Edge flange}} na ravnim bridovima ploče s rasterećenjima savijanja i ravni uzorak s K-faktorom: vidi [Lim](topic:sheet-metal) |
| Analiza nagiba na sklopovima; traženje linije razdvajanja; analiza debljine stijenke | {{ui:Draft analysis}} na dijelu u Designu: vidi [Provjera nagiba za kalupljenje i lijevanje](topic:draft-analysis); otvorite svaki dio sklopa da ga provjerite |

## Skice

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Elipse, tangentni lukovi, konike, splajnovi zadanog stupnja ili težina (NURBS) | Splajnovi (kubični), lukovi i kružnice s odnosima tangentnosti |
| Točka na splajnu (odnos), odnosi zakrivljenosti (G2) | Postavite vlastitu točku splajna tamo gdje mora proći |
| Pomaknute kopije splajnova koje slijede kasnije promjene; pomaci lanaca s oštrim kutovima splajna | Ponovno pomaknite nakon promjene; prvo zaobljite kut |
| Kopije uzorka koje ostaju povezane s izvornikom; uzorci duž krivulje | Ponovno napravite uzorak nakon promjene |
| Projiciranje slobodnih ili nagnutih kružnih bridova; projicirana geometrija koja prati dio | Projicirajte ravne i paralelne kružne bridove, zatim kotirajte |
| Vođene (referentne) dimenzije | Očitajte veličine s ploče ili iz podataka o dijelu |
| Kolinearni odnosi | Paralelno s udaljenošću 0 |
| Lijepljenje u drugi program (sistemski međuspremnik) | Izvezite DXF, STEP, STL ili 3MF |
| Upisivanje lukova, relativnih ili polarnih koordinata | Upišite linije i kružnice; lukove crtajte alatom Luk |
| Odabir geometrije bez pokazivača | Potreban je klik ili dodir |

## Parametri i jedinice

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Konfiguracije koje mijenjaju materijale; CSV tablica dizajna koja isključuje značajke | Konfiguracije postavljaju parametre i uključuju ili isključuju značajke: vidi [Konfiguracije i tablice dizajna](topic:design-tables); `partcraft variants` izrađuje spremljene konfiguracije po imenu, uključujući isključene značajke: vidi [Napravite paket varijanti iz konfiguracija](topic:variant-pack) |
| Jednadžbe na brojevima panela najnovijih značajki (ravnina, provlačenje, nagib i slično) | Napišite ih u skripti ili s `partcraft set` ([Skripte i naredbeni redak](topic:scripts-and-cli)) |
| Dio prikazan u inčima | Veličine se prikazuju u milimetrima; upišite `2in` u okvir za broj ili izraz i postaje 50.8 |

## Datoteke

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Uređivanje vlastitih značajki uvezenog STEP tijela (dolazi bez povijesti) | Dodajte ili izrežite materijal vlastitim značajkama |
| Čitanje boja, naziva, strukture sklopa i PMI iz STEP-a | Nije dostupno |
| Izvoz glTF, OBJ, IGES, Parasolid; DWG 3D dijela (DWG piše samo paket varijanti: list crteža) | STL ili 3MF za mreže; STEP za tijela; DXF za 2D |
| Otvaranje IGES, DXF ili tuđih datoteka drugih programa (datoteke `.3dm` otvaraju se kao jedno tijelo: [Otvaranje .3dm modela kao punog tijela](topic:open-3dm-files)) | Zatražite STEP ili zatvoreni STL, OBJ ili 3MF: [Otvaranje STL, OBJ ili 3MF kao punog tijela](topic:open-meshes) |
| Struktura sklopa (stablo s nazivima dijelova) u izvezenom STEP-u | Sklopni STEP je jedan složeni zapis postavljenih tijela |
| Spremanje u mapu po vašem izboru bez preuzimanja preglednikom | Uključite „pitaj gdje spremiti“ u postavkama preuzimanja preglednika |

## Crteži

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Kote izvan tri ukupne veličine (veličine rupa, položaji, tolerancije veličina) | Označite PDF ili izvezite DXF i kotirajte ga u 2D CAD programu |
| Više od jednog presjeka ili detalja; poravnati, izlomljeni i pomoćni prikazi | Jedan presjek i jedan detalj po crtežu |
| Slobodni tekst, bilješke i tablice na listu (osim blokova naslova i revizije) | Napomena o završnoj obradi, ili tekst dodan u PDF-u |
| Projekcija prvog kuta, pomični prikazi, uspravni listovi | Treći kut, automatski raspored, vodoravni listovi A4–A0 i ANSI A–E |
| Živi prikaz presjeka: više ravnina ili kutija presjeka odjednom, obris oko reza, spremanje presjeka u datoteci | Jedna ravnina po jedan put iz {{ui:Views}} › {{ui:Section view}}; vidi [Pogled iznutra s prikazom presjeka](topic:section-view) |
| Sklopni crteži s više prikaza, kota ili balona koje možete pomicati | Jedan izometrijski (ili rastavljeni) prikaz s automatskim balonima i popisom dijelova |
| Kopiranje i lijepljenje GD&T i simbola završne obrade | Postavite svaki s Datum, Frame ili Finish |
| Priručnici: STEP datoteke u {{ui:From another file…}} programa Illustrate, model izravno iz ModelCraft ili BimCraft, slike kvalitete praćenja zraka, interaktivni 3D unutar PDF-a | Otvorite STEP u Designu i pokrenite priručnik {{ui:From the open part}}; spremite model kao glTF (.glb); PNG slike 3D prikaza; interaktivna 3D datoteka: vidi [Pokretanje priručnika u Illustrateu](topic:illustrate) |

## Sklopovi

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Zupčasti, zupčasta letva, bregasti i vijčani zglobovi; kuglasti zglob ograničen na stožac; zglobovi na zakrivljenim plohama ili između točaka | Kruti, rotacijski, klizni, cilindrični, ravninski, kuglasti i čep u utoru na ravnim plohama, svaka vrijednost sa svojim granicama: vidi [Izrada sklopa](topic:build-assembly) |
| Rastavljeni koraci koji okreću dijelove, i povlačenje dijelova koje postavljaju zglobovi | Ravni koraci rastavljanja; uklonite zglob da pomaknete dio rukom |
| Podsklopovi | Samo jedna razina dijelova |
| Zupčanici, bregovi, kontakt | Nije dostupno |

## Izrada

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| 3D grubo glodanje zakrivljenih ploha, 3D adaptivno čišćenje, čišćenje ostatka; završno glodanje vodenom linijom, olovkom, radijalno i spiralno; adaptivni prolazi zapisani kao lukovi | Glodanje 2.5-osno: ravnine, džepovi, 2D adaptivno, kontura, bušenje i skošenje: vidi [Izrada putanja alata i G-koda](topic:manufacture); Parallel i Scallop završno glodanje cijelog modela: vidi [3D završna obrada](topic:finish-3d) |
| Putanje alata u 4 i 5 osi, tokarenje, mjerenje sondom | Postavite jednu stranu po jednu, s osi alata na kartici Setup |
| Provjere sudara držača i drške | Pazite na upozorenja o duljini žlijeba i provjerite u simulatoru upravljača |
| Sondiranje, ciklusi vijeka alata i potprograma, 4. i 5. os te kodovi tokarilice u postprocesoru; učitavanje tuđih datoteka postprocesora | Napišite ili promijenite postprocesor u vlastitom formatu PartCrafta: vidi [Postprocesori koje možete uređivati](topic:post-processors) |
| G-kod u inčima (G20) | Samo milimetri (G21) |

## Simulacija i generativni dizajn

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Nelinearne studije: popuštanje, velike deformacije, kontakt između dijelova, zamor | Linearno statičko i prirodne frekvencije: vidi [Provjera naprezanja i progiba](topic:simulation); držite faktor sigurnosti znatno iznad 1 |
| Nelinearno izvijanje (nesavršenosti, poslije-izvijanje, preskakanje) | Linearni faktori opterećenja izvijanja uz veliku rezervu: vidi [Toplina, toplinska naprezanja i izvijanje](topic:thermal-and-buckling) |
| Zračenje između ploha (faktori pogleda), kontaktni otpor, materijali ovisni o temperaturi, inercija u toplinskom naprezanju (toplinski udarni valovi) | Zračenje prema okolini, stalno ili kvazistatičko toplinsko naprezanje tijekom vremena, stalna svojstva: vidi [Toplina, toplinska naprezanja i izvijanje](topic:thermal-and-buckling) |
| Automatsko profinjavanje za prolaznu toplinu i studije s toplinskim opterećenjem; grublja mreža tamo gdje je greška mala; cilj na lokalnoj veličini (vršno naprezanje na jednoj točki) | **Profini automatski** za statičke, izvijanje, prirodne frekvencije i stacionarne toplinske studije, na pogrešci cijelog dijela: vidi [Provjera naprezanja i progiba](topic:simulation); inače smanjite veličinu elementa |
| Opterećenja ležajeva i vijaka, daljinske sile, momenti, opruge, zadani pomaci | Sile i tlakovi na plohama, gravitacija; učvršćene i bezfrikcijske plohe |
| Simulacija sklopova; materijali koji se razlikuju po smjeru (ispisani slojevi, kompoziti) | Jedan dio, jedan izotropni materijal |
| Više niti rješavača za tetraedarske studije, prijenos topline i generativni dizajn; bilo koje niti na stranici koja nije izolirana po podrijetlu | Voxel studije, izvijanje, naprezanje tijekom vremena i laminarni tok koriste niti gdje stranica dopušta: vidi [Postavke PartCrafta](topic:settings) |
| Turbulentni tok s točnošću za dizajn (model Spalart–Allmaras ulazi kao eksperimentalan: trenje u cijevi 30 do 34 % veće, ponovno pripajanje iza stepenice 21 do 39 % kraće; planirano: finije ćelije uz stijenke), toplina u toku, nestacionarni (vremenski točan) tok, slobodne površine, nenjutnovske tekućine, rotirajući dijelovi | Laminarni, stacionarni, izotermni tok njutnovske tekućine, ili eksperimentalni turbulentni model za kvalitativne obrasce: vidi [Simulacija toka fluida](topic:flow-simulation); ploča upozorava kad je Reynoldsov broj iznad laminarnog |
| Granice naprezanja i pravila izrade (nagibi, smjerovi glodanja) u generativnom dizajnu; više materijala u jednom obliku | Najkrući oblik za zadani volumen; provjerite rezultat u Simulaciji: vidi [Rast oblika iz opterećenja](topic:generative-design) |
| Rezultat kao uredivo (glatko, parametarsko) puno tijelo | STL, STEP s fasetama ili dio s rezultatom kao uvezenim tijelom s fasetama |
| Električni strojevi: rotor koji se okreće u statoru, moment prema kutu, zasićeni čelik, magneti koji gube snagu iza koljena, vrtložne struje i gubici u željezu i bakru; magnetska polja u 3D ili na zakrivljenim mrežama | Linearna 2-D magnetostatika na mreži u knjižnici analize: zavojnice, željezo, trajni magneti na pravcu povrata, zračni rasporci, induktivitet i privlačenje: vidi [Magnetska polja u 2-D](topic:magnetic-fields-2d) |

## Skripte

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Pomoć pri pokazivanju, prekidne točke i korak po korak u uređivaču skripti | Pronalaženje, sklapanje i dovršavanje su u uređivaču (vidi [Pisanje i pokretanje skripti](topic:craftscript)); za ostalo, vlastiti uređivač: {{ui:Save}} i {{ui:Open}} u grupi Skripta prenose skripte unutra i van; ugrađene funkcije navedene su u [Jezik CraftScript](topic:craftscript-language) |
| Prekidne točke i korak kroz skriptu | `disp` i `fprintf` usput; {{key:Mod+Enter}} pokreće nekoliko odabranih redaka odjednom |
| Polja i grafovi koje skripta prikazuje, nacrtani u radnom prostoru Design; skripte koje mijenjaju parametre dijela | Prikazuju se u radnom prostoru Script; skripte čitaju parametre s `param` (vidi [Pisanje i pokretanje skripti](topic:craftscript)), a mijenjaju ih na kartici {{ui:Parameters}} |
| Slike i tablice uz grafove; uređivanje grafa (zumiranje, granice osi) prije spremanja | Uz strane grafove prikazuje se usporedno; spremite graf kao PNG, SVG ili CSV i završite ga drugdje |
| numpy i drugi paketi Pythona; Python bez mreže; sklapanje Pythona u uređivaču; Pascal Script | Standardna biblioteka Pythona, CraftScript i Lua: vidi [Skripte u Pythonu](topic:craftscript-python) |
| Predavanje Lua funkcija ugrađenim funkcijama; pozivanje funkcije biblioteke iz Lue imenom sastavljenim dok skripta radi | Napišite ime funkcije biblioteke u skripti (`cs.static_tet(…)`) ili je pozovite iz skripte CraftScript |

## Aplikacija

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Spremanje u oblak, dijeljenje i povijest verzija | Još nije dostupno. Spremajte datoteke na računalo i čuvajte verzije po imenu |
| PartCraft kao instalirana aplikacija na iPadu i iPhoneu | Koristite PartCraft u pregledniku uređaja; na Androidu i na računalu radi i u CadCraft Studiu (getcadcraft.com/download) |
| Kontekstni (desni klik) izbornici | Traka alata i desna ploča |
| Potpuni rad izvan mreže od početka | Samo kad je aplikacija spremljena za rad izvan mreže: vidi [Rad izvan mreže](common:offline) |

Što vam najviše nedostaje javite preko stranice za podršku na webu: to oblikuje što slijedi.

## Engineer (generatori i polja)

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Priključci, spojnice i fitinzi na generiranom izmjenjivaču topline; krivulje temperature za čvrstoću materijala; gubici T-komada u razdjelniku | Generatori izrađuju jezgru i cijevi; dodajte fitinge u Designu; upotrijebite brojke materijala na sobnoj temperaturi s faktorom sigurnosti |
| Dodavanje generatora iz direktorija dodataka jednim klikom | {{ui:Open}} u radnom prostoru Engineer dodaje generator iz datoteke |
| Datoteka polja finija od vlastite veličine voxela generatora; čitanje `.vdb` datoteka | Spremite finije polje iz skripte; `.vdb` se zapisuje, ne čita |
| Proračuni posuda pod tlakom prema normi | Udžbeničke formule za tanku i debelu stijenku, s faktorom sigurnosti koji odaberete; nije normativna rezerva |
| Generatori za ostale aplikacije | Samo PartCraft u ovoj verziji |
