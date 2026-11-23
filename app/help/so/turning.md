---
title: Jaridka kharaadada
summary: Wejig, ku dhow, dhamaystir, godka, ka jar, dhuunto iyo godin qayb wareegaysa, adigoo ka bilaabaya qaabka qaybtu samayso markii ay wareegayso. Qalabka kharaadada, quudinta halka wareeg kasta, post-yada kharaadada, iyo waxa aan wali la caddeynin.
keywords: turning, lathe, kharaad, jarid kharaad, wejig, ku dhow, dhamaystir, godka, grooving, ka jar, parting, cut off, dhuunto, threading, g32, g33, g96, xawaaraha dusha joogto ah, css, nose radius, insert, bar, chuck, dhexroor, quudinta halka wareeg kasta, feed per revolution, g71, g76
from: d8cc53b0
---

Wax soo saarka wuxuu leeyahay toddobo howlgal oo kharaad ah. Waxay shaqeeyaan qayb kasta: waxa la jarayo waa **qaabka qaybtu samayso markay wareegayso** dhexda agabka, sidaas darteed qayb aan wareeg ahayn waa la jarayaa ilaa qaabka wareega ah ee haya.

**Waxan lama wada wareegin kharaad.** Waddooyinka waxaa lagu hubiyaa joomatariga tijaabooyinka; labada post ee kharaadada waxay raacaan koodhadhka dukumintiga xakameeyayaasha. Marka hore barnaamijka ku caddee simulator-ka xakameeyahaaga iyo hawada.

## Dejinta

Tab-ka **Dejin**:

- **Tiirka qalabka** waa tiirka spindle-ka, Z ee kharaadada. Qaybta hore waxay ku taal +Z; chuck-ka ayaa haya dhinaca kale.
- **Agabka bilowga**: dooro {{ui:Cylinder}}, oo ah bar. Sare-ka ee ka-saaran wuxuu yahay wixii wejig-jarista ka saaro.
- **Asalka shaqada**: dhexda sare ee agabka ama moodeelka ayaa Z0 dhig wejiga hore, taas oo meesha caadiga ah.
- **Xakameeye**: {{ui:Fanuc-style lathe (.nc)}} ama {{ui:LinuxCNC lathe (.ngc)}}. Post jarista ah wuu diidaa barnaamijka kharaadada wuuna sheegaa.
- **Xawaaraha ugu badan ee bilaca**: xadka xawaaraha dusha ee la hayo.

{{ui:More}} qalab-sanduuqa Wax soo saarka wuxuu liistaa toddobada howlgal kharaadada sare tab-ka **Howlgallada**. Howlgalka ugu horreeya ee aad ku darto wuxuu keenaa qalabkiisa: **turning insert** (nose radius, insert angle, cutting edge angle) ama **grooving blade** (ballac, corner radius, sida uu u gaaro). Ka beddel tab-ka **Qalabka**. Quudintu waa halka wareeg kasta, xawaarahana waa xawaare dusha oo m/min ah oo kontoroolku hayo intii dhexroorku isbedelo; qalab siiyo rpm gaar ah si aad xawaaraha u hagaajiso.

## Howlgallada

| Howlgal | Waxa uu sameeyo |
|---|---|
| {{ui:Face}} | Wejiga hore ee bar-ka u jara qaybta, hal tallaabo-hoos mar, laga bilaabo dibadda ilaa wax ka dhaadhaca dhexda. |
| {{ui:Rough}} | Marin dhererka Z ka fogaanta **qoto-dheer jarista** ilaa qaabka iyo **agabka la reebo**; kadibna hal jeer qaabka dhanka si looga saaro tallaabooyinka. Dooxada u dhexaysa labo xiid waxa lagu galaa plunge ah hal qoto-dheer jarista. |
| {{ui:Finish}} | Hal marin qaabka dhanka, oo ah qayb ka mid ah quudinta qalabka. |
| {{ui:Groove}} | Wuxuu ku riixaa qalabka dhinac-dhinac meel kasta oo uu ka qaadan karo wax ka badan xadka agabka ee weli taagan: godyada uu insert-ka kharaadadu gaari waayay. **From / To Z** ayaa yareeya. |
| {{ui:Part off}} | Qaybta ka jaraa dib-u-daba ee dhabarkeeda dambe, ilaa dhexda ka dhaadhacda, oo leh pecks haddii aad dejiso mid. |
| {{ui:Thread}} | Dhuunto dibadda: dhexroorka weyn, pitch, dherer, tirada marinnada. Qoto-dheer 0 waxa uu ka dhigan yahay 0.6134 × pitch (dhuunto 60°). Marin kasta wuxuu qaadaa isla ballaca chip-ka; marinnada springka waxay ku celinayaan midka dambe. |
| {{ui:Drill}} | Godin ku taal khadka dhexe ilaa qoto-dheer, oo leh pecks. |

## Sida qalabka loo ilaaliyo qaybta

Insert-ka waxa loo tixgeliyaa sida uu yahay: wareeggiisa nose, iyo dabadiisa geesta dambe, oo ah xariiq toosan oo xagaagiisu yahay 180° ka yar cutting edge angle iyo insert angle. Qaabkaas waxa laga soo dhigaa qaabka dhibic kasta oo Z ah, jidka waxa uu ku dhamaadaa meesha uu ku nasto. Sidaas darteed:

- **Radius-ka nose-ka horey buu waddada ugu jiraa.** Post-yadu ma qoraan `G41` ama `G42`; koordinaatyada waa barta barnaamijka qalabka (geesta laba-geesoodka ah ee ku wareegsan nose-ka).
- Insert-ka **ma raaci karo derbi ka adkaa geesta dambe**. Godka ka dambeeya garaad ayaa la iska daayaa, howlgalka dhamaystirka ayaa sheegaya inta uu aanu gaari karin qaybta. Howlgalka {{ui:Groove}} ayaa qaadaa.
- Agabka waxa lagu raaciyaa Z kadib jar kasta, sidaas darteed roughing ma jaro hawada, grooving wuxuu helaa wixii hadhay, howlgal kasta wuxuu muujiyaa mugga uu ka saaray iyo haddii uu ku jaray qaybta.

## Xaddidaadaha

- **Jarista dibadda oo keliya**: ma jiro bar godin, ma jiro godyo gudaha ah ama dhuunto gudaha, ma jiro godyo wejiga.
- Hal spindle, qaybta lagu hayo −Z. Ma jiro sub-spindle, ma jiro qalab nool, ma jiro C ama Y axis, ma jiro steady rest ama dhaqdhaqaaqyada tailstock.
- Waddooyinka waa dhaqdhaqaaqyo toosan: qaybaha qalloocan waa xariiqyo gaagaaban oo ku jira tolerance-ka (ma jiro `G2`/`G3`), roughing-ka iyo dhuuntada waxa loo qoraa marin marin (ma jiro cycles `G71` ama `G76`).
- Dhuuntadu waa marino toosan oo leh jiidista toosan ee dhammaadka; dhuuntada ku sii godka fur-ka. Dhuuntada lama muujiyo agabka.
- Godinta dhexda ma beddesho moodeelka agabka.
- Holder-ka, turret-ka iyo chuck-ka lama hubin. Deji **Stop at Z** si aad qalabka uga ilaaliso jawiga.
- Quudinta iyo xawaaraha waa qiyaas bilow, sida jarista birta.
