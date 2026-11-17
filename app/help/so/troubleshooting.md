---
title: Dhibaatooyinka iyo xalinta
summary: Dhibaatooyinka aad la kulmi karto PartCraft, laga bilaabo app-ka oo aan bilaabmin ilaa feature-yada fashilmaya, sketch-yada aan xallan karin, faylalka aan furmin iyo joints-ka khaldan, iyo fariinta aad aragto iyo xalka.
keywords: dhibaato, khalad, caawimaad, ma shaqeynayo, fashil, fashilaya, crash, bannaan, webgl, webassembly, kernel, aan la dhisin, over defined, profile furan, ma furi karo, wax ma dhacaan, jihada khaldan, gaabis
from: 7728542c
---

Marka wax aan shaqeynin, akhri **status bar** ee hoose marka hore: PartCraft wuxuu halkaas kuugu sheegayaa sababta uu diiday ama waxa uu sugayo xiga. Feature-ka fashilaya wuxuu sidoo kale muujinayaa fariintiisa panelka midig sare iyo marka aad ku dul ridayso safkiisa history-ga.

## App-ku ma bilaabmo

### "Browser-kan ma muuqan karo 3D (WebGL waa damaysan yahay ama ma jiro), marka PartCraft halkan ma shaqeyn karo."

**Sababta:** browser-ka wuxuu damiyay ama xannibay 3D graphics (WebGL), ama graphics driver-ka ma taageero.

**Xalka:**

:::chromium
Fur `chrome://settings/system` (ama `edge://settings/system` Edge-ka) oo shid "Use graphics acceleration when available", kadibna dib u bilow browser-ka. Haddii uu shidan yahay, hubi `chrome://gpu` si aad u aragto xaaladda WebGL, oo cusboonaysii graphics driver-ka.
:::

:::firefox
Fur `about:support` oo fiiri Graphics, WebGL. Haddii la xannibay, cusboonaysii graphics driver-ka. `about:config` dhexdeeda, `webgl.disabled` waa inuu noqdaa `false`.
:::

:::safari
WebGL waa had iyo jeer furan tahay Safari-ga hadda jira. Cusboonaysii macOS (Safari waa la cusboonaysiiyaa isaga). Haddii weli fashilanto, isku day Chrome ama Firefox isla Mac-ka si aad u joojiso in hardware-ka graphics-ku sababa.
:::

Kombiyuutarrada fog (remote desktops) iyo qaar ka mid ah virtual machines-ka ma leeyihiin WebGL. Isku day kombiyuutarka laftiisa.

### "Kernel-ka solid-ka ma soo dejin: …"

**Sababta:** geometry kernel (barnaamij WebAssembly ah) lama soo qaadi karin ama lama bilaabi karin. Inta badan xiriirku wuu go'ay intii app-ku soo dejinayay, WebAssembly waxaa damiyay siyaasad shirkad ama habka amniga browser-ka, ama browser-ku aad bay u duuban yahay.

**Xalka:** dib u soo rar bogga intaad online tahay. Haddii ay sii fashilanto, isku day browser kale oo casri ah. Firefox-ka, `javascript.options.wasm` ee `about:config` waa inuu noqdaa `true`. Offline ahaan, app-ka iyo kernel-ka kaliya ayay soo dejiyaan haddii app bar-ku yiri **Diyaar offline** ka hor intaadan xiriirka lumin ({{ui:Save for offline}} intaad online tahay; eeg [Shaqaynta offline](common:offline)).

### Badhanka offline wuxuu leeyahay "Lama kaydin karin" ama "Offline lama heli karo"

**Lama kaydin karin**: qaar ka mid ah faylalka lama soo dejin. Guji mar kale intaad online tahay; xiriir gaabis ama lacag lagu qiyaasaa wuxuu u baahan karaa isku day labaad. **Offline lama heli karo**: daaqadan browser-ku ma kaydin karto nuqul offline ah (daaqadaha gaarka ah iyo kombiyuutarrada la maamulo qaar ayaa xannibaya). Isticmaal daaqad caadi ah, ama ilaali tab-ka furan.

### PartCraft waa offline laakiin waa duugoobay

