---
title: Sipërfaqe të lira (NURBS)
summary: Kurba dhe sipërfaqe të lëmuara pranë pjesës — loft, shtrirje, rrjete kurbash, arnime me katër skaje, përzierje, shkurtime — me vazhdimësi G0, G1 dhe G2 të matur mbi sipërfaqet e sakta, trupa me bashkim, zbritje dhe prerje të pjekur në pjesë, pamje zebra dhe lakimi, faqe të përshtatura me një skanim me gabimin e matur, dhe skedarë STEP ose IGES. Mbahet në skedarin e pjesës.
keywords: nurbs, skanim, inxhinieri e kundërt, përshtat, rrjet në sipërfaqe, re pikash, stl, shkurto, i shkurtuar, vrimë, prerje, trup, trupa, boolean, bashkim, zbritje, kryqëzim, diferencë, qep, i mbyllur, pjek, forma e lirë, sipërfaqe, sipërfaqe, b-spline, bspline, kurbë, spline, loft, shtrirje, shinë, rrjetë, coons, arnim, përzierje, përputh, vazhdimësi, g0, g1, g2, tangjente, lakim, zebra, pikat e kontrollit, nyje, shkallë, step, iges, klasa A, trupi i anijes, lëmim
from: 64ed5196
---

Hapësira e punës **Sipërfaqet** bën kurba dhe sipërfaqe të lëmuara të llojit që përdoren për guaska produktesh, karroceri makinash dhe trupa anijesh: NURBS, të njëjtën matematikë që përdorin modelues të tjerë sipërfaqesh. Çdo gjë matet mbi sipërfaqet e sakta, kurrë mbi trekëndëshat që sheh. Madhësitë janë në milimetra, si në pjesën tjetër të PartCraft.

Zgjidh **Sipërfaqet** te kutia **Hapësira e punës**. Shiriti i veglave ka {{ui:Kurbë}}, {{ui:Ndërlidhja}}, {{ui:Shtrirja}}, {{ui:Përputh}} dhe {{ui:Zebra}}; çdo komandë është në panelin në të djathtë. Një komandë thotë çfarë i nevojitet akoma: kliko kurba ose sipërfaqe në pamje (afër një brinje ose një skaji kur kërkon një të tillë) ose zgjidhi nga lista; shkruaj pikat, ose kliko ato mbi faqet e pjesës (jashtë pjesës ato bien mbi planin e tokës), pastaj shtyp Enter.

Kurbat dhe sipërfaqet ruhen në skedarin e pjesës pranë trupit. Ato nuk ndryshojnë veçoritë e pjesës: paneli ka **Zhbëj** dhe **Ribëj** të veta, një hap për çdo komandë.

## Kurbat

- **Kurbë përmes pikave** kalon nëpër çdo pikë që kliko. **Kurbë me pikat e kontrollit** ndjek në vend të kësaj një kafaz pikash.
- **Fut nyjë**, **Ngre shkallën** dhe **Ul shkallën** ndryshojnë mënyrën si përshkruhet një kurbë pa e lëvizur (ulja refuzohet kur kurba do të lëvizte më shumë se toleranca). **Rindërto kurbën** i jep një numër të ri pikash kontrolli dhe thotë sa u lëvizi.
- **Përputh kurbën** bën fundin e një kurbe të takojë atë të një tjetre me G0 (prekje), G1 (drejtim i njëjtë) ose G2 (edhe lakim i njëjtë).
  **Përzierje kurbe** shton një kurbë të re midis dy skajeve, G1 ose G2.

## Sipërfaqet

- **Loft** nëpër dy ose më shumë kurba, **Sipërfaqe vijëzore** midis dy, **Nxjerrja e kurbës**, **Rrotullimi i kurbës**.
- **Shtrirje përgjatë një shine** mbart një profil përgjatë një shtegu pa e përdredhur; **Shtrirje përgjatë dy shinave** mban skajet e profilit në të dyja shinat. Shtrirjet përshtaten: rezultati thotë sa afër qëndroi me shtrirjen e vërtetë.
- **Sipërfaqe nga rrjeti i kurbave** kalon nëpër një rrjet kurbash (secila kryqëzon secilën nga të tjerat një herë).
  **Arnim nga katër brinjë** mbush katër kurba që takohen në qoshet e tyre.
