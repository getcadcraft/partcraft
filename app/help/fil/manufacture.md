---
title: Gumawa ng toolpath at G-code (Manufacture)
summary: Itakda ang stock at work origin, pumili ng tool, magdagdag ng face, pocket, contour, drill at chamfer operation sa pamamagitan ng pagpili ng face, tapusin ang buong model sa 3D (parallel, scallop), i-simulate ang stock laban sa model para sa gouge at cycle time, at i-download ang G-code mula sa isa sa tatlong built-in na post o sa isang post na i-e-edit mo.
keywords: exact step, step para sa shop, work coordinates, cam handoff, parallel, scallop, 3d finishing, finishing, ball nose, tool library, edit post, custom post, post editor, adaptive, adaptive clearing, constant engagement, trochoidal, hsm, high speed machining, manufacture, CAM, toolpath, G-code, NC, CNC, mill, milling, pocket, contour, profile, facing, drill, peck, G83, G81, G73, chamfer, stock, work offset, G54, post processor, GRBL, LinuxCNC, feeds and speeds, simulation, gouge, cycle time
from: beeb29aa
---

Ginagawang toolpath ng Manufacture workspace ang piyesa para sa 3-axis na milling machine at isinusulat ang mga ito bilang G-code. Karamihan ng operation ay **2.5-axis**: nananatiling patayo ang tool, pinuputol nang tuwid pababa ang mga pader at patag ang sahig. Tinatapos ng **Parallel** at **Scallop** ang mga curved na surface sa 3D (tingnan ang [3D finishing](topic:finish-3d)); nananatiling patayo pa rin ang tool (tatlong axis, walang pagtagilid). Gumagana ito sa mga pinangalanang face na ibinibigay ng mesh kernel sa piyesa (tingnan ang [The mesh kernel](topic:solid-kernels)).

Lab build: suriin ang bawat program sa sariling simulator ng iyong control, at patakbuhin muna ito sa hangin sa ibabaw ng stock.

## Itakda

1. Piliin ang **Manufacture** sa workspace switcher, saka ang {{ui:Bagong setup}}.
2. Sa tab na **Setup**, piliin ang:
   - **Tool axis (+Z)**: kung saang direksyon nakaturo ang tool papasok sa piyesa. Ang World +Y (pataas ng PartCraft) ang default; ang machine X ay world X, at ang machine Y ay world −Z.
   - **Work origin (G54)**: isang sulok o gitna ng stock, itaas o ibaba, ang gitna sa itaas ng model, o ang origin ng model.
   - **Stock**: kahon o silindro, alinman sa model kasama ang offset (gilid, itaas, ibaba) o nakapirming laki.
   - **Material** (nagtatakda ng panimulang feeds and speeds), ang **post** (control), ang pinakamataas na spindle speed ng makina, rapid rate at tool change time, coolant at program number.

## Tools

Hawak ng tab na **Tools** ang library: flat, ball at bull nose end mill, drill, chamfer mill at face mill, bawat isa ay may T number, diameter, flute at flute length (kasama ang corner radius, point o chamfer angle kung saan ito naaangkop).

Maaaring i-save ang sarili kong tool sa browser at ilipat sa pagitan ng mga computer bilang file: tingnan ang [Ang tool library](topic:tool-library).

Nagmumula ang spindle speed at feed sa materyal: n = 1000 × cutting speed / (π × diameter), feed = n × flutes × chip load (drills: n × feed per rev). Konserbatibong panimulang value ang mga numerong ito mula sa nai-publish na range, hindi naka-tune para sa makina mo; i-type ang cutting speed, chip load, rpm o feed ng gumawa ng tool mo para i-override ang mga ito. Kapag lumampas sa pinakamataas na bilis ng makina ang speed, nananatili ito roon at sumusunod ang feed, para mapanatili ang chip load.

## Magdagdag ng operation

Ang bawat button sa toolbar ay nagdaragdag ng operation at, kung kailangan nito ng geometry, nagsisimulang pumili: i-click ang face o edge sa view (i-click ulit para alisin ang isa), saka ang {{ui:Tapos na ang pagpili}} o {{key:Esc}}.

