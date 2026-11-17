---
title: Permukaan melalui rangkaian lengkung (permukaan Gordon)
summary: Hasilkan satu permukaan licin melalui grid lengkung profil dan panduan yang dilukis dalam lakaran atau diambil daripada tepi model, tutupkannya menjadi pepejal apabila profil tertutup, dan apa yang tepat, apa yang dipadankan, serta mesej apabila rangkaian tidak sesuai.
keywords: tangen, g1, ketangenan, kesinambungan tangen, satah cermin, permukaan gordon, rangkaian lengkung, permukaan sempadan, permukaan rangkaian, profil, panduan, lengkung panduan, loft dengan panduan, rel panduan, kulit, transfinit, coons, permukaan b-spline, permukaan bebas
from: ada3cb8b
---

:::note
**Belum dibina dalam versi ini.** Permukaan Gordon memerlukan kernel geometri tepat, yang versi PartCraft ini tidak ada: ia membina setiap bahagian dengan kernel jejaring. [Apa yang belum dibina](topic:not-built-yet) menerangkan apa yang perlu dilakukan sebaliknya. Bahagian selebihnya halaman ini menerangkannya seperti cara ia berfungsi dengan kernel tepat.
:::

**Permukaan Gordon** ialah satu permukaan yang melalui setiap lengkung rangkaian: satu set **profil** yang berjalan satu arah dan satu set **panduan** yang berjalan arah sebaliknya, bersilang seperti benang jaring. Ia ialah cara anda membentuk badan kapal, sayap atau pemegang daripada beberapa lengkung keratan yang anda kawal secara terus. Ia memerlukan **kernel tepat** (lihat [Kernel jejaring](topic:solid-kernels)).

## Lukis rangkaian

1. Lukis **profil**: dua atau lebih lengkung yang berjalan bersebelahan, contohnya keratan pada satah selari. Garisan, lengkok, bulatan dan splin semuanya berfungsi, dan rantai lengkung yang disambung hujung ke hujung dikira sebagai satu lengkung.
2. Lukis **panduan**: dua atau lebih lengkung yang merentasi profil. Setiap panduan mesti bersilang dengan setiap profil sekali, dan setiap profil dengan setiap panduan sekali.
3. Pastikan lengkung benar-benar bertemu. Lukis lakaran panduan supaya lengkungnya melalui titik profil (lekapkan pada titik unjuran, atau taip koordinatnya). Rangkaian menerima jurang sehingga **Toleransi** (0.01 mm sebagai permulaan).

Satu lakaran boleh memuatkan beberapa lengkung: setiap rantai berasingan di dalamnya ialah lengkung sendiri. Jadi anda boleh melukis semua panduan dalam satu lakaran pada satah atas, contohnya.

## Buat permukaan

1. Pilih {{ui:Lagi}} dalam kumpulan Ciri, kemudian {{ui:Permukaan Gordon}}.
2. PartCraft mengambil lakaran yang belum digunakan oleh sesiapa: yang berada pada satah selari dengan yang pertama menjadi **profil**, yang lain menjadi **panduan**. Semak senarai di sebelah kanan dan tetapkan setiap lakaran kepada **Profil**, **Panduan** atau **Tidak digunakan**.
3. Untuk menggunakan tepi bahagian, klik **Pilih tepi sebagai profil** (atau **sebagai panduan**), klik tepi dalam pandangan, kemudian tekan Esc.

Hasilnya ialah **badan permukaan**. {{ui:Tebalkan}} menukarnya kepada pepejal, {{ui:Jahit}} menjahitnya ke permukaan lain, dan {{ui:Pangkas permukaan}} memotongnya.

### Tutup menjadi pepejal

Apabila profil ialah lengkung tertutup (bulatan, splin tertutup, rantai tertutup) dan profil pertama serta terakhir masing-masing terletak rata pada satah, tandakan **Tutup kepada pepejal**. Hujung-hujungnya ditutup dengan muka rata dan bentuk tertutup itu bercantum, dipotong, dipersilangkan atau menjadi badan baharu seperti ciri lain. Begitulah anda membuat loft yang mengikut lengkung panduan. Perkara yang sama berfungsi dengan panduan tertutup.

## Tangen kepada satah sepanjang tepi

Permukaan Gordon melalui lengkungnya, tetapi secara sendiri ia tidak sepadan dengan kecerunan apa yang ditemuinya. Untuk menjadikannya meninggalkan tepi **tangen** kepada satah (G1), seperti satah cermin, supaya salinan yang dicerminkan bercantum tanpa lipatan, atau muka rata tempat ia tumbuh:

