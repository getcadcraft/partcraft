---
title: Okusha ku-0.9
summary: I-PartCraft 0.9 yengeza ama-fillet phakathi kwezinhlangothi nokujiya ibe yizolidi, izinhlanganisela zezingxenye ezingaba yinkulungwane, ivolti yamadokhumenti enokubuyekezwa, i-add-on ye-Solid FEM yokuhlola ukucindezeleka, izindlela eziyishumi zomnsalo, usayizi wensimbi yase-UK, isigaba sokushicilela nama-add-on okushicilela nge-resin.
keywords: okusha, what's new, izinkulumo zokukhishwa, changelog, 0.9, i-fillet phakathi kwezinhlangothi, ibhola elizungezayo, ama-fillet amaningi, jiya, isolidi kusuka kubuso, i-step shell, iges solid, ama-fillet kusikena, inhlanganisela enkulu, ukubonisa okulula, izingxenye ezingu-20000, amadokhumenti, ivolti, phuma, ukubuyekeza, inguqulo, ukukhishwa, ukusetshenziswa kwendawo, i-rhino link, grasshopper, 3dm, izikhombi, ifloor yefektri, uhlu lomsebenzi, solid fem, finite element, von mises, imvamisa yemvelo, izindlela zomnsalo, umnsalo wamaphuzu amathathu, usayizi wensimbi ye-uk, blue book, isigaba sokushicilela, resin, goo, ctb, ibhedi, lay flat, okusha, izinguquko, 0.8, 0.8.1, inguqulo, izici ezintsha, ukuhlaziya okuphilayo, buyekeza ngenkathi uhlela, phula, yini eqala ukuphuka, isilinganiso somthwalo, ukuvuna, okungelona, ukuthintana, calculix, ukufunda ukunyakaza, isikhala, ubuso, nurbs, lungisa, uqoqo, zebra, engineer, isikhiqizi, isidumbu esikhiqiziwe, isikethi esivela esithombeni, isikali sokushicilela, hlukanisa ukushicilela, ukuncipha, amashidi ahlelwe, g-code, umdwebo, linganisa izimbobo, umsizi, mcp, izilimi, imigqa yebha yamathuluzi
from: 96d9fbfa
---

Lokhu yilokho okushintshile ku-PartCraft 0.9, kuqhathaniswa ne-0.8.1. Ubuso bokwakha ngokukhululeka manje buvala buba yizolidi, izinhlanganisela zezingxenye ezingaba yinkulungwane zisasebenziseka, ivolti yamadokhumenti igcina ukubuyekezwa, futhi i-add-on ye-Solid FEM ihlola ukucindezeleka kwengxenye. Incwadi ngayinye ichaza lapho okutholakala khona.

## Okusha ku-0.9.1

