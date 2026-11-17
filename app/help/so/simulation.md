---
title: Hubi xoogga iyo go'idda (Simulation)
summary: Dooro birta, go'i dusha, ku dar xoog, cadaadis ama miisaanka qaybta, xal, oo ka akhri von Mises stress, displacement, safety factor, reactions iyo natural frequencies moodeelka, iyo waxa habku sheegi karo iyo waxa uusan sheegi karin.
keywords: simulation, FEA, falanqaynta toosa, cusboonaysii intaad tafatirto, jebi, maxaa marka hore jebiya, qiimaha culeyska, aan-toosnayn, plastikiyo, dhalinta, istiraan plastik, laba-khadood, taabasho, lamaane taabasho, ciqaab, xidhan, taabasho la'aan xoog-gelin, CalculiX, .inp, .frd, dhammaad-curiye, xoog, istiraan, von Mises, dhaqdhaqaaq, go'id, qiimaha nabad-galyada, dhalin, falcelin, culeys, xoog, cadaadis, culeyska dhulka, miisaan, go'an, taageero, xidhiidh, birta, bir, aluminium, titanium, ABS, PLA, nylon, natural frequency, modal, gariir, mesh, cabbirka elementka, tetrahedral, tetrahedra, tet mesh, voxel, tayada mesh-ka, principal stress, istiraanka isku mid ah, qiyaasta qaladka, dusha wareegsan, godad, fillets, adaptive, nuxurinta otomaatiga ah, h-adaptive, isku-ururin, mesh convergence, dusha saxda ah, sfeer, koon, torus, spline, freeform
from: 6f2fdec1
---

Goobta Simulation-ku wuxuu ka jawaabaa su'aasha "ma gooni doonaa ama ma jebi doonaa culeyskan hoosteeda?" qaybta aad moodelayso. Waa daraasad **linear static** (go'id yar, birtu weli way dhalaalaysaa) ama daraasad **natural frequency**, oo lagu xalliyo mesh tetrahedra quadratic ah oo raacaya dusha qaybta (ama, haddii aad doorto, kuubbado isku mid ah oo yar). Waxay ku shaqeysaa dusha magacaysan ee mesh kernel-ku siiyo qaybta (eeg [Mesh kernel](topic:solid-kernels)).

Dooro **Simulation** sanduuqa **Workspace** ee bidix ee toolbar-ka. Qaybtaadu ma beddelato; daraasadda waxa lagu kaydiyaa gudaha faylka qaybta, isbeddel kasta oo ku dhacaa waa la ka noqon karaa.

## Dejiso daraasad

1. Taabo **New study** panelka midig.
2. Dooro **Material**. Panelku wuxuu tusayaa adkaynta (E), Poisson's ratio, cufnaanta iyo xoogga dhalinta. Qiimayaashu waa tirooyin caadi ah oo buug-gacmeed ah; qiimayaasha la xaqiijiyay ee bixiyahaaga ayaa laga yaabaa inay kala duwanaadaan.
3. Dooro **Mesh**:
   - **Tetrahedral (accurate)**, caadiga: tetrahedra 10-node ah oo dusheeda dibadda ku yaal dusha qaybta, oo geesaha qallooca ah ee godadka, fillets-ka iyo dusha kale ee wareegsan. Barta dusha falaska, silinda, kooniga, sfeerka iyo toroid, dusha la jaray iyo la soo bixiyay iyo dusha freeform (B-spline) waxay ku sugan yihiin dusha saxda ah; nooc kasta oo kale oo dusha ah wuxuu raacaa display mesh-kiisa, miiskuna wuxuu sheegaa dusha intee ah ee sidaas samaysay. Mesh-ka wuxuu si iskiis ah u noqdaa mid nuxur badan dhinacyada wareegsan, darbiyada khafiifka ah iyo geesaha qalalan.
   - **Voxel cubes (fast)**: qaybta oo lagu buuxiyey kuubbado isku mid ah. Degdeg, laakiin dusha wareegsan waxay noqdaan tallaabo. Daraasadaha la kaydiyay ka hor tetrahedral mesh-ka way sii haysaan kan.
