---
title: Simpan, buka semula dan teruskan kerja
summary: Simpan bahagian dan himpunan ke komputer anda, namakannya, buka semula dengan butang, kekunci atau seretan, simpan versi, dan elakkan kehilangan kerja dalam tab pelayar.
keywords: simpan, buka, buka semula, muat, muat turun, versi, sandaran, namakan semula, nama fail, kerja hilang, tinggalkan laman, partcraft.json, partcraft-asm.json, bahagian baharu
from: c18a5abc
---

PartCraft tidak menyimpan apa-apa antara lawatan. Bahagian anda kekal dalam tab pelayar sehingga anda menyimpannya sebagai fail, dan kembali apabila anda membuka fail itu.

## Simpan bahagian

1. Namakan bahagian: klik ruang kosong dalam paparan supaya tiada yang dipilih, kemudian taip **Nama** dalam panel kanan dan tekan {{key:Enter}}. Tajuk sejarah berubah mengikutnya.
2. Tekan {{key:Mod+S}} atau pilih {{ui:Simpan}}.
3. Pelayar memuat turun `<nama>.partcraft.json`. Bar status menulis "Disimpan Bracket.partcraft.json (sejarah penuh; buka semula di sini untuk terus menyunting)."

Jika lakaran sedang dibuka, menyimpan akan menutupnya dahulu.

Fail itu memegang setiap lakaran, kekangan, dimensi dan ciri, serta ciri yang digantung, kedudukan bar rollback, tetapan helaian lukisan dan nota GD&T, dan teks penuh mana-mana pepejal STEP yang diimport. Senarai buat asal anda tidak disimpan.

## Simpan himpunan

Dalam himpunan, {{ui:Simpan}} atau {{key:Mod+S}} yang sama memuat turun `<nama himpunan>.partcraft-asm.json`. Setiap bahagian disimpan di dalamnya: anda tidak perlu fail bahagian berasingan untuk membukanya semula.

Semasa anda menyunting bahagian dari dalam himpunan, {{key:Mod+S}} menyimpan bahagian itu sahaja sebagai `.partcraft.json`. Pilih {{ui:Back}} dahulu, kemudian simpan, untuk menyimpan keseluruhan himpunan.

## Buka semula

Mana-mana cara berikut:

- pilih {{ui:Buka}} atau tekan {{key:Mod+O}}, kemudian pilih fail;
- seret fail dari {{pick:mac=Finder|windows=File Explorer|linux=pengurus fail anda}} ke paparan 3D ("Lepaskan bahagian PartCraft untuk membukanya" muncul).

PartCraft membezakan bahagian dan himpunan mengikut kandungannya, jadi kedua-duanya dibuka dengan cara yang sama. Fail `.step` atau `.stp` dibuka sebagai pepejal yang diimport: lihat [Buka fail STEP dan bina di atasnya](topic:import-step). Bar status mengesahkan: "Dibuka Bracket.partcraft.json: 7 ciri." atau "Dibuka Hinge.partcraft-asm.json: 3 bahagian, 2 sambungan."

Jika bahagian di skrin mempunyai perubahan yang belum disimpan, PartCraft bertanya dahulu: {{ui:Cancel}}, {{ui:Discard changes}} atau {{ui:Save first}}.

:::warning
Tutup himpunan ({{ui:Close}}) sebelum membuka fail bahagian. Jika anda membuka bahagian semasa himpunan berada di skrin, bahagian itu dimuatkan di belakang himpunan dan anda hanya melihatnya selepas menutup himpunan. Membuka fail himpunan juga menggantikan himpunan yang belum disimpan tanpa bertanya, jadi simpannya dahulu.
:::

## Mulakan semula

{{ui:New}} memulakan "Part1" yang kosong. Ia bertanya dahulu jika ada perubahan yang belum disimpan, dan menutup himpunan yang terbuka (bertanya jika himpunan itu belum disimpan).

## Simpan versi

Setiap simpanan ialah muat turun baharu, jadi anda boleh menyimpan versi dengan hanya mengekalkan fail:

- Letakkan versi atau tarikh dalam nama sebelum menyimpan: "Bracket semakan B".
- Pelayar anda mungkin menambah " (1)", " (2)" apabila fail dengan nama yang sama sudah ada dalam folder muat turun. Yang terbaharu ialah yang bernombor paling tinggi, atau semak tarikhnya dalam {{pick:mac=Finder|windows=File Explorer|linux=pengurus fail anda}}.
- Alihkan fail siap dari folder muat turun ke folder projek anda.

Lihat [Di mana fail anda pergi](common:your-files) untuk tempat muat turun pergi pada setiap sistem.

## Jangan hilang kerja

- Simpan sebelum menutup tab, memuat semula, atau membiarkan komputer tidur terlalu lama. Pelayar bertanya "Tinggalkan laman?" jika anda cuba menutup dengan perubahan yang belum disimpan, tetapi kemalangan atau komputer riba yang ditutup tidak memberi amaran.
- Tetingkap peribadi atau penyamaran berfungsi, tetapi tiada apa lain yang berbeza: fail itu tetap satu-satunya salinan.
- Simpanan awan dan sejarah versi belum tersedia.
