---
title: Okusha ku-0.8 nasku-0.8.1
summary: I-PartCraft 0.8 yengeza ukuhlaziywa okuphilayo ngenkathi uhlela, ukuhlola "Yini eqala ukuphuka", izifundo zokuvezwa nokuxhumana namafayela edeki we-solver yangaphandle, izifundo zokunyakaza zezinhlanganisela, indawo yokusebenza ye-Surfaces yobuso bokwakheka okukhululekile, izingxenye ezilinganiswe ngokwefiziksi kwindawo yokusebenza ye-Engineer, isikethi kusuka esithombeni, ukuthumela ukushicilela, amashidi ahlelwe ku-G-code nemidwebo elinganisa imigodi yayo. I-0.8.1 ilungisa ukuma kwesikhombi esikrinini esigcwele.
keywords: okusha, amanothi okukhishwa, changelog, izinguquko, 0.8, 0.8.1, inguqulo, izici ezintsha, ukuhlaziywa okuphilayo, ukuhlola ukuphuka, yini eqala ukuphuka, isilinganiso somthwalo, okungalingani, ukuvuza, ukuthinta, isifundo sokunyakaza, ukukhululeka, izindawo, nurbs, lungisa, ihull, zebra, engineer, umenzi, isizukulwane, isikethi esivela esithombeni, isikali sokushicilela, ukuhlukanisa ukushicilela, ukuncipha, amashidi ahlelwe, g-code, umdwebo, linganisa imigodi, umsizi, mcp, izilimi, imigqa yebha yamathuluzi
from: 62e4dce2
---

Lokhu kushintshile ku-PartCraft 0.8 nasku-0.8.1, uqhathaniswa no-0.7. Isimulethi iphendula ngenkathi uhlela futhi isho ukuthi yini eqala ukuphuka, izinhlanganisela zithola izifundo zokunyakaza, nezindawo ezintsha zenza ubuso bokwakheka okukhululekile nezingxenye ezilinganiswe ngokwefiziksi. I-0.8.1 ukukhishwa okuncane okulungisa.

## Okusha

### Isimulethi

