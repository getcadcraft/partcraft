---
title: Samee toolpath iyo G-code (Manufacture)
summary: Deji alaabta iyo asalka shaqada, dooro qalabka, ku dar hawlaha wejiga, pocket, contour, drill iyo chamfer adigoo dooranaya wejiyada, dhammee moodeelka oo dhan 3D (parallel, scallop), simulate alaabta ka dhanka ah moodeelka gouges iyo waqtiga wareegga, oo soo deji G-code laga bilaabo mid ka mid ah saddex post-yada la dhisay ama mid aad tafatirto.
keywords: exact step, step-ka dukaanka, kala-xidhiidhka shaqada, cam handoff, parallel, scallop, dhammaystirka 3D, finishing, ball nose, maktabadda qalabka, edit post, custom post, post editor, adaptive, adaptive clearing, constant engagement, trochoidal, hsm, high speed machining, manufacture, CAM, toolpath, G-code, NC, CNC, mill, milling, pocket, contour, profile, facing, drill, peck, G83, G81, G73, chamfer, stock, work offset, G54, post processor, GRBL, LinuxCNC, feeds and speeds, simulation, gouge, cycle time
from: beeb29aa
---

Workspace-ka Manufacture wuxuu qaybta u beddelaa toolpaths-yo mashiinka milling-ka 3-axis, wuxuuna u qoraa G-code. Hawlaha badankood waa **2.5-axis**: qalabku wuu istaagaa toosan, derbiyada si toos ah ayaa loo gooyaa, dhulkana si siman. **Parallel** iyo **Scallop** waxay dhammeeyaan wejiyada gobolka ah 3D (eeg [3D finishing](topic:finish-3d)); qalabku weli wuu istaagaa toosan (saddex axis, ma jiro foorar). Waxay ka shaqeeyaan wejiyada magaca leh ee mesh kernel-ku siiyo qaybta (eeg [Mesh kernel-ka](topic:solid-kernels)).

Dhismaha lab: hubi barnaamij kasta simulator-ka kontroolkaaga, oo marka hore ku socodsii hawada ka sare alaabta.

## Deji

1. Dooro **Manufacture** workspace switcher-ka, kadibna {{ui:New setup}}.
2. Tab-ka **Setup** dooro:
   - **Tool axis (+Z)**: jihada uu qalabku ugu tilmaamo qaybta. World +Y (sare ee PartCraft) waa caadiga; machine X waxay noqotaa world X, machine Y waa world −Z.
   - **Work origin (G54)**: geesta alaabta ama bartamaha, sare ama hoose, bartamaha sare ee moodeelka, ama asalka moodeelka.
   - **Stock**: sanduuq ama silinder, midkood moodeelka oo leh offsets (dhinacyada, sare, hoose) ama cabbir go'an.
   - **Material** (wuxuu dejiyaa feeds iyo xawaaraha bilowga), **post** (kontroolka), xawaaraha ugu badan ee spindle-ka mashiinka, rapid rate iyo waqtiga beddelka qalabka, coolant iyo tirada barnaamijka.

## Qalabka

Tab-ka **Tools** wuxuu haystaa maktabada: flat, ball iyo bull nose end mills, drills, chamfer mills iyo face mills, mid kasta oo leh lambar T, dhexroor, flutes iyo dherer flute (iyo corner radius, point ama chamfer angle meelaha ay khuseeyaan).

Qalabkayga waxaa lagu kaydin karaa browser-ka oo lagu wareejin karaa kombiyuutarro kale sida fayl: eeg [Maktabadda qalabka](topic:tool-library).

Xawaaraha spindle-ka iyo feed-ka waxay ka imanayaan alaabta: n = 1000 × cutting speed / (π × dhexroor), feed = n × flutes × chip load (drills: n × feed per rev). Tirooyinkani waa bilow kaxeysan oo laga soo qaatay kala duwanaanshaha la daabacay, ma aha kuwo mashiinkaaga loo habeeyay; ku qor xawaaraha cutting-ka, chip load, rpm ama feed-ka soo saaraha qalabkaaga si aad uga dhaafto. Marka xawaarahu ka dhaafo ugu badnaanta mashiinka, wuu joogsadaa oo feed-ku wuu raacaa, si chip load-ku u joogto.

## Ku dar hawlaha

Badhanka kasta oo toolbar-ka ku jira wuxuu ku daraa hawl, meelaha u baahan geometry-ga ahna wuxuu bilaabaa doorashada: guji wejiyada ama geesaha muuqaalka (mar kale guji si aad ka saarto), kadibna {{ui:Done picking}} ama {{key:Esc}}.

