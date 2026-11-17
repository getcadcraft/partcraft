---
title: Pindahkan part ke dan dari pemodel part lain
summary: Kirim part ke pemodel part lain sebagai makro yang membangunnya kembali dengan pohon fitur aktif. STEP bernama dan membuka daftar fitur yang ditulis pemodel lain belum dibuat pada versi ini.
keywords: makro, belum dibuat, swb, vba, pohon fitur, pulang-pergi, ekspor makro, cadcraft-sw.json, step bernama, ap214, variabel global, persamaan, part asli
from: 97ca61da
---

PartCraft bertukar part dengan SolidWorks dua arah, tanpa format file yang tidak dapat dibaca orang lain:

- **Keluar:** sebuah makro (`.swb`, teks biasa) yang dijalankan SolidWorks untuk membangun part itu sendiri, fitur demi fitur, dengan sketsa, relasi, dimensi, variabel global dan persamaannya. Anda mendapatkan part asli dengan pohon fitur aktif, bukan solid mati.
- **Kembali:** sebuah makro yang Anda jalankan di dalam SolidWorks menulis fitur dan persamaan part ke file `.cadcraft-sw.json`. Membuka file itu di PartCraft belum dibuat pada versi ini (memerlukan kernel eksak).

:::warning
Belum ada yang diuji di SolidWorks. SolidWorks hanya berjalan di Windows dengan lisensi, dan PartCraft belum pernah menjalankan makro ini di dalamnya. Makro ditulis dari dokumentasi API SolidWorks dan diperiksa strukturnya di sini. Bersiaplah melaporkan masalah; log yang ditulis makro menyatakan langkah mana yang gagal.
:::

PartCraft tidak dapat menulis file `.sldprt`: format itu tertutup. Makro adalah cara untuk mendapatkan part asli.

## Kirim part sebagai makro

1. Buka part.
2. Pilih {{ui:Ekspor}}, lalu {{ui:Makro untuk SolidWorks (.swb)}}. PartCraft mengunduh `<part>.swb`; bilah status menyatakan bahwa file itu "ditulis tanpa kernel eksak".
3. Sebuah dialog menyatakan berapa banyak fitur, variabel global dan persamaan yang dibangun makro, dan mencantumkan apa pun yang ditinggalkan. Tidak ada STEP yang menyertainya pada versi ini: gunakan {{ui:Ekspor}}, lalu {{ui:STEP (berfaset, kernel mesh)}} jika Anda membutuhkannya.
4. Di SolidWorks, pilih **Tools > Macro > Run**, pilih file `.swb`, lalu tunggu. Ia membuat part baru dari templat part default Anda, mengatur milimeter dan membangun setiap fitur.
5. Di akhir, sebuah pesan menyatakan berapa langkah yang selesai, berapa yang gagal, dan berapa yang cocok dengan body PartCraft. Log lengkap, `<part> macro log.txt`, ditulis di sebelah makro.

Apa yang dibangun makro:

| PartCraft | Di part baru |
|---|---|
| Sketsa pada bidang Depan, Atas atau Kanan | Sketsa pada bidang itu, dengan garis, busur, lingkaran, titik, relasi dan dimensinya (dinamai seperti di PartCraft, misalnya `k7`) |
| Sketsa pada muka | Sketsa pada muka yang sama, dipilih melalui titik di atasnya |
| Sketsa pada bidang tetap | Bidang referensi melalui tiga titik, dan sketsa di atasnya |
| Ekstrusi, potong (buta, tembus semua, bidang tengah, dua arah, tirus) | Boss-extrude atau cut-extrude |
| Revolusi, potongan revolusi | Revolusi terhadap garis tengah yang sama |
| Lubang (sederhana, counterbore, countersink, berulir) | Satu atau dua potongan dengan sketsanya sendiri (lubang berulir adalah mata bor tapnya; tanpa ulir) |
| Pola linear dan melingkar, cermin | Pola linear, pola melingkar, cermin (fitur atau bodi) |
| Fillet, chamfer, shell | Fillet, chamfer dan shell pada tepi dan muka yang sama, dipilih melalui titik |
| Parameter dan persamaan | Variabel global dan persamaan pada dimensi yang diganti namanya |
| Fitur tersupresi, bilah rollback | Disupresi dengan cara yang sama; bilah rollback di tempat yang sama |

