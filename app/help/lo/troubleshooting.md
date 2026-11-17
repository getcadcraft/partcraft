---
title: ການແກ້ໄຂບັນຫາ
summary: ບັນຫາທີ່ອາດພົບໃນ PartCraft, ຕັ້ງແຕ່ແອັບບໍ່ເປີດ ຈົນເຖິງຟີເຈີລົ້ມເຫຼວ, sketch ທີ່ແກ້ບໍ່ໄດ້, ໄຟລ໌ທີ່ເປີດບໍ່ໄດ້ ແລະ ການເຊື່ອມທີ່ເຮັດວຽກຜິດ, ພ້ອມຂໍ້ຄວາມທີ່ທ່ານເຫັນ ແລະ ວິທີແກ້.
keywords: problem, error, help, not working, fails, failing, crash, blank, webgl, webassembly, kernel, not built, over defined, open profile, cannot open, nothing happens, wrong direction, slow, ບັນຫາ, ຂໍ້ຜິດພາດ, ຊ່ວຍເຫຼືອ, ບໍ່ເຮັດວຽກ, ລົ້ມເຫຼວ, ຢຸດ, ວ່າງເປົ່າ, ຊ້າ
from: 7728542c
---

ເມື່ອບາງຢ່າງບໍ່ເຮັດວຽກ, ໃຫ້ອ່ານ **ແຖບສະຖານະ** ດ້ານລຸ່ມກ່ອນ: PartCraft ບອກຢູ່ນັ້ນວ່າເປັນຫຍັງມັນປະຕິເສດ ຫຼື ມັນຄາດຫວັງຫຍັງຕໍ່ໄປ. ຟີເຈີທີ່ລົ້ມເຫຼວຍັງສະແດງຂໍ້ຄວາມຂອງມັນເທິງສຸດຂອງແຜງຂວາ ແລະ ເມື່ອທ່ານວາງເມົ້າເທິງແຖວໃນປະຫວັດ.

## ແອັບບໍ່ເລີ່ມ

### "This browser cannot show 3D (WebGL is off or missing), so PartCraft cannot run here."

**ສາເຫດ:** ເບຣາວເຊີປິດ, ບລັອກ, ຫຼື ບໍ່ຮອງຮັບກຣາຟິກ 3D (WebGL), ຫຼື ໄດເວີກຣາຟິກບໍ່ຮອງຮັບ.

**ວິທີແກ້:**

:::chromium
ເປີດ `chrome://settings/system` (ຫຼື `edge://settings/system` ໃນ Edge) ແລ້ວເປີດ "Use graphics acceleration when available", ຈາກນັ້ນເປີດເບຣາວເຊີໃໝ່. ຖ້າມັນເປີດຢູ່ແລ້ວ, ກວດ `chrome://gpu` ເພື່ອເບິ່ງສະຖານະ WebGL, ແລະ ອັບເດດໄດເວີກຣາຟິກ.
:::

:::firefox
ເປີດ `about:support` ແລ້ວເບິ່ງ Graphics, WebGL. ຖ້າມັນຖືກບລັອກ, ອັບເດດໄດເວີກຣາຟິກ. ໃນ `about:config`, `webgl.disabled` ຕ້ອງເປັນ `false`.
:::

:::safari
WebGL ເປີດຢູ່ສະເໝີໃນ Safari ລຸ້ນປັດຈຸບັນ. ອັບເດດ macOS (Safari ອັບເດດໄປພ້ອມກັນ). ຖ້າຍັງລົ້ມເຫຼວ, ລອງ Chrome ຫຼື Firefox ໃນ Mac ດຽວກັນ ເພື່ອຕັດອຸປະກອນກຣາຟິກອອກ.
:::

ເດັສທັອບຣະຍະໄກ ແລະ ເຄື່ອງຈຳລອງບາງອັນບໍ່ມີ WebGL. ລອງໃນຄອມພິວເຕີເອງ.

### "The solid kernel did not load: …"

**ສາເຫດ:** ເຄີເນວເລຂາຄະນິດ (ໂປຣແກຣມ WebAssembly) ດາວໂຫຼດ ຫຼື ເລີ່ມບໍ່ໄດ້. ປົກກະຕິແລ້ວການເຊື່ອມຕໍ່ຂາດລະຫວ່າງແອັບໂຫຼດ, WebAssembly ຖືກປິດໂດຍນະໂຍບາຍບໍລິສັດ ຫຼື ການຕັ້ງຄ່າຄວາມປອດໄພຂອງເບຣາວເຊີ, ຫຼື ເບຣາວເຊີເກົ່າຫຼາຍ.