1. Pilih ciri Gordon. Di bawah **Tangen kepada**, pilih satah dalam {{ui:Tambah satah…}} (Hadapan, Atas, Kanan atau satah rujukan), atau pilih muka rata dalam pandangan dan tekan {{ui:Tambah muka rata yang dipilih}}.
2. PartCraft mencari lengkung sempadan rangkaian yang terletak dalam satah itu, dan permukaan meninggalkannya secara tangen kepada satah.

Jika satu satah memegang dua lengkung sempadan (lantai di bawah kedua-dua hujung), tambahkannya dua kali: setiap salinan mengambil yang seterusnya. Sehingga empat satah, satu bagi setiap tepi.

Laporan menyatakan di sepanjang lengkung mana setiap satah menjadikannya tangen, dan sudut paling curam yang ditemui permukaan pada satah itu sebelum ini. Panduan yang sedia meninggalkan lengkung itu secara tangen kepada satah diikuti dengan tepat. Panduan yang mendaki menjauhinya dilenturkan dalam jalur sempit berhampiran tepi, dan nilai "mengikuti setiap lengkung dalam" dalam laporan menyatakan sejauh mana: lukis panduan yang meninggalkan tepi secara rata untuk padanan tepat.

## Apa yang tepat dan apa yang dipadankan

Panel menyatakan yang mana satu berlaku, dan sejauh mana permukaan menyimpang daripada lengkung anda.

- **Tepat**: apabila setiap lengkung ialah polinomial (garisan, splin dan rantai daripadanya) dan panduan bersilang dengan semua profil pada parameter yang sama, permukaan itu tepat ialah permukaan Gordon bagi lengkung tersebut. Rangkaian lengkung iso yang dipotong daripada permukaan bikubik memulangkan permukaan itu, dan empat garisan lurus memberi tampalan rata atau terpiuh (bilinear).
- **Dipadankan**: lengkok, bulatan dan tepi bahagian bukan polinomial, dan lengkung yang bersilang pada parameter berbeza perlu diatur masa semula supaya persilangan sejajar. Lengkung itu dipadankan dengan B-spline kubik dalam satu per sepuluh juta saiz rangkaian (kira-kira 0.00001 mm bagi bahagian 100 mm). Tampalan silinder daripada lengkok dan garisan kekal dalam 0.00001 mm daripada silinder sebenar.

Di antara lengkung, permukaan ialah apa sahaja yang diberikan oleh kaedah: profil dicampur merentasi, ditambah panduan dicampur merentasi, ditolak campuran titik persilangan mereka. Ia licin di mana-mana kecuali di tempat lengkung mempunyai bucu tajam. Di mana dua permukaan Gordon berkongsi lengkung sempadan, mereka bertemu tepi ke tepi (G0), bukan tangen.

## Apabila rangkaian tidak sesuai

| Mesej | Apa yang perlu dilakukan |
|---|---|
| "… tidak bertemu: ia melepasi 0.4 mm berjauhan" | Buat profil dan panduan itu bersilang, atau naikkan Toleransi |
| "… bertemu … 2 kali" | Panduan hanya boleh bersilang setiap profil sekali: pisahkan lengkung berulang, atau gunakan lebih sedikit profil |
| "… dalam susunan berbeza" atau "melipat ke atas dirinya" | Dua panduan bersilang antara satu sama lain (atau dua profil). Keluarga mesti berjalan bersebelahan |
| "sekurang-kurangnya dua profil dan dua panduan" | Tambah lengkung, atau tetapkan lebih banyak lakaran kepada Profil atau Panduan |
| "campurkan lengkung terbuka dan tertutup" | Jadikan semua profil terbuka atau semua tertutup (sama juga untuk panduan) |
| "Satu hujung … tidak rata, jadi ia tidak boleh ditutup" | Lukis profil tertutup pertama dan terakhir masing-masing dalam satu satah, atau nyahtandakan Tutup kepada pepejal |

## Had

- Satu muka B-spline bagi setiap rangkaian: tiada tangen G1 atau G2 kepada permukaan jiran.
- Jahitan rangkaian tertutup, pada panduan pertama, bercantum tepi ke tepi tetapi tidak tangen.
- Ciri Loft itu sendiri tiada rel panduan; gunakan permukaan Gordon yang ditutup kepada pepejal sebaliknya.
- Lengkung yang sangat berliku-liku, atau persilangan yang berjarak sangat tidak sekata di sepanjang satu lengkung berbanding yang lain, mungkin memerlukan terlalu banyak titik untuk dipadankan; ciri itu kemudian akan menyatakannya.
