---
title: Mulai dengan PartCraft
summary: Apa yang dilakukan PartCraft saat ini, apa yang dibutuhkan peramban Anda, dan part pertama dalam sepuluh menit, dari sketsa hingga file yang disimpan.
keywords: mulai, pertama kali dijalankan, mulai cepat, pengantar, tutorial, part pertama, pelat, parametrik, pemodel part
from: 7d43283f
---

PartCraft adalah aplikasi part dan rakitan parametrik dari keluarga CadCraft. Anda menggambar sketsa 2D, mengikatnya dengan relasi dan dimensi, mengubahnya menjadi solid dengan fitur seperti ekstrusi, revolusi, dan lubang, dan mengubah angka apa pun nanti: part dibangun ulang dari riwayatnya. Part kemudian masuk ke rakitan, tempat joint menempatkannya dan memungkinkan Anda memeriksa gerakannya.

Yang dilakukan build ini:

| Tugas | Yang Anda dapatkan |
|---|---|
| Sketsa | Garis, persegi panjang, lingkaran, busur, titik, dan garis tengah, dengan relasi dan dimensi, serta status langsung: kurang, penuh, atau berlebih terdefinisi |
| Fitur solid | Ekstrusi, potong, revolusi, potong revolusi, lubang sederhana dan counterbore, pola linear dan melingkar, mirror, fillet dan chamfer pada tepi lurus di antara muka datar, serta shell dan draft pada muka datar. Sweep, loft, dan fitur lain yang memerlukan kernel eksak belum dibuat dalam versi ini: lihat [Yang belum dibuat](topic:not-built-yet) |
| Riwayat | Sunting angka fitur mana pun, nonaktifkan, kembalikan, atur ulang urutan, dan hapus, dengan urungkan |
| Rakitan | Part yang digabungkan dengan joint kaku, revolute, dan slider, pemeriksaan benturan, dan pemeriksaan gerakan |
| Gambar | Lembar A3 dengan tiga tampak, isometrik, potongan, tampilan detail, ukuran keseluruhan, datum, bingkai kontrol fitur, dan simbol kekasaran permukaan, diekspor sebagai PDF |
| File | File part dan rakitannya sendiri; keluaran STL, 3MF, STEP eksak, DXF, dan PDF |

Semuanya berjalan di peramban Anda, di komputer Anda. **Tidak ada yang diunggah.** Lihat [File: buka, simpan, dan ekspor](topic:files) untuk tempat file disimpan.

## Yang Anda perlukan

- Chrome, Edge, Firefox, atau Safari yang terbaru dengan **WebGL** (grafik 3D) dan **WebAssembly** aktif. Keduanya aktif secara bawaan. Geometri solid dibangun oleh kernel mesh WebAssembly yang dimuat bersama aplikasi: lihat [Kernel mesh](topic:solid-kernels).
- Mouse paling mudah. Trackpad berfungsi, dan layar sentuh berfungsi untuk melihat dan membuat sketsa sederhana: lihat [Trackpad, sentuh, dan layar kecil](topic:trackpad-and-touch).
- Layar dengan lebar minimal 1280 piksel menampilkan seluruh bilah alat dalam satu baris. Jendela yang lebih sempit menggulir bilah alat ke samping; di ponsel, panel terbuka sebagai lembar dari bilah di bawah.

Info lebih lanjut tentang peramban: [Peramban dan komputer](common:browsers).

:::note
PartCraft berjalan di peramban, dan di desktop di dalam CadCraft Studio. Penyimpanan cloud belum tersedia: Anda membuka part dari komputer dan menyimpannya kembali ke sana sebagai file.
:::

## Buka PartCraft

1. Buka PartCraft.
2. Tunggu saat layar menampilkan "Memuat kernel solid…". Ini memerlukan waktu sebentar pada pertama kali.
3. Anda melihat tampilan 3D kosong dengan tiga bidang dasar, riwayat di kiri ("Part1", lalu Bidang Depan, Bidang Atas, Bidang Kanan), dan kotak di tampilan berjudul "Mulai part".
4. Chip di dekat ujung kanan bilah status bertuliskan "Kernel mesh": PartCraft membangun setiap part dengan kernel mesh dalam versi ini, sehingga muka bulat menjadi faset datar. Anda dapat mulai memodelkan langsung.

