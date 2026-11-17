---
title: Mga freeform na hugis gamit ang Form, at mga surface feature
summary: Itulak at hilahin ang makinis na control cage sa Form workspace, i-crease ang mga gilid, gumamit ng symmetry, suriin at tapusin ito bilang eksaktong solid o surface, pagkatapos ay i-patch, loft, stitch, thicken, offset, extend at trim ang mga surface sa Design. Ano ang eksakto at ano ang tinatayang.
keywords: form, freeform, t-spline, subdivision, catmull-clark, cage, quadball, crease, symmetry, zebra, curvature, surface, patch, punan, loft surface, stitch, tahiin, thicken, offset surface, extend, trim
from: 0d326ef4
---

:::note
**Hindi pa nagagawa sa bersyong ito.** Ang pagtatapos ng form sa piyesa, at ang mga surface feature, ay nangangailangan ng exact geometry kernel, na wala sa bersyong ito ng PartCraft: bawat piyesa ay binubuo nito gamit ang mesh kernel. [Ano ang hindi pa nagagawa](topic:not-built-yet) ang nagsasabi kung ano ang gagawin sa halip. Inilalarawan ng natitirang pahinang ito kung paano sila gumagana kasama ang exact kernel.
:::

Ang **Form** workspace ay gumagawa ng organikong hugis. Nag-e-edit ka ng **cage**, isang magaspang na mesh ng mga sulok, gilid at face. Ang hugis ay ang makinis na surface na kinokontrol ng cage (ang Catmull–Clark limit surface nito), kaya ang pag-galaw ng isang sulok ay marahang bumabaluktot sa surface sa paligid nito. Kapag tama na ang itsura, idinadagdag ng **Finish** ito sa history ng piyesa bilang *Form* feature, at ginagawa ito ng exact kernel na tunay na B-spline surface. Maaari mo itong i-fillet, putulin, pagdugtungin sa ibang feature at i-export bilang STEP.

Piliin ang **Form** sa listahang **Workspace** sa kaliwa ng toolbar.

## Simulan ang cage

1. Itakda ang **Size** at **Divisions** sa kanang panel. Ang Divisions ay kung ilang face ang nakukuha ng bawat gilid.
2. I-click ang {{ui:Box}}, {{ui:Quadball}} o {{ui:Plane}} sa toolbar. May **Cylinder**, **Torus** at **Faces by clicks** din sa panel.

- Ang **quadball** ay box cage na inayos para nasa sphere ang mga sulok na punto. Sa pagitan ng mga puntong iyon, nasa bahagyang loob ng sphere ang surface: mga 0.4 % na mas kaunting volume sa 2 divisions.
- Bukas ang **plane**, kaya nagiging surface body ito (tingnan ang "Surface features in Design" sa ibaba).
- **Faces by clicks**: i-click ang 4 na punto sa top (ground) plane o sa mga sulok ng cage para makagawa ng isang face. Nagdurugtong ang mga face na may magkakatabing sulok. Pindutin ang {{key:Enter}} pagkatapos ng 3 punto para sa tatsulok, o {{key:Esc}} para huminto.

Naka-save sa part file ang hindi pa tapos na cage mo, kaya maaari mong isara ang file at ipagpatuloy mamaya.

## Pumili at ilipat

- I-click ang isang sulok, gilid o face ng cage. Ang {{key:Shift}}+click ay nagdadagdag o nag-aalis ng mga item. Nililinis ng {{key:Esc}} ang pagpili.
- Lumalabas ang gizmo sa gitna ng pagpili. I-drag ang arrow para gumalaw sa direksyon nito, o ang parisukat para gumalaw sa eroplanong iyon. Pindutin ang {{key:W}} para gumalaw, {{key:E}} para mag-rotate at {{key:R}} para mag-scale, o gamitin ang mga button sa panel. Ang {{ui:Gizmo}} sa toolbar ay nagpapalipat-lipat sa mga ito.
- Hinihila rin ng **Soft falloff** (mm) ang mga sulok sa loob ng layong iyon, unti-unting nawawala sa dulo ng layong iyon.
- Bawat drag ay isang undo step: gumagana ang {{key:Ctrl+Z}} at {{key:Ctrl+Y}} gaya ng dati.

