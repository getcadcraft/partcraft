---
title: Semak bingkai ini
summary: Ambil ahli keluli bagi kimpalan (sled, tegak, bingkai tiub dan seksyen), letakkan peralatan di atas kakinya dan penyokong di atas lantai, dan lihat berapa banyak setiap ahli dan setiap kimpalan digunakan di bawah AISC 360-16 atau EN 1993. Alat bantu sehingga jurutera menyemaknya.
keywords: bingkai, kimpalan, sled, sled pam, ahli struktur, kimpalan, kimpalan, semak, AISC 360, EN 1993, penggunaan, utilisasi, penyokong, peralatan, beban, seksyen berongga, HSS, RHS, CHS, jurutera
from: 032e34ee
---

{{ui:Check this frame}} mengambil ahli keluli lurus bagi kimpalan, membina bingkai daripadanya, menyelesaikannya di bawah berat keluli dan peralatan yang anda letakkan padanya, dan menguji setiap ahli dan setiap kimpalan tempat ahli bertemu. Satu larian, satu jadual.

:::warning
Ia ialah **alat bantu sehingga jurutera menyemaknya**. Ia bukan meterai pengesahan, dan lulus bukanlah reka bentuk. Ia menggunakan garis pusat ahli seperti yang dilukis, menganggap setiap sambungan dikimpal sepanjang keratan, mengambil kaki fillet daripada dinding seksyen (sehingga 8 mm) melainkan anda menetapkannya, dan tidak menyemak bolt, plat, plat tapak, angkur, galas, ricih blok, lesu atau angkat.
:::

## Jalankan

1. Lukis ahli dengan {{ui:Structural member}} (seksyen datang dari jadual seksyen).
2. Buka {{ui:Views}} › {{ui:Check this frame}}. Nyatakan di mana bingkai berdiri (**penyokong** di setiap kaki: dipasak, tetap atau penggelek; {{ui:Pinned supports at the feet}} meletakkan satu pada setiap hujung ahli terendah) dan apa yang berada di atasnya (**peralatan**: jisim, pusat graviti, titik tempat ia dibolt ke bawah, dan tolakan mendatar pilihan).
3. Pilih kod: **ASCE 7 + AISC 360-16** atau **EN 1990 + EN 1993**. Tetapkan gred keluli dan, untuk AISC, kekuatan logam kimpalan (482.6 MPa ialah E70).
4. Tekan {{ui:Check}}. {{ui:Save the report as CSV}} menulis setiap jadual, dengan baris belum disemak di hadapan.

Bingkai dibaca dalam milimeter dengan paksi menegak bahagian menghala ke atas. Penyokong dan titik peralatan ditaip sebagai x y z dalam bingkai yang sama, dengan z ialah ketinggian.

Hujung ahli yang jatuh di tengah ahli lain memecahkannya di situ, begitu juga kaki atau titik bolt-bawah pada garisan ahli. Berat dikongsi merentasi titik bolt-bawah sebagai jasad tegar; pusat graviti di luar kaki, atau daya angkat pada kaki, dinyatakan dan tidak sekali-kali disembunyikan.

## Apa yang anda dapat

- Item yang paling banyak digunakan dan sama ada apa-apa gagal. Item yang tidak dapat dinilai oleh semakan (seksyen yang tiada dalam jadual, atau keluli tanpa faktor dalam kod) dikira dan dinamakan, dan tidak sekali-kali dikira lulus.
- Satu baris bagi setiap ahli dan setiap kumpulan kimpalan: berapa banyak digunakan, semakan yang mengawal dan klausanya, serta gabungan beban yang mengawal.
- Jadual yang sama dalam laporan.

## Apa yang diperiksa

Seksyen berongga (RHS, SHS, CHS, paip) dan seksyen I bagi tegangan, mampatan, lenturan, ricih dan interaksinya; kimpalan fillet dan penembusan penuh dengan kaedah vektor elastik. Dinding padat dalam lenturan hanya bagi seksyen berongga; dinding langsing dinyatakan sebagai tidak diperiksa. Sesetengah pemalar ditulis daripada piawaian dan belum dibandingkan dengan salinan bercetak; laporan menyenaraikan setiap sumber.

Lihat [Bingkai daripada seksyen keluli](topic:structural-members) untuk melukis ahli dan senarai potongannya.