- **Përputh sipërfaqen** bën një brinjë sipërfaqeje të takojë një fqinj me G0, G1 ose G2; **Përzierje sipërfaqe** shton një sipërfaqe midis dy brinjëve.
- **Sipërfaqe ofset**, **Zgjat sipërfaqen** (sipërfaqja vazhdon ashtu si po shkonte), **Rindërto sipërfaqen**.

## Kontrollimi i cilësisë

Tabela **Brinjët e përbashkëta** liston çdo brinjë që ndajnë dy sipërfaqe, me hendekun (mm), këndin midis tyre (°) dhe kërcimin e lakimit (1/mm), dhe nëse kjo e bën G0, G1 ose G2. Një brinjë që është më e keqe se ç'kërkove shfaqet te **Problemet** me një rregullim **Përputh**.
Vijat **Zebra** dhe ngjyrat e **lakimit** vijnë nga sipërfaqja e saktë: vija që kalojnë pa u thyer përtej një brinje do të thotë G1; vija që ruajnë edhe gjerësinë e tyre do të thotë G2.

G0–G2 matën në 33 pika për brinjë. **G3 dhe cilësia "klasa A" nuk maten** dhe nuk pretendohen.

## Shkurtimi i një sipërfaqeje

Grupi **Shkurtimi** pret një sipërfaqe pa ndryshuar formën e saj: sipërfaqja mban të gjitha pikat e kontrollit të saj, dhe shfaqet, numërohet dhe shkruhet vetëm pjesa brenda konturit. **Shkurto në drejtkëndësh** dhe **Shkurto me rreth** punojnë mbi një pjesë (0 deri 1) të sipërfaqes në secilën drejtim, kështu që nuk kanë nevojë për zgjedhje në pamje; **Shkurto me kurbë** pranon një kurbë të mbyllur që shtrihet mbi sipërfaqen (projektohet në sipërfaqe, dhe refuzohet me fjalë kur është e hapur ose më shumë se toleranca larg). Shëno **Pritë vrimë** për të hequr brendësinë e konturit; lëre të çaktivizuar për të mbajtur vetëm brendësinë. Një sipërfaqe mund të ketë një kontur të mbajtur dhe çdo numër vrimash; një kontur që kryqëzon një tjetër refuzohet. **Hiq shkurtimin** shfaq përsëri gjithë sipërfaqen. {{ui:Zhbëj}} i panelit e kthen një shkurtim mbrapsht si çdo hap tjetër.

STEP e mban shkurtimin si kufij të faqes dhe IGES si sipërfaqe të shkurtuar (entiteti 144); të dyja e lexojnë përsëri.

## Trupat dhe Boolean-et

Grupi **Trupat** kthen sipërfaqet në trupa të mbyllur dhe i bashkon. Një trup këtu është një grup sipërfaqesh të panelit që së bashku mbyllin një vëllim; faqet e tij mbeten sipërfaqe NURBS të sakta me shkurtimet e tyre.

- **Trup kutie**, **Trup cilindri** dhe **Trup sfere** bëjnë një trup nga madhësi të shkruara (në mm): një kuti me gjashtë faqe të sheshta, një cilindër me anë të rrumbullakët dhe dy skaje të sheshta të shkurtuara sipas rrethit, një sferë me një sipërfaqe të vetme të rrotulluar.
- **Trup nga sipërfaqet** grupon sipërfaqe që ke bërë vetë. Zgjidhi ato, ose mos zgjidh asnjë për të përdorur çdo sipërfaqe të shfaqur që s'është ende në një trup. Qepen së bashku brenda tolerancës: nëse nuk mbyllen, asgjë nuk ndryshon dhe paneli thotë sa brinjë mbeten të hapura dhe sa afër duhet të takohen.
- **Bashkim**, **Zbritje** (trupi i dytë hiqet nga i pari) dhe **Kryqëzim** (vetëm ajo që të dy ndajnë) marrin dy trupa: kliko një faqe të secilit në pamje, ose shtyp **Zgjidh** te lista **Trupat**. Shëno **Mbaj dy trupat** për t'i lënë ata pranë rezultatit.

