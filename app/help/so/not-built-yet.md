---
title: Wax aan wali la dhisin
summary: Wax kasta oo dhisme PartCraft-kan aanu wali samaynin, laga bilaabo sweep-yada laffaadka ah ilaa muuqaalka inch-ka, sawirrada cabbirrada iyo isku-dhisyada hoosaadka, oo leh waxa lagu sameyn karo maanta halkii.
keywords: maqan, wali ma jiro, xaddidaad, xaddidaadyo, roadmap, kernel saxda ah, fillet, chamfer, shell, sweep, loft, step import, simulasho, wax soo saarka, twist sweep, loft end tangency, face fillet, isleegyada, inches, cabbirrada sawirka, isku-dhisyo hoosaad, cloud, tablet, phone
from: 97b10a29
---

PartCraft waa dhisme hore. Bogan waxa uu liistaa waxa aanu wali samayn, si aadan u raadin, iyo waxa lagu sameyn karo maanta halkii. Waxa halkan ku jira ma leh taariikh.

## Waxay u baahan tahay kernel joomatari saxda ah

Nooca tan wuxuu qaybta oo dhan ka dhisaa mesh kernel-ka (eeg [The mesh kernel](topic:solid-kernels)). Waxa hoos ku jira oo dhan waxay u baahan tahay kernel joomatari saxda ah, nooca tan oo wali uusan lahayn. Qaybaha lagu kaydiyay astaamahan ayay wali furmaan: astaamuhu wuxuu ku sii jiraa taariikhda, isagoo lagu calaamadeeyay inuusan la dhisin, waana la ilaaliyaa marka aad kaydiso.

