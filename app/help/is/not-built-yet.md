---
title: Það sem er ekki smíðað ennþá
summary: Allt sem þessi útgáfa PartCraft gerir ekki enn, frá snúningsdráttum til tommuskjás, teikningarmála og undirsamsetninga, ásamt því hvað á að gera í staðinn í dag.
keywords: vantar, ekki enn, takmarkanir, takmörk, vegvísir, nákvæmur kjarni, ávala, skábrúna, skel, halli, brú milli sniða, STEP-innflutningur, uppgerð, framleiðsla, snúningsdráttur, jöfnur, tommur, teikningarmál, undirsamsetningar, ský, spjaldtölva, sími
from: 9b868162
---

PartCraft er snemma útgáfa. Þessi síða skráir það sem hún gerir ekki enn, svo þú leitir ekki að því, og hvað á að gera í staðinn í dag. Engin dagsetning er gefin fyrir neitt hér.

## Þarfnast nákvæms kjarna

Þessi útgáfa smíðar alla hluti með möskvakjarnanum (sjá [Möskvakjarninn](topic:solid-kernels)). Allt hér að neðan þarf nákvæman rúmfræðikjarna, sem þessi útgáfa hefur ekki enn. Hlutir sem vistaðir eru með þessum þáttum opnast enn: þættirnir haldast í sögunni, merktir sem ekki smíðaðir, og þeir eru geymdir þegar þú vistar.

