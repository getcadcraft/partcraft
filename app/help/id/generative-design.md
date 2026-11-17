---
title: Tumbuhkan bentuk dari beban (Generatif)
summary: Pilih muka yang ditahan dan dibebani, area yang harus dipertahankan dan dijaga kosong, volume target dan material, lalu hasilkan hasil: bentuk paling kaku untuk setiap volume, diperiksa ulang sebagai solid, dibandingkan dalam tabel, dan diunduh sebagai STL, STEP, atau part baru.
keywords: desain generatif, optimasi topologi, SIMP, ringan, kisi, bentuk organik, hasil, bandingkan, massa, fraksi volume, pertahankan, penghalang, ruang desain, ukuran anggota minimum, STL, pencetakan 3D
from: 5b91fa8e
---

Ruang kerja **Generatif** menghapus material yang tidak dibutuhkan oleh beban. Anda menentukan tempat part ditahan dan dibebani, apa yang harus tetap ada dan apa yang harus tetap kosong; PartCraft mencari bentuk paling kaku untuk setiap volume target (**optimasi topologi**), memeriksa setiap bentuk lagi sebagai solid dengan material sebenarnya, dan menampilkan hasil berdampingan. Ini bekerja pada muka bernama yang diberikan kernel mesh pada part (lihat [Kernel mesh](topic:solid-kernels)).

Pilih **Generatif** di kotak **Ruang kerja**. Part Anda tidak berubah; studi disimpan di dalam file part.

## Atur studi

1. Tekan **Studi baru** di panel kanan.
2. **Ruang**: *Part apa adanya* menghapus material dari part Anda; *Kotak di sekitar part* menumbuhkan bentuk di dalam kotak yang lebih besar dari part sebesar **Margin kotak**.
3. **Ukuran elemen**: kosongkan untuk ukuran otomatis (sekitar 8,000 kubus), atau ketik satu. Ukuran yang lebih halus menghasilkan bentuk yang lebih halus dan memerlukan waktu lebih lama.
4. **Anggota minimum**: anggota yang lebih tipis dari sekitar dua kali nilai ini tidak terbentuk. Kosong berarti satu setengah kubus.
5. Centang satu hingga enam **Volume target** (bagian dari ruang desain yang boleh diisi bentuk) dan satu hingga empat **Material**. Setiap volume dibuat sekali; setiap material diperiksa pada bentuk itu (bentuk paling kaku tidak bergantung pada material, tetapi massa, tegangan, dan faktor keamanannya bergantung).

## Tujuan

- {{ui:Tetap}}: klik muka yang ditahan. **Muka tanpa gesekan** dari daftar **Tambah** di panel hanya menahan muka sepanjang dirinya sendiri (gunakan untuk bidang simetri).
- {{ui:Gaya}}: klik muka yang dibebani, lalu ketik gaya total dan pilih arahnya di panel. **Tekanan** ada di daftar **Tambah**.
- {{ui:Pertahankan}}: klik muka yang sekelilingnya harus tetap solid, dan atur seberapa dalam (**Pertahankan solid dalam**), misalnya di sekitar lubang baut. Muka yang Anda tahan atau beban selalu dipertahankan.
- {{ui:Penghalang}}: klik muka yang sekelilingnya harus tetap kosong, dan atur seberapa jauh (**Pertahankan kosong dalam**), misalnya ruang untuk poros atau alat.

Tekan **Selesai memilih** atau {{key:Esc}} setelah mengklik muka. Warna hijau dan merah menunjukkan area.

## Buat dan bandingkan

Tekan {{ui:Buat}}. Panel menampilkan kemajuan dan sisa waktu; **Hentikan** membatalkan. Setiap hasil muncul dalam tabel **Hasil**: volume target, material, **massa**, **tegangan terbesar**, **perpindahan terbesar**, dan **faktor keamanan** (luluh ÷ tegangan), semuanya dari penghitungan ulang bentuk jadi sebagai kubus solid dengan material sebenarnya.

Pilih hasil untuk melihatnya di tampilan (part disembunyikan; centang **Tampilkan part tembus** untuk melihat keduanya). Di bawah tabel: berapa banyak iterasi yang diperlukan dan apakah sudah konvergen, kekakuannya sebagai solid dibandingkan angka pengoptimal sendiri, dan permukaannya.

## Gunakan hasil

- **STL**: mesh segitiga tertutup, siap untuk pencetakan 3D.
- **STEP (berfaset)**: permukaan yang sama sebagai solid STEP yang terdiri dari muka datar.
- **File part baru**: part PartCraft yang satu-satunya fiturnya adalah hasil sebagai solid impor. Buka untuk membuat sketsa di atasnya, memotong lubang, atau memeriksanya di Simulasi. Bentuknya berfaset (ribuan muka datar), bukan bentuk yang dapat disunting.
- **Tambahkan ke part ini** menggabungkan hasil ke part; ini hanya aktif untuk ruang desain kotak (dengan part itu sendiri sebagai ruang, hasil berada di dalam part).

**File part baru** dan **Tambahkan ke part ini** belum dibuat dalam versi ini: hasil menjadi solid impor, yang memerlukan kernel eksak. Unduhan STL dan STEP (berfaset) berfungsi.

## Seberapa jauh dapat dipercaya

- Ini mengoptimalkan **kekakuan** untuk volume yang diberikan. Belum ada batas tegangan dan aturan manufaktur (overhang, arah frais, ukuran lubang minimum): periksa hasil yang dipilih di [Simulasi](topic:simulation) dan sesuaikan.
- Anggota tipis yang lebarnya satu atau dua kubus adalah perkiraan: gunakan ukuran elemen yang lebih kecil untuk part ramping.
- Metodenya adalah SIMP dengan filter kepadatan, proyeksi ambang, dan pembaruan kriteria optimalitas; tegangan dan lendutan yang dilaporkan adalah hasil sebagai kubus, yang jujur tetapi kasar pada sudut tajam.

## Terkait

- [Periksa tegangan dan lendutan (Simulasi)](topic:simulation)
- [Ekspor untuk pencetakan, STEP, dan DXF](topic:export-files)
- [Yang belum dibuat](topic:not-built-yet)
