---
title: Dusha bilaa-qaab (NURBS)
summary: Qalooca iyo dusha qumman oo qayb ag ah — loft, sweep, shabagyada qalooca, patches afar-geesood, blends, trims — oo G0, G1 iyo G2 lagu qiyaaso dusha saxda ah, jidh adag oo leh union, subtract iyo intersect oo lagu dhejiyay qaybta, muuqaalka zebra iyo curvature, wejiyo lagu habeeyay scan oo khaladkoodu la qiyaaso, iyo faylal STEP ama IGES. Qaybta faylka ku jira.
keywords: nurbs, scan, reverse engineering, habee, mesh ilaa dusha, point cloud, stl, trim, trimmed, god, goyn, jidh adag, solids, boolean, union, subtract, intersect, difference, isku-xir, xidhan, bake, bilaa-qaab, free-form, dusha, surfaces, b-spline, bspline, qalooc, spline, loft, sweep, rail, shabagga, coons, patch, blend, match, continuity, g0, g1, g2, tangent, curvature, zebra, control points, knots, degree, step, iges, class a, hull, fairing
from: 64ed5196
---

Workspace-ka **Dusha** wuxuu sameeyaa qalooc iyo dusha siman oo noocan ah oo loo isticmaalo qolofka alaabta, jidhka gaadiidka iyo qolofka doonta: NURBS, isla xisaabta moodelka dusha kale ee isticmaala. Wax walba waxaa lagu cabbiraa dusha saxda ah, weligiis ma aha saddexagallada aad aragto. Cabbirka waa millimitir, sida qaybta PartCraft oo dhan.

Dooro **Dusha** sanduuqa **Workspace**. Toolbar-ka wuxuu leeyahay {{ui:Qalooc}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} iyo {{ui:Zebra}}; amar kasta waxa ku jira panel-ka midig. Amar kasta wuxuu sheegaa wixii uu weli u baahan yahay: riix qalooca ama dusha muuqaalka (geesta ama dhamaadka ku dhow marka ay weyddiiso) ama dooro liiska; qor dhibcaha, ama riix wejiga qaybta (marka ay ka baxdo, waxay ku dhacaan diyaarka dhulka), kadibna riix Enter.

Qalooca iyo dusha waxa lagu kaydiyaa faylka qaybta jidhka ag. Ma beddelaan astaamaha qaybta: panel-ka wuxuu leeyahay **Ka noqo** iyo **Samee mar kale** gaarka ah, hal tallaabo amar kasta.

## Qalooca

- **Qalooc dhibcaha marayo** wuxuu maraa dhibic kasta oo aad riixdo. **Qalooc dhibcaha xakameynta** wuxuu raacaa qafiska dhibcaha halkii.
- **Geli knot**, **Kor u qaad darajada** iyo **Hoos u dhig darajada** waxay beddelaan sida qalooca loo tilmaamo iyada oo aan la dhaqdhaqaajin (hoos u dhigiddu diidaa marka qalooca uu ka dhaqaajiyo dulqaadka ka badan). **Dib u dhis qalooca** wuxuu siinayaa tiro cusub oo dhibcaha xakameynta ah wuxuuna sheegayaa inta uu dhaqaaqay.
- **Match curve** wuxuu ka dhigaa dhamaadka hal qalooc inuu la kulmo kan kale G0 (taabasho), G1 (isla jihada) ama G2 (isla curvature-ka sidoo kale). **Blend curve** wuxuu ku daraa qalooc cusub laba dhamaad dhexdooda, G1 ama G2.

## Dusha

- **Loft** laba ama ka badan qalooc dhexdooda, **Ruled surface** laba dhexdooda, **Extrude curve**, **Revolve curve**.
- **Sweep along one rail** wuxuu qaabka u qaadaa jid si aan u leexan; **Sweep along two rails** wuxuu hayaa dhamaadyada qaabka labada rail-ba. Sweep-yadu waa la habeeyay: natiijadu waxay sheegaysaa inta uu ku dhowaaday sweep-ka runta ah.
- **Surface from a curve network** wuxuu maraa shabakad qalooc (mid kasta midka kale mar keliya ayuu gudbaa). **Patch from four edges** wuxuu buuxiyaa afar qalooc oo ku kulma geesahooda.
- **Match surface** wuxuu geesta dusha ka dhigaa inay la kulanto deriskeeda G0, G1 ama G2; **Blend surface** wuxuu ku daraa dusha labo geesood dhexdooda.
- **Kala-raris dusha**, **Ballaadhi dusha** (dusha wuxuu sii socdaa sidii uu u socday), **Dib u dhis dusha**.

