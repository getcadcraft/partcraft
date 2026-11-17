---
title: Linganisa ukugeleza koketshezi (isifundo sokugeleza)
summary: Ukugeleza ngemisele eseceleni kwengxenye noma ozungezile ebhokisini: izindawo zokungena nokuphuma, umoya, amanzi noma uketshezi lwakho, bese ujubane nengcindezi endizeni yokusika enyakazayo, imigqa yokugeleza, ingcindezi yobuso, ukwehla kwengcindezi, ukulinganisa ubuningi, i-drag ne-lift, kanye nokuthi indlela ye-laminar ingakutshela yini nokuthi ayikutshele yini.
keywords: ukugeleza, CFD, uketshezi, ukulingisa ukugeleza koketshezi, ukulingisa ukugeleza, umoya, amanzi, ukunamathela, ukuminyana, inombolo ka-Reynolds, laminar, turbulent, ukwehla kwengcindezi, ukulahleka kwekhanda, ukungena, ukuphuma, isivalo, ikepisi, ijubane, izinga lokugeleza, ivolumu yokugeleza, amalitha ngomzuzu, ingcindezi emile, imigqa yokugeleza, indiza yokusika, drag, lift, isilinganiso se-drag, isilinganiso se-lift, indawo ebhekene nomoya, ukugeleza kwangaphandle, ukugeleza kwangaphakathi, ipayipi, umsele, i-manifold, i-nozzle, lattice Boltzmann, okuseleyo, ukuhlangana
from: 7dc75f29
---

Isifundo se-**Flow** sibala ukuthi uketshezi lunyakaza kanjani emisele ekhona ngaphakathi engxenyeni yakho (**internal**) noma ozungezile (**external**). Ngokuzenzakalelayo kuba **laminar, incompressible, isothermal and Newtonian**: ukugeleza okubushelelezi koketshezi olunobuningi nokunamathela okumile, ngaphandle kokushisa, ngaphandle kokuphazamiseka nangaphandle kokudonsa kwe-gravity. Kukhona nemodeli **yokuzama** ephazamisayo, eyokubonisa izindlela kuphela (bheka ngezansi). Isebenza ezinhlangothini ezibizwa ngamagama ikhestelo le-mesh elinikeza ingxenye (bheka [Ikhestelo le-mesh](topic:solid-kernels)).

Khetha **Ukulingisa** kubhokisi le-**Workspace**, cindezela **New study** uma kungekho lutho, bese usetha **Type** ibe **Flow (CFD)**. **Flow model** yi-**Laminar** (okuzenzakalelayo) noma **Turbulent (Spalart–Allmaras, experimental)**: bheka **Ukugeleza okuphazamisayo (kuyazama)** ngezansi. Izilungiselelo zesakhiwo sesifundo ziyagcinwa, ngakho ungabuyela emuva. Izilungiselelo zokugeleza ziyagcinwa efayelweni lengxenye, futhi noma yiliphi utshintsho lungahlehliswa.

## Khetha uketshezi namaseli

- **Fluid**: umoya noma amanzi ngo-20 °C, noma **Custom** nobuningi bakho (kg/m³) nokunamathela kwawo okuphelele (Pa·s). Umoya usebenzisa umthetho wegesi elifanele kanye nomthetho ka-Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); amanzi asebenzisa amanani e-IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Cell size**: isikhala koketshezi sigcwaliswa ngama-ikhyubhu alingana. Yishiye ingenalutho ukuze kube usayizi ozenzakalelayo; iphaneli iveza ugridi. Yonke imbobo nomsele kufanele ube **byi-8 kuya kwele-10 amaseli ububanzi** ukuze kube nezinombolo ezisebenzayo; amaseli amancane anembe kakhulu kodwa ayahamba kancane (okuphindwe kabili ngokuncane kwenza umsebenzi ongaba ngu-16 ngaphezulu).
- **Walls**: **Interpolated** ilandela izindonga ezigobile phakathi kwamaseli (okuzenzakalelayo); **Bounce-back** ithatha izindonga njengesakhiwo se-ikhyubhu esinezinyathelo.

## Ukugeleza ngaphakathi engxenyeni

Isikhala sikaketshezi kumele sivaleke. Engeza **Inlet** ne-**Outlet** ephaneli, bese ucindezela ubuso babo kumbono:

