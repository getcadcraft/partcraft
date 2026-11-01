---
title: Skrin PartCraft
summary: Lawatan setiap bar dan panel: bar alat dan cara ia berubah, sejarah, fakta bahagian, paparan 3D, panel sifat dan bar status.
keywords: skrin, susun atur, bar alat, sejarah, pokok ciri, sifat, panel, bar status, antara muka, ui, lawatan, skrin penuh
from: 7394fc49
---

Skrin mempunyai lima bahagian: bar alat di atas, sejarah di sebelah kiri, paparan 3D di tengah, panel sifat di sebelah kanan dan bar status di sepanjang bahagian bawah. Di atas semuanya terdapat bar aplikasi CadCraft.

## Bar aplikasi

Bar nipis di bahagian paling atas tergolong dalam laman CadCraft, bukan PartCraft itu sendiri. Ia memaparkan nama aplikasi dan tempat ia berjalan, menu versi, **Mengenai PartCraft**, butang mod skrin dan suis tema Paper / Model.

- **Paper** ialah garisan gelap pada helaian cerah. **Model** ialah garisan cerah pada latar belakang gelap. Warna lakaran mengikut tema.
- {{ui:Tetapan}} (ikon gear, atau {{key:Mod+,}}) mempunyai tab {{ui:PartCraft}}: butang tetikus mana yang memutar paparan, roda tetikus atau pad jejak, dan hubungan semasa melakar. Lihat [Tetapan PartCraft](topic:settings).
- Butang mod skrin, atau {{key:Ctrl+Shift+F}}, bergilir antara normal, skrin penuh, dan skrin penuh dengan bar disembunyikan. Dengan bar disembunyikan, gerakkan penunjuk ke tepi atas (atau ketik di situ) untuk membawanya kembali. {{key:Esc}} kembali ke normal. Kekunci ini ialah {{key:Ctrl+Shift+F}} juga pada Mac, bukan ⌘.

## Bar alat

Bar alat dikumpulkan. Ia berubah mengikut apa yang anda lakukan, supaya ia muat dalam satu baris:

| Kumpulan | Butang | Dipaparkan |
|---|---|---|
| Fail | {{ui:Baharu}}, {{ui:Buka}}, {{ui:Simpan}}, {{ui:Eksport}} (menu) | Sentiasa |
| Lakaran | {{ui:Lakaran}} | Apabila tiada lakaran dibuka |
| Lakaran | {{ui:Keluar}}, {{ui:Garisan}}, {{ui:Segi empat tepat}}, {{ui:Bulatan}}, {{ui:Lengkok}}, {{ui:Titik}}, {{ui:Garis pusat}}, {{ui:Fillet}}, {{ui:Dimensi}}, {{ui:Binaan}} | Hanya semasa lakaran dibuka |
| Ciri | {{ui:Ekstrud}}, {{ui:Potong}}, {{ui:Putar}}, {{ui:Lubang}}, {{ui:Linear}}, {{ui:Bulatan}}, {{ui:Cermin}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Cangkerang}}, {{ui:Lagi}} (menu: Potong putar, Satah, Paksi, Titik, Sweep, Loft, Cerun tarik) | Pada bahagian, bukan semasa lakaran atau lukisan dibuka. Fillet dan Chamfer berfungsi pada tepi lurus antara dua muka rata; Cangkerang dan Cerun tarik pada muka rata. Sweep dan Loft belum dibina dalam versi ini (memerlukan kernel tepat); klik salah satu memberitahu begitu |
| Ciri | {{ui:Selesai}} | Hanya semasa anda memilih tepi atau muka untuk fillet, chamfer, cangkerang atau cerun tarik |
| Lukisan | {{ui:Lukisan}} | Pada bahagian (boleh digunakan sebaik bahagian mempunyai pepejal) |
| Lukisan | {{ui:Datum}}, {{ui:Bingkai}}, {{ui:Kemasan}}, {{ui:Perincian}}, {{ui:PDF}}, {{ui:Kembali}} | Hanya pada helaian lukisan |
| Himpunan | {{ui:Himpunan}} | Pada bahagian (boleh digunakan sebaik bahagian mempunyai pepejal) |
| Himpunan | {{ui:Tambah salinan}}, {{ui:Selit}}, {{ui:Sambungan}}, {{ui:Pertembungan}}, {{ui:Sunting bahagian}}, {{ui:Tutup}} | Hanya dalam himpunan |
| Himpunan | {{ui:Kembali}} | Semasa anda menyunting bahagian daripada himpunan |
| Sunting | {{ui:Buat asal}}, {{ui:Buat semula}}, {{ui:Salin}}, {{ui:Tampal}}, {{ui:Lagi}} (menu: Potong, Salin, Tampal, Tampal di tempat yang sama, Pendua, Padam, Pilih semua, Nyahpilih semua) | Sentiasa; setiap item bertindak pada lakaran, sejarah atau himpunan yang anda sedang gunakan |
| Paparan | {{ui:Muat}}, {{ui:Normal kepada}}, {{ui:Pandangan}} (menu: Ukur, Sifat jisim, Keratan, Cerun tarik, Zebra, Kelengkungan, {{ui:Satah asas}}, kemudian Isometrik, Depan, Belakang, Atas, Bawah, Kanan, Kiri) | Sentiasa |

