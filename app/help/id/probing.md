---
title: Probing: temukan benda dan atur offset benda kerja
summary: Sentuh muka atas, sisi, lubang, atau tonjolan dengan probe dan biarkan kontrol memindahkan offset benda kerja ke posisi benda yang sebenarnya, atau hanya mengukur. Apa yang dapat dilakukan setiap kontrol, dan apa yang belum terbukti.
keywords: probe, probing, touch probe, probe sentuh, touch off, offset benda kerja, g54, g31, g38.2, skip, datum, cari pusat, bor, tonjolan, tepi, atur nol, ukur, inspeksi, g10
from: 1f718b82
---

{{ui:Probe}} di Manufaktur menuliskan siklus probing ke dalam program: probe menyentuh benda, dan kontrol memindahkan offset benda kerja (G54) sebesar selisih antara tempat permukaan ditemukan dan tempat model menyatakannya. Operasi berikutnya kemudian memotong di tempat benda yang sebenarnya.

**Tidak ada di sini yang pernah dijalankan pada mesin.** Gerakan sebelum sentuhan adalah gerakan biasa: probe tidak diawasi sampai gerakan probing itu sendiri. Jalankan perlahan, di udara lebih dulu, dengan tangan Anda di atas feed hold.

## Gunakan

1. Pada tab **Alat**, operasi probe pertama menambahkan **probe sentuh**: diameter bolanya, dan feed probing (100 mm/menit kecuali Anda mengaturnya).
2. Tekan {{ui:Lainnya}} di bilah alat Manufaktur, lalu {{ui:Probe}}, dan klik apa yang akan disentuh. Setiap pilihan adalah satu siklus, sesuai urutan klik Anda:

| Pilihan | Siklusnya | Yang diatur |
|---|---|---|
| Muka datar yang menghadap ke sumbu alat | Satu sentuhan turun | Z |
| Muka sisi datar yang tegak lurus X atau Y | Satu sentuhan menuju muka, sedikit di bawah atasnya | X atau Y |
| Lubang atau tonjolan sepanjang sumbu alat | Empat sentuhan (+X, −X, +Y, −Y) | X dan Y dari pusatnya |

3. **Dengan hasilnya**: {{ui:Atur offset benda kerja}} atau {{ui:Ukur saja}}.
4. **Mulai sejauh ini** dan **Cari sejauh ini melewatinya** menyatakan seberapa jauh dari permukaan yang diharapkan gerakan probing dimulai dan seberapa jauh di luarnya probe boleh bergerak sebelum kontrol menyerah. **Kedalaman** adalah seberapa jauh di bawah atas lubang, tonjolan, atau muka sisi bola turun.

Letakkan operasi probe di depan, sebelum ada yang memotong.

## Yang ditulis setiap kontrol

| Kontrol | Sentuhan | Hasil |
|---|---|---|
| Gaya Fanuc | `G31`, posisinya disimpan di `#101` sampai `#104` | Variabel offset (`#5221` sampai `#5223`) dipindahkan sebesar ditemukan − diharapkan. Ukur saja: selisihnya disimpan di `#110` (dan `#111`). |
| LinuxCNC | `G38.2`, posisinya disimpan di parameter bernama | `G10 L2 P1` dengan offset baru. Ukur saja: pesan `(DEBUG, …)`. |
| GRBL | `G38.2` | Satu sentuhan mengatur sumbu dengan `G10 L20 P1`. GRBL tidak memiliki variabel, sehingga **tidak dapat menghitung pusat**: file menyatakannya dalam komentar dan tidak mengatur apa pun. |

Aritmetikanya milik post, sehingga Anda dapat mengubahnya: event-nya adalah `probe-move` dan `probe-set` ([Post processor yang dapat Anda sunting](topic:post-processors)).

## Batasan

- Satu offset benda kerja (G54). Muka yang tegak lurus sumbu saja: tidak ada sudut, tidak ada siklus sudut, tidak ada rotasi benda kerja.
- Tidak ada alat pengatur pahat, tidak ada pemeriksaan pahat patah, tidak ada pengukuran ukuran terhadap toleransi, tidak ada laporan.
- Spindel tidak dinyalakan untuk probe dan coolant tetap mati; tidak ada yang memeriksa bahwa alat di spindel adalah probe.
- Simulasi stok tidak menjalankan lintasan probing.
- Kalibrasi probe itu sendiri (offset bola, defleksi stylus, arah pemicu) adalah milik kontrol.