## Hubinta tayada

Miiska **Geesaha la wadaago** wuxuu liistaa geesta kasta oo laba dusha la wadaagaan, iyo farqiga (mm), xagasha u dhexaysa (°) iyo kor-u-kaca curvature (1/mm), iyo haddii taas ay ka dhigayso G0, G1 ama G2. Geesta oo ka xun intii aad codsatay waxay ku muuqataa **Dhibaatooyinka** oo leh hagaajinta **Match**. Xariiqyada **Zebra** iyo midabada **curvature** waxay ka yimaadaan dusha saxda ah: xariiqyada geesta dhexdeeda si aan jabin u socda waxay micnaheedu yahay G1; xariiqyada sidoo kale ballacooda ku sii haya waxay micnaheedu yahay G2.

G0–G2 waa la cabbiraa, 33 dhibic geesta kasta. **G3 iyo tayada "class A" lama cabbiro** oo lama sheegi.

## Jar dusha

Kooxda **Jar** wuxuu jaraa dusha isagoo aan beddelin qaabkiisa: dusha wuxuu hayaa dhibcaha xakameynta oo dhan, qaybta gudaha xuduudka keliya ayaa la muujiyaa, la tiriyaa iyo la qoraa. **Jar rectangle** iyo **Jar goobo** waxay ku shaqeeyaan qayb (0 ilaa 1) dusha jihaynta kasta, sidaas darteed ma u baahna doorasho muuqaalka; **Jar qalooc** wuxuu qaataa qalooc xidhan oo dusha ku jirta (waxaa lagu soo rogaa dusha, waana la diidaa hadalka marka ay furan tahay ama ka fog dulqaadka ka badan). Calaamee **Jar god** si aad u tirtirto gudaha xuduudka; ka daa si aad gudaha keliya u hayso. Dusha wuxuu leeyahay hal xuduud la hayo iyo godad tiro kasta; xuduud kale gooya waa la diidaa. **Ka saar jarka** wuxuu mar kale muujiyaa dusha oo dhan. Ka noqo ee panel-ka wuxuu jarka dib u qaadaa sida tallaabo kasta oo kale.

STEP wuxuu qaadaa jarka xuduudaha wejiga, IGES-na wuxuu qaadaa dusha la jaray (entity 144); labadaba way akhriyaan.

## Jidhka adag iyo Boolean-yada

Kooxda **Jidhka adag** wuxuu dusha u beddelaa jidh xidhan oo wuu isku geliyaa. Jidh adag halkan waa urur dusha panel-ka gaarka ah oo wada xidha mugga; wejiyadiisu waxay sii joogaan dusha NURBS saxda ah oo jarkooda leh.

- **Box solid**, **Cylinder solid** iyo **Sphere solid** mid ayey ka sameeyaan cabbirrada la qoray (mm): sanduuq lix wejiyo siman leh, silinda oo geesta wareegga iyo laba dhamaad siman oo lagu jaray wareegga, kubbad oo hal dusha la wareegay.
- **Jidh adag dusha ka** wuxuu isu urursadaa dusha aad naftaadu samaysay. Dooro iyaga, ama midna ha dooran si aad u isticmaasho dusha muuqda oo aan weli jidh adag ku jirin. Waa la isku xiraa dulqaadka gudihiisa: haddii aanay xirmin, wax ma beddelmaan panel-kuna wuxuu sheegayaa inta geesood ee furan ay tahay iyo sida ay u dhowaan inay isku kulmaan.
- **Union**, **Subtract** (jidhka labaad waa laga jaraa kan koowaad) iyo **Intersect** (kaliya wixii labadooda wadaagaan) labo jidh qaadanayaan: riix wejiga mid kasta muuqaalka, ama riix **Pick** liiska **Jidhka adag**. Calaamee **Hayso labada jidh adag** si aad labadooda ag ku hayso natiijada.

