---
title: Definisikan penuh sketsa dengan relasi dan dimensi
summary: Tambahkan relasi dari panel kanan dan dimensi dengan alat Dimensi, baca warna kurang terdefinisi, terdefinisi penuh, dan terlalu terdefinisi, serta perbaiki sketsa yang terlalu terdefinisi.
keywords: relasi, batasan, dimensi, dimensi cerdas, terdefinisi penuh, kurang terdefinisi, terlalu terdefinisi, derajat kebebasan, berimpit, horizontal, vertikal, sejajar, tegak lurus, singgung, sama, sepusat, titik tengah, tetap, konflik, berlebihan
from: e76d047a
---

Sketsa **terdefinisi penuh** jika setiap titik dan setiap ukuran ditetapkan oleh relasi dan dimensi. Sketsa yang terdefinisi penuh hanya berubah saat Anda mengubah angka, sehingga part berperilaku dapat diprediksi saat Anda mengeditnya nanti. PartCraft tidak memaksa Anda untuk mendefinisikan sketsa sepenuhnya, tetapi selalu menunjukkan seberapa dekat Anda.

## Membaca status sketsa

Status ditampilkan di tiga tempat: chip di kiri atas tampilan, pesan di bagian atas panel kanan, dan bendera di riwayat.

| Status | Chip | Warna geometri | Artinya |
|---|---|---|---|
| Kurang terdefinisi | "Kurang terdefinisi · 3 derajat kebebasan" | Biru | Beberapa geometri masih dapat bergerak. Seret geometri biru untuk melihat ke arah mana |
| Terdefinisi penuh | "Terdefinisi penuh" | Tinta (hitam di Kertas, terang di Model) | Setiap titik dan ukuran ditetapkan |
| Terlalu terdefinisi | "Terlalu terdefinisi" | Merah pada relasi yang terlibat | Beberapa relasi saling bertentangan, atau satu relasi sudah tersirat oleh yang lain |

Geometri konstruksi berwarna abu-abu dan putus-putus, apa pun statusnya. Item yang dipilih berwarna oranye. "Derajat kebebasan" adalah satu cara sesuatu masih dapat bergerak: titik bebas memiliki dua (kiri-kanan dan atas-bawah), lingkaran bebas memiliki tiga (pusat dan jari-jarinya).

Keterangan di bawah pesan di panel kanan mengulang warna-warna ini.

## Tambahkan dimensi

1. Tekan {{key:D}} atau pilih {{ui:Dimensi}}.
2. Klik apa yang akan diukur:
   - **satu garis**: panjangnya;
   - **satu lingkaran**: diameternya; **satu busur**: jari-jarinya;
   - **dua titik** (titik ujung, pusat, titik lepas, atau origin): jarak di antara keduanya;
   - **sebuah titik dan sebuah garis**: jarak dari titik ke garis;
   - **dua garis sejajar**: jarak di antara keduanya; **dua garis yang membentuk sudut**: sudut di antara keduanya.
3. Setelah item pertama, bilah status berbunyi "Klik item kedua, atau klik tempat dimensi akan diletakkan." Klik item kedua, atau klik di ruang kosong tempat Anda ingin angkanya.
4. Kotak angka terbuka dengan nilai saat ini. Ketik ukurannya lalu tekan {{key:Enter}}. {{key:Esc}} mempertahankan nilai yang diukur.

**Tempat Anda meletakkan angka menentukan jenisnya** untuk garis miring atau dua titik: letakkan di atas atau di bawah untuk mendapatkan jarak horizontal, di kiri atau kanan untuk jarak vertikal, dan di tempat lain untuk jarak sebenarnya (sejajar).

Kotak ini menerima angka biasa dalam milimeter atau derajat, seperti `25`, `12.5`, atau `1e3`. Awalan `⌀`, `Ø`, atau `R`, atau akhiran `mm` atau `°`, diabaikan. Sudut berkisar 0 hingga 180 derajat. Operasi seperti `20+5` tidak diterima; untuk menautkan ukuran ke variabel atau rumus, awali dengan `=`.

Untuk mengubah dimensi nanti, klik dua kali angkanya di sketsa, atau pilih **Edit** di sebelahnya dalam daftar di panel kanan.

:::tip
Anda juga dapat memilih geometri terlebih dahulu (alat Pilih) lalu memilih tombol dimensi di panel kanan: {{ui:Jarak}}, {{ui:Jarak horizontal}}, {{ui:Jarak vertikal}}, {{ui:Radius}}, {{ui:Diameter}}, atau {{ui:Sudut}}. Hanya yang cocok dengan pilihan yang ditampilkan. Inilah cara memberi lingkaran sebuah radius, bukan diameter.
:::

## Tambahkan relasi

Relasi ditambahkan dari panel kanan, bukan dengan alat.

1. Tekan {{key:S}} untuk Pilih.
2. Klik satu item, lalu {{key:Shift}}+klik item kedua jika relasi membutuhkan dua. Origin juga dapat dipilih.
3. Panel kanan menampilkan "Terpilih: garis l3, titik p1" dan tombol untuk setiap relasi yang cocok, seperti {{ui:∥ Sejajar}} atau {{ui:• Berimpit}}.
4. Pilih tombolnya. Sketsa langsung terselesaikan.

