---
title: Mulakan dengan PartCraft
summary: Apa yang PartCraft lakukan hari ini, apa yang diperlukan oleh pelayar anda, dan bahagian pertama dalam sepuluh minit, dari lakaran hingga fail yang disimpan.
keywords: mulakan, larian pertama, mula pantas, pengenalan, tutorial, bahagian pertama, plat, parametrik, pemodel bahagian
from: 7d43283f
---

PartCraft ialah aplikasi bahagian dan himpunan berparameter dalam keluarga CadCraft. Anda melukis lakaran 2D, mengikatnya dengan hubungan dan dimensi, menukarnya kepada pepejal dengan ciri seperti ekstrud, putar dan lubang, dan menukar mana-mana nombor kemudian: bahagian itu dibina semula daripada sejarahnya. Bahagian kemudian dimasukkan ke dalam himpunan, di mana sambungan meletakkannya dan membolehkan anda menyemak pergerakan.

Apa yang versi ini lakukan:

| Tugas | Apa yang anda dapat |
|---|---|
| Lakaran | Garisan, segi empat tepat, bulatan, lengkok, titik dan garisan pusat, dengan hubungan dan dimensi, serta keadaan langsung: kurang takrif, takrif penuh atau terlebih takrif |
| Ciri pepejal | Ekstrud, potong, putar, potongan putar, lubang mudah dan lubang kaunterbor, tatasusunan linear dan bulat, cermin, fillet dan chamfer pada tepi lurus antara muka rata, serta cangkerang dan cerun tarik pada muka rata. Sweep, loft dan ciri lain yang memerlukan kernel tepat belum dibina dalam versi ini: lihat [Apa yang belum dibina](topic:not-built-yet) |
| Sejarah | Sunting nombor mana-mana ciri, tangguhkan, undur, susun semula dan padam, dengan buat asal |
| Himpunan | Bahagian dicantumkan dengan sambungan tegar, berputar dan gelongsor, semakan pertembungan dan semakan pergerakan |
| Lukisan | Helaian A3 dengan tiga pandangan, isometrik, keratan, pandangan terperinci, ukuran keseluruhan, datum, bingkai kawalan ciri dan simbol kemasan permukaan, dieksport sebagai PDF |
| Fail | Fail bahagian dan himpunannya sendiri; STL, 3MF, STEP tepat, DXF dan PDF keluar |

Semuanya berjalan dalam pelayar anda, pada komputer anda. **Tiada apa-apa dimuat naik.** Lihat [Fail: buka, simpan dan eksport](topic:files) untuk tahu fail pergi ke mana.

## Apa yang anda perlukan

- Chrome, Edge, Firefox atau Safari versi terkini dengan **WebGL** (grafik 3D) dan **WebAssembly** dihidupkan. Kedua-duanya dihidupkan secara lalai. Geometri pepejal dibina oleh kernel jejaring WebAssembly yang dimuatkan bersama aplikasi: lihat [Kernel jejaring](topic:solid-kernels).
- Tetikus paling mudah. Pad jejak berfungsi, dan skrin sentuh berfungsi untuk melihat dan melakar ringkas: lihat [Pad jejak, sentuh dan skrin kecil](topic:trackpad-and-touch).
- Skrin sekurang-kurangnya 1280 piksel lebar memaparkan keseluruhan bar alat dalam satu baris. Tetingkap yang lebih sempit menatal bar alat ke sisi; pada telefon, panel dibuka sebagai helaian dari bar di bawah.

Maklumat lanjut tentang pelayar: [Pelayar dan komputer](common:browsers).

:::note
PartCraft berjalan dalam pelayar, dan pada desktop di dalam CadCraft Studio. Simpanan awan belum tersedia: anda membuka bahagian dari komputer anda dan menyimpannya semula ke situ sebagai fail.
:::

## Buka PartCraft

1. Buka PartCraft.
2. Tunggu sehingga skrin memaparkan "Memuatkan kernel pepejal…". Ini mengambil sedikit masa kali pertama.
3. Anda melihat pandangan 3D kosong dengan tiga satah asas, sejarah di sebelah kiri ("Part1", kemudian Satah Hadapan, Satah Atas, Satah Kanan) dan kotak dalam pandangan dengan tajuk "Mulakan bahagian".
4. Cip berhampiran hujung kanan bar status berbunyi "Kernel jejaring": PartCraft membina setiap bahagian dengan kernel jejaring dalam versi ini, jadi muka bulat ialah faset rata. Anda boleh terus mula memodelkan.

