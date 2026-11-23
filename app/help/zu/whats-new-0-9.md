---
title: Okusha ku-0.9 (kwangaphambili)
summary: I-PartCraft 0.9 yengeza ama-fillet phakathi kobuso nokujiya kube yizolidi, ama-assembly ezinkulungwane zezingxenye, indawo yamadokhumenti enokubuyekezwa, i-Solid FEM stress add-on, izindlela eziyishumi zokwakha i-arc, usayizi wensimbi wase-UK, isigaba sokushicilela nama-add-on okushicilela nge-resin.
keywords: okusha ku-0.9, ukukhishwa kwangaphambili, okusha, izinto ezisha, release notes, changelog, 0.9, fillet phakathi kobuso, rolling ball, fillet eminingi emaphethelweni, thicken, isolidi esivela ezindaweni, step shell, iges solid, ama-fillet eskani, assembly enkulu, lightweight display, izingxenye ezingu-20000, amadokhumenti, vault, check out, revision, release, lapho kusetshenziswa, rhino link, grasshopper, 3dm, amakhesa, factory floor, job queue, solid fem, finite element, von mises, natural frequency, izindlela zesigaba, izindlela ze-arc, izigaba zensimbi ze-UK, blue book, print stage, resin, goo, ctb, bed, lay flat, okusha, izinto ezisha, release notes, changelog, izinguquko, 0.8, 0.8.1, inguqulo, izici ezintsha, live analysis, update while editing, break it, what breaks first, load factor, nonlinear, yield, plastic strain, contact, calculix, motion study, clearance, surfaces, nurbs, fair, hull, zebra, engineer, generator, generated body, isketshi esivela esithombeni, ukulinganisa kokushicilela, ukwahlukanisa kokushicilela, shrinkage, nested sheets, g-code, drawing, dimension holes, assistant, mcp, izilimi, toolbar rows
from: 1dafd7c8
---

Lokhu yikho okushintshile ku-PartCraft 0.9, kuqhathaniswa ne-0.8.1. Izindawo eziqinile manje zivala zibe yizolidi, ama-assembly ezinkulungwane zezingxenye ahlala esebenziseka, indawo yamadokhumenti igcina izinguquko, futhi i-add-on ye-Solid FEM ihlola ukucindezela engxenyeni. Into ngayinye ikutshela lapho ngokuthola khona.

## Okusha ku-0.9.1

