---
title: Pandu bahagian dengan parameter
summary: Namakan saiz yang penting (lebar, ketebalan, saiz bolt), pautkan mana-mana nombor ciri atau dimensi lakaran kepadanya dengan =, dan ubah keseluruhan bahagian daripada satu jadual.
keywords: parameter, di mana digunakan, digunakan oleh, pembolehubah sejagat, pembolehubah, persamaan, niat reka bentuk, dimensi pemacu, pautan, ungkapan, formula, namakan dimensi, nilai berpaut
from: 58c646ea
---

Parameter ialah nombor yang dinamakan, seperti `width = 120` atau `margin = bolt * 1.5`. Pautkan kedalaman, diameter lubang, bilangan corak, atau dimensi lakaran kepadanya, dan menukar parameter itu akan menukar semuanya dalam satu langkah. Inilah cara anda menyimpan niat reka bentuk dalam bahagian, bukan dalam kepala anda.

## Tambah parameter

1. Dalam panel kanan, klik tab {{ui:Parameter}}.
2. Di bawah **Pembolehubah**, taip nama dalam kotak "nama", contohnya `width`.
3. Taip nilainya dalam kotak seterusnya, contohnya `120`, dan tekan {{key:Enter}} (atau klik {{ui:Tambah}}).

Nilai boleh menjadi nombor atau ungkapan parameter lain: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Lajur **Nilai** menunjukkan hasil pengiraannya. Nama bermula dengan huruf atau `_` dan hanya mengandungi huruf, digit dan `_`; nama fungsi dan unit (`sin`, `mm`, `pi`) ditolak, begitu juga gelung seperti `a = b` dengan `b = a`.

## Pautkan nombor kepada parameter

1. Klik satu ciri dalam sejarah, contohnya "Extrude1". Tetapannya dipaparkan pada tab {{ui:Sifat}}.
2. Dalam kotak nombor, seperti **Kedalaman (mm)**, taip `=` dan satu ungkapan: `=thick` atau `=width / 4`.
3. Tekan {{key:Enter}}.

Kotak itu kini menunjukkan hasilnya, dan butang **ƒ** muncul di sebelah labelnya. Halakan penunjuk padanya untuk melihat persamaan. Dimensi lakaran berfungsi dengan cara yang sama, sama ada dalam senarai **Dimensi lakaran** bagi ciri atau dalam kotak dimensi lakaran yang terbuka (klik dua kali pada dimensi, taip `=width`, tekan {{key:Enter}}).

Nombor yang boleh dipautkan: kedalaman ekstrud, sudut putar, diameter lubang, kedalaman dan saiz kiraan balik, bilangan corak, jarak dan sudut, jejari fillet, jarak chamfer, ketebalan dinding shell, setiap dimensi lakaran, dan saiz ciri yang lebih baharu (kedalaman kedua, taper, kiraan tirus, jarak satah rujukan, sudut cerun tarik dan lain-lain).

## Tukar parameter

Pada tab {{ui:Parameter}}, taip nilai atau ungkapan baharu dalam lajur **Ungkapan** dan tekan {{key:Enter}}. Setiap yang dipautkan kepadanya berubah dan bahagian dibina semula, sebagai satu langkah: {{key:Mod+Z}} membatalkannya.

Untuk menukar nombor dari hujung yang satu lagi, lihat [Persamaan dua hala](topic:equations-two-way).

## Lihat di mana parameter digunakan

Di bawah setiap parameter pada tab {{ui:Parameter}}, satu baris menyatakan apa yang menggunakannya:

- nombor yang dipacunya, seperti **Extrude1 depth** atau **Sketch1 D2 (distance)**. Klik satu untuk memilih ciri dan memaparkan sifatnya;
- nombor yang dipacunya **melalui** parameter lain, seperti **Hole1 diameter (through h, d)** apabila `d = h + 2` dan `h = w / 2`;
- **parameter** yang ungkapannya menggunakannya, **konfigurasi** yang menetapkannya, dan **skrip** yang membacanya (lihat [Tulis dan jalankan skrip](topic:craftscript)).

"Belum digunakan lagi." bermakna tiada apa yang menggunakannya: anda boleh memadamkannya tanpa bertanya.

## Nyahpaut, namakan semula, padam

- **Nyahpautkan nombor:** klik butang **ƒ**-nya, atau {{ui:Nyahpaut}} dalam senarai **Persamaan**. Ia mengekalkan nilai semasanya dan tiada parameter lagi mengubahnya.
- **Namakan semula parameter:** taip nama baharu dalam kotak **Nama**-nya. Setiap ungkapan yang menggunakannya ditulis semula.
- **Padam parameter:** klik × pada barisnya. Jika ada sesuatu yang menggunakannya, PartCraft bertanya sama ada hendak menulis nilai semasanya ke dalam ungkapan tersebut dahulu.
- **Memadam ciri** menggugurkan persamaan bagi nombornya; bar status menyatakan yang mana.

:::note
Parameter disimpan dalam fail `.partcraft.json` (sebagai versi fail 3). Bahagian tanpa parameter disimpan sama seperti sebelumnya.
:::

## Ungkapan

| Tulis | Maksudnya |
|---|---|
| `120`, `12.5`, `1e3` | satu nombor (milimeter, atau darjah bagi sudut) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | panjang dalam unit lain, ditukar kepada milimeter |
| `30deg`, `0.5rad` | satu sudut, ditukar kepada darjah |
| `+ - * / %` dan `^` | aritmetik; `^` ialah kuasa, `-2^2` ialah −4 |
| `sin cos tan asin acos atan atan2` | trigonometri dalam darjah |
| `sqrt pow exp ln log abs sign` | fungsi lain |
| `ceil floor int round(x, digits) min max` | pembundaran dan had |
| `if(test, a, b)` dengan `< <= > >= == !=` | satu pilihan: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Nama bersifat sensitif huruf besar-kecil: `Width` dan `width` ialah dua parameter.

Lihat juga [Konfigurasi dan jadual reka bentuk](topic:design-tables) dan [Skrip dan baris arahan](topic:scripts-and-cli).
