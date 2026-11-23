---
title: Apa yang belum dibina
summary: Semua yang belum dilakukan oleh binaan PartCraft ini, daripada sapuan berpintal kepada paparan inci, lukisan dimensi dan sub-himpunan, dengan apa yang perlu dilakukan sebaliknya hari ini.
keywords: hilang, belum lagi, had, batasan, peta jalan, kernel tepat, fillet, chamfer, shell, sapuan, loft, import step, simulasi, pembuatan, sapuan berpintal, tangen hujung loft, fillet muka, persamaan, inci, dimensi lukisan, sub-himpunan, awan, tablet, telefon
from: 97b10a29
---

PartCraft ialah binaan awal. Halaman ini menyenaraikan perkara yang belum dilakukannya, supaya anda tidak mencarinya, dan apa yang perlu dilakukan sebaliknya hari ini. Tiada apa di sini mempunyai tarikh.

## Memerlukan kernel tepat

Versi ini membina setiap bahagian dengan kernel jaringan (lihat [Kernel jaringan](topic:solid-kernels)). Semua yang di bawah memerlukan kernel geometri tepat, yang belum ada dalam versi ini. Bahagian yang disimpan dengan ciri-ciri ini masih boleh dibuka: ciri itu kekal dalam sejarah, ditandai sebagai belum dibina, dan dikekalkan apabila anda menyimpan.

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| {{ui:Fillet}} dan {{ui:Chamfer}} pada tepi bulat; fillet yang jejarinya berubah sepanjang tepi; pusingan yang dicampur dengan lancar di tempat ia bertemu (kernel jaringan memotongnya dengan sudut) | Fillet dan Chamfer berfungsi pada tepi lurus antara muka rata; bulatkan sudut lain dalam lakaran sebelum anda menolak ({{ui:Fillet}} dalam lakaran, {{key:F}}) |
| {{ui:Shell}} membuka muka melengkung; dinding dengan ketebalan berbeza | Buka muka rata; tambah bahan dengan penolakan di tempat dinding mesti lebih tebal |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} pada muka melengkung; menolak sehingga muka, muka seterusnya atau bucu; penolakan bertirus | Tolak atau putar, dalam langkah jika perlu; tolak ke kedalaman yang anda ukur |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} dan corak rata | Tolak plat atau profil rusuk |
| Permukaan: menyiapkan {{ui:Form}} ke dalam bahagian, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Tidak tersedia |
| Beberapa badan: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, ciri yang mencipta badan baharu | Satu pepejal; corak dan cermin menyalin ciri |
| Lakaran, satah, paksi dan titik pada muka yang hanya kernel tepat boleh cari (muka yang dibuat oleh fillet, dinding lubang, muka pepejal yang diimport) | Lakar pada satah asas, satah rujukan dan muka rata penolakan dan putaran |
| Hasil reka bentuk generatif yang dibuka sebagai bahagian atau ditambah kepadanya (ia menjadi pepejal yang diimport) | Muat turun hasil sebagai STL atau STEP |
| Menyunting muka melengkung fail STEP yang dibuka sebagai permukaan tepat; STEP tepat bagi muka splin, sapuan dan putaran daripada fail STEP, sisi splin, benang yang dimodelkan, badan STL / OBJ / 3MF dan himpunan; STEP untuk pemodel bahagian lain | {{ui:Open}} membaca STEP sebagai segi tiga dan mengekalkan muka rata, silinder, kon, sfera dan torus fail untuk eksport ([Buka fail STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} menulis setiap muka analitik dengan tepat dan mengekalkannya sebagai faset ([Eksport](topic:export-files#for-other-cad-programs-step)); makro untuk pemodel bahagian lain masih menulis |
| Lengkok sebenar dalam pandangan lukisan | Pandangan dan pandangan keratan dilukis daripada faset |
| Isipadu, luas dan jarak yang tepat | {{ui:Measure}} memberi nombor pepejal berfasetnya, sedikit rendah pada bahagian bulat; tetapan **Lengkung** yang lebih halus mendekatkannya |

Sesetengah baris dalam jadual di bawah mencadangkan salah satu ciri ini sebagai cara mengatasi perkara lain. Cadangan itu terpakai apabila kernel tepat kembali.

## Ciri

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Fillet muka, fillet bulat penuh, fillet dengan jejari yang ditetapkan pada titik sepanjang tepi | {{ui:Fillet}} malar atau berubah secara linear; beberapa ciri fillet |
| Shell dengan ketebalan dinding yang berbeza | Satu ketebalan {{ui:Shell}}; tambah bahan dengan penolakan di tempat dinding mesti lebih tebal |
| Draf pada muka bentuk bebas (splin) | {{ui:Draft}} berfungsi pada muka rata, silinder dan kon |
| Sapuan berpintal, sapuan dinding nipis dan permukaan; tangen hujung pada ciri Loft; loft dengan satu rel panduan; laluan splin | {{ui:Sweep}} dengan orientasi tetap atau skala hujung; loft dengan dua atau lebih rel panduan: lihat [Sapuan, loft dan draf](topic:sweep-loft-draft) |
| Rusuk daripada lengkok atau splin; rusuk yang dibesarkan segi empat sama dengan lakaran (daripada pandangan atas); draf pada rusuk; beberapa rusuk daripada satu lakaran | {{ui:Rib}} daripada satu rantai garis dalam satah rusuk itu sendiri: lihat [Rusuk dan gusset](topic:rib) |
| "Sehingga" ke muka melengkung, "sehingga seterusnya" yang berhenti pada muka melengkung | Sehingga muka rata atau satah rujukan |
| Lubang kaunter-gerudi, benang inci dan paip, benang tirus, lari keluar benang dan permulaan benang yang dichamfer | Kaunterbor dengan kedalaman kecil; benang metrik ISO dan trapezoid, kosmetik atau dimodelkan: lihat [Benang pada aci dan lubang, dilukis atau dimodelkan](topic:threads) |
| Ekstrusi ciri nipis | Lukis kedua-dua dinding profil |
| Salinan corak yang dilangkau satu demi satu, corak isian | Gunakan ciri berasingan; corak sepanjang lengkung: {{ui:Path pattern}} |
| Salinan corak, cermin, fillet, chamfer, shell dan pepejal yang diimport | Salin lakaran atau ciri yang menjadi asasnya, atau corakkannya |
| Tangen tepat (G1) pada titik luar biasa bentuk; penggabungan tampalan bentuk ke dalam muka yang lebih besar | Naikkan Tahap bentuk: tampalan yang dianggarkan menjadi lebih kecil; lihat [Bentuk bebas dengan Form](topic:form-surfaces) |
| Satu bentuk yang terdiri daripada beberapa kepingan tertutup berasingan dalam satu ciri; jambatan antara bentuk | Satu kepingan tertutup bagi setiap ciri Form; sambungkan dengan {{ui:Join}} |
| Memilih badan permukaan dalam paparan (kecuali titik pangkas dan tampalan); fillet permukaan; untrim; tampalan G2; permukaan Gordon yang bertangen dengan jiran melengkung (bertangen pada satah dan muka rata sudah dibina) | Pilih mengikut nama dalam panel ciri; tebalkan dahulu, kemudian fillet pepejal |
| Senarai badan dalam sejarah; membiarkan badan tersembunyi dikecualikan daripada eksport | Namakan semula dan sembunyikan badan dalam senarai badan panel bahagian; padam atau gantung ciri yang menghasilkan badan untuk mengecualikannya |
| Skala tidak seragam yang mengekalkan silinder dan kon analitik; skala tidak seragam bagi permukaan ofset | {{ui:Scale body}} menjadikan muka melengkung B-splin tertutup (dalam 0.0000004 mm); skala seragam kekal tepat |
| Menggabungkan badan permukaan; jumlah Minkowski | {{ui:Stitch}} atau {{ui:Thicken}} dahulu, kemudian {{ui:Combine}} |
| Analisis toleransi: timbunan toleransi yang membelok sudut (gelung vektor 2D dan 3D), kepekaan yang dikira daripada geometri, Monte Carlo dengan taburan lain, toleransi saiz pada dimensi lakaran, toleransi bonus daripada keadaan bahan | {{ui:Stack-up}} dalam himpunan: satu arah, kes terburuk dan RSS, toleransi ditaip, daripada toleransi am blok tajuk atau daripada bingkai GD&T: lihat [Tindanan toleransi](topic:tolerance-stackup) |
| Penyarangan: susunan pemotongan dan lead-in, memotong tepi yang dikongsi sekali, bahagian yang mesti dikekalkan bersama; sisa gulungan, stok yang dikongsi antara projek | {{ui:Nest flat parts on sheets…}} dengan jarak, margin, pusingan dan butiran: lihat [Susun bahagian rata pada helaian](topic:nest-flat-parts); plat sisa dikekalkan dan digunakan dahulu: lihat [Simpan dan guna semula potongan sisa](topic:nest-offcuts); rancang pemotongan dalam perisian pemotong anda sendiri |
| Kepingan logam: hem, jog, flens miter dan kontur; flens pada tepi melengkung atau pada muka flens asas yang dibengkokkan; lenturan dilakar; penutup sudut; alat pembentukan; menukar pepejal kepada kepingan logam; rata flens asas yang dibengkokkan dengan potongan di dalamnya; jadual lenturan | {{ui:Base flange}} (plat atau profil yang dibengkokkan), {{ui:Edge flange}} pada tepi lurus plat dengan kelegaan lenturan, dan corak rata dengan faktor-K: lihat [Kepingan logam](topic:sheet-metal) |
| Analisis draf pada himpunan; mencari garisan perpisahan; analisis ketebalan dinding | {{ui:Draft analysis}} pada bahagian dalam Reka bentuk: lihat [Semak draf untuk acuan dan tuangan](topic:draft-analysis); buka setiap bahagian himpunan untuk menyemaknya |

## Lakaran

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Elips, lengkok tangen, konik, splin dengan darjah atau pemberat tetap (NURBS) | Splin (kubik), lengkok dan bulatan dengan hubungan Tangen |
| Titik pada splin (hubungan), hubungan kelengkungan (G2) | Letakkan titik splin sendiri di tempat ia mesti melepasi |
| Salinan ofset splin yang mengikuti perubahan kemudian; ofset rantai dengan sudut splin yang tajam | Ofset semula selepas perubahan; bulatkan sudut dahulu |
| Salinan corak yang kekal dipautkan dengan asal; corak sepanjang lengkung | Corakkan semula selepas perubahan |
| Unjuran tepi bulat bentuk bebas atau condong, geometri terunjur yang mengikuti bahagian | Unjurkan tepi bulat yang lurus dan selari, kemudian dimensikan |
| Dimensi terpacu (rujukan) | Baca saiz daripada panel atau fakta bahagian |
| Hubungan segaris | Selari dengan jarak 0 |
| Tampal ke dalam program lain (papan keratan sistem) | Eksport DXF, STEP, STL atau 3MF |
| Menaip lengkok, koordinat relatif atau kutub | Taip garisan dan bulatan; lukis lengkok dengan alat Lengkok |
| Memilih geometri tanpa penunjuk | Perlu klik atau ketik |

## Parameter dan unit

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Konfigurasi yang menukar bahan; jadual reka bentuk CSV yang mematikan ciri | Konfigurasi menetapkan parameter dan menghidupkan serta mematikan ciri: lihat [Konfigurasi dan jadual reka bentuk](topic:design-tables); `partcraft variants` membina konfigurasi tersimpan mengikut nama, termasuk ciri yang dimatikan: lihat [Buat pek varian daripada konfigurasi anda](topic:variant-pack) |
| Persamaan pada nombor panel ciri terbaharu sendiri (satah, sapuan, draf dan seumpamanya) | Tulis dalam skrip atau dengan `partcraft set` ([Skrip dan baris arahan](topic:scripts-and-cli)) |
| Bahagian dipaparkan dalam inci | Saiz dipaparkan dalam milimeter; taip `2in` dalam kotak nombor atau ungkapan dan ia menjadi 50.8 |

## Fail

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Menyunting ciri pepejal STEP yang diimport (ia tiba tanpa sejarah) | Tambah atau potong bahan dengan ciri anda sendiri |
| Membaca warna, nama, struktur himpunan dan PMI daripada STEP | Tidak tersedia |
| Eksport glTF, OBJ, IGES, Parasolid; DWG bagi bahagian 3D (hanya pek varian menulis DWG: helaian lukisan) | STL atau 3MF untuk jaringan; STEP untuk pepejal; DXF untuk 2D |
| Membuka IGES, DXF atau fail asal program lain (fail `.3dm` dibuka sebagai satu badan: [Buka model .3dm sebagai badan pepejal](topic:open-3dm-files)) | Minta STEP, atau jaringan STL, OBJ atau 3MF yang tertutup: [Buka STL, OBJ atau 3MF](topic:open-meshes) |
| Struktur himpunan (pokok dengan nama bahagian) dalam STEP yang dieksport | Himpunan STEP ialah satu sebatian pepejal yang diletakkan |
| Menyimpan ke folder pilihan anda tanpa muat turun pelayar | Hidupkan "tanya di mana hendak simpan" dalam tetapan muat turun pelayar |

## Lukisan

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Dimensi melebihi tiga saiz keseluruhan (saiz lubang, kedudukan, toleransi pada saiz) | Tandakan PDF, atau eksport DXF dan dimensikan dalam program CAD 2D |
| Lebih daripada satu keratan atau satu perincian; pandangan sejajar, pecah-keluar dan tambahan | Satu keratan dan satu perincian bagi setiap lukisan |
| Teks bebas, nota dan jadual pada helaian (selain blok tajuk dan semakan) | Nota kemasan, atau teks yang ditambah pada PDF |
| Unjuran sudut pertama, pandangan yang bergerak, helaian potret | Sudut ketiga, susun atur automatik, helaian landskap A4–A0 dan ANSI A–E |
| Paparan keratan langsung: beberapa satah atau kotak keratan serentak, garis luar di sekeliling potongan, menyimpan keratan dalam fail | Satu satah pada satu masa daripada {{ui:Views}} › {{ui:Section view}}; lihat [Lihat ke dalam dengan paparan keratan](topic:section-view) |
| Lukisan himpunan dengan lebih banyak pandangan, dimensi atau belon yang boleh anda alihkan | Satu pandangan isometrik (atau diletupkan) dengan belon automatik dan senarai bahagian |
| Salin dan tampal simbol GD&T dan kemasan | Letakkan setiap satu dengan Datum, Frame atau Finish |
| Manual: fail STEP dalam {{ui:From another file…}} Illustrate, model yang dihantar terus dari ModelCraft atau BimCraft, gambar pada kualiti penjejak laluan, 3D interaktif dalam PDF | Buka STEP dalam Reka bentuk dan mulakan manual {{ui:From the open part}}; simpan model sebagai glTF (.glb); gambar PNG pandangan 3D; fail 3D interaktif: lihat [Mulakan manual dalam Illustrate](topic:illustrate) |

## Himpunan

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Roda gigi, rak, kam dan skru; sendi bola terhad kepada kon; sendi pada muka melengkung atau antara titik | Sendi tegar, berputar, gelangsar, silinder, satah, bola dan pin-dalam-slot pada muka rata, setiap nilai dengan had tersendirinya: lihat [Bina himpunan](topic:build-assembly) |
| Langkah letupan yang memusingkan bahagian, dan menyeret bahagian yang diletakkan oleh sendi | Langkah letupan lurus; alih sendi untuk menggerakkan bahagian dengan tangan |
| Sub-himpunan | Satu peringkat bahagian sahaja |
| Roda gigi, kam, sentuhan | Tidak tersedia |

## Pembuatan

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Pembersihan adaptif 3D dan pengosongan berofset dalam 3D; kemasan garis air, pensel, jejari dan spiral; laluan adaptif yang ditulis sebagai lengkok | Pengasaran 3D dalam baris lurus dan pemesinan baki: lihat [Kasar 3D dan pemesinan baki](topic:rough-3d); kemasan {{ui:Parallel}} dan {{ui:Scallop}}: lihat [Kemasan 3D](topic:finish-3d); muka, poket, adaptif 2D, kontur, gerudi dan chamfer 2.5-paksi: lihat [Buat laluan alat dan G-code](topic:manufacture) |
| Pemotongan swarf, laluan pengosongan aliran dan pelbagai paksi, kod satah kerja condong (G68.2), semakan perlanggaran pemegang dan mesin | Alat condong untuk mana-mana operasi, kemasan 5-paksi dengan mata pengisar hujung bulat dan kemasan putaran paksi-4: lihat [Pemesinan 4- dan 5-paksi](topic:multi-axis) |
| Penggerudian dan benang dalam pada larik, kitaran G71/G76, lengkok dalam laluan pemesinan, alat hidup, sub-gelendong | Pemesinan luar: muka, kasar, kemas, alur, potong bahagian, benang, gerudi pada pusat: lihat [Pemesinan pada larik](topic:turning) |
| Probing sudut atau bucu, penetap alat, mengukur saiz berbanding toleransi | Probing muka, sisi, lubang atau bos untuk menetapkan ofset kerja: lihat [Probing](topic:probing) |
| Semakan perlanggaran pemegang dan batang | Perhatikan amaran panjang alur dan semak dalam simulator kawalan anda |
| Hayat alat dan kitaran subprogram dalam pasca; memuatkan fail pasca program lain | Tulis atau ubah pasca dalam format PartCraft sendiri: lihat [Pasca-proses yang boleh disunting](topic:post-processors) |
| G-code inci (G20) | Milimeter (G21) sahaja |

## Simulasi dan reka bentuk generatif

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Kajian tidak linear: alah, pesongan besar, sentuhan antara bahagian, lesu | Statik linear dan frekuensi semula jadi: lihat [Semak tegasan dan pesongan](topic:simulation); pastikan faktor keselamatan jauh melebihi 1 |
| Lengkukan tidak linear (ketidaksempurnaan, pasca-lengkukan, lantunan) | Faktor beban lengkukan linear dengan margin yang besar: lihat [Haba, tegasan haba dan lengkukan](topic:thermal-and-buckling) |
| Sinaran antara muka (faktor pandangan), rintangan sentuhan, bahan yang bergantung pada suhu, inersia dalam tegasan haba (gelombang kejutan haba) | Sinaran ke persekitaran, tegasan haba keadaan mantap atau kuasi-statik dari semasa ke semasa, sifat malar: lihat [Haba, tegasan haba dan lengkukan](topic:thermal-and-buckling) |
| Penghalusan automatik untuk haba fana dan kajian dengan beban haba; menjadikan jaringan lebih kasar di tempat ralatnya kecil; sasaran pada kuantiti tempatan (tegasan puncak pada satu titik) | **Halusi automatik** untuk kajian statik, lengkukan, frekuensi semula jadi dan haba keadaan mantap, pada ralat keseluruhan bahagian: lihat [Semak tegasan dan pesongan](topic:simulation); jika tidak, kurangkan saiz elemen |
| Beban galas dan bolt, daya jauh, momen, spring, sesaran ditetapkan | Daya dan tekanan pada muka, graviti; muka tetap dan tanpa geseran |
| Simulasi himpunan; bahan yang berbeza mengikut arah (lapisan cetakan, komposit) | Satu bahagian, satu bahan isotropik |
| Beberapa benang penyelesai untuk kajian tetraedral, pemindahan haba dan reka bentuk generatif; sebarang benang pada halaman yang tidak diasingkan merentas asal | Kajian voxel, lengkukan, tegasan dari semasa ke semasa dan aliran laminar menggunakan benang di mana halaman membenarkannya: lihat [Tetapan PartCraft](topic:settings) |
| Aliran bergelora dengan ketepatan reka bentuk (model Spalart–Allmaras dimasukkan sebagai eksperimen: geseran paip 30 hingga 34 % tinggi, pemasangan semula langkah belakang 21 hingga 39 % pendek; dirancang: sel yang lebih halus berhampiran dinding), haba dalam aliran, aliran tak mantap (masa tepat), permukaan bebas, bendalir bukan Newton, bahagian berputar | Aliran laminar, keadaan mantap, isoterma bagi bendalir Newton, atau model bergelora eksperimen untuk corak kualitatif: lihat [Simulasikan aliran bendalir](topic:flow-simulation); panel memberi amaran apabila nombor Reynolds melepasi had laminar |
| Had tegasan dan peraturan pembuatan (overhang, arah pengisaran) dalam reka bentuk generatif; beberapa bahan dalam satu bentuk | Bentuk paling tegar untuk isipadu; semak hasilnya dalam Simulasi: lihat [Tumbuhkan bentuk daripada beban](topic:generative-design) |
| Hasil sebagai pepejal yang boleh disunting (licin, berparameter) | STL, STEP berfaset, atau bahagian dengan hasil sebagai pepejal berfaset yang diimport |
| Reka bentuk mesin elektrik: pemutar yang berputar dalam stator, tork berbanding sudut, keluli tepu, magnet yang kehilangan kekuatan melepasi lututnya, arus pusar dan kehilangan besi serta kuprum; medan magnet dalam 3-D atau pada jaringan melengkung | Magnetostatik 2-D linear pada grid dalam pustaka analisis: gegelung, besi, magnet kekal pada garis pemulihannya, jurang, kearuhan dan tarikan: lihat [Medan magnet dalam 2-D](topic:magnetic-fields-2d) |

## Skrip

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Bantuan hover, titik henti dan langkah dalam penyunting skrip | Cari, lipat dan lengkapkan sudah ada (lihat [Tulis dan jalankan skrip](topic:craftscript)); selebihnya, gunakan penyunting anda sendiri: {{ui:Save}} dan {{ui:Open}} dalam kumpulan Skrip memindahkan skrip masuk dan keluar; fungsi terbina disenaraikan dalam [Bahasa CraftScript](topic:craftscript-language) |
| Titik henti dan langkah melalui skrip | `disp` dan `fprintf` sepanjang jalan; {{key:Mod+Enter}} menjalankan beberapa baris terpilih pada satu masa |
| Medan dan plot yang ditunjukkan skrip dilukis dalam ruang kerja Reka bentuk; skrip yang menukar parameter bahagian | Ia ditunjukkan dalam ruang kerja Skrip; skrip membaca parameter dengan `param` (lihat [Tulis dan jalankan skrip](topic:craftscript)), dan menukarnya pada tab {{ui:Parameters}} |
| Gambar dan jadual bersebelahan dengan plot; menyunting plot (zum, had paksi) sebelum menyimpannya | Bersebelahan menunjukkan plot; simpan plot sebagai PNG, SVG atau CSV dan siapkan di tempat lain |
| numpy dan pakej Python lain; Python luar talian; melipat Python dalam penyunting; Pascal Script | Pustaka standard Python, CraftScript dan Lua: lihat [Skrip dalam Python](topic:craftscript-python) |
| Menghantar fungsi Lua kepada fungsi terbina; memanggil fungsi pustaka daripada Lua dengan nama yang dibina semasa skrip berjalan | Tulis nama fungsi pustaka dalam skrip (`cs.static_tet(…)`), atau panggil daripada skrip CraftScript |

## Aplikasi

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Simpan awan, perkongsian dan sejarah versi | Belum tersedia. Simpan fail ke komputer anda dan simpan versi mengikut nama |
| PartCraft sebagai aplikasi terpasang pada iPad dan iPhone | Gunakan PartCraft dalam pelayar peranti; pada Android dan desktop ia juga berjalan dalam CadCraft Studio (getcadcraft.com/download) |
| Menu konteks (klik kanan) | Bar alat dan panel kanan |
| Berfungsi sepenuhnya luar talian dari permulaan baharu | Hanya apabila aplikasi telah disimpan untuk kegunaan luar talian: lihat [Bekerja luar talian](common:offline) |

Laporkan apa yang paling anda rindui melalui halaman sokongan laman web: ia membentuk apa yang seterusnya.

## Jurutera (penjana dan medan)

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Pengepala, port dan kelengkapan pada penukar haba yang dijana; lengkung suhu untuk kekuatan bahan; kehilangan tee dalam manifold | Penjana membina teras dan tiub; tambah kelengkapan dalam Reka bentuk; gunakan angka suhu bilik bahan dengan faktor keselamatan |
| Menambah penjana daripada direktori add-on dengan satu klik | {{ui:Open}} dalam ruang kerja Jurutera menambah penjana daripada fail |
| Fail medan yang lebih halus daripada saiz voxel penjana sendiri; membaca fail `.vdb` | Simpan medan yang lebih halus daripada skrip; `.vdb` ditulis, tidak dibaca |
| Pengiraan kod bekas tekanan | Formula dinding nipis dan dinding tebal daripada buku teks, dengan faktor keselamatan yang anda pilih; bukan margin kod |
| Penjana untuk aplikasi lain | PartCraft sahaja dalam versi ini |
