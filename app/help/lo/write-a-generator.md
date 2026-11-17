---
title: ຂຽນຕົວສ້າງ
summary: ຕົວສ້າງແມ່ນສະຄຣິບ CraftScript, Lua ຫຼື Python ທີ່ມີແຖວຄອມເມັ້ນປະກາດອິນພຸດຂອງມັນ. ອິນພຸດກາຍເປັນແບບຟອມແນວໃດ, ສະຄຣິບຕ້ອງທິ້ງຫຍັງໄວ້ (body, sheet, problems), ຕົວຢ່າງສັ້ນທີ່ສົມບູນ, ແລະວິທີເປີດສະຄຣິບຂອງທ່ານເປັນຕົວສ້າງ.
keywords: ຕົວສ້າງ, ຂຽນ, ສະຄຣິບ, craftscript, ສ່ວນຫົວ, ອິນພຸດ, @input, @generator, body, sheet, problems, to_body, mfg_check, ແຜ່ນຂໍ້ມູນ, ຕົວຢ່າງ, lattice, ຟີລ໌ດ
from: ed8a5ed8
---

ຕົວສ້າງແມ່ນສະຄຣິບທຳມະດາ ([CraftScript](topic:craftscript), Lua ຫຼື Python) ທີ່ມີແຖວຄອມເມັ້ນບໍ່ຫຼາຍຢູ່ດ້ານເທິງ. PartCraft ອ່ານຄອມເມັ້ນເຫຼົ່ານັ້ນແລ້ວສ້າງແບບຟອມ; ສະຄຣິບຂອງທ່ານອ່ານອິນພຸດເປັນຕົວແປທີ່ຕັ້ງຄ່າໄວ້ແລ້ວ.

## ສ່ວນຫົວ

ໃສ່ສິ່ງເຫຼົ່ານີ້ໃນແຖວຄອມເມັ້ນ (`%` ໃນ CraftScript, `--` ໃນ Lua, `#` ໃນ Python):

```
% @generator ເຄື່ອງແລກປ່ຽນຄວາມຮ້ອນ
% @input mdot: kg/s = 0.2 [0.01 .. 10] "ອັດຕາການໄຫຼມວນ"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "ພື້ນຜິວ"
% @input solid: = true
% @input note: = "text"
```

ອິນພຸດແມ່ນ `name: unit = default`, ຈາກນັ້ນເລືອກໃສ່ຊ່ວງ `[min .. max]` ໄດ້ (ຕົວເລກຈະຖືກຈຳກັດໄວ້ໃນຊ່ວງນັ້ນ), ລາຍການຕົວເລືອກ `{a, b, c}` ແລະປ້າຍຊື່ໃນເຄື່ອງໝາຍຄຳພາ. ໜ່ວຍເປັນພຽງປ້າຍສຳລັບແບບຟອມ: **ຄ່າຈະມາເຖິງໃນໜ່ວຍນັ້ນ**, ສະນັ້ນສະຄຣິບທີ່ຕ້ອງການ SI ຕ້ອງແປງເອງ, ແລະ `to_si(value, 'kg/s', 'kg/s')` ຍັງກວດວ່າໜ່ວຍນັ້ນໝາຍເຖິງສິ່ງທີ່ທ່ານຄິດ. ຊື່ປະກອບດ້ວຍຕົວອັກສອນ, ຕົວເລກ ແລະ underscore; `body`, `sheet` ແລະ `problems` ຖືກສະຫງວນໄວ້ແລ້ວ.

## ສິ່ງທີ່ສະຄຣິບທິ້ງໄວ້

| ຕົວແປ | ຄວາມໝາຍ |
|---|---|
| `body` | **ຈຳເປັນ.** ພື້ນຜິວ mesh, ປົກກະຕິມາຈາກ `[body, info] = to_body(field, h)`. ມັນຈະຖືກແກ້ ແລະກວດເມື່ອການທຳງານສິ້ນສຸດ. |
| `sheet` | ເລືອກໄດ້. struct: ແຕ່ລະຟີລ໌ດເປັນຕົວເລກ ຫຼືຂໍ້ຄວາມ, ຫຼື struct ທີ່ມີ `value`, `unit`, `ref` ແລະ `note`. ມັນຈະກາຍເປັນແຜ່ນຂໍ້ມູນ. |
| `problems` | ເລືອກໄດ້. cell `problems` ຈາກ `mfg_check(field, 'sls', struct(), h)`, ຫຼືລາຍການຂອງທ່ານເອງ. ພວກມັນຈະໄປຍັງການກວດ ແລະລາຍການບັນຫາ. |

