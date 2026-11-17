---
title: Node: membangun model dengan menghubungkan
summary: Sambungkan angka menjadi titik, titik menjadi kurva, kurva menjadi permukaan. Ubah sebuah angka dan semua yang bergantung padanya dibangun ulang. Setiap node juga merupakan satu baris CraftScript, dan grafiknya disimpan dalam file.
keywords: node, editor node, pemrograman visual, parametrik, grafik, kabel, port, bentuk bebas, freeform, nurbs, loft, extrude, revolve, lingkaran, kurva, permukaan, seri, rentang, acak, daftar, skrip, craftscript, grasshopper
from: 3a4625de
---

Editor **Node** membangun geometri dengan menghubungkan kotak-kotak. Setiap kotak (sebuah node) melakukan satu pekerjaan kecil: membuat angka, titik, lingkaran, atau loft. Anda menghubungkan hasil satu node ke input node berikutnya, dan model mengikuti saat Anda mengubah angka di awal.

Buka dari daftar workspace: {{ui:Nodes}}. Editor terbuka dalam jendela. Part yang sudah memiliki grafik akan menampilkannya saat Anda membuka workspace. Ini adalah jendela di atas tampilan 3D: seret bilah judulnya untuk memindahkan, seret sudutnya untuk mengubah ukuran.

## Menghubungkan

1. Pilih node dari daftar di kiri (ketik di kotak pencarian untuk mempersempit; <kbd>Enter</kbd> menambahkan hasil pertama yang cocok). Node muncul di tengah kanvas.
2. Seret dari titik **output** bulat di kanan satu node ke titik **input** bulat di kiri node lain. Titik berubah hijau jika cocok dan merah jika tidak; arahkan kursor ke titik untuk melihat alasannya.
3. Input yang tidak tersambung menampilkan kotak untuk nilai yang diketik. Ketik angka dan tekan <kbd>Tab</kbd>: hasilnya dibangun ulang.
4. Lingkaran kecil di bilah judul node adalah **mata**-nya. Node dengan mata aktif digambar di tampilan 3D: sebagai garis untuk kurva, diarsir untuk permukaan, sebagai titik untuk titik.

Seret node dari bilah judulnya. Seret latar belakang untuk menggeser, putar roda untuk zoom. <kbd>Delete</kbd> menghapus node yang dipilih. {{ui:Tidy}} menyusun node dalam kolom, {{ui:Fit}} menampilkan semuanya, {{ui:Undo}} dan {{ui:Redo}} melangkah mundur dan maju melalui suntingan Anda.

## Tipe dan satuan

Port memiliki tipe: angka, ya/tidak, titik, vektor, kurva, permukaan, mesh, solid, atau "geometri" untuk salah satu dari itu. Titik dapat masuk ke input vektor dan sebaliknya. Angka membawa satuan: **panjang** dalam milimeter dan **sudut** dalam derajat. Panjang tidak dapat masuk ke sudut, dan panjang dikali panjang (luas) ditolak, sehingga kabel yang salah dihentikan saat Anda membuatnya.

Titik persegi adalah **daftar**. Saat daftar mencapai input nilai tunggal, node dijalankan sekali untuk setiap item, dan hasilnya menjadi daftar. Daftar yang lebih pendek mengulang item terakhirnya. Misalnya, **Seri** tinggi yang masuk ke **Pindahkan** membuat tumpukan salinan.

## Solid dan Boolean sebagai node

Grup **Solid** membuat badan tertutup dari permukaan eksak yang sama dengan panel Permukaan: **Solid kotak**, **Solid silinder** dan **Solid bola** (ukuran dalam mm), **Union**, **Kurangi** dan **Irisan** (solid kedua diambil dari solid pertama; toleransi adalah seberapa jauh segitiga mesin solid boleh berbeda dari permukaan eksak), **Fillet antar muka** (muka dipilih berdasarkan nomornya dalam solid, 1 untuk yang pertama; sebuah radius dan, di atas 0, radius di ujung), **Volume solid** (mm³), dan **Solid ke mesh** (untuk melihat atau membakarnya). Solid memiliki tipe port sendiri: titik atau angka tidak dapat disambungkan ke input solid, dan titiknya tetap merah. Node Boolean dan Fillet menggunakan mesin solid milik program, yang dimuat saat editor pertama kali dibuka.

## Galat

Node yang tidak dapat melakukan pekerjaannya menjelaskan alasannya di bawah namanya, dengan warna merah ("Radius harus lebih besar dari nol."), dan node setelahnya menunggu. Pesan yang sama muncul sebagai Masalah di panel Masalah, sehingga Anda dapat menemukannya dari sana.

## Setiap node adalah satu baris skrip

Tekan {{ui:Script}} untuk melihat grafik sebagai CraftScript: satu baris per node, misalnya `n3 = nd_circle(n2, n1, [0 0 1]);`. Sunting teks dan tekan {{ui:Make the graph from this script}} untuk mengembalikannya menjadi grafik. Fungsi `nd_` yang sama bekerja dalam CraftScript di PartCraft, sehingga grafik dapat dijalankan, diulang, atau diuji di sana. Angka acak selalu memakai **seed**, sehingga grafik yang sama menghasilkan hasil yang sama di setiap komputer.

## Disimpan bersama file

Grafik disimpan dalam file part (bukan di riwayat, sehingga Urungkan di editor berjalan sendiri). Node membuat kurva, permukaan, dan mesh di samping solid: mereka tidak mengubah fitur part.
