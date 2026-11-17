---
title: Mulai manual di Illustrate
summary: Ruang kerja Illustrate membuat manual dari desain Anda: tampilan, tampilan terurai line art dengan balon dan daftar part, instruksi langkah demi langkah, animasi, dan file 3D yang dapat dibuka pelanggan tanpa CAD. Manual adalah file tersendiri.
keywords: illustrate, manual, ilustrasi teknis, dokumentasi, tampilan terurai, daftar part, instruksi, partcraft-manual
from: e447e0ab
---

**Illustrate** adalah ruang kerja untuk dokumen yang dibutuhkan orang di sekitar desain: tampilan terurai dengan balon dan daftar part, ilustrasi line art untuk manual, instruksi langkah demi langkah, animasi, dan file 3D yang dapat dibuka pelanggan tanpa CAD. Pilih {{ui:Illustrate}} di pengalih {{ui:Ruang kerja}} di awal bilah alat.

**Manual** adalah file tersendiri (`<name>.partcraft-manual.json`). Manual menyimpan salinan bentuk setiap part, pohon produk dan properti part, serta tautan kembali ke asalnya, sehingga Anda dapat mengerjakan manual sementara desain terus berkembang. Saat desain berubah, [Perbarui dari desain](topic:illustrate-update) membawa perubahannya masuk.

## Memulai satu manual

Klik {{ui:Baru}} di grup {{ui:Manual}}, lalu:

- {{ui:Dari part yang terbuka}}: part yang terbuka di Desain.
- {{ui:Dari rakitan yang terbuka}}: ditampilkan sebagai gantinya saat rakitan terbuka; part-part-nya, posisinya, nomor part, material, dan tampilan terurainya ikut terbawa.
- {{ui:Dari file rakitan…}}: sebuah `.partcraft-asm.json` yang tersimpan; PartCraft membangun part-part-nya terlebih dulu.
- {{ui:Dari file lain…}}: glTF (.glb, .gltf), OBJ, STL, atau 3MF. Pohon dan nama dari file dipertahankan, dan salinan dari satu part (bentuk yang sama ditempatkan dua kali) menjadi satu part dengan jumlah. File STL dan OBJ tidak menyebutkan satuannya, sehingga Anda akan diminta memasukkannya. File STL dibaca dengan Z ke atas; glTF dan 3MF menyebutkannya sendiri.

Selama manual terbuka, Illustrate menampilkan salinan part milik manual; part atau rakitan yang terbuka di Desain disembunyikan sampai Anda kembali ke Desain.

## Simpan dan buka

{{ui:Simpan}} di grup {{ui:Manual}} (atau {{key:Mod+S}}) menyimpan manual; {{ui:Buka}} membuka satu manual. Setiap perubahan di Illustrate adalah satu langkah dalam riwayat manual itu sendiri: {{ui:Urungkan}} dan {{ui:Ulangi}} bekerja pada manual selama Illustrate terbuka.

## Belum dibuat

- File STEP belum terbuka di {{ui:Dari file lain…}}. Buka STEP di Desain sebagai gantinya (ia masuk sebagai badan solid: lihat [Buka file STEP](topic:import-step)) lalu mulai manual {{ui:Dari part yang terbuka}}, atau simpan sebagai glTF, 3MF, OBJ, atau STL.
- ModelCraft dan BimCraft belum dapat langsung mengirim model ke Illustrate: simpan sebagai glTF (.glb) dan gunakan {{ui:Dari file lain…}}.

Berikutnya: [Tampilan dan tampilan visual](topic:illustrate-views).
