---
title: Bëj një vizatim me pamje, prerje dhe GD&T
summary: Hap fletën e vizatimit, shto një prerje dhe një pamje detaji, vendos datum, kornizat e kontrollit të tolerancave dhe simbolet e përfundimit të sipërfaqes, zgjidh madhësinë e fletës, plotëso bllokun e titullit dhe rishikimet, dhe eksporto fletën si PDF.
keywords: tabela e vrimave, grafiku i vrimave, pozicionet e vrimave, etiketa, vizatim, vizatim 2D, fletë, madhësia e fletës, a4, a3, a2, a1, a0, ansi, blloku i titullit, rishikim, blloku i rishikimit, numri i vizatimit, material, pdf, pamjet, ortografike, këndi i tretë, izometrike, pamja e prerjes, pamja e detajit, gd&t, datum, kornizë kontrolli, tolerancë, pozicion, sheshtësi, përfundimi i sipërfaqes, trashësia, printim
from: 39e944c0
---

PartCraft bën një fletë vizatimi nga pjesa: pamjet e përparme, nga lart dhe e djathtë në projeksion me këndin e tretë, një pamje izometrike, madhësitë e përgjithshme dhe një bllok titulli në një fletë nga A4 deri A0 ose ANSI A deri E. Mbi të mund të shtosh një prerje, një pamje detaji dhe simbolet GD&T. Fleta përditësohet kur ndryshon pjesa, dhe cilësimet e saj ruhen në skedarin e pjesës.

## Hap fletën e vizatimit

1. Ndërto pjesën. (Kur nuk ka asgjë të ndërtuar: "Ndërto fillimisht një solid, pastaj bëje vizatimin e tij.")
2. Zgjidh {{ui:Vizatimi}} në shiritin e veglave.

Pamja 3D zëvendësohet nga fleta. Shiriti i veglave shfaq {{ui:Datum}}, {{ui:Kornizë}}, {{ui:Përfundimi}}, {{ui:Detaj}}, {{ui:PDF}} dhe {{ui:Kthehu}}, dhe paneli i djathtë titullohet **Vizatimi**. Shiriti i gjendjes thotë si u bënë pamjet: "Vizatim (kurbat vizatohen si facetë). Datum, Kornizë dhe Përfundimi vendosin GD&T në një pamje; paneli cakton një prerje dhe një pamje detaji." Pamjet vizatohen nga facetat e kernelit të rrjetës, kështu që skajet e rrumbullakëta janë copëza të shkurtra të drejta; harqet e vërteta kërkojnë një kernel të saktë, të cilin kjo version nuk e ka.

Lëviz nëpër fletë: rrotullo rrotën për zmadhim, tërhiq me butonin e djathtë ose të mesit për ta lëvizur, shtyp {{key:F}} për ta përshtatur fletën. Me fletën të fokusuar, {{key:Plus}} dhe {{key:Minus}} zmadhojnë, dhe {{key:Shift}} me tastet me shigjeta lëviz pamjen.

Zgjidh {{ui:Kthehu}}, {{ui:Kthehu te modeli}} ose shtyp {{key:Esc}} (me asgjë të zgjedhur dhe pa mjet aktiv) për t'u kthyer te modeli 3D.

## Çfarë ka në fletë

- **Fleta që zgjedh**, horizontale (A3 përveç nëse zgjedh tjetër), me kornizë dhe një **bllok titulli**: titulli, kompania, numri i vizatimit, rishikimi, materiali, vizatoi / kontrolloi / miratoi, data, shkalla, madhësia e fletës, "Njësitë: milimetra · Projeksion i këndit të tretë", dhe nëse pamjet janë të sakta ose të facetuara.
- Një **bllok rishikimi** në qoshen e sipërme të djathtë, sapo shton një rishikim.
- **Pamjet e përparme, nga lart dhe të djathta**: pamja nga lart mbi pamjen e përparme, pamja e djathtë në të djathtë të saj. Skajet e fshehura me vija të ndërprera.
- Një **pamje izometrike** kur ka vend.
- **Madhësitë e përgjithshme**: gjerësia dhe lartësia në pamjen e përparme, thellësia në pamjen nga lart.
- Një **shkallë** e vetme për pamjet kryesore nga seria ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), e zgjedhur që të përshtaten.

## Zgjidh madhësinë e fletës

Në fletën e vizatimit, pa asgjë të zgjedhur, zgjidh {{ui:Fleta}} në panelin e djathtë: **A4, A3, A2, A1, A0** (ISO 216) ose **ANSI A, B, C, D, E** (11 × 8.5 deri 44 × 34 in). Pamjet rivendosen në shkallën më të madhe ISO që përshtatet, kështu që një fletë më e madhe mund ta tregojë pjesën më të madhe.

## Plotëso bllokun e titullit

