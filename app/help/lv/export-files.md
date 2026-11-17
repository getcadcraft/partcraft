---
title: Eksportēšana drukāšanai, STEP un DXF
summary: Eksportējiet detaļu kā STL vai 3MF 3D drukāšanai, kā precīzu STEP cietu ķermeni citām CAD un CAM programmām un skici vai plakanu virsmu kā DXF lāzera un ūdensstrūklas griešanai.
keywords: eksportēt, saglabāt kā, ifc, bim, īpašību kopas, stl, 3mf, 3d drukāšana, slicer, step, stp, precīzs step, b-rep, ap242, ap214, cam, mašīnapstrāde, frēzēšana, dxf, lāzers, ūdensstrūkla, cnc, plakana izvērse, profils, tīkls, facetēts
from: e1de71d5
---

Eksporti ir kopijas citos formātos. Saglabājiet arī failu `.partcraft.json`: tas ir vienīgais fails, ko PartCraft var atkal atvērt un rediģēt.

Visi eksporti attiecas uz detaļu, kas redzama ekrānā, milimetros. Mezglā STL, 3MF, STEP un Rasējums (PDF) eksportē visu mezglu: skatiet [Detaļu saraksts, izvērstie skati un kustīgās detaļas](topic:assembly-bom-explode). Ja cietā ķermeņa vēl nav: "Vēl nav cieta ķermeņa, ko eksportēt."

## 3D drukāšanai: STL vai 3MF

1. Pēc izvēles: gludām apaļām virsmām noklikšķiniet tukšā vietā, lai nekas nav atlasīts, un labajā panelī iestatiet **Līknes** uz **Smalks (128 uz apli)** vai **Ļoti smalks (256 uz apli)**. STL un 3MF vienmēr sastāv no trijstūriem.
2. Izvēlieties {{ui:Eksportēt}}, tad {{ui:STL 3D drukai}} vai {{ui:3MF 3D drukai}}.
3. Fails tiek lejupielādēts. Statusa josla rāda, piemēram: "Eksportēts Part1.stl (binārs, mm, Z augšup, 1536 trijstūri)."

Abi formāti ir **Z augšup**, kā to sagaida printeri un slicer programmas. PartCraft pati darbojas ar Y augšup, tāpēc eksports pagriež detaļu: tas, kas PartCraft ir vērsts augšup (perpendikulāri plaknei Top), slicer programmā ir vērsts augšup, un detaļa, kas skicēta plaknē Top, guļ plakani uz platformas. Ja vajag, galīgo orientāciju iestatiet slicer programmā.

3MF ir jaunāks, mazāks formāts, ko slicer programmas nolasa kopā ar mērvienībām. Izmantojiet STL, ja programma nepieņem 3MF.

Lai vispirms pārbaudītu, vai detaļa ir slēgta, ietilpst printera platformā un balstās uz plakanas virsmas, izmantojiet {{ui:Eksportēt}} › {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}}: skatiet [Sagatavojiet detaļu 3D drukāšanai](topic:print-3d).

## Citām CAD programmām: STEP

Izvēlieties {{ui:Eksportēt}}, tad {{ui:STEP AP242 (precīzs cietais ķermenis)}}. Tas ieraksta detaļu kā vienu precīzu cietu ķermeni milimetros, pagrieztu Z augšup. Apaļās virsmas tiek ierakstītas kā īsti cilindri, konusi, sfēras un tori, ar īstiem riņķiem kā malām, lai otra programma var atpazīt caurumu kā caurumu. Ķermenis, kas atvērts no STEP faila, saglabā šī faila plakanās virsmas, cilindrus, konusus, sfēras un torus, tāpēc arī tie tiek eksportēti precīzi. Virsmas bez šādas formas (splaina mala, modelēts vītne, ķermenis no STL, OBJ vai 3MF tīkla, STEP faila splaina, izvilktas un rotētas virsmas) paliek plakanas facetes tajā pašā cietajā ķermenī, un statusa josla saka, cik to ir. Statusa josla saka, piemēram: "Eksportēts Flange.step (AP242, precīzs cietais ķermenis, mm, Z augšup): 14 virsmas to īstajās formās (10 cilindriskas, 1 konusveida, 0 sfēriskas, 0 toriskas), 0 pielāgotas malu līknes." Tajā ir tikai cietais ķermenis: nav vēstures, skiču vai rasējuma. Ja otra programma nolasa tikai AP214, izvēlieties {{ui:STEP AP214 (precīzs cietais ķermenis)}}: tas pats cietais ķermenis tajā vecākajā shēmā.

Kas ir precīzs un kas nav:

- Plakanas virsmas, cilindri (caurumi, izciļņi, noapaļojumi uz taisnām malām), konusi (uzgriezumi, slīpumi), sfēras un tori ir precīzi, tāpat kā to taisnās, apļveida un elipsveida malas. Iestatījums **Līknes** tās nemaina.
- Kur krustojas divas apaļas virsmas (caurums, urbts caur vārpstu), mala ir gluda līkne, kas pielāgota abām virsmām ar precizitāti 0.00001 mm; "pielāgotās malu līknes" tās skaita.
- Slēgta dobums detaļas iekšpusē tiek ierakstīts kā cietā ķermeņa tukšums. Vairāki atsevišķi ķermeņi tiek ierakstīti kā vairāki cietie ķermeņi.
- Mezgls vēl netiek ierakstīts kā precīzs STEP: eksportējiet katru detaļu.