**ວິທີແກ້:** ໂຫຼດໜ້າຄືນໃນຂະນະທີ່ອອນລາຍ. ຖ້າຍັງລົ້ມເຫຼວ, ລອງເບຣາວເຊີປັດຈຸບັນອື່ນ. ໃນ Firefox, `javascript.options.wasm` ໃນ `about:config` ຕ້ອງເປັນ `true`. ອອບໄລນ໌, ແອັບ ແລະ ເຄີເນວຂອງມັນຈະໂຫຼດໄດ້ພຽງແຕ່ເມື່ອແຖບແອັບບອກວ່າ **Offline ready** ກ່ອນທ່ານສູນເສຍການເຊື່ອມຕໍ່ (ກົດ {{ui:Save for offline}} ໃນຂະນະອອນລາຍ; ເບິ່ງ [ເຮັດວຽກແບບອອບໄລນ໌](common:offline)).

### ປຸ່ມອອບໄລນ໌ ບອກວ່າ "Could not save" ຫຼື "Offline not available"

**Could not save**: ບາງໄຟລ໌ບໍ່ໄດ້ດາວໂຫຼດ. ກົດມັນເພື່ອລອງອີກໃນຂະນະອອນລາຍ; ການເຊື່ອມຕໍ່ຊ້າ ຫຼື ມີການຄິດຄ່າບໍລິການອາດຕ້ອງລອງອີກຄັ້ງ. **Offline not available**: ໜ້າຕ່າງເບຣາວເຊີນີ້ບໍ່ສາມາດເກັບສຳເນົາອອບໄລນ໌ໄດ້ (ໜ້າຕ່າງສ່ວນຕົວ ແລະ ຄອມພິວເຕີທີ່ຖືກຈັດການບາງອັນບລັອກມັນ). ໃຊ້ໜ້າຕ່າງປົກກະຕິ, ຫຼື ເປີດແທັບໄວ້.

### PartCraft ອອບໄລນ໌ ແຕ່ລ້າສະໄໝ

ກົດ **Offline ready** ໃນຂະນະອອນລາຍ ແລ້ວເລືອກ {{ui:Save again (get the newest version)}}.

### "Sweep: not built yet. It needs an exact kernel, …"

ຂໍ້ຄວາມເຕັມແມ່ນ "<Name>: not built yet. It needs an exact kernel, which this version of PartCraft does not have. Help › What is not built yet says what to do instead." ທ່ານຈະເຫັນມັນເມື່ອເລືອກ Sweep, Loft, Rib, flange ແຜ່ນໂລຫະ, ຟີເຈີພື້ນຜິວ, Combine, Move body, Scale body ຫຼື Path pattern, ແລະ ສຳລັບສິ່ງອື່ນທີ່ມີແຕ່ເຄີເນວທີ່ແນ່ນອນເທົ່ານັ້ນສ້າງໄດ້. ບໍ່ມີຫຍັງຜິດກັບເບຣາວເຊີ ຫຼື ຊິ້ນສ່ວນຂອງທ່ານ: PartCraft ເວີຊັນນີ້ສ້າງທຸກຊິ້ນສ່ວນດ້ວຍເຄີເນວ mesh. ເບິ່ງ [ຍັງບໍ່ໄດ້ສ້າງ](topic:not-built-yet) ສຳລັບສິ່ງທີ່ຕ້ອງເຮັດແທນ, ແລະ [ເຄີເນວ mesh](topic:solid-kernels).

### "Loading the solid kernel…" ບໍ່ເຄີຍຫາຍໄປ

ລໍຖ້າໜ້ອຍໜຶ່ງໃນການເຊື່ອມຕໍ່ທີ່ຊ້າ: ເຄີເນວ ແລະ ໄລບຣາຣີ 3D ຖືກດາວໂຫຼດຄັ້ງທຳອິດ. ຈາກນັ້ນໂຫຼດຄືນ. ຖ້າໜ້າເອງສະແດງຂໍ້ຜິດພາດ, ເບິ່ງຂ້າງເທິງ.

## ບໍ່ມີຫຍັງເກີດຂຶ້ນເມື່ອກົດປຸ່ມ

- ປຸ່ມບໍ່ເຮັດວຽກເມື່ອເຄີເຊີຢູ່ໃນກ່ອງໃນແຜງ. ຄລິກໃນມຸມມອງ 3D ຫຼື ກົດ {{key:Esc}} ຫຼັງພິມ (ຫຼື {{key:Tab}} ເພື່ອອອກ).
- ປຸ່ມລູກສອນ ແລະ {{key:Plus}}/{{key:Minus}} ໝຸນ ແລະ ຊູມມຸມມອງເທົ່ານັ້ນ ຫຼັງຈາກທ່ານຄລິກໃນມຸມມອງ.
- ມີກ່ອງໂຕ້ຕອບເປີດຢູ່: ຕອບມັນກ່ອນ.
- ໃນ sketch, {{key:F}} ແມ່ນເຄື່ອງມື Fillet, ບໍ່ແມ່ນ Fit. ໃຊ້ປຸ່ມ {{ui:Fit}}.

