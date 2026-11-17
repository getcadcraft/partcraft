---
title: Bangun rakitan dengan sambungan
summary: Mulai rakitan dari sebuah part, sisipkan salinan dan file part lain, sambungkan dengan sambungan kaku, engsel, geser, silinder, planar, bola, dan pin di slot pada muka datar, pusatkan sambungan pada sumbu, sunting part di tempat, dan simpan rakitan.
keywords: rakitan, mate, mates, sambungan, loop, loop tertutup, tautan mekanis, empat batang, mekanisme, kaku, engsel, revolute, geser, slider, silinder, planar, bola, sambungan bola, spherical, pin slot, pin di slot, sisipkan komponen, tetap, grounded, konsentris, berimpit, sunting part, dalam konteks, partcraft-asm
from: a53bbfef
---

Rakitan menyatukan part. Di PartCraft, **sambungan** menempatkan part: setiap sambungan berada di muka datar pada masing-masing dari dua part dan menempatkannya muka ke muka. Sambungan engsel (revolute) memungkinkan satu part berputar, sambungan geser (slider) membuatnya meluncur, dan sambungan kaku menahannya.

## Mulai rakitan

1. Buat part dengan solid (part kosong tidak bisa masuk ke rakitan: "Bangun solid dulu, lalu masukkan ke rakitan.").
2. Pilih {{ui:Rakitan}} di bilah alat.

Bilah status menampilkan "Rakitan dimulai dengan Part1 sebagai part tetap. Sisipkan part lain (Tambah salinan, Sisipkan, atau Edit › Duplikat), lalu sambungkan dengan Sambungan." Panel kiri kini mencantumkan **Part** dan **Sambungan**, dan bilah alat menampilkan alat rakitan. Alat sketsa dan fitur disembunyikan.

Part pertama adalah **tetap**: ia tidak pernah bergerak, dan semua yang lain ditempatkan relatif terhadapnya.

## Sisipkan part

- {{ui:Tambah salinan}} menyisipkan salinan lain dari part yang dipilih (atau dari part terakhir). Salinan berbagi satu part: sunting satu dan setiap salinan berubah.
- {{ui:Duplikat}} ({{key:Mod+D}}) di grup Sunting melakukan hal yang sama untuk part yang dipilih. {{key:Mod+C}} dan {{key:Mod+V}} menyalin part dan menempelkannya di sebelah yang lain, di rakitan ini atau rakitan lain; {{key:Mod+Shift+V}} menempelkannya di tempat yang sama. Lihat [Salin, tempel, dan duplikat](topic:copy-paste).
- {{ui:Sisipkan}} menyisipkan part dari file `.partcraft.json` di komputer Anda. Part disalin ke dalam rakitan.

Part baru muncul 20 mm di kanan semua yang sudah ada, dan tetap di sana sampai sambungan menempatkannya. Part tanpa sambungan juga bisa dipindahkan dengan tangan: nilai yang diketik atau panah yang Anda seret (lihat [Daftar part, tampilan terurai, dan memindahkan part](topic:assembly-bom-explode)).

## Sambungkan dua part

1. Pilih {{ui:Sambungan}} atau tekan {{key:J}}. Panel kanan menampilkan **Sambungan baru**.
2. Klik muka datar pada part pertama. Muka itu menyala.
3. Klik muka datar pada part kedua.

Part kedua berpindah sehingga mukanya menempel pada muka part pertama, menghadapnya. Sambungan muncul di bawah **Sambungan**, misalnya "Revolute1", dan panel kanan menampilkan pengaturannya.

- Jika kedua muka dibuat oleh revolusi, sambungan dimulai sebagai **engsel (revolute)**; jika tidak, **kaku**. Ubah setelahnya.
- Muka melengkung tidak bisa dipilih: "Muka itu melengkung. Pilih muka datar (untuk berputar pada lubang atau sumbu revolusi, pilih itu pada sambungan setelahnya)."
- {{key:Esc}} membatalkan sambungan yang sudah dimulai (atau klik part di daftar sebelah kiri).

### Pengaturan sambungan

