---
title: Periksa draft untuk cetakan dan pengecoran
summary: Warnai part menurut sudut draft-nya terhadap arah tarik cetakan, lihat muka mana yang lepas, mana yang memerlukan draft lebih banyak, dan mana yang lepas dari belahan cetakan lain, dengan bagian luas masing-masing.
keywords: analisis draft, draft, kemiringan, cetakan, mold, mould, die casting, cetak injeksi, arah tarik, garis pisah, undercut, lepas, periksa draft
from: 6a106f83
---

Part yang dibuat dalam cetakan, die, atau pengecoran pasir memerlukan **draft**: dinding yang sedikit dimiringkan agar part dapat meluncur keluar. **Analisis draft** mewarnai setiap muka menurut seberapa jauh ia miring dari arah cetakan terbuka (**tarik**).

## Nyalakan

1. Di ruang kerja Design, buka {{ui:Tampilan}} dan pilih {{ui:Analisis draft}}.
2. Atur **Pull** (**Tarik**): arah cetakan terbuka, sepanjang X, Y atau Z ke salah satu arah, atau **Square to a picked face** (**Tegak lurus muka yang dipilih**): tekan {{ui:Pilih muka}} dan klik muka datar part.
3. Atur **Minimum draft** (**Draft minimum**), dalam derajat: kemiringan terkecil yang dibutuhkan prosesmu (sering 1° sampai 3°).

Part diwarnai:

| Warna | Artinya |
|---|---|
| Hijau: **Positive draft** (**Draft positif**) | Miring ke arah tarik sedikitnya sebesar minimum: lepas dari belahan cetakan ini |
| Kuning tua: **Needs draft** (**Perlu draft**) | Dalam batas minimum ke kedua arah, seperti dinding vertikal: tambahkan draft di sini |
| Merah: **Negative draft** (**Draft negatif**) | Miring menjauhi arah tarik sedikitnya sebesar minimum: lepas dari belahan cetakan lain, atau undercut jika part harus keluar dari satu belahan |

Bagian luas permukaan part untuk setiap kelas ditampilkan di sebelahnya. **Reverse the pull** (**Balikkan tarik**) melihat dari belahan cetakan lain: hijau dan merah bertukar.

Muka melengkung dinilai titik demi titik, sehingga silinder yang melintang arah tarik menampilkan pita yang memerlukan draft di sisinya.

Warna mengikuti part saat Anda mengubahnya. {{key:Esc}} atau {{ui:Tutup}} mematikan analisis; tidak ada yang disimpan di dalam part.

:::tip
Untuk menambah draft, gunakan fitur {{ui:Draft}} pada muka kuning tua (lihat [Sweep, loft dan draft](topic:sweep-loft-draft)), lalu periksa lagi.
:::
