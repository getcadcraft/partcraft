---
title: Tukar bahagian melalui sejarahnya
summary: Edit ciri dan lakaran selepas kejadian, gantung, gulung balik, masukkan ciri lebih awal, susun semula, namakan semula dan padam, serta buat asal mana-mana daripadanya.
keywords: sejarah, pokok ciri, pokok reka bentuk, edit ciri, edit lakaran, gantung, nyahgantung, gulung balik, gulung ke hadapan, susun semula, alih ciri, padam, namakan semula, buat asal, buat semula, bina semula, jana semula, induk anak, bahagian besar, banyak ciri, bina semula perlahan, 750 ciri
from: 6f75aef4
---

Bahagian PartCraft ialah sejarahnya: senarai satah, lakaran dan ciri di sebelah kiri. PartCraft membina semula pepejal dari bahagian atas senarai itu setiap kali sesuatu berubah. Menukar nombor awal dalam senarai menukar semua yang dibina atasnya.

## Edit ciri

1. Klik ciri dalam sejarah (atau lakaran yang diinden di bawahnya).
2. Tukar tetapannya dalam panel kanan. Setiap perubahan dibina semula serta-merta.

Tiada OK atau Batal: setiap perubahan digunakan. Jika anda tidak suka, tekan {{key:Mod+Z}}.

## Tukar tepi atau muka yang digunakan oleh fillet, chamfer atau cangkerang

Klik dua kali ciri dalam sejarah, atau pilih dan pilih {{ui:Pilih tepi}} (atau {{ui:Pilih muka}}). Klik tepi atau muka untuk menambah atau membuangnya, kemudian {{ui:Selesai}} atau {{key:Esc}}. Lihat [Bundar, serong dan berongga](topic:fillet-chamfer-shell).

## Edit lakaran

1. Klik dua kali lakaran dalam sejarah, atau pilih dan pilih {{ui:Edit lakaran}} dalam panel kanan (atau {{ui:Lakaran}} dalam bar alat).
2. Bahagian kembali kepada keadaannya ketika lakaran dibuat: ciri selepasnya disembunyikan semasa anda mengedit.
3. Tukar geometri, kekangan atau dimensi.
4. Tutup lakaran. Keseluruhan bahagian dibina semula dengan perubahan itu.

Untuk menukar saiz sahaja, anda tidak perlu membuka lakaran. Pilih ciri atau lakaran dan tukar nombor di bawah **Dimensi lakaran** (atau **Dimensi pemacu**) dalam panel kanan. Lihat [Tukar saiz tanpa membuka lakaran](topic:change-sizes).

## Apabila ciri gagal

Jika perubahan menjadikan ciri tidak mungkin, PartCraft membina semua yang lain dan menandakan masalah itu:

- ciri menunjukkan **⚠ ralat** dalam sejarah, dan mesejnya berada di bahagian atas panel kanannya (arahkan tetikus ke baris untuk membacanya juga);
- ciri yang memerlukannya menunjukkan **⚠ belum dibina**, dengan "Memerlukan Extrude2, yang gagal.";
- cip bar status menyatakan "1 ciri gagal".

Betulkan punca (atau buat asal), dan bahagian itu dibina semula. Mesej biasa dan tindakan yang perlu diambil terdapat dalam [Penyelesaian masalah](topic:troubleshooting).

## Gantung ciri

Menggantung mematikan ciri tanpa memadamnya: berguna untuk mencuba bahagian tanpa lubang atau corak.

1. Pilih ciri.
2. Pilih {{ui:Gantung}}. Barisnya menunjukkan **mati**. Ciri yang memerlukannya juga tidak dibina.
3. Pilih {{ui:Nyahgantung}} untuk menghidupkannya semula.

## Gulung balik

Menggulung balik membina bahagian hanya sehingga satu titik, supaya anda boleh melihatnya seperti dahulu, atau menambah ciri lebih awal dalam sejarah.

1. Pilih ciri dan pilih {{ui:Gulung balik ke sini}}. Ciri itu dan setiap ciri di bawahnya dikelabukan dan tidak dibina. Baris **Bar gulung balik · gulung ke hadapan** menandakan tempatnya.
2. Sebarang ciri yang anda tambah sekarang dimasukkan **pada bar**, sebelum yang dikelabukan.
3. Klik **Bar gulung balik · gulung ke hadapan** untuk membina semula semua.

