---
title: 3D roughing at rest machining
summary: Linisin ang buong stock sa paligid ng buong model, level by level, gamit ang flat, bull-nose o ball end mill, at mag-iwan ng stock para sa finishing, pagkatapos ay hayaang pumutol ang mas maliit na tool sa mga bahaging naiwan ng una. Ano ang ginagarantiyahan ng mga path, at ano ang hindi.
keywords: 3d roughing, roughing, rough, rest machining, rest roughing, natitirang stock, stock na iiwan, stepdown, levels, z level, waterline, ramp, plunge, gouge, mas maliit na tool
from: 29ddc266
---

Dalawang operation sa Manufacture, sa ilalim ng {{ui:More}} sa toolbar nito, ang naglilinis ng stock mula sa **buong model** sa 3D, nakatayo nang patayo ang tool (o kasama ang sariling [tool direction](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) ng operation). Wala silang pinipiling object.

## 3D roughing

{{ui:3D rough}} ay bumababa mula sa tuktok ng stock, isang **stepdown** sa bawat pagkakataon. Sa bawat level, nililinis nito ang lahat ng kayang abutin ng tool nang hindi hinahawakan ang model: tuwid na hanay na may **stepover** ang pagitan (fraction ng diameter ng tool), pagkatapos ay minsang paikot sa gilid ng abot nito, para sinusundan ang mga pader at hindi iniiwang hanay ng mga hakbang sa plano.

- **Stock to leave**: gaano kalayo mananatili ang tool sa model saanman, para sa finishing pass (default na 0.5 mm).
- **A level at each flat face**: karagdagang level sa taas ng bawat patag na face ng model (kasama ang stock to leave), para hindi maiwan ang sahig na halos isang buong stepdown ang taas.
- **Ignore stock thinner than**: ang materyal na mas manipis dito, paitaas o pagilid, ay hindi sulit na pasadahan (0.05 mm para sa roughing, 0.5 mm para sa rest machining, para hindi maglakbay ang mas maliit na tool sa bawat pader dahil sa manipis na linyang naiwan sa tabi nito).
- **Bottom**: walang pinuputol sa ibaba ng taas na ito. Kapag walang laman, ang ilalim ng model ang gamit.

Nagsisimula ito sa stock **gaya ng iniwan ng mga operation bago nito**: pagkatapos ng face pass, hindi nito pinuputol ang hangin kung saan dumaan na ang face mill.

Sa pagbaba: kung saan aabot ang tool sa stock habang bumababa, gumagalaw ito sa sarili nitong pass sa **ramp angle**, pabalik-balik nang hanggang dalawang diameter ng tool. Ang pass na masyadong maikli para doon ay binubutas nang tuwid pababa sa **plunge feed**; binibilang ito ng operation at nagbababala, dahil hindi dapat mag-plunge ang tool na hindi pumuputol sa sentro nito.

## Rest machining

Ang {{ui:Rest}} ay ang parehong estratehiya para sa **mas maliit na tool pagkatapos ng mas malaking tool**. Binabasa nito ang stock simulation at pumuputol lamang kung saan nakatayo pa ang materyal: sa mga panloob na sulok na hindi nakaikot doon ang mas malaking tool, sa mga slot na hindi ito nakapasok, sa mga hakbang na naiwan nito sa mga dalisdis. Kahit saan pa, wala itong ginagawa, kaya maliit na bahagi lamang ng kukunin ng parehong tool sa sariwang stock ang path nito.

Ilagay ito pagkatapos ng roughing operation at piliin ang mas maliit na tool. Kailangan nito ang stock simulation ng mga operation bago ito, na laging pinapatakbo ng workspace.

## How good the paths are

- **Walang gouge.** Kinakalkula ang mga posisyon ng tool sa grid, na ang cutter ay bahagyang mas malaki kaysa sa aktwal (ng 1.4 grid cell sa gilid, at ng stock to leave), para kahit saan ito tumayo, malayo ito sa model. Sinusuri ng mga test ang bawat punto ng pagputol laban sa eksaktong tool sa eksaktong mesh, at ang stock simulation pagkatapos ng bawat takbo: walang gouge, walang rapid move na dumadaan sa stock.
- **Ang kapalit nito**: nag-iiwan ang mga pader ng kaunti pang higit sa stock to leave, hanggang sa halagang ipinapakita bilang "Extra stock on walls" sa operation (mga 0.5 mm para sa Ø6 na tool, mas kaunti para sa mas maliit). Ang finishing pass ang nag-aalis nito.

Ang mga path na ito ay hindi:

- Tuwid na linya ang mga hanay, hindi offset ng hugis ng piyesa o mga kurba ng pare-parehong engagement. Mas maraming pag-angat at air move ang mga ito kaysa sa offset o adaptive na estratehiya, at ang unang hanay sa bawat level ay pumuputol ng buong lapad ng tool. Para sa mga pocket na may patag na sahig, mas magandang roughing ang [Adaptive](topic:manufacture).
- Hindi sinusuri ang shank at holder ng tool. Nagbababala ang babala kapag mas malalim sa flute length ang pagputol.
- Hindi nakikita ang mga undercut: ang model ang sinasalubong ng tool na bumababa sa axis nito. Para mag-rough sa gilid, magbigay ng pangalawang operation ng [nakahilig na direksyon ng tool](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Alam lamang ng rest machining ang stock hanggang sa grid ng simulation (mga cell na 0.1 hanggang 2 mm, ayon sa laki ng piyesa).
- Sa malaking piyesa, mahaba ang program (mahigit 100,000 galaw para sa 200 mm na flange gamit ang Ø6 na tool) at tumatagal ng mga isang minuto ang pagkukuwenta, at muling kinukuwenta ng bawat pagbabago sa workspace ang buong program. Gamitin ang pinakamalaking tool na kasya para sa roughing.
- Suriin ang output sa sarili mong simulator ng makina bago pumutol.
