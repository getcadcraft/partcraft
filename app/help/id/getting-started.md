---
title: Memulai dengan PartCraft
summary: Apa yang dilakukan PartCraft hari ini, apa yang diperlukan peramban Anda, dan part pertama dalam sepuluh menit, dari sketsa hingga file tersimpan.
keywords: mulai, penggunaan pertama, panduan cepat, pengantar, tutorial, part pertama, pelat, parametrik, pemodel part
from: 5f0a668d
---

PartCraft adalah aplikasi part dan rakitan parametrik dari keluarga CadCraft. Anda menggambar sketsa 2D, mengunci posisinya dengan relasi dan dimensi, mengubahnya menjadi solid dengan fitur seperti ekstrusi, revolusi, dan lubang, lalu mengubah angka apa pun kapan saja: part dibangun ulang dari riwayatnya. Part kemudian masuk ke rakitan, tempat sambungan menempatkannya dan memungkinkan Anda memeriksa geraknya.

Yang dilakukan build ini:

| Pekerjaan | Yang Anda dapat |
|---|---|
| Sketsa | Garis, persegi panjang, lingkaran, busur, titik, dan garis tengah, dengan relasi dan dimensi, serta status langsung: kurang, penuh, atau berlebih terdefinisi |
| Fitur solid | Ekstrusi, potong, revolusi, potongan revolusi, lubang sederhana dan counterbore, pola linear dan melingkar, cerminan, fillet dan chamfer pada tepi lurus di antara muka datar, serta shell dan draft pada muka datar. Sweep, loft, dan fitur lain yang memerlukan kernel eksak belum dibuat di versi ini: lihat [Yang belum dibuat](topic:not-built-yet) |
| Riwayat | Edit angka fitur apa pun, nonaktifkan, rollback, susun ulang, dan hapus, dengan urungkan |
| Rakitan | Part yang disambung dengan sambungan kaku, revolute, dan slider, pemeriksaan benturan, dan pemeriksaan gerak |
| Gambar | Lembar A3 dengan tiga tampilan, isometrik, potongan, tampilan detail, ukuran keseluruhan, datum, kerangka kontrol fitur, dan simbol kehalusan permukaan, diekspor sebagai PDF |
| File | File part dan rakitan sendiri; STL, 3MF, STEP berfaset, DXF, dan PDF keluar |

Semuanya berjalan di peramban Anda, di komputer Anda. **Tidak ada yang diunggah.** Lihat [File: buka, simpan, dan ekspor](topic:files) untuk tahu ke mana file pergi.

## Yang Anda perlukan

- Chrome, Edge, Firefox, atau Safari terbaru dengan **WebGL** (grafis 3D) dan **WebAssembly** menyala. Keduanya menyala secara bawaan. Geometri solid dibangun oleh kernel mesh WebAssembly yang dimuat bersama aplikasi: lihat [Kernel mesh](topic:solid-kernels).
- Mouse paling mudah. Trackpad berfungsi, dan layar sentuh berfungsi untuk melihat dan membuat sketsa sederhana: lihat [Trackpad, sentuhan, dan layar kecil](topic:trackpad-and-touch).
- Layar selebar minimal 1280 piksel menampilkan seluruh bilah alat dalam satu baris. Jendela yang lebih sempit menggulir bilah alat ke samping; di ponsel panel terbuka sebagai lembar dari bilah di bagian bawah.

Selengkapnya tentang peramban: [Peramban dan komputer](common:browsers).

:::note
PartCraft berjalan di peramban, dan di desktop di dalam CadCraft Studio. Penyimpanan cloud belum tersedia: Anda membuka part dari komputer Anda dan menyimpannya kembali ke sana sebagai file.
:::

## Buka PartCraft

1. Buka PartCraft.
2. Tunggu sementara layar berbunyi "Memuat kernel solid…". Ini memakan waktu sesaat pada kali pertama.
3. Anda melihat tampilan 3D kosong dengan tiga bidang dasar, riwayat di kiri ("Part1", lalu Bidang depan, Bidang atas, Bidang kanan) dan kotak di tampilan berjudul "Mulai part".
4. Chip di dekat ujung kanan bilah status berbunyi "Kernel mesh": PartCraft membangun setiap part dengan kernel mesh di versi ini, sehingga muka bulat adalah faset datar. Anda dapat langsung mulai memodelkan.

