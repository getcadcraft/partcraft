---
title: Kekalkan model .3dm sentiasa dikemas kini
summary: Tukar model dalam program yang menghasilkannya dan lihat jasad PartCraft mengikutinya, daripada Rhino 8 atau takrif Grasshopper, dengan ciri anda dibina semula pada bentuk baharu.
keywords: rhino, grasshopper, pautan langsung, sambungan langsung, 3dm, nurbs, parametrik, pautan, segerak, skrip, tolak, jasad yang diimport
from: cf4dc9b2
---

Teruskan membentuk model di tempat anda memodelkannya, dan jalankan pemesinan, semakan serta dokumentasi di sini. Setiap perubahan dalam program lain menggantikan satu jasad yang diimport dalam PartCraft, dan ciri selepasnya dibina semula pada bentuk baharu.

:::note
Pautan ini memerlukan **CadCraft Studio** pada komputer yang sama. Tab pelayar tidak dapat mengambil sambungan. Tiada apa yang dihantar melalui internet: skrip bercakap dengan Studio pada alamat komputer ini sendiri, dengan token.
:::

:::warning
Pautan ini telah diuji dengan penulis fail skrip dan pengganti bagi program lain, belum lagi di dalam Rhino atau Grasshopper sendiri. Jika ada yang gagal di sana, beritahu kami apa yang dikatakannya.
:::

## Sediakan

1. Dalam Studio, buka PartCraft. Dalam {{ui:Tetapan}} › {{ui:PartCraft}} › {{ui:Pembantu}}, tanda **Benarkan pembantu AI dan skrip menggunakan PartCraft**, kemudian **Sunting**.
2. Dalam Studio, pilih {{ui:Sambung pembantu}}. Ia menunjukkan alamat dan token yang akan anda tampal di bawah.
3. Muat turun skrip: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Dari Rhino

1. Jalankan `cadcraft_link.py` dalam editor skrip Rhino (Python 3 dalam Rhino 8).
2. Kali pertama, tampal alamat dan token. Ia disimpan dalam `.cadcraft-link.json` dalam folder rumah anda, tidak sekali-kali dalam model. Studio membuat token baharu setiap kali ia bermula, jadi skrip akan bertanya semula ketika itu.

Jalankan skrip sekali lagi untuk berhenti.

## Dari Grasshopper

Jalankan skrip sekali dalam Rhino dahulu, supaya alamat dan token disimpan.

1. Tambah komponen Script (Python 3) dan tampal keseluruhan `cadcraft_link.py` ke dalamnya.
2. Berikan input berikut: `G` (geometri, dengan akses senarai), `N` (nama, pilihan), `On` (togol boolean), dan `Target` (pilihan: `model` atau `part`, jika kedua-dua apl dibuka).
3. Tetapkan `On` kepada benar.

Setiap penyelesaian menghantar `G` dan menggantikan apa yang dihantar oleh komponen pada kali terakhir.

## Cara ia berfungsi di sini

- **Satu jasad.** Semua yang kelihatan dalam model menjadi satu ciri yang diimport, seperti apabila anda [membuka fail .3dm](topic:open-3dm-files).
- **Ia mesti tertutup.** PartCraft mengisi lubang kecil dan bukaan rata, dan program lain diberitahu berapa banyak. Jika model masih tidak tertutup, PartCraft mengekalkan jasad yang ada dan bar status memberitahu anda. Perubahan seterusnya yang menutup akan mengemas kininya.
- **Selesaikan apa yang anda lakukan.** Dalam lakaran atau lukisan, kemas kini ditolak dan dicuba semula; ia tiba apabila anda kembali ke model.
- **Buat asal.** Kemas kini dalam tempoh dua saat antara satu sama lain berkongsi satu langkah buat asal.
- **Simpan.** Fail bahagian mengekalkan pautan. Jalankan skrip sekali lagi selepas anda membukanya semula, dan ciri yang sama akan dikemas kini.

**Satu hala sahaja.** Perubahan di sini tidak kembali ke program lain.

## Jika ada yang tidak kena

- **"Tiada tetingkap ModelCraft atau PartCraft yang membenarkannya":** lakukan langkah 1 persediaan.
- **"Studio menolak token":** Studio telah dimulakan semula. Salin token baharu dan jalankan skrip sekali lagi. Untuk Grasshopper, jalankan dalam Rhino dahulu.
- **"Tidak dapat mencapai CadCraft Studio":** Studio tidak berjalan, atau alamatnya telah berubah.
