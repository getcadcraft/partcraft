---
title: Waxa cusub ee 0.9
summary: PartCraft 0.9 wuxuu soo kordhiyay fillets u dhexeeya wejiyada iyo ka dhigidda jir, isku-dhisyada kun-kun qayb, Documents vault oo leh nooca-dib-u-eegista, add-on-ka Solid FEM ee xoogga, toban habood oo qaanso, cabbirrada birta UK, Print stage iyo add-ons-ka daabacaadda resin-ka.
keywords: waxa cusub, release notes, changelog, 0.9, fillet u dhexeeya wejiyada, rolling ball, fillet geesaha badan, ka dhig jir dhumuc leh, jidh ka dusha, step shell, iges jidh, fillets scan, isku-dhis weyn, muuqaal fudud, 20000 qayb, dokumentiyada, vault, soo qaad, nooca-dib-u-eegista, sii-deyn, xiriirka rhino, grasshopper, 3dm, cursor-yada, warshadda, job queue, solid fem, finite element, von mises, natural frequency, habka qaanso, cabbirrada birta uk, print stage, resin, goo, ctb, saxan, dhig dhul, lay flat, markaa, changelog, 0.8, 0.8.1, nooca, astaamo cusub, falanqaynta nool, cusboonaysii intaad wax beddelayso, jab, culeys factor, nonlinear, yield, plastic strain, contact, calculix, motion study, clearance, surfaces, nurbs, fair, hull, zebra, injineer, generator, jidh la abuuray, sawir-gacmeed sawir ka, miisaanka daabacaadda, kala-jarka daabacaadda, shrinkage, xaashiyo nested, g-code, naqshad, cabbir godadka, caawiye, mcp, luuqadaha, safafka qalabka
from: 96d9fbfa
---

Waa waxa isbeddelay PartCraft 0.9, marka la barbardhigo 0.8.1. Dusha xor ah hadda way xidhmaan jidh ahaan, isku-dhisyada kun-kun qayb way shaqeeyaan, Documents vault wuxuu hayaa nooca-dib-u-eegista, add-on-ka Solid FEM wuxuu hubiyaa xoogga qayb. Waxba kasta wuxuu sheegaa meesha laga helo.

## Cusub 0.9.1

