---
title: Zgjidhja e problemeve
summary: Problemet që mund të hasni në PartCraft, nga aplikacioni që nuk nis deri te veçoritë që dështojnë, skicat që nuk zgjidhen, skedarët që nuk hapen dhe bashkimet që sillen keq, me mesazhin që shihni dhe rregullimin.
keywords: problem, gabim, ndihmë, nuk funksionon, dështon, dështim, rrëzim, bosh, webgl, webassembly, kernel, nuk është ndërtuar, mbi-përcaktuar, profil i hapur, nuk hapet, asgjë nuk ndodh, drejtim i gabuar, i ngadaltë
from: 7728542c
---

Kur diçka nuk funksionon, lexoni fillimisht **shiritin e statusit** në fund: PartCraft thotë atje pse refuzoi ose çfarë pret më pas. Një veçori që dështon shfaq mesazhin e vet edhe në krye të panelit të djathtë të saj dhe kur kaloni me kursor mbi rreshtin e saj në historik.

## Aplikacioni nuk nis

### "Ky shfletues nuk mund të shfaqë 3D (WebGL është i fikur ose mungon), prandaj PartCraft nuk mund të punojë këtu."

**Shkaku:** shfletuesi ka grafikën 3D (WebGL) të fikur, të bllokuar, ose të pambështetur nga drejtuesi i grafikës.

**Rregullimi:**

:::chromium
Hapni `chrome://settings/system` (ose `edge://settings/system` në Edge) dhe aktivizoni "Use graphics acceleration when available", pastaj rinisni shfletuesin. Nëse është e aktivizuar, kontrolloni `chrome://gpu` për gjendjen e WebGL, dhe përditësoni drejtuesin e grafikës.
:::

:::firefox
Hapni `about:support` dhe shikoni Graphics, WebGL. Nëse është i bllokuar, përditësoni drejtuesin e grafikës. Në `about:config`, `webgl.disabled` duhet të jetë `false`.
:::

:::safari
WebGL është gjithmonë i aktivizuar në Safari-n aktual. Përditësoni macOS (Safari përditësohet me të). Nëse prapë dështon, provoni Chrome ose Firefox në të njëjtin Mac për të përjashtuar harduerin e grafikës.
:::

Desktop në distancë dhe disa makina virtuale nuk kanë WebGL. Provojeni në vetë kompjuterin.

### "Kerneli i ngurtë nuk u ngarkua: …"

**Shkaku:** kerneli gjeometrik (një program WebAssembly) nuk mundi të merrej ose të nisej. Zakonisht lidhja u shkëput gjatë ngarkimit të aplikacionit, WebAssembly është fikur nga një politikë kompanie ose një cilësim sigurie i shfletuesit, ose shfletuesi është shumë i vjetër.

**Rregullimi:** rifreskoni faqen ndërsa jeni në linjë. Nëse vazhdon të dështojë, provoni një shfletues tjetër aktual. Në Firefox, `javascript.options.wasm` në `about:config` duhet të jetë `true`. Jashtë linje, aplikacioni dhe kerneli i tij ngarkohen vetëm nëse shiriti i aplikacionit thoshte **Gati jashtë linje** para se të humbnit lidhjen ({{ui:Ruaje për jashtë linje}} ndërsa jeni në linjë; shih [Punimi jashtë linje](common:offline)).

### Butoni jashtë linje thotë "Nuk u ruajt" ose "Jashtë linje nuk disponohet"

**Nuk u ruajt**: disa skedarë nuk u shkarkuan. Klikojeni për ta provuar përsëri ndërsa jeni në linjë; një lidhje e ngadaltë ose me pagesë mund të kërkojë një provë të dytë. **Jashtë linje nuk disponohet**: kjo dritare shfletuesi nuk mund të mbajë një kopje jashtë linje (dritaret private dhe disa kompjuterë të menaxhuar e bllokojnë). Përdorni një dritare normale, ose mbani skedën të hapur.

### PartCraft është jashtë linje, por i vjetëruar

Klikoni **Gati jashtë linje** ndërsa jeni në linjë dhe zgjidhni {{ui:Ruaje përsëri (merr versionin më të ri)}}.

### "Shtrirja: nuk është ndërtuar ende. Kërkon një kernel të saktë, …"

