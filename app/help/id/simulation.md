---
title: Periksa tegangan dan lendutan (Simulasi)
summary: Pilih material, kunci muka, tambahkan gaya, tekanan atau berat part sendiri, selesaikan, lalu baca tegangan von Mises, perpindahan, faktor keamanan, reaksi dan frekuensi alami pada model, beserta apa yang bisa dan tidak bisa diberitahukan metodenya.
keywords: simulasi, FEA, analisis langsung, perbarui saat menyunting, patahkan, apa yang patah lebih dulu, faktor beban, nonlinear, plastisitas, luluh, regangan plastis, bilinear, kontak, pasangan kontak, penalti, terikat, kontak tanpa gesekan, CalculiX, .inp, .frd, elemen hingga, tegangan, regangan, von Mises, perpindahan, lendutan, faktor keamanan, faktor aman, luluh, reaksi, beban, gaya, tekanan, gravitasi, berat sendiri, tetap, tanpa gesekan, tumpuan, batasan, material, baja, aluminium, titanium, ABS, PLA, nylon, frekuensi alami, modal, getaran, mesh, ukuran elemen, tetrahedral, tetrahedron, mesh tet, voxel, kualitas mesh, tegangan utama, regangan ekuivalen, estimasi galat, muka melengkung, lubang, fillet, adaptif, penyempurnaan adaptif, penyempurnaan otomatis, h-adaptif, konvergensi, konvergensi mesh, permukaan presisi, bola, kerucut, torus, spline, bentuk bebas
from: 6f2fdec1
---

Ruang kerja Simulasi menjawab "apakah akan melengkung atau patah di bawah beban ini?" untuk part yang sedang Anda modelkan. Ini adalah studi **statis linear** (lendutan kecil, material tetap elastis) atau studi **frekuensi alami**, diselesaikan pada mesh tetrahedron kuadratik yang mengikuti muka part (atau, jika Anda pilih, kubus kecil yang sama besar). Ia bekerja pada muka bernama yang diberikan kernel mesh kepada part (lihat [Kernel mesh](topic:solid-kernels)).

Pilih **Simulasi** di kotak **Ruang kerja** di sebelah kiri bilah alat. Part Anda tidak berubah; studinya disimpan di dalam file part, dan setiap perubahan padanya bisa dibatalkan.

## Atur studi

1. Tekan **Studi baru** di panel kanan.
2. Pilih **Material**. Panel menampilkan kekakuannya (E), rasio Poisson, kepadatan dan kekuatan luluh. Nilainya adalah angka handbook yang umum; nilai bersertifikat dari pemasok Anda mungkin berbeda.
3. Pilih **Mesh**:
   - **Tetrahedron (akurat)**, bawaan: tetrahedron 10 simpul yang muka luarnya berada pada muka part, dengan tepi melengkung pada lubang, fillet dan muka bulat lainnya. Simpul pada muka datar, silinder, kerucut, bola dan torus, muka hasil putaran dan ekstrusi, serta muka bentuk bebas (B-spline) berada pada permukaan presisi; jenis muka lain mengikuti mesh tampilannya, dan tabel hasil menyebutkan berapa muka yang demikian. Mesh dibuat lebih halus dengan sendirinya di dekat muka melengkung, dinding tipis dan tepi tajam.
   - **Kubus voxel (cepat)**: part diisi kubus yang sama besar. Cepat, tetapi muka melengkung menjadi anak tangga. Studi yang disimpan sebelum mesh tetrahedron ada tetap memakai ini.
4. Biarkan **Ukuran elemen** kosong untuk ukuran otomatis (sekitar 12.000 tetrahedron, atau 20.000 kubus), atau ketik satu dalam milimeter. Panel menampilkan perkiraan berapa elemen yang dihasilkan sebelum titik-titik halus ditambahkan. Dengan tetrahedron, **Elemen lebih kecil pada muka melengkung** (aktif secara bawaan) menyempurnakan lubang dan fillet, tempat tegangan biasanya memuncak.

### Sempurnakan otomatis

Dengan tetrahedron, studi statis atau tekuk (tanpa beban termal), studi frekuensi alami, dan studi termal tunak menawarkan **Sempurnakan otomatis (adaptif)**. Centang dan atur:

- **Target galat (%)**: penyelesaian berhenti ketika galat yang diperkirakan berada di bawahnya (1 % sebagai awal).
- **Lintasan terbanyak**: jumlah penyelesaian terbanyak yang boleh dijalankan (5 sebagai awal, paling banyak 10).

