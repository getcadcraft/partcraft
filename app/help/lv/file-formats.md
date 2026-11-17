---
title: Failu formāti
summary: Katrs fails, ko PartCraft nolasa un raksta, ar paplašinājumiem, vienībām, asīm un to, ko katrs saglabā vai zaudē.
keywords: formāti, failu tipi, paplašinājumi, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, tīkls, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, vienības, z augšup
from: 4d0ecbee
---

| Formāts | Paplašinājums | Atvērt | Saglabāt vai eksportēt | Vienības | Augšējā ass | Saglabā |
|---|---|---|---|---|---|---|
| PartCraft detaļa | `.partcraft.json` | Jā | {{ui:Saglabāt}} | mm | Y | Visu vēsturi: skices, sakarības, izmērus, funkcijas, apturēšanu, atgriešanu, līkņu iestatījumu, rasējuma iestatījumus un GD&T, STEP tekstu, kas importēts agrākā versijā |
| PartCraft mezgls | `.partcraft-asm.json` | Jā | {{ui:Saglabāt}} mezglā | mm | Y | Katru detaļu (iegultu), kopijas un to pozīcijas, savienojumus |
| STL (bināra vai teksta) | `.stl` | Jā, kā cietais ķermenis: [Atvērt STL, OBJ vai 3MF](topic:open-meshes) | {{ui:STL 3D drukai}} | mm (jautā atverot) | Z | Tikai cietā ķermeņa trijstūrus |
| 3MF | `.3mf` | Jā, kā cietais ķermenis | {{ui:3MF 3D drukai}} | mm (norādīts failā) | Z | Cietais ķermenis kā vienu tīkla objektu |
| OBJ | `.obj` | Jā, kā cietais ķermenis (tikai virsmas) | Nē | jautā atverot | Z vai Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Jā, kā cietais ķermenis, nolasīts kā trijstūri (izliektas virsmas attēlotas kā facetes; faila plakanās virsmas, cilindri, konusi, sfēras un tori tiek saglabāti precīzam eksportam): [Atvērt STEP failu](topic:import-step) | | mm (no faila vienības) | Z vai Y, ja tā norādīts | Cietos ķermeņus un virsmu ķermeņus, mezglus ar katru detaļu savā vietā; bez krāsām, nosaukumiem, mezgla koka vai PMI |
| `.3dm` | `.3dm` | Jā, kā viens cietais ķermenis no tā tīkliem un virsmām (saglabātie renderēšanas tīkli, citādi tesselēti): [Atvērt .3dm modeli](topic:open-3dm-files) | | No faila vienības | Z vai Y, ja tā norādīts | Tīklus, polivirsmas, izvilkumus un bloku novietojumus kā vienu ķermeni; bez līknēm, krāsām, slāņiem vai nosaukumiem |
| STEP AP242, precīzs | `.step` | | {{ui:STEP AP242 (precīzs cietais ķermenis)}} | mm | Z | Viens precīzs cietais ķermenis: plakanas virsmas, cilindri, konusi, sfēras un tori to īstajās formās, īsti riņķi un taisnes kā malas; splaina sāni, modelēti vītnes, ķermeņi no tīkla failiem un STEP faila splaina virsmas paliek facetes. STEP, ko izmantot citām CAD un CAM programmām |
| STEP AP214, precīzs | `.step` | | {{ui:STEP AP214 (precīzs cietais ķermenis)}} | mm | Z | Tas pats precīzais cietais ķermenis vecākajā AP214 shēmā, programmām, kas nolasa tikai to |
| STEP AP242, facetēts | `.step` | | {{ui:STEP (facetēts, tīkla kodols)}} | mm | Y | Slēgts cietais ķermenis ar plakanām virsmām: apaļas virsmas kā facetes. Programmai, kas noraida precīzo failu |
| STEP AP214, facetēts | `.step` | | {{ui:STEP AP214 (facetēts, tīkla kodols)}} | mm | Y | Tas pats cietais ķermenis vecākajā AP214 shēmā, programmām, kas nolasa tikai to |
| USD pakotne | `.usdz` | Nē | {{ui:USD pakotne (.usdz)}} | m | Z | Cietais ķermenis ar tā materiālu, tilpumu un masu; mezgls ar katru detaļu vienreiz un visām kopijām novietotām: [Eksportēt kā USD](topic:usd) |
| IFC 4 | `.ifc` | Nē | {{ui:IFC 4 (ar katru īpašību)}} | mm | Z | Forma kā trijstūri, materiāls, katrs parametrs, titulblokā, daudzumi; mezgla detaļas kā tipi un kopijas novietotas |
| DXF R12, skice | `.dxf` | Nē | {{ui:DXF no skices vai plakanas virsmas}} ar atlasītu skici | mm | Skices pašas x, y | Līnijas, īstie loki un riņķi, punkti; slāņi PROFILE, CONSTRUCTION, POINTS |
| DXF R12, virsma | `.dxf` | Nē | {{ui:DXF no skices vai plakanas virsmas}} ar izvēlētu plakanu virsmu | mm | Virsmas pašas x, y | Virsmas kontūras: apaļi caurumi kā īsti riņķi, pārējais kā slēgtas polilīnijas (apaļās malas kā facetes) |
| PDF rasējums | `.pdf` | Nē | {{ui:Rasējums (PDF): skati, griezums, detaļskats, GD&T}} | mm A3 lapā | | Priekšējais, augšējais, labais, izometriskais, griezuma un detaļskati, zīmēti no facetēm, neredzamas līnijas, kopējie izmēri, GD&T simboli, titulblokā |

