---
title: Bahagian daripada fizik: penjana
summary: Ruang kerja Engineer dan ciri Jasad dijana: pilih penjana, tetapkan inputnya (aliran, tekanan, suhu, bahan, pencetak), dan dapatkan bahagian yang bersaiz daripada formula buku teks, dengan lembaran datanya, pemeriksaan pembuatannya dan fail untuk alat analisis. Input yang sama sentiasa menghasilkan bahagian yang sama.
keywords: engineer, penjana, jasad dijana, fizik, peraturan, penukar haba, manifold, nozel, kekisi, gyroid, lembaran data, input, deterministik, input sama bahagian sama, pemeriksaan pembuatan, percetakan 3D, katil serbuk
from: 5a387dc0
---

Penjana ialah skrip yang menentukan saiz bahagian daripada keperluan anda dan membinanya. Penjana penukar haba mengambil haba yang hendak dipindahkan, dua aliran dan suhunya, tekanan dan bahan; ia mengira saiz teras dan ketebalan dindingnya, membinanya, dan memberitahu anda nombor yang digunakan dan dari mana setiap satu diperoleh. Tukar satu input dan bahagian itu akan mengikut.

Hasilnya ialah jasad biasa dalam bahagian: ia berada dalam senarai ciri, boleh dicetak, boleh dieksport. Penjana itu sendiri juga disimpan dalam bahagian, jadi fail boleh dibuka pada mana-mana komputer tanpa penjana dipasang, dan **membuka bahagian tidak pernah menjalankan skrip**.

## Buat jasad

1. Pilih ruang kerja {{ui:Engineer}} dalam penukar.
2. Pilih penjana dalam senarai (yang disertakan bersama PartCraft, kemudian mana-mana yang anda buka daripada fail) dan klik {{ui:New}}.
3. Skrip dijalankan. Apabila ia selesai, jasad berada dalam paparan dan panel memaparkan inputnya, **lembaran data** dan **pemeriksaannya**.

Anda juga boleh menambahnya daripada Reka bentuk: {{ui:Features}} › {{ui:More}} › {{ui:Generated body}}.

## Tukarnya

Tukar mana-mana input dan jasad dibuat semula sebentar selepas anda berhenti menaip. Panel memberitahu yang mana antara tiga perkara ini benar:

- **Up to date**: jasad sepadan dengan skrip dan inputnya.
- **The inputs changed**: jasad dalam bahagian ialah daripada input terdahulu; ia sedang dibuat semula, atau tekan {{ui:Run}}.
- **Not run yet** atau **The last run failed**: ralat skrip ditunjukkan bersama barisnya.

{{ui:Stop}} menamatkan larian yang mengambil masa terlalu lama. Buat asal kembali satu langkah pada satu masa: satu larian ialah satu langkah, satu input ialah satu langkah.

## Lembaran data

Setiap nombor yang dikira oleh penjana disenaraikan dengan **unit** dan **dari mana ia diperoleh** (persamaan buku teks, piawaian, lembaran data). Tiada apa-apa ialah pemalar tersembunyi. Lembaran itu ialah sebahagian daripada fail, jadi ia sama pada komputer seterusnya. [Data keluar](topic:data-out) menerangkan cara menyimpannya sebagai JSON atau PDF.

## Pemeriksaan

Penjana boleh menyemak bahagiannya sendiri berbanding proses percetakan: dinding dan jurang yang lebih nipis daripada yang dapat ditampung oleh proses, kepingan longgar, rongga yang memerangkap serbuk atau resin, lubang yang terlalu sempit untuk dibersihkan, dan bahagian menjorok yang memerlukan sokongan. Penemuan terdapat dalam panel dan dalam senarai {{ui:Problems}} (butang ⚠), dan ia disimpan bersama bahagian.

Angka proses ialah nombor bulat yang diberikan oleh panduan reka bentuk awam untuk proses secara umum (FDM, SLA, SLS, katil serbuk logam). Ia **bukan spesifikasi mesin anda**: gantikannya dengan angka bengkel anda sebelum anda bergantung pada pemeriksaan. Pemeriksaan berfungsi pada grid voksel, jadi ia tepat kepada kira-kira satu voksel: dinding hanya dilaporkan apabila ia lebih nipis daripada had sebanyak lebih daripada satu voksel.

## Apa yang disertakan

| Penjana | Apa yang dibuatnya |
|---|---|
| Gyroid block | Blok diisi gyroid, Schwarz P atau lembaran berlian: kekisi yang paling mudah |
| Gyroid heat exchanger | Teras penukar dua bendalir, bersaiz daripada tugas melalui kaedah keberkesanan-NTU, dindingnya daripada tekanan; boleh menyemak kejatuhan tekanan dengan kajian aliran pada satu sel |
| Distribution manifold | Kepala dan cabang, setiap tiub bersaiz daripada aliran yang dibawanya |
| Graded lattice beam | Kekisi yang dindingnya menebal di tempat pengoptimuman topologi menyatakan bahan diperlukan |

Semuanya ialah anggaran pertama yang dibina daripada formula buku teks. [Perpustakaan kejuruteraan](topic:engineering-library) menyenaraikan formula dan hadnya. Jalankan Simulation, Thermal atau Flow pada hasilnya sebelum anda bergantung padanya.

## Kawalan eksport

Penjana dan lembaran data Engineer membawa notis tentang kawalan eksport dan sekatan. Baca dalam [Kawalan eksport Engineer](topic:engineer-export-notice); ia juga terdapat di bahagian bawah setiap lembaran data.

## Belum dibina

- Kepala, port dan kelengkapan pada teras penukar haba: ia hanya teras sahaja.
- Lengkung suhu untuk kekuatan bahan: bahan berada pada suhu bilik.
- Kehilangan tee dan perkongsian aliran antara outlet dalam manifold.
- Menambah penjana daripada direktori add-on dengan satu klik; membuka fail menambah satu penjana kepada pelayar ini.
- Penjana untuk aplikasi lain.