Boolean wuxuu wejiga kasta ku hayaa dusha saxda ah oo jarkiisa uu ku jaraa xuduudo jar cusub oo ka dhex-dhaxaysa. Khadka natiijadu wuxuu siinayaa tirooyinka la cabbiray: intee ka dhaqaajiyay dhibcaha engine-ka jidh adag si ay dusha saxda ah ugu fadhiistaan (ma dhaafaan dulqaadka), intee ka dhow dhibcaha isgoysku labada dusha (badanaa kala malayn millimitir), mugga, iyo haddii wejiyada cusub mar kale isku xiraan marka dib loo xidho dusha saxda ah. Mugga waxaa lagu cabbiraa saddexagallo dulqaadka dhexdiisa (0.05 mm haddii aadan dooran mid kale), sidaas darteed mugga sfeerada ama silindarka wuxuu akhrisanayaa wax yar ka hooseeya kan saxda ah: dulqaad yar ayaa dhow. Boolean aan si nadiif ah loo samayn karin (jidhadku midna ma wadaagaan, xuduud isku gooya) waa la diidaa hadal ahaan oo waxba ma beddelo. Hal Boolean waa hal tallaabo oo ka mid ah **Ka noqo** panel-ka.

Liiska **Jidhka adag** dhexdiisa, **Ka saar kooxda** wuxuu wejiyada ka dhigaa dusha caadi ah; qashinka wuxuu tirtiraa jidh adag iyo wejiyadiisa.

## Fillets iyo qaro-gelin

**Fillet between faces** wuxuu wareejiyaa geesta ay laba wejiyo jidh hal ah isku kulmaan: dooro laba wejiyo (muuqaalka, ama **Pick** liiska), qor **radius** iyo, radius-ka oo geesta dheer ka beddelmaya, **radius dhamaadka** (0 wuxuu hayaa hal radius). Kubbad radius-kaas ah ayaa lagu wareejiyaa geesta isagoo taabanaya labada weji; fillet-ku waa qoslaha saxda ah ee ay kaga tagto dhibic kasta, oo lagu isku xiray dusha hal ah, labadana weji waa la jaraa meesha kubbaddu taabato. Geesta dibadda waxay lumisaa agab, geeska gudaha waxay helaysaa. Khadka natiijadu wuxuu siinayaa wixii la cabbiray: intee ka fog dusha fillet-ka kubbadda wareejineysa ee u dhexeysa dhibcaha laga dhisay (dhibcaha ayaa lagu daraa ilaa ay ku dhowaato rubuc dulqaadka), xagasha ugu weyn ee u dhexaysa fillet-ka iyo wejiga kasta khadadka taabashada, iyo tirooyinka isku mid ah sida Union. Radius aan ku habboonayn (kubbaddu ka bixi lahayd wejiga, ama wejigu ka qallooci lahaa radius-ka) waa la diidaa, wejigana magacaabaa, wax ma beddelmaan.

**Fillet several edges** geesaha badan hal tallaabo ku wareejiyaa: dooro labada weji ee geesta koowaad, kadibna labada weji ee kan xiga, iyo kuwa kale (weji wuxuu ku jiri karaa dhowr lamaane, tusaale ahaan weji sare ee sanduuqa afar ka mid ah); geesaha oo dhammaan waxay helaan radius-ka aad qorto. Wareejinta kasta waxaa lagu xisaabiyaa jidhka sidii uu ahaa, kadibna waa la jaraa mid ka dib mid, sidaas darteed amarku ma muhiim. Meesha laba geesood oo wareegsan ay ku kulmaan geeska geesihii kale ee aan wareegin, labada fillet waxay ku dhacaan midba midka kale khadka isgoysyada (crease). Meesha saddex geesood oo dibadda ah oo wareegsan oo saddex wejiyo siman oo isku xaglaya ay ku kulmaan hal radius, geeska waxa uu noqonayaa hal **sphere patch** taabanaya saddexda fillet (ka saar **Corners** si aad geeska crease-ka leh u hesho); geesta waa inay ahaataa ugu yaraan laba jeer radius-ka dheer marka labada dhamaadkeeda ay yihiin geeso noocan ah. Khadka natiijadu wuxuu sheegaa geesaha intee la wareejiyay iyo sida geeskuna u soo baxay. Geesaha gudaha ayaa sidoo kale la wareegi karaa, laakiin natiijada aan mar kale xirmin waxaa keliya lagu sheegaa (khadku wuu sheegaa), sidaas darteed hubi.

**Thicken into a solid** wuxuu dusha siiyaa dhumuc: dooro, qor **thickness**, oo calaamee **Other side** si ay u koraan dhinaca kale. Wejiga kala-rarid ayaa lagu habeeyay dusha oo lagu cabbiraa (khadka natiijadu wuxuu siinayaa farqiga ugu weyn ee dhumucda ka yimid); darbiyadu waxay raacaan geesta kasta iyo xuduud jar kasta. Haddii dusha dhinacaas uu ka wareego dhumucda, ama qayb kale oo ka mid ah ay ka dhow tahay dhumucda, waa la diidaa, dusha iyo meesha la magacaabayaa, waxna ma beddelmaan.