## Baguhin ang cage

Gumagana sa pagpili ang mga button na **Modify** sa panel:

| Button | Ano ang ginagawa |
|---|---|
| {{ui:Extrude}} | Ang mga piniling face ay lumalabas ayon sa **Extrude distance**, sa kahabaan ng kanilang normal, na may bagong side face. Ang mga piniling bukas na gilid ay nagpapalaki ng bagong face palabas. |
| {{ui:Edge loop}} / Maglagay ng edge loop | Hinahati ang singsing ng apat na gilid na face na tumatawid sa piniling gilid, sa kalahati ng haba. Mas maraming loop ay mas masisikip na kurba. |
| Maglagay ng point | Nagdadagdag ng sulok sa gitna ng piniling gilid. |
| I-subdivide | Hinahati ang bawat piniling face sa mga four-sided na face sa paligid ng gitna nito. |
| Bridge | Nagdudugtong ng dalawang piniling face, o dalawang opening (pumili ng isang bukas na gilid sa bawat isa), gamit ang tubong gawa sa mga face. Kailangan nilang pareho ang bilang ng gilid. |
| Punan ang butas | Sinasara ang opening sa pamamagitan ng piniling bukas na gilid gamit ang isang face. |
| Weld | Pinagsasama ang mga piniling sulok sa isa, sa gitna nila. |
| Patagin | Inililipat ang mga piniling sulok sa eroplanong pinakaangkop sa mga ito. |
| {{ui:Delete}} | Inaalis ang mga piniling face, gilid (dalawang face ang nagsasama) o sulok. |

## Matutulis na gilid, symmetry at display

- {{ui:Crease}} ang nagiging matutulis ng mga piniling gilid. Ang **Crease weight** na 10 ay ganap na matulis. Ang mas maliit na weight ay nananatiling matulis sa ganoon karaming refinement step at saka lumalambot, na nagbibigay ng masikip na bilog sa halip na matigas na tupi. Pinapakinis muli ito ng **Uncrease**. Ang **Sharp vertex** ay nagka-pin sa isang sulok para dumaan dito ang surface na may punto.
- Ang **Symmetry** ay sumasalamin sa cage sa X, Y o Z = 0. Pinananatili nito ang positibong gilid, sinasalamin ito, at pinagdudugtong ang dalawang kalahati. Pagkatapos nito, nangyayari sa magkabilang panig ang pag-edit sa alinmang gilid. Nananatili sa mirror plane ang mga sulok na nasa plane.
- {{ui:Display}} ay lumilipat sa pagitan ng **Smooth** (ang surface na magiging feature) at **Box** (ang mismong face ng cage).
- **Analysis**: ang **Zebra stripes** ay sumasalamin ng guhit-guhit na ilaw mula sa kasalukuyang view. Marahang kumukurba ang mga ito sa makinis na surface at nababasag sa crease. Ang **Mean curvature** ay nagkukulay ng convex na bahagi na pula, concave na bahagi na asul, at flat na bahagi na puti. Sinusukat ito sa ipinapakitang mesh gamit ang cotangent formula, kaya gabay ito, hindi eksaktong sukat.

## Suriin at tapusin

- **Check exact** ay kino-convert ang cage sa exact kernel nang hindi binabago ang piyesa mo. Sinasabi nito kung ilang B-spline patch ang bumubuo sa cage, ilan ang eksakto, at kung ang resulta ay sarado at valid na solid, at ang volume nito.
- {{ui:Finish}} ay nagdadagdag ng *Form* feature sa history, o ina-update ang form na iyong in-edit, at ibinabalik ka sa Design. Ang sarado na cage ay nagiging solid. Ang **Operation** nito sa Design panel ay maaaring New body, Join, Cut o Intersect. Ang bukas na cage ay nagiging surface body.
- Para baguhin ang form sa susunod, piliin ito sa history at i-click ang **Edit in Form**. Nakatago ang nabuong body habang ine-edit ang cage nito.
- Itinatapon ng **Discard** ang cage nang hindi ginagalaw ang history.

