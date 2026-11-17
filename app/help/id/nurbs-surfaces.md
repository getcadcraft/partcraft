---
title: Permukaan freeform (NURBS)
summary: Kurva dan permukaan halus di samping part — loft, sapuan, jaringan kurva, patch empat tepi, blend, trim — dengan kontinuitas G0, G1, dan G2 diukur pada permukaan eksak, solid dengan union, kurangi, dan irisan yang dibakar ke dalam part, tampilan zebra dan kelengkungan, muka yang dipasang pada hasil pindaian dengan galat yang diukur, serta file STEP atau IGES. Disimpan dalam file part.
keywords: nurbs, pindaian, rekayasa balik, pasang, mesh ke permukaan, awan titik, stl, trim, trimmed, lubang, potong, solid, boolean, union, kurangi, irisan, selisih, jahit, tertutup, bakar, freeform, free-form, permukaan, b-spline, bspline, kurva, spline, loft, sweep, rel, jaringan, coons, patch, blend, match, kontinuitas, g0, g1, g2, singgung, kelengkungan, zebra, titik kontrol, knot, derajat, step, iges, class a, hull, fairing
from: 64ed5196
---

Workspace **Permukaan** membuat kurva dan permukaan halus seperti yang dipakai untuk cangkang produk, badan mobil, dan lambung kapal: NURBS, matematika yang sama dengan yang dipakai pemodel permukaan lain. Semuanya diukur pada permukaan eksak, tidak pernah pada segitiga yang Anda lihat. Ukuran dalam milimeter, seperti bagian PartCraft lainnya.

Pilih **Permukaan** di kotak **Workspace**. Bilah alat memiliki {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} dan {{ui:Zebra}}; setiap perintah ada di panel kanan. Sebuah perintah menyebutkan apa yang masih dibutuhkannya: klik kurva atau permukaan di tampilan (dekat tepi atau ujung bila diminta) atau pilih dari daftar; ketik titik, atau klik pada muka part (di luar part, titik jatuh pada bidang tanah), lalu tekan Enter.

Kurva dan permukaan disimpan dalam file part di samping solid. Keduanya tidak mengubah fitur part: panel memiliki **Urungkan** dan **Ulangi** sendiri, satu langkah per perintah.

## Kurva

- **Kurva melalui titik** melewati setiap titik yang Anda klik. **Kurva dengan titik kontrol** mengikuti kerangka titik sebagai gantinya.
- **Sisipkan knot**, **Naikkan derajat** dan **Turunkan derajat** mengubah cara kurva dijelaskan tanpa memindahkannya (penurunan ditolak bila kurva akan bergeser lebih dari toleransi). **Bangun ulang kurva** memberinya jumlah titik kontrol baru dan menyebutkan seberapa jauh ia bergeser.
- **Cocokkan kurva** membuat ujung satu kurva bertemu dengan ujung kurva lain dengan G0 (bersentuhan), G1 (arah sama), atau G2 (kelengkungan sama juga). **Blend kurva** menambahkan kurva baru di antara dua ujung, G1 atau G2.

## Permukaan

- **Loft** melalui dua kurva atau lebih, **Permukaan lurus** di antara dua, **Ekstrusi kurva**, **Revolusi kurva**.
- **Sapuan sepanjang satu rel** membawa profil sepanjang jalur tanpa memuntirnya; **Sapuan sepanjang dua rel** menjaga ujung profil tetap pada kedua rel. Sapuan dipasang: hasilnya menyebutkan seberapa dekat ia tetap pada sapuan yang sebenarnya.
- **Permukaan dari jaringan kurva** melewati kisi kurva (masing-masing berpotongan sekali dengan setiap kurva lain). **Patch dari empat tepi** mengisi empat kurva yang bertemu di sudutnya.
- **Cocokkan permukaan** membuat tepi permukaan bertemu dengan tetangganya dengan G0, G1, atau G2; **Blend permukaan** menambahkan permukaan di antara dua tepi.
- **Permukaan offset**, **Perpanjang permukaan** (permukaan terus berlanjut seperti arahnya), **Bangun ulang permukaan**.

