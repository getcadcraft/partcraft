---
title: Pemesinan 4- dan 5-paksi
summary: Beritahu PartCraft paksi putaran yang dimiliki mesin, condongkan alat untuk mana-mana operasi biasa, kemaskan permukaan dengan mata pengisar hujung bulat yang condong semasa memotong, atau pusingkan bahagian di bawah alat pada paksi ke-4. Apa yang ditulis ke G-code, dan apa yang belum dibuktikan.
keywords: 5 paksi, lima paksi, 4 paksi, paksi keempat, pelbagai paksi, multiaxis, 3+2, berindeks, kedudukan, condong, alat condong, putaran, trunnion, meja, kepala, paksi a, paksi b, paksi c, tcp, rtcp, titik pusat alat, g43.4, masa songsang, g93, kinematik, pivot, swarf, sudut lead
from: c4f1c491
---

Pembuatan boleh memegang alat pada sudut, dan ia boleh menggerakkan paksi putaran semasa memotong. Tiga perkara melakukannya, dari yang paling mudah hingga ke yang paling kompleks.

**Tiada apa di sini telah dijalankan pada mesin.** Laluan disemak terhadap geometri oleh ujian dan G-code dibaca semula, tetapi pasca terbina mengikuti kod yang didokumentasikan oleh kawalan, bukan mana-mana mesin di depan kami. Buktikan program dalam simulator kawalan anda sendiri dan di udara sebelum ia menyentuh logam.

## Paksi putaran mesin

Pada tab **Persediaan**, {{ui:Rotary axes}} menyatakan apa yang ada pada mesin:

| Pilihan | Mesin |
|---|---|
| Tiada (3 paksi) | Pengisar biasa. Mana-mana operasi yang memerlukan alat condong memberi amaran, dan pasca enggan menulisnya. |
| A (berpusing pada X) | Satu paksi putaran sepanjang X: meja paksi-4 atau pengindeks. Alat hanya boleh condong dalam satah Y–Z. |
| B (berpusing pada Y) | Satu paksi putaran sepanjang Y. Alat hanya boleh condong dalam satah X–Z. |
| A dan C | Paksi condong pada X dibawa oleh, atau membawa, pusingan pada Z: meja trunnion, atau kepala. |
| B dan C | Sama seperti di atas dengan condong pada Y. |

Kemudian:

- **Dibawa oleh**: {{ui:The table (the part turns)}} atau {{ui:The head (the tool turns)}}. Meja berpusing ke arah bertentangan untuk membawa muka yang sama di bawah alat, jadi tanda setiap sudut bergantung pada pilihan ini.
- **Kawalan mengekalkan hujung alat pada laluan (TCP)**: dihidupkan, X Y Z dalam program ialah hujung alat dalam koordinat bahagian sendiri dan kawalan melakukan selebihnya (pasca gaya Fanuc dan LinuxCNC terbina menulis `G43.4` untuk panjang alat). Dimatikan, pada mesin meja, PartCraft menulis X Y Z sebagai meja berpusing membawa bahagian itu, tentang **pusat putaran** yang anda berikan (dalam koordinat kerja; 0, 0, 0 apabila asal kerja berada di pusat). Mesin kepala memerlukan TCP dihidupkan: tanpanya program memerlukan panjang pivot mesin, yang tidak diketahui PartCraft.
- **Had condong**: sejauh mana paksi condong bergerak.

Mesin berbeza dari segi arah yang dikira sebagai positif. Jika paksi berpusing ke arah yang salah pada mesin anda, tukar tandanya dalam salinan pasca ([Pasca-proses yang boleh disunting](topic:post-processors)).

## Alat condong untuk operasi biasa

Setiap operasi pengisaran (muka, poket, adaptif, kontur, gerudi, chamfer, selari, scallop, kasar 3D, baki) mempunyai **Kecondongan alat** dan **Condong ke arah**: arah alat untuk operasi itu sahaja, diukur dari paksi alat persediaan. Ini ialah pemesinan 3+2: paksi putaran pergi ke satu kedudukan dan kekal di situ manakala tiga paksi memotong.

- Taip dua sudut, atau tekan {{ui:Tool square to a face}} dan klik muka rata: alat akan menghala tepat kepadanya.
- Pilih muka dan tepi operasi seperti biasa. Apa yang dikira sebagai lantai atau lubang ditentukan sepanjang alat yang condong.
- Bahan mentah untuk arah itu ialah kotak yang memegang bahan mentah yang dipusingkan, jadi ketinggian dan kelegaan selamat dari sisi itu.

