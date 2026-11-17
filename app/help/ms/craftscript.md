---
title: Tulis dan jalankan skrip (ruang kerja Skrip)
summary: Ruang kerja Skrip langkah demi langkah: tulis skrip CraftScript atau Lua, jalankannya dengan F5, baca konsol, simpan keputusan dalam pembolehubah untuk skrip seterusnya, paparkan jejaring, medan dan plot, hentikan larian, dan simpan skrip bersama bahagian.
keywords: skrip, penskripan, skrip semasa pemodelan, keluarkan, monitor kedua, param, params, parameter dalam skrip, CraftScript, Lua, kod, program, penyunting, konsol, REPL, baris arahan, jalankan, F5, jalankan pilihan, henti, pembolehubah, ruang kerja, plot, medan, jejaring, legenda, sub-paparan, analisis, automasi, matriks, berangka
from: d0003e89
---

**Pratonton.** Penskripan baharu dalam PartCraft 0.3 dan merupakan pratonton: bahasa, pustaka dan cara skrip disimpan mungkin berubah, dan skrip yang ditulis sekarang mungkin memerlukan sedikit suntingan kemudian. Beritahu kami apa yang rosak.

Ruang kerja Skrip menjalankan pengiraan anda sendiri di sebelah bahagian: jumlah kecil, analisis penuh, atau skrip dalam [pustaka analisis](topic:craftscript-library). Skrip ditulis dalam **CraftScript** (bahasa matriks yang sangat serupa dengan MATLAB, lihat [Bahasa CraftScript](topic:craftscript-language)) atau dalam **Lua** (lihat [Skrip dalam Lua](topic:craftscript-lua)) atau **Python** (lihat [Skrip dalam Python](topic:craftscript-python)).

Pilih **Skrip** dalam kotak **Ruang kerja** di sebelah kiri bar alat. Bahagian tidak diubah. Panel kanan menjadi panel skrip (lebih lebar daripada biasa; seret tepinya untuk menukar saiz, atau alihkannya ke skrin kedua dengan menu {{ui:⋯}} di atasnya, lihat [Susun panel](common:arrange-panels)).

## Skrip semasa anda memodel

Anda tidak perlu meninggalkan ruang kerja Reka bentuk untuk menulis skrip. Dalam Reka bentuk, tab {{ui:Skrip}} pada panel kanan mengandungi penyunting, konsol, pembolehubah dan pustaka yang sama, dengan skrip yang sama. Pokok ciri dan paparan terus berfungsi: klik ciri untuk memilihnya, klik dua kali lakaran untuk menyuntingnya, putar paparan, kemudian kembali ke tab {{ui:Skrip}} dan tekan {{key:F5}}.

Apa yang **dipaparkan** oleh skrip (jejaring, medan, plot, jadual) tidak dilukis di atas model anda dalam Reka bentuk: konsol memberitahu anda, dan ruang kerja Skrip memiliki semuanya apabila anda beralih ke sana.

{{ui:Keluarkan}}, di sebelah {{ui:Jalankan}}, mengalihkan keseluruhan panel ke tetingkap sendiri, contohnya pada skrin kedua, supaya penyunting dan paparan penuh berada bersebelahan. {{ui:Kembalikan}} melabuhkannya semula. Lihat [Susun panel](common:arrange-panels).

## Jalankan skrip pertama anda

1. Taip dalam penyunting, contohnya:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Tekan {{key:F5}} (atau {{ui:Jalankan}}). Konsol di bawah penyunting menunjukkan apa yang dicetak oleh skrip, dan "Done in … s". Plot muncul dalam **sub-paparan** di sepanjang bahagian bawah paparan 3D.
3. Baris tanpa titik koma mencetak nilainya, seperti dalam MATLAB: `a = 3` mencetak `a = 3`; `a = 3;` tidak mencetak apa-apa.
4. Untuk menjalankan sebahagian skrip sahaja, pilih baris dan tekan {{key:Mod+Enter}} ({{ui:Pilihan}}). Tanpa apa-apa yang dipilih, ia menjalankan baris tempat kursor berada.
5. Baris di bahagian bawah konsol (selepas `>>`) menjalankan satu penyataan apabila anda menekan {{key:Enter}}. {{key:Up}} dan {{key:Down}} memanggil semula baris yang lebih awal.

