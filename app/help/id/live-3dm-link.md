---
title: Jaga model .3dm tetap live
summary: Ubah model di program yang membuatnya dan lihat body PartCraft ikut berubah, dari Rhino 8 atau definisi Grasshopper, dengan fitur Anda dibangun ulang pada bentuk baru.
keywords: rhino, grasshopper, tautan live, koneksi live, 3dm, nurbs, parametrik, tautan, sinkron, skrip, dorong, body impor
from: cf4dc9b2
---

Tetap bentuk model di tempat Anda memodelkannya, dan kerjakan, periksa, serta dokumentasikan di sini. Setiap perubahan di program lain menggantikan satu body impor di PartCraft, dan fitur-fitur setelahnya dibangun ulang pada bentuk baru.

:::note
Tautan ini memerlukan **CadCraft Studio** di komputer yang sama. Tab peramban tidak dapat menerima koneksi ini. Tidak ada yang dikirim lewat internet: skrip berbicara dengan Studio di alamat komputer ini sendiri, dengan token.
:::

:::warning
Tautan ini telah diuji dengan penulis file dari skrip dan pengganti sementara untuk program lain, belum di dalam Rhino atau Grasshopper itu sendiri. Jika ada yang gagal di sana, beri tahu kami apa yang dikatakannya.
:::

## Atur

1. Di Studio, buka PartCraft. Di {{ui:Pengaturan}} › {{ui:PartCraft}} › {{ui:Asisten}}, centang **Izinkan asisten AI dan skrip menggunakan PartCraft**, lalu **Sunting**.
2. Di Studio, pilih {{ui:Hubungkan asisten}}. Layar itu menampilkan alamat dan token yang akan Anda tempel di bawah.
3. Unduh skripnya: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Dari Rhino

1. Jalankan `cadcraft_link.py` di editor skrip Rhino (Python 3 di Rhino 8).
2. Pertama kali, tempel alamat dan token. Keduanya disimpan di `.cadcraft-link.json` di folder home Anda, tidak pernah di dalam model. Studio membuat token baru setiap kali dimulai, sehingga skrip akan bertanya lagi saat itu.

Jalankan skrip lagi untuk menghentikannya.

## Dari Grasshopper

Jalankan skrip sekali di Rhino terlebih dahulu, agar alamat dan token tersimpan.

1. Tambahkan komponen Script (Python 3) dan tempel seluruh isi `cadcraft_link.py` ke dalamnya.
2. Beri input berikut: `G` (geometri, dengan akses daftar), `N` (nama, opsional), `On` (toggle boolean), dan `Target` (opsional: `model` atau `part`, jika kedua aplikasi terbuka).
3. Atur `On` menjadi true.

Setiap solve mengirim `G` dan menggantikan apa yang dikirim komponen itu terakhir kali.

## Cara kerjanya di sini

- **Satu body.** Semua yang terlihat di model menjadi satu fitur impor, seperti saat Anda [membuka file .3dm](topic:open-3dm-files).
- **Harus tertutup.** PartCraft mengisi lubang kecil dan bukaan datar, dan program lain diberi tahu berapa banyak. Jika model masih belum tertutup, PartCraft mempertahankan body yang sebelumnya dan bilah status menyatakannya. Perubahan berikutnya yang menutup akan memperbarui body.
- **Selesaikan yang sedang Anda kerjakan.** Di sketsa atau gambar, pembaruan ditolak dan dicoba lagi; pembaruan akan masuk setelah Anda kembali ke model.
- **Urungkan.** Pembaruan yang berselang kurang dari dua detik satu sama lain berbagi satu langkah urungkan.
- **Simpan.** File part menyimpan tautannya. Jalankan skrip lagi setelah Anda membukanya kembali, dan fitur yang sama akan diperbarui.

**Hanya satu arah.** Perubahan di sini tidak kembali ke program lain.

## Jika ada yang salah

- **"Tidak ada jendela ModelCraft atau PartCraft yang mengizinkannya":** lakukan langkah 1 pada bagian Atur.
- **"Studio menolak token":** Studio telah dimulai ulang. Salin token baru dan jalankan skrip lagi. Untuk Grasshopper, jalankan di Rhino terlebih dahulu.
- **"Tidak dapat menjangkau CadCraft Studio":** Studio tidak berjalan, atau alamatnya berubah.
