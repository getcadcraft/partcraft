---
title: Soo-saarka xogta: xaashida xogta, fields iyo meshes
summary: Kaydi xaashida xogta jidh la sameeyay sida JSON ama PDF, field-kiisa sida sawir VTK (.vti) ama OpenVDB level set (.vdb), dusha sida VTK mesh (.vtu) ParaView iyo qalabka falanqaynta kale, iyo mesh-ka sida 3MF oo ku jira xogta generator-ka. Qaybta isku mid ah had iyo jeer wuxuu bixiyaa faylal isku mid ah.
keywords: soo dhoofin (export), xaashida xogta, json, pdf, vti, vtu, vtk, paraview, 3mf, field, masaafada calaamadaysan (signed distance), fea, cfd, metadata, openvdb
from: 817b4579
---

Goobta {{ui:Injineer}}, ama properties-ka jidh la sameeyay, fur **Soo-saarka xogta**:

| Badhanka | Faylka | Waxa loo isticmaalo |
|---|---|---|
| Xaashida xogta (JSON) | `.json` | Dhammaan gelinta, tiro kasta oo unitkeeda iyo isheeda, hubinta, fingerprint-ka mesh-ka. La kala soociyay, ma leh waqtiyo: qaybta isku mid ahi wuxuu bixiyaa fayl isku mid ah. |
| Xaashida xogta (PDF) | `.pdf` | Isla waxaas warqad ahaan, oo ku faafa boqollo bog haddii ay u baahato. |
| Field (.vti) | `.vti` | Qaybta sida masaafada calaamadaysan (taban gudaha) iyo maaska gudaha ee grid-ka barta: fayl sawir VTK ah oo ParaView iyo qalabka ku saleysan VTK. Waxa laga dhisaa dusha jidhka ee voxel size-ka gelinta generator-ka, sidaas darteed wuxuu qaadaa wakhti yar; jidh ka weyn 400 000 triangles waa wax weyn bogga: ku keydi field-ka script-ka (`field_bake`) halkii. |
| Level set (.vdb) | `.vdb` | Field isku mid ah sida OpenVDB level set: geed firfircoon oo kaliya kaydiya xadka khafiifka ah ee voxels-ka ku wareegsan dusha, loogu talagalay qalabka akhrin kara OpenVDB (renderers, simulation iyo barnaamijyada 3D). Voxel size iyo units waa kuwa generator-ka (millimeters), xadka khafiifka waa qaybta firfircoon, gudaha waa taban. Waxa laga dhisaa dusha sida `.vti`, oo leh isla xadka 400 000 triangles; fayl ka weyn 1.5 GB waa la diidaa (isticmaal voxel size weyn). Faylku waa OpenVDB format 224, aan la cadaynin marka laga reebo qaabeynta qiimaha firfircoon ee OpenVDB, sidaas darteed akhriste OpenVDB kasta ayaa furi kara. |
| Surface (.vtu) | `.vtu` | Triangles-ka, oo leh area iyo normal kasta. |
| 3MF oo leh xogta generator-ka | `.3mf` | Mesh-ka millimeters-ka slicer-ka, oo leh generator-ka, inputs-keeda iyo (graded lattice ahaan) wall range-keeda sida metadata faylka dhexdiisa. |

Waxba ka mid ah faylashan ma ka imanayo saacadda ama kombiyuutarka, sidaas darteed waad isbarbardhigi kartaa laba fayl byte-ka byte: byte isbeddelay macnaheedu waa qayb isbeddeshay.

## Weli lama dhisin

- `.vti` ama `.vdb` ee field-ka voxel size aan ahayn kan generator-ka.
- Akhrinta faylasha `.vdb` (waxa la dhisay oo keliya qorista).
