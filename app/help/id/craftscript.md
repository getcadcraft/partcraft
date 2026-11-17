---
title: Tulis dan jalankan skrip (ruang kerja Skrip)
summary: Ruang kerja Skrip langkah demi langkah: menulis skrip CraftScript atau Lua, menjalankannya dengan F5, membaca konsol, menyimpan hasil dalam variabel untuk skrip berikutnya, menampilkan mesh, field, dan plot, menghentikan eksekusi, serta menyimpan skrip bersama bagian.
keywords: skrip, penskripan, skrip saat memodelkan, lepaskan, layar kedua, monitor kedua, param, params, parameter dalam skrip, CraftScript, Lua, kode, program, editor, konsol, REPL, baris perintah, jalankan, F5, jalankan pilihan, hentikan, variabel, ruang kerja, plot, field, mesh, legenda, sub-tampilan, analisis, otomatisasi, matriks, numerik
from: d0003e89
---

**Pratinjau.** Penskripan baru hadir di PartCraft 0.3 dan berupa pratinjau: bahasa, pustaka, dan cara skrip disimpan dapat berubah, dan skrip yang ditulis sekarang mungkin perlu sedikit penyesuaian nanti. Beri tahu kami jika ada yang rusak.

Ruang kerja Skrip menjalankan perhitungan Anda sendiri di samping bagian: penjumlahan kecil, analisis lengkap, atau skrip dalam [pustaka analisis](topic:craftscript-library). Skrip ditulis dalam **CraftScript** (bahasa matriks yang sangat mirip MATLAB, lihat [Bahasa CraftScript](topic:craftscript-language)) atau dalam **Lua** (lihat [Skrip dengan Lua](topic:craftscript-lua)) atau **Python** (lihat [Skrip dengan Python](topic:craftscript-python)).

Pilih **Skrip** pada kotak **Ruang kerja** di sebelah kiri bilah alat. Bagian tidak berubah. Panel kanan berubah menjadi panel skrip (lebih lebar dari biasanya; seret tepinya untuk mengubah ukurannya, atau pindahkan ke layar kedua melalui menu {{ui:⋯}}, lihat [Mengatur panel](common:arrange-panels)).

## Skrip saat memodelkan

Anda tidak perlu meninggalkan ruang kerja Desain untuk menulis skrip. Di Desain, tab {{ui:Skrip}} pada panel kanan memuat editor, konsol, variabel, dan pustaka yang sama, dengan skrip yang sama. Pohon fitur dan tampilan tetap berfungsi: klik sebuah fitur untuk memilihnya, klik ganda sketsa untuk mengeditnya, putar tampilan, lalu kembali ke tab {{ui:Skrip}} dan tekan {{key:F5}}.

Apa yang **ditampilkan** skrip (mesh, field, plot, tabel) tidak digambar di atas model Anda di Desain: konsol menyatakannya, dan ruang kerja Skrip memuat semuanya saat Anda beralih ke sana.

{{ui:Lepaskan}}, di samping {{ui:Jalankan}}, memindahkan seluruh panel ke jendela tersendiri, misalnya di layar kedua, sehingga editor dan tampilan penuh berdampingan. {{ui:Kembalikan}} menambatkannya lagi. Lihat [Mengatur panel](common:arrange-panels).

## Jalankan skrip pertama Anda

1. Ketik di editor, misalnya:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Tekan {{key:F5}} (atau {{ui:Jalankan}}). Konsol di bawah editor menampilkan apa yang dicetak skrip, dan "Selesai dalam … s". Plot muncul di **sub-tampilan** di sepanjang bagian bawah tampilan 3D.
3. Baris tanpa titik koma mencetak nilainya, seperti di MATLAB: `a = 3` mencetak `a = 3`; `a = 3;` tidak mencetak apa pun.
4. Untuk menjalankan sebagian skrip, pilih barisnya dan tekan {{key:Mod+Enter}} ({{ui:Pilihan}}). Jika tidak ada yang dipilih, baris tempat kursor berada yang dijalankan.
5. Baris di bagian bawah konsol (setelah `>>`) menjalankan satu pernyataan saat Anda menekan {{key:Enter}}. {{key:Up}} dan {{key:Down}} memunculkan kembali baris sebelumnya.

