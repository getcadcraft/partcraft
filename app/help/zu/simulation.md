---
title: Hlola ukucindezeleka nokuguquka (Simulation)
summary: Khetha impahla, bamba ubuso, engeza amandla, ingcindezi noma isisindo sengxenye, xazulula, bese ufunda ukucindezeleka kwe-von Mises, ukuguquka, isilinganiso sokuphepha, okuphendulwayo nezinkomba zefrikhwensi yemvelo kumodeli, nalokho indlela engakutshela khona nokungakutshela khona.
keywords: simulation, FEA, ukuhlaziya okuphilayo, buyekeza ngenkathi uhlela, yiphule, isinyathelo somthwalo, okungelona ulayini, ukukhiqiza kwepulasitiki, bilinear, ukuxhumana, ipheya lokuxhumana, penalty, bonded, ukuxhumana okungenakho ukungqubuzana, CalculiX, .inp, .frd, finite element, ukucindezeleka, strain, von Mises, ukuguquka, ukuphambuka, isilinganiso sokuphepha, factor of safety, ukukhiqiza, ukuphendula, umthwalo, amandla, ingcindezi, isisindo, okubanjiwe, ukungqubuzana, isekelo, ukuvinjwa, impahla, insimbi, i-aluminium, i-titanium, ABS, PLA, nylon, ifrikhwensi yemvelo, modal, ukudlidlizela, imeshi, usayizi wesakhi, tetrahedral, tet mesh, voxel, ikhwalithi yemeshi, ukucindezeleka okuyinhloko, principal stress, isilinganiso sephutha, iphutha lobuso obugobile, izimbobo, ama-fillet, okuzenzakalelayo, ukulungisa ngokuzenzakalela, h-adaptive, ukuhlangana, ukuhlangana kwemeshi, ubuso obuqondile, isiyingi, ikhoni, torus, spline, ubuso okhululekile
from: 6f2fdec1
---

Indawo yokusebenza yakwa-**Ukulingisa** iphendula umbuzo "ingabe izogoba noma iphuke ngaphansi kwalo mthwalo?" ngengxenye oyimodela. Ngu-**linear static** (ukuguquka okuncane, impahla ihlala ibuyela ngemva) noma **ucwaningo lwefrikhwensi yemvelo**, oxazululwa kumeshi yama-tetrahedra e-quadratic alandela ubuso bengxenye (noma, uma ukhetha, amakhyubhu amancane alinganayo). Lusebenza ezindaweni ezinikezwa yi-mesh kernel engxenyeni (bheka [I-mesh kernel](topic:solid-kernels)).

Khetha **Ukulingisa** ku-**Indawo yokusebenza** ebhokisini elisekhohlakalweni letuluzi eliphezulu. Ingxenye yakho ayishintshwa; ucwaningo lugcinwa ngaphakathi kwefayela lengxenye, futhi noma yiluphi ushintsho lwalo lungahlehliswa.

## Setha ucwaningo

1. Cindezela **Ucwaningo olusha** esigabeni sakwesokudla.
2. Khetha **Impahla**. Ipaneli ikhombisa ukuqina kwayo (E), inani lika-Poisson, ukuminyana namandla okukhiqiza. Lezi izinombolo ezijwayelekile zencwadi; izinombolo ezingaqinisekisiwe zomhlinzeki wakho zingahluka.
3. Khetha **Imeshi**:
   - **I-Tetrahedral (ecacile)**, okuzenzakalelayo: ama-tetrahedra enodi lesi-10 anezindonga zangaphandle ezilala ebusweni bengxenye, nemiphetho egobile ezimbobeni, ku-fillet nakwezinye izindawo ezizungezile. Amanodi ezindaweni ezilinganayo, ezisilindrikhi, ezikhonini, ezisiyingini nasezindaweni ezinkulu ezijikelezayo, nakubuso be-freeform (B-spline) ahlala ebusweni obuqondile; noma yiluphi olunye uhlobo lobuso lulandela imeshi yalo yokubonisa, nethebula lemiphumela lisho ukuthi yimingaki izindawo ezenze lokho. Imeshi yenziwa ibe mihle yodwa eduze kwezindawo ezigobile, izindonga ezincane nemiphetho ebukhali.
   - **Amakhyubhu e-voxel (asheshayo)**: ingxenye egcwaliswe ngamakhyubhu alinganayo. Asheshayo, kodwa ubuso obugobile buba izinyathelo. Ucwaningo olugcinwe ngaphambi kokuba kube khona imeshi ye-tetrahedral luqhubeka lunjalo.
