---
title: Veidojiet zīmējumu ar skatiem, griezumu un GD&T
summary: Atveriet zīmējuma lapu, pievienojiet griezumu un detaļskatu, novietojiet bāzes, vadības rāmjus un virsmas apstrādes simbolus, izvēlieties lapas izmēru, aizpildiet titula bloku un pārskatījumus un eksportējiet lapu kā PDF.
keywords: caurumu tabula, caurumu diagramma, caurumu pozīcijas, marķieri, zīmējums, 2D zīmējums, lapa, lapas izmērs, a4, a3, a2, a1, a0, ansi, titula bloks, pārskatījums, pārskatījumu bloks, zīmējuma numurs, materiāls, pdf, skati, ortogonāls, trešais leņķis, izometrija, griezuma skats, detaļskats, gd&t, bāze, vadības rāmis, pielaide, pozīcija, plakanums, virsmas apstrāde, raupjums, drukāt
from: 39e944c0
---

PartCraft izveido zīmējuma lapu no detaļas: priekšskatu, augšskatu un labo skatu trešā leņķa projekcijā, izometrisku skatu, kopējos izmērus un titula bloku lapā no A4 līdz A0 vai ANSI A līdz E. Virsū varat pievienot griezumu, detaļskatu un GD&T simbolus. Lapa atjaunojas, kad mainās detaļa, un tās iestatījumi tiek saglabāti detaļas failā.

## Atveriet zīmējuma lapu

1. Izveidojiet detaļu. (Ja nekas nav izveidots: "Vispirms izveidojiet cietķermeni, pēc tam tā zīmējumu.")
2. Izvēlieties {{ui:Drawing}} rīkjoslā.

3D skatu aizstāj lapa. Rīkjoslā redzams {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}} un {{ui:Back}}, un labā paneļa virsraksts ir **Zīmējums**. Statusa joslā ir norādīts, kā skati tika veidoti: "Zīmējums (līknes tiek zīmētas kā facetes). Bāze, Rāmis un Apstrāde novieto GD&T uz skata; panelis iestata griezumu un detaļskatu." Skati tiek zīmēti no tīkla kodola facetēm, tāpēc apaļās malas ir īsi taisni posmi; īstiem lokiem vajag precīzu kodolu, kāda šajā versijā nav.

Pārvietojieties pa lapu: ritiniet riteni, lai tuvinātu, velciet ar labo vai vidējo pogu, lai panoramētu, nospiediet {{key:F}}, lai ietilpinātu lapu. Kad lapa ir fokusēta, {{key:Plus}} un {{key:Minus}} tuvina un tālina, bet {{key:Shift}} kopā ar bultiņu taustiņiem panoramē.

Izvēlieties {{ui:Back}}, {{ui:Back to the model}} vai nospiediet {{key:Esc}} (kad nekas nav atlasīts un neviens rīks nav aktīvs), lai atgrieztos 3D modelī.

## Ko satur lapa

- **Izvēlētā lapa**, ainavas formātā (A3, ja neizvēlaties citu), ar rāmi un **titula bloku**: nosaukums, uzņēmums, zīmējuma numurs, pārskatījums, materiāls, izstrādāja / pārbaudīja / apstiprināja, datums, mērogs, lapas izmērs, "Vienības: milimetri · Trešā leņķa projekcija", un vai skati ir precīzi vai facetēti.
- **Pārskatījumu bloks** augšējā labajā stūrī, kad pievienojat pārskatījumu.
- **Priekšskats, augšskats un labais skats**: augšskats virs priekšskata, labais skats tā labajā pusē. Paslēptās malas ir punktētas.
- **Izometrisks skats**, kur ir vieta.
- **Kopējie izmēri**: platums un augstums priekšskatā, dziļums augšskatā.
- Viens **mērogs** galvenajiem skatiem no ISO sērijas (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), izvēlēts tā, lai skati ietilptu.

## Izvēlieties lapas izmēru

Zīmējuma lapā, kad nekas nav atlasīts, labajā panelī izvēlieties {{ui:Sheet}}: **A4, A3, A2, A1, A0** (ISO 216) vai **ANSI A, B, C, D, E** (11 × 8.5 līdz 44 × 34 collas). Skati tiek izkārtoti no jauna lielākajā ISO mērogā, kas ietilpst, tāpēc lielāka lapa var parādīt detaļu lielāku.

## Aizpildiet titula bloku

Labā paneļa **Titula bloka** lauki tiek ievietoti tieši lapā: {{ui:Title}}, {{ui:Drawing no.}}, {{ui:Revision}}, {{ui:Company}}, {{ui:Drawn by}}, {{ui:Checked by}}, {{ui:Approved by}}, {{ui:Date}} (gads-mēnesis-diena), {{ui:General tolerance}} un {{ui:Finish}} (pēdējie divi tiek drukāti tieši virs titula bloka). Ierakstiet lodziņā un nospiediet {{key:Enter}} vai noklikšķiniet citur. Tukšs lodziņš atstāj šūnu tukšu, izņemot:

