---
title: ຍັງບໍ່ໄດ້ສ້າງ
summary: ທຸກສິ່ງທີ່ build PartCraft ນີ້ຍັງບໍ່ເຮັດ, ຕັ້ງແຕ່ sweep ແບບບິດ ຈົນເຖິງການສະແດງແບບນິ້ວ, ການໃສ່ຂະໜາດໃນແບບແຕ້ມ ແລະ ແອດເຊັມບລີຍ່ອຍ, ພ້ອມສິ່ງທີ່ຕ້ອງເຮັດແທນໃນປັດຈຸບັນ.
keywords: missing, not yet, limits, limitations, roadmap, exact kernel, fillet, chamfer, shell, sweep, loft, step import, simulation, manufacture, twist sweep, loft end tangency, face fillet, equations, inches, drawing dimensions, sub-assemblies, cloud, tablet, phone
from: 97b10a29
---

PartCraft ເປັນ build ໃນໄລຍະຕົ້ນ. ໜ້ານີ້ລະບຸສິ່ງທີ່ມັນຍັງບໍ່ເຮັດ ເພື່ອທ່ານຈະບໍ່ຕ້ອງຄົ້ນຫາ, ແລະ ສິ່ງທີ່ຕ້ອງເຮັດແທນໃນປັດຈຸບັນ. ບໍ່ມີອັນໃດໃນນີ້ມີວັນທີກຳນົດ.

## ຕ້ອງການ exact kernel

ເວີຊັນນີ້ສ້າງທຸກຊິ້ນສ່ວນດ້ວຍ mesh kernel (ເບິ່ງ [The mesh kernel](topic:solid-kernels)). ທຸກຢ່າງຂ້າງລຸ່ມຕ້ອງການ exact geometry kernel, ເຊິ່ງເວີຊັນນີ້ຍັງບໍ່ມີ. ຊິ້ນສ່ວນທີ່ບັນທຶກດ້ວຍຟີເຈີເຫຼົ່ານີ້ຍັງເປີດໄດ້: ຟີເຈີຄົງຢູ່ໃນປະຫວັດ, ໝາຍວ່າຍັງບໍ່ໄດ້ສ້າງ, ແລະ ຖືກເກັບໄວ້ເມື່ອທ່ານບັນທຶກ.

