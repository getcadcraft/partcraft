---
title: Yenza izindlela zethuluzi ne-G-code (Ukukhiqiza)
summary: Setha isitoko nemvelaphi yomsebenzi, khetha amathuluzi, engeza imisebenzi yobuso, i-pocket, i-contour, ukubhoboza nokusika i-chamfer ngokukhetha ubuso, qeda imodeli yonke nge-3D (nxande, iskalobhu), lingisa isitoko namodeli ukuze uthole ukugawuka nesikhathi sokusebenza, bese uyalanda i-G-code kusuka kwezimbili ezakhelwe ngaphakathi noma kuhlelo oluhlelwe nguwe.
keywords: exact step, step wokusebenza, izixhumanisi zomsebenzi, ukudlulisa kwe-cam, nxande, iskalobhu, ukuqedwa nge-3d, ukuqeda, ibhola, umtapo wamathuluzi, hlela i-post, post engokwezifiso, umhleli we-post, adaptive, ukususwa okuhlala njalo, trochoidal, hsm, ukukhiqiza ngesivinini esikhulu, manufacture, CAM, indlela yethuluzi, G-code, NC, CNC, mill, milling, pocket, contour, profile, ukuhlanza ubuso, ukubhoboza, peck, G83, G81, G73, chamfer, isitoko, ukushintshwa komsebenzi, G54, post processor, GRBL, LinuxCNC, izinga lokondla nesivinini, ukulingisa, ukugawuka, isikhathi sokusebenza
from: f8a03be8
---

Isikhala sokusebenza se-Manufacture sishintsha imodeli ibe yizindlela zethuluzi bese isibhala njenge-G-code. Imisebenzi eminingi ngu-**milling engu-2.5-eksisi**: ithuluzi lihlala limile, izindonga zisikwa ziqonde phansi nezindonga zibe nezisekelo ezisicaba. I-**3D rough** ne-**Rest** zihlanza izingxenye ezigobile ngo-3D ([Ukuhlanzwa nge-3D nokusala okusele](topic:rough-3d)); i-**Parallel** ne-**Scallop** ziqeda zona ([Ukuqedwa nge-3D](topic:finish-3d)). Emshinini onama-eksisi azungezayo, noma yimuphi umsebenzi ungaba nethuluzi elithambekile, futhi imisebenzi emibili ihambisa ama-eksisi azungezayo ngenkathi isika ([Ukusebenza nama-eksisi ama-4 nama-5](topic:multi-axis)). Kukhona imisebenzi yomshini wokuthenda ([Ukuthenda](topic:turning)) nowephrobhu lokuthinta ([Iprobhu](topic:probing)). Isebenza ngobuso obubizwe ngamagama i-kernel ye-mesh inikeza ingxenye (bona [I-mesh kernel](topic:solid-kernels)).

Ukwakhiwa kwelabhorethri: hlola yonke inhlelo ngesimulator somlawuli wakho, futhi uyiqhube emoyeni ngaphezu kwesitoko kuqala.

## Setha

1. Khetha **Manufacture** kwisishintshi sesikhala sokusebenza, bese {{ui:New setup}}.
2. Ethebhini le-**Setup** khetha:
   - **I-eksisi yethuluzi (+Z)**: ithuluzi libheke ngasiphi isiqondiso engxenyeni. I-World +Y (ephezulu ye-PartCraft) yiyona ezenzakalelayo; i-X yomshini ibe yi-X yomhlaba, ne-Y yomshini ibe yi−Z yomhlaba.
   - **Imvelaphi yomsebenzi (G54)**: ikhona yesitoko noma maphakathi, phezulu noma phansi, maphakathi kophezulu wemodeli, noma imvelaphi yemodeli.
   - **Isitoko**: ibhokisi noma isilinda, noma imodeli plus okuseduze (ezinhlangothini, phezulu, phansi) noma usayizi osethiwe.
   - **Impahla** (isetha izinga lokuqala lokondla nesivinini), i-**post** (umlawuli), isivinini esikhulu sesipindle yomshini, izinga lokuhamba ngokushesha nesikhathi sokushintsha ithuluzi, i-coolant nenombolo yohlelo.

## Amathuluzi

Ithebhu ethi **Amathuluzi** iqukethe umtapo: ama-end mill athambile, abhola nama-bull nose, amadrill, amamilling e-chamfer namamilling obuso, ngalinye linenombolo ye-T, ububanzi, ama-flute nobude be-flute (kanye ne-corner radius, i-point noma i-chamfer angle lapho zisebenza khona).

