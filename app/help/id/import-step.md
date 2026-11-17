---
title: Buka file STEP dan bangun di atasnya
summary: Bawa model STEP dari pemasok atau program CAD lain ke PartCraft sebagai badan solid, sebagai part baru atau ditambahkan ke part saat ini, atur arah atas, dan tambahkan sketsa serta fitur padanya.
keywords: step, stp, impor, buka step, ap203, ap214, ap242, model pemasok, solid polos, solid impor, sumbu atas, z up, y up, segitiga, faset, step rakitan
from: ca0eca5f
---

PartCraft membuka file STEP (`.step` atau `.stp`, AP203, AP214, dan AP242) sebagai **badan solid** yang dapat Anda beri sketsa, potong, bor, dan gabungkan dengan fitur Anda sendiri. Badan tersebut tidak memiliki riwayat sendiri: Anda tidak dapat mengubah dimensi yang digunakan saat dibuat, hanya menambah atau memotong darinya.

Versi ini membangun setiap part dengan kernel mesh, sehingga file STEP **dibaca sebagai segitiga**: muka datar tetap datar, dan muka lengkung (silinder, kerucut, bola, torus, permukaan B-spline) menjadi banyak muka datar kecil. Volumenya berada dalam selisih kecil persen dari volume eksaknya. Menjaga muka lengkung tetap eksak membutuhkan kernel eksak, yang belum ada di versi ini.

## Buka file STEP

1. Pilih {{ui:Buka}} atau tekan {{key:Mod+O}}, lalu pilih file `.step` atau `.stp`. Atau jatuhkan file ke tampilan 3D.
2. PartCraft membaca file dan menampilkan apa yang ditemukannya, misalnya: "File AP214: 1 solid, 10 muka, dibaca sebagai segitiga." Di bawahnya ada jumlah segitiga, apa pun yang harus ditinggalkan atau digabung, dan apakah hasilnya tertutup.
3. Periksa **Atas di file**. File STEP menyebutkan satuannya sendiri (milimeter, inci, meter…); PartCraft mengonversinya ke milimeter, sehingga **Satuan di file** menampilkan Milimeter, "file menyatakannya demikian". **Ukuran di sini** menampilkan seberapa besar hasilnya nanti.
4. Pilih {{ui:Buka sebagai bodi}} untuk part kosong, atau {{ui:Tambahkan ke part ini}} / {{ui:Part baru}} saat part sudah memiliki fitur. Menambahkan akan menanyakan **Gunakan untuk** apa: tambah, potong, atau pertahankan hanya bagian yang tumpang tindih.

Fitur **Imported1** muncul di riwayat, dan bilah status menampilkan, misalnya, "plate.step adalah badan solid: 57995.937 mm³, 6 muka datar untuk diberi sketsa."

## Rakitan STEP

Rakitan masuk sebagai **satu badan** dengan setiap part di posisi yang ditentukan file ("3 part yang ditempatkan di file masuk sesuai posisinya"). Part yang dipakai dua kali masuk dua kali. Nama part dan struktur pohon rakitan tidak dipertahankan.

## Atur arah atas

Sebagian besar program CAD menggunakan Z ke atas; PartCraft menggunakan Y ke atas. Secara default PartCraft memutar file agar Z-nya menunjuk ke atas di sini. Jika part masuk dalam posisi tergeletak, pilih **Imported1** dan atur **Atas di file** ke **Y up**. **Satuan di file** dan **Gunakan untuk** juga dapat diubah di sana; setiap perubahan adalah satu langkah urungkan.

## Membangun di atasnya

- Klik muka datar dari badan dan pilih {{ui:Buat sketsa pada muka ini}}. Muka datar model STEP tetap di tempatnya saat badan dibangun ulang.
- Tambahkan potongan, lubang, boss, pola, dan cerminan seperti pada part mana pun.
- Periksa ukurannya di kotak **Part**: volume, luas permukaan, dan ukuran.

Fillet, chamfer, dan shell membutuhkan kernel eksak, seperti pada part mana pun di versi ini ([Kernel mesh](topic:solid-kernels)).

## Tempat disimpan

Segitiga disimpan **di dalam** file `.partcraft.json`, sehingga file part mandiri: Anda tidak lagi memerlukan file STEP.

## Pesan

| Pesan | Artinya |
|---|---|
| '"part.stp" bukan file STEP (tidak diawali ISO-10303-21).' | File itu bukan teks STEP biasa. Minta file STEP AP203, AP214, atau AP242 dari pengirim |
| "File STEP tidak dapat dibaca: bagian datanya hilang atau rusak." | File terpotong atau rusak. Salin ulang |
| "File STEP tidak memuat badan solid atau permukaan: tidak ada yang dapat diimpor." | File hanya memuat gambar, titik, atau data. Minta solid |
| "File STEP itu terlalu besar (lebih dari 60 MB) untuk diimpor di sini." dan batas pembaca lainnya (entri, muka, segitiga) | Sederhanakan model di sumbernya, atau kirim part satu per satu |
| "… baris yang rusak di file dilewati." | Beberapa baris tidak dapat dibaca; sisanya tetap masuk. Periksa badannya |
| "… muka tidak dapat dibuat menjadi segitiga dan dibiarkan keluar." | Muka tersebut meninggalkan lubang, yang coba ditutup PartCraft; jika badan tidak tertutup, badan tidak akan ditambahkan |
| "… muka dengan jenis yang tidak dibaca (…) dilewati." | Jenis permukaan yang jarang. Minta model dengan permukaan polos atau B-spline |
| "Tidak tertutup …" | Muka tidak membentuk solid tertutup (model permukaan, atau muka yang tertinggal). PartCraft menampilkan celahnya dan tidak menambahkan apa pun |

## Batasan

- Muka lengkung digambar dan diukur sebagai faset datar, seperti pada setiap part di versi ini. PartCraft mempertahankan muka datar, silinder, kerucut, bola, dan torus milik file bersama badan, sehingga {{ui:Ekspor}} › {{ui:STEP AP242 (solid eksak)}} menuliskannya kembali sebagai permukaan sejati, dan lubang sebagai lubang, bersama fitur yang Anda tambahkan. Muka yang diberikan file sebagai spline, sapuan, atau permukaan putaran tetap berupa faset dalam ekspor. Part yang disimpan sebelum 0.9.1 tidak memiliki permukaan yang dipertahankan: buka kembali file STEP untuk mendapatkannya.
- {{ui:Ekspor}} › {{ui:DXF sketsa atau muka datar}} dengan muka datar yang dipilih menuliskan lubang bulat dari file sebagai lingkaran sejati.
- Warna, nama badan, struktur rakitan, dan PMI (toleransi di file) tidak dibaca.
- Selain STEP, PartCraft membuka mesh STL, OBJ, dan 3MF ([Buka STL, OBJ, atau 3MF](topic:open-meshes)) dan file `.3dm` ([Buka model .3dm](topic:open-3dm-files)) sebagai badan solid. IGES dan file asli program lain tidak didukung.
- Part dengan solid STEP yang diimpor oleh build yang memiliki kernel eksak menyimpan teks STEP; versi ini melewati fitur itu ("belum dibuat"). Buka kembali file STEP untuk membawanya masuk sebagai segitiga.
