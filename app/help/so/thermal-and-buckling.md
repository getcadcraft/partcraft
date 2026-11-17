---
title: Kulayl, istiraasta kulaylka iyo bakling
summary: Hel heerkulka qaybta laga bilaabo heerkul go'an, socodka kulaylka, awoodda kulaylka, konveksiyon iyo shucaac (joogto ama wakhti ku xidhan), culeys istiraas leh oo ay keento kor u kaca heerkulka, iyo culeyska ay qaybta dhuuban ku bakli doonto, iyo waxa mid kasta samayn karo iyo waxa aan samayn karin.
keywords: kulayl, gudbinta kulaylka, kulayl, heerkul, konveksiyon, isku xidhka h, shucaac, emissivity, socodka kulaylka, awoodda kulaylka, soo saarista kulaylka, heat sink, wakhti, wakhtiga, qaboojin, kululeyn, Crank–Nicolson, implicit Euler, isu dheelitirka kulaylka, istiraasta kulaylka, istiraasta kulaylka wakhtiga, quench, cillad kulayl, taariikhda istiraasta, ballaadhinta heerkulka, bakling Euler, qiimaha culeyska, culeyska dhuuban, tiir, dhuuban, eigenvalue
from: 1a1b7545
---

Daraasaddan waxay ku nool yihiin goobta Simulation oo ay ag yihiin istiraasta istaatikada iyo jeedinta dabiiciga ah (eeg [Hubi istiraasta iyo foororsiga](topic:simulation)). Ka dooro **Type** ee panelka. Waxay isticmaalaan isla meshka kaabooyinka yaryar iyo isla liiska walxaha; walxo kasta oo maktabada ah waxay leeyihiin conductivity kulayl, specific heat iyo expansion coefficient (qiimo handbook caadi ah, lagu muujiyey **Properties** hoosta).

## Kulayl: halkee kulaylku u tagaa?

1. Dooro **Thermal (heat transfer)** oo ah **Type**.
2. Ku dar shuruudaha kulaylka liiska **Add** ee panelka, kadibna guji wejigooda (sida lagu sameeyo taageerada iyo culeysyada):
   - **Fixed temperature**: wejigu waxaa lagu hayaa heerkul, bilicsanaanta °C.
   - **Heat flux**: W/m² oo galaya wejiga (negative waa baxa). Waxay ku dhacdaa dusha dhabta ah ee wejiga, xitaa meesha kaabooyinka ay sameeyaan qaab derbi ah.
   - **Heat power**: wadar oo watt ah, loo qaybiyo wejiyada la doortay iyadoo laga eegayo balaadhka. Isticmaal kulaylka kulaylkeed ama shiv korontada la yaqaan.
   - **Convection**: hawo ama dareere heerkul leh ayaa kulaylka ka qaada oo ku dhaqaaqa h W/(m²·K). Qiimaha h caadiga ah: hawo joogsan 5–10, fan 25–100, biyo 500–10,000. PartCraft ma xisaabiyo h: study-kan ma jiro socodka dareeraha.
   - **Radiation**: wejigu wuxuu shucaaciyaa deriska heerkul, oo leh emissivity ka 0 ilaa 1. Waa **linearised** (shucaaca waxaa loo qoraa sida coefficient oo kuxiran heerkulka, oo dib loo xalliyaa ilaa uu xasilo), wuxuuna u gaadhaa deriska oo keliya: wejiyadu ma isweydaarsadaan kulayl.
3. **Heat generation** (W/m³) wuxuu kulaysiyaa qaybta oo dhan gudahooda, tusaale ahaan qayb iska caabta.
4. Riix **Xalli**. Qaybta waxaa lagu midabeeyaa heerkulka; dooro **Heat flux** ee **Show** si aad u aragto meesha kulaylku socdo. Taabo qaybta si aad labadaba u akhrido.

Socodka kulaylka joogtada ah wuxuu u baahan yahay meel uu kulaylku u tago: ugu yaraan hal heerkul go'an, konveksiyon ama shucaac. Qayb kaliya oo kulayl gashaa ma leh xaalad joogto ah; sidaas darteed ka dhig wakhti ku xidhan.