Setelah setiap fitur solid, makro membandingkan volume dan ukuran bodi dengan milik PartCraft. Jika berbeda, ia memutar arah fitur itu sekali lalu memeriksa lagi; jika itu tidak lebih baik, ia mengembalikannya dan menulis "Check" di log.

### Yang ditinggalkan

Dialog dan bagian atas makro mencantumkan semua yang tidak terbawa, beserta alasannya. Saat ini: solid yang diimpor (sisipkan STEP sebagai gantinya), sapuan, loft, draft, sumbu dan titik referensi, akhir kondisi "sampai", ekstrusi hanya sebagian kontur, dan apa pun yang bergantung padanya. Spline menjadi kurva melalui titik-titiknya. Versi ini tidak memiliki kernel eksak, sehingga sketsa pada muka dan fitur yang memilih tepi atau muka juga ditinggalkan.

## Kirim STEP bernama

Belum dibuat pada versi ini: {{ui:STEP untuk SolidWorks (bernama, AP214)}} memerlukan kernel eksak, dan memilihnya menyatakan "STEP untuk SolidWorks: belum dibuat. …". Dengan kernel eksak, file itu membawa nama part, milimeter dan warna part, dan menegakkan Y ke atas, seperti cara SolidWorks menampilkan part (ekspor {{ui:STEP AP214 (solid eksak)}} biasa menegakkan Z ke atas). Huruf beraksen kehilangan aksennya dalam nama, dan karakter lain di luar ASCII biasa menjadi `_`.

## Bawa part kembali

Membuka file di PartCraft (langkah 3) belum dibuat pada versi ini: file itu menyatakan "Membuka ekspor SolidWorks: belum dibuat. …". Aplikasi drafting CadCraft tetap dapat membuka file dan mengambil sketsanya.

1. Pilih {{ui:File}} > {{ui:Ekspor}} > {{ui:Ekspor makro untuk membawa part kembali (.swb)}} untuk mengunduh `CadCraftExport.swb`, lalu letakkan di sebelah part Anda.
2. Di SolidWorks, buka part, pilih **Tools > Macro > Run**, lalu pilih `CadCraftExport.swb`. Ia menulis `<part>.cadcraft-sw.json` di sebelah part dan tidak mengubah isinya.
3. Di PartCraft, pilih {{ui:Buka}} dan pilih file itu, atau letakkan di tampilan 3D.
4. Dengan kernel eksak, PartCraft membangun ulang part fitur demi fitur dan menunjukkan apa yang dilakukannya: misalnya "5 dari 5 fitur dibawa dari SolidWorks (Flange.SLDPRT)", setiap fitur yang tidak dapat dibawa ("Tidak dibawa: Sweep1 (Sweep)."), dan apakah volumenya cocok dengan yang ditulis SolidWorks.
5. Simpan sebagai part PartCraft dengan {{ui:Simpan}}.

Sketsa diletakkan pada bidang dasar jika berada di atasnya, pada muka datar yang sesuai dari part jika ada (sehingga mengikuti perubahan berikutnya), dan pada bidang tetap jika tidak. Tepi dan muka dari fillet, chamfer dan shell ditemukan dari titik dan disimpan sebagai referensi bernama. Variabel global menjadi parameter (nama dengan spasi mendapat garis bawah: "Bolt count" menjadi `Bolt_count`), dan persamaan menjadi persamaan pada dimensi yang sama. Tidak ada yang ditebak: apa pun yang tidak memiliki padanannya akan didaftarkan.

Aplikasi drafting CadCraft membuka file yang sama dan mengambil sketsanya.

:::note
Formatnya adalah `cadcraft-sw-export` versi 1, JSON biasa dalam milimeter dan derajat. File dari makro yang lebih baru, atau yang tidak valid, ditolak beserta alasannya.
:::
