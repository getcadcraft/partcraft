---
title: Satah, paksi dan titik rujukan
summary: Buat satah yang diofset dari muka, pada sudut, melalui tiga titik, di tengah, tangen kepada silinder, serenjang dengan tepi atau melalui tepi dan titik; paksi; titik di tengah tepi, persilangan dan bucu satah; lakar padanya dan gunakan sebagai paksi putaran, arah corak dan satah cermin.
keywords: datum, antara objek, titik tengah, titik persilangan, satah melalui tepi dan titik, satah rujukan, satah kerja, satah pembinaan, satah datum, satah ofset, satah pada sudut, satah tengah, satah tangen, paksi rujukan, paksi pembinaan, paksi datum, titik rujukan, titik kerja, lakaran pada satah
from: e7eb6fc1
---

Geometri rujukan ialah perancah tempat anda membina ciri: **satah** untuk melakar di mana tiada muka, **paksi** untuk memutar atau mencorak mengelilinginya, **titik** untuk menghentikan ekstrud. Ia tidak mempunyai bahan sendiri. Satah dipaparkan dalam paparan sebagai segi empat sama pucat, paksi sebagai garis putus-putus, titik sebagai silang kecil; ketiga-tiganya disertakan dalam sejarah dan mengikut apa yang dibuat daripadanya apabila anda menukar saiz di hulu.

Ia terdapat dalam menu {{ui:Lagi}} kumpulan Ciri: {{ui:Satah}}, {{ui:Paksi}}, {{ui:Titik}}.

## Buat satah

1. Klik muka rata, atau satah asas dalam sejarah, untuk bermula daripadanya (pilihan).
2. Pilih {{ui:Lagi}}, kemudian {{ui:Satah}}. Ia bermula sebagai satah ofset 20 % daripada saiz bahagian dari apa yang anda pilih (atau dari satah atas).
3. Dalam panel kanan, pilih **Jenis** dan rujukannya:

| Jenis | Rujukan | Nombor |
|---|---|---|
| Ofset dari satah atau muka | **Dari satah** | **Jarak (mm)**, negatif untuk sisi yang satu lagi |
| Pada sudut, melalui tepi atau paksi | **Dari satah**, **Pusing sekitar** (paksi dunia, ciri paksi, atau tepi lurus yang dipilih) | **Sudut (°)** |
| Melalui tiga titik | **Titik 1**, **Titik 2**, **Titik 3** | — |
| Satah tengah antara dua | **Satah pertama**, **Satah kedua** (selari: separuh jalan; bertemu: satah yang membahagi dua sudut) | — |
| Tangen kepada silinder | **Silinder** (muka silinder), **Titik berhampiran** (sebelah mana) | — |
| Serenjang dengan tepi, pada titik | **Tepi**, **Pada titik** (satah melalui titik tepi yang terdekat dengannya, dan juga melalui titik itu) | — |
| Melalui tepi dan titik | **Tepi lurus** (atau paksi), **Melalui titik** | — |
| Serenjang dengan tepi di tengahnya | **Tepi** (separuh jalan sepanjangnya, serenjang dengannya di situ), atau tanpa tepi **Titik 1** dan **Titik 2** (satah separuh jalan antara keduanya) | — |

Setiap rujukan mempunyai butang **Pilih**: pilih, kemudian klik dalam paparan. Slot satah menerima satah asas, satah rujukan atau muka rata; slot titik menerima hujung tepi (klik berhampiran hujung itu), ciri titik, atau tempat pada muka; slot tepi menerima tepi. {{key:Esc}} membatalkan pilihan. **Balikkan normal** membalikkan satah (ke arah mana lakaran di atasnya menghadap).

Dalam versi ini, slot yang memerlukan tepi atau muka silinder (Tangen kepada silinder, dan slot Tepi) menjawab "belum dibina": gunakan titik atau paksi sebagai gantinya.

## Lakar pada satah

Pilih satah (dalam sejarah atau dengan mengklik segi empatnya dalam paparan) dan pilih {{ui:Lakaran}}, atau **Lakar padanya** dalam panelnya. Lakaran mengikut satah: tukar jarak satah dan lakaran, dan setiap ciri padanya, turut bergerak.

## Paksi dan titik

- {{ui:Paksi}}: melalui dua titik, paksi silinder atau kon, tempat dua satah bertemu, sepanjang tepi lurus (atau paksi tepi bulatan), atau serenjang dengan muka melalui titik.
- {{ui:Titik}}: pada koordinat, pada bucu atau titik lakaran, atau di pusat tepi bulatan, serta titik "antara objek":

| Jenis titik | Rujukan |
|---|---|
| Tengah tepi (atau antara dua titik) | **Tepi** (separuh jalan sepanjangnya, juga untuk lengkok dan lengkung), atau tanpa tepi **Titik 1** dan **Titik 2** |
| Tempat tepi atau paksi bertemu muka atau satah | **Tepi** (lurus atau melengkung) atau paksi, dan **Bertemu satah** (satah atau muka rata) atau **Atau muka** (muka rata atau silinder). Bulatan merentasi satah dua kali dan garis melalui silinder dua kali: **Persilangan lain** mengambil yang kedua |
| Tempat tiga satah bertemu | **Pertama**, **Kedua** dan **Satah ketiga** (satah atau muka rata) |

Setiap satu gagal dengan mesej ringkas apabila rujukannya tidak sesuai: garis selari dengan satah, garis yang tidak mengenai silinder, tepi yang tidak sampai ke satah, tiga satah yang tidak bertemu pada satu titik, titik pada garis yang sepatutnya menetapkan satah dengannya.

Gunakannya dalam ciri lain:

| Di mana | Cara |
|---|---|
| Putar | **Paksi**: pilih ciri paksi dari senarai (ia mesti terletak dalam satah lakaran) |
| Corak bulatan | **Paksi**: ciri paksi |
| Corak linear | **Arah**: ciri paksi, atau satah (normalnya) |
| Cermin | **Satah cermin**: satah rujukan |
| Ekstrud | **Hujung**: Sehingga muka atau satah, Sehingga bucu (ciri titik). Belum dibina dalam versi ini (ia memerlukan kernel tepat) |
| Cerun tarik | **Satah neutral** |

## Apabila rujukan hilang

Satah yang dibuat daripada muka yang tidak lagi wujud gagal dengan mesej yang menamakannya, contohnya "Muka tempat ia terletak telah hilang daripada Extrude1." Ia tidak sekali-kali dialihkan ke muka lain. Lakaran dan ciri padanya ditandakan "belum dibina" sehingga anda memilih rujukan baharu; selebihnya bahagian kekal seperti asalnya.

:::note
Versi ini membina setiap bahagian dengan kernel jejaring, yang menghasilkan satah, paksi dan titik daripada satah asas, muka rata yang dibuat oleh Ekstrud atau Putar, titik lakaran, koordinat dan ciri rujukan lain. Apa-apa yang memerlukan tepi, hujung tepi atau muka melengkung memerlukan kernel tepat: belum dibina dalam versi ini ("Ia menggunakan muka atau tepi pepejal, yang hanya kernel tepat boleh cari: belum dibina dalam versi ini.").
:::
