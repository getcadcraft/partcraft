---
title: Senarai bahagian, pandangan letupan dan alih bahagian
summary: Beri bahagian himpunan nombor, perihalan dan bahan, baca dan muat turun senarai bahan, buat pandangan letupan dengan langkah atau secara automatik, alih bahagian yang tidak bersambung dengan tangan, tetapkan had sambungan, dan eksport keseluruhan himpunan sebagai STL, 3MF atau senarai bahan.
keywords: bom, senarai bahan, senarai bahagian, nombor bahagian, bahan, ketumpatan, csv, pandangan letupan, letupkan, runtuhkan, garis jejak, alih bahagian, seret, gizmo, alih, putar, had sambungan, eksport himpunan, langkah himpunan, lukisan himpunan, belon
from: ebc9f6f3
---

Alat ini terdapat dalam panel kanan himpunan (lihat [Bina himpunan](topic:build-assembly)).

## Sifat bahagian

Pilih bahagian dalam senarai di sebelah kiri. Di bawah **Sifat bahagian**, tetapkan:

- **Nombor bahagian** (sehingga 40 aksara) dan **Perihalan** (sehingga 200).
- **Bahan**: bahan biasa dengan ketumpatannya, atau **Ketumpatan tersuai…** untuk menaip satu dalam g/cm³. Panel kemudian menunjukkan jisim bahagian itu.

Sifat ini tergolong pada bahagian, jadi setiap salinannya berkongsinya. Ia disimpan dalam fail himpunan.

## Senarai bahan

Dengan tiada apa dipilih ({{key:Esc}}), panel menunjukkan **Senarai bahan**: satu baris bagi setiap bahagian dengan nombor item, kuantiti (berapa salinan), nombor bahagian, nama, bahan dan jisimnya masing-masing. Nombor item mengikut susunan bahagian mula-mula muncul dalam senarai. Jisim menggunakan isipadu setiap bahagian (pepejal berfasaet yang dibina oleh kernel jejaring, sedikit rendah pada bahagian bulat) dan bahannya. Bahagian tanpa bahan tidak mempunyai jisim, dan maka tiada jumlah.

{{ui:Muat turun CSV}} menyimpan senarai sebagai fail CSV (juga **{{ui:Eksport}} › Senarai bahan (CSV)**). Ia dibuka dalam mana-mana hamparan; teks yang bermula dengan = atau + mendapat apostrof di hadapannya supaya hamparan tidak menjalankannya sebagai formula.

## Pandangan letupan

Pandangan letupan menarik bahagian berasingan untuk gambar. Ia tidak sekali-kali menukar sambungan atau kedudukan sebenar bahagian: menyimpan, semakan pertembungan dan eksport menggunakan kedudukan sebenar.

1. Dengan tiada apa dipilih, pilih {{ui:Pandangan baharu}} di bawah **Pandangan letupan**.
2. Di bawah **Tambah langkah**, tandakan bahagian yang digerakkan oleh langkah itu, pilih **Arah** (+X … −Z, normal bagi muka yang anda klik, atau **Seret anak panah dalam pandangan**) dan **Jarak**, kemudian {{ui:Tambah langkah}}. Dengan **Seret**, seret anak panah dan lepaskan: langkah itu mengambil arah dan jarak yang anda seret.
3. Tambah lebih banyak langkah. Ia dimainkan satu demi satu.
4. Seret peluncur antara **Dipasang** dan **Dipecahkan** untuk menganimasikan pandangan. Garisan jejak putus-putus memanjang dari kedudukan rehat setiap bahagian ke kedudukannya kini.

{{ui:Auto (jejari)}} mengalihkan setiap bahagian kecuali bahagian yang ditetapkan dari tengah himpunan. {{ui:Auto (sambungan)}} mengalihkan setiap bahagian yang bersambung (dengan segala yang bersambung di bawahnya) keluar sepanjang normal muka sambungannya. Anda boleh menyimpan beberapa pandangan bernama; pilih satu dalam **Pandangan**, atau **Dipasang** untuk mengembalikan bahagian. Pandangan disimpan dalam fail himpunan.

## Alih bahagian dengan tangan

Hanya bahagian tanpa sambungan ke bahagian yang ditetapkan boleh digerakkan dengan tangan (bahagian yang ditetapkan kekal tetap; sambungan meletakkan yang lain). Pilih bahagian itu dan, di bawah **Alih dengan tangan**:

- Taip **ΔX, ΔY, ΔZ** dan pilih {{ui:Alih}}, atau pilih paksi dan **Sudut**, kemudian {{ui:Putar}} (tentang tengah bahagian).
- {{ui:Seret untuk mengalih}} menunjukkan anak panah pada bahagian: seret anak panah untuk bergerak sepanjang paksi itu, atau segi empat kecil untuk bergerak dalam satah. {{ui:Seret untuk memutar}} menunjukkan gelung untuk memutarnya. Setiap seretan ialah satu langkah {{ui:Buat asal}}. {{key:Esc}} menyembunyikan anak panah.

## Had sambungan

Pilih sambungan yang bergerak dan, di bawah **Had**, tandakan **Tahan … antara had** untuk mana-mana nilainya, kemudian tetapkan **Minimum** dan **Maksimum**. Setiap nilai dikekalkan dalam had sendiri, peluncurnya meliputi julat itu sahaja, dan {{ui:Semak pergerakan untuk pertembungan}} hanya menyapu antara had tersebut. Sambungan silinder boleh mengehadkan sudutnya, ofsetnya atau kedua-duanya. Menukar jenis sambungan akan membuang had bagi nilai yang tidak dimiliki oleh jenis baharu.

## Eksport keseluruhan himpunan

Dalam himpunan, menu **{{ui:Eksport}}** menulis keseluruhan himpunan dengan setiap bahagian di tempat ia diletakkan:

- **STEP AP242 / AP214** dan **{{ui:Lukisan}} (PDF)** belum dibina dalam versi ini: ia memerlukan kernel tepat, jadi ia dimalapkan. Eksport STEP setiap bahagian (pepejal tepat) dari bahagian itu sebaliknya.
- **STL**: satu jejaring bagi semua bahagian. **3MF**: setiap bahagian sekali, diletakkan sekali bagi setiap salinan.
- **Senarai bahan (CSV)**.

## Had

- Lukisan himpunan dan STEP himpunan belum dibina dalam versi ini (ia memerlukan kernel tepat). Pandangan letupan adalah untuk gambar pada skrin.
