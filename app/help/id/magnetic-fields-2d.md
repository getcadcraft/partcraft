---
title: Medan magnet dalam 2-D (tutorial)
summary: Hitung medan magnet dari elektromagnet atau magnet permanen dengan pustaka analisis: jalankan contohnya, baca rapat fluks, medan celah, induktansi, dan tarikan, ubah desain, dan bangun model Anda sendiri dari kumparan, magnet, dan besi.
keywords: magnet, magnetostatika, medan magnet, rapat fluks, tesla, elektromagnet, solenoid, kumparan, ampere-lilitan, inti besi, celah udara, permeabilitas, induktansi, gaya magnet, reluktansi, rangkaian magnet, potensial vektor, elektromagnetika, elemen hingga, fem, motor, aktuator, transformator, magnetostatic2d, magnet permanen, neodymium, ndfeb, ferit, remanensi, titik kerja, recoil, kebocoran, magnet penahan
from: 215f6601
---

Pustaka analisis PartCraft dapat menghitung medan magnet kumparan dan besi dalam 2-D: penampang dari sesuatu yang panjang dan sama sepanjangnya, seperti elektromagnet, inti transformator, busbar, atau penampang motor. Tutorial ini menjalankan contoh elektromagnet dari pustaka, membaca apa yang dikatakannya, mengubahnya, menunjukkan cara memodelkan bentuk Anda sendiri, lalu menambahkan magnet permanen.

Tutorial ini menggunakan ruang kerja Script dan [pustaka analisis](topic:craftscript-library). Anda tidak perlu mengetahui bahasa CraftScript untuk mengikutinya; contoh menjelaskan apa yang dilakukan setiap baris.

## Yang dimodelkan

Inti besi berbentuk C, 100 × 80 mm di luar dan tebal 20 mm, dengan celah udara 2 mm di kaki kanannya. Kumparan 100 lilitan yang dialiri 10 A (1000 ampere-lilitan) dililitkan di sekitar kaki kirinya. Semuanya panjang ke arah keluar layar, sehingga jawabannya adalah **per meter kedalaman**: kalikan dengan kedalaman sebenarnya untuk magnet nyata.

`magnetostatic2d` dari pustaka menyelesaikan potensial vektor magnetik pada kisi kotak 1 mm di dalam kotak udara di sekitar magnet, lalu menghitung rapat fluks **B** (dalam tesla) darinya.

## Jalankan contoh

1. Pilih **Script** di kotak **Workspace** di sisi kiri bilah alat.
2. Buka tab **Pustaka** pada panel skrip, lalu **Contoh** › **Elektromagnet: medan, celah, induktansi**.
3. Klik {{ui:Buka (hanya baca)}}, lalu tekan {{key:F5}}.

Dalam satu-dua detik kanvas menampilkan rapat fluks, dan konsol mencetak:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Grafik di bawah kanvas adalah rapat fluks vertikal B_y sepanjang garis tengah inti, dari kiri ke kanan: sekitar −0.55 T di kaki kiri (fluks mengalir ke bawah melewatinya), hampir tidak ada di jendela, dan +0.55 T di kaki kanan dan melintasi celah (fluks kembali ke atas). Fluks yang sama melewati besi dan celah, sehingga kedua kaki dan celah menunjukkan nilai yang hampir sama.

## Baca hasilnya

- **Medan di celah** adalah 0.543 T. Perhitungan tangan memperlakukan inti sebagai satu rangkaian magnetik, B = μ0 N I / (g + l / μr), di mana g adalah celah, l panjang jalur melalui besi, dan μr permeabilitas relatif besi; hasilnya 0.552 T. Medannya sedikit lebih rendah daripada perhitungan tangan karena fluks melebar di sekitar celah (pinggiran) dan sebagian fluks mengambil jalan pintas melintasi jendela (kebocoran). Dengan celah yang lebih kecil atau kisi yang lebih halus, keduanya akan lebih dekat.
- **Induktansi** kumparan 100 lilitan adalah 0.154 H per meter kedalaman, dari energi yang tersimpan dalam medan. Rumus rangkaian memberi hasil lebih kecil (0.110 H/m) karena hanya menghitung fluks yang melalui celah, bukan fluks yang bocor melewatinya.
- **Tarikan** yang menutup celah adalah B² w / (2 μ0) untuk muka celah selebar w: sekitar 2300 N per meter, atau 117 N untuk magnet sedalam 50 mm.
- **Puncak** 1.97 T berada di sudut dalam jendela, tempat fluks berbelok tajam. Model memperlakukan besi sebagai linier; baja listrik nyata jenuh pada sekitar 1.5 hingga 2 T, jadi anggap nilai di atas itu sebagai peringatan, bukan jawaban.

:::note
Tes pustaka menjalankan contoh ini dan memeriksa medan celah terhadap rumus rangkaian magnetik pada setiap perubahan PartCraft. Metode, referensinya, dan pemeriksaan lainnya (solenoid panjang, solenoid berinti besi) ada di header `magnetostatic2d`: klik di pustaka.
:::

## Ubah desain

1. Klik {{ui:Buat salinan}} di atas skrip hanya baca. Salinan disimpan bersama part Anda.
2. Ubah nilai dekat bagian atas dan tekan {{key:F5}} lagi. Coba:
   - `g = 0.001;` — setengah celah: medan celah hampir dua kali lipat, dan begitu pula tarikan (mengikuti B²).
   - `mur = 200;` — inti yang lebih buruk: lebih banyak ampere-lilitan terpakai di dalam besi.
   - `N = 200;` — dua kali lilitan: dua kali medan, empat kali induktansi.
   - `h = 0.0005;` — kisi lebih halus: jawaban lebih dekat, sekitar empat kali waktu.

