---
title: Rusuk dan pelat buhul
summary: Perkaku part dengan rusuk yang digambar sebagai satu garis: ia terisi dari garis ke dinding, dengan tebal yang ditetapkan melintasi bidang sketsa, di sisi yang Anda pilih.
keywords: rusuk, pelat buhul, badan, pengaku, bresing, braket, penyangga sudut, dinding tipis, memperkuat
from: 5c218881
---

:::note
**Belum dibuat di versi ini.** Rusuk memerlukan kernel geometri eksak, yang tidak dimiliki versi PartCraft ini: versi ini membangun setiap part dengan kernel mesh. [Yang belum dibuat](topic:not-built-yet) menjelaskan apa yang harus dilakukan sebagai gantinya. Sisa halaman ini menjelaskan cara kerjanya dengan kernel eksak.
:::

**Rusuk** (atau pelat buhul) adalah dinding tipis yang memperkaku part, seperti segitiga di dalam sudut braket L. Anda hanya menggambar tepi bebasnya: PartCraft mengisi ruang di antara garis itu dan dinding. Fitur ini memerlukan **kernel eksak** (lihat [Kernel mesh](topic:solid-kernels)).

## Menambah rusuk

1. Buat bidang melalui tengah tempat rusuk akan berada (untuk braket L dengan kedalaman 40, bidang 20 di depan sketsanya: lihat [Bidang, sumbu, dan titik referensi](topic:reference-geometry)).
2. Buat sketsa di atasnya **satu garis** dari dinding ke dinding — atau beberapa garis berurutan ujung ke ujung untuk tepi rusuk yang bengkok. Garis boleh berhenti sebelum dinding: ujungnya dilanjutkan hingga bertemu dengannya.
3. Pilih sketsa dan pilih {{ui:Lainnya}} › {{ui:Rusuk}}.

Rusuk mengisi dari garis ke dinding di sisi yang menuju tengah part, sehingga pelat buhul berada di sudut dalam. Jika sisi itu terbuka dan sisi lainnya tertutup, PartCraft membaliknya untuk Anda dan memberi tahu.

## Pengaturan

- **Tebal (mm)** adalah tebal rusuk melintasi bidang sketsa. Nilainya dapat dikendalikan oleh parameter.
- **Tebal** (pilihan di bawahnya): **Berpusat pada bidang sketsa**, **Di depan bidang** (sepanjang normalnya), atau **Di belakang bidang**.
- **Balik** mengisi sisi lain garis.

## Pesan

- **Di sisi ini, tepi rusuk tidak pernah bertemu bodi** — tidak ada yang menutup ruang di sisi itu: centang atau hapus centang **Balik**, atau geser garis agar dibatasi dinding.
- **Rusuk memerlukan satu rantai garis terbuka dalam sketsanya** — sketsa memiliki bentuk tertutup, busur, atau spline, atau garis yang tidak tersambung ujung ke ujung.
- **Tepi rusuk berjalan di dalam bodi di sana** — garis berada di dalam solid; gambar di ruang terbuka di antara dinding.
