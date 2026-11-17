---
title: Gunakan PartCraft dengan pembantu AI
summary: Biarkan pembantu AI anda sendiri atau skrip bekerja dengan bahagian yang terbuka: baca ciri, parameter dan jisimnya, tukar parameter dan bina semula, jalankan skrip, eksport dan simpan. Dimatikan sehingga anda menghidupkannya.
keywords: ai, pembantu, ejen, mcp, model context protocol, skrip, automasi, parameter, sifat jisim, stl, step, 3mf, kebenaran, putus sambungan, aktiviti, folder
from: e66d3470
---

## Apa yang akan anda pelajari

Cara membenarkan pembantu AI (atau skrip yang anda tulis) melihat bahagian yang sedang anda buka, menukar parameternya, menjalankan skrip dan mengeksportnya, dan cara anda menentukan apa yang boleh disentuhnya.

PartCraft **tiada AI sendiri** dan tidak menghantar apa-apa ke mana-mana. Anda membawa pembantu: mana-mana program yang menggunakan Model Context Protocol (MCP). PartCraft hanya memberinya alat, dan anda memilih yang mana.

## Hidupkannya

1. Buka {{ui:Tetapan}} (gear dalam bar aplikasi, atau {{key:Mod+,}}) dan pergi ke tab {{ui:PartCraft}}.
2. Di bawah {{ui:Pembantu}}, tandakan **Benarkan pembantu AI dan skrip menggunakan PartCraft**. Ia dimatikan sehingga anda berbuat demikian.
3. Pilih apa yang boleh dilakukannya. **Baca** ditandakan pada mulanya; tandakan yang lain hanya apabila anda memerlukannya.
4. Untuk membenarkannya mengeksport dan menyimpan ke dalam folder, pilih {{ui:Tambah folder…}} di bawah **Folder yang boleh digunakannya** dan pilih folder dalam kotak dialog Studio.

Pembantu bersambung melalui **CadCraft Studio** pada komputer anda: Studio memaparkan alamat dan token untuk ditampal ke dalam pembantu. Tab pelayar tidak boleh membuka sambungan untuk pembantu.

## Apa yang boleh diminta oleh pembantu

| Alat | Kebenaran | Apa yang dilakukannya |
|---|---|---|
| `part_describe`, `features_list` | Baca | Ciri mengikut susunan dengan apa yang dibina dan apa yang gagal, bahan, isi padu dan saiz pepejal |
| `params_list` | Baca | Parameter dan setiap nombor yang boleh dikawal oleh persamaan, beserta nilainya |
| `mass_properties` | Baca | Isi padu, luas, pusat jisim, inersia mengelilinginya; jisim apabila bahagian mempunyai bahan |
| `param_set` | Sunting | Menetapkan parameter atau nombor ciri dan membina semula. Satu langkah yang boleh dibuat asal |
| `script_run` | Sunting | Menjalankan skrip CraftScript, Lua atau Python seperti ruang kerja {{ui:Skrip}}: berkedap, tanpa fail dan tanpa rangkaian. Bahagian tidak berubah |
| `part_export` | Eksport | STL, 3MF, STEP atau OpenUSD (.usdz, .usda, .usdc), seperti yang ditulis oleh {{ui:Fail}} › {{ui:Eksport}} |
| `link_push` | Sunting | Mengemas kini model yang dipautkan daripada program lain (lihat [Simpan model .3dm secara langsung](topic:live-3dm-link)) |
| `link_status` | Baca | Menyatakan sama ada model yang dipautkan masih ada dan bila kali terakhir ia dikemas kini |
| `part_save` | Simpan | {{ui:Simpan}} sendiri PartCraft |
| `illustrate_export` | Eksport | Manual daripada ruang kerja {{ui:Ilustrasi}} sebagai lukisan garis PDF atau SVG bagi pandangannya, sebagai fail 3D interaktif, atau arahannya sebagai PDF atau halaman web, seperti yang ditulis oleh menu {{ui:Eksport}} dan {{ui:Arahan}} ruang kerja ([Manual](topic:illustrate)) |

:::note
Binaan ini menggunakan kernel jejaring: isi padu datang daripada segi tiga (sedikit kurang daripada pepejal melengkung yang sebenar), dan STEP ditulis berfaset, dengan segi tiga dan bukannya permukaan tepat.
:::

## Anda tetap mengawal

- **Setiap perubahan ialah satu langkah buat asal**, dilabel untuk pembantu, contohnya "Pembantu: tetapkan l = 45". Tekan {{key:Mod+Z}} untuk membatalkannya.
- **Anda tahu bila satu disambungkan.** Butang dalam bar aplikasi menamakan pembantu semasa ia bersambung. Klik untuk melihat apa yang boleh dilakukannya, atau untuk **Putuskan sambungan**.
- **Aktiviti.** {{ui:Tetapan}} › {{ui:PartCraft}} › {{ui:Pembantu}} › {{ui:Aktiviti}} menyenaraikan setiap panggilan; {{ui:Simpan log}} menyimpan salinan.
- **Folder.** Ia membaca dan menulis fail hanya dalam folder yang anda tambah; {{ui:Alih keluar}} mengeluarkan folder dengan serta-merta.

## Tanpa membuka PartCraft

Pelayan fail CadCraft untuk pembantu (`npx @getcadcraft/mcp`) dan baris arahan `cadcraft` membuka bahagian `.partcraft.json` dengan kod PartCraft sendiri dan kernel jejaringnya, tanpa tetingkap: alat bacaan yang sama, menetapkan parameter, skrip CraftScript, eksport (termasuk OpenUSD) dan menyimpan. `cadcraft convert bracket.partcraft.json bracket.stl` membina bahagian dan menulisnya dari baris arahan. Manual (`.partcraft-manual.json`) juga boleh dieksport di sana: `illustrate_export`, atau `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (tambah `--instructions` untuk arahan).

## Jika sesuatu tidak berfungsi

- **"perlu kebenaran sunting":** tandakan **Sunting** di bawah {{ui:Pembantu}}, kemudian minta sekali lagi.
- **"dikawal oleh persamaan":** nombor itu mengikut parameter; minta pembantu menetapkan parameter itu sebaliknya.
- **Perubahannya salah:** tekan {{key:Mod+Z}}.

## Lihat juga

- [Resipi untuk pembantu AI](common:assistants-recipes): contoh yang dilaksanakan, setiap satu dengan alat yang dipanggilnya.
