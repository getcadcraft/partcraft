---
title: Mga format ng file
summary: Bawat file na binabasa at isinusulat ng PartCraft, kasama ang extension, mga unit, axis, at kung ano ang pinapanatili o nawawala sa bawat isa.
keywords: mga format, uri ng file, extension, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mesh, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, unit, z up
from: 4d0ecbee
---

| Format | Extension | Buksan | I-save o i-export | Unit | Up axis | Pinapanatili |
|---|---|---|---|---|---|---|
| PartCraft part | `.partcraft.json` | Oo | {{ui:Save}} | mm | Y | Ang buong history: mga sketch, relasyon, dimension, feature, suppression, rollback, setting ng curve, setting ng drawing at GD&T, STEP text na in-import sa mas lumang build |
| PartCraft assembly | `.partcraft-asm.json` | Oo | {{ui:Save}} sa assembly | mm | Y | Bawat piyesa (naka-embed), mga kopya at ang kanilang posisyon, ang mga joint |
| STL (binary o text) | `.stl` | Oo, bilang solid body: [Magbukas ng STL, OBJ o 3MF](topic:open-meshes) | {{ui:STL, for 3D printing}} | mm (tinatanong kapag binuksan) | Z | Ang mga triangle lang ng solid |
| 3MF | `.3mf` | Oo, bilang solid body | {{ui:3MF, for 3D printing}} | mm (nakasaad sa file) | Z | Ang solid bilang isang mesh object |
| OBJ | `.obj` | Oo, bilang solid body (mga face lang) | Hindi | tinatanong kapag binuksan | Z o Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Oo, bilang solid body na binasa bilang triangle (ang hubog na face ay iginuhit bilang facet; ang flat face, silindro, kono, sphere at torus ng file ay pinapanatili para sa eksaktong export): [Magbukas ng STEP file](topic:import-step) | | mm (mula sa unit ng file) | Z, o Y kung sasabihin mo | Ang mga solid at surface body, mga assembly na may bawat piyesa sa lugar; walang kulay, pangalan, assembly tree o PMI |
| `.3dm` | `.3dm` | Oo, bilang isang solid body mula sa mesh at surface nito (mga naka-save na render mesh, o kung wala, tessellated): [Magbukas ng .3dm model](topic:open-3dm-files) | | Mula sa unit ng file | Z, o Y kung sasabihin mo | Mesh, polysurface, extrusion at block placement bilang isang body; walang curve, kulay, layer o pangalan |
| STEP AP242, exact | `.step` | | {{ui:STEP AP242 (exact solid)}} | mm | Z | Isang eksaktong solid: flat face, silindro, kono, sphere at torus sa totoong surface nila, totoong bilog at linya bilang edge; ang spline na gilid, modeladong thread, katawang galing sa mesh file at spline face ng STEP file ay nananatiling facet. Ang STEP na gagamitin para sa ibang CAD at CAM program |
| STEP AP214, exact | `.step` | | {{ui:STEP AP214 (exact solid)}} | mm | Z | Ang parehong eksaktong solid sa mas lumang AP214 schema, para sa mga program na iyon lang ang bumabasa |
| STEP AP242, faceted | `.step` | | {{ui:STEP (faceted, mesh kernel)}} | mm | Y | Isang saradong solid ng flat face: bilog na surface bilang facet. Para sa program na tumatanggi sa eksaktong file |
| STEP AP214, faceted | `.step` | | {{ui:STEP AP214 (faceted, mesh kernel)}} | mm | Y | Ang parehong solid sa mas lumang AP214 schema, para sa mga program na iyon lang ang bumabasa |
| USD package | `.usdz` | Hindi | {{ui:USD package (.usdz)}} | m | Z | Ang solid kasama ang material, volume at mass nito; isang assembly na may bawat piyesa nang isang beses at bawat kopya ay nakalagay: [I-export bilang USD](topic:usd) |
| IFC 4 | `.ifc` | Hindi | {{ui:IFC 4 (with every property)}} | mm | Z | Ang hugis bilang triangle, ang material, bawat parameter, ang title block, quantities; ang mga piyesa ng assembly bilang type at ang mga kopya nito ay nakalagay |
| DXF R12, sketch | `.dxf` | Hindi | {{ui:DXF of the sketch or flat face}} kapag may napiling sketch | mm | Sariling x, y ng sketch | Mga linya, totoong arko at bilog, mga punto; mga layer na PROFILE, CONSTRUCTION, POINTS |
| DXF R12, face | `.dxf` | Hindi | {{ui:DXF of the sketch or flat face}} kapag may napiling flat face | mm | Sariling x, y ng face | Ang mga outline ng face: ang bilog na butas bilang totoong bilog, ang iba bilang closed polyline (ang bilog na edge bilang facet) |
| PDF drawing | `.pdf` | Hindi | {{ui:Drawing (PDF): views, section, detail, GD&T}} | mm sa A3 sheet | | Front, top, right, isometric, section at detail view na iginuhit mula sa facet, nakatagong linya, pangkalahatang sukat, simbolo ng GD&T, title block |

