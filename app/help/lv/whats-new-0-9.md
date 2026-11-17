---
title: Kas jauns versijā 0.9
summary: PartCraft 0.9 pievieno noapaļojumus starp virsmām un biezuma piešķiršanu cietiem ķermeņiem, mezglus ar tūkstošiem detaļu, dokumentu glabātuvi ar revīzijām, Solid FEM papildinājumu spriegumu pārbaudei, desmit loka metodes, Lielbritānijas tērauda izmērus, Drukas posmu un sveķu drukas papildinājumus.
keywords: kas jauns, laidiena piezīmes, izmaiņu žurnāls, 0.9, noapaļojums starp virsmām, ripojoša bumbiņa, noapaļot vairākas malas, biezums, cietais ķermenis no virsmām, step čaula, iges cietais ķermenis, skenējuma noapaļojumi, liels mezgls, 20000 detaļu, dokumenti, glabātuve, izņemt, ievietot, revīzija, laidiens, kur izmantots, Rhino saite, grasshopper, 3dm, kursori, ražotnes grīda, darba rinda, solid fem, galīgie elementi, von mises, dabiskā frekvence, loka metodes, 3 punktu loks, Lielbritānijas tērauda profili, zilā grāmata, drukas posms, sveķi, goo, ctb, platforma, izklāt plakani, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, tiešsaistes analīze, rediģējot atjaunot, salūst, slodzes koeficients, nelineārs, plūstamība, plastiskā deformācija, kontakts, calculix, kustības pētījums, atstarpe, virsmas, nurbs, izlīdzināt, korpuss, zebra, inženieris, ģenerators, ģenerēts korpuss, skice no fotogrāfijas, mērogs drukāšanai, sadalīt drukāšanai, saraušanās, izvietotās lapas, g-code, rasējums, izmērīt caurumus, asistents, mcp, valodas, rīkjoslas rindas
from: 96d9fbfa
---

Šeit ir izmaiņas PartCraft 0.9 versijā salīdzinājumā ar 0.8.1. Brīvās formas virsmas tagad saslēdzas cietos ķermeņos, tūkstošiem detaļu lieli mezgli paliek lietojami, dokumentu glabātuve glabā revīzijas, un Solid FEM papildinājums pārbauda spriegumu detaļā. Katrs punkts norāda, kur to atrast.

## Jauns 0.9.1