## ປຸ່ມແຖບເຄື່ອງມືເປັນສີເທົາ

- ປຸ່ມຟີເຈີຖືກເຮັດເປັນສີເທົາໃນຂະນະທີ່ sketch ເປີດຢູ່. ປິດ sketch ກ່ອນ.
- ເຄື່ອງມື sketch ໃຊ້ໄດ້ພຽງແຕ່ພາຍໃນ sketch.
- {{ui:Undo}} ແລະ {{ui:Redo}} ເປັນສີເທົາເມື່ອບໍ່ມີຫຍັງໃຫ້ຍ້ອນກັບ ຫຼື ເຮັດຊ້ຳ.
- {{ui:Assembly}} ຕ້ອງການຊິ້ນສ່ວນທີ່ມີ solid. {{ui:Joint}} ຕ້ອງການສອງຊິ້ນສ່ວນໃນການປະກອບ. {{ui:Edit part}} ຕ້ອງການຊິ້ນສ່ວນທີ່ເລືອກ.
- {{ui:STEP AP242 (exact solid)}} ແລະ {{ui:STEP AP214 (exact solid)}} ເປັນສີເທົາໃນການປະກອບ: ສົ່ງອອກແຕ່ລະຊິ້ນສ່ວນ. ໂປຣແກຣມອື່ນປະຕິເສດໄຟລ໌ແນ່ນອນ: ລອງ {{ui:STEP AP214 (exact solid)}}, ຈາກນັ້ນ {{ui:STEP (faceted, mesh kernel)}}, ແລ້ວບອກພວກເຮົາຜ່ານ {{ui:Help}} › {{ui:Report a problem}}.
- {{ui:Sweep}}, {{ui:Loft}} ແລະ ຟີເຈີອື່ນທີ່ຕ້ອງການເຄີເນວທີ່ແນ່ນອນ ບໍ່ເປັນສີເທົາ: ພວກມັນຍັງກົດໄດ້, ຄຳອະທິບາຍຂອງພວກມັນຈົບດ້ວຍ "not built yet (needs an exact kernel)", ແລະ ການກົດໃສ່ໜຶ່ງຈະບອກໃນແຖບສະຖານະ. ເບິ່ງ [ຍັງບໍ່ໄດ້ສ້າງ](topic:not-built-yet).
- {{ui:Drawing}} ຕ້ອງການຊິ້ນສ່ວນທີ່ມີ solid, ແລະ ເປັນສີເທົາໃນຂະນະທີ່ sketch ເປີດຢູ່.
- ລາຍການ {{ui:Export}} ເປັນສີເທົາໃນການປະກອບ: ການປະກອບຍັງບໍ່ສາມາດສົ່ງອອກໄດ້. ປິດມັນ, ຫຼື ແກ້ໄຂຊິ້ນສ່ວນ, ເພື່ອສົ່ງອອກ.

## ບັນຫາ sketch

### Sketch ບໍ່ໃຫ້ເພີ່ມຄວາມສຳພັນ

"No relation fits this selection. Select one or two items (Shift+click adds)." ຄວາມສຳພັນຕ້ອງການການເລືອກອື່ນ. ເບິ່ງ [ຄວາມສຳພັນ ແລະ ຂະໜາດຂອງ sketch](topic:sketch-relations) ສຳລັບສິ່ງທີ່ແຕ່ລະອັນຕ້ອງການ.

### "Over defined: … cannot all be met. Undo, or delete one of them."

**ສາເຫດ:** ຄວາມສຳພັນ ຫຼື ຂະໜາດໃໝ່ຂັດກັບອັນທີ່ມີຢູ່ແລ້ວ. Sketch ບໍ່ໄດ້ຍ້າຍ.

**ວິທີແກ້:** {{key:Mod+Z}}, ຫຼື ລຶບໜຶ່ງໃນລາຍການສີແດງໃນແຜງຂວາ (ເລືອກ **Delete** ຂ້າງມັນ).

### "Over defined: … is already implied. Delete it."

**ສາເຫດ:** ຄວາມສຳພັນນີ້ບໍ່ເພີ່ມຫຍັງ: ອັນອື່ນບັງຄັບມັນຢູ່ແລ້ວ (ຕົວຢ່າງ Parallel ໃນສອງດ້ານຂອງສີ່ຫຼ່ຽມ, ຫຼື ຂະໜາດທີ່ຖືກກຳນົດແລ້ວ). ໃນເວີຊັນນີ້ບໍ່ມີຂະໜາດທີ່ຂັບເຄື່ອນ.