## Ang mga file ng PartCraft

Parehong plain text (JSON) ang dalawa. Hindi kailanman nakaimbak ang solid: muling binubuo ito ng PartCraft mula sa history, kaya maliit ang mga file at palaging tugma sa history.

- Bawat file ay may version number. Isinusulat ng build na ito ang bawat part file sa pinakamababang version na kayang hawakan ang gamit nito (2 hanggang 5; ang katawang gawa sa mesh ay nangangailangan ng 5) at binubuksan ang bawat mas lumang version. Tinatanggihan ang file mula sa mas bagong PartCraft, na may mensaheng nagpapangalan sa parehong version.
- Bawat value ay sinusuri kapag nagbubukas ang file. Inaalis ang control character sa mga pangalan; ang numerong wala sa saklaw, mga reference sa nawawalang feature at hindi kilalang uri ng feature ay tinatanggihan nang may payak na dahilan.
- Huwag i-edit nang manu-mano ang mga file na ito maliban kung alam mo ang format. Ang file na hindi pumapasa sa pagsusuri ay hindi magbubukas.
- Ang piyesa na may malaking STEP solid na in-import sa mas lumang build ay maaaring lumampas sa 50 MB, ang pinakamalaking piyesang kayang buksan ng PartCraft (tingnan ang [Troubleshooting](topic:troubleshooting#file-problems)).

## Facet at pagiging eksakto

Ang STL at 3MF ay palaging gawa sa facet, ayon sa setting na **Curves**, at gayundin ang face DXF maliban sa mga bilog na butas, na totoong bilog. Ang sketch DXF ay may totoong arko at bilog, dahil diretso itong galing sa sketch. Ginagawa ng build na ito ang bawat piyesa gamit ang mesh kernel, kaya ang mga view ng drawing (kasama ang section) ay may facet din. Ang eksaktong STEP export ang eksepsiyon: kilala ng kernel ang totoong surface ng bawat face mula sa sketch (o mula sa STEP file na pinanggalingan ng katawan), kaya isinusulat ang mga bilog na face bilang totoong silindro, kono, sphere at torus anuman ang setting ng **Curves** (tingnan ang [I-export para sa printing, STEP at DXF](topic:export-files#for-other-cad-programs-step)).

## Hindi suportado sa build na ito

| Format | Status |
|---|---|
| glTF, IGES, Parasolid, ACIS (papasok o palabas); OBJ export | Hindi pa nagagawa |
| DWG | Isinusulat lang ng [variant pack](topic:variant-pack), bilang drawing sheet ng bawat configuration. Hindi binabasa, at walang ibang export. I-export ang DXF; bawat CAD program ay nagbubukas ng R12 DXF |
| Assembly STEP at drawing ng assembly | Hindi pa nagagawa. I-export ang bawat piyesa bilang eksaktong STEP; ang STL, 3MF at bill of materials ay ini-export mula sa assembly |
| Ang sariling part at assembly file ng ibang program (maliban sa `.3dm`, na nabubuksan bilang isang body) | Hindi pa nagagawa |

Tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet).
