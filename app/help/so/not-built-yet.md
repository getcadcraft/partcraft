---
title: Wixii weli aan la dhisin
summary: Wixii dhismaha PartCraft-kan aan weli sameynin, laga bilaabo sweep-yada leexan ilaa muuqaalka inch-ka, cabbirrada sawirka iyo sub-assemblies, iyo wixii la samayn karo maanta halkii.
keywords: maqan, weli ma jiro, xaddidaadyo, jihada soo socota, kernel sax ah, fillet, chamfer, shell, sweep, loft, soo gelinta STEP, simulation, manufacture, twist sweep, loft end tangency, face fillet, equations, inches, cabbirrada sawirka, sub-assemblies, cloud, tablet, phone
from: 9b868162
---

PartCraft waa dhismo hore. Bogaggan wuxuu liistaa wixii aanu weli samayn, si aadan u raadin, iyo wixii la samayn karo maanta halkii. Midkoodna taariikh ma leh.

## Waxa u baahan kernel sax ah

Nooca tan qayb walba wuxuu ku dhisaa kernel-ka mesh-ka (eeg [Kernel-ka mesh-ka](topic:solid-kernels)). Wixii hoose ah oo dhan kernel joometri oo sax ah ayay u baahan yihiin, taas oo nooca tan weli haysan. Qaybaha lagu kaydiyay astaamahan weli way furmaan: astaamaha waxay ku sii jiraan taariikhda, lagana calaamadeeyaa inaan la dhisin, waxayna ku sii jiraan marka aad kaydiso.

