---
title: Qaabab xor ah oo Form ah, iyo astaamaha dusha
summary: Riix oo jiid kaab xarig siman oo ku jira goobta Form, xardhay geesaha, isticmaal simmetri, hubi oo dhammaystir qayb adag ama dusha saxda ah, kadibna ku daa, loft, stitch, qaro, offset, extend iyo trim dushyada Design-ka. Waxa saxda ah iyo waxa lagu qiyaasay.
keywords: form, qaab xor ah, t-spline, subdivision, catmull-clark, kaab, quadball, xardh, simmetri, zebra, qallooc, curvature, dusha, ku daa, loft surface, stitch, sew, qaro, offset surface, extend, trim
from: 0d326ef4
---

:::note
**Wali lama dhisin nooca hadda.** Dhammaystirka qaabka qaybta gudaheeda, iyo astaamaha dusha, waxay u baahan yihiin kernel joogto saxan, oo nooca PartCraft-ka hadda ma leh: wuxuu qayb kasta ku dhisaa mesh kernel. [Waxa aan wali la dhisin](topic:not-built-yet) wuxuu sheegayaa waxa lagu sameeyo halkaas. Qaybta kale ee bogga waxay ku tusaysaa sida ay u shaqeeyaan kernel-ka saxda ah.
:::

Goobta **Form** waxay samaysaa qaabab dabiici ah. Waxaad tafatirtaa **kaab**, oo ah mesh qaro ah oo geesood, xarigyo iyo dhinacyo ka kooban. Qaabku waa dusha siman ee kaabku xakameeyo (Catmull–Clark limit surface), sidaas darteed hal geeso oo la jiido ayuu dusha si tartiib ah ugu foorarsadaa. Marka ay u eegto sida ay tahay, **Finish** wuxuu ku daraa taariikhda qaybta sida feature *Form*, kernel-ka saxdana wuxuu u beddelaa B-spline dusho dhab ah. Ka dib waad ku qaroodi kartaa (fillet), gooyn kartaa, ku xidhi kartaa qaybaha kale, oo waad u dhoofin kartaa STEP.

Dooro **Form** liiska **Workspace** ee bidix ee toolbar-ka.

## Bilow kaab

1. Deji **Size** iyo **Divisions** panelka midig. Divisions waa inta dhinac kasta u qaybsanaysa.
2. Dhagsii {{ui:Box}}, {{ui:Quadball}} ama {{ui:Plane}} toolbar-ka. Panelka waxaa kaloo ku jira **Cylinder**, **Torus** iyo **Faces by clicks**.

- **Quadball** waa kaab sanduuq ah oo lagu habeeyey in geesaha ay ku taal goon. Inta u dhaxaysa geesahaas dusha wuxuu ku jiraa wax yar gudaha goonka: qiyaastii 0.4 % mugga ka yar oo leh 2 divisions.
- **Plane** waa furan, sidaas darteed waxay noqotaa jidh dusha (eeg "Surface features in Design" hoose).
- **Faces by clicks**: dhagsii 4 barood korka (dhulka) diyaarada ama geesaha kaabka si aad u samayso hal dhinac. Dhinacyada wadaaga geesaha way isku xidhmaan. Kadib 3 barood riix {{key:Enter}} si aad u samayso saddex-geesood, ama {{key:Esc}} si aad u joojiso.

Kaabkaaga aan dhammaynin wuxuu lagu kaydiyaa faylka qaybta, markaa faylka waad xidhi kartaa oo mar dambe sii wadi kartaa.

## Dooro oo dhaqaaqi

- Dhagsii geeso, xarig, ama dhinac kaabka. {{key:Shift}}+dhagsii wuxuu ku daraa ama ka saaraa. {{key:Esc}} wuxuu nadiifiyaa doorashada.
- Gizmo ayaa ka muuqda bartamaha doorashada. Jiid fallaad si aad ugu dhaqaaqdo jihadeeda, ama jiid labajibbaaran si aad ugu dhaqaaqdo diyaarada. Riix {{key:W}} si aad u guurto, {{key:E}} si aad u wareegto, {{key:R}} si aad u cabbirto, ama isticmaal badhamada panelka. {{ui:Gizmo}} toolbar-ka ayuu u dhex maraa iyaga.
- **Soft falloff** (mm) wuxuu sidoo kale jiidaa geesaha ku jira masaafadaas, isagoo si tartiib ah u dhimanaya ilaa eber meesha masaafadu dhammaato.
- Jiid kasta waa hal tallaabo oo ka noqod ah: {{key:Ctrl+Z}} iyo {{key:Ctrl+Y}} sida caadiga ah ayay shaqeeyaan.