Tas ir pārbaudīts, nolasot failus atpakaļ OpenCascade, kas ziņo par derīgiem cietajiem ķermeņiem ar tilpumiem, kas aprēķināti manuāli. Tas vēl nav atvērts katrā CAD vai CAM programmā. Ja kāda programma noraida failu, {{ui:STEP (facetēts, tīkla kodols)}} ieraksta to pašu formu kā plakanas virsmas (PartCraft asīs, Y augšup). Lūdzu, ziņojiet par to caur {{ui:Palīdzība}} › {{ui:Ziņot par problēmu}}.

Mašīnapstrādei darbvieta Manufacture ieraksta arī precīzu cietu ķermeni iestatījuma pašās darba koordinātēs: skatiet [Veidojiet instrumentu trajektorijas un G-kodu](topic:manufacture#exact-step-for-the-shop).

## BIM programmām: IFC ar katru īpašību

Izvēlieties {{ui:Eksportēt}}, tad {{ui:IFC 4 (ar katru īpašību)}}. Tas ieraksta detaļu kā IFC 4 elementu ēku un iekārtu modeļiem, tās formu kā trijstūrus (Z augšup, milimetros) un to, ko PartCraft par to zina, kā īpašību kopas:

| Īpašību kopa | Satur |
|---|---|
| **PartCraft_Part** | Nosaukumu, materiālu un tā blīvumu, aktīvo konfigurāciju, ķermeņu skaitu; mezglā arī detaļas numuru un aprakstu |
| **PartCraft_Parameters** | Katru detaļas parametru ar tā vērtību; formulas izteiksme un piezīme ir īpašības aprakstā |
| **PartCraft_TitleBlock** | Rasējuma titulblokā aizpildītos laukus (nosaukums, rasējuma numurs, revīzija, uzņēmums, sastādīja, pārbaudīja un apstiprināja, datums, apdare, vispārīgā pielaide) un lapas izmēru |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Tilpumu, virsmas laukumu, masu (ar materiālu) un kopējo izmēru |

Materiāls tiek pievienots kā IFC materiāls, un rasējuma numurs ir elementa birka. Mezglā katra detaļa tiek ierakstīta vienreiz kā tips, kas satur tās īpašības, un katra kopija tiek novietota tur, kur to novieto mezgls, ar savām vērtībām **PartCraft_Instance**: tās nosaukumu, tās pozīcijas numuru materiālu sarakstā un to, vai tā ir pamatā nostiprinātā detaļa.

## Lāzera, ūdensstrūklas vai CNC profiliem: DXF

Divi DXF veidi, abi versijā R12, ko atver katra CAD un CAM programma:

### Skice

1. Atlasiet skici vēsturē (vai atveriet to).
2. Izvēlieties {{ui:Eksportēt}}, tad {{ui:DXF no skices vai plakanas virsmas}}. (Skices labajā panelī ir arī {{ui:Eksportēt kā DXF}}.)

Iegūsiet `<part> - <sketch>.dxf` skices pašās koordinātēs: līnijas, īstus lokus un riņķus slānī **PROFILE**, konstrukcijas ģeometriju slānī **CONSTRUCTION** un brīvus punktus slānī **POINTS**.

### Cietā ķermeņa plakana virsma

1. Noklikšķiniet uz plakanas virsmas skatā (piemēram, plāksnes augšdaļa ar caurumiem).
2. Izvēlieties {{ui:Eksportēt virsmu kā DXF}} labajā panelī vai {{ui:Eksportēt}}, tad {{ui:DXF no skices vai plakanas virsmas}}.

Iegūsiet `<part> - face.dxf`: virsmas kontūru un katru caurumu tajā. Apaļais caurums (viss aplis, kur cilindrs satiekas ar virsmu: urbts caurums vai caurums atvērtā STEP failā) tiek ierakstīts kā īsts aplis ar paša cauruma centru un rādiusu. Visas pārējās kontūras ir slēgtas polilīnijas, un to apaļās malas (noapaļojumu stūri, spraugas, lokus) ir to facetes, tāpēc, ja griezējs tās seko cieši, vispirms iestatiet **Līknes** uz Smalks. Statusa josla saka, cik ir kontūru, cik no tām ir īsti riņķi un cik liels ir virsmas laukums.

Ja nav atlasīta ne skice, ne plakana virsma: "Atveriet vai atlasiet skici, vai izvēlieties plakanu virsmu, lai eksportētu DXF."

## Rasējums

PDF rasējumam ir sava pamācība: [Izveidojiet rasējuma lapu](topic:drawing-pdf).

## Formāti, kas nav pieejami

glTF, OBJ, IGES un Parasolid šajā versijā netiek eksportēti. DWG tiek rakstīts tikai variantu paketē kā rasējuma lapa: skatiet [Izveidojiet variantu paketi no savām konfigurācijām](topic:variant-pack). Skatiet [Failu formāti](topic:file-formats).