| Weli lama dhisin | Halkii, maanta |
|---|---|
| {{ui:Fillet}} iyo {{ui:Chamfer}} geesaha goobaha; fillets oo radius-kooda uu ka beddelmo geesta dheer; wareegyo si siman isugu daraan meelaha ay isku kulmaan (kernel-ka mesh-ka wuu xagal ku jaraa) | Fillet iyo Chamfer waxay ku shaqeeyaan geesaha toosan ee wejiyada siman; geesaha kale ku wareeg sawir-gacmeedka ka hor inta aadan extrude gareynin ({{ui:Fillet}} sawir-gacmeed ku jira, {{key:F}}) |
| {{ui:Shell}} oo furaya wejiyada qalloocan; darbiyo dhumuc kala duwan | Furo wejiyada siman; agab ku dar extrude-yada meelaha darbiga u baahan dhumuc weyn |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} wejiyada qalloocan; extrude ilaa wejiga, wejiga xiga ama qodobka; extrude-yada yaraanaya | Extrude ama revolve, tallaabo tallaabo meelaha loo baahdo; extrude ilaa qoto dheer oo aad cabbirto |
| {{ui:Bilaan}}, {{ui:Flange-ka salka}}, {{ui:Flange geesta}} iyo naqshadaha fidsan | Extrude saxanka ama profile-ka bilaanka |
| Dusha: dhamaystirka {{ui:Foom}} ee qaybta gudaheeda, {{ui:Patch}}, {{ui:Loft dusha}}, {{ui:Dusha Gordon}}, {{ui:Stitch}}, {{ui:Qaro}}, {{ui:Kala-raris dusha}}, {{ui:Ballaadhi dusha}}, {{ui:Jar dusha}} | Lama heli karo |
| Jidhad badan: {{ui:Isku dar}}, {{ui:Guuri jidhka}}, {{ui:Miisaan jidhka}}, {{ui:Qaab jid}}, astaamaha jidh cusub sameeya | Hal jidh adag; qaababka iyo astaamaha nuqul muraayad ah |
| Sawir-gacmeedyo, diyaaro, jiir iyo dhibcood wejiyada ay kaliya kernel sax ah heli karto (wejiga fillet-ka sameeyay, darbiga godka, wejiga jidh adag oo la soo geliyay) | Sawir-gacmeed ku samee diyaaraha saldhigga, diyaaraha tixraacka iyo wejiyada siman ee extrude-yada iyo revolve-yada |
| Natiijada naqshadda abuurka ah oo loo furay qayb ama lagu daray (waxay noqotaa jidh adag oo la soo geliyay) | Natiijada soo deji STL ama STEP ahaan |
| Tafatirka wejiyada qalloocan ee faylka STEP ee la furay sida dusha saxda ah; STEP sax ah oo ka yimid wejiyada spline, sweep iyo revolve ee faylka STEP, dhinacyada spline, xuduudaha la moodelay, jidhad STL / OBJ / 3MF iyo isku-dhisyo; STEP barnaamijyada qaybta kale ee moodelka | {{ui:Fur}} wuxuu akhriyaa STEP sida saddexagalo wuxuuna hayaa wejiyada siman, silinda, koone, kubbad iyo torus ee faylka si loo dhoofiyo ([Fur faylka STEP](topic:import-step)); {{ui:Dhoofi}} › {{ui:STEP AP242 (jidh adag oo saxda ah)}} wuxuu qoraa wejiga kasta si sax ah oo wuxuu hayaa kuwaas sida facets ([Dhoofi](topic:export-files#for-other-cad-programs-step)); macro-ka qaybta kale ee moodelka weli wuu qorayaa |
| Qaansooyin sax ah muuqaalada sawirka | Muuqaalada iyo muuqaalada goynta waxay ka sawirmaan facets-ka |
| Mugga, bedka iyo masaafooyinka sax ah | {{ui:Cabbir}} wuxuu siinayaa lambarrada jidhka facet-ka, qaybaha wareegga ah ayaa wax yar ka hooseeya; dejinta **Curves** ee ka sii fiican waxay u soo dhowaynaysaa |

Safafka ku jira miisaska hoose qaar mid ka mid ah astaamahan ayay u soo jeedinayaan siyaabo kale. Soo jeedinadaas waxay shaqeeyaan marka kernel sax ah dib u soo noqdo.

## Astaamaha

| Weli lama dhisin | Halkii, maanta |
|---|---|
| Fillets wejiyada, fillets wareeg oo buuxa, fillets oo radius-kooda la dejiyay meelaha geesta dhexdeeda | {{ui:Fillet}} joogto ah ama kala duwan oo toosan; astaamo fillet badan |
| Shell-ada darbiyo dhumuc kala duwan leh | Hal dhumuc {{ui:Shell}}; agab ku dar extrude-yada meelaha darbiga u baahan dhumuc weyn |
| {{ui:Draft}} wejiyada bilaa qaab (spline) | {{ui:Draft}} wuxuu ku shaqeeyaa wejiyada siman, silinda iyo koone |
| Sweep-yada leexanaya, sweep-yada darbiga khafiifka ah iyo dusha; tangency-ga dhamaadka astaamaha Loft; loft oo hal jid-hage leh; jidadka spline | {{ui:Sweep}} oo leh jihayn go'an ama scale dhamaad; loft oo leh laba ama ka badan jid-hage: eeg [Sweep, loft iyo draft](topic:sweep-loft-draft) |
| Bilaanno qaansooyin ama spline ka yimid; bilaanno sawirka u dhex-dhex ah (muuqaal sare ka); draft bilaanno; bilaanno badan sawir-gacmeed hal | {{ui:Bilaan}} hal silsilad khadadka ka yimid diyaarka bilaanka: eeg [Bilaannada iyo gussets](topic:rib) |
| "Ilaa" dusha qalooc, "ilaa xiga" oo joogsanaya wejiga qalooc | Ilaa wejiga siman ama diyaarka tixraaca |
| Godad counterdrill ah, xirmooyinka inch iyo tuubada, xirmooyinka taper-ka, dhamaadka xirmada iyo bilowga xirmada chamfer-ka | Counterbore oo qoto dheer yar; xirmooyinka ISO metric iyo trapezoidal, cosmetic ama moodel: eeg [Xirmooyinka dhaqdhaqaaqa iyo godadka, sawir ama moodel](topic:threads) |
| Extrude astaamaha khafiifka ah | Sawir labada darbi ee profile-ka |
| Nuqullada qaababka oo la dhex-dhex tago mid mid, qaababka buuxinta | Astaamo kala duwan isticmaal; qaababka jid ku dhex-marka: {{ui:Qaab jid}} |
| Nuqulka qaababka, muraayadaha, fillets, chamfers, shells iyo jidhadka la soo geliyay | Nuqul sawirka ama astaamaha ay ku dhisan yihiin, ama qaab u samee |
| Tangency sax ah (G1) meelaha gaarka ah ee foomka; isku dhafka patches-ka foomka wejiyo waaweyn | Kor u qaad Level-ka foomka: patches-ka qiyaasan way yaraanayaan; eeg [Qaabab bilaa-qaab oo leh Foom](topic:form-surfaces) |
| Foom ka samaysan dhowr qayb xidhan oo kala go' astaamo keliya; xidhiidhka u dhexeeya foomyada | Hal qayb xidhan astaamo foom kasta; isku xidh Join |
| Dooritaanka jidhadka dusha muuqaalka ku jira (marka laga reebo dhibcaha trim iyo patch); fillets dusha; untrim; patches G2; dusha Gordon oo tangent ku ah jiranta qalooc (tangent diyaaraha iyo wejiyada siman waa la dhisay) | Magacyadooda ku dooro panel-ka astaamaha; marka hore thicken, ka dibna fillet jidh adag |
| Liis jidhad taariikhda ku jira; jidhadka qarsan ka reebidda dhoofinta | Magaca beddel oo qari jidhadka liiska jidhka ee panel-ka qaybta; tirtir ama ka xidh astaamaha samaysay jidh si aad uga reebto |
| Miisaan aan isku mid ahayn oo ilaaliya silinda iyo koone analytic; miisaan aan isku mid ahayn dusha kala-raris | {{ui:Miisaan jidhka}} wuxuu wejiyada qalloocan ka dhigaa B-splines u dhow (ilaa 0.0000004 mm); miisaan isku mid ah wuu sax yahay |
| Isku dhafka jidhadka dusha; Minkowski sums | {{ui:Stitch}} ama {{ui:Thicken}} marka hore, ka dibna {{ui:Isku dar}} |
| Falanqaynta dulqaadka: stack-ups oo geesaha leexinaya (2D iyo 3D vector loops), xasaasiyadda laga xisaabiyay joometriga, Monte Carlo oo qaybinno kale leh, dulqaadka cabbirrada sawir-gacmeedka, dulqaadka bonus-ka agabka xaaladdiisa | {{ui:Isu-dhiska tolerance-ka}} ku jirta isku-dhis: hal jihayn, xaaladda ugu xun iyo RSS, dulqaad la qoro, dulqaadka title block-ka guud ama GD&T frames: eeg [Stack-ups-ka dulqaadka](topic:tolerance-stackup) |
| Ku rarista: dalabka jarista iyo hordhacyada jarista, geesaha la wadaago mar keliya la jarayo, qaybaha isku hay ah; hadhaagyada roolka, kaydka mashaariicda la wadaago | {{ui:Ku rari qaybaha xaashiyada…}} oo leh masaafo, bannaan, rogis iyo jihada: eeg [Ku rari qaybaha xaashiyada](topic:nest-flat-parts); hadhaagyada iyo saxanka hadhaaga ah waa la kaydiyaa oo marka hore la isticmaalaa: eeg [Kaydi oo dib u isticmaal hadhaagyada](topic:nest-offcuts); qorsho jarista softiweerka jarista |
| Birta xaashi: hems, jogs, flange-yada miter iyo kontuur; flange-yada geesaha qalloocan ama wejiyada flange-ka salka ee foorarsan; foorarsiyada sawir-gacmeedka; xidhitaanka geeska; qalabka qaabaynta; jidh adag oo loo beddelo birta xaashi; fidsanka flange-ka salka foorarsan oo jarxo ku jira; miiskada foorarsiga | {{ui:Flange-ka salka}} (saxan ama profile foorarsan), {{ui:Flange geesta}} geesaha toosan ee saxanka oo leh bend reliefs, iyo naqshadda fidsan oo leh K-factor: eeg [Birta xaashi](topic:sheet-metal) |
| Falanqaynta draft-ka isku-dhisyada; helitaanka khadka kala-go'aanka; falanqaynta dhumucda darbiga | {{ui:Falanqaynta qabyada}} qaybta Design: eeg [Hubi draft-ka foorarsashada iyo tuurista](topic:draft-analysis); qayb walba oo isku-dhis ah fur si aad u hubiso |

## Sawir-gacmeedyada

| Weli lama dhisin | Halkii, maanta |
|---|---|
| Ellipses, qaansooyin tangent ah, conics, spline oo heer go'an ama miisaan leh (NURBS) | Splines (cubic), qaansooyin iyo goobooyin oo leh xiriirka Tangent |
| Dhibcaha spline ku jira (xiriir), xiriirka curvature (G2) | Dhibcaha spline laftiisa ku dhig meesha ay tahay inuu maro |
| Nuqullada kala-raris ee splines oo raaca isbeddelada dambe; kala-raris silsilado oo geesaha spline-ka cidhiidhsan | Mar kale kala-raris ka dib isbeddelka; geesta marka hore wareeg |
| Nuqullada qaababka oo la xidhiidha asalka; qaababka qalooca dheer | Mar kale qaab samee ka dib isbeddelka |
| Mugdiga geesaha bilaa-qaab ama wareegga leexan, joometri mugdi ah oo raaca qaybta | Mugdi geesaha wareegga toosan iyo isbarbar dhigan, ka dibna cabbir |
| Cabbirrada tixraaca (driven) | Ka akhri cabbirrada panel-ka ama macluumaadka qaybta |
| Xiriirka collinear | Parallel oo masaafo 0 ah |
| Ku dhejinta barnaamij kale (clipboard-ka nidaamka) | Dhoofi DXF, STEP, STL ama 3MF |
| Qaansooyin, isku-xirnaan ama juqraafi polar ah oo la qoro | Khadadka iyo wareegyada qor; qaansooyinka ku samee qalabka Arc |
| Joometri la doorto la'aanta mouse-ka | Waxay u baahan tahay riix ama tabo |

## Halbeegyada iyo unitiyada

| Weli lama dhisin | Halkii, maanta |
|---|---|
| Qaabeyn beddela agabka; miiska naqshadda CSV oo astaamaha damiya | Qaabeynta wuxuu dejiyaa halbeegyada, astaamahana wuu furaa iyo xirayaa: eeg [Qaabeynta iyo miisaska naqshadda](topic:design-tables); `partcraft variants` wuxuu dhisaa qaabeyn la kaydiyay magac ahaan, astaamaha damiyey oo ku jira: eeg [Ka samee xirmo kala duwan qaabeynadaada](topic:variant-pack) |
| Isla'egta lambarrada panel-ka astaamaha ugu dambeeyay (diyaaraha, sweep, draft iyo wax la mid ah) | Ku qor script ama `partcraft set` ([Script-yada iyo command line](topic:scripts-and-cli)) |
| Qayb lagu muujiyo inch | Cabbirku wuxuu muujiyaa millimitir; ku qor `2in` sanduuqa lambarka ama isku-darka wuxuu noqonayaa 50.8 |

## Faylasha

| Weli lama dhisin | Halkii, maanta |
|---|---|
| Tafatirka astaamaha jidh adag oo STEP la soo geliyay (taariikhla'aan ayuu yimaadaa) | Agab ku dar ama ka jar astaamahaaga |
| Akhrinta midabka, magacyada, qaab-dhismeedka isku-dhiska iyo PMI ee STEP | Lama heli karo |
| Dhoofinta glTF, OBJ, IGES, Parasolid; DWG ee qayb 3D (kaliya xirmada kala duwanaanta ayaa qora DWG: xaashiga sawirka) | STL ama 3MF meshes-ka; STEP jidhadka adag; DXF 2D |
| Furidda IGES, DXF ama faylasha barnaamijyada kale (`.3dm` waxay furmaan jidh keli ah: [Fur moodel .3dm ah sida jidh adag](topic:open-3dm-files)) | Weydii STEP, ama STL, OBJ ama 3MF mesh xidhan: [Fur STL, OBJ ama 3MF](topic:open-meshes) |
| Qaab-dhismeedka isku-dhisyada (geed magacyada qaybaha leh) STEP la dhoofiyay | STEP-ka isku-dhisyada waa hal compound oo jidhadka la meeleeyay |
| Kaydinta galka aad doorato iyada oo aan browser-ka download la'aan | Hub "ask where to save" oo ku jira dejinta download-ka browser-ka |

## Sawirrada

| Weli lama dhisin | Halkii, maanta |
|---|---|
| Cabbirro ka baxsan saddexda cabbir guud (cabbirka godadka, meelaha, dulqaadka cabbirrada) | Calaamee PDF-ka, ama dhoofi DXF oo cabbir ku samee barnaamij 2D CAD ah |
| Wax ka badan hal goyn ama hal faahfaahin; muuqaalo isku-toosan, kala-jabsan iyo kaalmo | Hal goyn iyo hal faahfaahin mid kasta sawir |
| Qoraal bilaash ah, qoraallo iyo miisas xaashiga (kuwa cinwaanka iyo xannaanada dib-u-eegista laga reebo) | Qoraalka dhamaystirka, ama qoraal lagu daro PDF-ka |
| Saadaasha xagalka koowaad, muuqaalada dhaqdhaqaaqa, xaashiyada dhererka | Xagalka saddexaad, habaynta toos ah, xaashiyo dhererka A4–A0 iyo ANSI A–E, xaashiyo ballaaran |
| Muuqaalka goynta ee toosan: dhowr diyaarood ama sanduuq goyn mar keliya, geeska ku wareegsan jarka, kaydinta goynta faylka | Hal diyaar mar keliya {{ui:Muuqaalada}} › {{ui:Muuqaalka goynta}}; eeg [Eeg gudaha muuqaalka goynta](topic:section-view) |
| Sawirrada isku-dhisyada oo muuqaalo, cabbirro ama balloons ah oo aad dhaqaajin kartid | Hal muuqaal isometric (ama exploded) oo leh balloons automatic ah iyo liiska qaybaha |
| Nuqul iyo ku dhejin calaamadaha GD&T iyo dhamaystirka | Mid kasta ku dhig Datum, Frame ama Finish |
| Buugaagta: faylasha STEP ee {{ui:Fayl kale ka…}} ee Illustrate, moodel si toos ah loo siiyay ModelCraft ama BimCraft, sawirro tayada path tracer-ka, 3D wada-falaysa gudaha PDF | Fur STEP-ka Design oo bilow buugga {{ui:Qaybta furan}}; moodelka ku kaydi glTF (.glb); sawirro PNG ah oo muuqaalka 3D; faylka 3D wada-falaysa: eeg [Bilow buug Illustrate](topic:illustrate) |

## Isku-dhisyada

| Weli lama dhisin | Halkii, maanta |
|---|---|
| Isku-xirka gear, rack, cam iyo screw; ball joint oo koone ku xaddidan; isku-xirka wejiyada qalloocan ama dhibcaha u dhexeeya | Isku-xir adag, wareeg, jiifka, silinda, diyaar, kubbad iyo bin-ka-godka oo wejiyada siman ku yaal, qiime kasta oo xaddidaadyadiisa: eeg [Dhis isku-dhis](topic:build-assembly) |
| Tallaabooyinka exploded ee rogaya qaybaha, iyo jiidista qaybaha ay isku-xiriirku dhigo | Tallaabooyinka exploded toosan; ka saar isku-xirka si aad qayb gacanta ugu dhaqaajiso |
| Isku-dhisyo hoose | Hal heer oo qayb keliya |
| Gears, cams, xiriirka | Lama heli karo |

## Manufacture

| Weli lama dhisin | Halkii, maanta |
|---|---|
| Qalajinta 3D ee wejiyada qalloocan, nadiifinta 3D adaptive, machining-ka hadhaaga; waterline, pencil, radial iyo spiral finishing; marinnada adaptive ee qaansooyin loo qoro | 2.5-axis face, pocket, 2D adaptive, contour, drill iyo chamfer: eeg [Samee toolpaths iyo G-code](topic:manufacture); Parallel iyo Scallop finishing ee moodelka oo dhan: eeg [Dhamaystirka 3D](topic:finish-3d) |
| Toolpaths 4- iyo 5-axis, turning, probing | Dejiso hal dhinac mar keliya oo qalabka axis-kiisu ku jiro Setup tab-ka |
| Hubinta isku-dhac holder iyo shank | Ka eeg digniinta dhererka flute-ka oo hubi simulator-ka control-kaaga |
| Probing, wareegyada nolosha qalabka iyo subprogram-ka, koodhka 4aad iyo 5aad ee axis-ka iyo lathe ee post; soo rarista faylasha post-ka barnaamijyada kale | Qor ama beddel post PartCraft qaabkiisa: eeg [Post processors-ka aad wax ka beddeli karto](topic:post-processors) |
| Inch G-code (G20) | Millimitir (G21) oo keliya |

## Simulation iyo naqshadda abuurka ah

| Weli lama dhisin | Halkii, maanta |
|---|---|
| Daraasaadka nonlinear: yielding, deflection weyn, xiriirka u dhexeeya qaybaha, fatigue | Linear static iyo natural frequencies: eeg [Hubi stress iyo deflection](topic:simulation); ilaali safety factor-ka oo ka sarreeya 1 si fiican |
| Buckling nonlinear (imperfections, post-buckling, snap-through) | Buckling load factors linear oo leh margin ballaaran: eeg [Kulul, stress kulul iyo buckling](topic:thermal-and-buckling) |
| Shucaaca u dhexeeya wejiyada (view factors), iska caabinta xiriirka, agabka heerkulka ku xidhan, inertia ee stress kulul (mowjadaha thermal shock) | Shucaaca ilaa deegaanka, thermal stress joogto ama quasi-static waqtiga, hanti joogto ah: eeg [Kulul, stress kulul iyo buckling](topic:thermal-and-buckling) |
| Refinement toos ah kulul-kulul ee transient iyo daraasaadka culeys kulul; mesh-ka oo ka dhigaya mid ballaaran meelaha khaladku yar yahay; bartilmaameed tirada maxalliga ah (stress-ka ugu sarreeya meel keliya) | **Refine automatically** daraasaadka static, buckling, natural-frequency iyo kulul-ka joogto ah, khaladka qaybta oo dhan: eeg [Hubi stress iyo deflection](topic:simulation); haddii kale hoos u dhig element size-ka |
| Culeysyada bearing iyo bolt, xoogagga fog, moments, springs, displacements la qoro | Xoogag iyo cadaadis wejiyada, gravity; wejiyo go'an iyo kuwa aan jiifka lahayn |
| Simulation-ka isku-dhisyada; agabka kala duwan jihada (lakabyada la daabacay, composites) | Hal qayb, hal agab isotropic |
| Dhowr threads solver ah daraasaadka tetrahedral, kulul-gudbinta iyo naqshadda abuurka; threads-ka bogga kasta oo aan cross-origin isolated ahayn | Daraasaadka voxel, buckling, stress waqti ku saabsan iyo socod laminar threads-ka ayay isticmaalaan halkii bogga u ogolaado: eeg [Dejinta PartCraft](topic:settings) |
| Socod turbulent oo sax naqshadeed (moodelka Spalart–Allmaras wuxuu ku jiraa tijaabo ahaan: xoogga biibka 30 ilaa 34 % ayuu sare u dhigaa, dib-u-xidhidhka backward-step 21 ilaa 39 % ayuu gaaban yahay; qorshaha: unugyo ka fiican darbiyada agtooda), kulul socodka, socod aan joogto ahayn (waqtiga sax ah), dusha xor ah, dareeno aan Newtonian ahayn, qaybaha wareegaya | Socod laminar, joogto ah, isothermal oo dareere Newtonian ah, ama moodelka turbulent ee tijaabada ah ee dhammaystirka qaabka: eeg [Sawir socodka dareeraha](topic:flow-simulation); panel-ku wuu digayaa marka Reynolds number uu ka gudbo laminar |
| Xuduudaha stress iyo xeerarka soo saarka (overhangs, jihooyinka milling) naqshadda abuurka; agabyo badan hal qaab | Qaabka ugu adag mugga; hubi natiijada Simulation: eeg [Samee qaab culeysyada](topic:generative-design) |
| Natiijada sidii jidh adag oo la wax ka beddeli karo (siman, parametric) | STL, STEP oo faceted ah, ama qayb natiijada jidh adag oo facet ah loo soo geliyay |
| Naqshadda mishiinka korontada: rotor ku wareegaya stator, torque ka dhanka xagasha, bir-ka buuxsamaya, magnetyada xoogooda lumiya marka ay dhaafaan knee-ga, eddy currents iyo lumista birta iyo naxaasta; goobaha magnetic-ka 3-D ama mesh qalloocan | Magnetostatic 2-D oo toosan oo grid ah maktabada falanqaynta: koyl, bir, magnetyada joogtada ah ee recoil line-kooda, gaabisyada, inductance iyo pull: eeg [Goobaha magnetic-ka 2-D](topic:magnetic-fields-2d) |

## Script-yada

| Weli lama dhisin | Halkii, maanta |
|---|---|
| Caawinta kor-u-sii-mouse-ka, breakpoints iyo tallaabo-tallaabo tafatiraha script-ka | Raadinta, fold-ka iyo dhamaystirka way jiraan (eeg [Qor oo socodsii scripts](topic:craftscript)); wixii kale, tafatiraha kaaga: {{ui:Kaydi}} iyo {{ui:Fur}} ee kooxda Script ayaa script-yada soo geliya iyo dhoofinaya; shaqooyinka dhismaha ku jira waxaa lagu liistaa [Luqadda CraftScript](topic:craftscript-language) |
| Breakpoints iyo tallaabo tallaabo script-ka | `disp` iyo `fprintf` jidka; {{key:Mod+Enter}} wuxuu socodsiiyaa dhowr xariiq oo la doortay mar |
| Goobaha iyo plots-ka script-ku muujiyo ee Design workspace-ka lagu sawiro; script-yada beddela halbeegyada qaybta | Waxay ka muuqdaan Script workspace-ka; script-yadu halbeegyada waxay ka akhriyaan `param` (eeg [Qor oo socodsii scripts](topic:craftscript)), beddelkooda tab-ka {{ui:Halbeegyada}} |
| Sawirro iyo miisas ku teexan plots-ka; wax ka beddelka plot-ka (zoom, xadka tiirka) ka hor inta aan kaydin | Side by side wuxuu muujiyaa plots-ka; plot-ka kaydi sida PNG, SVG ama CSV oo meel kale ku dhamaystir |
| numpy iyo xirmooyinka Python kale; Python offline; fold Python tafatiraha; Pascal Script | Python-ka maktabadda caadiga ah, CraftScript iyo Lua: eeg [Scripts-ka Python](topic:craftscript-python) |
| Shaqooyinka Lua oo loo gudbiyo shaqooyinka dhismaha ku jira; shaqada maktabadda ee Lua laga yeedho magac la dhisay script-ka markuu socdo | Magaca shaqada maktabadda ku qor script-ka (`cs.static_tet(…)`), ama ka yeedh CraftScript script-ka |

## Barnaamijka

| Weli lama dhisin | Halkii, maanta |
|---|---|
| Kaydinta cloud-ka, la wadaagista iyo taariikhda noocyada | Weli lama heli karo. Faylasha kombuutarkaaga ku kaydi oo noocyada magac ku ilaali |
| PartCraft app la rakibay iPad iyo iPhone-ka | Isticmaal PartCraft browser-ka qalabka; Android iyo desktop-ka wuxuu sidoo kale ku shaqeeyaa CadCraft Studio (getcadcraft.com/download) |
| Menu-yada dhaqdhaqaaqa (right-click) | Toolbar iyo right panel |
| Si buuxda offline ah oo bilow cusub ka bilaabato | Kaliya marka app-ka loo kaydiyay offline isticmaal: eeg [Shaqaynta khadka ka baxsan](common:offline) |

Waxa aad ugu baahan tahay ugu badan ka soo warbixi bogga taageerada ee websaydhka: wuxuu qaabeynayaa wixii soo socda.

## Engineer (abuurayaasha iyo goobaha)

| Weli lama dhisin | Halkii, maanta |
|---|---|
| Madax, dhibcaha iyo fittings ee heat exchanger-ka la sameeyay; khadadka heerkulka ee adkaanta agabka; lumista tee ee manifold-ka | Abuurayaasha waxay dhisaan qalbiga iyo tubooyinka; ku dar fittings Design; isticmaal qiyamka heerkulka qolka ee agabka oo leh safety factor |
| Abuurayaasha ka kordhi galka add-on-ka hal riix | {{ui:Fur}} workspace-ka Engineer wuxuu ku daraa abuuraha fayl ka |
| Fayl goob ah oo ka sifiican cabbirka voxel-ka abuuraha; akhrinta faylalka `.vdb` | Goob ka sifiican script ka kaydi; `.vdb` waa la qoraa, lama akhriyo |
| Xisaabinta koodhka weelka cadaadiska | Qaabbadaha thin-wall iyo thick-wall ee buugga, safety factor-ka aad dooratid; ma aha margin koodh |
| Abuurayaasha app-yada kale | PartCraft keliya nooca tan |
