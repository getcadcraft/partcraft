---
title: Apa yang belum dibina
summary: Segala yang belum dilakukan oleh binaan PartCraft ini, daripada sapuan berpilin hingga paparan inci, dimensi lukisan dan sub-himpunan, dengan apa yang perlu dilakukan sebaliknya hari ini.
keywords: hilang, belum lagi, had, batasan, peta jalan, kernel tepat, fillet, chamfer, shell, sweep, loft, import STEP, simulasi, pembuatan, sapuan berpilin, kesinambungan tangen loft, fillet muka, persamaan, inci, dimensi lukisan, sub-himpunan, awan, tablet, telefon
from: 9b868162
---

PartCraft ialah binaan awal. Halaman ini menyenaraikan perkara yang belum dilakukannya, supaya anda tidak perlu mencarinya, dan apa yang perlu dilakukan sebaliknya hari ini. Tiada apa di sini yang mempunyai tarikh.

## Memerlukan kernel tepat

Versi ini membina setiap bahagian dengan kernel jejaring (lihat [Kernel jejaring](topic:solid-kernels)). Segala yang di bawah memerlukan kernel geometri tepat, yang versi ini belum ada. Bahagian yang disimpan dengan ciri-ciri ini tetap boleh dibuka: ciri kekal dalam sejarah, ditandakan sebagai belum dibina, dan dikekalkan apabila anda menyimpan.

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| {{ui:Fillet}} dan {{ui:Chamfer}} pada tepi bulat; fillet yang jejarinya berubah sepanjang tepi; pusingan yang dicantumkan secara licin di tempat ia bertemu (kernel jejaring memotongnya secara mitre) | Fillet dan Chamfer berfungsi pada tepi lurus antara muka rata; bulatkan bucu lain dalam lakaran sebelum anda ekstrud ({{ui:Fillet}} dalam lakaran, {{key:F}}) |
| {{ui:Shell}} yang membuka muka melengkung; dinding dengan ketebalan berbeza | Buka muka rata; tambah bahan dengan ekstrud di tempat dinding mesti lebih tebal |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Cerun tarik}} pada muka melengkung; ekstrud sehingga muka, muka seterusnya atau bucu; ekstrud meruncing | Ekstrud atau putar, dalam langkah jika perlu; ekstrud ke kedalaman yang anda ukur |
| {{ui:Rib}}, {{ui:Flens asas}}, {{ui:Flens tepi}} dan corak rata | Ekstrud plat atau profil rib |
| Permukaan: menyiapkan {{ui:Bentuk}} ke dalam bahagian, {{ui:Tampung}}, {{ui:Loft permukaan}}, {{ui:Permukaan Gordon}}, {{ui:Jahit}}, {{ui:Tebalkan}}, {{ui:Permukaan ofset}}, {{ui:Panjangkan permukaan}}, {{ui:Pangkas permukaan}} | Tidak tersedia |
| Beberapa jasad: {{ui:Gabung}}, {{ui:Alih jasad}}, {{ui:Skala jasad}}, {{ui:Corak laluan}}, ciri yang mencipta jasad baharu | Satu pepejal; corak dan cermin menyalin ciri |
| Lakaran, satah, paksi dan titik pada muka yang hanya kernel tepat boleh cari (muka yang dibuat oleh fillet, dinding lubang, muka pepejal yang diimport) | Lakar pada satah asas, satah rujukan dan muka rata ekstrud serta putaran |
| Hasil reka bentuk generatif yang dibuka sebagai bahagian atau ditambah kepadanya (ia menjadi pepejal yang diimport) | Muat turun hasil sebagai STL atau STEP |
| Menyunting muka melengkung fail STEP yang dibuka sebagai permukaan tepat; STEP tepat bagi muka splin, sapuan dan putaran daripada fail STEP, sisi splin, ulir yang dimodelkan, jasad STL / OBJ / 3MF dan himpunan; STEP untuk pemodel bahagian lain | {{ui:Buka}} membaca STEP sebagai segi tiga dan mengekalkan muka rata, silinder, kon, sfera dan torus fail itu untuk eksport ([Buka fail STEP](topic:import-step)); {{ui:Eksport}} › {{ui:STEP AP242 (pepejal tepat)}} menulis setiap muka analitik dengan tepat dan mengekalkannya sebagai facet ([Eksport](topic:export-files#for-other-cad-programs-step)); makro untuk pemodel bahagian lain masih menulis |
| Lengkok sebenar dalam pandangan lukisan | Pandangan dan pandangan keratan dilukis daripada facet |
| Isipadu, luas dan jarak yang tepat | {{ui:Ukur}} memberi nombor pepejal facet, sedikit rendah pada bahagian bulat; tetapan **Lengkung** yang lebih halus mendekatkannya |

Sesetengah baris dalam jadual di bawah mencadangkan salah satu ciri ini sebagai jalan lain bagi sesuatu yang lain. Cadangan itu terpakai apabila kernel tepat kembali.

## Ciri

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Fillet muka, fillet bulat penuh, fillet dengan jejari yang ditetapkan pada titik sepanjang tepi | {{ui:Fillet}} malar atau berubah secara linear; beberapa ciri fillet |
| Shell dengan ketebalan dinding berbeza | Satu ketebalan {{ui:Shell}}; tambah bahan dengan ekstrud di tempat dinding mesti lebih tebal |
| Cerun tarik pada muka bentuk bebas (splin) | {{ui:Cerun tarik}} berfungsi pada muka rata, silinder dan kon |
| Sapuan berpilin, sapuan dinding nipis dan sapuan permukaan; kesinambungan tangen pada ciri Loft; loft dengan satu rel panduan; laluan splin | {{ui:Sweep}} dengan orientasi tetap atau skala akhir; loft dengan dua atau lebih rel panduan: lihat [Sweep, loft dan cerun tarik](topic:sweep-loft-draft) |
| Rib daripada lengkok atau splin; rib yang tumbuh segi empat mengikut lakaran (daripada pandangan atas); cerun tarik pada rib; beberapa rib daripada satu lakaran | {{ui:Rib}} daripada satu rantai garisan dalam satah rib itu sendiri: lihat [Rib dan gusset](topic:rib) |
| "Sehingga" permukaan melengkung, "sehingga seterusnya" yang berhenti pada muka melengkung | Sehingga muka rata atau satah rujukan |
| Lubang yang dikerudi dua kali, ulir inci dan paip, ulir meruncing, penamatan ulir dan permulaan ulir yang dicamfer | {{ui:Counterbore}} dengan kedalaman kecil; ulir metrik ISO dan trapezoid, kosmetik atau dimodelkan: lihat [Ulir pada aci dan lubang, dilukis atau dimodelkan](topic:threads) |
| Ekstrud ciri nipis | Lukis kedua-dua dinding profil |
| Salinan corak dilangkau satu demi satu, corak isian | Gunakan ciri berasingan; corak sepanjang lengkung: {{ui:Corak laluan}} |
| Salinan corak, cermin, fillet, chamfer, shell dan pepejal yang diimport | Salin lakaran atau ciri tempat ia dibina, atau corakkannya |
| Tangen tepat (G1) pada titik luar biasa bentuk; menggabungkan tampalan bentuk menjadi muka yang lebih besar | Naikkan Tahap bentuk: tampalan yang dianggarkan menjadi lebih kecil; lihat [Bentuk bebas dengan Bentuk](topic:form-surfaces) |
| Bentuk yang terdiri daripada beberapa keping tertutup berasingan dalam satu ciri; jambatan antara bentuk | Satu keping tertutup bagi setiap ciri Bentuk; cantumkannya dengan Sambung |
| Memilih jasad permukaan dalam paparan (kecuali titik pangkasan dan tampalan); fillet permukaan; buka pangkasan; tampalan G2; permukaan Gordon yang tangen kepada jiran melengkung (tangen kepada satah dan muka rata sudah dibina) | Pilih mengikut nama dalam panel ciri; tebalkan dahulu, kemudian fillet pepejal |
| Senarai jasad dalam sejarah; membiarkan jasad tersembunyi keluar daripada eksport | Namakan semula dan sembunyikan jasad dalam senarai jasad panel bahagian; padam atau gantung ciri yang mencipta jasad untuk mengeluarkannya |
| Skala tidak seragam yang mengekalkan silinder dan kon analitik; skala tidak seragam bagi permukaan ofset | {{ui:Skala jasad}} menjadikan muka melengkung B-spline tertutup (dalam 0.0000004 mm); skala seragam kekal tepat |
| Mencantumkan jasad permukaan; jumlah Minkowski | {{ui:Jahit}} atau {{ui:Tebalkan}} dahulu, kemudian {{ui:Gabung}} |
| Analisis toleransi: timbunan toleransi yang membelok sudut (gelung vektor 2D dan 3D), sensitiviti yang dikira daripada geometri, Monte Carlo dengan taburan lain, toleransi saiz pada dimensi lakaran, toleransi bonus daripada keadaan bahan | {{ui:Tindanan toleransi}} dalam himpunan: satu arah, kes terburuk dan RSS, toleransi ditaip, daripada toleransi am blok tajuk atau daripada bingkai GD&T: lihat [Tindanan toleransi](topic:tolerance-stackup) |
| Nesting: susunan pemotongan dan lead-in, memotong tepi yang dikongsi sekali, bahagian yang mesti disimpan bersama; baki gulungan, stok yang dikongsi antara projek | {{ui:Susun bahagian rata pada helaian…}} dengan jarak, margin, pusingan dan arah bijian: lihat [Susun bahagian rata pada helaian](topic:nest-flat-parts); plat sisa disimpan dan digunakan dahulu: lihat [Simpan dan guna semula potongan sisa](topic:nest-offcuts); rancang potongan dalam perisian pemotong anda sendiri |
| Kepingan logam: hem, jog, flens mitre dan kontur; flens pada tepi melengkung atau pada muka flens asas yang dibengkokkan; lenturan dilakar; penutup bucu; alat pembentukan; menukar pepejal kepada kepingan logam; corak rata flens asas yang dibengkokkan dengan potongan; jadual lenturan | {{ui:Flens asas}} (plat atau profil yang dibengkokkan), {{ui:Flens tepi}} pada tepi lurus plat dengan kelegaan lenturan, dan corak rata dengan faktor K: lihat [Kepingan logam](topic:sheet-metal) |
| Analisis cerun tarik pada himpunan; mencari garisan pemisah; analisis ketebalan dinding | {{ui:Analisis cerun tarik}} pada bahagian dalam Reka bentuk: lihat [Semak cerun tarik untuk acuan dan tuangan](topic:draft-analysis); buka setiap bahagian himpunan untuk menyemaknya |

## Lakaran

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Elips, lengkok tangen, konik, splin dengan darjah atau pemberat yang ditetapkan (NURBS) | Splin (kubik), lengkok dan bulatan dengan hubungan Tangen |
| Titik pada splin (hubungan), hubungan kelengkungan (G2) | Letakkan titik splin itu sendiri di tempat ia mesti melepasi |
| Salinan ofset splin yang mengikut perubahan kemudian; ofset rantai dengan sudut splin yang tajam | Ofset semula selepas perubahan; bulatkan sudut dahulu |
| Salinan corak yang kekal dipautkan kepada asal; corak sepanjang lengkung | Corakkan semula selepas perubahan |
| Memproyeksikan tepi bulat bebas bentuk atau condong, geometri terunjur yang mengikut bahagian | Unjurkan tepi bulat yang lurus dan selari, kemudian dimensikan |
| Dimensi dipacu (rujukan) | Baca saiz daripada panel atau fakta bahagian |
| Hubungan kolinear | Selari dengan jarak 0 |
| Menampal ke dalam program lain (papan keratan sistem) | Eksport DXF, STEP, STL atau 3MF |
| Menaip lengkok, koordinat relatif atau kutub | Taip garisan dan bulatan; lukis lengkok dengan alat Lengkok |
| Memilih geometri tanpa penunjuk | Perlukan klik atau ketikan |

## Parameter dan unit

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Konfigurasi yang menukar bahan; jadual reka bentuk CSV yang mematikan ciri | Konfigurasi menetapkan parameter dan menghidupkan atau mematikan ciri: lihat [Konfigurasi dan jadual reka bentuk](topic:design-tables); `partcraft variants` membina konfigurasi tersimpan mengikut nama, termasuk ciri yang dimatikan: lihat [Buat pek varian daripada konfigurasi anda](topic:variant-pack) |
| Persamaan pada nombor panel ciri terbaharu sendiri (satah, sapuan, cerun tarik dan yang seumpamanya) | Tulisnya dalam skrip atau dengan `partcraft set` ([Skrip dan baris arahan](topic:scripts-and-cli)) |
| Bahagian dipaparkan dalam inci | Saiz dipaparkan dalam milimeter; taip `2in` dalam kotak nombor atau ungkapan dan ia menjadi 50.8 |

## Fail

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Menyunting ciri sendiri pepejal STEP yang diimport (ia tiba tanpa sejarah) | Tambah atau potong bahan dengan ciri anda sendiri |
| Membaca warna, nama, struktur himpunan dan PMI daripada STEP | Tidak tersedia |
| Eksport glTF, OBJ, IGES, Parasolid; DWG bagi bahagian 3D (hanya pek varian menulis DWG: helaian lukisan) | STL atau 3MF untuk jejaring; STEP untuk pepejal; DXF untuk 2D |
| Membuka IGES, DXF atau fail milik program lain (fail `.3dm` dibuka sebagai satu jasad: [Buka model .3dm sebagai jasad pepejal](topic:open-3dm-files)) | Minta STEP, atau jejaring STL, OBJ atau 3MF yang tertutup: [Buka STL, OBJ atau 3MF](topic:open-meshes) |
| Struktur himpunan (pokok dengan nama bahagian) dalam STEP yang dieksport | STEP himpunan ialah satu sebatian pepejal yang diletakkan |
| Menyimpan ke folder pilihan anda tanpa muat turun pelayar | Hidupkan "tanya di mana hendak simpan" dalam tetapan muat turun pelayar |

## Lukisan

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Dimensi melebihi tiga saiz keseluruhan (saiz lubang, kedudukan, toleransi pada saiz) | Tanda PDF, atau eksport DXF dan dimensikannya dalam program CAD 2D |
| Lebih daripada satu keratan atau satu perincian; pandangan sejajar, pecah dan tambahan | Satu keratan dan satu perincian bagi setiap lukisan |
| Teks bebas, nota dan jadual pada helaian (selain blok tajuk dan semakan) | Nota kemasan, atau teks yang ditambah pada PDF |
| Unjuran sudut pertama, pandangan bergerak, helaian potret | Sudut ketiga, susun atur automatik, helaian landskap A4–A0 dan ANSI A–E |
| Pandangan keratan langsung: beberapa satah atau kotak keratan serentak, garis luar di sekeliling potongan, menyimpan keratan dalam fail | Satu satah pada satu masa daripada {{ui:Pandangan}} › {{ui:Paparan keratan}}; lihat [Lihat ke dalam dengan pandangan keratan](topic:section-view) |
| Lukisan himpunan dengan lebih banyak pandangan, dimensi atau balon yang boleh dialihkan | Satu pandangan isometrik (atau diletupkan) dengan balon automatik dan senarai bahagian |
| Salin dan tampal simbol GD&T dan kemasan | Letakkan setiap satu dengan Datum, Bingkai atau Kemasan |
| Manual: fail STEP dalam {{ui:Daripada fail lain…}} Illustrate, model yang diserahkan terus daripada ModelCraft atau BimCraft, gambar pada kualiti penjejak sinar, 3D interaktif dalam PDF | Buka STEP dalam Reka bentuk dan mulakan manual {{ui:Daripada bahagian yang terbuka}}; simpan model sebagai glTF (.glb); gambar PNG bagi paparan 3D; fail 3D interaktif: lihat [Mulakan manual dalam Illustrate](topic:illustrate) |

## Himpunan

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Gear, rak, sesondol dan sambungan skru; sambungan bebola yang terhad kepada kon; sambungan pada muka melengkung atau antara titik | Sambungan tegar, berputar, gelongsor, silinder, satah, bebola dan pin-dalam-slot pada muka rata, setiap nilai dengan had sendiri: lihat [Bina himpunan](topic:build-assembly) |
| Langkah letupan yang memusing bahagian, dan menyeret bahagian yang diletakkan oleh sambungan | Langkah letupan lurus; alih keluar sambungan untuk mengalihkan bahagian dengan tangan |
| Sub-himpunan | Satu tahap bahagian sahaja |
| Gear, sesondol, sentuhan | Tidak tersedia |

## Pembuatan

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Pemesinan kasar 3D bagi muka melengkung, pembersihan adaptif 3D, pemesinan baki; kemasan waterline, pensil, jejari dan spiral; laluan adaptif yang ditulis sebagai lengkok | Muka 2.5-paksi, poket, adaptif 2D, kontur, gerudi dan chamfer: lihat [Buat laluan alat dan G-code](topic:manufacture); kemasan Selari dan Scallop bagi keseluruhan model: lihat [Kemasan 3D](topic:finish-3d) |
| Laluan alat 4 dan 5 paksi, pelarikan, pemeriksaan probe | Sediakan satu sisi pada satu masa dengan paksi alat pada tab Sediaan |
| Semakan perlanggaran pemegang dan batang | Perhatikan amaran panjang alur dan semak dalam simulator kawalan anda |
| Probe, kitaran hayat alat dan subprogram; kod paksi ke-4 dan ke-5 serta kod pelarik dalam pos; memuatkan fail pos program lain | Tulis atau ubah pos dalam format PartCraft sendiri: lihat [Pos pemproses yang boleh disunting](topic:post-processors) |
| G-code dalam inci (G20) | Milimeter (G21) sahaja |

## Simulasi dan reka bentuk generatif

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Kajian tak linear: alah, pesongan besar, sentuhan antara bahagian, lesu | Statik linear dan frekuensi tabii: lihat [Semak tegasan dan pesongan](topic:simulation); pastikan faktor keselamatan jauh melebihi 1 |
| Lengkokan tak linear (ketidaksempurnaan, pasca-lengkokan, lompatan-lengkokan) | Faktor beban lengkokan linear dengan margin yang besar: lihat [Haba, tegasan terma dan lengkokan](topic:thermal-and-buckling) |
| Sinaran antara muka (faktor pandangan), rintangan sentuhan, bahan yang bergantung pada suhu, inersia dalam tegasan terma (gelombang kejutan terma) | Sinaran ke persekitaran, tegasan terma keadaan mantap atau kuasi-statik dari semasa ke semasa, sifat malar: lihat [Haba, tegasan terma dan lengkokan](topic:thermal-and-buckling) |
| Penghalusan automatik bagi haba fana dan kajian dengan beban terma; menjadikan jejaring lebih kasar di tempat ralatnya kecil; sasaran pada kuantiti setempat (tegasan puncak di satu tempat) | **Halus secara automatik** bagi kajian statik, lengkokan, frekuensi tabii dan terma keadaan mantap, pada ralat keseluruhan bahagian: lihat [Semak tegasan dan pesongan](topic:simulation); jika tidak, kurangkan saiz elemen |
| Beban galas dan bolt, daya jauh, momen, spring, sesaran yang ditetapkan | Daya dan tekanan pada muka, graviti; muka tetap dan tanpa geseran |
| Simulasi himpunan; bahan yang berbeza mengikut arah (lapisan dicetak, komposit) | Satu bahagian, satu bahan isotropik |
| Beberapa utas penyelesai untuk kajian tetrahedron, pemindahan haba dan reka bentuk generatif; sebarang utas pada halaman yang tidak diasingkan rentas-asal | Kajian voksel, lengkokan, tegasan dari semasa ke semasa dan aliran laminar menggunakan utas di mana halaman membenarkannya: lihat [Tetapan PartCraft](topic:settings) |
| Aliran gelora dengan ketepatan reka bentuk (model Spalart–Allmaras dimasukkan sebagai eksperimen: geseran paip 30 hingga 34 % tinggi, pelekatan semula langkah-belakang 21 hingga 39 % pendek; dirancang: sel yang lebih halus berhampiran dinding); haba dalam aliran; aliran tak mantap (tepat mengikut masa); permukaan bebas; bendalir bukan-Newtonan; bahagian berputar | Aliran laminar, mantap, isoterma bagi bendalir Newtonan, atau model gelora eksperimen untuk corak kualitatif: lihat [Simulasikan aliran bendalir](topic:flow-simulation); panel memberi amaran apabila nombor Reynolds melepasi laminar |
| Had tegasan dan peraturan pembuatan (overhang, arah pengilangan) dalam reka bentuk generatif; beberapa bahan dalam satu bentuk | Bentuk paling tegar bagi satu isipadu; semak hasil dalam Simulasi: lihat [Tumbuhkan bentuk daripada beban](topic:generative-design) |
| Hasil sebagai pepejal licin, berparameter yang boleh disunting | STL, STEP berfacet, atau bahagian dengan hasil sebagai pepejal berfacet yang diimport |
| Reka bentuk mesin elektrik: rotor berputar dalam stator, tork berbanding sudut, keluli tepu, magnet yang kehilangan kekuatan melepasi lututnya, arus pusar dan kehilangan besi serta kuprum; medan magnet dalam 3-D atau pada jejaring melengkung | Magnetostatik 2-D linear pada grid dalam perpustakaan analisis: gegelung, besi, magnet kekal pada garis pemulihannya, jurang, kearuhan dan tarikan: lihat [Medan magnet dalam 2-D](topic:magnetic-fields-2d) |

## Skrip

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Bantuan apabila hover, titik henti dan langkah dalam penyunting skrip | Cari, lipat dan lengkapkan sudah ada (lihat [Tulis dan jalankan skrip](topic:craftscript)); selebihnya, gunakan penyunting anda sendiri: {{ui:Simpan}} dan {{ui:Buka}} dalam kumpulan Skrip memindahkan skrip masuk dan keluar; fungsi terbina dalam disenaraikan dalam [Bahasa CraftScript](topic:craftscript-language) |
| Titik henti dan langkah melalui skrip | `disp` dan `fprintf` sepanjang jalan; {{key:Mod+Enter}} menjalankan beberapa baris yang dipilih pada satu masa |
| Medan dan plot yang ditunjukkan skrip dilukis dalam ruang kerja Reka bentuk; skrip yang menukar parameter bahagian | Ia dipaparkan dalam ruang kerja Skrip; skrip membaca parameter dengan `param` (lihat [Tulis dan jalankan skrip](topic:craftscript)), dan menukarnya pada tab {{ui:Parameter}} |
| Gambar dan jadual bersebelahan dengan plot; menyunting plot (zum, had paksi) sebelum menyimpannya | Bersebelahan menunjukkan plot; simpan plot sebagai PNG, SVG atau CSV dan siapkannya di tempat lain |
| numpy dan pakej Python lain; Python luar talian; melipat Python dalam penyunting; Pascal Script | Pustaka piawai Python, CraftScript dan Lua: lihat [Skrip dalam Python](topic:craftscript-python) |
| Menghantar fungsi Lua kepada fungsi terbina dalam; memanggil fungsi pustaka daripada Lua dengan nama yang dibina semasa skrip berjalan | Tulis nama fungsi pustaka dalam skrip (`cs.static_tet(…)`), atau panggil daripada skrip CraftScript |

## Aplikasi

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Simpanan awan, perkongsian dan sejarah versi | Belum tersedia. Simpan fail ke komputer anda dan simpan versi mengikut nama |
| PartCraft sebagai aplikasi terpasang pada iPad dan iPhone | Gunakan PartCraft dalam pelayar peranti; pada Android dan pada desktop ia juga berjalan dalam CadCraft Studio (getcadcraft.com/download) |
| Menu konteks (klik kanan) | Bar alat dan panel kanan |
| Bekerja sepenuhnya luar talian daripada permulaan baharu | Hanya apabila aplikasi telah disimpan untuk kegunaan luar talian: lihat [Bekerja luar talian](common:offline) |

Laporkan perkara yang paling anda rindukan melalui halaman sokongan laman web: ia menentukan apa yang seterusnya.

## Engineer (penjana dan medan)

| Belum dibina | Sebaliknya, hari ini |
|---|---|
| Kepala, port dan sambungan pada penukar haba yang dijana; lengkung suhu bagi kekuatan bahan; kehilangan tee dalam manifold | Penjana membina teras dan tiub; tambah sambungan dalam Reka bentuk; gunakan nilai suhu bilik bagi bahan dengan faktor keselamatan |
| Menambah penjana daripada direktori add-on dengan satu klik | {{ui:Buka}} dalam ruang kerja Engineer menambah penjana daripada fail |
| Fail medan yang lebih halus daripada saiz voksel penjana; membaca fail `.vdb` | Simpan medan yang lebih halus daripada skrip; `.vdb` ditulis, bukan dibaca |
| Pengiraan kod bekas tekanan | Formula dinding nipis dan dinding tebal daripada buku teks, dengan faktor keselamatan yang anda pilih; bukan margin kod |
| Penjana untuk aplikasi lain | PartCraft sahaja dalam versi ini |