Kedudukan gulung balik disimpan dalam fail.

## Susun semula ciri

1. Pilih ciri.
2. Pilih {{ui:Alih ke atas}} atau {{ui:Alih ke bawah}}, atau, dengan baris sejarahnya difokuskan, tekan {{key:Alt+Up}} atau {{key:Alt+Down}}.

Ciri tidak pernah boleh dialih ke atas sesuatu yang digunakannya. Butang itu dikelabukan, dan apabila tetikus diarahkan padanya (atau kekunci dicuba) sebabnya dipaparkan, contohnya "Extrude2 menggunakan Sketch2, jadi Sketch2 mesti didahulukan."

Apa yang digunakan oleh ciri: lakarannya; muka tempat lakarannya terletak; ciri yang disalin oleh corak atau cermin; garis lakaran atau putaran yang digunakan sebagai arah atau paksi.

## Padam ciri

1. Pilih ciri dan pilih {{ui:Padam}} dalam panel kanan atau bar alat, atau tekan {{key:Delete}}.
2. Jika ciri lain menggunakannya, PartCraft bertanya: "Extrude3, Hole1 menggunakan Extrude1 dan turut akan dipadam." Pilih {{ui:Padam semua}} atau {{ui:Batal}}.

Memadam ciri tidak memadam lakarannya: lakaran itu muncul semula dalam paparan sebagai lakaran tidak digunakan, sedia untuk ciri lain. Padam lakaran secara berasingan jika anda tidak memerlukannya.

## Namakan semula

Pilih ciri dan taip **Nama** baharu di bahagian bawah panel kanan (sehingga 60 aksara). Nama bahagian itu sendiri terdapat dalam panel kanan apabila tiada apa-apa dipilih.

## Bahagian dengan ratusan ciri

Bahagian dengan ratusan ciri diuji pada 750 ciri. PartCraft menyimpan pepejal yang dimilikinya separuh jalan dalam sejarah, jadi perubahan lewat dalam sejarah hanya membina semula ciri selepasnya; perubahan berhampiran bahagian atas membina semula semua yang dibina atasnya, dan ini paling lama mengambil masa. Buat asal dan buat semula hanya membina semula dari tempat kedua-dua keadaan itu berbeza. Untuk bekerja lebih pantas pada bahagian besar, gulung balik ke tempat anda sedang bekerja (lihat Gulung balik di atas) atau gantung apa yang tidak diperlukan buat masa ini. Beberapa potongan dan tonjolan yang tidak bersentuhan antara satu sama lain digunakan bersama, jadi bahagian yang dibuat daripada banyak lubang dan tonjolan berasingan dibina lebih cepat daripada yang dijangka oleh bilangan ciri.

Bahagian besar dibina semula di latar belakang: cip binaan di bawah menunjukkan **Membina semula…** bersama sejauh mana ia telah sampai, dan paparan, panel dan menu terus berfungsi semasa ia berjalan. Bahagian pada skrin ialah yang terakhir dibina sehingga yang baharu sedia. Jika anda menukar sesuatu sekali lagi semasa ia dibina semula, PartCraft membina versi yang terbaharu dan membuang yang sedang diproses. Bahagian kecil tetap dibina semula serta-merta.

## Buat asal dan buat semula

- {{key:Mod+Z}} atau {{ui:Buat asal}} membuat asal perubahan terakhir: ciri, tetapan, suntingan lakaran, seretan. Bar status menyatakan apa, contohnya "Dibuat asal: tukar dimensi."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} atau {{ui:Buat semula}} membuat semula perubahan itu.
- PartCraft menyimpan 200 langkah terakhir (bahagian yang sangat besar, yang 200 salinannya akan menggunakan banyak memori, menyimpan lebih sedikit, tetapi tidak kurang daripada 20 yang terbaharu). Perubahan pada helaian lukisan (keratan, simbol GD&T yang dialih) berada dalam senarai yang sama. Membuka fail atau memulakan bahagian baharu mengosongkannya.

:::mac
Pada Mac, guna ⇧⌘Z untuk buat semula. Dalam Safari, ⌘Y mungkin membuka sejarah pelayar sebaliknya.
:::
