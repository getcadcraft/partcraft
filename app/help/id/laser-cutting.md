---
title: Kirim gambar ke laser
summary: Pilih apa yang dilakukan setiap layer (potong, gores, ukir, isi, gambar), pratinjau gerakan kepala, simpan G-code GRBL mode laser, atau kirim dari peramban setelah menelusuri bingkai pekerjaan.
keywords: laser, pemotong laser, pengukir laser, GRBL, G-code, ukir, isi, dither, ukir gambar, gores, potong, Web Serial, Linux, telusuri bingkai pekerjaan, daya, kecepatan, lintasan
from: 327b3c46
---

Panel {{ui:Laser}} mengubah layer gambar menjadi program untuk laser yang menjalankan GRBL (kebanyakan pengendali dioda dan CO2 untuk hobi dan bengkel kecil). Di PartCraft, pilih {{ui:Ekspor}} › {{ui:Program laser…}}, lalu {{ui:Tambah garis luar dari DXF…}}: garis luar dan lubang masuk ke layer CUT. Pola datar dari part pelat logam (dengan garis tekuk di layer BEND) memerlukan kernel presisi, yang belum ada di versi ini. Pengaturan disimpan di dalam file part atau rakitan.

:::warning
Uji setiap pengaturan pada sisa bahan terlebih dahulu, kenakan pelindung mata yang sesuai dengan laser Anda, biarkan tutupnya tertutup jika ada, dan jangan pernah meninggalkan laser yang sedang menyala tanpa pengawasan. Angka awal setiap layer adalah contoh sementara, bukan rekomendasi untuk bahan apa pun.
:::

## Pilih apa yang dilakukan setiap layer

Setiap layer gambar adalah satu baris. {{ui:Fungsi}} mengaturnya menjadi **Potong**, **Gores**, **Ukir garis**, **Isi bentuk**, **Ukir gambar**, atau **Tidak dikirim**, dengan {{ui:Daya %}}, {{ui:Kecepatan mm/min}}, dan jumlah {{ui:Lintasan}}.

- **Isi** membakar bagian dalam bentuk tertutup dengan garis yang berjarak {{ui:Jarak garis}}, pada {{ui:Sudut}}, dua arah atau satu arah, dengan overscan agar kepala sudah berkecepatan penuh saat laser menyala; cross-hatch menambah lintasan kedua pada 90°. Bentuk yang berlubang tetap terbuka di lubang itu.
- **Ukir gambar** mengubah gambar menjadi titik-titik (Floyd–Steinberg, Atkinson, berurutan, atau hitam putih biasa pada ambang batas) atau, dengan *Tingkat abu-abu*, menjadi daya yang bervariasi.
- Urutannya: gambar dan isi lebih dulu, lalu ukir garis, lalu gores, lalu potong, sehingga bagian yang sudah terpotong tidak bergeser saat diukir. Dalam satu layer, lintasan berjalan **dari dalam dulu** (lubang sebelum pelat tempatnya berada), lalu yang terdekat berikutnya.

## Pratinjau, lalu simpan

Pratinjau menggambar apa yang dilakukan kepala: garis yang dibakar dalam warna, gerakan cepat dalam abu-abu, dan kotak hijau mengelilingi semua yang akan dibakar. Di bawahnya ada ukuran, panjang bakar, dan perkiraan waktu (tanpa akselerasi; mesin sungguhan membutuhkan waktu lebih lama). {{ui:Simpan G-code…}} menulis G-code mode laser GRBL: `$32=1`, `M4` (atau `M3`) dengan nilai S, gerakan `G0` dan `G1`, dan `M5` di akhir. X0 Y0 adalah sudut kiri bawah pekerjaan, kecuali Anda memilih titik asal gambar: atur titik nol kerja mesin Anda di sana. G-code mengikuti mode laser GRBL yang terdokumentasi; belum pernah dicoba pada laser sungguhan.

## Kirim dari peramban

Di Chrome dan Edge, {{ui:Hubungkan…}} meminta Anda memilih port USB laser. Tidak ada yang terhubung atau terkirim sebelum Anda menekan tombol. Tekan {{ui:Telusuri bingkai pekerjaan}} dulu: kepala menelusuri kotak pekerjaan dengan laser **mati** (atau pada daya rendah yang Anda atur untuk penunjuk) agar Anda bisa melihat di mana laser akan membakar. Baru setelah itu {{ui:Kirim pekerjaan}} aktif, dan akan mati lagi jika Anda mengubah sesuatu. {{ui:Jeda}} menahan kepala, {{ui:Hentikan}} juga menahannya, mengatur ulang pengendali (laser mati), dan mengirim `M5`. Jika Web Serial tidak tersedia (Firefox, Safari, dan CadCraft Studio, yang tampilan webnya belum memilikinya), simpan G-code dan kirimkan dengan program bawaan laser Anda.

## Belum dibuat

Format pengendali lain (Ruida, laser Marlin, file vendor), tab dan lead-in, offset kerf, pustaka material, sumbu putar dan sumbu Z, penyelarasan kamera.
