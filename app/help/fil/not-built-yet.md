---
title: Ano ang hindi pa nagagawa
summary: Lahat ng hindi pa ginagawa ng build na ito ng PartCraft, mula sa twisting sweeps hanggang inch display, drawing dimensions at sub-assemblies, kasama kung ano ang gagawin sa ngayon.
keywords: kulang, hindi pa, limitasyon, limitations, roadmap, exact kernel, fillet, chamfer, shell, sweep, loft, step import, simulation, manufacture, twist sweep, loft end tangency, face fillet, equations, inches, drawing dimensions, sub-assemblies, cloud, tablet, telepono
from: 9b868162
---

Maagang build ang PartCraft. Nakalista rito ang mga hindi pa nito ginagawa, para hindi mo na hanapin ang mga ito, at kung ano ang gagawin sa ngayon. Walang nakatakdang petsa ang alinman dito.

## Kailangan ng exact kernel

Ginagawa ng bersyong ito ang bawat part gamit ang mesh kernel (tingnan ang [Ang mesh kernel](topic:solid-kernels)). Ang lahat sa ibaba ay nangangailangan ng exact geometry kernel, na wala pa sa bersyong ito. Bukas pa rin ang mga part na naka-save na may ganitong feature: nananatili ang mga feature sa history, minarkahang hindi pa nagagawa, at pinananatili kapag na-save.

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| {{ui:Fillet}} at {{ui:Chamfer}} sa mga bilog na edge; fillet na nagbabago ang radius sa kahabaan ng edge; mga bilog na maayos na pinagsasama kung saan sila nagtatagpo (pinuputol ito ng mesh kernel nang pahilis) | Gumagana ang Fillet at Chamfer sa mga tuwid na edge sa pagitan ng flat na face; bilugan ang ibang sulok sa sketch bago i-extrude ({{ui:Fillet}} sa sketch, {{key:F}}) |
| {{ui:Shell}} na nagbubukas ng curved na face; mga pader na magkakaiba ang kapal | Buksan ang flat na face; magdagdag ng materyal gamit ang extrudes kung kailangang mas makapal ang pader |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} sa curved na face; pag-extrude hanggang sa face, sa susunod na face o sa vertex; tapered extrudes | Mag-extrude o mag-revolve, sa mga hakbang kung kailangan; mag-extrude sa lalim na sinukat mo |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} at flat patterns | I-extrude ang plate o ang profile ng rib |
| Surfaces: pagtatapos ng {{ui:Form}} sa part, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Hindi available |
| Maraming body: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, mga feature na gumagawa ng bagong body | Isang solid; ang patterns at mirror ay mga feature ng kopya |
| Mga sketch, plane, axis at point sa mga face na tanging exact kernel lang ang makakahanap (face na gawa ng fillet, pader ng butas, face ng na-import na solid) | Mag-sketch sa base planes, reference planes at flat na face ng extrudes at revolves |
| Resulta ng generative design na binuksan bilang part o idinagdag dito (nagiging imported solid) | I-download ang resulta bilang STL o STEP |
| Pag-edit sa curved na face ng binuksang STEP file bilang exact surfaces; exact STEP ng spline, swept at revolved na face mula sa STEP file, spline sides, modelled threads, STL / OBJ / 3MF bodies at assemblies; STEP para sa ibang part modeler | {{ui:Buksan}} ay nagbabasa ng STEP bilang mga tatsulok at pinapanatili ang flat na face, cylinder, cone, sphere at torus ng file para sa export ([Buksan ang STEP file](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ay nagsusulat ng bawat analytic na face nang eksakto at pinapanatili ang mga iyon bilang facets ([Export](topic:export-files#for-other-cad-programs-step)); ang macro para sa ibang part modeler ay nagsusulat pa rin |
| Tunay na arko sa drawing views | Ang views at section views ay iginuguhit mula sa facets |
| Exact na volume, area at distansya | {{ui:Measure}} ay nagbibigay ng numero ng faceted solid, bahagyang mas mababa sa mga round na part; ang mas pinong setting na **Curves** ay nagpapalapit dito |

Ang ilang hilera sa mga talahanayan sa ibaba ay nagmumungkahi ng isa sa mga feature na ito bilang paraan sa ibang bagay. Nalalapat ang mga mungkahing iyon kapag bumalik na ang exact kernel.

## Mga feature

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Face fillets, full-round fillets, fillets na may radius na itinakda sa mga punto sa kahabaan ng edge | Constant o linear na variable na {{ui:Fillet}}; ilang fillet feature |
| Shells na may magkakaibang kapal ng pader | Isang kapal ng {{ui:Shell}}; magdagdag ng materyal gamit ang extrudes kung kailangang mas makapal ang pader |
| Draft sa freeform (spline) na face | Gumagana ang {{ui:Draft}} sa flat, cylindrical at conical na face |
| Twisting sweeps, thin-wall at surface sweeps; end tangency sa Loft feature; loft na may isang guide rail; spline paths | {{ui:Sweep}} na may nakapirming oryentasyon o end scale; loft na may dalawa o higit pang guide rail: tingnan ang [Sweep, loft at draft](topic:sweep-loft-draft) |
| Ribs mula sa arko o spline; ribs na pinalaki nang parisukat sa sketch (mula sa top view); draft sa ribs; ilang ribs mula sa isang sketch | {{ui:Rib}} mula sa isang kadena ng linya sa sariling plane ng rib: tingnan ang [Mga rib at gusset](topic:rib) |
| "Up to" sa curved na surface, "up to next" na humihinto sa curved na face | Up to sa flat na face o reference plane |
| Counterdrilled na butas, inch at pipe threads, tapered threads, thread run-outs at chamfered na thread start | Counterbore na maliit ang lalim; ISO metric at trapezoidal threads, cosmetic o modelled: tingnan ang [Mga thread sa shaft at bore, iginuhit o minodelo](topic:threads) |
| Thin-feature na extrudes | Iguhit ang dalawang pader ng profile |
| Mga pattern copy na nilaktawan isa-isa; fill patterns | Gumamit ng hiwalay na feature; pattern sa kahabaan ng curve: {{ui:Path pattern}} |
| Pagkopya ng patterns, mirrors, fillets, chamfers, shells at imported solids | Kopyahin ang sketch o feature na pinagbatayan nila, o i-pattern ito |
| Exact (G1) tangency sa mga espesyal na punto ng form; pagsasama ng patches ng form sa mas malalaking face | Itaas ang Level ng form: lumiliit ang mga tinatayang patch; tingnan ang [Mga freeform na hugis gamit ang Form](topic:form-surfaces) |
| Isang form na binubuo ng ilang hiwalay na saradong piraso sa iisang feature; tulay sa pagitan ng mga form | Isang saradong piraso bawat Form feature; pagsamahin ang mga ito gamit ang Join |
| Pagpili ng surface bodies sa view (maliban sa trim at patch points); surface fillets; untrim; G2 patches; Gordon surfaces na tangent sa curved na kapitbahay (tangent sa planes at flat na face ay nagagawa) | Piliin sila ayon sa pangalan sa panel ng feature; i-thicken muna, saka i-fillet ang solid |
| Listahan ng body sa history; pag-alis ng nakatagong body sa mga export | I-rename at itago ang mga body sa body list ng part panel; burahin o i-suppress ang feature na gumawa ng body para hindi ito isama |
| Non-uniform na scale na nagpapanatiling analytic ang cylinder at cone; non-uniform na scaling ng offset surfaces | {{ui:Scale body}} ay ginagawang malapit na B-spline ang curved na face (sa loob ng 0.0000004 mm); nananatiling exact ang uniform na scale |
| Pagsasama ng surface bodies; Minkowski sums | {{ui:Stitch}} o {{ui:Thicken}} muna, saka {{ui:Combine}} |
| Tolerance analysis: stack-ups na lumiliko sa sulok (2D at 3D vector loops), sensitivities na kinuwenta mula sa geometry, Monte Carlo na may ibang distribution, size tolerances sa sketch dimensions, bonus tolerance mula sa material condition | {{ui:Stack-up}} sa assembly: isang direksyon, worst case at RSS, mga tolerance na tinype, mula sa general tolerance ng title block o mula sa GD&T frames: tingnan ang [Mga tolerance stack-up](topic:tolerance-stackup) |
| Nesting: pagkakasunod ng pagputol at lead-ins, pagputol ng magkakabahaging edge nang isang beses, mga piyesang dapat magkasama; mga remnant ng roll, stock na ibinabahagi sa mga proyekto | {{ui:Ilatag ang flat na parts sa sheets…}} na may espasyo, margin, turns at grain: tingnan ang [Ilatag ang flat na piyesa sa mga sheet](topic:nest-flat-parts); ang natitirang plate ay itinatago at unang ginagamit: tingnan ang [Itago at gamitin muli ang offcuts](topic:nest-offcuts); planuhin ang putol sa sariling software ng iyong cutter |
| Sheet metal: hems, jogs, miter at contour flanges; flanges sa curved na edge o sa face ng nakayukong base flange; sketched na bends; corner closures; forming tools; pag-convert ng solid sa sheet metal; ang flat ng nakayukong base flange na may hiwa; bend tables | {{ui:Base flange}} (isang plate o nakayukong profile), {{ui:Edge flange}} sa tuwid na edge ng plate na may bend reliefs, at ang flat pattern na may K-factor: tingnan ang [Sheet metal](topic:sheet-metal) |
| Draft analysis sa assemblies; paghanap ng parting line; wall-thickness analysis | {{ui:Draft analysis}} sa part sa Design: tingnan ang [Suriin ang draft para sa molding at casting](topic:draft-analysis); buksan ang bawat part ng assembly para suriin ito |

## Mga sketch

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Ellipses, tangent arcs, conics, splines na may itinakdang degree o weights (NURBS) | Splines (cubic), arko at bilog na may Tangent relations |
| Punto sa spline (isang relation), curvature (G2) relations | Ilagay ang sariling punto ng spline kung saan ito dapat dumaan |
| Offset copies ng splines na sumusunod sa mga susunod na pagbabago; offsets ng chains na may matutulis na spline corner | I-offset muli pagkatapos ng pagbabago; bilugan muna ang sulok |
| Pattern copies na nananatiling naka-link sa orihinal; patterns sa kahabaan ng curve | I-pattern muli pagkatapos ng pagbabago |
| Pag-project ng free-form o nakatagilid na circular edges; projected geometry na sumusunod sa part | I-project ang tuwid at parallel na circular edges, saka lagyan ng dimension |
| Driven (reference) dimensions | Basahin ang sukat mula sa panel o sa impormasyon ng part |
| Collinear relations | Parallel na may distansyang 0 |
| Pag-paste sa ibang programa (system clipboard) | I-export ang DXF, STEP, STL o 3MF |
| Pag-type ng arko, relative o polar na coordinates | I-type ang linya at bilog; iguhit ang arko gamit ang Arc tool |
| Pagpili ng geometry nang walang pointer | Kailangan ng click o tap |

## Mga parameter at unit

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Configurations na nagpapalit ng materyal; CSV design table na nagpapatay ng features | Itinatakda ng configurations ang parameters at binubuksan at pinapatay ang features: tingnan ang [Configurations at design tables](topic:design-tables); binubuo ng `partcraft variants` ang mga naka-save na configuration ayon sa pangalan, kasama ang mga naka-off na feature: tingnan ang [Gumawa ng variant pack mula sa mga configuration mo](topic:variant-pack) |
| Equations sa mga numero ng sariling panel ng pinakabagong feature (plane, sweep, draft at katulad) | Isulat ang mga ito sa script o gamit ang `partcraft set` ([Mga script at command line](topic:scripts-and-cli)) |
| Part na ipinapakita sa inches | Ipinapakita ang sukat sa millimeters; i-type ang `2in` sa number box o expression at magiging 50.8 |

## Mga file

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Pag-edit sa sariling feature ng na-import na STEP solid (walang kasamang history) | Magdagdag o maghiwa ng materyal gamit ang sarili mong feature |
| Pagbasa ng kulay, pangalan, istruktura ng assembly at PMI mula sa STEP | Hindi available |
| Export ng glTF, OBJ, IGES, Parasolid; DWG ng 3D part (ang variant pack lang ang nagsusulat ng DWG: ang drawing sheet) | STL o 3MF para sa mesh; STEP para sa solid; DXF para sa 2D |
| Pagbukas ng IGES, DXF o sariling file ng ibang programa (ang `.3dm` files ay nagbubukas bilang isang body: [Buksan ang .3dm model bilang solid body](topic:open-3dm-files)) | Humingi ng STEP, o saradong STL, OBJ o 3MF mesh: [Buksan ang STL, OBJ o 3MF](topic:open-meshes) |
| Istruktura ng assembly (tree na may pangalan ng part) sa na-export na STEP | Ang assembly STEP ay isang compound ng mga nakalagay na solid |
| Pag-save sa folder na pipiliin mo nang walang download ng browser | I-on ang "ask where to save" sa mga setting ng download ng browser |

## Mga drawing

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Dimensions na higit pa sa tatlong pangkalahatang sukat (laki ng butas, posisyon, tolerance sa mga sukat) | I-markup ang PDF, o i-export ang DXF at lagyan ng dimension sa 2D CAD program |
| Higit sa isang section o detail; aligned, broken-out at auxiliary views | Isang section at isang detail bawat drawing |
| Free text, notes at tables sa sheet (maliban sa title at revision blocks) | Ang finish note, o tekstong idinagdag sa PDF |
| First-angle projection, gumagalaw na views, portrait na sheets | Third angle, awtomatikong layout, landscape na sheets A4–A0 at ANSI A–E |
| Live section view: ilang plane o section box nang sabay, outline sa paligid ng putol, pag-save ng section sa file | Isang plane sa bawat pagkakataon mula sa {{ui:Views}} › {{ui:Section view}}; tingnan ang [Tumingin sa loob gamit ang section view](topic:section-view) |
| Assembly drawings na may mas maraming view, dimension o balloon na maaaring ilipat | Isang isometric (o exploded) na view na may awtomatikong balloons at listahan ng mga piyesa |
| Pagkopya at pag-paste ng GD&T at finish symbols | Ilagay ang bawat isa gamit ang Datum, Frame o Finish |
| Mga manual: STEP files sa {{ui:Mula sa ibang file…}} ng Illustrate, model na direktang galing sa ModelCraft o BimCraft, mga larawan sa kalidad ng path tracer, interactive na 3D sa loob ng PDF | Buksan ang STEP sa Design at simulan ang manual mula sa {{ui:Mula sa bukas na piyesa}}; i-save ang model bilang glTF (.glb); mga PNG na larawan ng 3D view; ang interactive na 3D file: tingnan ang [Simulan ang manual sa Illustrate](topic:illustrate) |

## Mga assembly

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Gear, rack, cam at screw joints; ball joint na nakalimita sa cone; joints sa curved na face o sa pagitan ng mga punto | Rigid, revolute, slider, cylindrical, planar, ball at pin-in-slot joints sa flat na face, bawat halaga ay may sariling limit: tingnan ang [Bumuo ng assembly](topic:build-assembly) |
| Exploded steps na umiikot sa mga piyesa, at pag-drag sa mga piyesang inilagay ng joints | Tuwid na explode steps; alisin ang joint para mailipat ang piyesa gamit ang kamay |
| Sub-assemblies | Isang antas lang ng mga piyesa |
| Gears, cams, contact | Hindi available |

## Manufacture

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| 3D roughing ng curved na face, 3D adaptive clearing, rest machining; waterline, pencil, radial at spiral finishing; adaptive passes na isinulat bilang arko | 2.5-axis face, pocket, 2D adaptive, contour, drill at chamfer: tingnan ang [Gumawa ng toolpaths at G-code](topic:manufacture); Parallel at Scallop finishing ng buong model: tingnan ang [3D finishing](topic:finish-3d) |
| 4- at 5-axis toolpaths, turning, probing | I-set up ang isang gilid sa isang pagkakataon, gamit ang tool axis sa Setup tab |
| Pagsusuri sa banggaan ng holder at shank | Bantayan ang mga babala sa flute-length at suriin sa simulator ng iyong control |
| Probing, tool-life at subprogram cycles, 4th- at 5th-axis at lathe codes sa post; pag-load ng post files ng ibang programa | Sumulat o magbago ng post sa sariling format ng PartCraft: tingnan ang [Mga post processor na maaari mong i-edit](topic:post-processors) |
| Inch G-code (G20) | Millimetres (G21) lang |

## Simulation at generative design

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Nonlinear na pag-aaral: yielding, malalaking deflection, contact sa pagitan ng mga piyesa, fatigue | Linear static at natural frequencies: tingnan ang [Suriin ang stress at deflection](topic:simulation); panatilihing mas mataas nang husto sa 1 ang safety factor |
| Nonlinear buckling (imperfections, post-buckling, snap-through) | Linear buckling load factors na may malaking margin: tingnan ang [Init, thermal stress at buckling](topic:thermal-and-buckling) |
| Radiation sa pagitan ng face (view factors), contact resistance, materyal na nakadepende sa temperatura, inertia sa thermal stress (thermal shock waves) | Radiation sa paligid, steady o quasi-static na thermal stress sa paglipas ng panahon, pare-parehong property: tingnan ang [Init, thermal stress at buckling](topic:thermal-and-buckling) |
| Awtomatikong refinement para sa transient heat at mga pag-aaral na may thermal load; pagpapaluwag ng mesh kung saan maliit ang error; target sa lokal na dami (ang peak stress sa iisang punto) | **Refine automatically** para sa static, buckling, natural-frequency at steady thermal na pag-aaral, batay sa error sa buong part: tingnan ang [Suriin ang stress at deflection](topic:simulation); kung hindi, pababain ang element size |
| Bearing at bolt loads, remote forces, moments, springs, prescribed displacements | Mga puwersa at presyon sa mga face, gravity; fixed at frictionless na face |
| Simulation ng assemblies; materyal na nag-iiba ayon sa direksyon (printed layers, composites) | Isang part, isang isotropic na materyal |
| Ilang solver thread para sa tetrahedral na pag-aaral, heat transfer at generative design; anumang thread sa page na hindi cross-origin isolated | Ang voxel studies, buckling, stress sa paglipas ng panahon at laminar flow ay gumagamit ng mga thread kung pinapayagan ng page: tingnan ang [Mga setting ng PartCraft](topic:settings) |
| Turbulent flow na may design accuracy (nasa loob ang modelong Spalart–Allmaras bilang experimental: 30 hanggang 34 % mataas ang pipe friction, 21 hanggang 39 % maikli ang backward-step reattachment; nakaplano: mas pinong cells malapit sa mga pader), heat sa flow, unsteady (time-accurate) flow, free surfaces, non-Newtonian fluids, rotating parts | Laminar, steady, isothermal na flow ng Newtonian fluid, o ang experimental na turbulent model para sa qualitative na pattern: tingnan ang [Simulan ang fluid flow](topic:flow-simulation); nagbababala ang panel kapag lampas na sa laminar ang Reynolds number |
| Stress limits at manufacturing rules (overhangs, milling directions) sa generative design; ilang materyal sa iisang hugis | Pinakamatigas na hugis para sa isang volume; suriin ang resulta sa Simulation: tingnan ang [Palaguin ang hugis mula sa mga load](topic:generative-design) |
| Resulta bilang editable (smooth, parametric) na solid | STL, faceted STEP, o part na may resulta bilang na-import na faceted solid |
| Disenyo ng electric machine: rotor na umiikot sa stator, torque laban sa anggulo, bakal na nagsa-saturate, magnets na nawawalan ng lakas lampas sa knee nito, eddy currents at iron at copper losses; magnetic fields sa 3-D o sa curved na mesh | Linear 2-D magnetostatics sa grid sa analysis library: coils, bakal, permanent magnets sa kanilang recoil line, gaps, inductance at pull: tingnan ang [Magnetic fields sa 2-D](topic:magnetic-fields-2d) |

## Mga script

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Hover help, breakpoints at stepping sa script editor | Nandiyan ang find, fold at complete (tingnan ang [Sumulat at magpatakbo ng script](topic:craftscript)); para sa iba, sa sarili mong editor: {{ui:I-save}} at {{ui:Buksan}} sa Script group ang nagpapalipat ng mga script papasok at palabas; nakalista ang mga built-in function sa [Ang wikang CraftScript](topic:craftscript-language) |
| Breakpoints at stepping sa script | `disp` at `fprintf` habang tumatakbo; pinapatakbo ng {{key:Mod+Enter}} ang ilang napiling linya nang sabay-sabay |
| Mga field at plot na ipinapakita ng script na iginuhit sa Design workspace; script na nagbabago ng parameters ng part | Lumilitaw ang mga ito sa Script workspace; binabasa ng script ang parameters gamit ang `param` (tingnan ang [Sumulat at magpatakbo ng script](topic:craftscript)), binabago ang mga ito sa {{ui:Parameters}} tab |
| Mga larawan at talahanayan sa tabi ng plot; pag-edit ng plot (zoom, axis limits) bago i-save | Side by side ang pagpapakita ng mga plot; i-save ang plot bilang PNG, SVG o CSV at tapusin ito sa ibang lugar |
| numpy at iba pang Python packages; Python offline; pag-fold ng Python sa editor; Pascal Script | Python standard library, CraftScript at Lua: tingnan ang [Mga script sa Python](topic:craftscript-python) |
| Pagpasa ng Lua functions sa built-in functions; pagtawag ng library function mula sa Lua gamit ang pangalang nabuo habang tumatakbo ang script | Isulat ang pangalan ng library function sa script (`cs.static_tet(…)`), o tawagin ito mula sa CraftScript script |

## Ang app

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Cloud saving, pagbabahagi at version history | Hindi pa available. I-save ang mga file sa iyong computer at itago ang mga bersyon ayon sa pangalan |
| PartCraft bilang naka-install na app sa iPad at iPhone | Gamitin ang PartCraft sa browser ng device; sa Android at sa desktop, tumatakbo rin ito sa CadCraft Studio (getcadcraft.com/download) |
| Context (right-click) menus | Toolbar at kanang panel |
| Ganap na offline na pagtatrabaho mula sa bagong simula | Kapag lang na-save ang app para sa offline na gamit: tingnan ang [Pagtatrabaho nang offline](common:offline) |

Ipaalam ang pinakanakakaligtaan mo sa support page ng site: hinuhubog nito ang susunod na gagawin.

## Engineer (mga generator at field)

| Hindi pa nagagawa | Sa halip, sa ngayon |
|---|---|
| Headers, ports at fittings sa nabuong heat exchanger; temperature curves para sa lakas ng materyal; tee losses sa manifold | Ang mga generator ay gumagawa ng core at mga tubo; magdagdag ng fittings sa Design; gamitin ang figures ng materyal sa temperatura ng kuwarto kasama ang safety factor |
| Pagdaragdag ng generators mula sa add-on directory sa isang click | {{ui:Buksan}} sa Engineer workspace ay nagdaragdag ng generator mula sa file |
| Field file na mas pino kaysa sa sariling voxel size ng generator; pagbasa ng `.vdb` files | I-save ang mas pinong field mula sa script; ang `.vdb` ay isinusulat, hindi binabasa |
| Pressure-vessel code calculations | Ang karaniwang thin-wall at thick-wall na formula, kasama ang safety factor na pipiliin mo; hindi ito code margin |
| Generators para sa ibang app | PartCraft lang sa bersyong ito |
