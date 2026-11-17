---
title: Garis zebra dan kelengkungan
summary: Periksa seberapa halus muka setiap part menyambung, dengan garis zebra yang mengikuti tampilan atau peta warna kelengkungan rata-rata, dari menu Tampilan.
keywords: zebra, garis zebra, garis pantulan, kelengkungan, peta kelengkungan, kelengkungan rata-rata, kualitas permukaan, kontinuitas, tangen, g1, g2, halus, lipatan, garis sorotan
from: 78fed4c3
---

Dua cara cepat untuk melihat seberapa halus muka sebuah part, pada part mana pun di ruang kerja Desain (ruang kerja Form punya alat sendiri untuk bentuk yang sedang Anda edit: lihat [Bentuk bebas dengan Form](topic:form-surfaces)).

## Garis zebra

Buka {{ui:Tampilan}} lalu pilih {{ui:Garis zebra}}. Part menampilkan pantulan cahaya bergaris, seperti pada permukaan yang dipoles:

- Di tempat dua muka bertemu **secara tangen** (fillet pada bidang datar, permukaan Gordon yang halus), garisnya berlanjut melintasi sambungan dengan sedikit lengkungan.
- Di tempat keduanya bertemu pada **lipatan**, garisnya terputus dan melompat.
- Di tempat kelengkungannya juga cocok (G2), garisnya mengalir tanpa tekukan sama sekali.

Putar tampilan (seret, atau klik muka kubus tampilan): garisnya digambar ulang dari arah yang baru. **Garis** mengatur jumlahnya.

## Kelengkungan

Pilih {{ui:Kelengkungan}} di menu yang sama. Part diwarnai menurut **kelengkungan rata-rata**-nya: biru di tempat cekung, pucat di tempat datar, merah di tempat cembung. Kartu menyatakan pada kelengkungan berapa warna mencapai kekuatan penuh, dalam 1/mm dan sebagai radius. Tepi tajam dihitung sangat melengkung, sehingga tampil kuat; lihat muka di antara tepi-tepi itu.

## Kartu

Keduanya membuka kartu analisis di kiri bawah tampilan, yang juga memuat [analisis draf](topic:draft-analysis). Beralih di antara keduanya dengan **Tampilkan**. Memilih yang sedang terbuka lagi di {{ui:Tampilan}}, {{ui:Tutup}} atau {{key:Esc}} akan mematikannya. Warna mengikuti part saat Anda mengubahnya; tidak ada yang disimpan di dalam part.
