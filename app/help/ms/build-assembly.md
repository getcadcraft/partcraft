---
title: Bina himpunan dengan sambungan
summary: Mulakan himpunan daripada bahagian, masukkan salinan dan fail bahagian lain, cantumkannya dengan sambungan tegar, berputar, gelongsor, silinder, satah, bola dan pin-dalam-slot pada muka rata, pusatkan sambungan pada paksi, sunting bahagian di tempatnya dan simpan himpunan.
keywords: himpunan, padan, padanan, sambungan, gelung, gelung tertutup, pautan, empat bar, mekanisme, tegar, berputar, gelongsor, silinder, satah, bola, sambungan bola, sfera, pin slot, pin dalam slot, sisip komponen, ditanah, tetap, sepusat, koinsiden, sunting bahagian, dalam konteks, partcraft-asm
from: a53bbfef
---

Himpunan menyusun bahagian bersama. Dalam PartCraft, **sambungan** meletakkan bahagian: setiap sambungan duduk pada muka rata setiap daripada dua bahagian dan meletakkannya muka ke muka. Sambungan berputar membenarkan satu bahagian berpusing, sambungan gelongsor membenarkannya menggelongsor, dan sambungan tegar memegangnya.

## Mulakan himpunan

1. Bina bahagian dengan pepejal (bahagian kosong tidak boleh masuk ke dalam himpunan: "Bina pepejal dahulu, kemudian masukkannya ke dalam himpunan.").
2. Pilih {{ui:Himpunan}} di bar alat.

Bar status berkata "Himpunan dimulakan dengan Part1 sebagai bahagian ditanah. Masukkan lebih banyak bahagian ({{ui:Tambah salinan}}, {{ui:Selit}}, atau {{ui:Sunting}} › {{ui:Pendua}}), kemudian sambungkannya." Panel kiri kini menyenaraikan **Bahagian** dan **Sambungan**, dan bar alat menunjukkan alat himpunan. Alat lakaran dan ciri tersembunyi.

Bahagian pertama ialah **ditanah**: ia tidak pernah bergerak, dan segala yang lain diletakkan relatif kepadanya.

## Masukkan bahagian

- {{ui:Tambah salinan}} memasukkan satu lagi salinan bahagian yang dipilih (atau yang terakhir). Salinan berkongsi satu bahagian: sunting satu dan setiap salinan berubah.
- {{ui:Pendua}} ({{key:Mod+D}}) dalam kumpulan Sunting melakukan perkara yang sama untuk bahagian yang dipilih. {{key:Mod+C}} dan {{key:Mod+V}} menyalin bahagian dan menampalkannya di sebelah yang lain, dalam himpunan ini atau yang lain; {{key:Mod+Shift+V}} menampalkannya di tempat yang sama. Lihat [Salin, tampal dan pendua](topic:copy-paste).
- {{ui:Selit}} memasukkan bahagian daripada fail `.partcraft.json` di komputer anda. Bahagian itu disalin ke dalam himpunan.

Bahagian baharu muncul 20 mm di sebelah kanan segala yang sudah ada, dan kekal di situ sehingga sambungan meletakkannya. Bahagian tanpa sambungan juga boleh dialih dengan tangan: nilai ditaip atau anak panah yang anda seret (lihat [Senarai bahagian, pandangan letupan dan alih bahagian](topic:assembly-bom-explode)).

## Sambungkan dua bahagian

1. Pilih {{ui:Sambungan}} atau tekan {{key:J}}. Panel kanan menyatakan **Sambungan baharu**.
2. Klik muka rata pada bahagian pertama. Ia disorot.
3. Klik muka rata pada bahagian kedua.

Bahagian kedua melompat supaya mukanya terletak pada muka bahagian pertama, menghadapnya. Sambungan muncul di bawah **Sambungan**, contohnya "Revolute1", dan panel kanan menunjukkan tetapannya.

- Jika kedua-dua muka dibuat oleh revolusi, sambungan bermula sebagai **berputar**; jika tidak, **tegar**. Tukarnya kemudian.
- Muka melengkung tidak boleh dipilih: "Muka itu melengkung. Pilih muka rata (untuk berputar tentang lubang atau paksi revolusi, pilihnya kemudian dalam sambungan)."
- {{key:Esc}} membatalkan sambungan yang sudah dimulakan (atau klik bahagian dalam senarai di sebelah kiri).

### Tetapan sambungan