| Ekki smíðað ennþá | Í staðinn, í dag |
|---|---|
| {{ui:Fillet}} og {{ui:Chamfer}} á ávölum jöðrum; ávölur sem breytast eftir jaðrinum; ávölur sem renna mjúklega saman þar sem þær mætast (möskvakjarninn skáskerur þær) | Ávala og Skábrúna virka á beinum jöðrum milli flatra flata; ávalaðu önnur horn í skissunni áður en þú pressar ({{ui:Fillet}} í skissu, {{key:F}}) |
| {{ui:Shell}} sem opnar bogadregna fleti; veggir með mismunandi þykkt | Opnaðu flata fleti; bættu efni við með útdráttum þar sem veggur þarf að vera þykkari |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} á bogadregnum flötum; útdráttur upp að fleti, næsta fleti eða hornpunkti; mjókkandi útdrættir | Dragðu út eða snúðu, í þrepum þar sem þörf er á; dragðu út að dýpt sem þú mælir |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} og flöt snið | Dragðu plötuna út eða snið ribbunnar út |
| Yfirborð: að ljúka {{ui:Form}} inn í hlutinn, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Ekki í boði |
| Nokkrir líkamar: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, þættir sem búa til nýjan líkama | Eitt fast efni; mynstur og spegilafrit þátta |
| Skissur, plön, ásar og punktar á fleti sem aðeins nákvæmur kjarni getur fundið (flötur sem ávala býr til, veggur gats, flötur innflutts fasts efnis) | Skissaðu á grunnplön, viðmiðunarplön og flata fleti útdrátta og snúninga |
| Niðurstaða hönnunar með reiknilíkani opnuð sem hluti eða bætt við hann (hún verður innflutt fast efni) | Sæktu niðurstöðuna sem STL eða STEP |
| Breyting á bogadregnum flötum opinnar STEP-skráar sem nákvæm yfirborð; nákvæm STEP af splínu-, dregnum og snúnum flötum úr STEP-skrá, splínuhliðar, mótaðir þræðir, STL / OBJ / 3MF-líkamar og samsetningar; STEP fyrir aðra hlutamótunarforrit | {{ui:Open}} les STEP sem þríhyrninga og heldur flötum, sívölum, keilum, kúlum og tórusum skráarinnar fyrir útflutninginn ([Opna STEP-skrá](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} skrifar hvern greinanlegan flöt nákvæmlega og heldur þeim sem þríhyrningum ([Útflutningur](topic:export-files#for-other-cad-programs-step)); fjölvinn fyrir annan hlutamótara skrifar enn |
| Sannar bogar í teikningasýnum | Sýnir og sniðsýnir eru teiknaðar út frá þríhyrningunum |
| Nákvæmir rúmmál, flatarmál og fjarlægðir | {{ui:Measure}} gefur tölur fasta efnisins með þríhyrningum, aðeins lægri á kringlóttum hlutum; fínni **Ferlar**-stilling færir þær nær |

Sumar línur í töflunum hér að neðan stinga upp á einum af þessum þáttum sem leið framhjá einhverju öðru. Þær tillögur gilda þegar nákvæmi kjarninn er kominn aftur.

## Þættir

| Ekki smíðað ennþá | Í staðinn, í dag |
|---|---|
| Ávalar á fleti, fullar hálfhringsávalar, ávalar með radíus sem stilltur er á punkta meðfram jaðri | Fastur eða línulega breytilegur {{ui:Fillet}}; nokkrir ávölunarþættir |
| Skeljar með mismunandi veggþykkt | Ein {{ui:Shell}}-þykkt; bættu efni við með útdráttum þar sem veggur þarf að vera þykkari |
| Halli á frjálsum (splínu-) flötum | {{ui:Draft}} virkar á flötum, sívölum og keilulaga flötum |
| Snúningsdrættir, þunnveggja- og yfirborðsdrættir; snerting við enda á brúarþættinum; brú milli sniða með einni leiðarteinu; splínubrautir | {{ui:Sweep}} með fastri stefnu eða endakvarða; brú milli sniða með tveimur eða fleiri leiðarteinum: sjá [Dráttur, brú milli sniða og halli](topic:sweep-loft-draft) |
| Rif úr bogum eða splínum; rif sem vaxa hornrétt á skissuna (úr efrisýn); halli á rifum; nokkur rif úr einni skissu | {{ui:Rib}} úr einni keðju lína í eigin plani rifsins: sjá [Rif og hornstykki](topic:rib) |
| „Upp að“ bogadregnum fleti, „upp að næsta“ sem stöðvast við bogadreginn flöt | Upp að flötum fleti eða viðmiðunarplani |
| Gagnborun, tommu- og pípuþræðir, keiluþræðir, útlaup þráða og skábrúnaðar þráðarbyrjanir | Gagnsökkun með litlu dýpi; ISO-metrískir og trapisulaga þræðir, skrautþræðir eða mótaðir: sjá [Þræðir á ásum og borunum, teiknaðir eða mótaðir](topic:threads) |
| Útdrættir þunnra þátta | Teiknaðu báða veggi sniðsins |
| Mynsturafrit sleppt eitt í einu, fyllimynstur | Notaðu aðskilda þætti; mynstur meðfram ferli: {{ui:Path pattern}} |
| Afritun mynstra, spegla, ávalna, skábrúna, skela og innfluttra fastra efna | Afritaðu skissuna eða þáttinn sem þeir eru byggðir á, eða gerðu mynstur úr honum |
| Nákvæm (G1) snerting á sérstökum punktum mótunar; sameining bletta mótunar í stærri fleti | Hækkaðu stig mótunarinnar: nálguðu blettirnir verða minni; sjá [Frjáls form með Mótun](topic:form-surfaces) |
| Mótun úr nokkrum aðskildum lokuðum hlutum í einum þætti; brýr milli móta | Eitt lokað stykki í hverjum Mótunarþætti; tengdu þau með Join |
| Val á yfirborðslíkömum í sýninni (nema stytti- og plásturspunktar); yfirborðsávalar; afstytting; G2-plástrar; Gordon-yfirborð snertandi bogadregna nágranna (snerting við plön og flata fleti er smíðuð) | Veldu þá með nafni í spjaldi þáttarins; þykktu fyrst, síðan ávalaðu fasta efnið |
| Listi líkama í sögunni; að sleppa földum líkömum úr útflutningi | Endurnefndu og feldu líkama í líkamalista hlutaspjaldsins; eyddu eða bældu þáttinn sem bjó til líkama til að sleppa honum |
| Ósamræmd skölun sem heldur sívölum og keilum greinanlegum; ósamræmd skölun á jafnfærðum yfirborðum | {{ui:Scale body}} gerir bogadregna fleti að nálguðum B-splínum (innan 0.0000004 mm); samræmd skölun helst nákvæm |
| Sameining yfirborðslíkama; Minkowski-summur | Fyrst {{ui:Stitch}} eða {{ui:Thicken}}, síðan {{ui:Combine}} |
| Vikmarksgreining: vikmarkskeðjur sem beygja horn (2D og 3D vigurlykkjur), næmni reiknuð út frá rúmfræðinni, Monte Carlo með öðrum dreifingum, stærðarvikmörk á skissumálum, bónusvikmörk úr efnisástandi | {{ui:Stack-up}} í samsetningu: ein stefna, versta tilfelli og RSS, vikmörk slegin inn, úr almennu vikmarki titilreitsins eða úr GD&T-römmum: sjá [Vikmarkskeðjur](topic:tolerance-stackup) |
| Raðning: skurðarröð og innhlaup, að skera sameiginlega jaðra einu sinni, hlutar sem verða að haldast saman; afgangar af rúllum, lager sem deilt er milli verkefna | {{ui:Nest flat parts on sheets…}} með bili, jöðrum, snúningum og kornastefnu: sjá [Raða flötum hlutum á plötur](topic:nest-flat-parts); afgangsplötur eru geymdar og notaðar fyrst: sjá [Geymdu og endurnýttu afganga](topic:nest-offcuts); skipuleggðu skurðinn í hugbúnaði skurðarvélarinnar |
| Plötuvinna: fald, sveigjur, skáskorna og útlínubundna flansa; flansa á bogadregnum jöðrum eða á flötum beygðs grunnflans; skissaðar beygjur; hornalokanir; mótunarverkfæri; breyting fasts efnis í plötuvinnu; flöt beygðs grunnflans með skurðum í; beygjutöflur | {{ui:Base flange}} (plata eða beygt snið), {{ui:Edge flange}} á beinum jöðrum plötu með beygjulosun, og flatt snið með K-stuðli: sjá [Plötuvinna](topic:sheet-metal) |
| Hallagreining á samsetningum; að finna skiptilínuna; greining veggþykktar | {{ui:Draft analysis}} á hlutanum í Hönnun: sjá [Athugaðu halla fyrir mótun og steypu](topic:draft-analysis); opnaðu hvern hluta samsetningar til að athuga hann |

## Skissur

| Ekki smíðað ennþá | Í staðinn, í dag |
|---|---|
| Sporbaugar, snertibogar, keilusnið, splínur með föstu stigi eða vogum (NURBS) | Splínur (þriðja stigs), bogar og hringir með Snertitengslum |
| Punktur á splínu (tengsl), sveigjutengsl (G2) | Settu punkt splínunnar sjálfrar þar sem hún á að fara um |
| Jafnfærð afrit af splínum sem fylgja síðari breytingum; jafnfærslur keðja með skörpum splínuhornum | Jafnfærðu aftur eftir breytinguna; ávalaðu hornið fyrst |
| Mynsturafrit sem haldast tengd upprunanum; mynstur meðfram ferli | Gerðu mynstur aftur eftir breytingu |
| Varpa frjálsum eða hölluðum hringlaga jöðrum, varpaðri rúmfræði sem fylgir hlutanum | Varpaðu beinum og samsíða hringlaga jöðrum, og settu síðan mál |
| Stýrð (viðmiðunar-) mál | Lestu stærðir af spjaldinu eða staðreyndum hlutarins |
| Samlínutengsl | Samsíða með 0 fjarlægð |
| Límt inn í annað forrit (klippiborð kerfisins) | Fluttu út DXF, STEP, STL eða 3MF |
| Að slá inn boga, hlutfallsleg eða skautahnit | Sláðu inn línur og hringi; teiknaðu boga með Bogaverkfærinu |
| Að velja rúmfræði án bendils | Þarf smell eða snertingu |

## Breytur og einingar

| Ekki smíðað ennþá | Í staðinn, í dag |
|---|---|
| Uppsetningar sem breyta efnum; CSV-hönnunartafla sem slekkur á þáttum | Uppsetningar setja breytur og kveikja og slökkva á þáttum: sjá [Uppsetningar og hönnunartöflur](topic:design-tables); `partcraft variants` smíðar vistaðar uppsetningar eftir nafni, líka þær sem slökkt er á þáttum: sjá [Gerðu afbrigðapakka úr uppsetningum þínum](topic:variant-pack) |
| Jöfnur á tölum eigin spjalda nýjustu þáttanna (plan, dráttur, halli og þess háttar) | Skrifaðu þær í skrift eða með `partcraft set` ([Skriftir og skipanalína](topic:scripts-and-cli)) |
| Hluti sýndur í tommum | Stærðir birtast í millimetrum; sláðu inn `2in` í talnareit eða tjáningu og það verður 50.8 |

## Skrár

| Ekki smíðað ennþá | Í staðinn, í dag |
|---|---|
| Breyting á eigin þáttum innflutts STEP-fasts efnis (það kemur án sögu) | Bættu við eða skerðu efni með þínum eigin þáttum |
| Lestur lita, heita, samsetningarbyggingar og PMI úr STEP | Ekki í boði |
| glTF, OBJ, IGES, Parasolid-útflutningur; DWG af þrívíðum hluta (aðeins afbrigðapakkinn skrifar DWG: teikniblaðið) | STL eða 3MF fyrir möskva; STEP fyrir föst efni; DXF fyrir tvívítt |
| Opnun IGES, DXF eða skráa annarra forrita (`.3dm`-skrár opnast sem einn líkami: [Opnaðu .3dm-líkan sem fast efni](topic:open-3dm-files)) | Biddu um STEP, eða lokaðan STL-, OBJ- eða 3MF-möskva: [Opnaðu STL, OBJ eða 3MF](topic:open-meshes) |
| Samsetningarbygging (tré með heitum hluta) í útfluttu STEP | STEP samsetningar er ein samsetning staðsettra fastra efna |
| Vistun í möppu að eigin vali án niðurhals vafrans | Kveiktu á „spyrja hvar á að vista“ í niðurhalsstillingum vafrans |

## Teikningar

| Ekki smíðað ennþá | Í staðinn, í dag |
|---|---|
| Mál umfram þrjár heildarstærðir (stærðir gata, staðsetningar, vikmörk á stærðum) | Merktu PDF-skrána, eða fluttu út DXF og settu mál á það í 2D CAD-forriti |
| Fleiri en eitt snið eða smáatriði; jöfnuð, brotin og hjálparsýn | Eitt snið og eitt smáatriði á hverri teikningu |
| Frjáls texti, athugasemdir og töflur á blaðinu (að undanskildum titil- og útgáfureitum) | Frágangsathugasemdin, eða texti bættur við á PDF-skránni |
| Fyrsta-horns varpa, hreyfanlegar sýnir, lóðrétt blöð | Þriðja-horns varpa, sjálfvirk uppsetning, lárétt blöð A4–A0 og ANSI A–E |
| Lifandi sniðsýn: nokkur plön eða sniðkassi í einu, útlína um skurðinn, vistun sniðsins í skránni | Eitt plan í einu úr {{ui:Views}} › {{ui:Section view}}; sjá [Skoðaðu innan með sniðsýn](topic:section-view) |
| Samsetningarteikningar með fleiri sýnum, málum eða merkimiðum sem þú getur fært | Ein ísómetrísk (eða sundurtekin) sýn með sjálfvirkum merkimiðum og hlutalista |
| Afritun og límning GD&T- og frágangstákna | Settu hvert með Datum, Frame eða Finish |
| Handbækur: STEP-skrár í {{ui:From another file…}} í Illustrate, líkan afhent beint úr ModelCraft eða BimCraft, myndir í gæðum geislarekjara, gagnvirkt þrívíddarefni í PDF | Opnaðu STEP í Hönnun og byrjaðu handbókina {{ui:From the open part}}; vistaðu líkanið sem glTF (.glb); PNG-myndir af þrívíddarsýninni; gagnvirka þrívíddarskráin: sjá [Byrjaðu handbók í Illustrate](topic:illustrate) |

## Samsetningar

| Ekki smíðað ennþá | Í staðinn, í dag |
|---|---|
| Gír-, grind-, knastás- og skrúfuliðir; kúluliður takmarkaður við keilu; liðir á bogadregnum flötum eða milli punkta | Stífir, snúningsliðir, rennuliðir, sívalir, plan-, kúlu- og tappi-í-rauf-liðir á flötum fleti, hvert gildi með eigin mörkum: sjá [Byggðu samsetningu](topic:build-assembly) |
| Sundurtekin skref sem snúa hlutum, og að draga hluti sem liðir staðsetja | Bein sundurtökuskref; fjarlægðu lið til að færa hluta með hendi |
| Undirsamsetningar | Aðeins eitt stig hluta |
| Gírar, knastásar, snerting | Ekki í boði |

## Manufacture

| Ekki smíðað ennþá | Í staðinn, í dag |
|---|---|
| 3D-grófvinnsla á bogadregnum flötum, 3D-aðlögunarspónun, afgangsvinnsla; vatnslínu-, blýants-, geisla- og spírallokafrágangur; aðlögunarumferðir skrifaðar sem bogar | 2.5-ása flötur, vasi, 2D-aðlögun, útlína, bora og skábrún: sjá [Gerðu verkferla og G-kóða](topic:manufacture); Parallel og Scallop-frágangur á öllu líkaninu: sjá [3D-frágangur](topic:finish-3d) |
| 4- og 5-ása verkferlar, rennismíði, þreifing | Settu upp eina hlið í einu með ásnum á Uppsetningarflipanum |
| Árekstrarathuganir á haldara og skafti | Fylgstu með viðvörunum um rifulengd og athugaðu í hermi stýringarinnar |
| Þreifing, endingarlotur verkfæra og undirforritalotur, 4. og 5. ása og rennibekkjakóðar í eftirvinnsluhnykli; hleðsla eftirvinnsluskráa annarra forrita | Skrifaðu eða breyttu eftirvinnsluhnykli á sniði PartCraft: sjá [Eftirvinnsluhnykklar sem þú getur breytt](topic:post-processors) |
| Tommu-G-kóði (G20) | Aðeins millimetrar (G21) |

## Uppgerð og reiknuð hönnun

| Ekki smíðað ennþá | Í staðinn, í dag |
|---|---|
| Ólínulegar rannsóknir: flæði, stórar beygjur, snerting milli hluta, þreyta | Línulegur stöðugleiki og eigintíðnir: sjá [Athugaðu álag og beygju](topic:simulation); hafðu öryggisstuðulinn vel yfir 1 |
| Ólínuleg knésetning (ófullkomleikar, eftir-knésetning, smellifærsla) | Línulegir knésetningarálagsstuðlar með rúmri spássíu: sjá [Hiti, hitaálag og knésetning](topic:thermal-and-buckling) |
| Geislun milli flata (sýnstuðlar), snertiviðnám, hitaháð efni, tregða í hitaálagi (hitaáfallsbylgjur) | Geislun til umhverfisins, stöðugt eða næstum kyrrstætt hitaálag yfir tíma, fastir eiginleikar: sjá [Hiti, hitaálag og knésetning](topic:thermal-and-buckling) |
| Sjálfvirk fínstilling fyrir óstöðugan hita og rannsóknir með hitaálagi; að gera möskvann grófari þar sem villan er lítil; markmið á staðbundinni stærð (hámarksálag á einum stað) | **Fínstilla sjálfkrafa** fyrir stöðugleika-, knésetningar-, eigintíðni- og stöðugar hitarannsóknir, út frá villunni yfir allan hlutann: sjá [Athugaðu álag og beygju](topic:simulation); annars lækkaðu stærð möskvans |
| Legur- og boltaálag, fjarkraftar, vægi, gormar, fyrirskrifaðar færslur | Kraftar og þrýstingur á flötum, þyngdarafl; fastir og núningslausir fletir |
| Uppgerð samsetninga; efni sem er mismunandi eftir stefnu (prentlög, samsett efni) | Einn hluti, eitt stefnuóháð efni |
| Nokkrir reikniþræðir fyrir fjórflötunga-rannsóknir, varmaflutning og reiknaða hönnun; þræðir á síðu sem er ekki einangruð milli uppruna | Voxel-rannsóknir, knésetning, álag yfir tíma og lagskipt flæði nota þræðina þar sem síðan leyfir: sjá [Stillingar PartCraft](topic:settings) |
| Ókyrrðarflæði með hönnunarnákvæmni (Spalart–Allmaras-líkanið er með sem tilraunalíkan: núningur í pípu 30 til 34 % of hár, endurfesting við bakstig 21 til 39 % of stutt; áætlað: fínni frumur nálægt veggjum), hiti í flæði, óstöðugt (tímanákvæmt) flæði, frjálsir fletir, ekki-Newtonskir vökvar, snúningshlutar | Lagskipt, stöðugt, samhitað flæði Newtonsks vökva, eða tilraunalíkan fyrir ókyrrð fyrir eigindleg mynstur: sjá [Hermdu vökvaflæði](topic:flow-simulation); spjaldið varar við þegar Reynolds-talan er yfir lagskiptu flæði |
| Álagsmörk og framleiðslureglur (útskagar, fræsistefnur) í reiknaðri hönnun; nokkur efni í einu formi | Stífasta form fyrir rúmmál; athugaðu niðurstöðuna í Uppgerð: sjá [Láttu form vaxa út frá álagi](topic:generative-design) |
| Niðurstaða sem breytanlegt (slétt, breytilegt) fast efni | STL, STEP með þríhyrningum eða hluti með niðurstöðunni sem innfluttu þríhyrningsföstu efni |
| Hönnun rafvéla: snúningur sem snýst í stator, tog gegn horni, mettandi stál, seglar sem missa styrk eftir hné, hvirfilstraumar og járn- og koparskaðar; segulsvið í þrívídd eða á bogadregnum möskvum | Línuleg 2-D segulstöðufræði á neti í greiningarsafninu: spólur, járn, varanlegir seglar á afturlínu sinni, bil, spanaðleiki og aðdráttarkraftur: sjá [Segulsvið í tvívídd](topic:magnetic-fields-2d) |

## Skriftir

| Ekki smíðað ennþá | Í staðinn, í dag |
|---|---|
| Hjálp við bendil, brotpunktar og skref í skriftaritlinum | Leit, samanfelling og sjálfvirk útfylling eru til staðar (sjá [Skrifaðu og keyrðu skriftir](topic:craftscript)); fyrir hitt, þinn eigin ritill: {{ui:Save}} og {{ui:Open}} í Skrift-hópnum flytja skriftir inn og út; innbyggð föll eru talin upp í [CraftScript-málinu](topic:craftscript-language) |
| Brotpunktar og skref gegnum skrift | `disp` og `fprintf` á leiðinni; {{key:Mod+Enter}} keyrir nokkrar valdar línur í einu |
| Reitir og línurit sem skrift birtir teiknuð í Hönnunarvinnusvæðinu; skriftir sem breyta breytum hlutarins | Þau birtast í Skriftar-vinnusvæðinu; skriftir lesa breytur með `param` (sjá [Skrifaðu og keyrðu skriftir](topic:craftscript)), breyta þeim á {{ui:Parameters}}-flipanum |
| Myndir og töflur hlið við hlið með línuritum; að breyta línuriti (aðdráttur, ásmörk) áður en það er vistað | Hlið við hlið sýnir línuritin; vistaðu línurit sem PNG, SVG eða CSV og ljúktu við það annars staðar |
| numpy og aðrir Python-pakkar; Python án nettengingar; samanfelling Python í ritlinum; Pascal Script | Staðalsafn Python, CraftScript og Lua: sjá [Skriftir í Python](topic:craftscript-python) |
| Að senda Lua-föll í innbyggð föll; að kalla á safnfall úr Lua eftir nafni sem er smíðað meðan skriftin keyrir | Skrifaðu nafn safnfallsins í skriftina (`cs.static_tet(…)`), eða kallaðu á það úr CraftScript-skrift |

## Forritið

| Ekki smíðað ennþá | Í staðinn, í dag |
|---|---|
| Skýjavistun, deiling og útgáfusaga | Ekki í boði enn. Vistaðu skrár í tölvuna þína og geymdu útgáfur undir nafni |
| PartCraft sem uppsett forrit á iPad og iPhone | Notaðu PartCraft í vafra tækisins; á Android og á borðtölvu keyrir það líka í CadCraft Studio (getcadcraft.com/download) |
| Samhengisvalmyndir (hægri smellur) | Verkfærastika og hægra spjald |
| Vinna alveg án nettengingar frá nýrri byrjun | Aðeins þegar forritið hefur verið vistað til notkunar án nettengingar: sjá [Vinna án nettengingar](common:offline) |

Segðu okkur hvað þú saknar mest á stuðningssíðu vefsins: hún mótar það sem kemur næst.

## Verkfræðingur (smíðar og reitir)

| Ekki smíðað ennþá | Í staðinn, í dag |
|---|---|
| Hausar, tengi og festingar á mynduðum varmaskipti; hitaferlar fyrir styrk efnis; T-stykkistap í greinarörinu | Smiðirnir smíða kjarnann og rörin; bættu festingum við í Hönnun; notaðu gildi efnisins við stofuhita með öryggisstuðli |
| Að bæta við smiðum úr viðbótaskránni með einum smelli | {{ui:Open}} í Verkfræðingsvinnusvæðinu bætir smið við úr skrá |
| Reitaskrá fínni en eigin voxel-stærð smiðsins; innlestur `.vdb`-skráa | Vistaðu fínni reit úr skrift; `.vdb` er skrifuð, ekki lesin |
| Þrýstihylkjastaðlaútreikningar | Kennslubókaformúlur fyrir þunnvegga og þykkvegga, með öryggisstuðlinum sem þú velur; ekki staðlabil |
| Smiðir fyrir hin forritin | Aðeins PartCraft í þessari útgáfu |
