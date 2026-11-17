---
title: Mengendalikan part dengan parameter
summary: Beri nama ukuran yang penting (lebar, ketebalan, ukuran baut), hubungkan nomor fitur atau dimensi sketsa mana pun ke nama itu dengan =, dan ubah seluruh part dari satu tabel.
keywords: parameter, di mana dipakai, dipakai oleh, variabel global, variabel, persamaan, maksud desain, dimensi penggerak, tautan, ekspresi, rumus, beri nama dimensi, nilai tertaut
from: 58c646ea
---

Parameter adalah angka bernama, seperti `width = 120` atau `margin = bolt * 1.5`. Hubungkan kedalaman, diameter lubang, jumlah pola, atau dimensi sketsa ke parameter itu, dan mengubah parameter akan mengubah semuanya dalam satu langkah. Begitulah cara menjaga maksud desain di dalam part, bukan di kepala Anda.

## Tambah parameter

1. Di panel kanan, klik tab {{ui:Parameters}}.
2. Di bawah **Variabel**, ketik nama di kotak "nama", misalnya `width`.
3. Ketik nilainya di kotak berikutnya, misalnya `120`, lalu tekan {{key:Enter}} (atau klik {{ui:Add}}).

Nilai dapat berupa angka atau ekspresi dari parameter lain: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Kolom **Nilai** menampilkan hasil hitungannya. Nama dimulai dengan huruf atau `_` dan hanya berisi huruf, angka, dan `_`; nama fungsi dan satuan (`sin`, `mm`, `pi`) ditolak, begitu juga loop seperti `a = b` dengan `b = a`.

## Hubungkan angka ke parameter

1. Klik sebuah fitur di riwayat, misalnya "Extrude1". Pengaturannya tampil di tab {{ui:Properties}}.
2. Di kotak angka, seperti **Kedalaman (mm)**, ketik `=` dan ekspresi: `=thick` atau `=width / 4`.
3. Tekan {{key:Enter}}.

Kotak kini menampilkan hasilnya, dan tombol **ƒ** muncul di samping labelnya. Arahkan kursor ke tombol itu untuk melihat persamaannya. Dimensi sketsa bekerja dengan cara yang sama, baik di daftar **Dimensi sketsa** sebuah fitur maupun di kotak dimensi sketsa yang terbuka (klik dua kali sebuah dimensi, ketik `=width`, tekan {{key:Enter}}).

Angka yang bisa dihubungkan: kedalaman ekstrusi, sudut revolusi, diameter lubang, ukuran kedalaman dan counterbore, jumlah pola, jarak dan sudut pola, radius fillet, jarak chamfer, tebal dinding shell, setiap dimensi sketsa, dan ukuran fitur-fitur yang lebih baru (kedalaman kedua, taper, countersink, jarak bidang referensi, sudut draft, dan lainnya).

## Ubah parameter

Di tab {{ui:Parameters}}, ketik nilai atau ekspresi baru di kolom **Ekspresi** dan tekan {{key:Enter}}. Semua yang terhubung dengannya berubah dan part dibangun ulang, sebagai satu langkah: {{key:Mod+Z}} membatalkannya.

Untuk mengubah angka dari ujung lain, lihat [Persamaan dua arah](topic:equations-two-way).

## Lihat di mana parameter dipakai

Di bawah setiap parameter pada tab {{ui:Parameters}}, sebuah baris menyebutkan apa yang memakainya:

- angka yang digerakkannya, seperti **Kedalaman Extrude1** atau **Sketch1 D2 (jarak)**. Klik salah satu untuk memilih fiturnya dan menampilkan propertinya;
- angka yang digerakkannya **melalui** parameter lain, seperti **Hole1 diameter (melalui h, d)** ketika `d = h + 2` dan `h = w / 2`;
- **parameter** yang ekspresinya memakainya, **konfigurasi** yang mengaturnya, dan **skrip** yang membacanya (lihat [Menulis dan menjalankan skrip](topic:craftscript)).

"Belum dipakai." berarti tidak ada yang memakainya: Anda dapat menghapusnya tanpa konfirmasi.

## Lepas tautan, ganti nama, hapus

- **Lepas tautan angka:** klik tombol **ƒ**-nya, atau {{ui:Unlink}} di daftar **Persamaan**. Angka tetap memakai nilainya saat ini dan tidak ada parameter yang mengubahnya lagi.
- **Ganti nama parameter:** ketik nama baru di kotak **Nama**-nya. Setiap ekspresi yang memakainya ditulis ulang.
- **Hapus parameter:** klik × pada barisnya. Bila ada yang memakainya, PartCraft menanyakan apakah nilai saatnya ditulis ke dalam ekspresi-ekspresi itu terlebih dahulu.
- **Menghapus fitur** menghapus persamaan dari angka-angkanya; bilah status menyebutkan yang mana.

:::note
Parameter disimpan dalam file `.partcraft.json` (sebagai versi file 3). Part tanpa parameter disimpan persis seperti sebelumnya.
:::

## Ekspresi

| Tulis | Artinya |
|---|---|
| `120`, `12.5`, `1e3` | angka (milimeter, atau derajat untuk sudut) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | panjang dalam satuan lain, diubah menjadi milimeter |
| `30deg`, `0.5rad` | sudut, diubah menjadi derajat |
| `+ - * / %` dan `^` | aritmetika; `^` adalah pangkat, `-2^2` adalah −4 |
| `sin cos tan asin acos atan atan2` | trigonometri dalam derajat |
| `sqrt pow exp ln log abs sign` | fungsi lain |
| `ceil floor int round(x, digits) min max` | pembulatan dan batas |
| `if(test, a, b)` dengan `< <= > >= == !=` | pilihan: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Nama peka huruf besar-kecil: `Width` dan `width` adalah dua parameter.

Lihat juga [Konfigurasi dan tabel desain](topic:design-tables) dan [Skrip dan baris perintah](topic:scripts-and-cli).