| ຍັງບໍ່ໄດ້ສ້າງ | ແທນໃນປັດຈຸບັນ |
|---|---|
| {{ui:Fillet}} ແລະ {{ui:Chamfer}} ເທິງຂອບໂຄ້ງ; fillet ທີ່ລັດສະໝີປ່ຽນຕາມຂອບ; ຮອບທີ່ປະສົມກັນຢ່າງລຽບເມື່ອພົບກັນ (mesh kernel ຕັດມັນເປັນມຸມ) | Fillet ແລະ Chamfer ເຮັດວຽກເທິງຂອບຊື່ລະຫວ່າງໜ້າຮາບ; ເຮັດຮອບມຸມອື່ນໃນ sketch ກ່ອນ extrude ({{ui:Fillet}} ໃນ sketch, {{key:F}}) |
| {{ui:Shell}} ເປີດໜ້າໂຄ້ງ; ກຳແພງທີ່ມີຄວາມໜາຕ່າງກັນ | ເປີດໜ້າຮາບ; ເພີ່ມວັດຖຸດ້ວຍ extrude ບ່ອນທີ່ກຳແພງຕ້ອງໜາກວ່າ |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} ເທິງໜ້າໂຄ້ງ; extrude ຂຶ້ນໄປຫາໜ້າ, ໜ້າຖັດໄປ ຫຼື vertex; extrude ແບບ tapered | Extrude ຫຼື revolve, ເປັນຂັ້ນຕອນຖ້າຈຳເປັນ; extrude ໃຫ້ເຖິງຄວາມເລິກທີ່ທ່ານວັດ |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} ແລະ flat pattern | Extrude ແຜ່ນ ຫຼື ໂປຣໄຟລ໌ຂອງ rib |
| ພື້ນຜິວ: ການຕົບແຕ່ງ {{ui:Form}} ເຂົ້າໃນຊິ້ນສ່ວນ, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | ບໍ່ມີ |
| ຫຼາຍ body: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, ຟີເຈີທີ່ສ້າງ body ໃໝ່ | Solid ດຽວ; pattern ແລະ mirror ຄັດລອກຟີເຈີ |
| Sketch, ຮາບ, ແກນ ແລະ ຈຸດເທິງໜ້າທີ່ມີແຕ່ exact kernel ເທົ່ານັ້ນທີ່ຊອກເຫັນໄດ້ (ໜ້າທີ່ສ້າງດ້ວຍ fillet, ກຳແພງຮູ, ໜ້າຂອງ solid ທີ່ນຳເຂົ້າ) | Sketch ເທິງຮາບຖານ, ຮາບອ້າງອີງ ແລະ ໜ້າຮາບຂອງ extrude ແລະ revolve |
| ຜົນລັບ generative design ທີ່ເປີດເປັນຊິ້ນສ່ວນ ຫຼື ຖືກເພີ່ມເຂົ້າໃນມັນ (ມັນກາຍເປັນ solid ທີ່ນຳເຂົ້າ) | ດາວໂຫຼດຜົນລັບເປັນ STL ຫຼື STEP |
| ແກ້ໄຂໜ້າໂຄ້ງຂອງໄຟລ໌ STEP ທີ່ເປີດເປັນພື້ນຜິວແທ້ຈິງ; exact STEP ຂອງໜ້າ spline, swept ແລະ revolved ຈາກໄຟລ໌ STEP, ດ້ານ spline, ເກຣວທີ່ສ້າງຂຶ້ນ; ຕົວ STL / OBJ / 3MF ແລະ ແອດເຊັມບລີ; STEP ສຳລັບໂປຣແກຣມ modeler ອື່ນ | {{ui:Open}} ອ່ານ STEP ເປັນສາມຫຼ່ຽມ ແລະ ເກັບໜ້າຮາບ, ກະບອກ, ກວຍ, ໝາກບານ ແລະ torus ຂອງໄຟລ໌ໄວ້ສຳລັບການສົ່ງອອກ ([Open a STEP file](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ຂຽນທຸກໜ້າ analytic ຢ່າງແນ່ນອນ ແລະ ເກັບໄວ້ເປັນ facet ([Export](topic:export-files#for-other-cad-programs-step)); macro ສຳລັບ modeler ອື່ນຍັງຂຽນຢູ່ |
| ເສັ້ນໂຄ້ງຈິງໃນແບບແຕ້ມ | ມຸມມອງ ແລະ ມຸມມອງຕັດຖືກແຕ້ມຈາກ facet |
| ປະລິມາດ, ເນື້ອທີ່ ແລະ ໄລຍະທາງທີ່ແນ່ນອນ | {{ui:Measure}} ໃຫ້ຕົວເລກຂອງ solid ທີ່ເປັນ facet, ຕ່ຳໜ້ອຍໜຶ່ງໃນຊິ້ນສ່ວນກົມ; ການຕັ້ງຄ່າ **Curves** ທີ່ລະອຽດກວ່າເຮັດໃຫ້ມັນໃກ້ຂຶ້ນ |

ແຖວບາງແຖວໃນຕາຕະລາງທາງລຸ່ມແນະນຳໃຫ້ໃຊ້ໜຶ່ງໃນຟີເຈີເຫຼົ່ານີ້ເປັນວິທີແກ້ບັນຫາອື່ນ. ຄຳແນະນຳເຫຼົ່ານັ້ນໃຊ້ໄດ້ເມື່ອ exact kernel ກັບມາແລ້ວ.

## ຟີເຈີ

| ຍັງບໍ່ໄດ້ສ້າງ | ແທນໃນປັດຈຸບັນ |
|---|---|
| Fillet ໜ້າ, fillet ເຕັມວົງ, fillet ທີ່ກຳນົດລັດສະໝີຢູ່ຈຸດຕາມຂອບ | {{ui:Fillet}} ລັດສະໝີຄົງທີ່ ຫຼື ແບບເສັ້ນຊື່ປ່ຽນໄດ້; ຫຼາຍຟີເຈີ fillet |
| Shell ທີ່ມີຄວາມໜາຜະໜັງຕ່າງກັນ | {{ui:Shell}} ຄວາມໜາດຽວ; ເພີ່ມວັດຖຸດ້ວຍ extrude ບ່ອນທີ່ກຳແພງຕ້ອງໜາກວ່າ |
| Draft ເທິງໜ້າ freeform (spline) | {{ui:Draft}} ເຮັດວຽກເທິງໜ້າຮາບ, ໜ້າກະບອກ ແລະ ໜ້າກວຍ |
| Sweep ບິດ, sweep ຜະໜັງບາງ ແລະ ພື້ນຜິວ; end tangency ໃນຟີເຈີ Loft; loft ທີ່ມີລາງນຳທາງດຽວ; ເສັ້ນທາງ spline | {{ui:Sweep}} ທີ່ມີທິດທາງຄົງທີ່ ຫຼື ການປັບຂະໜາດທີ່ປາຍ; loft ທີ່ມີລາງນຳທາງສອງ ຫຼື ຫຼາຍກວ່ານັ້ນ: ເບິ່ງ [Sweep, loft and draft](topic:sweep-loft-draft) |
| Rib ຈາກສ່ວນໂຄ້ງ ຫຼື spline; rib ທີ່ຂະຫຍາຍເປັນສີ່ຫຼ່ຽມໃຫ້ກັບ sketch (ຈາກມຸມມອງເທິງ); draft ເທິງ rib; ຫຼາຍ rib ຈາກ sketch ດຽວ | {{ui:Rib}} ຈາກລະບົບເສັ້ນຊື່ດຽວໃນຮາບຂອງ rib ເອງ: ເບິ່ງ [Ribs and gussets](topic:rib) |
| "Up to" ພື້ນຜິວໂຄ້ງ, "up to next" ທີ່ຢຸດທີ່ໜ້າໂຄ້ງ | Up to ໜ້າຮາບ ຫຼື ຮາບອ້າງອີງ |
| ຮູເຈາະສອງຊັ້ນ, ເກຣວນິ້ວ ແລະ ເກຣວທໍ່, ເກຣວແບບ tapered, ການສິ້ນສຸດເກຣວ ແລະ ຈຸດເລີ່ມເກຣວທີ່ມີ chamfer | Counterbore ທີ່ມີຄວາມເລິກນ້ອຍ; ເກຣວ ISO metric ແລະ trapezoidal, ເປັນ cosmetic ຫຼື ສ້າງແບບ: ເບິ່ງ [Threads on shafts and bores, drawn or modelled](topic:threads) |
| Extrude ຜະໜັງບາງ | ແຕ້ມທັງສອງຜະໜັງຂອງໂປຣໄຟລ໌ |
| ສຳເນົາ pattern ທີ່ຂ້າມເທື່ອລະອັນ, fill pattern | ໃຊ້ຟີເຈີແຍກຕ່າງຫາກ; pattern ຕາມເສັ້ນໂຄ້ງ: {{ui:Path pattern}} |
| ສຳເນົາ pattern, mirror, fillet, chamfer, shell ແລະ solid ທີ່ນຳເຂົ້າ | ສຳເນົາ sketch ຫຼື ຟີເຈີທີ່ມັນສ້າງຂຶ້ນ, ຫຼື pattern ມັນ |
| Tangency ແບບ G1 ແທ້ຈິງຢູ່ຈຸດພິເສດຂອງ form; ການລວມ patch ຂອງ form ເຂົ້າເປັນໜ້າໃຫຍ່ຂຶ້ນ | ເພີ່ມ Level ຂອງ form: patch ປະມານຈະນ້ອຍລົງ; ເບິ່ງ [Freeform shapes with Form](topic:form-surfaces) |
| Form ທີ່ເຮັດຈາກຫຼາຍຊິ້ນປິດແຍກກັນໃນຟີເຈີດຽວ; ສະພານລະຫວ່າງ form | ຊິ້ນປິດໜຶ່ງຊິ້ນຕໍ່ຟີເຈີ Form; ເຊື່ອມພວກມັນດ້ວຍ Join |
| ເລືອກ body ພື້ນຜິວໃນມຸມມອງ (ຍົກເວັ້ນຈຸດ trim ແລະ patch); fillet ພື້ນຜິວ; untrim; patch G2; ພື້ນຜິວ Gordon ທີ່ສຳຜັດກັບເພື່ອນບ້ານໂຄ້ງ (ສຳຜັດກັບຮາບ ແລະ ໜ້າຮາບໄດ້ແລ້ວ) | ເລືອກດ້ວຍຊື່ໃນແຜງຂອງຟີເຈີ; thicken ກ່ອນ, ແລ້ວ fillet solid |
| ລາຍການ body ໃນປະຫວັດ; ການປະໄວ້ body ທີ່ເຊື່ອງຈາກການສົ່ງອອກ | ປ່ຽນຊື່ ແລະ ເຊື່ອງ body ໃນລາຍການ body ຂອງແຜງຊິ້ນສ່ວນ; ລຶບ ຫຼື suppress ຟີເຈີທີ່ສ້າງ body ເພື່ອປະໄວ້ອອກ |
| ການປັບຂະໜາດທີ່ບໍ່ເທົ່າກັນທີ່ຮັກສາກະບອກ ແລະ ກວຍໃຫ້ເປັນ analytic; ການປັບຂະໜາດທີ່ບໍ່ເທົ່າກັນຂອງພື້ນຜິວ offset | {{ui:Scale body}} ເຮັດໃຫ້ໜ້າໂຄ້ງກາຍເປັນ B-spline ປິດ (ພາຍໃນ 0.0000004 mm); ການປັບຂະໜາດເທົ່າກັນຍັງຄົງແມ່ນແນ່ນອນ |
| ການລວມ body ພື້ນຜິວ; ຜົນບວກ Minkowski | {{ui:Stitch}} ຫຼື {{ui:Thicken}} ກ່ອນ, ແລ້ວ {{ui:Combine}} |
| ການວິເຄາະຄວາມທົນທານ: stack-up ທີ່ຫັນມຸມ (ວົງວຽນເວກເຕີ 2D ແລະ 3D), ຄວາມອ່ອນໄຫວທີ່ຄິດໄລ່ຈາກເລຂາຄະນິດ, Monte Carlo ດ້ວຍການແຈກຢາຍອື່ນ, ຄວາມທົນທານຂະໜາດໃນ dimension ຂອງ sketch, ຄວາມທົນທານໂບນັດຈາກເງື່ອນໄຂວັດສະດຸ | {{ui:Stack-up}} ໃນແອດເຊັມບລີ: ທິດທາງດຽວ, worst case ແລະ RSS, ຄວາມທົນທານທີ່ພິມເຂົ້າ, ຈາກຄວາມທົນທານທົ່ວໄປຂອງ title block ຫຼື ຈາກກອບ GD&T: ເບິ່ງ [Tolerance stack-ups](topic:tolerance-stackup) |
| Nesting: ລຳດັບການຕັດ ແລະ lead-in, ການຕັດຂອບທີ່ໃຊ້ຮ່ວມກັນເທື່ອດຽວ, ຊິ້ນສ່ວນທີ່ຕ້ອງຢູ່ນຳກັນ; ເສດວັດຖຸຂອງມ້ວນ, ວັດຖຸດິບທີ່ໃຊ້ຮ່ວມກັນລະຫວ່າງໂຄງການ | {{ui:Nest flat parts on sheets…}} ດ້ວຍໄລຍະຫ່າງ, ຂອບ, ການໝຸນ ແລະ ທິດທາງເສັ້ນໃຍ: ເບິ່ງ [Nest flat parts on sheets](topic:nest-flat-parts); ແຜ່ນທີ່ເຫຼືອຖືກເກັບ ແລະ ໃຊ້ກ່ອນ: ເບິ່ງ [Keep and reuse offcuts](topic:nest-offcuts); ວາງແຜນການຕັດໃນຊອບແວຂອງເຄື່ອງຕັດຂອງທ່ານເອງ |
| ໂລຫະແຜ່ນ: hem, jog, miter ແລະ contour flange; flange ເທິງຂອບໂຄ້ງ ຫຼື ເທິງໜ້າຂອງ base flange ທີ່ງໍແລ້ວ; ການງໍທີ່ແຕ້ມໃນ sketch; ການປິດມຸມ; ເຄື່ອງມືຂຶ້ນຮູບ; ການແປງ solid ເປັນໂລຫະແຜ່ນ; ແຜ່ນຮາບຂອງ base flange ທີ່ງໍແລ້ວ ທີ່ມີການຕັດ; ຕາຕະລາງການງໍ | {{ui:Base flange}} (ແຜ່ນ ຫຼື ໂປຣໄຟລ໌ທີ່ງໍ), {{ui:Edge flange}} ເທິງຂອບຊື່ຂອງແຜ່ນພ້ອມ bend relief, ແລະ flat pattern ດ້ວຍ K-factor: ເບິ່ງ [Sheet metal](topic:sheet-metal) |
| Draft analysis ໃນແອດເຊັມບລີ; ການຊອກຫາເສັ້ນແບ່ງ (parting line); ການວິເຄາະຄວາມໜາກຳແພງ | {{ui:Draft analysis}} ເທິງຊິ້ນສ່ວນໃນ Design: ເບິ່ງ [Check draft for moulding and casting](topic:draft-analysis); ເປີດແຕ່ລະຊິ້ນສ່ວນຂອງແອດເຊັມບລີເພື່ອກວດ |

## Sketch

| ຍັງບໍ່ໄດ້ສ້າງ | ແທນໃນປັດຈຸບັນ |
|---|---|
| Ellipse, ເສັ້ນໂຄ້ງ tangent, conic, spline ທີ່ມີດີກຣີ ຫຼື ນ້ຳໜັກກຳນົດ (NURBS) | Spline (cubic), ເສັ້ນໂຄ້ງ ແລະ ວົງມົນທີ່ມີຄວາມສຳພັນ Tangent |
| ຈຸດເທິງ spline (ຄວາມສຳພັນ), ຄວາມສຳພັນ curvature (G2) | ວາງຈຸດຂອງ spline ເອງຢູ່ບ່ອນທີ່ມັນຕ້ອງຜ່ານ |
| ສຳເນົາ offset ຂອງ spline ທີ່ຕາມການປ່ຽນແປງພາຍຫຼັງ; offset ຂອງລະບົບທີ່ມີມຸມ spline ແຫຼມ | Offset ອີກຄັ້ງຫຼັງການປ່ຽນ; ຮອບມຸມກ່ອນ |
| ສຳເນົາ pattern ທີ່ຍັງເຊື່ອມກັບຕົ້ນສະບັບ; pattern ຕາມເສັ້ນໂຄ້ງ | Pattern ອີກຄັ້ງຫຼັງການປ່ຽນ |
| ການຄາດການຂອບ free-form ຫຼື ວົງມົນທີ່ອຽງ, ເລຂາຄະນິດທີ່ຄາດການທີ່ຕາມຊິ້ນສ່ວນ | ຄາດການຂອບວົງມົນຊື່ ແລະ ຂະໜານ, ແລ້ວໃສ່ຂະໜາດ |
| Dimension ທີ່ຂັບບໍ່ໄດ້ (ອ້າງອີງ) | ອ່ານຂະໜາດຈາກແຜງ ຫຼື ຂໍ້ມູນຊິ້ນສ່ວນ |
| ຄວາມສຳພັນ Collinear | Parallel ດ້ວຍໄລຍະ 0 |
| ວາງເຂົ້າໂປຣແກຣມອື່ນ (clipboard ຂອງລະບົບ) | ສົ່ງອອກ DXF, STEP, STL ຫຼື 3MF |
| ພິມຄຳສັ່ງ arc, ພິກັດສຳພັນ ຫຼື ພິກັດ polar | ພິມເສັ້ນ ແລະ ວົງມົນ; ແຕ້ມ arc ດ້ວຍເຄື່ອງມື Arc |
| ເລືອກເລຂາຄະນິດໂດຍບໍ່ມີ pointer | ຕ້ອງການການຄລິກ ຫຼື ການແຕະ |

## ພາຣາມິເຕີ ແລະ ຫົວໜ່ວຍ

| ຍັງບໍ່ໄດ້ສ້າງ | ແທນໃນປັດຈຸບັນ |
|---|---|
| Configuration ທີ່ປ່ຽນວັດສະດຸ; ຕາຕະລາງການອອກແບບ CSV ທີ່ປິດຟີເຈີ | Configuration ກຳນົດພາຣາມິເຕີ ແລະ ເປີດ-ປິດຟີເຈີ: ເບິ່ງ [Configurations and design tables](topic:design-tables); `partcraft variants` ສ້າງ configuration ທີ່ບັນທຶກໄວ້ດ້ວຍຊື່, ລວມທັງຟີເຈີທີ່ປິດ: ເບິ່ງ [Make a variant pack from your configurations](topic:variant-pack) |
| ສົມຜົນໃນຕົວເລກຂອງແຜງຂອງຟີເຈີໃໝ່ສຸດ (plane, sweep, draft ແລະ ອື່ນໆ) | ຂຽນໃນສະຄຣິບ ຫຼື ດ້ວຍ `partcraft set` ([Scripts and the command line](topic:scripts-and-cli)) |
| ຊິ້ນສ່ວນທີ່ສະແດງເປັນນິ້ວ | ຂະໜາດສະແດງເປັນມິນລິແມັດ; ພິມ `2in` ໃນຊ່ອງຕົວເລກ ຫຼື ນິພົດ ແລະ ມັນຈະກາຍເປັນ 50.8 |

## ໄຟລ໌

| ຍັງບໍ່ໄດ້ສ້າງ | ແທນໃນປັດຈຸບັນ |
|---|---|
| ແກ້ໄຂຟີເຈີຂອງ solid STEP ທີ່ນຳເຂົ້າ (ມາໂດຍບໍ່ມີປະຫວັດ) | ເພີ່ມ ຫຼື ຕັດວັດຖຸດ້ວຍຟີເຈີຂອງທ່ານເອງ |
| ອ່ານສີ, ຊື່, ໂຄງສ້າງແອດເຊັມບລີ ແລະ PMI ຈາກ STEP | ບໍ່ມີ |
| ສົ່ງອອກ glTF, OBJ, IGES, Parasolid; DWG ຂອງຊິ້ນສ່ວນ 3D (ມີແຕ່ variant pack ທີ່ຂຽນ DWG: ແຜ່ນແບບ) | STL ຫຼື 3MF ສຳລັບ mesh; STEP ສຳລັບ solid; DXF ສຳລັບ 2D |
| ເປີດ IGES, DXF ຫຼື ໄຟລ໌ຂອງໂປຣແກຣມອື່ນ (ໄຟລ໌ `.3dm` ເປີດເປັນ body ດຽວ: [Open a .3dm model as a solid body](topic:open-3dm-files)) | ຂໍ STEP, ຫຼື mesh STL, OBJ ຫຼື 3MF ທີ່ປິດ: [Open an STL, OBJ or 3MF](topic:open-meshes) |
| ໂຄງສ້າງແອດເຊັມບລີ (ຕົ້ນໄມ້ທີ່ມີຊື່ຊິ້ນສ່ວນ) ໃນ STEP ທີ່ສົ່ງອອກ | STEP ແອດເຊັມບລີເປັນ compound ດຽວຂອງ solid ທີ່ວາງໄວ້ |
| ບັນທຶກລົງໂຟນເດີທີ່ທ່ານເລືອກໂດຍບໍ່ຜ່ານການດາວໂຫຼດຂອງບຣາວເຊີ | ເປີດ "ask where to save" ໃນການຕັ້ງຄ່າການດາວໂຫຼດຂອງບຣາວເຊີ |

## ແບບແຕ້ມ

| ຍັງບໍ່ໄດ້ສ້າງ | ແທນໃນປັດຈຸບັນ |
|---|---|
| ການໃສ່ຂະໜາດເກີນສາມຂະໜາດລວມ (ຂະໜາດຮູ, ຕຳແໜ່ງ, ຄວາມທົນທານຂອງຂະໜາດ) | ໝາຍເພີ່ມໃສ່ PDF, ຫຼື ສົ່ງອອກ DXF ແລ້ວໃສ່ຂະໜາດໃນໂປຣແກຣມ CAD 2D |
| ຫຼາຍກວ່າໜຶ່ງ section ຫຼື detail; ມຸມມອງທີ່ຈັດແນວ, ແຍກອອກ ຫຼື ເສີມ | ໜຶ່ງ section ແລະ ໜຶ່ງ detail ຕໍ່ແບບແຕ້ມ |
| ຂໍ້ຄວາມອິດສະຫຼະ, ໝາຍເຫດ ແລະ ຕາຕະລາງໃນແຜ່ນ (ນອກຈາກ title block ແລະ revision block) | ໝາຍເຫດການສຳເລັດ, ຫຼື ຂໍ້ຄວາມທີ່ເພີ່ມໃສ່ PDF |
| ການຄາດການມຸມທຳອິດ, ມຸມມອງທີ່ເຄື່ອນໄຫວ, ແຜ່ນແນວຕັ້ງ | ມຸມທີສາມ, ການຈັດວາງອັດຕະໂນມັດ, ແຜ່ນແນວນອນ A4–A0 ແລະ ANSI A–E |
| ມຸມມອງ section ແບບສົດ: ຫຼາຍຮາບ ຫຼື ກ່ອງ section ພ້ອມກັນ, ຂອບຮອບການຕັດ, ການບັນທຶກ section ໃນໄຟລ໌ | ຮາບດຽວຕໍ່ຄັ້ງຈາກ {{ui:Views}} › {{ui:Section view}}; ເບິ່ງ [Look inside with a section view](topic:section-view) |
| ແບບແຕ້ມແອດເຊັມບລີທີ່ມີມຸມມອງ, ຂະໜາດ ຫຼື balloon ເພີ່ມເຕີມທີ່ທ່ານຍ້າຍໄດ້ | ມຸມມອງ isometric (ຫຼື exploded) ໜຶ່ງອັນ ພ້ອມ balloon ອັດຕະໂນມັດ ແລະ ລາຍການຊິ້ນສ່ວນ |
| ສຳເນົາ ແລະ ວາງສັນຍາລັກ GD&T ແລະ ຜິວ | ວາງແຕ່ລະອັນດ້ວຍ Datum, Frame ຫຼື Finish |
| ຄູ່ມື: ໄຟລ໌ STEP ໃນ {{ui:From another file…}} ຂອງ Illustrate, ໂມເດວທີ່ສົ່ງຕົງຈາກ ModelCraft ຫຼື BimCraft, ຮູບທີ່ມີຄຸນນະພາບ path tracer, 3D ໂຕ້ຕອບໃນ PDF | ເປີດ STEP ໃນ Design ແລ້ວເລີ່ມຄູ່ມືດ້ວຍ {{ui:From the open part}}; ບັນທຶກໂມເດວເປັນ glTF (.glb); ຮູບ PNG ຂອງມຸມມອງ 3D; ໄຟລ໌ 3D ໂຕ້ຕອບ: ເບິ່ງ [Start a manual in Illustrate](topic:illustrate) |

## ແອດເຊັມບລີ

| ຍັງບໍ່ໄດ້ສ້າງ | ແທນໃນປັດຈຸບັນ |
|---|---|
| ຂໍ້ຕໍ່ເກຍ, rack, cam ແລະ screw; ຂໍ້ຕໍ່ບານທີ່ຈຳກັດດ້ວຍກວຍ; ຂໍ້ຕໍ່ເທິງໜ້າໂຄ້ງ ຫຼື ລະຫວ່າງຈຸດ | ຂໍ້ຕໍ່ແຂງ, revolute, slider, cylindrical, planar, ball ແລະ pin-in-slot ເທິງໜ້າຮາບ, ແຕ່ລະຄ່າມີຂີດຈຳກັດຂອງມັນເອງ: ເບິ່ງ [Build an assembly](topic:build-assembly) |
| ຂັ້ນຕອນ exploded ທີ່ໝຸນຊິ້ນສ່ວນ, ແລະ ການລາກຊິ້ນສ່ວນທີ່ຂໍ້ຕໍ່ວາງໄວ້ | ຂັ້ນຕອນ explode ເປັນເສັ້ນຊື່; ລຶບຂໍ້ຕໍ່ເພື່ອຍ້າຍຊິ້ນສ່ວນດ້ວຍມື |
| ແອດເຊັມບລີຍ່ອຍ | ລະດັບຊິ້ນສ່ວນດຽວເທົ່ານັ້ນ |
| ເກຍ, cam, ການສຳຜັດ | ບໍ່ມີ |

## Manufacture

| ຍັງບໍ່ໄດ້ສ້າງ | ແທນໃນປັດຈຸບັນ |
|---|---|
| ການ clearing 3D ແບບ adaptive ແລະ offset roughing ໃນ 3D; ການຕົບແຕ່ງ waterline, pencil, radial ແລະ spiral; ຮອບ adaptive ທີ່ຂຽນເປັນ arc | ການຫຍາບ 3D ເປັນແຖວເສັ້ນຊື່ ແລະ ການກັດຊິ້ນທີ່ເຫຼືອ: ເບິ່ງ [3D roughing and rest machining](topic:rough-3d); ການຕົບແຕ່ງ Parallel ແລະ Scallop: ເບິ່ງ [3D finishing](topic:finish-3d); face, pocket, adaptive 2D, contour, drill ແລະ chamfer 2.5 ແກນ: ເບິ່ງ [Make toolpaths and G-code](topic:manufacture) |
| ການຕັດ swarf, ເສັ້ນທາງ flow-line ແລະ multi-axis roughing, ລະຫັດ work plane ທີ່ອຽງ (G68.2), ການກວດການຊົນຂອງ holder ແລະ ເຄື່ອງ; ການຈຳລອງການຕັດ 5 ແກນ ແລະ ແກນໝຸນ | ເຄື່ອງມືອຽງສຳລັບການດຳເນີນງານໃດກໍໄດ້, ການຕົບແຕ່ງ 5 ແກນດ້ວຍ ball end mill ແລະ ການຕົບແຕ່ງແກນໝຸນແກນທີ 4: ເບິ່ງ [4- and 5-axis machining](topic:multi-axis) |
| ການເຈາະ ແລະ ເກຣວພາຍໃນໃນເຄື່ອງກຶງ, ວົງຈອນ G71/G76, ເສັ້ນໂຄ້ງໃນເສັ້ນທາງກຶງ, ເຄື່ອງມືສົດ, ແກນຍ່ອຍ | Turning ດ້ານນອກ: face, rough, finish, groove, part off, thread, drill on centre: ເບິ່ງ [Turning on a lathe](topic:turning) |
| Probing ມຸມ ຫຼື ມຸມຕັດ, ເຄື່ອງກຳນົດເຄື່ອງມື, ການວັດຂະໜາດທຽບກັບຄວາມທົນທານ | Probing ໜ້າ, ດ້ານຂ້າງ, ຮູ ຫຼື ແກນ ເພື່ອຕັ້ງ work offset: ເບິ່ງ [Probing](topic:probing) |
| ການກວດການຊົນຂອງ holder ແລະ shank | ເບິ່ງຄຳເຕືອນຄວາມຍາວຮ່ອງ ແລະ ກວດໃນ simulator ຂອງ control ຂອງທ່ານ |
| ວົງຈອນອາຍຸເຄື່ອງມື ແລະ subprogram ໃນ post; ການໂຫຼດໄຟລ໌ post ຂອງໂປຣແກຣມອື່ນ | ຂຽນ ຫຼື ປ່ຽນ post ໃນຮູບແບບຂອງ PartCraft: ເບິ່ງ [Post processors you can edit](topic:post-processors) |
| G-code ນິ້ວ (G20) | ມິນລິແມັດ (G21) ເທົ່ານັ້ນ |

## ການຈຳລອງ ແລະ generative design

| ຍັງບໍ່ໄດ້ສ້າງ | ແທນໃນປັດຈຸບັນ |
|---|---|
| ການສຶກສາບໍ່ເປັນເສັ້ນ: ການຍອມຈຳນົນ, ການໂກ່ງໃຫຍ່, ການສຳຜັດລະຫວ່າງຊິ້ນສ່ວນ, ຄວາມເມື່ອຍ | ຄົງທີ່ເສັ້ນຊື່ ແລະ ຄວາມຖີ່ທຳມະຊາດ: ເບິ່ງ [Check stress and deflection](topic:simulation); ຮັກສາຄ່າ safety factor ໃຫ້ສູງກວ່າ 1 ຫຼາຍ |
| Buckling ບໍ່ເປັນເສັ້ນ (ຄວາມບໍ່ສົມບູນ, post-buckling, snap-through) | ຄ່າ load factor ຂອງ buckling ແບບເສັ້ນຊື່ ພ້ອມຂອບເຂດກວ້າງ: ເບິ່ງ [Heat, thermal stress and buckling](topic:thermal-and-buckling) |
| ການແຜ່ລັງສີລະຫວ່າງໜ້າ (view factor), ຄວາມຕ້ານທານການສຳຜັດ, ວັດສະດຸທີ່ຂຶ້ນກັບອຸນຫະພູມ, ແຮງເນື່ອຍໃນຄວາມຮ້ອນ (ຄື້ນ thermal shock) | ການແຜ່ລັງສີຫາສິ່ງອ້ອມຂ້າງ, ຄວາມເຄັ່ງຄວາມຮ້ອນແບບຄົງທີ່ ຫຼື quasi-static ຕາມເວລາ, ຄຸນສົມບັດຄົງທີ່: ເບິ່ງ [Heat, thermal stress and buckling](topic:thermal-and-buckling) |
| ການປັບ mesh ອັດຕະໂນມັດສຳລັບຄວາມຮ້ອນແບບຊົ່ວຄາວ ແລະ ການສຶກສາທີ່ມີ thermal load; ເຮັດ mesh ໃຫຍ່ຂຶ້ນບ່ອນທີ່ຄວາມຜິດພາດນ້ອຍ; ເປົ້າໝາຍເທິງປະລິມານທ້ອງຖິ່ນ (ຄວາມເຄັ່ງສູງສຸດຢູ່ຈຸດໜຶ່ງ) | **Refine automatically** ສຳລັບການສຶກສາສະຖິດ, buckling, ຄວາມຖີ່ທຳມະຊາດ ແລະ ຄວາມຮ້ອນຄົງທີ່, ໂດຍອີງໃສ່ຄວາມຜິດພາດທັງໝົດຂອງຊິ້ນສ່ວນ: ເບິ່ງ [Check stress and deflection](topic:simulation); ຫຼືບໍ່ດັ່ງນັ້ນ ຫຼຸດຂະໜາດ element |
| ການໂຫຼດຕຽງ ແລະ bolt, ແຮງຫ່າງໄກ, ໂມເມນ, ສປຣິງ, ການເຄື່ອນຍ້າຍທີ່ກຳນົດໄວ້ | ແຮງ ແລະ ຄວາມກົດດັນເທິງໜ້າ, ແຮງໂນ້ມຖ່ວງ; ໜ້າທີ່ຍຶດ ແລະ ບໍ່ມີແຮງສຽດທານ |
| ການຈຳລອງແອດເຊັມບລີ; ວັດສະດຸທີ່ແຕກຕ່າງຕາມທິດທາງ (ຊັ້ນພິມ, composite) | ຊິ້ນສ່ວນໜຶ່ງ, ວັດສະດຸ isotropic ໜຶ່ງ |
| ຫຼາຍ thread ຂອງ solver ສຳລັບການສຶກສາ tetrahedral, ການຖ່າຍເທຄວາມຮ້ອນ ແລະ generative design; thread ໃດໆໃນໜ້າທີ່ບໍ່ໄດ້ cross-origin isolated | ການສຶກສາ voxel, buckling, ຄວາມເຄັ່ງຕາມເວລາ ແລະ ການໄຫຼແບບ laminar ໃຊ້ thread ບ່ອນທີ່ໜ້າອະນຸຍາດ: ເບິ່ງ [PartCraft settings](topic:settings) |
| ການໄຫຼແບບປັ່ນປ່ວນທີ່ມີຄວາມແມ່ນຍຳການອອກແບບ (ແບບ Spalart–Allmaras ມີເປັນທົດລອງ: ແຮງສຽດທານທໍ່ສູງກວ່າ 30 ຫາ 34 %, ການກັບຄືນຂັ້ນບັນໄດສັ້ນກວ່າ 21 ຫາ 39 %; ແຜນໃນອະນາຄົດ: ຊ່ອງລະອຽດໃກ້ຝາ), ຄວາມຮ້ອນໃນການໄຫຼ, ການໄຫຼທີ່ບໍ່ຄົງທີ່ (ຕາມເວລາຈິງ), ພື້ນຜິວອິດສະຫຼະ, ຂອງໄຫຼທີ່ບໍ່ແມ່ນ Newtonian, ຊິ້ນສ່ວນທີ່ໝຸນ | ການໄຫຼແບບ laminar, ຄົງທີ່, isothermal ຂອງຂອງໄຫຼ Newtonian, ຫຼື ແບບ turbulent ທົດລອງສຳລັບຮູບແບບທີ່ມີຄຸນນະພາບ: ເບິ່ງ [Simulate fluid flow](topic:flow-simulation); ແຜງຈະເຕືອນເມື່ອເລກ Reynolds ເກີນ laminar |
| ຂີດຈຳກັດຄວາມເຄັ່ງ ແລະ ກົດລະບຽບການຜະລິດ (ໂອເວີແຮງ, ທິດທາງການກັດ) ໃນ generative design; ຫຼາຍວັດສະດຸໃນຮູບຮ່າງດຽວ | ຮູບຮ່າງທີ່ແຂງທີ່ສຸດສຳລັບປະລິມາດ; ກວດຜົນລັບໃນ Simulation: ເບິ່ງ [Grow a shape from loads](topic:generative-design) |
| ຜົນລັບເປັນ solid ທີ່ແກ້ໄຂໄດ້ (ລຽບ, parametric) | STL, STEP ແບບ faceted, ຫຼື ຊິ້ນສ່ວນທີ່ມີຜົນລັບເປັນ solid faceted ທີ່ນຳເຂົ້າ |
| ການອອກແບບເຄື່ອງຈັກໄຟຟ້າ: ໂລເຕີໝຸນໃນສະເຕເຕີ, ແຮງບິດທຽບກັບມຸມ, ເຫຼັກອີ່ມຕົວ, ແມ່ເຫຼັກທີ່ສູນເສຍກຳລັງເມື່ອເກີນຈຸດງໍ, ກະແສ eddy ແລະ ການສູນເສຍເຫຼັກ ແລະ ທອງແດງ; ສະໜາມແມ່ເຫຼັກ 3 ມິຕິ ຫຼື ເທິງ mesh ໂຄ້ງ | ສະໜາມແມ່ເຫຼັກສະຖິດ 2 ມິຕິເສັ້ນຊື່ເທິງຕາຕະລາງໃນຫໍສະໝຸດການວິເຄາະ: ຂົດລວດ, ເຫຼັກ, ແມ່ເຫຼັກຖາວອນເທິງເສັ້ນ recoil ຂອງມັນ, ຊ່ອງວ່າງ, inductance ແລະ ແຮງດຶງ: ເບິ່ງ [Magnetic fields in 2-D](topic:magnetic-fields-2d) |

## ສະຄຣິບ

| ຍັງບໍ່ໄດ້ສ້າງ | ແທນໃນປັດຈຸບັນ |
|---|---|
| Hover help, breakpoint ແລະ stepping ໃນ script editor | Find, fold ແລະ complete ມີແລ້ວ (ເບິ່ງ [Write and run scripts](topic:craftscript)); ສ່ວນທີ່ເຫຼືອ, ໃຊ້ editor ຂອງທ່ານເອງ: {{ui:Save}} ແລະ {{ui:Open}} ໃນກຸ່ມ Script ຍ້າຍສະຄຣິບເຂົ້າ ແລະ ອອກ; ຟັງຊັນໃນຕົວຖືກລະບຸໃນ [The CraftScript language](topic:craftscript-language) |
| Breakpoint ແລະ stepping ຜ່ານສະຄຣິບ | `disp` ແລະ `fprintf` ຕາມທາງ; {{key:Mod+Enter}} ແລ່ນບາງແຖວທີ່ເລືອກໄວ້ຄັ້ງລະຄັ້ງ |
| ຮູບແຕ້ມ ແລະ ແຜນທີ່ສະຄຣິບສະແດງ ທີ່ຖືກແຕ້ມໃນພື້ນທີ່ເຮັດວຽກ Design; ສະຄຣິບທີ່ປ່ຽນພາຣາມິເຕີຂອງຊິ້ນສ່ວນ | ສະແດງໃນພື້ນທີ່ເຮັດວຽກ Script; ສະຄຣິບອ່ານພາຣາມິເຕີດ້ວຍ `param` (ເບິ່ງ [Write and run scripts](topic:craftscript)), ປ່ຽນພວກມັນໃນແຖບ {{ui:Parameters}} |
| ຮູບ ແລະ ຕາຕະລາງຄຽງຂ້າງແຜນທີ່; ແກ້ໄຂແຜນທີ່ (ຊູມ, ຂີດຈຳກັດແກນ) ກ່ອນບັນທຶກ | ຄຽງຂ້າງສະແດງແຜນທີ່; ບັນທຶກແຜນທີ່ເປັນ PNG, SVG ຫຼື CSV ແລະ ແກ້ໄຂຕໍ່ບ່ອນອື່ນ |
| numpy ແລະ ແພັກເກດ Python ອື່ນ; Python offline; ການພັບ Python ໃນ editor; Pascal Script | ໄລບຣາຣີມາດຕະຖານຂອງ Python, CraftScript ແລະ Lua: ເບິ່ງ [Scripts in Python](topic:craftscript-python) |
| ສົ່ງຟັງຊັນ Lua ໃຫ້ຟັງຊັນໃນຕົວ; ເອີ້ນຟັງຊັນໃນໄລບຣາຣີຈາກ Lua ດ້ວຍຊື່ທີ່ສ້າງຂຶ້ນໃນຂະນະສະຄຣິບເຮັດວຽກ | ຂຽນຊື່ຟັງຊັນໃນໄລບຣາຣີໃນສະຄຣິບ (`cs.static_tet(…)`), ຫຼື ເອີ້ນມັນຈາກສະຄຣິບ CraftScript |

## ແອັບ

| ຍັງບໍ່ໄດ້ສ້າງ | ແທນໃນປັດຈຸບັນ |
|---|---|
| ການບັນທຶກໃນຄລາວ, ການແບ່ງປັນ ແລະ ປະຫວັດເວີຊັນ | ຍັງບໍ່ມີ. ບັນທຶກໄຟລ໌ລົງຄອມພິວເຕີຂອງທ່ານ ແລະ ເກັບເວີຊັນດ້ວຍຊື່ |
| PartCraft ເປັນແອັບທີ່ຕິດຕັ້ງໃນ iPad ແລະ iPhone | ໃຊ້ PartCraft ໃນບຣາວເຊີຂອງອຸປະກອນ; ເທິງ Android ແລະ ເດັສທັອບ ມັນຍັງເຮັດວຽກໃນ CadCraft Studio (getcadcraft.com/download) |
| ເມນູ context (ຄລິກຂວາ) | ແຖບເຄື່ອງມື ແລະ ແຜງຂວາ |
| ເຮັດວຽກເຕັມຮູບແບບ offline ຈາກການເລີ່ມໃໝ່ | ເສັ້ນທາງອື່ນໃນພື້ນທີ່ໃດ ກໍເມື່ອແອັບຖືກບັນທຶກສຳລັບການໃຊ້ offline ແລ້ວ: ເບິ່ງ [Working offline](common:offline) |

ລາຍງານສິ່ງທີ່ທ່ານຂາດຫຼາຍທີ່ສຸດຜ່ານໜ້າສະໜັບສະໜູນຂອງເວັບໄຊທ໌: ມັນກຳນົດສິ່ງທີ່ຈະມາຕໍ່ໄປ.

## Engineer (ເຄື່ອງກຳເນີດ ແລະ ສະໜາມ)

| ຍັງບໍ່ໄດ້ສ້າງ | ແທນໃນປັດຈຸບັນ |
|---|---|
| Header, port ແລະ fitting ໃນເຄື່ອງແລກປ່ຽນຄວາມຮ້ອນທີ່ສ້າງຂຶ້ນ; ເສັ້ນໂຄ້ງອຸນຫະພູມສຳລັບຄວາມແຂງແຮງຂອງວັດສະດຸ; ການສູນເສຍ tee ໃນ manifold | ເຄື່ອງກຳເນີດສ້າງແກນ ແລະ ທໍ່; ເພີ່ມ fitting ໃນ Design; ໃຊ້ຕົວເລກອຸນຫະພູມຫ້ອງຂອງວັດສະດຸດ້ວຍ safety factor |
| ເພີ່ມເຄື່ອງກຳເນີດຈາກໄດເລກທໍຣີ add-on ດ້ວຍການຄລິກດຽວ | {{ui:Open}} ໃນພື້ນທີ່ເຮັດວຽກ Engineer ເພີ່ມເຄື່ອງກຳເນີດຈາກໄຟລ໌ |
| ໄຟລ໌ສະໜາມທີ່ລະອຽດກວ່າຂະໜາດ voxel ຂອງເຄື່ອງກຳເນີດ; ການອ່ານໄຟລ໌ `.vdb` | ບັນທຶກສະໜາມທີ່ລະອຽດກວ່າຈາກສະຄຣິບ; `.vdb` ຖືກຂຽນ ບໍ່ແມ່ນອ່ານ |
| ການຄຳນວນເຮືອຄວາມດັນ | ສູດຕຳລາ thin-wall ແລະ thick-wall ທົ່ວໄປ, ດ້ວຍ safety factor ທີ່ທ່ານເລືອກ; ບໍ່ແມ່ນ code margin |
| ເຄື່ອງກຳເນີດສຳລັບແອັບອື່ນ | PartCraft ເທົ່ານັ້ນໃນເວີຊັນນີ້ |

