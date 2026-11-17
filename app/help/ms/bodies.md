---
title: Gabung, alih dan skala jasad; corak laluan
summary: Buat jasad berasingan, kemudian cantum, potong atau persilangkan selepas itu, alih, putar, jajar atau salin, skala sama rata atau mengikut X, Y dan Z, dan salin ciri atau jasad sepanjang lengkung.
keywords: jasad, berbilang jasad, jasad baharu, gabung, boolean, cantum, potong, persilang, tolak, kesatuan, simpan alat, alih jasad, salin jasad, putar jasad, jajar, alih, skala, skala tidak seragam, regang, affine, corak laluan, corak sepanjang lengkung, tatasusunan sepanjang laluan, corak dipacu lengkung
from: 6b1ea820
---

:::note
**Belum dibina dalam versi ini.** Bekerja dengan beberapa jasad memerlukan kernel geometri tepat, yang tidak dimiliki oleh versi PartCraft ini: ia membina setiap bahagian dengan kernel jejaring. [Apa yang belum dibina](topic:not-built-yet) menerangkan apa yang perlu dilakukan sebaliknya. Bahagian selebihnya halaman ini menerangkan cara ia berfungsi dengan kernel tepat.
:::

Sebuah bahagian boleh memegang lebih daripada satu pepejal. Setiap pepejal berasingan ialah **jasad**. Kebanyakan ciri menambah atau memotong daripada setiap jasad yang disentuhnya; alat dalam halaman ini bekerja pada keseluruhan jasad yang anda pilih. Ia terdapat dalam menu {{ui:Lagi}} kumpulan Ciri: {{ui:Gabung}}, {{ui:Alih jasad}}, {{ui:Skala jasad}} dan {{ui:Corak laluan}}. Semuanya memerlukan kernel tepat (OpenCascade).

## Buat bahagian berasingan

Tetapkan **Operasi** bagi ekstrud atau revolusi kepada **Jasad baharu** dalam panel kanannya (sapuan dan loft juga mempunyainya). Pepejal baharu kekal berasingan walaupun bertindih dengan yang lain. **Persilang** hanya mengekalkan bahagian pertindihan bentuk baharu dengan apa yang sedia ada.

Jasad dinamakan mengikut ciri yang memulakannya: "Extrude2". Salinan dinamakan mengikut asalnya dan ciri yang menyalinnya: "Extrude2, copy 1 of Move1". Nama kekal sama apabila anda menukar saiz di hulu, supaya ciri yang menggunakan jasad terus menjumpainya. Dengan dua atau lebih jasad, panel bahagian (klik ruang kosong) menyenaraikannya dengan isipadunya.

## Namakan semula atau sembunyikan jasad

Klik ruang kosong dalam pandangan untuk melihat panel bahagian. Senarai jasadnya (dipaparkan apabila bahagian mempunyai dua atau lebih jasad) mempunyai kotak nama dan {{ui:Sembunyi}} pada setiap baris.

- **Namakan semula:** taip nama baharu dalam kotak dan tekan {{key:Enter}} atau klik di luar. Setiap panel kemudian menggunakannya: Gabung, Alih jasad, corak. Kosongkan kotak untuk kembali kepada nama daripada ciri yang membuat jasad itu.
- **Sembunyi:** klik {{ui:Sembunyi}} pada barisnya. Jasad itu keluar daripada pandangan dan klik menembusinya, supaya anda boleh memilih muka di belakangnya. {{ui:Tunjuk}} membawanya kembali; {{ui:Tunjuk semua}} membawa kembali setiap jasad tersembunyi.

Menyembunyikan hanya menukar pandangan. Jasad tersembunyi masih dibina, dikira dalam isipadu dan ukuran, dan disimpan dalam eksport STL, 3MF dan STEP. Nama dan jasad tersembunyi disimpan dalam fail bahagian, dan setiap perubahan ialah satu langkah {{ui:Buat asal}}.

## Gabung jasad

1. Shift+klik muka jasad **sasaran**, kemudian muka setiap jasad **alat**.
2. Pilih {{ui:Lagi}}, kemudian {{ui:Gabung}}.
3. Dalam panel kanan pilih **Operasi**:

| Operasi | Hasil |
|---|---|
| Cantum | Sasaran dan alat menjadi satu jasad |
| Potong | Alat ditolak daripada sasaran |
| Persilang | Hanya bahagian yang dikongsi oleh sasaran dan setiap alat dikekalkan |

