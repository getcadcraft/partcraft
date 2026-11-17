---
title: Medan magnet dalam 2-D (tutorial)
summary: Kira medan magnet bagi elektromagnet atau magnet kekal dengan pustaka analisis: jalankan contoh, baca ketumpatan fluks, medan jurang, kearuhan dan tarikan, ubah reka bentuk, dan bina model anda sendiri bagi gegelung, magnet dan besi.
keywords: magnet, magnetostatik, medan magnet, ketumpatan fluks, tesla, elektromagnet, solenoid, gegelung, ampere-lilitan, teras besi, jurang udara, kebolehtelapan, kearuhan, daya magnet, keengganan, litar magnet, potensi vektor, elektromagnetik, unsur terhingga, fem, motor, penggerak, transformer, magnetostatic2d, magnet kekal, neodymium, ndfeb, ferit, remanen, titik kerja, undur, kebocoran, magnet pegang
from: 215f6601
---

Pustaka analisis PartCraft boleh mengira medan magnet gegelung dan besi dalam 2-D: keratan rentas sesuatu yang panjang dan sama sepanjang panjangnya, seperti elektromagnet, teras transformer, bar konduktor atau keratan rentas motor. Tutorial ini menjalankan contoh elektromagnet pustaka, membaca apa yang dikatakannya, mengubahnya, menunjukkan cara memodelkan bentuk anda sendiri, dan kemudian menambah magnet kekal.

Ia menggunakan ruang kerja Script dan [pustaka analisis](topic:craftscript-library). Anda tidak perlu tahu bahasa CraftScript untuk mengikutinya; contoh itu menerangkan apa yang dilakukan setiap baris.

## Apa yang dimodelkan

Teras besi berbentuk C, 100 × 80 mm di luar dan tebal 20 mm, dengan jurang udara 2 mm pada kaki kanannya. Gegelung 100 lilitan yang membawa 10 A (1000 ampere-lilitan) dililit pada kaki kirinya. Semuanya panjang ke arah keluar skrin, jadi jawapannya ialah **bagi setiap meter kedalaman**: darabkan dengan kedalaman sebenar untuk magnet sebenar.

Pustaka `magnetostatic2d` menyelesaikan potensi vektor magnet pada grid petak 1 mm dalam kotak udara di sekeliling magnet, kemudian mengira ketumpatan fluks **B** (dalam tesla) daripadanya.

## Jalankan contoh

1. Pilih **Script** dalam kotak **Workspace** di kiri bar alat.
2. Buka tab **Pustaka** bagi panel skrip, kemudian **Contoh** › **Electromagnet: field, gap, inductance**.
3. Klik {{ui:Buka (baca sahaja)}}, kemudian tekan {{key:F5}}.

Dalam sesaat atau dua, kanvas menunjukkan ketumpatan fluks, dan konsol mencetak:

```
B dalam jurang 0.5427 T; litar magnet 0.5516 T (-1.6 %: kembang dan kebocoran)
kearuhan 0.1539 H bagi setiap meter kedalaman; litar memberi 0.1103 H/m, tanpa fluks yang bocor melepasi jurang
tenaga tersimpan 7.694 J/m; |B| memuncak pada 1.97 T di bucu dalam tingkap (keluli sebenar akan tepu di situ)
tarikan merentasi jurang kira-kira 2343 N bagi setiap meter kedalaman (117.2 N untuk kedalaman 50 mm)
```

Plot di bawah kanvas ialah ketumpatan fluks menegak B_y sepanjang garis tengah teras, dari kiri ke kanan: kira-kira −0.55 T pada kaki kiri (fluks mengalir ke bawahnya), hampir tiada apa dalam tingkap, dan +0.55 T pada kaki kanan serta merentasi jurang (fluks kembali ke atas). Fluks yang sama melalui besi dan jurang, jadi kedua-dua kaki dan jurang menunjukkan nilai yang hampir sama.

## Baca hasilnya

