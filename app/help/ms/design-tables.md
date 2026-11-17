---
title: Konfigurasi dan jadual reka bentuk
summary: Simpan beberapa saiz dan versi satu bahagian sebagai konfigurasi bernama yang disimpan dalam fail bahagian, dengan ciri dihidupkan atau dimatikan dalam setiap satu, tukar antaranya dengan satu klik, bawa masuk atau keluar sebagai jadual reka bentuk CSV, atau bina semuanya dari baris arahan.
keywords: jadual reka bentuk, konfigurasi, saiz, keluarga bahagian, csv, hamparan, varian, dipacu jadual, keluarga bahagian, gantung, digantung, matikan ciri, pilihan, dengan atau tanpa, konfigurator
from: 17249afb
---

Satu **konfigurasi** ialah satu saiz bahagian: satu set nilai bernama untuk parameternya. Bahagian menyimpan konfigurasinya dalam failnya sendiri, jadi ia bergerak bersamanya. **Jadual reka bentuk** ialah perkara yang sama sebagai fail CSV, satu baris bagi setiap konfigurasi.

Konfigurasi menetapkan **parameter**, jadi tambahkan parameter itu dahulu (lihat [Kawal bahagian dengan parameter](topic:parameters)). Konfigurasi menyimpan parameter yang merupakan nombor biasa; parameter yang dikira daripada yang lain (seperti `area = w * d`) akan mengikut sendiri.

## Simpan konfigurasi

1. Pada tab {{ui:Parameter}}, tetapkan parameter untuk satu saiz bahagian.
2. Di bawah **Konfigurasi**, taip nama (contohnya `Large`) dan tekan {{ui:Simpan nilai semasa}} atau {{key:Enter}}.

Konfigurasi baharu ditandakan **aktif**. Jika anda mengubah parameter selepas itu, ia akan berkata **aktif, diubah sejak**, supaya anda tahu bahagian itu tidak lagi sepadan dengannya.

## Tukar, kemas kini, namakan semula, padam

- {{ui:Guna}} menetapkan parameter kepada nilai konfigurasi itu dan membina semula bahagian.
- {{ui:Kemas kini}} menyimpan nilai semasa ke dalam konfigurasi itu.
- Untuk menamakan semula satu konfigurasi, taip nama baharu dalam kotaknya dan tekan {{key:Enter}}.
- {{ui:Padam}} membuang konfigurasi. Parameter mengekalkan nilainya.

Setiap satu daripada ini ialah satu langkah: {{key:Mod+Z}} akan kembali. Jika anda menamakan semula parameter, setiap konfigurasi mengikut nama baharu; jika anda memadamkan satu konfigurasi, ia tersingkir daripada senarai konfigurasi yang menggunakannya.

## Hidup dan matikan ciri dalam konfigurasi

Konfigurasi juga menyimpan ciri mana yang dimatikan, supaya satu bahagian boleh mempunyai versi **dengan** dan **tanpa** sesuatu: lubang pemasangan, cabutan tepi, bonjol.

1. Matikan ciri: klik ia dalam sejarah, kemudian {{ui:Gantung}} dalam {{ui:Sifat}}.
2. Simpan konfigurasi seperti biasa, contohnya `No holes`. Barisnya menyenaraikan apa yang dimatikannya.
3. Hidupkan semula ciri itu ({{ui:Nyahgantung}}) dan simpan konfigurasi lain, contohnya `With holes`.

Apabila mana-mana konfigurasi mematikan ciri, menggunakan konfigurasi akan mematikan ciri-cirinya dan **menghidupkan setiap ciri lain**, bersama nilai parameternya, dalam satu langkah. Konfigurasi yang disimpan sebelum mana-mana ciri dimatikan dikira sebagai "semuanya hidup". {{ui:Kemas kini}} menyimpan ciri seperti keadaannya sekarang, dengan nilai.

Bahagian yang konfigurasinya mematikan ciri disimpan sebagai versi fail yang lebih baharu: PartCraft yang lebih lama akan memberitahu bahawa fail itu daripada versi yang lebih baharu dan bukannya membukanya tanpa ciri-ciri itu.

:::note
Jadual reka bentuk CSV hanya membawa nilai parameter. Mengimport jadual ke atas konfigurasi menukar nilainya dan mengekalkan ciri yang dimatikannya; pilihan `--table` baris arahan hanya membina nilai.
:::

Bahagian disimpan bersama konfigurasinya dan bersama konfigurasi yang aktif. Bahagian dibuka dengan nilai yang disimpan bersamanya.

## Bawa jadual reka bentuk masuk atau keluar

Jadual reka bentuk ialah fail CSV dengan lajur bagi setiap parameter dan baris bagi setiap konfigurasi:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Lajur pertama boleh dinamakan `name`, `config` atau `configuration`; setiap lajur lain mesti nama parameter bahagian itu. Sel ialah nombor, dengan unit jika anda mahu (`8in`). Sel kosong meninggalkan parameter itu daripada baris.

- {{ui:Import CSV}} menambah setiap baris sebagai konfigurasi. Baris dengan nama konfigurasi sedia ada menggantikannya. Mengimport ialah satu langkah.
- {{ui:Export CSV}} menulis konfigurasi keluar. Jika belum ada konfigurasi, ia menulis satu baris nilai semasa, sebagai titik permulaan untuk hamparan.

Nama konfigurasi yang akan dibaca oleh hamparan sebagai formula (bermula dengan `=`, `+`, `-` atau `@`) ditulis dengan `'` di hadapan.

## Setiap saiz sekaligus

{{ui:Pek varian…}} di bawah **Konfigurasi** membina setiap konfigurasi, atau beberapa pilihan, sebagai STEP, IFC, DWG dan pratonton dalam satu zip, dengan jadual parameternya: lihat [Buat pek varian daripada konfigurasi anda](topic:variant-pack).

Alat baris arahan membina satu fail bagi setiap baris jadual reka bentuk CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Eksport konfigurasi sebagai CSV dahulu, kemudian hantar fail itu dengan `--table`. Lihat [Skrip dan baris arahan](topic:scripts-and-cli). Bahagian yang disimpan sebagai skrip menyimpan konfigurasinya dalam baris `configs json …`.
