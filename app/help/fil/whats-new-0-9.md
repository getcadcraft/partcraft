---
title: Ano ang bago sa 0.9 (dati)
summary: Nagdaragdag ang PartCraft 0.9 ng fillet sa pagitan ng mga face at pagpapakapal sa solid, mga assembly ng libo-libong piyesa, isang Documents vault na may mga revision, isang Solid FEM stress add-on, sampung paraan ng arko, mga laki ng UK steel, isang Print stage at mga resin printing add-on.
keywords: whats new 0.9, naunang release, whats new, what's new, release notes, changelog, 0.9, fillet between faces, rolling ball, fillet several edges, thicken, solid from surfaces, step shell, iges solid, scan fillets, large assembly, lightweight display, 20000 parts, documents, vault, check out, revision, release, where used, rhino link, grasshopper, 3dm, cursor, factory floor, job queue, solid fem, finite element, von mises, natural frequency, arc methods, 3-point arc, uk steel sections, blue book, print stage, resin, goo, ctb, bed, lay flat, whats new, what's new, release notes, changelog, mga pagbabago, 0.8, 0.8.1, version, mga bagong feature, live analysis, update while editing, break it, what breaks first, load factor, nonlinear, yield, plastic strain, contact, calculix, motion study, clearance, surfaces, nurbs, fair, hull, zebra, engineer, generator, generated body, sketch mula sa larawan, scale para sa printing, split para sa printing, shrinkage, nested sheets, g-code, drawing, dimension ng mga butas, assistant, mcp, mga wika, mga row ng toolbar
from: 1dafd7c8
---

Ito ang nagbago sa PartCraft 0.9, kumpara sa 0.8.1. Nagsasara na nang buo ang mga freeform na surface bilang solid, nananatiling magagamit ang mga assembly ng libo-libong piyesa, pinananatili ng Documents vault ang mga revision, at sinusuri ng Solid FEM add-on ang stress sa isang piyesa. Sinasabi ng bawat item kung saan ito hahanapin.

## Bago sa 0.9.1

