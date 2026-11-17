---
title: Simulasi aliran bendalir (kajian Aliran)
summary: Aliran melalui saluran di dalam bahagian atau di sekelilingnya dalam kotak: masuk, keluar, udara, air atau bendalir anda sendiri, kemudian laju dan tekanan pada satah keratan boleh alih, garisan arus, tekanan permukaan, kejatuhan tekanan, imbangan jisim, seretan dan angkatan, dengan apa yang boleh dan tidak boleh diberitahu oleh kaedah laminar.
keywords: aliran, CFD, bendalir, dinamik bendalir berkomputer, simulasi aliran, udara, air, kelikatan, ketumpatan, nombor Reynolds, laminar, bergelora, kejatuhan tekanan, kehilangan turus, masuk, keluar, penutup, tudung, halaju, kadar aliran, aliran isipadu, liter seminit, tekanan statik, garisan arus, satah potong, satah keratan, seretan, angkatan, pekali seretan, pekali angkatan, luas hadapan, aliran luaran, aliran dalaman, paip, saluran, manifold, muncung, Lattice Boltzmann, baki, penumpuan
from: 7dc75f29
---

Kajian **Aliran** mengira bagaimana bendalir bergerak melalui saluran di dalam bahagian anda (**dalaman**) atau di sekelilingnya (**luaran**). Secara lalai ia **laminar, tidak termampatkan, isoterma dan Newtonan**: aliran licin bagi bendalir yang ketumpatan dan kelikatannya kekal tetap, tanpa haba, tanpa gelora dan tanpa graviti. Model gelora **uji kaji** juga disediakan, hanya untuk corak kualitatif (lihat di bawah). Ia berfungsi pada muka bernama yang diberi oleh kernel jejaring kepada bahagian (lihat [Kernel jejaring](topic:solid-kernels)).

Pilih **Simulasi** dalam kotak **Ruang kerja**, tekan **Kajian baharu** jika tiada, dan tetapkan **Jenis** kepada **Aliran (CFD)**. **Model aliran** ialah **Laminar** (lalai) atau **Bergelora (Spalart–Allmaras, uji kaji)**: lihat **Aliran bergelora (uji kaji)** di bawah. Tetapan struktur kajian dikekalkan, jadi anda boleh menukar semula. Tetapan aliran disimpan dalam fail bahagian dan setiap perubahan boleh dibuat asal.

## Pilih bendalir dan sel

- **Bendalir**: udara atau air pada 20 °C, atau **Tersuai** dengan ketumpatan (kg/m³) dan kelikatan dinamik (Pa·s) anda sendiri. Udara menggunakan hukum gas unggul dan hukum Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); air menggunakan nilai IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Saiz sel**: ruang bendalir diisi dengan kubus yang sama saiz. Biarkan kosong untuk saiz automatik; panel menunjukkan grid. Setiap bukaan dan saluran sebaiknya **sekurang-kurangnya 8 hingga 10 sel merentasi** untuk nombor yang berguna; sel yang lebih kecil lebih tepat tetapi lebih perlahan (dua kali lebih halus bersamaan kira-kira 16 kali kerja).
- **Dinding**: **Interpolasi** mengikut dinding melengkung antara sel (lalai); **Pantulan balik** (bounce-back) menganggap dinding sebagai tangga kubus.

## Aliran di dalam bahagian

Ruang bendalir mesti tertutup. Tambah **Masuk** dan **Keluar** dalam panel, kemudian klik muka mereka dalam pandangan:

1. **Muka rata di sekeliling bukaan** — pinggir di hujung paip, muka port. PartCraft menutup lubang bukaan di situ dengan penutup. Setiap lubang pada muka itu tergolong dalam bukaan tersebut, jadi apabila masukan dan keluaran terbuka pada muka yang sama, modelkan tudung nipis ke atas salah satu daripadanya.
2. **Muka dalam tudung** — seperti dalam alat CAD lain: modelkan plat nipis (ekstrud) di atas bukaan dan pilih mukanya yang menyentuh bendalir.

Bagi masukan, tetapkan **halaju** (m/s, seragam merentasi bukaan, masuk ke dalam bahagian) atau **aliran isipadu** (L/min). Bagi keluaran, tetapkan **tekanan statik** (Pa, tolok). Jika bukaan dibiarkan terbuka, atau dinding lebih nipis daripada satu sel, bahagian dalam akan bercantum dengan bahagian luar dan penyelesaian berhenti dengan mesej "Tiada ruang bendalir tertutup".

## Aliran di sekeliling bahagian

Tetapkan **Aliran** kepada **Luaran**, **Laju**, arah aliran menuju, dan sejauh mana kotak mencapai ke hulu, ke hilir dan ke sisi (kosong: 1, 3 dan 1 kali saiz terbesar bahagian). Muka kotak tempat aliran masuk ialah aliran masuk, muka tempat ia keluar ialah aliran keluar pada 0 Pa, dan muka sepanjang aliran tergelincir. Kotak yang terlalu kecil memampatkan aliran melepasi bahagian dan meningkatkan seretan. **Luas rujukan** ialah luas yang digunakan oleh pekali seretan dan angkatan (kosong: luas hadapan bahagian yang dilihat sepanjang aliran); angkatan diukur sepanjang +Y melainkan anda memilih arah lain.

## Selesaikan dan baca keputusan

Tekan **Selesaikan**. Penyelesaian berjalan di latar belakang dengan bilangan langkah, baki dan plot baki; **Henti** menamatkannya. Ia berhenti apabila baki (sejauh mana medan halaju masih berubah bagi setiap langkah) berada di bawah sasaran dan kejatuhan tekanan atau seretan telah stabil. Jika ia mencapai had langkah dahulu, panel menunjukkan **Tidak bertumpu** dalam warna merah: nombor itu ialah keadaan terakhir, bukan jawapan mantap.