| Hawl | Doorasho | Waxa uu sameeyaa |
|---|---|---|
| {{ui:Face}} | midna | Marin zig-zag ah oo dhammaan alaabta ka gudub, geesaha ka dhaaf, ilaa sare ee moodeelka |
| {{ui:Pocket}} | wejig dhul oo fidsan, god wareegsan, ama silsilad geesaha xidhan | Wuxuu nadiifiyaa gobolka marin offset ah gudaha-ka-dibadda, qoto-dhac kasta; islands (wejiyo kor u taagan oo dhulka ku jira) way ka tagaan; dhul dhinac kasta ka furan (aan waxba ka sarreyn dibaddiisa) waa la nadiifiyaa ilaa geesta alaabta |
| {{ui:Adaptive}} | isla sida Pocket | Wuxuu nadiifiyaa isla gobolka marin mid kasta oo gooyo ballac la dejiyay (**Engagement**, qayb ka mid ah dhexroorka), si gooyaha aanu waligiis u gooyin slot ballac buuxa, xataa geeska; wuxuu galaa helix ah wuxuuna dhammeeyaa darbiyada heer kasta. Gooyo yar ayaa oggolaysa qoto-dhac qoto dheer iyo feed sare |
| {{ui:Contour}} | wejig dhul ah (geesteeda), wejig wareegsan, ama geesaha | Wuxuu raacaa geesta oo offset-ka qalabka radius-ka, dibadda ama gudaha, lead-in iyo lead-out qaansooyin iyo tabs ikhtiyaari ah |
| {{ui:Drill}} | godad (guji darbiga god ama geesta) | Wuxuu ku dhuumaa god kasta cycle canned ah: peck (G83), drill (G81) ama chip break (G73); ama sii dhexroor si aad u dhuumato god kasta oo cabbirkaas ah |
| {{ui:Chamfer}} | geesta wejig ama geesaha | Wuxuu chamfer mill-ka ku socodsiiyaa geesta si uu u gooyo ballaca aad dejisay |
| {{ui:Parallel}} | midna (moodeelka oo dhan) | Dhammaystirka 3D ee xariiqyada parallel ah xagal kasta, adigoo raacaya dusha qalabka ball, bull-nose ama flat. Eeg [3D finishing](topic:finish-3d) |
| {{ui:Scallop}} | midna (moodeelka oo dhan) | Dhammaystirka 3D marin masaafo go'an oo kala fog dusha, si ridge-ka u dhexeeya u yeesho sarreynta aad weydiisay |

Dooro hawl liiska si aad u beddesho qalabkeeda, heights (clearance, retract, feed height, top, bottom), step-down, stepover, alaabta la reebayo, dhammaystirka marinka, entry (helix, ramp ama plunge), climb milling, tabs ama cycle. {{ui:Up}} iyo {{ui:Down}} dib ayay u habeeyaan, {{ui:Suppress}} wuxuu ka saaraa, {{ui:Delete}} wuu tirtiraa. Wax kasta waxa ku jira taariikhda ka noqoshada waxaana lagu kaydiyaa faylka qaybta.

Stepover-ka pocket-ka waa ugu badnaan badh dhexroorka qalabka, si barta kasta oo dhulkeeda ah ay ku jirto hal radius qalab marin kasta. Geesaha gudaha waxay ilaaliyaan radius-ka qalabka.

**Adaptive clearing** wuxuu hayaa engagement-ka gooyaha qiime u dhow hal qiime. Engagement 0.15 oo dhexroorka ah waa engagement angle ah qiyaastii 46°: qaybta geesta gooyaha ee alaabta ku jirta. Pocket offset ah, bilaabaha ayuu gooyaa ballac buuxa marinka koowaad, wuxuuna ku wareegaa geesaha gudaha kasta. Marinada u dhexeeya qalabku wuxuu sii joogaa hoos meelaha uu ku dhaqaaqo gooyo hawo, wuxuu kor u kacaa oo hoos u degaa gooyo hawo meelaha kale. Marinada waxaa lagu xisaabiyaa grid fiican gobolka (unugyada qiyaastii laba meelood meel radius-ka qalabka), sidaas darteed engagement-ka wuxuu gaari karaa qiyaastii unug ballac dhab ah ka weyn intii la dejiyay; darbiyada si sax ah ayaa loo dhammeeyaa. Gobol furan oo weyn wuxuu samaynayaa barnaamij dheer oo dhaqdhaqaaqyo gaaban badan.

## Simulate

Toolpaths-yada mar kasta dib ayaa loo sameeyaa marka wax la beddelo (qaybtana). {{ui:Simulate}} wuxuu sidoo kale muujiyaa alaabta ka hadhay barnaamijka oo dhan. Panel-ku wuxuu muujiyaa:

- **Cycle time**: dhaqdhaqaaqyada feed-ka xawaarahooda feed-ka, rapids sida khadad toos ah rapid rate-ka setup-ka, oo ku dar waqtiga beddelka qalabka. Mashiinada dhabta ahi way dheereeyaan.
- **Gouges**: meelaha qalabku uu ka hoosaynayo 0.02 mm dusha qaybta. Calaamadaha casaanka ah ayaa muujiya meelahaas muuqaalka.
- **Alaabta ku hadhay qaybta**.

Stock-ku waa height map sare (Z-map), sidaas darteed ma muujin karo undercuts. Jiid **Playback** si aad u dhaqaajiso qalabka barnaamijka dhexdiisa. Muuqaalka, dhaqdhaqaaqyada feed-ka waa adag yihiin, rapids-ka dashed, midab kasta hal hawl.