Jika tampilan menyebutkan peramban tidak dapat menampilkan 3D, atau kernel tidak termuat, lihat [Pemecahan masalah](topic:troubleshooting#the-app-does-not-start).

## Part pertama Anda: pelat dengan lubang

Anda akan membuat pelat 60 × 40 mm, tebal 10 mm, dengan lubang 6 mm yang menembusnya. Satuannya milimeter.

### Buat sketsa garis luar

1. Klik **Bidang depan** di riwayat di kiri. Bidang menyala di tampilan.
2. Pilih {{ui:Sketsa}} di bilah alat, atau tekan {{key:S}}. Tampilan berputar menghadap lurus ke bidang, dan alat Garis aktif.
3. Tekan {{key:R}} untuk alat Persegi panjang.
4. Gerakkan penunjuk ke titik asal (lingkaran merah kecil dengan tanda silang). Persegi kecil menunjukkan bahwa ia melakukan snap. Klik.
5. Gerakkan ke atas dan ke kanan lalu klik lagi. Anda punya persegi panjang. Garisnya biru: biru berarti masih dapat bergerak.

### Beri ukuran

1. Tekan {{key:D}} untuk alat Dimensi.
2. Klik garis atas, lalu klik sedikit di atasnya. Kotak angka terbuka dengan panjang saat ini.
3. Ketik `60` dan tekan {{key:Enter}}. Persegi panjang berubah menjadi lebar 60 mm.
4. Klik garis kiri, lalu klik sedikit di sebelah kirinya. Ketik `40` dan tekan {{key:Enter}}.

Chip di kiri atas tampilan kini berbunyi **Terdefinisi penuh** dan garisnya menjadi tinta (hitam di tema Kertas, terang di tema Model). Setiap titik dan ukuran sudah tetap.

:::tip
Jika Anda memulai persegi panjang jauh dari titik asal, chip tetap berbunyi "Kurang terdefinisi · 2 derajat kebebasan". Tekan {{key:S}} untuk Pilih, klik satu sudut, {{key:Shift}}+klik titik asal, lalu pilih {{ui:• Berimpit}} di panel kanan.
:::

### Ekstrusi

1. Pilih {{ui:Keluar}} di bilah alat, atau tekan {{key:Esc}} sampai sketsa tertutup (biasanya dua kali).
2. Pilih {{ui:Ekstrusi}}. Solid 10 mm muncul. "Extrude1" ditambahkan ke riwayat, dengan "Sketch1" menjorok di bawahnya.
3. Panel kanan menunjukkan pengaturan ekstrusi. Untuk mengubah ketebalan, ketik angka baru di **Kedalaman (mm)** dan tekan {{key:Enter}} atau {{key:Tab}}. Part dibangun ulang seketika.

### Tambah lubang

1. Klik muka datar besar di depan pelat (ujung ekstrusi). Seluruh muka menyala dan panel kanan berbunyi **Muka**.
2. Pilih {{ui:Buat sketsa pada muka ini}} di panel kanan.
3. Tekan {{key:P}} untuk alat Titik dan klik dekat tengah muka.
4. Pilih {{ui:Keluar}}.
5. Pilih {{ui:Lubang}}. Lubang 6 mm menembus pelat. Ubah **Diameter (mm)** di panel kanan jika Anda mau.

Kotak **Part** di kiri bawah kini menunjukkan volume, luas permukaan, ukuran (60 × 40 × 10 mm) dan "Lubang tembus: 1".

### Simpan

1. Tekan {{key:Mod+S}} atau pilih {{ui:Simpan}}.
2. Peramban Anda mengunduh `Part1.partcraft.json` ke folder unduhannya. File menyimpan seluruh riwayat: buka lagi dengan {{ui:Buka}} untuk terus mengedit.

Untuk mengganti nama part lebih dulu, klik ruang kosong di tampilan agar tidak ada yang dipilih dan ketik **Nama** baru di panel kanan.

## Ke mana selanjutnya

- [Gambar sketsa pertama Anda](topic:sketch-basics) dan [Definisikan sketsa sepenuhnya](topic:relations-dimensions) menjelaskan sketcher dengan benar.
- [Ubah part lewat riwayatnya](topic:edit-history) menunjukkan cara mengedit apa yang Anda bangun.
- [Membulatkan, memiringkan, dan melubangi](topic:fillet-chamfer-shell) dan [Buat gambar](topic:drawing-pdf) menyelesaikan part. [Yang belum dibuat](topic:not-built-yet) mendaftar apa yang tidak dilakukan versi ini, seperti sweep dan loft.
- [Datang dari pemodel parametrik lain](topic:coming-from) mendaftar kebiasaan yang bekerja berbeda di sini.
- [Tombol dan mouse](topic:keyboard) adalah daftar lengkap pintasan.
- [Menggunakan bantuan ini](common:help).
