---
title: Tulis penjana
summary: Penjana ialah skrip CraftScript, Lua atau Python dengan baris komen yang mengisytiharkan inputnya. Cara input menjadi borang, apa yang mesti ditinggalkan skrip (badan, helaian, masalah), contoh kecil yang lengkap, dan cara membuka skrip anda sebagai penjana.
keywords: penjana, tulis, skrip, craftscript, pengepala, input, @input, @generator, body, sheet, problems, to_body, mfg_check, helaian data, contoh, kekisi, medan
from: ed8a5ed8
---

Penjana ialah skrip biasa ([CraftScript](topic:craftscript), Lua atau Python) dengan beberapa baris komen di bahagian atas. PartCraft membaca komen dan menjana borang; skrip anda membaca input sebagai pembolehubah yang sudah ditetapkan.

## Pengepala

Letakkan baris ini dalam baris komen (`%` dalam CraftScript, `--` dalam Lua, `#` dalam Python):

```
% @generator Penukar haba
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Aliran jisim"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Permukaan"
% @input solid: = true
% @input note: = "teks"
```

Input ialah `nama: unit = nilai lalai`, kemudian secara pilihan julat `[min .. max]` (nombor disimpan di dalamnya), senarai pilihan `{a, b, c}` dan label dalam tanda petikan. Unit hanya label untuk borang: **nilai tiba dalam unit tersebut**, jadi skrip yang mahu SI perlu menukarnya, dan `to_si(value, 'kg/s', 'kg/s')` juga menyemak sama ada unit itu membawa maksud yang anda sangka. Nama terdiri daripada huruf, digit dan garis bawah; `body`, `sheet` dan `problems` telah digunakan.

## Apa yang ditinggalkan skrip

| Pembolehubah | Keterangan |
|---|---|
| `body` | **Wajib.** Jejaring permukaan, biasanya daripada `[body, info] = to_body(field, h)`. Ia dibaiki dan disemak apabila larian tamat. |
| `sheet` | Pilihan. Struktur: setiap medan ialah nombor atau teks, atau struktur dengan `value`, `unit`, `ref` dan `note`. Ia menjadi helaian data. |
| `problems` | Pilihan. Sel `problems` daripada `mfg_check(field, 'sls', struct(), h)`, atau entri anda sendiri. Ia dihantar ke semakan dan ke senarai Masalah. |

## Contoh kecil yang lengkap

```
% Kiub berongga dengan satu dinding.
% @generator Kiub berongga
% @input side: mm = 12 [4 .. 40] "Sisi"
% @input wall: mm = 1.5 [0.5 .. 5] "Dinding"
% @input h: mm = 0.5 [0.25 .. 2] "Saiz voxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'daripada jejaring');
```

Ia menghasilkan kotak tertutup, dan semakan melaporkan bahagian dalaman yang tertutup sebagai ralat untuk proses serbuk. Tetapkan saiz voxel `h` kepada paling banyak satu pertiga daripada dinding paling nipis yang anda mahu: di bawah kira-kira tiga voxel, dinding tidak boleh dipercayai.

## Medan

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (pepejal putaran daripada profil), `tpms` (permukaan gyroid, Schwarz P dan diamond, dengan saiz sel dan dinding yang boleh berubah merentasi bahagian), `lattice` dan `lattice_beams`, `along` (saluran bulat sepanjang laluan), operasi Boolean `field_union`, `field_intersect`, `field_subtract`, `field_blend` yang licin, serta `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` memberikan jarak bertanda pada titik (negatif di dalam), `field_voxel` memberikan voxel untuk penyelesai. [Medan](topic:fields) menerangkan apakah itu.

Had yang patut diketahui: dinding helaian yang lebih tebal daripada kira-kira satu perempat sel akan menutup saluran; ciri yang lebih nipis daripada kira-kira tiga voxel boleh tercubit; `along` menyambungkan kon bulat, jadi jejari yang berubah dengan cepat meninggalkan bonjolan (gunakan `field_revolve` untuk profil).

## Buka skrip anda sebagai penjana

Dalam ruang kerja {{ui:Engineer}}, klik {{ui:Open}} dan pilih fail. Skrip tanpa baris `@generator` atau `@input` akan ditolak: tiada apa yang boleh ditetapkan. Penjana disimpan dalam pelayar ini (sehingga 20) dan {{ui:Remove}} memadamkannya. Badan yang dimulakan daripadanya membawa salinan skrip, jadi bahagian itu tidak bergantung kepada skrip asal.

Satu fail juga boleh mengandungi beberapa penjana: bundle JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
