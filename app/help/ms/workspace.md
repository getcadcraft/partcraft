---
title: Skrin PartCraft
summary: Lawatan setiap bar dan panel: bar alat dan cara ia berubah, sejarah, fakta bahagian, pandangan 3D, panel sifat dan bar status.
keywords: skrin, susun atur, bar alat, sejarah, pepohon ciri, sifat, panel, bar status, antara muka, ui, lawatan, skrin penuh
from: 5b5bb843
---

Skrin mempunyai lima bahagian: bar alat di atas, sejarah di kiri, pandangan 3D di tengah, panel sifat di kanan dan bar status di sepanjang bawah. Di atas semuanya terdapat bar aplikasi CadCraft.

## Bar aplikasi

Bar nipis di paling atas milik laman CadCraft, bukan PartCraft itu sendiri. Ia memaparkan nama aplikasi dan tempat ia berjalan, menu versi, **Perihal PartCraft**, butang mod skrin dan suis tema Kertas / Model.

- **Kertas** ialah garisan gelap pada helaian cerah. **Model** ialah garisan cerah pada latar gelap. Warna lakaran mengikut tema.
- {{ui:Tetapan}} (gear, atau {{key:Mod+,}}) mempunyai tab {{ui:PartCraft}}: butang tetikus mana yang memusing pandangan, roda tetikus atau pad sentuh, dan hubungan semasa melakar. Lihat [Tetapan PartCraft](topic:settings).
- Butang mod skrin, atau {{key:Ctrl+Shift+F}}, bergilir antara normal, skrin penuh, dan skrin penuh dengan bar disembunyikan. Dengan bar disembunyikan, gerakkan penunjuk ke tepi atas (atau ketik di situ) untuk memunculkannya semula. {{key:Esc}} kembali ke normal. Kekunci ini ialah {{key:Ctrl+Shift+F}} juga pada Mac, bukan ⌘.

## Bar alat

Bar alat dikumpulkan. Ia berubah mengikut apa yang anda lakukan, jadi ia muat dalam satu baris:

| Kumpulan | Butang | Dipaparkan |
|---|---|---|
| Fail | {{ui:Baharu}}, {{ui:Buka}}, {{ui:Simpan}}, {{ui:Eksport}} (menu) | Sentiasa |
| Lakaran | {{ui:Lakaran}} | Apabila tiada lakaran dibuka |
| Lakaran | {{ui:Keluar}}, {{ui:Garisan}}, {{ui:Segi empat tepat}}, {{ui:Bulatan}}, {{ui:Lengkok}}, {{ui:Titik}}, {{ui:Garis pusat}}, {{ui:Fillet}}, {{ui:Dimensi}}, {{ui:Binaan}} | Hanya semasa lakaran dibuka |
| Ciri | {{ui:Ekstrud}}, {{ui:Potong}}, {{ui:Putar}}, {{ui:Lubang}}, {{ui:Linear}}, {{ui:Bulatan}}, {{ui:Cermin}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Cangkerang}}, {{ui:Lagi}} (menu: Potongan berputar, Satah, Paksi, Titik, Sweep, Loft, Cerun tarik) | Pada bahagian, bukan semasa lakaran atau lukisan dibuka. Fillet dan Chamfer berfungsi pada tepi lurus antara dua muka rata; Cangkerang dan Cerun tarik pada muka rata. Sweep dan Loft belum dibina dalam versi ini (ia memerlukan kernel tepat); mengklik salah satu akan menyatakannya |
| Ciri | {{ui:Selesai}} | Hanya semasa anda memilih tepi atau muka untuk fillet, chamfer, cangkerang atau cerun tarik |
| Lukisan | {{ui:Lukisan}} | Pada bahagian (boleh digunakan apabila bahagian mempunyai pepejal) |
| Lukisan | {{ui:Datum}}, {{ui:Bingkai}}, {{ui:Kemasan}}, {{ui:Perincian}}, {{ui:PDF}}, {{ui:Kembali}} | Hanya pada helaian lukisan |
| Himpunan | {{ui:Himpunan}} | Pada bahagian (boleh digunakan apabila bahagian mempunyai pepejal) |
| Himpunan | {{ui:Tambah salinan}}, {{ui:Selit}}, {{ui:Sambungan}}, {{ui:Pertembungan}}, {{ui:Sunting bahagian}}, {{ui:Tutup}} | Hanya dalam himpunan |
| Himpunan | {{ui:Kembali}} | Semasa anda menyunting bahagian daripada himpunan |
| Sunting | {{ui:Buat asal}}, {{ui:Buat semula}}, {{ui:Salin}}, {{ui:Tampal}}, {{ui:Lagi}} (menu: Potong, Salin, Tampal, Tampal di tempat yang sama, Pendua, Padam, Pilih semua, Nyahpilih semua) | Sentiasa; setiap item berfungsi pada lakaran, sejarah atau himpunan yang anda sedang berada |
| Pandangan | {{ui:Muat}}, {{ui:Normal kepada}}, {{ui:Pandangan}} (menu: Ukur, Sifat jisim, Keratan, Cerun tarik, Zebra, Kelengkungan, {{ui:Satah asas}}, kemudian Isometrik, Depan, Belakang, Atas, Bawah, Kanan, Kiri) | Sentiasa |

