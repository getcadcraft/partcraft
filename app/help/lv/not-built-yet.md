---
title: Kas vēl nav izveidots
summary: Viss, ko šī PartCraft versija vēl nedara, sākot ar vērpjošām izvilkumām un collu attēlojumu līdz rasējumu izmēriem un apakšmontāžām, ar to, ko darīt šodien tā vietā.
keywords: trūkst, vēl nav, ierobežojumi, plāns, nākotnes plāns, precīzs kodols, noapaļojums, nošķelšana, čaula, izvilkums, pārejas virsma, virsmas noapaļojums, STEP importēšana, simulācija, ražošana, vērpjošs izvilkums, pārejas virsmas malas pieskare, noapaļojuma vadlīnija, vienādojumi, collas, rasējuma izmēri, apakšmontāžas, mākonis, planšete, tālrunis
from: 97b10a29
---

PartCraft ir agrīna versija. Šī lapa uzskaita, ko tā vēl nedara, lai jūs to nemeklētu, un ko darīt šodien tā vietā. Nekam šeit nav datuma.

## Nepieciešams precīzs kodols

Šī versija visas detaļas veido ar tīkla kodolu (skatiet [Tīkla kodols](topic:solid-kernels)). Viss zemāk prasa precīzu ģeometrijas kodolu, kāda šai versijai vēl nav. Detaļas, kas saglabātas ar šīm funkcijām, joprojām atveras: funkcijas paliek vēsturē, atzīmētas kā neizveidotas, un tiek saglabātas, kad saglabājat.

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| {{ui:Noapaļojums}} un {{ui:Nošķelšana}} uz apaļām malām; noapaļojumi, kuru rādiuss mainās gar malu; noapaļojumi, kas vienmērīgi saplūst, kur satiekas (tīkla kodols tos nogriež ar slīpu griezumu) | Noapaļojums un nošķelšana darbojas uz taisnām malām starp plakanām virsmām; citus stūrus noapaļojiet skicē, pirms izvelkat ({{ui:Noapaļojums}} skicē, {{key:F}}) |
| {{ui:Čaula}}, kas atver izliektas virsmas; sienas ar dažādu biezumu | Atveriet plakanas virsmas; pievienojiet materiālu ar izvilkumiem, kur siena jāveido biezāka |
| {{ui:Izvilkums}}, {{ui:Pārejas virsma}}, {{ui:Slīpums}} uz izliektām virsmām; izvilkšana līdz virsmai, nākamajai virsmai vai virsotnei; konusveida izvilkumi | Izvelciet vai rotējiet, vajadzības gadījumā soļos; izvelciet līdz dziļumam, ko izmērāt |
| {{ui:Riba}}, {{ui:Pamata atloks}}, {{ui:Malas atloks}} un plakanie ieklājumi | Izvelciet plāksni vai ribas profilu |
| Virsmas: {{ui:Forma}} pabeigšana detaļā, {{ui:Ielāps}}, {{ui:Loftēt virsmu}}, {{ui:Gordona virsma}}, {{ui:Savīt}}, {{ui:Sabiezināt}}, {{ui:Nobīdīt virsmu}}, {{ui:Pagarināt virsmu}}, {{ui:Apgriezt virsmu}} | Nav pieejams |
| Vairāki korpusi: {{ui:Apvienot}}, {{ui:Pārvietot ķermeni}}, {{ui:Mērogot ķermeni}}, {{ui:Ceļa masīvs}}, elementi, kas veido jaunu korpusu | Viens cietais ķermenis; masīvi un spoguļa kopijas ir kopēšanas elementi |
| Skices, plaknes, asis un punkti uz virsmām, ko var atrast tikai precīzs kodols (virsma, ko veido noapaļojums, urbuma siena, importēta cieta ķermeņa virsma) | Skicējiet uz pamatplaknēm, atsauces plaknēm un izvilkumu un rotāciju plakanajām virsmām |
| Ģeneratīvā dizaina rezultāts, atvērts kā detaļa vai pievienots tai (tas kļūst par importētu cietu ķermeni) | Lejupielādējiet rezultātu kā STL vai STEP |
| Atvērta STEP faila līknu virsmu rediģēšana kā precīzām virsmām; precīzs STEP no splainu, izvilktām un rotētām virsmām STEP failā, splainu malas, modelēti vītnes, STL / OBJ / 3MF korpusi un montāžas; STEP citiem detaļu modelētājiem | {{ui:Atvērt}} nolasa STEP kā trijstūrus un saglabā faila plakanās virsmas, cilindrus, konusus, sfēras un torus eksportam ([Atvērt STEP failu](topic:import-step)); {{ui:Eksportēt}} › {{ui:STEP AP242 (precīzs cietais ķermenis)}} ieraksta katru analītisko virsmu precīzi un tur tās kā facetes ([Eksportēt](topic:export-files#for-other-cad-programs-step)); makro citam detaļu modelētājam joprojām raksta |
| Patiesi loki rasējuma skatos | Skati un griezuma skati tiek zīmēti no facetēm |
| Precīzi tilpumi, laukumi un attālumi | {{ui:Mērīt}} dod faceta cietā ķermeņa skaitļus, nedaudz zemākus apaļām detaļām; smalkāks **Līknes** iestatījums tos tuvina |

Dažas tabulu rindas zemāk iesaka kādu no šīm funkcijām kā veidu, kā apiet kaut ko citu. Šie ieteikumi attiecas uz brīdi, kad atgriezīsies precīzs kodols.

## Funkcijas

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Virsmu noapaļojumi, pilni apaļi noapaļojumi, noapaļojumi ar rādiusiem, kas norādīti punktos gar malu | Konstants vai lineāri mainīgs {{ui:Noapaļojums}}; vairākas noapaļojuma funkcijas |
| Čaulas ar dažādu sienu biezumu | Viens {{ui:Čaula}} biezums; pievienojiet materiālu ar izvilkumiem, kur siena jāveido biezāka |
| Slīpums uz brīvas formas (splaina) virsmām | {{ui:Slīpums}} darbojas uz plakanām, cilindriskām un konusveida virsmām |
| Vērpjoši izvilkumi, plānsienu un virsmu izvilkumi; malas pieskare funkcijā {{ui:Pārejas virsma}}; pārejas virsma ar vienu vadlīniju; splaina ceļi | {{ui:Izvilkums}} ar fiksētu orientāciju vai malas mērogu; pārejas virsma ar divām vai vairākām vadlīnijām: skatiet [Izvilkums, pārejas virsma un slīpums](topic:sweep-loft-draft) |
| Ribas no lokiem vai splainiem; ribas, kas izaugušas kvadrātā ar skici (no augšskata); slīpums uz ribām; vairākas ribas no vienas skices | {{ui:Riba}} no vienas taisnu līniju ķēdes ribas paša plaknē: skatiet [Ribas un stiprinājumi](topic:rib) |
| "Līdz" izliektai virsmai, "līdz nākamajam", apstājoties uz izliektas virsmas | Līdz plakanai virsmai vai atsauces plaknei |
| Preturbti caurumi, collu un cauruļu vītnes, konusveida vītnes, vītņu izejas un nošķeltas vītņu sākumi | Ieurbums ar nelielu dziļumu; ISO metriskās un trapecveida vītnes, kosmētiskas vai modelētas: skatiet [Vītnes uz vārpstām un urbumiem, zīmētas vai modelētas](topic:threads) |
| Plānsienu izvilkumi | Zīmējiet abas profila sienas |
| Kopijas, kas izlaistas pa vienai, aizpildījuma masīvi | Izmantojiet atsevišķas funkcijas; masīvi pa līkni: {{ui:Ceļa masīvs}} |
| Kopēšanas masīvi, spoguļi, noapaļojumi, nošķelšanas, čaulas un importēti cietie ķermeņi | Kopējiet skici vai funkciju, uz kuras tie balstīti, vai veidojiet masīvu |
| Precīza (G1) pieskare formas īpašajos punktos; formas plākšņu apvienošana lielākās virsmās | Palieliniet formas Līmeni: tuvinātās plāksnes kļūst mazākas; skatiet [Brīvas formas ar Formu](topic:form-surfaces) |
| Forma no vairākiem atsevišķiem slēgtiem gabaliem vienā funkcijā; tilti starp formām | Viens slēgts gabals uz {{ui:Forma}} funkciju; savienojiet tos ar Savienot |
| Virsmu korpusu atlase skatā (izņemot apgriešanas un ielāpa punktus); virsmu noapaļojumi; atgriešana no apgriešanas; G2 ielāpi; Gordona virsmas, kas pieskaras izliektiem kaimiņiem (pieskaras plaknēm un plakanām virsmām ir veidots) | Izvēlieties tos pēc nosaukuma funkcijas panelī; vispirms piešķiriet biezumu, tad noapaļojiet cieto ķermeni |
| Korpusu saraksts vēsturē; paslēpto korpusu izlaišana eksportos | Pārdēvējiet un paslēpiet korpusus detaļas paneļa korpusu sarakstā; dzēsiet vai apturiet funkciju, kas radīja korpusu, lai to izlaistu |
| Nevienmērīgs mērogs, kas saglabā cilindrus un konusus analītiskus; nevienmērīga nobīdīto virsmu mērogošana | {{ui:Mērogot ķermeni}} padara izliektas virsmas tuvas B-splainiem (100 % precīzi līdz 0,0000004 mm); vienmērīgs mērogs paliek precīzs |
| Virsmu korpusu apvienošana; Minkovska summas | Vispirms {{ui:Savīt}} vai {{ui:Sabiezināt}}, tad {{ui:Apvienot}} |
| Pielaižu analīze: pielaižu virknes, kas griežas stūros (2D un 3D vektoru cilpas), jutības, kas aprēķinātas no ģeometrijas, Monte Karlo ar citiem sadalījumiem, izmēru pielaides uz skices izmēriem, bonusa pielaide no materiāla stāvokļa | {{ui:Pielaižu virkne}} montāžā: viens virziens, sliktākais gadījums un RSS, pielaides ierakstītas, no rāmja vispārīgās pielaides vai no GD&T rāmjiem: skatiet [Pielaižu virknes](topic:tolerance-stackup) |
| Izvietošana: griešanas secība un ieejas līnijas, kopīgu malu griešana vienreiz, detaļas, kas jātur kopā; ruļļu atlikumi, krājums, kas koplietots starp projektiem | {{ui:Izvietot plakanas detaļas loksnēs…}} ar atstarpēm, malām, pagriezieniem un šķiedru: skatiet [Izvietot plakanas detaļas loksnēs](topic:nest-flat-parts); atlikušās plāksnes tiek saglabātas un izmantotas vispirms: skatiet [Saglabāt un izmantot atgriezumus](topic:nest-offcuts); plānojiet griezumu savā griezēja programmatūrā |
| Lokšņu metāls: apmales, pārejas, slīpi un kontūras atloki; atloki uz izliektām malām vai uz saliekta pamata atloka virsmām; skicēti lieces; stūru noslēgumi; veidošanas instrumenti; cieta ķermeņa pārvēršana par lokšņu metālu; saliekta pamata atloka plakanā daļa ar griezumiem; lieces tabulas | {{ui:Pamata atloks}} (plāksne vai liekts profils), {{ui:Malas atloks}} uz plāksnes taisnām malām ar lieces atbalstiem un plakanais ieklājums ar K faktoru: skatiet [Lokšņu metāls](topic:sheet-metal) |
| Savienota pārbaude montāžās; šuvju līnijas atrašana; sienu biezuma analīze | {{ui:Slīpuma analīze}} detaļai Dizainā: skatiet [Pārbaudīt slīpumu liešanai un formēšanai](topic:draft-analysis); atveriet katru montāžas detaļu, lai to pārbaudītu |

## Skices

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Elipses, pieskarīgi loki, konikas, splaini ar noteiktu pakāpi vai svariem (NURBS) | Splaini (kubiski), loki un riņķi ar pieskares sakarībām |
| Punkts uz splaina (sakarība), līknuma (G2) sakarības | Novietojiet paša splaina punktu tur, kur tam jāiet cauri |
| Splainu nobīdītas kopijas, kas seko vēlākām izmaiņām; nobīdes ķēdēm ar asiem splaina stūriem | Nobīdiet vēlreiz pēc izmaiņas; vispirms noapaļojiet stūri |
| Kopēšanas masīvi, kas paliek saistīti ar oriģinālu; masīvi pa līkni | Veidojiet masīvu vēlreiz pēc izmaiņas |
| Brīvas formas vai slīpu apļveida malu projicēšana; projicēta ģeometrija, kas seko detaļai | Projicējiet taisnas un paralēlas apļveida malas, tad izmēriet |
| Vadāmi (atsauces) izmēri | Nolasiet izmērus no paneļa vai detaļas faktiem |
| Kolinearitātes sakarības | Paralēli ar 0 attālumu |
| Ielīmēšana citā programmā (sistēmas starpliktuve) | Eksportējiet DXF, STEP, STL vai 3MF |
| Lokus, relatīvās vai polārās koordinātes rakstot ar tastatūru | Rakstiet līnijas un riņķus; zīmējiet lokus ar Loka rīku |
| Ģeometrijas atlase bez rādītāja | Nepieciešams klikšķis vai pieskāriens |

## Parametri un mērvienības

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Konfigurācijas, kas maina materiālus; CSV dizaina tabula, kas izslēdz funkcijas | Konfigurācijas iestata parametrus un ieslēdz un izslēdz funkcijas: skatiet [Konfigurācijas un dizaina tabulas](topic:design-tables); `partcraft variants` veido saglabātas konfigurācijas pēc nosaukuma, ieskaitot izslēgtas funkcijas: skatiet [Izveidot varianta paketi no savām konfigurācijām](topic:variant-pack) |
| Vienādojumi uz jaunāko funkciju paneļu skaitļiem (plakne, izvilkums, slīpums un līdzīgi) | Rakstiet tos skriptā vai ar `partcraft set` ([Skripti un komandrinda](topic:scripts-and-cli)) |
| Detaļa, kas rādīta collās | Izmēri tiek rādīti milimetros; ierakstiet `2in` skaitļa lodziņā vai izteiksmē, un tas kļūst par 50.8 |

## Faili

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| STEP cietā ķermeņa importētu funkciju rediģēšana (tas ierodas bez vēstures) | Pievienojiet vai izgrieziet materiālu ar savām funkcijām |
| Krāsu, nosaukumu, montāžas struktūras un PMI nolasīšana no STEP | Nav pieejams |
| glTF, OBJ, IGES, Parasolid eksports; 3D detaļas DWG (tikai varianta pakete raksta DWG: rasējuma lapu) | STL vai 3MF tīkliem; STEP cietajiem ķermeņiem; DXF 2D |
| IGES, DXF vai citu programmu pašu failu atvēršana (faili `.3dm` atveras kā viens korpuss: [Atvērt .3dm modeli kā cietu korpusu](topic:open-3dm-files)) | Pieprasiet STEP vai slēgtu STL, OBJ vai 3MF tīklu: [Atvērt STL, OBJ vai 3MF](topic:open-meshes) |
| Montāžas struktūra (koks ar detaļu nosaukumiem) eksportētā STEP | Montāžas STEP ir viens saliktais objekts no novietotajiem cietajiem ķermeņiem |
| Saglabāšana izvēlētā mapē bez pārlūkprogrammas lejupielādes | Ieslēdziet "jautāt, kur saglabāt" pārlūkprogrammas lejupielādes iestatījumos |

## Rasējumi

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Izmēri pāri trim kopējiem izmēriem (caurumu izmēri, pozīcijas, izmēru pielaides) | Atzīmējiet PDF vai eksportējiet DXF un izmēriet to 2D CAD programmā |
| Vairāk nekā viens griezums vai detaļa; saskaņoti, izlauzti un palīgskati | Viens griezums un viena detaļa uz rasējumu |
| Brīvs teksts, piezīmes un tabulas uz lapas (izņemot nosaukuma un pārskatījuma blokus) | Apdares piezīme vai teksts, kas pievienots PDF |
| Pirmā leņķa projekcija, kustīgi skati, portreta lapas | Trešais leņķis, automātisks izkārtojums, ainavas lapas A4–A0 un ANSI A–E |
| Dzīvs griezuma skats: vairākas plaknes vai griezuma kaste vienlaikus, griezuma kontūra, griezuma saglabāšana failā | Viena plakne vienlaikus no {{ui:Skati}} › {{ui:Griezuma skats}}; skatiet [Apskatīt iekšpusi ar griezuma skatu](topic:section-view) |
| Montāžas rasējumi ar vairāk skatiem, izmēriem vai pārvietojamām norādēm | Viens izometriskais (vai izvērsts) skats ar automātiskām norādēm un detaļu sarakstu |
| Kopēšana un ielīmēšana GD&T un apdares simboliem | Katru novietojiet ar Datum, Frame vai Finish |
| Rokasgrāmatas: STEP faili {{ui:No cita faila…}} Illustrate, modelis tieši no ModelCraft vai BimCraft, attēli ar ceļu izsekotāja kvalitāti, interaktīvs 3D PDF iekšienē | Atveriet STEP Dizainā un sāciet rokasgrāmatu {{ui:No atvērtās detaļas}}; saglabājiet modeli kā glTF (.glb); PNG attēli no 3D skata; interaktīvais 3D fails: skatiet [Sākt rokasgrāmatu Illustrate](topic:illustrate) |

## Montāžas

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Zobratu, zobstieņa, kluņa un skrūves savienojumi; lodes savienojums, kas ierobežots ar konusu; savienojumi uz izliektām virsmām vai starp punktiem | Stingri, rotējoši, slīdoši, cilindriski, plakani, lodes un tapas-spraišļa savienojumi uz plakanām virsmām, katrs ar savām robežām: skatiet [Veidot montāžu](topic:build-assembly) |
| Izvērstie soļi, kas pagriež detaļas, un detaļu vilkšana, kuru novietoto savienojumi | Taisni izvēršanas soļi; noņemiet savienojumu, lai pārvietotu detaļu ar roku |
| Apakšmontāžas | Tikai viens detaļu līmenis |
| Zobrati, kluņi, kontakts | Nav pieejams |

## Ražošana

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| 3D adaptīvā notīrīšana un nobīdes rupjā apstrāde 3D; ūdenslīnijas, zīmuļa, radiālā un spirālveida apdare; adaptīvie gājieni, kas rakstīti kā loki | 3D rupjā apstrāde taisnās rindās un atlikuma apstrāde: skatiet [3D rupjā apstrāde un atlikuma apstrāde](topic:rough-3d); Paralēla un Scallop apdare: skatiet [3D apstrāde](topic:finish-3d); 2,5 asu virsma, kabata, 2D adaptīvs, kontūra, urbšana un nošķelšana: skatiet [Instrumentu trajektoriju un G-koda veidošana](topic:manufacture) |
| Ķēdes griešana, plūsmas līniju un vairāku asu rupjās apstrādes trajektorijas, slīpas darba plaknes kodi (G68.2), turētāja un iekārtas sadursmju pārbaudes; 5 asu un rotācijas griezumu simulācija | Slīps instruments jebkurai operācijai, 5 asu apdare ar lodveida pirksta frēzi un 4. ass rotācijas apdare: skatiet [4 un 5 asu apstrāde](topic:multi-axis) |
| Iekšējā urbšana un iekšējās vītnes virpā, G71/G76 cikli, loki virpošanas trajektorijās, dzīvie instrumenti, apakšvārpsta | Ārējā virpošana: sejas, rupjā, apdare, rievas, nogriešana, vītne, urbšana uz centra: skatiet [Virpošana uz virpas](topic:turning) |
| Leņķa vai stūra zondēšana, instrumentu iestatītājs, izmēra salīdzināšana ar pielaidi | Sejas, malas, cauruma vai izciļņa zondēšana darba nobīdes iestatīšanai: skatiet [Zondēšana](topic:probing) |
| Turētāja un kāta sadursmju pārbaudes | Vērojiet rievas garuma brīdinājumus un pārbaudiet savas vadības simulatorā |
| Instrumenta darbmūža un apakšprogrammu cikli postprocesorā; citu programmu postprocesoru failu ielāde | Rakstiet vai mainiet postprocesoru PartCraft savā formātā: skatiet [Rediģējami postprocesori](topic:post-processors) |
| Collu G-kods (G20) | Tikai milimetri (G21) |

## Simulācija un ģeneratīvais dizains

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Nelineāri pētījumi: plūšana, lielas novirzes, kontakts starp detaļām, nogurums | Lineārs statiskais un dabiskās frekvences: skatiet [Pārbaudīt spriegumu un novirzi](topic:simulation); saglabājiet drošības koeficientu ievērojami virs 1 |
| Nelineārs izliekums (nepilnības, pēcizliekums, pārlēciens) | Lineāri izliekuma slodzes koeficienti ar pietiekamu rezervi: skatiet [Siltums, termiskais spriegums un izliekums](topic:thermal-and-buckling) |
| Starojums starp virsmām (skata koeficienti), kontakta pretestība, no temperatūras atkarīgi materiāli, inerce termiskajā spriegumā (termiskie triecienviļņi) | Starojums apkārtnē, stacionārs vai kvazistatisks termiskais spriegums laika gaitā, nemainīgas īpašības: skatiet [Siltums, termiskais spriegums un izliekums](topic:thermal-and-buckling) |
| Automātiska precizēšana pārejošam siltumam un pētījumiem ar termisko slodzi; tīkla padarīšana rupjāka, kur kļūda ir maza; mērķis lokālam lielumam (maksimālais spriegums vienā vietā) | **Precizēt automātiski** statiskiem, izliekuma, dabiskās frekvences un stacionāriem termiskiem pētījumiem, pēc kļūdas visai detaļai: skatiet [Pārbaudīt spriegumu un novirzi](topic:simulation); citādi samaziniet elementa izmēru |
| Gultņu un bultskrūvju slodzes, attālinātie spēki, momenti, atsperes, paredzētās pārvietošanās | Spēki un spiedieni uz virsmām, gravitācija; fiksētas un bez berzes virsmas |
| Montāžu simulācija; materiāli, kas atšķiras pēc virziena (drukātie slāņi, kompozīti) | Viena detaļa, viens izotropisks materiāls |
| Vairāki risinātāja pavedieni tetraedriskiem pētījumiem, siltuma pārnesei un ģeneratīvam dizainam; jebkuri pavedieni lapā, kas nav izolēta no citas izcelsmes | Vokseļu pētījumi, izliekums, spriegums laika gaitā un laminārā plūsma izmanto pavedienus, kur lapa to atļauj: skatiet [PartCraft iestatījumi](topic:settings) |
| Turbulenta plūsma ar dizaina precizitāti (Spalart–Allmaras modelis ir iekļauts kā eksperimentāls: cauruļvada berze par 30 līdz 34 % augstāka, atpakaļsoļa atkārtota pieslēgšanās par 21 līdz 39 % īsāka; plānots: smalkākas šūnas pie sienām); siltums plūsmā; nestacionāra (laikā precīza) plūsma; brīvās virsmas; neņūtona šķidrumi; rotējošas detaļas | Lamināra, stacionāra, izotermiska Ņūtona šķidruma plūsma vai eksperimentālais turbulences modelis kvalitatīviem rakstiem: skatiet [Simulēt šķidruma plūsmu](topic:flow-simulation); panelis brīdina, kad Reinoldsa skaitlis ir aiz lamināra |
| Stiepes ierobežojumi un ražošanas noteikumi (pārkares, frēzēšanas virzieni) ģeneratīvajā dizainā; vairāki materiāli vienā formā | Stingrākā forma tilpumam; pārbaudiet rezultātu Simulācijā: skatiet [Izaudzēt formu no slodzēm](topic:generative-design) |
| Rezultāts kā rediģējams (gluds, parametrisks) cietais ķermenis | STL, facetēts STEP vai detaļa ar rezultātu kā importētu facetētu cieto ķermeni |
| Elektriskās mašīnas dizains: rotors, kas griežas statorā, griezes moments pret leņķi, piesātinošs tērauds, magnēti, kas zaudē stiprumu aiz sava līkuma, virpuļstrāvas un dzelzs un vara zudumi; magnētiskie lauki 3D vai uz izliektiem tīkliem | Lineāra 2D magnetostatika uz režģa analīzes bibliotēkā: spoles, dzelzs, pastāvīgie magnēti uz to atsitiena līnijas, spraugas, induktivitāte un pievilkšana: skatiet [Magnētiskie lauki 2D](topic:magnetic-fields-2d) |

## Skripti

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Norādes ar peles novietošanu, pārtraukuma punkti un soļošana skriptu redaktorā | Meklēšana, salocīšana un pabeigšana ir iekļauta (skatiet [Rakstīt un palaist skriptus](topic:craftscript)); pārējam jūsu pašu redaktors: {{ui:Saglabāt}} un {{ui:Atvērt}} Skriptu grupā pārvieto skriptus iekšā un ārā; iebūvētās funkcijas uzskaitītas [CraftScript valodā](topic:craftscript-language) |
| Pārtraukuma punkti un soļošana caur skriptu | `disp` un `fprintf` ceļā; {{key:Mod+Enter}} palaiž dažas atlasītās rindas vienlaikus |
| Lauki un grafiki, ko skripts rāda, zīmēti Dizaina darba vidē; skripti, kas maina detaļas parametrus | Tie rādās Skripta darba vidē; skripti nolasa parametrus ar `param` (skatiet [Rakstīt un palaist skriptus](topic:craftscript)), maina tos cilnē {{ui:Parametri}} |
| Attēli un tabulas blakus grafikiem; grafika rediģēšana (tuvināšana, asu robežas) pirms saglabāšanas | Blakus rāda grafikus; saglabājiet grafiku kā PNG, SVG vai CSV un pabeidziet to citur |
| numpy un citas Python pakotnes; Python bezsaistē; Python salocīšana redaktorā; Pascal Script | Python standarta bibliotēka, CraftScript un Lua: skatiet [Skripti Python](topic:craftscript-python) |
| Lua funkciju nodošana iebūvētām funkcijām; bibliotēkas funkcijas izsaukšana no Lua pēc nosaukuma, kas veidots skripta izpildes laikā | Ierakstiet bibliotēkas funkcijas nosaukumu skriptā (`cs.static_tet(…)`) vai izsauciet to no CraftScript skripta |

## Lietotne

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Mākoņa saglabāšana, koplietošana un versiju vēsture | Vēl nav pieejams. Saglabājiet failus datorā un uzturiet versijas pēc nosaukuma |
| PartCraft kā instalēta lietotne iPad un iPhone | Izmantojiet PartCraft ierīces pārlūkprogrammā; Android un darbvirsmā tā darbojas arī CadCraft Studio (getcadcraft.com/download) |
| Konteksta (labā klikšķa) izvēlnes | Rīkjosla un labais panelis |
| Pilnīgi bezsaistes darbs no tīras sākuma pozīcijas | Tikai tad, kad lietotne saglabāta lietošanai bezsaistē: skatiet [Darbs bezsaistē](common:offline) |

Ziņojiet, ko visvairāk trūkst, caur vietnes atbalsta lapu: tas nosaka, kas nāks tālāk.

## Inženieris (ģeneratori un lauki)

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Galviņas, ports un savienojumi uz ģenerētā siltummaiņa; temperatūras līknes materiāla izturībai; T-zudumi kolektorā | Ģeneratori veido serdi un caurules; pievienojiet savienojumus Dizainā; izmantojiet materiāla istabas temperatūras vērtības ar drošības koeficientu |
| Ģeneratoru pievienošana no papildinājumu kataloga ar vienu klikšķi | {{ui:Atvērt}} Inženiera darba vidē pievieno ģeneratoru no faila |
| Lauka fails smalkāks par ģeneratora paša vokseļa izmēru; `.vdb` failu lasīšana | Saglabājiet smalkāku lauku no skripta; `.vdb` tiek rakstīts, nevis lasīts |
| Spiedtrauku koda aprēķini | Mācību grāmatu plānu un biezu sienu formulas ar jūsu izvēlēto drošības koeficientu; nav koda rezerves |
| Ģeneratori citām lietotnēm | Šajā versijā tikai PartCraft |
