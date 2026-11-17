---
title: Buat gambar dengan tampilan, potongan dan GD&T
summary: Buka lembar gambar, tambahkan potongan dan tampilan detail, letakkan datum, bingkai kontrol toleransi dan simbol kehalusan permukaan, pilih ukuran lembar, isi kepala gambar dan revisinya, lalu ekspor lembar sebagai PDF.
keywords: tabel lubang, bagan lubang, posisi lubang, tag, gambar, gambar 2D, lembar, ukuran lembar, a4, a3, a2, a1, a0, ansi, kepala gambar, revisi, blok revisi, nomor gambar, material, pdf, tampilan, ortografik, proyeksi sudut ketiga, isometrik, tampilan potongan, tampilan detail, gd&t, datum, bingkai kontrol toleransi, toleransi, posisi, kerataan, kehalusan permukaan, kekasaran, cetak
from: 39e944c0
---

PartCraft membuat lembar gambar dari part: tampak depan, atas dan kanan dalam proyeksi sudut ketiga, tampilan isometrik, ukuran keseluruhan, dan kepala gambar pada lembar dari A4 sampai A0 atau ANSI A sampai E. Selain itu, Anda dapat menambahkan potongan, tampilan detail, dan simbol GD&T. Lembar diperbarui saat part berubah, dan pengaturannya disimpan dalam file part.

## Buka lembar gambar

1. Bangun part. (Jika belum ada yang dibangun: "Bangun solid dulu, lalu buat gambarnya.")
2. Pilih {{ui:Gambar}} di bilah alat.

Tampilan 3D digantikan oleh lembar. Bilah alat menampilkan {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}} dan {{ui:Back}}, dan panel kanan berjudul **Gambar**. Bilah status menjelaskan bagaimana tampilan dibuat: "Gambar (kurva digambar sebagai facet). Datum, Frame dan Finish menempatkan GD&T pada tampilan; panel mengatur potongan dan tampilan detail." Tampilan digambar dari facet kernel mesh, sehingga tepi bulat berupa potongan garis lurus pendek; busur sejati memerlukan kernel eksak, yang tidak dimiliki versi ini.

Bergerak di sekitar lembar: putar roda untuk zoom, seret dengan tombol kanan atau tengah untuk menggeser, tekan {{key:F}} untuk memuat lembar ke layar. Saat lembar aktif, {{key:Plus}} dan {{key:Minus}} melakukan zoom, dan {{key:Shift}} dengan tombol panah menggeser.

Pilih {{ui:Back}}, {{ui:Kembali ke model}}, atau tekan {{key:Esc}} (saat tidak ada yang dipilih dan tidak ada alat aktif) untuk kembali ke model 3D.

## Isi lembar

- **Lembar yang Anda pilih**, lanskap (A3 kecuali Anda memilih yang lain), dengan bingkai dan **kepala gambar**: judul, perusahaan, nomor gambar, revisi, material, digambar / diperiksa / disetujui oleh, tanggal, skala, ukuran lembar, "Satuan: milimeter · Proyeksi sudut ketiga", dan apakah tampilannya eksak atau facet.
- **Blok revisi** di pojok kanan atas setelah Anda menambah revisi.
- **Tampak depan, atas dan kanan**: tampak atas di atas tampak depan, tampak kanan di sebelahnya. Tepi tersembunyi digambar putus-putus.
- **Tampilan isometrik** jika ada ruang.
- **Ukuran keseluruhan**: lebar dan tinggi pada tampak depan, kedalaman pada tampak atas.
- Satu **skala** untuk tampilan utama dari seri ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), dipilih agar muat.

## Pilih ukuran lembar

Pada lembar gambar, saat tidak ada yang dipilih, pilih {{ui:Lembar}} di panel kanan: **A4, A3, A2, A1, A0** (ISO 216) atau **ANSI A, B, C, D, E** (11 × 8.5 sampai 44 × 34 in). Tampilan ditata ulang pada skala ISO terbesar yang muat, sehingga lembar yang lebih besar dapat menampilkan part lebih besar.

## Isi kepala gambar

Kolom **Title block** (**Kepala gambar**) di panel kanan langsung masuk ke lembar: {{ui:Judul}}, {{ui:No. gambar}}, {{ui:Revisi}}, {{ui:Perusahaan}}, {{ui:Digambar oleh}}, {{ui:Diperiksa oleh}}, {{ui:Disetujui oleh}}, {{ui:Tanggal}} (tahun-bulan-hari), {{ui:Toleransi umum}} dan {{ui:Finishing}} (dua yang terakhir tercetak tepat di atas kepala gambar). Ketik di kotak dan tekan {{key:Enter}} atau klik di luar. Kotak kosong membiarkan selnya kosong, kecuali:

- **Judul** menampilkan nama part sampai Anda mengetik judul.
- **Tanggal** menampilkan hari ini sampai Anda mengetik tanggal.
- **Revisi** menampilkan revisi terbaru dalam daftar sampai Anda mengetik.

**Material** berasal dari part: klik ruang kosong di model, lalu pilih {{ui:Material}} di panel Part. Material yang sama memberikan kerapatan untuk sifat massa Measure.

## Tambah revisi

Di bawah **Revisions** (**Revisi**), klik {{ui:Tambah revisi}}. Setiap baris baru mengambil huruf berikutnya (A, B, C …; setelah Z menjadi AA) dan tanggal hari ini. Ketik apa yang berubah dan siapa yang membuat perubahan. {{ui:Hapus}} menghapus baris. Blok revisi di pojok kanan atas lembar mencantumkannya, yang tertua di atas, hingga 20.

Ukuran lembar, kepala gambar, revisi dan material disimpan dalam file part, dan setiap perubahan adalah satu langkah {{ui:Urungkan}}.

## Tambah tampilan potongan

Part dipotong oleh sebuah bidang dan potongannya diarsir. Seperti tampilan lain, potongan digambar dari facet, sehingga tepi bulat berupa potongan garis lurus pendek.

1. Di panel kanan, atur **Potongan A-A** ke **Dari tampak depan**, **Dari tampak atas**, atau **Dari tampak kanan**.
2. Potongan muncul pada lembar, diarsir di tempat potongan melewati material, dengan garis potong dan panah "A" pada tampilan tempat ia diambil.
3. Atur **Potong pada (mm)** untuk memindahkan bidang potong. Ia dimulai melalui tengah part.

Atur **Potongan A-A** kembali ke **Tidak ada** untuk menghapusnya.

## Tambah tampilan detail

1. Atur **Detail B** ke tampilan yang akan diperbesar (atau pilih {{ui:Detail}} di bilah alat).
2. Klik pusat area yang akan diperbesar, pada tampilan itu. Lingkaran berlabel "B" menandainya, dan "Detail B" yang diperbesar muncul pada lembar dengan skalanya sendiri, misalnya "Detail B (2:1)".
3. Atur **Radius detail (mm)** untuk ukuran lingkaran dan **Skala detail** untuk pembesaran: 2, 4, 5 atau 10 × lembar.

Detail dapat diambil dari tampilan depan, atas, kanan atau potongan, bukan dari isometrik. Jika tidak ada ruang untuk setiap tampilan, panel menyatakan "Tidak ada ruang pada lembar untuk: detail. Perkecil detail atau hapus satu tampilan."

## Tambah tabel lubang

Tabel lubang mencantumkan lubang part beserta posisinya, untuk pengeboran atau CNC: pilih **Tabel lubang** › **Dari tampak atas** (atau depan, atau kanan) di panel.

- Setiap lubang yang terlihat tegak lurus pada tampilan itu mendapat tag di sebelahnya: **A1**, **A2** … untuk ukuran pertama, **B1** … untuk ukuran berikutnya.
- Tabel mencantumkan setiap tag, **X** dan **Y** dalam milimeter, dan ukurannya: "Ø14 THRU", "Ø6.6 × 10 DEEP", counterbore atau countersink, atau keterangan ulir untuk lubang berulir.
- X dan Y diukur dari pojok kiri bawah garis luar tampilan, yang ditandai **X0 Y0** pada lembar.
- Lubang yang dibuat oleh pola ikut dihitung. Lubang yang tidak tegak lurus pada tampilan dihitung di panel dan tidak dimasukkan ke dalam tabel.

Tabel ditempatkan di area kosong pada lembar dan ikut masuk ke PDF.

## Letakkan simbol GD&T dan kehalusan permukaan

1. Pilih {{ui:Datum}}, {{ui:Frame}} (bingkai kontrol toleransi), atau {{ui:Finish}} (simbol kehalusan permukaan).
2. Klik titik pada tampilan tempat simbol itu menempel. Ia menempel ke garis tergambar terdekat dalam jarak 2,5 mm.
3. Simbol muncul dengan leader, terpilih, dan panel kanan menampilkan pengaturannya.

Seret simbol untuk memindahkannya; leader-nya tetap pada titik. Dengan simbol terpilih, tombol panah menggesernya 1 mm. {{key:Delete}} atau {{key:Backspace}} (atau {{ui:Delete}} di panel) menghapusnya; {{ui:Done}} atau {{key:Esc}} membatalkan pilihan. Setiap perubahan ada dalam daftar urungkan.

