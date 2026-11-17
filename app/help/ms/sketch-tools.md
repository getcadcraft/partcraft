---
title: Splin, pangkas, ofset dan alatan lakaran lain
summary: Lukis splin titik-lalu dan titik kawalan, pangkas dan panjangkan lengkung, ofset rantaian, cermin tentang garis pusat, tambah poligon dan slot, corakkan geometri lakaran dan unjurkan tepi model.
keywords: splin, titik lalu, titik kawalan, b-spline, nurbs, lengkung, pangkas, panjangkan, ofset, cermin, simetri, poligon, heksagon, slot, corak, corak linear, corak bulatan, unjur, unjurkan tepi, sertakan, tukar entiti
from: 3ecb166a
---

Alat ini berfungsi dalam lakaran terbuka. {{ui:Splin}} dan {{ui:Pangkas}} ada dalam bar alat. Yang lain berada di bawah {{ui:Lagi}} di hujung alat lakaran. Setiap alat ialah satu langkah buat asal, dan {{key:Esc}} menghentikannya. Untuk alat lukisan asas lihat [Lukis lakaran pertama anda](topic:sketch-basics).

## Splin

Splin ialah lengkung licin. Terdapat dua jenis.

| Alat | Kekunci | Cara melukis |
|---|---|---|
| {{ui:Splin}} | {{key:B}} | Klik titik yang dilalui lengkung. Tamatkan dengan {{key:Enter}}, {{key:Esc}}, klik kanan atau klik dua kali. Klik titik pertama sekali lagi untuk menutup splin |
| {{ui:Splin titik kawalan}} (di bawah {{ui:Lagi}}) | | Klik titik kawalan. Lengkung ditarik ke arahnya tetapi hanya menyentuh titik pertama dan terakhir. Poligon kawalan putus-putus ditunjukkan semasa anda melukis dan selepas itu |

- **Titik ialah titik lakaran.** Seret, atau berikan kekangan dan dimensi seperti mana-mana titik lain. Titik pertama splin boleh snap ke hujung garisan, yang menyambungkannya dengan kekangan koinsiden.
- **Tangen pada hujung.** Pilih garisan, lengkok atau splin yang bertemu satu hujung splin, dan splin, kemudian pilih {{ui:T Tangen}}. Arah hujung splin kemudian mengikut garisan. Tangen jauh dari hujung splin ditolak: "Tangen kepada splin memerlukan garisan, lengkok atau splin yang bertemu satu hujungnya."
- **Hujung.** Tanpa kekangan tangen, hujung splin titik-lalu ialah semula jadi (tiada kelengkungan di hujung paling akhir). Lengkung ialah kubik dan melalui setiap titik, dengan jaraknya ditetapkan oleh jarak antara titik.
- **Splin tertutup** membentuk profilnya sendiri. Splin terbuka menyambungkan garisan dan lengkok ke dalam gelung tertutup seperti lengkung lain.
- Memadam titik di dalam splin membuang titik itu dan mengekalkan splin, selagi ia masih mempunyai sekurang-kurangnya dua titik (tiga jika tertutup).

Ekstrud dan putar membina splin dengan kernel jejaring daripada kepingan garisan lurus pendek (lengkung sebenar memerlukan kernel tepat: belum dibina dalam versi ini). Eksport DXF menulis splin sebagai polyline yang kekal dalam 0.01 mm dari lengkung, kerana DXF R12 tiada entiti splin.

## Pangkas dan panjangkan

| Alat | Kekunci | Cara |
|---|---|---|
| {{ui:Pangkas}} | {{key:T}} | Tunjuk lengkung: bahagian yang akan pergi ditunjukkan merah, sehingga persilangan terdekat. Klik untuk membuangnya. Lengkung yang tidak menyilang apa-apa dibuang sepenuhnya |
| {{ui:Panjangkan}} (di bawah {{ui:Lagi}}) | {{key:E}} | Klik garisan atau lengkok berhampiran hujung untuk dipanjangkan. Ia tumbuh ke lengkung seterusnya yang ditemuinya. "Tiada apa untuk hujung itu dicapai." apabila tiada apa yang menghalang |

Pangkas dan Panjangkan berfungsi pada garisan, lengkok, bulatan dan splin (Panjangkan: garisan dan lengkok sahaja).

- **Bulatan** yang dipangkas menjadi lengkok. Dimensi jejari atau diameternya berpindah ke lengkok.
- Memangkas bahagian tengah garisan meninggalkan dua garisan yang kekal pada garis lurus yang sama. Memangkas bahagian tengah lengkok meninggalkan dua lengkok dengan pusat yang sama dan kekangan sama.
- **Splin** yang dipangkas menjadi splin titik kawalan yang mengikut lengkung lama dengan tepat. Kekangan tangen pada hujung yang dikekalkan tetap.
- Hujung baharu diletakkan pada lengkung yang memotongnya (pada garisan, lengkok atau bulatan, atau bersama hujungnya). Splin tidak boleh memegang titik, jadi splin yang memotong tidak menambah kekangan.