## Memeriksa kualitas

Tabel **Tepi bersama** mencantumkan setiap tepi yang dimiliki dua permukaan, dengan celah (mm), sudut di antaranya (°) dan lompatan kelengkungan (1/mm), serta apakah itu menjadikannya G0, G1, atau G2. Tepi yang lebih buruk dari yang Anda minta muncul di **Masalah** dengan perbaikan **Cocokkan**. Garis **Zebra** dan warna **kelengkungan** berasal dari permukaan eksak: garis yang berlanjut tanpa putus melintasi tepi berarti G1; garis yang juga mempertahankan lebarnya berarti G2.

G0–G2 diukur, pada 33 titik per tepi. Kualitas **G3 dan "class A" tidak diukur** dan tidak diklaim.

## Potong permukaan

Grup **Trim** memotong permukaan tanpa mengubah bentuknya: permukaan menyimpan semua titik kontrolnya, dan hanya bagian di dalam garis luar yang ditampilkan, dihitung, dan ditulis. **Potong ke persegi panjang** dan **Potong dengan lingkaran** bekerja pada bagian (0 sampai 1) dari permukaan di setiap arah, sehingga tidak perlu memilih di tampilan; **Potong dengan kurva** menerima kurva tertutup yang terletak pada permukaan (ia diproyeksikan ke permukaan, dan ditolak dengan kata-kata bila terbuka atau lebih dari toleransi jauhnya). Centang **Potong lubang** untuk membuang bagian dalam garis luar; biarkan kosong untuk hanya menyimpan bagian dalam. Sebuah permukaan dapat memiliki satu garis luar yang disimpan dan sejumlah lubang; garis luar yang memotong garis lain ditolak. **Hapus trim** menampilkan kembali seluruh permukaan. Urungkan di panel mengembalikan trim seperti langkah lainnya.

STEP membawa trim sebagai batas muka dan IGES sebagai permukaan ter-trim (entitas 144); keduanya membacanya kembali.

## Solid dan Boolean

Grup **Solid** mengubah permukaan menjadi badan tertutup dan menggabungkannya. Solid di sini adalah sekumpulan permukaan milik panel yang bersama-sama menutup sebuah volume; mukanya tetap permukaan NURBS eksak dengan trim-nya.

- **Solid kotak**, **Solid silinder** dan **Solid bola** membuatnya dari ukuran yang diketik (dalam mm): kotak dari enam muka datar, silinder dari sisi bulat dan dua ujung datar yang di-trim ke lingkaran, bola dari satu permukaan revolusi.
- **Solid dari permukaan** mengelompokkan permukaan yang Anda buat sendiri. Pilih permukaannya, atau jangan pilih apa pun untuk memakai setiap permukaan yang ditampilkan dan belum berada dalam solid. Permukaan dijahit bersama dalam toleransi: jika tidak tertutup, tidak ada yang berubah dan panel menyebutkan berapa tepi yang tetap terbuka dan seberapa dekat keduanya harus bertemu.
- **Union**, **Kurangi** (solid kedua dikurangkan dari solid pertama) dan **Irisan** (hanya bagian yang dimiliki keduanya) membutuhkan dua solid: klik satu muka dari masing-masing di tampilan, atau tekan **Pilih** di daftar **Solid**. Centang **Simpan kedua solid** untuk membiarkannya di samping hasil.

