---
title: Mga surface sa pamamagitan ng network ng kurba (Gordon surface)
summary: Gumawa ng iisang makinis na surface sa pamamagitan ng grid ng profile at guide curve na iginuhit sa sketch o kinuha mula sa mga gilid ng modelo, isara ito bilang solid kapag sarado ang mga profile, at kung ano ang eksakto, kung ano ang fitted, at ang mga mensahe kapag hindi kasya ang network.
keywords: tangent, g1, tangency, tangent continuity, mirror plane, gordon surface, curve network, boundary surface, net surface, network surface, profiles, guides, guide curves, loft na may guides, guide rails, skin, transfinite, coons, b-spline surface, freeform surface
from: ada3cb8b
---

:::note
**Hindi pa nagagawa sa bersyong ito.** Kailangan ng Gordon surface ng exact geometry kernel, na wala sa bersyong ito ng PartCraft: bawat piyesa ay binubuo nito gamit ang mesh kernel. [Ano ang hindi pa nagagawa](topic:not-built-yet) ang nagsasabi kung ano ang gagawin sa halip. Inilalarawan ng natitirang pahina kung paano ito gumagana sa exact kernel.
:::

Ang **Gordon surface** ay iisang surface na dumadaan sa bawat kurba ng isang network: isang set ng **profiles** na tumatakbo sa isang direksyon at isang set ng **guides** na tumatakbo sa kabila, na nagsasalubong na parang sinulid ng lambat. Ganito mo hinuhubog ang hull, fender o hawakan mula sa ilang section curve na direkta mong kinokontrol. Kailangan nito ang **exact kernel** (tingnan ang [The mesh kernel](topic:solid-kernels)).

## Iguhit ang network

1. Iguhit ang **profiles**: dalawa o higit pang kurbang magkatabi, halimbawa mga section sa magkakatalang plane. Gumagana ang mga linya, arko, bilog at spline, at ang kadena ng mga kurbang magkakadugtong ay binibilang bilang isang kurba.
2. Iguhit ang **guides**: dalawa o higit pang kurbang tumatawid sa mga profile. Kailangang tumawid ang bawat guide sa bawat profile nang isang beses, at ang bawat profile sa bawat guide nang isang beses.
3. Siguraduhing tunay na nagtatagpo ang mga kurba. Iguhit ang sketch ng guide para dumaan ang kurba nito sa mga punto ng profile (mag-snap sa mga projected point, o mag-type ng coordinates). Tumatanggap ang network ng mga puwang hanggang sa **Tolerance** (0.01 mm para sa simula).

Maaaring maglaman ang isang sketch ng ilang kurba: bawat hiwalay na kadena rito ay sariling kurba. Kaya maaari mong iguhit ang lahat ng guide sa iisang sketch sa top plane, halimbawa.

## Gawin ang surface

1. Piliin ang {{ui:More}} sa grupong Features, pagkatapos ang {{ui:Gordon surface}}.
2. Kinukuha ng PartCraft ang mga sketch na wala pang gumagamit: ang mga nasa eroplanong kahanay ng una ay nagiging **profiles**, ang iba ay **guides**. Suriin ang listahan sa kanan at itakda ang bawat sketch sa **Profiles**, **Guides** o **Not used**.
3. Para gamitin ang mga gilid ng piyesa, i-click ang **Pick edges as profiles** (o **as guides**), i-click ang mga gilid sa view, pagkatapos pindutin ang {{key:Esc}}.

Ang resulta ay isang **surface body**. Ginagawa itong solid ng {{ui:Thicken}}, tinatahi ito ng {{ui:Stitch}} sa ibang surface, at pinuputol ito ng {{ui:Trim surface}}.

### Isara bilang solid

Kapag sarado ang mga curve ng profile (mga bilog, sarado na spline, sarado na kadena) at bawat una at huling profile ay nakapatag sa isang eroplano, lagyan ng check ang **Close to a solid**. Tinatakpan ng patag na face ang mga dulo at sumasali ang saradong hugis, pinuputol, pinag-iintersect o nagiging bagong body tulad ng ibang feature. Ganito ka gumagawa ng loft na sumusunod sa mga guide curve. Gumagana rin ito sa mga saradong guide.

## Tangent sa isang plane sa kahabaan ng gilid

Dumadaan ang Gordon surface sa mga kurba nito, pero sa sarili nito, hindi nito tinutugma ang slope ng kinakatagpo nito. Para iwan nito ang isang gilid na **tangent** sa isang plane (G1), gaya ng mirror plane, para dumugtong nang walang tupi ang mirrored na kopya, o isang patag na face na pinagmumulan nito:

1. Piliin ang Gordon feature. Sa ilalim ng **Tangent to**, pumili ng plane sa {{ui:Add a plane…}} (Front, Top, Right o isang reference plane), o pumili ng patag na face sa view at pindutin ang {{ui:Add the picked flat face}}.
2. Hinahanap ng PartCraft ang boundary curve ng network na nasa plane na iyon, at umaalis ang surface doon nang tangent sa plane.

Kung may hawak na dalawang boundary curve ang isang plane (sahig sa ilalim ng dalawang dulo), idagdag ito nang dalawang beses: bawat kopya ay kumukuha ng susunod. Hanggang apat na plane, isa bawat gilid.

Sinasabi ng ulat kung aling curve ang ginawang tangent ng bawat plane at ang pinakamatarik na anggulo na nakatagpo ng surface sa plane na iyon dati. Sinusundan nang eksakto ang mga guide na umaalis na sa curve na iyon nang tangent sa plane. Ang mga guide na umaakyat palayo rito ay bumabaluktot sa makitid na banda malapit sa gilid, at sinasabi ng figure na "follows every curve within" ng ulat kung gaano kalaki iyon: iguhit ang mga guide na patag na umaalis sa gilid para sa eksaktong fit.

## Ano ang eksakto at ano ang fitted

Sinasabi ng panel kung alin dito ang nalalapat, at kung gaano kalayo lumilihis ang surface sa iyong mga kurba.

- **Exact**: kapag polynomial ang bawat kurba (mga linya, spline at kadena ng mga ito) at tumatawid ang mga guide sa lahat ng profile sa parehong parameter, eksaktong Gordon surface ng mga kurbang iyon ang surface. Ibinabalik ng network ng iso curve na hiniwa mula sa bicubic surface ang surface na iyon, at ang apat na tuwid na linya ay nagbibigay ng patag o bilinear na patch na may twist.
- **Fitted**: hindi polynomial ang mga arko, bilog at gilid ng piyesa, at kailangang i-re-time ang mga kurbang tumatawid sa magkakaibang parameter para magtugma ang mga tawiran. Ang mga kurbang iyon ay fitted ng cubic B-spline sa loob ng isang sampung-milyonesimo ng laki ng network (mga 0.00001 mm para sa 100 mm na piyesa). Nananatili sa loob ng 0.00001 mm ng tunay na silindro ang cylinder patch na gawa sa mga arko at linya.

Sa pagitan ng mga kurba, kung ano ang ibinibigay ng paraan: ang mga profile na hinalo sa kabila, kasama ang mga guide na hinalo sa kabila, bawas ang halo ng kanilang mga tawiran. Makinis ito sa lahat ng dako maliban kung saan may matalas na sulok ang isang kurba. Kapag nagbabahagi ng boundary curve ang dalawang Gordon surface, nagtatagpo sila nang gilid sa gilid (G0), hindi tangent.

## Kapag hindi kasya ang network

| Mensahe | Ano ang gagawin |
|---|---|
| "… hindi nagtatagpo: 0.4 mm ang layo ng pagdaan nila" | Gawing magtawid ang profile at guide na iyon, o itaas ang Tolerance |
| "… nagtatagpo … 2 beses" | Maaaring tumawid ang guide sa bawat profile nang isang beses lamang: hatiin ang kurbang paikot, o gumamit ng mas kaunting profile |
| "… sa ibang pagkakasunod" o "tumutupi sa sarili nito" | Nagtatawiran ang dalawang guide (o dalawang profile). Dapat tumakbo nang magkatabi ang mga pamilya |
| "kahit dalawang profile at dalawang guide" | Magdagdag ng kurba, o itakda ang higit pang sketch sa Profiles o Guides |
| "pinaghalo ang bukas at saradong kurba" | Gawing lahat ng profile ay bukas o lahat ay sarado (pareho para sa guide) |
| "Ang dulo … ay hindi patag, kaya hindi ito matatakpan" | Iguhit ang una at huling saradong profile sa tig-isang eroplano, o huwag lagyan ng check ang Close to a solid |

## Mga limitasyon

- Isang B-spline face bawat network: walang G1 o G2 tangency sa mga kalapit na surface.
- Ang tahi ng saradong network, sa unang guide, ay gilid sa gilid na nagdurugtong pero hindi tangent.
- Ang mismong Loft feature ay walang guide rails; gumamit na lamang ng Gordon surface na isinara bilang solid.
- Ang sobrang kulot na kurba, o mga tawiran na sobrang hindi pantay ang pagitan sa isang kurba kumpara sa iba, ay maaaring mangailangan ng sobrang daming punto para ma-fit; sasabihin ito ng feature.
