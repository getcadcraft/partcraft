---
title: 4- at 5-axis na machining
summary: Sabihin sa PartCraft kung anong rotary axes ang mayroon ang makina, itagilid ang tool para sa anumang karaniwang operation, tapusin ang surface gamit ang ball end mill na nakahilig habang pumuputol, o paikutin ang piyesa sa ilalim ng tool sa 4th axis. Ano ang isinusulat sa G-code, at ano ang hindi pa napatunayan.
keywords: 5 axis, five axis, 4 axis, fourth axis, multi axis, multiaxis, 3+2, indexed, positional, tilt, nakahilig na tool, rotary, trunnion, table, head, a axis, b axis, c axis, tcp, rtcp, tool centre point, g43.4, inverse time, g93, kinematics, pivot, swarf, lead angle
from: c4f1c491
---

Maaaring hawakan ng Manufacture ang tool sa isang anggulo, at maaari nitong igalaw ang rotary axes habang pumuputol. Tatlong bagay ang gumagawa nito, mula sa pinakasimple hanggang sa pinakamarami.

**Walang napatakbo rito sa makina.** Sinusuri ng mga test laban sa geometry ang mga path at binabasa pabalik ang G-code, pero sumusunod ang mga built-in na post sa dokumentadong code ng mga control, hindi sa anumang makinang nasa harap natin. Patunayan ang program sa sarili mong simulator ng control at sa hangin bago ito humarap sa metal.

## The machine's rotary axes

Sa **Setup** tab, sinasabi ng {{ui:Rotary axes}} kung ano ang mayroon ang makina:

| Pagpipilian | Ang makina |
|---|---|
| Wala (3 axes) | Karaniwang mill. Anumang operation na kailangang nakahilig ang tool ay nagbababala, at tinatanggihan ng post na isulat ito. |
| A (umiikot sa paligid ng X) | Isang rotary axis sa kahabaan ng X: 4th-axis table o indexer. Ang tool ay puwedeng humilig sa Y–Z plane lamang. |
| B (umiikot sa paligid ng Y) | Isang rotary axis sa kahabaan ng Y. Ang tool ay puwedeng humilig sa X–Z plane lamang. |
| A at C | Isang tilting axis sa paligid ng X na dala ng, o nagdadala ng, pag-ikot sa paligid ng Z: trunnion table, o head. |
| B at C | Kapareho nito, na ang tilt ay nasa paligid ng Y. |

Pagkatapos:

- **Dinadala ng**: {{ui:The table (the part turns)}} o {{ui:The head (the tool turns)}}. Umiikot ang table sa kabaligtarang direksyon para mailagay ang parehong face sa ilalim ng tool, kaya sumusunod sa direksyon ang sign ng bawat anggulo.
- **Pinananatili ng control ang tool tip sa path (TCP)**: kapag naka-on, ang X Y Z sa program ay ang tool tip sa sariling coordinate ng piyesa, at ang control na ang bahala sa iba (isinusulat ng built-in na Fanuc-style at LinuxCNC na post ang `G43.4` para sa haba ng tool). Kapag naka-off, sa table machine, isinusulat ng PartCraft ang X Y Z habang dinadala ng umiikot na table ang piyesa, sa paligid ng **rotary centre** na ibibigay mo (sa work coordinates; 0, 0, 0 kapag nasa sentro ang work origin). Kailangan ng head machine na naka-on ang TCP: kung wala ito, kakailanganin ng program ang pivot length ng makina, na hindi alam ng PartCraft.
- **Tilt limit**: hanggang saan lumalayo ang tilting axis.

Nagkakaiba ang mga makina sa kung aling direksyon ang itinuturing na positibo. Kung mali ang ikot ng axis sa makina mo, palitan ang sign sa kopya ng post ([Post processors you can edit](topic:post-processors)).

## A tilted tool for an ordinary operation

Bawat milling operation (face, pocket, adaptive, contour, drill, chamfer, parallel, scallop, 3D rough, rest) ay may **Tool tilt** at **Tilt towards**: ang direksyon ng tool para sa operation na iyon lamang, sinusukat mula sa tool axis ng setup. Ito ang 3+2 machining: pumupunta ang rotary axes sa isang posisyon at nananatili roon habang tatlong axis ang pumuputol.

- I-type ang dalawang anggulo, o pindutin ang {{ui:Tool square to a face}} at i-click ang isang patag na face: didiretso ang tool dito.
- Piliin ang mga face at edge ng operation gaya ng dati. Ang pagtukoy kung alin ang sahig o butas ay nakabatay sa nakahilig na tool.
- Ang stock para sa direksyong iyon ay ang box na tumatanggap sa nakaikot na stock, kaya ligtas ang mga taas at clearance mula sa panig na iyon.