1. **Ubuso obubukhulu obuzungeze imbobo** — umphetho ekugcineni kwepayipi, ubuso besibambi. I-PartCraft ivala umgodi walowo mbobo ngesivalo. Yonke imbobo kulobo buso yeyalowo mbobo, ngakho uma ukungena nokuphuma kuvulelwa ebusweni obufanayo, yenza ikepisi elincane phezu kwenye yazo.
2. **Ubuso bangaphakathi besivalo** — njengakwamanye amathuluzi e-CAD: yenza ipuleti elincane (i-extrude) phezu kwembobo bese ukhetha ubuso bayo obuthinta uketshezi.

Ukungena, setha **velocity** (m/s, ilingana kulo lonke ubukhulu bembobo, ingena engxenyeni) noma **volume flow** (L/min). Ukuphuma, setha **static pressure** (Pa, gauge). Uma imbobo ishiywe ivulekile, noma uma udonga lumncane kunesele, ingaphakathi lihlangana nangaphandle futhi ukuxazulula kuyama nombhalo othi "No closed fluid space".

## Ukugeleza ozungezile engxenyeni

Setha **Flow** ibe **External**, **Speed**, indlela okugelezela kuyo, nokuthi ibhokisi lifika kangakanani phambili, emuva nasemaceleni (ngaphandle: 1, 3 no-1 izikhathi zosayizi omkhulu wengxenye). Ubuso bebhokisi okungena ngabo ukugeleza buyi-inflow, ubuso okuphuma ngabo buyi-outflow ku-0 Pa, nezinhlangothi ezihamba nokugeleza ziyashelela. Ibhokisi elincane kakhulu lifaka ukugeleza ngaseceleni kwengxenye futhi likhulisa i-drag. **Reference area** yindawo esetshenziswa yi-drag ne-lift coefficients (ngaphandle: indawo ebhekene nomoya ebonakala ngokugeleza); i-lift ilinganiswa ngo +Y ngaphandle uma ukhetha enye indlela.

## Xazulula bese ufunda imiphumela

Cindezela **Solve**. Ukuxazulula kusebenza ngemuva ngenani lezinyathelo, okuseleyo nesithombe sokuseleyo; **Stop** iyayiphelisa. Iyama lapho okuseleyo (ukuthi inkambu yejubane ishintsha kangakanani ngesinyathelo ngasinye) ingaphansi kwenhloso futhi ukwehla kwengcindezi noma i-drag sekuzinzile. Uma ifinyelela umkhawulo wezinyathelo kuqala, iphaneli ithi **Not converged** ngombala obomvu: izinombolo ziyisimo sokugcina, hhayi impendulo ezinzile.

- **Cut plane**: ijubane noma ingcindezi emile endizeni edlula emodelini; khetha i-normal yayo (X, Y noma Z) bese uhudula i-slider ukuze uyinyakazise. Hambisa iphoyinti phezu kwayo ukuze ufunde izinani.
- **Streamlines**: kusuka ezindaweni zokungena (internal) noma kusuka kurake ohlangothini lokungena lwebhokisi endizeni yokusika (external).
- **Part**: okuqinile, okubonakalayo ngaphakathi (ukuze ubone indiza ngaphakathi), ingcindezi yobuso, noma okufihliwe.
- **Table**: inombolo ka-Reynolds, ukwehla kwengcindezi (ingcindezi emile ephakathi ezindaweni zokungena ukususa ingcindezi emile ephakathi ezindaweni zokuphuma), ukugeleza nengcindezi emaphakathi yembobo ngayinye, amandla engxenyeni, i-drag ne-lift kanye nezilinganiso zazo nendawo yesilinganiso (ngaphandle), ukulinganisa ubuningi (ukungena kuqhathaniswa nokuphuma), i-mesh nesixazululi.

## Ukugeleza okuphazamisayo (kuyazama)

**Flow model › Turbulent (Spalart–Allmaras, experimental)** ixazulula ukugeleza okuphazamisayo okuhlanganisiwe ngesikhathi (steady RANS): imodeli ye-Spalart–Allmaras inikeza ukunamathela kwe-eddy kuseli ngayinye, futhi amaseli aseduze nezindonga asebenzisa umthetho ka-Spalding wodonga esikhundleni sokuxazulula ungqimba olumncane lapho. Iphazamiseka yonke indawo (akukho zindawo ze-laminar, akukho ukuguquka).

**Akuzange idlule emahlolweni wayo wokunemba.** Iphaneli, imiphumela nethebula kuyakusho lokho kukho yonke isifundo esiphazamisayo, futhi isexwayiso asikwazi ukuvalwa. Yisebenzise ngemibono yokugeleza yesimo — lapho ukugeleza kuhlukana, kujikeleze noma kusheshe — **hhayi izinombolo zokuklama**.