Letakkan kursor di atas butang untuk melihat apa yang dilakukannya dan kekuncinya. Butang yang dimalapkan tidak boleh digunakan sekarang: contohnya butang ciri semasa lakaran dibuka, atau {{ui:Sambungan}} sebelum himpunan mempunyai dua bahagian.

Menu {{ui:Lagi}} dalam kumpulan Sunting menyenaraikan setiap tindakan penyuntingan beserta kekuncinya. Apa yang disalin dan ditampal bergantung pada tempat anda berada; lihat [Salin, tampal dan pendua](topic:copy-paste). Tip alat item yang dimalapkan menyatakan sebab ia tidak boleh bertindak sekarang.

Menu {{ui:Eksport}} memuatkan {{ui:STL, untuk percetakan 3D}}, {{ui:3MF, untuk percetakan 3D}}, {{ui:STEP AP242 (pepejal tepat)}}, {{ui:STEP AP214 (pepejal tepat)}}, {{ui:STEP (berfaset, kernel jejaring)}}, {{ui:STEP AP214 (berfaset, kernel jejaring)}}, {{ui:DXF bagi lakaran atau muka rata}} dan {{ui:Lukisan (PDF): paparan, keratan, perincian, GD&T}}. Item STEP tepat menulis muka bulat pada permukaan sebenarnya; yang berfaset menulisnya sebagai facet rata.

## Sejarah (kiri)

Panel di sebelah kiri ialah sejarah ciri bahagian, senarai yang dibina semula oleh PartCraft dari atas ke bawah.

- Tajuk ialah nama bahagian ("Part1" sehingga anda menamakannya semula).
- **Satah Depan**, **Satah Atas** dan **Satah Kanan** datang dahulu. Klik satu untuk memilihnya; ia diserlahkan dalam pandangan.
- Di bawahnya ialah ciri anda mengikut susunan ia dibuat. Lakaran yang digunakan oleh sesuatu ciri diinden di bawah ciri itu.
- Bendera di hujung kanan baris memberitahu anda keadaannya:

| Bendera | Maksud |
|---|---|
| (tiada) | Dibina, dan lakaran ditakrifkan sepenuhnya |
| − | Lakaran yang belum ditakrifkan sepenuhnya (ia masih boleh bergerak) |
| + | Lakaran yang ditakrifkan berlebihan |
| ⚠ | Dibina, dengan amaran (letak kursor untuk membaca) |
| ⚠ ralat | Ciri gagal. Letak kursor untuk membaca sebabnya, atau klik ia |
| ⚠ belum dibina | Ciri memerlukan yang lain yang gagal atau dimatikan |
| mati | Digantung |

- Setiap ciri memaparkan nombor utamanya selepas namanya, seperti "25 mm" untuk Ekstrud atau "Ø6.6 thru" untuk lubang. Klik dua kali nombor itu, atau tekan {{key:F2}} pada baris, untuk menukarnya di situ. Lihat [Tukar saiz](topic:change-sizes).
- Klik ciri untuk menyuntingnya di sebelah kanan. Klik dua kali lakaran untuk membukanya.
- Apabila anda berundur, baris **Bar undur · maju ke depan** berada dalam senarai. Ciri di bawahnya dimalapkan dan belum dibina.
- Dengan baris difokuskan, {{key:Up}} dan {{key:Down}} bergerak antara baris, dan {{key:Alt+Up}} / {{key:Alt+Down}} mengalihkan ciri itu sendiri, di mana sejarah membenarkan.

