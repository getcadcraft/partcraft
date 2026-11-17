---
title: Ukushisa, uxinezelo lokushisa nokuphambuka
summary: Thola izinga lokushisa engxenyeni kusukela ezingeni elisethiwe lokushisa, ukugeleza kokushisa, amandla okushisa, ukuhamba komoya nemisebe (okuzinzile noma ngesikhathi), layisha isifundo sokucindezeleka ngokukhuphuka kwezinga lokushisa, bese uthola umthwalo lapho ingxenye emincane ephambuka khona, nokuthi yiziphi izinto ezingakutshela zona.
keywords: thermal, ukudluliswa kokushisa, ukushisa, izinga lokushisa, ukuqhutshwa, ukuhamba komoya, convection, film coefficient, imisebe, radiation, emissivity, ukugeleza kokushisa, amandla okushisa, ukukhiqizwa kokushisa, heat sink, transient, isikhathi, ukupholisa, ukushisa, Crank-Nicolson, implicit Euler, ibalansi yokushisa, uxinezelo lokushisa, uxinezelo lokushisa ngesikhathi, transient thermal stress, quench, thermal shock, umlando woxinezelo, isikhathi esibi kakhulu, ukunwebeka kokushisa, ikhoyifisheni yokunwebeka, ukuphambuka, ukuphambuka kuka-Euler, load factor, umthwalo ovamile, column, slender, eigenvalue
from: 1a1b7545
---

Lezi zifundo zihlala ku-Simulation workspace eduze koxinezelo oluzinzile nemvamisa yemvelo (bona [Hlola uxinezelo nokuguquka](topic:simulation)). Zikhethwe ebhokisini le-**Uhlobo** lephaneli. Zisebenzisa imeshi efanayo yamakhyubhu amancane nohlu lwezinto olufanayo; zonke izinto zomtapo zinendlela yokudlulisa ukushisa, ukushisa okuthile nekhoyifisheni yokunwebeka (amanani ajwayelekile esimisweni, akhonjiswa ngaphansi kwe-**Izakhiwo**).

## Ukushisa: umshisa uya kuphi?

1. Khetha **Thermal (heat transfer)** njengohlobo.
2. Engeza izimo zokushisa kusuka ohlwini lwe-**Engeza** lephaneli, bese uchofoza izinhlangothi zazo (njengasezisekelweni nasemithwalweni):
   - **Fixed temperature**: ubuso bubanjwe ezingeni lokushisa, ngo-°C.
   - **Heat flux**: W/m² ogeleza ngaphakathi kubuso (okuyinegative kuphuma). Lusebenza ngendawo yangempela yobuso, nanxa amakhyubhu enza isitebhisi.
   - **Heat power**: inani eliphelele ngama-watt, lihlukaniswe phezu kwezinhlangothi ezikhethiwe ngokwendawo. Usisebenzisela isishisi noma ichip enamandla aziwayo.
   - **Convection**: umoya noma uketshezi olunezinga lokushisa lususa ukushisa ngo-h W/(m²·K). Ama-h ajwayelekile: umoya ongenayo ukunyakaza 5–10, ifeni 25–100, amanzi 500–10,000. I-PartCraft ayibali h: kulesi sifundo akukho ukugeleza koketshezi.
   - **Radiation**: ubuso bukhipha imisebe ezindaweni ezizungezile ngezinga lokushisa, nge-emissivity esuka ku-0 kuya ku-1. Ilinearisiwe: imisebe ibhalwa njengecoefficient eshintsha ngezinga lokushisa futhi ixazululwe kabushaize izinze. Iya ezindaweni ezizungezile kuphela: ubuso abushintshi ukushisa omunye nomunye.
3. **Heat generation** (W/m³) ishisa yonke ingxenye ngaphakathi, isibonelo ingxenye enokumelana kagesi.
4. Cindezela **Xazulula**. Ingxenye iyakhanyisa ngokuya ngezinga lokushisa; khetha **Heat flux** ku-**Bonisa** ukubona lapho ukushisa kugeleza khona. Yiyisa isikhombisi engxenyeni ukuze ufunde kokubili.

Ukushisa okuzinzile kudinga indawo lapho kuhamba khona: okungenani izinga lokushisa elisethiwe elilodwa, ukuhamba komoya noma imisebe. Ingxenye ethatha ukushisa kuphela ayinasimo esizinzile; yenze i-transient.

