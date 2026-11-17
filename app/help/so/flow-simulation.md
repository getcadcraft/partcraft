---
title: Ku dayso socodka dareeraha (Flow study)
summary: Socodka dareeraha marinnada ku jira qayb ama ku wareegsan qaybta sanduuq gudihiisa: gelin, bixin, hawo, biyo ama dareere aad keento, kadibna xawaaraha iyo cadaadiska diyaarad goys oo la dhaqaajin karo, xariiqyada socodka, cadaadiska dusha, hoos u dhaca cadaadiska, isku-dheelitirka cufka, jiidista iyo kor u qaadista, iyo waxa habka laminar-ku sheegi karo iyo waxa uusan sheegi karin.
keywords: socod, CFD, dareere, ku dayso socodka, hawo, biyo, cufnaan, qallajin, lambarka Reynolds, laminar, turbulent, hoos u dhaca cadaadiska, lumista madaxa, gelin, bixin, dabool, xawaaraha, socodka xaddiga, socodka mugga, litir daqiiqadii, cadaadiska istaatiga, xariiqyada socodka, diyaarada goynta, diyaarada qaybinta, jiid, kor u qaadid, isku-dheelitir, tuubo, marin, dhuumo, afka, lattice Boltzmann, hadhaag, isku-soo-dhowaansho
from: 7dc75f29
---

Daraasad **Flow** waxay xisaabisaa sida dareeruhu u socdo marinnada gudaha qaybtaada (**internal**) ama ku wareegsan (**external**). Caadiyan waa **laminar, incompressible, isothermal iyo Newtonian**: socod nalalan oo dareere cufnaanteeda iyo qallajintiisu go'an yihiin, aan kulayl, shuruud iyo xoog dhul lahayn. Waxaa kaloo jira model **experimental** oo turbulent ah, oo loogu talagalay dhaxanta sifada ah oo keliya (eeg hoos). Waxay ka shaqeysaa dusha magacaysan ee mesh kernel-ku siiyay qaybta (eeg [Kernel-ka mesh-ka](topic:solid-kernels)).

Dooro **Simulation** sanduuqa **Workspace**, riix **New study** haddii aan jirin mid, oo deji **Type** ka ah **Flow (CFD)**. **Flow model** waa **Laminar** (caadiga) ama **Turbulent (Spalart–Allmaras, experimental)**: eeg **Turbulent flow (experimental)** hoose. Dejinta qaab-dhismeedka daraasadda way ilaaliyaan, sidaas darteed waad dib ugu noqon kartaa. Dejinta socodka waxaa lagu kaydiyaa faylka qaybta, isbeddel kasta waa la ka noqon karaa.

## Dooro dareeraha iyo unugyada

- **Fluid**: hawo ama biyo 20 °C, ama **Custom** oo leh cufnaantaada (kg/m³) iyo qallajintaada (Pa·s). Hawadu waxay isticmaashaa sharciga gaaska ee alxanka iyo sharciga Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); biyuhu waxay isticmaalaan qiimaha IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Cell size**: meesha dareeraha ku jirta waxaa lagu buuxiyaa kaabyo isku mid ah. Ka tag madhan si loo helo cabbir toos ah; panelku wuxuu muujinayaa grid-ka. Fur kasta iyo marin kasta waa inay ahaadaan **ugu yaraan 8 ilaa 10 unug** ballac; unugyada yaryar waxay siiyaan natiijo sax badan laakiin way gaabiyaan (laba jeer ka yar waa ku dhowaad 16 jeer shaqo badan).
- **Walls**: **Interpolated** wuxuu raacaa derbiyada qalloocan ee u dhexeeya unugyada (caadiga); **Bounce-back** wuxuu derbiyada u qaataa sida jaranjarada kaabyada.

## Socodka gudaha qaybta

Meesha dareeraha ku jirta waa inay ahaataa mid xidhan. Ku dar **Inlet** iyo **Outlet** panelka, kadibna dhagsii dushooda muuqaalka:

1. **Dusha siman ee ku wareegsan fur** — geeska tuubada, dusha dekedda. PartCraft halkaas ayuu godka furka ku xidhaa dabool. Godka kasta ee dusha ahaanshaha wuxuu isagu u dhow yahay furkaas, sidaas darteed marka gelin iyo bixin isku dusha ku furmaan, waxaad ku qaadan kartaa dabool khafiif ah mid ka mid ah.
2. **Dusha gudaha daboolka** — sida qalabyada CAD kale: samee lakab khafiif ah (extrude) furka dul dhig oo dooro dusha taabta dareeraha.

