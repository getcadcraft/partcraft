---
title: Benang pada aci dan lubang dalam, dilukis atau dimodelkan
summary: Letakkan benang metrik ISO atau trapezoid pada mana-mana muka bulat, aci atau lubang dalam. Kekalkan sebagai kosmetik untuk lukisan, atau modelkan benang heliks sebenar untuk percetakan 3D, dengan kelonggaran supaya bahagian yang dicetak muat.
keywords: benang, benang dimodelkan, benang dimodelkan, heliks, helix, skru, bolt, nat, aci, lubang dalam, benang luar, benang dalam, benang kosmetik, benang metrik, trapezoid, acme, skru utama, Tr16x4, M10, percetakan 3D, cetak, kelonggaran, padanan, tangan kiri, ditap
from: 4f6401cc
---

{{ui:Benang}} meletakkan benang pada muka bulat: bahagian luar aci (benang luar) atau bahagian dalam lubang dalam (benang dalam). PartCraft mengenal pasti yang mana daripada muka tersebut.

Pada mulanya benang ialah **kosmetik**: muka kekal licin, pandangan melukis benang sebagai bulatan putus-putus dan helaian lukisan mencatatnya, seperti "M10×1.5 - 6g, benang panjang 20". Tandakan **Dimodelkan** untuk memotong benang heliks sebenar ke dalam bahagian, untuk percetakan 3D atau model yang mesti kelihatan betul.

## Benangkan aci atau lubang dalam

1. Bina aci atau lubang dalam pada saiz benang: aci Ø10 untuk bolt M10, atau lubang dalam Ø8.5 (gerudi tap) untuk nat M10.
2. Klik muka bulat, kemudian pilih {{ui:Lagi}} › {{ui:Benang}}. Tanpa muka bulat dipilih, PartCraft meminta anda klik muka, kemudian {{ui:Selesai}}.
3. Dalam panel kanan, semak **Saiz**. **Muat ke muka** memilih saiznya sendiri: untuk aci, saiz yang diameter majornya sama dengan aci; untuk lubang dalam, saiz yang diameter minornya sesuai dengannya.

Benang bermula di hujung terbuka muka, tempat bahagian tidak diteruskan sepanjang paksi: hujung bebas aci, mulut lubang dalam. **Mula di hujung yang satu lagi** membalikkannya.

## Tetapan

| Tetapan | Pilihan | Lalai |
|---|---|---|
| **Bentuk** | ISO metrik (60°), M1.6 hingga M64 kasar; trapezoid (Tr, 30°), Tr8×1.5 hingga Tr60×9 | ISO metrik |
| **Saiz** | Muat ke muka, atau satu saiz dari senarai | Muat ke muka |
| **Seluruh muka** | Nyahtanda untuk memberikan **Panjang (mm)**, diukur dari permulaan | Ditanda |
| **Mula di hujung yang satu lagi** | Benang berjalan dari hujung lain muka | Mati |
| **Tangan** | Tangan kanan atau tangan kiri | Tangan kanan |
| **Dimodelkan** | Potong benang heliks sebenar | Mati |
| **Kelonggaran (mm)** | Ditunjukkan apabila Dimodelkan ditanda: berapa kecil benang aci, dan berapa besar benang lubang dalam, di sekeliling | 0.1 |

Saiz yang tidak sesuai dengan muka tetap dibina, dipotong mengikut muka, dan panel memberitahu anda, contohnya "Aci Ø12 mm bukan Ø10 mm untuk M10". Beberapa muka boleh berkongsi satu ciri Benang; dengan **Muat ke muka**, setiap muka mendapat saiznya sendiri.

## Benang dimodelkan untuk percetakan 3D

Benang dimodelkan mengikut profil asas piawai: ISO 68-1 untuk benang metrik (puncak dan dasar rata, sisi 60°), ISO 2901 untuk benang trapezoid (sisi 30°). **Kelonggaran** menggerakkan keseluruhan profil ke dalam (aci) atau ke luar (lubang dalam) supaya bahagian yang dicetak boleh dipasang dengan skru bersama:

- **0.1 hingga 0.2 mm** sesuai untuk kebanyakan pencetak. Cetak bolt dan nat ujian dahulu.
- **0** ialah profil piawai, untuk bahagian yang dikisar atau untuk menyemak padanan.

Bolt dan nat dengan kelonggaran yang sama tidak pernah bersentuhan di sepanjang sisinya: jurang di antara keduanya ialah dua kali kelonggaran, di sekeliling.

:::tip
Pic halus mencetak dengan kurang baik: M3 dan lebih kecil, atau pic di bawah 0.5 mm, hampir dengan had muncung 0.4 mm. Modelkan benang yang lebih besar, dan gunakan sisipan heat-set atau lubang ditap untuk yang kecil.
:::

Benang dimodelkan ialah sebahagian daripada pepejal: eksport STL, 3MF dan STEP membawanya, dan Ukur boleh mengukurnya. Ia menjadikan bahagian lebih berat untuk dibina semula: benang M10 panjang 20 kira-kira 150,000 segi tiga.

## Lubang ditap

Lubang **Ditap (ISO metrik)** juga mempunyai suis **Dimodelkan**, dengan **Kelonggaran** yang sama. Lihat [Gerudi lubang dan kaunterbor pada titik lakaran](topic:holes).

## Apabila benang tidak dibina

- "Benang diletakkan pada muka bulat (silinder): aci atau lubang dalam." Muka yang dipilih rata atau melengkung dengan cara lain.
- "Tiada saiz piawai sesuai untuk muka bulat Ø0.6 mm: pilih saiz." Muat ke muka tidak menemui apa-apa dalam 12 % daripada muka. Pilih **Saiz**, atau tukar muka.
- "Muka yang benang ini berada padanya sudah hilang (…). Pilih semula." Perubahan awal telah mengeluarkan muka. Klik {{ui:Pilih muka}} dan klik muka itu sekali lagi.

:::note
Benang inci (UNC, UNF), benang paip, benang tirus, lari keluar benang dan permulaan benang bercanfer belum dibina. Kernel tepat memaparkan benang dimodelkan sebagai kosmetik.
:::
