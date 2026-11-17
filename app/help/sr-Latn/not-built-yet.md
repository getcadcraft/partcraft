---
title: Šta još nije urađeno
summary: Sve što ova verzija PartCraft-a još ne radi, od provlačenja sa uvrtanjem do prikaza u inčima, kota crteža i podsklopova, sa onim što danas radite umesto toga.
keywords: nedostaje, još nije, ograničenja, plan razvoja, tačan kernel, zaobljenje, obaranje ivice, ljuska, provlačenje, prelaz, uvoz STEP, simulacija, provlačenje sa uvrtanjem, tangenta na kraju prelaza, zaobljenje površi, jednačine, inči, kote crteža, podsklopovi, oblak, tablet, telefon
from: 9b868162
---

PartCraft je rana verzija. Ova stranica navodi šta ne radi još, da ne tražite to, i šta da radite umesto toga danas. Ništa ovde nema datum.

## Traži tačan kernel

Ova verzija pravi svaki deo mrežnim kernelom (vidi [Mrežni kernel](topic:solid-kernels)). Sve dole traži tačan geometrijski kernel, koji ova verzija još nema. Delovi sačuvani sa ovim elementima se i dalje otvaraju: elementi ostaju u istoriji, označeni kao nenapravljeni, i čuvaju se pri snimanju.

