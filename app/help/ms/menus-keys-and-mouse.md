---
title: Menu, kekunci dan tetikus
summary: Pilih gaya menu yang sepadan dengan cara anda sudah bekerja, beri mana-mana arahan kekunci anda sendiri, pindahkan arahan antara tab reben, dan tetapkan apa yang dilakukan oleh roda dan setiap butang tetikus dalam paparan 3D.
keywords: gaya menu, menu, reben, bar alat, pokok ciri, pintasan papan kekunci, kekunci pantas, kekunci, sesuaikan, tetapkan semula, tetikus, roda, songsang, arah zum, butang tengah, orbit, pan, eksport, import, bertukar, biasa
from: 8445b06c
---

Arahan PartCraft adalah sama walau bagaimana anda mencapainya. **Gaya menu** hanya menentukan di mana ia terletak pada skrin, apa namanya di sana dan kekunci mana yang menjalankannya. Pilih satu dalam {{ui:Tetapan}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menu, kekunci dan tetikus}}; perubahan berkuat kuasa serta-merta, dan pelayar ini mengingatinya.

## Dua gaya

| Gaya | Apa yang anda dapat |
|---|---|
| {{ui:PartCraft}} | Bar alat PartCraft sendiri: penukar ruang kerja, {{ui:Fail}}, {{ui:Lakaran}}, {{ui:Ciri}}, {{ui:Lukisan}}, {{ui:Himpunan}}, {{ui:Sunting}} dan {{ui:Pandangan}}. Kekunci {{key:S}} lakaran, {{key:F}} muat, {{key:M}} ukur, {{key:X}} paparan keratan. Permulaan. |
| {{ui:Pokok ciri}} | Reben yang disusun seperti cara program CAD mekanikal berasaskan ciri menyusun reben mereka: menu {{ui:Fail}} (dengan setiap eksport), butang pantas, dan tab {{ui:Ciri}}, {{ui:Lakaran}}, {{ui:Permukaan}}, {{ui:Penilaian}}, {{ui:Lukisan}}, {{ui:Himpunan}}, {{ui:Kajian}} (ruang kerja dan alatnya), {{ui:Ilustrasi}} (alat manual ruang kerja Ilustrasi; alatnya bertukar ke Ilustrasi dahulu) serta {{ui:Pandangan}}. {{ui:Ciri}} bermula dengan {{ui:Lakaran}}, kerana bahagian bermula daripada lakaran. Kekunci tambahan: {{key:E}} ekstrud, {{key:H}} lubang, dan {{key:V}} kemudian huruf untuk pandangan: {{key:V}} {{key:F}} depan, {{key:V}} {{key:B}} belakang, {{key:V}} {{key:T}} atas, {{key:V}} {{key:O}} bawah, {{key:V}} {{key:R}} kanan, {{key:V}} {{key:L}} kiri, {{key:V}} {{key:I}} isometrik, {{key:V}} {{key:N}} normal kepada. Dalam paparan 3D, butang tengah mengorbit, {{key:Shift}} dan butang tengah mengepan, butang kanan mengepan dan butang kiri hanya memilih. |

Setiap gaya mengekalkan {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} dan {{key:Mod+A}}.

Alat bagi ruang kerja lain bertukar ke ruang kerja itu dahulu; alat Design yang dipilih dalam ruang kerja lain kembali ke Design dahulu. Alat lakaran menunggu lakaran, alat lukisan menunggu helaian lukisan, dan alat himpunan menunggu himpunan: bar status memberitahu apa yang perlu dilakukan dahulu.

:::tip
Dalam lakaran, pada helaian lukisan, dalam himpunan dan dalam ruang kerja lain, huruf mengekalkan maknanya sendiri di sana ({{key:L}} garisan, {{key:R}} segi empat tepat, {{key:J}} sambungan …) dalam setiap gaya. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} dan anak panah sentiasa mengekalkan maknanya. Kekunci susun atur PartCraft yang diberikan oleh gaya anda kepada arahan lain tidak berbuat apa-apa, dan bar status memberitahu ke mana arahannya pergi.
:::

## Jadikannya milik anda

1. Pilih gaya yang paling hampir dengan apa yang anda mahu, kemudian klik {{ui:Sesuaikan…}}.
2. Pada {{ui:Kekunci dan menu}}, cari arahan (kotak carian membantu). {{ui:Tambah kekunci}} dan tekan kekunci itu, atau dua kekunci berturut-turut. Klik kekunci untuk membuangnya.
3. Dengan reben, {{ui:Tempat ia berada}} memindahkan arahan ke tab dan panel lain, ke menu {{ui:Fail}}, atau ke {{ui:Kekunci sahaja}}.
4. Pada {{ui:Tetikus}}, tetapkan roda, butang yang mengepan lakaran, dan apa yang dilakukan setiap butang dalam paparan 3D.
5. Berikan nama dan klik {{ui:Simpan}}.

Menyimpan gaya terbina dalam membuat salinan anda sendiri ("Pokok ciri saya"); yang terbina dalam tidak berubah. Kekunci yang diberikan kepada dua arahan, atau yang akan dijalankan sebelum kekunci dua huruf sempat ditaip, dipaparkan dalam merah dan mesti dibetulkan sebelum anda boleh menyimpan.

## Tetikus

- **Roda tetikus**: {{ui:Skrol ke atas mengezum masuk}} (permulaan) atau {{ui:Skrol ke atas mengezum keluar}}, dan betapa pantas. Cubitan pad jejak sentiasa mengezum mengikut arah jari anda bergerak.
- **Pan lakaran dengan**: butang tengah, butang kanan, atau kedua-duanya. Klik kanan dalam lakaran masih menamatkan langkah alat.
- **Seret dalam paparan 3D**: {{ui:Setiap pandangan sendiri}} mengekalkan tetapan PartCraft ({{ui:Tetapan}} › {{ui:PartCraft}}: kiri mengorbit, atau tengah mengorbit). Atau tetapkan setiap butang untuk mengorbit, mengepan, zum atau tiada apa; {{key:Shift}} dengan butang orbit mengepan. Klik tanpa menyeret masih memilih.

## Bawa bersama anda

{{ui:Eksport}} menyimpan gaya yang digunakan sebagai fail `.ccinput.json` kecil; {{ui:Import…}} menambahnya, dari komputer lain atau rakan sekerja. Fail yang diimport hanya boleh merujuk arahan PartCraft sendiri: apa-apa lain di dalamnya ditinggalkan dan dikira dalam bar status. {{ui:Padam gaya ini}} membuang satu gaya milik anda sendiri.

:::note
Tetapan ini kekal dalam pelayar ini. {{ui:Gunakan gaya ini dalam setiap aplikasi}} di bawah kad gaya menjadikan setiap aplikasi dibuka dalam gaya yang sepadan (bar alatnya sendiri, atau reben), dengan perubahan yang anda buat dalam setiap aplikasi. Memilih gaya lain dalam satu aplikasi hanya menukar aplikasi itu.
:::

Berkaitan: [Kekunci dan tetikus](topic:keyboard) · [Tetapan PartCraft](topic:settings) · [Datang dari pemodel parametrik lain](topic:coming-from)