Dalam himpunan, panel yang sama menyenaraikan **Bahagian** (yang pertama ditandai "dibumikan") dan **Sambungan** sebagai ganti.

### Fakta bahagian

Di bawah sejarah, kotak **Bahagian** menyenaraikan **Isi padu**, **Luas permukaan**, **Saiz (X × Y × Z)**, **Lubang tembus**, **Jasad**, **Segi tiga**, bilangan **Ciri** dan berapa yang **Gagal**. Isi padu dan luas ialah pepejal berfaset yang dibina oleh kernel jejaring, sedikit kurang daripada nilai sebenar bagi bentuk bulat (lihat [Ciri dan pilihannya](topic:features#curves-resolution)).

Dalam himpunan, kotak itu bertajuk **Himpunan**: Bahagian, Kejadian, Sambungan, Belum dicantum dan Gangguan.

## Pandangan 3D (tengah)

Pandangan menunjukkan pepejal, satah asas dan sebarang lakaran yang belum digunakan oleh ciri.

Satah asas dilukis sepenuhnya semasa bahagian kosong. Apabila ia mempunyai pepejal, ia berundur: dilukis pudar, supaya ia tidak menutupi bahagian, dan klik melepasinya ke bahagian. Ia kembali sepenuhnya semasa anda memilih tempat untuk melakar ({{ui:Lakaran}} tanpa apa-apa dipilih) dan apabila anda memilih salah satu dalam sejarah. {{ui:Pandangan}} › {{ui:Satah asas}} menyembunyikannya sepenuhnya; ia masih dipaparkan semasa anda memilih tempat untuk melakar. PartCraft mengingati pilihan itu.

- Seret untuk memusing bahagian, seret kanan atau seret tengah untuk pan, gulung roda untuk zum di penunjuk. Butiran dalam [Kekunci dan tetikus](topic:keyboard).
- Letak kursor pada muka, tepi atau satah untuk melihatnya menyala. Klik untuk memilihnya. Muka diserlahkan seluruhnya dan tepi dilukis dan dipilih seluruhnya. {{key:Shift}}+klik mengumpul beberapa tepi atau muka. Ia kekal ditandakan.
- Kiub pandangan di kanan atas berpusing bersama bahagian: klik muka, tepi atau bucu untuk melihat dari situ, seret untuk memusing, butang rumah kembali ke permulaan. Lihat [Kiub pandangan](topic:view-cube).
- Ekstrud yang dipilih menunjukkan anak panah oren pada muka hujungnya, Putar anak panah melengkung di hujung pusingannya: seret untuk menukar kedalaman atau sudut, atau taip dalam kotak di sebelahnya. Lihat [Tukar saiz](topic:change-sizes#drag-it-in-the-view).
- Apabila bahagian kosong, kotak bertajuk **Mulakan bahagian** menyenaraikan langkah pertama.
- Lepaskan fail `.partcraft.json` atau `.partcraft-asm.json` di mana-mana pada pandangan untuk membukanya. Fail `.step`, `.stp`, `.stl`, `.obj`, `.3mf` atau `.3dm` yang dilepaskan di situ dibuka sebagai badan pepejal.

### Semasa anda memilih tepi atau muka

Selepas {{ui:Fillet}}, {{ui:Chamfer}} atau {{ui:Cangkerang}} tanpa apa-apa dipilih (atau {{ui:Pilih tepi}} pada ciri sebegitu), bahagian dipaparkan seperti sebelum ciri itu. Klik tepi atau muka untuk menambah atau membuangnya; tanda mereka menunjukkan apa yang dipilih. {{ui:Selesai}} atau {{key:Esc}} menamatkannya. Lihat [Bundarkan, serongkan dan cangkerang](topic:fillet-chamfer-shell).

### Pada helaian lukisan

{{ui:Lukisan}} menggantikan pandangan 3D dengan helaian lukisan A3. Roda zum, seret kanan atau tengah untuk pan, {{key:F}} memuatkan. Lihat [Buat lukisan](topic:drawing-pdf).

### Semasa lakaran dibuka

Pandangan berpusing untuk melihat terus ke satah lakaran dan lapisan lakaran 2D muncul di atas. Bahagian hanya menunjukkan ciri yang dibuat sebelum lakaran ini. Jalur di kiri atas menunjukkan cip keadaan lakaran ("Ditakrifkan sepenuhnya", "Ditakrifkan di bawah · 3 darjah kebebasan" dan sebagainya) dan namanya, seperti "Sketch2 pada satu muka Extrude1".

## Panel sifat (kanan)

Panel di sebelah kanan menunjukkan apa sahaja yang dipilih, dan tajuknya menamakannya:

- **Bahagian** (tiada apa dipilih): **Nama** bahagian dan tetapan **Lengkung**.
- Satah: butang {{ui:Lakaran di atasnya}}.
- **Muka**: jenisnya (Muka rata, Silinder dengan jejari dan paksinya, Kon, Sfera atau Torus), luasnya, ciri yang menghasilkannya, dan bagi muka rata {{ui:Lakaran pada muka ini}}, {{ui:Normal kepada}}, {{ui:Eksport muka sebagai DXF}}, {{ui:Ekstrud dari muka}}, {{ui:Potong ke dalam}} dan {{ui:Lubang di sini}} (lihat [Tarik atau tolak keseluruhan muka](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Tepi**: jenisnya (lurus, bulatan dengan pusat dan jejarinya, atau lengkung), panjangnya dan dua muka yang terletak di antaranya (seperti "muka hujung Extrude1 dan sisi Extrude1"), dengan butang {{ui:Fillet}} dan {{ui:Chamfer}}.
- Beberapa tepi atau muka dipilih dengan {{key:Shift}}: berapa banyak, dengan {{ui:Fillet}} dan {{ui:Chamfer}} untuk tepi, dan {{ui:Kosongkan}}.
- Ciri: nombor dan pilihannya, dimensi lakarannya, kemudian {{ui:Gantung}}, {{ui:Gulung balik ke sini}}, {{ui:Alih ke atas}}, {{ui:Alih ke bawah}}, {{ui:Padam}} dan **Nama**nya.
- Lakaran terbuka: keadaannya, hubungan yang boleh anda tambah pada pilihan, senarai hubungan dan dimensi, **Tambah mengikut koordinat**, dan {{ui:Keluar lakaran}}, {{ui:Muat}} dan {{ui:Eksport sebagai DXF}}.
- Pada helaian lukisan: tetapan keratan dan perincian, atau simbol GD&T yang dipilih.
- Dalam himpunan: himpunan, bahagian yang dipilih, atau sambungan yang dipilih.

Setiap kotak nombor berkesan apabila anda menekan {{key:Enter}} atau {{key:Tab}}, atau klik di tempat lain. Bahagian dibina semula serta-merta; tiada butang OK. Gunakan {{key:Mod+Z}} untuk kembali.

## Bar status (bawah)

- Di kiri, koordinat penunjuk dalam lakaran (hanya semasa lakaran dibuka).
- Di tengah, mesej: apa yang perlu dilakukan seterusnya, dan sebab sesuatu ditolak. Baca apabila nampaknya tiada apa yang berlaku.
- Berhampiran kanan, cip kernel: sentiasa "Kernel jejaring" dalam versi ini. Letak kursor untuk maksudnya. Lihat [Kernel pepejal](topic:solid-kernels).
- Di kanan, satu cip: "Membina semula…" semasa bahagian dibina semula, kemudian "Dibina semula dalam … ms" apabila semuanya baik, atau "1 ciri gagal". Dalam himpunan ia menunjukkan "Diletakkan dalam … ms" atau mengira masalah sambungan.

Lihat juga [Mulakan manual dalam Ilustrasi](topic:illustrate): ruang kerja yang membuat manual himpunan daripada bahagian dan himpunan anda.

## Pada skrin sempit

Sehingga 760 piksel lebar, seperti pada telefon, pandangan mengekalkan skrin: bar alat ialah satu baris yang bergolek ke sisi, dan panel dibuka sebagai helaian dari bar di bawah. {{ui:Alat}} menyembunyikan bar alat dan {{ui:Alih}} meletakkannya di bawah. Lihat [Pad sentuh, sentuhan dan skrin kecil](topic:trackpad-and-touch).