Jika tidak ada relasi yang cocok, panel menampilkan "Tidak ada relasi yang cocok dengan pilihan ini. Pilih satu atau dua item (Shift+klik menambahkan)."

Daftar lengkap relasi, apa yang dibutuhkan masing-masing, dan fungsinya ada di [Relasi dan dimensi sketsa](topic:sketch-relations).

Relasi tampil di sketsa sebagai simbol kecil di dekat geometri (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Titik berimpit disembunyikan kecuali geometrinya dipilih atau relasinya bermasalah. Klik simbol untuk memilih relasi.

## Contoh: profil braket berbentuk L

1. Buat sketsa di **Bidang depan**. Dengan alat Garis, mulai dari origin dan klik enam sudut L, selesai kembali di origin. Rantai berakhir dengan sendirinya saat Anda mengklik titik pertama.
2. Garis yang digambar mendekati horizontal atau vertikal sudah memiliki relasi H dan V, kecuali garis terakhir: garis yang berakhir di titik yang sudah ada tidak mendapat relasi otomatis. Tekan {{key:S}}, klik garis terakhir itu, dan pilih {{ui:V Vertikal}} di panel kanan. Chip berbunyi "Kurang terdefinisi · 4 derajat kebebasan".
3. Tekan {{key:D}}. Klik garis bawah, klik di bawahnya, ketik `80`, {{key:Enter}}.
4. Klik garis kiri, klik di sebelah kirinya, ketik `60`, {{key:Enter}}.
5. Beri dimensi garis pendek atas `20` dan garis vertikal dalam `45` dengan cara yang sama.
6. Chip sekarang berbunyi **Terdefinisi penuh** dan seluruh L berubah menjadi tinta.

## Perbaiki sketsa yang terlalu terdefinisi

Saat relasi atau dimensi baru bertentangan dengan yang lain, PartCraft tidak memindahkan apa pun. Geometri tetap persis seperti semula, relasi yang terlibat berubah merah, dan bilah status menyebutkannya:

- "Terlalu terdefinisi: Horizontal, Jarak 40 tidak dapat semuanya dipenuhi. Urungkan, atau hapus salah satunya." Relasi-relasi itu saling bertentangan.
- "Terlalu terdefinisi: Sejajar sudah tersirat. Hapus." Relasi itu tidak menambah apa pun: yang lain sudah memaksanya. (Misalnya, sisi-sisi persegi panjang sudah sejajar.)

Untuk memperbaikinya:

1. Tekan {{key:Mod+Z}} untuk mengurungkan perubahan terakhir, atau
2. Temukan item merah dalam daftar **Relasi dan dimensi** di panel kanan (grup yang memuatnya terbuka dan namanya berwarna merah) dan pilih **Hapus** di sebelahnya. Anda juga dapat mengklik simbol atau angkanya di sketsa dan menekan {{key:Delete}}.

:::note
Tidak ada dimensi referensi (yang hanya melaporkan ukuran) dalam build ini. Dimensi yang hanya melaporkan ukuran yang sudah ditetapkan relasi lain diperlakukan sebagai terlalu terdefinisi. Baca ukuran di panel sebagai gantinya: pilih garis dan lihat tombol Dimensi, atau periksa fakta part setelah Anda melakukan ekstrusi.
:::

Sketsa yang terlalu terdefinisi dengan konflik nyata membuat fitur yang memakainya gagal ("Terlalu terdefinisi: 1 relasi tidak dapat semuanya dipenuhi."), dan riwayat menandainya **⚠ kesalahan**. Sketsa yang hanya berlebihan tetap dibangun, dengan ⚠ peringatan.

## Seret untuk menemukan apa yang bebas

Di Pilih, seret titik atau garis biru mana pun. Solver memindahkannya sesedikit mungkin sambil mempertahankan setiap relasi. Jika seretan akan melanggar relasi, geometri kembali ke posisinya. Ini cara tercepat untuk melihat dimensi mana yang masih kurang.

## Daftar relasi

Saat tidak ada yang dipilih, panel kanan mencantumkan **Relasi dan dimensi**. Setiap baris memiliki:

- **Edit** (hanya dimensi): membuka kotak angka;
- **Pilih**: memilihnya di sketsa;
- **Hapus**: menghapusnya.

Relasi dari satu jenis yang muncul lebih dari sekali berbagi satu baris, misalnya "Berimpit × 5" untuk persegi panjang yang terikat ke origin. Klik baris untuk membukanya: setiap relasi tercantum berdasarkan apa yang diikatnya ("titik p2, titik p4") dengan **Pilih** dan **Hapus** sendiri. Baris itu sendiri memiliki:

- **Pilih**: memilih semuanya di sketsa;
- **Hapus semua**: menghapus semuanya sekaligus ({{key:Mod+Z}} mengembalikannya).

Grup yang memuat relasi terlalu terdefinisi terbuka sendiri, dengan namanya berwarna merah. Dimensi selalu tercantum satu per baris, beserta nilainya.

Saat geometri dipilih, daftar hanya menampilkan **Relasi pada pilihan**.