### Datum

**Letter** (**Huruf**): A sampai Z, tanpa I, O dan Q (karena terbaca sebagai 1, 0 dan O). Setiap datum baru mengambil huruf kosong berikutnya.

### Bingkai kontrol toleransi

| Pengaturan | Pilihan |
|---|---|
| **Tolerance** (**Toleransi**) | Straightness (Kelurusan), Flatness (Kerataan), Circularity (Kebulatan), Cylindricity (Kesilindrisan), Profile of a line (Profil garis), Profile of a surface (Profil permukaan), Perpendicularity (Ketegaklurusan), Angularity (Kesudutan), Parallelism (Kesejajaran), Position (Posisi), Concentricity (Kesepusatan), Symmetry (Kesimetrisan) (keduanya dihapus di Y14.5-2018, dan ditandai demikian), Circular runout (Runout melingkar), Total runout (Runout total) |
| **Zone (mm)** (**Zona (mm)**) | Nilai toleransi, default 0.1 |
| **Diameter zone (⌀)** (**Zona diameter (⌀)**) | Untuk karakteristik dengan zona silinder; aktif secara default untuk Position |
| **Material** | RFS (tidak ada), MMC (Ⓜ), LMC (Ⓛ), jika karakteristiknya mengizinkan |
| **Primary / Secondary / Tertiary datum** (**Datum primer / sekunder / tersier**) | Hingga tiga huruf datum, masing-masing dengan **modifier …** (MMB, LMB) jika diizinkan |

PartCraft memeriksa bingkai terhadap aturan ASME Y14.5 dan menyatakan apa yang salah di bagian atas panel, misalnya "Kerataan adalah toleransi bentuk: ia tidak menggunakan referensi datum." atau "Posisi memerlukan sedikitnya satu referensi datum." Baris **Dibaca** menjabarkan bingkai tersebut.

### Kehalusan permukaan

| Pengaturan | Pilihan | Default |
|---|---|---|
| **Ra (µm)** | Rata-rata kekasaran | 1.6 |
| **Process** (**Proses**) | proses apa pun, dimesin, tanpa material yang dibuang | dimesin |
| **Note** (**Catatan**) | Hingga 40 karakter, seperti arah goresan atau proses | |

Saat tidak ada yang dipilih, panel mencantumkan **Catatan pada lembar**, masing-masing dengan **Pilih**.

## Ekspor PDF

Pilih {{ui:PDF}} di bilah alat, {{ui:Ekspor PDF}} di panel, atau {{ui:Ekspor}}, lalu {{ui:Gambar (PDF): tampilan, potongan, detail, GD&T}} dari model. PDF diunduh sebagai `<part name> - drawing.pdf`, dan bilah status mencantumkan apa yang ada di dalamnya.

Cetak pada "Ukuran sebenarnya" di kertas dengan ukuran lembar agar skalanya tetap benar.

## Batasan

| Belum dibuat | Lakukan ini sekarang |
|---|---|
| Dimensi selain tiga ukuran keseluruhan | Tambahkan pada PDF dengan aplikasi markup, atau ekspor sketsa atau muka sebagai DXF dan beri dimensi di program CAD 2D |
| Lebih dari satu potongan atau detail; broken-out, tampilan bantu dan tampilan proyeksi | Tidak tersedia |
| Proyeksi sudut pertama, tampilan yang dapat digerakkan, lembar potret | Sudut ketiga, tata letak otomatis, lanskap |
| Catatan teks bebas dan tabel pada lembar (selain blok judul dan revisi) | Gunakan catatan finishing, atau tambahkan teks pada PDF |
| Gambar rakitan | Tidak tersedia |

Karakter di luar kumpulan Eropa Barat dicetak sebagai "?" (PDF menggunakan Helvetica bawaan pembaca). Simbol GD&T digambar sebagai garis, sehingga tercetak di pembaca mana pun.

## Biarkan lembar yang mengerjakannya

- **Lembar › Otomatis** memilih kertas untuk Anda: skala standar terbesar hingga 1:1, pada lembar ukuran A terkecil yang memuat tampilan pada skala itu (daftar menunjukkan yang dipilih).
- **Beri dimensi lubang** memberi dimensi pada lubang di tampilan yang paling banyak melihat lubang secara tegak lurus: tanda pusat pada masing-masing, satu keterangan per ukuran ("2× Ø6 THRU" dengan leader), dan posisinya diukur dari pojok kiri bawah tampilan. Lebar, tinggi dan kedalaman keseluruhan selalu ada.
