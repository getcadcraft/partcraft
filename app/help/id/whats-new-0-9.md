---
title: Yang baru di 0.9
summary: PartCraft 0.9 menambahkan fillet di antara muka dan penebalan menjadi solid, rakitan ribuan part, brankas Dokumen dengan revisi, add-on tegangan Solid FEM, sepuluh metode busur, profil baja UK, tahap Cetak, serta add-on cetak resin.
keywords: yang baru, apa yang baru, catatan rilis, changelog, 0.9, fillet di antara muka, bola bergulir, fillet beberapa tepi, tebalkan, solid dari permukaan, shell STEP, solid IGES, fillet pemindaian, rakitan besar, tampilan ringan, 20000 part, dokumen, brankas, check out, revisi, rilis, pemakaian, tautan rhino, grasshopper, 3dm, kursor, lantai pabrik, antrean pekerjaan, solid fem, elemen hingga, von mises, frekuensi alami, metode busur, busur 3 titik, profil baja uk, blue book, tahap cetak, resin, goo, ctb, meja, bentangkan, analisis langsung, perbarui saat mengedit, patahkan, apa yang rusak lebih dulu, faktor beban, nonlinier, luluh, regangan plastis, kontak, calculix, studi gerak, kelonggaran, permukaan, nurbs, haluskan, hull, zebra, engineer, generator, badan hasil generator, sketsa dari foto, skala untuk cetak, pisahkan untuk cetak, penyusutan, lembar nesting, G-code, gambar, beri dimensi lubang, asisten, MCP, bahasa, baris bilah alat
from: 96d9fbfa
---

Berikut yang berubah di PartCraft 0.9, dibandingkan dengan 0.8.1. Permukaan bebas kini menutup menjadi solid, rakitan ribuan part tetap dapat digunakan, brankas Dokumen menyimpan revisi, dan add-on Solid FEM memeriksa tegangan pada part. Setiap item menyebutkan di mana menemukannya.

## Baru di 0.9.1

