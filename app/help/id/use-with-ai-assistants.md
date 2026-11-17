---
title: Gunakan PartCraft dengan asisten AI
summary: Biarkan asisten AI Anda atau skrip bekerja dengan part yang terbuka: membaca fitur, parameter, dan massanya, mengubah parameter lalu membangun ulang, menjalankan skrip, mengekspor, dan menyimpan. Nonaktif sampai Anda mengaktifkannya.
keywords: ai, asisten, agen, mcp, model context protocol, skrip, otomatisasi, parameter, properti massa, stl, step, 3mf, izin, putuskan, aktivitas, folder
from: e66d3470
---

## Yang akan Anda pelajari

Cara membiarkan asisten AI (atau skrip yang Anda tulis) melihat part yang sedang terbuka, mengubah parameternya, menjalankan skrip dan mengekspornya, serta cara Anda memutuskan apa yang boleh disentuhnya.

PartCraft **tidak memiliki AI sendiri** dan tidak mengirim apa pun ke mana pun. Anda membawa asisten: program apa pun yang menggunakan Model Context Protocol (MCP). PartCraft hanya memberinya alat, dan Anda memilih alat mana yang diberikan.

## Mengaktifkannya

1. Buka {{ui:Pengaturan}} (roda gigi di bilah aplikasi, atau {{key:Mod+,}}) dan buka tab {{ui:PartCraft}}.
2. Di bawah {{ui:Asisten}}, centang **Izinkan asisten AI dan skrip menggunakan PartCraft**. Opsi ini nonaktif sampai Anda melakukannya.
3. Pilih apa yang boleh dilakukannya. **Baca** sudah tercentang sejak awal; centang yang lain hanya saat Anda memerlukannya.
4. Untuk mengizinkannya mengekspor dan menyimpan ke sebuah folder, pilih {{ui:Tambahkan folder…}} di bawah **Folder yang boleh digunakan** dan pilih folder di dialog Studio.

Asisten terhubung melalui **CadCraft Studio** di komputer Anda: Studio menampilkan alamat dan token yang ditempelkan ke asisten. Tab peramban tidak dapat membuka koneksi untuk asisten.

## Yang dapat diminta asisten

| Alat | Izin | Fungsinya |
|---|---|---|
| `part_describe`, `features_list` | Baca | Fitur secara berurutan dengan yang berhasil dan gagal dibangun, material, volume solid, dan ukurannya |
| `params_list` | Baca | Parameter dan setiap angka yang dapat dikendalikan persamaan, beserta nilainya |
| `mass_properties` | Baca | Volume, luas, pusat massa, dan inersia terhadapnya; massa saat part memiliki material |
| `param_set` | Sunting | Mengatur parameter atau angka sebuah fitur lalu membangun ulang. Satu langkah yang dapat Anda urungkan |
| `script_run` | Sunting | Menjalankan skrip CraftScript, Lua, atau Python seperti ruang kerja {{ui:Skrip}}: terisolasi, tanpa file dan tanpa jaringan. Part tidak berubah |
| `part_export` | Ekspor | STL, 3MF, STEP, atau OpenUSD (.usdz, .usda, .usdc), seperti yang ditulis {{ui:File}} › {{ui:Ekspor}} |
| `link_push` | Sunting | Memperbarui model yang ditautkan dari program lain (lihat [Jaga model .3dm tetap langsung](topic:live-3dm-link)) |
| `link_status` | Baca | Menyatakan apakah model tertaut masih ada dan kapan terakhir diperbarui |
| `part_save` | Simpan | {{ui:Simpan}} milik PartCraft sendiri |
| `illustrate_export` | Ekspor | Manual dari ruang kerja {{ui:Illustrate}} sebagai gambar garis PDF atau SVG dari tampilannya, sebagai file 3D interaktif, atau instruksinya sebagai PDF atau halaman web, seperti yang ditulis menu {{ui:Ekspor}} dan {{ui:Instruksi}} ruang kerja ([Manual](topic:illustrate)) |

:::note
Build ini memakai kernel mesh: volume dihitung dari segitiga (sedikit di bawah solid melengkung yang sebenarnya), dan STEP ditulis berfaset, dengan segitiga sebagai pengganti permukaan eksak.
:::

## Anda tetap memegang kendali

- **Setiap perubahan adalah satu langkah urungkan**, diberi label untuk asisten, misalnya "Asisten: atur l = 45". Tekan {{key:Mod+Z}} untuk membatalkannya.
- **Anda tahu saat asisten terhubung.** Sebuah tombol di bilah aplikasi menyebut nama asisten selama terhubung. Klik tombol itu untuk melihat apa yang boleh dilakukannya, atau untuk **Putuskan** koneksinya.
- **Aktivitas.** {{ui:Pengaturan}} › {{ui:PartCraft}} › {{ui:Asisten}} › {{ui:Aktivitas}} mencantumkan setiap panggilan; {{ui:Simpan log}} menyimpan salinannya.
- **Folder.** Asisten hanya membaca dan menulis file di folder yang Anda tambahkan; {{ui:Buang}} langsung mencabut sebuah folder.

## Tanpa membuka PartCraft

Server file CadCraft untuk asisten (`npx @getcadcraft/mcp`) dan baris perintah `cadcraft` membuka part `.partcraft.json` dengan kode PartCraft sendiri dan kernel mesh, tanpa jendela: alat baca yang sama, mengatur parameter, skrip CraftScript, ekspor (termasuk OpenUSD), dan menyimpan. `cadcraft convert bracket.partcraft.json bracket.stl` membangun part dan menuliskannya dari baris perintah. Manual (`.partcraft-manual.json`) juga dapat diekspor di sana: `illustrate_export`, atau `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (tambahkan `--instructions` untuk instruksinya).

## Jika ada yang tidak berfungsi

- **"butuh izin sunting":** centang **Sunting** di bawah {{ui:Asisten}}, lalu minta lagi.
- **"dikendalikan oleh persamaan":** angka itu mengikuti sebuah parameter; minta asisten mengatur parameternya saja.
- **Perubahannya salah:** tekan {{key:Mod+Z}}.

## Lihat juga

- [Resep untuk asisten AI](common:assistants-recipes): contoh kerja, masing-masing dengan alat yang dipanggilnya.
