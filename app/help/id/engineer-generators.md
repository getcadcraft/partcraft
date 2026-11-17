---
title: Part dari fisika: generator
summary: Ruang kerja Engineer dan fitur Generated body: pilih generator, atur inputnya (aliran, tekanan, suhu, material, printer), dan dapatkan part yang ukurannya dihitung dari rumus buku teks, dengan lembar datanya, pemeriksaan manufakturnya, serta file untuk alat analisis. Input yang sama selalu menghasilkan part yang sama.
keywords: engineer, generator, benda hasil generator, fisika, aturan, penukar panas, manifold, nozel, lattice, gyroid, lembar data, input, deterministik, input sama part sama, pemeriksaan manufaktur, pencetakan 3D, powder bed
from: 5a387dc0
---

**Generator** adalah skrip yang menentukan ukuran sebuah part dari kebutuhan Anda dan membangunnya. Generator penukar panas memerlukan panas yang dipindahkan, dua aliran dan suhunya, tekanan, serta material; ia menghitung seberapa besar inti yang dibutuhkan dan seberapa tebal dindingnya, membangunnya, dan memberi tahu angka yang dipakainya beserta asal setiap angka. Ubah input dan part mengikutinya.

Hasilnya adalah body biasa di dalam part: ia ada di daftar fitur, dapat dicetak, dapat diekspor. Generator itu sendiri juga disimpan di dalam part, sehingga file dapat dibuka di komputer mana pun tanpa generator terpasang, dan **membuka part tidak pernah menjalankan skrip**.

## Buat body

1. Pilih ruang kerja {{ui:Engineer}} di pengalih.
2. Pilih generator di daftar (yang disertakan bersama PartCraft, lalu yang Anda buka dari file) dan klik {{ui:New}}.
3. Skrip berjalan. Setelah selesai, body ada di tampilan dan panel menampilkan inputnya, **lembar data**, dan **pemeriksaannya**.

Anda juga dapat menambahkannya dari Design: {{ui:Features}} › {{ui:More}} › {{ui:Generated body}}.

## Ubah

Ubah input apa pun dan body akan dibuat ulang sesaat setelah Anda berhenti mengetik. Panel menyatakan salah satu dari tiga kondisi:

- **Up to date** (**Mutakhir**): body sesuai dengan skrip dan inputnya.
- **The inputs changed** (**Input berubah**): body di dalam part berasal dari input sebelumnya; sedang dibuat ulang, atau tekan {{ui:Run}}.
- **Not run yet** (**Belum dijalankan**) atau **The last run failed** (**Eksekusi terakhir gagal**): kesalahan skrip ditampilkan beserta barisnya.

{{ui:Stop}} mengakhiri eksekusi yang terlalu lama. Urungkan kembali satu langkah demi satu: satu eksekusi adalah satu langkah, satu input adalah satu langkah.

## Lembar data

Setiap angka yang dihitung generator dicantumkan beserta **satuan** dan **asalnya** (persamaan buku teks, standar, lembar data). Tidak ada konstanta tersembunyi. Lembar ini adalah bagian dari file, jadi sama di komputer berikutnya. [Data keluar](topic:data-out) menjelaskan cara menyimpannya sebagai JSON atau PDF.

## Pemeriksaan

Generator dapat memeriksa part-nya sendiri terhadap proses pencetakan: dinding dan celah yang lebih tipis dari yang dapat ditahan proses, bagian lepas, rongga yang menjebak serbuk atau resin, lubang yang terlalu sempit untuk dibersihkan, dan overhang yang memerlukan penyangga. Temuannya ada di panel dan di daftar {{ui:Problems}} (tombol ⚠), dan disimpan bersama part.

Angka proses adalah angka bulat yang diberikan panduan desain publik untuk proses secara umum (FDM, SLA, SLS, metal powder bed). Angka itu **bukan spesifikasi mesin Anda**: gantilah dengan angka bengkel Anda sebelum mengandalkan pemeriksaan. Pemeriksaan bekerja pada kisi voksel, sehingga akurat hingga sekitar satu voksel: dinding hanya dilaporkan jika lebih tipis dari batas sebesar lebih dari satu voksel.

## Yang tersedia

| Generator | Yang dibuatnya |
|---|---|
| Gyroid block | Blok yang diisi gyroid, Schwarz P, atau lembaran diamond: kisi paling sederhana |
| Gyroid heat exchanger | Inti penukar panas dua fluida, dihitung dari beban dengan metode effectiveness-NTU, dindingnya dari tekanan; dapat memeriksa penurunan tekanan dengan studi aliran pada satu sel |
| Distribution manifold | Header dan cabang, setiap tabung dihitung dari aliran yang dibawanya |
| Graded lattice beam | Kisi yang dindingnya menebal di tempat optimisasi topologi menyatakan material diperlukan |

Semuanya adalah perkiraan awal yang dibangun di atas rumus buku teks. [Pustaka rekayasa](topic:engineering-library) mencantumkan rumus dan batasnya. Jalankan Simulation, Thermal, atau Flow pada hasilnya sebelum Anda mengandalkannya.

## Kontrol ekspor

Generator dan lembar data Engineer membawa pemberitahuan tentang kontrol ekspor dan sanksi. Bacalah di [Engineer dan kontrol ekspor](topic:engineer-export-notice); pemberitahuan itu juga ada di bagian bawah setiap lembar data.

## Belum dibuat

- Header, port, dan fitting pada inti penukar panas: hanya intinya.
- Kurva suhu untuk kekuatan material: material pada suhu ruang.
- Kehilangan tee dan pembagian aliran antar outlet pada manifold.
- Menambahkan generator dari direktori add-on dengan satu klik; membuka file menambahkan satu generator ke peramban ini.
- Generator untuk aplikasi lain.