- **Ukuthumela i-STEP eqondile.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} no-{{ui:STEP AP214 (exact solid)}} manje kuyasebenza. Imigodi, izigxivizo, ama-fillet, ama-cone, amasfere nama-torus kubhalwa ngobuso bawo bangempela nemibuthano yangempela njengemiphetho, ukuze enye inhlelo ye-CAD noma ye-CAM ikwazi ukubona umgodi njengomgodi. Izinhlangothi ze-spline, izinsongo ezimodelwe nama-mesh angeniswe zihlala njengama-facet athambile kwolwezolidi olufanayo. Bheka [Ukuthumela ukuze kushicilelwe, i-STEP ne-DXF](topic:export-files#for-other-cad-programs-step).
- **I-STEP ingena, i-STEP eqondile iphuma.** Ifayela le-STEP olivulayo ligcina ubuso balo obuthe, amasilinda, ama-cone, amasfere nama-torus, ngakho {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} iwabhala njengobuso bangempela kunokuba ibe ama-facet: i-beam yomhlinzeki enemigodi yebhawodi iphuma nobuso bayo obufanayo okungene ngabo, kanye nanoma yini osuyisikile kuwo. Ubuso be-spline, obuphonswe nobuphendulwe kulelo fayela buhlala buyama-facet, kanjalo nezinto ezivela ku-STL, OBJ ne-3MF. Vula kabusha ifayela le-STEP ukuze uthole ingxenye elondolozwe kwangaphambili. Bheka [Vula ifayela le-STEP wakhe ngalo](topic:import-step).
- **Amasekeli angangempela ku-DXF yobuso.** {{ui:Export}} › {{ui:DXF of the sketch or flat face}} uma kukhethwe ubuso obuthe, manje ibhala izimbobo ezizungezile njengamasekeli, ngophakathi neradiyasi yembobo ngayinye, ukuze kusetshenziswe itafula lelaser, leplasma noma le-waterjet. Ezinye izimbobo ezizungezile zihlala ziyama-facet.
- **I-STEP eqondile yasezitolo.** Ku-{{ui:Manufacture}}, {{ui:Exact STEP (work coordinates)}} ibhala ingxenye nomsuka wayo endaweni yomsuka womsebenzi wesethapu kanye ne-Z ilandela i-tool axis, izixhumanisi ezisetshenziswa yi-G-code. Bheka [Yakha ama-toolpath ne-G-code](topic:manufacture#exact-step-for-the-shop).

## Okusha

### Ubuso nezolidi

- **I-fillet phakathi kwezinhlangothi.** Khetha {{ui:Surfaces}} kubhokisi ye-{{ui:Workspace}}, bese {{ui:Fillet between faces}}. Khetha izinhlangothi ezimbili zesolidi eyodwa, bhala iradiyasi (kanye ne-{{ui:Radius at the end (mm, 0 = the same)}} ukuze uthole iradiyasi eshintsha ngasemphethweni). Umugqa wemiphumela utshela ukuthi i-fillet ikude kangakanani nebhola elizungezayo elifanele, futhi iradiyasi engafanele iyenqatshelwa ibhekise kobuso obubizwe. {{ui:Fillet several edges}} igoqa imiphetho eminingi ngesinyathelo esisodwa; khetha {{ui:Corners (sphere patch where three meet)}} ukuze uthole ikhona lesfere lapho imiphetho emithathu egoqekile yobuso obuthe ihlangana. Bheka [Ubuso bokwakha ngokukhululeka (NURBS)](topic:nurbs-surfaces).
- **Ukujiya ibe yisolidi.** {{ui:Thicken into a solid}} kulesi sikhala sokusebenza sinikeza ubuso ukujiya; {{ui:Other side}}iwukhulisa ngakolunye uhlangothi. Ukugoqeka noma ukuqhubeka kwaso kuyenqatshelwa kubhekiswe kobuso nendawo ebizwe.
- **Izolidi kusuka kubuso.** Ubuso obusikiwe bungahlanganiswa nge-union, subtract ne-intersect bese kufakwa engxenyeni njengesinyathelo esisodwa sokuhlehlisa. I-STEP ibhala isolidi njengegobolo elivaliwe elilodwa kanti i-IGES njengesolidi elilodwa; kokubili kufundwa kabusha njengesolidi. Uma ubuso bungahlangani ngemiphetho nemiphetho, ifayela linikeza ubuso obuhlukene futhi umugqa wesimo uyasho lokho. Izolidi zingenziwa nakumhleli wenodi; bheka [Umhleli wenodi](topic:nodes).
- **Ama-fillet nama-variable ekuskeniweni.** Uma ufaka ubuso kuskeni, ama-fillet asemaphethweni (torus) nama-fillet aguqukayo eradiyasi ngasemphethweni onomugqa oqondile uwasho nawo futhi ahlwanyelwe nendlela yeradiyasi yawo. Ivivinywe kuskeni elenziwe ngokwakhe kuphela.

### Izinhlanganisela, amadokhumenti nezixhumanisi

- **Izinhlanganisela ezinkulu.** Izingxenye ezingamakopi zabelana ngemeshi eyodwa, futhi {{ui:Views}} › {{ui:Lightweight display}} idweba amabhokisi ukuze umbono uqhubeke unyakaza (uyavula ngokwawo ezinhlanganisweni ezinkulukazi; ukukhetha nama-jointasasebenzisa izingxenye zangempela). Ihlu lezingxenye likhombisa imigqa yalo yokuqala kanye nenkinobho ethi {{ui:Show 700 more}} yezinye. Amafayela ezinhlanganisela angaba namacala angama-50,000 kanye nama-joint angama-100,000. Bheka [Akha inhlanganisela](topic:build-assembly).
- **Amadokhumenti.** {{ui:Documents…}} kweqembu le-**File** ivula ingxoxo ngaphezu kwefolda yephrojekthi: hlola ukuthatha nokubuyisa, izinhlamvu zokubuyekezwa, izimo (umsebenzi oqhubekayo, ukuze kubhekwe, kukhishiwe, kuphelelwe yisikhathi), umlando, lapho kusetshenziswa khona nohlu lwezinto ezidingekayo. Bheka [Amadokhumenti nokubuyekezwa (ivolti)](topic:documents-walkthrough).
- **Ixhumanisi ye-Rhino ephilayo.** Ukubhalwa kwe-script eyodwa, `cadcraft_link.py`, kubheka idokhumenti ye-Rhino noma ye-Grasshopper bese kuthumela kuPartCraft kuphela okushintshile, lapho isici esiyengiwe sakha kabusha ngesimo esisha. Ihamba ngohlangothi olulodwa futhi idinga i-Studio. Bheka [Ixhumanisi ye-.3dm ephilayo](topic:live-3dm-link).
- **Bonani izikhombi zomunye nomunye.** Esikhathini esabelwanayo, isikhombi ngasinye sibonisa igama lomuntu nesici asikhethile. Bheka [Sebenza ngokuphila nabanye](topic:work-live).
- **Ifloor yefektri.** Vula i-add-on ethi Factory floor ku-{{ui:Settings}} › {{ui:Add-ons}}. Emva kokuthumela uhlelo ku-{{ui:Manufacture}}, ithebhu yalo ingathi {{ui:Add to the factory job queue}} noma {{ui:Save as a job file}}. Ayikaze ithumele noma iqalise umshini.

### Ukuhlaziya nezingxenye

- **I-add-on ye-Solid FEM.** Vula {{ui:Solid FEM}} ku-{{ui:Settings}} › {{ui:Add-ons}} (ivalwe kuze kube yilapho uyivula) bese ithebhu ethi {{ui:Solid FEM}} iyavela ephaneleni lesokunxele. {{ui:Mesh the part}}, khetha ubuso obuqinile nemithwalo embonweni we-3D, {{ui:Solve}}, bese udweba ukunyakaza, ukucindezeleka kwe-von Mises noma isimo semodi ngo-{{ui:Show on the model}}. Bheka [Solid FEM: ukuhlolwa kokucindezeleka](topic:solid-fem-check).
- **Umnsalo kuzikhethi, izindlela eziyishumi.** Umcibisholo ongaseceleni kwe-{{ui:Arc}} kubha yamathuluzi yesikethi ubhala i-3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length kanye ne-Continue. Bheka [Dweba umnsalo ngezindlela eziyishumi](topic:sketch-arc-methods).
- **Usayizi wensimbi yase-UK.** Izakhiwo ezihlanganisiwe zingasebenzisa izigaba ezingu-976 ze-UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); bhala usayizi onjengo `305x165x40 UB`. Bheka [Izingxenye zesakhiwo](topic:structural-members).

### Ukushicilela

- **Isigaba sokushicilela.** Inkinobho ethi {{ui:Print stage}} kubha yamathuluzi (i-add-on ethi 3D Print, evulekile ngokuzenzakalela) ibeka izimbiwa zengxenye yakho ebhedini eligxilwe: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, bese {{ui:Send to 3D printer}} nge-USB, Klipper (Moonraker), OctoPrint noma PrusaLink. Akukho okuthunyelwayo kuze kuqinisekiswe, futhi ingxenye yakho ayikaze ishintshwe. Ngefayela le-STL noma le-3MF, bheka [Lungiselela ingxenye ukuze ushicilele nge-3D](topic:print-3d).
- **Ukushicilela nge-resin.** Ama-add-on ku-{{ui:Settings}} › {{ui:Add-ons}}, avaliwe kuze kube yilapho uwavula: i-resin slicer, ukuhlolwa kokuvezwa, namafomethi amafayela i-Elegoo GOO, SL1, Chitubox CBDDLP/CTB kanye ne-Anycubic. Ukusikwa kwenziwa ku-worker thread, ngakho ikhasi liyaphendula.

## Kuzo zonke izinhlelo

- Yonke incazelo yokuhamba ngomshini wesilinganiso (hover) ingumyalezo we-Bootstrap tooltip.
- Ithiphu yokuqala inenkinobho yokuvala; ihlala ivaliwe.
- Umugqa wamathebhu ephaneli ongafanele uskrola ngokuthi ungasikwa.
- Ithebhu yesiphequluli ibonisa igamaledokhumenti evulekile ngaphambi kwe-PartCraft | CadCraft.
- {{ui:Settings}} ibonisa {{ui:Layout}} yendawo yokusebenza njengohlu lokukhetha, nebhokisi yolimi ihlu lazo zonke izilimi okwakhiwe ngazo.
- I-Weight ne-Temperature ziyizinhlobo zamayunithi kuzilungiselelo zamayunithi.

## Kulungisiwe

- Imenyu ye-Arc yesikethi manje ibhala zonke izindlela.
- Ibha yamathuluzi ye-add-on nesihloko sethebhu yesiphequluli kulungiswe ngo-2026-11-09.

## Imikhawulo eqondile

- I-STEP eqondile ifundwe kabusha ku-OpenCascade (izolidi ezisebenzayo, imithamo elingana nale ebalwe ngesandla). Asikayivulwa kuzo zonke izinhlelo ze-CAD noma ze-CAM, futhi inhlanganisela ayibhalwa njenge-STEP eqondile.
- Akukaze kushicilelwe nakancane kuphrinta yangempela. Ukusika, i-G-code namafayela e-resin kufundwe kabusha yizinhlelo zethu noma yiphrinta elingeniswa esikhundleni; akukho fomethi ye-resin elayishwe kuphrinta, futhi usayizi wephrinta nokuvezwa kwayo kungamaphuzu okuqala.
- I-Solid FEM ilinganiselwe, ayinasici futhi iyaguquguquka, inempahla eyodwa ngengxenye ngayinye, ayinakuxhumana, ukuvuna noma ukugoqeka. Ukucindezeleka emabhuleni agxilile nasezikhonweni ezibukhali kuncike emeshini. Iyisisekelo sokuhlola, ayihlolwanga yinjiniyela.
- Izikhathi zezinhlanganisela ezinkulu zivela kuseva engenayo i-GPU; uhlaka olugcwele imininingwane yezingxenye ezingu-20,000 selusathatha imizuzwana khona.
- Ama-fillet asebenza ezibhangqwaneni zobuso; akukho ukuxubana okujwayelekile kwamaphoyinti, nakukho i-fillet phakathi kobuso obungahlangani.
- Ixhumanisi ye-Rhino ayikaze isebenze phakathi kwe-Rhino noma i-Grasshopper yangempela. I-Documents ihlolwe izinhlelo ezimbili kufolda eyodwa, hhayi abantu ababili kwinethiwekhi eyabelwana.
- Ukufaka ubuso kuskeni sangempela akukahlolwa ngesandla. Izilimi ezingaphandle kwesiNgisi ziyizinhlobo zomshini.
- Abafakeli be-Windows abasayinwanga ikhodi, nesithombe sediski se-macOS asiqinisekiswanga. Bheka [Ukuxazulula izinkinga](topic:troubleshooting).

Izinguquko zangaphambili zisekhasini [Okusha ku-0.7](topic:whats-new-0-7).

## Mandulo: 0.8 no-0.8.1

Lokhu yilokho okushintshile ku-PartCraft 0.8 ne-0.8.1, kuqhathaniswa ne-0.7. Ukulingisa kuphendula ngenkathi uhlela futhi kukutshela ukuthi yini eqala ukuphuka, izinhlanganisela zithola izifundo zokunyakaza, nezindawo zokusebenza ezintsha zenza ubuso bokwakha ngokukhululeka nezingxenye ezilinganiswe ngefiziksi. I-0.8.1 ukulungiswa okuncane.

### Okusha

**Ukulingisa**

- **Buyekeza ngenkathi ngihlela.** Khetha {{ui:Update while I edit}} ebhlokeni ethi Xazulula, bese izimpendulo zilandela izinguquko zakho. Shintsha isilinganiso, umthwalo noma impahla bese impendulo esheshayo, eyenziwe ngamaelementi amakhulu kabili, iyavela ngokushesha; uma umisa cishe isekhondi, impendulo ehlaziywe yocwaningo ibhala indawo yesikhathi esikhulu. Imiphumela ithi ungabona yiphi. Ku-cantilever yensimbi impendulo esheshayo yayiphakathi kuka-1 % ngokugoba necishe ka-4 % ngokucindezeleka kwesifanekiso sayo esicindezelwe. Bheka [Hlola ukucindezeleka nokugoba](topic:simulation#update-while-you-edit-live).
- **Okuphula kuqala.** Ngocwaningo olumile noma lokugoqeka, {{ui:What breaks first?}} ebhlokeni ethi Phula iskala imithwaloize ingxenye ibambelele. Ihlu, okubi kakhulu kuqala, isilinganiso somthwalo sokuqala ukukhiqiza (nophawu obubomvu lapho ukucindezeleka kuphakama khona) nesilinganiso somthwalo sokugoqeka. Isilinganiso esingaphansi kuka-1 usho ukuthi ingxenye isiyaphuka njengoba ilayishiwe, futhi ipanele i-Problems likhombisa iphutha. Izilinganiso zivela ocwaningweni olulinganayo, ngakho zilungile njengalo. Bheka [Hlola ukucindezeleka nokugoba](topic:simulation#find-out-what-breaks-first-break-it).
- **Ukukhiqiza nokuthintana.** Izinhlobo ezimbili zocwaningo ezengeziwe: eyodwa engelinganiyo lapho impahla ilandela umugqa wayo oqondile kuze kufike ekucindezelekeni kokukhiqiza bese ibe nomzila ophansi, enemichilo yokucindezeleka kwepulasitiki, nengabe yokuthintana lapho izingcezu ezihlukene zicindezelana (ngaphandle kokungqubuzana) noma zihlale zinamathelene (ziboshwe). Isinyathelo somthwalo esingeke sizinze, noma izingcezu ezingena kakhulu kwenye, zibonakala ephaneleni lezinkinga. Ukungqubuzana, ukunyakaza okukhulu, ukujikeleza okukhulu, ukugoba okukhulu nokukhathala akuxazululwa. Bheka [Hlola ukucindezeleka nokugoba](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Amadekhi ye-CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} ilondoloza ucwaningo ye-CalculiX, uhlelo oluhlukile ofakayo futhi oluqalisa wena; {{ui:Export}} › {{ui:CalculiX results (.frd)}} ifunda ifayela lemiphumela yalo ibuyele kuleyo mesh efanayo. I-PartCraft ayiqali lolo hlelo, futhi iyasho uma ingxenye ishintshile kusukela kulondolozwa idekhi.

**Izinhlanganisela**

- **Ucwaningo lokunyakaza.** {{ui:Assembly}} › {{ui:Motion}} iqhuba inani lejoint eyodwa phezu kwesikhathi onikeza (isivinini esingaguquki, esithambile, i-sine, noma phambili nasemuva), ibeka inhlanganisela esinyathelweni ngasinye ngama-joint nemijikelezo evaliwe, futhi ibika lapho izingxenye zingqubuzana khona nokuthi zisondela kangakanani. I-{{ui:Add a point}} ihlela isimo, isivinini nokushesha kwephoyinti, inani lejoint nesikhala ngokuhamba kwesikhathi; {{ui:Save CSV}} no-{{ui:Save plot}} zikubhalela ngaphandle. Ngemva kwe-{{ui:Run}}, ibha ethi Hamba ngokuqhubeka iyisa inhlanganisela kunoma yisiphi isinyathelo. Izilungiselelo zocwaningo zilondolozwa kwifayela le-assembly. Isivinini nokushesha kuvela kumaphoyinti arekhodiwe, ngakho sebenzisa izinyathelo eziningi uma iphuzu elibukhali lifunda lincane. Bheka [Hlola inhlanganisela ngokungqubuzana nokunyakaza](topic:check-assembly#a-motion-study).

**Ubuso nezingxenye ezivela kufiziksi**

- **Indawo yokusebenza yobuso.** Khetha {{ui:Surfaces}} kubhokisi ye-{{ui:Workspace}} ukuze uthole amajika ne-NURBS abuyela ngasohlangothini lwengxenye: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} kanye {{ui:Zebra}}, nokuqhubeka (G0, G1 noma G2) kulinganiswa ebusweni obungangempela nomphetho okungcono kancane kunalokho obukucelile ubhalwe ku-Problems nesilungiso se-Match. I-{{ui:Fair}} ilinganisa imigqa ye-hull ukuze ithole izindawo zokuguquka nokuguquka kokugoba bese yakha kabusha ezingalungile ngaphakathi kokubekezelela kwakho. Ubuso bulondolozwa kwifayela lengxenye futhi abushintshi izici zengxenye. Bheka [Ubuso bokwakha ngokukhululeka (NURBS)](topic:nurbs-surfaces).
- **Indawo yokusebenza ye-Engineer.** Khetha {{ui:Engineer}} kushintshi wendawo yokusebenza, khetha isikhiqizi bese uchofoza {{ui:New}}: iskripthi silinganisa ingxenye ngokusho ukuthi kufanele yenzeni (ukushisa ukuze kuhambe, imifudlana, ingcindezi, impahla, inqubo yokushicilela) ngezifomula zencwadi bese iyakha, bese ibuyisa izibalo esizisebenzisile nemithombo yazo, izinhlolo zayo zokukhiqiza nemafayela ezithulusi zokuhlaziya. Okokufaka okufanayo kunika ingxenye efanayo kunoma iyiphi kompyutha. Isikhiqizi siyagcinwa engxenyeni, futhi ukuvula ingxenye akukaze kuqalise iskripthi. Bheka [Izingxenye ezivela kufiziksi: abakhiqizi](topic:engineer-generators) kanye [Bhala isikhiqizi](topic:write-a-generator).

**Ukudweba ngesikethi, imidwebo nokwakha**

- **Isikethi esivela esithombeni.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} ilandelela isithombe sengxenye eyisicaba esisekelweni esicacile (umbandela nezimbobo) noma umdwebo wepeni ibe yimigqa, imimango nemibuthano. Unikeza ubude obubodwa, ubheka ukubuka kuqala bese wenza isikethi. Bheka [Izisekelo zesikethi](topic:sketch-basics#a-sketch-from-a-photo).
- **Ukulinganisa nokuhlukanisa ukushicilela.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} iskala ngompheme ngaphandle kokushintsha ingxenye, isibonelo ngesilungiselelo sokuncipha. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} inquma ingxenye ekhulu kakhulu ebhedini lakho ibe yizingcezu ezinombolo ezihlanganiswe ngamaphini, izikhiye, amadovetheyili, izimbobo zamadawela noma izikhala zamagnethi. Bheka [Shicilela nge-3D](topic:print-3d).
- **Amashidi ahlelwe ku-G-code.** {{ui:Export}} › {{ui:Nested sheets to G-code}} ifunda i-DXF ehlelwe bese yenza uhlelo olulodwa ngeshidi ngalinye ngokusebenzisa i-post oyikhethayo: izimbobo nokusikwa kuqala, bese kuba imiphetho. Ayihleli ukungena, ukuhleleka kokusika noma imiphetho ehlanganyelwe. Bheka [Hlela izingxenye ezicaba ngamashidi](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Imidwebo yenza okwengeziwe ngokwayo.** {{ui:Sheet}} › {{ui:Automatic}} ikhetha ishidi elincane lesayizi-A elibamba imibono ngesilinganiso esikhulu esijwayelekile esingafiki ku-1:1. {{ui:Dimension the holes}} ibeka uphawu lwesikhungo kwimbobo ngayinye, isichasiselo esisodwa ngosayizi nezindawo ezivela ekhoneni elingezansi kwesobunxele lombono. Bheka [Yenza umdwebo](topic:drawing-pdf).

**Kuzo zonke izinhlelo**

- **Izilimi.** Izinhlelo zifika ngezilimi ezingama-54. Ezingaphezu kwesiNgisi ziyizinhlobo zomshini kuze kufunde kabusha isipikha sendabuko.
- **Imigqa yebha yamathuluzi.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ikhetha i-Wrap (njengangaphambili), imigqa emi-2 noma umugqa ongu-1; ibha engafanele iskrola ngokuthi ingasikwa. Umugqa wezici we-PartCraft ubonisa ithuluzi elisetshenziswa kakhulu ngobukhulu futhi ufihle izinhlobo ngemuva kwenkinobho ehlukanisiwe.
- **Xhumanisa i-AI yakho.** I-Studio iyisikhungo sokuxhumanisa umsizi wakho siqu kuzo zonke izinhlelo eziyisishiyagalombili, nemvume yokufunda kuphela, yokuphakamisa noma yokuhlela ngohlelo ngalunye. Umsizi oxhunyiwe ungakala ingxenye ngomusho onjengesibambisi somthwalo, akhombise ukusebenza kwawo nazo zonke izinhlolo, bese uyakha; ubika ukuthi ayikhangelanga ini (ukugxilwa kokucindezeleka, ukukhathala, ukuphuphuma kwepulasitiki). Bheka [Sebenzisa i-PartCraft nomsizi we-AI](topic:use-with-ai-assistants).

### Kulungisiwe ku-0.8.1

- **Ukuqandiswa kwesikhombi esigcwele isikrini.** Ukukhetha ngokuhamba kwesilinganiso manje kuyanqunywa. Imbangela iyisifundo sethu esihle kakhulu futhi ayiqinisekiswanga nomuntu owayibike.
- **Ulimi ngesikhathi sokusebenza.** I-Studio nezinguqulo ezipakishiwe zingashintsha ulimi zisasebenza; ngaphambili kwakuyisiNgisi kuphela. Akuvivinywanga kuzo zonke izinkundla: sitshele uma ulimi lungashintshi.

### Akukakatholakali kulolu hlelo

- Xhumanisa i-AI yakho ayiqedile: ukuxhumana ngokuchofoza kanye nesistimu ye-Studio, isixhumanisi esiphethwe yiwebhu yome-AI, ukhiye wakho we-API ngaphakathi kwe-Studio kanye nephakheji eshicilelwe ye-MCP akwethenjiswanga. I-Studio alinayo i-AI yayo.
- I-Studio ayisayinwanga ikhodi: i-Windows ingase isixwayise, futhi i-macOS icela ukuthi uchofoze ngakwesokudla bese uthi Vula. Bheka [Ukuxazulula izinkinga](topic:troubleshooting).
- Izinxhumanisi ze-stack-up sezisaqondile kuhlangothi olulodwa: bheka [Tolerance stack-ups](topic:tolerance-stackup).
- Okunye kushiwo ku-[Okungakakhiwe](topic:not-built-yet).

Izinguquko zangaphambili zisekhasini [Okusha ku-0.7](topic:whats-new-0-7).