Amathuluzi ami angalondolozwa esiphequluli futhi ahanjiswe phakathi kwamakhompyutha njengefayela: bona [Umtapo wamathuluzi](topic:tool-library).

Isivinini sespindle nokondla kuvela ezintweni: n = 1000 × isivinini sokusika / (π × ububanzi), ukondla = n × ama-flute × i-chip load (ama-drill: n × ukondla ngokuzungeza). Lezi yizinombolo ezilondekile zokuqala ezivela emikhawulweni ebhaliwe, hhayi ezilungiselelwe umshini wakho; thayipha isivinini sokusika, i-chip load, i-rpm noma ukondla okusuka kumenzi wethuluzi lakho ukuze ukushintshe. Lapho isivinini sedlula okukhulu komshini kuyabanjwa lapho futhi ukondla kulandela, kugcinwa i-chip load.

## Engeza imisebenzi

Iqhosha ngalinye ethuluzini lengeza umsebenzi, futhi lapho kudingeka ijiyometri, liyaqala ukukhetha: chofoza ubuso noma imiphetho embonweni (chofoza futhi ukuze wehlise elinye), bese {{ui:Done picking}} noma {{key:Esc}}.

| Umsebenzi | Khetha | Yenzani |
|---|---|---|
| {{ui:Face}} | lutho | Izindlela ze-zig-zag phezu kwesitoko sonke, ngaphesheya kwemiphetho yaso, ziye kophezulu womodeli |
| {{ui:Pocket}} | ubuso obusicaba bomgodi, umgodi ongaphansi, noma ushintsho oluvaliwe lwemiphetho | Ihlanza indawo ngokudlula kwe-offset ngaphakathi-ngaphandle, ekunyuseni ngakunye kwe-step-down; izihlahla (ubuso obuma phezulu ngaphakathi kwesicaba) ziyashiywa; isicaba esivulekile ngokuzungezile (akukho okuphakeme ngaphandle kwaso) siyahlanzwa kuze kufike emphethelweni wesitoko |
| {{ui:Adaptive}} | okufanayo ne-Pocket | Ihlanza indawo efanayo ngezindlela ezisika ububanzi obuthile ngakunye (**Engagement**, ingxenye yobubanzi), ukuze ithuluzi lingalokothi lithathe isikhala esigcwele ububanzi, ngisho emakhoneni; lingena ngohelikhi bese liqeda izindonga ngakunye kwezinga. Ukusika okuncane kuvumela i-step-down ejulile nokondla okukhulu |
| {{ui:Contour}} | ubuso obusicaba (umbonakalo wabo), ubuso obuzungezile, noma imiphetho | Iland'umbonakalo ofakwe ngobubanzi bethuluzi, ngaphandle noma ngaphakathi, nama-arc okungena nokuphuma nama-tab ongakhetha kuwo |
| {{ui:Drill}} | izimbobo (chofoza udonga lwembobo noma umphetho wayo) | Ibhoboza imbobo ngayinye ngomjikelezo oqinile: peck (G83), drill (G81) noma chip break (G73); noma nikeza ububanzi ukuze ubhobozele zonke izimbobo zalobo bubanzi |
| {{ui:Chamfer}} | umbonakalo wobuso noma imiphetho | Ihambisa i-chamfer mill emphethelweni ukuze isike ububanzi obusethiwe |
| {{ui:Parallel}} | lutho (imodeli yonke) | Ukuqedwa nge-3D ngemigqa enxande ngayo yonke i-engeli, ilandela umphezulu ngebhola, i-bull-nose noma i-end mill esicaba. Bona [Ukuqedwa nge-3D](topic:finish-3d) |
| {{ui:Scallop}} | lutho (imodeli yonke) | Ukuqedwa nge-3D ngamapasi ahlukaniswe ngebanga elithile phezu komphezulu, ukuze igquma eliphakathi kwawo libe nokuphakama oyikhethayo |

Khetha umsebenzi kuhlu ukuze ushintshe ithuluzi walo, izinga lokuphakama (ukuhlukanisa, ukubuyela, izinga lokondla, phezulu, phansi), i-step-down, i-stepover, isitoko esizoshiya, ipasi lokuqeda, ukungena (uhelikhi, iramp noma plunge), ukugaya ngokukhwela, ama-tab noma umjikelezo. {{ui:Up}} no {{ui:Down}} zihlela kabusha, {{ui:Suppress}} iyishiya ngaphandle, {{ui:Delete}} iyasusa. Konke kusemlandweni wokuhlehla futhi kulondolozwa efayelini lengxenye.