**ວິທີແກ້:** ລຶບມັນ. ຟີເຈີຈະສ້າງຕໍ່ໄປດ້ວຍການເຕືອນ.

### "Those items cannot be dimensioned together."

ທ່ານຄລິກ, ຕົວຢ່າງ, ຈຸດ ແລະ ວົງມົນ. ໃຫ້ກຳນົດຂະໜາດໄປຫາຈຸດກາງຂອງວົງມົນແທນ.

### "A fillet needs a corner where exactly two lines meet." / "That radius is too big for these lines."

ຄລິກໃຫ້ພໍດີກັບຈຸດມຸມຂອງສອງເສັ້ນແຂງ. ໃຊ້ລັດສະໝີທີ່ນ້ອຍກວ່າທີ່ເສັ້ນສັ້ນກວ່າອະນຸຍາດ.

### ເລຂາຄະນິດກະໂດດກັບຄືນເມື່ອທ່ານລາກມັນ

ການລາກຈະທຳລາຍຄວາມສຳພັນ ຫຼື ຂະໜາດ, ດັ່ງນັ້ນ PartCraft ໃສ່ມັນກັບຄືນ. ມີແຕ່ເລຂາຄະນິດສີຟ້າ (ກຳນົດບໍ່ສົມບູນ) ທີ່ຍ້າຍໄດ້.

### "This sketch cannot open: Needs Extrude2, which is failing."

Sketch ຢູ່ເທິງໜ້າຂອງຟີເຈີທີ່ບໍ່ໄດ້ສ້າງ. ແກ້ຟີເຈີນັ້ນກ່ອນ, ຫຼື ຍົກເລີກການລະງັບ, ຫຼື roll forward.

## ບັນຫາຟີເຈີ