| Pengaturan | Fungsinya |
|---|---|
| **Tipe** | Salah satu sambungan di tabel di bawah |
| **Sudut (°)** | Memutar part kedua pada sumbu sambungan (tegak lurus terhadap muka) |
| **Offset (mm)** | Menggerakkan part kedua sepanjang sumbu, menjauhi muka (nilai negatif mendorongnya masuk) |
| **Sepanjang X**, **Sepanjang Y**, **Miring pada X**, **Miring pada Y**, **Sepanjang slot**, **Arah slot** | Nilai lain, ditampilkan untuk sambungan yang memakainya |
| **Pusatkan pada** (untuk setiap sisi) | Tempat sumbu sambungan memotong muka: "The face's own origin" (titik asal muka itu sendiri), sumbu sebuah revolusi ("Axis of Revolve1"), atau sumbu satu lubang ("Hole1, hole 2") |

Setiap nilai yang boleh bergerak pada sambungan memiliki penggeser seret di bawah kotaknya; yang lain diatur sekali saja.

| Sambungan | Yang bergerak | Diatur sekali |
|---|---|---|
| **Kaku** | tidak ada | Sudut, Offset |
| **Engsel** | Sudut (engsel) | Offset |
| **Geser** | Offset (laci) | Sudut |
| **Silinder** | Sudut dan Offset (poros di bantalan polos) | |
| **Planar** | Sepanjang X, Sepanjang Y melintasi muka, dan Sudut (part yang meluncur di atas meja) | |
| **Bola** | Sudut (putar) dan Miring pada X dan Y, pada pusat sambungan (sambungan bola) | |
| **Pin di slot** | Sepanjang slot dan Sudut (pin di slot lurus) | Arah slot: sudut slot dari X muka |

X dan Y sebuah muka adalah milik muka part pertama; pusat sambungan diatur oleh **Pusatkan pada**.

"The face's own origin" adalah titik asal part yang diproyeksikan ke muka, yang sering bukan tempat Anda ingin part sejajar. Untuk part bulat dan pin, atur **Pusatkan pada** ke sumbu revolusi atau lubang di kedua sisi: sumbu-sumbunya kemudian sejajar, seperti mate konsentris.

### Contoh: dua flens dibaut muka ke muka

1. Buka part flens (revolusi dengan pola melingkar lubang) dan pilih {{ui:Rakitan}}.
2. Pilih {{ui:Tambah salinan}}.
3. Tekan {{key:J}}, klik muka datar cakram flens pertama (muka tempat lubang baut dimulai), lalu muka yang sama pada flens kedua. Muka itu dibuat oleh revolusi, sehingga sambungannya engsel (revolute).
4. Atur **Pusatkan pada** ke "Axis of Revolve1" untuk kedua sisi. Kedua flens kini berbagi sumbu.
5. Ketik `22.5` di **Sudut (°)** untuk menyejajarkan lubang baut, atau seret penggeser.

## Loop tertutup: tautan mekanis

Part yang disambung membentuk cincin (tautan empat batang, engkol dan slider, rangka yang dibreis di kedua sisi) membentuk **loop**. PartCraft menyelesaikan setiap loop agar tertutup: sambungan pada loop itu mengambil nilai yang menyatukan cincin, bergerak sesedikit mungkin dari posisi awalnya.

- **Atur atau seret** nilai sambungan pada loop, dan sisa loop mengikuti. Untuk tautan empat batang, seret **Sudut** engkol, dan batang penghubung serta rocker bergerak bersamanya. Nilai yang Anda atur tetap; yang lain dihitung darinya.
- Di daftar, sambungan pada loop yang masih bisa bergerak berwarna **biru**: nilai lain masih bisa diatur. Loop yang tidak bisa bergerak (rangka yang dibreis) tetap hitam. Loop yang tidak bisa tertutup berwarna **merah**.
- Kotak **Part** menampilkan **Loop**: berapa yang tertutup dan berapa nilai yang masih bisa bergerak, misalnya "1 tertutup; 1 nilai masih bisa bergerak".
- {{ui:Periksa benturan pada gerakan}} menyapu sambungan pada loop dengan loop mengikutinya, langkah demi langkah (lihat [Periksa rakitan untuk benturan dan gerakan](topic:check-assembly)).

