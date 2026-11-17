---
title: Simulasikan aliran fluida (studi Flow)
summary: Aliran melalui saluran di dalam part atau di sekitarnya dalam kotak: inlet, outlet, udara, air, atau fluida Anda sendiri, lalu kecepatan dan tekanan pada bidang potong yang dapat digeser, garis alir, tekanan permukaan, penurunan tekanan, neraca massa, drag dan lift, serta apa yang dapat dan tidak dapat diberitahukan oleh metode laminar.
keywords: aliran, CFD, fluida, dinamika fluida komputasi, simulasi aliran, udara, air, viskositas, massa jenis, bilangan Reynolds, laminar, turbulen, penurunan tekanan, head loss, inlet, outlet, tutup, penutup, kecepatan, laju aliran, laju aliran volume, liter per menit, tekanan statis, garis alir, bidang potong, bidang seksi, drag, lift, koefisien drag, koefisien lift, luas frontal, aliran eksternal, aliran internal, pipa, saluran, manifold, nosel, lattice Boltzmann, residual, konvergensi
from: 7dc75f29
---

Studi **Flow** menghitung bagaimana fluida bergerak melalui saluran di dalam part Anda (**internal**) atau di sekitarnya (**eksternal**). Secara bawaan, studi ini **laminar, tak termampatkan, isotermal, dan Newtonian**: aliran halus dari fluida yang massa jenis dan viskositasnya tetap, tanpa panas, tanpa turbulensi, dan tanpa gravitasi. Model turbulen **eksperimental** juga tersedia, hanya untuk pola kualitatif (lihat di bawah). Studi ini bekerja pada muka bernama yang diberikan kernel mesh pada part (lihat [Kernel mesh](topic:solid-kernels)).

Pilih **Simulasi** di kotak **Ruang kerja**, tekan **Studi baru** jika belum ada, dan atur **Jenis** ke **Flow (CFD)**. **Model aliran** adalah **Laminar** (bawaan) atau **Turbulen (Spalart–Allmaras, eksperimental)**: lihat **Aliran turbulen (eksperimental)** di bawah. Pengaturan struktural studi tetap disimpan, sehingga Anda dapat kembali. Pengaturan aliran disimpan dalam file part dan setiap perubahan dapat dibatalkan.

## Pilih fluida dan sel

- **Fluida**: udara atau air pada 20 °C, atau **Kustom** dengan massa jenis (kg/m³) dan viskositas dinamis (Pa·s) Anda sendiri. Udara menggunakan hukum gas ideal dan hukum Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); air menggunakan nilai IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Ukuran sel**: ruang fluida diisi kubus yang sama besar. Kosongkan untuk ukuran otomatis; panel menampilkan grid. Setiap bukaan dan saluran sebaiknya **terdiri dari setidaknya 8 hingga 10 sel** agar angkanya berguna; sel yang lebih kecil lebih akurat tetapi lebih lambat (dua kali lebih halus berarti sekitar 16 kali kerja).
- **Dinding**: **Interpolasi** mengikuti dinding melengkung di antara sel (bawaan); **Pantul-balik** memperlakukan dinding sebagai tangga kubus.

## Aliran di dalam part

Ruang fluida harus tertutup. Tambahkan **Inlet** dan **Outlet** di panel, lalu klik muka-muka mereka di tampilan:

1. **Muka datar di sekitar bukaan** — tepi pada ujung pipa, muka port. PartCraft menutup lubang bukaan dengan tutup. Setiap lubang pada muka itu termasuk bukaan tersebut, jadi jika inlet dan outlet terbuka pada muka yang sama, modelkan tutup tipis di atas salah satunya.
2. **Muka dalam tutup** — seperti pada alat CAD lain: modelkan pelat tipis (ekstrusi) di atas bukaan dan pilih muka yang menyentuh fluida.

Untuk inlet, atur **kecepatan** (m/s, seragam di seluruh bukaan, masuk ke dalam part) atau **aliran volume** (L/min). Untuk outlet, atur **tekanan statis** (Pa, gauge). Jika sebuah bukaan dibiarkan terbuka, atau dinding lebih tipis dari satu sel, bagian dalam menyatu dengan bagian luar dan penghitungan berhenti dengan pesan "Tidak ada ruang fluida tertutup".

## Aliran di sekitar part

Atur **Aliran** ke **Eksternal**, **Kecepatan**, arah aliran menuju, dan seberapa jauh kotak mencapai ke hulu, ke hilir, dan ke samping (kosong: 1, 3, dan 1 kali ukuran terbesar part). Muka kotak tempat aliran masuk adalah aliran masuk, muka tempat aliran keluar adalah aliran keluar pada 0 Pa, dan muka di sepanjang aliran bersifat slip. Kotak yang terlalu kecil memampatkan aliran melewati part dan menaikkan drag. **Area acuan** adalah area yang digunakan koefisien drag dan lift (kosong: luas frontal part yang terlihat sepanjang aliran); lift diukur sepanjang +Y kecuali Anda memilih arah lain.

## Hitung dan baca hasil

Tekan **Hitung**. Penghitungan berjalan di latar belakang dengan jumlah langkah, residual, dan grafik residual; **Hentikan** mengakhirinya. Penghitungan berhenti ketika residual (seberapa jauh medan kecepatan masih berubah per langkah) berada di bawah target dan penurunan tekanan atau drag sudah stabil. Jika batas langkah tercapai lebih dulu, panel menampilkan **Belum konvergen** dengan warna merah: angkanya adalah keadaan terakhir, bukan jawaban tunak.

