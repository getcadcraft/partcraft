---
title: Panas, tegangan termal, dan tekuk
summary: Cari suhu dalam part dari suhu tetap, fluks panas, daya panas, konveksi, dan radiasi (tunak atau seiring waktu), beban studi tegangan dengan kenaikan suhu, dan cari beban saat part langsing menekuk, dengan apa yang dapat dan tidak dapat diberitahukan masing-masing metode.
keywords: termal, perpindahan panas, panas, suhu, konduksi, konveksi, koefisien film, radiasi, emisivitas, fluks panas, daya panas, pembangkitan panas, heat sink, transien, waktu, pendinginan, pemanasan, Crank-Nicolson, Euler implisit, neraca panas, tegangan termal, tegangan termal seiring waktu, tegangan termal transien, pencelupan, kejut termal, riwayat tegangan, waktu terburuk, ekspansi termal, koefisien ekspansi, tekuk, tekuk Euler, faktor beban, beban kritis, kolom, langsing, eigenvalue
from: 1a1b7545
---

Studi ini berada di ruang kerja Simulasi, di samping tegangan statis dan frekuensi alami (lihat [Periksa tegangan dan defleksi](topic:simulation)). Pilih dari kotak **Tipe** di panel. Studi ini memakai mesh kubus kecil yang sama dan daftar material yang sama; setiap material pustaka memiliki konduktivitas termal, panas spesifik, dan koefisien ekspansi (nilai tipikal dari handbook, ditampilkan di bawah **Properti**).

## Termal: ke mana panas pergi?

1. Pilih **Termal (perpindahan panas)** sebagai **Tipe**.
2. Tambahkan kondisi termal dari daftar **Tambah** di panel, lalu klik mukanya (seperti untuk tumpuan dan beban):
   - **Suhu tetap**: muka dipertahankan pada suhu tertentu, dalam °C.
   - **Fluks panas**: W/m² yang mengalir masuk ke muka (negatif berarti keluar). Ia bekerja pada luas sebenarnya muka, bahkan di tempat kubus membentuk tangga.
   - **Daya panas**: total dalam watt, dibagi ke muka yang dipilih menurut luasnya. Gunakan untuk pemanas atau chip dengan daya yang diketahui.
   - **Konveksi**: udara atau cairan pada suhu tertentu membawa panas pergi dengan h W/(m²·K). Nilai h tipikal: udara diam 5–10, kipas 25–100, air 500–10,000. PartCraft tidak menghitung h: tidak ada aliran fluida dalam studi ini.
   - **Radiasi**: muka memancar ke lingkungan pada suhu tertentu, dengan emisivitas dari 0 sampai 1. Ia **dilinearisasi** (radiasi ditulis sebagai koefisien yang bergantung pada suhu dan dihitung ulang hingga stabil) dan hanya menuju lingkungan: muka tidak saling bertukar panas.
3. **Pembangkitan panas** (W/m³) memanaskan seluruh part dari dalam, misalnya part resistif.
4. Tekan **Selesaikan**. Part diwarnai menurut suhu; pilih **Fluks panas** di **Tampilkan** untuk melihat ke mana panas mengalir. Arahkan kursor ke part untuk membaca keduanya.

Aliran panas tunak memerlukan tempat bagi panas untuk pergi: setidaknya satu suhu tetap, konveksi, atau radiasi. Part yang hanya menerima panas tidak memiliki keadaan tunak; jadikan transien sebagai gantinya.

Tabel menampilkan suhu terendah dan tertinggi beserta lokasinya, fluks panas terbesar, dan **neraca panas**: panas masuk atau keluar pada setiap kondisi (suhu tetap menghitung apa yang harus dipasok atau diserap), panas yang dibangkitkan, total masuk dan keluar, serta **ketidakseimbangan**. Ketidakseimbangan seharusnya hanya sebagian kecil dari panas masuk; jika besar, hasilnya tidak dapat dipercaya.

### Seiring waktu (transien)

Centang **Transien** dan isi **Suhu awal** (seluruh part mulai dari sana), **Rentang waktu**, dan jumlah **Langkah waktu**. **Implicit Euler** kuat; **Crank–Nicolson** lebih akurat untuk langkah yang sama, tetapi dapat bergelombang setelah perubahan mendadak. Setelah dihitung, geser penggeser **Waktu** untuk melihat suhu pada setiap saat (skala warna tetap sama untuk setiap saat). Neraca panas kemudian menyertakan panas yang tersimpan.

## Tegangan termal: apa yang dilakukan perubahan suhu pada part?

Dalam studi **Tegangan statis** (atau **Tekuk**), atur **Beban termal**:

- **Perubahan suhu seragam**: seluruh part menghangat (atau mendingin, dengan angka negatif) sebesar sekian kelvin.
- **Suhu dari kondisi termal**: tambahkan kondisi termal ke studi yang sama; suhu tunak dihitung lebih dahulu pada mesh yang sama, kemudian part memuai sebesar α·(T − **suhu bebas tegangan**).
- **Suhu seiring waktu (proses transien)**: tambahkan kondisi termal, lalu isi **Suhu awal**, **Rentang waktu**, **Langkah waktu**, dan **Pengaturan langkah waktu** seperti untuk studi termal transien. Suhu dihitung seiring waktu pada mesh yang sama (kubus atau tetrahedron), dan solusi statis pada suhu setiap saat memberikan tegangan pada saat itu. **Tegangan pada**:
  - **Waktu terburuk** (awal): **Jumlah solusi tegangan** menghitung saat-saat yang tersebar merata sepanjang proses, termasuk awal (21 kecuali Anda mengubahnya, paling banyak 51). Hasil terbuka pada saat dengan tegangan von Mises terbesar; tabel menyebut saat itu, sebuah grafik kecil menampilkan tegangan puncak terhadap waktu, dan penggeser **Waktu** menampilkan tegangan pada setiap saat yang dihitung (skala warna tetap mengikuti saat terburuk).
  - **Satu waktu yang dipilih**: satu saat, yaitu langkah waktu terdekat dengan **Waktu (s)** yang Anda berikan. Studi tekuk selalu mengambil satu waktu yang dipilih (akhir proses kecuali Anda mengatur yang lain).

Part yang dicelupkan (dari panas ke dingin) atau dipanaskan mendadak paling tertekan saat bagian dalam dan permukaannya paling berbeda: sering tepat di awal. Suhu yang ditahan berlaku sejak saat pertama, sebagai perubahan mendadak, sehingga tegangan di awal sangat bergantung pada ukuran elemen (hanya beberapa elemen yang melihat perubahan). Bacalah sebagai "sangat tinggi", dan lihat saat-saat berikutnya pada penggeser untuk nilai yang dapat diselesaikan oleh mesh. Tegangannya bersifat quasi-statis: tanpa inersia, tanpa getaran akibat perubahan mendadak.

Part yang bebas memuai tidak memiliki tegangan termal: tahan hanya cukup untuk menghentikannya bergerak (misalnya tiga muka tanpa gesekan pada sudut siku-siku). Dijepit di antara dua dinding, ia tertekan: batang baja yang dipanaskan 50 K di antara dinding kaku memikul sekitar 117 MPa. Beban termal menyeimbangkan dirinya sendiri, sehingga reaksinya tetap hanya menyeimbangkan beban mekanis.

## Tekuk: kapan part langsing menyerah?

1. Pilih **Tekuk (linear)** sebagai **Tipe**, dan tambahkan tumpuan dan beban seperti untuk studi statis.
2. Atur **Faktor beban yang dicari** (berapa banyak mode tekuk).
3. Tekan **Selesaikan**. Setiap mode memiliki **faktor beban**: kelipatan dari beban Anda saat part ideal menekuk. Faktor beban 3 berarti tiga kali beban Anda, **faktor beban di bawah 1 berarti part menekuk di bawah beban yang Anda terapkan**. Tabel juga memberi total beban pada setiap faktor. Bentuk mode menunjukkan cara menekuknya (ukurannya tidak berarti apa-apa).

**Tekuk linear melebih-lebihkan beban tekuk yang sebenarnya.** Ia mengasumsikan part sempurna: lurus sempurna, tanpa tegangan sisa, dan elastis. Part nyata memiliki ketidaksempurnaan kecil dan dapat meluluh lebih dahulu, dan cangkang berdinding tipis dapat menekuk pada sebagian kecil nilai linear. Gunakan margin yang longgar, dan perlakukan faktor beban yang dekat atau di bawah 3 untuk cangkang tipis sebagai peringatan.

## Seberapa jauh dapat dipercaya

PartCraft memeriksa solver ini terhadap rumus manual: batang di antara dua suhu (tepat), sirip pendingin (dalam 0.3 K), pelat yang memanaskan dirinya sendiri (tepat), kubus yang mendingin seiring waktu (dalam 0.1 % dengan Crank–Nicolson), batang yang dipanaskan mendadak di satu ujung, batang bebas yang dihangatkan (tanpa tegangan, ΔL = αLΔT), batang yang ditahan di antara dinding (σ = −EαΔT), pelat yang dicelupkan seiring waktu terhadap solusi deret klasik (dalam 1 % pada kubus, 2.1 % pada tetrahedron di pusat pelat; 0.5 % di permukaannya), saat terakhir proses panjang terhadap tegangan termal tunak (sama hingga sepersejuta), dan kolom Euler (dalam 1 % jepit-bebas, 1.5 % sendi-sendi). Perlu diingat:

- **Nilai material konstan.** Konduktivitas, panas spesifik, dan ekspansi tidak berubah dengan suhu di sini; pada beberapa ratus derajat, nilainya dapat berubah 10–30 %. Kekakuan juga tidak berubah.
- **Tegangan seiring waktu bersifat quasi-statis dan elastis**: setiap saat adalah solusi statis (tanpa inersia), dan tanpa peluluhan, sehingga pencelupan yang akan meluluhkan permukaan justru menampilkan tegangan di atas batas luluh.
- **Koefisien konveksi adalah masukan Anda**, bukan dihitung dari aliran udara atau air.
- **Tanpa resistansi kontak**: part adalah satu solid.
- **Hanya tekuk linear**: tanpa ketidaksempurnaan, tanpa peluluhan, tanpa perilaku setelah menekuk.
- Susunan kubus dan sudut dalam yang tajam memengaruhi tegangan termal dengan cara yang sama seperti tegangan lainnya (lihat [Periksa tegangan dan defleksi](topic:simulation)).
- Ini adalah build laboratorium: periksa part yang penting dengan cara lain.

## Terkait

- [Periksa tegangan dan defleksi (Simulasi)](topic:simulation)
- [Yang belum dibuat](topic:not-built-yet)
