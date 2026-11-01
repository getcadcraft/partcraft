---
title: Fail: buka, simpan dan eksport
summary: Fail bahagian dan himpunan yang PartCraft buka dan simpan, setiap format eksport dan apa yang dikekalkannya, tempat fail pergi, dan apa yang berubah semasa luar talian atau antara pelayar.
keywords: buka, simpan, eksport, muat turun, fail, partcraft.json, fail himpunan, stl, 3mf, step, dxf, pdf, di mana fail saya, luar talian, simpan sebagai
from: c15c2c48
---

PartCraft berfungsi pada fail di komputer anda. Ia tidak sekali-kali memuat naik bahagian, dan tiada akaun atau storan awan terlibat. Storan awan belum tersedia lagi.

## Apa yang PartCraft buka

| Fail | Sambungan | Cara |
|---|---|---|
| Bahagian PartCraft | `.partcraft.json` | {{ui:Buka}}, {{key:Mod+O}}, atau lepaskannya pada paparan 3D |
| Himpunan PartCraft | `.partcraft-asm.json` | Sama: PartCraft mengenal pasti jenisnya |
| Pepejal STEP | `.step`, `.stp` | Jasad pepejal yang dibaca sebagai segi tiga: [Buka fail STEP dan bina di atasnya](topic:import-step) |

Jejaring STL, OBJ dan 3MF juga dibuka sebagai jasad pepejal ([Buka STL, OBJ atau 3MF](topic:open-meshes)), begitu juga fail `.3dm` ([Buka model .3dm](topic:open-3dm-files)). Fail DXF, IGES dan fail bahagian asal program lain tidak boleh dibuka (lihat [Apa yang belum dibina](topic:not-built-yet)).

Peraturan semasa membuka:

- Nama fail bahagian atau himpunan mesti berakhir dengan `.json`, dan fail mesti kurang daripada 50 MB.
- Fail disemak sebelum apa-apa dipaparkan. Fail yang rosak atau diedit ditolak dengan sebab yang ringkas, contohnya "Ini bukan fail PartCraft."
- Fail yang disimpan oleh PartCraft yang lebih baharu ditolak: "Fail ini disimpan oleh PartCraft yang lebih baharu (versi fail 3); yang ini membaca versi 2." Fail lama tetap dibuka.
- Jika bahagian pada skrin mempunyai perubahan yang belum disimpan, PartCraft bertanya dahulu: {{ui:Batal}}, {{ui:Buang perubahan}} atau {{ui:Simpan dahulu}}.

## Menyimpan

{{ui:Simpan}} atau {{key:Mod+S}} menyimpan apa yang ada pada skrin:

- Pada bahagian: `<nama bahagian>.partcraft.json`, sejarah lengkap (lakaran, hubungan, dimensi, ciri, kedudukan gulung balik), bahagian keratan, perincian dan nota GD&T helaian lukisan, dan teks penuh mana-mana pepejal STEP yang diimport dalam binaan terdahulu. Ciri yang versi ini tidak dapat bina disimpan semula tanpa perubahan. Pepejal itu sendiri tidak disimpan; PartCraft membinanya semula daripada sejarah apabila fail dibuka.
- Dalam himpunan: `<nama himpunan>.partcraft-asm.json`, dengan **setiap bahagian di dalamnya**. Satu fail membawa keseluruhan himpunan, jadi anda boleh menghantarnya sendiri.

Menyimpan ialah **muat turun**. Pelayar anda meletakkan fail dalam folder muat turunnya, atau bertanya di mana hendak meletakkannya jika anda menetapkannya untuk bertanya. Menyimpan semula mencipta muat turun baharu; pelayar mungkin menamakannya `Part1 (1).partcraft.json` dan bukannya menggantikan fail lama. Namakan semula atau alihkan fail dalam {{pick:mac=Finder|windows=File Explorer|linux=pengurus fail anda}} mengikut kehendak anda.

Aksara selain huruf, digit, ruang, `_`, `.` dan `-` dalam nama bahagian menjadi `_` dalam nama fail.

:::tip
Kebanyakan pelayar mempunyai tetapan untuk bertanya di mana setiap muat turun hendak disimpan. Hidupkannya jika anda mahu pilihan "Simpan sebagai" setiap kali: dalam Chrome dan Edge ia berada di bawah Downloads dalam tetapan; dalam Firefox di bawah General, Files and Applications; dalam Safari di bawah General, File download location.
:::

Maklumat lanjut tentang tempat muat turun pergi dan cara memastikan fail selamat: [Di mana fail anda pergi](common:your-files).

## Eksport

Menu {{ui:Eksport}} menulis format lain. Setiap satu ialah muat turun, dinamakan mengikut bahagian.

| Item menu | Fail | Kandungan |
|---|---|---|
| {{ui:STL, untuk percetakan 3D}} | `<name>.stl` | STL binari bagi segi tiga pepejal, milimeter, **Z ke atas** |
| {{ui:3MF, untuk percetakan 3D}} | `<name>.3mf` | 3MF dengan pepejal sebagai satu objek, milimeter, **Z ke atas** |
| {{ui:STEP AP242 (pepejal tepat)}} | `<name>.step` | Belum dibina dalam versi ini (malap): ia memerlukan kernel tepat |
| {{ui:STEP AP214 (pepejal tepat)}} | `<name>.step` | Belum dibina dalam versi ini (malap) |
| {{ui:STEP (berfaset, kernel jejaring)}} | `<name>.step` | Pepejal yang terdiri daripada muka rata daripada jejaring: **permukaan bulat ialah banyak faset kecil yang rata**. Milimeter, dalam paksi PartCraft sendiri (Y ke atas). STEP yang digunakan untuk program CAD lain dalam versi ini |
| {{ui:DXF bagi lakaran atau muka rata}} | `<name> - <sketch>.dxf` atau `<name> - face.dxf` | DXF R12. Lakaran: garisan, lengkok, bulatan dan titik dalam koordinat lakaran itu sendiri, pada lapisan PROFILE, CONSTRUCTION dan POINTS. Muka rata yang dipilih: garis luarnya sebagai polygaris tertutup (tepi bulat sebagai faset) |
| {{ui:Lukisan (PDF): paparan, keratan, perincian, GD&T}} | `<name> - drawing.pdf` | Helaian lukisan A3: tiga paparan, isometrik, keratan dan perincian jika ditetapkan, saiz keseluruhan, simbol GD&T, blok tajuk |

