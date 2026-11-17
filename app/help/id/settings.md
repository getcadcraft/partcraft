---
title: Pengaturan PartCraft
summary: Pilih tombol mouse yang memutar tampilan, buat geseran trackpad memutar dan menggeser part, aktifkan atau nonaktifkan relasi otomatis saat menyketsa, dan atur berapa thread yang dipakai solver simulasi.
keywords: pengaturan, preferensi, opsi, mouse, tombol tengah, tombol roda, orbit, putar, trackpad, touchpad, gulir, geser, cubit, relasi, batasan, relasi otomatis, snap, berimpit, thread, thread solver, inti, prosesor, multi-thread, solusi lebih cepat, paralel
from: 759edcaf
---

Buka {{ui:Pengaturan}} lewat ikon roda gigi di bilah app atau dengan {{key:Mod+,}}. Tab pertama, {{ui:PartCraft}}, berisi pengaturan milik app ini; {{ui:Umum}} berisi pengaturan yang dipakai bersama oleh setiap app CadCraft (tema, bilah alat, panel). Pengaturan PartCraft hanya ada di app: Anda mengubahnya di sini, dan peramban ini mengingatnya. {{ui:Atur ulang pengaturan PartCraft}} mengembalikan semuanya ke keadaan awal.

## Memutar tampilan

- **Tombol kiri** (awal): seret dengan tombol kiri untuk memutar part; seret dengan tombol kanan atau tengah untuk menggeser.
- **Tombol tengah**: tekan roda dan seret untuk memutar part; tahan {{key:Shift}} (atau {{key:Ctrl}}, atau ⌘) dengan tombol tengah, atau seret dengan tombol kanan, untuk menggeser. Tombol kiri hanya memilih muka, tepi dan bidang, sehingga klik yang sedikit bergeser tidak pernah memutar part. Banyak program CAD bekerja seperti ini.

Roda memperbesar di posisi penunjuk dalam kedua cara. Dalam sketsa, tombol kanan dan tengah tetap menggeser seperti biasa.

## Menggulir: roda mouse atau trackpad

- **Tentukan sendiri** (awal): PartCraft mengamati gulirannya. Gulir menyamping atau halus, seperti yang dikirim trackpad, memutar part; putaran roda utuh memperbesar.
- **Roda mouse**: menggulir selalu memperbesar ke arah penunjuk.
- **Trackpad**: geser dengan dua jari untuk memutar part, tahan {{key:Shift}} lalu geser untuk menggeser, cubit untuk memperbesar. Dalam sketsa, geseran dua jari menggeser sketsa.

Cubit selalu memperbesar di setiap pilihan. Jika "Tentukan sendiri" salah menebak untuk mouse atau trackpad Anda, pilih yang Anda punya. Selengkapnya di [Trackpad, sentuh dan layar kecil](topic:trackpad-and-touch).

## Menyketsa: tambahkan relasi saat menggambar

**Tambahkan relasi saat menggambar** (aktif di awal): klik yang menempel ke sebuah titik membuat titik baru berimpit dengannya, klik pada kurva menempatkan titik di kurva itu, dan garis yang digambar hampir mendatar atau tegak menjadi horizontal atau vertikal. Lihat [Relasi dan dimensi](topic:relations-dimensions).

Nonaktifkan saat Anda ingin menempatkan geometri dekat geometri lain tanpa menghubungkannya. Penunjuk tetap menempel ke titik dan kurva, tetapi tidak ada yang tersambung: garis yang digambar berantai tidak berbagi ujungnya, sehingga seretan bisa memisahkannya. Tambahkan sendiri relasi yang Anda inginkan dari panel kanan. Profil tertutup tetap diekstrusi jika ujung-ujungnya bertemu.

:::note
Pengaturan ini hanya mengubah apa yang ditambahkan gambar baru. Relasi yang sudah ada dalam sketsa tetap, dan alat Fillet tetap membuat busur singgung serta jari-jarinya.
:::

## Menyketsa: beri dimensi saat menggambar

**Beri dimensi saat menggambar** (aktif di awal): saat garis, persegi panjang, lingkaran atau busur sedang digambar, mengetik angka mengisi kotak ukuran di samping penunjuk ({{key:Tab}} pindah ke kotak berikutnya), dan {{key:Enter}} menggambar bentuk itu dengan ukuran tersebut, dengan dimensi penggerak untuk setiap ukuran yang Anda ketik. Nonaktif: mengetik angka saat menggambar tidak melakukan apa pun, dan bentuk hanya digambar dengan klik. Lihat [Ketik ukuran saat menggambar](topic:sketch-basics#type-the-size-as-you-draw).

## Indikator sudut

Yang tampil di sudut tampilan 3D: **Kubus tampilan** (awal; kanan atas — klik muka, tepi atau sudut untuk melihat dari sana, seret untuk orbit, seret cincin kompasnya untuk memutar model), **Ikon sumbu** (penanda kecil X, Y, Z di kiri bawah yang berputar mengikuti tampilan: X merah, Y hijau, Z biru) atau **Tidak ada**. Keduanya tidak tampil saat Anda menyketsa atau di lembar gambar. Lihat [Kubus tampilan](topic:view-cube).

## Thread solver

Berapa thread yang boleh dipakai solver simulasi. **Otomatis** (awal) memakai satu lebih sedikit dari prosesor logis komputer (paling banyak 16), agar halaman tetap responsif saat sebuah studi sedang dihitung; atau pilih angka. Studi voxel besar, tekuk, tegangan terhadap waktu dan aliran diselesaikan lebih cepat pada beberapa thread (sekitar 2× pada 4 thread untuk 80.000 kubus menurut pengukuran kami, lebih pada komputer yang tidak sibuk). Model di bawah sekitar 20.000 nilai yang dicari tetap pada satu thread, karena memulai thread lebih mahal daripada manfaatnya. Solusi multi-thread memberi jawaban yang sama dengan satu thread (sampai pembulatan: jumlahnya ditambahkan dalam urutan yang berbeda). Hasil setiap studi mencantumkan **N thread** atau **1 thread** beserta alasannya di bawah **Solver**.

Thread harus membuat halaman berada dalam kondisi **cross-origin isolated** (peramban hanya mengizinkan worker berbagi memori dalam kondisi itu). Halaman laboratorium memenuhinya; jika tidak, pengaturan memberi tahu ("Halaman ini tidak cross-origin isolated, sehingga solver berjalan pada satu thread apa pun yang dipilih di sini.") dan setiap penyelesaian memakai satu thread. Hal lainnya bekerja sama, dan jawabannya tetap sama.

Aliran laminar juga memakai thread (sekitar 2,5× pada 4 thread untuk 54.000 sel fluida, jawaban yang sama sampai digit terakhir). Solver tetrahedron kuadratik dan perpindahan panas berjalan pada satu thread: membuatnya multi-thread terbukti lebih lambat pada komputer uji kami (solver mereka dibatasi oleh kecepatan memori dan oleh satu langkah yang tidak bisa dipecah).

### Di server web Anda sendiri

Jika Anda menjalankan PartCraft dari server sendiri, ia bekerja apa adanya. Untuk thread solver, minta server mengirim dua header dengan halaman PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Pada Apache, di `.htaccess` folder tersebut (memerlukan mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Pada nginx, di `location` yang melayani PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Muat ulang halaman: Pengaturan › Thread solver lalu menawarkan **Otomatis** dengan jumlah prosesor komputer Anda. Header kedua membuat peramban menolak apa pun yang dimuat halaman dari situs lain yang tidak mengizinkannya, yang aman untuk PartCraft karena ia memuat semuanya dari foldernya sendiri.