Ubuso be-stepover ye-pocket bungaba ngaphansi kwesigamu sobubanzi bethuluzi, ukuze wonke amaphuzu esicaba aseduze nekhulu lethuluzi elilodwa lendlela. Amakhona angaphakathi agcina umsakazo wethuluzi.

**Ukuhlanza okuguquguqukayo** kugcina ukungena kwe-cutter iseduze nenani elilodwa. Ukungena okungu-0.15 kobubanzi kuyi-engeli yokungena engaba ngu-46°: indilinga yomphetho wecutter ezintweni. I-offset pocket, ngokuphambene, isika ububanzi obugcwele ekudlulweni kwayo kokuqala futhi ibhinca kakhulu emakhoneni angaphakathi ngamunye. Phakathi kwamapasi ithuluzi lihlala lingene lapho lidlula emoyeni osikiwe, bese liyaphakama liphinde lehle emoyeni osikiwe kwezinye izindawo. Amapasi asetshenziswa kugridi ebucayi phezu kwesifunda (amaseli acishe abe yi-twelfth yomsakazo wethuluzi), ngakho ukungena kungadlula kancane kancane amaseli amabili obubanzi obusetshenzisiwe; izindonga ziqedwa ngokunembile. Indawo evulekile ekhulu yenza uhlelo olude olunemigqa emifushane eminingi.

## Lingisa

Izindlela zethuluzi zenziwa futhi ngemva kokushintsha ngakunye (nengxenye yakho). {{ui:Simulate}} futhi ibonisa isitoko esisele ngemva kwawo wonke uhlelo. Iphaneli ibonisa:

- **Isikhathi sokusebenza**: izinyathelo zokondla zihamba ngokondla kwazo, izinyathelo ezisheshayo zingamamugqa aqondile ngezinga lokuhamba ngokushesha kusethingi, kanye nesikhathi sokushintsha ithuluzi. Imishini yangempela iyashesha, ngakho ithatha isikhathi eside.
- **Ukugawuka**: izindawo lapho ithuluzi lehla khona ngaphezu kuka-0.02 mm ngaphansi kobuso bengxenye. Imikhomba ebomvu iyawakhombisa embonweni.
- **Isitoko esisele engxenyeni**.

Isitoko siyimephu yokuphakama yophezulu (Z-map), ngakho asikwazi ukubonisa ukugoba okungaphansi. Hudula i-**Playback** ukuze uhambise ithuluzi uhlelo lwonke. Embonweni, izinyathelo zokondla zimile, nezinyathelo ezisheshayo zimile ngemigqa, kube nombala owodwa ngokusebenza ngakunye.

Uma i-**Show the simulated stock** ivuliwe, isitoko sinombala ngokumelene nemodeli, iseli ngeseli: **luhlaza** lapho sikhona emodelini (phakathi kuka-0.02 mm), **kubomvu** lapho ithuluzi lisike emodelini, futhi lapho kusele isitoko emodelini **kwesasawu** ngesikhumba esincane, **kuwolintshi** ngokwengeziwe, kuguquke kube **kwegrey** yesitoko esingasikiwe ku-1 mm noma ngaphezulu. Imibala yenziwa futhi ngalo lonke ushintsho, ngemephu yokuphakama efanayo nezinombolo ephaneli, ngakho okuluhlaza nokubomvu kuvumelana nomugqa wokugawuka. Ishintshi lisika emodelini ngamabomu futhi libonisa okubomvu emaphethelweni alo.

## Post i-G-code

Khetha umlawuli ngaphansi kwe-**Post** bese ucindezela {{ui:Download G-code}} (noma {{ui:Post}} kwibha yamathuluzi):

