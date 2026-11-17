---
title: Buat pek varian daripada konfigurasi anda
summary: Bina setiap konfigurasi bahagian, atau beberapa yang dipilih, sekali gus sebagai STEP, IFC, DWG dan pratonton setiap satu, dengan jadual parameternya dan bahagian sebagai satu item pustaka dengan variannya.
keywords: pek varian, varian, konfigurasi, keluarga bahagian, eksport kelompok, setiap saiz, step, ifc, dwg, pratonton, jadual, csv, json, pustaka, konfigurator, konfigurator produk, katalog, item json
from: 9a6db99f
---

## Apa yang akan anda lakukan

Serahkan **setiap saiz bahagian sekali gus**: satu fail STEP, IFC dan DWG serta gambar untuk setiap konfigurasi, jadual yang menyatakan apa itu setiap satu, dan item pustaka yang meletakkan kesemuanya pada satu halaman.

Anda memerlukan bahagian dengan **konfigurasi** dahulu (lihat [Konfigurasi dan jadual reka bentuk](topic:design-tables)). Konfigurasi yang mematikan ciri, seperti plat dengan dan tanpa lubang, menjadi varian tersendiri.

## Langkah

1. Buka bahagian. Pada tab {{ui:Parameter}}, cari **Konfigurasi**.
2. Klik {{ui:Pek varian…}}.
3. Tandakan konfigurasi untuk dibina (semuanya ditandakan) dan fail untuk ditulis: STEP, IFC, DWG, pratonton dan item pustaka.
4. Klik {{ui:Buat pek}}. Baris status mengira varian semasa ia dibina; bahagian anda tidak berubah.
5. Satu zip dimuat turun: `<part> variants.zip`.

## Apa yang ada dalam zip

| Fail | Apa itu |
|---|---|
| `<name>.step` | Konfigurasi sebagai pepejal STEP. |
| `<name>.ifc` | IFC4, satu elemen dengan badan yang dibina dan parameter bahagian sebagai sifat; nilainya ialah milik konfigurasi itu sendiri. |
| `<name>.dwg` | Pandangan depan, atas, kanan dan isometrik sebagai helaian lukisan pada saiz penuh. |
| `<name>.svg` | Gambar garis isometrik bagi konfigurasi itu. |
| `variants.csv`, `variants.json` | Jadual parameter: id, nama dan nilai setiap parameter bagi setiap varian, ciri yang dimatikannya, failnya, isi padu dan saiznya. |
| `<part>.item.json` | Bahagian sebagai satu item pustaka dengan variannya (lihat di bawah). |
| `README.txt` | Apa yang dibuat, nota di bawah, dan apa yang tidak dibina. |

Fail dinamakan mengikut konfigurasi. Konfigurasi yang gagal dibina (ciri yang tidak boleh dibuat dengan nilai tersebut) dikeluarkan daripada fail dan jadual, disenaraikan dalam README dan dalam mesej selepas zip disimpan; yang lain tetap ditulis.

## Perkara yang perlu diketahui

- **STEP** adalah tepat apabila kernel tepat dihidupkan dalam binaan anda. Tanpanya, STEP berfaset (segi tiga rata), dan README menyatakannya.
- **DWG** ialah helaian lukisan, bukan model 3D. Garisnya datang daripada jejaring, jadi tepi melengkung ialah banyak garis pendek.
- **Item pustaka** membawa satu badan dan satu jejak bagi setiap varian, dalam paksi pustaka sendiri: Z ke atas, bahagian depan ke arah −Y, dan titik sisipan di tengah bahagian belakang di bawah. Pelan ialah segi empat tepat sempadan bagi setiap varian. Satu item dihadkan kepada 8 MB, jadi varian yang sangat berat menjadi kotak bersaiz sama dan README menyatakan berapa banyak.
- Konfigurasi aktif bahagian ialah varian lalai item.
- Port (titik sambungan untuk paip dan saluran) tidak ditetapkan daripada PartCraft.

## Letakkan varian pada halaman pustaka

Muat naik `<part>.item.json` di **Pustaka › Muat naik** di laman. Pilih kategori, lesen dan baris kredit anda, dan ia menjadi item Pustaka dengan variannya. Dalam BimCraft, apabila diletakkan ia bertanya varian yang mana, dan **Tukar** menawarkan yang lain. Halaman tempat pelawat memilih pilihan, melihat 3D dan memuat turun varian ialah **pratonton kakitangan** buat masa ini: ia belum dibuka kepada orang awam.

## Dari baris arahan

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` menamakan konfigurasi, `--formats` ialah mana-mana daripada `step`, `ifc`, `dwg`, `preview`, `--no-item` membiarkan item pustaka keluar. Ia menulis folder, zip atau kedua-duanya dan keluar dengan 1 apabila varian tidak dapat dibina. Lihat [Skrip dan baris arahan](topic:scripts-and-cli).
