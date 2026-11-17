---
title: Buat lukisan dengan pandangan, keratan dan GD&T
summary: Buka helaian lukisan, tambah keratan dan pandangan perincian, letakkan datum, bingkai kawalan ciri dan simbol kemasan permukaan, pilih saiz helaian, isi blok tajuk dan semakan, dan eksport helaian sebagai PDF.
keywords: jadual lubang, carta lubang, kedudukan lubang, tag, lukisan, lukisan 2D, helaian, saiz helaian, a4, a3, a2, a1, a0, ansi, blok tajuk, semakan, blok semakan, nombor lukisan, bahan, pdf, pandangan, ortografik, sudut ketiga, isometrik, pandangan keratan, pandangan perincian, gd&t, datum, bingkai kawalan ciri, toleransi, kedudukan, kerataan, kemasan permukaan, kekasaran, cetak
from: 39e944c0
---

PartCraft membuat helaian lukisan daripada bahagian: pandangan depan, atas dan kanan dalam unjuran sudut ketiga, pandangan isometrik, saiz keseluruhan dan blok tajuk pada helaian dari A4 hingga A0 atau ANSI A hingga E. Di atasnya, anda boleh menambah keratan, pandangan perincian dan simbol GD&T. Helaian dikemas kini apabila bahagian berubah, dan tetapannya disimpan dalam fail bahagian.

## Buka helaian lukisan

1. Bina bahagian. (Jika tiada apa yang dibina: "Bina pepejal dahulu, kemudian buat lukisannya.")
2. Pilih {{ui:Drawing}} pada bar alat.

Paparan 3D digantikan oleh helaian. Bar alat memaparkan {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}} dan {{ui:Back}}, dan panel kanan diketuai **Lukisan**. Bar status memberitahu bagaimana pandangan dibuat: "Lukisan (lengkung dilukis sebagai faset). Datum, Bingkai dan Kemasan meletakkan GD&T pada pandangan; panel menetapkan keratan dan pandangan perincian." Pandangan dilukis daripada faset kernel mesh, jadi tepi bulat ialah segmen lurus pendek; lengkung sebenar memerlukan kernel tepat, yang versi ini tidak mempunyainya.

Bergerak di sekitar helaian: putar roda untuk zum, seret dengan butang kanan atau tengah untuk pan, tekan {{key:F}} untuk memuatkan helaian ke skrin. Dengan helaian difokuskan, {{key:Plus}} dan {{key:Minus}} zum, dan {{key:Shift}} bersama kekunci anak panah untuk pan.

Pilih {{ui:Back}}, {{ui:Back to the model}} atau tekan {{key:Esc}} (dengan tiada apa dipilih dan tiada alat aktif) untuk kembali ke model 3D.

## Apa yang ada pada helaian

- **Helaian yang anda pilih**, landskap (A3 melainkan anda pilih yang lain), dengan sempadan dan **blok tajuk**: tajuk, syarikat, nombor lukisan, semakan, bahan, dilukis / disemak / diluluskan oleh, tarikh, skala, saiz helaian, "Unit: milimeter · Unjuran sudut ketiga", dan sama ada pandangan tepat atau berfaset.
- **Blok semakan** di sudut kanan atas sebaik anda menambah semakan.
- **Pandangan depan, atas dan kanan**: pandangan atas di atas pandangan depan, pandangan kanan di sebelah kanannya. Tepi tersembunyi dilukis putus-putus.
- **Pandangan isometrik** di mana ada ruang.
- **Saiz keseluruhan**: lebar dan tinggi pada pandangan depan, kedalaman pada pandangan atas.
- Satu **skala** untuk pandangan utama daripada siri ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), dipilih supaya ia muat.

## Pilih saiz helaian

Pada helaian lukisan, dengan tiada apa dipilih, pilih {{ui:Sheet}} dalam panel kanan: **A4, A3, A2, A1, A0** (ISO 216) atau **ANSI A, B, C, D, E** (11 × 8.5 hingga 44 × 34 in). Pandangan disusun semula pada skala ISO terbesar yang muat, jadi helaian yang lebih besar boleh menunjukkan bahagian dengan lebih besar.

## Isi blok tajuk

Medan **Blok tajuk** dalam panel kanan terus masuk ke helaian: {{ui:Title}}, {{ui:Drawing no.}}, {{ui:Revision}}, {{ui:Company}}, {{ui:Drawn by}}, {{ui:Checked by}}, {{ui:Approved by}}, {{ui:Date}} (tahun-bulan-hari), {{ui:General tolerance}} dan {{ui:Finish}} (dua yang terakhir dicetak tepat di atas blok tajuk). Taip dalam kotak dan tekan {{key:Enter}} atau klik di luar. Kotak kosong membiarkan selnya kosong, kecuali:

- **Title** menunjukkan nama bahagian sehingga anda menaip satu.
- **Date** menunjukkan hari ini sehingga anda menaip satu.
- **Revision** menunjukkan semakan terbaharu dalam senarai sehingga anda menaip satu.

**Material** datang daripada bahagian: klik ruang kosong dalam model, kemudian pilih {{ui:Material}} dalam panel Bahagian. Bahan yang sama memberi sifat jisim Ukur ketumpatannya.

## Tambah semakan

Di bawah **Semakan**, klik {{ui:Add revision}}. Setiap baris baharu mengambil huruf seterusnya (A, B, C …, selepas Z ialah AA) dan tarikh hari ini. Taip apa yang berubah dan siapa yang membuat perubahan itu. {{ui:Delete}} mengeluarkan satu baris. Blok semakan di sudut kanan atas helaian menyenaraikannya, yang tertua dahulu, sehingga 20.

Saiz helaian, blok tajuk, semakan dan bahan disimpan dalam fail bahagian, dan setiap perubahan ialah satu langkah {{ui:Undo}}.

## Tambah pandangan keratan

Bahagian dipotong oleh satah dan potongan itu dilorek. Seperti pandangan lain, keratan dilukis daripada faset, jadi tepi bulat ialah segmen lurus pendek.

1. Dalam panel kanan, tetapkan **Section A-A** kepada **Daripada pandangan depan**, **Daripada pandangan atas** atau **Daripada pandangan kanan**.
2. Keratan muncul pada helaian, dilorek di tempat potongan melalui bahan, dengan garisan pemotongan dan anak panah "A" pada pandangan tempat ia diambil.
3. Tetapkan **Cut at (mm)** untuk mengalihkan satah pemotongan. Ia bermula melalui tengah bahagian.

Tetapkan **Section A-A** kembali kepada **Tiada** untuk mengeluarkannya.

## Tambah pandangan perincian

1. Tetapkan **Detail B** kepada pandangan yang hendak dibesarkan (atau pilih {{ui:Detail}} pada bar alat).
2. Klik pusat kawasan yang hendak dibesarkan, pada pandangan itu. Bulatan berlabel "B" menandainya, dan "Detail B" yang dibesarkan muncul pada helaian dengan skalanya sendiri, contohnya "Detail B (2:1)".
3. Tetapkan **Detail radius (mm)** untuk saiz bulatan dan **Detail scale** untuk pembesaran: 2, 4, 5 atau 10 × helaian.

Perincian boleh diambil daripada pandangan depan, atas, kanan atau keratan, bukan daripada isometrik. Jika tiada ruang untuk setiap pandangan, panel memaparkan "Tiada ruang pada helaian untuk: perincian. Kecilkan perincian atau buang satu pandangan."

## Tambah jadual lubang

Jadual lubang menyenaraikan kedudukan lubang bahagian, untuk penggerudian atau CNC: pilih **Jadual lubang** › **Daripada pandangan atas** (atau depan, atau kanan) dalam panel.

- Setiap lubang yang dilihat hujung-ke-hujung dalam pandangan itu mendapat tag di sebelahnya: **A1**, **A2** … untuk saiz pertama, **B1** … untuk saiz seterusnya.
- Jadual menyenaraikan setiap tag, **X** dan **Y** dalam milimeter, dan saiznya: "Ø14 THRU", "Ø6.6 × 10 DEEP", lekuk kaunter atau sinki, atau panggilan ulir bagi lubang berulir.
- X dan Y diukur dari sudut kiri bawah garis luar pandangan, ditandakan **X0 Y0** pada helaian.
- Lubang yang dibuat oleh corak turut disertakan. Lubang yang tidak tegak lurus kepada pandangan dikira dalam panel dan dikecualikan daripada jadual.

Jadual diletakkan di ruang kosong pada helaian dan ke dalam PDF.

## Letakkan simbol GD&T dan kemasan permukaan

1. Pilih {{ui:Datum}}, {{ui:Frame}} (bingkai kawalan ciri) atau {{ui:Finish}} (simbol kemasan permukaan).
2. Klik titik pada pandangan tempat ia melekat. Ia melekat pada garisan terlukis terdekat dalam jarak 2.5 mm.
3. Simbol muncul dengan petunjuk, dipilih, dan panel kanan memaparkan tetapannya.

