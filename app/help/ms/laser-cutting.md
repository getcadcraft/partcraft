---
title: Hantar lukisan ke laser
summary: Pilih apa yang dilakukan oleh setiap lapisan (potong, gores, ukir, isi, gambar), pratonton pergerakan kepala, simpan G-code mod laser GRBL, atau hantarnya dari pelayar selepas membingkaikan kerja.
keywords: laser, pemotong laser, pengukir laser, GRBL, G-code, ukir, isi, dither, ukiran gambar, gores, potong, Web Serial, Linux, bingkaikan kerja, kuasa, kelajuan, laluan
from: 327b3c46
---

Panel {{ui:Laser}} menukar lapisan lukisan kepada program untuk laser yang menjalankan GRBL (kebanyakan pengawal laser diod dan CO2 untuk hobi serta kedai kecil). Dalam PartCraft, pilih {{ui:Eksport}} › {{ui:Program laser…}}, kemudian {{ui:Tambah garis luar daripada DXF…}}: garis luar dan lubang masuk pada lapisan CUT. Pelan rata bagi bahagian kepingan logam (dengan garis lenturnya pada lapisan BEND) memerlukan kernel tepat, yang tidak ada dalam versi ini. Tetapan disimpan dalam fail bahagian atau himpunan.

:::warning
Uji setiap tetapan pada bahan sisa dahulu, pakai pelindung mata yang sesuai dengan laser anda, tutup penutup jika ada, dan jangan sekali-kali tinggalkan laser yang sedang berjalan tanpa pengawasan. Nombor yang dimulakan oleh sesuatu lapisan ialah pemegang tempat, bukan cadangan untuk mana-mana bahan.
:::

## Pilih apa yang dilakukan oleh setiap lapisan

Setiap lapisan lukisan ialah satu baris. {{ui:Tindakan}} menetapkannya kepada **Potong**, **Gores**, **Ukir garisan**, **Isi bentuk**, **Ukir gambar** atau **Tidak dihantar**, dengan {{ui:Kuasa %}}, {{ui:Kelajuan mm/min}} dan bilangan {{ui:Laluan}}.

- **Isi** membakar bahagian dalam bentuk tertutup dengan garisan, berjarak {{ui:Jarak garisan}} antara satu sama lain, pada {{ui:Sudut}}, kedua-dua arah atau satu, dengan lebihan imbasan supaya kepala sudah laju apabila laser dihidupkan; isi silang menambah laluan kedua pada 90°. Bentuk dengan lubang kekal terbuka di lubang itu.
- **Ukir gambar** menukar gambar kepada titik (Floyd–Steinberg, Atkinson, berurutan, atau hitam dan putih biasa pada ambang) atau, dengan *Tahap kelabu*, kepada kuasa boleh ubah.
- Susunan: gambar dan isian dahulu, kemudian ukiran garisan, kemudian goresan, kemudian potongan, supaya bahagian yang dipotong tidak bergerak semasa diukir. Dalam satu lapisan, laluan berjalan **dalam-dahulu** (lubang sebelum plat yang mengandunginya), yang terdekat seterusnya.

## Pratonton, kemudian simpan

Pratonton melukis apa yang dilakukan kepala: garisan yang dibakar dalam warna, pergerakan pantas dalam kelabu, dan kotak hijau mengelilingi semua yang dibakar. Di bawahnya ialah saiz, panjang bakaran dan anggaran masa (tanpa pecutan; mesin sebenar mengambil masa lebih lama). {{ui:Simpan G-code…}} menulis G-code mod laser GRBL: `$32=1`, `M4` (atau `M3`) dengan nilai S, pergerakan `G0` dan `G1`, `M5` di hujung. X0 Y0 ialah sudut kiri bawah kerja melainkan anda memilih asal lukisan: tetapkan sifar kerja mesin anda di situ. G-code mengikut mod laser GRBL yang didokumenkan; ia belum dicuba pada laser sebenar lagi.

## Hantar dari pelayar

Dalam Chrome dan Edge, {{ui:Sambung…}} meminta anda memilih port USB laser. Tiada apa yang disambungkan atau dihantar sehingga anda menekan butang. Tekan {{ui:Bingkaikan kerja}} dahulu: kepala mengesan kotak kerja dengan laser **dimatikan** (atau pada kuasa rendah yang anda tetapkan untuk penunjuk) supaya anda dapat melihat di mana ia akan membakar. Barulah {{ui:Hantar kerja}} dihidupkan, dan ia dimatikan semula jika anda mengubah sesuatu. {{ui:Jeda}} menahan kepala, {{ui:Henti}} juga menahannya, menetapkan semula pengawal (laser dimatikan) dan menghantar `M5`. Jika Web Serial tiada (Firefox, Safari, dan CadCraft Studio, yang paparan webnya belum mempunyainya), simpan G-code dan hantarnya dengan program laser anda sendiri.

## Belum dibina

Format pengawal lain (Ruida, laser Marlin, fail pengeluar), tab dan lead-in, ofset kerf, pustaka bahan, paksi putar dan Z, penjajaran kamera.
