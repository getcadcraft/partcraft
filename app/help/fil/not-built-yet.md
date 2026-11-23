---
title: Ano ang hindi pa nagagawa
summary: Lahat ng hindi pa nagagawa ng build na ito ng PartCraft, mula sa twisting sweep hanggang inch display, drawing dimensions at sub-assembly, kasama ang dapat gawin sa halip sa ngayon.
keywords: nawawala, hindi pa, limitasyon, limitations, roadmap, exact kernel, fillet, chamfer, shell, sweep, loft, step import, simulation, manufacture, twist sweep, loft end tangency, face fillet, equations, inch, drawing dimensions, sub-assembly, cloud, tablet, phone
from: 97b10a29
---

Maagang build ang PartCraft. Nakalista rito kung ano ang hindi pa nito ginagawa, para hindi mo na ito hanapin, at kung ano ang dapat gawin sa halip sa ngayon. Walang petsa ang alinman dito.

## Nangangailangan ng exact kernel

Gumagawa ang bersyong ito ng bawat piyesa gamit ang mesh kernel (tingnan ang [The mesh kernel](topic:solid-kernels)). Ang lahat ng nasa ibaba ay nangangailangan ng exact geometry kernel, na wala pa sa bersyong ito. Nabubuksan pa rin ang mga piyesang na-save na may mga feature na ito: nananatili ang mga feature sa history, minarkahang hindi pa nagagawa, at pinananatili kapag nag-save ka.

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| {{ui:Fillet}} at {{ui:Chamfer}} sa bilog na edge; mga fillet na nagbabago ang radius sa kahabaan ng edge; mga bilog na pinagsasama nang maayos kung saan sila nagtatagpo (pinuputol ng mesh kernel ang mga ito nang pahilis) | Gumagana ang Fillet at Chamfer sa tuwid na edge sa pagitan ng patag na face; i-round ang iba pang sulok sa sketch bago mag-extrude ({{ui:Fillet}} sa sketch, {{key:F}}) |
| {{ui:Shell}} na nagbubukas ng curved na face; mga pader na magkakaiba ang kapal | Buksan ang mga patag na face; magdagdag ng materyal gamit ang extrude kung saan dapat mas makapal ang pader |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} sa curved na face; extrude hanggang sa isang face, sa susunod na face o sa isang vertex; tapered na extrude | Mag-extrude o mag-revolve, sa mga hakbang kung kailangan; mag-extrude hanggang sa lalim na sinukat mo |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} at mga flat pattern | I-extrude ang plato o ang profile ng rib |
| Surfaces: pagtatapos ng {{ui:Form}} sa piyesa, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Hindi available |
| Maraming body: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, mga feature na gumagawa ng bagong body | Isang solid; ang mga pattern at mirror ay kumokopya ng feature |
| Mga sketch, plane, axis at point sa mga face na tanging exact kernel ang makakahanap (face na gawa ng fillet, pader ng butas, face ng na-import na solid) | Mag-sketch sa base plane, reference plane at patag na face ng extrude at revolve |
| Resulta ng generative design na binuksan bilang piyesa o idinagdag dito (nagiging na-import na solid ito) | I-download ang resulta bilang STL o STEP |
| Pag-e-edit ng curved na face ng binuksang STEP file bilang eksaktong surface; eksaktong STEP ng spline, swept at revolved na face mula sa STEP file, spline na gilid, modeled na thread, STL / OBJ / 3MF na body at assembly; STEP para sa ibang part modeler | {{ui:Open}} ay bumabasa ng STEP bilang triangle at pinananatili ang patag na face, silindro, cone, sphere at torus ng file para sa export ([Open a STEP file](topic:import-step)); ang {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ay nagsusulat ng bawat analytic na face nang eksakto at pinananatili ang mga iyon bilang facet ([Export](topic:export-files#for-other-cad-programs-step)); nagsusulat pa rin ang macro para sa ibang part modeler |
| Totoong arko sa drawing view | Iginuguhit ang mga view at section view mula sa facet |
| Eksaktong volume, lawak at distansya | {{ui:Measure}} ay nagbibigay ng numero ng faceted solid, bahagyang mas mababa sa mga bilog na piyesa; mas pinong setting na **Curves** ang nagpapalapit dito |

May ilang hilera sa mga table sa ibaba na nagmumungkahi ng isa sa mga feature na ito bilang paraan para sa iba. Naaangkop ang mga mungkahing iyon kapag bumalik na ang exact kernel.

## Features

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Face fillet, full-round fillet, mga fillet na may radius na itinakda sa mga punto sa kahabaan ng edge | Constant o linear na variable na {{ui:Fillet}}; maraming feature ng fillet |
| Mga shell na may magkakaibang kapal ng pader | Isang kapal ng {{ui:Shell}}; magdagdag ng materyal gamit ang extrude kung dapat mas makapal ang pader |
| Draft sa freeform (spline) na face | Gumagana ang {{ui:Draft}} sa patag, silindro at cone na face |
| Twisting na sweep, thin-wall at surface na sweep; end tangency sa feature na Loft; loft na may isang guide rail; spline na path | {{ui:Sweep}} na may nakapirmeng oryentasyon o end scale; loft na may dalawa o higit pang guide rail: tingnan ang [Sweep, loft and draft](topic:sweep-loft-draft) |
| Rib mula sa arko o spline; rib na pinalaki nang parisukat sa sketch (mula sa top view); draft sa rib; maraming rib mula sa isang sketch | {{ui:Rib}} mula sa isang chain ng linya sa sarili nitong plane ng rib: tingnan ang [Ribs and gussets](topic:rib) |
| "Up to" sa curved na surface, "up to next" na humihinto sa curved na face | Up to sa patag na face o sa reference plane |
| Counterdrilled na butas, inch at pipe na thread, tapered na thread, thread run-out at chamfered na thread start | Counterbore na may maliit na lalim; ISO metric at trapezoidal na thread, cosmetic o modeled: tingnan ang [Threads on shafts and bores, drawn or modelled](topic:threads) |
| Thin-feature na extrude | Iguhit ang parehong pader ng profile |
| Mga kopya ng pattern na nilaktawan isa-isa, fill pattern | Gumamit ng hiwalay na feature; mga pattern sa kahabaan ng curve: {{ui:Path pattern}} |
| Pagkokopya ng pattern, mirror, fillet, chamfer, shell at na-import na solid | Kopyahin ang sketch o feature na pinagbatayan nila, o i-pattern ito |
| Eksaktong (G1) tangency sa mga espesyal na punto ng form; pagsasama ng patch ng form sa mas malalaking face | Itaas ang Level ng form: lumiliit ang tinatayang patch; tingnan ang [Freeform shapes with Form](topic:form-surfaces) |
| Form na binubuo ng ilang hiwalay na sarado na piraso sa isang feature; tulay sa pagitan ng mga form | Isang sarado na piraso bawat feature ng Form; pagdugtungin ang mga ito gamit ang Join |
| Pagpili ng surface body sa view (maliban sa trim at patch point); surface fillet; untrim; G2 patch; Gordon surface na tangent sa curved na kapitbahay (tangent sa plane at patag na face ay nagawa na) | Piliin ang mga ito ayon sa pangalan sa panel ng feature; i-thicken muna, saka i-fillet ang solid |
| Listahan ng body sa history; pag-alis ng nakatagong body sa mga export | Palitan ang pangalan at itago ang mga body sa body list ng part panel; burahin o i-suppress ang feature na gumawa ng body para ito ay maalis |
| Non-uniform na scale na nagpapanatili ng analytic na silindro at cone; non-uniform na scaling ng offset surface | {{ui:Scale body}} ay ginagawang malapit na B-spline ang curved na face (sa loob ng 0.0000004 mm); nananatiling eksakto ang uniform na scale |
| Pagsasama ng surface body; Minkowski sum | {{ui:Stitch}} o {{ui:Thicken}} muna, saka {{ui:Combine}} |
| Pagsusuri ng tolerance: stack-up na lumiliko sa sulok (2D at 3D vector loop), sensitivity na kinukuwenta mula sa geometry, Monte Carlo na may ibang distribution, size tolerance sa sketch dimension, bonus tolerance mula sa kondisyon ng material | {{ui:Stack-up}} sa assembly: isang direksyon, worst case at RSS, tolerance na tina-type, mula sa general tolerance ng title block o mula sa GD&T frame: tingnan ang [Tolerance stack-ups](topic:tolerance-stackup) |
| Nesting: pagkakasunod ng pagputol at lead-in, pagputol ng shared na edge nang isang beses, mga piyesang kailangang magkasama; natitirang roll, stock na ibinabahagi sa mga proyekto | {{ui:Nest flat parts on sheets…}} na may spacing, margin, pag-ikot at grain: tingnan ang [Nest flat parts on sheets](topic:nest-flat-parts); ang natitirang plato ay pinananatili at unang ginagamit: tingnan ang [Keep and reuse offcuts](topic:nest-offcuts); planuhin ang pagputol sa sarili mong software ng cutter |
| Sheet metal: hem, jog, miter at contour flange; flange sa curved na edge o sa mga face ng baluktot na base flange; sketched na bend; corner closure; forming tool; pag-convert ng solid sa sheet metal; ang flat ng baluktot na base flange na may hiwa; bend table | {{ui:Base flange}} (plato o baluktot na profile), {{ui:Edge flange}} sa tuwid na edge ng plato na may bend relief, at ang flat pattern na may K-factor: tingnan ang [Sheet metal](topic:sheet-metal) |
| {{ui:Draft analysis}} sa assembly; paghahanap ng parting line; pagsusuri ng kapal ng pader | {{ui:Draft analysis}} sa piyesa sa Design: tingnan ang [Check draft for moulding and casting](topic:draft-analysis); buksan ang bawat piyesa ng assembly para suriin ito |

## Sketches

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Ellipse, tangent na arko, conic, spline na may itinakdang degree o weight (NURBS) | Spline (cubic), arko at bilog na may Tangent relation |
| Point sa spline (isang relation), curvature (G2) na relation | Ilagay ang sariling point ng spline kung saan ito dapat dumaan |
| Offset na kopya ng spline na sumusunod sa mga susunod na pagbabago; offset ng kadena na may matatalim na sulok ng spline | I-offset ulit pagkatapos ng pagbabago; i-round muna ang sulok |
| Mga kopya ng pattern na nananatiling nakakonekta sa orihinal; pattern sa kahabaan ng curve | I-pattern ulit pagkatapos ng pagbabago |
| Pag-project ng free-form o nakahilig na circular edge, projected geometry na sumusunod sa piyesa | I-project ang tuwid at parallel na circular edge, saka i-dimension |
| Driven (reference) na dimension | Basahin ang laki mula sa panel o sa part facts |
| Collinear na relation | Parallel na may 0 na distansya |
| Pag-paste sa ibang program (system clipboard) | I-export ang DXF, STEP, STL o 3MF |
| Pag-type ng arko, relative o polar na coordinate | I-type ang linya at bilog; gumuhit ng arko gamit ang Arc tool |
| Pagpili ng geometry nang walang pointer | Kailangan ng click o tap |

## Parameters and units

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Configuration na nagbabago ng materyal; CSV design table na nag-o-off ng feature | Ang configuration ay nagtatakda ng parameter at nag-o-on at nag-o-off ng feature: tingnan ang [Configurations and design tables](topic:design-tables); ang `partcraft variants` ay bumubuo ng naka-save na configuration ayon sa pangalan, kasama ang mga naka-off na feature: tingnan ang [Make a variant pack from your configurations](topic:variant-pack) |
| Equation sa mga numero ng sariling panel ng pinakabagong feature (plane, sweep, draft at katulad) | Isulat ang mga ito sa script o gamit ang `partcraft set` ([Scripts and the command line](topic:scripts-and-cli)) |
| Piyesang ipinapakita sa inch | Milimetro ang ipinapakita ng mga laki; i-type ang `2in` sa number box o expression at magiging 50.8 ito |

## Files

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Pag-e-edit ng sariling feature ng na-import na STEP solid (dumarating itong walang history) | Magdagdag o mag-cut ng materyal gamit ang sarili mong feature |
| Pagbasa ng kulay, pangalan, istruktura ng assembly at PMI mula sa STEP | Hindi available |
| Export ng glTF, OBJ, IGES, Parasolid; DWG ng 3D na piyesa (tanging ang variant pack ang nagsusulat ng DWG: ang drawing sheet) | STL o 3MF para sa mesh; STEP para sa solid; DXF para sa 2D |
| Pagbubukas ng IGES, DXF o sariling file ng ibang program (ang mga `.3dm` na file ay bumubukas bilang isang body: [Open a .3dm model as a solid body](topic:open-3dm-files)) | Humingi ng STEP, o isang sarado na STL, OBJ o 3MF mesh: [Open an STL, OBJ or 3MF](topic:open-meshes) |
| Istruktura ng assembly (tree na may pangalan ng piyesa) sa na-export na STEP | Ang assembly STEP ay isang compound ng mga nakalagay na solid |
| Pag-save sa folder na pipiliin mo nang hindi dumadaan sa download ng browser | I-on ang "ask where to save" sa download settings ng browser |

## Drawings

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Mga dimension na lampas sa tatlong pangkalahatang laki (laki ng butas, posisyon, tolerance sa mga laki) | I-markup ang PDF, o i-export ang DXF at i-dimension ito sa 2D CAD program |
| Higit sa isang section o detail; aligned, broken-out at auxiliary na view | Isang section at isang detail bawat drawing |
| Malayang teksto, note at table sa sheet (maliban sa title at revision block) | Ang finish note, o teksto na idinagdag sa PDF |
| First-angle projection, gumagalaw na view, portrait na sheet | Third angle, automatic layout, landscape na sheet A4–A0 at ANSI A–E |
| Live section view: maraming plane o section box nang sabay, outline sa paligid ng hiwa, pag-save ng section sa file | Isang plane sa isang pagkakataon mula sa {{ui:Views}} › {{ui:Section view}}; tingnan ang [Look inside with a section view](topic:section-view) |
| Assembly drawing na may higit pang view, dimension o balloon na maaari mong ilipat | Isang isometric (o exploded) na view na may automatic na balloon at parts list |
| Pagkopya at pag-paste ng GD&T at finish symbol | Ilagay ang bawat isa gamit ang Datum, Frame o Finish |
| Manual: mga STEP file sa {{ui:From another file…}} ng Illustrate, model na direktang galing sa ModelCraft o BimCraft, larawan sa kalidad ng path tracer, interactive na 3D sa loob ng PDF | Buksan ang STEP sa Design at simulan ang manual gamit ang {{ui:From the open part}}; i-save ang model bilang glTF (.glb); PNG na larawan ng 3D view; ang interactive na 3D file: tingnan ang [Start a manual in Illustrate](topic:illustrate) |

## Assemblies

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Gear, rack, cam at screw joint; ball joint na limitado sa cone; joint sa curved na face o sa pagitan ng mga point | Rigid, revolute, slider, cylindrical, planar, ball at pin-in-slot na joint sa patag na face, bawat halaga ay may sariling limit: tingnan ang [Build an assembly](topic:build-assembly) |
| Exploded na hakbang na umiikot sa piyesa, at pag-drag ng piyesang inilagay ng joint | Tuwid na explode step; alisin ang joint para igalaw ang piyesa nang kamay |
| Sub-assembly | Isang antas lamang ng piyesa |
| Gear, cam, contact | Hindi available |

## Manufacture

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| 3D adaptive clearing at offset roughing sa 3D; waterline, pencil, radial at spiral na finishing; adaptive na pass na isinusulat bilang arko | 3D roughing sa tuwid na hanay at rest machining: tingnan ang [3D roughing and rest machining](topic:rough-3d); Parallel at Scallop finishing: tingnan ang [3D finishing](topic:finish-3d); 2.5-axis na face, pocket, 2D adaptive, contour, drill at chamfer: tingnan ang [Make toolpaths and G-code](topic:manufacture) |
| Swarf cutting, flow-line at multi-axis na roughing path, tilted work plane code (G68.2), collision check ng holder at ng makina; simulation ng 5-axis at rotary na pagputol | Nakahilig na tool para sa anumang operation, 5-axis finishing gamit ang ball end mill at 4th-axis rotary finishing: tingnan ang [4- and 5-axis machining](topic:multi-axis) |
| Boring at inside thread sa lathe, G71/G76 cycle, arko sa turning path, live tool, sub-spindle | Outside turning: face, rough, finish, groove, part off, thread, drill on centre: tingnan ang [Turning on a lathe](topic:turning) |
| Pag-probe sa anggulo o sulok, tool setter, pagsukat ng laki laban sa tolerance | Pag-probe sa face, gilid, butas o boss para itakda ang work offset: tingnan ang [Probing](topic:probing) |
| Collision check ng holder at shank | Bantayan ang mga babala sa flute length at suriin sa simulator ng control mo |
| Tool-life at subprogram cycle sa post; pag-load ng post file ng ibang program | Sumulat o magbago ng post sa sariling format ng PartCraft: tingnan ang [Post processors you can edit](topic:post-processors) |
| Inch G-code (G20) | Milimetro (G21) lamang |

## Simulation and generative design

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Nonlinear na study: yielding, malalaking deflection, contact sa pagitan ng mga piyesa, fatigue | Linear static at natural frequencies: tingnan ang [Check stress and deflection](topic:simulation); panatilihing mas mataas sa 1 ang safety factor |
| Nonlinear na buckling (imperfection, post-buckling, snap-through) | Linear buckling load factor na may malawak na margin: tingnan ang [Heat, thermal stress and buckling](topic:thermal-and-buckling) |
| Radiation sa pagitan ng mga face (view factor), contact resistance, materyal na nakadepende sa temperatura, inertia sa thermal stress (thermal shock wave) | Radiation sa paligid, steady o quasi-static na thermal stress sa paglipas ng panahon, pare-parehong property: tingnan ang [Heat, thermal stress and buckling](topic:thermal-and-buckling) |
| Awtomatikong refinement para sa transient heat at mga study na may thermal load; pagpapalaki ng mesh kung saan maliit ang error; target sa lokal na dami (ang peak stress sa isang lugar) | **Refine automatically** para sa static, buckling, natural-frequency at steady thermal na study, sa error ng buong piyesa: tingnan ang [Check stress and deflection](topic:simulation); kung hindi, bawasan ang element size |
| Bearing at bolt load, remote force, moment, spring, prescribed displacement | Force at pressure sa mga face, gravity; nakapirme at walang friction na mga face |
| Simulation ng assembly; materyal na nagkakaiba ayon sa direksyon (printed layer, composite) | Isang piyesa, isang isotropic na materyal |
| Maraming solver thread para sa tetrahedral na study, heat transfer at generative design; anumang thread sa pahinang hindi cross-origin isolated | Ang voxel study, buckling, stress sa paglipas ng panahon at laminar flow ay gumagamit ng mga thread kung pinapayagan ng pahina: tingnan ang [PartCraft settings](topic:settings) |
| Turbulent flow na may katumpakan para sa disenyo (nasa experimental ang modelong Spalart–Allmaras: 30 hanggang 34 % mas mataas ang pipe friction, 21 hanggang 39 % mas maikli ang backward-step reattachment; plano: mas pinong cell malapit sa mga pader), heat sa flow, unsteady (time-accurate) na flow, free surface, non-Newtonian na fluid, umiikot na piyesa | Laminar, steady, isothermal na flow ng Newtonian na fluid, o ang experimental na turbulent model para sa qualitative na pattern: tingnan ang [Simulate fluid flow](topic:flow-simulation); nagbababala ang panel kapag lampas na sa laminar ang Reynolds number |
| Stress limit at manufacturing rule (overhang, direksyon ng milling) sa generative design; maraming materyal sa isang hugis | Pinakamatigas na hugis para sa isang volume; suriin ang resulta sa Simulation: tingnan ang [Grow a shape from loads](topic:generative-design) |
| Resulta bilang solid na maaaring i-edit (makinis, parametric) | STL, faceted na STEP, o piyesang may resulta bilang na-import na faceted solid |
| Disenyo ng electric machine: rotor na umiikot sa stator, torque laban sa anggulo, saturating na bakal, magnet na nawawalan ng lakas lampas sa knee, eddy current at iron at copper loss; magnetic field sa 3-D o sa curved na mesh | Linear na 2-D magnetostatics sa grid sa analysis library: coil, bakal, permanent magnet sa recoil line nito, gap, inductance at pull: tingnan ang [Magnetic fields in 2-D](topic:magnetic-fields-2d) |

## Scripts

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Hover help, breakpoint at stepping sa script editor | Naroon na ang find, fold at complete (tingnan ang [Write and run scripts](topic:craftscript)); para sa iba, sarili mong editor: ang {{ui:Save}} at {{ui:Open}} sa Script group ang naglilipat ng script papasok at palabas; nakalista ang mga built-in na function sa [The CraftScript language](topic:craftscript-language) |
| Breakpoint at stepping sa script | `disp` at `fprintf` habang dumadaan; pinapatakbo ng {{key:Mod+Enter}} ang ilang piling linya nang sabay-sabay |
| Field at plot na ipinapakita ng script na iginuhit sa Design workspace; script na nagbabago ng parameter ng piyesa | Lumalabas ang mga ito sa Script workspace; binabasa ng script ang parameter gamit ang `param` (tingnan ang [Write and run scripts](topic:craftscript)), binabago ang mga ito sa {{ui:Parameters}} tab |
| Larawan at table na katabi ng mga plot; pag-e-edit ng plot (zoom, axis limit) bago ito i-save | Side by side ang pagpapakita ng mga plot; i-save ang plot bilang PNG, SVG o CSV at tapusin ito sa ibang lugar |
| numpy at iba pang Python package; Python offline; pag-fold ng Python sa editor; Pascal Script | Standard library ng Python, CraftScript at Lua: tingnan ang [Scripts in Python](topic:craftscript-python) |
| Pagpasa ng Lua function sa built-in function; pagtawag ng library function mula sa Lua gamit ang pangalang nabuo habang tumatakbo ang script | Isulat ang pangalan ng library function sa script (`cs.static_tet(…)`), o tawagin ito mula sa CraftScript script |

## The app

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Cloud saving, pagbabahagi at version history | Hindi pa available. I-save ang mga file sa computer mo at panatilihin ang mga bersyon ayon sa pangalan |
| PartCraft bilang naka-install na app sa iPad at iPhone | Gamitin ang PartCraft sa browser ng device; sa Android at desktop, tumatakbo rin ito sa CadCraft Studio (getcadcraft.com/download) |
| Context (right-click) na menu | Toolbar at kanang panel |
| Ganap na offline mula sa simula | Sa mga app lamang na na-save para sa offline na paggamit: tingnan ang [Working offline](common:offline) |

I-report sa support page ng site ang pinakakailangan mo: hinuhubog nito ang susunod.

## Engineer (generator at field)

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Header, port at fitting sa nabuong heat exchanger; temperature curve para sa lakas ng materyal; tee loss sa manifold | Binubuo ng generator ang core at ang mga tubo; magdagdag ng fitting sa Design; gamitin ang room-temperature na datos ng materyal na may safety factor |
| Pagdaragdag ng generator mula sa add-on directory sa isang click | {{ui:Open}} sa Engineer workspace ay nagdaragdag ng generator mula sa file |
| Field file na mas pino kaysa sa sariling voxel size ng generator; pagbasa ng `.vdb` file | I-save ang mas pinong field mula sa script; isinusulat ang `.vdb`, hindi binabasa |
| Pressure-vessel code calculation | Ang textbook na thin-wall at thick-wall formula, kasama ang safety factor na pipiliin mo; hindi ito code margin |
| Generator para sa ibang app | PartCraft lamang sa bersyong ito |
