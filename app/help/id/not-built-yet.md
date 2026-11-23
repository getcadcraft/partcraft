---
title: Yang belum dibuat
summary: Semua yang belum dilakukan build PartCraft ini, dari sapuan memutar hingga tampilan inci, dimensi gambar, dan sub-rakitan, beserta yang dapat dilakukan sebagai gantinya hari ini.
keywords: belum ada, belum, batasan, limitasi, peta jalan, exact kernel, fillet, chamfer, shell, sweep, loft, impor step, simulasi, manufaktur, twist sweep, loft end tangency, face fillet, persamaan, inci, dimensi gambar, sub-rakitan, cloud, tablet, ponsel
from: 97b10a29
---

PartCraft adalah build awal. Halaman ini mencantumkan apa yang belum dilakukannya, supaya Anda tidak mencarinya, dan apa yang dapat dilakukan sebagai gantinya hari ini. Tidak ada tanggal untuk semua ini.

## Memerlukan exact kernel

Versi ini membangun setiap benda dengan mesh kernel (lihat [Mesh kernel](topic:solid-kernels)). Semua yang di bawah ini memerlukan kernel geometri eksak, yang belum dimiliki versi ini. Benda yang disimpan dengan fitur-fitur ini tetap dapat dibuka: fiturnya tetap ada di riwayat, ditandai sebagai belum dibuat, dan tetap dipertahankan saat Anda menyimpan.

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| {{ui:Fillet}} dan {{ui:Chamfer}} pada tepi bulat; fillet yang jari-jarinya berubah sepanjang tepi; pembulatan yang menyatu dengan halus di tempat mereka bertemu (mesh kernel memotongnya miring) | Fillet dan Chamfer bekerja pada tepi lurus di antara muka datar; bulatkan sudut lain pada sketsa sebelum Anda mengekstrusi ({{ui:Fillet}} pada sketsa, {{key:F}}) |
| {{ui:Shell}} yang membuka muka lengkung; dinding dengan ketebalan berbeda | Buka muka datar; tambahkan material dengan ekstrusi di tempat dinding harus lebih tebal |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} pada muka lengkung; ekstrusi sampai sebuah muka, muka berikutnya, atau sebuah verteks; ekstrusi meruncing | Ekstrusi atau revolusi, dalam langkah-langkah bila perlu; ekstrusi ke kedalaman yang Anda ukur |
| {{ui:Rib}}, {{ui:Flens dasar}}, {{ui:Flens tepi}}, dan pola bentangan | Ekstrusi pelat atau profil rusuk |
| Permukaan: menyelesaikan {{ui:Bentuk}} menjadi bagian benda, {{ui:Tambal}}, {{ui:Permukaan loft}}, {{ui:Permukaan Gordon}}, {{ui:Jahit}}, {{ui:Pertebal}}, {{ui:Permukaan offset}}, {{ui:Perpanjang permukaan}}, {{ui:Pangkas permukaan}} | Tidak tersedia |
| Beberapa bodi: {{ui:Gabungkan}}, {{ui:Pindahkan bodi}}, {{ui:Skala bodi}}, {{ui:Pola lintasan}}, fitur yang membuat bodi baru | Satu solid; pola dan cermin menyalin fitur |
| Sketsa, bidang, sumbu, dan titik pada muka yang hanya dapat ditemukan oleh exact kernel (muka yang dibuat oleh fillet, dinding lubang, muka dari solid yang diimpor) | Sketsa pada bidang dasar, bidang referensi, dan muka datar dari ekstrusi dan revolusi |
| Hasil desain generatif yang dibuka sebagai benda atau ditambahkan ke benda (menjadi solid impor) | Unduh hasilnya sebagai STL atau STEP |
| Menyunting muka lengkung dari file STEP yang dibuka sebagai muka eksak; STEP eksak dari muka spline, sapuan, dan revolusi dari file STEP; sisi spline; ulir yang dimodelkan; bodi STL / OBJ / 3MF dan rakitan; STEP untuk pemodel part lain | {{ui:Buka}} membaca STEP sebagai segitiga dan mempertahankan muka datar, silinder, kerucut, bola, dan torus dari file untuk ekspor ([Buka file STEP](topic:import-step)); {{ui:Ekspor}} › {{ui:STEP AP242 (solid eksak)}} menulis setiap muka analitik secara eksak dan mempertahankannya sebagai facet ([Ekspor](topic:export-files#for-other-cad-programs-step)); makro untuk pemodel part lain tetap menulis |
| Tampilan potongan pada gambar yang bukan busur sejati | Tampilan dan tampilan potongan digambar dari facet |
| Volume, luas, dan jarak yang eksak | {{ui:Ukur}} memberikan angka dari solid berfacet, sedikit lebih kecil pada benda bulat; pengaturan **Kurva** yang lebih halus mendekatkannya |

Beberapa baris dalam tabel di bawah menyarankan salah satu fitur ini sebagai cara lain untuk sesuatu. Saran itu berlaku setelah exact kernel tersedia kembali.

## Fitur

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Fillet muka, fillet bulat penuh, fillet dengan jari-jari yang diatur pada titik-titik sepanjang tepi | {{ui:Fillet}} konstan atau variabel linear; beberapa fitur fillet |
| Shell dengan ketebalan dinding berbeda | Satu ketebalan {{ui:Shell}}; tambahkan material dengan ekstrusi di tempat dinding harus lebih tebal |
| Draft pada muka bentuk bebas (spline) | {{ui:Draft}} bekerja pada muka datar, silindris, dan kerucut |
| Sapuan memutar, sapuan dinding tipis dan sapuan permukaan; end tangency pada fitur Loft; loft dengan satu rel pemandu; jalur spline | {{ui:Sweep}} dengan orientasi tetap atau skala ujung; loft dengan dua atau lebih rel pemandu: lihat [Sweep, loft, dan draft](topic:sweep-loft-draft) |
| Rusuk dari busur atau spline; rusuk yang tumbuh persegi terhadap sketsa (dari tampilan atas); draft pada rusuk; beberapa rusuk dari satu sketsa | {{ui:Rib}} dari satu rantai garis pada bidang rusuk itu sendiri: lihat [Rusuk dan gusset](topic:rib) |
| "Sampai" ke permukaan lengkung, "sampai berikutnya" yang berhenti di muka lengkung | Sampai ke muka datar atau bidang referensi |
| Lubang counterdrill, ulir inci dan pipa, ulir meruncing, akhir ulir, dan awal ulir yang dichamfer | Counterbore dengan kedalaman kecil; ulir metrik ISO dan trapesium, kosmetik atau dimodelkan: lihat [Ulir pada poros dan lubang, digambar atau dimodelkan](topic:threads) |
| Ekstrusi fitur tipis | Gambar kedua dinding profil |
| Salinan pola yang dilewati satu per satu, pola isi | Gunakan fitur terpisah; pola sepanjang kurva: {{ui:Pola lintasan}} |
| Salinan pola, cermin, fillet, chamfer, shell, dan solid impor | Salin sketsa atau fitur tempat mereka dibangun, atau polakan |
| Tangency eksak (G1) pada titik istimewa sebuah bentuk; menggabungkan tambalan bentuk menjadi muka yang lebih besar | Naikkan Level bentuk: tambalan yang diperkirakan menjadi lebih kecil; lihat [Bentuk bebas dengan Form](topic:form-surfaces) |
| Bentuk yang terdiri dari beberapa potongan tertutup terpisah dalam satu fitur; jembatan di antara bentuk | Satu potongan tertutup per fitur Form; gabungkan dengan Join |
| Memilih bodi permukaan di tampilan (kecuali titik pangkas dan tambal); fillet permukaan; untrim; tambalan G2; permukaan Gordon yang bersinggungan dengan tetangga lengkung (bersinggungan dengan bidang dan muka datar sudah dibuat) | Pilih berdasarkan nama di panel fitur; tebalkan dulu, lalu fillet solid |
| Daftar bodi di riwayat; membiarkan bodi tersembunyi keluar dari ekspor | Ganti nama dan sembunyikan bodi di daftar bodi panel benda; hapus atau nonaktifkan fitur yang membuat sebuah bodi untuk membiarkannya keluar |
| Penskalaan nonuniform yang mempertahankan silinder dan kerucut tetap analitik; penskalaan nonuniform pada permukaan offset | {{ui:Skala bodi}} membuat muka lengkung menjadi B-spline tertutup (dalam 0.0000004 mm); skala uniform tetap eksak |
| Menggabungkan bodi permukaan; penjumlahan Minkowski | {{ui:Jahit}} atau {{ui:Pertebal}} dulu, lalu {{ui:Gabungkan}} |
| Analisis toleransi: stack-up yang berbelok (loop vektor 2D dan 3D), sensitivitas yang dihitung dari geometri, Monte Carlo dengan distribusi lain, toleransi ukuran pada dimensi sketsa, toleransi bonus dari kondisi material | {{ui:Stack-up}} dalam rakitan: satu arah, kasus terburuk dan RSS, toleransi diketik, dari toleransi umum blok judul atau dari bingkai GD&T: lihat [Stack-up toleransi](topic:tolerance-stackup) |
| Nesting: urutan potong dan lead-in, memotong tepi bersama sekali, bagian yang harus tetap bersama; sisa gulungan, stok yang dibagi antarproyek | {{ui:Nesting part datar pada lembaran…}} dengan jarak, margin, putaran, dan serat: lihat [Nesting part datar pada lembaran](topic:nest-flat-parts); pelat sisa disimpan dan dipakai lebih dulu: lihat [Simpan dan pakai ulang potongan sisa](topic:nest-offcuts); rencanakan potongan di perangkat lunak pemotong Anda sendiri |
| Pelat logam: hem, jog, flens miter dan kontur; flens pada tepi lengkung atau pada muka flens dasar yang dibengkokkan; tekukan yang disketsa; penutup sudut; alat pembentuk; mengubah solid menjadi pelat logam; bentangan flens dasar yang dibengkokkan dengan potongan; tabel tekukan | {{ui:Flens dasar}} (pelat atau profil yang dibengkokkan), {{ui:Flens tepi}} pada tepi lurus pelat dengan relief tekukan, dan pola bentangan dengan K-factor: lihat [Pelat logam](topic:sheet-metal) |
| {{ui:Analisis draft}} pada rakitan; mencari garis pemisah; analisis ketebalan dinding | {{ui:Analisis draft}} pada benda di Desain: lihat [Periksa draft untuk cetakan dan pengecoran](topic:draft-analysis); buka setiap bagian rakitan untuk memeriksanya |

## Sketsa

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Elips, busur tangen, konik, spline dengan derajat atau bobot yang diatur (NURBS) | Spline (kubik), busur dan lingkaran dengan relasi Tangen |
| Titik pada spline (sebuah relasi), relasi kelengkungan (G2) | Letakkan titik spline itu sendiri di tempat ia harus melewati |
| Salinan offset dari spline yang mengikuti perubahan berikutnya; offset dari rantai dengan sudut spline yang tajam | Offset lagi setelah perubahan; bulatkan sudutnya dulu |
| Salinan pola yang tetap terhubung dengan aslinya; pola sepanjang kurva | Polakan lagi setelah perubahan |
| Memproyeksikan tepi lingkaran bentuk bebas atau miring, geometri proyeksi yang mengikuti benda | Proyeksikan tepi lingkaran lurus dan sejajar, lalu beri dimensi |
| Dimensi acuan (driven) | Baca ukuran dari panel atau fakta benda |
| Relasi collinear | Sejajar dengan jarak 0 |
| Menempel ke program lain (clipboard sistem) | Ekspor DXF, STEP, STL, atau 3MF |
| Mengetik busur, koordinat relatif atau polar | Ketik garis dan lingkaran; gambar busur dengan alat Busur |
| Memilih geometri tanpa penunjuk | Perlu klik atau sentuhan |

## Parameter dan satuan

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Konfigurasi yang mengubah material; tabel desain CSV yang mematikan fitur | Konfigurasi mengatur parameter dan menyalakan serta mematikan fitur: lihat [Konfigurasi dan tabel desain](topic:design-tables); `partcraft variants` membuat paket konfigurasi tersimpan berdasarkan nama, termasuk fitur yang dimatikan: lihat [Buat paket varian dari konfigurasi Anda](topic:variant-pack) |
| Persamaan pada angka panel fitur terbaru (bidang, sapuan, draft, dan sejenisnya) | Tulis di skrip atau dengan `partcraft set` ([Skrip dan baris perintah](topic:scripts-and-cli)) |
| Benda ditampilkan dalam inci | Ukuran ditampilkan dalam milimeter; ketik `2in` pada kotak angka atau ekspresi dan ia menjadi 50.8 |

## Berkas

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Menyunting fitur milik solid STEP yang diimpor (ia datang tanpa riwayat) | Tambahkan atau potong material dengan fitur Anda sendiri |
| Membaca warna, nama, struktur rakitan, dan PMI dari STEP | Tidak tersedia |
| Ekspor glTF, OBJ, IGES, Parasolid; DWG dari benda 3D (hanya paket varian yang menulis DWG: lembar gambar) | STL atau 3MF untuk mesh; STEP untuk solid; DXF untuk 2D |
| Membuka IGES, DXF, atau file milik program lain (file `.3dm` terbuka sebagai satu bodi: [Buka model .3dm sebagai bodi solid](topic:open-3dm-files)) | Minta STEP, atau mesh STL, OBJ, atau 3MF yang tertutup: [Buka STL, OBJ, atau 3MF](topic:open-meshes) |
| Struktur rakitan (pohon dengan nama bagian) dalam STEP yang diekspor | STEP rakitan adalah satu compound dari solid yang sudah ditempatkan |
| Menyimpan ke folder pilihan Anda tanpa unduhan peramban | Aktifkan "tanyakan lokasi penyimpanan" dalam pengaturan unduhan peramban |

## Gambar

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Dimensi di luar tiga ukuran keseluruhan (ukuran lubang, posisi, toleransi pada ukuran) | Beri tanda pada PDF, atau ekspor DXF dan beri dimensi di program CAD 2D |
| Lebih dari satu tampilan potongan atau detail; tampilan sejajar, patah, dan bantu | Satu potongan dan satu detail per gambar |
| Teks bebas, catatan, dan tabel pada lembar (selain blok judul dan revisi) | Catatan finishing, atau teks yang ditambahkan pada PDF |
| Proyeksi sudut pertama, tampilan yang dipindahkan, lembar potret | Sudut ketiga, tata letak otomatis, lembar lanskap A4–A0 dan ANSI A–E |
| Tampilan potongan langsung: beberapa bidang atau kotak potong sekaligus, garis tepi di sekeliling potongan, menyimpan potongan dalam file | Satu bidang sekaligus dari {{ui:Tampilan}} › {{ui:Tampilan potongan}}; lihat [Lihat ke dalam dengan tampilan potongan](topic:section-view) |
| Gambar rakitan dengan lebih banyak tampilan, dimensi, atau balon yang dapat dipindahkan | Satu tampilan isometrik (atau terurai) dengan balon otomatis dan daftar bagian |
| Menyalin dan menempel simbol GD&T dan finishing | Pasang masing-masing dengan Datum, Bingkai, atau Finishing |
| Manual: file STEP pada {{ui:Dari file lain…}} di Illustrate, model yang langsung dikirim dari ModelCraft atau BimCraft, gambar dengan kualitas path tracer, 3D interaktif di dalam PDF | Buka STEP di Desain dan mulai manual dengan {{ui:Dari part yang terbuka}}; simpan model sebagai glTF (.glb); gambar PNG dari tampilan 3D; file 3D interaktif: lihat [Mulai manual di Illustrate](topic:illustrate) |

## Rakitan

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Sambungan roda gigi, rak, cam, dan sekrup; sambungan bola yang dibatasi pada kerucut; sambungan pada muka lengkung atau di antara titik | Sambungan kaku, revolute, slider, silindris, planar, bola, dan pin-in-slot pada muka datar, masing-masing dengan batasnya sendiri: lihat [Bangun rakitan](topic:build-assembly) |
| Langkah urai yang memutar bagian, dan menyeret bagian yang ditempatkan oleh sambungan | Langkah urai lurus; hapus sambungan untuk memindahkan bagian dengan tangan |
| Sub-rakitan | Satu tingkat bagian saja |
| Roda gigi, cam, kontak | Tidak tersedia |

## Manufaktur

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Pengosongan adaptif 3D dan pengasaran offset 3D; finishing waterline, pensil, radial, dan spiral; lintasan adaptif yang ditulis sebagai busur | Pengasaran 3D dalam baris lurus dan pemesinan sisa: lihat [Pengasaran 3D dan pemesinan sisa](topic:rough-3d); finishing Sejajar dan Scallop: lihat [Finishing 3D](topic:finish-3d); muka, kantong, adaptif 2D, kontur, bor, dan chamfer 2.5 sumbu: lihat [Buat jalur pahat dan G-code](topic:manufacture) |
| Pemotongan swarf, jalur flow-line dan pengasaran multi-sumbu, kode bidang kerja miring (G68.2), pemeriksaan tabrakan holder dan mesin; simulasi potongan 5 sumbu dan rotari | Alat miring untuk operasi apa pun, finishing 5 sumbu dengan end mill bola, dan finishing rotari sumbu ke-4: lihat [Pemesinan 4 dan 5 sumbu](topic:multi-axis) |
| Boring dan ulir dalam pada mesin bubut, siklus G71/G76, busur dalam lintasan bubut, alat hidup, sub-spindel | Bubut luar: muka, kasar, finishing, alur, potong benda, ulir, bor pada pusat: lihat [Bubut pada mesin bubut](topic:turning) |
| Probing sudut atau pojok, alat pengatur pahat, mengukur ukuran terhadap toleransi | Probing muka, sisi, lubang, atau tonjolan untuk mengatur offset benda kerja: lihat [Probing](topic:probing) |
| Pemeriksaan tabrakan holder dan shank | Perhatikan peringatan panjang flute dan periksa di simulator kontrol Anda |
| Siklus umur alat dan subprogram dalam post; memuat file post milik program lain | Tulis atau ubah post dalam format PartCraft sendiri: lihat [Post processor yang dapat Anda sunting](topic:post-processors) |
| G-code inci (G20) | Milimeter (G21) saja |

## Simulasi dan desain generatif

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Studi nonlinear: yielding, defleksi besar, kontak antarbagian, kelelahan | Statik linear dan frekuensi alami: lihat [Periksa tegangan dan defleksi](topic:simulation); jaga faktor keamanan jauh di atas 1 |
| Buckling nonlinear (imperfeksi, pasca-buckling, snap-through) | Faktor beban buckling linear dengan margin yang cukup: lihat [Panas, tegangan termal, dan buckling](topic:thermal-and-buckling) |
| Radiasi antarmuka (view factor), resistansi kontak, material yang bergantung suhu, inersia pada tegangan termal (gelombang kejut termal) | Radiasi ke sekitar, tegangan termal tunak atau kuasi-statik dari waktu ke waktu, sifat konstan: lihat [Panas, tegangan termal, dan buckling](topic:thermal-and-buckling) |
| Penyempurnaan otomatis untuk panas transien dan studi dengan beban termal; membuat mesh lebih kasar di tempat galatnya kecil; target pada kuantitas lokal (tegangan puncak di satu titik) | **Sempurnakan otomatis** untuk studi statik, buckling, frekuensi alami, dan termal tunak, berdasarkan galat di seluruh benda: lihat [Periksa tegangan dan defleksi](topic:simulation); atau turunkan ukuran elemen |
| Gaya dan tekanan pada bantalan dan baut, gaya jarak jauh, momen, pegas, perpindahan yang ditentukan | Gaya dan tekanan pada muka, gravitasi; muka tetap dan tanpa gesekan |
| Simulasi rakitan; material yang berbeda menurut arah (lapisan cetak, komposit) | Satu bagian, satu material isotropik |
| Beberapa thread solver untuk studi tetrahedral, perpindahan panas, dan desain generatif; thread apa pun pada halaman yang tidak terisolasi lintas-asal | Studi voxel, buckling, tegangan dari waktu ke waktu, dan aliran laminar menggunakan thread bila halaman mengizinkannya: lihat [Pengaturan PartCraft](topic:settings) |
| Aliran turbulen dengan akurasi desain (model Spalart–Allmaras hadir sebagai eksperimental: gesekan pipa 30 sampai 34 % terlalu tinggi, penempelan kembali langkah belakang 21 sampai 39 % terlalu pendek; direncanakan: sel yang lebih halus dekat dinding), perpindahan panas dalam aliran, aliran tak-tunak (akurat terhadap waktu), permukaan bebas, fluida non-Newton, bagian yang berputar | Aliran laminar, tunak, isotermal dari fluida Newton, atau model turbulen eksperimental untuk pola kualitatif: lihat [Simulasikan aliran fluida](topic:flow-simulation); panel memberi peringatan bila bilangan Reynolds melampaui laminar |
| Batas tegangan dan aturan manufaktur (overhang, arah frais) dalam desain generatif; beberapa material dalam satu bentuk | Bentuk paling kaku untuk suatu volume; periksa hasilnya di Simulasi: lihat [Tumbuhkan bentuk dari beban](topic:generative-design) |
| Hasil sebagai solid yang dapat diedit (halus, parametrik) | STL, STEP berfacet, atau bagian dengan hasilnya sebagai solid berfacet impor |
| Motor listrik: rotor yang berputar dalam stator, torsi terhadap sudut, baja yang jenuh, magnet yang kehilangan kekuatan setelah lututnya, arus eddy serta rugi besi dan tembaga; medan magnet 3D atau pada mesh lengkung | Magnetostatik 2D linear pada grid di pustaka analisis: kumparan, besi, magnet permanen pada garis recoil-nya, celah, induktansi, dan tarikan: lihat [Medan magnet 2D](topic:magnetic-fields-2d) |

## Skrip

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Bantuan saat kursor diarahkan, breakpoint, dan langkah demi langkah di editor skrip | Cari, lipat, dan lengkapi sudah ada (lihat [Tulis dan jalankan skrip](topic:craftscript)); selebihnya, gunakan editor Anda sendiri: {{ui:Simpan}} dan {{ui:Buka}} pada grup Skrip memindahkan skrip masuk dan keluar; fungsi bawaan tercantum di [Bahasa CraftScript](topic:craftscript-language) |
| Breakpoint dan langkah melalui skrip | `disp` dan `fprintf` di sepanjang jalan; {{key:Mod+Enter}} menjalankan beberapa baris yang dipilih sekaligus |
| Bidang dan plot yang ditampilkan skrip digambar di workspace Desain; skrip yang mengubah parameter benda | Ditampilkan di workspace Skrip; skrip membaca parameter dengan `param` (lihat [Tulis dan jalankan skrip](topic:craftscript)), mengubahnya pada tab {{ui:Parameter}} |
| Gambar dan tabel berdampingan dengan plot; menyunting plot (zoom, batas sumbu) sebelum menyimpannya | Berdampingan menampilkan plot; simpan plot sebagai PNG, SVG, atau CSV dan selesaikan di tempat lain |
| numpy dan paket Python lainnya; Python offline; melipat Python di editor; Pascal Script | Pustaka standar Python, CraftScript, dan Lua: lihat [Skrip dengan Python](topic:craftscript-python) |
| Mengoper fungsi Lua ke fungsi bawaan; memanggil fungsi pustaka dari Lua dengan nama yang dibangun saat skrip berjalan | Tulis nama fungsi pustaka di skrip (`cs.static_tet(…)`), atau panggil dari skrip CraftScript |

## Aplikasi

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Penyimpanan cloud, berbagi, dan riwayat versi | Belum tersedia. Simpan file ke komputer Anda dan simpan versi dengan nama |
| PartCraft sebagai aplikasi terpasang di iPad dan iPhone | Gunakan PartCraft di peramban perangkat; di Android dan desktop juga berjalan di CadCraft Studio (getcadcraft.com/download) |
| Menu konteks (klik kanan) | Bilah alat dan panel kanan |
| Bekerja sepenuhnya offline dari awal | Hanya setelah aplikasi disimpan untuk penggunaan offline: lihat [Bekerja offline](common:offline) |

Laporkan apa yang paling Anda rindukan melalui halaman dukungan situs: itu membentuk apa yang datang berikutnya.

## Engineer (generator dan medan)

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Header, port, dan fitting pada penukar panas yang dihasilkan; kurva suhu untuk kekuatan material; kerugian tee pada manifold | Generator membangun inti dan tabungnya; tambahkan fitting di Desain; gunakan angka suhu ruang material dengan faktor keamanan |
| Menambahkan generator dari direktori add-on dengan satu klik | {{ui:Buka}} di workspace Engineer menambahkan generator dari file |
| File medan yang lebih halus dari ukuran voxel generator; membaca file `.vdb` | Simpan medan yang lebih halus dari skrip; `.vdb` ditulis, tidak dibaca |
| Perhitungan bejana tekan menurut kode | Rumus dinding tipis dan dinding tebal dari buku teks, dengan faktor keamanan yang Anda pilih; bukan margin kode |
| Generator untuk aplikasi lain | Hanya PartCraft pada versi ini |
