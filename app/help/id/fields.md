---
title: Field: bentuk sebagai jarak
summary: Apa itu field (bentuk yang disimpan sebagai jarak ke permukaannya), cara membuatnya dari primitif, boolean, kisi, dan permukaan minimal dalam skrip, cara ia menjadi body, dan mengapa skrip yang sama selalu menghasilkan byte yang sama.
keywords: field, jarak bertanda, sdf, voxel, gyroid, tpms, kisi, boolean, offset, shell, blend, dual contouring, deterministik, kedap air, manifold, bata
from: faab7480
---

Sebuah **field** menjelaskan bentuk dengan jarak dari titik mana pun ke permukaannya: negatif di dalam, nol pada permukaan, positif di luar. Bola berjari-jari 5 adalah "jarak ke pusat dikurangi 5". Menggabungkan bentuk adalah aritmetika pada jarak: gabungannya adalah yang lebih kecil dari dua, irisannya yang lebih besar, dan mengurangkan satu bentuk dari bentuk lain adalah yang lebih besar antara jarak pertama dan jarak kedua yang dinegasikan. Memperbesar bentuk 1 mm mengurangi 1 dari jaraknya; dinding berongga adalah jaraknya yang dilipat.

Itulah sebabnya field baik untuk kisi, saluran, dan dinding bertingkat: permukaan gyroid adalah "jumlah sinus sama dengan nol", dan dinding yang menebal dari 1 hingga 3 mm di seluruh part adalah angka yang berubah di seluruh part.

## Dari field ke body

`to_body(field, h)` mengambil sampel field pada kisi titik yang berjarak `h` milimeter, hanya menyimpan titik yang dekat permukaan (kisi jarang berupa bata 8 × 8 × 8), lalu membangun permukaan dengan **dual contouring**: satu verteks per sel permukaan, ditempatkan di tempat bidang-bidang permukaan bertemu, sehingga tepi tajam tetap tajam dalam jarak satu voxel. Permukaannya tertutup dan setiap tepi dimiliki tepat dua segitiga; laporannya menyatakan hal itu. Fitur yang lebih tipis dari sekitar tiga voxel dapat terjepit, dan saat itu laporan menyatakan body tidak sebagai solid tertutup, alih-alih menyembunyikannya.

Ukuran voxel adalah akurasinya: volume bola dengan lebar 25 voxel berada dalam beberapa perseratus persen; dinding hanya seakurat voxelnya. Kisi yang lebih kasar berjalan lebih cepat.

## Selalu byte yang sama

Field tidak memiliki jam dan tidak memiliki bilangan acak. Sinus dan kosinus gyroid, serta setiap eksponensial, logaritma, dan pangkat dalam pustaka, dihitung dari aritmetika biasa sehingga Node, Chrome, Firefox, dan Safari menghasilkan bit yang sama; kisi dilalui dalam urutan tetap, sehingga skrip yang sama dengan masukan yang sama menghasilkan mesh dan lembar data yang identik byte demi byte, di komputer mana pun dan pada jumlah thread worker berapa pun. Ini diuji, termasuk peramban dibandingkan dengan Node.

## Ke mana selanjutnya

[Tulis generator](topic:write-a-generator) membangun part dengan field; [Pustaka teknik](topic:engineering-library) menentukan ukurannya.