## Beddel kaabka

Badhamada **Modify** ee panelka waxay shaqeeyaan doorashada:

| Badhanka | Waxa uu sameeyaa |
|---|---|
| {{ui:Extrude}} | Dhinacyada la doortay waxay u dhaqaaqaan **Extrude distance** masaafada, jihada normal-keeda, iyagoo samaynaya dhinacyo cusub. Xarigyada furan ee la doortay waxay dibadda dhisaan dhinacyo cusub. |
| {{ui:Edge loop}} / Insert edge loop | Wuxuu kala qaybiyaa silsiladda dhinacyada afar-geesood ah ee gudbaysa xarigga la doortay, bartamaha. Wareeg badan wuxuu siiyaa qaloocyo adag. |
| Insert point | Wuxuu ku daraa geeso bartamaha xarigga la doortay. |
| Subdivide | Wuxuu dhinac kasta oo la doortay u kala qaybiyaa dhinacyo afar-geesood ah oo ku wareegsan bartamaha. |
| Bridge | Wuxuu isku xidhaa laba dhinac oo la doortay, ama laba fur (dooro hal xarig furan dhinac kasta) tuubo dhinacyo ah. Labaduba waa inay lahaadaan isla tirada xarafyada. |
| Fill hole | Wuxuu xidhaa furka ku yaal xarigga furan ee la doortay hal dhinac. |
| Weld | Wuxuu geesaha la doortay isku dhejiyaa hal geeso, bartamahooda. |
| Flatten | Wuxuu geesaha la doortay u guuraa diyaarada ugu fiican ee ku habboon. |
| Delete | Wuxuu tirtiraa dhinacyada la doortay, xarigyada (laba dhinac ayaa isku biiraya) ama geesaha. |

## Geesaha xiran, simmetri iyo muuqaal

- {{ui:Crease}} wuxuu geesaha la doortay ka dhigaa kuwo xiran. **Crease weight** 10 waa xiran oo buuxa. Miisaan yar wuxuu xiran yahay tallaabooyin hadda kadib wuu nuugaa, taasoo siisa wareeg adag halkii laga siin lahaa qalab kulul. **Uncrease** wuxuu dib ugu celiyaa siman. **Sharp vertex** wuxuu geeska xiraa si dusha uga gudbo barta.
- **Symmetry** wuxuu kaabka ka muujiyaa X, Y ama Z = 0. Wuxuu hayaa dhinaca togan, muujiyaa, oo labada qaybood isku xidhaa. Kadib, tafatirka dhinac kasta labadaba ayuu saameeyaa. Geesaha ku yaal dhinaca muujinta way ku sii jiraan.
- {{ui:Display}} wuxuu u beddelaa **Smooth** (dusha uu feature-ku noqonayo) iyo **Box** (dhinacyada kaabka laftiisa).
- **Analysis**: **Zebra stripes** wuxuu ka muujiyaa iftiin xariiqyo leh muuqaalka hadda. Si siman ayay dusha siman ugu foorarsadaan, xagga xiranna way jabaan. **Mean curvature** wuxuu midabeeyaa meelaha qummanaha ah casaan, meelaha qoto dheer buluug, meelaha siman caddaan. Waxaa lagu cabbiraa mesh-ka muuqda iyadoo la adeegsanayo cotangent formula, sidaas darteed waa hage, ma aha cabbir.

## Hubi oo dhammaystir

- **Check exact** wuxuu kaabka u beddelaa kernel-ka saxda ah isagoo aan beddelin qaybtaada. Wuxuu sheegaa inta B-spline patch ah ee kaabku sameeyo, inta ka mid ah ee saxda ah, iyo haddii natiijadu tahay jidh adag oo xidhan oo sax ah iyo mugggeeda.
- {{ui:Finish}} wuxuu taariikhda ku daraa feature *Form*, ama wuxuu cusboonaysiiyaa qaabka aad tafatirayso, wuxuuna kuugu celinayaa Design. Kaab xidhan wuxuu noqdaa jidh adag. **Operation** ee panelka Design waxay noqon kartaa New body, Join, Cut ama Intersect. Kaab furan wuxuu noqdaa jidh dusha.
- Si aad qaab ugu beddesho kadib, dooro taariikhda oo riix **Edit in Form**. Jidhka la dhisay wuu qarsoon yahay intaad kaabka tafatirayso.
- **Discard** wuxuu tuuraa kaabka isagoo aan taariikhda taabsanin.

