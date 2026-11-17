---
title: Ano ang bago sa 0.9
summary: Idinagdag ng PartCraft 0.9 ang fillet sa pagitan ng mga face at pag-thicken sa mga solid, mga assembly ng libo-libong part, isang Documents vault na may mga revision, isang Solid FEM stress add-on, sampung paraan ng arc, mga UK steel size, isang Print stage at mga resin printing add-on.
keywords: whats new, what's new, release notes, changelog, 0.9, fillet between faces, rolling ball, fillet several edges, thicken, solid from surfaces, step shell, iges solid, scan fillets, large assembly, lightweight display, 20000 parts, documents, vault, check out, revision, release, where used, rhino link, grasshopper, 3dm, mga cursor, factory floor, job queue, solid fem, finite element, von mises, natural frequency, arc methods, 3-point arc, uk steel sections, blue book, print stage, resin, goo, ctb, bed, ilatag nang patag, whats new, what's new, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, bagong feature, live analysis, update habang nine-edit, sirain ito, what breaks first, load factor, nonlinear, yield, plastic strain, contact, calculix, motion study, clearance, surfaces, nurbs, fair, hull, zebra, engineer, generator, generated body, sketch mula sa larawan, scale for printing, split for printing, pag-urong, nested sheets, g-code, drawing, dimension ng butas, assistant, mcp, mga wika, mga row ng toolbar
from: 96d9fbfa
---

Ito ang mga nagbago sa PartCraft 0.9, kumpara sa 0.8.1. Ngayon ay nagsasara na bilang mga solid ang freeform surface, nananatiling magagamit ang mga assembly ng libo-libong part, pinapanatili ng Documents vault ang mga revision, at sinusuri ng Solid FEM add-on ang stress sa isang part. Sinasabi ng bawat item kung saan ito matatagpuan.

## Bago sa 0.9.1