Gelinta deji **velocity** (m/s, isku mid furka oo dhan, gudaha qaybta) ama **volume flow** (L/min). Bixinta deji **static pressure** (Pa, gauge). Haddii fur la furan yahay, ama derbi ka khafiifsan unug, dhinaca gudaha wuxuu ku biiraa dibada oo xallinta way joogsanaysaa, wuxuuna soo bandhigaa "Ma jiro meel dareere xidhan".

## Socodka ku wareegsan qaybta

Deji **Flow** ah **External**, **Speed**, jihada uu dareeru ku socdo, iyo intee ayuu sanduuqu u gaadhayaa hore, dambe iyo dhinacyada (madhan: 1, 3 iyo 1 jeer cabbirka ugu weyn ee qaybta). Dusha sanduuqa ee dareeru ku galo waa inflow, dusha uu ka baxo waa outflow oo ah 0 Pa, dusha ku socda dhinacyada waa siman yihiin. Sanduuq aad u yar ayaa socodka ku riixa qaybta, taasna waxay kor u qaadaa jiidista. **Reference area** waa baadhiga ay xisaabta jiidista iyo kor u qaadista isticmaalaan (madhan: baadhiga hore ee qaybta oo loo arko socodka); kor u qaadistu waxay ku cabbirmaysaa +Y, mooyee haddii aad jihada kale doorato.

## Xalli oo akhri natiijooyinka

