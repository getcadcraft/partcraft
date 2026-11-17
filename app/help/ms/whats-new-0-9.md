---
title: Apa yang baharu dalam 0.9
summary: PartCraft 0.9 menambah fillet antara muka dan penebalan kepada pepejal, himpunan beribu bahagian, peti simpanan Dokumen dengan semakan, add-on Solid FEM untuk semakan tegasan, sepuluh kaedah lengkung, saiz keluli UK, peringkat cetakan dan add-on cetakan resin.
keywords: apa yang baharu, keluaran, nota keluaran, log perubahan, 0.9, fillet antara muka, bola bergolek, fillet beberapa tepi, tebalkan, pepejal daripada permukaan, step shell, iges solid, fillet imbasan, himpunan besar, paparan ringan, 20000 bahagian, dokumen, peti simpanan, daftar keluar, semakan, keluaran, tempat digunakan, pautan rhino, grasshopper, 3dm, kursor, lantai kilang, barisan kerja, solid fem, unsur terhingga, von mises, frekuensi asli, kaedah lengkung, lengkung 3 titik, sekitan keluli UK, buku biru, peringkat cetak, resin, goo, ctb, katil, ratakan, apa yang baharu, log perubahan, perubahan, 0.8, 0.8.1, versi, ciri baharu, analisis langsung, kemas kini semasa menyunting, pecahkan, apa yang pecah dahulu, faktor beban, tak linear, alah, terikan plastik, sentuhan, calculix, kajian gerakan, kelegaan, permukaan, nurbs, licinkan, hull, zebra, jurutera, penjana, badan terjana, lakaran daripada foto, skala untuk cetakan, pisahkan untuk cetakan, pengecutan, helaian bersarang, g-code, lukisan, dimensikan lubang, pembantu, mcp, bahasa, baris bar alat
from: 96d9fbfa
---

Ini ialah perubahan dalam PartCraft 0.9, berbanding 0.8.1. Permukaan bebas kini menutup menjadi pepejal, himpunan beribu bahagian kekal boleh digunakan, peti simpanan Dokumen menyimpan semakan, dan add-on Solid FEM menyemak tegasan dalam bahagian. Setiap item menyatakan di mana untuk mencarinya.

## Baharu dalam 0.9.1

