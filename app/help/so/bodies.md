---
title: Isku dar, guuri iyo miisaan jidhka; qaabka jidka
summary: Samee jidho kala go'an, kadibna isku xir, goo ama iska gooo kadib, guuri, wareeji, iswaafajiso ama nuqul ka samee, miisaan u dhig si siman ama X, Y iyo Z, oo nuqul astaamo ama jidho dhex-marka jid.
keywords: jidh, jidho, multi-body, jidh cusub, isku dar, boolean, isku xir, goo, isgoyn, kala jar, union, ilaali qalabka, guuri jidhka, nuqul jidhka, wareeji jidhka, iswaafajiso, translate, miisaan, miisaan aan siman, stretch, affine, qaab jid, qaab dhex marka khad, qaab jid
from: 6b1ea820
---

:::note
**Weli lama dhisin nooca hadda.** Shaqada jidho badan waxay u baahan tahay kernel joogto ah oo juhdi sax ah, taas oo nooca PartCraft-kan aan lahayn: wuxuu dhisaa qayb kasta isticmaalaa mesh kernel. [Waxa weli lama dhisin](topic:not-built-yet) wuxuu sharaxayaa waxa lagu samayn karo halkii. Qaybta kale ee bogga waxay sharaxaysaa sida ay u shaqaynayso kernel sax ah.
:::

Qayb wuxuu leeyahay in ka badan hal jidh. Jidh kasta oo kala go'an waa **jidh**. Astaamaha badankoodu waxay ku daraan ama ka goyaan jidh kasta oo ay taabanayaan; qalabyada bogga kanu waxay ka shaqeeyaan jidho oo buuxa oo aad dooratid. Waxay ku yaalaan menu-ga {{ui:Wax dheeraad ah}} ee kooxda Astaamaha: {{ui:Isku dar}}, {{ui:Guuri jidhka}}, {{ui:Miisaan jidhka}} iyo {{ui:Qaab jid}}. Dhammaantood waxay u baahan yihiin kernel sax ah (OpenCascade).

## Samee jidh kala go'an

Deji **Hawlgalka** ee extrude ama revolve ee qaybtiisa midig oo dooro **Jidh cusub** (sweep iyo loft ayaa leh sidaas oo kale). Jidhka cusub wuxuu ka go'an yahay xitaa meesha uu ku walaaqo kuwa kale. **Isgoyn** wuxuu ilaaliyaa oo keliya walaaqa qaabka cusub iyo waxa jira.

Jidhadu waxay ku magacaabmaan astaanta ka bilowday: "Extrude2". Nuqulka waxaa lagu magacaabaa asalkiisa iyo astaanta nuqulka sameysay: "Extrude2, nuqul 1 oo ka mid ah Move1". Magacyadu way joogaan markaad cabbirrada hore u beddesho, sidaas darteed astaamaha isticmaala jidhka way helaan. Haddii laba jidh ama ka badan jiraan, qaybta qaybta (guji meel bannaan) waxay liistaa iyaga iyo mugooyinkooda.

## Magac u bedel ama qari jidh

Guji meel bannaan muuqaalka si aad u aragto qaybta. Liiska jidhadka (oo muuqda marka qaybtu leedahay laba jidh ama ka badan) wuxuu safar kasta leeyahay sanduuq magac iyo badhanka {{ui:Qari}}.

- **Magac u bedel:** qor magac cusub sanduuqa oo riix {{key:Enter}} ama guji meel kale. Dhammaan panel-ka markaas ayaa isticmaala: Isku dar, Guuri jidhka, qaababka. Sanduuqa nadiifi si aad ugu noqoto magaca astaanta sameysay.
- **Qari:** guji {{ui:Qari}} safarkiisa. Jidhku wuu ka baxaa muuqaalka, guujyadu waxay u gudbaan, sidaas darteed waxaad dooran kartaa wejiyada ka dambeeya. {{ui:Muuji}} wuu soo celiyaa; {{ui:Muuji dhammaan}} wuxuu soo celiyaa jidho kasta oo la qariyay.

Qarinta waxay beddeshaa muuqaalka oo kaliya. Jidh la qariyay weli waa la dhisaa, waa la tiriyaa mugga iyo cabbiridda, waxaana lagu kaydiyaa dhoofinta STL, 3MF iyo STEP. Magacyada iyo jidhadka la qariyay waxay ku kaydsan yihiin faylka qaybta, isbeddel kastana waa hal tallaabo oo {{ui:Ka noqo}} ah.

## Isku dar jidho

1. Shift+guji wejiga jidhka **bartilmaameedka**, kadibna wejiga jidh kasta oo **qalab**.
2. Dooro {{ui:Wax dheeraad ah}}, kadibna {{ui:Isku dar}}.
3. Hoosta qaybta midig dooro **Hawlgalka**:

| Hawlgal | Natiijada |
|---|---|
| Isku xir | Bartilmaameedka iyo qalabka waxay noqdaan hal jidh |
| Goo | Qalabyada waa la gooyaa bartilmaameedka |
| Walaaq | Oo keliya qaybta bartilmaameedka iyo qalab kasta wadaagaan ayaa la ilaaliyaa |

**Jidhka bartilmaameedka** waa kan ilaaliya magaciisa. Calaamadee ama ka saar calaamadda **Jidhadka qalabka**, ama isticmaal **Dooro muuqaalka** oo guji wejiyadooda. **Ilaali jidhadka qalabka** wuxuu ka tegaa qalabka meesha sidoo kale (waxtar leh qaabka iyo qalabka qaabka). Haddii jidh qalab hore loo isticmaalay Isku dar, panel-ka ayaa sidaas u sheegaa halkii uu jidh kale dooran lahaa.

