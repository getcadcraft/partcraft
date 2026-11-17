---
title: Kernel-ka mesh-ka
summary: Nooca PartCraft ee hadda wuxuu dhisaa qayb kasta kernel mesh ah oo ku socda browser-kaaga. Waxa ay ka dhigan tahay wejiyada wareegsan, mugga iyo faylasha, sida loo ogaado inuu shaqeynayo, iyo astaamaha ku sugan kernel saxda ah.
keywords: kernel, mesh, manifold, saxda ah, b-rep, dhinacyo leh, qalooc, opencascade, occt, fillet waxay u baahan tahay saxda ah, weli lama dhisin, khadka ka baxsan, webassembly
from: f931645c
---

Kernel-ka joomatariga waa mishiinka wuxuu taariikhdaada u beddelaa jir. Nooca PartCraft ee hadda wuxuu leeyahay mid: **mesh kernel** (manifold-3d). Wuxuu ku shaqeeyaa kombiyuutarkaaga sidii barnaamij yar oo WebAssembly wuuna diyaar yahay wakhti kooban ka dib markii app-ku furmo. Waxba oo ku saabsan qaybtaada looma diro meel kasta.

| | Mesh kernel |
|---|---|
| Qaabab wareegsan | Dhinacyo fidsan. **Curves** guddiga qaybta ayaa dejiya sida ay u fiicnaato |
| Mugga iyo dusha | Ee jirka dhinacyada leh, wuxuu ka hooseeyaa xoogaa qaybaha wareegsan |
| Naqshadaha, soo saar, goyn, wareeg, godyo, qaababka, muraayad, diyaaradaha tixraaca | Haa |
| Fillet iyo Chamfer | Geesaha toosan ee u dhexeeya wejiyada fidsan; wareegyada kulma waa la xardhaa |
| Qolof iyo Qabyo | Qolof wuxuu furaa wejiyada fidsan (dhumuc derbiga saxda ah); Qabyo wuxuu u janjeeyaa wejiyada fidsan |
| Dhoofinta | STL, 3MF, STEP (saxda ah: wejiyada wareegsan waxay ku qoran yihiin dusha runta ah; ama dhinacyo leh), PDF-ka sawirka iyo DXF |
| Muuqaalada sawirka | Waxaa laga sawiraa dhinacyada, oo ay ku jiraan muuqaalada qaybta |
| Wejiyada iyo geesaha | Magacyo lagu siiyey oo lagu garto nooca (fidsan, silinder, koon, kura, torus; toosan, goobo), laga soo qaatay naqshadaha: goobaha Simulation, Generative iyo Manufacture, Cabbir, dooritaanka iyo miiska godyada ayaa isticmaala |

Kaadhka ku sar-dhowaad dhamaadka midig ee status bar-ka wuxuu leeyahay **Mesh kernel** intuu qaybtaada dhisayo.

## Waxa sugaya kernel saxda ah

Kernel saxda ah (B-rep) wuxuu hayaa goobooyin, silinderro iyo koonno runta ah, iyo fillet siman geesaha kasta, sweep, loft, dusha, sheet metal, ribs, jirro badan iyo STEP import oo wejiyada wareegsan saxda ku jira, dhamaantood ayaa lagu dhisaa. (Dhoofinta STEP ee saxda ah ma sugto: mesh kernel-ku wuxuu ka yaqaanaa dusha run ah ee wejig kasta naqshadda, dhoofintuna way qortaa.) Dhismayaasha lab-ka ee hore ee PartCraft waxay u isticmaaleen OpenCascade. Shatiga (LGPL) kama haboon sii-deyntan, halka app kasta yahay Apache-2.0 oo kaliya maktabado ogolaansho fudud leh isticmaala, sidaas darteed lama soo daro. Waxba halkan ma leh taariikh.

Ilaa markaas astaamahaas waxay leeyihiin **Weli lama dhisin** markaad doorato: status bar-ku wuxuu siiyaa sababta, tooltip-ka badhamadoodu wuxuu ku dhammaadaa "weli lama dhisin (wuxuu u baahan yahay kernel saxda ah)". [Waxa weli aan la dhisin](topic:not-built-yet) wuxuu liis ka dhigaa mid kasta oo leh waxa lagu samayn karo halkeeda.

Qayb lagu sameeyay dhismihii hore weli way furmaa. Astaamahaas waxay sii jiraan taariikhda oo lagu calaamadeeyay weli lama dhisin (dul-marso mid si aad sababta u aragto), qaybta intiisa kale way dhismaa, kaydintuna waxay ilaalisaa iyaga oo aan isbeddelin.

## Wejiyada wareegsan iyo Curves

Mesh kernel-ku goobo wuxuu ka sawiraa poligon. **Curves** guddiga qaybta wuxuu dejiyaa inta dhinac ee goobo buuxda heleyso; dhinac badan waxay muuqdaan kuwo siman oo waxay u dhow yihiin qiimaha runta ah, laakiin way qaadanayaan wakhti dheer si loo dhiso. Mugga, dusha iyo masaafooyinka {{ui:Cabbir}} waa kuwa jirkan dhinacyada leh: godka ama boss-ka way yar yihiin marka loo barbar dhigo kan wareegsan.

## Online iyo offline

Mesh kernel-ku waa qayb ka mid ah soo-dejinta app-ka laftiisa. Si aad ugu shaqeyso adigoon xiriir lahayn, u kaydi PartCraft isticmaalka khadka ka baxsan intaad online tahay: dooro {{ui:Kaydi khadka ka baxsan}} app bar-ka oo sug ilaa uu leeyahay **Diyaar khadka ka baxsan**. Faahfaahin: [Shaqaynta khadka ka baxsan](common:offline).