4. Shiya **Usayizi wesakhi** ungenalutho ukuze uthole usayizi ozenzakalelayo (cishe ama-tetrahedra ayi-12,000, noma amakhyubhu ayi-20,000), noma thayipha enye ngamamilimitha. Ipaneli ikhombisa cishe izakhi eziningi ezizokwenza lokho ngaphambi kokungeza izindawo ezincane. Ngama-tetrahedra, **Izakhi ezincane ezindaweni ezigobile** (ivuliwe ngokuzenzakalelayo) zilungisa izimbobo nama-fillet, lapho ukucindezeleka kuvame ukuphakama khona.

### Lungisa ngokuzenzakalela

Ngama-tetrahedra, ucwaningo oluqinile noma lokuwohloka (ngaphandle komthwalo oshisayo), ucwaningo lwefrikhwensi yemvelo nocwaningo lokushisa olumile banikeza **Lungisa ngokuzenzakalela (ngokuguquguqukayo)**. Yikhetha bese usetha:

- **Iphutha elihlosiwe (%)**: ukuxazulula kuyama uma iphutha elilinganisiwe lingaphansi kwalo (1 % ukuqala).
- **Izigaba eziningi kakhulu**: izixazululo eziningi kakhulu ezingasebenza (5 ukuqala, okungafika ku-10).

Isigaba ngasinye sixazulula, sithole izakhi ezinephutha elilinganisiwe elikhulu kakhulu, sizihlukanise (kanye nezakhi ezimbalwa eziseduze ezidingekayo ukugcina imeshi iphelele), bese siphinda sixazulule. Amanodi amasha ezindaweni ezigobile aya ebusweni obuqondile. Imiphumela bese ibonisa ithebula nechathi enezakhi, izingaziwa, iphutha elilinganisiwe, ukucindezeleka okuphezulu (noma izinga lokushisa) nokuguquka (noma ukugeleza kokushisa) ngesigaba ngasinye, nomugqa ochaza ukuthi kungani kumile: umgomo ufinyelelwe, izigaba seziphelile, imeshi elandelayo yayiyoba inkulu kakhulu, noma isigaba sehlulekile (bese ubona isigaba sokugcina esiphumelele).

Funda isilinganiso njengesilinganiso. Siqhathaniswa nezimpendulo ezinembile, siyafunda cishe ku-0.6 kuya ku-0.95 wephutha langempela (i-Zienkiewicz–Zhu), siphimisa iphutha **kwingxenye yonke**, ngakho ukucindezeleka okuphezulu esimeni sesimbobo noma i-fillet kuvame ukusalokhu kuphambuka kancane lapho isilinganiso sibukeka sincane: ngokucindezeleka kokugoba, setha umkhawulo ngaphansi kwe-1 % bese ubona ukucindezeleka kuzinza kusuka esigabeni kuya kwesilandelayo. Ekhoneni elibukhali langaphakathi noma emphethweni wobuso obubanjiwe ukucindezeleka langempela kungapheli, ngakho isilinganiso asikaze sifinyelele lapho: izigaba ziphela kunalokho.

**Ifrikhwensi yemvelo nokuwohloka.** Ocwaningweni lwefrikhwensi yemvelo isilinganiso sihlanganisa zonke izimo ozicelile, ngayinye ibalwa ngokufanayo; ithebula nochathi kulandela ifrikhwensi mbili zokuqala. Engxenyeni enobuso obuqondile kuphela, ifrikhwensi ingehla kuphela kusuka esigabeni kuya kwesilandelayo (imeshi ngayinye igcina eyandulele); ubuso obugobile nabo buya busondela esimweni sabo sangempela, okungashintsha ifrikhwensi kancane ngaloluphi uhlangothi. Ngokuwohloka isilinganiso sihlanganisa ukucindezeleka kwangaphambili nezimo zokuwohloka, nethebula lilandela izilinganiso zomthwalo. Kuhlolwe kwibha yensimbi engu-100 × 10 × 10 mm: ifrikhwensi yokuqala izinza kusuka ku-812.4 kuya ku-811.9 Hz phezu kwezigaba ezine, ingaphansi ka-0.4 % kwe-Euler–Bernoulli (engakunaki ukusika), kanti isilinganiso somthwalo wekholomu sisebangeni le-0.5 % le-Euler.

## Bamba bese uyilayisha

Yonke ucwaningo budinga okungenani isekelo elilodwa, kanti ukucindezeleka kudinga umthwalo owodwa.