- **Precīzs STEP eksports.** {{ui:Eksportēt}} › {{ui:STEP AP242 (precīzs cietais ķermenis)}} un {{ui:STEP AP214 (precīzs cietais ķermenis)}} tagad darbojas. Caurumi, izciļņi, noapaļojumi, konusi, sfēras un tori ir ierakstīti uz to patiesajām virsmām ar patiesiem riņķiem kā malām, lai cita CAD vai CAM programma varētu izvēlēties caurumu kā caurumu. Splainu malas, modelētie vītnes un importētie tīkli paliek plakanas facetes tajā pašā cietajā ķermenī. Skatīt [Eksportēšana drukāšanai, STEP un DXF](topic:export-files#for-other-cad-programs-step).
- **STEP ievadā, precīzs STEP izvadā.** STEP fails, ko atverat, saglabā savas plakanās virsmas, cilindrus, konusus, sfēras un torus, tāpēc {{ui:Eksportēt}} › {{ui:STEP AP242 (precīzs cietais ķermenis)}} ieraksta tos atpakaļ kā patiesas virsmas, nevis facetes: sija ar skrūvju caurumiem no piegādātāja iziet ar tām pašām virsmām, kādas tai bija, plus visu, ko tajā izgriezāt. Splainu, izvilktās un rotētās virsmas no faila paliek facetes, tāpat kā korpusi no STL, OBJ un 3MF. Atveriet STEP failu vēlreiz detaļai, kas saglabāta iepriekš. Skatīt [Atvērt STEP failu un veidot uz tā](topic:import-step).
- **Patiesi riņķi plakanās virsmas DXF.** {{ui:Eksportēt}} › {{ui:DXF no skices vai plakanas virsmas}} ar izvēlētu plakanu virsmu tagad ieraksta apaļos caurumus kā riņķus ar paša cauruma centru un rādiusu lāzera, plazmas vai ūdensstrūklas galdam. Citas apaļas malas joprojām ir facetes.
- **Precīzs STEP ražotnei.** {{ui:Ražošana}} sadaļā {{ui:Precīzs STEP (darba koordinātes)}} ieraksta detaļu ar tās sākumpunktu iestatījuma darba sākumpunktā un Z pa instrumenta asi, tajās koordinātēs, ko izmanto G-kods. Skatīt [Veidot apstrādes ceļus un G-kodu](topic:manufacture#exact-step-for-the-shop).

## Jauns

### Virsmas un cietie ķermeņi

- **Noapaļojums starp virsmām.** Izvēlieties {{ui:Virsmas}} darba vides lodziņā {{ui:Darba vide}}, tad {{ui:Noapaļojums starp virsmām}}. Izvēlieties divas viena cietā ķermeņa virsmas, ierakstiet rādiusu (un {{ui:Rādiuss galā (mm, 0 = tāds pats)}} rādiusam, kas mainās pa malu). Rezultāta rindā teikts, cik tālu noapaļojums ir no ideālās ripojošās bumbiņas, un rādiuss, kas neiederas, tiek noraidīts ar nosaukto virsmu. {{ui:Noapaļot vairākas malas}} noapaļo daudzas malas vienā solī; atzīmējiet {{ui:Stūri (sfēriska daļa, kur saiet trīs)}}, lai iegūtu sfēras stūri, kur saiet trīs noapaļotu plakanu virsmu malas. Skatīt [Brīvās formas virsmas (NURBS)](topic:nurbs-surfaces).
- **Biezums cietā ķermenī.** {{ui:Piešķirt biezumu un izveidot cietķermeni}} tajā pašā darba vidē dod virsmai biezumu; {{ui:Otra puse}} aug otrā virzienā. Kroka vai paššķērsošanās tiek noraidīta, un virsma un vieta ir nosauktas.
- **Cietie ķermeņi no virsmām.** Apgrieztas virsmas var savienot ar apvienošanu, atņemšanu un krustošanu un ievietot detaļā kā vienu atsaukšanas soli. STEP ieraksta cietu ķermeni kā vienu slēgtu čaulu, un IGES kā vienu cietu ķermeni; abi tiek nolasīti atpakaļ kā cietie ķermeņi. Ja virsmas nesakrīt pa malu, fails saņem atsevišķas virsmas, un statusa rinda to saka. Cietos ķermeņus var izveidot arī mezglu redaktorā; skatīt [Mezglu redaktors](topic:nodes).
- **Noapaļojumi un mainīga rādiusa noapaļojumi skenējumos.** Kad pieskaņojat virsmas skenējumam, arī malu noapaļojumi (tori) un mainīga rādiusa noapaļojumi gar diezgan taisnu malu tiek meklēti un uzskaitīti ar savu rādiusu. Pārbaudīts tikai uz izveidotiem skenējumiem.

### Mezgli, dokumenti un saites

- **Lieli mezgli.** Detaļas, kas ir kopijas, dala vienu tīklu, un {{ui:Skati}} › {{ui:Vienkāršotais attēlojums}} zīmē kastes, lai skats kustētos (tas ieslēdzas pats ļoti lieliem mezgliem; izvēle un savienojumi joprojām izmanto īstās detaļas). Detaļu koks rāda savas pirmās rindas un pogu {{ui:Rādīt vēl 700}} pārējām. Mezglu failos var būt līdz 50 000 gadījumu un 100 000 savienojumu. Skatīt [Veidot mezglu](topic:build-assembly).
- **Dokumenti.** {{ui:Dokumenti…}} grupā **Fails** atver dialogu virs projekta mapes: izņemt un ievietot atpakaļ, revīziju burti, stāvokļi (darbā, pārskatīšanai, izlaists, novecojis), vēsture, kur izmantots, un materiālu saraksts. Skatīt [Dokumenti un revīzijas (glabātuve)](topic:documents-walkthrough).
- **Tiešā Rhino saite.** Viens skripts, `cadcraft_link.py`, novēro Rhino vai Grasshopper dokumentu un nosūta PartCraft tikai to, kas mainījies; tur importētais elements pārbūvējas uz jauno formu. Tā ir vienvirziena un prasa Studio. Skatīt [Tiešā .3dm saite](topic:live-3dm-link).
- **Redzēt citu kursorus.** Kopīgā sesijā katra persona kursors rādās ar savu vārdu un elementu, ko tā ir atlasījusi. Skatīt [Strādāt tiešsaistē ar citiem](topic:work-live).
- **Ražotnes grīda.** Ieslēdziet papildinājumu Ražotnes grīda sadaļā {{ui:Iestatījumi}} › {{ui:Papildinājumi}}. Pēc programmas nosūtīšanas sadaļā {{ui:Ražošana}} tās cilne var {{ui:Pievienot ražotnes darbu rindai}} vai {{ui:Saglabāt kā darba failu}}. Tā nekad nenosūta un nesāk mašīnu.

### Analīze un detaļas

- **Solid FEM papildinājums.** Ieslēdziet {{ui:Solid FEM}} sadaļā {{ui:Iestatījumi}} › {{ui:Papildinājumi}} (tas ir izslēgts, kamēr to neieslēdzat), un labajā panelī parādās cilne {{ui:Solid FEM}}. {{ui:Sadalīt detaļu tīklā}}, izvēlieties fiksētas virsmas un slodzes 3D skatā, {{ui:Atrisināt}}, un zīmējiet pārvietojumu, Mīzesa spriegumu vai formas modeli ar {{ui:Rādīt uz modeļa}}. Skatīt [Solid FEM: sprieguma pārbaude](topic:solid-fem-check).
- **Loks skicēs, desmit veidos.** Bultiņa blakus {{ui:Loks}} skices rīkjoslā uzskaita: 3 punkti, Sākums-Centrs-Beigas, Sākums-Centrs-Leņķis, Sākums-Centrs-Garums, Sākums-Beigas-Leņķis, Sākums-Beigas-Virziens, Sākums-Beigas-Rādiuss, Centrs-Sākums-Beigas, Centrs-Sākums-Leņķis, Centrs-Sākums-Garums un Turpināt. Skatīt [Zīmēt loku ar desmit metodēm](topic:sketch-arc-methods).
- **Lielbritānijas tērauda izmēri.** Metinātās konstrukcijas var izmantot 976 Lielbritānijas profilus (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); ierakstiet izmēru, piemēram, `305x165x40 UB`. Skatīt [Konstrukcijas elementi](topic:structural-members).

### Drukāšana

- **Drukas posms.** Poga {{ui:Drukas posms}} rīkjoslā (papildinājums 3D drukāšana, pēc noklusējuma ieslēgts) novieto jūsu detaļas ķermeņus uz punktētas platformas: {{ui:Izlīdzināt}}, {{ui:Pagriezt par 90°}}, {{ui:Izvietot uz platformas}}, {{ui:Pielāgot visu platformai}}, {{ui:Priekšskatīt slāņus}}, tad {{ui:Sūtīt uz 3D printeri}} pa USB, Klipper (Moonraker), OctoPrint vai PrusaLink. Nekas netiek nosūtīts, kamēr neapstiprināt, un jūsu detaļa nekad nemainās. STL vai 3MF failam skatīt [Sagatavot detaļu 3D drukai](topic:print-3d).
- **Sveķu drukāšana.** Papildinājumi sadaļā {{ui:Iestatījumi}} › {{ui:Papildinājumi}}, visi izslēgti, kamēr tos neieslēdzat: sveķu griezējs, ekspozīcijas tests un failu formāti Elegoo GOO, SL1, Chitubox CBDDLP/CTB un Anycubic. Griešana notiek atsevišķā pavedienā, tāpēc lapa paliek atsaucīga.

## Visās lietotnēs

- Katrs norādes padoms ir Bootstrap rīkpadoms.
- Sākuma padomam ir aizvēršanas poga; tas paliek aizvērts.
- Paneļa cilņu rinda, kas neietilpst, ritina sāniski, nevis tiek nogriezta.
- Pārlūkprogrammas cilne rāda atvērtā dokumenta nosaukumu pirms PartCraft | CadCraft.
- {{ui:Iestatījumi}} rāda darba vides {{ui:Izkārtojums}} kā nolaižamo izvēlni, un valodas lodziņš uzskaita katru valodu, ko versija atbalsta.
- Svars un temperatūra ir mērvienību veidi iestatījumos {{ui:Mērvienības}}.

## Labots

- Skices loka izvēlne tagad uzskaita katru metodi.
- Papildinājumu rīkjosla un pārlūkprogrammas cilnes nosaukums tika labots 2026-11-09.

## Godīgi ierobežojumi

- Precīzais STEP tika nolasīts atpakaļ OpenCascade (derīgi cietie ķermeņi, tilpumi vienādi ar rokām aprēķinātajiem). To vēl nav atvērusi katra CAD vai CAM programma, un mezgls netiek ierakstīts kā precīzs STEP.
- Nekas nav drukāts uz reāla printera. Griezējs, G-kods un sveķu faili tika nolasīti atpakaļ ar mūsu pašu programmām vai aizvietojošu printeri; neviens sveķu formāts nav ielādēts printerī, un printeru izmēri un ekspozīcijas ir sākumpunkti.
- Solid FEM ir lineārs, izotrops un elastīgs, viens materiāls uz detaļu, bez kontakta, plūstamības vai izliekšanās. Spriegums fiksētās virsmās un asos stūros ir atkarīgs no tīkla. Tas ir pārbaudes palīglīdzeklis, ko inženieris nav pārskatījis.
- Lielu mezglu laiks nāk no servera bez GPU; pilna detalizācija ar 20 000 detaļām joprojām prasa sekundes.
- Noapaļojumi darbojas uz virsmu pāriem; nav vispārīga virsotņu maisījuma un nav noapaļojuma starp virsmām, kas nesaskaras.
- Rhino saite nekad nav darbojusies īstā Rhino vai Grasshopper. Dokumenti tika izmēģināti ar divām programmām vienā mapē, nevis ar diviem cilvēkiem tīklā.
- Virsmu pieskaņošana reālam skenējumam nav manuāli pārbaudīta. Valodas, kas nav angļu, ir mašīnas melnraksti.
- Windows instalētāji nav koda parakstīti, un macOS diska attēls nav notariāls. Skatīt [Problēmu novēršana](topic:troubleshooting).

Iepriekšējās izmaiņas ir aprakstītas [Kas jauns 0.7](topic:whats-new-0-7).

## Iepriekš: 0.8 un 0.8.1

Šeit ir izmaiņas PartCraft 0.8 un 0.8.1 versijā salīdzinājumā ar 0.7. Simulācija atbild, kamēr rediģējat, un norāda, kas pirmais salūst; mezgliem ir kustības pētījumi, un jaunas darba vides veido brīvās formas virsmas un detaļas, kas izmērītas pēc fizikas. 0.8.1 ir neliels labojumu laidiens.

### Jauns

**Simulācija**

- **Atjaunot, kamēr rediģēju.** Atzīmējiet {{ui:Atjaunot, kamēr rediģēju}} bloku {{ui:Atrisināt}}, un atbildes seko jūsu izmaiņām. Mainiet izmēru, slodzi vai materiālu, un ātrā atbilde, kas veidota ar elementiem, kas četras reizes lielāki, parādās uzreiz; kad apstājaties apmēram uz sekundi, pētījuma pašas precīzākā atbilde aizvieto to. Rezultāti norāda, kuru no tām skatāties. Uz tērauda konsoles ātrā atbilde bija 1 % robežās pārvietojumā un ap 4 % spriegumā no precīzākās. Skatīt [Pārbaudīt spriegumu un pārvietojumu](topic:simulation#update-while-you-edit-live).
- **Kas pirmais salūst.** Statiskam vai izliekšanās pētījumam {{ui:Kas pirmais salūst?}} blokā **Salauzt to** mērogo slodzes, līdz detaļa padodas. Tā uzskaita, sākot ar sliktāko, slodzes koeficientu līdz pirmajai plūstamībai (ar sarkanu marķieri, kur spriegums sasniedz maksimumu) un slodzes koeficientu līdz izliekšanās. Koeficients zem 1 nozīmē, ka detaļa jau padodas ielādēta, un Problēmas rāda kļūdu. Koeficienti nāk no lineāra pētījuma, tāpēc tie ir tikpat labi, cik pats pētījums. Skatīt [Pārbaudīt spriegumu un pārvietojumu](topic:simulation#find-out-what-breaks-first-break-it).
- **Plūstamība un kontakts.** Divi papildu pētījumu veidi: nelineārs, kur materiāls seko savai taisnei līdz plūstamības spriegumam un tad plakanākam slīpumam, ar attēlotu plastisko deformāciju, un kontakta, kur atsevišķas daļas spiež viena uz otru (bez berzes) vai paliek sastingušas (saistītas). Slodzes solis, kas nevar nostabilizēties, vai daļas, kas iegrimst pārāk dziļi viena otrā, parādās Problēmu panelī. Berze, lieli slīdējumi, lielas rotācijas, lielas deformācijas un nogurums nav atrisināti. Skatīt [Pārbaudīt spriegumu un pārvietojumu](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX fails.** {{ui:Eksportēt}} › {{ui:CalculiX fails (.inp)}} saglabā pētījumu CalculiX, atsevišķai programmai, kuru instalējat un palaižat paši; {{ui:Eksportēt}} › {{ui:CalculiX rezultāti (.frd)}} nolasa tās rezultātu failu atpakaļ uz to pašu tīklu. PartCraft nekad neiedarbina šo programmu, un tas to saka, ja detaļa mainījās kopš faila saglabāšanas.

**Mezgli**

- **Kustības pētījumi.** {{ui:Mezgls}} › {{ui:Kustība}} vada viena savienojuma vērtību pār jums dotu laiku (vienmērīgs ātrums, izlīdzināts, sinusoidāls vai uz priekšu un atpakaļ), novieto mezglu katrā solī ar tā savienojumiem un slēgtām cilpām un ziņo, kas saduras un cik tuvu detaļas nonāk. {{ui:Pievienot punktu}} zīmē punkta pozīciju, ātrumu un paātrinājumu, savienojuma vērtību un atstarpi pret laiku; {{ui:Saglabāt CSV}} un {{ui:Saglabāt grafiku}} tos ieraksta. Pēc {{ui:Palaist}} solis pa palaišanas joslu pārvieto mezglu uz jebkuru soli. Pētījuma iestatījumi tiek saglabāti mezgla failā. Ātrums un paātrinājums nāk no ierakstītajām pozīcijām, tāpēc izmantojiet vairāk soļu, ja asa virsotne izskatās zema. Skatīt [Pārbaudīt mezglu sadursmēm un kustībai](topic:check-assembly#a-motion-study).

**Virsmas un detaļas no fizikas**

- **Virsmu darba vide.** Izvēlieties {{ui:Virsmas}} lodziņā {{ui:Darba vide}}, lai redzētu NURBS līknes un virsmas līdzās detaļai: {{ui:Līkne}}, {{ui:Pārejas virsma}}, {{ui:Izvilkums}}, {{ui:Saskaņot}} un {{ui:Zebra}}, ar nepārtrauktību (G0, G1 vai G2), kas mērīta uz precīzām virsmām, un malu, kas ir sliktāka nekā prasījāt, uzskaitītu Problēmās ar Saskaņošanas labojumu. {{ui:Izlīdzināt}} mēra korpusa līnijas, meklējot pārlūzumus un līknuma lēcienus, un pārbūvē nelīdzenās tajā jūsu pielaidē. Virsmas tiek saglabātas detaļas failā un nemaina detaļas elementus. Skatīt [Brīvās formas virsmas (NURBS)](topic:nurbs-surfaces).
- **Inženiera darba vide.** Izvēlieties {{ui:Inženieris}} darba vides pārslēdzējā, izvēlieties ģeneratoru un noklikšķiniet uz {{ui:Jauns}}: skripts izmēra detaļu pēc tā, ko tai jādara (sildīt, lai pārvietotu, plūsmas, spiediens, materiāls, drukāšanas process), ar mācību grāmatu formulām un to uzbūvē, tad atdod izmantotos skaitļus ar to avotiem, tās ražošanas pārbaudes un failus analīzes rīkiem. Vieni un tie paši ievadi dod to pašu detaļu jebkurā datorā. Ģenerators tiek glabāts detaļā, un detaļas atvēršana nekad neiedarbina skriptu. Skatīt [Detaļas no fizikas: ģeneratori](topic:engineer-generators) un [Rakstīt ģeneratoru](topic:write-a-generator).

**Skicēšana, rasējumi un ražošana**

- **Skice no fotogrāfijas.** {{ui:Elementi}} › {{ui:Vairāk}} › {{ui:Skice no fotogrāfijas…}} izseko plakanas detaļas attēlu uz vienkārša fona (kontūra un caurumi) vai zīmuļa zīmējumu līnijās, lokos un riņķos. Jūs dodat vienu garumu, pārbaudāt priekšskatījumu un izveidojat skici. Skatīt [Skicēšanas pamati](topic:sketch-basics#a-sketch-from-a-photo).
- **Mērogs un sadalīšana drukāšanai.** {{ui:Eksportēt}} › {{ui:Mērogs drukāšanai (STL vai 3MF)…}} mēro pa asīm, nemainot detaļu, piemēram, ar saraušanās rezervi. {{ui:Eksportēt}} › {{ui:Sadalīt drukāšanai (zip ar daļām)…}} sadala detaļu, kas par lielu jūsu platformai, numurētās daļās, kas savienotas ar tapām, atslēgām, astes savienojumiem, tapu caurumiem vai magnētu ieliktņiem. Skatīt [Drukāt 3D](topic:print-3d).
- **Izvietotās loksnes uz G-kodu.** {{ui:Eksportēt}} › {{ui:Izvietotās loksnes uz G-kodu}} nolasa izvietotu DXF un izveido vienu programmu katrai loksnei caur izvēlēto postprocesoru: vispirms caurumi un izgriezumi, tad kontūras. Tas neplāno ieejas līnijas, griešanas secību vai kopīgās malas. Skatīt [Izvietot plakanas detaļas uz lokšņu](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Zīmējumi, kas paveic vairāk paši.** {{ui:Lapa}} › {{ui:Automātiski}} izvēlas mazāko A formāta lapu, kas satur skatus lielākajā standarta mērogā līdz 1:1. {{ui:Izmērīt caurumus}} uzliek centra atzīmi katram caurumam, vienu izsaukumu katram izmēram un pozīcijas no skata apakšējā kreisā stūra. Skatīt [Izveidot rasējumu](topic:drawing-pdf).

**Visās lietotnēs**

- **Valodas.** Lietotnes ir 54 valodās. Tās, kas ir pāri angļu valodai, ir mašīnas melnraksti, kamēr dzimtā valoda tos neizlasa.
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} izvēlas Ietīt (kā iepriekš), 2 rindas vai 1 rindu; josla, kas neietilpst, ritina sāniski. PartCraft elementu lentes rīkjosla rāda visvairāk lietoto rīku lielu un paslēpj variantus aiz sadalītas pogas.
- **Pievienojiet savu AI.** Studio ir centrs, kur pievienot savu asistentu visām astoņām lietotnēm, katrai ar lasīšanas, ieteikuma vai rediģēšanas atļauju. Pievienots asistents var izmērīt detaļu pēc teikuma, piemēram, kronšteins slodzei, parādīt savu darbu un visas pārbaudes un to izveidot; tas ziņo, ko nav pārbaudījis (spriegumu koncentrāciju, nogurumu, plastmasu rāpšanos). Skatīt [Lietot PartCraft ar AI asistentu](topic:use-with-ai-assistants).

### Labots 0.8.1

- **Pilnekrāna kursora iesaldēšana.** Rādītāja izvēle tagad ir ierobežota. Cēlonis ir mūsu labākais skaidrojums, un to nav apstiprinājusi persona, kas ziņoja.
- **Valoda izpildes laikā.** Studio un iepakotie izdevumi var mainīt valodu darbības laikā; agrāk tie bija tikai angļu valodā. Tas vēl nav pārbaudīts uz katras platformas: paziņojiet, ja valoda nemainās.

### Vēl nav šajā versijā

- Pievienot savu AI vēl nav pabeigts: vienas pieskaršanas savienojums Studio iekšienē, mitinātais konektors pārlūkprogrammas AI, jūsu pašu API atslēga Studio iekšienē un publicētā MCP pakotne nav apsolītas. Studio pats AI nesatur.
- Studio nav koda parakstīts: Windows var brīdināt, un macOS prasa peles labo pogu, tad {{ui:Atvērt}}. Skatīt [Problēmu novēršana](topic:troubleshooting).
- Tolerances kaudzes joprojām ir vienvirziena: skatīt [Tolerances aprēķini](topic:tolerance-stackup).
- Pārējais ir uzskaitīts [Kas vēl nav izveidots](topic:not-built-yet).

Iepriekšējās izmaiņas ir aprakstītas [Kas jauns 0.7](topic:whats-new-0-7).
