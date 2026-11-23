---
title: Gumawa ng toolpath at G-code (Manufacture)
summary: Mag-set up ng stock at work origin, pumili ng tool, magdagdag ng face, pocket, contour, drill at chamfer operation sa pamamagitan ng pagpili ng face, tapusin ang buong model sa 3D (parallel, scallop), i-simulate ang stock laban sa model para sa gouge at cycle time, at i-download ang G-code mula sa isa sa tatlong built-in na post o sa sarili mong ineedit.
keywords: exact step, step para sa shop, work coordinates, cam handoff, parallel, scallop, 3d finishing, finishing, ball nose, tool library, edit post, custom post, post editor, adaptive, adaptive clearing, constant engagement, trochoidal, hsm, high speed machining, manufacture, CAM, toolpath, G-code, NC, CNC, mill, milling, pocket, contour, profile, facing, drill, peck, G83, G81, G73, chamfer, stock, work offset, G54, post processor, GRBL, LinuxCNC, feeds at speeds, simulation, gouge, cycle time
from: f8a03be8
---

Ginagawang toolpath ng Manufacture workspace ang piyesa at isinusulat ang mga ito bilang G-code. Karamihan ng operation ay **2.5-axis** milling: nakatayo nang patayo ang tool, tuwid na pinuputol pababa ang mga pader, at patag ang mga sahig. Nililinis ng **3D rough** at **Rest** ang mga curved na piyesa sa 3D ([3D roughing at rest machining](topic:rough-3d)); tinatapos ito ng **Parallel** at **Scallop** ([3D finishing](topic:finish-3d)). Sa makinang may rotary axes, puwedeng nakahilig ang tool sa anumang operation, at dalawang operation ang gumagalaw sa rotary axes habang pumuputol ([4- and 5-axis machining](topic:multi-axis)). May mga operation para sa lathe ([Turning](topic:turning)) at para sa touch probe ([Probing](topic:probing)). Gumagana ito sa mga pinangalanang face na ibinibigay ng mesh kernel sa piyesa (tingnan ang [The mesh kernel](topic:solid-kernels)).

Lab build: suriin ang bawat program sa sarili mong simulator ng control, at patakbuhin muna ito sa hangin sa ibabaw ng stock.

## Set up

1. Piliin ang **Manufacture** sa workspace switcher, pagkatapos ay {{ui:New setup}}.
2. Sa **Setup** tab, pumili ng:
   - **Tool axis (+Z)**: aling direksyon ang itinuturo ng tool papasok sa piyesa. World +Y (ang up ng PartCraft) ang default; ang machine X ay world X, at ang machine Y ay world −Z.
   - **Work origin (G54)**: sulok o sentro ng stock, tuktok o ilalim, ang sentro sa itaas ng model, o ang origin ng model.
   - **Stock**: box o silindro, alinman sa model kasama ang mga offset (gilid, tuktok, ilalim) o isang nakapirmeng laki.
   - **Material** (nagtatakda ng panimulang feed at speed), ang **post** (control), ang pinakamataas na spindle speed ng makina, rapid rate at tool change time, coolant, at ang program number.

## Tools

Hawak ng **Tools** tab ang library: flat, ball at bull nose end mill, drill, chamfer mill at face mill, bawat isa ay may T number, diameter, flute at haba ng flute (kasama ang corner radius, point o anggulo ng chamfer kung saan naaangkop).

Maaaring i-save sa browser ang mga tool ko at ilipat sa ibang computer bilang file: tingnan ang [The tool library](topic:tool-library).

Kinukuha ang spindle speed at feed mula sa material: n = 1000 × cutting speed / (π × diameter), feed = n × flutes × chip load (drill: n × feed per rev). Konserbatibong panimulang halaga ang mga numero mula sa nailathalang saklaw, hindi tinune para sa makina mo; i-type ang cutting speed, chip load, rpm o feed ng gumawa ng tool mo para i-override ang mga ito. Kapag lumampas ang bilis sa pinakamataas ng makina, nananatili ito roon at sumusunod ang feed, para mapanatili ang chip load.

## Add operations

Nagdaragdag ng operation ang bawat button sa toolbar, at kung kailangan nito ng geometry, magsisimula itong pumili: i-click ang mga face o edge sa view (i-click muli para tanggalin ang isa), pagkatapos ay {{ui:Done picking}} o {{key:Esc}}.

