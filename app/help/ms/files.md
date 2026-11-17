---
title: Fail: buka, simpan dan eksport
summary: Fail bahagian dan himpunan yang dibuka dan disimpan PartCraft, setiap format eksport dan apa yang dikekalkannya, di mana fail disimpan, dan apa yang berubah secara luar talian atau antara pelayar.
keywords: buka, simpan, eksport, muat turun, fail, partcraft.json, fail himpunan, stl, 3mf, step, dxf, pdf, di mana fail saya, luar talian, simpan sebagai
from: e5fbc7e3
---

PartCraft berfungsi pada fail di komputer anda. Ia tidak pernah memuat naik bahagian, dan tiada akaun atau storan awan yang terlibat. Simpanan awan belum tersedia lagi.

## Apa yang PartCraft buka

| Fail | Sambungan | Cara |
|---|---|---|
| Bahagian PartCraft | `.partcraft.json` | {{ui:Buka}}, {{key:Mod+O}}, atau lepaskan fail ke paparan 3D |
| Himpunan PartCraft | `.partcraft-asm.json` | Sama: PartCraft mengenal pasti jenisnya |
| Pepejal STEP | `.step`, `.stp` | Jasad pepejal yang dibaca sebagai segi tiga: [Buka fail STEP dan bina atasnya](topic:import-step) |

Jejaring STL, OBJ dan 3MF juga dibuka sebagai jasad pepejal ([Buka STL, OBJ atau 3MF](topic:open-meshes)), begitu juga fail `.3dm` ([Buka model .3dm](topic:open-3dm-files)). DXF, IGES dan fail bahagian asal program lain tidak boleh dibuka (lihat [Apa yang belum dibina](topic:not-built-yet)).

Peraturan semasa membuka:

- Nama fail bahagian atau himpunan mesti berakhir dengan `.json`, dan fail mesti kurang daripada 50 MB.
- Fail disemak sebelum apa-apa dipaparkan. Fail yang rosak atau disunting ditolak dengan sebab yang jelas, contohnya "Ini bukan fail PartCraft."
- Fail yang disimpan oleh PartCraft yang lebih baharu ditolak: "Fail ini disimpan oleh PartCraft yang lebih baharu (versi fail 3); yang ini membaca versi 2." Fail lama dibuka.
- Jika bahagian di skrin mempunyai perubahan yang belum disimpan, PartCraft bertanya dahulu: {{ui:Batal}}, {{ui:Buang perubahan}} atau {{ui:Simpan dahulu}}.

## Menyimpan

{{ui:Simpan}} atau {{key:Mod+S}} menyimpan apa yang ada di skrin:

- Pada bahagian: `<part name>.partcraft.json`, sejarah lengkap (lakaran, hubungan, dimensi, ciri, kedudukan gulung balik), keratan helaian lukisan, perincian dan nota GD&T, dan teks penuh mana-mana pepejal STEP yang diimport dalam binaan terdahulu. Ciri yang tidak dapat dibina oleh versi ini disimpan semula tanpa perubahan. Pepejal itu sendiri tidak disimpan; PartCraft membinanya semula daripada sejarah apabila fail dibuka.
- Dalam himpunan: `<assembly name>.partcraft-asm.json`, dengan **setiap bahagian di dalamnya**. Satu fail membawa keseluruhan himpunan, jadi anda boleh menghantarnya sendiri.

Menyimpan ialah **muat turun**. Pelayar anda meletakkan fail dalam folder muat turunnya, atau bertanya di mana hendak meletakkannya jika anda menetapkannya untuk bertanya. Menyimpan semula mencipta muat turun baharu; pelayar mungkin menamakannya `Part1 (1).partcraft.json` dan bukannya menggantikan yang lama. Namakan semula atau alihkan fail dalam {{pick:mac=Finder|windows=File Explorer|linux=pengurus fail anda}} mengikut kehendak anda.

