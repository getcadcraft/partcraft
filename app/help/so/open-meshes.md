---
title: Fur STL, OBJ ama 3MF sida jidh adag
summary: U rog mesh ka yimid scanner, goob daabacaadda 3D ama barnaamij kale jidh adag oo aad jari, ku dari karto oo ku sawiri karto; wixii PartCraft ku saxo habka, iyo wixii aanay samayn karin.
keywords: stl, obj, 3mf, mesh, mesh ilaa jidh adag, beddel mesh, scan, watertight, saxid, god, geeso furan, unitiyada, sare, jidh la soo geliyay, wejiyo siman
from: 7b948471
---

PartCraft wuxuu furaa STL, OBJ iyo 3MF mesh-yada sida **jidh adag**. Jidhku wuxuu u shaqeeyaa sida jidh adag kasta: jar, ku dar, god ka sam, qaab sameey, isticmaal isku-dhis ama machining, oo sawir-gacmeed ku samee wejiyadiisa siman. Taariikh u gaar ah ma leh: mesh waa triangles oo keliya, sidaas darteed cabbirradiisa ma beddeli karo, waxaa laga ku dari karaa ama laga jari karaa.

## Fur mesh

1. Dooro {{ui:Fur}} ama riix {{key:Mod+O}}, oo dooro faylka `.stl`, `.obj` ama `.3mf`. Ama ku dhig muuqaalka 3D.
2. PartCraft wuu akhriyaa, wuxuu saxaa wixii si nabad ah u saxi karo, wuxuuna muujinayaa wixii uu helay: inta triangle iyo dhibic, saxid kasta, iyo haddii mesh-ku hadda **xirmayo**.
3. Hubi **Unitiyada faylka** iyo **Sare ee faylka**. STL iyo OBJ ma sheegaan unitiyadooda, sidaas darteed millimitir ayaa la mala-awaalaa; faylka 3MF wuxuu sheegaa kiisa. Khadka **Size here** wuxuu muujinayaa cabbirka jidhka doorashadaada, sidaas darteed qayb 25.4 jeer oo yar la soo galay way fududaan karta in la ogaado (waxay ahayd inch).
4. Haddii qaybta shaashadda ku jirta ay madhan tahay, dooro {{ui:Fur sida jidh}}. Haddii uu horey u leeyahay astaamo, dooro **Isticmaal si loo** (ku dar qaybta, ka jar, ama ku hay kaliya isgoysyada), kadibna {{ui:Ku dar qaybtan}}, ama {{ui:Qayb cusub}} si aad mar kale ugu bilowdo mesh-ka.

Astaamaha **Imported1** ayaa ka muuqda taariikhda. Xariiqda xaaladda wuxuu tusaale ahaan leeyahay, "bracket.stl waa jidh adag: 15200.512 mm³, 14 wejiyo siman oo sawir-gacmeed lagu sameeyo."

## Waxa PartCraft saxa

| Saxid | Micnaha |
|---|---|
| Geesaha laba-laab ah ayaa isku xiran | STL wuxuu geesaha kasta ku celiyaa triangle kasta; waa la isku xiraa hal dhibic |
| Triangles aan bal lahayn la tirtiray | Jeexjeexyo geesahoodu hal khad ku yaal |
| Triangles laba jeer la qoray la tirtiray | Triangle lagu qoray laba jeer waa lagu hayaa mar; laba jihooyin iska soo horjeedaan (darbi gudaha ah) labadaba waa la tirtiraa |
| Godad yar la xiray | Geesaha ku dhow inay isku kulmaan (dhibcaha ka yar hal kun qaybta cabbirkeeda) waa la isku xiraa |
| Godadka la buuxiyay | God ay xadkiisu siman yahay waa la buuxiyaa cabbirkiisa midna; mid qallooca ah keliya marka uu yar yahay |
| Triangles dibadda loo rogay | Triangles jihada qaldan ah waa la rogaa si ay ula mid noqdaan deriskooda, dusha oo dhan dibadda ayuu u eegaa |

## Marka mesh-ku aanay xirmin

Jidh adag wuxuu u baahan yahay dusha aan godad lahayn. Marka PartCraft uusan xidhi karin, qoraalku wuxuu sheegaa inta god iyo geeso furan ee harsan, jidh lagu daro ma jiro. Godadka ku xir barnaamijka mesh-ka sameeyay, ama mar kale dhoofi mesh xidhan (watertight), kadibna mar kale fur.

PartCraft wuxuu god ka tegaa marka buuxintu khalad ka dhigi karto: god weyn oo qallooca ah, ama laba god oo diyaar isku mid ah (wejig giraangiran oo maqan, halkaasoo buuxinta geesta kasta ay daboolayso godka dhexe). Geesta laga wadaago ka badan saddex triangle ayaa sidoo kale la sheegaa: dusha noocaas ahi ma laha gudaha hal oo cad.

## Sawir-gacmeed ku samee wejiyadiisa siman

Meelaha siman oo ka samaysan triangles badan waxay mid walba isku darmaan **weji siman** oo keliya, si sawir-gacmeed ugu fadhiisan karo: riix wejiga oo dooro {{ui:Sawir-gacmeed wejiggan ku yaal}}. Weji la jaray ama dib loo daray wuxuu weli yahay weji. Meelaha wareegsan (god, fillet) waxay weli yihiin triangles: ma aha wejiyo aad dooran karto, muuqaalkuna geesahooda wuxuu ka sawiraa xagasha u dhexaysa triangles-ka.

## Isbeddel ka dib

Dooro **Imported1** si aad u aragto faylka uu ka yimid, inta triangle uu leeyahay iyo wixii la saxay. **Unitiyada faylka**, **Sare ee faylka** iyo **Isticmaal si loo** halkaas ayaa lagu beddeli karaa; isbeddel kasta waa hal tallaabo oo Ka noqo.

## Halka lagu kaydiyo

Mesh-ka la saxay waxa lagu kaydiyaa **gudaha** faylka `.partcraft.json`, sidaas darteed uma baahnid faylka mesh mar kale. Faylka qayb leh jidh mesh ah waa nooca 5: PartCraft-ka hore wuu diidaa adigoo eegaya nooceeda. Mesh 200,000 triangle ah wuxuu ku daraa ku dhawaad 1.2 MB.

## Xuduudaha

- Ugu badnaan 3 milyan triangle iyo 200 MB hal fayl gudihiisa.
- Jidh mesh ka samaysan waxaa dhisa kernel-ka mesh-ka. Kernel-ka sax ah oo karti (horumariyeyaasha keliya), waa sheegaa taas oo aan la dhisin.
- Agabka OBJ, texture coordinates iyo qalooca bilaa-qaab waa la reebaa; midabada 3MF, agabka iyo shayada taageerada waa la reebaa (qoraalku wuxuu sheegaa inta shay ee la dhaafay).
- Jidhku wuxuu ka fiican yahay mesh-ka oo kale: STL qallafsan wuxuu siiyaa wejiyo wareeg qallafsan. Godadka aad ku godaysid waxay noqonayaan wareeg sida astaamahaaga.