| ຂໍ້ຄວາມ | ສາເຫດ | ວິທີແກ້ |
|---|---|---|
| "Make a sketch first: pick a plane, Sketch, draw a closed profile, Exit." | ບໍ່ມີ sketch ທີ່ບໍ່ໄດ້ໃຊ້ທີ່ມີເສັ້ນໂຄ້ງ, ແລະ ບໍ່ໄດ້ເລືອກອັນໃດ | ແຕ້ມ sketch, ຫຼື ເລືອກ sketch ທີ່ຈະໃຊ້ໃນປະຫວັດ |
| "The sketch has no closed profile to extrude." (ຫຼື "to revolve") | ບໍ່ມີ loop ປິດຂອງເສັ້ນແຂງ | ປິດຊ່ອງຫວ່າງ; ປ່ຽນເສັ້ນກໍ່ສ້າງກັບຄືນດ້ວຍ {{key:Q}} |
| "The profile is open: an end at (x, y) is not joined to anything." | ຊ່ອງຫວ່າງຢູ່ຈຸດນັ້ນ | ເປີດ sketch, ລາກປາຍໄປຫາເພື່ອນບ້ານເພື່ອໃຫ້ມັນດູດ |
| "The profile branches at (x, y): more than two ends meet there." | ສາມເສັ້ນຂຶ້ນໄປຫາຈຸດດຽວ | ລຶບເສັ້ນທີ່ເກີນ, ຫຼື ປ່ຽນເປັນກໍ່ສ້າງ |
| "A closed loop needs at least three sides or a curve." | ສອງເສັ້ນໄປມາ | ແຕ້ມ loop ໃໝ່ |
| "Through all is for cuts. Use a depth for a boss." | Boss ຕັ້ງເປັນ Through all | ຕັ້ງ End ເປັນ Blind ຫຼື Mid-plane |
| "There is nothing to cut on that side of the sketch. Try the other direction." | ການຕັດຊີ້ອອກຈາກວັດສະດຸ | ໝາຍ Reverse direction |
| "There is nothing to cut yet." / "There is nothing to drill yet." | ບໍ່ມີ solid ກ່ອນຟີເຈີນີ້ | ສ້າງ boss ກ່ອນ, ຫຼື ຍ້າຍຟີເຈີລົງ |
| "Draw a centerline (a construction line) in the sketch to revolve about." | Revolve ໂດຍບໍ່ມີແກນ | ເພີ່ມເສັ້ນກາງ, ຫຼື ເລືອກເສັ້ນໃນ Axis |
| "The profile crosses the axis. Keep it on one side of the centerline." | ໂປຣໄຟລ໌ຢູ່ທັງສອງດ້ານຂອງແກນ | ແຕ້ມຄືນເຄິ່ງໜຶ່ງຂອງໂປຣໄຟລ໌ |
| "Put sketch points where the holes go (Point tool), then make the hole." | ບໍ່ມີຈຸດອິດສະຫຼະໃນ sketch | ເພີ່ມຈຸດດ້ວຍ {{key:P}} |
| "The counterbore must be wider than the hole." | ⌀ ຂອງ counterbore ບໍ່ໃຫຍ່ກວ່າ Diameter | ເຮັດ counterbore ໃຫ້ກວ້າງກວ່າ |
| "The counterbore must be shallower than the hole." | Counterbore ເລິກກວ່າຮູ blind | ເຮັດໃຫ້ຕື້ນກວ່າ, ຫຼື ເຮັດຮູໃຫ້ເລິກກວ່າ |
| "Choose the features to copy." | Pattern ຫຼື mirror ທີ່ບໍ່ໄດ້ໝາຍອັນໃດ | ໝາຍຟີເຈີໃນ Features to copy |
| "Extrude2 has no solid to copy." | ຟີເຈີທີ່ຈະຄັດລອກລົ້ມເຫຼວ ຫຼື ປິດ | ແກ້ ຫຼື ຍົກເລີກການລະງັບມັນ |
| "Needs Sketch3, which is failing." | ຟີເຈີທີ່ມັນຂຶ້ນກັບບໍ່ໄດ້ສ້າງ | ແກ້ຟີເຈີທີ່ຊື່ໄວ້ |
| "The face it sits on is gone (Extrude1 is not built)." | ໜ້າຂອງ sketch ບໍ່ມີແລ້ວ | ແກ້ຟີເຈີນັ້ນ, ຫຼື ລຶບ sketch ແລ້ວແຕ້ມໃໝ່ |
| "Nothing is left of the part after this." | ການຕັດເອົາວັດສະດຸທັງໝົດອອກ | ກວດຂະໜາດ ແລະ ທິດທາງຂອງການຕັດ |
| "The solid kernel could not build this (…)." ຫຼື "The solid kernel could not combine this with the body." | ເຄີເນວປະຕິເສດເລຂາຄະນິດ | ຍົກເລີກ, ຫຼື ປ່ຽນຂະໜາດເລັກນ້ອຍ; ໜ້າທີ່ສຳຜັດກັນພໍດີອາດເຮັດໃຫ້ເກີດສິ່ງນີ້ |
| "Sweep: not built yet. It needs an exact kernel, which this version of PartCraft does not have." (ແລະ Loft, Rib ແລະອື່ນໆ) | ຟີເຈີທີ່ສ້າງໃນເວີຊັນກ່ອນ ທີ່ມີແຕ່ເຄີເນວທີ່ແນ່ນອນເທົ່ານັ້ນສ້າງໄດ້. ມັນຢູ່ໃນປະຫວັດ ແລະ ຖືກບັນທຶກກັບຄືນໂດຍບໍ່ປ່ຽນ | ລະງັບ ຫຼື ລຶບມັນ; ເບິ່ງ [ຍັງບໍ່ໄດ້ສ້າງ](topic:not-built-yet) ສຳລັບສິ່ງທີ່ຕ້ອງເຮັດແທນ |
| "A 5 mm round does not fit here (…)." / "A 2 mm chamfer …" | ຂະໜາດໃຫຍ່ເກີນໄປສຳລັບໜ້າຂ້າງຂອບ, ຫຼື ມຸມບໍ່ສາມາດປະສົມໄດ້ | ຂະໜາດນ້ອຍກວ່າ, ຫຼື ຂອບໜ້ອຍກວ່າຕໍ່ຟີເຈີ |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (ແລະ Chamfer) | ຂອບທີ່ເລືອກເປັນວົງ ເຊັ່ນຂອບຂອງຮູ, ຫຼື ຢູ່ເທິງໜ້າໂຄ້ງ | {{ui:Pick edges}} ແລ້ວລຶບມັນ; ມົນ ຫຼື ຕັດມຸມຂອງມຸມນັ້ນໃນ sketch ແທນ |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." | ເລືອກ **Variable radius** ໄວ້ | ເອົາອອກ ແລ້ວໃສ່ລັດສະໝີດຽວ |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠, ການເຕືອນ) | ຂອບທີ່ເລືອກມາພົບກັນທີ່ມຸມ; ການມົນພົບກັນເປັນຮອຍພັບແຫຼມ | ບໍ່ມີຫຍັງຕ້ອງແກ້: ຊິ້ນສ່ວນຖືກສ້າງແລ້ວ. ມົນຂອບໜ້ອຍລົງ ຖ້າຮອຍພັບສຳຄັນ |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." | ການປ່ຽນແປງກ່ອນໜ້າໄດ້ເອົາຂອບອອກ | {{ui:Pick edges}}, ລຶບຂອບສີແດງ, ແລ້ວເລືອກອັນໃໝ່ |
| "Pick the edges in the view, then add them." | ການມົນ ຫຼື ຕັດມຸມບໍ່ມີຂອບ | {{ui:Pick edges}} |
| "Pick the faces to remove (open), then shell." | Shell ບໍ່ມີໜ້າເປີດ | {{ui:Pick faces}} |
| "The shell could not be made with this thickness (…)." | ຝາໜາກວ່າສ່ວນບາງຂອງໂມເດວ ຫຼື ລັດສະໝີມົນ | ຝາບາງກວ່າ, ຫຼື ມົນໃຫຍ່ກວ່າ |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." | ໜ້າເປີດເປັນໂຄ້ງ | {{ui:Pick faces}} ແລ້ວລຶບມັນ; ເປີດສະເພາະໜ້າລຽບ |
| "Draft: in this version flat faces only (the mesh kernel builds it)." | ໜ້າທີ່ໃສ່ມຸມລາດເປັນຮູບກະບອກ, ກຣວຍ ຫຼື ໜ້າອິດສະຫຼະ | ລຶບມັນ; ໃສ່ມຸມລາດສະເພາະໜ້າລຽບ |
| "A face it opens is gone (…)." | ການປ່ຽນແປງກ່ອນໜ້າໄດ້ເອົາໜ້າອອກ | {{ui:Pick faces}} ອີກຄັ້ງ |
| "Fillet1 changes the body's edges or walls; it cannot be copied. …" | Pattern ຫຼື mirror ຄັດລອກ fillet, chamfer ຫຼື shell | ຍົກເລີກການໝາຍ; pattern ການຕັດກ່ອນ, ແລ້ວຈຶ່ງ fillet |
| "It sits on a face only an exact kernel can find: not built yet in this version." | Sketch ຢູ່ໜ້າທີ່ເຄີເນວ mesh ຊອກບໍ່ເຫັນ, ເຊັ່ນໜ້າທີ່ສ້າງໃນເວີຊັນກ່ອນ | ແຕ້ມ sketch ເທິງລະນາບພື້ນຖານ ຫຼື ໜ້າລຽບຂອງ extrude, ແລ້ວຈັດຕຳແໜ່ງດ້ວຍຂະໜາດ |
| "It uses a face or edge of the solid, which only an exact kernel can find: not built yet in this version." | ລະນາບ, ແກນ ຫຼື ຈຸດອ້າງອີງຢູ່ໜ້າ ຫຼື ຂອບຂອງ solid | ສ້າງມັນຈາກລະນາບພື້ນຖານ, ຈຸດ sketch ຫຼື ພິກັດແທນ |
| "Extruding up to a face, the next face or a vertex: not built yet (it needs an exact kernel)." / "A taper: not built yet (it needs an exact kernel)." | ເງື່ອນໄຂສິ້ນສຸດ ຫຼື ການເອຽງທີ່ມີແຕ່ເຄີເນວທີ່ແນ່ນອນສ້າງໄດ້ | ໃຊ້ຄວາມເລິກ Blind ຫຼື Mid-plane ທີ່ທ່ານວັດເອງ; ປ່ອຍ Taper ເປັນ 0 |

