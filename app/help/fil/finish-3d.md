---
title: "Pagtatapos sa 3D: parallel at scallop"
summary: Tapusin ang buong hubog na surface ng modelo gamit ang ball, bull-nose o flat end mill, sa parallel na linya sa anumang anggulo o sa mga pass na may takdang distansya sa isa't isa, para mapanatili ng mga tagaytay sa pagitan ng mga ito ang taas na hinihiling mo. Ano ang ginagarantiya ng mga path, at ano ang hindi.
keywords: 3d finishing, finishing, parallel, raster, scallop, constant scallop, cusp, ball nose, bull nose, surface, tolerance, stepover, dalisdis, stock na iiwan, drop cutter, gouge
from: e1587d0a
---

Dalawang operasyon sa Manufacture ang pumuputol sa **buong surface ng modelo** habang tuwid na nakatayo ang tool (tatlong axis). Wala silang kinukuhang pick; gumagana sila sa lahat ng bahagi ng modelo na nakikita mula sa itaas. I-rough muna ang piyesa (adaptive o pocket); nagbababala ang finishing pass sa ibabaw ng hindi pa napuputol na stock na puputol ito nang malalim.

## Parallel

Tuwid na linya sa kabuuan ng modelo sa **anggulo** na itinakda mo, **stepover** ang layo sa isa't isa (isang fraction ng diameter ng tool). Sinusundan ng bawat linya ang surface: nasa taas na kinakailangan ang dulo ng tool para walang bahagi ng cutter ang bumaba sa modelo, at mas pinong pinuputol ang linya saanman yumuko ang surface. Kapag naka-on ang **Zig-zag**, nananatiling nakababa ang tool sa pagitan ng mga linya kung saan ito ligtas (sinusuri sa kahabaan ng galaw); kung hindi, iaangat ito.

- **Tolerance**: gaano kalayo ang tuwid na bahagi ng linya sa tunay na taas ng dulo (kalahati nito ang ginagamit bilang limitasyon sa gitna ng bawat bahagi). Default 0.01 mm.
- **Only where the surface is at least … and at most … (°)**: tapusin lang ang mababaw na bahagi o ang matarik lang. Kung nasa labas ng saklaw ang surface, hindi isasama ang linya at iaangat ang tool.
- **Stock to leave**: ang modelong na-offset ng distansyang iyon (lumalaki ang cutter nang ganoon: eksakto para sa ball at bull-nose na tool; ang flat na tool ay nag-iiwan ng kahit ganoon karami).
- **Bottom**: walang pinuputol sa ibaba ng z na ito.

## Scallop

Mga pass na nagpapanatili ng pare-parehong distansya sa ibabaw mula sa isa't isa, kaya ang tagaytay (scallop) na naiiwan sa pagitan ng dalawang katabing pass ay may **taas** na hinihiling mo. Ang distansya ay nagmumula sa taas at radius ng bola: s = 2·√(2·R·h − h²), halimbawa mga 0.69 mm sa pagitan ng mga pass para sa bolang Ø6 at tagaytay na 0.02 mm. Ang bull-nose na tool ay gumagamit ng radius ng sulok nito. Tinatanggihan ang flat end mill: wala itong tagaytay na masusukat.

Nagsisimula ang mga pass **mula sa gilid ng modelo, papasok**, o **mula sa itaas nito, pababa**. Ang mga ito ay contour ng distansya sa ibabaw (hindi ng taas), kaya sa dalisdis ay magkakalapit sila sa plano, at sa patag ay malayo ang agwat. Ang distansya ay sinusukat sa grid sa ibabaw at tama hanggang mga 1 %; ang taas ng tagaytay ay eksakto kung saan patag o mahinang hubog ang surface, at tinatayang kung saan mabilis ang kurba. **Climb** ay pinapanatili ang mas mataas na bahagi ng surface sa kanang bahagi ng cutter.

## Gaano kaganda ang mga path

Ang sinusuri ng mga test, gamit ang saradong porma o isang independiyenteng brute-force na paghahanap sa footprint ng cutter:

- Eksakto ang taas ng dulo sa ilalim ng tool para sa ball, bull-nose at flat na tool sa mga face, edge at sulok ng mesh, at hindi ito kailanman mas mataas kaysa sa totoong taas; para sa parallel na linya, nananatili ang path sa loob ng tolerance nito, na walang gouge na mas malalim doon.
- Tugma ang haba ng path sa tilted na plano sa saradong porma; ang scallop pass sa plano ay nasa hinihiling na distansya sa isa't isa, at lumalabas na tama ang taas ng tagaytay sa pagitan nila.
- Walang gouge na ipinapakita ng stock simulation pagkatapos ng isang pass, at ipinapakita nito ang mga tagaytay na natitira.

Ang mga path na ito ay hindi: mga pangunahing finishing pass lang sila, hindi ang kabuuan ng kayang ibigay ng isang production system.

- Hindi pa nagagawa: waterline (pare-parehong z), pencil at corner clean-up, radial at spiral na pass, pag-project ng curve sa surface, pagtuklas ng flat na lugar, rest machining, pagsusuri ng banggaan sa holder at shank, at anumang pagtagilid ng tool.
- Nananatili sa ibabaw ng modelo ang sentro ng tool: humihinto ang mga path sa gilid ng modelo sa halip na tumakbo palabas dito, kaya ang patayong pader sa mismong gilid ay hindi natatapos hanggang sa paanan nito.
- Hindi nakikita ang mga undercut (ang surface ay ang sinasalubong ng tool mula sa itaas).
- Ang modelo ay ang mesh mula sa kernel, kaya sinusundan ng mga path ang mesh (ang chord tolerance nito ay mga 0.0002 ng dayagonal ng piyesa), hindi ang eksaktong surface.
- Ang pagtapos ng malaking modelo sa pinong tolerance ay gumagawa ng mahabang programa na may maraming maiikling galaw. Suriin ang output sa simulator ng makina mo bago mag-cut.
