---
title: Yang belum dibuat
summary: Semua yang belum dilakukan build PartCraft ini, dari sapuan puntir hingga tampilan inci, dimensi gambar, dan sub-assembly, beserta apa yang bisa dilakukan sebagai gantinya saat ini.
keywords: belum, belum dibuat, batasan, limitasi, peta jalan, kernel tepat, fillet, chamfer, shell, sweep, loft, impor STEP, simulasi, manufacture, sweep puntir, singgung ujung loft, fillet muka, persamaan, inci, dimensi gambar, sub-assembly, cloud, tablet, ponsel
from: 9b868162
---

PartCraft adalah build awal. Halaman ini mencantumkan apa yang belum dilakukannya, agar Anda tidak perlu mencarinya, dan apa yang bisa dilakukan sebagai gantinya saat ini. Belum ada tanggal untuk hal-hal ini.

## Memerlukan kernel tepat

Versi ini membangun setiap part dengan kernel mesh (lihat [Kernel mesh](topic:solid-kernels)). Semua yang di bawah ini memerlukan kernel geometri tepat, yang belum dimiliki versi ini. Part yang disimpan dengan fitur-fitur ini tetap bisa dibuka: fiturnya tetap ada di riwayat, ditandai sebagai belum dibuat, dan dipertahankan saat Anda menyimpan.

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| {{ui:Fillet}} dan {{ui:Chamfer}} pada tepi bulat; fillet yang radiusnya berubah sepanjang tepi; pembulatan yang menyatu halus di tempat mereka bertemu (kernel mesh memotongnya miring) | Fillet dan Chamfer bekerja pada tepi lurus di antara muka datar; bulatkan sudut lain pada sketsa sebelum Anda ekstrusi ({{ui:Fillet}} dalam sketsa, {{key:F}}) |
| {{ui:Shell}} yang membuka muka melengkung; dinding dengan ketebalan berbeda | Buka muka datar; tambahkan material dengan ekstrusi di tempat dinding harus lebih tebal |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} pada muka melengkung; ekstrusi sampai ke sebuah muka, muka berikutnya, atau verteks; ekstrusi meruncing | Ekstrusi atau revolusi, dalam beberapa langkah bila perlu; ekstrusi ke kedalaman yang Anda ukur |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} dan pola bentangan | Ekstrusi pelat atau profil rib |
| Permukaan: menyelesaikan {{ui:Form}} menjadi bagian part, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Tidak tersedia |
| Beberapa badan: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, fitur yang membuat badan baru | Satu solid; pola dan cermin menyalin fitur |
| Sketsa, bidang, sumbu, dan titik pada muka yang hanya bisa ditemukan oleh kernel tepat (muka hasil fillet, dinding lubang, muka dari solid yang diimpor) | Buat sketsa pada bidang dasar, bidang referensi, dan muka datar ekstrusi serta revolusi |
| Hasil desain generatif yang dibuka sebagai part atau ditambahkan ke part (menjadi solid yang diimpor) | Unduh hasilnya sebagai STL atau STEP |
| Menyunting muka melengkung dari file STEP yang dibuka sebagai permukaan eksak; STEP eksak dari muka spline, sapuan, dan revolusi dari file STEP, sisi spline, ulir yang dimodelkan, badan dan assembly STL / OBJ / 3MF; STEP untuk pemodel part lain | {{ui:Open}} membaca STEP sebagai segitiga dan mempertahankan muka datar, silinder, kerucut, bola, dan torus dari file untuk ekspor ([Buka file STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} menulis setiap muka analitik secara eksak dan mempertahankannya sebagai facet ([Ekspor](topic:export-files#for-other-cad-programs-step)); makro untuk pemodel part lain tetap menulis |
| Busur sebenarnya pada tampilan gambar | Tampilan dan tampilan potongan digambar dari facet |
| Volume, luas, dan jarak yang tepat | {{ui:Measure}} memberikan angka dari solid berfacet, sedikit rendah pada part bulat; pengaturan **Kurva** yang lebih halus membuatnya lebih dekat |

Beberapa baris dalam tabel di bawah menyarankan salah satu fitur ini sebagai cara lain untuk sesuatu. Saran itu berlaku setelah kernel tepat kembali.

## Fitur

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Fillet muka, fillet bulat penuh, fillet dengan radius yang diatur pada titik-titik sepanjang tepi | {{ui:Fillet}} konstan atau variabel linear; beberapa fitur fillet |
| Shell dengan ketebalan dinding yang berbeda | Satu ketebalan {{ui:Shell}}; tambahkan material dengan ekstrusi di tempat dinding harus lebih tebal |
| Draft pada muka freeform (spline) | {{ui:Draft}} bekerja pada muka datar, silinder, dan kerucut |
| Sapuan puntir, sapuan dinding tipis dan permukaan; singgung ujung pada fitur Loft; loft dengan satu rel pemandu; jalur spline | {{ui:Sweep}} dengan orientasi tetap atau skala ujung; loft dengan dua rel pemandu atau lebih: lihat [Sweep, loft dan draft](topic:sweep-loft-draft) |
| Rib dari busur atau spline; rib yang tumbuh persegi terhadap sketsa (dari tampak atas); draft pada rib; beberapa rib dari satu sketsa | {{ui:Rib}} dari satu rangkaian garis di bidang rib itu sendiri: lihat [Rib dan gusset](topic:rib) |
| "Sampai" sebuah permukaan melengkung, "sampai berikutnya" yang berhenti pada muka melengkung | Sampai muka datar atau bidang referensi |
| Lubang bor-balik, ulir inci dan pipa, ulir meruncing, akhir ulir, dan awal ulir bersudut | Counterbore dengan kedalaman kecil; ulir metrik ISO dan trapesium, kosmetik atau dimodelkan: lihat [Ulir pada poros dan lubang, digambar atau dimodelkan](topic:threads) |
| Ekstrusi fitur tipis | Gambar kedua dinding profil |
| Salinan pola yang dilewati satu per satu, pola isi | Gunakan fitur terpisah; pola sepanjang kurva: {{ui:Path pattern}} |
| Menyalin pola, cermin, fillet, chamfer, shell, dan solid yang diimpor | Salin sketsa atau fitur tempat mereka dibangun, atau polakan |
| Singgung eksak (G1) pada titik istimewa sebuah form; menggabungkan patch form menjadi muka yang lebih besar | Naikkan Level form: patch yang didekati menjadi lebih kecil; lihat [Bentuk freeform dengan Form](topic:form-surfaces) |
| Form dari beberapa potongan tertutup terpisah dalam satu fitur; jembatan antar form | Satu potongan tertutup per fitur Form; gabungkan dengan Join |
| Memilih badan permukaan di tampilan (kecuali titik trim dan patch); fillet permukaan; untrim; patch G2; permukaan Gordon yang bersinggungan dengan tetangga melengkung (bersinggungan dengan bidang dan muka datar sudah dibangun) | Pilih dengan nama di panel fitur; tebalkan dulu, lalu fillet solid |
| Daftar badan dalam riwayat; mengecualikan badan tersembunyi dari ekspor | Ganti nama dan sembunyikan badan di daftar badan panel part; hapus atau tekan fitur yang membuat badan untuk mengecualikannya |
| Skala non-seragam yang menjaga silinder dan kerucut tetap analitik; skala non-seragam pada permukaan offset | {{ui:Scale body}} membuat muka melengkung menjadi B-spline tertutup (dalam 0.0000004 mm); skala seragam tetap eksak |
| Menggabungkan badan permukaan; jumlah Minkowski | {{ui:Stitch}} atau {{ui:Thicken}} dulu, lalu {{ui:Combine}} |
| Analisis toleransi: stack-up yang berbelok di sudut (loop vektor 2D dan 3D), sensitivitas yang dihitung dari geometri, Monte Carlo dengan distribusi lain, toleransi ukuran pada dimensi sketsa, toleransi bonus dari kondisi material | {{ui:Stack-up}} dalam assembly: satu arah, kasus terburuk dan RSS, toleransi diketik, dari toleransi umum pada kepala gambar atau dari bingkai GD&T: lihat [Stack-up toleransi](topic:tolerance-stackup) |
| Nesting: urutan potong dan lead-in, pemotongan tepi bersama sekali saja, part yang harus tetap bersama; sisa potongan dari gulungan, stok yang dipakai bersama antar proyek | {{ui:Nest flat parts on sheets…}} dengan jarak, margin, putaran, dan serat: lihat [Nesting part datar pada lembaran](topic:nest-flat-parts); pelat sisa disimpan dan dipakai lebih dulu: lihat [Simpan dan pakai ulang sisa potongan](topic:nest-offcuts); rencanakan pemotongan di perangkat lunak mesin potong Anda |
| Sheet metal: lipatan (hem), jog, flens miter dan kontur; flens pada tepi melengkung atau pada muka flens dasar yang sudah ditekuk; tekukan yang disketsa; penutup sudut; alat pembentuk; mengubah solid menjadi sheet metal; bentangan flens dasar yang sudah ditekuk dengan potongan di dalamnya; tabel tekukan | {{ui:Base flange}} (pelat atau profil yang ditekuk), {{ui:Edge flange}} pada tepi lurus pelat dengan bend relief, dan pola bentangan dengan faktor-K: lihat [Sheet metal](topic:sheet-metal) |
| Analisis draft pada assembly; mencari garis pisah; analisis ketebalan dinding | {{ui:Draft analysis}} pada part di Design: lihat [Periksa draft untuk cetakan dan coran](topic:draft-analysis); buka setiap part dari assembly untuk memeriksanya |

## Sketsa

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Elips, busur singgung, konik, spline dengan derajat atau bobot tetap (NURBS) | Spline (kubik), busur dan lingkaran dengan relasi Singgung |
| Titik pada spline (sebuah relasi), relasi kelengkungan (G2) | Letakkan titik spline itu sendiri di tempat ia harus melewati |
| Salinan offset spline yang mengikuti perubahan berikutnya; offset rantai dengan sudut spline yang tajam | Offset lagi setelah perubahan; bulatkan sudut dulu |
| Salinan pola yang tetap terhubung ke aslinya; pola sepanjang kurva | Polakan lagi setelah perubahan |
| Memproyeksikan tepi bebas atau lingkaran yang miring, geometri terproyeksi yang mengikuti part | Proyeksikan tepi lingkaran lurus dan sejajar, lalu beri dimensi |
| Dimensi tergerak (referensi) | Baca ukuran dari panel atau fakta part |
| Relasi collinear | Sejajar dengan jarak 0 |
| Menempel ke program lain (clipboard sistem) | Ekspor DXF, STEP, STL, atau 3MF |
| Mengetik busur, koordinat relatif atau polar | Ketik garis dan lingkaran; gambar busur dengan alat Busur |
| Memilih geometri tanpa penunjuk | Perlu klik atau ketuk |

## Parameter dan satuan

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Konfigurasi yang mengubah material; tabel desain CSV yang mematikan fitur | Konfigurasi mengatur parameter dan menyalakan atau mematikan fitur: lihat [Konfigurasi dan tabel desain](topic:design-tables); `partcraft variants` membangun konfigurasi tersimpan berdasarkan nama, termasuk fitur yang dimatikan: lihat [Buat paket varian dari konfigurasi Anda](topic:variant-pack) |
| Persamaan pada angka di panel fitur terbaru sendiri (bidang, sapuan, draft, dan sejenisnya) | Tulis di skrip atau dengan `partcraft set` ([Skrip dan baris perintah](topic:scripts-and-cli)) |
| Part ditampilkan dalam inci | Ukuran ditampilkan dalam milimeter; ketik `2in` pada kotak angka atau ekspresi dan itu menjadi 50.8 |

## File

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Menyunting fitur milik solid STEP yang diimpor (datang tanpa riwayat) | Tambah atau potong material dengan fitur Anda sendiri |
| Membaca warna, nama, struktur assembly, dan PMI dari STEP | Tidak tersedia |
| Ekspor glTF, OBJ, IGES, Parasolid; DWG dari part 3D (hanya paket varian yang menulis DWG: lembar gambar) | STL atau 3MF untuk mesh; STEP untuk solid; DXF untuk 2D |
| Membuka IGES, DXF, atau file milik program lain (file `.3dm` terbuka sebagai satu badan: [Buka model .3dm sebagai badan solid](topic:open-3dm-files)) | Minta STEP, atau mesh STL, OBJ, atau 3MF tertutup: [Buka STL, OBJ, atau 3MF](topic:open-meshes) |
| Struktur assembly (pohon dengan nama part) dalam STEP yang diekspor | STEP assembly adalah satu compound dari solid yang ditempatkan |
| Menyimpan ke folder pilihan Anda tanpa unduhan peramban | Aktifkan "ask where to save" di pengaturan unduhan peramban |

## Gambar

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Dimensi di luar tiga ukuran keseluruhan (ukuran lubang, posisi, toleransi pada ukuran) | Beri tanda pada PDF, atau ekspor DXF dan beri dimensi di program CAD 2D |
| Lebih dari satu potongan atau detail; tampilan sejajar, patah, dan bantu | Satu potongan dan satu detail per gambar |
| Teks bebas, catatan, dan tabel di lembar (selain blok judul dan revisi) | Catatan finish, atau teks yang ditambahkan pada PDF |
| Proyeksi sudut pertama, tampilan yang bergerak, lembar potret | Sudut ketiga, tata letak otomatis, lembar lanskap A4–A0 dan ANSI A–E |
| Tampilan potongan langsung: beberapa bidang atau kotak potong sekaligus, garis tepi di sekeliling potongan, menyimpan potongan dalam file | Satu bidang setiap kali dari {{ui:Views}} › {{ui:Section view}}; lihat [Melihat ke dalam dengan tampilan potongan](topic:section-view) |
| Gambar assembly dengan lebih banyak tampilan, dimensi, atau balon yang bisa Anda pindahkan | Satu tampilan isometrik (atau terurai) dengan balon otomatis dan daftar part |
| Salin dan tempel simbol GD&T dan finish | Pasang masing-masing dengan Datum, Frame, atau Finish |
| Manual: file STEP pada {{ui:From another file…}} Illustrate, model yang langsung diserahkan dari ModelCraft atau BimCraft, gambar dengan kualitas path tracer, 3D interaktif di dalam PDF | Buka STEP di Design dan mulai manual dari {{ui:From the open part}}; simpan model sebagai glTF (.glb); gambar PNG dari tampilan 3D; file 3D interaktif: lihat [Mulai manual di Illustrate](topic:illustrate) |

## Assembly

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Sambungan gear, rack, cam, dan sekrup; sambungan bola yang dibatasi kerucut; sambungan pada muka melengkung atau antar titik | Sambungan kaku, revolusi, geser, silinder, planar, bola, dan pin-in-slot pada muka datar, masing-masing nilai dengan batasnya sendiri: lihat [Membangun assembly](topic:build-assembly) |
| Langkah pembongkaran yang memutar part, dan menyeret part yang ditempatkan sambungan | Langkah pembongkaran lurus; hapus sambungan untuk memindahkan part dengan tangan |
| Sub-assembly | Hanya satu tingkat part |
| Gear, cam, kontak | Tidak tersedia |

## Manufacture

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Roughing 3D pada muka melengkung, pembersihan adaptif 3D, rest machining; finishing waterline, pencil, radial, dan spiral; pass adaptif yang ditulis sebagai busur | Muka 2.5-sumbu, kantong, adaptif 2D, kontur, bor, dan chamfer: lihat [Buat jalur pahat dan G-code](topic:manufacture); finishing Parallel dan Scallop untuk seluruh model: lihat [Finishing 3D](topic:finish-3d) |
| Jalur pahat 4 dan 5 sumbu, bubut, probing | Atur satu sisi setiap kali dengan sumbu pahat di tab Setup |
| Pemeriksaan tabrakan holder dan shank | Perhatikan peringatan panjang flute dan periksa di simulator kontrol Anda |
| Probing, siklus umur pahat dan subprogram, kode sumbu-4 dan sumbu-5 serta bubut dalam post; memuat file post milik program lain | Tulis atau ubah post dalam format PartCraft sendiri: lihat [Post processor yang bisa Anda sunting](topic:post-processors) |
| G-code inci (G20) | Milimeter (G21) saja |

## Simulasi dan desain generatif

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Studi nonlinear: meluluh, defleksi besar, kontak antar part, kelelahan | Statis linear dan frekuensi alami: lihat [Periksa tegangan dan defleksi](topic:simulation); jaga faktor keamanan jauh di atas 1 |
| Tekuk nonlinear (ketidaksempurnaan, pasca-tekuk, snap-through) | Faktor beban tekuk linear dengan margin besar: lihat [Panas, tegangan termal, dan tekuk](topic:thermal-and-buckling) |
| Radiasi antar muka (faktor pandang), resistansi kontak, material yang bergantung suhu, inersia pada tegangan termal (gelombang kejut termal) | Radiasi ke lingkungan, tegangan termal tunak atau kuasi-statis dari waktu ke waktu, sifat konstan: lihat [Panas, tegangan termal, dan tekuk](topic:thermal-and-buckling) |
| Perbaikan otomatis untuk panas transien dan studi dengan beban termal; membuat mesh lebih kasar di tempat galatnya kecil; target pada kuantitas lokal (tegangan puncak di satu titik) | **Perbaiki otomatis** untuk studi statis, tekuk, frekuensi alami, dan termal tunak, pada galat di seluruh part: lihat [Periksa tegangan dan defleksi](topic:simulation); selain itu perkecil ukuran elemen |
| Beban bantalan dan baut, gaya jauh, momen, pegas, perpindahan yang ditentukan | Gaya dan tekanan pada muka, gravitasi; muka tetap dan tanpa gesekan |
| Simulasi assembly; material yang berbeda menurut arah (lapisan cetak, komposit) | Satu part, satu material isotropik |
| Beberapa thread solver untuk studi tetrahedral, perpindahan panas dan desain generatif; thread apa pun pada halaman yang tidak terisolasi lintas-asal | Studi voxel, tekuk, tegangan dari waktu ke waktu, dan aliran laminar menggunakan thread bila halaman mengizinkan: lihat [Pengaturan PartCraft](topic:settings) |
| Aliran turbulen dengan akurasi desain (model Spalart–Allmaras masuk sebagai eksperimental: gesekan pipa 30 hingga 34 % lebih tinggi, reattachment backward-step 21 hingga 39 % lebih pendek; direncanakan: sel lebih halus di dekat dinding); panas dalam aliran, aliran tak tunak (time-accurate), permukaan bebas, fluida non-Newton, bagian yang berputar | Aliran laminar, tunak, isotermal dari fluida Newton, atau model turbulen eksperimental untuk pola kualitatif: lihat [Simulasi aliran fluida](topic:flow-simulation); panel memberi peringatan ketika bilangan Reynolds melewati laminar |
| Batas tegangan dan aturan manufaktur (overhang, arah frais) dalam desain generatif; beberapa material dalam satu bentuk | Bentuk paling kaku untuk satu volume; periksa hasilnya di Simulation: lihat [Tumbuhkan bentuk dari beban](topic:generative-design) |
| Hasil sebagai solid yang bisa disunting (halus, parametrik) | STL, STEP berfacet, atau part dengan hasil sebagai solid berfacet yang diimpor |
| Desain mesin listrik: rotor berputar di dalam stator, torsi terhadap sudut, baja jenuh, magnet yang kehilangan kekuatan setelah lututnya, arus eddy dan rugi besi serta tembaga; medan magnet 3-D atau pada mesh melengkung | Magnetostatik 2-D linear pada grid di pustaka analisis: kumparan, besi, magnet permanen pada garis recoil-nya, celah, induktansi dan tarikan: lihat [Medan magnet 2-D](topic:magnetic-fields-2d) |

## Skrip

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Bantuan melayang, breakpoint dan langkah dalam editor skrip | Temukan, lipat, dan lengkapi sudah tersedia (lihat [Menulis dan menjalankan skrip](topic:craftscript)); selebihnya, gunakan editor Anda sendiri: {{ui:Save}} dan {{ui:Open}} di grup Script memindahkan skrip masuk dan keluar; fungsi bawaan tercantum di [Bahasa CraftScript](topic:craftscript-language) |
| Breakpoint dan melangkah melalui skrip | `disp` dan `fprintf` di sepanjang jalan; {{key:Mod+Enter}} menjalankan beberapa baris yang dipilih sekaligus |
| Bidang dan plot yang ditampilkan skrip digambar di workspace Design; skrip yang mengubah parameter part | Ditampilkan di workspace Script; skrip membaca parameter dengan `param` (lihat [Menulis dan menjalankan skrip](topic:craftscript)), mengubahnya di tab {{ui:Parameters}} |
| Gambar dan tabel berdampingan dengan plot; menyunting plot (zoom, batas sumbu) sebelum menyimpannya | Berdampingan menampilkan plot; simpan plot sebagai PNG, SVG, atau CSV dan selesaikan di tempat lain |
| numpy dan paket Python lainnya; Python offline; melipat Python di editor; Pascal Script | Pustaka standar Python, CraftScript, dan Lua: lihat [Skrip dengan Python](topic:craftscript-python) |
| Meneruskan fungsi Lua ke fungsi bawaan; memanggil fungsi pustaka dari Lua dengan nama yang dibangun saat skrip berjalan | Tulis nama fungsi pustaka di skrip (`cs.static_tet(…)`), atau panggil dari skrip CraftScript |

## Aplikasi

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Penyimpanan cloud, berbagi, dan riwayat versi | Belum tersedia. Simpan file ke komputer Anda dan simpan versi dengan nama |
| PartCraft sebagai aplikasi terpasang di iPad dan iPhone | Gunakan PartCraft di peramban perangkat; di Android dan desktop juga berjalan di CadCraft Studio (getcadcraft.com/download) |
| Menu konteks (klik kanan) | Bilah alat dan panel kanan |
| Bekerja sepenuhnya offline dari awal | Hanya jika aplikasi sudah disimpan untuk penggunaan offline: lihat [Bekerja offline](common:offline) |

Laporkan apa yang paling Anda butuhkan melalui halaman dukungan situs: itu menentukan apa yang datang berikutnya.

## Engineer (generator dan medan)

| Belum dibuat | Sebagai gantinya, saat ini |
|---|---|
| Header, port, dan fitting pada penukar panas yang dihasilkan; kurva suhu untuk kekuatan material; kerugian tee pada manifold | Generator membangun inti dan tabung; tambahkan fitting di Design; gunakan angka suhu ruang material dengan faktor keamanan |
| Menambah generator dari direktori add-on dengan satu klik | {{ui:Open}} di workspace Engineer menambahkan generator dari file |
| File medan yang lebih halus dari ukuran voxel generator; membaca file `.vdb` | Simpan medan yang lebih halus dari skrip; `.vdb` hanya ditulis, tidak dibaca |
| Perhitungan kode bejana tekan | Rumus dinding tipis dan dinding tebal dari buku teks, dengan faktor keamanan yang Anda pilih; bukan margin kode |
| Generator untuk aplikasi lain | Hanya PartCraft pada versi ini |