## ບັນຫາການເລືອກ

- "That face is curved. Pick a flat face or a plane to sketch on." Sketch ຕ້ອງການໜ້າລຽບ. ແຕ້ມ sketch ເທິງລະນາບພື້ນຖານ ແລ້ວຈັດຕຳແໜ່ງ sketch ດ້ວຍຂະໜາດແທນ.
- ໜ້າທີ່ບອກວ່າ "Fixed where picked": ມັນບໍ່ໄດ້ຖືກສ້າງຈາກຂອບ sketch (ຕົວຢ່າງ ໜ້າຂອງສຳເນົາ pattern), ດັ່ງນັ້ນ sketch ເທິງມັນຢູ່ຄົງທີ່ເມື່ອຊິ້ນສ່ວນປ່ຽນແປງ.
- ຂອບເລືອກຍາກ: ຊູມເຂົ້າ. ຂອບຊະນະໜ້າທີ່ຢູ່ຕິດກັນ ເມື່ອຕົວຊີ້ຢູ່ເທິງມັນພໍດີ.

## ບັນຫາໄຟລ໌

| ຂໍ້ຄວາມ | ວິທີແກ້ |
|---|---|
| 'PartCraft opens its own .partcraft.json files, exports from the CadCraft macro for SolidWorks (.cadcraft-sw.json) and STEP files. "bracket.igs" is none of these.' | ມີແຕ່ໄຟລ໌ເຫຼົ່ານັ້ນທີ່ຖືກຮັບຮູ້ (ແລະ mesh STL, OBJ ແລະ 3MF ແລະ ໄຟລ໌ `.3dm`) |
| '"part.stp" is not a STEP file (it does not start with ISO-10303-21).' | ໄຟລ໌ບໍ່ແມ່ນຂໍ້ຄວາມ STEP |
| "That STEP file is too big (over 60 MB) to import here." | ເຮັດໃຫ້ງ່າຍຂຶ້ນທີ່ແຫຼ່ງ |
| "That file is too big to be a PartCraft part." ໃນໄຟລ໌ຊິ້ນສ່ວນທີ່ທ່ານບັນທຶກເອງ | solid STEP ໃຫຍ່ທີ່ນຳເຂົ້າໃນເວີຊັນກ່ອນ ເຮັດໃຫ້ໄຟລ໌ເກີນ 50 MB. ໃຊ້ສຳເນົາກ່ອນໜ້າທີ່ບໍ່ມີມັນ |
| "That file is too big to be a PartCraft part." | ໄຟລ໌ເກີນ 50 MB; ມັນບໍ່ແມ່ນໄຟລ໌ PartCraft |
| "This is not a PartCraft file (it is not JSON)." / "This is not a PartCraft file." | ໄຟລ໌ເສຍ ຫຼື ເປັນຂອງໂປຣແກຣມອື່ນ |
| "This file was saved by a newer PartCraft (file version …); this one reads version …" | ເປີດມັນໃນ PartCraft ທີ່ໃໝ່ກວ່າ |
| "Extrude2: the depth is bad." (ຫຼື ຄ່າອື່ນ) | ໄຟລ໌ຖືກແກ້ດ້ວຍມື ຫຼື ເສຍ. ໃຊ້ສຳເນົາກ່ອນໜ້າ |
| Insert ໃນການປະກອບ ບອກວ່າ "Part1.partcraft.json has no solid to insert." | ໄຟລ໌ຊິ້ນສ່ວນບໍ່ມີ solid. ເປີດມັນ, ສ້າງ solid, ບັນທຶກ, ແລ້ວ insert ອີກຄັ້ງ |

