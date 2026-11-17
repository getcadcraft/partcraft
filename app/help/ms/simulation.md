---
title: Semak tegasan dan pesongan (Simulasi)
summary: Pilih bahan, tetapkan muka, tambah daya, tekanan atau berat bahagian itu sendiri, selesaikan, dan baca tegasan von Mises, sesaran, faktor keselamatan, tindak balas dan frekuensi semula jadi pada model, dengan apa yang kaedah ini boleh dan tidak boleh beritahu anda.
keywords: simulasi, FEA, analisis langsung, kemas kini semasa menyunting, pecahkannya, apa yang pecah dahulu, faktor beban, tak linear, keplastikan, mengalah, terikan plastik, dwilinear, sentuhan, pasangan sentuhan, penalti, terikat, sentuhan tanpa geseran, CalculiX, .inp, .frd, unsur terhingga, tegasan, terikan, von Mises, sesaran, pesongan, faktor keselamatan, alahan, tindak balas, beban, daya, tekanan, graviti, berat sendiri, tetap, tanpa geseran, penyokong, kekangan, bahan, keluli, aluminium, titanium, ABS, PLA, nilon, frekuensi semula jadi, modal, getaran, jejaring, saiz elemen, tetrahedron, voxel, kualiti jejaring, tegasan utama, terikan setara, anggaran ralat, muka melengkung, lubang, fillet, adaptif, penghalusan adaptif, penghalusan automatik, h-adaptif, penumpuan, penumpuan jejaring, permukaan tepat, sfera, kon, torus, splin, bentuk bebas
from: 6f2fdec1
---

Ruang kerja Simulasi menjawab soalan "adakah ia akan melentur atau pecah di bawah beban ini?" untuk bahagian yang sedang anda modelkan. Ia ialah kajian **statik linear** (pesongan kecil, bahan kekal kenyal) atau kajian **frekuensi semula jadi**, diselesaikan pada jejaring tetrahedron kuadratik yang mengikuti muka bahagian (atau, jika anda pilih, kiub kecil yang sama saiz). Ia berfungsi pada muka bernama yang diberikan oleh kernel jejaring kepada bahagian (lihat [Kernel jejaring](topic:solid-kernels)).

Pilih **Simulasi** dalam kotak **Ruang kerja** di sebelah kiri bar alat. Bahagian anda tidak diubah; kajian disimpan di dalam fail bahagian dan setiap perubahan padanya boleh dibuat asal.

## Sediakan kajian

1. Tekan **Kajian baharu** dalam panel kanan.
2. Pilih **Bahan**. Panel menunjukkan kekukuhannya (E), nisbah Poisson, ketumpatan dan kekuatan alahannya. Nilai ini ialah angka lazim daripada buku rujukan; nilai bersijil daripada pembekal anda mungkin berbeza.
3. Pilih **Jejaring**:
   - **Tetrahedron (tepat)**, lalai: tetrahedron 10 nod yang muka luarnya terletak pada muka bahagian, dengan tepi melengkung pada lubang, fillet dan muka bulat yang lain. Nod pada muka rata, silinder, kon, sfera dan torus, muka yang diputar dan diekstrud, dan muka bentuk bebas (B-spline) terletak pada permukaan tepat; sebarang jenis muka lain mengikuti jejaring paparannya, dan jadual hasil menyatakan berapa muka yang berbuat begitu. Jejaring dibuat lebih halus dengan sendirinya berhampiran muka melengkung, dinding nipis dan tepi tajam.
   - **Kiub voxel (pantas)**: bahagian diisi dengan kiub yang sama saiz. Pantas, tetapi muka melengkung menjadi anak tangga. Kajian yang disimpan sebelum jejaring tetrahedron wujud kekal dengan ini.
4. Biarkan **Saiz elemen** kosong untuk saiz automatik (kira-kira 12,000 tetrahedron, atau 20,000 kiub), atau taip satu dalam milimeter. Panel menunjukkan kira-kira berapa banyak elemen yang terhasil sebelum tempat-tempat halus ditambah. Dengan tetrahedron, **Elemen lebih kecil pada muka melengkung** (hidup secara lalai) menghalusi lubang dan fillet, tempat tegasan biasanya memuncak.

### Halus automatik

Dengan tetrahedron, kajian statik atau lengkokan (tanpa beban terma), kajian frekuensi semula jadi dan kajian terma mantap menawarkan **Halus automatik (adaptif)**. Tandakannya dan tetapkan:

- **Ralat sasaran (%)**: penyelesaian berhenti apabila ralat yang dianggarkan berada di bawahnya (1 % untuk permulaan).
- **Hantaran paling banyak**: bilangan penyelesaian paling banyak yang boleh dijalankan (5 untuk permulaan, paling banyak 10).

