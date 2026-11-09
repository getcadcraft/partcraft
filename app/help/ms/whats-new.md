---
title: Perkara baharu dalam 0.8 dan 0.8.1
summary: PartCraft 0.8 menambah analisis langsung semasa anda menyunting, semakan Apa yang patah dahulu, kajian alah dan sentuhan dengan fail dek untuk penyelesai luaran, kajian gerakan untuk himpunan, ruang kerja Permukaan untuk permukaan bebas bentuk, bahagian yang bersaiz daripada fizik dalam ruang kerja Jurutera, foto kepada lakaran, eksport untuk cetakan, helaian tersusun kepada G-code dan lukisan yang mendimensikan lubangnya. 0.8.1 membetulkan pembekuan kursor skrin penuh.
keywords: perkara baharu, apa yang baharu, nota keluaran, log perubahan, perubahan, 0.8, 0.8.1, versi, ciri baharu, analisis langsung, kemas kini semasa menyunting, patahkan, apa yang patah dahulu, faktor beban, tak linear, alah, terikan plastik, sentuhan, calculix, kajian gerakan, kelegaan, permukaan, nurbs, licinkan, lambung, zebra, jurutera, penjana, jasad dijana, lakaran daripada foto, skala untuk cetakan, pisahkan untuk cetakan, pengecutan, helaian tersusun, g-code, lukisan, dimensikan lubang, pembantu, mcp, bahasa, baris bar alat
from: 62e4dce2
---

Ini yang berubah dalam PartCraft 0.8 dan 0.8.1, berbanding dengan 0.7. Simulasi memberi jawapan semasa anda menyunting dan memberitahu anda apa yang patah dahulu, himpunan mendapat kajian gerakan, dan ruang kerja baharu menghasilkan permukaan bebas bentuk serta bahagian yang bersaiz daripada fizik. 0.8.1 ialah keluaran pembetulan kecil.

## Baharu

### Simulasi