Jika tampilan menyatakan peramban tidak dapat menampilkan 3D, atau kernel tidak dimuat, lihat [Pemecahan masalah](topic:troubleshooting#the-app-does-not-start).

## Part pertama Anda: pelat dengan lubang

Anda akan membuat pelat 60 × 40 mm, tebal 10 mm, dengan lubang 6 mm yang menembusnya. Satuannya milimeter.

### Gambar garis luar

1. Klik **Bidang Depan** di riwayat di kiri. Bidang itu disorot di tampilan.
2. Pilih {{ui:Sketsa}} di bilah alat, atau tekan {{key:S}}. Tampilan menghadap lurus ke bidang, dan alat Garis aktif.
3. Tekan {{key:R}} untuk alat Persegi panjang.
4. Gerakkan penunjuk ke titik asal (lingkaran kecil merah dengan silang). Kotak kecil menunjukkan bahwa ia menempel. Klik.
5. Gerakkan ke atas dan kanan lalu klik lagi. Anda mendapatkan persegi panjang. Garisnya berwarna biru: biru berarti mereka masih bisa bergerak.

### Beri ukuran

1. Tekan {{key:D}} untuk alat Dimensi.
2. Klik garis atas, lalu klik sedikit di atasnya. Kotak angka terbuka dengan panjang saat ini.
3. Ketik `60` dan tekan {{key:Enter}}. Persegi panjang berubah menjadi lebar 60 mm.
4. Klik garis kiri, lalu klik sedikit di sebelah kirinya. Ketik `40` dan tekan {{key:Enter}}.

Chip di kiri atas tampilan sekarang menyatakan **Terdefinisi penuh** dan garisnya berubah menjadi tinta (hitam pada tema Kertas, terang pada tema Model). Setiap titik dan ukuran dikunci.

:::tip
Jika Anda memulai persegi panjang jauh dari titik asal, chip tetap menyatakan "Kurang terdefinisi · 2 derajat kebebasan". Tekan {{key:S}} untuk Pilih, klik satu sudut, {{key:Shift}}+klik titik asal, lalu pilih {{ui:• Berimpit}} di panel kanan.
:::

### Ekstrusi

1. Pilih {{ui:Keluar}} di bilah alat, atau tekan {{key:Esc}} sampai sketsa tertutup (biasanya dua kali).
2. Pilih {{ui:Ekstrusi}}. Solid 10 mm muncul. "Ekstrusi1" ditambahkan ke riwayat, dengan "Sketsa1" menjorok di bawahnya.
3. Panel kanan menampilkan pengaturan ekstrusi. Untuk mengubah ketebalan, ketik angka baru di **Kedalaman (mm)** dan tekan {{key:Enter}} atau {{key:Tab}}. Part langsung dibangun ulang.

### Tambahkan lubang

1. Klik muka datar besar di depan pelat (ujung ekstrusi). Seluruh muka disorot dan panel kanan menyatakan **Muka**.
2. Pilih {{ui:Buat sketsa pada muka ini}} di panel kanan.
3. Tekan {{key:P}} untuk alat Titik dan klik dekat tengah muka.
4. Pilih {{ui:Keluar}}.
5. Pilih {{ui:Lubang}}. Lubang 6 mm menembus pelat. Ubah **Diameter (mm)** di panel kanan jika Anda mau.

Kotak **Part** di kiri bawah sekarang menampilkan volume, luas permukaan, ukuran (60 × 40 × 10 mm), dan "Lubang tembus: 1".

### Simpan

1. Tekan {{key:Mod+S}} atau pilih {{ui:Simpan}}.
2. Peramban Anda mengunduh `Part1.partcraft.json` ke folder unduhannya. File ini menyimpan seluruh riwayat: buka lagi dengan {{ui:Buka}} untuk melanjutkan penyuntingan.

Untuk mengganti nama part terlebih dahulu, klik ruang kosong di tampilan agar tidak ada yang dipilih, lalu ketik **Nama** baru di panel kanan.

## Langkah berikutnya

- [Gambar sketsa pertama Anda](topic:sketch-basics) dan [Definisikan sketsa secara penuh](topic:relations-dimensions) menjelaskan penyusun sketsa secara lengkap.
- [Ubah part melalui riwayatnya](topic:edit-history) menunjukkan cara menyunting apa yang Anda bangun.
- [Bulatkan, miringkan, dan kosongkan](topic:fillet-chamfer-shell) serta [Buat gambar](topic:drawing-pdf) menyelesaikan part. [Yang belum dibuat](topic:not-built-yet) mencantumkan apa yang tidak dilakukan versi ini, seperti sweep dan loft.
- [Berpindah dari pemodel parametrik lain](topic:coming-from) mencantumkan kebiasaan yang bekerja berbeda di sini.
- [Tombol dan mouse](topic:keyboard) adalah daftar lengkap pintasan.
- [Menggunakan bantuan ini](common:help).