Setiap hantaran menyelesaikan, mencari elemen dengan anggaran ralat terbesar, memecahkannya (dan seberapa sedikit jiran yang diperlukan untuk mengekalkan jejaring itu utuh), dan menyelesaikan semula. Nod baharu pada muka melengkung diletakkan pada permukaan tepat. Hasil kemudian menunjukkan jadual dan carta yang, bagi setiap hantaran, merangkumi elemen, pemboleh ubah tidak diketahui, anggaran ralat dan tegasan (atau suhu) puncak serta sesaran (atau fluks haba), dan satu baris yang menerangkan sebab ia berhenti: sasaran tercapai, hantaran habis, jejaring seterusnya terlalu besar, atau satu hantaran gagal (anda kemudian melihat hantaran baik yang terakhir).

Baca anggaran itu sebagai anggaran. Ia (Zienkiewicz–Zhu; apabila dibandingkan dengan jawapan tepat ia membaca kira-kira 0.6 hingga 0.95 daripada ralat sebenar) mengukur ralat sepanjang **keseluruhan bahagian**, jadi tegasan puncak pada lubang atau fillet biasanya masih sedikit tersasar apabila anggaran kelihatan kecil: bagi kepekatan tegasan, tetapkan sasaran di bawah 1 % dan perhatikan puncak itu menstabil dari hantaran ke hantaran. Pada sudut dalam yang tajam atau tepi muka tetap, tegasan sebenar adalah tak terhingga, jadi anggaran tidak pernah sampai ke sana: hantaran habis sebaliknya.

**Frekuensi semula jadi dan lengkokan.** Bagi kajian frekuensi semula jadi, anggaran itu meliputi setiap mod yang anda minta, setiap satunya dikira sama; jadual dan carta mengikuti dua frekuensi pertama. Pada bahagian dengan muka rata sahaja, frekuensi hanya boleh turun dari hantaran ke hantaran (setiap jejaring memegang yang sebelumnya); muka melengkung juga menghampiri bentuk sebenarnya, yang boleh menggerakkan frekuensi sedikit ke mana-mana arah. Bagi lengkokan, anggaran meliputi prategasan dan mod lengkokan, dan jadual mengikuti faktor beban. Diperiksa pada bar keluli 100 × 10 × 10 mm: frekuensi pertama menstabil dari 812.4 ke 811.9 Hz dalam empat hantaran, 0.4 % di bawah Euler–Bernoulli (yang mengabaikan ricih), dan faktor beban tiang dalam lingkungan 0.5 % daripada Euler.

## Tahan dan bebankannya

Setiap kajian memerlukan sekurang-kurangnya satu penyokong dan, untuk tegasan, satu beban.

1. Tekan {{ui:Fixed}} dalam bar alat. Penyokong baharu dipilih dan menunggu muka: klik muka yang ditahan tetap (klik muka sekali lagi untuk melepaskannya). Tekan **Selesai memilih** atau {{key:Esc}} apabila selesai. Kon biru menandakan muka yang ditahan.
2. Tekan {{ui:Force}} dan klik muka tempat daya bertindak. Dalam panel taip **Jumlah daya** dalam newton dan pilih **Arah**nya: masuk ke dalam muka, atau sepanjang paksi. Daya dikongsi ke atas muka yang dipilih mengikut luas. Anak panah oren menunjukkannya.
3. Tekan {{ui:Pressure}} untuk tekanan dalam MPa (N/mm²) yang menolak masuk ke dalam muka yang dipilih; tekanan negatif menarik.

Lebih banyak jenis ada dalam senarai **Tambah** panel: **Muka tanpa geseran** (muka boleh menggelongsor sepanjang dirinya tetapi tidak bergerak menjauhinya — gunakannya untuk satah simetri dan penyokong licin) dan **Graviti** (berat bahagian itu sendiri, 9.81 m/s², mengikut arah yang anda pilih).

Penyokong yang membenarkan bahagian menggelongsor atau berpusing dengan bebas ditolak, dengan menyatakan gerakan mana yang kekal bebas.

## Selesaikan dan baca hasil

Tekan {{ui:Solve}}. Kerja berjalan di latar belakang; **Berhenti** membatalkannya. Kemudian:

- Bahagian diwarnakan mengikut **tegasan von Mises**; pilih **Sesaran** atau **Faktor keselamatan** dalam **Tunjuk**. Legenda memberikan skala.
- Tunjuk bahagian untuk membaca nilai di bawah penunjuk.
- Tandakan **Bentuk terubah** untuk melihat bahagian yang melentur (gerakan dibesarkan oleh **Skala**; gerakan sebenar ialah yang ada dalam jadual).
- Jadual menyenaraikan tegasan terbesar dan lokasinya, sesaran terbesar, **faktor keselamatan** terkecil (kekuatan alahan ÷ tegasan von Mises; di bawah 1 bahan mengalah), beban yang dikenakan dan **tindak balas** pada penyokong (ia mengimbangi beban), serta jejaring yang digunakan.

Bagi **frekuensi semula jadi**, pilih **Jenis** itu, tetapkan berapa **Mod**, dan selesaikan. Setiap mod menunjukkan frekuensi dan bentuknya (bentuk diskala kepada 1 pada gerakan terbesarnya).

Jika anda menukar bahagian, hasil ditandakan sudah lapuk: selesaikan semula.

## Mengalah dan sentuhan (kajian tak linear)

Dua lagi jenis kajian melampaui "bahan kekal kenyal":

- **Tak linear (bahan mengalah)** mengikuti garis lurus bahan sehingga tegasan alahannya, kemudian kecerunan yang lebih rata (**Kecerunan selepas alahan**, 1 % daripada E jika dibiarkan kosong). Beban diteruskan dalam **Langkah beban**; langkah yang tidak menstabil dibahagikan dua secara automatik. Hasil menambah **Terikan plastik** pada plot dan menyatakan berapa banyak beban yang dipikul. Jika satu langkah masih tidak dapat menstabil, kajian berhenti pada langkah baik yang terakhir dan panel ⚠ Masalah menyatakan di mana: bahagian itu telah kehabisan kekuatan di situ (keruntuhan), atau langkahnya terlalu besar.
- **Sentuhan antara bahagian** membenarkan bahagian berasingan bagi bahagian itu saling menolak. Tambah **Pasangan sentuhan**, pilih muka sisi A (muka yang menekan) dengan {{ui:Pick faces}}, kemudian sisi B dengan {{ui:Pick side B faces}}. Bahagian **tanpa geseran** menolak, menggelongsor dan berpisah; bahagian **terikat** kekal melekat. Setiap bahagian dijaringkan sendiri, jadi jurang kecil di antaranya tidak mengapa. Sentuhan ialah kaedah penalti: bahagian itu tenggelam sedikit ke dalam satu sama lain (**faktor penalti** × E ÷ saiz elemen menentukan betapa kakunya sentuhan itu). Jadual menunjukkan tenggelam terdalam, dan panel Masalah memberi amaran apabila ia melebihi 1 % saiz elemen: naikkan faktor atau gunakan elemen yang lebih kecil.

Kedua-duanya menggunakan jejaring tetrahedron. Geseran, gelongsoran besar dan putaran besar tidak diselesaikan di sini.

## Jalankan dalam CalculiX

**Eksport › Dek CalculiX (.inp)** (atau {{ui:Simpan dek CalculiX (.inp)}} dalam panel) menyimpan kajian sebagai dek input untuk CalculiX, program berasingan yang anda pasang dan jalankan sendiri: jejaring, bahan, penyokong, beban dan pasangan sentuhan yang sama, dalam mm, N dan MPa. Jalankannya, kemudian **Eksport › Hasil CalculiX (.frd)** membaca fail hasilnya kembali ke jejaring yang sama dan menunjukkan sesaran (dan tegasan von Mises apabila fail itu mempunyai tegasan). Jika anda menukar bahagian atau saiz elemen di antaranya, jejaring tidak lagi sama dan PartCraft memberitahu anda: simpan dek baharu.

## Sejauh mana boleh dipercayai

PartCraft menyemak penyelesainya dengan rumus tangan (pesongan hujung kantilever PL³/3EI dalam 1 %, pemanjangan bar PL/AE tepat, frekuensi pertama kantilever dalam 3 %, tegasan di sekitar lubang dalam plat). Walau bagaimanapun, ingat had-had ini:

- **Jejaring.** Dengan tetrahedron, PartCraft menyemak pesongan dan tegasan lentur kantilever (dalam 0.3 %), tegasan di lubang dalam plat (Kt, dalam lingkungan 1 %), tiub tebal di bawah tekanan (Lamé, dalam 0.3 %) dan frekuensi pertama (dalam 0.4 %). Jadual menunjukkan **kualiti jejaring** (sudut terkecil dan terbesar antara muka elemen; di bawah kira-kira 10° sesuatu elemen adalah lemah) dan **anggaran ralat tegasan**: jika ia lebih daripada beberapa peratus, selesaikan semula dengan saiz elemen yang lebih kecil, atau biarkan **Halus automatik** melakukannya. Pada plat dengan lubang dan bar dengan dua takuk tepi, penghalusan automatik mencapai dalam 1 % daripada Kt buku teks dengan kira-kira satu perenam pemboleh ubah tidak diketahui yang diperlukan untuk menghalusi keseluruhan jejaring. Dengan kiub voxel, lubang atau fillet ialah anak tangga pada saiz kiub, jadi tegasan di situ kasar.
- **Sudut dalam yang tajam dan tepi muka tetap tidak mempunyai tegasan puncak yang sebenar.** Nilai di situ terus meningkat apabila elemen menjadi lebih kecil. Baca tegasan sedikit jauh dari tempat sebegitu, atau bundarkan sudut dalam model.
- **Hasil untuk dibaca.** Selain tegasan von Mises, sesaran dan faktor keselamatan, kajian tetrahedron menunjukkan **tegasan utama maksimum dan minimum** (tegangan dan mampatan) serta **terikan setara**. Tandakan **Tunjuk jejaring** untuk melihat elemen.
- **Kajian statik adalah linear dan kenyal.** Bagi mengalah dan sentuhan gunakan jenis kajian tak linear di atas; pesongan besar dan lesu tidak diselesaikan. Haba, tegasan terma dan lengkokan linear ialah jenis kajian tersendiri: lihat [Haba, tegasan terma dan lengkokan](topic:thermal-and-buckling).
- **Setiap bahan adalah sama dalam semua arah.** Plastik cetakan 3D lebih lemah merentasi lapisannya, selalunya sebanyak satu pertiga atau lebih.
- Ini ialah binaan makmal: semak bahagian yang penting dengan cara lain.

## Kemas kini semasa menyunting (Langsung)

Tandakan **Kemas kini semasa saya menyunting** dalam blok Selesaikan dan jawapan Simulasi mengikut suntingan anda. Ubah dimensi, beban, bahan atau persekitaran dan **jawapan pantas** muncul serta-merta, dibuat dengan elemen empat kali lebih besar daripada kajian; apabila anda berhenti seketika (kira-kira sesaat), **jawapan diperhalus** kajian itu menggantikannya. Hasil menyatakan yang mana satu sedang anda lihat ("Jawapan pantas" atau "Jawapan diperhalus") dan saiz elemen. Jawapan pantas sesuai untuk arah dan saiz: pada kantilever keluli ia berada dalam 1 % bagi pesongan dan kira-kira 4 % bagi tegasan berbanding yang diperhalus. Percayai yang diperhalus untuk nombor yang akan anda gunakan. Kajian statik, frekuensi semula jadi, terma dan lengkokan berfungsi dengan cara ini; Langsung ialah tetapan paparan dan tidak disimpan dalam bahagian. Penyelesaian yang anda tekan sendiri kekal seperti itu sehingga suntingan seterusnya.

## Cari apa yang pecah dahulu (Pecahkannya)

Bagi kajian statik atau lengkokan, tekan **Apa yang pecah dahulu?** dalam blok **Pecahkannya**. PartCraft menskala beban kajian (daya, tekanan dan berat bersama-sama) sehingga bahagian itu tewas dan menyenaraikan, yang paling teruk dahulu, **faktor beban kepada alahan pertama** (faktor ke atas beban hari ini yang pada tahap itu tegasan von Mises tertinggi mencapai kekuatan alahan bahan, dengan penanda merah di tempat ia berlaku) dan **faktor beban kepada lengkokan** bagi penyokong dan beban yang sama. Faktor 4.3 bermaksud bahagian itu boleh menanggung 4.3 kali bebannya sebelum mengalah; **faktor di bawah 1 bermaksud ia sudah tewas seperti yang dibebankan**, dan itu muncul dalam senarai Masalah sebagai ralat (penemuan paling lemah ditunjukkan sebagai nota walaupun semua kekal). Faktor itu datang dari kajian linear pada tetrahedron pada saiz elemen anda, jadi ia sebaik kajian itu sendiri: tegasan pada muka tetap atau sudut tajam tidak mempunyai puncak sebenar (lihat di bawah), dan faktor alahan akan berada di sisi berhati-hati di sana. Asisten anda boleh menjalankan semakan yang sama dengan alat `break_run`.

## Berkaitan

- [Haba, tegasan terma dan lengkokan](topic:thermal-and-buckling)
- [Tumbuhkan bentuk dari beban (Generatif)](topic:generative-design)
- [Ukur jarak, sudut dan jisim](topic:measure)
- [Apa yang belum dibina](topic:not-built-yet)
