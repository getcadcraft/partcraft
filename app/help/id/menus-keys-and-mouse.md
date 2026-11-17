---
title: Menu, tombol, dan mouse
summary: Pilih gaya menu yang sesuai dengan cara kerja Anda, beri perintah apa pun tombol Anda sendiri, pindahkan perintah antar tab pita, dan atur apa yang dilakukan roda serta setiap tombol mouse di tampilan 3D.
keywords: gaya menu, menu, pita, bilah alat, pohon fitur, pintasan keyboard, tombol pintas, tombol, sesuaikan, pemetaan ulang, mouse, roda, balik, arah zoom, tombol tengah, orbit, geser, ekspor, impor, beralih, familiar
from: 8445b06c
---

Perintah PartCraft sama, dari mana pun Anda mengaksesnya. **Gaya menu** hanya menentukan di mana perintah berada di layar, apa namanya di sana, dan tombol mana yang menjalankannya. Pilih salah satu di {{ui:Pengaturan}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menu, tombol, dan mouse}}; perubahannya langsung berlaku, dan peramban ini mengingatnya.

## Dua gaya

| Gaya | Yang Anda dapatkan |
|---|---|
| {{ui:PartCraft}} | Bilah alat PartCraft sendiri: pengalih ruang kerja, File, Sketsa, Fitur, Gambar, Rakitan, Sunting, dan Tampilan. Tombol {{key:S}} sketsa, {{key:F}} paskan, {{key:M}} ukur, {{key:X}} tampilan potongan. Titik awal. |
| {{ui:Pohon fitur}} | Pita yang disusun seperti program CAD mekanik berbasis fitur menyusun pitanya: menu {{ui:File}} (dengan semua ekspor), tombol cepat, dan tab {{ui:Fitur}}, {{ui:Sketsa}}, {{ui:Permukaan}}, {{ui:Evaluasi}}, {{ui:Gambar}}, {{ui:Rakitan}}, {{ui:Studi}} (ruang kerja dan alatnya), {{ui:Illustrate}} (alat manual ruang kerja Illustrate; alatnya beralih ke Illustrate lebih dulu), dan {{ui:Tampilan}}. {{ui:Fitur}} dimulai dengan {{ui:Sketsa}}, karena part dimulai dari sketsa. Tombol tambahan: {{key:E}} ekstrusi, {{key:H}} lubang, dan {{key:V}} lalu huruf untuk tampilan: {{key:V}} {{key:F}} depan, {{key:V}} {{key:B}} belakang, {{key:V}} {{key:T}} atas, {{key:V}} {{key:O}} bawah, {{key:V}} {{key:R}} kanan, {{key:V}} {{key:L}} kiri, {{key:V}} {{key:I}} isometrik, {{key:V}} {{key:N}} normal ke. Di tampilan 3D, tombol tengah memutar, {{key:Shift}} dan tombol tengah menggeser, tombol kanan menggeser, dan tombol kiri hanya memilih. |

Setiap gaya tetap menyimpan {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, dan {{key:Mod+A}}.

Alat dari ruang kerja lain akan beralih ke ruang kerja itu lebih dulu; alat Design yang dipilih di ruang kerja lain akan kembali ke Design lebih dulu. Alat sketsa menunggu sebuah sketsa, alat gambar menunggu lembar gambar, dan alat rakitan menunggu rakitan: bilah status menyatakan apa yang harus dilakukan terlebih dulu.

:::tip
Di dalam sketsa, pada lembar gambar, di rakitan, dan di ruang kerja lain, huruf tetap memiliki artinya sendiri di sana ({{key:L}} garis, {{key:R}} persegi panjang, {{key:J}} sambungan …) di setiap gaya. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}}, dan panah selalu mempertahankan artinya. Tombol tata letak PartCraft yang oleh gaya Anda diberikan kepada perintah lain tidak melakukan apa-apa, dan bilah status menyatakan ke mana perintahnya pindah.
:::

## Buat menjadi milik Anda

1. Pilih gaya yang paling dekat dengan yang Anda inginkan, lalu klik {{ui:Sesuaikan…}}.
2. Di {{ui:Tombol dan menu}}, temukan perintah (kotak pencarian membantu). {{ui:Tambah tombol}} lalu tekan tombolnya, atau dua tombol berurutan. Klik tombol untuk melepasnya.
3. Dengan pita, {{ui:Letaknya}} memindahkan perintah ke tab dan panel lain, ke menu {{ui:File}}, atau ke {{ui:Hanya tombol}}.
4. Di {{ui:Mouse}}, atur roda, tombol yang menggeser sketsa, dan apa yang dilakukan setiap tombol di tampilan 3D.
5. Beri nama, lalu klik {{ui:Simpan}}.

Menyimpan gaya bawaan membuat salinan Anda sendiri ("Pohon fitur saya"); gaya bawaan tidak pernah berubah. Tombol yang diberikan kepada dua perintah, atau yang akan berjalan sebelum tombol dua huruf sempat diketik, ditampilkan dengan warna merah dan harus diperbaiki sebelum Anda dapat menyimpannya.

## Mouse

- **Roda mouse**: {{ui:Gulir ke atas memperbesar}} (titik awal) atau {{ui:Gulir ke atas memperkecil}}, dan seberapa cepat. Cubitan trackpad selalu melakukan zoom sesuai arah gerakan jari Anda.
- **Geser sketsa dengan**: tombol tengah, tombol kanan, atau keduanya. Klik kanan di sketsa tetap mengakhiri langkah alat.
- **Seret di tampilan 3D**: {{ui:Sesuai tiap tampilan}} mempertahankan pengaturan PartCraft ({{ui:Pengaturan}} › {{ui:PartCraft}}: kiri untuk orbit, atau tengah untuk orbit). Atau atur setiap tombol untuk orbit, geser, zoom, atau tidak ada; {{key:Shift}} dengan tombol orbit menggeser. Klik tanpa menyeret tetap memilih.

## Bawa bersama Anda

{{ui:Ekspor}} menyimpan gaya yang digunakan sebagai file `.ccinput.json` kecil; {{ui:Impor…}} menambahkannya, dari komputer lain atau rekan kerja. File yang diimpor hanya dapat menunjuk ke perintah PartCraft sendiri: apa pun selain itu dibiarkan dan dihitung di bilah status. {{ui:Hapus gaya ini}} menghapus salah satu gaya Anda sendiri.

:::note
Pengaturan ini tetap ada di peramban ini. {{ui:Gunakan gaya ini di setiap aplikasi}} di bawah kartu gaya membuat setiap aplikasi terbuka dalam gaya yang cocok (bilah alat sendiri, atau pita), dengan perubahan yang Anda buat di setiap aplikasi. Memilih gaya lain di satu aplikasi hanya mengubah aplikasi itu.
:::

Terkait: [Tombol dan mouse](topic:keyboard) · [Pengaturan PartCraft](topic:settings) · [Berpindah dari pemodel parametrik lain](topic:coming-from)