Ithebula linikeza izinga lokushisa eliphansi naleliphezulu nendawo yazo, ukugeleza okukhulu kokushisa, kanye **nebhalansi yokushisa** (heat balance): ukushisa okungena noma okuphuma kwisimo ngasinye (izinga lokushisa elisethiwe liyabala ukushisa okufanele lukuhlinzeke noma lukumunce), ukushisa okukhiqizwayo, izinkomba zonke zokungena nokuphuma, kanye **nokungalingani** (imbalance). Ukungalingani kufanele kube ingxenyana encane kakhulu yokushisa okungenayo; okukhulu kusho ukuthi umphumela awuthenjwa.

### Ngokuhamba kwesikhathi (transient)

Thikha **Transient** bese unikeza **Izinga lokuqala lokushisa** (yonke ingxenye iqala lapho), **Ububanzi besikhathi** nenani le-**Izinyathelo zesikhathi**. **Implicit Euler** iqinile; **Crank–Nicolson** inembile kakhulu ngezinyathelo ezifanayo kodwa ingaba nokuzamazama ngemva koshintsho olusheshayo. Ngemva kokuxazulula, hudula isilayidi se-**Isikhathi** ukubona izinga lokushisa ngesikhathi ngasinye (isikali sombala sihlala sifanayo ngayo yonke imizuzu). Ibhalansi yokushisa ifaka-ke nokushisa okugcinwayo.

## Uxinezelo lokushisa: ushintsho lwezinga lokushisa lwenzani engxenyeni?

Esifundweni se-**Static stress** (noma **Buckling**), setha **Umthwalo wokushisa**:

- **Ushintsho lwezinga lokushisa olufanayo**: yonke ingxenye iyafudumala (noma ipholile, uma inani liyinegative) ngalelo nani lama-kelvin.
- **Izinga lokushisa kusuka ezimweni zokushisa**: engeza izimo zokushisa esifundweni esifanayo; amazinga okushisa azinzile axazululwa kuqala kwimeshi efanayo, bese ingxenye inwebeka ngo α·(T − **izinga lokushisa elingenaxinezelo**).
- **Izinga lokushisa ngesikhathi (ukusebenza kwe-transient)**: engeza izimo zokushisa, bese unikeza **Izinga lokuqala lokushisa**, **Ububanzi besikhathi**, **Izinyathelo zesikhathi** no **Ukwenyuka kwesikhathi** njengakokushisa okungaguquki. Amazinga okushisa axazululwa ngesikhathi kwimeshi efanayo (amakhyubhu noma ama-tetrahedra), futhi ukuxazulula okuzinzile ngamazinga okushisa kwesikhathi ngasinye kunikeza uxinezelo lwalowo mzuzu. **Uxinezelo ku-**:
  - **Isikhathi esibi kakhulu** (ukuqala): **Ukuxazulula uxinezelo** kwenza izikhathi ezisatshalaliswe ngokulinganayo kuwo wonke umsebenzi, kuhlanganise nokuqala (ama-21 ngaphandle uma uwashintsha, afika kuma-51). Imiphumela ivula esikhathini esinoxinezelo lwe-von Mises olukhulu kakhulu; ithebula liyabiza ngegama, ichart elincane likhombisa uxinezelo oluphezulu ngesikhathi, futhi isilayidi se-**Isikhathi** sikhombisa uxinezelo kuzo zonke izikhathi ezixazululiwe (isikali sombala sihlala sesikhathi esibi kakhulu).
  - **Isikhathi esisodwa esikhethiwe**: umzuzu owodwa, isinyathelo sesikhathi esiseduze kakhulu ne-**Isikhathi (s)** oyinikezayo. Ukuphambuka kuhlala kusikhathi esikhethiwe ngokuphelele (ukuphela komsebenzi uma ungasethi esinye).

Ingxenye ecwiliswe (ishisa iphuma ibe ebandeni) noma eshiswe ngokushesha inikezwa uxinezelo olukhulu kakhulu lapho ingaphakathi nobuso kuhluke kakhulu: ngokuvamile ekuqaleni kakhulu. Izinga lokushisa elibanjiwe lisebenza kusukela esikhashana sokuqala, njengoshintsho olusheshayo, ngakho uxinezelo ekuqaleni ncamashi luncike ebukhulwini be-element (ama-element ambalwa kuphela abona ushintsho). Lufunde njengokuthi "kuphezulu kakhulu", bese ubheka izikhathi ezilandelayo esilayidini ukuze uthole amanani imeshi ayakwazi ukubona. Uxinezelo luyi-quasi-static: akukho inertia, akukho ukunyakaza kwamavibrations ngenxa yoshintsho olusheshayo.