**ໄຟລ໌ທີ່ບັນທຶກຂອງຂ້ອຍບໍ່ຢູ່ບ່ອນທີ່ຄາດໄວ້.** ການບັນທຶກແມ່ນການດາວໂຫຼດ: ເບິ່ງໃນໂຟນເດີດາວໂຫຼດຂອງເບຣາວເຊີ, ຫຼື ເປີດລາຍການດາວໂຫຼດຈາກແຖບເຄື່ອງມືຂອງເບຣາວເຊີ. ເບິ່ງ [ໄຟລ໌ຂອງທ່ານໄປໄວ້ໃສ](common:your-files).

**ຂ້ອຍເປີດຊິ້ນສ່ວນແລ້ວ ແຕ່ການປະກອບຍັງຢູ່ເທິງໜ້າຈໍ.** ຊິ້ນສ່ວນໂຫຼດຢູ່ດ້ານຫຼັງການປະກອບ. ເລືອກ {{ui:Close}} ເພື່ອປິດການປະກອບ ແລະ ເບິ່ງຊິ້ນສ່ວນ. ປິດການປະກອບກ່ອນເປີດໄຟລ໌ຊິ້ນສ່ວນ.

## ບັນຫາແບບແຜນ

| ຂໍ້ຄວາມ | ວິທີແກ້ |
|---|---|
| "Build a solid first, then make its drawing." | ສ້າງຊິ້ນສ່ວນກ່ອນ |
| "No room on the sheet for: detail. Make the detail smaller or drop a view." | **Detail radius** ຫຼື **Detail scale** ນ້ອຍລົງ, ຫຼື ເອົາພາກຕັດອອກ |
| "A detail is taken from the front, top, right or section view." | ຄລິກໃສ່ໜຶ່ງໃນມຸມມອງເຫຼົ່ານັ້ນ |
| "Click on one of the views." | ການຄລິກຢູ່ເທິງເຈ້ຍວ່າງ |
| "Position needs at least one datum reference." ແລະ ຂໍ້ຄວາມກອບອື່ນ | ຕັ້ງ datum ທີ່ແຜງຖາມ, ຫຼື ເລືອກລັກສະນະອື່ນ |
| "The drawing views could not be made: …" | ຍົກເລີກການປ່ຽນແປງຄັ້ງສຸດທ້າຍ. ຖ້າຍັງເກີດຂຶ້ນ, ບັນທຶກ, ໂຫຼດໃໝ່ ແລະ ເປີດຊິ້ນສ່ວນຄືນ |