Letakkan penunjuk pada butang untuk melihat apa fungsinya dan pintasannya. Butang yang malap tidak boleh digunakan sekarang: contohnya butang ciri semasa lakaran dibuka, atau {{ui:Sambungan}} sebelum himpunan mempunyai dua bahagian.

Menu {{ui:Lagi}} dalam kumpulan Sunting menyenaraikan setiap tindakan sunting dengan pintasannya. Apa yang disalin dan ditampal bergantung pada tempat anda berada; lihat [Salin, tampal dan pendua](topic:copy-paste). Item yang malap menerangkan sebabnya dalam tooltipnya.

Menu {{ui:Eksport}} memuatkan {{ui:STL, untuk percetakan 3D}}, {{ui:3MF, untuk percetakan 3D}}, {{ui:STEP AP242 (pepejal tepat)}}, {{ui:STEP AP214 (pepejal tepat)}}, {{ui:STEP (berfaset, kernel jejaring)}}, {{ui:STEP AP214 (berfaset, kernel jejaring)}}, {{ui:DXF bagi lakaran atau muka rata}} dan {{ui:Lukisan (PDF): paparan, keratan, perincian, GD&T}}. Dua item STEP tepat dimalapkan: ia belum dibina dalam versi ini, jadi gunakan {{ui:STEP (berfaset, kernel jejaring)}}.

## Sejarah (kiri)

Panel di sebelah kiri ialah sejarah ciri bahagian, senarai yang PartCraft bina semula dari atas ke bawah.

- Tajuknya ialah nama bahagian ("Part1" sehingga anda menamakannya semula).
- **Satah depan**, **Satah atas** dan **Satah kanan** datang dahulu. Klik satu untuk memilihnya; ia disorot dalam paparan.
- Di bawahnya ialah ciri anda mengikut urutan ia dibuat. Lakaran yang digunakan oleh sesuatu ciri diinden di bawah ciri itu.
- Bendera di hujung kanan baris memberitahu anda keadaannya:

| Bendera | Maksud |
|---|---|
| (tiada) | Dibina, dan lakaran sepenuhnya ditakrifkan |
| − | Lakaran yang kurang ditakrifkan (ia masih boleh bergerak) |
| + | Lakaran yang terlebih takrif |
| ⚠ | Dibina, dengan amaran (letakkan penunjuk untuk membaca) |
| ⚠ ralat | Ciri gagal. Letakkan penunjuk untuk membaca sebabnya, atau klik |
| ⚠ belum dibina | Ciri itu memerlukan ciri lain yang gagal atau dimatikan |
| mati | Digantung |

- Setiap ciri menunjukkan nombor utamanya selepas namanya, seperti "25 mm" untuk Ekstrud atau "Ø6.6 thru" untuk lubang. Klik dua kali nombor itu, atau tekan {{key:F2}} pada baris, untuk menukarnya di situ. Lihat [Tukar saiz](topic:change-sizes).
- Klik ciri untuk menyuntingnya di sebelah kanan. Klik dua kali lakaran untuk membukanya.
- Apabila anda gulung balik, baris **Bar gulung balik · gulung ke hadapan** muncul dalam senarai. Ciri di bawahnya malap dan tidak dibina.
- Dengan baris difokuskan, {{key:Up}} dan {{key:Down}} bergerak antara baris, dan {{key:Alt+Up}} / {{key:Alt+Down}} mengalihkan ciri itu sendiri, di mana sejarah membenarkannya.