Një Boolean mban çdo faqe mbi sipërfaqen e saj të saktë dhe e pret me kontur të rinj shkurtimi përgjatë kryqëzimit. Rreshti i rezultatit jep numrat e matur: sa duhej të lëvizin pikat e motorit të trupave për të qëndruar mbi sipërfaqet e sakta (kurrë më shumë se toleranca), sa afër janë pikat e kryqëzimit me të dy sipërfaqet (zakonisht disa milionëshe mm), vëllimin, dhe nëse faqet e reja mbyllen përsëri kur qepen nga e para mbi sipërfaqet e tyre të sakta. Vëllimet maten mbi trekëndësha brenda tolerancës (0.05 mm përveç nëse vendos një tjetër), kështu që vëllimi i një sfere ose cilindri del pak më i ulët se ai i saktë: një tolerancë më e vogël afrohet më shumë. Një Boolean që nuk mund të bëhet pa probleme (trupat nuk ndajnë asgjë, një kontur do të kryqëzonte veten) refuzohet me fjalë dhe nuk ndryshon asgjë. Një Boolean është një hap i {{ui:Zhbëj}} të panelit.

Te lista **Trupat**, **Çgrupo** i mban faqet si sipërfaqe të thjeshta; koshi heq trupin dhe faqet e tij.

## Rrumbullakimet dhe trashja

**Rrumbullakim mes faqeve** rrumbullakos brinjën ku takohen dy faqe të një trupi: zgjidh dy faqet (në pamje, ose me **Zgjidh** në listë), shkruaj **rrezen** dhe, për një rreze që ndryshon përgjatë brinjës, **rrezen në fund** (0 mban një rreze). Një top me atë rreze rrokullisët përgjatë brinjës duke prekur të dy faqet; rrumbullakimi është harku i saktë rrethor që lë në çdo pikë, i bashkuar në një sipërfaqe, dhe të dy faqet shkurtohen aty ku topi i prek. Një brinjë e jashtme humbet material, një qoshe e brendshme fiton. Rreshti i rezultatit jep atë që u mat: sa larg është sipërfaqja e rrumbullakimit nga topi rrokullisës midis pikave nga të cilave u ndërtua (pikat shtohen derisa të jetë brenda një të katërtës së tolerancës), këndi më i madh midis rrumbullakimit dhe secilës faqe përgjatë vijave të prekjes, dhe të njëjtat numra si te një Bashkim. Një rreze që nuk përshtatet (topi do të dilte nga një faqe, ose një faqe lakohet më ngushtë se rrezja) refuzohet, duke emërtuar faqen, dhe asgjë nuk ndryshon.

**Rrumbullako disa brinjë** rrumbullakos shumë brinjë në një hap: zgjidh dy faqet e brinjës së parë, pastaj dy faqet e të radhës, e kështu me radhë (një faqe mund të jetë në disa çifte, për shembull faqja e sipërme e një kutie në katër prej tyre); të gjitha brinjët marrin rrezen që shkruan. Çdo rrumbullakim llogaritet mbi trupin siç ishte, pastaj priten njëri pas tjetrit, kështu që rendi nuk ka rëndësi. Aty ku dy brinjë të rrumbullakuara takohen në një qoshe, brinjët e tjera mbeten të mprehta, dy rrumbullakimet hyjnë njëri në tjetrin përgjatë kurbës së kryqëzimit (një palosje). Aty ku tre brinjë të jashtme të rrumbullakuara të tre faqeve të sheshta që formojnë kënd të drejtë takohen me një rreze, qoshja është një **copë sfere** tangjente me të tre rrumbullakimet (çaktivizo **Qoshet** për të marrë qoshen e palosur); një brinjë duhet të jetë të paktën dy herë rrezja e gjatë aty ku të dy skajet e saj janë qoshe të tilla. Rreshti i rezultatit thotë sa brinjë u rrumbullakuan dhe si dolën qoshet. Brinjët e brendshme mund të rrumbullakosen gjithashtu së bashku, por një rezultat që nuk mbyllet përsëri vetëm raportohet (rreshti e thotë), kështu që kontrollo.

**Trashëso në trup** i jep një sipërfaqeje trashësi: zgjidhe, shkruaj **trashësinë**, dhe shëno **Ana tjetër** për ta rritur në drejtimin tjetër. Faqja ofset përshtatet me sipërfaqen dhe matet ndaj saj (rreshti i rezultatit jep ndryshimin më të madh nga trashësia); muret ndjekin çdo brinjë dhe çdo kontur shkurtimi. Nëse sipërfaqja lakohet më ngushtë se trashësia në atë anë, ose një pjesë tjetër e saj është më afër se trashësia, refuzohet, duke emërtuar sipërfaqen dhe vendin, dhe asgjë nuk ndryshon.