## Cari, lipat dan lengkapkan

- **Cari dan ganti.** Tekan {{key:Mod+F}} (atau {{key:Mod+H}} untuk menggantikan juga). Bar dibuka di atas kod: taip apa yang hendak dicari; padanan menyala dan kiraan menunjukkan kedudukan anda. Butang di sebelah kotak itu memadankan huruf besar-kecil (**Aa**), mencari perkataan penuh sahaja (**W**) dan menggunakan ungkapan biasa (**.\***; dalam penggantian, `$1` memasukkan semula apa yang dipadankan oleh kumpulan pertama). {{ui:Ganti}} menggantikan padanan semasa, dan {{ui:Semua}} menggantikan setiap padanan sebagai satu langkah {{key:Mod+Z}}.
- **Lipatan.** Klik ▾ di sebelah nombor baris, atau tekan {{key:Mod+Shift+[}} dengan kursor pada baris `function`, `if`, `for`, `while`, `switch` atau `try` (Lua: `function`, `do`, `if`, `repeat`), untuk menyorokkan baris dalamnya; baris itu menyatakan berapa banyak. ▸ atau {{key:Mod+Shift+]}} membukanya semula. Lipatan hanya menyembunyikan baris: Jalankan, Simpan, salinan dan nombor baris semuanya masih mengira setiap baris, dan menaip pada baris terlipat akan membukanya dahulu.
- **Pelengkapan.** Taip dua huruf nama, atau tekan {{key:Mod+Space}}: senarai menunjukkan pembolehubah yang anda ada, fungsi bahasa (dengan argumennya), kata kunci dan nama yang sudah ada dalam skrip. Pilih dengan anak panah dan tekan {{key:Enter}} atau {{key:Tab}}.

## Apabila ada yang tidak kena

- Ralat menamakan masalah dan barisnya: baris ditandakan merah dalam penyunting, dan **Baris n** dalam konsol membawa anda ke sana.
- Gelung yang tidak berhenti: tekan {{ui:Henti}} (bar alat atau panel). Skrip berhenti serta-merta; pembolehubah mengekalkan nilai yang ada sebelum larian itu.
- Setiap larian juga mempunyai bajet langkah (2 bilion langkah secara lalai; tukarnya di bawah **Pilihan larian** dalam panel). Larian yang melepasinya akan berhenti dengan mesej.

## Pembolehubah dibawa dari skrip ke skrip

Setiap pembolehubah peringkat atas yang dibuat oleh skrip masuk ke tab **Pembolehubah** (nama, jenis, saiz, nilai terkecil dan terbesar) dan kekal di sana untuk skrip seterusnya, dalam mana-mana bahasa. Begitulah satu skrip membuat jejaring, skrip seterusnya menyelesaikannya, dan yang ketiga memplot.

- Klik pembolehubah untuk memaparkannya: jejaring, medan dan model dalam paparan 3D, tatasusunan sebagai jadual (ditambah plot garisan untuk vektor atau peta warna untuk matriks) dalam sub-paparan.
- {{ui:Simpan sebagai JSON}}, {{ui:Simpan sebagai CSV}} (jadual nombor) dan {{ui:Simpan sebagai HDF5}} memuat turun; {{ui:Padam}} membuangnya; {{ui:Kosongkan semua}} mengosongkan ruang kerja.
- Tandakan **Simpan pembolehubah dengan bahagian** untuk menyimpannya dalam fail bahagian (sehingga 32 MB; yang lebih besar kekal untuk lawatan ini sahaja). Apabila anda membuka bahagian sebegitu, panel menawarkan untuk memuatkannya.

## Jejaring, medan dan plot

