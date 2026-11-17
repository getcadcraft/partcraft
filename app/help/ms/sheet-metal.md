---
title: Kepingan logam: flens dan corak rata
summary: Mulakan bahagian kepingan logam dari lakaran (plat rata atau profil lentur), tetapkan ketebalan, jejari lenturan dan faktor K sekali, lentur flens ke atas dari tepinya dengan pelepasan lenturan, dan hamparkan rata sebagai DXF untuk dipotong.
keywords: corak rata, buka lipatan, pembangunan, panjang terbentang, elaun lenturan, garis lenturan, dxf untuk laser, pemotongan laser, kepingan logam, flens asas, flens tepi, flens, lentur, jejari lenturan, faktor k, faktor k, ketebalan, tolok, pelepasan, pelepasan lenturan, saluran, pendakap, kotak, kepingan melengkung
from: 144bd0f6
---

:::note
**Belum dibina dalam versi ini.** Kepingan logam memerlukan kernel geometri tepat, yang tidak dimiliki versi PartCraft ini: ia membina setiap bahagian dengan kernel jejaring. [Apa yang belum dibina](topic:not-built-yet) menerangkan apa yang perlu dilakukan sebaliknya. Baki halaman ini menerangkannya seperti yang berfungsi dengan kernel tepat.
:::

Bahagian kepingan logam bermula dengan **Flens asas**. Ia menetapkan kepingan untuk keseluruhan bahagian: **ketebalannya**, **jejari lenturan dalaman** dan **faktor K**. Setiap **Flens tepi** selepas itu melentur dengan nombor yang sama, jadi bahagian kekal sebagai satu kepingan yang boleh dibukakan. Kedua-duanya memerlukan **kernel tepat** (lihat [Kernel jejaring](topic:solid-kernels)).

## Mulakan dengan flens asas

1. Lukis lakaran. Gunakan **profil tertutup** untuk plat rata (segi empat tepat, atau mana-mana garis luar tertutup dengan lubang). Gunakan **satu rantai garisan terbuka** untuk kepingan melengkung, seperti L, U atau Z yang dilukis sebagai paparan tepi kepingan.
2. Pilih lakaran dalam sejarah ciri.
3. Buka {{ui:More}} dalam kumpulan Features dan pilih {{ui:Base flange}}.

Dalam panel di sebelah kanan:

- **Ketebalan (mm)** ialah tolok kepingan.
- **Jejari lenturan (mm)** ialah jejari dalaman bagi setiap lenturan. 0 memberi sudut dalam yang tajam; bahagian luar tetap berpusing dengan jejari satu ketebalan.
- **Faktor K** menunjukkan di mana lapisan neutral berada dalam kepingan, dari 0 (muka dalam) hingga 0.5 (tengah). Ia menentukan panjang kepingan apabila dihamparkan rata. 0.44 ialah lalai; bengkel atau pembekal bahan anda boleh memberikan nilai mereka.
- **Kedalaman (mm)** ialah sejauh mana profil lentur keluar dari satah lakaran. Plat mengabaikannya.
- **Ketebalan di luar lenturan**: profil terbuka ialah satu muka kepingan. Secara lalai ketebalan diletakkan di sebelah dalam lenturan pertama, jadi garisan yang anda lukis ialah bahagian luar saluran. Tandakan untuk meletakkan garisan di sebelah dalam. Jawapannya sama dari hujung mana pun anda melukis.

Setiap bucu rantai terbuka menjadi lenturan. Garisan yang terlalu pendek untuk memegang lenturannya akan memberitahu, dengan panjang yang diperlukannya.

## Lentur flens tepi

1. Klik tepi lurus muka atas atau bawah kepingan (tepi panjang, bukan yang nipis).
2. Pilih {{ui:More}} › {{ui:Edge flange}}. Tanpa tepi yang dipilih, PartCraft menunggu anda mengklik satu; Esc membatalkan.

Flens melentur ke atas dari muka tepi itu di sekeliling jejari dalaman kepingan, kemudian berjalan lurus. Dalam panel:

- **Sudut (°)** ialah berapa jauh ia melentur, dari 1 hingga 180. 90 ialah flens segi empat.
- **Panjang (mm)** ialah kaki lurus selepas lenturan.
- **Lentur ke arah lain** melenturkannya dari muka yang satu lagi (ke bawah dan bukan ke atas).
- **Ofset di permulaan** dan **Ofset di penghujung** memendekkan flens dari setiap hujung tepi.
- **Pelepasan lenturan**: apabila hujung diofset, slot dipotong ke dalam kepingan di sebelahnya supaya lenturan tidak mengoyakkan logam di situ. **Lebar pelepasan** menetapkan lebar slot; kedalamannya ialah jejari lenturan tambah ketebalan. Pilih **Tiada** untuk membiarkan bucu tidak dipotong.

Untuk menukar tepi kemudian, tekan {{ui:Pick}} dalam panel dan klik yang lain.

:::tip
Gunakan parameter untuk ketebalan dan jejari (lihat [Parameter dan persamaan](topic:parameters)) supaya perubahan tolok mengemas kini setiap flens sekaligus.
:::

## Hamparkan rata

Kedua-dua panel berakhir dengan **Corak rata**. Tekan {{ui:Lay flat}}:

- Pratonton menunjukkan kepingan yang dibukakan, dengan garis tengah setiap lenturan bertitik-titik.
- **Saiz** dan **Luas** ialah ukuran bahan kosong rata.
- Setiap lenturan disenaraikan dengan arahnya (**up** atau **down**, dilihat dari sisi lakaran flens asas), sudut dan jejari dalamannya.

Setiap lenturan mengambil panjang lapisan neutral kepingan melaluinya, **elaun lenturan**: sudut (dalam radian) × (jejari dalaman + faktor K × ketebalan). Jadi lenturan 90° pada kepingan 2 mm dengan jejari 2 mm dan faktor K 0.44 menambah 4.52 mm kepingan rata.

Pada plat rata, lubang, potongan dan pelepasan lenturan ditunjukkan dalam rata di tempat sebenarnya, termasuk lubang melalui flens.

Untuk memotong banyak, tekan {{ui:Nest on sheets…}} di bawah corak rata: lihat [Susun bahagian rata pada helaian](topic:nest-flat-parts). Flens asas yang dilentur dihamparkan sebagai satu segi empat: panjang terbentangnya × kedalamannya, dengan garis lenturan bagi setiap bucu.

{{ui:Save DXF}} menyimpan corak rata untuk laser, penebuk atau waterjet, dalam milimeter:

- garis besar pada lapisan **OUTLINE**, sebagai garisan, lengkok dan bulatan;
- garis lenturan pada lapisan **BEND**, bertitik-titik;
- nota pada setiap lenturan pada lapisan **BEND_NOTES**, seperti "UP 90° R2".

Ubah apa-apa dan rata itu hilang; tekan {{ui:Lay flat}} sekali lagi untuk yang baharu.

:::note
Semak faktor K dengan bengkel anda sebelum memotong: panjang rata bergantung padanya, dan ia berbeza mengikut bahan, ketebalan dan peralatan.
:::

## Mesej

- **Kepingan logam memerlukan flens asas sebelumnya** — flens tepi ditambah sebelum mana-mana flens asas. Alihkannya ke bawah satu, atau tambah flens asas dahulu.
- **Flens tepi memerlukan tepi lurus** — flens melentur sepanjang garisan sahaja; tepi melengkung belum boleh menerimanya.
- **Tepi itu bukan pada muka ketebalan kepingan** — tepi itu tergolong pada muka yang bukan atas atau bawah kepingan (contohnya dinding lubang). Pilih tepi muka atas atau bawah.
- **Ofset tidak meninggalkan apa-apa pada tepi** — kedua-dua ofset menambah sehingga keseluruhan tepi atau lebih.
- **Flens tepi pada flens asas yang dilentur belum boleh dihamparkan rata** — mulakan dari plat rata dan lenturkan semuanya ke atas dengan flens tepi, yang boleh dibukakan.
- **Potongan dan lubang yang dibuat selepas flens asas yang dilentur belum ditunjukkan dalam ratanya** — corak rata bagi profil yang dilentur hanyalah segi empat terbentangnya.
