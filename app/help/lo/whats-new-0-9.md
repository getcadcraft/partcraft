---
title: ໃໝ່ໃນ 0.9 (ກ່ອນໜ້າ)
summary: PartCraft 0.9 ເພີ່ມ fillet ລະຫວ່າງໜ້າ ແລະ ການເຮັດໃຫ້ໜາເປັນ solid, ແອດເຊັມບລີຫຼາຍພັນຊິ້ນສ່ວນ, ຄັງເອກະສານ Documents ພ້ອມການປັບປຸງ, add-on Solid FEM ສຳລັບຄວາມເຄັ່ງ, ວິທີ arc ສິບແບບ, ຂະໜາດເຫຼັກ UK, ຂັ້ນພິມ ແລະ add-on ພິມເຣຊິນ.
keywords: whats new 0.9, earlier release, whats new, what's new, release notes, changelog, 0.9, fillet between faces, rolling ball, fillet several edges, thicken, solid from surfaces, step shell, iges solid, scan fillets, large assembly, lightweight display, 20000 parts, documents, vault, check out, revision, release, where used, rhino link, grasshopper, 3dm, cursors, factory floor, job queue, solid fem, finite element, von mises, natural frequency, arc methods, 3-point arc, uk steel sections, blue book, print stage, resin, goo, ctb, bed, lay flat, whats new, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, live analysis, update while editing, break it, what breaks first, load factor, nonlinear, yield, plastic strain, contact, calculix, motion study, clearance, surfaces, nurbs, fair, hull, zebra, engineer, generator, generated body, sketch from a photo, scale for printing, split for printing, shrinkage, nested sheets, g-code, drawing, dimension holes, assistant, mcp, languages, toolbar rows
from: 1dafd7c8
---

ນີ້ແມ່ນສິ່ງທີ່ປ່ຽນໃນ PartCraft 0.9, ທຽບກັບ 0.8.1. ພື້ນຜິວໂຄ້ງດຽວນີ້ປິດເປັນ solid, ແອດເຊັມບລີຫຼາຍພັນຊິ້ນສ່ວນຍັງໃຊ້ງານໄດ້, ຄັງ Documents ເກັບການປັບປຸງ, ແລະ add-on Solid FEM ກວດຄວາມເຄັ່ງໃນຊິ້ນສ່ວນ. ແຕ່ລະລາຍການບອກວ່າຈະພົບມັນຢູ່ໃສ.

## ໃໝ່ໃນ 0.9.1

