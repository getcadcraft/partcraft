---
title: Ukuthenda emshinini wokuthenda
summary: Qeda, hlanza, qeda, gcoba, sika ingxenye, thungela futhi bhoboza ingxenye ethendiwe, kusuka kumkhawulo ingxenye yenza ngesikhathi ijikeleza. Amathuluzi omshini wokuthenda, ukondla ngokuzungeza, ama-post omshini wokuthenda, nokuthi yini engafakazelwe.
keywords: ukuthenda, umshini wokuthenda, thenda, ukuqeda ubuso, ukuhlanza, ukuqeda, umsele, ukugcoba, sika ingxenye, ukusika, ucingo, ukuthungela, g32, g33, g96, isivinini sokusika esingashintshi, css, ibanga lomphetho, insert, ibha, ichuck, ububanzi, ukondla ngokuzungeza, g71, g76
from: d8cc53b0
---

I-Manufacture inemisebenzi eyisikhombisa yomshini wokuthenda. Isebenza kunoma iyiphi ingxenye: okusikwayo yi-**umkhawulo ingxenye yenza ngesikhathi ijikeleza** maphakathi nesitoko, ngakho ingxenye engeyona ejikelezayo ithenjwa iye esimweni esijikelezayo esiyibambayo.

**Akukho lutho lapha olusebenziswe emshinini wokuthenda.** Izindlela zihlolwa ngejiyometri ngezivivinyo; ama-post amabili omshini wokuthenda alandela amakhodi abhalwe omlawuli. Hlola uhlelo ngesimulator somlawuli wakho nasemoyeni kuqala.

## Setha

Ethebhini le-**Setup**:

- **Ieksisi yethuluzi** ngeyeksisi yesipindle, i-Z yomshini wokuthenda. Ubuso bengxenye bungo +Z; ichuck ibamba olunye uhlangothi.
- **Isitoko**: khetha {{ui:Cylinder}}, ibha. Ukushintsha kwayo kophezulu kube yikho okusikwa ukusika ubuso.
- **Imvelaphi yomsebenzi**: isikhungo sophezulu bomsebenzi noma sophezulu bemodeli sibeka Z0 ebusweni bangaphambili, indawo ejwayelekile.
- **Umlawuli**: {{ui:Fanuc-style lathe (.nc)}} noma {{ui:LinuxCNC lathe (.ngc)}}. I-post yomshini wokugaya yenqaba uhlelo lokuthenda futhi iyakutshela lokho.
- **Isivinini esikhulu sesipindle**: umkhawulo isivinini sobuso esiphansi kwawo.

{{ui:More}} ku-toolbar ye-Manufacture ibala imisebenzi eyisikhombisa yokuthenda phezulu kuthebhu le-**Operations**. Umsebenzi wokuqala owengezayo uletha ithuluzi lawo: i-**turning insert** (ibanga lomphetho, i-engeli ye-insert, i-engeli yomphetho wokusika) noma i-**grooving blade** (ububanzi, ibanga lekhona, ukuthi ifika kangakanani). Yishintshe ethebhini le-**Tools**. Ukondla kungokuzungeza, nesivinini kuyisivinini sobuso ngo-m/min esibanjwa yi-control njengoba ububanzi bushintsha; nikeza ithuluzi i-rpm yalo ukuze ulungise isivinini.

## Imisebenzi

| Umsebenzi | Yenzani |
|---|---|
| {{ui:Face}} | Ihlanza ubuso bebha obuphambili kuze kube yingxenye, ngesinyathelo esisodwa ngesikhathi, kusuka ngaphandle kuze kube ngaphesheya kwesikhungo. |
| {{ui:Rough}} | Amapasi ngomugqa we-Z ahlukaniswe **ngojule wokusika** ngalinye, aze afike emgodini nge-**stock to leave**; bese kanye emgodini ukuze asuse izinyathelo. Isigodi phakathi kwezinxeko ngena ngokuphonsa okukodwa kojule wokusika. |
| {{ui:Finish}} | Ipasi elilodwa emgodini ngengxenyana yokondla kwethuluzi. |
| {{ui:Groove}} | Ifaka i-blade ecaleni kwesinye ndawo lapho ingakwazi ukuthatha ngaphezu komkhawulo wesitoko esisele: imigodi i-turning insert ongayifinyelela. **From / To Z** iyancisha. |
| {{ui:Part off}} | Isika ingxenye ngemuva kobuso bayo bangemuva, ibe yize ngaphezu kwesikhungo, nama-peck uma usethile. |
| {{ui:Thread}} | Ucingo lwangaphandle: ububanzi obukhulu, i-pitch, ubude, inani lamapasi. Ukujula 0 kusho 0.6134 × pitch (ucingo lwe-60°). Ipasi ngalinye lithatha indawo efanayo yetshipisi; amapasi okuhlela aphinda elokugcina. |
| {{ui:Drill}} | Ibhobo emgqeni wesikhungo kuze kube ngukujula, nama-peck. |

## Indlela ithuluzi elivikelwe ngayo engxenyeni

I-insert ithathwa njengoba iyikho: isifunda sayo sephoyinti, nangemuva kwayo umphetho ohamba emuva, umugqa oqondile onensimbi engu-180° ngaphansi kwe-engeli yomphetho wokusika ne-engeli ye-insert. Lesi simo sehliswa kumkhawulo ngasemaphoyinteni ngamaphoyinti ngamaphoyinti ngaphezu kwe-Z, nendlela yiyo ephumula kuyo. Ngakho:

- **Umsakazo wephoyinti sesivele ungene endleleni.** Ama-post kawabhali `G41` noma `G42`; izixhumanisi yiphoyinti elihlelwe lethuluzi (ikhona yesikwele esizungeze uphoyinti).
- I-insert **ayikwazi ukulandela udonga oluthambekele kakhulu kunomphetho wayo ohamba emuva**. Umgodi ngemva kwesigodi awushiywa, nomsebenzi wokuqeda uyakutshela ukuthi ingakanani ingxenye ayiyo ukuthi ayifinyelele. Umsebenzi we-{{ui:Groove}} uyayithatha.
- Isitoko silandelwa ngaphansi kwe-Z ngemva kokusika ngakunye, ngakho ukuhlanza akusikiyo umoya, i-grooving ithola okusele, nomsebenzi ngamunye ubonisa ivolumu eyisusiwe nokuthi uke wasika yini engxenyeni.

## Imikhawulo

- **Ukuthenda ngaphandle kuphela**: akukho ibha yokubhoboza, akukho imigodi yangaphakathi noma imithambo, akukho imigodi yobuso.
- I-spindle eyodwa, ingxenye ibanjwe ku-−Z. Akukho i-sub-spindle, akukho amathuluzi aphilayo, akukho ama-axis C noma Y, akukho ukunyakaza kwe-steady rest noma i-tailstock.
- Izindlela ziyizinyathelo eziqondile: amajika ayizimfushane ngaphakathi kokubekezelela (akukho `G2`/`G3`), nokuhlanza nokuthungela kubhalwa ipasi ngalinye (akukho imijikelezo ye-`G71` noma `G76`).
- Ukuthungela kuyimipasi eqondile nokuhudula okuqondile ekugcineni; nikeza umthambo ukhululeko omuhle. Umthambo awubonakali esitokeni.
- Ukubhoboza kusentla akushintshi imodeli yesitoko.
- I-holder, i-turret kanye ne-chuck azihlolwa. Setha **Stop at Z** ukuze ugcine ithuluzi kude nama-jaw.
- Ukondla nesivinini kungamanani okuqala, njengakokugaya.
