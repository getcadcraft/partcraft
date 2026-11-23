---
title: Yang baru di 0.9 (sebelumnya)
summary: PartCraft 0.9 menambahkan fillet di antara muka dan penebalan menjadi solid, rakitan dengan ribuan bagian, brankas Dokumen dengan revisi, add-on Solid FEM untuk tegangan, sepuluh metode busur, ukuran baja UK, tahap Cetak, dan add-on pencetakan resin.
keywords: yang baru 0.9, rilis sebelumnya, yang baru, what's new, catatan rilis, changelog, 0.9, fillet di antara muka, rolling ball, fillet beberapa tepi, pertebal, solid dari permukaan, step shell, iges solid, fillet dari scan, rakitan besar, tampilan ringan, 20000 bagian, dokumen, brankas, check out, revisi, rilis, di mana dipakai, tautan rhino, grasshopper, 3dm, kursor, lantai pabrik, antrean job, solid fem, elemen hingga, von mises, frekuensi alami, metode busur, busur 3 titik, profil baja UK, buku biru, tahap cetak, resin, goo, ctb, bed, bentangkan, yang baru, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, analisis langsung, perbarui saat mengedit, pecahkan, apa yang rusak lebih dulu, faktor beban, nonlinear, yield, regangan plastis, kontak, calculix, studi gerak, clearance, permukaan, nurbs, haluskan, hull, zebra, engineer, generator, bodi hasil generator, sketsa dari foto, skala untuk pencetakan, pisahkan untuk pencetakan, penyusutan, lembaran bersarang, g-code, gambar, beri dimensi lubang, asisten, mcp, bahasa, baris bilah alat
from: 1dafd7c8
---

Ini yang berubah di PartCraft 0.9, dibandingkan dengan 0.8.1. Permukaan bentuk bebas kini menutup menjadi solid, rakitan dengan ribuan bagian tetap dapat dipakai, brankas Dokumen menyimpan revisi, dan add-on Solid FEM memeriksa tegangan dalam sebuah benda. Setiap butir menyebutkan di mana menemukannya.

## Baru di 0.9.1

