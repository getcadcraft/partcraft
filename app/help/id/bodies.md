---
title: Gabungkan, pindahkan, dan skala bodi; pola lintasan
summary: Buat bodi terpisah, lalu gabungkan, potong, atau irisan setelahnya; pindahkan, putar, sejajarkan, atau salin; skala secara merata atau dengan X, Y, dan Z; dan salin fitur atau bodi sepanjang kurva.
keywords: bodi, multi-bodi, bodi baru, gabungkan, boolean, gabung, potong, irisan, kurangi, union, simpan alat, pindahkan bodi, salin bodi, putar bodi, sejajarkan, translasi, skala, skala tidak seragam, regangkan, affine, pola lintasan, pola sepanjang kurva, array sepanjang lintasan, pola dikendalikan kurva
from: 6b1ea820
---

:::note
**Belum dibuat di versi ini.** Bekerja dengan beberapa bodi memerlukan kernel geometri eksak, yang tidak dimiliki versi PartCraft ini: setiap part dibangun dengan kernel mesh. [Yang belum dibuat](topic:not-built-yet) menjelaskan apa yang harus dilakukan sebagai gantinya. Sisa halaman ini menjelaskan cara kerjanya dengan kernel eksak.
:::

Sebuah part bisa berisi lebih dari satu solid. Setiap solid yang terpisah adalah **bodi**. Sebagian besar fitur menambah atau memotong dari setiap bodi yang disentuhnya; alat di halaman ini bekerja pada bodi utuh yang Anda pilih. Alat-alat tersebut ada di menu {{ui:Lainnya}} grup Fitur: {{ui:Gabungkan}}, {{ui:Pindahkan bodi}}, {{ui:Skala bodi}}, dan {{ui:Pola lintasan}}. Semuanya memerlukan kernel eksak (OpenCascade).

## Buat bodi terpisah

Atur **Operasi** ekstrusi atau revolusi ke **Bodi baru** di panel kanannya (sapuan dan loft juga memilikinya). Solid baru tetap terpisah walaupun tumpang tindih dengan yang lain. **Irisan** hanya menyimpan bagian tumpang tindih antara bentuk baru dan yang sudah ada.

Bodi dinamai menurut fitur yang memulainya: "Extrude2". Salinan dinamai menurut aslinya dan fitur yang menyalinnya: "Extrude2, salinan 1 dari Move1". Nama tetap sama saat Anda mengubah ukuran di hulu, sehingga fitur yang memakai bodi tetap menemukannya. Dengan dua bodi atau lebih, panel part (klik ruang kosong) mencantumkannya beserta volumenya.

## Ganti nama atau sembunyikan bodi

Klik ruang kosong di tampilan untuk melihat panel part. Daftar bodinya (ditampilkan saat part memiliki dua bodi atau lebih) memiliki kotak nama dan tombol {{ui:Sembunyikan}} di setiap baris.

- **Ganti nama:** ketik nama baru di kotak dan tekan {{key:Enter}} atau klik di tempat lain. Setiap panel kemudian memakainya: Gabungkan, Pindahkan bodi, dan pola. Kosongkan kotak untuk kembali ke nama dari fitur yang membuat bodi.
- **Sembunyikan:** klik {{ui:Sembunyikan}} di barisnya. Bodi keluar dari tampilan dan klik menembusnya, sehingga Anda bisa memilih muka di belakangnya. {{ui:Tampilkan}} mengembalikannya; {{ui:Tampilkan semua}} mengembalikan setiap bodi yang tersembunyi.

Menyembunyikan hanya mengubah tampilan. Bodi tersembunyi tetap dibangun, dihitung dalam volume dan pengukuran, serta disimpan dalam ekspor STL, 3MF, dan STEP. Nama dan bodi tersembunyi disimpan di file part, dan setiap perubahan adalah satu langkah {{ui:Urungkan}}.

## Gabungkan bodi

1. Shift+klik muka bodi **target**, lalu muka setiap bodi **alat**.
2. Pilih {{ui:Lainnya}}, lalu {{ui:Gabungkan}}.
3. Di panel kanan, pilih **Operasi**:

| Operasi | Hasil |
|---|---|
| Gabung | Target dan alat menjadi satu bodi |
| Potong | Alat diambil dari target |
| Irisan | Hanya bagian yang dimiliki bersama oleh target dan setiap alat yang disimpan |

**Bodi target** adalah bodi yang mempertahankan namanya. Centang atau hapus centang **Bodi alat**, atau gunakan **Pilih di tampilan** dan klik mukanya. **Simpan bodi alat** membiarkan alat tetap di tempatnya juga (berguna untuk cetakan dan intinya). Jika bodi alat sudah habis dipakai oleh Gabungkan sebelumnya, panel memberi tahu, alih-alih memilih bodi lain.

