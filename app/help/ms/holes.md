---
title: Tebuk lubang dan kaunterbor pada titik lakaran
summary: Letakkan titik dalam lakaran pada muka, buat lubang mudah, kaunterbor, kaunter-benam atau berulir (ISO metrik) pada setiap titik, tetapkan diameter dan kedalaman, dan betulkan lubang yang ditebuk ke arah yang salah.
keywords: lubang, wizard lubang, tebuk, benang dimodelkan, pencetakan 3D, kaunterbor, cbore, kaunter-benam, csink, lubang berulir, benang, mata gerudi tap, benang metrik, M6, tembus semua, lubang buta, lubang bolt, titik, pusat lubang
from: 8e1eef83
---

{{ui:Lubang}} menebuk satu lubang pada setiap titik longgar lakaran. Titik longgar ialah titik yang dibuat dengan alat Titik, bukan hujung garisan atau pusat bulatan.

## Tebuk lubang pada muka

1. Klik muka rata untuk ditebuk, kemudian pilih {{ui:Lakaran pada muka ini}}.
2. Tekan {{key:P}} dan klik tempat setiap lubang pergi. Dimensikan titik dari tepi atau asalan jika kedudukannya penting (lihat [Takrifkan lakaran sepenuhnya](topic:relations-dimensions)).
3. Pilih {{ui:Keluar}}.
4. Pilih {{ui:Lubang}}.

Lubang menembusi bahagian, lebar 6 mm. Panel kanan menunjukkan **Lubang**: berapa banyak yang dibuat, "satu bagi setiap titik lakaran".

**Satu lubang, pantas:** klik muka rata tempat lubang pergi dan pilih {{ui:Lubang di sini}} dalam panel kanan. PartCraft menambah lakaran pada muka dengan satu titik di tempat anda klik dan Lubang tembus bahagian, dalam satu langkah. Taip nombor serta-merta dan tekan {{key:Enter}} untuk diameternya. Untuk meletakkannya dengan tepat, buka lakaran baharu dan dimensikan titiknya.

**Lakaran mana yang digunakan:** lakaran yang baru anda tutup atau yang dipilih; jika tidak, lakaran tidak digunakan terbaharu yang mempunyai titik longgar. Jika tiada: "Buat lakaran dengan titik di tempat lubang pergi dahulu (Lakaran pada muka, kemudian Titik)."

## Tetapan

| Tetapan | Pilihan | Lalai |
|---|---|---|
| **Jenis** | Mudah, Kaunterbor, Kaunter-benam, Berulir (ISO metrik) | Mudah |
| **Diameter (mm)** | Diameter lubang | 6 |
| **Tembus semua** | Ditanda: menembusi bahagian sepenuhnya. Nyahtanda untuk lubang buta | Ditanda |
| **Kedalaman (mm)** | Dipaparkan apabila Tembus semua dinyahtanda | 10 |
| **Diameter kaunterbor ⌀** | Dipaparkan untuk Kaunterbor: diameter lekukan yang lebih lebar | 11 |
| **Kedalaman kaunterbor** | Dipaparkan untuk Kaunterbor | 6 |
| **Arah terbalik** | Menebuk ke sisi lain satah lakaran | Mati |

Lubang ditebuk ke dalam bahan, berserenjang dengan satah lakaran. Kedalaman lubang buta diukur dari satah lakaran; dasarnya rata.

## Lubang bolt kaunterbor

1. Buat lubang seperti di atas.
2. Tetapkan **Jenis** kepada **Kaunterbor**.
3. Tetapkan **Diameter (mm)** kepada `6.6` (kelegaan untuk bolt M6), **Diameter kaunterbor ⌀** kepada `11` dan **Kedalaman kaunterbor** kepada `6.5`.

Kaunterbor mesti lebih lebar daripada lubang ("Kaunterbor mesti lebih lebar daripada lubang.") dan, bagi lubang buta, lebih cetek daripadanya ("Kaunterbor mesti lebih cetek daripada lubang.").

## Bulatan bolt

Untuk lubang yang berjarak sama di sekeliling pusat, buat **satu** lubang dan tatasusunankannya: pilih ciri Lubang, kemudian pilih {{ui:Bulatan}} (lihat [Ciri tatasusunan dan cermin](topic:patterns-mirror)). Tatasusunan itu mengikut apabila anda menukar saiz lubang.

## Apabila lubang pergi ke arah yang salah

- "Tiada apa-apa untuk ditebuk di sisi lakaran itu. Cuba balikkan arah." Lakaran berada di sisi jauh bahan. Tandakan **Arah terbalik**.
- "Letakkan titik lakaran di tempat lubang pergi (alat Titik), kemudian buat lubang." Lakaran tidak mempunyai titik longgar. Hujung garisan dan pusat bulatan tidak dikira.
- "Belum ada apa-apa untuk ditebuk." Lubang memerlukan pepejal. Buat boss dahulu.

## Lubang dalam himpunan

Setiap lubang mempunyai paksi. Dalam himpunan, **Pusatkan pada** boleh meletakkan sambungan pada paksi lubang, disenaraikan sebagai "Hole1, hole 2", supaya bahagian pin atau bolt sejajar dengannya. Lihat [Bina himpunan](topic:build-assembly).

## Lubang kaunter-benam

Tetapkan **Jenis** kepada **Kaunter-benam**, kemudian **Diameter kaunter-benam ⌀** (di permukaan) dan **Sudut kaunter-benam**: 90° (skru kepala rata ISO metrik) atau 82° (skru inci). Ambil diameter kaunter-benam daripada data pengilang skru (sedikit lebih besar daripada diameter kepala skru). Muka kon dinamakan "kaunter-benam" dalam panel.

## Lubang berulir

Tetapkan **Jenis** kepada **Berulir (ISO metrik)** dan pilih **Benang**, M2 hingga M24 kasar. Lubang ditebuk pada saiz mata gerudi tap daripada jadual di bawah (diameter nominal tolak pic, kepada siri gerudi, seperti yang disenaraikan ISO 2306 bagi benang 6H); kotak **Diameter (mm)** tidak digunakan. Bagi lubang buta, **Kedalaman benang (mm)** menetapkan sedalam mana benang pergi.

| Benang | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pic | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Mata gerudi tap ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Benang itu pada mulanya **kosmetik**: model mempunyai lubang yang ditebuk, pandangan melukis diameter major benang sebagai bulatan putus-putus, dan helaian lukisan membawa callout sebagai nota, seperti "4× M8×1.25 - 6H, benang tembus". STEP hanya mengeksport lubang yang ditebuk.

Tandakan **Dimodelkan** untuk memotong benang heliks sebenar ke dalam lubang, untuk pencetakan 3D. **Kelegaan (mm)** menjadikannya lebih besar sekeliling, supaya bolt cetakan muat: 0.1 hingga 0.2 mm sesuai untuk kebanyakan pencetak. Callout kemudian berakhir dengan "(dimodelkan)". Lihat [Benang pada aci dan lubang, dilukis atau dimodelkan](topic:threads), yang juga meletakkan benang pada aci.

:::note
Lubang kaunter-gerudi, benang inci dan benang paip belum dibina.
:::
