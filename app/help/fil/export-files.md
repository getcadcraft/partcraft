---
title: I-export para sa printing, STEP at DXF
summary: I-export ang piyesa bilang STL o 3MF para sa 3D printing, bilang eksaktong STEP solid para sa iba pang CAD at CAM program, at ang sketch o flat face bilang DXF para sa laser at waterjet cutting.
keywords: i-export, i-save bilang, ifc, bim, property sets, stl, 3mf, 3d print, slicer, step, stp, exact step, b-rep, ap242, ap214, cam, machine shop, milling, dxf, laser, waterjet, cnc, flat pattern, profile, mesh, faceted
from: e1de71d5
---

Ang mga export ay mga kopya sa ibang format. Itago rin ang file na `.partcraft.json`: ito lang ang file na mabubuksan ulit at maeedit ng PartCraft.

Lahat ng export ay gumagana sa piyesang nasa screen, sa millimeters. Sa isang assembly, ang STL, 3MF, STEP at Drawing (PDF) ay nag-e-export ng buong assembly: tingnan ang [Parts list, exploded views and moving parts](topic:assembly-bom-explode). Kung wala pang solid: "Wala pang solid na pwedeng i-export."

## Para sa 3D printing: STL o 3MF

1. Opsyonal: para sa makikinis na bilog na surface, i-click ang walang lamang espasyo para walang napili, at itakda ang **Curves** sa **Fine (128 bawat ikot)** o **Very fine (256 bawat ikot)** sa right panel. Ang STL at 3MF ay palaging gawa sa mga triangle.
2. Piliin ang {{ui:Export}}, pagkatapos {{ui:STL, for 3D printing}} o {{ui:3MF, for 3D printing}}.
3. Dina-download ang file. Ipinapakita ng status bar, halimbawa, "Na-export ang Part1.stl (binary, mm, Z up, 1536 triangles)."

Parehong **Z up** ang dalawang format, gaya ng inaasahan ng mga printer at slicer. Ang sariling mundo ng PartCraft ay Y up, kaya binabaling ng export ang piyesa: ang nakaturo pataas sa PartCraft (patayo sa Top plane) ay nakaturo pataas sa slicer, at ang piyesang na-sketch sa Top plane ay nakahiga sa bed. Itakda ang huling oryentasyon sa iyong slicer kung kailangan.

Ang 3MF ay mas bago at mas maliit na format na nababasa ng mga slicer kasama ang mga unit. Gamitin ang STL kung hindi tumatanggap ng 3MF ang isang program.

Para munang suriin na sarado ang piyesa, kasya sa bed ng iyong printer, at nakatayo sa flat face, gamitin ang {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}: tingnan ang [Ihanda ang piyesa para sa 3D printing](topic:print-3d).

## Para sa ibang CAD program: STEP

Piliin ang {{ui:Export}}, pagkatapos {{ui:STEP AP242 (exact solid)}}. Isinusulat nito ang piyesa bilang isang eksaktong solid, sa millimeters, nakabaling sa Z up. Ang mga bilog na face ay isinusulat bilang totoong silindro, kono, sphere at torus, na may totoong bilog para sa kanilang edge, para makilala ng ibang program ang butas bilang butas. Ang katawang binuksan mula sa STEP file ay pinananatili ang flat face, silindro, kono, sphere at torus ng file na iyon, kaya lalabas din itong eksakto. Ang mga face na walang ganoong surface (ang gilid ng spline, modeladong thread, katawang galing sa STL, OBJ o 3MF mesh, ang spline, swept at revolved face ng STEP file) ay nananatiling flat facet sa iisang solid, at sinasabi ng status bar kung ilan. Halimbawa ng sinasabi ng status bar: "Na-export ang Flange.step (AP242, exact solid, mm, Z up): 14 na face sa totoong surface nila (10 cylindrical, 1 conical, 0 spherical, 0 toroidal), 0 fitted edge curve." Solid lang ito: walang history, walang sketch, walang drawing. Kung AP214 lang ang nababasa ng ibang program, piliin ang {{ui:STEP AP214 (exact solid)}}: ang parehong solid sa mas lumang schema.

Ano ang eksakto at ano ang hindi:

- Ang flat face, silindro (butas, boss, fillet sa tuwid na edge), kono (countersink, taper), sphere at torus ay eksakto, at gayundin ang kanilang tuwid, pabilog at elliptical na edge. Hindi binabago ng setting na **Curves** ang mga ito.
- Kung saan nagsasalubong ang dalawang bilog na face (butas na binarena sa isang baras), ang edge ay makinis na curve na akma sa dalawang surface sa loob ng 0.00001 mm; binibilang ito ng "fitted edge curves".
- Ang saradong lukab sa loob ng piyesa ay isinusulat bilang void ng solid. Ang ilang magkakahiwalay na katawan ay isinusulat bilang ilang solid.
- Hindi pa naisusulat ang assembly bilang eksaktong STEP: i-export ang bawat piyesa.