- **Medan dalam jurang** ialah 0.543 T. Pengiraan tangan menganggap teras sebagai satu litar magnet, B = μ0 N I / (g + l / μr), dengan g ialah jurang, l panjang laluan melalui besi dan μr kebolehtelapan relatif besi; ia memberi 0.552 T. Medan sedikit lebih rendah daripada pengiraan tangan kerana fluks membonjol di sekeliling jurang (kembang) dan sebahagian fluks mengambil jalan pintas merentasi tingkap (kebocoran). Dengan jurang yang lebih kecil atau grid yang lebih halus, kedua-duanya menjadi lebih dekat.
- **Kearuhan** gegelung 100 lilitan ialah 0.154 H bagi setiap meter kedalaman, daripada tenaga tersimpan dalam medan. Formula litar memberi nilai lebih rendah (0.110 H/m) kerana ia hanya mengira fluks melalui jurang, bukan fluks yang bocor melepasinya.
- **Tarikan** yang menutup jurang ialah B² w / (2 μ0) bagi muka jurang lebar w: kira-kira 2300 N bagi setiap meter, atau 117 N untuk magnet kedalaman 50 mm.
- **Puncak** 1.97 T terletak di bucu dalam tingkap, tempat fluks membelok tajam. Model menganggap besi sebagai linear; keluli elektrik sebenar tepu pada kira-kira 1.5 hingga 2 T, jadi anggap nilai melebihi itu sebagai amaran, bukan jawapan.

:::note
Ujian pustaka sendiri menjalankan contoh ini dan menyemak medan jurang berbanding formula litar magnet pada setiap perubahan PartCraft. Kaedahnya, rujukannya dan semakan lain (solenoid panjang, solenoid berteras besi) terdapat dalam pengepala `magnetostatic2d`: klik padanya dalam pustaka.
:::

## Ubah reka bentuk

1. Klik {{ui:Buat salinan}} di atas skrip baca sahaja. Salinan disimpan bersama bahagian anda.
2. Tukar nilai berhampiran bahagian atas dan tekan {{key:F5}} sekali lagi. Cuba:
   - `g = 0.001;` — separuh jurang: medan jurang hampir dua kali ganda, dan begitu juga tarikan (ia mengikut B²).
   - `mur = 200;` — teras yang lebih lemah: lebih banyak ampere-lilitan dibelanjakan dalam besi.
   - `N = 200;` — dua kali lilitan: dua kali medan, empat kali kearuhan.
   - `h = 0.0005;` — grid yang lebih halus: jawapan lebih dekat, kira-kira empat kali masa.

Setiap larian menggantikan kanvas. Pembolehubah yang dibuat oleh skrip (seperti `Bgap`, `L`, `F`) kekal dalam senarai **Pembolehubah** untuk pengiraan anda sendiri.

## Model bentuk anda sendiri

Contoh ini membina segala-galanya daripada tiga senarai, satu nilai bagi setiap petak grid, yang boleh anda buat untuk mana-mana bentuk yang dilukis dengan garisan lurus sepanjang grid:

- **Di mana besi berada:** `iron` ialah benar bagi petak di dalam teras. Contoh membinanya daripada segi empat tepat: `frame & ~window & ~gap` bermaksud "dalam bingkai, bukan dalam tingkap, bukan dalam jurang".
- **Kebolehtelapan:** `1 + (mur - 1) * iron` ialah 1 dalam udara dan `mur` dalam besi. Berikan beberapa bahan nilainya sendiri dengan cara yang sama.
- **Arus:** `J` ialah ketumpatan arus dalam ampere per meter persegi, positif keluar dari skrin, negatif masuk ke dalamnya. Gegelung mempunyai dua sisi dengan tanda bertentangan; contoh mengira `J0` supaya satu sisi membawa N I.

Kemudian `r = magnetostatic2d(m, permeability, J)` menyelesaikannya. `r.B` ialah ketumpatan fluks dalam setiap petak (dua lajur, x dan y), `r.Bmag` saiznya, `r.energy` tenaga tersimpan bagi setiap meter. `plot(x, y)` melukis garisan.

Pustaka berfungsi dalam meter, dan paparan dalam milimeter, jadi medan yang ditunjukkan seperti sedia ada akan dilukis seribu kali terlalu kecil. Contoh menunjukkannya pada salinan grid dalam milimeter (`mm = quadGrid(…)`, kemudian `show(field(mm, …))`): salin dua baris itu.