Setiap jalankan menggantikan kanvas. Variabel yang dibuat skrip (seperti `Bgap`, `L`, `F`) tetap berada di daftar **Variabel** untuk perhitungan Anda sendiri.

## Model bentuk Anda sendiri

Contoh membangun semuanya dari tiga daftar, satu nilai per kotak kisi, yang dapat Anda buat untuk bentuk apa pun yang digambar dengan garis lurus mengikuti kisi:

- **Di mana besi berada:** `iron` bernilai true untuk kotak di dalam inti. Contoh membangunnya dari persegi panjang: `frame & ~window & ~gap` berarti "di dalam bingkai, bukan di jendela, bukan di celah".
- **Permeabilitas:** `1 + (mur - 1) * iron` bernilai 1 di udara dan `mur` di besi. Beri beberapa material nilainya sendiri dengan cara yang sama.
- **Arus:** `J` adalah rapat arus dalam ampere per meter persegi, positif keluar dari layar, negatif masuk ke dalamnya. Kumparan memiliki dua sisi dengan tanda berlawanan; contoh menghitung `J0` agar satu sisi mengalirkan N I.

Lalu `r = magnetostatic2d(m, permeability, J)` menyelesaikannya. `r.B` adalah rapat fluks di setiap kotak (dua kolom, x dan y), `r.Bmag` besarnya, `r.energy` energi tersimpan per meter. `plot(x, y)` menggambar garis.

Pustaka bekerja dalam meter, dan tampilan dalam milimeter, sehingga medan yang ditampilkan apa adanya akan tergambar seribu kali terlalu kecil. Contoh menampilkannya pada salinan kisi dalam milimeter (`mm = quadGrid(…)`, lalu `show(field(mm, …))`): salin kedua baris itu.

Secara default, tepi kotak menahan medan di dalam: tidak ada fluks yang keluar. Buat kotak setidaknya dua atau tiga kali ukuran magnet agar hal ini tidak memampatkan medan. Untuk magnet simetris Anda dapat memodelkan setengahnya: header `magnetostatic2d` menjelaskan kondisi tepi mana yang digunakan pada garis simetri.

## Magnet permanen

Contoh kedua, **Contoh** › **Magnet permanen dalam inti besi: titik kerja, kebocoran, tarikan**, adalah inti yang sama tanpa kumparan, dengan irisan 10 mm pada kaki kiri diganti magnet yang dimagnetisasi ke atas. Jalankan dengan {{key:F5}}. Konsol mencetak:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Titik kerja.** Magnet dijelaskan oleh **remanensi** Br (medan yang dipertahankannya saat dihubung-singkat oleh besi: sekitar 1.2 T untuk magnet NdFeB sinter, 0.4 T untuk ferit) dan permeabilitas recoil-nya (sekitar 1.05 dan 1.1). Membuka celah mendorongnya turun pada garis recoil-nya: di sini menjadi 1.04 T, dengan H mengarah berlawanan dengan B di dalamnya.
- **Kebocoran.** Perhitungan tangan tanpa kebocoran memberi 0.97 T di celah; model memberi 0.68 T. Magnet mendorong fluksnya dengan dorongan kuat pada panjang yang pendek, sehingga banyak fluks langsung kembali melintasi jendela alih-alih melalui celah. Faktor kebocoran menunjukkan seberapa besar: 1.53 di sini. Atur `g = 0;` untuk keeper tertutup: magnet kemudian bekerja dalam setengah persen dari perhitungan tangan.
- **Magnet dalam model Anda sendiri.** Berikan `magnetostatic2d` magnet sebagai `struct('Br', Br)`, di mana `Br` memiliki satu baris per kotak kisi dengan remanensi sepanjang x dan y dalam tesla (nol di luar magnet), dan beri kotak magnet permeabilitas recoil-nya dalam daftar permeabilitas:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T ke atas di kotak tempat mag bernilai true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Untuk magnet yang dimagnetisasi pada sudut, letakkan `Br·cos(angle)` dan `Br·sin(angle)` di dua kolom; untuk cincin magnet yang dimagnetisasi ke luar, hitung arah setiap kotak dari posisinya. `r.H` memberikan kekuatan medan H di setiap kotak.

Model menjaga magnet pada garis recoil lurusnya seberapa keras pun ia didorong. Magnet nyata yang didorong melewati lututnya (oleh celah besar, kumparan kuat, atau panas) kehilangan sebagian kekuatannya secara permanen; periksa titik kerja terhadap kurva pabrikan untuk tingkat dan suhu tersebut.

Tes pustaka memeriksa magnet terhadap dua hasil perhitungan tangan: magnet bulat di udara terbuka (di dalamnya, B = Br / (1 + μr)) dan magnet yang ditutup oleh keeper besi (rangkaian magnetik), keduanya dalam 1 %.

## Yang belum dilakukannya

- **Saturasi.** Besinya linier: gandakan arus, gandakan medan, tanpa batas.
- **Demagnetisasi.** Magnet tetap pada garis recoil lurusnya (lihat di atas).
- **Arus eddy** dan **rugi-rugi** (rugi besi, rugi tembaga).
- **Bagian yang bergerak dan torsi.** Tidak ada rotor yang berputar di dalam stator, tidak ada torsi terhadap sudut.
- **Bentuk bulat.** Kisi terdiri dari kotak-kotak sama besar, sehingga garis lengkung tampak bertangga.
- **3-D.** Semuanya adalah penampang dari sesuatu yang panjang.

Desain motor (rotor yang berputar, torsi dan rugi-rugi dalam 2-D) sedang dipertimbangkan untuk versi berikutnya. Lihat [Belum dibuat](topic:not-built-yet).