- **Eksport STEP tepat.** {{ui:Eksport}} › {{ui:STEP AP242 (pepejal tepat)}} dan {{ui:STEP AP214 (pepejal tepat)}} kini berfungsi. Lubang, bos, fillet, kon, sfera dan torus ditulis pada permukaan sebenar mereka dengan bulatan sebenar sebagai tepi, supaya program CAD atau CAM lain boleh mengenali lubang sebagai lubang. Sisi splin, benang yang dimodelkan dan jejaring yang diimport kekal sebagai facet rata dalam pepejal yang sama. Lihat [Eksport untuk cetakan, STEP dan DXF](topic:export-files#for-other-cad-programs-step).
- **STEP masuk, STEP tepat keluar.** Fail STEP yang anda buka mengekalkan muka rata, silinder, kon, sfera dan torusnya sendiri, supaya {{ui:Eksport}} › {{ui:STEP AP242 (pepejal tepat)}} menulisnya semula sebagai permukaan sebenar dan bukannya facet: rasuk pembekal dengan lubang bolt keluar dengan muka yang sama seperti ketika ia masuk, ditambah apa sahaja yang anda potong padanya. Splin, muka tersapu dan berputar bagi fail kekal sebagai facet, begitu juga badan daripada STL, OBJ dan 3MF. Buka semula fail STEP bagi bahagian yang disimpan lebih awal. Lihat [Buka fail STEP dan bina di atasnya](topic:import-step).
- **Bulatan sebenar dalam DXF muka.** {{ui:Eksport}} › {{ui:DXF bagi lakaran atau muka rata}} dengan muka rata dipilih kini menulis lubang bulat sebagai bulatan, dengan pusat dan jejari lubang itu sendiri, untuk meja laser, plasma atau waterjet. Tepi bulat lain kekal sebagai facet.
- **STEP tepat untuk bengkel.** Dalam {{ui:Pembuatan}}, {{ui:STEP tepat (koordinat kerja)}} menulis bahagian dengan asalnya pada asal kerja persediaan dan Z sepanjang paksi alat, koordinat yang digunakan oleh G-code. Lihat [Buat laluan alat dan G-code](topic:manufacture#exact-step-for-the-shop).

## Baharu

### Permukaan dan pepejal

- **Fillet antara muka.** Pilih {{ui:Permukaan}} dalam kotak {{ui:Ruang kerja}}, kemudian {{ui:Fillet antara muka}}. Pilih dua muka bagi satu pepejal, taip jejari (dan {{ui:Jejari di hujung (mm, 0 = sama)}} untuk jejari yang berubah sepanjang tepi). Baris hasil menyatakan sejauh mana fillet itu daripada bola bergolek yang ideal, dan jejari yang tidak sesuai ditolak dengan muka dinamakan. {{ui:Fillet beberapa tepi}} membundarkan banyak tepi dalam satu langkah; tandakan {{ui:Bucu (tampalan sfera tempat tiga bertemu)}} untuk bucu sfera tempat tiga tepi bulat bagi muka rata bertemu. Lihat [Permukaan bebas (NURBS)](topic:nurbs-surfaces).
- **Tebalkan menjadi pepejal.** {{ui:Tebalkan menjadi pepejal}} dalam ruang kerja yang sama memberi permukaan satu ketebalan; {{ui:Sisi yang satu lagi}} menumbuhkannya ke arah lain. Lipatan atau persilangan sendiri ditolak dengan permukaan dan tempat dinamakan.
- **Pepejal daripada permukaan.** Permukaan yang dipotong boleh dicantum dengan gabungan, tolak dan persilangan, dan dibakar ke dalam bahagian sebagai satu langkah buat asal. STEP menulis pepejal sebagai satu cangkerang tertutup dan IGES sebagai satu pepejal; kedua-duanya dibaca semula sebagai pepejal. Jika muka tidak berpasangan tepi demi tepi, fail mendapat muka berasingan dan bar status menyatakannya. Pepejal juga boleh dibuat dalam penyunting nod; lihat [Penyunting nod](topic:nodes).
- **Fillet rim dan berubah dalam imbasan.** Apabila anda memasang permukaan pada imbasan, fillet rim (torus) dan fillet jejari berubah sepanjang tepi yang agak lurus turut dicari dan disenaraikan dengan jejarinya. Ia diuji hanya pada imbasan rekaan.

### Himpunan, dokumen dan pautan

- **Himpunan besar.** Bahagian yang merupakan salinan berkongsi satu jejaring, dan {{ui:Pandangan}} › {{ui:Paparan ringan}} melukis kotak supaya pandangan kekal bergerak (ia dihidupkan sendiri untuk himpunan yang sangat besar; pemilihan dan sambungan masih menggunakan bahagian sebenar). Pepohon bahagian menunjukkan baris pertamanya dan butang {{ui:Papar 700 lagi}} untuk selebihnya. Fail himpunan boleh mengandungi sehingga 50,000 kejadian dan 100,000 sambungan. Lihat [Bina himpunan](topic:build-assembly).
- **Dokumen.** {{ui:Dokumen…}} dalam kumpulan **Fail** membuka kotak dialog di atas folder projek: daftar keluar dan daftar masuk, huruf semakan, keadaan (kerja dalam proses, untuk semakan, dikeluarkan, usang), sejarah, tempat digunakan dan senarai bahan. Lihat [Dokumen dan semakan (peti simpanan)](topic:documents-walkthrough).
- **Pautan Rhino langsung.** Satu skrip, `cadcraft_link.py`, memerhati dokumen Rhino atau Grasshopper dan hanya menolak apa yang berubah ke dalam PartCraft, di mana ciri yang diimport dibina semula mengikut bentuk baharu. Ia satu hala dan memerlukan Studio. Lihat [Pautan .3dm langsung](topic:live-3dm-link).
- **Lihat kursor antara satu sama lain.** Dalam sesi kongsi, kursor setiap orang dipaparkan dengan namanya dan ciri yang mereka pilih. Lihat [Bekerja secara langsung dengan orang lain](topic:work-live).
- **Lantai kilang.** Hidupkan add-on Lantai kilang dalam {{ui:Tetapan}} › {{ui:Add-on}}. Selepas anda menghantar program dalam {{ui:Pembuatan}}, tabnya boleh {{ui:Tambah ke barisan kerja kilang}} atau {{ui:Simpan sebagai fail kerja}}. Ia tidak pernah menghantar atau memulakan mesin.

### Analisis dan bahagian

- **Add-on Solid FEM.** Hidupkan {{ui:Solid FEM}} dalam {{ui:Tetapan}} › {{ui:Add-on}} (ia dimatikan sehingga anda berbuat demikian) dan tab {{ui:Solid FEM}} muncul dalam panel kanan. {{ui:Jejaringkan bahagian}}, pilih muka tetap dan beban dalam pandangan 3D, {{ui:Selesaikan}}, dan lukis anjakan, tegasan von Mises atau bentuk mod dengan {{ui:Papar pada model}}. Lihat [Solid FEM: semakan tegasan](topic:solid-fem-check).
- **Lengkok dalam lakaran, sepuluh cara.** Anak panah di sebelah {{ui:Lengkok}} dalam bar alat lakaran menyenaraikan 3 Titik, Mula Pusat Akhir, Mula Pusat Sudut, Mula Pusat Panjang, Mula Akhir Sudut, Mula Akhir Arah, Mula Akhir Jejari, Pusat Mula Akhir, Pusat Mula Sudut, Pusat Mula Panjang dan Teruskan. Lihat [Lukis lengkok dengan sepuluh kaedah](topic:sketch-arc-methods).
- **Saiz keluli UK.** Bahagian kimpalan boleh menggunakan 976 keratan UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); taip saiz seperti `305x165x40 UB`. Lihat [Ahli struktur](topic:structural-members).

### Cetakan

- **Peringkat cetak.** Butang {{ui:Peringkat cetak}} dalam bar alat (add-on 3D Print, dihidupkan secara lalai) meletakkan badan bahagian anda di atas katil putus-putus: {{ui:Ratakan}}, {{ui:Pusing 90°}}, {{ui:Susun di atas katil}}, {{ui:Muat semua di atas katil}}, {{ui:Pratonton lapisan}}, kemudian {{ui:Hantar ke pencetak 3D}} melalui USB, Klipper (Moonraker), OctoPrint atau PrusaLink. Tiada apa dihantar sehingga anda mengesahkan, dan bahagian anda tidak pernah berubah. Bagi fail STL atau 3MF sebaliknya, lihat [Sediakan bahagian untuk cetakan 3D](topic:print-3d).
- **Cetakan resin.** Add-on dalam {{ui:Tetapan}} › {{ui:Add-on}}, semuanya dimatikan sehingga anda menghidupkannya: penghiris resin, ujian pendedahan, dan format fail Elegoo GOO, SL1, Chitubox CBDDLP/CTB dan Anycubic. Penghirisan berjalan pada benang pekerja, jadi halaman kekal responsif.

## Dalam setiap aplikasi

- Setiap petunjuk hover ialah tip alat Bootstrap.
- Tip permulaan mempunyai butang tutup; ia kekal tertutup.
- Baris tab panel yang tidak muat bergolek ke sisi dan bukannya dipotong.
- Tab pelayar menunjukkan nama dokumen yang terbuka sebelum PartCraft | CadCraft.
- {{ui:Tetapan}} memaparkan {{ui:Susun atur}} ruang kerja sebagai senarai juntai pilihan, dan kotak bahasa menyenaraikan setiap bahasa yang ada dalam binaan.
- Berat dan Suhu ialah jenis unit dalam tetapan Unit.

## Diperbetulkan

- Menu Lengkok lakaran kini menyenaraikan setiap kaedah.
- Bar alat add-on dan tajuk tab pelayar telah diperbetulkan pada 2026-11-09.

## Had yang jujur

- STEP tepat dibaca semula dalam OpenCascade (pepejal sah, isi padu sama dengan yang dikira dengan tangan). Ia belum dibuka dalam setiap program CAD atau CAM, dan himpunan tidak ditulis sebagai STEP tepat.
- Tiada apa-apa dicetak pada pencetak sebenar. Penghirisan, G-code dan fail resin dibaca semula oleh program kami sendiri atau pencetak olok-olok; tiada format resin dimuatkan pada pencetak, dan saiz serta pendedahan pencetak ialah titik permulaan.
- Solid FEM bersifat linear, isotropik dan elastik, satu bahan bagi setiap bahagian, tanpa sentuhan, alahan atau lengkok. Tegasan pada muka tetap dan bucu tajam bergantung pada jaring. Ia alat semakan, bukan disemak oleh jurutera.
- Masa untuk himpunan besar datang daripada pelayan tanpa GPU; bingkai butiran penuh bagi 20,000 bahagian masih mengambil beberapa saat di sana.
- Fillet berfungsi pada pasangan muka; tiada percampuran bucu umum dan tiada fillet antara muka yang tidak bertemu.
- Pautan Rhino belum pernah dijalankan dalam Rhino atau Grasshopper sebenar. Dokumen dicuba oleh dua program pada satu folder, bukan oleh dua orang pada perkongsian rangkaian.
- Pemasangan permukaan pada imbasan sebenar belum disemak dengan tangan. Bahasa selain Inggeris ialah draf mesin.
- Pemasang Windows tidak ditandatangani kod, dan imej cakera macOS tidak dinotarikan. Lihat [Penyelesaian masalah](topic:troubleshooting).

Perubahan terdahulu terdapat dalam [Apa yang baharu dalam 0.7](topic:whats-new-0-7).

## Terdahulu: 0.8 dan 0.8.1

Ini ialah perubahan dalam PartCraft 0.8 dan 0.8.1, berbanding 0.7. Simulasi menjawab semasa anda menyunting dan memberitahu apa yang pecah dahulu, himpunan mendapat kajian gerakan, dan ruang kerja baharu membuat permukaan bebas dan bahagian bersaiz mengikut fizik. 0.8.1 ialah keluaran pembetulan kecil.

### Baharu

**Simulasi**

- **Kemas kini semasa saya edit.** Tandakan {{ui:Kemas kini semasa saya edit}} dalam blok Selesaikan dan jawapan mengikut suntingan anda. Tukar dimensi, beban atau bahan dan jawapan pantas, yang dibuat dengan elemen empat kali lebih besar, muncul serta-merta; apabila anda berhenti kira-kira sesaat, jawapan halus kajian itu sendiri menggantikannya. Hasil menyatakan yang mana satu anda sedang lihat. Pada julur keluli, jawapan pantas berada dalam lingkungan 1 % untuk pesongan dan kira-kira 4 % untuk tegasan berbanding jawapan halus. Lihat [Semak tegasan dan pesongan](topic:simulation#update-while-you-edit-live).
- **Apa yang pecah dahulu.** Bagi kajian statik atau lengkok, {{ui:Apa yang patah dahulu?}} dalam blok **Pecahkan** menskalakan beban sehingga bahagian mengalah. Ia menyenaraikan, paling teruk dahulu, faktor beban kepada alah pertama (dengan penanda merah tempat tegasan memuncak) dan faktor beban kepada lengkok. Faktor di bawah 1 bermakna bahagian sudah mengalah seperti yang dimuatkan, dan Masalah menunjukkan ralat. Faktor datang daripada kajian linear, jadi ia sebaik kajian itu. Lihat [Semak tegasan dan pesongan](topic:simulation#find-out-what-breaks-first-break-it).
- **Alahan dan sentuhan.** Dua lagi jenis kajian: satu tak linear, di mana bahan mengikuti garis lurusnya sehingga tegasan alah dan kemudian cerun yang lebih landai, dengan terikan plastik diplot, dan satu sentuhan, di mana kepingan berasingan menolak satu sama lain (tanpa geseran) atau kekal melekat (terikat). Langkah beban yang tidak dapat reda, atau kepingan yang terbenam terlalu jauh antara satu sama lain, ditunjukkan dalam panel Masalah. Geseran, gelongsor besar, putaran besar, pesongan besar dan lesu tidak diselesaikan. Lihat [Semak tegasan dan pesongan](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Fail untuk CalculiX.** {{ui:Eksport}} › {{ui:Fail CalculiX (.inp)}} menyimpan kajian untuk CalculiX, program berasingan yang anda pasang dan jalankan sendiri; {{ui:Eksport}} › {{ui:Keputusan CalculiX (.frd)}} membaca semula fail keputusannya ke jaring yang sama. PartCraft tidak pernah memulakan program itu, dan ia memberitahu jika bahagian berubah sejak fail itu disimpan.

**Himpunan**

- **Kajian gerakan.** {{ui:Himpunan}} › {{ui:Gerakan}} memacu nilai satu sambungan sepanjang masa yang anda berikan (kelajuan malar, dilonggarkan, sinus, atau keluar dan kembali), meletakkan himpunan pada setiap langkah dengan sambungan dan gelungnya yang tertutup, dan melaporkan apa yang bertembung dan sejauh mana bahagian menghampiri. {{ui:Tambah titik}} memplot kedudukan, kelajuan dan pecutan satu titik, nilai sambungan dan kelegaan terhadap masa; {{ui:Simpan CSV}} dan {{ui:Simpan plot}} menulisnya keluar. Selepas {{ui:Jalankan}}, Langkah melalui bar larian menggerakkan himpunan ke mana-mana langkah. Tetapan kajian disimpan dalam fail himpunan. Kelajuan dan pecutan datang daripada kedudukan yang dirakam, jadi gunakan lebih banyak langkah jika puncak tajam kelihatan rendah. Lihat [Semak himpunan untuk pertembungan dan gerakan](topic:check-assembly#a-motion-study).

**Permukaan dan bahagian daripada fizik**

- **Ruang kerja Permukaan.** Pilih {{ui:Permukaan}} dalam kotak {{ui:Ruang kerja}} untuk lengkung dan permukaan NURBS di sebelah bahagian: {{ui:Lengkung}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Padan}} dan {{ui:Zebra}}, dengan kesinambungan (G0, G1 atau G2) diukur pada permukaan tepat dan tepi yang lebih teruk daripada yang anda minta disenaraikan dalam Masalah dengan pembetulan Padan. {{ui:Licinkan}} mengukur garis hull untuk titik lengkok dan lompatan kelengkungan, dan membina semula yang tidak licin dalam toleransi anda. Permukaan disimpan dalam fail bahagian dan tidak mengubah ciri bahagian. Lihat [Permukaan bebas (NURBS)](topic:nurbs-surfaces).
- **Ruang kerja Jurutera.** Pilih {{ui:Jurutera}} dalam kotak ruang kerja, pilih penjana dan klik {{ui:Baharu}}: skrip menentukan saiz bahagian daripada tugasnya (haba untuk bergerak, aliran, tekanan, bahan, proses cetakan) dengan formula buku teks dan membinanya, kemudian memberikan semula nombor yang digunakannya dengan sumbernya, semakan pembuatannya dan fail untuk alat analisis. Input yang sama memberikan bahagian yang sama pada mana-mana komputer. Penjana disimpan dalam bahagian, dan membuka bahagian tidak pernah menjalankan skrip. Lihat [Bahagian daripada fizik: penjana](topic:engineer-generators) dan [Tulis penjana](topic:write-a-generator).

**Lakaran, lukisan dan pembuatan**

- **Lakaran daripada foto.** {{ui:Ciri}} › {{ui:Lagi}} › {{ui:Lakaran daripada foto…}} menjejak gambar bahagian rata atas latar biasa (garis luar dan lubang) atau lukisan pen kepada garisan, lengkok dan bulatan. Anda memberikan satu panjang, menyemak pratonton dan membuat lakaran. Lihat [Asas lakaran](topic:sketch-basics#a-sketch-from-a-photo).
- **Skala dan pisah untuk cetakan.** {{ui:Eksport}} › {{ui:Skala untuk cetakan (STL atau 3MF)…}} menskalakan mengikut paksi tanpa mengubah bahagian, contohnya dengan elaun pengecutan. {{ui:Eksport}} › {{ui:Pisahkan untuk cetakan (zip kepingan)…}} memotong bahagian yang terlalu besar untuk katil anda kepada kepingan bernombor yang dicantum dengan pasak, kunci, ekor burung, lubang dowel atau poket magnet. Lihat [Cetak dalam 3D](topic:print-3d).
- **Helaian bersarang kepada G-code.** {{ui:Eksport}} › {{ui:Helaian bersarang kepada G-code}} membaca DXF bersarang dan membuat satu program bagi setiap helaian melalui pos yang anda pilih: lubang dan potongan dahulu, kemudian garis luar. Ia tidak merancang lead-in, susunan pemotongan atau tepi dikongsi. Lihat [Sarangkan bahagian rata pada helaian](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Lukisan yang melakukan lebih banyak sendiri.** {{ui:Helaian}} › {{ui:Automatik}} memilih helaian saiz-A terkecil yang memuatkan pandangan pada skala piawai terbesar sehingga 1:1. {{ui:Dimensikan lubang}} meletakkan tanda pusat pada setiap lubang, satu callout bagi setiap saiz dan kedudukan dari sudut kiri bawah pandangan. Lihat [Buat lukisan](topic:drawing-pdf).

**Dalam setiap aplikasi**

- **Bahasa.** Aplikasi datang dalam 54 bahasa. Yang selain Inggeris ialah draf mesin sehingga penutur asli membacanya.
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Baris bar alat}} memilih Balut (seperti dahulu), 2 baris atau 1 baris; bar yang tidak muat bergolek ke sisi. Reben Ciri PartCraft memaparkan alat paling kerap digunakan dengan besar dan menyembunyikan varian di belakang butang berpecah.
- **Sambungkan AI anda.** Studio ialah hab untuk menyambungkan pembantu anda sendiri kepada kesemua lapan aplikasi, dengan kebenaran baca sahaja, cadang atau sunting bagi setiap aplikasi. Pembantu yang bersambung boleh menentukan saiz bahagian daripada satu ayat, seperti kurungan untuk beban, menunjukkan kerjanya dan setiap semakan, dan membinanya; ia melaporkan apa yang tidak disemaknya (kepekatan tegasan, lesu, rayapan dalam plastik). Lihat [Gunakan PartCraft dengan pembantu AI](topic:use-with-ai-assistants).

### Diperbetulkan dalam 0.8.1

- **Kebekuan kursor skrin penuh.** Pemilihan penunjuk kini dihadkan. Puncanya ialah bacaan terbaik kami dan belum disahkan dengan orang yang melaporkannya.
- **Bahasa semasa larian.** Studio dan edisi berbungkus boleh bertukar bahasa semasa berjalan; sebelum ini ia hanya Inggeris. Ini belum diuji pada setiap platform: beritahu kami jika bahasa tidak bertukar.

### Belum ada dalam versi ini

- Sambungkan AI anda belum siap: sambungan satu klik dalam Studio, penyambung hos untuk AI pelayar, kunci API anda sendiri dalam Studio dan pakej MCP yang diterbitkan tidak dijanjikan. Studio tidak mempunyai AI sendiri.
- Studio tidak ditandatangani kod: Windows mungkin memberi amaran, dan macOS meminta klik kanan kemudian Buka. Lihat [Penyelesaian masalah](topic:troubleshooting).
- Kekangan tumpukan masih satu arah: lihat [Analisis toleransi tumpukan](topic:tolerance-stackup).
- Yang lain disenaraikan dalam [Apa yang belum dibina](topic:not-built-yet).

Perubahan terdahulu terdapat dalam [Apa yang baharu dalam 0.7](topic:whats-new-0-7).
