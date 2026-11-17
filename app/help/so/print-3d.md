---
title: Diyaarinta qayb loo daabacayo 3D
summary: Hubi in qayb ama isku-dhis xidhan yahay, ku habboon yahay daabacahaaga, oo taagan yahay sal; ka dib soo dejiso STL ama 3MF si aad ugu isticmaasho slicer-kaaga.
keywords: daabacaadda 3d, 3d print, daabacaha, print, slicer, stl, 3mf, xidhan, closed, manifold, bed, cabbirka bed-ka, build plate, overhang, supports, sal, millimeter, dhoofin, threads, clearance
from: 90d81dff
---

Slicer-ku wuxuu u baahan yahay qaab xidhan: aan godad lahayn, wejiyada oo dhan u jeedaan dibadda, aanay wax isaga dhex mari. Qaybaha PartCraft dhisto waa xidhan yihiin dhismaha, sidaas darteed hubintu badanaa waxay kuu sheegtaa cabbirka, in ay ku habboon tahay bed-ka daabacahaaga, in ay ku taagan tahay wajig siman, iyo inta ay ka soo baxdo.

## Hubi oo soo deji

1. Ikhtiyaari, mar keliya: deji bed-ka daabacahaaga {{ui:Settings}} › PartCraft › **3D printer**: ballac, qoto iyo joog millimeter-ka. Ka tag faaruq haddii aadan rabin hubintaas.
2. Dooro {{ui:Export}}, ka dib {{ui:Check for 3D printing (STL or 3MF)…}}.

   Wada-hadalku wuxuu leeyahay "Ready to print" ama "Not ready to print", wuxuuna liistaa wax kasta oo khaldan, wuxuuna siinayaa cabbirka bed-ka (X × Y × Z, millimeter), mugga iyo tirada saddexagallada.

3. Riix {{ui:Download 3MF}} ama {{ui:Download STL}}. Faylku waa isku mid kan {{ui:Export}} › {{ui:3MF, for 3D printing}} ama {{ui:STL, for 3D printing}}.

Isku-dhis dhexdiisa, hubinta iyo faylalku waxay qaadaan isku-dhis oo dhan, nuqul kasta meesha lagu meeleeyay.

Qaybta waxa lagu hubiyaa sida dhoofintu u qorto, taagan: wixii PartCraft ku sare u tilmaamo (toosan dusha sare) ayaa bed-ka sare u tilmaama. Qayb lagu naqshadeeyay dusha sare waa jiifa.

## Waxa wada-hadalku sheegi karo

**Not ready to print** (slicer-ku wuu diidi karaa ama wuu si khaldan u daabici karaa): godad (geesaha leh wajig hal dhinac kaliya), geesaha ay wadaagaan saddex wajig ama ka badan, wejiyo u jeeda dhinacyo kala duwan, jidh gudahiisa dibadda loo rogay, ama jidh isku gudba. Qayb ku dhisan PartCraft waa inaysan waligeed soo bandhigin kuwan; haddii ay soo baxdo, eeg [Xalinta dhibaatada](topic:troubleshooting).

**Digniin** (wuu daabacaa, laakiin marka hore fiiri):

- **Ka weyn bed-ka daabacahaaga**, xitaa haddii la rogo 90°.
- **Waxba ma taagna hoosta**: rog qaybta slicer-ka si wajig uu bed-ka taageero, haddii kale waxay u baahan doontaa supports ama raft.
- **Ka baxa in ka badan 45° toosnaanta**: wejiyadaas waxay u baahan yihiin taageero sida ay hadda tahay. Hab kale oo sare oo loo rogo ayaa yaree karta.
- **Jidhadka kala duwan way isku dhacaan** ama **wejiga ayay isku kulmaan**: slicer-ku badanaa wuu isku daraa. {{ui:Combine}} ee Features › More ayaa isku xidha hal jidh. Eeg [Jidhadka](topic:bodies).
- **Ka yar 1 mm dhinac kasta**: hubi cabbirka qaybta.

## Xiiro oo daabac

Xiiro la moodeelay wuxuu u daabacaa sida xiir dhab ah. Siiso **Clearance** si boolt la daabacay ugu gasho qolqol la daabacay: eeg [Xiirashada](topic:threads).

## Wejiyo wareegsan oo siman

STL iyo 3MF waxay ka samaysan yihiin saddexagallo. Wejiyo wareegsan oo siman, guji meel bannaan si waxba loo dooran, ka dibna deji **Curves** ilaa **Fine (128 per turn)** ama **Very fine (256 per turn)** panelka midig, ka hor inta aadan dhoofin. Saddexagallo badan ayaa faylal waaweyn samaynaya.

## Weyn, yar, ama qaybo

- **Export › Scale for printing (STL or 3MF)…** wuxuu kaydiyaa qaybta oo cabbirkeeda lagu beddelay axis kasta iyada oo aan wax laga beddelin: **ogolaanshaha yaraynta** boqolkiiba (cabbir × (1 + s), ama cabbirka saxda ah ÷ (1 − s)) oo loogu talagalay naqshadda tuurista, ama isugeynta fudud, oo ku salaysan dhexda, geeska ugu hoose, dhexda hoose ama bilowga.
- **Export › Split for printing (a zip of pieces)…** wuxuu jejebiyaa qayb aad u weyn daabacahaaga, qaybo kasta oo ku habboon bed-ka aad bixiso, oo ay ku xirmaan dhoobo (pegs), furayaal, dovetails, godad dowel ah ama jeebab magnet ah (fogaanta aad dejisay ku jirta), qayb kasta iyo isku-xidhkiisa oo la lambarado, wuxuuna keydiyaa qaybaha STL ama 3MF zip ah oo leh xaashi isku-dhis. Qaybta laftiisu ma beddelmayso.

## Lama hubin

Dhumucda darbiga, faahfaahinta ka yar nozzle-kaaga, iyo sida slicer-ku u dhigayo supports. Slicer-kaaga ayaa tusa kuwaas.