| Operation | Pili | Ano ang ginagawa |
|---|---|---|
| {{ui:Face}} | wala | Zig-zag na pass sa buong stock, lampas sa mga gilid nito, pababa sa tuktok ng model |
| {{ui:Pocket}} | isang patag na sahig na face, isang bilog na butas, o isang sarado na kadena ng edge | Nililinis ang rehiyon sa offset na pass mula loob palabas, sa bawat step-down; naiiwan ang mga island (mga face na nakatayo sa loob ng sahig); ang sahig na bukas sa lahat ng gilid (walang mas mataas sa labas nito) ay nililinis hanggang sa gilid ng stock |
| {{ui:Adaptive}} | kapareho ng Pocket | Nililinis ang parehong rehiyon sa mga pass na bawat isa ay pumuputol ng nakatakdang lapad (**Engagement**, fraction ng diameter), kaya hindi kailanman kumukuha ng buong-lapad na slot ang cutter, kahit sa mga sulok; pumapasok ito sa pamamagitan ng helix at tinatapos ang mga pader sa bawat level. Ang mga makitid na hiwa ay nagpapahintulot ng mas malalim na step-down at mas mataas na feed |
| {{ui:Contour}} | isang patag na face (ang outline nito), isang bilog na face, o mga edge | Sinusundan ang outline na inoffset ng radius ng tool, sa labas o sa loob, na may lead-in at lead-out na arko at opsyonal na tab |
| {{ui:Drill}} | mga butas (i-click ang pader o gilid ng butas) | Dinidrill ang bawat butas gamit ang canned cycle: peck (G83), drill (G81) o chip break (G73); o magbigay ng diameter para i-drill ang bawat butas ng ganoong laki |
| {{ui:Chamfer}} | outline o mga edge ng isang face | Pinatatakbo ang chamfer mill sa kahabaan ng edge para maputol ang lapad na itinakda mo |
| {{ui:Parallel}} | wala (buong model) | 3D finishing sa parallel na linya sa anumang anggulo, sumusunod sa surface gamit ang ball, bull-nose o flat end mill. Tingnan ang [3D finishing](topic:finish-3d) |
| {{ui:Scallop}} | wala (buong model) | 3D finishing sa mga pass na may itinakdang layo sa ibabaw, para ang ridge sa pagitan nila ay may taas na hinihingi mo |

Piliin ang isang operation sa listahan para baguhin ang tool nito, mga taas (clearance, retract, feed height, top, bottom), step-down, stepover, stock na iiwan, finishing pass, entry (helix, ramp o plunge), climb milling, tabs o cycle. Inaayos ng {{ui:Up}} at {{ui:Down}} ang pagkakasunod, inaalis ito ng {{ui:Suppress}} sa program, at binubura ito ng {{ui:Delete}}. Nasa undo history ang lahat at naka-save sa part file.

Ang stepover ng pocket ay hindi lalampas sa kalahati ng diameter ng tool, kaya bawat punto ng sahig nito ay nasa loob ng isang tool radius mula sa isang pass. Pinananatili ng mga panloob na sulok ang radius ng tool.

**Adaptive clearing** ay pinapanatili ang engagement ng cutter malapit sa isang halaga. Ang engagement na 0.15 ng diameter ay engagement angle na mga 46°: ang arko ng edge ng cutter sa materyal. Ang offset pocket, sa kabilang banda, ay pumuputol ng buong lapad sa unang pass at umiikot pa sa bawat panloob na sulok. Sa pagitan ng mga pass, nananatiling nakababa ang tool kung saan dumadaan ito sa hanging wala nang materyal, at umaangat at bumababa sa ibang lugar. Kinakalkula ang mga pass sa pinong grid sa ibabaw ng rehiyon (mga cell na mga ikalabindalawang bahagi ng tool radius), kaya maaaring lumampas ng halos isang cell ang engagement sa itinakda; eksakto ang mga pader na tinatapos. Ang malaking bukas na rehiyon ay gumagawa ng mahabang program na maraming maikling galaw.

## Simulate

Muling ginagawa ang mga toolpath pagkatapos ng bawat pagbabago (pati ang sa piyesa). Ipinapakita rin ng {{ui:Simulate}} ang stock na naiwan pagkatapos ng buong program. Ipinapakita ng panel ang:

- **Cycle time**: ang feed moves ay sa kanilang feed, ang rapids ay tuwid na linya sa rapid rate ng setup, kasama ang tool change time. Bumibilis ang mga totoong makina, kaya mas matagal ang mga ito.
- **Gouges**: mga lugar kung saan lumubog ang tool nang higit sa 0.02 mm sa ibaba ng surface ng piyesa. Ipinapakita ang mga ito bilang pulang marka sa view.
- **Stock left on the part**: stock na naiwan sa piyesa.

Height map ng tuktok ang stock (Z-map), kaya hindi nito maipapakita ang mga undercut. I-drag ang **Playback** para igalaw ang tool sa kahabaan ng program. Sa view, solid ang feed moves at naka-dash ang rapids, na may isang kulay bawat operation.

