---
title: Menulis generator
summary: Generator adalah skrip CraftScript, Lua, atau Python dengan baris komentar yang mendeklarasikan input-nya. Cara input menjadi formulir, apa yang harus ditinggalkan skrip (body, sheet, problems), contoh kecil yang lengkap, dan cara membuka skrip Anda sebagai generator.
keywords: generator, tulis, skrip, craftscript, header, input, @input, @generator, body, sheet, problems, to_body, mfg_check, lembar data, contoh, lattice, field
from: ed8a5ed8
---

Generator adalah skrip biasa ([CraftScript](topic:craftscript), Lua, atau Python) dengan beberapa baris komentar di bagian atas. PartCraft membaca komentar dan membuat formulir; skrip Anda membaca input sebagai variabel yang sudah diatur.

## Header

Tulis ini dalam baris komentar (`%` di CraftScript, `--` di Lua, `#` di Python):

```
% @generator Heat exchanger
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Mass flow"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Surface"
% @input solid: = true
% @input note: = "text"
```

Input berbentuk `name: unit = default`, lalu secara opsional rentang `[min .. max]` (nilai angka dijaga tetap di dalam rentang itu), daftar pilihan `{a, b, c}`, dan label dalam tanda kutip. Unit hanya label untuk formulir: **nilai diterima dalam unit tersebut**, sehingga skrip yang menginginkan SI harus mengonversinya. `to_si(value, 'kg/s', 'kg/s')` juga memeriksa apakah unit itu sesuai dengan yang Anda maksud. Nama terdiri dari huruf, angka, dan garis bawah; `body`, `sheet`, dan `problems` sudah dipakai.

## Yang ditinggalkan skrip

| Variabel | Keterangan |
|---|---|
| `body` | **Wajib.** Mesh permukaan, biasanya dari `[body, info] = to_body(field, h)`. Mesh diperbaiki dan diperiksa saat proses berakhir. |
| `sheet` | Opsional. Struct: setiap field berupa angka atau teks, atau struct dengan `value`, `unit`, `ref`, dan `note`. Ini menjadi lembar data. |
| `problems` | Opsional. Sel `problems` dari `mfg_check(field, 'sls', struct(), h)`, atau entri Anda sendiri. Entri ini masuk ke pemeriksaan dan daftar Masalah. |

## Contoh kecil yang lengkap

```
% Kubus berongga dengan satu dinding.
% @generator Kubus berongga
% @input side: mm = 12 [4 .. 40] "Sisi"
% @input wall: mm = 1.5 [0.5 .. 5] "Dinding"
% @input h: mm = 0.5 [0.25 .. 2] "Ukuran voksel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Ini membuat kotak tertutup, dan pemeriksaan melaporkan bagian dalamnya yang tersegel sebagai kesalahan untuk proses serbuk. Buat ukuran voksel `h` paling besar sepertiga dari dinding tertipis yang Anda inginkan: di bawah sekitar tiga voksel, dinding tidak dapat diandalkan.

## Field

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (solid putar dari sebuah profil), `tpms` (permukaan gyroid, Schwarz P, dan diamond, dengan ukuran sel dan dinding yang dapat berubah di seluruh bagian), `lattice` dan `lattice_beams`, `along` (saluran bulat sepanjang jalur), operasi boolean `field_union`, `field_intersect`, `field_subtract`, `field_blend` yang halus, serta `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` memberikan jarak bertanda di titik-titik (negatif di dalam), `field_voxel` memberikan voksel untuk solver. [Field](topic:fields) menjelaskan apa itu field.

Batas yang perlu diketahui: dinding lembaran yang lebih tebal dari sekitar seperempat sel akan menutup saluran; fitur yang lebih tipis dari sekitar tiga voksel dapat menyempit; `along` menyambung kerucut bulat, sehingga jari-jari yang berubah cepat akan meninggalkan tonjolan (gunakan `field_revolve` untuk profil).

## Buka skrip Anda sebagai generator

Di ruang kerja {{ui:Engineer}}, klik {{ui:Open}} lalu pilih file. Skrip tanpa baris `@generator` atau `@input` akan ditolak: tidak ada yang dapat diatur. Generator disimpan di peramban ini (maksimal 20) dan {{ui:Remove}} menghapusnya. Bodi yang dimulai darinya membawa salinan skrip, sehingga part tidak bergantung pada skrip asli.

Satu file juga dapat berisi beberapa generator: bundel JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