Setiap lintasan menyelesaikan, mencari elemen dengan galat perkiraan terbesar, membaginya (dan sejumlah tetangga sesedikit mungkin agar mesh tetap utuh), lalu menyelesaikan lagi. Simpul baru pada muka melengkung dipindahkan ke permukaan presisi. Hasilnya lalu menampilkan tabel dan grafik yang untuk setiap lintasan memuat elemen, nilai yang dicari, galat perkiraan, serta tegangan puncak (atau suhu) dan perpindahan (atau fluks panas), dengan satu baris yang menjelaskan mengapa berhenti: target tercapai, lintasan habis, mesh berikutnya akan terlalu besar, atau sebuah lintasan gagal (lalu Anda melihat lintasan baik terakhir).

Baca perkiraan sebagai perkiraan. Ia (Zienkiewicz–Zhu; dibandingkan jawaban eksak, ia membaca sekitar 0,6 sampai 0,95 dari galat sebenarnya) mengukur galat di **seluruh part**, sehingga tegangan puncak pada lubang atau fillet biasanya masih sedikit meleset ketika perkiraannya tampak kecil: untuk konsentrasi tegangan, atur target di bawah 1 % dan amati puncaknya menjadi stabil dari lintasan ke lintasan. Pada sudut dalam yang tajam atau tepi muka tetap, tegangan sebenarnya tak hingga, sehingga perkiraan tidak pernah sampai ke sana: lintasannya yang habis.

**Frekuensi alami dan tekuk.** Untuk studi frekuensi alami, perkiraan mencakup setiap mode yang Anda minta, masing-masing dihitung sama; tabel dan grafik mengikuti dua frekuensi pertama. Pada part yang hanya punya muka datar, frekuensi hanya bisa turun dari lintasan ke lintasan (setiap mesh memegang yang sebelumnya); muka melengkung juga makin mendekati bentuk sebenarnya, yang bisa menggerakkan frekuensi sedikit ke arah mana pun. Untuk tekuk, perkiraan mencakup pra-tegangan dan mode tekuk, dan tabel mengikuti faktor beban. Diperiksa pada batang baja 100 × 10 × 10 mm: frekuensi pertama stabil dari 812,4 menjadi 811,9 Hz dalam empat lintasan, 0,4 % di bawah Euler–Bernoulli (yang mengabaikan geser), dan faktor beban kolom dalam 0,5 % dari Euler.

## Tahan dan beri beban

Setiap studi memerlukan minimal satu tumpuan dan, untuk tegangan, satu beban.

1. Tekan {{ui:Tetap}} di bilah alat. Tumpuan baru terpilih dan menunggu muka: klik muka yang ditahan diam (klik muka lagi untuk melepasnya). Tekan **Selesai memilih** atau {{key:Esc}} jika sudah. Kerucut biru menandai muka yang ditahan.
2. Tekan {{ui:Gaya}} dan klik muka tempat gaya bekerja. Di panel, ketik **Total gaya** dalam newton dan pilih **Arah**: masuk ke muka, atau sepanjang sumbu. Gaya dibagi ke muka yang dipilih menurut luasnya. Panah oranye menunjukkannya.
3. Tekan {{ui:Tekanan}} untuk tekanan dalam MPa (N/mm²) yang mendorong masuk ke muka yang dipilih; tekanan negatif menarik.

Jenis lain ada di daftar **Tambah** panel: **Muka tanpa gesekan** (muka boleh meluncur di sepanjang dirinya sendiri tetapi tidak menjauh darinya; gunakan untuk bidang simetri dan tumpuan halus) dan **Gravitasi** (berat part itu sendiri, 9,81 m/s², ke arah yang Anda pilih).

Tumpuan yang membiarkan part bebas meluncur atau berputar akan ditolak, dengan menyebutkan gerak mana yang tersisa bebas.

## Selesaikan dan baca hasilnya

Tekan {{ui:Selesaikan}}. Pekerjaan berjalan di latar belakang; **Hentikan** membatalkannya. Lalu:

- Part diwarnai dengan **tegangan von Mises**; pilih **Perpindahan** atau **Faktor keamanan** pada **Tampilkan**. Legenda memberikan skalanya.
- Arahkan penunjuk ke part untuk membaca nilai di bawahnya.
- Centang **Bentuk terdeformasi** untuk melihat part yang melengkung (geraknya diperbesar oleh **Skala**; gerak sebenarnya ada di tabel).
- Tabel mencantumkan tegangan terbesar dan lokasinya, perpindahan terbesar, **faktor keamanan** terkecil (kekuatan luluh ÷ tegangan von Mises; di bawah 1 material luluh), beban yang diterapkan, dan **reaksi** di tumpuan (menyeimbangkan beban), serta mesh yang dipakai.

Untuk **frekuensi alami**, pilih **Jenis** itu, atur berapa **Mode**, lalu selesaikan. Setiap mode menampilkan frekuensi dan bentuknya (bentuk diskalakan menjadi 1 pada gerak terbesarnya).

Jika Anda mengubah part, hasilnya ditandai kedaluwarsa: selesaikan lagi.

## Luluh dan kontak (studi nonlinear)

Dua jenis studi lagi melampaui "material tetap elastis":

- **Nonlinear (material luluh)** mengikuti garis lurus material hingga tegangan lulunya, lalu lereng yang lebih datar (**Kemiringan setelah luluh**, 1 % dari E jika dikosongkan). Beban berlanjut dalam **Langkah beban**; langkah yang tidak stabil dibagi dua secara otomatis. Hasilnya menambahkan **Regangan plastis** ke grafik dan menyebutkan berapa banyak beban yang tertanggung. Jika suatu langkah tetap tidak stabil, studi berhenti di langkah baik terakhir dan panel ⚠ Masalah menunjukkan lokasinya: part kehabisan kekuatan di sana (keruntuhan), atau langkahnya terlalu besar.
- **Kontak antar bagian** membiarkan bagian-bagian terpisah dari part saling mendorong. Tambahkan **Pasangan kontak**, pilih muka sisi A (muka yang menekan) dengan {{ui:Pilih muka}}, lalu sisi B dengan {{ui:Pilih muka sisi B}}. Bagian **tanpa gesekan** mendorong, meluncur dan terpisah; bagian **terikat** tetap melekat. Setiap bagian dibuat mesh sendiri, sehingga celah kecil di antaranya tidak masalah. Kontak adalah metode penalti: bagian sedikit masuk satu sama lain (**faktor penalti** × E ÷ ukuran elemen menentukan kekakuan kontak). Tabel menunjukkan masuk terdalam, dan panel Masalah memperingatkan jika lebih dari 1 % ukuran elemen: naikkan faktornya atau gunakan elemen yang lebih kecil.

Keduanya memakai mesh tetrahedron. Gesekan, geseran besar dan rotasi besar tidak diselesaikan di sini.

## Jalankan di CalculiX

**Ekspor › Deck CalculiX (.inp)** (atau {{ui:Simpan deck CalculiX (.inp)}} di panel) menyimpan studi sebagai deck input untuk CalculiX, program terpisah yang Anda pasang dan jalankan sendiri: mesh, material, tumpuan, beban dan pasangan kontak yang sama, dalam mm, N dan MPa. Jalankan, lalu **Ekspor › Hasil CalculiX (.frd)** membaca file hasilnya kembali ke mesh yang sama dan menampilkan perpindahan (dan tegangan von Mises jika file memuat tegangan). Jika Anda mengubah part atau ukuran elemen di antaranya, mesh-nya tidak lagi sama dan PartCraft memberi tahu: simpan deck baru.

## Seberapa jauh bisa dipercaya

PartCraft memeriksa solvernya terhadap rumus tangan (lendutan ujung cantilever PL³/3EI dalam 1 %, perpanjangan batang PL/AE persis, frekuensi pertama cantilever dalam 3 %, tegangan di sekitar lubang pada pelat). Meski begitu, perhatikan batasan berikut:

- **Mesh.** Dengan tetrahedron, PartCraft memeriksa lendutan dan tegangan lentur cantilever (dalam 0,3 %), tegangan di lubang pada pelat (Kt, dalam sekitar 1 %), tabung tebal di bawah tekanan (Lamé, dalam 0,3 %) dan frekuensi pertama (dalam 0,4 %). Tabel menampilkan **kualitas mesh** (sudut terkecil dan terbesar antar muka elemen; di bawah sekitar 10° sebuah elemen dianggap buruk) dan **estimasi galat tegangan**: jika lebih dari beberapa persen, selesaikan lagi dengan ukuran elemen yang lebih kecil, atau biarkan **Sempurnakan otomatis** yang melakukannya. Pada pelat dengan lubang dan batang dengan dua takik tepi, penyempurnaan otomatis mencapai dalam 1 % dari Kt buku teks dengan sekitar seperenam nilai yang dicari yang dibutuhkan untuk membuat seluruh mesh lebih halus. Dengan kubus voxel, lubang atau fillet berbentuk anak tangga pada ukuran kubus, sehingga tegangan di sana kasar.
- **Sudut dalam yang tajam dan tepi muka tetap tidak punya tegangan puncak yang sebenarnya.** Nilainya di sana terus naik saat elemen mengecil. Bacalah tegangan sedikit menjauh dari tempat seperti itu, atau bulatkan sudutnya di model.
- **Hasil yang perlu dibaca.** Selain tegangan von Mises, perpindahan dan faktor keamanan, studi tetrahedron menampilkan **tegangan utama maksimum dan minimum** (tarik dan tekan) serta **regangan ekuivalen**. Centang **Tampilkan mesh** untuk melihat elemennya.
- **Studi statis bersifat linear dan elastis.** Untuk luluh dan kontak gunakan jenis studi nonlinear di atas; lendutan besar dan kelelahan tidak diselesaikan. Panas, tegangan termal dan tekuk linear adalah jenis studi tersendiri: lihat [Panas, tegangan termal dan tekuk](topic:thermal-and-buckling).
- **Setiap material sama ke segala arah.** Plastik hasil cetak 3D lebih lemah di sepanjang lapisannya, sering sepertiga atau lebih.
- Ini adalah build laboratorium: periksa part yang penting dengan cara lain.

## Perbarui saat Anda menyunting (Live)

Centang **Perbarui saat saya menyunting** di blok Selesaikan dan jawaban Simulasi mengikuti sunting Anda. Ubah dimensi, beban, material atau lingkungan dan **jawaban cepat** langsung muncul, dibuat dengan elemen empat kali lebih besar daripada studi; saat Anda berhenti sejenak (sekitar satu detik), jawaban **terperinci** dari studi menggantikannya. Hasil menyebutkan mana yang Anda lihat ("Jawaban cepat" atau "Jawaban terperinci") beserta ukuran elemennya. Jawaban cepat baik untuk arah dan ukuran: pada cantilever baja ia berada dalam 1 % untuk lendutan dan sekitar 4 % untuk tegangan dari yang terperinci. Percayai yang terperinci untuk angka yang akan Anda pakai. Studi statis, frekuensi alami, termal dan tekuk bekerja dengan cara ini; Live adalah pengaturan tampilan dan tidak disimpan di part. Penyelesaian yang Anda tekan sendiri tetap seperti itu sampai sunting berikutnya.

## Cari tahu apa yang patah lebih dulu (Patahkan)

Untuk studi statis atau tekuk, tekan **Apa yang patah lebih dulu?** di blok **Patahkan**. PartCraft menskalakan beban studi (gaya, tekanan dan berat secara bersamaan) sampai part menyerah, lalu mendaftar dari yang terburuk: **faktor beban menuju luluh pertama** (faktor pada beban hari ini saat tegangan von Mises tertinggi mencapai tegangan luluh material, dengan penanda merah di tempat terjadinya) dan **faktor beban menuju tekuk** untuk tumpuan dan beban yang sama. Faktor 4,3 berarti part menanggung 4,3 kali bebannya sebelum luluh; **faktor di bawah 1 berarti sudah menyerah pada beban saat ini**, dan itu muncul di daftar Masalah sebagai kesalahan (temuan terlemah ditampilkan sebagai catatan meski semuanya memenuhi). Faktor berasal dari studi linear pada tetrahedron pada ukuran elemen Anda, jadi sebaik studi itu sendiri: tegangan pada muka tetap atau sudut tajam tidak punya puncak yang sebenarnya (lihat di atas), dan faktor luluh akan berada di sisi hati-hati di sana. Asisten Anda dapat menjalankan pemeriksaan yang sama dengan alat `break_run`.

## Terkait

- [Panas, tegangan termal dan tekuk](topic:thermal-and-buckling)
- [Tumbuhkan bentuk dari beban (Generatif)](topic:generative-design)
- [Ukur jarak, sudut dan massa](topic:measure)
- [Yang belum dibuat](topic:not-built-yet)