## Ku dubo jidh adag qaybta

**Bake** (toolbar-ka Dusha), ama **Bake into the part** liiska **Jidhka adag**, wuxuu jidhka adag ka dhigaa jidh qaybta ah, sida STL la furay u noqdo mid: dooro jidhka, haddii uu **lagu daro** qaybta, **laga jaro** ama **laga goyo**, iyo dulqaadka (intee ka fog saddexagallada dusha saxda ah). Waa hal tallaabo oo Ka noqo qaybta waxayna ka muuqataa liiska astaamaha sida import magaciisu yahay jidhka. Qaybtu waxay hayaa saddexagallada, sidaas darteed way furmaysaa oo dib u dhismaa iyada oo aan dusha la'aan; jidhka saxda ahi wuxuu ku sii jiraa Dusha, sidaas darteed mar kale ayaad ku dubi kartaa isbeddel ka dib.

## Faylasha

Dhoofi **STEP** (AP242) ama **IGES** qalooca iyo dusha sidooda sax ah (qalooca iyo dusha B-spline, wax la beddelin saddexagallo). Dusha kasta waa wejigiisa gaarka ah, jarkiisana leh; jidh adag waxaa loo qoraa hal shell xidhan, geesta kasta oo ay labada wejigeeda wadaagaan sida barnaamijyada CAD kale ay filayaan (khadka xaaladda wuxuu sheegayaa inta jidh adag ee sidaas u baxday). IGES-ka jidhka isku midka ahi waa hal manifold solid B-rep (entity 186 oo ku saabsan closed shell 514, faces 510, loops 508, hal edge list 504 iyo hal vertex list 502); jidh adag oo wejiyadiisu geesihii ku lammaanaan waa la qoraa wejiyo kala gaar ah, khadkuna wuu sheegaa. **Soo geli…** wuxuu akhrisaa jidhka sidaas oo kale jidh adag ahaan, STEP iyo IGES labadaba.

## Khadadka qolofka doonta

**Fair** (toolbar-ka Dusha) wuxuu cabbiraa qalooc kasta qaabkiisa saxda ah — inflections (meesha ay ka beddelanayso bisil hal jihood ka kale), curvature-ka ugu weyn, kor-u-kaca curvature-ka knots-kiisa iyo qallafsanaantiisa — wuxuuna dib u dhisaa kuwa leh inflection ama kor-u-kac dhibcaha xakameynta ugu yar oo ku dhex-jira dulqaadka aad siiso oo aan inflection ku darin. Dhig stations, waterlines iyo buttocks sida qalooc, u sifee, kadibna **Loft** qolofka stations-ka, oo hubi **Zebra**. Qaloocyada aan sifeysneynin waxay sidoo kale ku muuqdaan **Dhibaatooyinka** hagaajinta **Fair this curve**. Khadka loo baahan yahay inuu beddelo jihada (qayb S-sheeg ah) wuxuu hayaa inflection keliya. Displacement-ka, dhexda iyo gacmaha dib u celinta qolofka waxay ka yimaadaan qaybta jidhka adag: eeg qalabka hydrostatics.

## Dusha scan-ka ka soo qaad (reverse engineering)

Fur qaybta ay ku jirto mesh-ka scan-ka (STL la furay ama jidh la dubay), dooro **Dusha** sanduuqa **Workspace**, kooxda **Scan** dooro **Fit surfaces to the scan**; mesh-ka qaybta ee la dhisay waa scan-ka. Qalabku wuxuu raadiyaa **diyaarro**, **silindaro**, **kubbado** iyo **koone** (dusha saxda ah ee qaybta la shiiday ka samaysan; safaf kasta wuxuu muujinayaa radius-ka ama xagasha half-angle ee uu helay), wuxuu helaa **fillets** (geesaha iyo geeska wareegsan: silinda ama kubbad yar oo taabanaysa laba ama ka badan wejiyo kale, lagu muujiyo radius-kiisa iyo wejiyada uu isku xirayo), **rim fillets** (torus: geesta wareegsan meesha weji siman uu kulmo silinda ama koone, lagu muujiyo radius-kiisa iyo radius-ka goobtiisa), iyo **variable fillets** (geesta wareegsan oo radius-kiisu geesta ka beddelmo, lagu muujiyo radius-ka dhamaad kasta), wuxuu ku habeeyaa **hal free-form patch** qayb siman, si tartiib ah u wareegsan, wuxuuna jaraa weji kasta ilaa qaabka qaybta scan-ka uu ka soo jeeday, sidaas darteed godadka iyo geeska way joogaan. Doorashooyin: **dulqaadka** (intee ka fog mm-ka dhibicda scan-ka ay ka noqon karto diyaar ama silinda oo weli uu u taalla, iyo bartilmaameedka free-form patch-ka), **qaybta ugu yar** (qayb ka mid ah bedka dusha) iyo **wejiyada ugu badan**. Scan-ka iyo doorashooyinka isku mid ahi weligood wejiyo isku mid ah ayay siiyaan.

