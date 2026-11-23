---
title: Kas jauns 0.9 versijā (iepriekšējā)
summary: PartCraft 0.9 pievieno noapaļojumus starp virsmām un biezuma piešķiršanu cietiem ķermeņiem, tūkstošiem detaļu montāžas, Dokumentu glabātavu ar pārskatījumiem, Solid FEM spriegumu papildinājumu, desmit loka metodes, Lielbritānijas tērauda izmērus, drukas posmu un sveķu drukāšanas papildinājumus.
keywords: kas jauns 0.9, iepriekšēja versija, kas jauns, izlaiduma piezīmes, izmaiņu žurnāls, 0.9, noapaļojums starp virsmām, noapaļojuma ripojošā lode, noapaļot vairākas malas, sabiezināt, cietais ķermenis no virsmām, STEP čaula, IGES cietais ķermenis, skenējuma noapaļojumi, liela montāža, vienkāršotais attēlojums, 20000 detaļas, dokumenti, glabātava, izņemšana, pārskatījums, izlaidums, Rhino saite, Grasshopper, 3dm, kursori, rūpnīcas cehs, darba rinda, Solid FEM, galīgo elementu metode, fon Mizess, dabiskā frekvence, loka metodes, 3 punktu loks, Lielbritānijas tērauda profili, zilā grāmata, drukas posms, sveķi, goo, ctb, galds, izlīdzināt, kas pirmais salūst, slodzes koeficients, nelineārs, plūšana, plastiskā deformācija, kontakts, CalculiX, kustības pētījums, atstarpe, virsmas, NURBS, izlīdzināt, čaula, zebra, inženieris, ģenerators, ģenerēta korpuss, skice no fotogrāfijas, mērogs drukāšanai, sadalīt drukāšanai, saraušanās, izvietotas loksnes, G-kods, rasējums, izmērīt caurumus, MI palīgs, mcp, valodas, rīkjoslas rindas
from: 1dafd7c8
---

Šeit ir izmaiņas PartCraft 0.9 salīdzinājumā ar 0.8.1. Brīvas formas virsmas tagad aizveras līdz cietiem ķermeņiem, tūkstošiem detaļu sastāvi paliek lietojami, Dokumentu glabātava uztur pārskatījumus, un Solid FEM papildinājums pārbauda spriegumu detaļā. Katrs vienums norāda, kur to atrast.

## Jauns 0.9.1 versijā

