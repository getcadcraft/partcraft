---
title: Tetapan PartCraft
summary: Pilih butang tetikus yang memusingkan paparan, jadikan leretan pad jejak memusing dan memanning bahagian, hidupkan atau matikan kekangan automatik semasa melakar, dan tetapkan berapa banyak benang yang digunakan oleh penyelesai simulasi.
keywords: tetapan, keutamaan, pilihan, tetikus, butang tengah, butang roda, orbit, putar, pusing, pad jejak, pad sentuh, skrol, leret, cubit, kekangan, kekangan automatik, hubungan automatik, snap, koinsiden, benang, benang penyelesai, teras, pemproses, berbilang benang, penyelesaian lebih pantas, selari
from: 759edcaf
---

Buka {{ui:Settings}} dengan ikon gear di bar aplikasi atau {{key:Mod+,}}. Tab pertama, {{ui:PartCraft}}, memegang tetapan yang tergolong dalam aplikasi ini; {{ui:General}} memegang tetapan yang dikongsi oleh setiap aplikasi CadCraft (tema, bar alat, panel). Tetapan PartCraft hanya wujud dalam aplikasi: anda menukarnya di sini, dan pelayar ini mengingatinya. {{ui:Tetapkan semula tetapan PartCraft}} mengembalikan semuanya kepada permulaan.

## Memusingkan paparan

- **Butang kiri** (permulaan): seret dengan butang kiri untuk memusingkan bahagian; seret dengan butang kanan atau tengah untuk pan.
- **Butang tengah**: tekan roda dan seret untuk memusingkan bahagian; tahan {{key:Shift}} (atau {{key:Ctrl}}, atau ⌘) dengan butang tengah, atau seret dengan butang kanan, untuk pan. Butang kiri hanya memilih muka, tepi dan satah, jadi klik yang sedikit bergerak tidak pernah memusingkan bahagian. Banyak program CAD berfungsi dengan cara ini.

Roda zum pada penunjuk dalam kedua-dua cara. Dalam lakaran, butang kanan dan tengah tetap melakukan pan seperti biasa.

## Skrol: roda tetikus atau pad jejak

- **Tentukan sendiri** (permulaan): PartCraft memerhatikan skrol. Skrol sisi atau halus, seperti yang dihantar pad jejak, memusingkan bahagian; takuk roda penuh melakukan zum.
- **Roda tetikus**: skrol sentiasa zum ke arah penunjuk.
- **Pad jejak**: leret dengan dua jari untuk memusingkan bahagian, tahan {{key:Shift}} dan leret untuk pan, cubit untuk zum. Dalam lakaran, leretan dua jari memanning lakaran.

Cubitan sentiasa zum dalam setiap pilihan. Jika "Tentukan sendiri" meneka salah untuk tetikus atau pad jejak anda, pilih yang anda ada. Lagi dalam [Pad jejak, sentuhan dan skrin kecil](topic:trackpad-and-touch).

## Lakaran: tambah kekangan semasa melukis

**Tambah kekangan semasa melukis** (hidup pada permulaan): klik yang melekat pada titik menjadikan titik baharu koinsiden dengannya, klik pada lengkung meletakkan titik pada lengkung itu, dan garisan yang dilukis hampir mendatar atau menegak menjadi mengufuk atau menegak. Lihat [Kekangan dan dimensi](topic:relations-dimensions).

Matikannya apabila anda mahu meletakkan geometri berhampiran geometri lain tanpa mengikatnya. Penunjuk masih melekat pada titik dan lengkung, tetapi tiada apa yang disambungkan: garisan yang dilukis dalam rantai tidak berkongsi hujungnya, jadi seretan boleh menariknya berpisah. Tambah sendiri kekangan yang anda mahu dari panel kanan. Profil tertutup masih diekstrud apabila hujungnya bertemu.

:::note
Tetapan ini hanya menukar apa yang ditambah oleh lukisan baharu. Kekangan sedia ada dalam lakaran kekal, dan alat Fillet tetap membuat lengkung tangen dan jejarinya.
:::