Secara lalai, tepi kotak memegang medan di dalam: tiada fluks keluar. Jadikan kotak sekurang-kurangnya dua atau tiga kali saiz magnet supaya ini tidak memampatkan medan. Bagi magnet simetri, anda boleh memodelkan separuh daripadanya: pengepala `magnetostatic2d` menyatakan syarat tepi yang perlu digunakan pada garis simetri.

## Magnet kekal

Contoh kedua, **Contoh** › **Permanent magnet in an iron core: working point, leakage, pull**, ialah teras yang sama dengan gegelung dibuang dan satu kepingan 10 mm kaki kiri digantikan dengan magnet, dimagnetkan ke atas. Jalankan dengan {{key:F5}}. Ia mencetak:

```
magnet berfungsi pada B = 1.036 T, H = -124 kA/m (pada garis pemulihannya B = Br + μ0 μr H)
B dalam jurang 0.6778 T; litar magnet tanpa kebocoran 0.9692 T (-30.1 %)
faktor kebocoran 1.53: daripada fluks yang keluar dari magnet, 65 % merentasi jurang antara muka kutub
tarikan merentasi jurang kira-kira 3656 N bagi setiap meter kedalaman (182.8 N untuk kedalaman 50 mm)
```

- **Titik kerja.** Magnet diterangkan oleh **remanen** Br (medan yang dikekalkannya apabila dipintas oleh besi: kira-kira 1.2 T untuk magnet NdFeB tersinter, 0.4 T untuk ferit) dan kebolehtelapan pemulihannya (kira-kira 1.05 dan 1.1). Membuka jurang menolak magnet turun garis pemulihannya: di sini kepada 1.04 T, dengan H menentang B di dalamnya.
- **Kebocoran.** Pengiraan tangan tanpa kebocoran memberi 0.97 T dalam jurang; model memberi 0.68 T. Magnet memacu fluksnya dengan tolakan kuat pada panjang yang pendek, jadi banyak daripadanya terus kembali merentasi tingkap dan bukannya melalui jurang. Faktor kebocoran menunjukkan berapa banyak: 1.53 di sini. Tetapkan `g = 0;` untuk penahan tertutup: magnet kemudian bekerja dalam lingkungan setengah peratus daripada pengiraan tangan.
- **Magnet dalam model anda sendiri.** Berikan `magnetostatic2d` magnet sebagai `struct('Br', Br)`, dengan `Br` mempunyai satu baris bagi setiap petak grid dengan remanen sepanjang x dan y dalam tesla (sifar di luar magnet), dan berikan petak magnet kebolehtelapan pemulihannya dalam senarai kebolehtelapan:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T ke atas dalam petak tempat mag benar
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Bagi magnet yang dimagnetkan pada sudut, letakkan `Br·cos(angle)` dan `Br·sin(angle)` dalam dua lajur; bagi magnet cincin yang dimagnetkan ke luar, kira arah setiap petak daripada kedudukannya. `r.H` memberi kekuatan medan H dalam setiap petak.

Model menyimpan magnet pada garis pemulihan lurusnya tidak kira sekuat mana ia dipacu. Magnet sebenar yang dipacu melepasi lututnya (oleh jurang besar, gegelung kuat atau haba) kehilangan sebahagian kekuatannya selama-lamanya: semak titik kerja berbanding lengkung pengilang bagi gred dan suhu.

Ujian pustaka menyemak magnet berbanding dua keputusan tangan: magnet bulat di udara terbuka (di dalamnya, B = Br / (1 + μr)) dan magnet yang ditutup oleh penahan besi (litar magnet), kedua-duanya dalam 1 %.

## Yang belum dilakukan

- **Ketepuan.** Besi adalah linear: dua kali arus, dua kali medan, tanpa had.
- **Penyahmagnetan.** Magnet kekal pada garis pemulihan lurusnya (lihat di atas).
- **Arus pusar** dan **kehilangan** (kehilangan besi, kehilangan kuprum).
- **Bahagian bergerak dan tork.** Tiada rotor yang berputar dalam stator, tiada tork berbanding sudut.
- **Bentuk bulat.** Grid terdiri daripada petak sama, jadi garis luar melengkung keluar bertangga.
- **3-D.** Semuanya ialah keratan rentas sesuatu yang panjang.

Reka bentuk motor (rotor yang berputar, tork dan kehilangan dalam 2-D) sedang dikaji untuk versi kemudian. Lihat [Belum dibina](topic:not-built-yet).