Mesazhi i plotë është "<Emri>: nuk është ndërtuar ende. Kërkon një kernel të saktë, që ky version i PartCraft nuk e ka. Ndihmë › Çfarë nuk është ndërtuar ende thotë çfarë të bëni në vend të tij." E shihni kur zgjidhni Shtrirja, Ndërlidhja, Rib, një flanxhë llamarine, një veçori sipërfaqeje, Combine, Move body, Scale body ose Path pattern, dhe për gjërat e tjera që vetëm një kernel i saktë mund t'i bëjë. Nuk ka gabim as në shfletuesin tuaj as në pjesën tuaj: ky version i PartCraft e ndërton çdo pjesë me kernelin e rrjetës. Shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet) për atë që duhet të bëni në vend të tij, dhe [Kerneli i rrjetës](topic:solid-kernels).

### "Ngarkimi i kernelit të ngurtë…" nuk largohet kurrë

Prisni pak në një lidhje të ngadaltë: kerneli dhe biblioteka 3D shkarkohen herën e parë. Pastaj rifreskoni. Nëse vetë faqja shfaq një gabim, shih më lart.

## Nuk ndodh asgjë kur shtyp një tast

- Tastet nuk funksionojnë ndërsa kursori është në një kuti brenda një paneli. Klikoni në pamjen 3D ose shtypni {{key:Esc}} pasi të keni shkruar (ose {{key:Tab}} për të dalë).
- Tastet me shigjeta dhe {{key:Plus}}/{{key:Minus}} rrotullojnë dhe zmadhojnë pamjen vetëm pasi të keni klikuar në pamje.
- Një dialog është i hapur: përgjigjuni atij së pari.
- Në skicë, {{key:F}} është mjeti Fillet, jo Fit. Përdorni butonin {{ui:Përshtat}}.

## Një buton në shiritin e mjeteve është i çaktivizuar (gri)

- Butonat e veçorive janë gri ndërsa një skicë është e hapur. Mbylleni skicën së pari.
- Mjetet e skicës punojnë vetëm brenda një skice.
- {{ui:Zhbëj}} dhe {{ui:Ribëj}} janë gri kur nuk ka çfarë të zhbëhet ose ribëhet.
- {{ui:Montimi}} kërkon një pjesë me një trup të ngurtë. {{ui:Lidhja}} kërkon dy pjesë në montim. {{ui:Redakto pjesën}} kërkon një pjesë të zgjedhur.
- {{ui:STEP AP242 (trup i saktë i ngurtë)}} dhe {{ui:STEP AP214 (trup i saktë i ngurtë)}} janë gri në një montim: eksportoni çdo pjesë veç e veç. Një program tjetër refuzon skedarin e saktë: provoni {{ui:STEP AP214 (trup i saktë i ngurtë)}}, pastaj {{ui:STEP (me facetë, kernel rrjeti)}}, dhe na tregoni nëpërmjet {{ui:Ndihmë}} › {{ui:Raporto një problem}}.
- {{ui:Shtrirja}}, {{ui:Ndërlidhja}} dhe veçoritë e tjera që kërkojnë një kernel të saktë nuk janë gri: mbeten të klikueshme, tooltip-et e tyre mbarojnë me "nuk është ndërtuar ende (kërkon një kernel të saktë)", dhe klikimi mbi një prej tyre e thotë këtë në shiritin e statusit. Shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
- {{ui:Vizatimi}} kërkon një pjesë me një trup të ngurtë, dhe është gri ndërsa një skicë është e hapur.
- Artikujt e {{ui:Eksporto}} janë gri në një montim: montimet nuk mund të eksportohen ende. Mbylleni, ose redaktoni një pjesë, për të eksportuar.

## Problemet me skicën

### Skica nuk më lë të shtoj një relacion

"Asnjë relacion nuk përshtatet me këtë përzgjedhje. Zgjidhni një ose dy elemente (Shift+klik shton)." Relacioni kërkon një përzgjedhje tjetër. Shih [Relacionet dhe dimensionet e skicës](topic:sketch-relations) për atë që kërkon secili.

### "Mbi-përcaktuar: … nuk mund të plotësohen të gjitha. Zhbëni, ose fshini një prej tyre."

**Shkaku:** relacioni ose dimensioni i ri kundërshton ata që janë tashmë. Skica nuk u zhvendos.

**Rregullimi:** {{key:Mod+Z}}, ose fshini një nga elementët e kuq në listën e panelit të djathtë (zgjidhni **Fshi** pranë tij).

### "Mbi-përcaktuar: … është tashmë e nënkuptuar. Fshijeni."