- **Title** rāda detaļas nosaukumu, līdz ierakstāt citu.
- **Date** rāda šodienas datumu, līdz ierakstāt citu.
- **Revision** rāda jaunāko pārskatījumu sarakstā, līdz ierakstāt citu.

**Material** nāk no detaļas: noklikšķiniet tukšā vietā modelī un Detaļas panelī izvēlieties {{ui:Material}}. Tas pats materiāls dod Measure masas īpašībām blīvumu.

## Pievienojiet pārskatījumus

Sadaļā **Pārskatījumi** noklikšķiniet uz {{ui:Add revision}}. Katra jaunā rinda saņem nākamo burtu (A, B, C …; pēc Z nāk AA) un šodienas datumu. Ierakstiet, kas mainījās, un to, kas izmaiņas veica. {{ui:Delete}} noņem rindu. Pārskatījumu bloks lapas augšējā labajā stūrī tos parāda, vecākos pirmos, līdz 20.

Lapas izmērs, titula bloks, pārskatījumi un materiāls tiek saglabāti detaļas failā, un katra izmaiņa ir viens solis {{ui:Undo}}.

## Pievienojiet griezuma skatu

Detaļu šķeļ plakne, un griezums ir šrafēts. Tāpat kā citi skati, arī griezums tiek zīmēts no facetēm, tāpēc apaļās malas ir īsi taisni posmi.

1. Labajā panelī iestatiet **Griezums A-A** uz **No priekšskata**, **No augšskata** vai **No labā skata**.
2. Griezums parādās lapā, šrafēts vietās, kur griezuma plakne iet caur materiālu, un griezuma līnija ar tās "A" bultiņām tiek attēlota skatā, no kura tas ņemts.
3. Iestatiet **Griezums pie (mm)**, lai pārvietotu griezuma plakni. Tā sākas detaļas vidū.

Iestatiet **Griezums A-A** atpakaļ uz **Nav**, lai to noņemtu.

## Pievienojiet detaļskatu

1. Iestatiet **Detaļa B** uz skatu, ko palielināt (vai izvēlieties {{ui:Detail}} rīkjoslā).
2. Noklikšķiniet uz palielināmās zonas centra tajā skatā. Aplis ar burtu "B" to atzīmē, un palielinātā "Detaļa B" parādās lapā ar savu mērogu, piemēram, "Detaļa B (2:1)".
3. Iestatiet **Detaļas rādiuss (mm)** apļa izmēram un **Detaļas mērogs** palielinājumam: 2, 4, 5 vai 10 × lapas.

Detaļskatu var ņemt no priekšskata, augšskata, labā skata vai griezuma skata, bet ne no izometriskā. Ja lapā nav vietas visiem skatiem, panelis rāda: "Lapā nav vietas: detaļskatam. Padariet detaļu mazāku vai izņemiet skatu."

## Pievienojiet caurumu tabulu

Caurumu tabula uzskaita detaļas caurumus ar to pozīcijām urbšanai vai CNC: panelī izvēlieties **Caurumu tabula** › **No augšskata** (vai no priekšskata vai labā skata).

- Katram caurumam, kas tajā skatā redzams galā, blakus ir marķieris: **A1**, **A2** … pirmajam izmēram, **B1** … nākamajam.
- Tabulā ir katrs marķieris, tā **X** un **Y** milimetros un tā izmērs: "Ø14 CAUR", "Ø6.6 × 10 DZIĻŠ", paplašinājums vai iegrimums, vai vītnes apzīmējums.
- X un Y tiek mērīti no skata kontūras apakšējā kreisā stūra, kas lapā atzīmēts kā **X0 Y0**.
- Iekļauti ir arī caurumi, ko izveidojušas šablonas. Caurumi, kas nav perpendikulāri skatam, tiek saskaitīti panelī un tabulā neiekļauti.

Tabula tiek ievietota brīvā lapas vietā un PDF.

## Novietojiet GD&T un virsmas apstrādes simbolus

1. Izvēlieties {{ui:Datum}}, {{ui:Frame}} (elementu vadības rāmis) vai {{ui:Finish}} (virsmas apstrādes simbols).
2. Noklikšķiniet uz punkta skatā, kur tas piestiprinās. Tas piesaistās tuvākajai zīmētajai līnijai 2.5 mm robežās.
3. Simbols parādās ar izvadlīniju, atlasīts, un labajā panelī redzami tā iestatījumi.

