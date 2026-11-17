---
title: Buka part standar
summary: Mulai part dari baut, sekrup, mur, ring, pin, bantalan atau pasak yang ukurannya diambil dari standarnya, dengan setiap ukuran dari tabel standar sebagai konfigurasi.
keywords: part standar, baut, sekrup, heksagon, mur, ring, pin, pasak, bantalan, bantalan bola, pasak sejajar, pengikat, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, templat, pustaka
from: b9e2811f
---

PartCraft membuka part mekanis yang umum dalam keadaan siap pakai: dimensinya berasal dari tabel standar, dan setiap ukuran dalam tabel adalah konfigurasi yang dapat Anda pilih.

## Membuka satu part

1. Klik {{ui:Part standar}} di grup File.
2. Di {{ui:Part}}, pilih jenisnya, misalnya {{ui:Sekrup kepala heksagon (ISO 4017)}}.
3. Di {{ui:Ukuran}}, pilih ukurannya, misalnya `M10 × 40`.
4. Klik {{ui:Buka}}.

Part terbuka sebagai part baru yang belum disimpan. Simpan untuk menyimpannya ({{key:Mod+S}}).

| Part | Standar | Parameter |
|---|---|---|
| Sekrup kepala heksagon, baut heksagon | ISO 4017, ISO 4014, ASME B18.2.1 (inci) | `d` ukuran ulir, `s` lebar antar-sisi, `k` tinggi kepala, `l` panjang |
| Mur heksagon | ISO 4032, ASME B18.2.2 (inci) | `d`, `s`, `height` |
| Ring datar | ISO 7089 | `d1` dalam, `d2` luar, `h` tebal |
| Pin sejajar | ISO 2338 | `d`, `l` |
| Bantalan bola alur dalam | ISO 15 | `d` lubang, `D` luar, `B` lebar |
| Pasak sejajar | DIN 6885-1, bentuk A | `b` lebar, `h` tinggi, `l` panjang |

## Mengubah ukuran

Setiap ukuran adalah konfigurasi (lihat [Konfigurasi dan tabel desain](topic:design-tables)): buka {{ui:Parameter}} dan pilih ukuran lain, atau ubah parameter, misalnya `l` untuk sekrup yang lebih panjang, lalu simpan sebagai konfigurasi Anda sendiri.

## Yang dimodelkan

- Sekrup dan baut: kepala heksagon dan batang polos. Mur: heksagon dengan lubang berukuran nominal ulir. Ulir tidak dimodelkan; tambahkan dengan {{ui:Ulir}} jika Anda membutuhkannya (lihat [Ulir](topic:threads)).
- Pin: silinder polos; sudut ujungnya ditinggalkan.
- Bantalan: hanya amplop luar (cincin lubang, diameter luar dan lebar), yang Anda butuhkan untuk menempatkannya.
- Pasak: pasak berujung bulat.

Material part adalah baja, sehingga panel massa menampilkan beratnya. Roda gigi belum tersedia di sini: PartCraft tidak memiliki fitur gigi, dan cakram bukan roda gigi. CadCraft menggambar roda gigi dengan konvensi gambar, dan pustakanya menyediakannya sebagai gambar.
