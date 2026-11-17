---
title: ຄັງວິສະວະກຳ
summary: ສູດຕຳລາເປັນສະຄຣິບທີ່ອ່ານໄດ້, ໃນຫົວໜ່ວຍ SI, ທຸກຜົນລັບພ້ອມແຫຼ່ງ: ການໄຫຼໃນທໍ່ ແລະ ຊ່ອງ, ການຖ່າຍເທຄວາມຮ້ອນ ແລະ heat exchanger, ຊິ້ນສ່ວນຄວາມດັນ, gas dynamics, ຄຸນສົມບັດຂອງນ້ຳ ແລະ ອາກາດ, ວັດສະດຸ, ແລະ ຫົວໜ່ວຍທີ່ຖືກກວດ. ແຕ່ລະອັນໃຊ້ເຮັດຫຍັງ ແລະ ຈຸດຢຸດຂອງມັນຢູ່ໃສ.
keywords: engineering, library, units, Darcy-Weisbach, Colebrook, Reynolds, friction factor, Dittus-Boelter, Gnielinski, NTU, effectiveness, LMTD, fin, Barlow, Lame, nozzle, isentropic, Mach, choked flow, water, air, properties, material, sources, ວິສະວະກຳ, ຄັງ, ຫົວໜ່ວຍ, ສູດ, Reynolds, ຄ່າຄວາມຕ້ານທານ, ແຫຼ່ງ, ນ້ຳ, ອາກາດ, ຄຸນສົມບັດ, ວັດສະດຸ
from: 786ef967
---

ຄັງວິສະວະກຳແມ່ນຊຸດສະຄຣິບໃນຄັງຂອງ Script workspace (`craftlib/eng`). ແຕ່ລະອັນເປັນ function ທີ່ທ່ານອ່ານໄດ້ຈາກເທິງຮອດລຸ່ມ, ມີ header ທີ່ໃຫ້ **ວິທີການ** ຂອງມັນ, **ຫົວໜ່ວຍ**, **ຂີດຈຳກັດ**, **ເອກະສານອ້າງອີງ** ແລະ **ການກວດ** ພ້ອມຕົວເລກທີ່ເຮັດແລ້ວ. ພວກມັນໃຊ້ຫົວໜ່ວຍ SI ທັງໝົດ ແລະ ສົ່ງຜົນລັບທີ່ມີ **ຫົວໜ່ວຍ** ແລະ **ແຫຼ່ງ**, ດັ່ງນັ້ນແຜ່ນຂໍ້ມູນສາມາດພິມວ່າແຕ່ລະຕົວເລກມາຈາກໃສ.

## ຫົວໜ່ວຍທີ່ຖືກກວດ

`to_si(10, 'bar', 'Pa')` ປ່ຽນຄ່າ ແລະ ປະຕິເສດຫົວໜ່ວຍທີ່ວັດສິ່ງອື່ນ (ຄວາມຍາວໃນບ່ອນທີ່ຄາດວ່າຈະເປັນຄວາມດັນ). `from_si`, `unit_convert(1, 'bar', 'psi')` ແລະ `unit_kind('W/(m K)')` ("thermal conductivity") ເຮັດວຽກແບບດຽວກັນ. `temp_k(25, 'C')` ແລະ `temp_from_k` ປ່ຽນອຸນຫະພູມ, ເຊິ່ງມີ offset.

## ຄຸນສົມບັດ

- `fluid('water', T)` ແລະ `fluid('air', T, p)`: ຄວາມໜາແໜ້ນ, ຄວາມໜືດ, ການນຳ, ຄວາມຮ້ອນຈຳເພາະ, ຈຳນວນ Prandtl. ນ້ຳ 0 ຫາ 100 °C, ອາກາດ 250 ຫາ 600 K; ນອກຊ່ວງນັ້ນມັນຢຸດແທນທີ່ຈະຂະຫຍາຍ.
- `material('ss304')`: ໂມດູລັສຂອງ Young, ອັດຕາສ່ວນ Poisson, ຄວາມໜາແໜ້ນ, yield, ການນຳ, ຄວາມຮ້ອນຈຳເພາະ, ການຂະຫຍາຍຕົວ: ຄ່າທີ່ອຸນຫະພູມຫ້ອງຈາກແຜ່ນຂໍ້ມູນດຽວກັນກັບ Simulation. ການອອກແບບຈິງໃຊ້ຕົວເລກທີ່ຢັ້ງຢືນຂອງຜູ້ສະໜອງ. ເສັ້ນໂຄ້ງອຸນຫະພູມຍັງບໍ່ໄດ້ສ້າງ.