1. Cindezela {{ui:Fixed}} kubha yamathuluzi. Isekelo elisha likhethiwe futhi lilinde ubuso: chofoza ubuso obuqinile (chofoza ubuso futhi ukhiphe). Cindezela **Qedela ukukhetha** noma {{key:Esc}} uma uqedile. Amakhoni amabhlu aphawula ubuso obubanjiwe.
2. Cindezela {{ui:Force}} bese uchofoza ubuso umthwalo osebenza kuwo. Ku-ipaneli thayipha **Amandla aphelele** ngama-newton bese ukhetha **Indlela**: ngena ebusweni, noma ngokuhambisana nomugqa. Amandla ahlukaniswa phezu kobuso obukhethiwe ngokusebenzisa indawo. Izimpini ezi-orenji zibonisa lokhu.
3. Cindezela {{ui:Pressure}} ngengcindezi ngama-MPa (N/mm²) ecindezela kubuso obukhethiwe; ingcindezi engemihle idonsa.

Izinhlobo ezengeziwe zisohlwini lwe-**Engeza** kwipaneli: **Ubuso obungenakho ukungqubuzana** (ubuso bungashelela buzungeze uqobo kodwa ngeke buhambe bukhuphuke kuwo — lusebenzise ezindizeni zokulingana nasezisekelweni ezibushelelezi) kanye **Nokudonsa komhlaba** (isisindo sengxenye siqu, 9.81 m/s², endleleni okhetha yona).

Isekelo elishiya ingxenye ikhululekile ukushelela noma ukujikeleza liyanqatshelwa, lisho ukunyakaza okushiyiwe okukhululekile.

## Xazulula bese ufunda imiphumela

Cindezela {{ui:Solve}}. Umsebenzi usebenza ngasemuva; **Misa** uyayikhansela. Bese:

- Ingxenye iphenduka umbala ngokucindezeleka kwe-**von Mises**; khetha **Ukuguquka** noma **Isilinganiso sokuphepha** ku-**Bonisa**. Isici sinikeza isikali.
- Khomba engxenyeni ukuze ufunde izinani ngaphansi kwesikhombi.
- Khetha **Isimo esigobile** ukubona ingxenye igobile (ukunyakaza kukhulisiwe ngu-**Isikali**; eyangempela ingeyethebula).
- Ithebula lidweba ukucindezeleka okukhulu nokuthi kuphi, ukuguquka okukhulu, **isilinganiso sokuphepha** esincane (amandla okukhiqiza ÷ ukucindezeleka kwe-von Mises; ngaphansi kwe-1 impahla iyakhiqiza), umthwalo osetshenzisiwe kanye **nokuphendula** ezisekelweni (ziyalinganisa umthwalo), nemeshi esetshenzisiwe.

Ngefrikhwensi yemvelo, khetha lolo **Uhlobo**, setha ukuthi yimingaki **Izimo**, bese uxazulula. Isimo ngasinye sibonisa ifrikhwensi nesimo sayo (izimo zilinganiswa zibe ngu-1 ekunyakazeni kwazo okukhulu kakhulu).

Uma ushintsha ingxenye, imiphumela imaketwa ingasasebenzi: xazulula futhi.

## Ukukhiqiza nokuxhumana (izifundo ezingelona ulayini)

Izinhlobo ezimbili zocwaningo ezengeziwe zidlula ku-"impahla ihlala iguquguquka":

- **Okungelona ulayini (impahla iyakhiqiza)** ilandela umugqa oqondile wempahla kuze kufike ekucindezelekeni kokukhiqiza, bese kuba nokuthambeka okuncane (**Ukuthambeka ngemva kokukhiqiza**, 1 % ye-E uma kushiyiwe ingenalutho). Umthwalo uqhubeka ku-**Izinyathelo zomthwalo**; isinyathelo esingazinzi siyehlukaniswa ngesikhathi sodwa. Imiphumela yengeza **Ukuncipha kwepulasitiki** emapulotini futhi ikhombise ukuthi umthwalo oningi kangakanani wathwalwa. Uma isinyathelo bese singazinzi, ucwaningo luyama esinyathelweni sokugcina esiphumelele kanti ipaneli ⚠ **Izinkinga** ikhomba lapho: ingxenye iphelelwe amandla khona (ukuwa), noma izinyathelo zinkulu kakhulu.
- **Ukuxhumana phakathi kwezingcezu** kuvumela izingcezu ezihlukene zengxenye zicindezelane. Engeza **Ipheya lokuxhumana**, khetha ubuso be-A (ubuso ocindezelayo) ngokuthi {{ui:Pick faces}}, bese i-B ngokuthi {{ui:Pick side B faces}}. Izingcezu **ezingenakho ukungqubuzana** ziyacindezela, zishelele futhi zihlukane; izingcezu **ezibambelelene** ziyahlala zibambelelene. Ingcezu ngayinye yenziwa imeshi yayo, ngakho igebe elincane phakathi kwazo lilungile. Ukuxhumana kuyindlela yesijeziso: izingcezu zicwila kancane ngaphakathi kwezinye (i-**penalty factor** × E ÷ usayizi wesakhi isetha ukuthi ukuxhumana kuqinile kangakanani). Ithebula likhombisa ukucwila okujulile kakhulu, nepaneli Izinkinga iyaxwayisa uma kungaphezu kuka-1 % wosayizi wesakhi: khuphula inkomba noma sebenzisa izakhi ezincane.