## Pjekja e një trupi në pjesë

**Pjek** (në shiritin e Sipërfaqeve), ose **Pjek në pjesë** te lista **Trupat**, e bën trupin një trup të pjesës, ashtu si një STL i hapur bëhet një: zgjidh trupin, nëse **shtohet** te pjesa, **pritet** prej saj ose **kryqëzohet** me të, dhe tolerancën (sa larg mund të jenë trekëndëshat nga sipërfaqet e sakta). Është një hap i Zhbërjes së pjesës dhe shfaqet në listën e veçorive si një import me emrin e trupit. Pjesa mban trekëndëshat, kështu që hapet dhe rindërtohet pa sipërfaqet; trupi i saktë mbetet në Sipërfaqe, kështu që mund ta pjekësh përsëri pas një ndryshimi.

## Skedarët

Eksporto **STEP** (AP242) ose **IGES** me kurbat dhe sipërfaqet ashtu si janë saktë (kurba dhe sipërfaqe B-spline, asgjë e kthyer në trekëndësha). Çdo sipërfaqe është faqja e vet, me shkurtimin e saj; një trup shkruhet si një guaskë e mbyllur, çdo brinjë e ndarë nga dy faqet e saj siç presin programet e tjera CAD (rreshti i statusit thotë sa trupa dolën në atë mënyrë). Në IGES i njëjti trup është një B-rep trupi të vetëm mbi guaskën e mbyllur 514 (entiteti 186, faqet 510, unazat 508, një listë brinjësh 504 dhe një listë kulmesh 502); një trup, faqet e të cilit nuk çiftohen brinjë për brinjë, shkruhet si faqe të ndara, dhe rreshti e thotë. **Importo…** e lexon një trup të tillë përsëri si trup, nga STEP dhe nga IGES.

## Lëmimi i trupit të anijes

**Lëmo** (në shiritin e Sipërfaqeve) mat çdo kurbë mbi formën e saj të saktë — pikat e lakimit (ku ndryshon nga përkulja në një drejtim në tjetrin), lakimin më të madh, kërcimet e lakimit te nyjet e tij dhe trazimin e saj — dhe rindërton ato me pikat e kontrollit më pak që qëndrojnë brenda tolerancës që jep dhe nuk shtojnë pikë lakimi. Vizato seksionet, ujëvijat dhe kurbat e brendshme si kurba, lëmoi, pastaj **Ndërlidh** trupin nëpër seksione dhe kontrollo me **Zebra**. Kurbat e pa lëmuara shfaqen gjithashtu te **Problemet** me një rregullim **Lëmo këtë kurbë**. Një vijë që duhet të ndryshojë drejtim (një seksion në formë S) mban atë një pikë lakimi. Zhvendosja, qendrat dhe krahët e rivendosjes së trupit të anijes vijnë nga pjesa e ngurtë: shih mjetin e hidrostatikës.

## Sipërfaqe nga një skanim (inxhinieri e kundërt)

