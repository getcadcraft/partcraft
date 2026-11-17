---
title: Fur fayl STEP oo ku dhis
summary: Ku keen moodeel STEP oo bixiyaha ama barnaamij CAD kale ka yimid PartCraft sida jidh adag, sida qayb cusub ama lagu daro qaybta hadda jirta, u deji jihada sare, oo ku dar sawir-gacmeedyo iyo astaamo.
keywords: step, stp, soo geli, fur step, ap203, ap214, ap242, moodeelka bixiyaha, jidh adag la soo geliyay, jihada sare, z sare, y sare, saddexagaal, dhinacyo yaryar, isku-dhisidda tallaabada
from: ca0eca5f
---

PartCraft wuxuu furaa faylasha STEP (`.step` ama `.stp`, AP203, AP214 iyo AP242) sida **jidh adag** oo aad ku sawiri karto sawir-gacmeed, ku gooyi karto, ku qodi karto, oo aad ku dari karto astaamahaaga. Jidhka taariikh gaar ah ma leh: ma beddeli kartid cabbirrada lagu sameeyay; waxaad keliya ku dari kartaa ama ka gooyi kartaa.

Nooca kanu wuxuu qayb kasta ku dhisaa kernel-ka mesh-ka, sidaas darteed faylka STEP waxa **lagu akhriyaa saddexagaalo**: wejiyada sinaanka ahi sinaan ayay ahaadaan, wejiyada wareegsan (silinadaro, koonooyin, kuraalo, torus-yo, wejiyada B-spline) waxay noqdaan dhinacyo yaryar oo badan. Mugga wuxuu ku dhow yahay qayb boqolkiiba mid oo ka mid ah kan saxda ah. Wejiyada wareegsan si saxda ah loo haysto waxay u baahan tahay kernel saxda ah, taas oo aan nooca hadda ku jirin.

## Fur fayl STEP

1. Dooro {{ui:Open}} ama riix {{key:Mod+O}}, kadibna dooro faylka `.step` ama `.stp`. Ama dhig faylka muuqaalka 3D.
2. PartCraft wuxuu akhriyaa faylka wuxuuna muujiyaa waxa helay, tusaale ahaan: "Faylka AP214: 1 jidh adag, 10 wejiyo, waxaa la akhriyay saddexagaalo." Hoosta waxaa ah tirada saddexagaalada, waxa uu ka tagay ama isku daray, iyo haddii natiijadu xidhmi.
3. Hubi **Sare ee faylka**. Faylka STEP wuxuu sheegaa unitkiisa (millimitir, inji, mitir…); PartCraft wuxuu u beddelaa millimitir, sidaas darteed **Unugyada faylka** wuxuu muujiyaa Millimitir, "faylku sidaas ayuu sheegaa". **Cabbirka halkan** wuxuu muujiyaa inta ay weyn tahay.
4. Dooro {{ui:Open as a body}} qayb madhan ah, ama {{ui:Add to this part}} / {{ui:New part}} marka qaybtu horey u leedahay astaamo. Ku darista waxay weydiisaa inuu **Isticmaal si** u sameeyo: ku dar, ka gooy ama hay kaliya isku-dhafanka.

Astaamaha **Imported1** ayaa soo muuqda taariikhda, status bar-kuna wuxuu sheegaa, tusaale ahaan: "plate.step waa jidh adag: 57995.937 mm³, 6 wejiyo sinaan ah oo lagu sawiro."

## STEP isku-dhis

Isku-dhis wuxuu u yimaadaa **hal jidh** oo leh qayb kasta meesha faylku ku dhigay ("3 qaybood oo faylka lagu dhigay ayaa u yimaada meelkii ay istaagayeen"). Qayb la isticmaalo laba jeer waxay u imaadaa laba jeer. Magacyada qaybaha iyo geedka isku-dhiska lama hayo.

## Dejinta jihada sare

Barnaamijyada CAD badankood waxay isticmaalaan Z sare; PartCraft wuxuu isticmaalaa Y sare. Caadi ahaan PartCraft wuu rogaa faylka si Z uu u tilmaamo sare halkan. Haddii qaybtu ku yimaado oo ku jiifta dhinaca, dooro **Imported1** oo deji **Sare ee faylka** oo ah **Y sare**. **Unugyada faylka** iyo **Isticmaal si** ayaa sidoo kale halkaas laga beddeli karaa; beddel kasta waa hal tallaabo oo ka noqosho.

## Ku dhis

