---
title: Waxa cusub ee 0.9 (hore)
summary: PartCraft 0.9 wuxuu ku daraa fillets ka dhexeeya wejiyada iyo ka-dhigista dhumuc jidh, isku-dhisyo ka badan kun qayb, kaydka Dokumentiyada oo leh noocyo, add-on-ka Solid FEM ee xoogga, toban habka qaansooyinka, cabbirrada birta UK, marxalada daabacaadda iyo add-ons-ka daabacaadda resin-ka.
keywords: waxa cusub 0.9, nooca hore, waxa cusub, waxa cusub, xogta nooca, changelog, 0.9, fillet ka dhexeeya wejiyada, rolling ball, fillet geesaha badan, thicken, solid ka wejiyada, step shell, iges solid, scan fillets, isku-dhis weyn, muuqaal fudud, 20000 qayb, dokumentiyo, vault, check out, revision, release, meesha la isticmaalo, Rhino link, grasshopper, 3dm, cursors, factory floor, job queue, solid fem, finite element, von mises, natural frequency, arc methods, 3-point arc, uk steel sections, blue book, print stage, resin, goo, ctb, bed, lay flat, waxa cusub, release notes, changelog, isbeddel, 0.8, 0.8.1, nooca, astaamaha cusub, live analysis, update while editing, break it, what breaks first, load factor, nonlinear, yield, plastic strain, contact, calculix, motion study, clearance, surfaces, nurbs, fair, hull, zebra, engineer, generator, generated body, sketch from a photo, scale for printing, split for printing, shrinkage, nested sheets, g-code, drawing, dimension holes, assistant, mcp, luuqadaha, toolbar rows
from: 1dafd7c8
---

Tani waa waxa ka isbeddelay PartCraft 0.9, marka laga barbar dhigo 0.8.1. Dusha qalloocan hadda way isku xidhaan jidho adag, isku-dhisyada oo ka badan kun qayb ayay wali isticmaal ku noqdaan, Dokumentiyada vault-ku noocyada ayuu hayaa, add-on-ka Solid FEM-na xoogga qaybta ayuu hubiyaa. Wax kasta waxa uu sheegayaa meesha laga helayo.

## Cusub 0.9.1