Seret simbol untuk mengalihkannya; petunjuknya kekal pada titik. Dengan simbol dipilih, kekunci anak panah menolaknya 1 mm. {{key:Delete}} atau {{key:Backspace}} (atau {{ui:Delete}} dalam panel) mengeluarkannya; {{ui:Done}} atau {{key:Esc}} menyahpilihnya. Setiap perubahan ada dalam senarai buat asal.

### Datum

**Huruf**: A hingga Z, tanpa I, O dan Q (kerana ia kelihatan seperti 1, 0 dan O). Setiap datum baharu mengambil huruf kosong yang seterusnya.

### Bingkai kawalan ciri

| Tetapan | Pilihan |
|---|---|
| **Toleransi** | Kelurusan, Kerataan, Kebulatan, Kesilinderan, Profil garisan, Profil permukaan, Serenjang, Kesudutan, Kesejajaran, Kedudukan, Kesepusatan dan Simetri (kedua-duanya dikeluarkan dalam Y14.5-2018, dan ditandakan begitu), Larian bulat, Larian jumlah |
| **Zon (mm)** | Nilai toleransi, lalai 0.1 |
| **Zon diameter (⌀)** | Bagi ciri dengan zon silinder; dihidupkan secara lalai untuk Kedudukan |
| **Bahan** | RFS (tiada), MMC (Ⓜ), LMC (Ⓛ), jika ciri membenarkannya |
| **Datum utama / Kedua / Ketiga** | Sehingga tiga huruf datum, setiap satu dengan **pengubah …** (MMB, LMB) jika dibenarkan |

PartCraft menyemak bingkai itu berbanding peraturan ASME Y14.5 dan memberitahu apa yang salah di bahagian atas panel, contohnya "Kerataan ialah toleransi bentuk: ia tidak mengambil rujukan datum." atau "Kedudukan memerlukan sekurang-kurangnya satu rujukan datum." Baris **Dibaca** menerangkan bingkai itu dengan jelas.

### Kemasan permukaan

| Tetapan | Pilihan | Lalai |
|---|---|---|
| **Ra (µm)** | Purata kekasaran | 1.6 |
| **Proses** | sebarang proses, dimesin, tiada bahan dikeluarkan | dimesin |
| **Nota** | Sehingga 40 aksara, seperti lekuk atau proses | |

Dengan tiada apa dipilih, panel menyenaraikan **Nota pada helaian**, setiap satu dengan **Pilih**.

## Eksport PDF

Pilih {{ui:PDF}} pada bar alat, {{ui:Export PDF}} dalam panel, atau {{ui:Export}}, kemudian {{ui:Drawing (PDF): views, section, detail, GD&T}} daripada model. PDF dimuat turun sebagai `<part name> - drawing.pdf`, dan bar status menyenaraikan apa yang ada padanya.

Cetak pada "Saiz sebenar" pada kertas bersaiz helaian itu untuk mengekalkan skala yang tepat.

## Had

| Belum dibina | Lakukan ini hari ini |
|---|---|
| Dimensi selain tiga saiz keseluruhan | Tambahkannya pada PDF dengan aplikasi penanda, atau eksport lakaran atau muka sebagai DXF dan dimensikannya dalam program CAD 2D |
| Lebih daripada satu keratan atau perincian; pandangan pecah-keluar, bantu dan unjuran | Tidak tersedia |
| Nota teks bebas dan jadual pada helaian (selain blok tajuk dan blok semakan) | Gunakan nota kemasan, atau tambah teks pada PDF |
| Lukisan himpunan | Tidak tersedia |

Aksara di luar set Eropah Barat dicetak sebagai "?" (PDF menggunakan Helvetica terbina dalam pembaca). Simbol GD&T dilukis sebagai garisan, jadi ia dicetak dalam mana-mana pembaca.

## Biar helaian membuatnya

- **Helaian › Automatik** memilih kertas untuk anda: skala piawai terbesar sehingga 1:1, pada helaian saiz-A terkecil yang memuatkan pandangan pada skala itu (senarai menunjukkan yang mana diambil).
- **Dimensikan lubang** mendimensikan lubang pada pandangan yang paling banyak melihatnya hujung-ke-hujung: tanda pusat pada setiap satu, satu panggilan bagi setiap saiz ("2× Ø6 THRU" dengan petunjuk), dan kedudukannya diukur dari sudut kiri bawah pandangan. Lebar, tinggi dan kedalaman keseluruhan sentiasa ada.