- **Buyekeza ngenkathi ngihlela.** Thikela {{ui:Buyekeza ngenkathi ngihlela}} ebhulokhini elithi Xazulula, bese izimpendulo zilandela izinguquko zakho. Shintsha ubukhulu, umthwalo noma impahla, impendulo esheshayo, eyenziwe ngezinto ezine ezinkulu kunalezo, ivela ngokushesha; uma umisa cishe isekhondi, impendulo elungiswe yisifundo iyayishintsha. Imiphumela ikutshela ukuthi ngeyiphi oyibukayo. Ku-cantilever yensimbi impendulo esheshayo ibe phakathi kuka-1 % ekugobekeni nangu-4 % ocindezelweni kweyelungisiwe. Bheka [Hlola ukucindezela nokugoba](topic:simulation#update-while-you-edit-live).
- **Yini eqala ukuphuka.** Kwesifundo esimile noma sokugoqa, {{ui:Yini eqala ukuphuka?}} ebhulokhini elithi **Yiphule** iscala imithwaloize ingxenye inikele. Ibala, okubi kakhulu kuqala, isilinganiso somthwalo kuze kube sekuvuzeni kokuqala (nophawu olubomvu lapho ukucindezela kuphakeme) nesilinganiso somthwalo kuze kube sekugoqeni. Isilinganiso esingaphansi kwe-1 sisho ukuthi ingxenye seyinikela ngomthwalo njengoba ilayishiwe, futhi i-{{ui:Izinkinga}} iveza iphutha. Lezi zilinganiso zivela esifundweni esilinganiselayo, ngakho zinhle njengalo. Bheka [Hlola ukucindezela nokugoba](topic:simulation#find-out-what-breaks-first-break-it).
- **Ukuvuza nokuthinta.** Izinhlobo ezimbili ezengeziwe zezifundo: esingelona elilinganiselayo lapho impahla ilandela umugqa wayo oqondile kuze kufike ekuvuzeni bese kulandela ukuthamba okuncane, kubonakale ukuguquka kwesakhiwo okusele; nesifundo sokuthinta lapho izingcezu eziningi zicindezelana (ngaphandle kokudonsela) noma zibambelelane (ziboshiwe). Isinyathelo somthwalo esingasethi, noma izingcezu ezicwilika kakhulu ngaphakathi kwenye, zibonakala ephaneli yezinkinga. Ukudonsela, ukunyakaza okukhulu, ukuzungeza okukhulu, ukugoba okukhulu nokukhathala akuxazululwa. Bheka [Hlola ukucindezela nokugoba](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Amadekhi we-CalculiX.** {{ui:Thumela}} › {{ui:Idekhi ye-CalculiX (.inp)}} ilondoloza isifundo se-CalculiX, uhlelo olusehlukile olufakayo nolusebenzisa wena; {{ui:Thumela}} › {{ui:Imiphumela ye-CalculiX (.frd)}} ifunda ifayela lalo lemiphumela libuyele kumesh efanayo. I-PartCraft ayikaze iqale lolo hlelo, futhi iyakutshela uma ingxenye ishintshile kusukela lapho idekhi yalondolozwa.

### Izinhlanganisela

- **Izifundo zokunyakaza.** {{ui:Inhlanganisela}} › {{ui:Ukunyakaza}} ishayela inani lejoyinti eyodwa phezu kwesikhathi onikezayo (isivinini esingaguquki, esithambile, i-sine, noma phuma nebuye), ibeka inhlanganisela ngesinyathelo ngasinye ngamajoyinti nemijikelezo evaliwe, ibike ukuthi yini egqekeza nokuthi izingxenye zisondela kangakanani. {{ui:Engeza iphoyinti}} iplotha isikhundla sephoyinti, isivinini nokushesha, inani lejoyinti nokukhululeka ngesikhathi; {{ui:Londoloza i-CSV}} ne-{{ui:Londoloza igrafu}} zibhala kuzo. Ngemva kwe-{{ui:Qalisa}}, i-Inyathelo ebhareni yokusebenza ifinyelela noma yisiphi isinyathelo. Izilungiselelo zesifundo zilondolozwa efayelini lenhlanganisela. Isivinini nokushesha kuvela kusikhundla esirekhodiwe, ngakho sebenzisa izinyathelo eziningi uma ukuphakama okubukhali kuveza kancane. Bheka [Hlola inhlanganisela ngokugqekeza nokunyakaza](topic:check-assembly#a-motion-study).

### Ubuso nezingxenye ezivela kwifiziksi

- **Indawo yokusebenza ye-Surfaces.** Khetha {{ui:Ubuso}} ebhokisini le-{{ui:Indawo yokusebenza}} ukuthola amajika e-NURBS nobuso ngaseceleni kwengxenye: {{ui:Igoqekile}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Hambisana}} no-{{ui:Zebra}}, nokuqhubeka (G0, G1 noma G2) kulinganiswa ezindaweni eziqondile, nomphetho owedlulele kulokho owucelile uyalandelwa ku-Izinkinga nokulungisa kwe-Hambisana. {{ui:Lungisa}} ilinganisa imigqa yehull ukuze ithole ukugoba nokushintsha kwegoqeka, futhi yakha kabusha ezingalungile ngaphakathi kokubekezelela kwakho. Izindawo ziyalondolozwa efayelini lengxenye futhi azishintshi izici zengxenye. Bheka [Ubuso bokwakheka okukhululekile (NURBS)](topic:nurbs-surfaces).
- **Indawo yokusebenza ye-Injiniyela.** Khetha {{ui:Injiniyela}} kwisiguquli sendawo yokusebenza, khetha umenzi bese ucindezela {{ui:Okusha}}: iskripthi silinganisa ingxenye ngokusekelwe kokufanele iyenze (ukushisa ukuze kunyakaze, ukugeleza, ingcindezi, impahla, inqubo yokushicilela) ngezifomula zencwadi, bese siyakha, bese sinikeza izinombolo esizisebenzisile nemithombo yazo, ukuhlola kwazo kokukhiqiza namafayela okuhlaziya ngamathuluzi wokuhlaziya. Okokufaka okufanayo kunikeza ingxenye efanayo kunoma iyiphi ikhompyutha. Umenzi ugcinwa engxenyeni, futhi ukuvula ingxenye akuwubizi iskripthi. Bheka [Izingxenye ezivela kwifiziksi: abenzi](topic:engineer-generators) nakwi-[Bhala umenzi](topic:write-a-generator).

### Ukudweba, isikethi nokwakha

- **Isikethi esivela esithombeni.** {{ui:Izici}} › {{ui:Okwengeziwe}} › {{ui:Isikethi esivela esithombeni…}} silandela isithombe sengxenye eqondile phezu komhlaba olula (umjikelezo nemigodi) noma umdwebo wepeni ube imigqa, imisalo nezindilinga. Unikeza ubude obubodwa, uhlole ukubukwa kwangaphambili bese wenza isikethi. Bheka [Izisekelo zesikethi](topic:sketch-basics#a-sketch-from-a-photo).
- **Ukukala nokuhlukanisa ukushicilela.** {{ui:Thumela}} › {{ui:Isikali sokushicilela (STL noma 3MF)…}} ikala ngokwe-axis ngaphandle kokushintsha ingxenye, isibonelo ngesivumelwano sokuncipha. {{ui:Thumela}} › {{ui:Hlukanisa ukuze ushicilele (izingcezu ezi-zip)…}} inquma ingxenye emkhulu kakhulu ebhedini lakho ibe izingcezu ezinezinombolo ezihlanganiswa ngezikhonkwane, izikhiye, amasaka amaqotho, imigodi yezikhonkwane noma izikhala zamagnethi. Bheka [Shicilela nge-3D](topic:print-3d).
- **Amashidi ahlelwe ku-G-code.** {{ui:Thumela}} › {{ui:Amashidi ahlelwe ku-G-code}} ifunda i-DXF ehlelwe bese yenza uhlelo olulodwa ngeshidi ngalinye ngokwe-post okhetha: imigodi nezikhala zokusika kuqala, bese kuba yimiphetho. Ayihleli ukungena, i-odolo yokusika noma imiphetho eyabelwana. Bheka [Hlela izingxenye ezingqindilili ku-amashidi](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Imidwebo eyenza okuningi ngokwayo.** {{ui:Ishidi}} › {{ui:Ngokuzenzakalela}} ikhetha ishidi elincane le-A-size elisibamba imibono ngesilinganiso esikhulu kakhulu esijwayelekile kuya ku-1:1. {{ui:Linganisa izimbobo}} ibeka imaki yesikhungo kwimbobo ngayinye, isinkomba esisodwa ngosayizi ngamunye nezindawo ezivela ekhoneni elingezansi kwesobunxele lombono. Bheka [Yenza umdwebo](topic:drawing-pdf).

### Kuzo zonke izinhlelo zokusebenza

- **Izilimi.** Ama-app atholakala ngezilimi ezingu-54. Okungaphezu kwesiNgisi kuyizinguqulo zokuqala ezenziwe ngomshini kuze kufundwe umuntu wendabuko.
- **Imigqa yebha yamathuluzi.** {{ui:Izilungiselelo}} › {{ui:Okujwayelekile}} › {{ui:Imigqa yebha yamathuluzi}} ikhetha Phenda (njengangaphambili), imigqa emi-2 noma umugqa owodwa; ibha engafaneli iskrolela ngokuqondile. Ribbon yesici se-PartCraft ibonisa ithuluzi elisetshenziswa kakhulu ngobukhulu obukhulu futhi ifihle ezihlukile ngemuva kwenkinobho ehlukanisiwe.
- **Xhuma i-AI yakho.** I-Studio iyisiphephelo sokuxhuma umsizi wakho kuma-app ayisishiyagalombili, nelungelo lokufunda kuphela, lokuphakamisa noma lokuhlela ngayinye. Umsizi oxhunyiwe ungalinganisa ingxenye kusukela kusivakashi esifana nebhrakethi yomthwalo, abonise ukusebenza kwakhe nakho konke ukuhlolwa, bese ayakha; ubika ukuthi yini ayengayihloli (ukugxilisa ukucindezela, ukukhathala, ukuhamba kancane kwamapulasitiki). Bheka [Sebenzisa i-PartCraft nomsizi we-AI](topic:use-with-ai-assistants).

## Okulungisiwe ku-0.8.1

- **Ukuma kwesikhombi esikrinini esigcwele.** Ukuhambisa kwesikhombi okuthola ukuthi kukuphi kulinganiswa manje. Imbangela iwukufunda kwethu okungcono kakhulu futhi ayizange iqinisekiswe nomuntu obike lokhu.
- **Ulimi ngesikhathi sokusebenza.** I-Studio nezinguqulo ezipakishiwe zingashintsha ulimi lapho zisebenza; ngaphambili bekuyiSiNgisi kuphela. Lokhu akukahlolwa kuwo wonke amapulatifomu: sitshele uma ulimi lungashintshi.

## Akukakufiki kulolu nguqulo

- Ukuxhuma i-AI yakho akuqedile: ukuxhuma ngokuchofoza kube kukodwa ngaphakathi kwe-Studio, umxhumanisi wensiza yebhrawuza, ukhiye we-API wakho ngaphakathi kwe-Studio nephakheji eshicilelwe ye-MCP akuthenjiswa. I-Studio ayinayo i-AI yayo.
- I-Studio ayisasayinwa ngekhodi: i-Windows ingalumba, i-macOS ibuze ukuthi uchofoze ngokwesokunxele bese kuthi Open. Bheka [Ukuxazulula izinkinga](topic:troubleshooting).
- Izinhlanganisela zobubanzi zisasebenza ngokuqondile ohlangothini olulodwa kuphela: bheka [Izinhlanganisela zobubanzi](topic:tolerance-stackup).
- Okunye kulotshwe ku-[Okungakakhiwa](topic:not-built-yet).

Izinguquko zangaphambili zisencwadini ku-[Okusha ku-0.7](topic:whats-new-0-7).