## Lakaran: dimensi semasa melukis

**Dimensi semasa melukis** (hidup pada permulaan): semasa garisan, segi empat tepat, bulatan atau lengkok sedang dilukis, menaip nombor mengisi kotak saiz di sebelah penunjuk ({{key:Tab}} pergi ke kotak seterusnya), dan {{key:Enter}} melukis bentuk pada saiz itu, dengan dimensi pemacu bagi setiap saiz yang anda taip. Mati: menaip nombor semasa melukis tidak berbuat apa-apa, dan bentuk dilukis dengan klik sahaja. Lihat [Taip saiz semasa melukis](topic:sketch-basics#type-the-size-as-you-draw).

## Penunjuk sudut

Apa yang ditunjukkan di sudut paparan 3D: **ViewCube** (permulaan; kanan atas — klik muka, tepi atau bucu untuk melihat dari situ, seret untuk orbit, seret cincin kompasnya untuk memusingkan model), **Ikon paksi** (penanda kecil X, Y, Z di sudut kiri bawah yang berpusing mengikut pandangan: X merah, Y hijau, Z biru) atau **Tiada**. Kedua-duanya tidak ditunjukkan semasa melakar atau pada helaian lukisan. Lihat [ViewCube](topic:view-cube).

## Benang penyelesai

Berapa banyak benang yang boleh digunakan oleh penyelesai simulasi. **Automatik** (permulaan) mengambil satu kurang daripada pemproses logik komputer (paling banyak 16), supaya halaman kekal responsif semasa kajian diselesaikan; atau pilih nombor. Kajian voxel besar, buckling, tegasan mengikut masa dan aliran diselesaikan lebih pantas pada beberapa benang (kira-kira 2× pada 4 benang untuk 80,000 kiub mengikut ujian kami, lebih pada komputer yang tidak sibuk). Model di bawah kira-kira 20,000 pemboleh ubah tidak diketahui kekal pada satu benang, kerana memulakan benang menelan lebih masa daripada yang dijimatkan. Penyelesaian berbenang memberikan jawapan yang sama seperti satu benang (dengan pembundaran: jumlah ditambah dalam susunan yang berbeza). Hasil setiap kajian menyenaraikan **N benang** atau **1 benang** dengan sebabnya di bawah **Penyelesai**.

Benang memerlukan halaman itu **diasingkan rentas asal** (penyemak imbas hanya membenarkan pekerja berkongsi memori dalam keadaan itu). Halaman makmal ialah halaman begitu; jika tidak, tetapan memberitahu ("Halaman ini tidak diasingkan rentas asal, jadi penyelesai berjalan pada satu benang tanpa mengira pilihan di sini.") dan setiap penyelesaian menggunakan satu benang. Semua yang lain berfungsi sama, dan jawapannya sama.

Penyelesai aliran lamina juga menggunakan benang (kira-kira 2.5× pada 4 benang untuk 54,000 sel bendalir, jawapan yang sama hingga digit terakhir). Penyelesai tetrahedron kuadratik dan pemindahan haba berjalan pada satu benang: penggunaan benang untuk mereka diukur lebih perlahan pada komputer ujian kami (ia dihadkan oleh kelajuan memori dan oleh satu langkah yang tidak boleh dibahagikan).

### Pada pelayan web anda sendiri

Jika anda menjalankan PartCraft dari pelayan anda sendiri, ia berfungsi seperti yang dihidangkan. Untuk benang penyelesai, minta pelayan menghantar dua pengepala dengan halaman PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Pada Apache, dalam `.htaccess` folder itu (memerlukan mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Pada nginx, dalam `location` yang menghidangkan PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Muat semula halaman: Tetapan › Benang penyelesai kemudian menawarkan **Automatik** dengan kiraan komputer anda. Pengepala kedua menjadikan penyemak imbas menolak apa-apa yang dimuatkan oleh halaman daripada laman lain yang tidak membenarkannya, yang tidak menjejaskan PartCraft sendiri (ia memuatkan semuanya dari folder sendiri).