## Pindahkan atau salin bodi

1. Pilih {{ui:Lainnya}}, lalu {{ui:Pindahkan bodi}}. Bodi terbaru dicentang; centang bodi yang akan dipindahkan.
2. Pilih tipe **Pindahkan**:

| Pindahkan | Yang Anda atur |
|---|---|
| Translasi | **ΔX**, **ΔY**, **ΔZ** dalam milimeter |
| Titik ke titik | **Dari** dan **Ke**: klik dekat ujung tepi, fitur titik, atau sebuah spot pada muka |
| Putar pada sumbu | **Sumbu** (X, Y, Z, fitur sumbu, atau **Pilih**: tepi lurus, lingkaran, atau silinder) dan **Sudut (°)** |
| Sejajarkan muka ke muka atau bidang | **Muka yang dipindahkan** (muka datar bodi), **Ke** (muka datar atau bidang) |

Sejajarkan memutar bodi sehingga mukanya berada di atas muka lain, muka ke muka, lalu menggesernya hanya sepanjang normal muka itu. **Arah sama** memutarnya ke arah sebaliknya. **Salin** mempertahankan yang asli dan menambahkan salinan yang dipindahkan sebagai bodi baru.

## Skala bodi

1. Pilih {{ui:Lainnya}}, lalu {{ui:Skala bodi}}, dan centang bodinya.
2. Ketik **Skala**, atau hapus centang **Seragam** dan ketik **Skala X**, **Skala Y**, dan **Skala Z** (sepanjang sumbu dunia).
3. **Tentang** adalah titik yang tetap di tempatnya: pusat kotak bodi, atau titik yang Anda pilih.

Skala seragam itu eksak. Skala tidak seragam mengubah lingkaran menjadi elips: silinder menjadi silinder elips, yang tidak dapat ditampung permukaan analitik mana pun. Akibatnya, muka melengkung menjadi permukaan B-spline yang tetap berada dalam 0.0000004 mm dari bentuk eksak; muka datar dan tepi lurus tetap eksak. Panel memberi tahu apa yang terjadi. Faktor skala harus lebih dari nol (untuk mencerminkan, gunakan {{ui:Cerminkan}}).

## Salin sepanjang lintasan

1. Pilih fitur yang akan disalin di riwayat, atau biarkan tidak ada yang dipilih untuk menyalin bodi terbaru.
2. Pilih {{ui:Lainnya}}, lalu {{ui:Pola lintasan}}. Sketsa terbaru yang belum dipakai diambil sebagai lintasan.
3. Di panel kanan, atur:

| Pengaturan | Fungsinya |
|---|---|
| **Salin** | Bodi (setiap salinan menjadi bodi baru) atau Fitur (digabung atau dipotong seperti aslinya) |
| **Lintasan** | Centang sketsa, atau **Pilih tepi model**; potongan-potongannya harus tersambung ujung ke ujung |
| **Jumlah** | Total, termasuk yang asli |
| **Jarak** | Sama (tersebar sampai ujung lintasan terbuka, atau mengelilingi lintasan tertutup) atau jarak tetap |
| **Orientasi** | Ikuti lintasan (setiap salinan berputar mengikutinya) atau Tetap (salinan tetap sejajar) |
| **Balik arah** | Berjalan ke arah sebaliknya di sepanjang lintasan |

Salinan dimulai di tempat lintasan melewati paling dekat dengan aslinya dan diberi jarak menurut panjang sepanjang kurva.

Pola linear dan melingkar juga bisa menyalin bodi: centang **Salin bodi** di panelnya dan pilih bodinya; setiap salinan menjadi bodi baru.

## Batasan

- Bodi memerlukan kernel eksak; kernel mesh menyimpan satu solid dan memberi tahu hal itu.
- Skala tidak seragam membuat muka melengkung menjadi perkiraan B-spline yang mendekati (lihat di atas), bukan silinder atau kerucut eksak; permukaan offset belum bisa diskala dengan cara itu.
- Mengikuti lintasan pada kurva 3D yang berpilin membawa salinan tanpa memutarnya; pada lintasan datar, putarannya eksak.
- Gabungkan hanya bekerja pada solid. Bodi permukaan digabung dengan {{ui:Jahit}}.

Lihat juga [Bidang, sumbu, dan titik referensi](topic:reference-geometry) untuk titik dan bidang "di antara objek", dan [Fitur pola dan cermin](topic:patterns-mirror).
