---
title: Ukusebenza ngama-eksisi ama-4 nama-5
summary: Tshela i-PartCraft ukuthi yimaphi ama-eksisi azungezayo umshini unawo, thambekisa ithuluzi kunoma yimuphi umsebenzi ojwayelekile, qeda umphezulu ngebhola elithambekela lapho lisika, noma uthenge ingxenye ngaphansi kwethuluzi ku-4th axis. Okubhalwa ku-G-code, nokungafakazelwe.
keywords: eksisi 5, eksisi 5, eksisi 4, i-eksisi yesine, multi axis, multiaxis, 3+2, indexed, positional, tilt, ithuluzi elithambekile, ezungezayo, trunnion, ithebula, ikhanda, i-a eksisi, i-b eksisi, i-c eksisi, tcp, rtcp, indawo yethiphu yethuluzi, g43.4, inverse time, g93, kinematics, pivot, swarf, lead angle
from: c4f1c491
---

I-Manufacture ingabamba ithuluzi ngeengeli, futhi ingahambisa ama-eksisi azungezayo ngenkathi isika. Izinto ezintathu zikwenza lokho, ezilula kakhulu kuya kwezinkulu.

**Akukho lutho lapha olusebenziswe emshinini.** Izindlela zihlolwa ngejiyometri ngezivivinyo, futhi i-G-code iyafundwa emuva, kodwa ama-post akhelwe ngaphakathi alandela amakhodi abhalwe omlawuli, hhayi noma yimuphi umshini osethwe phambi kwethu. Hlola uhlelo ngesimulator somlawuli wakho nasemoyeni ngaphambi kokufika ensimbi.

## Ama-eksisi azungezayo womshini

Ethebhini le-**Setup**, {{ui:Rotary axes}} ichaza ukuthi umshini unani:

| Ukukhetha | Umshini |
|---|---|
| Lutho (ama-eksisi ama-3) | I-mill evamile. Noma yimuphi umsebenzi odinga ithuluzi elithambekile uyaxwayisa, futhi i-post iyawenqaba ukuwubhala. |
| A (ijikeleza ngo-X) | Eksisi eyodwa ezungezayo ecaleni le-X: ithebula lesine noma i-indexer. Ithuluzi lingathambeka kuphela endizeni ye-Y–Z. |
| B (ijikeleza ngo-Y) | Eksisi eyodwa ezungezayo ecaleni le-Y. Ithuluzi lingathambeka kuphela endizeni ye-X–Z. |
| A no-C | Eksisi ethambekayo ngo-X ephathwa, noma ephatha, ukuzungezwa ngo-Z: ithebula le-trunnion, noma ikhanda. |
| B no-C | Okufanayo nokuthambeka ngo-Y. |

Bese:

- **Iphethwe yi**: {{ui:The table (the part turns)}} noma {{ui:The head (the tool turns)}}. Ithebula liyajikeleza ngendlela ephambene ukuze lilethe ubuso obufanayo ngaphansi kwethuluzi, ngakho uphawu lwayo yonke i-engeli lulandela lokhu.
- **Umlawuli ugcina indawo yomphetho wethuluzi endleleni (TCP)**: uma kuvuliwe, i-X Y Z ohlelweni ingumphetho wethuluzi ezixhumanisweni zengxenye yayo, futhi umlawuli wenza konke okunye (ama-post akhelwe ngaphakathi afana ne-Fanuc nekaLinuxCNC abhala `G43.4` ngobude bethuluzi). Uma kuvaliwe, emshinini wethebula, i-PartCraft ibhala i-X Y Z njengoba ithebula elijikelezayo lithwala ingxenye, ngokuzungeza **indawo ejikelezayo** oyinikezayo (ezixhumanisweni zomsebenzi; 0, 0, 0 lapho imvelaphi yomsebenzi isemaphakathini). Umshini wekhanda udinga i-TCP evuliwe: ngaphandle kwayo uhlelo lwalo lwalubuza ubude be-pivot yomshini, okungaziwa yi-PartCraft.
- **Umkhawulo wokuthambeka**: i-eksisi ethambekayo ihamba kangakanani.

Imishini ihlukile ngokuthi iyibala kanjani njengehle. Uma i-eksisi ijikeleza ngendlela engafanele emshinini wakho, shintsha uphawu ekhophini ye-post ([Ama-post processor ongawahlela](topic:post-processors)).

## Ithuluzi elithambekile kumsebenzi ojwayelekile

Yonke imisebenzi yokugaya (ubuso, pocket, adaptive, contour, drill, chamfer, parallel, scallop, 3D rough, rest) inezinhlobo ezimbili: **Tool tilt** ne-**Tilt towards**: isiqondiso sethuluzi kulowo msebenzi kuphela, kulinganiswa kusuka ku-eksisi yethuluzi yesetha. Lokhu kuyi-3+2 machining: ama-eksisi azungezayo ahamba endaweni athi lapho ama-eksisi amathathu asika.

- Thayipha ama-engeli amabili, noma cindezela {{ui:Tool square to a face}} bese uchofoza ubuso obusicaba: ithuluzi liyakubheka ngqo.
- Khetha ubuso nemiphetho yomsebenzi njengokujwayelekile. Okubalwa njengesicaba noma imbobo kwahlulelwa ngendlela ethambekile yethuluzi.
- Isitoko salowo msebenzi yibhokisi elibamba isitoko esijikelezayo, ngakho ukuphakama nezikhala kuphephile kulolo hlangothi.

