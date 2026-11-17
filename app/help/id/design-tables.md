---
title: Konfigurasi dan tabel desain
summary: Simpan beberapa ukuran dan versi dari satu bagian sebagai konfigurasi bernama yang disimpan dalam berkas bagian, dengan fitur yang dinyalakan atau dimatikan di tiap konfigurasi; beralih di antaranya dengan satu klik, memasukkan atau mengeluarkannya sebagai tabel desain CSV, atau membangunnya semua dari baris perintah.
keywords: tabel desain, konfigurasi, ukuran, keluarga bagian, csv, spreadsheet, varian, digerakkan tabel, keluarga part, nonaktifkan, matikan fitur, opsi, dengan atau tanpa, konfigurator
from: 17249afb
---

**Konfigurasi** adalah satu ukuran dari bagian: sekumpulan nilai bernama untuk parameternya. Bagian menyimpan konfigurasinya dalam berkasnya sendiri, sehingga ikut berpindah bersamanya. **Tabel desain** adalah hal yang sama dalam bentuk berkas CSV, satu baris per konfigurasi.

Konfigurasi mengatur **parameter**, jadi tambahkan parameter terlebih dahulu (lihat [Mengendalikan bagian dengan parameter](topic:parameters)). Konfigurasi menyimpan parameter yang berupa angka biasa; parameter yang dihitung dari parameter lain (seperti `area = w * d`) mengikuti dengan sendirinya.

## Simpan konfigurasi

1. Pada tab {{ui:Parameter}}, atur parameter untuk satu ukuran bagian.
2. Di bawah **Konfigurasi**, ketik nama (misalnya `Large`) dan tekan {{ui:Simpan nilai saat ini}} atau {{key:Enter}}.

Konfigurasi baru ditandai **aktif**. Ubah parameter setelahnya dan ia akan menampilkan **aktif, berubah sejak**, sehingga Anda tahu bagian tidak lagi sesuai dengannya.

## Beralih, perbarui, ganti nama, hapus

- {{ui:Terapkan}} mengatur parameter ke nilai konfigurasi itu dan membangun ulang bagian.
- {{ui:Perbarui}} menyimpan nilai saat ini ke dalam konfigurasi itu.
- Untuk mengganti nama, ketik nama baru di kotaknya dan tekan {{key:Enter}}.
- {{ui:Hapus}} menghapus konfigurasi. Parameter tetap menyimpan nilainya.

Masing-masing adalah satu langkah: {{key:Mod+Z}} mengembalikannya. Jika Anda mengganti nama parameter, setiap konfigurasi mengikuti nama baru; jika Anda menghapus parameter, parameter itu hilang dari semua konfigurasi.

## Nyalakan dan matikan fitur dalam konfigurasi

Konfigurasi juga menyimpan fitur mana yang dimatikan, sehingga satu bagian dapat memiliki versi **dengan** dan **tanpa** sesuatu: lubang pemasangan, chamfer, atau boss.

1. Matikan fitur: klik fitur di riwayat, lalu {{ui:Nonaktifkan}} di {{ui:Properti}}.
2. Simpan konfigurasi seperti biasa, misalnya `No holes`. Barisnya mencantumkan apa yang dimatikannya.
3. Nyalakan kembali fitur ({{ui:Aktifkan}}) dan simpan konfigurasi lain, misalnya `With holes`.

Setelah konfigurasi mana pun mematikan sebuah fitur, menerapkan sebuah konfigurasi akan mematikan fitur-fiturnya dan **menyalakan semua fitur lainnya**, bersama dengan nilai parameternya, dalam satu langkah. Konfigurasi yang disimpan sebelum fitur dimatikan di salah satu konfigurasi dianggap "semuanya menyala". {{ui:Perbarui}} menyimpan fitur seperti keadaannya sekarang, beserta nilainya.

Bagian yang konfigurasinya mematikan fitur disimpan sebagai versi berkas yang lebih baru: PartCraft yang lebih lama menyatakan bahwa berkas berasal dari versi yang lebih baru, alih-alih membukanya tanpa fitur-fitur tersebut.

:::note
Tabel desain CSV hanya memuat nilai parameter. Mengimpor tabel di atas sebuah konfigurasi mengubah nilainya dan mempertahankan fitur yang dimatikannya; `--table` pada baris perintah hanya membangun nilainya.
:::

Berkas bagian disimpan bersama konfigurasi dan konfigurasi mana pun yang sedang aktif. Bagian dibuka dengan nilai yang disimpan bersamanya.

## Memasukkan atau mengeluarkan tabel desain

Tabel desain adalah berkas CSV dengan satu kolom untuk setiap parameter dan satu baris untuk setiap konfigurasi:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Kolom pertama boleh bernama `name`, `config`, atau `configuration`; setiap kolom lain harus berupa nama parameter bagian. Sel berisi angka, dengan satuan jika Anda mau (`8in`). Sel kosong membiarkan parameter itu tidak ada dalam baris.

- {{ui:Impor CSV}} menambahkan setiap baris sebagai konfigurasi. Baris dengan nama konfigurasi yang sudah ada akan menggantikannya. Impor adalah satu langkah.
- {{ui:Ekspor CSV}} menuliskan konfigurasi. Jika belum ada, ia menulis satu baris nilai saat ini, sebagai titik awal untuk spreadsheet.

Nama konfigurasi yang akan dibaca spreadsheet sebagai rumus (diawali `=`, `+`, `-`, atau `@`) ditulis dengan `'` di depannya.

## Semua ukuran sekaligus

{{ui:Paket varian…}} di bawah **Konfigurasi** membangun setiap konfigurasi, atau beberapa yang dipilih, sebagai STEP, IFC, DWG, dan pratinjau dalam satu zip, dengan tabel parameternya: lihat [Membuat paket varian dari konfigurasi Anda](topic:variant-pack).

Alat baris perintah membangun satu berkas per baris tabel desain CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Ekspor konfigurasi sebagai CSV terlebih dahulu, lalu berikan berkas itu dengan `--table`. Lihat [Skrip dan baris perintah](topic:scripts-and-cli). Bagian yang disimpan sebagai skrip menyimpan konfigurasinya dalam baris `configs json …`.