- Guji wejiga qallafsan ee jidhka oo dooro {{ui:Sketch on this face}}. Wejiyada qallafsan ee moodeelka STEP waxay ku sii joogaan meeshooda marka jidhka dib loo dhisayo.
- Ku dar goyn, godad, bosses, celin-naqshadeed (patterns) iyo muraayadeyn (mirrors) sida qayb kasta.
- Hubi cabbirkiisa sanduuqa **Qayb**: mugga, dusha, cabbirka.

Fillet, chamfer iyo shell waxay u baahan yihiin kernel-ka saxda ah, sida qayb kasta oo nooca hadda ah ([Kernel-ka mesh-ka](topic:solid-kernels)).

## Meesha lagu kaydiyo

Saddexagaalada waxa lagu kaydiyaa **gudaha** faylka `.partcraft.json`, sidaas darteed faylka qaybtu wuu iska buuxaa: uma baahnid faylka STEP mar kale.

## Fariimaha

| Fariinta | Waxa ay ka dhigan tahay |
|---|---|
| '"part.stp" ma aha fayl STEP (ma bilaabmo ISO-10303-21).' | Faylku ma aha qoraal STEP caadi ah. Weydii dirayaha fayl STEP oo AP203, AP214 ama AP242 ah |
| "Faylka STEP ma akhrin karo: qaybta xogta ayaa maqan ama waa jabsan." | Faylku waa la jaray ama waa jabay. Dib u koobiyee |
| "Faylka STEP ma lahan jidh adag ama jidh dusha ah: wax la keeno ma jiro." | Faylku wuxuu kaliya haystaa sawirro, dhibcood ama xog. Weydii jidh adag |
| "Faylkaas STEP wuu weyn yahay (ka badan 60 MB) si loo soo geliyo halkan." iyo xadka kale ee akhristaha (galitaanno, wejiyo, saddexagaalo) | Moodeelka ilaha ka yaree, ama u dir qaybaha mid mid |
| "… sadarro jabsan oo faylka ku jira ayaa la dhaafay." | Sadarro qaar ma akhrin karin; kuwa kale way soo galeen. Hubi jidhka |
| "… wejiyo lagama samayn karin saddexagaalo, waana laga tagay." | Wejiyadaas waxay ka tagayaan godad, PartCraft wuu isku dayaa inuu buuxiyo; haddii jidhku aanu xidhmin, lama darayo |
| "… wejiyo nooc aan la akhriyi karin (…) ayaa la dhaafay." | Nooc dusha oo aan badnayn. Weydii moodeelka oo leh dusha caadi ah ama B-spline |
| "Ma xidhmo …" | Wejiyadu ma sameeyaan jidh xidhan (moodeel dusha ah, ama wejiyo la tagay). PartCraft wuxuu muujiyaa furitaanada wuuna darayo waxba |

## Xuduudaha

- Wejiyada wareegsan waxa lagu muujiyaa oo lagu cabbiraa sida dhinacyo yaryar, sida qayb kasta oo nooca hadda ah. PartCraft wuxuu jidhka la hayaa wejiyada sinaanka ah, silinadarada, koonooyinka, kuraalaha iyo torus-yada ee faylka, sidaas darteed {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} wuxuu dib ugu qoraa sida wejiyo runta ah, godadka sida godad, oo ay weheliyaan astaamaha aad ku darto. Wejiyada faylku u muujiyo sida splines, sweeps ama dusha jaangooyada ah waxay sii ahaanayaan dhinacyo yaryar dhoofinta. Qayb la kaydiyay ka hor 0.9.1 ma leh dusha la hayo: dib u fur faylka STEP si aad u hesho.
- {{ui:Export}} › {{ui:DXF of the sketch or flat face}} marka wejiga sinaanka ah la doorto wuxuu qoraa godka wareegsan ee faylka sida goobo runta ah.
- Midabbada, magacyada jidhadka, qaab-dhismeedka isku-dhisku iyo PMI (dulqaadka ku jira faylka) lama akhriyo.
- Marka laga reebo STEP, PartCraft wuxuu furaa mesh-yada STL, OBJ iyo 3MF ([Fur STL, OBJ ama 3MF](topic:open-meshes)) iyo faylasha `.3dm` ([Fur moodeel .3dm](topic:open-3dm-files)) sida jidh adag. Faylasha IGES iyo kuwa asalka ah ee barnaamijyada kale lama taageero.
- Qayb leh jidh STEP ah oo ay soo geliyeen dhisme leh kernel saxda ah waxay hayn qoraalka STEP; nooca hadda wuu iska tuurayaa astaamahaas ("wali lama dhisin"). Dib u fur faylka STEP si aad jidhka uga soo geliso sida saddexagaalo.
