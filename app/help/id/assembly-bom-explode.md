---
title: Daftar part, tampilan terurai, dan memindahkan part
summary: Beri part rakitan nomor, deskripsi, dan material; baca dan unduh daftar material; buat tampilan terurai dengan langkah atau otomatis; pindahkan part yang tidak tersambung dengan tangan; atur batas sambungan; dan ekspor seluruh rakitan sebagai STL, 3MF, atau daftar material.
keywords: bom, daftar material, daftar part, nomor part, material, densitas, csv, tampilan terurai, urai, runtuhkan, garis jejak, pindahkan part, seret, gizmo, translasi, putar, batas sambungan, ekspor rakitan, langkah rakitan, gambar rakitan, balon
from: ebc9f6f3
---

Alat-alat ini ada di panel kanan rakitan (lihat [Bangun rakitan dengan sambungan](topic:build-assembly)).

## Properti part

Pilih part di daftar sebelah kiri. Di bawah **Properti part**, atur:

- **Nomor part** (hingga 40 karakter) dan **Deskripsi** (hingga 200).
- **Material**: material umum dengan densitasnya, atau **Densitas kustom…** untuk mengetik sendiri dalam g/cm³. Panel kemudian menampilkan massa part.

Properti melekat pada part, sehingga setiap salinan berbagi properti tersebut. Properti disimpan di file rakitan.

## Daftar material

Saat tidak ada yang dipilih ({{key:Esc}}), panel menampilkan **Daftar material**: satu baris per part dengan nomor item, jumlah (berapa salinan), nomor part, nama, material, dan massa masing-masing. Nomor item mengikuti urutan part pertama kali muncul di daftar. Massa menggunakan volume setiap part (dari solid berfaset yang dibangun kernel mesh, sedikit lebih rendah pada part bulat) dan materialnya. Part tanpa material tidak punya massa, dan dalam hal itu tidak ada total.

{{ui:Unduh CSV}} menyimpan daftar sebagai file CSV (juga **Ekspor › Daftar material (CSV)**). File ini dibuka di aplikasi spreadsheet mana pun. Teks yang diawali = atau + mendapat tanda kutip satu di depannya agar spreadsheet tidak menjalankannya sebagai rumus.

## Tampilan terurai

Tampilan terurai memisahkan part untuk gambar. Tampilan ini tidak pernah mengubah sambungan atau posisi part yang sebenarnya: penyimpanan, pemeriksaan benturan, dan ekspor menggunakan posisi asli.

1. Saat tidak ada yang dipilih, pilih {{ui:Tampilan baru}} di bawah **Tampilan terurai**.
2. Di bawah **Tambah langkah**, centang part yang dipindahkan langkah itu, pilih **Arah** (+X … −Z, normal muka yang Anda klik, atau **Seret panah di tampilan**) dan **Jarak**, lalu {{ui:Tambah langkah}}. Dengan **Seret**, seret panah dan lepaskan: langkah mengambil arah dan jarak yang Anda seret.
3. Tambahkan langkah lain. Langkah-langkah diputar satu per satu.
4. Seret penggeser di antara **Dirakit** dan **Terurai** untuk menganimasikan tampilan. Garis jejak putus-putus berjalan dari posisi diam setiap part ke posisi sekarangnya.

{{ui:Otomatis (radial)}} memindahkan setiap part, kecuali part tetap, menjauh dari tengah rakitan. {{ui:Otomatis (sambungan)}} memindahkan setiap part yang tersambung (beserta semua yang tersambung di bawahnya) keluar sepanjang normal muka sambungannya. Anda bisa menyimpan beberapa tampilan bernama; pilih satu di **Tampilan**, atau **Dirakit** untuk mengembalikan part. Tampilan disimpan di file rakitan.

## Pindahkan part dengan tangan

Hanya part tanpa sambungan ke part tetap yang bisa dipindahkan dengan tangan (part tetap tidak bergerak; sambungan menempatkan sisanya). Pilih part itu lalu, di bawah **Pindahkan dengan tangan**:

- Ketik **ΔX, ΔY, ΔZ** dan pilih {{ui:Pindahkan}}, atau pilih sumbu dan **Sudut** lalu {{ui:Putar}} (pada tengah part).
- {{ui:Seret untuk memindahkan}} menampilkan panah di part: seret panah untuk bergerak sepanjang sumbu itu, atau kotak untuk bergerak di bidang. {{ui:Seret untuk memutar}} menampilkan cincin untuk memutarnya. Setiap seretan adalah satu langkah urungkan. {{key:Esc}} menyembunyikan panah.

## Batas sambungan

Pilih sambungan yang bergerak dan, di bawah **Batas**, centang **Tahan … di antara batas** untuk nilai apa pun, lalu atur **Minimum** dan **Maksimum**. Setiap nilai ditahan di dalam batasnya sendiri, penggesernya hanya mencakup rentang itu, dan {{ui:Periksa benturan pada gerakan}} hanya menyapu di antara batas tersebut. Sambungan silinder bisa membatasi sudutnya, offset-nya, atau keduanya. Mengubah tipe sambungan menghapus batas pada nilai yang tidak dimiliki tipe baru.

## Ekspor seluruh rakitan

Di rakitan, menu **Ekspor** menulis seluruh rakitan dengan setiap part di tempatnya:

- **STEP AP242 / AP214** dan **Gambar (PDF)** belum dibuat di versi ini: keduanya memerlukan kernel eksak, sehingga dibuat abu-abu. Sebagai gantinya, ekspor STEP setiap part (solid eksak) dari part itu sendiri.
- **STL**: satu mesh dari semua part. **3MF**: setiap part sekali, ditempatkan sekali per salinan.
- **Daftar material (CSV)**.

## Batasan

- Gambar rakitan dan STEP rakitan belum dibuat di versi ini (keduanya memerlukan kernel eksak). Tampilan terurai hanya untuk gambar di layar.