## Waxa saxda ah iyo waxa lagu qiyaasay

Dhinac afar-geesood ah oo kaabka ka mid ah, marka loo baahdo la hagaajiyo, wuxuu noqdaa hal bicubic B-spline patch.

- Marka geesaha dhinac kasta ay yihiin *regular* (afar xarig ayaa ku kulma gudaha dusha, ama saddex dusha furan ama qallooc dhexdiisa), patch-ku waa **saxda ah** dusha subdivision. Tijaabooyinku waxay hubiyaan ilaa 1e-9 mm.
- Ku wareegsan **barta aan caadiga ahayn** (saddex, shan ama in ka badan oo xarig ah oo kulma, geesta saddex ama shan dhinac leh, ama dhamaadka qallooc) ma jiro patch polynomial oo saxda ah. Halkaas patch-ku wuxuu qaataa barta saxda ah iyo diyaarada taabashada, iyo khadadka geesaha deriska, si patch-yadu isugu xidhmaan aan wax furan lahayn. Isku-taabashada geesaha ku kulma barta waa qiyaas. Panelka Form iyo panelka feature-ka waxay bixiyaan xagalka ugu weyn, badanaa ka yar 2°. **Level** sare oo panelka feature-ka ah wuxuu patch-yada ka dhigaa kuwo yar oo u dhow.
- Qallooca xiran waa xarigyo dhab ah oo jidhka ah, sidaas darteed waad ku qaroodi kartaa (fillet).
- Patch kasta waa dusha u gaar ah, sidaas darteed qaabku wuxuu leeyahay dusho badan, khadadkuna waxay u dhaxaysaa.

## Astaamaha dusha ee Design

Amarrada dusha waxay ku jiraan menu-ga {{ui:More}} ee Design, hoos ka feature-yada. Waxay u baahan yihiin kernel-ka saxda ah. Jidhka dushu waxaa lagu muujiyaa buluug see-through ah. Ma aha qayb jidhka adag ilaa aad ku qaroodo ama ku stitch-gareyso.

| Amarka | Waxa uu sameeyaa |
|---|---|
| Patch | Wuxuu buuxiyaa wareeg xidhan oo xarigyo ah. Marka hore **Shift**+dhagsii xarigyada jidhka, ama dooro jidh dusha si aad u buuxiso furkiisa. **Tangent (G1)** wuxuu patch-ka ku dhejiyaa dusha taas si siman. |
| Loft surface | Dusha ka dhex mara hal silsilad curve ah sketch kasta (furan ama xidhan), taariikhda kala horreeya. |
| Stitch | Wuxuu isku xidhaa jidhka dusha xarigyada ay wadaagaan. Hadday xirmaan, natiijadu waa jidh adag, Operation ah sida feature-yada kale. |
| Thicken | Wuxuu jidhka dusha dhumucdo siiyaa: jihada normal-keeda, ka soo horjeedka, ama badhka midkiisa. Natiijadu waa jidh adag. |
| Offset surface | Nuqul jidhka dusha ah oo loo wareejiyay normal-keeda. Asalku wuu sii jiraa. |
| Extend surface | Dusha hal dhinac ah wuxuu ka fidiyaa xarigyada aad doorato. |
| Jar dusha | Wuxuu gooyaa jidhka dusha meesha uu ka gudbo jidh dusha kale ama jidhka adag. Riix **Pick a point on the piece** si aad u doorato qaybta la ilaalinayo, ama ilaali wax kasta oo kale. |

Stitch, Thicken, Extend iyo Jar dusha waxay isticmaalaan jidhka dusha ee ay ka bilaabaan. Feature-yada dambe waxay isticmaalaan midka cusub.

Xadka hadda: qaababka leh dhowr qayb oo xidhan oo kala go'an ma u beddelmaan hal jidh adag; meelaha joogtada ah ma isku dhejinayaan dusho weyn; iyo eeg [Waxa aan wali la dhisin](topic:not-built-yet).
