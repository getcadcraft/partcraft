---
title: Persamaan dua arah
summary: Ubah parameter dan part akan mengikutinya; ketik ukuran baru pada angka yang digerakkan dan PartCraft menghitung parameter di baliknya, menanyakan yang mana saat beberapa parameter dapat berubah.
keywords: persamaan, selesaikan mundur, dimensi tergerak, dua arah, balik, goal seek, parameter, nilai tertaut, parameter mana
from: 82dc0269
---

Sebuah persamaan seperti **Extrude1 depth = thick + extra** bekerja di kedua arah.

## Maju: ubah parameter

Pada tab {{ui:Parameters}}, ubah `thick` dari 20 menjadi 30. Kedalaman Extrude1 menjadi 30 + extra, dan part dibangun ulang.

## Mundur: ubah angka yang digerakkan

1. Klik "Extrude1" di riwayat. Kotak **Depth (mm)** (**Kedalaman (mm)**) menampilkan **ƒ**: sebuah persamaan menggerakkannya.
2. Ketik ukuran yang Anda inginkan, misalnya `40`, lalu tekan {{key:Enter}}.

PartCraft menyelesaikan parameter di balik persamaan, melalui sebanyak langkah yang diperlukan (`depth = hub_h`, `hub_h = disc_t + 50`: mengetik tinggi mengubah `disc_t`). Bilah status menyatakan apa yang berubah, misalnya bahwa extra berubah dari 5 menjadi 15.

Ketika dua atau lebih parameter menggerakkan angka itu, sebuah kotak bertanya **Which parameter should change?** (**Parameter mana yang harus berubah?**) dan mencantumkannya. Klik salah satu; yang lain tetap pada nilainya. {{ui:Cancel}} tidak mengubah apa pun.

Hal yang sama berlaku dalam sketsa: klik dua kali dimensi tergerak, ketik nilai, lalu tekan {{key:Enter}}. Ia juga berlaku pada kolom **Nilai** di tabel parameter, untuk parameter yang sendirinya adalah ekspresi.

## Saat tidak bisa

- Angka yang harus bulat (jumlah pola) atau tetap dalam rentang (sudut hingga 360°) ditolak sebelum apa pun berubah.
- Persamaan yang hanya berisi angka tetap (`=40`) tidak memiliki parameter untuk diubah: angka yang Anda ketik menggantikannya.
- Jika tidak ada nilai parameter yang memberikan ukuran yang Anda ketik, bilah status menyatakannya dan tidak ada yang berubah.
- Sketsa yang tidak dapat diselesaikan dengan nilai baru mempertahankan nilai sebelumnya, dan bilah status menyebut nama sketsanya.

Setiap perubahan, ke arah mana pun, adalah satu langkah untuk {{key:Mod+Z}} dan {{key:Mod+Y}}.