| Wali ma la dhisin | Halkii, maanta |
|---|---|
| {{ui:Fillet}} iyo {{ui:Chamfer}} geesaha wareegsan; fillets oo radius-kooda ku beddelma geeska dhererkiisa; wareegyo isku-dhafan oo si siman ugu xidhma meelaha ay isku kulmaan (mesh kernel-ku wuu jaraa) | Fillet iyo Chamfer waxay ku shaqeeyaan geesaha toosan ee u dhexeeya sagxadaha sinaanta leh; geesaha kale ee wareegsan ku wareeg sawirka ka hor inta aadan extrude-ga samayn ({{ui:Fillet}} sawir gudaha, {{key:F}}) |
| {{ui:Shell}} oo furaya wejiyada qalloocan; darbiyo cabbirro kala duwan leh | Ku fur wejiyada sinaanta leh; ku dar alaab extrude-yada meelaha darbigu uu ka qaro weyn yahay |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} wejiyada qalloocan; extrude ilaa wejiga, wejiga xiga ama geesta; extrude-yada tapered ah | Extrude ama revolve, marxalado meelaha loo baahan yahay; extrude ilaa qoto-dheer aad cabbirtay |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} iyo flat patterns | Extrude-ka saxanka ama profile-ka rib-ka |
| Wejiyada: dhamaystirka {{ui:Form}} gudaha qaybta, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Lama heli karo |
| Jidho badan: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, astaamo jidh cusub abuuraya | Hal jidh adag; qaababka iyo nuqul-sawirka astaamaha |
| Sketch-yada, diyaaradaha, tiirarka iyo dhibcaha wejiyada ee kaliya kernel saxda ah ayaa heli karta (wejiga ay samaysay fillet, derbiga godka, wejiga jidh STEP ah oo la soo dhoofiyay) | Sketch ku saabsan saldhigyada, diyaaradaha tixraaca iyo wejiyada toosan ee extrude-yada iyo revolve-yada |
| Natiijada naqshad-abuurka oo loo furay qayb ama lagu daray (waxay noqotaa jidh STEP ah oo la soo dhoofiyay) | Soo dejiso natiijada STL ama STEP |
| Tafatirka wejiyada qalloocan ee faylka STEP ee la furay sida wejiyo saxda ah; STEP saxda ah ee wejiyada spline, la xoqay iyo revolve-ka faylka STEP; geesaha spline; boolooyinka la soo dhisay; jidhadka STL / OBJ / 3MF iyo isku-dhisyada; STEP loogu talagalay moodel-qaabeeyeyaasha kale | {{ui:Open}} wuxuu akhrinayaa STEP sida saddexagallo, wuxuuna ilaalinayaa wejiyada toosan, silindarrada, koonyada, kubbadaha iyo torus-ka faylka dhoofinta ([Open a STEP file](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} wuxuu qoraa wejiyada joomatari kasta oo saxda ah wuxuuna ilaalinayaa kuwaas sida facets ([Export](topic:export-files#for-other-cad-programs-step)); macro-ka moodel-qaabeeyeyaha kale weli wuu qoraa |
| Muuqaalada jadwalka qalloocan (saxda ah) | Muuqaalada iyo muuqaalada goynta waxaa laga sameeyaa facets |
| Mugga, dusha iyo masaafooyinka saxda ah | {{ui:Measure}} wuxuu siinayaa tirooyinka jidhka faceted-ka, wuxuu yar yahay qaybaha wareegsan; dejinta **Curves** oo sare ayaa u dhowaynaysa |

Qaar ka mid ah safafka miisaska hoose waxay soo jeedinayaan mid ka mid ah astaamahan sida habka kale ee wax loo sameeyo. Soo jeedintaas waxay shaqeeyaan marka kernel saxda ah soo noqoto.

## Astaamaha

| Wali ma la dhisin | Halkii, maanta |
|---|---|
| Wejiyada fillet-ka, fillet-ka wareegga oo dhan, fillets oo radius-ka lagu dejiyay meelo geeska dhexdiisa | {{ui:Fillet}} joogto ah ama mid kala duwan oo toosan; astaamo fillet oo badan |
| Shells oo leh cabbirrada darbiyada kala duwan | Hal thickness oo {{ui:Shell}}; ku dar alaab extrude-yada meelaha darbigu uu ka qaro weyn yahay |
| Draft ee wejiyada freeform (spline) | {{ui:Draft}} wuxuu ka shaqeeyaa wejiyada toosan, silindarka iyo koonka |
| Sweep-yada laffaadka ah, sweep-ka darbiga khafiifka ah iyo sweep-ka wejiga; end tangency astaamaha Loft; loft oo leh hal guri oo hagid ah; waddooyinka spline | {{ui:Sweep}} oo leh jihayn go'an ama tallaabo dhamaad; loft oo leh laba guri hagid ama ka badan: eeg [Sweep, loft and draft](topic:sweep-loft-draft) |
| Ribs ka soo baxa qaansooyin ama splines; ribs la koray laba-geesood sida sketch-ka (muuqaal sare ka); draft ee ribs; ribs dhowr ah oo ka soo baxa sketch hal ah | {{ui:Rib}} oo ka soo baxa hal silsilad toosan oo ku taal diyaarada rib-ka: eeg [Ribs and gussets](topic:rib) |
| "Ilaa" wejiga qalloocan, "ilaa xiga" oo joogsanaya wejiga qalloocan | Ilaa wejiga sinaanta leh ama diyaaraha tixraaca |
| Godyo dhaqso leh oo la gooyay, dhuunto inch ama tuubo, dhuunto koonka, dhamaadka dhuunta ee la dhaadhacay iyo bilowga dhuunta ee geesta la jaray | Counterbore oo leh qoto-dheer yar; dhuunto ISO metric iyo trapezoidal, cosmetic ama moodel: eeg [Threads on shafts and bores, drawn or modelled](topic:threads) |
| Extrude-yada darbiga khafiifka ah | Ku sawir labada darbi ee profile-ka |
| Nuqul-qaababka oo mid mid la dhaafo, qaababka wejiga | Isticmaal astaamo kala duwan; qaababka dhinaca qow: {{ui:Path pattern}} |
| Nuqul-qaababka, mirrors, fillets, chamfers, shells iyo jidhadka la soo dhoofiyay | Nuqul sketch-ka ama astaamaha ay ku dhisan yihiin, ama qaabeeyso |
| Tangency saxda ah (G1) meelaha gaarka ah ee form-ka; isku-darka paches-ka form-ka wejiyada waaweyn | Kor u qaad Level-ka form-ka: paches-ka qiyaasta ah way yaraadaan; eeg [Freeform shapes with Form](topic:form-surfaces) |
| Form oo ka kooban dhowr qayb oo xidhan oo kala go'an hal astaamo ku jira; xidhiidh u dhexeeya form-ka | Hal qayb oo xidhan oo mid kasta Form astaamo; isku xidh Join |
| Dooridda jidhadka dusha ee muuqaalka (marka laga reebo barta jar-ka iyo patch-ka); surface fillets; untrim; G2 patches; Gordon surfaces oo tangent u ah geesaha qalloocan (tangent u ah diyaaraha iyo wejiyada sinaanta leh waa la dhisay) | Ku dooro magacooda panel-ka astaamaha; marka hore thicken, ka dibna fillet u samee jidhka adag |
| Liis jidhadka taariikhda; ka reebista jidhadka qarsoon ee dhoofinta | Magacow oo qari jidhadka liiska jidhka panel-ka qaybta; tirtir ama joog astaamaha samaysay jidhka si aad uga reebto |
| Miisaan aan isku mid ahayn oo ilaalinaya silindarrada iyo koonada sida xisaab; miisaanka aan isku mid ahayn ee wejiyada kala-raris | {{ui:Scale body}} wuxuu ka dhigaa wejiyada qalloocan B-splines xidhan (dhex-gal 0.0000004 mm); miisaan isku mid ah ayaa weli saxda ah |
| Isku-darka jidhadka dusha; isku-darka Minkowski | {{ui:Stitch}} ama {{ui:Thicken}} marka hore, ka dibna {{ui:Combine}} |
| Falanqaynta tolerance-ka: stack-ups oo leh geesood (wareegyo vector ah 2D iyo 3D), dareenka laga xisaabiyay joomatariga, Monte Carlo oo leh qaybinta kale, tolerance-ka cabbirrada sketch-ka, tolerance-ka dheeraadka ah ee material condition-ka | {{ui:Stack-up}} isku-dhisyada: hal jihe, xaaladda ugu xun iyo RSS, tolerances-ka la qoro, laga bilaabo tolerance-ka guud ee title block-ka ama GD&T frames: eeg [Tolerance stack-ups](topic:tolerance-stackup) |
| Nesting: amarka goynta iyo lead-ins, geesaha la wadaago oo mar keliya la jaro, qaybaha waa in la wada hayo; hadhaaga rolls-ka, agabka la wadaago mashruucyada | {{ui:Nest flat parts on sheets…}} oo leh bannaan, xad, leexin iyo jihada: eeg [Nest flat parts on sheets](topic:nest-flat-parts); saxanka hadhay waa la kaydiyaa oo horta waa la isticmaalaa: eeg [Keep and reuse offcuts](topic:nest-offcuts); qorshee goynta barnaamijka goynta kaaga |
| Sheet metal: hems, jogs, miter iyo contour flanges; flanges ee geesaha qalloocan ama wejiyada base flange-ka la foorariyay; bends la sawiray; xidhidhka geesaha; qalabka qaabeynta; jidh loo beddelo sheet metal; flat-ka base flange-ka la foorariyay oo wax laga gooyay; miisaska foorarinta | {{ui:Base flange}} (saxan ama profile foorarsan), {{ui:Edge flange}} geesaha toosan ee saxanka oo leh bend reliefs, iyo flat pattern oo leh K-factor: eeg [Sheet metal](topic:sheet-metal) |
| {{ui:Draft analysis}} isku-dhisyada; helitaanka parting line; falanqaynta qaro darbiga | {{ui:Draft analysis}} qaybta Design: eeg [Check draft for moulding and casting](topic:draft-analysis); fur qayb kasta oo isku-dhis si aad u hubiso |

## Sketches

| Wali ma la dhisin | Halkii, maanta |
|---|---|
| Ellipses, tangent arcs, conics, splines oo leh darajo go'an ama miisaan (NURBS) | Splines (cubic), qaansooyin iyo goobo oo leh Tangent relations |
| Dhibic ku taal spline (xidhiidh), xidhiidhka curvature (G2) | Dhibcaha spline-ka ku dhig meesha uu tegi lahaa |
| Nuqul offset ah oo spline-yada oo raacaya isbeddelada dambe; offsets-ka silsiladaha oo leh geesaha spline-ka ee jilicsan | Mar kale offset-garee ka dib isbeddelka; marka hore geeska wareeg |
| Nuqul-qaababka oo ku xiran asalka; qaababka dhinaca qow | Mar kale qaab-garee ka dib isbeddelka |
| Mashruucyada geesaha wareegsan ama ka jeedsan ee la soo saaray, joomatari la soo saaray oo raacaya qaybta | Soo saar geesaha wareegsan oo toosan oo isbarbar ah, ka dibna cabbir |
| Cabbirrada darawalka (tixraaca) | Akhri cabbirrada panel-ka ama macluumaadka qaybta |
| Xidhiidhka collinear | Parallel oo leh masaafo 0 ah |
| Gelinta barnaamij kale (clipboard-ka nidaamka) | Dhoofi DXF, STEP, STL ama 3MF |
| Qorista qaansooyinka, koordinaatyada xaaladda ama qudhoobka | Qor khadadka iyo goobaha; qor qaansooyinka qalabka Arc |
| Dooridda joomatariga iyada oo aan lagu dhejin xulaha | Waxay u baahan tahay riix ama taabasho |

## Waxyaabaha iyo unugyada

| Wali ma la dhisin | Halkii, maanta |
|---|---|
| Qaabeyn oo beddela agabka; miis naqshadeed CSV ah oo damiya astaamaha | Qaabeyn waxay dejisaa halbeegyada oo astaamaha wuu damiyaa oo furaa: eeg [Configurations and design tables](topic:design-tables); `partcraft variants` wuxuu dhisaa qaabeynta la kaydiyay magacyo, astaamaha damiyay oo ku jira: eeg [Make a variant pack from your configurations](topic:variant-pack) |
| Isleegyada lambarada panel-ka astaamaha ugu dambeeyay (diyaarad, sweep, draft iyo kuwa kale) | Ku qor script-ka ama `partcraft set` ([Scripts and the command line](topic:scripts-and-cli)) |
| Qayb lagu muujiyo inch | Cabbirada waxay muujiyaan millimitir; ku qor `2in` sanduuqa lambarka ama isla'egta wuxuuna noqonayaa 50.8 |

## Faylasha

| Wali ma la dhisin | Halkii, maanta |
|---|---|
| Tafatirka astaamaha jidhka STEP ee la soo dhoofiyay (wuxuu yimaadaa isagoon taariikh lahayn) | Ku dar ama jar agabka adigoo isticmaalaya astaamahaaga |
| Akhrinta midabbada, magacyada, qaab-dhismeedka isku-dhisyada iyo PMI-ga STEP-ka | Lama heli karo |
| Dhoofinta glTF, OBJ, IGES, Parasolid; DWG ee qayb 3D ah (kaliya qaabeynta pack-ka wuxuu qoraa DWG: xaashida sawirka) | STL ama 3MF meshes-ka; STEP jidhadka adag; DXF 2D-ka |
| Furista IGES, DXF ama faylasha barnaamijyada kale (faylasha `.3dm` waxay furmaan sida hal jidh: [Open a .3dm model as a solid body](topic:open-3dm-files)) | Weydii STEP, ama mesh STL, OBJ ama 3MF oo xidhan: [Open an STL, OBJ or 3MF](topic:open-meshes) |
| Qaab-dhismeedka isku-dhisyada (geed leh magacyada qaybaha) ee STEP-ka la dhoofiyay | STEP isku-dhis waa hal compound oo jidhadka la dejiyay |
| Kaydinta fool la doortay adigoo aan browser-ka lagu soo dejin | Ku shid "ask where to save" dejinta soo dejinta browser-ka |

## Sawirrada

| Wali ma la dhisin | Halkii, maanta |
|---|---|
| Cabbirro ka badan saddexda cabbir ee guud (cabbirada godyada, meelaha, tolerances-ka cabbirrada) | Calaamadee PDF-ka, ama dhoofi DXF oo cabbiri barnaamij CAD 2D ah |
| Hal ama ka badan goynta ama faahfaahinta; muuqaalada isku-hadhaa, kuwa jeexan iyo kuwa dhinac-hoose | Hal goyn iyo hal faahfaahin mid kasta sawirka |
| Qoraal xor ah, qoraallo iyo miisas xaashida (marka laga reebo blocks-ka cinwaanka iyo nooca) | Finish note, ama qoraal lagu daro PDF-ka |
| Isku-xidhka xagalka koowaad (first-angle), muuqaalada dhaqaajiya, xaashida qaabka bortiga | Third angle, habayn toos ah, xaashida dhererka A4–A0 iyo ANSI A–E |
| Muuqaalka goynta oo toos ah: diyaaro dhowr ah ama sanduuq goynta isla mar, xadka goynta, kaydinta goynta faylka | Hal diyaarad mar kasta {{ui:Views}} › {{ui:Section view}}; eeg [Look inside with a section view](topic:section-view) |
| Muuqaalada isku-dhisyada oo leh muuqaalo dheeraad ah, cabbirro ama balloons aad dhaqaajin karto | Hal isometric (ama exploded) muuqaal oo leh balloons toosan iyo liiska qaybaha |
| Nuqul iyo dhejinta calaamadaha GD&T iyo dhamaystirka | Mid kasta ku dhig Datum, Frame ama Finish |
| Buugaagta: STEP-yada {{ui:From another file…}} ee Illustrate, moodeel si toos ah loo soo qaado ModelCraft ama BimCraft, sawirro tayada path tracer-ka, 3D fal-celin gudaha PDF | Fur STEP-ka Design oo bilow buugga {{ui:From the open part}}; kaydi moodeelka sida glTF (.glb); sawirro PNG ah oo muuqaalka 3D; faylka 3D ee fal-celinta: eeg [Start a manual in Illustrate](topic:illustrate) |

## Isku-dhisyada

| Wali ma la dhisin | Halkii, maanta |
|---|---|
| Isku-xirka gear, rack, cam iyo screw; isku-xirka kubbadda oo ku xaddidan koon; isku-xirka meelaha qalloocan ama dhibcaha | Isku-xirka adag, revolute, slider, cylindrical, planar, ball iyo pin-in-slot ee wejiyada sinaanta leh, qiimo kasta oo leh xaddiddiisa: eeg [Build an assembly](topic:build-assembly) |
| Tallaabooyinka exploded ee leexiya qaybaha, iyo jiidista qaybaha ay isku-xirku dejiyo | Tallaabooyin exploded toosan; ka saar isku-xir si aad qayb gacanta ugu dhaqaajiso |
| Isku-dhisyo hoosaad | Hal heer oo qaybaha kaliya |
| Gears, cams, xiriir | Lama heli karo |

## Wax soo saarka

| Wali ma la dhisin | Halkii, maanta |
|---|---|
| Jarista adaptive 3D iyo jarista offset 3D; dhamaystirka waterline, pencil, radial iyo spiral; marinnada adaptive ee loo qoro qaansooyin | Jarista 3D xariiqyo toosan, iyo jarista hadhaaga: eeg [3D roughing and rest machining](topic:rough-3d); dhamaystirka Parallel iyo Scallop: eeg [3D finishing](topic:finish-3d); 2.5-tiir face, pocket, 2D adaptive, contour, drill iyo chamfer: eeg [Make toolpaths and G-code](topic:manufacture) |
| Jarista swarf, waddooyinka flow-line iyo multi-axis, koodhadhka shaqada leexan (G68.2) iyo hubinta is-dhaca ee holder-ka iyo mashiinka; simulasho ee jarista 5-tiir iyo wareega | Qalab leexan howlgal kasta, dhamaystir 5-tiir oo leh kubbad bar dhamaad iyo dhamaystirka wareega ee tiirka 4-aad: eeg [4- and 5-axis machining](topic:multi-axis) |
| Godinta iyo dhuunta gudaha khaaraadda, cycles G71/G76, qaansooyin waddooyinka khaaraadda, qalabyo nool, sub-spindle | Khaaraadda dibadda: wejiga, ku-dhow, dhamaystir, godka, ka-jar, dhuunto, godin dhexda: eeg [Turning on a lathe](topic:turning) |
| Baadhista xagal ama geesi, qalab-kuwe, cabbirka cabbir ee tolerance-ka | Baadhista wejiga, dhinaca, godka ama boss-ka si loo dejiyo kala-saarka shaqada: eeg [Probing](topic:probing) |
| Hubinta is-dhaca holder-ka iyo gees-hoosta | Eeg digniinta dherer-fiilada ka dibna hubi simulator-ka xakameeyahaaga |
| Nolosha qalabka iyo wareegyada hoosaadka ee post-ka; soo-raridda faylasha post-ka barnaamijyada kale | Qor ama beddel post qaabka PartCraft-ka: eeg [Post processors you can edit](topic:post-processors) |
| G-code oo inch ah (G20) | Millimitir (G21) oo keliya |

## Simulasho iyo naqshad-abuurka

| Wali ma la dhisin | Halkii, maanta |
|---|---|
| Daraasadaha aan isku mid ahayn: wax soo-saar, ka-weyneyn weyn, is-dhacyada qaybaha, daalka | Xoogga iyo wejiyada toosan, wejiyada ilaalinta iyo dhaqdhaqaaqa: eeg [Check stress and deflection](topic:simulation); ilaali isku-dhafka xoogga oo ka sarreeya 1 |
| Ilaalinta buckling-ka aan isku mid ahayn (dhererka, post-buckling, snap-through) | Qaybta buckling-ka toosan oo leh xadka ballaaran: eeg [Heat, thermal stress and buckling](topic:thermal-and-buckling) |
| Iftiin ka dhex-maraya wejiyada (view factors), ka-hortagga xiriirka, maaddooyinka heerkulka ku xiran, daalka heerkulka (mawjadaha daalka kulaylka) | Iftiin hareeraha ah, xoog kulaylka oo joogto ah ama quasi-static oo waqti ku xiran, hantida joogta ah: eeg [Heat, thermal stress and buckling](topic:thermal-and-buckling) |
| Hagaajinta otomaatiga ah ee kulaylka transient-ka iyo daraasadaha culeyska kulaylka; mesh-ka oo lagu weyneeyo meelaha khaladku yar yahay; bartilmaameed ku saabsan tiro maxalli ah (xoogga ugu sarreeya meel gaar ah) | **Refine automatically** daraasadaha static, buckling, natural-frequency iyo kulaylka joogta ah, khaladka oo dhan qaybta: eeg [Check stress and deflection](topic:simulation); haddii kale yaree cabbirka element-ka |
| Culeysyada bearing-ka iyo boolta, xoogag fog, moment-ada, springs, dhaqdhaqaaqyada la qeexay | Xoogag iyo cadaadis dusha, cuf; dusha go'an iyo kuwa aan is-diidin |
| Daraasadaha isku-dhisyada; agabka kala duwan jihada (layers-ka la daabacay, composites) | Hal qayb, hal agab isotropic |
| Dhowr xarun oo furmaan ah daraasadaha tetrahedral, gudbinta kulaylka iyo naqshad-abuurka; xarun kasta bogga aan cross-origin isolated ahayn | Daraasadaha voxel, buckling, xoogga waqtiga iyo socodka laminar waxay adeegsadaan xarumaha halka bogga ogolaado: eeg [PartCraft settings](topic:settings) |
| Socodka turbulent ee nuxurka naqshadda (moodelka Spalart–Allmaras waxa uu ku jiraa sida tijaabo: xoogga biibilka 30 ilaa 34 % sare, dib-u-xidhidhka dhabarka-tallaabada 21 ilaa 39 % gaaban; la qorsheeyay: unugyo fiican oo derbiyada ag ah); kulaylka socodka, socod aan joogto ahayn (waqti-saxda ah), dusha xor ah, dareemayaasha aan Newtonian ahayn, qaybaha wareegaya | Socod laminar, joogto ah, isothermal oo fluid Newtonian ah, ama moodelka turbulent ee tijaabada qaab-ka tayada: eeg [Simulate fluid flow](topic:flow-simulation); panel-ku wuxuu digayaa marka Reynolds number-ku gabi ka dhaafo laminar-ka |
| Xadka xoogga iyo xeerarka wax-soo-saarka (overhangs, jihooyinka jarista) ee naqshad-abuurka; agabyo badan oo mid qaab ah | Qaabka ugu adag mugga; hubi natiijada Simulation: eeg [Grow a shape from loads](topic:generative-design) |
| Natiijo naqshad-abuur oo ah jidh la wax-beddeli karo (qaab siman, parametric) | STL, STEP faceted ah ama qayb leh natiijada jidh faceted la soo dhoofiyay |
| Naqshadda mashiinka korontada: rotor oo wareegaya stator gudaha, torque-ka iyo xaglaha, biraha la kaaga kulmiyo, magnets oo lumiya xoog ka dib knee-kooda, eddy currents iyo khasaaraha bir iyo naxaas; goobaha birta 3-D ama meshes-ka wareegsan | Magnetostatics 2-D oo toosan oo ku saleysan shabakad maktabadda falanqaynta: coils, bir, magnets joogto ah oo ku jira recoil line, fogaanshaha, inductance iyo jiid: eeg [Magnetic fields in 2-D](topic:magnetic-fields-2d) |

## Scripts

| Wali ma la dhisin | Halkii, maanta |
|---|---|
| Caawinta hover ee tafatirka script-ka, breakpoints iyo tallaabooyinka | Find, fold iyo complete way jiraan (eeg [Write and run scripts](topic:craftscript)); wixii kale, tafatirkaaga: {{ui:Save}} iyo {{ui:Open}} kooxda Script ayaa geliya oo baxa scripts-ka; shaqeyaasha dhismaha ku jira waxa lagu liistay [The CraftScript language](topic:craftscript-language) |
| Breakpoints iyo tallaabooyinka script-ka | `disp` iyo `fprintf` jidka; {{key:Mod+Enter}} wuxuu socodsiiyaa dhowr safka la doortay mar |
| Goobaha iyo qorshayaasha uu script-ku muujiyo oo lagu sawiro shaqada Design; scripts-ka beddelaya halbeegyada qaybta | Waxay ku muuqdaan shaqada Script; scripts-ku wuxuu akhriyaa halbeegyada `param` (eeg [Write and run scripts](topic:craftscript)), beddelaa tab-ka {{ui:Parameters}} |
| Sawirro iyo miisas oo ku taal qorshayaasha; tafatirka qorshe (zoom, xadka tiirarka) ka hor inta aan la kaydin | Side by side wuxuu muujiyaa qorshayaasha; kaydi qorshe PNG, SVG ama CSV ah oo dhammeeyo meel kale |
| numpy iyo xirmooyinka Python kale; Python oo ka baxsan xidhiidhka; Python oo tafatirka lagu soo xidhayo; Pascal Script | Maktabadda caadiga ah ee Python, CraftScript iyo Lua: eeg [Scripts in Python](topic:craftscript-python) |
| Shaqeyaasha Lua oo loo gudbiyo shaqeyaasha dhismaha; wicitaanka shaqada maktabadda Lua-ka magac lagu dhisay intii script-ku socday | Qor magaca shaqada maktabadda script-ka (`cs.static_tet(…)`), ama wac CraftScript script-ka |

## The app

| Wali ma la dhisin | Halkii, maanta |
|---|---|
| Kaydinta duubka, wadaagga iyo taariikhda noocyada | Weli lama heli karo. Keydi faylasha kombiyuutarkaaga oo noocyada ku kaydi magacyo |
| PartCraft sida app la rakibay oo iPad iyo iPhone | Isticmaal PartCraft browser-ka aaladda; Android iyo desktop-ka waxa kale oo uu ku shaqeeyaa CadCraft Studio (getcadcraft.com/download) |
| Menu-yada xaashida xiga (right-click) | Qalab-sanduuqa iyo panel-ka midig |
| Shaqada oo dhan oo aan internet lahayn xagga bilowga cusub | Kaliya marka app-ka loo kaydiyay isticmaalka aan internet lahayn: eeg [Working offline](common:offline) |

Sheeg waxa aad ugu jirto gunaanad bogga taageerada ee goobta: waxay qaabeynaysaa waxa soo socda.

## Engineer (generators iyo fields)

| Wali ma la dhisin | Halkii, maanta |
|---|---|
| Madaxyada, dekedaha iyo fittings-ka ee exchanger-ka kulaylka ee la soo saaray; qalloocanka kulaylka ee xoogga agabka; khasaaraha tee ee manifold-ka | Generators-ku wuxuu dhisaa corka iyo tuubooyinka; ku dar fittings Design; isticmaal tirooyinka heerkulka qolka ee agabka oo leh factor badbaado |
| Ku dar generators-ka add-on directory-ga hal guji | {{ui:Open}} shaqada Engineer wuxuu ku daraa generator fayl ka |
| Faylka goobta oo ka dhaqsan voxel-size-ka generator-ka; akhrinta faylasha `.vdb` | Keydi goob ka dhaqsan script-ka; `.vdb` waa la qoraa, lama akhrin karo |
| Xisaabaadka koodka weelka cadaadiska | Qaacidooyinka buugga ee darbiga khafiifka ah iyo darbiga qaro weyn, iyada oo leh factor badbaado aad doorato; ma aha margin koodka |
| Generators-ka app-yada kale | Kaliya PartCraft nooca tan |