**Shkaku:** relacioni nuk shton asgjë: të tjerët e detyrojnë tashmë (për shembull Parallel në dy anë të një drejtkëndëshi, ose një dimension që është tashmë i fiksuar). Nuk ka dimensione të drejtuara në këtë ndërtim.

**Rregullimi:** fshijeni. Veçoria ndërtohet gjithsesi, me një paralajmërim.

### "Ato elemente nuk mund të dimensionohen së bashku."

Klikuat, për shembull, një pikë dhe një rreth. Dimensiononi deri te pika e qendrës së rrethit.

### "Një fillet kërkon një kënd ku takohen saktësisht dy vija." / "Ai rreze është shumë e madhe për këto vija."

Klikoni saktësisht në pikën e kthesës së dy vijave të plota. Përdorni një rreze më të vogël se sa lejon vija më e shkurtër.

### Gjeometria kthehet mbrapsht kur e tërheq

Tërheqja do të prishte një relacion ose dimension, kështu që PartCraft e kthen. Vetëm gjeometria blu (e nënpërcaktuar) mund të lëvizet.

### "Kjo skicë nuk mund të hapet: Kërkon Extrude2, që po dështon."

Skica ndodhet mbi një faqe të një veçorie që nuk është ndërtuar. Rregulloni atë veçori së pari, ose hiqni pezullimin e saj, ose kaloni përpara.

## Problemet me veçoritë

