---
title: Ka qodo godad iyo counterbore-yo barta sketch-ka
summary: Dhig barooyin sketch-ka dusha, samee godad fudud, counterbore, countersink ama tapped (ISO metric) barta kasta, deji dhexroorka iyo qoto dheeraanta, kana saxaa godad jihada khaldan lagu qodo.
keywords: god, hole wizard, qodid, thread la moodelay, daabacaadda 3D, counterbore, cbore, countersink, csink, god la tapped, thread, tap drill, dherer thread metric, M6, through all, blind hole, god boolka, barooyin, dhexda godka
from: 8e1eef83
---

{{ui:Hole}} wuxuu qodaa hal god barta kasta oo sketch-ka ah oo go'an. Barta go'an waa mid lagu sameeyay qalabka Point, ma aha dhamaadka xariiq ama bartamaha goobo.

## Ku qodid godad dusha

1. Dhagsii dusha siman ee laga qodayo, kadibna dooro {{ui:Sketch on this face}}.
2. Riix {{key:P}} oo dhagsii meesha god kasta ku jiri doonto. Cabbir barooyinka geesaha ama asalka haddii booska ay muhiim tahay (eeg [Sketch si buuxa u go'ay](topic:relations-dimensions)).
3. Dooro {{ui:Exit}}.
4. Dooro {{ui:Hole}}.

Godadku waxay gudbaan qaybta, 6 mm ballac ah. Panelka midig wuxuu muujinayaa **Holes**: inta la sameeyay, "hal god barta sketch kasta".

**Hal god, si dhakhso ah:** dhagsii dusha siman meesha godka tagaya oo dooro {{ui:Hole here}} panelka midig. PartCraft wuxuu ku daraa sketch dusha ah oo leh hal barta meesha aad dhagsatay, iyo Hole qaybta oo dhan gudbaysa, hal tallaabo. Isla markiiba tiro qor oo riix {{key:Enter}} dhexroorkiisa. Si aad si sax ah ugu dhigto, fur sketch-ka cusub oo cabbir barta.

**Sketch-ka la isticmaalo:** sketch-ka aad hadda xirtay ama kii la doortay; haddii kale, sketch-ka ugu dambeeya ee aan la isticmaalin oo leh barooyin go'an. Haddii midna ma jirto: "Marka hore samee sketch barooyin ku yaal meesha godadka ka tagaya (Sketch on a face, kadibna Point)."

## Dejinta

| Dejinta | Doorashooyin | Caadi ahaan |
|---|---|---|
| **Type** | Simple, Counterbore, Countersink, Tapped (ISO metric) | Simple |
| **Diameter (mm)** | Dhexroorka godka | 6 |
| **Through all** | Calaamadi: gudub qaybta oo dhan. Ka saar si aad u sameyso god indha-la'aan | Calaamadi |
| **Depth (mm)** | Waa la muujiyaa marka Through all la saaro | 10 |
| **Counterbore ⌀** | Waa la muujiyaa Counterbore: dhexroorka qodida ballaadhan | 11 |
| **Counterbore depth** | Waa la muujiyaa Counterbore | 6 |
| **Reverse direction** | Wuxuu qodaa dhinaca kale ee diyaarada sketch-ka | Damaysan |

Godadku waxay gudaan maaddada, toos ugu sketch-ka. Qoto dheeraanta godka indha-la'aan waxaa laga cabbiraa diyaarada sketch-ka; hoosteedu waa siman tahay.

## Godka boolta ee counterbore leh

1. Samee godadka sida kor.
2. Deji **Type** ka ah **Counterbore**.
3. Deji **Diameter (mm)** ah `6.6` (meel bannaan oo boolta M6 ah), **Counterbore ⌀** ah `11` iyo **Counterbore depth** ah `6.5`.

Counterbore-ku waa inuu ka ballaadhan yahay godka ("The counterbore must be wider than the hole."), iyo godka indha-la'aan, waa inuu ka hooseeyaa ("The counterbore must be shallower than the hole.").

## Goob wareeg (bolt circle)

Godad si siman loogu kala fogeeyay bartamaha hal bartamaha, **hal** god samee oo qaab u samee: dooro feature-ka Hole, kadibna dooro {{ui:Circular}} (eeg [Pattern and mirror features](topic:patterns-mirror)). Qaabku wuu raacaa marka cabbirka godka la beddelo.

## Marka godadku jihada khaldan u qodaan

- "There is nothing to drill on that side of the sketch. Try reversing the direction." Dhinaca sketch-ka waxba lagu qodi karo. Isku day inaad jihada rogto. Sketch-ku wuxuu ku yaal dhinaca kale ee alaabta. Calaamadi **Reverse direction**.
- "Put sketch points where the holes go (Point tool), then make the hole." Sketch-ka ma leh barooyin go'an. Dhamaadka xariiqyada iyo bartamaha goobaha ma tirinayaan.
- "There is nothing to drill yet." God wuxuu u baahan yahay jidh adag. Marka hore samee boss.

## Godadka isku-dhiska

Godad kastaa wuxuu leeyahay tiir. Isku-dhiskiisa, **Centre on** wuxuu joint ku dhigi karaa tiirka godka, oo lagu magacaabo "Hole1, hole 2", si pin ama boolta qayb ay ula safanto. Eeg [Samee isku-dhis](topic:build-assembly).

## Godad countersunk ah

Deji **Type** ka ah **Countersink**, kadibna **Countersink ⌀** (dusha) iyo **Countersink angle**: 90° (boolaha madaxa-fidsan ee ISO metric) ama 82° (boolaha inch-ka). Dhexroorka countersink-ka ka qaado xogta soo saaraha boolta (wax yar oo ka weyn dhexroorka madaxa boolta). Wejiga koonka waxaa lagu magacaabaa "countersink" panelada.

## Godad la tapped

Deji **Type** ka ah **Tapped (ISO metric)** oo dooro **Thread**, M2 ilaa M24 coarse. Godka waxaa lagu qodaa cabbirka tap drill ee shaxda hoose (dhexroorka magaca ka dhimaya pitch-ka, ilaa taxanaha qodista, sida ISO 2306 u sheegto thread 6H); sanduuqa **Diameter (mm)** looma isticmaalo. Godka indha-la'aan, **Thread depth (mm)** wuxuu deynayaa inta thread-ku gaadho.

| Thread | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pitch | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Tap drill ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Thread-ku marka hore waa **cosmetic**: moodelku wuxuu leeyahay godka la qodey, muuqaalku wuxuu thread-ka dhexroorkiisa weyn ku sawiraa wareegyo jeexjeexan, sheetka sawirku wuxuu callout-ka ku qoraa sida fiiro, sida "4× M8×1.25 - 6H, thread through". STEP wuxuu dhoofiyaa godka la qodey oo keliya.

Calaamadi **Modelled** si aad u gooydo thread helical dhab ah godka, daabacaadda 3D ahaan. **Clearance (mm)** wuxuu ka dhigaa mid ka weyn meel walba, si boolta daabacan u qanaco: 0.1 ilaa 0.2 mm ayaa ku habboon printer-yada badankood. Callout-ka markaas wuxuu ku dhammaadaa "(modelled)". Eeg [Threads on shafts and bores, drawn or modelled](topic:threads), kaas oo sidoo kale thread-yada shaftyada saarayo.

:::note
Godad counterdrilled ah, thread-yada inch-ka iyo thread-yada tuubada weli lama dhisin.
:::