Dalam himpunan, panel yang sama menyenaraikan **Bahagian** (yang pertama ditanda "terikat") dan **Sambungan** sebaliknya.

### Fakta bahagian

Di bawah sejarah, kotak **Bahagian** menyenaraikan **Isipadu**, **Luas permukaan**, **Saiz (X × Y × Z)**, **Lubang tembus**, **Jasad**, **Segi tiga**, bilangan **Ciri** dan berapa banyak yang **Gagal**. Isipadu dan luas ialah bagi pepejal berfaset yang dibina oleh kernel jejaring, sedikit di bawah nilai sebenar bagi bentuk bulat (lihat [Ciri dan pilihannya](topic:features#curves-resolution)).

Dalam himpunan, kotak itu bertajuk **Himpunan**: Bahagian, Contoh, Sambungan, Tidak disambung dan Gangguan.

## Paparan 3D (tengah)

Paparan menunjukkan pepejal, satah asas dan mana-mana lakaran yang belum digunakan oleh ciri.

Satah asas dilukis penuh semasa bahagian kosong. Apabila ia mempunyai pepejal, ia menjadi pudar: dilukis samar, supaya tidak menutup bahagian, dan klik melepasi mereka ke bahagian. Ia kembali penuh semasa anda memilih tempat untuk melakar ({{ui:Lakaran}} tanpa apa dipilih) dan apabila anda memilih satu dalam sejarah. {{ui:Pandangan}} › {{ui:Satah asas}} menyembunyikannya sepenuhnya; ia masih ditunjukkan semasa anda memilih tempat untuk melakar. PartCraft mengingati pilihan itu.

- Seret untuk memutar bahagian, klik kanan atau tengah-seret untuk memanning, gulung roda untuk zum pada penunjuk. Butiran dalam [Kekunci dan tetikus](topic:keyboard).
- Letakkan penunjuk pada muka, tepi atau satah untuk melihatnya menyala. Klik untuk memilih. Muka disorot secara keseluruhan dan tepi dilukis serta dipilih secara keseluruhan. {{key:Shift}}+klik mengumpulkan beberapa tepi atau muka. Ia kekal ditanda.
- Kubus pandangan di sudut kanan atas berputar bersama bahagian: klik muka, tepi atau penjuru untuk melihat dari situ, seret untuk memutar, dan butang rumah kembali ke permulaan. Lihat [Kubus pandangan](topic:view-cube).
- Apabila sesuatu Ekstrud dipilih, anak panah oren ditunjukkan pada muka hujungnya, dan Putar mempunyai anak panah lengkung di hujung pusingannya: seret untuk menukar kedalaman atau sudut, atau taip dalam kotak di sebelahnya. Lihat [Tukar saiz](topic:change-sizes#drag-it-in-the-view).
- Apabila bahagian kosong, kotak bertajuk **Mulakan bahagian** menyenaraikan langkah pertama.
- Lepaskan fail `.partcraft.json` atau `.partcraft-asm.json` di mana-mana sahaja pada paparan untuk membukanya. Fail `.step`, `.stp`, `.stl`, `.obj`, `.3mf` atau `.3dm` yang dilepaskan di situ dibuka sebagai jasad pepejal.

### Semasa anda memilih tepi atau muka

Selepas {{ui:Fillet}}, {{ui:Chamfer}} atau {{ui:Cangkerang}} tanpa apa dipilih (atau {{ui:Pilih tepi}} pada ciri sedemikian), bahagian ditunjukkan seperti sebelum ciri itu. Klik tepi atau muka untuk menambah atau membuangnya; tanda mereka menunjukkan apa yang berada dalam pilihan. {{ui:Selesai}} atau {{key:Esc}} menamatkannya. Lihat [Bundarkan, serongkan dan jadikan berongga](topic:fillet-chamfer-shell).

### Pada helaian lukisan

{{ui:Lukisan}} menggantikan paparan 3D dengan helaian lukisan A3. Roda untuk zum, seret kanan atau tengah untuk memanning, {{key:F}} untuk memuatkan. Lihat [Buat lukisan](topic:drawing-pdf).

### Semasa lakaran dibuka

Paparan berputar untuk menghadap satah lakaran secara lurus dan lapisan lakaran 2D muncul di atas. Bahagian hanya menunjukkan ciri yang dibuat sebelum lakaran ini. Jalur di sudut kiri atas menunjukkan cip keadaan lakaran ("Sepenuhnya ditakrifkan", "Kurang ditakrifkan · 3 darjah kebebasan" dan seterusnya) serta namanya, seperti "Sketch2 pada muka Extrude1".

## Panel sifat (kanan)

Panel di sebelah kanan menunjukkan apa sahaja yang dipilih, dan tajuknya menamakannya:

- **Bahagian** (tiada apa dipilih): **Nama** bahagian dan tetapan **Lengkung**.
- Satah: butang {{ui:Lakaran di atasnya}}.
- **Muka**: jenisnya (Muka rata, Silinder dengan jejari dan paksinya, Kon, Sfera atau Torus), luasnya, ciri yang menghasilkannya, dan untuk muka rata {{ui:Lakaran pada muka ini}}, {{ui:Normal kepada}}, {{ui:Eksport muka sebagai DXF}}, {{ui:Ekstrud dari muka}}, {{ui:Potong ke dalam}} dan {{ui:Lubang di sini}} (lihat [Tarik atau tolak seluruh muka](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Tepi**: jenisnya (lurus, bulatan dengan pusat dan jejarinya, atau lengkung), panjangnya, dan dua muka yang terletak di antaranya (seperti "muka hujung Extrude1 dan sisi Extrude1"), dengan butang {{ui:Fillet}} dan {{ui:Chamfer}}.
- Beberapa tepi atau muka dipilih dengan {{key:Shift}}: berapa banyak, dengan {{ui:Fillet}} dan {{ui:Chamfer}} untuk tepi, dan {{ui:Kosongkan}}.
- Satu ciri: nombor dan pilihannya, dimensi lakarannya, kemudian {{ui:Gantung}}, {{ui:Gulung balik ke sini}}, {{ui:Alih ke atas}}, {{ui:Alih ke bawah}}, {{ui:Padam}} dan **Nama** ciri itu.
- Lakaran terbuka: keadaannya, hubungan yang boleh anda tambah pada pilihan, senarai hubungan dan dimensi, **Tambah mengikut koordinat**, dan {{ui:Keluar lakaran}}, {{ui:Muat}} dan {{ui:Eksport sebagai DXF}}.
- Pada helaian lukisan: tetapan keratan dan perincian, atau simbol GD&T yang dipilih.
- Dalam himpunan: himpunan, bahagian yang dipilih, atau sambungan yang dipilih.

Setiap kotak nombor berkuat kuasa apabila anda menekan {{key:Enter}} atau {{key:Tab}}, atau klik di luarnya. Bahagian dibina semula serta-merta; tiada butang OK. Gunakan {{key:Mod+Z}} untuk kembali.

## Bar status (bawah)

- Di sebelah kiri, koordinat penunjuk dalam lakaran (hanya semasa lakaran dibuka).
- Di tengah, mesej: apa yang perlu dilakukan seterusnya, dan mengapa sesuatu ditolak. Baca apabila nampaknya tiada apa berlaku.
- Berhampiran kanan, cip kernel: sentiasa "Kernel jejaring" dalam versi ini. Letakkan penunjuk untuk maksudnya. Lihat [Kernel jejaring](topic:solid-kernels).
- Di sebelah kanan, cip: "Membina semula…" semasa bahagian dibina semula, kemudian "Dibina semula dalam … ms" apabila semuanya baik, atau "1 ciri gagal". Dalam himpunan ia berkata "Diletakkan dalam … ms" atau mengira masalah sambungan.

Lihat juga [Mulakan manual dalam Ilustrasi](topic:illustrate): ruang kerja yang membuat manual himpunan daripada bahagian dan himpunan anda.

## Pada skrin sempit

Sehingga 760 piksel lebar, seperti pada telefon, paparan menyimpan skrin: bar alat ialah satu baris yang menatal ke sisi, dan panel dibuka sebagai helaian dari bar di bahagian bawah. {{ui:Alat}} menyembunyikan bar alat dan {{ui:Alih}} meletakkannya di bahagian bawah. Lihat [Pad jejak, sentuhan dan skrin kecil](topic:trackpad-and-touch).