- **Ekspor STEP eksak.** {{ui:Ekspor}} › {{ui:STEP AP242 (solid eksak)}} dan {{ui:STEP AP214 (solid eksak)}} kini berfungsi. Lubang, tonjolan, fillet, kerucut, bola, dan torus ditulis pada permukaan sejatinya dengan lingkaran sejati sebagai tepinya, sehingga program CAD atau CAM lain dapat mengenali lubang sebagai lubang. Sisi spline, ulir yang dimodelkan, dan mesh impor tetap sebagai facet datar di solid yang sama. Lihat [Ekspor untuk pencetakan, STEP, dan DXF](topic:export-files#for-other-cad-programs-step).
- **STEP masuk, STEP eksak keluar.** File STEP yang Anda buka mempertahankan muka datar, silinder, kerucut, bola, dan torusnya sendiri, sehingga {{ui:Ekspor}} › {{ui:STEP AP242 (solid eksak)}} menuliskannya kembali sebagai permukaan sejati alih-alih facet: balok pemasok dengan lubang baut keluar dengan muka yang sama seperti saat masuk, ditambah apa pun yang Anda potong ke dalamnya. Muka spline, sapuan, dan revolusi dari file tetap menjadi facet, begitu pula bodi dari STL, OBJ, dan 3MF. Buka kembali file STEP untuk benda yang disimpan sebelumnya. Lihat [Buka file STEP dan bangun di atasnya](topic:import-step).
- **Lingkaran sejati pada DXF muka.** {{ui:Ekspor}} › {{ui:DXF sketsa atau muka datar}} dengan muka datar yang dipilih kini menulis lubang bulat sebagai lingkaran, dengan pusat dan jari-jari lubang itu sendiri, untuk meja laser, plasma, atau waterjet. Tepi bulat lainnya tetap berupa facet.
- **STEP presisi untuk bengkel.** Di {{ui:Manufaktur}}, {{ui:STEP presisi (koordinat kerja)}} menulis benda dengan titik asalnya di titik asal benda kerja setup dan Z sepanjang sumbu alat, yaitu koordinat yang dipakai G-code. Lihat [Buat jalur pahat dan G-code](topic:manufacture#step-presisi-untuk-bengkel).

## Baru

### Permukaan dan solid

- **Fillet di antara muka.** Pilih {{ui:Permukaan}} di kotak {{ui:Ruang kerja}}, lalu {{ui:Fillet di antara muka}}. Pilih dua muka dari satu solid, ketik jari-jarinya (dan {{ui:Radius di ujung (mm, 0 = sama)}} untuk jari-jari yang berubah sepanjang tepi). Baris hasil menyatakan seberapa jauh fillet dari bola bergulir ideal, dan jari-jari yang tidak sesuai ditolak dengan menyebut mukanya. {{ui:Fillet beberapa tepi}} membulatkan banyak tepi sekaligus; centang {{ui:Sudut (tambalan bola tempat tiga bertemu)}} untuk sudut bola tempat tiga tepi membulat dari muka datar bertemu. Lihat [Permukaan bentuk bebas (NURBS)](topic:nurbs-surfaces).
- **Tebalkan menjadi solid.** {{ui:Tebalkan menjadi solid}} di ruang kerja yang sama memberi permukaan sebuah ketebalan; {{ui:Sisi lain}} menumbuhkannya ke arah sebaliknya. Lipatan atau persilangan sendiri ditolak dengan menyebut permukaan dan tempatnya.
- **Solid dari permukaan.** Permukaan yang sudah dipangkas dapat digabung dengan gabungan, kurangi, dan irisan, lalu dimasukkan ke benda sebagai satu langkah urungkan. STEP menulis solid sebagai satu cangkang tertutup dan IGES sebagai satu solid; keduanya dibaca kembali sebagai solid. Bila muka tidak berpasangan tepi demi tepi, file mendapat muka terpisah dan baris status menyatakannya. Solid juga dapat dibuat di editor node; lihat [Editor node](topic:nodes).
- **Fillet rim dan variabel pada scan.** Saat Anda mencocokkan permukaan ke scan, fillet rim (torus) dan fillet berjari-jari variabel di sepanjang tepi yang cukup lurus juga dicari dan dicantumkan dengan jari-jarinya. Ini baru diuji pada scan rekaan.

### Rakitan, dokumen, dan tautan

- **Rakitan besar.** Bagian yang merupakan salinan berbagi satu mesh, dan {{ui:Tampilan}} › {{ui:Tampilan ringan}} menggambar kotak agar tampilan tetap bergerak (ia menyala sendiri untuk rakitan yang sangat besar; pemilihan dan sambungan tetap memakai bagian sungguhan). Pohon bagian menampilkan baris pertamanya dan tombol {{ui:Tampilkan 700 lainnya}} untuk sisanya. File rakitan dapat memuat hingga 50.000 instans dan 100.000 sambungan. Lihat [Bangun rakitan](topic:build-assembly).
- **Dokumen.** {{ui:Dokumen…}} pada grup **File** membuka dialog di atas folder proyek: check out dan check in, huruf revisi, status (sedang dikerjakan, untuk ditinjau, dirilis, usang), riwayat, di mana dipakai, dan daftar material. Lihat [Dokumen dan revisi (brankas)](topic:documents-walkthrough).
- **Tautan Rhino langsung.** Satu skrip, `cadcraft_link.py`, memantau dokumen Rhino atau Grasshopper dan hanya mengirim apa yang berubah ke PartCraft, tempat fitur impor dibangun ulang sesuai bentuk baru. Hanya satu arah dan memerlukan Studio. Lihat [Tautan .3dm langsung](topic:live-3dm-link).
- **Lihat kursor satu sama lain.** Dalam sesi bersama, kursor setiap orang tampil dengan namanya dan fitur yang sedang dipilihnya. Lihat [Bekerja langsung bersama orang lain](topic:work-live).
- **Lantai pabrik.** Nyalakan add-on Lantai pabrik di {{ui:Pengaturan}} › {{ui:Add-on}}. Setelah Anda memposting program di {{ui:Manufaktur}}, tabnya dapat {{ui:Tambahkan ke antrean kerja pabrik}} atau {{ui:Simpan sebagai file job}}. Ia tidak pernah mengirim atau menjalankan mesin.

### Analisis dan bagian

- **Add-on Solid FEM.** Nyalakan {{ui:Solid FEM}} di {{ui:Pengaturan}} › {{ui:Add-on}} (ia mati sampai Anda menyalakannya) dan tab {{ui:Solid FEM}} muncul di panel kanan. {{ui:Mesh benda}}, pilih muka tetap dan beban di tampilan 3D, {{ui:Selesaikan}}, dan gambar perpindahan, tegangan von Mises, atau bentuk mode dengan {{ui:Tampilkan pada model}}. Lihat [Solid FEM: pemeriksaan tegangan](topic:solid-fem-check).
- **Busur dalam sketsa, sepuluh cara.** Panah di sebelah {{ui:Busur}} pada bilah alat sketsa mencantumkan 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length, dan Continue. Lihat [Gambar busur dengan sepuluh metode](topic:sketch-arc-methods).
- **Ukuran baja UK.** Konstruksi las dapat memakai 976 profil baja UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); ketik ukuran seperti `305x165x40 UB`. Lihat [Batang struktur](topic:structural-members).

### Pencetakan

- **Tahap cetak.** Tombol {{ui:Tahap cetak}} pada bilah alat (add-on 3D Print, aktif secara default) menempatkan bodi benda Anda di atas bed putus-putus: {{ui:Bentangkan}}, {{ui:Putar 90°}}, {{ui:Atur di bed}}, {{ui:Muat semua di bed}}, {{ui:Pratinjau lapisan}}, lalu {{ui:Kirim ke printer 3D}} melalui USB, Klipper (Moonraker), OctoPrint, atau PrusaLink. Tidak ada yang dikirim sebelum Anda mengonfirmasi, dan benda Anda tidak pernah diubah. Untuk file STL atau 3MF, lihat [Siapkan benda untuk pencetakan 3D](topic:print-3d).
- **Pencetakan resin.** Add-on di {{ui:Pengaturan}} › {{ui:Add-on}}, semuanya mati sampai Anda menyalakannya: slicer resin, uji paparan, dan format file Elegoo GOO, SL1, Chitubox CBDDLP/CTB, dan Anycubic. Slicing berjalan di thread pekerja, sehingga halaman tetap responsif.

## Di setiap aplikasi

- Setiap petunjuk saat kursor diarahkan adalah tooltip Bootstrap.
- Tip awal memiliki tombol tutup; ia tetap tertutup.
- Baris tab sebuah panel yang tidak muat digulir ke samping alih-alih terpotong.
- Tab peramban menampilkan nama dokumen yang terbuka sebelum PartCraft | CadCraft.
- {{ui:Pengaturan}} menampilkan {{ui:Tata letak}} ruang kerja sebagai daftar pilihan, dan kotak bahasa mencantumkan setiap bahasa yang ada di build.
- Berat dan Suhu adalah jenis satuan dalam pengaturan Satuan.

## Diperbaiki

- Menu Busur sketsa kini mencantumkan setiap metode.
- Bilah add-on dan judul tab peramban diperbaiki pada 2026-11-09.

## Batasan jujur

- STEP eksak dibaca kembali di OpenCascade (solid yang valid, volume sama dengan yang dihitung dengan tangan). Belum dibuka di setiap program CAD atau CAM, dan rakitan tidak ditulis sebagai STEP eksak.
- Belum ada yang dicetak di printer sungguhan. Slicing, G-code, dan file resin dibaca kembali oleh program kami sendiri atau printer pengganti; tidak ada format resin yang dimuat di printer, dan ukuran serta paparan printer adalah titik awal.
- Solid FEM bersifat linear, isotropik, dan elastis, satu material per benda, tanpa kontak, yielding, atau buckling. Tegangan di muka tetap dan sudut tajam bergantung pada mesh. Ia adalah alat bantu pemeriksaan, belum ditinjau oleh insinyur.
- Waktu untuk rakitan besar diukur pada server tanpa GPU; bingkai dengan detail penuh untuk 20.000 bagian tetap memakan waktu beberapa detik di sana.
- Fillet bekerja pada pasangan muka; tidak ada blend verteks umum dan tidak ada fillet di antara muka yang tidak bertemu.
- Tautan Rhino belum pernah berjalan di dalam Rhino atau Grasshopper sungguhan. Dokumen baru dicoba oleh dua program pada satu folder, bukan oleh dua orang pada jaringan bersama.
- Pencocokan permukaan ke scan sungguhan belum diperiksa tangan. Bahasa selain Inggris adalah draf mesin.
- Installer Windows tidak ditandatangani kode, dan image disk macOS tidak dinotarisasi. Lihat [Pemecahan masalah](topic:troubleshooting).

Perubahan sebelumnya ada di [Yang baru di 0.7](topic:whats-new-0-7).

## Sebelumnya: 0.8 dan 0.8.1

Ini yang berubah di PartCraft 0.8 dan 0.8.1, dibandingkan dengan 0.7. Simulasi menjawab saat Anda mengedit dan memberi tahu apa yang rusak lebih dulu, rakitan mendapat studi gerak, dan ruang kerja baru membuat permukaan bentuk bebas serta bagian berukuran dari fisika. 0.8.1 adalah rilis perbaikan kecil.

### Baru

**Simulasi**

- **Perbarui saat saya mengedit.** Centang {{ui:Perbarui saat saya mengedit}} di blok Selesaikan dan jawabannya mengikuti suntingan Anda. Ubah dimensi, beban, atau material dan jawaban cepat, dibuat dengan elemen empat kali lebih besar, langsung muncul; saat Anda berhenti sekitar satu detik, jawaban halus studi itu sendiri menggantikannya. Hasilnya menyatakan mana yang sedang Anda lihat. Pada kantilever baja, jawaban cepat berada dalam 1 % untuk defleksi dan sekitar 4 % untuk tegangan dibanding jawaban halusnya. Lihat [Periksa tegangan dan defleksi](topic:simulation#update-while-you-edit-live).
- **Apa yang rusak lebih dulu.** Untuk studi statik atau buckling, {{ui:Apa yang rusak lebih dulu?}} di blok **Pecahkan** menskalakan beban sampai benda menyerah. Ia mencantumkan, dari yang terburuk, faktor beban menuju yield pertama (dengan penanda merah di tempat tegangan memuncak) dan faktor beban menuju buckling. Faktor di bawah 1 berarti benda sudah menyerah saat dibebani, dan Masalah menampilkan galat. Faktor-faktor ini berasal dari studi linear, jadi hanya sebaik studi itu. Lihat [Periksa tegangan dan defleksi](topic:simulation#find-out-what-breaks-first-break-it).
- **Yielding dan kontak.** Dua jenis studi lagi: satu nonlinear, tempat material mengikuti garis lurusnya sampai tegangan yield lalu kemiringan yang lebih datar, dengan regangan plastis digambarkan; dan satu kontak, tempat bagian terpisah saling mendorong (tanpa gesekan) atau tetap menempel (terikat). Langkah beban yang tidak dapat stabil, atau bagian yang masuk terlalu jauh ke satu sama lain, muncul di panel Masalah. Gesekan, geser besar, rotasi besar, defleksi besar, dan kelelahan tidak diselesaikan. Lihat [Periksa tegangan dan defleksi](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Deck untuk CalculiX.** {{ui:Ekspor}} › {{ui:Deck CalculiX (.inp)}} menyimpan studi untuk CalculiX, program terpisah yang Anda pasang dan jalankan sendiri; {{ui:Ekspor}} › {{ui:Hasil CalculiX (.frd)}} membaca file hasilnya kembali ke mesh yang sama. PartCraft tidak pernah menjalankan program itu, dan ia memberi tahu jika benda berubah sejak deck disimpan.

**Rakitan**

- **Studi gerak.** {{ui:Rakitan}} › {{ui:Gerak}} menggerakkan satu nilai sambungan selama waktu yang Anda berikan (kecepatan konstan, dihaluskan, sinus, atau maju lalu mundur), menempatkan rakitan pada setiap langkah dengan sambungan dan loop tertutupnya, dan melaporkan apa yang bertabrakan dan seberapa dekat bagian-bagian. {{ui:Tambah titik}} memplot posisi, kecepatan, dan percepatan sebuah titik, nilai sambungan, serta clearance terhadap waktu; {{ui:Simpan CSV}} dan {{ui:Simpan plot}} menuliskannya. Setelah {{ui:Jalankan}}, bilah langkah melalui jalan memindahkan rakitan ke langkah mana pun. Pengaturan studi disimpan di file rakitan. Kecepatan dan percepatan berasal dari posisi yang direkam, jadi gunakan lebih banyak langkah bila puncak tajam terbaca rendah. Lihat [Periksa rakitan untuk tabrakan dan gerak](topic:check-assembly#a-motion-study).

**Permukaan dan bagian dari fisika**

- **Ruang kerja Permukaan.** Pilih {{ui:Permukaan}} di kotak {{ui:Ruang kerja}} untuk kurva dan permukaan NURBS di samping benda: {{ui:Kurva}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Cocokkan}}, dan {{ui:Zebra}}, dengan kontinuitas (G0, G1, atau G2) diukur pada permukaan eksak dan tepi yang lebih buruk dari yang Anda minta dicantumkan di Masalah dengan perbaikan Cocokkan. {{ui:Haluskan}} mengukur garis hull untuk titik balik dan lompatan kelengkungan, lalu membangun ulang yang tidak halus dalam toleransi Anda. Permukaan disimpan di file benda dan tidak mengubah fitur benda. Lihat [Permukaan bentuk bebas (NURBS)](topic:nurbs-surfaces).
- **Ruang kerja Engineer.** Pilih {{ui:Engineer}} di pengalih workspace, pilih generator dan klik {{ui:Baru}}: sebuah skrip menentukan ukuran bagian dari apa yang harus dilakukannya (memindahkan panas, aliran, tekanan, material, proses cetak) dengan rumus buku teks lalu membangunnya, kemudian mengembalikan angka yang dipakainya beserta sumbernya, pemeriksaan manufakturnya, dan file untuk alat analisis. Input yang sama menghasilkan bagian yang sama di komputer mana pun. Generator disimpan di bagian, dan membuka bagian tidak pernah menjalankan skrip. Lihat [Bagian dari fisika: generator](topic:engineer-generators) dan [Tulis generator](topic:write-a-generator).

**Sketsa, gambar, dan pembuatan**

- **Sketsa dari foto.** {{ui:Fitur}} › {{ui:Lainnya}} › {{ui:Sketsa dari foto…}} menelusuri gambar bagian datar di atas alas polos (garis luar dan lubang) atau gambar pena menjadi garis, busur, dan lingkaran. Anda memberikan satu panjang, memeriksa pratinjau, dan membuat sketsa. Lihat [Dasar sketsa](topic:sketch-basics#a-sketch-from-a-photo).
- **Skala dan pisah untuk pencetakan.** {{ui:Ekspor}} › {{ui:Skala untuk dicetak (STL atau 3MF)…}} menskalakan per sumbu tanpa mengubah benda, misalnya untuk tunjangan penyusutan. {{ui:Ekspor}} › {{ui:Pisahkan untuk dicetak (zip berisi potongan)…}} memotong benda yang terlalu besar untuk bed Anda menjadi potongan bernomor yang disambung dengan pasak, kunci, ekor burung, lubang dowel, atau kantong magnet. Lihat [Cetak dalam 3D](topic:print-3d).
- **Lembaran bersarang ke G-code.** {{ui:Ekspor}} › {{ui:Lembaran bersarang ke G-code}} membaca DXF yang bersarang dan membuat satu program per lembaran melalui post yang Anda pilih: lubang dan potongan dulu, lalu garis luar. Ia tidak merencanakan lead-in, urutan potong, atau tepi bersama. Lihat [Nesting part datar pada lembaran](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Gambar yang melakukan lebih banyak sendiri.** {{ui:Lembar}} › {{ui:Otomatis}} memilih lembar ukuran-A terkecil yang memuat tampilan pada skala standar terbesar hingga 1:1. {{ui:Beri dimensi pada lubang}} menempatkan tanda pusat pada setiap lubang, satu callout per ukuran, dan posisi dari sudut kiri bawah tampilan. Lihat [Buat gambar](topic:drawing-pdf).

**Di setiap aplikasi**

- **Bahasa.** Aplikasi tersedia dalam 54 bahasa. Yang selain Inggris adalah draf mesin sampai penutur asli membacanya.
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} memilih Wrap (seperti sebelumnya), 2 baris, atau 1 baris; bilah yang tidak muat digulir ke samping. Ribbon Fitur PartCraft menampilkan alat yang paling sering dipakai dalam ukuran besar dan menyembunyikan variannya di balik tombol terbagi.
- **Hubungkan AI Anda.** Studio adalah pusat untuk menghubungkan asisten milik Anda ke kedelapan aplikasi, dengan izin baca saja, saran, atau sunting per aplikasi. Asisten yang terhubung dapat menentukan ukuran bagian dari satu kalimat, misalnya braket untuk beban, menampilkan kerjanya dan setiap pemeriksaan, serta membangunnya; ia melaporkan apa yang tidak diperiksanya (konsentrasi tegangan, kelelahan, rangkak pada plastik). Lihat [Gunakan PartCraft dengan asisten AI](topic:use-with-ai-assistants).

### Diperbaiki di 0.8.1

- **Kursor membeku pada layar penuh.** Pemilihan saat kursor diarahkan kini dibatasi. Penyebabnya adalah tebakan terbaik kami dan belum dikonfirmasi dengan orang yang melaporkannya.
- **Bahasa saat berjalan.** Studio dan edisi kemasan dapat mengganti bahasa saat berjalan; sebelumnya hanya Inggris. Ini belum diuji di setiap platform: beri tahu kami jika bahasa tidak berubah.

### Belum ada di versi ini

- Hubungkan AI Anda belum selesai: hubungkan satu klik di dalam Studio, konektor hosted untuk AI peramban, kunci API milik Anda di dalam Studio, dan paket MCP yang diterbitkan belum dijanjikan. Studio tidak memiliki AI sendiri.
- Studio tidak ditandatangani kode: Windows mungkin memberi peringatan, dan macOS meminta klik kanan lalu Buka. Lihat [Pemecahan masalah](topic:troubleshooting).
- Stack-up masih satu arah: lihat [Stack-up toleransi](topic:tolerance-stackup).
- Sisanya tercantum di [Yang belum dibuat](topic:not-built-yet).

Perubahan sebelumnya ada di [Yang baru di 0.7](topic:whats-new-0-7).