Aksara selain huruf, digit, ruang, `_`, `.` dan `-` dalam nama bahagian menjadi `_` dalam nama fail.

:::tip
Kebanyakan pelayar mempunyai tetapan untuk bertanya di mana hendak menyimpan setiap muat turun. Hidupkannya jika anda mahukan pilihan "Simpan sebagai" setiap kali: dalam Chrome dan Edge ia berada di bawah Muat turun dalam tetapan; dalam Firefox di bawah Umum, Fail dan Aplikasi; dalam Safari di bawah Umum, Lokasi muat turun fail.
:::

Maklumat lanjut tentang tempat muat turun pergi dan cara memastikan fail selamat: [Di mana fail anda pergi](common:your-files).

## Mengeksport

Menu {{ui:Eksport}} menulis format lain. Setiap satu ialah muat turun, dinamakan mengikut bahagian.

| Item menu | Fail | Kandungannya |
|---|---|---|
| {{ui:STL, untuk percetakan 3D}} | `<name>.stl` | STL binari bagi segi tiga pepejal, milimeter, **Z ke atas** |
| {{ui:3MF, untuk percetakan 3D}} | `<name>.3mf` | 3MF dengan pepejal sebagai satu objek, milimeter, **Z ke atas** |
| {{ui:STEP AP242 (pepejal tepat)}} | `<name>.step` | Satu pepejal tepat, milimeter, Z ke atas: muka bulat sebagai silinder, kon, sfera dan torus yang benar. STEP untuk digunakan dengan program CAD dan CAM lain |
| {{ui:STEP AP214 (pepejal tepat)}} | `<name>.step` | Pepejal tepat yang sama dalam skema AP214 yang lebih lama |
| {{ui:STEP (berfaset, kernel jejaring)}} | `<name>.step` | Pepejal yang diperbuat daripada muka rata dari jejaring: **permukaan bulat ialah banyak fasetan rata kecil**. Milimeter, dalam paksi PartCraft sendiri (Y ke atas). Untuk program yang menolak fail tepat |
| {{ui:DXF bagi lakaran atau muka rata}} | `<name> - <sketch>.dxf` atau `<name> - face.dxf` | DXF R12. Lakaran: garisan, lengkok, bulatan dan titik dalam koordinat lakaran itu sendiri, pada lapisan PROFILE, CONSTRUCTION dan POINTS. Muka rata yang dipilih: garis luarnya sebagai polilgaris tertutup (tepi bulat sebagai fasetnya) |
| {{ui:Lukisan (PDF): paparan, keratan, perincian, GD&T}} | `<name> - drawing.pdf` | Helaian lukisan A3: tiga paparan, isometrik, keratan dan perincian jika ditetapkan, saiz keseluruhan, simbol GD&T, blok tajuk |

:::note
{{ui:STEP AP242 (pepejal tepat)}} menulis lubang, tonjolan, fillet, kon, sfera dan torus pada permukaan benarnya, supaya program lain boleh memilih lubang sebagai silinder; **Lengkung** tidak mengubahnya. Sisi splin, benang yang dimodelkan dan jejaring yang diimport tidak mempunyai permukaan tepat dan kekal sebagai fasetan rata dalam pepejal yang sama; bar status menyatakan berapa banyak. {{ui:STEP (berfaset, kernel jejaring)}} menulis setiap muka bulat sebagai fasetan.
:::

- Eksport ialah bahagian di skrin. Eksport dimatikan dalam himpunan; belum ada eksport himpunan.
- STL, 3MF, STEP berfaset dan DXF muka sentiasa terdiri daripada fasetan. Tetapan **Lengkung** (dalam panel kanan tanpa apa dipilih) menetapkan betapa halusnya, dari 32 hingga 256 fasetan setiap pusingan. Pilih Halus atau Sangat halus sebelum mengeksport STL atau 3MF untuk cetakan yang licin.
- Lukisan PDF menggunakan fon Helvetica terbina dalam pembaca. Aksara yang tidak dapat ditunjukkan dicetak sebagai "?".