- `show(m)` melukis jejaring; `show(f)` mewarnakan medan pada jejaringnya dengan legenda. Senarai **Dipaparkan** di sudut kiri atas paparan menyembunyikan ({{ui:mata}}) atau mengeluarkan setiap item, dan menyembunyikan atau memaparkan bahagian itu sendiri. Di bawah legenda, taip julat (**Dari**, **ke**) atau tekan {{ui:Auto}}; medan vektor atau tegasan juga menawarkan komponen mana yang hendak ditunjukkan.
- `show(f, 'deform', u, 'scale', 50)` melukis jejaring yang dialihkan oleh medan sesaran `u`, dibesarkan 50 kali (tanpa `scale`, kira-kira 8 % saiz model).
- Klik jejaring yang dipaparkan: nod terdekat, unsur dan nilai medan di situ muncul dalam sub-paparan (**Dipilih**).
- `plot`, `imagesc` dan `table` meletakkan plot garisan, peta warna bagi tatasusunan 2-D, atau jadual dalam sub-paparan. Plot dengan `'id'` (atau tajuk) yang sama seperti yang sebelumnya menggantikannya, jadi gelung boleh mengemas kini satu plot penumpuan; `'append', true` menambah lengkung kepadanya. {{ui:Kosongkan}} mengosongkan sub-paparan; anak panah melipatnya.
- Dengan dua plot atau lebih, {{ui:Sebelah menyebelah}} menunjukkan semuanya serentak (enam yang terbaru); klik tab jadual atau gambar untuk menunjukkan satu itu sahaja semula.
- Setiap plot mempunyai {{ui:PNG}}, {{ui:SVG}} dan {{ui:CSV}} di bawahnya. PNG dan SVG mencetaknya pada latar putih dalam warna kertas, tanpa mengira tema (PNG 1600 × 1000 piksel; SVG berskala tanpa menjadi kabur); CSV menyimpan nombornya dengan setiap digit: satu lajur x dan satu lajur bagi setiap lengkung apabila lengkung berkongsi x, jika tidak satu baris bagi setiap titik dengan nama lengkung.
- {{key:F}} atau {{ui:Muat}} memuatkan paparan kepada apa yang ditunjukkan.

## Fail

- {{ui:Buka}} dalam kumpulan Skrip (atau lepaskan fail pada paparan atau panel): fail `.craft`, `.lua` dan `.py` dibuka sebagai skrip baharu (ia tidak dijalankan); fail data (STL, OBJ, CSV, JSON, NPY, HDF5) dimuatkan ke dalam pembolehubah di bawah nama fail.
- {{ui:Simpan}} dalam kumpulan Skrip memuat turun skrip semasa sebagai fail.
- {{ui:Baharu}} dalam kumpulan Skrip (atau {{ui:+}} di sebelah tab) memulakan skrip lain. Klik dua kali tab untuk menamakannya semula; butang {{ui:×}} membuangnya (anda boleh buat asal itu).

## Baca parameter bahagian

Skrip membaca parameter bahagian (lihat [Kawal bahagian dengan parameter](topic:parameters)) mengikut nama:

```
w = param('width');     % nilai satu parameter, dalam mm (atau darjah, atau nombor biasa)
p = params();           % semuanya, sebagai struktur: p.width, p.height
```

Dalam Lua dan Python ia ialah `cs.param('width')` dan `cs.params()`. Skrip hanya membaca parameter: ubahnya pada tab {{ui:Parameter}}. Di bawah tab skrip, satu baris menyenaraikan parameter yang dibacanya dengan `param('…')`, dan menandakan mana-mana yang tidak dimiliki bahagian; tab {{ui:Parameter}} menyenaraikan skrip di bawah setiap satu. Nama yang dibina semasa skrip berjalan, seperti `param(name)`, tidak disenaraikan.

## Skrip disimpan dalam bahagian

Setiap skrip dalam tab disimpan dalam bahagian, jadi {{ui:Simpan}} dalam kumpulan Fail menyimpannya bersamanya, dan perubahan padanya boleh dibuat asal. Membuka bahagian **tidak pernah menjalankan skripnya**: konsol memberitahu berapa banyak yang dibawanya, dan ia hanya berjalan apabila anda menekan {{ui:Jalankan}}. Bahagian daripada orang lain boleh mengandungi sebarang skrip: baca sebelum anda menjalankannya. Skrip berjalan di latar belakang pada komputer ini tanpa akses rangkaian dan tidak boleh menyentuh halaman.

## Berkaitan

- [Bahasa CraftScript](topic:craftscript-language)
- [Skrip dalam Lua](topic:craftscript-lua)
- [Skrip dalam Python](topic:craftscript-python)
- [Pustaka analisis](topic:craftscript-library)
- [Tulis analisis anda sendiri](topic:craftscript-own-analysis)
