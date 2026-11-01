---
title: File: buka, simpan, dan ekspor
summary: File part dan rakitan yang dibuka dan disimpan PartCraft, setiap format ekspor dan apa yang dipertahankannya, ke mana file pergi, dan apa yang berubah saat offline atau antarperamban.
keywords: buka, simpan, ekspor, unduh, file, partcraft.json, file rakitan, stl, 3mf, step, dxf, pdf, di mana file saya, offline, simpan sebagai
from: c15c2c48
---

PartCraft bekerja pada file di komputer Anda. Ia tidak pernah mengunggah part, dan tidak ada akun atau penyimpanan cloud yang terlibat. Penyimpanan cloud belum tersedia.

## Yang dibuka PartCraft

| File | Ekstensi | Cara |
|---|---|---|
| Part PartCraft | `.partcraft.json` | {{ui:Buka}}, {{key:Mod+O}}, atau jatuhkan di tampilan 3D |
| Rakitan PartCraft | `.partcraft-asm.json` | Sama: PartCraft melihat jenis yang mana |
| Solid STEP | `.step`, `.stp` | Bodi solid yang dibaca sebagai segitiga: [Buka file STEP dan bangun di atasnya](topic:import-step) |

Mesh STL, OBJ, dan 3MF juga terbuka sebagai bodi solid ([Buka STL, OBJ, atau 3MF](topic:open-meshes)), begitu pula file `.3dm` ([Buka model .3dm](topic:open-3dm-files)). DXF, IGES, dan file part milik program lain tidak dapat dibuka (lihat [Yang belum dibuat](topic:not-built-yet)).

Aturan saat membuka:

- Nama file part atau rakitan harus berakhir dengan `.json`, dan file harus di bawah 50 MB.
- File diperiksa sebelum apa pun ditampilkan. File yang rusak atau diedit ditolak dengan alasan yang jelas, misalnya "Ini bukan file PartCraft."
- File yang disimpan PartCraft yang lebih baru ditolak: "File ini disimpan oleh PartCraft yang lebih baru (versi file 3); yang ini membaca versi 2." File yang lebih lama terbuka.
- Jika part di layar punya perubahan yang belum disimpan, PartCraft bertanya lebih dulu: {{ui:Batal}}, {{ui:Buang perubahan}} atau {{ui:Simpan dulu}}.

## Menyimpan

{{ui:Simpan}} atau {{key:Mod+S}} menyimpan apa yang ada di layar:

- Pada part: `<part name>.partcraft.json`, berisi riwayat lengkap (sketsa, relasi, dimensi, fitur, posisi rollback), bagian potongan, detail, dan catatan GD&T dari lembar gambar, dan teks lengkap solid STEP apa pun yang diimpor di build sebelumnya. Fitur yang tidak dapat dibangun versi ini disimpan kembali tanpa perubahan. Solid itu sendiri tidak disimpan; PartCraft membangunnya kembali dari riwayat saat file dibuka.
- Dalam rakitan: `<assembly name>.partcraft-asm.json`, dengan **setiap part di dalamnya**. Satu file membawa seluruh rakitan, sehingga Anda dapat mengirimnya sendiri.

Menyimpan adalah **unduhan**. Peramban Anda menaruh file di folder unduhannya, atau menanyakan tempatnya jika Anda mengaturnya demikian. Menyimpan lagi membuat unduhan baru; peramban dapat menamainya `Part1 (1).partcraft.json` alih-alih menggantikan yang lama. Ganti nama atau pindahkan file di {{pick:mac=Finder|windows=File Explorer|linux=pengelola file Anda}} sesuka Anda.

Karakter selain huruf, angka, spasi, `_`, `.` dan `-` pada nama part menjadi `_` pada nama file.

:::tip
Sebagian besar peramban punya pengaturan untuk menanyakan tempat menyimpan setiap unduhan. Nyalakan jika Anda ingin pilihan "Simpan sebagai" setiap kali: di Chrome dan Edge ada di bawah Unduhan di pengaturan; di Firefox di bawah Umum, File dan Aplikasi; di Safari di bawah Umum, Lokasi unduhan file.
:::

Selengkapnya tentang ke mana unduhan pergi dan cara menjaga file tetap aman: [Ke mana file Anda pergi](common:your-files).

## Mengekspor

Menu {{ui:Ekspor}} menulis format lain. Masing-masing adalah unduhan, dinamai menurut part.

| Item menu | File | Isinya |
|---|---|---|
| {{ui:STL, untuk cetak 3D}} | `<name>.stl` | STL biner dari segitiga solid, milimeter, **Z ke atas** |
| {{ui:3MF, untuk cetak 3D}} | `<name>.3mf` | 3MF dengan solid sebagai satu objek, milimeter, **Z ke atas** |
| {{ui:STEP AP242 (solid eksak)}} | `<name>.step` | Belum dibuat di versi ini (abu-abu): memerlukan kernel eksak |
| {{ui:STEP AP214 (solid eksak)}} | `<name>.step` | Belum dibuat di versi ini (abu-abu) |
| {{ui:STEP (berfaset, kernel mesh)}} | `<name>.step` | Solid yang terdiri atas muka datar dari mesh: **permukaan bulat adalah banyak faset datar kecil**. Milimeter, pada sumbu PartCraft sendiri (Y ke atas). STEP yang dipakai untuk program CAD lain di versi ini |
| {{ui:DXF sketsa atau muka datar}} | `<name> - <sketch>.dxf` atau `<name> - face.dxf` | DXF R12. Sketsa: garis, busur, lingkaran, dan titik dalam koordinat sketsa sendiri, pada layer PROFILE, CONSTRUCTION dan POINTS. Muka datar yang dipilih: garis luarnya sebagai polyline tertutup (tepi bulat sebagai faset) |
| {{ui:Gambar (PDF): tampilan, potongan, detail, GD&T}} | `<name> - drawing.pdf` | Lembar gambar A3: tiga tampilan, isometrik, potongan dan detail jika diatur, ukuran keseluruhan, simbol GD&T, kepala gambar |