Boolean mempertahankan setiap muka pada permukaan eksaknya sendiri dan memotongnya dengan garis luar trim baru sepanjang perpotongan. Baris hasil memberikan angka yang diukur: seberapa jauh titik mesin solid harus bergeser agar berada di atas permukaan eksak (tidak pernah lebih dari toleransi), seberapa dekat titik perpotongan ke kedua permukaan (biasanya beberapa per sejuta milimeter), volume, dan apakah muka baru tertutup kembali ketika dijahit ulang dari permukaan eksaknya. Volume diukur pada segitiga dalam toleransi (0.05 mm kecuali Anda mengatur yang lain), sehingga volume bola atau silinder terbaca sedikit di bawah yang eksak: toleransi yang lebih kecil membuatnya lebih dekat. Boolean yang tidak dapat dilakukan dengan bersih (solid tidak memiliki bagian bersama, garis luar akan memotong dirinya sendiri) ditolak dengan kata-kata dan tidak mengubah apa pun. Satu Boolean adalah satu langkah **Urungkan** panel.

Di daftar **Solid**, **Pisahkan** menyimpan muka sebagai permukaan biasa; tempat sampah menghapus solid beserta mukanya.

## Fillet dan penebalan

**Fillet antar muka** membulatkan tepi tempat dua muka dari satu solid bertemu: pilih kedua muka (di tampilan, atau dengan **Pilih** di daftar), ketik **radius** dan, untuk radius yang berubah sepanjang tepi, **radius di ujung** (0 mempertahankan satu radius). Sebuah bola dengan radius itu digulirkan sepanjang tepi sambil menyentuh kedua muka; fillet adalah busur lingkaran eksak yang ditinggalkannya di setiap titik, disatukan menjadi satu permukaan, dan kedua muka di-trim di tempat bola menyentuhnya. Tepi luar kehilangan material, sudut dalam mendapat material. Baris hasil memberikan apa yang diukur: seberapa jauh permukaan fillet dari bola yang bergulir di antara titik-titik tempat ia dibangun (titik ditambahkan sampai berada dalam seperempat toleransi), sudut terbesar antara fillet dan setiap muka di sepanjang garis sentuh, dan angka yang sama dengan Union. Radius yang tidak muat (bola akan keluar dari muka, atau muka melengkung lebih ketat dari radius) ditolak, dengan menyebut mukanya, dan tidak ada yang berubah.

**Fillet beberapa tepi** membulatkan banyak tepi dalam satu langkah: pilih dua muka dari tepi pertama, lalu dua muka dari tepi berikutnya, dan seterusnya (sebuah muka boleh berada dalam beberapa pasangan, misalnya muka atas kotak dalam empat pasangan); semua tepi mendapat radius yang Anda ketik. Setiap pembulatan dihitung pada solid seperti semula, lalu dipotong satu demi satu, sehingga urutannya tidak berpengaruh. Di tempat dua tepi bulat bertemu pada sudut yang tepi lainnya tetap tajam, kedua fillet bertemu di sepanjang kurva perpotongannya (lipatan). Di tempat tiga tepi luar bulat dari tiga muka datar yang saling tegak lurus bertemu dengan satu radius, sudut menjadi satu **patch bola** yang menyinggung ketiga fillet (hilangkan centang **Sudut** untuk mendapatkan sudut berlipat sebagai gantinya); sebuah tepi harus setidaknya dua kali radius panjangnya bila kedua ujungnya adalah sudut seperti itu. Baris hasil menyebutkan berapa tepi yang dibulatkan dan bagaimana sudutnya jadi. Tepi dalam juga dapat dibulatkan bersama, tetapi hasil yang tidak tertutup kembali hanya dilaporkan (baris menyatakannya), jadi periksalah.

**Tebalkan menjadi solid** memberi permukaan ketebalan: pilih, ketik **ketebalan**, dan centang **Sisi lain** untuk menumbuhkannya ke arah sebaliknya. Muka offset dipasang pada permukaan dan diukur terhadapnya (baris hasil memberikan selisih terbesar dari ketebalan); dinding mengikuti setiap tepi dan setiap garis luar trim. Bila permukaan melengkung lebih ketat dari ketebalan di sisi itu, atau bagian lain darinya berada lebih dekat dari ketebalan, ditolak dengan menyebut permukaan dan tempatnya, dan tidak ada yang berubah.