Zombili zisebenzisa imeshi ye-tetrahedral. Ukungqubuzana, ukushelela okukhulu nokujikeleza okukhulu akuxazululwa lapha.

## Yisebenzise ku-CalculiX

**Thumela › CalculiX deck (.inp)** (noma {{ui:Save a CalculiX deck (.inp)}} kwipaneli) ilondoloza ucwaningo njengedeki lokufaka le-CalculiX, uhlelo olwehlukile olufakwa futhi olusetshenziswa wena: imeshi efanayo, impahla, izisekelo, imithwalo namapheya okuxhumana, ngama-mm, N kanye nama-MPa. Yisebenzise, bese **Thumela › imiphumela ye-CalculiX (.frd)** ifunda ifayela lalo lemiphumela libuyele kulimeshi efanayo ibonise ukuguquka (nokucindezeleka kwe-von Mises uma ifayela linokucindezeleka). Uma uguqule ingxenye noma usayizi wesakhi phakathi, imeshi ayifani futhi i-PartCraft iyakutshela: londoloza idekhi entsha.

## Ukuthembeka kwayo kangakanani

I-PartCraft ihlola isixazululi sayo ngamafomula ngesandla (ukuguquka kwesiphetho se-cantilever PL³/3EI ngaphakathi kwe-1 %, ukweluka kwebha PL/AE ngokuqondile, ifrikhwensi yokuqala ye-cantilever ngaphakathi kwe-3 %, ukucindezeleka ozungezile isimbobo kupuleti). Nokho, gcina lezi zinkawu zengqondo:

- **Imeshi.** Ngama-tetrahedra, i-PartCraft ihlola ukuguquka kwe-cantilever nokucindezeleka kokugoba (ngaphakathi kuka-0.3 %), ukucindezeleka esimbobeni kupuleti (Kt, ngaphakathi cishe kuka-1 %), ithubhu elijulile ngaphansi kwengcindezi (Lamé, ngaphakathi kuka-0.3 %) nefrikhwensi yokuqala (ngaphakathi kuka-0.4 %). Ithebula likhombisa **ikhwalithi yemeshi** (amakona amancane nakakhulu phakathi kobuso bezakhi; ngaphansi cishe kuka-10° isakhi siyimpuphu) kanye **nephutha lokucindezeleka elilinganisiwe**: uma likhulu kuno-amaphesenti ambalwa, xazulula futhi ngosayizi wesakhi omncane, noma vumela **Lungisa ngokuzenzakalela** kukwenze. Kupuleti elinesimbobo nebha elinemigoqo emibili emaphethelweni, ukulungisa ngokuzenzakalela kwafinyelela ngaphakathi kuka-1 % we-Kt yencwadi cishe ngesithupha sezingaziwa ezadingwa ukwenza imeshi yonke ibe mncane. Ngamakhyubhu e-voxel, isimbobo noma i-fillet iba yindiza enamasitebhisi ngosayizi wekhyubhu, ngakho ukucindezeleka lapho kuba nzima.
- **Amakhona abukhali angaphakathi nemiphetho yobuso obubanjiwe awanawo amandla aphakeme langempela.** Inani lapho liqhubeka likhula njengoba izakhi zincipha. Funda ukucindezeleka kancane kude nalezi zindawo, noma gobisa ikhona kumodeli.
- **Imiphumela okufanele uyifunde.** Ngaphandle kokucindezeleka kwe-von Mises, ukuguquka nesilinganiso sokuphepha, ucwaningo lwe-tetrahedral lubonisa **ukucindezeleka okukhulu nokuncane kwe-principal** (ukuqina nokucindezela) kanye **nokuguquka okulinganayo**. Khetha **Bonisa imeshi** ukubona izakhi.
- **Izifundo ezimile zingelona ulayini futhi ziyaguquguquka.** Ukukhiqiza nokuxhumana sebenzisa izinhlobo zocwaningo ezingelona ulayini ezingenhla; ukuguquka okukhulu nokukhathala akuxazululwa. Ukushisa, ukucindezeleka okushisayo nokuwohloka komugqa kungezinye izinhlobo zocwaningo: bheka [Ukushisa, ukucindezeleka okushisayo nokuwohloka](topic:thermal-and-buckling).
- **Yonke impahla ifana kuzo zonke izindlela.** Izinto zepulasitiki ezikhiwe nge-3D zibuthakathaka ngokusontela izungu lazo, ngokuvamile ngesithathu noma ngaphezulu.
- Lesi yinguqulo yelabhorethri: hlola izingxenye ezibalulekile ngenye indlela.

