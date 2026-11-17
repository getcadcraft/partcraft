---
title: Ulir pada poros dan lubang, digambar atau dimodelkan
summary: Pasang ulir metrik ISO atau trapesium pada muka bulat mana pun, poros atau lubang. Biarkan sebagai kosmetik untuk gambar, atau modelkan ulir heliks yang sebenarnya untuk pencetakan 3D, dengan kelonggaran agar part cetak dapat pas.
keywords: ulir, ulir termodelkan, heliks, helix, sekrup, baut, mur, poros, lubang, ulir luar, ulir dalam, ulir kosmetik, ulir metrik, trapesium, acme, sekrup pengarah, Tr16x4, M10, pencetakan 3D, cetak, kelonggaran, pas, ulir kiri, ditap
from: 4f6401cc
---

{{ui:Ulir}} memasang ulir pada muka bulat: bagian luar poros (ulir luar) atau bagian dalam lubang (ulir dalam). PartCraft mengetahui jenisnya dari muka tersebut.

Ulir pada awalnya **kosmetik**: muka tetap polos, tampilan menggambarnya sebagai lingkaran putus-putus, dan lembar gambar mencatatnya, seperti "M10×1.5 - 6g, ulir panjang 20". Centang **Termodelkan** untuk memotong ulir heliks yang sebenarnya ke dalam part, untuk pencetakan 3D atau model yang harus tampak benar.

## Beri ulir pada poros atau lubang

1. Buat poros atau lubang sesuai ukuran ulir: poros Ø10 untuk baut M10, atau lubang Ø8.5 (mata bor tap) untuk mur M10.
2. Klik muka bulat, lalu pilih {{ui:Lainnya}} › {{ui:Ulir}}. Jika tidak ada muka bulat yang dipilih, PartCraft meminta Anda mengklik muka-muka itu, lalu {{ui:Selesai}}.
3. Di panel kanan, periksa **Ukuran**. **Sesuaikan dengan muka** memilih ukurannya sendiri: untuk poros, ukuran yang diameter mayornya sama dengan poros; untuk lubang, ukuran yang diameter minornya sesuai dengan lubang.

Ulir dimulai di ujung terbuka muka, tempat part tidak berlanjut sepanjang sumbu: ujung bebas poros, atau mulut lubang. **Mulai dari ujung lain** membaliknya.

## Pengaturan

| Pengaturan | Pilihan | Bawaan |
|---|---|---|
| **Bentuk** | ISO metric (60°), M1.6 sampai M64 kasar; trapesium (Tr, 30°), Tr8×1.5 sampai Tr60×9 | ISO metric |
| **Ukuran** | Sesuaikan dengan muka, atau satu ukuran dari daftar | Sesuaikan dengan muka |
| **Seluruh muka** | Hapus centangnya untuk mengisi **Panjang (mm)**, diukur dari awal | Dicentang |
| **Mulai dari ujung lain** | Ulir berjalan dari ujung lain muka | Mati |
| **Putaran** | Ulir kanan atau ulir kiri | Kanan |
| **Termodelkan** | Potong ulir heliks yang sebenarnya | Mati |
| **Kelonggaran (mm)** | Ditampilkan saat Termodelkan dicentang: seberapa kecil ulir poros, dan seberapa besar ulir lubang, di sekelilingnya | 0.1 |

Ukuran yang tidak cocok dengan muka tetap dibangun, dipotong sesuai muka, dan panel menyatakannya, misalnya "Poros Ø12 mm bukan Ø10 mm milik M10". Beberapa muka dapat berbagi satu fitur Ulir; dengan **Sesuaikan dengan muka**, setiap muka mendapat ukurannya sendiri.

## Ulir termodelkan untuk pencetakan 3D

Ulir termodelkan mengikuti profil dasar standar: ISO 68-1 untuk ulir metrik (puncak dan akar datar, sisi 60°), ISO 2901 untuk ulir trapesium (sisi 30°). **Kelonggaran** menggeser seluruh profil ke dalam (poros) atau ke luar (lubang) agar part cetak dapat disekrup bersama:

- **0.1 sampai 0.2 mm** cocok untuk sebagian besar printer. Cetak baut dan mur uji terlebih dahulu.
- **0** adalah profil standar, untuk part yang dikerjakan mesin atau untuk memeriksa kepasan.

Baut dan mur dengan kelonggaran yang sama tidak pernah saling menyentuh pada sisinya: celah di antara keduanya dua kali kelonggaran, di sekelilingnya.

:::tip
Pitch halus mencetak dengan buruk: M3 ke bawah, atau pitch di bawah 0.5 mm, mendekati batas yang dapat digambar nozzle 0.4 mm. Modelkan ulir yang lebih besar, dan gunakan heat-set insert atau lubang ditap untuk yang kecil.
:::

Ulir termodelkan adalah bagian dari solid: ekspor STL, 3MF, dan STEP membawanya, dan {{ui:Ukur}} juga mengukurnya. Ia membuat part lebih berat untuk dibangun ulang: ulir M10 sepanjang 20 sekitar 150,000 segitiga.

## Lubang ditap

Lubang **Ditap (ISO metric)** juga memiliki sakelar **Termodelkan**, dengan **Kelonggaran** yang sama. Lihat [Bor lubang dan counterbore pada titik sketsa](topic:holes).

## Saat ulir tidak terbentuk

- "Ulir dipasang pada muka bulat (silinder): poros atau lubang." Muka yang dipilih datar atau melengkung dengan cara lain.
- "Tidak ada ukuran standar yang cocok dengan muka bulat Ø0.6 mm: pilih ukuran." Sesuaikan dengan muka tidak menemukan apa pun dalam 12 % muka. Pilih **Ukuran**, atau ubah mukanya.
- "Muka tempat ulir ini berada sudah hilang (…). Pilih lagi." Perubahan sebelumnya menghapus muka. Klik {{ui:Pilih muka}} lalu klik muka itu lagi.

:::note
Ulir inci (UNC, UNF), ulir pipa, ulir tirus, akhir ulir (run-out), dan awal ulir yang dipotong miring belum dibuat. Kernel tepat menampilkan ulir termodelkan sebagai kosmetik.
:::
