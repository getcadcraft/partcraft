---
title: Kernel mesh
summary: Versi PartCraft ini membangun setiap part dengan kernel mesh yang berjalan di peramban Anda. Apa artinya untuk bentuk melengkung, volume dan file, cara mengetahui bahwa ia bekerja, dan fitur mana yang menunggu kernel eksak.
keywords: kernel, mesh, manifold, eksak, b-rep, berfaset, kurva, opencascade, occt, fillet memerlukan eksak, belum dibuat, offline, webassembly
from: f931645c
---

Kernel geometri adalah mesin yang mengubah riwayat Anda menjadi solid. Versi PartCraft ini memiliki satu: **kernel mesh** (manifold-3d). Kernel ini berjalan di komputer Anda sebagai program WebAssembly kecil dan siap sebentar setelah aplikasi dibuka. Tidak ada yang tentang part Anda dikirim ke mana pun.

| | Kernel mesh |
|---|---|
| Bentuk melengkung | Muka datar. **Kurva** di panel part menentukan seberapa halus |
| Volume dan luas | Dari solid berfaset, sedikit lebih rendah pada part yang melengkung |
| Sketsa, ekstrusi, potong, revolusi, lubang, pola, cermin, bidang referensi | Ya |
| Fillet dan Chamfer | Pada tepi lurus di antara muka datar; fillet yang bertemu dipotong miring |
| Shell dan Draft | Shell membuka muka datar (ketebalan dinding persis); Draft memiringkan muka datar |
| Ekspor | STL, 3MF, STEP (eksak: muka melengkung ditulis pada permukaan aslinya; atau berfaset), PDF gambar dan DXF |
| Tampilan gambar | Digambar dari faset, termasuk tampilan potongan |
| Muka dan tepi | Diberi nama dan dikenali menurut jenisnya (datar, silinder, kerucut, bola, torus; lurus, lingkaran), diambil dari sketsa: ruang kerja Simulasi, Generatif dan Manufaktur, Ukur, pemilihan dan tabel lubang menggunakannya |

Chip di dekat ujung kanan bilah status berkata **Kernel mesh** saat sedang membangun part Anda.

## Yang menunggu kernel eksak

Kernel eksak (B-rep) menyimpan lingkaran, silinder dan kerucut yang sejati, serta fillet halus pada tepi mana pun, sapuan, loft, permukaan, pelat logam, rusuk, beberapa bodi, dan impor STEP dengan muka melengkung yang tetap eksak, dibangun di atasnya. (Ekspor STEP eksak tidak menunggu kernel ini: kernel mesh mengetahui permukaan sejati setiap muka dari sketsa, dan ekspor menuliskannya.) Build laboratorium PartCraft sebelumnya menggunakan OpenCascade untuk itu. Lisensinya (LGPL) tidak sesuai dengan rilis ini, di mana setiap aplikasi berlisensi Apache-2.0 dan hanya menggunakan pustaka berlisensi permisif, sehingga tidak disertakan. Belum ada tanggal untuk ini.

Sampai saat itu fitur-fitur tersebut menyatakan **Belum dibuat** saat Anda memilihnya: bilah status memberi alasannya, dan tooltip tombolnya diakhiri dengan "belum dibuat (memerlukan kernel eksak)". [Yang belum dibuat](topic:not-built-yet) mencantumkan masing-masing beserta apa yang harus dilakukan sebagai gantinya.

Part yang dibuat dengan fitur-fitur itu pada build sebelumnya tetap dapat dibuka. Fitur-fitur itu tetap berada di riwayat dan ditandai belum dibuat (arahkan kursor ke salah satunya untuk alasannya), bagian lain dari part tetap dibangun, dan penyimpanan membiarkannya tidak berubah.

## Muka melengkung dan Kurva

Kernel mesh menggambar lingkaran sebagai poligon. **Kurva** di panel part menentukan berapa sisi yang didapat sebuah lingkaran penuh; lebih banyak sisi tampak lebih halus dan lebih mendekati nilai sejatinya, tetapi membutuhkan waktu lebih lama untuk dibangun. Volume, luas dan jarak dari {{ui:Ukur}} adalah milik solid berfaset ini: untuk lubang atau tonjolan, nilainya sedikit lebih kecil dibanding bentuk melengkung.

## Daring dan luring

Kernel mesh adalah bagian dari unduhan aplikasi itu sendiri. Untuk bekerja tanpa koneksi, simpan PartCraft untuk penggunaan luring saat Anda daring: pilih {{ui:Simpan untuk offline}} di bilah aplikasi dan tunggu sampai muncul **Siap offline**. Rincian: [Bekerja offline](common:offline).
