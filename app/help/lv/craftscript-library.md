---
title: Analīzes bibliotēka
summary: Lasāmu analīzes skriptu bibliotēka Skripta darbvietā — kas ir katrā grupā, funkcijas atvēršana tikai lasīšanai, tās galvene ar metodi, atsaucēm un pārbaudi, savas kopijas izveide un tas, kā kopija pārņem bibliotēkas funkciju.
keywords: bibliotēka, craftlib, analīze, elektromagnēts, statisks, modālais, termiskais, topoloģijas optimizācija, top88, SIMP, elektromagnētika, elektrostatika, magnetostatika, šķidrums, režģa Bolcmaņa metode, LBM, tīkls, voksels, tetraedri, atsauces, pārbaude, verifikācija, kopija, ēna
from: bf993859
---

Analīzes bibliotēka ir skriptu kopa, katrs no tiem ir funkcija, ko varat lasīt no augšas līdz apakšai: kā veidojas stinguma matrica, kur ieliek robežnosacījumus, kurš risinātājs darbojas, kā tiek aprēķināti rezultāti. Nekas tajā nav paslēpts melnā kastē; iebūvētas ir tikai ātrās iekšējās cilpas (elementu matricas, retie risinātāji, tīklošana).

## Sāciet ar piemēru

Grupā **Piemēri** ir pieci īsi skripti, kas izmanto bibliotēku no sākuma līdz beigām. Noklikšķiniet uz viena, nospiediet {{ui:Atvērt (tikai lasīšanai)}}, tad {{key:F5}}: katrs notīra skatu, parāda rezultātu uz audekla un grafiku apakšdisplejos.

