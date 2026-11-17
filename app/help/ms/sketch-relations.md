---
title: Kekangan dan dimensi lakaran
summary: Setiap kekangan dan dimensi yang dimiliki lakaran PartCraft, perkara yang perlu dipilih untuk setiap satu, simbolnya, dan tingkah lakunya semasa penyelesaian.
keywords: kekangan, koinsiden, mengufuk, menegak, selari, serenjang, tangen, sama, sepusat, titik tengah, tetap, jarak, jarak mengufuk, jarak menegak, jejari, diameter, sudut, simbol, glif
from: 9831e7be
---

Kekangan menetapkan kedudukan geometri berbanding geometri lain. Dimensi menetapkan saiz. Untuk menambah kekangan, pilih item dengan alat Pilih ({{key:S}}) dan pilih butangnya dalam panel kanan; untuk menambah dimensi, gunakan alat Dimensi ({{key:D}}) atau butang dimensi dalam panel kanan. Cara bekerja dengannya: [Takrifkan sepenuhnya lakaran](topic:relations-dimensions).

"Lengkung" di bawah bermaksud bulatan atau lengkok. Asalan dikira sebagai titik.

## Kekangan

| Butang | Simbol | Pilih | Kesan |
|---|---|---|---|
| {{ui:• Koinsiden}} | • (ditunjukkan hanya apabila dipilih atau bermasalah) | Dua titik | Titik-titik bertemu |
| {{ui:• Koinsiden}} | • | Satu titik dan satu garisan | Titik terletak pada garisan (atau sambungannya) |
| {{ui:• Koinsiden}} | • | Satu titik dan satu lengkung | Titik terletak pada bulatan atau lengkok |
| {{ui:H Mengufuk}} | H | Satu garisan, atau dua titik | Garisan rata, atau dua titik pada ketinggian yang sama |
| {{ui:V Menegak}} | V | Satu garisan, atau dua titik | Garisan tegak, atau titik-titik berada satu di atas yang lain |
| {{ui:∥ Selari}} | ∥ | Dua garisan | Garisan berjalan arah yang sama |
| {{ui:⊥ Serenjang}} | ⊥ | Dua garisan | Garisan bertemu pada sudut tegak |
| {{ui:T Tangen}} | T | Satu garisan dan satu lengkung | Garisan menyentuh lengkung tanpa menyilang |
| {{ui:T Tangen}} | T | Dua lengkung | Mereka bersentuhan, di luar atau di dalam, seperti yang dilukis |
| {{ui:T Tangen}} | T | Splin dan garisan, lengkok atau splin yang bertemu salah satu hujungnya | Splin meninggalkan hujung itu mengikut arah lengkung lain |
| {{ui:= Sama}} | = | Dua garisan | Panjang sama |
| {{ui:= Sama}} | = | Dua lengkung | Jejari sama |
| {{ui:◎ Sepusat}} | ◎ | Dua lengkung | Pusat sama |
| {{ui:◎ Sepusat}} | ◎ | Satu titik dan satu lengkung | Titik berada di pusat lengkung |
| {{ui:M Titik tengah}} | M | Satu titik dan satu garisan | Titik berada di tengah garisan |
| {{ui:↔ Simetri}} | ↔ | Dua titik dan satu garisan | Titik ialah imej cermin tentang garisan (Cermin menambah ini) |
| {{ui:⚓ Tetap}} | ⚓ | Satu titik, satu garisan, satu lengkung atau satu splin | Memegangnya tepat di tempat ia berada sekarang (splin: titiknya) |

Garisan di sini termasuk garis pusat. Lukisan menambah beberapa kekangan untuk anda: snap ke titik menjadikannya koinsiden, snap ke lengkung meletakkan titik padanya, garisan hampir mengufuk atau menegak mendapat H atau V, dan segi empat tepat datang dengan empat bucunya bercantum, dua H dan dua V.

**Tetap** ialah cara pantas untuk menghentikan sesuatu daripada bergerak, tetapi bahagian itu kemudian tidak boleh mengikut perubahan dimensi di tempat lain. Lebih baik gunakan dimensi kepada asalan.

## Dimensi

