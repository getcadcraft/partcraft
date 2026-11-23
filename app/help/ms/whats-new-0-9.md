---
title: Perkara baharu dalam 0.9 (terdahulu)
summary: PartCraft 0.9 menambah fillet antara muka dan penebalan menjadi pepejal, himpunan beribu-ribu bahagian, peti Dokumen dengan semakan, add-on FEM Pepejal untuk menyemak tegasan, sepuluh kaedah lengkok, saiz keluli UK, peringkat cetakan dan add-on cetakan resin.
keywords: perkara baharu 0.9, keluaran terdahulu, perkara baharu, what's new, nota keluaran, changelog, 0.9, fillet antara muka, bola bergolek, fillet beberapa tepi, tebalkan, pepejal daripada permukaan, step shell, iges solid, fillet imbasan, himpunan besar, paparan ringan, 20000 bahagian, dokumen, peti, daftar keluar, semakan, keluaran, di mana digunakan, pautan rhino, grasshopper, 3dm, kursor, lantai kilang, barisan kerja, solid fem, unsur terhingga, von mises, frekuensi semula jadi, kaedah lengkok, lengkok 3 titik, seksyen keluli UK, blue book, peringkat cetakan, resin, goo, ctb, katil, ratakan, 0.8, 0.8.1, versi, ciri baharu, analisis langsung, kemas kini semasa edit, pecahkan, apa yang patah dahulu, faktor beban, tidak linear, alah, terikan plastik, sentuhan, calculix, kajian gerakan, kelegaan, permukaan, nurbs, licinkan, zebra, jurutera, penjana, badan dijana, lakaran daripada foto, skala untuk cetakan, bahagi untuk cetakan, pengecutan, helaian tersusun, g-code, lukisan, dimensikan lubang, pembantu, mcp, bahasa, baris bar alat
from: 1dafd7c8
---

Ini yang berubah dalam PartCraft 0.9, berbanding dengan 0.8.1. Permukaan bentuk bebas kini menutup menjadi pepejal, himpunan beribu-ribu bahagian kekal boleh digunakan, peti Dokumen menyimpan semakan, dan add-on FEM Pepejal menyemak tegasan dalam bahagian. Setiap item menyatakan di mana untuk mencarinya.

## Baharu dalam 0.9.1