Dalam G-code, sebelum operasi, alat naik, paksi putaran berpusing, dan alat turun ke atas titik pertamanya. Pada mesin meja tanpa TCP, lengkok kekal sebagai lengkok dan kitaran gerudi terbenam kekal sebagai kitaran (bingkai yang ditulis hanya berputar tentang Z). Dengan TCP dalam satah condong, lengkok menjadi garisan pendek dan kitaran menjadi pergerakan yang diwakilinya.

Simulasi bahan mentah menjalankan arah condong **secara berasingan**: ia menunjukkan apa yang dipotong oleh operasi itu daripada keseluruhan bahan mentah yang dilihat dari sisinya, dan mencari gouge di sana, tetapi potongan dari arah lain tidak dibawa.

## Kemasan 5-paksi

{{ui:More}} dalam bar alat Pembuatan menyenaraikan operasi ini dan yang seterusnya di bahagian atas tab **Operasi**.

{{ui:5-axis}} ialah [laluan kemasan selari](topic:finish-3d) dengan **mata pengisar hujung bulat yang condong semasa ia bergerak**. Bola memotong dengan sfera, dan sfera itu sama dari mana-mana arah alat condong tentang pusatnya, jadi bola mengikuti tepat laluan yang diberikan oleh laluan 3-paksi dan hanya arah alat yang berubah:

- **Ke arah permukaan**: 1 = tegak lurus pada permukaan, 0 = tegak, mana-mana nilai di antaranya.
- **Condong ke hadapan**: darjah sepanjang arah potongan, supaya pusat bola yang pegun bukan yang memotong.
- **Condong paling banyak**: alat tidak condong lebih jauh daripada ini dari paksi persediaan.

Di tempat batang akan menyentuh model, condongan dipotong semula sehingga ia bebas, dan operasi menyatakan pada berapa titik. Setiap laluan dimasuki dan ditinggalkan dengan angkatan lurus.

## Kemasan putaran (paksi ke-4)

{{ui:Rotary}} ialah untuk bahagian yang dipegang sepanjang **X kerja** pada paksi putaran. Bahagian berpusing dan mata pengisar hujung bulat, yang sentiasa menghala ke paksi, mengikuti permukaannya:

- **Laluan**: {{ui:Along the axis}} (garisan sepanjang X, dengan satu stepover pusingan antara satu sama lain) atau {{ui:Round the part}} (gelang, dengan satu stepover X antara satu sama lain).
- **Paksi di Y / Z**: di mana paksi itu berada. Kosong bermakna tengah bahan mentah. Pada mesin meja tanpa TCP, ini mesti pusat putaran dalam Persediaan; operasi memberi amaran jika tidak.
- **Dari / Ke X** dan **Dari / Ke sudut**: bahagian panjang dan pusingan yang hendak dipotong.

Ketinggian bola di atas paksi pada setiap titik ialah penurunan tepat sfera pada jaringan bahagian, dari sisi itu.

## Had

- Kemasan 5-paksi dan putaran hanya menerima **mata pengisar hujung bulat**. Tiada pemotongan swarf (sisi alat pada dinding berperaturan), tiada garisan aliran sepanjang arah permukaan itu sendiri, tiada pengasaran pelbagai paksi dan tiada pemilihan automatik condongan untuk mengelak perlanggaran.
- Laluan 5-paksi dan putaran **tidak dijalankan melalui simulasi bahan mentah**, yang merupakan peta ketinggian dan tidak dapat menampung potongan condong.
- Batang diperiksa dalam kemasan 5-paksi terhadap model dilihat dari atas; pemegang, gelendong dan mesin itu sendiri tidak diperiksa di mana-mana.
- Kemasan putaran hanya memotong apa yang dapat dilihat oleh alat semasa memandang ke arah paksi.
- Kemasan 5-paksi mengambil masa seminit atau lebih untuk dikira pada bahagian besar: batang diperiksa pada setiap titik bagi setiap laluan.
- Apabila paksi putaran bergerak bersama paksi linear dan TCP dimatikan, pasca terbina menulis suapan sebagai masa songsang (`G93`), kemudian kembali ke `G94`.
- Tiada kod satah kerja condong (`G68.2` dan seumpamanya) ditulis, dan tiada had khusus mesin, pembukaan atau zon perlanggaran diketahui.