| Operation | Pumili | Ano ang ginagawa |
|---|---|---|
| {{ui:Face}} | wala | Zig-zag na pass sa buong stock, lampas sa mga gilid nito, pababa sa itaas ng model |
| {{ui:Pocket}} | flat na floor face, round na hole, o closed na chain ng edge | Nililinis ang region sa offset na pass, mula loob palabas, sa bawat step-down; nananatili ang mga island (face na nakatayo sa loob ng sahig); ang sahig na bukas sa lahat ng panig (walang mas mataas sa labas nito) ay nililinis hanggang gilid ng stock |
| {{ui:Adaptive}} | gaya ng Pocket | Nililinis ang parehong region sa mga pass na bawat isa ay pumuputol ng nakatakdang lapad (**Engagement**, bahagi ng diameter), kaya hindi kailanman kumukuha ang cutter ng full-width na slot, kahit sa mga sulok; pumapasok ito sa pamamagitan ng helix at tinatapos ang mga pader sa bawat level. Ang makikipot na cut ay nagpapahintulot ng mas malalim na step-down at mas mataas na feed |
| {{ui:Contour}} | flat na face (ang outline nito), round na face, o edge | Sinusundan ang outline na na-offset ng tool radius, labas o loob, may lead-in at lead-out na arko at opsyonal na tabs |
| {{ui:Drill}} | hole (i-click ang pader o gilid ng hole) | Dinidrill ang bawat hole gamit ang canned cycle: peck (G83), drill (G81) o chip break (G73); o magbigay ng diameter para i-drill ang bawat hole ng ganoong laki |
| {{ui:Chamfer}} | outline o edge ng face | Pinapatakbo ang chamfer mill sa kahabaan ng edge para maputol ang lapad na itinakda mo |
| {{ui:Parallel}} | wala (ang buong model) | 3D finishing sa parallel na linya sa anumang anggulo, sinusundan ang surface gamit ang ball, bull-nose o flat end mill. Tingnan ang [3D finishing](topic:finish-3d) |
| {{ui:Scallop}} | wala (ang buong model) | 3D finishing sa mga pass na may nakatakdang layo sa ibabaw, para ang tagaytay sa pagitan ng mga ito ay may taas na hinihiling mo |

Pumili ng operation sa listahan para baguhin ang tool nito, mga taas (clearance, retract, feed height, top, bottom), step-down, stepover, stock na iiwan, finishing pass, entry (helix, ramp o plunge), climb milling, tabs o cycle. Inaayos ng {{ui:Pataas}} at {{ui:Pababa}} ang pagkakasunod-sunod, inaalis ito ng {{ui:I-suppress}} sa labas, binubura ito ng {{ui:Burahin}}. Nasa undo history ang lahat at naka-save sa piyesa file.

Hindi lalampas sa kalahati ng diameter ng tool ang stepover ng pocket, kaya bawat punto ng sahig nito ay nasa loob ng isang tool radius mula sa isang pass. Pinananatili ng mga panloob na sulok ang radius ng tool.

**Adaptive clearing** ay pinananatiling malapit sa iisang value ang engagement ng cutter. Ang engagement na 0.15 ng diameter ay engagement angle na mga 46°: ang arko ng gilid ng cutter sa materyal. Ang offset pocket, sa kabilang banda, ay pumuputol ng full width sa unang pass nito at mas lumiliko sa bawat panloob na sulok. Sa pagitan ng mga pass, nananatiling nakababa ang tool kung saan ito gumagalaw sa cut na hangin, at umaangat at bumababa sa cut na hangin sa ibang lugar. Kinukuwenta ang mga pass sa pinong grid sa ibabaw ng region (mga cell na mga ikalabindalawa ng tool radius), kaya maaaring lumampas nang humigit-kumulang isang cell ang engagement sa itinakda; tapos nang eksakto ang mga pader. Ang malaking bukas na region ay gumagawa ng mahabang program na may maraming maikling galaw.

## I-simulate

Muling ginagawa ang mga toolpath pagkatapos ng bawat pagbabago (pati ng piyesa). Ipinapakita rin ng {{ui:I-simulate}} ang stock na natira pagkatapos ng buong program. Ipinapakita ng panel:

- **Cycle time**: feed moves sa kani-kanilang feed, rapids bilang tuwid na linya sa rapid rate ng setup, kasama ang tool change time. Umaaccelerate ang tunay na makina, kaya mas matagal ang mga ito.
- **Gouges**: mga lugar kung saan lumampas ang tool nang mahigit 0.02 mm sa ibaba ng surface ng piyesa. Ipinapakita sila ng pulang marka sa view.
- **Stock na natira sa piyesa**.

Height map ng itaas (isang Z-map) ang stock, kaya hindi nito maipapakita ang undercut. I-drag ang **Playback** para igalaw ang tool sa kahabaan ng program. Sa view, tuloy-tuloy ang feed moves at putol-putol ang rapids, isang kulay bawat operation.

