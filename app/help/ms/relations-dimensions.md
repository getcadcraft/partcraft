---
title: Takrifkan lakaran sepenuhnya dengan kekangan dan dimensi
summary: Tambah kekangan dari panel kanan dan dimensi dengan alat Dimensi, baca warna keadaan kurang ditakrifkan, ditakrifkan sepenuhnya dan terlebih ditakrifkan, serta betulkan lakaran yang terlebih ditakrifkan.
keywords: kekangan, dimensi, dimensi pintar, ditakrifkan sepenuhnya, kurang ditakrifkan, terlebih ditakrifkan, darjah kebebasan, koinsiden, mengufuk, menegak, selari, serenjang, tangen, sama, sepusat, titik tengah, tetap, konflik, berlebihan
from: e76d047a
---

Lakaran **ditakrifkan sepenuhnya** apabila setiap titik dan setiap saiz ditetapkan oleh kekangan dan dimensi. Lakaran yang ditakrifkan sepenuhnya hanya berubah apabila anda menukar nombor, jadi bahagian berkelakuan dengan boleh diramal apabila anda mengeditnya kemudian. PartCraft tidak memaksa anda menakrifkan lakaran sepenuhnya, tetapi ia sentiasa menunjukkan betapa dekat anda.

## Baca keadaan lakaran

Keadaan dipaparkan di tiga tempat: cip di bahagian kiri atas paparan, mesej di bahagian atas panel kanan, dan bendera dalam sejarah.

| Keadaan | Cip | Warna geometri | Maksudnya |
|---|---|---|---|
| Kurang ditakrifkan | "Kurang ditakrifkan · 3 darjah kebebasan" | Biru | Sesetengah geometri masih boleh bergerak. Seret geometri biru untuk melihat arahnya |
| Ditakrifkan sepenuhnya | "Ditakrifkan sepenuhnya" | Dakwat (hitam pada Kertas, cerah pada Model) | Setiap titik dan saiz ditetapkan |
| Terlebih ditakrifkan | "Terlebih ditakrifkan" | Merah pada kekangan yang terlibat | Sesetengah kekangan bercanggah antara satu sama lain, atau satu sudah tersirat oleh yang lain |

Geometri binaan berwarna kelabu dan putus-putus tanpa mengira keadaannya. Item yang dipilih berwarna oren. "Darjah kebebasan" ialah satu cara sesuatu boleh masih bergerak: titik bebas mempunyai dua (kiri-kanan dan atas-bawah), bulatan bebas mempunyai tiga (pusatnya dan jejarinya).

Legenda di bawah mesej dalam panel kanan mengulang warna-warna itu.

## Tambah dimensi

1. Tekan {{key:D}} atau pilih {{ui:Dimensi}}.
2. Klik apa yang hendak diukur:
   - **satu garisan**: panjangnya;
   - **satu bulatan**: diameternya; **satu lengkok**: jejarinya;
   - **dua titik** (titik hujung, pusat, titik lepas atau asalan): jarak antara keduanya;
   - **satu titik dan satu garisan**: jarak dari titik ke garisan;
   - **dua garisan selari**: jarak antaranya; **dua garisan pada sudut**: sudut antaranya.
3. Selepas satu item, bar status menyatakan "Klik item kedua, atau klik tempat dimensi akan pergi." Klik item kedua, atau klik di ruang kosong tempat anda mahu nombor itu.
4. Kotak nombor dibuka dengan nilai semasa. Taip saiz dan tekan {{key:Enter}}. {{key:Esc}} mengekalkan nilai yang diukur.

**Tempat anda meletakkan nombor menentukan jenisnya** bagi garisan condong atau dua titik: letakkan di atas atau di bawah untuk mendapatkan jarak mengufuk, di kiri atau kanan untuk mendapatkan jarak menegak, dan di tempat lain untuk jarak sebenar (sejajar).

Kotak menerima nombor biasa dalam milimeter atau darjah, seperti `25`, `12.5` atau `1e3`. `⌀`, `Ø` atau `R` di hadapan, atau `mm` atau `°` di belakang, diabaikan. Sudut ialah 0 hingga 180 darjah. Operasi aritmetik seperti `20+5` tidak diterima; untuk menghubungkan saiz kepada pemboleh ubah atau formula, mulakan dengan `=`.

Untuk menukar dimensi kemudian, klik dua kali nombornya dalam lakaran, atau pilih **Edit** di sebelahnya dalam senarai dalam panel kanan.

:::tip
Anda juga boleh memilih geometri dahulu (alat Pilih) dan memilih butang dimensi dalam panel kanan: {{ui:Jarak}}, {{ui:Jarak mengufuk}}, {{ui:Jarak menegak}}, {{ui:Jejari}}, {{ui:Diameter}} atau {{ui:Sudut}}. Hanya yang sesuai dengan pilihan dipaparkan. Ini cara untuk memberi bulatan jejari dan bukannya diameter.
:::

## Tambah kekangan

Kekangan ditambah dari panel kanan, bukan dengan alat.

1. Tekan {{key:S}} untuk Pilih.
2. Klik satu item, kemudian {{key:Shift}}+klik item kedua jika kekangan memerlukan dua. Asalan juga boleh dipilih.
3. Panel kanan menyatakan "Dipilih: garisan l3, titik p1" dan memaparkan butang untuk setiap kekangan yang sesuai, seperti {{ui:∥ Selari}} atau {{ui:• Koinsiden}}.
4. Pilih butang itu. Lakaran diselesaikan serta-merta.