- **Exact STEP export.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} iyo {{ui:STEP AP214 (exact solid)}} hadda way shaqeeyaan. Godyada, bosses-ka, fillets-ka, koonada, kubbadaha iyo torus-ka waxay ku qoran yihiin wejiyadooda dhabta ah, iyada oo wareegyada dhabta ah ay yihiin geesaha, si barnaamij CAD ama CAM kale u aqoonsado godka sida god. Spline sides, dhuunto la moodelay iyo meshes la soo dhoofiyay waxay ku sii jiraan facets toosan isla jidhka adag. Eeg [Export for printing, STEP and DXF](topic:export-files#for-other-cad-programs-step).
- **STEP in, exact STEP out.** Faylka STEP ee aad furto wuxuu ilaaliyaa wejiyadiisa toosan, silindarrada, koonada, kubbadaha iyo torus-ka, sidaas darteed {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} wuxuu dib ugu qoraa sida wejiyo dhab ah halkii uu ka qori lahaa facets: biim ay ku jiraan godyo boolood ah oo uu ka yimid mashiinka wax-iibiyaha wuxuu u baxaa isla wejiyadii uu ku soo galay, iyo wixii aad ku jartay. Wejiyada spline, la xoqay iyo revolve-ka faylka waxay ku sii jiraan facets, sidaas oo kale bodies-ka STL, OBJ iyo 3MF. Faylka STEP mar kale fur qaybta la kaydiyay hore. Eeg [Open a STEP file and build on it](topic:import-step).
- **True circles in the face DXF.** {{ui:Export}} › {{ui:DXF of the sketch or flat face}} oo wejig sinaan ah la doortay hadda wuxuu godyada wareega u qoraa wareeg, oo leh bartiisa iyo radius-kiisa, miis laser, plasma ama waterjet ah. Geesaha wareegsan ee kale weli facets ayay yihiin.
- **Exact STEP for the shop.** {{ui:Manufacture}} ku jira, {{ui:Exact STEP (work coordinates)}} wuxuu qaybta ku qoraa asalkeeda asalka shaqada setup-ka iyo Z tiirka qalabka, isku-xidhka uu G-code-ku isticmaalo. Eeg [Make toolpaths and G-code](topic:manufacture#exact-step-for-the-shop).

## Cusub

### Wejiyada iyo jidhadka

- **Fillet between faces.** Dooro {{ui:Surfaces}} sanduuqa {{ui:Workspace}}, kadibna {{ui:Fillet between faces}}. Dooro labada wejig ee hal jidh, qor radius-ka (iyo {{ui:Radius at the end (mm, 0 = the same)}} radius-ka oo ku beddelma geeska dhererka). Safka natiijada wuxuu sheegayaa intee le'eg fillet-ku uga fog yahay rolling ball-ka sida mithaal, radius-ka aan ku habboonayn waa la diidaa iyo wejiga la magacaabay. {{ui:Fillet several edges}} wuxuu geesaha badan hal jeer wareegaa; calaamee {{ui:Corners (sphere patch where three meet)}} si aad u hesho geesta kubbadda meesha saddex geesood oo wareegsan oo wejiyo sinaan ah ay isku kulmaan. Eeg [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **Thicken into a solid.** {{ui:Thicken into a solid}} isla shaqadaas wuxuu wejiga siiyaa dhumuc; {{ui:Other side}} wuxuu ku kordhiyaa dhinaca kale. Foldka ama isgoyska is-gudbiya waa la diidaa iyada oo wejiga iyo meesha la magacaabay.
- **Solids from surfaces.** Wejiyada la jaray waa la isku xidhi karaa union, subtract iyo intersect, waxaana qaybta lagu dhejiyaa hal tallaabo oo dib-u-celin ah. STEP wuxuu jidhka adag u qoraa hal shell xidhan, IGES-na hal solid; labaduba waxay soo akhrisaan sida solid. Haddii wejiyadu aanay ku dhigmin geesood ilaa geesood, faylku wuxuu helaa wejiyo kala go'an, safka xaaladda ayaa sheegaya. Solids-ka waxaa kale oo lagu samayn karaa node editor-ka; eeg [Node editor](topic:nodes).
- **Rim and variable fillets in scans.** Marka aad surfaces ku habayso scan, rim fillets (tori) iyo variable-radius fillets geesta toosan ku wareegsan ayaa la raadiyaa oo la liisanayaa radius-keeda. Waxaa lagu tijaabiyay scans la sameeyay oo keliya.

### Isku-dhisyada, dokumentiyada iyo xiriirrada

- **Large assemblies.** Qaybaha ah nuqul waxay wadaagaan hal mesh, {{ui:Views}} › {{ui:Lightweight display}} wuxuu sanduuqyo ku sawiraa si muuqaalku u sii socdo (wuu iska shido isku-dhisyada aad u weyn; dhaqdhaqaaqyada iyo isku-xirku wali qaybaha dhabta ah ayay isticmaalaan). Geedka qaybaha wuxuu muujinayaa safafkiisa ugu horreeya iyo badhanka {{ui:Show 700 more}} ee kuwa kale. Faylasha isku-dhisyada waxay haysan karaan ilaa 50,000 instances iyo 100,000 joints. Eeg [Build an assembly](topic:build-assembly).
- **Documents.** {{ui:Documents…}} kooxda **File** wuxuu furaa sanduuq ku saabsan folder-ka mashruuca: check out iyo check in, xarfaha noocyada, xaaladaha (shaqada socota, loo baahan yahay in la eego, la sii daayay, la soo afjaray), taariikhda, meesha la isticmaalo iyo liiska agabka. Eeg [Documents and revisions (the vault)](topic:documents-walkthrough).
- **Live Rhino link.** Hal script, `cadcraft_link.py`, wuxuu daawadaa dokumentiga Rhino ama Grasshopper oo wuxuu PartCraft u riixaa kaliya wixii isbeddelay, halkaas oo astaamaha la soo dhoofiyay ku dhisma qaabka cusub. Hal jihe ayuu yahay, wuxuuna u baahan yahay Studio. Eeg [Live .3dm link](topic:live-3dm-link).
- **See each other's cursors.** Shaqada wadaagga ah, cursor-ka qof kasta wuxuu muuqdaa magacyadiisa iyo astaamaha uu dooranayo. Eeg [Work live with others](topic:work-live).
- **Factory floor.** Ku shid add-on-ka Factory floor {{ui:Settings}} › {{ui:Add-ons}}. Marka aad barnaamij ku daabacdo {{ui:Manufacture}}, tab-kiisa wuxuu awoodaa inuu {{ui:Add to the factory job queue}} ama {{ui:Save as a job file}}. Mar weligeed ma diro mashiinna ma bilaabo.

### Falanqaynta iyo qaybaha

- **Solid FEM add-on.** Ku shid {{ui:Solid FEM}} {{ui:Settings}} › {{ui:Add-ons}} (wuu damaan yahay ilaa aad shido) oo tab {{ui:Solid FEM}} ayaa ka soo muuqanaya panel-ka midig. {{ui:Mesh the part}}, dooro wejiyada go'an iyo culeysyada muuqaalka 3D, {{ui:Solve}}, oo muuji displacement, von Mises stress ama mode shape adigoo isticmaalaya {{ui:Show on the model}}. Eeg [Solid FEM: a stress check](topic:solid-fem-check).
- **Arc in sketches, ten ways.** Fallaadha ku xigta {{ui:Arc}} qalab-sanduuqa sketch-ka ayaa liisanaysa 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length iyo Continue. Eeg [Draw an arc by ten methods](topic:sketch-arc-methods).
- **UK steel sizes.** Weldments waxay isticmaali karaan 976 UK sections (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); ku qor cabbir sida `305x165x40 UB`. Eeg [Structural members](topic:structural-members).

### Daabacaadda

- **Print stage.** Badhanka {{ui:Print stage}} qalab-sanduuqa (add-on 3D Print, oo furan caadi ahaan) wuxuu jidhadka qaybtaada ku dhigaa sariir la jarjaray: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, kadibna {{ui:Send to 3D printer}} oo ku dhex mara USB, Klipper (Moonraker), OctoPrint ama PrusaLink. Waxba lama diro ilaa aad xaqiijiso, qaybtaadana weligeed ma beddelmayso. Haddii aad doonto faylka STL ama 3MF, eeg [Get a part ready for 3D printing](topic:print-3d).
- **Resin printing.** Add-ons {{ui:Settings}} › {{ui:Add-ons}}, oo dhammaantood damaan ilaa aad shido: slicer resin ah, imtixaan exposure ah, iyo qaabka faylalka Elegoo GOO, SL1, Chitubox CBDDLP/CTB iyo Anycubic. Slicing-ku wuxuu ku shaqeeyaa worker thread, sidaas darteed bogga waa jawaabaya.

## Dhammaan apps-ka

- Hover hint kasta waa Bootstrap tooltip.
- Start tip-ka wuxuu leeyahay badhanka xidhista; wuu xirnaan doonaa.
- Safka tab-yada panel-ka oo aan ku habboonayn wuxuu u socdaa dhinac ahaan halkii uu ka go'i lahaa.
- Tab-ka browser-ka wuxuu muujiyaa magaca dokumentiga furan ka hor PartCraft | CadCraft.
- {{ui:Settings}} wuxuu muujiyaa workspace {{ui:Layout}} sida liis hoos-u-dhac ah oo doorashooyin, sanduuqa luuqadaha wuxuu liistaa luuqad kasta oo dhisme ku jirta.
- Miisaanka iyo Heerkulka waa nooc unit ah oo ku jira dejinta Units.

## La hagaajiyay

- Menu-ga Arc ee sketch-ka hadda wuxuu liistaa habka kasta.
- Qaybta add-on-ka iyo magaca tab-ka browser-ka waa la saxay 2026-11-09.

## Xaddidaadaha run ahaan

- Exact STEP waxa dib loo akhriyay OpenCascade (solids sax ah, mugga oo la mid ah kuwa gacanta lagu xisaabiyay). Weli ma furna barnaamij kasta oo CAD ama CAM ah, isku-dhisyada ma qoro exact STEP.
- Weli wax lagu daabacay printer dhab ah ma jiro. Slicing, G-code iyo faylalka resin waxaa akhriyay barnaamijyadeenna ama printer-ka lagu beddelay; mid ka mid ah qaababka resin lama soo dejin printer dhab ah, cabbirrada printer-ka iyo exposures-ku waa bilow.
- Solid FEM waa toosan, isotropic, elastic, hal material qaybtiisa, aan contact, yielding ama buckling lahayn. Stress-ka meelaha go'an iyo geesaha dhaqsan wuxuu ku xidhan yahay mesh-ka. Waa caawin hubin, ma aha mid injineer dib u eegay.
- Waqtiyada isku-dhisyada weyn server aan GPU lahayn ayaa laga helay; frame buuxa oo faahfaahin buuxa leh oo ah 20,000 qayb weli wuxuu qaadaa dhowr ilbiriqsi halkaas.
- Fillets waxay ku shaqeeyaan labada wejig; ma jiro vertex blend guud ama fillet ka dhexeeya wejiyo aan isku kulmin.
- Rhino link-ka weligiis lama socodsiin Rhino ama Grasshopper dhab ah. Documents waxaa isticmaalay laba barnaamij oo ku jira hal folder, ma aha laba qof oo ku jira shabakad.
- Qalloocinta wejiyada scan dhab ah laguma sameyn gacanta. Luuqadaha aan Ingiriisi ahayn waa qabyo mashiin ah.
- Windows installers-ka lama saxiixin code-ka, macOS disk image-ka lama notarize gareyn. Eeg [Troubleshooting](topic:troubleshooting).

Isbeddellada hore waxay ku jiraan [What's new in 0.7](topic:whats-new-0-7).

## Hore: 0.8 iyo 0.8.1

Tani waa waxa ka isbeddelay PartCraft 0.8 iyo 0.8.1, marka laga barbar dhigo 0.7. Simulasho waxay ku jawaabaysaa intaad wax beddelayso oo waxay kuu sheegaysaa waxa marka hore jabi doona; isku-dhisyadu waxay helaan daraasadaha dhaqdhaqaaqa, workspaces-ka cusubi waxay sameeyaan dusha qalloocan iyo qaybo cabbirkooda laga helay fiisigisku. 0.8.1 waa sii-deyn yar oo hagaajin ah.

### Cusub

**Simulasho**

- **Update while I edit.** Calaamee {{ui:Update while I edit}} qaybta Solve oo jawaabaha ayaa raacaya tafatirkaaga. Beddel cabbir, culeys ama agab oo jawaab degdeg ah, oo lagu sameeyay elements afar jeer ka weyn, ayaa isla markiiba soo muuqda; markaad joogsato qiyaastii hal ilbiriqsi, jawaabta daraasadda ee la hagaajiyay ayaa beddelaysa kii hore. Natiijooyinku waxay sheegaan kii aad eegayso. Cantilever bir ah, jawaabta degdega ahi waxay ku dhowayd 1 % deflection iyo qiyaastii 4 % stress ee jawaabta la hagaajiyay. Eeg [Check stress and deflection](topic:simulation#update-while-you-edit-live).
- **What breaks first.** Daraasad static ama buckling ah, {{ui:What breaks first?}} qaybta **Break it** wuxuu culeysyada u qiyaasaa ilaa qaybtu ka jabto. Wuxuu liisanayaa, kan ugu xun marka hore, load factor-ka ilaa yield-ka koowaad (calaamad cas oo meesha stress-ku kor u kacayo) iyo load factor-ka ilaa buckling. Factor ka yar 1 wuxuu macnaheedu yahay qaybtu horey ugu jabtay sida loo culeysiyay, Problems wuxuu muujiyaa khalad. Factor-yadu waxay ka yimaadaan daraasad toosan, sidaas darteed waxay sax yihiin sida ay daraasadu sax tahay. Eeg [Check stress and deflection](topic:simulation#find-out-what-breaks-first-break-it).
- **Yielding and contact.** Laba nooc oo daraasad oo dheeraad ah: mid aan toosnayn oo agabku raacayo xadkiisa toosan ilaa yield stress, ka dibna jilicsan, oo plastic strain la sawiro; iyo mid contact ah oo qaybo kala go'an ku riixaan midba midka kale (aan is-diidin) ama ku sii adkaadaan (bonded). Tallaabo culeys oo aan degi karin, ama qaybo aad uga dhex-galaan midba midka kale, waxay muuqdaan panel-ka Problems. Friction, socod weyn, wareeg weyn, deflections weyn iyo fatigue lama xalin. Eeg [Check stress and deflection](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Decks for CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} wuxuu daraasadda u kaydiyaa CalculiX, barnaamij kale oo aad rakibto oo aad shaqeyso; {{ui:Export}} › {{ui:CalculiX results (.frd)}} wuxuu faylka natiijadiisa ku akhriyaa isla meshka. PartCraft ma bilaabo barnaamijkaas, waxayna sheegtaa haddii qaybtu isbeddelay tan iyo markii la kaydiyay deck-ka.

**Isku-dhisyada**

- **Motion studies.** {{ui:Assembly}} › {{ui:Motion}} wuxuu wadaa hal isku-xirka qiimihiisa wakhti aad siisay (xawaare joogto ah, dhowaad, sine, ama soo-baxa iyo dib-u-noqoshada), isku-dhisyada wuxuu ku dhigaa tallaabo kasta isku-xirkiisa iyo loops-ka xidhan, wuxuuna sheegaa waxa is-dhex galaya iyo sida ay u dhowyihiin qaybaha. {{ui:Add a point}} wuxuu sawiraa booska dhibicda, xawaaraha iyo kordhinta, qiimaha isku-xirka iyo clearance-ka wakhtiga ka sokow; {{ui:Save CSV}} iyo {{ui:Save plot}} ayaa qoraa. Ka dib {{ui:Run}}, Step through the run bar wuxuu isku-dhisyada u raraa tallaabo kasta. Dejinta daraasadda waxa lagu kaydiyaa faylka isku-dhisyada. Xawaaraha iyo kordhinta waxa laga xisaabiyaa booska la duubay, sidaas darteed isticmaal tallaabo badan haddii dhibic degdeg ah ay hooseysan tahay. Eeg [Check an assembly for clashes and motion](topic:check-assembly#a-motion-study).

**Wejiyada iyo qaybaha physics-ka**

- **A Surfaces workspace.** Dooro {{ui:Surfaces}} sanduuqa {{ui:Workspace}} oo ka soo qaad NURBS curves iyo surfaces qaybta ag: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} iyo {{ui:Zebra}}, oo leh continuity (G0, G1 ama G2) lagu cabbiray wejiyada saxda ah, iyo geesta ka xun intii aad codsatay oo lagu liistay Problems oo leh Match fix. {{ui:Fair}} wuxuu cabbiraa hull lines inflections iyo curvature jumps wuxuuna dib u dhisaa kuwa aan fiicnayn tolerance-kaaga dhexdiisa. Wejiyada waxa lagu kaydiyaa faylka qaybta ma beddelayaan astaamaha qaybta. Eeg [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **The Engineer workspace.** Dooro {{ui:Engineer}} sanduuqa workspace-ka, dooro generator oo riix {{ui:New}}: script ayaa qaybta ka cabbiraa waxa ay u baahan tahay inay sameyso (kulayl u guurin, socodyo, cadaadis, agab, habka daabacaadda) iyada oo adeegsanaya qaacidooyinka buugga, kadibna dhisaa, ka dibna dib u siiya tirooyinka uu isticmaalay ilaha ay ka yimaadeen, hubinta wax-soo-saarka iyo faylalka qalabka falanqaynta. Isla gelinta waxay siiyaa isla qaybta kombiyuutar kasta. Generator-ka waxa lagu hayaa qaybta, furidda qaybta mar kasta ma socodsiiso script-ka. Eeg [Parts from physics: generators](topic:engineer-generators) iyo [Write a generator](topic:write-a-generator).

**Naqshadaynta, drawings iyo samaynta**

- **A sketch from a photo.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} wuxuu raacaa sawir qaybta toosan oo dhulka caadiga ah (dhinaca iyo godyada) ama sawir qalin ah oo lagu beddelo xariiqyo, qaansooyin iyo wareegyo. Hal dherer ayaa la siiyaa, horudhaca ayaa la hubiyaa, kadibna sketch-ka ayaa la sameeyaa. Eeg [Sketching basics](topic:sketch-basics#a-sketch-from-a-photo).
- **Scale and split for printing.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} wuxuu miisaanka u beddelaa tirooyinka mid kasta oo tiir ah iyada oo aan qaybta la beddelin, tusaale ahaan iyada oo lagu daro dhaaftida yaraanta. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} wuxuu qaybta weyn ee aan ku habboonayn sariirkaaga u jaraa qaybo tiro leh oo ku xidhma pegs, keys, dovetails, dowel holes ama magnet pockets. Eeg [Print in 3D](topic:print-3d).
- **Nested sheets to G-code.** {{ui:Export}} › {{ui:Nested sheets to G-code}} wuxuu akhrinayaa DXF la habeeyay wuxuuna sameeyaa barnaamij kasta oo saxan ah iyada oo loo marayo post-ka aad doorato: godyada iyo goynta marka hore, kadibna geesaha. Ma qorsheeyo lead-ins, amarka goynta ama geesaha la wadaago. Eeg [Nest flat parts on sheets](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Drawings that do more themselves.** {{ui:Sheet}} › {{ui:Automatic}} wuxuu doortaa xaashida A-cabbirka ugu yar oo ku hayn muuqaalada miisaanka caadiga ah ee ugu weyn ilaa 1:1. {{ui:Dimension the holes}} wuxuu calaamad dhexe ku dhigaa godkasta, hal callout cabbir kasta, iyo booska laga bilaabo geeska hoose ee bidix ee muuqaalka. Eeg [Make a drawing](topic:drawing-pdf).

**Dhammaan apps-ka**

- **Languages.** Apps-ku waxay yimaadaan 54 luuqadood. Kuwa ka sarreeya Ingiriisiga waa qabyo mashiin ah ilaa uu hadal-hayn dabiici ah akhriyo.
- **Toolbar rows.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} wuxuu doortaa Wrap (sida hore), 2 safafka ama 1 safka; bar aan ku habboonayn wuxuu u socdaa dhinac ahaan. Feature ribbon-ka PartCraft wuxuu muujiyaa qalabka ugu badan ee weyn, oo kuwa kale wuxuu ku qariyaa badhanka kala-qaybsan.
- **Connect your AI.** Studio waa xarunta lagu xidhayo caawiye aad leedahay dhammaan siddeed apps-ka, oo leh ogolaansho akhris, soo-jeedin ama tafatir app kasta. Caawiye xidhan ayaa qaybta ka dhigi kara sentence sida bracket culeys ahaan, muujisa shaqadiisa iyo hubinta oo dhan, oo dhisaa; wuxuu sheegaa waxa aanu hubin (stress concentration, fatigue, creep ee plastics-ka). Eeg [Use PartCraft with an AI assistant](topic:use-with-ai-assistants).

### Hagaajiyay 0.8.1

- **Full-screen cursor freeze.** Hover pick-ka hadda waa la xakameeyay. Sababta waa akhrintayada ugu fiican ee aanu haysano, lamana xaqiijin shaqsiga soo sheegay.
- **Language at run time.** Studio iyo nooca lagu xidhay wuxuu beddeli karaa luuqada inta uu socdo; hore Ingiriisi kaliya ayuu ahaa. Weli lama tijaabin dhammaan madbacadaha: noo sheeg haddii luuqadu ka bedelmin.

### Weli nooca tan kuma jiro

- Connect your AI weli lama dhammeeyin: ku xidh mid-hal gujid gudaha Studio, isku xidhka bogga ee browser AI, furaha API-gaaga gudaha Studio iyo xirmada MCP ee la daabacay lama balan qaaday. Studio ma lahan AI u gaar ah.
- Studio lama saxiixin code-ka: Windows wuu digi karaa, macOS wuxuu kugu weydiinayaa right-click kadibna Open. Eeg [Troubleshooting](topic:troubleshooting).
- Stack-ups weli waxay yihiin hal jihe: eeg [Tolerance stack-ups](topic:tolerance-stackup).
- Qaybta kale waxa lagu liistay [What is not built yet](topic:not-built-yet).

Isbeddellada hore waxay ku jiraan [What's new in 0.7](topic:whats-new-0-7).