- **Ekspor STEP eksak.** {{ui:Ekspor}} › {{ui:STEP AP242 (solid eksak)}} dan {{ui:STEP AP214 (solid eksak)}} kini berfungsi. Lubang, boss, fillet, kerucut, bola, dan torus ditulis pada permukaan sejatinya dengan lingkaran sejati sebagai tepi, sehingga program CAD atau CAM lain dapat mengenali lubang sebagai lubang. Sisi spline, ulir yang dimodelkan, dan mesh yang diimpor tetap berupa facet datar dalam solid yang sama. Lihat [Ekspor untuk cetak, STEP, dan DXF](topic:export-files#for-other-cad-programs-step).
- **STEP masuk, STEP eksak keluar.** File STEP yang Anda buka mempertahankan muka datar, silinder, kerucut, bola, dan torus miliknya sendiri, sehingga {{ui:Ekspor}} › {{ui:STEP AP242 (solid eksak)}} menuliskannya kembali sebagai permukaan sejati alih-alih facet: balok dari pemasok dengan lubang baut keluar dengan muka yang sama seperti saat masuk, ditambah apa pun yang Anda potong ke dalamnya. Muka spline, tersapu, dan berputar dari file tetap berupa facet, begitu pula badan dari STL, OBJ, dan 3MF. Buka kembali file STEP untuk part yang disimpan sebelumnya. Lihat [Buka file STEP dan bangun di atasnya](topic:import-step).
- **Lingkaran sejati dalam DXF muka.** {{ui:Ekspor}} › {{ui:DXF sketsa atau muka datar}} dengan muka datar yang dipilih kini menulis lubang bulat sebagai lingkaran, dengan pusat dan radius lubang itu sendiri, untuk meja laser, plasma, atau waterjet. Tepi bulat lainnya tetap berupa facet.
- **STEP eksak untuk bengkel.** Di {{ui:Manufaktur}}, {{ui:STEP presisi (koordinat kerja)}} menulis part dengan titik asalnya di titik asal kerja setup dan Z sepanjang sumbu pahat, yaitu koordinat yang digunakan G-code. Lihat [Buat toolpath dan G-code](topic:manufacture#exact-step-for-the-shop).

## Baru

### Permukaan dan solid

- **Fillet di antara muka.** Pilih {{ui:Permukaan}} di kotak {{ui:Ruang kerja}}, lalu {{ui:Fillet di antara muka}}. Pilih dua muka dari satu solid, ketik radius (dan {{ui:Radius di ujung (mm, 0 = sama)}} untuk radius yang berubah sepanjang tepi). Baris hasil menyatakan seberapa jauh fillet dari bola bergulir ideal, dan radius yang tidak pas ditolak dengan muka yang disebutkan namanya. {{ui:Fillet beberapa tepi}} membulatkan banyak tepi dalam satu langkah; centang {{ui:Sudut (tambalan bola tempat tiga bertemu)}} untuk sudut bola tempat tiga tepi membulat dari muka datar bertemu. Lihat [Permukaan bebas (NURBS)](topic:nurbs-surfaces).
- **Tebalkan menjadi solid.** {{ui:Tebalkan menjadi solid}} di ruang kerja yang sama memberi permukaan sebuah ketebalan; {{ui:Sisi lain}} menumbuhkannya ke arah sebaliknya. Lipatan atau persilangan sendiri ditolak dengan permukaan dan tempatnya disebutkan.
- **Solid dari permukaan.** Permukaan yang dipotong dapat digabung dengan union, subtract, dan intersect lalu dimasukkan ke part sebagai satu langkah urungkan. STEP menulis solid sebagai satu shell tertutup dan IGES sebagai satu solid; keduanya dibaca kembali sebagai solid. Jika muka tidak berpasangan tepi demi tepi, file mendapat muka terpisah dan baris status menyatakannya. Solid juga dapat dibuat di editor node; lihat [Node editor](topic:nodes).
- **Fillet tepi dan variabel dalam pemindaian.** Saat Anda mencocokkan permukaan pada pemindaian, fillet tepi (torus) dan fillet radius variabel sepanjang tepi yang cukup lurus juga dicari dan dicantumkan dengan radiusnya. Ini diuji hanya pada pemindaian rekaan.

### Rakitan, dokumen, dan tautan

- **Rakitan besar.** Part yang merupakan salinan berbagi satu mesh, dan {{ui:Tampilan}} › {{ui:Tampilan ringan}} menggambar kotak agar tampilan tetap bergerak (otomatis menyala untuk rakitan yang sangat besar; pemilihan dan sambungan tetap memakai part yang sebenarnya). Pohon part menampilkan baris pertamanya dan tombol {{ui:Tampilkan 700 lainnya}} untuk sisanya. File rakitan dapat memuat hingga 50.000 instance dan 100.000 sambungan. Lihat [Membangun rakitan](topic:build-assembly).
- **Dokumen.** {{ui:Dokumen…}} di grup **File** membuka dialog di atas folder proyek: check out dan check in, huruf revisi, status (sedang dikerjakan, untuk ditinjau, dirilis, usang), riwayat, tempat pemakaian, dan daftar material. Lihat [Dokumen dan revisi (brankas)](topic:documents-walkthrough).
- **Tautan Rhino langsung.** Satu skrip, `cadcraft_link.py`, memantau dokumen Rhino atau Grasshopper dan hanya mendorong yang berubah ke PartCraft, tempat fitur yang diimpor dibangun ulang pada bentuk baru. Tautan ini satu arah dan memerlukan Studio. Lihat [Tautan .3dm langsung](topic:live-3dm-link).
- **Saling melihat kursor.** Dalam sesi bersama, kursor setiap orang tampil dengan namanya dan fitur yang sedang dipilihnya. Lihat [Bekerja langsung bersama orang lain](topic:work-live).
- **Lantai pabrik.** Nyalakan add-on Lantai pabrik di {{ui:Pengaturan}} › {{ui:Add-on}}. Setelah Anda memposting program di {{ui:Manufaktur}}, tab-nya dapat {{ui:Tambahkan ke antrean pekerjaan pabrik}} atau {{ui:Simpan sebagai file pekerjaan}}. Ini tidak pernah mengirim atau memulai mesin.

### Analisis dan part

- **Add-on Solid FEM.** Nyalakan {{ui:Solid FEM}} di {{ui:Pengaturan}} › {{ui:Add-on}} (nonaktif sampai Anda menyalakannya) dan tab {{ui:Solid FEM}} muncul di panel kanan. {{ui:Buat mesh part}}, pilih muka tetap dan beban di tampilan 3D, {{ui:Selesaikan}}, lalu gambar perpindahan, tegangan von Mises, atau bentuk mode dengan {{ui:Tampilkan pada model}}. Lihat [Solid FEM: pemeriksaan tegangan](topic:solid-fem-check).
- **Busur dalam sketsa, sepuluh cara.** Panah di samping {{ui:Busur}} pada bilah alat sketsa mencantumkan 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length, dan Continue. Lihat [Gambar busur dengan sepuluh metode](topic:sketch-arc-methods).
- **Profil baja UK.** Rangka las dapat memakai 976 profil UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); ketik ukuran seperti `305x165x40 UB`. Lihat [Batang struktur](topic:structural-members).

### Pencetakan

- **Tahap cetak.** Tombol {{ui:Tahap cetak}} di bilah alat (add-on 3D Print, aktif secara default) menempatkan badan part Anda di atas meja putus-putus: {{ui:Bentangkan}}, {{ui:Putar 90°}}, {{ui:Atur di meja}}, {{ui:Paskan semua di meja}}, {{ui:Pratinjau layer}}, lalu {{ui:Kirim ke printer 3D}} melalui USB, Klipper (Moonraker), OctoPrint, atau PrusaLink. Tidak ada yang dikirim sampai Anda mengonfirmasi, dan part Anda tidak pernah berubah. Untuk file STL atau 3MF sebagai gantinya, lihat [Siapkan part untuk cetak 3D](topic:print-3d).
- **Cetak resin.** Add-on di {{ui:Pengaturan}} › {{ui:Add-on}}, semuanya nonaktif sampai Anda menyalakannya: slicer resin, tes eksposur, serta format file Elegoo GOO, SL1, Chitubox CBDDLP/CTB, dan Anycubic. Slicing berjalan pada thread pekerja, sehingga halaman tetap responsif.

## Di setiap aplikasi

- Setiap petunjuk saat kursor di atas elemen adalah tooltip Bootstrap.
- Tips awal memiliki tombol tutup; tetap tertutup.
- Baris tab panel yang tidak muat digulir ke samping alih-alih terpotong.
- Tab peramban menampilkan nama dokumen yang terbuka sebelum PartCraft | CadCraft.
- {{ui:Pengaturan}} menampilkan {{ui:Tata letak}} ruang kerja sebagai menu tarik-turun, dan kotak bahasa mencantumkan setiap bahasa yang ada di build.
- Berat dan Suhu adalah jenis satuan di pengaturan Satuan.

## Diperbaiki

- Menu Busur sketsa kini mencantumkan setiap metode.
- Bilah alat add-on dan judul tab peramban diperbaiki pada 2026-11-09.

## Keterbatasan

- STEP eksak telah dibaca kembali di OpenCascade (solid valid, volume sama dengan yang dihitung manual). Belum dibuka di setiap program CAD atau CAM, dan rakitan tidak ditulis sebagai STEP eksak.
- Belum ada yang dicetak pada printer sungguhan. Slicing, G-code, dan file resin dibaca kembali oleh program kami sendiri atau printer pengganti; tidak ada format resin yang dimuat ke printer, dan ukuran printer serta eksposur hanyalah titik awal.
- Solid FEM bersifat linear, isotropik, dan elastis, dengan satu material per part, tanpa kontak, luluh, atau tekuk. Tegangan di muka tetap dan sudut tajam bergantung pada mesh. Ini adalah alat bantu pemeriksaan, belum ditinjau oleh insinyur.
- Waktu rakitan besar berasal dari server tanpa GPU; bingkai detail penuh untuk 20.000 part tetap memerlukan beberapa detik di sana.
- Fillet bekerja pada pasangan muka; tidak ada vertex blend umum dan tidak ada fillet di antara muka yang tidak bertemu.
- Tautan Rhino belum pernah berjalan di dalam Rhino atau Grasshopper sungguhan. Dokumen dicoba oleh dua program pada satu folder, bukan oleh dua orang pada berbagi jaringan.
- Pencocokan permukaan pada pemindaian sungguhan belum diperiksa secara manual. Bahasa selain Inggris adalah draf mesin.
- Installer Windows belum ditandatangani kode, dan image disk macOS belum dinotarisasi. Lihat [Pemecahan masalah](topic:troubleshooting).

Perubahan sebelumnya ada di [Yang baru di 0.7](topic:whats-new-0-7).

## Sebelumnya: 0.8 dan 0.8.1

Berikut yang berubah di PartCraft 0.8 dan 0.8.1, dibandingkan dengan 0.7. Simulasi menjawab saat Anda mengedit dan memberi tahu apa yang rusak lebih dulu, rakitan mendapat studi gerak, dan ruang kerja baru membuat permukaan bebas serta part berukuran dari fisika. 0.8.1 adalah rilis perbaikan kecil.

### Baru

**Simulasi**

- **Perbarui saat saya mengedit.** Centang {{ui:Perbarui saat saya mengedit}} di blok {{ui:Selesaikan}} dan jawabannya mengikuti suntingan Anda. Ubah dimensi, beban, atau material, dan jawaban cepat yang dibuat dengan elemen empat kali lebih besar langsung muncul; saat Anda berhenti sekitar satu detik, jawaban hasil penyempurnaan studi menggantikannya. Hasilnya menyatakan mana yang sedang Anda lihat. Pada kantilever baja, jawaban cepat berada dalam 1 % untuk defleksi dan sekitar 4 % untuk tegangan dibanding hasil penyempurnaan. Lihat [Periksa tegangan dan defleksi](topic:simulation#update-while-you-edit-live).
- **Apa yang rusak lebih dulu.** Untuk studi statis atau tekuk, {{ui:Apa yang rusak lebih dulu?}} di blok **Patahkan** menskalakan beban sampai part menyerah. Daftar ini, dari yang terburuk, memuat faktor beban menuju luluh pertama (dengan penanda merah di tempat tegangan memuncak) dan faktor beban menuju tekuk. Faktor di bawah 1 berarti part sudah menyerah saat dibebani, dan Masalah menampilkan kesalahan. Faktornya berasal dari studi linear, sehingga sebaik studi itu sendiri. Lihat [Periksa tegangan dan defleksi](topic:simulation#find-out-what-breaks-first-break-it).
- **Luluh dan kontak.** Dua jenis studi tambahan: studi nonlinier tempat material mengikuti garis lurusnya sampai tegangan luluh lalu kemiringan yang lebih landai, dengan regangan plastis diplot; dan studi kontak tempat potongan terpisah saling mendorong (tanpa gesekan) atau tetap menempel (terikat). Langkah beban yang tidak dapat stabil, atau potongan yang menembus terlalu jauh satu sama lain, tampil di panel Masalah. Gesekan, geseran besar, rotasi besar, defleksi besar, dan kelelahan tidak diselesaikan. Lihat [Periksa tegangan dan defleksi](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Deck untuk CalculiX.** {{ui:Ekspor}} › {{ui:Deck CalculiX (.inp)}} menyimpan studi untuk CalculiX, program terpisah yang Anda pasang dan jalankan sendiri; {{ui:Ekspor}} › {{ui:Hasil CalculiX (.frd)}} membaca file hasilnya kembali ke mesh yang sama. PartCraft tidak pernah memulai program itu, dan PartCraft memberi tahu jika part berubah sejak deck disimpan.

**Rakitan**

- **Studi gerak.** {{ui:Rakitan}} › {{ui:Gerak}} menggerakkan nilai satu sambungan selama waktu yang Anda tentukan (kecepatan konstan, halus, sinus, atau keluar lalu kembali), menempatkan rakitan pada setiap langkah dengan sambungan dan loop tertutupnya, dan melaporkan apa yang berbenturan serta seberapa dekat part mendekat. {{ui:Tambah titik}} memplot posisi, kecepatan, dan percepatan sebuah titik, nilai sambungan, serta kelonggaran terhadap waktu; {{ui:Simpan CSV}} dan {{ui:Simpan plot}} menuliskannya. Setelah {{ui:Jalankan}}, Langkah di bilah jalankan memindahkan rakitan ke langkah mana pun. Pengaturan studi disimpan dalam file rakitan. Kecepatan dan percepatan dihitung dari posisi yang tercatat, jadi gunakan lebih banyak langkah jika puncak tajam terbaca rendah. Lihat [Periksa rakitan untuk benturan dan gerak](topic:check-assembly#a-motion-study).

**Permukaan dan part dari fisika**

- **Ruang kerja Permukaan.** Pilih {{ui:Permukaan}} di kotak {{ui:Ruang kerja}} untuk kurva dan permukaan NURBS di samping part: {{ui:Kurva}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Cocokkan}}, dan {{ui:Zebra}}, dengan kontinuitas (G0, G1, atau G2) diukur pada permukaan eksak dan tepi yang lebih buruk dari yang Anda minta dicantumkan di Masalah dengan perbaikan Cocokkan. {{ui:Haluskan}} mengukur garis hull untuk titik belok dan lompatan kelengkungan, lalu membangun ulang yang tidak halus dalam toleransi Anda. Permukaan disimpan dalam file part dan tidak mengubah fitur part. Lihat [Permukaan bebas (NURBS)](topic:nurbs-surfaces).
- **Ruang kerja Engineer.** Pilih {{ui:Engineer}} di kotak ruang kerja, pilih generator, lalu klik {{ui:Baru}}: skrip mengukur part dari apa yang harus dilakukannya (memanaskan untuk memindahkan, aliran, tekanan, material, proses cetak) dengan rumus buku teks dan membangunnya, lalu mengembalikan angka yang dipakai beserta sumbernya, pemeriksaan manufakturnya, dan file untuk alat analisis. Input yang sama menghasilkan part yang sama di komputer mana pun. Generator disimpan dalam part, dan membuka part tidak pernah menjalankan skrip. Lihat [Part dari fisika: generator](topic:engineer-generators) dan [Tulis generator](topic:write-a-generator).

**Sketsa, gambar, dan pembuatan**

- **Sketsa dari foto.** {{ui:Fitur}} › {{ui:Lainnya}} › {{ui:Sketsa dari foto…}} menelusuri gambar part datar pada latar polos (garis luar dan lubang) atau gambar pena menjadi garis, busur, dan lingkaran. Anda memberi satu ukuran panjang, memeriksa pratinjau, dan membuat sketsa. Lihat [Dasar-dasar sketsa](topic:sketch-basics#a-sketch-from-a-photo).
- **Skala dan pisahkan untuk cetak.** {{ui:Ekspor}} › {{ui:Skala untuk dicetak (STL atau 3MF)…}} menskalakan per sumbu tanpa mengubah part, misalnya dengan toleransi penyusutan. {{ui:Ekspor}} › {{ui:Pisahkan untuk dicetak (zip berisi potongan)…}} memotong part yang terlalu besar untuk meja Anda menjadi potongan bernomor yang disambung dengan pasak, kunci, ekor burung, lubang dowel, atau kantong magnet. Lihat [Cetak 3D](topic:print-3d).
- **Lembar nesting ke G-code.** {{ui:Ekspor}} › {{ui:Lembar nesting ke G-code}} membaca DXF nesting dan membuat satu program per lembar melalui post yang Anda pilih: lubang dan potongan dulu, lalu garis luar. Ini tidak merencanakan lead-in, urutan pemotongan, atau tepi bersama. Lihat [Nesting part datar pada lembar](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Gambar yang lebih banyak mengerjakan sendiri.** {{ui:Lembar}} › {{ui:Otomatis}} memilih lembar A terkecil yang memuat tampilan pada skala standar terbesar hingga 1:1. {{ui:Beri dimensi pada lubang}} menempatkan tanda pusat pada setiap lubang, satu callout per ukuran, dan posisi dari pojok kiri bawah tampilan. Lihat [Membuat gambar](topic:drawing-pdf).

**Di setiap aplikasi**

- **Bahasa.** Aplikasi tersedia dalam 54 bahasa. Yang selain Inggris adalah draf mesin sampai penutur asli membacanya.
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} memilih Bungkus (seperti sebelumnya), 2 baris, atau 1 baris; bilah yang tidak muat digulir ke samping. Pita Fitur PartCraft menampilkan alat yang paling sering dipakai dalam ukuran besar dan menyembunyikan variannya di balik tombol terbagi.
- **Hubungkan AI Anda.** Studio adalah hub untuk menghubungkan asisten milik Anda ke kedelapan aplikasi, dengan izin baca saja, saran, atau sunting per aplikasi. Asisten yang terhubung dapat menentukan ukuran part dari satu kalimat, misalnya braket untuk beban, menunjukkan cara kerjanya dan setiap pemeriksaan, lalu membangunnya; ia melaporkan apa yang tidak diperiksanya (konsentrasi tegangan, kelelahan, rangkak pada plastik). Lihat [Gunakan PartCraft dengan asisten AI](topic:use-with-ai-assistants).

### Diperbaiki di 0.8.1

- **Pembekuan kursor layar penuh.** Pemilihan saat kursor melayang kini dibatasi frekuensinya. Penyebabnya adalah tafsiran terbaik kami dan belum dikonfirmasi dengan orang yang melaporkannya.
- **Bahasa saat dijalankan.** Studio dan edisi kemasan dapat berganti bahasa saat berjalan; sebelumnya hanya bahasa Inggris. Ini belum diuji pada setiap platform: beri tahu kami jika bahasanya tidak berubah.

### Belum ada di versi ini

- Hubungkan AI Anda belum selesai: hubungkan dengan satu klik di dalam Studio, konektor hosted untuk AI peramban, API key Anda sendiri di dalam Studio, dan paket MCP yang dipublikasikan belum dijanjikan. Studio tidak memiliki AI sendiri.
- Studio belum ditandatangani kode: Windows mungkin memberi peringatan, dan macOS meminta klik kanan lalu Buka. Lihat [Pemecahan masalah](topic:troubleshooting).
- Tumpukan toleransi masih satu arah: lihat [Tumpukan toleransi](topic:tolerance-stackup).
- Sisanya tercantum di [Yang belum dibuat](topic:not-built-yet).

Perubahan sebelumnya ada di [Yang baru di 0.7](topic:whats-new-0-7).
