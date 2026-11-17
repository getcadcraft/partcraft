---
title: Solid FEM: semakan tegasan bagi satu bahagian
summary: Hidupkan add-on Solid FEM, jejaringkan bahagian, pilih muka tetap dan beban dalam paparan 3D, selesaikan, dan baca sesaran serta tegasan von Mises pada model.
keywords: solid fem, unsur terhingga, fea, tegasan, von mises, sesaran, muka tetap, beban, tekanan, graviti, frekuensi asli, bentuk mod, jejaring, add-on
from: 8b7e6ba2
---

## Apa yang anda akan lakukan

Semak satu bahagian pepejal di bawah beban: di mana ia bergerak dan di mana tegasan paling tinggi. Kajian ini linear dan kenyal, jadi ia alat bantu semakan; jurutera anda menyemak keputusan.

## Langkah

1. Pilih {{ui:Tetapan}} › {{ui:Add-on}} dan hidupkan {{ui:Solid FEM}} (ia mati sehingga anda berbuat demikian). Buka tab {{ui:Solid FEM}} dalam panel kanan.
2. Di bawah {{ui:Bahan}} pilih satu, atau {{ui:Tersuai}} dan taip nisbah Poisson, ketumpatan dan tegasan alah.
3. Tekan {{ui:Tambah muka tetap}}, klik muka yang dipegang dalam paparan 3D, kemudian tekan {{ui:Selesai memilih}}.
4. Tambah beban dengan {{ui:Tambah daya}}, {{ui:Tambah tekanan}} atau {{ui:Tambah graviti}} dan pilih muka-mukanya dengan cara yang sama.
5. Tekan {{ui:Jejaringkan bahagian}}, kemudian {{ui:Selesaikan}}. Pilih {{ui:Frekuensi asli}} di bawah {{ui:Kajian}} dahulu jika anda mahu frekuensi.
6. Baca {{ui:Hasil}} dan {{ui:Amaran}}, kemudian tekan {{ui:Tunjuk pada model}} untuk melukis tegasan von Mises, sesaran atau bentuk mod; {{ui:Buang plot}} mengalihkannya.

## Nota

- Halaman menyelesaikan sehingga bilangan elemen tetap; baris status memberitahu bila saiz elemen anda terlalu halus.
- Tegasan pada muka tetap, titik beban dan sudut tajam meningkat apabila jejaring diperhalusi. Perhalus dan bandingkan sebelum bergantung pada puncak.
- Setiap perubahan ialah satu langkah buat asal, dan tetapan disimpan dalam fail bahagian.
- Untuk kajian alah dan sentuhan lihat [Semak tegasan dan pesongan](topic:simulation).