Tautan datar yang disusun dari batang datar harus sepakat dalam kedalaman: dua part yang disambung muka ke muka di kedua sisi cincin membutuhkan tinggi tumpukan yang sama di kedua arah. Gunakan **Offset** sambungan untuk mengangkat part jika tumpukannya tidak cocok, atau loop tidak bisa tertutup.

## Bekerja dengan part

Klik part di tampilan atau di daftar untuk memilihnya. Panel kanan menampilkan nama part, berapa salinan yang ada, volumenya, sambungannya, dan apakah part itu tetap, ditetapkan oleh sambungannya, atau "Tidak tersambung: tetap di tempat ia diletakkan". Tombolnya:

- {{ui:Edit part ini}} (atau {{ui:Edit part}} di bilah alat, atau klik dua kali part di daftar): membuka part untuk disunting;
- {{ui:Sisipkan salinan}};
- {{ui:Jadikan part tetap}};
- {{ui:Buang}}: juga menghapus sambungannya, setelah bertanya.

Rakitan harus menyimpan setidaknya satu part: "Rakitan harus menyimpan setidaknya satu part. Tutup saja rakitannya."

### Sunting part di tempat

1. Pilih part dan pilih {{ui:Edit part}}. Part terbuka dengan riwayatnya; judulnya menampilkan "Bracket (dalam rakitan Bracket)".
2. Ubah seperti part biasa.
3. Pilih {{ui:Kembali}} di bilah alat. Rakitan diperbarui: setiap salinan part itu berubah, dan sambungan pada muka yang dibuat dari tepi sketsa akan mengikuti.

Membawa kembali perubahan itu adalah satu langkah di daftar urungkan rakitan.

## Urungkan, simpan, dan tutup

- Rakitan memiliki daftar urungkan sendiri: {{key:Mod+Z}} dan {{key:Mod+Y}} bekerja pada sambungan, sisipan, dan pengaturan.
- {{ui:Simpan}} atau {{key:Mod+S}} mengunduh `<nama rakitan>.partcraft-asm.json`, dengan setiap part di dalamnya. Buka nanti dengan {{ui:Buka}}.
- {{ui:Tutup}} menutup rakitan dan kembali ke part tempat Anda memulai. Jika rakitan belum disimpan, akan bertanya: {{ui:Batal}}, {{ui:Buang rakitan}}, atau {{ui:Simpan dulu}}.
- Untuk mengganti nama rakitan, klik ruang kosong sehingga tidak ada yang dipilih, lalu ubah **Nama** di panel kanan.

## Rakitan besar

Rakitan bisa memuat ribuan salinan dari beberapa part. Salinan dari satu part digambar bersama, sambungan yang Anda putar hanya menempatkan part di belakangnya, dan daftar part menampilkan baris pertamanya dengan tombol "Tampilkan lainnya" di bawahnya (part yang dipilih selalu tercantum).

- Saat Anda memutar atau memperbesar tampilan, rakitan dengan lebih dari sekitar 300.000 segitiga digambar sebagai satu kotak per part, lalu sepenuhnya sesaat setelah Anda berhenti.
- {{ui:Tampilan}} › {{ui:Tampilan ringan}} membuat kotak tetap tampil setiap saat. Memilih part dan sambungan tetap memakai part yang sebenarnya.
- Seberapa cepat rakitan berputar juga bergantung pada kartu grafis Anda. Angka yang diukur PartCraft ada di catatan rilis, bersama mesin tempat angka itu diperoleh.

## Masalah sambungan

- Part yang tidak dijangkau sambungan mana pun ditandai sebagai **bebas**, dan panel menampilkan "Bracket2 tidak tersambung ke part tetap, jadi tetap di tempat ia diletakkan."
- Loop yang tidak bisa tertutup (panjangnya tidak mencapai, batas menghentikan sambungan, atau muka tidak sepakat dalam kedalaman): "Revolute3 menutup loop yang tidak bisa tertutup: meleset 2.000 mm. Periksa muka, offset, dan batas sambungan pada loop." Sambungan-sambungannya berubah merah.
- Jika muka atau sumbu yang dipakai sambungan hilang setelah menyunting part: "Muka yang dipakai sambungan ini hilang dari Bracket." Hapus sambungan dan buat ulang.

Berikutnya: [Periksa rakitan untuk benturan dan gerakan](topic:check-assembly).
