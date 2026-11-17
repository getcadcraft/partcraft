---
title: Rancang elemen BimCraft dan simpan kembali
summary: Part yang dikirim dari BimCraft terbuka beserta bangunan di sekitarnya, berwarna abu-abu dan hanya-baca. Ubah, lalu simpan kembali agar BimCraft dapat menerima bentuk barunya.
keywords: bimcraft, bim, elemen, kirim, simpan kembali, tautan, bangunan, konteks, tetangga, tumpuan, braket, ifc, terima
from: 0978fe53
---

## Yang akan Anda lakukan

Bekerja pada part yang berasal dari model BimCraft, di tempatnya dalam bangunan, lalu kirim bentuk barunya kembali.

## Langkah

1. Di BimCraft pilih elemen dan pilih {{ui:Tautan part}} › {{ui:Kirim ke PartCraft}}. PartCraft membukanya sebagai part baru. Bilah status menunjukkan bahwa itu adalah elemen BIM.
2. Elemen di sekitarnya (dalam 3 m) digambar abu-abu. Elemen itu ada sebagai acuan desain. Anda tidak dapat memilih atau mengubahnya, dan elemen itu tidak disimpan dalam file part.
3. Ubah part seperti biasa: potong, tambahkan, bor, cerminkan. Origin dan sumbunya adalah milik elemen itu sendiri, sehingga part kembali ke tempat semula.
4. Pilih {{ui:File}} › {{ui:Ekspor}} › {{ui:Simpan kembali ke BimCraft}}. Bilah status menunjukkan revisi mana yang Anda kirim.
5. Di BimCraft, elemen tampil sebagai berubah sampai orang di sana menerimanya.

## Yang seharusnya Anda lihat

- Part tetap menyimpan tautannya di dalam file. Saat dibuka nanti, bilah status tetap menyebut bahwa itu elemen BIM. Bangunan abu-abu akan muncul kembali selama peramban masih menyimpan paket yang dikirim bersamanya.
- Menyimpan kembali lagi akan mengirim revisi 2, 3, dan seterusnya. BimCraft menyimpan yang terbaru.

## Yang perlu diketahui

- Bentuk dikirim kembali sebagai mesh dalam milimeter, pada sumbu milik elemen itu sendiri. Fitur tetap berada di PartCraft.
- {{ui:Simpan kembali ke BimCraft}} tidak melakukan apa pun untuk part yang tidak berasal dari BimCraft.
- Part yang belum memiliki solid tidak memiliki apa pun untuk dikirim.
- Kedua aplikasi harus dibuka di peramban yang sama: tidak ada yang diunggah, kedua halaman saling meneruskan elemen di antara keduanya.