## Bakar solid ke dalam part

**Bakar** (di bilah alat Permukaan), atau **Bakar ke dalam part** di daftar **Solid**, menjadikan solid sebagai badan dari part, seperti STL yang dibuka menjadi badan: pilih solid, apakah **ditambahkan** ke part, **dipotong** darinya atau **diiris** dengan itu, dan toleransinya (seberapa jauh segitiga boleh berbeda dari permukaan eksak). Ini adalah satu langkah Urungkan part dan muncul di daftar fitur sebagai impor yang dinamai sesuai solid. Part menyimpan segitiga, sehingga dibuka dan dibangun ulang tanpa permukaan; solid eksak tetap di Permukaan, sehingga Anda dapat membakarnya lagi setelah perubahan.

## File

Ekspor **STEP** (AP242) atau **IGES** dengan kurva dan permukaan persis seperti adanya (kurva dan permukaan B-spline, tidak ada yang diubah menjadi segitiga). Setiap permukaan adalah mukanya sendiri, dengan trim-nya; solid ditulis sebagai satu shell tertutup, setiap tepi dimiliki oleh kedua mukanya seperti yang diharapkan program CAD lain (baris status menyebutkan berapa solid yang keluar dengan cara itu). Dalam IGES solid yang sama adalah satu solid B-rep manifold (entitas 186 di atas shell tertutup 514, muka 510, loop 508, satu daftar tepi 504 dan satu daftar verteks 502); solid yang mukanya tidak berpasangan tepi demi tepi ditulis sebagai muka terpisah, dan baris menyatakannya. **Impor…** membaca solid seperti itu kembali sebagai solid, dari STEP dan dari IGES.

## Haluskan garis lambung

**Haluskan** (di bilah alat Permukaan) mengukur setiap kurva pada bentuk eksaknya — titik infleksi (tempat ia berubah dari membengkok satu arah ke arah lain), kelengkungan terbesar, lompatan kelengkungan pada knot-knotnya dan kekasarannya — lalu membangun ulang kurva yang memiliki infleksi atau lompatan dengan jumlah titik kontrol paling sedikit yang tetap dalam toleransi yang Anda berikan dan tidak menambah infleksi. Gambar station, garis air dan buttock sebagai kurva, haluskan, lalu **Loft** lambung melalui station dan periksa dengan **Zebra**. Kurva yang tidak halus juga muncul di **Masalah** dengan perbaikan **Haluskan kurva ini**. Garis yang memang dimaksudkan untuk berubah arah (penampang berbentuk S) mempertahankan satu infleksi itu. Perpindahan, pusat, dan lengan pemulih lambung berasal dari part solid: lihat alat hidrostatika.

## Permukaan dari pindaian (rekayasa balik)

Buka part yang berisi mesh hasil pindaian (STL yang dibuka atau badan yang dibakar), pilih **Permukaan** di kotak **Workspace**, lalu di grup **Pindai** pilih **Pasangkan permukaan ke pindaian**; mesh part yang dibangun adalah hasil pindainya.

Alat ini mencari **bidang**, **silinder**, **bola** dan **kerucut** (permukaan eksak yang membentuk part hasil mesin; setiap baris menampilkan radius atau setengah sudut yang ditemukannya), menemukan **fillet** (tepi dan sudut yang dibulatkan: silinder atau bola kecil yang bersinggungan dengan dua muka atau lebih, ditampilkan dengan radiusnya dan muka yang dihubungkannya), **fillet pinggiran** (torus: tepi bulat tempat muka datar bertemu silinder atau kerucut, ditampilkan dengan radius dan radius cincinnya) dan **fillet variabel** (tepi bulat yang radiusnya berubah sepanjangnya, ditampilkan dengan radius di setiap ujung), memasang **satu patch freeform** pada bagian halus yang melengkung landai, dan memotong setiap muka mengikuti garis luar bagian pindaian asalnya, sehingga lubang dan sudut tetap ada. Pilihan: **toleransi** (seberapa jauh, dalam mm, sebuah titik pindaian boleh berada dari bidang atau silinder dan tetap menjadi miliknya, serta sasaran untuk patch freeform), **bagian terkecil** (bagian dari luas permukaan) dan **muka terbanyak**. Pindaian dan pilihan yang sama selalu menghasilkan muka yang sama.