| Još nije urađeno | Umesto toga, danas |
|---|---|
| {{ui:Zaobljenje}} i {{ui:Obaranje ivice}} na okruglim ivicama; zaobljenja čiji se poluprečnik menja duž ivice; zaobljenja glatko stopljena tamo gde se sastaju (mrežni kernel ih seče pod uglom) | Zaobljenje i Obaranje ivice rade na pravim ivicama između ravnih površi; ostale uglove zaoblite u skici pre izvlačenja ({{ui:Zaobljenje}} u skici, {{key:F}}) |
| {{ui:Ljuska}} koja otvara zakrivljene površi; zidovi različitih debljina | Otvorite ravne površi; dodajte materijal izvlačenjima tamo gde zid mora da bude deblji |
| {{ui:Provlačenje}}, {{ui:Prelaz}}, {{ui:Nagib}} na zakrivljenim površima; izvlačenje do površi, sledeće površi ili temena; konusna izvlačenja | Izvucite ili rotirajte, po koracima gde treba; izvucite do dubine koju izmerite |
| {{ui:Rebro}}, {{ui:Osnovna prirubnica}}, {{ui:Ivična prirubnica}} i ravni razvoji | Izvucite lim ili profil rebra |
| Površi: završavanje {{ui:Forma}} u deo, {{ui:Zakrpa}}, {{ui:Prelaz površine}}, {{ui:Gordonova površina}}, {{ui:Sašij}}, {{ui:Zadebljaj}}, {{ui:Pomak površine}}, {{ui:Produži površinu}}, {{ui:Skrati površinu}} | Nije dostupno |
| Više tela: {{ui:Spajanje}}, {{ui:Pomeri telo}}, {{ui:Skaliraj telo}}, {{ui:Niz po putanji}}, elementi koji prave novo telo | Jedno čvrsto telo; nizovi i ogledalo kopiraju elemente |
| Skice, ravni, ose i tačke na površima koje samo tačan kernel može da nađe (površ nastala zaobljenjem, zid rupe, površ uvezenog tela) | Skicirajte na osnovnim ravnima, referentnim ravnima i ravnim površima izvlačenja i rotiranja |
| Ishod generativnog dizajna otvoren kao deo ili dodat u njega (postaje uvezeno telo) | Preuzmite ishod kao STL ili STEP |
| Izmena zakrivljenih površi otvorene STEP datoteke kao tačnih površi; tačan STEP splajn, provučenih i rotiranih površi iz STEP datoteke, bočne strane splajna, modelovani navoji, tela i sklopovi STL / OBJ / 3MF; STEP za druge modelare delova | {{ui:Otvori}} čita STEP kao trouglove i zadržava ravne površi, valjke, konuse, kugle i tore datoteke za izvoz ([Otvaranje STEP datoteke](topic:import-step)); {{ui:Izvezi}} › {{ui:STEP AP242 (tačno čvrsto telo)}} upisuje svaku analitičku površ tačno i zadržava je kao facete ([Izvoz](topic:export-files#for-other-cad-programs-step)); makro za drugi modeler delova i dalje piše |
| Pravi lukovi u prikazima crteža | Prikazi i prikazi preseka crtaju se iz faceta |
| Tačne zapremine, površine i rastojanja | {{ui:Mere}} daje brojke faceted tela, malo niže na okruglim delovima; finije podešavanje **Krive** ih približava |

Neki redovi u tabelama ispod predlažu jedan od ovih elemenata kao način da se nešto drugo zaobiđe. Ti predlozi važe kad se vrati tačan kernel.

## Elementi

| Još nije urađeno | Umesto toga, danas |
|---|---|
| Zaobljenja površi, potpuno okrugla zaobljenja, zaobljenja sa poluprečnicima zadatim u tačkama duž ivice | Konstantno ili linearno promenljivo {{ui:Zaobljenje}}; više elemenata zaobljenja |
| Ljuske sa različitim debljinama zidova | Jedna debljina {{ui:Ljuska}}; dodajte materijal izvlačenjima tamo gde zid mora biti deblji |
| {{ui:Nagib}} na slobodnim (splajn) površima | {{ui:Nagib}} radi na ravnim, cilindričnim i konusnim površima |
| Provlačenja sa uvrtanjem, provlačenja tankog zida i površi; tangenta na kraju kod elementa Prelaz; prelaz sa jednom vođicom; putanje splajna | {{ui:Provlačenje}} sa fiksnom orijentacijom ili razmerom kraja; prelaz sa dve ili više vođica: vidi [Provlačenje, prelaz i nagib](topic:sweep-loft-draft) |
| Rebra iz lukova ili splajna; rebra rasla pod pravim uglom u odnosu na skicu (iz pogleda odozgo); nagib na rebrima; više rebara iz jedne skice | {{ui:Rebro}} iz jednog lanca linija u sopstvenoj ravni rebra: vidi [Rebra i ukošnice](topic:rib) |
| „Do“ zakrivljene površi, „do sledeće“ koja se zaustavlja na zakrivljenoj površi | Do ravne površi ili referentne ravni |
| Upušteni provrti, inčni i cevni navoji, konusni navoji, izlazi navoja i zaobljeni početci navoja | Upuštanje male dubine; ISO metrički i trapezni navoji, kozmetički ili modelovani: vidi [Navoji na osovinama i provrtima, nacrtani ili modelovani](topic:threads) |
| Izvlačenja tankih elemenata | Nacrtajte oba zida profila |
| Kopije niza preskočene jedna po jedna, nizovi ispune | Koristite zasebne elemente; nizovi duž krive: {{ui:Niz po putanji}} |
| Kopiranje nizova, ogledala, zaobljenja, obaranja ivica, ljuske i uvezena tela | Kopirajte skicu ili element na kojem su napravljeni, ili od njega napravite niz |
| Tačna (G1) tangenta u posebnim tačkama forme; spajanje zakrpa forme u veće površi | Podignite Nivo forme: aproksimirane zakrpe postaju manje; vidi [Slobodni oblici sa Formom](topic:form-surfaces) |
| Forma od više odvojenih zatvorenih delova u jednom elementu; mostovi između formi | Jedan zatvoren deo po elementu Forma; spojite ih |
| Biranje tela površi u prikazu (osim tačaka skraćivanja i zakrpe); zaobljenja površi; ukidanje skraćivanja; G2 zakrpe; Gordonove površi tangentne na zakrivljene susede (tangentne na ravni i ravne površi su napravljene) | Izaberite ih po imenu u panelu elementa; prvo zadebljajte, pa zaobljite čvrsto telo |
| Lista tela u istoriji; isključivanje skrivenih tela iz izvoza | Preimenujte i sakrijte tela na listi tela u panelu dela; obrišite ili potisnite element koji je napravio telo da ga isključite |
| Neravnomerno razmeravanje koje zadržava valjke i konuse analitičkim; neravnomerno razmeravanje pomaknutih površi | {{ui:Skaliraj telo}} pravi zakrivljene površi kao zatvorene B-splajnove (u okviru 0.0000004 mm); ravnomerno razmeravanje ostaje tačno |
| Spajanje tela površi; Minkowski zbirovi | Prvo {{ui:Sašij}} ili {{ui:Zadebljaj}}, pa {{ui:Spajanje}} |
| Analiza tolerancija: zbirovi tolerancija koji skreću za uglove (2D i 3D vektorske petlje), osetljivosti izračunate iz geometrije, Monte Karlo sa drugim raspodelama, tolerancije mera na dimenzijama skice, bonus tolerancija iz uslova materijala | {{ui:Zbir tolerancija}} u sklopu: jedan pravac, najgori slučaj i RSS, tolerancije upisane, iz opšte tolerancije u naslovnom bloku ili iz GD&T okvira: vidi [Zbirovi tolerancija](topic:tolerance-stackup) |
| Raspoređivanje: redosled sečenja i uvodni potezi, sečenje zajedničkih ivica jednom, delovi koji moraju ostati zajedno; ostaci rola, zaliha zajednička za projekte | {{ui:Raspoređivanje ravnih delova na listovima…}} sa razmakom, marginama, okretima i smerom vlakana: vidi [Raspoređivanje ravnih delova na listovima](topic:nest-flat-parts); ostali limovi se čuvaju i prvo koriste: vidi [Čuvanje i ponovno korišćenje ostataka](topic:nest-offcuts); planirajte sečenje u sopstvenom softveru rezača |
| Lim: podvijanja, pomaci, ukošene i konturne prirubnice; prirubnice na zakrivljenim ivicama ili na površima savijene osnovne prirubnice; skicirani savoji; zatvaranja uglova; alati za oblikovanje; pretvaranje tela u lim; ravan razvoj savijene osnovne prirubnice sa rezovima; tabele savijanja | {{ui:Osnovna prirubnica}} (lim ili savijeni profil), {{ui:Ivična prirubnica}} na pravim ivicama lima sa rasterećenjem savoja, i ravni razvoj sa K-faktorom: vidi [Lim](topic:sheet-metal) |
| {{ui:Analiza nagiba}} na sklopovima; traženje linije razdvajanja; analiza debljine zida | {{ui:Analiza nagiba}} na delu u Dizajnu: vidi [Provera nagiba za kalupljenje i livenje](topic:draft-analysis); otvorite svaki deo sklopa da ga proverite |

## Skice

| Još nije urađeno | Umesto toga, danas |
|---|---|
| Elipse, tangentni lukovi, konike, splajnovi sa zadatim stepenom ili težinama (NURBS) | Splajnovi (kubni), lukovi i krugovi sa relacijama tangentnosti |
| Tačka na splajnu (relacija), relacije zakrivljenosti (G2) | Postavite sopstvenu tačku splajna tamo gde mora da prolazi |
| Pomaknute kopije splajnova koje prate kasnije izmene; pomaci lanaca sa oštrim uglovima splajna | Ponovo pomerite posle izmene; prvo zaokružite ugao |
| Kopije niza koje ostaju povezane sa originalom; nizovi duž krive | Ponovo napravite niz posle izmene |
| Projektovanje slobodnih ili nagnutih kružnih ivica; projektovana geometrija koja prati deo | Projektujte prave i paralelne kružne ivice, pa kotirajte |
| Vođene (referentne) kote | Očitajte mere iz panela ili podataka o delu |
| Relacije kolinearnosti | Paralelnost sa rastojanjem 0 |
| Nalepljivanje u drugi program (privremena memorija sistema) | Izvezite DXF, STEP, STL ili 3MF |
| Unošenje lukova, relativnih ili polarnih koordinata | Unesite linije i krugove; crtajte lukove alatom Luk |
| Biranje geometrije bez pokazivača | Potreban je klik ili dodir |

## Parametri i jedinice

| Još nije urađeno | Umesto toga, danas |
|---|---|
| Konfiguracije koje menjaju materijale; CSV tabela dizajna koja isključuje elemente | Konfiguracije podešavaju parametre i uključuju i isključuju elemente: vidi [Konfiguracije i tabele dizajna](topic:design-tables); `partcraft variants` pravi sačuvane konfiguracije po imenu, uključujući isključene elemente: vidi [Napravite paket varijanti od konfiguracija](topic:variant-pack) |
| Jednačine na brojevima u panelima najnovijih elemenata (ravan, provlačenje, nagib i slično) | Napišite ih u skripti ili sa `partcraft set` ([Skripte i komandna linija](topic:scripts-and-cli)) |
| Deo prikazan u inčima | Mere se prikazuju u milimetrima; ukucajte `2in` u polje broja ili izraz i postaće 50.8 |

## Datoteke

| Još nije urađeno | Umesto toga, danas |
|---|---|
| Izmena sopstvenih elemenata uvezenog STEP tela (stiže bez istorije) | Dodajte ili izrežite materijal sopstvenim elementima |
| Čitanje boja, imena, strukture sklopa i PMI iz STEP datoteke | Nije dostupno |
| Izvoz glTF, OBJ, IGES, Parasolid; DWG 3D dela (paket varijanti piše DWG samo: list crteža) | STL ili 3MF za mreže; STEP za tela; DXF za 2D |
| Otvaranje IGES, DXF ili sopstvenih datoteka drugih programa (`.3dm` datoteke se otvaraju kao jedno telo: [Otvaranje .3dm modela kao čvrstog tela](topic:open-3dm-files)) | Zatražite STEP, ili zatvorenu STL, OBJ ili 3MF mrežu: [Otvaranje STL, OBJ ili 3MF](topic:open-meshes) |
| Struktura sklopa (stablo sa imenima delova) u izvezenom STEP-u | STEP sklopa je jedan složeni objekat od postavljenih tela |
| Čuvanje u fascikli po vašem izboru bez preuzimanja pregledača | Uključite „pitaj gde da sačuva“ u podešavanjima preuzimanja pregledača |

## Crteži

| Još nije urađeno | Umesto toga, danas |
|---|---|
| Kote preko tri ukupne mere (mere rupa, položaji, tolerancije mera) | Označite PDF ili izvezite DXF i kotirajte ga u 2D CAD programu |
| Više od jednog preseka ili detalja; poravnati, delimični i pomoćni prikazi | Jedan presek i jedan detalj po crtežu |
| Slobodan tekst, napomene i tabele na listu (osim naslovnog i revizionog bloka) | Napomena o završnoj obradi, ili tekst dodat u PDF |
| Projekcija prvog ugla, pokretni prikazi, uspravni listovi | Treći ugao, automatski raspored, pejzažni listovi A4–A0 i ANSI A–E |
| Živi prikaz preseka: više ravni ili kutija preseka istovremeno, kontura oko preseka, čuvanje preseka u datoteci | Jedna ravan u jednom trenutku iz {{ui:Pogledi}} › {{ui:Prikaz preseka}}; vidi [Pogled unutra pomoću prikaza preseka](topic:section-view) |
| Crteži sklopa sa više prikaza, kota ili balona koje možete pomerati | Jedan izometrijski (ili rastavljeni) prikaz sa automatskim balonima i spiskom delova |
| Kopiranje i nalepljivanje GD&T i simbola završne obrade | Postavite svaki pomoću Referenca, Okvir ili Završna obrada |
| Uputstva: STEP datoteke u {{ui:Iz druge datoteke…}} u Illustrate-u, model predat direktno iz ModelCraft-a ili BimCraft-a, slike kvaliteta praćenja zraka, interaktivni 3D u PDF-u | Otvorite STEP u Dizajnu i pokrenite uputstvo sa {{ui:Iz otvorenog dela}}; sačuvajte model kao glTF (.glb); PNG slike 3D prikaza; interaktivna 3D datoteka: vidi [Pokretanje uputstva u Illustrate-u](topic:illustrate) |

## Sklopovi

| Još nije urađeno | Umesto toga, danas |
|---|---|
| Zglobovi zupčanika, letve, bregaste i zavrtnja; kuglasti zglob ograničen na konus; zglobovi na zakrivljenim površima ili između tačaka | Kruti, obrtni, klizni, cilindrični, ravni, kuglasti i zglob klin-u-žlebu na ravnim površima, svaka vrednost sa sopstvenim granicama: vidi [Pravljenje sklopa](topic:build-assembly) |
| Koraci rastavljanja koji okreću delove, i prevlačenje delova koje postavljaju zglobovi | Pravi koraci rastavljanja; uklonite zglob da pomerate deo rukom |
| Podsklopovi | Samo jedan nivo delova |
| Zupčanici, bregaste, kontakt | Nije dostupno |

## Manufacture

| Još nije urađeno | Umesto toga, danas |
|---|---|
| 3D grubo obrađivanje zakrivljenih površi, 3D adaptivno čišćenje, dorada ostataka; završna obrada po vodenoj liniji, olovkom, radijalno i spiralno; adaptivni prolazi zapisani kao lukovi | Površina, džep, 2D adaptivno, kontura, bušenje i obaranje ivice u 2.5 ose: vidi [Pravljenje putanja alata i G-koda](topic:manufacture); Parallel i Scallop završna obrada celog modela: vidi [3D završna obrada](topic:finish-3d) |
| Putanje alata sa 4 i 5 osa, struganje, merenje sondom | Podesite jednu stranu po jednu, sa osom alata na kartici Podešavanje |
| Provere sudara držača i drške | Pratite upozorenja o dužini žlebova i proverite u simulatoru vašeg upravljača |
| Merenje sondom, ciklusi veka alata i potprograma, kodovi 4. i 5. ose i struga u postprocesoru; učitavanje tuđih postprocesorskih datoteka | Napišite ili izmenite postprocesor u sopstvenom formatu PartCraft-a: vidi [Postprocesori koje možete menjati](topic:post-processors) |
| G-kod u inčima (G20) | Samo milimetri (G21) |

## Simulacija i generativni dizajn

| Još nije urađeno | Umesto toga, danas |
|---|---|
| Nelinearne studije: tečenje, velika savijanja, kontakt između delova, zamor | Linearna statika i prirodne frekvencije: vidi [Provera napona i savijanja](topic:simulation); držite faktor sigurnosti dobro iznad 1 |
| Nelinearno izvijanje (nesavršenosti, posle izvijanja, preskakanje) | Linearni faktori opterećenja izvijanja uz široku marginu: vidi [Toplota, termički napon i izvijanje](topic:thermal-and-buckling) |
| Zračenje između površi (faktori pogleda), kontaktni otpor, materijali zavisni od temperature, inercija u termičkom naponu (talasi termičkog udara) | Zračenje ka okolini, stabilan ili kvazistatički termički napon kroz vreme, konstantna svojstva: vidi [Toplota, termički napon i izvijanje](topic:thermal-and-buckling) |
| Automatsko profinjavanje za prolaznu toplotu i studije sa termičkim opterećenjem; grublja mreža tamo gde je greška mala; cilj na lokalnu veličinu (vršni napon na jednom mestu) | **Automatski profinji** za statičke, izvijanje, prirodne frekvencije i stabilne termičke studije, po grešci za ceo deo: vidi [Provera napona i savijanja](topic:simulation); inače smanjite veličinu elementa |
| Opterećenja ležaja i zavrtnja, daljinske sile, momenti, opruge, zadati pomeraji | Sile i pritisci na površima, gravitacija; fiksirane i bezfrikcione površi |
| Simulacija sklopova; materijali koji se razlikuju po pravcu (štampani slojevi, kompoziti) | Jedan deo, jedan izotropni materijal |
| Više niti rešavača za tetraedarske studije, prenos toplote i generativni dizajn; bilo koje niti na stranici koja nije izolovana za unakrsno poreklo | Voxel studije, izvijanje, napon kroz vreme i laminarni tok koriste niti tamo gde stranica dozvoljava: vidi [Podešavanja PartCraft-a](topic:settings) |
| Turbulentni tok sa tačnošću za projektovanje (model Spalart–Allmaras je uključen kao eksperimentalan: trenje u cevi 30 do 34 % više, ponovno spajanje posle stepenika 21 do 39 % kraće; planirano: finije ćelije uz zidove), toplota u toku, nestacionarni (vremenski tačan) tok, slobodne površi, nenjutnovske tečnosti, rotirajući delovi | Laminarni, stabilni, izotermni tok njutnovske tečnosti, ili eksperimentalni turbulentni model za kvalitativne obrasce: vidi [Simulacija strujanja fluida](topic:flow-simulation); panel upozorava kad je Rejnoldsov broj iznad laminarnog |
| Granice napona i proizvodna pravila (previsi, smerovi glodanja) u generativnom dizajnu; više materijala u jednom obliku | Najkrući oblik za zapreminu; proverite ishod u Simulaciji: vidi [Razvijanje oblika iz opterećenja](topic:generative-design) |
| Ishod kao izmenljivo (glatko, parametarsko) čvrsto telo | STL, STEP sa facetama ili deo sa ishodom kao uvezenim telom sa facetama |
| Projektovanje električnih mašina: rotor koji se okreće u statoru, moment u odnosu na ugao, zasićeni čelik, magneti koji gube jačinu posle kolena, vrtložne struje i gubici u gvožđu i bakru; magnetna polja u 3-D ili na zakrivljenim mrežama | Linearna 2-D magnetostatika na mreži u biblioteci analize: namotaji, gvožđe, trajni magneti na njihovoj liniji povrata, zazori, induktivnost i privlačenje: vidi [Magnetna polja u 2-D](topic:magnetic-fields-2d) |

## Skripte

| Još nije urađeno | Umesto toga, danas |
|---|---|
| Pomoć pri zadržavanju pokazivača, prekidne tačke i korak u uređivaču skripte | Traženje, sklapanje i dovršavanje su tu (vidi [Pisanje i pokretanje skripti](topic:craftscript)); za ostalo, sopstveni uređivač: {{ui:Sačuvaj}} i {{ui:Otvori}} u grupi Skripta prenose skripte unutra i napolje; ugrađene funkcije su navedene u [Jezik CraftScript](topic:craftscript-language) |
| Prekidne tačke i korak kroz skriptu | `disp` i `fprintf` usput; {{key:Mod+Enter}} pokreće nekoliko izabranih redova odjednom |
| Polja i grafikoni koje skripta prikazuje, crtani u radnom prostoru Dizajn; skripte koje menjaju parametre dela | Prikazuju se u radnom prostoru Skripta; skripte čitaju parametre pomoću `param` (vidi [Pisanje i pokretanje skripti](topic:craftscript)), menjaju ih na kartici {{ui:Parametri}} |
| Slike i tabele uz grafikone; izmena grafikona (zumiranje, granice osa) pre čuvanja | Uporedo prikazuje grafikone; sačuvajte grafikon kao PNG, SVG ili CSV i završite ga drugde |
| numpy i drugi Python paketi; Python van mreže; sklapanje Python-a u uređivaču; Pascal Script | Standardna biblioteka Python-a, CraftScript i Lua: vidi [Skripte u Python-u](topic:craftscript-python) |
| Prosleđivanje Lua funkcija ugrađenim funkcijama; pozivanje funkcije biblioteke iz Lua-e imenom nastalim dok skripta radi | Napišite ime funkcije biblioteke u skripti (`cs.static_tet(…)`), ili je pozovite iz CraftScript skripte |

## Aplikacija

| Još nije urađeno | Umesto toga, danas |
|---|---|
| Čuvanje u oblaku, deljenje i istorija verzija | Još nije dostupno. Čuvajte datoteke na računaru i držite verzije po imenu |
| PartCraft kao instalirana aplikacija na iPad-u i iPhone-u | Koristite PartCraft u pregledaču uređaja; na Android-u i na računaru radi i u CadCraft Studio-u (getcadcraft.com/download) |
| Kontekstni meniji (desni klik) | Traka sa alatkama i desni panel |
| Potpuno van mreže od početka | Samo kad je aplikacija sačuvana za rad van mreže: vidi [Rad van mreže](common:offline) |

Javite šta vam najviše nedostaje preko stranice za podršku na sajtu: to oblikuje šta sledi.

## Engineer (generatori i polja)

| Još nije urađeno | Umesto toga, danas |
|---|---|
| Zaglavlja, portovi i fitinzi na generisanom razmenjivaču toplote; krive temperature za čvrstoću materijala; gubici T-spoja u razdelniku | Generatori prave jezgro i cevi; dodajte fitinge u Dizajnu; koristite podatke materijala na sobnoj temperaturi sa faktorom sigurnosti |
| Dodavanje generatora iz direktorijuma dodataka jednim klikom | {{ui:Otvori}} u radnom prostoru Engineer dodaje generator iz datoteke |
| Datoteka polja finija od sopstvene veličine voksela generatora; učitavanje `.vdb` datoteka | Sačuvajte finije polje iz skripte; `.vdb` se piše, ne čita |
| Proračuni po pravilniku za posude pod pritiskom | Udžbenički formule za tanak i debeo zid, sa faktorom sigurnosti koji izaberete; nije margina pravilnika |
| Generatori za druge aplikacije | Samo PartCraft u ovoj verziji |