Sinuri ito sa pamamagitan ng pagbasa ulit ng mga file sa OpenCascade, na nag-uulat ng wastong solid na may volume na kinuwenta nang manu-mano. Hindi pa ito nabubuksan sa bawat CAD o CAM program; kung may tumanggi sa file, isinusulat ng {{ui:STEP (faceted, mesh kernel)}} ang parehong hugis bilang flat face (sa sariling axes ng PartCraft, Y up), at pakisabi sa amin sa pamamagitan ng {{ui:Help}} › {{ui:Report a problem}}.

Para sa machining, isinusulat din ng Manufacture workspace ang eksaktong solid sa sariling work coordinates ng setup: tingnan ang [Gumawa ng toolpath at G-code](topic:manufacture#exact-step-for-the-shop).

## Para sa BIM program: IFC na may bawat property

Piliin ang {{ui:Export}}, pagkatapos {{ui:IFC 4 (with every property)}}. Isinusulat nito ang piyesa bilang IFC 4 element para sa building at plant model, ang hugis nito bilang triangle (Z up, millimetro), kasama ang alam ng PartCraft tungkol dito bilang property set:

| Property set | Laman |
|---|---|
| **PartCraft_Part** | Pangalan, material at density nito, ang aktibong configuration, ilang katawan; sa assembly, kasama rin ang part number at description |
| **PartCraft_Parameters** | Bawat parameter ng piyesa kasama ang value nito; ang expression ng formula at ang note ay nasa description ng property |
| **PartCraft_TitleBlock** | Ang mga field ng title block ng drawing na iyong pinunan (pamagat, drawing number, revision, company, drawn, checked and approved by, petsa, finish, general tolerance) at ang laki ng sheet |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volume, surface area, mass (kasama ang material) at pangkalahatang sukat |

Nakakabit ang material bilang IFC material, at ang drawing number ang tag ng element. Sa assembly, bawat piyesa ay isinusulat nang isang beses bilang type na may hawak ng mga property nito, at bawat kopya ay inilalagay kung saan ito ilalagay ng assembly, na may sariling value sa **PartCraft_Instance**: ang pangalan nito, ang item number nito sa bill of materials, at kung ito ang naka-ground na piyesa.

## Para sa laser, waterjet o CNC profile: DXF

Dalawang uri ng DXF, parehong version R12, na nabubuksan ng bawat CAD at CAM program:

### Isang sketch

1. Piliin ang sketch sa history (o nakabukas na ito).
2. Piliin ang {{ui:Export}}, pagkatapos {{ui:DXF of the sketch or flat face}}. (Ang right panel ng sketch ay mayroon ding {{ui:Export as DXF}}.)

Makukuha mo ang `<part> - <sketch>.dxf` sa sariling coordinates ng sketch: mga linya, totoong arko at bilog sa layer **PROFILE**, construction geometry sa **CONSTRUCTION**, at hiwa-hiwalay na punto sa **POINTS**.

### Isang flat face ng solid

1. I-click ang isang flat face sa view (halimbawa ang itaas ng plato na may mga butas).
2. Piliin ang {{ui:Export face as DXF}} sa right panel, o ang {{ui:Export}}, pagkatapos {{ui:DXF of the sketch or flat face}}.

Makukuha mo ang `<part> - face.dxf`: ang outline ng face at bawat butas dito. Ang bilog na butas (buong bilog kung saan nagtatagpo ang silindro at face: butas na binarena, o butas ng binuksang STEP file) ay isinusulat bilang totoong bilog na may sariling center at radius ng butas. Ang bawat ibang outline ay closed polyline, at ang mga bilog nitong edge (sulok ng fillet, slot, arko) ay nasa anyo ng facet, kaya itakda muna ang **Curves** sa Fine kung sinusundan nang mahigpit ng cutter ang mga ito. Sinasabi ng status bar kung ilang outline, ilan sa mga ito ang totoong bilog, at ang area ng face.

Kung walang napiling sketch o flat face: "Magbukas o pumili ng sketch, o pumili ng flat face, para i-export ang DXF."

## Drawing

Ang PDF drawing ay may sariling gabay: [Gumawa ng drawing sheet](topic:drawing-pdf).

## Mga format na hindi available

Hindi ini-export sa build na ito ang glTF, OBJ, IGES at Parasolid. Ang DWG ay isinusulat lang ng variant pack, bilang drawing sheet: tingnan ang [Gumawa ng variant pack mula sa iyong mga configuration](topic:variant-pack). Tingnan ang [File formats](topic:file-formats).