Velciet simbolu, lai to pārvietotu; izvadlīnija paliek punktā. Kad simbols ir atlasīts, bultiņu taustiņi to pārvieto par 1 mm. {{key:Delete}} vai {{key:Backspace}} (vai {{ui:Delete}} panelī) to noņem; {{ui:Done}} vai {{key:Esc}} noņem atlasi. Katra izmaiņa ir atsaucamo darbību sarakstā.

### Bāze

**Burts**: no A līdz Z, bez I, O un Q (tie izskatās kā 1, 0 un O). Katra jaunā bāze saņem nākamo brīvo burtu.

### Elementu vadības rāmis

| Iestatījums | Izvēles |
|---|---|
| **Pielaide** | Taisnums, Plakanums, Apaļums, Cilindriskums, Līnijas profils, Virsmas profils, Perpendikularitāte, Leņķiskums, Paralēlisms, Pozīcija, Koncentriskums un Simetrija (abi noņemti Y14.5-2018, un tā atzīmēti), Apļveida izspiedums, Kopējais izspiedums |
| **Zona (mm)** | Pielaides vērtība, noklusējums 0.1 |
| **Diametra zona (⌀)** | Raksturlielumiem ar cilindrisku zonu; pēc noklusējuma ieslēgta pozīcijai |
| **Materiāls** | RFS (nav), MMC (Ⓜ), LMC (Ⓛ), kur raksturlielums to atļauj |
| **Primārā / Sekundārā / Terciārā bāze** | Līdz trim bāzes burtiem, katram ar **… modifikatoru** (MMB, LMB), kur tas atļauts |

PartCraft pārbauda rāmi pēc ASME Y14.5 noteikumiem un panelī augšā norāda, kas nav kārtībā, piemēram: "Plakanums ir formas pielaide: tai nav bāzu atsauču." vai "Pozīcijai vajag vismaz vienu bāzes atsauci." Rinda **Nolasījums** izskaidro rāmi.

### Virsmas apstrāde

| Iestatījums | Izvēles | Noklusējums |
|---|---|---|
| **Ra (µm)** | Vidējais raupjums | 1.6 |
| **Process** | jebkurš process, apstrādāts, bez materiāla noņemšanas | apstrādāts |
| **Piezīme** | Līdz 40 rakstzīmēm, piemēram, virziens vai process | |

Kad nekas nav atlasīts, panelī ir uzskaitītas **Piezīmes lapā**, katra ar **Atlasīt**.

## Eksportējiet PDF

Izvēlieties {{ui:PDF}} rīkjoslā, {{ui:Export PDF}} panelī vai {{ui:Export}}, pēc tam {{ui:Drawing (PDF): views, section, detail, GD&T}} no modeļa. PDF tiek lejupielādēts kā `<part name> - drawing.pdf`, un statusa josla uzskaita, kas tajā ir.

Drukājiet to ar "Faktisko izmēru" uz lapas, kas atbilst lapas izmēram, lai mērogs paliek pareizs.

## Ierobežojumi

| Vēl nav izveidots | Ko darīt šodien |
|---|---|
| Izmēri, izņemot trīs kopējos izmērus | Pievienojiet tos PDF ar atzīmju programmu vai eksportējiet skici vai virsmu kā DXF un kotējiet 2D CAD programmā |
| Vairāk nekā viens griezums vai detaļskats; izlauztie, palīgskati un projicētie skati | Nav pieejams |
| Pirmā leņķa projekcija, kustīgi skati, portreta lapas | Trešais leņķis, automātiska izkārtojums, ainava |
| Brīvas teksta piezīmes un tabulas uz lapas (izņemot titula un pārskatījumu blokus) | Izmantojiet apstrādes piezīmi vai pievienojiet tekstu PDF |
| Mezglu zīmējumi | Nav pieejams |

Simboli ārpus Rietumeiropas kopas tiek drukāti kā "?" (PDF izmanto lasītāja iebūvēto Helvetica fontu). GD&T simboli ir zīmēti kā līnijas, tāpēc tie tiek drukāti jebkurā lasītājā.

## Ļaujiet lapai to izdarīt

- **Lapa › Automātiski** izvēlas papīru: lielāko standarta mērogu līdz 1:1, mazākajā A formāta lapā, kurā skati ietilpst šajā mērogā (saraksts rāda, kuru tā izvēlējās).
- **Kotēt caurumus** kotē caurumus skatā, kurā redzams lielākā daļa no tiem galā: centra atzīme katram, viens izsaukums katram izmēram ("2× Ø6 CAUR" ar izvadlīniju) un to pozīcijas, mērītas no skata apakšējā kreisā stūra. Kopējais platums, augstums un dziļums vienmēr ir klāt.