Guji **Diyaar offline** intaad online tahay, kadibna dooro {{ui:Save again (get the newest version)}}.

### "Sweep: not built yet. It needs an exact kernel, …"

Fariinta oo buuxa waa "<Name>: weli lama dhisin. Waxay u baahan tahay kernel saxda ah, oo nooca PartCraft-kan ma haysto. Caawimaad › Waxa aan weli la dhisin wuxuu sheegayaa waxa lagu sameeyo halkeeda." Waad aragtaa markaad doorato Sweep, Loft, Rib, sheet metal flange, feature wejig, Combine, Move body, Scale body ama Path pattern, iyo waxyaabaha kale oo kernel saxda ah keliya u baahan. Wax khalad ah ma jiro browser-kaaga ama qaybtaada: nooca PartCraft-kan qayb kasta wuxuu ku dhisaa kernel-ka mesh. Eeg [Waxa aan weli la dhisin](topic:not-built-yet) waxa lagu sameeyo halkeeda, iyo [Kernel-ka mesh](topic:solid-kernels).

### Kernel-ka solid-ka waa la soo dejinayaa… aan waligiis dhammaan

Sug yar xiriir gaabis: kernel-ka iyo maktabadda 3D waa la soo dejiyaa markii ugu horreysay. Kadibna dib u rar. Haddii bogga qudhiisu khalad muujiyo, eeg kor.

## Wax ma dhacaan markaan furayo fure

- Furayaasha ma shaqeeyaan markaad cursor-ku ku jiro sanduuq panel gudaha. Guji aragtida 3D ama riix {{key:Esc}} ka dib qorista (ama {{key:Tab}} ka bax).
- Furayaasha fallaadhaha iyo {{key:Plus}}/{{key:Minus}} waxay wareejiyaan kaliya aragtida ka dib markaad gujisay aragtida.
- Dialog ayaa furan: ka jawaab kii hore.
- Sketch-ka dhexdiisa, {{key:F}} waa qalabka Fillet, ma aha Fit. Isticmaal badhanka {{ui:Fit}}.

## Badhanka toolbar-ka ayaa midabka cad (grayed)

- Badhamada feature-ka waa grayed markaad sketch furan tahay. Marka hore sketch-ka xir.
- Qalabyada sketch-ka waxay shaqeeyaan oo keliya gudaha sketch-ka.
- {{ui:Undo}} iyo {{ui:Redo}} waa grayed markaad wax dib u qaadi ama dib u samayn karin aysan jirin.
- {{ui:Assembly}} wuxuu u baahan yahay qayb leh solid. {{ui:Joint}} wuxuu u baahan yahay laba qayb isku-dhiska ku jira. {{ui:Edit part}} wuxuu u baahan yahay qayb la doortay.
- {{ui:STEP AP242 (exact solid)}} iyo {{ui:STEP AP214 (exact solid)}} waa grayed isku-dhiska: dhoofi qayb kasta. Barnaamij kale wuu diidaa faylka saxda ah: isku day {{ui:STEP AP214 (exact solid)}}, kadibna {{ui:STEP (faceted, mesh kernel)}}, oo nagu soo sheeg {{ui:Help}} › {{ui:Report a problem}}.
- {{ui:Sweep}}, {{ui:Loft}} iyo feature-yada kale ee u baahan kernel saxda ah ma ahan grayed: waa la guji karaa, tooltip-kooda wuxuu ku dhamaadaa "weli lama dhisin (wuxuu u baahan yahay exact kernel)", gujintu mid kastaa waxay sheegtaa status bar-ka. Eeg [Waxa aan weli la dhisin](topic:not-built-yet).
- {{ui:Drawing}} wuxuu u baahan yahay qayb leh solid, waana grayed inta sketch furan tahay.
- {{ui:Export}} waa grayed isku-dhiska: isku-dhisyada weli lama dhoofin karo. Xir, ama wax ka beddel qayb si aad u dhoofiso.

## Dhibaatooyinka sketch-ka

### Sketch-ku ma oggolaanayo inaan ku daro isku xidh

