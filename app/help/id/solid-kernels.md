---
title: Kernel mesh
summary: Versi PartCraft ini membangun setiap part dengan kernel mesh yang berjalan di peramban Anda. Artinya bagi muka bulat, volume, dan file, cara mengetahui bahwa ia bekerja, dan fitur mana yang menunggu kernel eksak.
keywords: kernel, mesh, manifold, eksak, b-rep, berfaset, kurva, opencascade, occt, fillet memerlukan eksak, belum dibuat, offline, webassembly
from: 68d32d16
---

Kernel geometri adalah mesin yang mengubah riwayat Anda menjadi solid. Versi PartCraft ini punya satu: **kernel mesh** (manifold-3d). Ia berjalan di komputer Anda sebagai program WebAssembly kecil dan siap sesaat setelah aplikasi terbuka. Tidak ada apa pun tentang part Anda yang dikirim ke mana pun.

| | Kernel mesh |
|---|---|
| Bentuk bulat | Faset datar. **Kurva** di panel part menentukan seberapa halus |
| Volume dan luas | Dari solid berfaset, sedikit rendah pada part bulat |
| Sketsa, ekstrusi, potong, revolusi, lubang, pola, cerminan, bidang referensi | Ya |
| Fillet dan Chamfer | Pada tepi lurus di antara muka datar; sudut bulat yang bertemu dipotong miring |
| Shell dan Draft | Shell membuka muka datar (tebal dinding tepat); Draft memiringkan muka datar |
| Ekspor | STL, 3MF, STEP (berfaset), PDF gambar, dan DXF |
| Tampilan gambar | Digambar dari faset, termasuk tampilan potongan |
| Muka dan tepi | Diberi nama dan dikenali menurut jenisnya (datar, silinder, kerucut, bola, torus; lurus, lingkaran), diambil dari sketsa: ruang kerja Simulasi, Generatif, dan Manufaktur, Ukur, pemilihan, dan tabel lubang memakainya |

Chip di dekat ujung kanan bilah status berbunyi **Kernel mesh** selama ia membangun part Anda.

## Yang menunggu kernel eksak

Kernel eksak (B-rep) mempertahankan lingkaran, silinder, dan kerucut sejati, dan fillet mulus pada tepi apa pun; sweep, loft, permukaan, pelat logam, rusuk, beberapa bodi, impor STEP, dan ekspor STEP eksak dibangun di atasnya. Build lab PartCraft sebelumnya memakai OpenCascade untuk itu. Lisensinya (LGPL) tidak cocok dengan rilis ini, tempat setiap aplikasi berlisensi Apache-2.0 dan hanya memakai pustaka berlisensi permisif, sehingga ia tidak disertakan. Tidak ada tanggal untuk hal ini.

Sampai saat itu fitur-fitur tersebut berbunyi **Belum dibuat** saat Anda memilihnya: bilah status memberi alasannya, dan tooltip tombolnya diakhiri dengan "belum dibuat (memerlukan kernel eksak)". [Yang belum dibuat](topic:not-built-yet) mendaftar masing-masing beserta apa yang dapat dilakukan sebagai gantinya.

Part yang dibuat dengannya di build sebelumnya tetap terbuka. Fitur-fitur itu tetap di riwayat dan ditandai tidak dibuat (arahkan penunjuk ke salah satunya untuk alasannya), bagian part lainnya dibangun, dan menyimpan mempertahankannya tanpa perubahan.

## Muka bulat dan Kurva

Kernel mesh menggambar lingkaran sebagai poligon. **Kurva** di panel part menentukan berapa sisi untuk satu lingkaran penuh; makin banyak sisi tampak makin mulus dan terukur makin dekat ke nilai sebenarnya, dan makin lama dibangun. Volume, luas, dan jarak dari {{ui:Ukur}} adalah dari solid berfaset ini: untuk lubang atau boss nilainya sedikit lebih kecil daripada bentuk bulatnya.

## Online dan offline

Kernel mesh adalah bagian dari unduhan aplikasi sendiri. Untuk bekerja tanpa koneksi, simpan PartCraft untuk penggunaan offline selagi Anda online: pilih {{ui:Simpan untuk offline}} di bilah aplikasi dan tunggu sampai berbunyi **Siap offline**. Rincian: [Bekerja offline](common:offline).