Langkah demi langkah: [Eksport untuk percetakan, STEP dan DXF](topic:export-files) dan [Buat helaian lukisan](topic:drawing-pdf).

## Kerja yang belum disimpan

- PartCraft menyimpan salinan pemulihan bahagian atau himpunan yang dibuka dalam pelayar ini sebentar selepas setiap perubahan, supaya ranap atau tab yang ditutup tidak menghilangkannya: kali seterusnya anda membuka PartCraft ia bertanya "Pulihkan kerja anda?". Ini bukan simpanan: simpan ke fail untuk memastikan kerja anda kekal. Lihat [Pulihkan kerja yang belum disimpan](common:recover).
- Jika anda cuba menutup tab atau memuat semula dengan perubahan yang belum disimpan, pelayar bertanya "Tinggalkan laman?". Itu kotak pelayar sendiri; PartCraft tidak boleh menukar ayatnya.
- {{ui:Baharu}}, {{ui:Buka}} dan menutup himpunan bertanya sebelum membuang perubahan yang belum disimpan.

## Dalam talian dan luar talian

Semuanya berlaku di komputer anda: kernel jejaring (program WebAssembly) dimuat turun bersama aplikasi dan membina geometri secara setempat, dan fail dibaca dan ditulis ke cakera anda. Tiada data bahagian melalui rangkaian. Lihat [Kernel jejaring](topic:solid-kernels).

Untuk bekerja tanpa sambungan langsung, simpan PartCraft untuk penggunaan luar talian semasa anda dalam talian: pilih {{ui:Simpan untuk luar talian}} dalam bar aplikasi dan tunggu semasa ia mengira ("Menyimpan 40 daripada 212") sehingga ia menyatakan **Sedia untuk luar talian**. Salinan yang disimpan termasuk pustaka 3D dan kernel jejaring, jadi selepas itu pemodelan, penyimpanan, setiap eksport dan lukisan semuanya berfungsi luar talian. Jika ia menyatakan **Tidak dapat disimpan**, klik untuk mencuba semula semasa dalam talian; **Luar talian tidak tersedia** bermaksud tetingkap pelayar ini tidak dapat menyimpan salinan (tetingkap persendirian dan sesetengah komputer terurus). Dengan salinan disimpan, klik **Sedia untuk luar talian** menawarkan {{ui:Simpan semula (dapatkan versi terkini)}} dan {{ui:Alih keluar salinan luar talian}}. Butiran: [Bekerja luar talian](common:offline).

:::online
Anda dalam talian. Walaupun tanpa menyimpan untuk penggunaan luar talian, selepas PartCraft dimuatkan dan cip bar status menyatakan "Kernel jejaring", anda boleh terus bekerja jika sambungan terputus. Cuma jangan muat semula halaman sehingga anda kembali dalam talian.
:::

:::offline
Anda luar talian. Jika PartCraft sudah dibuka, teruskan bekerja; simpanan dan eksport masih berfungsi. Jika bar aplikasi menyatakan **Sedia untuk luar talian**, PartCraft juga dibuka dari awal tanpa sambungan; jika tidak, jangan muat semula tab ini.
:::

## Perbezaan antara pelayar

- **Muat turun.** Setiap pelayar mempunyai folder muat turunnya sendiri dan cara bertanya sendiri. Jika pelayar bertanya sama ada laman ini boleh memuat turun fail, benarkannya, atau simpanan dan eksport tidak dapat berfungsi.
- **Seret dan lepas** fail ke paparan berfungsi dalam Chrome, Edge, Firefox dan Safari.
- **Fail daripada telefon atau tablet.** Pada iPhone dan iPad, Buka memaparkan apl Files; fail yang disimpan pergi ke Files, Muat turun. Pada Android ia pergi ke folder Muat turun.

Tiada perbezaan dalam apa yang dikandungi fail antara pelayar atau sistem pengendalian.