| Umlawuli | Ifayela | Amanothi |
|---|---|---|
| Fanuc-style ISO | .nc | %, inombolo ye-O, izinombolo zomugqa, T M6 nge-G43 H, imijikelezo eqinile |
| GRBL | .nc | Akukho umshintshi wethuluzi noma imijikelezo eqinile: ukushintsha kwethuluzi kuma nge-M0, ukubhoboza kubhalwa njengezinyathelo ezilula |
| LinuxCNC | .ngc | T M6 nge-G43 H, imijikelezo eqinile, M2 |
| Fanuc-style lathe | .nc | Ezinhlelweni zokuthenda: X njengobubanzi, ukondla ngokuzungeza, G96 ngaphansi komkhawulo we-G50, ukuthungwa kwe-G32 |
| LinuxCNC lathe | .ngc | Ezinhlelweni zokuthenda: ububanzi be-G7, G95, G96, ukuthungwa kwe-G33; ayibhali inyathelo lokubuyela ekhaya |
| Okwakho | noma yini | I-post oyibhaliyo noma oyishintshile: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Wonke amafayela aqala ngamakhomenti ohlelo, isitoko, ukushintshwa komsebenzi namathuluzi. Izindlela zisemamilimitha ngamanani angu-3 amasentimitha. {{ui:Toolpath CSV}} no {{ui:Toolpath JSON}} zihambisa izinyathelo ngokwazo.

**Hlola okuphumayo ngesimulator somshini wakho ngaphambi kokusika, futhi uyiqhube emoyeni ngaphezu kwesitoko kuqala.** Ama-post amathathu akhelwe ngaphakathi ayizisekelo ezilandela imiyalo ebhalwe yomlawuli; awazange afakazelwe emshinini othile. I-post oyishintshile iyeyakho ukuyifakazela. Indlela yokubhala enye: [Ama-post processor](topic:post-processors).

## I-G-code yesitolo ye-Exact STEP

Ngaphansi kwamaqhosha e-G-code ethebhini le-**Operations**, {{ui:Exact STEP (work coordinates)}} ilanda `<ingxenye>-work.step`: ingxenye njengesolidi eqondile (izinsimbi zangempela zemibhobo nezigidi, nezindilinga zangempela zamaphethelo awo) nemvelaphi yayo ku-work origin yalo setup kanye no-Z ngokuhamba nge-eksisi yethuluzi. Lezi yizixhumanisi ezisetshenziswa yi-G-code, ngakho umsebenzi we-CAM noma umhloli wesitolo ubeka imodeli ngokufanele nohlelo ngaphandle kokuyinyakazisa. Ifayela lingokwengxenye kuphela, hhayi isitoko noma izindlela zethuluzi.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ibhala isolidi efanayo endaweni yengxenye yayo (Z ephezulu): bona [Ukuthumela ukuze kuphrintwe, STEP ne-DXF](topic:export-files#for-other-cad-programs-step).

## Imikhawulo

- Ama-pocket, ama-contour, ukubhoboza namachamfer angama-2.5-eksisi. Izingxenye ezigobile zihlanzwa futhi ziqedwe nge-3D yimisebenzi yazo ([Ukuhlanzwa nge-3D nokusala okusele](topic:rough-3d), [Ukuqedwa nge-3D](topic:finish-3d)). I-adaptive clearing iyi-2D (izisekelo ezisicaba).
- Amathuluzi athambekile, ukuqedwa kwe-5-eksisi nekwe-4th-axis, ukuthenda nokuhlola ziyakhona, ngakunye nemikhawulo yakho, futhi **akukho lolu hlobo olusetshenziswe emshinini**: bona [Ukusebenza nama-eksisi ama-4 nama-5](topic:multi-axis), [Ukuthenda](topic:turning) no-[Iprobhu](topic:probing).
- Amabanga nezinhlobo zamathuluzi akahlolwa ukuthi awabangani; isexwayiso sivela uma ukusika kujule kunobude be-flute.
- Ukondla nesivinini kungamanani okuqala. I-post ingombhalo ongawuhlela, kodwa iphethe kuphela ukubhalwa kwezinyathelo; ayikwazi ukushintsha indlela yethuluzi, ukungeza ama-eksisi noma ukwazi umshini wakho ([Ama-post processor](topic:post-processors) ibhala okungenzeki).

## Thumela uhlelo emshinini

Ku-CadCraft Studio ku-desktop, nomshini osethwe ku-Studio, i-**Send to a machine…** ivela eduze kwe-**Download G-code** futhi ilayishe lolu hlelo oluphambili emshinini ongaku-netiweki yakho. Ayiqali ngaphakathi kwe-PartCraft: uqala emshinini lapho usucace khona. Kusiphequluli, iqhosha alibonakali (ikhasi lewebhu alikwazi ukufinyelela umshini kunethiwekhi yakho): landa uhlelo kunalokho.
