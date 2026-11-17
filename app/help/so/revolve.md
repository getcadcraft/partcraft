---
title: Wareeji qayb wareegsan
summary: Naqshadee nus profile ah oo ku taal khadka dhexe, ku wareeji qayb wareegsan, dooro dhidibka iyo xagasha, oo isticmaal jar wareeg si loo sameeyo kab.
keywords: wareeg, revolved boss, jar wareeg, qayb wareegsan, lathe, shaft, dhidib, khadka dhexe, kab, xagal, rev cut
from: 593b6929
---

{{ui:Revolve}} wuxuu ku wareejiyaa profile dhidib ku wareegaya, sida qayb laga sameeyo lathe: shafts, pulleys, flanges, knobs. Revolved cut (menu-ga {{ui:More}} ee kooxda Features) wuxuu ku wareejiyaa profile si uu alaab uga saaro, kabaha iyo godadka.

## Ku wareeji shaft-ka tallaabo-tallaabo

1. Naqshadee **Front plane** dusha.
2. Riix {{key:N}} oo doorso {{ui:Centerline}}. Bilow bilowga, ka dibna guji barta si toos ah u midig, tusaale ahaan 100 mm. Tani waa dhidibka. Waa jajab: geesta dhismaha ma ahan qayb profile-ka.
3. Riix {{key:L}} oo doorso Line. Sawir **nus** profile-ka khadka dhexe kor ku jira sida hal wareeg xidhan: bilow khadka dhexe, u kac sare, ka dibna u soo noqo khadka dhexe, ka dibna ugu soo noqo bilowga. Dhamaadyadiisu waa inay kulmaan: wareegga waa inuu xidhan yahay.
4. Cabbir radiuska (dhererka kor ka khadka dhexe) iyo dhererrada. Dhererka 10 kor ka khadka dhexe wuxuu sameeyaa diameter 20.
5. Dooro {{ui:Exit}}.
6. Dooro {{ui:Revolve}}. Shaft-ku wuu muuqdaa, wareeg buuxa.

Profile-ka waa inuu ku sii jiraa hal dhinac oo dhidibka ah. Haddii uu jaro: "The profile crosses the axis. Keep it on one side of the centerline." Geesta profile-ka waxay ku jiri kartaa dhidibka.

## Dejinta

| Dejin | Waxa ay sameyso | Qiimaha caadiga |
|---|---|---|
| **Operation** | Boss (ku dar alaab), Cut (ka saar alaab), Intersect (ilaali isku-dhaca), ama New body | Boss {{ui:Revolve}} ah, Cut {{ui:More}} › {{ui:Revolved cut}} ah |
| **Angle (°)** | Intee wareeg la rogayo, laga bilaabo wax ka badan 0 ilaa 360 | 360 |
| **Axis** | Khadka dhexe ee kowaad, ama khad kasta ama khadka dhexe ee naqshadda, oo liistaha "Centerline 1 (l1)" ama "Line 3 (l3)" | Khadka dhexe ee kowaad |

Xagal qayb ah wuxuu sameeyaa qayb laba-jibbaaran, oo laga rogo dusha naqshadda hal jihood.

Haddii naqshadda aan khadka dhexe lahayn oo aad ka tagto **Axis** khadka dhexe ee kowaad: "Draw a centerline (a construction line) in the sketch to revolve about." Waxaad sidoo kale dooran kartaa khad adag oo profile-ka ah inuu noqdo dhidibka.

## Jar kab

1. Marka shaft-ka la dhiso, fur naqshad cusub **Front plane** dusha (isla dusha ee naqshadda shaft-ka).
2. Samee khadka dhexe ee isla dhidibka: bilow bilowga, ka dibna u hayso toosan si uu H u helo, ama ku qor **Add by coordinates** (tusaale ahaan `0, 0` ilaa `100, 0`). Naqshad cusub kuma xidhmi karto khadadka naqshad kale.
3. Samee rectangle xidhan oo yar oo ku dul fariisanaya geesta shaft-ka meesha kabka uu tagayo.
4. Dooro {{ui:Exit}}, ka dibna {{ui:More}} › {{ui:Revolved cut}}.

## Qayb wareegsan oo isku-dhisyada ku jirta

Wareeg wuxuu leeyahay dhidib ay sifooyinka kale iyo isku-dhisyadu isticmaali karaan:

- nuqulka **Circular** wuxuu isticmaalaa dhidibka wareegga ugu dambeeya sida caadiga ah (eeg [Sifooyinka nuqulka iyo muraayadda](topic:patterns-mirror));
- isku-dhis dhexdiisa, isku-xidhka u dhexeeya wejiyada ay sameeyeen wareegyada wuxuu bilaabmaa isku-xidh **revolute**, **Centre on** wuxuu bixiyaa "Axis of Revolve1" (eeg [Samee isku-dhis](topic:build-assembly)).

## Curves dhab ah iyo facets

PartCraft wuxuu wareeg ku dhisaa mesh kernel (chip-ka status bar-ka wuxuu leeyahay "Mesh kernel"): qaabab wareegsan waa facets siman, 64 wareeg kasta sida caadiga ah, mugagana way ka yar yihiin qiimaha dhabta ah wax yar (qiyaastii 0.16 % 64 ku). Muuqaalka, STL, 3MF iyo dhoofinta STEP waxay ka samaysan yihiin facets-kaas: deji **Curves** (guji meel bannaan, ka dibna panelka midig) Fine (128) ama Very fine (256) si ay u noqdaan kuwo siman. Silinderyo, kone iyo torus dhab ah u baahan yihiin kernel saxda ah: weli lama dhisin nooca kan. Eeg [Mesh kernel](topic:solid-kernels).
