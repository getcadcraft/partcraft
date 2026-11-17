---
title: Studi magnet dari sketsa
summary: Ubah profil tertutup dari sketsa Anda menjadi model magnetik datar (besi, magnet, kumparan), lihat medannya, dan baca gaya serta torsi pada suatu body.
keywords: magnet, magnetik, magnetostatik, medan, rapat fluks, gaya, torsi, kumparan, yoke, besi, kurva B-H, magnet permanen, aktuator, motor, solenoid, maxwell
from: 604efc3b
---

Gunakan {{ui:Lainnya}} di bilah {{ui:Fitur}} › {{ui:Studi magnet dari sketsa…}} pada part yang memiliki sketsa. Setiap bentuk tertutup di sketsa yang Anda centang adalah satu wilayah dari model datar; studi menghitung medan magnet B, serta gaya dan torsi pada body yang Anda pilih.

## Langkah

1. Gambar body sebagai bentuk tertutup di sketsa: yoke besi, magnet, kumparan. Body yang saling bersentuhan berbagi tepi, jadi letakkan di sketsa yang berbeda; body yang terpisah, atau yang berada di dalam satu sama lain (jendela di dalam yoke), boleh berada dalam satu sketsa. Pertahankan sketsa pada bidang yang sama.
2. Buka studi dan centang sketsa yang akan digunakan. Setiap profil tertutup mendapat satu baris, bernomor. Nyatakan apa itu: {{ui:Udara}}, {{ui:Besi}} (permeabilitas, atau kurva B–H yang diketik sebagai pasangan B dalam tesla dan H dalam A/m), {{ui:Magnet permanen}} (Br dalam tesla, arahnya sebagai sudut dari sumbu x sketsa, dan permeabilitas recoil-nya), atau {{ui:Kumparan}} (arus total melalui profilnya, lilitan dikali ampere; tanda menunjukkan arah alirannya).
3. Centang {{ui:Gaya dan torsi pada benda ini}} untuk body yang Anda inginkan. Berikan kedalaman part keluar dari sketsa.
4. Pilih mesh dan udara di sekitar model, lalu {{ui:Jalankan}}.

## Yang akan Anda lihat

- Rapat fluks |B| di atas model, dari biru tua (rendah) hingga merah (tinggi), dengan profil yang diberi nomor.
- Medan terkuat dan lokasinya, jumlah segitiga, dan untuk setiap body yang Anda centang: gaya sepanjang x dan y serta torsi terhadap titik tengahnya, untuk kedalaman yang Anda berikan.
- {{ui:Simpan hasil (CSV)}} menulis angkanya.

## Perlu diketahui

- Ini adalah model datar dan tunak: semuanya per meter kedalaman, tanpa arus eddy dan tanpa histeresis, dan magnet adalah garis recoil lurus (tidak dapat didemagnetisasi).
- Model berada di dalam kotak udara yang tepinya berupa dinding. Bandingkan dua ukuran kotak udara, dan mesh Normal serta Fine: gaya yang diambil dari medan di sekitar body hanya sebaik mesh di sana.
- Besi dengan permeabilitas saja tidak pernah jenuh. Saat medan melewati 2 T, studi memunculkan ⚠ di daftar Masalah: beri besi kurva B–H. Angka pada baris baru adalah contoh (besi μr 2000, magnet 1.2 T), bukan data lembar spesifikasi suatu material.
- Body membutuhkan ruang di sekelilingnya untuk menerima gaya: jika body lain terlalu dekat, studi akan memberi tahu.
- Ini adalah alat bantu gambar, bukan persetujuan rekayasa.

## Berikutnya

- [Medan magnet dalam 2-D (tutorial)](topic:magnetic-fields-2d)