4. Ka tag **Element size** madhan si aad u hesho cabbir otomaatig (qiyaastii 12,000 tetrahedra, ama 20,000 kuub), ama ku qor mm. Panelku wuxuu tusayaa qiyaastii inta elements ee sidaas samaynaysa ka hor inta lagu daro meelaha nuxurka badan. Tetrahedra-dii, **Smaller elements on curved faces** (bilowga on) wuxuu nuxurinayaa godadka iyo fillets-ka, halkaas oo xoogga badanaa uu sare u kaco.

### Nuxur si toos ah

Tetrahedra, daraasad static ama buckling (aan culeys kulul lahayn), daraasad natural-frequency iyo daraasad thermal joogto ah waxay bixiyaan **Refine automatically (adaptive)**. Calaamadi oo deji:

- **Target error (%)**: xalinta way joogsataa marka qaladka la qiyaasay ka yar yahay (1 % marka hore).
- **Most passes**: ugu badan ee xalinta ay samayn karto (5 marka hore, ugu badnaan 10).

Mar kasta xalinta wuxuu xalinayaa, wuxuu helayaa elements-ka qaladka qiyaasay ee ugu weyn, wuxuu jebiyaa (iyo sida yar ee xiriiriyayaasha ah ee loo baahan yahay si mesh-ku u sii buuxo), ka dibna mar kale wuu xalinayaa. Nodes cusub dusha wareegsan waxay u gudbaan dusha saxda ah. Natiijooyinka markaa waxay muujinayaan miis iyo chart, oo mar kasta ah elements, unknowns, qaladka la qiyaasay iyo xoogga ugu sarreeya (ama heerkulka) iyo barbaadidda (ama heat flux), iyo khad sabab u sheegaya inta uu joogsaday: yoolka waa la gaadhay, marxaladdii way dhammaadeen, mesh-ka xiga aad buu u weyn doonaa, ama xal mid ayaa fashilmay (kaas oo markaas arkaysaa xalkii ugu dambeeyay ee wanaagsanaa).

Qiyaasta ku akhri qiyaas. Waxay (Zienkiewicz–Zhu, marka loo barbar dhigo jawaabaha saxda ah waxay akhrisaa 0.6 ilaa 0.95 qaladka runta ah) cabbiraysaa qaladka **qaybta oo dhan**, sidaas darteed xoogga ugu sarreeya godka ama fillet-ka badanaa wali waa xoog yar ayuu khaldan yahay marka qiyaasuhu yar yahay: xoog-urursiga, yool ka dhig ka yar 1 % oo daawo xoogga oo xasiladaysa marxalad ka marxalad. Geesaha gudaha ee qalalan ama geeska dusha go'an xoogga runta ah waa aan dhammaad lahayn, sidaas darteed qiyaasta weligeed ma gaadho; marxaladdii waxay dhammaadaan halkii.

**Natural frequencies iyo buckling.** Daraasadda natural-frequency qiyaasuhu wuxuu daboolayaa mode kasta oo aad codsatay, mid kastaa si isku mid ah loo tiriyaa; miiska iyo chart-ku waxay raacaan laba frequency ee ugu horreeya. Qaybta dusha toosan oo kaliya leh, frequency wuxuu hoos u dhacaa kaliya marxalad ka marxalad (mesh kasta wuxuu hayaa kii hore); dusha wareegsan ayaa sidoo kale u dhowaada qaabkooda runta ah, taas oo frequency-ka wax yar u dhaqaajin karta labada dhinac. Buckling-ka, qiyaasuhu wuxuu daboolayaa pre-stress iyo modes-ka buckling, miiskuna wuxuu raacaa load factors-ka. Waxa la hubiyay bar bir ah 100 × 10 × 10 mm ah: frequency-ka ugu horreeya wuxuu ka xasilay 812.4 ilaa 811.9 Hz afar marxaladood, 0.4 % ka hooseeya Euler–Bernoulli (oo aan tixgelinin shear-ka), iyo load factor-ka tiirka 0.5 % Euler dhexdiisa.

## Hay ka dibna culeys

Daraasad kasta waxay u baahan tahay ugu yaraan hal taageero iyo, xoogga ku saabsan, hal culeys.

