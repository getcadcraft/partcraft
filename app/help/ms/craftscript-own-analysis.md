---
title: Tulis analisis anda sendiri
summary: Bina analisis sebagai skrip dalam ruang kerja Skrip: jejaringkan bahagian, pasang dan selesaikan, paparkan medan dan plot penumpuan, semak keputusan dengan pengiraan tangan, dan simpan langkah sebagai skrip berasingan yang berkongsi pembolehubah.
keywords: analisis sendiri, analisis tersuai, skrip FEA, unsur terhingga, pasang, kekukuhan, syarat sempadan, selesai, pcg, jarang, medan, pasca-proses, penumpuan, pengesahan, pengiraan tangan, semakan, aliran kerja
from: 0f471a8e
---

Analisis dalam ruang kerja Skrip ialah beberapa skrip pendek yang menyerahkan pembolehubah antara satu sama lain. Mulakan dari fungsi [pustaka](topic:craftscript-library) yang hampir dengan apa yang anda perlukan, buat salinan, dan ubahnya; atau bina satu dari langkah di bawah.

## 1. Jejaring

```
model = part();                  % bahagian yang anda modelkan, sebagai model
m = tetmesh(model, 4);           % tetrahedra kira-kira 4 mm merentasi
show(m)
```

Semak jejaring dalam paparan sebelum meneruskan: {{key:F}} memuatkannya, dan {{ui:mata}} dalam **Dipaparkan** menyembunyikan bahagian.

## 2. Pasang dan selesaikan

Tulis gelung unsur dalam skrip (ia dibaca seperti buku teks), dan biarkan bahagian yang berat kepada fungsi terbina dalam: matriks unsur, pemasangan jarang daripada tripel, dan penyelesai kecerunan konjugat dengan pra-syarat. Fungsi pustaka seperti `static_tet` (apabila pustaka telah memilikinya) ialah contoh lengkap untuk disalin.

## 3. Tunjukkan keputusan

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % satu nilai bagi setiap nod
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Julat legenda boleh ditaip atau ditetapkan semula kepada {{ui:Auto}}.
- Klik jejaring untuk membaca nilai pada nod.
- Plot yang mengekalkan `'id'` yang sama dikemas kini di tempatnya, jadi cetak dan plot di dalam gelung anda untuk memerhati penumpuan.

## 4. Semak

Bandingkan dengan sesuatu yang anda tahu: pesongan hujung julur berbanding PL³/3EI, plat dengan lubang berbanding faktor kepekatan tegasannya, atau tindak balas berbanding beban. Tulis semakan sebagai skrip sendiri supaya ia berjalan semula selepas setiap perubahan:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Simpan

- Setiap langkah boleh menjadi tab skripnya sendiri: ia berkongsi pembolehubah, jadi jalankannya satu demi satu.
- Skrip disimpan dalam bahagian. Tandakan **Simpan pembolehubah dengan bahagian** pada tab Pembolehubah untuk menyimpan keputusan juga (sehingga 32 MB).
- {{ui:Simpan}} dalam kumpulan Skrip memuat turun skrip untuk dikongsi; {{ui:Buka}} membawa satu masuk.
