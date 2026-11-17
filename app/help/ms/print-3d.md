---
title: Sediakan bahagian untuk percetakan 3D
summary: Semak bahawa bahagian atau himpunan itu tertutup, muat pada pencetak anda dan berdiri di atas platform, kemudian muat turun sebagai STL atau 3MF untuk slicer anda.
keywords: cetak 3d, percetakan 3d, pencetak, cetak, slicer, stl, 3mf, kedap air, tertutup, manifold, platform cetakan, saiz platform, julur, sokongan, asas, milimeter, eksport, benang skru, kelonggaran
from: 90d81dff
---

Slicer memerlukan bentuk tertutup: tiada lubang, setiap muka menghadap ke luar, tiada apa yang melepasi dirinya sendiri. Bahagian yang dibina PartCraft sememangnya tertutup, jadi semakan ini kebanyakannya memberitahu anda saiz, sama ada bahagian muat pada platform cetakan pencetak anda, sama ada ia berdiri di atas muka rata, dan berapa banyak yang terjulur.

## Semak dan muat turun

1. Pilihan, sekali sahaja: tetapkan platform cetakan pencetak anda dalam {{ui:Tetapan}} › PartCraft › **Pencetak 3D**: lebar, dalam dan tinggi dalam milimeter. Biarkan kosong untuk langkau semakan itu.
2. Pilih {{ui:Eksport}}, kemudian {{ui:Semak untuk percetakan 3D (STL atau 3MF)…}}.

   Dialog menyatakan "Sedia untuk dicetak" atau "Tidak sedia untuk dicetak", menyenaraikan apa-apa yang salah, dan memberikan saiz pada platform (X × Y × Z, dalam milimeter), isipadu dan bilangan segi tiga.

3. Klik {{ui:Muat turun 3MF}} atau {{ui:Muat turun STL}}. Fail itu sama dengan {{ui:Eksport}} › {{ui:3MF, untuk percetakan 3D}} atau {{ui:STL, untuk percetakan 3D}}.

Dalam himpunan, semakan dan fail mengambil keseluruhan himpunan, setiap salinan di tempat ia diletakkan.

Bahagian diperiksa seperti yang ditulis oleh eksport: apa yang menghala ke atas dalam PartCraft (tegak lurus kepada Satah atas) menghala ke atas pada platform. Bahagian yang dilakar pada Satah atas terbaring rata.

## Apa yang dialog boleh nyatakan

**Tidak sedia untuk dicetak** (slicer mungkin menolaknya atau mencetaknya dengan salah): lubang (tepi dengan muka pada satu sisi sahaja), tepi yang dikongsi oleh tiga atau lebih muka, muka yang menghadap arah bertentangan, jasad yang songsang, atau jasad yang melepasi dirinya sendiri. Bahagian yang dibina dalam PartCraft tidak sepatutnya menunjukkan ini; jika ia berlaku, lihat [Penyelesaian masalah](topic:troubleshooting).

**Amaran** (ia akan dicetak, tetapi semak dahulu):

- **Lebih besar daripada platform cetakan pencetak anda**, walaupun diputar 90° di atasnya.
- **Tiada apa yang terbaring rata di bawah**: pusingkan bahagian dalam slicer anda supaya satu muka berada di atas platform, atau ia memerlukan sokongan atau rakit.
- **Condong keluar lebih 45° daripada tegak**: muka tersebut memerlukan sokongan dalam kedudukan semasa. Kedudukan lain mungkin memerlukan kurang.
- **Jasad berasingan bertindih** atau **bertemu muka dengan muka**: slicer biasanya menggabungkannya. {{ui:Gabung}} dalam Ciri › {{ui:Lagi}} menyatukannya menjadi satu jasad. Lihat [Jasad](topic:bodies).
- **Kurang daripada 1 mm merentasi**: semak saiz bahagian.

## Ulir yang boleh dicetak

Ulir yang dimodelkan dicetak sebagai ulir sebenar. Beri sedikit **Kelonggaran** supaya bolt cetakan boleh masuk ke dalam nat cetakan: lihat [Ulir](topic:threads).

## Muka bulat yang licin

STL dan 3MF terdiri daripada segi tiga. Untuk muka bulat yang lebih licin, klik ruang kosong supaya tiada apa dipilih, dan tetapkan **Lengkung** kepada **Halus (128 setiap pusingan)** atau **Sangat halus (256 setiap pusingan)** dalam panel kanan sebelum anda mengeksport. Lebih banyak segi tiga menghasilkan fail yang lebih besar.

## Lebih besar, lebih kecil, atau dalam kepingan

- **Eksport › Skala untuk percetakan (STL atau 3MF)…** menyimpan bahagian yang diskalakan mengikut paksi tanpa mengubahnya: **elaun pengecutan** dalam peratus (saiz × (1 + s), atau saiz tepat ÷ (1 − s)) untuk corak tuangan, atau faktor biasa, mengikut tengah, sudut terendah, tengah bahagian bawah atau asalan.
- **Eksport › Pisahkan untuk percetakan (zip bahagian)…** memotong bahagian yang terlalu besar untuk pencetak anda kepada kepingan yang masing-masing muat pada platform yang anda berikan, disambungkan dengan pasak, kunci, ekor burung, lubang dowel atau poket magnet (dengan kelonggaran yang anda tetapkan). Setiap kepingan dan sambungan dinomborkan, dan kepingan disimpan sebagai STL atau 3MF dalam zip bersama helaian himpunan. Bahagian itu sendiri tidak berubah.

## Tidak disemak

Ketebalan dinding, butiran yang lebih kecil daripada muncung anda, dan cara slicer meletakkan sokongan. Slicer anda menunjukkan semua itu.