"Isku xidhku ma waafaqsana doorashadan. Dooro hal ama laba shay (Shift+click ayaa ku daraa)." Isku xidhku wuxuu u baahan yahay doorasho kale. Eeg [Isku xidhka iyo cabbirrada sketch-ka](topic:sketch-relations) si aad u ogaato waxa mid kasta u baahan yahay.

### "Over defined: … ma dhammaan karaan. Ka noqo, ama tirtir mid ka mid ah."

**Sababta:** isku xidhka ama cabbirka cusub ayaa ka soo horjeeda kuwii hore. Sketch-ku ma dhaqaaqin.

**Xalka:** {{key:Mod+Z}}, ama tirtir mid ka mid ah shayada casaanka ah ee liiska panelka midig (dooro **Delete** ee u dhow).

### "Over defined: … horey ayaa loo gartay. Tirtir."

**Sababta:** isku xidhku ma darayo wax cusub: kuwa kale horey ayay u qasbeen (tusaale Parallel labada dhinac ee rectangle, ama cabbir horay u go'an). Dhismaha kan ma jiro cabbir la wadaa.

**Xalka:** tirtir. Feature-ku wuu sidaas ku dhisaa, digniin ku jirta.

### "Shaygaas ma cabbiri karaan wada."

Waxaad gujisay, tusaale, dhibic iyo goobo. Taas beddelkeed cabbir u qaado dhibcaha dhexe ee goobada.

### "Fillet wuxuu u baahan yahay geesta uu laba xariiq kulmaan." / "Radius-kaas wuu ka weyn yahay xariiqyadan."

Guji si sax ah dhibcaha geeska laba xariiq adag. Isticmaal radius ka yar kan xariiqa ugu gaaban ee u ogolaanayo.

### Joomatriga wuu dib ugu noqdaa markaan jiido

Jiidista waxay jebin lahayd isku xidh ama cabbir, sidaas darteed PartCraft wuu dib u celiyaa. Kaliya joomatriga buluugga ah (qeexan qaybta) ayaa dhaqaaqi kara.

### "Sketch-kan ma furi karo: wuxuu u baahan yahay Extrude2, oo fashilanaysa."

Sketch-ku wuxuu ku yaal wejig feature aan la dhisin. Marka hore feature-kaas saxa, ama ka furo (unsuppress), ama roll forward.

## Dhibaatooyinka feature-ka

| Fariinta | Sababta | Xalka |
|---|---|---|
| "Marka hore samee sketch: dooro diyaarad, Sketch, sawir profile xirran, Exit." | Ma jiro sketch aan isticmaal lahayn oo leh curves, lamana dooran | Samee sketch, ama dooro sketch-ka history-ga |
| "The sketch has no closed profile to extrude." (ama "to revolve") | Ma jiro loop xirran oo xariiqyo adag | Xidh kala-go'aanka; dib u beddel xariiqyada dhismaha {{key:Q}} |
| "The profile is open: an end at (x, y) is not joined to anything." | Kala-go'aan dhibcaas | Fur sketch-ka, jiid dhamaadka ku dhow xaaska si uu u snap-gareeyo |
| "The profile branches at (x, y): more than two ends meet there." | Saddex ama ka badan xariiq ayaa kulma dhibic | Tirtir xariiqa dheeraadka ah, ama dhismaha ka beddel |
| "A closed loop needs at least three sides or a curve." | Laba xariiq dib-u-dhac | Dib u sawir loop-ka |
| "Through all is for cuts. Use a depth for a boss." | Boss oo loo dejiyay Through all | Deji **End** oo ah Blind ama Mid-plane |
| "There is nothing to cut on that side of the sketch. Try the other direction." | Goynta waxay u jeedaa dhinac ka baxsan walxaha | Calaamadi **Reverse direction** |
| "There is nothing to cut yet." / "There is nothing to drill yet." | Ma jiro solid ka hor feature-kan | Marka hore samee boss, ama feature-ka hoos u dhaqaaji |
| "Draw a centerline (a construction line) in the sketch to revolve about." | Revolve oo aan axis lahayn | Ku dar centerline, ama dooro xariiq ee **Axis** |
| "The profile crosses the axis. Keep it on one side of the centerline." | Profile-ku dhinac labaad ayuu axis-ka ka gudbaa | Dib u sawir nus profile-ka |
| "Put sketch points where the holes go (Point tool), then make the hole." | Ma jiro dhibic sketch-ka dhexdiisa | Ku dar dhibic {{key:P}} |
| "The counterbore must be wider than the hole." | Counterbore ⌀ kuma weyn Diameter | Ka dhig counterbore-ka mid ballaadhan |
| "The counterbore must be shallower than the hole." | Counterbore ka qoto dheer godka blind | Ka dhig mid ka yar, ama godka ka dhig mid qoto dheer |
| "Choose the features to copy." | Pattern ama mirror oo aan wax la calaamadin | Calaamadi feature hoosta **Feature-yada la nuqulayo** |
| "Extrude2 has no solid to copy." | Feature-kii la nuqulayay wuu fashilmay ama damaysan yahay | Hagaaji ama ka furo (unsuppress) |
| "Needs Sketch3, which is failing." | Feature uu ku tiirsan yahay weli ma dhisna | Hagaaji feature-ka uu magacaabo |
| "The face it sits on is gone (Extrude1 is not built)." | Wejigii sketch-ka ma jiro | Hagaaji feature-kaas, ama tirtir sketch-ka oo mar kale sawir |
| "Nothing is left of the part after this." | Goynta ayaa ka saartay walxaha oo dhan | Hubi cabbirka goynta iyo jihada |
| "The solid kernel could not build this (…)." ama "The solid kernel could not combine this with the body." | Kernel-ku wuu diiday joomatriga | Ka noqo, ama beddel cabbirrada yar; wejiyada si sax ah isu taabanaya ayaa keeni kara |
| "Sweep: not built yet. It needs an exact kernel, which this version of PartCraft does not have." (sidoo kale Loft, Rib iyo kuwa kale) | Feature la sameeyay nooc hore oo kernel saxda ah keliya dhisi karta. Waa ku jirtaa history-ga oo waxaa dib loo kaydiyaa sidii ay ahayd | Suppress ama tirtir; eeg [Waxa aan weli la dhisin](topic:not-built-yet) waxa lagu sameeyo |
| "A 5 mm round does not fit here (…)." / "A 2 mm chamfer …" | Cabbirku waa ka weyn wejiga ka dhow geesta, ama geeska lama isku qasi karo | Cabbir yar, ama geesood yar feature kasta |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (sidoo kale Chamfer) | Geeska la doortay waa wareeg, sida afka godka, ama wuxuu ku yaal wejig qalloocan | {{ui:Pick edges}} oo ka saar; ama wareeji ama bevel geeskaas sketch-ka dhexdiisa |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." | **Variable radius** waa la calaamadiyey | Ka saar calaamadda oo cabbir keliya sii |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠, digniin) | Geesaha la doortay waxay kulmaan geesta; wareegyadu halkaas ku kulmaan waxay samaynayaan geesood adag, ma aha isku-dhafan | Waxba ma hagaajin: qaybtu waa la dhisay. Fillet geesaha yar haddii ay muhiim tahay geeska |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." | Isbeddel hore ayaa geeska ka saaray | {{ui:Pick edges}}, ka saar geeska casaanka ah, dooro mid cusub |
| "Pick the edges in the view, then add them." | Fillet ama chamfer ma leh geesood | {{ui:Pick edges}} |
| "Pick the faces to remove (open), then shell." | Shell-ka ma leh wejiyo furan | {{ui:Pick faces}} |
| "The shell could not be made with this thickness (…)." | Darbiga ayaa ka weyn qayb khafiif ah ama radius fillet | Darbi khafiif, ama fillet-yo waaweyn |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." | Wejig furan wuu qalloocan yahay | {{ui:Pick faces}} ka saar; fur wejiyada siman oo keliya |
| "Draft: in this version flat faces only (the mesh kernel builds it)." | Wejiga draft-ka ah waa silinda, koon ama wejig qaab xor ah | Ka saar; draft wejiyada siman oo keliya |
| "A face it opens is gone (…)." | Isbeddel hore ayaa wejiga ka saaray | {{ui:Pick faces}} mar kale |
| "Fillet1 changes the body's edges or walls; it cannot be copied. …" | Pattern ama mirror wuxuu nuqulaa fillet, chamfer ama shell | Ka saar calaamada; pattern goynta marka hore, kadibna fillet |
| "It sits on a face only an exact kernel can find: not built yet in this version." | Sketch ku yaal wejig kernel-ka mesh aan heli karin, sida mid nooc hore lagu sameeyay | Sawir diyaarada asaasiga ah ama wejig siman oo extrude ah, oo cabbir ku dhig |
| "It uses a face or edge of the solid, which only an exact kernel can find: not built yet in this version." | Diyaarad tixraac, dhuur ama dhibic ku taal wejig ama geesta solid-ka | Ka samee diyaaradaha asaasiga ah, sketch dhibcaha, ama isku xidhka cabbirro |
| "Extruding up to a face, the next face or a vertex: not built yet (it needs an exact kernel)." / "A taper: not built yet (it needs an exact kernel)." | Xadka ama taper-ka oo kernel saxda ah keliya dhisi karta | Isticmaal Blind ama Mid-plane cabbir aad qiyaasto; ka dhig Taper 0 |

## Dhibaatooyinka xulashada

- "Wejigaas wuu qalloocan yahay. Dooro wejig siman ama diyaarad si aad u sawirto." Sketch-yadu waxay u baahan yihiin wejig siman. Sawir diyaarada asaasiga ah oo dhig sketch-ka cabbirro.
- Wejig wuxuu leeyahay "Fixed where picked": ma uusan ka samayn geesta sketch (tusaale, wejig nuqul pattern ah), sidaas darteed sketch-ka saaran way joogtaa markii qaybtu isbeddesho.
- Geesaha way adag yihiin in la gaadho: ku dhowow (zoom in). Geeska ayaa ka guuleysta wejiga ku dhow marka pointer-ku saxda ku yahay.

## Dhibaatooyinka faylka

| Fariinta | Xalka |
|---|---|
| 'PartCraft wuxuu furaa faylalkiisa .partcraft.json, wuxuu ka dhoofiyaa CadCraft macro-ka SolidWorks (.cadcraft-sw.json) iyo faylalka STEP. "bracket.igs" midkoodna ma aha.' | Kaliya kuwaas ayaa la aqoonsadaa (iyo STL, OBJ, 3MF meshes iyo `.3dm` files) |
| '"part.stp" ma aha fayl STEP ah (kuma bilaabmo ISO-10303-21).' | Faylku ma aha STEP text |
| "That STEP file is too big (over 60 MB) to import here." | Fududee isha |
| "That file is too big to be a PartCraft part." oo ah qaybtaada aad keydisay | STEP solid weyn oo la soo geliyay nooc hore ayaa faylka qaybta ka dhigay in ka badan 50 MB. Isticmaal nuqul hore oo aan lahayn |
| "That file is too big to be a PartCraft part." | Faylku wuxuu ka badan yahay 50 MB; ma aha fayl PartCraft |
| "This is not a PartCraft file (it is not JSON)." ama "This is not a PartCraft file." | Faylku waa damaan, ama barnaamij kale ayuu leeyahay |
| "This file was saved by a newer PartCraft (file version …); this one reads version …" | Ku fur PartCraft-ka cusub |
| "Extrude2: the depth is bad." (ama qiime kale) | Faylka gacanta ayaa lagu wax ka beddelay ama damaan. Isticmaal nuqul hore |
| Insert isku-dhiska ku jira wuxuu leeyahay "Part1.partcraft.json has no solid to insert." | Faylka qaybta ma leh solid. Fur, samee solid, kaydi, oo mar kale gali |

**Faylkii aan kaydiyay ma joogo meesha aan filayay.** Kaydintu waa download: eeg folder-ka downloads ee browser-kaaga, ama fur liiska downloads-ka toolbar-ka browser-ka. Eeg [Halkee faylalkaagu ku tagaan](common:your-files).

**Qayb ayaan furay laakiin isku-dhiskii weli shaashadda ayuu ku jiraa.** Qaybtu waxay ku furmatay gadaasha isku-dhiska. Dooro {{ui:Close}} si aad u xirto isku-dhiska oo aad u aragto qaybta. Xir isku-dhisyada ka hor inta aadan furin faylalka qaybaha.

## Dhibaatooyinka sawirka

| Fariinta | Xalka |
|---|---|
| "Marka hore samee solid, kadibna sawirkeeda samee." | Qaybta marka hore dhis |
| "No room on the sheet for: detail. Make the detail smaller or drop a view." | Xaashida ma leh meel. Yaree **Detail radius** ama **Detail scale**, ama ka saar goyn |
| "A detail is taken from the front, top, right or section view." | Guji mid ka mid ah aragtidaas |
| "Click on one of the views." | Gujintu waxay ku dhacday warqad bannaan. Guji mid ka mid ah aragtiyada |
| "Position needs at least one datum reference." iyo fariimo kale oo frame ah | Dejiso datums uu panelku weydiiyo, ama dooro tilmaame kale |
| "The drawing views could not be made: …" | Ka noqo isbeddelkii ugu dambeeyay. Haddii ay sii socoto, kaydi, dib u rar, oo mar kale fur qaybta |

## Dhibaatooyinka isku-dhiska

| Fariinta | Xalka |
|---|---|
| "Marka hore samee solid, kadibna geli isku-dhiska." | Qaybtu weli ma leh solid |
| "Marka hore geli qayb labaad (Ku dar nuqul, Geli, ama Wax ka beddel › Duplicate)." | Joint wuxuu u baahan yahay laba qayb |
| "Dooro wejig qayb kale." | Labada wejig ee joint-ka waa inay ku jiraan qaybo kala duwan |
| "That face is curved. Pick a flat face …" | Joints-ku wejiyada siman ayay ka bilaabmaan. Kadibna isticmaal **Centre on** godka ama axis-ka revolve |
| "Bracket2 is not joined to the grounded part, so it stays where it was put." | Ku dar joint ka qayb ilaa qayb la dhigay |
| "Revolute3 closes a loop that cannot close: it is off by 2.000 mm. Check the faces, offsets and limits of the loop's joints." | Qaybaha ma isku gaadhi karaan: hubi dhererka, wejiyada joint kasta, offsets (qaybaha la isugu rakibay wejig-ku-wejig waa inay ku heshiiyaan qoto dheerka) iyo limits; ama ka saar hal joint oo loop-ka ka mid ah |
| "The face this joint uses is gone from Bracket." / "The axis this joint uses is gone from Bracket." | Qaybtu waa la wax ka beddelay. Ka saar joint-ka oo mar kale samee |
| "The axis runs along the face, so it cannot set the joint's centre." | Dooro axis ku gudba wejiga, ama "The face's own origin" |
| "An assembly keeps at least one part. Close it instead." | Isticmaal {{ui:Close}} |

**Qaybaha way isku xidhan yihiin laakiin meel khaldan.** Deji **Centre on** labada dhinac ee joint-ka oo ah godka ama axis-ka revolve ee la rabo inay isku khadka saaraan, kadibna hagaaji **Angle (°)** iyo **Offset (mm)**.

## Waa gaabis

- Deji **Curves** ilaa Normal ama Coarse intaad modelaynayso; ka dibna Fine ka hor dhoofinta.
- Tirooyin pattern oo waaweyn (boqolaad nuqul) wakhti ayay qaataan mar kasta oo isbeddel. Pattern-ka suppress samee intaad ka shaqaynayso feature-yada kale.
- Clash iyo motion check waxay isbarbardhigaan qaybaha kala laba; isku-dhisyada waaweyn wakhti dheer ayay qaataan.
- Xir tabs-ka kale ee culus. PartCraft wuxuu ku shaqeeyaa processor-ka kombiyuutarkaaga iyo graphics-kiisa.

## Weli waad ku jirtaa dhibaato

Marka hore kaydi faylkaaga ({{key:Mod+S}}), kadibna dib u rar bogga oo mar kale fur. Haddii feature-ku weli fashilanto, dooro, akhri fariintiisa, oo isku day {{key:Mod+Z}} ilaa gadaashii heerkii ugu dambeeyay ee fiican.
