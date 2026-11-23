---
title: 3D finishing: parallel at scallop
summary: Tapusin ang buong curved na surface ng model gamit ang ball, bull-nose o flat end mill, sa parallel na linya sa anumang anggulo o sa mga pass na may itinakdang layo sa isa't isa, para ang ridge sa pagitan nila ay may taas na hinihingi mo. Ano ang ginagarantiyahan ng mga path, at ano ang hindi.
keywords: 3d finishing, finishing, parallel, raster, scallop, constant scallop, cusp, ball nose, bull nose, surface, tolerance, stepover, slope, stock na iiwan, drop cutter, gouge
from: 942d2341
---

Dalawang operation sa Manufacture ang pumuputol sa **buong surface ng model**, na nakatayo nang patayo ang tool (tatlong axis). Wala silang pinipiling object: gumagana sila sa lahat ng bahagi ng model na nakikita mula sa itaas. I-rough muna ang piyesa (adaptive o pocket); may babala ang finishing pass na dumadaan sa hindi pa naputol na stock, dahil lalalim ito nang sobra.

## Parallel

Mga tuwid na linya sa buong model, sa **anggulo** na itinakda mo, may **stepover** na layo sa isa't isa (fraction ng diameter ng tool). Sinusundan ng bawat linya ang surface: nasa taas na kinakailangan ang tool tip para walang bahagi ng cutter na bumaba sa ilalim ng model, at mas pinong pinuputol ang linya kung saan kumikiko ang surface. Kapag naka-on ang **Zig-zag**, nananatiling nakadikit ang tool sa pagitan ng mga linya kung saan ito ligtas gawin (sinusuri sa kahabaan ng galaw); kung hindi, umaangat ito.

- **Tolerance**: gaano kalayo ang tuwid na bahagi ng linya puwedeng nasa tunay na taas ng tool tip (kalahati nito ang ginagamit na limit sa gitna ng bawat bahagi). Default na 0.01 mm.
- **Only where the surface is at least … and at most … (°)**: tapusin lamang ang mga mababaw na bahagi o ang mga matatarik. Kung nasa labas ng saklaw ang surface, hindi isasama ang linya at aangat ang tool.
- **Stock to leave**: ang model na inoffset ng layong iyon (ang cutter na pinalaki ng layong iyon; eksakto para sa ball at bull-nose na tool; ang flat tool ay nag-iiwan ng hindi bababa sa ganoong halaga).
- **Bottom**: walang pinuputol sa ibaba ng z na ito.

## Scallop

Mga pass na nagpapanatili ng pare-parehong layo sa ibabaw mula sa isa't isa, para ang ridge (ang scallop) na naiiwan sa pagitan ng dalawang katabing pass ay may **taas** na hinihingi mo. Ang layo ay nakukuha mula sa taas at radius ng ball: s = 2·√(2·R·h − h²), halimbawa mga 0.69 mm sa pagitan ng mga pass para sa Ø6 na ball at 0.02 mm na ridge. Ginagamit ng bull-nose na tool ang corner radius nito. Tinatanggihan ang flat end mill: wala itong ridge na masusukat.

Nagsisimula ang mga pass sa **gilid ng model, papasok** o sa **tuktok nito, pababa**. Ito ay mga contour ng layo sa ibabaw (hindi ng taas), kaya sa dalisdis ay magkakalapit ang mga ito sa plano, at sa patag na bahagi ay malalayo ang pagitan. Sinusukat ang layo sa isang grid sa ibabaw at tama ito hanggang mga 1 %; eksakto ang taas ng ridge kung saan patag o banayad ang kurba ng surface, at tinatayang lamang kung saan mabilis itong kumurba. Pinananatili ng **Climb** ang mas mataas na panig ng surface sa kanan ng cutter.

## How good the paths are

Ang sinusuri ng mga test, gamit ang closed form o isang independent na brute-force na paghahanap sa footprint ng cutter:

- Eksakto ang taas ng tool tip sa ilalim ng tool para sa ball, bull-nose at flat na tool sa mga face, edge at corner ng mesh, at hindi kailanman mas mataas sa tunay na taas; sa parallel na linya, nananatili ang path sa loob ng tolerance nito, na walang gouge na mas malalim doon.
- Tumutugma ang haba ng path sa isang nakatagilid na plane sa closed form; ang scallop pass sa plane ay nasa hiniling na layo sa isa't isa, at lumalabas ang ridge sa pagitan nila sa hiniling na taas.
- Walang gouge pagkatapos ng pass ayon sa stock simulation, at ipinapakita nito ang mga ridge na nananatili.

Ang mga path na ito ay hindi:

- Pangunahing finishing pass lamang sila, hindi ang kabuuan ng kaya ng production system.
- Hindi pa naitatayo: waterline (constant z) finishing, pencil at corner clean-up, radial at spiral na pass, pag-project ng curve sa surface, pag-detect ng flat na lugar, at pagsusuri ng banggaan ng holder at shank. Magkahiwalay na operation ang roughing at rest machining ([3D roughing at rest machining](topic:rough-3d)); ang tool na humihilig ay [5-axis finishing](topic:multi-axis#5-axis-finishing).
- Nananatili ang tool center sa ibabaw ng model: humihinto ang mga path sa gilid ng model sa halip na lumampas dito, kaya hindi natatapos hanggang sa paanan ang vertical na pader na eksakto sa gilid.
- Hindi nakikita ang mga undercut (ang surface ang sinasalubong ng tool mula sa itaas).
- Mesh mula sa kernel ang model, kaya sinusundan ng mga path ang mesh (ang chord tolerance nito ay mga 0.0002 ng dayagonal ng piyesa), hindi ang eksaktong surface.
- Ang pag-finish ng malaking model sa pinong tolerance ay gumagawa ng mahabang program na maraming maikling galaw. Suriin ang output sa sarili mong simulator ng makina bago pumutol.
