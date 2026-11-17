---
title: Ang view cube
summary: I-click ang face, edge o corner ng cube sa sulok ng view para tumingin mula roon, i-drag ito para mag-orbit, paikutin ang compass ring, lumipat sa paligid ng face-on view, at bumalik sa home.
keywords: view cube, viewcube, cube, compass, hilaga, home view, karaniwang view, itaas, front, kanan, iso, sulok, edge, orbit, i-rotate ang view, axis icon, corner indicator, nabigasyon
from: afc33dc7
---

Nasa kanang itaas ng 3D view ang view cube (hindi habang nagsa-sketch o nasa drawing sheet). Umiikot ito kasama ng view, kaya laging ipinapakita kung saang direksyon ka tumitingin: {{ui:Itaas}} ay ang +Y side ng part (ang Top plane), {{ui:Front}} ang +Z side (nakaharap sa iyo ang Front plane kapag tumingin ka rito), {{ui:Kanan}} ang +X side. Nananatiling see-through ito hanggang ituro mo ito.

## Tumingin mula sa gilid, edge o sulok

1. Ituro ang cube. Iilaw ang bahagi ng part sa ilalim ng pointer: ang gitna ng face, isang edge (umiilaw ito sa parehong face na nagbabahagi nito) o isang corner (sa lahat ng tatlong face).
2. I-click ito. Iikot ang view para tumingin mula roon, pinapanatili ang parehong gitna at zoom.

May 26 na lugar na puwedeng i-click: 6 na face ({{ui:Itaas}}, {{ui:Ibaba}}, {{ui:Front}}, {{ui:Bumalik}}, {{ui:Kaliwa}}, {{ui:Kanan}}), 12 na edge at 8 na corner. Ang corner ay nagbibigay ng klasikong three-quarter view; ang edge ay nasa gitna ng dalawang face.

Ang pag-click sa {{ui:Front}}, {{ui:Itaas}} o {{ui:Kanan}} ay nagbibigay ng parehong view gaya ng {{ui:Views}} sa toolbar, nang walang zoom to fit.

## Mag-orbit sa pag-drag ng cube

I-drag ang cube para paikutin ang view, pareho ng pag-orbit sa mismong view. Hindi itinuturing na click ang drag, kaya puwede mong hawakan ang cube kahit saan.

## Ang compass ring

Ang ring sa ilalim ng cube ay may N, E, S at W.

- **I-drag ang ring** para paikutin ang model sa vertical axis, parang nasa turntable. Sumusunod ang ring sa pointer.
- **I-click ang isang letra** para tumingin mula sa gilid na iyon, pinapanatili kung gaano katarik ang tingin mo pababa. Sa view na diretso mula sa itaas, ang letrang i-click mo ay mapupunta sa ibaba ng screen.

## Face-on view: mga arrow

Kapag diretso kang tumitingin sa isang face, lumalabas ang maliliit na arrow sa paligid ng cube:

- Ang apat na **triangle** ay nagdadala ng face sa gilid na iyon sa harap: ang triangle sa itaas ng cube ay nagpapakita ng face na dating nasa itaas, at iba pa.
- Ang dalawang **curved arrow** sa kanang itaas ay nagpapaikot ng larawan ng isang quarter turn pakanan o pakaliwa, nang hindi binabago kung aling face ang tinitingnan mo. Gamitin ang mga ito para paikutin ang plan para tumakbo ang mahabang pader sa screen.

## Home

Ang house button sa kaliwang itaas ng cube ay bumabalik sa three-quarter view at kinakasya ang part sa view. Ginagawa rin ito ng {{key:Home}} habang may keyboard focus ang cube.

## Gamit ang keyboard

{{key:Tab}} papunta sa cube, pagkatapos:

| Key | Ginagawa |
|---|---|
| {{key:left}} / {{key:right}} | pumili ng side, edge o corner sa paligid ng cube, sa mga hakbang na eighth-turn (sinasabi ng screen reader kung alin) |
| {{key:up}} / {{key:down}} | pumili ng mas mataas o mas mababang isa, hanggang {{ui:Itaas}} o pababa hanggang {{ui:Ibaba}} |
| {{key:Enter}} o {{key:Space}} | tumingin mula sa napili |
| {{key:Shift+left}} / {{key:Shift+right}} | paikutin ang view ng isang quarter turn sa vertical axis |
| {{key:Home}} | ang home view |
| {{key:Esc}} | lumabas sa cube |

Mananatili sa cube ang mga key na pinindot sa cube: hindi nila sinisimulan ang mga tool ng PartCraft.

## Axis icon o wala

Buksan ang {{ui:Mga setting}} ({{key:Mod+,}}), ang tab na {{ui:PartCraft}}, at itakda ang **Indicator sa sulok** sa {{ui:View cube}} (ang simula), {{ui:Axis icon}} (isang maliit na X, Y, Z marker sa kaliwang ibaba: pula ang X, berde ang Y, asul ang Z) o {{ui:Wala}}. Naaalala ng browser na ito ang pinili. Tingnan ang [Mga setting ng PartCraft](topic:settings#corner-indicator).

:::note
Ipinapakita ng cube ang part gaya ng pagbuo nito ng PartCraft: Y pataas, kaya ang {{ui:Itaas}} ng cube ay ang Top plane. Ang mga letra ng compass ay para lang sa pag-ikot; walang north ang part.
:::
