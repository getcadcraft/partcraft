---
title: Það sem er ekki smíðað enn
summary: Allt sem þessi PartCraft-útgáfa gerir ekki enn, frá snúnum sveigjum til tommuskjás, teikningamálsetninga og undirsamsetninga, ásamt því sem þú gerir í staðinn í dag.
keywords: vantar, ekki enn, takmarkanir, takmörk, vegvísir, nákvæmur kjarni, ávala, skábrún, skel, ferilsdráttur, brú milli sniða, snerting í enda brúar, ávala á fleti, jöfnur, tommur, teikningamálsetningar, undirsamsetningar, ský, spjaldtölva, sími
from: 97b10a29
---

PartCraft er snemma útgáfa. Þessi síða telur upp það sem hún gerir ekki enn, svo að þú leitir ekki að því, og hvað þú gerir í staðinn í dag. Ekkert hér hefur dagsetningu.

## Þarf nákvæman kjarna

Þessi útgáfa byggir allt með netkjarnanum (sjá [Netkjarninn](topic:solid-kernels)). Allt hér að neðan þarf nákvæman rúmfræðikjarna, sem þessi útgáfa hefur ekki enn. Hlutar sem vistaðir eru með þessum eiginleikum opnast enn: eiginleikarnir haldast í sögunni, merktir sem ekki smíðaðir, og þeir eru varðveittir þegar þú vistar.