- **Eksport STEP tepat.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} dan {{ui:STEP AP214 (exact solid)}} kini berfungsi. Lubang, bos, fillet, kon, sfera dan torus ditulis pada permukaan sebenar mereka dengan bulatan sebenar sebagai tepi, supaya program CAD atau CAM lain boleh mengenali lubang sebagai lubang. Sisi splin, benang yang dimodelkan dan jaringan yang diimport kekal sebagai faset rata dalam pepejal yang sama. Lihat [Eksport untuk cetakan, STEP dan DXF](topic:export-files#for-other-cad-programs-step).
- **STEP masuk, STEP tepat keluar.** Fail STEP yang anda buka mengekalkan muka rata, silinder, kon, sfera dan torusnya sendiri, jadi {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} menulisnya semula sebagai permukaan sebenar dan bukannya faset: rasuk pembekal dengan lubang bolt keluar dengan muka yang sama seperti ketika ia masuk, ditambah apa sahaja yang anda potong ke dalamnya. Muka splin, sapuan dan putaran fail kekal sebagai faset, begitu juga badan daripada STL, OBJ dan 3MF. Buka semula fail STEP bagi bahagian yang disimpan lebih awal. Lihat [Buka fail STEP dan bina di atasnya](topic:import-step).
- **Bulatan sebenar dalam DXF muka.** {{ui:Export}} › {{ui:DXF of the sketch or flat face}} dengan muka rata yang dipilih kini menulis lubang bulat sebagai bulatan, dengan pusat dan jejari lubang itu sendiri, untuk meja laser, plasma atau jet air. Tepi bulat yang lain masih faset.
- **STEP tepat untuk bengkel.** Dalam {{ui:Manufacture}}, {{ui:Exact STEP (work coordinates)}} menulis bahagian dengan asalnya di asal kerja persediaan dan Z sepanjang paksi alat, iaitu koordinat yang digunakan oleh G-code. Lihat [Buat laluan alat dan G-code](topic:manufacture#exact-step-for-the-shop).

## Baharu

### Permukaan dan pepejal

- **Fillet antara muka.** Pilih {{ui:Surfaces}} dalam kotak {{ui:Workspace}}, kemudian Fillet antara muka. Pilih dua muka bagi satu pepejal, dan taip jejari (serta {{ui:Radius at the end (mm, 0 = the same)}} untuk jejari yang berubah sepanjang tepi). Baris hasil menyatakan sejauh mana fillet itu daripada bola bergolek yang ideal, dan jejari yang tidak sesuai ditolak dengan muka yang dinamakan. {{ui:Fillet several edges}} membundarkan banyak tepi dalam satu langkah; tandai {{ui:Corners (sphere patch where three meet)}} untuk bucu sfera tempat tiga tepi bulat bagi muka rata bertemu. Lihat [Permukaan bentuk bebas (NURBS)](topic:nurbs-surfaces).
- **Tebalkan menjadi pepejal.** Tebalkan menjadi pepejal dalam ruang kerja yang sama memberi permukaan satu ketebalan; {{ui:Other side}} menumbuhkannya ke arah yang lain. Lipatan atau persilangan sendiri ditolak, dengan permukaan dan tempatnya dinamakan.
- **Pepejal daripada permukaan.** Permukaan yang dipangkas boleh dicantumkan dengan cantum, tolak dan silang, serta dibakar ke dalam bahagian sebagai satu langkah buat asal. STEP menulis pepejal sebagai satu cangkerang tertutup dan IGES sebagai satu pepejal; kedua-duanya dibaca semula sebagai pepejal. Jika muka tidak berpasangan tepi demi tepi, fail mendapat muka berasingan dan baris status menyatakannya. Pepejal juga boleh dibuat dalam penyunting nod; lihat [Penyunting nod](topic:nodes).
- **Fillet tepi dan fillet boleh ubah dalam imbasan.** Apabila anda memasang permukaan pada imbasan, fillet tepi (torus) dan fillet jejari boleh ubah sepanjang tepi yang agak lurus turut dicari dan disenaraikan dengan jejarinya. Ia hanya diuji pada imbasan rekaan.

### Himpunan, dokumen dan pautan

- **Himpunan besar.** Bahagian yang merupakan salinan berkongsi satu jaringan, dan {{ui:Views}} › {{ui:Lightweight display}} melukis kotak supaya paparan terus bergerak (ia hidup sendiri untuk himpunan yang sangat besar; pemilihan dan sendi masih menggunakan bahagian sebenar). Pepohon bahagian menunjukkan baris pertamanya dan butang {{ui:Show 700 more}} untuk yang selebihnya. Fail himpunan boleh memuatkan sehingga 50,000 contoh dan 100,000 sendi. Lihat [Bina himpunan](topic:build-assembly).
- **Dokumen.** {{ui:Documents…}} dalam kumpulan **Fail** membuka kotak dialog ke atas folder projek: daftar keluar dan daftar masuk, huruf semakan, keadaan (kerja dalam proses, untuk semakan, dikeluarkan, usang), sejarah, di mana digunakan dan senarai bahan. Lihat [Dokumen dan semakan (peti)](topic:documents-walkthrough).
- **Pautan Rhino langsung.** Satu skrip, `cadcraft_link.py`, memerhatikan dokumen Rhino atau Grasshopper dan menolak hanya apa yang berubah ke dalam PartCraft, di mana ciri yang diimport dibina semula pada bentuk baharu. Ia satu hala dan memerlukan Studio. Lihat [Pautan .3dm langsung](topic:live-3dm-link).
- **Lihat kursor antara satu sama lain.** Dalam sesi kongsi, kursor setiap orang ditunjukkan bersama namanya dan ciri yang dipilihnya. Lihat [Bekerja secara langsung bersama orang lain](topic:work-live).
- **Lantai kilang.** Hidupkan add-on Lantai kilang dalam {{ui:Settings}} › {{ui:Add-ons}}. Selepas anda menghantar program dalam {{ui:Manufacture}}, tabnya boleh {{ui:Add to the factory job queue}} atau {{ui:Save as a job file}}. Ia tidak pernah menghantar atau memulakan mesin.

### Analisis dan bahagian

- **Add-on FEM Pepejal.** Hidupkan {{ui:Solid FEM}} dalam {{ui:Settings}} › {{ui:Add-ons}} (ia mati sehingga anda menghidupkannya) dan tab {{ui:Solid FEM}} muncul dalam panel kanan. {{ui:Mesh the part}}, pilih muka tetap dan beban dalam paparan 3D, {{ui:Solve}}, dan lukis anjakan, tegasan von Mises atau bentuk mod dengan {{ui:Show on the model}}. Lihat [FEM pepejal: semakan tegasan](topic:solid-fem-check).
- **Lengkok dalam lakaran, sepuluh cara.** Anak panah di sebelah {{ui:Arc}} dalam bar alat lakaran menyenaraikan 3 titik, Mula Pusat Akhir, Mula Pusat Sudut, Mula Pusat Panjang, Mula Akhir Sudut, Mula Akhir Arah, Mula Akhir Jejari, Pusat Mula Akhir, Pusat Mula Sudut, Pusat Mula Panjang dan Teruskan. Lihat [Lukis lengkok dengan sepuluh kaedah](topic:sketch-arc-methods).
- **Saiz keluli UK.** Bahagian kimpalan boleh menggunakan 976 seksyen UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); taip saiz seperti `305x165x40 UB`. Lihat [Ahli struktur](topic:structural-members).

### Cetakan

- **Peringkat cetakan.** Butang {{ui:Print stage}} dalam bar alat (add-on Cetakan 3D, dihidupkan secara lalai) meletakkan badan bahagian anda di atas katil putus-putus: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, kemudian {{ui:Send to 3D printer}} melalui USB, Klipper (Moonraker), OctoPrint atau PrusaLink. Tiada apa dihantar sehingga anda mengesahkannya, dan bahagian anda tidak pernah diubah. Untuk fail STL atau 3MF, lihat [Sediakan bahagian untuk cetakan 3D](topic:print-3d).
- **Cetakan resin.** Add-on dalam {{ui:Settings}} › {{ui:Add-ons}}, semuanya mati sehingga anda menghidupkannya: pemotong resin, ujian pendedahan, dan format fail Elegoo GOO, SL1, Chitubox CBDDLP/CTB dan Anycubic. Pemotongan berjalan pada urutan pekerja, jadi halaman kekal responsif.

## Dalam setiap aplikasi

- Setiap petunjuk hover ialah tooltip Bootstrap.
- Tip permulaan mempunyai butang tutup; ia kekal tertutup.
- Baris tab panel yang tidak muat boleh digulung ke sisi dan bukannya dipotong.
- Tajuk tab pelayar menunjukkan nama dokumen yang dibuka sebelum PartCraft | CadCraft.
- {{ui:Settings}} menunjukkan {{ui:Layout}} ruang kerja sebagai senarai juntai pilihan, dan kotak bahasa menyenaraikan setiap bahasa yang ada dalam binaan.
- Berat dan Suhu ialah jenis unit dalam tetapan Unit.

## Dibetulkan

- Menu Lengkok lakaran kini menyenaraikan setiap kaedah.
- Bar alat add-on dan tajuk tab pelayar telah dibetulkan pada 2026-11-09.

## Had jujur

- STEP tepat dibaca semula dalam OpenCascade (pepejal sah, isipadu sama dengan yang dikira dengan tangan). Ia belum dibuka dalam setiap program CAD atau CAM, dan himpunan tidak ditulis sebagai STEP tepat.
- Tiada apa yang dicetak pada pencetak sebenar. Pemotongan, G-code dan fail resin dibaca semula oleh program kami sendiri atau pencetak olok-olok; tiada format resin yang dimuatkan pada pencetak, dan saiz serta pendedahan pencetak ialah titik permulaan.
- FEM Pepejal ialah linear, isotropik dan kenyal, satu bahan bagi setiap bahagian, tanpa sentuhan, alah atau lengkukan. Tegasan pada muka tetap dan bucu tajam bergantung pada jaringan. Ia alat bantu semakan, belum disemak oleh jurutera.
- Masa untuk himpunan besar datang daripada pelayan tanpa GPU; bingkai butiran penuh bagi 20,000 bahagian masih mengambil beberapa saat di sana.
- Fillet berfungsi pada pasangan muka; tiada campuran bucu umum dan tiada fillet antara muka yang tidak bertemu.
- Pautan Rhino tidak pernah dijalankan di dalam Rhino atau Grasshopper sebenar. Dokumen diuji oleh dua program pada satu folder, bukan oleh dua orang pada perkongsian rangkaian.
- Pemasangan permukaan pada imbasan sebenar belum disemak secara manual. Bahasa selain Inggeris ialah draf mesin.
- Pemasang Windows tidak ditandatangani kod, dan imej cakera macOS tidak dinotarikan. Lihat [Penyelesaian masalah](topic:troubleshooting).

Perubahan terdahulu ada dalam [Perkara baharu dalam 0.7](topic:whats-new-0-7).

## Terdahulu: 0.8 dan 0.8.1

Ini yang berubah dalam PartCraft 0.8 dan 0.8.1, berbanding 0.7. Simulasi menjawab semasa anda mengedit dan memberitahu apa yang patah dahulu, himpunan mendapat kajian gerakan, dan ruang kerja baharu membuat permukaan bentuk bebas dan bahagian yang disaiz daripada fizik. 0.8.1 ialah keluaran pembetulan kecil.

### Baharu

**Simulasi**

- **Kemas kini semasa saya edit.** Tanda {{ui:Update while I edit}} dalam blok Selesaikan dan jawapan akan mengikut suntingan anda. Tukar dimensi, beban atau bahan dan jawapan pantas, yang dibuat dengan elemen empat kali lebih besar, muncul serta-merta; apabila anda berhenti kira-kira satu saat, jawapan halus kajian itu menggantikannya. Hasil menyatakan yang mana satu anda lihat. Pada kantilever keluli, jawapan pantas berada dalam 1 % bagi pesongan dan kira-kira 4 % bagi tegasan daripada jawapan halus. Lihat [Semak tegasan dan pesongan](topic:simulation#update-while-you-edit-live).
- **Apa yang patah dahulu.** Bagi kajian statik atau lengkukan, {{ui:What breaks first?}} dalam blok **Pecahkan ia** menskalakan beban sehingga bahagian mengalah. Ia menyenaraikan, paling teruk dahulu, faktor beban kepada alah pertama (dengan penanda merah di tempat tegasan memuncak) dan faktor beban kepada lengkukan. Faktor di bawah 1 bermakna bahagian sudah mengalah seperti yang dimuatkan, dan Masalah menunjukkan ralat. Faktor ini datang daripada kajian linear, jadi ketepatannya setara dengan kajian itu. Lihat [Semak tegasan dan pesongan](topic:simulation#find-out-what-breaks-first-break-it).
- **Alah dan sentuhan.** Dua lagi jenis kajian: satu tidak linear di mana bahan mengikut garis lurusnya sehingga tegasan alah dan kemudian cerun yang lebih landai, dengan terikan plastik diplot; dan satu sentuhan di mana bahagian berasingan saling menolak (tanpa geseran) atau kekal melekat (terikat). Langkah beban yang tidak dapat diselesaikan, atau bahagian yang tenggelam terlalu dalam antara satu sama lain, ditunjukkan dalam panel Masalah. Geseran, gelongsoran besar, putaran besar, pesongan besar dan lesu tidak diselesaikan. Lihat [Semak tegasan dan pesongan](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Deck untuk CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} menyimpan kajian untuk CalculiX, program berasingan yang anda pasang dan jalankan sendiri; {{ui:Export}} › {{ui:CalculiX results (.frd)}} membaca semula fail hasilnya ke jaringan yang sama. PartCraft tidak pernah memulakan program itu, dan ia menyatakannya jika bahagian berubah sejak deck disimpan.

**Himpunan**

- **Kajian gerakan.** {{ui:Assembly}} › {{ui:Motion}} memacu satu nilai sendi sepanjang masa yang anda berikan (kelajuan malar, dilonggarkan, sinus, atau keluar dan kembali), meletakkan himpunan pada setiap langkah dengan sendi dan gelung tertutupnya, dan melaporkan apa yang berlanggar serta sejauh mana bahagian hampir. Add a point memplot kedudukan, kelajuan dan pecutan titik, nilai sendi dan kelegaan terhadap masa; {{ui:Save CSV}} dan {{ui:Save plot}} menulisnya keluar. Selepas {{ui:Run}}, bar Langkah melalui larian menggerakkan himpunan ke mana-mana langkah. Tetapan kajian disimpan dalam fail himpunan. Kelajuan dan pecutan diperoleh daripada kedudukan yang dirakam, jadi gunakan lebih banyak langkah jika puncak tajam kelihatan rendah. Lihat [Semak himpunan untuk perlanggaran dan gerakan](topic:check-assembly#a-motion-study).

**Permukaan dan bahagian daripada fizik**

- **Ruang kerja Permukaan.** Pilih {{ui:Surfaces}} dalam kotak {{ui:Workspace}} untuk lengkung dan permukaan NURBS di sebelah bahagian: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} dan {{ui:Zebra}}, dengan kesinambungan (G0, G1 atau G2) diukur pada permukaan tepat dan tepi yang lebih teruk daripada yang anda minta disenaraikan dalam Masalah dengan pembetulan Padan. {{ui:Fair}} mengukur garis lambung bagi titik lengkok dan lompatan kelengkungan, dan membina semula yang tidak licin dalam toleransi anda. Permukaan disimpan dalam fail bahagian dan tidak mengubah ciri bahagian. Lihat [Permukaan bentuk bebas (NURBS)](topic:nurbs-surfaces).
- **Ruang kerja Jurutera.** Pilih {{ui:Engineer}} dalam penukar ruang kerja, pilih penjana dan klik {{ui:New}}: skrip menyaiz bahagian daripada perkara yang ia mesti lakukan (haba untuk dipindahkan, aliran, tekanan, bahan, proses cetakan) dengan formula buku teks dan membinanya, kemudian memberikan semula nombor yang digunakan beserta sumbernya, semakan pembuatannya dan fail untuk alat analisis. Input yang sama memberi bahagian yang sama pada mana-mana komputer. Penjana disimpan dalam bahagian, dan membuka bahagian tidak pernah menjalankan skrip. Lihat [Bahagian daripada fizik: penjana](topic:engineer-generators) dan [Tulis penjana](topic:write-a-generator).

**Lakaran, lukisan dan pembuatan**

- **Lakaran daripada foto.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} mengesan gambar bahagian rata pada tanah biasa (garis luar dan lubang) atau lukisan pen kepada garisan, lengkok dan bulatan. Anda beri satu panjang, semak pratonton dan buat lakaran. Lihat [Asas lakaran](topic:sketch-basics#a-sketch-from-a-photo).
- **Skala dan bahagi untuk cetakan.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} menskala mengikut paksi tanpa mengubah bahagian, contohnya dengan elaun pengecutan. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} memotong bahagian yang terlalu besar untuk katil anda kepada kepingan bernombor yang disambung dengan pasak, kunci, ekor burung, lubang dowel atau poket magnet. Lihat [Cetak dalam 3D](topic:print-3d).
- **Helaian tersusun kepada G-code.** {{ui:Export}} › {{ui:Nested sheets to G-code}} membaca DXF tersusun dan membuat satu program bagi setiap helaian melalui pasca yang anda pilih: lubang dan potongan keluar dahulu, kemudian garis luar. Ia tidak merancang lead-in, susunan pemotongan atau tepi yang dikongsi. Lihat [Susun bahagian rata pada helaian](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Lukisan yang lebih banyak melakukan sendiri.** {{ui:Sheet}} › {{ui:Automatic}} memilih helaian saiz-A terkecil yang memuatkan pandangan pada skala piawai terbesar sehingga 1:1. {{ui:Dimension the holes}} meletakkan tanda pusat pada setiap lubang, satu panggilan bagi setiap saiz, dan kedudukan dari sudut kiri bawah pandangan. Lihat [Buat lukisan](topic:drawing-pdf).

**Dalam setiap aplikasi**

- **Bahasa.** Aplikasi tersedia dalam 54 bahasa. Yang selain Inggeris ialah draf mesin sehingga penutur asli membacanya.
- **Baris bar alat.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} memilih Balut (seperti sebelum ini), 2 baris atau 1 baris; bar yang tidak muat digulung ke sisi. Reben Ciri PartCraft menunjukkan alat yang paling kerap digunakan dengan besar dan menyembunyikan varian di sebalik butang belah.
- **Sambung AI anda.** Studio ialah hab untuk menyambungkan pembantu anda sendiri kepada kelapan-lapan aplikasi, dengan kebenaran baca sahaja, cadangkan atau sunting bagi setiap aplikasi. Pembantu yang disambungkan boleh menyaiz bahagian daripada satu ayat, seperti pendakap untuk beban, menunjukkan kerjanya dan setiap semakan, serta membinanya; ia melaporkan apa yang tidak disemaknya (tumpuan tegasan, lesu, rayapan dalam plastik). Lihat [Gunakan PartCraft dengan pembantu AI](topic:use-with-ai-assistants).

### Dibetulkan dalam 0.8.1

- **Beku kursor skrin penuh.** Pemilihan hover kini dihadkan kadarnya. Puncanya ialah bacaan terbaik kami dan tidak disahkan dengan orang yang melaporkannya.
- **Bahasa semasa berjalan.** Studio dan edisi terpek boleh menukar bahasa semasa berjalan; sebelum ini hanya Inggeris. Ini belum diuji pada setiap platform: beritahu kami jika bahasa tidak berubah.

### Belum ada dalam versi ini

- Sambung AI anda belum siap: sambung satu klik dalam Studio, penyambung hos untuk AI pelayar, kunci API anda sendiri dalam Studio dan pakej MCP yang diterbitkan belum dijanjikan. Studio tiada AI sendiri.
- Studio tidak ditandatangani kod: Windows mungkin memberi amaran, dan macOS meminta klik kanan kemudian Buka. Lihat [Penyelesaian masalah](topic:troubleshooting).
- Tindanan toleransi masih satu arah: lihat [Tindanan toleransi](topic:tolerance-stackup).
- Yang lain disenaraikan dalam [Apa yang belum dibina](topic:not-built-yet).

Perubahan terdahulu ada dalam [Perkara baharu dalam 0.7](topic:whats-new-0-7).