Sa G-code, bago ang operation, aangat ang tool, iikot ang rotary axes, at bababa ang tool sa ibabaw ng unang punto nito. Sa table machine na walang TCP, mananatiling arko ang mga arko at mananatiling cycle ang mga canned drilling cycle (ang nakasulat na frame ay umiikot lamang sa paligid ng Z). Kapag may TCP sa nakahilig na plane, nagiging maikling linya ang mga arko, at ang mga cycle ay nagiging mga galaw na kinakatawan ng mga ito.

Tumatakbo ang stock simulation sa nakahilig na direksyon **nang mag-isa**: ipinapakita nito ang pinuputol ng operation mula sa buong stock na nakikita mula sa panig nito, at nakikita doon ang mga gouge, pero hindi dinadala ang mga putol na ginawa mula sa ibang direksyon.

## 5-axis finishing

{{ui:More}} sa Manufacture toolbar ay naglilista ng operation na ito at ng susunod sa itaas ng **Operations** tab.

{{ui:5-axis}} ay ang [parallel finishing pass](topic:finish-3d) na may **ball end mill na humihilig habang gumagalaw**. Pumuputol ang ball gamit ang sphere, at pareho ang sphere anuman ang direksyon ng pagkahilig ng tool sa paligid ng sentro nito, kaya sinusundan ng ball eksakto ang path na ibibigay ng 3-axis pass; ang direksyon lamang ng tool ang nagbabago:

- **Towards the surface**: 1 = patayo sa surface, 0 = tuwid pataas, anumang nasa pagitan.
- **Lean forward**: mga degree sa direksyon ng pagputol, para hindi ang nakatigil na sentro ng ball ang nagpuputol.
- **Most tilt**: hindi kailanman humihilig ang tool nang higit pa rito mula sa axis ng setup.

Kung saan didikit ang shank sa model, babawasan ang pagkahilig hanggang sa malinis ito, at sasabihin ng operation kung ilang punto ang apektado. Ang bawat pass ay pinapasukan at nilalabasan ng tuwid na pag-angat.

## Rotary finishing (4th axis)

{{ui:Rotary}} ay para sa piyesang hawak sa kahabaan ng **work X** sa isang rotary axis. Umiikot ang piyesa at sinusundan ng ball end mill, laging nakaturo sa axis, ang surface nito:

- **Passes**: {{ui:Along the axis}} (mga linya sa kahabaan ng X, isang stepover ng pag-ikot ang pagitan) o {{ui:Round the part}} (mga singsing, isang stepover ng X ang pagitan).
- **Axis at Y / Z**: kung nasaan ang axis. Kapag walang laman, nasa gitna ng stock. Sa table machine na walang TCP, dapat ito ang rotary centre sa Setup; nagbababala ang operation kapag hindi.
- **From / To X** at **From / To angle**: ang bahagi ng haba at ng pag-ikot na puputulin.

Ang taas ng ball sa itaas ng axis sa bawat punto ay ang eksaktong drop ng sphere sa mesh ng piyesa, mula sa panig na iyon.

## Limits

- Ang 5-axis at rotary finishing ay **ball end mill** lamang ang tinatanggap. Walang swarf cutting (ang gilid ng tool sa tuwid na pader), walang flow line sa sariling direksyon ng surface, walang multi-axis roughing, at walang awtomatikong pagpili ng tilt para maiwasan ang banggaan.
- Ang 5-axis at rotary path ay **hindi dumadaan sa stock simulation**, na height map at hindi kayang hawakan ang nakahilig na putol.
- Sa 5-axis finishing, sinusuri ang shank laban sa model na nakikita mula sa itaas; ang holder, ang spindle at ang mismong makina ay hindi sinusuri kahit saan.
- Pinuputol ng rotary finishing ang tanging nakikita ng tool kapag tumingin sa axis.
- Tumatagal ng isang minuto o higit pa ang pagkukuwenta ng 5-axis finishing sa malaking piyesa: sinusuri ang shank sa bawat punto ng bawat pass.
- Kapag gumagalaw ang rotary axes kasabay ng linear at naka-off ang TCP, isinusulat ng built-in na post ang feed bilang inverse time (`G93`), pagkatapos ay bumabalik sa `G94`.
- Walang isinusulat na code ng tilted work plane (`G68.2` at katulad), at walang kilalang machine-specific na limit, unwinding o collision zone.