**Jasad sasaran** ialah yang mengekalkan namanya. Tandakan atau nyahtandakan **Jasad alat**, atau gunakan **Pilih dalam pandangan** dan klik mukanya. **Simpan jasad alat** membiarkan alat kekal di tempatnya juga (berguna untuk acuan dan terasnya). Jika jasad alat sudah digunakan oleh Gabung terdahulu, panel memberitahu anda dan bukannya memilih jasad lain.

## Alih atau salin jasad

1. Pilih {{ui:Lagi}}, kemudian {{ui:Alih jasad}}. Jasad terbaru ditandakan; tandakan yang hendak dialih.
2. Pilih jenis **Alih**:

| Alih | Apa yang anda tetapkan |
|---|---|
| Alih lurus | **ΔX**, **ΔY**, **ΔZ** dalam milimeter |
| Titik ke titik | **Dari** dan **Ke**: klik berhampiran hujung tepi, ciri titik, atau tempat pada muka |
| Putar pada paksi | **Paksi** (X, Y, Z, ciri paksi, atau **Pilih**: tepi lurus, bulatan atau silinder) dan **Sudut (°)** |
| Jajarkan muka ke muka atau satah | **Muka untuk dialih** (muka rata jasad), **Ke** (muka rata atau satah) |

Jajar memutar jasad supaya mukanya terletak pada muka lain, muka ke muka, kemudian menggelongsorkannya sepanjang normal muka itu sahaja. **Arah sama** memutarnya ke arah sebaliknya. **Salin** mengekalkan asal dan menambah salinan yang dialih sebagai jasad baharu.

## Skala jasad

1. Pilih {{ui:Lagi}}, kemudian {{ui:Skala jasad}}, dan tandakan jasad.
2. Taip **Skala**, atau nyahtandakan **Seragam** dan taip **Skala X**, **Skala Y** dan **Skala Z** (sepanjang paksi dunia).
3. **Tentang** ialah titik yang kekal tidak bergerak: pusat kotak jasad, atau titik yang anda pilih.

Skala seragam adalah tepat. Skala tidak seragam menukar bulatan kepada elips: silinder menjadi silinder elips, yang tiada permukaan analitik boleh memegangnya, jadi muka melengkung menjadi permukaan B-spline yang kekal dalam 0.0000004 mm daripada bentuk tepat; muka rata dan tepi lurus kekal tepat. Panel memberitahu apa yang berlaku. Faktor skala mesti lebih daripada sifar (cerminkan dengan {{ui:Cermin}} sebaliknya).

## Salin sepanjang laluan

1. Pilih ciri untuk disalin dalam sejarah, atau biarkan tiada apa dipilih untuk menyalin jasad terbaru.
2. Pilih {{ui:Lagi}}, kemudian {{ui:Corak laluan}}. Lakaran terbaru yang belum digunakan diambil sebagai laluan.
3. Dalam panel kanan tetapkan:

| Tetapan | Apa yang dilakukannya |
|---|---|
| **Salin** | Jasad (setiap salinan menjadi jasad baharu) atau Ciri (dicantum atau dipotong seperti asal) |
| **Laluan** | Tandakan lakaran, atau **Pilih tepi model**; bahagiannya mesti bersambung hujung ke hujung |
| **Kiraan** | Jumlah keseluruhan, termasuk asal |
| **Jarak** | Sama (diagihkan sehingga hujung laluan terbuka, atau mengelilingi laluan tertutup) atau jarak tetap |
| **Orientasi** | Ikut laluan (setiap salinan berputar bersamanya) atau Tetap (salinan kekal selari) |
| **Balik arah** | Pergi ke arah sebaliknya sepanjang laluan |

Salinan bermula di tempat laluan paling hampir dengan asal dan diberi jarak mengikut panjang sepanjang lengkung.

Corak lurus dan bulat juga boleh menyalin jasad: tandakan **Salin jasad** dalam panelnya dan pilih jasad; setiap salinan ialah jasad baharu.

## Had

- Jasad memerlukan kernel tepat; kernel jejaring menyimpan satu pepejal dan memberitahu anda.
- Skala tidak seragam menjadikan muka melengkung kepada anggaran B-spline yang rapat (lihat di atas), bukan silinder atau kon tepat; permukaan ofset belum boleh diskalakan begitu lagi.
- Mengikut laluan pada lengkung 3D yang berpusing membawa salinan tanpa memutarnya; pada laluan rata, pusingan adalah tepat.
- Gabung hanya berfungsi pada pepejal. Jasad permukaan dicantum dengan {{ui:Jahit}}.

Lihat juga [Satah, paksi dan titik rujukan](topic:reference-geometry) untuk titik dan satah "antara objek", dan [Ciri corak dan cermin](topic:patterns-mirror).