- **Dhoofinta STEP ee saxda ah.** {{ui:Dhoofi}} › {{ui:STEP AP242 (jidh adag oo saxda ah)}} iyo {{ui:STEP AP214 (jidh adag oo saxda ah)}} hadda way shaqeeyaan. Godadka, bossesyada, fillets-ka, koonosyada, sfeeraha iyo torus-yada waxa lagu qoraa dusha dhabta ah iyada oo wareegyo dhab ah ay yihiin geesaha, sidaas darteed barnaamij CAD ama CAM oo kale wuu qaadan karaa godka sidii god. Dhinacyada spline-ka, xudunta la moodeelay iyo meshes-ka la keenay waxay weli yihiin fasedyo fidsan isla jidhkaas. Eeg [Dhoofinta daabacaadda, STEP iyo DXF](topic:export-files#for-other-cad-programs-step).
- **STEP la furo, STEP saxda ah ayaa la dhoofiyaa.** Faylka STEP aad furto wuxuu hayaa dusheeda fidsan, silinderyadooda, koonosyadooda, sfeeraha iyo torus-yadooda, sidaas darteed {{ui:Dhoofi}} › {{ui:STEP AP242 (jidh adag oo saxda ah)}} wuu dib ugu qoraa sidii dusha dhabta ah halkii fasedyo: biim bixiyaha oo leh godad boolt ah wuxuu u baxaa wejigii uu ku imaan jiray, oo ku dheeraada wixii aad ku jartay. Dusha spline-ka, ee la soo rido iyo kan la wareejiyay ee faylka waa fasedyo, sidoo kale jidhadka STL, OBJ iyo 3MF. Faylka STEP mar kale fur qayb hore loo kaydiyay. Eeg [Fur faylka STEP oo ku dhis](topic:import-step).
- **Wareeg dhab ah DXF-ka wejiga.** {{ui:Dhoofi}} › {{ui:DXF oo sawir-gacmeedka ama dhinac sinaan ah}} markii wejiga fidsan la doorto hadda godadka wareegga ah wuxuu qoraa sidii wareeg, leh bartilmaameedka godka iyo radius-kiisa, miiska laser-ka, plasma-ga ama waterjet-ka. Geesaha wareegga kale weli waa fasedyo.
- **STEP saxda ah warshadda.** {{ui:Wax soo saarka}}, {{ui:STEP saxda ah (kala-xidhiidhka shaqada)}} wuxuu qoraa qaybta oo asalkeeda ku yaal asalka shaqada ee dejinta, Z waxa uu raacaa dhidibka qalabka, dhidibyada uu G-code-ku isticmaalo. Eeg [Samee toolpaths iyo G-code](topic:manufacture#exact-step-for-the-shop).

## Cusub

### Dusha iyo jidhadka

- **Fillet u dhexeeya wejiyada.** Dooro {{ui:Wejiyada}} sanduuqa {{ui:Meel shaqo}}, kadibna {{ui:Fillet u dhexeeya wejiyada}}. Dooro laba weji oo hal jidh ah, qor radius-ka (iyo {{ui:Radius-ka dhamaadka (mm, 0 = isku mid)}} radius kaas oo ku beddela geesta dhexdeeda). Khadka natiijada wuxuu sheegaa sida fillet-ka uga fogyahay kubbadda rolling-ka ee ku habboon, radius aan ku habboonayn waa la diidaa iyo wejiga la magacaabo. {{ui:Fillet geesaha badan}} wuxuu wareegaa geeso badan hal tallaabo; calaamadee {{ui:Geesaha (xabbad kubbad halka saddex kulmaan)}} si aad u hesho geesha sfeerka halka saddex geesood oo wareegsan ee wejiyada fidsan ay kulmaan. Eeg [Dusha xor ah (NURBS)](topic:nurbs-surfaces).
- **Ka dhig jir dhumuc leh.** {{ui:Ka dhig jir dhumuc leh}} meel shaqo isku mid ah wuxuu siiyaa dusha dhumuc; {{ui:Dhinaca kale}} wuxuu ku koraa dhinaca kale. Qalin ama isgoyn waa la diidaa, dusha iyo meesha la magacaabo.
- **Jidhadka ka yimid dusha.** Dusha la jaray waa la isku xidhi karaa union, subtract iyo intersect, oo waa la dhigi karaa qaybta hal tallaabo oo undo ah. STEP wuxuu qoraa jidh ahaan hal shell xidhan, IGES wuxuu qoraa hal jidh; labadaba mar kale waxay akhrisaa jidh ahaan. Haddii dusheedu aan geesaha isugu habboonayn, faylku wuxuu helaa dusheed kala duwan, khadka xaaladda wuu sheegaa. Jidhadka waxa kale oo lagu samayn karaa node editor-ka; eeg [Tifaftirka node-ka](topic:nodes).
- **Fillets-ka gurmadka iyo kuwa radius-ku kala duwan yahay ee scan-ka.** Marka dusha lagu habeeyo scan, fillets-ka gurmadka (torus) iyo fillets-ka radius-kooda kala duwan ee geesta qiyaastii toosan ayaa la raadiyaa, sidoo kale waxaa lagu liistaa radius-kooda. Waxa lagu tijaabiyay scan-yo la sameeyay oo keliya.

### Isku-dhisyada, dokumentiyada iyo xiriirrada

- **Isku-dhisyada waaweyn.** Qaybaha nuqul ah waxay wadaagaan hal mesh, {{ui:Muuqaalada}} › {{ui:Muuqaal fudud}} wuxuu sawiraa sanduuqyo si muuqaalku u sii socdo (wuu iska shido isku-dhisyada aad u waaweyn; xulashada iyo isku-xidhka weli qaybaha dhabta ah ayay isticmaalaan). Geedka qaybaha wuxuu muujinayaa safafkiisa koowaad iyo badhanka {{ui:Muuji 700 kale}} kuwa kale. Faylalka isku-dhisku waxay haysan karaan ilaa 50,000 tusaale iyo 100,000 isku-xidh. Eeg [Dhis isku-dhis](topic:build-assembly).
- **Dokumentiyada.** {{ui:Dokumentiyada…}} ee kooxda **Fayl** wuxuu furaa wada-hadal ku dhex furan gal mashruuc: soo qaad iyo soo celi, xarfaha nooca-dib-u-eegista, xaaladaha (shaqada socota, loo baahan yahay eegis, la sii daayay, aan la isticmaalin), taariikhda, meesha la isticmaalo iyo liiska agabka. Eeg [Dokumentiyada iyo nooca-dib-u-eegista (vault-ka)](topic:documents-walkthrough).
- **Xiriirka Rhino ee nool.** Hal script, `cadcraft_link.py`, wuxuu eegaa dokumentiga Rhino ama Grasshopper wuxuuna riixaa oo kaliya waxa isbeddelay PartCraft, halkaas oo astaanta la soo geliyay ku dib u dhiso shaqlka cusub. Waa hal jihe oo wuxuu u baahan yahay Studio. Eeg [Xiriirka .3dm ee nool](topic:live-3dm-link).
- **Isku arag cursor-yadooda.** Fadhiga la wadaago, cursor-ka qof kasta wuxuu muujinayaa magaciisa iyo astaamaha uu dooranayo. Eeg [Shaqeynta nool dadka kale](topic:work-live).
- **Warshadda.** Shid add-on-ka Factory floor ee {{ui:Dejinta}} › {{ui:Kordhinno}}. Markaad post-garto barnaamij {{ui:Wax soo saarka}}, tab-kiisu wuxuu {{ui:Ku dar safka shaqada warshadda}} ama {{ui:Ku kaydi sida fayl shaqo}}. Mar kasta ma diro mana bilaabo mishiin.

### Falanqaynta iyo qaybaha

- **Add-on-ka Solid FEM.** Shid {{ui:Solid FEM}} {{ui:Dejinta}} › {{ui:Kordhinno}} (waa la damiyay ilaa aad samayso), tab-ka {{ui:Solid FEM}} ayaa soo muuqda dhinaca midig. {{ui:Qaybta mesh-garee}}, dooro wejiyada go'an iyo culeyska muuqaalka 3D, {{ui:Xal}}, kadibna sawir displacement, von Mises stress ama mode shape oo leh {{ui:Muuji moodelka dushiisa}}. Eeg [Solid FEM: hubinta xoogga](topic:solid-fem-check).
- **Qaanso sawir-gacmeed ahaan, toban siyaabood.** Fallaadha ku xigta {{ui:Qaanso}} toolbar-ka sawir-gacmeedka wuxuu taxayaa 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length iyo Continue. Eeg [Qaanso ku samee toban habood](topic:sketch-arc-methods).
- **Cabbirrada birta UK.** Weldments-ku wuxuu isticmaali karaa 976 qaybood UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); qor cabbir sida `305x165x40 UB`. Eeg [Xubnaha qaab-dhismeedka](topic:structural-members).

### Daabacaadda

- **Heerka daabacaadda.** Badhanka {{ui:Heerka daabacaadda}} ee toolbar-ka (add-on 3D Print, la shiday marka hore) wuxuu qaybahaaga jidhka dhigaa saxan la jajabiyay: {{ui:Dhig dhul}}, {{ui:Wareeji 90°}}, {{ui:Habee saxanka}}, {{ui:Ku habee dhammaan saxanka}}, {{ui:Muuji lakabyada}}, kadibna {{ui:U dir printer-ka 3D}} USB, Klipper (Moonraker), OctoPrint ama PrusaLink. Waxba lama dirin ilaa aad xaqiijiso, qaybtaadana weligeed lama beddelo. Faylka STL ama 3MF, eeg [Qayb u diyaari daabacaadda 3D](topic:print-3d).
- **Daabacaadda resin-ka.** Add-ons-ka {{ui:Dejinta}} › {{ui:Kordhinno}}, dhammaan waa la damiyay ilaa aad shido: resin slicer, imtixaanka exposure, iyo faylalka Elegoo GOO, SL1, Chitubox CBDDLP/CTB iyo Anycubic. Slicing-ka wuxuu ku shaqeeyaa thread gaar ah, sidaas darteed bogga wuu jawaabaa.

## App kasta

- Talo kasta oo tilmaame ah waa Bootstrap tooltip.
- Talada bilowga waxay leedahay badhanka xidh; waa ka xidhan tahay.
- Safka tabs-ka panel-ka ee aan ku habboonayn wuxuu u dhaqaaqaa dhinac ahaan halkii laga jari lahaa.
- Tab-ka browser-ka wuxuu muujinayaa magaca dokumentiga furan ka hor PartCraft | CadCraft.
- {{ui:Dejinta}} wuxuu muujiyaa {{ui:Qaabeynta}} workspace-ka sidii liis hoos u dhac ah, sanduuqa luuqadda wuxuu liistaa dhammaan luuqadaha dhismahu leeyahay.
- Culeyska iyo Heerkulka waa noocyo cutubyo ku jira dejinta cutubyada.

## La hagaajiyay

- Menu-ga Qaanso ee sawir-gacmeedka hadda wuxuu taxayaa habka oo dhan.
- Toolbar-ka add-on-ka iyo cinwaanka tab-ka browser-ka waa la saxay 2026-11-09.

## Xadka daacadnimada

- STEP saxda ah waa la akhriyay OpenCascade (jidhadka sax ah, mugga la mid ah kii gacanta lagu xisaabiyay). Weli kama furna dhammaan barnaamijyada CAD ama CAM, isku-dhisku ma qoran STEP saxda ah.
- Waxba mishiin dhab ah lagama daabicin. Slicing-ka, G-code-ka iyo faylalka resin-ka waxaa akhriyay barnaamijyadeenna ama printer-ka beddelka; midna ma loo rarin printer-ka, cabbirrada printer-ka iyo exposures waa bilow kaliya.
- Solid FEM waa linear, isotropic iyo elastic, hal agab qayb kasta, ma leh contact, yielding ama buckling. Xoogga wejiyada go'an iyo geesaha jilicsan wuxuu ku xiran yahay mesh-ka. Waa caawin hubin, injineer ma eegin.
- Waqtiyada isku-dhisyada waaweyn waxay ka yimaadeen server aan GPU lahayn; frame faahfaahin buuxa oo leh 20,000 qayb weli wuxuu qaadaa ilbiriqsiyo halkaas.
- Fillets-ka waxay shaqeeyaan labo weji; ma jiro vertex blend guud, ma jiro fillet u dhexeeya wejiyo aan isku kulmin.
- Xiriirka Rhino weligeed lama socon Rhino ama Grasshopper dhab ah. Documents waxa lagu tijaabiyay laba barnaamij oo gal hal ah, ma aha laba qof oo share shabakad.
- Habeynta dusha scan dhab ah gacmaha lama hubin. Luuqadaha aan Ingiriisi ahayn waa qabyo mashiin.
- Installer-ada Windows lama saxiixin code, sawirka diskiga macOS lama notarize-gareyn. Eeg [Xallinta dhibaatada](topic:troubleshooting).

Isbeddelada hore waxay ku jiraan [Waxa cusub ee 0.7](topic:whats-new-0-7).

## Hore: 0.8 iyo 0.8.1

Waa waxa isbeddelay PartCraft 0.8 iyo 0.8.1, marka la barbardhigo 0.7. Simulation-ku wuxuu jawaabayaa intaad wax beddelayso wuxuuna kuu sheegayaa waxa marka hore jabi doona, isku-dhisyadu waxay helaan motion studies, workspace-yada cusub waxay sameeyaan dusha xor ah iyo qaybo cabbirka fiisigiska ka timid. 0.8.1 waa sii-deyn hagaajin yar.

### Cusub

**Simulation**

- **Cusboonaysii intaan wax beddelayo.** Calaamadee {{ui:Cusboonaysii intaan wax beddelayo}} block-ka {{ui:Xal}}, jawaabaha way raacaan wax beddelkaaga. Beddel cabbir, culeys ama agab, jawaab degdeg ah, oo lagu sameeyay curiye afar jeer ka weyn, ayaa isla markiiba soo muuqda; markaad joogsato qiyaastii hal ilbiriqsi, jawaabta saxda ah ee daraasadda ayaa beddelaysa. Natiijooyinku waxay sheegaan kii aad eegayso. Cantilever birta ah, jawaabta degdegga ahayd waxay ku dhowdahay 1 % deflection iyo qiyaastii 4 % stress ee jawaabta saxda ah. Eeg [Hubi xoogga iyo go'ida](topic:simulation#update-while-you-edit-live).
- **Waa maxay marka hore jabta.** Daraasadda static ama buckling, {{ui:Waa maxay marka hore jabta?}} block-ka **Jabi** wuxuu miisaamaa culeysyada ilaa qaybtu ay dhacdo. Wuxuu liistaa, ugu xumaanta marka hore, factor-ka culeyska ee yield-ka ugu horreeya (calaamad casaan ah meesha xoogga ugu sarreeyo) iyo factor-ka buckling-ka. Factor ka yar 1 macnaheedu waa qaybta hore ayaa dhacday markay culeysku saaran tahay, Dhibaatooyin wuxuu muujiyaa qalad. Factor-yadu waxay ka yimaadaan daraasad linear, sidaas darteed waxay yihiin sida ay tahay. Eeg [Hubi xoogga iyo go'ida](topic:simulation#find-out-what-breaks-first-break-it).
- **Yield iyo contact.** Laba nooc daraasad oo dheeraad ah: mid aan linear ahayn oo agabku raacayo khadkiisa toosan ilaa xoogga yield-ka, kadibna jiifka ka yar, iyo strain plastic ah oo la sawiray; iyo mid contact ah oo qaybo kala duwan ku riixaan midba midka kale (aan friction lahayn) ama ku dhegmaan (bonded). Tallaabada culeyska ee aan degi karin, ama qaybo aad u galaan midba midka kale, waxay muuqdaan panel-ka Dhibaatooyin. Friction, sliding weyn, wareegyo weyn, deflection weyn iyo fatigue lama xalin. Eeg [Hubi xoogga iyo go'ida](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Faylalka CalculiX.** {{ui:Dhoofi}} › {{ui:Faylka CalculiX (.inp)}} wuxuu kaydiyaa daraasadda CalculiX, barnaamij kale oo aad rakibto oo aad qudhaaga socodsiiso; {{ui:Dhoofi}} › {{ui:Natiijooyinka CalculiX (.frd)}} wuxuu akhriyaa faylkiisa natiijada dib ugu soo celiya mesh isku mid ah. PartCraft ma bilaabo barnaamijkaas, wuxuuna sheegaa haddii qaybtu isbeddeshay tan iyo markii faylka la kaydiyay.

**Isku-dhisyada**

- **Daraasadaha dhaqdhaqaaqa.** {{ui:Isku-dhis}} › {{ui:Dhaqdhaqaaq}} wuxuu wadaa qiimaha hal isku-xidh wakhti aad bixiso (xawaare joogto ah, si tartiib ah loo qabsado, sine, ama u bax oo dib ugu soo noqo), wuxuuna geeyaa isku-dhiska tallaabo kasta oo isku-xidhkiisa iyo lilmaha xidhan, wuxuuna sheegaa waxa is dhex jiifa iyo sida qaybaha u dhow yihiin. {{ui:Ku dar barta}} wuxuu sawiraa booska barta, xawaaraha iyo xawaaraha kordhaya, qiimaha isku-xidhka iyo fogaanta wakhtiga; {{ui:Kaydi CSV}} iyo {{ui:Kaydi garaafka}} ayaa soo saara. Kadib {{ui:Socodsii}}, sariirta socodka tallaabo-tallaabo wuxuu isku-dhiska u wareejiyaa tallaabo kasta. Dejinta daraasadda waxa lagu kaydiyaa faylka isku-dhiska. Xawaaraha iyo xawaaraha kordhaya waxay ka yimaadaan booska la duubay, sidaas darteed isticmaal tallaabo badan haddii qulle adag oo hoose lagu akhriyo. Eeg [Hubi isku-dhiska is-dhex-jiifka iyo dhaqdhaqaaqa](topic:check-assembly#a-motion-study).

**Dusha iyo qaybaha fiisigiska ka timid**

- **Workspace-ka dusha.** Dooro {{ui:Wejiyada}} sanduuqa {{ui:Meel shaqo}} NURBS curves iyo dusha qaybta dhinaceeda: {{ui:Qalooc}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} iyo {{ui:Zebra}}, oo leh continuity (G0, G1 ama G2) lagu cabbiray dusha saxda ah iyo geesta ka xun intii aad weydiisay oo lagu liistay Dhibaatooyin oo leh hagaajinta Match. {{ui:Siman}} wuxuu cabbiraa khadadka hull-ka inflections iyo curvature jumps wuxuuna dib u dhisaa kuwa aan cadaalada lahayn tolerance-kaaga. Dusha waxa lagu kaydiyaa faylka qaybta ma beddelayo astaamaha qaybta. Eeg [Dusha xor ah (NURBS)](topic:nurbs-surfaces).
- **Workspace-ka Injineer.** Dooro {{ui:Injineer}} sanduuqa workspace-ka, dooro generator oo riix {{ui:Cusub}}: script wuxuu cabbiraa qayb sida waxa ay tahay inay sameyso (kulayl si ay u dhaqaaqdo, socodka, cadaadiska, agabka, habka daabacaadda) iyada oo la isticmaalayo qaacidooyin buugta ku qoran, kadibna wuu dhisaa, ka dibna wuxuu soo celinayaa tirooyinka uu isticmaalay iyo ilahooda, hubinta soo saarista iyo faylalka qalabka falanqaynta. Galinta isku mid ah waxay bixisaa qayb isku mid ah kombiyuutar kasta. Generator-ku waxa lagu hayaa qaybta, furidda qayb ma socodsiiso script. Eeg [Qayb fiisigiska ka timid: generators](topic:engineer-generators) iyo [Qor generator](topic:write-a-generator).

**Sawir-gacmeedka, naqshadaha iyo samaynta**

- **Sawir-gacmeed sawir ka.** {{ui:Astaanno}} › {{ui:Wax dheeraad ah}} › {{ui:Sawir-gacmeed sawir ka…}} wuxuu raacaa sawir qayb fidsan oo ku taal dhul sahlan (khadka dibedda iyo godadka) ama sawir qalin ah oo ah khado, qaansooyin iyo wareegyo. Hal dherer ayaad siisaa, hubi preview-ka oo samee sawir-gacmeedka. Eeg [Aasaaska sawir-gacmeedka](topic:sketch-basics#a-sketch-from-a-photo).
- **Miisaanka iyo kala-jarka daabacaadda.** {{ui:Dhoofi}} › {{ui:Miisaan daabacaadda (STL ama 3MF)…}} wuxuu miisaameeyaa dhidib kasta isagoo aan qaybta beddelin, tusaale ahaan iyada oo la siinayo ogolaansho yaraanshaha. {{ui:Dhoofi}} › {{ui:Kala-jar daabacaadda (zip oo qeybo ah)…}} wuxuu jarayaa qayb aad uga weyn saxanka daabacaadda qeybo lambar leh oo lagu xidho pegs, keys, dovetails, dowel holes ama magnet pockets. Eeg [Daabac 3D](topic:print-3d).
- {{ui:Dhoofi}} › {{ui:Xaashiyada la habeeyay u dhoofi G-code}} wuxuu akhriyaa DXF la habeeyay oo wuxuu sameeyaa hal barnaamij xaashi kasta iyada oo loo marayo post-ka aad dooratay: marka hore godadka iyo jarista, kadibna khadadka dibedda. Ma qorsheyso lead-ins, amarka jarista ama geesaha la wadaago. Eeg [Habee qaybaha fidsan xaashiyada](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Naqshado wax badan iskood.** {{ui:Xaashi}} › {{ui:Si toos ah}} wuxuu doortaa xaashiga A-cabbirka ugu yar ee muuqaalada ku haya miisaanka caadiga ah ee ugu weyn ilaa 1:1. {{ui:Godadka cabbiri}} wuxuu dhigaa calaamad xudun god kasta, hal callout cabbir kasta, iyo booska ka bilaabmaya geeska hoose ee bidix ee muuqaalka. Eeg [Samee naqshad](topic:drawing-pdf).

**App kasta**

- **Luuqadaha.** Apps-ka waxay yimaadaan 54 luuqadood. Kuwa ka sarreeya Ingiriisiga waa qabyo mashiin ah ilaa qof af-ka-hooyo ah uu akhriyo.
- **Safafka qalabka.** {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Safafka qalabka}} wuxuu doortaa Duub (sidii hore), 2 safaf ama 1 saf; bar aan ku habboonayn wuxuu u dhaqaaqaa dhinac ahaan. Ribbon-ka astaamaha PartCraft wuxuu muujinayaa qalabka ugu badan ee weyn, kuwa kale waxay ku jiraan badhanka kala-jarka.
- **Ku xiriir AI-gaaga.** Studio waa xarunta lagu xiriiro caawiye gaarka ah ee dhammaan siddeed apps-ka, oo leh ogolaansho akhri oo keliya, soo jeedin ama wax ka beddel app kasta. Caawiye xiriiray wuxuu qayb cabbiri karaa jumlad sida bracket loo culeys leeyahay, muujiyaa shaqadiisa iyo hubinta kasta, kadibna dhisaa; wuxuu sheegaa waxa uusan hubin (xoog-isku-urursanaan, daalka, creep-ka plastikada). Eeg [Isticmaal PartCraft oo leh caawiye AI](topic:use-with-ai-assistants).

### La hagaajiyay 0.8.1

- **Cursor-ka shaashadda buuxda oo go'a.** Xulashada hover-ka hadda waa la xakameeyay. Sababta waa akhrintayada ugu wanaagsan, lamana xaqiijin qofkii soo sheegay.
- **Luuqadda wakhtiga socodka.** Studio iyo nooca xirmada ah way beddeli karaan luuqadda intii ay socdaan; hore Ingiriisi keliya ayay ahaayeen. Weli lama tijaabin dhammaan dhulka: noo sheeg haddii luuqaddu ka beddelmin.

### Weli ma jiraan nooca hadda

- Ku xiriir AI-gaaga weli dhammaatay ma aha: xiriir hal riix oo Studio gudaha ah, connector-ka browser AI, furaha API-gaaga gudaha Studio iyo xirmada MCP ee la daabacay lama ballan qaadayo. Studio ma leh AI gaar ah.
- Studio lama saxiixin code: Windows waa laga yaabaa inay digniiso, macOS wuxuu weyddiinayaa midig-riix kadibna Fur. Eeg [Xallinta dhibaatada](topic:troubleshooting).
- Stack-ups weli hal jihe ayay tahay: eeg [Stack-ups-ka tolerance-ka](topic:tolerance-stackup).
- Kuwa kale waxa lagu taxay [Waxa weli aan la dhisin](topic:not-built-yet).

Isbeddelada hore waxay ku jiraan [Waxa cusub ee 0.7](topic:whats-new-0-7).