## ຕົວຢ່າງນ້ອຍທີ່ສົມບູນ

```
% ລູກບາດເປົ່າທີ່ມີຝາ.
% @generator ລູກບາດເປົ່າ
% @input side: mm = 12 [4 .. 40] "ດ້ານ"
% @input wall: mm = 1.5 [0.5 .. 5] "ຝາ"
% @input h: mm = 0.5 [0.25 .. 2] "ຂະໜາດ voxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

ມັນສ້າງກ່ອງປິດ, ແລະການກວດລາຍງານຊ່ອງວ່າງພາຍໃນທີ່ປິດສະໜິດເປັນຂໍ້ຜິດພາດສຳລັບຂະບວນການຜົງ. ກຳນົດ `h` ຂະໜາດ voxel ໃຫ້ບໍ່ເກີນໜຶ່ງສ່ວນສາມຂອງຝາທີ່ບາງທີ່ສຸດທີ່ທ່ານຕ້ອງການ: ຕ່ຳກວ່າປະມານສາມ voxel, ຝາຈະບໍ່ໜ້າເຊື່ອຖືໄດ້.

## ຟີລ໌ດ

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (ຂອງແຂງແບບໝຸນຈາກໜ້າຕັດ), `tpms` (ພື້ນຜິວ gyroid, Schwarz P ແລະ diamond, ມີຂະໜາດ cell ແລະຝາທີ່ປ່ຽນໄດ້ຕາມຊິ້ນສ່ວນ), `lattice` ແລະ `lattice_beams`, `along` (ຊ່ອງກົມຕາມເສັ້ນທາງ), ການ boolean `field_union`, `field_intersect`, `field_subtract`, `field_blend` ທີ່ລຽບ, ແລະ `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` ໃຫ້ໄລຍະທາງມີເຄື່ອງໝາຍຢູ່ຈຸດຕ່າງໆ (ລົບຄືພາຍໃນ), ແລະ `field_voxel` ໃຫ້ voxel ແກ່ຕົວແກ້. [Fields](topic:fields) ອະທິບາຍວ່າມັນແມ່ນຫຍັງ.

ຂໍ້ຈຳກັດທີ່ຄວນຮູ້: ຝາແຜ່ນທີ່ໜາກວ່າປະມານໜຶ່ງສ່ວນສີ່ຂອງ cell ຈະປິດຊ່ອງທາງ; ລັກສະນະທີ່ບາງກວ່າປະມານສາມ voxel ອາດບີບແຄບ; `along` ເຊື່ອມກຸ່ມກະບອກກົມ, ສະນັ້ນລັດສະໝີທີ່ປ່ຽນໄວຈະເຮັດໃຫ້ໂປ່ງອອກ (ໃຊ້ `field_revolve` ສຳລັບໜ້າຕັດ).

## ເປີດສະຄຣິບຂອງທ່ານເປັນຕົວສ້າງ

ໃນພື້ນທີ່ເຮັດວຽກ {{ui:Engineer}} ໃຫ້ຄລິກ {{ui:Open}} ແລ້ວເລືອກໄຟລ໌. ສະຄຣິບທີ່ບໍ່ມີແຖວ `@generator` ຫຼື `@input` ຈະຖືກປະຕິເສດ: ຈະບໍ່ມີຫຍັງໃຫ້ຕັ້ງຄ່າ. ຕົວສ້າງຈະຖືກເກັບໄວ້ໃນບຣາວເຊີນີ້ (ສູງສຸດ 20) ແລະ {{ui:Remove}} ຈະລຶບມັນອອກ. body ທີ່ເລີ່ມຈາກມັນຈະມີສຳເນົາຂອງສະຄຣິບ, ດັ່ງນັ້ນຊິ້ນສ່ວນຈະບໍ່ຂຶ້ນກັບມັນ.

ໄຟລ໌ດຽວກໍສາມາດເກັບຕົວສ້າງຫຼາຍອັນໄດ້: ເປັນ JSON bundle `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
