---
title: Pelat logam: flens dan pola bentangan
summary: Mulai part pelat logam dari sketsa (pelat datar atau profil yang ditekuk), atur tebal, radius tekuk dan K-factor sekali, tekuk flens ke atas dari tepinya dengan relief tekuk, lalu bentangkan sebagai DXF untuk dipotong.
keywords: pola bentangan, buka lipatan, pengembangan, panjang pengembangan, tunjangan tekuk, garis tekuk, dxf untuk laser, pemotongan laser, pelat logam, flens dasar, flens tepi, flens, tekukan, radius tekuk, k-factor, k factor, tebal, tebal pelat, relief, relief tekuk, kanal, braket, selungkup, lembaran tertekuk
from: 144bd0f6
---

:::note
**Belum dibuat dalam versi ini.** Pelat logam memerlukan kernel geometri presisi, yang tidak dimiliki versi PartCraft ini: ia membangun setiap part dengan kernel mesh. [Yang belum dibuat](topic:not-built-yet) menjelaskan apa yang harus dilakukan sebagai gantinya. Sisa halaman ini menjelaskan cara kerjanya dengan kernel presisi.
:::

Part pelat logam dimulai dengan **Flens dasar**. Ia menetapkan lembaran untuk seluruh part: **tebalnya**, **radius tekuk di dalam**, dan **K-factor**. Setiap **Flens tepi** setelahnya menekuk dengan angka yang sama, sehingga part tetap menjadi satu lembaran yang bisa dibuka lipatannya. Keduanya memerlukan **kernel presisi** (lihat [Kernel mesh](topic:solid-kernels)).

## Mulai dengan flens dasar

1. Buat sketsa. Gunakan **profil tertutup** untuk pelat datar (persegi panjang, atau garis luar tertutup apa pun dengan lubang). Gunakan **satu rantai garis terbuka** untuk lembaran tertekuk, seperti L, U atau Z yang digambar sebagai tampilan tepi lembaran.
2. Pilih sketsa di riwayat fitur.
3. Buka {{ui:Lainnya}} di grup Fitur dan pilih {{ui:Flens dasar}}.

Di panel kanan:

- **Tebal (mm)** adalah tebal lembaran.
- **Radius tekuk (mm)** adalah radius dalam setiap tekukan. 0 memberi sudut dalam yang tajam; bagian luarnya tetap berbelok dengan radius sebesar satu tebal.
- **K-factor** menyatakan letak lapisan netral di dalam lembaran, dari 0 (muka dalam) sampai 0,5 (tengah). Ini menentukan panjang lembaran saat dibentangkan. 0,44 adalah nilai awal; bengkel atau pemasok material Anda dapat memberi nilai mereka sendiri.
- **Kedalaman (mm)** adalah seberapa jauh profil yang ditekuk memanjang keluar dari bidang sketsa. Pelat mengabaikannya.
- **Tebal di luar tekukan**: profil terbuka adalah satu muka lembaran. Secara bawaan tebal berada di sisi dalam tekukan pertama, sehingga garis yang Anda gambar adalah sisi luar kanal. Centang untuk menempatkan garis di sisi dalam. Hasilnya sama dari ujung mana pun Anda menggambar.

Setiap sudut rantai terbuka menjadi tekukan. Garis yang terlalu pendek untuk menampung tekukannya akan memberi tahu, beserta panjang yang dibutuhkannya.

## Tekuk flens tepi

1. Klik tepi lurus dari muka atas atau bawah lembaran (tepi panjang, bukan tepi tipis).
2. Pilih {{ui:Lainnya}} › {{ui:Flens tepi}}. Jika belum ada tepi yang dipilih, PartCraft menunggu Anda mengklik satu; Esc membatalkan.

Flens menekuk ke atas dari muka tepi itu di sekitar radius dalam lembaran, lalu berlanjut lurus. Di panel:

- **Sudut (°)** adalah seberapa jauh ia menekuk, dari 1 sampai 180. 90 adalah flens siku.
- **Panjang (mm)** adalah kaki lurus setelah tekukan.
- **Tekuk ke arah sebaliknya** menekuknya dari muka lain (ke bawah, bukan ke atas).
- **Offset di awal** dan **Offset di akhir** memperpendek flens dari setiap ujung tepi.
- **Relief tekuk**: saat sebuah ujung diberi offset, celah dipotong ke lembaran di sebelahnya agar tekukan tidak merobek logam di situ. **Lebar relief** mengatur lebar celah; kedalamannya adalah radius tekuk ditambah tebal. Pilih **Tidak ada** untuk membiarkan sudut tidak terpotong.

Untuk mengubah tepi nanti, tekan {{ui:Pilih}} di panel dan klik tepi lain.

:::tip
Gunakan parameter untuk tebal dan radius (lihat [Parameter dan persamaan](topic:parameters)) agar perubahan tebal memperbarui setiap flens sekaligus.
:::

## Bentangkan

Kedua panel diakhiri dengan **Pola bentangan**. Tekan {{ui:Bentangkan}}:

- Pratinjau menampilkan lembaran yang sudah dibuka lipatannya, dengan garis tengah setiap tekukan bergaris putus-putus.
- **Ukuran** dan **Luas** adalah milik blanko datar.
- Setiap tekukan didaftar dengan arahnya (**ke atas** atau **ke bawah**, dilihat dari sisi sketsa flens dasar), sudut dan radius dalamnya.

Setiap tekukan memakai panjang lapisan netral lembaran melewatinya, yaitu **tunjangan tekuk**: sudut (dalam radian) × (radius dalam + K-factor × tebal). Jadi tekukan 90° pada lembaran 2 mm dengan radius 2 mm dan K-factor 0,44 menambah 4,52 mm lembaran datar.

Pada pelat datar, lubang, potongan dan relief tekuk tampil di bentangan pada posisi sebenarnya, termasuk lubang yang menembus flens.

Untuk memotong banyak part, tekan {{ui:Nesting pada lembaran…}} di bawah pola bentangan: lihat [Nesting part datar pada lembaran](topic:nest-flat-parts). Flens dasar yang ditekuk dibentangkan sebagai satu persegi panjang: panjang pengembangannya × kedalamannya, dengan satu garis tekuk per sudut.

{{ui:Simpan DXF}} menyimpan pola bentangan untuk laser, pons atau waterjet, dalam milimeter:

- garis luar pada layer **OUTLINE**, sebagai garis, busur dan lingkaran;
- garis tekuk pada layer **BEND**, bergaris putus-putus;
- catatan pada setiap tekukan di layer **BEND_NOTES**, seperti "UP 90° R2".

Jika Anda mengubah apa pun, bentangan hilang; tekan {{ui:Bentangkan}} lagi untuk bentangan yang baru.

:::note
Periksa K-factor dengan bengkel Anda sebelum memotong: panjang bentangan bergantung padanya, dan nilainya berbeda menurut material, ketebalan dan perkakas.
:::

## Pesan

- **Pelat logam memerlukan flens dasar sebelum itu** — flens tepi ditambahkan sebelum flens dasar mana pun. Pindahkan ke bawah salah satu flens dasar, atau tambahkan flens dasar lebih dulu.
- **Flens tepi memerlukan tepi lurus** — flens hanya menekuk di sepanjang garis; tepi melengkung belum bisa menerimanya.
- **Tepi itu tidak berada pada muka tebal lembaran** — tepi tersebut milik muka yang bukan atas atau bawah lembaran (misalnya dinding lubang). Pilih tepi dari muka atas atau bawah.
- **Offset tidak menyisakan apa pun dari tepi** — kedua offset jumlahnya sama dengan seluruh tepi atau lebih.
- **Flens tepi pada flens dasar yang ditekuk belum bisa dibentangkan** — mulai dari pelat datar dan tekuk semuanya ke atas dengan flens tepi, yang dapat dibuka lipatannya.
- **Potongan dan lubang yang dibuat setelah flens dasar yang ditekuk belum tampil di bentangannya** — bentangan profil tertekuk hanya persegi panjang pengembangannya.