- **Ukuthumela i-STEP enembile.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ne-{{ui:STEP AP214 (exact solid)}} manje ziyasebenza. Imigodi, izinsimbi, ama-fillet, amakhoni, amasphere nama-torus kubhalwa ebusweni babo bangempela namasirkili angempela njengemiphetho, ukuze olunye uhlelo lwe-CAD noma le-CAM lukwazi ukukhetha imbobo njengembobo. Izinhlangothi ze-spline, imithambo emodeli nama-mesh angeniswe ahlala njengama-facet ayinhlanganisela efanayo. Bona [Ukuthumela ukuze kuphrintwe, STEP ne-DXF](topic:export-files#for-other-cad-programs-step).
- **I-STEP ingena, i-STEP enembile iphuma.** Ifayela le-STEP oliviulayo ligcina ubuso bayo obusicaba, amasilinda, amakhoni, ama-sphere nama-torus, ngakho {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} iwabhala ngokuphinda njengobuso bangempela esikhundleni semifanekiso: ibhomu lomthengisi elinezimbobo zesikulufo liphuma nobuso bayo bokuqala, kanye nalokho okusikiwe kuyo. Ubuso obugobile, obuphendukayo nobuphonswa kwefayela buhlala bungama-facet, kanjalo nemizimba evela ku-STL, OBJ ne-3MF. Vula ifayela le-STEP futhi ngengxenye elondolozwe ngaphambili. Bona [Vula ifayela le-STEP bese wakha kulo](topic:import-step).
- **Ama-circle angempela kwi-DXF yobuso.** {{ui:Export}} › {{ui:DXF of the sketch or flat face}} ngobuso obusicaba obukhethiwe manje ibhala izimbobo ezizungezile njengamasirkili, ngesikhungo sembobo nomsakazo wayo, ye-laser, plasma noma i-waterjet table. Okunye okuzungezayo kusasala kuma-facet.
- **I-STEP enembile yesitolo.** Ku-{{ui:Manufacture}}, {{ui:Exact STEP (work coordinates)}} ibhala ingxenye ngemvelaphi yayo ku-work origin yesetha ne-Z ngokuhamba nge-eksisi yethuluzi, izixhumanisi ezisetshenziswa yi-G-code. Bona [Yenza izindlela zethuluzi ne-G-code](topic:manufacture#exact-step-for-the-shop).

## Okusha

### Izindawo nezolidi

- **I-fillet phakathi kobuso.** Khetha {{ui:Surfaces}} ebhokisini le-{{ui:Workspace}}, bese {{ui:Fillet between faces}}. Khetha ubuso obubili besolidi elilodwa, uthayipe ububanzi (kanye ne-{{ui:Radius at the end (mm, 0 = the same)}} ukuze umsakazo ushintshe ngomphetho). Umugqa wemiphumela ushilo ukuthi i-fillet ikhashelwe kangakanani kusuka ebhola elikhulu elivela, futhi umsakazo ongalingani uyenqatshelwa nobuso obuqanjiwe. {{ui:Fillet several edges}} ijikisa imiphetho eminingi ngesinyathelo esisodwa; hlola {{ui:Corners (sphere patch where three meet)}} ukuze ube nekhoni lesphere lapho imiphetho emithathu ezungezwe ihlangana khona. Bona [Izindawo ezingagoqiwe (NURBS)](topic:nurbs-surfaces).
- **Ukujiya kube yisolidi.** {{ui:Thicken into a solid}} kuleso sikhala sokusebenza inikeza indawo ukujula; {{ui:Other side}} iyikhulisa ngolunye uhlangothi. Ukugoba noma ukuzihlanganisa kwenqatshelwa nobuso nendawo okuqanjwe ngayo.
- **Izolidi ezivela ezindaweni.** Izindawo ezisikiwe zingahlanganiswa nge-union, subtract ne-intersect bese zibhakwa engxenyeni njengesinyathelo esisodwa sokuhlehla. I-STEP ibhala isolidi njengesigqoko esisodwa esivaliwe ne-IGES njengesolidi esisodwa; zombili zifundwa njengesolidi. Uma ubuso bungahlanganisi ngomphetho ngomphetho, ifayela lithola ubuso obuhlukene futhi umugqa wesimo uyakutshela lokho.
- **Ama-fillet emaphethelweni nawahlukile eskanini.** Lapho ulingana izindawo namaskani, ama-fillet emaphethelweni (ama-torus) nama-fillet anobubanzi oshintshayo emaphethelweni acishe aqondile nawo ayafunwa futhi ayadweshwa nomsakazo wawo. Ihlolwe kumaskani aqanjiwe kuphela.

### Ama-assembly, amadokhumenti nezixhumanisi

- **Ama-assembly amakhulu.** Izingxenye ezingamakhophi zabelana ngemesh eyodwa, nokuthi {{ui:Views}} › {{ui:Lightweight display}} idweba amabhokisi ukuze umbono uqhubeke uhamba (ivula yodwa ama-assembly amakhulu kakhulu; ukukhetha nama-joint asasebenzisa izingxenye zangempela). Umsebhenzi wesihlahla singxenye ibonisa imigqa yayo yokuqala nenkinobho ethi {{ui:Show 700 more}} yezinye. Amafayela e-assembly angabamba izimo ezingu-50,000 nama-joint angu-100,000. Bona [Yakha i-assembly](topic:build-assembly).
- **Amadokhumenti.** {{ui:Documents…}} eqenjini le-**File** ivula ingxoxo ngaphezu kwefolda yephrojekthi: hlola ukuphuma nokungena, izinhlamvu zokubuyekezwa, izimo (umsebenzi oqhubekayo, ukubuyekezwa, ukukhishwa, okungasasebenzi), umlando, ukuthi kusetshenziswa kuphi nobhalo lwezinto. Bona [Amadokhumenti nokubuyekezwa (i-vault)](topic:documents-walkthrough).
- **Ukuxhumana kwe-Rhino ngqo.** Iskripthi esisodwa, `cadcraft_link.py`, silanda idokhumenti ye-Rhino noma ye-Grasshopper, bese lithumela okushintshile kuphela ku-PartCraft, lapho isici esingeniswe sakhiwa kabusha ngaleso sakhiwo esisha. Iyindlela eyodwa futhi idinga i-Studio. Bona [Ukuxhumana kwe-.3dm ngqo](topic:live-3dm-link).
- **Bona ama-cursor kabili.** Kusikhathi sokwabelana, i-cursor ngayinye ibonakala ngegama lomuntu nesici asikhethile. Bona [Sebenza ngokuphila nabanye](topic:work-live).
- **Isakhiwo sefektri.** Vula i-add-on ye-Factory floor ku-{{ui:Settings}} › {{ui:Add-ons}}. Ngemva kokushicilela uhlelo ku-{{ui:Manufacture}}, ithebhu yayo ingakwazi ukuthi {{ui:Add to the factory job queue}} noma {{ui:Save as a job file}}. Ayisoze ithumele noma iqalise umshini.

### Ukuhlaziya nengxenye

- **I-add-on ye-Solid FEM.** Vula {{ui:Solid FEM}} ku-{{ui:Settings}} › {{ui:Add-ons}} (icishe ivalwe kuze kube yilapho uyivula) bese ithebhu ye-{{ui:Solid FEM}} ivela ephaneli yesokudla. {{ui:Mesh the part}}, khetha izindawo ezimile nemithwalo kumbono we-3D, {{ui:Solve}}, bese udweba ukunyakaza, ukucindezela kuka-von Mises noma ukuma kwemodi nge-{{ui:Show on the model}}. Bona [Solid FEM: ukuhlola ukucindezela](topic:solid-fem-check).
- **I-arc kumasketshi, ngezindlela eziyishumi.** Umcibisholo ngasemuva kwe-{{ui:Arc}} kwi-toolbar yesketshi uhlu lwe-3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length nokuqhubeka. Bona [Dweba i-arc ngezindlela eziyishumi](topic:sketch-arc-methods).
- **Usayizi wensimbi wase-UK.** Ukwakha kungasebenzisa izigaba ezingu-976 zase-UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); thayipha usayizi njenge-`305x165x40 UB`. Bona [Izingxenye zesakhiwo](topic:structural-members).

### Ukushicilela

- **Isigaba sokushicilela.** Inkinobho ye-{{ui:Print stage}} ku-toolbar (i-add-on ethi 3D Print, evulekile ngokuzenzakalelayo) ibeka izingxenye zakho ebhedini elinemigqa: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, bese {{ui:Send to 3D printer}} ngokusebenzisa i-USB, Klipper (Moonraker), OctoPrint noma PrusaLink. Akukho okuthunyelwa uze uqinisekise, futhi ingxenye yakho ayisoze yashintsheka. Ngefayela le-STL noma le-3MF, bona [Lungisa ingxenye yokushicilela nge-3D](topic:print-3d).
- **Ukushicilela nge-resin.** Ama-add-on ku-{{ui:Settings}} › {{ui:Add-ons}}, konke kuvaliwe kuze kube yilapho uyavula: isilicing se-resin, ukuhlola ukuchayeka, nefomethi yamafayela i-Elegoo GOO, SL1, Chitubox CBDDLP/CTB no-Anycubic. Ukusika kwenziwa kuthrede elisebenza ngaphandle, ngakho ikhasi liyaphendula.

## Kuzo zonke izinhlelo

- Isiqhoqo sokuhlanza sonke isiketshe sibe yi-Bootstrap tooltip.
- Ithiphu yokuqala inenkinobho yokuvala; ihlala ivaliwe.
- Umugqa wamathebhu wephaneli ongalingani uyaskrola uye ngakwesokudla esikhundleni sokusikwa.
- Ithebhu yesiphequluli ibonisa igama lodokhumenti ovuliwe ngaphambi kwe-PartCraft | CadCraft.
- {{ui:Settings}} ibonisa {{ui:Layout}} yesikhala sokusebenza njengohlu lokukhetha, nebhokisi lolimi libala zonke izilimi ezikwesakhiwo.
- Isisindo nokushisa zingohlobo lweyunithi kumasethingi weyunithi.

## Okulungisiwe

- Imenyu ye-sketch Arc manje ibala zonke izindlela.
- Ibha yamathuluzi ye-add-on nesihloko sethebhu yesiphequluli kwalungiswa ngomhla ka-2026-11-09.

## Imikhawulo eqinisekile

- I-Exact STEP ifundwe kabusha ku-OpenCascade (izolidi ezivumelekile, amavolumu alingana nalawo abalwe ngesandla). Ayikaboniswa kuwo wonke amaprogramu e-CAD noma e-CAM, futhi i-assembly ayibhalwa njenge-exact STEP.
- Akukaze kushicilelwe ngeprinta yangempela. Ukusika, i-G-code namafayela e-resin kufundwe kabusha yizinhlelo zethu noma ngeprinta elingamele; akukho fomethi ye-resin elayishwe ekhompyutheni ye-printer, nosayizi bama-printer nokuchayeka kungamaphuzu okuqala.
- I-Solid FEM ilinganile, ayiguquki ngokuqondile futhi iyinto eyodwa esetshenziswa, indawo eyodwa yezinto, ngaphandle kokuthintana, ukukhiqizwa noma ukugoba. Ukucindezela ezindaweni ezimile nasemakhoneni abukhali kuncike ku-mesh. Iyisisiza sokuhlola, ayibukwanga yinjiniyela.
- Izikhathi ze-assembly enkulu zivela kuseva engenayo i-GPU; isakhiwo esigcwele sezingxenye ezingu-20,000 sathatha amasekhondi lapho.
- Ama-fillet asebenza ngezibonelo zobuso ababili; akukho i-blend ejwayelekile yamaphoyinti, nokungekho i-fillet phakathi kobuso obungahlangani.
- Ukuxhumana kwe-Rhino akuzange kusebenze ngaphakathi kwe-Rhino noma i-Grasshopper yangempela. Amadokhumenti azange azame ngabantu ababili kunethiwekhi.
- Ukulingana kwezindawo namaskani wangempela akuzange kuhlolwe ngesandla. Izilimi ezingaphandle kwesiNgisi ziyizinhlobo zokuqala zomshini.
- Ama-installer e-Windows awasayinwe ngekhodi, nesithombe sedisiki se-macOS asiqinisekisiwe. Bona [Ukuxazulula izinkinga](topic:troubleshooting).

Izinguquko zangaphambili zitholakala kuthi [Okusha ku-0.7](topic:whats-new-0-7).

## Kwangaphambili: 0.8 ne-0.8.1

Lokhu yikho okushintshile ku-PartCraft 0.8 ne-0.8.1, kuqhathaniswa ne-0.7. Isimulation iyaphendula ngesikhathi uhlela futhi itshela ukuthi yini eqala ukuphuka, ama-assembly athola izifundo zokunyakaza, nezikhala ezintsha zenza izindawo ezingagoqiwe nezingxenye ezilinganiswa ngefisiksi. Ye-0.8.1 ingukukhishwa okuncane kokulungisa.

### Okusha

**Ukulingisa**

- **Shintsha ngenkathi ngihlela.** Hlola {{ui:Update while I edit}} kwibhlogi ye-Solve, bese izimpendulo zilandela izinguquko zakho. Shintsha ubukhulu, umthwalo noma impahla, impendulo esheshayo, eyenziwa ngezinto ezine ezinkulu kunazo, ivela ngokushesha; uma umisa cishe isekhondi, impendulo yokuhlaziywa yesifundo yayo ephucuzwe iyayidlulisa. Imiphumela ikutshela ukuthi ubheka eyiphi. Ku-cantilever yensimbi impendulo esheshayo ibe ngaphakathi kuka-1 % ekuguqukeni nangaphakathi kuka-4 % ekucindezelekeni kwayo ephucuzwe. Bona [Hlola ukucindezela nokuguquka](topic:simulation#update-while-you-edit-live).
- **Yini eqala ukuphuka.** Ngesifundo esimile noma se-buckling, i-{{ui:What breaks first?}} ku-**Break it** block ikala imithwalo kuze kuphuke ingxenye. Ilanda, okubi kakhulu kuqala, isici sokuqala sokuvimbela (ngophawu obomvu lapho ukucindezela kuphakama khona) nesici se-buckling. Isici esingaphansi kuka-1 sisho ukuthi ingxenye isivele ihlehla njengoba ilayishwe, futhi Problems ikhombisa iphutha. Lezi zici zivela esifundweni esilinganayo, ngakho zinhle njengalokho. Bona [Hlola ukucindezela nokuguquka](topic:simulation#find-out-what-breaks-first-break-it).
- **Ukuvuma nokuxhumana.** Izinhlobo ezimbili zezifundo ezengeziwe: esingalingani lapho izinto zilandela umugqa wazo kuze kube sesivinini sokuvuma bese sihamba kancane, nebhalwa umzuzwana wokuhamba ngale ndlela, nesingxhumanisa lapho izingxenye ezihlukene ziphushelana (ngaphandle kokungcangcazela) noma zibambelelene (zibotshelwe). Ukulayisha okungazinzile noma izingxenye ezicindezela kakhulu kuya ngaphakathi kwezinye kuyabonakala ku-Problems. Ukungcangcazela, ukunyakaza okukhulu, izinyathelo ezinkulu, ukuguquka okukhulu nokukhathala akuxazululwa. Bona [Hlola ukucindezela nokuguquka](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Ama-deck ye-CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} igcina isifundo ye-CalculiX, uhlelo olwehlukile olufakwa futhi olusebenziswa wena; {{ui:Export}} › {{ui:CalculiX results (.frd)}} ifunda ifayela lemiphumela libuyele kumesh efanayo. I-PartCraft ayisoze iqale lolo hlelo, futhi iyakutshela uma ingxenye ishintshile kusukela ngesikhathi kulondolozwe i-deck.

**Ama-assembly**

- **Izifundo zokunyakaza.** {{ui:Assembly}} › {{ui:Motion}} ishayela inani le-joint eyodwa ngesikhathi osinikeza (isivinini esihlala njalo, esilinganisiwe, i-sine, noma phumela nabuye): ibeka i-assembly ngesinyathelo ngasinye ngamajoyinti nalupu ezivaliwe, futhi ibika lokho okungqubuzanayo nokuthi izingxenye zisondelana kangakanani. {{ui:Add a point}} idweba indawo yephoyinti, isivinini nokushesha kwalo, inani le-joint nokukhala kusukela ngesikhathi; {{ui:Save CSV}} ne-{{ui:Save plot}} zikhipha lokho. Ngemva kwe-{{ui:Run}}, ibha ye-Step through the run ihambisa i-assembly kunoma yisiphi isinyathelo. Izilungiselelo zesifundo zilondolozwa efayelini le-assembly. Isivinini nokushesha kuvela emaphozisheni alondoloziwe, ngakho sebenzisa izinyathelo eziningi uma ukukhuphuka okubukhali kufunda kancane. Bona [Hlola i-assembly ukuthola ukuphambana nokunyakaza](topic:check-assembly#a-motion-study).

**Izindawo nezingxenye ezivela ku-physics**

- **Isikhala sezindawo ezingagoqiwe.** Khetha {{ui:Surfaces}} ebhokisini le-{{ui:Workspace}} ukuze uthole amajika nezindawo ze-NURBS ecaleni kwengxenye: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} ne-{{ui:Zebra}}, nokuqhubeka (G0, G1 noma G2) okulinganiswa ezindaweni ezinembile, nomphetho obi kakhulu kunalokho owacela ulethwa ku-Problems nge-Match fix. {{ui:Fair}} ilinganisa imigqa yesigqoko ukuze kutholakale ukuguquka nokushintsha kwesimo sokugoba, bese yakha kabusha ezingekho ngokuhle ngaphakathi kokubekezelela kwakho. Izindawo zigcinwa efayelini lengxenye futhi azishintshi izici zengxenye. Bona [Izindawo ezingagoqiwe (NURBS)](topic:nurbs-surfaces).
- **Isakhi se-Engineer.** Khetha {{ui:Engineer}} kwisishintshi sesikhala sokusebenza, khetha umakhi bese ucindezela {{ui:New}}: iskripthi silinganisa ingxenye ngalokho okufanele kukwenze (ukushisa ukuze kuhambe, imifudlana, ingcindezi, impahla, inqubo yokushicilela) ngezibalo zethekisthi, bese siyakhe, bese sibuyisa izibalo esizisebenzisile ngemithombo yazo, izihlola zokukhiqiza namafayela wamathuluzi okuhlaziya. Okufanayo kunikeza ingxenye efanayo kunoma iyiphi ikhompyutha. Umakhi ugcinwa engxenyeni, futhi ukuvula ingxenye akusoze kusebenzise iskripthi. Bona [Izingxenye ezivela ku-physics: abakhi](topic:engineer-generators) kanye [Bhala umakhi](topic:write-a-generator).

**Ukuklama, imidwebo nokwakha**

- **Isketshi esivela esithombeni.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} ilandelela isithombe sengxenye eyisicaba esisemhlabathini osobala (umphetho nezimbobo) noma umdwebo wepeni ibe yimigqa, ama-arc namasirkili. Unikeza ubude obubodwa, uhlole ukubukwa bese wenza isketshi. Bona [Izisekelo zesketshi](topic:sketch-basics#a-sketch-from-a-photo).
- **Ukulinganisa nokuhlukanisa ukushicilela.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} ilinganisa ngeyunithi ngayinye ngaphandle kokushintsha ingxenye, isibonelo ngesilinganiso sokuncipha. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} isika ingxenye enkulu kakhulu ebhedini lakho ibe yizingcezu ezinombolo ezihlanganiswe ngamapegi, izikhiye, ama-dovetail, izimbobo zamadowel noma izikhala zamagnethi. Bona [Shicilela nge-3D](topic:print-3d).
- **Amashidi afakiwe njenge-G-code.** {{ui:Export}} › {{ui:Nested sheets to G-code}} ifunda i-DXF efakiwe futhi yenza uhlelo olulodwa ngeshidi ngalinye ngokusebenzisa i-post oyikhethayo: izimbobo nezingxenye ezikhishiwe kuqala, bese kuba imiphetho. Ayihleli ukungena, indlela yokusika noma imiphetho ehlanganyelwe. Bona [Hlela izingxenye ezibhethiwe ezishidini](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Imidwebo eyenza okwengeziwe ngokwayo.** {{ui:Sheet}} › {{ui:Automatic}} ikhetha ishidi elincane le-A elibamba izibonelo ngesikali esijwayelekile esikhulu kuze kube ngu-1:1. {{ui:Dimension the holes}} ibeka uphawu lwesikhungo embobweni ngayinye, isilinganiso esisodwa ngosayizi ngamunye nezindawo ezivela ekhoneni elingezansi kwesobunxele lombono. Bona [Yenza umdwebo](topic:drawing-pdf).

**Kuzo zonke izinhlelo**

- **Izilimi.** Izinhlelo zifika ngezilimi ezingu-54. Eziphezu kwesiNgisi ziyizinhlobo zomshini ize kube yilapho umuntu wendabuko efunda.
- **Imigqa yebha yamathuluzi.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ikhetha i-Wrap (njengangaphambili), imigqa emi-2 noma umugqa oyodwa; ibha engafaneli iyaskrola ngokuthi isuke ngaphansi. Ibha yesici ye-PartCraft ibonisa ithuluzi elisetshenziswa kakhulu ngobukhulu, bese izinhlobo ziyacashwa ngemva kwenkinobho ehlukaniswe.
- **Xhuma i-AI yakho.** I-Studio iyisiteshi sokuxhumanisa umsizi wakho siqu nazo zonke izinhlelo eziyisishiyagalombili, ngelungelo lokufunda kuphela, lokuphakamisa noma lokuhlela ngohlelo ngalunye. Umsizi oxhunyiwe angalinganisa ingxenye kusukela kusigaba esifana nebhulaki ngomthwalo, akhombise umsebenzi wakhe nazo zonke izihlolo, bese ayakha; ubika lokho akungahlolanga (ukugxila kwesistimu, ukukhathala, ukuguqula kwamaplastiki). Bona [Sebenzisa i-PartCraft nomsizi we-AI](topic:use-with-ai-assistants).

### Okulungisiwe ku-0.8.1

- **Ukuqaleka kwesikrini esigcwele.** Ukukhetha ngokuhamba kwe-hover kuyanciswa manje. Imbangela siyiyo engcono esiyibonile futhi ayizange iqinisekiswe ngomuntu obike.
- **Ulimi ngesikhathi sokusebenza.** I-Studio nezinguqulo ezipakishiwe zingashintsha ulimi ngesikhathi zisebenza; ngaphambili kwakuyisiNgisi kuphela. Lokhu asikaboniswa kuwo wonke amapulatifomu: sitshele uma ulimi lungashintshi.

### Akusatholakali kule nguqulo

- I-Connect your AI ayiqedile: ukuxhumana kwe-one-click ngaphakathi kwe-Studio, isixhumanisi esingekho kwasekuseni se-AI yesiphequluli, ukhiye wakho we-API ngaphakathi kwe-Studio nephakheji ye-MCP eshicilelwe akwethenjwa. I-Studio ayinayo i-AI yayo.
- I-Studio ayisayinwanga ngekhodi: i-Windows ingasongela, i-macOS iyacela ukuthi ucindezele ngakwesokudla bese uvula. Bona [Ukuxazulula izinkinga](topic:troubleshooting).
- Ama-stack-up asengamakhuluma ohlangothi olulodwa: bona [Izitaki zokubekezelela](topic:tolerance-stackup).
- Okunye kuhlu [Okungakakhiwa okwamanje](topic:not-built-yet).

Izinguquko zangaphambili zitholakala kuthi [Okusha ku-0.7](topic:whats-new-0-7).