- **Kemas kini semasa saya edit.** Tandakan {{ui:Kemas kini semasa saya edit}} dalam blok Selesaikan, dan jawapan akan mengikut suntingan anda. Tukar dimensi, beban atau bahan dan jawapan pantas, yang dibuat dengan elemen empat kali lebih besar, muncul serta-merta; apabila anda berhenti kira-kira sesaat, jawapan halus kajian itu sendiri menggantikannya. Keputusan memberitahu anda yang mana satu sedang anda lihat. Pada rasuk julur keluli, jawapan pantas berada dalam lingkungan 1 % untuk pesongan dan kira-kira 4 % untuk tegasan berbanding jawapan halus. Lihat [Semak tegasan dan pesongan](topic:simulation#update-while-you-edit-live).
- **Apa yang patah dahulu.** Untuk kajian statik atau lengkokan, {{ui:Apa yang patah dahulu?}} dalam blok **Patahkan** menskalakan beban sehingga bahagian itu tewas. Ia menyenaraikan, yang paling teruk dahulu, faktor beban kepada alah pertama (dengan penanda merah di tempat tegasan memuncak) dan faktor beban kepada lengkokan. Faktor di bawah 1 bermakna bahagian itu sudah tewas dengan beban semasa, dan panel Masalah menunjukkan ralat. Faktor ini datang daripada kajian linear, jadi ketepatannya bergantung pada kajian itu. Lihat [Semak tegasan dan pesongan](topic:simulation#find-out-what-breaks-first-break-it).
- **Alah dan sentuhan.** Dua lagi jenis kajian: kajian tak linear, yang mana bahan mengikut garis lurusnya sehingga tegasan alah dan kemudian cerun yang lebih landai, dengan terikan plastik diplot; dan kajian sentuhan, yang mana bahagian berasingan saling menolak (tanpa geseran) atau kekal melekat (terikat). Langkah beban yang tidak dapat stabil, atau bahagian yang tenggelam terlalu dalam antara satu sama lain, ditunjukkan dalam panel Masalah. Geseran, gelongsoran besar, putaran besar, pesongan besar dan lesu tidak diselesaikan. Lihat [Semak tegasan dan pesongan](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Dek untuk CalculiX.** {{ui:Eksport}} › {{ui:Dek CalculiX (.inp)}} menyimpan kajian untuk CalculiX, program berasingan yang anda pasang dan jalankan sendiri; {{ui:Eksport}} › {{ui:Keputusan CalculiX (.frd)}} membaca semula fail keputusannya ke atas jejaring yang sama. PartCraft tidak pernah memulakan program itu, dan ia memberitahu anda jika bahagian berubah sejak dek disimpan.

### Himpunan

- **Kajian gerakan.** {{ui:Himpunan}} › {{ui:Gerakan}} memacu nilai satu sendi sepanjang masa yang anda tentukan (kelajuan malar, dilonggarkan, sinus, atau keluar dan kembali), meletakkan himpunan pada setiap langkah dengan sendi dan gelung tertutupnya, dan melaporkan apa yang bertembung dan sejauh mana bahagian menghampiri satu sama lain. {{ui:Tambah titik}} memplot kedudukan, kelajuan dan pecutan titik, nilai sendi dan kelegaan terhadap masa; {{ui:Simpan CSV}} dan {{ui:Simpan plot}} menulisnya ke fail. Selepas {{ui:Jalankan}}, Langkah melalui bar larian memindahkan himpunan ke mana-mana langkah. Tetapan kajian disimpan dalam fail himpunan. Kelajuan dan pecutan diperoleh daripada kedudukan yang direkod, jadi gunakan lebih banyak langkah jika puncak tajam kelihatan rendah. Lihat [Semak himpunan untuk pertembungan dan gerakan](topic:check-assembly#a-motion-study).

### Permukaan dan bahagian daripada fizik

- **Ruang kerja Permukaan.** Pilih {{ui:Permukaan}} dalam kotak {{ui:Ruang kerja}} untuk lengkung dan permukaan NURBS di sebelah bahagian: {{ui:Lengkung}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Padan}} dan {{ui:Zebra}}, dengan kesinambungan (G0, G1 atau G2) diukur pada permukaan tepat dan tepi yang lebih teruk daripada yang anda minta disenaraikan dalam Masalah dengan pembetulan Padan. {{ui:Licinkan}} mengukur garis lambung untuk titik lengkok dan lompatan kelengkungan, dan membina semula yang tidak licin dalam had toleransi anda. Permukaan disimpan dalam fail bahagian dan tidak mengubah ciri bahagian. Lihat [Permukaan bebas bentuk (NURBS)](topic:nurbs-surfaces).
- **Ruang kerja Jurutera.** Pilih {{ui:Jurutera}} dalam penukar ruang kerja, pilih penjana dan klik {{ui:Baharu}}: skrip akan menentukan saiz bahagian daripada apa yang ia perlu lakukan (haba untuk bergerak, aliran, tekanan, bahan, proses cetakan) dengan formula buku teks dan membinanya, kemudian memberikan semula nombor yang digunakan beserta sumbernya, semakan pembuatannya dan fail untuk alat analisis. Input yang sama menghasilkan bahagian yang sama pada mana-mana komputer. Penjana disimpan dalam bahagian, dan membuka bahagian tidak pernah menjalankan skrip. Lihat [Bahagian daripada fizik: penjana](topic:engineer-generators) dan [Tulis penjana](topic:write-a-generator).

### Lakaran, lukisan dan pembuatan

- **Lakaran daripada foto.** {{ui:Ciri}} › {{ui:Lagi}} › {{ui:Lakaran daripada foto…}} menjejak gambar bahagian rata di atas latar biasa (garis luar dan lubang) atau lukisan pen menjadi garisan, lengkok dan bulatan. Anda memberikan satu panjang, menyemak pratonton dan mencipta lakaran. Lihat [Asas lakaran](topic:sketch-basics#a-sketch-from-a-photo).
- **Skala dan pisahkan untuk cetakan.** {{ui:Eksport}} › {{ui:Skala untuk cetakan (STL atau 3MF)…}} menskalakan mengikut paksi tanpa mengubah bahagian, contohnya dengan elaun pengecutan. {{ui:Eksport}} › {{ui:Pisahkan untuk cetakan (zip kepingan)…}} memotong bahagian yang terlalu besar untuk katil cetakan anda kepada kepingan bernombor yang dicantumkan dengan pasak, kunci, ekor burung, lubang dowel atau poket magnet. Lihat [Cetak dalam 3D](topic:print-3d).
- **Helaian tersusun kepada G-code.** {{ui:Eksport}} › {{ui:Helaian tersusun kepada G-code}} membaca DXF yang tersusun dan membuat satu program bagi setiap helaian melalui pasca yang anda pilih: lubang dan potongan keluar dahulu, kemudian garis luar. Ia tidak merancang lead-in, susunan pemotongan atau tepi yang dikongsi. Lihat [Susun bahagian rata pada helaian](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Lukisan yang melakukan lebih banyak sendiri.** {{ui:Helaian}} › {{ui:Automatik}} memilih helaian saiz A terkecil yang memuatkan pandangan pada skala piawai terbesar sehingga 1:1. {{ui:Dimensikan lubang}} meletakkan tanda pusat pada setiap lubang, satu callout bagi setiap saiz dan kedudukan dari sudut kiri bawah pandangan. Lihat [Buat lukisan](topic:drawing-pdf).

### Dalam setiap aplikasi

- **Bahasa.** Aplikasi tersedia dalam 54 bahasa. Bahasa selain Inggeris ialah draf mesin sehingga penutur asli membacanya.
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Baris bar alat}} memilih Balut (seperti dahulu), 2 baris atau 1 baris; bar yang tidak muat akan ditatal ke sisi. Reben Ciri PartCraft menunjukkan alat yang paling kerap digunakan dengan besar dan menyimpan variasi di belakang butang berpisah.
- **Sambungkan AI anda.** Studio ialah hab untuk menyambungkan pembantu milik anda sendiri kepada kesemua lapan aplikasi, dengan kebenaran baca sahaja, cadangan atau sunting bagi setiap aplikasi. Pembantu yang disambungkan boleh menentukan saiz bahagian daripada satu ayat, contohnya braket untuk beban, menunjukkan kerjanya dan setiap semakan, dan membinanya; ia melaporkan apa yang tidak disemaknya (kepekatan tegasan, lesu, rayapan dalam plastik). Lihat [Guna PartCraft dengan pembantu AI](topic:use-with-ai-assistants).

## Diperbetulkan dalam 0.8.1

- **Pembekuan kursor skrin penuh.** Pemilihan tindihan kini dihadkan. Punca ini ialah bacaan terbaik kami dan belum disahkan dengan orang yang melaporkannya.
- **Bahasa semasa larian.** Studio dan edisi terpakej boleh menukar bahasa semasa berjalan; sebelum ini hanya Inggeris. Ini belum diuji pada setiap platform: beritahu kami jika bahasa tidak berubah.

## Belum ada dalam versi ini

- Sambungkan AI anda belum siap: sambungan satu klik dalam Studio, penyambung hos untuk AI pelayar, kunci API anda sendiri dalam Studio dan pakej MCP yang diterbitkan tidak dijanjikan. Studio tidak mempunyai AI sendiri.
- Studio tidak ditandatangani kod: Windows mungkin memberi amaran, dan macOS meminta klik kanan kemudian Buka. Lihat [Penyelesaian masalah](topic:troubleshooting).
- Susun atur toleransi masih satu arah: lihat [Susun atur toleransi](topic:tolerance-stackup).
- Yang selebihnya disenaraikan dalam [Apa yang belum dibina](topic:not-built-yet).

Perubahan terdahulu ada dalam [Perkara baharu dalam 0.7](topic:whats-new-0-7).