## ບັນຫາການປະກອບ

| ຂໍ້ຄວາມ | ວິທີແກ້ |
|---|---|
| "Build a solid first, then put it into an assembly." | ຊິ້ນສ່ວນຍັງບໍ່ມີ solid |
| "Insert a second part first (Add copy, Insert, or Edit › Duplicate)." | Joint ຕ້ອງການສອງຊິ້ນສ່ວນ |
| "Pick a face on a different part." | ໜ້າທັງສອງຂອງ joint ຕ້ອງຢູ່ຄົນລະຊິ້ນສ່ວນ |
| "That face is curved. Pick a flat face …" | Joint ເລີ່ມຈາກໜ້າລຽບ. ຈາກນັ້ນໃຊ້ **Centre on** ສຳລັບຮູ ຫຼື ແກນ revolve |
| "Bracket2 is not joined to the grounded part, so it stays where it was put." | ເພີ່ມ joint ຈາກມັນໄປຫາຊິ້ນສ່ວນທີ່ວາງແລ້ວ |
| "Revolute3 closes a loop that cannot close: it is off by 2.000 mm. Check the faces, offsets and limits of the loop's joints." | ຊິ້ນສ່ວນບໍ່ສາມາດພົບກັນໄດ້ທັງໝົດ: ກວດຄວາມຍາວ, ໜ້າທີ່ແຕ່ລະ joint ໃຊ້, offset (ຊິ້ນສ່ວນທີ່ວາງຊ້ອນໜ້າຕໍ່ໜ້າຕ້ອງຕົກລົງກັນໃນຄວາມເລິກ) ແລະ ຂີດຈຳກັດ; ຫຼື ລຶບ joint ໜຶ່ງຂອງວົງ |
| "The face this joint uses is gone from Bracket." / "The axis this joint uses is gone from Bracket." | ຊິ້ນສ່ວນຖືກແກ້ໄຂ. ລຶບ joint ແລ້ວສ້າງໃໝ່ |
| "The axis runs along the face, so it cannot set the joint's centre." | ເລືອກແກນທີ່ຕັດໜ້າ, ຫຼື "The face's own origin" |
| "An assembly keeps at least one part. Close it instead." | ໃຊ້ {{ui:Close}} |

**ຊິ້ນສ່ວນຕິດກັນແລ້ວ ແຕ່ຢູ່ຜິດບ່ອນ.** ຕັ້ງ **Centre on** ສຳລັບທັງສອງດ້ານຂອງ joint ໃຫ້ເປັນແກນຮູ ຫຼື revolve ທີ່ຄວນຈະຈັດແຖວກັນ, ແລ້ວປັບ **Angle (°)** ແລະ **Offset (mm)**.

## ມັນຊ້າ

- ຕັ້ງ **Curves** ເປັນ Normal ຫຼື Coarse ໃນຂະນະສ້າງແບບ; ປ່ຽນເປັນ Fine ກ່ອນສົ່ງອອກ.
- ຈຳນວນ pattern ໃຫຍ່ (ຫຼາຍຮ້ອຍສຳເນົາ) ໃຊ້ເວລາສ້າງໃໝ່ທຸກຄັ້ງທີ່ປ່ຽນ. ລະງັບ pattern ໃນຂະນະທີ່ທ່ານເຮັດວຽກກັບຟີເຈີອື່ນ.
- Clash ແລະ ການກວດການເຄື່ອນໄຫວ ປຽບທຽບທຸກຄູ່ຊິ້ນສ່ວນ; ການປະກອບໃຫຍ່ໃຊ້ເວລານານກວ່າ.
- ປິດແທັບໜັກອື່ນໆ. PartCraft ເຮັດວຽກດ້ວຍໂປຣເຊດເຊີ ແລະ ກຣາຟິກຂອງຄອມພິວເຕີຂອງທ່ານເອງ.

## ຍັງຕິດຢູ່

ບັນທຶກໄຟລ໌ຂອງທ່ານກ່ອນ ({{key:Mod+S}}), ຈາກນັ້ນໂຫຼດໜ້າຄືນ ແລະ ເປີດມັນອີກຄັ້ງ. ຖ້າຟີເຈີຍັງລົ້ມເຫຼວ, ເລືອກມັນ, ອ່ານຂໍ້ຄວາມຂອງມັນ, ແລະ ລອງ {{key:Mod+Z}} ກັບຄືນໄປສະຖານະທີ່ດີຄັ້ງສຸດທ້າຍ.