Jika tiada kekangan sesuai, panel menyatakan "Tiada kekangan sesuai dengan pilihan ini. Pilih satu atau dua item (Shift+klik menambah)."

Senarai penuh kekangan, apa yang diperlukan setiap satu dan apa yang dilakukannya terdapat dalam [Kekangan dan dimensi lakaran](topic:sketch-relations).

Kekangan dipaparkan dalam lakaran sebagai simbol kecil di sebelah geometri (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Titik koinsiden disembunyikan melainkan geometri dipilih atau kekangan bermasalah. Klik simbol untuk memilih kekangan.

## Contoh: profil braket berbentuk L

1. Lakar pada **Satah depan**. Dengan alat Garisan, mulakan di asalan dan klik enam sudut L, berakhir di asalan semula. Rantaian berakhir dengan sendirinya apabila anda klik titik pertama.
2. Garisan yang dilukis hampir mengufuk atau menegak sudah mempunyai kekangan H dan V, kecuali yang terakhir: garisan yang berakhir pada titik sedia ada tidak mendapat kekangan automatik. Tekan {{key:S}}, klik garisan terakhir itu dan pilih {{ui:V Menegak}} dalam panel kanan. Cip menyatakan "Kurang ditakrifkan · 4 darjah kebebasan".
3. Tekan {{key:D}}. Klik garisan bawah, klik di bawahnya, taip `80`, {{key:Enter}}.
4. Klik garisan kiri, klik di sebelah kirinya, taip `60`, {{key:Enter}}.
5. Dimensikan garisan pendek atas `20` dan garisan menegak dalam `45` dengan cara yang sama.
6. Cip kini menyatakan **Ditakrifkan sepenuhnya** dan keseluruhan L bertukar kepada dakwat.

## Betulkan lakaran yang terlebih ditakrifkan

Apabila kekangan atau dimensi baharu bercanggah dengan yang lain, PartCraft tidak mengalihkan apa-apa. Geometri kekal seperti asalnya, kekangan yang terlibat bertukar merah, dan bar status menamakannya:

- "Terlebih ditakrifkan: Mengufuk, Jarak 40 tidak boleh dipenuhi semuanya. Buat asal, atau padam salah satu daripadanya." Kekangan itu bercanggah.
- "Terlebih ditakrifkan: Selari sudah tersirat. Padamkannya." Kekangan itu tidak menambah apa-apa: yang lain sudah memaksanya. (Sisi segi empat tepat, sebagai contoh, sudah selari.)

Untuk membetulkannya:

1. Tekan {{key:Mod+Z}} untuk membuat asal perubahan terakhir, atau
2. Cari item merah dalam senarai **Kekangan dan dimensi** dalam panel kanan (kumpulan yang memegangnya terbuka dan merah) dan pilih **Padam** di sebelahnya. Anda juga boleh klik simbol atau nombornya dalam lakaran dan tekan {{key:Delete}}.

:::note
Tiada dimensi "dipacu" (rujukan) dalam binaan ini. Dimensi yang hanya melaporkan saiz yang sudah ditetapkan oleh kekangan lain dianggap terlebih ditakrifkan. Baca saiz dalam panel sebagai gantinya: pilih garisan dan lihat butang Dimensi, atau semak fakta bahagian selepas anda mengekstrud.
:::

Lakaran yang terlebih ditakrifkan dengan konflik sebenar menyebabkan ciri yang menggunakannya gagal ("Terlebih ditakrifkan: 1 kekangan tidak boleh dipenuhi semuanya."), dan sejarah menandakannya sebagai **⚠ ralat**. Lakaran yang hanya berlebihan masih dibina, dengan amaran ⚠.

## Seret untuk mencari yang bebas

Dalam Pilih, seret mana-mana titik atau garisan biru. Penyelesai mengalihkannya sesedikit mungkin sambil mengekalkan setiap kekangan. Jika seretan akan memecahkan kekangan, geometri kembali ke tempatnya dengan serta-merta. Ini cara terpantas untuk melihat dimensi mana yang masih hilang.

## Senarai kekangan

Apabila tiada apa-apa dipilih, panel kanan menyenaraikan **Kekangan dan dimensi**. Setiap baris mempunyai:

- **Edit** (dimensi sahaja): membuka kotak nombor;
- **Pilih**: memilihnya dalam lakaran;
- **Padam**: mengeluarkannya.

Kekangan jenis yang sama yang muncul lebih daripada sekali berkongsi satu baris, seperti "Koinsiden × 5" untuk segi empat tepat yang dikaitkan dengan asalan. Klik baris untuk membukanya: setiap kekangan disenaraikan mengikut apa yang dikaitkannya ("titik p2, titik p4") dengan **Pilih** dan **Padam** sendiri. Baris itu sendiri mempunyai:

- **Pilih**: memilih semuanya dalam lakaran;
- **Padam semua**: mengeluarkan semuanya dalam satu langkah ({{key:Mod+Z}} mengembalikannya).

Kumpulan yang memegang kekangan terlebih ditakrifkan terbuka sendiri, dengan namanya dalam merah. Dimensi sentiasa disenaraikan satu setiap baris, dengan nilainya.

Apabila geometri dipilih, senarai hanya menunjukkan **Kekangan pada pilihan**.