:::note
{{ui:STEP AP242 (pepejal tepat)}} dan {{ui:STEP AP214 (pepejal tepat)}} belum dibina dalam versi ini: gunakan {{ui:STEP (berfaset, kernel jejaring)}}. Ia mempunyai bentuk dan isipadu yang betul, tetapi setiap muka bulat ialah banyak muka rata kecil, jadi program lain tidak boleh memilih lubang sebagai silinder. Tetapkan **Lengkung** lebih halus dahulu jika itu penting.
:::

- Eksport ialah bahagian yang ada pada skrin. Eksport dimatikan dalam himpunan; belum ada eksport himpunan.
- STL, 3MF, STEP berfaset dan DXF muka sentiasa dibuat daripada faset. Tetapan **Lengkung** (dalam panel kanan apabila tiada apa dipilih) menetapkan betapa halusnya, dari 32 hingga 256 faset setiap pusingan. Pilih Halus atau Sangat halus sebelum mengeksport STL atau 3MF untuk cetakan yang licin.
- Lukisan PDF menggunakan fon Helvetica terbina dalam pembaca. Aksara yang tidak dapat dipaparkan dicetak sebagai "?".

Langkah demi langkah: [Eksport untuk percetakan, STEP dan DXF](topic:export-files) dan [Buat helaian lukisan](topic:drawing-pdf).

## Kerja yang belum disimpan

- PartCraft menyimpan salinan pemulihan bagi bahagian atau himpunan yang dibuka dalam pelayar ini sejurus selepas setiap perubahan, supaya ranap atau tab yang ditutup tidak menghilangkannya: kali seterusnya anda membuka PartCraft ia bertanya "Pulihkan kerja anda?". Ia bukan simpanan: simpan ke fail untuk mengekalkan kerja anda. Lihat [Pulihkan kerja yang belum disimpan](common:recover).
- Jika anda cuba menutup tab atau memuat semula dengan perubahan yang belum disimpan, pelayar bertanya "Tinggalkan laman?". Itu kotak pelayar sendiri; PartCraft tidak boleh menukar ayatnya.
- {{ui:Baharu}}, {{ui:Buka}} dan menutup himpunan bertanya sebelum membuang perubahan yang belum disimpan.

## Dalam talian dan luar talian

Semuanya berlaku di komputer anda: kernel jejaring (program WebAssembly) dimuat turun bersama aplikasi dan membina geometri secara setempat, dan fail dibaca daripada serta ditulis ke cakera anda. Tiada data bahagian dihantar melalui rangkaian. Lihat [Kernel jejaring](topic:solid-kernels).

Untuk bekerja tanpa sebarang sambungan, simpan PartCraft untuk kegunaan luar talian semasa anda dalam talian: pilih {{ui:Simpan untuk luar talian}} dalam bar aplikasi dan tunggu semasa ia mengira ("Menyimpan 40 daripada 212") sehingga ia berkata **Sedia untuk luar talian**. Salinan yang disimpan termasuk pustaka 3D dan kernel jejaring, jadi selepas itu pemodelan, simpanan, setiap eksport dan lukisan semuanya berfungsi luar talian. Jika ia berkata **Tidak dapat disimpan**, klik untuk cuba lagi semasa dalam talian; **Luar talian tidak tersedia** bermakna tetingkap pelayar ini tidak boleh menyimpan salinan (tetingkap persendirian dan sesetengah komputer yang diurus). Dengan salinan disimpan, klik **Sedia untuk luar talian** menawarkan {{ui:Simpan semula (dapatkan versi terkini)}} dan {{ui:Alih keluar salinan luar talian}}. Butiran: [Bekerja luar talian](common:offline).

:::online
Anda dalam talian. Walaupun tanpa menyimpan untuk kegunaan luar talian, apabila PartCraft telah dimuat dan cip bar status berkata "Kernel jejaring", anda boleh terus bekerja jika sambungan terputus. Jangan muat semula halaman sehingga anda kembali dalam talian.
:::

:::offline
Anda luar talian. Jika PartCraft sudah dibuka, teruskan bekerja; menyimpan dan mengeksport masih berfungsi. Jika bar aplikasi berkata **Sedia untuk luar talian**, PartCraft juga dibuka dari awal tanpa sambungan; jika tidak, jangan muat semula tab ini.
:::

## Perbezaan antara pelayar

- **Muat turun.** Setiap pelayar mempunyai folder muat turunnya sendiri dan caranya sendiri untuk bertanya. Jika pelayar bertanya sama ada laman ini boleh memuat turun fail, benarkannya, atau simpanan dan eksport tidak akan berfungsi.
- **Seret dan lepas** fail ke paparan berfungsi dalam Chrome, Edge, Firefox dan Safari.
- **Fail daripada telefon atau tablet.** Pada iPhone dan iPad, Buka menunjukkan aplikasi Files; fail yang disimpan pergi ke Files, Downloads. Pada Android ia pergi ke folder Downloads.

Tiada perbezaan dalam kandungan fail antara pelayar atau sistem pengendalian.