Fushat **Blloku i titullit** të panelit të djathtë shkojnë direkt në fletë: {{ui:Titulli}}, {{ui:Nr. i vizatimit}}, {{ui:Rishikimi}}, {{ui:Kompania}}, {{ui:Vizatoi}}, {{ui:Kontrolloi}}, {{ui:Miratoi}}, {{ui:Data}} (viti-muaji-dita), {{ui:Toleranca e përgjithshme}} dhe {{ui:Përfundimi}} (dy të fundit shtypen pak mbi bllokun e titullit). Shkruaj në një kuti dhe shtyp {{key:Enter}} ose kliko jashtë. Një kuti bosh e lë qelizën bosh, përveç:

- **Titulli** shfaq emrin e pjesës derisa shkruan një të tjetër.
- **Data** shfaq ditën e sotme derisa shkruan një datë tjetër.
- **Rishikimi** shfaq rishikimin më të ri në listë derisa shkruan një tjetër.

**Materiali** vjen nga pjesa: kliko hapësirën bosh në model, pastaj zgjidh {{ui:Materiali}} në panelin e Pjesës. I njëjti material i jep vetive masore të Matjes densitetin.

## Shto rishikime

Te **Rishikimet**, kliko {{ui:Shto rishikim}}. Çdo rresht i ri merr shkronjën e radhës (A, B, C …, pas Z vjen AA) dhe datën e sotme. Shkruaj çfarë ndryshoi dhe kush e bëri ndryshimin. {{ui:Fshi}} heq një rresht. Blloku i rishikimit në qoshen e sipërme të djathtë të fletës i liston, më i vjetri i pari, deri në 20.

Madhësia e fletës, blloku i titullit, rishikimet dhe materiali ruhen në skedarin e pjesës, dhe çdo ndryshim është një hap i {{ui:Zhbëj}}.

## Shto një pamje prerjeje

Pjesa pritet nga një plan dhe prerja vijëzohet. Si pamjet e tjera, prerja vizatohet nga facetat, kështu që skajet e rrumbullakëta janë copëza të shkurtra të drejta.

1. Në panelin e djathtë, cakto **Prerja A-A** në **të pamjes së përparme**, **të pamjes nga lart** ose **të pamjes së djathtë**.
2. Prerja shfaqet në fletë, e vijëzuar aty ku prerja kalon nëpër material, me vijën e prerjes dhe shigjetat "A" në pamjen nga e cila merret.
3. Cakto **Prerja në (mm)** për të lëvizur planin e prerjes. Fillon nga mesi i pjesës.

Cakto **Prerja A-A** përsëri në **Asnjë** për ta hequr.

## Shto një pamje detaji

1. Cakto **Detaji B** në pamjen që do ta zmadhosh (ose zgjidh {{ui:Detaj}} në shiritin e veglave).
2. Kliko qendrën e zonës që do të zmadhohet, në atë pamje. Një rreth me etiketën "B" e shënon, dhe "Detaji B" i zmadhuar shfaqet në fletë me shkallën e vet, për shembull "Detaji B (2:1)".
3. Cakto **Rrezja e detajit (mm)** për madhësinë e rrethit dhe **Shkalla e detajit** për zmadhimin: 2, 4, 5 ose 10 × fletës.

Një detaj mund të merret nga pamja e përparme, nga lart, e djathtë ose prerja, jo nga izometrikja. Nëse nuk ka vend për çdo pamje, paneli thotë "Nuk ka vend në fletë për: detaj. Bëje detajin më të vogël ose hiq një pamje."

## Shto një tabelë vrimash

Një tabelë vrimash liston vrimat e pjesës me pozicionet e tyre, për shpimin ose CNC: në panel zgjidh **Tabela e vrimave** › **të pamjes nga lart** (ose e përparme, ose e djathtë).

- Çdo vrimë e parë drejt nga ai pamje merr një etiketë pranë saj: **A1**, **A2** … për madhësinë e parë, **B1** … për të radhës.
- Tabela liston çdo etiketë, **X** dhe **Y** të saj në milimetra, dhe madhësinë e saj: "Ø14 THRU", "Ø6.6 × 10 DEEP", një zgjerim i vrimës (counterbore) ose një konik (countersink), ose thirrja e filetit të një vrime të filetuar.
- X dhe Y matën nga qoshja e poshtme e majtë e konturit të pamjes, e shënuar **X0 Y0** në fletë.
- Vrimat e krijuara nga modelet përfshihen. Vrimat që nuk janë pingul me pamjen numërohen në panel dhe lihen jashtë tabelës.

Tabela vendoset në një zonë të lirë të fletës dhe në PDF.

## Vendos simbolet GD&T dhe të përfundimit të sipërfaqes

1. Zgjidh {{ui:Datum}}, {{ui:Kornizë}} (një kornizë kontrolli e veçorisë) ose {{ui:Përfundimi}} (një simbol i përfundimit të sipërfaqes).
2. Kliko pikën e një pamjeje ku lidhet. Ai ngjitet te vija më e afërt e vizatuar brenda 2.5 mm.
3. Simboli shfaqet me një udhëheqës, i zgjedhur, dhe paneli i djathtë tregon cilësimet e tij.