## ການໄຫຼໃນທໍ່ ແລະ ຊ່ອງ

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, ຈາກນັ້ນສົມຜົນ Colebrook ສຳລັບ turbulent; ຊ່ວງ 2300 ຫາ 4000 ບໍ່ມີສູດທີ່ເຊື່ອຖືໄດ້ ແລະ ມັນບອກແບບນັ້ນ), `darcy_weisbach`, `minor_loss`, `pipe_flow` (ທໍ່ກົມ, ທຸກຢ່າງພ້ອມກັນ) ແລະ `rect_channel` (ຊ່ອງສີ່ຫຼ່ຽມ laminar ດ້ວຍສູດ Shah ແລະ London).

## ການຖ່າຍເທຄວາມຮ້ອນ

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (ເລືອກ laminar ຫຼື turbulent ແລະ ລະບຸ correlation), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` ແລະ `ntu_for` (ສົມຜົນ effectiveness-NTU ສຳລັບ counterflow, parallel, shell-and-tube, crossflow ແລະ ສາຍດຽວທີ່ປ່ຽນ) ແລະ `hx_size` (ຂະໜາດ UA ທີ່ duty ຕ້ອງການ; ມັນບອກວ່າເປັນໄປໄດ້ຫຼາຍປານໃດເມື່ອ duty ບໍ່ສາມາດບັນລຸໄດ້).

## ຊິ້ນສ່ວນຄວາມດັນ

`allowable_stress` (yield ຫານດ້ວຍ safety factor), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, ດ້ວຍເກນ hoop ຫຼື shear) ແລະ `wall_sphere`. ເຫຼົ່ານີ້ເປັນຂອບເຂດຕຳລາ, **ບໍ່ແມ່ນການຄຳນວນຕາມລະຫັດ pressure-vessel**: ບໍ່ມີ corrosion allowance, joint efficiency ຫຼື ຕົວຄູນຕາມລະຫັດ.

## Gas dynamics

`isentropic` (ອັດຕາສ່ວນທີ່ເລກ Mach), `mach_from_area`, `choked_flow`, `throat_area` ແລະ `exit_mach`, ສຳລັບແກັສສົມບູນທີ່ບໍ່ມີແຮງສຽດທານ, ຄວາມຮ້ອນ ຫຼື shock.

## ກວດຜົນລັບ

`check_stress`, `check_thermal` ແລະ `check_flow` ເອີ້ນ ຕົວແກ້ສົມຜົນ (solver) ຂອງ PartCraft (ຄວາມກົດດັນ, ການນຳຄວາມຮ້ອນ, ການໄຫຼ) ໃສ່ຊິ້ນສ່ວນທີ່ສ້າງຈາກສະຄຣິບ ແລະ ອ່ານຄ່າຄວາມກົດດັນ ແລະ ການເຄື່ອນທີ່ສູງສຸດ, ອຸນຫະພູມ ແລະ ການໄຫຼຂອງຄວາມຮ້ອນ, ແລະ ການຊຶມຜ່ານຂອງເຄືອຂ່າຍຊ່ອງ. ພວກມັນບໍ່ປ່ຽນແປງຕົວແກ້ສົມຜົນ. ການກວດຄວາມກົດດັນ ແລະ ອຸນຫະພູມໃຊ້ voxel, ດັ່ງນັ້ນຜິວໂຄ້ງຈະເປັນຂັ້ນໄດ, ແລະ ຄວາມກົດດັນທີ່ມຸມແຫຼມດ້ານໃນ ຫຼື ພາຍໃຕ້ແຮງຈຸດຂຶ້ນກັບຂະໜາດ voxel.
