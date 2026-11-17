---
title: Menulis analisis Anda sendiri
summary: Membangun analisis sebagai skrip di ruang kerja Skrip: membuat mesh pada bagian, merakit dan menyelesaikan, menampilkan field dan plot konvergensi, memeriksa hasil terhadap perhitungan manual, serta menyimpan langkah-langkah sebagai skrip terpisah yang berbagi variabel.
keywords: analisis sendiri, analisis kustom, skrip FEA, elemen hingga, rakit, kekakuan, kondisi batas, selesaikan, pcg, jarang, field, pascaproses, konvergensi, verifikasi, perhitungan manual, pemeriksaan, alur kerja
from: 0f471a8e
---

Analisis di ruang kerja Skrip adalah beberapa skrip pendek yang saling meneruskan variabel. Mulailah dari fungsi [pustaka](topic:craftscript-library) yang mendekati kebutuhan Anda, buat salinan, dan ubah; atau bangun dari awal seperti di bawah.

## 1. Mesh

```
model = part();                  % bagian yang Anda modelkan, sebagai model
m = tetmesh(model, 4);           % tetrahedra sekitar 4 mm lebarnya
show(m)
```

Periksa mesh di tampilan sebelum melanjutkan: {{key:F}} memaskan tampilan padanya, dan {{ui:mata}} pada **Ditampilkan** menyembunyikan bagian.

## 2. Rakit dan selesaikan

Tulis loop elemen di dalam skrip (ia terbaca seperti di buku teks), dan serahkan bagian yang berat kepada fungsi bawaan: matriks elemen, perakitan jarang dari triplet, dan solver gradien konjugasi dengan prakondisi. Fungsi pustaka seperti `static_tet` (setelah pustaka memilikinya) adalah contoh lengkap untuk disalin.

## 3. Tampilkan hasil

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % satu nilai per node
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Rentang legenda dapat diketik atau dikembalikan ke {{ui:Otomatis}}.
- Klik mesh untuk membaca nilai pada sebuah node.
- Plot yang mempertahankan `'id'` yang sama diperbarui di tempatnya, sehingga cetak dan plot di dalam loop Anda untuk memantau konvergensi.

## 4. Periksa

Bandingkan dengan sesuatu yang Anda ketahui: defleksi ujung cantilever terhadap PL³/3EI, pelat berlubang terhadap faktor konsentrasi tegangannya, reaksi terhadap beban. Tulis pemeriksaan sebagai skrip tersendiri agar dijalankan lagi setelah setiap perubahan:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Simpan

- Setiap langkah dapat berupa tab skrip tersendiri: mereka berbagi variabel, jadi jalankan satu per satu secara berurutan.
- Skrip disimpan di dalam bagian. Centang **Simpan variabel bersama bagian** pada tab Variabel agar hasilnya ikut disimpan (hingga 32 MB).
- {{ui:Simpan}} pada grup Skrip mengunduh skrip untuk dibagikan; {{ui:Buka}} memasukkannya.
