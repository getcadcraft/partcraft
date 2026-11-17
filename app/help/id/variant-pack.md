---
title: Buat paket varian dari konfigurasi Anda
summary: Bangun setiap konfigurasi part, atau beberapa yang dipilih, sekaligus sebagai STEP, IFC, DWG, dan pratinjau masing-masing, dengan tabel parameternya dan part sebagai satu item pustaka beserta variannya.
keywords: paket varian, varian, konfigurasi, keluarga part, ekspor batch, setiap ukuran, step, ifc, dwg, pratinjau, tabel, csv, json, pustaka, konfigurator, konfigurator produk, katalog, item json
from: 9a6db99f
---

## Yang akan Anda lakukan

Serahkan **setiap ukuran part sekaligus**: satu file STEP, IFC, dan DWG serta gambar untuk setiap konfigurasi, tabel yang menjelaskan setiap konfigurasi, dan item pustaka yang menempatkan semuanya dalam satu halaman.

Anda memerlukan part dengan **konfigurasi** terlebih dahulu (lihat [Konfigurasi dan tabel desain](topic:design-tables)). Konfigurasi yang mematikan sebuah fitur, misalnya pelat dengan dan tanpa lubang, menjadi varian tersendiri.

## Langkah

1. Buka part. Pada tab {{ui:Parameter}}, cari **Konfigurasi**.
2. Klik {{ui:Paket varian…}}.
3. Centang konfigurasi yang akan dibangun (semuanya tercentang) dan file yang akan ditulis: STEP, IFC, DWG, pratinjau, dan item pustaka.
4. Klik {{ui:Buat paket}}. Baris status menghitung varian saat dibangun; part Anda tidak berubah.
5. Satu zip diunduh: `<part> variants.zip`.

## Isi zip

| File | Isinya |
|---|---|
| `<name>.step` | Konfigurasi sebagai solid STEP. |
| `<name>.ifc` | IFC4, satu elemen dengan badan yang dibangun dan parameter part sebagai properti; nilainya milik konfigurasi itu sendiri. |
| `<name>.dwg` | Tampak depan, atas, kanan, dan isometrik sebagai lembar gambar dengan ukuran penuh. |
| `<name>.svg` | Gambar garis isometrik dari konfigurasi itu. |
| `variants.csv`, `variants.json` | Tabel parameter: id, nama, dan nilai setiap parameter untuk setiap varian, fitur yang dimatikannya, file-filenya, volume, dan ukurannya. |
| `<part>.item.json` | Part sebagai satu item pustaka beserta variannya (lihat di bawah). |
| `README.txt` | Apa yang dibuat, catatan di bawah, dan apa yang tidak dibangun. |

File diberi nama menurut konfigurasinya. Konfigurasi yang gagal dibangun (fitur yang tidak dapat dibuat dengan nilai tersebut) tidak disertakan dalam file dan tabel, tercantum di README dan dalam pesan setelah zip disimpan; yang lain tetap ditulis.

## Perlu diketahui

- **STEP** bersifat eksak jika kernel eksak aktif di build Anda. Tanpa itu, STEP berfaset (segitiga datar), dan README menyatakannya.
- **DWG** adalah lembar gambar, bukan model 3D. Garisnya berasal dari mesh, sehingga tepi melengkung terdiri atas banyak garis pendek.
- **Item pustaka** memuat satu badan dan satu jejak untuk setiap varian, dalam sumbu pustaka sendiri: Z ke atas, bagian depan menghadap −Y, dan titik sisip di tengah sisi belakang di bagian bawah. Denahnya adalah persegi panjang pembatas setiap varian. Item dibatasi 8 MB, sehingga varian yang sangat berat menjadi kotak sebesar ukurannya dan README menyebutkan jumlahnya.
- Konfigurasi aktif part menjadi varian standar item.
- Port (titik sambung untuk pipa dan duct) tidak diatur dari PartCraft.

## Letakkan varian di halaman pustaka

Unggah `<part>.item.json` di **Pustaka › Unggah** pada situs. Pilih kategori, lisensi, dan baris atribusi Anda, lalu item ini menjadi item Pustaka dengan variannya. Di BimCraft, saat ditempatkan, item akan menanyakan varian mana yang dipakai, dan Swap menawarkan varian lainnya. Halaman tempat pengunjung memilih opsi, melihat 3D, dan mengunduh varian saat ini adalah **pratinjau staf**: belum terbuka untuk umum.

## Dari baris perintah

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` menamai konfigurasi, `--formats` berisi salah satu atau lebih dari `step`, `ifc`, `dwg`, `preview`; `--no-item` membiarkan item pustaka tidak disertakan. Perintah ini menulis folder, zip, atau keduanya, dan keluar dengan kode 1 saat sebuah varian tidak dapat dibangun. Lihat [Skrip dan baris perintah](topic:scripts-and-cli).