## Guuri ama nuqul jidh

1. Dooro {{ui:Wax dheeraad ah}}, kadibna {{ui:Guuri jidhka}}. Jidhka ugu cusub waa la calaamadeeyay; calaamadee kuwa aad rabto inaad guurisid.
2. Dooro nooca **Guuri**:

| Guuri | Waxa aad dejinayso |
|---|---|
| Wareeji | **ΔX**, **ΔY**, **ΔZ** millimitir |
| Barta ilaa barta | **Laga bilaabo** iyo **Ilaa**: guji meel u dhow dhamaadka xarafka, astaamaha barta, ama meel wejiga ah |
| Wareeji dhidib ku wareegsan | **Dhidib** (X, Y, Z, astaamaha dhidibka, ama **Dooro**: xarafka toosan, goobada ama silindarka) iyo **Xagal (°)** |
| Iswaafajiso wejiga wejiga ama diyaarad | **Wejiga la guurayo** (wejiga siman ee jidhka), **Ku dhufo** (wejiga siman ama diyaarad) |

Iswaafajinta waxay jidhka wareejinaysaa si wejigiisu ugu jiifo wejiga kale, wejig ilaa wejig, kadibna waxay ku siibaysaa oo keliya jihada wejigaas. **Isku jihada** wuxuu u wareejiyaa si ka soo horjeeda. **Nuqul** wuxuu ilaaliyaa asalka oo wuxuu ku daraa nuqulka la guuray jidh cusub.

## Miisaan jidh

1. Dooro {{ui:Wax dheeraad ah}}, kadibna {{ui:Miisaan jidhka}}, oo calaamadee jidhadka.
2. Qor **Miisaan**, ama ka saar **Siman** oo qor **Miisaan X**, **Miisaan Y** iyo **Miisaan Z** (dhidibbada adduunka).
3. **Ku wareegsan** waa barta ku jirta meeshay: dhexda sanduuqa jidhadka, ama barta aad dooratid.

Miisaanka siman waa sax. Miisaanka aan siman wuxuu wareegyada ka dhigaa goobo: silindar wuxuu noqdaa silindar ellipse ah, oo uusan surface analytic ah hayn, sidaas darteed wejiyada wareegsan waxay noqdaan wejiyo B-spline oo ku dhow 0.0000004 mm dhabta; wejiyada siman iyo xarafyada toosan waxay ku sii jiraan sax. Panel-ku wuxuu sheegaa wixii dhacay. Qiyaasaha miisaanka waa in ka weyn eber (ku dhufo {{ui:Muraayad}} halkii).

## Nuqul ka samee jid

1. Dooro astaamaha la koobiyeynayo taariikhda, ama ha wax dooran si aad u nuqusho jidhka ugu cusub.
2. Dooro {{ui:Wax dheeraad ah}}, kadibna {{ui:Qaab jid}}. Sawirka ugu cusub ee aan la isticmaalin ayaa loo qaadaa jid.
3. Hoosta qaybta midig deji:

| Dejinta | Waxa ay sameysa |
|---|---|
| **Nuqul** | Jidhadka (nuqul kasta oo jidh cusub) ama Astaamaha (lagu xidhay ama lagu goyay sida asalka) |
| **Jid** | Calaamadee sawirrada, ama **Dooro geesaha moodeelka**; qaybaha waa inay isku xidhmaan dhamaad ilaa dhamaad |
| **Tirada** | Wadarta oo dhan, oo ay ku jiro asalka |
| **Fogaanta** | Siman (si siman oo jidka furan dhamaadkiisa ilaa, ama dhammaan wareegga jidka xidhan) ama masaafo la dejiyay |
| **Jihaynta** | Raac jidka (nuqul kasta wuu u wareegaa) ama Go'an (nuqullada way is barbar joogaan) |
| **Jihada rogaysa** | U socod jidka dhinac kale |

Nuqullada waxay bilaabaan meesha jidka uu asalka ugu dhow yahay, waxaana loo fogeeyaa dhererka dhinaca curve-ka.

Qaabka toosan iyo kan wareegsan waxay sidoo kale nuqul ka samayn karaan jidhadka: calaamadee **Nuqul jidhadka** panel-kooda oo dooro jidhadka; nuqul kasta waa jidh cusub.

## Xaddidaadyo

- Jidhadku waxay u baahan yihiin kernel sax ah; mesh kernel wuxuu ilaaliyaa hal jidh kaliya wuxuuna sheegaa taas.
- Miisaan aan siman wuxuu wejiyada wareegsan ka dhigaa B-spline ku dhow (eeg sare), ma aha silindar ama koon sax ah; wejiyada offset-ka lama miisaami karo habkaas weli.
- Raacida jidka curve 3D oo wareeg ah wuxuu nuqulka u qaadaa iyada oo aan la wareegin; jidadka siman, wareegu waa sax.
- Isku dar wuxuu shaqeeyaa oo keliya jidhadka adag. Jidhadka dusha waxaa lagu isku xiraa {{ui:Stitch}}.

Eeg sidoo kale [Dhismaha, dhidibada iyo barta](topic:reference-geometry) barta iyo diyaarada "dhexdooda ah", iyo [Astaamaha qaabka iyo muraayada](topic:patterns-mirror).
