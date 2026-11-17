---
title: Ilaali moodeel .3dm oo nool
summary: Beddel moodeel barnaamijka soo abuuray oo eeg jidhka PartCraft oo raacaya, Rhino 8 ama qeexida Grasshopper, astaamahaaga oo dib loo dhisay qaabka cusub.
keywords: rhino, grasshopper, xiriirka nool, live link, live connection, 3dm, nurbs, parametric, xiriir, sync, script, push, jidh la soo geliyay
from: cf4dc9b2
---

Sii wad qaabeynta moodeelka meesha aad ku qaabayso, halkanna mashiinka, hubi oo dukumeenti. Isbeddel kasta oo barnaamijka kale ka dhaca wuxuu beddelaa hal jidh oo la soo geliyay PartCraft, astaamaha ka dambeeya wuxuu dib u dhisaa qaabka cusub.

:::note
Xiriirku wuxuu u baahan yahay **CadCraft Studio** isla kombiyuutarka. Tab browser-ka ma qaadi karo xiriirka. Waxba internet-ka ma mareeyo: script-ku wuxuu la hadlaa Studio oo ku jira cinwaanka kombiyuutarkan, oo leh token.
:::

:::warning
Xiriirkan waxaa lagu tijaabiyay qoraha faylka script-ka iyo barnaamij kale oo lagu beddelay, weli ma lagu tijaabin Rhino ama Grasshopper gudahooda. Haddii halkaas wax ku guuldareystaan, na sheeg waxa ay yidhi.
:::

## Dejinta

1. Studio gudahiisa, fur PartCraft. Ku {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Assistants}}, calaamee **Ogolow caawiyaha AI iyo scripts-ka inay isticmaalaan PartCraft**, kadibna **Edit**.
2. Studio gudahiisa, dooro {{ui:Connect an assistant}}. Wuxuu muujinayaa cinwaanka iyo token-ka aad ku dhejin doontid hoos.
3. Soo deji script-ka: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Rhino ka

1. Socodsii `cadcraft_link.py` script editor-ka Rhino (Python 3 ee Rhino 8).
2. Markii ugu horeysay, ku dhaji cinwaanka iyo token-ka. Waxay ku kaydsan yihiin `.cadcraft-link.json` folder-ka guriga, weligood ma ay ku jiraan moodeelka. Studio wuxuu sameeyaa token cusub mar kasta oo bilaabmo, sidaas darteed script-ku mar kale ayuu weydiinayaa.

Si aad joojiso, mar kale socodsii script-ka.

## Grasshopper ka

Marka hore socodsii script-ka hal mar Rhino, si cinwaanka iyo token-ka loo kaydiyo.

1. Ku dar Script component (Python 3) oo ku dhaji `cadcraft_link.py` oo dhan.
2. Siiya gelinadan: `G` (geometry-ga, oo leh list access), `N` (magac, ikhtiyaari), `On` (boolean toggle), iyo `Target` (ikhtiyaari: `model` ama `part`, haddii labada app ay furan yihiin).
3. Hagaaji `On` inuu noqdo true.

Solve kasta wuxuu u diraa `G`, wuxuuna beddelaa waxa component-ku markii hore diray.

## Sidee u shaqeysaa halkan

- **Hal jidh.** Wax kasta oo muuqda moodeelka wuxuu noqdaa hal astaan la soo geliyay, sida markii aad [furto fayl .3dm](topic:open-3dm-files).
- **Waa inuu xirmaa.** PartCraft wuxuu buuxiyaa godadka yaryar iyo furitaanada fidsan, barnaamijka kalena waa la sheegaa tirada. Haddii moodeelku weli aan xirmin, PartCraft wuxuu hayaa jidhkii hore, status bar-kuna wuu sheegaa. Isbeddelka xiga ee xirma ayaa cusboonaysiinaya.
- **Dhammee waxa aad sameynayso.** Sawir ama naqshad gudahooda, cusboonaysiinta waa la diidaa oo mar kale la isku dayaa; way imaan doonaan markaad ku noqoto moodeelka.
- **Ka noqo.** Isbeddello gudaha laba ilbiriqsi ah waxay wadaagaan hal tallaabo oo ka noqoshada.
- **Kaydi.** Faylka qaybta wuxuu ilaaliyaa xiriirka. Markaad mar kale furto, script-ka mar kale socodsii, astaanta isku midka ahna way cusboonaysiinaysaa.

**Hal jid oo keliya.** Isbeddelada halkan ma soo noqdaan barnaamijka kale.

## Haddii wax khaldamo

- **"No ModelCraft or PartCraft window allows it":** samee tallaabada 1 ee dejinta.
- **"Studio refused the token":** Studio dib ayuu u bilaabmay. Koobi token-ka cusub oo mar kale socodsii script-ka. Grasshopper ahaan, marka hore Rhino ku socodsii.
- **"Cannot reach CadCraft Studio":** Studio ma socdo, ama cinwaanku waa isbeddelay.