| Mesazhi | Shkaku | Rregullimi |
|---|---|---|
| "Bëni një skicë së pari: zgjidhni një plan, Sketch, vizatoni një profil të mbyllur, Exit." | Nuk ka skicë të pashfrytëzuar me kurba, dhe asnjë nuk është zgjedhur | Vizatoni një skicë, ose zgjidhni skicën për t'u përdorur në historik |
| "Skica nuk ka profil të mbyllur për ta shtyrë." (ose "për ta rrotulluar") | Nuk ka lak të mbyllur me vija të ngurta | Mbyllni hendekët; ktheni vijat ndihmëse mbrapsht me {{key:Q}} |
| "Profili është i hapur: një skaj në (x, y) nuk është i lidhur me asgjë." | Një hendek në atë pikë | Hapni skicën, tërhiqeni skajin mbi fqinjin e vet që të ngjitet |
| "Profili degëzohet në (x, y): më shumë se dy skaje takohen aty." | Tre ose më shumë vija takohen në një pikë | Fshini vijën e tepërt, ose ndryshojeni në ndihmëse |
| "Një lak i mbyllur kërkon të paktën tri anë ose një kurbë." | Dy vija përpara e mbrapsht | Vizatoni lakun përsëri |
| "Përgjatë gjithë është për prerje. Përdorni një thellësi për një bosht." | Një bosht i vendosur në Përgjatë gjithë | Vendosni Fund në Me thellësi ose Në mes të planit |
| "Nuk ka asgjë për të prerë në atë anë të skicës. Provoni drejtimin tjetër." | Prerja tregon larg materialit | Shenjoni Kthe drejtimin |
| "Nuk ka asgjë për të prerë ende." / "Nuk ka asgjë për të shpuar ende." | Nuk ka solid përpara kësaj veçorie | Bëni fillimisht një bosht, ose zhvendoseni veçorinë poshtë |
| "Vizatoni një vijë qendrore (një vijë ndihmëse) në skicë për ta rrotulluar rreth saj." | Rrotullim pa bosht | Shtoni një vijë qendrore, ose zgjidhni një vijë te Axis |
| "Profili kalon boshtin. Mbajeni në njërën anë të vijës qendrore." | Profili në të dy anët e boshtit | Vizatoni përsëri gjysmën e profilit |
| "Vendosni pikat e skicës ku do të shkojnë vrimat (mjeti Point), pastaj bëni vrimën." | Nuk ka pika të lira në skicë | Shtoni pika me {{key:P}} |
| "Kanali duhet të jetë më i gjerë se vrima." | Diametri i kanalit nuk është më i madh se Diametri | Bëjeni kanalin më të gjerë |
| "Kanali duhet të jetë më i cekët se vrima." | Kanali më i thellë se një vrimë me thellësi | Bëjeni më të cekët, ose vrimën më të thellë |
| "Zgjidhni veçoritë për t'u kopjuar." | Një model ose pasqyrë pa asgjë të shenjuar | Shenjoni një veçori nën Veçoritë për t'u kopjuar |
| "Extrude2 nuk ka solid për të kopjuar." | Veçoria e kopjuar dështoi ose është e fikur | Rregulloni ose hiqni pezullimin |
| "Kërkon Sketch3, që po dështon." | Një veçori nga e cila varet nuk është ndërtuar | Rregulloni veçorinë që emërton |
| "Faqja mbi të cilën ndodhet është zhdukur (Extrude1 nuk është ndërtuar)." | Faqja e skicës nuk ekziston më | Rregulloni atë veçori, ose fshijeni skicën dhe skiconi përsëri |
| "Pas kësaj nuk mbetet asgjë nga pjesa." | Një prerje hoqi gjithë materialin | Kontrolloni madhësinë dhe drejtimin e prerjes |
| "Kerneli i ngurtë nuk mundi ta ndërtojë këtë (…)." ose "Kerneli i ngurtë nuk mundi ta kombinojë këtë me trupin." | Kerneli refuzoi gjeometrinë | Zhbëni, ose ndryshoni pak madhësitë; faqet që prekin saktësisht mund ta shkaktojnë |
| "Shtrirja: nuk është ndërtuar ende. Kërkon një kernel të saktë, që ky version i PartCraft nuk e ka." (edhe Ndërlidhja, Rib dhe të tjerat) | Një veçori e bërë në një version të mëparshëm që vetëm një kernel i saktë mund ta ndërtojë. Mbetet në historik dhe ruhet e pandryshuar | Pezulloni ose fshijeni; shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet) për atë që duhet të bëni në vend të saj |
| "Një rreth 5 mm nuk përshtatet këtu (…)." / "Një faskë 2 mm …" | Madhësia është shumë e madhe për një faqe pranë skajit, ose qoshja nuk mund të lëmohet | Madhësi më e vogël, ose më pak brinjë për veçori |
| "Fillet: në këtë version vetëm brinjë të drejta ndërmjet dy faqeve të sheshta (kerneli i rrjetës i ndërton). Rrumbulloni ose pjerrësoni brinjët e lakuara në skicë." (edhe Chamfer) | Një brinjë e zgjedhur është e rrumbullakët, si buza e një vrime, ose ndodhet mbi një faqe të lakuar | {{ui:Përzgjidh brinjët}} dhe hiqeni; rrumbulloni ose pjerrësoni atë qoshe në skicë në vend të kësaj |
| "Një fillet rrezja e të cilit ndryshon përgjatë brinjës: nuk është ndërtuar ende (kërkon një kernel të saktë). Jepini një rreze." | **Rreze e ndryshueshme** është shenjuar | Hiqeni shenjën dhe jepni një rreze |
| "Fillet me kernelin e rrjetës: ku takohen brinjët e rrumbullakta, ato prehen, nuk përzihen." (⚠, një paralajmërim) | Brinjët e zgjedhura takohen në një qoshe; rrumbullimet takohen aty me një bashkim të mprehtë | Nuk ka çfarë të rregullohet: pjesa është ndërtuar. Rrumbulloni më pak brinjë nëse bashkimi ka rëndësi |
| "Një brinjë që ajo rrumbullon është zhdukur: brinja ndërmjet Extrude1 dhe Cut2." | Një ndryshim i mëparshëm e hoqi brinjën | {{ui:Përzgjidh brinjët}}, hiqni brinjën e kuqe, zgjidhni të renë |
| "Zgjidhni brinjët në pamje, pastaj shtojini." | Fillet ose faskë nuk ka brinjë | {{ui:Përzgjidh brinjët}} |
| "Zgjidhni faqet për t'u hequr (të hapura), pastaj shell." | Shell nuk ka faqe të hapura | {{ui:Përzgjidh faqet}} |
| "Guaska nuk mund të bëhej me këtë trashësi (…)." | Muri është më i trashë se një pjesë e hollë e modelit ose një rreze fillet | Mur më i hollë, ose fillet më të mëdhenj |
| "Shell: në këtë version hapet vetëm faqe të sheshta (kerneli i rrjetës e ndërton)." | Një faqe e hapur është e lakuar | {{ui:Përzgjidh faqet}} dhe hiqeni; hapni vetëm faqe të sheshta |
| "Draft: në këtë version vetëm faqe të sheshta (kerneli i rrjetës e ndërton)." | Një faqe e pjerrësuar është cilindër, kon ose faqe e lirë | Hiqeni; pjerrësoni vetëm faqe të sheshta |
| "Një faqe që ajo hap është zhdukur (…)." | Një ndryshim i mëparshëm e hoqi faqen | {{ui:Përzgjidh faqet}} përsëri |
| "Fillet1 ndryshon brinjët ose muret e trupit; nuk mund të kopjohet. …" | Një model ose pasqyrë kopjon një fillet, faskë ose shell | Hiqeni shenjën; bëni modelin e prerjeve të parat, pastaj fillet |
| "Ajo ndodhet mbi një faqe që vetëm një kernel i saktë mund ta gjejë: nuk është ndërtuar ende në këtë version." | Një skicë mbi një faqe që kerneli i rrjetës nuk e gjen, si ajo e bërë në një version të mëparshëm | Skiconi mbi një plan bazë ose një faqe të sheshtë të një extrude, dhe vendoseni me dimensione |
| "Ajo përdor një faqe ose brinjë të solidit, që vetëm një kernel i saktë mund ta gjejë: nuk është ndërtuar ende në këtë version." | Një plan, bosht ose pikë referimi mbi një faqe ose brinjë të solidit | Bëjeni nga planet bazë, pikat e skicës ose koordinatat në vend të kësaj |
| "Shtyrja deri te një faqe, faqja tjetër ose një kulm: nuk është ndërtuar ende (kërkon një kernel të saktë)." / "Një konicitet: nuk është ndërtuar ende (kërkon një kernel të saktë)." | Një kusht përfundimi ose konicitet që vetëm një kernel i saktë e ndërton | Përdorni një thellësi Me thellësi ose Në mes të planit që matni; lëreni Konicitetin në 0 |