## Cari, lipat, dan lengkapi

- **Cari dan ganti.** Tekan {{key:Mod+F}} (atau {{key:Mod+H}} untuk mengganti juga). Sebuah bilah terbuka di atas kode: ketik yang dicari; hasil yang cocok menyala dan hitungan menunjukkan posisi Anda. Tombol di samping kotak mencocokkan huruf besar-kecil (**Aa**), mencari kata utuh saja (**W**), dan memakai ekspresi reguler (**.\***; pada penggantian, `$1` memasukkan kembali apa yang cocok dengan grup pertama). {{ui:Ganti}} mengganti kecocokan saat ini, dan {{ui:Semua}} mengganti setiap kecocokan sebagai satu langkah {{key:Mod+Z}}.
- **Melipat.** Klik ▾ di samping nomor baris, atau tekan {{key:Mod+Shift+[}} dengan kursor pada baris `function`, `if`, `for`, `while`, `switch`, atau `try` (Lua: `function`, `do`, `if`, `repeat`), untuk melipat baris di dalamnya; baris tersebut menyatakan berapa banyak barisnya. ▸ atau {{key:Mod+Shift+]}} membukanya kembali. Pelipatan hanya menyembunyikan baris: Jalankan, Simpan, penyalinan, dan nomor baris tetap menghitung setiap baris, dan mengetik pada baris yang terlipat akan membukanya terlebih dahulu.
- **Pelengkapan.** Ketik dua huruf dari sebuah nama, atau tekan {{key:Mod+Space}}: daftar menampilkan variabel yang Anda miliki, fungsi bahasa (beserta argumennya), kata kunci, dan nama yang sudah ada di dalam skrip. Pilih dengan tombol panah dan tekan {{key:Enter}} atau {{key:Tab}}.

## Saat ada masalah

- Galat menyebut masalah dan barisnya: baris diberi tanda merah di editor, dan **Baris n** di konsol membawa Anda ke sana.
- Loop yang tidak pernah berhenti: tekan {{ui:Hentikan}} (bilah alat atau panel). Skrip langsung berhenti; variabel mempertahankan nilai yang dimilikinya sebelum eksekusi itu.
- Setiap eksekusi juga memiliki anggaran langkah (2 miliar langkah secara default; ubah di bawah **Opsi Jalankan** pada panel). Eksekusi yang melampauinya berhenti dengan pesan.

## Variabel berpindah dari skrip ke skrip

Setiap variabel tingkat atas yang dibuat skrip masuk ke tab **Variabel** (nama, tipe, ukuran, nilai terkecil dan terbesar) dan tetap di sana untuk skrip berikutnya, dalam bahasa apa pun. Begitulah satu skrip membuat mesh, skrip berikutnya menyelesaikan, dan skrip ketiga memplot.

- Klik variabel untuk menampilkannya: mesh, field, dan model di tampilan 3D, array sebagai tabel (ditambah plot garis untuk vektor atau peta warna untuk matriks) di sub-tampilan.
- {{ui:Simpan sebagai JSON}}, {{ui:Simpan sebagai CSV}} (tabel angka), dan {{ui:Simpan sebagai HDF5}} mengunduhnya; {{ui:Hapus}} menghapusnya; {{ui:Kosongkan semua}} mengosongkan ruang kerja.
- Centang **Simpan variabel bersama bagian** untuk menyimpannya dalam berkas bagian (hingga 32 MB; yang lebih besar hanya bertahan untuk kunjungan ini). Saat Anda membuka bagian seperti itu, panel menawarkan untuk memuatnya.

## Mesh, field, dan plot