| Tetapan | Apa yang dilakukannya |
|---|---|
| **Jenis** | Salah satu sambungan dalam jadual di bawah |
| **Sudut (°)** | Memutar bahagian kedua tentang paksi sambungan (tegak lurus dengan muka) |
| **Ofset (mm)** | Mengalihkan bahagian kedua sepanjang paksi, menjauhi muka (nilai negatif menolaknya ke dalam) |
| **Sepanjang X**, **Sepanjang Y**, **Condong sekitar X**, **Condong sekitar Y**, **Sepanjang slot**, **Arah slot** | Nilai lain, ditunjukkan untuk sambungan yang menggunakannya |
| **Pusat pada** (untuk setiap sisi) | Tempat paksi sambungan menyilang muka: "The face's own origin" (asalan muka itu sendiri), paksi revolusi ("Axis of Revolve1") atau paksi satu lubang ("Hole1, hole 2") |

Setiap nilai yang dibenarkan sambungan bergerak mempunyai peluncur seret di bawah kotaknya; yang lain ditetapkan sekali sahaja.

| Sambungan | Apa yang bergerak | Ditetapkan sekali |
|---|---|---|
| **Tegar** | tiada | Sudut, Ofset |
| **Berputar** | Sudut (engsel) | Ofset |
| **Gelongsor** | Ofset (laci) | Sudut |
| **Silinder** | Sudut dan Ofset (aci dalam galas biasa) | |
| **Satah** | Sepanjang X, Sepanjang Y merentas muka, dan Sudut (bahagian menggelongsor di atas meja) | |
| **Bola** | Sudut (putaran) dan Condong sekitar X dan Y, tentang pusat sambungan (sambungan bola) | |
| **Pin dalam slot** | Sepanjang slot dan Sudut (pin dalam slot lurus) | Arah slot: sudut slot dari X muka |

X dan Y bagi muka ialah milik muka bahagian pertama; pusat sambungan ditetapkan oleh **Pusat pada**.

"The face's own origin" ialah asalan bahagian yang diunjurkan ke muka, yang selalunya bukan tempat anda mahu bahagian sejajar. Untuk bahagian bulat dan pin, tetapkan **Pusat pada** kepada paksi revolusi atau lubang di kedua-dua belah: paksi kemudian sejajar, seperti padanan sepusat.

### Contoh: dua flens dibaut muka ke muka

1. Buka bahagian flens (revolusi dengan corak bulat lubang) dan pilih {{ui:Himpunan}}.
2. Pilih {{ui:Tambah salinan}}.
3. Tekan {{key:J}}, klik muka rata cakera flens pertama (muka tempat lubang baut bermula), kemudian muka yang sama pada flens kedua. Muka itu dibuat oleh revolusi, jadi sambungannya ialah berputar.
4. Tetapkan **Pusat pada** kepada "Axis of Revolve1" untuk kedua-dua belah. Flens kini berkongsi satu paksi.
5. Taip `22.5` dalam **Sudut (°)** untuk menjajarkan lubang baut, atau seret peluncur.

## Gelung tertutup: pautan

Bahagian yang disambungkan dalam bulatan (pautan empat bar, engkol dan gelongsor, rangka yang dikukuhkan di kedua-dua belah) membentuk **gelung**. PartCraft menyelesaikan setiap gelung supaya ia tertutup: sambungan padanya mengambil nilai yang menyambung bulatan itu, bergerak seminimum yang mungkin dari kedudukan asalnya.

- **Tetapkan atau seret** nilai sambungan pada gelung dan selebihnya gelung mengikut. Untuk pautan empat bar, seret **Sudut** engkol dan penyambung serta pemutar bergerak bersamanya. Nilai yang anda tetapkan dikekalkan; yang lain dikira daripadanya.
- Dalam senarai, sambungan pada gelung yang masih boleh bergerak ialah **biru**: nilai lain masih boleh ditetapkan. Gelung yang tidak boleh bergerak (rangka berkuku) kekal hitam. Gelung yang tidak boleh ditutup ialah **merah**.
- Kotak **Bahagian** menunjukkan **Gelung**: berapa yang tertutup dan berapa nilai masih boleh bergerak, contohnya "1 tertutup; 1 nilai masih boleh bergerak".
- {{ui:Semak pergerakan untuk pertembungan}} menyapu sambungan pada gelung dengan gelung mengikutinya, langkah demi langkah (lihat [Semak himpunan untuk pertembungan dan pergerakan](topic:check-assembly)).

