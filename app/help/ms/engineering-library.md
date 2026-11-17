---
title: Perpustakaan kejuruteraan
summary: Formula buku teks sebagai skrip yang boleh dibaca, dalam unit SI, dengan setiap hasil dan sumbernya: aliran paip dan saluran, pemindahan haba dan penukar haba, bahagian tekanan, dinamik gas, sifat air dan udara, bahan, dan unit yang disemak. Apa kegunaannya dan di mana ia berhenti.
keywords: kejuruteraan, perpustakaan, unit, Darcy-Weisbach, Colebrook, Reynolds, faktor geseran, Dittus-Boelter, Gnielinski, NTU, keberkesanan, LMTD, sirip, Barlow, Lame, nozel, isentropik, Mach, aliran tercekik, air, udara, sifat, bahan, sumber
from: 786ef967
---

Perpustakaan kejuruteraan ialah set skrip dalam perpustakaan ruang kerja Skrip (`craftlib/eng`). Setiap satu ialah fungsi yang boleh anda baca dari atas ke bawah, dengan pengepala yang memberikan **kaedahnya**, **unitnya**, **hadnya**, **rujukannya** dan **semakan** dengan nombor yang dikira. Ia menggunakan unit SI sepanjang masa dan memulangkan kuantiti yang membawa **unit** dan **sumber**, supaya lembaran data boleh mencetak dari mana setiap nombor diperoleh.

## Unit yang disemak

`to_si(10, 'bar', 'Pa')` menukar nilai dan menolak unit yang mengukur sesuatu yang lain (panjang apabila tekanan dijangka). `from_si`, `unit_convert(1, 'bar', 'psi')` dan `unit_kind('W/(m K)')` ("thermal conductivity", kekonduksian haba) berfungsi dengan cara yang sama. `temp_k(25, 'C')` dan `temp_from_k` menukar suhu, yang mempunyai offset.

## Sifat

- `fluid('water', T)` dan `fluid('air', T, p)`: ketumpatan, kelikatan, kekonduksian, haba tentu, nombor Prandtl. Air 0 hingga 100 °C, udara 250 hingga 600 K; di luar julat itu ia berhenti dan tidak mengekstrapolasi.
- `material('ss304')`: modulus Young, nisbah Poisson, ketumpatan, hasil, kekonduksian, haba tentu, pengembangan: nilai suhu bilik daripada lembaran data yang sama seperti Simulation. Reka bentuk sebenar menggunakan angka disahkan pembekal. Lengkung suhu belum dibina.

## Aliran dalam paip dan saluran

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, kemudian persamaan Colebrook untuk aliran bergelora; julat 2300 hingga 4000 tiada formula yang boleh dipercayai dan ia memberitahu anda begitu), `darcy_weisbach`, `minor_loss`, `pipe_flow` (paip bulat, semuanya sekaligus) dan `rect_channel` (saluran segi empat tepat laminar mengikut penyuaian Shah dan London).

## Pemindahan haba

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (memilih laminar atau bergelora dan menamakan korelasinya), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` dan `ntu_for` (hubungan keberkesanan-NTU untuk aliran berlawanan, selari, cangkerang-dan-tiub, aliran silang dan satu strim yang berubah) dan `hx_size` (saiz UA yang diperlukan oleh tugas; ia memberitahu berapa banyak yang mungkin apabila tugas tidak dapat dipenuhi).

## Bahagian tekanan

`allowable_stress` (hasil dibahagi faktor keselamatan), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, pada kriteria hoop atau ricih) dan `wall_sphere`. Ini ialah margin buku teks, **bukan pengiraan kod bekas tekanan**: tiada elaun kakisan, kecekapan sambungan atau faktor kod.

## Dinamik gas

`isentropic` (nisbah pada nombor Mach), `mach_from_area`, `choked_flow`, `throat_area` dan `exit_mach`, untuk gas sempurna tanpa geseran, haba atau kejutan.

## Semak hasilnya

`check_stress`, `check_thermal` dan `check_flow` menjalankan penyelesai tegasan, pengaliran dan aliran PartCraft sendiri pada bahagian yang dijana daripada skrip, dan membaca semula tegasan dan sesaran maksimum, suhu dan aliran haba, serta kebolehtelapan rangkaian salur. Ia tidak mengubah apa-apa dalam penyelesai. Semakan tegasan dan suhu menggunakan voksel, jadi permukaan melengkung ialah tangga, dan tegasan pada sudut dalam yang tajam atau di bawah beban titik bergantung pada saiz voksel.
