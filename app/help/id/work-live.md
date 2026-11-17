---
title: Memodelkan satu part bersama Live TeamWork
summary: Apa yang berubah di PartCraft saat Anda berada dalam sesi Live TeamWork dari CadCraft Studio: fitur semua orang dalam satu pohon, setiap jendela membangun solid yang sama, urungkan milik Anda sendiri, dan bergabung dari peramban di jaringan yang sama.
keywords: live, live teamwork, studio live, bersama, berkolaborasi, sesi, bagikan live, gabung, pohon fitur, riwayat, bangun ulang, kursor, penunjuk, saling melihat, nama, warna, pilihan, urungkan, host
from: 1809b96c
---

## Yang akan Anda pelajari

Apa yang terjadi pada sebuah part saat beberapa orang memodelkannya pada waktu yang sama. CadCraft Studio memulai dan bergabung ke sesi Live TeamWork (Bagikan, Gabung); halaman ini membahas part itu sendiri.

## Semua orang memodelkan sekaligus

Semua orang bekerja pada pohon fitur yang sama: sketsa, ekstrusi, lubang, pola, fillet, parameter. Suntingan Anda langsung terlihat; suntingan orang lain muncul sesaat setelah mereka membuatnya. Hanya pohonnya yang berpindah: setiap jendela membangun solid itu sendiri, dan kernel PartCraft membangun solid yang sama dari pohon yang sama di setiap jendela.

- **Dua orang mengubah satu fitur:** pengaturan yang berbeda (satu kedalaman, yang lain kondisi akhir) keduanya dipertahankan; pengaturan yang sama mengikuti perubahan yang lebih akhir.
- **Sketsa** berpindah secara utuh: saat dua orang menyunting satu sketsa sekaligus, suntingan yang lebih akhir menang. Sepakati siapa menggambar sketsa yang mana.
- **Fitur yang dibangun di atas sesuatu yang baru saja dihapus seseorang** (ekstrusi dari sketsa yang dibuang, lubang pada muka yang dibuang) dibatalkan, dan bilah status menyatakan alasannya.
- **Mengatur ulang pohon** diperiksa: jika dua orang menyeret fitur pada saat yang sama, pemindahan kedua dibatalkan.

## Saling melihat

Setiap orang dalam sesi memiliki warnanya sendiri. Anda melihat penunjuk setiap orang sebagai panah berwarna mereka dengan nama mereka di sebelahnya, pada muka yang sedang mereka tunjuk. Saat mereka memilih fitur di pohon, namanya ditampilkan setelah nama mereka.

Penunjuk, nama, dan pilihan hanya untuk sesi: tidak pernah disimpan dalam file dan tidak pernah masuk ke urungkan siapa pun. Mereka meluncur ke tempat setiap orang berada, sehingga tetap halus meski koneksinya lambat.

## Urungkan hanya pekerjaan Anda

{{key:Mod+Z}} mengurungkan suntingan terakhir Anda sendiri dan membiarkan suntingan orang lain. Jika seseorang telah mengubah hal yang sama sejak itu, tidak ada yang diurungkan dan bilah status menyatakan siapa.

## Gabung dari peramban

Rekan tim tanpa Studio dapat memindai gambar di bawah kode host dengan ponsel, tablet, atau komputer di jaringan yang sama. PartCraft terbuka di peramban, terisi dengan part host setelah host mengizinkan Anda masuk, dan membangunnya. Tautan undangan memungkinkan seseorang bergabung dari jaringan lain: host memerlukan kursi Team Cloud Plan untuk aplikasi, semua orang lain bergabung gratis, dan tautan hanya berfungsi selama sesi host terbuka.

## Saat sesi berakhir

Hanya host yang menyimpan part. Semua orang lain menyimpan salinan yang belum disimpan: simpan jika Anda ingin menyimpannya.

:::note
Rakitan belum dibagikan dalam sesi: buka part itu sendiri untuk mengerjakannya bersama.
:::