Marka **Muuji alaabta la simulay** la shido, alaabta waxaa lagu midabeeyaa moodeelka ka dhanka ah, unug unug: **cagaar** meesha ay ku taal moodeelka (dhexdiisa 0.02 mm), **casaan** meesha qalabku ku gooyay moodeelka, iyo meesha alaabta lagu hadhay moodeelka **jaalle** oo ah maqaar khafiif ah, **orange** oo badan, ilaa **midabka cad** ee alaabta aan la gooyin marka 1 mm ama ka badan. Midabyada waxaa dib loo sameeyaa marka wax la beddelo, isla height map-ka oo kale ee tirooyinka panel-ka ku jira, sidaas darteed cagaarka iyo casaanku waa isku waafaqsan yihiin Gouges line-ka. Chamfer wuxuu si ula kac ah u gooyaa moodeelka wuxuuna muujiyaa casaan geeskiisa.

## Post G-code

Dooro kontroolka hoos **Post** oo riix {{ui:Download G-code}} (ama {{ui:Post}} toolbar-ka):

| Kontroolka | Faylka | Faahfaahin |
|---|---|---|
| Fanuc-style ISO | .nc | %, lambarka O, lambarada khadka, T M6 oo leh G43 H, canned cycles |
| GRBL | .nc | Ma jiro beddele qalab ama canned cycles: beddelka qalabka wuxuu joogsadaa M0, dhuumashada waxaa loo qoraa sida dhaqdhaqaaq fudud |
| LinuxCNC | .ngc | T M6 oo leh G43 H, canned cycles, M2 |
| Kaaga | kasta | Post aad qortay ama beddeshay: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Fayl kasta wuxuu ku bilaabmaa faallooyin barnaamijka, alaabta, offset-ka shaqada iyo qalabka. Isku xidhka waxaa lagu qoraa millimitirada 3 meelood. {{ui:Toolpath CSV}} iyo {{ui:Toolpath JSON}} waxay dhoofiyaan dhaqdhaqaaqyada laftoodba.

**Hubi wax soo saarka simulator-ka mashiinkaaga ka hor inta aadan gooyin, oo marka hore ku socodsii hawada ka sare alaabta.** Saddexda post ee la dhisay waa bilow kuwa raacaya habdhaqanka kontroolada ee la qoray; ma aha kuwo laga caddeeyay mashiin gaar ah. Post aad beddelto waa mid aad caddeysid. Sida loo qoro: [Post processors](topic:post-processors).

## Exact STEP dukaanka

Hoosta badhamada G-code ee tab-ka **Operations**, {{ui:Exact STEP (work coordinates)}} wuxuu soo dejiyaa `<part>-work.step`: qaybta sida jidh saxda ah (silinderada dhabta ah ee godadka iyo bosses, wareegyada dhabta ah ee geesahooda) oo asalkeeda ku yaal work origin-ka setup-kan, Z-na raacaya tool axis. Kuwaasi waa kala-xidhiidhka G-code-ku isticmaalo, sidaas darteed barnaamijka CAM ee dukaanka ama checker-ka ayaa moodeelka la jaanqaadaya barnaamijka iyadoon la dhaqaajin. Faylku wuxuu ka kooban yahay qaybta oo keliya, ma aha alaabta ama toolpaths-yada.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} wuxuu qoraa isla jidhka meesha qaybta ku taal (Z sare): eeg [Dhoofinta daabacaadda, STEP iyo DXF](topic:export-files#for-other-cad-programs-step).

## Xadka

- Pockets, contours, drilling iyo chamfers waa 2.5-axis. Wejiyada gobolka ah waa la dhammayn karaa 3D ([parallel iyo scallop](topic:finish-3d)) laakiin lama dhigi karo 3D roughing (cone waxaa laga tegaa tallaabo ilaa aad dhammaystirto), ma jirto rest machining. Adaptive clearing waa 2D (dhul siman).
- Saddex axis oo keliya: ma jiro foorar, ma jiro turning, ma jiro hubin.
- Holders iyo shanks lama hubiyo collision; digniin ayaa soo baxda marka gooyo ka qoto dheer tahay flute length.
- Feeds iyo speeds waa qiyamo bilow. Post waa qoraal aad tafatiri kartid, laakiin wuxuu go'aaminayaa oo kaliya sida dhaqdhaqaaqyada loo qoro; ma beddeli karo toolpath-ka, ma ku dari karo axes, ma garanayo mashiinkaaga ([Post processors](topic:post-processors) wuxuu sheegayaa waxa aanu sameyn karin).

## U dir barnaamijka mashiinka

Desktop-ka CadCraft Studio, oo leh mashiin lagu dejiyay Studio, **U dir mashiin…** wuxuu ka soo muuqdaa dhinaca {{ui:Download G-code}}, wuxuuna soo gelinayaa isla barnaamijka mashiinka shabakadaada. Looma bilaabo PartCraft-ka: bilow mashiinka marka uu cad yahay. Browser-ka badhanku ma muuqdo (bogga web-ku ma gaari karo mashiin shabakadaada): soo deji barnaamijka halkii.