Ingxenye enganwebeka ikhululekile ayinaxinezelo lokushisa: yibambe kuphela ngokwanele ukuvimbela ukunyakaza (isibonelo izinhlangothi ezintathu ezingenangqubuzano ezingqamanayo ngama-engeli amajamo). Ibanjwe phakathi kwezindonga ezimbili icindezelwa: ibha yensimbi efudunyezwe ngo-50 K phakathi kwezindonga eziqinile iphatha cishe ama-117 MPa. Imithwalo yokushisa iyazilinganisa, ngakho ukuphendula kusalingana kuphela nemithwalo yemishini.

## Ukuphambuka: ingxenye emincane iphela nini?

1. Khetha **Buckling (linear)** njengohlobo, bese wengeza izisekelo nemithwalo njengasekufundweni okuzinzile.
2. Setha **Load factors to find** (izindlela eziningi zokuphambuka).
3. Cindezela **Xazulula**. Imodi ngayinye inento ethi **load factor**: inani lemithwalo yakho lapho ingxenye engcono ephambuka khona. Load factor engu-3 kusho izikhathi ezintathu zemithwalo yakho; **load factor engaphansi kuka-1 kusho ukuthi iphambuka ngaphansi kwemithwalo osuyisebenzisile**. Ithebula linikeza futhi umthwalo ophelele kunoma iyiphi i-factor. Ukwakheka kwemodi kukhombisa ukuthi iphambuka kanjani (usayizi wayo awusho lutho).

**Ukuphambuka okulinear kukhombisa ngokweqile umthwalo wangempela wokuphambuka.** Kucabanga ingxenye ephelele: eqondile ngokuphelele, engenaxinezelo olusele, futhi eyinsiyo. Izingxenye zangempela zinezinkinga ezincane futhi zingathamba ngaphambi kokuphambuka, nezigqoko ezinezindonga ezincane zingaphambuka ngengxenyana yenani elilinear. Sebenzisa umkhawulo omkhulu, bese uthatha i-load factor eseduze noma ephansi ka-3 ngesigqoko esincane njengesixwayiso.

## Ukuthi ungakwethemba kangakanani

PartCraft ihlola lezi zixazululi ngamafomula esandleni: ibha phakathi kwamazinga okushisa amabili (ngokunembile), ifini elipholayo (ngaphakathi kuka-0.3 K), isilabhu esishisa ngokwaso (ngokunembile), ikhyubhu elipholayo ngesikhathi (ngaphakathi kuka-0.1 % nge-Crank–Nicolson), ibha eshiswe ngokushesha ekugcineni elilodwa, ibha ekhululekile efudunyeziwe (akukho xinezelo, ΔL = αLΔT), ibha ebanjwe phakathi kwezindonga (σ = −EαΔT), ipuleti elicwiliswayo ngesikhathi ngokuqhathaniswa nesixazululo sakudala se-series (ngaphakathi kuka-1 % emakhyubhini, 2.1 % kuma-tetrahedra esikhungweni salo; 0.5 % ebusweni balo), izinyathelo zokugcina zokusebenza isikhathi eside ngokuqhathaniswa noxinezelo oluzinzile lokushisa (kufana kuze kube yisigidi), nezinsimbi zika-Euler (ngaphakathi kuka-1 % kubanjwe–kukhululekile, 1.5 % kubanjwe–kubanjwe). Gcina lokhu engqondweni:

- **Amanani ezinto angaguquki.** Ukuqhuba, ukushisa okuthile nokunwebeka akushintshi lapha ngezinga lokushisa; ezinhlamvwini ezimbalwa zamadigri zingashintsha ngo-10–30 %. Ukuqina nakho akushintshi.
- **Uxinezelo ngesikhathi bungu-quasi-static futhi buyinsimbi**: umzuzu ngamunye ukuxazulula okuzinzile (akukho inertia), futhi akukho ukuthamba, ngakho ukucwiliswa okuzothambisa ubuso kubonisa uxinezelo ngaphezu kokuthamba.
- **Ama-coefficient okuhamba komoya ngumnikelo wakho**, akabalwa ekugeleni komoya noma kwamanzi.
- **Akukho ukumelana kokuthinta**: ingxenye iyisolidi eyodwa.
- **Ukuphambuka okulinear kuphela**: akukho ukungaphelele, akukho ukuthamba, akukho ukuziphatha ngemva kokuphambuka.
- Isitebhisi semikhawulo yamakhyubhu nama-engeli angaphakathi abukhali kuthinta uxinezelo lokushisa ngendlela efanayo nokunye ukucindezeleka (bona [Hlola uxinezelo nokuguquka](topic:simulation)).
- Lena ibuildi lelabhorethri: hlola izingxenye ezibalulekile ngenye indlela.

## Okuhlobene

- [Hlola uxinezelo nokuguquka (Simulation)](topic:simulation)
- [Okungakakhiwa okwamanje](topic:not-built-yet)
