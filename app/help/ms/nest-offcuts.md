---
title: Simpan dan guna semula potongan sisa
summary: Selepas susunan, apa yang tinggal pada setiap plat menjadi baki bernombor dalam senarai stok; susunan seterusnya menggunakan baki dahulu, kemudian plat penuh.
keywords: nesting, potongan sisa, baki, stok, sisa, plat, helaian, guna semula, bahan, ketebalan, CSV
from: 7a68d4b8
---

Apabila anda menyusun bahagian pada plat, sisa yang boleh guna bagi setiap plat (bukan kepingan halus) boleh disimpan sebagai **baki**: garis luar bernombor (R-0001, R-0002 …) dengan bahan, ketebalan, saiznya dan kerja asalnya. Senarai disimpan bersama fail dan boleh disimpan sebagai CSV.

## Guna semula

Masukkan **bahan** dan **ketebalan**, biarkan {{ui:Guna baki dahulu}} dihidupkan, dan susun. Baki bagi bahan dan ketebalan yang sama dicuba bermula dari yang terkecil; bahagian yang muat diletakkan di atasnya, di dalam garis luar baki itu sendiri dan jauh dari tepinya; apa yang tidak muat diletakkan pada plat baharu. Laporan kerja menyatakan baki mana yang digunakan dan apa yang tinggal. Dengan {{ui:Simpan sisa sebagai baki}} dihidupkan, {{ui:Tambah kerja ini ke stok}} kemudian menulisnya ke dalam senarai stok: baki yang telah digunakan ditandakan **Digunakan** (bersama kerjanya) dan tidak ditawarkan lagi; apa yang tinggal daripadanya menjadi baki baharu yang mengingati induknya.

## Apa yang dikira sebagai baki

Sisa diukur dengan jarak yang anda tetapkan (tiada bahagian lebih dekat daripada itu kepada potongan). Jalur yang lebih sempit daripada satu per dua puluh plat dan kepingan yang lebih kecil daripada 2 % daripadanya ialah sisa buangan; tukar kedua-dua had jika bengkel anda menyimpan kepingan yang lebih kecil. Lubang di dalam bahagian ialah milik bahagian itu dan tidak disimpan. Gulungan tidak mempunyai baki.

## Dalam lukisan

DXF susunan melukis garis luar setiap baki pada lapisan REMNANTS dengan nombornya di tengah, supaya kepingan boleh ditanda semasa dipotong.

Belum dibina: arah bijian bagi baki, helaian kod bar atau label, baki gulungan, stok yang dikongsi antara projek.