- **Exact STEP export.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ແລະ {{ui:STEP AP214 (exact solid)}} ເຮັດວຽກແລ້ວ. ຮູ, ແກນ, fillet, ກວຍ, ໝາກບານ ແລະ torus ຖືກຂຽນເທິງໜ້າແທ້ຈິງຂອງມັນ ໂດຍມີວົງມົນຈິງເປັນຂອບ, ດັ່ງນັ້ນໂປຣແກຣມ CAD ຫຼື CAM ອື່ນສາມາດເລືອກຮູເປັນຮູໄດ້. ດ້ານ spline, ເກຣວທີ່ສ້າງແບບ ແລະ mesh ທີ່ນຳເຂົ້າຍັງເປັນ facet ຮາບໃນ solid ດຽວກັນ. ເບິ່ງ [Export for printing, STEP and DXF](topic:export-files#for-other-cad-programs-step).
- **STEP in, exact STEP out.** ໄຟລ໌ STEP ທີ່ທ່ານເປີດຈະເກັບໜ້າຮາບ, ກະບອກ, ກວຍ, ໝາກບານ ແລະ torus ຂອງມັນເອງ, ດັ່ງນັ້ນ {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ຂຽນພວກມັນກັບເປັນພື້ນຜິວແທ້ຈິງແທນທີ່ຈະເປັນ facet: ຄານຂອງຜູ້ສະໜອງທີ່ມີຮູນອດຈະອອກໄປດ້ວຍໜ້າດຽວກັນທີ່ມັນເຂົ້າມາ, ບວກກັບສິ່ງໃດກໍຕາມທີ່ທ່ານຕັດເຂົ້າໄປ. ໜ້າ spline, ໜ້າທີ່ຖືກກວາດ ແລະ ໝຸນຂອງໄຟລ໌ຍັງເປັນ facet, ແລະ ວັດຖຸຈາກ STL, OBJ ແລະ 3MF ກໍເຊັ່ນກັນ. ເປີດໄຟລ໌ STEP ອີກຄັ້ງສຳລັບຊິ້ນສ່ວນທີ່ບັນທຶກໄວ້ກ່ອນ. ເບິ່ງ [Open a STEP file and build on it](topic:import-step).
- **True circles in the face DXF.** {{ui:Export}} › {{ui:DXF of the sketch or flat face}} ເມື່ອເລືອກໜ້າຮາບ ດຽວນີ້ຂຽນຮູກົມເປັນວົງມົນ, ດ້ວຍຈຸດສູນກາງ ແລະ ລັດສະໝີຂອງຮູນັ້ນເອງ, ສຳລັບໂຕະເລເຊີ, ພລາສມາ ຫຼື waterjet. ຂອບກົມອື່ນຍັງເປັນ facet.
- **Exact STEP for the shop.** ໃນ {{ui:Manufacture}}, {{ui:Exact STEP (work coordinates)}} ຂຽນຊິ້ນສ່ວນໂດຍມີຈຸດກຳເນີດຢູ່ທີ່ work origin ຂອງ setup ແລະ Z ຕາມແກນເຄື່ອງມື, ເປັນພິກັດທີ່ G-code ໃຊ້. ເບິ່ງ [Make toolpaths and G-code](topic:manufacture#exact-step-for-the-shop).

## ໃໝ່

### ພື້ນຜິວ ແລະ solid

- **Fillet between faces.** ເລືອກ {{ui:Surfaces}} ໃນກ່ອງ {{ui:Workspace}}, ແລ້ວ {{ui:Fillet between faces}}. ເລືອກສອງໜ້າຂອງ solid ດຽວ, ພິມລັດສະໝີ (ແລະ {{ui:Radius at the end (mm, 0 = the same)}} ສຳລັບລັດສະໝີທີ່ປ່ຽນຕາມຂອບ). ແຖວຜົນລັບບອກວ່າ fillet ຫ່າງຈາກ rolling ball ທີ່ເໝາະສົມເທົ່າໃດ, ແລະ ລັດສະໝີທີ່ບໍ່ພໍດີຈະຖືກປະຕິເສດພ້ອມຊື່ໜ້າ. {{ui:Fillet several edges}} ໂຄ້ງຫຼາຍຂອບໃນຂັ້ນຕອນດຽວ; ໝາຍ {{ui:Corners (sphere patch where three meet)}} ສຳລັບມຸມໝາກບານ ບ່ອນທີ່ສາມຂອບໂຄ້ງຂອງໜ້າຮາບມາພົບກັນ. ເບິ່ງ [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **Thicken into a solid.** {{ui:Thicken into a solid}} ໃນພື້ນທີ່ເຮັດວຽກດຽວກັນໃຫ້ພື້ນຜິວມີຄວາມໜາ; {{ui:Other side}} ຂະຫຍາຍມັນໄປອີກດ້ານ. ການພັບ ຫຼື ການຕັດກັນເອງຖືກປະຕິເສດ ພ້ອມຊື່ພື້ນຜິວ ແລະ ບ່ອນນັ້ນ.
- **Solids from surfaces.** ພື້ນຜິວທີ່ຖືກຕັດສາມາດຕໍ່ກັນດ້ວຍ union, subtract ແລະ intersect ແລະ ຖືກຝັງເຂົ້າໃນຊິ້ນສ່ວນເປັນຂັ້ນຕອນ undo ດຽວ. STEP ຂຽນ solid ເປັນ shell ປິດດຽວ ແລະ IGES ເປັນ solid ດຽວ; ທັງສອງອ່ານກັບເປັນ solid. ຖ້າໜ້າບໍ່ຈັບຄູ່ກັນຂອບຕໍ່ຂອບ, ໄຟລ໌ຈະໄດ້ໜ້າແຍກກັນ ແລະ ແຖວສະຖານະຈະບອກ. Solid ຍັງສາມາດສ້າງໃນ node editor ໄດ້: ເບິ່ງ [Node editor](topic:nodes).
- **Rim and variable fillets in scans.** ເມື່ອທ່ານປັບພື້ນຜິວໃຫ້ກັບ scan, fillet ຂອບ (torus) ແລະ fillet ລັດສະໝີປ່ຽນຕາມຂອບທີ່ຄ່ອນຂ້າງຊື່ກໍຖືກຊອກຫາເຊັ່ນກັນ ແລະ ລາຍການພ້ອມລັດສະໝີຂອງມັນ. ມັນຖືກທົດສອບກັບ scan ທີ່ສ້າງຂຶ້ນເທົ່ານັ້ນ.

### ແອດເຊັມບລີ, ເອກະສານ ແລະ ການເຊື່ອມຕໍ່

- **Large assemblies.** ຊິ້ນສ່ວນທີ່ເປັນສຳເນົາແບ່ງປັນ mesh ດຽວກັນ, ແລະ {{ui:Views}} › {{ui:Lightweight display}} ແຕ້ມກ່ອງເພື່ອໃຫ້ມຸມມອງຍັງເຄື່ອນໄຫວໄດ້ (ມັນເປີດເອງສຳລັບແອດເຊັມບລີໃຫຍ່ຫຼາຍ; ການເລືອກ ແລະ joint ຍັງໃຊ້ຊິ້ນສ່ວນຈິງ). ຕົ້ນໄມ້ຊິ້ນສ່ວນສະແດງແຖວທຳອິດ ແລະ ປຸ່ມ {{ui:Show 700 more}} ສຳລັບແຖວທີ່ເຫຼືອ. ໄຟລ໌ແອດເຊັມບລີອາດມີຖືງ 50,000 instance ແລະ 100,000 joint. ເບິ່ງ [Build an assembly](topic:build-assembly).
- **Documents.** {{ui:Documents…}} ໃນກຸ່ມ **File** ເປີດກ່ອງໂຕ້ຕອບເທິງໂຟນເດີໂຄງການ: check out ແລະ check in, ຕົວອັກສອນເວີຊັນ, ສະຖານະ (ກຳລັງເຮັດວຽກ, ລໍຖ້າການກວດ, ປ່ອຍແລ້ວ, ລ້າສະໄໝ), ປະຫວັດ, where-used ແລະ bill of materials. ເບິ່ງ [Documents and revisions (the vault)](topic:documents-walkthrough).
- **Live Rhino link.** ສະຄຣິບໜຶ່ງ, `cadcraft_link.py`, ເຝົ້າເບິ່ງເອກະສານ Rhino ຫຼື Grasshopper ແລະ ສົ່ງເຂົ້າ PartCraft ສະເພາະສິ່ງທີ່ປ່ຽນແປງ, ບ່ອນທີ່ຟີເຈີທີ່ນຳເຂົ້າສ້າງໃໝ່ດ້ວຍຮູບຮ່າງໃໝ່. ມັນເປັນທາງດຽວ ແລະ ຕ້ອງການ Studio. ເບິ່ງ [Live .3dm link](topic:live-3dm-link).
- **See each other's cursors.** ໃນເຊດຊັນທີ່ແບ່ງປັນ, ເຄີເຊີຂອງແຕ່ລະຄົນສະແດງພ້ອມຊື່ ແລະ ຟີເຈີທີ່ລາວເລືອກ. ເບິ່ງ [Work live with others](topic:work-live).
- **Factory floor.** ເປີດ add-on Factory floor ໃນ {{ui:Settings}} › {{ui:Add-ons}}. ຫຼັງຈາກທ່ານ post ໂປຣແກຣມໃນ {{ui:Manufacture}}, ແຖບຂອງມັນສາມາດ {{ui:Add to the factory job queue}} ຫຼື {{ui:Save as a job file}}. ມັນບໍ່ເຄີຍສົ່ງ ຫຼື ເລີ່ມເຄື່ອງຈັກ.

### ການວິເຄາະ ແລະ ຊິ້ນສ່ວນ

- **Solid FEM add-on.** ເປີດ {{ui:Solid FEM}} ໃນ {{ui:Settings}} › {{ui:Add-ons}} (ມັນປິດຢູ່ຈົນກວ່າທ່ານຈະເປີດ) ແລະ ແຖບ {{ui:Solid FEM}} ປາກົດໃນແຜງຂວາ. {{ui:Mesh the part}}, ເລືອກໜ້າຍຶດ ແລະ ແຮງໃນມຸມມອງ 3D, {{ui:Solve}}, ແລະ ແຕ້ມການເຄື່ອນທີ່, ຄວາມເຄັ່ງ von Mises ຫຼື ຮູບຮ່າງໂໝດດ້ວຍ {{ui:Show on the model}}. ເບິ່ງ [Solid FEM: a stress check](topic:solid-fem-check).
- **Arc in sketches, ten ways.** ລູກສອນຂ້າງ {{ui:Arc}} ໃນແຖບເຄື່ອງມື sketch ລາຍການວິທີ 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length ແລະ Continue. ເບິ່ງ [Draw an arc by ten methods](topic:sketch-arc-methods).
- **UK steel sizes.** ໂຄງສ້າງເຊື່ອມສາມາດໃຊ້ໜ້າຕັດ UK 976 ອັນ (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); ພິມຂະໜາດເຊັ່ນ `305x165x40 UB`. ເບິ່ງ [Structural members](topic:structural-members).

### ການພິມ

- **Print stage.** ປຸ່ມ {{ui:Print stage}} ໃນແຖບເຄື່ອງມື (add-on 3D Print, ເປີດເປັນຄ່າເລີ່ມຕົ້ນ) ວາງ body ຂອງຊິ້ນສ່ວນເທິງແທ່ນພິມເສັ້ນປະ: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, ແລ້ວ {{ui:Send to 3D printer}} ຜ່ານ USB, Klipper (Moonraker), OctoPrint ຫຼື PrusaLink. ຈະບໍ່ມີຫຍັງສົ່ງຈົນກວ່າທ່ານຢືນຢັນ, ແລະ ຊິ້ນສ່ວນຂອງທ່ານບໍ່ເຄີຍຖືກປ່ຽນ. ສຳລັບໄຟລ໌ STL ຫຼື 3MF ແທນ, ເບິ່ງ [Get a part ready for 3D printing](topic:print-3d).
- **Resin printing.** Add-on ໃນ {{ui:Settings}} › {{ui:Add-ons}}, ທັງໝົດປິດຈົນກວ່າທ່ານຈະເປີດ: ໂປຣແກຣມຕັດ resin, ການທົດສອບການເປີດເຜີຍ, ແລະ ຮູບແບບໄຟລ໌ Elegoo GOO, SL1, Chitubox CBDDLP/CTB ແລະ Anycubic. ການຕັດເຮັດວຽກເທິງ worker thread, ດັ່ງນັ້ນໜ້າຍັງຕອບສະໜອງ.

## ໃນທຸກແອັບ

- ທຸກຄຳແນະນຳເມື່ອວາງເມົາສ໌ເປັນ Bootstrap tooltip.
- ແຖບເລີ່ມຕົ້ນມີປຸ່ມປິດ; ມັນຈະຢູ່ປິດ.
- ແຖບຂອງແຜງທີ່ບໍ່ພໍດີຈະເລື່ອນໄປດ້ານຂ້າງແທນທີ່ຈະຖືກຕັດ.
- ແຖບຂອງບຣາວເຊີສະແດງຊື່ເອກະສານທີ່ເປີດ ກ່ອນ PartCraft | CadCraft.
- {{ui:Settings}} ສະແດງ {{ui:Layout}} ຂອງພື້ນທີ່ເຮັດວຽກເປັນລາຍການເລືອກແບບ drop-down, ແລະ ກ່ອງພາສາລາຍການທຸກພາສາທີ່ build ມີ.
- Weight ແລະ Temperature ເປັນປະເພດໜ່ວຍໃນການຕັ້ງຄ່າໜ່ວຍ.

## ແກ້ແລ້ວ

- ເມນູ Arc ຂອງ sketch ລາຍການທຸກວິທີ.
- ແຖບ add-on ແລະ ຊື່ແທັບບຣາວເຊີໄດ້ຖືກແກ້ໄຂເມື່ອ 2026-11-09.

## ຂີດຈຳກັດທີ່ຊື່ສັດ

- Exact STEP ຖືກອ່ານກັບໃນ OpenCascade (solid ທີ່ຖືກຕ້ອງ, ປະລິມາດເທົ່າກັບທີ່ຄິດໄລ່ດ້ວຍມື). ມັນຍັງບໍ່ໄດ້ຖືກເປີດໃນທຸກໂປຣແກຣມ CAD ຫຼື CAM, ແລະ ແອດເຊັມບລີບໍ່ຖືກຂຽນເປັນ exact STEP.
- ຍັງບໍ່ເຄີຍພິມອອກຈາກເຄື່ອງພິມຈິງ. ການຕັດ, G-code ແລະ ໄຟລ໌ resin ຖືກອ່ານກັບໂດຍໂປຣແກຣມຂອງພວກເຮົາເອງ ຫຼື ເຄື່ອງພິມທົດແທນ; ຮູບແບບ resin ບໍ່ມີອັນໃດຖືກໂຫຼດເຂົ້າເຄື່ອງພິມ, ແລະ ຂະໜາດເຄື່ອງພິມ ແລະ ການເປີດເຜີຍເປັນຈຸດເລີ່ມຕົ້ນ.
- Solid FEM ເປັນເສັ້ນຊື່, isotropic ແລະ elastic, ວັດສະດຸໜຶ່ງຕໍ່ຊິ້ນສ່ວນ, ບໍ່ມີການສຳຜັດ, ການຍອມຈຳນົນ ຫຼື buckling. ຄວາມເຄັ່ງທີ່ໜ້າຍຶດ ແລະ ມຸມແຫຼມຂຶ້ນກັບ mesh. ມັນເປັນເຄື່ອງມືຊ່ວຍກວດ, ບໍ່ໄດ້ຜ່ານການທົບທວນຈາກວິສະວະກອນ.
- ເວລາແອດເຊັມບລີໃຫຍ່ມາຈາກເຊີເວີທີ່ບໍ່ມີ GPU; ເຟຣມລາຍລະອຽດເຕັມຂອງ 20,000 ຊິ້ນສ່ວນຍັງໃຊ້ເວລາເປັນວິນາທີທີ່ນັ້ນ.
- Fillet ເຮັດວຽກກັບຄູ່ໜ້າ; ບໍ່ມີ vertex blend ທົ່ວໄປ ແລະ ບໍ່ມີ fillet ລະຫວ່າງໜ້າທີ່ບໍ່ມາພົບກັນ.
- Rhino link ບໍ່ເຄີຍເຮັດວຽກພາຍໃນ Rhino ຫຼື Grasshopper ຈິງ. Documents ຖືກທົດສອບໂດຍສອງໂປຣແກຣມເທິງໂຟນເດີດຽວ, ບໍ່ແມ່ນໂດຍສອງຄົນເທິງ network share.
- ການປັບພື້ນຜິວໃຫ້ກັບ scan ຈິງ ຍັງບໍ່ໄດ້ຮັບການກວດດ້ວຍມື. ພາສາທີ່ບໍ່ແມ່ນອັງກິດເປັນຮ່າງຈາກເຄື່ອງ.
- ໂປຣແກຣມ installer ຂອງ Windows ບໍ່ໄດ້ code-signed, ແລະ ຮູບ disk image ຂອງ macOS ບໍ່ໄດ້ notarized. ເບິ່ງ [Troubleshooting](topic:troubleshooting).

ການປ່ຽນແປງກ່ອນໜ້າຢູ່ໃນ [What's new in 0.7](topic:whats-new-0-7).

## ກ່ອນໜ້າ: 0.8 ແລະ 0.8.1

ນີ້ແມ່ນສິ່ງທີ່ປ່ຽນໃນ PartCraft 0.8 ແລະ 0.8.1, ທຽບກັບ 0.7. ການຈຳລອງຕອບໃນຂະນະທີ່ທ່ານແກ້ໄຂ ແລະ ບອກວ່າຈະພັງອັນໃດກ່ອນ, ແອດເຊັມບລີໄດ້ການສຶກສາການເຄື່ອນໄຫວ, ແລະ ພື້ນທີ່ເຮັດວຽກໃໝ່ສ້າງພື້ນຜິວໂຄ້ງ ແລະ ຊິ້ນສ່ວນທີ່ມີຂະໜາດຈາກຟີຊິກ. 0.8.1 ເປັນການແກ້ໄຂນ້ອຍ.

### ໃໝ່

**ການຈຳລອງ**

- **Update while I edit.** ໝາຍ {{ui:Update while I edit}} ໃນບລັອກ Solve ແລ້ວຄຳຕອບຈະຕາມການແກ້ໄຂຂອງທ່ານ. ປ່ຽນຂະໜາດ, ແຮງ ຫຼື ວັດສະດຸ ແລະ ຄຳຕອບດ່ວນ, ທີ່ໃຊ້ element ໃຫຍ່ກວ່າສີ່ເທົ່າ, ປາກົດທັນທີ; ເມື່ອທ່ານຢຸດປະມານໜຶ່ງວິນາທີ, ຄຳຕອບທີ່ລະອຽດຂອງການສຶກສາເອງມາແທນທີ່. ຜົນລັບບອກວ່າທ່ານກຳລັງເບິ່ງອັນໃດ. ເທິງຄານ ເຫຼັກຍື່ນ, ຄຳຕອບດ່ວນຢູ່ໃນ 1 % ຂອງການໂກ່ງ ແລະ ປະມານ 4 % ຂອງຄວາມເຄັ່ງ ທຽບກັບອັນລະອຽດ. ເບິ່ງ [Check stress and deflection](topic:simulation#update-while-you-edit-live).
- **What breaks first.** ສຳລັບການສຶກສາສະຖິດ ຫຼື buckling, {{ui:What breaks first?}} ໃນບລັອກ **Break it** ປັບແຮງຈົນຊິ້ນສ່ວນແຕກ. ມັນລາຍການ, ຈາກຮ້າຍແຮງທີ່ສຸດ, ຄ່າ load factor ຈົນຮອດການຍອມຈຳນົນທຳອິດ (ມີເຄື່ອງໝາຍສີແດງບ່ອນຄວາມເຄັ່ງສູງສຸດ) ແລະ ຄ່າ load factor ຈົນຮອດ buckling. factor ຕ່ຳກວ່າ 1 ໝາຍຄວາມວ່າຊິ້ນສ່ວນຍອມແພ້ຢູ່ແລ້ວຕາມທີ່ໂຫຼດ, ແລະ Problems ສະແດງຂໍ້ຜິດພາດ. factor ມາຈາກການສຶກສາແບບເສັ້ນຊື່, ດັ່ງນັ້ນມັນດີເທົ່າກັບການສຶກສານັ້ນ. ເບິ່ງ [Check stress and deflection](topic:simulation#find-out-what-breaks-first-break-it).
- **Yielding and contact.** ປະເພດການສຶກສາເພີ່ມອີກສອງ: ອັນທີ່ບໍ່ເປັນເສັ້ນ ທີ່ວັດສະດຸຕາມເສັ້ນຊື່ຂອງມັນຈົນຮອດຄວາມເຄັ່ງຍອມຈຳນົນ ແລະ ຈາກນັ້ນເປັນຄ່ອຍທີ່ແບນກວ່າ, ພ້ອມ plastic strain ທີ່ຖືກວາດ; ແລະ ອັນການສຳຜັດທີ່ຊິ້ນສ່ວນແຍກກັນດັນກັນ (ບໍ່ມີແຮງສຽດທານ) ຫຼື ຕິດຢູ່ (bonded). ຂັ້ນໂຫຼດທີ່ບໍ່ສາມາດຕົກລົງ, ຫຼື ຊິ້ນສ່ວນທີ່ຈົມເຂົ້າກັນເກີນໄປ, ປາກົດໃນແຜງ Problems. ແຮງສຽດທານ, ການເລື່ອນໃຫຍ່, ການໝຸນໃຫຍ່, ການໂກ່ງໃຫຍ່ ແລະ ຄວາມເມື່ອຍບໍ່ໄດ້ຖືກແກ້. ເບິ່ງ [Check stress and deflection](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Decks for CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} ບັນທຶກການສຶກສາສຳລັບ CalculiX, ໂປຣແກຣມແຍກທີ່ທ່ານຕິດຕັ້ງ ແລະ ແລ່ນເອງ; {{ui:Export}} › {{ui:CalculiX results (.frd)}} ອ່ານໄຟລ໌ຜົນລັບຂອງມັນກັບຄືນໄປໃສ່ mesh ດຽວກັນ. PartCraft ບໍ່ເຄີຍເລີ່ມໂປຣແກຣມນັ້ນ, ແລະ ມັນບອກເມື່ອຊິ້ນສ່ວນປ່ຽນຫຼັງຈາກບັນທຶກ deck.

**ແອດເຊັມບລີ**

- **Motion studies.** {{ui:Assembly}} › {{ui:Motion}} ຂັບຄ່າຂອງ joint ໜຶ່ງຕາມເວລາທີ່ທ່ານໃຫ້ (ຄວາມໄວຄົງທີ່, ຄ່ອຍໆ, sine, ຫຼື ອອກແລ້ວກັບ), ວາງແອດເຊັມບລີໃນແຕ່ລະຂັ້ນດ້ວຍ joint ແລະ ວົງປິດ, ແລະ ລາຍງານວ່າຊິ້ນສ່ວນຊົນກັນຢູ່ໃສ ແລະ ໃກ້ກັນເທົ່າໃດ. {{ui:Add a point}} ວາດຕຳແໜ່ງ, ຄວາມໄວ ແລະ ຄວາມເລັ່ງຂອງຈຸດ, ຄ່າຂອງ joint ແລະ ໄລຍະຫ່າງຕາມເວລາ; {{ui:Save CSV}} ແລະ {{ui:Save plot}} ຂຽນພວກມັນອອກ. ຫຼັງ {{ui:Run}}, ແຖບ Step through the run ຍ້າຍແອດເຊັມບລີໄປຂັ້ນໃດກໍໄດ້. ການຕັ້ງຄ່າການສຶກສາຖືກບັນທຶກໄວ້ໃນໄຟລ໌ແອດເຊັມບລີ. ຄວາມໄວ ແລະ ຄວາມເລັ່ງມາຈາກຕຳແໜ່ງທີ່ບັນທຶກ, ດັ່ງນັ້ນໃຊ້ຂັ້ນຫຼາຍຂຶ້ນຖ້າຈຸດສູງແຫຼມອ່ານໄດ້ຕ່ຳ. ເບິ່ງ [Check an assembly for clashes and motion](topic:check-assembly#a-motion-study).

**ພື້ນຜິວ ແລະ ຊິ້ນສ່ວນຈາກຟີຊິກ**

- **A Surfaces workspace.** ເລືອກ {{ui:Surfaces}} ໃນກ່ອງ {{ui:Workspace}} ສຳລັບເສັ້ນໂຄ້ງ ແລະ ພື້ນຜິວ NURBS ຄຽງຂ້າງຊິ້ນສ່ວນ: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} ແລະ {{ui:Zebra}}, ພ້ອມຄວາມຕໍ່ເນື່ອງ (G0, G1 ຫຼື G2) ທີ່ວັດໃນພື້ນຜິວແທ້ຈິງ ແລະ ຂອບທີ່ແຍ່ກວ່າທີ່ທ່ານຂໍ ຖືກລາຍການໃນ Problems ພ້ອມການແກ້ Match. {{ui:Fair}} ວັດເສັ້ນ hull ຫາການປ່ຽນຈຸດຜ່ານ ແລະ ການກະໂດດຂອງຄວາມໂຄ້ງ ແລະ ສ້າງຄືນອັນທີ່ບໍ່ລຽບ ພາຍໃນຂອບເຂດຂອງທ່ານ. ພື້ນຜິວຖືກບັນທຶກໄວ້ໃນໄຟລ໌ຊິ້ນສ່ວນ ແລະ ບໍ່ປ່ຽນຟີເຈີຂອງຊິ້ນສ່ວນ. ເບິ່ງ [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **The Engineer workspace.** ເລືອກ {{ui:Engineer}} ໃນປຸ່ມສະຫຼັບພື້ນທີ່ເຮັດວຽກ, ເລືອກເຄື່ອງກຳເນີດ ແລະ ຄລິກ {{ui:New}}: ສະຄຣິບປັບຂະໜາດຊິ້ນສ່ວນຈາກສິ່ງທີ່ມັນຕ້ອງເຮັດ (ຄວາມຮ້ອນທີ່ຍ້າຍ, ການໄຫຼ, ຄວາມດັນ, ວັດສະດຸ, ຂະບວນການພິມ) ດ້ວຍສູດຕຳລາ ແລະ ສ້າງມັນ, ຈາກນັ້ນໃຫ້ຕົວເລກທີ່ມັນໃຊ້ພ້ອມແຫຼ່ງຂອງມັນ, ການກວດການຜະລິດ ແລະ ໄຟລ໌ສຳລັບເຄື່ອງມືວິເຄາະ. ປ້ອນເຂົ້າດຽວກັນໃຫ້ຊິ້ນສ່ວນດຽວກັນໃນຄອມພິວເຕີໃດກໍໄດ້. ເຄື່ອງກຳເນີດຖືກເກັບໄວ້ໃນຊິ້ນສ່ວນ, ແລະ ການເປີດຊິ້ນສ່ວນບໍ່ເຄີຍແລ່ນສະຄຣິບ. ເບິ່ງ [Parts from physics: generators](topic:engineer-generators) ແລະ [Write a generator](topic:write-a-generator).

**ການສ້າງ sketch, ແບບແຕ້ມ ແລະ ການຜະລິດ**

- **A sketch from a photo.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} ຕິດຕາມຮູບຂອງຊິ້ນສ່ວນແບນຮາບເທິງພື້ນທີ່ງ່າຍ (ຂອບ ແລະ ຮູ) ຫຼື ແບບແຕ້ມດ້ວຍປາກກາເປັນເສັ້ນ, ອາກ ແລະ ວົງມົນ. ທ່ານໃຫ້ຄວາມຍາວໜຶ່ງ, ກວດ preview ແລ້ວສ້າງ sketch. ເບິ່ງ [Sketching basics](topic:sketch-basics#a-sketch-from-a-photo).
- **Scale and split for printing.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} ປັບຂະໜາດຕາມແກນໂດຍບໍ່ປ່ຽນຊິ້ນສ່ວນ, ຕົວຢ່າງສຳລັບຄ່າການຫົດຕົວ. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} ຕັດຊິ້ນສ່ວນທີ່ໃຫຍ່ເກີນແທ່ນພິມຂອງທ່ານອອກເປັນຊິ້ນທີ່ມີໝາຍເລກ ຕໍ່ກັນດ້ວຍ peg, key, dovetail, ຮູ dowel ຫຼື ຊ່ອງແມ່ເຫຼັກ. ເບິ່ງ [Print in 3D](topic:print-3d).
- **Nested sheets to G-code.** {{ui:Export}} › {{ui:Nested sheets to G-code}} ອ່ານ DXF ທີ່ຈັດວາງແລ້ວ ແລະ ສ້າງໂປຣແກຣມໜຶ່ງຕໍ່ແຜ່ນ ຜ່ານ post ທີ່ທ່ານເລືອກ: ຮູ ແລະ ຮູຕັດອອກກ່ອນ, ແລ້ວຈຶ່ງເປັນຂອບ. ມັນບໍ່ວາງແຜນ lead-in, ລຳດັບການຕັດ ຫຼື ຂອບທີ່ໃຊ້ຮ່ວມກັນ. ເບິ່ງ [Nest flat parts on sheets](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Drawings that do more themselves.** {{ui:Sheet}} › {{ui:Automatic}} ເລືອກແຜ່ນຂະໜາດ A ທີ່ນ້ອຍທີ່ສຸດທີ່ບັນຈຸມຸມມອງໄດ້ໃນມາດຕາສ່ວນມາດຕະຖານທີ່ໃຫຍ່ທີ່ສຸດ ເຖິງ 1:1. {{ui:Dimension the holes}} ໃສ່ເຄື່ອງໝາຍສູນກາງທຸກຮູ, callout ໜຶ່ງອັນຕໍ່ຂະໜາດ ແລະ ຕຳແໜ່ງຈາກມຸມລຸ່ມຊ້າຍຂອງມຸມມອງ. ເບິ່ງ [Make a drawing](topic:drawing-pdf).

**ໃນທຸກແອັບ**

- **Languages.** ແອັບມີ 54 ພາສາ. ພາສາທີ່ນອກເໜືອຈາກອັງກິດເປັນຮ່າງຈາກເຄື່ອງ ຈົນກວ່າເຈົ້າຂອງພາສາແມ່ຈະອ່ານ.
- **Toolbar rows.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ເລືອກ Wrap (ຄືເກົ່າ), 2 ແຖວ ຫຼື 1 ແຖວ; ແຖບທີ່ບໍ່ພໍດີຈະເລື່ອນໄປດ້ານຂ້າງ. ແຖບ Feature ຂອງ PartCraft ສະແດງເຄື່ອງມືທີ່ໃຊ້ຫຼາຍທີ່ສຸດໃຫຍ່, ແລະ ຊ່ອນຕົວແປໄວ້ຫຼັງປຸ່ມແບ່ງ.
- **Connect your AI.** Studio ເປັນຈຸດເຊື່ອມຕໍ່ສຳລັບເຊື່ອມຜູ້ຊ່ວຍ AI ຂອງທ່ານເອງກັບທັງ 8 ແອັບ, ດ້ວຍສິດອ່ານຢ່າງດຽວ, ແນະນຳ ຫຼື ແກ້ໄຂ ສຳລັບແຕ່ລະແອັບ. ຜູ້ຊ່ວຍທີ່ເຊື່ອມແລ້ວສາມາດກຳນົດຂະໜາດຊິ້ນສ່ວນຈາກປະໂຫຍກເຊັ່ນ ຕົວຢຶດສຳລັບແຮງໜຶ່ງ, ສະແດງການຄິດໄລ່ ແລະ ການກວດທຸກອັນ, ແລ້ວສ້າງມັນ; ມັນລາຍງານສິ່ງທີ່ມັນບໍ່ໄດ້ກວດ (ຄວາມເຂັ້ມຂຸ້ນຂອງຄວາມເຄັ່ງ, ຄວາມເມື່ອຍ, ການໄຫຼຊ້າໃນພລາສຕິກ). ເບິ່ງ [Use PartCraft with an AI assistant](topic:use-with-ai-assistants).

### ແກ້ແລ້ວໃນ 0.8.1

- **Full-screen cursor freeze.** ການເລືອກດ້ວຍການວາງເມົາສ໌ຖືກຈຳກັດຄວາມໄວໃນປັດຈຸບັນ. ສາເຫດແມ່ນການອ່ານທີ່ດີທີ່ສຸດຂອງພວກເຮົາ ແລະ ບໍ່ໄດ້ຮັບການຢືນຢັນກັບຄົນທີ່ລາຍງານ.
- **Language at run time.** Studio ແລະ ສະບັບທີ່ແພັກແລ້ວສາມາດປ່ຽນພາສາຂະນະເຮັດວຽກ; ກ່ອນນີ້ມີແຕ່ອັງກິດ. ຍັງບໍ່ໄດ້ທົດສອບກັບທຸກແພລດຟອມ: ບອກພວກເຮົາຖ້າພາສາບໍ່ປ່ຽນ.

### ຍັງບໍ່ມີໃນເວີຊັນນີ້

- Connect your AI ຍັງບໍ່ສຳເລັດ: ການເຊື່ອມດ້ວຍການຄລິກດຽວໃນ Studio, ຕົວເຊື່ອມຕໍ່ທີ່ໂຮດໄວ້ສຳລັບ AI ໃນບຣາວເຊີ, API key ຂອງທ່ານເອງໃນ Studio ແລະ ແພັກເກດ MCP ທີ່ເຜີຍແຜ່ ບໍ່ໄດ້ຖືກສັນຍາ. Studio ບໍ່ມີ AI ຂອງຕົນເອງ.
- Studio ບໍ່ໄດ້ code-signed: Windows ອາດເຕືອນ, macOS ຂໍໃຫ້ຄລິກຂວາແລ້ວ Open. ເບິ່ງ [Troubleshooting](topic:troubleshooting).
- Stack-up ຍັງເປັນທິດທາງດຽວ: ເບິ່ງ [Tolerance stack-ups](topic:tolerance-stackup).
- ສ່ວນທີ່ເຫຼືອຢູ່ໃນ [What is not built yet](topic:not-built-yet).

ການປ່ຽນແປງກ່ອນໜ້າຢູ່ໃນ [What's new in 0.7](topic:whats-new-0-7).
