---
title: Probing: cari bahagian dan tetapkan ofset kerja
summary: Sentuh muka atas, sisi, lubang atau bos dengan probe dan biarkan kawalan mengalihkan ofset kerja ke tempat bahagian itu sebenarnya berada, atau hanya ukur. Apa yang boleh dilakukan oleh setiap kawalan, dan apa yang belum dibuktikan.
keywords: probe, probing, probe sentuhan, sentuh mati, ofset kerja, g54, g31, g38.2, skip, datum, cari pusat, lubang gerudi, bos, tepi, tetapkan sifar, ukur, pemeriksaan, g10
from: 1f718b82
---

{{ui:Probe}} dalam Pembuatan menulis kitaran probing ke dalam program: probe menyentuh bahagian, dan kawalan mengalihkan ofset kerja (G54) mengikut perbezaan antara tempat permukaan dijumpai dan tempat model mengatakan ia sepatutnya berada. Operasi kemudian memotong di tempat bahagian itu sebenarnya berada.

**Tiada apa di sini telah dijalankan pada mesin.** Pergerakan sebelum sentuhan ialah pergerakan biasa: probe tidak diperhatikan sehingga pergerakan probing itu sendiri. Jalankannya perlahan-lahan, di udara dahulu, dengan tangan anda pada hold suapan.

## Gunakannya

1. Pada tab **Alat**, operasi probe pertama menambah **probe sentuhan**: diameter bolanya, dan suapan probing (100 mm/min melainkan anda tetapkan satu).
2. Tekan {{ui:More}} dalam bar alat Pembuatan, kemudian {{ui:Probe}}, dan klik apa yang hendak disentuh. Setiap pilihan ialah satu kitaran, mengikut susunan anda klik:

| Pilihan | Kitaran | Apa yang ditetapkan |
|---|---|---|
| Muka rata yang menghadap paksi alat | Satu sentuhan ke bawah | Z |
| Muka sisi rata bersudut tepat dengan X atau Y | Satu sentuhan menuju muka, sedikit di bawah bahagian atasnya | X atau Y |
| Lubang atau bos sepanjang paksi alat | Empat sentuhan (+X, −X, +Y, −Y) | X dan Y pusatnya |

3. **Dengan hasil**: {{ui:Set the work offset}} atau {{ui:Measure only}}.
4. **Mula sejauh ini** dan **Cari sejauh ini melepasi** ialah jarak dari permukaan yang dijangka pergerakan probing bermula, dan sejauh mana melepasinya probe boleh bergerak sebelum kawalan berhenti. **Kedalaman** ialah sejauh mana di bawah bahagian atas lubang, bos atau muka sisi bola pergi.

Letakkan operasi probe dahulu, sebelum apa-apa memotong.

## Apa yang ditulis oleh setiap kawalan

| Kawalan | Sentuh | Hasil |
|---|---|---|
| Gaya Fanuc | `G31`, kedudukan disimpan dalam `#101` hingga `#104` | Pemboleh ubah ofset (`#5221` hingga `#5223`) dialihkan mengikut ditemui − dijangka. Ukur sahaja: perbezaannya ditinggalkan dalam `#110` (dan `#111`). |
| LinuxCNC | `G38.2`, kedudukan disimpan dalam parameter bernama | `G10 L2 P1` dengan ofset baharu. Ukur sahaja: mesej `(DEBUG, …)`. |
| GRBL | `G38.2` | Satu sentuhan menetapkan paksi dengan `G10 L20 P1`. GRBL tiada pemboleh ubah, jadi ia **tidak dapat mengira pusat**: fail itu menyatakannya dalam ulasan dan tidak menetapkan apa-apa. |

Pengiraan aritmetik ialah milik pasca, jadi anda boleh mengubahnya: peristiwanya ialah `probe-move` dan `probe-set` ([Pasca-proses yang boleh disunting](topic:post-processors)).

## Had

- Satu ofset kerja (G54). Muka bersudut tepat dengan paksi sahaja: tiada sudut, tiada kitaran bucu, tiada putaran kerja.
- Tiada penetap alat, tiada semakan alat patah, tiada pengukuran saiz berbanding toleransi, tiada laporan.
- Gelendong tidak dimulakan untuk probe dan penyejuk kekal mati; tiada apa yang menyemak bahawa alat dalam gelendong ialah probe.
- Simulasi bahan mentah tidak menjalankan laluan probing.
- Penentukuran probe itu sendiri (ofset bola, pesongan pen, arah cetus) ialah milik kawalan.