Riix **Solve**. Xallinta waxay ku shaqeysaa asal ahaan, waxayna muujinaysaa tirada tallaabooyinka, hadhaagga iyo garaaf hadhaag. **Stop** ayaa joojiya. Waxay dhammaanaysaa marka hadhaagga (intee le'eg ayuu xawaaraha dareeruhu isu beddelayo tallaabo kasta) uu ka hooseeyo beegga, oo hoos u dhaca cadaadiska ama jiidista uu degsado. Haddii marka hore ay gaarto xadka tallaabooyinka, panelku wuxuu cas ku qoraa **Not converged**: tirooyinku waa xaaladii ugu dambeysay, ma aha jawaab joogto ah.

- **Cut plane**: xawaaraha ama cadaadiska istaatiga diyaarad ku marta moodelka; dooro jihadeeda (X, Y ama Z) oo jiid slider-ka si aad u dhaqaajiso. Ku dul sii si aad qiimayaasha u akhrido.
- **Streamlines**: gelinta (gudaha) ama shabakad ka soo baxda dhinaca gelinta sanduuqa ee diyaarada goynta (dibada).
- **Part**: adag, muuqaal dhaadheer (si aad diyaarada gudaha u aragto), cadaadiska dusha, ama qarsan.
- **Table**: tirada Reynolds, hoos u dhaca cadaadiska (celceliska cadaadiska istaatiga gelinta ka dhigan bixinta), socodka iyo celceliska cadaadiska fur kasta, xoogga qaybta, jiidista iyo kor u qaadista oo leh isku-dheelitirkooda iyo baadhiga tixraaca (dibada), isku-dheelitirka cufka (gelin ka dhigan bixinta), shabakadda iyo xallaaga.

## Socodka turbulent-ka (experimental)

**Flow model › Turbulent (Spalart–Allmaras, experimental)** wuxuu xalliyaa socodka turbulent-ka ee celceliska wakhtiga (steady RANS): habka Spalart–Allmaras wuxuu siiyaa eddy viscosity unug kasta, unugyada derbiyada ku xiga waxay isticmaalaan sharciga derbiga ee Spalding halkii ay ka xallin lahaayeen lakabka khafiifka ah. Waa turbulent meel kasta (ma jiro goobo laminar ah, ma jiro wareejin).

**Ma gudbin hubinteedii saxnaanta.** Panelka, natiijooyinka iyo miiska ayaa taas sheegaya daraasad turbulent kasta, digniintana ma xidhi karto. Isticmaal **dhaxanta socodka sifada ah** — meelaha socodku ka kala go'o, ka wareego ama ku degdego — **ma aha tirooyin naqshadeed**.

| Hubin | Tixraac | Natiijo |
|---|---|---|
| Marin siman, xoogga, unugga koowaad y⁺ 49 / 98 | Dean's correlation | +3.3 % / +4.7 % |
| Marin derbiyada la xalliyay (y⁺ ≈ 3), Re_τ 180: xawaaraha celceliska | Moser, Kim & Mansour DNS | −1 % |
| Marin siman, y⁺ 7–15 ama 190–380 | Dean's correlation | +9 ilaa +22 % |
| Xoogga tuubada ee unugyada kaabyada, si buuxda u horumarsan, 10–30 unug ballac | Colebrook | 30 ilaa 34 % oo sare |
| Dib u xidhmidda ka dib dhabarka tallaabo gadaal u socota, 6–14 unug tallaabo kasta | Driver & Seegmiller, 6.26 tallaabo | 21 ilaa 39 % oo gaaban |

Natiijooyinku si tartiib ah ayay u wanaagsanaadaan marka unugyada la yareeyo. Xallinta ka dib, miiska wuxuu muujinayaa **unugga koowaad y⁺** (ugu yar, celceliska iyo ugu badan unugyada derbiga) wuxuuna digayaa ka baxsan xadka la hubiyay ee 1 ilaa 400; ku dadaal inta u dhexaysa 30 ilaa 300. **Waqtiga shaqada:** unugyada toosan waxay u qaadan doonaan dhowr daqiiqo oo ku shaqeeya hal core oo laptop ah ugu badnaan; tuubo yar ayaa ka xasilloonaata wax ka yar 20 ilbiriqsi. Unugga oo la kala badhiyo wuxuu qaadaa ku dhowaad 16 jeer waqti dheer. Jiidista qaybta waxay ka timaadaa isku-dheelitirka momentum-ka fur-ka ama sanduuqa.

**Wixii laga shaqeeyay hadda:** unugyada derbiga hadda waxay isku qiimeeyaan shiddadooda wadajirka ah iyo sharciga derbiga, taas oo hoos u dhigtay khaladaadka tuubada iyo tallaabada qiyamka kor ku qoran, iyada oo aan wax ka beddelin natiijooyinka marinka siman. Taasi ma kafiyin tirooyinka naqshadeynta. Tallaabada xigta waa unugyo fiican oo u dhow derbiyada.

## Waxa uu sheegi karo iyo waxa uusan sheegi karin

- **Model-ka laminar-ka** waa laminar keliya. Tuubooyinka socodku wuu turbulent-ka noqdaa ka dib lambarka Reynolds ee ku dhow 2,000 ilaa 4,000; jidhka dhabarka ka dambeeya, dabada wuxuu bilaabaa inuu tuurto kuwa ka dhigaya ka sarreeya 50 qiyaas. Panelku wuxuu digayaa meelahaas. Natiijada laminar ee socod turbulent ah waxay ka hoosaysiisaa hoos u dhaca cadaadiska waxayna khaldaa jiidista. Model-ka turbulent-ka ee experimental-ka (kor) wuxuu daboolaa socodka turbulent-ka sifada ahaan; tirooyinkiisu weli ma aha kuwo la isku halayn karo.
- **Habka:** habka lattice Boltzmann (D3Q19, ururinta laba wakhtiga-dhaca) oo lagu socodsiiyo xaalad joogto ah. Gudaha wuu yar yahay isbeddelka cufnaanta; PartCraft wuxuu isbeddelka cufnaanta ku hayaa dhowr boqolkiiba. Haddii socodku unugyada u dhaqso badan yahay, ma bilaabi doono wuxuuna sheegaa inta ay unugyadu ka yaraan inay tahay.
- **La barbardhigay:** socodka Hagen–Poiseuille tuubada qaybta gudaheeda (gradient-ka cadaadiska ilaa 1 % gudaha, 20 unug ballac), kaabka lid-driven ee Ghia et al. (ilaa 0.75 % xawaaraha dabada), iyo tijaabada silinda Schäfer–Turek (jiidista ilaa 1 % gudaha, 10 unug dhexroor kasta).
- Lama soo saaro: gudbinta kulaylka, turbulence-ka oo naqshadeyn saxnaan leh (model-ka turbulent wuu experimental yahay), dusha xor ah, cavitation, xoogga dhulka, qaybo dhaqaaqa, dareere aan Newtonian ahayn, derbiyo qallafsan. Dhismaha shaybaarka: hubi natiijooyinka muhiimka ah siyaabo kale.
