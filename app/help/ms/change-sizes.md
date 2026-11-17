---
title: Tukar saiz tanpa membuka lakaran
summary: Pacu bahagian daripada nombor dalam panel kanan: dimensi lakaran, kedalaman, kiraan dan sudut, cara merancang bahagian supaya nombor yang betul memacunya, dan tempat parameter serta persamaan mengambil alih.
keywords: parameter, dimensi pemacu, niat reka bentuk, tukar saiz, persamaan, pemboleh ubah global, jadual reka bentuk, konfigurasi, ubah saiz, ubah suai dimensi
from: c2ae1a32
---

Setiap saiz dalam bahagian PartCraft ialah nombor yang boleh anda tukar kemudian: dimensi dalam lakarannya dan tetapan ciri-cirinya. Anda tidak perlu membuka lakaran untuk menukar dimensinya.

## Tukar dimensi lakaran daripada panel

1. Klik ciri dalam sejarah, contohnya "Extrude1".
2. Di bawah tetapan ekstrud sendiri, **Dimensi lakaran (Sketch1)** menyenaraikan setiap dimensi lakarannya: "Jarak", "Diameter", "Sudut (°)" dan sebagainya.
3. Taip nilai baharu dalam satu kotak dan tekan {{key:Enter}} atau {{key:Tab}}.

Lakaran menyelesaikan dengan nilai baharu, dan seluruh bahagian dibina semula. Memilih lakaran itu sendiri menunjukkan senarai yang sama sebagai **Dimensi pemacu**.

Jejari atau diameter mesti lebih daripada sifar, dan sudut berada antara 0 dan 180 darjah; bar status memberitahu anda jika tidak.

:::tip
Kotak yang mana satu? Kotak disenaraikan mengikut susunan dimensi dibuat. Jika anda tidak pasti, buka lakaran (klik dua kali padanya), klik dua kali dimensi pada kanvas, dan tukarnya di sana.
:::

## Taip nombor utama serta-merta

Pilih ciri dalam sejarah (atau hanya tambahnya) dan taip nombor: ia masuk ke kotak utama ciri, iaitu yang paling kerap anda tukar (**Kedalaman** Ekstrud, **Sudut** Revolusi, **Diameter** Lubang, **Kiraan** corak, **Jejari** Fillet, dinding Cangkerang). Tekan {{key:Enter}} untuk menetapkannya, atau {{key:Esc}} untuk mengekalkan yang lama. Menambah Ekstrud memberitahu bar status: "Extrude1 ditambah. Tukar nombornya di sebelah kanan, atau taip nombor sekarang untuk kedalamannya."

## Tukar nombor dalam sejarah

Baris setiap ciri dalam sejarah menunjukkan nombor utamanya di sebelah namanya: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Klik dua kali nombor (atau pilih baris dan tekan {{key:F2}}) dan kotak terbuka di situ. Taip nilai baharu dan tekan {{key:Enter}}; {{key:Esc}} mengekalkan yang lama. Ia berfungsi sama seperti kotak ciri di sebelah kanan: had yang sama, `=` untuk menaip persamaan seperti `=width/2`, dan satu langkah {{ui:Buat asal}}.

Pada Ekstrud, Lubang atau corak, klik dua kali di mana-mana pada baris membuka kotak. Pada Fillet, Chamfer, Cangkerang, Cerun tarik atau Benang, klik dua kali pada nama masih membawa kepada pemilihan tepi atau mukanya, jadi klik dua kali pada nombornya sendiri. Lakaran tiada nombor dalam baris: klik dua kali membuka lakaran.

## Seret dalam pandangan

Pilih Ekstrud dalam sejarah (atau klik ia dalam pandangan, kemudian barisnya) dan anak panah oren berdiri pada muka hujungnya, dengan kedalaman dalam kotak di sebelahnya. Seret anak panah: bahagian mengikut semasa anda menyeret, dan melepaskannya menetapkan kedalaman baharu sebagai satu langkah ({{key:Mod+Z}} mengembalikannya). Tekan {{key:Esc}} semasa menyeret untuk kembali ke tempat anda bermula. Kedalaman bergerak dalam langkah sepersepuluh saiznya: 1 mm pada ekstrud 25 mm, 0.1 mm pada yang 3 mm.

Revolusi mendapat anak panah melengkung di hujung pusingannya: seretnya mengelilingi paksi untuk menukar sudut, dalam darjah penuh dari 1° hingga 360°.

Atau klik ke dalam kotak di sebelah anak panah, taip nilai (atau `=` dan persamaan) dan tekan {{key:Enter}}. Tiada anak panah pada Ekstrud yang bersifat **Tembus semua** atau sehingga ke muka, atau pada nilai yang dipacu persamaan: tukar yang itu di sebelah kanan.

## Nombor yang memacu bahagian

| Di mana | Apa yang boleh anda tukar |
|---|---|
| Lakaran | Setiap dimensi: panjang, jarak, jejari, diameter, sudut |
| Ekstrud dan Potong | Kedalaman, syarat hujung, arah, timbul atau potong |
| Revolusi dan potongan putar | Sudut, paksi, timbul atau potong |
| Lubang | Diameter, kedalaman, tembus semua, diameter dan kedalaman kaunter |
| Fillet, Chamfer, Cangkerang | Jejari, jarak, ketebalan dan arah dinding, dan tepi atau muka mana |
| Lurus dan Bulat | Kiraan, jarak atau sudut, arah atau paksi |
| Bahagian | Lengkung (betapa halusnya bentuk bulat difasetkan) |
| Lukisan | Di mana keratan memotong, saiz dan skala perincian, nilai GD&T |

## Rancang bahagian supaya nombor yang betul memacunya

Nombor yang anda beri ialah yang boleh anda tukar. Beberapa tabiat memastikan perubahan kemudian berkelakuan dengan betul:

- **Dimensikan apa yang penting untuk kerja.** Jika lubang mesti kekal 15 mm dari tepi, dimensikan daripada tepi itu, bukan daripada asalan.
- **Takrifkan lakaran sepenuhnya.** Dengan itu perubahan hanya menggerakkan apa yang sepatutnya (lihat [Takrifkan lakaran sepenuhnya](topic:relations-dimensions)).
- **Gunakan hubungan untuk niat.** Sama pada dua lubang bermaksud satu diameter memacu kedua-duanya. Bentuk simetri: letakkan asalan pada garis pusat, atau gunakan Titik tengah.
- **Lakar pada muka yang dibuat oleh ciri.** Lakaran pada muka hujung ekstrud bergerak apabila kedalaman berubah.
- **Corak dan bukannya salin.** Satu lubang yang dicorakkan lapan kali mempunyai satu diameter untuk ditukar.

## Lebih daripada nombor tunggal

- **Satu nombor memacu beberapa:** gunakan parameter dan persamaan: [Pacu bahagian dengan parameter](topic:parameters).
- **Beberapa saiz bagi satu bahagian:** simpan setiap satu sebagai [konfigurasi](topic:design-tables); ia disimpan dalam fail bahagian.
- **Aritmetik dalam kotak nombor:** taip `=40/2` atau `=width / 2`. Itu menjadikannya persamaan; lihat [Persamaan dua hala](topic:equations-two-way).
- **Unit inci:** bahagian menunjukkan milimeter. Dalam kotak nombor dengan `=`, atau dalam parameter, `2in` ditukar kepada 50.8.

Lihat [Apa yang belum dibina](topic:not-built-yet).