- **Bidang potong**: kecepatan atau tekanan statis pada bidang melalui model; pilih normalnya (X, Y, atau Z) dan geser penggeser untuk memindahkannya. Arahkan kursor untuk membaca nilainya.
- **Garis alir**: dari inlet (internal) atau dari rak melintang di ujung masuk kotak pada bidang potong (eksternal).
- **Part**: solid, tembus pandang (agar bidang di dalam terlihat), tekanan permukaan, atau disembunyikan.
- **Tabel**: bilangan Reynolds, penurunan tekanan (rata-rata tekanan statis di inlet dikurangi di outlet), aliran dan tekanan rata-rata setiap bukaan, gaya pada part, drag dan lift beserta koefisiennya dan area acuan (eksternal), neraca massa (aliran masuk terhadap aliran keluar), mesh, dan solver.

## Aliran turbulen (eksperimental)

**Model aliran › Turbulen (Spalart–Allmaras, eksperimental)** menghitung aliran turbulen rata-rata waktu (RANS tunak): model Spalart–Allmaras memberikan viskositas eddy pada setiap sel, dan sel di dekat dinding menggunakan hukum dinding Spalding alih-alih menyelesaikan lapisan tipis di sana. Aliran sepenuhnya turbulen di mana-mana (tidak ada daerah laminar, tidak ada transisi).

**Model ini tidak lulus pemeriksaan akurasinya.** Panel, hasil, dan tabel menyatakannya pada setiap studi turbulen, dan peringatannya tidak dapat ditutup. Gunakan untuk **pola aliran kualitatif** — tempat aliran terpisah, berputar balik, atau dipercepat — **bukan untuk angka desain**.

| Pemeriksaan | Acuan | Hasil |
|---|---|---|
| Gesekan saluran datar, sel pertama pada y⁺ 49 / 98 | korelasi Dean | +3.3 % / +4.7 % |
| Saluran dinding terselesaikan (y⁺ ≈ 3), Re_τ 180: kecepatan bulk | DNS Moser, Kim & Mansour | −1 % |
| Saluran datar, y⁺ 7–15 atau 190–380 | korelasi Dean | +9 sampai +22 % |
| Gesekan pipa melalui sel kubus, sepenuhnya berkembang, 10–30 sel melintang | Colebrook | 30 sampai 34 % terlalu tinggi |
| Penempelan kembali di belakang anak tangga menghadap belakang, 6–14 sel per tinggi anak tangga | Driver & Seegmiller, 6.26 tinggi anak tangga | 21 sampai 39 % terlalu pendek |

Hasil membaik hanya lambat dengan sel yang lebih halus. Setelah penghitungan, tabel menampilkan **y⁺ sel pertama** (minimum, rata-rata, dan maksimum dari sel dinding) dan memberi peringatan di luar rentang yang diperiksa, yaitu 1 sampai 400; targetkan sekitar 30 sampai 300. **Waktu jalan:** sel otomatis diatur agar selesai dalam beberapa menit pada satu inti laptop paling lama (panel menampilkan kasus terburuk untuk grid dan batas langkah; pipa kecil selesai dalam kurang dari 20 detik). Membagi ukuran sel menjadi setengah membutuhkan waktu sekitar 16 kali lebih lama. Gaya pada part berasal dari neraca momentum di atas bukaan atau kotak.

**Pengerjaan sejauh ini:** sel dinding kini mencocokkan tegangan geser mereka sendiri dengan hukum dinding, yang menurunkan galat pipa dan anak tangga ke angka di atas tanpa mengubah hasil saluran datar. Itu belum cukup untuk angka desain. Langkah berikutnya adalah sel yang lebih halus di dekat dinding.

## Apa yang dapat dan tidak dapat diberitahukannya

- **Model laminar** hanya laminar. Pada pipa, aliran menjadi turbulen di atas bilangan Reynolds sekitar 2,000 sampai 4,000; di belakang benda tumpul, jejak (wake) mulai melepas pusaran di atas sekitar 50. Panel memberi peringatan di titik-titik ini. Hasil laminar untuk aliran turbulen meremehkan penurunan tekanan dan salah menghitung drag. Model turbulen eksperimental (di atas) mencakup aliran turbulen secara kualitatif; angkanya belum dapat diandalkan.
- **Metode:** metode lattice Boltzmann (D3Q19, tumbukan dua-waktu-relaksasi) dijalankan hingga keadaan tunak. Di dalam, metode ini sedikit termampatkan; PartCraft menjaga perubahan massa jenis hingga beberapa persen. Jika aliran terlalu cepat untuk sel, penghitungan tidak akan dimulai dan memberi tahu seberapa kecil sel harus dibuat.
- **Diperiksa terhadap:** aliran Hagen–Poiseuille dalam pipa melalui part (gradien tekanan dalam 1 % pada 20 sel melintang), rongga berpenutup-bergerak dari Ghia et al. (dalam 0.75 % dari kecepatan penutup), dan benchmark silinder Schäfer–Turek (drag dalam 1 % pada 10 sel per diameter).
- Tidak dimodelkan: perpindahan panas, turbulensi dengan akurasi desain (model turbulen bersifat eksperimental), permukaan bebas, kavitasi, gravitasi, bagian bergerak, fluida non-Newtonian, dan dinding kasar. Build lab: periksa hasil penting dengan cara lain.