Hap pjesën që mban rrjetën e skanuar (një STL i hapur ose një trup i pjekur), zgjidh **Sipërfaqet** te kutia **Hapësira e punës**, dhe te grupi **Skanimi** zgjidh **Përshtat sipërfaqet me skanimin**; rrjeta e ndërtuar e pjesës është skanimi. Veglat kërkojnë **plane**, **cilindra**, **sfera** dhe **kone** (sipërfaqet e sakta nga të cilat është bërë një pjesë e punuar me makinë; çdo rresht tregon rrezen ose gjysmëkëndin që gjeti), gjejnë **rrumbullakime** (brinjë dhe qoshe të rrumbullakosura: një cilindër ose sferë e vogël që shkon tangjente në dy ose më shumë faqe të tjera, e shfaqur me rrezen dhe faqet që lidh), **rrumbullakime buzë** (një torus: brinja e rrumbullakosur ku një faqe e sheshtë takohet me një cilindër ose kon, e shfaqur me rrezen e vet dhe rrezen e unazës) dhe **rrumbullakime të ndryshueshme** (një brinjë e rrumbullakosur rrezja e së cilës ndryshon përgjatë saj, e shfaqur me rrezen në çdo skaj), përshtat **një copë të lirë** me një sipërfaqe të lëmuar e pak të lakuar, dhe pret çdo faqe sipas konturit të pjesës së skanimit nga ku erdhi, që vrimat dhe qoshet të mbeten. Opsionet: **toleranca** (sa larg, në mm, mund të jetë një pikë skanimi nga një plan ose cilindër dhe ende t'i përkasë, dhe objektivi për një copë të lirë), **copa më e vogël** (një pjesë e sipërfaqes totale) dhe **faqet më të shumta**. I njëjti skanim dhe të njëjtat opsione japin gjithmonë të njëjtat faqe.

Rezultati është një tabelë, një rresht për çdo faqe: lloji i saj, sa trekëndësha erdhi prej tyre, dhe gabimi **i matur nga skanimi deri te faqja** (rms, më i madhi dhe pjesa e pikave brenda tolerancës). Pikat e matura janë kulmet e skanimit dhe mesi i çdo trekëndëshi. Gabimi nuk matet në drejtimin tjetër (faqe deri te skanimi), kështu që një faqe që shtrihet përtej skanimit nuk do të dukej. Shënimi nën tabelë thotë edhe sa nga sipërfaqja ishte shumë e vogël për t'u përshtatur. Në pamje, pikat e skanimit ngjyrosen sipas **hartës së devijimit**: blu mbi faqe, jeshile gjysmë rruge drejt tolerancës, e kuqe në tolerancë ose më shumë (çaktivizo **Trego hartën e devijimit** për ta fshehur). Copat që palosen mbi veten e tyre (për shembull një tub i mbyllur i përshtatur me copa të lira) listohen si të pa përshtatura, dhe nuk detyrohen kurrë në një sipërfaqe të vetme.

**Qep sipërfaqet në një trup** qep çdo sipërfaqe të shfaqur që s'është në trup në një trup të vetëm të mbyllur. Faqet e skanimit takohen vetëm brenda gabimit të vetë skanimit, kështu që provon distancën më të vogël bashkimi që mbyll (kurrë më shumë se **distanca e qepjes** që vendos) dhe refuzon me fjalë kur faqet nuk mbyllen. Nuk mbulon kurrë një hendek. Një kuti me brinjë të rrumbullakosura qepet kur rrumbullakimet e saj u gjetën si faqe të veta; distanca e bashkimit që u mbyll shfaqet në rezultat. Trupi më pas punon me Bashkim, Zbritje, Kryqëzim dhe **Pjek në pjesë**.

Çfarë nuk bën: një **rrumbullakim buzë** (një torus) kërkohet vetëm përreth boshtit të një cilindri ose koni të gjetur tashmë, dhe një **rrumbullakim i ndryshueshëm** vetëm përgjatë një brinje mjaft të drejtë (seksionet e tij priten në kënd të drejtë me një drejtim); në vende të tjera dalin si copa të lira kur janë mjaft të lëmuara, dhe lihen jashtë kur jo; sferat, konet dhe rrumbullakimet gjenden me kampionim të rastësishëm, kështu që një e vogël (disa trekëndësha) mund t'i shpëtojë; harta e devijimit tregon largësinë nga skanimi deri te faqet, jo anasjelltas; skanimet shumë të mëdha (mbi 300,000 trekëndësha) refuzohen këtu. Faqet e një cilindri me rrotullim të plotë priten përreth vrimave, me bashkimin vendosur aty ku nuk ka vrimë. Kontrollo çdo faqe kundrejt skanimit tënd përpara se t'i besosh.

## Nuk është ndërtuar ende

Rrumbullakimi i brinjëve që takohen në një qoshe të faqeve të lakuara ose me rreze të ndryshme (një përzierje kulmi), një rrumbullakim midis faqesh që nuk takohen, një rrumbullakim i brendshëm që mbaron në një faqe të pjerrët ose të lakuar, Booleanët dhe rrumbullakimet e llogaritura mbi sipërfaqet pa trekëndësha (këtu motori i trupave punon mbi trekëndësha brenda tolerancës, dhe çdo pikë kthehet më pas mbi sipërfaqet e sakta), një trup i pjekur që ndjek sipërfaqet kur ndryshojnë, shkurtimi i një sipërfaqeje nga një sipërfaqe tjetër jashtë një Boolean-i, mbushja e vrimave me më shumë se katër brinja, projektimi i kurbave mbi sipërfaqe.