- **Exact STEP export.** Gumagana na ngayon ang {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} at {{ui:STEP AP214 (exact solid)}}. Ang mga butas, boss, fillet, cone, sphere at torus ay isinusulat sa tunay nilang surface na may tunay na bilog bilang edge, kaya maaaring piliin ng ibang CAD o CAM program ang butas bilang butas. Ang spline side, modelled thread at imported mesh ay nananatiling flat facet sa parehong solid. Tingnan ang [Export for printing, STEP and DXF](topic:export-files#for-other-cad-programs-step).
- **STEP sa loob, exact STEP sa labas.** Pinapanatili ng STEP file na binubuksan mo ang sarili nitong flat face, cylinder, cone, sphere at torus, kaya isinusulat ito ng {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} pabalik bilang tunay na surface sa halip na facet: ang beam ng supplier na may bolt hole ay lumalabas na may parehong face na dala nito, kasama ang anumang na-cut mo rito. Nananatiling facet ang spline, swept at revolved face ng file, gayundin ang mga body mula sa STL, OBJ at 3MF. Buksan muli ang STEP file para sa part na na-save noon. Tingnan ang [Open a STEP file and build on it](topic:import-step).
- **Mga tunay na bilog sa face DXF.** Ang {{ui:Export}} › {{ui:DXF ng sketch o flat face}} na may napiling flat face ay sumusulat na ngayon ng mga bilog na butas bilang circle, may sariling center at radius ng butas, para sa laser, plasma o waterjet table. Facet pa rin ang ibang bilog na edge.
- **Exact STEP para sa shop.** Sa {{ui:Manufacture}}, ang {{ui:Eksaktong STEP (work coordinates)}} ay sumusulat ng part na may origin nito sa work origin ng setup at Z sa tool axis, ang mga coordinate na ginagamit ng G-code. Tingnan ang [Make toolpaths and G-code](topic:manufacture#exact-step-for-the-shop).

## Bago

### Mga surface at solid

- **Fillet sa pagitan ng mga face.** Piliin ang {{ui:Mga surface}} sa kahon ng {{ui:Workspace}}, pagkatapos {{ui:Fillet sa pagitan ng mga face}}. Pumili ng dalawang face ng isang solid, i-type ang radius (at ang {{ui:Radius sa dulo (mm, 0 = pareho)}} para sa radius na nagbabago sa kahabaan ng edge). Sinasabi ng result line kung gaano kalayo ang fillet sa ideal na rolling ball, at tinatanggihan ang radius na hindi kasya, kasama ang pangalan ng face. Pinapabilog ng {{ui:Fillet ng ilang edge}} ang maraming edge sa isang hakbang; i-tick ang {{ui:Mga corner (sphere patch kung saan nagtatagpo ang tatlo)}} para sa sphere corner kung saan nagtatagpo ang tatlong bilog na edge ng flat face. Tingnan ang [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **Pag-thicken sa solid.** Ang {{ui:Lagyan ng kapal para maging solid}} sa parehong workspace ay nagbibigay ng kapal sa isang surface; pinalalaki ito ng {{ui:Kabilang panig}} sa kabilang direksyon. Tinatanggihan ang fold o self-crossing, kasama ang pangalan ng surface at lugar.
- **Mga solid mula sa surface.** Ang mga trimmed surface ay maaaring pagdugtungin gamit ang union, subtract at intersect at i-bake sa part bilang isang undo step. Isinusulat ng STEP ang solid bilang isang closed shell at IGES bilang isang solid; parehong binabasa pabalik bilang solid. Kung hindi nagtutugma ang mga face edge sa edge, nakakakuha ang file ng hiwalay na mga face at sinasabi ito ng status line. Puwede ring gawin ang mga solid sa node editor; tingnan ang [Node editor](topic:nodes).
- **Rim at variable na fillet sa scan.** Kapag nagkakabit ka ng surface sa isang scan, hinahanap din ang rim fillet (torus) at variable-radius fillet sa kahabaan ng medyo tuwid na edge, at nakalista ang mga ito kasama ang radius. Nasubok lang ito sa mga gawa-gawang scan.

### Mga assembly, document at link

- **Malalaking assembly.** Ang mga part na kopya ay nagbabahagi ng iisang mesh, at ang {{ui:Views}} › {{ui:Magaan na display}} ay gumuguhit ng mga kahon para tuloy-tuloy na gumalaw ang view (kusang bumubukas ito para sa napakalalaking assembly; gumagamit pa rin ng totoong part ang pagpili at joint). Ipinapakita ng part tree ang unang mga hilera nito at isang {{ui:Ipakita ang 700 pa}} na button para sa natitira. Maaaring maglaman ang mga assembly file ng hanggang 50,000 instance at 100,000 joint. Tingnan ang [Build an assembly](topic:build-assembly).
- **Mga document.** Ang {{ui:Documents…}} sa pangkat na **File** ay nagbubukas ng dialog sa ibabaw ng project folder: check out at check in, mga letra ng revision, mga state (work in progress, for review, released, obsolete), history, where-used at bill of materials. Tingnan ang [Documents and revisions (the vault)](topic:documents-walkthrough).
- **Live Rhino link.** Isang script, `cadcraft_link.py`, ang nagbabantay sa isang Rhino o Grasshopper document at ipinapadala lang ang nagbago sa PartCraft, kung saan nagre-rebuild ang na-import na feature sa bagong hugis. Isang direksyon lang ito at kailangan ang Studio. Tingnan ang [Live .3dm link](topic:live-3dm-link).
- **Makita ang cursor ng isa't isa.** Sa shared session, lumalabas ang cursor ng bawat tao kasama ang kanyang pangalan at ang feature na napili niya. Tingnan ang [Work live with others](topic:work-live).
- **Factory floor.** I-on ang Factory floor add-on sa {{ui:Mga setting}} › {{ui:Mga Add-on}}. Pagkatapos mong mag-post ng program sa {{ui:Manufacture}}, maaaring {{ui:Idagdag sa factory job queue}} o {{ui:I-save bilang job file}} ang tab nito. Hindi ito kailanman nagpapadala o nagsisimula ng makina.

### Analysis at mga part

- **Solid FEM add-on.** I-on ang {{ui:Solid FEM}} sa {{ui:Mga setting}} › {{ui:Mga Add-on}} (naka-off ito hanggang i-on mo) at lalabas ang {{ui:Solid FEM}} tab sa kanang panel. {{ui:I-mesh ang part}}, pumili ng mga naayos na face at load sa 3D view, {{ui:I-solve}}, at iguhit ang displacement, von Mises stress o mode shape gamit ang {{ui:Ipakita sa model}}. Tingnan ang [Solid FEM: a stress check](topic:solid-fem-check).
- **Arc sa mga sketch, sampung paraan.** Ang arrow sa tabi ng {{ui:Arko}} sa sketch toolbar ay naglilista ng 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length at Magpatuloy. Tingnan ang [Draw an arc by ten methods](topic:sketch-arc-methods).
- **Mga UK steel size.** Puwedeng gumamit ang weldment ng 976 na UK section (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); i-type ang laki gaya ng `305x165x40 UB`. Tingnan ang [Structural members](topic:structural-members).

### Pag-print

- **Print stage.** Ang {{ui:Print stage}} button sa toolbar (add-on na 3D Print, naka-on bilang default) ay naglalagay ng mga body ng part mo sa dashed na bed: {{ui:Ilatag nang patag}}, {{ui:I-turn 90°}}, {{ui:Ayusin sa bed}}, {{ui:I-fit lahat sa bed}}, {{ui:I-preview ang mga layer}}, pagkatapos {{ui:Ipadala sa 3D printer}} sa pamamagitan ng USB, Klipper (Moonraker), OctoPrint o PrusaLink. Walang ipinapadala hangga't hindi mo kinukumpirma, at hindi kailanman nababago ang part mo. Para sa STL o 3MF na file, tingnan ang [Get a part ready for 3D printing](topic:print-3d).
- **Resin printing.** Mga add-on sa {{ui:Mga setting}} › {{ui:Mga Add-on}}, lahat ay naka-off hanggang i-on mo: isang resin slicer, isang exposure test, at mga file format na Elegoo GOO, SL1, Chitubox CBDDLP/CTB at Anycubic. Tumatakbo ang slicing sa worker thread, kaya nananatiling responsive ang pahina.

## Sa bawat app

- Bawat hover hint ay Bootstrap tooltip.
- May close button ang start tip; nananatili itong sarado.
- Ang hilera ng tab ng panel na hindi kasya ay nagsa-scroll sa gilid sa halip na maputol.
- Ipinapakita ng browser tab ang pangalan ng bukas na document bago ang PartCraft | CadCraft.
- Ipinapakita ng {{ui:Mga setting}} ang workspace {{ui:Layout}} bilang drop-down ng mga pagpipilian, at inililista ng language box ang bawat wikang mayroon ang build.
- Ang Timbang at Temperatura ay mga uri ng unit sa mga setting ng Units.

## Naayos

- Ipinapakita na ngayon ng sketch Arc menu ang bawat paraan.
- Naitama noong 2026-11-09 ang add-on toolbar at ang title ng browser tab.

## Mga tapat na limitasyon

- Binasa pabalik sa OpenCascade ang exact STEP (valid na solid, mga volume na katumbas ng kinuwenta nang kamay). Hindi pa ito nabubuksan sa bawat CAD o CAM program, at hindi isinusulat bilang exact STEP ang isang assembly.
- Walang na-print sa totoong printer. Ang slicing, G-code at resin file ay binasa pabalik ng sarili naming program o ng stand-in na printer; walang resin format na na-load sa printer, at panimulang punto lang ang mga laki at exposure ng printer.
- Linear, isotropic at elastic ang Solid FEM, isang materyal bawat part, walang contact, yielding o buckling. Nakadepende sa mesh ang stress sa mga naayos na face at matalas na corner. Pantulong sa pagsusuri ito, hindi nire-review ng engineer.
- Galing sa server na walang GPU ang timing ng malalaking assembly; tumatagal pa rin ng ilang segundo doon ang full-detail frame ng 20,000 part.
- Gumagana ang fillet sa mga pares ng face; walang pangkalahatang vertex blend at walang fillet sa pagitan ng mga face na hindi nagdidikit.
- Hindi pa kailanman tumakbo ang Rhino link sa totoong Rhino o Grasshopper. Sinubukan ang Documents ng dalawang program sa iisang folder, hindi ng dalawang tao sa network share.
- Hindi pa nasusuri nang kamay ang pagkakabit ng surface sa totoong scan. Machine draft ang mga wikang hindi Ingles.
- Hindi naka-code-sign ang Windows installer, at hindi notarized ang macOS disk image. Tingnan ang [Troubleshooting](topic:troubleshooting).

Ang mas naunang pagbabago ay nasa [Ano ang bago sa 0.7](topic:whats-new-0-7).

## Mas maaga: 0.8 at 0.8.1

Ito ang mga nagbago sa PartCraft 0.8 at 0.8.1, kumpara sa 0.7. Sumasagot ang simulation habang nag-e-edit ka at sinasabi kung ano ang unang masisira, nakakakuha ng motion study ang mga assembly, at ang mga bagong workspace ay gumagawa ng freeform surface at part na sinukat mula sa physics. Maliit na fix release ang 0.8.1.

### Bago

**Simulation**

- **Mag-update habang ine-edit ko.** Lagyan ng tick ang {{ui:Mag-update habang ine-edit ko}} sa Solve block at susunod ang mga sagot sa iyong mga pag-edit. Baguhin ang dimension, load o materyal at lumalabas agad ang mabilis na sagot, gawa gamit ang mga elemento na apat na beses na mas malaki; kapag huminto ka nang mga isang segundo, pumapalit dito ang sariling pinong sagot ng study. Sinasabi ng mga resulta kung alin ang tinitingnan mo. Sa steel cantilever, ang mabilis na sagot ay nasa loob ng 1 % sa deflection at mga 4 % sa stress ng pinong sagot. Tingnan ang [Check stress and deflection](topic:simulation#update-while-you-edit-live).
- **Ano ang unang mababasag?** Para sa static o buckling study, ang {{ui:Ano ang unang mababasag?}} sa **Sirain ito** block ay nagsusukat ng mga load hanggang sumuko ang part. Inililista nito, mula sa pinakamasama, ang load factor hanggang first yield (may pulang marker kung saan pumupuntos ang stress) at ang load factor hanggang buckling. Ang factor na mas mababa sa 1 ay nangangahulugang sumusuko na ang part sa karga, at magpapakita ang Problems ng error. Galing sa linear study ang mga factor, kaya kasing-husay lang ito ng study. Tingnan ang [Check stress and deflection](topic:simulation#find-out-what-breaks-first-break-it).
- **Yielding at contact.** Dalawa pang uri ng study: isang nonlinear kung saan sumusunod ang materyal sa tuwid na linya nito hanggang yield stress at pagkatapos ay mas patag na slope, na may nakaplot na plastic strain; at isang contact kung saan nagtutulak sa isa't isa ang magkakahiwalay na piraso (walang friction) o nananatiling nakadikit (bonded). Ang load step na hindi makapagpatatag, o mga piraso na lumulubog nang sobra sa isa't isa, ay nakikita sa Problems panel. Hindi nalulutas ang friction, malaking pag-slide, malalaking pag-ikot, malalaking deflection at fatigue. Tingnan ang [Check stress and deflection](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Deck para sa CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} ay nagsasave ng study para sa CalculiX, hiwalay na program na ini-install at pinapatakbo mo mismo; {{ui:Export}} › {{ui:CalculiX results (.frd)}} ay bumabasa ng result file nito pabalik sa parehong mesh. Hindi kailanman sinisimulan ng PartCraft ang program na iyon, at sinasabi nito kung nagbago ang part mula nang i-save ang deck.

**Mga assembly**

- **Motion study.** {{ui:Assembly}} › {{ui:Motion}} ay nagpapatakbo ng value ng isang joint sa oras na ibinigay mo (pare-parehong bilis, eased, sine, o palabas at pabalik), inilalagay ang assembly sa bawat hakbang kasama ang mga joint at closed loop nito, at iniuulat kung ano ang nagbabanggaan at gaano kalapit ang mga part. Ipinapakita ng {{ui:Magdagdag ng punto}} ang posisyon, bilis at acceleration ng isang punto, ang value ng joint at ang clearance laban sa oras; isinusulat ito ng {{ui:I-save ang CSV}} at {{ui:I-save ang plot}}. Pagkatapos ng {{ui:I-run}}, inililipat ng Step through sa run bar ang assembly sa anumang hakbang. Nakasave sa assembly file ang mga setting ng study. Nagmumula sa mga naitalang posisyon ang bilis at acceleration, kaya gumamit ng mas maraming hakbang kung mababa ang basa ng matalas na peak. Tingnan ang [Check an assembly for clashes and motion](topic:check-assembly#a-motion-study).

**Mga surface at part mula sa physics**

- **Isang Surfaces workspace.** Piliin ang {{ui:Mga surface}} sa kahon ng {{ui:Workspace}} para sa NURBS curve at surface sa tabi ng part: {{ui:Kurba}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} at {{ui:Zebra}}, may continuity (G0, G1 o G2) na sinusukat sa mga eksaktong surface, at ang edge na mas masama kaysa hiniling mo ay nakalista sa Problems na may Match fix. Sinusukat ng {{ui:Fair}} ang hull line para sa mga inflection at curvature jump, at muling binubuo ang mga hindi maayos sa loob ng tolerance mo. Nakasave sa part file ang mga surface at hindi nito binabago ang mga feature ng part. Tingnan ang [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **Ang Engineer workspace.** Piliin ang {{ui:Engineer}} sa workspace switcher, pumili ng generator at i-click ang {{ui:Bago}}: isang script ang nagsusukat ng part mula sa dapat nitong gawin (init para ilipat, daloy, presyon, materyal, proseso ng pag-print) gamit ang mga textbook formula at binubuo ito, pagkatapos ibinabalik ang mga numerong ginamit nito kasama ang mga pinagmulan nito, ang mga manufacturing check nito, at mga file para sa analysis tool. Parehong input ang nagbibigay ng parehong part sa anumang computer. Nakatago ang generator sa part, at hindi kailanman tumatakbo ang script kapag binubuksan ang part. Tingnan ang [Parts from physics: generators](topic:engineer-generators) at [Write a generator](topic:write-a-generator).

**Sketch, drawing at paggawa**

- **Sketch mula sa larawan.** {{ui:Features}} › {{ui:Higit pa}} › {{ui:Sketch mula sa larawan…}} ay gumuguhit ng larawan ng flat part sa plain na ground (outline at butas) o pen drawing bilang mga linya, arc at bilog. Maglagay ng isang haba, suriin ang preview at gawin ang sketch. Tingnan ang [Sketching basics](topic:sketch-basics#a-sketch-from-a-photo).
- **Scale at split para sa printing.** {{ui:Export}} › {{ui:Scale for printing (STL o 3MF)…}} ay nagsa-scale kada axis nang hindi binabago ang part, halimbawa para sa shrinkage allowance. {{ui:Export}} › {{ui:Split for printing (zip ng mga piraso)…}} ay pumuputol ng part na masyadong malaki para sa bed mo sa mga numerong piraso na pinagdudugtong ng peg, key, dovetail, dowel hole o magnet pocket. Tingnan ang [Print in 3D](topic:print-3d).
- **Nested sheets sa G-code.** {{ui:Export}} › {{ui:Nested sheets sa G-code}} ay bumabasa ng nested na DXF at gumagawa ng isang program bawat sheet sa pamamagitan ng post na pipiliin mo: unang ginagawa ang mga butas at cut-out, pagkatapos ang outline. Hindi nito pinaplano ang lead-in, ang pagkakasunod ng pagputol o ang mga shared edge. Tingnan ang [Nest flat parts on sheets](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Mga drawing na mas marami nang ginagawa mismo.** {{ui:Sheet}} › {{ui:Awtomatiko}} ay pumipili ng pinakamaliit na A-size na sheet na kasya ang mga view sa pinakamalaking standard scale hanggang 1:1. Ang {{ui:I-dimension ang mga butas}} ay naglalagay ng center mark sa bawat butas, isang callout bawat laki, at mga posisyon mula sa lower-left corner ng view. Tingnan ang [Make a drawing](topic:drawing-pdf).

**Sa bawat app**

- **Mga wika.** Ang mga app ay may 54 na wika. Ang mga hindi Ingles ay machine draft hanggang basahin ng katutubong nagsasalita.
- **Mga row ng toolbar.** Ang {{ui:Mga setting}} › {{ui:Pangkalahatan}} › {{ui:Mga row ng toolbar}} ay pumipili ng Wrap (gaya ng dati), 2 row o 1 row; ang bar na hindi kasya ay nagsa-scroll sa gilid. Ang Feature ribbon ng PartCraft ay nagpapakita ng pinakaginagamit na tool nang malaki at itinatago ang mga variant sa likod ng split button.
- **Ikonekta ang iyong AI.** Ang Studio ang hub para ikonekta ang sarili mong assistant sa lahat ng walong app, may read only, suggest o edit na permission bawat app. Ang nakakonektang assistant ay kayang sukatin ang part mula sa isang pangungusap, gaya ng bracket para sa isang load, ipakita ang gawa nito at bawat check, at buuin ito; sinasabi nito kung ano ang hindi nito nasuri (stress concentration, fatigue, creep sa plastic). Tingnan ang [Gamitin ang PartCraft kasama ang AI assistant](topic:use-with-ai-assistants).

### Naayos sa 0.8.1

- **Pag-freeze ng cursor sa full screen.** Naka-throttle na ngayon ang hover pick. Ang dahilan ay ang pinakamahusay naming basa at hindi ito nakumpirma sa taong nag-ulat.
- **Wika habang tumatakbo.** Puwedeng magpalit ng wika ang Studio at ang mga packed edition habang tumatakbo; dati Ingles lang. Hindi pa ito nasusubok sa lahat ng platform: sabihan kami kung hindi nagbabago ang wika.

### Hindi pa nasa bersyong ito

- Hindi pa tapos ang Ikonekta ang iyong AI: hindi pa ipinangangako ang one-click connect sa loob ng Studio, ang hosted connector para sa browser AI, ang sarili mong API key sa loob ng Studio, at ang nai-publish na MCP package. Walang sariling AI ang Studio.
- Hindi naka-code-sign ang Studio: maaaring magbabala ang Windows, at humihingi ang macOS ng right-click pagkatapos Open. Tingnan ang [Troubleshooting](topic:troubleshooting).
- Isang direksyon pa rin ang mga stack-up: tingnan ang [Tolerance stack-ups](topic:tolerance-stackup).
- Nakalista pa sa [Ano ang hindi pa nabubuo](topic:not-built-yet) ang iba.

Ang mas naunang pagbabago ay nasa [Ano ang bago sa 0.7](topic:whats-new-0-7).
