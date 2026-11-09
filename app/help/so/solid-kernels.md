---
title: Mesh kernel-ka
summary: Nooca tan ee PartCraft qayb kasta wuxuu ku dhisaa mesh kernel oo ku shaqeeya browser-kaaga. Taasi waxay ka dhigan tahay dusha wareegsan, mugga iyo faylasha, sida loo ogaado inuu shaqeynayo, iyo astaamaha sugaya kernel sax ah.
keywords: kernel, mesh, manifold, sax ah, b-rep, fidsan, curves, opencascade, occt, fillet u baahan sax ah, weli lama dhisin, khadka ka baxsan, webassembly
from: 68d32d16
---

Geometry kernel waa matoorka taariikhdaada u beddela jidh adag. Nooca tan ee PartCraft wuxuu leeyahay mid: **mesh kernel** (manifold-3d). Kombiyutarkaaga ayuu ku shaqeeyaa sida barnaamij WebAssembly yar oo diyaar ah wax yar ka dib markii app-ka la furo. Waxba oo ku saabsan qaybtaadu meel uma diro.

| | Mesh kernel |
|---|---|
| Qaabab wareegsan | Dusha fidsan. **Qalooca** panelka qaybta ayaa go'aamisa sida ay u fiican tahay |
| Mugga iyo dusha | Ee jidh adagta fidsan, wax yar oo hoos ah qaybaha wareegsan |
| Sawir-gacmeedyada, soo saar, goo, revolve, godadka, qaababka, muraayadda, diyaaradaha tixraaca | Haa |
| Fillet iyo Chamfer | Geesaha toosan ee u dhexeeya dusha fidsan; wareegyada isku dhaca waa la jaray |
| Shell iyo Draft | Shell wuxuu furaa dusha fidsan (dhumucda derbiga oo sax ah); Draft wuxuu janjeeraa dusha fidsan |
| Dhoofinta | STL, 3MF, STEP (fidsan), naqshadda PDF iyo DXF |
| Muuqaallada naqshadda | Waxa laga sawiray dusha fidsan, oo ay ku jiraan muuqaallada qaybta |
| Dusha iyo geesaha | Magac la siiyay oo lagu garto nooca (fidsan, silinder, koon, kura, torus; toos, wareeg), ka soo qaadan sawir-gacmeedyada: shaqooyinka Simulation, Generative iyo Manufacture, {{ui:Cabbir}}, dooridda iyo miiska godadka ayaa isticmaala |

Chip-ka ku dhow dhamaadka midig ee status bar-ka wuxuu tidhi **Mesh kernel** intii uu qaybtaada dhisayo.

## Waxa sugaya kernel sax ah

Kernel sax ah (B-rep) wuxuu ilaaliyaa goobooyin, silinderro iyo koonno run ah, iyo fillet-yo jilicsan geesha kasta, sweeps, lofts, dusha, birta xaashiga, ribs, jidh adag oo badan, STEP import iyo STEP export sax ah; dhammaantood waxa lagu dhisaa hal mid. Dhismayaashii hore ee tijaabada PartCraft waxay u isticmaali jireen OpenCascade taas. Shatiga (LGPL) ma waafaqo sii deynta tan, halkaas oo app kasta yahay Apache-2.0 oo uu isticmaalo maktabado shatiyo fudud oo keliya, sidaas darteed lama soo dhex geliyo. Waxa halkan wax taariikh ah lagama dhigin.

Ilaa markaas astaamahaas waxay tidhaa **Weli lama dhisin** markaad doorato: status bar-ku wuxuu siinayaa sababta, tooltip-ka qalabkoodna wuxuu ku dhammaadaa "weli lama dhisin (wuxuu u baahan yahay kernel sax ah)". [Waxa weli lama dhisin](topic:not-built-yet) wuxuu liistaa mid kasta oo leh waxa loo samayn karo halkeeda.

Qayb lagu sameeyay dhismaha hore weli way furmaysaa. Astaamahaas waxay ku sii jiraan taariikhda iyagoo lagu calaamadeeyay weli lama dhisin (ku dhaji mid ah sababta), qaybta kale way dhismaysaa, kaydintuna way ilaalinaysaa iyaga iyada oo aan la beddelin.

## Wareegyada iyo Qalooca

Mesh kernel-ku goobo wuxuu ka sawiraa poligon. **Qalooca** panelka qaybta ayaa go'aamisa inta jaanqaad ee goobo buuxda uu helayo; jaanqaadyo badan waxay u muuqdaan kuwo siman oo waxay u dhowaadaan qiimaha run ah, laakiin waxay qaadaan waqti dheer si ay u dhisaan. Mugga, dusha iyo masaafooyinka {{ui:Cabbir}} waa kuwa jidh adagtan fidsan: god ama boss ahaan waxay ka yar yihiin qaabka wareegsan ee dhabta ah.

## Khadka ku jira iyo ka baxsan

Mesh kernel-ku waa qayb ka mid ah soo dejinta app-ka laftiisa. Si aad uga shaqeyso iyada oo aan xiriir lahayn, PartCraft u kaydi isticmaalka khadka ka baxsan intaad khadka ku jirtid: dooro {{ui:Kaydi khadka ka baxsan}} bar-ka app-ka oo sug ilaa ay tidhi **Diyaar khadka ka baxsan**. Faahfaahin: [Shaqaynta khadka ka baxsan](common:offline).