- `show(m)` menggambar mesh; `show(f)` mewarnai field pada mesh-nya dengan legenda. Daftar **Ditampilkan** di kiri atas tampilan menyembunyikan ({{ui:mata}}) atau menghapus setiap item, serta menyembunyikan atau menampilkan bagian itu sendiri. Di bawah legenda, ketik rentang (**Dari**, **sampai**) atau tekan {{ui:Otomatis}}; field vektor atau tegangan juga menawarkan komponen mana yang ditampilkan.
- `show(f, 'deform', u, 'scale', 50)` menggambar mesh yang bergeser oleh field perpindahan `u`, diperbesar 50 kali (tanpa `scale`, sekitar 8 % dari ukuran model).
- Klik mesh yang ditampilkan: node terdekat, elemen, dan nilai field di sana muncul di sub-tampilan (**Dipilih**).
- `plot`, `imagesc`, dan `table` menempatkan plot garis, peta warna dari array 2-D, atau tabel di sub-tampilan. Plot dengan `'id'` (atau judul) yang sama dengan plot sebelumnya menggantikannya, sehingga loop dapat memperbarui satu plot konvergensi; `'append', true` menambahkan kurva ke dalamnya. {{ui:Kosongkan}} mengosongkan sub-tampilan; panah melipatnya.
- Dengan dua plot atau lebih, {{ui:Berdampingan}} menampilkan semuanya sekaligus (enam yang terbaru); mengklik tab tabel atau gambar raster menampilkan hanya yang itu lagi.
- Setiap plot memiliki {{ui:PNG}}, {{ui:SVG}}, dan {{ui:CSV}} di bawahnya. PNG dan SVG mencetaknya di atas putih dengan warna kertas, apa pun temanya (PNG 1600 × 1000 piksel; SVG diskalakan tanpa kabur); CSV memuat angkanya dengan setiap digit: satu kolom x dan satu kolom per kurva jika kurva berbagi x, jika tidak maka satu baris per titik dengan nama kurvanya.
- {{key:F}} atau {{ui:Paskan}} memaskan tampilan ke apa yang ditampilkan.

## Berkas

- {{ui:Buka}} pada grup Skrip (atau seret berkas ke tampilan atau panel): berkas `.craft`, `.lua`, dan `.py` terbuka sebagai skrip baru (tidak dijalankan); berkas data (STL, OBJ, CSV, JSON, NPY, HDF5) dimuat ke dalam variabel dengan nama berkasnya.
- {{ui:Simpan}} pada grup Skrip mengunduh skrip saat ini sebagai berkas.
- {{ui:Baru}} pada grup Skrip (atau {{ui:+}} di samping tab) memulai skrip lain. Klik ganda tab untuk mengganti namanya; {{ui:×}}-nya menghapusnya (Anda dapat membatalkannya).

## Membaca parameter bagian

Skrip membaca parameter bagian (lihat [Mengendalikan bagian dengan parameter](topic:parameters)) berdasarkan nama:

```
w = param('width');     % nilai satu parameter, dalam mm (atau derajat, atau angka biasa)
p = params();           % semuanya, sebagai struct: p.width, p.height
```

Dalam Lua dan Python, fungsinya adalah `cs.param('width')` dan `cs.params()`. Skrip hanya membaca parameter: ubahlah pada tab {{ui:Parameter}}. Di bawah tab skrip, sebuah baris mencantumkan parameter yang dibacanya dengan `param('…')`, dan menandai parameter yang tidak dimiliki bagian; tab {{ui:Parameter}} mencantumkan skrip di bawah setiap parameter. Nama yang dibentuk saat skrip berjalan, seperti `param(name)`, tidak dicantumkan.

## Skrip disimpan di dalam bagian

Setiap skrip di tab disimpan di dalam bagian, sehingga {{ui:Simpan}} pada grup Berkas menyimpannya bersama bagian itu dan perubahan padanya dapat dibatalkan. Membuka bagian **tidak pernah menjalankan skripnya**: konsol menyatakan berapa banyak skrip yang dibawanya, dan skrip hanya berjalan saat Anda menekan Jalankan. Bagian dari orang lain dapat berisi skrip apa pun: bacalah sebelum Anda menjalankannya. Skrip berjalan di latar belakang pada komputer ini tanpa akses jaringan dan tidak dapat menyentuh halaman.

## Terkait

- [Bahasa CraftScript](topic:craftscript-language)
- [Skrip dengan Lua](topic:craftscript-lua)
- [Skrip dengan Python](topic:craftscript-python)
- [Pustaka analisis](topic:craftscript-library)
- [Menulis analisis Anda sendiri](topic:craftscript-own-analysis)
