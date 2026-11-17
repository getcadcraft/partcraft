---
title: Jalankan dari pemacu USB
summary: Perkara yang ditulis oleh alat kejuruteraan dan di mana ia ditulis, supaya CadCraft Studio boleh dijalankan dari pemacu USB atau mana-mana folder tanpa pemasang dan tanpa hak pentadbir: tetapan, penjana, cache dan fail bahagian, serta apa yang kekal pada pemacu.
keywords: usb, mudah alih, tanpa pemasang, pentadbir, admin, tetapan, folder data, penjana, di mana fail ditulis, luar talian, privasi, akses hos
from: 263efc79
---

Alat kejuruteraan (penjana, pustaka kejuruteraan, semakan dan fail data) **tidak memerlukan hak pentadbir** dan **tidak memerlukan pemasang**. Ia hanya menulis apa yang disenaraikan di sini, dan tiada yang lain.

| Apa | Di mana ia disimpan |
|---|---|
| Bahagian anda, dengan badan yang dijana, helaian data dan semakannya | Fail bahagian yang anda simpan (`.partcraft.json`), di tempat anda menyimpannya. |
| Penjana yang anda buka dari fail | Dalam storan aplikasi sendiri: storan setempat pelayar dalam laman web, dan folder `data` di sebelah program dalam Studio mudah alih. Paling banyak 20. |
| Tetapan (saiz voxel yang anda tetapkan, benang penyelesai, susun atur) | Storan aplikasi yang sama. |
| Helaian data, medan, jejaring | Hanya di tempat anda menyimpannya: muat turun pergi ke tempat yang anda pilih. |

Alat ini tidak membuat panggilan rangkaian sendiri: penjana yang dihantar ialah fail dalam folder aplikasi sendiri, pustaka dan semakan berjalan di komputer anda dalam worker yang tidak dapat mencapai rangkaian, dan data kejuruteraan (sifat air dan udara, bahan) terdapat di dalam aplikasi. Penjana yang anda buka dari fail dibaca di komputer anda dan tidak pergi ke mana-mana.

## Zip mudah alih Windows dan Linux

Studio mudah alih untuk Windows menyimpan tetapan, cache dan add-on dalam folder `data` di sebelah program. AppImage Linux menyimpannya di sebelahnya apabila fail bernama `portable` terletak di sebelahnya; tanpa fail itu ia menggunakan folder home anda. Tiada bentuk mudah alih untuk Mac: sistem menghalang aplikasi yang dimuat turun daripada menulis di sebelahnya sendiri. Topik bantuan `Studio` menyenaraikan apa yang ditulis oleh program.

## Akses hos

Tiada apa di sini meminta akses hos. Pencetak, mesin bersiri dan peranti USB adalah berasingan: ia meminta apabila kerja memerlukannya, sekali bagi setiap peranti, dan tiada apa dalam penjana atau semakan yang menyentuhnya.