- **Precīza STEP eksportēšana.** {{ui:Eksportēt}} › {{ui:STEP AP242 (precīzs cietais ķermenis)}} un {{ui:STEP AP214 (precīzs cietais ķermenis)}} tagad darbojas. Caurumi, izciļņi, noapaļojumi, konusi, sfēras un tori tiek ierakstīti uz saviem patiesajiem virsmām ar īstiem apļiem kā malām, lai cita CAD vai CAM programma varētu caurumu atpazīt kā caurumu. Līkņu malas, modelētas vītnes un importēti tīkli paliek plakanas facetes tajā pašā cietajā ķermenī. Skatiet [Eksportēšana drukāšanai, STEP un DXF](topic:export-files#for-other-cad-programs-step).
- **STEP ievadā, precīzs STEP izvadā.** STEP fails, ko atverat, saglabā savas plakanās virsmas, cilindrus, konusus, sfēras un torus, tāpēc {{ui:Eksportēt}} › {{ui:STEP AP242 (precīzs cietais ķermenis)}} tos ieraksta atpakaļ kā patiesas virsmas, nevis facetes: sija no piegādātāja ar bultskrūvju caurumiem iziet ar tām pašām virsmām, ar kurām ienāca, plus visu, ko tajā esat izgriezis. Līkņu, izvilkto un rotēto virsmu faili paliek facetes, tāpat kā korpusi no STL, OBJ un 3MF. Atveriet STEP failu vēlreiz detaļai, kas saglabāta iepriekš. Skatiet [Atvērt STEP failu un veidot uz tā](topic:import-step).
- **Patiesi apļi virsmas DXF.** {{ui:Eksportēt}} › {{ui:DXF no skices vai plakanas virsmas}} ar atlasītu plakanu virsmu tagad raksta apaļos caurumus kā apļus ar paša cauruma centru un rādiusu lāzera, plazmas vai ūdensstrūklas galdam. Citas apaļas malas joprojām ir facetes.
- **Precīzs STEP darbnīcai.** Ražošanā {{ui:Precīzs STEP (darba koordinātes)}} ieraksta detaļu ar savu sākumpunktu iestatījuma darba sākumpunktā un Z pa instrumenta asi, koordinātēs, ko izmanto G-kods. Skatiet [Instrumentu trajektoriju un G-koda veidošana](topic:manufacture#exact-step-for-the-shop).

## Jauns

### Virsmas un cietie ķermeņi

- **Noapaļojums starp virsmām.** Izvēlieties {{ui:Virsmas}} lodziņā {{ui:Darba vide}}, pēc tam {{ui:Noapaļojums starp virsmām}}. Atlasiet divas viena cieta ķermeņa virsmas un ierakstiet rādiusu (un {{ui:Rādiuss galā (mm, 0 = tāds pats)}} rādiusam, kas mainās gar malu). Rezultāta rindā teikts, cik tālu noapaļojums ir no ideālās ripojošās lodes, un rādiuss, kas neiederas, tiek noraidīts ar nosauktu virsmu. {{ui:Noapaļot vairākas malas}} noapaļo daudzas malas vienā solī; atzīmējiet {{ui:Stūri (sfēriska daļa, kur saiet trīs)}}, lai iegūtu sfērisku stūri, kur saiet trīs noapaļotas plakanu virsmu malas. Skatiet [Brīvas formas virsmas (NURBS)](topic:nurbs-surfaces).
- **Biezuma piešķiršana un cietais ķermenis.** {{ui:Piešķirt biezumu un izveidot cietķermeni}} tajā pašā darba vidē dod virsmai biezumu; {{ui:Otra puse}} to palielina otrā virzienā. Ieloce vai paššķērsojums tiek noraidīts, nosaucot virsmu un vietu.
- **Cietie ķermeņi no virsmām.** Apgrieztas virsmas var savienot ar apvienošanu, atņemšanu un krustošanu un ievietot detaļā kā vienu atsaucamu soli. STEP ieraksta cietu ķermeni kā vienu slēgtu čaulu, bet IGES – kā vienu cietu ķermeni; abi tiek nolasīti atpakaļ kā cietie ķermeņi. Ja virsmas neatbilst pa malai, fails saņem atsevišķas virsmas, un statusa rindā tas tiek teikts. Cietos ķermeņus var izveidot arī mezglu redaktorā; skatiet [Mezglu redaktors](topic:nodes).
- **Malu un mainīga rādiusa noapaļojumi skenējumos.** Kad pielāgojat virsmas skenējumam, meklē arī malu noapaļojumus (torus) un mainīga rādiusa noapaļojumus gar samērā taisnu malu, un tie tiek uzskaitīti ar savu rādiusu. Tas pārbaudīts tikai uz izdomātiem skenējumiem.

### Montāžas, dokumenti un saites

- **Lielas montāžas.** Detaļas, kas ir kopijas, koplieto vienu tīklu, un {{ui:Skati}} › {{ui:Vienkāršotais attēlojums}} zīmē kastes, lai skats kustētos (tas ieslēdzas pats lielām montāžām; atlase un savienojumi joprojām izmanto īstās detaļas). Detaļu koks rāda savas pirmās rindas un pogu {{ui:Rādīt vēl 700}} pārējām. Montāžas failos var būt līdz 50 000 instancēm un 100 000 savienojumiem. Skatiet [Veidot montāžu](topic:build-assembly).
- **Dokumenti.** {{ui:Dokumenti…}} grupā **Fails** atver dialogu virs projekta mapes: izņemšana un ielikšana, pārskatījumu burti, stāvokļi (darbā, pārskatīšanai, izlaists, novecojis), vēsture, kur izmantots un materiālu saraksts. Skatiet [Dokumenti un pārskatījumi (glabātava)](topic:documents-walkthrough).
- **Tiešā Rhino saite.** Viens skripts, `cadcraft_link.py`, novēro Rhino vai Grasshopper dokumentu un PartCraft ievieto tikai to, kas mainījies; importētais elements tiek pārbūvēts uz jaunās formas. Tā ir vienvirziena, un tai nepieciešams Studio. Skatiet [Tiešā .3dm saite](topic:live-3dm-link).
- **Redzēt viens otra kursorus.** Kopīgā sesijā katras personas kursors rāda savu vārdu un elementu, ko tā atlasījusi. Skatiet [Strādāt tiešsaistē kopā ar citiem](topic:work-live).
- **Rūpnīcas cehs.** Ieslēdziet papildinājumu Rūpnīcas cehs {{ui:Iestatījumi}} › {{ui:Papildinājumi}}. Pēc programmas nosūtīšanas {{ui:Ražošana}} tās cilne var {{ui:Pievienot rūpnīcas darbu rindai}} vai {{ui:Saglabāt kā darba failu}}. Tā nekad nenosūta un nepalaiž iekārtu.

### Analīze un detaļas

- **Solid FEM papildinājums.** Ieslēdziet {{ui:Solid FEM}} {{ui:Iestatījumi}} › {{ui:Papildinājumi}} (tas ir izslēgts, kamēr to nedarāt), un labajā panelī parādās cilne {{ui:Solid FEM}}. {{ui:Sadalīt detaļu tīklā}}, atlasiet fiksētas virsmas un slodzes 3D skatā, {{ui:Atrisināt}}, un attēlojiet pārvietojumu, fon Mizesa spriegumu vai formas režīmu ar {{ui:Rādīt uz modeļa}}. Skatiet [Solid FEM: sprieguma pārbaude](topic:solid-fem-check).
- **Loks skicēs, desmit veidos.** Bultiņa blakus {{ui:Loks}} skices rīkjoslā uzskaita: 3 punkti, sākums–centrs–beigas, sākums–centrs–leņķis, sākums–centrs–garums, sākums–beigas–leņķis, sākums–beigas–virziens, sākums–beigas–rādiuss, centrs–sākums–beigas, centrs–sākums–leņķis, centrs–sākums–garums un turpinājums. Skatiet [Zīmēt loku ar desmit metodēm](topic:sketch-arc-methods).
- **Lielbritānijas tērauda izmēri.** Metinātās konstrukcijas var izmantot 976 Lielbritānijas profilus (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); ierakstiet izmēru, piemēram, `305x165x40 UB`. Skatiet [Konstrukcijas elementi](topic:structural-members).

### Drukāšana

- **Drukas posms.** Poga {{ui:Drukas posms}} rīkjoslā (papildinājums 3D Print, pēc noklusējuma ieslēgts) novieto jūsu detaļas korpusus uz punktēta galda: {{ui:Izlīdzināt}}, {{ui:Pagriezt par 90°}}, {{ui:Izkārtot uz galda}}, {{ui:Ievietot visu uz galda}}, {{ui:Slāņu priekšskatījums}}, tad {{ui:Nosūtīt 3D printerim}} pa USB, Klipper (Moonraker), OctoPrint vai PrusaLink. Nekas netiek nosūtīts, kamēr neapstiprināt, un jūsu detaļa nekad netiek mainīta. Failam STL vai 3MF skatiet [Sagatavot detaļu 3D drukāšanai](topic:print-3d).
- **Sveķu drukāšana.** Papildinājumi {{ui:Iestatījumi}} › {{ui:Papildinājumi}}, visi izslēgti, kamēr tos neieslēdzat: sveķu slicers, ekspozīcijas tests un failu formāti Elegoo GOO, SL1, Chitubox CBDDLP/CTB un Anycubic. Slicēšana notiek atsevišķā pavedienā, tāpēc lapa paliek atsaucīga.

## Visās lietotnēs

- Katrs norādes padoms ir Bootstrap tooltip.
- Sākuma padomam ir aizvēršanas poga; tas paliek aizvērts.
- Paneļa cilņu rinda, kas neietilpst, ritina sāniski, nevis tiek apgriezta.
- Pārlūka cilnē vispirms rādās atvērtā dokumenta nosaukums, pēc tam PartCraft | CadCraft.
- {{ui:Iestatījumi}} rāda darba vides {{ui:Izkārtojums}} kā izvēlni ar variantiem, un valodu lodziņā uzskaitītas visas būves valodas.
- Svars un Temperatūra ir mērvienību veidi mērvienību iestatījumos.

## Labots

- Skices Loka izvēlne tagad uzskaita katru metodi.
- Papildinājuma rīkjosla un pārlūka cilnes nosaukums tika labots 2026-11-09.

## Godīgi ierobežojumi

- Precīzs STEP tika nolasīts atpakaļ OpenCascade (derīgi cietie ķermeņi, tilpumi, kas vienādi ar ar roku aprēķinātiem). To vēl nav atvērts katrā CAD vai CAM programmā, un montāža netiek ierakstīta kā precīzs STEP.
- Nekas nav izdrukāts uz reāla printera. Slicēšana, G-kods un sveķu faili tika nolasīti atpakaļ ar mūsu pašu programmām vai aizstājēja printeri; neviens no sveķu formātiem nav ielādēts printerī, un printeru izmēri un ekspozīcijas ir sākumpunkti.
- Solid FEM ir lineārs, izotrops un elastisks, viens materiāls uz detaļu, bez kontakta, plūšanas vai izliekuma. Spriegums fiksētās virsmās un asos stūros ir atkarīgs no tīkla. Tas ir pārbaudes palīglīdzeklis, ko nav pārskatījis inženieris.
- Lielu montāžu laiki iegūti serverī bez GPU; pilna detalizācijas kadrs ar 20 000 detaļām tur joprojām prasa sekundes.
- Noapaļojumi darbojas pa virsmu pāriem; nav vispārīgas virsotņu saplūdes un nav noapaļojuma starp virsmām, kas nesaskaras.
- Rhino saite nekad nav darbojusies īstā Rhino vai Grasshopper iekšienē. Dokumenti tika izmēģināti ar divām programmām vienā mapē, nevis ar diviem cilvēkiem tīkla koplietojumā.
- Virsmu pielāgošana reālam skenējumam nav manuāli pārbaudīta. Valodas, kas nav angļu, ir mašīntulkotas melnraksti.
- Windows instalētāji nav parakstīti ar kodu, un macOS diska attēls nav notariāli apstiprināts. Skatiet [Problēmu novēršana](topic:troubleshooting).

Agrākās izmaiņas ir [Kas jauns 0.7 versijā](topic:whats-new-0-7).

## Agrāk: 0.8 un 0.8.1

Šeit ir izmaiņas PartCraft 0.8 un 0.8.1 salīdzinājumā ar 0.7. Simulācija atbild, kamēr rediģējat, un parāda, kas pirmais salūst; montāžām pieejami kustības pētījumi, un jaunās darba vides veido brīvas formas virsmas un detaļas, kuru izmērus nosaka fizika. 0.8.1 ir neliels labojumu izlaidums.

### Jauns

**Simulācija**

- **Atjaunot, kamēr rediģēju.** Atzīmējiet {{ui:Atjaunot, kamēr rediģēju}} blokā Atrisināt, un atbildes seko jūsu izmaiņām. Mainot izmēru, slodzi vai materiālu, uzreiz parādās ātrā atbilde, kas veidota ar elementiem četras reizes lielākiem; kad apstājaties apmēram uz sekundi, pētījuma pašas precizētā atbilde to aizstāj. Rezultāti norāda, kuru no tām skatāt. Tērauda konsolē ātrā atbilde pārvietojumā bija 1 % robežās un spriegumā ap 4 % no precizētās. Skatiet [Pārbaudīt spriegumu un novirzi](topic:simulation#update-while-you-edit-live).
- **Kas pirmais salūst.** Statiskam vai izliekuma pētījumam {{ui:Kas pirmais salūst?}} blokā **Salauzt** mērogo slodzes, līdz detaļa padodas. Tas uzskaita, sākot no sliktākā, slodzes koeficientu līdz pirmajai plūšanai (ar sarkanu marķieri, kur spriegums maksimāls) un koeficientu līdz izliekumam. Koeficients zem 1 nozīmē, ka detaļa jau padodas tāda, kāda ir ielādēta, un Problēmu panelis rāda kļūdu. Koeficienti nāk no lineāra pētījuma, tāpēc tie ir tikpat labi, cik tas. Skatiet [Pārbaudīt spriegumu un novirzi](topic:simulation#find-out-what-breaks-first-break-it).
- **Plūšana un kontakts.** Vēl divi pētījumu veidi: nelineārs, kurā materiāls seko savai taisnajai līnijai līdz plūšanas spriegumam un tad lēzenākam slīpumam, ar attēlotu plastisku deformāciju; un kontakta pētījums, kurā atsevišķas daļas spiež viena otru (bez berzes) vai paliek saistītas. Slodzes solis, kas nevar nostabilizēties, vai daļas, kas pārāk iegrimst viena otrā, parādās Problēmu panelī. Berze, lielas slīdēšanas, lielas rotācijas, lielas novirzes un nogurums nav atrisināti. Skatiet [Pārbaudīt spriegumu un novirzi](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX ievades faili.** {{ui:Eksportēt}} › {{ui:CalculiX ievade (.inp)}} saglabā pētījumu CalculiX, atsevišķai programmai, ko instalējat un palaižat paši; {{ui:Eksportēt}} › {{ui:CalculiX rezultāti (.frd)}} nolasa tās rezultātu failu atpakaļ uz to pašu tīklu. PartCraft nekad nepalaiž šo programmu un paziņo, ja detaļa mainīta kopš ievades faila saglabāšanas.

**Montāžas**

- **Kustības pētījumi.** {{ui:Montāža}} › {{ui:Kustība}} vada viena savienojuma vērtību norādītā laikā (pastāvīgs ātrums, izlīdzināts, sinusoīda vai uz priekšu un atpakaļ), novieto montāžu katrā solī ar tās savienojumiem un slēgtajām cilpām un ziņo, kas sadursies un cik tuvu daļas nonāk. {{ui:Pievienot punktu}} zīmē punkta pozīciju, ātrumu un paātrinājumu, savienojuma vērtību un atstarpi pret laiku; {{ui:Saglabāt CSV}} un {{ui:Saglabāt grafiku}} tos ieraksta. Pēc {{ui:Palaist}} josla Pārvietošanās pa gaitu pārvieto montāžu uz jebkuru soli. Pētījuma iestatījumi saglabājas montāžas failā. Ātrums un paātrinājums nāk no ierakstītajām pozīcijām, tāpēc, ja asa virsotne parāda zemu, izmantojiet vairāk soļu. Skatiet [Pārbaudīt montāžu sadursmēm un kustībai](topic:check-assembly#a-motion-study).

**Virsmas un detaļas no fizikas**

- **Virsmu darba vide.** Izvēlieties {{ui:Virsmas}} lodziņā {{ui:Darba vide}} NURBS līknēm un virsmām blakus detaļai: {{ui:Līkne}}, {{ui:Pārejas virsma}}, {{ui:Izvilkums}}, {{ui:Saskaņot}} un {{ui:Zebra}}, ar nepārtrauktību (G0, G1 vai G2), kas mērīta uz precīzām virsmām, un malu, kas sliktāka par pieprasīto, uzskaitīta Problēmās ar Saskaņošanas labojumu. {{ui:Izlīdzināt}} mēra hidrolīniju lūzumus un līknuma lēcienus un pārbūvē nelīdzenās virsmas jūsu pielaides robežās. Virsmas saglabājas detaļas failā un nemaina detaļas elementus. Skatiet [Brīvas formas virsmas (NURBS)](topic:nurbs-surfaces).
- **Inženieris.** Izvēlieties {{ui:Inženieris}} darba vides pārslēgā, izvēlieties ģeneratoru un noklikšķiniet {{ui:Jauns}}: skripts izmēro detaļu pēc tā, ko tai jādara (sildīt, plūsmas, spiediens, materiāls, drukāšanas process), izmantojot mācību grāmatu formulas, un to izveido, tad atdod izmantotos skaitļus ar to avotiem, tās ražošanas pārbaudēm un failus analīzes rīkiem. Vienādas ievades dod vienādu detaļu jebkurā datorā. Ģenerators tiek saglabāts detaļā, un detaļas atvēršana nekad neizpilda skriptu. Skatiet [Detaļas no fizikas: ģeneratori](topic:engineer-generators) un [Rakstīt ģeneratoru](topic:write-a-generator).

**Skicēšana, rasējumi un izgatavošana**

- **Skice no fotogrāfijas.** {{ui:Elementi}} › {{ui:Vairāk}} › {{ui:Skice no fotogrāfijas…}} izseko plakanas detaļas attēlu uz vienkārša fona (kontūra un caurumi) vai zīmuļa zīmējumu līnijās, lokos un riņķos. Jūs norādāt vienu garumu, pārbaudāt priekšskatījumu un izveidojat skici. Skatiet [Skicēšanas pamati](topic:sketch-basics#a-sketch-from-a-photo).
- **Mērogs un sadalījums drukāšanai.** {{ui:Eksportēt}} › {{ui:Mērogs drukāšanai (STL vai 3MF)…}} mēro pa asīm, nemainot detaļu, piemēram, ar saraušanās pielaidi. {{ui:Eksportēt}} › {{ui:Sadalīt drukāšanai (zip ar daļām)…}} sagriež detaļu, kas par lielu jūsu galdam, numurētās daļās, kas savienotas ar tapām, atslēgām, astēm, tapu caurumiem vai magnētu ligzdām. Skatiet [Drukāt 3D](topic:print-3d).
- **Izvietotās loksnes uz G-kodu.** {{ui:Eksportēt}} › {{ui:Izvietotās loksnes uz G-kodu}} nolasa izvietotu DXF un izveido vienu programmu katrai loksnei caur jūsu izvēlēto postprocesoru: vispirms caurumi un izgriezumi, tad kontūras. Tas neplāno ieejas līnijas, griešanas secību vai kopīgās malas. Skatiet [Izvietot plakanas detaļas loksnēs](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Rasējumi, kas dara vairāk paši.** {{ui:Lapa}} › {{ui:Automātiski}} izvēlas mazāko A formāta lapu, kas ietilpina skatus lielākajā standarta mērogā līdz 1:1. {{ui:Izmērīt caurumus}} uzliek centra atzīmi katram caurumam, vienu norādi katram izmēram un pozīcijas no skata apakšējā kreisā stūra. Skatiet [Izveidot rasējumu](topic:drawing-pdf).

**Visās lietotnēs**

- **Valodas.** Lietotnes pieejamas 54 valodās. Tās, kas nav angļu, ir mašīntulkotas melnraksti, līdz tās izlasa dzimtā valoda.
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} izvēlas Ietīt (kā agrāk), 2 rindas vai 1 rindu; josla, kas neietilpst, ritina sāniski. PartCraft elementu lentē visvairāk lietotais instruments rādās liels, un varianti paslēpti aiz dalītas pogas.
- **Pievienojiet savu MI.** Studio ir centrs, lai pieslēgtu savu palīgu visām astoņām lietotnēm, ar lasīšanas, ieteikumu vai rediģēšanas atļauju katrai lietotnei. Savienots palīgs var izmērīt detaļu pēc teikuma, piemēram, kronšteins slodzei, parādīt savu darbu un visas pārbaudes un to izveidot; tas ziņo, ko nav pārbaudījis (spriegumu koncentrāciju, nogurumu, plastmasu lēnu deformāciju). Skatiet [Lietot PartCraft ar MI palīgu](topic:use-with-ai-assistants).

### Labots 0.8.1 versijā

- **Pilnekrāna kursora iesaldēšana.** Virs-kursora izvēle tagad ir ierobežota. Cēlonis ir mūsu labākais lasījums, un tas nav apstiprināts ar ziņotāju.
- **Valoda darbības laikā.** Studio un iepakotie izdevumi var mainīt valodu darbības laikā; agrāk bija tikai angļu. Tas vēl nav pārbaudīts katrā platformā: pastāstiet, ja valoda nemainās.

### Vēl nav šajā versijā

- Pievienot MI nav pabeigts: vienas pogas savienojums Studio iekšienē, mitinātais savienotājs pārlūka MI, jūsu pašu API atslēga Studio iekšienē un publicētā MCP pakotne nav solīti. Studio pats nav MI.
- Studio nav parakstīts ar kodu: Windows var brīdināt, un macOS prasa labo klikšķi, tad Atvērt. Skatiet [Problēmu novēršana](topic:troubleshooting).
- Pielaižu virknes joprojām ir vienā virzienā: skatiet [Pielaižu virknes](topic:tolerance-stackup).
- Pārējais uzskaitīts [Kas vēl nav izveidots](topic:not-built-yet).

Agrākās izmaiņas ir [Kas jauns 0.7 versijā](topic:whats-new-0-7).
