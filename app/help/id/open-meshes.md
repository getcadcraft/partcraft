---
title: Buka STL, OBJ, atau 3MF sebagai badan solid
summary: Ubah mesh dari pemindai, situs pencetakan 3D, atau program lain menjadi solid yang bisa Anda potong, tambahi, dan beri sketsa; apa yang diperbaiki PartCraft di jalan, dan apa yang tidak bisa.
keywords: stl, obj, 3mf, mesh, mesh ke solid, konversi mesh, pindaian, watertight, perbaiki, lubang, celah, satuan, sumbu atas, badan impor, muka datar
from: 7b948471
---

PartCraft membuka mesh STL, OBJ, dan 3MF sebagai **badan solid**. Badan itu berfungsi seperti solid lain: potong, tambahi, bor, polakan, pakai dalam assembly atau untuk permesinan, dan beri sketsa pada muka datarnya. Badan itu tidak memiliki riwayat sendiri: mesh hanyalah segitiga, sehingga ukurannya tidak bisa diubah, hanya bisa ditambahi atau dipotong.

## Buka mesh

1. Pilih {{ui:Open}} atau tekan {{key:Mod+O}}, lalu pilih file `.stl`, `.obj`, atau `.3mf`. Atau seret ke tampilan 3D.
2. PartCraft membacanya, memperbaiki apa yang aman diperbaiki, dan menampilkan apa yang ditemukannya: berapa segitiga dan titik, setiap perbaikan, dan apakah mesh sekarang **tertutup**.
3. Periksa **Satuan dalam file** dan **Atas dalam file**. STL dan OBJ tidak menyatakan satuannya, sehingga milimeter adalah tebakan; file 3MF menyatakan satuannya sendiri. Baris **Ukuran di sini** menampilkan ukuran badan dengan pilihan Anda, sehingga part yang masuk 25.4 kali terlalu kecil mudah dikenali (ia berasal dari inci).
4. Bila part di layar kosong, pilih {{ui:Open as a body}}. Bila part sudah memiliki fitur, pilih **Pakai untuk** (tambahkan ke part, potong darinya, atau simpan hanya bagian yang tumpang tindih), lalu {{ui:Add to this part}}, atau {{ui:New part}} untuk memulai lagi dengan mesh.

Fitur **Imported1** muncul di riwayat. Bilah status menyebutkan, misalnya, "bracket.stl adalah badan solid: 15200.512 mm³, 14 muka datar untuk diberi sketsa."

## Yang diperbaiki PartCraft

| Perbaikan | Artinya |
|---|---|
| Sudut ganda digabung | STL mengulang setiap sudut untuk setiap segitiganya; sudut-sudut itu digabung menjadi satu titik |
| Segitiga tanpa luas dihapus | Irisan tipis yang sudutnya terletak pada satu garis |
| Segitiga ganda dihapus | Segitiga yang ditulis dua kali disimpan sekali; dua yang menghadap berlawanan (dinding dalam) keduanya dihapus |
| Celah kecil ditutup | Tepi yang hampir bertemu (dalam seperseribu ukuran part) digabung |
| Lubang diisi | Bukaan yang tepinya datar diisi berapa pun ukurannya; yang melengkung hanya bila kecil |
| Segitiga dibalik agar menghadap keluar | Segitiga yang menghadap arah salah dibalik agar sesuai dengan tetangganya, dan seluruh permukaan menghadap keluar |

## Saat mesh tidak tertutup

Solid membutuhkan permukaan tanpa bukaan. Bila PartCraft tidak dapat menutupnya, dialog menyebutkan berapa bukaan dan tepi terbuka yang tersisa, dan tidak ada badan untuk ditambahkan. Tutup bukaannya di program yang membuat mesh, atau ekspor ulang sebagai mesh tertutup (watertight), lalu buka lagi.

PartCraft membiarkan bukaan begitu saja bila mengisinya bisa salah menebak: lubang melengkung yang besar, atau dua bukaan pada bidang yang sama (muka berbentuk cincin yang hilang, di mana mengisi setiap batasnya akan menutup lubang di tengah). Tepi yang dimiliki lebih dari dua segitiga juga dilaporkan: permukaan seperti itu tidak memiliki satu bagian dalam yang jelas.

## Beri sketsa pada muka datarnya

Area datar yang terdiri dari banyak segitiga digabung menjadi satu **muka datar** masing-masing, sehingga sketsa dapat berada di atasnya: klik muka dan pilih {{ui:Sketch on this face}}. Muka yang dipotong atau ditambahi nanti tetap menjadi muka. Area melengkung (lubang, fillet) tetap berupa segitiga: itu bukan muka yang bisa Anda pilih, dan tampilan menggambar garisnya dari sudut antar segitiga.

## Ubah nanti

Pilih **Imported1** untuk melihat file asalnya, berapa banyak segitiganya, dan apa yang diperbaiki. **Satuan dalam file**, **Atas dalam file** dan **Pakai untuk** dapat diubah di sana; setiap perubahan adalah satu langkah urungkan.

## Tempat disimpan

Mesh yang sudah diperbaiki disimpan **di dalam** file `.partcraft.json`, sehingga Anda tidak memerlukan lagi file mesh aslinya. File part dengan badan mesh adalah versi 5: PartCraft versi lama menolaknya berdasarkan versinya. Mesh 200.000 segitiga menambahkan sekitar 1,2 MB.

## Batas

- Paling banyak 3 juta segitiga dan 200 MB dalam satu file.
- Badan yang dibuat dari mesh dibangun oleh kernel mesh. Dengan kernel eksak aktif (hanya pengembang), ia menyatakannya dan tidak dibangun.
- Material OBJ, koordinat tekstur, dan kurva bentuk bebas dibiarkan; warna, material, dan objek penyangga 3MF dibiarkan (dialog menyebutkan berapa objek yang dilewati).
- Badan sechalus mesh-nya: STL kasar menghasilkan muka bulat yang kasar. Lubang yang Anda bor di dalamnya sebulat fitur Anda sendiri.
