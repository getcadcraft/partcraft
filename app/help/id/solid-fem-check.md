---
title: Solid FEM: pemeriksaan tegangan satu part
summary: Aktifkan add-on Solid FEM, buat mesh part, pilih muka tetap dan beban di tampilan 3D, selesaikan, lalu baca perpindahan dan tegangan von Mises pada model.
keywords: solid fem, elemen hingga, fea, tegangan, von mises, perpindahan, muka tetap, beban, tekanan, gravitasi, frekuensi alami, bentuk moda, mesh, add-on
from: 8b7e6ba2
---

## Yang akan Anda lakukan

Periksa satu solid part di bawah beban: di mana ia bergerak dan di mana tegangannya paling tinggi. Studi ini linear dan elastis, sehingga berfungsi sebagai alat bantu pemeriksaan; insinyur Anda meninjau hasilnya.

## Langkah

1. Pilih {{ui:Pengaturan}} › {{ui:Add-on}} dan aktifkan {{ui:Solid FEM}} (dimatikan sampai Anda mengaktifkannya). Buka tab {{ui:Solid FEM}} di panel kanan.
2. Di bawah {{ui:Material}} pilih satu, atau {{ui:Khusus}} dan ketik rasio Poisson, densitas dan tegangan luluh.
3. Tekan {{ui:Tambahkan muka tetap}}, klik muka yang ditahan di tampilan 3D, lalu tekan {{ui:Selesai memilih}}.
4. Tambahkan beban dengan {{ui:Tambahkan gaya}}, {{ui:Tambahkan tekanan}} atau {{ui:Tambahkan gravitasi}}, dan pilih mukanya dengan cara yang sama.
5. Tekan {{ui:Buat mesh part}}, lalu {{ui:Selesaikan}}. Pilih {{ui:Frekuensi alami}} di bawah {{ui:Studi}} terlebih dahulu jika Anda menginginkan frekuensi.
6. Baca {{ui:Hasil}} dan {{ui:Peringatan}}, lalu tekan {{ui:Tampilkan pada model}} untuk menggambar tegangan von Mises, perpindahan atau bentuk moda; {{ui:Hapus plot}} menghapusnya.

## Catatan

- Halaman menyelesaikan hingga jumlah elemen tertentu; baris status menyatakan kapan ukuran elemen Anda terlalu halus.
- Tegangan pada muka tetap, titik beban dan sudut tajam meningkat saat mesh diperhalus. Perhalus dan bandingkan sebelum mengandalkan nilai puncak.
- Setiap perubahan adalah satu langkah undo, dan pengaturan disimpan dalam file part.
- Untuk studi luluh dan kontak, lihat [Periksa tegangan dan defleksi](topic:simulation).