Kapag naka-on ang **Show the simulated stock**, kinukulayan ang stock laban sa model, cell by cell: **berde** kung nasa model ito (sa loob ng 0.02 mm), **pula** kung saan pumasok ang tool sa model, at kung saan may stock na naiwan sa model: **dilaw** para sa manipis na balat, **kahel** para sa higit pa, na unti-unting nagiging **kulay abo** ng hindi pa naputol na stock sa 1 mm o higit pa. Muling ginagawa ang mga kulay sa bawat pagbabago, mula sa parehong height map ng mga numero sa panel, kaya nagkakatugma ang berde at pula sa linyang Gouges. Sinasadya ang pagpasok ng chamfer sa model at nagpapakita ito ng pula sa kahabaan ng gilid nito.

## Post the G-code

Piliin ang control sa ilalim ng **Post** at pindutin ang {{ui:Download G-code}} (o {{ui:Post}} sa toolbar):

| Control | File | Mga tala |
|---|---|---|
| Fanuc-style ISO | .nc | %, O number, line numbers, T M6 na may G43 H, canned cycles |
| GRBL | .nc | Walang tool changer o canned cycles: humihinto ang tool change sa M0, ang pagdrill ay isinusulat bilang simpleng galaw |
| LinuxCNC | .ngc | T M6 na may G43 H, canned cycles, M2 |
| Fanuc-style lathe | .nc | Para sa turning program: X bilang diameter, feed bawat revolution, G96 sa ilalim ng G50 limit, G32 threading |
| LinuxCNC lathe | .ngc | Para sa turning program: G7 diameter, G95, G96, G33 threading; walang isinusulat na homing move |
| Sarili mo | alinman | Post na isinulat o binago mo: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Nagsisimula ang bawat file sa mga komento para sa program, stock, work offset at mga tool. Nasa milimetro ang mga coordinate na may 3 decimal. Ini-export ng {{ui:Toolpath CSV}} at {{ui:Toolpath JSON}} ang mga galaw mismo.

**Suriin ang output sa sarili mong simulator ng makina bago pumutol, at patakbuhin ito sa hangin sa ibabaw ng stock muna.** Panimulang punto ang tatlong built-in na post na sumusunod sa dokumentadong gawi ng mga control; hindi pa napatunayan ang mga ito sa anumang partikular na makina. Ikaw ang dapat magpatunay sa post na binago mo. Paano sumulat ng isa: [Post processors](topic:post-processors).

## Exact STEP for the shop

Sa ilalim ng mga button ng G-code sa **Operations** tab, dina-download ng {{ui:Exact STEP (work coordinates)}} ang `<part>-work.step`: ang piyesa bilang eksaktong solid (totoong silindro para sa mga butas at boss, totoong bilog para sa kanilang mga edge), na ang origin ay nasa work origin ng setup na ito at ang Z ay kasabay ng tool axis. Ito ang mga coordinate na ginagamit ng G-code, kaya nakahanay ng sariling CAM program o checker ng shop ang model sa program nang hindi ito inililipat. Piyesa lamang ang laman ng file, hindi ang stock o ang mga toolpath.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ay nagsusulat ng parehong solid sa sarili nitong posisyon (Z up): tingnan ang [Export for printing, STEP and DXF](topic:export-files#for-other-cad-programs-step).

## Limits

- Ang pockets, contours, pagdrill at chamfers ay 2.5-axis. Ang mga curved na piyesa ay nirurough at tinatapos sa 3D ng sarili nilang operation ([3D roughing at rest machining](topic:rough-3d), [3D finishing](topic:finish-3d)). Ang adaptive clearing ay 2D (patag na sahig).
- Ang nakahilig na tool, 5-axis at 4th-axis finishing, turning at probing ay nariyan, bawat isa ay may sariling limitasyon, at **wala sa mga ito ang napatakbo na sa makina**: tingnan ang [4- and 5-axis machining](topic:multi-axis), [Turning](topic:turning) at [Probing](topic:probing).
- Hindi sinusuri para sa banggaan ang holder at shank; lumalabas ang babala kapag mas malalim sa flute length ang pagputol.
- Panimulang halaga ang mga feed at speed. Teksto ang post na puwedeng i-edit, pero tumutukoy lamang ito kung paano isinusulat ang mga galaw; hindi nito kayang baguhin ang toolpath, magdagdag ng axis, o malaman ang makina mo ([Post processors](topic:post-processors) ang naglilista ng hindi nito kaya).

## Send the program to a machine

Sa CadCraft Studio sa desktop, kapag may makinang naka-set up sa Studio, lalabas ang **Send to a machine…** sa tabi ng **Download G-code** at ia-upload ang parehong program sa makina sa network mo. Hindi ito sinisimulan mula sa PartCraft: simulan ito sa makina kapag malinaw na ang lahat. Sa browser, hindi ipinapakita ang button (hindi maaabot ng web page ang makina sa network mo): i-download na lang ang program.
