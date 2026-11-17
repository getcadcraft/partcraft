---
title: Bor lubang dan counterbore pada titik sketsa
summary: Letakkan titik dalam sketsa pada muka, buat lubang sederhana, counterbore, countersink, atau berulir (ISO metrik) di setiap titik, atur diameter dan kedalaman, serta perbaiki lubang yang dibor ke arah yang salah.
keywords: lubang, wizard lubang, bor, ulir termodelkan, pencetakan 3D, counterbore, cbore, countersink, csink, lubang berulir, ulir, bor tap, ulir metrik, M6, tembus semua, lubang buta, lubang baut, titik, pusat lubang
from: 8e1eef83
---

{{ui:Lubang}} membor satu lubang di setiap titik lepas sketsa. Titik lepas adalah titik yang dibuat dengan alat Titik, bukan ujung garis atau pusat lingkaran.

## Bor lubang pada muka

1. Klik muka datar tempat lubang akan dibor, lalu pilih {{ui:Buat sketsa pada muka ini}}.
2. Tekan {{key:P}} dan klik tempat setiap lubang. Beri dimensi titik dari tepi atau titik asal jika posisinya penting (lihat [Definisikan sketsa secara penuh](topic:relations-dimensions)).
3. Pilih {{ui:Keluar}}.
4. Pilih {{ui:Lubang}}.

Lubang menembus part, selebar 6 mm. Panel kanan menampilkan **Lubang**: berapa banyak yang dibuat, "satu per titik sketsa".

**Satu lubang, cepat:** klik muka datar tempat lubang akan dibuat dan pilih {{ui:Lubang di sini}} di panel kanan. PartCraft menambahkan sketsa pada muka dengan satu titik di tempat Anda mengklik dan Lubang yang menembus part, dalam satu langkah. Ketik angka langsung dan tekan {{key:Enter}} untuk diameternya. Untuk menempatkannya dengan tepat, buka sketsa baru dan beri dimensi titiknya.

**Sketsa mana yang dipakai:** sketsa yang baru saja Anda tutup atau yang dipilih; jika tidak, sketsa terbaru yang belum dipakai dan memiliki titik lepas. Jika tidak ada: "Buat sketsa dengan titik di tempat lubang akan dibuat terlebih dahulu (Sketsa pada muka, lalu Titik)."

## Pengaturan

| Pengaturan | Pilihan | Bawaan |
|---|---|---|
| **Jenis** | Sederhana, Counterbore, Countersink, Berulir (ISO metrik) | Sederhana |
| **Diameter (mm)** | Diameter lubang | 6 |
| **Tembus semua** | Dicentang: menembus part. Hapus centangnya untuk lubang buta | Dicentang |
| **Kedalaman (mm)** | Ditampilkan saat Tembus semua tidak dicentang | 10 |
| **Counterbore ⌀** | Ditampilkan untuk Counterbore: diameter cekungan yang lebih lebar | 11 |
| **Kedalaman counterbore** | Ditampilkan untuk Counterbore | 6 |
| **Balik arah** | Membor ke sisi lain dari bidang sketsa | Mati |

Lubang dibor masuk ke material, tegak lurus terhadap bidang sketsa. Kedalaman lubang buta diukur dari bidang sketsa; dasarnya rata.

## Lubang baut dengan counterbore

1. Buat lubang seperti di atas.
2. Atur **Jenis** ke **Counterbore**.
3. Atur **Diameter (mm)** ke `6.6` (kelonggaran untuk baut M6), **Counterbore ⌀** ke `11`, dan **Kedalaman counterbore** ke `6.5`.

Counterbore harus lebih lebar dari lubang ("Counterbore harus lebih lebar dari lubang.") dan, untuk lubang buta, harus lebih dangkal darinya ("Counterbore harus lebih dangkal dari lubang.").

## Lingkaran baut

Untuk lubang yang berjarak merata mengelilingi pusat, buat **satu** lubang dan polakan: pilih fitur Lubang, lalu pilih {{ui:Melingkar}} (lihat [Fitur pola dan cermin](topic:patterns-mirror)). Pola mengikuti saat Anda mengubah ukuran lubang.

## Saat lubang dibor ke arah yang salah

- "Tidak ada yang dapat dibor di sisi sketsa itu. Coba balik arahnya." Sketsa berada di sisi jauh dari material. Centang **Balik arah**.
- "Letakkan titik sketsa di tempat lubang akan dibuat (alat Titik), lalu buat lubangnya." Sketsa tidak memiliki titik lepas. Ujung garis dan pusat lingkaran tidak dihitung.
- "Belum ada yang dapat dibor." Lubang memerlukan solid. Buat boss terlebih dahulu.

## Lubang dalam rakitan

Setiap lubang memiliki sumbu. Dalam rakitan, **Pusatkan pada** dapat menempatkan joint pada sumbu lubang, yang tercantum sebagai "Hole1, hole 2", sehingga part pin atau baut sejajar dengan lubang itu. Lihat [Membangun rakitan](topic:build-assembly).

## Lubang countersink

Atur **Jenis** ke **Countersink**, lalu **Countersink ⌀** (di permukaan) dan **Sudut countersink**: 90° (sekrup kepala rata metrik ISO) atau 82° (sekrup inci). Ambil diameter countersink dari data pabrikan sekrup (sedikit lebih besar dari diameter kepala sekrup). Muka kerucut diberi nama "countersink" di panel.

## Lubang berulir

Atur **Jenis** ke **Berulir (ISO metrik)** dan pilih **Ulir**, M2 sampai M24 kasar. Lubang dibor dengan ukuran bor tap dari tabel di bawah (diameter nominal dikurangi pitch, ke seri bor, seperti yang tercantum dalam ISO 2306 untuk ulir 6H); kotak **Diameter (mm)** tidak digunakan. Untuk lubang buta, **Kedalaman ulir (mm)** menentukan seberapa dalam ulir dibuat.

| Ulir | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pitch | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Bor tap ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Pada awalnya ulir bersifat **kosmetik**: model memiliki lubang yang dibor, tampilan menggambar diameter mayor ulir sebagai lingkaran putus-putus, dan lembar gambar membawa callout sebagai catatan, misalnya "4× M8×1.25 - 6H, ulir tembus". STEP hanya mengekspor lubang yang dibor.

Centang **Dimodelkan** untuk memotong ulir heliks sungguhan ke dalam lubang, untuk pencetakan 3D. **Kelonggaran (mm)** membuatnya lebih besar sebesar itu di sekelilingnya, sehingga baut hasil cetak pas: 0.1 sampai 0.2 mm cocok untuk kebanyakan printer. Callout kemudian diakhiri dengan "(dimodelkan)". Lihat [Ulir pada poros dan lubang, digambar atau dimodelkan](topic:threads), yang juga memasang ulir pada poros.

:::note
Lubang counterdrilled, ulir inci, dan ulir pipa belum dibuat.
:::