| Ukuhlola | Isisekelo | Umphumela |
|---|---|---|
| Ukumelana komsele omncane, iseli lokuqala ku-y⁺ 49 / 98 | Ukulinganisa kuka-Dean | +3.3 % / +4.7 % |
| Umsele onodonga oxazululiwe (y⁺ ≈ 3), Re_τ 180: ijubane elikhulu | Moser, Kim & Mansour DNS | −1 % |
| Umsele omncane, y⁺ 7–15 noma 190–380 | Ukulinganisa kuka-Dean | +9 kuya ku-+22 % |
| Ukumelana kwepayipi ngamaseli e-ikhyubhu, ngokugcwele, 10–30 amaseli ububanzi | Colebrook | 30 kuya ku-34 % ephezulu kakhulu |
| Ukubuyela ngemuva kwesinyathelo esibheke emuva, amaseli 6–14 ngobude besinyathelo | Driver & Seegmiller, izinyathelo ezingu-6.26 | 21 kuya ku-39 % kufushane kakhulu |

Imiphumela ithuthuka kancane kuphela ngamaseli amancane. Ngemva kokuxazulula, ithebula likhombisa i-**y⁺ yeseli lokuqala** (ephansi, eyesilinganiso naphezulu phezu kwamaseli odonga) futhi lisho isexwayiso uma ingaphandle kohlu oluhlolwe lwe-1 kuya ku-400; hlose cishe ku-30 kuya ku-300. **Isikhathi sokusebenza:** amaseli azenzakalelayo alingana nemizuzu embalwa kuphela kwi-core eyodwa yelaptop (iphaneli ikhombisa isimo esibi kakhulu sogridi nomkhawulo wezinyathelo; ipayipi elincane lizinza ngaphansi kwemizuzwana engu-20). Ukunciphisa usayizi weseli ngesigamu kubiza cishe izikhathi ezingu-16 isikhathi eside. Amandla engxenyeni avela ekulinganisweni kwe-momentum phezu kwembobo noma phezu kwebhokisi.

**Okwenziwe kuze kube manje:** amaseli odonga manje ahambisana nokucindezeleka kwawo kokugoqa nomthetho wodonga, okwehlise amaphutha epayipi nesinyathelo ukuya ezibalweni ezingenhla ngaphandle kokushintsha imiphumela yomsele omncane. Lokho akwanele izinombolo zokuklama. Isinyathelo esilandelayo ngamaseli amancane eduze nezindonga.

## Okungasitshela kona nokungasitshelayo

- **Imodeli ye-laminar** iyi-laminar kuphela. Emapayipini ukugeleza kuguquka kube phazamisayo ngaphezu kwenombolo ka-Reynolds engaba ngu-2,000 kuya ku-4,000; ngemuva kwezinto ezinkulu ezingagudlwa umoya, i-wake iqala ukukhipha izinyosi ngaphezu kwengu-50. Iphaneli iyasixwayisa ngalezi zindawo. Umphumela we-laminar wokugeleza okuphazamisayo uncishisa ukwehla kwengcindezi futhi ubala i-drag ngendlela engalungile. Imodeli ephazamisayo ekuyazama (ngenhla) ibonisa ukugeleza okuphazamisayo ngokwesimo; izinombolo zayo azithembekile okwamanje.
- **Indlela:** indlela ye-lattice Boltzmann (D3Q19, ukuhlangana kwesikhathi kabili) eya esimweni esizinzile. Iphazamiseka kancane ngaphakathi; i-PartCraft igcina ukuguquka kobuningi kumaphesenti ambalwa. Uma ukugeleza kusheshe kakhulu kumaseli, ayikwenqabi ukuqala futhi itshela ukuthi amaseli kumele ancipheke kangakanani.
- **Ihlolwe ngokumelene:** ukugeleza kuka-Hagen–Poiseuille epayipini ngaphakathi kengxenye (ukuguquka kwengcindezi ngaphakathi kuka-1 % ku-20 amaseli ububanzi), i-lid-driven cavity ka-Ghia et al. (ngaphakathi kuka-0.75 % wejubane lesivalo), nesisekelo se-silinda sika-Schäfer–Turek (drag ngaphakathi kuka-1 % ku-10 amaseli ngedayamitha).
- Akumodeliwe: ukudluliswa kokushisa, ukuphazamiseka nokunemba kokwakha (imodeli ephazamisayo iyazama), izindawo zamanzi ezivulekile, i-cavitation, i-gravity, izingxenye ezinyakazayo, uketshezi olungeyona i-Newtonian, nezindonga ezingalingani. Lokhu kuyibhilidi lelabhoratri: hlola imiphumela ebalulekile ngenye indlela.