Hasilnya berupa tabel, satu baris per muka: jenisnya, berapa segitiga asalnya, dan galat yang **diukur dari pindaian ke muka** (rms, yang terbesar, dan bagian titik dalam toleransi). Titik yang diukur adalah verteks pindaian dan tengah setiap segitiga. Galat tidak diukur sebaliknya (muka ke pindaian), sehingga muka yang melampaui pindaian tidak akan terlihat. Catatan di bawah tabel juga menyebutkan berapa banyak luas yang terlalu kecil untuk dipasang. Di tampilan, titik pindaian diberi warna menurut **peta deviasi**-nya: biru pada muka, hijau di tengah jalan menuju toleransi, merah pada toleransi atau lebih (hilangkan centang **Tampilkan peta deviasi** untuk menyembunyikannya). Bagian yang melipat kembali ke dirinya sendiri (misalnya tabung tertutup yang dipasang dengan patch freeform) dicantumkan sebagai tidak terpasang, dan tidak pernah dipaksakan menjadi satu permukaan.

**Jahit permukaan menjadi solid** menjahit setiap permukaan yang ditampilkan dan belum berada dalam solid menjadi satu solid tertutup. Muka pindaian bertemu hanya dalam galat pindaian itu sendiri, jadi ia mencoba jarak sambungan terkecil yang menutup (tidak pernah lebih dari **jarak jahit** yang Anda atur) dan menolak dengan kata-kata bila muka tidak tertutup. Ia tidak pernah menambal celah. Kotak dengan tepi bulat dapat dijahit bila fillet-nya ditemukan sebagai muka tersendiri; jarak sambungan yang menutup ada di hasil. Solid kemudian bekerja dengan Union, Kurangi, Irisan dan **Bakar ke dalam part**.

Yang tidak dilakukannya: **fillet pinggiran** (torus) hanya dicari di sekitar sumbu silinder atau kerucut yang sudah ditemukan, dan **fillet variabel** hanya sepanjang tepi yang cukup lurus (penampangnya dipotong tegak lurus ke satu arah); di tempat lain, keduanya keluar sebagai patch freeform bila cukup halus dan jika tidak dihilangkan; bola, kerucut dan fillet ditemukan dengan pengambilan sampel acak, sehingga yang sangat kecil (beberapa segitiga) bisa terlewat; peta deviasi menampilkan jarak dari pindaian ke muka, bukan sebaliknya; pindaian yang sangat besar (lebih dari 300.000 segitiga) ditolak di sini. Muka silinder putaran penuh dipotong di sekeliling lubang, dengan sambungan diletakkan di tempat yang tidak ada lubang. Periksa setiap muka dengan pindaian Anda sebelum mengandalkannya.

## Belum dibuat

Membulatkan tepi yang bertemu di sudut muka melengkung atau dengan radius berbeda (blend verteks), fillet antar muka yang tidak bertemu, fillet dalam yang berakhir pada muka miring atau melengkung, Boolean dan fillet yang dihitung pada permukaan tanpa segitiga (di sini mesin solid bekerja pada segitiga dalam toleransi, dan setiap titik kemudian dikembalikan ke permukaan eksak), badan yang dibakar yang mengikuti permukaan saat berubah, memotong permukaan dengan permukaan lain di luar Boolean, mengisi lubang dengan lebih dari empat sisi, memproyeksikan kurva ke permukaan.