Ku-G-code, ngaphambi komsebenzi ithuluzi liyakhuphuka, ama-eksisi azungezayo ayajikeleza, futhi ithuluzi lehla phezu kwendawo yalo yokuqala. Ethebuleni elingenayo i-TCP, amagama ajikeleze avele angama-arc futhi imijikelezo yokubhoboza iyasala imijikelezo (uhlaka olubhaliwe lujikeleza kuZ kuphela). Ngokuvulwa kwe-TCP endizeni ethambekile, ama-arc aba imigqa emifushane nemijikelezo ibe yizinyathelo ezimelelwe.

Ukulingiswa kwesitoko kusebenza isiqondiso esithambekile **sodwa**: kubonisa lokho umsebenzi ulusika kusitoko sonke ukusuka ohlangothini lwawo, futhi uthola ukugawuka khona, kodwa okusikwa kwezinye izikhombisi akudluliswa.

## Ukuqeda nge-5-eksisi

{{ui:More}} ku-toolbar ye-Manufacture ibala lo msebenzi nalowo olandelayo phezulu kuthebhu le-**Operations**.

{{ui:5-axis}} yi-[parallel finishing pass](topic:finish-3d) enebhola lesiphetho elithambekela lapho lihamba. Ibhola lisika ngesibhakabhaka, futhi isibhakabhaka sifana noma ithuluzi lithambekela kuphi ngokuzungeza isikhungo sakho, ngakho ibhola lilandela ngqo indlela ephasiwe yokudlula kwama-eksisi amathathu, kuphela isiqondiso sethuluzi siyashintsha:

- **Ngasembhekeni womphezulu**: 1 = ngqo kumphezulu, 0 = ngokuqondile, noma noma yiluphi olusemaphakathi.
- **Thambekela phambili**: amadigri ngesiqondiso sokusika, ukuze isikhungo esinyakazayo sebhola kungasikho lapho kusika khona.
- **Ukuthambeka okukhulu kakhulu**: ithuluzi alithambekeli ngaphezu kwalokhu kusuka ku-eksisi yesetha.

Lapho isibambi sizothinta imodeli, ukuthambeka kuyanqunywa kuze kube sekuhlanzeni, nomsebenzi uthi ezindaweni ezingaki. Ukudlula ngakunye kungena futhi kuphume ngokuphakama okuqondile.

## Ukuqeda okuzungezayo (i-eksisi yesine)

{{ui:Rotary}} ingeyengxenye ebanjwe ngaphansi kwe-**work X** ku-eksisi ejikelezayo. Ingxenye iyajikeleza futhi ibhola lesiphetho, elibheka i-eksisi njalo, lilandela umphezulu wayo:

- **Ukudlula**: {{ui:Along the axis}} (imigqa ecaleni le-X, isinyathelo esisodwa sokuphenduka ngakunye) noma {{ui:Round the part}} (amakhwelo, isinyathelo esisodwa se-X ngakunye).
- **I-eksisi ku-Y / Z**: lapho i-eksisi ikhona. Okungenalutho kusho maphakathi nesitoko. Emshinini wethebula ngaphandle kwe-TCP kumele kube yindawo ejikelezayo kuSetup; umsebenzi uyaxwayisa uma ingenjalo.
- **Kusuka / Kuya ku-X** nethi **Kusuka / Kuya ku-engeli**: ingxenye yobude nokuphenduka okuzosika.

Ukuphakama kwebhola ngenhlanganisela yayo ngayinye yi-drop enembile yesphere emeshini yengxenye, kusuka ngaleso sicelo.

## Imikhawulo

- Ukuqeda nge-5-eksisi nokuqeda okuzungezayo kuthatha **ibhola lesiphetho** kuphela. Akukho ukusika kwe-swarf (uhlangothi lwethuluzi edongeni elilula), akukho imigqa yokugeleza ecaleni kwezinkomba zomphezulu, akukho ukuhlanza okunama-eksisi amaningi, futhi akukho ukukhethwa okuzenzakalelayo kokuthambeka ukugwema ukushayisana.
- Izindlela ze-5-eksisi nezokuzungezayo **azidluli ekulingisweni kwesitoko**, okuyimephu yokuphakama engakwazi ukubamba ukusika okuthambekile.
- I-shank ihlolwa ekuqedeni nge-5-eksisi ngokumelene nemodeli ibonwa ngaphezulu; i-holder, i-spindle nomshini ngokwawo akuhlolwa noma kanjani.
- Ukuqeda okuzungezayo kusika kuphela lokho ethuluzi elikubonayo libheka i-eksisi.
- Ukuqeda nge-5-eksisi kuthatha umzuzu noma ngaphezulu ukuthi kusebenze ezingxenyeni ezinkulu: i-shank ihlolwa ezindaweni zonke zamapasi onke.
- Lapho ama-eksisi ajikeleza ehamba nama-eksisi amugqa futhi i-TCP icishiwe, ama-post akhelwe ngaphakathi abhala ukondla njengesikhathi esiphambene (`G93`), bese ebuyela ku-`G94`.
- Ikhodi yesikhala sokusebenza esithambekile (`G68.2` nezinye) ayibhalwa, futhi kumshini othile akukho mikhawulo, ukuhlukanisa noma izindawo zokushayisana ezaziwayo.
