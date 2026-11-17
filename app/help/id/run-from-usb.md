---
title: Jalankan dari flash disk USB
summary: Apa yang ditulis alat rekayasa dan di mana, agar CadCraft Studio bisa berjalan dari flash disk USB atau folder mana pun tanpa installer dan tanpa hak administrator: pengaturan, generator, cache dan file part, serta apa yang tetap berada di flash disk.
keywords: usb, portabel, tanpa installer, administrator, admin, pengaturan, folder data, generator, lokasi penulisan file, offline, privasi, akses host
from: 263efc79
---

Alat rekayasa (generator, pustaka rekayasa, pemeriksaan dan file data) tidak memerlukan **hak administrator** dan **installer**. Alat hanya menulis apa yang tercantum di sini, dan tidak ada yang lain.

| Apa | Disimpan di |
|---|---|
| Part Anda, dengan badan yang dihasilkan, lembar data dan pemeriksaannya | File part yang Anda simpan (`.partcraft.json`), di tempat Anda menyimpannya. |
| Generator yang Anda buka dari file | Di penyimpanan app itu sendiri: local storage peramban pada halaman web, dan folder `data` di sebelah program pada Studio portabel. Paling banyak 20. |
| Pengaturan (ukuran voxel yang Anda atur, thread solver, tata letak) | Penyimpanan app yang sama. |
| Lembar data, kolom data, mesh | Hanya di tempat Anda menyimpannya: unduhan disimpan di lokasi yang Anda pilih. |

Alat ini **tidak membuat panggilan jaringan sendiri**: generator yang disertakan berupa file di folder app itu sendiri, pustaka dan pemeriksaan berjalan di komputer Anda dalam worker yang tidak dapat mengakses jaringan, dan data rekayasa (sifat air dan udara, material) berada di dalam app. Generator yang Anda buka dari file dibaca di komputer Anda dan tidak dikirim ke mana pun.

## Zip Windows portabel dan Linux

Studio portabel untuk Windows menyimpan pengaturan, cache dan add-on di folder `data` di sebelah program. AppImage Linux menyimpannya di sebelahnya jika file bernama `portable` ada di sampingnya; tanpa file itu, ia memakai folder home Anda. Tidak ada bentuk portabel untuk Mac: sistem tidak mengizinkan app yang diunduh menulis di sebelah dirinya sendiri. Catatan portabel dari bantuan shell (bantuan `Studio`) mencantumkan apa yang ditulis program.

## Akses host

Tidak ada yang di sini meminta akses host. Printer, mesin serial dan perangkat USB terpisah: mereka meminta saat sebuah pekerjaan membutuhkannya, sekali per perangkat, dan tidak ada generator atau pemeriksaan yang menyentuhnya.