## Problemet me zgjedhjen

- "Ajo faqe është e lakuar. Zgjidhni një faqe të sheshtë ose një plan për të skicuar." Skicat kërkojnë një faqe të sheshtë. Skiconi mbi një plan bazë dhe vendosni skicën me dimensione.
- Një faqe thotë "Fiksuar aty ku u zgjodh": nuk u bë nga një skaj skice (për shembull një faqe e një kopjeje modeli), kështu që një skicë mbi të mbetet në vend kur ndryshon pjesa.
- Brinjët janë të vështira për t'u goditur: zmadhoni. Një brinjë fiton mbi faqen pranë saj kur treguesi është saktësisht mbi të.

## Problemet me skedarët

| Mesazhi | Rregullimi |
|---|---|
| 'PartCraft hap skedarët e vet .partcraft.json, eksporton nga makro CadCraft për SolidWorks (.cadcraft-sw.json) dhe skedarët STEP. "bracket.igs" nuk është asnjë prej tyre.' | Hapen vetëm ata skedarë (dhe rrjetat STL, OBJ dhe 3MF, dhe skedarët `.3dm`) |
| '"part.stp" nuk është një skedar STEP (nuk fillon me ISO-10303-21).' | Skedari nuk është tekst STEP |
| "Ai skedar STEP është shumë i madh (mbi 60 MB) për t'u importuar këtu." | Thjeshtojeni në burim |
| "Ai skedar është shumë i madh për të qenë një pjesë PartCraft." te pjesa juaj e ruajtur | Një solid STEP i madh i importuar në një version të mëparshëm e bëri skedarin e pjesës mbi 50 MB. Përdorni një kopje më të vjetër pa të |
| "Ai skedar është shumë i madh për të qenë një pjesë PartCraft." | Skedari është mbi 50 MB; nuk është një skedar PartCraft |
| "Ky nuk është një skedar PartCraft (nuk është JSON)." / "Ky nuk është një skedar PartCraft." | Skedari është i dëmtuar ose i një programi tjetër |
| "Ky skedar u ruajt nga një PartCraft më i ri (versioni i skedarit …); ky lexon versionin …" | Hapeni me PartCraft-in më të ri |
| "Extrude2: thellësia është e keqe." (ose një vlerë tjetër) | Skedari u redaktua me dorë ose u dëmtua. Përdorni një kopje më të vjetër |
| Insert në një montim thotë "Part1.partcraft.json nuk ka solid për ta futur." | Skedari i pjesës nuk ka solid. Hapeni, ndërtoni një solid, ruajeni dhe futeni përsëri |

**Skedari im i ruajtur nuk është aty ku prisja.** Ruajtja është një shkarkim: kërkoni në dosjen e shkarkimeve të shfletuesit, ose hapni listën e shkarkimeve nga shiriti i shfletuesit. Shih [Ku shkojnë skedarët tuaj](common:your-files).