| Piemērs | Ko tas rāda |
|---|---|
| Konsoles spriegums | Tērauda stienis 100 × 10 × 10 mm ar 100 N gala slodzi: von Mises spriegums uz deformētā stieņa un gala izliece salīdzinājumā ar sijas teoriju četriem elementu izmēriem (attēlota grafikā) |
| MBB sijas topoloģija | Klasiskā 60 × 20 topoloģijas optimizācija: projekta veidošanās, atbilstības (compliance) krišana, gala izkārtojums (94 iterācijas, atbilstība 203.19) |
| Kondensatora lauks | Divas plāksnes 4 mm platas, 1 mm attālumā: potenciāls un lauks, kapacitāte ar malu efektu salīdzinājumā ar ideālo vērtību un Palmera formulu |
| Kanāla plūsma | Režģa Bolcmaņa plūsma ap stabiņu kanālā: ātruma lauks un konverģences vēsture |
| Elektromagnēts | C-veida dzelzs serde ar gaisa spraugu un spoli: magnētiskās indukcijas blīvums, lauks spraugā salīdzinājumā ar magnētiskās ķēdes formulu, induktivitāte un pievilkšanās spēks pāri spraugai. Aplūkots sadaļā [Magnētiskie lauki 2-D](topic:magnetic-fields-2d) |
| Pastāvīgais magnēts | Tā pati serde ar pastāvīgo magnētu spoles vietā: magnēta darba punkts, lauks spraugā salīdzinājumā ar magnētisko ķēdi, cik plūsmas noplūst, pievilkšanās. Sadaļā [Magnētiskie lauki 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupas

| Grupa | Funkcijas | Ko tās dara |
|---|---|---|
| Tīklošana | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Kastes un cilindri kā heksaedri, kubi vai tetraedri; jebkura modeļa (daļas, ķermeņa, ielādēta STL) kubi vai tetraedri; elementu tilpumi un kvalitāte; mezglu atlase plaknē vai virsmā |
| Statiskais spriegums | `static_voxel`, `static_tet` | Lineārs statiskais spriegums uz kubiem vai uz 10 mezglu tetraedriem: pārvietojumi, spriegumi, von Mises, reakcijas |
| Rāmji | `frame3d` | 3D rāmji no sijām, kolonnām un sastatnēm ar tiešās stinguma metodi: gala atbrīvojumi, balsti un atsperes, slodzes gar elementiem; pārvietojumi, reakcijas, elementu gala spēki. DetailCraft un BimCraft {{ui:Eksportēt kā CraftScript}} uzraksta visu modeli šai funkcijai. Analīzes palīglīdzeklis, nevis koda pārbaude |
| Vibrācija | `modal_tet` | Dabiskās frekvences un formas |
| Siltums | `heat_steady`, `heat_transient`, `heat_system` | Stacionārā un pārejas vadīšana ar fiksētām temperatūrām, siltuma ievadi, ģenerēšanu, plūsmu un konvekciju |
| Topoloģijas optimizācija | `top88`, `top99`, `topopt3d` | Publicētie 88 un 99 rindu 2-D kodi un tā pati metode 3-D uz kubiem |
| Elektromagnētika | `poisson2d`, `magnetostatic2d` | 2-D elektrostatika (potenciāls, lauks, kapacitāte, lādiņš) un magnetostatika (vektora potenciāls, magnētiskās indukcijas blīvums, pastāvīgie magneti) |
| Šķidruma plūsma | `lbm2d`, `lbm3d` | Režģa Bolcmaņa plūsma: 2-D uzrakstīta skriptā, 3-D uz PartCraft pašu plūsmas kodola |

Katras funkcijas galvene dod tās precīzos argumentus. Vienības ir PartCraft pētījumu vienības, ja galvene nesaka citādi: milimetri, ņūtoni, megapaskāli, blīvumam tonnas uz kubikmilimetru, siltumam vati un kelvini. Elektromagnētiskās un režģa Bolcmaņa funkcijas darbojas jebkurās saskanīgās vienībās; to galvenes norāda, kādās.

## Kā bibliotēka tiek pārbaudīta

Katras funkcijas galvene beidzas ar **pārbaudi**: nelielu gadījumu ar zināmu atbildi. PartCraft testi palaiž visas tās, un, ja PartCraftam ir savs pētījums tam pašam uzdevumam, skripta atbilde tiek salīdzināta ar šo pētījumu uz tā paša tīkla:

- konsoles gala izliece pret sijas teoriju (0.2 % ar kubiem, 0.05 % ar tetraedriem) un pret **Simulācijas** darbvietas risinātājiem uz tā paša tīkla (vienāda līdz daudziem cipariem);
- konsoles pirmā frekvence pret sijas teoriju (par 0.24 % zemāka, kā sagaidāms īsai sijai) un pret **Simulācijas** modālo risinātāju;
- siltums: karsēta plakana siena precīzi, mazs ķermenis, kas atdziest tā, kā norāda kopējās kapacitātes formula, plāksnes temperatūra izzūd tā, kā norāda teorija;
- topoloģijas optimizācija: `top88` reproducē rakstā norādītās 94 iterācijas un atbilstību 203.1925 (un 218.8032 ar blīvuma filtru); `topopt3d` beidzas ar to pašu atbilstību kā **Ģeneratīvā** darbvieta ar tiem pašiem iestatījumiem;
- kondensatora kapacitāte un garas solenoīda lauks pret to mācību grāmatu vērtībām, elektromagnēta spraugas lauks pret magnētiskās ķēdes formulu, un pastāvīgie magneti pret apaļu magnētu gaisā un magnētu, ko noslēdz dzelzs atgriezējs;
- kanāla plūsma pret precīzo parabolisko profilu.

## Lasīt funkciju

1. Atveriet skripta paneļa cilni **Bibliotēka**.
2. Noklikšķiniet uz funkcijas. Tās galvene rāda: ko tā aprēķina, metodi, vienības, pieņēmumus un ierobežojumus, **atsauces** (grāmatu vai rakstu ar vienādojumu numuriem) un **pārbaudi** — nelielu gadījumu ar zināmu atbildi, ko PartCraft pašu testi palaiž.
3. {{ui:Atvērt (tikai lasīšanai)}} atver visu skriptu cilnē ar punktētu apmali. To var palaist, un var atlasīt un palaist daļas, bet nevar mainīt.

## Mainīt funkciju

Nospiediet {{ui:Izveidot kopiju}} (vai **Izveidot kopiju rediģēšanai** virs cilnes tikai lasīšanai). Kopija ir skripts jūsu daļā ar tādu pašu nosaukumu, tātad tas tiek saglabāts kopā ar daļu, un **katrs šīs funkcijas izsaukums tagad izmanto jūsu kopiju** — redaktors to norāda virs skripta. Pārdēvējiet kopiju, lai paturētu abas.

## Izmantot funkciju

Izsauciet bibliotēkas funkciju no jebkura skripta pēc tās nosaukuma, tāpat kā iebūvēto funkciju:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Rezultāti atgriežas kā vērtības darbvietā; grafiki un lauki, ko tā parāda, parādās skatā un apakšdisplejos.

Piemēram, daļas statiskā analīze aizņem dažas rindas:

```
v = voxel_mesh(part(), 2);                   % 2 mm kubi
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % turēt apakšā
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N uz leju augšā
r = static_voxel(v, 210000, 0.3, bc);       % tērauds
```

`r` satur pārvietojumus, spriegumus un reakcijas; von Mises spriegums tiek zīmēts uz deformētās daļas. Līkām daļām izmantojiet `tet_mesh` un `static_tet`, kas var arī ielādēt un turēt veselas virsmas (`face_nodes`).

:::note
Bibliotēkas funkcijas ir rakstītas CraftScript, un Lua skripts tās izsauc caur `cs` tāpat kā iebūvētās funkcijas: `cs.static_tet(t, 200000, 0.3, bc)` (skat. [Skripti Lua valodā](topic:craftscript-lua)). Katra funkcija atrisina vienu materiālu un vienu slodzes gadījumu; galvenes uzskaita, kas vēl nav segts.
:::