Pautan rata yang disusun daripada bar rata mesti sepakat dalam kedalaman: dua bahagian yang disambungkan muka ke muka pada kedua-dua belah gelung memerlukan ketinggian timbunan yang sama ke dua arah. Gunakan **Ofset** sambungan untuk mengangkat bahagian di mana timbunan tidak menambah, atau gelung tidak dapat ditutup.

## Bekerja dengan bahagian

Klik bahagian dalam pandangan atau senarai untuk memilihnya. Panel kanan menunjukkan nama bahagiannya, berapa salinan, isipadunya, sambungannya, dan sama ada ia ditanah, ditetapkan oleh sambungannya, atau "Tidak disambung: kekal di tempat ia diletakkan". Butang:

- {{ui:Sunting bahagian ini}} (atau {{ui:Sunting bahagian}} di bar alat, atau klik dua kali bahagian dalam senarai): membuka bahagian untuk disunting;
- {{ui:Selit salinan}};
- {{ui:Jadikan bahagian yang ditetapkan}};
- {{ui:Alih keluar}}: juga membuang sambungannya, selepas bertanya.

Himpunan sentiasa mengekalkan sekurang-kurangnya satu bahagian: "Himpunan mengekalkan sekurang-kurangnya satu bahagian. Tutupnya sebaliknya."

### Sunting bahagian di tempatnya

1. Pilih bahagian dan pilih {{ui:Sunting bahagian}}. Bahagian dibuka dengan sejarahnya; tajuknya berkata "Bracket (dalam himpunan Bracket)".
2. Ubahnya seperti mana-mana bahagian.
3. Pilih {{ui:Kembali}} di bar alat. Himpunan dikemas kini: setiap salinan bahagian itu berubah, dan sambungan pada muka yang dibuat oleh tepi lakaran mengikut.

Membawa perubahan itu kembali ialah satu langkah dalam senarai buat asal himpunan.

## Buat asal, simpan dan tutup

- Himpunan mempunyai senarai buat asalnya sendiri: {{key:Mod+Z}} dan {{key:Mod+Y}} berfungsi pada sambungan, masukan dan tetapan.
- {{ui:Simpan}} atau {{key:Mod+S}} memuat turun `<assembly name>.partcraft-asm.json`, dengan setiap bahagian di dalamnya. Buka kemudian dengan {{ui:Buka}}.
- {{ui:Tutup}} menutup himpunan dan kembali kepada bahagian yang anda mulakan. Jika himpunan belum disimpan, ia bertanya: {{ui:Batal}}, {{ui:Buang himpunan}} atau {{ui:Simpan dahulu}}.
- Untuk menamakan semula himpunan, klik ruang kosong supaya tiada apa dipilih, dan tukar **Nama** dalam panel kanan.

## Himpunan besar

Himpunan boleh memegang beribu salinan beberapa bahagian. Salinan satu bahagian dilukis bersama, sambungan yang anda pusingkan hanya meletakkan bahagian di belakangnya, dan senarai bahagian menunjukkan baris pertamanya dengan butang "Tunjuk lagi" di bawahnya (bahagian yang dipilih sentiasa disenaraikan).

- Semasa anda memutar atau zum pandangan, himpunan melebihi kira-kira 300,000 segi tiga dilukis sebagai satu kotak bagi setiap bahagian, kemudian sepenuhnya sejurus selepas anda berhenti.
- {{ui:Pandangan}} › {{ui:Paparan ringan}} memastikan kotak sentiasa dipaparkan. Memilih bahagian dan sambungan masih menggunakan bahagian sebenar.
- Kelajuan putaran juga bergantung pada kad grafik anda. Nombor yang diukur PartCraft ada dalam nota keluaran bersama mesin yang digunakan.

## Masalah sambungan

- Bahagian yang tidak dicapai oleh mana-mana sambungan disenaraikan sebagai **bebas**, dan panel berkata "Bracket2 tidak disambungkan ke bahagian yang ditetapkan, jadi ia kekal di tempat ia diletakkan."
- Gelung yang tidak dapat ditutup (panjang tidak sampai, had menghentikan sambungan, muka tidak sepakat dalam kedalaman): "Revolute3 berada dalam gelung yang tidak dapat ditutup: ia tersasar sebanyak 2.000 mm. Semak muka, ofset dan had sambungan gelung." Sambungannya bertukar merah.
- Jika muka atau paksi yang digunakan sambungan hilang selepas menyunting bahagian: "Muka yang digunakan sambungan ini telah hilang daripada Bracket." Buang sambungan dan buat semula.

Seterusnya: [Semak himpunan untuk pertembungan dan pergerakan](topic:check-assembly).