## Ano ang eksakto at ano ang tinatayang

Bawat four-sided na face ng cage, pinong-pino kapag kinakailangan, ay nagiging isang bicubic B-spline patch.

- Kapag *regular* ang bawat sulok ng isang face (apat na gilid ang nagtatagpo sa loob ng surface, o tatlo sa bukas na gilid o sa kahabaan ng crease), ang patch ay **eksaktong** subdivision surface. Sinusuri ito ng mga test sa 1e-9 mm.
- Sa paligid ng **extraordinary point** (tatlo, lima o higit pang gilid na nagtatagpo, sulok ng tatlo o limang-gilid na face, o dulo ng crease) walang eksaktong polynomial patch. Doon, kinukuha ng patch ang eksaktong punto at tangent plane sa sulok na iyon at ang mga edge curve ng mga kapitbahay, kaya nagtatagpo pa rin ang mga patch nang walang puwang. Tinatayang lang ang tangent continuity sa mga gilid na nagtatagpo sa punto. Ibinibigay ng Form panel at ng panel ng feature ang pinakamalaking anggulo, kadalasan mas mababa sa 2°. Ang mas mataas na **Level** sa panel ng feature ay nagpapaliit at nagpapalapit sa mga patch na ito.
- Ang mga matutulis na crease ay mga tunay na gilid ng solid, kaya maaari mo itong i-fillet.
- Bawat patch ay sariling face, kaya maraming face ang isang form at may mga guhit na iginuguhit sa pagitan nila.

## Mga surface feature sa Design

Nasa menu na {{ui:More}} ng Design ang mga surface command, sa ilalim ng mga feature. Kailangan nila ng exact kernel. Ipinapakitang transparent na asul ang mga surface body. Hindi sila bahagi ng solid hangga't hindi mo sila pinapalapad o tinatahi.

| Command | Ginagawa |
|---|---|
| Patch | Pinupuno ang saradong loop ng mga gilid. {{key:Shift}}+click sa mga gilid ng solid muna, o piliin ang surface body para punan ang bukas nitong bahagi. Ang **Tangent (G1)** ay nagpapadikit sa patch sa surface na iyon nang makinis. |
| Loft surface | Surface na dumadaan sa isang kadena ng curve bawat sketch (bukas o sarado), ayon sa pagkakasunod sa history. |
| Stitch | Tinatahi ang mga surface body sa kanilang magkakabahaging gilid. Kapag nagsara ang mga ito, solid ang resulta, na may Operation na gaya ng ibang feature. |
| Thicken | Binibigyan ang surface body ng kapal: sa kahabaan ng normal nito, laban dito, o kalahati sa bawat direksyon. Solid ang resulta. |
| Offset surface | Kopya ng surface body na inilipat sa kahabaan ng normal nito. Nananatili ang orihinal. |
| Extend surface | Pinapalaki ang isang-face na surface lampas sa mga gilid na pipiliin mo. |
| {{ui:Trim surface}} | Pinuputol ang surface body kung saan ito tumatawid sa ibang surface body, o sa solid. I-click ang **Pick a point on the piece** para piliin kung aling piraso ang itatago, o itago ang lahat ng iba. |

Ginagamit nang buo ng Stitch, Thicken, Extend at Trim ang surface body na pinagsisimulan nila. Ginagamit ng mga susunod na feature ang bago.

Mga limitasyon sa ngayon: ang mga form na may ilang hiwalay na saradong piraso ay hindi nagiging iisang solid; hindi pinagsasama sa mas malalaking surface ang mga regular na bahagi; at tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet).