:::note
{{ui:STEP AP242 (solid eksak)}} dan {{ui:STEP AP214 (solid eksak)}} belum dibuat di versi ini: pakai {{ui:STEP (berfaset, kernel mesh)}}. Bentuk dan volumenya benar, tetapi setiap muka bulat adalah banyak faset datar, sehingga program lain tidak dapat memilih lubang sebagai silinder. Atur **Kurva** lebih halus lebih dulu jika itu penting.
:::

- Ekspor adalah dari part di layar. Ekspor dimatikan dalam rakitan; belum ada ekspor rakitan.
- STL, 3MF, STEP berfaset, dan DXF muka selalu terdiri atas faset. Pengaturan **Kurva** (di panel kanan saat tidak ada yang dipilih) menentukan seberapa halus, dari 32 hingga 256 faset per putaran. Pilih Halus atau Sangat halus sebelum mengekspor STL atau 3MF untuk cetakan yang mulus.
- Gambar PDF memakai font Helvetica bawaan pembaca. Karakter yang tidak dapat ditampilkannya tercetak sebagai "?".

Langkah demi langkah: [Ekspor untuk pencetakan, STEP, dan DXF](topic:export-files) dan [Buat lembar gambar](topic:drawing-pdf).

## Pekerjaan yang belum disimpan

- PartCraft menyimpan salinan pemulihan part atau rakitan yang terbuka di peramban ini sesaat setelah setiap perubahan, sehingga crash atau tab yang tertutup tidak menghilangkannya: saat Anda membuka PartCraft berikutnya ia bertanya "Pulihkan pekerjaan Anda?". Itu bukan penyimpanan: simpan ke file untuk mempertahankan pekerjaan Anda. Lihat [Pulihkan pekerjaan yang belum disimpan](common:recover).
- Jika Anda mencoba menutup tab atau memuat ulang dengan perubahan yang belum disimpan, peramban bertanya "Tinggalkan situs?". Itu kotak milik peramban; PartCraft tidak dapat mengubah kata-katanya.
- {{ui:Baru}}, {{ui:Buka}}, dan menutup rakitan bertanya sebelum membuang perubahan yang belum disimpan.

## Online dan offline

Semuanya terjadi di komputer Anda: kernel mesh (program WebAssembly) diunduh bersama aplikasi dan membangun geometri secara lokal, dan file dibaca dari serta ditulis ke disk Anda. Tidak ada data part yang lewat jaringan. Lihat [Kernel mesh](topic:solid-kernels).

Untuk bekerja tanpa koneksi sama sekali, simpan PartCraft untuk penggunaan offline selagi Anda online: pilih {{ui:Simpan untuk offline}} di bilah aplikasi dan tunggu sementara ia menghitung ("Menyimpan 40 dari 212") sampai berbunyi **Siap offline**. Salinan tersimpan mencakup pustaka 3D dan kernel mesh, sehingga setelahnya memodelkan, menyimpan, setiap ekspor, dan gambar semuanya berfungsi offline. Jika berbunyi **Tidak dapat menyimpan**, klik untuk mencoba lagi selagi online; **Offline tidak tersedia** berarti jendela peramban ini tidak dapat menyimpan salinan (jendela pribadi dan beberapa komputer yang dikelola). Dengan salinan tersimpan, mengklik **Siap offline** menawarkan {{ui:Simpan lagi (ambil versi terbaru)}} dan {{ui:Hapus salinan offline}}. Rincian: [Bekerja offline](common:offline).

:::online
Anda sedang online. Bahkan tanpa menyimpan untuk penggunaan offline, setelah PartCraft termuat dan chip bilah status berbunyi "Kernel mesh", Anda dapat terus bekerja jika koneksi terputus. Hanya jangan muat ulang halaman sampai Anda online kembali.
:::

:::offline
Anda sedang offline. Jika PartCraft sudah terbuka, teruskan bekerja; menyimpan dan mengekspor tetap berfungsi. Jika bilah aplikasi berbunyi **Siap offline**, PartCraft juga terbuka dari awal tanpa koneksi; jika tidak, jangan muat ulang tab ini.
:::

## Perbedaan antarperamban

- **Unduhan.** Setiap peramban punya folder unduhan dan cara bertanyanya sendiri. Jika peramban bertanya apakah situs ini boleh mengunduh file, izinkan, atau menyimpan dan mengekspor tidak dapat berfungsi.
- **Seret dan jatuhkan** file ke tampilan berfungsi di Chrome, Edge, Firefox, dan Safari.
- **File dari ponsel atau tablet.** Di iPhone dan iPad, Buka menampilkan aplikasi File; file yang disimpan masuk ke File, Unduhan. Di Android masuk ke folder Download.

Tidak ada perbedaan isi file antarperamban atau sistem operasi.