Natiijadu waa miis, hal safaf wejig kasta: nooceeda, inta triangle ka timid, iyo khaladka **laga cabbiray scan-ka wejiga** (rms, kan ugu weyn, iyo qaybta dhibcaha dulqaadka dhexdiisa). Dhibcaha la cabbiray waa geesaha scan-ka iyo dhexda triangle kasta. Khaladka lama cabbirto habka kale (wejiga ilaa scan-ka), sidaas darteed wejig ka baxa scan-ka muuqan maayo. Qoraalka miiska hoostiisa wuxuu sidoo kale sheegaa inta bedka oo yar ee aan ku habboonayn. Muuqaalka dhexdiisa, dhibcaha scan-ka waxaa midabeeya **deviation map**-kooda: buluug wejiga, cagaar bartamaha dulqaadka, casaan dulqaadka ama ka badan (ka daa **Show the deviation map** si uu u qariyo). Qaybaha isla dhex-soo-laabanaya (tuubo xidhan oo lagu habeeyay free-form patches, tusaale ahaan) waxay ku qoran yihiin inaan la habeyn, weligood lama qasbo hal dusha.

**Stitch the surfaces to a solid** wuxuu isku xiraa dusha muuqda oo aan jidh adag ku jirin hal jidh xidhan. Wejiyada scan-ka waxay isku kulmaan kaliya ilaa khaladka scan-ka laftiisa, sidaas darteed wuxuu isku dayaa masaafada ugu yar ee xidhaysa (weligeed kan ka badan **stitch distance** aad dejiso) wuxuuna diidaa hadal ahaan marka wejiyada aanay xirmin. Weligeed ma buuxiyo god. Sanduuq geesaha wareegsan wuu isku xirmaa marka fillets-keeda loo helay wejiyo gaar ah; masaafada xidhaysa ee xirtay ayaa natiijada ku jirta. Jidhka adag kadibna wuxuu la shaqeeyaa Union, Subtract, Intersect iyo **Bake into the part**.

Wixii aan samaynayn: **rim fillet** (torus) waxaa loo raadiyaa oo keliya dhinaca axis-ka silinda ama koone horey loo helay, **variable fillet** waxaa loo raadiyaa oo keliya geesta toosan oo ah (qaybahiisu waxay ka jarmaan hal jihood oo toosan); meelaha kale waxay u soo baxaan free-form patches markay dhammaad ahaadaan, haddii kale waa la reebaa; kubbadaha, koone iyo fillets waxaa lagu helaa tirayn random ah, sidaas darteed mid aad u yar (dhowr triangle) ayaa lumi karta; deviation map-ku wuxuu muujinayaa masaafada scan-ka ilaa wejiyada, ma aha dhinaca kale; scan-yo aad u weyn (ka badan 300,000 triangle) halkan waa la diidaa. Wejiyada silinda wareeg oo dhan waxaa laga jaraa godad ku wareegsan, seam-ka waxaa la dhigaa meesha god aan jirin. Hubi wejig kasta scan-kaaga ka hor inta aadan isku halleyn.

## Weli lama dhisin

Geesaha wareegsan ee isku kulma geesaha wejiyada wareegsan ama radius kala duwan (vertex blend), fillet u dhexeeya wejiyo aan isku kulmin, fillet gudaha oo dhamaada wejiga xagasha ama wareegsan, Boolean-yada iyo fillets-ka lagu xisaabiyo dusha iyada oo aan triangle lahayn (halkan engine-ka jidh adag wuxuu ka shaqeeyaa triangle-yada dulqaadka dhexdiisa, dhibcaha oo dhammaan ayaa markaas dib loogu celiyaa dusha saxda ah), jidh la dubay oo raaca dusha marka ay isbeddelaan, jarka dusha ee dusha kale ee Boolean-ka ka baxsan, buuxinta godad ka badan afar geesood, qalooca ku-saadaalinta dusha.
