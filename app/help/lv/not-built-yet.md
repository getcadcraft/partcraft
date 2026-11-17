---
title: Kas vēl nav izveidots
summary: Viss, ko šī PartCraft versija vēl nedara, no vērptiem izvilkumiem līdz collu attēlojumam, zīmējumu izmēriem un apakšmontāžām, kā arī ko darīt šodien.
keywords: trūkst, vēl nav, ierobežojumi, ceļvedis, precīzs kodols, noapaļojums, nošķelšana, čaula, izvilkums, pārejas virsma, STEP imports, simulācija, ražošana, vērpts izvilkums, pārejas virsmas gala tangence, virsmas noapaļojums, vienādojumi, collas, zīmējumu izmēri, apakšmontāžas, mākonis, planšete, tālrunis
from: 9b868162
---

PartCraft ir agrīna versija. Šī lapa uzskaita to, ko tā vēl nedara, lai jūs to nemeklētu, un ko darīt šodien. Nekam šeit nav datuma.

## Vajag precīzu kodolu

Šī versija visas detaļas veido ar tīkla kodolu (skatiet [Tīkla kodols](topic:solid-kernels)). Viss zemāk vajag precīzu ģeometrijas kodolu, kāda šai versijai vēl nav. Detaļas, kas saglabātas ar šīm funkcijām, joprojām atveras: funkcijas paliek vēsturē, atzīmētas kā neizveidotas, un tiek saglabātas, kad saglabājat.

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| {{ui:Noapaļojums}} un {{ui:Nošķelšana}} apaļām malām; noapaļojumi, kuru rādiuss mainās pa malu; noapaļojumi, kas vienmērīgi saplūst tur, kur satiekas (tīkla kodols tos savieno ar šķautni) | Noapaļojums un Nošķelšana darbojas taisnām malām starp plakanām virsmām; citus stūrus noapaļojiet skicē pirms izvilkšanas ({{ui:Noapaļojums}} skicē, {{key:F}}) |
| {{ui:Čaula}}, kas atver izliektas virsmas; sienas ar dažādu biezumu | Atveriet plakanas virsmas; pievienojiet materiālu ar izvilkumiem tur, kur siena jābūt biezākai |
| {{ui:Izvilkums}}, {{ui:Pārejas virsma}}, {{ui:Slīpums}} uz izliektām virsmām; izvilkšana līdz virsmai, nākamajai virsmai vai virsotnei; konusveida izvilkumi | Izvelciet vai rotējiet soļos, kur vajag; izvelciet līdz dziļumam, ko izmērījāt |
| {{ui:Riba}}, {{ui:Pamata atloks}}, {{ui:Malas atloks}} un plakanie izklājumi | Izvelciet plāksni vai ribas profilu |
| Virsmas: {{ui:Forma}} pabeigšana detaļā, {{ui:Ielāps}}, {{ui:Loftēt virsmu}}, {{ui:Gordona virsma}}, {{ui:Savīt}}, {{ui:Sabiezināt}}, {{ui:Nobīdīt virsmu}}, {{ui:Pagarināt virsmu}}, {{ui:Apgriezt virsmu}} | Nav pieejams |
| Vairāki ķermeņi: {{ui:Apvienot}}, {{ui:Pārvietot ķermeni}}, {{ui:Mērogot ķermeni}}, {{ui:Ceļa masīvs}}, elementi, kas veido jaunu ķermeni | Viens ciets ķermenis; masīvi un spoguļi ir kopējami elementi |
| Skices, plaknes, asis un punkti uz virsmām, ko var atrast tikai precīzs kodols (noapaļojumā izveidota virsma, cauruma siena, importēta cieta ķermeņa virsma) | Skicējiet uz pamata plaknēm, atsauces plaknēm un izvilkumu un rotāciju plakanajām virsmām |
| Ģeneratīvā dizaina rezultāts, atvērts kā detaļa vai pievienots tai (tas kļūst par importētu cietu ķermeni) | Lejupielādējiet rezultātu kā STL vai STEP |
| Atvērta STEP faila izliekto virsmu rediģēšana kā precīzām virsmām; precīzs STEP no STEP faila spline, izliektajām un rotētajām virsmām, spline sāniem, modelētiem vītnēm, STL / OBJ / 3MF ķermeņiem un montāžām; STEP citiem detaļu modelētājiem | {{ui:Atvērt}} nolasa STEP kā trijstūrus un saglabā faila plakanās virsmas, cilindrus, konusus, sfēras un tori eksportam ([Atvērt STEP failu](topic:import-step)); {{ui:Eksportēt}} › {{ui:STEP AP242 (precīzs cietais ķermenis)}} uzraksta katru analītisko virsmu precīzi un saglabā tās kā facetes ([Eksportēt](topic:export-files#for-other-cad-programs-step)); makro citam detaļu modelētājam joprojām raksta |
| Patiesi loki zīmējumu skatos | Skati un griezuma skati tiek zīmēti no facetēm |
| Precīzi tilpumi, laukumi un attālumi | {{ui:Mērīt}} dod facetēta cietā ķermeņa skaitļus, nedaudz zemākus apaļām detaļām; smalkāks iestatījums **Līknes** tos tuvina |

Dažas zemāk esošo tabulu rindas iesaka kādu no šīm funkcijām kā veidu, kā apiet kaut ko citu. Šie ieteikumi attiecas, kad precīzs kodols būs atpakaļ.

## Funkcijas

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Virsmu noapaļojumi, pilni noapaļojumi, noapaļojumi ar rādiusiem, kas iestatīti punktos pa malu | Nemainīgs vai lineārs mainīgs {{ui:Noapaļojums}}; vairākas noapaļojuma funkcijas |
| Čaulas ar dažādu sienu biezumu | Viens {{ui:Čaula}} biezums; pievienojiet materiālu ar izvilkumiem tur, kur siena jābūt biezākai |
| {{ui:Slīpums}} uz brīvformas (spline) virsmām | {{ui:Slīpums}} darbojas uz plakanām, cilindriskām un konusveida virsmām |
| Vērpti izvilkumi, plānsienu un virsmu izvilkumi; gala tangence funkcijā Pārejas virsma; pārejas virsma ar vienu vadlīniju; spline ceļi | {{ui:Izvilkums}} ar fiksētu orientāciju vai gala mērogu; pārejas virsma ar divām vai vairāk vadlīnijām: skatiet [Izvilkums, pārejas virsma un slīpums](topic:sweep-loft-draft) |
| Ribas no lokiem vai spline; ribas, kas augtas kvadrātveidā pret skici (no augšējā skata); slīpums uz ribām; vairākas ribas no vienas skices | {{ui:Riba}} no vienas līniju ķēdes tās pašas ribas plaknē: skatiet [Ribas un stiprinājumi](topic:rib) |
| "Līdz" izliektai virsmai; "līdz nākamajai" apstāšanās izliektā virsmā | Līdz plakanai virsmai vai atsauces plaknei |
| Urbumi ar preturbumu, collu un cauruļu vītnes, konusveida vītnes, vītņu izbeigšanās un noslīpēti vītņu sākumi | Preturbums ar nelielu dziļumu; ISO metriskās un trapeces vītnes, kosmētiskas vai modelētas: skatiet [Vītnes uz vārpstām un urbumiem, zīmētas vai modelētas](topic:threads) |
| Plānsienu izvilkumi | Zīmējiet abas profila sienas |
| Masīva kopijas, izlaistas pa vienai; aizpildīšanas masīvi | Izmantojiet atsevišķus elementus; masīvi pa līkni: {{ui:Ceļa masīvs}} |
| Masīvu kopēšana, spoguļi, noapaļojumi, nošķelšanas, čaulas un importēti cietie ķermeņi | Kopējiet skici vai elementu, uz kura tie balstās, vai veidojiet tam masīvu |
| Precīza (G1) tangence formas īpašajos punktos; formas daļu apvienošana lielākās virsmās | Palieliniet formas **Līmeni**: tuvināto daļu skaits kļūst mazāks; skatiet [Brīvformas formas ar Forma](topic:form-surfaces) |
| Forma, kas sastāv no vairākām atsevišķām slēgtām daļām vienā elementā; tilti starp formām | Viena slēgta daļa katram Forma elementam; savienojiet tās ar **Savienot** |
| Virsmu ķermeņu izvēle skatā (izņemot apgriešanas un ielāpu punktus); virsmu noapaļojumi; atcelt apgriešanu; G2 ielāpi; Gordona virsmas, kas pieskaras izliektiem kaimiņiem (pieskaroties plaknēm un plakanām virsmām, tas ir izveidots) | Izvēlieties tos pēc nosaukuma elementa panelī; vispirms sabiezināt, tad noapaļot cieto ķermeni |
| Ķermeņu saraksts vēsturē; paslēpto ķermeņu izslēgšana no eksportiem | Pārdēvējiet un paslēpiet ķermeņus detaļas paneļa ķermeņu sarakstā; dzēsiet vai apslāpējiet elementu, kas izveidoja ķermeni, lai to izslēgtu |
| Ne-vienmērīga mērogošana, kas saglabā cilindrus un konusus analītiskus; ne-vienmērīga nobīdīto virsmu mērogošana | {{ui:Mērogot ķermeni}} padara izliektās virsmas slēgtas B-spline (0.0000004 mm robežās); vienmērīgs mērogs paliek precīzs |
| Virsmu ķermeņu apvienošana; Minkovska summas | Vispirms {{ui:Savīt}} vai {{ui:Sabiezināt}}, tad {{ui:Apvienot}} |
| Pielaidu analīze: pielaižu virknes, kas pagriežas stūros (2D un 3D vektoru cilpas), jutīgumi, kas aprēķināti no ģeometrijas, Monte Carlo ar citiem sadalījumiem, izmēru pielaides skices izmēriem, bonusa pielaide no materiāla stāvokļa | {{ui:Pielaižu virkne}} montāžā: viens virziens, sliktākais gadījums un RSS, pielaides ierakstītas, no rāmja vispārējās pielaides vai no GD&T rāmjiem: skatiet [Pielaižu virknes](topic:tolerance-stackup) |
| Izvietošana: griešanas secība un iebraukšanas ceļi, kopīgu malu griešana vienreiz, detaļas, kas jātur kopā; atgriezumi no ruļļiem, krājums, ko kopīgi izmanto projekti | {{ui:Izvietot plakanas detaļas loksnēs…}} ar atstarpi, malām, pagriezieniem un šķiedru: skatiet [Plakanu detaļu izvietošana loksnēs](topic:nest-flat-parts); atlikušās plāksnes tiek saglabātas un vispirms izmantotas: skatiet [Atgriezumu saglabāšana un atkārtota izmantošana](topic:nest-offcuts); griezumu plānojiet savas griezēja programmatūrā |
| Loksnes metāls: apmalojumi, nobīdes, šķautņu un kontūru atloki; atloki uz izliektām malām vai uz saliekta pamata atloka virsmām; skicētas liekšanas; stūru noslēgumi; veidošanas instrumenti; cieta ķermeņa pārvēršana loksnes metālā; saliekta pamata atloka plakanais izklājums ar izgriezumiem; liekšanas tabulas | {{ui:Pamata atloks}} (plāksne vai saliekts profils), {{ui:Malas atloks}} uz plāksnes taisnām malām ar liekšanas atbrīvojumiem un plakanais izklājums ar K-faktoru: skatiet [Loksnes metāls](topic:sheet-metal) |
| Slīpuma analīze montāžās; šķirtnes līnijas atrašana; sienas biezuma analīze | {{ui:Lējuma slīpuma analīze}} detaļai Design: skatiet [Pārbaudiet slīpumu formēšanai un liešanai](topic:draft-analysis); atveriet katru montāžas detaļu, lai to pārbaudītu |

## Skices

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Elipses, tangenciālie loki, konikas, spline ar iestatītu pakāpi vai svariem (NURBS) | Spline (kubiskās), loki un riņķi ar Tangenciālām relācijām |
| Punkts uz spline (relācija), līkuma (G2) relācijas | Novietojiet spline paša punktu tur, kur tam jāiet cauri |
| Nobīdītas spline kopijas, kas seko vēlākām izmaiņām; nobīdes ķēdēm ar asiem spline stūriem | Nobīdiet vēlreiz pēc izmaiņas; vispirms noapaļojiet stūri |
| Masīva kopijas, kas paliek saistītas ar oriģinālu; masīvi pa līkni | Veidojiet masīvu vēlreiz pēc izmaiņas |
| Brīvformas vai sasvērtu apļveida malu projicēšana; projicēta ģeometrija, kas seko detaļai | Projicējiet taisnas un paralēlas apļveida malas, tad uzmēriet |
| Vadītie (atsauces) izmēri | Nolasiet izmērus no paneļa vai detaļas faktiem |
| Kolineāras relācijas | Paralēla ar 0 attālumu |
| Ielīmēšana citā programmā (sistēmas starpliktuve) | Eksportējiet DXF, STEP, STL vai 3MF |
| Loku, relatīvo vai polāro koordinātu rakstīšana | Zīmējiet līnijas un riņķus; zīmējiet lokus ar Loka rīku |
| Ģeometrijas atlasīšana bez rādītāja | Nepieciešams klikšķis vai pieskāriens |

## Parametri un vienības

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Konfigurācijas, kas maina materiālus; CSV dizaina tabula, kas izslēdz elementus | Konfigurācijas iestata parametrus un ieslēdz un izslēdz elementus: skatiet [Konfigurācijas un dizaina tabulas](topic:design-tables); `partcraft variants` veido saglabātas konfigurācijas pēc nosaukuma, arī ar izslēgtiem elementiem: skatiet [Veidojiet variantu paketi no savām konfigurācijām](topic:variant-pack) |
| Vienādojumi jaunāko elementu paneļu skaitļos (plakne, izvilkums, slīpums un līdzīgi) | Rakstiet tos skriptā vai ar `partcraft set` ([Skripti un komandrinda](topic:scripts-and-cli)) |
| Detaļa, kas rādīta collās | Izmēri rādās milimetros; ierakstiet `2in` skaitļu lodziņā vai izteiksmē, un tas kļūst par 50.8 |

## Faili

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Importēta STEP cietā ķermeņa paša elementu rediģēšana (tas ienāk bez vēstures) | Pievienojiet vai noņemiet materiālu ar saviem elementiem |
| Krāsu, nosaukumu, montāžas struktūras un PMI nolasīšana no STEP | Nav pieejams |
| glTF, OBJ, IGES, Parasolid eksports; DWG 3D detaļai (tikai variantu pakete raksta DWG: zīmējuma lapu) | STL vai 3MF tīkliem; STEP cietiem ķermeņiem; DXF 2D |
| IGES, DXF vai citu programmu paši faili (`.3dm` faili atveras kā viens korpuss: [Atvērt .3dm modeli kā cietu korpusu](topic:open-3dm-files)) | Pieprasiet STEP vai slēgtu STL, OBJ vai 3MF tīklu: [Atvērt STL, OBJ vai 3MF](topic:open-meshes) |
| Montāžas struktūra (koks ar detaļu nosaukumiem) eksportētā STEP | Montāžas STEP ir viens salikts izvietoto cieto ķermeņu veidojums |
| Saglabāšana izvēlētā mapē bez pārlūka lejupielādes | Ieslēdziet "jautāt, kur saglabāt" pārlūka lejupielādes iestatījumos |

## Zīmējumi

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Izmēri, kas pārsniedz trīs kopējos izmērus (caurumu izmēri, pozīcijas, pielaides izmēriem) | Atzīmējiet PDF vai eksportējiet DXF un uzmēriet 2D CAD programmā |
| Vairāk nekā viens griezums vai viena detaļa; izlīdzinātie, izlauztie un palīgskati | Viens griezums un viena detaļa katram zīmējumam |
| Brīvs teksts, piezīmes un tabulas lapā (izņemot virsraksta un pārskatīšanas blokus) | Apdares piezīme vai teksts, kas pievienots PDF |
| Pirmā leņķa projekcija, kustīgi skati, portreta lapas | Trešais leņķis, automātisks izkārtojums, ainavas lapas A4–A0 un ANSI A–E |
| Dzīvs griezuma skats: vairākas plaknes vai griezuma kaste vienlaikus, kontūra ap griezumu, griezuma saglabāšana failā | Viena plakne vienlaikus no {{ui:Skati}} › {{ui:Griezuma skats}}; skatiet [Apskatiet iekšpusi ar griezuma skatu](topic:section-view) |
| Montāžas zīmējumi ar vairāk skatiem, izmēriem vai pārvietojamiem baloniem | Viens izometrisks (vai izjaukts) skats ar automātiskiem baloniem un detaļu sarakstu |
| GD&T un apdares simbolu kopēšana un ielīmēšana | Ievietojiet katru ar Datum, Frame vai Finish |
| Rokasgrāmatas: STEP faili Illustrate {{ui:No cita faila…}}, modelis tieši no ModelCraft vai BimCraft, attēli ar ceļu izsekotāja kvalitāti, interaktīvs 3D PDF iekšpusē | Atveriet STEP Design un sāciet rokasgrāmatu {{ui:No atvērtās detaļas}}; saglabājiet modeli kā glTF (.glb); PNG attēli no 3D skata; interaktīvais 3D fails: skatiet [Sāciet rokasgrāmatu Illustrate](topic:illustrate) |

## Montāžas

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Zobratu, zobstieņa, kulačku un skrūves savienojumi; lodīšu savienojums, kas ierobežots konusā; savienojumi uz izliektām virsmām vai starp punktiem | Stingri, rotējoši, slīdoši, cilindriski, plakani, lodīšu un tapas slota savienojumi uz plakanām virsmām, katrs ar savām robežām: skatiet [Montāžas veidošana](topic:build-assembly) |
| Izjaukšanas soļi, kas pagriež detaļas, un detaļu vilkšana, ko novieto savienojumi | Taisni izjaukšanas soļi; noņemiet savienojumu, lai pārvietotu detaļu ar roku |
| Apakšmontāžas | Tikai viens detaļu līmenis |
| Zobrati, kulački, kontakts | Nav pieejams |

## Ražošana

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| 3D rupjā apstrāde izliektām virsmām, 3D adaptīvā tīrīšana, atlikušā apstrāde; ūdenslīnijas, zīmuļa, radiālā un spirālveida apdare; adaptīvās gaitas, kas rakstītas kā loki | 2.5 asu sejas, dobuma, 2D adaptīvā, kontūras, urbšanas un nošķelšanas apstrāde: skatiet [Veidojiet apstrādes ceļus un G-kodu](topic:manufacture); visa modeļa Parallel un Scallop apdare: skatiet [3D apdare](topic:finish-3d) |
| 4 un 5 asu apstrādes ceļi, virpošana, zondēšana | Iestatiet vienu pusi vienlaikus ar instrumenta asi cilnē Setup |
| Turētāja un kāta sadursmju pārbaudes | Pievērsiet uzmanību rievu garuma brīdinājumiem un pārbaudiet savas vadības simulatorā |
| Zondēšana, instrumenta kalpošanas laika un apakšprogrammu cikli, 4. un 5. ass un virpas kodi postprocesorā; citu programmu postprocesoru failu ielāde | Rakstiet vai mainiet postprocesoru PartCraft savā formātā: skatiet [Rediģējami postprocesori](topic:post-processors) |
| Collu G-kods (G20) | Tikai milimetri (G21) |

## Simulācija un ģeneratīvais dizains

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Nelineāri pētījumi: plūstamība, lielas deformācijas, kontakts starp detaļām, nogurums | Lineārā statika un dabiskās frekvences: skatiet [Pārbaudiet spriegumu un novirzi](topic:simulation); turiet drošības koeficientu krietni virs 1 |
| Nelineāra izliekšanās (nepilnības, pēcizliekšanās, pārslēgšanās) | Lineāri izliekšanās slodzes koeficienti ar pietiekamu rezervi: skatiet [Siltums, termiskais spriegums un izliekšanās](topic:thermal-and-buckling) |
| Starojums starp virsmām (skatu faktori), kontakta pretestība, temperatūrai atkarīgi materiāli, inerce termiskajā spriegumā (termiskie triecienviļņi) | Starojums apkārtnē, stacionārs vai kvazistatisks termiskais spriegums laika gaitā, konstantas īpašības: skatiet [Siltums, termiskais spriegums un izliekšanās](topic:thermal-and-buckling) |
| Automātiska precizēšana pārejošam siltumam un pētījumiem ar termisko slodzi; tīkla padarīšana rupjāku, kur kļūda ir maza; mērķis lokālam lielumam (maksimālais spriegums vienā vietā) | **Automātiski precizēt** statiskiem, izliekšanās, dabiskās frekvences un stacionāriem termiskiem pētījumiem, kļūdai visā detaļā: skatiet [Pārbaudiet spriegumu un novirzi](topic:simulation); citādi samaziniet elementa izmēru |
| Gultņu un skrūvju slodzes, attālinātie spēki, momenti, atsperes, noteiktas pārvietojumi | Spēki un spiedieni uz virsmām, gravitācija; fiksētas un bezberzes virsmas |
| Montāžu simulācija; materiāli, kas atšķiras pēc virziena (drukātie slāņi, kompozīti) | Viena detaļa, viens izotropisks materiāls |
| Vairāki solver pavedieni tetraedriskiem pētījumiem, siltuma pārnesei un ģeneratīvajam dizainam; jebkuri pavedieni lapā, kas nav cross-origin izolēta | Vokseļu pētījumi, izliekšana, spriegums laikā un laminārā plūsma izmanto pavedienus, kur lapa to ļauj: skatiet [PartCraft iestatījumi](topic:settings) |
| Turbulenta plūsma ar projektēšanas precizitāti (Spalart–Allmaras modelis ir iekļauts kā eksperimentāls: cauruļvada berze par 30 līdz 34 % augstāka, atpakaļsoļa atkārtota pieslēgšanās par 21 līdz 39 % īsāka; plānots: smalkāki elementi pie sienām), siltums plūsmā, nestacionāra (laikā precīza) plūsma, brīvas virsmas, neņūtoniski šķidrumi, rotējošas detaļas | Laminārā, stacionārā, izotermiskā Ņūtona šķidruma plūsma vai eksperimentālais turbulences modelis kvalitatīviem rakstiem: skatiet [Simulējiet šķidruma plūsmu](topic:flow-simulation); panelis brīdina, kad Reinoldsa skaitlis ir pāri laminārajam |
| Spriegumu ierobežojumi un ražošanas noteikumi (pārkari, frēzēšanas virzieni) ģeneratīvajā dizainā; vairāki materiāli vienā formā | Stingrākā forma tilpumam; pārbaudiet rezultātu Simulation: skatiet [Izaudziet formu no slodzēm](topic:generative-design) |
| Rezultāts kā rediģējams (gluds, parametrisks) ciets ķermenis | STL, facetēts STEP vai detaļa ar rezultātu kā importētu facetētu cietu ķermeni |
| Elektriskās mašīnas dizains: rotors, kas griežas statorā, griezes moments pret leņķi, piesātinošs tērauds, magnēti, kas zaudē stiprumu aiz sava ceļa, virpuļstrāvas un dzelzs un vara zudumi; magnētiskie lauki 3D vai uz izliektiem tīkliem | Lineāra 2D magnetostatika uz režģa analīzes bibliotēkā: spoles, dzelzs, pastāvīgie magnēti to atgriezes līnijā, spraugas, induktivitāte un pievilkšana: skatiet [Magnētiskie lauki 2D](topic:magnetic-fields-2d) |

## Skripti

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Palīdzība ar peles novietošanu, pārtraukumpunkti un soļošana skriptu redaktorā | Meklēšana, sakļaušana un pabeigšana ir iekļauti (skatiet [Rakstiet un palaidiet skriptus](topic:craftscript)); pārējam jūsu pašu redaktors: {{ui:Saglabāt}} un {{ui:Atvērt}} grupā Skripts pārvieto skriptus iekšā un ārā; iebūvētās funkcijas uzskaitītas [CraftScript valodā](topic:craftscript-language) |
| Pārtraukumpunkti un soļošana caur skriptu | `disp` un `fprintf` ceļā; {{key:Mod+Enter}} palaiž dažas atlasītas rindas vienlaikus |
| Lauki un diagrammas, ko skripts rāda, zīmēti Design darbvietā; skripti, kas maina detaļas parametrus | Tie rādās Script darbvietā; skripti nolasa parametrus ar `param` (skatiet [Rakstiet un palaidiet skriptus](topic:craftscript)), mainiet tos cilnē {{ui:Parametri}} |
| Attēli un tabulas blakus diagrammām; diagrammas rediģēšana (tālummaiņa, ass robežas) pirms saglabāšanas | Blakus rāda diagrammas; saglabājiet diagrammu kā PNG, SVG vai CSV un pabeidziet citur |
| numpy un citas Python pakotnes; Python bezsaistē; Python salikšana redaktorā; Pascal Script | Python standarta bibliotēka, CraftScript un Lua: skatiet [Skripti Python](topic:craftscript-python) |
| Lua funkciju nodošana iebūvētām funkcijām; bibliotēkas funkcijas izsaukšana no Lua pēc nosaukuma, kas veidots skripta izpildes laikā | Ierakstiet bibliotēkas funkcijas nosaukumu skriptā (`cs.static_tet(…)`) vai izsauciet to no CraftScript skripta |

## Lietotne

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Mākoņa saglabāšana, koplietošana un versiju vēsture | Vēl nav pieejams. Saglabājiet failus datorā un glabājiet versijas pēc nosaukuma |
| PartCraft kā instalēta lietotne iPad un iPhone | Izmantojiet PartCraft ierīces pārlūkā; Android un galddatorā tas darbojas arī CadCraft Studio (getcadcraft.com/download) |
| Konteksta (labā klikšķa) izvēlnes | Rīkjosla un labais panelis |
| Pilnīgi bezsaistes darbs no jaunas sākuma | Tikai tad, kad lietotne saglabāta darbam bezsaistē: skatiet [Darbs bezsaistē](common:offline) |

Ziņojiet, ko visvairāk trūkst, caur vietnes atbalsta lapu: tas nosaka, kas nāks tālāk.

## Inženieris (ģeneratori un lauki)

| Vēl nav izveidots | Šodien tā vietā |
|---|---|
| Galvenes, pieslēgvietas un savienojumi ģenerētajā siltummainī; temperatūras līknes materiāla stiprumam; T-savienojumu zudumi kolektorā | Ģeneratori veido serdi un caurules; pievienojiet savienojumus Design; izmantojiet materiāla istabas temperatūras vērtības ar drošības koeficientu |
| Ģeneratoru pievienošana no papildinājumu direktorijas ar vienu klikšķi | {{ui:Atvērt}} darbvietā Engineer pievieno ģeneratoru no faila |
| Lauka fails smalkāks par ģeneratora paša vokseļa izmēru; `.vdb` failu nolasīšana | Saglabājiet smalkāku lauku no skripta; `.vdb` tiek rakstīts, nevis lasīts |
| Spiediena trauku koda aprēķini | Mācību grāmatas plānsienu un biezsienu formulas ar jūsu izvēlēto drošības koeficientu; nav koda rezerves |
| Ģeneratori citām lietotnēm | Šajā versijā tikai PartCraft |
