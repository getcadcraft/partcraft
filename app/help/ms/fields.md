---
title: Medan: bentuk sebagai jarak
summary: Apa itu medan (bentuk yang disimpan sebagai jarak ke permukaannya), cara membinanya daripada primitif, boolean, kekisi dan permukaan minimum dalam skrip, cara ia menjadi jasad, dan sebab skrip yang sama sentiasa memberi bait yang sama.
keywords: medan, jarak bertanda, sdf, voksel, gyroid, tpms, kekisi, boolean, ofset, cangkerang, adunan, kontouran dual, deterministik, kedap air, manifold, bata
from: faab7480
---

**Medan** menerangkan bentuk melalui jarak dari mana-mana titik ke permukaannya: negatif di dalam, sifar pada permukaan, positif di luar. Sfera berjejari 5 ialah "jarak ke pusat tolak 5". Menggabungkan bentuk ialah aritmetik pada jarak: kesatuan ialah yang lebih kecil antara dua, persilangan ialah yang lebih besar, dan menolak satu bentuk daripada yang lain ialah yang lebih besar antara yang pertama dan tolak yang kedua. Membesarkan bentuk sebanyak 1 mm menolak 1 daripada jarak; dinding berongga ialah jarak, dilipat balik.

Sebab itu medan sesuai untuk kekisi, saluran dan dinding beransur: permukaan gyroid ialah "jumlah sinus ialah sifar", dan dinding yang menebal dari 1 ke 3 mm merentasi bahagian ialah nombor yang berubah merentasi bahagian.

## Daripada medan kepada jasad

`to_body(field, h)` mensampel medan pada grid titik yang berjarak `h` milimeter, hanya mengekalkan titik berhampiran permukaan (grid jarang 8 × 8 × 8 bata), dan membina permukaan dengan **kontouran dual**: satu bucu setiap sel permukaan, diletakkan di tempat satah permukaan bertemu, jadi tepi tajam kekal tajam dalam lingkungan satu voksel. Permukaan itu tertutup dan setiap tepi dikongsi oleh tepat dua segi tiga; laporan menyatakannya. Ciri yang lebih nipis daripada kira-kira tiga voksel boleh mengecut, dan kemudian laporan menyatakan jasad itu bukan pepejal tertutup dan bukannya menyembunyikannya.

Saiz voksel ialah ketepatan: isipadu sfera pada 25 voksel merentasi berada dalam beberapa perseratus peratus, dan dinding hanya sebenar seperti voksel-vokselnya. Semakin kasar grid, semakin laju ia berjalan.

## Sentiasa bait yang sama

Medan tidak mempunyai jam dan tiada nombor rawak. Sinus dan kosinus gyroid, dan setiap eksponen, logaritma dan kuasa dalam pustaka, dikira daripada aritmetik biasa supaya Node, Chrome, Firefox dan Safari memberi bit yang sama; grid dilalui dalam susunan tetap, jadi skrip yang sama dengan input yang sama memberi jejaring dan lembaran data yang sama bait demi bait, pada mana-mana komputer dan merentasi sebarang bilangan benang pekerja. Ini telah diuji, termasuk pelayar berbanding Node.

## Ke mana selepas ini

[Tulis penjana](topic:write-a-generator) membina bahagian dengan medan; [Pustaka kejuruteraan](topic:engineering-library) menentukan saiznya.