- **Satah potong**: laju atau tekanan statik pada satah melalui model; pilih normalnya (X, Y atau Z) dan seret peluncur untuk mengalihkannya. Letakkan penunjuk di atasnya untuk membaca nilai.
- **Garisan arus**: dari masukan (dalaman) atau dari susunan garisan merentasi hujung aliran masuk kotak dalam satah potong (luaran).
- **Bahagian**: pepejal, lut sinar (untuk melihat satah di dalam), tekanan permukaan, atau tersembunyi.
- **Jadual**: nombor Reynolds, kejatuhan tekanan (purata tekanan statik pada masukan tolak pada keluaran), aliran dan purata tekanan bagi setiap bukaan, daya ke atas bahagian, seretan dan angkatan beserta pekali dan luas rujukan (luaran), imbangan jisim (aliran masuk berbanding aliran keluar), jejaring dan penyelesai.

## Aliran bergelora (uji kaji)

**Model aliran › Bergelora (Spalart–Allmaras, uji kaji)** menyelesaikan aliran bergelora purata-masa (RANS mantap): model Spalart–Allmaras memberikan kelikatan pusaran dalam setiap sel, dan sel di sebelah dinding menggunakan hukum dinding Spalding dan bukannya menyelesaikan lapisan nipis di situ. Ia bergelora sepenuhnya di mana-mana (tiada kawasan laminar, tiada peralihan).

**Ia tidak lulus semakan ketepatannya.** Panel, keputusan dan jadual menyatakannya pada setiap kajian bergelora, dan amaran itu tidak boleh ditutup. Gunakannya untuk **corak aliran kualitatif** — tempat aliran berpisah, berputar semula atau bertambah laju — **bukan untuk nombor reka bentuk**.

| Semakan | Rujukan | Keputusan |
|---|---|---|
| Geseran saluran rata, sel pertama pada y⁺ 49 / 98 | Korelasi Dean | +3.3 % / +4.7 % |
| Saluran dengan dinding diselesaikan (y⁺ ≈ 3), Re_τ 180: halaju pukal | DNS Moser, Kim & Mansour | −1 % |
| Saluran rata, y⁺ 7–15 atau 190–380 | Korelasi Dean | +9 hingga +22 % |
| Geseran paip melalui sel kubus, sepenuhnya membangun, 10–30 sel merentasi | Colebrook | 30 hingga 34 % terlalu tinggi |
| Pelekatan semula di belakang anak tangga menghadap ke belakang, 6–14 sel bagi setiap ketinggian anak tangga | Driver & Seegmiller, 6.26 ketinggian anak tangga | 21 hingga 39 % terlalu pendek |

Keputusan bertambah baik hanya perlahan dengan sel yang lebih halus. Selepas penyelesaian, jadual menunjukkan **y⁺ sel pertama** (minimum, purata dan maksimum merentasi sel dinding) dan memberi amaran di luar julat semakan 1 hingga 400; sasarkan kira-kira 30 hingga 300. **Masa jalan:** sel automatik bersaiz untuk beberapa minit pada satu teras komputer riba paling banyak (panel menunjukkan kes terburuk bagi grid dan had langkah; paip kecil mencapai keadaan mantap dalam masa kurang 20 saat). Mengurangkan saiz sel separuh memakan masa kira-kira 16 kali ganda. Daya ke atas bahagian diperoleh daripada imbangan momentum ke atas bukaan atau kotak.

**Setakat ini:** sel dinding kini memadankan tegasan ricihnya sendiri dengan hukum dinding, yang menurunkan ralat paip dan anak tangga kepada nilai di atas tanpa mengubah keputusan saluran rata. Itu belum mencukupi untuk nombor reka bentuk. Langkah seterusnya ialah sel yang lebih halus berhampiran dinding.

## Apa yang boleh dan tidak boleh diberitahunya

- **Model laminar** hanya laminar. Dalam paip, aliran bertukar bergelora di atas nombor Reynolds kira-kira 2,000 hingga 4,000; di belakang badan tumpul, gelombang ekor mula melepaskan pusaran di atas kira-kira 50. Panel memberi amaran pada titik-titik ini. Keputusan laminar bagi aliran bergelora menganggarkan rendah kejatuhan tekanan dan silap mengira seretan. Model bergelora uji kaji (di atas) meliputi aliran bergelora secara kualitatif; nombornya belum boleh dipercayai lagi.
- **Kaedah:** kaedah Lattice Boltzmann (D3Q19, perlanggaran dua-masa-santai) dijalankan hingga keadaan mantap. Ia sedikit termampatkan di dalam; PartCraft mengekalkan perubahan ketumpatan pada beberapa peratus. Jika aliran terlalu pantas untuk sel, ia enggan bermula dan menyatakan sejauh mana sel mesti dikecilkan.
- **Disemak terhadap:** aliran Hagen–Poiseuille dalam paip melalui bahagian (kecerunan tekanan dalam 1 % pada 20 sel merentasi), rongga dipacu penutup Ghia et al. (dalam 0.75 % daripada laju penutup), dan penanda aras silinder Schäfer–Turek (seretan dalam 1 % pada 10 sel bagi setiap diameter).
- Tidak dimodelkan: pemindahan haba, gelora dengan ketepatan reka bentuk (model bergelora ialah uji kaji), permukaan bebas, kavitasi, graviti, bahagian yang bergerak, bendalir bukan-Newtonan, dinding kasar. Binaan makmal: sahkan keputusan penting dengan cara lain.