Tërhiq një simbol për ta lëvizur; udhëheqësi mbetet në pikë. Me një simbol të zgjedhur, tastet me shigjeta e zhvendosin 1 mm. {{key:Delete}} ose {{key:Backspace}} (ose {{ui:Fshi}} në panel) e heq; {{ui:U krye}} ose {{key:Esc}} e çzgjedh. Çdo ndryshim është në listën e zhbërjes.

### Datum

**Shkronja**: nga A deri Z, pa I, O dhe Q (lexohen si 1, 0 dhe O). Çdo datum i ri merr shkronjën e radhës së lirë.

### Kornizë kontrolli e veçorisë

| Cilësimi | Zgjedhjet |
|---|---|
| **Tolerancë** | Drejtëzia, Sheshtësia, Rrethshmëria, Cilindriciteti, Profili i një vije, Profili i një sipërfaqeje, Pingulariteti, Këndshmëria, Paralelizmi, Pozicioni, Koaksialiteti dhe Simetria (të dyja të hequra në Y14.5-2018, dhe shënohen si të tilla), Lëvizja rrethore, Lëvizja totale |
| **Zona (mm)** | Vlera e tolerancës, parazgjedhja 0.1 |
| **Zona e diametrit (⌀)** | Për karakteristika me zonë cilindrike; e aktivizuar si parazgjedhje për Pozicionin |
| **Materiali** | RFS (asnjë), MMC (Ⓜ), LMC (Ⓛ), ku karakteristika e lejon |
| **Datumi parësor / dytësor / tretësor** | Deri në tre shkronja datum, secila me një **… modifikues** (MMB, LMB) ku lejohet |

PartCraft e kontrollon kornizën sipas rregullave të ASME Y14.5 dhe thotë çfarë nuk është e saktë në krye të panelit, për shembull "Sheshtësia është një toleranc formë: nuk merr referenca datumi." ose "Pozicioni kërkon të paktën një referencë datumi." Rreshti **Lexohet** e shpjegon kornizën me fjalë.

### Përfundimi i sipërfaqes

| Cilësimi | Zgjedhjet | Parazgjedhja |
|---|---|---|
| **Ra (µm)** | Mesatarja e pabarazisë | 1.6 |
| **Procesi** | çdo proces, i përpunuar me mjete, pa heqje materiali | i përpunuar me mjete |
| **Shënimi** | Deri në 40 karaktere, si një drejtim ose proces | |

Pa asgjë të zgjedhur, paneli liston **Shënimet në fletë**, secila me **Zgjidh**.

## Eksporto PDF

Zgjidh {{ui:PDF}} në shiritin e veglave, {{ui:Eksporto PDF}} në panel, ose {{ui:Eksporto}}, pastaj {{ui:Vizatim (PDF): pamjet, prerja, detaji, GD&T}} nga modeli. PDF shkarkohet si `<part name> - drawing.pdf`, dhe shiriti i gjendjes liston çfarë ka në të.

Printoje në madhësi reale në letër të madhësisë së fletës, për ta mbajtur shkallën të saktë.

## Kufizimet

| Ende nuk është ndërtuar | Bëje sot kështu |
|---|---|
| Përmasa të tjera përveç tri madhësive të përgjithshme | Shtoji në PDF me një aplikacion shënimesh, ose eksporto një skicë ose një faqe si DXF dhe vendose përmasat në një program CAD 2D |
| Më shumë se një prerje ose detaj; pamje të nxjerra, ndihmëse dhe të projektuara | Nuk është e disponueshme |
| Projeksioni i këndit të parë, pamje lëvizëse, fletë vertikale | Këndi i tretë, vendosje automatike, horizontale |
| Shënime dhe tabela të lira në fletë (përveç blloqeve të titullit dhe rishikimit) | Përdor shënimin e përfundimit, ose shto tekst në PDF |
| Vizatime montimesh | Nuk është e disponueshme |

Karakteret jashtë grupit Europian perëndimor shtypen si "?" (PDF përdor Helvetica të integruar të lexuesit). Simbolet GD&T vizatohen si vija, kështu që shtypen në çdo lexues.

## Lëre fletën ta bëjë

- **Fleta › Automatike** zgjedh letrën për ty: shkallën standarde më të madhe deri 1:1, në fletën më të vogël të madhësisë A që mban pamjet në atë shkallë (lista tregon cilën zgjodhi).
- **Vendos përmasa për vrimat** vendos përmasat e vrimave në pamjen që i sheh më shumë prej tyre të hapura: një shenjë qendre në çdo një, një thirrje për çdo madhësi ("2× Ø6 THRU" me një udhëheqës), dhe pozicionet e tyre të matura nga qoshja e poshtme e majtë e pamjes. Gjerësia, lartësia dhe thellësia e përgjithshme janë gjithmonë aty.
