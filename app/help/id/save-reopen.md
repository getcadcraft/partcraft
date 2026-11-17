---
title: Simpan, buka lagi dan lanjutkan bekerja
summary: Simpan part dan rakitan ke komputer Anda, beri nama, buka lagi lewat tombol, pintasan atau seret, simpan versi, dan hindari kehilangan pekerjaan di tab peramban.
keywords: simpan, buka, buka lagi, muat, unduh, versi, cadangan, ganti nama, nama file, pekerjaan hilang, tinggalkan situs, partcraft.json, partcraft-asm.json, part baru
from: c18a5abc
---

PartCraft tidak menyimpan apa pun di antara kunjungan. Part Anda berada di tab peramban sampai Anda menyimpannya sebagai file, dan kembali saat Anda membuka file itu.

## Simpan part

1. Beri nama part: klik ruang kosong di tampilan agar tidak ada yang dipilih, lalu ketik **Nama** di panel kanan dan tekan {{key:Enter}}. Judul riwayat berubah mengikutinya.
2. Tekan {{key:Mod+S}} atau pilih {{ui:Simpan}}.
3. Peramban mengunduh `<nama>.partcraft.json`. Bilah status menampilkan "Bracket.partcraft.json disimpan (riwayat lengkap; buka lagi di sini untuk terus menyunting)."

Jika sketsa sedang terbuka, menyimpan akan menutupnya terlebih dahulu.

File menyimpan setiap sketsa, relasi, dimensi dan fitur, termasuk fitur yang dinonaktifkan, posisi rollback, pengaturan lembar gambar dan catatan GD&T, serta seluruh teks solid STEP yang diimpor. Daftar undo Anda tidak disimpan.

## Simpan rakitan

Di rakitan, {{ui:Simpan}} atau {{key:Mod+S}} yang sama mengunduh `<nama rakitan>.partcraft-asm.json`. Setiap part disimpan di dalamnya: Anda tidak memerlukan file part terpisah untuk membukanya lagi.

Saat Anda menyunting part dari dalam rakitan, {{key:Mod+S}} menyimpan part itu sendiri sebagai `.partcraft.json`. Pilih {{ui:Kembali}} dulu, lalu simpan, untuk menyimpan seluruh rakitan.

## Buka lagi

Salah satu cara berikut:

- pilih {{ui:Buka}} atau tekan {{key:Mod+O}}, lalu pilih file;
- seret file dari {{pick:mac=Finder|windows=File Explorer|linux=pengelola file Anda}} ke tampilan 3D ("Lepaskan part PartCraft untuk membukanya" muncul).

PartCraft membedakan part dari rakitan lewat isinya, jadi keduanya dibuka dengan cara yang sama. File `.step` atau `.stp` dibuka sebagai solid impor: lihat [Buka file STEP dan bangun di atasnya](topic:import-step). Bilah status mengonfirmasi, misalnya: "Bracket.partcraft.json dibuka: 7 fitur." atau "Hinge.partcraft-asm.json dibuka: 3 part, 2 sambungan."

Jika part di layar punya perubahan yang belum disimpan, PartCraft lebih dulu bertanya: {{ui:Batal}}, {{ui:Buang perubahan}} atau {{ui:Simpan dulu}}.

:::warning
Tutup rakitan ({{ui:Tutup}}) sebelum membuka file part. Jika Anda membuka part saat rakitan ada di layar, part dimuat di belakang rakitan dan baru terlihat setelah rakitan ditutup. Membuka file rakitan juga menggantikan rakitan yang belum disimpan tanpa bertanya, jadi simpan dulu.
:::

## Mulai dari awal

{{ui:Baru}} memulai "Part1" kosong. Ia bertanya dulu jika ada perubahan yang belum disimpan, dan menutup rakitan yang terbuka (bertanya lebih dulu jika rakitan itu belum disimpan).

## Simpan versi

Setiap penyimpanan adalah unduhan baru, jadi Anda bisa menyimpan versi cukup dengan menyimpan file-filenya:

- Tambahkan versi atau tanggal pada nama sebelum menyimpan: "Bracket rev B".
- Peramban Anda mungkin menambahkan " (1)", " (2)" jika file dengan nama yang sama sudah ada di folder unduhan. Yang terbaru adalah yang bernomor tertinggi, atau cek tanggalnya di {{pick:mac=Finder|windows=File Explorer|linux=pengelola file Anda}}.
- Pindahkan file yang sudah selesai dari folder unduhan ke folder proyek Anda.

Lihat [Di mana file Anda berada](common:your-files) untuk lokasi unduhan di tiap sistem.

## Jangan kehilangan pekerjaan

- Simpan sebelum menutup tab, memuat ulang, atau membiarkan komputer tertidur terlalu lama. Peramban meminta konfirmasi meninggalkan situs jika Anda mencoba menutup dengan perubahan yang belum disimpan, tetapi crash atau laptop yang tertutup tidak memberi peringatan.
- Jendela privat atau penyamaran berfungsi, tetapi tidak ada yang berbeda: file tetap menjadi satu-satunya salinan.
- Penyimpanan cloud dan riwayat versi belum tersedia.