Jika pandangan menyatakan pelayar tidak dapat memaparkan 3D, atau kernel tidak dimuatkan, lihat [Penyelesaian masalah](topic:troubleshooting#the-app-does-not-start).

## Bahagian pertama anda: plat dengan lubang

Anda akan membuat plat 60 × 40 mm, tebal 10 mm, dengan lubang 6 mm menembusinya. Unit ialah milimeter.

### Lakar garis besar

1. Klik **Satah hadapan** dalam sejarah di sebelah kiri. Satah itu diserlahkan dalam pandangan.
2. Pilih {{ui:Lakaran}} dalam bar alat, atau tekan {{key:S}}. Pandangan berpaling menghadap satah itu secara terus, dan alat Garisan aktif.
3. Tekan {{key:R}} untuk alat Segi empat tepat.
4. Gerakkan penunjuk ke atas asalan (bulatan merah kecil dengan silang). Segi empat sama kecil menunjukkan ia melekap. Klik.
5. Gerakkan ke atas dan ke kanan dan klik sekali lagi. Anda mempunyai segi empat tepat. Garisannya biru: biru bermakna ia masih boleh bergerak.

### Berikan saiz

1. Tekan {{key:D}} untuk alat Dimensi.
2. Klik garisan atas, kemudian klik sedikit di atasnya. Kotak nombor dibuka dengan panjang semasa.
3. Taip `60` dan tekan {{key:Enter}}. Segi empat tepat itu berubah kepada lebar 60 mm.
4. Klik garisan kiri, kemudian klik sedikit di kirinya. Taip `40` dan tekan {{key:Enter}}.

Cip di sudut kiri atas pandangan kini berbunyi **Takrif penuh** dan garisan bertukar kepada dakwat (hitam pada tema Kertas, cerah pada tema Model). Setiap titik dan saiz ditetapkan.

:::tip
Jika anda memulakan segi empat tepat jauh dari asalan, cip masih berbunyi "Kurang takrif · 2 darjah kebebasan". Tekan {{key:S}} untuk Pilih, klik satu bucu, {{key:Shift}}+klik asalan, kemudian pilih {{ui:• Koinsiden}} dalam panel kanan.
:::

### Ekstrudkan

1. Pilih {{ui:Keluar}} dalam bar alat, atau tekan {{key:Esc}} sehingga lakaran tertutup (biasanya dua kali).
2. Pilih {{ui:Ekstrud}}. Pepejal 10 mm muncul. "Extrude1" ditambah ke dalam sejarah, dengan "Sketch1" menjorok di bawahnya.
3. Panel kanan menunjukkan tetapan ekstrud. Untuk menukar ketebalan, taip nombor baharu dalam **Kedalaman (mm)** dan tekan {{key:Enter}} atau {{key:Tab}}. Bahagian itu dibina semula serta-merta.

### Tambah lubang

1. Klik muka rata besar di hadapan plat (hujung penyemperitan). Keseluruhan muka diserlahkan dan panel kanan berbunyi **Muka**.
2. Pilih {{ui:Lakaran pada muka ini}} dalam panel kanan.
3. Tekan {{key:P}} untuk alat Titik dan klik berhampiran tengah muka.
4. Pilih {{ui:Keluar}}.
5. Pilih {{ui:Lubang}}. Lubang 6 mm menembusi plat. Tukar **Diameter (mm)** dalam panel kanan jika anda mahu.

Kotak **Bahagian** di sudut kiri bawah kini memaparkan isipadu, luas permukaan, saiz (60 × 40 × 10 mm) dan "Lubang tembus: 1".

### Simpan

1. Tekan {{key:Mod+S}} atau pilih {{ui:Simpan}}.
2. Pelayar anda memuat turun `Part1.partcraft.json` ke folder muat turun. Fail itu memuatkan keseluruhan sejarah: buka semula dengan {{ui:Buka}} untuk terus menyunting.

Untuk menamakan semula bahagian dahulu, klik ruang kosong dalam pandangan supaya tiada apa dipilih dan taip **Nama** baharu dalam panel kanan.

## Ke mana seterusnya

- [Lukis lakaran pertama anda](topic:sketch-basics) dan [Takrifkan lakaran sepenuhnya](topic:relations-dimensions) menerangkan pelakar dengan betul.
- [Tukar bahagian melalui sejarahnya](topic:edit-history) menunjukkan cara menyunting apa yang anda bina.
- [Bulatkan, serongkan dan kosongkan](topic:fillet-chamfer-shell) dan [Buat lukisan](topic:drawing-pdf) menyiapkan bahagian. [Apa yang belum dibina](topic:not-built-yet) menyenaraikan apa yang versi ini tidak lakukan, seperti sweep dan loft.
- [Datang dari pemodel parametrik lain](topic:coming-from) menyenaraikan tabiat yang berfungsi berbeza di sini.
- [Kekunci dan tetikus](topic:keyboard) ialah senarai lengkap pintasan.
- [Menggunakan bantuan ini](common:help).