## Buyekeza ngenkathi uhlela (Live)

Khetha **Buyekeza ngenkathi ngihlela** kwibhlogo ye-Solve bese izimpendulo zeSimulation zilandela ukuhlela kwakho. Shintsha isilinganiso, umthwalo, impahla noma indawo, bese **impendulo esheshayo** ivela masinyane, yenziwe ngezakhi ezine zinkulu kunezocwaningo; uma uyama isikhashana (isekhondi noma cishe), **impendulo ehlaziywe** yocwaningo siyayithatha indawo. Imiphumela ikhombisa ukuthi ubheka eyiphi ("Impendulo esheshayo" noma "Impendulo ehlaziywe") nosayizi wesakhi. Impendulo esheshayo ilungele isiqondiso nosayizi: ku-cantilever yensimbi yayiphakathi kuka-1 % ngokuguquka nasekuzeni ka-4 % ngokucindezeleka kweyehlaziywe. Thembela kweyehlaziywe ngezinombolo ozozisebenzisa. Izifundo ezimile, zefrikhwensi yemvelo, zokushisa nokuwohloka zisebenza ngale ndlela; i-Live iyisilungiselelo sokubuka futhi ayigcinwa engxenyeni. Ukuxazulula ocindezela wena kuhlala kunjalo kuze kube yilolo shintsho olulandelayo.

## Thola ukuthi yini ephulayo kuqala (Yiphule)

Ocwaningweni lokuqina noma lokuwohloka, cindezela **Yini ephulayo kuqala?** kwibhlogo ethi **Yiphule**. I-PartCraft ilinganisa imithwalo yocwaningo (amandla, ingcindezi nesisindo ndawonye)ize ingxenye inikele, bese ibhala, okubi kakhulu kuqala, **isilinganiso somthwalo ekukhiqizeni kokuqala** (isilinganiso semithwalo yanamuhla lapho ukucindezeleka kwe-von Mises okuphezulu kufinyelela ukukhiqiza kwempahla, kunophawu obubomvu lapho kwenzeka khona) kanye **nesilinganiso somthwalo ekuwohlokeni** ngezisekelo nemithwalo efanayo. Isilinganiso se-4.3 sisho ukuthi ingxenye ithwala izikhathi ezi-4.3 umthwalo wayo ngaphambi kokukhiqiza; **isilinganiso esingaphansi kwe-1 sisho ukuthi sesinikele ngenxa yomthwalo osuvele ulayishiwe**, futhi lokho kuvela kuhlu lweZinkinga njengephutha (ukutholakala okubuthakathaka kakhulu kuboniswa njengenothi noma kwenzeka konke kugcina). Izilinganiso zivela kucwaningo olulinganayo ku-tetrahedra ngosayizi wesakhi wakho, ngakho zinhle njengalolo cwaningo: ukucindezeleka esibindeni esilungisiwe noma ekhoneni elibukhali akunawo amandla aphakeme langempela (bheka ngezansi), futhi isilinganiso sokukhiqiza sizoba ngehlangothi elicwebezelayo lapho. Umsizi wakho angenza lokhu kuhlolwa ngethuluzi `break_run`.

## Okuhlobene

- [Ukushisa, ukucindezeleka okushisayo nokuwohloka](topic:thermal-and-buckling)
- [Khulisa isimo kusuka emithwalweni (Generative)](topic:generative-design)
- [Linganisa izibalo, ama-engeli nobunzima](topic:measure)
- [Okungakakwakhiwa](topic:not-built-yet)