## PartCraft faili

Abi ir vienkāršs teksts (JSON). Cietais ķermenis nekad netiek saglabāts: PartCraft to pārbūvē no vēstures, tāpēc faili paliek mazi un vienmēr atbilst vēsturei.

- Katram failam ir versijas numurs. Šī versija raksta katru detaļas failu ar zemāko versiju, kas satur tā izmantoto (no 2 līdz 5; ķermenim, kas veidots no tīkla, vajag 5), un atver katru vecāku versiju. Fails no jaunākas PartCraft versijas tiek noraidīts ar ziņojumu, kas min abas versijas.
- Katra vērtība tiek pārbaudīta, kad fails tiek atvērts. Nosaukumi zaudē vadības rakstzīmes; skaitļi ārpus diapazona, atsauces uz trūkstošām funkcijām un nezināmi funkciju veidi tiek noraidīti ar vienkāršu iemeslu.
- Nelabojiet šos failus ar rokām, ja nepazīstat formātu. Fails, kas neiztur pārbaudes, neatvērsies.
- Detaļa ar lielu STEP cietu ķermeni, importētu agrākā versijā, var pārsniegt 50 MB, lielāko apjomu, ko PartCraft atver kā detaļas failu (skatiet [Traucējummeklēšana](topic:troubleshooting#file-problems)).

## Facetes un precizitāte

STL un 3MF vienmēr sastāv no facetēm iestatījumā **Līknes**, tāpat kā virsmas DXF, izņemot apaļos caurumus, kas ir īsti riņķi. Skices DXF ir īsti loki un riņķi, jo tie nāk tieši no skices. Šī versija veido katru detaļu ar tīkla kodolu, tāpēc arī rasējuma skati (ieskaitot griezumus) ir facetēti. Precīzais STEP eksports ir izņēmums: kodols zina katras virsmas īsto formu no skices (vai no STEP faila, no kura ķermenis atvērts), tāpēc apaļas virsmas tiek ierakstītas kā īsti cilindri, konusi, sfēras un tori neatkarīgi no tā, kas iestatīts **Līknes** (skatiet [Eksportēšana drukāšanai, STEP un DXF](topic:export-files#for-other-cad-programs-step)).

## Neatbalstīts šajā versijā

| Formāts | Statuss |
|---|---|
| glTF, IGES, Parasolid, ACIS (ievadē vai izvadē); OBJ eksports | Nav izveidots |
| DWG | Rakstīts tikai [variantu paketē](topic:variant-pack) kā katras konfigurācijas rasējuma lapa. Nenolasīts un nav cita eksporta. Eksportējiet DXF; katra CAD programma atver R12 DXF |
| Mezgla STEP un mezgla rasējums | Vēl nav izveidots. Eksportējiet katru detaļu kā precīzu STEP; STL, 3MF un materiālu saraksts tiek eksportēti no mezgla |
| Citu programmu pašu detaļu un mezglu faili (izņemot `.3dm`, kas atveras kā viens ķermenis) | Nav izveidots |

Skatiet [Kas vēl nav izveidots](topic:not-built-yet).