| Butang | Pilih | Mengukur | Dipaparkan sebagai |
|---|---|---|---|
| {{ui:Jarak}} | Satu garisan | Panjangnya | Jarak 40 |
| {{ui:Jarak}} | Dua titik | Jarak lurus antara keduanya | Jarak 40 |
| {{ui:Jarak}} | Satu titik dan satu garisan | Jarak dari titik ke garisan, bersudut tepat dengannya | Jarak 40 |
| {{ui:Jarak}} | Dua garisan selari | Jurang antara keduanya | Jarak 40 |
| {{ui:Jarak mengufuk}} | Dua titik, atau satu garisan | Jarak kiri-kanan sahaja | Jarak mengufuk 40 |
| {{ui:Jarak menegak}} | Dua titik, atau satu garisan | Jarak atas-bawah sahaja | Jarak menegak 40 |
| {{ui:Jejari}} | Satu bulatan atau lengkok | Jejarinya | Jejari R10 |
| {{ui:Diameter}} | Satu bulatan atau lengkok | Diameternya | Diameter ⌀20 |
| {{ui:Sudut}} | Dua garisan yang tidak selari | Sudut antara keduanya, 0 hingga 180 darjah | Sudut 30° |

Dengan alat Dimensi, PartCraft memilih jenis daripada apa yang anda klik dan di mana anda meletakkan nombor:

| Anda klik | Anda dapat |
|---|---|
| Satu garisan | Panjangnya; untuk garisan condong, mengufuk jika nombor berada di atas atau bawahnya, menegak jika di sisi |
| Satu bulatan | Diameter |
| Satu lengkok | Jejari |
| Dua titik | Jarak; mengufuk atau menegak seperti garisan condong |
| Satu titik dan satu garisan | Jarak dari titik ke garisan |
| Dua garisan | Sudut, atau jarak jika selari |
| Satu titik dan satu bulatan | Tiada apa: "Item-item itu tidak boleh didimensikan bersama." Dimensikan kepada titik pusat bulatan sebaliknya |

**Ofset** (ditunjukkan sebagai jarak) dibuat oleh alat Ofset: ia memegang garisan yang disalin selari pada jarak itu, atau lengkok atau bulatan yang disalin sepusat dengan jejari sebesar atau sekecil jarak itu. Bahagian lain bagi ofset yang sama membawa kekangan **O** dan mengikut satu dimensi Ofset itu. Lihat [Splin, pangkas, ofset dan alatan lakaran lain](topic:sketch-tools).

Nilai dimensi ialah milimeter (atau darjah), tidak pernah negatif. Jejari dan diameter mesti lebih besar daripada sifar. Nilai 0 dibenarkan untuk jarak: dua titik 0 jauh adalah koinsiden.

## Cara penyelesaian berkelakuan

- **Pergerakan paling sedikit.** Apabila nilai berubah, penyelesai mengalihkan geometri seminimum yang mungkin. Garisan yang panjangnya berubah akan membesar sama rata di kedua-dua hujung jika tiada apa menahan mana-mana hujung.
- **Tiada pembalikan.** Jarak dari titik ke garisan, jarak mengufuk dan menegak, sudut dan tangen mengingati sisi mana ia dibuat. Menukar nilai tidak pernah membalikkan geometri ke sisi lain.
- **Konflik membiarkan semuanya.** Jika kekangan saling bercanggah, lakaran kekal sama seperti sebelumnya dan yang bercanggah bertukar merah.
- **Kekangan berlebihan** (tersirat oleh yang lain) dinamakan dalam bar status ("sudah tersirat. Padamkannya.") dan ciri tetap dibina dengan amaran.
- **Sambungan tangen.** Di tempat lengkok fillet bertemu garisannya pada titik hujung yang dikongsi, tangen diselesaikan dalam bentuk yang kekal tertakrif dengan baik di situ, supaya fillet lakaran tidak dibaca sebagai berlebihan ditakrifkan.

## Belum tersedia

Kekangan kolinear, koradial dan tusukan; titik pada splin; dimensi terpacu (rujukan); dimensi ordinat dan panjang lengkok; persamaan antara dimensi. Gunakan Selari ditambah jarak 0 untuk garisan kolinear.