**Hapa një pjesë por montimi është ende në ekran.** Pjesa u ngarkua pas montimit. Zgjidhni {{ui:Mbyll}} për ta mbyllur montimin dhe për të parë pjesën. Mbyllni montimet para se të hapni skedarë pjesësh.

## Problemet me vizatimin

| Mesazhi | Rregullimi |
|---|---|
| "Ndërtoni një solid së pari, pastaj bëni vizatimin e tij." | Ndërtoni pjesën së pari |
| "Nuk ka vend në fletë për: detaj. Bëjeni detajin më të vogël ose hiqni një pamje." | **Rrezja e detajit** ose **Shkalla e detajit** më e vogël, ose hiqni prerjen |
| "Një detaj merret nga pamja e përparme, e sipërme, e djathtë ose prerja." | Klikoni mbi një nga ato pamje |
| "Klikoni mbi një nga pamjet." | Klikimi qe mbi letër boshe |
| "Pozicioni kërkon të paktën një referencë datum." dhe mesazhe të tjera kornize | Vendosni datumet që kërkon paneli, ose zgjidhni një karakteristikë tjetër |
| "Pamjet e vizatimit nuk mund të bëheshin: …" | Zhbëni ndryshimin e fundit. Nëse vazhdon, ruajeni, rifreskoni dhe rihapni pjesën |

## Problemet me montimin

| Mesazhi | Rregullimi |
|---|---|
| "Ndërtoni një solid së pari, pastaj vendoseni në një montim." | Pjesa nuk ka ende solid |
| "Shtoni një pjesë të dytë së pari (Add copy, Insert, ose Edit › Duplicate)." | Një lidhje kërkon dy pjesë |
| "Zgjidhni një faqe në një pjesë tjetër." | Të dyja faqet e një lidhjeje duhet të jenë në pjesë të ndryshme |
| "Ajo faqe është e lakuar. Zgjidhni një faqe të sheshtë …" | Lidhjet nisin nga faqe të sheshta. Pastaj përdorni **Qendëro në** për një vrimë ose bosht rrotullimi |
| "Bracket2 nuk është e lidhur me pjesën e mbërthyer, prandaj mbetet aty ku u vendos." | Shtoni një lidhje nga ajo me një pjesë të vendosur |
| "Revolute3 mbyll një lak që nuk mund të mbyllet: është jashtë me 2.000 mm. Kontrolloni faqet, shmangiet dhe kufijtë e lidhjeve të lakut." | Pjesët nuk mund të takohen të gjitha: kontrolloni gjatësitë, faqet që përdor secila lidhje, shmangiet (pjesët e grumbulluara faqe më faqe duhet të përputhen në thellësi) dhe kufijtë; ose hiqni një lidhje nga laku |
| "Faqja që përdor kjo lidhje është zhdukur nga Bracket." / "Boshti që përdor kjo lidhje është zhdukur nga Bracket." | Pjesa u redaktua. Hiqeni lidhjen dhe bëjeni përsëri |
| "Boshti shtrihet përgjatë faqes, kështu që nuk mund të vendosë qendrën e lidhjes." | Zgjidhni një bosht që kalon faqen, ose "Origjina e vetë faqes" |
| "Një montim mban të paktën një pjesë. Mbylleni në vend të kësaj." | Përdorni {{ui:Mbyll}} |

**Pjesët janë lidhur por në vend të gabuar.** Vendosni **Qendëro në** për të dy anët e lidhjes në vrimat ose boshtet e rrotullimit që duhet të përputhen, pastaj rregulloni **Këndi (°)** dhe **Shmangia (mm)**.

## Është i ngadaltë

- Vendosni **Kurbat** në Normal ose Coarse gjatë modelimit; kaloni në Fine përpara eksportit.
- Numrat e mëdhenj të modeleve (qindra kopje) marrin kohë për t'u rindërtuar në çdo ndryshim. Pezulloni modelin ndërsa punoni në veçori të tjera.
- Clash dhe kontrolli i lëvizjes krahasojnë çdo çift pjesësh; montimet e mëdha marrin më shumë kohë.
- Mbyllni skedat e tjera të rënda. PartCraft punon me procesorin dhe grafikën e kompjuterit tuaj.

## Ende i ngecur

Ruajeni skedarin së pari ({{key:Mod+S}}), pastaj rifreskoni faqen dhe hapeni përsëri. Nëse një veçori prapë dështon, zgjidheni, lexoni mesazhin e saj, dhe provoni {{key:Mod+Z}} për t'u kthyer te gjendja e fundit e mirë.