| Ekki smíðað enn | Í staðinn, í dag |
|---|---|
| {{ui:Ávala}} og {{ui:Skábrún}} á kringlóttum brúnum; ávölur þar sem radíusinn breytist eftir brúninni; rúnnanir sem blandast mjúklega þar sem þær mætast (netkjarninn sker þær í horn) | Ávala og Skábrún virka á beinum brúnum milli flatra flata; rúnaðu önnur horn í skissunni áður en þú dregur út ({{ui:Ávala}} í skissu, {{key:F}}) |
| {{ui:Skel}} sem opnar bogna fleti; veggir af mismunandi þykkt | Opnir flatir fletir; bættu við efni með útdráttum þar sem veggur þarf að vera þykkari |
| {{ui:Ferilsdráttur}}, {{ui:Brú milli sniða}}, {{ui:Halli}} á bogna fleti; útdráttur upp að fleti, næsta fleti eða hnúti; keilulaga útdrættir | Dragðu út eða snúðu, í þrepum þar sem þarf; dragðu út á dýpt sem þú mælir |
| {{ui:Rif}}, {{ui:Grunnflans}}, {{ui:Jaðarflans}} og flöt mynstur | Dragðu út plötuna eða sniðið af rifinu |
| Yfirborð: að ljúka {{ui:Mótun}} inn í hlutinn, {{ui:Plástur}}, {{ui:Skeyting yfirborðs}}, {{ui:Gordon-yfirborð}}, {{ui:Sauma}}, {{ui:Þykkva}}, {{ui:Jafnfærsla yfirborðs}}, {{ui:Lengja yfirborð}}, {{ui:Stytta yfirborð}} | Ekki í boði |
| Nokkrir líkamar: {{ui:Sameina}}, {{ui:Færa líkama}}, {{ui:Skala líkama}}, {{ui:Mynstur á braut}}, eiginleikar sem búa til nýjan líkama | Einn fasthluti; mynstur og speglun afrita eiginleika |
| Skissur, plön, ásar og punktar á fleti sem aðeins nákvæmur kjarni getur fundið (flötur gerður af ávölu, veggur holu, flötur úr innfluttum fasthluta) | Skissaðu á grunnplön, viðmiðunarplön og flata fleti útdrátta og snúninga |
| Niðurstaða almennrar hönnunar sem er opnuð sem hluti eða bætt við hann (hún verður innfluttur fasthluti) | Sæktu niðurstöðuna sem STL eða STEP |
| Breyting á bognum flötum opinnar STEP-skráar sem nákvæmum yfirborðum; nákvæmt STEP af spline-, sveigðum og snúnum flötum úr STEP-skrá, spline-hliðum, mótuðum þráðum, STL / OBJ / 3MF-líkömum og samsetningum; STEP fyrir önnur hlutamótunarforrit | {{ui:Opna}} les STEP sem þríhyrninga og heldur flötum, strokkum, keilum, kúlum og torum skráarinnar fyrir útflutninginn ([Opna STEP-skrá](topic:import-step)); {{ui:Flytja út}} › {{ui:STEP AP242 (nákvæmt fast efni)}} skrifar sérhvern greinanlegan flöt nákvæmlega og heldur þeim sem þríhyrningum ([Flytja út](topic:export-files#for-other-cad-programs-step)); fjölvinn fyrir annað hlutamótunarforrit skrifar enn |
| Sannar bogar í teikniskoðunum | Skoðanir og sniðskoðanir eru teiknaðar út frá þríhyrningunum |
| Nákvæmt rúmmál, flatarmál og fjarlægðir | {{ui:Mæla}} gefur tölur þríhyrnings-fasthlutans, aðeins of lágar á kringlóttum hlutum; fínni stillingin **Ferlar** færir þær nær |

Sumar línur í töflunum hér að neðan stinga upp á einum af þessum eiginleikum sem leið í kringum eitthvað annað. Þær tillögur gilda þegar nákvæmi kjarninn er kominn aftur.

## Eiginleikar

| Ekki smíðað enn | Í staðinn, í dag |
|---|---|
| Andlitsávalur, fullar ávalur, ávalur með radíus settum á punktum meðfram brún | Fasta eða línulega breytilega {{ui:Ávala}}; nokkrir ávölueiginleikar |
| Skeljar með mismunandi veggþykkt | Ein {{ui:Skel}}-þykkt; bættu við efni með útdráttum þar sem veggur þarf að vera þykkari |
| Halli á frjálsum (spline) flötum | {{ui:Halli}} virkar á flötum, sívölum og keilulaga fleti |
| Snúnir ferlar, þunnveggs- og yfirborðsferlar; endasnerting á Brú-eiginleikanum; brú með einni leiðarteina; spline-slóðir | {{ui:Ferilsdráttur}} með fastri stefnu eða endaskala; brú með tveimur eða fleiri leiðarteinum: sjá [Ferilsdráttur, brú og halli](topic:sweep-loft-draft) |
| Rif úr bogum eða splines; rif sem vaxa ferkantað við skissuna (úr efstu skoðun); halli á rifum; nokkur rif úr einni skissu | {{ui:Rif}} úr einni keðju lína í plani rifsins sjálfs: sjá [Rif og stoðir](topic:rib) |
| „Upp að“ bognum fleti, „upp að næsta“ sem stoppar á bognum fleti | Upp að flötum fleti eða viðmiðunarplani |
| Gagnbornar holur, tommu- og pípuþræðir, keilulaga þræðir, endar þráða og afskornar þráðarbyrjanir | Gagnbor með litlu dýpi; ISO-mælikvarða- og trapísuþræðir, bæði útlitsþræðir og mótaðir: sjá [Þræðir á ásum og borunum, teiknaðir eða mótaðir](topic:threads) |
| Þunnveggs-útdrættir | Teiknaðu báða veggi sniðsins |
| Mynsturafrit sleppt eitt í einu, fyllimynstur | Notaðu aðskilda eiginleika; mynstur eftir ferli: {{ui:Mynstur á braut}} |
| Afrit mynstra, speglar, ávölur, skábrúnir, skeljar og innfluttir fasthlutar | Afritaðu skissuna eða eiginleikann sem þeir eru byggðir á, eða mynstraðu hann |
| Nákvæm (G1) snerting á sérstökum punktum forms; sameining plástra forms í stærri fleti | Hækkaðu stig formsins: nálguðu plástrarnir verða minni; sjá [Formfrjáls form með Form](topic:form-surfaces) |
| Form úr nokkrum aðskildum lokuðum hlutum í einum eiginleika; brýr á milli forma | Eitt lokað stykki í hvern Form-eiginleika; tengdu þau með Join |
| Val á yfirborðslíkömum í skjánum (nema snerti- og plástrapunktar); yfirborðsávalur; afturtrimun; G2-plástrar; Gordon-yfirborð tangent við bogna nágranna (tangent við plön og flata fleti er smíðað) | Veldu þá eftir nafni í spjaldi eiginleikans; þykktu fyrst, síðan ávalaðu fasthlutann |
| Listi yfir líkama í sögunni; að sleppa földum líkömum úr útflutningi | Endurnefndu og faldu líkama í líkamalista spjaldsins; eyddu eða bældu eiginleikann sem bjó til líkama til að sleppa honum |
| Ójöfn stærðarbreyting sem heldur sívölum og keilum greinanlegum; ójöfn skölun á fleti úr útfærslu | {{ui:Skala líkama}} gerir bogna fleti að lokuðum B-splines (innan 0,0000004 mm); jöfn skölun helst nákvæm |
| Sameining yfirborðslíkama; Minkowski-summur | {{ui:Sauma}} eða {{ui:Þykkva}} fyrst, síðan {{ui:Sameina}} |
| Vikmarksgreining: keðjur sem beygja horn (2D og 3D vigurlykkjur), næmni reiknuð út frá rúmfræðinni, Monte Carlo með öðrum dreifingum, stærðarvikmörk á málsetningum skissu, vikmarksbónus út frá efnisstöðu | {{ui:Vikmarkskeðja}} í samsetningu: ein stefna, versta tilfelli og RSS, vikmörk slegin inn, úr almennu vikmarki titilreitsins eða úr GD&T-römmum: sjá [Vikmarkskeðjur](topic:tolerance-stackup) |
| Hreiðrun: skurðarröð og innleiðslur, skurðir á sameiginlegum brúnum einu sinni, hlutar sem verða að haldast saman; leifar af rúllum, efni sem deilt er milli verkefna | {{ui:Raða flötum hlutum á plötur…}} með bili, spássíum, snúningum og stefnu korns: sjá [Raða flötum hlutum á plötur](topic:nest-flat-parts); afgangsplötur eru geymdar og notaðar fyrst: sjá [Geyma og nota afskurð](topic:nest-offcuts); skipuleggðu skurðinn í hugbúnaði skurðvélarinnar |
| Plötumálmur: faldar, skekkjur, skástykki og útlínuflansar; flansar á bognum brúnum eða á fletum beygðs grunnflans; teiknaðar beygjur; hornalokanir; mótunartól; breyting fasthluta í plötumálm; flöt beygðs grunnflans með skurðum í; beygjutöflur | {{ui:Grunnflans}} (plata eða beygt snið), {{ui:Jaðarflans}} á beinum brúnum plötu með beygjuskurðum, og flata mynstrið með K-stuðli: sjá [Plötumálmur](topic:sheet-metal) |
| Hallagreining á samsetningum; að finna skiptilínuna; greining á veggþykkt | {{ui:Greining hallahorna}} á hlutanum í Hönnun: sjá [Athugaðu halla fyrir mótun og steypu](topic:draft-analysis); opnaðu hvern hluta samsetningar til að athuga hann |

## Skissur

| Ekki smíðað enn | Í staðinn, í dag |
|---|---|
| Sporbaugar, snertibogar, keilur, splines með settri gráðu eða vigtum (NURBS) | Splines (þriðju gráðu), bogar og hringir með Snerti-tengslum |
| Punktur á spline (tengsl), krappatengsl (G2) | Settu punkt splines þar sem hann á að fara í gegn |
| Afrit af splines sem fylgja síðari breytingum; forskriftir á keðjum með skörpum spline-hornum | Forskrifaðu aftur eftir breytingu; ávalaðu hornið fyrst |
| Mynsturafrit sem haldast tengd upprunanum; mynstur eftir ferli | Mynstraðu aftur eftir breytingu |
| Varpun frjálsra eða hallandi hringlaga brúna, varpuð rúmfræði sem fylgir hlutanum | Varpaðu beinum og samsíða hringlaga brúnum, og málsettu síðan |
| Drifin (viðmiðunar) mál | Lestu stærðir af spjaldinu eða staðreyndum hlutarins |
| Samlínutengsl | Samsíða með 0 fjarlægð |
| Límt inn í annað forrit (kerfisklippiborðið) | Fluttu út DXF, STEP, STL eða 3MF |
| Slá inn boga, hlutfallsleg eða pólhnit | Sláðu inn línur og hringi; teiknaðu boga með Boga-verkfærinu |
| Val á rúmfræði án bendils | Þarf smell eða snertingu |

## Breytur og einingar

| Ekki smíðað enn | Í staðinn, í dag |
|---|---|
| Stillingar sem breyta efnum; CSV-hönnunartafla sem slekkur á eiginleikum | Stillingar stilla breytur og kveikja og slökkva á eiginleikum: sjá [Stillingar og hönnunartöflur](topic:design-tables); `partcraft variants` smíðar vistaðar stillingar eftir nafni, með slökktum eiginleikum: sjá [Gerðu afbrigðapakka úr stillingunum þínum](topic:variant-pack) |
| Jöfnur á tölum í spjöldum nýjustu eiginleikanna (plan, ferilsdráttur, halli og þess háttar) | Skrifaðu þær í skriftu eða með `partcraft set` ([Skriftur og skipanalínan](topic:scripts-and-cli)) |
| Hlutur sýndur í tommum | Stærðir birtast í millimetrum; skrifaðu `2in` í talnareit eða segð og það verður 50,8 |

## Skrár

| Ekki smíðað enn | Í staðinn, í dag |
|---|---|
| Breyting á eigin eiginleikum innflutts STEP-fasthluta (hann kemur án sögu) | Bættu við eða skerðu efni með eigin eiginleikum |
| Lesa liti, nöfn, samsetningarbyggingu og PMI úr STEP | Ekki í boði |
| glTF-, OBJ-, IGES- og Parasolid-útflutningur; DWG af 3D-hluta (aðeins afbrigðapakkinn skrifar DWG: teikniblaðið) | STL eða 3MF fyrir möskva; STEP fyrir fasthluta; DXF fyrir 2D |
| Opnun IGES-, DXF- eða annarra forrita' eigin skráa (`.3dm`-skrár opnast sem einn líkami: [Opna .3dm-líkan sem fasthlut](topic:open-3dm-files)) | Biddu um STEP, eða lokaða STL-, OBJ- eða 3MF-möskva: [Opna STL, OBJ eða 3MF](topic:open-meshes) |
| Samsetningarbygging (tré með heitum hluta) í útfluttu STEP | Samsetnings-STEP er einn samsettur hópur staðsettra fasthluta |
| Vista í möppu að eigin vali án niðurhals vafrans | Kveiktu á „spyrja hvar á að vista“ í niðurhalsstillingum vafrans |

## Teikningar

| Ekki smíðað enn | Í staðinn, í dag |
|---|---|
| Mál umfram þrjú heildarmál (holustærðir, staðsetningar, vikmörk á stærðum) | Merktu PDF-skjalið, eða fluttu út DXF og málsettu í 2D CAD-forriti |
| Meira en eitt snið eða ein smáatriði; jöfnuð, brotin og hjálparskoðun | Eitt snið og ein smáatriði á hverri teikningu |
| Frjáls texti, athugasemdir og töflur á blaðinu (nema titil- og endurskoðunarreitir) | Yfirborðsathugasemdin, eða texti bættur við í PDF-skjalinu |
| Fyrsta-horn-varpsatriði, hreyfanlegar skoðanir, lóðrétt blöð | Þriðja horn, sjálfvirk skipan, lárétt blöð A4–A0 og ANSI A–E |
| Lifandi sniðskoðun: nokkur plön eða sniðkassi í einu, útlína utan um skurðinn, að vista sniðið í skránni | Eitt plan í einu úr {{ui:Sýn}} › {{ui:Sniðsýn}}; sjá [Skoðaðu inn með sniðskoðun](topic:section-view) |
| Samsetningarteikningar með fleiri skoðunum, málum eða hreyfanlegum blöðrum | Ein samsíða (eða sundurtekin) skoðun með sjálfvirkum blöðrum og hlutalista |
| Afrit og líming GD&T- og yfirborðstákna | Settu hvert með Viðmiði, Ramma eða Yfirborði |
| Handbækur: STEP-skrár í {{ui:Úr annarri skrá…}} í Illustrate, líkan sent beint úr ModelCraft eða BimCraft, myndir á gæðum slóðarekjara, gagnvirk 3D í PDF | Opnaðu STEP í Hönnun og byrjaðu handbókina {{ui:Frá opna hlutnum}}; vistaðu líkanið sem glTF (.glb); PNG-myndir af 3D-sýninni; gagnvirka 3D-skráin: sjá [Byrjaðu handbók í Illustrate](topic:illustrate) |

## Samsetningar

| Ekki smíðað enn | Í staðinn, í dag |
|---|---|
| Gír-, grind-, kambur- og skrúfuliðir; kúluliður takmarkaður við keilu; liðir á bognum fleti eða milli punkta | Stífir, snúnings-, rennilar, sívalir, plan-, kúlu- og pinna-í-rauf-liðir á flötum fleti, hvert gildi með eigin mörkum: sjá [Smíðaðu samsetningu](topic:build-assembly) |
| Útbreiddar skref sem snúa hlutum, og að draga hluti sem liðir staðsetja | Bein útbreiðsluskref; fjarlægðu lið til að færa hlut með hendi |
| Undirsamsetningar | Eitt stig hluta eingöngu |
| Gírar, kambar, snerting | Ekki í boði |

## Framleiðsla

| Ekki smíðað enn | Í staðinn, í dag |
|---|---|
| 3D-aðlögun og útlínugrófvinnsla í 3D; waterline-, pencil-, geisla- og spíralfrágangur; aðlögunarumferðir skrifaðar sem bogar | 3D-grófvinnsla í beinum röðum og leifarvinnsla: sjá [3D-grófvinnsla og leifarvinnsla](topic:rough-3d); Samsíða- og Scallop-frágangur: sjá [3D-frágangur](topic:finish-3d); 2,5-ása flötun, vasi, 2D-aðlögun, útlína, bor og skábrún: sjá [Búa til slóðir og G-kóða](topic:manufacture) |
| Skurður með swarf, flæðilínu- og fjölása grófvinnsluslóðir, hallandi vinnuplan (G68.2), árekstrarathuganir á haldara og vél; hermun á 5-ása og snúningsskurðum | Hallandi verkfæri fyrir hvaða aðgerð sem er, 5-ása frágangur með kúlufingurfræsi og 4. ássnúningsfrágangur: sjá [4- og 5-ása vinnsla](topic:multi-axis) |
| Borun og innri þræðir á rennibekk, G71/G76-lotur, bogar í rennslisleiðum, lifandi verkfæri, undirspindill | Ytri rennsli: flötun, grófvinnsla, frágangur, rauf, afskurður, skrúfgangur, bor á miðju: sjá [Rennsli í rennibekk](topic:turning) |
| Snertiskynjun á horni eða hornpunkti, verkfærastillir, mæling stærðar gegn vikmörkum | Snertiskynjun á fleti, hlið, gati eða upphækkun til að stilla vinnufærsluna: sjá [Snertiskynjun](topic:probing) |
| Árekstrarathuganir á haldara og skafti | Fylgstu með viðvörunum um rásarlengd og athugaðu í hermi stjórnbúnaðarins |
| Líftími verkfæra og undirforritalotur í úttaki; hleðsla annarra forrita úttaksskráa | Skrifaðu eða breyttu úttaki í eigin sniði PartCraft: sjá [Úttök sem þú getur breytt](topic:post-processors) |
| Tommu-G-kóði (G20) | Millimetrar (G21) eingöngu |

## Hermun og almenn hönnun

| Ekki smíðað enn | Í staðinn, í dag |
|---|---|
| Ólínulegar rannsóknir: flæði, stór aflögun, snerting milli hluta, þreyta | Línulegur stöðugleiki og náttúrutíðni: sjá [Athugaðu spennu og aflögun](topic:simulation); hafðu öryggisstuðulinn vel yfir 1 |
| Ólínulegt knekki (ófullkomleikar, eftirknekkur, smellhopp) | Línulegir knekkingarstuðlar með rúmri framlegð: sjá [Hiti, hitaspenna og knekki](topic:thermal-and-buckling) |
| Geislun milli flata (formþættir), snertiviðnám, hitaháð efni, tregða í hitaspennu (hitalostsbylgjur) | Geislun til umhverfisins, stöðug eða kvasi-stöðug hitaspenna yfir tíma, fastir eiginleikar: sjá [Hiti, hitaspenna og knekki](topic:thermal-and-buckling) |
| Sjálfvirk fínstilling fyrir hitaflutning og rannsóknir með hitaálagi; grófari möskvi þar sem villan er lítil; markmið á staðbundinni stærð (hámarksspenna á einum stað) | **Fínstilla sjálfkrafa** fyrir stöðug-, knekki-, náttúrutíðni- og stöðugar hitarannsóknir, á villunni yfir allan hlutann: sjá [Athugaðu spennu og aflögun](topic:simulation); annars lækkaðu stærð þáttar |
| Bolta- og legukraftar, fjarkraftar, augnablik, gormar, fyrirskrifaðar tilfærslur | Kraftar og þrýstingur á fleti, þyngdarafl; föst og núningslaus fleti |
| Hermun samsetninga; efni sem eru mismunandi eftir stefnu (prentlög, samsett efni) | Einn hluti, eitt samsætið efni |
| Nokkrir reiknaþræðir fyrir þríhyrningsrannsóknir, varmaflutning og almenna hönnun; þræðir á síðu sem er ekki krosstengd einangruð | Vaxelrannsóknir, knekki, spenna yfir tíma og lagskipt flæði nota þræðina þar sem síðan leyfir: sjá [Stillingar PartCraft](topic:settings) |
| Ókyrrt flæði með hönnunarnákvæmni (Spalart–Allmaras-líkanið er inni sem tilraunakennt: þrýstifall í pípu 30 til 34 % hátt, afturhlaup á bakþrepi 21 til 39 % stutt; áætlað: fínni reitir nálægt veggjum), varmi í flæði, óstöðugt (tímanákvæmt) flæði, frjálsir fletir, ónewtonskir vökvar, snúningshlutir | Lagskipt, stöðugt, samhitað flæði af newtonskum vökva, eða tilraunakennda ókyrra líkanið fyrir eigindleg mynstur: sjá [Hermdu vökvaflæði](topic:flow-simulation); spjaldið varar við þegar Reynolds-talan er yfir lagskiptingu |
| Spennumörk og framleiðslureglur (yfirhengi, fræsistefnur) í almennri hönnun; nokkur efni í einu formi | Stífasta form fyrir rúmmál; athugaðu niðurstöðuna í Hermun: sjá [Ræktaðu form úr álagi](topic:generative-design) |
| Niðurstaða sem breytanlegur (mjúkur, færibreytanlegur) fasthluti | STL, fasettustep eða hluti með niðurstöðunni sem innfluttum fasettuðum fasthluta |
| Rafvélahönnun: snúningur í stator, tog gegn horni, mettandi stál, seglar sem missa styrk eftir hnéð, hvirflastraumar og járn- og koparmissir; segulsvið í 3D eða á bognum möskvum | Línuleg 2-D segulstöðufræði á neti í greiningarsafninu: spólur, járn, varanlegir seglar á afturkallslínu sinni, bil, spanaflæði og tog: sjá [Segulsvið í 2-D](topic:magnetic-fields-2d) |

## Skriftur

| Ekki smíðað enn | Í staðinn, í dag |
|---|---|
| Sveifluhjálp, brotpunktar og skref í skrifturitlinum | Leit, fellingar og útfylling eru til staðar (sjá [Skrifaðu og keyrðu skriftur](topic:craftscript)); að öðru leyti, þinn eigin ritill: {{ui:Vista}} og {{ui:Opna}} í Skriftuhópnum færa skriftur inn og út; innbyggðu föllin eru talin upp í [CraftScript-málinu](topic:craftscript-language) |
| Brotpunktar og skref í gegnum skriftu | `disp` og `fprintf` á leiðinni; {{key:Mod+Enter}} keyrir nokkrar valdar línur í einu |
| Reitir og línurit sem skrifta sýnir teiknuð í Hönnunarvinnusvæðinu; skriftur sem breyta breytum hlutarins | Þau birtast í Skriftuvinnusvæðinu; skriftur lesa breytur með `param` (sjá [Skrifaðu og keyrðu skriftur](topic:craftscript)), breyttu þeim á flipanum {{ui:Breytur}} |
| Myndir og töflur hlið við hlið með línuritum; breyting á línuriti (aðdráttur, ásmörk) áður en það er vistað | Hlið við hlið sýnir línuritin; vistaðu línurit sem PNG, SVG eða CSV og kláraðu það annars staðar |
| numpy og aðrir Python-pakkar; Python án nettengingar; samanbrot Python í ritlinum; Pascal Script | Staðlaða bókasafn Python, CraftScript og Lua: sjá [Skriftur í Python](topic:craftscript-python) |
| Að senda Lua-föll í innbyggð föll; að kalla bókasafnsfall úr Lua undir nafni sem er smíðað meðan skriftan keyrir | Skrifaðu nafn bókasafnsfallsins í skriftuna (`cs.static_tet(…)`), eða kallaðu á það úr CraftScript-skriftu |

## Forritið

| Ekki smíðað enn | Í staðinn, í dag |
|---|---|
| Skýgeymsla, deiling og útgáfusaga | Ekki í boði enn. Vistaðu skrár í tölvuna þína og geymdu útgáfur undir nöfnum |
| PartCraft sem uppsett forrit á iPad og iPhone | Notaðu PartCraft í vafra tækisins; á Android og á skjáborðinu keyrir það einnig í CadCraft Studio (getcadcraft.com/download) |
| Samhengisvalmyndir (hægri smellur) | Tækjastika og hægra spjald |
| Vinna alveg án nettengingar frá köldum byrjun | Aðeins þegar forritið hefur verið vistað til notkunar án nettengingar: sjá [Vinna án nettengingar](common:offline) |

Segðu okkur hvað þú saknar mest í gegnum stuðningssíðu vefsvæðisins: það mótar það sem kemur næst.

## Verkfræði (rafalar og svið)

| Ekki smíðað enn | Í staðinn, í dag |
|---|---|
| Hausar, tengi og festingar á mynduðum varmaskipti; hitaferlar fyrir styrk efnis; tapstuðlar í dreifigreininni | Rafalarnir smíða kjarnann og rörin; bættu festingum við í Hönnun; notaðu stofuhitagildi efnisins með öryggisstuðli |
| Að bæta rafölum við úr viðbótaskrá með einum smelli | {{ui:Opna}} í Verkfræði-vinnusvæðinu bætir rafali við úr skrá |
| Sviðsskrá fínni en vokslastærð rafalans; lestur `.vdb`-skráa | Vistaðu fínna svið úr skriftu; `.vdb` er skrifuð, ekki lesin |
| Útreikningar á þrýstihylkjum samkvæmt reglum | Kennslubókaformúlurnar fyrir þunnan og þykkan vegg, með öryggisstuðlinum sem þú velur; ekki reglugerðarstuðull |
| Rafalar fyrir hin forritin | PartCraft eingöngu í þessari útgáfu |