Jadwalku wuxuu muujinayaa heerkulka ugu hooseeya iyo ugu sarreeya iyo meesha ay ku yaalaan, socodka kulaylka ugu weyn, iyo **isu-dheelitirka kulaylka**: kulaylka galaya ama ka baxaya shuruud kasta (heerkul go'an wuxuu tirinayaa waxa uu bixin ama nuugi lahaa), kulaylka la soo saaray, wadarta galaya iyo baxaya, iyo **imbalance**. Imbalance-ku waa inuu noqdaa qayb yar oo kulaylka galaya; haddii uu weyn yahay, natiijada lama aamini karo.

### Wakhtiga ku xidhan (transient)

Calaamadi **Transient** oo bixi **Start temperature** (qaybta oo dhan halkaas ayay ka bilaabataa), **Time span** iyo tirada **Time steps**. **Implicit Euler** waa adag; **Crank–Nicolson** waa saxsan badan tallaabooyin isku mid ah, laakiin wuu wareegi karaa isbeddel degdeg ah. Kadib xalinta, jiid slider-ka **Time** si aad u aragto heerkulka mid kasta oo wakhti ah (skaalka midabka wuxuu isku mid yahay wakhti kasta). Isu-dheelitirka kulaylka markaas wuxuu ku daraa kulaylka la kaydiyay.

## Istiraasta kulaylka: waa maxay isbeddelka heerkulka uu qaybta ku sameeyo?

Daraasad **Static stress** (ama **Buckling**) dhexdeeda, deji **Thermal load**:

- **Uniform temperature change**: qaybta oo dhan waa kululaanaysaa (ama qaboojinaysaa, tiro negative ah ku jirta) tiradaas kelvin.
- **Temperatures from thermal conditions**: ku dar shuruudaha kulaylka daraasadda isku mid ah; heerkulada joogtada ah waa la xalliyaa marka hore isla meshka, kadibna qaybtu waa ballaadhaysaa α·(T − **stress-free temperature**).
- **Temperatures over time (transient run)**: ku dar shuruudaha kulaylka, kadibna bixi **Start temperature**, **Time span**, **Time steps** iyo **Time stepping** sida daraasadda kulaylka ee wakhti ku xidhan. Heerkulada waxaa lagu xalliyaa wakhti isla meshka (kaabooyin ama tetrahedra), xalin istaatik oo ku saabsan heerkulka mid kasta wuxuu siiyaa istiraasta wakhtigaas. **Stress at**:
  - **Wakhtiga ugu xun** (bilowga): **Xalinta istiraasta** wuxuu xalinayaa wakhtiyo si siman loo kala qaybiyey socodka, oo bilowga ku jira (21 haddii aadan bedelin, ugu badnaan 51). Natiijooyinku waxay ku furmaan wakhtiga leh istiraasta von Mises ee ugu weyn; jadwalku wuxuu muujinayaa magaca wakhtigaas, jaantus yar ayaa muujinaya istiraasta ugu sarreysa iyo wakhtiga, slider-ka **Time** wuxuu muujinayaa istiraasta wakhti kasta oo la xalliyay (skaalka midabka wuxuu ahaadaa kii wakhtiga ugu xun).
  - **Hal wakhti oo la doortay**: hal wakhti, tallaabada wakhtiga ee u dhow **Time (s)** aad bixiso. Daraasadda bakling mar walba wakhti la doortay buu qaataa (dhamaadka socodka ama mid aad dejiso).

Qayb la qaboojiyay (ka kulushay ilaa qabow) ama si degdeg ah u kululaysay ayaa ugu istiraasta badan inta u dhaxaysa gudaha iyo dusha ay ku kala duwan yihiin: badanaa bilowga. Heerkul la hayo wuxuu ka shaqeeyaa isagoo bilaabaya daqiiqadda koowaad, sida isbeddel degdeg ah, sidaas darteed istiraasta bilowga ah wuxuu kuxirantahay cabbirka elementa (elementaha yar oo kaliya ayaa arka isbeddelka). Akhri sidii "aad u sarreeya", oo eeg wakhtiyada xiga ee slider-ka oo qiyam ay meshku xalliyo. Istiraasku waa quasi-static: lama jiro inertia, lama jiro gariir ka yimaada isbeddelka degdega ah.

Qayb xor u ah inay koraan ma leh istiraas kulayl: hayso ilaa uu dhaqdhaqaaqi karin (tusaale, saddex wejood oo aan cadaalad lahayn oo xagal xaq ah). Haddii ay dhex ku jirto laba derbi, waa la cadaadiyaa: bir cusub oo kululaysan 50 K oo u dhexeeya derbiyo adag wuxuu qaadaa qiyaastii 117 MPa. Culeysyada kulaylka naftooda ayay isu dheelitiraan, sidaas darteed falcelinta weli waxay isu dheelitirtaa culeysyada farsamada oo keliya.

## Bakling: goorma qaybta dhuuban ayaa jabta?

1. Dooro **Buckling (linear)** oo ah **Type**, kuna dar taageerooyin iyo culeysyo sida daraasadda istaatikada.
2. Deji **Load factors to find** (inta buckling mode ah).
3. Riix **Xalli**. Mode kasta wuxuu leeyahay **load factor**: tirada culeyskaaga ee qaybta ideal ah ku bakli doonto. Load factor 3 macnaheedu waa saddex jeer culeyskaaga; **load factor ka yar 1 macnaheedu waa inuu ku bakli doono culeysyada aad dabaqday**. Jadwalku wuxuu sidoo kale siinayaa wadarta culeyska mid kasta. Qaabka mode-ka wuxuu muujinayaa sida uu u bakli doono (cabbirkiisu waxba ma ahan).

**Buckling-ka linear wuxuu ka weyn yahay culeyska bakling ee dhabta ah.** Wuxuu u qaadanayaa qayb kaamil ah: toosan sida ugu fiican, aan istiraas hadhaa lahayn, iyo mid dhabeeya. Qaybaha dhabta ahi waxay leeyihiin qalad yar, waxayna soo gaadhi karaan ka hor, shaxda dhuuban ayaa bakli karta qiimo ka hooseeya qiimaha linear. Isticmaal margin ballaaran, oo load factor ku dhow ama ka hooseeya 3 qolofta dhuuban waa digniin.

## Sida loo isku kalsoonaan karo

PartCraft wuxuu hubiyaa xalinta nidaamkan iyada oo lagu barbardhigayo qaacidooyin gacanta ah: bar u dhexeeya laba heerkul (saxan), fin qabow (dhexdeeda 0.3 K), balaadh kulaylka isaga (saxan), kaabo qabowsada wakhtiga ku xidhan (dhexdeeda 0.1 % oo Crank–Nicolson), bar si degdeg ah loo kululeeyey hal dhamaad, bar xor ah oo kululaysan (istiraas la'aan, ΔL = αLΔT), bar u dhexeeya derbiyo (σ = −EαΔT), dhal quenched ah oo wakhti ku xidhan oo lagu barbardhigay xalka series-ka caadiga ah (dhexdeeda 1% kaabooyinka, 2.1% tetrahedra bartamaha dhalada; 0.5% dusheeda), wakhtiga ugu dambeeya ee socod dheer oo lagu barbardhigay istiraasta kulaylka joogtada (isku mid ilaa hal milyan), iyo tiirarka Euler (dhexdeeda 1% fixed–free, 1.5% pinned–pinned). Ka fiirso:

- **Qiimaha walxaha joogto ah.** Conductivity, specific heat iyo expansion ma isbeddelaan heerkulka; heerkulada qaarkood ee boqolaad darajo ayay isbeddeli karaan 10–30 %. Adkaanta ma isbeddesho.
- **Istiraasta wakhtiga waa quasi-static iyo elastic**: wakhti kasta waa xal istaatik (aan inertia lahayn), aanna wax yield lahayn, sidaas darteed quench oo dusha yield ku geli lahayd wuxuu tusayaa istiraas ka sarreeya yield.
- **Qiimaha convection waa geli kaaga**, lama xisaabiyo socodka hawo ama biyo.
- **Ma jiro iska caabin xiriir**: qaybtu waa hal jidh.
- **Bakling linear oo keliya**: ma jiro imperfections, ma jiro yielding, ma jiro dabeecad ka dib bakling.
- Staircase-ka kaabooyinka iyo geesaha gudaha ee adag waxay saameeyaan istiraasta kulaylka sida istiraasyada kale (eeg [Hubi istiraasta iyo foororsiga](topic:simulation)).
- Tani waa dhismo shaybaar: hubi qaybaha muhiimka ah habka kale.

## Wax la xiriira

- [Hubi istiraasta iyo foororsiga (Simulation)](topic:simulation)
- [Waxa aan weli la dhisin](topic:not-built-yet)
