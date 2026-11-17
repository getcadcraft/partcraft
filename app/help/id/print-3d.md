---
title: Menyiapkan part untuk cetak 3D
summary: Periksa apakah part atau rakitan tertutup, muat di printer Anda dan berdiri di alas, lalu unduh sebagai STL atau 3MF untuk slicer Anda.
keywords: cetak 3d, pencetakan 3d, printer, cetak, slicer, stl, 3mf, kedap air, tertutup, manifold, meja cetak, ukuran meja cetak, overhang, penyangga, alas, milimeter, ekspor, ulir, celah
from: 90d81dff
---

Slicer membutuhkan bentuk tertutup: tanpa lubang terbuka, setiap muka menghadap ke luar, dan tidak ada yang menembus dirinya sendiri. Part yang dibuat PartCraft sudah tertutup sejak awal, sehingga pemeriksaan terutama memberi tahu Anda ukurannya, apakah part muat di meja cetak printer Anda, apakah part berdiri di muka yang rata, dan seberapa banyak bagiannya menggantung.

## Periksa dan unduh

1. Opsional, sekali saja: atur meja cetak printer Anda di {{ui:Pengaturan}} › PartCraft › **Printer 3D**: lebar, kedalaman, dan tinggi dalam milimeter. Kosongkan untuk melewati pemeriksaan itu.
2. Pilih {{ui:Ekspor}}, lalu {{ui:Periksa untuk cetak 3D (STL atau 3MF)…}}.

   Dialog menampilkan "Siap dicetak" atau "Belum siap dicetak", mendaftar apa pun yang salah, dan memberikan ukuran di meja cetak (X × Y × Z, dalam milimeter), volume, dan jumlah segitiga.

3. Klik {{ui:Unduh 3MF}} atau {{ui:Unduh STL}}. File-nya sama dengan {{ui:Ekspor}} › {{ui:3MF, untuk cetak 3D}} atau {{ui:STL, untuk cetak 3D}}.

Dalam rakitan, pemeriksaan dan file mencakup seluruh rakitan, setiap salinan di tempat ia ditempatkan.

Part diperiksa dalam posisi berdiri seperti yang ditulis ekspor: apa yang mengarah ke atas di PartCraft (tegak lurus terhadap Bidang atas) mengarah ke atas di meja cetak. Part yang disketsa di Bidang atas akan tergeletak rata.

## Yang bisa ditampilkan dialog

**Belum siap dicetak** (slicer mungkin menolaknya atau mencetaknya salah): lubang (tepi dengan muka hanya di satu sisi), tepi yang dipakai bersama oleh tiga muka atau lebih, muka yang menghadap ke arah berlawanan, bodi terbalik, atau bodi yang menembus dirinya sendiri. Part yang dibuat di PartCraft seharusnya tidak pernah menampilkan ini; jika muncul, lihat [Pemecahan masalah](topic:troubleshooting).

**Peringatan** (tetap bisa dicetak, tetapi periksa dulu):

- **Lebih besar dari meja cetak printer Anda**, bahkan jika diputar 90° di atasnya.
- **Tidak ada yang rata di bagian bawah**: putar part di slicer agar sebuah muka bertumpu di meja cetak, atau akan memerlukan penyangga atau raft.
- **Miring keluar lebih dari 45° dari tegak**: muka-muka itu memerlukan penyangga jika berdiri seperti sekarang. Posisi lain mungkin membutuhkan lebih sedikit.
- **Bodi terpisah saling tumpang tindih** atau **bertemu muka ke muka**: slicer biasanya menggabungkannya. {{ui:Gabungkan}} di Fitur › {{ui:Lainnya}} menyatukannya menjadi satu bodi. Lihat [Bodi](topic:bodies).
- **Kurang dari 1 mm lebarnya**: periksa ukuran part.

## Ulir yang bisa dicetak

Ulir yang dimodelkan dicetak sebagai ulir sungguhan. Beri sedikit **Celah** agar baut hasil cetak masuk ke mur hasil cetak: lihat [Ulir](topic:threads).

## Membuat muka bulat lebih halus

STL dan 3MF terdiri dari segitiga. Untuk muka bulat yang lebih halus, klik ruang kosong agar tidak ada yang terpilih, lalu atur **Kurva** ke **Halus (128 per putaran)** atau **Sangat halus (256 per putaran)** di panel kanan sebelum mengekspor. Lebih banyak segitiga membuat file lebih besar.

## Lebih besar, lebih kecil, atau dalam bagian

- **Ekspor › Skala untuk cetak (STL atau 3MF)…** menyimpan part yang diskalakan per sumbu tanpa mengubahnya: **kelonggaran susut** dalam persen (ukuran × (1 + s), atau ukuran pasti ÷ (1 − s)) untuk pola cor, atau faktor biasa, terhadap tengah, sudut terendah, tengah bagian bawah, atau titik asal.
- **Ekspor › Pisah untuk cetak (zip berisi bagian)…** memotong part yang terlalu besar untuk printer Anda menjadi bagian-bagian yang masing-masing muat di meja cetak yang Anda tentukan, disambung dengan pasak, kunci, ekor burung, lubang dowel, atau kantong magnet (dengan celah yang Anda atur), setiap bagian dan sambungan diberi nomor, dan bagian-bagian disimpan sebagai STL atau 3MF dalam zip beserta lembar rakitan. Part itu sendiri tidak berubah.

## Tidak diperiksa

Tebal dinding, detail yang lebih kecil dari nozzle Anda, dan cara slicer menempatkan penyangga. Slicer Anda menampilkan hal-hal tersebut.