1. Taabo {{ui:Go'an}} toolbar-ka. Taageerada cusub waa la doortaa oo wuxuu sugayaa dusha: guji dusha la hayo go'an (guji dusha mar kale si aad uga saarto). Taabo **Dhammee dooritaanka** ama {{key:Esc}} marka aad dhammayso. Koonyo buluug ah ayaa calaamadinaya dusha la hayo.
2. Taabo {{ui:Xoog}} oo guji dusha uu xoogga saaro. Panelka ku qor **Total force** newton-ka oo dooro **Direction**: gudaha dusha, ama dhinac tiir. Xoogga waxaa lagu wadaagaa dusha la doortay sida ballaca. Fallaadho oranji ah ayaa tusaya.
3. Taabo {{ui:Cadaadis}} cadaadis MPa (N/mm²) oo ku riixaya dusha la doortay; cadaadis taban wuxuu jiidaa.

Noocyo kale waxay ku jiraan liiska **Ku dar** ee panelka: **Frictionless face** (dusha wuu isku dhaadhaci karaa laakiin kama guuri karo; isticmaal dusha simmetry iyo taageerada siman) iyo **Gravity** (culeyska dhulka: miisaanka qaybta, 9.81 m/s², jihada aad doorto).

Taageero aan qaybta u daayin inay dhaadhacdo ama wareegto waa la diidaa, iyada oo sheegaysa dhaqdhaqaaqa ay ka hadhay.

## Xal oo akhri natiijooyinka

Taabo {{ui:Xal}}. Shaqadu wuxuu ku shaqeeyaa background-ka; **Stop** wuu joojiyaa. Markaas:

- Qaybta waxaa lagu midabeeyaa **von Mises stress**; dooro **Displacement** ama **Safety factor** ee **Show**. Legend-ku wuxuu sheegaa miisaanka.
- Ku tilmaan qaybta si aad u akhrido qiimayaasha hoosta jiirka.
- Calaamadi **Deformed shape** si aad u aragto qaybta oo qallooctay (dhaqdhaqaaqa waa la weyneeyaa **Scale**-ka; kan runta ahi waa miiska).
- Miiska wuxuu soo bandhigaa xoogga ugu weyn iyo meesha uu ku yaal, barbaadidda ugu weyn, **safety factor** ugu yar (xoogga dhalinta ÷ von Mises stress; ka hooseeya 1 birtu way dhalaalaysaa), culeyska la dhaqay iyo **reactions** taageerooyinka (waxay isku miisaamayaan culeyska), iyo mesh-ka la isticmaalay.

Dhoof natiijooyinka ama dooro **Type** si aad u aragto **natural frequencies**, dejiso inta **Modes**, ka dibna xal. Mode kasta wuxuu muujinayaa frequency-kiisa iyo qaabkiisa (qaababka waxaa loo miisaamaa 1 dhaqdhaqaaqooda ugu weyn).

Haddii aad qaybta beddesho, natiijooyinka waxaa lagu calaamadiyaa inay hadhay: mar kale xal.

## Dhalinta iyo taabashada (daraasadaha aan-toosnayn)

Labo nooc oo daraasad oo dheeraad ah ayaa ka gudba "birtu way ku sii jirtaa go'id la'aan":

- **Nonlinear (material yields)** wuxuu raacaa khadka toosan ee birta ilaa xoogga dhalinta, ka dibna nidaam tirtir ah (**Slope after yield**, 1 % ee E marka madhan la eego). Culeysku wuxuu sii socdaa **Load steps**; tallaabada aan xasilin waxaa lagu dhex-jeexaa isaga. Natiijooyinka waxaa lagu daraa **Plastic strain** plots-ka, waxayna sheegaan inta culeysku ka qaatay. Haddii tallaabo weli aanu xasilin, daraasadu wuxuu joogsadaa tallaabadii ugu dambaysay ee wanaagsanayd, panelka Dhibaatooyinka ⚠ ayaa sheegaya meesha: qaybtu halkaas xoog buu ka dhamaaday (dhac), ama tallaabooyinku waa weyn yihiin.
- **Contact between pieces** wuxuu ogolaanayaa qaybaha kala gaarka ah ee qaybta inay isku riixaan. Ku dar **Contact pair**, dooro dusha A (dusha riixa) oo leh {{ui:Dooro wejiyada}}, ka dibna dusha B oo leh {{ui:Dooro wejiyada dhinaca B}}. **Frictionless** qaybaha way riixaan, dhaadhacaan oo kala baxaan; **bonded** qaybaha way xidhan yihiin. Qayb kasta waxaa lagu meshaynayaa keligeed, sidaas darteed farqi yar oo u dhexeeya waa wanaagsan. Contact waa habka ciqaabta: qaybaha way isku galaan wax yar (**penalty factor** × E ÷ element size wuxuu dejiyaa adkaanta taabashada). Miiska wuxuu muujinayaa galka ugu qotada badan, panelka Dhibaatooyinka ayaa digaya marka uu ka badan yahay 1 % ee element size: kor u qaad factor-ka ama isticmaal elements yar.

Labaduba waxay isticmaalaan tetrahedral mesh. Ilaa hadda halkan ma xallinayno xoog-gelinta, dhaadhac weyn iyo wareeg weyn.

## Socodsii CalculiX

**Dhoof › CalculiX deck (.inp)** (ama {{ui:Save a CalculiX deck (.inp)}} panelka) wuxuu kaydiyaa daraasadda sida faylka gelinta CalculiX, barnaamij kale oo aad rakibto oo aad shaqeysid adigu: mesh-kii, birtii, taageeradii, culeysyadii iyo lamaanaha taabashada, mm, N iyo MPa. Socodsii, markaas **Dhoof › CalculiX results (.frd)** wuxuu akhrinayaa faylka natiijada ee CalculiX kaas oo ku dhigaya isla mesh-ka, wuxuuna muujinayaa barbaadidda (iyo von Mises stress haddii faylku xoogga ku jiro). Haddii aad qaybta ama element size beddesho intaas u dhaxeysa, mesh-ku ma isku mid aha oo PartCraft wuu sheegaa: kaydi deck cusub.

## Intee ayay ku kalsoonaan karaa

PartCraft wuxuu hubiyaa xalkiisa marka loo barbar dhigo qaabab gacanta ah (go'id cantilever-ka PL³/3EI oo 1 % dhex jira, dheeraanta bar-ka PL/AE oo saxda ah, frequency-ka ugu horreeya ee cantilever-ka 3 % dhex jira, xoogga godka ku wareegsan dusha dhexdeeda). Hadana, ku hay xaddidaadyadan:

- **Mesh-ka.** Tetrahedra: PartCraft wuxuu hubiyaa go'iddiisa cantilever-ka iyo xoogga foorarka (dhex 0.3 %), xoogga godka ku jira dusha (Kt, ku dhow 1 %), tuubo qaro weyn oo cadaadis hoosta (Lamé, 0.3 %) iyo frequency-ka ugu horreeya (0.4 %). Miiska wuxuu tusayaa **tayada mesh-ka** (xagasha ugu yar iyo ugu weyn ee dusha elements-ka; ka hooseeya 10° element-ku waa liita) iyo **qaladka xoogga la qiyaasay**: haddii uu ka badan yahay dhawr boqolley, mar kale xal element size yar, ama ka daa **Refine automatically** inuu sameeyo. Dusha leh god iyo laba notch oo geesood ah, nuxurka otomaatiga ah wuxuu gaadhay 1 % ee Kt-ka buugga dhexdiisa, isagoo isticmaalay qiyaastii lix meelood hal meel unknowns-ka oo ay u baahan tahay mesh-ka oo dhan inuu sii khafiifo. Voxel kuubbado ku, godka ama fillet-ka waa tallaabo ku dhowaad cabbirka kuubka, sidaas darteed xoogga halkaas waa qiyaas.
- **Geesaha gudaha ee qalalan iyo geesaha dusha go'an ma lahan xoog-sare runta ah.** Qiimaha halkaas wuu sii korayaa intii elements-ka yaraanaysa. Xoogga ka akhri meel ka fog sidaas oo kale, ama geeska ku wareeg moodeelka.
- **Natiijooyinka la akhrin karo.** Marka laga reebo von Mises stress, barbaadidda iyo safety factor, daraasad tetrahedral wuxuu tusayaa **xoogga ugu weyn iyo ugu yar ee principal** (tension iyo compression) iyo **equivalent strain**. Calaamadi **Show mesh** si aad elements-ka u aragto.
- **Daraasadaha static waa linear iyo elastic.** Dhalinta iyo taabashada isticmaal noocyada daraasadda aan-toosnayn ee kor ku xusan; go'id weyn iyo fatigue lama xalinayo. Kulaylka, xoogga kulaylka iyo linear buckling waa noocyo daraasad gaar ah: eeg [Kulaylka, xoogga kulaylka iyo buckling](topic:thermal-and-buckling).
- **Birta kasta ayaa isku mid ah dhinac walba.** Plastigyada la daabacay 3D waa kuwo ka daran jihada layers-kooda, inta badan ugu yaraan saddex meelood meel ama ka badan.
- Tani waa dhismo tijaabo ah: hubi qaybaha muhiimka ah habka kale.

## Cusboonaysii intaad tafatirto (Live)

Calaamadi **Update while I edit** block-ka Solve, daraasadda Simulation-ku wuxuu raacaa tafatirkaaga. Beddel cabbir, culeys, birta ama deegaanka, **jawaab degdeg ah** ayaa isla markiiba soo muuqata, oo lagu sameeyay elements afar jeer ka weyn kuwa daraasadda; marka aad ku joogsato wax yar (qiyaastii hal ilbiriqsi), daraasadda **jawaabta la sifeeyay** ayaa beddelaysa. Natiijooyinku waxay sheegaan midka aad eegayso ("Quick answer" ama "Refined answer") iyo element size. Jawaabta degdegga ah waa wanaagsan tilmaan iyo cabbir: cantilever bir ah wuxuu ku dhowaa 1 % go'iddiisa iyo ku dhowaad 4 % xoogga ee jawaabta la sifeeyay. Midka la sifeeyay ku kalsoonow tirooyinka aad isticmaali doonto. Daraasadaha static, natural-frequency, thermal iyo buckling waxay u shaqeeyaan sidan; Live waa dejinta muuqaalka oo qaybta kuma kaydsamo. Xal aad adigu riixdo wuxuu sii joogaa sidaas ilaa tafatir xiga.

## Ogow waxa marka hore jebiya (Break it)

Daraasadda static ama buckling, riix **What breaks first?** block-ka **Break it**. PartCraft wuxuu cabbiraa culeyska daraasadda (xoog, cadaadis iyo miisaan wadajir) ilaa qaybtu ay ka hoos dhacdo, wuxuuna liistaa, kan ugu xun marka hore, **load factor to first yield** (factor-ka culeyska hadda ee xoogga von Mises ee ugu sarreeya gaadho xoogga dhalinta, calaamad cas oo meesha ay ku dhacdo) iyo **load factor to buckling** isla taageerooyinka iyo culeysyada. Factor 4.3 waxa uu sheegaa in qaybtu qaadi karto 4.3 jeer culeyskeeda ka hor inta aysan dhalin; **factor ka yar 1 waxa uu sheegayaa inay horay u hoos dhacday sida loo culeysay**, taas oo ka muuqata liiska Dhibaatooyinka sida khalad (sida ugu yar ee natiijada loo sheego digniin ayaa lagu tusaa xitaa marka wax kasta sax yihiin). Factors-ka waxay ka yimaadaan daraasad toosan oo tetrahedra ah oo ku dhex jira element size-kaaga, sidaas darteed waa wanaagsan sida daraasadda ay tahay: xoogga taageero go'an ama geesaha qalalan ma lahan xoog-sare runta ah (eeg hoos), factor-ka dhalinta wuxuu noqon doonaa dhinaca feejignaanta halkaas. Kaaliyahaagu wuxuu ku shaqayn karaa isla hubinta isagoo adeegsanaya qalabka `break_run`.

## Xidhiidh

- [Kulaylka, xoogga kulaylka iyo buckling](topic:thermal-and-buckling)
- [Koro qaab culeysyada ka (Generative)](topic:generative-design)
- [Cabbir masaafooyinka, xagalka iyo miisaanka](topic:measure)
- [Waxa wali aan la dhisin](topic:not-built-yet)