Kapag naka-on ang **Show the simulated stock**, kinukulayan ang stock laban sa model, cell by cell: **berde** kung nasa model ito (sa loob ng 0.02 mm), **pula** kung pumasok ang tool sa model, at kung may stock na natira sa model, **dilaw** para sa manipis na balat, **orange** para sa mas marami, na unti-unting nagiging **grey** ng hindi pa natatabas na stock sa 1 mm o higit pa. Muling ginagawa ang mga kulay sa bawat pagbabago, mula sa parehong height map ng mga numero sa panel, kaya nagkakatugma ang berde at pula sa linyang Gouges. Sinasadya ang pagpasok ng chamfer sa model at nagpapakita ng pula sa kahabaan ng gilid nito.

## I-post ang G-code

Piliin ang control sa ilalim ng **Post** at pindutin ang {{ui:I-download ang G-code}} (o ang {{ui:Post}} sa toolbar):

| Control | File | Mga tala |
|---|---|---|
| Fanuc-style ISO | .nc | %, O number, line numbers, T M6 na may G43 H, canned cycles |
| GRBL | .nc | Walang tool changer o canned cycles: humihinto ang tool change sa M0, isinusulat ang pagdrill bilang payak na galaw |
| LinuxCNC | .ngc | T M6 na may G43 H, canned cycles, M2 |
| Sarili mo | anuman | Post na isinulat o binago mo: {{ui:I-edit ang post…}}, {{ui:Bagong post…}}, {{ui:Mag-import ng post file…}} |

Nagsisimula ang bawat file sa mga komento para sa program, stock, work offset at tools. Nasa millimetro na may 3 decimal ang coordinates. Ini-export ng {{ui:Toolpath CSV}} at {{ui:Toolpath JSON}} ang mismong mga galaw.

**Suriin ang output sa sariling simulator ng makina mo bago mag-cut, at patakbuhin muna ito sa hangin sa ibabaw ng stock.** Ang tatlong built-in na post ay mga panimulang punto na sumusunod sa dokumentadong gawi ng mga control; hindi pa napatunayan sa anumang partikular na makina. Ikaw ang dapat magpatunay sa post na binago mo. Paano ito isulat: [Post processors](topic:post-processors).

## Exact STEP para sa shop

Sa ilalim ng mga button ng G-code sa tab na **Operations**, dina-download ng {{ui:Eksaktong STEP (work coordinates)}} ang `<part>-work.step`: ang piyesa bilang exact solid (tunay na silindro para sa mga hole at boss, tunay na bilog para sa mga edge nito) na ang origin ay nasa work origin ng setup na ito at ang Z ay kasabay ng tool axis. Ito ang mga coordinates na ginagamit ng G-code, kaya nililinya ng sariling CAM program o checker ng shop ang model sa program nang hindi ito inililipat. Ang piyesa lamang ang laman ng file, hindi ang stock o ang mga toolpath.

Isinusulat ng {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ang parehong solid sa sariling posisyon ng piyesa (Z pataas): tingnan ang [Export para sa printing, STEP at DXF](topic:export-files#for-other-cad-programs-step).

## Mga limitasyon

- Ang pocket, contour, drilling at chamfer ay 2.5-axis. Maaaring tapusin sa 3D ang mga curved na face ([parallel at scallop](topic:finish-3d)), pero hindi ma-rough sa 3D (naiiwan ang cone bilang mga baitang hanggang tapusin mo ito), at walang rest machining. 2D ang adaptive clearing (flat na sahig).
- Tatlong axis lang: walang pagtagilid, walang turning, walang inspection.
- Hindi sinusuri ang holder at shank para sa banggaan; lumilitaw ang babala kapag mas malalim ang cut kaysa sa flute length.
- Panimulang value lamang ang feeds and speeds. Teksto na maaari mong i-edit ang post, pero ang nagpapasya lamang nito ay kung paano isinusulat ang mga galaw; hindi nito mababago ang toolpath, makakadagdag ng axis, o malalaman ang makina mo ([Post processors](topic:post-processors) ang naglilista ng hindi nito kayang gawin).

## Ipadala ang program sa makina

Sa CadCraft Studio sa desktop, kapag may makinang naka-set up sa Studio, lumilitaw ang **Ipadala sa makina…** sa tabi ng **I-download ang G-code** at ina-upload nito ang parehong program sa makina sa network mo. Hindi ito kailanman sinisimulan mula sa PartCraft: simulan ito sa makina kapag malinaw na. Sa browser, hindi ipinapakita ang button (hindi maaabot ng web page ang makina sa network mo): i-download na lang ang program.
