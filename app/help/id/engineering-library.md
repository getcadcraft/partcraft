---
title: Pustaka rekayasa
summary: Rumus buku teks sebagai skrip yang mudah dibaca, dalam satuan SI, dengan setiap hasil beserta sumbernya: aliran pipa dan saluran, perpindahan panas dan penukar panas, bagian bertekanan, dinamika gas, sifat air dan udara, material, serta satuan yang diperiksa. Apa gunanya masing-masing dan di mana batasnya.
keywords: rekayasa, pustaka, satuan, Darcy-Weisbach, Colebrook, Reynolds, faktor gesek, Dittus-Boelter, Gnielinski, NTU, efektivitas, LMTD, sirip, Barlow, Lame, nozel, isentropik, Mach, aliran tersumbat, air, udara, sifat, material, sumber
from: 786ef967
---

Pustaka rekayasa adalah sekumpulan skrip di dalam pustaka ruang kerja Script (`craftlib/eng`). Setiap skrip adalah fungsi yang dapat dibaca dari atas ke bawah, dengan header yang memberikan **metode**, **satuan**, **batas**, **referensi**, dan **pemeriksaan** dengan angka kerja. Semuanya memakai satuan SI dan mengembalikan kuantitas yang membawa **satuan** dan **sumber**, sehingga lembar data dapat mencetak dari mana setiap angka berasal.

## Satuan yang diperiksa

`to_si(10, 'bar', 'Pa')` mengonversi nilai dan menolak satuan yang mengukur hal lain (misalnya panjang saat yang diharapkan tekanan). `from_si`, `unit_convert(1, 'bar', 'psi')`, dan `unit_kind('W/(m K)')` ("konduktivitas termal") bekerja dengan cara yang sama. `temp_k(25, 'C')` dan `temp_from_k` mengonversi suhu, yang memiliki offset.

## Sifat

- `fluid('water', T)` dan `fluid('air', T, p)`: densitas, viskositas, konduktivitas, kalor jenis, bilangan Prandtl. Air 0 sampai 100 °C, udara 250 sampai 600 K; di luar rentang itu berhenti alih-alih mengekstrapolasi.
- `material('ss304')`: modulus Young, rasio Poisson, densitas, tegangan luluh, konduktivitas, kalor jenis, muai: nilai suhu ruang dari lembar data yang sama dengan Simulation. Desain nyata menggunakan angka bersertifikat dari pemasok. Kurva suhu belum dibuat.

## Aliran dalam pipa dan saluran

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, lalu persamaan Colebrook untuk aliran turbulen; rentang 2300 sampai 4000 tidak memiliki rumus yang andal dan menyatakan demikian), `darcy_weisbach`, `minor_loss`, `pipe_flow` (pipa bulat, semuanya sekaligus), dan `rect_channel` (saluran persegi panjang laminar dengan fit Shah dan London).

## Perpindahan panas

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (memilih laminar atau turbulen dan menyebutkan korelasinya), `htc`, `fin_efficiency`, `lmtd`, `effectiveness`, dan `ntu_for` (relasi efektivitas-NTU untuk aliran searah, berlawanan, shell-and-tube, aliran silang, dan satu aliran yang berubah), serta `hx_size` (ukuran UA yang dibutuhkan suatu beban; ia menyatakan seberapa besar yang mungkin dicapai ketika beban tidak dapat dipenuhi).

## Bagian bertekanan

`allowable_stress` (tegangan luluh dibagi faktor keamanan), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, pada kriteria hoop atau geser), dan `wall_sphere`. Ini adalah margin buku teks, **bukan perhitungan kode bejana tekan**: tanpa tunjangan korosi, efisiensi sambungan, atau faktor kode.

## Dinamika gas

`isentropic` (rasio pada bilangan Mach), `mach_from_area`, `choked_flow`, `throat_area`, dan `exit_mach`, untuk gas sempurna tanpa gesekan, panas, atau kejut.

## Periksa hasilnya

`check_stress`, `check_thermal`, dan `check_flow` menjalankan solver tegangan, konduksi, dan aliran milik PartCraft pada part yang dihasilkan dari skrip, lalu membaca kembali tegangan dan perpindahan maksimum, suhu dan aliran panas, serta permeabilitas jaringan saluran. Mereka tidak mengubah apa pun pada solver. Pemeriksaan tegangan dan suhu menggunakan voksel, sehingga muka melengkung menjadi tangga, dan tegangan pada sudut dalam yang tajam atau di bawah beban titik bergantung pada ukuran voksel.