- **Exact STEP export.** Gumagana na ngayon ang {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} at {{ui:STEP AP214 (exact solid)}}. Isinusulat ang mga butas, boss, fillet, cone, sphere at torus sa kanilang totoong surface, na may totoong bilog bilang mga edge, para mapili ng ibang CAD o CAM program ang butas bilang butas. Ang mga spline side, modeled na thread at na-import na mesh ay nananatiling flat facet sa iisang solid. Tingnan ang [Export for printing, STEP and DXF](topic:export-files#for-other-cad-programs-step).
- **STEP in, exact STEP out.** Pinananatili ng STEP file na binubuksan mo ang sarili nitong flat face, silindro, cone, sphere at torus, kaya isinusulat ulit ng {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ang mga ito bilang totoong surface sa halip na facet: ang beam ng supplier na may bolt hole ay lumalabas na may parehong face na dala nito, kasama ang anumang iniukit mo rito. Nananatiling facet ang spline, swept at revolved na face ng file, gayundin ang mga body mula sa STL, OBJ at 3MF. Buksan ulit ang STEP file para sa piyesang na-save noon pa. Tingnan ang [Open a STEP file and build on it](topic:import-step).
- **True circles in the face DXF.** Ang {{ui:Export}} › {{ui:DXF of the sketch or flat face}} na may napiling patag na face ay isinusulat na ngayon ang mga bilog na butas bilang bilog, na may sariling center at radius ng butas, para sa laser, plasma o waterjet table. Nananatiling facet ang iba pang bilog na edge.
- **Exact STEP for the shop.** Sa {{ui:Manufacture}}, isinusulat ng {{ui:Exact STEP (work coordinates)}} ang piyesa na ang origin ay nasa work origin ng setup at ang Z ay kasabay ng tool axis, ang mga coordinate na ginagamit ng G-code. Tingnan ang [Make toolpaths and G-code](topic:manufacture#exact-step-for-the-shop).

## Bago

### Surfaces at solids

- **Fillet between faces.** Piliin ang {{ui:Surfaces}} sa kahon ng {{ui:Workspace}}, pagkatapos ay {{ui:Fillet between faces}}. Pumili ng dalawang face ng iisang solid, i-type ang radius (at ang {{ui:Radius at the end (mm, 0 = the same)}} para sa radius na nagbabago sa kahabaan ng edge). Sinasabi ng result line kung gaano kalayo ang fillet sa ideal na rolling ball, at tinatanggihan ang radius na hindi kasya, kasama ang pangalan ng face. Pinapa-round ng {{ui:Fillet several edges}} ang maraming edge sa isang hakbang; lagyan ng tsek ang {{ui:Corners (sphere patch where three meet)}} para sa sphere na sulok kung saan nagtatagpo ang tatlong bilog na edge ng mga patag na face. Tingnan ang [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **Thicken into a solid.** Binibigyan ng {{ui:Thicken into a solid}} sa parehong workspace ng kapal ang isang surface; pinalalaki ito ng {{ui:Other side}} sa kabilang direksyon. Tinatanggihan ang fold o self-crossing, kasama ang pangalan ng surface at ang lugar.
- **Solids from surfaces.** Maaaring pagdugtungin ang trimmed na surface gamit ang union, subtract at intersect, at ilagay sa piyesa bilang isang undo step. Isinusulat ng STEP ang solid bilang isang saradong shell at ang IGES bilang isang solid; parehong binabasa pabalik bilang solid. Kung hindi tugma ang mga face sa bawat edge, nagkakaroon ng hiwalay na face ang file at sinasabi ito ng status line. Puwede ring gumawa ng solid sa node editor; tingnan ang [Node editor](topic:nodes).
- **Rim and variable fillets in scans.** Kapag ikinakabit mo ang surface sa scan, hinahanap din ang rim fillet (torus) at variable-radius fillet sa kahabaan ng medyo tuwid na edge, at inililista ang mga ito kasama ang radius. Sinubukan lamang ito sa mga gawa-gawang scan.

### Assembly, documents at links

- **Large assemblies.** Ang mga piyesang kopya ay nagbabahagi ng iisang mesh, at ang {{ui:Views}} › {{ui:Lightweight display}} ay gumuguhit ng mga kahon para tuloy-tuloy na gumalaw ang view (kusang bumubukas ito para sa napakalalaking assembly; gumagamit pa rin ng totoong piyesa ang pagpili at mga joint). Ipinapakita ng part tree ang unang mga hilera nito at isang button na {{ui:Show 700 more}} para sa natitira. Maaaring maglaman ang assembly file ng hanggang 50,000 instance at 100,000 joint. Tingnan ang [Build an assembly](topic:build-assembly).
- **Documents.** Ang {{ui:Documents…}} sa **File** group ay nagbubukas ng dialog sa ibabaw ng project folder: check out at check in, mga revision letter, state (work in progress, for review, released, obsolete), history, where used at bill of materials. Tingnan ang [Documents and revisions (the vault)](topic:documents-walkthrough).
- **Live Rhino link.** Isang script, `cadcraft_link.py`, ang nagmamasid sa isang Rhino o Grasshopper document at itinutulak lamang sa PartCraft ang nagbago, kung saan nagre-rebuild ang na-import na feature sa bagong hugis. Isang direksyon lamang ito at kailangan ang Studio. Tingnan ang [Live .3dm link](topic:live-3dm-link).
- **See each other's cursors.** Sa shared session, lumalabas ang cursor ng bawat tao kasama ang pangalan at ang feature na napili nila. Tingnan ang [Work live with others](topic:work-live).
- **Factory floor.** I-on ang Factory floor add-on sa {{ui:Settings}} › {{ui:Add-ons}}. Pagkatapos mong mag-post ng program sa {{ui:Manufacture}}, maaaring i-{{ui:Add to the factory job queue}} o i-{{ui:Save as a job file}} ang tab nito. Hindi ito nagpapadala o nagsisimula ng makina kailanman.

### Analysis at mga piyesa

- **Solid FEM add-on.** I-on ang {{ui:Solid FEM}} sa {{ui:Settings}} › {{ui:Add-ons}} (naka-off ito hanggang sa i-on mo) at lalabas ang tab na {{ui:Solid FEM}} sa kanang panel. {{ui:Mesh the part}}, pumili ng mga nakapirmeng face at load sa 3D view, {{ui:Solve}}, at iguhit ang displacement, von Mises stress o mode shape gamit ang {{ui:Show on the model}}. Tingnan ang [Solid FEM: a stress check](topic:solid-fem-check).
- **Arc in sketches, ten ways.** Ang arrow sa tabi ng {{ui:Arc}} sa sketch toolbar ay naglilista ng 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length at Continue. Tingnan ang [Draw an arc by ten methods](topic:sketch-arc-methods).
- **UK steel sizes.** Maaaring gumamit ng 976 na UK section (UB, UC, PFC, EA, UEA, CHS, SHS, RHS) ang weldment; i-type ang laki gaya ng `305x165x40 UB`. Tingnan ang [Structural members](topic:structural-members).

### Printing

- **Print stage.** Inilalagay ng {{ui:Print stage}} button sa toolbar (add-on na 3D Print, naka-on bilang default) ang mga body ng piyesa mo sa isang dashed bed: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, pagkatapos ay {{ui:Send to 3D printer}} sa pamamagitan ng USB, Klipper (Moonraker), OctoPrint o PrusaLink. Walang ipinapadala hanggang sa kumpirmahin mo, at hindi kailanman nababago ang piyesa mo. Para sa STL o 3MF na file, tingnan ang [Get a part ready for 3D printing](topic:print-3d).
- **Resin printing.** Mga add-on sa {{ui:Settings}} › {{ui:Add-ons}}, lahat ay naka-off hanggang sa i-on mo: isang resin slicer, isang exposure test, at mga file format na Elegoo GOO, SL1, Chitubox CBDDLP/CTB at Anycubic. Tumatakbo ang slicing sa worker thread, kaya nananatiling tumutugon ang pahina.

## Sa bawat app

- Bootstrap tooltip ang bawat hover hint.
- May close button ang start tip; nananatili itong sarado.
- Nag-i-scroll pagilid ang row ng mga tab ng panel na hindi kasya, sa halip na maputol.
- Ipinapakita ng browser tab ang pangalan ng bukas na dokumento bago ang PartCraft | CadCraft.
- Ipinapakita ng {{ui:Settings}} ang workspace {{ui:Layout}} bilang drop-down ng mga pagpipilian, at inililista ng language box ang bawat wikang mayroon ang build.
- Weight at Temperature ay mga unit kind sa Units settings.

## Naayos

- Ipinapakita na ngayon ng sketch Arc menu ang bawat paraan.
- Naitama ang add-on toolbar at ang pamagat ng browser tab noong 2026-11-09.

## Mga tapat na limitasyon

- Nabasa pabalik ang exact STEP sa OpenCascade (mga wastong solid, mga volume na katumbas ng kinuwenta nang kamay). Hindi pa ito nabubuksan sa bawat CAD o CAM program, at hindi isinusulat bilang exact STEP ang assembly.
- Walang naimprenta sa totoong printer. Ang slicing, G-code at resin file ay binasa pabalik ng sarili naming program o ng stand-in na printer; walang resin format na na-load sa totoong printer, at panimulang punto lamang ang mga laki at exposure ng printer.
- Linear, isotropic at elastic ang Solid FEM, isang materyal bawat piyesa, walang contact, yielding o buckling. Nakadepende sa mesh ang stress sa mga nakapirmeng face at matatalas na sulok. Isa itong katulong sa pagsusuri, hindi nirepaso ng engineer.
- Mula sa server na walang GPU ang mga timing ng malaking assembly; ang buong-detalyeng frame ng 20,000 piyesa ay tumatagal pa rin ng ilang segundo doon.
- Gumagana ang fillet sa pares ng face; walang pangkalahatang vertex blend at walang fillet sa pagitan ng mga face na hindi nagtatagpo.
- Hindi pa kailanman tumakbo ang Rhino link sa loob ng totoong Rhino o Grasshopper. Nasubukan ang Documents ng dalawang program sa iisang folder, hindi ng dalawang tao sa network share.
- Hindi pa nasusuri nang kamay ang pagkakabit ng surface sa totoong scan. Ang mga wikang iba sa English ay mga draft ng makina.
- Hindi naka-code-sign ang Windows installer, at hindi notarized ang macOS disk image. Tingnan ang [Troubleshooting](topic:troubleshooting).

Ang mga naunang pagbabago ay nasa [Ano ang bago sa 0.7](topic:whats-new-0-7).

## Mas naunang: 0.8 at 0.8.1

Ito ang nagbago sa PartCraft 0.8 at 0.8.1, kumpara sa 0.7. Sumasagot ang simulation habang nag-e-edit ka at sinasabi kung ano ang unang masisira, nakakakuha ang mga assembly ng motion study, at ang mga bagong workspace ang gumagawa ng freeform na surface at mga piyesang may sukat mula sa pisika. Maliit na fix release ang 0.8.1.

### Bago

**Simulation**

- **Update while I edit.** I-tick ang {{ui:Update while I edit}} sa Solve block at susunod ang mga sagot sa mga pag-edit mo. Baguhin ang dimension, load o materyal at lalabas agad ang mabilis na sagot, na ginawa gamit ang mga elemento na apat na beses na mas malaki; kapag huminto ka nang mga isang segundo, papalitan ito ng sariling pinong sagot ng study. Sinasabi ng mga resulta kung alin ang tinitingnan mo. Sa steel cantilever, nasa loob ng 1 % sa deflection at mga 4 % sa stress ng pinong sagot ang mabilis na sagot. Tingnan ang [Check stress and deflection](topic:simulation#update-while-you-edit-live).
- **What breaks first.** Para sa static o buckling study, pinapalaki ng {{ui:What breaks first?}} sa **Break it** block ang mga load hanggang sumuko ang piyesa. Inililista nito, mula sa pinakamasama, ang load factor hanggang sa unang yield (may pulang marker kung saan pinakamataas ang stress) at ang load factor hanggang buckling. Ang factor na mas mababa sa 1 ay nangangahulugang sumusuko na ang piyesa sa kasalukuyang load, at may error na ipinapakita ang Problems. Galing sa linear na study ang mga factor, kaya kasing-tibay lamang ng study ang mga ito. Tingnan ang [Check stress and deflection](topic:simulation#find-out-what-breaks-first-break-it).
- **Yielding and contact.** Dalawa pang uri ng study: isang nonlinear kung saan sinusunod ng materyal ang tuwid na linya nito hanggang sa yield stress at pagkatapos ay mas patag na dalisdis, na may plotted na plastic strain; at isang contact study kung saan nagtutulak sa isa't isa ang magkakahiwalay na piraso (walang friction) o nananatiling nakadikit (bonded). Ang load step na hindi makapagpatatag, o mga piraso na lumulubog nang sobra sa isa't isa, ay lumalabas sa Problems panel. Hindi nilulutas ang friction, malaking pagdulas, malaking rotation, malaking deflection at fatigue. Tingnan ang [Check stress and deflection](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Decks for CalculiX.** Ang {{ui:Export}} › {{ui:CalculiX deck (.inp)}} ay nagse-save ng study para sa CalculiX, isang hiwalay na program na ini-install at pinapatakbo mo; binabasa ng {{ui:Export}} › {{ui:CalculiX results (.frd)}} pabalik ang result file nito sa parehong mesh. Hindi kailanman pinapatakbo ng PartCraft ang program na iyon, at sinasabi nito kung nagbago ang piyesa mula nang i-save ang deck.

**Assemblies**

- **Motion studies.** Ang {{ui:Assembly}} › {{ui:Motion}} ay nagpapatakbo ng halaga ng isang joint sa paglipas ng oras na ibibigay mo (pare-parehong bilis, eased, sine, o palabas at pabalik), inilalagay ang assembly sa bawat hakbang kasama ang mga joint at closed loop nito, at iniuulat kung ano ang nagbabanggaan at gaano kalapit ang mga piyesa. Nagpa-plot ang {{ui:Add a point}} ng posisyon, bilis at acceleration ng isang point, ang halaga ng joint at ang clearance laban sa oras; isinusulat ng {{ui:Save CSV}} at {{ui:Save plot}} ang mga ito. Pagkatapos ng {{ui:Run}}, inililipat ng Step through the run bar ang assembly sa anumang hakbang. Naka-save sa assembly file ang mga setting ng study. Galing sa mga naitalang posisyon ang bilis at acceleration, kaya gumamit ng mas maraming hakbang kung mababa ang basa ng matalim na peak. Tingnan ang [Check an assembly for clashes and motion](topic:check-assembly#a-motion-study).

**Surfaces and parts from physics**

- **A Surfaces workspace.** Piliin ang {{ui:Surfaces}} sa kahon ng {{ui:Workspace}} para sa NURBS curve at surface sa tabi ng piyesa: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} at {{ui:Zebra}}, kasama ang continuity (G0, G1 o G2) na sinusukat sa eksaktong surface, at ang edge na mas masama kaysa sa hiningi mo ay nakalista sa Problems na may Match fix. Sinusukat ng {{ui:Fair}} ang hull line para sa inflection at curvature jump at muling binubuo ang mga hindi maayos sa loob ng tolerance mo. Naka-save sa part file ang mga surface at hindi nito binabago ang mga feature ng piyesa. Tingnan ang [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **The Engineer workspace.** Piliin ang {{ui:Engineer}} sa workspace switcher, pumili ng generator at i-click ang {{ui:New}}: nagsusukat ang script ng piyesa mula sa kung ano ang dapat nitong gawin (init na ilipat, daloy, presyon, materyal, proseso ng printing) gamit ang mga textbook na formula at binubuo ito, pagkatapos ay ibinibigay ang mga numerong ginamit nito kasama ang pinagmulan nila, ang mga manufacturing check nito, at mga file para sa mga analysis tool. Parehong piyesa ang ibinibigay ng parehong input sa anumang computer. Nasa piyesa ang generator, at hindi kailanman tumatakbo ang script kapag binubuksan ang piyesa. Tingnan ang [Parts from physics: generators](topic:engineer-generators) at [Write a generator](topic:write-a-generator).

**Sketching, drawings and making**

- **A sketch from a photo.** Ang {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} ay bumabakas ng larawan ng patag na piyesa sa simpleng lupa (outline at mga butas) o pen drawing sa mga linya, arko at bilog. Magbibigay ka ng isang haba, titingnan ang preview at gagawin ang sketch. Tingnan ang [Sketching basics](topic:sketch-basics#a-sketch-from-a-photo).
- **Scale and split for printing.** Ang {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} ay nag-i-scale kada axis nang hindi binabago ang piyesa, halimbawa para sa shrinkage allowance. Ang {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} ay pumuputol sa piyesang masyadong malaki para sa bed mo sa mga may-numerong piraso na pinagdudugtong ng peg, key, dovetail, dowel hole o magnet pocket. Tingnan ang [Print in 3D](topic:print-3d).
- **Nested sheets to G-code.** Ang {{ui:Export}} › {{ui:Nested sheets to G-code}} ay bumabasa ng nested na DXF at gumagawa ng isang program bawat sheet sa pamamagitan ng post na pipiliin mo: mga butas at cut-out muna, pagkatapos ang outline. Hindi ito nagpaplano ng lead-in, pagkakasunod ng pagputol o mga shared na edge. Tingnan ang [Nest flat parts on sheets](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Drawings that do more themselves.** Ang {{ui:Sheet}} › {{ui:Automatic}} ay pumipili ng pinakamaliit na A-size na sheet na kasya ang mga view sa pinakamalaking standard scale hanggang 1:1. Ang {{ui:Dimension the holes}} ay naglalagay ng center mark sa bawat butas, isang callout bawat laki, at ang mga posisyon mula sa lower-left corner ng view. Tingnan ang [Make a drawing](topic:drawing-pdf).

**In every app**

- **Languages.** Ang mga app ay may 54 na wika. Ang mga wikang higit sa English ay mga draft ng makina hanggang sa may native speaker na nagrepaso.
- **Toolbar rows.** Ang {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ay pumipili ng Wrap (gaya ng dati), 2 row o 1 row; ang bar na hindi kasya ay nag-i-scroll pagilid. Ipinapakita ng Feature ribbon ng PartCraft ang pinakaginagamit na tool nang malaki at itinatago ang mga variant sa likod ng split button.
- **Connect your AI.** Ang Studio ang hub para ikonekta ang sarili mong assistant sa lahat ng walong app, na may read only, suggest o edit na pahintulot bawat app. Ang nakakonektang assistant ay kayang magsukat ng piyesa mula sa isang pangungusap, gaya ng bracket para sa isang load, ipakita ang gawa nito at bawat check, at buuin ito; iniuulat nito ang hindi nito nasuri (stress concentration, fatigue, creep sa plastik). Tingnan ang [Use PartCraft with an AI assistant](topic:use-with-ai-assistants).

### Naayos sa 0.8.1

- **Full-screen cursor freeze.** Naka-throttle na ang hover pick. Ang sanhi ay ang pinakamahusay naming basa at hindi pa ito kinumpirma sa nag-ulat.
- **Language at run time.** Maaaring magpalit ng wika habang tumatakbo ang Studio at ang mga packed na edition; dati, English lamang. Hindi pa ito nasusubukan sa bawat platform: sabihin sa amin kung hindi nagbabago ang wika.

### Wala pa sa bersyong ito

- Hindi pa tapos ang Connect your AI: hindi ipinapangako ang one-click connect sa loob ng Studio, ang hosted connector para sa browser AI, ang sarili mong API key sa loob ng Studio, at ang nailathalang MCP package. Walang sariling AI ang Studio.
- Hindi naka-code-sign ang Studio: maaaring magbabala ang Windows, at hinihingi ng macOS ang right-click pagkatapos Open. Tingnan ang [Troubleshooting](topic:troubleshooting).
- Iisang direksyon pa rin ang mga stack-up: tingnan ang [Tolerance stack-ups](topic:tolerance-stackup).
- Nakalista ang iba sa [What is not built yet](topic:not-built-yet).

Ang mga naunang pagbabago ay nasa [Ano ang bago sa 0.7](topic:whats-new-0-7).