**Kekangan yang tidak lagi sesuai dibuang**, dan bar status memberitahu berapa banyak. Contohnya, dimensi panjang pada garisan yang dipangkas dibuang, tetapi kekangan mengufuk atau selari kekal.

## Ofset

1. Pilih {{ui:Ofset}} di bawah {{ui:Lagi}} atau tekan {{key:O}}.
2. Klik garisan, lengkok, bulatan atau splin. Keseluruhan rantaiannya diserlahkan: semua lengkung yang bercantum hujung ke hujung, sehingga satu titik tempat tiga atau lebih bertemu. Untuk ofset hanya sebahagian rantaian, pilih lengkung itu dahulu, kemudian pilih Ofset dan klik salah satu daripadanya.
3. Gerakkan penunjuk ke sisi tempat salinan pergi. Pratonton putus-putus mengikut. Tekan {{key:B}} untuk kedua-dua sisi.
4. Klik, taip jarak, dan tekan {{key:Enter}}.

Garisan dan lengkok diofset dengan tepat. Bucu dipanjangkan atau dipangkas sehingga bertemu. Salinan mempunyai satu dimensi **Ofset**, dan bahagian lain mengikutinya: klik dua kali dimensi untuk menukar keseluruhan salinan. Jarak yang terlalu besar untuk rantaian ditolak, contohnya "Jarak itu terlalu besar untuk rantaian ini: satu sisi akan terbalik ke dalam."

**Splin** diofset oleh splin titik-lalu baharu dalam lingkungan 0.001 mm daripada ofset sebenar. Salinan ini tetap: ia tidak mengikut perubahan kemudian, dan tiada dimensi Ofset. Splin dalam rantaian memerlukan sambungan licin (tangen) pada hujungnya.

## Cermin

1. Dengan Pilih, pilih apa yang hendak dicerminkan.
2. Pilih {{ui:Cermin}} di bawah {{ui:Lagi}} atau tekan {{key:M}}.
3. Klik garisan atau garis pusat untuk dicerminkan tentangnya.

Setiap titik yang dicerminkan mendapat kekangan **Simetri** dengan asalnya, supaya salinan mengikut apabila asal berubah. Titik yang berada di garisan cermin dikongsi, dan bulatan yang dicerminkan mendapat kekangan Sama. Jika tiada apa dipilih, klik item untuk dicerminkan, tekan {{key:Enter}}, kemudian klik garisan cermin.

## Poligon dan slot

| Alat | Cara |
|---|---|
| {{ui:Poligon}} | Klik pusat, kemudian satu bucu, kemudian taip bilangan sisi (3 hingga 64). Sisi-sisinya sama dan bucunya berada pada bulatan binaan. Dimensikan bulatan itu untuk menentukan saiz poligon |
| {{ui:Slot}} | Klik pusat satu hujung, kemudian pusat hujung satu lagi, kemudian klik untuk menetapkan lebar. Dua garisan, bertangen kepada dua separuh bulatan yang sama |

## Corak lakaran

Pilih geometri dahulu, kemudian:

- {{ui:Corak linear}}: klik titik mula, kemudian tempat salinan pertama pergi, kemudian taip bilangan salinan (termasuk asal).
- {{ui:Corak bulatan}}: klik pusat, kemudian taip bilangan salinan, tersebar sama rata sepusingan penuh.

Salinan membawa kekangan antara geometri yang dipilih bersama mereka (corak bulatan tidak menyertakan kekangan mengufuk dan menegak). Salinan tidak dipautkan kepada asal: tukar satu, dan yang lain kekal seperti sedia ada.

## Unjurkan tepi bahagian

1. Pilih {{ui:Unjurkan tepi}} di bawah {{ui:Lagi}}.
2. Klik tepi lurus atau bulat bagi bahagian di belakang lakaran.

Tepi disalin ke satah lakaran dengan tepat dan ditetapkan (kekangan Tetap). Ia tidak mengikut perubahan kemudian pada bahagian. Tekan {{key:Q}} untuk menjadikannya geometri binaan. Bulatan yang condong kepada satah lakaran akan terunjur sebagai elips, jadi ia ditolak. Begitu juga tepi bentuk bebas dan tepi yang menuding lurus keluar dari lakaran. Mengunjurkan memerlukan kernel tepat: ia belum dibina dalam versi ini.
